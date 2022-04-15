using EmployeeManagementSystem.Authentication;
using EmployeeManagementSystem.Models;
using EmployeeManagementSystem.ViewModel;
using System.Collections.Generic;
using System.Linq;
using EmployeeManagementSystem.Interfaces;


namespace EmployeeManagementSystem.Services
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
            var result = (from e in _context.EmployeeInfos
                          join el in _context.EmployeeLeaves on e.Id equals el.EmployeeId
                          select new EmpLeaveDTO
                          {
                              EmployeeId = el.EmployeeId,
                              EmpLeaveId = el.Id,
                              FirstName =e.FirstName,
                              LastName=e.LastName,
                              StartDate = el.StartDate,
                              EndDate = el.EndDate,
                              Reason = el.Reason,
                              Status = el.Status,
                          }).ToList();
            return result;

        }
        public EmpLeaveDTO GetEmpLeave(int Employeeid)
        {
            var result = (from e in _context.EmployeeInfos
                          join el in _context.EmployeeLeaves on e.Id equals el.EmployeeId
                          where e.Id==Employeeid
                          select new EmpLeaveDTO
                          {
                              EmployeeId = el.EmployeeId,
                              EmpLeaveId=el.Id,
                              FirstName = e.FirstName,
                              LastName = e.LastName,
                              StartDate = el.StartDate,
                              EndDate = el.EndDate,
                              Reason = el.Reason,
                              Status = el.Status,
                          }).FirstOrDefault();
            return result;

        }
        public void Insert(EmpLeaveDTO empLeave)
        {
            var isEmployeExist = _context.EmployeeInfos.FirstOrDefault(e => e.Id == empLeave.EmployeeId);
            if (isEmployeExist != null)
            {
                EmployeeLeave employeeLeave = new EmployeeLeave();
                employeeLeave.Id = empLeave.EmpLeaveId;
                employeeLeave.StartDate = empLeave.StartDate;
                employeeLeave.EndDate = empLeave.EndDate;
                employeeLeave.Reason = empLeave.Reason;
                employeeLeave.Status = empLeave.Status;
            employeeLeave.EmployeeId = empLeave.EmployeeId;


                _context.Add(employeeLeave);
                _context.SaveChanges();

                EmployeeInfo employee = new EmployeeInfo();
                //employee.Id = empLeave.EmployeeId;
                employee.FirstName = empLeave.FirstName;
                employee.LastName = empLeave.LastName;
                _context.Add(employee);
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

            EmployeeInfo employee = new EmployeeInfo();
           // employee.Id = empLeave.EmployeeId;
            employee.FirstName = empLeave.FirstName;
            employee.LastName = empLeave.LastName;
            _context.Update(employee);
            _context.SaveChanges();
        }
        public void Delete(int id)
        {
            var employeeleave = _context.EmployeeLeaves.Where(e => e.Id == id).FirstOrDefault();

            if (employeeleave != null)
            {
                _context.Remove(employeeleave);
                _context.SaveChanges();
            }
        }
            
    }
}
