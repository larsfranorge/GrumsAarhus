!function(a){window.findPosts={open:function(b,c){var d=a(".ui-find-overlay");return 0===d.length&&(a("body").append('<div class="ui-find-overlay"></div>'),findPosts.overlay()),d.show(),b&&c&&a("#affected").attr("name",b).val(c),a("#find-posts").show(),a("#find-posts-input").focus().keyup(function(a){27==a.which&&findPosts.close()}),findPosts.send(),!1},close:function(){a("#find-posts-response").empty(),a("#find-posts").hide(),a(".ui-find-overlay").hide()},overlay:function(){a(".ui-find-overlay").on("click",function(){findPosts.close()})},send:function(){var b={ps:a("#find-posts-input").val(),action:"find_posts",_ajax_nonce:a("#_ajax_nonce").val()},c=a(".find-box-search .spinner");c.addClass("is-active"),a.ajax(ajaxurl,{type:"POST",data:b,dataType:"json"}).always(function(){c.removeClass("is-active")}).done(function(b){b.success||a("#find-posts-response").text(attachMediaBoxL10n.error),a("#find-posts-response").html(b.data)}).fail(function(){a("#find-posts-response").text(attachMediaBoxL10n.error)})}},a(document).ready(function(){var b,c=a("#wp-media-grid");c.length&&window.wp&&window.wp.media&&(b=_wpMediaGridSettings,window.wp.media({frame:"manage",container:c,library:b.queryVars}).open()),a("#find-posts-submit").click(function(b){a('#find-posts-response input[type="radio"]:checked').length||b.preventDefault()}),a("#find-posts .find-box-search :input").keypress(function(a){if(13==a.which)return findPosts.send(),!1}),a("#find-posts-search").click(findPosts.send),a("#find-posts-close").click(findPosts.close),a("#doaction, #doaction2").click(function(b){a('select[name^="action"]').each(function(){var c=a(this).val();"attach"===c?(b.preventDefault(),findPosts.open()):"delete"===c&&(showNotice.warn()||b.preventDefault())})}),a(".find-box-inside").on("click","tr",function(){a(this).find(".found-radio input").prop("checked",!0)})})}(jQuery);