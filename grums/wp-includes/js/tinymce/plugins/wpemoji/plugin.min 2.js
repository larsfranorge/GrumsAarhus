!function(a){a.PluginManager.add("wpemoji",function(b){function c(a){a.className="emoji",a.setAttribute("data-mce-resize","false"),a.setAttribute("data-mce-placeholder","1"),a.setAttribute("data-wp-emoji","1")}function d(a){var b={"data-mce-resize":"false","data-mce-placeholder":"1","data-wp-emoji":"1"};g.emoji.parse(a,{imgAttr:b})}function e(a){var c,e;a&&window.twemoji&&window.twemoji.test(a.textContent||a.innerText)&&(i.webkit&&(c=b.selection,e=c.getBookmark()),d(a),i.webkit&&c.moveToBookmark(e))}var f,g=window.wp,h=window._wpemojiSettings,i=a.Env,j=window.navigator.userAgent,k=j.indexOf("Windows")>-1,l=function(){var a=j.match(/Windows NT 6\.(\d)/);return!!(a&&a[1]>1)}();g&&g.emoji&&!h.supports.everything&&(l?b.on("keyup",function(a){231===a.keyCode&&e(b.selection.getNode())}):k||(b.on("keydown keyup",function(a){f="keydown"===a.type}),b.on("input",function(){f||e(b.selection.getNode())})),b.on("setcontent",function(a){var c=b.selection,e=c.getNode();window.twemoji&&window.twemoji.test(e.textContent||e.innerText)&&(d(e),i.ie&&i.ie<9&&a.load&&e&&"BODY"===e.nodeName&&c.collapse(!0))}),b.on("PastePostProcess",function(d){window.twemoji&&a.each(b.dom.$("img.emoji",d.node),function(a){a.alt&&window.twemoji.test(a.alt)&&c(a)})}),b.on("postprocess",function(a){a.content&&(a.content=a.content.replace(/<img[^>]+data-wp-emoji="[^>]+>/g,function(a){var b=a.match(/alt="([^"]+)"/);return b&&b[1]?b[1]:a}))}),b.on("resolvename",function(a){"IMG"===a.target.nodeName&&b.dom.getAttrib(a.target,"data-wp-emoji")&&a.preventDefault()}))})}(window.tinymce);