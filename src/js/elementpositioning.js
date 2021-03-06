;(function( $ ) {
    'use strict';
    // This plugin positions an absolute element within a relative container element  
    // Define a function that centers elements
    // Pass the alignment argument, this will determine whether an
    // element should be aligned vertically, horizontally or both ways to the parent
    // container
    $.fn.positionElement = function( options ) {
      // Define variables and defaults.
      var defaults = { alignment: 'middle-center' }, options = $.extend( defaults, options ), $parent = this.parent(), $child = $(this), $top, $left;
      var applyStyling = function(obj, styleProps){
          obj.css(styleProps);
      };
    	// Apply relative to the parent element,
    	// This is to allow a child element to be absolute
    	$parent.css({ "position" : "relative" });
    	// Iterate in case you need to center more than one element with the same class name
    	$child.each(function(index){
    		  $top = parseInt($parent.height()/2) - parseInt($(this).height()/2);
    		  $left = parseInt($parent.width()/2) - parseInt($(this).width()/2);
          // Apply style positioning based on the alignment condition
          $(this).css({ "position": "absolute" });
          switch(options.alignment){
              case 'top-center':
                applyStyling($(this), { "top" : "0", "left" : $left + "px" } );
                break;
              case 'top-left':
                applyStyling($(this), { "top" : "0", "left" : "0" } );
                break;
              case 'top-right':
                applyStyling($(this), { "top" : "0", "right" : "0" } );
                break;
              case 'middle-center':
                applyStyling($(this), { "top" : $top + "px", "left" : $left + "px" } );
                break;
              case 'middle-left':
                applyStyling($(this), { "top" : $top + "px", "left" : "0" } );
                break;
              case 'middle-right':
                applyStyling($(this), { "top" : $top + "px", "right" : "0" } );
                break;
              case 'bottom-left':
                applyStyling($(this), { "top" : $top + "px", "right" : "0" } );
                break;
          }
    	});
        return this;
    };
}( jQuery ));