using Ebox.MvcIntegratedAngularJs.Feature.UserProfile;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ebox.MvcIntegratedAngularJs.Controllers
{
    public class ProfileController : Controller
    {
        // GET: Profile
        public ActionResult EditProfile()
        {
            return View();
        }

        [HttpPost]
        public ActionResult EditProfile(EditProfileCommand editProfileCommand)
        {
            return View(editProfileCommand);
        }
    }
}