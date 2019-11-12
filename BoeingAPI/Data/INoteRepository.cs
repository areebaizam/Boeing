using BoeingAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoeingAPI.Data
{
    public interface INoteRepository
    {
        //void Add<T>(T entity) where T : class;
        //Task<IEnumerable<T>> Get<T>() where T : class;
        void Add(Note note);
        List<Note> Get();

    }
}
