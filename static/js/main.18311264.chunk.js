(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{174:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);for(var c=n(0),i=n.n(c),s=n(66),a=n.n(s),r=(n(174),n(42)),o=n(12),l=[{key:"0",text:"Hindu Philosophy",value:"hinduPhilosophy"},{key:"1",text:"Hindu History",value:"hinduHistory"},{key:"2",text:"Hindu identity",value:"hinduIdentity"},{key:"3",text:"Know your Nation",value:"knowYourNation"}],j={hours:[],minutes:[],seconds:[]},u=0;u<100;u++)j.hours.push({key:u,text:u,value:60*u*60});for(var d=0;d<60;d++)j.minutes.push({key:d,text:d,value:60*d});for(var b=0;b<60;b++)j.seconds.push({key:b,text:b,value:b});for(var A=[],h=1;h<=50;h++)A.push({key:h,text:h,value:h});var O=n(209),x=n(37),m=n(2),g=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=(t[0],t[1]),i=Object(c.useState)(!1),s=Object(o.a)(i,2),a=s[0],r=(s[1],Object(x.b)()),l=r.isAuthenticated,j=r.isLoading,u=r.user;window.matchMedia("(display-mode: standalone)").matches,window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),n(e)}));return Object(m.jsxs)(O.a,{divided:!0,stackable:!0,size:"massive",style:{background:"#570E0E"},children:[Object(m.jsx)(O.a.Item,{header:!0,style:{background:"#570E0E"},children:Object(m.jsx)("h1",{style:{color:"white"},children:"KET\xa0-\xa0Kailasa\xa0eligiblity\xa0test"})}),l&&!j&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(O.a.Item,{position:"right",style:{background:"#570E0E",color:"white"},children:[Object(m.jsxs)("h1",{children:["Welcome ",u.nickname,"!\xa0\xa0\xa0\xa0"]}),Object(m.jsx)("img",{src:u.picture,alt:""})]})}),j&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O.a.Item,{position:"right",children:Object(m.jsx)("img",{src:"data:image/gif;base64,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",alt:""})})})]})},f=function(e){var t=e.children;return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(g,{}),Object(m.jsx)("main",{children:t})]})},p=n(203),w=n(213),v=n(93),C=function(){return Object(m.jsx)(p.a,{children:Object(m.jsxs)(w.a,{icon:!0,size:"big",children:[Object(m.jsx)(v.a,{name:"circle notched",loading:!0}),Object(m.jsxs)(w.a.Content,{children:[Object(m.jsx)(w.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]})})},k=n(61),B=(n(73),n(215)),Q=n(217),S=n(156),y=n(210),E=n(214),I=n.p+"static/media/anandagandha-sm-copy.debb8840.png",F=n.p+"static/media/kailaasa-flag-triangular-2019-compressed.b6011790.png",D=n(208),T=function(e){if(null===e||void 0===e||"number"!==typeof e)return null;var t=parseInt(e),n=null;return t>=97?n="A+":t>=93&&t<=96?n="A":t>=90&&t<=92?n="A-":t>=87&&t<=89?n="B+":t>=83&&t<=86?n="B":t>=80&&t<=82?n="B-":t>=77&&t<=79?n="C+":t>=73&&t<=76?n="C":t>=70&&t<=72?n="C-":t>=67&&t<=69?n="D+":t>=63&&t<=66?n="D":t>=60&&t<=62?n="D-":t<60&&(n="F"),{grade:n,remarks:e>=60?"Congratulations, on mutlipe choice questions you passed!":"Sorry, YOU FAILED mutlipe choice questions."}},K=function(e,t){return 0===e?0:Number((100*t/e).toFixed(2))},G=function(e){var t;switch(e){case 0:t="A.";break;case 1:t="B.";break;case 2:t="C.";break;case 3:t="D.";break;default:t=null}return t},H=function(e){for(var t=(e=Object(k.a)(e)).length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e},z=function(e){return null===e||void 0===e||"number"!==typeof e?null:{hours:"0".concat(Math.floor(e/36e5)).slice(-2),minutes:"0".concat(Math.floor(e/6e4%60)).slice(-2),seconds:"0".concat(Math.floor(e/1e3%60)%60).slice(-2)}},q=n(216),Y=function(){return window.addEventListener("online",(function(){return window.location.reload()})),Object(m.jsx)(p.a,{children:Object(m.jsx)(B.a,{placeholder:!0,children:Object(m.jsxs)(q.a,{icon:!0,children:[Object(m.jsx)(v.a,{name:"unlink"}),Object(m.jsx)("h1",{children:"Offline"}),Object(m.jsxs)("p",{children:["There is no Internet connection. We'll try to reload automatically once you're back online!"," ",Object(m.jsx)("span",{role:"img","aria-label":"signal",children:"\ud83d\udcf6"})]})]})})})},M=function(e){var t=e.startQuiz,n=e.attempts,i=Object(x.b)().loginWithRedirect,s=Object(x.b)(),a=s.logout,j=s.isAuthenticated,u=s.isLoading,d=s.user,b=s.getAccessTokenSilently,A=Object(c.useState)({value:null,text:null}),h=Object(o.a)(A,2),g=h[0],f=h[1],v=Object(c.useState)(5),T=Object(o.a)(v,2),K=T[0],G=(T[1],Object(c.useState)("0")),z=Object(o.a)(G,2),q=z[0],M=(z[1],Object(c.useState)("0")),L=Object(o.a)(M,2),N=L[0],U=(L[1],Object(c.useState)({hours:0,minutes:4,seconds:0})),R=Object(o.a)(U,2),W=R[0],P=(R[1],Object(c.useState)(null)),V=Object(o.a)(P,2),Z=(V[0],V[1],Object(c.useState)(null)),J=Object(o.a)(Z,2),X=J[0],_=J[1],$=Object(c.useState)(!1),ee=Object(o.a)($,2),te=ee[0],ne=(ee[1],Object(c.useState)(!1)),ce=Object(o.a)(ne,2),ie=ce[0],se=ce[1],ae=!1;g.value&&K&&q&&N&&(W.hours||W.minutes||W.seconds)&&(ae=!0);return Object(c.useEffect)((function(){ie&&b().then((function(e){D.a.post("https://kerserver.onrender.com/getQuestions",Object(r.a)({major:g.value},d),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var n=e.data;n=n.map((function(e){e.options=H(Object(k.a)(e.answers))}));var c=60*W.hours*60+60*W.minutes+W.seconds;t(e.data,c,g)})).catch((function(e){_(e)}))}))}),[ie,g.value]),te?Object(m.jsx)(Y,{}):Object(m.jsxs)(p.a,{children:[Object(m.jsx)(B.a,{children:Object(m.jsx)(Q.a,{columns:3,children:Object(m.jsxs)(Q.a.Row,{children:[Object(m.jsx)(Q.a.Column,{children:Object(m.jsx)(S.a,{size:"medium",verticalAlign:"middle",src:F})},1),Object(m.jsx)(Q.a.Column,{textAlign:"center",verticalAlign:"middle",children:Object(m.jsx)("h2",{children:"Majors"})},2),Object(m.jsx)(Q.a.Column,{children:Object(m.jsx)(S.a,{size:"small",verticalAlign:"middle",src:I,floated:"right"})},3)]})})}),Object(m.jsx)(B.a,{children:Object(m.jsx)(y.a.Group,{children:Object(m.jsx)(y.a,{children:Object(m.jsxs)(y.a.Content,{children:[X&&Object(m.jsxs)(w.a,{error:!0,onDismiss:function(){return _(null)},children:[Object(m.jsx)(w.a.Header,{children:"Error!"}),X.message]}),Object(m.jsxs)(y.a.Meta,{children:[Object(m.jsx)("br",{}),Object(m.jsx)(y.a.Description,{children:j&&!u?Object(m.jsx)("h3",{children:"Please choose a major to start. Complete all the majors."}):Object(m.jsx)("h3",{children:"Please login to start"})}),Object(m.jsx)(O.a,{vertical:!0,fluid:!0,size:"massive",children:l.map((function(e,t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(O.a.Item,{name:e.text,disabled:!j||!n,active:g.value===e.value,onClick:function(){f(e)},children:[Object(m.jsxs)("b",{style:{marginRight:"8px"},children:[t+1,". "]}),e.text,Object(m.jsx)("span",{style:{margin:"8px",color:"grey",fontSize:"10px"},children:j&&n&&n[e.value]+" attemps"}),j&&!n&&Object(m.jsx)("span",{style:{alignSelf:"right"},children:"..."})]},t)})}))})]}),Object(m.jsx)(y.a.Extra,{children:Object(m.jsx)(Q.a,{columns:2,children:Object(m.jsxs)(Q.a.Row,{children:[Object(m.jsx)(Q.a.Column,{children:j||u?Object(m.jsx)(E.a,{onClick:function(){return a({logoutParams:{returnTo:window.location.href}})},size:"small",icon:"user",labelPosition:"left",content:"Logout",disabled:ae||ie}):Object(m.jsx)(E.a,{primary:!0,size:"small",icon:"user",labelPosition:"left",content:"Login",onClick:function(){i()},disabled:ae||ie})},1),Object(m.jsx)(Q.a.Column,{floated:"right",children:Object(m.jsx)(E.a,{primary:!0,size:"small",icon:"play",labelPosition:"left",content:ie?"Processing...":"Start",onClick:function(){return se(!0)},disabled:!ae||ie,floated:"right"})})]})})})]})})})}),ie&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("br",{})," ",Object(m.jsx)(C,{})]}),Object(m.jsx)("br",{})]})},L=n(204),N=n(207),U=n(205),R=n(35),W=n.n(R),P=n(206),V=n(127),Z=n.n(V),J=function(e){var t=e.countdownTime,n=e.timeOver,i=e.setTimeTaken,s=1e3*t,a=Object(c.useState)(s),r=Object(o.a)(a,2),l=r[0],j=r[1],u=z(l),d=u.hours,b=u.minutes,A=u.seconds;return Object(c.useEffect)((function(){var e=setInterval((function(){var t=l-1e3;t>=0?j(t):(clearInterval(e),Z.a.fire({title:"Your Time's Up",icon:"info",timer:5e3,willClose:function(){return n(s-l)}}))}),1e3);return function(){clearInterval(e),i(s-l+1e3)}}),[l]),Object(m.jsxs)(E.a.Group,{size:"massive",basic:!0,floated:"right",children:[Object(m.jsx)(P.a,{content:"Hours",trigger:Object(m.jsx)(E.a,{active:!0,children:d}),position:"bottom left"}),Object(m.jsx)(P.a,{content:"Minutes",trigger:Object(m.jsx)(E.a,{active:!0,children:b}),position:"bottom left"}),Object(m.jsx)(P.a,{content:"Seconds",trigger:Object(m.jsx)(E.a,{active:!0,children:A}),position:"bottom left"})]})},X=function(e){var t=e.data,n=e.countdownTime,i=e.endQuiz,s=e.major,a=Object(x.b)(),l=a.user,j=a.getAccessTokenSilently,u=Object(c.useState)(0),d=Object(o.a)(u,2),b=d[0],A=d[1],h=Object(c.useState)(0),g=Object(o.a)(h,2),f=g[0],k=g[1],D=Object(c.useState)(null),T=Object(o.a)(D,2),K=T[0],H=T[1],z=Object(c.useState)([]),Y=Object(o.a)(z,2),M=Y[0],R=Y[1],P=Object(c.useState)(null),V=Object(o.a)(P,2),Z=V[0],X=V[1],_=function(e,t){var n=t.name;H(n)},$=function(e,t){var n=t.name,c=t.value,i=Object(r.a)({},K);i[n]=c,H(i)};return t?Object(m.jsx)(y.a.Header,{children:Object(m.jsxs)(p.a,{children:[Object(m.jsx)(B.a,{children:Object(m.jsx)(Q.a,{columns:3,children:Object(m.jsxs)(Q.a.Row,{children:[Object(m.jsx)(Q.a.Column,{children:Object(m.jsx)(S.a,{size:"medium",verticalAlign:"middle",src:F})},1),Object(m.jsx)(Q.a.Column,{textAlign:"center",verticalAlign:"middle",children:Object(m.jsx)("h2",{children:s.text})},2),Object(m.jsx)(Q.a.Column,{children:Object(m.jsx)(S.a,{size:"small",src:I,floated:"right"})},3)]})})}),Object(m.jsx)(B.a,{children:Object(m.jsx)(y.a.Group,{divided:!0,children:Object(m.jsx)(y.a,{children:Object(m.jsxs)(y.a.Content,{children:[Object(m.jsxs)(y.a.Extra,{children:[Object(m.jsxs)(q.a,{as:"h1",block:!0,floated:"left",children:[Object(m.jsx)(v.a,{name:"info circle"}),Object(m.jsx)(q.a.Content,{children:"Question No.".concat(b+1," of ").concat(t.length)})]}),Object(m.jsx)(J,{countdownTime:n,timeOver:function(e){return i({totalQuestions:t.filter((function(e){return"mcq"===e.type})).length,correctAnswers:f,timeTaken:e,questionsAndAnswers:M.filter((function(e){return"mcq"===e.type}))})},setTimeTaken:X})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(y.a.Meta,{children:[Object(m.jsx)(w.a,{size:"huge",floating:!0,children:Object(m.jsx)("b",{children:"Q. ".concat(W.a.decode(t[b].question))})}),Object(m.jsx)("br",{}),"mcq"===W.a.decode(t[b].type)&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.a.Description,{children:Object(m.jsx)("h3",{children:"Please choose one of the following answers:"})}),Object(m.jsx)(L.a,{}),Object(m.jsx)(O.a,{vertical:!0,fluid:!0,size:"massive",children:t[b].options.map((function(e,t){var n=G(t),c=W.a.decode(e);return Object(m.jsxs)(O.a.Item,{name:c,active:K===c,onClick:_,children:[Object(m.jsx)("b",{style:{marginRight:"8px"},children:n}),c]},"mcq"+t)}))})]}),("application"===W.a.decode(t[b].type)||"activity"===W.a.decode(t[b].type))&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.a.Description,{children:Object(m.jsx)("h3",{children:"Please fill the deatils"})}),Object(m.jsx)(O.a,{vertical:!0,fluid:!0,size:"massive",children:Object(m.jsx)(N.a,{children:t[b].options.map((function(e,t){var n=G(t),c=W.a.decode(e);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(O.a.Item,{name:c,children:[Object(m.jsx)("b",{style:{marginRight:"8px"},children:n}),c]},"others"+t),Object(m.jsx)(U.a,{onChange:$,name:c,value:K&&K[c]||"",placeholder:"Tell us more",style:{minHeight:100}},"othersAns"+t)]})}))})})]})]}),Object(m.jsx)(L.a,{}),Object(m.jsx)(y.a.Extra,{children:Object(m.jsx)(E.a,{primary:!0,content:"Next",onClick:function(){return function(e){var n=0,c={_questionId:e,question:W.a.decode(t[b].question),type:W.a.decode(t[b].type),user_answer:K,correct_answer:"",point:0};j().then((function(e){fetch("https://kerserver.onrender.com/validateAnswer",{method:"POST",body:JSON.stringify({major:s.value,question:c,email:l.email,questionsAndAnswers:M}),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer "+e}}).then((function(e){return e.json().then((function(e){e.correct_answer===K&&(n=1);var c=M;if(c.push({question:W.a.decode(t[b].question),type:W.a.decode(t[b].type),user_answer:K,correct_answer:e.correct_answer,point:n}),b===t.length-1)return i({totalQuestions:t.filter((function(e){return"mcq"===e.type})).length,correctAnswers:f+n,timeTaken:Z,questionsAndAnswers:c.filter((function(e){return"mcq"===e.type}))});k(f+n),A(b+1),H(null),R(c)}))}))}))}(W.a.decode(t[b]._id))},floated:"right",size:"big",icon:"right chevron",labelPosition:"right",disabled:!K})})]})})})}),Object(m.jsx)("br",{})]})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("br",{})," ",Object(m.jsx)(C,{})]})},_=(n(211),function(e){var t=e.totalQuestions,n=e.correctAnswers,c=e.timeTaken,i=(e.replayQuiz,e.resetQuiz),s=K(t,n),a=T(s),r=a.grade,o=a.remarks,l=z(c),j=l.hours,u=l.minutes,d=l.seconds;return Object(m.jsxs)(B.a,{children:[Object(m.jsx)(q.a,{as:"h1",textAlign:"center",block:!0,children:o}),Object(m.jsxs)(q.a,{as:"h2",textAlign:"center",block:!0,children:["Grade: ",r]}),Object(m.jsxs)(q.a,{as:"h3",textAlign:"center",block:!0,children:["Total Questions: ",t]}),Object(m.jsxs)(q.a,{as:"h3",textAlign:"center",block:!0,children:["Correct Answers: ",n]}),Object(m.jsxs)(q.a,{as:"h3",textAlign:"center",block:!0,children:["Your Score: ",s,"%"]}),Object(m.jsx)(q.a,{as:"h3",textAlign:"center",block:!0,children:"Passing Score: 60%"}),Object(m.jsxs)(q.a,{as:"h3",textAlign:"center",block:!0,children:["Time Taken:"," ","".concat(Number(j),"h ").concat(Number(u),"m ").concat(Number(d),"s")]}),Object(m.jsx)(q.a,{as:"h1",textAlign:"center",block:!0,children:"we will vaidate apllication and activy and update you."}),Object(m.jsx)("div",{style:{marginTop:35},children:Object(m.jsx)(E.a,{color:"teal",content:"Back to Home",onClick:i,size:"big",icon:"home",labelPosition:"left",style:{marginBottom:8}})})]})}),$=n(212),ee=function(e){var t=e.questionsAndAnswers;return Object(m.jsxs)($.a,{celled:!0,striped:!0,selectable:!0,size:"large",children:[Object(m.jsx)($.a.Header,{children:Object(m.jsxs)($.a.Row,{children:[Object(m.jsx)($.a.HeaderCell,{children:"No."}),Object(m.jsx)($.a.HeaderCell,{children:"Questions"}),Object(m.jsx)($.a.HeaderCell,{children:"Your Answers"}),Object(m.jsx)($.a.HeaderCell,{children:"Correct Answers"}),Object(m.jsx)($.a.HeaderCell,{children:"Points"})]})}),Object(m.jsx)($.a.Body,{children:t.map((function(e,t){return Object(m.jsxs)($.a.Row,{children:[Object(m.jsx)($.a.Cell,{children:t+1}),Object(m.jsx)($.a.Cell,{children:e.question}),Object(m.jsx)($.a.Cell,{children:e.user_answer}),Object(m.jsx)($.a.Cell,{children:e.correct_answer}),Object(m.jsx)($.a.Cell,{children:e.point})]},t+1)}))})]})},te=function(e){var t=e.totalQuestions,n=e.correctAnswers,i=e.timeTaken,s=e.questionsAndAnswers,a=e.replayQuiz,r=e.resetQuiz,l=Object(c.useState)("Stats"),j=Object(o.a)(l,2),u=j[0],d=j[1],b=function(e,t){var n=t.name;d(n)};return Object(m.jsxs)(p.a,{children:[Object(m.jsxs)(O.a,{fluid:!0,widths:2,children:[Object(m.jsx)(O.a.Item,{name:"Stats",active:"Stats"===u,onClick:b}),Object(m.jsx)(O.a.Item,{name:"QNA",active:"QNA"===u,onClick:b})]}),"Stats"===u&&Object(m.jsx)(_,{totalQuestions:t,correctAnswers:n,timeTaken:i,replayQuiz:a,resetQuiz:r}),"QNA"===u&&Object(m.jsx)(ee,{questionsAndAnswers:s}),Object(m.jsx)("br",{})]})},ne=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(null),a=Object(o.a)(s,2),l=a[0],j=a[1],u=Object(c.useState)(null),d=Object(o.a)(u,2),b=d[0],A=d[1],h=Object(c.useState)(null),O=Object(o.a)(h,2),g=O[0],p=O[1],w=Object(c.useState)(null),v=Object(o.a)(w,2),k=v[0],B=v[1],Q=Object(c.useState)(!1),S=Object(o.a)(Q,2),y=S[0],E=S[1],I=Object(c.useState)(!1),F=Object(o.a)(I,2),T=F[0],K=F[1],G=Object(c.useState)(null),z=Object(o.a)(G,2),q=z[0],Y=z[1],L=Object(x.b)(),N=L.user,U=L.isAuthenticated,R=(L.isLoading,L.getAccessTokenSilently);return Object(c.useEffect)((function(){if(U){R().then((function(e){D.a.post("https://kerserver.onrender.com/attempts",Object(r.a)({},N),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data;A(t)})).catch((function(e){console.log(e)}))}))}}),[U]),Object(m.jsxs)(f,{children:[n&&Object(m.jsx)(C,{}),!n&&!y&&!T&&Object(m.jsx)(M,{startQuiz:function(e,t,n){j(e),i(!0),B(t),p(n),E(!0),i(!1)},attempts:b}),!n&&y&&Object(m.jsx)(X,{data:l,countdownTime:k,endQuiz:function(e){i(!0),E(!1),K(!0),Y(e),i(!1)},major:g}),!n&&T&&Object(m.jsx)(te,Object(r.a)(Object(r.a)({},q),{},{replayQuiz:function(){i(!0);var e=H(l);e.forEach((function(e){e.options=H(e.options)})),j(e),E(!0),K(!1),Y(null),i(!1)},resetQuiz:function(){i(!0),E(!1),K(!1),Y(null),i(!1)}}))]})},ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),Z.a.fire({toast:"true",position:"bottom",icon:"success",title:"App is ready to work offline.",showConfirmButton:!1,timer:6e3}),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(x.a,{domain:"dev-88bircurddzvffqn.us.auth0.com",clientId:"IlSZ7rPwgaPRDt81GGYnC7W138mdDyWA",authorizationParams:{audience:"kerserver.onrender.com",redirect_uri:window.location.href},children:Object(m.jsx)(ne,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/quiz-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/quiz-app","/service-worker.js");ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker.")}))):ie(t,e)}))}}()}},[[187,1,2]]]);
//# sourceMappingURL=main.18311264.chunk.js.map