
using System;
using System.Collections.Generic;

namespace EmployeeManagementSystem.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string ProjectName { get; set; }
        public string DueDate { get; set; }
        public string SubmitDate { get; set; }
        public string Status { get; set; }
        public virtual ICollection<EmployeeProject> EmployeeProject { get; set; }
    }
}
