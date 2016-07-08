using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public class Hand
    {
        private int _maxCardsAllowed = 5;
        public int MaxCardsAllowed { set { _maxCardsAllowed = value; } }
        
        private List<Card> _cards = new List<Card>();
        private List<Card> _playedCards = new List<Card>();

        private List<Combination> _combinations = new List<Combination>();
        public Combination[] Combinations { get { return _combinations.ToArray(); } }

        public void Draw(Card[] cards)
        {
            if (cards.Length > (_maxCardsAllowed - _cards.Count))
                throw new InvalidOperationException(string.Format("Can't add {0} cards", cards.Length));

            _cards.AddRange(cards);
        }

        public Card[] Discard(int[] indexes, bool toKitty)
        {
            //if (toKitty && indexes.Length > _maxCardsAllowed)
            //    throw new InvalidOperationException(string.Format("Can't discard {0} cards", indexes.Length));

            List<Card> discards = new List<Card>();
            for (int i = 0; i < indexes.Length; i++)
            {
                Card discard = _cards[i];
                discards.Add(new Card(discard.Suit, discard.Value));

                if (!toKitty)
                    _playedCards.Add(discard);

                _cards.Remove(discard);
            }

            return discards.ToArray();
        }

        public void Show()
        {
            _cards.AddRange(_playedCards);
            _playedCards.Clear();
        }
    }

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
}
