function oceanwpEDDCartDetails(){"use strict";var t=$j(".eddmenucart-details.total");$j("body").on("edd_cart_item_added",function(e,o){$j(".edd-menu-icon").removeClass("edd-cart-empty"),t.html(o.total)}),$j("body").on("edd_cart_item_removed",function(e,o){t.html(o.total)})}var $j=jQuery.noConflict();$j(document).on("ready",function(){"use strict";oceanwpEDDCartDetails()});