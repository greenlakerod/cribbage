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
    public class CardsController : ODataController
    {
        private CribbageWebContext db = new CribbageWebContext();

        // GET: odata/Cards
        [EnableQuery]
        public IQueryable<Card> GetCards()
        {
            return db.Cards;
        }

        // GET: odata/Cards(5)
        [EnableQuery]
        public SingleResult<Card> GetCard([FromODataUri] Guid key)
        {
            return SingleResult.Create(db.Cards.Where(card => card.Id == key));
        }

        // PUT: odata/Cards(5)
        public async Task<IHttpActionResult> Put([FromODataUri] Guid key, Delta<Card> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Card card = await db.Cards.FindAsync(key);
            if (card == null)
            {
                return NotFound();
            }

            patch.Put(card);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(card);
        }

        // POST: odata/Cards
        public async Task<IHttpActionResult> Post(Card card)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Cards.Add(card);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CardExists(card.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Created(card);
        }

        // PATCH: odata/Cards(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] Guid key, Delta<Card> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Card card = await db.Cards.FindAsync(key);
            if (card == null)
            {
                return NotFound();
            }

            patch.Patch(card);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(card);
        }

        // DELETE: odata/Cards(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] Guid key)
        {
            Card card = await db.Cards.FindAsync(key);
            if (card == null)
            {
                return NotFound();
            }

            db.Cards.Remove(card);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CardExists(Guid key)
        {
            return db.Cards.Count(e => e.Id == key) > 0;
        }
    }
}
