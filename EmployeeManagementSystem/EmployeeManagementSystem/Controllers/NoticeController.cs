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
    public class NoticeController : ControllerBase
    {
        INotice _data;
        public NoticeController(INotice data)
        {
            _data = data;
        }
        [HttpGet]
        [Route("GetAllNotice")]
        public IActionResult GetAllNotice()
        {
            var result = _data.GetAllNotice();
            return Ok(result);
        }
        [HttpGet]
        [Route("NoticeById")]
        public IActionResult NoticeById(int id)
        {
            var result = _data.GetNoticeById(id);
            return Ok(result);
        }
        [HttpPost]
        [Route("AddNotice")]
        public IActionResult AddNotice(Notice notice)
        {
            _data.Insert(notice);
            return Ok();
        }
        [HttpPost]
        [Route("UpdateNotice")]
        public IActionResult UpdateNotice(Notice notice)
        {
            try
            {
                _data.Update(notice);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();

            }
        }
        [HttpPost]
        [Route("DeleteNotice")]
        public IActionResult DeleteNotice(int id)
        {
            _data.Delete(id);
            return Ok();
        }
    }
}
