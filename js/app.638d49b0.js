(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1996842e":"2a49f75c","chunk-5bd1d20e":"3398e871","chunk-0f8afdc6":"23339383","chunk-5ae2e18a":"95af1708","chunk-e6e5d21c":"1e4a6d83","chunk-1f2e71dc":"fcb0ecf2","chunk-19531a02":"d86b23db","chunk-42d07b80":"c05d38e0","chunk-f157d378":"ed6f29cf","chunk-65755557":"86212ca1","chunk-7a171fbc":"55c3263a","chunk-56a4743d":"092570e6","chunk-56a70b20":"318365fd"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1996842e":1,"chunk-5bd1d20e":1,"chunk-0f8afdc6":1,"chunk-5ae2e18a":1,"chunk-e6e5d21c":1,"chunk-1f2e71dc":1,"chunk-19531a02":1,"chunk-42d07b80":1,"chunk-f157d378":1,"chunk-65755557":1,"chunk-7a171fbc":1,"chunk-56a4743d":1,"chunk-56a70b20":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1996842e":"b5b5fc99","chunk-5bd1d20e":"1ce562b4","chunk-0f8afdc6":"1f74ea8e","chunk-5ae2e18a":"76874681","chunk-e6e5d21c":"76874681","chunk-1f2e71dc":"c21ec000","chunk-19531a02":"5e90a3ab","chunk-42d07b80":"6930852e","chunk-f157d378":"dcd81cf9","chunk-65755557":"4fe70ffa","chunk-7a171fbc":"1b4ee7cd","chunk-56a4743d":"527573be","chunk-56a70b20":"527573be"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/finplan/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},4026:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("b0c0");var r=n("d4ec"),o=n("bee2"),a=function(){function e(t,n,o,a,c){Object(r["a"])(this,e),this.name=t,this.dailyBudget=n,this.weeklyBudget=o,this.monthlyBudget=a,this.locale=c}return Object(o["a"])(e,[{key:"getName",value:function(){return this.name}},{key:"getDailyBudget",value:function(){return this.dailyBudget}},{key:"getWeeklyBudget",value:function(){return this.weeklyBudget}},{key:"getMonthlyBudget",value:function(){return this.monthlyBudget}},{key:"getLocale",value:function(){return this.locale}}]),e}()},"49f8":function(e,t,n){var r={"./en.json":"edd4","./ru.json":"7704"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},7704:function(e){e.exports=JSON.parse('{"menu":{"history":"История","home":"Главная","report":"Отчет"},"home":{"categories":"Категории","no-categories":"Категории отсутствуют","create":"Добавить","added":"Добавлено"},"categories":{"create":"Добавить","title":"Название","type":"Тип","icon":"Иконка","save":"Сохранить","income":"Доход","outcome":"Расход"},"history":{"date":"Дата","category":"Категория","sum":"Сумма","last-week-outcomes":"Расходы за неделю"},"settings":{"update":"Обновить приложение","about":"О приложении","profile":"Профиль"},"about":{"control-finances":"Контролируйте свои финансы"},"profile":{"name":"Имя","daily-budget":"Дневной бюджет","week-budget":"Недельный бюджет","month-budget":"Месячный бюджет","save":"Сохранить","saved":"Сохранено"},"report":{"budget":"Бюджет","incomes":"Доходы","outcomes":"Расходы","by-categories":"По категориям"}}')},"7b93":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("d4ec"),o=n("bee2"),a=function(){function e(t,n,o,a){Object(r["a"])(this,e),this.id=t,this.sum=n,this.categoryId=o,this.createdAt=a}return Object(o["a"])(e,[{key:"getId",value:function(){return this.id}},{key:"getSum",value:function(){return this.sum}},{key:"getCategoryId",value:function(){return this.categoryId}},{key:"getCreatedAt",value:function(){return this.createdAt}}]),e}()},"9c0c":function(e,t,n){},b34c:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("b0c0");var r=n("d4ec"),o=n("bee2"),a=function(){function e(t,n,o,a){Object(r["a"])(this,e),this.id=t,this.name=n,this.type=o,this.icon=a}return Object(o["a"])(e,[{key:"getName",value:function(){return this.name}},{key:"getId",value:function(){return this.id}},{key:"getType",value:function(){return this.type}}]),e}()},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("public-layout",[n("router-view")],1)],1)],1)},a=[],c=n("d4ec"),u=n("262e"),i=n("2caf"),s=n("9ab4"),l=n("60a3"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("v-main",[n("v-container",{attrs:{fluid:""}},[e._t("default")],2)],1),n("v-bottom-navigation",{attrs:{app:"",ansolute:"",grow:""}},[n("v-btn",{attrs:{to:{name:"Report"},height:"56px"}},[n("span",[e._v(e._s(e.$t("menu.report")))]),n("v-icon",[e._v("mdi-chart-donut")])],1),n("v-btn",{attrs:{exact:"",to:{name:"Home"},height:"56px"}},[n("span",[e._v(e._s(e.$t("menu.home")))]),n("v-icon",[e._v("mdi-home")])],1)],1)],1)},f=[],h=function(e){Object(u["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(l["d"]);h=Object(s["a"])([Object(l["a"])({})],h);var p=h,g=p,b=n("2877"),y=n("6544"),m=n.n(y),v=n("b81c"),k=n("8336"),O=n("a523"),j=n("132d"),w=n("f6c4"),x=Object(b["a"])(g,d,f,!1,null,null,null),C=x.exports;m()(x,{VBottomNavigation:v["a"],VBtn:k["a"],VContainer:O["a"],VIcon:j["a"],VMain:w["a"]});var I=function(e){Object(u["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(l["d"]);I=Object(s["a"])([Object(l["a"])({components:{PublicLayout:C}})],I);var S=I,P=S,E=(n("5c0b"),n("7496")),B=Object(b["a"])(P,o,a,!1,null,null,null),A=B.exports;m()(B,{VApp:E["a"]});var _,N=n("9483");Object(N["a"])("".concat("/finplan/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),navigator.serviceWorker.addEventListener("controllerchange",(function(e){_||(window.location.reload(),_=!0)}));n("d3b7");var T=n("8c4f");r["a"].use(T["a"]);var L=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-5bd1d20e"),n.e("chunk-1f2e71dc"),n.e("chunk-19531a02"),n.e("chunk-65755557")]).then(n.bind(null,"bb51"))}},{path:"/history",name:"History",component:function(){return Promise.all([n.e("chunk-5bd1d20e"),n.e("chunk-56a4743d")]).then(n.bind(null,"e4bb"))}},{path:"/report",name:"Report",component:function(){return n.e("chunk-1996842e").then(n.bind(null,"762c"))}},{path:"/categories",name:"Categories",component:function(){return Promise.all([n.e("chunk-5bd1d20e"),n.e("chunk-56a70b20")]).then(n.bind(null,"58c2"))}},{path:"/categories/create",name:"CategoriesCreate",component:function(){return Promise.all([n.e("chunk-5bd1d20e"),n.e("chunk-1f2e71dc"),n.e("chunk-0f8afdc6"),n.e("chunk-19531a02"),n.e("chunk-42d07b80")]).then(n.bind(null,"c160"))}},{path:"/categories/:id/update",name:"CategoriesUpdate",component:function(){return Promise.all([n.e("chunk-5bd1d20e"),n.e("chunk-1f2e71dc"),n.e("chunk-0f8afdc6"),n.e("chunk-19531a02"),n.e("chunk-f157d378")]).then(n.bind(null,"e85c"))},props:!0},{path:"/settings",name:"Settings",component:function(){return Promise.all([n.e("chunk-5bd1d20e"),n.e("chunk-0f8afdc6"),n.e("chunk-e6e5d21c")]).then(n.bind(null,"26d3"))}},{path:"/settings/about",name:"About",component:function(){return Promise.all([n.e("chunk-5bd1d20e"),n.e("chunk-0f8afdc6"),n.e("chunk-5ae2e18a")]).then(n.bind(null,"f820"))}},{path:"/settings/profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-5bd1d20e"),n.e("chunk-1f2e71dc"),n.e("chunk-7a171fbc")]).then(n.bind(null,"c66d"))}}],J=new T["a"]({mode:"history",base:"/finplan/",routes:L}),M=J,D=n("2f62"),H=(n("4de4"),n("c740"),n("a434"),n("2909")),V=n("bee2"),U=n("6fc5"),$=(n("d81d"),n("b0c0"),n("7b93")),F=n("b34c"),q=n("4026"),R=function(){function e(){Object(c["a"])(this,e)}return Object(V["a"])(e,[{key:"getExpenses",value:function(){return localStorage.expenses?JSON.parse(localStorage.expenses).map((function(e){return new $["a"](e.id,e.sum,e.categoryId,e.createdAt)})):[]}},{key:"syncExpenses",value:function(e){localStorage.setItem("expenses",JSON.stringify(e))}},{key:"getCategories",value:function(){return localStorage.categories?JSON.parse(localStorage.categories).map((function(e){return new F["a"](e.id,e.name,e.type,e.icon)})):[]}},{key:"syncCategories",value:function(e){localStorage.setItem("categories",JSON.stringify(e))}},{key:"getProfile",value:function(){if(!localStorage.profile)return new q["a"]("",0,0,0,"ru");var e=JSON.parse(localStorage.profile);return new q["a"](e.name,e.dailyBudget,e.weeklyBudget,e.monthlyBudget,e.locale)}},{key:"syncProfile",value:function(e){localStorage.setItem("profile",JSON.stringify(e))}}]),e}(),W=new R,z=function(e){Object(u["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.expenses=W.getExpenses(),e}return Object(V["a"])(n,[{key:"push",value:function(e){this.expenses.push(e)}},{key:"delete",value:function(e){var t=this.expenses.findIndex((function(t){return t.getId()===e}));this.expenses.splice(t,1)}},{key:"saveExpense",value:function(e){this.context.commit("push",e),W.syncExpenses(this.expenses)}},{key:"deleteExpense",value:function(e){this.context.commit("delete",e),W.syncExpenses(this.expenses)}},{key:"getByCategoryId",value:function(e){return this.expenses.filter((function(t){return t.getCategoryId()===e}))}},{key:"sortedByCreatedAt",get:function(){return Object(H["a"])(this.expenses).sort((function(e,t){return e.getCreatedAt===t.getCreatedAt?0:e.getCreatedAt>t.getCreatedAt?-1:1}))}},{key:"sortedById",get:function(){return Object(H["a"])(this.expenses).sort((function(e,t){return e.getId===t.getId?0:e.getId>t.getId?-1:1}))}}]),n}(U["d"]);Object(s["a"])([U["c"]],z.prototype,"push",null),Object(s["a"])([U["c"]],z.prototype,"delete",null),Object(s["a"])([U["a"]],z.prototype,"saveExpense",null),Object(s["a"])([U["a"]],z.prototype,"deleteExpense",null),Object(s["a"])([U["a"]],z.prototype,"getByCategoryId",null),z=Object(s["a"])([Object(U["b"])({namespaced:!0})],z);var K=z,Z=(n("7db0"),new R),G=function(e){Object(u["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.categories=Z.getCategories(),e}return Object(V["a"])(n,[{key:"push",value:function(e){this.categories.push(e)}},{key:"update",value:function(e,t){var n=this.categories.findIndex((function(t){return t.getId()===e}));this.categories[n]=t}},{key:"delete",value:function(e){var t=this.categories.findIndex((function(t){return t.getId()===e}));this.categories.splice(t,1)}},{key:"createCategory",value:function(e){this.context.commit("push",e),Z.syncCategories(this.categories)}},{key:"updateCategory",value:function(e,t){this.context.commit("update",{id:e,category:t}),Z.syncCategories(this.categories)}},{key:"deleteCategory",value:function(e){this.context.commit("delete",e),Z.syncCategories(this.categories)}},{key:"findById",value:function(e){return this.categories.find((function(t){return t.getId()===e}))}},{key:"sortedById",get:function(){return Object(H["a"])(this.categories).sort((function(e,t){return e.getId===t.getId?0:e.getId>t.getId?-1:1}))}},{key:"incomes",get:function(){return Object(H["a"])(this.categories).filter((function(e){return 1===e.getType()}))}},{key:"outcomes",get:function(){return Object(H["a"])(this.categories).filter((function(e){return 2===e.getType()}))}}]),n}(U["d"]);Object(s["a"])([U["c"]],G.prototype,"push",null),Object(s["a"])([U["c"]],G.prototype,"update",null),Object(s["a"])([U["c"]],G.prototype,"delete",null),Object(s["a"])([U["a"]],G.prototype,"createCategory",null),Object(s["a"])([U["a"]],G.prototype,"updateCategory",null),Object(s["a"])([U["a"]],G.prototype,"deleteCategory",null),Object(s["a"])([U["a"]],G.prototype,"findById",null),G=Object(s["a"])([Object(U["b"])({namespaced:!0})],G);var Q=G,X=new R,Y=function(e){Object(u["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.profile=X.getProfile(),e}return Object(V["a"])(n,[{key:"save",value:function(e){this.profile=e}},{key:"saveProfile",value:function(e){this.context.commit("save",e),X.syncProfile(this.profile)}},{key:"get",value:function(){return this.profile}}]),n}(U["d"]);Object(s["a"])([U["c"]],Y.prototype,"save",null),Object(s["a"])([U["a"]],Y.prototype,"saveProfile",null),Object(s["a"])([U["a"]],Y.prototype,"get",null),Y=Object(s["a"])([Object(U["b"])({namespaced:!0})],Y);var ee=Y;r["a"].use(D["a"]);var te=new D["a"].Store({state:{},mutations:{},actions:{},modules:{Expenses:K,Categories:Q,Profile:ee}}),ne=n("f309");r["a"].use(ne["a"]);var re=new ne["a"]({}),oe=(n("4160"),n("ac1f"),n("466d"),n("159b"),n("ddb0"),n("a925"));r["a"].use(oe["a"]);var ae=new R,ce=ae.getProfile();function ue(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n)}})),t}var ie=new oe["a"]({locale:ce.getLocale(),fallbackLocale:ce.getLocale(),messages:ue()});r["a"].config.productionTip=!1,new r["a"]({i18n:ie,router:M,store:te,vuetify:re,render:function(e){return e(A)}}).$mount("#app")},edd4:function(e){e.exports=JSON.parse('{"menu":{"history":"History","home":"Home","report":"Report"},"home":{"categories":"Categories","no-categories":"There are no categories","create":"Create","added":"Added"},"categories":{"create":"Create","title":"Title","type":"Type","icon":"Icon","save":"Save","income":"Income","outcome":"Outcome"},"history":{"date":"Date","category":"Category","sum":"Sum","last-week-outcomes":"Last week outcomes"},"settings":{"update":"Update app","about":"About","profile":"Profile"},"about":{"control-finances":"Control your finances"},"profile":{"name":"Name","daily-budget":"Daily budget","week-budget":"Weekly budget","month-budget":"Monthly budget","save":"Save","saved":"Saved"},"report":{"budget":"Бюджет","incomes":"Incomes","outcomes":"Outcomes","by-categories":"По категориям"}}')}});
//# sourceMappingURL=app.638d49b0.js.map