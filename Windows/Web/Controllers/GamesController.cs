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
    public class GamesController : ODataController
    {
        private CribbageEntitiesContext db = new CribbageEntitiesContext();

        // GET: odata/Games
        [EnableQuery]
        public IQueryable<Game> GetGames()
        {
            return db.Games;
        }

        // GET: odata/Games(5)
        [EnableQuery]
        public SingleResult<Game> GetGame([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Games.Where(game => game.Id == key));
        }

        // PUT: odata/Games(5)
        public async Task<IHttpActionResult> Put([FromODataUri] Guid key, Delta<Game> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Game game = await db.Games.FindAsync(key);
            if (game == null)
            {
                return NotFound();
            }

            patch.Put(game);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(game);
        }

        // POST: odata/Games
        public async Task<IHttpActionResult> Post(Game game)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Games.Add(game);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GameExists(game.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(game);
        }

        // PATCH: odata/Games(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] Guid key, Delta<Game> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Game game = await db.Games.FindAsync(key);
            if (game == null)
            {
                return NotFound();
            }

            patch.Patch(game);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(game);
        }

        // DELETE: odata/Games(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] Guid key)
        {
            Game game = await db.Games.FindAsync(key);
            if (game == null)
            {
                return NotFound();
            }

            db.Games.Remove(game);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Games(5)/Match
        [EnableQuery]
        public SingleResult<Match> GetMatch([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Games.Where(m => m.Id == key).Select(m => m.Match));
        }

        // GET: odata/Games(5)/Players
        [EnableQuery]
        public IQueryable<Player> GetPlayers([FromODataUri] Guid key)
        {
            return db.Games.Where(m => m.Id == key).SelectMany(m => m.Players);
        }

        // GET: odata/Games(5)/Hands
        [EnableQuery]
        public IQueryable<GameHand> GetHands([FromODataUri] Guid key)
        {
            return db.Games.Where(m => m.Id == key).SelectMany(m => m.Hands);
        }

        // GET: odata/Games(5)/CurrentHand
        [EnableQuery]
        public SingleResult<GameHand> GetCurrentHand([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Games.Where(m => m.Id == key).Select(m => m.CurrentHand));
        }

        // GET: odata/Games(5)/CurrentDealer
        [EnableQuery]
        public SingleResult<Player> GetCurrentDealer([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Games.Where(m => m.Id == key).Select(m => m.CurrentDealer));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GameExists(Guid key)
        {
            return db.Games.Count(e => e.Id == key) > 0;
        }
    }
}
