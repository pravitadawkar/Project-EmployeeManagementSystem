using EmployeeManagementSystem.Models;
using System.Collections.Generic;

namespace EmployeeManagementSystem.Interfaces
{
    public interface INotice
    {
        public List<Notice> GetAllNotice();
        public Notice GetNoticeById(int id);
        public void Insert(Notice notice);
        public void Update(Notice notice);
        public void Delete(int id);
    }
}
