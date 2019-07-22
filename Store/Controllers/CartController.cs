using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StoreDB.Contexts;
using StoreDB.Models;

namespace Store.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class CartController : Controller
    {
        private readonly AppDbContext _context;
        private readonly UserManager<User> _userManager;

        public CartController(AppDbContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> AddToCart([FromRoute] int id)
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            var product = await _context.Products.FindAsync(id);
            user.Cart.Products.Add(product);
            return CreatedAtAction("AddToCart", user.Cart.Products);
        }

        [HttpGet("show")]
        public async Task<IActionResult> GetCart()
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            return CreatedAtAction("GetCart", user.Cart.Products);
        }
    }
}