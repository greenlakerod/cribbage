//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Cribbage.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class GameHand
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public GameHand()
        {
            this.PlayerHands = new HashSet<PlayerHand>();
        }
    
        public System.Guid Id { get; set; }
        public System.Guid GameId { get; set; }
        public GameHandState State { get; set; }
        public Nullable<System.Guid> CribId { get; set; }
        public System.Guid LastPlayerId { get; set; }
        public System.Guid CurrentPlayerId { get; set; }
        public int Index { get; set; }
        public int CutCardId { get; set; }
        public string CardIds { get; set; }
        public string PlayedCardIds { get; set; }
        public int GoCount { get; set; }
        public int MatchingCardValueCount { get; set; }
    
        public virtual Game Game { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PlayerHand> PlayerHands { get; set; }
        public virtual PlayerHand Crib { get; set; }
        public virtual Player LastPlayer { get; set; }
        public virtual Player CurrentPlayer { get; set; }
    }
}
