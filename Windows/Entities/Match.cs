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



        private List<Game> _games = new List<Game>();
        public Game[] Games { get { return _games.ToArray(); } }
    }
}
