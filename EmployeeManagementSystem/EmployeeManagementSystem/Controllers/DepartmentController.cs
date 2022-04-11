using EmployeeManagementSystem.DepartmentModel;
using EmployeeManagementSystem.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace EmployeeManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        IDepartment _data;
        public DepartmentController(IDepartment data)
        {
            _data = data;
        }
        [HttpGet]
        [Route("GetDepartment")]
        public IActionResult GetDepartment()
        {
            var result = _data.GetDepartment();
            return Ok(result);
        }
        [HttpGet]
        [Route("GetDepartmentById")]
        public IActionResult GetDepartmentById(int id)
        {
            var result = _data.GetDepartmentById(id);
            return Ok(result);
        }
        [HttpPost]
        [Route("AddDepartment")]
        public IActionResult AddDepartment(DepartmentDTO department)
        {
            _data.Insert(department);
            return Ok();
        }
        [HttpPost]
        [Route("UpdateDepartment")]
        public IActionResult UpdateDepartment(DepartmentDTO department)
        {
            try
            {
                _data.Update(department);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();

            }
        }
        [HttpPost]
        [Route("DeleteDepartment")]
        public IActionResult DeleteDepartment(DepartmentDTO department)
        {
            _data.Delete(department);
            return Ok();
        }
    }
}
