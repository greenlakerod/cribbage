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

        public bool Deal(Hand hand, int count)
        {
            if (count >= _deck.Count)
            {
                try
                {
                    List<Card> cards = new List<Card>();
                    for (int i = 0; i < count; i++)
                        cards.Add(new Card(_deck[i].Suit, _deck[i].Value));

                    hand.Draw(cards.ToArray());
                    _deck.RemoveRange(0, count);
                    return true;
                }
                catch
                {
                    return false;
                }
            }

            return false;
        }

        public void Cut()
        {

        }
    }
}
