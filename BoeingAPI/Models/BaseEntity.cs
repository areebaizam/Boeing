using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BoeingAPI.Models
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; }

        public BaseEntity()
        {
            Id = Guid.NewGuid();
            CreatedDate = DateTime.UtcNow;
        }
    }
}
