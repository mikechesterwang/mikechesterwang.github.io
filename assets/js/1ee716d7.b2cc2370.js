"use strict";(self.webpackChunkmikechesterwang_github_io=self.webpackChunkmikechesterwang_github_io||[]).push([[7130],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"A Glimpse of the Kubernetes Scheduler",description:"A Glimpse of the Kubernetes Scheduler",authors:["mike"],tags:["Kubernetes"],hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/kubernetes_scheduler",source:"@site/blog/kubernetes_scheduler.md",title:"A Glimpse of the Kubernetes Scheduler",description:"A Glimpse of the Kubernetes Scheduler",date:"2024-07-10T13:11:42.000Z",formattedDate:"July 10, 2024",tags:[{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:1.41,truncated:!1,authors:[{name:"Mike Wang",title:"Software Engineer",url:"https://github.com/mikechesterwang",imageURL:"https://avatars.githubusercontent.com/u/52522981",key:"mike"}],frontMatter:{title:"A Glimpse of the Kubernetes Scheduler",description:"A Glimpse of the Kubernetes Scheduler",authors:["mike"],tags:["Kubernetes"],hide_table_of_contents:!1},prevItem:{title:"A Glimpse of the Kubernetes Pod Exec Interface",permalink:"/blog/kubernetes_exec_code_view"},nextItem:{title:"Multi-tenancy Gateway",permalink:"/blog/multitenancy_gateway"}},c={authorsImageUrls:[void 0]},d=[{value:"Scheduler",id:"scheduler",level:2},{value:"Autoscaler",id:"autoscaler",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"scheduler"},"Scheduler"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kube-scheduler"),' is the key component to schedule new pods to existing nodes. It uses "informer" to listen\nfor new pod that it is responsible for and new node.'),(0,i.kt)("p",null,"When there is a new pod, the pod will be added to the scheduling queue. ",(0,i.kt)("inlineCode",{parentName:"p"},"ScheduleOne"),' is called in every iteration,\nit is responsible to try to schedule one of the pod in the scheduling queue to nodes in the "node cache". '),(0,i.kt)("p",null,'When there is a new node, the node will be added to the "node cache", all unschedulable pods will immdiately be\ntraversed to use ',(0,i.kt)("inlineCode",{parentName:"p"},"scheduler.AdmissionCheck")," to know if it can be scheduled to this new node. "),(0,i.kt)("h2",{id:"autoscaler"},"Autoscaler"),(0,i.kt)("p",null,"Cluster autoscaler is responsible for scaling up/down the cluster. Note that it is coupled with the cloud provider\nsince only the cloud provider can provide API to manipulate your nodes (e.g. ec2 instances)."),(0,i.kt)("p",null,"Autoscaler lists all unschedulable pods in every iteration. When scaling up is needed, it will call ",(0,i.kt)("inlineCode",{parentName:"p"},"ComputeExpansionOption"),"\nto get feasible plans for scaling up. This function leverage estimator and traverse the valid node groups to get the result.\n",(0,i.kt)("inlineCode",{parentName:"p"},"binpacking_estimator"),' uses the simulator to simulate the schenario that the node was added to the cluster. This "scenario"\nis described as ',(0,i.kt)("inlineCode",{parentName:"p"},"ClusterSnapshot"),". The estimator will use ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckPredicates")," to know if the pods are okay\nto be placed in this node. ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckPredicates")," will further call ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduler.AdmissionCheck")," to do the job."),(0,i.kt)("p",null,"Note that the valid node groups is directly fetched by ",(0,i.kt)("inlineCode",{parentName:"p"},"(*ScaleUpOrchestrator).autoscalingContext.CloudProvider.NodeGroups()"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"(*ScaleUpOrchestrator).autoscalingContext.CloudProvider")," is initalized by ",(0,i.kt)("inlineCode",{parentName:"p"},"buildCloudProvider")," in\n",(0,i.kt)("inlineCode",{parentName:"p"},"cloudprovider/builder/builder_aws.go"),"."),(0,i.kt)("p",null,"In AWS autoscaler, it retrives all cached ASGs (autoscaling groups), which implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeGroup")," interface. The ASGs are\ncached in ",(0,i.kt)("inlineCode",{parentName:"p"},"Refresh")," function in every iteration. The ASGs are fetched and filterd by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"--node-group-auto-discovery=asg:tag=xxx"),"."))}h.isMDXComponent=!0}}]);