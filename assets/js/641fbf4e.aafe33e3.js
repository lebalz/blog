"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3890],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,y=f["".concat(s,".").concat(m)]||f[m]||c[m]||o;return n?r.createElement(y,p(p({ref:t},l),{},{components:n})):r.createElement(y,p({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9131:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),p=["components"],a={title:"unzip.py"},s="Unzip Folders",u={unversionedId:"helpers/unzip",id:"helpers/unzip",title:"unzip.py",description:"",source:"@site/docs/helpers/unzip.md",sourceDirName:"helpers",slug:"/helpers/unzip",permalink:"/synopsis/helpers/unzip",editUrl:"https://github.com/lebalz/blog/edit/main/docs/helpers/unzip.md",tags:[],version:"current",frontMatter:{title:"unzip.py"},sidebar:"tutorialSidebar",previous:{title:"Temperatursensor DS18B20",permalink:"/synopsis/arduino/temperature-DS18B20"},next:{title:"Links",permalink:"/synopsis/links"}},l={},c=[],f={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unzip-folders"},"Unzip Folders"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=unzip.py",title:"unzip.py"},"#!/usr/bin/env python3\n\nimport sys\nfrom pathlib import Path\nfrom zipfile import ZipFile\n\nsource = Path(sys.argv[1])\nif not source.is_dir():\n    raise RuntimeError(f'No folder \"{source}\" found.')\n\nfor zip in source.glob('*.zip'):\n    dest = zip.parent.joinpath(zip.stem)\n    i = 0\n    while dest.exists():\n        i = i + 1\n        dest = zip.parent.joinpath(f'{zip.stem} ({i})')\n    # Create a ZipFile Object and load sample.zip in it\n    print('Extract to', dest.name)\n    with ZipFile(zip, 'r') as zipObj:\n        zipObj.extractall(dest)\n")))}m.isMDXComponent=!0}}]);