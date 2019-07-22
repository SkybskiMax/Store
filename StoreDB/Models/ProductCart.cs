using System;
using System.Collections.Generic;
using System.Text;

namespace StoreDB.Models
{ 
    public class ProductCart
    {
        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int CartId { get; set; }
        public Cart Cart { get; set; }
    }
}
