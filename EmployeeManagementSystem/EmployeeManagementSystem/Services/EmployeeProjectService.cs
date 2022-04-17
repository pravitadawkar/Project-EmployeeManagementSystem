using EmployeeManagementSystem.Authentication;
using EmployeeManagementSystem.Interfaces;
using System;

namespace EmployeeManagementSystem.Services
{
    public class EmployeeProjectService : IEmployeeProject
    {
        ApplicationDbContext _context;
        private EmployeeInfoService _employeeInfoService;
        private ProjectService _projectService;
        public EmployeeProjectService(ApplicationDbContext context)
        {
            _context = context;
        }
        public IProject Project => _projectService = _projectService ?? new ProjectService(_context);

        public IEmployeeInfo Employeeinfo => _employeeInfoService = _employeeInfoService ?? new EmployeeInfoService(_context);
        public void Save()
        {
            throw new NotImplementedException();
        }
    }
}
