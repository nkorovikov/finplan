(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3f8f11c"],{"0789":function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return f}));n("99af");var i=n("d9f7");function a(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return(t=Array()).concat.apply(t,[e].concat(i))}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var r="transition".concat(n.props.group?"-group":""),s={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(s.on.leave=a(s.on.leave,(function(t){return t.style.position="absolute"}))),n.props.hideOnLeave&&(s.on.leave=a(s.on.leave,(function(t){return t.style.display="none"}))),e(r,Object(i["a"])(n.data,s),n.children)}}}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,a){return n("transition",Object(i["a"])(a.data,{props:{name:t},on:e}),a.children)}}}var o=n("ade3"),c=n("80d2"),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",i="offset".concat(Object(c["y"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(o["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var a=e._initialStyle,r="".concat(e[i],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=a.visibility,e.style.overflow="hidden",e.style[n]="0",e.offsetHeight,e.style.transition=a.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=r}))},afterEnter:r,enterCancelled:r,leave:function(t){t._initialStyle=Object(o["a"])({transition:"",visibility:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[i],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:a,leaveCancelled:a};function a(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},u=(r("carousel-transition"),r("carousel-reverse-transition"),r("tab-transition"),r("tab-reverse-transition"),r("menu-transition"),r("fab-transition","center center","out-in"),r("dialog-transition"),r("dialog-bottom-transition"),r("fade-transition")),d=(r("scale-transition"),r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition")),h=(r("slide-x-reverse-transition"),r("slide-y-transition"),r("slide-y-reverse-transition"),s("expand-transition",l())),f=s("expand-x-transition",l("",!0))},"297c":function(t,e,n){"use strict";n("a9e3");var i=n("2b0e"),a=n("37c6");e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(a["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2db4":function(t,e,n){"use strict";n("caad"),n("a9e3");var i=n("ade3"),a=(n("ca71"),n("8dd9")),r=n("a9ad"),s=n("7560"),o=n("f2e7"),c=n("fe6c"),l=n("58df"),u=n("80d2"),d=n("d9bd");e["a"]=Object(l["a"])(a["a"],r["a"],o["a"],Object(c["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:s["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,i=t.footer,a=t.insetFooter,r=t.left,s=t.right,o=t.top;return{paddingBottom:Object(u["f"])(n+i+a),paddingLeft:this.app?Object(u["f"])(r):void 0,paddingRight:this.app?Object(u["f"])(s):void 0,paddingTop:Object(u["f"])(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(d["e"])("auto-height",this),0==this.timeout&&Object(d["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(u["o"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(i["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(u["o"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:a["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"37c6":function(t,e,n){"use strict";var i=n("8e36");e["a"]=i["a"]},"6ece":function(t,e,n){},"8e36":function(t,e,n){"use strict";n("a9e3"),n("c7cd");var i=n("5530"),a=n("ade3"),r=(n("6ece"),n("0789")),s=n("a9ad"),o=n("fe6c"),c=n("a452"),l=n("7560"),u=n("80d2"),d=n("58df"),h=Object(d["a"])(s["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),c["a"],l["a"]);e["a"]=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(a["a"])(t,this.isReversed?"right":"left",Object(u["f"])(this.normalizedValue,"%")),Object(a["a"])(t,"width",Object(u["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(i["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?r["c"]:r["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(u["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(u["o"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(a["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),n=e.width;this.internalValue=t.offsetX/n*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar"),n("v-text-field",{attrs:{"data-test":"sumText","hide-details":"",type:"tel","append-icon":t.icon,outlined:""},on:{"click:append":t.changeType},model:{value:t.sum,callback:function(e){t.sum="string"===typeof e?e.trim():e},expression:"sum"}}),n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{"data-test":"date",color:"#00E5FF","prepend-icon":"event",readonly:""},model:{value:t.createdAt,callback:function(e){t.createdAt=e},expression:"createdAt"}},"v-text-field",a,!1),i))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-date-picker",{attrs:{"first-day-of-week":"1",dark:"",color:"#00E5FF"},on:{input:function(e){t.menu=!1}},model:{value:t.createdAt,callback:function(e){t.createdAt=e},expression:"createdAt"}})],1),t.thereAreNoCategories?n("v-container",[t._v(" "+t._s(t.$t("home.no-categories"))+". "),n("router-link",{attrs:{tag:"a",to:{name:"CategoriesCreate"}}},[t._v(t._s(t.$t("home.create")))])],1):n("v-container",{staticClass:"overflower-categories"},t._l(Math.ceil(t.categories.length/2),(function(e){return n("v-row",{key:e,attrs:{"no-gutters":""}},t._l(t.categories.slice(2*(e-1),2*(e-1)+2),(function(e){return n("v-col",{key:e.id,attrs:{"data-test":"categoryButton"},on:{click:function(n){return n.preventDefault(),t.saveExpenseHandler(e.id)}}},[n("v-card",{staticClass:"pa-4",attrs:{tile:"",outlined:""}},[n("div",[n("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))])]),n("div",[n("span",{staticStyle:{"vertical-align":"super"}},[t._v(t._s(e.name))])])])],1)})),1)})),1),n("v-btn",{attrs:{outlined:"",block:"",to:{name:"Categories"}}},[t._v(t._s(t.$t("home.categories")))]),n("v-snackbar",{attrs:{timeout:1e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.$t("home.added"))+"!")])],1)},a=[],r=(n("a9e3"),n("d4ec")),s=n("bee2"),o=n("262e"),c=n("2caf"),l=n("9ab4"),u=n("60a3"),d=n("4bb5"),h=n("7b93"),f=n("125c"),v=function(){function t(){Object(r["a"])(this,t)}return Object(s["a"])(t,[{key:"initDate",value:function(){return(new Date).getFullYear()+((new Date).getMonth()+1>9?"-":"-0")+((new Date).getMonth()+1)+((new Date).getDate()>9?"-":"-0")+(new Date).getDate()}},{key:"prepareForSave",value:function(t){return new Date(new Date(t).toLocaleString("en-EN",{timeZone:"UTC"})).getTime()}}]),t}(),p=n("8654"),m=n("e449"),g=n("2e4b"),b=n("a523"),y=n("0fd9"),_=n("62ad"),k=n("b0af"),B=n("8336"),O=n("2db4"),C=Object(d["a"])("Expenses"),w=Object(d["a"])("Categories"),j=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(r["a"])(this,n),t=e.apply(this,arguments),t.sum="",t.icon="mdi-minus",t.createdAt=(new v).initDate(),t.menu=!1,t.snackbar=!1,t}return Object(s["a"])(n,[{key:"changeType",value:function(){"mdi-plus"!==this.icon?this.icon="mdi-plus":this.icon="mdi-minus"}},{key:"saveExpenseHandler",value:function(t){var e=Number(this.sum);if(!(e<0||0===e)){var n=this.sortedById.length?this.sortedById[this.sortedById.length-1].getId():0;this.saveExpense(new h["a"](n+1,e,t,(new v).prepareForSave(this.createdAt))),this.sum="",this.snackbar=!0}}},{key:"categories",get:function(){return"mdi-plus"===this.icon?this.incomes:this.outcomes}},{key:"thereAreNoCategories",get:function(){return 0===this.categories.length}}]),n}(u["f"]);Object(l["b"])([C.Getter],j.prototype,"sortedById",void 0),Object(l["b"])([w.Getter],j.prototype,"incomes",void 0),Object(l["b"])([w.Getter],j.prototype,"outcomes",void 0),Object(l["b"])([C.Action],j.prototype,"saveExpense",void 0),j=Object(l["b"])([Object(u["a"])({components:{NavBar:f["a"],VTextField:p["a"],VMenu:m["a"],VDatePicker:g["a"],VContainer:b["a"],VRow:y["a"],VCol:_["a"],VCard:k["a"],VBtn:B["a"],VSnackbar:O["a"]}})],j);var x=j,S=x,V=(n("cf0f"),n("2877")),T=n("6544"),A=n.n(T),E=Object(V["a"])(S,i,a,!1,null,"c50e98ce",null);e["default"]=E.exports;A()(E,{VBtn:B["a"],VCard:k["a"],VCol:_["a"],VContainer:b["a"],VDatePicker:g["a"],VMenu:m["a"],VRow:y["a"],VSnackbar:O["a"],VTextField:p["a"]})},ca71:function(t,e,n){},cf0f:function(t,e,n){"use strict";var i=n("ff46"),a=n.n(i);a.a},ff46:function(t,e,n){}}]);
//# sourceMappingURL=chunk-a3f8f11c.2bf2aa50.js.map