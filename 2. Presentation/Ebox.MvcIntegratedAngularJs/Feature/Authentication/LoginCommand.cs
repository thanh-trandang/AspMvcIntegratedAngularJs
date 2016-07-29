﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Ebox.MvcIntegratedAngularJs.Feature.Authentication
{
    public class LoginCommand
    {
        [Required]
        public String UserName { get; set; }

        [Required]
        public String Password { get; set; }

    }
}