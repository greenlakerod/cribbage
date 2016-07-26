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
using Cribbage.Data.Configurations;
using Cribbage.Entities;

namespace Web.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using Cribbage.Entities;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<PlayerHand>("PlayerHands");
    builder.EntitySet<GameHand>("GameHands"); 
    builder.EntitySet<Player>("Players"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class PlayerHandsController : ODataController
    {
        private CribbageEntitiesContext db = new CribbageEntitiesContext();

        // GET: odata/PlayerHands
        [EnableQuery]
        public IQueryable<PlayerHand> GetPlayerHands()
        {
            return db.PlayerHands;
        }

        // GET: odata/PlayerHands(5)
        [EnableQuery]
        public SingleResult<PlayerHand> GetPlayerHand([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.PlayerHands.Where(playerHand => playerHand.Id == key));
        }

        // PUT: odata/PlayerHands(5)
        public async Task<IHttpActionResult> Put([FromODataUri] Guid key, Delta<PlayerHand> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PlayerHand playerHand = await db.PlayerHands.FindAsync(key);
            if (playerHand == null)
            {
                return NotFound();
            }

            patch.Put(playerHand);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerHandExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(playerHand);
        }

        // POST: odata/PlayerHands
        public async Task<IHttpActionResult> Post(PlayerHand playerHand)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PlayerHands.Add(playerHand);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PlayerHandExists(playerHand.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(playerHand);
        }

        // PATCH: odata/PlayerHands(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] Guid key, Delta<PlayerHand> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PlayerHand playerHand = await db.PlayerHands.FindAsync(key);
            if (playerHand == null)
            {
                return NotFound();
            }

            patch.Patch(playerHand);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerHandExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(playerHand);
        }

        // DELETE: odata/PlayerHands(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] Guid key)
        {
            PlayerHand playerHand = await db.PlayerHands.FindAsync(key);
            if (playerHand == null)
            {
                return NotFound();
            }

            db.PlayerHands.Remove(playerHand);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/PlayerHands(5)/GameHand
        [EnableQuery]
        public SingleResult<GameHand> GetGameHand([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.PlayerHands.Where(m => m.Id == key).Select(m => m.GameHand));
        }

        // GET: odata/PlayerHands(5)/Player
        [EnableQuery]
        public SingleResult<Player> GetPlayer([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.PlayerHands.Where(m => m.Id == key).Select(m => m.Player));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlayerHandExists(Guid key)
        {
            return db.PlayerHands.Count(e => e.Id == key) > 0;
        }
    }
}
