(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"3BkE":function(t,e,n){(function(t){!function(t){"use strict";var e=function(n,o){this.options=t.extend({},e.DEFAULTS,o);var i=this.options.target===e.DEFAULTS.target?t(this.options.target):t(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(n),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function n(n){return this.each(function(){var o=t(this),i=o.data("bs.affix"),a="object"==typeof n&&n;i||o.data("bs.affix",i=new e(this,a)),"string"==typeof n&&i[n]()})}e.VERSION="3.4.0",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,e,n,o){var i=this.$target.scrollTop(),a=this.$element.offset(),r=this.$target.height();if(null!=n&&"top"==this.affixed)return i<n&&"top";if("bottom"==this.affixed)return null!=n?!(i+this.unpin<=a.top)&&"bottom":!(i+r<=t-o)&&"bottom";var s=null==this.affixed,l=s?i:a.top;return null!=n&&i<=n?"top":null!=o&&l+(s?r:e)>=t-o&&"bottom"},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),n=this.$element.offset();return this.pinnedOffset=n.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=this.$element.height(),o=this.options.offset,i=o.top,a=o.bottom,r=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(a=i=o),"function"==typeof i&&(i=o.top(this.$element)),"function"==typeof a&&(a=o.bottom(this.$element));var s=this.getState(r,n,i,a);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var l="affix"+(s?"-"+s:""),c=t.Event(l+".bs.affix");if(this.$element.trigger(c),c.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:r-n-a})}};var o=t.fn.affix;t.fn.affix=n,t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),o=e.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),n.call(e,o)})})}(t)}).call(this,n("EVdn"))},BLtQ:function(t,e){function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.boxSizing="border-box",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,window.setTimeout(function(){t.style.display="none",t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property")},e)}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;t.style.removeProperty("display");var n=window.getComputedStyle(t).display;"none"===n&&(n="block"),t.style.display=n;var o=t.offsetHeight;t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.boxSizing="border-box",t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=o+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout(function(){t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property")},e)}t.exports.slideUp=n,t.exports.slideDown=o,t.exports.slideToggle=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"none"===window.getComputedStyle(t).display?o(t,e):n(t,e)}},"SR+s":function(t,e,n){(function(n){var o,i;/*!smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll*/window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),o=this;do{for(e=n.length;0<=--e&&n.item(e)!==o;);}while(e<0&&(o=o.parentElement));return o}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-t)),a=window.setTimeout(function(){e(o+i)},i);return t=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),i=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}}),t},o=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,i=-1,a="",r=n.charCodeAt(0);++i<o;){if(0===(e=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=e&&e<=31||127==e||0===i&&48<=e&&e<=57||1===i&&48<=e&&e<=57&&45===r?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e,n,o,i){if(n.emitEvents&&"function"==typeof t.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:o,toggle:i}});document.dispatchEvent(a)}};return function(r,s){var l,c,u,d,f={cancelScroll:function(t){cancelAnimationFrame(d),d=null,t||a("scrollCancel",l)},animateScroll:function(o,r,s){f.cancelScroll();var c=n(l||e,s||{}),h="[object Number]"===Object.prototype.toString.call(o),m=h||!o.tagName?null:o;if(h||m){var p=t.pageYOffset;c.header&&!u&&(u=document.querySelector(c.header));var g,v,y,w,b,E,_,S,x=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(u),T=h?o:function(e,n,o,a){var r=0;if(e.offsetParent)for(;r+=e.offsetTop,e=e.offsetParent;);return r=Math.max(r-n-o,0),a&&(r=Math.min(r,i()-t.innerHeight)),r}(m,x,parseInt("function"==typeof c.offset?c.offset(o,r):c.offset,10),c.clip),A=T-p,L=i(),O=0,M=(g=A,y=(v=c).speedAsDuration?v.speed:Math.abs(g/1e3*v.speed),v.durationMax&&y>v.durationMax?v.durationMax:v.durationMin&&y<v.durationMin?v.durationMin:parseInt(y,10)),P=function(e){var n,i,s;w||(w=e),O+=e-w,E=p+A*(i=b=1<(b=0===M?0:O/M)?1:b,"easeInQuad"===(n=c).easing&&(s=i*i),"easeOutQuad"===n.easing&&(s=i*(2-i)),"easeInOutQuad"===n.easing&&(s=i<.5?2*i*i:(4-2*i)*i-1),"easeInCubic"===n.easing&&(s=i*i*i),"easeOutCubic"===n.easing&&(s=--i*i*i+1),"easeInOutCubic"===n.easing&&(s=i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1),"easeInQuart"===n.easing&&(s=i*i*i*i),"easeOutQuart"===n.easing&&(s=1- --i*i*i*i),"easeInOutQuart"===n.easing&&(s=i<.5?8*i*i*i*i:1-8*--i*i*i*i),"easeInQuint"===n.easing&&(s=i*i*i*i*i),"easeOutQuint"===n.easing&&(s=1+--i*i*i*i*i),"easeInOutQuint"===n.easing&&(s=i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i),n.customEasing&&(s=n.customEasing(i)),s||i),t.scrollTo(0,Math.floor(E)),function(e,n){var i,s,l,u=t.pageYOffset;if(e==n||u==n||(p<n&&t.innerHeight+u)>=L)return f.cancelScroll(!0),s=n,l=h,0===(i=o)&&document.body.focus(),l||(i.focus(),document.activeElement!==i&&(i.setAttribute("tabindex","-1"),i.focus(),i.style.outline="none"),t.scrollTo(0,s)),a("scrollStop",c,o,r),!(d=w=null)}(E,T)||(d=t.requestAnimationFrame(P),w=e)};0===t.pageYOffset&&t.scrollTo(0,0),_=o,S=c,h||history.pushState&&S.updateURL&&history.pushState({smoothScroll:JSON.stringify(S),anchor:_.id},document.title,_===document.documentElement?"#top":"#"+_.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?t.scrollTo(0,Math.floor(T)):(a("scrollStart",c,o,r),f.cancelScroll(!0),t.requestAnimationFrame(P))}}},h=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(c=e.target.closest(r))&&"a"===c.tagName.toLowerCase()&&!e.target.closest(l.ignore)&&c.hostname===t.location.hostname&&c.pathname===t.location.pathname&&/#/.test(c.href)){var n,i=o(c.hash);if("#"===i){if(!l.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(i);(n=n||"#top"!==i?n:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(l),f.animateScroll(n,c))}},m=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(o(history.state.anchor)))||f.animateScroll(e,null,{updateURL:!1})}};return f.destroy=function(){l&&(document.removeEventListener("click",h,!1),t.removeEventListener("popstate",m,!1),f.cancelScroll(),d=u=c=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),l=n(e,s||{}),u=l.header?document.querySelector(l.header):null,document.addEventListener("click",h,!1),l.updateURL&&l.popstate&&t.addEventListener("popstate",m,!1)}(),f}}(i)}.apply(e,[]))||(t.exports=o)}).call(this,n("yLpj"))},es0x:function(module,exports){var hinclude;!function(){"use strict";hinclude={classprefix:"include_",set_content_async:function(t,e){4===e.readyState&&(200!==e.status&&304!==e.status||(t.innerHTML=e.responseText,hinclude.eval_js(t)),hinclude.set_class(t,e.status),hinclude.trigger_event(t))},buffer:[],set_content_buffered:function(t,e){4===e.readyState&&(hinclude.buffer.push([t,e]),hinclude.outstanding-=1,0===hinclude.outstanding&&hinclude.show_buffered_content())},show_buffered_content:function(){for(var t;hinclude.buffer.length>0;)200!==(t=hinclude.buffer.pop())[1].status&&304!==t[1].status||(t[0].innerHTML=t[1].responseText,hinclude.eval_js(t[0])),hinclude.set_class(t[0],t[1].status),hinclude.trigger_event(t[0])},eval_js:function(element){var evaljs=element.hasAttribute("evaljs")&&"true"===element.getAttribute("evaljs");if(evaljs){var scripts=element.getElementsByTagName("script"),i;for(i=0;i<scripts.length;i+=1)eval(scripts[i].innerHTML)}},outstanding:0,includes:[],run:function(){var t,e=0,n=this.get_meta("include_mode","buffered");if(this.includes=document.getElementsByTagName("hx:include"),0===this.includes.length&&(this.includes=document.getElementsByTagName("include")),"async"===n)t=this.set_content_async;else if("buffered"===n){t=this.set_content_buffered;var o=1e3*this.get_meta("include_timeout",2.5);setTimeout(hinclude.show_buffered_content,o)}for(;e<this.includes.length;e+=1)this.include(this.includes[e],this.includes[e].getAttribute("src"),this.includes[e].getAttribute("media"),t)},include:function(t,e,n,o){if(!n||!window.matchMedia||window.matchMedia(n).matches)if("data"===e.substring(0,e.indexOf(":")).toLowerCase()){var i=decodeURIComponent(e.substring(e.indexOf(",")+1,e.length));t.innerHTML=i}else{var a=!1;if(window.XMLHttpRequest)try{a=new XMLHttpRequest,t.hasAttribute("data-with-credentials")&&(a.withCredentials=!0)}catch(t){a=!1}else if(window.ActiveXObject)try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){a=!1}if(a){this.outstanding+=1,a.onreadystatechange=function(){o(t,a)};try{a.open("GET",e,!0),a.send("")}catch(t){this.outstanding-=1,alert("Include error: "+e+" ("+t+")")}}}},refresh:function(t){var e,n=0;for(e=this.set_content_buffered;n<this.includes.length;n+=1)this.includes[n].getAttribute("id")===t&&this.include(this.includes[n],this.includes[n].getAttribute("src"),this.includes[n].getAttribute("media"),e)},get_meta:function(t,e){for(var n=0,o=document.getElementsByTagName("meta");n<o.length;n+=1)if(o[n].getAttribute("name")===t)return o[n].getAttribute("content");return e},addDOMLoadEvent:function(t){if(!window.__load_events){var e=function(){var t=0;if(!hinclude.addDOMLoadEvent.done){for(hinclude.addDOMLoadEvent.done=!0,window.__load_timer&&(clearInterval(window.__load_timer),window.__load_timer=null);t<window.__load_events.length;t+=1)window.__load_events[t]();window.__load_events=null}};document.addEventListener&&document.addEventListener("DOMContentLoaded",e,!1),/WebKit/i.test(navigator.userAgent)&&(window.__load_timer=setInterval(function(){/loaded|complete/.test(document.readyState)&&e()},10)),window.onload=e,window.__load_events=[]}window.__load_events.push(t)},trigger_event:function(t){var e;document.createEvent?((e=document.createEvent("HTMLEvents")).initEvent("hinclude",!0,!0),e.eventName="hinclude",t.dispatchEvent(e)):document.createEventObject&&((e=document.createEventObject()).eventType="hinclude",e.eventName="hinclude",t.fireEvent("on"+e.eventType,e))},set_class:function(t,e){var n=t.className.split(/\s+/).filter(function(t){return!t.match(/^include_\d+$/i)&&!t.match(/^included/i)}).join(" ");t.className=n+(n?" ":"")+"included "+hinclude.classprefix+e}},hinclude.addDOMLoadEvent(function(){hinclude.run()})}()},ldto:function(t,e,n){},ng4s:function(t,e,n){(function(t){n("ldto"),t.$=t.jQuery=n("EVdn"),n("es0x"),n("3BkE");var e=n("SR+s"),o=n("BLtQ");document.addEventListener("DOMContentLoaded",function(){a.createMobileNavigation(),a.enableScrollToAnchor(),a.enableGoogleAnalyticsTracking()}),window.addEventListener("load",function(){a.scrollToAnchorOnPageLoad()});var i,a=(i=function(t){var n=!0===window.matchMedia("screen and (max-width: 768px)").matches;(new e).animateScroll(document.querySelector(t),null,{header:n?null:"header",offset:n?15:-25,easing:"linear",speed:300,durationMax:500})},{createMobileNavigation:function(){},enableGoogleAnalyticsTracking:function(){document.querySelectorAll("[data-tracked]").forEach(function(t){t.addEventListener("click",function(){try{ga("send","event",t.dataset.category||"",t.dataset.action||"",t.dataset.label||"",t.dataset.value||"")}catch(t){}})})},enableScrollToAnchor:function(){document.querySelector("body").addEventListener("click",function(t){t.target&&t.target.matches('main a[href^="#"]')&&i(t.target.hash)})},scrollToAnchorOnPageLoad:function(){window.location.hash&&"#gsc.tab=0"!=window.location.hash&&i(window.location.hash)}})}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n}},[["ng4s","runtime",0]]]);