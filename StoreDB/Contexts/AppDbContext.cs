using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using StoreDB.Models;

namespace StoreDB.Contexts
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Product>()
               .HasOne(p => p.Category)
               .WithMany(p => p.Products)
               .HasForeignKey(p => p.CategoryId);

            modelBuilder.Entity<Order>()
               .HasOne(p => p.User)
               .WithMany(p => p.Orders);

            modelBuilder.Entity<User>()
               .HasMany(p => p.Orders)
               .WithOne(p => p.User);

            modelBuilder.Entity<OrderProduct>()
               .HasKey(t => new { t.ProductId, t.OrderId });

            modelBuilder.Entity<OrderProduct>()
                .HasOne(sc => sc.Product)
                .WithMany(s => s.OrderProducts)
                .HasForeignKey(sc => sc.ProductId);

            modelBuilder.Entity<OrderProduct>()
                .HasOne(sc => sc.Order)
                .WithMany(c => c.OrderProducts)
                .HasForeignKey(sc => sc.OrderId);
        }
    }
}