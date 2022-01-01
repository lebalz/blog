"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[103],{8561:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),l=a(6010),r=a(3905),i=a(5999),o=a(9960),s=a(4996),m=a(3616),c=a(7707),d=a(6753),u="blogPostTitle_d4p0",g="blogPostData_-Im+",p="blogPostDetailsFull_xD8n",v=a(62),h="image_9q7L";var b=function(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:h,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},E="authorCol_8c0z";function _(e){var t=e.authors,a=e.assets;return 0===t.length?null:n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return n.createElement("div",{className:(0,l.Z)("col col--6",E),key:t},n.createElement(b,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}var f=function(e){var t,a,h,b,E=(h=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return h(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,s.C)().withBaseUrl,N=e.children,k=e.frontMatter,Z=e.assets,P=e.metadata,C=e.truncated,L=e.isBlogPostPage,w=void 0!==L&&L,x=P.date,y=P.formattedDate,T=P.permalink,H=P.tags,I=P.readingTime,M=P.title,U=P.editUrl,A=P.authors,B=null!=(t=Z.image)?t:k.image,O=!w&&C,R=H.length>0;return n.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(b=w?"h1":"h2",n.createElement("header",null,n.createElement(b,{className:u,itemProp:"headline"},w?M:n.createElement(o.Z,{itemProp:"url",to:T},M)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:x,itemProp:"datePublished"},y),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",E(I))),n.createElement(_,{authors:A,assets:Z}))),B&&n.createElement("meta",{itemProp:"image",content:f(B,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:c.Z},N)),(R||C)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=w,a))},R&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":O})},n.createElement(v.Z,{tags:H})),w&&U&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:U})),O&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":R})},n.createElement(o.Z,{to:P.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=a(1217),r=a(8665),i=a(8561),o=a(5999),s=a(9960);var m=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(3616),d=a(1575);var u=function(e){var t,a=e.content,o=e.sidebar,s=a.frontMatter,u=a.assets,g=a.metadata,p=g.title,v=g.description,h=g.nextItem,b=g.prevItem,E=g.date,_=g.tags,f=g.authors,N=s.hide_table_of_contents,k=s.keywords,Z=s.toc_min_heading_level,P=s.toc_max_heading_level,C=null!=(t=u.image)?t:s.image;return n.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:o,toc:!N&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:p,description:v,keywords:k,image:C},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:E}),f.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:f.map((function(e){return e.url})).filter(Boolean).join(",")}),_.length>0&&n.createElement("meta",{property:"article:tag",content:_.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:u,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(h||b)&&n.createElement(m,{nextItem:h,prevItem:b}))}},1575:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),o=a(5002),s="tableOfContents_vrFS",m=["className"];var c=function(e){var t=e.className,a=(0,l.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),l=a(3366),r=a(7294),i=a(3616),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,p=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,l.Z)(e,o),b=(0,i.LU)(),E=null!=p?p:b.tableOfContents.minHeadingLevel,_=null!=v?v:b.tableOfContents.maxHeadingLevel,f=(0,i.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:_}),N=(0,r.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:_}}),[d,g,E,_]);return(0,i.Si)(N),r.createElement(s,(0,n.Z)({toc:f,className:m,linkClassName:d},h))}}}]);