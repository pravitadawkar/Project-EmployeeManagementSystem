using EmployeeManagementSystem.Models;
using System.Collections.Generic;

namespace EmployeeManagementSystem.Interfaces
{
    public interface IHolidays
    {
        public List<Holidays> GetAllHoliday();
        public Holidays GetHolidays(int id);
        public void Insert(Holidays holiday);
        public void Update(Holidays holiday);
        public void Delete(int id);

    }
}
