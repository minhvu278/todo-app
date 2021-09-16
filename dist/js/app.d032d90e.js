(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/home/vu/code/minhvu278.github.io/projects/todo-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},1237:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("todo-app",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",{staticClass:"text-center mt-5"},[t._v("My Vue Todo App")]),s("div",{staticClass:"d-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter task"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),s("button",{staticClass:"btn btn-warning rounded-0",on:{click:t.submitTask}},[t._v("SUBMIT")])]),s("table",{staticClass:"table table-bordered mt-5"},[t._m(0),s("tbody",t._l(t.tasks,(function(e,a){return s("tr",{key:a},[s("td",[s("span",{class:{finished:"finished"===e.status}},[t._v(t._s(e.name))])]),s("td",[s("span",{staticClass:"pointer",on:{click:function(e){return t.changeStatus(a)}}},[t._v(" "+t._s(t.firstCharUpper(e.status))+" ")])]),s("td",[s("div",{staticClass:"text-center",on:{click:function(e){return t.editTask(a)}}},[s("span",{staticClass:"fa fa-pen"})])]),s("td",[s("div",{staticClass:"text-center",on:{click:function(e){return t.deleteTask(a)}}},[s("span",{staticClass:"fa fa-trash"})])])])})),0)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Task")]),s("th",{attrs:{scope:"col"}},[t._v("Status")]),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("#")]),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[t._v("#")])])])}],c=(s("b0c0"),s("a434"),s("fb6a"),{name:"HelloWorld",props:{msg:String},data:function(){return{task:"",editedTask:null,availableStatuses:["to-do","in-progress","finished"],tasks:[]}},methods:{submitTask:function(){0!==this.task.length&&(null===this.editedTask?this.tasks.push({name:this.task,status:"to-do"}):(this.tasks[this.editedTask].name=this.task,this.editedTask=null),this.task="",this.saveToDatabase())},deleteTask:function(t){this.tasks.splice(t,1)},editTask:function(t){this.task=this.tasks[t].name,this.editedTask=t},changeStatus:function(t){var e=this.availableStatuses.indexOf(this.tasks[t].status);++e>2&&(e=0),this.tasks[t].status=this.availableStatuses[e]},firstCharUpper:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},saveToDatabase:function(){var t=JSON.stringify(this.tasks);localStorage.setItem("todo-database",t)}},mounted:function(){var t=localStorage.getItem("todo-database");console.log("raw: ",t);var e=JSON.parse(t);this.tasks=e}}),u=c,l=(s("5812"),s("2877")),p=Object(l["a"])(u,o,i,!1,null,"2de4d8d8",null),d=p.exports,f={name:"App",components:{TodoApp:d}},h=f,v=(s("034f"),Object(l["a"])(h,n,r,!1,null,null,null)),b=v.exports;s("ab8b"),s("15f5"),s("7051");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(b)}}).$mount("#app")},5812:function(t,e,s){"use strict";s("1237")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.d032d90e.js.map