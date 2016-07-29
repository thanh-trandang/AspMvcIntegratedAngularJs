using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EBox.MvcApp.Startup))]
namespace EBox.MvcApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}