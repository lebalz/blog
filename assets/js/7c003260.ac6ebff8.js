"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[303],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return k}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=u(r),k=o,m=c["".concat(s,".").concat(k)]||c[k]||p[k]||a;return r?t.createElement(m,i(i({ref:n},l),{},{components:r})):t.createElement(m,i({ref:n},l))}));function k(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8849:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],d={title:"Drone Server",sidebar_position:1,description:"Deploy Drone CI Runner with Dokku",keywords:["drone","dokku","drone ci","drone server","ci"]},s="Drone for Github",u={unversionedId:"dokku/drone-ci/drone-server",id:"dokku/drone-ci/drone-server",title:"Drone Server",description:"Deploy Drone CI Runner with Dokku",source:"@site/docs/dokku/drone-ci/drone-server.md",sourceDirName:"dokku/drone-ci",slug:"/dokku/drone-ci/drone-server",permalink:"/synopsis/dokku/drone-ci/drone-server",editUrl:"https://github.com/lebalz/blog/edit/main/docs/dokku/drone-ci/drone-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Drone Server",sidebar_position:1,description:"Deploy Drone CI Runner with Dokku",keywords:["drone","dokku","drone ci","drone server","ci"]},sidebar:"tutorialSidebar",previous:{title:"Drone CI",permalink:"/synopsis/dokku/drone-ci/"},next:{title:"Drone Runner",permalink:"/synopsis/dokku/drone-ci/drone-runner"}},l=[{value:"Preparing dokku and the image",id:"preparing-dokku-and-the-image",children:[],level:2},{value:"Update",id:"update",children:[],level:2}],p={toc:l};function c(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drone-for-github"},"Drone for Github"),(0,a.kt)("p",null,"To get started with Drone, read the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.drone.io/server/provider/gtihub/"},"documentation"),", where\nyou can find the following snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3-7}","{3-7}":!0},"docker run \\\n  --volume=/var/lib/drone:/data \\\n  --env=DRONE_GITHUB_CLIENT_ID=your-id \\\n  --env=DRONE_GITHUB_CLIENT_SECRET=super-duper-secret \\\n  --env=DRONE_RPC_SECRET=super-duper-secret \\\n  --env=DRONE_SERVER_HOST=drone.company.com \\\n  --env=DRONE_SERVER_PROTO=https \\\n  --publish=80:80 \\\n  --publish=443:443 \\\n  --restart=always \\\n  --detach=true \\\n  --name=drone \\\n  drone/drone:2\n")),(0,a.kt)("p",null,"It states the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Drone is based on the Docker image ",(0,a.kt)("inlineCode",{parentName:"li"},"drone/drone:2")),(0,a.kt)("li",{parentName:"ul"},"It is run via ",(0,a.kt)("inlineCode",{parentName:"li"},"docker run"),", where you need to pass various env variables"),(0,a.kt)("li",{parentName:"ul"},"It listens on port 80")),(0,a.kt)("h2",{id:"preparing-dokku-and-the-image"},"Preparing dokku and the image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# create the app\ndokku apps:create drone-server\n\n# set the env variables\ndokku config:set drone-server DRONE_GITHUB_CLIENT_ID=1234\ndokku config:set drone-server DRONE_GITHUB_CLIENT_SECRET=abcdef\ndokku config:set drone-server DRONE_RPC_SECRET=$(openssl rand -hex 32)\ndokku config:set drone-server DRONE_SERVER_HOST=drone.lebalz.ch\ndokku config:set drone-server DRONE_SERVER_PROTO=http\n\n# give yourself admin access - replace <github-username> with your actual github username \ndokku config:set drone-server DRONE_USER_CREATE=username:<github-username>,admin:true\n\n# mount persistent directory for caching\ndokku storage:mount drone-server /var/lib/dokku/data/storage/drone-server:/data\n\n# change port mapping\ndokku proxy:ports-add drone-server http:80:80\n\n# add a domain\ndokku domains:add drone-server drone.lebalz.ch\n\n# optional: set email for letsencrypt\ndokku config:set --no-restart drone-server DOKKU_LETSENCRYPT_EMAIL=foo@bar.ch\n\n# deploy\ndokku git:from-image drone-server drone/drone:latest\n\n# optional: letsencrypt\ndokku letsencrypt drone-server\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,a.kt)("inlineCode",{parentName:"h5"},"DRONE_RPC_SECRET"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Required string value provides the shared secret generated in the previous step. This is used to authenticate the rpc connection between the server and runners. The server and runner must be provided the same secret value. A secure random string can be generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl rand -hex 32"),"."))),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Careful ",(0,a.kt)("inlineCode",{parentName:"h5"},"DRONE_SERVER_PROTO"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure you disable the HTTPS redirect option. Dokku terminates the SSL\nconnection with Nginx and internally proxies requests to the container by HTTP.\nThis makes Drone believe an HTTP request arrived and it issues a redirect to\nHTTPS, resulting in an infinite loop."))),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"If you deployed ",(0,a.kt)("inlineCode",{parentName:"p"},":latest"),", then you would need to run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull drone/drone:latest\ndokku ps:rebuild drone-server\n")),(0,a.kt)("p",null,"To update to a specific version (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"2.7.3"),") lookup the tags on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/drone/drone/tags"},"https://hub.docker.com/r/drone/drone/tags")," and run on your dokku server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dokku git:from-image drone-server drone/drone:2.7.3\n")),(0,a.kt)("p",null,"The application will be rebuilt automatically."))}c.isMDXComponent=!0}}]);