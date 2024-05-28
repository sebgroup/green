"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[3535],{"./libs/angular/src/lib/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$M:()=>core_element_module.$});var NggOnScrollDirective_1,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),Subject=__webpack_require__("./node_modules/rxjs/_esm5/internal/Subject.js"),fromEvent=__webpack_require__("./node_modules/rxjs/_esm5/internal/observable/fromEvent.js"),interval=__webpack_require__("./node_modules/rxjs/_esm5/internal/observable/interval.js"),takeUntil=__webpack_require__("./node_modules/rxjs/_esm5/internal/operators/takeUntil.js"),throttle=__webpack_require__("./node_modules/rxjs/_esm5/internal/operators/throttle.js");const ON_SCROLL_TOKEN=new core.InjectionToken("ON_SCROLL_TOKEN");let NggOnScrollDirective=class NggOnScrollDirective{static#_=NggOnScrollDirective_1=this;constructor(elementRef){this.elementRef=elementRef,this.onScroll$=new Subject.B7,this.destroy$=new Subject.B7}ngAfterViewInit(){this.elementRef&&(0,fromEvent.R)(this.elementRef?.nativeElement,"scroll").pipe((0,takeUntil.Q)(this.destroy$),(0,throttle.n)((()=>(0,interval.Y)(30)))).subscribe((()=>{this.onScroll$.next()}))}ngOnDestroy(){this.destroy$.next(null),this.destroy$.complete()}static#_2=this.ctorParameters=()=>[{type:core.ElementRef}]};NggOnScrollDirective=NggOnScrollDirective_1=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[nggOnScroll]",providers:[{provide:ON_SCROLL_TOKEN,useFactory:component=>component?.onScroll$,deps:[NggOnScrollDirective_1]}]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef])],NggOnScrollDirective);let NggSharedModule=class NggSharedModule{};NggSharedModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[NggOnScrollDirective],imports:[common.CommonModule],exports:[NggOnScrollDirective]})],NggSharedModule);__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.directive.ts");var core_element_module=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.module.ts")},"./dist/libs/core/src/chunks/chunk.2ND5EWHE.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>option_styles_default,z:()=>Focusable});var option_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: block;
      padding: 1rem 1.5rem;
      cursor: pointer;
    }

    :host(:not(:last-child)) {
      border-bottom: 1px solid #e0e0e0;
    }

    :host(:hover) {
      background-color: #ededed;
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: #666;
    }
  }
