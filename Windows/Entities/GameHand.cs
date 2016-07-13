﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public partial class Game
    {
        public class Round
        {
            public Guid Id { get; set; }

            private Player.Hand _crib;
            private RoundStage _stage = RoundStage.Deal;
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
                            _stage = RoundStage.Show;

                        CheckGameWinner(player);
                    }

                    //check for pairs, three-of-a-kind, four-of-a-kind
                    if (_stage == RoundStage.Play)
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
                    if (_stage == RoundStage.Play && _matchingCardValueCount == 0)
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
                        _stage = RoundStage.Show;

                        CheckGameWinner(_lastPlayer);
                    }
                }
            }

            public void Show(Player player)
            {



                if (player.Points == 120)
                    _stage = RoundStage.Done;
            }

            private void CheckGameWinner(Player player)
            {
                if (player.Points >= 120)
                    _stage = RoundStage.Done;
            }
        }

        private List<Round> _hands = new List<Round>();
        

        public void NewHand()
        {
            if (_currentHand != null)
                _hands.Add(_currentHand);

            _currentHand = new Round();

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
