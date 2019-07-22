using System;
using System.Collections.Generic;
using System.Text;

namespace StoreDB.Models
{

    public class Cart
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public IList<Product> Products { get; set; } = new List<Product>();
        public IList<ProductCart> ProductCarts { get; set; }
    }
}
