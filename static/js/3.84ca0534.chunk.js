(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(1),c=n(0),a=n(8),u=(n(94),n(37)),o=n(35);function i(){var e=Object(a.c)(o.c),t=Object(a.b)();return Object(r.jsx)("ul",{className:"contact-list",children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(r.jsxs)("li",{children:[Object(r.jsxs)("p",{children:[Object(r.jsxs)("b",{children:[c," "]}),Object(r.jsx)("em",{children:a})]}),Object(r.jsx)("button",{type:"button",onClick:function(){return function(e){return t(u.c(e))}(n)},children:"delete"})]},n)}))})}var b=n(93),s=n(47);n(56),n(95);var l=function(){var e=Object(a.b)(),t=Object(a.c)(o.a),n=Object(c.useState)(""),i=Object(b.a)(n,2),l=i[0],j=i[1],f=Object(c.useState)(""),d=Object(b.a)(f,2),h=d[0],m=d[1],O=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":j(r);break;case"number":m(r);break;default:return}},p=function(){j(""),m("")};return Object(r.jsxs)("form",{id:"contact",onSubmit:function(n){n.preventDefault(),!function(e){return t.find((function(t){return t.name&&t.name.toLowerCase()===e.toLowerCase()}))}(l)?!function(e){return t.find((function(t){return t.number===e}))}(h)?!function(e,t){return""===e.trim()||""===t.trim()}(l,h)?!function(e){return!/\d{3}[-]\d{2}[-]\d{2}/g.test(e)}(h)?e(u.a(l,h)):s.b.error("# Enter the correct phone number!"):s.b.info(" Enter the correct name and number!"):Object(s.b)("\ud83e\udd14 ".concat(h," is already in use")):Object(s.b)("'".concat(l,"' is already in use!")),p()},children:[Object(r.jsxs)("label",{children:["Name",Object(r.jsx)("input",{className:"input-field",type:"text",name:"name",value:l,onChange:O,placeholder:"John Dows"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("label",{children:["Phone number",Object(r.jsx)("input",{className:"input-field",type:"tel",name:"number",value:h,onChange:O,placeholder:"459-12-56"})]}),Object(r.jsx)("button",{type:"submit",className:"submit-button",children:"Add contact"})]})},j=(n(96),n(4)),f=function(){var e=Object(a.c)(o.b),t=Object(a.b)();return Object(r.jsxs)("label",{children:["Find contacts by name",Object(r.jsx)("input",{type:"text",value:e,onChange:function(e){return t(j.d(e.currentTarget.value))}})]})},d=n(46);function h(){var e=Object(a.b)();return Object(c.useEffect)((function(){return e(d.a.fetchContacts())}),[e]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Phonebook"}),Object(r.jsx)(l,{}),Object(r.jsx)("h2",{children:"Contacts"}),Object(r.jsx)(f,{}),Object(r.jsx)(i,{})]})}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(36);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){c=!0,a=i}finally{try{r||null==o.return||o.return()}finally{if(c)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}}]);
//# sourceMappingURL=3.84ca0534.chunk.js.map