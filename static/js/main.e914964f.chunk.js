(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{18:function(e,a,t){e.exports={wrapper:"Message_wrapper__2uoyE",avatar:"Message_avatar__3s-Py",message:"Message_message__c0gHs",avatarName:"Message_avatarName__1QG_G",messageTime:"Message_messageTime__1-_HP"}},21:function(e,a,t){e.exports={wrapper:"Greeting_wrapper__25Y64",error:"Greeting_error__1tEFV",textMistake:"Greeting_textMistake__1nzF0",textMistakeNone:"Greeting_textMistakeNone__3R6fk",success:"Greeting_success__2qPZA"}},22:function(e,a,t){e.exports={wrapper:"HW11_wrapper__2UROh",value:"HW11_value___3dyJ"}},25:function(e,a,t){e.exports={wrapper:"HW13_wrapper__XTR7F",checkbox:"HW13_checkbox__QUqbH",green:"HW13_green__1RhL4",red:"HW13_red__2H4t1"}},29:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__focuX",errorInput:"SuperInputText_errorInput__k1Lgm",error:"SuperInputText_error__19XX_"}},3:function(e,a,t){e.exports={wrapper:"Affairs_wrapper__3S6eE",Affair:"Affairs_Affair__1GJZA",deleteBtn:"Affairs_deleteBtn__CMarT",priority:"Affairs_priority__Pf5tm",name:"Affairs_name__1dNCK",priorityBtn:"Affairs_priorityBtn__3TZ-Y",active:"Affairs_active__2hdsy",priorityRed:"Affairs_priorityRed__qZbMP",priorityOrange:"Affairs_priorityOrange__3yWjy"}},30:function(e,a,t){e.exports={default:"SuperButton_default__2dw6J",red:"SuperButton_red__2SjtY"}},31:function(e,a,t){e.exports={warningWrapper:"Pages_warningWrapper__bxP4C",warningTitle:"Pages_warningTitle__3gbws",link:"Pages_link__2mgOY"}},33:function(e,a,t){e.exports={blue:"HW4_blue__1iK9s",column:"HW4_column__2yPTx",testSpanError:"HW4_testSpanError__16k5j"}},34:function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1gBkW",spanClassName:"SuperCheckbox_spanClassName__Jgcae"}},37:function(e,a,t){e.exports={option:"HW7_option__dYl6k"}},39:function(e,a,t){e.exports={dark:"HW12_dark__RkKsU","dark-text":"HW12_dark-text__1BWwd",red:"HW12_red__2azUF","red-text":"HW12_red-text__1RyQx",some:"HW12_some__2ZRVg","some-text":"HW12_some-text__aTbGE"}},5:function(e,a,t){e.exports={wrapper:"H5_wrapper__ZvkI-",wrapperClose:"H5_wrapperClose__1C0Wk",nav:"H5_nav__3Fzrr",navItem:"H5_navItem__5agSi",link:"H5_link__14xGi",activeLink:"H5_activeLink__pZ75y",menuBtn:"H5_menuBtn__1K9cI",closeBtn:"H5_closeBtn__ccwVB"}},52:function(e,a,t){e.exports={App:"App_App__3_jkh"}},56:function(e,a,t){e.exports=t.p+"static/media/spinner.9376e427.svg"},57:function(e,a,t){e.exports={range:"SuperRange_range__3zaHX"}},65:function(e,a,t){e.exports=t(97)},70:function(e,a,t){},76:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=(t(70),t(52)),i=t.n(o),u=t(1),s=t(13),m=t(4),p=t(18),E=t.n(p);var d=function(e){return r.a.createElement("div",{className:E.a.wrapper},r.a.createElement("div",{className:E.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:E.a.message},r.a.createElement("h3",{className:E.a.avatarName},e.name),r.a.createElement("p",{className:E.a.messageText},e.message),r.a.createElement("time",{className:E.a.messageTime},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Angel",_="Hello, I'm Angel. How are you?",h="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("hr",null),r.a.createElement(d,{avatar:f,name:v,message:_,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(3),k=t.n(b);var y=function(e){var a="high"===e.affair.priority,t="middle"===e.affair.priority,n=k.a.priority+" "+k.a.priorityRed,l=k.a.priority+" "+k.a.priorityOrange,c=a?n:t?l:k.a.priority;return r.a.createElement("div",{className:k.a.Affair},r.a.createElement("div",{className:k.a.name},e.affair.name),r.a.createElement("div",{className:c},"[",e.affair.priority,"]"),r.a.createElement("button",{className:k.a.deleteBtn,onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t="all"===e.filter?"".concat(k.a.priorityBtn,"  ").concat(k.a.active):k.a.priorityBtn,n="high"===e.filter?"".concat(k.a.priorityBtn,"  ").concat(k.a.active):k.a.priorityBtn,l="middle"===e.filter?"".concat(k.a.priorityBtn,"  ").concat(k.a.active):k.a.priorityBtn,c="low"===e.filter?"".concat(k.a.priorityBtn,"  ").concat(k.a.active):k.a.priorityBtn;return r.a.createElement("div",null,a,r.a.createElement("button",{className:t,onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{className:n,onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{className:l,onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:c,onClick:function(){return e.setFilter("low")}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(n.useState)(O),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),i=o[0],s=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement("hr",null),r.a.createElement(C,{filter:i,data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(11),w=t(110),x=t(21),S=t.n(x),H=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.onEnterPress,i=l?S.a.error:S.a.success,u=l?S.a.textMistake:S.a.textMistakeNone;return r.a.createElement("div",{className:S.a.wrapper},r.a.createElement("input",{value:a,onChange:t,className:i,onKeyPress:o}),r.a.createElement("div",{className:u},"Title is required!"),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},T=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),p=m[0],E=m[1],d=function(){var e=o.trim();e?(t(e),alert("Hello  ".concat(e,"!"))):E(!0),i("")},f=a.length;return r.a.createElement(H,{name:o,setNameCallback:function(e){i(e.currentTarget.value),E(!1)},addUser:d,error:p,totalUsers:f,onEnterPress:function(e){"Enter"===e.key&&d()}})};var W=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement("hr",null),r.a.createElement(T,{users:t,addUserCallback:function(e){l([].concat(Object(j.a)(t),[{_id:Object(w.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(2),B=t(29),I=t.n(B),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(A.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(I.a.error," ").concat(i||""),m="".concat(c?I.a.errorInput:I.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},F=t(33),M=t.n(F),R=t(30),L=t.n(R),G=function(e){var a=e.red,t=e.className,n=Object(A.a)(e,["red","className"]),l="".concat(a?L.a.default+" "+L.a.red:L.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},J=t(34),U=t.n(J),D=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(A.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(U.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:U.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:M.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(P,{className:M.a.blue}),r.a.createElement(G,null,"default"),r.a.createElement(G,{red:!0,onClick:o},"delete "),r.a.createElement(G,{disabled:!0},"disabled"),r.a.createElement(D,{checked:m,onChangeChecked:p},"checkbox "),r.a.createElement(D,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(N,null),r.a.createElement(W,null),r.a.createElement(K,null))},Y=t(31),Z=t.n(Y);var q=function(){return r.a.createElement("div",{className:Z.a.warningWrapper},r.a.createElement("div",{className:Z.a.warningTitle},"404"),r.a.createElement("div",null,"Page not found! Please return to",r.a.createElement(s.b,{className:Z.a.link,to:"/pre-junior"}," Start Page")))},z=t(61),Q=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(A.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(u.a)(o,2),s=i[0],m=i[1],p=l||{},E=p.children,d=p.onDoubleClick,f=p.className,v=Object(A.a)(p,["children","onDoubleClick","className"]),_="spanStyle".concat(" ",f||"");return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),d&&d(e)},className:_},v),r.a.createElement(z.a,null),E||c.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}V("test",{x:"A",y:1});t(76);var $=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(Q,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(G,{onClick:function(){V("editable-span-value",t)}},"save"),r.a.createElement(G,{onClick:function(){var e=function(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}("editable-span-value","hello");l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ee=t(20),ae=t(37),te=t.n(ae),ne=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(ee.a)(e,["options","onChange","onChangeOption"]),c=a.map((function(e,a){return r.a.createElement("option",{className:te.a.option,key:a,value:e},e)}));return r.a.createElement("select",Object.assign({className:te.a.select,onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},re=function(e){var a=e.name,t=e.options,n=e.value,l=e.onChangeOption,c=Object(ee.a)(e,["name","options","value","onChangeOption"]),o=function(e){l(e.currentTarget.value)},i=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",Object.assign({type:"radio",name:a,value:e,checked:n===e,onChange:o},c)),e)})):[];return r.a.createElement(r.a.Fragment,null,i)},le=["x","y","z"];var ce=function(){var e=Object(n.useState)(le[1]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ne,{options:le,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(re,{name:"radio",options:le,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},oe=function(e,a){var t=Object(j.a)(e);switch(a.type){case"sort":return"up"===a.payload&&t.sort((function(e,a){return e.name>a.name?1:-1})),"down"===a.payload&&t.sort((function(e,a){return e.name<a.name?1:-1})),t;case"check":return t.filter((function(e){return e.age>a.payload}));default:return e}},ie=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ue=function(){var e=Object(n.useState)(ie),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("span",null,e.name)," ",r.a.createElement("span",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("div",{style:{maxWidth:"402px",minHeight:"180px",display:"flex",flexDirection:"column"}},c,r.a.createElement("div",{style:{marginTop:"auto"}},r.a.createElement(G,{onClick:function(){return l(oe(ie,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(G,{onClick:function(){return l(oe(ie,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(G,{onClick:function(){return l(oe(ie,{type:"check",payload:18}))}},"check 18"))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var se=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),E=p[0],d=p[1],f=function(){clearInterval(t)},v=function(e){return e>=10?e:"0"+e},_=v(i.getHours()),h=v(i.getMinutes()),g=v(i.getSeconds()),b=v(i.getDate()),k=v(i.getMonth()+1),y=i.getFullYear(),C="Time: ".concat(_,":").concat(h,":").concat(g),O="Date: ".concat(b,":").concat(k,":").concat(y),N={opacity:1,transition:"all 0.3s linear"},j={opacity:0,transition:"all 0.3s linear"};return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},C),E?r.a.createElement("div",{style:N},O):r.a.createElement("div",{style:j},O),r.a.createElement(G,{onClick:function(){f();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(G,{onClick:f},"stop"))};var me=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(se,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},pe=t(14),Ee=t(24),de={isLoading:!1},fe=function(e){return{type:"SHOW-IS-LOADING",isLoading:e}},ve=t(56),_e=t.n(ve);var he=function(){var e=Object(pe.c)((function(e){return e.loading.isLoading})),a=Object(pe.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",null,r.a.createElement("img",{src:_e.a,alt:"spinner"})):r.a.createElement("div",null,r.a.createElement(G,{onClick:function(){a(fe(!0)),setTimeout((function(){a(fe(!1))}),3e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ge=t(17),be=t(57),ke=t.n(be),ye=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.className,l=Object(ee.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(ke.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:c,value:l.value},l)))},Ce=t(109),Oe=function(e){var a=e.onChangeRange,t=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{color:"secondary",style:{maxWidth:125,marginRight:10},value:t,onChange:function(e,t){a&&a(t)}}))},Ne=t(22),je=t.n(Ne);var we=function(){var e=Object(n.useState)(0),a=Object(ge.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(100),o=Object(ge.a)(c,2),i=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",{className:je.a.wrapper},r.a.createElement("span",{className:je.a.value},t),r.a.createElement(ye,{onChangeRange:function(e){l(e)},value:t})),r.a.createElement("div",{className:je.a.wrapper},r.a.createElement("span",{className:je.a.value},t),r.a.createElement(Oe,{value:[t,i],onChangeRange:function(e){l(e[0]),u(e[1])}}),r.a.createElement("span",{className:je.a.value},i)),r.a.createElement("hr",null),r.a.createElement("hr",null))};var xe=function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(ce,null),r.a.createElement(ue,null),r.a.createElement(me,null),r.a.createElement(he,null),r.a.createElement(we,null))},Se=t(39),He=t.n(Se),Te=t(62),We={theme:"some"},Ae=["dark","red","some"];var Be=function(){var e=Object(pe.c)((function(e){return e.themes.theme})),a=Object(pe.b)(),t=function(e){a(function(e){return{type:"string",theme:e}}(e))};return r.a.createElement("div",{className:He.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:He.a[e+"-text"]},"homeworks 12"),r.a.createElement("div",{style:{minHeight:150,margin:30}},r.a.createElement(ne,{options:Ae,value:e,onChangeOption:t}),r.a.createElement(re,{name:"radio",options:Ae,value:e,onChangeOption:t})),r.a.createElement("hr",null))},Ie=t(40),Pe=t.n(Ie),Fe=t(59),Me=t(25),Re=t.n(Me),Le=t(60),Ge=t.n(Le),Je=function(e){return Ge()({method:"post",url:"https://neko-cafe-back.herokuapp.com/auth/test",data:{success:e}})},Ue=function(){var e=Object(n.useState)(!1),a=Object(ge.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(ge.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)(!1),m=Object(ge.a)(s,2),p=m[0],E=m[1],d=function(e){u(""),setTimeout((function(){u(e),E(!1)}),0)},f=function(){var e=Object(Fe.a)(Pe.a.mark((function e(){var a;return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,Je(t);case 4:a=e.sent,d(a.data.errorText),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d(e.t0.response.data.errorText);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Request"),r.a.createElement("label",{className:Re.a.wrapper},r.a.createElement(D,{onChange:function(e){l(e.currentTarget.checked)},className:Re.a.checkbox,checked:t,disabled:p}),r.a.createElement("p",null,"Your response: ",r.a.createElement("span",{className:"...\u0432\u0441\u0451 \u043e\u043a)"===i?Re.a.green:Re.a.red},i))),r.a.createElement("div",null,r.a.createElement(G,{onClick:f,disabled:p},"send your request")))},De=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("span",null,"homeworks 13"),r.a.createElement(Ue,null))};var Ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Be,null),r.a.createElement(De,null))},Xe="/pre-junior",Ye="/junior",Ze="/junior+";var qe=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:Xe})}}),r.a.createElement(m.b,{path:Xe,render:function(){return r.a.createElement(X,null)}}),r.a.createElement(m.b,{path:Ye,render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(m.b,{path:Ze,render:function(){return r.a.createElement(Ke,null)}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(q,null)}})))},ze=t(5),Qe=t.n(ze);var Ve=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:t?Qe.a.wrapper:Qe.a.wrapperClose},r.a.createElement("nav",{className:Qe.a.nav},r.a.createElement("div",{className:Qe.a.navItem},r.a.createElement(s.b,{className:Qe.a.link,activeClassName:Qe.a.activeLink,to:Xe},"Pre-junior")),r.a.createElement("div",{className:Qe.a.navItem},r.a.createElement(s.b,{className:Qe.a.link,activeClassName:Qe.a.activeLink,to:Ye},"Junior")),r.a.createElement("div",{className:Qe.a.navItem},r.a.createElement(s.b,{className:Qe.a.link,activeClassName:Qe.a.activeLink,to:Ze},"Junior+"))),!t&&r.a.createElement(G,{className:"",onClick:function(){return l(!0)}},"MENU"),t&&r.a.createElement(G,{red:!0,className:Qe.a.closeBtn,onClick:function(){return l(!1)}},"X"))};var $e=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(Ve,null),r.a.createElement(qe,null)))};var ea=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement($e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var aa=t(41),ta=Object(aa.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SHOW-IS-LOADING":return Object(Ee.a)({},e,{isLoading:a.isLoading});default:return e}},themes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"string":return Object(Te.a)({},e,{theme:a.theme});default:return e}}}),na=Object(aa.b)(ta),ra=na;window.store=na,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe.a,{store:ra},r.a.createElement(ea,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.e914964f.chunk.js.map