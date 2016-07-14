using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
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
