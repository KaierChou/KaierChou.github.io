webpackJsonp([2],{"0zhL":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=e("/ocq"),i=e("PJh5"),r=e.n(i),o=(e("Q24Q"),{render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"testExperienceReportDetail"}},[s("router-view",{staticStyle:{width:"750px",margin:"0 auto"}})],1)},staticRenderFns:[]}),c=e("VU/8")(null,o,!1,null,null,null).exports,l=e("We1J");a.a.use(n.a),a.a.filter("dateFormat",function(t,s){return r()(t).format(s)});var u=new n.a({routes:[{path:"/",name:"testExperienceReportDetail",component:l.a}]});a.a.config.productionTip=!1,new a.a({el:"#testExperienceReportDetail",router:u,components:{testExperienceReportDetail:c},template:"<testExperienceReportDetail/>"})},"6bp7":function(t,s,e){"use strict";var a={props:["resData"],data:function(){return{}},methods:{enter:function(t){console.log(t)}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("ul",{staticClass:"reportList"},t._l(this.resData,function(s,a){return e("li",{key:a,on:{click:function(e){t.enter(s.id)}}},[e("div",{staticClass:"reportLeft"},[e("img",{attrs:{src:s.imgUrl}})]),t._v(" "),e("div",{staticClass:"reportRight"},[e("div",{staticClass:"box"},[e("span",{staticClass:"title"},[t._v("\n                        "+t._s(s.title)+"\n                    ")]),t._v(" "),e("span",{staticClass:"author"},[t._v("\n                        "+t._s(s.author)+"\n                    ")])])])])}))])},staticRenderFns:[]};var i=e("VU/8")(a,n,!1,function(t){e("EvMA")},"data-v-73398540",null);s.a=i.exports},"9GS1":function(t,s){},Bsas:function(t,s){},Dvjt:function(t,s,e){"use strict";var a={props:["resData"],data:function(){return{}},methods:{enterTag:function(t){alert(t)}},mounted:function(){}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aboutTags"},[e("p",[t._v("相关标签")]),t._v(" "),e("ul",{staticClass:"aboutTagsList"},t._l(t.resData,function(s,a){return e("li",{key:a,on:{click:function(e){t.enterTag(s.tagId)}}},[e("span",[t._v(" # "+t._s(s.tagName))])])}))])},staticRenderFns:[]};var i=e("VU/8")(a,n,!1,function(t){e("9GS1")},"data-v-45960080",null);s.a=i.exports},EvMA:function(t,s){},G6hd:function(t,s){},Q24Q:function(t,s){},VpFf:function(t,s){},We1J:function(t,s,e){"use strict";var a=e("6bp7"),n=e("Dvjt"),i=e("iPs5"),r={props:["resData"],data:function(){return{authorInfo:{}}},methods:{fouceAuthor:function(t){alert("子组件调用"+t),this.$emit("focusAuthor",t),this.resData.isFocus=!0}},created:function(){},mounted:function(){}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"authorBar"},[e("div",{staticClass:"author"},[e("div",{staticClass:"authorIcon",style:"background-image: url("+t.resData.authorIcon+")"},[1==t.resData.authorGrades?e("div",{staticClass:"vip1"}):t._e(),t._v(" "),2==t.resData.authorGrades?e("div",{staticClass:"vip2"}):t._e(),t._v(" "),3==t.resData.authorGrades?e("div",{staticClass:"vip3"}):t._e()]),t._v(" "),e("span",[t._v("\n            "+t._s(t.resData.authorName)+"\n        ")])]),t._v(" "),t.resData.isFocus?t._e():e("div",{staticClass:"concern",on:{click:function(s){t.fouceAuthor(t.resData.authorId)}}},[e("div",{staticClass:"addIcon"})])])},staticRenderFns:[]};var c=e("VU/8")(r,o,!1,function(t){e("G6hd")},"data-v-b18f5de0",null).exports,l={components:{hotTestExperienceReport:a.a,aboutTags:n.a,articleLike:i.a,authorBar:c},data:function(){return{content:{coverImg:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",articleTitle:"Misfit SHINE，以退为进，把梦照进现实",publishTime:"1小时前",editTime:1525158e6},authorInfo:{authorId:123456,authorGrades:1,authorName:"Liking",isFocus:!1,authorIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"},articleGoods:{goodsName:"Misfit SHINE 新世界的复古手表",goodsImg:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",buyHref:"www.jd.com"},testReportList:[{imgUrl:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",title:"Astell&Kern AK70 播放器体验：音频界的文艺青年的年度asdasdasd",author:"Savannah Walters",id:110},{imgUrl:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",title:"我的摄影纪实夏天的泳池",author:" 二中兄",id:120},{imgUrl:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",title:"Astell&Kern AK70 播放器体验：音频界的文艺青年的年度asdasdasd",author:"Savannah Walters",id:119},{imgUrl:"http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg",title:"我的摄影纪实夏天的泳池",author:" 二中兄",id:911}],aboutTagsList:[{tagID:110,tagName:"手表"},{tagID:120,tagName:"古风"}],likeInfo:{likeUserList:[{userId:110,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"},{userId:119,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"},{userId:120,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"},{userId:911,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"},{userId:12306,userIcon:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg"}],totalLike:10}}},methods:{getData:function(t){alert(t)},focusAuthor:function(t){alert("父组件调用"+t),console.log(this.authorInfo)}},mounted:function(){}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{width:"100%"}},[e("div",[e("img",{staticClass:"topCover",attrs:{src:t.content.coverImg}})]),t._v(" "),e("div",{staticClass:"container"},[e("authorBar",{attrs:{resData:this.authorInfo},on:{focusAuthor:this.focusAuthor}}),t._v(" "),e("div",{staticClass:"article"},[e("div",{staticClass:"articleTitle"},[t._v("\n                "+t._s(t.content.articleTitle)+"\n                "),e("p",[t._v(t._s(t.content.publishTime)+" · 来自众测体验")])]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n                各种文本123131231\n            ")]),t._v(" "),e("div",{staticClass:"articleFoot"},[e("p",{staticClass:"editTime"},[t._v("编辑于\n                    "),e("span",[t._v(t._s(t._f("dateFormat")(t.content.editTime,"YYYY-MM-DD")))])]),t._v(" "),e("p",[t._v("——— 全文完 ———")])])]),t._v(" "),e("articleLike",{attrs:{resData:this.likeInfo}}),t._v(" "),e("div",{staticClass:"aboutGoods"},[e("p",[t._v("文本中的商品")]),t._v(" "),e("div",{staticClass:"goods"},[e("img",{attrs:{src:t.articleGoods.goodsImg}}),t._v(" "),e("div",{staticClass:"buy"},[e("p",[t._v(t._s(t.articleGoods.goodsName))]),t._v(" "),e("button",[t._v("去购买")])])])]),t._v(" "),e("aboutTags",{attrs:{resData:this.aboutTagsList}}),t._v(" "),e("div",{staticClass:"testReport"},[t._m(0),t._v(" "),e("hotTestExperienceReport",{attrs:{resData:this.testReportList}})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"clearfix testReportTitle"},[s("span",[this._v("热门众测体验报告")]),this._v(" "),s("span",[this._v("全部")])])}]};var d=e("VU/8")(l,u,!1,function(t){e("l+vU")},"data-v-eabc87a4",null);s.a=d.exports},iPs5:function(t,s,e){"use strict";e("VpFf");var a={props:["resData"],data:function(){return{}},computed:{moreLikes:function(){return this.resData.totalLike>6&&this.resData.totalLike<1e3?this.resData.totalLike-5:999}},watch:{},methods:{personalInformation:function(t){console.log(t)},likeArticle:function(){this.$refs.likeBackground.classList.contains("like")?(this.$refs.likeBackground.classList.remove("like"),this.$refs.likeBackground.classList.add("unlike")):(this.$refs.likeBackground.classList.remove("unlike"),this.$refs.likeBackground.classList.add("like"))}},mounted:function(){}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"articleLick"},[e("div",{ref:"likeBackground",staticClass:"unlike",on:{click:this.likeArticle}},[e("span",{staticClass:"icon-in_like_icon"})]),t._v(" "),e("p",[e("span",[t._v(t._s(t.resData.totalLike))]),t._v(" 人已赞\n    ")]),t._v(" "),e("ul",{staticClass:"personList"},[t._l(t.resData.likeUserList,function(s,a){return e("li",{key:a,on:{click:function(e){t.personalInformation(s.userId)}}},[e("img",{attrs:{src:s.userIcon}})])}),t._v(" "),this.resData.totalLike>6?e("li",[e("div",{staticClass:"manyMore"},[t._v("\n                +"+t._s(t.moreLikes)+"\n            ")])]):t._e()],2)])},staticRenderFns:[]};var i=e("VU/8")(a,n,!1,function(t){e("Bsas")},"data-v-281d1742",null);s.a=i.exports},"l+vU":function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(i(t))}function i(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"}},["0zhL"]);
//# sourceMappingURL=testExperienceReportDetail.0c92a76781470899736b.js.map