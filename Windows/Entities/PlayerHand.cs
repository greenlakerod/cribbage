using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public class PlayerHand : IEntityBase
    {
        public Guid Id { get; set; }
        public Guid GameHandId { get; set; }
        public Guid UserId { get; set; }
        public int MaxCardsAllowed { get; set; } //may not need
        public List<Card> Cards { get; set; }
        public List<Card> PlayedCards { get; set; }
        public List<Combination> Combinations { get; set; }

        public void Draw(Card[] cards)
        {
            if (cards.Length > (MaxCardsAllowed - Cards.Count))
                throw new InvalidOperationException(string.Format("Can't add {0} cards", cards.Length));

            Cards.AddRange(cards);
        }

        public Card[] Discard(int[] indexes, bool toKitty)
        {
            //if (toKitty && indexes.Length > _maxCardsAllowed)
            //    throw new InvalidOperationException(string.Format("Can't discard {0} cards", indexes.Length));

            List<Card> discards = new List<Card>();
            for (int i = 0; i < indexes.Length; i++)
            {
                Card discard = Cards[i];
                discards.Add(new Card(discard.Suit, discard.Value));

                if (!toKitty)
                    PlayedCards.Add(discard);

                Cards.Remove(discard);
            }

            return discards.ToArray();
        }

        public void Show()
        {
            Cards.AddRange(PlayedCards);
            PlayedCards.Clear();
        }
    }
}
