# Module: iFrameReload
Another `iFrame` module for MagicMirror with timed refresh intervals.  Based on the [Desert Blade](https://github.com/desertblade/iFrame) MMM-iFrame.  Adds an iFrame that perodically refreshes its content to your [MagicMirror](https://github.com/MichMich/MagicMirror).

## Installation
Run these commands at the root of your magic mirror install.

```shell
cd modules
git clone https://github.com/TheBogueRat/MMM-iFrameReload
```

## Using the module
To use this module, add it to the modules array in the `config/config.js` file:
``` javascript
modules: [
	{
		module: 'iFrameReload',
		position: 'bottom_bar',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: "http://YOUR.TARGET.URL",
				width: "100%", // Optional. Default: 400px
				height: "300px", // Optional. Default: 800px
        			refreshInterval: 3600  //Optional. Default: 3600 = 1 hour
			}
		}
	}
]
```

## Configuration options

The following properties can be configured:

#### URL
Type: `URL` Default value: `empty`

For use with Facebook, try the src value from the iframe tag they provide.

``` HTML
<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMCASCherryPoint%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=254272385726401" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
```

Use this part: 
```TEXT
https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMCASCherryPoint%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=254272385726401
```
And set your height/width below to the same values.

#### width

Type: `CSS Value` Default value: `400px`

The width of the iFrame in CSS valid units. i.e. 300px, 80%.

#### height
Type: `CSS Value` Default value: `800px`

The height of the iFrame in CSS valid units. i.e. 300px, 80%.

#### refreshInterval
Type: `Integer` Default value: `3600`

How often the page is refreshed in seconds.
