function oceanwpWooMultiStepCheckout(){"use strict";var e=$j("body"),t=$j("#checkout_login"),o=$j("#customer_billing_details"),a=$j("#customer_shipping_details"),i=$j("#order_review"),n=$j("#order_checkout_payment"),c=$j("#form_actions"),d=$j("#checkout_coupon"),l=new Array(t,o,a,i,n);e.on("updated_checkout",function(e){l[4]=$j("#order_checkout_payment"),"updated_checkout"==e.type&&(l[4]=$j("#order_checkout_payment")),$j("#order_checkout_payment").find("input[name=payment_method]").on("click",function(){if($j(".payment_methods input.input-radio").length>1){var e=$j("div.payment_box."+$j(this).attr("ID"));$j(this).is(":checked")&&!e.is(":visible")&&($j("div.payment_box").filter(":visible").slideUp(250),$j(this).is(":checked")&&$j("div.payment_box."+$j(this).attr("ID")).slideDown(250))}else $j("div.payment_box").show();$j(this).data("order_button_text")?$j("#place_order").val($j(this).data("order_button_text")):$j("#place_order").val($j("#place_order").data("value"))})}),c.find(".button.prev").add(".button.next").on("click",function(e){var t=$j(this),o=$j("#owp-checkout-timeline"),a=t.data("action"),i=c.data("step"),n=i+1,r=i-1,s=c.find(".button.prev"),p=c.find(".button.next"),u=$j("form.woocommerce-checkout"),h=oceanwpLocalize.is_logged_in,j=!1,m=l[i].selector,$={},f="",_=30,v=$j("#wpadminbar"),w=$j("#top-bar-wrap"),b=$j("#site-header");if(v.length&&$j(window).width()>600&&(_+=v.outerHeight()),1==oceanwpLocalize.hasStickyTopBar&&(_+=w.outerHeight()),$j("#site-header").hasClass("fixed-scroll")&&!$j("#site-header").hasClass("vertical-header")&&(_+=b.outerHeight()),$j("form.woocommerce-checkout .woocommerce-NoticeGroup.woocommerce-NoticeGroup-checkout").remove(),f=m.indexOf("billing")>=0?"billing":f,"billing"==(f=m.indexOf("shipping")>=0?"shipping":f)||"shipping"==f){$j(m).find(".validate-required input").each(function(){$[$j(this).attr("name")]=$j(this).val()}),$j(m).find(".validate-required select").each(function(){$[$j(this).attr("name")]=$j(this).val()}),$j(m).find(".input-checkbox").each(function(){$j(this).is(":checked")&&($[$j(this).attr("name")]=$j(this).val())});var g={action:"oceanwp_validate_checkout",type:f,posted_data:$};$j.ajax({type:"POST",url:oceanwpLocalize.ajax_url,data:g,success:function(e){j=e.valid,e.valid?after_validation(o,c,u,u,l,a,n,i,r,s,p,_,h,d):($j("form.woocommerce-checkout").prepend(e.html),$j("html, body").animate({scrollTop:$j("form.woocommerce-checkout").offset().top-_},"slow"))},complete:function(){}})}else j=!0,after_validation(o,c,u,u,l,a,n,i,r,s,p,_,h,d)})}function after_validation(e,t,o,o,a,i,n,c,d,l,r,s,p,u){e.find(".active").removeClass("active"),"next"==i?(t.data("step",n),a[c].fadeOut(120,function(){a[n].fadeIn(120)}),$j("#timeline-"+n).toggleClass("active"),$j("html, body").animate({scrollTop:$j("#owp-checkout-timeline").offset().top-s},"slow")):"prev"==i&&(t.data("step",d),a[c].fadeOut(120,function(){a[d].fadeIn(120)}),$j("#timeline-"+d).toggleClass("active"),$j("html, body").animate({scrollTop:$j("#owp-checkout-timeline").offset().top-s},"slow")),1==(c=t.data("step"))&&1==p||0==p&&(0==c&&1==oceanwpLocalize.login_reminder_enabled||1==c&&0==oceanwpLocalize.login_reminder_enabled)?l.fadeOut(120):l.fadeIn(120),0==p&&(0==c&&1==oceanwpLocalize.login_reminder_enabled||1==c&&0==oceanwpLocalize.login_reminder_enabled)?r.val(oceanwpLocalize.no_account_btn):r.val(oceanwpLocalize.next),3==c?(o.removeClass("processing"),u.fadeIn(80),r.fadeOut(120)):(o.addClass("processing"),u.fadeOut(80),r.fadeIn(120))}var $j=jQuery.noConflict();$j(document).on("ready",function(){"use strict";oceanwpWooMultiStepCheckout()});