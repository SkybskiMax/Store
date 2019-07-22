using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace StoreDB.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Title { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }

        public string ImgPath { get; set; }
        public string Description { get; set; }

        public List<ProductOrder> ProductOrders { get; set; }
        public IList<ProductCart> ProductCarts { get; set; }

        public Product()
        {
            ProductOrders = new List<ProductOrder>();
        }
    }
}