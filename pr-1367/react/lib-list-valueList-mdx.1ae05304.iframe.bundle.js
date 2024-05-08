/*! For license information please see lib-list-valueList-mdx.1ae05304.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7987,5550],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/core-js/internals/object-assign.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),objectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys.js"),getOwnPropertySymbolsModule=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js"),propertyIsEnumerableModule=__webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),$assign=Object.assign,defineProperty=Object.defineProperty,concat=uncurryThis([].concat);module.exports=!$assign||fails((function(){if(DESCRIPTORS&&1!==$assign({b:1},$assign(defineProperty({},"a",{enumerable:!0,get:function(){defineProperty(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var A={},B={},symbol=Symbol("assign detection");return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){B[chr]=chr})),7!==$assign({},A)[symbol]||"abcdefghijklmnopqrst"!==objectKeys($assign({},B)).join("")}))?function assign(target,source){for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=getOwnPropertySymbolsModule.f,propertyIsEnumerable=propertyIsEnumerableModule.f;argumentsLength>index;)for(var key,S=IndexedObject(arguments[index++]),keys=getOwnPropertySymbols?concat(objectKeys(S),getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],DESCRIPTORS&&!call(propertyIsEnumerable,S,key)||(T[key]=S[key]);return T}:$assign},"./node_modules/core-js/modules/es.object.assign.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),assign=__webpack_require__("./node_modules/core-js/internals/object-assign.js");$({target:"Object",stat:!0,arity:2,forced:Object.assign!==assign},{assign})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/react/src/lib/list/valueList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _valueList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/react/src/lib/list/valueList.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay};var Primary={render:function render(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.List,Object.assign({},props,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Label,{children:"Ni vill sälja"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Value,{children:"Fritidshus"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Label,{children:"Lån på bostaden"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Value,{children:"1 000 000 kr"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Label,{children:"Ni köpte bostaden för"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Value,{children:"5 000 000 kr"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Label,{children:"Lägsta försäljningsbelopp"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Value,{children:"2 500 000 kr"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Label,{children:"Mäklararvode"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Value,{children:"50 000 kr"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Label,{children:"Kontantinsats från överskottet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_1__.Ay.Value,{children:"375 000 kr"})]}))}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: props => <ValueList.List {...props}>\n      <ValueList.Label>Ni vill sälja</ValueList.Label>\n      <ValueList.Value>Fritidshus</ValueList.Value>\n      <ValueList.Label>Lån på bostaden</ValueList.Label>\n      <ValueList.Value>1 000 000 kr</ValueList.Value>\n      <ValueList.Label>Ni köpte bostaden för</ValueList.Label>\n      <ValueList.Value>5 000 000 kr</ValueList.Value>\n      <ValueList.Label>Lägsta försäljningsbelopp</ValueList.Label>\n      <ValueList.Value>2 500 000 kr</ValueList.Value>\n      <ValueList.Label>Mäklararvode</ValueList.Label>\n      <ValueList.Value>50 000 kr</ValueList.Value>\n      <ValueList.Label>Kontantinsats från överskottet</ValueList.Label>\n      <ValueList.Value>375 000 kr</ValueList.Value>\n    </ValueList.List>\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./libs/react/src/lib/list/valueList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,B8:()=>List,JU:()=>Label,WT:()=>Value});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Label=function Label(_ref){var children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dt",{children})},Value=function Value(_ref2){var children=_ref2.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dd",{children})},List=function List(_ref3){var children=_ref3.children,classNames="gds-list";return _ref3.inverted&&(classNames+=" gds-list--inverted"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dl",{className:classNames,children})};const __WEBPACK_DEFAULT_EXPORT__={List,Label,Value};try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/list/valueList.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"libs/react/src/lib/list/valueList.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}try{Value.displayName="Value",Value.__docgenInfo={description:"",displayName:"Value",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/list/valueList.tsx#Value"]={docgenInfo:Value.__docgenInfo,name:"Value",path:"libs/react/src/lib/list/valueList.tsx#Value"})}catch(__react_docgen_typescript_loader_error){}try{List.displayName="List",List.__docgenInfo={description:"",displayName:"List",props:{inverted:{defaultValue:null,description:"",name:"inverted",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/list/valueList.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"libs/react/src/lib/list/valueList.tsx#List"})}catch(__react_docgen_typescript_loader_error){}},"./libs/react/src/lib/list/valueList.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_valueList_stories_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/list/valueList.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",a:"a",code:"code",h3:"h3",pre:"pre"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"Components/ValueList",of:_valueList_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h2,{id:"value-list-deprecated",children:["Value List ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"badge warning",style:{background:"var(--background)"},children:"Deprecated"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This component is deprecated in favour of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/docs/components-grouped-list--page",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"GroupedList"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_valueList_stories_tsx__WEBPACK_IMPORTED_MODULE_2__.default.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"value-list-props",children:"Value List Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { ValueList } from '@sebgroup/green-react'\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);