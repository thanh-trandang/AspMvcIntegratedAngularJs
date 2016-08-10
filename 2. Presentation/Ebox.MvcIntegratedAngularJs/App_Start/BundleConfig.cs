﻿using System.Web;
using System.Web.Optimization;

namespace Ebox.MvcIntegratedAngularJs
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-theme.css",
                      "~/Content/loading-bar.css",
                      "~/Scripts/angular-block-ui/angular-block-ui.css",
                      "~/Scripts/angular-block-ui/angular-block-ui.theme.css",
                      "~/Scripts/angular-toastr/angular-toastr.css",
                      "~/Scripts/angular-toastr/angular-toastr.theme.css",

                      "~/Scripts/ng-ladda/ladda-themeless.min.css",

                      "~/Scripts/angular-spinkit/angular-spinkit.min.css",

                      //"~/Scripts/angular-flash/angular-flash.css",

                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular/angular.js",
                "~/Scripts/angular/angular-animate.js",
                "~/Scripts/angular/angular-route.js",
                "~/Scripts/angular/angular-bootstrap-checkbox.js",
                "~/Scripts/ui-router/angular-ui-router.js",
                "~/Scripts/ui-bootstrap/ui-bootstrap-tpls-2.0.1.js",
                "~/Scripts/loading-bar.js",
                "~/Scripts/valdr/valdr.js",
                "~/Scripts/valdr/valdr-message.js",
                "~/Scripts/angular-block-ui/angular-block-ui.js",
                "~/Scripts/moment/moment.js",
                "~/Scripts/moment/moment-timezone-with-data.js",
                "~/Scripts/moment/angular-moment.js",
                "~/Scripts/angular-toastr/angular-toastr.js",
                "~/Scripts/angular-toastr/angular-toastr.tpls.js",
                "~/Scripts/ng-idle/angular-idle.js",

                "~/Scripts/spinjs/spin.min.js",

                 "~/Scripts/ng-ladda/ladda.jquery.min.js",
                 "~/Scripts/ng-ladda/ladda.min.js",
                 "~/Scripts/ng-ladda/ng-ladda.js",

                 "~/Scripts/angular-spinkit/angular-spinkit.js",

                 "~/Scripts/angular-flash/angular-flash.js",

                 "~/Scripts/re-tree/re-tree.js",
                 "~/Scripts/ng-device-detector/ng-device-detector.js"));
        }
    }
}
