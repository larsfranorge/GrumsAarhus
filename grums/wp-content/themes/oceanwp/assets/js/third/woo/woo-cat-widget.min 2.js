function oceanwpWooCategoriesWidget(){"use strict";$j(".woo-dropdown-cat .product-categories").each(function(){var e='<i class="fa fa-angle-down"></i>';$j(this).find("li").has(".children").has("li").prepend('<div class="open-this">'+e+"</div>"),$j(this).find(".open-this").on("click",function(){$j(this).parent().hasClass("opened")?$j(this).html(e).parent().removeClass("opened").find("> ul").slideUp(200):$j(this).html('<i class="fa fa-angle-up"></i>').parent().addClass("opened").find("> ul").slideDown(200)})})}var $j=jQuery.noConflict();$j(document).on("ready",function(){"use strict";oceanwpWooCategoriesWidget()});