(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,t,n){"use strict";n.r(t);n(20),n(232),n(234),n(37);var a=n(8),i=n.n(a),r=n(0),o=n.n(r),c=n(57),l=n(179),s=n.n(l),h=(n(239),n(165)),d=n(159),u=n(171),g=(n(240),"undefined"!=typeof window?n(241):void 0),m=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){new g({repo:"kaier33.github.io",admin:["Kaier33"],owner:"Kaier33",clientID:"bd77035ea7c83480fe99",clientSecret:"a81e39cc9e9f14288123a162a38828a78f1a78cd",pagerDirection:"first",distractionFreeMode:!0,id:location.pathname}).render("gitalk-container")},n.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"gitalk-container"}))},t}(o.a.Component),p=n(164),f=n(155),A=n(242),b=function(e){return A.supportedLanguages[e].replace(/ /g," ")};n.d(t,"pageQuery",function(){return k});var v=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.translations;e.lang,e.languageLink,e.editUrl,t.filter(function(e){return"ru"!==e}),t.indexOf("ru");return""},t}(o.a.Component),y=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=s()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,i=a.previous,r=a.next,l=a.slug,g=a.translations,A=a.translatedLinks,y=e.fields.langKey,k=e.html;A.forEach(function(e){var t="/"+y+e;k=k.replace(new RegExp('"'+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"',"g"),'"'+t+'"')}),(g=g.slice()).sort(function(e,t){return b(e)<b(t)?-1:1}),function(e){switch(e){case"ru":case"bg":n.e(0).then(n.t.bind(null,243,7)),n.e(0).then(n.t.bind(null,244,7));break;case"uk":n.e(0).then(n.t.bind(null,243,7)),n.e(0).then(n.t.bind(null,244,7)),n.e(0).then(n.t.bind(null,245,7)),n.e(0).then(n.t.bind(null,246,7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":n.e(0).then(n.t.bind(null,245,7)),n.e(0).then(n.t.bind(null,246,7));break;case"vi":n.e(0).then(n.t.bind(null,247,7)),n.e(0).then(n.t.bind(null,248,7));break;case"fa":n.e(0).then(n.t.bind(null,249,7));break;case"ar":n.e(0).then(n.t.bind(null,250,7))}}(y);var E=function(e,t){var n=e.replace(t+"/","");return function(e){return"en"===e?n:""+e+n}}(l,y),S=E("zh-hans"),C="https://github.com/Kaier_Chou/KaierChou.github.io/edit/master/src/pages/"+S.slice(1,S.length-1)+"/index"+("zh-hans"===y?"":"."+y)+".md";return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(u.a,{lang:y,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),o.a.createElement("main",null,o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-.8)})},Object(p.a)(e.frontmatter.date,y)," • "+Object(p.b)(e.timeToRead)),g.length>0&&o.a.createElement(v,{translations:g,editUrl:C,languageLink:E,lang:y})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:k}})),o.a.createElement(m,null)),o.a.createElement("aside",null,o.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif'}}),o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(f.a)(.25)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"Kaier33")),o.a.createElement(h.a,null),o.a.createElement("nav",null,o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,i&&o.a.createElement(c.Link,{to:i.fields.slug,rel:"prev",style:{marginRight:20}},"← ",i.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(c.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))))},t}(o.a.Component),k=(t.default=y,"1123297852")},155:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});n(166),n(167);var a=n(168),i=n.n(a),r=n(169),o=n.n(r);o.a.overrideThemeStyles=function(){return{a:{color:"var(--textLink)"},hr:{background:"var(--hr)"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},'a.anchor svg[aria-hidden="true"]':{stroke:"var(--textLink)"},"p code":{fontSize:"1rem"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},"li code":{fontSize:"1rem"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8"},"blockquote.translation":{fontSize:"1em"}}},delete o.a.googleFonts;var c=new i.a(o.a);var l=c.rhythm,s=c.scale},157:function(e,t){e.exports="data:image/png;base64,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"},158:function(e,t){e.exports="data:image/png;base64,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"},159:function(e,t,n){"use strict";n(20);var a=n(8),i=n.n(a),r=n(0),o=n.n(r),c=n(57),l=n(77),s=n.n(l),h=n(36),d=n.n(h);n(170);function u(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}var g=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=n.handleClick.bind(d()(n)),n.handleTouchStart=n.handleTouchStart.bind(d()(n)),n.handleTouchMove=n.handleTouchMove.bind(d()(n)),n.handleTouchEnd=n.handleTouchEnd.bind(d()(n)),n.handleTouchCancel=n.handleTouchCancel.bind(d()(n)),n.handleFocus=n.handleFocus.bind(d()(n)),n.handleBlur=n.handleBlur.bind(d()(n)),n.previouslyChecked=!(!t.checked&&!t.defaultChecked),n.state={checked:!(!t.checked&&!t.defaultChecked),hasFocus:!1},n}i()(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){"checked"in e&&(this.setState({checked:!!e.checked}),this.previouslyChecked=!!e.checked)},n.componentDidMount=function(){window.__LightFlag=this.input.checked,window.__LightFlag?document.getElementById("mask")&&(document.getElementById("mask").style.background="transparent"):document.getElementById("mask")&&(document.getElementById("mask").style.background="linear-gradient(-180deg, rgba(255, 255, 255, .1) 0, #fff 100%)")},n.handleClick=function(e){var t=this.input;if(this.previouslyChecked=t.checked,e.target!==t&&!this.moved)return e.preventDefault(),t.checked&&document.getElementById("mask")?document.getElementById("mask").style.background="linear-gradient(-180deg, rgba(255, 255, 255, .1) 0, #fff 100%)":!t.checked&&document.getElementById("mask")&&(document.getElementById("mask").style.background="transparent"),t.focus(),void t.click();this.setState({checked:t.checked})},n.handleTouchStart=function(e){this.startX=u(e).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},n.handleTouchMove=function(e){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var t=u(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t):!this.state.checked&&t-15>this.startX&&(this.setState({checked:!0}),this.startX=t)}},n.handleTouchEnd=function(e){if(this.touchMoved){var t=this.input;e.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&t.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},n.handleTouchCancel=function(e){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},n.handleFocus=function(e){var t=this.props.onFocus;t&&t(e),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},n.handleBlur=function(e){var t=this.props.onBlur;t&&t(e),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},n.getIcon=function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null},n.render=function(){var e=this,t=this.props,n=t.className,a=(t.icons,s()(t,["className","icons"])),i="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(n?" "+n:"");return o.a.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},o.a.createElement("div",{className:"react-toggle-track"},o.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.a.createElement("div",{className:"react-toggle-thumb"}),o.a.createElement("input",Object.assign({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},t}(r.PureComponent),m=n(156),p=n.n(m),f=n(155),A=n(157),b=n.n(A),v=n(158),y=n.n(v),k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={theme:null},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;(window.navigator.userAgent.indexOf("MSIE")>=1||window.navigator.userAgent.indexOf("Edge")>-1)&&(document.body.style.cursor="auto"),this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})};var t=document.title;document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState?document.title="(づ￣ 3￣)づ救救孩纸吧":document.title=t})},n.renderHeader=function(){var e=this.props,t=e.location,n=e.title;return"/"===t.pathname?o.a.createElement("h1",{style:Object.assign({},Object(f.b)(.75),{marginBottom:0,marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textTitle)"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:0,height:42,lineHeight:"2.625rem"}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"rgb(255, 167, 196)"},to:"/"},n))},n.render=function(){var e=this.props.children;return o.a.createElement("div",{style:{color:"var(--textNormal)",background:"var(--bg)",transition:"color 0.2s ease-out, background 0.2s ease-out",minHeight:"100vh"}},o.a.createElement(p.a,{meta:[{name:"theme-color",content:"light"===this.state.theme?"#ffa8c5":"#282c35"}]}),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(f.a)(24),padding:"2.625rem "+Object(f.a)(.75)}},o.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2.625rem"}},this.renderHeader(),null!==this.state.theme?o.a.createElement(g,{icons:{checked:o.a.createElement("img",{src:y.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}}),unchecked:o.a.createElement("img",{src:b.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}})},checked:"dark"===this.state.theme,onChange:function(e){return window.__setPreferredTheme(e.target.checked?"dark":"light")}}):o.a.createElement("div",{style:{height:"24px"}})),e))},t}(o.a.Component);t.a=k},164:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});n(163);function a(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function i(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,a)}},165:function(e,t,n){"use strict";var a=n(8),i=n.n(a),r=n(0),o=n.n(r),c=(n(177),n(155)),l=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2)}},o.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/24623866?s=460&v=4",alt:"avatar",className:"avatar",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2),borderRadius:"50%"}}),o.a.createElement("p",{style:{maxWidth:310}},"Personal blog by ",o.a.createElement("a",{href:"https://github.com/Kaier33"},"Kaier"),"."," ",o.a.createElement("br",null),"Make a little little progress every day."))},t}(o.a.Component);t.a=l},171:function(e,t,n){"use strict";n(20);var a=n(172),i=n(0),r=n.n(i),o=n(156),c=n.n(o),l=n(1),s=n.n(l),h=n(57),d="3036156164";function u(e){var t=e.meta,n=e.image,i=e.title,o=e.description,l=e.slug,s=e.lang,u=void 0===s?"en":s;return r.a.createElement(h.StaticQuery,{query:d,render:function(e){var a=e.site.siteMetadata,s=o||a.description,h=(n&&a.siteUrl,""+a.siteUrl+l);return r.a.createElement(c.a,Object.assign({htmlAttributes:{lang:u}},i?{titleTemplate:"%s — "+a.title,title:i}:{title:a.title+" — A blog by KaierChou"},{meta:[{name:"description",content:s},{property:"og:url",content:h},{property:"og:title",content:i||a.title},{property:"og:description",content:s}].concat(t)}))},data:a})}u.defaultProps={meta:[],title:"",slug:""},u.propTypes={description:s.a.string,image:s.a.string,meta:s.a.array,slug:s.a.string,title:s.a.string.isRequired},t.a=u},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Kaier33",author:"KaierChou",description:"Personal blog by KaierChou.",siteUrl:"https://kaierchou.github.io"}}}}},242:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-5ec7ec08304e7f0315bd.js.map