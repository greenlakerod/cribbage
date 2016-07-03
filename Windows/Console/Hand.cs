using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Console
{
    public class Combination
    {
        public Card[] Cards { get; set; }

        public int[] Values { get; set; }

        public int Value { get { return Values.Sum(v => v); } }

        public Combination(Card[] cards, int[] values)
        {
            Cards = cards;
            Values = values;
        }
    }
    
    public class Hand
    {
        private List<Card> _cards = new List<Card>();

        private List<Combination> _combinations = new List<Combination>();
        public Combination[] Combinations { get { return _combinations.ToArray(); } }

        public void Show()
        {

        }
        
    }
}
