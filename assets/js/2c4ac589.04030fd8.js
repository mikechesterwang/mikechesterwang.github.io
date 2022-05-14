"use strict";(self.webpackChunkmikechesterwang_github_io=self.webpackChunkmikechesterwang_github_io||[]).push([[94],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},993:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={},p=void 0,u={unversionedId:"DevOps/Makefile",id:"DevOps/Makefile",title:"Makefile",description:"Makefile",source:"@site/docs/DevOps/Makefile.md",sourceDirName:"DevOps",slug:"/DevOps/Makefile",permalink:"/docs/DevOps/Makefile",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup Kubernetes 1.21",permalink:"/docs/DevOps/Kubeadm"},next:{title:"SSH Commands",permalink:"/docs/DevOps/ssh"}},c={},s=[{value:"Makefile",id:"makefile",level:2},{value:"Get go version in makefile",id:"get-go-version-in-makefile",level:3},{value:"Function",id:"function",level:3}],f={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"makefile"},"Makefile"),(0,a.kt)("h3",{id:"get-go-version-in-makefile"},"Get go version in makefile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-makefile"},"GO_VERSION := $(shell echo `go version | sed 's|.*\\(1\\.[0-9][0-9]\\).*$$|\\1|'`)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Filter the string you want")," "),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"\\(xxx\\)")," to wrap the content you want to find in a string, ",(0,a.kt)("inlineCode",{parentName:"p"},"sed")," would know this is the first place you are interested in, and then use ",(0,a.kt)("inlineCode",{parentName:"p"},"\\1")," to get the string you want."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"escape dollar"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$")," is a keyword in makefile, using ",(0,a.kt)("inlineCode",{parentName:"p"},"$$")," instead"),(0,a.kt)("h3",{id:"function"},"Function"),(0,a.kt)("p",null,"A function can be called like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-makefile"},"$(call func,param1,param2)\n")),(0,a.kt)("p",null,"The definition of the function is like (Using ",(0,a.kt)("inlineCode",{parentName:"p"},"$<number>")," to get the parameters)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-makefile"},'define go-get\nif [ "$(GO_VERSION)" == "1.18" ]; then \\\nGOBIN=$(PROJECT_DIR)/bin go install $(2); \\\nelse\\\n....\\\nfi\nendef\n')),(0,a.kt)("p",null,"Note that the content is a shell command. One command should be terminated by a ",(0,a.kt)("inlineCode",{parentName:"p"},";"),", and use ",(0,a.kt)("inlineCode",{parentName:"p"},"\\")," to break lines."))}m.isMDXComponent=!0}}]);