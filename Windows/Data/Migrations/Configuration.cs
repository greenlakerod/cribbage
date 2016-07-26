namespace Cribbage.Data.Migrations
{
    using Entities;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Cribbage.Data.Configurations.CribbageEntitiesContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Cribbage.Data.Configurations.CribbageEntitiesContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            int count = 1;
            List<Card> cards = new List<Card>();
            foreach (Suit suit in Enum.GetValues(typeof(Suit)))
            {
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Ace, Points = CardScore.Ace });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Two, Points = CardScore.Two });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Three, Points = CardScore.Three });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Four, Points = CardScore.Four });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Five, Points = CardScore.Five });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Six, Points = CardScore.Six });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Seven, Points = CardScore.Seven });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Eight, Points = CardScore.Eight });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Nine, Points = CardScore.Nine });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Ten, Points = CardScore.Ten });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Jack, Points = CardScore.Jack });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.Queen, Points = CardScore.Queen });
                cards.Add(new Card() { Id = count++, Suit = suit, Value = CardValue.King, Points = CardScore.King });
            }
        }
    }
}
