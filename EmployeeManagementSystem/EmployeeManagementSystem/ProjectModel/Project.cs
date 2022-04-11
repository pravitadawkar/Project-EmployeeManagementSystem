using EmployeeManagementSystem.EmployeeModel;
using System;
using System.Collections.Generic;

namespace EmployeeManagementSystem.ProjectModel
{
    public class Project
    {
        public int Id { get; set; }
        public string ProjectName { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime SubmitDate { get; set; }
        public int Mark { get; set; }
        public string Status { get; set; }
        public int EmployeeId { get; set; }
        public virtual ICollection<EmployeeInfo> Employeeinfo { get; set; }

    }
}
