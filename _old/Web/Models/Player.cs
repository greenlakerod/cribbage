using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cribbage.Web.Model
{    
    public partial class Player
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Player()
        {
            this.Hands = new HashSet<PlayerHand>();
        }
    
        public Guid Id { get; set; }
        public Nullable<Guid> GameId { get; set; }
        public Nullable<Guid> UserId { get; set; }
        public int GameOrder { get; set; }
        public int GameTotal { get; set; }
        public Nullable<Guid> CribId { get; set; }
        public Nullable<Guid> CurrentHandId { get; set; }
    
        [ForeignKey("GameId")]
        public virtual Game Game { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PlayerHand> Hands { get; set; }
        [ForeignKey("CribId")]
        public virtual PlayerHand Crib { get; set; }
        [ForeignKey("CurrentHandId")]
        public virtual PlayerHand CurrentHand { get; set; }
    }
}
