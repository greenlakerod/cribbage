using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cribbage.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var uri = new Uri("http://localhost:8080/odata/");
                var container = new CribbageService.Container(uri);

                container.SendingRequest2 += (s, e) => {
                    System.Console.WriteLine("{0} {1}", e.RequestMessage.Method, e.RequestMessage.Url);
                };

                ListAllCards(container);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("ERROR: {0}", ex.ToString());
            }
        }

        static void DisplayCard(CribbageService.Card card)
        {
            System.Console.WriteLine("{0} of {1}", card.Value, card.Suit);
        }

        static void ListAllCards(CribbageService.Container container)
        {
            foreach (var card in container.Cards)
            {
                DisplayCard(card);
            }
        }
    }
}
