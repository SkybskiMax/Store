using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace StoreDB.Models
{

    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IList<Order> Orders { get; set; } = new List<Order>();
        public Cart Cart { get; set; } = new Cart();
    }
}
