using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;
using Cribbage.Web.Model;
using Cribbage.Web.Models;

namespace Cribbage.Web.Controllers
{
    public class UserRolesController : ODataController
    {
        private CribbageWebContext db = new CribbageWebContext();

        // GET: odata/UserRoles
        [EnableQuery]
        public IQueryable<UserRole> GetUserRoles()
        {
            return db.UserRoles;
        }

        // GET: odata/UserRoles(5)
        [EnableQuery]
        public SingleResult<UserRole> GetUserRole([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.UserRoles.Where(userRole => userRole.Id == key));
        }

        // PUT: odata/UserRoles(5)
        public async Task<IHttpActionResult> Put([FromODataUri] Guid key, Delta<UserRole> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            UserRole userRole = await db.UserRoles.FindAsync(key);
            if (userRole == null)
            {
                return NotFound();
            }

            patch.Put(userRole);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserRoleExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(userRole);
        }

        // POST: odata/UserRoles
        public async Task<IHttpActionResult> Post(UserRole userRole)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserRoles.Add(userRole);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserRoleExists(userRole.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(userRole);
        }

        // PATCH: odata/UserRoles(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] Guid key, Delta<UserRole> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            UserRole userRole = await db.UserRoles.FindAsync(key);
            if (userRole == null)
            {
                return NotFound();
            }

            patch.Patch(userRole);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserRoleExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(userRole);
        }

        // DELETE: odata/UserRoles(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] Guid key)
        {
            UserRole userRole = await db.UserRoles.FindAsync(key);
            if (userRole == null)
            {
                return NotFound();
            }

            db.UserRoles.Remove(userRole);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/UserRoles(5)/Role
        [EnableQuery]
        public SingleResult<Role> GetRole([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.UserRoles.Where(m => m.Id == key).Select(m => m.Role));
        }

        // GET: odata/UserRoles(5)/User
        [EnableQuery]
        public SingleResult<User> GetUser([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.UserRoles.Where(m => m.Id == key).Select(m => m.User));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserRoleExists(Guid key)
        {
            return db.UserRoles.Count(e => e.Id == key) > 0;
        }
    }
}
