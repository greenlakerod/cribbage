using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Cribbage.Web.Models
{
    public class CribbageWebContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public CribbageWebContext() : base("name=CribbageWebContext")
        {
        }

        public System.Data.Entity.DbSet<Cribbage.Web.Model.Card> Cards { get; set; }

        public System.Data.Entity.DbSet<Cribbage.Web.Model.Game> Games { get; set; }

        public System.Data.Entity.DbSet<Cribbage.Web.Model.Player> Players { get; set; }

        public System.Data.Entity.DbSet<Cribbage.Web.Model.GameHand> GameHands { get; set; }

        public System.Data.Entity.DbSet<Cribbage.Web.Model.Match> Matches { get; set; }

        public System.Data.Entity.DbSet<Cribbage.Web.Model.PlayerHand> PlayerHands { get; set; }

        public System.Data.Entity.DbSet<Cribbage.Web.Model.User> Users { get; set; }

        public System.Data.Entity.DbSet<Cribbage.Web.Model.Role> Roles { get; set; }

        public System.Data.Entity.DbSet<Cribbage.Web.Model.UserRole> UserRoles { get; set; }
    }
}
