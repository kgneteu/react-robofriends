(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,n,t){e.exports=t(27)},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(3),c=t.n(o),i=t(2),s=t(1),l=t(6),u=(t(8),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(24);var h=function(){return function(e){var n;e({type:"REQUEST_ROBOTS_PENDING"}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}},f=function(e){var n=e.name,t=e.email,r=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},b=function(e){var n=e.robots;return a.a.createElement("div",null,n.map((function(e,t){return a.a.createElement(f,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},g=t(9),m=t(10),E=t(13),p=t(11),v=function(e){Object(E.a)(t,e);var n=Object(p.a)(t);function t(e){var r;return Object(g.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(m.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(r.Component),w=(t(25),t(12)),O=function(e){e.searchfield;var n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},S=a.a.memo((function(e){var n=Object(r.useState)(!1),t=Object(w.a)(n,2),o=t[0],c=t[1];return Object(r.useEffect)((function(){var e=function(){c(window.scrollY>8)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",(function(){return e}))}}),[]),a.a.createElement("header",{style:{position:"fixed",top:0,textAlign:"center",width:"100%",height:"200px",zIndex:"100",boxShadow:o?"0 4px 4px rgba(0, 0, 0, 0.4)":"none",transition:"all 0.2s ease-out"}},a.a.createElement("h1",{className:"f1 center"},"RoboFriends"),a.a.createElement(O,{className:"ml-auto",searchChange:e.searchChange}))}));var y,j=function(){var e=Object(s.c)((function(e){return e.searchRobots})).searchField,n=Object(s.c)((function(e){return e.requestRobots})),t=n.robots,o=n.isPending,c=Object(s.b)();Object(r.useEffect)((function(){c(h())}),[c]);var i=t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})),l=Object(r.useCallback)((function(e){return c({type:"CHANGE_SEARCHFIELD",payload:e.target.value})}),[c]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{searchChange:l}),a.a.createElement("div",{className:"tc"},a.a.createElement("div",{style:{marginTop:"200px"}},o?a.a.createElement("h1",null,"Loading"):a.a.createElement(v,null,a.a.createElement(b,{robots:i})))))},R={searchField:""},C={robots:[],isPending:!0},k=(t(26),Object(i.b)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:n.payload});default:return e}}}));y=Object(i.c)(k,Object(i.a)(l.a)),c.a.render(a.a.createElement(s.a,{store:y},a.a.createElement(v,null,a.a.createElement(j,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-robofriends-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-robofriends-redux","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(n,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.ee73aedd.chunk.js.map