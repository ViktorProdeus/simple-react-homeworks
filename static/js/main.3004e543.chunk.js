(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={wrapper:"Affairs_wrapper__3S6eE",Affair:"Affairs_Affair__1GJZA",deleteBtn:"Affairs_deleteBtn__CMarT",priority:"Affairs_priority__Pf5tm",name:"Affairs_name__1dNCK",priorityBtn:"Affairs_priorityBtn__3TZ-Y",priorityRed:"Affairs_priorityRed__qZbMP",priorityOrange:"Affairs_priorityOrange__3yWjy"}},function(e,a,t){e.exports={wrapper:"Message_wrapper__2uoyE",avatar:"Message_avatar__3s-Py",message:"Message_message__c0gHs",avatarName:"Message_avatarName__1QG_G",messageTime:"Message_messageTime__1-_HP"}},,,,function(e,a,t){e.exports={App:"App_App__3_jkh"}},function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(5),l=t.n(i),o=(t(12),t(6)),s=t.n(o),c=t(2),m=t.n(c);var u=function(e){return n.a.createElement("div",{className:m.a.wrapper},n.a.createElement("div",{className:m.a.avatar},n.a.createElement("img",{src:e.avatar,alt:"avatar"})),n.a.createElement("div",{className:m.a.message},n.a.createElement("h3",{className:m.a.avatarName},e.name),n.a.createElement("p",{className:m.a.messageText},e.message),n.a.createElement("time",{className:m.a.messageTime},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Angel",_="Hello, I'm Angel. How are you?",d="22:00";var E=function(){return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 1",n.a.createElement("hr",null),n.a.createElement(u,{avatar:f,name:p,message:_,time:d}),n.a.createElement("hr",null),n.a.createElement("hr",null))},h=t(3),v=t(1),y=t.n(v);var g=function(e){var a="high"===e.affair.priority,t="middle"===e.affair.priority,r=y.a.priority+" "+y.a.priorityRed,i=y.a.priority+" "+y.a.priorityOrange,l=a?r:t?i:y.a.priority;return n.a.createElement("div",{className:y.a.Affair},n.a.createElement("div",{className:y.a.name},e.affair.name),n.a.createElement("div",{className:l},"[",e.affair.priority,"]"),n.a.createElement("button",{className:y.a.deleteBtn,onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))};var w=function(e){var a=e.data.map((function(a){return n.a.createElement(g,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return n.a.createElement("div",null,a,n.a.createElement("button",{className:y.a.priorityBtn,onClick:function(){return e.setFilter("all")}},"All"),n.a.createElement("button",{className:y.a.priorityBtn,onClick:function(){return e.setFilter("high")}},"High"),n.a.createElement("button",{className:y.a.priorityBtn,onClick:function(){return e.setFilter("middle")}},"Middle"),n.a.createElement("button",{className:y.a.priorityBtn,onClick:function(){return e.setFilter("low")}},"Low"))},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(r.useState)(A),a=Object(h.a)(e,2),t=a[0],i=a[1],l=Object(r.useState)("all"),o=Object(h.a)(l,2),s=o[0],c=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return n.a.createElement("div",{className:y.a.wrapper},n.a.createElement("hr",null),"homeworks 2",n.a.createElement(w,{data:m,setFilter:c,deleteAffairCallback:function(e){return i(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),n.a.createElement("hr",null),n.a.createElement("hr",null))};var N=function(){return n.a.createElement("div",{className:s.a.App},n.a.createElement("div",null,"react homeworks:"),n.a.createElement(E,null),n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3004e543.chunk.js.map