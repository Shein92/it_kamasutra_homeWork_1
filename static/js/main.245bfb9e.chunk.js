(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],{10:function(e,t,n){e.exports={message:"Message_message__3Ih9A",image:"Message_image__29PNj",textBuble:"Message_textBuble__1A3sP",userName:"Message_userName__1jnvc",textArea:"Message_textArea__AmpE5",time:"Message_time__1WtNI"}},14:function(e,t,n){e.exports={center:"Header_center__3PscL",main:"Header_main__37l0v",link:"Header_link__1FBLb"}},22:function(e,t,n){e.exports={wrapper:"ItemList_wrapper__2PczM",ul:"ItemList_ul__VxIcI",li:"ItemList_li__36top",crossBtn:"ItemList_crossBtn__2JDbU",btn:"ItemList_btn__Nz9UM"}},24:function(e,t,n){e.exports={btn:"Button_btn__2cLv_",redBtn:"Button_redBtn__3naSW"}},25:function(e,t,n){e.exports={wrapper:"InputAlert_wrapper__b7ALl",input:"InputAlert_input__3mNmy",btn:"InputAlert_btn__3ueZt",spanElement:"InputAlert_spanElement__1IKfD"}},30:function(e,t,n){},32:function(e,t,n){e.exports={inputStyle:"Input_inputStyle__3XaTa"}},34:function(e,t,n){e.exports=n.p+"static/media/spinner.c542201c.gif"},35:function(e,t,n){e.exports=n(47)},40:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(19),r=n.n(l),o=(n(40),n(30),n(12)),i=n(2),u=n(9),m=n(3),s=n(49),d=n(10),b=n.n(d),p=c.a.memo((function(e){var t=new Date,n=t.getHours(),a=t.getMinutes();return c.a.createElement("div",{className:b.a.message},c.a.createElement("div",{className:b.a.image},c.a.createElement("img",{src:"https://scontent.fudj2-1.fna.fbcdn.net/v/t1.0-9/p960x960/76903549_3488170377922904_1712828928965476352_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=rfzITQWN4BsAX_Qxja2&_nc_ht=scontent.fudj2-1.fna&_nc_tp=6&oh=77cfa96bb06e31dba12e462119c78e4a&oe=5F404B86",alt:""})),c.a.createElement("div",{className:b.a.textBuble},c.a.createElement("div",{className:b.a.userName},e.name),c.a.createElement("div",{className:b.a.textArea},e.text),c.a.createElement("div",{className:b.a.time},n,":",a)))})),E=n(22),f=n.n(E),g=n(24),h=n.n(g),v=c.a.memo((function(e){return c.a.createElement("button",{style:e.style,className:e.redBtn?h.a.redBtn:h.a.btn,onClick:e.onClick},e.textOnBtn)})),O=n(32),C=n.n(O),k=c.a.memo((function(e){return c.a.createElement("input",{style:e.style,className:C.a.inputStyle,type:"text",value:e.value,onChange:e.onChange,onKeyPress:e.onKeyPress,onBlur:e.onBlur,autoFocus:e.autoFocus})})),j=c.a.memo((function(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),l=n[0],r=n[1];function o(){""!==l&&(e.addListItem(l),r(""))}var i={height:"20px"};return c.a.createElement("div",{className:f.a.wrapper},c.a.createElement("h3",null,e.title),c.a.createElement("div",null,c.a.createElement(k,{style:{width:"150px",display:"inline-block"},value:l,onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&o()}}),c.a.createElement(v,{style:i,textOnBtn:"+",onClick:o})),c.a.createElement("ul",{className:f.a.ul},e.list.map((function(t){return c.a.createElement("li",{className:f.a.li,key:t.id},t.n,c.a.createElement(v,{style:i,onClick:function(){e.deleteItem(t.id)},textOnBtn:"x"}))}))),c.a.createElement("div",null,c.a.createElement(v,{textOnBtn:"All",onClick:function(){e.changeFilter("all")}}),c.a.createElement(v,{textOnBtn:"Low",onClick:function(){e.changeFilter("low")}}),c.a.createElement(v,{textOnBtn:"Middle",onClick:function(){e.changeFilter("middle")}}),c.a.createElement(v,{textOnBtn:"Hight",onClick:function(){e.changeFilter("hight")}})))})),_=n(25),x=n.n(_),y=c.a.memo((function(e){var t=Object(a.useState)(""),n=Object(m.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)(0),i=Object(m.a)(o,2),u=i[0],s=i[1];function d(){e.sayName(l),s(e.counter),r("")}var b={fontWeight:u?900:400,color:u?"#4CAF50":"black"};return c.a.createElement("div",{className:x.a.wrapper},c.a.createElement(k,{style:{margin:"0 auto",fontSize:"20px",display:"block"},value:l,onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&d()}}),c.a.createElement(v,{style:{margin:"0px auto",marginTop:"10px",display:"block"},textOnBtn:"SAY MY NAME!",onClick:d}),c.a.createElement("div",{className:x.a.spanElement},"Has a length of ",c.a.createElement("span",{style:b},u)))})),S=c.a.memo((function(e){return c.a.createElement("input",{onChange:function(t){return e.onChange(t.currentTarget.checked)},type:"checkbox",checked:e.checked})})),w=c.a.memo((function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,"Demontration of universal Components"),c.a.createElement(k,null),c.a.createElement(S,{checked:e.checked,onChange:e.onChange}),c.a.createElement(v,{textOnBtn:e.textOnTheBtn}))})),B=c.a.memo((function(){var e,t=Object(a.useState)([{id:Object(s.a)(),n:"\u0440\u0430\u0431\u043e\u0442\u0430",p:"hight"},{id:Object(s.a)(),n:"\u0430\u043d\u0438\u043c\u0435",p:"low"},{id:Object(s.a)(),n:"\u0438\u0433\u0440\u044b",p:"middle"},{id:Object(s.a)(),n:"\u0440\u0435\u0430\u043a\u0442",p:"hight"},{id:Object(s.a)(),n:"\u0445\u0442\u043c\u043b",p:"low"}]),n=Object(m.a)(t,2),l=n[0],r=n[1],o=Object(a.useCallback)((function(e){var t=l.filter((function(t){return t.id!==e}));r(t)}),[l]),i=Object(a.useState)("all"),d=Object(m.a)(i,2),b=d[0],E=d[1],f=Object(a.useCallback)((function(e){E(e)}),[]);e="low"===b?l.filter((function(e){return"low"===e.p})):"middle"===b?l.filter((function(e){return"middle"===e.p})):"hight"===b?l.filter((function(e){return"hight"===e.p})):l;var g=Object(a.useCallback)((function(e){var t=[{id:Object(s.a)(),n:e,p:"low"}].concat(Object(u.a)(l));r(t)}),[l]),h=[],v=0,O=Object(a.useState)(!1),C=Object(m.a)(O,2),k=C[0],_=C[1];return c.a.createElement("div",null,c.a.createElement(p,{name:"Vasyl",text:"Thanks the guys from IT-Kamasutra for a such great work!"}),c.a.createElement(j,{title:"Priority list",list:e,deleteItem:o,changeFilter:f,addListItem:g}),c.a.createElement(y,{sayName:function(e){var t={id:Object(s.a)(),name:e};h=[t].concat(Object(u.a)(h)),v=h.length,""!==t.name&&null!==t.name?(alert("".concat(t.name," has an ID ").concat(t.id," of ").concat(h.length," people")),console.log(h.map((function(e){return e.name}))),console.log(v)):(alert("Try once more again!"),h.pop())},counter:function(){return v=h.length}}),c.a.createElement(w,{textOnTheBtn:"Click on it",checked:k,onChange:_}))})),N=n(14),L=n.n(N),A=c.a.memo((function(){return c.a.createElement("div",{className:L.a.center},c.a.createElement("div",{className:L.a.main},c.a.createElement("div",null,c.a.createElement(o.b,{to:"/prejunior",activeClassName:L.a.link},"PreJunior")),c.a.createElement("div",null,c.a.createElement(o.b,{to:"/junior",activeClassName:L.a.link},"Junior")),c.a.createElement("div",null,c.a.createElement(o.b,{to:"/strongjunior",activeClassName:L.a.link},"Junior+"))))})),I=c.a.memo((function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),l=n[0],r=n[1];return c.a.createElement("div",null,l?c.a.createElement(k,{value:e.message,onBlur:function(){return r(!l)},autoFocus:!0,onChange:function(t){var n=t.currentTarget.value;e.onChange(n)},onKeyPress:function(t){13===t.charCode&&(e.onChange(e.message),r(!l))}}):c.a.createElement("span",{onDoubleClick:function(){return r(!l)}},e.message))})),T=c.a.memo((function(e){return c.a.createElement("div",null,c.a.createElement(I,{message:e.message,onChange:e.onChange}),c.a.createElement(v,{textOnBtn:"Save Data",onClick:e.onSaveClick}),c.a.createElement(v,{textOnBtn:"Restore Data",onClick:e.onRestoreClick}))})),M=c.a.memo((function(e){var t=Object(a.useCallback)((function(t){e.onChange(t.currentTarget.value)}),[e]);return c.a.createElement("select",{onChange:t,value:e.value},e.selectOption.map((function(e,t){return c.a.createElement("option",{key:t},e)})))})),D=c.a.memo((function(e){var t=function(t){e.onChange(t.currentTarget.value)};return c.a.createElement("div",null,e.RadioSelect.map((function(n,a){return c.a.createElement("div",{key:a},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",checked:e.value===n,name:e.name,value:n,onChange:t}),n))})))})),F=c.a.memo((function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,"List of people"),c.a.createElement("ul",null,e.people.map((function(e){return c.a.createElement("li",null,e.name)}))),c.a.createElement(v,{textOnBtn:"All people",onClick:e.onAllClick}),c.a.createElement(v,{textOnBtn:"UP",onClick:e.onUpClick}),c.a.createElement(v,{textOnBtn:"DOWN",onClick:e.onDownClick}),c.a.createElement(v,{textOnBtn:"18+ years old",onClick:e.onYearsClick}))})),P=function(e,t){switch(t.type){case"SORT":var n=[];return"up"===t.payload&&(n=e.sort((function(e,t){var n=e.name.toLocaleLowerCase(),a=t.name.toLocaleLowerCase();return n<a?-1:n>a?1:0}))),"down"===t.payload&&(n=e.sort((function(e,t){var n=e.name.toLocaleLowerCase(),a=t.name.toLocaleLowerCase();return a<n?-1:a>n?1:0}))),n;case"CHECK":return e.filter((function(e){return e.age>=t.payload}));default:return Object(u.a)(e)}},R=function(e){return{type:"SORT",payload:e}},H=c.a.memo((function(e){return c.a.createElement("div",{style:{display:"inline-block",textAlign:"center"}},c.a.createElement("div",{onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},e.time,e.showDateBlock?c.a.createElement("div",{style:{width:"150px",height:"30px",border:"1px solid #4CAF50",borderRadius:"3px"}},e.date):""),c.a.createElement(v,{textOnBtn:"Start",onClick:e.onStartClick}),c.a.createElement(v,{textOnBtn:"Stop",onClick:e.onStopClick}))})),K=n(18),J=n.n(K),V=n(8),W=n(13),G={loading:!1},U=function(e){return{type:"SET_LOADING",loading:e}},Y=n(34),z=n.n(Y),X=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:z.a,alt:"no img ;("}))},Q=c.a.memo((function(e){var t=Object(a.useCallback)((function(t){e.onChange(+t.currentTarget.value)}),[e]);return c.a.createElement("div",null,c.a.createElement("div",null,"Your number is: ",e.value),e.minVaue,c.a.createElement("input",{type:"range",style:{cursor:"pointer"},min:e.minVaue,max:e.maxValue,value:e.value,onChange:t,step:1}),e.maxValue)})),Z={textAlign:"center",marginTop:"50px"};var $=c.a.memo((function(){var e=Object(a.useState)("hi"),t=Object(m.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)("books"),o=Object(m.a)(r,2),i=o[0],s=o[1],d=Object(a.useState)("tea"),b=Object(m.a)(d,2),p=b[0],E=b[1],f=Object(a.useCallback)((function(e){l(e)}),[]),g=function(e,t){var n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}("test",{x:n}),h=Object(a.useCallback)((function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("test",{x:n})}),[n]),O=Object(a.useCallback)((function(){l(g.x)}),[g.x]),C=Object(a.useCallback)((function(e){s(e)}),[]),k=Object(a.useCallback)((function(e){E(e)}),[]),j=[{id:"1",name:"Laci",age:28},{id:"2",name:"Kari",age:28},{id:"3",name:"Gyuri",age:26},{id:"4",name:"Diana",age:25},{id:"5",name:"Richi",age:7},{id:"6",name:"Drake",age:8}],_=Object(a.useState)(j),x=Object(m.a)(_,2),y=x[0],S=x[1],w=Object(a.useCallback)((function(){var e=P(j,R("down"));S(Object(u.a)(e))}),[j]),B=Object(a.useCallback)((function(){var e=P(j,R("up"));S(Object(u.a)(e))}),[j]),N=Object(a.useCallback)((function(){var e=P(j,{type:"CHECK",payload:18});S(Object(u.a)(e))}),[j]),L=Object(a.useCallback)((function(){S([].concat(j))}),[j]),A=Object(a.useState)(),I=Object(m.a)(A,2),K=I[0],W=I[1],G=Object(a.useState)(J()().format("LTS")),Y=Object(m.a)(G,2),z=Y[0],$=Y[1],q=Object(a.useState)(J()().format("LL")),ee=Object(m.a)(q,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),ce=Object(m.a)(ae,2),le=ce[0],re=ce[1],oe=Object(a.useCallback)((function(){clearInterval(K)}),[K]),ie=Object(a.useCallback)((function(){re(!0)}),[]),ue=Object(a.useCallback)((function(){re(!1)}),[]),me=Object(V.c)((function(e){return e.loading})),se=Object(V.b)(),de=Object(a.useCallback)((function(){se(U(!0)),setTimeout((function(){return se(U(!1))}),3e3)}),[se]),be=Object(a.useState)(0),pe=Object(m.a)(be,2),Ee=pe[0],fe=pe[1],ge=Object(a.useCallback)((function(e){fe(e)}),[]);return c.a.createElement("div",null,me.loading?c.a.createElement(X,null):c.a.createElement("div",null,c.a.createElement("div",{style:Z},c.a.createElement(T,{message:n,onChange:f,onSaveClick:h,onRestoreClick:O})),c.a.createElement(M,{selectOption:["books","films","traveling","sport","coding"],value:i,onChange:C}),c.a.createElement(D,{RadioSelect:["tea","milk","water","beer","home-made shnaps :D"],value:p,name:"drink",onChange:k}),c.a.createElement(F,{people:y,onDownClick:w,onUpClick:B,onYearsClick:N,onAllClick:L}),c.a.createElement(H,{time:z,date:te,showDateBlock:le,onStartClick:function(){clearInterval(K);var e=window.setInterval((function(){return $(J()().format("LTS"))}),1e3);ne(J()().format("LL")),W(e)},onStopClick:oe,onMouseEnter:ie,onMouseLeave:ue}),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("span",null,"PRELOADER EXAMPLE")),c.a.createElement(v,{textOnBtn:"Preloader",onClick:de})),c.a.createElement("div",null,c.a.createElement("span",null,"Range example"),c.a.createElement(Q,{maxValue:100,minVaue:0,value:Ee,onChange:ge}))))})),q={backgroundColor:"#E2E2E2",color:"#363537",border:"#FFF"},ee={backgroundColor:"#363537",color:"#FAFAFA",border:"#6B8096"},te={theme:"light"},ne=c.a.memo((function(){var e=Object(V.c)((function(e){return e.theme})),t=Object(V.b)();return c.a.createElement("div",{style:"light"===e.theme?q:ee},c.a.createElement(D,{onChange:function(e){"light"!==e&&"dark"!==e||t(function(e){return{type:"CHANGE-THEME",theme:e}}(e))},RadioSelect:["light","dark"],name:"theme",value:e.theme}))}));var ae=function(){var e=Object(V.c)((function(e){return e.theme}));return c.a.createElement("div",{style:"light"===e.theme?q:ee},c.a.createElement(o.a,null,c.a.createElement(A,null),c.a.createElement(i.a,{path:"/prejunior",render:function(){return c.a.createElement(B,null)}}),c.a.createElement(i.a,{path:"/junior",render:function(){return c.a.createElement($,null)}}),c.a.createElement(i.a,{path:"/strongjunior",render:function(){return c.a.createElement(ne,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=n(17),le=Object(ce.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(W.a)(Object(W.a)({},e),{},{loading:t.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return Object(W.a)(Object(W.a)({},e),{},{theme:t.theme});default:return e}}}),re=Object(ce.c)(le);r.a.render(c.a.createElement(V.a,{store:re},c.a.createElement(c.a.StrictMode,null,c.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.245bfb9e.chunk.js.map