using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public class Deck
    {  
        public List<Card> Cards { get; set; }
        public Card CutCard { get; set; }

        //static Random _random = new Random();
        //public Deck()
        //{
        //    Reset();
        //}

        //public void Reset()
        //{
        //    _cards.Clear();
        //    foreach (Suit suit in Enum.GetValues(typeof(Suit)))
        //    {
        //        for (int i = 1; i < 14; i++)
        //            _cards.Add(new Card(suit, (CardValue)i));
        //    }
        //}

        //public void Shuffle()
        //{
        //    //http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
        //    for (int i = _cards.Count - 1; i > 0; i--)
        //    {
        //        int k = _random.Next(i + 1);
        //        Card temp = _cards[i];
        //        _cards[i] = _cards[k];
        //        _cards[k] = temp;
        //    }
        //}

        //public Card[] Deal(int count)
        //{
        //    if (count >= _cards.Count)
        //    {
        //        try
        //        {
        //            Card[] temp = new Card[count];
        //            _cards.CopyTo(0, temp, 0, count);
        //            _cards.RemoveRange(0, count);

        //            return temp;
        //        }
        //        catch
        //        {
        //            return null;
        //        }
        //    }

        //    return null;
        //}

        //public void Cut(int index)
        //{
        //    Card[] temp = new Card[_cards.Count];

        //    _cards.CopyTo(index, temp, 0, _cards.Count - index);
        //    _cards.CopyTo(0, temp, _cards.Count - index, index);
        //    _cards.Clear();
        //    _cards = temp.ToList();

        //    _cutCard = _cards[0];
        //    _cards.RemoveAt(0);
        //}
    }
}
