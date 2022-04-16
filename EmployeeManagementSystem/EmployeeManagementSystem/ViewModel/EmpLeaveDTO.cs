using System;

namespace EmployeeManagementSystem.ViewModel
{
    public class EmpLeaveDTO
    {
        public int EmpLeaveId { get; set; }
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Reason { get; set; }
        public string Status { get; set; }
    }
}
