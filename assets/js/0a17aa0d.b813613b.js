"use strict";(self.webpackChunkmikechesterwang_github_io=self.webpackChunkmikechesterwang_github_io||[]).push([[201],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9251:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"A Glimpse of the Kubernetes Pod Exec Interface",description:"A Glimpse of the Kubernetes Pod Exec Interface",authors:["mike"],tags:["Kubernetes"],hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/kubernetes_exec_code_view",source:"@site/blog/kubernetes_exec_code_view.md",title:"A Glimpse of the Kubernetes Pod Exec Interface",description:"A Glimpse of the Kubernetes Pod Exec Interface",date:"2023-07-23T09:24:00.000Z",formattedDate:"July 23, 2023",tags:[{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:5.7,truncated:!1,authors:[{name:"Mike Wang",title:"Software Engineer",url:"https://github.com/mikechesterwang",imageURL:"https://avatars.githubusercontent.com/u/52522981",key:"mike"}],frontMatter:{title:"A Glimpse of the Kubernetes Pod Exec Interface",description:"A Glimpse of the Kubernetes Pod Exec Interface",authors:["mike"],tags:["Kubernetes"],hide_table_of_contents:!1},prevItem:{title:"Index",permalink:"/blog/index"}},u={authorsImageUrls:[void 0]},m=[{value:"User-facing Interface",id:"user-facing-interface",level:2},{value:"Kubernetes Side",id:"kubernetes-side",level:2},{value:"Container Runtime Side",id:"container-runtime-side",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"user-facing-interface"},"User-facing Interface"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"go-client"),", users can run command in a container using the following code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'var (\n    podName      = "pod-name"\n    podNamespace = "pod-namespace"\n    cmd          = []string{"echo", "1"}\n)\n\n// build RESTful request\nreq := t.kc.\n    CoreV1().\n    RESTClient().\n    Post().\n    Resource("pods").\n    Name(podName).\n    Namespace(podNamespace).\n    SubResource("exec")\nexecOption := &corev1.PodExecOptions{\n    Command: cmd,\n    Stdout:  true,\n    Stderr:  true,\n    // we only care about not tty case in this example.\n    TTY:     false,\n    Stdin:   false,\n}\nreq.VersionedParams(execOption, scheme.ParameterCodec)\n\n// execute command in container using SPDYExecutor\nexec, err := t.newSPDYExecutor(t.kc.GetRestCfg(), "POST", req.URL())\nif err != nil {\n    return "", errors.Wrapf(err, "failed to build SPDY Executor: %v", option)\n}\n\noutBuf := new(bytes.Buffer)\nerrBuf := new(bytes.Buffer)\n\nerr = exec.StreamWithContext(ctx, remotecommand.StreamOptions{\n    Stdin:  nil,\n    Stdout: outBuf,\n    Stderr: errBuf,\n})\n\nif err != nil {\n    return "", errors.Wrapf(err, "failed to execute command: %v, stderr: %s", option, errBuf.String())\n}\n')),(0,o.kt)("p",null,"In the above example, we use SPDYExecutor (note that SPDY is a protocol that is deprecated in favor of HTTP/2) to execute the command in the container. The ",(0,o.kt)("inlineCode",{parentName:"p"},"StreamWithContext")," method will send a request to the kube-apiserver, and the kube-apiserver will forward the request to the kubelet. "),(0,o.kt)("p",null,"The user interface is very clean. But we don't know if this method will return error when the command exuected in the container returns a non-zero exit code! So we'd better to take a deeper look. Of course, you can also verify it by executing a command in a container that will return a non-zero exit code like ",(0,o.kt)("inlineCode",{parentName:"p"},"exit 1"),"."),(0,o.kt)("p",null,"Let's look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"StreamWithContext")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (e *streamExecutor) StreamWithContext(ctx context.Context, options StreamOptions) error {\n    conn, streamer, err := e.newConnectionAndStream(ctx, options)\n    if err != nil {\n        return err\n    }\n    defer conn.Close()\n\n    panicChan := make(chan any, 1)\n    errorChan := make(chan error, 1)\n    go func() {\n        defer func() {\n            if p := recover(); p != nil {\n                panicChan <- p\n            }\n        }()\n        errorChan <- streamer.stream(conn)\n    }()\n\n    select {\n    case p := <-panicChan:\n        panic(p)\n    case err := <-errorChan:\n        return err\n    case <-ctx.Done():\n        return ctx.Err()\n    }\n}\n")),(0,o.kt)("p",null,"The logic is simple: if the error stream is not empty (also not EOF), it will be decoded and sent to the channel ",(0,o.kt)("inlineCode",{parentName:"p"},"errorChan"),". Otherwise, nil will be sent to the channel."),(0,o.kt)("p",null,"In normal situation (no timeout and no panic), this method will be blocked by the channel ",(0,o.kt)("inlineCode",{parentName:"p"},"errorChan"),", where the error or nil comes out.  "),(0,o.kt)("p",null,"Following the method ",(0,o.kt)("inlineCode",{parentName:"p"},"streamer.stream(conn)"),", we can find where the channel is created in ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s.io/client-go/tools/remotecommand/errorstream.go"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func watchErrorStream(errorStream io.Reader, d errorStreamDecoder) chan error {\n    errorChan := make(chan error)\n\n    go func() {\n        defer runtime.HandleCrash()\n\n        message, err := io.ReadAll(errorStream)\n        switch {\n        case err != nil && err != io.EOF:\n            errorChan <- fmt.Errorf("error reading from error stream: %s", err)\n        case len(message) > 0:\n            errorChan <- d.decode(message)\n        default:\n            errorChan <- nil\n        }\n        close(errorChan)\n    }()\n\n    return errorChan\n}\n')),(0,o.kt)("p",null,"Note that when the error stream is not empty, it does not neccessary to be an error. Because ",(0,o.kt)("inlineCode",{parentName:"p"},"d.decode(message)")," is used to parse the error instead of something like ",(0,o.kt)("inlineCode",{parentName:"p"},"json.Unmarshal"),". In ",(0,o.kt)("inlineCode",{parentName:"p"},"errorDecoderV4"),", you can find the following code segment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (d *errorDecoderV4) decode(message []byte) error {\n    ...\n    case metav1.StatusSuccess:\n        return nil\n    ...\n")),(0,o.kt)("p",null,"But where is the ",(0,o.kt)("inlineCode",{parentName:"p"},"errorStream"),"? It is in ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s.io/client-go/tools/remotecommand/v2.go"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (p *streamProtocolV2) createStreams(conn streamCreator) error {\n    var err error\n    headers := http.Header{}\n    // set up error stream\n    headers.Set(v1.StreamType, v1.StreamTypeError)\n    p.errorStream, err = conn.CreateStream(headers)\n    if err != nil {\n        return err\n    }\n    // set up stdin stream\n    if p.Stdin != nil {\n        headers.Set(v1.StreamType, v1.StreamTypeStdin)\n        ...\n    }\n    // set up stdout stream\n    ...\n    // set up stderr stream\n    ...\n    return nil\n}\n")),(0,o.kt)("p",null,"This method uses ",(0,o.kt)("inlineCode",{parentName:"p"},"conn.CreateStream")," to create a bidirection streaming channel. It uses the header to filter the stream type. For instance, if the header is ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.StreamTypeStdin"),", the stream will be used to send data to the container. So the client will open at most ",(0,o.kt)("strong",{parentName:"p"},"four")," streaming tunnel to the container. "),(0,o.kt)("p",null,"To find out what kinds of stream frames will be sent from the server side, let's take a look at the Kubelet."),(0,o.kt)("p",null,"The Kubernetes client (e.g. client go, Kubectl) alwasy send requests to the API Server. In this scenario, API server will forward the request to Kubelet. Kubelet actually acts as a proxy to forward traffic between the client and the container."),(0,o.kt)("h2",{id:"kubernetes-side"},"Kubernetes Side"),(0,o.kt)("p",null,"How does Kubelet handle this request? Following the source code, we can quickly find the function ",(0,o.kt)("inlineCode",{parentName:"p"},"InstallDebuggingHandlers")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg/kubelet/server/server.go"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// InstallDebuggingHandlers registers the HTTP request patterns that serve logs or run commands/containers\nfunc (s *Server) InstallDebuggingHandlers() {\n    ...\n    ws = new(restful.WebService)\n    ws.\n        Path("/exec")\n    ws.Route(ws.GET("/{podNamespace}/{podID}/{containerName}").\n        To(s.getExec).\n        Operation("getExec"))\n    ...\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Accoriding the function name, we know ",(0,o.kt)("inlineCode",{parentName:"em"},"exec")," is actually a debugging feature in Kubelet. More debug features can be found in ",(0,o.kt)("inlineCode",{parentName:"em"},"InstallDebuggingDisabledHandlers"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (s *Server) getExec(request *restful.Request, response *restful.Response) {\n    ...\n    url, err := s.host.GetExec(podFullName, params.podUID, params.containerName, params.cmd, *streamOpts)\n    if err != nil {\n        streaming.WriteError(err, response.ResponseWriter)\n        return\n    }\n    proxyStream(response.ResponseWriter, request.Request, url)\n    ...\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getExec")," will first call ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeGenericRuntimeManager.GetExec"),", which will send an internal gRPC request to the remote runtime service to get a URL. Then ",(0,o.kt)("inlineCode",{parentName:"p"},"proxyStream")," will use this URL to connect to the streaming endpoint."),(0,o.kt)("h2",{id:"container-runtime-side"},"Container Runtime Side"),(0,o.kt)("p",null,"The remote runtime service is the container runtime, for instance, in ",(0,o.kt)("inlineCode",{parentName:"p"},"containerd/pkg/cri/streaming")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"containerd")," repo, it exposes the following streaming interfaces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Server interface {\n    http.Handler\n    ...\n    GetExec(*runtimeapi.ExecRequest) (*runtimeapi.ExecResponse, error)\n    GetAttach(req *runtimeapi.AttachRequest) (*runtimeapi.AttachResponse, error)\n    GetPortForward(*runtimeapi.PortForwardRequest) (*runtimeapi.PortForwardResponse, error)\n    ...\n}\n")),(0,o.kt)("p",null,"In its source code, we can find the corresponding function for handing the command execution request in ",(0,o.kt)("inlineCode",{parentName:"p"},"containerd/pkg/cri/streaming/remotecommand/exec.go"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func ServeExec(w http.ResponseWriter, req *http.Request, executor Executor, podName string, uid types.UID, container string, cmd []string, streamOpts *Options, idleTimeout, streamCreationTimeout time.Duration, supportedProtocols []string) {\n    ctx, ok := createStreams(req, w, streamOpts, supportedProtocols, idleTimeout, streamCreationTimeout)\n    if !ok {\n        // error is handled by createStreams\n        return\n    }\n    defer ctx.conn.Close()\n\n    err := executor.ExecInContainer(podName, uid, container, cmd, ctx.stdinStream, ctx.stdoutStream, ctx.stderrStream, ctx.tty, ctx.resizeChan, 0)\n    if err != nil {\n        if exitErr, ok := err.(utilexec.ExitError); ok && exitErr.Exited() {\n            rc := exitErr.ExitStatus()\n            ctx.writeStatus(&apierrors.StatusError{ErrStatus: metav1.Status{\n                Status: metav1.StatusFailure,\n                Reason: remotecommandconsts.NonZeroExitCodeReason,\n                Details: &metav1.StatusDetails{\n                    Causes: []metav1.StatusCause{\n                        {\n                            Type:    remotecommandconsts.ExitCodeCauseType,\n                            Message: fmt.Sprintf("%d", rc),\n                        },\n                    },\n                },\n                Message: fmt.Sprintf("command terminated with non-zero exit code: %v", exitErr),\n            }})\n        } else {\n            err = fmt.Errorf("error executing command in container: %v", err)\n            runtime.HandleError(err)\n            ctx.writeStatus(apierrors.NewInternalError(err))\n        }\n    } else {\n        ctx.writeStatus(&apierrors.StatusError{ErrStatus: metav1.Status{\n            Status: metav1.StatusSuccess,\n        }})\n    }\n}\n')),(0,o.kt)("p",null,"When the command execution is done in ",(0,o.kt)("inlineCode",{parentName:"p"},"executor.ExecInContainer"),", Kubelet will send a response to the connection by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"ctx.writeStatus(&apierrors.StatusError{ErrStatus: metav1.Status{\n    Status: ...,\n}})\n")),(0,o.kt)("p",null,"The status describes various situations to the client. For instance, if a non-zero exit code is returned by the command in the pod, the related information (e.g. exit code) is attached to the status reponse. "),(0,o.kt)("p",null,"But how exactly the command is executed in container? Following the references, we can find the implementation in ",(0,o.kt)("inlineCode",{parentName:"p"},"containerd/pkg/cri/sbserver/container_execsync.go"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (c *criService) execInternal(ctx context.Context, container containerd.Container, id string, opts execOptions) (*uint32, error)\n")),(0,o.kt)("p",null,"More details can be found in this function, but we will not continue to dig into it."))}d.isMDXComponent=!0}}]);