using System;
using EmployeeManagementSystem.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagementSystem.ViewModel;

namespace EmployeeManagementSystem.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeInfoController : ControllerBase
    {
        IEmployeeInfo _data;
        public EmployeeInfoController(IEmployeeInfo data)
        {
            _data = data;
        }
        [HttpGet]
        [Route("GetEmployeeInfos")]
        public IActionResult GetEmployeeInfos()
        {
            var result = _data.GetEmployeeInfos();
            return Ok(result);
        }
        [HttpGet]
        [Route("GetEmployeeInfo")]
        public IActionResult GetEmployeeInfo(int id)
        {
            var result = _data.GetEmployee(id);
            return Ok(result);
        }
        [HttpPost]
        [Route("AddEmployeeInfo")]
        public IActionResult AddEmployeeInfo(EmployeeDTO employeeInfo)
        {
            _data.Insert(employeeInfo);
            return Ok();
        }
        [HttpPost]
        [Route("UpdateEmployeeInfo")]
        public IActionResult UpdateEmployeeInfo(EmployeeDTO employeeInfo)
        {
            _data.Update(employeeInfo);
            return Ok();
        }
        [HttpPost]
        [Route("DeleteEmployeeInfo")]
        public IActionResult DeleteEmployeeInfo(int id)
        {
            _data.Delete(id);
            return Ok();
        }
    }
}
