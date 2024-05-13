/*! For license information please see lib-progress-circle-documentation-mdx.d30681e5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[6218,4189,1765,6287],{"./libs/angular/src/lib/progress-circle/progress-circle.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>NggProgressCircleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/extract/src/index.ts");let NggProgressCircleComponent=class NggProgressCircleComponent{constructor(){this._startValue="0deg",this._endValue="0deg",this.id=`${(0,src.zE)()}-progress-circle`,this.theme="warning"}set value(val){const degrees=`${(0,src.Ud)(val)}deg`;this._endValue=degrees,"disabled"===this.theme&&(this._startValue=degrees)}static#_=this.propDecorators={_startValue:[{type:core.HostBinding,args:["style.--start-value"]}],_endValue:[{type:core.HostBinding,args:["style.--end-value"]}],id:[{type:core.Input}],theme:[{type:core.Input}],value:[{type:core.Input}]}};NggProgressCircleComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-progress-circle",template:'<div\n  class="gds-progress-circle"\n  role="progressbar"\n  [attr.aria-valuenow]="value"\n  [attr.aria-valuemin]="0"\n  [attr.aria-valuemax]="100"\n  [attr.aria-label]="id"\n>\n  <div class="ring full-ring">\n    <div class="ring-progress" [ngClass]="theme"></div>\n  </div>\n  <div class="ring">\n    <div class="ring-progress" [ngClass]="theme"></div>\n  </div>\n  <div class="inner-circle">\n    <ng-content></ng-content>\n  </div>\n</div>\n'})],NggProgressCircleComponent)},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pS:()=>PaginationI18n,Ud:()=>calculateDegrees,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors});const randomId=()=>"gds-"+Math.random().toString(36).substring(2,9),PaginationI18n={paginationLabel:"Pagination",nextPageLabel:"Next page",previousPageLabel:"Previous page",firstPageLabel:"First page",lastPageLabel:"Last page",jumpToPageLabel:"Go to page",getPageLabel:index=>`Page ${index+1}`},calculateDegrees=percent=>percent>100?180:percent<0?0:1.8*percent,sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=val=>`linear-gradient(\n        to right,\n        ${sliderColors.primary} 0%,\n        ${sliderColors.primary} ${val}%,\n        ${sliderColors.disabled} ${val}%,\n        ${sliderColors.disabled} 100%\n      )`},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/angular/src/lib/progress-circle/documentation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./libs/angular/src/lib/progress-circle/progress-circle.component.ts"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",em:"em",h4:"h4"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"progress-circle",children:"Progress Circle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A progress circle component that shows the progression of a system operation in a visual way."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing-module",children:"Importing Module"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"import { NgModule } from '@angular/core'\nimport { BroswerModule } from '@angular/platform-browser'\nimport { NggProgressCircleModule } from '@sebgroup/green-angular/src/lib/progress-circle'\n\nimport { AppComponent } from './app.component'\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BroswerModule, NggProgressCircleModule],\n  exports: [],\n})\nexport class AppModule {}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"progress-circle-options",children:"Progress Circle Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["| Input | Type                     | Description                                         |\n| :---- | :----------------------- | :-------------------------------------------------- |\n| id    | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"string"}),"                 | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"(Optional)"})," ID of the progress circle              |\n| theme | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ProgressCircleThemes"}),"* | Theme of the progress circle (default is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"warning"}),") |\n| value | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"number"}),"                 | Progress circle value in percentage                 |"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"progress-circle-themes",children:"*Progress Circle Themes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Available themes are: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"success"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"warning"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"info"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"danger"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"light"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"dark"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"disabled"}),". Choosing the disabled theme would disable the fill animation of the progress circle on component initialization."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The progress circle component is controlled with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"value"})," input. By default, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"value"})," represents the current percentage of progress, as the minimum and maximum values to be 0 and 100, respectively."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.gG,{id:"components-progress-circle--default"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Angular's content projection is used to insert whatever content is wanted to be displayed inside the progress circle component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:"<ngg-progress-circle>\n  <div>content here</div>\n</ngg-progress-circle>\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/tslib/tslib.es6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cg:()=>__decorate,Sn:()=>__metadata});function __decorate(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}function __metadata(metadataKey,metadataValue){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(metadataKey,metadataValue)}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);