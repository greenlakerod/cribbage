using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public class PlayedCard : IEntityBase
    {
        public Card Card { get; set; }
        public Guid PlayerId { get; set; }
        public ScoreType ScoreType { get; set; }
        public int Points { get; set; }

        public Guid Id { get; set; }

        public PlayedCard()
        {
            Id = Guid.NewGuid();
        }
    }
}
