using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public enum GameState
    {
        Cancelled = 0,
        Finished = 1,
        InProgress = 2
    }

    public enum GameStage
    {
        Deal = 0,
        Play = 1,
        Show = 2
    }

    public class Game: IEntityBase
    {
        private Guid _id;
        private Deck _deck;
        private Hand _crib;
        private List<Player> _players;
        private Player _currentPlayer;
        private Player _currentDealer;
        private Player _currentCutter;

        private bool _allowMuggins = false;
        private GameState _state;
        private GameStage _stage;

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

        public void NewHand()
        {
            ResetPlayerHands();
            _deck.Reset();
            _deck.Shuffle();

            if (_currentDealer == null)
            {
                _currentDealer = _players[0];
                _currentCutter = _players[1];
            }
            else
            {
                _currentDealer = _players[_currentCutter.Order];

                int dealIndex = _currentCutter.Order + 1;
                if (dealIndex >= _players.Count)
                    dealIndex = 0;

                _currentCutter = _players[dealIndex];
            }
        }

        private void ResetPlayerHands()
        {
            foreach (Player player in _players)
                player.ResetHand();
        }

        //public void AddPoints(Player player, int points)
        //{

        //}

        public void Play()
        {

        }

        //public void Show(Player player)
        //{

        //}
    }
}
