(function(t){function e(e){for(var a,s,c=e[0],u=e[1],i=e[2],p=0,l=[];p<c.length;p++)s=c[p],o[s]&&l.push(o[s][0]),o[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(l.length)l.shift()();return n.push.apply(n,i||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},o={app:0},n=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var d=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"41bd":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),r("router-link",{attrs:{to:"/admin-page"}},[t._v("Admin Page")])],1),r("b-container",[r("router-view")],1)],1)},n=[],s=(r("5c0b"),r("2877")),c={},u=Object(s["a"])(c,o,n,!1,null,null,null),i=u.exports,d=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Products")],1)},l=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",[r("div",{staticClass:"modal-div"},[r("b-row",[r("b-col",[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-a.collapse-b",modifiers:{"collapse-a":!0,"collapse-b":!0}}],attrs:{variant:"primary"}},[t._v("Special Offers!")])],1),r("b-col",[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"open-cart-btn",attrs:{variant:"primary"}},[t._v("Shopping Cart: "+t._s(t.getCartItemsLength))])],1)],1),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-a"}},[r("b-card",{staticClass:"special-offers-cards"},[t._v("Buy one, get one free on apples!")])],1),r("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-b"}},[r("b-card",{staticClass:"special-offers-cards"},[t._v("3 for the price of 2 on oranges!")])],1),r("b-modal",{attrs:{id:"modal-1",size:"sm",title:"Cart"}},[t.getCartItemsLength>0?r("div",t._l(t.getShoppingCart,function(e,a){return r("div",{key:a},[t._v("\n          "+t._s(e.product.productName)+": "),r("span",{staticClass:"product-count"},[t._v(" "+t._s(e.product.count))]),r("div",{staticClass:"cart-btns"},[r("button",{staticClass:"in-cart-del-btn",attrs:{mb:"1"},on:{click:function(r){return t.decrementCart(e.product.productName,e.product.price)}}},[r("b",[t._v("-")])]),r("button",{staticClass:"in-cart-add-btn",on:{click:function(r){return t.incrementCart(e.product.productName,e.product.price)}}},[r("b",[t._v("+")])])])])}),0):t._e(),t.getCartItemsLength<1?r("div",[r("p",[t._v("Take a look around the Shop!")])]):t._e(),r("hr"),r("p",[t._v("Sub Total: "),r("span",{staticClass:"product-totals"},[t._v(t._s(t.getSubTotal))])]),r("p",[t._v("Tax: "),r("span",{staticClass:"product-totals"},[t._v(t._s(t.getTax))])]),r("p",[r("b",[t._v("Order Total:")]),r("span",{staticClass:"product-totals"},[r("b",[t._v(t._s(t.getOrderTotal))])])]),r("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[r("p",{staticClass:"float-left"}),r("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{checkout:function(e){t.show=!1}}},[t._v("\n        Checkout\n      ")])],1)])],1),r("b-row",t._l(t.allProducts,function(e){return r("b-col",{key:e._id,attrs:{cols:"6",md:"4"}},[r("b-card-group",{staticClass:"mb-3",attrs:{deck:""}},[r("b-card",{staticClass:"text-center cards",attrs:{header:""+e.productName}},[r("p",{staticClass:"price"},[t._v("Price: "+t._s(t.formatPrices(e.price)))]),r("hr"),r("b-card-text",[t._v(t._s(e.description))]),r("b-button",{staticClass:"add-cart-btn",attrs:{variant:"success"},on:{click:function(r){return t.incrementCart(e.productName,e.price,e._id)}}},[t._v("Add to Cart!")])],1)],1)],1)}),1)],1)],1)},f=[],v=(r("6b54"),r("db72")),b=r("2f62"),g={name:"Products",data:function(){return{cart:null,cartArrays:[]}},methods:Object(v["a"])({},Object(b["b"])(["fetchProducts","addProductToCart","removeProductFromCart"]),{formatPrices:function(t){try{var e,r=t.toString(),a=r.indexOf(".");return e=-1==a?r+".00":"."==r[r.length-2]?r+"0":r,"$ "+e}catch(o){}},incrementCart:function(t,e,r){var a={productName:t,price:e,id:r};this.addProductToCart(a)},decrementCart:function(t,e){var r={productName:t,price:e};this.removeProductFromCart(r)}}),computed:Object(v["a"])({},Object(b["c"])(["allProducts","getSubTotal","getTax","getOrderTotal","getShoppingCart","getCartItemsLength"]),{},Object(b["d"])(["products","cartArray","typeOfProductCountInCart"])),created:function(){this.fetchProducts()}},C=g,h=(r("aa47"),Object(s["a"])(C,m,f,!1,null,"4ae63694",null)),_=h.exports,P={name:"home",components:{Products:_}},y=P,S=Object(s["a"])(y,p,l,!1,null,null,null),O=S.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"adminPage"},[r("FormSubmit")],1)},x=[],D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Add Product")]),r("div",{staticClass:"products-list"},[r("form",{on:{submit:t.onSubmit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.productName,expression:"formData.productName"}],staticClass:"input-field",attrs:{type:"text",required:"",placeholder:"Product name..."},domProps:{value:t.formData.productName},on:{input:function(e){e.target.composing||t.$set(t.formData,"productName",e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.price,expression:"formData.price"}],staticClass:"input-field",attrs:{type:"number",step:"0.01",required:"",placeholder:"Price..."},domProps:{value:t.formData.price},on:{input:function(e){e.target.composing||t.$set(t.formData,"price",e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.description,expression:"formData.description"}],staticClass:"input-field",attrs:{type:"text",required:"",placeholder:"Description..."},domProps:{value:t.formData.description},on:{input:function(e){e.target.composing||t.$set(t.formData,"description",e.target.value)}}}),r("br"),r("b-button",{attrs:{type:"submit",value:"Submit",variant:"success"}},[t._v("Submit")]),r("div",{staticClass:"error-handler-div",class:{success:t.getRequestStatus,error:!t.getRequestStatus}},[t.getRequestStatus?r("span",{staticClass:"err-symbol"},[r("b",[t._v("✔")])]):t._e(),!1===t.getRequestStatus?r("span",{staticClass:"err-symbol"},[r("b",[t._v(" X ")])]):t._e(),r("span",[t._v(" "+t._s(t.successOrErrorHandler))])])],1)]),r("h1",[t._v("Delete Product")]),r("div",{staticClass:"products-list"},[r("form",{on:{submit:t.onSubmit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.productName,expression:"formData.productName"}],staticClass:"input-field",attrs:{type:"text",required:"",placeholder:"Product name..."},domProps:{value:t.formData.productName},on:{input:function(e){e.target.composing||t.$set(t.formData,"productName",e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.price,expression:"formData.price"}],staticClass:"input-field",attrs:{type:"number",step:"0.01",required:"",placeholder:"Price..."},domProps:{value:t.formData.price},on:{input:function(e){e.target.composing||t.$set(t.formData,"price",e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.description,expression:"formData.description"}],staticClass:"input-field",attrs:{type:"text",required:"",placeholder:"Description..."},domProps:{value:t.formData.description},on:{input:function(e){e.target.composing||t.$set(t.formData,"description",e.target.value)}}}),r("br"),r("b-button",{attrs:{type:"submit",value:"Submit",variant:"success"}},[t._v("Submit")]),r("div",{staticClass:"error-handler-div",class:{success:t.getRequestStatus,error:!t.getRequestStatus}},[t.getRequestStatus?r("span",{staticClass:"err-symbol"},[r("b",[t._v("✔")])]):t._e(),!1===t.getRequestStatus?r("span",{staticClass:"err-symbol"},[r("b",[t._v(" X ")])]):t._e(),r("span",[t._v(" "+t._s(t.successOrErrorHandler))])])],1)]),r("h1",[t._v("Activate Promotions")]),r("div",{staticClass:"products-list"},[r("form",{on:{submit:t.onSubmit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.productName,expression:"formData.productName"}],staticClass:"input-field",attrs:{type:"text",required:"",placeholder:"Product name..."},domProps:{value:t.formData.productName},on:{input:function(e){e.target.composing||t.$set(t.formData,"productName",e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.price,expression:"formData.price"}],staticClass:"input-field",attrs:{type:"number",step:"0.01",required:"",placeholder:"Price..."},domProps:{value:t.formData.price},on:{input:function(e){e.target.composing||t.$set(t.formData,"price",e.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.description,expression:"formData.description"}],staticClass:"input-field",attrs:{type:"text",required:"",placeholder:"Description..."},domProps:{value:t.formData.description},on:{input:function(e){e.target.composing||t.$set(t.formData,"description",e.target.value)}}}),r("br"),r("b-button",{attrs:{type:"submit",value:"Submit",variant:"success"}},[t._v("Submit")]),r("div",{staticClass:"error-handler-div",class:{success:t.getRequestStatus,error:!t.getRequestStatus}},[t.getRequestStatus?r("span",{staticClass:"err-symbol"},[r("b",[t._v("✔")])]):t._e(),!1===t.getRequestStatus?r("span",{staticClass:"err-symbol"},[r("b",[t._v(" X ")])]):t._e(),r("span",[t._v(" "+t._s(t.successOrErrorHandler))])])],1)])])},w=[],q={name:"FormSubmit",data:function(){return{formData:{productName:"",price:"",description:""}}},methods:Object(v["a"])({},Object(b["b"])(["addProduct"]),{onSubmit:function(t){t.preventDefault();var e=this.formData;this.addProduct(e)}}),computed:Object(v["a"])({},Object(b["c"])(["getErrorMsg","getRequestStatus"]),{successOrErrorHandler:function(){return this.getRequestStatus?"Product Added!":0==this.getRequestStatus?this.getErrorMsg:""}}),mounted:function(){}},$=q,j=(r("b24d"),Object(s["a"])($,D,w,!1,null,"07baa4f0",null)),T=j.exports,I={name:"adminPage",components:{FormSubmit:T}},R=I,k=Object(s["a"])(R,N,x,!1,null,null,null),E=k.exports;a["default"].use(d["a"]);var A=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O},{path:"/admin-page",name:"admin-page",component:E}]}),M={initializeState:!0,products:[],errorMsg:"",requestStatus:null,cartArray:[],typeOfProductCountInCart:[],totalCost:0},F=(r("96cf"),r("3b8d")),H=r("bc3a"),L=r.n(H),z={fetchProducts:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(e){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,L.a.get("api/products");case 3:a=t.sent,r("setProducts",a.data);case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),addProduct:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(e,r){var a,o,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,L.a.post("api/product",r);case 4:o=t.sent,a("newProduct",o.data),t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](1),n={errMsg:"Product name already in use.",err:t.t0},a("sendError",n.errMsg),console.error(n);case 13:case"end":return t.stop()}},t,null,[[1,8]])}));function e(e,r){return t.apply(this,arguments)}return e}(),addProductToCart:function(t,e){var r=t.commit;r("pushProductToCart",e)},removeProductFromCart:function(t,e){var r=t.commit;r("removeFromCart",e)}},X=(r("20d6"),r("ac6a"),{setProducts:function(t,e){if(e.forEach(function(t){var e=t.productName;t.productName=e[0].toUpperCase()+e.substring(1,e.length)}),t.initializeState){for(var r=0;r<e.length;r++)t.typeOfProductCountInCart.push({product:{productName:e[r].productName,count:0,inCart:!1,price:e[r].price}});console.log(t.typeOfProductCountInCart)}t.initializeState=!1,t.products=e},newProduct:function(t,e){setTimeout(function(){return t.requestStatus=null},1500);var r=e.productName[0].toUpperCase()+e.productName.substring(1,e.productName.length);t.typeOfProductCountInCart.push({product:{productName:r,count:0,inCart:!1,price:e.price}}),t.requestStatus=!0,t.errorMsg="",t.products.push(e)},sendError:function(t,e){t.requestStatus=!1,t.errorMsg=e,setTimeout(function(){return t.requestStatus=null},2e3)},pushProductToCart:function(t,e){t.cartArray.push(e.productName);var r=t.typeOfProductCountInCart.findIndex(function(t){return t.product.productName==e.productName});t.typeOfProductCountInCart[r].product.count+=1,t.typeOfProductCountInCart[r].product.inCart=!0,t.totalCost+=e.price,console.log(t.typeOfProductCountInCart),console.log(t.cartArray)},removeFromCart:function(t,e){var r=t.cartArray.indexOf(e.productName);t.cartArray.splice(r,1);var a=t.typeOfProductCountInCart.findIndex(function(t){return t.product.productName==e.productName});t.typeOfProductCountInCart[a].product.count-=1,0==t.typeOfProductCountInCart[a].product.count&&(t.typeOfProductCountInCart[a].product.inCart=!1),t.totalCost-=e.price}}),J={allProducts:function(t){return t.products},getErrorMsg:function(t){return t.errorMsg},getRequestStatus:function(t){return t.requestStatus},getTotalCheckout:function(t){t.cartArray.forEach()},getShoppingCart:function(t){return t.typeOfProductCountInCart.filter(function(t){return 1==t.product.inCart})},getCartItemsLength:function(t){return t.cartArray.length},getSubTotal:function(t){var e="$".concat(t.totalCost.toFixed(2));return"$-0.00"==e?"$0.00":e},getTax:function(t){var e=.075*t.totalCost,r="$".concat(e.toFixed(2));return"$-0.00"==r?"$0.00":r},getOrderTotal:function(t){var e=.075*t.totalCost,r=e+t.totalCost,a="$".concat(r.toFixed(2));return"$-0.00"==a?"$0.00":a}};a["default"].use(b["a"]);var U=new b["a"].Store({state:M,mutations:X,actions:z,getters:J}),B=r("5f5b");r("f9e3"),r("2dd8");a["default"].use(B["a"]),a["default"].config.productionTip=!1,new a["default"]({router:A,store:U,render:function(t){return t(i)}}).$mount("#app")},"5aa6":function(t,e,r){},"5c0b":function(t,e,r){"use strict";var a=r("5e27"),o=r.n(a);o.a},"5e27":function(t,e,r){},aa47:function(t,e,r){"use strict";var a=r("5aa6"),o=r.n(a);o.a},b24d:function(t,e,r){"use strict";var a=r("41bd"),o=r.n(a);o.a}});
//# sourceMappingURL=app.ec82fca3.js.map