`,Focusable=superClass=>class HighlightableElement extends superClass{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(options){this.setAttribute("tabindex","0"),super.focus(options)}}},"./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watch});var _chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");function watch(propertyName,options){const resolvedOptions=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.IA)({waitUntilFirstUpdate:!1},options);return(proto,propertyKey,descriptor)=>{const{update}=proto,watchedProperties=Array.isArray(propertyName)?propertyName:[propertyName];proto.update=function(changedProps){watchedProperties.forEach((property=>{var _a;const key=property;if(changedProps.has(key)){const oldValue=changedProps.get(key),newValue=this[key];oldValue!==newValue&&(resolvedOptions.waitUntilFirstUpdate&&!this.hasUpdated||null==(_a=descriptor.value)||_a.call(this,oldValue,newValue))}})),update.call(this,changedProps)}}}},"./dist/libs/core/src/chunks/chunk.2X23R32H.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>unwrap,y:()=>ListboxKbNavController});var _keyboardNavigationHandler,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),ListboxKbNavController=class{constructor(host){(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_keyboardNavigationHandler,(e=>{var _a,_b;const targetItem=e.target;if(!this.host.navigableItems.includes(targetItem))return;let handled=!1;if("ArrowDown"===e.key){const nextItemIndex=this.host.navigableItems.indexOf(targetItem)+1,nextItem=this.host.navigableItems[nextItemIndex];null==nextItem||nextItem.focus(),handled=!0}else if("ArrowUp"===e.key){const prevOptionIndex=this.host.navigableItems.indexOf(targetItem)-1,prevItem=this.host.navigableItems[prevOptionIndex];null==prevItem||prevItem.focus(),handled=!0}else if("Home"===e.key)null==(_a=this.host.navigableItems[0])||_a.focus(),handled=!0;else if("End"===e.key)null==(_b=this.host.navigableItems[this.host.navigableItems.length-1])||_b.focus(),handled=!0;else{const key=e.key.toLowerCase();if(1!==key.length)return;if(key>="a"&&key<="z"||key>="0"&&key<="9"){const firstMatch=this.host.navigableItems.find((el=>{var _a2;const text=null==(_a2=el.textContent)?void 0:_a2.trim().toLowerCase();return null==text?void 0:text.startsWith(key)}));null==firstMatch||firstMatch.focus(),handled=!0}}handled&&(e.preventDefault(),e.stopPropagation())})),(this.host=host).addController(this)}hostConnected(){this.host.addEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}hostDisconnected(){this.host.removeEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}};function unwrap(slotRef){let slot=slotRef;for(;slot.assignedElements().length>0&&"SLOT"===slot.assignedElements()[0].nodeName;)slot=slot.assignedElements()[0];return slot}_keyboardNavigationHandler=new WeakMap},"./dist/libs/core/src/chunks/chunk.4ZZYYAX4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _dialogElementRef,_autoPositionCleanupFn,_isMobileViewport,_dispatchUiStateEvent,_handleCloseButton,_registerTriggerEvents,registerTriggerEvents_fn,_unregisterTriggerEvents,unregisterTriggerEvents_fn,_registerAutoPositioning,registerAutoPositioning_fn,_triggerKeyDownListener,_focusFirstSlottedChild,_clickOutsideListener,_chunk_SSRI6BF6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SSRI6BF6.js"),_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WM7HBMMV.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/class-map.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit/directives/ref.js"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),popover_styles_default=lit__WEBPACK_IMPORTED_MODULE_5__.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    dialog {
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      right: 0;
      margin: 0;
      box-shadow:
        0 0 0 1px rgba(0, 0, 0, 0.2),
        0 1rem 28px rgba(0, 0, 0, 0.15);
      border-width: 0;
      border-radius: 0.5rem;
    }

    header {
      display: none;
    }

    dialog::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`,GdsPopover=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__.j{constructor(){super(...arguments),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_registerTriggerEvents),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_unregisterTriggerEvents),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_registerAutoPositioning),this.open=!1,this.triggerRef=Promise.resolve(void 0),this.label=void 0,this.placement="bottom-start",this.calcMinWidth=referenceEl=>`${referenceEl.offsetWidth}px`,this.calcMaxWidth=_referenceEl=>"auto",this.calcMinHeight=referenceEl=>"auto",this.calcMaxHeight=_referenceEl=>"500px",this._trigger=void 0,this._isVirtKbVisible=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_dialogElementRef,(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_9__._)()),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_autoPositionCleanupFn,void 0),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_isMobileViewport,!1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_dispatchUiStateEvent,(reason=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason},bubbles:!1,composed:!1}))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleCloseButton,(e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,"close"),setTimeout((()=>{var _a;return null==(_a=this._trigger)?void 0:_a.focus()}),250)})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_triggerKeyDownListener,(e=>{"ArrowDown"===e.key&&(e.preventDefault(),this.open=!0,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,"show")),"Escape"===e.key&&(this.open=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,"cancel"))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_focusFirstSlottedChild,(()=>{var _a,_b;const firstSlottedChild=null==(_b=null==(_a=this.shadowRoot)?void 0:_a.querySelector("slot"))?void 0:_b.assignedElements()[0];this.updateComplete.then((()=>{null==firstSlottedChild||firstSlottedChild.focus()}))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_clickOutsideListener,(evt=>{const e=evt,dialog=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value;if((e.clientX>0||e.clientY>0)&&dialog&&this.open){const rect=dialog.getBoundingClientRect();rect.top<=e.clientY&&e.clientY<=rect.top+rect.height&&rect.left<=e.clientX&&e.clientX<=rect.left+rect.width||(e.stopPropagation(),this.open=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,"close"))}}))}_handleTriggerRefChanged(){this.triggerRef.then((el=>{el&&(this._trigger=el)}))}_handleTriggerChanged(){(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerAutoPositioning,registerAutoPositioning_fn).call(this)}connectedCallback(){super.connectedCallback(),_chunk_SSRI6BF6_js__WEBPACK_IMPORTED_MODULE_0__.nD.instance.apply(this,"gds-popover"),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),this._handleOpenChange(),this.addEventListener("keydown",(e=>{"Escape"===e.key&&(this.open=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,"cancel"),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(e=>{const t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1})),this.addEventListener("blurin",(_=>{this._isVirtKbVisible=!1}))}disconnectedCallback(){super.disconnectedCallback(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_unregisterTriggerEvents,unregisterTriggerEvents_fn).call(this)}render(){return lit__WEBPACK_IMPORTED_MODULE_5__.qy`<dialog
      class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__.H)({"v-kb-visible":this._isVirtKbVisible})}"
      ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_9__.K)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef))}
    >
      <header>
        <h2>${this.label}</h2>
        <button
          class="close"
          @click=${(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleCloseButton)}
          aria-label="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_8__.ab)("Close")}"
        >
          <i></i>
        </button>
      </header>
      <slot></slot>
    </dialog>`}_handleOpenChange(){this.setAttribute("aria-hidden",String(!this.open)),this.hidden=!this.open,this.updateComplete.then((()=>{var _a,_b,_c;this.open?(null==(_a=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value)||_a.showModal(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_focusFirstSlottedChild).call(this),setTimeout((()=>{var _a2;return null==(_a2=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value)?void 0:_a2.addEventListener("click",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_clickOutsideListener))}),0)):(null==(_b=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value)||_b.close(),null==(_c=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value)||_c.removeEventListener("click",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_clickOutsideListener)))}))}_handleMobileLayout(matches){var _a,_b,_c,_d;(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.OV)(this,_isMobileViewport,matches),matches?(null==(_a=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_autoPositionCleanupFn))||_a.call(this),null==(_b=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value)||_b.style.removeProperty("left"),null==(_c=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value)||_c.style.removeProperty("top"),null==(_d=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value)||_d.style.removeProperty("minWidth"),this.updateComplete.then((()=>{var _a2;this.open&&(null==(_a2=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value)||_a2.showModal())}))):this.updateComplete.then((()=>{(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerAutoPositioning,registerAutoPositioning_fn).call(this)}))}};_dialogElementRef=new WeakMap,_autoPositionCleanupFn=new WeakMap,_isMobileViewport=new WeakMap,_dispatchUiStateEvent=new WeakMap,_handleCloseButton=new WeakMap,_registerTriggerEvents=new WeakSet,registerTriggerEvents_fn=function(){var _a;null==(_a=this._trigger)||_a.addEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_triggerKeyDownListener))},_unregisterTriggerEvents=new WeakSet,unregisterTriggerEvents_fn=function(){var _a,_b;null==(_a=this._trigger)||_a.removeEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_triggerKeyDownListener)),null==(_b=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_autoPositionCleanupFn))||_b.call(this)},_registerAutoPositioning=new WeakSet,registerAutoPositioning_fn=function(){const referenceEl=this._trigger,floatingEl=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dialogElementRef).value;referenceEl&&floatingEl&&!(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isMobileViewport)&&((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_autoPositionCleanupFn)&&(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_autoPositionCleanupFn).call(this),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.OV)(this,_autoPositionCleanupFn,(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_10__.ll)(referenceEl,floatingEl,(()=>{(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_10__.rD)(referenceEl,floatingEl,{placement:this.placement,middleware:[(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_11__.cY)(8),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_10__.UU)()],strategy:"fixed"}).then((({x,y})=>Object.assign(floatingEl.style,{left:`${x}px`,top:`${y}px`,minWidth:this.calcMinWidth(referenceEl),maxWidth:this.calcMaxWidth(referenceEl),minHeight:this.calcMinHeight(referenceEl),maxHeight:this.calcMaxHeight(referenceEl)})))}))))},_triggerKeyDownListener=new WeakMap,_focusFirstSlottedChild=new WeakMap,_clickOutsideListener=new WeakMap,GdsPopover.styles=(0,lit__WEBPACK_IMPORTED_MODULE_5__.iz)(popover_styles_default),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsPopover.prototype,"open",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsPopover.prototype,"triggerRef",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsPopover.prototype,"label",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsPopover.prototype,"placement",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsPopover.prototype,"calcMinWidth",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsPopover.prototype,"calcMaxWidth",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsPopover.prototype,"calcMinHeight",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsPopover.prototype,"calcMaxHeight",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsPopover.prototype,"_trigger",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsPopover.prototype,"_isVirtKbVisible",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_2__.w)("triggerRef")],GdsPopover.prototype,"_handleTriggerRefChanged",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_2__.w)("_trigger")],GdsPopover.prototype,"_handleTriggerChanged",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_2__.w)("open")],GdsPopover.prototype,"_handleOpenChange",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_12__.M)("(max-width: 576px)")],GdsPopover.prototype,"_handleMobileLayout",1),GdsPopover=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-popover")],GdsPopover)},"./dist/libs/core/src/chunks/chunk.VRM45KID.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_SSRI6BF6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SSRI6BF6.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/index.js"),menu_heading_styles_default=lit__WEBPACK_IMPORTED_MODULE_4__.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      padding: 0.5 1rem;
      cursor: pointer;
    }

    :host(:hover) {
      background-color: grey;
    }
  }
