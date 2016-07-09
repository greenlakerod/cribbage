using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    

    public partial class Game: IEntityBase
    {
        public enum State
        {
            Cancelled = 0,
            Finished = 1,
            InProgress = 2
        }

        private Guid _id;
        private Deck _deck;
        
        private List<Player> _players;
        private Player _currentPlayer;
        private Player _currentDealer;
        private Player _currentCutter;

        private bool _allowMuggins = false;
        private State _state;

        public Game()
        {

        }

        public Card CutCard { get { return _deck.CutCard; } }

        public Guid Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public bool Deal(Player player, int count)
        {
            Card[] cards = _deck.Deal(count);

            if (cards != null)
            {
                player.AddCards(cards);
                return true;
            }
            return false;
        }

        public void Deal()
        {
            int cardLimit = _players.Count > 2 ? 5 * _players.Count : 12;
            int dealIndex = _currentCutter.Order;

            int count = 0;
            while (count < cardLimit)
            {
                if (!Deal(_players[dealIndex], 1))
                    break;

                dealIndex++;
                if (dealIndex >= _players.Count)
                    dealIndex = 0;

                count++;
            }
        }

        public void Cut(int index)
        {
            _deck.Cut(index);
        }

        public bool AddPlayer(Player player)
        {
            if (_players.Count == 4)
                return false;

            player.Order = _players.Count;
            _players.Add(player);

            return true;
        }

        private void ResetPlayerHands()
        {
            foreach (Player player in _players)
                player.ResetHand();
        }

        public void Play()
        {
            _currentHand.Play(_currentPlayer);
        }

        public void Show()
        {
            _currentHand.Play(_currentPlayer);
        }
    }
}
