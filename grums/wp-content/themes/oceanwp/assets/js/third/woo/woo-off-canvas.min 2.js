function oceanwpWooOffCanvas(){"use strict";$j(document).on("click",".oceanwp-off-canvas-filter",function(n){n.preventDefault();var o=$j("html").innerWidth();$j("html").css("overflow","hidden");var a=$j("html").innerWidth();$j("html").css("margin-right",a-o),$j("body").addClass("off-canvas-enabled")}),$j(".oceanwp-off-canvas-overlay, .oceanwp-off-canvas-close").on("click",function(){$j("html").css({overflow:"","margin-right":""}),$j("body").removeClass("off-canvas-enabled")})}var $j=jQuery.noConflict();$j(document).on("ready",function(){"use strict";oceanwpWooOffCanvas()});