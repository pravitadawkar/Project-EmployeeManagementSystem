using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EmployeeManagementSystem.Interfaces;
using EmployeeManagementSystem.ViewModel;
using System;

namespace EmployeeManagementSystem.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EmpLeaveController : ControllerBase
    {
        IEmployeeLeave _data;
        public EmpLeaveController(IEmployeeLeave data)
        {
            _data = data;
        }
        [HttpGet]
        [Route("EmployeeLeaves")]
        public IActionResult EmployeeLeaves()
        {
            var result = _data.GetAllEmpLeave();
            return Ok(result);
        }
        [HttpGet]
        [Route("EmployeeLeaveById")]
        public IActionResult EmployeeLeave(int id)
        {
            var result = _data.GetEmpLeave(id);
            return Ok(result);
        }
        [HttpPost]
        [Route("AddEmployeeLeave")]
        public IActionResult AddEmployeeLeave(EmpLeaveDTO empLeave)
        {
            _data.Insert(empLeave);
            return Ok();
        }
        [HttpPost]
        [Route("UpdateEmployeeLeave")]
        public IActionResult UpdateEmployeeLeave(EmpLeaveDTO empLeave)
        {
            try
            {
                _data.Update(empLeave);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();

            }
        }
        [HttpPost]
        [Route("DeleteEmployeeLaeve")]
        public IActionResult DeleteEmployeeLaeve(int id)
        {
            _data.Delete(id);
            return Ok();
        }
    }
}
