using System;

namespace EmployeeManagementSystem.ViewModel
{
    public class EmpLeaveDTO
    {
        public int EmpLeaveId { get; set; }
        public int EmployeeId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Reason { get; set; }
        public string Status { get; set; }
    }
}
