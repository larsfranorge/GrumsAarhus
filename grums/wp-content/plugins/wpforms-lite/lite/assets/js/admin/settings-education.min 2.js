"use strict";var WPFormsSettingsEducation=window.WPFormsSettingsEducation||function(n,o,i){var e={init:function(){i(n).ready(e.ready)},ready:function(){e.events()},events:function(){e.clickEvents()},clickEvents:function(){i(n).on("click",".wpforms-settings-provider.education-modal",function(n){var t=i(this);n.preventDefault(),n.stopImmediatePropagation(),e.upgradeModal(t.data("name"))})},upgradeModal:function(n){var t=wpforms_admin.upgrade_message.replace(/%name%/g,n),e=encodeURI(wpforms_admin.upgrade_url+"&utm_content="+n.trim());i.alert({title:n+" "+wpforms_admin.upgrade_title,icon:"fa fa-lock",content:t,boxWidth:"550px",onOpenBefore:function(){this.$btnc.after('<div class="discount-note">'+wpforms_admin.upgrade_bonus+wpforms_admin.upgrade_doc+"</div>"),this.$body.find(".jconfirm-content").addClass("lite-upgrade")},buttons:{confirm:{text:wpforms_admin.upgrade_button,btnClass:"btn-confirm",keys:["enter"],action:function(){o.open(e,"_blank"),i.alert({title:!1,content:wpforms_admin.upgrade_modal,icon:"fa fa-info-circle",type:"blue",boxWidth:"565px",buttons:{confirm:{text:wpforms_admin.ok,btnClass:"btn-confirm",keys:["enter"]}}})}}}})}};return e}(document,window,jQuery);WPFormsSettingsEducation.init();