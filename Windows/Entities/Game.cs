using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public partial class Game: IEntityBase
    {
        private GameState _state;
        private Player _currentPlayer;
        private Player _currentDealer;
        private Player _currentCutter;
        private Round _currentHand;
        private Deck _deck;
        private List<Player> _players;

        public Guid Id { get; set; }
        public int State { get; set; }
        public virtual ICollection<Player> Players { get; set; }
        public Nullable<Guid> CurrentHandId { get; set; }
        public Nullable<Guid> CurrentPlayerId { get; set; }
        public Nullable<Guid> CurrentDealerId { get; set; }
        public Nullable<Guid> CurrentCutterId { get; set; }
        public bool AllowMuggins { get; set; }

        

        public Game()
        {
            Players = new List<Player>();
        }

        public Card CutCard { get { return _deck.CutCard; } }

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

        public void Approve() { }

        public void Reject() { }
    }
}
