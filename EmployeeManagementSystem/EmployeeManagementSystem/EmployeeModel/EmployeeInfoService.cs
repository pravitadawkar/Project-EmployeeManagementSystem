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
                             DepartmentId=e.DepartmentId
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
                             DepartmentId=e.DepartmentId
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
            employeeinfo.DepartmentId = employeeInfo.DepartmentId;
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
            employeeinfo.DepartmentId = employeeInfo.DepartmentId;
            _context.Update(employeeinfo);
            _context.SaveChanges();
        }
        public void Delete(EmployeeDTO employeeInfo)
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
            employeeinfo.DepartmentId = employeeInfo.DepartmentId;
            _context.Remove(employeeinfo);
            _context.SaveChanges();
        }
    }
}
