using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public class Combination
    {
        public List<Card> Cards { get; set; }
        public List<int> Values { get; set; }
        public List<ScoreType> ScoreTypes { get; set; }

        //public int Value { get { return Values.Sum(v => v); } }

        //public Combination(Card[] cards, int[] values)
        //{
        //    Cards = cards;
        //    Values = values;
        //}
        //public Combination() { }
    }
}
