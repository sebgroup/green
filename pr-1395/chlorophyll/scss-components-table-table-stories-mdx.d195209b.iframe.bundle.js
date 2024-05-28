/*! For license information please see scss-components-table-table-stories-mdx.d195209b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[5118],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(8109).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./libs/chlorophyll/scss/components/table/table.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",h2:"h2"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Table",parameters:{componentIds:["component-table"]}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"table",children:"Table"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{role:"alert",class:"info mb-7 mt-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("main",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:"Missing JavaScript!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Please note that the examples below just represent the html markup and\nsome features like sorting won't work without JavaScript."})})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"simple-table-example",children:"Simple table example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["A simple table, just add class ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"table"})," to table element to get correct styling."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<table class="table"><thead><tr><th scope="col">{"#"}</th><th scope="col">{"First Name"}</th><th scope="col">{"Last Name"}</th><th scope="col">{"Superhero"}</th></tr></thead><tbody><tr><th scope="row">{"1"}</th><td>{"Peter"}</td><td>{"Parker"}</td><td>{"Spider-Man"}</td></tr><tr><th scope="row">{"2"}</th><td>{"John"}</td><td>{"Wayne"}</td><td>{"Batman"}</td></tr><tr><th scope="row">{"3"}</th><td>{"Bruce"}</td><td>{"Banner"}</td><td>{"Hulk"}</td></tr></tbody></table>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table",{class:"table",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"#"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"First Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Last Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Superhero"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tbody",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"row",children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Peter"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Parker"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Spider-Man"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"row",children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"John"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Wayne"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Batman"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"row",children:"3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Bruce"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Banner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Hulk"})]})]})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"table-with-sorting-caption-and-checkboxes",children:"Table with sorting, caption and checkboxes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The example below shows the markup needed to get a table with sorting and checkboxes."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div class="overflow-auto"><table class="table text-nowrap"><caption>{"Sortable table example with un-styled caption"}</caption><thead><tr><th scope="col"><label class="form-control p-0"><input type="checkbox" /><span class="sr-only">{"Select all"}</span><i class="m-0" /></label></th><th scope="col" aria-sort="ascending"><button class="sg-table-sort"><p><span class="sr-only">{"Sort by"}</span>{"\\nReference\\n"}<span class="sr-only">{"descending"}</span></p></button></th><th scope="col" class="sg-sortable"><button class="sg-table-sort"><p><span class="sr-only">{"Sort by"}</span>{"\\nResponsible\\n"}<span class="sr-only">{"ascending"}</span></p></button></th><th scope="col" class="sg-sortable"><button class="sg-table-sort"><p><span class="sr-only">{"Sort by"}</span>{"\\nCountry\\n"}<span class="sr-only">{"ascending"}</span></p></button></th><th scope="col" class="sg-sortable"><button class="sg-table-sort"><p><span class="sr-only">{"Sort by"}</span>{"\\nCreation date\\n"}<span class="sr-only">{"ascending"}</span></p></button></th><th scope="col" class="sg-sortable"><button class="sg-table-sort"><p><span class="sr-only">{"Sort by"}</span>{"\\nAccount holder\\n"}<span class="sr-only">{"ascending"}</span></p></button></th><th scope="col" class="sg-sortable"><button class="sg-table-sort"><p><span class="sr-only">{"Sort by"}</span>{"\\nAccount number\\n"}<span class="sr-only">{"ascending"}</span></p></button></th><th scope="col" class="sg-sortable"><button class="sg-table-sort justify-content-end"><p><span class="sr-only">{"Sort by"}</span>{"\\nBalance\\n"}<span class="sr-only">{"ascending"}</span></p></button></th><th scope="col" class="sg-sortable"><button class="sg-table-sort"><p><span class="sr-only">{"Sort by"}</span>{"\\nStatus\\n"}<span class="sr-only">{"ascending"}</span></p></button></th></tr></thead><tbody><tr><td><label class="form-control p-0"><input type="checkbox" /><span class="sr-only">{"Select ..."}</span><i class="m-0" /></label></td><td>{"pain002_20050231567_0021517263.xml"}</td><td>{"55100"}</td><td>{"SE"}</td><td>{"2021-04-29"}</td><td>{"SuperGroup Inc."}</td><td>{"000011112222"}</td><td class="text-end">{"589,23"}</td><td class="py-0 align-middle"><span class="badge size-sm warning"><strong>{"New"}</strong></span></td></tr><tr><td><label class="form-control p-0"><input type="checkbox" /><span class="sr-only">{"Select ..."}</span><i class="m-0" /></label></td><td>{"pain002_20050231567_0021517263.xml"}</td><td>{"52310"}</td><td>{"FI"}</td><td>{"2021-04-28"}</td><td>{"Hans Ltd"}</td><td>{"0055651201246"}</td><td class="text-end">{"5 312,02"}</td><td class="py-0 align-middle"><span class="badge size-sm warning"><strong>{"New"}</strong></span></td></tr><tr><td><label class="form-control p-0"><input type="checkbox" /><span class="sr-only">{"Select ..."}</span><i class="m-0" /></label></td><td>{"pain002_20050231567_0021517263.xml"}</td><td>{"50010"}</td><td>{"GB"}</td><td>{"2021-04-27"}</td><td>{"Davis-Olson Inc"}</td><td>{"0055651210000"}</td><td class="text-end">{"132 031,56"}</td><td class="py-0 align-middle"><span class="badge size-sm info"><strong>{"Open"}</strong></span></td></tr></tbody></table></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"overflow-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table",{class:"table text-nowrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("caption",{children:"Sortable table example with un-styled caption"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{class:"form-control p-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"checkbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Select all"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{class:"m-0"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col","aria-sort":"ascending",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{class:"sg-table-sort",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Sort by"}),"\nReference\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"descending"})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",class:"sg-sortable",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{class:"sg-table-sort",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Sort by"}),"\nResponsible\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"ascending"})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",class:"sg-sortable",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{class:"sg-table-sort",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Sort by"}),"\nCountry\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"ascending"})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",class:"sg-sortable",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{class:"sg-table-sort",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Sort by"}),"\nCreation date\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"ascending"})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",class:"sg-sortable",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{class:"sg-table-sort",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Sort by"}),"\nAccount holder\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"ascending"})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",class:"sg-sortable",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{class:"sg-table-sort",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Sort by"}),"\nAccount number\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"ascending"})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",class:"sg-sortable",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{class:"sg-table-sort justify-content-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Sort by"}),"\nBalance\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"ascending"})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",class:"sg-sortable",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{class:"sg-table-sort",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Sort by"}),"\nStatus\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"ascending"})]})})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tbody",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{class:"form-control p-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"checkbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Select ..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{class:"m-0"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"pain002_20050231567_0021517263.xml"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"55100"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"SE"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"2021-04-29"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"SuperGroup Inc."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"000011112222"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"text-end",children:"589,23"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"py-0 align-middle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"badge size-sm warning",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong",{children:"New"})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{class:"form-control p-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"checkbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Select ..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{class:"m-0"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"pain002_20050231567_0021517263.xml"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"52310"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"FI"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"2021-04-28"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Hans Ltd"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"0055651201246"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"text-end",children:"5 312,02"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"py-0 align-middle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"badge size-sm warning",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong",{children:"New"})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{class:"form-control p-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"checkbox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Select ..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{class:"m-0"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"pain002_20050231567_0021517263.xml"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"50010"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"GB"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"2021-04-27"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Davis-Olson Inc"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"0055651210000"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"text-end",children:"132 031,56"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"py-0 align-middle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"badge size-sm info",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong",{children:"Open"})})})]})]})]})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"responsive-table-examples",children:"Responsive table examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The following examples illustrate two ways to handle table presentation on small screens using pure CSS."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style",{children:"\n  @media (max-width: 576px) {\n    .table-mobile tbody button.size-sm {\n       font-size: 1rem;\n       padding: .75rem 1rem !important;\n    }\n  }\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"turn-table-into-list",children:"Turn table into list"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Add ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"table-mobile"})," class to table and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"data-label"})," attributes with column header to each table cell to display the table as a list on small screens. The table header scrolls horizontally and becomes sticky on small screens too (not visible in here in storybook due to the nature of how storybook renders these examples)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<table class="table-mobile table"><thead><tr><th scope="col">{"First Name"}</th><th scope="col">{"Last Name"}</th><th scope="col">{"Gender"}</th><th scope="col">{"Favorite Food"}</th><th /></tr></thead><tbody><tr><td data-label="First Name">{"Peter"}</td><td data-label="Last Name">{"Parker"}</td><td data-label="Gender">{"\\uD83D\\uDC68"}</td><td data-label="Favorite Food">{"Pasta"}</td><td class="py-sm-0 align-middle"><button type="button" class="size-sm"><p>{"Action"}</p></button></td></tr><tr><td data-label="First Name">{"Mary Jane"}</td><td data-label="Last Name">{"Watson"}</td><td data-label="Gender">{"\\uD83D\\uDC69"}</td><td data-label="Favorite Food">{"Pizza"}</td><td class="py-sm-0 align-middle"><button type="button" class="size-sm"><p>{"Action"}</p></button></td></tr></tbody></table>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table",{class:"table-mobile table",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"First Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Last Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Gender"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Favorite Food"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tbody",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{"data-label":"First Name",children:"Peter"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{"data-label":"Last Name",children:"Parker"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{"data-label":"Gender",children:"👨"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{"data-label":"Favorite Food",children:"Pasta"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"py-sm-0 align-middle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",class:"size-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Action"})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{"data-label":"First Name",children:"Mary Jane"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{"data-label":"Last Name",children:"Watson"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{"data-label":"Gender",children:"👩"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{"data-label":"Favorite Food",children:"Pizza"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"py-sm-0 align-middle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",class:"size-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Action"})})})]})]})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"overflow",children:"Overflow"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Wrap the table in a div with the class ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"overflow-auto"})," to add scroll when table is wider than its container."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div class="overflow-auto"><table class="table text-nowrap"><thead><tr><th scope="col">{"First Name"}</th><th scope="col">{"Last Name"}</th><th scope="col">{"Gender"}</th><th scope="col">{"Favorite Food"}</th><th scope="col">{"Hair color"}</th><th scope="col">{"Birthday"}</th><th scope="col">{"Zodiac sign"}</th><th /></tr></thead><tbody><tr><td>{"Peter"}</td><td>{"Parker"}</td><td>{"\\uD83D\\uDC68"}</td><td>{"Pasta"}</td><td>{"Brown"}</td><td>{"1974-10-23"}</td><td>{"Scorpio"}</td><td class="py-sm-0 align-middle"><button type="button" class="size-sm"><p>{"Action"}</p></button></td></tr><tr><td>{"Mary Jane"}</td><td>{"Watson"}</td><td>{"\\uD83D\\uDC69"}</td><td>{"Pizza"}</td><td>{"Red"}</td><td>{"1980-03-21"}</td><td>{"Aries"}</td><td class="py-sm-0 align-middle"><button type="button" class="size-sm"><p>{"Action"}</p></button></td></tr></tbody></table></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"overflow-auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table",{class:"table text-nowrap",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"First Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Last Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Gender"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Favorite Food"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Hair color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Birthday"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{scope:"col",children:"Zodiac sign"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tbody",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Peter"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Parker"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"👨"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Pasta"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Brown"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"1974-10-23"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Scorpio"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"py-sm-0 align-middle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",class:"size-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Action"})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Mary Jane"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Watson"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"👩"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Pizza"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Red"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"1980-03-21"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{children:"Aries"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{class:"py-sm-0 align-middle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",class:"size-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Action"})})})]})]})]})})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/Table",parameters:{componentIds:["component-table"]},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var m=__webpack_require__("./node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);