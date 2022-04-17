using EmployeeManagementSystem.Interfaces;
using EmployeeManagementSystem.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace EmployeeManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        IProject _data;
        public ProjectController(IProject data)
        {
            _data = data;
        }
        [HttpGet]
        [Route("AllProjects")]
        public IActionResult AllProjects()
        {
            var result = _data.GetProjects();
            return Ok(result);
        }
        [HttpGet]
        [Route("Project")]
        public IActionResult Project(int id)
        {
            var result = _data.GetProject(id);
            return Ok(result);
        }
        [HttpPost]
        [Route("AddProject")]
        public IActionResult AddProject(ProjectDTO project)
        {
            _data.Insert(project);
            return Ok();
        }
        [HttpPost]
        [Route("UpdateProject")]
        public IActionResult UpdateProject(ProjectDTO project)
        {
            try
            {
                _data.Update(project);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();

            }
        }
        [HttpPost]
        [Route("DeleteProject")]
        public IActionResult DeleteProject(int id)
        {
            _data.Delete(id);
            return Ok();
        }
    }
}
