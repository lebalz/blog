"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5878],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=s,m=c["".concat(i,".").concat(d)]||c[d]||k[d]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7135:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return k}});var n=a(3117),s=a(102),r=(a(7294),a(3905)),o=["components"],l={title:"Dokku",keywords:["dokku"],sidebar_position:2},i="Dokku",u={unversionedId:"dokku/index",id:"dokku/index",title:"Dokku",description:"Dokku is a software suite that simulates a PaaS on any server. It uses the same base functionality as Heroku and tries to mimic usage of Heroku as much as possible. With Dokku, it\u2019s very easy to deploy software and run multiple projects on the same physical server through the use of containers.",source:"@site/docs/dokku/index.md",sourceDirName:"dokku",slug:"/dokku/",permalink:"/synopsis/dokku/",draft:!1,editUrl:"https://github.com/lebalz/blog/edit/main/docs/dokku/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Dokku",keywords:["dokku"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Knowledgebase",permalink:"/synopsis/"},next:{title:"Troubleshooting",permalink:"/synopsis/dokku/troubleshoot"}},p={},k=[{value:"Plugins",id:"plugins",level:2},{value:"Server Swap",id:"server-swap",level:2},{value:"Enable Swap",id:"enable-swap",level:3},{value:"Adjusting the Swappiness Value",id:"adjusting-the-swappiness-value",level:3},{value:"Disable Swap",id:"disable-swap",level:3}],c={toc:k};function d(e){var t=e.components,a=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dokku"},"Dokku"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dokku is a software suite that simulates a PaaS on any server. It uses the same base functionality as Heroku and tries to mimic usage of Heroku as much as possible. With Dokku, it\u2019s very easy to deploy software and run multiple projects on the same physical server through the use of containers. ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("h1",{id:"dokku-server-setup"},"Dokku Server Setup"),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git\ndokku plugin:install https://github.com/dokku/dokku-http-auth.git\ndokku plugin:install https://github.com/lebalz/dokku-post-deploy-script post-deploy-script\ndokku plugin:install https://github.com/dokku/dokku-postgres.git postgres\ndokku plugin:install https://github.com/dokku/dokku-mysql.git mysql\ndokku plugin:install https://github.com/dokku/dokku-redis.git redis\n")),(0,r.kt)("h2",{id:"server-swap"},"Server Swap"),(0,r.kt)("h3",{id:"enable-swap"},"Enable Swap"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, create a file that will be used as swap:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo fallocate -l 2G /swapfile\n")),(0,r.kt)("p",null,"Set the file permissions to 600 to prevent regular users to write and read the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 600 /swapfile\n")),(0,r.kt)("p",null,"Create a Linux swap area on the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkswap /swapfile\n")),(0,r.kt)("p",null,"Activate the swap file by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo swapon /swapfile\n")),(0,r.kt)("p",null,"To make the change permanent open the /etc/fstab file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/fstab\n")),(0,r.kt)("p",null,"and paste the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"/etc/fstab\n/swapfile swap swap defaults 0 0\n")),(0,r.kt)("p",null,"Verify that the swap is active by using either the swapon or the free command, as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo swapon --show\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"NAME      TYPE      SIZE  USED PRIO\n/swapfile file        2G    0B   -1Copy\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo free -h\n              total        used        free      shared  buff/cache   available\nMem:          981Mi        97Mi        68Mi       0.0Ki       814Mi       735Mi\nSwap:         2.0Gi        10Mi       1.9Gi\n")),(0,r.kt)("h3",{id:"adjusting-the-swappiness-value"},"Adjusting the Swappiness Value"),(0,r.kt)("p",null,"Swappiness is a Linux kernel property that defines how often the system will use the swap space. It can have a value between 0 and 100. A low value will make the kernel to try to avoid swapping whenever possible, while a higher value will make the kernel to use the swap space more aggressively."),(0,r.kt)("p",null,"On Ubuntu, the default swappiness value is set to 60. You can check the current value by typing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cat /proc/sys/vm/swappiness\n\n# 60\n")),(0,r.kt)("p",null,"While the swappiness value of 60 is OK for most Linux systems, for production servers, you may need to set a lower value."),(0,r.kt)("p",null,"For example, to set the swappiness value to 10, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo sysctl vm.swappiness=10\n")),(0,r.kt)("p",null,"To make this parameter persistent across reboots, append the following line to the /etc/sysctl.conf file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# /etc/sysctl.conf\nvm.swappiness=10\n")),(0,r.kt)("p",null,"The optimal swappiness value depends on your system workload and how the memory is being used. You should adjust this parameter in small increments to find an optimal value"),(0,r.kt)("h3",{id:"disable-swap"},"Disable Swap"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, deactivate the swap space:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo swapoff -v /swapfile\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, remove the swap file entry /swapfile swap swap defaults 0 0 from the /etc/fstab file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, remove the actual swapfile file using the rm command:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm /swapfile\n")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://knowledge.code-fabrik.ch/software/dokku/"},"What is Dokku"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);