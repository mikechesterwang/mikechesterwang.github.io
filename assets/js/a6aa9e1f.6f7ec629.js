"use strict";(self.webpackChunkmikechesterwang_github_io=self.webpackChunkmikechesterwang_github_io||[]).push([[89],{8665:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(3366),l=a(7294),n=a(6010),i=a(2773),m=a(9960),s="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",d="sidebarItem_CF0Q",g="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD",p=a(5999);function h(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var b=["sidebar","toc","children"];function v(e){var t=e.sidebar,a=e.toc,m=e.children,s=(0,r.Z)(e,b),o=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),l=a(2263),n=a(8665),i=a(8561),m=a(5999),s=a(1750);function o(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(s.Z,{permalink:a,title:r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{permalink:l,title:r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}var c=a(3725);function d(e){var t=e.metadata,a=e.items,m=e.sidebar,s=(0,l.Z)().siteConfig.title,d=t.blogDescription,g=t.blogTitle,u="/"===t.permalink?s:g;return r.createElement(n.Z,{title:u,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:m},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t}))}},8561:function(e,t,a){a.d(t,{Z:function(){return P}});var r=a(7294),l=a(6010),n=a(3905),i=a(5999),m=a(9960),s=a(4996),o=a(3725),c=a(8780),d=a(4689),g=a(6753),u="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",b=a(8727),v="image_o0gy";function E(e){return e.href?r.createElement(m.Z,e):r.createElement(r.Fragment,null,e.children)}function f(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL,m=t.email,s=n||m&&"mailto:"+m||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(E,{href:s},r.createElement("img",{className:v,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var _="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function k(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?N:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?Z:_),key:t},r.createElement(f,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function P(e){var t,a,v,E=(v=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,s.C)().withBaseUrl,_=e.children,N=e.frontMatter,Z=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,I=void 0!==w&&w,y=P.date,R=P.formattedDate,A=P.permalink,C=P.tags,L=P.readingTime,M=P.title,x=P.editUrl,U=P.authors,B=null!=(t=Z.image)?t:N.image,D=!I&&T,F=C.length>0,O=I?"h1":"h2";return r.createElement("article",{className:I?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:u,itemProp:"headline"},I?M:r.createElement(m.Z,{itemProp:"url",to:A},M)),r.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},R),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",E(L))),r.createElement(k,{authors:U,assets:Z})),B&&r.createElement("meta",{itemProp:"image",content:f(B,{absolute:!0})}),r.createElement("div",{id:I?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:d.Z},_)),(F||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[h]=I,a))},F&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":D})},r.createElement(b.Z,{tags:C})),I&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:x})),D&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":F})},r.createElement(m.Z,{to:P.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:M})},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}}}]);