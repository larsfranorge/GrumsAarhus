"use strict";if(void 0===WPFormsChallenge)var WPFormsChallenge={};WPFormsChallenge.admin=window.WPFormsChallenge.admin||function(n,e,o){var l={l10n:wpforms_challenge_admin,init:function(){o(n).ready(l.ready)},ready:function(){l.events()},events:function(){o(".wpforms-challenge-skip").click(function(){l.skipChallenge()}),o(".block-timer .caret-icon").click(function(){l.toggleList(o(this))})},toggleList:function(n){var e=o(".wpforms-challenge-list-block");e.length&&n.length&&(n.hasClass("closed")?(e.show(),n.removeClass("closed")):(e.hide(),n.addClass("closed")))},skipChallenge:function(){var n={status:"skipped",seconds_spent:0,seconds_left:60*l.l10n.minutes_left};o(".wpforms-challenge").remove(),l.saveChallengeOption(n).done(location.reload.bind(location))},saveChallengeOption:function(n){var e={action:"wpforms_challenge_save_option",option_data:n,_wpnonce:l.l10n.nonce};return o.post(ajaxurl,e,function(n){n.success||console.error("Error saving WPForms Challenge option.")})}};return l}(document,window,jQuery),WPFormsChallenge.admin.init();