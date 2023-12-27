"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{7086:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(5861),o=t(9439),i=t(4687),a=t.n(i),c=t(2791),u=t(1087),s=t(340);function l(){return(l=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:e,include_adult:"false",language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlY2IwZTM1N2IwNzY4OTc3M2U3N2E2ZjY2ODNkNiIsInN1YiI6IjY1NDM2YjMwZTFhZDc5MDEyYzkxMWMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nNMftaRxeM-ZOVuw351-nkshf1rZNko2qstg9NtH3yg"}},n.prev=1,n.next=4,(0,s.Z)(t);case 4:return r=n.sent,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}var d,p=function(n){return l.apply(this,arguments)},f=t(1209),h=t(168),x=t(9549).Z.form(d||(d=(0,h.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  input {\n    padding-left: 10px;\n    font: inherit;\n    font-size: 18px;\n    color: #ddd6d6;\n    border-radius: 5px;\n    width: 400px;\n    height: 40px;\n    border: none;\n    background-color: rgba(205, 214, 219, 0.2);\n    ::placeholder {\n      padding-left: 10px;\n      font: inherit;\n      font-size: 18px;\n      color: #ddd6d6;\n    }\n    :focus,\n    :hover {\n      outline: none;\n    }\n  }\n  button {\n    color: #ddd6d6;\n    position: absolute;\n    left: 1135px;\n    height: 40px;\n    outline: none;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    background-color: rgba(205, 214, 219, 0);\n    cursor: pointer;\n\n    :hover {\n      transform: scale(1.5);\n      color: white;\n      opacity: 1;\n    }\n  }\n"]))),g=t(9126),b=t(184),m=function(n){var e,t=n.onSubmit,r=(0,c.useState)(""),i=(0,o.Z)(r,2),a=i[0],s=i[1],l=(0,u.lr)(),d=(0,o.Z)(l,2),p=d[0],f=d[1],h=null!==(e=p.get("query"))&&void 0!==e?e:"";return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(x,{onSubmit:function(n){n.preventDefault(),t(a),f({query:a})},children:[(0,b.jsx)("input",{type:"text",value:h,onChange:function(n){var e=n.target.value;if(""===e)return f({});f({query:e}),s(e)},placeholder:"Search movie "}),(0,b.jsx)("button",{type:"submit",children:(0,b.jsx)(g.dVI,{})})]})})},v=function(){var n=(0,c.useState)([]),e=(0,o.Z)(n,2),t=e[0],i=e[1],s=(0,c.useState)(""),l=(0,o.Z)(s,2),d=l[0],h=l[1],x=(0,u.lr)(),g=(0,o.Z)(x,1)[0],v=(0,c.useCallback)((0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,p(d);case 5:if(0!==(e=n.sent).data.total_results){n.next=8;break}return n.abrupt("return",alert("Sorry, we didn't find any results for ".concat(d,".")));case 8:i(e.data.results),n.next=14;break;case 11:throw n.prev=11,n.t0=n.catch(2),n.t0;case 14:case"end":return n.stop()}}),n,null,[[2,11]])}))),[d]);(0,c.useEffect)((function(){var n=g.get("query")||"";h(n)}),[g]),(0,c.useEffect)((function(){d&&v()}),[d,v]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{onSubmit:function(n){d!==n&&h(n)}}),(0,b.jsx)(f.Z,{movies:t})]})}},1209:function(n,e,t){t.d(e,{Z:function(){return p}});var r,o,i=t(7689),a=t(168),c=t(9549),u=c.Z.section(r||(r=(0,a.Z)(["\n  margin: 20px 0;\n  display: inline-flexbox;\n  justify-content: center;\n  text-align: center;\n\n  ul {\n    margin-left: 560px;\n    width: 800px;\n    border-radius: 5px;\n    background-color: rgba(205, 214, 219, 0.2);\n    list-style: none;\n    padding: 0;\n  }\n\n  li {\n    font-size: 16px;\n    padding: 10px;\n    margin: 5px 0;\n    color: #cfcaca;\n\n    cursor: pointer;\n    transition: background-color 0.3s;\n    :hover {\n      background-color: rgba(205, 214, 219, 0.2);\n    }\n  }\n"]))),s=t(1087),l=(0,c.Z)(s.OL)(o||(o=(0,a.Z)(["\n  text-decoration: none;\n"]))),d=t(184),p=function(n){var e=n.movies,t=(0,i.TH)(),r=e.filter((function(n){return n.title}));return(0,d.jsx)(u,{children:(0,d.jsx)("ul",{children:r.map((function(n){return(0,d.jsx)(l,{to:"/movies/".concat(n.id),state:{from:t},children:(0,d.jsx)("li",{id:n.id,children:n.title})},n.id)}))})})}}}]);
//# sourceMappingURL=86.1fb1f077.chunk.js.map