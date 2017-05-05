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
	myUpdateInterval: null, 

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
		this.scheduleUpdate();
	},
	
	suspend : function() {
	  Log.info("Suspending module: " + this.name);
	  this.cancelUpdate();
	},
	
	resume : function() {
	  Log.info("Resuming module: " + this.name);
	  this.updateFrame();
	  this.scheduleUpdate();
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
	
	scheduleUpdate: function() {
		var interval = this.config.refreshInterval * 1000; // Convert seconds to millis
		var self = this;
		this.myUpdateInterval = setInterval(function() {
			self.updateFrame();
		}, interval);
	},
	
	cancelUpdate: function() {
		clearInterval(this.myUpdateInterval);
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
	}
});
