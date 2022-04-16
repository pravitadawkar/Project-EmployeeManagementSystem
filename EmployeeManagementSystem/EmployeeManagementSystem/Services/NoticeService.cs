using EmployeeManagementSystem.Authentication;
using EmployeeManagementSystem.Interfaces;
using EmployeeManagementSystem.Models;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeManagementSystem.Services
{
    public class NoticeService : INotice
    {
        ApplicationDbContext _context;
        public NoticeService(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Notice> GetAllNotice()
        {
            var result = _context.Notices.ToList();
            return result;
        }
        public Notice GetNoticeById(int id)
        {
            var result = _context.Notices.FirstOrDefault(x => x.Id == id);
            return result;
        }
        public void Insert(Notice notice)
        {
            _context.Add(notice);
            _context.SaveChanges();
        }
        public void Update(Notice notice)
        {
            _context.Update(notice);
            _context.SaveChanges();
        }
        public void Delete(int id)
        {
            var notice = _context.Notices.Where(e => e.Id == id).FirstOrDefault();

            if (notice != null)
            {
                _context.Remove(notice);
                _context.SaveChanges();
            }
        }
    }
}
