function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function c(t,e,n,s,r,o,i){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=a(e,n,s,i);t.p(r,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t){return null==t?"":t}let f,d,h=!1;function p(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function m(t,e){h?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=p(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;s[t]=n[o]+1;const i=o+1;n[i]=t,r=Math.max(i,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function g(t,e,n){h&&!n?m(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function _(){return $(" ")}function E(){return $("")}function S(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function x(t){return function(e){return e.preventDefault(),t.call(this,e)}}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:T(t,s,e[s])}function L(t){return Array.from(t.childNodes)}function I(t,e,n,s,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o))return n(o),t.splice(s,1),r||(t.claim_info.last_index=s),o}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o))return n(o),t.splice(s,1),r?t.claim_info.last_index--:t.claim_info.last_index=s,o}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function N(t,e,n,s){return I(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s?w(e):y(e)))}function P(t,e){return I(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>$(e)),!0)}function R(t){return P(t," ")}function k(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function U(t){const e=k(t,"HTML_TAG_START",0),n=k(t,"HTML_TAG_END",e);if(e===n)return new G;const s=t.splice(e,n+1);return b(s[0]),b(s[s.length-1]),new G(s.slice(1,s.length-1))}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e){t.value=null==e?"":e}function H(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function M(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=H();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=S(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=S(n.contentWindow,"resize",e)}),m(t,n),()=>{(s||r&&n.contentWindow)&&r(),b(n)}}function j(t,e=document.body){return Array.from(e.querySelectorAll(t))}class G{constructor(t){this.e=this.n=null,this.l=t}m(t,e,n=null){this.e||(this.e=y(e.nodeName),this.t=e,this.l?this.n=this.l:this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)g(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(b)}}function D(t){d=t}function q(){if(!d)throw new Error("Function called outside component initialization");return d}function B(t){q().$$.on_mount.push(t)}function z(t){q().$$.after_update.push(t)}function K(t){q().$$.on_destroy.push(t)}const V=[],J=[],F=[],W=[],Y=Promise.resolve();let Q=!1;function X(t){F.push(t)}let Z=!1;const tt=new Set;function et(){if(!Z){Z=!0;do{for(let t=0;t<V.length;t+=1){const e=V[t];D(e),nt(e.$$)}for(D(null),V.length=0;J.length;)J.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];tt.has(e)||(tt.add(e),e())}F.length=0}while(V.length);for(;W.length;)W.pop()();Q=!1,Z=!1,tt.clear()}}function nt(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const st=new Set;let rt;function ot(){rt={r:0,c:[],p:rt}}function it(){rt.r||r(rt.c),rt=rt.p}function at(t,e){t&&t.i&&(st.delete(t),t.i(e))}function ct(t,e,n,s){if(t&&t.o){if(st.has(t))return;st.add(t),rt.c.push((()=>{st.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function lt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ut(t){return"object"==typeof t&&null!==t?t:{}}function ft(t){t&&t.c()}function dt(t,e){t&&t.l(e)}function ht(t,e,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),i||X((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(X)}function pt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(V.push(t),Q||(Q=!0,Y.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(e,n,o,i,a,c,l=[-1]){const u=d;D(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&mt(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){h=!0;const t=L(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&at(e.$$.fragment),ht(e,n.target,n.anchor,n.customElement),h=!1,et()}D(u)}class bt{$destroy(){pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const vt=[];function yt(e,n=t){let s;const r=[];function o(t){if(i(e,t)&&(e=t,s)){const t=!vt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),vt.push(n,e)}if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.push(c),1===r.length&&(s=n(o)||t),i(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const wt={};var $t={owner:"littlekud",repo:"sites-status",assignees:["taoky"],sites:[{name:"USTC",url:"https://www.ustc.edu.cn"},{name:"Homepage",url:"https://taoky.moe"},{name:"Static files of taoky.moe",url:"https://static.taoky.moe"},{name:"USTCLUG",url:"https://lug.ustc.edu.cn"},{name:"USTC Mirrors",url:"https://mirrors.ustc.edu.cn"},{name:"LUG GitLab",url:"https://git.lug.ustc.edu.cn"},{name:"LUG FTP",url:"https://ftp.lug.ustc.edu.cn"},{name:"proxy.ustclug.org",url:"https://openwrt.proxy.ustclug.org"},{name:"USTC Vlab",url:"https://vlab.ustc.edu.cn"}],"status-website":{cname:"status.taoky.moe",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Is the sites down today?",introTitle:"**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"Hello, world!",navbar:[{title:"Status",href:"/"}]},path:"https://status.taoky.moe",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function _t(t,e,n){const s=t.slice();return s[1]=e[n],s}function Et(e){let n,s,r,o=$t["status-website"]&&!$t["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=y("img"),this.h()},l(t){n=N(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){T(n,"alt",""),n.src!==(s=$t["status-website"].logoUrl)&&T(n,"src",s),T(n,"class","svelte-a08hsz")},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}(),i=$t["status-website"]&&!$t["status-website"].hideNavTitle&&function(e){let n,s,r=$t["status-website"].name+"";return{c(){n=y("div"),s=$(r)},l(t){n=N(t,"DIV",{});var e=L(n);s=P(e,r),e.forEach(b)},m(t,e){g(t,n,e),m(n,s)},p:t,d(t){t&&b(n)}}}();return{c(){n=y("div"),s=y("a"),o&&o.c(),r=_(),i&&i.c(),this.h()},l(t){n=N(t,"DIV",{});var e=L(n);s=N(e,"A",{href:!0,class:!0});var a=L(s);o&&o.l(a),r=R(a),i&&i.l(a),a.forEach(b),e.forEach(b),this.h()},h(){T(s,"href",$t["status-website"].logoHref||$t.path),T(s,"class","logo svelte-a08hsz")},m(t,e){g(t,n,e),m(n,s),o&&o.m(s,null),m(s,r),i&&i.m(s,null)},p(t,e){$t["status-website"]&&!$t["status-website"].hideNavLogo&&o.p(t,e),$t["status-website"]&&!$t["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&b(n),o&&o.d(),i&&i.d()}}}function St(t){let e,n,s,r,o,i=t[1].title+"";return{c(){e=y("li"),n=y("a"),s=$(i),o=_(),this.h()},l(t){e=N(t,"LI",{});var r=L(e);n=N(r,"A",{"aria-current":!0,href:!0,class:!0});var a=L(n);s=P(a,i),a.forEach(b),o=R(r),r.forEach(b),this.h()},h(){T(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),T(n,"href",t[1].href.replace("$OWNER",$t.owner).replace("$REPO",$t.repo)),T(n,"class","svelte-a08hsz")},m(t,r){g(t,e,r),m(e,n),m(n,s),m(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&T(n,"aria-current",r)},d(t){t&&b(e)}}}function xt(e){let n,s,r,o,i,a=$t["status-website"]&&$t["status-website"].logoUrl&&Et(),c=$t["status-website"]&&$t["status-website"].navbar&&function(t){let e,n=$t["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=St(_t(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);g(t,e,n)},p(t,r){if(1&r){let o;for(n=$t["status-website"].navbar,o=0;o<n.length;o+=1){const i=_t(t,n,o);s[o]?s[o].p(i,r):(s[o]=St(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){v(s,t),t&&b(e)}}}(e),l=$t["status-website"]&&$t["status-website"].navbarGitHub&&!$t["status-website"].navbar&&function(e){let n,s,r,o=$t.i18n.navGitHub+"";return{c(){n=y("li"),s=y("a"),r=$(o),this.h()},l(t){n=N(t,"LI",{});var e=L(n);s=N(e,"A",{href:!0,class:!0});var i=L(s);r=P(i,o),i.forEach(b),e.forEach(b),this.h()},h(){T(s,"href",`https://github.com/${$t.owner}/${$t.repo}`),T(s,"class","svelte-a08hsz")},m(t,e){g(t,n,e),m(n,s),m(s,r)},p:t,d(t){t&&b(n)}}}();return{c(){n=y("nav"),s=y("div"),a&&a.c(),r=_(),o=y("ul"),c&&c.c(),i=_(),l&&l.c(),this.h()},l(t){n=N(t,"NAV",{class:!0});var e=L(n);s=N(e,"DIV",{class:!0});var u=L(s);a&&a.l(u),r=R(u),o=N(u,"UL",{class:!0});var f=L(o);c&&c.l(f),i=R(f),l&&l.l(f),f.forEach(b),u.forEach(b),e.forEach(b),this.h()},h(){T(o,"class","svelte-a08hsz"),T(s,"class","container svelte-a08hsz"),T(n,"class","svelte-a08hsz")},m(t,e){g(t,n,e),m(n,s),a&&a.m(s,null),m(s,r),m(s,o),c&&c.m(o,null),m(o,i),l&&l.m(o,null)},p(t,[e]){$t["status-website"]&&$t["status-website"].logoUrl&&a.p(t,e),$t["status-website"]&&$t["status-website"].navbar&&c.p(t,e),$t["status-website"]&&$t["status-website"].navbarGitHub&&!$t["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&b(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Tt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class At extends bt{constructor(t){super(),gt(this,t,Tt,xt,i,{segment:0})}}var Lt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function It(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Nt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pt(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Lt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+It(Nt(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Pt(It(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Nt(r[8])+'" alt="'+Nt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Nt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Pt(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Nt(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Rt(t,e,n){const s=t.slice();return s[3]=e[n],s}function kt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ut(t,e,n){const s=t.slice();return s[8]=e[n],s}function Ot(e){let n;return{c(){n=y("link"),this.h()},l(t){n=N(t,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",`${$t.path}/themes/${($t["status-website"]||{}).theme||"light"}.css`)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Ct(e){let n;return{c(){n=y("link"),this.h()},l(t){n=N(t,"LINK",{rel:!0,href:!0}),this.h()},h(){T(n,"rel","stylesheet"),T(n,"href",($t["status-website"]||{}).themeUrl)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Ht(e){let n,s;return{c(){n=y("script"),this.h()},l(t){n=N(t,"SCRIPT",{src:!0}),L(n).forEach(b),this.h()},h(){n.src!==(s=e[8].src)&&T(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Mt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=N(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){T(n,"rel",e[3].rel),T(n,"href",e[3].href),T(n,"media",e[3].media)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function jt(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=N(t,"META",{name:!0,content:!0}),this.h()},h(){T(n,"name",e[3].name),T(n,"content",e[3].content)},m(t,e){g(t,n,e)},p:t,d(t){t&&b(n)}}}function Gt(e){let n,s,r,o,i,l,u,f,d,h,p,w,$,S,x,A,I,P,k=Pt($t.i18n.footer.replace(/\$REPO/,`https://github.com/${$t.owner}/${$t.repo}`))+"",O=($t["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=($t["status-website"]||{}).customHeadHtml+"";return{c(){n=new G,s=E(),this.h()},l(t){n=U(t),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),g(t,s,e)},p:t,d(t){t&&b(s),t&&n.d()}}}();let C=(($t["status-website"]||{}).themeUrl?Ct:Ot)(e),H=($t["status-website"]||{}).scripts&&function(t){let e,n=($t["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ht(Ut(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);g(t,e,n)},p(t,r){if(0&r){let o;for(n=($t["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Ut(t,n,o);s[o]?s[o].p(i,r):(s[o]=Ht(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){v(s,t),t&&b(e)}}}(e),M=($t["status-website"]||{}).links&&function(t){let e,n=($t["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Mt(kt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);g(t,e,n)},p(t,r){if(0&r){let o;for(n=($t["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=kt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Mt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){v(s,t),t&&b(e)}}}(e),D=($t["status-website"]||{}).metaTags&&function(t){let e,n=($t["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=jt(Rt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=E()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=E()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);g(t,e,n)},p(t,r){if(0&r){let o;for(n=($t["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Rt(t,n,o);s[o]?s[o].p(i,r):(s[o]=jt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){v(s,t),t&&b(e)}}}(e),q=$t["status-website"].css&&function(e){let n,s,r=`<style>${$t["status-website"].css}</style>`;return{c(){n=new G,s=E(),this.h()},l(t){n=U(t),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),g(t,s,e)},p:t,d(t){t&&b(s),t&&n.d()}}}(),B=$t["status-website"].js&&function(e){let n,s,r=`<script>${$t["status-website"].js}<\/script>`;return{c(){n=new G,s=E(),this.h()},l(t){n=U(t),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),g(t,s,e)},p:t,d(t){t&&b(s),t&&n.d()}}}(),z=($t["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=($t["status-website"]||{}).customBodyHtml+"";return{c(){n=new G,s=E(),this.h()},l(t){n=U(t),s=E(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),g(t,s,e)},p:t,d(t){t&&b(s),t&&n.d()}}}();w=new At({props:{segment:e[0]}});const K=e[2].default,V=function(t,e,n,s){if(t){const r=a(t,e,n,s);return t[0](r)}}(K,e,e[1],null);return{c(){O&&O.c(),n=E(),C.c(),s=y("link"),r=y("link"),o=y("link"),H&&H.c(),i=E(),M&&M.c(),l=E(),D&&D.c(),u=E(),q&&q.c(),f=E(),B&&B.c(),d=E(),h=_(),z&&z.c(),p=_(),ft(w.$$.fragment),$=_(),S=y("main"),V&&V.c(),x=_(),A=y("footer"),I=y("p"),this.h()},l(t){const e=j('[data-svelte="svelte-ri9y7q"]',document.head);O&&O.l(e),n=E(),C.l(e),s=N(e,"LINK",{rel:!0,href:!0}),r=N(e,"LINK",{rel:!0,type:!0,href:!0}),o=N(e,"LINK",{rel:!0,type:!0,href:!0}),H&&H.l(e),i=E(),M&&M.l(e),l=E(),D&&D.l(e),u=E(),q&&q.l(e),f=E(),B&&B.l(e),d=E(),e.forEach(b),h=R(t),z&&z.l(t),p=R(t),dt(w.$$.fragment,t),$=R(t),S=N(t,"MAIN",{class:!0});var a=L(S);V&&V.l(a),a.forEach(b),x=R(t),A=N(t,"FOOTER",{class:!0});var c=L(A);I=N(c,"P",{}),L(I).forEach(b),c.forEach(b),this.h()},h(){T(s,"rel","stylesheet"),T(s,"href",`${$t.path}/global.css`),T(r,"rel","icon"),T(r,"type","image/svg"),T(r,"href",($t["status-website"]||{}).faviconSvg||($t["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),T(o,"rel","icon"),T(o,"type","image/png"),T(o,"href",($t["status-website"]||{}).favicon||"/logo-192.png"),T(S,"class","container"),T(A,"class","svelte-jbr799")},m(t,e){O&&O.m(document.head,null),m(document.head,n),C.m(document.head,null),m(document.head,s),m(document.head,r),m(document.head,o),H&&H.m(document.head,null),m(document.head,i),M&&M.m(document.head,null),m(document.head,l),D&&D.m(document.head,null),m(document.head,u),q&&q.m(document.head,null),m(document.head,f),B&&B.m(document.head,null),m(document.head,d),g(t,h,e),z&&z.m(t,e),g(t,p,e),ht(w,t,e),g(t,$,e),g(t,S,e),V&&V.m(S,null),g(t,x,e),g(t,A,e),m(A,I),I.innerHTML=k,P=!0},p(t,[e]){($t["status-website"]||{}).customHeadHtml&&O.p(t,e),C.p(t,e),($t["status-website"]||{}).scripts&&H.p(t,e),($t["status-website"]||{}).links&&M.p(t,e),($t["status-website"]||{}).metaTags&&D.p(t,e),$t["status-website"].css&&q.p(t,e),$t["status-website"].js&&B.p(t,e),($t["status-website"]||{}).customBodyHtml&&z.p(t,e);const n={};1&e&&(n.segment=t[0]),w.$set(n),V&&V.p&&(!P||2&e)&&c(V,K,t,t[1],P?e:-1,null,null)},i(t){P||(at(w.$$.fragment,t),at(V,t),P=!0)},o(t){ct(w.$$.fragment,t),ct(V,t),P=!1},d(t){O&&O.d(t),b(n),C.d(t),b(s),b(r),b(o),H&&H.d(t),b(i),M&&M.d(t),b(l),D&&D.d(t),b(u),q&&q.d(t),b(f),B&&B.d(t),b(d),t&&b(h),z&&z.d(t),t&&b(p),pt(w,t),t&&b($),t&&b(S),V&&V.d(t),t&&b(x),t&&b(A)}}}function Dt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class qt extends bt{constructor(t){super(),gt(this,t,Dt,Gt,i,{segment:0})}}function Bt(t){let e,n,s=t[1].stack+"";return{c(){e=y("pre"),n=$(s)},l(t){e=N(t,"PRE",{});var r=L(e);n=P(r,s),r.forEach(b)},m(t,s){g(t,e,s),m(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&O(n,s)},d(t){t&&b(e)}}}function zt(e){let n,s,r,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Bt(e);return{c(){s=_(),r=y("h1"),o=$(e[0]),i=_(),a=y("p"),c=$(f),l=_(),d&&d.c(),u=E(),this.h()},l(t){j('[data-svelte="svelte-1moakz"]',document.head).forEach(b),s=R(t),r=N(t,"H1",{class:!0});var n=L(r);o=P(n,e[0]),n.forEach(b),i=R(t),a=N(t,"P",{class:!0});var h=L(a);c=P(h,f),h.forEach(b),l=R(t),d&&d.l(t),u=E(),this.h()},h(){T(r,"class","svelte-17w3omn"),T(a,"class","svelte-17w3omn")},m(t,e){g(t,s,e),g(t,r,e),m(r,o),g(t,i,e),g(t,a,e),m(a,c),g(t,l,e),d&&d.m(t,e),g(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&O(o,t[0]),2&e&&f!==(f=t[1].message+"")&&O(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Bt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&b(s),t&&b(r),t&&b(i),t&&b(a),t&&b(l),d&&d.d(t),t&&b(u)}}}function Kt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Vt extends bt{constructor(t){super(),gt(this,t,Kt,zt,i,{status:0,error:1})}}function Jt(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ft(n.$$.fragment),s=E()},l(t){n&&dt(n.$$.fragment,t),s=E()},m(t,e){n&&ht(n,t,e),g(t,s,e),r=!0},p(t,e){const r=16&e?lt(o,[ut(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ot();const t=n;ct(t.$$.fragment,1,0,(()=>{pt(t,1)})),it()}i?(n=new i(a()),ft(n.$$.fragment),at(n.$$.fragment,1),ht(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&at(n.$$.fragment,t),r=!0)},o(t){n&&ct(n.$$.fragment,t),r=!1},d(t){t&&b(s),n&&pt(n,t)}}}function Ft(t){let e,n;return e=new Vt({props:{error:t[0],status:t[1]}}),{c(){ft(e.$$.fragment)},l(t){dt(e.$$.fragment,t)},m(t,s){ht(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(at(e.$$.fragment,t),n=!0)},o(t){ct(e.$$.fragment,t),n=!1},d(t){pt(e,t)}}}function Wt(t){let e,n,s,r;const o=[Ft,Jt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=E()},l(t){n.l(t),s=E()},m(t,n){i[e].m(t,n),g(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(ot(),ct(i[c],1,1,(()=>{i[c]=null})),it(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),at(n,1),n.m(s.parentNode,s))},i(t){r||(at(n),r=!0)},o(t){ct(n),r=!1},d(t){i[e].d(t),t&&b(s)}}}function Yt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Wt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new qt({props:o}),{c(){ft(n.$$.fragment)},l(t){dt(n.$$.fragment,t)},m(t,e){ht(n,t,e),s=!0},p(t,[e]){const s=12&e?lt(r,[4&e&&{segment:t[2][0]},8&e&&ut(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(at(n.$$.fragment,t),s=!0)},o(t){ct(n.$$.fragment,t),s=!1},d(t){pt(n,t)}}}function Qt(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return z(l),u=wt,f=s,q().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class Xt extends bt{constructor(t){super(),gt(this,t,Qt,Yt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Zt=[],te=[{js:()=>Promise.all([import("./index.fd4147a1.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.fbb8c7ca.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].8863d8df.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].c1b64a3b.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.dc3720be.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ee=(ne=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ne(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ne(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ne;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function se(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function re(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let oe,ie=1;const ae="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ce={};let le,ue;function fe(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function de(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(le))return null;let e=t.pathname.slice(le.length);if(""===e&&(e="/"),!Zt.some((t=>t.test(e))))for(let n=0;n<ee.length;n+=1){const s=ee[n],r=s.pattern.exec(e);if(r){const n=fe(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function he(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=re(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=de(r);if(o){ge(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),ae.pushState({id:oe},"",r.href)}}function pe(){return{x:pageXOffset,y:pageYOffset}}function me(t){if(ce[oe]=pe(),t.state){const e=de(new URL(location.href));e?ge(e,t.state.id):location.href=location.href}else!function(t){ie=t}(ie+1),function(t){oe=t}(ie),ae.replaceState({id:oe},"",location.href)}function ge(t,e,n,s){return se(this,void 0,void 0,(function*(){const r=!!e;if(r)oe=e;else{const t=pe();ce[oe]=t,oe=e=++ie,ce[oe]=n?t:{x:0,y:0}}if(yield ue(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ce[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ce[oe]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function be(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let ve,ye=null;function we(t){const e=re(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=de(new URL(t,be(document)));if(e)ye&&t===ye.href||(ye={href:t,promise:He(e)}),ye.promise}(e.href)}function $e(t){clearTimeout(ve),ve=setTimeout((()=>{we(t)}),20)}function _e(t,e={noscroll:!1,replaceState:!1}){const n=de(new URL(t,be(document)));if(n){const s=ge(n,null,e.noscroll);return ae[e.replaceState?"replaceState":"pushState"]({id:oe},"",t),s}return location.href=t,new Promise((()=>{}))}const Ee="undefined"!=typeof __SAPPER__&&__SAPPER__;let Se,xe,Te,Ae=!1,Le=[],Ie="{}";const Ne={page:function(t){const e=yt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:yt(null),session:yt(Ee&&Ee.session)};let Pe,Re,ke;function Ue(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Oe(t){return se(this,void 0,void 0,(function*(){Se&&Ne.preloading.set(!0);const e=function(t){return ye&&ye.href===t.href?ye.promise:He(t)}(t),n=xe={},s=yield e,{redirect:r}=s;if(n===xe)if(r)yield _e(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Ce(n,e,Ue(e,t.page))}}))}function Ce(t,e,n){return se(this,void 0,void 0,(function*(){Ne.page.set(n),Ne.preloading.set(!1),Se?Se.$set(e):(e.stores={page:{subscribe:Ne.page.subscribe},preloading:{subscribe:Ne.preloading.subscribe},session:Ne.session},e.level0={props:yield Te},e.notify=Ne.page.notify,Se=new Xt({target:ke,props:e,hydrate:!0})),Le=t,Ie=JSON.stringify(n.query),Ae=!0,Re=!1}))}function He(t){return se(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Te){const t=()=>({});Te=Ee.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Pe)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>se(this,void 0,void 0,(function*(){const f=s[a];if(function(t,e,n,s){if(s!==Ie)return!0;const r=Le[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:f};const d=c++;let h;if(Re||u||!Le[a]||Le[a].part!==e.i){u=!1;const{default:s,preload:r}=yield te[e.i].js();let o;o=Ae||!Ee.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Pe):{}:Ee.preloaded[a+1],h={component:s,props:o,segment:f,match:l,part:e.i}}else h=Le[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Me,je,Ge;Ne.session.subscribe((t=>se(void 0,void 0,void 0,(function*(){if(Pe=t,!Ae)return;Re=!0;const e=de(new URL(location.href)),n=xe={},{redirect:s,props:r,branch:o}=yield He(e);n===xe&&(s?yield _e(s.location,{replaceState:!0}):yield Ce(o,r,Ue(r,e.page)))})))),Me={target:document.querySelector("#sapper")},je=Me.target,ke=je,Ge=Ee.baseUrl,le=Ge,ue=Oe,"scrollRestoration"in ae&&(ae.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ae.scrollRestoration="auto"})),addEventListener("load",(()=>{ae.scrollRestoration="manual"})),addEventListener("click",he),addEventListener("popstate",me),addEventListener("touchstart",we),addEventListener("mousemove",$e),Ee.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Ee;Te||(Te=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:Te},level1:{props:{status:o,error:i},component:Vt},segments:r},c=fe(n);Ce([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ae.replaceState({id:ie},"",e);const n=de(new URL(location.href));if(n)return ge(n,ie,!0,t)}));export{pt as A,S as B,r as C,J as D,U as E,u as F,j as G,G as H,Pt as I,w as J,_e as K,C as L,x as M,e as N,A as O,lt as P,z as Q,K as R,bt as S,l as T,ut as U,X as V,M as W,L as a,P as b,N as c,b as d,y as e,T as f,g,m as h,gt as i,_ as j,R as k,ot as l,ct as m,t as n,it as o,at as p,B as q,$t as r,i as s,$ as t,O as u,E as v,v as w,ft as x,dt as y,ht as z};

import __inject_styles from './inject_styles.5607aec6.js';