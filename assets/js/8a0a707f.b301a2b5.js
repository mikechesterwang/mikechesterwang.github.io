"use strict";(self.webpackChunkmikechesterwang_github_io=self.webpackChunkmikechesterwang_github_io||[]).push([[690],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4609:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],u={},i="Setup Kubernetes 1.21",l={unversionedId:"DevOps/Kubeadm",id:"DevOps/Kubeadm",title:"Setup Kubernetes 1.21",description:"Setup Kubernetes 1.21 in ubuntu 20.04 with Kubeadm and crio 1.23.",source:"@site/docs/DevOps/Kubeadm.md",sourceDirName:"DevOps",slug:"/DevOps/Kubeadm",permalink:"/docs/DevOps/Kubeadm",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Makefile",permalink:"/docs/DevOps/Makefile"}},c={},p=[{value:"Script",id:"script",level:2},{value:"control plane (worker node script + kubeadm init)",id:"control-plane-worker-node-script--kubeadm-init",level:3},{value:"woker node",id:"woker-node",level:3},{value:"Details",id:"details",level:2}],d={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-kubernetes-121"},"Setup Kubernetes 1.21"),(0,a.kt)("p",null,"Setup Kubernetes 1.21 in ubuntu 20.04 with Kubeadm and crio 1.23."),(0,a.kt)("h2",{id:"script"},"Script"),(0,a.kt)("h3",{id:"control-plane-worker-node-script--kubeadm-init"},"control plane (worker node script + kubeadm init)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"https://raw.githubusercontent.com/mikechesterwang/setup-kubeadm/main/control-plane-ubuntu20.04.sh | sudo bash\n")),(0,a.kt)("p",null,"And then apply network model.\ne.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml\n")),(0,a.kt)("h3",{id:"woker-node"},"woker node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s https://raw.githubusercontent.com/mikechesterwang/setup-kubeadm/main/setup-ubuntu20.04.sh | sudo bash\n")),(0,a.kt)("p",null,"And then run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubeadm join")),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# install crio 1.23\nOS=xUbuntu_20.04\nCRIO_VERSION=1.23\necho "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /"|sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list \necho "deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$CRIO_VERSION/$OS/ /"|sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$CRIO_VERSION.list\n\ncurl -L https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable:cri-o:$CRIO_VERSION/$OS/Release.key | sudo apt-key add - \ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/Release.key | sudo apt-key add - \n\nsudo apt update\nsudo apt install -y cri-o cri-o-runc\n\nsudo systemctl enable crio.service\nsudo systemctl start crio.service\n\nsudo apt install -y cri-tools\n\n# iptables\nsudo modprobe overlay\nsudo modprobe br_netfilter\n\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-iptables  = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.ipv4.ip_forward                 = 1\nEOF\n\nsudo sysctl --system\n\n# kubeadm\nsudo apt-get update\nsudo apt-get install -y apt-transport-https ca-certificates curl\n\nsudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg\necho "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n\nsudo apt-get update\nsudo apt-get install -y kubelet=1.21.0-00 kubeadm=1.21.0-00 kubectl\nsudo apt-mark hold kubelet kubeadm kubectl\n')))}b.isMDXComponent=!0}}]);