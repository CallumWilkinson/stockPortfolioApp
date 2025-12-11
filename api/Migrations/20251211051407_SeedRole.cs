using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class SeedRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "19ce3f7c-91cc-4808-abe6-10c5471b1f07", "234a5f9a-0600-4f5a-943a-90f7a1d66b8d", "Admin", "ADMIN" },
                    { "90a1c56e-3821-425a-816a-580b6a274f48", "63605007-2f5a-44cd-a8b6-672394078977", "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "19ce3f7c-91cc-4808-abe6-10c5471b1f07");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "90a1c56e-3821-425a-816a-580b6a274f48");
        }
    }
}
