using System;

namespace EmployeeManagementSystem.ViewModel
{
    public class ProjectDTO
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string DueDate { get; set; }
        public string SubmitDate { get; set; }
        public string Status { get; set; }
        //public int EmployeeId { get; set; }
    }
}
