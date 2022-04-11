using EmployeeManagementSystem.ViewModel;
using System.Collections.Generic;

namespace EmployeeManagementSystem.DepartmentModel
{
    public interface IDepartment
    {
        public List<DepartmentDTO> GetDepartment();
        public DepartmentDTO GetDepartmentById(int id);
        public void Insert(DepartmentDTO department);
        public void Update(DepartmentDTO department);
        public void Delete(DepartmentDTO department);

    }
}
