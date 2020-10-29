/*! This file is auto-generated */
!function(r){var a,t,n,i,o,d,l,p,c,u=!1,e=wp.i18n.__;function h(){"function"==typeof zxcvbn?(t.val()?m():(t.val(t.data("pw")),t.trigger("pwupdate")),v(),1!==parseInt(d.data("start-masked"),10)?t.attr("type","text"):d.trigger("click"),r("#pw-weak-text-label").text(e("Confirm use of weak password"))):setTimeout(h,50)}function f(s){d.attr({"aria-label":e(s?"Show password":"Hide password")}).find(".text").text(e(s?"Show":"Hide")).end().find(".dashicons").removeClass(s?"dashicons-hidden":"dashicons-visibility").addClass(s?"dashicons-visibility":"dashicons-hidden")}function w(){var s,e;a=r(".user-pass1-wrap, .user-pass-wrap"),r(".user-pass2-wrap").hide(),p=r("#submit, #wp-submit").on("click",function(){u=!1}),l=p.add(" #createusersub"),i=r(".pw-weak"),(o=i.find(".pw-checkbox")).change(function(){l.prop("disabled",!o.prop("checked"))}),(t=r("#pass1")).length?(c=t.val(),1===parseInt(t.data("reveal"),10)&&h(),t.on("input pwupdate",function(){t.val()!==c&&(c=t.val(),t.removeClass("short bad good strong"),v())})):t=r("#user_pass"),n=r("#pass2").on("input",function(){0<n.val().length&&(t.val(n.val()),n.val(""),c="",t.trigger("pwupdate"))}),t.is(":hidden")&&(t.prop("disabled",!0),n.prop("disabled",!0)),s=a.find(".wp-pwd"),e=a.find("button.wp-generate-pw"),(d=a.find(".wp-hide-pw")).show().on("click",function(){"password"===t.attr("type")?(t.attr("type","text"),f(!1)):(t.attr("type","password"),f(!0)),t.focus(),_.isUndefined(t[0].setSelectionRange)||t[0].setSelectionRange(0,100)}),e.length&&s.hide(),e.show(),e.on("click",function(){u=!0,e.hide(),s.show(),t.attr("disabled",!1),n.attr("disabled",!1),0===t.val().length&&h()}),a.find("button.wp-cancel-pw").on("click",function(){u=!1,t.val(""),wp.ajax.post("generate-password").done(function(s){t.data("pw",s)}),e.show().focus(),s.hide(),i.hide(0,function(){o.removeProp("checked")}),t.prop("disabled",!0),n.prop("disabled",!0),f(!1),a.closest("form").is("#your-profile")&&(t.val("").trigger("pwupdate"),l.prop("disabled",!1))}),a.closest("form").on("submit",function(){u=!1,t.prop("disabled",!1),n.prop("disabled",!1),n.val(t.val())})}function m(){var s=r("#pass1").val();if(r("#pass-strength-result").removeClass("short bad good strong empty"),s)switch(wp.passwordStrength.meter(s,wp.passwordStrength.userInputDisallowedList(),s)){case-1:r("#pass-strength-result").addClass("bad").html(pwsL10n.unknown);break;case 2:r("#pass-strength-result").addClass("bad").html(pwsL10n.bad);break;case 3:r("#pass-strength-result").addClass("good").html(pwsL10n.good);break;case 4:r("#pass-strength-result").addClass("strong").html(pwsL10n.strong);break;case 5:r("#pass-strength-result").addClass("short").html(pwsL10n.mismatch);break;default:r("#pass-strength-result").addClass("short").html(pwsL10n.short)}else r("#pass-strength-result").addClass("empty").html("&nbsp;")}function v(){var s=r("#pass-strength-result")[0];s.className&&(t.addClass(s.className),r(s).is(".short, .bad")?(o.prop("checked")||l.prop("disabled",!0),i.show()):(r(s).is(".empty")?(l.prop("disabled",!0),o.prop("checked",!1)):l.prop("disabled",!1),i.hide()))}r(document).ready(function(){var s,a,t,n,i=r("#display_name"),e=i.val(),o=r("#wp-admin-bar-my-account").find(".display-name");r("#pass1").val("").on("input pwupdate",m),r("#pass-strength-result").show(),r(".color-palette").click(function(){r(this).siblings('input[name="admin_color"]').prop("checked",!0)}),i.length&&(r("#first_name, #last_name, #nickname").bind("blur.user_profile",function(){var t=[],n={display_nickname:r("#nickname").val()||"",display_username:r("#user_login").val()||"",display_firstname:r("#first_name").val()||"",display_lastname:r("#last_name").val()||""};n.display_firstname&&n.display_lastname&&(n.display_firstlast=n.display_firstname+" "+n.display_lastname,n.display_lastfirst=n.display_lastname+" "+n.display_firstname),r.each(r("option",i),function(s,e){t.push(e.value)}),r.each(n,function(s,e){if(e){var a=e.replace(/<\/?[a-z][^>]*>/gi,"");n[s].length&&-1===r.inArray(a,t)&&(t.push(a),r("<option />",{text:a}).appendTo(i))}})}),i.on("change",function(){if(t===n){var s=r.trim(this.value)||e;o.text(s)}})),s=r("#color-picker"),a=r("#colors-css"),t=r("input#user_id").val(),n=r('input[name="checkuser_id"]').val(),s.on("click.colorpicker",".color-option",function(){var s,e=r(this);if(!e.hasClass("selected")&&(e.siblings(".selected").removeClass("selected"),e.addClass("selected").find('input[type="radio"]').prop("checked",!0),t===n)){if(0===a.length&&(a=r('<link rel="stylesheet" />').appendTo("head")),a.attr("href",e.children(".css_url").val()),"undefined"!=typeof wp&&wp.svgPainter){try{s=r.parseJSON(e.children(".icon_colors").val())}catch(s){}s&&(wp.svgPainter.setColors(s),wp.svgPainter.paint())}r.post(ajaxurl,{action:"save-user-color-scheme",color_scheme:e.children('input[name="admin_color"]').val(),nonce:r("#color-nonce").val()}).done(function(s){s.success&&r("body").removeClass(s.data.previousScheme).addClass(s.data.currentScheme)})}}),w()}),r("#destroy-sessions").on("click",function(s){var e=r(this);wp.ajax.post("destroy-sessions",{nonce:r("#_wpnonce").val(),user_id:r("#user_id").val()}).done(function(s){e.prop("disabled",!0),e.siblings(".notice").remove(),e.before('<div class="notice notice-success inline"><p>'+s.message+"</p></div>")}).fail(function(s){e.siblings(".notice").remove(),e.before('<div class="notice notice-error inline"><p>'+s.message+"</p></div>")}),s.preventDefault()}),window.generatePassword=h,r(window).on("beforeunload",function(){if(!0===u)return e("Your new password has not been saved.")})}(jQuery);