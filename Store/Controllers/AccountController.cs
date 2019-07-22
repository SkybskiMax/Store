using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using StoreDB.ViewModels;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using StoreDB.Models;

namespace Store.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<object> Register([FromBody]RegisterUser model)
        {
            if (ModelState.IsValid)
            {
                User user = new User { Email = model.Email, UserName = model.Email };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, "user");
                    await _signInManager.SignInAsync(user, false);
                    return await GenerateJwtTokenAsync(model.Email, user);
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                    return BadRequest(model);
                }
            }
            else
            {
                return BadRequest(model);
            }
        }

        private async Task<object> GenerateJwtTokenAsync(string email, User user)
        {
            IdentityOptions _options = new IdentityOptions();

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, email),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
            };
            var roles = await _userManager.GetRolesAsync(user);

            claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                _configuration["JwtIssuer"],
                _configuration["JwtIssuer"],
                claims: claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpPost("jwt")]
        public object ValidateJWT([FromHeader]string jwt)
        {

            var validationParameters = new TokenValidationParameters()
            {
                ValidIssuer = _configuration["JwtIssuer"],
                ValidAudience = _configuration["JwtIssuer"],
                ClockSkew = System.TimeSpan.Zero,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]))
            };

            var handler = new JwtSecurityTokenHandler();
            SecurityToken validatedToken;

            string id = "";
            string email = "";
    
            IEnumerable<string> roles = new List<string>();
            try
            {
                ClaimsPrincipal claims = handler.ValidateToken(jwt, validationParameters, out validatedToken);

                id = claims.Claims.Where(c => c.Type == ClaimTypes.NameIdentifier)
                       .Select(c => c.Value).SingleOrDefault();
                email = claims.Claims.Where(c => c.Type == ClaimTypes.Email)
                                   .Select(c => c.Value).SingleOrDefault();
                roles = claims.Claims.Where(c => c.Type == ClaimTypes.Role)
                                   .Select(c => c.Value);
                return new { id, email, roles };
            }
            catch
            {
                return new { };
            }
        }


        [HttpPost("login")]
        public async Task<object> Login([FromBody]LoginUser model)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, false);
                if (result.Succeeded)
                {
                    var appUser = _userManager.Users.SingleOrDefault(r => r.Email == model.Email);
                    var token = await GenerateJwtTokenAsync(model.Email, appUser);
                    var role = await _userManager.GetRolesAsync(appUser);
                    return Json(new { JWT = token, email = model.Email, role });
                }
                else
                {
                    return NotFound("No such user");
                }
            }
            throw new ApplicationException("INVALID_LOGIN_ATTEMPT");
        }


        [HttpPost]
        public async Task<IActionResult> LogOff()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}