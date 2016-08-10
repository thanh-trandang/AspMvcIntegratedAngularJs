﻿using Ebox.MvcIntegratedAngularJs.Feature.Authentication;
using Ebox.MvcIntegratedAngularJs.Validation.MvcExtenstion;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;

namespace Ebox.MvcIntegratedAngularJs.Controllers
{
    public class AuthenticationController : Controller
    {
        private readonly IAuthenticationManager _authenticationManager;
        private readonly IAuthenticationService _authenticationService;

        public AuthenticationController(IAuthenticationManager authenticationManager, IAuthenticationService authenticationService)
        {
            this._authenticationManager = authenticationManager;
            this._authenticationService = authenticationService;
        }

        public ActionResult SignIn()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult SignIn(LoginCommand logInCommand)
        {
            System.Threading.Thread.Sleep(5000);

            if (ModelState.IsValid && this._authenticationService.Validate(logInCommand.Email, logInCommand.Password))
            {
                var identity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Email, logInCommand.Email), }, DefaultAuthenticationTypes.ApplicationCookie);

                this._authenticationManager.SignIn(
                    new AuthenticationProperties
                    {
                        IsPersistent = logInCommand.RememberMe
                    }, identity);

                return Json(new { success = true });
            }
            else
            {
                ModelState.AddModelError("", "Invalid login attempt.");
            }

            this.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            return Json(this.ValidationJsonResponse(), JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            this._authenticationManager.SignOut();
            return RedirectToAction("SignIn");
        }
    }
}