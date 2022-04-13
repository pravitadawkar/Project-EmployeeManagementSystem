using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagementSystem.Authentication;
using EmployeeManagementSystem.ViewModel;

namespace EmployeeManagementSystem.EmployeeModel
{
    public class EmployeeInfoService : IEmployeeInfo
    {
        ApplicationDbContext _context;
        public EmployeeInfoService(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<EmployeeDTO> GetEmployeeInfos()
        {
            var reslt = (from e in _context.EmployeeInfos
                         select new EmployeeDTO
                         {
                             Id = e.Id,
                             FirstName = e.FirstName,
                             LastName = e.LastName,
                             EmailAddress = e.EmailAddress,
                             Address = e.Address,
                             DateOfBirth = e.DateOfBirth,
                             Gender = e.Gender,
                             Degree = e.Degree,
                             JoiningDate = e.JoiningDate,
                             DepartmentName=e.DepartmentName
                         }).ToList();
            return reslt;

        }
        public EmployeeDTO GetEmployee(int id)
        {
            var reslt = (from e in _context.EmployeeInfos
                         select new EmployeeDTO
                         {
                             Id = e.Id,
                             FirstName = e.FirstName,
                             LastName = e.LastName,
                             EmailAddress = e.EmailAddress,
                             Address = e.Address,
                             DateOfBirth = e.DateOfBirth,
                             Gender = e.Gender,
                             Degree = e.Degree,
                             JoiningDate = e.JoiningDate,
                             DepartmentName = e.DepartmentName
                         }).FirstOrDefault();
            return reslt;
        }
        public void Insert(EmployeeDTO employeeInfo)
        {
            EmployeeInfo employeeinfo = new EmployeeInfo();
            employeeinfo.Id = employeeInfo.Id;
            employeeinfo.FirstName = employeeInfo.FirstName;
            employeeinfo.LastName = employeeInfo.LastName;
            employeeinfo.EmailAddress = employeeInfo.EmailAddress;
            employeeinfo.Address = employeeInfo.Address;
            employeeinfo.Gender = employeeInfo.Gender;
            employeeinfo.Degree = employeeInfo.Degree;
            employeeinfo.JoiningDate = employeeInfo.JoiningDate;
            employeeinfo.DepartmentName = employeeInfo.DepartmentName;
            _context.Add(employeeinfo);
            _context.SaveChanges();
        }
        public void Update(EmployeeDTO employeeInfo)
        {
            EmployeeInfo employeeinfo = new EmployeeInfo();
            employeeinfo.Id = employeeInfo.Id;
            employeeinfo.FirstName = employeeInfo.FirstName;
            employeeinfo.LastName = employeeInfo.LastName;
            employeeinfo.EmailAddress = employeeInfo.EmailAddress;
            employeeinfo.Address = employeeInfo.Address;
            employeeinfo.Gender = employeeInfo.Gender;
            employeeinfo.Degree = employeeInfo.Degree;
            employeeinfo.JoiningDate = employeeInfo.JoiningDate;
            employeeinfo.DepartmentName = employeeInfo.DepartmentName;
            _context.Update(employeeinfo);
            _context.SaveChanges();
        }
        public void Delete(int id)
        {
            var employee = _context.EmployeeInfos.Where(e => e.Id == id).FirstOrDefault();

            if (employee != null)
            {
                _context.Remove(employee);
                _context.SaveChanges();
            }
        }
    }
}
