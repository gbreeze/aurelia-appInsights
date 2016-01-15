using Microsoft.Owin.Extensions;
using Nwc.Web;
using Owin;
using System.Configuration;

public class Startup
{
	public void Configuration(IAppBuilder app)
	{
		app.UseNancy();
		app.UseStageMarker(PipelineStage.MapHandler);
	}
}