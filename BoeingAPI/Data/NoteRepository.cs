using BoeingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoeingAPI.Data
{
    public class NoteRepository : INoteRepository
    {
        public static List<Note> notes = new List<Note>();
        public void Add(Note note)
        {
            notes.Add(note);
        }

        public List<Note> Get()
        {
            return notes;
        }
    }
}
