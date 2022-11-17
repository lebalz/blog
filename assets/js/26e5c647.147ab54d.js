"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[355],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6691:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={},c="WSL2",l={unversionedId:"windows/wsl/README",id:"windows/wsl/README",title:"WSL2",description:"Wrong Timezone",source:"@site/docs/windows/wsl/README.md",sourceDirName:"windows/wsl",slug:"/windows/wsl/",permalink:"/synopsis/windows/wsl/",draft:!1,editUrl:"https://github.com/lebalz/blog/edit/main/docs/windows/wsl/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fix: Keyboard",permalink:"/synopsis/windows/surface/keyboard"}},u={},p=[{value:"Wrong Timezone",id:"wrong-timezone",level:2},{value:"PSQL not running: <code>ERRCONNECT</code>",id:"psql-not-running-errconnect",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wsl2"},"WSL2"),(0,i.kt)("h2",{id:"wrong-timezone"},"Wrong Timezone"),(0,i.kt)("p",null,"Errors like ",(0,i.kt)("inlineCode",{parentName:"p"},"Can't verify jwt token")),(0,i.kt)("p",null,"Probably because wsl messes up with the time zone when waking up from sleep mode. --\x3e Sync the time zone with windows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo hwclock -s\n")),(0,i.kt)("h2",{id:"psql-not-running-errconnect"},"PSQL not running: ",(0,i.kt)("inlineCode",{parentName:"h2"},"ERRCONNECT")),(0,i.kt)("p",null,"Start the db service, on WSL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service postgresql start\nsudo service postgresql status\n")))}f.isMDXComponent=!0}}]);