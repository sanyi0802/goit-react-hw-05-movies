"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(861),c=e(439),u=e(757),a=e.n(u),o=e(791),s=e(87),i=e(390),f=e(184),p=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],u=t[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.wr)();case 2:t=n.sent,u(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)("div",{className:"home-container",children:[(0,f.jsx)("h1",{children:"Trending Today"}),(0,f.jsx)("ul",{children:e.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},390:function(n,t,e){e.d(t,{Hx:function(){return p},Y5:function(){return i},wr:function(){return s},xc:function(){return f},z1:function(){return v}});var r=e(861),c=e(757),u=e.n(c),a="5c5e0fb3bd93237658e0e48819bd474e",o="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(a,"&query=").concat(encodeURIComponent(t)));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},861:function(n,t,e){function r(n,t,e,r,c,u,a){try{var o=n[u](a),s=o.value}catch(i){return void e(i)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function o(n){r(a,c,u,o,s,"next",n)}function s(n){r(a,c,u,o,s,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=134.2158d095.chunk.js.map