webpackJsonp([0],{21:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(69),l=n(e);t.default={methods:{clickMe:function(){alert("点击演示")},submitMe:function(s){alert(s.target.type)}},components:{Buttons:l.default}}},22:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(67),l=n(e);t.default={components:{README:l.default}}},23:function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{type:{type:String,default:""},htmlType:{type:String,default:"button"},disabled:{type:Boolean,default:!1},size:{type:String,default:""}},computed:{btnSize:function(){var s=["small","large","mini"];return this.size&&~s.indexOf(this.size)?"ui-button--"+this.size:""},btnType:function(){var s=["success","loading","info","warning","primary","danger"];return this.type&&~s.indexOf(this.type)?"ui-button--"+this.type:""},btnClass:function(){return["ui-button",this.btnSize,this.btnType]}},methods:{click:function(s){this.$emit("click",s)}}}},53:function(s,t,a){t=s.exports=a(54)(),t.push([s.id,".ui-button,.ui-button--default{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #c0ccda;color:#1f2d3d;text-align:center;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:10px 15px;font-size:14px;border-radius:4px}.ui-button--default:hover,.ui-button:hover{color:#20a0ff;border-color:#20a0ff}.ui-button--large{padding:11px 19px;font-size:16px;border-radius:4px}.ui-button--small{padding:7px 9px;font-size:12px;border-radius:4px}.ui-button--mini{padding:4px 6px;font-size:12px;border-radius:3px}.ui-button--primary{color:#fff;background-color:#20a0ff;border-color:#20a0ff}.ui-button--primary:hover{background:#4db3ff;border-color:#4db3ff;color:#fff}.ui-button--success{color:#fff;background-color:#13ce66;border-color:#13ce66}.ui-button--success:hover{background:#42d885;border-color:#42d885;color:#fff}.ui-button--warning{color:#fff;background-color:#f7ba2a;border-color:#f7ba2a}.ui-button--warning:hover{background:#f9c855;border-color:#f9c855;color:#fff}.ui-button--danger{color:#fff;background-color:#ff4949;border-color:#ff4949}.ui-button--danger:hover{background:#ff6d6d;border-color:#ff6d6d;color:#fff}.ui-button--info{color:#fff;background-color:#50bfff;border-color:#50bfff}.ui-button--info:hover,.ui-button--loading,.ui-button--loading:hover{background:#73ccff;border-color:#73ccff;color:#fff}.ui-button--loading,.ui-button--loading:hover{cursor:default}.ui-button[disabled],.ui-button[disabled]:hover{background-color:#fff;border-color:#d3dce6;color:#c0ccda;cursor:not-allowed}",""])},57:function(s,t,a){var n=a(53);"string"==typeof n&&(n=[[s.id,n,""]]),n.locals&&(s.exports=n.locals);a(77)("26bf792e",n,!0)},67:function(s,t,a){var n,e;n=a(21);var l=a(71);e=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(e=n=n.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,s.exports=n},68:function(s,t,a){var n,e;n=a(22);var l=a(70);e=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(e=n=n.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,s.exports=n},69:function(s,t,a){var n,e;a(57),n=a(23);var l=a(73);e=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(e=n=n.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,s.exports=n},70:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("Layout",[a("README")],1)},staticRenderFns:[]}},71:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",{attrs:{id:"vt-button"}},[s._v("vt-button")]),s._v(" "),a("p",[s._v("基于 vue 2 封装出的 button 组件，提供了基本的样式和事件。")]),s._v(" "),a("h2",{attrs:{id:"install"}},[s._v("Install")]),s._v(" "),s._m(0),a("h2",{attrs:{id:"usage"}},[s._v("Usage")]),s._v(" "),[a("Buttons",{on:{click:s.clickMe}},[s._v("click")]),s._v(" "),a("Buttons",{attrs:{disabled:""}},[s._v("disabled")]),s._v(" "),a("Buttons",{attrs:{"html-type":"submit"},on:{click:s.submitMe}},[s._v("submit")]),s._v(" "),a("Buttons",{attrs:{size:"small"}},[s._v("small")]),s._v(" "),a("hr"),s._v(" "),a("Buttons",{attrs:{type:"primary"}},[s._v("primary")]),s._v(" "),a("Buttons",{attrs:{type:"success"}},[s._v("success")]),s._v(" "),a("Buttons",{attrs:{type:"loading"}},[s._v("loading")]),s._v(" "),a("Buttons",{attrs:{type:"warning"}},[s._v("warning")]),s._v(" "),a("Buttons",{attrs:{type:"info"}},[s._v("info")]),s._v(" "),a("Buttons",{attrs:{type:"danger"}},[s._v("danger")])],s._v(" "),s._m(1),a("h2",{attrs:{id:"interface"}},[s._v("Interface")]),s._v(" "),a("vue-doc-tabs",{attrs:{data:{props:{type:{type:"String",default:"",description:"按钮的类型，可选值: <code>primary</code>，<code>success</code>，<code>loading</code>，<code>warning</code>，<code>info</code>，<code>danger</code>"},disabled:{type:"Boolean",default:!1,description:"是否置灰按钮"},size:{type:"String",default:"",description:"按钮的大小，可选值: <code>small</code>，<code>large</code> 和 <code>mini</code>"},htmlType:{type:"String",default:"button",description:"按钮原生的 Type 值，可选值: <code>button</code>，<code>submit</code> 和 <code>reset</code>"}},slots:{default:{description:"按钮文字"}},events:{click:{description:"按钮点击事件，在移动端有 300ms 延迟"}}}}})],2)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"lang-javascript"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("npm")]),s._v(" i vt-button -S\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Buttons "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vt-button'")]),s._v("\n\n"),a("span",{staticClass:"hljs-regexp"},[s._v("//")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("global")]),s._v(" install\nVue.component("),a("span",{staticClass:"hljs-string"},[s._v("'Buttons'")]),s._v(", Buttons)\n\n"),a("span",{staticClass:"hljs-regexp"},[s._v("//")]),s._v(" scope install\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    components: {\n        Buttons\n    }\n}")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"lang-example"},[a("code",[a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"clickMe"')]),s._v(">")]),s._v("click"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(">")]),s._v("disabled"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("html-type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"submit"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"submitMe"')]),s._v(">")]),s._v("submit"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v(">")]),s._v("small"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("hr")]),s._v(" />")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("primary"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(">")]),s._v("success"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"loading"')]),s._v(">")]),s._v("loading"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warning"')]),s._v(">")]),s._v("warning"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"info"')]),s._v(">")]),s._v("info"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"danger"')]),s._v(">")]),s._v("danger"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Buttons")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Buttons "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'src'")]),s._v("\n\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" ")])]),a("span",{staticClass:"hljs-template-variable"},[s._v("{\n        methods: {\n            clickMe() {\n                alert('点击演示')\n            }")]),a("span",{staticClass:"xml"},[a("span",{staticClass:"undefined"},[s._v(",\n            submitMe(event) ")])]),a("span",{staticClass:"hljs-template-variable"},[s._v("{\n                alert(event.target.type)\n            }")]),a("span",{staticClass:"xml"},[a("span",{staticClass:"undefined"},[s._v("\n        },\n        components: ")])]),a("span",{staticClass:"hljs-template-variable"},[s._v("{\n            Buttons\n        }")]),a("span",{staticClass:"xml"},[a("span",{staticClass:"undefined"},[s._v("\n    }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])])])])}]}},73:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("button",{class:s.btnClass,attrs:{disabled:s.disabled,type:s.htmlType},on:{click:s.click}},[s._t("default")],2)},staticRenderFns:[]}}});