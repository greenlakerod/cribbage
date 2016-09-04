using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cribbage.Web.Model
{
    public partial class Game
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Game()
        {
            this.Players = new HashSet<Player>();
            this.Hands = new HashSet<GameHand>();
        }
    
        public Guid Id { get; set; }
        public Nullable<Guid> MatchId { get; set; }
        public GameState State { get; set; }
        public bool AllowMuggins { get; set; }
        public Nullable<Guid> CurrentHandId { get; set; }
        public Nullable<Guid> CurrentDealerId { get; set; }
        public int Index { get; set; }
    
        [ForeignKey("MatchId")]
        public virtual Match Match { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Player> Players { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GameHand> Hands { get; set; }
        [ForeignKey("CurrentHandId")]
        public virtual GameHand CurrentHand { get; set; }
        [ForeignKey("CurrentDealerId")]
        public virtual Player CurrentDealer { get; set; }
    }
}
