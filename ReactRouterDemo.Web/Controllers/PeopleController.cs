using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactRouterDemo.Data;

namespace ReactRouterDemo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly string _connectionString;

        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet("getall")]
        public List<Person> GetAll()
        {
            return new PeopleRepo(_connectionString).GetAll();
        }
    }

}
