(this["webpackJsonpeoq-app"]=this["webpackJsonpeoq-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(6),s=n.n(i),a=(n(11),n(12),n(0));var r=function(){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{children:"EOQ"}),Object(a.jsx)("h2",{children:"\u0645\u06cc\u0632\u0627\u0646 \u0627\u0642\u062a\u0635\u0627\u062f\u06cc \u0633\u0641\u0627\u0631\u0634"})]})},l=n(3),d=n(5),j=n(2),u=(n(14),function(e){return Object(a.jsxs)("div",{className:"tooltip",children:[e.children,e.tooltip&&Object(a.jsx)("span",{className:"tooltiptext",children:e.tooltip})]})}),b=(n(15),function(e){return Object(a.jsxs)("div",{className:"data-input",children:[Object(a.jsxs)("div",{className:"data-text",children:[Object(a.jsx)(u,{tooltip:e.tooltip,children:Object(a.jsx)("div",{className:"data-title",children:Object(a.jsx)("h3",{children:e.title})})}),e.description&&Object(a.jsx)("p",{children:e.description})]}),Object(a.jsx)("div",{className:"data-symbol",children:Object(a.jsx)("h3",{children:e.symbol})}),Object(a.jsx)("div",{className:"data-input__input",children:Object(a.jsx)("input",{required:!0,name:e.symbol,type:"number",pattern:"[0-9]*",inputMode:"numeric",value:e.value,onChange:e.onChange})})]})});n(16);var h=function(e){return Object(a.jsxs)("div",{className:"checkbox",children:[Object(a.jsx)("input",{className:"checkbox-input",type:"checkbox",name:"checkbox",onClick:e.onClick}),Object(a.jsx)("label",{htmlFor:"checkbox",children:"\u0645\u062d\u0627\u0633\u0628\u0647 \u0647\u0632\u06cc\u0646\u0647 \u06a9\u0644 \u0628\u0631\u0627\u06cc \u0633\u0641\u0627\u0631\u0634\u0627\u062a \u062a\u0639\u062f\u0627\u062f \u0628\u0627\u0644\u0627 \u0628\u0627 \u062a\u062e\u0641\u06cc\u0641 \u062f\u0631 \u0642\u06cc\u0645\u062a \u06a9\u0627\u0644\u0627"})]})},p=(n(17),function(e){return Object(a.jsx)("button",{className:"action-button ",type:"submit",onClick:e.onClick,children:"EOQ \u0645\u062d\u0627\u0633\u0628\u0647"})}),O=(n(18),function(e){return Object(a.jsxs)("div",{className:"results",children:[Object(a.jsxs)("div",{className:"results-text",children:[Object(a.jsx)(u,{tooltip:e.tooltip,children:Object(a.jsx)("div",{className:"results-title",children:Object(a.jsx)("h3",{children:e.title})})}),e.description&&Object(a.jsx)("p",{className:"results-description",children:e.description})]}),Object(a.jsx)("div",{className:"results-symbol",children:Object(a.jsx)("h3",{children:e.symbol})}),Object(a.jsx)("div",{className:"results-value",children:Object(a.jsx)("h3",{children:e.value})})]})});n(19);var x=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),r=Object(j.a)(s,2),u=r[0],x=r[1],v=Object(c.useState)({eoq:"",N:"",TC:"",TCd:""}),f=Object(j.a)(v,2),m=f[0],g=f[1],C=Object(c.useState)({H:"",D:"",S:"",C:"",Q:"",Cd:""}),y=Object(j.a)(C,2),k=y[0],N=y[1],w=function(e){var t=e.target.value,n=e.target.name;N((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(l.a)({},n,t))}))};return Object(a.jsx)(o.a.Fragment,{children:Object(a.jsxs)("div",{className:"data-form",children:[Object(a.jsx)(b,{tooltip:"(Storage Costs + Employee Salaries + Opportunity Costs + Depreciation Costs) / Total Value of Annual Inventory",title:"\u0647\u0632\u06cc\u0646\u0647 \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u06a9\u0627\u0644\u0627",description:"Holding Cost",symbol:"H",onChange:w,value:k.H}),Object(a.jsx)(b,{title:"\u0645\u06cc\u0632\u0627\u0646 \u0646\u06cc\u0627\u0632 \u062f\u0631 \u0633\u0627\u0644",description:"Annual Demand",symbol:"D",onChange:w,value:k.D}),Object(a.jsx)(b,{title:"\u0647\u0632\u06cc\u0646\u0647 \u0647\u0631\u0628\u0627\u0631 \u0633\u0641\u0627\u0631\u0634",description:"Order Cost",symbol:"S",onChange:w,value:k.S}),Object(a.jsx)(b,{title:"\u0642\u06cc\u0645\u062a \u06a9\u0627\u0644\u0627",symbol:"C",onChange:w,value:k.C}),Object(a.jsx)(h,{onClick:function(e){i(e.target.checked)}}),n&&Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)(b,{title:"\u0642\u06cc\u0645\u062a \u06a9\u0627\u0644\u0627\u06cc \u062a\u062e\u0641\u06cc\u0641 \u062f\u0627\u0631",symbol:"Cd",onChange:w,value:k.Cd}),Object(a.jsx)(b,{title:"\u062d\u062f\u0627\u0642\u0644 \u0645\u06cc\u0632\u0627\u0646 \u0633\u0641\u0627\u0631\u0634",description:"\u0628\u0631\u0627\u06cc \u0634\u0631\u06a9\u062a \u062f\u0631 \u062a\u062e\u0641\u06cc\u0641 \u0642\u06cc\u0645\u062a \u06a9\u0627\u0644\u0627",symbol:"Q",onChange:w,value:k.Q})]}),Object(a.jsx)(p,{onClick:function(e){var t,c=k.H,o=k.D,i=k.S,s=k.C,a=k.Q,r=k.Cd,l=0,d=Math.sqrt(2*parseFloat(o)*parseFloat(i)/parseFloat(c)).toFixed(2),j=(parseFloat(o)/d).toFixed(2);n&&(l=(j*parseFloat(i)+parseFloat(c)*a/2+o*parseFloat(r)).toFixed(2)),t=(j*parseFloat(i)+parseFloat(c)*d/2+o*parseFloat(s)).toFixed(2),g({eoq:d,N:j,TC:t,TCd:l}),x(!0)}}),u&&Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsx)(O,{title:"\u0645\u06cc\u0632\u0627\u0646 \u0627\u0642\u062a\u0635\u0627\u062f\u06cc \u0633\u0641\u0627\u0631\u0634",symbol:"EOQ",value:m.eoq||0}),Object(a.jsx)(O,{title:"\u062a\u0639\u062f\u0627\u062f \u062f\u0641\u0639\u0627\u062a \u0627\u0642\u062a\u0635\u0627\u062f\u06cc \u0633\u0641\u0627\u0631\u0634",symbol:"N",value:m.N||0}),Object(a.jsx)(O,{title:"\u0647\u0632\u06cc\u0646\u0647 \u06a9\u0644",description:n&&"\u0628\u0631\u0627\u06cc \u0645\u06cc\u0632\u0627\u0646 \u0627\u0642\u062a\u0635\u0627\u062f\u06cc \u0633\u0641\u0627\u0631\u0634  ",tooltip:"EOQ: "+m.eoq,symbol:"TC",value:m.TC||0}),n&&Object(a.jsx)(O,{title:"\u0647\u0632\u06cc\u0646\u0647 \u06a9\u0644",description:"\u0628\u0631\u0627\u06cc \u06a9\u0627\u0644\u0627\u06cc \u062a\u062e\u0641\u06cc\u0641 \u062f\u0627\u0631",tooltip:"Q:"+k.Q,symbol:"TC",value:m.TCd})]})]})})},v=(n(20),function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("p",{children:"Copyright \xa9 2021 Manikle Designs"})})});n(21);var f=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(r,{}),Object(a.jsx)(x,{}),Object(a.jsx)(v,{})]})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/eoq-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/eoq-app","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):g(t,e)}))}}(),C()}],[[22,1,2]]]);
//# sourceMappingURL=main.7d8e3ac5.chunk.js.map