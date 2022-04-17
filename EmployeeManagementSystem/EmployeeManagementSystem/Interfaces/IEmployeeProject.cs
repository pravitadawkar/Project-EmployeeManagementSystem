namespace EmployeeManagementSystem.Interfaces
{
    public interface IEmployeeProject
    {
        IEmployeeInfo Employeeinfo { get; }
        IProject Project { get; }
        void Save();
    }
}
