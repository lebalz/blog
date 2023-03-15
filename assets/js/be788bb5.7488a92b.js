"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3314],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4384:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),i="container_AFEI",a="noMargins_PVGS",o=n(6010),c=function(e,t){return void 0===t&&(t="px"),/^\d+(\.\d*)?$/.test(e)?""+e+t:e},l=function(e){var t={},n=Object.assign({},e.options);return n.noMargins&&delete n.noMargins,n.size&&(t.maxWidth="min(90vw, "+c(n.size)+")",t.maxHeight=c(n.size),delete n.size),n.height&&(t.maxHeight=c(n.height),t.height=c(n.height),delete n.height),n.width&&(t.maxWidth="min(90vw, "+c(n.width)+")",t.width=c(n.width),delete n.width),t=Object.assign({},t,n),r.createElement("img",{src:e.src,alt:e.alt,style:t,title:e.isInline&&e.bib?"Author: "+e.bib.author+" @ "+e.bib.licence+(e.bib.edited?", Bearbeitet":""):void 0})},u=function(e){if(e.isInline)return r.createElement(l,e);var t=r.useState(!1),n=(t[0],t[1]),c=r.useState(!1),u=(c[0],c[1],e.caption&&"undefined"!==e.caption),s=e.bib||u;return e.options.noMargins&&!0,r.createElement("figure",{className:(0,o.Z)(i,e.options.noMargins&&a),onMouseEnter:function(){return n(!0)},onMouseOut:function(e){var t,r,i,a,o;t=e.currentTarget.getBoundingClientRect(),r=e.clientX,i=e.clientY,a=t.left<=r&&t.right>=r,o=t.top<=i&&t.bottom>=i,a&&o||n(!1)}},r.createElement(l,e),s&&r.createElement("figcaption",null,u&&r.createElement("span",null,e.caption)))}},6168:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=n(4384),c=["components"],l={},u="Exponentieller Zerfall - Einf\xfchrung",s={permalink:"/2023/03/14/excel-datastreamer",editUrl:"https://github.com/lebalz/blog/edit/main/blog/2023-03-14-excel-datastreamer/index.md",source:"@site/blog/2023-03-14-excel-datastreamer/index.md",title:"Exponentieller Zerfall - Einf\xfchrung",description:"Der Einstieg ins Thema Exponentieller Zerfall und Exponentialfunktionen kann h\xfcbsch mit dem Prozess des Abk\xfchlens von Kaffee veranschaulicht werden.",date:"2023-03-14T00:00:00.000Z",formattedDate:"March 14, 2023",tags:[],readingTime:.125,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"A Telegram Bot for Drone CI",permalink:"/2022/10/12/drone-ci-telegram-bot"}},f={authorsImageUrls:[]},p=[{value:"Vorbereitung: Excel Data Streamer",id:"vorbereitung-excel-data-streamer",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Der Einstieg ins Thema Exponentieller Zerfall und Exponentialfunktionen kann h\xfcbsch mit dem Prozess des Abk\xfchlens von Kaffee veranschaulicht werden."),(0,a.kt)("h2",{id:"vorbereitung-excel-data-streamer"},"Vorbereitung: Excel Data Streamer"),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)(o.Z,{caption:"undefined",options:{},isInline:!1,src:n(3844).Z,mdxType:"Image"})))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})},3844:function(e,t,n){t.Z=n.p+"assets/images/enable-data-streamer-7abdf37bdd19a66eb32d5b592a108794.gif"}}]);