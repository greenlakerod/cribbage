using Cribbage.Data.Configurations;
using Cribbage.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Services.Abstract
{
    public interface IMembershipService
    {
        MembershipContext ValidateUser(string username, string password);
        User CreateUser(string username, string email, string password, Guid[] roles);
        User GetUser(Guid userId);
        List<Role> GetUserRoles(string username);
    }
}
