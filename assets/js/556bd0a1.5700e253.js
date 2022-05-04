"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3987],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5704:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],s={},p="Letsencrypt",l={unversionedId:"dokku/letsencrypt",id:"dokku/letsencrypt",title:"Letsencrypt",description:"Troubleshooting",source:"@site/docs/dokku/letsencrypt.md",sourceDirName:"dokku",slug:"/dokku/letsencrypt",permalink:"/synopsis/dokku/letsencrypt",draft:!1,editUrl:"https://github.com/lebalz/blog/edit/main/docs/dokku/letsencrypt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Drone Runner",permalink:"/synopsis/dokku/drone-ci/drone-runner"},next:{title:"Umami",permalink:"/synopsis/dokku/umami"}},c={},d=[{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"letsencrypt"},"Letsencrypt"),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"dokku letsencrypt:auto-renew app-name")," fails"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"ERROR")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'2022-01-22 07:42:43,377:ERROR:__main__:1388: CA marked some of the authorizations as\n    invalid, which likely means it could not access http://example.com/.well-known/acme-challenge/X.\n    Did you set correct path in -d example.com:path or --default_root? Are all your domains\n    accessible from the internet? Please check your domains\' DNS entries, your host\'s\n    network/firewall setup and your webserver config. If a domain\'s DNS entry has both A\n    and AAAA fields set up, some CAs such as Let\'s Encrypt will perform the challenge\n    validation over IPv6. If your DNS provider does not answer correctly to CAA records\n    request, Let\'s Encrypt won\'t issue a certificate for your domain (see \n    https://letsencrypt.org/docs/caa/). Failing authorizations:\n    https://acme-v02.api.letsencrypt.org/acme/authz-v3/70727888570\nTraceback (most recent call last):\n  File "/simp_le/simp_le.py", line 1551, in main\n    return main_with_exceptions(cli_args)\n  File "/simp_le/simp_le.py", line 1535, in main_with_exceptions\n    persist_new_data(args, existing_data)\n  File "/simp_le/simp_le.py", line 1456, in persist_new_data\n    chain=None,\n  File "/simp_le/simp_le.py", line 1124, in persist_data\n    plugin.save(new_data)\n  File "/simp_le/simp_le.py", line 648, in save\n    pems = [self.dump_cert(data.cert)]\n  File "/simp_le/simp_le.py", line 468, in dump_cert\n    return OpenSSL.crypto.dump_certificate(self.typ, data.wrapped).strip()\nAttributeError: \'NoneType\' object has no attribute \'wrapped\'\n\nUnhandled error has happened, traceback is above\n')))),(0,i.kt)("p",null,"and even ",(0,i.kt)("inlineCode",{parentName:"p"},"dokku letsencrypt:revoke app-name")," fails "),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"ERROR")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"-----\x3e Revoking letsencrypt certificate for app-name...\n        - Domain 'domain.com'\ndarkhttpd/1.12, copyright (c) 2003-2016 Emil Mikulic.\nlistening on: http://0.0.0.0:80/\nACME server returned an error: urn:ietf:params:acme:error:unauthorized :: The client lacks sufficient authorization :: Certificate is expired\n\n\nDebugging tips: -v improves output verbosity. Help is available under --help.\n")))),(0,i.kt)("p",null,"(and ",(0,i.kt)("inlineCode",{parentName:"p"},"dokku letsencrypt:cleanup app-name")," does not help), then an easy trick will do the job:"),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Readd the domain")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Remove your current domain since this will cleanup and remove the broken certificates.\nThen add it again and run letsencrypt for the win:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dokku domains:report app-name\n\ndokku domains:remove app-name domain.com\ndokku domains:add app-name domain.com\n\ndokku letsencrypt app-name\n")))))}u.isMDXComponent=!0}}]);