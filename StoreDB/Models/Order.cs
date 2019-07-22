using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StoreDB.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public List<ProductOrder> ProductOrders { get; set; }

        public Order()
        {
            ProductOrders = new List<ProductOrder>();
        }
    }
}
