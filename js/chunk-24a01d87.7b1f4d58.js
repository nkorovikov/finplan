(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24a01d87"],{"2db4":function(t,e,i){"use strict";i("caad"),i("a9e3");var n=i("ade3"),a=(i("ca71"),i("8dd9")),s=i("a9ad"),o=i("7560"),r=i("f2e7"),c=i("fe6c"),u=i("58df"),l=i("80d2"),d=i("d9bd");e["a"]=Object(u["a"])(a["a"],s["a"],r["a"],Object(c["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:o["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,n=t.footer,a=t.insetFooter,s=t.left,o=t.right,r=t.top;return{paddingBottom:Object(l["d"])(i+n+a),paddingLeft:this.app?Object(l["d"])(s):void 0,paddingRight:this.app?Object(l["d"])(o):void 0,paddingTop:Object(l["d"])(e+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(d["e"])("auto-height",this),0==this.timeout&&Object(d["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["m"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(n["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(l["m"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:a["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar"),i("v-text-field",{attrs:{"hide-details":"",type:"tel","append-icon":t.icon,outlined:""},on:{"click:append":t.changeType},model:{value:t.sum,callback:function(e){t.sum="string"===typeof e?e.trim():e},expression:"sum"}}),i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-text-field",t._g(t._b({attrs:{color:"#00E5FF","prepend-icon":"event",readonly:""},model:{value:t.createdAt,callback:function(e){t.createdAt=e},expression:"createdAt"}},"v-text-field",a,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-date-picker",{attrs:{"first-day-of-week":"1",dark:"",color:"#00E5FF"},on:{input:function(e){t.menu=!1}},model:{value:t.createdAt,callback:function(e){t.createdAt=e},expression:"createdAt"}})],1),t.thereAreNoCategories?i("v-container",[t._v(" "+t._s(t.$t("home.no-categories"))+". "),i("router-link",{attrs:{tag:"a",to:{name:"CategoriesCreate"}}},[t._v(t._s(t.$t("home.create")))])],1):i("v-container",{staticClass:"overflower-categories"},t._l(Math.ceil(t.categories.length/2),(function(e){return i("v-row",{key:e,attrs:{"no-gutters":""}},t._l(t.categories.slice(2*(e-1),2*(e-1)+2),(function(e){return i("v-col",{key:e.id,on:{click:function(i){return i.preventDefault(),t.saveExpenseHandler(e.id)}}},[i("v-card",{staticClass:"pa-4",attrs:{tile:"",outlined:""}},[i("div",[i("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))])]),i("div",[i("span",{staticStyle:{"vertical-align":"super"}},[t._v(t._s(e.name))])])])],1)})),1)})),1),i("v-btn",{attrs:{outlined:"",block:"",to:{name:"Categories"}}},[t._v(t._s(t.$t("home.categories")))]),t.updateExists?i("v-btn",{attrs:{outlined:"",block:""},on:{click:t.refreshApp}},[t._v("Update")]):t._e(),i("v-snackbar",{attrs:{timeout:1e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.$t("home.added"))+"!")])],1)},a=[],s=(i("a9e3"),i("d4ec")),o=i("bee2"),r=i("262e"),c=i("2caf"),u=i("9ab4"),l=i("60a3"),d=i("4bb5"),h=i("7b93"),v=i("125c"),p=Object(d["a"])("Expenses"),f=Object(d["a"])("Categories"),m=function(t){Object(r["a"])(i,t);var e=Object(c["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.sum="",t.icon="mdi-minus",t.createdAt=new Date((new Date).toLocaleString("en-EN",{timeZone:"Europe/Moscow"})).toISOString().substr(0,10),t.menu=!1,t.snackbar=!1,t.refreshing=!1,t.registration=null,t.updateExists=!1,t}return Object(o["a"])(i,[{key:"created",value:function(){var t=this;document.addEventListener("swUpdated",this.showRefreshUI,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){t.refreshing||(t.refreshing=!0,window.location.reload())}))}},{key:"changeType",value:function(){"mdi-plus"!==this.icon?this.icon="mdi-plus":this.icon="mdi-minus"}},{key:"saveExpenseHandler",value:function(t){var e=Number(this.sum);if(!(e<0||0===e)){var i=this.sortedById.length?this.sortedById[this.sortedById.length-1].getId():0;this.saveExpense(new h["a"](i+1,e,t,new Date(new Date(this.createdAt).toLocaleString("en-EN",{timeZone:"UTC"})).getTime())),this.sum="",this.snackbar=!0}}},{key:"showRefreshUI",value:function(t){this.registration=t.detail,this.updateExists=!0}},{key:"refreshApp",value:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage("skipWaiting")}},{key:"categories",get:function(){return"mdi-plus"===this.icon?this.incomes:this.outcomes}},{key:"thereAreNoCategories",get:function(){return 0===this.categories.length}}]),i}(l["d"]);Object(u["a"])([p.Getter],m.prototype,"sortedById",void 0),Object(u["a"])([f.Getter],m.prototype,"incomes",void 0),Object(u["a"])([f.Getter],m.prototype,"outcomes",void 0),Object(u["a"])([p.Action],m.prototype,"saveExpense",void 0),m=Object(u["a"])([Object(l["a"])({components:{NavBar:v["a"]}})],m);var g=m,b=g,k=(i("f0f6"),i("2877")),y=i("6544"),w=i.n(y),_=i("8336"),x=i("b0af"),O=i("62ad"),j=i("a523"),C=i("2e4b"),A=i("e449"),E=i("0fd9"),B=i("2db4"),T=i("8654"),$=Object(k["a"])(b,n,a,!1,null,"6b292e42",null);e["default"]=$.exports;w()($,{VBtn:_["a"],VCard:x["a"],VCol:O["a"],VContainer:j["a"],VDatePicker:C["a"],VMenu:A["a"],VRow:E["a"],VSnackbar:B["a"],VTextField:T["a"]})},ca71:function(t,e,i){},cbf0:function(t,e,i){},f0f6:function(t,e,i){"use strict";var n=i("cbf0"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-24a01d87.7b1f4d58.js.map