/*! For license information please see src-components-grouped-list-grouped-list-stories.2bd86960.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[56],{"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js":module=>{module.exports=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings},module.exports.__esModule=!0,module.exports.default=module.exports},"./libs/core/src/components/grouped-list/grouped-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdjustingAppearance:()=>AdjustingAppearance,Basic:()=>Basic,WithValues:()=>WithValues,WithValuesAndAction:()=>WithValuesAndAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>grouped_list_stories});var _templateObject,_templateObject2,taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),lit=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/lit/index.js")),repeat=__webpack_require__("./node_modules/lit/directives/repeat.js"),chunk_KBYQYDL3=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),chunk_ZLWSCK7R=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZLWSCK7R.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var chunk_73TOOYEY_templateObject,GdsGroupedList=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),(0,chunk_KBYQYDL3.t)(this),chunk_ZLWSCK7R.nD.instance.apply(this,"gds-grouped-list")}render(){return(0,chunk_VOYMQ322.qy)(_templateObject||(_templateObject=_taggedTemplateLiteral(["",'\n      <div role="list" aria-labelledby="label">\n        <slot gds-allow="gds-list-item"></slot>\n      </div>'])),(0,when.z)(this.label,(()=>(0,chunk_VOYMQ322.qy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<div class="gds-list-heading" aria-hidden="true" id="label">\n            ',"\n          </div>"])),this.label))))}};(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsGroupedList.prototype,"label",2),GdsGroupedList=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-grouped-list")],GdsGroupedList);var GdsListItem=class extends chunk_ZQ4D5K7J.j{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return(0,chunk_VOYMQ322.qy)(chunk_73TOOYEY_templateObject||(chunk_73TOOYEY_templateObject=function chunk_73TOOYEY_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["<slot></slot>"])))}};GdsListItem=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-list-item")],GdsListItem);var grouped_list_stories_templateObject,grouped_list_stories_templateObject2,_templateObject3,_templateObject4,_templateObject5;__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),__webpack_require__("./dist/libs/core/src/components/theme/index.js");(0,__webpack_require__("./dist/libs/core/src/transitional-styles.js").Y)();const grouped_list_stories={title:"Components/Groued List",component:"gds-grouped-list",subcomponents:{ListItem:"gds-list-item"},parameters:{layout:"centered",docs:{description:{component:"[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/grouped-list)\n&nbsp;|&nbsp;\n[Usage guidelines](https://designlibrary.sebgroup.com/components/component-list)\n\nist are used to list many datapoints with labels in a structured way. They may be grouped under\nheading and they may have a link or button added to act on the data being displayed."}}},tags:["autodocs"]};var DefaultParams={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{items:{control:{type:"array"}}},args:{items:["Item 1","Item 2","Item 3"],label:"Grouped list label"}},Basic=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(grouped_list_stories_templateObject||(grouped_list_stories_templateObject=taggedTemplateLiteralLoose_default()(["\n    <gds-grouped-list label=",">\n      ","\n    </gds-grouped-list>\n  "])),args.label,(0,repeat.u)(args.items,(function(item){return(0,lit.qy)(grouped_list_stories_templateObject2||(grouped_list_stories_templateObject2=taggedTemplateLiteralLoose_default()(["<gds-list-item>","</gds-list-item>"])),item)})))}}),WithValues=Object.assign({},DefaultParams,{name:"Grouped list with values",render:function render(args){return(0,lit.qy)(_templateObject3||(_templateObject3=taggedTemplateLiteralLoose_default()(['\n    <gds-grouped-list label="Example with values">\n      <gds-list-item>\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 4</div>\n        <strong>Value 4</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 5</div>\n        <strong>Value 5</strong>\n      </gds-list-item>\n    </gds-grouped-list>\n  '])))}}),WithValuesAndAction=Object.assign({},DefaultParams,{name:"Grouped list with values and action",render:function render(args){return(0,lit.qy)(_templateObject4||(_templateObject4=taggedTemplateLiteralLoose_default()(['\n    <gds-grouped-list label="Example with links">\n      <gds-list-item>\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 4</div>\n        <strong>Value 4</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 5</div>\n        <strong>Value 5</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n    </gds-grouped-list>\n  '])))}}),AdjustingAppearance=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(_templateObject5||(_templateObject5=taggedTemplateLiteralLoose_default()(['\n    <gds-grouped-list label="Example of left aligned list">\n      <gds-list-item style="justify-content: left">\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item style="justify-content: left">\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item style="justify-content: left">\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n    </gds-grouped-list>\n\n    <gds-grouped-list label="Example of vertical list">\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n      </gds-list-item>\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n      </gds-list-item>\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n      </gds-list-item>\n    </gds-grouped-list>\n  '])))}});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams,\n  render: args => html`\n    <gds-grouped-list label=${args.label}>\n      ${repeat(args.items, (item: any) => html`<gds-list-item>${item}</gds-list-item>`)}\n    </gds-grouped-list>\n  `\n}",...Basic.parameters?.docs?.source}}},WithValues.parameters={...WithValues.parameters,docs:{...WithValues.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams,\n  name: 'Grouped list with values',\n  render: args => html`\n    <gds-grouped-list label=\"Example with values\">\n      <gds-list-item>\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 4</div>\n        <strong>Value 4</strong>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 5</div>\n        <strong>Value 5</strong>\n      </gds-list-item>\n    </gds-grouped-list>\n  `\n}",...WithValues.parameters?.docs?.source},description:{story:"By default, the list items are displayed as `flex` containers with `space-between` alignment.",...WithValues.parameters?.docs?.description}}},WithValuesAndAction.parameters={...WithValuesAndAction.parameters,docs:{...WithValuesAndAction.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  name: \'Grouped list with values and action\',\n  render: args => html`\n    <gds-grouped-list label="Example with links">\n      <gds-list-item>\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 4</div>\n        <strong>Value 4</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item>\n        <div>Key 5</div>\n        <strong>Value 5</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n    </gds-grouped-list>\n  `\n}',...WithValuesAndAction.parameters?.docs?.source},description:{story:"Elements such as links or buttons can be slotted into the list items.",...WithValuesAndAction.parameters?.docs?.description}}},AdjustingAppearance.parameters={...AdjustingAppearance.parameters,docs:{...AdjustingAppearance.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-grouped-list label="Example of left aligned list">\n      <gds-list-item style="justify-content: left">\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item style="justify-content: left">\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n      <gds-list-item style="justify-content: left">\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n        <div>\n          <a href="#">Link</a>\n        </div>\n      </gds-list-item>\n    </gds-grouped-list>\n\n    <gds-grouped-list label="Example of vertical list">\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 1</div>\n        <strong>Value 1</strong>\n      </gds-list-item>\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 2</div>\n        <strong>Value 2</strong>\n      </gds-list-item>\n      <gds-list-item style="flex-direction: column; border-width: 0">\n        <div>Key 3</div>\n        <strong>Value 3</strong>\n      </gds-list-item>\n    </gds-grouped-list>\n  `\n}',...AdjustingAppearance.parameters?.docs?.source},description:{story:"The slotted elements can be styled using inline styles or CSS classes.",...AdjustingAppearance.parameters?.docs?.description}}};const __namedExportsOrder=["Basic","WithValues","WithValuesAndAction","AdjustingAppearance"]},"./dist/libs/core/src/chunks/chunk.KBYQYDL3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function constrainSlots(self){self.updateComplete.then((()=>{var _a,_b,_c,slots=null==(_a=self.shadowRoot)?void 0:_a.querySelectorAll("slot[gds-allow]");if(slots){for(var node of Array.from(self.childNodes))node.nodeType===Node.TEXT_NODE&&""===(null==(_b=node.textContent)?void 0:_b.trim())&&(null==(_c=node.parentNode)||_c.removeChild(node));var constrain=slot=>{var _a2,_b2,allowed=[...(null==(_a2=slot.getAttribute("gds-allow"))?void 0:_a2.split(" "))||[],"slot"];for(var _node of Array.from(slot.assignedNodes()))allowed.includes(_node.nodeName.toLowerCase())||null==(_b2=_node.parentNode)||_b2.removeChild(_node)};slots.forEach((slot=>{constrain(slot),slot.addEventListener("slotchange",(()=>constrain(slot)))}))}}))}__webpack_require__.d(__webpack_exports__,{t:()=>constrainSlots})},"./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>GdsElement});var _chunk_W7CV3QYI_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/decorators.js"),lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/index.js"),GdsElement=(__webpack_require__("./node_modules/reflect-metadata/Reflect.js"),class extends lit__WEBPACK_IMPORTED_MODULE_4__.WF{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new _chunk_W7CV3QYI_js__WEBPACK_IMPORTED_MODULE_0__.Q(this)}connectedCallback(){super.connectedCallback(),this.gdsElementName=(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.zu)(this.tagName.toLowerCase())||this.gdsElementName,this.setAttribute("gds-element",this.gdsElementName)}});(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.wk)()],GdsElement.prototype,"_isUsingTransitionalStyles",2)},"./dist/libs/core/src/components/theme/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _templateObject,chunk_ZLWSCK7R=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZLWSCK7R.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var GdsTheme=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.colorScheme="light"}connectedCallback(){super.connectedCallback(),chunk_ZLWSCK7R.nD.instance.apply(this,"gds-theme")}render(){return(0,chunk_VOYMQ322.qy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}([" <slot></slot> "])))}};(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({reflect:!0,attribute:"color-scheme"})],GdsTheme.prototype,"colorScheme",2),GdsTheme=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-theme")],GdsTheme);__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js")},"./node_modules/lit/directives/repeat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>c});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js"),directive_helpers=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive-helpers.js"),u=(e,s,t)=>{for(var r=new Map,_l=s;_l<=t;_l++)r.set(e[_l],_l);return r},c=(0,directive.u$)(class extends directive.WL{constructor(e){if(super(e),e.type!==directive.OA.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){var r;void 0===t?t=s:void 0!==s&&(r=s);var l=[],o=[],i=0;for(var _s of e)l[i]=r?r(_s,i):i,o[i]=t(_s,i),i++;return{values:o,keys:l}}render(e,s,t){return this.dt(e,s,t).values}update(s,_ref){var _this$ut,[t,r,c]=_ref,d=(0,directive_helpers.cN)(s),{values:p,keys:a}=this.dt(t,r,c);if(!Array.isArray(d))return this.ut=a,p;for(var m,y,h=null!==(_this$ut=this.ut)&&void 0!==_this$ut?_this$ut:this.ut=[],v=[],x=0,j=d.length-1,k=0,w=p.length-1;x<=j&&k<=w;)if(null===d[x])x++;else if(null===d[j])j--;else if(h[x]===a[k])v[k]=(0,directive_helpers.lx)(d[x],p[k]),x++,k++;else if(h[j]===a[w])v[w]=(0,directive_helpers.lx)(d[j],p[w]),j--,w--;else if(h[x]===a[w])v[w]=(0,directive_helpers.lx)(d[x],p[w]),(0,directive_helpers.Dx)(s,v[w+1],d[x]),x++,w--;else if(h[j]===a[k])v[k]=(0,directive_helpers.lx)(d[j],p[k]),(0,directive_helpers.Dx)(s,d[x],d[j]),j--,k++;else if(void 0===m&&(m=u(a,k,w),y=u(h,x,j)),m.has(h[x]))if(m.has(h[j])){var _e=y.get(a[k]),_t=void 0!==_e?d[_e]:null;if(null===_t){var _e2=(0,directive_helpers.Dx)(s,d[x]);(0,directive_helpers.lx)(_e2,p[k]),v[k]=_e2}else v[k]=(0,directive_helpers.lx)(_t,p[k]),(0,directive_helpers.Dx)(s,d[x],_t),d[_e]=null;k++}else(0,directive_helpers.KO)(d[j]),j--;else(0,directive_helpers.KO)(d[x]),x++;for(;k<=w;){var _e3=(0,directive_helpers.Dx)(s,v[w+1]);(0,directive_helpers.lx)(_e3,p[k]),v[k++]=_e3}for(;x<=j;){var _e4=d[x++];null!==_e4&&(0,directive_helpers.KO)(_e4)}return this.ut=a,(0,directive_helpers.mY)(s,v),lit_html.c0}})},"./node_modules/lit/node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{OA:()=>t,WL:()=>i,u$:()=>e});var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++)e[_key]=arguments[_key];return{_$litDirective$:t,values:e}};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):null==t?void 0:t(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./node_modules/core-js/internals/object-assign.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),objectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys.js"),getOwnPropertySymbolsModule=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js"),propertyIsEnumerableModule=__webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),$assign=Object.assign,defineProperty=Object.defineProperty,concat=uncurryThis([].concat);module.exports=!$assign||fails((function(){if(DESCRIPTORS&&1!==$assign({b:1},$assign(defineProperty({},"a",{enumerable:!0,get:function(){defineProperty(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var A={},B={},symbol=Symbol("assign detection");return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){B[chr]=chr})),7!==$assign({},A)[symbol]||"abcdefghijklmnopqrst"!==objectKeys($assign({},B)).join("")}))?function assign(target,source){for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=getOwnPropertySymbolsModule.f,propertyIsEnumerable=propertyIsEnumerableModule.f;argumentsLength>index;)for(var key,S=IndexedObject(arguments[index++]),keys=getOwnPropertySymbols?concat(objectKeys(S),getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],DESCRIPTORS&&!call(propertyIsEnumerable,S,key)||(T[key]=S[key]);return T}:$assign},"./node_modules/core-js/internals/object-keys.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var internalObjectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys-internal.js"),enumBugKeys=__webpack_require__("./node_modules/core-js/internals/enum-bug-keys.js");module.exports=Object.keys||function keys(O){return internalObjectKeys(O,enumBugKeys)}},"./node_modules/core-js/modules/es.object.assign.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),assign=__webpack_require__("./node_modules/core-js/internals/object-assign.js");$({target:"Object",stat:!0,arity:2,forced:Object.assign!==assign},{assign})}}]);