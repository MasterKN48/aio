(this.webpackJsonpaio=this.webpackJsonpaio||[]).push([[5],{29:function(e,t,a){"use strict";function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return l}))},30:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(29);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},31:function(e,t,a){"use strict";function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],l=!0,n=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(l=(s=c.next()).done)&&(a.push(s.value),!t||a.length!==t);l=!0);}catch(i){n=!0,r=i}finally{try{l||null==c.return||c.return()}finally{if(n)throw r}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return l}))},32:function(e,t,a){"use strict";a.r(t);var l=a(29),n=a(30),r=a(31),s=a(0),c=a.n(s);t.default=function(){var e=Object(s.useState)(["PNG","JPEG","JPG","ICO","SVG","GIF"]),t=Object(r.a)(e,2),a=t[0],i=(t[1],Object(s.useState)(["PNG","JPG","JPEG","ICO"])),o=Object(r.a)(i,2),m=o[0],u=(o[1],Object(s.useState)(!1)),f=Object(r.a)(u,2),d=f[0],p=f[1],E=Object(s.useState)(!1),b=Object(r.a)(E,2),v=b[0],N=b[1],O=Object(s.useState)(null),y=Object(r.a)(O,2),h=y[0],j=y[1],g=Object(s.useState)({from:"",to:""}),w=Object(r.a)(g,2),P=w[0],S=w[1],k=function(e){S(Object(n.a)({},P,Object(l.a)({},e.target.name,e.target.value)))};return c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"level"},c.a.createElement("div",{className:"level-left"},c.a.createElement("div",{className:"level-item"},c.a.createElement("p",{className:"subtitle is-5"},c.a.createElement("strong",null,"From"))),c.a.createElement("div",{className:"level-item"},c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"control has-icons-left"},c.a.createElement("div",{className:"select is-rounded"},c.a.createElement("select",{name:"from",onChange:k},c.a.createElement("option",{defaultValue:!0},"Original File Types"),a.map((function(e,t){return c.a.createElement("option",{key:t},e)})))),c.a.createElement("div",{className:"icon is-small is-left"},c.a.createElement("i",{className:"fas fa-globe"})))))),c.a.createElement("div",{className:"level-right"},c.a.createElement("div",{className:"level-item"},c.a.createElement("p",{className:"subtitle is-5"},c.a.createElement("strong",null,"To"))),c.a.createElement("div",{className:"field shift"},c.a.createElement("div",{className:"control has-icons-left"},c.a.createElement("div",{className:"select is-rounded"},c.a.createElement("select",{name:"to",onChange:k},c.a.createElement("option",{defaultValue:!0},"New File Types"),m.map((function(e,t){return c.a.createElement("option",{key:t},e)})))),c.a.createElement("div",{className:"icon is-small is-left"},c.a.createElement("i",{className:"fas fa-globe"})))))),c.a.createElement("div",{className:"level is-mobile"},c.a.createElement("div",{className:"level-item has-text-centered"},c.a.createElement("div",{className:"file is-dark has-name is-boxed"},c.a.createElement("label",{className:"file-label"},c.a.createElement("input",{className:"file-input",type:"file",name:"image",accept:"image/*",onChange:function(e){j(e.target.files[0])}}),c.a.createElement("span",{className:"file-cta"},c.a.createElement("span",{className:"file-icon"},c.a.createElement("i",{className:"fas fa-upload"})),c.a.createElement("span",{className:"file-label"},"Choose a file\u2026")),c.a.createElement("span",{className:"file-name"},null===h?null:h.name))))),c.a.createElement("div",{className:"level has-centered"},d?c.a.createElement("div",{className:"columns level-item has-centered"},c.a.createElement("div",{className:"column is-two-thirds"},c.a.createElement("progress",{className:"progress is-dark",max:"100"},"30%"))):c.a.createElement("div",{className:"level-item has-centered"},c.a.createElement("button",{className:"button is-dark is-rounded",onClick:function(e){if(e.preventDefault(),null!==h){if(!(h.size>112582912))return""===P.from||"Original File Types"===P.from?(console.log(P),void alert("'From' file type is not selected!")):void(""!==P.to&&"New File Types"!==P.to?P.from.toLowerCase()===h.name.split(".").pop()?P.from!==P.to?(N(!1),p(!0),setTimeout((function(){p(!1),N(!0)}),5e3)):alert("'From' and 'To' is same!"):alert("Mismatch in selected file type: "+h.name.split(".").pop()+" with 'From' Select box: "+P.from.toLowerCase()):alert("'To' file type is not selected"));alert("File Size must be less then 11mb.")}else alert("Please first select file and types")}},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-dice-d20"})),c.a.createElement("span",null,"Convert")))),c.a.createElement("div",{className:"has-centered"},v?c.a.createElement("div",{className:"has-centered"},c.a.createElement("div",{className:"container level-item has-centered"},c.a.createElement("p",null,"Your converted file is ready to download!")),c.a.createElement("div",{className:"container level-item has-centered"},c.a.createElement("button",{className:"button is-dark is-outlined"},c.a.createElement("span",{className:"icon is-small"},c.a.createElement("i",{className:"fas fa-download"}))))):null),c.a.createElement("br",null))}}}]);
//# sourceMappingURL=5.f93dd203.chunk.js.map