"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[531],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(a),d=r,c=k["".concat(m,".").concat(d)]||k[d]||u[d]||i;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},979:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],l={title:"Umami",description:"Deploy Umami tracker with Dokku",keywords:["umami","web","tracker","web analytics","dokku"]},m="Umami [^1]",s={unversionedId:"dokku/umami",id:"dokku/umami",title:"Umami",description:"Deploy Umami tracker with Dokku",source:"@site/docs/dokku/umami.md",sourceDirName:"dokku",slug:"/dokku/umami",permalink:"/synopsis/dokku/umami",editUrl:"https://github.com/lebalz/blog/edit/main/docs/dokku/umami.md",tags:[],version:"current",frontMatter:{title:"Umami",description:"Deploy Umami tracker with Dokku",keywords:["umami","web","tracker","web analytics","dokku"]},sidebar:"tutorialSidebar",previous:{title:"Node RED",permalink:"/synopsis/dokku/node-red/"},next:{title:"Docker",permalink:"/synopsis/docker"}},p={},u=[{value:"Preparing dokku and the image",id:"preparing-dokku-and-the-image",level:2},{value:"Create database tables",id:"create-database-tables",level:2},{value:"Deploy the image",id:"deploy-the-image",level:2},{value:"Updating",id:"updating",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],k={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"umami-"},"Umami ",(0,i.kt)("sup",{parentName:"h1",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Umami is a simple, easy to use, self-hosted web analytics solution. The goal is to provide you with a friendlier, privacy-focused alternative to Google Analytics and a free, open-sourced alternative to paid solutions. ",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,i.kt)("p",null,"To get started with ",(0,i.kt)("a",{parentName:"p",href:"https://umami.is/"},"Umami"),", read the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikecao/umami/blob/master/docker-compose.yml"},"docker-compose.yml"),"."),(0,i.kt)("p",null,"It states the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Umami has a Docker image at ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikecao/umami/pkgs/container/umami"},"ghcr.io/mikecao/umami:postgresql-latest")),(0,i.kt)("li",{parentName:"ul"},"It listens on port ",(0,i.kt)("inlineCode",{parentName:"li"},"3000")),(0,i.kt)("li",{parentName:"ul"},"It depends on PostgreSQL"),(0,i.kt)("li",{parentName:"ul"},"It reads the PostgreSQL config from ",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")),(0,i.kt)("li",{parentName:"ul"},"It requires the env variables ",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_URL"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_TYPE")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HASH_SALT"))),(0,i.kt)("h2",{id:"preparing-dokku-and-the-image"},"Preparing dokku and the image"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Prerequirements")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following Dokku plugins are required"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Dokkus ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dokku/dokku-postgres"},"Postgres")),(0,i.kt)("li",{parentName:"ul"})))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dokku apps:create umami\n\n# create and link postgres db\ndokku postgres:create umami\ndokku postgres:link umami umami\n\n# set env variables\ndokku config:set umami HASH_SALT=$(openssl rand -hex 32)\ndokku config:set umami DATABASE_TYPE=postgresql\n\n# set port mapping\ndokku proxy:ports-remove umami http:80:5000\ndokku proxy:ports-add umami http:80:3000\n\n# add a domain\ndokku domains:add umami umami.lebalz.ch\n\n# optional: set email for letsencrypt\ndokku config:set --no-restart umami DOKKU_LETSENCRYPT_EMAIL=foo@bar.ch\n\n# optional: set custom script name. Default is umami (might be known by ad blockers)\ndokku config:set --no-restart umami TRACKER_SCRIPT_NAME=myumami\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Notes")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," must not be set manually since it was automatically set when linking the database to the application.")))),(0,i.kt)("h2",{id:"create-database-tables"},"Create database tables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the content of the file ",(0,i.kt)("inlineCode",{parentName:"li"},"schema.postgresql.sql")),(0,i.kt)("li",{parentName:"ul"},"Open a connection to your dokku PostgreSQL instance: ",(0,i.kt)("inlineCode",{parentName:"li"},"dokku postgres:connect umami-postgres")),(0,i.kt)("li",{parentName:"ul"},"Paste the content of the file that you previously copied")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"schema.postgresql.sql"),(0,i.kt)("p",null,"The Schema from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikecao/umami"},"Github repository"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"reference title=sql/schema.postgresql.sql",reference:!0,title:"sql/schema.postgresql.sql"},"https://github.com/mikecao/umami/blob/master/sql/schema.postgresql.sql\n"))),(0,i.kt)("h2",{id:"deploy-the-image"},"Deploy the image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dokku git:from-image umami ghcr.io/mikecao/umami:postgresql-latest\n\n# optional: letsencrypt\ndokku letsencrypt drone-server\n")),(0,i.kt)("p",null,"The default username is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and the default password is ",(0,i.kt)("inlineCode",{parentName:"p"},"umami"),"."),(0,i.kt)("h2",{id:"updating"},"Updating"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# pull the latest image\ndocker pull ghcr.io/mikecao/umami:postgresql-latest\n\n# rebuild umami\ndokku ps:rebuild umami\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Debug proxy mapping: ",(0,i.kt)("inlineCode",{parentName:"li"},"dokku nginx:error-logs umami -t"))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://knowledge.code-fabrik.ch/software/dokku/docker-image-deploys/umami.html"},"knowledge.code-fabrik.ch"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://umami.is/"},"Umami"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);