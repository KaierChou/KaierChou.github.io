(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,e,n){"use strict";n.r(e);var a=n(8),i=n.n(a),r=n(57),o=n(163),c=n(165),s=n(159),l=n(0),h=n.n(l),d=n(172),u=n(180),m=n.n(u),g=n(155),A=(n(164),function(){function t(){this.setting={width:screen.width,height:screen.height,canvas:null,content:null,maxStar:40,newStar:8,starArr:[],number:40,timer:null},this.starColor=["#0d4b74","#6691ab","#213a55","#bed0cb","#7f486b"],this.animate=null}var e=t.prototype;return e.init=function(t,e,n){var a=this.setting;a.starArr,a.width,a.height;this.isMobile()&&(this.setting.maxStar=10,this.setting.number=10,this.setting.newStar=6),this.setting.canvas=t,this.setting.canvas.setAttribute("width",e),this.setting.canvas.setAttribute("height",n),this.setting.content=this.setting.canvas.getContext("2d"),this.setting.content.clearRect(0,0,e,n),this.star()},e.updateStar=function(){var t=this.setting,e=t.starArr,n=t.width,a=t.height,i=t.content;i.clearRect(0,0,n,a),i.save();for(var r=0;r<e.length;r++){var o=.35*e[r].scale;if(e[r].x+=Math.tan(e[r].deg*Math.PI/180)*o/2,e[r].y=e[r].y+o,e[r].x<0||e[r].x>n||e[r].y>a)e.splice(r--,1);else{i.beginPath();for(var c=0;c<5;c++)i.lineTo(10*Math.cos((18+72*c)/180*Math.PI)+e[r].x,10*-Math.sin((18+72*c)/180*Math.PI)+e[r].y),i.lineTo(5*Math.cos((54+72*c)/180*Math.PI)+e[r].x,5*-Math.sin((54+72*c)/180*Math.PI)+e[r].y);i.closePath(),i.globalAlpha=e[r].alpha,i.shadowOffsetX=2,i.shadowOffsetY=2,i.shadowBlur=4,i.shadowColor="rgba(0, 0, 0, 0.15)",i.fillStyle=this.starColor[e[r].c],i.fill()}}i.restore(),this.animate=requestAnimationFrame(this.updateStar.bind(this))},e.createNewStar=function(){var t=this.setting,e=t.starArr,n=t.maxStar,a=t.newStar,i=t.width;this.setting.timer=setInterval(function(){if(e.length<n)for(var t=0;t<a;t++){var r=Math.random()<.5?-1:1;e.push({x:Math.random()*i,y:0,c:Math.floor(6*Math.random()),deg:6*Math.random()*r,scale:3+3*Math.random(),alpha:.5+.1*Math.random()})}},200*Math.random()+500)},e.star=function(){for(var t=this.setting,e=t.number,n=t.width,a=t.height,i=t.starArr,r=0;r<e;r++){var o=Math.random()<.5?-1:1;i.push({x:Math.random()*n,y:Math.random()*a,c:Math.floor(6*Math.random()),deg:6*Math.random()*o,scale:3+3*Math.random(),alpha:.5+.1*Math.random()})}this.updateStar(),this.createNewStar()},e.reset=function(){clearInterval(this.setting.timer),this.setting.starArr=[],cancelAnimationFrame(this.animate)},e.isMobile=function(){return/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)},t}());n.d(e,"pageQuery",function(){return f});var v=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).state={star:null,timer:null,canvasDom:null,maskDom:null},e.handleResize=function(){clearTimeout(e.timer),e.timer=setTimeout(function(){var t=document.documentElement.clientWidth,n=document.documentElement.clientHeight/2+50;e.state.star.reset(),e.state.star.init(e.state.canvasDom,t,n),e.state.maskDom.style.height=n+"px",e.state.maskDom.style.width=t+"px"},500)},e}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this,e=document.documentElement.clientWidth,n=document.documentElement.clientHeight/2+50,a=document.getElementById("___gatsby"),i=document.getElementById("starlight");i||((i=document.createElement("canvas")).id="starlight",document.body.insertBefore(i,a));var r=document.getElementById("mask");r||((r=document.createElement("div")).id="mask",r.style.height=n+"px",document.body.insertBefore(r,a)),a.children[0].children[0].style.background="transparent";var o=new A;this.setState({canvasDom:i,star:o,maskDom:r},function(){o.init(i,e,n),t.isMobile()||window.addEventListener("resize",t.handleResize.bind(t))})},n.componentWillUnmount=function(){this.isMobile||window.removeEventListener("resize",this.handleResize.bind(this))},n.isMobile=function(){return/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)},n.render=function(){var t=m()(this,"props.data.site.siteMetadata.title"),e=this.props.pageContext.langKey,n=m()(this,"props.data.allMarkdownRemark.edges");return h.a.createElement(l.Fragment,null,h.a.createElement(s.a,{location:this.props.location,title:t},h.a.createElement(d.a,null),h.a.createElement("aside",null,h.a.createElement(c.a,null)),h.a.createElement("main",null,n.map(function(t){var n=t.node,a=m()(n,"frontmatter.title")||n.fields.slug;return h.a.createElement("article",{key:n.fields.slug},h.a.createElement("header",null,h.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(g.a)(1),marginBottom:Object(g.a)(.25)}},h.a.createElement(r.Link,{style:{boxShadow:"none"},to:n.fields.slug,rel:"bookmark"},a)),h.a.createElement("small",null,Object(o.a)(n.frontmatter.date,e)," • "+Object(o.b)(n.timeToRead))),h.a.createElement("p",{dangerouslySetInnerHTML:{__html:n.frontmatter.spoiler}}))}))))},e}(h.a.Component),f=(e.default=v,"3710597169")},155:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return l});n(166),n(167);var a=n(168),i=n.n(a),r=n(169),o=n.n(r);o.a.overrideThemeStyles=function(){return{a:{color:"var(--textLink)"},hr:{background:"var(--hr)"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},'a.anchor svg[aria-hidden="true"]':{stroke:"var(--textLink)"},"p code":{fontSize:"1rem"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},"li code":{fontSize:"1rem"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8"},"blockquote.translation":{fontSize:"1em"}}},delete o.a.googleFonts;var c=new i.a(o.a);var s=c.rhythm,l=c.scale},157:function(t,e){t.exports="data:image/png;base64,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"},158:function(t,e){t.exports="data:image/png;base64,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"},159:function(t,e,n){"use strict";n(20);var a=n(8),i=n.n(a),r=n(0),o=n.n(r),c=n(57),s=n(77),l=n.n(s),h=n(36),d=n.n(h);n(171);function u(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}var a=t.pageX;if(void 0!==a)return{x:a,y:t.pageY}}return{x:0,y:0}}var m=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleClick=n.handleClick.bind(d()(n)),n.handleTouchStart=n.handleTouchStart.bind(d()(n)),n.handleTouchMove=n.handleTouchMove.bind(d()(n)),n.handleTouchEnd=n.handleTouchEnd.bind(d()(n)),n.handleTouchCancel=n.handleTouchCancel.bind(d()(n)),n.handleFocus=n.handleFocus.bind(d()(n)),n.handleBlur=n.handleBlur.bind(d()(n)),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}i()(e,t);var n=e.prototype;return n.componentWillReceiveProps=function(t){"checked"in t&&(this.setState({checked:!!t.checked}),this.previouslyChecked=!!t.checked)},n.componentDidMount=function(){window.__LightFlag=this.input.checked,window.__LightFlag?document.getElementById("mask")&&(document.getElementById("mask").style.background="transparent"):document.getElementById("mask")&&(document.getElementById("mask").style.background="linear-gradient(-180deg, rgba(255, 255, 255, .1) 0, #fff 100%)")},n.handleClick=function(t){var e=this.input;if(this.previouslyChecked=e.checked,t.target!==e&&!this.moved)return t.preventDefault(),e.checked&&document.getElementById("mask")?document.getElementById("mask").style.background="linear-gradient(-180deg, rgba(255, 255, 255, .1) 0, #fff 100%)":!e.checked&&document.getElementById("mask")&&(document.getElementById("mask").style.background="transparent"),e.focus(),void e.click();this.setState({checked:e.checked})},n.handleTouchStart=function(t){this.startX=u(t).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},n.handleTouchMove=function(t){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var e=u(t).x;this.state.checked&&e+15<this.startX?(this.setState({checked:!1}),this.startX=e):!this.state.checked&&e-15>this.startX&&(this.setState({checked:!0}),this.startX=e)}},n.handleTouchEnd=function(t){if(this.touchMoved){var e=this.input;t.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&e.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},n.handleTouchCancel=function(t){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},n.handleFocus=function(t){var e=this.props.onFocus;e&&e(t),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},n.handleBlur=function(t){var e=this.props.onBlur;e&&e(t),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},n.getIcon=function(t){var n=this.props.icons;return n?void 0===n[t]?e.defaultProps.icons[t]:n[t]:null},n.render=function(){var t=this,e=this.props,n=e.className,a=(e.icons,l()(e,["className","icons"])),i="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(n?" "+n:"");return o.a.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},o.a.createElement("div",{className:"react-toggle-track"},o.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.a.createElement("div",{className:"react-toggle-thumb"}),o.a.createElement("input",Object.assign({},a,{ref:function(e){t.input=e},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},e}(r.PureComponent),g=n(156),A=n.n(g),v=n(155),f=n(157),p=n.n(f),b=n(158),y=n.n(b),k=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).state={theme:null},e}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;(window.navigator.userAgent.indexOf("MSIE")>=1||window.navigator.userAgent.indexOf("Edge")>-1)&&(document.body.style.cursor="auto"),this.setState({theme:window.__theme}),window.__onThemeChange=function(){t.setState({theme:window.__theme})};var e=document.title;document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState?document.title="(づ￣ 3￣)づ救救孩纸吧":document.title=e})},n.renderHeader=function(){var t=this.props,e=t.location,n=t.title;return"/"===e.pathname?o.a.createElement("h1",{style:Object.assign({},Object(v.b)(.75),{marginBottom:0,marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textTitle)"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:0,height:42,lineHeight:"2.625rem"}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"rgb(255, 167, 196)"},to:"/"},n))},n.render=function(){var t=this.props.children;return o.a.createElement("div",{style:{color:"var(--textNormal)",background:"var(--bg)",transition:"color 0.2s ease-out, background 0.2s ease-out",minHeight:"100vh"}},o.a.createElement(A.a,{meta:[{name:"theme-color",content:"light"===this.state.theme?"#ffa8c5":"#282c35"}]}),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(v.a)(24),padding:"2.625rem "+Object(v.a)(.75)}},o.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2.625rem"}},this.renderHeader(),null!==this.state.theme?o.a.createElement(m,{icons:{checked:o.a.createElement("img",{src:y.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}}),unchecked:o.a.createElement("img",{src:p.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}})},checked:"dark"===this.state.theme,onChange:function(t){return window.__setPreferredTheme(t.target.checked?"dark":"light")}}):o.a.createElement("div",{style:{height:"24px"}})),t))},e}(o.a.Component);e.a=k},163:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i});n(164);function a(t){var e=Math.round(t/5);return e>5?new Array(Math.round(e/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(e||1).fill("☕️").join("")+" "+t+" min read"}function i(t,e){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var a=[e,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=t).toLocaleDateString.apply(n,a)}},165:function(t,e,n){"use strict";var a=n(8),i=n.n(a),r=n(0),o=n.n(r),c=(n(178),n(155)),s=n(170),l=n.n(s),h=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2)}},o.a.createElement("img",{src:l.a,alt:"avatar",className:"avatar",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2),borderRadius:"50%"}}),o.a.createElement("p",{style:{maxWidth:310}},"Personal blog by ",o.a.createElement("a",{href:"https://github.com/Kaier33"},"Kaier"),"."," ",o.a.createElement("br",null),"Make a little little bit progress every day."))},e}(o.a.Component);e.a=h},170:function(t,e,n){t.exports=n.p+"static/tifa-5c42b32a2ad32133f6bdfc566de8737f.png"},172:function(t,e,n){"use strict";n(20);var a=n(173),i=n(0),r=n.n(i),o=n(156),c=n.n(o),s=n(1),l=n.n(s),h=n(57),d="3036156164";function u(t){var e=t.meta,n=t.image,i=t.title,o=t.description,s=t.slug,l=t.lang,u=void 0===l?"en":l;return r.a.createElement(h.StaticQuery,{query:d,render:function(t){var a=t.site.siteMetadata,l=o||a.description,h=(n&&a.siteUrl,""+a.siteUrl+s);return r.a.createElement(c.a,Object.assign({htmlAttributes:{lang:u}},i?{titleTemplate:"%s — "+a.title,title:i}:{title:a.title+" — A blog by KaierChou"},{meta:[{name:"description",content:l},{property:"og:url",content:h},{property:"og:title",content:i||a.title},{property:"og:description",content:l}].concat(e)}))},data:a})}u.defaultProps={meta:[],title:"",slug:""},u.propTypes={description:l.a.string,image:l.a.string,meta:l.a.array,slug:l.a.string,title:l.a.string.isRequired},e.a=u},173:function(t){t.exports={data:{site:{siteMetadata:{title:"Kaier33",author:"KaierChou",description:"Personal blog by KaierChou.",siteUrl:"https://kaierchou.github.io"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-9b613c6bb758fa46a8a0.js.map