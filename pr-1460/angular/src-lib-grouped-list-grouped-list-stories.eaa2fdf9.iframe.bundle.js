/*! For license information please see src-lib-grouped-list-grouped-list-stories.eaa2fdf9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[861],{"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./libs/angular/src/lib/grouped-list/grouped-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>grouped_list_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),core_element_module=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.module.ts"),chunk_KBYQYDL3=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),chunk_K3GEZRU5=__webpack_require__("./dist/libs/core/src/chunks/chunk.K3GEZRU5.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),GdsGroupedList=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),(0,chunk_KBYQYDL3.t)(this),chunk_K3GEZRU5.nD.instance.apply(this,"gds-grouped-list")}render(){return chunk_VOYMQ322.qy`${(0,when.z)(this.label,(()=>chunk_VOYMQ322.qy`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`))}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsGroupedList.prototype,"label",2),GdsGroupedList=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-grouped-list")],GdsGroupedList);var GdsListItem=class extends chunk_ZQ4D5K7J.j{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return chunk_VOYMQ322.qy`<slot></slot>`}};GdsListItem=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-list-item")],GdsListItem);__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");chunk_K3GEZRU5._Z();const grouped_list_stories={title:"Components/Grouped List",decorators:[(0,dist.moduleMetadata)({imports:[core_element_module.$],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]})],parameters:{}},Default=(args=>({template:`\n    <gds-grouped-list *nggCoreElement label="${args.label}">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,props:args})).bind({});Default.args={label:"Grouped list label"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => ({\n  template: `\n    <gds-grouped-list *nggCoreElement label="${args.label}">\n        <gds-list-item *nggCoreElement>Item 1</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 2</gds-list-item>\n        <gds-list-item *nggCoreElement>Item 3</gds-list-item>\n    </gds-grouped-list>\n    `,\n  props: args\n})',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=src-lib-grouped-list-grouped-list-stories.eaa2fdf9.iframe.bundle.js.map