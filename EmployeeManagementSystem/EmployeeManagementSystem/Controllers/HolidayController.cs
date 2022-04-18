using EmployeeManagementSystem.Interfaces;
using EmployeeManagementSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace EmployeeManagementSystem.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class HolidayController : ControllerBase
    {
        IHolidays _data;
        public HolidayController(IHolidays data)
        {
            _data = data;
        }
        [HttpGet]
        [Route("GetAllHolidays")]
        public IActionResult GetAllHolidays()
        {
            var result = _data.GetAllHoliday();
            return Ok(result);
        }
        [HttpGet]
        [Route("HolidayById")]
        public IActionResult HolidayById(int id)
        {
            var result = _data.GetHolidays(id);
            return Ok(result);
        }
        [HttpPost]
        [Route("AddHolidays")]
        public IActionResult AddHolidays(Holidays holiday)
        {
            _data.Insert(holiday);
            return Ok();
        }
        [HttpPost]
        [Route("UpdateHolidays")]
        public IActionResult UpdateHolidays(Holidays holiday)
        {
            try
            {
                _data.Update(holiday);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();

            }
        }
        [HttpPost]
        [Route("DeleteHolidays")]
        public IActionResult DeleteHolidays(int id)
        {
            _data.Delete(id);
            return Ok();
        }
    }
}
