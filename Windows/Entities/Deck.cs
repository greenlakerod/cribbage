using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public class Deck
    {
        static Random _random = new Random();
        private List<Card> _deck = new List<Card>();

        private Card _cutCard;
        public Card CutCard { get { return _cutCard; } }

        public Deck()
        {
            Reset();
        }

        public void Reset()
        {
            _deck.Clear();
            foreach (Suit suit in Enum.GetValues(typeof(Suit)))
            {
                for (int i = 2; i <= 14; i++)
                    _deck.Add(new Card(suit, (CardValue)i));
            }
        }

        public void Shuffle()
        {
            //http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
            for (int i = _deck.Count - 1; i > 0; i--)
            {
                int k = _random.Next(i + 1);
                Card temp = _deck[i];
                _deck[i] = _deck[k];
                _deck[k] = temp;
            }
        }

        public Card[] Deal(int count)
        {
            if (count >= _deck.Count)
            {
                try
                {
                    Card[] temp = new Card[count];
                    _deck.CopyTo(0, temp, 0, count);
                    _deck.RemoveRange(0, count);

                    return temp;
                }
                catch
                {
                    return null;
                }
            }

            return null;
        }

        public void Cut(int index)
        {
            Card[] temp = new Card[_deck.Count];

            _deck.CopyTo(index, temp, 0, _deck.Count - index);
            _deck.CopyTo(0, temp, _deck.Count - index, index);
            _deck.Clear();
            _deck = temp.ToList();

            _cutCard = _deck[0];
            _deck.RemoveAt(0);
        }
    }
}
