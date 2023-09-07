"use strict";(self.webpackChunkmikechesterwang_github_io=self.webpackChunkmikechesterwang_github_io||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/index","metadata":{"permalink":"/blog/index","source":"@site/blog/index.md","title":"Index","description":"Introduction to Mike Chester Wang","date":"2023-09-07T07:54:47.000Z","formattedDate":"September 7, 2023","tags":[{"label":"mcw","permalink":"/blog/tags/mcw"}],"readingTime":0.74,"truncated":false,"authors":[{"name":"Mike Wang","title":"Software Engineer","url":"https://github.com/mikechesterwang","imageURL":"https://avatars.githubusercontent.com/u/52522981","key":"mike"}],"frontMatter":{"title":"Index","description":"Introduction to Mike Chester Wang","authors":["mike"],"tags":["mcw"],"hide_table_of_contents":false},"nextItem":{"title":"A Glimpse of the Kubernetes Pod Exec Interface","permalink":"/blog/kubernetes_exec_code_view"}},"content":"**Education Background**: SUSTech (2017 - 2022), Financial Engineering, Computer Science\\n\\n**5+ years software development experience**\\n\\n    1. 2018.6 - 2021.2 Independent developer. Served more than 10 customers and developed 20+ projects (Spring Boot, PHP, MySQL, React Native, Docker). Lab Assistant. Developed a high performance dynamic distributed large graph partitioning algorithm. (C++, MPI)\\n\\n    2. 2021.2 - 2021.6 Internship at a fund house. Developed a complete quantitative trading strategy analysis system and daily work automation platform. (Python, React) \\n    \\n    3. 2021.6 - 2021.12 Founder of Xich-Tech, focusing on Law Tech. Served more than 10 law firms and 3000+ lawyers. (JavaScript, Chromium, Electron, React, Node.js, MQ)\\n\\n    4. 2021.12 - 2022.5 Internship at RisingWave Labs. Full-stack development.Developed a high performance DAG visualization framework. (JavaScript, React, AWS)\\n\\n    4. 2022.5 - Now Full-time software enginner at RisingWave Labs. Focusing on cloud architecture design and development. (Go, Kubernetes, RisingWave, Postgresql, AWS)\\n\\n**Keywords**: Full-stack, Cloud, DevOps, Business Solution."},{"id":"/kubernetes_exec_code_view","metadata":{"permalink":"/blog/kubernetes_exec_code_view","source":"@site/blog/kubernetes_exec_code_view.md","title":"A Glimpse of the Kubernetes Pod Exec Interface","description":"A Glimpse of the Kubernetes Pod Exec Interface","date":"2023-09-07T07:54:47.000Z","formattedDate":"September 7, 2023","tags":[{"label":"Kubernetes","permalink":"/blog/tags/kubernetes"}],"readingTime":5.7,"truncated":false,"authors":[{"name":"Mike Wang","title":"Software Engineer","url":"https://github.com/mikechesterwang","imageURL":"https://avatars.githubusercontent.com/u/52522981","key":"mike"}],"frontMatter":{"title":"A Glimpse of the Kubernetes Pod Exec Interface","description":"A Glimpse of the Kubernetes Pod Exec Interface","authors":["mike"],"tags":["Kubernetes"],"hide_table_of_contents":false},"prevItem":{"title":"Index","permalink":"/blog/index"},"nextItem":{"title":"A Glimpse of the Kubernetes Scheduler","permalink":"/blog/kubernetes_scheduler"}},"content":"## User-facing Interface\\nWith `go-client`, users can run command in a container using the following code\\n```go\\nvar (\\n    podName      = \\"pod-name\\"\\n    podNamespace = \\"pod-namespace\\"\\n    cmd          = []string{\\"echo\\", \\"1\\"}\\n)\\n\\n// build RESTful request\\nreq := t.kc.\\n\\tCoreV1().\\n\\tRESTClient().\\n\\tPost().\\n\\tResource(\\"pods\\").\\n\\tName(podName).\\n\\tNamespace(podNamespace).\\n\\tSubResource(\\"exec\\")\\nexecOption := &corev1.PodExecOptions{\\n\\tCommand: cmd,\\n\\tStdout:  true,\\n\\tStderr:  true,\\n    // we only care about not tty case in this example.\\n\\tTTY:     false,\\n    Stdin:   false,\\n}\\nreq.VersionedParams(execOption, scheme.ParameterCodec)\\n\\n// execute command in container using SPDYExecutor\\nexec, err := t.newSPDYExecutor(t.kc.GetRestCfg(), \\"POST\\", req.URL())\\nif err != nil {\\n\\treturn \\"\\", errors.Wrapf(err, \\"failed to build SPDY Executor: %v\\", option)\\n}\\n\\noutBuf := new(bytes.Buffer)\\nerrBuf := new(bytes.Buffer)\\n\\nerr = exec.StreamWithContext(ctx, remotecommand.StreamOptions{\\n\\tStdin:  nil,\\n\\tStdout: outBuf,\\n\\tStderr: errBuf,\\n})\\n\\nif err != nil {\\n\\treturn \\"\\", errors.Wrapf(err, \\"failed to execute command: %v, stderr: %s\\", option, errBuf.String())\\n}\\n```\\n\\nIn the above example, we use SPDYExecutor (note that SPDY is a protocol that is deprecated in favor of HTTP/2) to execute the command in the container. The `StreamWithContext` method will send a request to the kube-apiserver, and the kube-apiserver will forward the request to the kubelet. \\n\\nThe user interface is very clean. But we don\'t know if this method will return error when the command exuected in the container returns a non-zero exit code! So we\'d better to take a deeper look. Of course, you can also verify it by executing a command in a container that will return a non-zero exit code like `exit 1`.\\n\\nLet\'s look at the `StreamWithContext` method:\\n\\n```go\\nfunc (e *streamExecutor) StreamWithContext(ctx context.Context, options StreamOptions) error {\\n\\tconn, streamer, err := e.newConnectionAndStream(ctx, options)\\n\\tif err != nil {\\n\\t\\treturn err\\n\\t}\\n\\tdefer conn.Close()\\n\\n\\tpanicChan := make(chan any, 1)\\n\\terrorChan := make(chan error, 1)\\n\\tgo func() {\\n\\t\\tdefer func() {\\n\\t\\t\\tif p := recover(); p != nil {\\n\\t\\t\\t\\tpanicChan <- p\\n\\t\\t\\t}\\n\\t\\t}()\\n\\t\\terrorChan <- streamer.stream(conn)\\n\\t}()\\n\\n\\tselect {\\n\\tcase p := <-panicChan:\\n\\t\\tpanic(p)\\n\\tcase err := <-errorChan:\\n\\t\\treturn err\\n\\tcase <-ctx.Done():\\n\\t\\treturn ctx.Err()\\n\\t}\\n}\\n```\\n\\nThe logic is simple: if the error stream is not empty (also not EOF), it will be decoded and sent to the channel `errorChan`. Otherwise, nil will be sent to the channel.\\n\\nIn normal situation (no timeout and no panic), this method will be blocked by the channel `errorChan`, where the error or nil comes out.  \\n\\nFollowing the method `streamer.stream(conn)`, we can find where the channel is created in `k8s.io/client-go/tools/remotecommand/errorstream.go`:\\n```go\\nfunc watchErrorStream(errorStream io.Reader, d errorStreamDecoder) chan error {\\n\\terrorChan := make(chan error)\\n\\n\\tgo func() {\\n\\t\\tdefer runtime.HandleCrash()\\n\\n\\t\\tmessage, err := io.ReadAll(errorStream)\\n\\t\\tswitch {\\n\\t\\tcase err != nil && err != io.EOF:\\n\\t\\t\\terrorChan <- fmt.Errorf(\\"error reading from error stream: %s\\", err)\\n\\t\\tcase len(message) > 0:\\n\\t\\t\\terrorChan <- d.decode(message)\\n\\t\\tdefault:\\n\\t\\t\\terrorChan <- nil\\n\\t\\t}\\n\\t\\tclose(errorChan)\\n\\t}()\\n\\n\\treturn errorChan\\n}\\n```\\n\\nNote that when the error stream is not empty, it does not neccessary to be an error. Because `d.decode(message)` is used to parse the error instead of something like `json.Unmarshal`. In `errorDecoderV4`, you can find the following code segment:\\n```go\\nfunc (d *errorDecoderV4) decode(message []byte) error {\\n\\t...\\n\\tcase metav1.StatusSuccess:\\n\\t\\treturn nil\\n\\t...\\n```\\n\\nBut where is the `errorStream`? It is in `k8s.io/client-go/tools/remotecommand/v2.go`.\\n```go\\nfunc (p *streamProtocolV2) createStreams(conn streamCreator) error {\\n\\tvar err error\\n\\theaders := http.Header{}\\n\\t// set up error stream\\n\\theaders.Set(v1.StreamType, v1.StreamTypeError)\\n\\tp.errorStream, err = conn.CreateStream(headers)\\n\\tif err != nil {\\n\\t\\treturn err\\n\\t}\\n\\t// set up stdin stream\\n\\tif p.Stdin != nil {\\n\\t\\theaders.Set(v1.StreamType, v1.StreamTypeStdin)\\n\\t\\t...\\n\\t}\\n\\t// set up stdout stream\\n\\t...\\n\\t// set up stderr stream\\n\\t...\\n\\treturn nil\\n}\\n```\\nThis method uses `conn.CreateStream` to create a bidirection streaming channel. It uses the header to filter the stream type. For instance, if the header is `v1.StreamTypeStdin`, the stream will be used to send data to the container. So the client will open at most **four** streaming tunnel to the container. \\n\\nTo find out what kinds of stream frames will be sent from the server side, let\'s take a look at the Kubelet.\\n\\nThe Kubernetes client (e.g. client go, Kubectl) alwasy send requests to the API Server. In this scenario, API server will forward the request to Kubelet. Kubelet actually acts as a proxy to forward traffic between the client and the container.\\n\\n## Kubernetes Side\\nHow does Kubelet handle this request? Following the source code, we can quickly find the function `InstallDebuggingHandlers` in `pkg/kubelet/server/server.go`:\\n```go\\n// InstallDebuggingHandlers registers the HTTP request patterns that serve logs or run commands/containers\\nfunc (s *Server) InstallDebuggingHandlers() {\\n    ...\\n    ws = new(restful.WebService)\\n    ws.\\n        Path(\\"/exec\\")\\n    ws.Route(ws.GET(\\"/{podNamespace}/{podID}/{containerName}\\").\\n        To(s.getExec).\\n        Operation(\\"getExec\\"))\\n    ...\\n}\\n```\\n*Accoriding the function name, we know `exec` is actually a debugging feature in Kubelet. More debug features can be found in `InstallDebuggingDisabledHandlers`*\\n\\n```go\\nfunc (s *Server) getExec(request *restful.Request, response *restful.Response) {\\n\\t...\\n\\turl, err := s.host.GetExec(podFullName, params.podUID, params.containerName, params.cmd, *streamOpts)\\n\\tif err != nil {\\n\\t\\tstreaming.WriteError(err, response.ResponseWriter)\\n\\t\\treturn\\n\\t}\\n\\tproxyStream(response.ResponseWriter, request.Request, url)\\n    ...\\n}\\n\\n```\\n`getExec` will first call `kubeGenericRuntimeManager.GetExec`, which will send an internal gRPC request to the remote runtime service to get a URL. Then `proxyStream` will use this URL to connect to the streaming endpoint.\\n\\n## Container Runtime Side\\nThe remote runtime service is the container runtime, for instance, in `containerd/pkg/cri/streaming` of the `containerd` repo, it exposes the following streaming interfaces:\\n```go\\ntype Server interface {\\n\\thttp.Handler\\n    ...\\n\\tGetExec(*runtimeapi.ExecRequest) (*runtimeapi.ExecResponse, error)\\n\\tGetAttach(req *runtimeapi.AttachRequest) (*runtimeapi.AttachResponse, error)\\n\\tGetPortForward(*runtimeapi.PortForwardRequest) (*runtimeapi.PortForwardResponse, error)\\n    ...\\n}\\n```\\n\\nIn its source code, we can find the corresponding function for handing the command execution request in `containerd/pkg/cri/streaming/remotecommand/exec.go`:\\n```go\\nfunc ServeExec(w http.ResponseWriter, req *http.Request, executor Executor, podName string, uid types.UID, container string, cmd []string, streamOpts *Options, idleTimeout, streamCreationTimeout time.Duration, supportedProtocols []string) {\\n\\tctx, ok := createStreams(req, w, streamOpts, supportedProtocols, idleTimeout, streamCreationTimeout)\\n\\tif !ok {\\n\\t\\t// error is handled by createStreams\\n\\t\\treturn\\n\\t}\\n\\tdefer ctx.conn.Close()\\n\\n\\terr := executor.ExecInContainer(podName, uid, container, cmd, ctx.stdinStream, ctx.stdoutStream, ctx.stderrStream, ctx.tty, ctx.resizeChan, 0)\\n\\tif err != nil {\\n\\t\\tif exitErr, ok := err.(utilexec.ExitError); ok && exitErr.Exited() {\\n\\t\\t\\trc := exitErr.ExitStatus()\\n\\t\\t\\tctx.writeStatus(&apierrors.StatusError{ErrStatus: metav1.Status{\\n\\t\\t\\t\\tStatus: metav1.StatusFailure,\\n\\t\\t\\t\\tReason: remotecommandconsts.NonZeroExitCodeReason,\\n\\t\\t\\t\\tDetails: &metav1.StatusDetails{\\n\\t\\t\\t\\t\\tCauses: []metav1.StatusCause{\\n\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\tType:    remotecommandconsts.ExitCodeCauseType,\\n\\t\\t\\t\\t\\t\\t\\tMessage: fmt.Sprintf(\\"%d\\", rc),\\n\\t\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t},\\n\\t\\t\\t\\tMessage: fmt.Sprintf(\\"command terminated with non-zero exit code: %v\\", exitErr),\\n\\t\\t\\t}})\\n\\t\\t} else {\\n\\t\\t\\terr = fmt.Errorf(\\"error executing command in container: %v\\", err)\\n\\t\\t\\truntime.HandleError(err)\\n\\t\\t\\tctx.writeStatus(apierrors.NewInternalError(err))\\n\\t\\t}\\n\\t} else {\\n\\t\\tctx.writeStatus(&apierrors.StatusError{ErrStatus: metav1.Status{\\n\\t\\t\\tStatus: metav1.StatusSuccess,\\n\\t\\t}})\\n\\t}\\n}\\n```\\n\\nWhen the command execution is done in `executor.ExecInContainer`, Kubelet will send a response to the connection by:\\n```go\\nctx.writeStatus(&apierrors.StatusError{ErrStatus: metav1.Status{\\n\\tStatus: ...,\\n}})\\n```\\nThe status describes various situations to the client. For instance, if a non-zero exit code is returned by the command in the pod, the related information (e.g. exit code) is attached to the status reponse. \\n\\nBut how exactly the command is executed in container? Following the references, we can find the implementation in `containerd/pkg/cri/sbserver/container_execsync.go`:\\n```go\\nfunc (c *criService) execInternal(ctx context.Context, container containerd.Container, id string, opts execOptions) (*uint32, error)\\n```\\nMore details can be found in this function, but we will not continue to dig into it."},{"id":"/kubernetes_scheduler","metadata":{"permalink":"/blog/kubernetes_scheduler","source":"@site/blog/kubernetes_scheduler.md","title":"A Glimpse of the Kubernetes Scheduler","description":"A Glimpse of the Kubernetes Scheduler","date":"2023-09-07T07:54:47.000Z","formattedDate":"September 7, 2023","tags":[{"label":"Kubernetes","permalink":"/blog/tags/kubernetes"}],"readingTime":1.41,"truncated":false,"authors":[{"name":"Mike Wang","title":"Software Engineer","url":"https://github.com/mikechesterwang","imageURL":"https://avatars.githubusercontent.com/u/52522981","key":"mike"}],"frontMatter":{"title":"A Glimpse of the Kubernetes Scheduler","description":"A Glimpse of the Kubernetes Scheduler","authors":["mike"],"tags":["Kubernetes"],"hide_table_of_contents":false},"prevItem":{"title":"A Glimpse of the Kubernetes Pod Exec Interface","permalink":"/blog/kubernetes_exec_code_view"}},"content":"## Scheduler\\n`kube-scheduler` is the key component to schedule new pods to existing nodes. It uses \\"informer\\" to listen \\nfor new pod that it is responsible for and new node.\\n\\nWhen there is a new pod, the pod will be added to the scheduling queue. `ScheduleOne` is called in every iteration, \\nit is responsible to try to schedule one of the pod in the scheduling queue to nodes in the \\"node cache\\". \\n\\nWhen there is a new node, the node will be added to the \\"node cache\\", all unschedulable pods will immdiately be \\ntraversed to use `scheduler.AdmissionCheck` to know if it can be scheduled to this new node. \\n\\n## Autoscaler\\nCluster autoscaler is responsible for scaling up/down the cluster. Note that it is coupled with the cloud provider \\nsince only the cloud provider can provide API to manipulate your nodes (e.g. ec2 instances).\\n\\nAutoscaler lists all unschedulable pods in every iteration. When scaling up is needed, it will call `ComputeExpansionOption` \\nto get feasible plans for scaling up. This function leverage estimator and traverse the valid node groups to get the result.\\n`binpacking_estimator` uses the simulator to simulate the schenario that the node was added to the cluster. This \\"scenario\\" \\nis described as `ClusterSnapshot`. The estimator will use `CheckPredicates` to know if the pods are okay \\nto be placed in this node. `CheckPredicates` will further call `scheduler.AdmissionCheck` to do the job.\\n\\nNote that the valid node groups is directly fetched by `(*ScaleUpOrchestrator).autoscalingContext.CloudProvider.NodeGroups()`. \\n`(*ScaleUpOrchestrator).autoscalingContext.CloudProvider` is initalized by `buildCloudProvider` in \\n`cloudprovider/builder/builder_aws.go`.\\n\\nIn AWS autoscaler, it retrives all cached ASGs (autoscaling groups), which implement the `NodeGroup` interface. The ASGs are\\ncached in `Refresh` function in every iteration. The ASGs are fetched and filterd by setting `--node-group-auto-discovery=asg:tag=xxx`."}]}')}}]);