(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],{10:function(e,t,n){e.exports={center:"Header_center__3PscL",main:"Header_main__37l0v",link:"Header_link__1FBLb"}},14:function(e,t,n){e.exports={wrapper:"ItemList_wrapper__2PczM",ul:"ItemList_ul__VxIcI",li:"ItemList_li__36top",crossBtn:"ItemList_crossBtn__2JDbU",btn:"ItemList_btn__Nz9UM"}},16:function(e,t,n){e.exports={btn:"Button_btn__2cLv_",redBtn:"Button_redBtn__3naSW"}},17:function(e,t,n){e.exports={wrapper:"InputAlert_wrapper__b7ALl",input:"InputAlert_input__3mNmy",btn:"InputAlert_btn__3ueZt",spanElement:"InputAlert_spanElement__1IKfD"}},22:function(e,t,n){},25:function(e,t,n){e.exports={inputStyle:"Input_inputStyle__3XaTa"}},27:function(e,t,n){e.exports=n(38)},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(24),c=n.n(l),i=(n(32),n(22),n(9)),o=n(1),u=n(20),s=n(3),m=n(40),d=n(8),v=n.n(d);var g=function(e){var t=new Date,n=t.getHours(),a=t.getMinutes();return r.a.createElement("div",{className:v.a.message},r.a.createElement("div",{className:v.a.image},r.a.createElement("img",{src:"https://scontent.fudj2-1.fna.fbcdn.net/v/t1.0-9/p960x960/76903549_3488170377922904_1712828928965476352_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=rfzITQWN4BsAX_Qxja2&_nc_ht=scontent.fudj2-1.fna&_nc_tp=6&oh=77cfa96bb06e31dba12e462119c78e4a&oe=5F404B86",alt:""})),r.a.createElement("div",{className:v.a.textBuble},r.a.createElement("div",{className:v.a.userName},e.name),r.a.createElement("div",{className:v.a.textArea},e.text),r.a.createElement("div",{className:v.a.time},n,":",a)))},p=n(14),f=n.n(p),h=n(16),E=n.n(h);var _=function(e){return r.a.createElement("button",{style:e.style,className:e.redBtn?E.a.redBtn:E.a.btn,onClick:e.onClick},e.textOnBtn)},b=n(25),k=n.n(b);var O=function(e){return r.a.createElement("input",{style:e.style,className:k.a.inputStyle,type:"text",value:e.value,onChange:e.onChange,onKeyPress:e.onKeyPress})};var C=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),l=n[0],c=n[1];function i(){""!==l&&(e.addListItem(l),c(""))}var o={height:"20px"};return r.a.createElement("div",{className:f.a.wrapper},r.a.createElement("h3",null,e.title),r.a.createElement("div",null,r.a.createElement(O,{style:{width:"150px",display:"inline-block"},value:l,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&i()}}),r.a.createElement(_,{style:o,textOnBtn:"+",onClick:i})),r.a.createElement("ul",{className:f.a.ul},e.list.map((function(t){return r.a.createElement("li",{className:f.a.li,key:t.id},t.n,r.a.createElement(_,{style:o,onClick:function(){e.deleteItem(t.id)},textOnBtn:"x"}))}))),r.a.createElement("div",null,r.a.createElement(_,{textOnBtn:"All",onClick:function(){e.changeFilter("all")}}),r.a.createElement(_,{textOnBtn:"Low",onClick:function(){e.changeFilter("low")}}),r.a.createElement(_,{textOnBtn:"Middle",onClick:function(){e.changeFilter("middle")}}),r.a.createElement(_,{textOnBtn:"Hight",onClick:function(){e.changeFilter("hight")}})))},x=n(17),j=n.n(x);var y=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(0),o=Object(s.a)(i,2),u=o[0],m=o[1];function d(){e.sayName(l),m(e.counter),c("")}var v={fontWeight:u?900:400,color:u?"#4CAF50":"black"};return r.a.createElement("div",{className:j.a.wrapper},r.a.createElement(O,{style:{margin:"0 auto",fontSize:"20px",display:"block"},value:l,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&d()}}),r.a.createElement(_,{style:{margin:"0px auto",marginTop:"10px",display:"block"},textOnBtn:"SAY MY NAME!",onClick:d}),r.a.createElement("div",{className:j.a.spanElement},"Has a length of ",r.a.createElement("span",{style:v},u)))};var N=function(e){return r.a.createElement("input",{onChange:function(t){return e.onChange(t.currentTarget.checked)},type:"checkbox",checked:e.checked})};var B=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Demontration of universal Components"),r.a.createElement(O,null),r.a.createElement(N,{checked:e.checked,onChange:e.onChange}),r.a.createElement(_,{textOnBtn:e.textOnTheBtn}))};var w=function(){var e,t=Object(a.useState)([{id:Object(m.a)(),n:"\u0440\u0430\u0431\u043e\u0442\u0430",p:"hight"},{id:Object(m.a)(),n:"\u0430\u043d\u0438\u043c\u0435",p:"low"},{id:Object(m.a)(),n:"\u0438\u0433\u0440\u044b",p:"middle"},{id:Object(m.a)(),n:"\u0440\u0435\u0430\u043a\u0442",p:"hight"},{id:Object(m.a)(),n:"\u0445\u0442\u043c\u043b",p:"low"}]),n=Object(s.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)("all"),o=Object(s.a)(i,2),d=o[0],v=o[1];e="low"===d?l.filter((function(e){return"low"===e.p})):"middle"===d?l.filter((function(e){return"middle"===e.p})):"hight"===d?l.filter((function(e){return"hight"===e.p})):l;var p=[],f=0,h=Object(a.useState)(!1),E=Object(s.a)(h,2),_=E[0],b=E[1];return r.a.createElement("div",null,r.a.createElement(g,{name:"Vasyl",text:"Thanks the guys from IT-Kamasutra for a such great work!"}),r.a.createElement(C,{title:"Priority list",list:e,deleteItem:function(e){var t=l.filter((function(t){return t.id!==e}));c(t)},changeFilter:function(e){v(e)},addListItem:function(e){var t=[{id:Object(m.a)(),n:e,p:"low"}].concat(Object(u.a)(l));c(t)}}),r.a.createElement(y,{sayName:function(e){var t={id:Object(m.a)(),name:e};p=[t].concat(Object(u.a)(p)),f=p.length,""!==t.name&&null!==t.name?(alert("".concat(t.name," has an ID ").concat(t.id," of ").concat(p.length," people")),console.log(p.map((function(e){return e.name}))),console.log(f)):(alert("Try once more again!"),p.pop())},counter:function(){return f=p.length}}),r.a.createElement(B,{textOnTheBtn:"Click on it",checked:_,onChange:b}))},I=n(10),S=n.n(I);var T=function(){return r.a.createElement("div",{className:S.a.center},r.a.createElement("div",{className:S.a.main},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/prejunior",activeClassName:S.a.link},"PreJunior")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/junior",activeClassName:S.a.link},"Junior")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/strongjunior",activeClassName:S.a.link},"Junior+"))))};var A=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),l=n[0],c=n[1];return r.a.createElement("div",null,l?r.a.createElement("input",{value:e.message,onBlur:function(){return c(!l)},autoFocus:!0,onChange:function(t){var n=t.currentTarget.value;e.onChange(n)},onKeyPress:function(t){13===t.charCode&&(e.onChange(e.message),c(!l))}}):r.a.createElement("span",{onDoubleClick:function(){return c(!l)}},e.message))};var L=function(e){return r.a.createElement("div",null,r.a.createElement(A,{message:e.message,onChange:e.onChange}),r.a.createElement(_,{textOnBtn:"Save Data",onClick:e.onSaveClick}),r.a.createElement(_,{textOnBtn:"Restore Data",onClick:e.onRestoreClick}))};var M=function(e){return r.a.createElement("select",{onChange:e.onChange,value:e.value},e.selectOption.map((function(e){return r.a.createElement("option",{key:e.id},e.title)})))};var P=function(e){return r.a.createElement("form",null,e.RadioSelect.map((function(t){return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",checked:e.value===t.value,key:t.id,name:t.name,value:t.value,onChange:e.onChange}),r.a.createElement("label",null,t.value))})))},D={textAlign:"center",marginTop:"50px"};var F=function(){var e=Object(a.useState)("hi"),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)("books"),i=Object(s.a)(c,2),o=i[0],u=i[1],m=Object(a.useState)("tea"),d=Object(s.a)(m,2),v=d[0],g=d[1],p=function(e,t){var n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}("test",{x:n});return r.a.createElement("div",null,r.a.createElement("div",{style:D},r.a.createElement(L,{message:n,onChange:function(e){l(e)},onSaveClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("test",{x:n})},onRestoreClick:function(){l(p.x)}})),r.a.createElement(M,{selectOption:[{id:1,title:"books"},{id:2,title:"films"},{id:3,title:"traveling"},{id:4,title:"sport"},{id:5,title:"coding"}],value:o,onChange:function(e){u(e.currentTarget.value),console.log(e.currentTarget.value)}}),r.a.createElement(P,{RadioSelect:[{id:1,name:"drink",value:"tea"},{id:2,name:"drink",value:"milk"},{id:3,name:"drink",value:"water"},{id:4,name:"drink",value:"beer"},{id:5,name:"drink",value:"home-made shnaps :D"}],value:v,onChange:function(e){g(e.currentTarget.value),console.log(e.currentTarget.value)}}))},J={textAlign:"center",marginTop:"50px"};var H=function(){return r.a.createElement("h1",{style:J},"THE JUNIOR+ CONTENT WILL BE HERE SOON")};var K=function(){return r.a.createElement(i.a,null,r.a.createElement(T,null),r.a.createElement(o.a,{path:"/prejunior",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(o.a,{path:"/junior",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(o.a,{path:"/strongjunior",render:function(){return r.a.createElement(H,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports={message:"Message_message__3Ih9A",image:"Message_image__29PNj",textBuble:"Message_textBuble__1A3sP",userName:"Message_userName__1jnvc",textArea:"Message_textArea__AmpE5",time:"Message_time__1WtNI"}}},[[27,1,2]]]);
//# sourceMappingURL=main.e5e9124c.chunk.js.map