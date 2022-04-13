using EmployeeManagementSystem.EmployeeModel;
namespace EmployeeManagementSystem.DepartmentModel
{
    public class Department
    {
        public int Id { get; set; }
        public string DepartmentName { get; set; }
        public string CreatedAT { get; set; }
        public string CreatedBY { get; set; }
        public bool IsActive { get; set; }
        //public int EmployeeId { get; set; }
        //public virtual EmployeeInfo Employeeinfo { get; set; }
    }
}
