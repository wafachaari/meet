(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},202:function(e,t,n){},338:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(65),s=n.n(o),c=(n(200),n(22)),i=n(30),l=n(23),u=n(24),h=n(6),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={suggestions:[],query:" ",showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("label",{children:" choose a city"}),Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),f=(n(202),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={show:!1},e.handledetails=function(){e.setState({show:!e.state.show})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=new Date(t.start.dateTime).toDateString();return Object(h.jsxs)("div",{className:"Event",children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:[" ",t.summary]}),Object(h.jsxs)("p",{children:[n," @TIMEZONE ",t.start.timeZone]}),Object(h.jsxs)("p",{children:[" @ ",t.summary," / ",t.location]})]}),this.state.show&&Object(h.jsxs)("div",{className:"show_event",children:[Object(h.jsx)("h3",{children:" About event:"}),Object(h.jsx)("p",{className:"description",children:t.description})]}),Object(h.jsx)("div",{className:"event-button",children:Object(h.jsx)("button",{className:"show_btn",type:"text",onClick:function(){return e.handledetails()}})})]})}}]),n}(a.Component)),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("div",{className:"EventList",children:Object(h.jsx)("ul",{className:"list",children:e.map((function(e){return Object(h.jsx)("li",{className:"li",children:Object(h.jsx)(f,{event:e})},e.id)}))})})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontStyle:"italic"}},a.color="red",a}return n}(p),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontStyle:"italic"}},a.color="red",a}return n}(p),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventsPerPage:32},e.handleLength=function(t){var n=t.target.value;n<=0?e.setState({eventsPerPage:n,errorText:"Please select a valid number."}):e.setState({eventsPerPage:n,errorText:""}),e.props.updateEventCount(n)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"NumberOfEvents",children:[Object(h.jsx)("label",{children:"choose number of events"}),Object(h.jsx)("input",{type:"number",className:"number",placeholder:"32",value:this.state.eventsPerPage,onChange:this.handleLength}),Object(h.jsx)(m,{text:this.state.errorText})]})}}]),n}(a.Component),j=n(18),w=n(357),y=n(364),O=n(180),x=n(93),k=n(73),S=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(j.a)(n,2),o=r[0],s=r[1];Object(a.useEffect)((function(){s((function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}})).filter((function(e){return e.value>0}))}))}),[t]);var c=["#0088FE","#00C49F","#FFBB28","#FF8042","#8884D8"];return console.log(t),Object(h.jsx)(w.a,{height:200,children:Object(h.jsxs)(y.a,{height:200,children:[Object(h.jsx)(O.a,{className:"pie-chart",data:o,labelLine:!1,outerRadius:80,fill:"#8884d8",cx:"47%",cy:"50%",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(h.jsx)(x.a,{fill:c[t%c.length],name:e.name},"cell-".concat(t))}))}),Object(h.jsx)(k.a,{iconSize:10,iconType:"triangle",layout:"horizontal",verticalAlign:"bottom",align:"center"})]})})},T=(n(338),n(33)),Z=n.n(T),C=n(76),E=n(189),N=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],A=n(119),W=n.n(A),J=n(77),M=n.n(J),P=function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))},L=function(){var e=Object(C.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(C.a)(Z.a.mark((function e(t){var n,a,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://t9htf5lo2c.execute-api.ca-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(C.a)(Z.a.mark((function e(){var t,n,a,r,o;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return M.a.done(),e.abrupt("return",N);case 4:if(navigator.onLine){e.next=10;break}return t=localStorage.getItem("lastEvents"),M.a.done(),console.log(",,"),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 10:return e.next=13,B();case 13:if(!(n=e.sent)){e.next=23;break}return q(),a="https://t9htf5lo2c.execute-api.ca-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=19,W.a.get(a);case 19:return(r=e.sent).data&&(o=P(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),M.a.done(),e.abrupt("return",r.data.events);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(C.a)(Z.a.mark((function e(){var t,n,a,r,o,s;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,W.a.get("https://t9htf5lo2c.execute-api.ca-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&D(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},R=n(361),U=n(362),F=n(185),z=n(186),H=n(78),_=n(190),Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentLocation:"all",events:[],locations:[],showevents:!1,eventsPerPage:32},e.updateEvents=function(t){I().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),r=e.state.eventsPerPage;e.setState({events:a.slice(0,r),currentLocation:t})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({eventsPerPage:t}),e.updateEvents(n)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e.downevents=function(){e.setState({showevents:!e.state.showevents})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0;var t=this.state.eventsPerPage;I().then((function(n){e.mounted&&(e.setState({events:n.slice(0,t),locations:P(n)}),navigator.onLine?e.setState({warningText:""}):e.setState({offlinealert:"Cached data is being displayed."}))}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:"\ud835\udd10\ud835\udd22\ud835\udd22\ud835\udd31\ud835\udd04\ud835\udd2d\ud835\udd2d"}),Object(h.jsx)(d,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(h.jsx)(g,{eventsPerPage:this.state.eventsPerPage,updateEventCount:this.updateEventCount}),this.state.showevents?Object(h.jsx)("button",{className:"show-events-button",onClick:this.downevents,children:"hide events"}):Object(h.jsx)("button",{className:"show-events-button",onClick:this.downevents,children:"show  events"}),this.state.showevents?Object(h.jsxs)("div",{className:"data-vis-wrapper",children:[Object(h.jsx)(S,{events:this.state.events}),Object(h.jsx)(w.a,{height:400,children:Object(h.jsxs)(R.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(h.jsx)(U.a,{}),Object(h.jsx)(F.a,{type:"category",dataKey:"city",name:"city"}),Object(h.jsx)(z.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(h.jsx)(H.a,{cursor:{strokeDasharray:"3 3"}}),Object(h.jsx)(_.a,{data:this.getData(),fill:"#8884d8"})]})})]}):null,Object(h.jsx)(b,{text:this.state.offlinealert}),Object(h.jsx)(v,{events:this.state.events})]})}}]),n}(a.Component),G=n(187),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),G.config("91a8c0ac5b654dccb52228101a4bed74").install()}},[[356,1,2]]]);
//# sourceMappingURL=main.48670343.chunk.js.map