using System;

namespace Cribbage.Web.Model
{
    public partial class Error
    {
        public Guid Id { get; set; }
        public string Message { get; set; }
        public string AdditionalInfo { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