`,GdsMenuHeading=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__.j{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then((()=>_chunk_SSRI6BF6_js__WEBPACK_IMPORTED_MODULE_0__.nD.instance.apply(this,"gds-menu-heading")))}render(){return lit__WEBPACK_IMPORTED_MODULE_4__.qy`<slot></slot>`}};GdsMenuHeading.styles=menu_heading_styles_default,GdsMenuHeading=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-menu-heading")],GdsMenuHeading)},"./dist/libs/core/src/chunks/chunk.WM7HBMMV.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function observeLightDOM(observerConfig={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(proto,_propertyKey,descriptor)=>{let observer;const connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){null==connectedCallback||connectedCallback.call(this);observer=new MutationObserver(((_mutationList,_observer)=>{var _a;null==(_a=descriptor.value)||_a.call(this)})),observer.observe(this,observerConfig)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),observer.disconnect()}}}function watchMediaQuery(q){return(proto,_propertyKey,descriptor)=>{const mediaQuery=window.matchMedia(q),connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _a;null==connectedCallback||connectedCallback.call(this);const listener=e=>{var _a2;null==(_a2=descriptor.value)||_a2.call(this,e.matches)};mediaQuery.addEventListener("change",listener),this.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),mediaQuery.removeEventListener("change",listener)},null==(_a=descriptor.value)||_a.call(this,mediaQuery.matches)}}}__webpack_require__.d(__webpack_exports__,{L:()=>observeLightDOM,M:()=>watchMediaQuery})}}]);
//# sourceMappingURL=3535.b711c9c1.iframe.bundle.js.map