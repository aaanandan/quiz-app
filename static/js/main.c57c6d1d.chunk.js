(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{146:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);for(var c=n(0),i=n.n(c),a=n(55),s=n.n(a),r=(n(146),n(50)),o=n(9),l=[{key:"0",text:"Hindu Philosophy",value:"hinduPhilosophy"},{key:"1",text:"Hindu History",value:"hinduHistory"},{key:"2",text:"Hindu identity",value:"hinduIdentity"},{key:"3",text:"Know your Nation",value:"knowYourNation"}],j={hours:[],minutes:[],seconds:[]},u=0;u<100;u++)j.hours.push({key:u,text:u,value:60*u*60});for(var d=0;d<60;d++)j.minutes.push({key:d,text:d,value:60*d});for(var b=0;b<60;b++)j.seconds.push({key:b,text:b,value:b});for(var h=[],A=1;A<=50;A++)h.push({key:A,text:A,value:A});var O=n(178),x=n(28),g=n(1),m=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=(t[0],t[1]),i=Object(c.useState)(!1),a=Object(o.a)(i,2),s=a[0],r=(a[1],Object(x.b)()),l=r.isAuthenticated,j=r.isLoading,u=r.user;window.matchMedia("(display-mode: standalone)").matches,window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),n(e)}));return Object(g.jsxs)(O.a,{divided:!0,stackable:!0,size:"massive",style:{background:"#570E0E"},children:[Object(g.jsx)(O.a.Item,{header:!0,style:{background:"#570E0E"},children:Object(g.jsx)("h1",{style:{color:"white"},children:"KET\xa0-\xa0Kailasa\xa0eligiblity\xa0test"})}),l&&!j&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(O.a.Item,{position:"right",style:{background:"#570E0E",color:"white"},children:[Object(g.jsxs)("h1",{children:["Welcome ",u.nickname,"!\xa0\xa0\xa0\xa0"]}),Object(g.jsx)("img",{src:u.picture,alt:""})]})}),j&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(O.a.Item,{position:"right",children:Object(g.jsx)("img",{src:"data:image/gif;base64,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",alt:""})})})]})},f=function(e){var t=e.children;return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(m,{}),Object(g.jsx)("main",{children:t})]})},w=n(174),p=n(182),k=n(71),C=function(){return Object(g.jsx)(w.a,{children:Object(g.jsxs)(p.a,{icon:!0,size:"big",children:[Object(g.jsx)(k.a,{name:"circle notched",loading:!0}),Object(g.jsxs)(p.a.Content,{children:[Object(g.jsx)(p.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]})})},v=n(49),S=(n(61),n(184)),B=n(187),Q=n(130),E=n(179),y=n(183),I=n.p+"static/media/anandagandha-sm-copy.debb8840.png",F=n.p+"static/media/kailaasa-flag-triangular-2019-compressed.b6011790.png",z=n(177),D=function(e){if(null===e||void 0===e||"number"!==typeof e)return null;var t=parseInt(e),n=null;return t>=97?n="A+":t>=93&&t<=96?n="A":t>=90&&t<=92?n="A-":t>=87&&t<=89?n="B+":t>=83&&t<=86?n="B":t>=80&&t<=82?n="B-":t>=77&&t<=79?n="C+":t>=73&&t<=76?n="C":t>=70&&t<=72?n="C-":t>=67&&t<=69?n="D+":t>=63&&t<=66?n="D":t>=60&&t<=62?n="D-":t<60&&(n="F"),{grade:n,remarks:e>=60?"Congratulations, YOU PASSED!":"Sorry, YOU FAILED!"}},T=function(e,t){return 0===e?0:Number((100*t/e).toFixed(2))},K=function(e){var t;switch(e){case 0:t="A.";break;case 1:t="B.";break;case 2:t="C.";break;case 3:t="D.";break;default:t=null}return t},G=function(e){for(var t=(e=Object(v.a)(e)).length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e},H=function(e){return null===e||void 0===e||"number"!==typeof e?null:{hours:"0".concat(Math.floor(e/36e5)).slice(-2),minutes:"0".concat(Math.floor(e/6e4%60)).slice(-2),seconds:"0".concat(Math.floor(e/1e3%60)%60).slice(-2)}},q=n(185),Y=function(){return window.addEventListener("online",(function(){return window.location.reload()})),Object(g.jsx)(w.a,{children:Object(g.jsx)(S.a,{placeholder:!0,children:Object(g.jsxs)(q.a,{icon:!0,children:[Object(g.jsx)(k.a,{name:"unlink"}),Object(g.jsx)("h1",{children:"Offline"}),Object(g.jsxs)("p",{children:["There is no Internet connection. We'll try to reload automatically once you're back online!"," ",Object(g.jsx)("span",{role:"img","aria-label":"signal",children:"\ud83d\udcf6"})]})]})})})},N=function(e){var t=e.startQuiz,n=e.attempts,i=Object(x.b)().loginWithRedirect,a=Object(x.b)(),s=a.logout,j=a.isAuthenticated,u=a.isLoading,d=a.user,b=a.getAccessTokenSilently,h=Object(c.useState)({value:null,text:null}),A=Object(o.a)(h,2),m=A[0],f=A[1],k=Object(c.useState)(5),D=Object(o.a)(k,2),T=D[0],K=(D[1],Object(c.useState)("0")),H=Object(o.a)(K,2),q=H[0],N=(H[1],Object(c.useState)("0")),L=Object(o.a)(N,2),M=L[0],U=(L[1],Object(c.useState)({hours:0,minutes:4,seconds:0})),P=Object(o.a)(U,2),R=P[0],W=(P[1],Object(c.useState)(null)),V=Object(o.a)(W,2),Z=(V[0],V[1],Object(c.useState)(null)),J=Object(o.a)(Z,2),X=J[0],_=J[1],$=Object(c.useState)(!1),ee=Object(o.a)($,2),te=ee[0],ne=(ee[1],Object(c.useState)(!1)),ce=Object(o.a)(ne,2),ie=ce[0],ae=ce[1],se=!1;m.value&&T&&q&&M&&(R.hours||R.minutes||R.seconds)&&(se=!0);return Object(c.useEffect)((function(){ie&&b().then((function(e){z.a.post("https://kerserver.onrender.com/getQuestions",Object(r.a)({major:m.value},d),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var n=e.data;n=n.map((function(e){e.options=G(Object(v.a)(e.answers))}));var c=60*R.hours*60+60*R.minutes+R.seconds;t(e.data,c,m)})).catch((function(e){_(e)}))}))}),[ie,m.value]),te?Object(g.jsx)(Y,{}):Object(g.jsxs)(w.a,{children:[Object(g.jsx)(S.a,{children:Object(g.jsx)(B.a,{columns:3,children:Object(g.jsxs)(B.a.Row,{children:[Object(g.jsx)(B.a.Column,{children:Object(g.jsx)(Q.a,{size:"medium",verticalAlign:"middle",src:F})},1),Object(g.jsx)(B.a.Column,{textAlign:"center",verticalAlign:"middle",children:Object(g.jsx)("h2",{children:"Majors"})},2),Object(g.jsx)(B.a.Column,{children:Object(g.jsx)(Q.a,{size:"small",verticalAlign:"middle",src:I,floated:"right"})},3)]})})}),Object(g.jsx)(S.a,{children:Object(g.jsx)(E.a.Group,{children:Object(g.jsx)(E.a,{children:Object(g.jsxs)(E.a.Content,{children:[X&&Object(g.jsxs)(p.a,{error:!0,onDismiss:function(){return _(null)},children:[Object(g.jsx)(p.a.Header,{children:"Error!"}),X.message]}),Object(g.jsxs)(E.a.Meta,{children:[Object(g.jsx)("br",{}),Object(g.jsx)(E.a.Description,{children:j&&!u?Object(g.jsx)("h3",{children:"Please choose a major to start. Complete all the majors."}):Object(g.jsx)("h3",{children:"Please login to start"})}),Object(g.jsx)(O.a,{vertical:!0,fluid:!0,size:"massive",children:l.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(O.a.Item,{name:e.text,disabled:!j||!n,active:m.value===e.value,onClick:function(){f(e)},children:[Object(g.jsxs)("b",{style:{marginRight:"8px"},children:[t+1,". "]}),e.text,Object(g.jsx)("span",{style:{margin:"8px",color:"grey",fontSize:"10px"},children:j&&n&&n[e.value]+" attemps"}),j&&!n&&Object(g.jsx)("span",{style:{alignSelf:"right"},children:"..."})]},t)})}))})]}),Object(g.jsx)(E.a.Extra,{children:Object(g.jsx)(B.a,{columns:2,children:Object(g.jsxs)(B.a.Row,{children:[Object(g.jsx)(B.a.Column,{children:j||u?Object(g.jsx)(y.a,{onClick:function(){return s({logoutParams:{returnTo:window.location.href}})},size:"small",icon:"user",labelPosition:"left",content:"Logout",disabled:se||ie}):Object(g.jsx)(y.a,{primary:!0,size:"small",icon:"user",labelPosition:"left",content:"Login",onClick:function(){i()},disabled:se||ie})},1),Object(g.jsx)(B.a.Column,{floated:"right",children:Object(g.jsx)(y.a,{primary:!0,size:"small",icon:"play",labelPosition:"left",content:ie?"Processing...":"Start",onClick:function(){return ae(!0)},disabled:!se||ie,floated:"right"})})]})})})]})})})}),ie&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("br",{})," ",Object(g.jsx)(C,{})]}),Object(g.jsx)("br",{})]})},L=n(175),M=n(72),U=n.n(M),P=n(176),R=n(103),W=n.n(R),V=function(e){var t=e.countdownTime,n=e.timeOver,i=e.setTimeTaken,a=1e3*t,s=Object(c.useState)(a),r=Object(o.a)(s,2),l=r[0],j=r[1],u=H(l),d=u.hours,b=u.minutes,h=u.seconds;return Object(c.useEffect)((function(){var e=setInterval((function(){var t=l-1e3;t>=0?j(t):(clearInterval(e),W.a.fire({title:"Your Time's Up",icon:"info",timer:5e3,willClose:function(){return n(a-l)}}))}),1e3);return function(){clearInterval(e),i(a-l+1e3)}}),[l]),Object(g.jsxs)(y.a.Group,{size:"massive",basic:!0,floated:"right",children:[Object(g.jsx)(P.a,{content:"Hours",trigger:Object(g.jsx)(y.a,{active:!0,children:d}),position:"bottom left"}),Object(g.jsx)(P.a,{content:"Minutes",trigger:Object(g.jsx)(y.a,{active:!0,children:b}),position:"bottom left"}),Object(g.jsx)(P.a,{content:"Seconds",trigger:Object(g.jsx)(y.a,{active:!0,children:h}),position:"bottom left"})]})},Z=function(e){var t=e.data,n=e.countdownTime,i=e.endQuiz,a=e.major,s=Object(x.b)(),r=s.user,l=s.getAccessTokenSilently,j=Object(c.useState)(0),u=Object(o.a)(j,2),d=u[0],b=u[1],h=Object(c.useState)(0),A=Object(o.a)(h,2),m=A[0],f=A[1],v=Object(c.useState)(null),z=Object(o.a)(v,2),D=z[0],T=z[1],G=Object(c.useState)([]),H=Object(o.a)(G,2),Y=H[0],N=H[1],M=Object(c.useState)(null),P=Object(o.a)(M,2),R=P[0],W=P[1],Z=function(e,t){var n=t.name;T(n)};return t?Object(g.jsx)(E.a.Header,{children:Object(g.jsxs)(w.a,{children:[Object(g.jsx)(S.a,{children:Object(g.jsx)(B.a,{columns:3,children:Object(g.jsxs)(B.a.Row,{children:[Object(g.jsx)(B.a.Column,{children:Object(g.jsx)(Q.a,{size:"medium",verticalAlign:"middle",src:F})},1),Object(g.jsx)(B.a.Column,{textAlign:"center",verticalAlign:"middle",children:Object(g.jsx)("h2",{children:a.text})},2),Object(g.jsx)(B.a.Column,{children:Object(g.jsx)(Q.a,{size:"small",src:I,floated:"right"})},3)]})})}),Object(g.jsx)(S.a,{children:Object(g.jsx)(E.a.Group,{divided:!0,children:Object(g.jsx)(E.a,{children:Object(g.jsxs)(E.a.Content,{children:[Object(g.jsxs)(E.a.Extra,{children:[Object(g.jsxs)(q.a,{as:"h1",block:!0,floated:"left",children:[Object(g.jsx)(k.a,{name:"info circle"}),Object(g.jsx)(q.a.Content,{children:"Question No.".concat(d+1," of ").concat(t.length)})]}),Object(g.jsx)(V,{countdownTime:n,timeOver:function(e){return i({totalQuestions:t.length,correctAnswers:m,timeTaken:e,questionsAndAnswers:Y})},setTimeTaken:W})]}),Object(g.jsx)("br",{}),Object(g.jsxs)(E.a.Meta,{children:[Object(g.jsx)(p.a,{size:"huge",floating:!0,children:Object(g.jsx)("b",{children:"Q. ".concat(U.a.decode(t[d].question))})}),Object(g.jsx)("br",{}),Object(g.jsx)(E.a.Description,{children:Object(g.jsx)("h3",{children:"Please choose one of the following answers:"})}),Object(g.jsx)(L.a,{}),Object(g.jsx)(O.a,{vertical:!0,fluid:!0,size:"massive",children:t[d].options.map((function(e,t){var n=K(t),c=U.a.decode(e);return Object(g.jsxs)(O.a.Item,{name:c,active:D===c,onClick:Z,children:[Object(g.jsx)("b",{style:{marginRight:"8px"},children:n}),c]},c)}))})]}),Object(g.jsx)(L.a,{}),Object(g.jsx)(E.a.Extra,{children:Object(g.jsx)(y.a,{primary:!0,content:"Next",onClick:function(){return function(e){var n=0,c={_questionId:e,question:U.a.decode(t[d].question),user_answer:D,correct_answer:"",point:0};l().then((function(e){fetch("https://kerserver.onrender.com/validateAnswer",{method:"POST",body:JSON.stringify({major:a.value,question:c,email:r.email,questionsAndAnswers:Y}),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer "+e}}).then((function(e){return e.json().then((function(e){e.correct_answer===D&&(n=1);var c=Y;if(c.push({question:U.a.decode(t[d].question),user_answer:D,correct_answer:e.correct_answer,point:n}),d===t.length-1)return i({totalQuestions:t.length,correctAnswers:m+n,timeTaken:R,questionsAndAnswers:c});f(m+n),b(d+1),T(null),N(c)}))}))}))}(U.a.decode(t[d]._id))},floated:"right",size:"big",icon:"right chevron",labelPosition:"right",disabled:!D})})]})})})}),Object(g.jsx)("br",{})]})}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("br",{})," ",Object(g.jsx)(C,{})]})},J=n(180),X=function(){return Object(g.jsx)(c.Fragment,{children:navigator.share?Object(g.jsx)(y.a,{title:"Share",floated:"right",size:"big",circular:!0,icon:"share alternate",onClick:function(){navigator.share({title:document.title,text:"Check out this quiz app \u2014 it rocks!",url:"https://safdarjamal.github.io/quiz-app/"}).then((function(){return console.log("Successfully shared")})).catch((function(e){return console.log(e.message)}))}}):Object(g.jsxs)(J.a,{closeIcon:!0,size:"tiny",trigger:Object(g.jsx)(y.a,{title:"Share",floated:"right",size:"big",circular:!0,icon:"share alternate"}),children:[Object(g.jsx)(J.a.Header,{className:"ui center aligned",children:"Share on"}),Object(g.jsxs)(J.a.Content,{className:"ui center aligned container",children:[Object(g.jsx)("a",{href:"https://www.facebook.com/sharer.php?u=https%3A//safdarjamal.github.io/quiz-app/",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsxs)(y.a,{color:"facebook",size:"big",style:{marginBottom:8},children:[Object(g.jsx)(k.a,{name:"facebook"}),"Facebook"]})}),Object(g.jsx)("a",{href:"https://twitter.com/intent/tweet?url=https%3A//safdarjamal.github.io/quiz-app/&text=Check%20out%20this%20quiz%20app%20\u2014%20it%20rocks!&via=_safdarjamal",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsxs)(y.a,{color:"twitter",size:"big",style:{marginBottom:8},children:[Object(g.jsx)(k.a,{name:"twitter"}),"Twitter"]})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsafdarjamal.github.io%2Fquiz-app%2F",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsxs)(y.a,{color:"linkedin",size:"big",children:[Object(g.jsx)(k.a,{name:"linkedin"}),"LinkedIn"]})})]})]})})},_=function(e){var t=e.totalQuestions,n=e.correctAnswers,c=e.timeTaken,i=e.replayQuiz,a=e.resetQuiz,s=T(t,n),r=D(s),o=r.grade,l=r.remarks,j=H(c),u=j.hours,d=j.minutes,b=j.seconds;return Object(g.jsxs)(S.a,{children:[Object(g.jsx)(q.a,{as:"h1",textAlign:"center",block:!0,children:l}),Object(g.jsxs)(q.a,{as:"h2",textAlign:"center",block:!0,children:["Grade: ",o]}),Object(g.jsxs)(q.a,{as:"h3",textAlign:"center",block:!0,children:["Total Questions: ",t]}),Object(g.jsxs)(q.a,{as:"h3",textAlign:"center",block:!0,children:["Correct Answers: ",n]}),Object(g.jsxs)(q.a,{as:"h3",textAlign:"center",block:!0,children:["Your Score: ",s,"%"]}),Object(g.jsx)(q.a,{as:"h3",textAlign:"center",block:!0,children:"Passing Score: 60%"}),Object(g.jsxs)(q.a,{as:"h3",textAlign:"center",block:!0,children:["Time Taken:"," ","".concat(Number(u),"h ").concat(Number(d),"m ").concat(Number(b),"s")]}),Object(g.jsxs)("div",{style:{marginTop:35},children:[Object(g.jsx)(y.a,{primary:!0,content:"Play Again",onClick:i,size:"big",icon:"redo",labelPosition:"left",style:{marginRight:15,marginBottom:8}}),Object(g.jsx)(y.a,{color:"teal",content:"Back to Home",onClick:a,size:"big",icon:"home",labelPosition:"left",style:{marginBottom:8}}),Object(g.jsx)(X,{})]})]})},$=n(181),ee=function(e){var t=e.questionsAndAnswers;return Object(g.jsxs)($.a,{celled:!0,striped:!0,selectable:!0,size:"large",children:[Object(g.jsx)($.a.Header,{children:Object(g.jsxs)($.a.Row,{children:[Object(g.jsx)($.a.HeaderCell,{children:"No."}),Object(g.jsx)($.a.HeaderCell,{children:"Questions"}),Object(g.jsx)($.a.HeaderCell,{children:"Your Answers"}),Object(g.jsx)($.a.HeaderCell,{children:"Correct Answers"}),Object(g.jsx)($.a.HeaderCell,{children:"Points"})]})}),Object(g.jsx)($.a.Body,{children:t.map((function(e,t){return Object(g.jsxs)($.a.Row,{children:[Object(g.jsx)($.a.Cell,{children:t+1}),Object(g.jsx)($.a.Cell,{children:e.question}),Object(g.jsx)($.a.Cell,{children:e.user_answer}),Object(g.jsx)($.a.Cell,{children:e.correct_answer}),Object(g.jsx)($.a.Cell,{children:e.point})]},t+1)}))})]})},te=function(e){var t=e.totalQuestions,n=e.correctAnswers,i=e.timeTaken,a=e.questionsAndAnswers,s=e.replayQuiz,r=e.resetQuiz,l=Object(c.useState)("Stats"),j=Object(o.a)(l,2),u=j[0],d=j[1],b=function(e,t){var n=t.name;d(n)};return Object(g.jsxs)(w.a,{children:[Object(g.jsxs)(O.a,{fluid:!0,widths:2,children:[Object(g.jsx)(O.a.Item,{name:"Stats",active:"Stats"===u,onClick:b}),Object(g.jsx)(O.a.Item,{name:"QNA",active:"QNA"===u,onClick:b})]}),"Stats"===u&&Object(g.jsx)(_,{totalQuestions:t,correctAnswers:n,timeTaken:i,replayQuiz:s,resetQuiz:r}),"QNA"===u&&Object(g.jsx)(ee,{questionsAndAnswers:a}),Object(g.jsx)("br",{})]})},ne=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(null),s=Object(o.a)(a,2),l=s[0],j=s[1],u=Object(c.useState)(null),d=Object(o.a)(u,2),b=d[0],h=d[1],A=Object(c.useState)(null),O=Object(o.a)(A,2),m=O[0],w=O[1],p=Object(c.useState)(null),k=Object(o.a)(p,2),v=k[0],S=k[1],B=Object(c.useState)(!1),Q=Object(o.a)(B,2),E=Q[0],y=Q[1],I=Object(c.useState)(!1),F=Object(o.a)(I,2),D=F[0],T=F[1],K=Object(c.useState)(null),H=Object(o.a)(K,2),q=H[0],Y=H[1],L=Object(x.b)(),M=L.user,U=L.isAuthenticated,P=(L.isLoading,L.getAccessTokenSilently);return Object(c.useEffect)((function(){if(U){P().then((function(e){z.a.post("https://kerserver.onrender.com/attempts",Object(r.a)({},M),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data;h(t),console.log(t)})).catch((function(e){console.log(e)}))}))}}),[U]),Object(g.jsxs)(f,{children:[n&&Object(g.jsx)(C,{}),!n&&!E&&!D&&Object(g.jsx)(N,{startQuiz:function(e,t,n){j(e),i(!0),S(t),w(n),y(!0),i(!1)},attempts:b}),!n&&E&&Object(g.jsx)(Z,{data:l,countdownTime:v,endQuiz:function(e){i(!0),y(!1),T(!0),Y(e),i(!1)},major:m}),!n&&D&&Object(g.jsx)(te,Object(r.a)(Object(r.a)({},q),{},{replayQuiz:function(){i(!0);var e=G(l);e.forEach((function(e){e.options=G(e.options)})),j(e),y(!0),T(!1),Y(null),i(!1)},resetQuiz:function(){i(!0),y(!1),T(!1),Y(null),i(!1)}}))]})},ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),W.a.fire({toast:"true",position:"bottom",icon:"success",title:"App is ready to work offline.",showConfirmButton:!1,timer:6e3}),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(x.a,{domain:"dev-88bircurddzvffqn.us.auth0.com",clientId:"IlSZ7rPwgaPRDt81GGYnC7W138mdDyWA",authorizationParams:{audience:"kerserver.onrender.com",redirect_uri:window.location.href},children:Object(g.jsx)(ne,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/quiz-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/quiz-app","/service-worker.js");ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker.")}))):ie(t,e)}))}}()}},[[159,1,2]]]);
//# sourceMappingURL=main.c57c6d1d.chunk.js.map