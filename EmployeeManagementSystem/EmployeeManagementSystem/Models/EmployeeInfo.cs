
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using EmployeeManagementSystem.DepartmentModel;
using EmployeeManagementSystem.TimeSheetSegmentModel;

namespace EmployeeManagementSystem.Models

{
    public class EmployeeInfo
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public string DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string Degree { get; set; }
        public string JoiningDate { get; set; }
        public string DepartmentName { get; set; }
        public virtual ICollection<EmployeeLeave> Employeeleave { get; set; }
        public virtual ICollection<Project> Project { get; set; }
        //public virtual Department Department { get; set; }
        //public virtual TimeSheet TimeSheet { get; set; }
    }
}
