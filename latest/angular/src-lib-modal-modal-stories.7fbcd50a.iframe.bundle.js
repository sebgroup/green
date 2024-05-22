(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[893],{"./libs/angular/src/lib/modal/modal-footer.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>NggModalFooterDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggModalFooterDirective=class NggModalFooterDirective{constructor(viewContainerRef){this.viewContainerRef=viewContainerRef}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef}]};NggModalFooterDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[nggModalFooter]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Sn)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef])],NggModalFooterDirective)},"./libs/angular/src/lib/modal/modal-header.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>NggModalHeaderDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggModalHeaderDirective=class NggModalHeaderDirective{constructor(viewContainerRef){this.viewContainerRef=viewContainerRef}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef}]};NggModalHeaderDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[nggModalHeader]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Sn)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef])],NggModalHeaderDirective)},"./libs/angular/src/lib/modal/modal.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{lT:()=>NggModalBodyComponent,N1:()=>NggModalComponent,eD:()=>NggModalFooterComponent,Wm:()=>NggModalHeaderComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),modal_componentngResource=__webpack_require__("./libs/angular/src/lib/modal/modal.component.scss?ngResource"),modal_componentngResource_default=__webpack_require__.n(modal_componentngResource);var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),a11y=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs");var hasPassiveEvents=!1;if("undefined"!=typeof window){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function allowTouchMove(el){return locks.some((function(lock){return!(!lock.options.allowTouchMove||!lock.options.allowTouchMove(el))}))},preventDefault=function preventDefault(rawEvent){var e=rawEvent||window.event;return!!allowTouchMove(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},restoreOverflowSetting=function restoreOverflowSetting(){void 0!==previousBodyPaddingRight&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),void 0!==previousBodyOverflowSetting&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},disableBodyScroll=function disableBodyScroll(targetElement,options){if(targetElement){if(!locks.some((function(lock){return lock.targetElement===targetElement}))){var lock={targetElement,options:options||{}};locks=[].concat(function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(locks),[lock]),isIosDevice?(targetElement.ontouchstart=function(event){1===event.targetTouches.length&&(initialClientY=event.targetTouches[0].clientY)},targetElement.ontouchmove=function(event){1===event.targetTouches.length&&function handleScroll(event,targetElement){var clientY=event.targetTouches[0].clientY-initialClientY;!allowTouchMove(event.target)&&(targetElement&&0===targetElement.scrollTop&&clientY>0||function isTargetElementTotallyScrolled(targetElement){return!!targetElement&&targetElement.scrollHeight-targetElement.scrollTop<=targetElement.clientHeight}(targetElement)&&clientY<0?preventDefault(event):event.stopPropagation())}(event,targetElement)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):function setOverflowHidden(options){if(void 0===previousBodyPaddingRight){var _reserveScrollBarGap=!!options&&!0===options.reserveScrollBarGap,scrollBarGap=window.innerWidth-document.documentElement.clientWidth;_reserveScrollBarGap&&scrollBarGap>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=scrollBarGap+"px")}void 0===previousBodyOverflowSetting&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")}(options)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},enableBodyScroll=function enableBodyScroll(targetElement){targetElement?(locks=locks.filter((function(lock){return lock.targetElement!==targetElement})),isIosDevice?(targetElement.ontouchstart=null,targetElement.ontouchmove=null,documentListenerAdded&&0===locks.length&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1)):locks.length||restoreOverflowSetting()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},modal_header_directive=__webpack_require__("./libs/angular/src/lib/modal/modal-header.directive.ts"),modal_footer_directive=__webpack_require__("./libs/angular/src/lib/modal/modal-footer.directive.ts");let NggModalComponent=class NggModalComponent{get trapFocus(){return this._trapFocus}set trapFocus(value){this._trapFocus=value,value?this._isOpen&&this.enableFocusTrap():this.disableFocusTrap()}get isOpen(){return this._isOpen}set isOpen(value){this._isOpen=value,value?(this.trapFocus&&this.enableFocusTrap(),this.disableBodyScroll&&disableBodyScroll(this.ref.nativeElement,{allowTouchMove:el=>this.ref.nativeElement.contains(el)})):(this.disableFocusTrap(),this.disableBodyScroll&&enableBodyScroll(this.ref.nativeElement))}get open(){return this.isOpen}constructor(ref,configurableFocusTrapFactory){this.ref=ref,this.configurableFocusTrapFactory=configurableFocusTrapFactory,this.disableBodyScroll=!0,this.isOpenChange=new core.EventEmitter,this.closed=new core.EventEmitter,this.confirm=new core.EventEmitter,this.dismiss=new core.EventEmitter,this.configurableFocusTrap=this.configurableFocusTrapFactory.create(this.ref.nativeElement)}ngOnInit(){this._isOpen&&this.trapFocus?this.enableFocusTrap():this.disableFocusTrap()}handleCloseClick(event){this.closeModal(event)}handleBackdropClick(event){event.target==this.backdropRef?.nativeElement&&this.closeModal(event)}handleDismiss(event){this.dismiss.emit(event)}handleConfirm(event){this.confirm.emit(event)}closeModal(event){this.closed.observers.length>0?this.closed.emit(event):(this.isOpen=!1,this.isOpenChange.emit(this.isOpen))}enableFocusTrap(){this.configurableFocusTrap&&(this.configurableFocusTrap.enabled=!0,this.configurableFocusTrap.focusInitialElementWhenReady())}disableFocusTrap(){this.configurableFocusTrap&&(this.configurableFocusTrap.enabled=!1)}ngOnDestroy(){this.configurableFocusTrap?.destroy(),enableBodyScroll(this.ref.nativeElement)}static#_=this.ctorParameters=()=>[{type:core.ElementRef},{type:a11y.Fp}];static#_2=this.propDecorators={modalType:[{type:core.Input}],header:[{type:core.Input}],confirmLabel:[{type:core.Input}],dismissLabel:[{type:core.Input}],size:[{type:core.Input}],hideHeader:[{type:core.Input}],hideFooter:[{type:core.Input}],disableBodyScroll:[{type:core.Input}],trapFocus:[{type:core.Input}],isOpen:[{type:core.Input}],isOpenChange:[{type:core.Output}],closed:[{type:core.Output}],confirm:[{type:core.Output}],dismiss:[{type:core.Output}],open:[{type:core.HostBinding,args:["class.open"]}],backdropRef:[{type:core.ViewChild,args:["backdrop"]}],modalHeaderContent:[{type:core.ContentChild,args:[modal_header_directive.o]}],modalFooterContent:[{type:core.ContentChild,args:[modal_footer_directive.g]}]}};NggModalComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-modal",template:'<ng-container *ngIf="isOpen" [ngSwitch]="modalType">\n  <div class="gds-dialog-wrapper">\n    <aside\n      data-testid="modal"\n      *ngSwitchCase="\'slideout\'"\n      role="dialog"\n      aria-modal="true"\n      [class.small]="size === \'sm\'"\n      [class.medium]="size === \'md\'"\n      [class.large]="size === \'lg\'"\n      [class.entered]="isOpen"\n    >\n      <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n    </aside>\n    <main\n      data-testid="modal"\n      *ngSwitchCase="\'takeover\'"\n      role="dialog"\n      aria-modal="true"\n      [class.entered]="isOpen"\n    >\n      <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n    </main>\n    <section\n      data-testid="modal"\n      *ngSwitchDefault\n      role="dialog"\n      aria-modal="true"\n      [class.small]="size === \'sm\'"\n      [class.medium]="size === \'md\'"\n      [class.large]="size === \'lg\'"\n      [class.entered]="isOpen"\n    >\n      <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n    </section>\n    <ng-template #contentTemplate>\n      <ng-container *ngIf="!hideHeader">\n        <header\n          *ngIf="!modalHeaderContent; else headerContentTemplate"\n          ngg-modal-header\n          data-testid="modal-header"\n          [header]="header"\n          (closed)="this.handleCloseClick($event)"\n        ></header>\n      </ng-container>\n      <div ngg-modal-body data-testid="modal-body" class="body">\n        <ng-container *ngTemplateOutlet="bodyContentTemplate"></ng-container>\n      </div>\n      <ng-container *ngIf="!hideFooter && (dismissLabel || confirmLabel)">\n        <footer\n          *ngIf="!modalFooterContent; else footerContentTemplate"\n          ngg-modal-footer\n          data-testid="modal-footer"\n          [dismissLabel]="dismissLabel"\n          [confirmLabel]="confirmLabel"\n          (dismiss)="this.handleDismiss($event)"\n          (confirm)="this.handleConfirm($event)"\n        ></footer>\n      </ng-container>\n    </ng-template>\n    <ng-template #headerContentTemplate>\n      <header data-testid="modal-header">\n        <ng-content select="[nggModalHeader]"></ng-content>\n      </header>\n    </ng-template>\n    <ng-template #bodyContentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n    <ng-template #footerContentTemplate>\n      <footer data-testid="modal-footer">\n        <ng-content select="[nggModalFooter]"></ng-content>\n      </footer>\n    </ng-template>\n    <div\n      #backdrop\n      data-testid="modal-backdrop"\n      class="backdrop entered"\n      (click)="this.handleBackdropClick($event)"\n      [attr.aria-hidden]="true"\n    ></div>\n  </div>\n</ng-container>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[modal_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef,a11y.Fp])],NggModalComponent);let NggModalHeaderComponent=class NggModalHeaderComponent{constructor(){this.closed=new core.EventEmitter}handleClose(event){this.closed.emit(event)}static#_=this.propDecorators={header:[{type:core.Input}],closed:[{type:core.Output}]}};NggModalHeaderComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[ngg-modal-header]",template:'\n    <h3 data-testid="modal-header-text">{{ header }}</h3>\n    <button\n      data-testid="modal-close-button"\n      class="close"\n      (click)="this.handleClose($event)"\n    >\n      <span className="sr-only">Close</span>\n      <i></i>\n    </button>\n  ',styles:[modal_componentngResource_default()]})],NggModalHeaderComponent);let NggModalBodyComponent=class NggModalBodyComponent{};NggModalBodyComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[ngg-modal-body]",template:"<ng-content></ng-content>",styles:[modal_componentngResource_default()]})],NggModalBodyComponent);let NggModalFooterComponent=class NggModalFooterComponent{constructor(){this.dismiss=new core.EventEmitter,this.confirm=new core.EventEmitter}handleDismiss(event){this.dismiss.emit(event)}handleConfirm(event){this.confirm.emit(event)}static#_=this.propDecorators={dismissLabel:[{type:core.Input}],confirmLabel:[{type:core.Input}],dismiss:[{type:core.Output}],confirm:[{type:core.Output}]}};NggModalFooterComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[ngg-modal-footer]",template:'\n    <button\n      data-testid="modal-dismiss-button"\n      *ngIf="dismissLabel"\n      class="secondary"\n      (click)="this.handleDismiss($event)"\n    >\n      {{ dismissLabel }}\n    </button>\n    <button\n      data-testid="modal-confirm-button"\n      *ngIf="confirmLabel"\n      class="primary"\n      (click)="this.handleConfirm($event)"\n    >\n      {{ confirmLabel }}\n    </button>\n  ',styles:[modal_componentngResource_default()]})],NggModalFooterComponent)},"./libs/angular/src/lib/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Default:()=>Default,Slideout:()=>Slideout,Takeover:()=>Takeover,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),a11y=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),modal_component=__webpack_require__("./libs/angular/src/lib/modal/modal.component.ts"),modal_header_directive=__webpack_require__("./libs/angular/src/lib/modal/modal-header.directive.ts"),modal_footer_directive=__webpack_require__("./libs/angular/src/lib/modal/modal-footer.directive.ts");const DECLARATIONS=[modal_component.N1,modal_component.Wm,modal_component.lT,modal_component.eD,modal_header_directive.o,modal_footer_directive.g],EXPORTS=[modal_component.N1,modal_header_directive.o,modal_footer_directive.g];let NggModalModule=class NggModalModule{};NggModalModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[a11y.Pd,common.CommonModule],exports:EXPORTS,declarations:DECLARATIONS})],NggModalModule);const modal_stories={title:"Components/Modal",component:modal_component.N1,decorators:[(0,dist.moduleMetadata)({imports:[NggModalModule]})],parameters:{componentIds:["component-dialogue","component-slideout","component-foldout","component-takeover"]}},Template=args=>({template:'\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" (closed)="isOpen = false">\n      <p>Modal Body</p>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  ',props:{...args,isOpen:!1}}),Default=Template.bind({});Default.args={header:"Header",dismissLabel:"Secondary",confirmLabel:"Primary",trapFocus:!1};const Slideout=Template.bind({});Slideout.args={modalType:"slideout",header:"Header",dismissLabel:"Secondary",confirmLabel:"Primary",trapFocus:!1};const Takeover=Template.bind({});Takeover.args={modalType:"takeover",header:"Header",dismissLabel:"Secondary",confirmLabel:"Primary",trapFocus:!1};const Custom=(args=>({template:'\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="hideHeader" [hideFooter]="hideFooter" (closed)="isOpen = false">\n      <ng-container nggModalHeader>\n        <div style="display:flex;align-items:center;">\n          <h3>{{header}}</h3>\n          <span style="margin-left:10px;" class="badge info">!</span>\n        </div>\n      </ng-container>\n      <p>Modal Body</p>\n      <ng-container nggModalFooter>\n          <button class="danger" (click)="isOpen = false">Close</button>\n      </ng-container>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  ',props:{...args,isOpen:!1}})).bind({});Custom.args={header:"Header",dismissLabel:"Secondary",confirmLabel:"Primary",trapFocus:!1,hideHeader:!1,hideFooter:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: NggModalComponent) => {\n  const isOpen = false;\n  return {\n    template: `\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" (closed)="isOpen = false">\n      <p>Modal Body</p>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  `,\n    props: {\n      ...args,\n      isOpen\n    }\n  };\n}',...Default.parameters?.docs?.source}}},Slideout.parameters={...Slideout.parameters,docs:{...Slideout.parameters?.docs,source:{originalSource:'(args: NggModalComponent) => {\n  const isOpen = false;\n  return {\n    template: `\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" (closed)="isOpen = false">\n      <p>Modal Body</p>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  `,\n    props: {\n      ...args,\n      isOpen\n    }\n  };\n}',...Slideout.parameters?.docs?.source}}},Takeover.parameters={...Takeover.parameters,docs:{...Takeover.parameters?.docs,source:{originalSource:'(args: NggModalComponent) => {\n  const isOpen = false;\n  return {\n    template: `\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" (closed)="isOpen = false">\n      <p>Modal Body</p>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  `,\n    props: {\n      ...args,\n      isOpen\n    }\n  };\n}',...Takeover.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:'(args: NggModalComponent) => {\n  const isOpen = false;\n  return {\n    template: `\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="hideHeader" [hideFooter]="hideFooter" (closed)="isOpen = false">\n      <ng-container nggModalHeader>\n        <div style="display:flex;align-items:center;">\n          <h3>{{header}}</h3>\n          <span style="margin-left:10px;" class="badge info">!</span>\n        </div>\n      </ng-container>\n      <p>Modal Body</p>\n      <ng-container nggModalFooter>\n          <button class="danger" (click)="isOpen = false">Close</button>\n      </ng-container>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  `,\n    props: {\n      ...args,\n      isOpen\n    }\n  };\n}',...Custom.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Slideout","Takeover","Custom"]},"./libs/angular/src/lib/modal/modal.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n:host.open {\n  height: 100vh;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: var(--sg-z-index-modal);\n}\n:host.open > section[role=dialog] {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.body::-webkit-scrollbar {\n  background-color: rgb(248, 248, 248);\n  height: 10px;\n  width: 10px;\n}\n\n.body::-webkit-scrollbar-thumb {\n  background-color: rgb(206, 206, 206);\n}\n\n.body::-webkit-scrollbar-track {\n  background-color: rgb(248, 248, 248);\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2509803922);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);