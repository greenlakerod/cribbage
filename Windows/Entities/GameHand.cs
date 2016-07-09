using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public partial class Game
    {
        public class Hand
        {
            public enum Stage
            {
                Deal = 0,
                Play = 1,
                Show = 2,
                Done = 3
            }

            private Player.Hand _crib;
            private Stage _stage = Stage.Deal;
            private int _playTotal = 0;

            public void Play(Player player)
            {


                if (player.Points == 120)
                {
                    _stage = Stage.Done;
                    return;
                }
                if (_playTotal == 31)
                    _stage = Stage.Show;
            }

            public void Show(Player player)
            {



                if (player.Points == 120)
                    _stage = Stage.Done;
            }
        }

        private List<Hand> _hands = new List<Hand>();
        private Hand _currentHand;

        public void NewHand()
        {
            if (_currentHand != null)
                _hands.Add(_currentHand);

            _currentHand = new Hand();

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


    }
}
