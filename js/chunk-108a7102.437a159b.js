(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-108a7102"],{"2db4":function(t,e,a){"use strict";a("caad"),a("a9e3");var n=a("ade3"),i=(a("ca71"),a("8dd9")),s=a("a9ad"),o=a("7560"),c=a("f2e7"),r=a("fe6c"),u=a("58df"),l=a("80d2"),d=a("d9bd");e["a"]=Object(u["a"])(i["a"],s["a"],c["a"],Object(r["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:o["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,a=t.bottom,n=t.footer,i=t.insetFooter,s=t.left,o=t.right,c=t.top;return{paddingBottom:Object(l["d"])(a+n+i),paddingLeft:this.app?Object(l["d"])(s):void 0,paddingRight:this.app?Object(l["d"])(o):void 0,paddingTop:Object(l["d"])(e+c)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(d["e"])("auto-height",this),0==this.timeout&&Object(d["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["m"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(n["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(l["m"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:i["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar"),a("v-text-field",{attrs:{"data-test":"sumText","hide-details":"",type:"tel","append-icon":t.icon,outlined:""},on:{"click:append":t.changeType},model:{value:t.sum,callback:function(e){t.sum="string"===typeof e?e.trim():e},expression:"sum"}}),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{"data-test":"date",color:"#00E5FF","prepend-icon":"event",readonly:""},model:{value:t.createdAt,callback:function(e){t.createdAt=e},expression:"createdAt"}},"v-text-field",i,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{"first-day-of-week":"1",dark:"",color:"#00E5FF"},on:{input:function(e){t.menu=!1}},model:{value:t.createdAt,callback:function(e){t.createdAt=e},expression:"createdAt"}})],1),t.thereAreNoCategories?a("v-container",[t._v(" "+t._s(t.$t("home.no-categories"))+". "),a("router-link",{attrs:{tag:"a",to:{name:"CategoriesCreate"}}},[t._v(t._s(t.$t("home.create")))])],1):a("v-container",{staticClass:"overflower-categories"},t._l(Math.ceil(t.categories.length/2),(function(e){return a("v-row",{key:e,attrs:{"no-gutters":""}},t._l(t.categories.slice(2*(e-1),2*(e-1)+2),(function(e){return a("v-col",{key:e.id,attrs:{"data-test":"categoryButton"},on:{click:function(a){return a.preventDefault(),t.saveExpenseHandler(e.id)}}},[a("v-card",{staticClass:"pa-4",attrs:{tile:"",outlined:""}},[a("div",[a("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))])]),a("div",[a("span",{staticStyle:{"vertical-align":"super"}},[t._v(t._s(e.name))])])])],1)})),1)})),1),a("v-btn",{attrs:{outlined:"",block:"",to:{name:"Categories"}}},[t._v(t._s(t.$t("home.categories")))]),a("v-snackbar",{attrs:{timeout:1e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.$t("home.added"))+"!")])],1)},i=[],s=(a("a9e3"),a("d4ec")),o=a("bee2"),c=a("262e"),r=a("2caf"),u=a("9ab4"),l=a("60a3"),d=a("4bb5"),h=a("7b93"),v=a("125c"),p=function(){function t(){Object(s["a"])(this,t)}return Object(o["a"])(t,[{key:"initDate",value:function(){return(new Date).getFullYear()+((new Date).getMonth()+1>10?"-":"-0")+((new Date).getMonth()+1)+((new Date).getDate()>10?"-":"-0")+(new Date).getDate()}},{key:"prepareForSave",value:function(t){return new Date(new Date(t).toLocaleString("en-EN",{timeZone:"UTC"})).getTime()}}]),t}(),m=a("8654"),f=a("e449"),b=a("2e4b"),g=a("a523"),k=a("0fd9"),y=a("62ad"),w=a("b0af"),O=a("8336"),_=a("2db4"),j=Object(d["a"])("Expenses"),C=Object(d["a"])("Categories"),x=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.sum="",t.icon="mdi-minus",t.createdAt=(new p).initDate(),t.menu=!1,t.snackbar=!1,t}return Object(o["a"])(a,[{key:"changeType",value:function(){"mdi-plus"!==this.icon?this.icon="mdi-plus":this.icon="mdi-minus"}},{key:"saveExpenseHandler",value:function(t){var e=Number(this.sum);if(!(e<0||0===e)){var a=this.sortedById.length?this.sortedById[this.sortedById.length-1].getId():0;this.saveExpense(new h["a"](a+1,e,t,(new p).prepareForSave(this.createdAt))),this.sum="",this.snackbar=!0}}},{key:"categories",get:function(){return"mdi-plus"===this.icon?this.incomes:this.outcomes}},{key:"thereAreNoCategories",get:function(){return 0===this.categories.length}}]),a}(l["d"]);Object(u["a"])([j.Getter],x.prototype,"sortedById",void 0),Object(u["a"])([C.Getter],x.prototype,"incomes",void 0),Object(u["a"])([C.Getter],x.prototype,"outcomes",void 0),Object(u["a"])([j.Action],x.prototype,"saveExpense",void 0),x=Object(u["a"])([Object(l["a"])({components:{NavBar:v["a"],VTextField:m["a"],VMenu:f["a"],VDatePicker:b["a"],VContainer:g["a"],VRow:k["a"],VCol:y["a"],VCard:w["a"],VBtn:O["a"],VSnackbar:_["a"]}})],x);var B=x,T=B,A=(a("cf0f"),a("2877")),V=a("6544"),D=a.n(V),E=Object(A["a"])(T,n,i,!1,null,"c50e98ce",null);e["default"]=E.exports;D()(E,{VBtn:O["a"],VCard:w["a"],VCol:y["a"],VContainer:g["a"],VDatePicker:b["a"],VMenu:f["a"],VRow:k["a"],VSnackbar:_["a"],VTextField:m["a"]})},ca71:function(t,e,a){},cf0f:function(t,e,a){"use strict";var n=a("ff46"),i=a.n(n);i.a},ff46:function(t,e,a){}}]);
//# sourceMappingURL=chunk-108a7102.437a159b.js.map