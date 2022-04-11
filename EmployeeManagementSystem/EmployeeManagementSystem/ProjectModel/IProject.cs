using EmployeeManagementSystem.ViewModel;
using System.Collections.Generic;

namespace EmployeeManagementSystem.ProjectModel
{
    public interface IProject
    {
        public List<ProjectDTO> GetProjects();
        public ProjectDTO GetProject(int id);
        public void Insert(ProjectDTO project);
        public void Update(ProjectDTO project);
        public void Delete(ProjectDTO project);

    }
}
