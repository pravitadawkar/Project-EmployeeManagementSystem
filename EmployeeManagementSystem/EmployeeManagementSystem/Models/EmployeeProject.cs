namespace EmployeeManagementSystem.Models
{
    public class EmployeeProject
    {
        public int EmployeeId { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
        public EmployeeInfo Employeeinfo { get; set; }
    }
}
