/*! For license information please see components-badge-badge-mdx.e13180a6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[329,612],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./libs/core/src/components/badge/badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Variants:()=>Variants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/index.js");__webpack_require__("./libs/core/src/components/badge/badge.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Badge",component:"gds-badge"};var Basic={},Variants={render:function render(){return(0,lit__WEBPACK_IMPORTED_MODULE_1__.qy)(_templateObject||(_templateObject=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(['\n    <gds-badge variant="information">Information</gds-badge>\n    <gds-badge variant="success">Success</gds-badge>\n    <gds-badge variant="warning">Warning</gds-badge>\n    <gds-badge variant="error">Error</gds-badge>\n    <gds-badge variant="disabled">Disabled</gds-badge>\n    <gds-badge variant="surface">Surface</gds-badge>\n  '])))}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{}",...Basic.parameters?.docs?.source}}},Variants.parameters={...Variants.parameters,docs:{...Variants.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <gds-badge variant="information">Information</gds-badge>\n    <gds-badge variant="success">Success</gds-badge>\n    <gds-badge variant="warning">Warning</gds-badge>\n    <gds-badge variant="error">Error</gds-badge>\n    <gds-badge variant="disabled">Disabled</gds-badge>\n    <gds-badge variant="surface">Surface</gds-badge>\n  `\n}',...Variants.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Variants"]},"./libs/core/src/components/badge/badge.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),initializerDefineProperty=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/initializerDefineProperty.js"),initializerDefineProperty_default=__webpack_require__.n(initializerDefineProperty),inheritsLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/inheritsLoose.js"),inheritsLoose_default=__webpack_require__.n(inheritsLoose),classPrivateFieldLooseBase=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/classPrivateFieldLooseBase.js"),classPrivateFieldLooseBase_default=__webpack_require__.n(classPrivateFieldLooseBase),classPrivateFieldLooseKey=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/classPrivateFieldLooseKey.js"),classPrivateFieldLooseKey_default=__webpack_require__.n(classPrivateFieldLooseKey),applyDecoratedDescriptor=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js"),applyDecoratedDescriptor_default=__webpack_require__.n(applyDecoratedDescriptor),lit=(__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/initializerWarningHelper.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/lit/index.js")),decorators=__webpack_require__("./node_modules/lit/decorators.js");__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js");__webpack_require__("./node_modules/core-js/modules/es.error.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js");var when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),badge_styles=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./libs/core/src/components/badge/style/badge.styles.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(badge_styles.A,options);const style_badge_styles=badge_styles.A&&badge_styles.A.locals?badge_styles.A.locals:void 0;var _dec,_dec2,_dec3,_dec4,_dec5,_dec6,_class,_class2,_descriptor,_descriptor2,_descriptor3,_GdsBadge,_internals,_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6;_dec=(0,decorators.EM)("gds-badge"),_dec2=Reflect.metadata("design:type",Function),_dec3=Reflect.metadata("design:paramtypes",[]),_dec4=(0,decorators.MZ)({type:String,reflect:!0,attribute:"variant"}),_dec5=(0,decorators.MZ)({type:String,reflect:!0,attribute:"type"}),_dec6=(0,decorators.MZ)({type:String,reflect:!0,attribute:"icon"}),_dec(_class=_dec2(_class=_dec3((_internals=classPrivateFieldLooseKey_default()("internals"),_GdsBadge=function(_LitElement){function GdsBadge(){var _this;return _this=_LitElement.call(this)||this,Object.defineProperty(_this,_internals,{writable:!0,value:void 0}),initializerDefineProperty_default()(_this,"variant",_descriptor,_this),initializerDefineProperty_default()(_this,"type",_descriptor2,_this),initializerDefineProperty_default()(_this,"icon",_descriptor3,_this),classPrivateFieldLooseBase_default()(_this,_internals)[_internals]=_this.attachInternals(),function constrainSlots(self){self.updateComplete.then((function(){var _self$shadowRoot,slots=null==(_self$shadowRoot=self.shadowRoot)?void 0:_self$shadowRoot.querySelectorAll("slot[gds-allow]");if(slots){for(var _i=0,_Array$from=Array.from(self.childNodes);_i<_Array$from.length;_i++){var _node$textContent,_node$parentNode,node=_Array$from[_i];node.nodeType===Node.TEXT_NODE&&""===(null==(_node$textContent=node.textContent)?void 0:_node$textContent.trim())&&(null==(_node$parentNode=node.parentNode)||_node$parentNode.removeChild(node))}var constrain=function constrain(slot){for(var _slot$getAttribute,allowed=(null==(_slot$getAttribute=slot.getAttribute("gds-allow"))?void 0:_slot$getAttribute.split(" "))||[],_i2=0,_Array$from2=Array.from(slot.assignedNodes());_i2<_Array$from2.length;_i2++){var _node$parentNode2,_node=_Array$from2[_i2];allowed.includes(_node.nodeName.toLowerCase())||null==(_node$parentNode2=_node.parentNode)||_node$parentNode2.removeChild(_node)}};slots.forEach((function(slot){constrain(slot),slot.addEventListener("slotchange",(function(){return constrain(slot)}))}))}}))}(_this),_this}inheritsLoose_default()(GdsBadge,_LitElement);var _proto=GdsBadge.prototype;return _proto.slotIcon=function slotIcon(){return(0,lit.qy)(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()([' <slot name="icon" gds-allow="gds-icon"></slot> '])))},_proto.slotLabel=function slotLabel(){var _this$textContent,content=(null==(_this$textContent=this.textContent)?void 0:_this$textContent.trim())||"",hasLabel=""!==content,label=content;return"counter"===this.type.toLowerCase()&&label.length>4?(label=label.substring(0,4),hasLabel?(0,lit.qy)(_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(["",""])),label):""):hasLabel?(0,lit.qy)(_templateObject3||(_templateObject3=taggedTemplateLiteralLoose_default()(['<slot part="label" gds-allow="#text"></slot>']))):""},_proto.render=function render(){var hasIconSlot=null!==this.querySelector('[slot="icon"]'),content=(0,lit.qy)(_templateObject4||(_templateObject4=taggedTemplateLiteralLoose_default()(["","",""])),(0,when.z)(hasIconSlot,(function(){return(0,lit.qy)(_templateObject5||(_templateObject5=taggedTemplateLiteralLoose_default()(['<slot name="icon" gds-allow="gds-icon"></slot>'])))})),this.slotLabel());return(0,lit.qy)(_templateObject6||(_templateObject6=taggedTemplateLiteralLoose_default()(['<div class="gds-badge">',"</div>"])),content)},GdsBadge}(lit.WF),_GdsBadge.styles=(0,lit.iz)(style_badge_styles),_GdsBadge.shadowRootOptions={mode:"open",delegatesFocus:!0},_class2=_GdsBadge,_descriptor=applyDecoratedDescriptor_default()(_class2.prototype,"variant",[_dec4],{configurable:!0,enumerable:!0,writable:!0,initializer:function initializer(){return""}}),_descriptor2=applyDecoratedDescriptor_default()(_class2.prototype,"type",[_dec5],{configurable:!0,enumerable:!0,writable:!0,initializer:function initializer(){return""}}),_descriptor3=applyDecoratedDescriptor_default()(_class2.prototype,"icon",[_dec6],{configurable:!0,enumerable:!0,writable:!0,initializer:function initializer(){return""}}),_class=_class2))||_class)||_class)},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./libs/core/src/components/badge/style/badge.styles.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@layer gds-badge, shell, tokens, a11y, variants, types;\n\n@layer gds-badge {\n  @layer tokens {\n    :host {\n      --gds-badge-cl: rgba(53, 53, 49, 1);\n      --gds-badge-bg: rgba(243, 243, 242, 1);\n\n      --gds-badge-cl-information: rgba(53, 53, 49, 1);\n      --gds-badge-bg-information: rgba(243, 243, 242, 1);\n\n      --gds-badge-cl-success: rgba(0, 109, 49, 1);\n      --gds-badge-bg-success: rgba(234, 255, 232, 1);\n\n      --gds-badge-cl-warning: rgba(125, 87, 0, 1);\n      --gds-badge-bg-warning: rgba(255, 238, 217, 1);\n\n      --gds-badge-cl-error: rgba(186, 29, 0, 1);\n      --gds-badge-bg-error: rgba(255, 237, 233, 1);\n\n      --gds-badge-cl-disabled: rgba(157, 157, 149, 1);\n      --gds-badge-bg-disabled: rgba(249, 249, 249, 1);\n\n      --gds-badge-cl-surface: rgba(106, 106, 98, 1);\n      --gds-badge-bg-surface: rgba(255, 255, 255, 1);\n\n      /* Dark Mode */\n      --gds-badge-cl-dark: rgba(53, 53, 49, 1);\n      --gds-badge-bg-dark: rgba(243, 243, 242, 1);\n\n      --gds-badge-cl-information-dark: rgba(53, 53, 49, 1);\n      --gds-badge-bg-information-dark: rgba(243, 243, 242, 1);\n\n      --gds-badge-cl-success-dark: rgba(0, 109, 49, 1);\n      --gds-badge-bg-success-dark: rgba(234, 255, 232, 1);\n\n      --gds-badge-cl-warning-dark: rgba(125, 87, 0, 1);\n      --gds-badge-bg-warning-dark: rgba(255, 238, 217, 1);\n\n      --gds-badge-cl-error-dark: rgba(186, 29, 0, 1);\n      --gds-badge-bg-error-dark: rgba(255, 237, 233, 1);\n\n      --gds-badge-cl-disabled-dark: rgba(157, 157, 149, 1);\n      --gds-badge-bg-disabled-dark: rgba(249, 249, 249, 1);\n\n      --gds-badge-cl-surface-dark: rgba(106, 106, 98, 1);\n      --gds-badge-bg-surface-dark: rgba(255, 255, 255, 1);\n\n      --gds-badge-radii: 4px;\n\n      --gds-badge-fs: 12px;\n      --gds-badge-lh: 1;\n      --gds-badge-fw: 500;\n      --gds-badge-inline-padding: 10px;\n      --gds-badge-block-padding: 6px;\n    }\n  }\n  @layer a11y {\n    @media (prefers-color-scheme: dark) {\n      :host {\n        --gds-badge-cl: var(--gds-badge-cl-dark);\n        --gds-badge-bg: var(--gds-badge-bg-dark);\n\n        --gds-badge-cl-information: var(--gds-badge-cl-information-dark);\n        --gds-badge-bg-information: var(--gds-badge-bg-information-dark);\n\n        --gds-badge-cl-success: var(--gds-badge-cl-success-dark);\n        --gds-badge-bg-success: var(--gds-badge-bg-success-dark);\n\n        --gds-badge-cl-warning: var(--gds-badge-cl-warning-dark);\n        --gds-badge-bg-warning: var(--gds-badge-bg-warning-dark);\n\n        --gds-badge-cl-error: var(--gds-badge-cl-error-dark);\n        --gds-badge-bg-error: var(--gds-badge-bg-error-dark);\n\n        --gds-badge-cl-disabled: var(--gds-badge-cl-disabled-dark);\n        --gds-badge-bg-disabled: var(--gds-badge-bg-disabled-dark);\n\n        --gds-badge-cl-surface: var(--gds-badge-cl-surface-dark);\n        --gds-badge-bg-surface: var(--gds-badge-bg-surface-dark);\n      }\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n      :host {\n        --gds-badge-motion: 0;\n      }\n    }\n\n    @media (prefers-reduced-transparency: reduce) {\n      :host {\n        --gds-badge-transparency: 1;\n      }\n    }\n\n    @media (prefers-contrast: more) {\n      :root {\n        --gds-badge-contrast: 1;\n      }\n    }\n  }\n\n  @layer shell {\n    .gds-badge {\n      align-items: center;\n      background-color: var(--gds-badge-bg);\n      border-radius: var(--gds-badge-radii);\n      color: var(--gds-badge-cl);\n      display: flex;\n      font-size: var(--gds-badge-fs);\n      font-weight: var(--gds-badge-fw);\n      gap: 1ch;\n      height: 1lh;\n      justify-content: center;\n      letter-spacing: normal;\n      line-height: var(--gds-badge-lh);\n      max-width: max-content;\n      padding-block: var(--gds-badge-block-padding);\n      padding-inline: var(--gds-badge-inline-padding);\n      text-overflow: ellipsis;\n      text-transform: uppercase;\n      white-space: nowrap;\n\n      @layer variants {\n        :host([variant='information']) & {\n          --gds-badge-cl: var(--gds-badge-cl-information);\n          --gds-badge-bg: var(--gds-badge-bg-information);\n        }\n\n        :host([variant='success']) & {\n          --gds-badge-cl: var(--gds-badge-cl-success);\n          --gds-badge-bg: var(--gds-badge-bg-success);\n        }\n\n        :host([variant='warning']) & {\n          --gds-badge-cl: var(--gds-badge-cl-warning);\n          --gds-badge-bg: var(--gds-badge-bg-warning);\n        }\n\n        :host([variant='error']) & {\n          --gds-badge-cl: var(--gds-badge-cl-error);\n          --gds-badge-bg: var(--gds-badge-bg-error);\n        }\n\n        :host([variant='disabled']) & {\n          --gds-badge-cl: var(--gds-badge-cl-disabled);\n          --gds-badge-bg: var(--gds-badge-bg-disabled);\n          pointer-events: none;\n        }\n\n        :host([variant='surface']) & {\n          --gds-badge-cl: var(--gds-badge-cl-surface);\n          --gds-badge-bg: var(--gds-badge-bg-surface);\n        }\n      }\n\n      @layer types {\n        :host([type='counter']) & {\n          max-width: var(--gds-badge-counter-max-width);\n        }\n      }\n    }\n  }\n}\n","",{version:3,sources:["webpack://./libs/core/src/components/badge/style/badge.styles.css"],names:[],mappings:"AAAA,sDAAsD;;AAEtD;EACE;IACE;MACE,mCAAmC;MACnC,sCAAsC;;MAEtC,+CAA+C;MAC/C,kDAAkD;;MAElD,2CAA2C;MAC3C,8CAA8C;;MAE9C,2CAA2C;MAC3C,8CAA8C;;MAE9C,yCAAyC;MACzC,4CAA4C;;MAE5C,+CAA+C;MAC/C,+CAA+C;;MAE/C,6CAA6C;MAC7C,8CAA8C;;MAE9C,cAAc;MACd,wCAAwC;MACxC,2CAA2C;;MAE3C,oDAAoD;MACpD,uDAAuD;;MAEvD,gDAAgD;MAChD,mDAAmD;;MAEnD,gDAAgD;MAChD,mDAAmD;;MAEnD,8CAA8C;MAC9C,iDAAiD;;MAEjD,oDAAoD;MACpD,oDAAoD;;MAEpD,kDAAkD;MAClD,mDAAmD;;MAEnD,sBAAsB;;MAEtB,oBAAoB;MACpB,iBAAiB;MACjB,mBAAmB;MACnB,gCAAgC;MAChC,8BAA8B;IAChC;EACF;EACA;IACE;MACE;QACE,wCAAwC;QACxC,wCAAwC;;QAExC,gEAAgE;QAChE,gEAAgE;;QAEhE,wDAAwD;QACxD,wDAAwD;;QAExD,wDAAwD;QACxD,wDAAwD;;QAExD,oDAAoD;QACpD,oDAAoD;;QAEpD,0DAA0D;QAC1D,0DAA0D;;QAE1D,wDAAwD;QACxD,wDAAwD;MAC1D;IACF;;IAEA;MACE;QACE,qBAAqB;MACvB;IACF;;IAEA;MACE;QACE,2BAA2B;MAC7B;IACF;;IAEA;MACE;QACE,uBAAuB;MACzB;IACF;EACF;;EAEA;IACE;MACE,mBAAmB;MACnB,qCAAqC;MACrC,qCAAqC;MACrC,0BAA0B;MAC1B,aAAa;MACb,8BAA8B;MAC9B,gCAAgC;MAChC,QAAQ;MACR,WAAW;MACX,uBAAuB;MACvB,sBAAsB;MACtB,gCAAgC;MAChC,sBAAsB;MACtB,6CAA6C;MAC7C,+CAA+C;MAC/C,uBAAuB;MACvB,yBAAyB;MACzB,mBAAmB;;MAEnB;QACE;UACE,+CAA+C;UAC/C,+CAA+C;QACjD;;QAEA;UACE,2CAA2C;UAC3C,2CAA2C;QAC7C;;QAEA;UACE,2CAA2C;UAC3C,2CAA2C;QAC7C;;QAEA;UACE,yCAAyC;UACzC,yCAAyC;QAC3C;;QAEA;UACE,4CAA4C;UAC5C,4CAA4C;UAC5C,oBAAoB;QACtB;;QAEA;UACE,2CAA2C;UAC3C,2CAA2C;QAC7C;MACF;;MAEA;QACE;UACE,6CAA6C;QAC/C;MACF;IACF;EACF;AACF",sourcesContent:["@layer gds-badge, shell, tokens, a11y, variants, types;\n\n@layer gds-badge {\n  @layer tokens {\n    :host {\n      --gds-badge-cl: rgba(53, 53, 49, 1);\n      --gds-badge-bg: rgba(243, 243, 242, 1);\n\n      --gds-badge-cl-information: rgba(53, 53, 49, 1);\n      --gds-badge-bg-information: rgba(243, 243, 242, 1);\n\n      --gds-badge-cl-success: rgba(0, 109, 49, 1);\n      --gds-badge-bg-success: rgba(234, 255, 232, 1);\n\n      --gds-badge-cl-warning: rgba(125, 87, 0, 1);\n      --gds-badge-bg-warning: rgba(255, 238, 217, 1);\n\n      --gds-badge-cl-error: rgba(186, 29, 0, 1);\n      --gds-badge-bg-error: rgba(255, 237, 233, 1);\n\n      --gds-badge-cl-disabled: rgba(157, 157, 149, 1);\n      --gds-badge-bg-disabled: rgba(249, 249, 249, 1);\n\n      --gds-badge-cl-surface: rgba(106, 106, 98, 1);\n      --gds-badge-bg-surface: rgba(255, 255, 255, 1);\n\n      /* Dark Mode */\n      --gds-badge-cl-dark: rgba(53, 53, 49, 1);\n      --gds-badge-bg-dark: rgba(243, 243, 242, 1);\n\n      --gds-badge-cl-information-dark: rgba(53, 53, 49, 1);\n      --gds-badge-bg-information-dark: rgba(243, 243, 242, 1);\n\n      --gds-badge-cl-success-dark: rgba(0, 109, 49, 1);\n      --gds-badge-bg-success-dark: rgba(234, 255, 232, 1);\n\n      --gds-badge-cl-warning-dark: rgba(125, 87, 0, 1);\n      --gds-badge-bg-warning-dark: rgba(255, 238, 217, 1);\n\n      --gds-badge-cl-error-dark: rgba(186, 29, 0, 1);\n      --gds-badge-bg-error-dark: rgba(255, 237, 233, 1);\n\n      --gds-badge-cl-disabled-dark: rgba(157, 157, 149, 1);\n      --gds-badge-bg-disabled-dark: rgba(249, 249, 249, 1);\n\n      --gds-badge-cl-surface-dark: rgba(106, 106, 98, 1);\n      --gds-badge-bg-surface-dark: rgba(255, 255, 255, 1);\n\n      --gds-badge-radii: 4px;\n\n      --gds-badge-fs: 12px;\n      --gds-badge-lh: 1;\n      --gds-badge-fw: 500;\n      --gds-badge-inline-padding: 10px;\n      --gds-badge-block-padding: 6px;\n    }\n  }\n  @layer a11y {\n    @media (prefers-color-scheme: dark) {\n      :host {\n        --gds-badge-cl: var(--gds-badge-cl-dark);\n        --gds-badge-bg: var(--gds-badge-bg-dark);\n\n        --gds-badge-cl-information: var(--gds-badge-cl-information-dark);\n        --gds-badge-bg-information: var(--gds-badge-bg-information-dark);\n\n        --gds-badge-cl-success: var(--gds-badge-cl-success-dark);\n        --gds-badge-bg-success: var(--gds-badge-bg-success-dark);\n\n        --gds-badge-cl-warning: var(--gds-badge-cl-warning-dark);\n        --gds-badge-bg-warning: var(--gds-badge-bg-warning-dark);\n\n        --gds-badge-cl-error: var(--gds-badge-cl-error-dark);\n        --gds-badge-bg-error: var(--gds-badge-bg-error-dark);\n\n        --gds-badge-cl-disabled: var(--gds-badge-cl-disabled-dark);\n        --gds-badge-bg-disabled: var(--gds-badge-bg-disabled-dark);\n\n        --gds-badge-cl-surface: var(--gds-badge-cl-surface-dark);\n        --gds-badge-bg-surface: var(--gds-badge-bg-surface-dark);\n      }\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n      :host {\n        --gds-badge-motion: 0;\n      }\n    }\n\n    @media (prefers-reduced-transparency: reduce) {\n      :host {\n        --gds-badge-transparency: 1;\n      }\n    }\n\n    @media (prefers-contrast: more) {\n      :root {\n        --gds-badge-contrast: 1;\n      }\n    }\n  }\n\n  @layer shell {\n    .gds-badge {\n      align-items: center;\n      background-color: var(--gds-badge-bg);\n      border-radius: var(--gds-badge-radii);\n      color: var(--gds-badge-cl);\n      display: flex;\n      font-size: var(--gds-badge-fs);\n      font-weight: var(--gds-badge-fw);\n      gap: 1ch;\n      height: 1lh;\n      justify-content: center;\n      letter-spacing: normal;\n      line-height: var(--gds-badge-lh);\n      max-width: max-content;\n      padding-block: var(--gds-badge-block-padding);\n      padding-inline: var(--gds-badge-inline-padding);\n      text-overflow: ellipsis;\n      text-transform: uppercase;\n      white-space: nowrap;\n\n      @layer variants {\n        :host([variant='information']) & {\n          --gds-badge-cl: var(--gds-badge-cl-information);\n          --gds-badge-bg: var(--gds-badge-bg-information);\n        }\n\n        :host([variant='success']) & {\n          --gds-badge-cl: var(--gds-badge-cl-success);\n          --gds-badge-bg: var(--gds-badge-bg-success);\n        }\n\n        :host([variant='warning']) & {\n          --gds-badge-cl: var(--gds-badge-cl-warning);\n          --gds-badge-bg: var(--gds-badge-bg-warning);\n        }\n\n        :host([variant='error']) & {\n          --gds-badge-cl: var(--gds-badge-cl-error);\n          --gds-badge-bg: var(--gds-badge-bg-error);\n        }\n\n        :host([variant='disabled']) & {\n          --gds-badge-cl: var(--gds-badge-cl-disabled);\n          --gds-badge-bg: var(--gds-badge-bg-disabled);\n          pointer-events: none;\n        }\n\n        :host([variant='surface']) & {\n          --gds-badge-cl: var(--gds-badge-cl-surface);\n          --gds-badge-bg: var(--gds-badge-bg-surface);\n        }\n      }\n\n      @layer types {\n        :host([type='counter']) & {\n          max-width: var(--gds-badge-counter-max-width);\n        }\n      }\n    }\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./libs/core/src/components/badge/badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_badge_stories_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/core/src/components/badge/badge.stories.ts");__webpack_require__("./libs/core/src/components/badge/badge.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_badge_stories_ts__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Tn,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_badge_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Variants})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);