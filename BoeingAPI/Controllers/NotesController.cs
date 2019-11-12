using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BoeingAPI.Data;
using BoeingAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BoeingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INoteRepository _repo;
        public NotesController(INoteRepository repo)
        {
            _repo = repo;
        }

        // POST api/note
        [HttpPost]
        public void Post([FromBody] Note note)
        {
            _repo.Add(note);
        }

        // GET api/notes
        [HttpGet]
        public List<Note> Get()
        {
            return _repo.Get();
        }

    }
}