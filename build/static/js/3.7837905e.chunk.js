(this.webpackJsonpaio=this.webpackJsonpaio||[]).push([[3],{29:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},30:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(29);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},31:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,l=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(i){l=!0,r=i}finally{try{n||null==s.return||s.return()}finally{if(l)throw r}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return n}))},34:function(e,t,a){"use strict";a.r(t);var n=a(29),l=a(30),r=a(31),c=a(0),s=a.n(c);t.default=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)(!1),m=Object(r.a)(o,2),u=m[0],f=m[1],d=Object(c.useState)(!1),b=Object(r.a)(d,2),p=b[0],E=b[1],v=Object(c.useState)({from:""}),N=Object(r.a)(v,2),O=N[0],h=N[1];return s.a.createElement("section",{className:"container"},s.a.createElement("div",{className:"level is-mobile"},s.a.createElement("div",{className:"level-item has-text-centered"},s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("div",{className:"select is-rounded"},s.a.createElement("select",{name:"from",onChange:function(e){h(Object(l.a)({},O,Object(n.a)({},e.target.name,e.target.value)))}},s.a.createElement("option",{defaultValue:!0},"Original File Types"),s.a.createElement("option",null,"PDF"),s.a.createElement("option",null,"PNG"),s.a.createElement("option",null,"JPG"),s.a.createElement("option",null,"JPEG"),s.a.createElement("option",null,"ICO"))),s.a.createElement("div",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-globe"})))))),s.a.createElement("div",{className:"level is-mobile"},s.a.createElement("div",{className:"level-item has-text-centered"},s.a.createElement("div",{className:"file is-dark has-name is-boxed"},s.a.createElement("label",{className:"file-label"},s.a.createElement("input",{className:"file-input",type:"file",name:"image",accept:"image/*",onChange:function(e){i(e.target.files[0])}}),s.a.createElement("span",{className:"file-cta"},s.a.createElement("span",{className:"file-icon"},s.a.createElement("i",{className:"fas fa-upload"})),s.a.createElement("span",{className:"file-label"},"Choose a file\u2026")),s.a.createElement("span",{className:"file-name"},null===a?null:a.name))))),s.a.createElement("div",{className:"level has-centered"},p?s.a.createElement("div",{className:"columns level-item has-centered"},s.a.createElement("div",{className:"column is-two-thirds"},s.a.createElement("progress",{className:"progress is-dark",max:"100"},"30%"))):s.a.createElement("div",{className:"level-item has-centered"},s.a.createElement("button",{className:"button is-dark is-rounded",onClick:function(e){e.preventDefault(),null!==a?a.size>112582912?alert("File Size must be less then 11mb."):(f(!1),E(!0),setTimeout((function(){E(!1),f(!0)}),5e3)):alert("Please first select file and types")}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-dice-d20"})),s.a.createElement("span",null,"Convert")))),s.a.createElement("div",{className:"has-centered"},u?s.a.createElement("div",{className:"has-centered"},s.a.createElement("div",{className:"container level-item has-centered"},s.a.createElement("p",null,"Your converted file is ready to download!")),s.a.createElement("div",{className:"container level-item has-centered"},s.a.createElement("p",null,"File Size: 32kb")),s.a.createElement("div",{className:"container level-item has-centered"},s.a.createElement("button",{className:"button is-dark is-outlined"},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-download"}))))):null),s.a.createElement("hr",null))}}}]);
//# sourceMappingURL=3.7837905e.chunk.js.map