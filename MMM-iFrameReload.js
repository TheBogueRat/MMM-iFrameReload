/* global Module */

/* Magic Mirror
 * Module: iFrameReload
 *
 * Original iFrame module By Ben Williams http://desertblade.com
 * Auto-reload added by Jody J Roth https://github/TheBogueRat
 * MIT Licensed.
 */

Module.register("iFrameReload",{
		// Default module config.
		defaults: {
				height:"300px",
				width:"100%",
        refreshInterval: 3600
		},


	// Override dom generator.
	getDom: function() {
		var iframe = document.createElement("IFRAME");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  this.config.url;
		return iframe;
	}

});
