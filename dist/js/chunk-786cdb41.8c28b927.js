(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-786cdb41"],{37906:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"title"},[e._v("Search Page")]),a("b-input-group",{attrs:{prepend:"Search Query:",id:"search-input"}},[a("b-form-input",{model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),!0===e.positionFlag?a("b-form-input",{attrs:{placeholder:"Position Number"},model:{value:e.position,callback:function(t){e.position=t},expression:"position"}},[a("b-input-group-append",[a("b-button",{attrs:{variant:"success"},on:{click:function(t){return e.simpleSearchPlayer()}}},[e._v("Search")])],1)],1):e._e(),a("b-input-group-append",[a("b-button",{attrs:{variant:"success"},on:{click:function(t){return e.startSearch()}}},[e._v("Search")])],1)],1),a("br"),e._v(" Your search Query: "+e._s(e.searchQuery)+" "),a("br"),e.teamsearch?e._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"postion",value:"position"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"position")>-1:e.checkedNames},on:{change:function(t){var a=e.checkedNames,r=t.target,s=!!r.checked;if(Array.isArray(a)){var c="position",n=e._i(a,c);r.checked?n<0&&(e.checkedNames=a.concat([c])):n>-1&&(e.checkedNames=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedNames=s}}}),a("label",{attrs:{for:"jack"}},[e._v("Filter By position")]),e.teamsearch?e._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"player",value:"player"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"player")>-1:e.checkedNames},on:{change:function(t){var a=e.checkedNames,r=t.target,s=!!r.checked;if(Array.isArray(a)){var c="player",n=e._i(a,c);r.checked?n<0&&(e.checkedNames=a.concat([c])):n>-1&&(e.checkedNames=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedNames=s}}}),e.teamsearch?e._e():a("label",{attrs:{for:"jack"}},[e._v("Search player__")]),e.playersearch?e._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"team",value:"team"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"team")>-1:e.checkedNames},on:{change:function(t){var a=e.checkedNames,r=t.target,s=!!r.checked;if(Array.isArray(a)){var c="team",n=e._i(a,c);r.checked?n<0&&(e.checkedNames=a.concat([c])):n>-1&&(e.checkedNames=a.slice(0,n).concat(a.slice(n+1)))}else e.checkedNames=s}}}),a("label",{attrs:{for:"john"}},[e._v("Search Team")]),a("br"),a("span",[e._v("Checked names: "+e._s(e.checkedNames))]),e._l(e.searchResult,(function(e){return a("span",{key:e},[a("PlayerPreview",{attrs:{propObj:e}})],1)})),a("TeamPreview",{attrs:{propObj:e.results}})],2)},s=[],c=a("1da1"),n=(a("96cf"),a("b0c0"),a("7db0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("b-card",{staticStyle:{"max-width":"20rem"},attrs:{"no-body":"","img-alt":"Image","img-top":""},scopedSlots:e._u([{key:"header",fn:function(){return[a("h4",{staticClass:"mb-0"},[e._v(e._s(e.propObj.name))])]},proxy:!0}])},[a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[e._v(" "+e._s(e.propObj.position)+" ")]),a("br"),a("b-list-group-item",[e._v(" "+e._s(e.propObj.team_name)+" ")]),a("br"),a("img",{attrs:{src:e.get_image()}}),a("br")],1)],1)],1)}),o=[],i={name:"PlayerPreview",props:{propObj:{type:Object,required:!1,default:function(){return{message:"hello"}}}},methods:{get_image:function(){return void 0!=this.propObj.image?this.propObj.image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png"}}},u=i,l=(a("dea1"),a("2877")),h=Object(l["a"])(u,n,o,!1,null,"a2e769f6",null),m=h.exports,p={components:{PlayerPreview:m},data:function(){return{searchQuery:"",checkedNames:[],positionFlag:!1,playersearch:!1,teamFlag:!1,teamsearch:!1,searchTeamFlag:!1,position:0,teamname:"",results:Object,status:0}},methods:{simpleSearchPlayer:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r=[t.searchQuery,t.position,t.teamname],console.log(r),s={name:t.searchQuery},a.next=6,t.axios.get("http://localhost:3000/guest/Search/player/".concat(s.name));case 6:e=a.sent,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("server:"+a.t0.response);case 12:t.status=e.status,console.log(t.status),console.log(e),t.results=e.data;case 16:case"end":return a.stop()}}),a,null,[[0,9]])})))()},filterByPosition:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r=[t.searchQuery,t.position,t.teamname],console.log(r),s={name:t.searchQuery,position:t.position,teamname:t.teamname},a.next=6,t.axios.get("http://localhost:3000/guest/Search/filyer/filter/".concat((s.name,s.position,s.teamname)));case 6:e=a.sent,a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("server:"+a.t0.response),console.log(e);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()},searchTeam:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r=[t.searchQuery],console.log(r),s={name:t.searchQuery},a.next=6,t.axios.get("http://localhost:3000/guest/Search/team/".concat(s.name));case 6:e=a.sent,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log("server:"+a.t0.response);case 12:t.status=e.status,console.log(t.status),console.log(e),t.results=e.data;case 16:case"end":return a.stop()}}),a,null,[[0,9]])})))()},startSearch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!playersearch){t.next=10;break}if(positionFlag||teamFlag){t.next=6;break}return t.next=4,e.simpleSearchPlayer();case 4:t.next=8;break;case 6:return t.next=8,e.filterByPosition();case 8:t.next=13;break;case 10:if(!searchTeam){t.next=13;break}return t.next=13,e.searchTeam();case 13:case"end":return t.stop()}}),t)})))()}},computed:{searchResult:function(){return 200===this.status?this.results:[]}},updated:function(){this.checkedNames.find((function(e){return"position"===e}))?this.positionFlag=!0:this.positionFlag=!1,this.checkedNames.find((function(e){return"player"===e}))?(this.playersearch=!0,this.positionFlag=!1,this.teamsearch=!1):this.playersearch=!1,this.checkedNames.find((function(e){return"team"===e}))?(this.playersearch=!1,this.positionFlag=!1,this.teamsearch=!0):this.teamsearch=!1}},d=p,f=(a("ed10"),Object(l["a"])(d,r,s,!1,null,"5c0a44d4",null));t["default"]=f.exports},"7db0":function(e,t,a){"use strict";var r=a("23e7"),s=a("b727").find,c=a("44d2"),n="find",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),c(n)},"7fcd":function(e,t,a){},9901:function(e,t,a){},b0c0:function(e,t,a){var r=a("83ab"),s=a("9bf2").f,c=Function.prototype,n=c.toString,o=/^\s*function ([^ (]*)/,i="name";r&&!(i in c)&&s(c,i,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(e){return""}}})},dea1:function(e,t,a){"use strict";a("7fcd")},ed10:function(e,t,a){"use strict";a("9901")}}]);
//# sourceMappingURL=chunk-786cdb41.8c28b927.js.map