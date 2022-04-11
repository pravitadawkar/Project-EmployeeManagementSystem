using System;

namespace EmployeeManagementSystem.TimeSheetSegmentModel
{
    public class TimeSheet
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public int EmployeeId { get; set; }
        public DateTime Date { get; set; }
        public DateTime StratTime { get; set; }
        public DateTime EndTime { get; set; }

    }
}
