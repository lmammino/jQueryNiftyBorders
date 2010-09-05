(function($){  
	$.fn.niftyBorders = function(options) {  
		
		var defaults = {
  			speed : 				"fast",
			easing: 				"swing", 
			borderTickness : 		0,
			borderColor : 			"#fff",
			borderOpacity: 			1,
			borderType : 			"solid",
			borderHoverTickness: 	10,
			borderHoverOpacity: 	1,
			containerClass: 		"nb_container",
			bordersClass: 			"nb_borders",
			onMouseEnter: 			$.noop,
			onMouseLeave: 			$.noop
		};  
	
		var options = $.extend(defaults, options);  
    
		return this.each(function(i) 
		{  
			var 
				obj = $(this),
				w = obj.outerWidth(),
				h = obj.outerHeight(),
				container = obj.wrap('<div class="' + options.containerClass + '">').parent(),
				borders = $('<div class="'+ options.bordersClass +'">').appendTo(container),
				borderTickness = Math.max(options.borderTickness, options.borderHoverTickness),
				scale = options.borderTickness - borderTickness,
				scaleHover = options.borderHoverTickness - borderTickness,
				bordersStyle = {
								width: w - options.borderTickness * 2, 
							  	height: h - options.borderTickness * 2, 
							  	"top" : scale, 
							  	"left" : scale, 
							  	"opacity": options.borderOpacity
				},
				bordersHoverStyle = {
								width: w - options.borderHoverTickness * 2, 
							  	height: h - options.borderHoverTickness * 2, 
							  	"top" : scaleHover, 
							  	"left" : scaleHover, 
							  	"opacity": options.borderHoverOpacity
				};
				
			container.css( {width: w, 
							height: h, 
							"position" : "relative", 
							"overflow" : "hidden"});
			
			borders.css( { border: (borderTickness) + "px " + options.borderType + " " + options.borderColor, 
						  "position" : "absolute"}).css(bordersStyle);
			
			container.hover(function(){
				borders.stop().animate( bordersHoverStyle, options.speed, options.easing, options.onMouseEnter )
			},
			function(){
				borders.stop().animate( bordersStyle, options.speed, options.easing, options.onMouseLeave )
			})
		}); 
		 
	};  
})(jQuery);