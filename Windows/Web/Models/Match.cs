using System;
using System.Collections.Generic;

namespace Cribbage.Web.Model
{
    public partial class Match
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Match()
        {
            this.Games = new HashSet<Game>();
        }
    
        public Guid Id { get; set; }
        public MatchState State { get; set; }
        public Guid CurrentGameId { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Game> Games { get; set; }
        public virtual Game CurrentGame { get; set; }
    }
}
