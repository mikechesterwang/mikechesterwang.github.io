"use strict";(self.webpackChunkmikechesterwang_github_io=self.webpackChunkmikechesterwang_github_io||[]).push([[7710],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(t),m=o,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8385:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={},c="Go Web development Starter Template",p={unversionedId:"go/starter",id:"go/starter",title:"Go Web development Starter Template",description:"fiber + sqlc + wire + OpenAPI",source:"@site/docs/go/starter.md",sourceDirName:"go",slug:"/go/starter",permalink:"/docs/go/starter",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sqlc model layer with transaction",permalink:"/docs/go/mock-sqlc-tx"},next:{title:"intro",permalink:"/docs/intro"}},s={},u=[],g={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"go-web-development-starter-template"},"Go Web development Starter Template"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fiber")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlc")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"wire")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenAPI")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scripts/install-oapi-codegen.sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\necho "checking $VERSION for $DIR/oapi-codegen"\n\n$DIR/oapi-codegen --version | grep $VERSION\n\nif [ $? -eq 0 ]; then\n    exit 0\nfi\n\necho "installing $VERSION for $DIR/oapi-codegen"\n\nGOBIN=$DIR go install github.com/deepmap/oapi-codegen/v2/cmd/oapi-codegen@$VERSION\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scrips/install-wire.sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\nstat $DIR/wire\n\nif [ $? -eq 0 ]; then\n    exit 0\nfi\n\necho "installing $VERSION for $DIR/wire"\n\nGOBIN=$DIR go install github.com/google/wire/cmd/wire@$VERSION\n')),(0,i.kt)("p",null,"Note that you need to delete the wire binary to upgrade the version since it\ndoes not have command to show version."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Makefile")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-makefile"},"PROJECT_DIR=$(shell pwd)\n\n###################################################\n### OpenAPI         \n###################################################\n\nOAPI_CODEGEN_VERSION=v2.0.0\nOAPI_CODEGEN_BIN=$(PROJECT_DIR)/bin/oapi-codegen\nOAPI_GEN_DIR=$(PROJECT_DIR)/pkg/apigen\n\ninstall-oapi-codegen:\n    DIR=$(PROJECT_DIR)/bin VERSION=${OAPI_CODEGEN_VERSION} ./scripts/install-oapi-codegen.sh\n\nprune-spec:\n    @rm -f $(OAPI_GEN_DIR)/spec_gen.go\n\ngen-spec: install-oapi-codegen prune-spec\n    $(OAPI_CODEGEN_BIN) -generate types,fiber -o $(OAPI_GEN_DIR)/spec_gen.go -package apigen $(PROJECT_DIR)/api/openapi-v1.yaml\n\n###################################################\n### Wire\n###################################################\n\nWIRE_VERSION=v0.6.0\n\ninstall-wire:\n    DIR=$(PROJECT_DIR)/bin VERSION=${WIRE_VERSION} ./scripts/install-wire.sh\n\nWIRE_GEN=$(PROJECT_DIR)/bin/wire\ngen-wire: install-wire\n    $(WIRE_GEN) ./wire\n\n###################################################\n### SQL  \n###################################################\n\nSQLC_VERSION=1.25.0\nQUERIER_DIR=$(PROJECT_DIR)/pkg/model/querier\n\nclean-querier:\n    @rm -f $(QUERIER_DIR)/*sql.gen.go\n    @rm -f $(QUERIER_DIR)/copyfrom_gen.go   \n    @rm -f $(QUERIER_DIR)/db_gen.go\n    @rm -f $(QUERIER_DIR)/models_gen.go\n    @rm -f $(QUERIER_DIR)/querier_gen.go\n\ngen-querier: clean-querier\n    docker run --rm -v $(PROJECT_DIR):/src -w /src sqlc/sqlc:$(SQLC_VERSION) generate\n\n###################################################\n### Common\n###################################################\n\ngen: gen-spec gen-querier gen-wire\n    @go mod tidy\n")))}m.isMDXComponent=!0}}]);