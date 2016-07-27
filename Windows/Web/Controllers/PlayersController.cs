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
    public class PlayersController : ODataController
    {
        private CribbageWebContext db = new CribbageWebContext();

        // GET: odata/Players
        [EnableQuery]
        public IQueryable<Player> GetPlayers()
        {
            return db.Players;
        }

        // GET: odata/Players(5)
        [EnableQuery]
        public SingleResult<Player> GetPlayer([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Players.Where(player => player.Id == key));
        }

        // PUT: odata/Players(5)
        public async Task<IHttpActionResult> Put([FromODataUri] Guid key, Delta<Player> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Player player = await db.Players.FindAsync(key);
            if (player == null)
            {
                return NotFound();
            }

            patch.Put(player);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(player);
        }

        // POST: odata/Players
        public async Task<IHttpActionResult> Post(Player player)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Players.Add(player);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PlayerExists(player.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(player);
        }

        // PATCH: odata/Players(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] Guid key, Delta<Player> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Player player = await db.Players.FindAsync(key);
            if (player == null)
            {
                return NotFound();
            }

            patch.Patch(player);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(player);
        }

        // DELETE: odata/Players(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] Guid key)
        {
            Player player = await db.Players.FindAsync(key);
            if (player == null)
            {
                return NotFound();
            }

            db.Players.Remove(player);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Players(5)/Crib
        [EnableQuery]
        public SingleResult<PlayerHand> GetCrib([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Players.Where(m => m.Id == key).Select(m => m.Crib));
        }

        // GET: odata/Players(5)/CurrentHand
        [EnableQuery]
        public SingleResult<PlayerHand> GetCurrentHand([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Players.Where(m => m.Id == key).Select(m => m.CurrentHand));
        }

        // GET: odata/Players(5)/Game
        [EnableQuery]
        public SingleResult<Game> GetGame([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Players.Where(m => m.Id == key).Select(m => m.Game));
        }

        // GET: odata/Players(5)/Hands
        [EnableQuery]
        public IQueryable<PlayerHand> GetHands([FromODataUri] Guid key)
        {
            return db.Players.Where(m => m.Id == key).SelectMany(m => m.Hands);
        }

        // GET: odata/Players(5)/User
        [EnableQuery]
        public SingleResult<User> GetUser([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Players.Where(m => m.Id == key).Select(m => m.User));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlayerExists(Guid key)
        {
            return db.Players.Count(e => e.Id == key) > 0;
        }
    }
}
