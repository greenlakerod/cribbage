using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public partial class Player : IEntityBase
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid GameId { get; set; }
        public Guid GameHandId { get; set; }
        public int GameTotal { get; set; }
        public PlayerHand Hand { get; set; }
        public PlayerHand Crib { get; set; }
        public int Order { get; set; }

        private Card _cardToPlay = null;
        public Card CardToPlay { get { return _cardToPlay; } }


        public void Show()
        {
            GameManager.GetGame(GameId).Show();
        }

        public void Play(/*int? cardIndex */)
        {
            //_cardToPlay = cardIndex.HasValue ? _hand.Discard(new int[] { cardIndex.Value }, false)[0] : null;
            //GameManager.GetGame(_gameId).Play();


        }

        public void Refute() { }

        public void AddCards(Card[] cards)
        {
            Hand.Draw(cards);
        }

        public void ResetHand()
        {
            Crib = null;
            Hand = new PlayerHand();
        }

        public void AddPoints(int points)
        {
            GameTotal += points;
        }
    }
}
