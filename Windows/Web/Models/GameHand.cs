using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cribbage.Web.Model
{
    public partial class GameHand
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public GameHand()
        {
            this.PlayerHands = new HashSet<PlayerHand>();
        }
    
        public Guid Id { get; set; }
        public Guid GameId { get; set; }
        public int Index { get; set; }
        public GameHandState State { get; set; }
        public Nullable<Guid> CribId { get; set; }
        public Nullable<Guid> LastPlayerId { get; set; }
        public Nullable<Guid> CurrentPlayerId { get; set; }
        public Nullable<Guid> CutCardId { get; set; }
        public string CardIds { get; set; }
        public string PlayedCardIds { get; set; }
        public int GoCount { get; set; }
        public int MatchingCardValueCount { get; set; }
    
        public virtual Game Game { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PlayerHand> PlayerHands { get; set; }
        public virtual PlayerHand Crib { get; set; }
        [ForeignKey("CutCardId")]
        public virtual Card CutCard { get; set; }
        [ForeignKey("LastPlayerId")]
        public virtual Player LastPlayer { get; set; }
        [ForeignKey("CurrentPlayerId")]
        public virtual Player CurrentPlayer { get; set; }
    }
}
