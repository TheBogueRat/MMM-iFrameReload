/* global Module */

/* Magic Mirror
 * Module: MMM-iFrameReload
 *
 * Original iFrame module By Ben Williams http://desertblade.com
 * Auto-reload added by Jody J Roth https://github/TheBogueRat
 * MIT Licensed.
 */

Module.register("MMM-iFrameReload",{
	// Default module config.
	defaults: {
		url: "",
		height:"800px",
		width:"400%",
		refreshInterval: 3600,
		animationSpeed: 1000
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
		this.scheduleUpdate(this.config.refreshInterval);
	},
	// Override dom generator.
	getDom: function() {
		var iframe = document.createElement("IFRAME");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  this.config.url;
		return iframe;
	},
	scheduleUpdate: function(delay) {
		var nextLoad = this.config.refreshInterval;
		if (typeof delay !== "undefined" && delay >= 0) {
			nextLoad = delay * 1000; // Convert seconds to millis
		}
		var self = this;
		setTimeout(function() {
			self.updateFrame();
		}, nextLoad);
	},
	updateFrame: function() {
		if (this.config.url === "") {
			Log.error("Tried to refresh, iFrameReload URL not set!");
			return;
		}
		// Change url to force refresh?
		this.src = this.config.url;
		Log.info("attempting to update dom for iFrameReload");
		Log.info('/"this/" module is: ' + this);
		this.updateDom(this.config.animationSpeed);
		this.scheduleUpdate(this.config.refreshInterval);
	}
});
