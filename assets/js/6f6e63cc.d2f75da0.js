"use strict";(self.webpackChunkmikechesterwang_github_io=self.webpackChunkmikechesterwang_github_io||[]).push([[2538],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Golang Web Starter",description:"Golang Web Starter",authors:["mike"],tags:["go"],hide_table_of_contents:!1},c=void 0,s={permalink:"/blog/go_web_started",source:"@site/blog/go_web_started.md",title:"Golang Web Starter",description:"Golang Web Starter",date:"2024-07-10T13:11:42.000Z",formattedDate:"July 10, 2024",tags:[{label:"go",permalink:"/blog/tags/go"}],readingTime:6.51,truncated:!1,authors:[{name:"Mike Wang",title:"Software Engineer",url:"https://github.com/mikechesterwang",imageURL:"https://avatars.githubusercontent.com/u/52522981",key:"mike"}],frontMatter:{title:"Golang Web Starter",description:"Golang Web Starter",authors:["mike"],tags:["go"],hide_table_of_contents:!1},prevItem:{title:"Go HTTP Reverse Proxy",permalink:"/blog/go_reverse_proxy"},nextItem:{title:"Index",permalink:"/blog/index"}},d={authorsImageUrls:[void 0]},p=[{value:"API Specification",id:"api-specification",level:2},{value:"Database access",id:"database-access",level:2},{value:"Dependency injection",id:"dependency-injection",level:2},{value:"Test Framework",id:"test-framework",level:2},{value:"Development environment",id:"development-environment",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Web development with Golang is a hot topic. There are many frameworks and tools to choose from. Essentially, there are several parts you need to set up at the very beginning:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"API specification")," "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Database access")," (no ORM, but with interfaces)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Dependency injection")," "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Test framework")," (high coverage, even with many external services)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Development environment")," (use dev container, instant code reload)")),(0,a.kt)("p",null,"I've been working on web development with Golang for a while. In this article, I will share my experience with you.\nThe code in this article can be found in here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xich-dev/go-starter"},"https://github.com/xich-dev/go-starter")," "),(0,a.kt)("h2",{id:"api-specification"},"API Specification"),(0,a.kt)("p",null,"API specification is the first thing you need to do. It's the contract between the frontend and the backend. OpenAPI has a good ecosystem. Popular programming languages have libraries to generate code from OpenAPI specification. In Golang, ",(0,a.kt)("inlineCode",{parentName:"p"},"oapi-codegen")," is a good choice. "),(0,a.kt)("p",null,"You can also define the schemas in the OpenAPI spec, and treat it as the single source of truth of the data model. In this design pattern, you use OpenAPI spec to design your business logic instead of defining the data model in the relational databases. Sounds like a bold move, but it's worth trying. Eventually, you will find that the data model in the relational database is just a subset of the data model in the OpenAPI spec. Since all components in your software, in the web development scenario, the frontend, the backend, both rely on the OpenAPI spec. "),(0,a.kt)("p",null,"In the following example, I first define the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignInParams")," in the OpenAPI spec. Then I can just use a single method ",(0,a.kt)("inlineCode",{parentName:"p"},"BodyParser")," to get the request body."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"SignInParams:\n  type: object\n  required: [phone_number, country_code, verification_code]\n  properties:\n    phone_number:\n      type: string\n    country_code:\n      type: string\n    verification_code:\n      type: string\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (h *Handler) PostSignIn(c *fiber.Ctx) error {\n    var req apigen.SignInParams\n    if err := c.BodyParser(&req); err != nil {\n        return c.Status(400).SendString("invalid request")\n    }\n    ......\n}\n')),(0,a.kt)("p",null,"I like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"fiber")," because it is concise and fast. Gin is also a good choice if you prefer a more mature framework.\nYou can generate code for the ",(0,a.kt)("inlineCode",{parentName:"p"},"security")," field with Gin, but not with fiber as fiber is just recently supported by the ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi-codegen")," community.\nI prefer to explicitly handle the security and parameter verification by myself with more powerful tools (I will talk about these in the future). So fiber works for me."),(0,a.kt)("h2",{id:"database-access"},"Database access"),(0,a.kt)("p",null,"Although ORM tools can save you some time, you still need to write SQL by yourself, but with interfaces in Golang. With ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlc"),", you can generate the interfaces and the SQL code from the SQL files. It can deal with the injection, while providing a more flexible and smooth development experience."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sqlc")," does a simple grammar check for you and generates the interfaces and the SQL code. You can use the interfaces to write the business logic, and the SQL code to write the database access code. Since the generated code are Golang interfaces, that means you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"gomock")," to mock the database access code in unit tests. No more Postgres in docker container for the unit test which is supposed to be a lightweight white box. "),(0,a.kt)("p",null,"Let's take a look at the code it generates:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type CreateUserParams struct {\n    CountryCode string\n    PhoneNumber string\n}\n\nfunc (q *Queries) CreateUser(ctx context.Context, arg CreateUserParams) (*User, error) {\n    row := q.db.QueryRow(ctx, createUser, arg.CountryCode, arg.PhoneNumber)\n    var i User\n    err := row.Scan(\n        &i.ID,\n        &i.Username,\n        &i.Password,\n        &i.Email,\n        &i.CreatedAt,\n        &i.UpdatedAt,\n        &i.CountryCode,\n        &i.PhoneNumber,\n    )\n    return &i, err\n}\n")),(0,a.kt)("p",null,"You can see that the ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateUser")," method is generated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateUserParams")," struct. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateUser")," method in the business logic. No db connection and no SQL (or SQL wrapper) in the business logic. "),(0,a.kt)("p",null,"Then you can make it an interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type ModelInterface interface {\n    querier.Querier\n    RunTransaction(ctx context.Context, f func(model ModelInterface) error) error\n    InTransaction() bool\n}\n")),(0,a.kt)("p",null,"This allows you to decouple the business logic from the database access code. And you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"gomock")," to mock the database access code in the unit tests. We will talk about it later in this article."),(0,a.kt)("h2",{id:"dependency-injection"},"Dependency injection"),(0,a.kt)("p",null,"If you are a big fan of mocking and testing, then you will have a lot of interfaces in your code. In that case, you need to inject the implementation of the interfaces into the business logic. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/wire"},"wire")," is a good choice. What you need to do is writing constructors for the implementations and the business logic, and then ",(0,a.kt)("inlineCode",{parentName:"p"},"wire")," will sort out the dependency graph, and generates a bulletproof initialization code for you."),(0,a.kt)("p",null,"For instance, you have the following components in your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func NewConfig() error\n\nfunc NewModel(cfg *config.Config) (model.ModelInterface, error)  \n\nfunc NewCloudService(cfg *config.Config, model model.ModelInterface) (service.CloudInterface, error)\n\nfunc NewTradeService(cfg *config.Config, model model.ModelInterface) (service.TradeInterface, error)\n\nfunc NewController(cloud service.CloudInterface, trade service.TradeInterface) (controller.ControllerInterface, error)\n\nfunc NewServer(cfg *config.Config, controller controller.ControllerInterface) *Server\n")),(0,a.kt)("p",null,"To initialize the ",(0,a.kt)("inlineCode",{parentName:"p"},"Server"),", you can just put the constructors in the ",(0,a.kt)("inlineCode",{parentName:"p"},"wire.go")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func InitializeServer() (*Server, error) {\n    wire.Build(\n        NewConfig,\n        NewModel,\n        NewCloudService,\n        NewTradeService,\n        NewController,\n        NewServer,\n    )\n    return &Server{}, nil\n}\n")),(0,a.kt)("p",null,"Then run ",(0,a.kt)("inlineCode",{parentName:"p"},"wire")," to generate the initialization code. No need to handle the complex dependency graph by yourself. A single initialize function is not difficult to write. But when the development goes on, the dependency graph is changing and the initialization code is getting more and more complex. You don't need to review and rewrite the dependency graph everytime you change it, ",(0,a.kt)("inlineCode",{parentName:"p"},"wire")," can save you a lot of time."),(0,a.kt)("h2",{id:"test-framework"},"Test Framework"),(0,a.kt)("p",null,"Just use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uber-go/mock"},"gomock"),". It's powerful and easy to use. That's where you can get the most benefit from the interfaces.\nRemember the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelInterface")," in the previous section? You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"gomock")," to mock the database access code in the unit tests. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestSignInService(t *testing.T) {\n    ctrl := gomock.NewController(t)\n    defer ctrl.Finish()\n\n    mockModel := model.NewMockModelInterface(ctrl)\n    mockModel.\n        EXPECT().\n        CreateUser(gomock.Any(), querier.CreateUserParams{\n            CountryCode: "+86",\n            PhoneNumber: "123456", \n        }).\n        Return(&querier.User{\n            ID: uuid.New(),\n        }, nil)\n    \n    service := NewSignInService(mockModel)\n    user, err := service.SignIn(context.Background(), "+86", "123456")\n    ...\n}\n')),(0,a.kt)("p",null,"Here, we are testing the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn")," method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignInService"),". We mock the ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateUser")," method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelInterface")," and return a fake user. Then we can test the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignIn")," method with the fake user without touching the database. ",(0,a.kt)("inlineCode",{parentName:"p"},"gomock")," can also help you to check if the method is called with the correct parameters."),(0,a.kt)("h2",{id:"development-environment"},"Development environment"),(0,a.kt)("p",null,"Docker-compose can help you to set up a development environment where all your WSL and Mac co-workers can work with. "),(0,a.kt)("p",null,"Let's have a Dockerfile for our dev container at first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM XXX\n\nWORKDIR /app\n\nCOPY --from=golang:1.22-alpine /usr/local/go/ /usr/local/go/\n \nENV PATH="/usr/local/go/bin:${PATH}"\n\nENTRYPOINT []\n\n')),(0,a.kt)("p",null,"You may wonder why using ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY --from=golang:1.22-alpine")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM golang:1.22-alpine"),". Well, you can do that. But if you want to use other image like ",(0,a.kt)("inlineCode",{parentName:"p"},"jrottenberg/ffmpeg:4.4-alpine")," while Golang is also needed, just use the ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY --from")," syntax to get the Golang binary. "),(0,a.kt)("p",null,'Since containers are nothing but a Linux process, it can be lightweight and fast. You can do "Hot Reload" with ',(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\nservices:\n  dev:\n    build: \n      dockerfile: ./Dockerfile.dev\n    ports:\n      - "8000:8000"\n    command:\n    - go\n    - run\n    - cmd/main.go\n    environment:\n      XICFG_PORT: 8000\n    volumes:\n      - ./:/app\n      - go-data:/root/go/pkg/mod\n      - go-build-data:/root/.cache/go-build\n  db: \n    image: "postgres:latest"\n    ports:\n      - "5432:5432"\n    environment:\n      POSTGRES_PASSWORD: postgres\n    volumes:\n      - db-data:/var/lib/postgresql/data\nvolumes:\n  db-data:\n  dev-go-data:\n  dev-go-build-data:\n')),(0,a.kt)("p",null,"Here, we mount the go cache to the docker volumes so that everytime the container is restarted, the go cache is still there. The development experience is just like developing on your local machine. You might also have some external services like Postgres, just put them in the docker-compose as well."),(0,a.kt)("p",null,"With this setup, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose restart dev")," to restart your dev container. I also bind the command to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + S"),", so that everytime I save the code,\nthe dev container will restart and the code will be recompiled. Since in web development, the states are stored in the database, so it is sort of a hot reload."))}m.isMDXComponent=!0}}]);