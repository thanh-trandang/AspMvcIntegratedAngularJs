using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Ebox.MvcIntegratedAngularJs.Feature.Registration
{
    public class RegistrationCommand
    {
        [Required]
        [Display(Description = "User name"]
        public String UserName { get; set; }

        [Required]
        public String Password { get; set; }

        [Required]
        [Display(Description = "First name")]
        public String FirstName { get; set; }

        [Required]
        [Display(Description = "Last name")]
        public String LastName { get; set; }
    }
}