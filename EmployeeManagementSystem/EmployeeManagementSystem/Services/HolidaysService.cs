using EmployeeManagementSystem.Authentication;
using EmployeeManagementSystem.Interfaces;
using EmployeeManagementSystem.Models;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeManagementSystem.Services
{
    public class HolidaysService : IHolidays
    {
        ApplicationDbContext _context;
        public HolidaysService(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<Holidays> GetAllHoliday()
        {
            var result = _context.holidays.ToList();
            return result;
        }
        public Holidays GetHolidays(int id)
        {
            var result = _context.holidays.FirstOrDefault
                (h => h.Id == id);
            return result;
        }
        public void Insert(Holidays holiday)
        {
            _context.Add(holiday);
            _context.SaveChanges();
        }
        public void Update(Holidays holiday)
        {
            _context.Update(holiday);
            _context.SaveChanges();
        }
        public void Delete(int id)
        {
            var holiday = _context.holidays.Where(e => e.Id == id).FirstOrDefault();

            if (holiday != null)
            {
                _context.Remove(holiday);
                _context.SaveChanges();
            }
        }
    }
}
