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
using StoreDB.Utils;

namespace Store.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly AppDbContext _context;
        private readonly UserManager<User> _userManager;

        public OrderController(AppDbContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> AddToOrder([FromRoute] int id)
        {

            User user = await _userManager.GetUserAsync(HttpContext.User);
            Product product = await _context.Products.FindAsync(id);

            //   if (Utils.IsAny(user.Orders.Where(c => c.Status == OrderStatus.CURRENT)) == false)
            if (user.Orders == null)
            {
                user.Orders = new List<Order>();
            }
            user.Orders.Add(new Order { UserId = user.Id, Status = OrderStatus.CURRENT });
            await _userManager.UpdateAsync(user);
            await _context.SaveChangesAsync();
       
            //}

            return CreatedAtAction("AddToOrder", user);
        }

        [HttpGet("show")]
        public async Task<IActionResult> GetOrder()
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);
            return CreatedAtAction("GetOrder", user);
        }
    }
}