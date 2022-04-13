using Microsoft.EntityFrameworkCore.Migrations;

namespace EmployeeManagementSystem.Migrations
{
    public partial class leave : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EmployeeInfos_Departments_DepartmentId",
                table: "EmployeeInfos");

            migrationBuilder.DropIndex(
                name: "IX_EmployeeInfos_DepartmentId",
                table: "EmployeeInfos");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "EmployeeInfos");

            migrationBuilder.AddColumn<string>(
                name: "DepartmentName",
                table: "EmployeeInfos",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DepartmentName",
                table: "EmployeeInfos");

            migrationBuilder.AddColumn<int>(
                name: "DepartmentId",
                table: "EmployeeInfos",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeInfos_DepartmentId",
                table: "EmployeeInfos",
                column: "DepartmentId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_EmployeeInfos_Departments_DepartmentId",
                table: "EmployeeInfos",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
