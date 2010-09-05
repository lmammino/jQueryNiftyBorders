jQueryNiftyBorders
==================
jQueryNiftyBorders is a simple jQuery plugin that makes easy to create some nifty border animations while hovering on DOM elements such as images or divs.
It has been inspired by the wonderful work of [Robin Thrift](http://twitter.com/RobinThrift) and [Chris Coyier](http://twitter.com/chriscoyier), the "[inset border effect jQuery plugin](http://css-tricks.com/inset-border-effect/)".


## State of the art ##
The plugin has been developed in a few hours and actually it has been only superficially tested. We only realized a demo page where everything seems to work but, we know, a deeper testing session should be done to gain more reliability.
So currently we must discourage the production environment usage.
We decided to push this early version of plugin on github just because we believe on the github community power. If you're a jQuery guru and you like this project don't hesitate to fork the project or to send us some suggestion to make it better and better.


## Developers ##
- [Andrea M](mailto:kapitan0@hotmail.it)
- [Luciano "loige" M](mailto:loige@hotmail.it)


## Usage ##
Like most jQuery plugins you have to chain the specific plugin function to a jQuery selector to apply the plugin behavior to the selected elements.
In this case you can simply call:

    $("yourSelector").niftyBorders( options );

The list of all the available options is provided below.


## Options ##
Here's a list of all the available options. The default value is in brackets.

- `speed` (_"fast"_): The speed of the animation of the borders. You can use the default string values "slow", "medium" or "fast" constants or an integer that indicates the duration in ms of the animation.
- `easing` (_"swing"_): The animation easing function
- `borderTickness` (_0_): the default tickness of the borders (in pixel)
- `borderColor` (_"#fff"_): the border color
- `borderOpacity` (_1_): the default opacity of the borders (from _0.0_ to _1.0_)
- `borderType` (_"solid"_):  the type of borders. Eg. "solid", "dotted","double", "inset", etc...
- `borderHoverTickness` (_10_):  the tickness of the border when the mouse cursor is over the element
- `borderHoverOpacity` (_1_): the opacity of the border when the mouse cursor is over the element
- `containerClass` (_"nb_container"_): the class that is assigned to a new div that will be created to surround and mask the selected DOM element
- `bordersClass` (_"nb_borders"_): the class that is assigned to a div created to draw the borders
- `onMouseEnter` (_$.noop_): a callback function that will be called on mouse enter (mouse cursor over the element)
- `onMouseLeave` (_$.noop_): a callback function that will be called on mouse leave

## License ##
You are free to use this plug in in any way you want non-commercially and commercially. However if you redistribute (even when altered by you) you have to give credit to the developers by linking the original github page of the project.


## What the hell! This is not english! This is _"Macaroni English"_ !!! ##
We, the developers, are both Italian guys. Our english knowledge is just "scolastic", so our english is really far from perfection. Please be quite if this documents is not correct. We just hope that it's clear enough! If your english is better than ours (surely it is), please feel free to send us some suggestion to improve the whole plugin documentation: you'll be officially rewarded with a beer (maybe a virtual one, but that's just a detail :P).

### Thankyou for being interested on this project ! ;) ###