(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={wrapper:"Affairs_wrapper__3S6eE",Affair:"Affairs_Affair__1GJZA",deleteBtn:"Affairs_deleteBtn__CMarT",priority:"Affairs_priority__Pf5tm",name:"Affairs_name__1dNCK",priorityBtn:"Affairs_priorityBtn__3TZ-Y",active:"Affairs_active__2hdsy",priorityRed:"Affairs_priorityRed__qZbMP",priorityOrange:"Affairs_priorityOrange__3yWjy"}},,function(e,a,t){e.exports={wrapper:"H5_wrapper__ZvkI-",wrapperClose:"H5_wrapperClose__1C0Wk",nav:"H5_nav__3Fzrr",navItem:"H5_navItem__5agSi",link:"H5_link__14xGi",activeLink:"H5_activeLink__pZ75y",menuBtn:"H5_menuBtn__1K9cI",closeBtn:"H5_closeBtn__ccwVB"}},,,,,function(e,a,t){e.exports={warningWrapper:"Pages_warningWrapper__bxP4C",warningTitle:"Pages_warningTitle__3gbws",link:"Pages_link__2mgOY"}},function(e,a,t){e.exports={wrapper:"Message_wrapper__2uoyE",avatar:"Message_avatar__3s-Py",message:"Message_message__c0gHs",avatarName:"Message_avatarName__1QG_G",messageTime:"Message_messageTime__1-_HP"}},,function(e,a,t){e.exports={wrapper:"Greeting_wrapper__25Y64",error:"Greeting_error__1tEFV",textMistake:"Greeting_textMistake__1nzF0",textMistakeNone:"Greeting_textMistakeNone__3R6fk",success:"Greeting_success__2qPZA"}},,,,,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__focuX",errorInput:"SuperInputText_errorInput__k1Lgm",error:"SuperInputText_error__19XX_"}},function(e,a,t){e.exports={default:"SuperButton_default__2dw6J",red:"SuperButton_red__2SjtY"}},,function(e,a,t){e.exports={blue:"HW4_blue__1iK9s",column:"HW4_column__2yPTx",testSpanError:"HW4_testSpanError__16k5j"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1gBkW",spanClassName:"SuperCheckbox_spanClassName__Jgcae"}},,,function(e,a,t){e.exports={option:"HW7_option__dYl6k"}},,,,function(e,a,t){e.exports={App:"App_App__3_jkh"}},function(e,a,t){e.exports=t.p+"static/media/spinner.9376e427.svg"},,,function(e,a,t){e.exports=t(47)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),i=(t(40),t(31)),o=t.n(i),s=t(1),u=t(8),m=t(3),p=t(10),E=t.n(p);var d=function(e){return r.a.createElement("div",{className:E.a.wrapper},r.a.createElement("div",{className:E.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:E.a.message},r.a.createElement("h3",{className:E.a.avatarName},e.name),r.a.createElement("p",{className:E.a.messageText},e.message),r.a.createElement("time",{className:E.a.messageTime},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Angel",_="Hello, I'm Angel. How are you?",g="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("hr",null),r.a.createElement(d,{avatar:f,name:v,message:_,time:g}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(2),k=t.n(b);var y=function(e){var a="high"===e.affair.priority,t="middle"===e.affair.priority,n=k.a.priority+" "+k.a.priorityRed,l=k.a.priority+" "+k.a.priorityOrange,c=a?n:t?l:k.a.priority;return r.a.createElement("div",{className:k.a.Affair},r.a.createElement("div",{className:k.a.name},e.affair.name),r.a.createElement("div",{className:c},"[",e.affair.priority,"]"),r.a.createElement("button",{className:k.a.deleteBtn,onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t="all"===e.filter?"".concat(k.a.priorityBtn,"  ").concat(k.a.active):k.a.priorityBtn,n="high"===e.filter?"".concat(k.a.priorityBtn,"  ").concat(k.a.active):k.a.priorityBtn,l="middle"===e.filter?"".concat(k.a.priorityBtn,"  ").concat(k.a.active):k.a.priorityBtn,c="low"===e.filter?"".concat(k.a.priorityBtn,"  ").concat(k.a.active):k.a.priorityBtn;return r.a.createElement("div",null,a,r.a.createElement("button",{className:t,onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{className:n,onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{className:l,onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:c,onClick:function(){return e.setFilter("low")}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(C),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(s.a)(c,2),o=i[0],u=i[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement("hr",null),r.a.createElement(N,{filter:o,data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(19),w=t(49),x=t(12),S=t.n(x),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i=e.onEnterPress,o=l?S.a.error:S.a.success,s=l?S.a.textMistake:S.a.textMistakeNone;return r.a.createElement("div",{className:S.a.wrapper},r.a.createElement("input",{value:a,onChange:t,className:o,onKeyPress:i}),r.a.createElement("div",{className:s},"Title is required!"),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},A=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(s.a)(l,2),i=c[0],o=c[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),p=m[0],E=m[1],d=function(){var e=i.trim();e?(t(e),alert("Hello  ".concat(e,"!"))):E(!0),o("")},f=a.length;return r.a.createElement(T,{name:i,setNameCallback:function(e){o(e.currentTarget.value),E(!1)},addUser:d,error:p,totalUsers:f,onEnterPress:function(e){"Enter"===e.key&&d()}})};var B=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement("hr",null),r.a.createElement(A,{users:t,addUserCallback:function(e){l([].concat(Object(j.a)(t),[{_id:Object(w.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},P=t(5),I=t(20),H=t.n(I),M=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=e.className,o=e.spanClassName,s=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(H.a.error," ").concat(o||""),m="".concat(c?H.a.errorInput:H.a.superInput," ").concat(i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:u},c))},W=t(23),F=t.n(W),L=t(21),G=t.n(L),J=function(e){var a=e.red,t=e.className,n=Object(P.a)(e,["red","className"]),l="".concat(a?G.a.default+" "+G.a.red:G.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},D=t(24),K=t.n(D),U=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:i},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),u=Object(s.a)(o,2),m=u[0],p=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:F.a.column},r.a.createElement(M,{value:t,onChangeText:l,onEnter:i,error:c}),r.a.createElement(M,{className:F.a.blue}),r.a.createElement(J,null,"default"),r.a.createElement(J,{red:!0,onClick:i},"delete "),r.a.createElement(J,{disabled:!0},"disabled"),r.a.createElement(U,{checked:m,onChangeChecked:p},"checkbox "),r.a.createElement(U,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(B,null),r.a.createElement(Y,null))},X=t(9),R=t.n(X);var q=function(){return r.a.createElement("div",{className:R.a.warningWrapper},r.a.createElement("div",{className:R.a.warningTitle},"404"),r.a.createElement("div",null,"Page not found! Please return to",r.a.createElement(u.b,{className:R.a.link,to:"/pre-junior"}," Start Page")))},z=t(33),V=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(P.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),i=Object(n.useState)(!1),o=Object(s.a)(i,2),u=o[0],m=o[1],p=l||{},E=p.children,d=p.onDoubleClick,f=p.className,v=Object(P.a)(p,["children","onDoubleClick","className"]),_="spanStyle".concat(" ",f||"");return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(M,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:_},v),r.a.createElement(z.a,null),E||c.value))};function Q(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}Q("test",{x:"A",y:1});t(46);var $=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(V,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(J,{onClick:function(){Q("editable-span-value",t)}},"save"),r.a.createElement(J,{onClick:function(){var e=function(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}("editable-span-value","hello");l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ee=t(27),ae=t.n(ee),te=function(e){var a=e.options,t=e.onChangeOption,n=Object(P.a)(e,["options","onChangeOption"]),l=a.map((function(e,a){return r.a.createElement("option",{className:ae.a.option,key:a,value:e},e)}));return r.a.createElement("select",Object.assign({className:ae.a.select,onChange:function(e){e.currentTarget.value&&t(e.currentTarget.value)}},n),l)},ne=function(e){var a=e.name,t=e.options,n=e.value,l=e.onChangeOption,c=Object(P.a)(e,["name","options","value","onChangeOption"]),i=function(e){l(e.currentTarget.value)},o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",Object.assign({type:"radio",name:a,value:e,checked:n===e,onChange:i},c)),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},re=["x","y","z"];var le=function(){var e=Object(n.useState)(re[1]),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(te,{options:re,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ne,{name:"radio",options:re,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ce=function(e,a){var t=Object(j.a)(e);switch(a.type){case"sort":return"up"===a.payload&&t.sort((function(e,a){return e.name>a.name?1:-1})),"down"===a.payload&&t.sort((function(e,a){return e.name<a.name?1:-1})),t;case"check":return t.filter((function(e){return e.age>a.payload}));default:return e}},ie=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var oe=function(){var e=Object(n.useState)(ie),a=Object(s.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("span",null,e.name)," ",r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("div",{style:{maxWidth:"402px",minHeight:"180px",display:"flex",flexDirection:"column"}},c,r.a.createElement("div",{style:{marginTop:"auto"}},r.a.createElement(J,{onClick:function(){return l(ce(ie,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(J,{onClick:function(){return l(ce(ie,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(J,{onClick:function(){return l(ce(ie,{type:"check",payload:18}))}},"check 18"))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var se=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),i=Object(s.a)(c,2),o=i[0],u=i[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),E=p[0],d=p[1],f=function(){clearInterval(t)},v=function(e){return e>=10?e:"0"+e},_=v(o.getHours()),g=v(o.getMinutes()),h=v(o.getSeconds()),b=v(o.getDate()),k=v(o.getMonth()+1),y=o.getFullYear(),N="Time: ".concat(_,":").concat(g,":").concat(h),C="Date: ".concat(b,":").concat(k,":").concat(y),O={opacity:1,transition:"all 0.3s linear"},j={opacity:0,transition:"all 0.3s linear"};return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},N),E?r.a.createElement("div",{style:O},C):r.a.createElement("div",{style:j},C),r.a.createElement(J,{onClick:function(){f();var e=window.setInterval((function(){u(new Date)}),1e3);l(e)}},"start"),r.a.createElement(J,{onClick:f},"stop"))};var ue=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(se,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},me=t(15),pe=t(34),Ee={isLoading:!1},de=function(e){return{type:"SHOW-IS-LOADING",isLoading:e}},fe=t(32),ve=t.n(fe);var _e=function(){var e=Object(me.c)((function(e){return e.loading.isLoading})),a=Object(me.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",null,r.a.createElement("img",{src:ve.a,alt:"spinner"})):r.a.createElement("div",null,r.a.createElement(J,{onClick:function(){a(de(!0)),setTimeout((function(){a(de(!1))}),3e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ge=function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(le,null),r.a.createElement(oe,null),r.a.createElement(ue,null),r.a.createElement(_e,null))};var he=function(e){return r.a.createElement("div",{className:R.a.warningWrapper},r.a.createElement("h2",null,"The page - ",r.a.createElement("span",{className:R.a.warningTitle},e.pageTitle)," is being developed!!!"),"Please return to",r.a.createElement(u.b,{className:R.a.link,to:"/pre-junior"}," Start Page"))};var be=function(){return r.a.createElement(he,{pageTitle:"JuniorPlus"})},ke="/pre-junior",ye="/junior",Ne="/junior+";var Ce=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:ke})}}),r.a.createElement(m.b,{path:ke,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(m.b,{path:ye,render:function(){return r.a.createElement(ge,null)}}),r.a.createElement(m.b,{path:Ne,render:function(){return r.a.createElement(be,null)}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(q,null)}})))},Oe=t(4),je=t.n(Oe);var we=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:t?je.a.wrapper:je.a.wrapperClose},r.a.createElement("nav",{className:je.a.nav},r.a.createElement("div",{className:je.a.navItem},r.a.createElement(u.b,{className:je.a.link,activeClassName:je.a.activeLink,to:ke},"Pre-junior")),r.a.createElement("div",{className:je.a.navItem},r.a.createElement(u.b,{className:je.a.link,activeClassName:je.a.activeLink,to:ye},"Junior")),r.a.createElement("div",{className:je.a.navItem},r.a.createElement(u.b,{className:je.a.link,activeClassName:je.a.activeLink,to:Ne},"Junior+"))),!t&&r.a.createElement(J,{className:"",onClick:function(){return l(!0)}},"MENU"),t&&r.a.createElement(J,{red:!0,className:je.a.closeBtn,onClick:function(){return l(!1)}},"X"))};var xe=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(we,null),r.a.createElement(Ce,null)))};var Se=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(xe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=t(28),Ae=Object(Te.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SHOW-IS-LOADING":return Object(pe.a)({},e,{isLoading:a.isLoading});default:return e}}}),Be=Object(Te.b)(Ae),Pe=Be;window.store=Be,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me.a,{store:Pe},r.a.createElement(Se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.774c65e8.chunk.js.map