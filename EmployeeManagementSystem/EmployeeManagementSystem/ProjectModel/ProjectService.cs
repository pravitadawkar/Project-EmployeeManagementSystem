using EmployeeManagementSystem.ViewModel;
using System.Collections.Generic;
using EmployeeManagementSystem.EmployeeModel;
using EmployeeManagementSystem.Authentication;
using System.Linq;

namespace EmployeeManagementSystem.ProjectModel
{
    public class ProjectService : IProject
    {
        ApplicationDbContext _context;
        public ProjectService(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<ProjectDTO> GetProjects()
        {
            var result = (from
                           p in _context.Projects
                          select new ProjectDTO
                          {
                              EmployeeId = p.EmployeeId,
                              ProjectId = p.Id,
                              ProjectName = p.ProjectName,
                              DueDate = p.DueDate,
                              SubmitDate = p.SubmitDate,
                              Mark = p.Mark,
                              Status = p.Status
                          }).ToList();
            return result;
        }
        public ProjectDTO GetProject(int id)
        {
            var result = (from
                           p in _context.Projects
                          where p.EmployeeId == id
                          select new ProjectDTO
                          {
                              EmployeeId = p.EmployeeId,
                              ProjectId = p.Id,
                              ProjectName = p.ProjectName,
                              DueDate = p.DueDate,
                              SubmitDate = p.SubmitDate,
                              Mark = p.Mark,
                              Status = p.Status
                          }).FirstOrDefault();
            return result;
        }
        public void Insert(ProjectDTO project)
        {
            var isEmployeExist = _context.EmployeeInfos.FirstOrDefault(e => e.Id == project.EmployeeId);
            if (isEmployeExist != null)
            {
                Project project1 = new Project();
                project1.Id = project.ProjectId;
                project1.ProjectName = project.ProjectName;
                project1.DueDate = project.DueDate;
                project1.SubmitDate = project.SubmitDate;
                project1.Mark = project.Mark;
                project1.Status = project.Status;
                project1.EmployeeId = project.EmployeeId;
                _context.Add(project1);
                _context.SaveChanges();
            }
        }
        public void Update(ProjectDTO project)
        {
            Project project1 = new Project();
            project1.Id = project.ProjectId;
            project1.ProjectName = project.ProjectName;
            project1.DueDate = project.DueDate;
            project1.SubmitDate = project.SubmitDate;
            project1.Mark = project.Mark;
            project1.Status = project.Status;
            project1.EmployeeId = project.EmployeeId;
            _context.Update(project1);
            _context.SaveChanges();
        }
        public void Delete(ProjectDTO project)
        {
            Project project1 = new Project();
            project1.Id = project.ProjectId;
            project1.ProjectName = project.ProjectName;
            project1.DueDate = project.DueDate;
            project1.SubmitDate = project.SubmitDate;
            project1.Mark = project.Mark;
            project1.Status = project.Status;
            project1.EmployeeId = project.EmployeeId;
            _context.Remove(project1);
            _context.SaveChanges();
        }
    }
}
