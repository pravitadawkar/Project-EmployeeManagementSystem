using EmployeeManagementSystem.ViewModel;
using System.Collections.Generic;
using EmployeeManagementSystem.Authentication;
using System.Linq;

namespace EmployeeManagementSystem.DepartmentModel
{
    public class DepartmentService : IDepartment
    {
        ApplicationDbContext _context;
        public DepartmentService(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<DepartmentDTO> GetDepartment()
        {
            var result = (from
                           d in _context.Departments
                          select new DepartmentDTO
                          {
                              Id = d.Id,
                              DepartmentName = d.DepartmentName,
                              CreatedAT = d.CreatedAT,
                              CreatedBY = d.CreatedBY,
                              IsActive = d.IsActive,
                          }).ToList();
            return result;
        }
        public DepartmentDTO GetDepartmentById(int id)
        {
            var result = (from
                           d in _context.Departments
                          select new DepartmentDTO
                          {
                              Id = d.Id,
                              DepartmentName = d.DepartmentName,
                              CreatedAT = d.CreatedAT,
                              CreatedBY = d.CreatedBY,
                              IsActive = d.IsActive,
                          }).FirstOrDefault();
            return result;
        }
        public void Insert(DepartmentDTO department)
        {
                Department department1 = new Department();
                department1.Id = department.Id;
                department1.DepartmentName = department.DepartmentName;
                department1.CreatedAT = department.CreatedAT;
                department1.CreatedBY = department.CreatedBY;
                department1.IsActive = department.IsActive;
                //department1.EmployeeId = department.EmployeeId;
                _context.Add(department1);
                _context.SaveChanges();
        }
        public void Update(DepartmentDTO department)
        {
            Department department1 = new Department();
            department1.Id = department.Id;
            department1.DepartmentName = department.DepartmentName;
            department1.CreatedAT = department.CreatedAT;
            department1.CreatedBY = department.CreatedBY;
            department1.IsActive = department.IsActive;
           // department1.EmployeeId = department.EmployeeId;
            _context.Update(department1);
            _context.SaveChanges();
        }
        public void Delete(DepartmentDTO department)
        {
            Department department1 = new Department();
            department1.Id = department.Id;
            department1.DepartmentName = department.DepartmentName;
            department1.CreatedAT = department.CreatedAT;
            department1.CreatedBY = department.CreatedBY;
            department1.IsActive = department.IsActive;
            //department1.EmployeeId = department.EmployeeId;
            _context.Remove(department1);
            _context.SaveChanges();
        }
    }
}
