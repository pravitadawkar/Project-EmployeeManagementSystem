//using EmployeeManagementSystem.DepartmentModel;
using EmployeeManagementSystem.Models;
using EmployeeManagementSystem.TimeSheetSegmentModel;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagementSystem.Authentication
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<EmployeeLeave>()
           .HasOne(el => el.Employeeinfo)
           .WithMany(e => e.Employeeleave)
           .HasForeignKey(el => el.EmployeeId);

            builder.Entity<EmployeeProject>().HasKey(ep => new { ep.EmployeeId, ep.ProjectId });

            builder.Entity<EmployeeProject>().HasOne(ep => ep.Employeeinfo)
                .WithMany(ep => ep.EmployeeProject)
                .HasForeignKey(ep => ep.EmployeeId);

            builder.Entity<EmployeeProject>().HasOne(ep => ep.Project)
                .WithMany(ep => ep.EmployeeProject)
                .HasForeignKey(ep => ep.ProjectId);

            //builder.Entity<Department>()
            //    .HasOne<EmployeeInfo>(e => e.Employeeinfo)
            //    .WithOne(d => d.Department)
            //   .HasForeignKey<EmployeeInfo>(d => d.DepartmentId);

            //builder.Entity<EmployeeInfo>()
            //   .HasMany<Project>(e => e.Project)
            //   .WithMany(p => p.Employeeinfo)
            //   .Map(pe =>
            //   {
            //       pe.MapLeftKey("employeeinforefid");
            //       pe.MapRightKey("projectrefid");
            //       pe.ToTable("empinfoproject");
            //   });
        }
        public DbSet<EmployeeInfo> EmployeeInfos { get; set; }
        public DbSet<EmployeeLeave> EmployeeLeaves { get; set; }
        public DbSet<Project> Projects { get; set; }
        //public DbSet<Department> Departments { get; set; }
        //public DbSet<TimeSheet> TimeSheets { get; set; }
        public DbSet<Notice> Notices { get; set; }
        public DbSet<Holidays> holidays { get; set; }
    }
}
