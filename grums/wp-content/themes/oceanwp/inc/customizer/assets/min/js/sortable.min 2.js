wp.customize.controlConstructor["oceanwp-sortable"]=wp.customize.Control.extend({ready:function(){"use strict";var i=this;i.sortableContainer=i.container.find("ul.sortable").first(),i.sortableContainer.sortable({stop:function(){i.updateValue()}}).disableSelection().find("li").each(function(){jQuery(this).find("i.visibility").click(function(){jQuery(this).toggleClass("dashicons-visibility-faint").parents("li:eq(0)").toggleClass("invisible")})}).click(function(){i.updateValue()})},updateValue:function(){"use strict";var i=this,t=[];this.sortableContainer.find("li").each(function(){jQuery(this).is(".invisible")||t.push(jQuery(this).data("value"))}),i.setting.set(t)}});