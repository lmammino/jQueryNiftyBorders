/*!
jQueryNiftyBorders is a simple jQuery plugin that makes easy to create some nifty border animations while hovering on DOM elements such as images or divs.

@usage $("yourSelector").niftyBorders( options );

@author Andrea M <kapitan0@hotmail.it>
@author Luciano "loige" M <loige@hotmail.com>

@version 0.1 alpha
@license You are free to use this plug in in any way you want non-commercially and commercially. However if you redistribute (even when altered by you) you have to give credit to the developers by linking the original github page of the project.
*/

// Creates no $ conflict 
(function($){  
	$.fn.niftyBorders = function(options) {  
		
		var self = this;
		
		// the set of the default options
		var defaults = {
  			speed : 				"fast",			// The speed of the animation of the borders. You can use the default string values "slow", "medium" or "fast" constants or an integer that indicates the duration in ms of the animation.
			easing: 				"swing", 		// The animation easing function
			borderTickness : 		0,				// The default tickness of the borders (in pixel)
			borderColor : 			"#fff",			// The border color
			borderOpacity: 			1,				// The default opacity of the borders, from 0.0 (transparent) to 1.0 (opaque)
			borderType : 			"solid",		// The type of borders. Eg. "solid", "dotted","double", "inset", etc...
			borderHoverTickness: 	10,				// The tickness of the border when the mouse cursor is over the element
			borderHoverOpacity: 	1,				// The opacity of the border when the mouse cursor is over the element
			containerClass: 		"nb_container",	// The class that is assigned to a new div that will be created to surround and mask the selected DOM element
			bordersClass: 			"nb_borders",	// The class that is assigned to a div created to draw the borders
			onMouseEnter: 			$.noop,			// A callback function that will be called on mouse enter (mouse cursor over the element)
			onMouseLeave: 			$.noop			// A callback function that will be called on mouse leave
		};  
	
		var options = $.extend(defaults, options);  // merges the provided options with the default ones
    
		// function that initializes an object
		self.init = function(obj)
		{
			var 
				w = obj.outerWidth(), // the width of the current element
				h = obj.outerHeight(), // the heiht of the current element
				container = obj.wrap('<div class="' + options.containerClass + '">').parent(), // a container used to mask the current element
				borders = $('<div class="'+ options.bordersClass +'">').appendTo(container), // a div used to create the borders
				borderTickness = Math.max(options.borderTickness, options.borderHoverTickness), // calculates the tickness of the borders 
				scale = options.borderTickness - borderTickness, // how much (in pixels) the borders div should be reduced onMouseLeave
				scaleHover = options.borderHoverTickness - borderTickness, // how much (in pixels) the borders div should be reduced onMouseEnter
				bordersStyle = { // the style of the borders on mouseLeave
								width: w - options.borderTickness * 2, 
							  	height: h - options.borderTickness * 2, 
							  	"top" : scale, 
							  	"left" : scale, 
							  	"opacity": options.borderOpacity
				},
				bordersHoverStyle = { // the style of the borders on mouseEnter
								width: w - options.borderHoverTickness * 2, 
							  	height: h - options.borderHoverTickness * 2, 
							  	"top" : scaleHover, 
							  	"left" : scaleHover, 
							  	"opacity": options.borderHoverOpacity
				};

			// applies some style to the container to mask its overflowing content	
			container.css( {width: w, 
							height: h, 
							"position" : "relative", 
							"overflow" : "hidden"});

			// applies some style to the borders div
			borders.css( { border: (borderTickness) + "px " + options.borderType + " " + options.borderColor, 
						  "position" : "absolute"}).css(bordersStyle);

			// adds the hover behaviors
			container.hover(function(){
				borders.stop().animate( bordersHoverStyle, options.speed, options.easing, options.onMouseEnter )
			},
			function(){
				borders.stop().animate( bordersStyle, options.speed, options.easing, options.onMouseLeave )
			})
		} // end init function



		// executes the code on the selected elements
		return this.each( function(i) 
		{  
			var obj = $(this); // the current element
			
			// defines an object that checks if the current element contains images to load
			// to initialize the element only after all the images has been loaded
			obj.loader = {
	            images : (obj[0].nodeName === "IMG")? obj : obj.find("img"),
	            loaded : 0,
	            check : function(){
	              if(obj.loader.images.length == obj.loader.loaded)
	              {
						self.init(obj);
	              }
	            },
	            handler : function(event){
					obj.loader.loaded++;
	                obj.loader.check();
	            }
        	};

        	for(var i=0; i < obj.loader.images.length; i++)
	        {
	            if(obj.loader.images[i].complete == true)
	            {
	                obj.loader.loaded++;
	            }
	            else
	            {
	                $(obj.loader.images[i]).load(obj.loader.handler);
	            }
	        }

        	obj.loader.check();	
		}); 
		 
	};  
})(jQuery);