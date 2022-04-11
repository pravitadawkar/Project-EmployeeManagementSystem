using EmployeeManagementSystem.Authentication;
using EmployeeManagementSystem.EmployeeModel;
using EmployeeManagementSystem.ViewModel;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeManagementSystem.EmployeeLeaveModel
{
    public class EmployeeLeaveService : IEmployeeLeave
    {
        ApplicationDbContext _context;
        public EmployeeLeaveService(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<EmpLeaveDTO> GetAllEmpLeave()
        {
            var result = (from
                           el in _context.EmployeeLeaves
                          select new EmpLeaveDTO
                          {
                              EmployeeId = el.EmployeeId,
                              StartDate = el.StartDate,
                              EndDate = el.EndDate,
                              Reason = el.Reason,
                              Status = el.Status,
                          }).ToList();
            return result;

        }
        public List<EmpLeaveDTO> GetEmpLeave(int Employeeid)
        {
            var result = _context.EmployeeLeaves.Where(e => e.EmployeeId == Employeeid).Select(e => new EmpLeaveDTO()
            {
               
                EmployeeId = e.EmployeeId,
                EndDate = e.EndDate,
                StartDate = e.StartDate,
                Reason = e.Reason,
                Status = e.Status,
            }).ToList();
            return result;
        }
        public void Insert(EmpLeaveDTO empLeave)
        {
            var isEmployeExist = _context.EmployeeInfos.FirstOrDefault(e => e.Id == empLeave.EmployeeId);
            if (isEmployeExist != null)
            {
                EmployeeLeave employeeLeave = new EmployeeLeave();
                employeeLeave.StartDate = empLeave.StartDate;
                employeeLeave.EndDate = empLeave.EndDate;
                employeeLeave.Reason = empLeave.Reason;
                employeeLeave.Status = empLeave.Status;
                employeeLeave.EmployeeId = empLeave.EmployeeId;
                _context.Add(employeeLeave);
                _context.SaveChanges();
            }
        }
        public void Update(EmpLeaveDTO empLeave)
        {
            EmployeeLeave employeeLeave = new EmployeeLeave();
            employeeLeave.Id = empLeave.EmpLeaveId;
            employeeLeave.StartDate = empLeave.StartDate;
            employeeLeave.EndDate = empLeave.EndDate;
            employeeLeave.Reason = empLeave.Reason;
            employeeLeave.Status = empLeave.Status;
            employeeLeave.EmployeeId = empLeave.EmployeeId;
            _context.Update(employeeLeave);
            _context.SaveChanges();
        }
        public void Delete(EmpLeaveDTO empLeave)
        {
            EmployeeLeave employeeLeave = new EmployeeLeave();
            employeeLeave.Id = empLeave.EmpLeaveId;
            employeeLeave.StartDate = empLeave.StartDate;
            employeeLeave.EndDate = empLeave.EndDate;
            employeeLeave.Reason = empLeave.Reason;
            employeeLeave.Status = empLeave.Status;
            employeeLeave.EmployeeId = empLeave.EmployeeId;
            _context.Remove(employeeLeave);
            _context.SaveChanges();
        }
    }
}
