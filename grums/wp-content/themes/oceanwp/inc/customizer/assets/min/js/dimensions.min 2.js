wp.customize.controlConstructor["oceanwp-dimensions"]=wp.customize.Control.extend({ready:function(){"use strict";var t=this;t.container.on("change keyup paste",".dimension-desktop_top",function(){t.settings.desktop_top.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-desktop_right",function(){t.settings.desktop_right.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-desktop_bottom",function(){t.settings.desktop_bottom.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-desktop_left",function(){t.settings.desktop_left.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-tablet_top",function(){t.settings.tablet_top.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-tablet_right",function(){t.settings.tablet_right.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-tablet_bottom",function(){t.settings.tablet_bottom.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-tablet_left",function(){t.settings.tablet_left.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-mobile_top",function(){t.settings.mobile_top.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-mobile_right",function(){t.settings.mobile_right.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-mobile_bottom",function(){t.settings.mobile_bottom.set(jQuery(this).val())}),t.container.on("change keyup paste",".dimension-mobile_left",function(){t.settings.mobile_left.set(jQuery(this).val())})}}),jQuery(document).ready(function(t){t(".oceanwp-linked").on("click",function(){var e=t(this);e.parent().parent(".dimension-wrap").prevAll().slice(0,4).find("input").removeClass("linked").attr("data-element",""),e.parent(".link-dimensions").removeClass("unlinked")}),t(".oceanwp-unlinked").on("click",function(){var e=t(this),n=e.data("element");e.parent().parent(".dimension-wrap").prevAll().slice(0,4).find("input").addClass("linked").attr("data-element",n),e.parent(".link-dimensions").addClass("unlinked")}),t(".dimension-wrap").on("input",".linked",function(){var e=t(this).attr("data-element"),n=t(this).val();t('.linked[ data-element="'+e+'" ]').each(function(e,i){t(this).val(n).change()})})});