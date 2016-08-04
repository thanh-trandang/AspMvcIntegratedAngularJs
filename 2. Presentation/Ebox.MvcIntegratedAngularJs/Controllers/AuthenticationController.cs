using Ebox.MvcIntegratedAngularJs.Feature.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
            System.Threading.Thread.Sleep(10000);
            if (ModelState.IsValid)
            {
                return Json(new { success = true });
            }

            var errorList = new List<ValidationError>();
            this.ModelState.Keys.ToList().ForEach(key =>
            {
                ModelState modelState = null;
                if(this.ModelState.TryGetValue(key, out modelState))
                {
                    errorList.AddRange(modelState.Errors.ToList()
                    .Select(err => new ValidationError
                    {
                        Key = key,
                        Message = err.ErrorMessage
                    }));
                }
            });

            var response = new ValidationErrorResponse()
            {
                Type = "Validation",
                Errors = errorList
            };

            this.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            return Json(response, JsonRequestBehavior.DenyGet);
        }
    }

    public class ValidationError
    {
        public string Key { get; set; }
        public string Message { get; set; }
    }

    public class ValidationErrorResponse
    {
        public string Type { get; set; }
        public IEnumerable<ValidationError> Errors { get; set; }

        public ValidationErrorResponse()
        {
            Errors = new List<ValidationError>();
        }
    }
}