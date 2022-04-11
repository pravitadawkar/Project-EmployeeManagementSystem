﻿using EmployeeManagementSystem.DepartmentModel;
using EmployeeManagementSystem.EmployeeLeaveModel;
using EmployeeManagementSystem.EmployeeModel;
using EmployeeManagementSystem.ProjectModel;
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

            builder.Entity<EmployeeInfo>()
           .HasOne<EmployeeLeave>(e => e.Employeeleave)
           .WithOne(el => el.Employeeinfo)
           .HasForeignKey<EmployeeLeave>(e => e.EmployeeId);

            builder.Entity<Department>()
                .HasOne<EmployeeInfo>(e => e.Employeeinfo)
                .WithOne(d => d.Department)
               .HasForeignKey<EmployeeInfo>(d => d.DepartmentId);

            //builder.Entity<EmployeeInfo>()
            //    .HasMany<Project>(e => e.Project)
            //    .WithMany(p => p.Employeeinfo)
            //    .Map(pe =>
            //    {
            //        pe.MapLeftKey("EmployeeInfoRefId");
            //        pe.MapRightKey("ProjectRefId");
            //        pe.ToTable("EmpInfoProject");
            //    });
        }
        public DbSet<EmployeeInfo> EmployeeInfos { get; set; }
        public DbSet<EmployeeLeave> EmployeeLeaves { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Department> Departments { get; set; }
        //public DbSet<TimeSheet> TimeSheets { get; set; }
    }
}
