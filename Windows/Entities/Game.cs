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

        private Deck _deck;
        private Hand _crib;
        private Card _cutCard;
        private List<Player> _players;
        private Player _currentPlayer;
        private Player _currentDealer;
        private Player _currentCutter;

        private bool _allowMuggins = false;
        private GameState _state;
        private GameStage _stage;

        private Guid _id;
        public Guid Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public void Deal(Player player, int count)
        {
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

            int cardLimit = _players.Count > 2 ? 5 * _players.Count : 12;
            int dealIndex = 0;

            if (_currentDealer == null)
            {
                _currentDealer = _players[0];
                _currentCutter = _players[1];
                dealIndex = 1;
            }
            else
            {
                int next = _currentDealer.Order;
                if (next >= _players.Count)
                {

                }
                else
                {

                }

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

        //public void Play(Player player, Card card)
        //{

        //}

        //public void Show(Player player)
        //{
            
        //}
    }
}
