using EmployeeManagementSystem.ViewModel;
using System.Collections.Generic;
namespace EmployeeManagementSystem.EmployeeLeaveModel
{
    public interface IEmployeeLeave
    {
        public List<EmpLeaveDTO> GetAllEmpLeave();
        public EmpLeaveDTO GetEmpLeave(int id);
        public void Insert(EmpLeaveDTO empLeave);
        public void Update(EmpLeaveDTO empLeave);
        public void Delete(EmpLeaveDTO empLeave);
    }
}
