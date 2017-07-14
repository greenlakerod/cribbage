using Cribbage.Web.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;

namespace Cribbage.Web.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<Cribbage.Web.Models.CribbageWebContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Cribbage.Web.Models.CribbageWebContext context)
        {
            //  This method will be called after migrating to the latest version.

            List<Card> cards = new List<Card>();
            foreach (Suit suit in Enum.GetValues(typeof(Suit)))
            {
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Ace, Points = CardScore.Ace });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Two, Points = CardScore.Two });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Three, Points = CardScore.Three });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Four, Points = CardScore.Four });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Five, Points = CardScore.Five });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Six, Points = CardScore.Six });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Seven, Points = CardScore.Seven });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Eight, Points = CardScore.Eight });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Nine, Points = CardScore.Nine });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Ten, Points = CardScore.Ten });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Jack, Points = CardScore.Jack });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.Queen, Points = CardScore.Queen });
                cards.Add(new Card() { Id = Guid.NewGuid(), Suit = suit, Value = CardValue.King, Points = CardScore.King });
            }

            context.Cards.AddOrUpdate(cards.ToArray());

        }
    }
}
