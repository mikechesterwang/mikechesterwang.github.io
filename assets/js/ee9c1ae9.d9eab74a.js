"use strict";(self.webpackChunkmikechesterwang_github_io=self.webpackChunkmikechesterwang_github_io||[]).push([[352],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),b=o,d=m["".concat(l,".").concat(b)]||m[b]||p[b]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={},l=void 0,s={unversionedId:"debug/kubernetes",id:"debug/kubernetes",title:"kubernetes",description:"kubernetes client-go fake client cannot create cluster scoped objects",source:"@site/docs/debug/kubernetes.md",sourceDirName:"debug",slug:"/debug/kubernetes",permalink:"/docs/debug/kubernetes",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"iam",permalink:"/docs/aws/iam"},next:{title:"Basic commands",permalink:"/docs/f3discovery/basic"}},u={},p=[{value:"kubernetes client-go fake client cannot create cluster scoped objects",id:"kubernetes-client-go-fake-client-cannot-create-cluster-scoped-objects",level:2},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Mechanism",id:"mechanism",level:3}],m={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubernetes-client-go-fake-client-cannot-create-cluster-scoped-objects"},"kubernetes client-go fake client cannot create cluster scoped objects"),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("p",null,"I tried to use fake client to create cluster scoped objects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "k8s.io/client-go/kubernetes/fake"\n...\nclient := fake.NewSimpleClientset(&rbacv1.ClusterRole{\n    ObjectMeta: metav1.ObjectMeta{\n        Name:      "role-name",\n        Namespace: "ns",\n    },\n})\nclient.RbacV1().ClusterRoles().Create(context.Background(), &rbacv1.ClusterRoleBinding{\n    ObjectMeta: metav1.ObjectMeta{\n        Name:      saName,\n        Namespace: saNamespace,\n    },\n    Subjects: []v1.Subject{\n        {\n            Namespace: saNamespace,\n            Name:      saName,\n            Kind:      "ServiceAccount",\n        },\n    },\n    RoleRef: v1.RoleRef{\n        APIGroup: "rbac.authorization.k8s.io",\n        Kind:     "ClusterRole",\n        Name:     "role-name",\n    },\n})\n')),(0,a.kt)("p",null,"But it failed with the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'request namespace does not match object namespace, request: "" object: "xxx"\n')),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"It turns out ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," should be created without the namespace field because it is a cluster scoped object. However, the real Kubernetes API server will not reject the request with namespace field. So what happened here?"),(0,a.kt)("h3",{id:"mechanism"},"Mechanism"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fake client will first use the corresponding resource client to create the object, in this case, the following method in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/client-go/blob/master/kubernetes/typed/rbac/v1/fake/fake_clusterrolebinding.go#L82"},"this file")," is called:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (c *FakeClusterRoleBindings) Create(ctx context.Context, clusterRoleBinding *v1.ClusterRoleBinding, opts metav1.CreateOptions) (result *v1.ClusterRoleBinding, err error) {\n    obj, err := c.Fake.\n        Invokes(testing.NewRootCreateAction(clusterrolebindingsResource, clusterRoleBinding), &v1.ClusterRoleBinding{})\n    if obj == nil {\n        return nil, err\n    }\n    return obj.(*v1.ClusterRoleBinding), err\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Check the ",(0,a.kt)("inlineCode",{parentName:"li"},"NewRootCreateSubresourceAction")," function ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/client-go/blob/master/testing/actions.go#L114"},"here"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'func NewRootCreateSubresourceAction(resource schema.GroupVersionResource, name, subresource string, object runtime.Object) CreateActionImpl {\n    action := CreateActionImpl{}\n    action.Verb = "create"\n    action.Resource = resource\n    action.Subresource = subresource\n    action.Name = name\n    action.Object = object\n\n    return action\n}\n')),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"action.Namespace")," is not set comparing with ",(0,a.kt)("inlineCode",{parentName:"p"},"NewCreateAction"),", this is the main cause."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Invokes")," method will use a list of reactor to do the corresponding operation.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (c *Fake) Invokes(action Action, defaultReturnObj runtime.Object) (runtime.Object, error) {\n    c.Lock()\n    defer c.Unlock()\n\n    actionCopy := action.DeepCopy()\n    c.actions = append(c.actions, action.DeepCopy())\n    for _, reactor := range c.ReactionChain {\n        if !reactor.Handles(actionCopy) {\n            continue\n        }\n\n        handled, ret, err := reactor.React(actionCopy)\n        if !handled {\n            continue\n        }\n\n        return ret, err\n    }\n\n    return defaultReturnObj, nil\n}\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Accoriding to ",(0,a.kt)("inlineCode",{parentName:"li"},"CreateActionImpl")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/client-go/blob/master/testing/fixture.go#L97"},"here"),", we can know it tries to compare the namespace of the object and the namespace of the action, which is empty in this case.")))}b.isMDXComponent=!0}}]);