(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"3aef":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-btn",{attrs:{color:"primary",label:"Menu",flat:""},on:{click:e.menuClicked}}),n("div",[n("q-menu",{model:{value:e.showMenu,callback:function(t){e.showMenu=t},expression:"showMenu"}},[n("q-list",{staticStyle:{"min-width":"100px"}},e._l(e.menuData,(function(t){return n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:t.key,attrs:{clickable:"",dense:""},on:{click:function(e){!0===t.state?t.off.func():t.on.func()}}},[n("q-item-section",{attrs:{"no-wrap":""}},[e._v("\n            "+e._s(!0===t.state?t.off.label:t.on.label)+"\n          ")]),n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:!0===t.state?t.off.icon:t.on.icon}})],1)],1)})),1)],1)],1),n("q-window",{ref:"window",attrs:{"no-menu":"",title:"QWindow No Menu","start-x":100,"start-y":100,height:150,width:350,actions:["embedded","pin","fullscreen"],embedded:"","content-class":"bg-grey-1"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("div",{staticClass:"q-pa-md fit"},[e._v('\n      This is the "default" slot content\n    ')])])],1)},a=[],s={data:function(){return{visible:!0,showMenu:!1,menuData:[]}},methods:{menuClicked:function(){this.menuData=this.$refs.window.computedMenuData,this.showMenu=!0}}},o=s,l=n("2877"),c=Object(l["a"])(o,i,a,!1,null,null,null);t["default"]=c.exports}}]);