using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StoreDB.Contexts;
using StoreDB.Models;

namespace Store.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet()]
        public IEnumerable<Product> GetProducts()
        {
            return _context.Products;
        }

        // GET: api/Products/Listing/Category
        [HttpGet("Listing/{category}")]
        public IEnumerable<Product> GetProductsByCategory([FromRoute] string category)
        {
           return _context.Products.Where(c => c.Category.Name==category);
        }

        // GET: api/Products/Listing/Category/Brand
        [HttpGet("Listing/{category}/{brand}")]
        public IEnumerable<Product> GetProductsByBrand([FromRoute] string category,[FromRoute] string brand)
        {
           return _context.Products.Where(c => c.Brand==brand && c.Category.Name == category);
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // PUT: api/Products/search
        [HttpPost("search")]
        public IEnumerable<Product> SearchProducts([FromQuery] string searchTerm, [FromQuery] string sortOrder)
        {
            if (searchTerm==null) { searchTerm = ""; }
            return _context.Products
                .Where(c => (c.Brand+" "+c.Title)
                .Contains(searchTerm.ToLower()) == true)
                ;
        }


        // PUT: api/Products/5
        [Authorize(Roles = "admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct([FromRoute] int id, [FromBody] Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Products
        [Authorize(Roles = "admin")]
        [HttpPost]
        public async Task<IActionResult> PostProduct([FromBody] Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostProduct", new { id = product.Id }, product);
        }

        // DELETE: api/Products/5
        [Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return Ok(product);
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}