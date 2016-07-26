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
    public class GameHandsController : ODataController
    {
        private CribbageEntitiesContext db = new CribbageEntitiesContext();

        // GET: odata/GameHands
        [EnableQuery]
        public IQueryable<GameHand> GetGameHands()
        {
            return db.GameHands;
        }

        // GET: odata/GameHands(5)
        [EnableQuery]
        public SingleResult<GameHand> GetGameHand([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.GameHands.Where(gameHand => gameHand.Id == key));
        }

        // PUT: odata/GameHands(5)
        public async Task<IHttpActionResult> Put([FromODataUri] Guid key, Delta<GameHand> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            GameHand gameHand = await db.GameHands.FindAsync(key);
            if (gameHand == null)
            {
                return NotFound();
            }

            patch.Put(gameHand);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameHandExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(gameHand);
        }

        // POST: odata/GameHands
        public async Task<IHttpActionResult> Post(GameHand gameHand)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.GameHands.Add(gameHand);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GameHandExists(gameHand.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(gameHand);
        }

        // PATCH: odata/GameHands(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] Guid key, Delta<GameHand> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            GameHand gameHand = await db.GameHands.FindAsync(key);
            if (gameHand == null)
            {
                return NotFound();
            }

            patch.Patch(gameHand);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameHandExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(gameHand);
        }

        // DELETE: odata/GameHands(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] Guid key)
        {
            GameHand gameHand = await db.GameHands.FindAsync(key);
            if (gameHand == null)
            {
                return NotFound();
            }

            db.GameHands.Remove(gameHand);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/GameHands(5)/Game
        [EnableQuery]
        public SingleResult<Game> GetGame([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.GameHands.Where(m => m.Id == key).Select(m => m.Game));
        }

        // GET: odata/GameHands(5)/PlayerHands
        [EnableQuery]
        public IQueryable<PlayerHand> GetPlayerHands([FromODataUri] Guid key)
        {
            return db.GameHands.Where(m => m.Id == key).SelectMany(m => m.PlayerHands);
        }

        // GET: odata/GameHands(5)/Crib
        [EnableQuery]
        public SingleResult<PlayerHand> GetCrib([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.GameHands.Where(m => m.Id == key).Select(m => m.Crib));
        }

        // GET: odata/GameHands(5)/LastPlayer
        [EnableQuery]
        public SingleResult<Player> GetLastPlayer([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.GameHands.Where(m => m.Id == key).Select(m => m.LastPlayer));
        }

        // GET: odata/GameHands(5)/CurrentPlayer
        [EnableQuery]
        public SingleResult<Player> GetCurrentPlayer([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.GameHands.Where(m => m.Id == key).Select(m => m.CurrentPlayer));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GameHandExists(Guid key)
        {
            return db.GameHands.Count(e => e.Id == key) > 0;
        }
    }
}
