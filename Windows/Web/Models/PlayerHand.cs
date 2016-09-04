namespace Cribbage.Web.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class PlayerHand
    {
        public Guid Id { get; set; }
        public Guid GameHandId { get; set; }
        public Guid PlayerId { get; set; }
        public bool IsCrib { get; set; }
        public string CardIds { get; set; }
        public string PlayedCardIds { get; set; }
    
        public virtual GameHand GameHand { get; set; }
        public virtual Player Player { get; set; }
    }
}
