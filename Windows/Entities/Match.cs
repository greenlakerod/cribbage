using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public class Match : IEntityBase
    {
        private Guid _id;
        public Guid Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public Nullable<Guid> CurrentGameId { get; set; }

        public ICollection<Game> Games { get; set; }

        public Match()
        {
            Games = new List<Game>();
        }
    }
}
