(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[5242],{"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutPropertiesLoose})},"./node_modules/core-js/internals/engine-is-bun.js":module=>{"use strict";module.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},"./node_modules/core-js/internals/object-assign.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),objectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys.js"),getOwnPropertySymbolsModule=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js"),propertyIsEnumerableModule=__webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),$assign=Object.assign,defineProperty=Object.defineProperty,concat=uncurryThis([].concat);module.exports=!$assign||fails((function(){if(DESCRIPTORS&&1!==$assign({b:1},$assign(defineProperty({},"a",{enumerable:!0,get:function(){defineProperty(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var A={},B={},symbol=Symbol("assign detection");return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){B[chr]=chr})),7!==$assign({},A)[symbol]||"abcdefghijklmnopqrst"!==objectKeys($assign({},B)).join("")}))?function assign(target,source){for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=getOwnPropertySymbolsModule.f,propertyIsEnumerable=propertyIsEnumerableModule.f;argumentsLength>index;)for(var key,S=IndexedObject(arguments[index++]),keys=getOwnPropertySymbols?concat(objectKeys(S),getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],DESCRIPTORS&&!call(propertyIsEnumerable,S,key)||(T[key]=S[key]);return T}:$assign},"./node_modules/core-js/internals/schedulers-fix.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var version,global=__webpack_require__("./node_modules/core-js/internals/global.js"),apply=__webpack_require__("./node_modules/core-js/internals/function-apply.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),ENGINE_IS_BUN=__webpack_require__("./node_modules/core-js/internals/engine-is-bun.js"),USER_AGENT=__webpack_require__("./node_modules/core-js/internals/engine-user-agent.js"),arraySlice=__webpack_require__("./node_modules/core-js/internals/array-slice.js"),validateArgumentsLength=__webpack_require__("./node_modules/core-js/internals/validate-arguments-length.js"),Function=global.Function,WRAP=/MSIE .\./.test(USER_AGENT)||ENGINE_IS_BUN&&((version=global.Bun.version.split(".")).length<3||"0"===version[0]&&(version[1]<3||"3"===version[1]&&"0"===version[2]));module.exports=function(scheduler,hasTimeArg){var firstParamIndex=hasTimeArg?2:1;return WRAP?function(handler,timeout){var boundArgs=validateArgumentsLength(arguments.length,1)>firstParamIndex,fn=isCallable(handler)?handler:Function(handler),params=boundArgs?arraySlice(arguments,firstParamIndex):[],callback=boundArgs?function(){apply(fn,this,params)}:fn;return hasTimeArg?scheduler(callback,timeout):scheduler(callback)}:scheduler}},"./node_modules/core-js/modules/es.object.assign.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),assign=__webpack_require__("./node_modules/core-js/internals/object-assign.js");$({target:"Object",stat:!0,arity:2,forced:Object.assign!==assign},{assign})},"./node_modules/core-js/modules/web.set-interval.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout})},"./node_modules/core-js/modules/web.timers.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")},"./libs/react/src/lib/stepper/stepper.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,basicStepper:()=>basicStepper,default:()=>__WEBPACK_DEFAULT_EXPORT__,primitiveStepper:()=>primitiveStepper,stepper:()=>stepper,stepperValidation:()=>stepperValidation});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_stepper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/stepper/stepper.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_stepper__WEBPACK_IMPORTED_MODULE_2__.C,{...props});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",em:"em",pre:"pre",strong:"strong"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Stepper",component:_stepper__WEBPACK_IMPORTED_MODULE_2__.C}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"stepper",children:"Stepper"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Stepper",parameters:{componentIds:["component-stepper"]},args:{label:"Label",description:"Label information"},children:Template.bind({})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"A stepper makes it easier to input values that are in a narrow range."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"basic-stepper",children:"Basic stepper"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Create a basic Stepper that can be placed within a form by passing a label. The component has a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"form-group"})," wrapping to simplify form building."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Basic stepper",args:{label:"Label"}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The Stepper currently only works in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.em,{children:"controlled"})," mode, meaning that you app needs to handle all state.\nHere's a basic example:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:'const [value, setValue] = useState(0)\n\nreturn (\n  <Stepper\n    label="Label"\n    value={value}\n    onChange={(e) => setValue(e.target.value)}\n    onIncrease={() => setValue(value + 1)}\n    onDecrease={() => setValue(value - 1)}\n  />\n)\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"primitive-stepper",children:"Primitive stepper"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["By omitting ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"label"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"description"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"statusMessage"})," props we don't wrap the component in a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"form-group"})," and you can use it more unrestricted."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Primitive Stepper"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["We can then custom build our ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"form-group"}),"as needed."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.em,{children:"If using the component in this way you have to handle rendering of error messages yourself"})}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div className="form-group"><label htmlFor="multiple-steppers" className="mb-5"><p>{"How many people will live in your new home?"}</p></label><div id="multiple-steppers" className="horizontal"><div><div><div className="form-info">{"Adults"}</div><Stepper /></div></div><div><div><div className="form-info">{"Children under 18"}</div><Stepper /></div></div></div></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"form-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label",{htmlFor:"multiple-steppers",className:"mb-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"How many people will live in your new home?"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"multiple-steppers",className:"horizontal",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"form-info",children:"Adults"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_stepper__WEBPACK_IMPORTED_MODULE_2__.C,{})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"form-info",children:"Children under 18"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_stepper__WEBPACK_IMPORTED_MODULE_2__.C,{})]})})]})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"validation",children:"Validation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Stepper validation",args:{value:"Two",validator:{message:"Must be a number",indicator:"error"}}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Note: Many of these are default HTMLInput props, and may not be relevant for this component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.uY,{of:_stepper__WEBPACK_IMPORTED_MODULE_2__.C})]})}const stepper=Template.bind({});stepper.storyName="Stepper",stepper.args={label:"Label",description:"Label information"},stepper.parameters={storySource:{source:"props => <Stepper {...props} />"},componentIds:["component-stepper"]};const basicStepper={storyName:"Basic stepper",args:{label:"Label"},parameters:{storySource:{source:"{}"}}},primitiveStepper={storyName:"Primitive Stepper",parameters:{storySource:{source:"{}"}}},stepperValidation={storyName:"Stepper validation",args:{value:"Two",validator:{message:"Must be a number",indicator:"error"}},parameters:{storySource:{source:"{}"}}},componentMeta={title:"Components/Stepper",component:_stepper__WEBPACK_IMPORTED_MODULE_2__.C,tags:["stories-mdx"],includeStories:["stepper","basicStepper","primitiveStepper","stepperValidation"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","stepper","basicStepper","primitiveStepper","stepperValidation"]},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sg:()=>debounce,cb:()=>delay,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors,ok:()=>validateClassName});__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js");var validateClassName=function validateClassName(value){switch(value){case"success":return"is-valid";case"error":return"is-invalid";default:return""}},debounce=function debounce(func,ms){var timeoutID;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timeoutID),timeoutID=window.setTimeout((function(){func.apply(undefined,args)}),ms)}},delay=function delay(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))},randomId=(__webpack_require__("./node_modules/core-js/modules/es.error.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),function randomId(){return"gds-"+Math.random().toString(36).substring(2,9)}),sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=function getSliderTrackBackground(val){return"linear-gradient(\n        to right,\n        "+sliderColors.primary+" 0%,\n        "+sliderColors.primary+" "+val+"%,\n        "+sliderColors.disabled+" "+val+"%,\n        "+sliderColors.disabled+" 100%\n      )"}},"./libs/react/src/lib/stepper/stepper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>Stepper});__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),_sebgroup_extract__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/extract/src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["id","label","description","statusMessage","validator","value","onChange","onIncrease","onDecrease","testId"];function Stepper(_ref){var id=_ref.id,label=_ref.label,description=_ref.description,statusMessage=_ref.statusMessage,validator=_ref.validator,_ref$value=_ref.value,value=void 0===_ref$value?0:_ref$value,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(){}:_ref$onChange,_ref$onIncrease=_ref.onIncrease,onIncrease=void 0===_ref$onIncrease?function(){}:_ref$onIncrease,_ref$onDecrease=_ref.onDecrease,onDecrease=void 0===_ref$onDecrease?function(){}:_ref$onDecrease,testId=_ref.testId,props=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_5__.A)(_ref,_excluded),PrimitiveStepper=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{"data-testid":testId,className:"group group-border group-stepper "+(validator&&(0,_sebgroup_extract__WEBPACK_IMPORTED_MODULE_3__.ok)(null==validator?void 0:validator.indicator)),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",onClick:onDecrease,children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",Object.assign({id,type:"text",inputMode:"numeric",pattern:"[0-9]*",onChange,onFocus:function onFocus(_ref2){return _ref2.target.select()},onKeyDown:function handleKeyDown(e){"ArrowUp"===e.key?(e.preventDefault(),onIncrease()):"ArrowDown"===e.key&&(e.preventDefault(),onDecrease())},placeholder:"0",value},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{type:"button",onClick:onIncrease,children:"+"})]});return label||description||statusMessage||validator?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"form-group",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label",{htmlFor:id,children:label}),description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"form-info",children:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"stepper-wrapper",children:[PrimitiveStepper,validator&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:"form-info",children:validator.message})]})]}):PrimitiveStepper}try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"",displayName:"Stepper",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:{value:"() => undefined"},description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},statusMessage:{defaultValue:null,description:"",name:"statusMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"IValidator"}},onIncrease:{defaultValue:{value:"() => undefined"},description:"",name:"onIncrease",required:!1,type:{name:"() => void"}},onDecrease:{defaultValue:{value:"() => undefined"},description:"",name:"onDecrease",required:!1,type:{name:"() => void"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/stepper/stepper.tsx#Stepper"]={docgenInfo:Stepper.__docgenInfo,name:"Stepper",path:"libs/react/src/lib/stepper/stepper.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);