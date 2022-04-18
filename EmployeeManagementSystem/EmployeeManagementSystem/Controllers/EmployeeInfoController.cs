using System;
using EmployeeManagementSystem.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeeManagementSystem.ViewModel;
using Microsoft.AspNetCore.Identity;
using EmployeeManagementSystem.Authentication;

namespace EmployeeManagementSystem.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeInfoController : ControllerBase
    {
        IEmployeeInfo _data;
        private readonly UserManager<ApplicationUser> userManager;

        public EmployeeInfoController(UserManager<ApplicationUser> userManager, IEmployeeInfo data)
        {
            this.userManager = userManager;
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
        public async Task<IActionResult> AddEmployeeInfoAsync(EmployeeDTO employeeInfo)
        {
            try
            {
                var userExists = await userManager.FindByNameAsync(employeeInfo.FirstName);
                if (userExists != null)
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

                ApplicationUser user = new ApplicationUser()
                {
                    Email = employeeInfo.EmailAddress,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = employeeInfo.FirstName,
                };
                var result = await userManager.CreateAsync(user, "Password@123");
                var roleresult = userManager.AddToRoleAsync(user, employeeInfo.Role).Result;
                employeeInfo.UserId = user.Id;
                _data.Insert(employeeInfo);
                return Ok();
            }
            catch (Exception ex)
            {
                if (ex.InnerException is ArgumentException)
                {
                    return StatusCode(400, ex.InnerException.Message);
                }

                return StatusCode(statusCode: 500, ex.Message + ";" + ex.InnerException?.Message);
            }
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
