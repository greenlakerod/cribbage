using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public class GameHand : IEntityBase
    {
        public Guid Id { get; set; }

        private PlayerHand _crib;
        private GameHandStage _stage = GameHandStage.Deal;
        private Player _lastPlayer = null;
        private Card _previousCard = null;
        private int _playTotal = 0;
        private int _playerCount = 0;
        private int _goCount = 0;
        private int _matchingCardValueCount = 0;

        public void Play(Player player)
        {
            if (player.CardToPlay != null)
            {
                Card currentCard = player.CardToPlay;
                int currentValue = (int)currentCard.Value;
                if (currentValue > 10)
                    currentValue = 10;

                _playTotal += currentValue;

                //if total is 15 or 31, add two points
                //if total is 31, the play stage is over
                if (_playTotal == 15 || _playTotal == 31)
                {
                    player.AddPoints(2);
                    if (_playTotal == 31)
                        _stage = GameHandStage.Show;

                    CheckGameWinner(player);
                }

                //check for pairs, three-of-a-kind, four-of-a-kind
                if (_stage == GameHandStage.Play)
                {
                    if ((int)currentCard.Value == (int)_previousCard.Value)
                    {
                        if (_matchingCardValueCount == 3) //four-of-a-kind
                            player.AddPoints(12);
                        else if (_matchingCardValueCount == 2) //three-of-a-kind
                            player.AddPoints(6);
                        else //pair
                            player.AddPoints(2);

                        _matchingCardValueCount++;

                        CheckGameWinner(player);
                    }
                    else
                    {
                        _matchingCardValueCount = 0;
                    }
                }

                //check for run
                if (_stage == GameHandStage.Play && _matchingCardValueCount == 0)
                {

                }




                _lastPlayer = player;
            }
            else
            {
                _goCount++;
                if (_goCount == _playerCount)
                {
                    _lastPlayer.AddPoints(1);
                    _stage = GameHandStage.Show;

                    CheckGameWinner(_lastPlayer);
                }
            }
        }

        public void Show(Player player)
        {



            if (player.GameTotal == 120)
                _stage = GameHandStage.Done;
        }

        private void CheckGameWinner(Player player)
        {
            if (player.GameTotal >= 120)
                _stage = GameHandStage.Done;
        }
    }
}
