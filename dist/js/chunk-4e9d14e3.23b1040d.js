(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e9d14e3"],{"057f":function(e,a,r){var t=r("fc6a"),n=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(a){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?s(e):n(t(e))}},"1dde":function(e,a,r){var t=r("d039"),n=r("b622"),o=r("2d00"),i=n("species");e.exports=function(e){return o>=51||!t((function(){var a=[],r=a.constructor={};return r[i]=function(){return{foo:1}},1!==a[e](Boolean).foo}))}},"1f22":function(e,a,r){"use strict";r("74d5")},"277d":function(e,a,r){var t=r("23e7"),n=r("e8b5");t({target:"Array",stat:!0},{isArray:n})},"4df4":function(e,a,r){"use strict";var t=r("0366"),n=r("7b0b"),o=r("9bdd"),i=r("e95a"),s=r("50c4"),u=r("8418"),l=r("35a1");e.exports=function(e){var a,r,c,d,f,m,b=n(e),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,y=l(b),w=0;if(g&&(h=t(h,v>2?arguments[2]:void 0,2)),void 0==y||p==Array&&i(y))for(a=s(b.length),r=new p(a);a>w;w++)m=g?h(b[w],w):b[w],u(r,w,m);else for(d=y.call(b),f=d.next,r=new p;!(c=f.call(d)).done;w++)m=g?o(d,h,[c.value,w],!0):c.value,u(r,w,m);return r.length=w,r}},"746f":function(e,a,r){var t=r("428f"),n=r("5135"),o=r("e538"),i=r("9bf2").f;e.exports=function(e){var a=t.Symbol||(t.Symbol={});n(a,e)||i(a,e,{value:o.f(e)})}},"74d5":function(e,a,r){},8418:function(e,a,r){"use strict";var t=r("c04e"),n=r("9bf2"),o=r("5c6c");e.exports=function(e,a,r){var i=t(a);i in e?n.f(e,i,o(0,r)):e[i]=r}},"9bdd":function(e,a,r){var t=r("825a"),n=r("2a62");e.exports=function(e,a,r,o){try{return o?a(t(r)[0],r[1]):a(r)}catch(i){throw n(e),i}}},a4d3:function(e,a,r){"use strict";var t=r("23e7"),n=r("da84"),o=r("d066"),i=r("c430"),s=r("83ab"),u=r("4930"),l=r("fdbf"),c=r("d039"),d=r("5135"),f=r("e8b5"),m=r("861d"),b=r("825a"),p=r("7b0b"),v=r("fc6a"),h=r("c04e"),g=r("5c6c"),y=r("7c73"),w=r("df75"),S=r("241c"),$=r("057f"),P=r("7418"),k=r("06cf"),A=r("9bf2"),C=r("d1e7"),I=r("9112"),M=r("6eeb"),R=r("5692"),O=r("f772"),_=r("d012"),B=r("90e3"),x=r("b622"),N=r("e538"),j=r("746f"),q=r("d44e"),T=r("69f3"),G=r("b727").forEach,E=O("hidden"),L="Symbol",F="prototype",U=x("toPrimitive"),z=T.set,D=T.getterFor(L),K=Object[F],H=n.Symbol,J=o("JSON","stringify"),V=k.f,Y=A.f,W=$.f,Z=C.f,Q=R("symbols"),X=R("op-symbols"),ee=R("string-to-symbol-registry"),ae=R("symbol-to-string-registry"),re=R("wks"),te=n.QObject,ne=!te||!te[F]||!te[F].findChild,oe=s&&c((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,a,r){var t=V(K,a);t&&delete K[a],Y(e,a,r),t&&e!==K&&Y(K,a,t)}:Y,ie=function(e,a){var r=Q[e]=y(H[F]);return z(r,{type:L,tag:e,description:a}),s||(r.description=a),r},se=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof H},ue=function(e,a,r){e===K&&ue(X,a,r),b(e);var t=h(a,!0);return b(r),d(Q,t)?(r.enumerable?(d(e,E)&&e[E][t]&&(e[E][t]=!1),r=y(r,{enumerable:g(0,!1)})):(d(e,E)||Y(e,E,g(1,{})),e[E][t]=!0),oe(e,t,r)):Y(e,t,r)},le=function(e,a){b(e);var r=v(a),t=w(r).concat(be(r));return G(t,(function(a){s&&!de.call(r,a)||ue(e,a,r[a])})),e},ce=function(e,a){return void 0===a?y(e):le(y(e),a)},de=function(e){var a=h(e,!0),r=Z.call(this,a);return!(this===K&&d(Q,a)&&!d(X,a))&&(!(r||!d(this,a)||!d(Q,a)||d(this,E)&&this[E][a])||r)},fe=function(e,a){var r=v(e),t=h(a,!0);if(r!==K||!d(Q,t)||d(X,t)){var n=V(r,t);return!n||!d(Q,t)||d(r,E)&&r[E][t]||(n.enumerable=!0),n}},me=function(e){var a=W(v(e)),r=[];return G(a,(function(e){d(Q,e)||d(_,e)||r.push(e)})),r},be=function(e){var a=e===K,r=W(a?X:v(e)),t=[];return G(r,(function(e){!d(Q,e)||a&&!d(K,e)||t.push(Q[e])})),t};if(u||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,a=B(e),r=function(e){this===K&&r.call(X,e),d(this,E)&&d(this[E],a)&&(this[E][a]=!1),oe(this,a,g(1,e))};return s&&ne&&oe(K,a,{configurable:!0,set:r}),ie(a,e)},M(H[F],"toString",(function(){return D(this).tag})),M(H,"withoutSetter",(function(e){return ie(B(e),e)})),C.f=de,A.f=ue,k.f=fe,S.f=$.f=me,P.f=be,N.f=function(e){return ie(x(e),e)},s&&(Y(H[F],"description",{configurable:!0,get:function(){return D(this).description}}),i||M(K,"propertyIsEnumerable",de,{unsafe:!0}))),t({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:H}),G(w(re),(function(e){j(e)})),t({target:L,stat:!0,forced:!u},{for:function(e){var a=String(e);if(d(ee,a))return ee[a];var r=H(a);return ee[a]=r,ae[r]=a,r},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(d(ae,e))return ae[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),t({target:"Object",stat:!0,forced:!u,sham:!s},{create:ce,defineProperty:ue,defineProperties:le,getOwnPropertyDescriptor:fe}),t({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:me,getOwnPropertySymbols:be}),t({target:"Object",stat:!0,forced:c((function(){P.f(1)}))},{getOwnPropertySymbols:function(e){return P.f(p(e))}}),J){var pe=!u||c((function(){var e=H();return"[null]"!=J([e])||"{}"!=J({a:e})||"{}"!=J(Object(e))}));t({target:"JSON",stat:!0,forced:pe},{stringify:function(e,a,r){var t,n=[e],o=1;while(arguments.length>o)n.push(arguments[o++]);if(t=a,(m(a)||void 0!==e)&&!se(e))return f(a)||(a=function(e,a){if("function"==typeof t&&(a=t.call(this,e,a)),!se(a))return a}),n[1]=a,J.apply(null,n)}})}H[F][U]||I(H[F],U,H[F].valueOf),q(H,L),_[E]=!0},a630:function(e,a,r){var t=r("23e7"),n=r("4df4"),o=r("1c7e"),i=!o((function(e){Array.from(e)}));t({target:"Array",stat:!0,forced:i},{from:n})},b0c0:function(e,a,r){var t=r("83ab"),n=r("9bf2").f,o=Function.prototype,i=o.toString,s=/^\s*function ([^ (]*)/,u="name";t&&!(u in o)&&n(o,u,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},d28b:function(e,a,r){var t=r("746f");t("iterator")},e01a:function(e,a,r){"use strict";var t=r("23e7"),n=r("83ab"),o=r("da84"),i=r("5135"),s=r("861d"),u=r("9bf2").f,l=r("e893"),c=o.Symbol;if(n&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),a=this instanceof f?new c(e):void 0===e?c():c(e);return""===e&&(d[a]=!0),a};l(f,c);var m=f.prototype=c.prototype;m.constructor=f;var b=m.toString,p="Symbol(test)"==String(c("test")),v=/^Symbol\((.*)\)[^)]+$/;u(m,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,a=b.call(e);if(i(d,e))return"";var r=p?a.slice(7,-1):a.replace(v,"$1");return""===r?void 0:r}}),t({global:!0,forced:!0},{Symbol:f})}},e538:function(e,a,r){var t=r("b622");a.f=t},eaff:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Register")]),r("b-form",{on:{submit:function(a){return a.preventDefault(),e.onRegister.apply(null,arguments)},reset:function(a){return a.preventDefault(),e.onReset.apply(null,arguments)}}},[e.token?r("h4",{staticClass:"alert"},[e._v("Username already used")]):e._e(),r("b-form-group",{attrs:{id:"input-group-username","label-cols-sm":"3",label:"Username:","label-for":"username"}},[r("b-form-input",{attrs:{id:"username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(a){e.$set(e.$v.form.username,"$model",a)},expression:"$v.form.username.$model"}}),e.$v.form.username.required?e.$v.form.username.length?e._e():r("b-form-invalid-feedback",[e._v(" Username length should be between 3-8 characters long ")]):r("b-form-invalid-feedback",[e._v(" Username is required ")]),e.$v.form.username.alpha?e._e():r("b-form-invalid-feedback",[e._v(" Username alpha ")])],1),r("b-form-group",{attrs:{id:"input-group-country","label-cols-sm":"3",label:"Country:","label-for":"country"}},[r("b-form-select",{attrs:{id:"country",options:e.countries,state:e.validateState("country")},model:{value:e.$v.form.country.$model,callback:function(a){e.$set(e.$v.form.country,"$model",a)},expression:"$v.form.country.$model"}}),r("b-form-invalid-feedback",[e._v(" Country is required ")])],1),r("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(a){e.$set(e.$v.form.password,"$model",a)},expression:"$v.form.password.$model"}}),e.$v.form.password.required?e.$v.form.password.$error?r("b-form-text",{attrs:{"text-variant":"info"}},[e._v(" Your password should be "),r("strong",[e._v("strong")]),e._v(". "),r("br"),e._v(" For that, your password should be also: ")]):e._e():r("b-form-invalid-feedback",[e._v(" Password is required ")]),e.$v.form.password.required&&!e.$v.form.password.length?r("b-form-invalid-feedback",[e._v(" Have length between 5-10 characters long ")]):e._e()],1),r("b-form-group",{attrs:{id:"input-group-confirmedPassword","label-cols-sm":"3",label:"Confirm Password:","label-for":"confirmedPassword"}},[r("b-form-input",{attrs:{id:"confirmedPassword",type:"password",state:e.validateState("confirmedPassword")},model:{value:e.$v.form.confirmedPassword.$model,callback:function(a){e.$set(e.$v.form.confirmedPassword,"$model",a)},expression:"$v.form.confirmedPassword.$model"}}),e.$v.form.confirmedPassword.required?e.$v.form.confirmedPassword.sameAsPassword?e._e():r("b-form-invalid-feedback",[e._v(" The confirmed password is not equal to the original password ")]):r("b-form-invalid-feedback",[e._v(" Password confirmation is required ")])],1),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")]),r("b-button",{staticClass:"ml-5 w-75",staticStyle:{width:"250px"},attrs:{type:"submit",variant:"primary"}},[e._v("Register")]),r("div",{staticClass:"mt-2"},[e._v(" You have an account already? "),r("router-link",{attrs:{to:"login"}},[e._v(" Log in here")])],1)],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Register failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},n=[],o=r("1da1");r("277d");function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var r=0,t=new Array(a);r<a;r++)t[r]=e[r];return t}function s(e){if(Array.isArray(e))return i(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function u(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0");function l(e,a){if(e){if("string"===typeof e)return i(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,a):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){return s(e)||u(e)||l(e)||c()}r("96cf");var f=["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","United States Minor Outlying Islands","Virgin Islands (British)","Virgin Islands (U.S.)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo (Democratic Republic of the)","Cook Islands","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Côte d'Ivoire","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia (the former Yugoslav Republic of)","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Korea (Democratic People's Republic of)","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of Kosovo","Réunion","Romania","Russian Federation","Rwanda","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Korea (Republic of)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],m=r("b5ae"),b={name:"Register",data:function(){return{token:!1,form:{username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:"",submitError:void 0},countries:[{value:null,text:"",disabled:!0}],errors:[],validated:!1}},validations:{form:{username:{required:m["required"],length:function(e){return Object(m["minLength"])(3)(e)&&Object(m["maxLength"])(8)(e)},alpha:m["alpha"]},firstname:{required:m["required"],alpha:m["alpha"]},country:{required:m["required"]},password:{required:m["required"],length:function(e){return Object(m["minLength"])(5)(e)&&Object(m["maxLength"])(10)(e)}},confirmedPassword:{required:m["required"],sameAsPassword:Object(m["sameAs"])("password")}}},mounted:function(){var e;(e=this.countries).push.apply(e,d(f))},methods:{validateState:function(e){var a=this.$v.form[e],r=a.$dirty,t=a.$error;return r?!t:null},Register:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.axios.post("http://localhost:3000/Register",{username:e.form.username,password:e.form.password});case 3:a.sent,e.$router.push("/login"),a.next=13;break;case 7:a.prev=7,a.t0=a["catch"](0),console.log(a.t0.response),409===a.t0.response.status&&(e.token=!0,console.log(e.token)),console.log(e.token),e.form.submitError=a.t0.response.data.message;case 13:case"end":return a.stop()}}),a,null,[[0,7]])})))()},onRegister:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Register()},onReset:function(){var e=this;this.token=!1,this.form={username:"",firstName:"",lastName:"",country:null,password:"",confirmedPassword:"",email:""},this.$nextTick((function(){e.$v.$reset()}))}}},p=b,v=(r("1f22"),r("2877")),h=Object(v["a"])(p,t,n,!1,null,"3474d07c",null);a["default"]=h.exports},fb6a:function(e,a,r){"use strict";var t=r("23e7"),n=r("861d"),o=r("e8b5"),i=r("23cb"),s=r("50c4"),u=r("fc6a"),l=r("8418"),c=r("b622"),d=r("1dde"),f=d("slice"),m=c("species"),b=[].slice,p=Math.max;t({target:"Array",proto:!0,forced:!f},{slice:function(e,a){var r,t,c,d=u(this),f=s(d.length),v=i(e,f),h=i(void 0===a?f:a,f);if(o(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(d,v,h);for(t=new(void 0===r?Array:r)(p(h-v,0)),c=0;v<h;v++,c++)v in d&&l(t,c,d[v]);return t.length=c,t}})}}]);
//# sourceMappingURL=chunk-4e9d14e3.23b1040d.js.map