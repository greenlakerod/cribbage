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
        public Guid GameId { get; set; }
        public PlayerHand Crib { get; set; } //public Nullable<Guid> CribId { get; set; }
        public GameHandStage Stage { get; set; } //public int StageId { get; set; }
        public Player LastPlayer { get; set; } //public Nullable<Guid> LastPlayerId { get; set; }
        public Player CurrentPlayer { get; set; } //public Nullable<Guid> CurrentPlayerId { get; set; }
        public List<PlayedCard> PlayedCards { get; set; }
        public int GoCount { get; set; }
        public int MatchingCardValueCount { get; set; }

        //private Card _previousCard = null;
        //private int _playerCount = 0;
        //private int _playTotal = 0;
        //public void Play(Player player)
        //{
        //    if (player.CardToPlay != null)
        //    {
        //        Card currentCard = player.CardToPlay;
        //        int currentValue = (int)currentCard.Value;
        //        if (currentValue > 10)
        //            currentValue = 10;

        //        _playTotal += currentValue;

        //        //if total is 15 or 31, add two points
        //        //if total is 31, the play stage is over
        //        if (_playTotal == 15 || _playTotal == 31)
        //        {
        //            player.AddPoints(2);
        //            if (_playTotal == 31)
        //                Stage = GameHandStage.Show;

        //            CheckGameWinner(player);
        //        }

        //        //check for pairs, three-of-a-kind, four-of-a-kind
        //        if (Stage == GameHandStage.Play)
        //        {
        //            if ((int)currentCard.Value == (int)_previousCard.Value)
        //            {
        //                if (MatchingCardValueCount == 3) //four-of-a-kind
        //                    player.AddPoints(12);
        //                else if (MatchingCardValueCount == 2) //three-of-a-kind
        //                    player.AddPoints(6);
        //                else //pair
        //                    player.AddPoints(2);

        //                MatchingCardValueCount++;

        //                CheckGameWinner(player);
        //            }
        //            else
        //            {
        //                MatchingCardValueCount = 0;
        //            }
        //        }

        //        //check for run
        //        if (Stage == GameHandStage.Play && MatchingCardValueCount == 0)
        //        {

        //        }




        //        LastPlayer = player;
        //    }
        //    else
        //    {
        //        GoCount++;
        //        if (GoCount == _playerCount)
        //        {
        //            LastPlayer.AddPoints(1);
        //            Stage = GameHandStage.Show;

        //            CheckGameWinner(LastPlayer);
        //        }
        //    }
        //}

        //public void Show(Player player)
        //{



        //    if (player.GameTotal == 120)
        //        Stage = GameHandStage.Done;
        //}

        //private void CheckGameWinner(Player player)
        //{
        //    if (player.GameTotal >= 120)
        //        Stage = GameHandStage.Done;
        //}
    }
}
