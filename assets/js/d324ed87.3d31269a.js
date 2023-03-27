"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7282],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:e},u),{},{components:t})):r.createElement(f,i({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5566:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],c={},s="VS Code",l={unversionedId:"vscode/README",id:"vscode/README",title:"VS Code",description:"Settings",source:"@site/docs/vscode/README.md",sourceDirName:"vscode",slug:"/vscode/",permalink:"/synopsis/vscode/",draft:!1,editUrl:"https://github.com/lebalz/blog/edit/main/docs/vscode/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Yarn",permalink:"/synopsis/unix/yarn"},next:{title:"Disable Bing Search in Windows 11",permalink:"/synopsis/windows/disable-bing-search-win11"}},u={},p=[{value:"Settings",id:"settings",level:2},{value:"Keybindings",id:"keybindings",level:2}],d={toc:p};function m(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vs-code"},"VS Code"),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "[python]": {\n        "editor.formatOnType": true\n    },\n    "workbench.colorTheme": "One Dark Pro Darker",\n    "workbench.settings.useSplitJSON": true,\n    "terminal.integrated.profiles.linux": {\n        "bash": {\n            "path": "bash",\n            "icon": "terminal-bash",\n            "args": ["--login"]\n        },\n        "zsh": {\n            "path": "zsh"\n        },\n        "fish": {\n            "path": "fish"\n        },\n        "tmux": {\n            "path": "tmux",\n            "icon": "terminal-tmux"\n        },\n        "pwsh": {\n            "path": "pwsh",\n            "icon": "terminal-powershell"\n        }\n    },\n    "terminal.integrated.defaultProfile.linux": "bash",\n    "git.autofetch": true,\n    "editor.inlineSuggest.enabled": true,\n    "git.confirmSync": false,\n    "files.associations": {\n        "*.mdx": "markdown"\n    },\n    "local-history.path": "/home/balz/.local-history/",\n    "eslint.options": {\n        "quotes": ["single", { "allowTemplateLiterals": true, "avoidEscape": true }],\n        "extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"]\n    },\n    "eslint.validate": [\n        "markdwon",\n        "mdx",\n        "javascript",\n        "javascriptreact",\n        "typescript",\n        "typescriptreact"\n    ],\n    "eslint.packageManager": "yarn",\n    "eslint.alwaysShowStatus": true,\n    "eslint.format.enable": true,\n    "terminal.integrated.scrollback": 10000,\n    "editor.accessibilitySupport": "off",\n    "auto-close-tag.activationOnLanguage": [\n        "xml",\n        "php",\n        "blade",\n        "ejs",\n        "jinja",\n        "javascript",\n        "javascriptreact",\n        "typescript",\n        "typescriptreact",\n        "plaintext",\n        "markdown",\n        "vue",\n        "liquid",\n        "erb",\n        "lang-cfml",\n        "cfml",\n        "HTML (EEx)",\n        "HTML (Eex)",\n        "plist",\n        "mdx"\n    ],\n    "editor.tabSize": 4,\n    "files.exclude": {\n        "**/.git": true,\n        "**/.svn": true,\n        "**/.hg": true,\n        "**/CVS": true,\n        "**/.DS_Store": true,\n        "**/.pytest_cache": true,\n        "**/__pycache__": true,\n        "**/.vscode": true\n    },\n    "[scss]": {\n        "editor.defaultFormatter": "vscode.css-language-features"\n    },\n    "[css]": {\n        "editor.defaultFormatter": "vscode.css-language-features"\n    },\n    "editor.suggest.matchOnWordStartOnly": false\n}\n')),(0,a.kt)("h2",{id:"keybindings"},"Keybindings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// Place your key bindings in this file to override the defaultsauto[]\n[\n    {\n        "key": "ctrl+oem_8",\n        "command": "workbench.action.terminal.focus"\n    },\n    {\n        "key": "ctrl+oem_8",\n        "command": "workbench.action.focusActiveEditorGroup",\n        "when": "terminalFocus"\n    },\n    {\n        "key": "ctrl+right",\n        "command": "workbench.action.terminal.focusNextPane",\n        "when": "terminalFocus"\n    },\n    {\n        "key": "ctrl+left",\n        "command": "workbench.action.terminal.focusPreviousPane",\n        "when": "terminalFocus"\n    },\n    {\n        "key": "ctrl+w ctrl+d",\n        "command": "workbench.action.moveEditorToRightGroup"\n    },\n    {\n        "key": "ctrl+w ctrl+s",\n        "command": "workbench.action.moveEditorToBelowGroup"\n    },\n    {\n        "key": "ctrl+w ctrl+w",\n        "command": "workbench.action.moveEditorToAboveGroup"\n    },\n    {\n        "key": "ctrl+w ctrl+a",\n        "command": "workbench.action.moveEditorToLeftGroup"\n    },\n    {\n        "key": "alt+right",\n        "command": "workbench.action.focusRightGroup",\n        "when": "editorFocus"\n    },\n    {\n        "key": "alt+left",\n        "command": "workbench.action.focusLeftGroup",\n        "when": "editorFocus"\n    },\n    {\n        "key": "ctrl+w ctrl+d",\n        "command": "workbench.action.terminal.split",\n        "when": "terminalFocus && terminalProcessSupported || terminalFocus && terminalWebExtensionContributedProfile"\n    },    \n    {\n        "key": "ctrl+enter",\n        "command": "vscode-postgres.runQuery",\n        "when": "editorLangId == \'postgres\'"\n    },\n    {\n        "key": "ctrl+shift+down",\n        "command": "cursorColumnSelectDown",\n        "when": "textInputFocus"\n    },\n    {\n        "key": "ctrl+shift+up",\n        "command": "cursorColumnSelectUp",\n        "when": "textInputFocus"\n    },\n    {\n        "key": "ctrl+p ctrl+p",\n        "command": "extension.markdown-pdf.pdf"\n    }\n]\n')))}m.isMDXComponent=!0}}]);