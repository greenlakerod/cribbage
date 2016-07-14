using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Entities
{
    public class Role : IEntityBase
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }

    public class UserRole : IEntityBase
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
        public virtual Role Role { get; set; }
    }
}
