(this["webpackJsonpto-do-list-with-redux"]=this["webpackJsonpto-do-list-with-redux"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(6),i=n.n(r),o=(n(17),n(18),n(5)),s="ADD_TODO",l="DELETE_TODO",d="UPDATE_TODO";var j=n(29),u=n(2),b=n(1);var O=function(){var t=Object(c.useState)(),e=Object(o.a)(t,2),n=e[0],a=e[1],r=Object(u.b)();return Object(b.jsx)("div",{style:{margin:"0 auto",width:"200px",padding:"10px"},children:Object(b.jsxs)("div",{className:"row m-2",children:[Object(b.jsx)("h1",{style:{color:"grey",fontFamily:"Arial, Helvetica, sans-serif"},children:"TO-DO-LIST"}),Object(b.jsx)("input",{value:n,placeholder:"Enter",onChange:function(t){return a(t.target.value)},type:"text",className:"col form-control"}),Object(b.jsx)("button",{onClick:function(){var t;""!=n&&(r((t={id:Object(j.a)(),name:n},{type:s,payload:t})),a(""))},className:"btn btn-primary mx-2",children:"Add"})]})})},p=n(3);var h=function(t){var e=t.todo,n=Object(c.useState)(!1),a=Object(o.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(e.name),j=Object(o.a)(s,2),O=j[0],h=j[1],m=Object(u.b)();return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row mx-2 align-items-center",style:{margin:"0 auto",width:"220px",padding:"10px"},children:[Object(b.jsx)("div",{className:"col",children:r?Object(b.jsx)("input",{type:"text",className:"form-control",value:O,onChange:function(t){h(t.target.value)}}):Object(b.jsx)("h4",{children:e.name})}),Object(b.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){m(function(t){return{type:d,payload:t}}(Object(p.a)(Object(p.a)({},e),{},{name:O}))),r&&h(e.name),i(!r)},children:r?"Update":"Edit"}),Object(b.jsx)("button",{className:"btn btn-danger m-2",onClick:function(){return m((t=e.id,{type:l,payload:t}));var t},children:"Delete"})]})})};var m=function(){var t=Object(u.c)((function(t){return t}));return Object(b.jsx)("div",{className:"my-4",children:t.map((function(e){return Object(b.jsx)(h,{todo:e},t.id)}))})};n(26);var x=function(){return Object(b.jsxs)("div",{className:"App m-5",children:[Object(b.jsx)(O,{}),Object(b.jsx)(m,{})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))},f=n(12),y=n(8),g=[],D=Object(f.a)((function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s:return(t=Object(y.a)(e)).push(n.payload),t;case l:return t=(t=Object(y.a)(e)).filter((function(t){return t.id!=n.payload}));case d:t=Object(y.a)(e);for(var c=-1,a=0;a<t.length&&(c++,t[a].id!=n.payload.id);a++);if(-1!=c)return t[c]=n.payload,t}return e}));i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(u.a,{store:D,children:Object(b.jsx)(x,{})})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.1467badf.chunk.js.map