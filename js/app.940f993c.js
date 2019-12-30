(function(e){function t(t){for(var r,i,s=t[0],l=t[1],u=t[2],c=0,h=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);v&&v(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"03a53db3"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var u=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var v=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e66":function(e,t,n){"use strict";var r=n("53d7"),a=n.n(r);a.a},2395:function(e,t,n){},"53d7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"wrapper"},[n("section",[e._m(1),n("p",[e._v("v-max-items is a Vue.js directive that allows you to limit the number of childs that are visible in an element. When the number of childs is greater than the limit only the first childs are shown and a button is created that allows the user to reveal the remaining childs.")]),n("h3",[e._v("Demo")]),n("p",[e._v("Just include the directive in the element and set the value:")]),e._m(2),n("p",[e._v("Only the first five items are visible:")]),n("div",{directives:[{name:"max-items",rawName:"v-max-items",value:5,expression:"5"}]},[n("div",[e._v("Element 1")]),n("div",[e._v("Element 2")]),n("div",[e._v("Element 3")]),n("div",[e._v("Element 4")]),n("div",[e._v("Element 5")]),n("div",[e._v("Element 6")]),n("div",[e._v("Element 7")]),n("div",[e._v("Element 8")]),n("div",[e._v("Element 9")]),n("div",[e._v("Element 10")])]),n("br"),n("br"),e._v(" "),n("h3",[e._v("Installing")]),n("pre",[e._v("$ npm install @koas/v-max-items")]),n("h3",[e._v("That's all!")]),n("p",[e._v("I hope you find this directive useful. Feel free to fork it or open issues with bugs or suggestions for improvement.")]),n("p",[e._v("This directive is free and open source, so you can use it in any project, commercial or not. If you want to support the developer you can donate via PayPal. Thanks!")]),e._m(3)])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header"}},[n("nav",{staticStyle:{display:"flex","justify-content":"center","background-color":"transparent"}},[n("li",{staticClass:"fork"},[n("a",{attrs:{href:"https://github.com/koas/v-max-items"}},[e._v("View On GitHub")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"title"}},[n("h1",[e._v("v-max-items")]),n("p",[e._v("Limit the number of visible childs in an element")]),n("hr"),n("span",{staticClass:"credits left"},[e._v("Project maintained by "),n("a",{attrs:{href:"https://github.com/koas"}},[e._v("koas")])]),n("span",{staticClass:"credits right"},[e._v("Hosted on GitHub Pages — Theme by "),n("a",{attrs:{href:"https://twitter.com/michigangraham"}},[e._v("mattgraham")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("  "),n("code",[e._v('<div v-max-items="5">\n    <div>Element 1</div>\n    <div>Element 2</div>\n    <div>Element 3</div>\n    <div>Element 4</div>\n    <div>Element 5</div>\n    <div>Element 6</div>\n    <div>Element 7</div>\n    <div>Element 8</div>\n    <div>Element 9</div>\n    <div>Element 10</div>\n  </div>')]),e._v("\n")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"center"}},[n("form",{attrs:{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_blank"}},[n("input",{attrs:{type:"hidden",name:"cmd",value:"_s-xclick"}}),n("input",{attrs:{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----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-----END PKCS7-----\n    "}}),n("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",border:"0",name:"submit",alt:"PayPal - The safer, easier way to pay online!"}}),n("img",{attrs:{alt:"",border:"0",src:"https://www.paypalobjects.com/es_ES/i/scr/pixel.gif",width:"1",height:"1"}})])])}],i=(n("7c55"),n("2877")),s={},l=Object(i["a"])(s,a,o,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("8c4f")),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},f=p,g=(n("1e66"),Object(i["a"])(f,m,d,!1,null,"909e2ecc",null)),w=g.exports,A={name:"home",components:{HelloWorld:w}},E=A,b=Object(i["a"])(E,v,h,!1,null,null,null),B=b.exports;r["a"].use(c["a"]);var _=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Q=new c["a"]({mode:"history",base:"/",routes:_}),C=Q,G=n("2f62");r["a"].use(G["a"]);var M=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("a03d");r["a"].config.productionTip=!1,new r["a"]({router:C,store:M,render:function(e){return e(u)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2395"),a=n.n(r);a.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.940f993c.js.map