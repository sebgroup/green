/*! For license information please see src-lib-grouped-list-grouped-list-stories.8f43266e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[861],{"./libs/angular/src/lib/shared/core-element/core-element.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>NggCoreElementDirective});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js");__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");let NggCoreElementDirective=class NggCoreElementDirective{constructor(){this.viewRef=null,this.document=(0,core.inject)(common.DOCUMENT),this.renderer=(0,core.inject)(core.Renderer2),this.vcr=(0,core.inject)(core.ViewContainerRef),this.cdr=(0,core.inject)(core.ChangeDetectorRef),this.template=(0,core.inject)(core.TemplateRef)}ngOnInit(){this.vcr.clear();const originalCreateElement=this.renderer.createElement;this.renderer.createElement=(name,_namespace)=>this.document.createElement((0,chunk_VOYMQ322.Eq)(name)),this.viewRef=this.vcr.createEmbeddedView(this.template),this.renderer.createElement=originalCreateElement,this.cdr.markForCheck()}};NggCoreElementDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[nggCoreElement]"})],NggCoreElementDirective)},"./libs/angular/src/lib/shared/core-element/core-element.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>NggCoreWrapperModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_core_element_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.directive.ts");let NggCoreWrapperModule=class NggCoreWrapperModule{};NggCoreWrapperModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_core_element_directive__WEBPACK_IMPORTED_MODULE_0__.L],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_core_element_directive__WEBPACK_IMPORTED_MODULE_0__.L]})],NggCoreWrapperModule)},"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./libs/angular/src/lib/grouped-list/grouped-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>grouped_list_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),chunk_KBYQYDL3=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),chunk_ZLWSCK7R=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZLWSCK7R.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),GdsGroupedList=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),(0,chunk_KBYQYDL3.t)(this),chunk_ZLWSCK7R.nD.instance.apply(this,"gds-grouped-list")}render(){return chunk_VOYMQ322.qy`${(0,when.z)(this.label,(()=>chunk_VOYMQ322.qy`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`))}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsGroupedList.prototype,"label",2),GdsGroupedList=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-grouped-list")],GdsGroupedList);var GdsListItem=class extends chunk_ZQ4D5K7J.j{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return chunk_VOYMQ322.qy`<slot></slot>`}};GdsListItem=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-list-item")],GdsListItem);__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");var core_element_module=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.module.ts"),grouped_list_docs=__webpack_require__("./libs/angular/src/lib/grouped-list/grouped-list.docs.mdx");const grouped_list_stories={title:"Components/Grouped List",decorators:[(0,dist.moduleMetadata)({imports:[core_element_module.$],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]})],parameters:{docs:{page:grouped_list_docs.default}}},Default=(args=>({template:`\n    <gds-grouped-list *nggCoreElement label="${args.label}">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,props:args})).bind({});Default.args={label:"Grouped list label"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => ({\n  template: `\n    <gds-grouped-list *nggCoreElement label="${args.label}">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,\n  props: args\n})',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./libs/angular/src/lib/grouped-list/grouped-list.docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",pre:"pre",h3:"h3"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"grouped-list",children:"Grouped list"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/sebgroup/green/tree/main/libs/core/src/components/grouped-list",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"}),"\n | \n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://designlibrary.sebgroup.com/components/component-list",target:"_blank",rel:"nofollow noopener noreferrer",children:"Usage guidelines"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Grouped List component is used to list many datapoints with labels in a structured way. They may be grouped under heading and they may have a link or button added to act on the data being displayed."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"use-web-component-in-angular",children:"Use Web component in Angular"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This is a Web component that comes from the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Green Core"})," library. Angular has support for using web components directly in the template. To use this webcomponent in Angular, you need to do the following:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Add the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," in the module that uses this component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'\nimport { NggCoreWrapperModule } from '@sebgroup/green-angular/common'\n\n@NgModule({\n    // Add the NggCoreWrapperModule to the `imports` array\n    imports: [NggCoreWrapperModule],\n    // Add the CUSTOM_ELEMENTS_SCHEMA to the `schemas` array\n    schemas: [CUSTOM_ELEMENTS_SCHEMA],\n})\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Import dependencies in the Angular component that uses it."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"import '@sebgroup/green-core/components/grouped-list/index.js'\n\n// if you need to interact with the component through the DOM, you can also import the class type like this:\n// import type { GdsGroupedList } from '@sebgroup/green-core/components/grouped-list/index.js'\n\n// Transitional styles will make the component get 2016 design\nimport * as GroupedListTransStyles from '@sebgroup/green-core/components/grouped-list/grouped-list.trans.styles.js'\n// Call this fuction to register the transitional styles\nGroupedListTransStyles.register()\n// This will load 2016 styles for all instances of Grouped List in the current document.\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the webcomponent in your template with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"*nggCoreElement"})," directive."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<gds-grouped-list *nggCoreElement label="Grouped list label">\n  <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n  <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n  <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n</gds-grouped-list>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.gG,{id:"components-grouped-list--default"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"attributes",children:"Attributes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["| Attributes | Type   | Description                     |\n| ---------- | ------ | ------------------------------- |\n| ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"label"}),"    | String | The label for the grouped list. |"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"slots",children:"Slots"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["| Slot        | Description                                                   |\n| ----------- | ------------------------------------------------------------- |\n| ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"(default)"})," | The default slot that accepts only ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<gds-list-item>"})," elements |"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
//# sourceMappingURL=src-lib-grouped-list-grouped-list-stories.8f43266e.iframe.bundle.js.map