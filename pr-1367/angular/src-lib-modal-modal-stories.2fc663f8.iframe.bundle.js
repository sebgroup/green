(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[893,6287],{"./libs/angular/src/lib/modal/modal-footer.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>NggModalFooterDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggModalFooterDirective=class NggModalFooterDirective{constructor(viewContainerRef){this.viewContainerRef=viewContainerRef}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef}]};NggModalFooterDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[nggModalFooter]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Sn)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef])],NggModalFooterDirective)},"./libs/angular/src/lib/modal/modal-header.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>NggModalHeaderDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggModalHeaderDirective=class NggModalHeaderDirective{constructor(viewContainerRef){this.viewContainerRef=viewContainerRef}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef}]};NggModalHeaderDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[nggModalHeader]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Sn)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef])],NggModalHeaderDirective)},"./libs/angular/src/lib/modal/modal.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{lT:()=>NggModalBodyComponent,N1:()=>NggModalComponent,eD:()=>NggModalFooterComponent,Wm:()=>NggModalHeaderComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),modal_componentngResource=__webpack_require__("./libs/angular/src/lib/modal/modal.component.scss?ngResource"),modal_componentngResource_default=__webpack_require__.n(modal_componentngResource);var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),a11y=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),bodyScrollLock_esm=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js"),modal_header_directive=__webpack_require__("./libs/angular/src/lib/modal/modal-header.directive.ts"),modal_footer_directive=__webpack_require__("./libs/angular/src/lib/modal/modal-footer.directive.ts");let NggModalComponent=class NggModalComponent{get trapFocus(){return this._trapFocus}set trapFocus(value){this._trapFocus=value,value?this._isOpen&&this.enableFocusTrap():this.disableFocusTrap()}get isOpen(){return this._isOpen}set isOpen(value){this._isOpen=value,value?(this.trapFocus&&this.enableFocusTrap(),(0,bodyScrollLock_esm.mh)(this.ref.nativeElement,{allowTouchMove:el=>this.ref.nativeElement.contains(el)})):(this.disableFocusTrap(),(0,bodyScrollLock_esm.fY)(this.ref.nativeElement))}get open(){return this.isOpen}constructor(ref,configurableFocusTrapFactory){this.ref=ref,this.configurableFocusTrapFactory=configurableFocusTrapFactory,this.isOpenChange=new core.EventEmitter,this.closed=new core.EventEmitter,this.confirm=new core.EventEmitter,this.dismiss=new core.EventEmitter,this.configurableFocusTrap=this.configurableFocusTrapFactory.create(this.ref.nativeElement)}ngOnInit(){this._isOpen&&this.trapFocus?this.enableFocusTrap():this.disableFocusTrap()}handleCloseClick(event){this.closeModal(event)}handleBackdropClick(event){event.target==this.backdropRef?.nativeElement&&this.closeModal(event)}handleDismiss(event){this.dismiss.emit(event)}handleConfirm(event){this.confirm.emit(event)}closeModal(event){this.closed.observers.length>0?this.closed.emit(event):(this.isOpen=!1,this.isOpenChange.emit(this.isOpen))}enableFocusTrap(){this.configurableFocusTrap&&(this.configurableFocusTrap.enabled=!0,this.configurableFocusTrap.focusInitialElementWhenReady())}disableFocusTrap(){this.configurableFocusTrap&&(this.configurableFocusTrap.enabled=!1)}ngOnDestroy(){this.configurableFocusTrap?.destroy(),(0,bodyScrollLock_esm.fY)(this.ref.nativeElement)}static#_=this.ctorParameters=()=>[{type:core.ElementRef},{type:a11y.Fp}];static#_2=this.propDecorators={modalType:[{type:core.Input}],header:[{type:core.Input}],confirmLabel:[{type:core.Input}],dismissLabel:[{type:core.Input}],size:[{type:core.Input}],hideHeader:[{type:core.Input}],hideFooter:[{type:core.Input}],trapFocus:[{type:core.Input}],isOpen:[{type:core.Input}],isOpenChange:[{type:core.Output}],closed:[{type:core.Output}],confirm:[{type:core.Output}],dismiss:[{type:core.Output}],open:[{type:core.HostBinding,args:["class.open"]}],backdropRef:[{type:core.ViewChild,args:["backdrop"]}],modalHeaderContent:[{type:core.ContentChild,args:[modal_header_directive.o]}],modalFooterContent:[{type:core.ContentChild,args:[modal_footer_directive.g]}]}};NggModalComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-modal",template:'<ng-container *ngIf="isOpen" [ngSwitch]="modalType">\n  <div class="gds-dialog-wrapper">\n    <aside\n      data-testid="modal"\n      *ngSwitchCase="\'slideout\'"\n      role="dialog"\n      aria-modal="true"\n      [class.small]="size === \'sm\'"\n      [class.medium]="size === \'md\'"\n      [class.large]="size === \'lg\'"\n      [class.entered]="isOpen"\n    >\n      <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n    </aside>\n    <main\n      data-testid="modal"\n      *ngSwitchCase="\'takeover\'"\n      role="dialog"\n      aria-modal="true"\n      [class.entered]="isOpen"\n    >\n      <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n    </main>\n    <section\n      data-testid="modal"\n      *ngSwitchDefault\n      role="dialog"\n      aria-modal="true"\n      [class.small]="size === \'sm\'"\n      [class.medium]="size === \'md\'"\n      [class.large]="size === \'lg\'"\n      [class.entered]="isOpen"\n    >\n      <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>\n    </section>\n    <ng-template #contentTemplate>\n      <ng-container *ngIf="!hideHeader">\n        <header\n          *ngIf="!modalHeaderContent; else headerContentTemplate"\n          ngg-modal-header\n          data-testid="modal-header"\n          [header]="header"\n          (closed)="this.handleCloseClick($event)"\n        ></header>\n      </ng-container>\n      <div ngg-modal-body data-testid="modal-body" class="body">\n        <ng-container *ngTemplateOutlet="bodyContentTemplate"></ng-container>\n      </div>\n      <ng-container *ngIf="!hideFooter && (dismissLabel || confirmLabel)">\n        <footer\n          *ngIf="!modalFooterContent; else footerContentTemplate"\n          ngg-modal-footer\n          data-testid="modal-footer"\n          [dismissLabel]="dismissLabel"\n          [confirmLabel]="confirmLabel"\n          (dismiss)="this.handleDismiss($event)"\n          (confirm)="this.handleConfirm($event)"\n        ></footer>\n      </ng-container>\n    </ng-template>\n    <ng-template #headerContentTemplate>\n      <header data-testid="modal-header">\n        <ng-content select="[nggModalHeader]"></ng-content>\n      </header>\n    </ng-template>\n    <ng-template #bodyContentTemplate>\n      <ng-content></ng-content>\n    </ng-template>\n    <ng-template #footerContentTemplate>\n      <footer data-testid="modal-footer">\n        <ng-content select="[nggModalFooter]"></ng-content>\n      </footer>\n    </ng-template>\n    <div\n      #backdrop\n      data-testid="modal-backdrop"\n      class="backdrop entered"\n      (click)="this.handleBackdropClick($event)"\n      [attr.aria-hidden]="true"\n    ></div>\n  </div>\n</ng-container>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[modal_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef,a11y.Fp])],NggModalComponent);let NggModalHeaderComponent=class NggModalHeaderComponent{constructor(){this.closed=new core.EventEmitter}handleClose(event){this.closed.emit(event)}static#_=this.propDecorators={header:[{type:core.Input}],closed:[{type:core.Output}]}};NggModalHeaderComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[ngg-modal-header]",template:'\n    <h3 data-testid="modal-header-text">{{ header }}</h3>\n    <button\n      data-testid="modal-close-button"\n      class="close"\n      (click)="this.handleClose($event)"\n    >\n      <span className="sr-only">Close</span>\n      <i></i>\n    </button>\n  ',styles:[modal_componentngResource_default()]})],NggModalHeaderComponent);let NggModalBodyComponent=class NggModalBodyComponent{};NggModalBodyComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[ngg-modal-body]",template:"<ng-content></ng-content>",styles:[modal_componentngResource_default()]})],NggModalBodyComponent);let NggModalFooterComponent=class NggModalFooterComponent{constructor(){this.dismiss=new core.EventEmitter,this.confirm=new core.EventEmitter}handleDismiss(event){this.dismiss.emit(event)}handleConfirm(event){this.confirm.emit(event)}static#_=this.propDecorators={dismissLabel:[{type:core.Input}],confirmLabel:[{type:core.Input}],dismiss:[{type:core.Output}],confirm:[{type:core.Output}]}};NggModalFooterComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[ngg-modal-footer]",template:'\n    <button\n      data-testid="modal-dismiss-button"\n      *ngIf="dismissLabel"\n      class="secondary"\n      (click)="this.handleDismiss($event)"\n    >\n      {{ dismissLabel }}\n    </button>\n    <button\n      data-testid="modal-confirm-button"\n      *ngIf="confirmLabel"\n      class="primary"\n      (click)="this.handleConfirm($event)"\n    >\n      {{ confirmLabel }}\n    </button>\n  ',styles:[modal_componentngResource_default()]})],NggModalFooterComponent)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./libs/angular/src/lib/modal/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Default:()=>Default,Slideout:()=>Slideout,Takeover:()=>Takeover,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var documentation=__webpack_require__("./libs/angular/src/lib/modal/documentation.mdx"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),a11y=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),modal_component=__webpack_require__("./libs/angular/src/lib/modal/modal.component.ts"),modal_header_directive=__webpack_require__("./libs/angular/src/lib/modal/modal-header.directive.ts"),modal_footer_directive=__webpack_require__("./libs/angular/src/lib/modal/modal-footer.directive.ts");const DECLARATIONS=[modal_component.N1,modal_component.Wm,modal_component.lT,modal_component.eD,modal_header_directive.o,modal_footer_directive.g],EXPORTS=[modal_component.N1,modal_header_directive.o,modal_footer_directive.g];let NggModalModule=class NggModalModule{};NggModalModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[a11y.Pd,common.CommonModule],exports:EXPORTS,declarations:DECLARATIONS})],NggModalModule);const modal_stories={title:"Components/Modal",component:modal_component.N1,decorators:[(0,dist.moduleMetadata)({imports:[NggModalModule]})],parameters:{docs:{page:documentation.default},componentIds:["component-dialogue","component-slideout","component-foldout","component-takeover"]}},Template=args=>({template:'\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" (closed)="isOpen = false">\n      <p>Modal Body</p>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  ',props:{...args,isOpen:!0}}),Default=Template.bind({});Default.args={header:"Header",dismissLabel:"Secondary",confirmLabel:"Primary",trapFocus:!1};const Slideout=Template.bind({});Slideout.args={modalType:"slideout",header:"Header",dismissLabel:"Secondary",confirmLabel:"Primary",trapFocus:!1};const Takeover=Template.bind({});Takeover.args={modalType:"takeover",header:"Header",dismissLabel:"Secondary",confirmLabel:"Primary",trapFocus:!1};const Custom=(args=>({template:'\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="hideHeader" [hideFooter]="hideFooter" (closed)="isOpen = false">\n      <ng-container nggModalHeader>\n        <div style="display:flex;align-items:center;">\n          <h3>{{header}}</h3>\n          <span style="margin-left:10px;" class="badge info">!</span>\n        </div>\n      </ng-container>\n      <p>Modal Body</p>\n      <ng-container nggModalFooter>\n          <button class="danger" (click)="isOpen = false">Close</button>\n      </ng-container>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  ',props:{...args,isOpen:!0}})).bind({});Custom.args={header:"Header",dismissLabel:"Secondary",confirmLabel:"Primary",trapFocus:!1,hideHeader:!1,hideFooter:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: NggModalComponent) => {\n  const isOpen = true;\n  return {\n    template: `\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" (closed)="isOpen = false">\n      <p>Modal Body</p>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  `,\n    props: {\n      ...args,\n      isOpen\n    }\n  };\n}',...Default.parameters?.docs?.source}}},Slideout.parameters={...Slideout.parameters,docs:{...Slideout.parameters?.docs,source:{originalSource:'(args: NggModalComponent) => {\n  const isOpen = true;\n  return {\n    template: `\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" (closed)="isOpen = false">\n      <p>Modal Body</p>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  `,\n    props: {\n      ...args,\n      isOpen\n    }\n  };\n}',...Slideout.parameters?.docs?.source}}},Takeover.parameters={...Takeover.parameters,docs:{...Takeover.parameters?.docs,source:{originalSource:'(args: NggModalComponent) => {\n  const isOpen = true;\n  return {\n    template: `\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" (closed)="isOpen = false">\n      <p>Modal Body</p>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  `,\n    props: {\n      ...args,\n      isOpen\n    }\n  };\n}',...Takeover.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:'(args: NggModalComponent) => {\n  const isOpen = true;\n  return {\n    template: `\n    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="hideHeader" [hideFooter]="hideFooter" (closed)="isOpen = false">\n      <ng-container nggModalHeader>\n        <div style="display:flex;align-items:center;">\n          <h3>{{header}}</h3>\n          <span style="margin-left:10px;" class="badge info">!</span>\n        </div>\n      </ng-container>\n      <p>Modal Body</p>\n      <ng-container nggModalFooter>\n          <button class="danger" (click)="isOpen = false">Close</button>\n      </ng-container>\n    </ngg-modal>\n    <button (click)="isOpen = true">Open Modal</button>\n  `,\n    props: {\n      ...args,\n      isOpen\n    }\n  };\n}',...Custom.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Slideout","Takeover","Custom"]},"./libs/angular/src/lib/modal/documentation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./libs/angular/src/lib/modal/modal.component.ts"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",strong:"strong",h3:"h3"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"modal",children:"Modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing-module",children:"Importing module"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you're only using the modal component, you just need to import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"NggModalModule"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"import { NgModule } from '@angular/core'\nimport { BrowserModule } from '@angular/platform-browser'\nimport { NggModalModule } from '@sebgroup/green-angular/src/lib/modal'\n\nimport { AppComponent } from './app.component'\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, NggModalModule],\n  exports: [],\n})\nexport class AppModule {}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"modal-variants",children:"Modal variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Green currently provides three different variants of the modal - ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"dialog"})," (default), ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"slide-out"})," (slideout) and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"fullscreen"})," (takeover)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"modal-options",children:"Modal Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["| Input        | Type        | Description                                                                                     |\n| :----------- | :---------- | :---------------------------------------------------------------------------------------------- |\n| modalType    | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ModalType"})," | The type of modal. Can be: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"default"})," (dialog), ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"slideout"})," (slide-out), ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"takeover"})," (fullscreen). |\n| header       | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"}),"    | The header text of the modal.                                                                   |\n| confirmLabel | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"}),"    | The text of the confirm button.                                                                 |\n| dismissLabel | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"}),"    | The text of the dismiss button.                                                                 |\n| size         | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"}),"    | The size of the modal.                                                                          |\n| isOpen       | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"boolean"}),"   | Determines whether the modal is open of closed.                                                 |\n| trapFocus    | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"boolean"}),"   | Determines whether focus should be trapped inside the modal or not.                             |\n| hideHeader   | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"boolean"}),"   | Determines whether the header part of the modal is hidden or not.                               |\n| hideFooter   | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"boolean"}),"   | Determines wheather the footer part of the modal is hidden or not.                              |"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"outputs",children:"Outputs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["| Event        | Description                                                                                                                                                                                                        |\n| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| isOpenChange | Event emitted when modal is opened or closed. Note that the event is not emitted if subscribed to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"closed"}),".                                                                                                        |\n| closed       | Event emitted when modal is usually closed (but modal is not closed and will not close by itself). When subscribed to this event you will need to close the modal manually e.g. by updating the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"isOpen"})," property. |\n| confirm      | Event emitted when confirm button is clicked.                                                                                                                                                                      |\n| dismiss      | Event emitted when dismiss button is clicked.                                                                                                                                                                      |"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"directives",children:"Directives"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"| Directive               | Selector       | Description                                        |\n| :---------------------- | :------------- | :------------------------------------------------- |\n| NggModalHeaderDirective | nggModalHeader | Used for customizing the header part of the modal. |\n| NggModalFooterDirective | nggModalFooter | Used for customizing the footer part of the modal. |"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To use this component:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:"<ngg-modal></ngg-modal>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default-modal-dialog",children:"Default modal (Dialog)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.gG,{id:"components-modal--default"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"slide-out-modal",children:"Slide-out modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.gG,{id:"components-modal--slideout"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"takeover-modal",children:"Takeover modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.gG,{id:"components-modal--takeover"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"custom-modal",children:"Custom modal"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"nggModalHeader"})," (NggModalHeaderDirective) and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"nggModalFooter"})," (NggModalFooterDirective) directives to customize header and footer part of the modal."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.gG,{id:"components-modal--custom"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./libs/angular/src/lib/modal/modal.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n:host.open {\n  height: 100vh;\n  left: 0;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: var(--sg-z-index-modal);\n}\n:host.open > section[role=dialog] {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.body::-webkit-scrollbar {\n  background-color: rgb(248, 248, 248);\n  height: 10px;\n  width: 10px;\n}\n\n.body::-webkit-scrollbar-thumb {\n  background-color: rgb(206, 206, 206);\n}\n\n.body::-webkit-scrollbar-track {\n  background-color: rgb(248, 248, 248);\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2509803922);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);