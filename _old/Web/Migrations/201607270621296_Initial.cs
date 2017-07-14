namespace Cribbage.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cards",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Suit = c.Int(nullable: false),
                        Value = c.Int(nullable: false),
                        Points = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.GameHands",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        GameId = c.Guid(nullable: false),
                        Index = c.Int(nullable: false),
                        State = c.Int(nullable: false),
                        CribId = c.Guid(),
                        LastPlayerId = c.Guid(),
                        CurrentPlayerId = c.Guid(),
                        CutCardId = c.Guid(),
                        CardIds = c.String(),
                        PlayedCardIds = c.String(),
                        GoCount = c.Int(nullable: false),
                        MatchingCardValueCount = c.Int(nullable: false),
                        Game_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Games", t => t.Game_Id)
                .ForeignKey("dbo.PlayerHands", t => t.CribId)
                .ForeignKey("dbo.Players", t => t.CurrentPlayerId)
                .ForeignKey("dbo.Cards", t => t.CutCardId)
                .ForeignKey("dbo.Games", t => t.GameId, cascadeDelete: true)
                .ForeignKey("dbo.Players", t => t.LastPlayerId)
                .Index(t => t.GameId)
                .Index(t => t.CribId)
                .Index(t => t.LastPlayerId)
                .Index(t => t.CurrentPlayerId)
                .Index(t => t.CutCardId)
                .Index(t => t.Game_Id);
            
            CreateTable(
                "dbo.PlayerHands",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        GameHandId = c.Guid(nullable: false),
                        PlayerId = c.Guid(nullable: false),
                        IsCrib = c.Boolean(nullable: false),
                        CardIds = c.String(),
                        PlayedCardIds = c.String(),
                        Player_Id = c.Guid(),
                        GameHand_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.GameHands", t => t.GameHandId, cascadeDelete: true)
                .ForeignKey("dbo.Players", t => t.Player_Id)
                .ForeignKey("dbo.Players", t => t.PlayerId, cascadeDelete: true)
                .ForeignKey("dbo.GameHands", t => t.GameHand_Id)
                .Index(t => t.GameHandId)
                .Index(t => t.PlayerId)
                .Index(t => t.Player_Id)
                .Index(t => t.GameHand_Id);
            
            CreateTable(
                "dbo.Players",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        GameId = c.Guid(),
                        UserId = c.Guid(),
                        GameOrder = c.Int(nullable: false),
                        GameTotal = c.Int(nullable: false),
                        CribId = c.Guid(),
                        CurrentHandId = c.Guid(),
                        Game_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.PlayerHands", t => t.CribId)
                .ForeignKey("dbo.PlayerHands", t => t.CurrentHandId)
                .ForeignKey("dbo.Games", t => t.Game_Id)
                .ForeignKey("dbo.Games", t => t.GameId)
                .ForeignKey("dbo.Users", t => t.UserId)
                .Index(t => t.GameId)
                .Index(t => t.UserId)
                .Index(t => t.CribId)
                .Index(t => t.CurrentHandId)
                .Index(t => t.Game_Id);
            
            CreateTable(
                "dbo.Games",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        MatchId = c.Guid(),
                        State = c.Int(nullable: false),
                        AllowMuggins = c.Boolean(nullable: false),
                        CurrentHandId = c.Guid(),
                        CurrentDealerId = c.Guid(),
                        Index = c.Int(nullable: false),
                        Match_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Players", t => t.CurrentDealerId)
                .ForeignKey("dbo.GameHands", t => t.CurrentHandId)
                .ForeignKey("dbo.Matches", t => t.Match_Id)
                .ForeignKey("dbo.Matches", t => t.MatchId)
                .Index(t => t.MatchId)
                .Index(t => t.CurrentHandId)
                .Index(t => t.CurrentDealerId)
                .Index(t => t.Match_Id);
            
            CreateTable(
                "dbo.Matches",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        State = c.Int(nullable: false),
                        CurrentGameId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Games", t => t.CurrentGameId, cascadeDelete: true)
                .Index(t => t.CurrentGameId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Username = c.String(),
                        HashedPassword = c.String(),
                        Email = c.String(),
                        Salt = c.String(),
                        IsLocked = c.Boolean(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserRoles",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        UserId = c.Guid(nullable: false),
                        RoleId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Roles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.Roles",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PlayerHands", "GameHand_Id", "dbo.GameHands");
            DropForeignKey("dbo.GameHands", "LastPlayerId", "dbo.Players");
            DropForeignKey("dbo.GameHands", "GameId", "dbo.Games");
            DropForeignKey("dbo.GameHands", "CutCardId", "dbo.Cards");
            DropForeignKey("dbo.GameHands", "CurrentPlayerId", "dbo.Players");
            DropForeignKey("dbo.GameHands", "CribId", "dbo.PlayerHands");
            DropForeignKey("dbo.PlayerHands", "PlayerId", "dbo.Players");
            DropForeignKey("dbo.UserRoles", "UserId", "dbo.Users");
            DropForeignKey("dbo.UserRoles", "RoleId", "dbo.Roles");
            DropForeignKey("dbo.Players", "UserId", "dbo.Users");
            DropForeignKey("dbo.PlayerHands", "Player_Id", "dbo.Players");
            DropForeignKey("dbo.Players", "GameId", "dbo.Games");
            DropForeignKey("dbo.Players", "Game_Id", "dbo.Games");
            DropForeignKey("dbo.Games", "MatchId", "dbo.Matches");
            DropForeignKey("dbo.Games", "Match_Id", "dbo.Matches");
            DropForeignKey("dbo.Matches", "CurrentGameId", "dbo.Games");
            DropForeignKey("dbo.GameHands", "Game_Id", "dbo.Games");
            DropForeignKey("dbo.Games", "CurrentHandId", "dbo.GameHands");
            DropForeignKey("dbo.Games", "CurrentDealerId", "dbo.Players");
            DropForeignKey("dbo.Players", "CurrentHandId", "dbo.PlayerHands");
            DropForeignKey("dbo.Players", "CribId", "dbo.PlayerHands");
            DropForeignKey("dbo.PlayerHands", "GameHandId", "dbo.GameHands");
            DropIndex("dbo.UserRoles", new[] { "RoleId" });
            DropIndex("dbo.UserRoles", new[] { "UserId" });
            DropIndex("dbo.Matches", new[] { "CurrentGameId" });
            DropIndex("dbo.Games", new[] { "Match_Id" });
            DropIndex("dbo.Games", new[] { "CurrentDealerId" });
            DropIndex("dbo.Games", new[] { "CurrentHandId" });
            DropIndex("dbo.Games", new[] { "MatchId" });
            DropIndex("dbo.Players", new[] { "Game_Id" });
            DropIndex("dbo.Players", new[] { "CurrentHandId" });
            DropIndex("dbo.Players", new[] { "CribId" });
            DropIndex("dbo.Players", new[] { "UserId" });
            DropIndex("dbo.Players", new[] { "GameId" });
            DropIndex("dbo.PlayerHands", new[] { "GameHand_Id" });
            DropIndex("dbo.PlayerHands", new[] { "Player_Id" });
            DropIndex("dbo.PlayerHands", new[] { "PlayerId" });
            DropIndex("dbo.PlayerHands", new[] { "GameHandId" });
            DropIndex("dbo.GameHands", new[] { "Game_Id" });
            DropIndex("dbo.GameHands", new[] { "CutCardId" });
            DropIndex("dbo.GameHands", new[] { "CurrentPlayerId" });
            DropIndex("dbo.GameHands", new[] { "LastPlayerId" });
            DropIndex("dbo.GameHands", new[] { "CribId" });
            DropIndex("dbo.GameHands", new[] { "GameId" });
            DropTable("dbo.Roles");
            DropTable("dbo.UserRoles");
            DropTable("dbo.Users");
            DropTable("dbo.Matches");
            DropTable("dbo.Games");
            DropTable("dbo.Players");
            DropTable("dbo.PlayerHands");
            DropTable("dbo.GameHands");
            DropTable("dbo.Cards");
        }
    }
}
