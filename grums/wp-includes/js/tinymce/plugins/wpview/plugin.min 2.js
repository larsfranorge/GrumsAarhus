!function(a){a.PluginManager.add("wpview",function(b){function c(){}function d(a){return b.dom.hasClass(a,"wpview")}function e(a){function b(a,b){return"<p>"+window.decodeURIComponent(b)+"</p>"}return a?a.replace(/<div[^>]+data-wpview-text="([^"]+)"[^>]*>(?:\.|[\s\S]+?wpview-end[^>]+>\s*<\/span>\s*)?<\/div>/g,b).replace(/<p[^>]+data-wpview-marker="([^"]+)"[^>]*>[\s\S]*?<\/p>/g,b):a}var f=window.wp;return f&&f.mce&&f.mce.views?(b.on("init",function(){var a=window.MutationObserver||window.WebKitMutationObserver;a&&new a(function(){b.fire("wp-body-class-change")}).observe(b.getBody(),{attributes:!0,attributeFilter:["class"]}),b.on("wp-body-class-change",function(){var a=b.getBody().className;b.$('iframe[class="wpview-sandbox"]').each(function(b,c){if(!c.src||'javascript:""'===c.src)try{c.contentWindow.document.body.className=a}catch(d){}})})}),b.on("beforesetcontent",function(a){var c;if(a.selection||f.mce.views.unbind(),a.content){if(!a.load&&(c=b.selection.getNode(),c&&c!==b.getBody()&&/^\s*https?:\/\/\S+\s*$/i.test(a.content))){if(c=b.dom.getParent(c,"p"),!c||!/^[\s\uFEFF\u00A0]*$/.test(b.$(c).text()||""))return;c.innerHTML=""}a.content=f.mce.views.setMarkers(a.content,b)}}),b.on("setcontent",function(){f.mce.views.render()}),b.on("preprocess hide",function(a){b.$("div[data-wpview-text], p[data-wpview-marker]",a.node).each(function(a,b){b.innerHTML="."})},!0),b.on("postprocess",function(a){a.content=e(a.content)}),b.on("beforeaddundo",function(a){a.level.content=e(a.level.content)}),b.on("drop objectselected",function(a){d(a.targetClone)&&(a.targetClone=b.getDoc().createTextNode(window.decodeURIComponent(b.dom.getAttrib(a.targetClone,"data-wpview-text"))))}),b.on("pastepreprocess",function(b){var c=b.content;c&&(c=a.trim(c.replace(/<[^>]+>/g,"")),/^https?:\/\/\S+$/i.test(c)&&(b.content=c))}),b.on("resolvename",function(a){d(a.target)&&(a.name=b.dom.getAttrib(a.target,"data-wpview-type")||"object")}),b.on("click keyup",function(){var a=b.selection.getNode();d(a)&&b.dom.getAttrib(a,"data-mce-selected")&&a.setAttribute("data-mce-selected","2")}),b.addButton("wp_view_edit",{tooltip:"Edit|button",icon:"dashicon dashicons-edit",onclick:function(){var a=b.selection.getNode();d(a)&&f.mce.views.edit(b,a)}}),b.addButton("wp_view_remove",{tooltip:"Remove",icon:"dashicon dashicons-no",onclick:function(){b.fire("cut")}}),b.once("preinit",function(){var a;b.wp&&b.wp._createToolbar&&(a=b.wp._createToolbar(["wp_view_edit","wp_view_remove"]),b.on("wptoolbar",function(b){!b.collapsed&&d(b.element)&&(b.toolbar=a)}))}),b.wp=b.wp||{},b.wp.getView=c,b.wp.setViewCursor=c,{getView:c}):{getView:c}})}(window.tinymce);