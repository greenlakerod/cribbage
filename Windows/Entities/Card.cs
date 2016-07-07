using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public enum Suit
    {
        Clubs,
        Diamonds,
        Hearts,
        Spades
    }
    
    public enum CardValue
    {
        None = 0,
        Two = 2,
        Three = 3,
        Four = 4,
        Five = 5,
        Six = 6,
        Seven = 7,
        Eight = 8,
        Nine = 9,
        Ten = 10,
        Jack = 11,
        Queen = 12,
        King = 13,
        Ace = 14
    }

    public class Card
    {
        public Suit Suit;
        public CardValue Value;

        public Card(Suit suit, CardValue value)
        {
            Value = value;
            Suit = suit;
        }
    }

    public class CardComparer : IComparer<Card>
    {
        public int Compare(Card x, Card y)
        {
            int v1 = (int)x.Value;
            int v2 = (int)y.Value;

            return (v1 == v2) ? 0 : (v1 < v2) ? -1 : 1;
        }
    }
}
