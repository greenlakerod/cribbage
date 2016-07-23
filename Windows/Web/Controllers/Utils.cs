using Cribbage.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Controllers
{
    public static class Utils
    {
        public static void Censor(User user)
        {
            user.HashedPassword = "********************";
        }
    }
}