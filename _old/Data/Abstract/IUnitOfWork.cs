﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Data.Abstract
{
    public interface IUnitOfWork
    {
        void Commit();
    }
}
