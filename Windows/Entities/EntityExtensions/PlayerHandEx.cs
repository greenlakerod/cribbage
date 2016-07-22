using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public partial class PlayerHand : IEntityBase
    {
        public List<Card> Cards { get; set; }
        public List<PlayedCard> PlayedCards { get; set; }
    }
}
