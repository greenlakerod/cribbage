using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public partial class Player : IEntityBase
    {
        private Guid _id;
        public Guid Id
        {
            get { return _id; }
            set { _id = value; }
        }

        private Guid _gameId;
        public Guid GameId
        {
            get { return _gameId; }
            set { _gameId = value; }
        }

        private PlayerHand _hand = new PlayerHand();

        private PlayerHand _crib;
        public PlayerHand Crib { set { _crib = value; } }

        private Card _cardToPlay = null;
        public Card CardToPlay { get { return _cardToPlay; } }

        private int _points;
        public int Points { get { return _points; } }

        private int _order = 0;
        public int Order
        {
            get { return _order; }
            set { _order = value; }
        }

        public void Show()
        {
            GameManager.GetGame(_gameId).Show();
        }

        public void Play(/*int? cardIndex */)
        {
            //_cardToPlay = cardIndex.HasValue ? _hand.Discard(new int[] { cardIndex.Value }, false)[0] : null;
            //GameManager.GetGame(_gameId).Play();


        }

        public void Refute() { }

        public void AddCards(Card[] cards)
        {
            _hand.Draw(cards);
        }

        public void ResetHand()
        {
            _crib = null;
            _hand = new PlayerHand();
        }

        public void AddPoints(int points)
        {
            _points += points;
        }
    }
}
