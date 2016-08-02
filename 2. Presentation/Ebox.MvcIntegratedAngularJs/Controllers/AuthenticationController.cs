using Ebox.MvcIntegratedAngularJs.Feature.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ebox.MvcIntegratedAngularJs.Controllers
{
    public class AuthenticationController : Controller
    {
        public ActionResult SignIn()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SignIn(LoginCommand logInCommand)
        {

            return View();
        }
    }
}