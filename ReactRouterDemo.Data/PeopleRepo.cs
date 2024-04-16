using Microsoft.EntityFrameworkCore;

namespace ReactRouterDemo.Data
{
    public class PeopleRepo
    {
        private readonly string _connectionString;

        public PeopleRepo(string connectionString)
        {
            _connectionString = connectionString;    
        }

        public List<Person> GetAll()
        {
            using var context = new PeopleDataContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
    }
}
