using Microsoft.EntityFrameworkCore.Migrations;

namespace StoreDB.Migrations
{
    public partial class productcart_relationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateTable(
                name: "ProductCart",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false),
                    CartId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCart", x => new { x.ProductId, x.CartId });
                    table.ForeignKey(
                        name: "FK_ProductCart_Cart_CartId",
                        column: x => x.CartId,
                        principalTable: "Cart",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductCart_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductCart_CartId",
                table: "ProductCart",
                column: "CartId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductCart");

            migrationBuilder.AddColumn<string>(
                name: "Test",
                table: "AspNetUsers",
                nullable: true);
        }
    }
}
