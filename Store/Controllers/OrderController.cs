using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StoreDB.Contexts;
using StoreDB.Models;
using StoreDB.Utils;
using System.Linq;
using System.Threading.Tasks;

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

            var userOrders = _context.Orders
                .Where(x => x.UserId == user.Id)
                .Include(x => x.OrderProducts);

            Product product = await _context.Products.FindAsync(id);

            if (Utils.IsAny(userOrders.Where(c => c.Status == OrderStatus.CURRENT)))
            {
                Order currentOrder = userOrders
                    .Where(x => x.Status == OrderStatus.CURRENT).SingleOrDefault();

                currentOrder.OrderProducts.Add(new OrderProduct { Product = product });
                _context.SaveChanges();
            }
            else
            {
                user.Orders.Add(new Order { UserId = user.Id, Status = OrderStatus.CURRENT });
            }
            await _userManager.UpdateAsync(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction("AddToOrder", user);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFromOrder([FromRoute] int id)
        {

            User user = await _userManager.GetUserAsync(HttpContext.User);
            var userOrders = _userManager.Users
                .Where(x => x.Email == user.Email)
                .Include(x => x.Orders)
                .SingleOrDefault();
            // userOrders

            //if (Utils.IsAny(user.Orders.Where(c => c.Status == OrderStatus.CURRENT)) == false)
            /*
            if (Utils.IsAny(user.Orders) == true)
            {
                user.Orders.Add(new Order { UserId = user.Id, Status = OrderStatus.CURRENT });
            }
            else
            {
                user.Orders 
            }

            */
            await _userManager.UpdateAsync(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction("AddToOrder", userOrders);
        }

        [HttpGet("show")]
        public async Task<IActionResult> GetOrders()
        {
            User user = await _userManager.GetUserAsync(HttpContext.User);
            var userOrders = _context.Orders
                .Where(x => x.UserId == user.Id)
                .Include(x => x.OrderProducts);

            return CreatedAtAction("GetOrders", userOrders);
        }
    }
}