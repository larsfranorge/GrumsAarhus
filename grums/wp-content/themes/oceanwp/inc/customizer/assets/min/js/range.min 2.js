wp.customize.controlConstructor["oceanwp-range"]=wp.customize.Control.extend({ready:function(){"use strict";function t(t,e){var a=t,n=a.parent().find('input[type="range"]'),r=parseFloat(a.val()),o=parseFloat(n.attr("data-reset_value")),i=parseFloat(a.attr("step")),s=parseFloat(a.attr("min")),c=parseFloat(a.attr("max"));clearTimeout(u),u=setTimeout(function(){if(isNaN(r))return a.val(o),void n.val(o).trigger("change");i>=1&&r%1!=0&&(r=Math.round(r),a.val(r),n.val(r)),r>c&&(a.val(c),n.val(c).trigger("change")),r<s&&(a.val(s),n.val(s).trigger("change"))},e),n.val(r).trigger("change")}var e,a,n,r,o,i,u,s=this;jQuery("input[type=range]").on("mousedown",function(){e=jQuery(this),a=e.parent().children(".oceanwp-range-input"),n=e.attr("value"),a.val(n),e.mousemove(function(){n=e.attr("value"),a.val(n)})}),jQuery("input.oceanwp-range-input").on("change keyup",function(){t(jQuery(this),1e3)}).on("focusout",function(){t(jQuery(this),0)}),jQuery(".oceanwp-reset-slider").on("click",function(){r=jQuery(this).closest("label").find("input"),o=r.data("reset_value"),r.val(o),r.change()}),i="postMessage"===s.setting.transport?"mousemove change":"change",this.container.on(i,"input",function(){s.setting.set(jQuery(this).val())})}});