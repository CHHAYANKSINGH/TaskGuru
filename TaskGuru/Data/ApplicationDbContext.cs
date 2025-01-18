using Microsoft.EntityFrameworkCore;
using TaskGuru.Models;

namespace TaskGuru.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Issue> Issues { get; set; }
        public DbSet<Sprint> Sprints { get; set; }
    }
}
