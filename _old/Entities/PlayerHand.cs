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
    
    public partial class PlayerHand
    {
        public System.Guid Id { get; set; }
        public System.Guid GameHandId { get; set; }
        public System.Guid PlayerId { get; set; }
        public bool IsCrib { get; set; }
        public string CardIds { get; set; }
        public string PlayedCardIds { get; set; }
    
        public virtual GameHand GameHand { get; set; }
        public virtual Player Player { get; set; }
    }
}