function oceanwpEddDisplayCart(){"use strict";var o=$j(".owp-cart-overlay");$j("body").on("edd_cart_item_added",function(){o.fadeIn(),$j("body").addClass("show-cart");var e=$j("#owp-qv-wrap"),t=$j("#owp-qv-content");e.length&&($j("html").css({overflow:"","margin-right":""}),$j("html").removeClass("owp-qv-open"),e.fadeOut(),e.removeClass("is-visible"),setTimeout(function(){t.html("")},600))}),o.on("click",function(){console.log("clicked"),$j(this).fadeOut(),$j("body").removeClass("show-cart")}),$j(window).resize(function(){o.fadeOut(),$j("body").removeClass("show-cart")})}var $j=jQuery.noConflict();$j(document).on("ready",function(){"use strict";oceanwpEddDisplayCart()});