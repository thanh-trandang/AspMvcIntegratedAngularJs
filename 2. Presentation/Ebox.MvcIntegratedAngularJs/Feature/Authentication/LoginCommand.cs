using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Ebox.MvcIntegratedAngularJs.Feature.Authentication
{
    public class LoginCommand
    {
        [Required]
        public String Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public String Password { get; set; }

        public bool RememberMe { get; set; }

    }
}