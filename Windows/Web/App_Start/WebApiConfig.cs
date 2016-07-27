using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.OData.Builder;
using System.Web.Http.OData.Extensions;
using Cribbage.Web.Model;

namespace Cribbage.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();

            

            builder.EntitySet<Card>("Cards");
            builder.EntitySet<PlayedCard>("PlayedCards");
            builder.EntitySet<Deck>("Decks");
            builder.EntitySet<Match>("Matches");
            builder.EntitySet<GameHand>("GameHands");
            builder.EntitySet<Game>("Games");
            builder.EntitySet<PlayerHand>("PlayerHands");
            builder.EntitySet<User>("Users");
            builder.EntitySet<UserRole>("UserRoles");
            builder.EntitySet<Player>("Players");
            builder.EntitySet<GameHand>("GameHands");
            config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
        }
    }
}
