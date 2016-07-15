using Cribbage.Data.Abstract;
using Cribbage.Data.Configurations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        CribbageContext _dbContext;

        public CribbageContext Init()
        {
            return _dbContext ?? (_dbContext = new CribbageContext());
        }

        protected override void DisposeCore()
        {
            if (_dbContext != null)
                _dbContext.Dispose();
        }
    }
}
