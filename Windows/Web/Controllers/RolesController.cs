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
    public class RolesController : ODataController
    {
        private CribbageWebContext db = new CribbageWebContext();

        // GET: odata/Roles
        [EnableQuery]
        public IQueryable<Role> GetRoles()
        {
            return db.Roles;
        }

        // GET: odata/Roles(5)
        [EnableQuery]
        public SingleResult<Role> GetRole([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Roles.Where(role => role.Id == key));
        }

        // PUT: odata/Roles(5)
        public async Task<IHttpActionResult> Put([FromODataUri] Guid key, Delta<Role> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Role role = await db.Roles.FindAsync(key);
            if (role == null)
            {
                return NotFound();
            }

            patch.Put(role);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoleExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(role);
        }

        // POST: odata/Roles
        public async Task<IHttpActionResult> Post(Role role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Roles.Add(role);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RoleExists(role.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(role);
        }

        // PATCH: odata/Roles(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] Guid key, Delta<Role> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Role role = await db.Roles.FindAsync(key);
            if (role == null)
            {
                return NotFound();
            }

            patch.Patch(role);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoleExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(role);
        }

        // DELETE: odata/Roles(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] Guid key)
        {
            Role role = await db.Roles.FindAsync(key);
            if (role == null)
            {
                return NotFound();
            }

            db.Roles.Remove(role);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Roles(5)/UserRoles
        [EnableQuery]
        public IQueryable<UserRole> GetUserRoles([FromODataUri] Guid key)
        {
            return db.Roles.Where(m => m.Id == key).SelectMany(m => m.UserRoles);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RoleExists(Guid key)
        {
            return db.Roles.Count(e => e.Id == key) > 0;
        }
    }
}
