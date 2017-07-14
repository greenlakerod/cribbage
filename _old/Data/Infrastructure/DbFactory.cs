using Cribbage.Data.Abstract;
using Cribbage.Data.Configurations;
using Cribbage.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        CribbageEntities _dbContext;

        public CribbageEntities Init()
        {
            return _dbContext ?? (_dbContext = new CribbageEntities());
        }

        protected override void DisposeCore()
        {
            if (_dbContext != null)
                _dbContext.Dispose();
        }
    }
}
