using System;

namespace Cribbage.Web.Model
{
    public partial class Card
    {
        public Guid Id { get; set; }
        public Suit Suit { get; set; }
        public CardValue Value { get; set; }
        public CardScore Points { get; set; }
    }
}
