using EmployeeManagementSystem.ViewModel;
using System.Collections.Generic;
using EmployeeManagementSystem.Models;
using EmployeeManagementSystem.Authentication;
using System.Linq;
using EmployeeManagementSystem.Interfaces;

namespace EmployeeManagementSystem.Services
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
            var reslt = (from e in _context.Projects
                         select new ProjectDTO
                         {
                             ProjectId = e.Id,
                             ProjectName = e.ProjectName,
                             DueDate = e.DueDate,
                             SubmitDate = e.SubmitDate,
                             Status = e.Status,

                         }).ToList();
            return reslt;
        }
        public ProjectDTO GetProject(int id)
        {
            var reslt = (from e in _context.Projects
                         select new ProjectDTO
                         {
                             ProjectId = e.Id,
                             ProjectName = e.ProjectName,
                             DueDate = e.DueDate,
                             SubmitDate = e.SubmitDate,
                             Status = e.Status,

                         }).FirstOrDefault();
            return reslt;
        }
        public void Insert(ProjectDTO project)
        {
            Project project1 = new Project();
            project1.Id = project.ProjectId;
            project1.ProjectName = project.ProjectName;
            project1.DueDate = project.DueDate;
            project1.SubmitDate = project.SubmitDate;
            project1.Status = project.Status;
            _context.Add(project1);
            _context.SaveChanges();
        }
        public void Update(ProjectDTO project)
        {
            Project project1 = new Project();
            project1.Id = project.ProjectId;
            project1.ProjectName = project.ProjectName;
            project1.DueDate = project.DueDate;
            project1.SubmitDate = project.SubmitDate;
            project1.Status = project.Status;
            _context.Update(project1);
            _context.SaveChanges();
        }
        public void Delete(int id)
        {
            var project = _context.Projects.Where(e => e.Id == id).FirstOrDefault();

            if (project != null)
            {
                _context.Remove(project);
                _context.SaveChanges();
            }
        }
    }
}
