using EmployeeManagementSystem.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.Interfaces

{
    public interface IEmployeeInfo
    {
        public List<EmployeeDTO> GetEmployeeInfos();
        public EmployeeDTO GetEmployee(int id);
        public void Insert(EmployeeDTO employeeInfo);
        public void Update(EmployeeDTO employeeInfo);
        public void Delete(int id);

    }
}
