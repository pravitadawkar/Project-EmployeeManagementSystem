using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeManagementSystem.Migrations
{
    public partial class emp1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "EmployeeInfos",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "EmployeeInfos");
        }
    }
}
