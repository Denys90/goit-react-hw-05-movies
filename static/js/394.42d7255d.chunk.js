"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[394],{394:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(433),a=n(861),u=n(439),c=n(757),i=n.n(c),s=n(791),o=n(340);function l(){return(l=(0,a.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:t,include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlY2IwZTM1N2IwNzY4OTc3M2U3N2E2ZjY2ODNkNiIsInN1YiI6IjY1NDM2YjMwZTFhZDc5MDEyYzkxMWMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nNMftaRxeM-ZOVuw351-nkshf1rZNko2qstg9NtH3yg"}},e.prev=1,e.next=4,(0,o.Z)(n);case 4:return r=e.sent,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}var h=function(e){return l.apply(this,arguments)},f=n(184),p=function(e){var t=e.onSubmit,n=(0,s.useState)(""),r=(0,u.Z)(n,2),a=r[0],c=r[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(a),c("")},children:[(0,f.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)},placeholder:"Search movie "}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},m=n(689),d=n(87),v=function(e){var t=e.movies,n=(0,m.TH)();return(0,f.jsx)("ul",{children:t&&t.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(d.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})},x=function(){var e=(0,s.useState)(""),t=(0,u.Z)(e,2),n=t[0],c=t[1],o=(0,s.useState)([]),l=(0,u.Z)(o,2),m=l[0],d=l[1],x=(0,s.useCallback)((0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,h(n);case 5:t=e.sent,d((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t.data.results))})),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),[n]);(0,s.useEffect)((function(){n&&x()}),[n,x]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onSubmit:function(e){n!==e&&c(e)}}),(0,f.jsx)(v,{movies:m})]})},j=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(x,{})})}}}]);
//# sourceMappingURL=394.42d7255d.chunk.js.map