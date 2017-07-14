using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public partial class GameHand : IEntityBase
    {
        public Deck Deck { get; set; }
        public List<PlayedCard> PlayedCards { get; set; }
    }
}
