(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{35:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o}));var c=n(23),r=function(t){return t.contacts.items},a=function(t){return t.contacts.filter},o=Object(c.a)([r,a],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l}));var c=n(15),r=n.n(c),a=n(19),o=n(12),i=n.n(o),u=n(4);i.a.defaults.baseURL="http://localhost:4040";var s=function(t,e){return function(n){var c={name:t,number:e};n(u.b),i.a.post("/contacts",c).then((function(t){var e=t.data;return n(Object(u.c)(e))})).catch((function(t){return n(Object(u.a)(t))}))}},l=function(t){return function(e){e(Object(u.f)()),i.a.delete("/contacts/".concat(t)).then((function(){return e(Object(u.g)(t))})).catch((function(t){return e(Object(u.e)(t))}))}};e.b={fetchContacts:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(u.i)()),t.prev=1,t.next=4,i.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(u.j)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(u.h)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:s,deleteContact:l}},4:function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return b})),n.d(e,"e",(function(){return d})),n.d(e,"d",(function(){return j}));var c=n(3),r=Object(c.b)("contacts/fetchcontactsRequest"),a=Object(c.b)("contacts/fetchcontactsSuccess"),o=Object(c.b)("contacts/fetchContactsError"),i=Object(c.b)("contacts/addContactRequest"),u=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),l=Object(c.b)("contacts/deleteContactRequest"),b=Object(c.b)("contacts/deleteContactSuccess"),d=Object(c.b)("contacts/deleteContactError"),j=Object(c.b)("contacs/changeFilter")},46:function(t,e,n){"use strict";n.d(e,"a",(function(){return a.b})),n.d(e,"b",(function(){return h}));var c,r,a=n(37),o=(n(35),n(4)),i=n(6),u=n(27),s=n(7),l=n(3),b=Object(l.d)([],(c={},Object(i.a)(c,o.j,(function(t,e){return e.payload})),Object(i.a)(c,o.c,(function(t,e){return[e.payload].concat(Object(u.a)(t))})),Object(i.a)(c,o.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),d=Object(l.d)("",Object(i.a)({},o.d,(function(t,e){return e.payload}))),j=Object(l.d)(!1,(r={},Object(i.a)(r,o.b,(function(){return!0})),Object(i.a)(r,o.c,(function(){return!1})),Object(i.a)(r,o.a,(function(){return!1})),Object(i.a)(r,o.i,(function(){return!0})),Object(i.a)(r,o.j,(function(){return!1})),Object(i.a)(r,o.h,(function(){return!1})),Object(i.a)(r,o.f,(function(){return!0})),Object(i.a)(r,o.g,(function(){return!1})),Object(i.a)(r,o.e,(function(){return!1})),r)),f=Object(l.d)(null,{}),h=Object(s.c)({items:b,filter:d,loading:j,error:f})},88:function(t,e,n){},89:function(t,e,n){},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return p}));var c=n(15),r=n.n(c),a=n(19),o=n(12),i=n.n(o),u=n(3);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var s,l=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){i.a.defaults.headers.common.Authorization=""},d=Object(u.c)("/users/signup",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/signup",e);case 3:return n=t.sent,c=n.data,l(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),j=Object(u.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/login",e);case 3:return n=t.sent,c=n.data,l(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f={register:d,logOut:Object(u.c)("auth/logout",Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/users/logout");case 3:b(),t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))),logIn:j,fetchCurrentUser:Object(u.c)("auth/refresh",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,o,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),t.abrupt("return",n.rejectWithValue());case 5:return l(a),t.prev=6,t.next=9,i.a.get("/users/current");case 9:return o=t.sent,u=o.data,t.abrupt("return",u);case 14:t.prev=14,t.t0=t.catch(6);case 16:case"end":return t.stop()}}),t,null,[[6,14]])})));return function(e,n){return t.apply(this,arguments)}}())},h={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUsername:function(t){return t.auth.user.name},getIsFetchingCurrent:function(t){return t.auth.isFetchingCurrentUser}},O=n(6),p=Object(u.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(s={},Object(O.a)(s,f.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(O.a)(s,f.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(O.a)(s,f.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(O.a)(s,f.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0})),s)}).reducer},90:function(t,e,n){},92:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),a=n.n(r),o=n(20),i=n.n(o),u=n(8),s=n(17),l=n(49),b=n(27),d=n(3),j=n(18),f=n(50),h=n.n(f),O=n(46),p=n(9),g=n(51),v=n.n(g),x=[].concat(Object(b.a)(Object(d.f)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[v.a]),k={key:"auth",storage:h.a,whitelist:["token"]},m=Object(d.a)({reducer:{auth:Object(j.g)(k,p.b),contacts:O.b},middleware:x,devTools:!1}),y=Object(j.h)(m),C=(n(87),n(88),n(89),n(90),function(t){var e=t.children;return Object(c.jsx)("div",{className:"container",children:e})}),L={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"pink",fontSize:20},activeLink:{color:"purple"}},I=function(){return Object(c.jsxs)("nav",{children:[Object(c.jsx)(s.b,{to:"/",exact:!0,style:L.link,activeStyle:L.activeLink,children:"\u2302 Homepage"}),Object(c.jsx)(s.b,{to:"/contacts",exact:!0,style:L.link,activeStyle:L.activeLink,children:"Contacts"})]})},w=n.p+"static/media/avatar.277c05cc.png",S={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12,color:"purple"},button:{backgroundColor:"#ffb6c1",color:"purple",padding:12,border:"none",borderRadius:"4px",cursor:"pointer"}};function z(){var t=Object(u.b)(),e=Object(u.c)(p.c.getUsername),n=w;return Object(c.jsxs)("div",{style:S.container,children:[Object(c.jsx)("img",{src:n,alt:"",width:"32",style:S.avatar}),Object(c.jsxs)("span",{style:S.name,children:["Welcome, ",e]}),Object(c.jsx)("button",{type:"button",style:S.button,onClick:function(){return t(p.a.logOut())},children:"Logout"})]})}var R={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,fontSize:20,color:"pink"},activeLink:{color:"purple"}};function T(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(s.b,{to:"/register",exact:!0,style:R.link,activeStyle:R.activeLink,children:"Signup"}),Object(c.jsx)(s.b,{to:"/login",exact:!0,style:R.link,activeStyle:R.activeLink,children:"Login"})]})}var F={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function U(){var t=Object(u.c)(p.c.getIsLoggedIn);return Object(c.jsxs)("header",{style:F.header,children:[Object(c.jsx)(I,{}),t?Object(c.jsx)(z,{}):Object(c.jsx)(T,{})]})}var B=n(5),E=n(52),W=n(53),A=n(55),D=n(54),q=function(t){Object(A.a)(n,t);var e=Object(D.a)(n);function n(t){var c;return Object(E.a)(this,n),(c=e.call(this,t)).state={errorOccurred:!1},c}return Object(W.a)(n,[{key:"componentDidCatch",value:function(t,e){this.setState({error:t,errorInfo:e})}},{key:"render",value:function(){return this.state.errorOccurred?Object(c.jsx)("h1",{children:"Something went wrong!"}):this.props.children}}]),n}(r.Component),J=n(47),P=n(22),H=n(28);function M(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,a=Object(H.a)(t,["children","redirectTo"]),o=Object(u.c)(p.c.getIsLoggedIn);return Object(c.jsx)(B.b,Object(P.a)(Object(P.a)({},a),{},{children:o?e:Object(c.jsx)(B.a,{to:r})}))}function N(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,a=t.redirectTo,o=void 0===a?"/":a,i=Object(H.a)(t,["children","restricted","redirectTo"]),s=Object(u.c)(p.c.getIsLoggedIn)&&r;return Object(c.jsx)(B.b,Object(P.a)(Object(P.a)({},i),{},{children:s?Object(c.jsx)(B.a,{to:o}):e}))}n(56);var V=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,97))})),G=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,98))})),K=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,99))})),Q=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,102))})),X=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,100))}));function Y(){var t=Object(u.b)(),e=Object(u.c)(p.c.getIsFetchingCurrent);return Object(r.useEffect)((function(){t(p.a.fetchCurrentUser())}),[t]),Object(c.jsx)(q,{children:Object(c.jsxs)(C,{children:[e?Object(c.jsx)("h1",{children:"React Skeleton"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U,{}),Object(c.jsx)(B.d,{children:Object(c.jsxs)(r.Suspense,{fallback:Object(c.jsx)("p",{children:"Loading..."}),children:[Object(c.jsx)(N,{exact:!0,path:"/",children:Object(c.jsx)(V,{})}),Object(c.jsx)(N,{exact:!0,path:"/register",restricted:!0,children:Object(c.jsx)(G,{})}),Object(c.jsx)(N,{exact:!0,path:"/login",redirectTo:"/todos",restricted:!0,children:Object(c.jsx)(K,{})}),Object(c.jsx)(M,{path:"/contacts",component:Q,redirectTo:"/login"}),Object(c.jsx)(M,{path:"/upload",redirectTo:"/login",children:Object(c.jsx)(X,{})})]})})]}),Object(c.jsx)(J.a,{})]})})}var Z=function(t){t&&t instanceof Function&&n.e(8).then(n.bind(null,101)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u.a,{store:m,children:Object(c.jsx)(l.a,{loading:null,persistor:y,children:Object(c.jsx)(s.a,{children:Object(c.jsx)(Y,{})})})})}),document.getElementById("root")),Z()}},[[92,1,2]]]);
//# sourceMappingURL=main.923679c6.chunk.js.map