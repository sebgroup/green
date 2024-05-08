(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[347],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(109).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./libs/core/src/components/button/button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_dist_libs_core_src_transitional_styles_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./dist/libs/core/src/index.js"),__webpack_require__("./dist/libs/core/src/transitional-styles.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"button",children:"Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{onClick:()=>{(0,_dist_libs_core_src_transitional_styles_js__WEBPACK_IMPORTED_MODULE_3__.Y)(),document.querySelectorAll("gds-button").forEach((el=>{el.connectedCallback()}))},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Show 2016 styles"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{onClick:()=>location.reload(),children:"Show 2023 styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"button-ranks",children:"Button ranks"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Buttons exist in three different ranks, Primary, Secondary and Tertiary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<gds-button>{"Primary"}</gds-button><gds-button rank="secondary">{"Secondary"}</gds-button><gds-button rank="tertiary">{"Tertiary"}</gds-button>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{rank:"secondary",children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{rank:"tertiary",children:"Tertiary"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"button-variants",children:"Button variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Each rank can belong to one of three variants, Neutral, Positive and Negative"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<story-grid><story-row><gds-button>{"Neutral primary"}</gds-button><gds-button rank="secondary">{"Neutral secondary"}</gds-button><gds-button rank="tertiary">{"Neutral tertiary"}</gds-button></story-row><story-row><gds-button variant="positive">{"Positive primary"}</gds-button><gds-button variant="positive" rank="secondary"><p>{"Positive secondary"}</p></gds-button><gds-button variant="positive" rank="tertiary"><p>{"Positive tertiary"}</p></gds-button></story-row><story-row><gds-button variant="negative">{"Negative primary"}</gds-button><gds-button variant="negative" rank="secondary"><p>{"Negative secondary"}</p></gds-button><gds-button variant="negative" rank="tertiary"><p>{"Negative tertiary"}</p></gds-button></story-row></story-grid>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("story-grid",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("story-row",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{children:"Neutral primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{rank:"secondary",children:"Neutral secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{rank:"tertiary",children:"Neutral tertiary"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("story-row",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{variant:"positive",children:"Positive primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{variant:"positive",rank:"secondary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Positive secondary"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{variant:"positive",rank:"tertiary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Positive tertiary"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("story-row",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{variant:"negative",children:"Negative primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{variant:"negative",rank:"secondary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Negative secondary"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{variant:"negative",rank:"tertiary",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Negative tertiary"})})]})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"button-sizes",children:"Button sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Buttons can be small, medium or large. The default size is medium."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<gds-button size="small">{"Small"}</gds-button><gds-button>{"Medium"}</gds-button><gds-button size="large">{"Large"}</gds-button>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{size:"small",children:"Small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{children:"Medium"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{size:"large",children:"Large"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"button-with-icon",children:"Button with icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Buttons can have an icon on the left or right side of the text. These are called leading or trailing icons, and are added by placing a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"gds-icon"})," component in either the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"lead"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"trail"})," slot."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<gds-button><gds-icon slot="lead" name="arrow-down" /><p>{"Leading icon"}</p></gds-button><gds-button><p>{"Trailing icon"}</p><gds-icon slot="trail" name="arrow-up" /></gds-button>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("gds-button",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-icon",{slot:"lead",name:"arrow-down"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Leading icon"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("gds-button",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Trailing icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-icon",{slot:"trail",name:"arrow-up"})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"button-with-icon-only",children:"Button with icon only"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["If a single ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"gds-icon"})," is the only child of a button, it will render as a circular icon button."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<gds-button size="small"><gds-icon name="arrow" /></gds-button><gds-button><gds-icon name="arrow" /></gds-button><gds-button size="large"><gds-icon name="arrow" /></gds-button>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{size:"small",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-icon",{name:"arrow"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-icon",{name:"arrow"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{size:"large",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-icon",{name:"arrow"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"The buttons support a disabled state, but in general, it should not be used. It can be hard for the user to understand why the button is disabled, so it is often better to keep the button clickable and then show an error message\ninstead."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<gds-button disabled>{"Primary"}</gds-button><gds-button rank="secondary" variant="positive" disabled><p>{"Secondary"}</p></gds-button><gds-button rank="tertiary" disabled><p>{"Tertiary"}</p></gds-button>',children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{disabled:!0,children:"Primary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{rank:"secondary",variant:"positive",disabled:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Secondary"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("gds-button",{rank:"tertiary",disabled:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Tertiary"})})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/Button",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./dist/libs/core/src/transitional-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>_chunks_chunk_XQ3SZZAO_js__WEBPACK_IMPORTED_MODULE_0__.YT});var _chunks_chunk_XQ3SZZAO_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.XQ3SZZAO.js");__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var m=__webpack_require__("./node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot}}]);