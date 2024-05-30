/*! For license information please see src-components-filter-chips-filter-chip-filter-chip-stories.96c9f2f8.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[505],{"./libs/core/src/components/filter-chips/filter-chip/filter-chip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./dist/libs/core/src/components/filter-chips/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Filter Chips/Filter Chip",component:"gds-filter-chip",parameters:{layout:"centered",docs:{description:{component:"[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/filter-chips)\n&nbsp;|&nbsp;\n[Usage guidelines](https://designlibrary.sebgroup.com/components/component-filter-chip)\n\nThe filter chip is a sub-component of the filter chips component, and should generally not be used on its own."}}},tags:["autodocs"]};var Basic=Object.assign({},{parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerText:"Filter chip"}});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./dist/libs/core/src/chunks/chunk.5AYI6S6V.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_M5FNUZ66_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.M5FNUZ66.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),IconCheckmark=class extends _chunk_M5FNUZ66_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconCheckmark._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCheckmark._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',IconCheckmark._name="checkmark",IconCheckmark=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-checkmark")],IconCheckmark)},"./dist/libs/core/src/chunks/chunk.C3ECHGX7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});var dateConverter={fromAttribute:value=>new Date(value),toAttribute:value=>value.toISOString()},dateArrayConverter={fromAttribute:value=>value.split(",").map((d=>new Date(d.trim()))),toAttribute:value=>JSON.stringify(value.map((d=>d.toISOString())))},stringArrayConverter={fromAttribute:value=>value.split(","),toAttribute:value=>Array.isArray(value)?value.join(","):value}},"./dist/libs/core/src/chunks/chunk.L7I7KHQL.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject;__webpack_require__.d(__webpack_exports__,{q:()=>icon_style_css_default});var icon_style_css_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  @layer icon;\n\n  @layer icon {\n    :host {\n      display: contents;\n    }\n\n    :host(:not([width], [height])) {\n      & > svg {\n        height: 1lh;\n        width: auto;\n      }\n    }\n  }\n"])))},"./dist/libs/core/src/chunks/chunk.M5FNUZ66.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>GdsIcon});var _templateObject,_chunk_L7I7KHQL_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js");var GdsIcon=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__.j{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.label=""}render(){var svgContent='<svg\n      width="'.concat(this.width,'"\n      height="').concat(this.height,'"\n      viewBox="0 0 24 24"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n      ').concat(this.label?'aria-label="'.concat(this.label,'"'):'aria-label="'.concat(this.constructor._name,'"'),'\n      role="graphics-symbol"\n    >\n      ').concat(this.solid?this.constructor._solidSVG:this.constructor._regularSVG,"\n    </svg>");return(0,lit__WEBPACK_IMPORTED_MODULE_3__.qy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["",""])),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__._)(svgContent))}};GdsIcon.styles=[_chunk_L7I7KHQL_js__WEBPACK_IMPORTED_MODULE_0__.q],(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Number})],GdsIcon.prototype,"width",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Number})],GdsIcon.prototype,"height",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Boolean})],GdsIcon.prototype,"solid",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:String})],GdsIcon.prototype,"label",2)},"./dist/libs/core/src/chunks/chunk.VHN4JEZC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resizeObserver(){return(proto,propertyKey,descriptor)=>{var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((()=>{this.__resizeObserver_tids[propertyKey]&&clearTimeout(this.__resizeObserver_tids[propertyKey]),this.__resizeObserver_tids[propertyKey]=setTimeout((()=>{var _a;null==(_a=descriptor.value)||_a.call(this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}__webpack_require__.d(__webpack_exports__,{b:()=>resizeObserver})},"./dist/libs/core/src/components/filter-chips/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _templateObject,_templateObject2,chunk_VHN4JEZC=__webpack_require__("./dist/libs/core/src/chunks/chunk.VHN4JEZC.js"),chunk_C3ECHGX7=__webpack_require__("./dist/libs/core/src/chunks/chunk.C3ECHGX7.js"),chunk_MZSK66DN=__webpack_require__("./dist/libs/core/src/chunks/chunk.MZSK66DN.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _handleChipClick,_collapseThreshold,_collapsedAt,_getChipHeight,getChipHeight_fn,_handleSlotChange,handleSlotChange_fn,styles=(0,lit.AH)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host {\n      display: inline-block;\n      max-width: 100%;\n    }\n\n    .chips {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 0.5rem;\n    }\n\n    .collapse {\n      overflow: auto;\n      scroll-snap-type: both mandatory;\n      overscroll-behavior-x: contain;\n      flex-wrap: nowrap;\n      padding-bottom: 0.5rem;\n      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;\n      scrollbar-width: thin;\n    }\n\n    ::slotted(*) {\n      scroll-snap-align: start;\n      scroll-snap-stop: always;\n    }\n  }\n"]))),GdsFilterChips=class extends chunk_MZSK66DN.S{constructor(){super(...arguments),(0,chunk_5VURDMKE.VK)(this,_getChipHeight),(0,chunk_5VURDMKE.VK)(this,_handleSlotChange),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,(0,chunk_5VURDMKE.VK)(this,_handleChipClick,(event=>{var clickedChip=this.chips.find((s=>s===event.target||s.contains(event.target)));clickedChip&&(this.multiple&&Array.isArray(this.value)?clickedChip.selected?this.value=this.value.filter((v=>v!==clickedChip.value)):this.value=[...this.value,clickedChip.value]:this.value=clickedChip.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip,value:this.value},bubbles:!0,composed:!0})))})),(0,chunk_5VURDMKE.VK)(this,_collapseThreshold,3),(0,chunk_5VURDMKE.VK)(this,_collapsedAt,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){var layoutClasses={collapse:this._collapsed};return(0,chunk_VOYMQ322.qy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<div\n      class="chips ','"\n      role="listbox"\n      aria-label=',"\n      aria-multiselectable=",'\n    >\n      <slot\n        gds-allow="gds-filter-chip"\n        @click=',"\n        @slotchange=",'\n        role="none"\n      ></slot>\n    </div>'])),(0,class_map.H)(layoutClasses),this.label,this.multiple,(0,chunk_5VURDMKE.S7)(this,_handleChipClick),(0,chunk_5VURDMKE.jq)(this,_handleSlotChange,handleSlotChange_fn))}_handleResize(){if(this.rowCollapse){var chipHeight=(0,chunk_5VURDMKE.jq)(this,_getChipHeight,getChipHeight_fn).call(this),selfHeight=this.offsetHeight,selfWidth=this.offsetWidth;selfHeight>=chipHeight*(0,chunk_5VURDMKE.S7)(this,_collapseThreshold)&&(this._collapsed=!0,(0,chunk_5VURDMKE.OV)(this,_collapsedAt,selfWidth)),selfWidth>(0,chunk_5VURDMKE.S7)(this,_collapsedAt)&&(this._collapsed=!1)}}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then((()=>{this.chips.forEach((chip=>{chip.selected=this.multiple?this.value.includes(chip.value):this.value===chip.value}))})))}};_handleChipClick=new WeakMap,_collapseThreshold=new WeakMap,_collapsedAt=new WeakMap,_getChipHeight=new WeakSet,getChipHeight_fn=function getChipHeight_fn(){var _a;return(null==(_a=this.chips[0])?void 0:_a.offsetHeight)||0},_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,selChipValue=null==(_a=this.chips.find((s=>s.selected)))?void 0:_a.value;selChipValue&&(this.value=selChipValue)},GdsFilterChips.styles=[styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.xj})],GdsFilterChips.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFilterChips.prototype,"multiple",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChips.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"row-collapse"})],GdsFilterChips.prototype,"rowCollapse",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsFilterChips.prototype,"_collapsed",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("slot")],GdsFilterChips.prototype,"_elSlot",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_VHN4JEZC.b)()],GdsFilterChips.prototype,"_handleResize",1),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("value")],GdsFilterChips.prototype,"_updateSelectedFromValue",1),GdsFilterChips=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chips")],GdsFilterChips);var chunk_A5T4P7QS_templateObject,chunk_A5T4P7QS_templateObject2,chunk_SCB55JEL=__webpack_require__("./dist/libs/core/src/chunks/chunk.SCB55JEL.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js");function chunk_A5T4P7QS_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var chunk_A5T4P7QS_styles=(0,lit.AH)(chunk_A5T4P7QS_templateObject||(chunk_A5T4P7QS_templateObject=chunk_A5T4P7QS_taggedTemplateLiteral(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    .btn-p {\n      padding: 0 0.75rem;\n    }\n    .icon {\n      width: 1rem;\n    }\n  }\n"]))),GdsFilterChip=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),chunk_SCB55JEL.nD.instance.apply(this,"gds-filter-chip"),this._button.then((btn=>{chunk_SCB55JEL.nD.instance.apply(btn,"gds-button")}))}render(){var btnClasses={"btn-p":!this.selected};return(0,chunk_VOYMQ322.qy)(chunk_A5T4P7QS_templateObject2||(chunk_A5T4P7QS_templateObject2=chunk_A5T4P7QS_taggedTemplateLiteral(['<gds-button\n      class="btn"\n      size="small"\n      .rank=',"\n      variant=",'\n      gds-role="option"\n      gds-aria-selected=',"\n    >\n      <span class=",'><slot></slot></span>\n      <gds-icon-checkmark\n        slot="trail"\n        style="display: ','"\n        width="16"\n        height="16"\n        class="icon"\n      ></gds-icon-checkmark>\n    </gds-button>'])),this.selected?"primary":"secondary",this._isUsingTransitionalStyles?"ghost":"default",this.selected,(0,class_map.H)(btnClasses),this.selected?"contents":"none")}};GdsFilterChip.styles=[chunk_A5T4P7QS_styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({reflect:!0,type:Boolean})],GdsFilterChip.prototype,"selected",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChip.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)((0,chunk_VOYMQ322.Eq)("gds-button"))],GdsFilterChip.prototype,"_button",2),GdsFilterChip=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chip")],GdsFilterChip);__webpack_require__("./dist/libs/core/src/chunks/chunk.5AYI6S6V.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.P2U66UZM.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.RMYP23WD.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.LQWSWX6E.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.M5FNUZ66.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js")},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js");class e extends directive.WL{constructor(i){if(super(i),this.it=lit_html.s6,i.type!==directive.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.s6||null==r)return this._t=void 0,this.it=r;if(r===lit_html.c0)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;var s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;var o=(0,directive.u$)(e)},"./node_modules/core-js/internals/object-assign.js":(module,__unused_webpack_exports,__webpack_require__)=>{var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),objectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys.js"),getOwnPropertySymbolsModule=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js"),propertyIsEnumerableModule=__webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),$assign=Object.assign,defineProperty=Object.defineProperty,concat=uncurryThis([].concat);module.exports=!$assign||fails((function(){if(DESCRIPTORS&&1!==$assign({b:1},$assign(defineProperty({},"a",{enumerable:!0,get:function(){defineProperty(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var A={},B={},symbol=Symbol("assign detection");return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){B[chr]=chr})),7!==$assign({},A)[symbol]||"abcdefghijklmnopqrst"!==objectKeys($assign({},B)).join("")}))?function assign(target,source){for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=getOwnPropertySymbolsModule.f,propertyIsEnumerable=propertyIsEnumerableModule.f;argumentsLength>index;)for(var key,S=IndexedObject(arguments[index++]),keys=getOwnPropertySymbols?concat(objectKeys(S),getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],DESCRIPTORS&&!call(propertyIsEnumerable,S,key)||(T[key]=S[key]);return T}:$assign},"./node_modules/core-js/modules/es.object.assign.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),assign=__webpack_require__("./node_modules/core-js/internals/object-assign.js");$({target:"Object",stat:!0,arity:2,forced:Object.assign!==assign},{assign})}}]);