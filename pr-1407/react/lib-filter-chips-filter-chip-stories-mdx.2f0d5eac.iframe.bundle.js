/*! For license information please see lib-filter-chips-filter-chip-stories-mdx.2f0d5eac.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7745],{"./node_modules/lit/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{OA:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.OA,WL:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.WL,u$:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.u$});var lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js")},"./node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>e});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js");const e=(0,directive.u$)(class extends directive.WL{constructor(t){if(super(t),t.type!==directive.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return lit_html.c0}})},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js");const o=o=>o??lit_html.s6},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js");class e extends directive.WL{constructor(i){if(super(i),this.it=lit_html.s6,i.type!==directive.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.s6||null==r)return this._t=void 0,this.it=r;if(r===lit_html.c0)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=(0,directive.u$)(e)},"./node_modules/lit/html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s6:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.s6});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js")},"./node_modules/lit/node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{OA:()=>t,WL:()=>i,u$:()=>e});const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./node_modules/lit/static-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{qy:()=>n,eu:()=>s});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js");const e=Symbol.for(""),o=t=>{if(t?.r===e)return t?._$litStatic$},s=(t,...r)=>({_$litStatic$:r.reduce(((r,e,o)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[o+1]),t[0]),r:e}),a=new Map,l=t=>(r,...e)=>{const i=e.length;let s,l;const n=[],u=[];let c,$=0,f=!1;for(;$<i;){for(c=r[$];$<i&&void 0!==(l=e[$],s=o(l));)c+=s+r[++$],f=!0;$!==i&&u.push(l),n.push(c),$++}if($===i&&n.push(r[i]),f){const t=n.join("$$lit$$");void 0===(r=a.get(t))&&(n.raw=n,a.set(t,r=n)),e=u}return t(r,...e)},n=l(lit_html.qy);l(lit_html.JW)},"./libs/react/src/lib/filter-chips/filter-chip.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>filter_chip_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_lit_react=__webpack_require__("./libs/react/node_modules/@lit/react/index.js"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),toConsumableArray=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),classCallCheck=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/createClass.js"),assertThisInitialized=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),inherits=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/inherits.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");var _templateObject,_templateObject2,_t,_t2,chunk_C3ECHGX7=__webpack_require__("./dist/libs/core/src/chunks/chunk.C3ECHGX7.js"),chunk_MZSK66DN=__webpack_require__("./dist/libs/core/src/chunks/chunk.MZSK66DN.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var _handleChipClick,_collapseThreshold,_collapsedAt,_getChipHeight,getChipHeight_fn,_handleSlotChange,handleSlotChange_fn,styles=(0,lit.AH)(_t||(_t=_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host {\n      display: inline-block;\n      max-width: 100%;\n    }\n\n    .chips {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 0.5rem;\n    }\n\n    .collapse {\n      overflow: auto;\n      scroll-snap-type: both mandatory;\n      overscroll-behavior-x: contain;\n      flex-wrap: nowrap;\n      padding-bottom: 0.5rem;\n      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;\n      scrollbar-width: thin;\n    }\n\n    ::slotted(*) {\n      scroll-snap-align: start;\n      scroll-snap-stop: always;\n    }\n  }\n"])))),GdsFilterChips=function(_GdsFormControlElemen){(0,inherits.A)(GdsFilterChips,_GdsFormControlElemen);var _super=_createSuper(GdsFilterChips);function GdsFilterChips(){var _this;return(0,classCallCheck.A)(this,GdsFilterChips),_this=_super.apply(this,arguments),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_getChipHeight),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_handleSlotChange),_this.multiple=!1,_this.label="",_this.rowCollapse=!1,_this._collapsed=!1,(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_handleChipClick,(function(event){var clickedChip=_this.chips.find((function(s){return s===event.target||s.contains(event.target)}));clickedChip&&(_this.multiple&&Array.isArray(_this.value)?clickedChip.selected?_this.value=_this.value.filter((function(v){return v!==clickedChip.value})):_this.value=[].concat((0,toConsumableArray.A)(_this.value),[clickedChip.value]):_this.value=clickedChip.value,_this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip,value:_this.value},bubbles:!0,composed:!0})))})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_collapseThreshold,3),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_collapsedAt,0),_this}return(0,createClass.A)(GdsFilterChips,[{key:"chips",get:function get(){return this._elSlot?this._elSlot.assignedElements():[]}},{key:"render",value:function render(){var layoutClasses={collapse:this._collapsed};return(0,chunk_VOYMQ322.qy)(_t2||(_t2=_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(['<div\n      class="chips ','"\n      role="listbox"\n      aria-label=',"\n      aria-multiselectable=",'\n    >\n      <slot\n        gds-allow="gds-filter-chip"\n        @click=',"\n        @slotchange=",'\n        role="none"\n      ></slot>\n    </div>']))),(0,class_map.H)(layoutClasses),this.label,this.multiple,(0,chunk_5VURDMKE.S7)(this,_handleChipClick),(0,chunk_5VURDMKE.jq)(this,_handleSlotChange,handleSlotChange_fn))}},{key:"_handleResize",value:function _handleResize(){if(this.rowCollapse){var chipHeight=(0,chunk_5VURDMKE.jq)(this,_getChipHeight,getChipHeight_fn).call(this),selfHeight=this.offsetHeight,selfWidth=this.offsetWidth;selfHeight>=chipHeight*(0,chunk_5VURDMKE.S7)(this,_collapseThreshold)&&(this._collapsed=!0,(0,chunk_5VURDMKE.OV)(this,_collapsedAt,selfWidth)),selfWidth>(0,chunk_5VURDMKE.S7)(this,_collapsedAt)&&(this._collapsed=!1)}}},{key:"_updateSelectedFromValue",value:function _updateSelectedFromValue(){var _this2=this;this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then((function(){_this2.chips.forEach((function(chip){chip.selected=_this2.multiple?_this2.value.includes(chip.value):_this2.value===chip.value}))})))}}]),GdsFilterChips}(chunk_MZSK66DN.S);_handleChipClick=new WeakMap,_collapseThreshold=new WeakMap,_collapsedAt=new WeakMap,_getChipHeight=new WeakSet,getChipHeight_fn=function getChipHeight_fn(){var _a;return(null==(_a=this.chips[0])?void 0:_a.offsetHeight)||0},_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,selChipValue=null==(_a=this.chips.find((function(s){return s.selected})))?void 0:_a.value;selChipValue&&(this.value=selChipValue)},GdsFilterChips.styles=[styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.xj})],GdsFilterChips.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFilterChips.prototype,"multiple",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChips.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"row-collapse"})],GdsFilterChips.prototype,"rowCollapse",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsFilterChips.prototype,"_collapsed",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("slot")],GdsFilterChips.prototype,"_elSlot",2),(0,chunk_5VURDMKE.Cc)([function resizeObserver(){return function(proto,propertyKey,descriptor){var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _this=this;null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((function(){_this.__resizeObserver_tids[propertyKey]&&clearTimeout(_this.__resizeObserver_tids[propertyKey]),_this.__resizeObserver_tids[propertyKey]=setTimeout((function(){var _a;null==(_a=descriptor.value)||_a.call(_this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}()],GdsFilterChips.prototype,"_handleResize",1),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("value")],GdsFilterChips.prototype,"_updateSelectedFromValue",1),GdsFilterChips=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chips")],GdsFilterChips);var chunk_A5T4P7QS_templateObject,chunk_A5T4P7QS_templateObject2,chunk_A5T4P7QS_t,chunk_A5T4P7QS_t2,get=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/get.js"),chunk_SCB55JEL=__webpack_require__("./dist/libs/core/src/chunks/chunk.SCB55JEL.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js");function chunk_A5T4P7QS_createSuper(Derived){var hasNativeReflectConstruct=chunk_A5T4P7QS_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function chunk_A5T4P7QS_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_A5T4P7QS_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var chunk_A5T4P7QS_styles=(0,lit.AH)(chunk_A5T4P7QS_t||(chunk_A5T4P7QS_t=chunk_A5T4P7QS_templateObject||(chunk_A5T4P7QS_templateObject=taggedTemplateLiteralLoose_default()(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    .btn-p {\n      padding: 0 0.75rem;\n    }\n    .icon {\n      width: 1rem;\n    }\n  }\n"])))),GdsFilterChip=function(_GdsElement){(0,inherits.A)(GdsFilterChip,_GdsElement);var _super=chunk_A5T4P7QS_createSuper(GdsFilterChip);function GdsFilterChip(){var _this;return(0,classCallCheck.A)(this,GdsFilterChip),(_this=_super.apply(this,arguments)).selected=!1,_this}return(0,createClass.A)(GdsFilterChip,[{key:"connectedCallback",value:function connectedCallback(){(0,get.A)((0,getPrototypeOf.A)(GdsFilterChip.prototype),"connectedCallback",this).call(this),this.setAttribute("role","none"),chunk_SCB55JEL.nD.instance.apply(this,"gds-filter-chip"),this._button.then((function(btn){chunk_SCB55JEL.nD.instance.apply(btn,"gds-button")}))}},{key:"render",value:function render(){var btnClasses={"btn-p":!this.selected};return(0,chunk_VOYMQ322.qy)(chunk_A5T4P7QS_t2||(chunk_A5T4P7QS_t2=chunk_A5T4P7QS_templateObject2||(chunk_A5T4P7QS_templateObject2=taggedTemplateLiteralLoose_default()(['<gds-button\n      class="btn"\n      size="small"\n      .rank=',"\n      variant=",'\n      gds-role="option"\n      gds-aria-selected=',"\n    >\n      <span class=",'><slot></slot></span>\n      <gds-icon-checkmark\n        slot="trail"\n        style="display: ','"\n        width="16"\n        height="16"\n        class="icon"\n      ></gds-icon-checkmark>\n    </gds-button>']))),this.selected?"primary":"secondary",this._isUsingTransitionalStyles?"ghost":"default",this.selected,(0,class_map.H)(btnClasses),this.selected?"contents":"none")}}]),GdsFilterChip}(chunk_ZQ4D5K7J.j);function chunk_5AYI6S6V_createSuper(Derived){var hasNativeReflectConstruct=chunk_5AYI6S6V_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function chunk_5AYI6S6V_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_5AYI6S6V_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}GdsFilterChip.styles=[chunk_A5T4P7QS_styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({reflect:!0,type:Boolean})],GdsFilterChip.prototype,"selected",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChip.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)((0,chunk_VOYMQ322.Eq)("gds-button"))],GdsFilterChip.prototype,"_button",2),GdsFilterChip=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chip")],GdsFilterChip);var IconCheckmark=function(_GdsIcon){(0,inherits.A)(IconCheckmark,_GdsIcon);var _super=chunk_5AYI6S6V_createSuper(IconCheckmark);function IconCheckmark(){return(0,classCallCheck.A)(this,IconCheckmark),_super.apply(this,arguments)}return(0,createClass.A)(IconCheckmark)}(__webpack_require__("./dist/libs/core/src/chunks/chunk.M5FNUZ66.js").M);IconCheckmark._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCheckmark._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',IconCheckmark._name="checkmark",IconCheckmark=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-icon-checkmark")],IconCheckmark);__webpack_require__("./dist/libs/core/src/chunks/chunk.P2U66UZM.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.RMYP23WD.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.LQWSWX6E.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");var scoping=__webpack_require__("./dist/libs/core/src/scoping.js"),FilterChips=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-filter-chips"),elementClass:GdsFilterChips,react}),FilterChip=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-filter-chip"),elementClass:GdsFilterChip,react}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",pre:"pre",strong:"strong"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/Filter Chips",component:FilterChips}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"filter-chips",children:"Filter Chips"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/sebgroup/green/tree/main/libs/react/src/lib/filter-chips",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"}),"\n | \n",(0,jsx_runtime.jsx)(_components.a,{href:"https://designlibrary.sebgroup.com/components/filter-chip",target:"_blank",rel:"nofollow noopener noreferrer",children:"Usage guidelines"})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"importing-the-component",children:"Importing the component"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the component, import ",(0,jsx_runtime.jsx)(_components.code,{children:"FilterChips"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"FilterChip"})," like this:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { FilterChips, FilterChip } from \'@sebgroup/green-react\'\n\n// Use as JSX element in your app\nreturn (\n  <FilterChips value="division" label="Select a filter category">\n    <FilterChip value="all">All</FilterChip>\n    <FilterChip value="top-news">Top news</FilterChip>\n    <FilterChip value="division">Division</FilterChip>\n    <FilterChip value="global">Global</FilterChip>\n    <FilterChip value="country">Country</FilterChip>\n    <FilterChip value="lcfi">\n      Large Corporate & Financial Institutions\n    </FilterChip>\n  </FilterChips>\n)\n'})}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{mdxSource:'<FilterChips value="division" label="Select a filter category"><FilterChip value="all">{"All"}</FilterChip><FilterChip value="top-news">{"Top news"}</FilterChip><FilterChip value="division">{"Division"}</FilterChip><FilterChip value="global">{"Global"}</FilterChip><FilterChip value="country">{"Country"}</FilterChip><FilterChip value="lcfi"><p>{"Large Corporate & Financial Institutions"}</p></FilterChip></FilterChips>',children:(0,jsx_runtime.jsxs)(FilterChips,{value:"division",label:"Select a filter category",children:[(0,jsx_runtime.jsx)(FilterChip,{value:"all",children:"All"}),(0,jsx_runtime.jsx)(FilterChip,{value:"top-news",children:"Top news"}),(0,jsx_runtime.jsx)(FilterChip,{value:"division",children:"Division"}),(0,jsx_runtime.jsx)(FilterChip,{value:"global",children:"Global"}),(0,jsx_runtime.jsx)(FilterChip,{value:"country",children:"Country"}),(0,jsx_runtime.jsx)(FilterChip,{value:"lcfi",children:(0,jsx_runtime.jsx)(_components.p,{children:"Large Corporate & Financial Institutions"})})]})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Note:"})," It is important to remember to set the label attribute. Omitting it will cause poor accessibility for screen reader useSharedState. Internally in the component, the label attribute will be used to set ",(0,jsx_runtime.jsx)(_components.code,{children:"aria-label"})," for the appropriate element."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"more-examples",children:"More examples"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For various examples of how to use the component, head over to the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://storybook.seb.io/latest/core/?path=/story/components-filter-chips--page",target:"_blank",rel:"nofollow noopener noreferrer",children:"Green Core storybook"})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/Filter Chips",component:FilterChips,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const filter_chip_stories=componentMeta,__namedExportsOrder=["__page"]},"./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>watch});var _chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");function watch(propertyName,options){var resolvedOptions=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.IA)({waitUntilFirstUpdate:!1},options);return function(proto,propertyKey,descriptor){var update=proto.update,watchedProperties=Array.isArray(propertyName)?propertyName:[propertyName];proto.update=function(changedProps){var _this=this;watchedProperties.forEach((function(property){var _a,key=property;if(changedProps.has(key)){var oldValue=changedProps.get(key),newValue=_this[key];oldValue!==newValue&&(resolvedOptions.waitUntilFirstUpdate&&!_this.hasUpdated||null==(_a=descriptor.value)||_a.call(_this,oldValue,newValue))}})),update.call(this,changedProps)}}}},"./dist/libs/core/src/chunks/chunk.L7I7KHQL.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>icon_style_css_default});var _templateObject,_t,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__),icon_style_css_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=_templateObject||(_templateObject=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  @layer icon;\n\n  @layer icon {\n    :host {\n      display: contents;\n    }\n\n    :host(:not([width], [height])) {\n      & > svg {\n        height: 1lh;\n        width: auto;\n      }\n    }\n  }\n"]))))},"./dist/libs/core/src/chunks/chunk.M5FNUZ66.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>GdsIcon});var _templateObject,_t,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/inherits.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_chunk_L7I7KHQL_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__.A)(this,result)}}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsIcon=function(_GdsElement){(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__.A)(GdsIcon,_GdsElement);var _super=_createSuper(GdsIcon);function GdsIcon(){var _this;return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__.A)(this,GdsIcon),(_this=_super.apply(this,arguments)).width=24,_this.height=24,_this.solid=!1,_this.label="",_this}return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__.A)(GdsIcon,[{key:"render",value:function render(){var svgContent='<svg\n      width="'.concat(this.width,'"\n      height="').concat(this.height,'"\n      viewBox="0 0 24 24"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n      ').concat(this.label?'aria-label="'.concat(this.label,'"'):'aria-label="'.concat(this.constructor._name,'"'),'\n      role="graphics-symbol"\n    >\n      ').concat(this.solid?this.constructor._solidSVG:this.constructor._regularSVG,"\n    </svg>");return(0,lit__WEBPACK_IMPORTED_MODULE_6__.qy)(_t||(_t=_templateObject||(_templateObject=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(["",""]))),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__._)(svgContent))}}]),GdsIcon}(_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_4__.j);GdsIcon.styles=[_chunk_L7I7KHQL_js__WEBPACK_IMPORTED_MODULE_3__.q],(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Number})],GdsIcon.prototype,"width",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Number})],GdsIcon.prototype,"height",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean})],GdsIcon.prototype,"solid",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:String})],GdsIcon.prototype,"label",2)},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);