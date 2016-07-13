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
    public enum RoundStage
    {
        Deal = 0,
        Play = 1,
        Show = 2,
        Done = 3
    }
}
