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

        private Hand _hand = new Hand();

        private Hand _crib;
        public Hand Crib { set { _crib = value; } }

        private Card _cardToPlay = null;
        public Card CardToPlay { get { return _cardToPlay; } }

        private int _points;
        public int Points { get { return _points; } }

        private int _order;
        public int Order
        {
            get { return _order; }
            set { Order = value; }
        }

        public void Show()
        {
            GameManager.GetGame(_gameId).Show();
        }

        public void Play(int? cardIndex)
        {
            _cardToPlay = cardIndex.HasValue ? _hand.Discard(new int[] { cardIndex.Value }, false)[0] : null;

            GameManager.GetGame(_gameId).Play();
        }

        public void AddCards(Card[] cards)
        {
            _hand.Draw(cards);
        }

        public void ResetHand()
        {
            _crib = null;
            _hand = new Hand();
        }
    }
}
