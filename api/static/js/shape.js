
      /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
      !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

      jQuery.event.special.touchstart = {setup: function( _, ns, handle ) {this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });}};
      jQuery.event.special.touchmove = {setup: function( _, ns, handle ) {this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });}};
      jQuery.event.special.wheel = {setup: function( _, ns, handle ){this.addEventListener("wheel", handle, { passive: true });}};
      jQuery.event.special.mousewheel = {setup: function( _, ns, handle ){this.addEventListener("mousewheel", handle, { passive: true });}};/**
       * jQuery Validation Plugin 1.9.0
       *
       * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
       * http://docs.jquery.com/Plugins/Validation
       *
       * Copyright (c) 2006 - 2011 Jörn Zaefferer
       *
       * Dual licensed under the MIT and GPL licenses:
       *   http://www.opensource.org/licenses/mit-license.php
       *   http://www.gnu.org/licenses/gpl.html
       */


      (function($)
      {

      	$.extend($.fn, {
      	// http://docs.jquery.com/Plugins/Validation/validate
      	validate: function( options ) {

      		// if nothing is selected, return nothing; can't chain anyway
      		if (!this.length) {
      			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
      			return;
      		}

      		// check if a validator for this form was already created
      		var validator = $.data(this[0], 'validator');
      		if ( validator ) {
      			return validator;
      		}

      		// Add novalidate tag if HTML5.
      		this.attr('novalidate', 'novalidate');

      		validator = new $.validator( options, this[0] );
      		$.data(this[0], 'validator', validator);

      		if ( validator.settings.onsubmit ) {

      			var inputsAndButtons = this.find("input, button");

      			// allow suppresing validation by adding a cancel class to the submit button
      			inputsAndButtons.filter(".cancel").click(function () {
      				validator.cancelSubmit = true;
      			});

      			// when a submitHandler is used, capture the submitting button
      			if (validator.settings.submitHandler) {
      				inputsAndButtons.filter(":submit").click(function () {
      					validator.submitButton = this;
      				});
      			}

      			// validate the form on submit
      			this.submit( function( event ) {
      				if ( validator.settings.debug )
      					// prevent form submit to be able to see console output
      					event.preventDefault();

      				function handle() {
      					if ( validator.settings.submitHandler ) {
      						if (validator.submitButton) {
      							// insert a hidden input as a replacement for the missing submit button
      							var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
      						}
      						validator.settings.submitHandler.call( validator, validator.currentForm );
      						if (validator.submitButton) {
      							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
      							hidden.remove();
      						}
      						return false;
      					}
      					return true;
      				}

      				// prevent submit for invalid forms or custom submit handlers
      				if ( validator.cancelSubmit ) {
      					validator.cancelSubmit = false;
      					return handle();
      				}
      				if ( validator.form() ) {
      					if ( validator.pendingRequest ) {
      						validator.formSubmitted = true;
      						return false;
      					}
      					return handle();
      				} else {
      					validator.focusInvalid();
      					return false;
      				}
      			});
      		}

      		return validator;
      	},
      	// http://docs.jquery.com/Plugins/Validation/valid
      	valid: function()
      	{

              if ( $(this[0]).is('form'))
      		{
                  return this.validate().form();
              }
      		else
      		{
                  var valid = true;
                  var validator = $(this[0].form).validate();
                  this.each(function()
      			{
      				valid &= validator.element(this);
                  });
                  return valid;
              }
          },
      	// attributes: space seperated list of attributes to retrieve and remove
      	removeAttrs: function(attributes) {
      		var result = {},
      			$element = this;
      		$.each(attributes.split(/\s/), function(index, value) {
      			result[value] = $element.attr(value);
      			$element.removeAttr(value);
      		});
      		return result;
      	},
      	// http://docs.jquery.com/Plugins/Validation/rules
      	rules: function(command, argument) {
      		var element = this[0];

      		if (command) {
      			var settings = $.data(element.form, 'validator').settings;
      			var staticRules = settings.rules;
      			var existingRules = $.validator.staticRules(element);
      			switch(command) {
      			case "add":
      				$.extend(existingRules, $.validator.normalizeRule(argument));
      				staticRules[element.name] = existingRules;
      				if (argument.messages)
      					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
      				break;
      			case "remove":
      				if (!argument) {
      					delete staticRules[element.name];
      					return existingRules;
      				}
      				var filtered = {};
      				$.each(argument.split(/\s/), function(index, method) {
      					filtered[method] = existingRules[method];
      					delete existingRules[method];
      				});
      				return filtered;
      			}
      		}

      		var data = $.validator.normalizeRules(
      		$.extend(
      			{},
      			$.validator.metadataRules(element),
      			$.validator.classRules(element),
      			$.validator.attributeRules(element),
      			$.validator.staticRules(element)
      		), element);

      		// make sure required is at front
      		if (data.required) {
      			var param = data.required;
      			delete data.required;
      			data = $.extend({required: param}, data);
      		}

      		return data;
      	}
      });

      // Custom selectors
      $.extend($.expr[":"], {
      	// http://docs.jquery.com/Plugins/Validation/blank
      	blank: function(a) {return !$.trim("" + a.value);},
      	// http://docs.jquery.com/Plugins/Validation/filled
      	filled: function(a) {return !!$.trim("" + a.value);},
      	// http://docs.jquery.com/Plugins/Validation/unchecked
      	unchecked: function(a) {return !a.checked;}
      });

      // constructor for validator
      $.validator = function( options, form ) {
      	this.settings = $.extend( true, {}, $.validator.defaults, options );
      	this.currentForm = form;
      	this.init();
      };

      $.validator.format = function(source, params) {
      	if ( arguments.length == 1 )
      		return function() {
      			var args = $.makeArray(arguments);
      			args.unshift(source);
      			return $.validator.format.apply( this, args );
      		};
      	if ( arguments.length > 2 && params.constructor != Array  ) {
      		params = $.makeArray(arguments).slice(1);
      	}
      	if ( params.constructor != Array ) {
      		params = [ params ];
      	}
      	$.each(params, function(i, n) {
      		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
      	});
      	return source;
      };

      $.extend($.validator, {

      	defaults: {
      		messages: {},
      		groups: {},
      		rules: {},
      		errorClass: "error",
      		validClass: "valid",
      		errorElement: "label",
      		focusInvalid: true,
      		errorContainer: $( [] ),
      		errorLabelContainer: $( [] ),
      		onsubmit: true,
      		ignore: ":hidden",
      		ignoreTitle: false,
      		onfocusin: function(element, event) {
      			this.lastActive = element;

      			// hide error label and remove error class on focus if enabled
      			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
      				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
      				this.addWrapper(this.errorsFor(element)).hide();
      			}
      		},
      		onfocusout: function(element, event) {
      			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
      				this.element(element);
      			}
      		},
      		onkeyup: function(element, event) {
      			if ( element.name in this.submitted || element == this.lastElement ) {
      				this.element(element);
      			}
      		},
      		onclick: function(element, event) {
      			// click on selects, radiobuttons and checkboxes
      			if ( element.name in this.submitted )
      				this.element(element);
      			// or option elements, check parent select in that case
      			else if (element.parentNode.name in this.submitted)
      				this.element(element.parentNode);
      		},
      		highlight: function(element, errorClass, validClass) {
      			if (element.type === 'radio') {
      				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
      			} else {
      				$(element).addClass(errorClass).removeClass(validClass);
      			}
      		},
      		unhighlight: function(element, errorClass, validClass) {
      			if (element.type === 'radio') {
      				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
      			} else {
      				$(element).removeClass(errorClass).addClass(validClass);
      			}
      		}
      	},

      	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
      	setDefaults: function(settings) {
      		$.extend( $.validator.defaults, settings );
      	},

      	messages: {
      		required: "This field is required.",
      		remote: "Please fix this field.",
      		email: "Please enter a valid email address.",
      		url: "Please enter a valid URL.",
      		date: "Please enter a valid date.",
      		dateISO: "Please enter a valid date (ISO).",
      		number: "Please enter a valid number.",
      		digits: "Please enter only digits.",
      		creditcard: "Please enter a valid credit card number.",
      		equalTo: "Please enter the same value again.",
      		accept: "Please enter a value with a valid extension.",
      		maxlength: $.validator.format("Please enter no more than {0} characters."),
      		minlength: $.validator.format("Please enter at least {0} characters."),
      		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      		range: $.validator.format("Please enter a value between {0} and {1}."),
      		max: $.validator.format("Please enter a value less than or equal to {0}."),
      		min: $.validator.format("Please enter a value greater than or equal to {0}.")
      	},

      	autoCreateRanges: false,

      	prototype: {

      		init: function() {
      			this.labelContainer = $(this.settings.errorLabelContainer);
      			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
      			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
      			this.submitted = {};
      			this.valueCache = {};
      			this.pendingRequest = 0;
      			this.pending = {};
      			this.invalid = {};
      			this.reset();

      			var groups = (this.groups = {});
      			$.each(this.settings.groups, function(key, value) {
      				$.each(value.split(/\s/), function(index, name) {
      					groups[name] = key;
      				});
      			});
      			var rules = this.settings.rules;
      			$.each(rules, function(key, value) {
      				rules[key] = $.validator.normalizeRule(value);
      			});

      			function delegate(event) {
      				var validator = $.data(this[0].form, "validator"),
      					eventType = "on" + event.type.replace(/^validate/, "");
      				validator.settings[eventType] && validator.settings[eventType].call(validator, this[0], event);
      			}
      			$(this.currentForm)
      			       .validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, " +
      						"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
      						"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
      						"[type='week'], [type='time'], [type='datetime-local'], " +
      						"[type='range'], [type='color'] ",
      						"focusin focusout keyup", delegate)
      				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

      			if (this.settings.invalidHandler)
      				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
      		},

      		// http://docs.jquery.com/Plugins/Validation/Validator/form
      		form: function() {
      			this.checkForm();
      			$.extend(this.submitted, this.errorMap);
      			this.invalid = $.extend({}, this.errorMap);
      			if (!this.valid())
      				$(this.currentForm).triggerHandler("invalid-form", [this]);
      			this.showErrors();
      			return this.valid();
      		},

      		checkForm: function() {
      			this.prepareForm();
      			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
      				this.check( elements[i] );
      			}
      			return this.valid();
      		},

      		// http://docs.jquery.com/Plugins/Validation/Validator/element
      		element: function( element ) {
      			element = this.validationTargetFor( this.clean( element ) );
      			this.lastElement = element;
      			this.prepareElement( element );
      			this.currentElements = $(element);
      			var result = this.check( element );
      			if ( result ) {
      				delete this.invalid[element.name];
      			} else {
      				this.invalid[element.name] = true;
      			}
      			if ( !this.numberOfInvalids() ) {
      				// Hide error containers on last error
      				this.toHide = this.toHide.add( this.containers );
      			}
      			this.showErrors();
      			return result;
      		},

      		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
      		showErrors: function(errors) {
      			if(errors) {
      				// add items to error list and map
      				$.extend( this.errorMap, errors );
      				this.errorList = [];
      				for ( var name in errors ) {
      					this.errorList.push({
      						message: errors[name],
      						element: this.findByName(name)[0]
      					});
      				}
      				// remove items from success list
      				this.successList = $.grep( this.successList, function(element) {
      					return !(element.name in errors);
      				});
      			}
      			this.settings.showErrors
      				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
      				: this.defaultShowErrors();
      		},

      		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
      		resetForm: function() {
      			if ( $.fn.resetForm )
      				$( this.currentForm ).resetForm();
      			this.submitted = {};
      			this.lastElement = null;
      			this.prepareForm();
      			this.hideErrors();
      			this.elements().removeClass( this.settings.errorClass );
      		},

      		numberOfInvalids: function() {
      			return this.objectLength(this.invalid);
      		},

      		objectLength: function( obj ) {
      			var count = 0;
      			for ( var i in obj )
      				count++;
      			return count;
      		},

      		hideErrors: function() {
      			this.addWrapper( this.toHide ).hide();
      		},

      		valid: function() {
      			return this.size() == 0;
      		},

      		size: function() {
      			return this.errorList.length;
      		},

      		focusInvalid: function() {
      			if( this.settings.focusInvalid ) {
      				try {
      					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
      					.filter(":visible")
      					.focus()
      					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
      					.trigger("focusin");
      				} catch(e) {
      					// ignore IE throwing errors when focusing hidden elements
      				}
      			}
      		},

      		findLastActive: function() {
      			var lastActive = this.lastActive;
      			return lastActive && $.grep(this.errorList, function(n) {
      				return n.element.name == lastActive.name;
      			}).length == 1 && lastActive;
      		},

      		elements: function() {
      			var validator = this,
      				rulesCache = {};

      			// select all valid inputs inside the form (no submit or reset buttons)
      			return $(this.currentForm)
      			.find("input, select, textarea")
      			.not(":submit, :reset, :image, [disabled]")
      			.not( this.settings.ignore )
      			.filter(function() {
      				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);

      				// select only the first element for each name, and only those with rules specified
      				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
      					return false;

      				rulesCache[this.name] = true;
      				return true;
      			});
      		},

      		clean: function( selector ) {
      			return $( selector )[0];
      		},

      		errors: function() {
      			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
      		},

      		reset: function() {
      			this.successList = [];
      			this.errorList = [];
      			this.errorMap = {};
      			this.toShow = $([]);
      			this.toHide = $([]);
      			this.currentElements = $([]);
      		},

      		prepareForm: function() {
      			this.reset();
      			this.toHide = this.errors().add( this.containers );
      		},

      		prepareElement: function( element ) {
      			this.reset();
      			this.toHide = this.errorsFor(element);
      		},

      		check: function( element ) {
      			element = this.validationTargetFor( this.clean( element ) );

      			var rules = $(element).rules();
      			var dependencyMismatch = false;
      			for (var method in rules ) {
      				var rule = { method: method, parameters: rules[method] };
      				try {
      					var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );

      					// if a method indicates that the field is optional and therefore valid,
      					// don't mark it as valid when there are no other rules
      					if ( result == "dependency-mismatch" ) {
      						dependencyMismatch = true;
      						continue;
      					}
      					dependencyMismatch = false;

      					if ( result == "pending" ) {
      						this.toHide = this.toHide.not( this.errorsFor(element) );
      						return;
      					}

      					if( !result ) {
      						this.formatAndAdd( element, rule );
      						return false;
      					}
      				} catch(e) {
      					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
      						 + ", check the '" + rule.method + "' method", e);
      					throw e;
      				}
      			}
      			if (dependencyMismatch)
      				return;
      			if ( this.objectLength(rules) )
      				this.successList.push(element);
      			return true;
      		},

      		// return the custom message for the given element and validation method
      		// specified in the element's "messages" metadata
      		customMetaMessage: function(element, method) {
      			if (!$.metadata)
      				return;

      			var meta = this.settings.meta
      				? $(element).metadata()[this.settings.meta]
      				: $(element).metadata();

      			return meta && meta.messages && meta.messages[method];
      		},

      		// return the custom message for the given element name and validation method
      		customMessage: function( name, method ) {
      			var m = this.settings.messages[name];
      			return m && (m.constructor == String
      				? m
      				: m[method]);
      		},

      		// return the first defined argument, allowing empty strings
      		findDefined: function() {
      			for(var i = 0; i < arguments.length; i++) {
      				if (arguments[i] !== undefined)
      					return arguments[i];
      			}
      			return undefined;
      		},

      		defaultMessage: function( element, method) {
      			return this.findDefined(
      				this.customMessage( element.name, method ),
      				this.customMetaMessage( element, method ),
      				// title is never undefined, so handle empty string as undefined
      				!this.settings.ignoreTitle && element.title || undefined,
      				$.validator.messages[method],
      				"<strong>Warning: No message defined for " + element.name + "</strong>"
      			);
      		},

      		formatAndAdd: function( element, rule ) {
      			var message = this.defaultMessage( element, rule.method ),
      				theregex = /\$?\{(\d+)\}/g;
      			if ( typeof message == "function" ) {
      				message = message.call(this, rule.parameters, element);
      			} else if (theregex.test(message)) {
      				message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
      			}
      			this.errorList.push({
      				message: message,
      				element: element
      			});

      			this.errorMap[element.name] = message;
      			this.submitted[element.name] = message;
      		},

      		addWrapper: function(toToggle) {
      			if ( this.settings.wrapper )
      				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
      			return toToggle;
      		},

      		defaultShowErrors: function() {
      			for ( var i = 0; this.errorList[i]; i++ ) {
      				var error = this.errorList[i];
      				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
      				this.showLabel( error.element, error.message );
      			}
      			if( this.errorList.length ) {
      				this.toShow = this.toShow.add( this.containers );
      			}
      			if (this.settings.success) {
      				for ( var i = 0; this.successList[i]; i++ ) {
      					this.showLabel( this.successList[i] );
      				}
      			}
      			if (this.settings.unhighlight) {
      				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
      					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
      				}
      			}
      			this.toHide = this.toHide.not( this.toShow );
      			this.hideErrors();
      			this.addWrapper( this.toShow ).show();
      		},

      		validElements: function() {
      			return this.currentElements.not(this.invalidElements());
      		},

      		invalidElements: function() {
      			return $(this.errorList).map(function() {
      				return this.element;
      			});
      		},

      		showLabel: function(element, message) {
      			var label = this.errorsFor( element );
      			if ( label.length ) {
      				// refresh error/success class
      				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

      				// check if we have a generated label, replace the message then
      				label.attr("generated") && label.html(message);
      			} else {
      				// create label
      				label = $("<" + this.settings.errorElement + "/>")
      					.attr({"for":  this.idOrName(element), generated: true})
      					.addClass(this.settings.errorClass)
      					.html(message || "");
      				if ( this.settings.wrapper ) {
      					// make sure the element is visible, even in IE
      					// actually showing the wrapped element is handled elsewhere
      					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
      				}
      				if ( !this.labelContainer.append(label).length )
      					this.settings.errorPlacement
      						? this.settings.errorPlacement(label, $(element) )
      						: label.insertAfter(element);
      			}
      			if ( !message && this.settings.success ) {
      				label.text("");
      				typeof this.settings.success == "string"
      					? label.addClass( this.settings.success )
      					: this.settings.success( label );
      			}
      			this.toShow = this.toShow.add(label);
      		},

      		errorsFor: function(element) {
      			var name = this.idOrName(element);
          		return this.errors().filter(function() {
      				return $(this).attr('for') == name;
      			});
      		},

      		idOrName: function(element) {
      			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      		},

      		validationTargetFor: function(element) {
      			// if radio/checkbox, validate first element in group instead
      			if (this.checkable(element)) {
      				element = this.findByName( element.name ).not(this.settings.ignore)[0];
      			}
      			return element;
      		},

      		checkable: function( element ) {
      			return /radio|checkbox/i.test(element.type);
      		},

      		findByName: function( name ) {
      			// select by name and filter by form for performance over form.find("[name=...]")
      			var form = this.currentForm;
      			return $(document.getElementsByName(name)).map(function(index, element) {
      				return element.form == form && element.name == name && element  || null;
      			});
      		},

      		getLength: function(value, element) {
      			switch( element.nodeName.toLowerCase() ) {
      			case 'select':
      				return $("option:selected", element).length;
      			case 'input':
      				if( this.checkable( element) )
      					return this.findByName(element.name).filter(':checked').length;
      			}
      			return value.length;
      		},

      		depend: function(param, element) {
      			return this.dependTypes[typeof param]
      				? this.dependTypes[typeof param](param, element)
      				: true;
      		},

      		dependTypes: {
      			"boolean": function(param, element) {
      				return param;
      			},
      			"string": function(param, element) {
      				return !!$(param, element.form).length;
      			},
      			"function": function(param, element) {
      				return param(element);
      			}
      		},

      		optional: function(element) {
      			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
      		},

      		startRequest: function(element) {
      			if (!this.pending[element.name]) {
      				this.pendingRequest++;
      				this.pending[element.name] = true;
      			}
      		},

      		stopRequest: function(element, valid) {
      			this.pendingRequest--;
      			// sometimes synchronization fails, make sure pendingRequest is never < 0
      			if (this.pendingRequest < 0)
      				this.pendingRequest = 0;
      			delete this.pending[element.name];
      			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
      				$(this.currentForm).submit();
      				this.formSubmitted = false;
      			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
      				$(this.currentForm).triggerHandler("invalid-form", [this]);
      				this.formSubmitted = false;
      			}
      		},

      		previousValue: function(element) {
      			return $.data(element, "previousValue") || $.data(element, "previousValue", {
      				old: null,
      				valid: true,
      				message: this.defaultMessage( element, "remote" )
      			});
      		}

      	},

      	classRuleSettings: {
      		required: {required: true},
      		email: {email: true},
      		url: {url: true},
      		date: {date: true},
      		dateISO: {dateISO: true},
      		dateDE: {dateDE: true},
      		number: {number: true},
      		numberDE: {numberDE: true},
      		digits: {digits: true},
      		creditcard: {creditcard: true}
      	},

      	addClassRules: function(className, rules) {
      		className.constructor == String ?
      			this.classRuleSettings[className] = rules :
      			$.extend(this.classRuleSettings, className);
      	},

      	classRules: function(element) {
      		var rules = {};
      		var classes = $(element).attr('class');
      		classes && $.each(classes.split(' '), function() {
      			if (this in $.validator.classRuleSettings) {
      				$.extend(rules, $.validator.classRuleSettings[this]);
      			}
      		});
      		return rules;
      	},

      	attributeRules: function(element) {
      		var rules = {};
      		var $element = $(element);

      		for (var method in $.validator.methods) {
      			var value;
      			// If .prop exists (jQuery >= 1.6), use it to get true/false for required
      			if (method === 'required' && typeof $.fn.prop === 'function') {
      				value = $element.prop(method);
      			} else {
      				value = $element.attr(method);
      			}
      			if (value) {
      				rules[method] = value;
      			} else if ($element[0].getAttribute("type") === method) {
      				rules[method] = true;
      			}
      		}

      		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
      		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
      			delete rules.maxlength;
      		}

      		return rules;
      	},

      	metadataRules: function(element) {
      		if (!$.metadata) return {};

      		var meta = $.data(element.form, 'validator').settings.meta;
      		return meta ?
      			$(element).metadata()[meta] :
      			$(element).metadata();
      	},

      	staticRules: function(element) {
      		var rules = {};
      		var validator = $.data(element.form, 'validator');
      		if (validator.settings.rules) {
      			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      		}
      		return rules;
      	},

      	normalizeRules: function(rules, element) {
      		// handle dependency check
      		$.each(rules, function(prop, val) {
      			// ignore rule when param is explicitly false, eg. required:false
      			if (val === false) {
      				delete rules[prop];
      				return;
      			}
      			if (val.param || val.depends) {
      				var keepRule = true;
      				switch (typeof val.depends) {
      					case "string":
      						keepRule = !!$(val.depends, element.form).length;
      						break;
      					case "function":
      						keepRule = val.depends.call(element, element);
      						break;
      				}
      				if (keepRule) {
      					rules[prop] = val.param !== undefined ? val.param : true;
      				} else {
      					delete rules[prop];
      				}
      			}
      		});

      		// evaluate parameters
      		$.each(rules, function(rule, parameter) {
      			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
      		});

      		// clean number parameters
      		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
      			if (rules[this]) {
      				rules[this] = Number(rules[this]);
      			}
      		});
      		$.each(['rangelength', 'range'], function() {
      			if (rules[this]) {
      				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
      			}
      		});

      		if ($.validator.autoCreateRanges) {
      			// auto-create ranges
      			if (rules.min && rules.max) {
      				rules.range = [rules.min, rules.max];
      				delete rules.min;
      				delete rules.max;
      			}
      			if (rules.minlength && rules.maxlength) {
      				rules.rangelength = [rules.minlength, rules.maxlength];
      				delete rules.minlength;
      				delete rules.maxlength;
      			}
      		}

      		// To support custom messages in metadata ignore rule methods titled "messages"
      		if (rules.messages) {
      			delete rules.messages;
      		}

      		return rules;
      	},

      	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
      	normalizeRule: function(data) {
      		if( typeof data == "string" ) {
      			var transformed = {};
      			$.each(data.split(/\s/), function() {
      				transformed[this] = true;
      			});
      			data = transformed;
      		}
      		return data;
      	},

      	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
      	addMethod: function(name, method, message) {
      		$.validator.methods[name] = method;
      		$.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
      		if (method.length < 3) {
      			$.validator.addClassRules(name, $.validator.normalizeRule(name));
      		}
      	},

      	methods: {

      		// http://docs.jquery.com/Plugins/Validation/Methods/required
      		required: function(value, element, param) {
      			// check if dependency is met
      			if ( !this.depend(param, element) )
      				return "dependency-mismatch";
      			switch( element.nodeName.toLowerCase() ) {
      			case 'select':
      				// could be an array for select-multiple or a string, both are fine this way
      				var val = $(element).val();
      				return val && val.length > 0;
      			case 'input':
      				if ( this.checkable(element) )
      					return this.getLength(value, element) > 0;
      			default:
      				return $.trim(value).length > 0;
      			}
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/remote
      		remote: function(value, element, param) {
      			if ( this.optional(element) )
      				return "dependency-mismatch";

      			var previous = this.previousValue(element);
      			if (!this.settings.messages[element.name] )
      				this.settings.messages[element.name] = {};
      			previous.originalMessage = this.settings.messages[element.name].remote;
      			this.settings.messages[element.name].remote = previous.message;

      			param = typeof param == "string" && {url:param} || param;

      			if ( this.pending[element.name] ) {
      				return "pending";
      			}
      			if ( previous.old === value ) {
      				return previous.valid;
      			}

      			previous.old = value;
      			var validator = this;
      			this.startRequest(element);
      			var data = {};
      			data[element.name] = value;
      			$.ajax($.extend(true, {
      				url: param,
      				mode: "abort",
      				port: "validate" + element.name,
      				dataType: "json",
      				data: data,
      				success: function(response) {
      					validator.settings.messages[element.name].remote = previous.originalMessage;
      					var valid = response === true;
      					if ( valid ) {
      						var submitted = validator.formSubmitted;
      						validator.prepareElement(element);
      						validator.formSubmitted = submitted;
      						validator.successList.push(element);
      						validator.showErrors();
      					} else {
      						var errors = {};
      						var message = response || validator.defaultMessage( element, "remote" );
      						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
      						validator.showErrors(errors);
      					}
      					previous.valid = valid;
      					validator.stopRequest(element, valid);
      				}
      			}, param));
      			return "pending";
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
      		minlength: function(value, element, param) {
      			return this.optional(element) || this.getLength($.trim(value), element) >= param;
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
      		maxlength: function(value, element, param) {
      			return this.optional(element) || this.getLength($.trim(value), element) <= param;
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
      		rangelength: function(value, element, param) {
      			var length = this.getLength($.trim(value), element);
      			return this.optional(element) || ( length >= param[0] && length <= param[1] );
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/min
      		min: function( value, element, param ) {
      			return this.optional(element) || value >= param;
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/max
      		max: function( value, element, param ) {
      			return this.optional(element) || value <= param;
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/range
      		range: function( value, element, param ) {
      			return this.optional(element) || ( value >= param[0] && value <= param[1] );
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/email
      		email: function(value, element) {
      			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
      			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/url
      		url: function(value, element) {
      			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
      			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/date
      		date: function(value, element) {
      			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
      		dateISO: function(value, element) {
      			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/number
      		number: function(value, element) {
      			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/digits
      		digits: function(value, element) {
      			return this.optional(element) || /^\d+$/.test(value);
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
      		// based on http://en.wikipedia.org/wiki/Luhn
      		creditcard: function(value, element) {
      			if ( this.optional(element) )
      				return "dependency-mismatch";
      			// accept only spaces, digits and dashes
      			if (/[^0-9 -]+/.test(value))
      				return false;
      			var nCheck = 0,
      				nDigit = 0,
      				bEven = false;

      			value = value.replace(/\D/g, "");

      			for (var n = value.length - 1; n >= 0; n--) {
      				var cDigit = value.charAt(n);
      				var nDigit = parseInt(cDigit, 10);
      				if (bEven) {
      					if ((nDigit *= 2) > 9)
      						nDigit -= 9;
      				}
      				nCheck += nDigit;
      				bEven = !bEven;
      			}

      			return (nCheck % 10) == 0;
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/accept
      		accept: function(value, element, param) {
      			param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
      			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
      		},

      		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
      		equalTo: function(value, element, param) {
      			// bind to the blur event of the target in order to revalidate whenever the target field is updated
      			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
      			var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
      				$(element).valid();
      			});
      			return value == target.val();
      		}

      	}

      });

      // deprecated, use $.validator.format instead
      $.format = $.validator.format;

      })(jQuery);

      // ajax mode: abort
      // usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
      // if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
      ;(function($) {
      	var pendingRequests = {};
      	// Use a prefilter if available (1.5+)
      	if ( $.ajaxPrefilter ) {
      		$.ajaxPrefilter(function(settings, _, xhr) {
      			var port = settings.port;
      			if (settings.mode == "abort") {
      				if ( pendingRequests[port] ) {
      					pendingRequests[port].abort();
      				}
      				pendingRequests[port] = xhr;
      			}
      		});
      	} else {
      		// Proxy ajax
      		var ajax = $.ajax;
      		$.ajax = function(settings) {
      			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
      				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
      			if (mode == "abort") {
      				if ( pendingRequests[port] ) {
      					pendingRequests[port].abort();
      				}
      				return (pendingRequests[port] = ajax.apply(this, arguments));
      			}
      			return ajax.apply(this, arguments);
      		};
      	}
      })(jQuery);

      // provides cross-browser focusin and focusout events
      // IE has native support, in other browsers, use event caputuring (neither bubbles)

      // provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
      // handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
      ;(function($) {
      	// only implement if not provided by jQuery core (since 1.4)
      	// TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
      	if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
      		$.each({
      			focus: 'focusin',
      			blur: 'focusout'
      		}, function( original, fix ){
      			$.event.special[fix] = {
      				setup:function() {
      					this.addEventListener( original, handler, true );
      				},
      				teardown:function() {
      					this.removeEventListener( original, handler, true );
      				},
      				handler: function(e) {
      					arguments[0] = $.event.fix(e);
      					arguments[0].type = fix;
      					return $.event.handle.apply(this, arguments);
      				}
      			};
      			function handler(e) {
      				e = $.event.fix(e);
      				e.type = fix;
      				return $.event.handle.call(this, e);
      			}
      		});
      	};
      	$.extend($.fn, {
      		validateDelegate: function(delegate, type, handler) {
      			return this.bind(type, function(event) {
      				var target = $(event.target);
      				if (target.is(delegate)) {
      					return handler.apply(target, arguments);
      				}
      			});
      		}
      	});
      })(jQuery);



      /////  Additional Methods  //////

      jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
          phone_number = phone_number.replace(/\s+/g, "");
      	return this.optional(element) || phone_number.length > 9 &&
      		phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
      }, "Please specify a valid phone number");

      jQuery.validator.addMethod('phoneUK', function(phone_number, element) {
      return this.optional(element) || phone_number.length > 9 &&
      phone_number.match(/^(\(?(0|\+44)[1-9]{1}\d{1,4}?\)?\s?\d{3,4}\s?\d{3,4})$/);
      }, 'Please specify a valid phone number');

      jQuery.validator.addMethod('mobileUK', function(phone_number, element) {
      return this.optional(element) || phone_number.length > 9 &&
      phone_number.match(/^((0|\+44)7(5|6|7|8|9){1}\d{2}\s?\d{6})$/);
      }, 'Please specify a valid mobile number');

      // TODO check if value starts with <, otherwise don't try stripping anything
      jQuery.validator.addMethod("strippedminlength", function(value, element, param) {
      	return jQuery(value).text().length >= param;
      }, jQuery.validator.format("Please enter at least {0} characters"));

      // same as email, but TLD is optional
      jQuery.validator.addMethod("email2", function(value, element, param) {
      	return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
      }, jQuery.validator.messages.email);

      // same as url, but TLD is optional
      jQuery.validator.addMethod("url2", function(value, element, param) {
      	return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
      }, jQuery.validator.messages.url);

      // NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
      // Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
      // Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
      jQuery.validator.addMethod("creditcardtypes", function(value, element, param) {

      	if (/[^0-9-]+/.test(value))
      		return false;

      	value = value.replace(/\D/g, "");

      	var validTypes = 0x0000;

      	if (param.mastercard)
      		validTypes |= 0x0001;
      	if (param.visa)
      		validTypes |= 0x0002;
      	if (param.amex)
      		validTypes |= 0x0004;
      	if (param.dinersclub)
      		validTypes |= 0x0008;
      	if (param.enroute)
      		validTypes |= 0x0010;
      	if (param.discover)
      		validTypes |= 0x0020;
      	if (param.jcb)
      		validTypes |= 0x0040;
      	if (param.unknown)
      		validTypes |= 0x0080;
      	if (param.all)
      		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;

      	if (validTypes & 0x0001 && /^(51|52|53|54|55)/.test(value)) { //mastercard
      		return value.length == 16;
      	}
      	if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
      		return value.length == 16;
      	}
      	if (validTypes & 0x0004 && /^(34|37)/.test(value)) { //amex
      		return value.length == 15;
      	}
      	if (validTypes & 0x0008 && /^(300|301|302|303|304|305|36|38)/.test(value)) { //dinersclub
      		return value.length == 14;
      	}
      	if (validTypes & 0x0010 && /^(2014|2149)/.test(value)) { //enroute
      		return value.length == 15;
      	}
      	if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
      		return value.length == 16;
      	}
      	if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
      		return value.length == 16;
      	}
      	if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
      		return value.length == 15;
      	}
      	if (validTypes & 0x0080) { //unknown
      		return true;
      	}
      	return false;
      }, "Please enter a valid credit card number.");

      jQuery.validator.addMethod("ipv4", function(value, element, param) {
          return this.optional(element) || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(value);
      }, "Please enter a valid IP v4 address.");

      jQuery.validator.addMethod("ipv6", function(value, element, param) {
          return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
      }, "Please enter a valid IP v6 address.");

      /**
        * Return true if the field value matches the given format RegExp
        *
        * @example jQuery.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
        * @result true
        *
        * @example jQuery.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
        * @result false
        *
        * @name jQuery.validator.methods.pattern
        * @type Boolean
        * @cat Plugins/Validate/Methods
        */
      jQuery.validator.addMethod("pattern", function(value, element, param) {
          return this.optional(element) || param.test(value);
      }, "Invalid format.");

      jQuery.validator.addMethod("postalcode", function(postalcode, element) {
      	return this.optional(element) || postalcode.match(/(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXYabceghjklmnpstvxy]{1}\d{1}[A-Za-z]{1} ?\d{1}[A-Za-z]{1}\d{1})$/);
      }, "Please specify a valid postal/zip code");

      /* =============================================================

      	Smooth Scroll 2.19
      	Animate scrolling to anchor links, by Chris Ferdinandi.
      	http://gomakethings.com

      	Easing support contributed by Willem Liu.
      	https://github.com/willemliu

      	Easing functions forked from Gaëtan Renaudeau.
      	https://gist.github.com/gre/1650294

      	URL history support contributed by Robert Pate.
      	https://github.com/robertpateii

      	Fixed header support contributed by Arndt von Lucadou.
      	https://github.com/a-v-l

      	Free to use under the MIT License.
      	http://gomakethings.com/mit/

       * ============================================================= */

      (function (window, document, undefined) {

      	'use strict';

      	// Feature Test
      	if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

      		// Function to animate the scroll
      		var smoothScroll = function (anchor, duration, easing, url) {

      			// Functions to control easing
      			var easingPattern = function (type, time) {
      				if ( type == 'easeInQuad' ) return time * time; // accelerating from zero velocity
      				if ( type == 'easeOutQuad' ) return time * (2 - time); // decelerating to zero velocity
      				if ( type == 'easeInOutQuad' ) return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
      				if ( type == 'easeInCubic' ) return time * time * time; // accelerating from zero velocity
      				if ( type == 'easeOutCubic' ) return (--time) * time * time + 1; // decelerating to zero velocity
      				if ( type == 'easeInOutCubic' ) return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
      				if ( type == 'easeInQuart' ) return time * time * time * time; // accelerating from zero velocity
      				if ( type == 'easeOutQuart' ) return 1 - (--time) * time * time * time; // decelerating to zero velocity
      				if ( type == 'easeInOutQuart' ) return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
      				if ( type == 'easeInQuint' ) return time * time * time * time * time; // accelerating from zero velocity
      				if ( type == 'easeOutQuint' ) return 1 + (--time) * time * time * time * time; // decelerating to zero velocity
      				if ( type == 'easeInOutQuint' ) return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
      				return time; // no easing, no acceleration
      			};

      			// Function to update URL
      			var updateURL = function (url, anchor) {
      				if ( url === 'true' && history.pushState ) {
      					history.pushState( {pos:anchor.id}, '', '#' + anchor.id );
      				}
      			};

      			// Get the height of a fixed header if one exists
      			var scrollHeader = document.querySelector('.scroll-header');
      			var headerHeight = scrollHeader === null ? 0 : scrollHeader.offsetHeight;

      			// Calculate how far to scroll
      			var startLocation = window.pageYOffset;
      			var getEndLocation = function (anchor) {
      				var location = 0;
      				if (anchor.offsetParent) {
      					do {
      						location += anchor.offsetTop;
      						anchor = anchor.offsetParent;
      					} while (anchor);
      				}
      				location = location - headerHeight;
      				if ( location >= 0 ) {
      					return location;
      				} else {
      					return 0;
      				}
      			};
      			var endLocation = getEndLocation(anchor);
      			var distance = endLocation - startLocation;

      			// Function to stop the scrolling animation
      			var stopAnimation = function () {
      				var currentLocation = window.pageYOffset;
      				if ( currentLocation == endLocation || ( (window.innerHeight + currentLocation) >= document.body.scrollHeight ) ) {
      					clearInterval(runAnimation);
      				}
      			};

      			// Set the animation variables to 0/undefined.
      			var timeLapsed = 0;
      			var percentage, position;

      			// Scroll the page by an increment, and check if it's time to stop
      			var animateScroll = function () {
      				timeLapsed += 16;
      				percentage = ( timeLapsed / duration );
      				percentage = ( percentage > 1 ) ? 1 : percentage;
      				position = startLocation + ( distance * easingPattern(easing, percentage) );
      				window.scrollTo( 0, position );
      				stopAnimation();
      			};

      			// Update the URL and loop the animation function
      			updateURL(url, anchor);
      			var runAnimation = setInterval(animateScroll, 16);

      		};

      		// For each smooth scroll link
      		var scrollToggle = document.querySelectorAll('.scroll');
      		[].forEach.call(scrollToggle, function (toggle) {

      			// When the smooth scroll link is clicked
      			toggle.addEventListener('click', function(e) {

      				// Prevent the default link behavior
      				e.preventDefault();

      				// Get anchor link and calculate distance from the top
      				var dataID = toggle.getAttribute('href');
      				var dataTarget = document.querySelector(dataID);
      				var dataSpeed = toggle.getAttribute('data-speed');
      				var dataEasing = toggle.getAttribute('data-easing');
      				var dataURL = toggle.getAttribute('data-url');

      				// If the anchor exists, scroll to it
      				if (dataTarget) {
      					smoothScroll( dataTarget, dataSpeed || 500, dataEasing || 'easeInOutCubic', dataURL || 'false' );
      				}

      			}, false);

      		});

      		// Return to the top of the page when back button is clicked and no hash is set
      		window.onpopstate = function (event) {
      			if ( event.state === null && window.location.hash === '' ) {
      				window.scrollTo( 0, 0 );
      			}
      		};

      	}

      })(window, document);// -----------------------------------
      // Slidebars
      // Version 0.10.3
      // http://plugins.adchsm.me/slidebars/
      //
      // Written by Adam Smith
      // http://www.adchsm.me/
      //
      // Released under MIT License
      // http://plugins.adchsm.me/slidebars/license.txt
      //
      // ---------------------
      // Index of Slidebars.js
      //
      // 001 - Default Settings
      // 002 - Feature Detection
      // 003 - User Agents
      // 004 - Setup
      // 005 - Animation
      // 006 - Operations
      // 007 - API
      // 008 - User Input

      ;( function ( $ ) {

      	$.slidebars = function ( options ) {

      		// ----------------------
      		// 001 - Default Settings

      		var settings = $.extend( {
      			siteClose: true, // true or false - Enable closing of Slidebars by clicking on #sb-site.
      			scrollLock: false, // true or false - Prevent scrolling of site when a Slidebar is open.
      			disableOver: false, // integer or false - Hide Slidebars over a specific width.
      			hideControlClasses: false // true or false - Hide controls at same width as disableOver.
      		}, options );

      			// -----------------------
      		// 002 - Feature Detection

      		var test = document.createElement( 'div' ).style, // Create element to test on.
      		supportTransition = false, // Variable for testing transitions.
      		supportTransform = false; // variable for testing transforms.

      		// Test for CSS Transitions
      		if ( test.MozTransition === '' || test.WebkitTransition === '' || test.OTransition === '' || test.transition === '' ) supportTransition = true;

      		// Test for CSS Transforms
      		if ( test.MozTransform === '' || test.WebkitTransform === '' || test.OTransform === '' || test.transform === '' ) supportTransform = true;

      		// -----------------
      		// 003 - User Agents

      		var ua = navigator.userAgent, // Get user agent string.
      		android = false, // Variable for storing android version.
      		iOS = false; // Variable for storing iOS version.

      		if ( /Android/.test( ua ) ) { // Detect Android in user agent string.
      			android = ua.substr( ua.indexOf( 'Android' )+8, 3 ); // Set version of Android.
      		} else if ( /(iPhone|iPod|iPad)/.test( ua ) ) { // Detect iOS in user agent string.
      			iOS = ua.substr( ua.indexOf( 'OS ' )+3, 3 ).replace( '_', '.' ); // Set version of iOS.
      		}

      		if ( android && android < 3 || iOS && iOS < 5 ) $( 'html' ).addClass( 'sb-static' ); // Add helper class for older versions of Android & iOS.

      		// -----------
      		// 004 - Setup

      		// Site container
      		var $site = $( '#sb-site, .sb-site-container' ); // Cache the selector.

      		// Left Slidebar
      		if ( $( '.sb-left' ).length ) { // Check if the left Slidebar exists.
      			var $left = $( '.sb-left' ), // Cache the selector.
      			leftActive = false; // Used to check whether the left Slidebar is open or closed.
      		}

      		// Right Slidebar
      		if ( $( '.sb-right' ).length ) { // Check if the right Slidebar exists.
      			var $right = $( '.sb-right' ), // Cache the selector.
      			rightActive = false; // Used to check whether the right Slidebar is open or closed.
      		}

      		var init = false, // Initialisation variable.
      		windowWidth = $( window ).width(), // Get width of window.
      		$controls = $( '.sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close' ), // Cache the control classes.
      		$slide = $( '.sb-slide' ); // Cache users elements to animate.

      		// Initailise Slidebars
      		function initialise () {
      			if ( ! settings.disableOver || ( typeof settings.disableOver === 'number' && settings.disableOver >= windowWidth ) ) { // False or larger than window size.
      				init = true; // true enabled Slidebars to open.
      				$( 'html' ).addClass( 'sb-init' ); // Add helper class.
      				if ( settings.hideControlClasses ) $controls.removeClass( 'sb-hide' ); // Remove class just incase Slidebars was originally disabled.
      				css(); // Set required inline styles.
      			} else if ( typeof settings.disableOver === 'number' && settings.disableOver < windowWidth ) { // Less than window size.
      				init = false; // false stop Slidebars from opening.
      				$( 'html' ).removeClass( 'sb-init' ); // Remove helper class.
      				if ( settings.hideControlClasses ) $controls.addClass( 'sb-hide' ); // Hide controls
      				$site.css( 'minHeight', '' ); // Remove minimum height.
      				if ( leftActive || rightActive ) close(); // Close Slidebars if open.
      			}
      		}
      		initialise();

      		// Inline CSS
      		function css() {
      			// Site container height.
      			$site.css( 'minHeight', '' );
      			var siteHeight = parseInt( $site.css( 'height' ), 10 ),
      			htmlHeight = parseInt( $( 'html' ).css( 'height' ), 10 );
      			if ( siteHeight < htmlHeight ) $site.css( 'minHeight', $( 'html' ).css( 'height' ) ); // Test height for vh support..

      			// Custom Slidebar widths.
      			if ( $left && $left.hasClass( 'sb-width-custom' ) ) $left.css( 'width', $left.attr( 'data-sb-width' ) ); // Set user custom width.
      			if ( $right && $right.hasClass( 'sb-width-custom' ) ) $right.css( 'width', $right.attr( 'data-sb-width' ) ); // Set user custom width.

      			// Set off-canvas margins for Slidebars with push and overlay animations.
      			if ( $left && ( $left.hasClass( 'sb-style-push' ) || $left.hasClass( 'sb-style-overlay' ) ) ) $left.css( 'marginLeft', '-' + $left.css( 'width' ) );
      			if ( $right && ( $right.hasClass( 'sb-style-push' ) || $right.hasClass( 'sb-style-overlay' ) ) ) $right.css( 'marginRight', '-' + $right.css( 'width' ) );

      			// Site scroll locking.
      			if ( settings.scrollLock ) $( 'html' ).addClass( 'sb-scroll-lock' );
      		}

      		// Resize Functions
      		$( window ).resize( function () {
      			var resizedWindowWidth = $( window ).width(); // Get resized window width.
      			if ( windowWidth !== resizedWindowWidth ) { // Slidebars is running and window was actually resized.
      				windowWidth = resizedWindowWidth; // Set the new window width.
      				initialise(); // Call initalise to see if Slidebars should still be running.
      				if ( leftActive ) open( 'left' ); // If left Slidebar is open, calling open will ensure it is the correct size.
      				if ( rightActive ) open( 'right' ); // If right Slidebar is open, calling open will ensure it is the correct size.
      			}
      		} );
      		// I may include a height check along side a width check here in future.

      		// ---------------
      		// 005 - Animation

      		var animation; // Animation type.

      		// Set animation type.
      		if ( supportTransition && supportTransform ) { // Browser supports css transitions and transforms.
      			animation = 'translate'; // Translate for browsers that support it.
      			if ( android && android < 4.4 ) animation = 'side'; // Android supports both, but can't translate any fixed positions, so use left instead.
      		} else {
      			animation = 'jQuery'; // Browsers that don't support css transitions and transitions.
      		}

      		// Animate mixin.
      		function animate( object, amount, side ) {

      			// Choose selectors depending on animation style.
      			var selector;

      			if ( object.hasClass( 'sb-style-push' ) ) {
      				selector = $site.add( object ).add( $slide ); // Push - Animate site, Slidebar and user elements.
      			} else if ( object.hasClass( 'sb-style-overlay' ) ) {
      				selector = object; // Overlay - Animate Slidebar only.
      			} else {
      				selector = $site.add( $slide ); // Reveal - Animate site and user elements.
      			}

      			// Apply animation
      			if ( animation === 'translate' ) {
      				if ( amount === '0px' ) {
      					removeAnimation();
      				} else {
      					selector.css( 'transform', 'translate( ' + amount + ' )' ); // Apply the animation.
      				}

      			} else if ( animation === 'side' ) {
      				if ( amount === '0px' ) {
      					removeAnimation();
      				} else {
      					if ( amount[0] === '-' ) amount = amount.substr( 1 ); // Remove the '-' from the passed amount for side animations.
      					selector.css( side, '0px' ); // Add a 0 value so css transition works.
      					setTimeout( function () { // Set a timeout to allow the 0 value to be applied above.
      						selector.css( side, amount ); // Apply the animation.
      					}, 1 );
      				}

      			} else if ( animation === 'jQuery' ) {
      				if ( amount[0] === '-' ) amount = amount.substr( 1 ); // Remove the '-' from the passed amount for jQuery animations.
      				var properties = {};
      				properties[side] = amount;
      				selector.stop().animate( properties, 400 ); // Stop any current jQuery animation before starting another.
      			}

      			// Remove animation
      			function removeAnimation () {
      				selector.removeAttr( 'style' );
      				css();
      			}
      		}

      		// ----------------
      		// 006 - Operations

      		// Open a Slidebar
      		function open( side ) {

      			// Check to see if opposite Slidebar is open.
      			if ( side === 'left' && $left && rightActive || side === 'right' && $right && leftActive ) { // It's open, close it, then continue.
      				close();
      				setTimeout( proceed, 400 );
      			} else { // Its not open, continue.
      				proceed();
      			}

      			// Open
      			function proceed() {
      				if ( init && side === 'left' && $left ) { // Slidebars is initiated, left is in use and called to open.
      					$( 'html' ).addClass( 'sb-active sb-active-left' ); // Add active classes.
      					$left.addClass( 'sb-active' );
      					animate( $left, $left.css( 'width' ), 'left' ); // Animation
      					setTimeout( function () { leftActive = true; $left.focus(); }, 400 ); // Set active variables.
      				} else if ( init && side === 'right' && $right ) { // Slidebars is initiated, right is in use and called to open.
      					$( 'html' ).addClass( 'sb-active sb-active-right' ); // Add active classes.
      					$right.addClass( 'sb-active' );
      					animate( $right, '-' + $right.css( 'width' ), 'right' ); // Animation
      					setTimeout( function () { rightActive = true; $right.focus(); }, 400 ); // Set active variables.
      				}
      			}
      		}

      		// Close either Slidebar
      		function close( url, target ) {

      			if ( leftActive || rightActive ) { // If a Slidebar is open.
      				if ( leftActive ) {
      					animate( $left, '0px', 'left' ); // Animation
      					leftActive = false;
      				}
      				if ( rightActive ) {
      					animate( $right, '0px', 'right' ); // Animation
      					rightActive = false;
      				}

      				setTimeout( function () { // Wait for closing animation to finish.
      					$( 'html' ).removeClass( 'sb-active sb-active-left sb-active-right' ); // Remove active classes.
      					if ( $left ) $left.removeClass( 'sb-active' );
      					if ( $right ) $right.removeClass( 'sb-active' );
      					if ( typeof url !== 'undefined' ) { // If a link has been passed to the function, go to it.
      						if ( typeof target === undefined ) target = '_self'; // Set to _self if undefined.
      						window.open( url, target ); // Open the url.
      					}
      				}, 400 );
      			}
      		}

      		// Toggle either Slidebar
      		function toggle( side ) {
      			if ( side === 'left' && $left ) { // If left Slidebar is called and in use.
      				if ( ! leftActive ) {
      					open( 'left' ); // Slidebar is closed, open it.
      				} else {
      					close(); // Slidebar is open, close it.
      				}
      			}
      			if ( side === 'right' && $right ) { // If right Slidebar is called and in use.
      				if ( ! rightActive ) {
      					open( 'right' ); // Slidebar is closed, open it.
      				} else {
      					close(); // Slidebar is open, close it.
      				}
      			}
      		}

      		// ---------
      		// 007 - API

      		this.slidebars = {
      			open: open, // Maps user variable name to the open method.
      			close: close, // Maps user variable name to the close method.
      			toggle: toggle, // Maps user variable name to the toggle method.
      			init: function () { // Returns true or false whether Slidebars are running or not.
      				return init; // Returns true or false whether Slidebars are running.
      			},
      			active: function ( side ) { // Returns true or false whether Slidebar is open or closed.
      				if ( side === 'left' && $left ) return leftActive;
      				if ( side === 'right' && $right ) return rightActive;
      			},
      			destroy: function ( side ) { // Removes the Slidebar from the DOM.
      				if ( side === 'left' && $left ) {
      					if ( leftActive ) close(); // Close if its open.
      					setTimeout( function () {
      						$left.remove(); // Remove it.
      						$left = false; // Set variable to false so it cannot be opened again.
      					}, 400 );
      				}
      				if ( side === 'right' && $right) {
      					if ( rightActive ) close(); // Close if its open.
      					setTimeout( function () {
      						$right.remove(); // Remove it.
      						$right = false; // Set variable to false so it cannot be opened again.
      					}, 400 );
      				}
      			}
      		};

      		// ----------------
      		// 008 - User Input

      		function eventHandler( event, selector ) {
      			event.stopPropagation(); // Stop event bubbling.
      			event.preventDefault(); // Prevent default behaviour.
      			if ( event.type === 'touchend' ) selector.off( 'click' ); // If event type was touch, turn off clicks to prevent phantom clicks.
      		}

      		// Toggle left Slidebar
      		$( '.sb-toggle-left' ).on( 'touchend click', function ( event ) {
      			eventHandler( event, $( this ) ); // Handle the event.
      			toggle( 'left' ); // Toggle the left Slidbar.
      		} );

      		// Toggle right Slidebar
      		$( '.sb-toggle-right' ).on( 'touchend click', function ( event ) {
      			eventHandler( event, $( this ) ); // Handle the event.
      			toggle( 'right' ); // Toggle the right Slidbar.
      		} );

      		// Open left Slidebar
      		$( '.sb-open-left' ).on( 'touchend click', function ( event ) {
      			eventHandler( event, $( this ) ); // Handle the event.
      			open( 'left' ); // Open the left Slidebar.
      		} );

      		// Open right Slidebar
      		$( '.sb-open-right' ).on( 'touchend click', function ( event ) {
      			eventHandler( event, $( this ) ); // Handle the event.
      			open( 'right' ); // Open the right Slidebar.
      		} );


      		// Close Slidebar
      		$('.sb-close').on('touchend click', function ( event ) {
      			if ( $( this ).is( 'a' ) || $( this ).children().is( 'a' ) ) { // Is a link or contains a link.
      				if ( event.type === 'click' ) { // Make sure the user wanted to follow the link.
      					event.stopPropagation(); // Stop events propagating
      					event.preventDefault(); // Stop default behaviour

      					var link = ( $( this ).is( 'a' ) ? $( this ) : $( this ).find( 'a' ) ), // Get the link selector.
      					url = link.attr( 'href' ), // Get the link url.
      					target = ( link.attr( 'target' ) ? link.attr( 'target' ) : '_self' ); // Set target, default to _self if not provided

      					close( url, target ); // Close Slidebar and pass link target.
      				}
      			} else { // Just a normal control class.
      				eventHandler( event, $( this ) ); // Handle the event.
      				close(); // Close Slidebar.
      			}
      		} );

      		// Close Slidebar via site
      		$site.on( 'touchend click', function ( event ) {

      			if ( settings.siteClose && ( leftActive || rightActive ) ) { // If settings permit closing by site and left or right Slidebar is open.
      				eventHandler( event, $( this ) ); // Handle the event.
      				close(); // Close it.
      			}
      		} );


      	}; // End Slidebars function.


      } ) ( jQuery );

      function closeSidebar(){
      	$.slidebars.close();
      }
      /*
           _ _      _       _
       ___| (_) ___| | __  (_)___
      / __| | |/ __| |/ /  | / __|
      \__ \ | | (__|   < _ | \__ \
      |___/_|_|\___|_|\_(_)/ |___/
                         |__/

       Version: 1.8.0
        Author: Ken Wheeler
       Website: http://kenwheeler.github.io
          Docs: http://kenwheeler.github.io/slick
          Repo: http://github.com/kenwheeler/slick
        Issues: http://github.com/kenwheeler/slick/issues

       */
      /* global window, document, define, jQuery, setInterval, clearInterval */
      ;(function(factory) {
          'use strict';
          if (typeof define === 'function' && define.amd) {
              define(['jquery'], factory);
          } else if (typeof exports !== 'undefined') {
              module.exports = factory(require('jquery'));
          } else {
              factory(jQuery);
          }

      }(function($) {
          'use strict';
          var Slick = window.Slick || {};

          Slick = (function() {

              var instanceUid = 0;

              function Slick(element, settings) {

                  var _ = this, dataSettings;

                  _.defaults = {
                      accessibility: true,
                      adaptiveHeight: false,
                      appendArrows: $(element),
                      appendDots: $(element),
                      arrows: true,
                      asNavFor: null,
                      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                      autoplay: false,
                      autoplaySpeed: 3000,
                      centerMode: false,
                      centerPadding: '50px',
                      cssEase: 'ease',
                      customPaging: function(slider, i) {
                          return $('<button type="button" />').text(i + 1);
                      },
                      dots: false,
                      dotsClass: 'slick-dots',
                      draggable: true,
                      easing: 'linear',
                      edgeFriction: 0.35,
                      fade: false,
                      focusOnSelect: false,
                      focusOnChange: false,
                      infinite: true,
                      initialSlide: 0,
                      lazyLoad: 'ondemand',
                      mobileFirst: false,
                      pauseOnHover: true,
                      pauseOnFocus: true,
                      pauseOnDotsHover: false,
                      respondTo: 'window',
                      responsive: null,
                      rows: 1,
                      rtl: false,
                      slide: '',
                      slidesPerRow: 1,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      speed: 500,
                      swipe: true,
                      swipeToSlide: false,
                      touchMove: true,
                      touchThreshold: 5,
                      useCSS: true,
                      useTransform: true,
                      variableWidth: false,
                      vertical: false,
                      verticalSwiping: false,
                      waitForAnimate: true,
                      zIndex: 1000
                  };

                  _.initials = {
                      animating: false,
                      dragging: false,
                      autoPlayTimer: null,
                      currentDirection: 0,
                      currentLeft: null,
                      currentSlide: 0,
                      direction: 1,
                      $dots: null,
                      listWidth: null,
                      listHeight: null,
                      loadIndex: 0,
                      $nextArrow: null,
                      $prevArrow: null,
                      scrolling: false,
                      slideCount: null,
                      slideWidth: null,
                      $slideTrack: null,
                      $slides: null,
                      sliding: false,
                      slideOffset: 0,
                      swipeLeft: null,
                      swiping: false,
                      $list: null,
                      touchObject: {},
                      transformsEnabled: false,
                      unslicked: false
                  };

                  $.extend(_, _.initials);

                  _.activeBreakpoint = null;
                  _.animType = null;
                  _.animProp = null;
                  _.breakpoints = [];
                  _.breakpointSettings = [];
                  _.cssTransitions = false;
                  _.focussed = false;
                  _.interrupted = false;
                  _.hidden = 'hidden';
                  _.paused = true;
                  _.positionProp = null;
                  _.respondTo = null;
                  _.rowCount = 1;
                  _.shouldClick = true;
                  _.$slider = $(element);
                  _.$slidesCache = null;
                  _.transformType = null;
                  _.transitionType = null;
                  _.visibilityChange = 'visibilitychange';
                  _.windowWidth = 0;
                  _.windowTimer = null;

                  dataSettings = $(element).data('slick') || {};

                  _.options = $.extend({}, _.defaults, settings, dataSettings);

                  _.currentSlide = _.options.initialSlide;

                  _.originalSettings = _.options;

                  if (typeof document.mozHidden !== 'undefined') {
                      _.hidden = 'mozHidden';
                      _.visibilityChange = 'mozvisibilitychange';
                  } else if (typeof document.webkitHidden !== 'undefined') {
                      _.hidden = 'webkitHidden';
                      _.visibilityChange = 'webkitvisibilitychange';
                  }

                  _.autoPlay = $.proxy(_.autoPlay, _);
                  _.autoPlayClear = $.proxy(_.autoPlayClear, _);
                  _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
                  _.changeSlide = $.proxy(_.changeSlide, _);
                  _.clickHandler = $.proxy(_.clickHandler, _);
                  _.selectHandler = $.proxy(_.selectHandler, _);
                  _.setPosition = $.proxy(_.setPosition, _);
                  _.swipeHandler = $.proxy(_.swipeHandler, _);
                  _.dragHandler = $.proxy(_.dragHandler, _);
                  _.keyHandler = $.proxy(_.keyHandler, _);

                  _.instanceUid = instanceUid++;

                  // A simple way to check for HTML strings
                  // Strict HTML recognition (must start with <)
                  // Extracted from jQuery v1.11 source
                  _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


                  _.registerBreakpoints();
                  _.init(true);

              }

              return Slick;

          }());

          Slick.prototype.activateADA = function() {
              var _ = this;

              _.$slideTrack.find('.slick-active').attr({
                  'aria-hidden': 'false'
              }).find('a, input, button, select').attr({
                  'tabindex': '0'
              });

          };

          Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

              var _ = this;

              if (typeof(index) === 'boolean') {
                  addBefore = index;
                  index = null;
              } else if (index < 0 || (index >= _.slideCount)) {
                  return false;
              }

              _.unload();

              if (typeof(index) === 'number') {
                  if (index === 0 && _.$slides.length === 0) {
                      $(markup).appendTo(_.$slideTrack);
                  } else if (addBefore) {
                      $(markup).insertBefore(_.$slides.eq(index));
                  } else {
                      $(markup).insertAfter(_.$slides.eq(index));
                  }
              } else {
                  if (addBefore === true) {
                      $(markup).prependTo(_.$slideTrack);
                  } else {
                      $(markup).appendTo(_.$slideTrack);
                  }
              }

              _.$slides = _.$slideTrack.children(this.options.slide);

              _.$slideTrack.children(this.options.slide).detach();

              _.$slideTrack.append(_.$slides);

              _.$slides.each(function(index, element) {
                  $(element).attr('data-slick-index', index);
              });

              _.$slidesCache = _.$slides;

              _.reinit();

          };

          Slick.prototype.animateHeight = function() {
              var _ = this;
              if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                  var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                  _.$list.animate({
                      height: targetHeight
                  }, _.options.speed);
              }
          };

          Slick.prototype.animateSlide = function(targetLeft, callback) {

              var animProps = {},
                  _ = this;

              _.animateHeight();

              if (_.options.rtl === true && _.options.vertical === false) {
                  targetLeft = -targetLeft;
              }
              if (_.transformsEnabled === false) {
                  if (_.options.vertical === false) {
                      _.$slideTrack.animate({
                          left: targetLeft
                      }, _.options.speed, _.options.easing, callback);
                  } else {
                      _.$slideTrack.animate({
                          top: targetLeft
                      }, _.options.speed, _.options.easing, callback);
                  }

              } else {

                  if (_.cssTransitions === false) {
                      if (_.options.rtl === true) {
                          _.currentLeft = -(_.currentLeft);
                      }
                      $({
                          animStart: _.currentLeft
                      }).animate({
                          animStart: targetLeft
                      }, {
                          duration: _.options.speed,
                          easing: _.options.easing,
                          step: function(now) {
                              now = Math.ceil(now);
                              if (_.options.vertical === false) {
                                  animProps[_.animType] = 'translate(' +
                                      now + 'px, 0px)';
                                  _.$slideTrack.css(animProps);
                              } else {
                                  animProps[_.animType] = 'translate(0px,' +
                                      now + 'px)';
                                  _.$slideTrack.css(animProps);
                              }
                          },
                          complete: function() {
                              if (callback) {
                                  callback.call();
                              }
                          }
                      });

                  } else {

                      _.applyTransition();
                      targetLeft = Math.ceil(targetLeft);

                      if (_.options.vertical === false) {
                          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                      } else {
                          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                      }
                      _.$slideTrack.css(animProps);

                      if (callback) {
                          setTimeout(function() {

                              _.disableTransition();

                              callback.call();
                          }, _.options.speed);
                      }

                  }

              }

          };

          Slick.prototype.getNavTarget = function() {

              var _ = this,
                  asNavFor = _.options.asNavFor;

              if ( asNavFor && asNavFor !== null ) {
                  asNavFor = $(asNavFor).not(_.$slider);
              }

              return asNavFor;

          };

          Slick.prototype.asNavFor = function(index) {

              var _ = this,
                  asNavFor = _.getNavTarget();

              if ( asNavFor !== null && typeof asNavFor === 'object' ) {
                  asNavFor.each(function() {
                      var target = $(this).slick('getSlick');
                      if(!target.unslicked) {
                          target.slideHandler(index, true);
                      }
                  });
              }

          };

          Slick.prototype.applyTransition = function(slide) {

              var _ = this,
                  transition = {};

              if (_.options.fade === false) {
                  transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
              } else {
                  transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
              }

              if (_.options.fade === false) {
                  _.$slideTrack.css(transition);
              } else {
                  _.$slides.eq(slide).css(transition);
              }

          };

          Slick.prototype.autoPlay = function() {

              var _ = this;

              _.autoPlayClear();

              if ( _.slideCount > _.options.slidesToShow ) {
                  _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
              }

          };

          Slick.prototype.autoPlayClear = function() {

              var _ = this;

              if (_.autoPlayTimer) {
                  clearInterval(_.autoPlayTimer);
              }

          };

          Slick.prototype.autoPlayIterator = function() {

              var _ = this,
                  slideTo = _.currentSlide + _.options.slidesToScroll;

              if ( !_.paused && !_.interrupted && !_.focussed ) {

                  if ( _.options.infinite === false ) {

                      if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                          _.direction = 0;
                      }

                      else if ( _.direction === 0 ) {

                          slideTo = _.currentSlide - _.options.slidesToScroll;

                          if ( _.currentSlide - 1 === 0 ) {
                              _.direction = 1;
                          }

                      }

                  }

                  _.slideHandler( slideTo );

              }

          };

          Slick.prototype.buildArrows = function() {

              var _ = this;

              if (_.options.arrows === true ) {

                  _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
                  _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

                  if( _.slideCount > _.options.slidesToShow ) {

                      _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                      _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                      if (_.htmlExpr.test(_.options.prevArrow)) {
                          _.$prevArrow.prependTo(_.options.appendArrows);
                      }

                      if (_.htmlExpr.test(_.options.nextArrow)) {
                          _.$nextArrow.appendTo(_.options.appendArrows);
                      }

                      if (_.options.infinite !== true) {
                          _.$prevArrow
                              .addClass('slick-disabled')
                              .attr('aria-disabled', 'true');
                      }

                  } else {

                      _.$prevArrow.add( _.$nextArrow )

                          .addClass('slick-hidden')
                          .attr({
                              'aria-disabled': 'true',
                              'tabindex': '-1'
                          });

                  }

              }

          };

          Slick.prototype.buildDots = function() {

              var _ = this,
                  i, dot;

              if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

                  _.$slider.addClass('slick-dotted');

                  dot = $('<ul />').addClass(_.options.dotsClass);

                  for (i = 0; i <= _.getDotCount(); i += 1) {
                      dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
                  }

                  _.$dots = dot.appendTo(_.options.appendDots);

                  _.$dots.find('li').first().addClass('slick-active');

              }

          };

          Slick.prototype.buildOut = function() {

              var _ = this;

              _.$slides =
                  _.$slider
                      .children( _.options.slide + ':not(.slick-cloned)')
                      .addClass('slick-slide');

              _.slideCount = _.$slides.length;

              _.$slides.each(function(index, element) {
                  $(element)
                      .attr('data-slick-index', index)
                      .data('originalStyling', $(element).attr('style') || '');
              });

              _.$slider.addClass('slick-slider');

              _.$slideTrack = (_.slideCount === 0) ?
                  $('<div class="slick-track"/>').appendTo(_.$slider) :
                  _.$slides.wrapAll('<div class="slick-track"/>').parent();

              _.$list = _.$slideTrack.wrap(
                  '<div class="slick-list"/>').parent();
              _.$slideTrack.css('opacity', 0);

              if (_.options.centerMode === true || _.options.swipeToSlide === true) {
                  _.options.slidesToScroll = 1;
              }

              $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

              _.setupInfinite();

              _.buildArrows();

              _.buildDots();

              _.updateDots();


              _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

              if (_.options.draggable === true) {
                  _.$list.addClass('draggable');
              }

          };

          Slick.prototype.buildRows = function() {

              var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

              newSlides = document.createDocumentFragment();
              originalSlides = _.$slider.children();

              if(_.options.rows > 0) {

                  slidesPerSection = _.options.slidesPerRow * _.options.rows;
                  numOfSlides = Math.ceil(
                      originalSlides.length / slidesPerSection
                  );

                  for(a = 0; a < numOfSlides; a++){
                      var slide = document.createElement('div');
                      for(b = 0; b < _.options.rows; b++) {
                          var row = document.createElement('div');
                          for(c = 0; c < _.options.slidesPerRow; c++) {
                              var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                              if (originalSlides.get(target)) {
                                  row.appendChild(originalSlides.get(target));
                              }
                          }
                          slide.appendChild(row);
                      }
                      newSlides.appendChild(slide);
                  }

                  _.$slider.empty().append(newSlides);
                  _.$slider.children().children().children()
                      .css({
                          'width':(100 / _.options.slidesPerRow) + '%',
                          'display': 'inline-block'
                      });

              }

          };

          Slick.prototype.checkResponsive = function(initial, forceUpdate) {

              var _ = this,
                  breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
              var sliderWidth = _.$slider.width();
              var windowWidth = window.innerWidth || $(window).width();

              if (_.respondTo === 'window') {
                  respondToWidth = windowWidth;
              } else if (_.respondTo === 'slider') {
                  respondToWidth = sliderWidth;
              } else if (_.respondTo === 'min') {
                  respondToWidth = Math.min(windowWidth, sliderWidth);
              }

              if ( _.options.responsive &&
                  _.options.responsive.length &&
                  _.options.responsive !== null) {

                  targetBreakpoint = null;

                  for (breakpoint in _.breakpoints) {
                      if (_.breakpoints.hasOwnProperty(breakpoint)) {
                          if (_.originalSettings.mobileFirst === false) {
                              if (respondToWidth < _.breakpoints[breakpoint]) {
                                  targetBreakpoint = _.breakpoints[breakpoint];
                              }
                          } else {
                              if (respondToWidth > _.breakpoints[breakpoint]) {
                                  targetBreakpoint = _.breakpoints[breakpoint];
                              }
                          }
                      }
                  }

                  if (targetBreakpoint !== null) {
                      if (_.activeBreakpoint !== null) {
                          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                              _.activeBreakpoint =
                                  targetBreakpoint;
                              if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                                  _.unslick(targetBreakpoint);
                              } else {
                                  _.options = $.extend({}, _.originalSettings,
                                      _.breakpointSettings[
                                          targetBreakpoint]);
                                  if (initial === true) {
                                      _.currentSlide = _.options.initialSlide;
                                  }
                                  _.refresh(initial);
                              }
                              triggerBreakpoint = targetBreakpoint;
                          }
                      } else {
                          _.activeBreakpoint = targetBreakpoint;
                          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                              _.unslick(targetBreakpoint);
                          } else {
                              _.options = $.extend({}, _.originalSettings,
                                  _.breakpointSettings[
                                      targetBreakpoint]);
                              if (initial === true) {
                                  _.currentSlide = _.options.initialSlide;
                              }
                              _.refresh(initial);
                          }
                          triggerBreakpoint = targetBreakpoint;
                      }
                  } else {
                      if (_.activeBreakpoint !== null) {
                          _.activeBreakpoint = null;
                          _.options = _.originalSettings;
                          if (initial === true) {
                              _.currentSlide = _.options.initialSlide;
                          }
                          _.refresh(initial);
                          triggerBreakpoint = targetBreakpoint;
                      }
                  }

                  // only trigger breakpoints during an actual break. not on initialize.
                  if( !initial && triggerBreakpoint !== false ) {
                      _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
                  }
              }

          };

          Slick.prototype.changeSlide = function(event, dontAnimate) {

              var _ = this,
                  $target = $(event.currentTarget),
                  indexOffset, slideOffset, unevenOffset;

              // If target is a link, prevent default action.
              if($target.is('a')) {
                  event.preventDefault();
              }

              // If target is not the <li> element (ie: a child), find the <li>.
              if(!$target.is('li')) {
                  $target = $target.closest('li');
              }

              unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
              indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

              switch (event.data.message) {

                  case 'previous':
                      slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                      if (_.slideCount > _.options.slidesToShow) {
                          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                      }
                      break;

                  case 'next':
                      slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                      if (_.slideCount > _.options.slidesToShow) {
                          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                      }
                      break;

                  case 'index':
                      var index = event.data.index === 0 ? 0 :
                          event.data.index || $target.index() * _.options.slidesToScroll;

                      _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                      $target.children().trigger('focus');
                      break;

                  default:
                      return;
              }

          };

          Slick.prototype.checkNavigable = function(index) {

              var _ = this,
                  navigables, prevNavigable;

              navigables = _.getNavigableIndexes();
              prevNavigable = 0;
              if (index > navigables[navigables.length - 1]) {
                  index = navigables[navigables.length - 1];
              } else {
                  for (var n in navigables) {
                      if (index < navigables[n]) {
                          index = prevNavigable;
                          break;
                      }
                      prevNavigable = navigables[n];
                  }
              }

              return index;
          };

          Slick.prototype.cleanUpEvents = function() {

              var _ = this;

              if (_.options.dots && _.$dots !== null) {

                  $('li', _.$dots)
                      .off('click.slick', _.changeSlide)
                      .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                      .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

                  if (_.options.accessibility === true) {
                      _.$dots.off('keydown.slick', _.keyHandler);
                  }
              }

              _.$slider.off('focus.slick blur.slick');

              if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                  _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
                  _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

                  if (_.options.accessibility === true) {
                      _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                      _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
                  }
              }

              _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
              _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
              _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
              _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

              _.$list.off('click.slick', _.clickHandler);

              $(document).off(_.visibilityChange, _.visibility);

              _.cleanUpSlideEvents();

              if (_.options.accessibility === true) {
                  _.$list.off('keydown.slick', _.keyHandler);
              }

              if (_.options.focusOnSelect === true) {
                  $(_.$slideTrack).children().off('click.slick', _.selectHandler);
              }

              $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

              $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

              $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

              $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

          };

          Slick.prototype.cleanUpSlideEvents = function() {

              var _ = this;

              _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
              _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

          };

          Slick.prototype.cleanUpRows = function() {

              var _ = this, originalSlides;

              if(_.options.rows > 0) {
                  originalSlides = _.$slides.children().children();
                  originalSlides.removeAttr('style');
                  _.$slider.empty().append(originalSlides);
              }

          };

          Slick.prototype.clickHandler = function(event) {

              var _ = this;

              if (_.shouldClick === false) {
                  event.stopImmediatePropagation();
                  event.stopPropagation();
                  event.preventDefault();
              }

          };

          Slick.prototype.destroy = function(refresh) {

              var _ = this;

              _.autoPlayClear();

              _.touchObject = {};

              _.cleanUpEvents();

              $('.slick-cloned', _.$slider).detach();

              if (_.$dots) {
                  _.$dots.remove();
              }

              if ( _.$prevArrow && _.$prevArrow.length ) {

                  _.$prevArrow
                      .removeClass('slick-disabled slick-arrow slick-hidden')
                      .removeAttr('aria-hidden aria-disabled tabindex')
                      .css('display','');

                  if ( _.htmlExpr.test( _.options.prevArrow )) {
                      _.$prevArrow.remove();
                  }
              }

              if ( _.$nextArrow && _.$nextArrow.length ) {

                  _.$nextArrow
                      .removeClass('slick-disabled slick-arrow slick-hidden')
                      .removeAttr('aria-hidden aria-disabled tabindex')
                      .css('display','');

                  if ( _.htmlExpr.test( _.options.nextArrow )) {
                      _.$nextArrow.remove();
                  }
              }


              if (_.$slides) {

                  _.$slides
                      .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                      .removeAttr('aria-hidden')
                      .removeAttr('data-slick-index')
                      .each(function(){
                          $(this).attr('style', $(this).data('originalStyling'));
                      });

                  _.$slideTrack.children(this.options.slide).detach();

                  _.$slideTrack.detach();

                  _.$list.detach();

                  _.$slider.append(_.$slides);
              }

              _.cleanUpRows();

              _.$slider.removeClass('slick-slider');
              _.$slider.removeClass('slick-initialized');
              _.$slider.removeClass('slick-dotted');

              _.unslicked = true;

              if(!refresh) {
                  _.$slider.trigger('destroy', [_]);
              }

          };

          Slick.prototype.disableTransition = function(slide) {

              var _ = this,
                  transition = {};

              transition[_.transitionType] = '';

              if (_.options.fade === false) {
                  _.$slideTrack.css(transition);
              } else {
                  _.$slides.eq(slide).css(transition);
              }

          };

          Slick.prototype.fadeSlide = function(slideIndex, callback) {

              var _ = this;

              if (_.cssTransitions === false) {

                  _.$slides.eq(slideIndex).css({
                      zIndex: _.options.zIndex
                  });

                  _.$slides.eq(slideIndex).animate({
                      opacity: 1
                  }, _.options.speed, _.options.easing, callback);

              } else {

                  _.applyTransition(slideIndex);

                  _.$slides.eq(slideIndex).css({
                      opacity: 1,
                      zIndex: _.options.zIndex
                  });

                  if (callback) {
                      setTimeout(function() {

                          _.disableTransition(slideIndex);

                          callback.call();
                      }, _.options.speed);
                  }

              }

          };

          Slick.prototype.fadeSlideOut = function(slideIndex) {

              var _ = this;

              if (_.cssTransitions === false) {

                  _.$slides.eq(slideIndex).animate({
                      opacity: 0,
                      zIndex: _.options.zIndex - 2
                  }, _.options.speed, _.options.easing);

              } else {

                  _.applyTransition(slideIndex);

                  _.$slides.eq(slideIndex).css({
                      opacity: 0,
                      zIndex: _.options.zIndex - 2
                  });

              }

          };

          Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

              var _ = this;

              if (filter !== null) {

                  _.$slidesCache = _.$slides;

                  _.unload();

                  _.$slideTrack.children(this.options.slide).detach();

                  _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

                  _.reinit();

              }

          };

          Slick.prototype.focusHandler = function() {

              var _ = this;

              _.$slider
                  .off('focus.slick blur.slick')
                  .on('focus.slick blur.slick', '*', function(event) {

                  event.stopImmediatePropagation();
                  var $sf = $(this);

                  setTimeout(function() {

                      if( _.options.pauseOnFocus ) {
                          _.focussed = $sf.is(':focus');
                          _.autoPlay();
                      }

                  }, 0);

              });
          };

          Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

              var _ = this;
              return _.currentSlide;

          };

          Slick.prototype.getDotCount = function() {

              var _ = this;

              var breakPoint = 0;
              var counter = 0;
              var pagerQty = 0;

              if (_.options.infinite === true) {
                  if (_.slideCount <= _.options.slidesToShow) {
                       ++pagerQty;
                  } else {
                      while (breakPoint < _.slideCount) {
                          ++pagerQty;
                          breakPoint = counter + _.options.slidesToScroll;
                          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                      }
                  }
              } else if (_.options.centerMode === true) {
                  pagerQty = _.slideCount;
              } else if(!_.options.asNavFor) {
                  pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
              }else {
                  while (breakPoint < _.slideCount) {
                      ++pagerQty;
                      breakPoint = counter + _.options.slidesToScroll;
                      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                  }
              }

              return pagerQty - 1;

          };

          Slick.prototype.getLeft = function(slideIndex) {

              var _ = this,
                  targetLeft,
                  verticalHeight,
                  verticalOffset = 0,
                  targetSlide,
                  coef;

              _.slideOffset = 0;
              verticalHeight = _.$slides.first().outerHeight(true);

              if (_.options.infinite === true) {
                  if (_.slideCount > _.options.slidesToShow) {
                      _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                      coef = -1

                      if (_.options.vertical === true && _.options.centerMode === true) {
                          if (_.options.slidesToShow === 2) {
                              coef = -1.5;
                          } else if (_.options.slidesToShow === 1) {
                              coef = -2
                          }
                      }
                      verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
                  }
                  if (_.slideCount % _.options.slidesToScroll !== 0) {
                      if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                          if (slideIndex > _.slideCount) {
                              _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                              verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                          } else {
                              _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                              verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                          }
                      }
                  }
              } else {
                  if (slideIndex + _.options.slidesToShow > _.slideCount) {
                      _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                      verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
                  }
              }

              if (_.slideCount <= _.options.slidesToShow) {
                  _.slideOffset = 0;
                  verticalOffset = 0;
              }

              if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
                  _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
              } else if (_.options.centerMode === true && _.options.infinite === true) {
                  _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
              } else if (_.options.centerMode === true) {
                  _.slideOffset = 0;
                  _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
              }

              if (_.options.vertical === false) {
                  targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
              } else {
                  targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
              }

              if (_.options.variableWidth === true) {

                  if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                      targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                  } else {
                      targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
                  }

                  if (_.options.rtl === true) {
                      if (targetSlide[0]) {
                          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                      } else {
                          targetLeft =  0;
                      }
                  } else {
                      targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                  }

                  if (_.options.centerMode === true) {
                      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                      } else {
                          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                      }

                      if (_.options.rtl === true) {
                          if (targetSlide[0]) {
                              targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                          } else {
                              targetLeft =  0;
                          }
                      } else {
                          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                      }

                      targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
                  }
              }

              return targetLeft;

          };

          Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

              var _ = this;

              return _.options[option];

          };

          Slick.prototype.getNavigableIndexes = function() {

              var _ = this,
                  breakPoint = 0,
                  counter = 0,
                  indexes = [],
                  max;

              if (_.options.infinite === false) {
                  max = _.slideCount;
              } else {
                  breakPoint = _.options.slidesToScroll * -1;
                  counter = _.options.slidesToScroll * -1;
                  max = _.slideCount * 2;
              }

              while (breakPoint < max) {
                  indexes.push(breakPoint);
                  breakPoint = counter + _.options.slidesToScroll;
                  counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
              }

              return indexes;

          };

          Slick.prototype.getSlick = function() {

              return this;

          };

          Slick.prototype.getSlideCount = function() {

              var _ = this,
                  slidesTraversed, swipedSlide, centerOffset;

              centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

              if (_.options.swipeToSlide === true) {
                  _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                      if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                          swipedSlide = slide;
                          return false;
                      }
                  });

                  slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

                  return slidesTraversed;

              } else {
                  return _.options.slidesToScroll;
              }

          };

          Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

              var _ = this;

              _.changeSlide({
                  data: {
                      message: 'index',
                      index: parseInt(slide)
                  }
              }, dontAnimate);

          };

          Slick.prototype.init = function(creation) {

              var _ = this;

              if (!$(_.$slider).hasClass('slick-initialized')) {

                  $(_.$slider).addClass('slick-initialized');

                  _.buildRows();
                  _.buildOut();
                  _.setProps();
                  _.startLoad();
                  _.loadSlider();
                  _.initializeEvents();
                  _.updateArrows();
                  _.updateDots();
                  _.checkResponsive(true);
                  _.focusHandler();

              }

              if (creation) {
                  _.$slider.trigger('init', [_]);
              }

              if (_.options.accessibility === true) {
                  _.initADA();
              }

              if ( _.options.autoplay ) {

                  _.paused = false;
                  _.autoPlay();

              }

          };

          Slick.prototype.initADA = function() {
              var _ = this,
                      numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                      tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                          return (val >= 0) && (val < _.slideCount);
                      });

              _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
                  'aria-hidden': 'true',
                  'tabindex': '-1'
              }).find('a, input, button, select').attr({
                  'tabindex': '-1'
              });

              if (_.$dots !== null) {
                  _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                      var slideControlIndex = tabControlIndexes.indexOf(i);

                      $(this).attr({
                          'role': 'tabpanel',
                          'id': 'slick-slide' + _.instanceUid + i,
                          'tabindex': -1
                      });

                      if (slideControlIndex !== -1) {
                         var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                         if ($('#' + ariaButtonControl).length) {
                           $(this).attr({
                               'aria-describedby': ariaButtonControl
                           });
                         }
                      }
                  });

                  _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                      var mappedSlideIndex = tabControlIndexes[i];

                      $(this).attr({
                          'role': 'presentation'
                      });

                      $(this).find('button').first().attr({
                          'role': 'tab',
                          'id': 'slick-slide-control' + _.instanceUid + i,
                          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                          'aria-label': (i + 1) + ' of ' + numDotGroups,
                          'aria-selected': null,
                          'tabindex': '-1'
                      });

                  }).eq(_.currentSlide).find('button').attr({
                      'aria-selected': 'true',
                      'tabindex': '0'
                  }).end();
              }

              for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
                if (_.options.focusOnChange) {
                  _.$slides.eq(i).attr({'tabindex': '0'});
                } else {
                  _.$slides.eq(i).removeAttr('tabindex');
                }
              }

              _.activateADA();

          };

          Slick.prototype.initArrowEvents = function() {

              var _ = this;

              if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                  _.$prevArrow
                     .off('click.slick')
                     .on('click.slick', {
                          message: 'previous'
                     }, _.changeSlide);
                  _.$nextArrow
                     .off('click.slick')
                     .on('click.slick', {
                          message: 'next'
                     }, _.changeSlide);

                  if (_.options.accessibility === true) {
                      _.$prevArrow.on('keydown.slick', _.keyHandler);
                      _.$nextArrow.on('keydown.slick', _.keyHandler);
                  }
              }

          };

          Slick.prototype.initDotEvents = function() {

              var _ = this;

              if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                  $('li', _.$dots).on('click.slick', {
                      message: 'index'
                  }, _.changeSlide);

                  if (_.options.accessibility === true) {
                      _.$dots.on('keydown.slick', _.keyHandler);
                  }
              }

              if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

                  $('li', _.$dots)
                      .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                      .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

              }

          };

          Slick.prototype.initSlideEvents = function() {

              var _ = this;

              if ( _.options.pauseOnHover ) {

                  _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
                  _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

              }

          };

          Slick.prototype.initializeEvents = function() {

              var _ = this;

              _.initArrowEvents();

              _.initDotEvents();
              _.initSlideEvents();

              _.$list.on('touchstart.slick mousedown.slick', {
                  action: 'start'
              }, _.swipeHandler);
              _.$list.on('touchmove.slick mousemove.slick', {
                  action: 'move'
              }, _.swipeHandler);
              _.$list.on('touchend.slick mouseup.slick', {
                  action: 'end'
              }, _.swipeHandler);
              _.$list.on('touchcancel.slick mouseleave.slick', {
                  action: 'end'
              }, _.swipeHandler);

              _.$list.on('click.slick', _.clickHandler);

              $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

              if (_.options.accessibility === true) {
                  _.$list.on('keydown.slick', _.keyHandler);
              }

              if (_.options.focusOnSelect === true) {
                  $(_.$slideTrack).children().on('click.slick', _.selectHandler);
              }

              $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

              $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

              $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

              $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
              $(_.setPosition);

          };

          Slick.prototype.initUI = function() {

              var _ = this;

              if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

                  _.$prevArrow.show();
                  _.$nextArrow.show();

              }

              if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

                  _.$dots.show();

              }

          };

          Slick.prototype.keyHandler = function(event) {

              var _ = this;
               //Dont slide if the cursor is inside the form fields and arrow keys are pressed
              if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
                  if (event.keyCode === 37 && _.options.accessibility === true) {
                      _.changeSlide({
                          data: {
                              message: _.options.rtl === true ? 'next' :  'previous'
                          }
                      });
                  } else if (event.keyCode === 39 && _.options.accessibility === true) {
                      _.changeSlide({
                          data: {
                              message: _.options.rtl === true ? 'previous' : 'next'
                          }
                      });
                  }
              }

          };

          Slick.prototype.lazyLoad = function() {

              var _ = this,
                  loadRange, cloneRange, rangeStart, rangeEnd;

              function loadImages(imagesScope) {

                  $('img[data-lazy]', imagesScope).each(function() {

                      var image = $(this),
                          imageSource = $(this).attr('data-lazy'),
                          imageSrcSet = $(this).attr('data-srcset'),
                          imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                          imageToLoad = document.createElement('img');

                      imageToLoad.onload = function() {

                          image
                              .animate({ opacity: 0 }, 100, function() {

                                  if (imageSrcSet) {
                                      image
                                          .attr('srcset', imageSrcSet );

                                      if (imageSizes) {
                                          image
                                              .attr('sizes', imageSizes );
                                      }
                                  }

                                  image
                                      .attr('src', imageSource)
                                      .animate({ opacity: 1 }, 200, function() {
                                          image
                                              .removeAttr('data-lazy data-srcset data-sizes')
                                              .removeClass('slick-loading');
                                      });
                                  _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                              });

                      };

                      imageToLoad.onerror = function() {

                          image
                              .removeAttr( 'data-lazy' )
                              .removeClass( 'slick-loading' )
                              .addClass( 'slick-lazyload-error' );

                          _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                      };

                      imageToLoad.src = imageSource;

                  });

              }

              if (_.options.centerMode === true) {
                  if (_.options.infinite === true) {
                      rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                      rangeEnd = rangeStart + _.options.slidesToShow + 2;
                  } else {
                      rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                      rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
                  }
              } else {
                  rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
                  rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
                  if (_.options.fade === true) {
                      if (rangeStart > 0) rangeStart--;
                      if (rangeEnd <= _.slideCount) rangeEnd++;
                  }
              }

              loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

              if (_.options.lazyLoad === 'anticipated') {
                  var prevSlide = rangeStart - 1,
                      nextSlide = rangeEnd,
                      $slides = _.$slider.find('.slick-slide');

                  for (var i = 0; i < _.options.slidesToScroll; i++) {
                      if (prevSlide < 0) prevSlide = _.slideCount - 1;
                      loadRange = loadRange.add($slides.eq(prevSlide));
                      loadRange = loadRange.add($slides.eq(nextSlide));
                      prevSlide--;
                      nextSlide++;
                  }
              }

              loadImages(loadRange);

              if (_.slideCount <= _.options.slidesToShow) {
                  cloneRange = _.$slider.find('.slick-slide');
                  loadImages(cloneRange);
              } else
              if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                  cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
                  loadImages(cloneRange);
              } else if (_.currentSlide === 0) {
                  cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
                  loadImages(cloneRange);
              }

          };

          Slick.prototype.loadSlider = function() {

              var _ = this;

              _.setPosition();

              _.$slideTrack.css({
                  opacity: 1
              });

              _.$slider.removeClass('slick-loading');

              _.initUI();

              if (_.options.lazyLoad === 'progressive') {
                  _.progressiveLazyLoad();
              }

          };

          Slick.prototype.next = Slick.prototype.slickNext = function() {

              var _ = this;

              _.changeSlide({
                  data: {
                      message: 'next'
                  }
              });

          };

          Slick.prototype.orientationChange = function() {

              var _ = this;

              _.checkResponsive();
              _.setPosition();

          };

          Slick.prototype.pause = Slick.prototype.slickPause = function() {

              var _ = this;

              _.autoPlayClear();
              _.paused = true;

          };

          Slick.prototype.play = Slick.prototype.slickPlay = function() {

              var _ = this;

              _.autoPlay();
              _.options.autoplay = true;
              _.paused = false;
              _.focussed = false;
              _.interrupted = false;

          };

          Slick.prototype.postSlide = function(index) {

              var _ = this;

              if( !_.unslicked ) {

                  _.$slider.trigger('afterChange', [_, index]);

                  _.animating = false;

                  if (_.slideCount > _.options.slidesToShow) {
                      _.setPosition();
                  }

                  _.swipeLeft = null;

                  if ( _.options.autoplay ) {
                      _.autoPlay();
                  }

                  if (_.options.accessibility === true) {
                      _.initADA();

                      if (_.options.focusOnChange) {
                          var $currentSlide = $(_.$slides.get(_.currentSlide));
                          $currentSlide.attr('tabindex', 0).focus();
                      }
                  }

              }

          };

          Slick.prototype.prev = Slick.prototype.slickPrev = function() {

              var _ = this;

              _.changeSlide({
                  data: {
                      message: 'previous'
                  }
              });

          };

          Slick.prototype.preventDefault = function(event) {

              event.preventDefault();

          };

          Slick.prototype.progressiveLazyLoad = function( tryCount ) {

              tryCount = tryCount || 1;

              var _ = this,
                  $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
                  image,
                  imageSource,
                  imageSrcSet,
                  imageSizes,
                  imageToLoad;

              if ( $imgsToLoad.length ) {

                  image = $imgsToLoad.first();
                  imageSource = image.attr('data-lazy');
                  imageSrcSet = image.attr('data-srcset');
                  imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
                  imageToLoad = document.createElement('img');

                  imageToLoad.onload = function() {

                      if (imageSrcSet) {
                          image
                              .attr('srcset', imageSrcSet );

                          if (imageSizes) {
                              image
                                  .attr('sizes', imageSizes );
                          }
                      }

                      image
                          .attr( 'src', imageSource )
                          .removeAttr('data-lazy data-srcset data-sizes')
                          .removeClass('slick-loading');

                      if ( _.options.adaptiveHeight === true ) {
                          _.setPosition();
                      }

                      _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                      _.progressiveLazyLoad();

                  };

                  imageToLoad.onerror = function() {

                      if ( tryCount < 3 ) {

                          /**
                           * try to load the image 3 times,
                           * leave a slight delay so we don't get
                           * servers blocking the request.
                           */
                          setTimeout( function() {
                              _.progressiveLazyLoad( tryCount + 1 );
                          }, 500 );

                      } else {

                          image
                              .removeAttr( 'data-lazy' )
                              .removeClass( 'slick-loading' )
                              .addClass( 'slick-lazyload-error' );

                          _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                          _.progressiveLazyLoad();

                      }

                  };

                  imageToLoad.src = imageSource;

              } else {

                  _.$slider.trigger('allImagesLoaded', [ _ ]);

              }

          };

          Slick.prototype.refresh = function( initializing ) {

              var _ = this, currentSlide, lastVisibleIndex;

              lastVisibleIndex = _.slideCount - _.options.slidesToShow;

              // in non-infinite sliders, we don't want to go past the
              // last visible index.
              if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
                  _.currentSlide = lastVisibleIndex;
              }

              // if less slides than to show, go to start.
              if ( _.slideCount <= _.options.slidesToShow ) {
                  _.currentSlide = 0;

              }

              currentSlide = _.currentSlide;

              _.destroy(true);

              $.extend(_, _.initials, { currentSlide: currentSlide });

              _.init();

              if( !initializing ) {

                  _.changeSlide({
                      data: {
                          message: 'index',
                          index: currentSlide
                      }
                  }, false);

              }

          };

          Slick.prototype.registerBreakpoints = function() {

              var _ = this, breakpoint, currentBreakpoint, l,
                  responsiveSettings = _.options.responsive || null;

              if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

                  _.respondTo = _.options.respondTo || 'window';

                  for ( breakpoint in responsiveSettings ) {

                      l = _.breakpoints.length-1;

                      if (responsiveSettings.hasOwnProperty(breakpoint)) {
                          currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                          // loop through the breakpoints and cut out any existing
                          // ones with the same breakpoint number, we don't want dupes.
                          while( l >= 0 ) {
                              if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                                  _.breakpoints.splice(l,1);
                              }
                              l--;
                          }

                          _.breakpoints.push(currentBreakpoint);
                          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                      }

                  }

                  _.breakpoints.sort(function(a, b) {
                      return ( _.options.mobileFirst ) ? a-b : b-a;
                  });

              }

          };

          Slick.prototype.reinit = function() {

              var _ = this;

              _.$slides =
                  _.$slideTrack
                      .children(_.options.slide)
                      .addClass('slick-slide');

              _.slideCount = _.$slides.length;

              if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
                  _.currentSlide = _.currentSlide - _.options.slidesToScroll;
              }

              if (_.slideCount <= _.options.slidesToShow) {
                  _.currentSlide = 0;
              }

              _.registerBreakpoints();

              _.setProps();
              _.setupInfinite();
              _.buildArrows();
              _.updateArrows();
              _.initArrowEvents();
              _.buildDots();
              _.updateDots();
              _.initDotEvents();
              _.cleanUpSlideEvents();
              _.initSlideEvents();

              _.checkResponsive(false, true);

              if (_.options.focusOnSelect === true) {
                  $(_.$slideTrack).children().on('click.slick', _.selectHandler);
              }

              _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

              _.setPosition();
              _.focusHandler();

              _.paused = !_.options.autoplay;
              _.autoPlay();

              _.$slider.trigger('reInit', [_]);

          };

          Slick.prototype.resize = function() {

              var _ = this;

              if ($(window).width() !== _.windowWidth) {
                  clearTimeout(_.windowDelay);
                  _.windowDelay = window.setTimeout(function() {
                      _.windowWidth = $(window).width();
                      _.checkResponsive();
                      if( !_.unslicked ) { _.setPosition(); }
                  }, 50);
              }
          };

          Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

              var _ = this;

              if (typeof(index) === 'boolean') {
                  removeBefore = index;
                  index = removeBefore === true ? 0 : _.slideCount - 1;
              } else {
                  index = removeBefore === true ? --index : index;
              }

              if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
                  return false;
              }

              _.unload();

              if (removeAll === true) {
                  _.$slideTrack.children().remove();
              } else {
                  _.$slideTrack.children(this.options.slide).eq(index).remove();
              }

              _.$slides = _.$slideTrack.children(this.options.slide);

              _.$slideTrack.children(this.options.slide).detach();

              _.$slideTrack.append(_.$slides);

              _.$slidesCache = _.$slides;

              _.reinit();

          };

          Slick.prototype.setCSS = function(position) {

              var _ = this,
                  positionProps = {},
                  x, y;

              if (_.options.rtl === true) {
                  position = -position;
              }
              x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
              y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

              positionProps[_.positionProp] = position;

              if (_.transformsEnabled === false) {
                  _.$slideTrack.css(positionProps);
              } else {
                  positionProps = {};
                  if (_.cssTransitions === false) {
                      positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                      _.$slideTrack.css(positionProps);
                  } else {
                      positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                      _.$slideTrack.css(positionProps);
                  }
              }

          };

          Slick.prototype.setDimensions = function() {

              var _ = this;

              if (_.options.vertical === false) {
                  if (_.options.centerMode === true) {
                      _.$list.css({
                          padding: ('0px ' + _.options.centerPadding)
                      });
                  }
              } else {
                  _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
                  if (_.options.centerMode === true) {
                      _.$list.css({
                          padding: (_.options.centerPadding + ' 0px')
                      });
                  }
              }

              _.listWidth = _.$list.width();
              _.listHeight = _.$list.height();


              if (_.options.vertical === false && _.options.variableWidth === false) {
                  _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
                  _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

              } else if (_.options.variableWidth === true) {
                  _.$slideTrack.width(5000 * _.slideCount);
              } else {
                  _.slideWidth = Math.ceil(_.listWidth);
                  _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
              }

              var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
              if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

          };

          Slick.prototype.setFade = function() {

              var _ = this,
                  targetLeft;

              _.$slides.each(function(index, element) {
                  targetLeft = (_.slideWidth * index) * -1;
                  if (_.options.rtl === true) {
                      $(element).css({
                          position: 'relative',
                          right: targetLeft,
                          top: 0,
                          zIndex: _.options.zIndex - 2,
                          opacity: 0
                      });
                  } else {
                      $(element).css({
                          position: 'relative',
                          left: targetLeft,
                          top: 0,
                          zIndex: _.options.zIndex - 2,
                          opacity: 0
                      });
                  }
              });

              _.$slides.eq(_.currentSlide).css({
                  zIndex: _.options.zIndex - 1,
                  opacity: 1
              });

          };

          Slick.prototype.setHeight = function() {

              var _ = this;

              if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                  var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                  _.$list.css('height', targetHeight);
              }

          };

          Slick.prototype.setOption =
          Slick.prototype.slickSetOption = function() {

              /**
               * accepts arguments in format of:
               *
               *  - for changing a single option's value:
               *     .slick("setOption", option, value, refresh )
               *
               *  - for changing a set of responsive options:
               *     .slick("setOption", 'responsive', [{}, ...], refresh )
               *
               *  - for updating multiple values at once (not responsive)
               *     .slick("setOption", { 'option': value, ... }, refresh )
               */

              var _ = this, l, item, option, value, refresh = false, type;

              if( $.type( arguments[0] ) === 'object' ) {

                  option =  arguments[0];
                  refresh = arguments[1];
                  type = 'multiple';

              } else if ( $.type( arguments[0] ) === 'string' ) {

                  option =  arguments[0];
                  value = arguments[1];
                  refresh = arguments[2];

                  if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                      type = 'responsive';

                  } else if ( typeof arguments[1] !== 'undefined' ) {

                      type = 'single';

                  }

              }

              if ( type === 'single' ) {

                  _.options[option] = value;


              } else if ( type === 'multiple' ) {

                  $.each( option , function( opt, val ) {

                      _.options[opt] = val;

                  });


              } else if ( type === 'responsive' ) {

                  for ( item in value ) {

                      if( $.type( _.options.responsive ) !== 'array' ) {

                          _.options.responsive = [ value[item] ];

                      } else {

                          l = _.options.responsive.length-1;

                          // loop through the responsive object and splice out duplicates.
                          while( l >= 0 ) {

                              if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                                  _.options.responsive.splice(l,1);

                              }

                              l--;

                          }

                          _.options.responsive.push( value[item] );

                      }

                  }

              }

              if ( refresh ) {

                  _.unload();
                  _.reinit();

              }

          };

          Slick.prototype.setPosition = function() {

              var _ = this;

              _.setDimensions();

              _.setHeight();

              if (_.options.fade === false) {
                  _.setCSS(_.getLeft(_.currentSlide));
              } else {
                  _.setFade();
              }

              _.$slider.trigger('setPosition', [_]);

          };

          Slick.prototype.setProps = function() {

              var _ = this,
                  bodyStyle = document.body.style;

              _.positionProp = _.options.vertical === true ? 'top' : 'left';

              if (_.positionProp === 'top') {
                  _.$slider.addClass('slick-vertical');
              } else {
                  _.$slider.removeClass('slick-vertical');
              }

              if (bodyStyle.WebkitTransition !== undefined ||
                  bodyStyle.MozTransition !== undefined ||
                  bodyStyle.msTransition !== undefined) {
                  if (_.options.useCSS === true) {
                      _.cssTransitions = true;
                  }
              }

              if ( _.options.fade ) {
                  if ( typeof _.options.zIndex === 'number' ) {
                      if( _.options.zIndex < 3 ) {
                          _.options.zIndex = 3;
                      }
                  } else {
                      _.options.zIndex = _.defaults.zIndex;
                  }
              }

              if (bodyStyle.OTransform !== undefined) {
                  _.animType = 'OTransform';
                  _.transformType = '-o-transform';
                  _.transitionType = 'OTransition';
                  if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
              }
              if (bodyStyle.MozTransform !== undefined) {
                  _.animType = 'MozTransform';
                  _.transformType = '-moz-transform';
                  _.transitionType = 'MozTransition';
                  if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
              }
              if (bodyStyle.webkitTransform !== undefined) {
                  _.animType = 'webkitTransform';
                  _.transformType = '-webkit-transform';
                  _.transitionType = 'webkitTransition';
                  if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
              }
              if (bodyStyle.msTransform !== undefined) {
                  _.animType = 'msTransform';
                  _.transformType = '-ms-transform';
                  _.transitionType = 'msTransition';
                  if (bodyStyle.msTransform === undefined) _.animType = false;
              }
              if (bodyStyle.transform !== undefined && _.animType !== false) {
                  _.animType = 'transform';
                  _.transformType = 'transform';
                  _.transitionType = 'transition';
              }
              _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
          };


          Slick.prototype.setSlideClasses = function(index) {

              var _ = this,
                  centerOffset, allSlides, indexOffset, remainder;

              allSlides = _.$slider
                  .find('.slick-slide')
                  .removeClass('slick-active slick-center slick-current')
                  .attr('aria-hidden', 'true');

              _.$slides
                  .eq(index)
                  .addClass('slick-current');

              if (_.options.centerMode === true) {

                  var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

                  centerOffset = Math.floor(_.options.slidesToShow / 2);

                  if (_.options.infinite === true) {

                      if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                          _.$slides
                              .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                              .addClass('slick-active')
                              .attr('aria-hidden', 'false');

                      } else {

                          indexOffset = _.options.slidesToShow + index;
                          allSlides
                              .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                              .addClass('slick-active')
                              .attr('aria-hidden', 'false');

                      }

                      if (index === 0) {

                          allSlides
                              .eq(allSlides.length - 1 - _.options.slidesToShow)
                              .addClass('slick-center');

                      } else if (index === _.slideCount - 1) {

                          allSlides
                              .eq(_.options.slidesToShow)
                              .addClass('slick-center');

                      }

                  }

                  _.$slides
                      .eq(index)
                      .addClass('slick-center');

              } else {

                  if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                      _.$slides
                          .slice(index, index + _.options.slidesToShow)
                          .addClass('slick-active')
                          .attr('aria-hidden', 'false');

                  } else if (allSlides.length <= _.options.slidesToShow) {

                      allSlides
                          .addClass('slick-active')
                          .attr('aria-hidden', 'false');

                  } else {

                      remainder = _.slideCount % _.options.slidesToShow;
                      indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                      if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                          allSlides
                              .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                              .addClass('slick-active')
                              .attr('aria-hidden', 'false');

                      } else {

                          allSlides
                              .slice(indexOffset, indexOffset + _.options.slidesToShow)
                              .addClass('slick-active')
                              .attr('aria-hidden', 'false');

                      }

                  }

              }

              if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
                  _.lazyLoad();
              }
          };

          Slick.prototype.setupInfinite = function() {

              var _ = this,
                  i, slideIndex, infiniteCount;

              if (_.options.fade === true) {
                  _.options.centerMode = false;
              }

              if (_.options.infinite === true && _.options.fade === false) {

                  slideIndex = null;

                  if (_.slideCount > _.options.slidesToShow) {

                      if (_.options.centerMode === true) {
                          infiniteCount = _.options.slidesToShow + 1;
                      } else {
                          infiniteCount = _.options.slidesToShow;
                      }

                      for (i = _.slideCount; i > (_.slideCount -
                              infiniteCount); i -= 1) {
                          slideIndex = i - 1;
                          $(_.$slides[slideIndex]).clone(true).attr('id', '')
                              .attr('data-slick-index', slideIndex - _.slideCount)
                              .prependTo(_.$slideTrack).addClass('slick-cloned');
                      }
                      for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                          slideIndex = i;
                          $(_.$slides[slideIndex]).clone(true).attr('id', '')
                              .attr('data-slick-index', slideIndex + _.slideCount)
                              .appendTo(_.$slideTrack).addClass('slick-cloned');
                      }
                      _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                          $(this).attr('id', '');
                      });

                  }

              }

          };

          Slick.prototype.interrupt = function( toggle ) {

              var _ = this;

              if( !toggle ) {
                  _.autoPlay();
              }
              _.interrupted = toggle;

          };

          Slick.prototype.selectHandler = function(event) {

              var _ = this;

              var targetElement =
                  $(event.target).is('.slick-slide') ?
                      $(event.target) :
                      $(event.target).parents('.slick-slide');

              var index = parseInt(targetElement.attr('data-slick-index'));

              if (!index) index = 0;

              if (_.slideCount <= _.options.slidesToShow) {

                  _.slideHandler(index, false, true);
                  return;

              }

              _.slideHandler(index);

          };

          Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

              var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
                  _ = this, navTarget;

              sync = sync || false;

              if (_.animating === true && _.options.waitForAnimate === true) {
                  return;
              }

              if (_.options.fade === true && _.currentSlide === index) {
                  return;
              }

              if (sync === false) {
                  _.asNavFor(index);
              }

              targetSlide = index;
              targetLeft = _.getLeft(targetSlide);
              slideLeft = _.getLeft(_.currentSlide);

              _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

              if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
                  if (_.options.fade === false) {
                      targetSlide = _.currentSlide;
                      if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                          _.animateSlide(slideLeft, function() {
                              _.postSlide(targetSlide);
                          });
                      } else {
                          _.postSlide(targetSlide);
                      }
                  }
                  return;
              } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
                  if (_.options.fade === false) {
                      targetSlide = _.currentSlide;
                      if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                          _.animateSlide(slideLeft, function() {
                              _.postSlide(targetSlide);
                          });
                      } else {
                          _.postSlide(targetSlide);
                      }
                  }
                  return;
              }

              if ( _.options.autoplay ) {
                  clearInterval(_.autoPlayTimer);
              }

              if (targetSlide < 0) {
                  if (_.slideCount % _.options.slidesToScroll !== 0) {
                      animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
                  } else {
                      animSlide = _.slideCount + targetSlide;
                  }
              } else if (targetSlide >= _.slideCount) {
                  if (_.slideCount % _.options.slidesToScroll !== 0) {
                      animSlide = 0;
                  } else {
                      animSlide = targetSlide - _.slideCount;
                  }
              } else {
                  animSlide = targetSlide;
              }

              _.animating = true;

              _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

              oldSlide = _.currentSlide;
              _.currentSlide = animSlide;

              _.setSlideClasses(_.currentSlide);

              if ( _.options.asNavFor ) {

                  navTarget = _.getNavTarget();
                  navTarget = navTarget.slick('getSlick');

                  if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                      navTarget.setSlideClasses(_.currentSlide);
                  }

              }

              _.updateDots();
              _.updateArrows();

              if (_.options.fade === true) {
                  if (dontAnimate !== true) {

                      _.fadeSlideOut(oldSlide);

                      _.fadeSlide(animSlide, function() {
                          _.postSlide(animSlide);
                      });

                  } else {
                      _.postSlide(animSlide);
                  }
                  _.animateHeight();
                  return;
              }

              if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                  _.animateSlide(targetLeft, function() {
                      _.postSlide(animSlide);
                  });
              } else {
                  _.postSlide(animSlide);
              }

          };

          Slick.prototype.startLoad = function() {

              var _ = this;

              if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

                  _.$prevArrow.hide();
                  _.$nextArrow.hide();

              }

              if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

                  _.$dots.hide();

              }

              _.$slider.addClass('slick-loading');

          };

          Slick.prototype.swipeDirection = function() {

              var xDist, yDist, r, swipeAngle, _ = this;

              xDist = _.touchObject.startX - _.touchObject.curX;
              yDist = _.touchObject.startY - _.touchObject.curY;
              r = Math.atan2(yDist, xDist);

              swipeAngle = Math.round(r * 180 / Math.PI);
              if (swipeAngle < 0) {
                  swipeAngle = 360 - Math.abs(swipeAngle);
              }

              if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
                  return (_.options.rtl === false ? 'left' : 'right');
              }
              if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
                  return (_.options.rtl === false ? 'left' : 'right');
              }
              if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
                  return (_.options.rtl === false ? 'right' : 'left');
              }
              if (_.options.verticalSwiping === true) {
                  if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                      return 'down';
                  } else {
                      return 'up';
                  }
              }

              return 'vertical';

          };

          Slick.prototype.swipeEnd = function(event) {

              var _ = this,
                  slideCount,
                  direction;

              _.dragging = false;
              _.swiping = false;

              if (_.scrolling) {
                  _.scrolling = false;
                  return false;
              }

              _.interrupted = false;
              _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

              if ( _.touchObject.curX === undefined ) {
                  return false;
              }

              if ( _.touchObject.edgeHit === true ) {
                  _.$slider.trigger('edge', [_, _.swipeDirection() ]);
              }

              if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

                  direction = _.swipeDirection();

                  switch ( direction ) {

                      case 'left':
                      case 'down':

                          slideCount =
                              _.options.swipeToSlide ?
                                  _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                                  _.currentSlide + _.getSlideCount();

                          _.currentDirection = 0;

                          break;

                      case 'right':
                      case 'up':

                          slideCount =
                              _.options.swipeToSlide ?
                                  _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                                  _.currentSlide - _.getSlideCount();

                          _.currentDirection = 1;

                          break;

                      default:


                  }

                  if( direction != 'vertical' ) {

                      _.slideHandler( slideCount );
                      _.touchObject = {};
                      _.$slider.trigger('swipe', [_, direction ]);

                  }

              } else {

                  if ( _.touchObject.startX !== _.touchObject.curX ) {

                      _.slideHandler( _.currentSlide );
                      _.touchObject = {};

                  }

              }

          };

          Slick.prototype.swipeHandler = function(event) {

              var _ = this;

              if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
                  return;
              } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
                  return;
              }

              _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
                  event.originalEvent.touches.length : 1;

              _.touchObject.minSwipe = _.listWidth / _.options
                  .touchThreshold;

              if (_.options.verticalSwiping === true) {
                  _.touchObject.minSwipe = _.listHeight / _.options
                      .touchThreshold;
              }

              switch (event.data.action) {

                  case 'start':
                      _.swipeStart(event);
                      break;

                  case 'move':
                      _.swipeMove(event);
                      break;

                  case 'end':
                      _.swipeEnd(event);
                      break;

              }

          };

          Slick.prototype.swipeMove = function(event) {

              var _ = this,
                  edgeWasHit = false,
                  curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

              touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

              if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
                  return false;
              }

              curLeft = _.getLeft(_.currentSlide);

              _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
              _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

              _.touchObject.swipeLength = Math.round(Math.sqrt(
                  Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

              verticalSwipeLength = Math.round(Math.sqrt(
                  Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

              if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
                  _.scrolling = true;
                  return false;
              }

              if (_.options.verticalSwiping === true) {
                  _.touchObject.swipeLength = verticalSwipeLength;
              }

              swipeDirection = _.swipeDirection();

              if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
                  _.swiping = true;
                  event.preventDefault();
              }

              positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
              if (_.options.verticalSwiping === true) {
                  positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
              }


              swipeLength = _.touchObject.swipeLength;

              _.touchObject.edgeHit = false;

              if (_.options.infinite === false) {
                  if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                      swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                      _.touchObject.edgeHit = true;
                  }
              }

              if (_.options.vertical === false) {
                  _.swipeLeft = curLeft + swipeLength * positionOffset;
              } else {
                  _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
              }
              if (_.options.verticalSwiping === true) {
                  _.swipeLeft = curLeft + swipeLength * positionOffset;
              }

              if (_.options.fade === true || _.options.touchMove === false) {
                  return false;
              }

              if (_.animating === true) {
                  _.swipeLeft = null;
                  return false;
              }

              _.setCSS(_.swipeLeft);

          };

          Slick.prototype.swipeStart = function(event) {

              var _ = this,
                  touches;

              _.interrupted = true;

              if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
                  _.touchObject = {};
                  return false;
              }

              if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
                  touches = event.originalEvent.touches[0];
              }

              _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
              _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

              _.dragging = true;

          };

          Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

              var _ = this;

              if (_.$slidesCache !== null) {

                  _.unload();

                  _.$slideTrack.children(this.options.slide).detach();

                  _.$slidesCache.appendTo(_.$slideTrack);

                  _.reinit();

              }

          };

          Slick.prototype.unload = function() {

              var _ = this;

              $('.slick-cloned', _.$slider).remove();

              if (_.$dots) {
                  _.$dots.remove();
              }

              if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
                  _.$prevArrow.remove();
              }

              if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
                  _.$nextArrow.remove();
              }

              _.$slides
                  .removeClass('slick-slide slick-active slick-visible slick-current')
                  .attr('aria-hidden', 'true')
                  .css('width', '');

          };

          Slick.prototype.unslick = function(fromBreakpoint) {

              var _ = this;
              _.$slider.trigger('unslick', [_, fromBreakpoint]);
              _.destroy();

          };

          Slick.prototype.updateArrows = function() {

              var _ = this,
                  centerOffset;

              centerOffset = Math.floor(_.options.slidesToShow / 2);

              if ( _.options.arrows === true &&
                  _.slideCount > _.options.slidesToShow &&
                  !_.options.infinite ) {

                  _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                  _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

                  if (_.currentSlide === 0) {

                      _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

                  } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                      _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

                  } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                      _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

                  }

              }

          };

          Slick.prototype.updateDots = function() {

              var _ = this;

              if (_.$dots !== null) {

                  _.$dots
                      .find('li')
                          .removeClass('slick-active')
                          .end();

                  _.$dots
                      .find('li')
                      .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                      .addClass('slick-active');

              }

          };

          Slick.prototype.visibility = function() {

              var _ = this;

              if ( _.options.autoplay ) {

                  if ( document[_.hidden] ) {

                      _.interrupted = true;

                  } else {

                      _.interrupted = false;

                  }

              }

          };

          $.fn.slick = function() {
              var _ = this,
                  opt = arguments[0],
                  args = Array.prototype.slice.call(arguments, 1),
                  l = _.length,
                  i,
                  ret;
              for (i = 0; i < l; i++) {
                  if (typeof opt == 'object' || typeof opt == 'undefined')
                      _[i].slick = new Slick(_[i], opt);
                  else
                      ret = _[i].slick[opt].apply(_[i].slick, args);
                  if (typeof ret != 'undefined') return ret;
              }
              return _;
          };

      }));
      function sticky_relocate()
      {
      	var window_top = $(window).scrollTop();

      	if ($('#header-sticky-anchor').length)
      	{
      		var div_top = $('#header-sticky-anchor').offset().top;
      		if (window_top > div_top) {
      			$('#header-sticky').addClass('header-fixed');
      			$('#header-sticky-anchor').height($('#header-sticky').outerHeight());
      		} else {
      			$('#header-sticky').removeClass('header-fixed');
      			$('#header-sticky-anchor').height(0);
      		}
      	}
      }




      $(document).ready(function(){

      	$('.ga4_top_nav_clk').on('click', function(){
      		dataLayer.push({
      			'event': 'top_navigation_click',
      			'link_url': $(this).attr('href'),
      			'link_text': $(this).text(),
      		  });
      	  });


      	  $('.ga4_top_nav_img_clk').on('click', function(){
      		dataLayer.push({
      			'event': 'top_navigation_click',
      			'link_url': $(this).attr('href'),
      			'link_text': $(this).text(),
      		  });
      	  });

      	$('.top-text-content').removeClass('d-none');
      	$('#promotion-text').slick({
      		dots: false,
      		infinite: true,
      		speed: 1000,
      		arrows: false,
      		slidesToShow: 1,
      		slidesToScroll: 1,
      		autoplay: true,
      		autoplaySpeed: 5000,
      		initialSlide: 0,
      		fade: false
      	});

      	$(".panel-hd").click(function(){
      		$(this).toggleClass("active");
      		$(this).next('.panel-details').toggleClass('d-none');
      	});


      	$(".panel-link-hd").click(function(){
      		$(this).toggleClass("active");
      		$(this).next('.panel-link-list').toggleClass('d-none');
      	});

      	$(".con-faq-que").click(function(){
      		$(this).toggleClass("active");
      		//$('.con-faq-ans').addClass("d-none");
      		$(this).next('.con-faq-ans').toggleClass("d-none");
      	});

      	$("#con_icon").click(function(){
      		if ($('.dd-contact').hasClass("active"))
      		{
      			$(".dd-contact").removeClass('active');
      		}
      		else
      		{
      			$(".sidepanel > .close").trigger('click');
      			$(".dropdown-menu-login").slideUp('slow');
      			$(".dd-contact").addClass('active');
      			$(".dd-store").removeClass('active');
      		}
      	});

      	$(".sub-nav, .sticky-search").hover(function(){
      		$(".dd-contact").removeClass('active');
      	});

      	$(".sub-nav, .sticky-search").click(function(){
      		$(".dd-contact").removeClass('active');
      	});

      });

      $(document).ready(function(){

      	$(function() {
      	    $(window).scroll(sticky_relocate);
      	    sticky_relocate();
      	});

      	// SidePanel Sliding Effect
      	$(".header-usercart .cart-link").click(function() {
      		if($('.dropdown-menu-login').css('display') == 'block'){ loginpopup(); }
      		$(".dropdown-menu-login").slideUp('slow');
      		$('#cart-open').removeClass('d-none');
      		$('#cart-open').animate({right: '0px'}, {
      			complete: function() { $('#cart-open').focus(); }
      		});
      		$(".dd-contact").removeClass('active');
      		$('body').addClass('slide-open');
      	});

      	$(".slide-open").click(function() {
      		$(".dropdown-menu-login").slideUp('slow');
      		$(".sidepanel > .close").trigger('click');
      		$(".dd-contact").removeClass('active');
      		$('body').removeClass('slide-open');


      	});

      	$(".sidepanel > .close").click(function() {
      		$('#cart-open').animate({right: '-320px'}, {
      			complete: function() { $('#cart-open').addClass('d-none'); }
      		});
      		$('body').removeClass('slide-open');

      	});

      	$(".sidepanel > .close").click(function() {
      		$('#login-open').animate({right: '-320px'});
      		$('body').removeClass('slide-open')
      	});

      	$(".mobile-src-icon").click(function(){
      		$(".header-search").toggleClass('active');
      	});


      	$(function($)
      	{
      		$('a[href="#top"]').click(function(){$('html, body').animate({scrollTop:0},'slow');return false;});

      		$(window).scroll(function() {
      			if ($(this).scrollTop() > 200) {
      				$('a[href="#top"]').css({'opacity':100});
      			} else {
      				$('a[href="#top"]').css({'opacity':0});
      			}
      			});
      	});

      	$(".footer-hd").click(function () {
      		$(this).toggleClass('active');
      		$(this).parent('.footer-links-main').toggleClass('slide-open');
          });
      });


      var w = document.body.clientWidth;
      /*
      $(function () {
      	adjustMenu();
      });
      */

       ['click', 'scroll', 'mousemove', 'touchstart'].forEach(function(e) {
      	window.addEventListener(e, mmfirstInteraction, { mmonce: true   });
      });

      var mmuserInteracted = false;

      function mmfirstInteraction()
      {
      	if (!mmuserInteracted)
      	{
      		mmuserInteracted = true;

      		adjustMenu();
      	}
      }

      $(window).bind('resize orientationchange', function() {
      	w = document.body.clientWidth;
      	adjustMenu();
      });

      var $leftmenu= $('#mobiNav');

      var adjustMenu = function()
      {
      	if(w >= 1025)
      	{
      		$($leftmenu).empty();
      	}
      	else
      	{
      		var cnt_nav_element = $($leftmenu).find('ul.nav-menu').length;
      		if(cnt_nav_element < 1)
      		{
      			$($leftmenu).empty();
      			$leftmenu.html($(".navigation").html());
      			// loadScript("https://cdn-redirector.glopal.com/glopal-loader.js?glopal_store_id=grownbrilliance");

      			setTimeout(function(){
      			   $('#wi-country-selector-button').append('Select Country');
      			}, 2000);
      		}
      	}
      }

      function loadScript(url) {
        const script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
      }


      $(document).ready(function()
      {

      	$(document).on('click','a.nav-sub-hd',function(e)
      	{
      		if(w < 992)
      		{
      			e.preventDefault();
      		}
      		var subnav = $(this).parent();
      		$("a.nav-sub-hd").parent().not(subnav).removeClass('activeNav');
      		$(subnav).toggleClass('activeNav');

      		// Set Clicked Element Scroll
      		var elelemt_container = $('#mobiNav');
              var elelemt_scrollTo = $(this);

      		var elelemt_position = elelemt_scrollTo.offset().top - elelemt_container.offset().top + elelemt_container.scrollTop();
              //elelemt_container.scrollTop(elelemt_position);
      		elelemt_container.animate({scrollTop:elelemt_position}, 400);

      	});

      	$(document).on('click','li.sub-nav > span.nav-sub-hd',function(e)
      	{
      		if(w < 992)
      		{
      			e.preventDefault();
      		}

      		var subnav = $(this).parent();
      		$("li.sub-nav > span.nav-sub-hd").parent().not(subnav).removeClass('activeNav');
      		$(subnav).toggleClass('activeNav');

      		// Set Clicked Element Scroll
      		var elelemt_container = $('#mobiNav');
              var elelemt_scrollTo = $(this);

      		var elelemt_position = elelemt_scrollTo.offset().top - elelemt_container.offset().top + elelemt_container.scrollTop();
              //elelemt_container.scrollTop(elelemt_position);
      		elelemt_container.animate({scrollTop:elelemt_position}, 400);

      	});

      	// For Engament Submenu
      	$(document).on('click','h2.submenu-main-hd',function(e)
      	{
      		if(w < 992)
      		{
      			e.preventDefault();
      		}

      		var subnav = $(this).parent();
      		$("h2.submenu-main-hd").parent().not(subnav).removeClass('activeNav');
      		$(subnav).toggleClass('activeNav');

      		// Set Clicked Element Scroll
      		var elelemt_container = $('#mobiNav');
              var elelemt_scrollTo = $(this).parents('li.sub-nav');

      		var elelemt_position = elelemt_scrollTo.offset().top - elelemt_container.offset().top + elelemt_container.scrollTop();
              //elelemt_container.scrollTop(elelemt_position);
      		elelemt_container.animate({scrollTop:elelemt_position}, 400);

      	});

      	$(document).on('click','div.engagement-dropdown-inner > span.nav-sub-hd',function(e)
      	{
      		if(w < 992)
      		{
      			e.preventDefault();
      		}

      		var subnav = $(this).parent();
      		$("div.engagement-dropdown-inner > span.nav-sub-hd").parent().not(subnav).removeClass('activeNav');
      		$(subnav).toggleClass('activeNav');

      		// Set Clicked Element Scroll
      		var elelemt_container = $('#mobiNav');
              var elelemt_scrollTo = $(this).parents('li.sub-nav');

      		var elelemt_position = elelemt_scrollTo.offset().top - elelemt_container.offset().top + elelemt_container.scrollTop();
              //elelemt_container.scrollTop(elelemt_position);
      		elelemt_container.animate({scrollTop:elelemt_position}, 400);

      	});


      });

      $(function($) {

      	$(document).ready(function() {
      		$.slidebars({
      			//scrollLock: true,
      			disableOver: 1024,
      			hideControlClasses: true
      		});
      	});

      });

      /* Click Outside and close login and Cart popup*/
      $(document).click(function(event)
      {
      	//alert(event.target);

      	if ($(event.target).closest('.login-link, .dropdown-menu-login, .dropdown-menu-inner, .cart-link, .con_icon').length === 0)
        	{
      	  	if($('.dropdown-menu-login').css('display') == 'block')
      		{
      			$('.dropdown-menu-login').slideUp('slow');
      			$('body').removeClass('slide-open');

      		}
      		/*$('#cart-open').animate({right: '-320px'});
      		$('body').removeClass('slide-open');*/
      		$(".dd-contact").removeClass('active');
        	}
      });

      function loginpopup()
      {
      	if($('.dropdown-menu-login').css('display') == 'none')
      	{
      		$('.dropdown-menu-login').slideDown('slow');
      		$('body').addClass('slide-open');
      	}
      	else
      	{
      		$('.dropdown-menu-login').slideUp('slow');
      		$('body').removeClass('slide-open');
      	}
      }

      function submitform(frmname)
      {
      	$('#'+frmname).submit();
      }

      function resetform(frmname)
      {
      	$('#'+frmname)[0].reset();
      }

      function submitLoginFrm(frmID,sUrl,rurl)
      {
      	var loginurl 	= GLOPAL_SITE_URL+sUrl;
      	var formdata 	= $("#"+frmID).serialize();
      	formdata 		= formdata+"&_token="+$('meta[name="csrf-token"]').attr('content');

      	$.ajax({
      	   type: 'POST',
      	   url: loginurl,
      	   data: formdata,
      	   success:function(data){
      		  if(data.success == false)
      		  {
      			  $("#"+frmID+" #errmsgPopUp").html(data.error);
      		  }
      		  else
      		  {
      			  	if((frmID == 'frmLoginPopUp') || (frmID == 'stickyLoginPopUp'))
      				{
      					if(data.redirect != '' && typeof data.redirect !== 'undefined')
      					{
      						if(GLOPAL_SITE_URL != data.redirect)
      						{
      							rurl = data.redirect.replace(GLOPAL_SITE_URL, '');
      							//alert(rurl);
      						}
      						//rurl = data.redirect.replace(SITE_URL, '');
      					}

      				}

      			  	//console.log(rurl);
      			  	if(rurl != '')
      			  	{
      			   		window.location=GLOPAL_SITE_URL+rurl;
      			  	}
      			  	else
      			  	{


      					$("#nsuccess-cls").html(data.message);
      				}
      		  }
      	   },
      	   error:function(err){
      		   console.log(err);
      	   },
      	});
      }

      $(document).ready(function()
      {

      	$('#frmLoginPopUp').submit(function(e){

      		$('#frmLoginPopUp div.error-cls').html('');
      		$('#frmLoginPopUp').validate({
      			rules:
      			{
      				email_popup: 	{ required: true,email: true },
      				password_popup: 	{ required: true  },
      			},
      			messages:
      			{
      				email_popup: 	{ required: "Please enter email address",email: "Please enter valid email address" },
      				password_popup: 	"Please enter password",
      			},
      			onsubmit: false,
      			invalidHandler: function(form, validator)
      			{
      				var errors = validator.numberOfInvalids();
      				if (errors)
      				{
      					for(var i=0;i<errors;i++)
      					{
      						var message = validator.errorList[i].message;
      						var id = $(validator.errorList[i].element).attr('id');
      						$("#frmLoginPopUp div#error_"+id).html(message);
      					}
      				}
      			   	else
      			   	{
      				   	$("#frmLoginPopUp div#error-cls").html('');
      				}
      			},
      			errorPlacement: function(error, element)
      			{}
      		});

      		e.preventDefault();
      		if(!$('#frmLoginPopUp').valid())
      		{
      			return false;
      		}
      		else
      		{
      			submitLoginFrm('frmLoginPopUp','custlogin','myaccount');
      		}
          });

      	$('#stickyLoginPopUp').submit(function(e){
      		$('#stickyLoginPopUp div.error-cls').html('');
      		$('#stickyLoginPopUp').validate({
      			rules:
      			{
      				email_popup: 	{ required: true,email: true },
      				password_popup: { required: true  },
      			},
      			messages:
      			{
      				email_popup: 	{ required: "Please enter email address",email: "Please enter valid email address" },
      				password_popup: "Please enter password",
      			},
      			onsubmit: false,
      			invalidHandler: function(form, validator)
      			{
      				var errors = validator.numberOfInvalids();
      				if (errors)
      				{
      					for(var i=0;i<errors;i++)
      					{
      						var message = validator.errorList[i].message;
      						var id = $(validator.errorList[i].element).attr('id');
      						$("#stickyLoginPopUp div#error_"+id).html(message);
      					}
      				}
      			   	else
      			   	{
      				   	$("#stickyLoginPopUp div#error-cls").html('');
      				}
      			},
      			errorPlacement: function(error, element)
      			{}
      		});

      		e.preventDefault();
      		if(!$('#stickyLoginPopUp').valid())
      		{
      			return false;
      		}
      		else
      		{
      			submitLoginFrm('stickyLoginPopUp','custlogin','myaccount');
      		}
          });

      	$("#frmNewsLetter").submit(function(e)
      	{
      		$("#frmNewsLetter div.error-cls").html('');
      		$('#frmNewsLetter').validate({
      			rules:
      			{
      				newsletter_email: { required: true,email: true }
      			},
      			messages:
      			{
      				newsletter_email: { required: "Please enter email address",email: "Please enter valid email address" }
      			},
      			onsubmit: false,
      			invalidHandler: function(form, validator)
      			{
      				var errors = validator.numberOfInvalids();
      				if (errors)
      				{
      					for(var i=0;i<errors;i++)
      					{
      						var message = validator.errorList[i].message;
      						var id = $(validator.errorList[i].element).attr('name');
      						$("#frmNewsLetter div#error_"+id).html(message);
      					}
      				}
      			   else
      			   {
      				   $("#frmNewsLetter div.error-cls").html('');
      			   }
      			},
      			errorPlacement: function(error, element)
      			{}
      		});

      		e.preventDefault();
      		if(!$('#frmNewsLetter').valid())
      		{
      			return false;
      		}
      		else
      		{
      			submitLoginFrm('frmNewsLetter','newsletter_subscribe','');
      			if(IS_TRACKING_WEBSITE == "1"){
      				dataLayer.push({
      					event: "pinterest_track_lead",
      					pinterest_lead_type : 'Newsletter',
      					pinterest_event_id :$("#footer_pinterest_event_id").val(),
      				});
      			}
      		}

      	});


      });

      $(document).on('click', '.prdetail-jsurl', function(event){
      	var prdlink = $(this).find('.nproduct_thumb a').attr('href');
      	if ($(event.target).is('.nproduct, .nproduct_metal, .nproduct_metal, .nproduct_price, .nproduct_label, .nproduct_sat_label, .nproduct_rating, .sv-star, .pull-left'))
      	{
      		if(prdlink != '' && typeof prdlink !== "undefined")
      		{
      			window.location = prdlink;
      		}
      	}
      });

      /*
      (function ($) {
      	"use strict";
      	// loader
      	$(window).on('load', function () {
      		$('.ls').fadeOut(); // will first fade out the loading animation
      		$('.loader').delay(50).fadeOut('slow'); // will fade out the white DIV that covers the website.
      		$('body').delay(50);
      	});

      })(jQuery);
      */

      /* Add to wishlist */
      function add_wishlist_product(products_id,diamond_item_id,is_gems,epair)
      {
          epair = typeof epair !== 'undefined' ? epair : '';

          var URL = SITE_URL +'wishlist-add-ajax';

          var actType = 'add';

          if( is_gems == 0 )
          {
              var wish_success_id = products_id;
          }
          else if( is_gems == 1 )
          {
              var wish_success_id = diamond_item_id;
          }
          else if( is_gems == 2 )
          {
              var wish_success_id = products_id + diamond_item_id;
          }

          if($("#wish_"+wish_success_id).hasClass('wish-active'))
          {
              var actType = 'remove';
          }

      	if($("#wish_camp_"+wish_success_id).hasClass('wish-active'))
          {
              var actType = 'remove';
          }

          str="";
         	str="&products_id="+products_id+"&diamond_item_id="+diamond_item_id+"&is_gems="+is_gems+"&actType="+actType+"&epair="+epair+"&_token="+$('meta[name="csrf-token"]').attr('content');

          var STR_POST_VAR = str;
          $.ajax({
              type: 'POST',
              url: URL,
              data: STR_POST_VAR,
              cache: false,
              beforeSend: function()
              {},
              success: function(resultData)
              {
      			if(resultData.status == 200) {


                      $(".wish_"+wish_success_id).toggleClass('wish-active');
      				$(".wish_"+wish_success_id+ " span").toggleClass('wish-fnt');
                      /*if(resultData.wishlist_count == 0) {
                          $(".wishlist-count").html('');
                      } else {*/
                          $(".wishlist-count").html(resultData.wishlist_count);
                      /*}*/

      				if(parseInt(resultData.wishlist_count) < 1)
      				{
      					$('span.wishlist-count').parents('a.header-wishlist').removeClass('active');
      					$('span.wishlist-count').parents('a.mobile-wishlist').removeClass('active');
      				}
      				else if(parseInt(resultData.wishlist_count) > 0)
      				{
      					$('span.wishlist-count').parents('a.header-wishlist').addClass('active');
      					$('span.wishlist-count').parents('a.mobile-wishlist').addClass('active');
      				}

      				if(actType == "add")
      				{

      					var ga_item_id = resultData.ga_item_id;
      					var ga_item_name = resultData.ga_item_name;
      					var ga_item_category = resultData.ga_item_category;
      					var ga_item_price = resultData.ga_item_price;

      					GA_AddItemToWishListEvent(ga_item_id,ga_item_name,ga_item_category,ga_item_price);

      					alert('Product has been added to your wishlist.');
      				}
      				else
      				{
      					alert('Product has been removed from your wishlist.');
      				}


                  } else {
                      alert("Something went wrong!");
                  }
              }
          });

      }

      function add_OLE_wishlist_product(products_head_id, products_shank_id, products_band_id, diamond_item_id, is_gems, epair)
      {
          epair = typeof epair !== 'undefined' ? epair : '';

          var URL = SITE_URL +'wishlist-add-ajax';
          var actType = 'add';

         	if( is_gems == 4 )
          {
      		var wish_success_id = products_head_id+"_"+products_shank_id;
      	}

          if($("#wish_"+wish_success_id).hasClass('wish-active'))
          {
              var actType = 'remove';
          }

          str="";
      	str="&products_head_id="+products_head_id+"&products_shank_id="+products_shank_id+"&products_band_id="+products_band_id+"&diamond_item_id="+diamond_item_id+"&is_gems="+is_gems+"&actType="+actType+"&epair="+epair+"&_token="+$('meta[name="csrf-token"]').attr('content');

          var STR_POST_VAR = str;
          $.ajax({
              type: 'POST',
              url: URL,
              data: STR_POST_VAR,
              cache: false,
              beforeSend: function()
              {},
              success: function(resultData)
              {
      			if(resultData.status == 200)
      			{
      				$(".wish_"+wish_success_id).toggleClass('wish-active');
      				$(".wish_"+wish_success_id+ " span").toggleClass('wish-fnt');
                      $(".wishlist-count").html(resultData.wishlist_count);

      				if(actType == "add")
      				{
      					var ga_item_id = resultData.ga_item_id;
      					var ga_item_name = resultData.ga_item_name;
      					var ga_item_category = resultData.ga_item_category;
      					var ga_item_price = resultData.ga_item_price;

      					GA_AddItemToWishListEvent(ga_item_id,ga_item_name,ga_item_category,ga_item_price);

      					alert('Product has been added to your wishlist.');
      				}
      				else
      				{
      					alert('Product has been removed from your wishlist.');
      				}

                  }
      			else
      			{
                      alert("Something went wrong!");
                  }
              }
          });

      }

    //   function GA_AddItemToWishListEvent(ga_item_id,ga_item_name,ga_item_category,ga_item_price)
    //   {
    //   	//alert(ga_item_id +"=="+ga_item_name +"=="+ga_item_category +"=="+ga_item_price );
    //   	if(IS_TRACKING_WEBSITE == "0")
    //   	{
    //   		return;
    //   	}


    //   	dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    //   	dataLayer.push({
    //   	  event: "add_to_wishlist",
    //   	  ecommerce: {
    //   		currency: "USD",
    //   		value: ga_item_price,
    //   		items: [
    //   				{
    //   				  item_id: ga_item_id,
    //   				  item_name: ga_item_name,
    //   				  affiliation: "grownbrilliance",
    //   				  currency: "USD",
    //   				  //discount: 0,
    //   				  //index: 0,
    //   				  //item_brand: gaItemElement.attr('data-item-brand'),
    //   				  item_category: ga_item_category,
    //   				  //item_category2: "",
    //   				  //item_category3: "",
    //   				  //item_category4: "",
    //   				  //item_category5: "",
    //   				  //item_list_id: "",
    //   				  //item_list_name: "",
    //   				  //item_variant: "",
    //   				  //location_id: "",
    //   				  price: ga_item_price
    //   				  //quantity: 1
    //   				}
    //   		]
    //   	  }
    //   	});
    //   }


      // Top Keyword search

    //   $(document).ready(function()
    //   {
    //   	if(document.frmSearchTop)
    //   	{
    //   		$(document.frmSearchTop.keyword).unbind('keypress').bind('keypress', function(e)
    //   		{
    //   			if(e.keyCode==13)
    //   			{	e.preventDefault();

    //   				if (document.frmSearchTop.keyword.value.replace(/^\s+|\s+$/g,"")!="" )
    //   				{
    //   					document.frmSearchTop.submit();
    //   					return false;
    //   				}
    //   			}
    //   		});
    //   	}

    //   	if(document.frmSearchSticky)
    //   	{
    //   		$(document.frmSearchSticky.keyword).unbind('keypress').bind('keypress', function(e)
    //   		{
    //   			if(e.keyCode==13)
    //   			{	e.preventDefault();

    //   				if (document.frmSearchSticky.keyword.value.replace(/^\s+|\s+$/g,"")!="" )
    //   				{
    //   					document.frmSearchSticky.submit();
    //   					return false;
    //   				}
    //   			}
    //   		});
    //   	}

    //   	if(document.forms["frmSearchMobile"])
    //   	{
    //   		$(document.forms["frmSearchMobile"].keyword).unbind('keypress').bind('keypress', function(e)
    //   		{
    //   			if(e.keyCode==13)
    //   			{	e.preventDefault();

    //   				if (document.forms["frmSearchMobile"].keyword.value.replace(/^\s+|\s+$/g,"")!="" )
    //   				{
    //   					document.forms["frmSearchMobile"].submit();
    //   					return false;
    //   				}
    //   			}
    //   		});
    //   	}


    //   	if(document.forms["frmSearchStickyMobile"])
    //   	{
    //   		$(document.forms["frmSearchStickyMobile"].keyword).unbind('keypress').bind('keypress', function(e)
    //   		{
    //   			if(e.keyCode==13)
    //   			{	e.preventDefault();

    //   				if (document.forms["frmSearchStickyMobile"].keyword.value.replace(/^\s+|\s+$/g,"")!="" )
    //   				{
    //   					document.forms["frmSearchStickyMobile"].submit();
    //   					return false;
    //   				}
    //   			}
    //   		});
    //   	}

    //   });

    //   function Valid_Search_Keyword(frmOBJ){


    //   	var selectForm = $('#' + frmOBJ);
    //   	$(selectForm).addClass('active');
    //   	var keywordInput = $(selectForm).find("input[name='keyword']").val();
    //   	if (keywordInput == ""){
    //   		$(selectForm).find("input[name='keyword']").focus();
    //   		return false;
    //   	}
    //   	$(selectForm).submit();
    //   }

    //   function Remove_Item_Ind_minicart(IndexNo)
    //   {
    //   	var frm = document.frmMiniShopCart;

    //   	$('#frmMiniShopCart input[type=checkbox]').each(function() {
    //   		$(this).prop('checked',false);
    //   	});

    //   	rtn = confirm("Are you sure you want to remove this item?");

    //   	if(rtn==false)
    //   	{
    //   		return false;
    //   	}
    //   	else
    //   	{
    //   		/*var ch_obj = eval("frm.ch_"+IndexNo);
    //   		ch_obj.checked = true;
    //   		frm.action.value="removeitem";
    //   		frm.submit();
    //   		*/
    //   		var ch_obj = eval("frm.ch_"+IndexNo);
    //   		var URL = SITE_URL +'shoppingcart-actiononcart';
    //   		var STR_POST_VAR = "ch_"+IndexNo+"="+ch_obj.value+"&action=minicartremoveitem&_token="+$('meta[name="csrf-token"]').attr('content');
    //   		$.ajax({
    //   			type: 'POST',
    //   			url: URL,
    //   			data: STR_POST_VAR,
    //   			cache: false,
    //   			beforeSend: function()
    //   			{
    //   				var html_loader = '<ol class="items empty-items"><li><p><img src="https://www.grownbrilliance.com/images/ajax-loader.gif"><br><span class="error">Please wait while shipping methods are loading....<br>if it takes more than 10-15 seconds then please refresh the page.</span></li></ol>';

    //   				$('#cart-open .sp-header .sp-content .sp-inner.sp-basket').html(html_loader);

    //   			},
    //   			success: function(Data)
    //   			{
    //   				var htmlstr = Data.split('@@')[0];
    //   				var cartcount = Data.split('@@')[1];

    //   				$('#cart-open .sp-header .sp-content .sp-inner.sp-basket').html(htmlstr);
    //   				$('#MenuCartCount').text(cartcount);
    //   				$('#StickyCartCount').text(cartcount);
    //   				$('#StickyCartCount1').text(cartcount);

    //   				if(parseInt(cartcount) < 1)
    //   				{
    //   					$('#MenuCartCount').parents('a.cart-link').removeClass('active');
    //   					$('#StickyCartCount').parents('a.cart-link').removeClass('active');
    //   					$('#StickyCartCount1').parents('a.cart-link').removeClass('active');
    //   				}

    //   				if (/shoppingcart/.test(window.location.href))
    //   				{
    //   					location.reload();
    //   				}
    //   			}
    //   		});
    //   	}
    //   }

      /* Extend */
    //   function Remove_Warranty_Ind_minicart(IndexNo)
    //   {
    //   	var frm = document.frmMiniShopCart;

    //   	$('#frmMiniShopCart input[type=checkbox]').each(function() {
    //   		$(this).prop('checked',false);
    //   	});

    //   	rtn = confirm("Are you sure you want to remove warranty for this item?");

    //   	if(rtn==false)
    //   	{
    //   		return false;
    //   	}
    //   	else
    //   	{
    //   		/*var ch_obj = eval("frm.ch_"+IndexNo);
    //   		ch_obj.checked = true;
    //   		frm.action.value="removeitem";
    //   		frm.submit();
    //   		*/
    //   		var ch_obj = eval("frm.ch_"+IndexNo);
    //   		var URL = SITE_URL +'shoppingcart-actiononcart';
    //   		var STR_POST_VAR = "chWarranty_"+IndexNo+"="+ch_obj.value+"&action=minicartremoveitemwarranty&_token="+$('meta[name="csrf-token"]').attr('content');
    //   		$.ajax({
    //   			type: 'POST',
    //   			url: URL,
    //   			data: STR_POST_VAR,
    //   			cache: false,
    //   			beforeSend: function()
    //   			{
    //   				var html_loader = '<ol class="items empty-items"><li><p><img src="'+SITE_URL+'images/ajax-loader.gif"><br><span class="error">Please wait while shipping methods are loading....<br>if it takes more than 10-15 seconds then please refresh the page.</span></li></ol>';

    //   				$('#cart-open .sp-header .sp-content .sp-inner.sp-basket').html(html_loader);

    //   			},
    //   			success: function(Data)
    //   			{
    //   				var htmlstr = Data.split('@@')[0];
    //   				var cartcount = Data.split('@@')[1];

    //   				$('#cart-open .sp-header .sp-content .sp-inner.sp-basket').html(htmlstr);
    //   				$('#MenuCartCount').text(cartcount);
    //   				$('#StickyCartCount').text(cartcount);
    //   				$('#StickyCartCount1').text(cartcount);

    //   				if(parseInt(cartcount) < 1)
    //   				{
    //   					$('#MenuCartCount').parents('a.cart-link').removeClass('active');
    //   					$('#StickyCartCount').parents('a.cart-link').removeClass('active');
    //   					$('#StickyCartCount1').parents('a.cart-link').removeClass('active');
    //   				}

    //   				if (/shoppingcart/.test(window.location.href))
    //   				{
    //   					location.reload();
    //   				}
    //   			}
    //   		});
    //   	}
    //   }
      /* Extend */

    //   function Open_Livechat()
    //   {
    //   	if (typeof LC_API !== 'undefined')
    //   	{
    //   		LC_API.open_chat_window();
    //   	}

    //   	if (typeof zE !== 'undefined')
    //   	{
    //   		zE('messenger', 'open');
    //   	}
    //   }

      /* Accept cookie Or Not Code [START] */
      //--------------------------------------------
      /*
      $(document).ready(function(){
      	checkFooterbarCookie();
      });
      */

    //   var is_cookiebar_loaded = 0;
    //   $(window).scroll(function()
    //   {
    //     if(is_cookiebar_loaded ==0)
    //     {
    //   	  is_cookiebar_loaded =1;
    //   	  checkFooterbarCookie();
    //     }
    //   });

    //   function checkFooterbarCookie()
    //   {
    //   	var is_setWebPeromanceCookie 	= '';
    //   	is_setWebPeromanceCookie = getFooterbarCookie("footerbarCookie");
    //   	if (typeof is_setWebPeromanceCookie  === "undefined")
    //   	{
    //   		$("#footer-cookiebar-box").removeClass("d-none");
    //   	}
    //   }

    //   function acceptFooterbarCookie()
    //   {
    //   	$("#footer-cookiebar-box").addClass("d-none");
    //   	setFooterbarCookie('footerbarCookie', 'yes', '365');
    //   }

    //   function getFooterbarCookie(cName)
    //   {
    //   	const name = cName + "=";
    //   	const cDecoded = decodeURIComponent(document.cookie); //to be careful
    //   	const cArr = cDecoded.split('; ');
    //   	let res;
    //   	cArr.forEach(val => {
    //   		if (val.indexOf(name) === 0) res = val.substring(name.length);
    //   	})
    //   	return res
    //   }

    //   function setFooterbarCookie(cname, cvalue, exdays)
    //   {
    //   	const d = new Date();
    //   	d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //   	let expires = "expires="+ d.toUTCString();
    //   	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    //   }
      //--------------------------------------------
      /* Accept cookie Or Not Code [END] */
    //   function getCookie(name) {
    //   	const value = `; ${document.cookie}`;
    //   	const parts = value.split(`; ${name}=`);
    //   	if (parts.length === 2) return parts.pop().split(';').shift();

    //   	return '';
    //     }




      function removeActiveClassFromSearch(){
      	$("#frmSearchMobile").removeClass('active');
      	$("#frmSearchStickyMobile").removeClass('active');
      	$("#frmSearchSticky").removeClass('active');
      	$("#frmSearchTop").removeClass('active');
      	$("input[name='keyword']").val('');
      }




      $(document).on('click','#sb-site',function name(e) {
      	var childLegth = $(".ss__autocomplete--target").children().length;
      	if(childLegth > 0 ){
      		removeActiveClassFromSearch();
      	}
      	let activeElement = document.activeElement;
      	if($(activeElement).attr('name')!='keyword'){

      		removeActiveClassFromSearch();
      	}

      });

      function redirectToUrl(obj, redirectURL) {
      	if($(obj).prop('checked')){
      		window.location.href = redirectURL + '&location=INSTOCK';
      	}else{
      		window.location.href = redirectURL;
      	}
      }


      function openStoreListMobile(){

      	$("#store-list-mobile-popup").modal('show');

      };
      var load_yotpo_js =  function()
      {
      	  (function e()
      	  {var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="https://staticw2.yotpo.com/"+YOTPO_KEY+"/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
      };

      /*
      $(window).bind("load", function()
      {
      	load_yotpo_js();
      });
      */

      //if(CURRENT_CONTROLLER =='OrderReceiptController' || CURRENT_CONTROLLER =='StaticPagesController' ||
      //CURRENT_CONTROLLER == 'ProductDetailController')
      if(CURRENT_CONTROLLER =='OrderReceiptController' || CURRENT_CONTROLLER =='StaticPagesController')
      {
      	$(window).bind("load", function()
      	{
      		load_yotpo_js();
      	});
      }
      else
      {

      	/*
      		var is_yotpo_loaded = 0;
      		$(window).scroll(function()
      		{
      		  if(is_yotpo_loaded ==0)
      		  {
      			  is_yotpo_loaded =1;
      			  load_yotpo_js();
      		  }
      		});
      		*/

      	  ['click', 'scroll', 'mousemove', 'touchstart'].forEach(function(e) {
      			window.addEventListener(e, yotpofirstInteraction, { yotpoonce: true   });
      		});

      		var yotpouserInteracted = false;

      		function yotpofirstInteraction()
      		{
      			if (!yotpouserInteracted)
      			{
      				yotpouserInteracted = true;

      				load_yotpo_js();
      			}
      		}
      }
      ;/*!
       * jQuery Cookie Plugin v1.4.1
       * https://github.com/carhartl/jquery-cookie
       *
       * Copyright 2013 Klaus Hartl
       * Released under the MIT license
       */
      (function (factory) {
      	if (typeof define === 'function' && define.amd) {
      		// AMD
      		define(['jquery'], factory);
      	} else if (typeof exports === 'object') {
      		// CommonJS
      		factory(require('jquery'));
      	} else {
      		// Browser globals
      		factory(jQuery);
      	}
      }(function ($) {

      	var pluses = /\+/g;

      	function encode(s) {
      		return config.raw ? s : encodeURIComponent(s);
      	}

      	function decode(s) {
      		return config.raw ? s : decodeURIComponent(s);
      	}

      	function stringifyCookieValue(value) {
      		return encode(config.json ? JSON.stringify(value) : String(value));
      	}

      	function parseCookieValue(s) {
      		if (s.indexOf('"') === 0) {
      			// This is a quoted cookie as according to RFC2068, unescape...
      			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      		}

      		try {
      			// Replace server-side written pluses with spaces.
      			// If we can't decode the cookie, ignore it, it's unusable.
      			// If we can't parse the cookie, ignore it, it's unusable.
      			s = decodeURIComponent(s.replace(pluses, ' '));
      			return config.json ? JSON.parse(s) : s;
      		} catch(e) {}
      	}

      	function read(s, converter) {
      		var value = config.raw ? s : parseCookieValue(s);
      		return $.isFunction(converter) ? converter(value) : value;
      	}

      	var config = $.cookie = function (key, value, options) {

      		// Write

      		if (value !== undefined && !$.isFunction(value)) {
      			options = $.extend({}, config.defaults, options);

      			if (typeof options.expires === 'number') {
      				var days = options.expires, t = options.expires = new Date();
      				t.setTime(+t + days * 864e+5);
      			}

      			return (document.cookie = [
      				encode(key), '=', stringifyCookieValue(value),
      				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
      				options.path    ? '; path=' + options.path : '',
      				options.domain  ? '; domain=' + options.domain : '',
      				options.secure  ? '; secure' : ''
      			].join(''));
      		}

      		// Read

      		var result = key ? undefined : {};

      		// To prevent the for loop in the first place assign an empty array
      		// in case there are no cookies at all. Also prevents odd result when
      		// calling $.cookie().
      		var cookies = document.cookie ? document.cookie.split('; ') : [];

      		for (var i = 0, l = cookies.length; i < l; i++) {
      			var parts = cookies[i].split('=');
      			var name = decode(parts.shift());
      			var cookie = parts.join('=');

      			if (key && key === name) {
      				// If second argument (value) is a function it's a converter...
      				result = read(cookie, value);
      				break;
      			}

      			// Prevent storing a cookie that we couldn't decode.
      			if (!key && (cookie = read(cookie)) !== undefined) {
      				result[name] = cookie;
      			}
      		}

      		return result;
      	};

      	config.defaults = {};

      	$.removeCookie = function (key, options) {
      		if ($.cookie(key) === undefined) {
      			return false;
      		}

      		// Must not alter options, thus extending a fresh object...
      		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
      		return !$.cookie(key);
      	};

      }));

      var LatCookie = $.cookie( 'latitudeStr' );
      var LonCookie = $.cookie( 'longitudeStr' );
      var notAllowed = 0;
      var locAllowed = 0;
      if((LatCookie==null || LatCookie=='') && (LonCookie==null || LonCookie==''))
      {
      	if (navigator.geolocation) {

      	  navigator.geolocation.getCurrentPosition(showPosition);
      	   locAllowed = 1;
      	} else {
      	  showPosition('');
      	  notAllowed = 1;
      	}
      }
      else
      {
      	showPosition('');
      }

      if(notAllowed==1)
      {
      	showPosition('');
      }

      	function checkStoreDetailPopup(el)
      {
      	$(el).toggleClass("active");
      		$('.con-store-ans').addClass("d-none");
      		$(el).next('.con-store-ans').toggleClass("d-none");
      }

      	function checkStoreDetailPopupMb(el)
      {
      	$(el).toggleClass("active");
      		$('.con-store-ans').addClass("d-none");
      		$(el).next('.con-store-ans').toggleClass("d-none");
      }

      function checkStorePopup()
      {
      		if ($('.dd-store').hasClass("active"))
      		{
      			$(".dd-store").removeClass('active');
      		}
      		else
      		{
      			$(".sidepanel > .close").trigger('click');
      			$(".dropdown-menu-login").slideUp('slow');
      			$(".dd-contact").removeClass('active');
      			$(".dd-store").addClass('active');
      		}
      }

      //showPosition('ac');
      function showPosition(position) {
        //document.getElementById("demo").innerHTML =
        //"Your Address Latitude: " + position.coords.latitude + "<br>" +
        //"Your Address Longitude: " + position.coords.longitude;

        if((LatCookie==null || LatCookie=='') && (LonCookie==null || LonCookie==''))
        {		if(locAllowed==1) {
      	   var latitudeVal = position.coords.latitude;
      	   var longitudeVal = position.coords.longitude;

      	   $.cookie("latitudeStr",latitudeVal,1);
      	   $.cookie("longitudeStr",longitudeVal,1);
      	   ['click', 'scroll', 'mousemove', 'touchstart'].forEach(function(e) {
      			window.addEventListener(e, getNearestStoreInfo, { ssonce: true   });
      		});
      	}
        }
      }

      ['click', 'scroll', 'mousemove', 'touchstart'].forEach(function(e) {
      	window.addEventListener(e, getNearestStoreInfo, { ssonce: true   });
      });

      var storeuserInteracted = false;
      function getNearestStoreInfo(){

      	if (!storeuserInteracted)
      	{
      		storeuserInteracted = true;
      		var LatCookie1 = $.cookie( 'latitudeStr' );
      		var LonCookie1 = $.cookie( 'longitudeStr' );
      		if((LatCookie1==null || LatCookie1=='') && (LonCookie1==null || LonCookie1==''))
      		{
      			var latitudeVal = 0;
      			var longitudeVal = 0;
      			$.cookie("latitudeStr",latitudeVal,1);
      			$.cookie("longitudeStr",longitudeVal,1);

      		} else {
      			var latitudeVal = LatCookie1;
      			var longitudeVal = LonCookie1;

      		}
      		var STR_POST_VAR = 'lat='+latitudeVal+'&long='+longitudeVal+'&_token='+$('meta[name="csrf-token"]').attr('content');


      		$.ajax({
      					type: 'POST',
      					url: SITE_URL+'get-store-distance-ajax?',
      					dataType: "html",
      					data: STR_POST_VAR,
      					success: (function(data, status)
      					{
      						var result = data;
      						$("#nearestStore").html('');
      						$("#nearestStore").html(result);
      						$("#storelist-mobile").html('');
      						$("#storelist-mobile").html(result.replace("checkStoreDetailPopup","checkStoreDetailPopupMb"));
      						$("#yourNearestStoreMb").html($("#yourNearestStore").html());
      					}),
      					complete :(function()
      					{
      					})
      		});
      	}
      }

        //var STR_POST_VAR = 'lat=41.8772076&long=-87.6783541&_token='+$('meta[name="csrf-token"]').attr('content');


       // document.getElementById("yourlocation").innerHTML = distance(position.coords.latitude, position.coords.longitude, 40.754168, -73.979807, 'M')+"M";
       // document.getElementById("testlocation").innerHTML = distance(40.761765, -73.329286, 40.754168, -73.979807, 'M')+"M";



      /* ========================================================================
       * Bootstrap: modal.js v3.3.4
       * http://getbootstrap.com/javascript/#modals
       * ========================================================================
       * Copyright 2011-2015 Twitter, Inc.
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * ======================================================================== */


      +function ($) {
        'use strict';

        // MODAL CLASS DEFINITION
        // ======================

        var Modal = function (element, options) {
          this.options             = options
          this.$body               = $(document.body)
          this.$element            = $(element)
          this.$dialog             = this.$element.find('.modal-dialog')
          this.$backdrop           = null
          this.isShown             = null
          this.originalBodyPad     = null
          this.scrollbarWidth      = 0
          this.ignoreBackdropClick = false

          if (this.options.remote) {
            this.$element
              .find('.modal-content')
              .load(this.options.remote, $.proxy(function () {
                this.$element.trigger('loaded.bs.modal')
              }, this))
          }
        }

        Modal.VERSION  = '3.3.4'

        Modal.TRANSITION_DURATION = 300
        Modal.BACKDROP_TRANSITION_DURATION = 150

        Modal.DEFAULTS = {
          backdrop: true,
          keyboard: true,
          show: true
        }

        Modal.prototype.toggle = function (_relatedTarget) {
          return this.isShown ? this.hide() : this.show(_relatedTarget)
        }

        Modal.prototype.show = function (_relatedTarget) {
          var that = this
          var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

          this.$element.trigger(e)

          if (this.isShown || e.isDefaultPrevented()) return

          this.isShown = true

          this.checkScrollbar()
          this.setScrollbar()
          this.$body.addClass('modal-open')

          this.escape()
          this.resize()

          this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

          this.$dialog.on('mousedown.dismiss.bs.modal', function () {
            that.$element.one('mouseup.dismiss.bs.modal', function (e) {
              if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
            })
          })

          this.backdrop(function () {
            var transition = $.support.transition && that.$element.hasClass('fade')

            if (!that.$element.parent().length) {
              that.$element.appendTo(that.$body) // don't move modals dom position
            }

            that.$element
              .show()
              .scrollTop(0)

            that.adjustDialog()

            if (transition) {
              that.$element[0].offsetWidth // force reflow
            }

            that.$element
              .addClass('in')
              .attr('aria-hidden', false)

            that.enforceFocus()

            var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

            transition ?
              that.$dialog // wait for modal to slide in
                .one('bsTransitionEnd', function () {
                  that.$element.trigger('focus').trigger(e)
                })
                .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
              that.$element.trigger('focus').trigger(e)
          })
        }

        Modal.prototype.hide = function (e) {
          if (e) e.preventDefault()

          e = $.Event('hide.bs.modal')

          this.$element.trigger(e)

          if (!this.isShown || e.isDefaultPrevented()) return

          this.isShown = false

          this.escape()
          this.resize()

          $(document).off('focusin.bs.modal')

          this.$element
            .removeClass('in')
            .attr('aria-hidden', true)
            .off('click.dismiss.bs.modal')
            .off('mouseup.dismiss.bs.modal')

          this.$dialog.off('mousedown.dismiss.bs.modal')

          $.support.transition && this.$element.hasClass('fade') ?
            this.$element
              .one('bsTransitionEnd', $.proxy(this.hideModal, this))
              .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
            this.hideModal()
        }

        Modal.prototype.enforceFocus = function () {
          $(document)
            .off('focusin.bs.modal') // guard against infinite focus loop
            .on('focusin.bs.modal', $.proxy(function (e) {
              if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.trigger('focus')
              }
            }, this))
        }

        Modal.prototype.escape = function () {
          if (this.isShown && this.options.keyboard) {
            this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
              e.which == 27 && this.hide()
            }, this))
          } else if (!this.isShown) {
            this.$element.off('keydown.dismiss.bs.modal')
          }
        }

        Modal.prototype.resize = function () {
          if (this.isShown) {
            $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
          } else {
            $(window).off('resize.bs.modal')
          }
        }

        Modal.prototype.hideModal = function () {
          var that = this
          this.$element.hide()
          this.backdrop(function () {
            that.$body.removeClass('modal-open')
            that.resetAdjustments()
            that.resetScrollbar()
            that.$element.trigger('hidden.bs.modal')
          })
        }

        Modal.prototype.removeBackdrop = function () {
          this.$backdrop && this.$backdrop.remove()
          this.$backdrop = null
        }

        Modal.prototype.backdrop = function (callback) {
          var that = this
          var animate = this.$element.hasClass('fade') ? 'fade' : ''

          if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate

            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
              .appendTo(this.$body)

            this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
              if (this.ignoreBackdropClick) {
                this.ignoreBackdropClick = false
                return
              }
              if (e.target !== e.currentTarget) return
              this.options.backdrop == 'static'
                ? this.$element[0].focus()
                : this.hide()
            }, this))

            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in')

            if (!callback) return

            doAnimate ?
              this.$backdrop
                .one('bsTransitionEnd', callback)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
              callback()

          } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            var callbackRemove = function () {
              that.removeBackdrop()
              callback && callback()
            }
            $.support.transition && this.$element.hasClass('fade') ?
              this.$backdrop
                .one('bsTransitionEnd', callbackRemove)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
              callbackRemove()

          } else if (callback) {
            callback()
          }
        }

        // these following methods are used to handle overflowing modals

        Modal.prototype.handleUpdate = function () {
          this.adjustDialog()
        }

        Modal.prototype.adjustDialog = function () {
          var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

          this.$element.css({
            paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
          })
        }

        Modal.prototype.resetAdjustments = function () {
          this.$element.css({
            paddingLeft: '',
            paddingRight: ''
          })
        }

        Modal.prototype.checkScrollbar = function () {
          var fullWindowWidth = window.innerWidth
          if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect()
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
          }
          this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
          this.scrollbarWidth = this.measureScrollbar()
        }

        Modal.prototype.setScrollbar = function () {
          var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
          this.originalBodyPad = document.body.style.paddingRight || ''
          if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
        }

        Modal.prototype.resetScrollbar = function () {
          this.$body.css('padding-right', this.originalBodyPad)
        }

        Modal.prototype.measureScrollbar = function () { // thx walsh
          var scrollDiv = document.createElement('div')
          scrollDiv.className = 'modal-scrollbar-measure'
          this.$body.append(scrollDiv)
          var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
          this.$body[0].removeChild(scrollDiv)
          return scrollbarWidth
        }


        // MODAL PLUGIN DEFINITION
        // =======================

        function Plugin(option, _relatedTarget) {
          return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
          })
        }

        var old = $.fn.modal

        $.fn.modal             = Plugin
        $.fn.modal.Constructor = Modal


        // MODAL NO CONFLICT
        // =================

        $.fn.modal.noConflict = function () {
          $.fn.modal = old
          return this
        }


        // MODAL DATA-API
        // ==============

        $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
          var $this   = $(this)
          var href    = $this.attr('href')
          var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
          var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

          if ($this.is('a')) e.preventDefault()

          $target.one('show.bs.modal', function (showEvent) {
            if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
            $target.one('hidden.bs.modal', function () {
              $this.is(':visible') && $this.trigger('focus')
            })
          })
          Plugin.call($target, option, this)
        })

      }(jQuery);

      /* ========================================================================
       * Bootstrap: transition.js v3.3.4
       * http://getbootstrap.com/javascript/#transitions
       * ========================================================================
       * Copyright 2011-2015 Twitter, Inc.
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
       * ======================================================================== */


      +function ($) {
        'use strict';

        // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
        // ============================================================

        function transitionEnd() {
          var el = document.createElement('bootstrap')

          var transEndEventNames = {
            WebkitTransition : 'webkitTransitionEnd',
            MozTransition    : 'transitionend',
            OTransition      : 'oTransitionEnd otransitionend',
            transition       : 'transitionend'
          }

          for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
              return { end: transEndEventNames[name] }
            }
          }

          return false // explicit for ie8 (  ._.)
        }

        // http://blog.alexmaccaw.com/css-transitions
        $.fn.emulateTransitionEnd = function (duration) {
          var called = false
          var $el = this
          $(this).one('bsTransitionEnd', function () { called = true })
          var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
          setTimeout(callback, duration)
          return this
        }

        $(function () {
          $.support.transition = transitionEnd()

          if (!$.support.transition) return

          $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function (e) {
              if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
          }
        })

      }(jQuery);;
      function changeProductData(upProductId, getProductId)
      {
      	//console.log(upProductId+"---"+getProductId);
      	$("#p_"+upProductId).find('.designer_name a').html($("#"+getProductId).attr('data-product1-name'));
      	$("#p_"+upProductId).find('.prdname').html($("#"+getProductId).attr('data-product2-name'));
      	//$("#p_"+upProductId).find('.product_sale_price').html('<div class="visually-hidden"> on sale for </div>' + $("#"+getProductId).attr('data-sale-price'));
      	$("#p_"+upProductId).find('.product_sale_price').html($("#"+getProductId).attr('data-sale-price'));
      	$("#p_"+upProductId).find('.product_our_price').removeClass('strike');
      	//$("#p_"+upProductId).find('.product_our_price').html('<div class="visually-hidden">Previous price </div>' + $("#"+getProductId).attr('data-our-price'));
      	$("#p_"+upProductId).find('.product_our_price').html($("#"+getProductId).attr('data-our-price'));
      	$("#p_"+upProductId).find('.yotpo_product_sku').attr("data-yotpo-product-id",$("#"+getProductId).attr('data-product-sku'));

      	//console.log($("#"+getProductId).attr('data-sale-price').replace(/,/g, '').replace(/\$/g, ''));

      	if(($("#"+getProductId).attr('data-sale-price').replace(/,/g, '').replace(/\$/g, '')) > 0)
      	{
      		$("#p_"+upProductId).find('.product_sale_price').removeClass('sale-price-hide');
      		$("#p_"+upProductId).find('.product_our_price').addClass('strike');
      		//$("#p_"+upProductId).find('.product_sale_price').html('<div class="visually-hidden"> on sale for </div>' + $("#"+getProductId).attr('data-sale-price'));
      		$("#p_"+upProductId).find('.product_sale_price').html($("#"+getProductId).attr('data-sale-price'));
      	}
      	else
      	{
      		$("#p_"+upProductId).find('.product_sale_price').addClass('sale-price-hide');
      	}

      	$("#p_"+upProductId).find('.product_thumb').attr('src', $("#"+getProductId).attr('data-main-image'));
      	//if(IS_DESKTOP == '1')
      	//{
      		$("#p_"+upProductId).find('.product_thumb_hover').attr('src', $("#"+getProductId).attr('data-hover-image'));
      	//}

      	if(CURRENT_CONTROLLER == 'StackableRingsController' || CURRENT_CONTROLLER == 'StoreLocatorController')
      	{
      		$("#p_"+upProductId).find('.detail_link').attr('data-href', $("#"+getProductId).attr('data-detail-url'));
      		$(".nproduct_thumb a.detail_link img").removeClass('hovercls');

      		var tmpprice = ($("#"+getProductId).attr('data-sale-price') > 0 ? $("#"+getProductId).attr('data-sale-price') : $("#"+getProductId).attr('data-our-price'));
      		$("#p_"+upProductId).attr('data-id', $("#"+getProductId).attr('data-product-id'));
      		$("#p_"+upProductId).attr('data-sku', $("#"+getProductId).attr('data-product-sku'));
      		//$("#p_"+upProductId).attr('data-group_code', $("#"+getProductId).attr('data-product-group-code'));
      		$("#p_"+upProductId).attr('data-group_code', $("#"+getProductId).attr('data-product-sku'));

      		$("#p_"+upProductId).attr('data-title', $("#"+getProductId).attr('data-product1-name'));
      		$("#p_"+upProductId).attr('data-title2', $("#"+getProductId).attr('data-product2-name'));
      		$("#p_"+upProductId).attr('data-title3', $("#"+getProductId).attr('data-product3-name'));
      		$("#p_"+upProductId).attr('data-price', Number(tmpprice.replace(/[^0-9\.-]+/g,"")));
      		$("#p_"+upProductId).attr('data-img',$("#"+getProductId).attr('data-main-image'));
      		$("#p_"+upProductId).attr('data-img_png',$("#"+getProductId).attr('data-image-png'));
      		$("#p_"+upProductId).attr('data-img_png_trim',$("#"+getProductId).attr('data-image-png-trim'));
      		$("#p_"+upProductId).attr('data-url', $("#"+getProductId).attr('data-detail-url'));
      		$("#p_"+upProductId).attr('data-gap','');
      		$("#p_"+upProductId).attr('data-stack_position', $("#"+getProductId).attr('data-stack-position'));
      		$("#p_"+upProductId).attr('data-is_group_ring_size', $("#"+getProductId).attr('data-is-group-ring-size'));
      		$("#p_"+upProductId).attr('data-category_name', $("#"+getProductId).attr('data-category-name'));

      		if(CURRENT_CONTROLLER == 'StackableRingsController')
      		{
      			recheck_mark_stacked_products();
      		}
      	}
      	else
      	{
      		$("#p_"+upProductId).find('.detail_link').attr('href', $("#"+getProductId).attr('data-detail-url'));
      		$(".nproduct_thumb a.detail_link img").removeClass('hovercls');
      	}

      }

      function getCombinationProductID(ovValue, ovProductID, orgProductID, ovGroupCode, clickVal)
      {
      	var ovMetalName 		= '';
      	var ovCaratVal			= '';
      	var ovDiamondShapeVal	= '';

      	// Metal Type Value Fetch
      	//-----------------------
      	if(ovValue == 'metal'){
      		ovMetalName = $("#metal_"+ovProductID).attr('data-product-metal-type');
      	} else {
      		ovMetalName = $("#mt_"+orgProductID).val();
      	}

      	// Carat Weight Value Fetch
      	//-------------------------
      	//alert(ovValue);
      	if(ovValue == 'caratWeight'){
      		ovCaratVal = $("#caratweight_"+ovProductID).attr('data-carat-weight');
      	} else {
      		ovCaratVal = $("#ct_"+orgProductID).val();
      	}

      	// Diamond Shape Value Fetch
      	//-------------------------
      	//alert(ovValue);
      	if(ovValue == 'diamondShape'){
      		ovDiamondShapeVal = $("#diamondShape_"+ovProductID).attr('data-diamond-shape');
      	} else {
      		ovDiamondShapeVal = $("#sh_"+orgProductID).val();
      	}

      	//console.log(ovValue+"---"+ovDiamondShapeVal);
      	//alert("#caratweight_"+ovProductID+"--------"+ovCaratVal);

      	// Combine Metal, Carat and Group code for get value
      	//--------------------------------------------------
      	if(ovMetalName !== null && ovMetalName !== ''){
      		ovMetalName = ovMetalName.toLowerCase().replaceAll(" ","-");
      	}

      	if(ovGroupCode !== null && ovGroupCode !== ''){
      		ovGroupCode = ovGroupCode.toLowerCase().replaceAll(" ","-");
      	}

      	if(ovCaratVal !== null && ovCaratVal !== ''){
      		ovCaratVal = ovCaratVal.replaceAll(".","");
      	}

      	if(ovDiamondShapeVal !== null && ovDiamondShapeVal !== ''){
      		ovDiamondShapeVal = "-"+ovDiamondShapeVal.toLowerCase().replaceAll(" ","-").replaceAll(",","");
      	}

      	var combID = ovGroupCode+"-"+ovMetalName+"-"+ovCaratVal+ovDiamondShapeVal;

      	//alert("come--"+combID);

      	if(clickVal == 'yes'){
      		$('#dis_prd'+orgProductID).val(combID);
      	}
      	combID	=  combID.replaceAll("/","").replaceAll(" ","-").replaceAll(",","").replaceAll("&","and");

      	changeProductData(orgProductID, combID);
      }


      function selectMetalCarat(selFilter, orgProductID, ovProductID, dataAttr, filterprefix)
      {
      	var sel_filter = selFilter;
      	if(selFilter == 'diamondShape'){ sel_filter = 'shape'; }
      	$('#p_'+orgProductID).find('.nproduct_'+sel_filter+' a').removeClass('active');
      	$('#p_'+orgProductID).find('#'+selFilter+'_'+ovProductID).addClass('active');

      	$('#p_'+orgProductID).find('.'+selFilter+'PrdID').val(ovProductID);
      	$('#'+filterprefix+'_'+orgProductID).val($('#'+selFilter+'_'+ovProductID).attr(dataAttr));
      }

      /* Metal Box Hover */
      $(document).ready(function()
      {
      	if(IS_DESKTOP == '1')
      	{
      		$(document).on('mouseover', '.nproduct_metal a', function (e) {

      			var ovGroupCode 	= '';
      			var ovProductID  	= '';
      			var orgProductID    = '';

      			ovGroupCode 	= $(this).attr('data-product-group-code');
      			ovProductID 	= $(this).attr('data-product-id');
      			orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();

      			getCombinationProductID('metal', ovProductID, orgProductID, ovGroupCode, 'no');
      		});

      		$(document).on('mouseover', '.nproduct_caratweight li.ctval a', function (e) {

      			var ovGroupCode 	= '';
      			var ovProductID  	= '';
      			var orgProductID    = '';

      			ovGroupCode 	= $(this).attr('data-product-group-code');
      			ovProductID 	= $(this).attr('data-product-id');
      			orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();

      			getCombinationProductID('caratWeight', ovProductID, orgProductID, ovGroupCode, 'no');
      		});

      		$(document).on('mouseover', '.nproduct_shape a.shape_type_icon', function (e) {

      			var ovGroupCode 	= '';
      			var ovProductID  	= '';
      			var orgProductID    = '';

      			ovGroupCode 	= $(this).attr('data-product-group-code');
      			ovProductID 	= $(this).attr('data-product-id');
      			orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();

      			getCombinationProductID('diamondShape', ovProductID, orgProductID, ovGroupCode, 'no');
      		});

      		$(document).on('mouseleave', '.nproduct_metal a', function (e) {

      			var orgProductID 	= '';
      			var combID 			= '';

      			orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();
      			combID 			= $('#dis_prd'+orgProductID).val().toLowerCase().replaceAll(" ","-").replaceAll(".","");
      			combID			=  combID.replaceAll("/","").replaceAll(" ","-").replaceAll(",","").replaceAll("&","and");

      			changeProductData(orgProductID, combID);
      		});

      		$(document).on('mouseleave', '.nproduct_caratweight li.ctval a', function (e) {

      			var orgProductID 	= '';
      			var combID 			= '';

      			orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();
      			combID 			= $('#dis_prd'+orgProductID).val().toLowerCase().replaceAll(" ","-").replaceAll(".","");
      			combID			=  combID.replaceAll("/","").replaceAll(" ","-").replaceAll(",","").replaceAll("&","and");

      			changeProductData(orgProductID, combID);
      		});

      		$(document).on('mouseleave', '.nproduct_shape a.shape_type_icon', function (e) {

      			var orgProductID 	= '';
      			var combID 			= '';

      			orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();
      			combID 			= $('#dis_prd'+orgProductID).val().toLowerCase().replaceAll(" ","-").replaceAll(".","");
      			combID			=  combID.replaceAll("/","").replaceAll(" ","-").replaceAll(",","").replaceAll("&","and");

      			changeProductData(orgProductID, combID);
      		});
      	}
      	$(document).on('click', '.nproduct_metal a', function (e) {

      		var ovGroupCode 	= '';
      		var ovProductID  	= '';

      		ovGroupCode 	= $(this).attr('data-product-group-code');
      		ovProductID 	= $(this).attr('data-product-id');
      		orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();

      		selectMetalCarat('metal', orgProductID, ovProductID, 'data-product-metal-type','mt');
      		getCombinationProductID('metal', ovProductID, orgProductID, ovGroupCode, 'yes');
      	});

      	$(document).on('click', '.nproduct_caratweight li.ctval a', function (e) {

      		var ovGroupCode 	= '';
      		var ovProductID  	= '';

      		ovGroupCode 	= $(this).attr('data-product-group-code');
      		ovProductID 	= $(this).attr('data-product-id');
      		orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();

      		selectMetalCarat('caratweight', orgProductID, ovProductID, 'data-carat-weight','ct');
      		getCombinationProductID('caratWeight', ovProductID, orgProductID, ovGroupCode,'yes');
      	});

      	$(document).on('click', '.nproduct_shape a.shape_type_icon', function (e) {

      		var ovGroupCode 	= '';
      		var ovProductID  	= '';

      		ovGroupCode 	= $(this).attr('data-product-group-code');
      		ovProductID 	= $(this).attr('data-product-id');
      		orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();

      		selectMetalCarat('diamondShape', orgProductID, ovProductID, 'data-diamond-shape','sh');
      		getCombinationProductID('diamondShape', ovProductID, orgProductID, ovGroupCode, 'yes');
      	});

      	$(document).on('click', '.carat-weight-link .btn_link', function (e) {

      		var orgProductID 	= '';
      		var combID 			= '';
      		var redURL			= '';

      		orgProductID 	= $(this).closest('.nproduct').find('.orgPrdID').val();
      		combID 			= $('#dis_prd'+orgProductID).val().toLowerCase().replaceAll(" ","-").replaceAll(".","");
      		combID			=  combID.replaceAll("/","").replaceAll(" ","-").replaceAll(",","").replaceAll("&","and");

      		redURL 			= $("#"+combID).attr('data-detail-url');
      		if(redURL != '') { window.location.href = redURL; }
      	});
      });
      ;
      var load_hero_main_slider =  function()
      {
      	  $('.hero-slider-main').slick({
      		dots: true,
      		infinite: true,
      		speed: 500,
      		arrows: false,
      		slidesToShow: 1,
      		autoplay: false,
      		autoplaySpeed: 4000,
      		fade: true,
      		cssEase: 'linear',
      		nextArrow: '<button class="slick-next" aria-label="Next slide"><svg class="svg svg-slick-right sv-right-arrow" aria-hidden="true" width="24" height="24" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      		prevArrow: '<button class="slick-prev" aria-label="Previous slide"><svg class="svg svg-slick-left sv-right-arrow" width="24" height="24" aria-hidden="true" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      	});
      };

      $('.holiday-trends-button .btn').click(function(){
          $(".holiday-trends-button").toggleClass("active");
      });

      $(window).bind("load", function()
      {
      	load_hero_main_slider();
      	//loadCategoriesSlider('catData_1');
      });

      $(document).ready(function()
      {
      	function progressSlick(Element)
      	{
      		//JSON.stringify(Element);

      		var $slickCount = Element.children().length;
      		var $childrenWidth = Element.children().width();
      		var $slicklength = $childrenWidth * $slickCount;
      		var num = Element.width() / $childrenWidth;

      		//console.log($slickCount+"--"+$childrenWidth+"--"+$slicklength+"--"+num);
      		Element.next().find(".progress-line .progress-bar").css('width', (num / $slickCount) * 100 + '%');
      		Element.scroll(function () {

      			//console.log("2:"+$slickCount+"--"+$childrenWidth+"--"+$slicklength+"--"+num);
      			$(this).next().find(".progress-line .slide_bar").width(($(this).scrollLeft() / $slicklength * 100) + '%');
      		})
      	}

      	//event handlers
      	progressSlick($('.shop-engagement-banners'));
      	progressSlick($('.discover-collection-banners'));
      	progressSlick($('.gift-guide-banners'));
      	progressSlick($('.shape-banners'));

      	/* Shape Slider */
      	//----------------------------
      	$('.shape-slider').slick({
      		dots: false,
      		infinite: false,
      		speed: 800,
      		arrows: true,
      		//cssEase: 'linear',
      		slidesToShow: 11,
      		slidesToScroll: 11,
      		responsive: [
      		{breakpoint: 1025, settings: {slidesToShow: 9, slidesToScroll: 9 } },
      		{breakpoint: 992, settings: {slidesToShow: 8, slidesToScroll: 8 } },
      		{breakpoint: 768, settings: {slidesToShow: 5, slidesToScroll: 5, dots:false} },
      		{breakpoint: 576, settings: {slidesToShow: 4, slidesToScroll: 4, dots:false} },
      		{breakpoint: 375, settings: {slidesToShow: 4, slidesToScroll: 4, dots:false} }
      		],
      		nextArrow: '<button class="slick-next" aria-label="Next slide"><svg class="svg svg-slick-right sv-right-arrow" aria-hidden="true" width="24" height="24" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      		prevArrow: '<button class="slick-prev" aria-label="Previous slide"><svg class="svg svg-slick-left sv-right-arrow" width="24" height="24" aria-hidden="true" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      	});

      	/* TimeLess Pieces Slider */
      	//----------------------------
      	$('.shop-style-sl1').slick({
      		dots: false,
      		infinite: false,
      		speed: 800,
      		arrows: true,
      		slidesToShow: 4,
      		slidesToScroll: 4,
      		responsive: [
      			{breakpoint: 992, settings: {slidesToShow: 4, slidesToScroll: 4 } },
      			{breakpoint: 768, settings: {slidesToShow: 2, slidesToScroll: 2, dots:true, arrows: false} },
      			{breakpoint: 425, settings: {slidesToShow: 2, slidesToScroll: 2, dots:true, arrows: false} }
      		],
      		nextArrow: '<button class="slick-next" aria-label="Next slide"><svg class="svg svg-slick-right sv-right-arrow" aria-hidden="true" width="24" height="24" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      		prevArrow: '<button class="slick-prev" aria-label="Previous slide"><svg class="svg svg-slick-left sv-right-arrow" width="24" height="24" aria-hidden="true" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      	});

      	/* TimeLess Pieces Slider */
      	//----------------------------
      	/*$('.discover-collections').slick({
      		dots: false,
      		infinite: true,
      		speed: 800,
      		arrows: true,
      		centerMode: true,
      		centerPadding: '150px',
      		slidesToShow: 3,
      		slidesToScroll: 1,
      		responsive: [
      		{breakpoint: 1601, settings: {centerPadding: '150px', } },
      		{breakpoint: 1367, settings: {centerPadding: '80px', } },
      		{breakpoint: 992, settings: {slidesToShow: 3,	slidesToScroll: 1,centerPadding: '50px' } },
      		{breakpoint: 768, settings: {slidesToShow: 1,	slidesToScroll: 1, arrows: false,infinite: true, centerMode: true,centerPadding: '50px'} },
      		{breakpoint: 425, settings: {slidesToShow: 1,	slidesToScroll: 1, arrows: false,infinite: true,centerMode: true,centerPadding: '50px'} }
      		],
      		nextArrow: '<button class="slick-next" aria-label="Next slide"><svg class="svg svg-slick-right sv-right-arrow" aria-hidden="true" width="24" height="24" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      		prevArrow: '<button class="slick-prev" aria-label="Previous slide"><svg class="svg svg-slick-left sv-right-arrow" width="24" height="24" aria-hidden="true" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      	});*/

      	/* TimeLess Pieces Slider */
      	//----------------------------
      	$('.shop-style-sl').slick({
      		dots: false,
      		infinite: false,
      		speed: 800,
      		arrows: true,
      		slidesToShow: 4,
      		slidesToScroll: 4,
      		responsive: [
      		{breakpoint: 992, settings: {slidesToShow: 4, initialSlide: 1, slidesToScroll: 4 } },
      		{breakpoint: 768, settings: {slidesToShow: 1, initialSlide: 1, slidesToScroll: 1, arrows: false,infinite: true, centerMode: true,centerPadding: '50px'} },
      		{breakpoint: 425, settings: {slidesToShow: 1, initialSlide: 1, slidesToScroll: 1, arrows: false,infinite: true,centerMode: true,centerPadding: '50px'} }
      		],
      		nextArrow: '<button class="slick-next" aria-label="Next slide"><svg class="svg svg-slick-right sv-right-arrow" aria-hidden="true" width="24" height="24" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      		prevArrow: '<button class="slick-prev" aria-label="Previous slide"><svg class="svg svg-slick-left sv-right-arrow" width="24" height="24" aria-hidden="true" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      	});

      	/* Shop Engagement Rings */
      	//----------------------------
      	$('.shop-style-sl2').slick({
      		dots: false,
      		infinite: false,
      		speed: 800,
      		arrows: true,
      		slidesToShow: 4.5,
      		slidesToScroll: 1,
      		responsive: [
      		{breakpoint: 992, settings: {slidesToShow: 4.5,	slidesToScroll: 1 } },
      		{breakpoint: 768, settings: {slidesToShow: 3,	slidesToScroll: 3, dots:true, arrows: false} },
      		{breakpoint: 425, settings: {slidesToShow: 2,	slidesToScroll: 2, dots:true, arrows: false} }
      		],
      		nextArrow: '<button class="slick-next" aria-label="Next slide"><svg class="svg svg-slick-right sv-right-arrow" aria-hidden="true" width="24" height="24" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      		prevArrow: '<button class="slick-prev" aria-label="Previous slide"><svg class="svg svg-slick-left sv-right-arrow" width="24" height="24" aria-hidden="true" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      	});

      	$('.as-seen-slider').slick({
      		dots: false,
      		infinite: false,
      		speed:800,
      		arrows: true,
      		slidesToShow: 4,
      		slidesToScroll: 1,
      		responsive: [
      			{breakpoint: 768, settings: {slidesToShow: 3,	slidesToScroll: 3, dots:true, arrows: false } }
      		],
      		nextArrow: '<button class="slick-next" aria-label="Next slide"><svg class="svg svg-slick-right sv-right-arrow" aria-hidden="true" width="24" height="24" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      		prevArrow: '<button class="slick-prev" aria-label="Previous slide"><svg class="svg svg-slick-left sv-right-arrow" width="24" height="24" aria-hidden="true" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      	});

      	(()=>{let e=0,l=setInterval((()=>{let r=document.querySelectorAll(".yotpo-display-wrapper.carousel-display-wrapper");r.length>0&&r.forEach((e=>{let r=e.querySelector(".yotpo-num-of-reviews");if(null!==r){let e=r.innerText;r.innerHTML='<a " href="'+SITE_URL+'customer-reviews" tabindex="0">See all '+e+"</a>",clearInterval(l)}})),15===e&&clearInterval(l),e++}),100)})();



      	$(".catHeader").click(function(){

      		$(".catList").addClass('hide-tab');
      		$(".cat_link").addClass('hide-tab');
      		$(".catHeader").removeClass('active');

      		var currentVal 		= '';
      		var currentValSplit = '';
      		var catID			= '';

      		currentVal 		= $(this).attr('id');
      		currentValSplit = currentVal.split('_');
      		catID 			= currentValSplit[1];

      		$("#catTitle_"+catID).addClass('active');
      		$("#catData_"+catID).removeClass('hide-tab');
      		$("#catLink_"+catID).removeClass('hide-tab');

      		//loadCategoriesSlider("catData_"+catID);
      	});
      });

      function loadCategoriesSlider(sliderName)
      {
      	if($('#'+sliderName))
      	{
      		$('#'+sliderName).slick({
      			dots: false,
      			infinite: false,
      			speed: 800,
      			arrows: true,
      			slidesToShow: 4,
      			slidesToScroll: 4,
      			responsive: [
      			{breakpoint: 992, settings: {slidesToShow: 3,	slidesToScroll: 3 } },
      			{breakpoint: 768, settings: {slidesToShow: 1.5,	slidesToScroll: 1, dots:true, arrows: false} },
      			{breakpoint: 425, settings: {slidesToShow: 1.5,	slidesToScroll: 1, dots:true, arrows: false} }
      			],
      			nextArrow: '<button class="slick-next" aria-label="Next slide"><svg class="svg svg-slick-right sv-right-arrow" aria-hidden="true" width="24" height="24" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      			prevArrow: '<button class="slick-prev" aria-label="Previous slide"><svg class="svg svg-slick-left sv-right-arrow" width="24" height="24" aria-hidden="true" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      		});
      	}
      }

      $(document).ready(function()
      {
        $(window).on('load', function(){
          if ($(".home-main-banner").hasClass("active")) {
            $(this).removeClass("active");
          }
        });

      	setTimeout(function() {	$('.banner-load-image').html('');}, 5000);
      	setTimeout(function() {	$('.video-banner-load-image').html('');}, 5000);
      });


       ['click', 'scroll', 'mousemove', 'touchstart'].forEach(function(e) {
      	window.addEventListener(e, loadHeroBannerVideo, { vvonce: true   });
      });

      var vvuserInteracted = false;

      function loadHeroBannerVideo()
      {
      	if (!vvuserInteracted)
      	{
      		vvuserInteracted = true;

      		if($('.hero-banner-vimeo-video').length > 0 )
      		{
      			$('.hero-banner-vimeo-video').each(function()
      			{
      				var vurl = $(this).attr('data-video-url');
      				var ovurl = $(this).attr('src');
      				if(vurl !='' && ovurl =='')
      				{
      					$(this).attr('src', vurl);
      				}
      			});
      		}
      	}
      }
      $(document).ready(function() {
      	$('.discover-collections').slick({
      		dots: false,
      		infinite: false,
      		speed: 800,
      		arrows: true,
      		centerMode: false,
      		slidesToShow: 4,
      		slidesToScroll:2,
      		responsive: [
      		{breakpoint: 1601, settings: {} },
      		{breakpoint: 1367, settings: {} },
      		{breakpoint: 992, settings: {slidesToShow: 4,slidesToScroll: 2} },
      		{breakpoint: 768, settings: {slidesToShow: 1.7,slidesToScroll: 1, arrows: false,infinite: true,centerMode: true,centerPadding: '10px'} },
      		{breakpoint: 425, settings: {slidesToShow: 1.7,slidesToScroll: 1, arrows: false,infinite: true,centerMode: true,centerPadding: '10px'} }
      		],
      		nextArrow: '<button class="slick-next" aria-label="Next Slide"><svg class="svg svg-slick-right sv-right-arrow" aria-hidden="true" width="24" height="24" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      		prevArrow: '<button class="slick-prev" aria-label="Previous Slide"><svg class="svg svg-slick-left sv-right-arrow" width="24" height="24" aria-hidden="true" role="img"><use href="#sv-right-arrow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sv-right-arrow"></use></svg></button>',
      	});
      });
   