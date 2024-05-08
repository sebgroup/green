(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1645],{"./libs/angular/src/lib/cell-table/cell-table-item.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>CellTableItemComponent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs");let CellTableItemComponent=class CellTableItemComponent{constructor(sanitizer){this.sanitizer=sanitizer,this.valueType="string",this.id="",this.getSignColor=value=>/[−-]/.test(String(value))?"text-danger":/[1-9]/.test(String(value))?"text-success":""}transformHTML(value){return value&&value.length?this.sanitizer.bypassSecurityTrustHtml(value):""}static#_=this.ctorParameters=()=>[{type:_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer}];static#_2=this.propDecorators={row:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],valueType:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}]}};CellTableItemComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"[nggCellTableItem]",template:"\n    <ng-container [ngSwitch]=\"valueType\">\n      <span *ngSwitchCase=\"'string'\">{{ row || '–' }}</span>\n      <span *ngSwitchCase=\"'number'\">{{ (row | number) || '–' }}</span>\n      <span *ngSwitchCase=\"'datetime'\">{{\n        (row | date: 'HH:mm:ss') || '–'\n      }}</span>\n      <span *ngSwitchCase=\"'date'\">{{\n        (row | date: 'YYYY-MM-dd') || '–'\n      }}</span>\n      <span\n        *ngSwitchCase=\"'custom-html'\"\n        [innerHtml]=\"transformHTML(row) || '–'\"\n      ></span>\n      <span *ngSwitchCase=\"'sign'\" [ngClass]=\"getSignColor(row)\">{{\n        row || '–'\n      }}</span>\n      <span *ngSwitchCase=\"'pct'\">{{ row || '–' }}</span>\n      <span *ngSwitchCase=\"'streamSign'\" [nggSlidingUnderline]=\"row\">{{\n        row || '–'\n      }}</span>\n      <span *ngSwitchDefault>–</span>\n    </ng-container>\n  "}),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Sn)("design:paramtypes",[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer])],CellTableItemComponent)},"./libs/angular/src/lib/cell-table/cell-table-item.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Heading:()=>Heading,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_cell_table_item_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/angular/src/lib/cell-table/cell-table-item.component.ts"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:_cell_table_item_component__WEBPACK_IMPORTED_MODULE_0__.N,title:"CellTableItemComponent"},Primary={args:{valueType:"string",id:""}},Heading={args:{valueType:"string",id:""},play:(_ref=(0,_home_runner_work_green_green_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__.A)((function*({canvasElement}){const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_3__.E)(canvas.getByText(/cell-table-item works!/gi)).toBeTruthy()})),function play(_x){return _ref.apply(this,arguments)})};var _ref;Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    valueType: 'string',\n    id: ''\n  }\n}",...Primary.parameters?.docs?.source}}},Heading.parameters={...Heading.parameters,docs:{...Heading.parameters?.docs,source:{originalSource:"{\n  args: {\n    valueType: 'string',\n    id: ''\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText(/cell-table-item works!/gi)).toBeTruthy();\n  }\n}",...Heading.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Heading"]},"?4f7e":()=>{}}]);