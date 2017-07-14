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
    public class MatchesController : ODataController
    {
        private CribbageWebContext db = new CribbageWebContext();

        // GET: odata/Matches
        [EnableQuery]
        public IQueryable<Match> GetMatches()
        {
            return db.Matches;
        }

        // GET: odata/Matches(5)
        [EnableQuery]
        public SingleResult<Match> GetMatch([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Matches.Where(match => match.Id == key));
        }

        // PUT: odata/Matches(5)
        public async Task<IHttpActionResult> Put([FromODataUri] Guid key, Delta<Match> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Match match = await db.Matches.FindAsync(key);
            if (match == null)
            {
                return NotFound();
            }

            patch.Put(match);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MatchExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(match);
        }

        // POST: odata/Matches
        public async Task<IHttpActionResult> Post(Match match)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Matches.Add(match);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MatchExists(match.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(match);
        }

        // PATCH: odata/Matches(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] Guid key, Delta<Match> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Match match = await db.Matches.FindAsync(key);
            if (match == null)
            {
                return NotFound();
            }

            patch.Patch(match);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MatchExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(match);
        }

        // DELETE: odata/Matches(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] Guid key)
        {
            Match match = await db.Matches.FindAsync(key);
            if (match == null)
            {
                return NotFound();
            }

            db.Matches.Remove(match);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Matches(5)/CurrentGame
        [EnableQuery]
        public SingleResult<Game> GetCurrentGame([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Matches.Where(m => m.Id == key).Select(m => m.CurrentGame));
        }

        // GET: odata/Matches(5)/Games
        [EnableQuery]
        public IQueryable<Game> GetGames([FromODataUri] Guid key)
        {
            return db.Matches.Where(m => m.Id == key).SelectMany(m => m.Games);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MatchExists(Guid key)
        {
            return db.Matches.Count(e => e.Id == key) > 0;
        }
    }
}
