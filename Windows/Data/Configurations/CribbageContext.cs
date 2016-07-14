using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Data.Configurations
{
    public class CribbageContext : DbContext
    {
        public virtual void Commit()
        {
            base.SaveChanges();
        }
    }
}
