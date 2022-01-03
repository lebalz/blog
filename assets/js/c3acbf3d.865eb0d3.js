"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[196],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return k}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,u=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=c(r),k=o,m=s["".concat(d,".").concat(k)]||s[k]||p[k]||u;return r?t.createElement(m,a(a({ref:n},l),{},{components:r})):t.createElement(m,a({ref:n},l))}));function k(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=s;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<u;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6944:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var t=r(7462),o=r(3366),u=(r(7294),r(3905)),a=["components"],i={title:"Drone Runner",sidebar_position:2,description:"Deploy Drone CI Runner with Dokku",keywords:["drone","dokku","drone ci","drone runner","ci"]},d="Drone Runner",c={unversionedId:"dokku/drone-ci/drone-runner",id:"dokku/drone-ci/drone-runner",title:"Drone Runner",description:"Deploy Drone CI Runner with Dokku",source:"@site/docs/dokku/drone-ci/drone-runner.md",sourceDirName:"dokku/drone-ci",slug:"/dokku/drone-ci/drone-runner",permalink:"/synopsis/dokku/drone-ci/drone-runner",editUrl:"https://github.com/lebalz/blog/edit/main/docs/dokku/drone-ci/drone-runner.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Drone Runner",sidebar_position:2,description:"Deploy Drone CI Runner with Dokku",keywords:["drone","dokku","drone ci","drone runner","ci"]},sidebar:"tutorialSidebar",previous:{title:"Drone Server",permalink:"/synopsis/dokku/drone-ci/drone-server"}},l=[{value:"Preparing dokku and the image",id:"preparing-dokku-and-the-image",children:[],level:2},{value:"Update",id:"update",children:[],level:2}],p={toc:l};function s(e){var n=e.components,r=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"drone-runner"},"Drone Runner"),(0,u.kt)("p",null,"For the runner, follow the same steps as fot the server, but make sure you\nfollow the instructions for the ",(0,u.kt)("a",{parentName:"p",href:"https://docs.drone.io/runner/docker/installation/linux/"},"runners"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{3-7}","{3-7}":!0},"docker run --detach \\\n  --volume=/var/run/docker.sock:/var/run/docker.sock \\\n  --env=DRONE_RPC_PROTO=https \\\n  --env=DRONE_RPC_HOST=drone.company.com \\\n  --env=DRONE_RPC_SECRET=super-duper-secret \\\n  --env=DRONE_RUNNER_CAPACITY=2 \\\n  --env=DRONE_RUNNER_NAME=my-first-runner \\\n  --publish=3000:3000 \\\n  --restart=always \\\n  --name=runner \\\n  drone/drone-runner-docker:1\n")),(0,u.kt)("p",null,"The instructions state that"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"the runner requires the file ",(0,u.kt)("inlineCode",{parentName:"li"},"/var/run/docker.sock")," to be mounted"),(0,u.kt)("li",{parentName:"ul"},"it listens on port ",(0,u.kt)("inlineCode",{parentName:"li"},"3000"))),(0,u.kt)("h2",{id:"preparing-dokku-and-the-image"},"Preparing dokku and the image"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"dokku apps:create drone-runner\n\n# env variables\ndokku config:set drone-runner DRONE_RPC_SECRET=$(dokku config:get drone-server DRONE_RPC_SECRET)\ndokku config:set drone-runner DRONE_RPC_PROTO=https\ndokku config:set drone-runner DRONE_RPC_HOST=drone.lebalz.ch\ndokku config:set drone-runner DRONE_RUNNER_CAPACITY=2\ndokku config:set drone-runner DRONE_RUNNER_NAME=bolt\n\n# mount the docker socket\ndokku storage:mount drone-runner /var/run/docker.sock:/var/run/docker.sock\n\n# change port mapping and set domain\ndokku proxy:ports-add drone-runner http:3000:3000\n\n# deploy\ndokku git:from-image drone-runner drone/drone-runner-docker:latest\n")),(0,u.kt)("h2",{id:"update"},"Update"),(0,u.kt)("p",null,"If you deployed ",(0,u.kt)("inlineCode",{parentName:"p"},":latest"),", then you would need to run"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull drone/drone-runner-docker:latest\ndokku ps:rebuild drone-runner\n")),(0,u.kt)("p",null,"To update to a specific version (e.g. ",(0,u.kt)("inlineCode",{parentName:"p"},"1.8.0"),") lookup the tags on ",(0,u.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/drone/drone-runner-docker/tags"},"https://hub.docker.com/r/drone/drone-runner-docker/tags")," and run on your dokku server:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"dokku git:from-image drone-runner drone/drone-runner-docker:1.8.0\n")),(0,u.kt)("p",null,"The application will be rebuilt automatically."))}s.isMDXComponent=!0}}]);