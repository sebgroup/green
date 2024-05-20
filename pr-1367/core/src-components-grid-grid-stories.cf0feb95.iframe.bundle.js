(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[926],{"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js":module=>{module.exports=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings},module.exports.__esModule=!0,module.exports.default=module.exports},"./libs/core/src/components/grid/grid.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllBreakpoints:()=>AllBreakpoints,AutoColumns:()=>AutoColumns,Basic:()=>Basic,Sizes:()=>Sizes,Usage:()=>Usage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>components_grid_grid_stories});var taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./dist/libs/core/src/components/grid/index.js"),__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),grid_stories=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./libs/core/src/components/grid/grid.stories.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(grid_stories.A,options);grid_stories.A&&grid_stories.A.locals&&grid_stories.A.locals;var _templateObject,_templateObject2,_templateObject3,_templateObject4,lit=__webpack_require__("./node_modules/lit/index.js");const components_grid_grid_stories={title:"Components/Grid",component:"gds-grid",tags:["autodocs"],parameters:{docs:{description:{component:"[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/grid)\n\nThe `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `auto-columns` attribute."}}}};var DefaultParams={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{innerHTML:'<div class="exampleCell">COL: 01</div>\n<div class="exampleCell">COL: 02</div>\n<div class="exampleCell">COL: 03</div>\n<div class="exampleCell">COL: 04</div>\n<div class="exampleCell">COL: 05</div>\n<div class="exampleCell">COL: 06</div>\n<div class="exampleCell">COL: 07</div>\n<div class="exampleCell">COL: 08</div>'}},Basic=Object.assign({},DefaultParams),Usage=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(['\n    <gds-grid columns="l:8 m:4 s:2" gap="l:l m:m s:s" padding="l:2xl m:l s:xs">\n      <div class="exampleCell">COL: 01</div>\n      <div class="exampleCell">COL: 02</div>\n      <div class="exampleCell">COL: 03</div>\n      <div class="exampleCell">COL: 04</div>\n      <div class="exampleCell">COL: 05</div>\n      <div class="exampleCell">COL: 06</div>\n      <div class="exampleCell">COL: 07</div>\n      <div class="exampleCell">COL: 08</div>\n    </gds-grid>\n  '])))}}),AllBreakpoints=Object.assign({},DefaultParams,{name:"Example: All breakpoints + Auto Columns",render:function render(args){return(0,lit.qy)(_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(['\n    <gds-grid\n      columns="4"\n      gap="l:2xl m:2xl s:2xl"\n      row-gap="l:2xl m:2xl s:2xl"\n      padding="l"\n      auto-columns="100"\n    >\n      <div class="exampleCell">COL: 01</div>\n      <div class="exampleCell">COL: 02</div>\n      <div class="exampleCell">COL: 03</div>\n      <div class="exampleCell">COL: 04</div>\n      <div class="exampleCell">COL: 05</div>\n      <div class="exampleCell">COL: 06</div>\n      <div class="exampleCell">COL: 07</div>\n      <div class="exampleCell">COL: 08</div>\n    </gds-grid>\n  '])))}}),AutoColumns=Object.assign({},DefaultParams,{name:"Auto Columns attribute",render:function render(args){return(0,lit.qy)(_templateObject3||(_templateObject3=taggedTemplateLiteralLoose_default()(['\n    <gds-grid auto-columns="240">\n      <div class="exampleCell">COL: 01</div>\n      <div class="exampleCell">COL: 02</div>\n      <div class="exampleCell">COL: 03</div>\n      <div class="exampleCell">COL: 04</div>\n      <div class="exampleCell">COL: 05</div>\n      <div class="exampleCell">COL: 06</div>\n      <div class="exampleCell">COL: 07</div>\n      <div class="exampleCell">COL: 08</div>\n    </gds-grid>\n  '])))}}),Sizes=Object.assign({},DefaultParams,{render:function render(){return(0,lit.qy)(_templateObject4||(_templateObject4=taggedTemplateLiteralLoose_default()([""])))}});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams\n}",...Basic.parameters?.docs?.source}}},Usage.parameters={...Usage.parameters,docs:{...Usage.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-grid columns="l:8 m:4 s:2" gap="l:l m:m s:s" padding="l:2xl m:l s:xs">\n      <div class="exampleCell">COL: 01</div>\n      <div class="exampleCell">COL: 02</div>\n      <div class="exampleCell">COL: 03</div>\n      <div class="exampleCell">COL: 04</div>\n      <div class="exampleCell">COL: 05</div>\n      <div class="exampleCell">COL: 06</div>\n      <div class="exampleCell">COL: 07</div>\n      <div class="exampleCell">COL: 08</div>\n    </gds-grid>\n  `\n}',...Usage.parameters?.docs?.source},description:{story:'To use the `gds-grid`, you add it to your HTML and specify the number of `columns` for `desktop`, `tablet`, and `mobile` devices using the `columns` attribute. The `columns`, `gap`, `row-gap` and `padding` attributes can take either a single value or a string of three tokens separated by spaces, each prefixed with `l:` for `desktop`, `m:` for `tablet`, and `s:` for mobile.\n\nIf a single value is provided, it will be used for all screen sizes. If three tokens are provided, each screen size will use the value specified for it.\n\n```html\n\x3c!-- Using a single value for all screen sizes --\x3e\n<gds-grid columns="2" gap="xl" row-gap="2xl" padding="2xl">\n  \x3c!-- Child elements here --\x3e\n</gds-grid>\n\n\x3c!-- Using different values for each screen size --\x3e\n<gds-grid\n  columns="l:8 m:4 s:2"\n  gap="l:xl m:l s:xs"\n  row-gap="l:xl m:l s:xs"\n  padding="l:2xl m:l s:xs"\n>\n  \x3c!-- Child elements here --\x3e\n</gds-grid>\n```\n\n#### Example\n\nThis example shows a grid with 8 columns on desktop, 4 on tablet, and 2 on mobile. It also has a gap of `l` on desktop, `m` on tablet, and `s` on mobile. The padding is `2xl` on desktop, `l` on tablet, and `xs` on mobile.',...Usage.parameters?.docs?.description}}},AllBreakpoints.parameters={...AllBreakpoints.parameters,docs:{...AllBreakpoints.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  name: \'Example: All breakpoints + Auto Columns\',\n  render: args => html`\n    <gds-grid\n      columns="4"\n      gap="l:2xl m:2xl s:2xl"\n      row-gap="l:2xl m:2xl s:2xl"\n      padding="l"\n      auto-columns="100"\n    >\n      <div class="exampleCell">COL: 01</div>\n      <div class="exampleCell">COL: 02</div>\n      <div class="exampleCell">COL: 03</div>\n      <div class="exampleCell">COL: 04</div>\n      <div class="exampleCell">COL: 05</div>\n      <div class="exampleCell">COL: 06</div>\n      <div class="exampleCell">COL: 07</div>\n      <div class="exampleCell">COL: 08</div>\n    </gds-grid>\n  `\n}',...AllBreakpoints.parameters?.docs?.source},description:{story:"This example shows a grid with `4` columns on all breakpoints desktop, tablet, and on mobile. It also has a gap of `2xl` on all breakpoints. The padding is `l` on all breakpoints. As well as `auto-columns` attribute is set to `100` which will make the columns to be `~100px` wide.",...AllBreakpoints.parameters?.docs?.description}}},AutoColumns.parameters={...AutoColumns.parameters,docs:{...AutoColumns.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  name: \'Auto Columns attribute\',\n  render: args => html`\n    <gds-grid auto-columns="240">\n      <div class="exampleCell">COL: 01</div>\n      <div class="exampleCell">COL: 02</div>\n      <div class="exampleCell">COL: 03</div>\n      <div class="exampleCell">COL: 04</div>\n      <div class="exampleCell">COL: 05</div>\n      <div class="exampleCell">COL: 06</div>\n      <div class="exampleCell">COL: 07</div>\n      <div class="exampleCell">COL: 08</div>\n    </gds-grid>\n  `\n}',...AutoColumns.parameters?.docs?.source},description:{story:'The `auto-columns` attribute makes the grid flexible by adjusting column widths based on available space and content size. If space is limited, it reduces the number of columns while maintaining a minimum column width based on the value provided. The `auto-columns` attribute can take either a single value or a string of three tokens separated by spaces, each prefixed with `l:` for `desktop`, `m:` for `tablet`, and `s:` for `mobile` respectively.\n\nIt can be used without the other attributes and still fit the content on the available width. But for more granular control it can be used with the `columns`, `gap`, and `padding` attributes.\n\nAuto Columns, while optional, remove the need for breakpoints, adapting to content for a more flexible and responsive grid. However, they can still be used in conjunction with breakpoints to accommodate content in both cases.\n\n```html\n\x3c!-- Using a single value for all screen sizes --\x3e\n<gds-grid columns="2" gap="xl" auto-columns="200">\n  \x3c!-- Child elements here --\x3e\n</gds-grid>\n\n\x3c!-- Using different values for each screen size --\x3e\n<gds-grid columns="l:8 m:4 s:2" auto-columns="l:200 m:100 s:80">\n  \x3c!-- Child elements here --\x3e\n</gds-grid>\n```\n\n> The `auto-columns` attribute, used with CSS grid layout, calculates the maximum column width by subtracting the total gap width from the total available width and dividing by the number of columns. This is represented by the formula `MaxColumnWidth = (W - ((C - 1) * G)) / C`, where `W` is the total available width, `C` is the number of columns, and `G` is the width of a single gap. This calculated width is then used to set each column\'s width, with a minimum width of the `auto-columns` value.\n\n## Example: Auto Columns without other attributes\n\nThis example has the fluid attribute and it will adapt the content automatically based on the available width and min inline size.\nThe `auto-columns` attribute is set to `240` which will make the columns to be `240px` no matter the screen/container size.',...AutoColumns.parameters?.docs?.description}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams,\n  render: () => html``\n}",...Sizes.parameters?.docs?.source},description:{story:"Sizes ref are part of the internal design system and are used to define the `gap` and `padding` for different devices. The following are the available sizes:\n\n| Size | Token   | Pixels |\n| ---- | ------- | ------ |\n| 3xl  | size/12 | 96px   |\n| 2xl  | size/9  | 48px   |\n| xl   | size/7  | 32px   |\n| l    | size/6  | 24px   |\n| m    | size/5  | 16px   |\n| s    | size/3  | 8px    |\n| xs   | size/2  | 4px    |\n| none | size/0  | 0px    |\n\n#### Breakpoints\n\nThe grid component has three breakpoints for `desktop`, `tablet`, and `mobile` devices. The following are the available breakpoints:\n\n| Category | Type       | Size   |\n| -------- | ---------- | ------ |\n| L        | desktop-lg | 2560px |\n| L        | desktop-md | 1440px |\n| L        | desktop-sm | 1024px |\n| M        | tablet     | 768px  |\n| S        | mobile     | 425px  |",...Sizes.parameters?.docs?.description}}};const __namedExportsOrder=["Basic","Usage","AllBreakpoints","AutoColumns","Sizes"]},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[9].use[1]!./libs/core/src/components/grid/grid.stories.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"gds-grid {\n  --gds-debug-color: hsla(241, 100%, 66%, 0.4);\n  --gds-debug-color-container: rgba(255, 82, 197, 0.4);\n}\n\ngds-grid > .exampleCell {\n  align-items: center;\n  aspect-ratio: 16/9;\n  border: 1px solid var(--gds-debug-color);\n  border-radius: 8px;\n  display: flex;\n  font-size: 14px;\n  justify-content: center;\n  min-height: 40px;\n  text-align: center;\n}\n","",{version:3,sources:["webpack://./libs/core/src/components/grid/grid.stories.css"],names:[],mappings:"AAAA;EACE,4CAA4C;EAC5C,oDAAoD;AACtD;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,wCAAwC;EACxC,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;AACpB",sourcesContent:["gds-grid {\n  --gds-debug-color: hsla(241, 100%, 66%, 0.4);\n  --gds-debug-color-container: rgba(255, 82, 197, 0.4);\n}\n\ngds-grid > .exampleCell {\n  align-items: center;\n  aspect-ratio: 16/9;\n  border: 1px solid var(--gds-debug-color);\n  border-radius: 8px;\n  display: flex;\n  font-size: 14px;\n  justify-content: center;\n  min-height: 40px;\n  text-align: center;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./node_modules/core-js/internals/object-assign.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),objectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys.js"),getOwnPropertySymbolsModule=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-symbols.js"),propertyIsEnumerableModule=__webpack_require__("./node_modules/core-js/internals/object-property-is-enumerable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),$assign=Object.assign,defineProperty=Object.defineProperty,concat=uncurryThis([].concat);module.exports=!$assign||fails((function(){if(DESCRIPTORS&&1!==$assign({b:1},$assign(defineProperty({},"a",{enumerable:!0,get:function(){defineProperty(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var A={},B={},symbol=Symbol("assign detection");return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){B[chr]=chr})),7!==$assign({},A)[symbol]||"abcdefghijklmnopqrst"!==objectKeys($assign({},B)).join("")}))?function assign(target,source){for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=getOwnPropertySymbolsModule.f,propertyIsEnumerable=propertyIsEnumerableModule.f;argumentsLength>index;)for(var key,S=IndexedObject(arguments[index++]),keys=getOwnPropertySymbols?concat(objectKeys(S),getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],DESCRIPTORS&&!call(propertyIsEnumerable,S,key)||(T[key]=S[key]);return T}:$assign},"./node_modules/core-js/internals/object-keys.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var internalObjectKeys=__webpack_require__("./node_modules/core-js/internals/object-keys-internal.js"),enumBugKeys=__webpack_require__("./node_modules/core-js/internals/enum-bug-keys.js");module.exports=Object.keys||function keys(O){return internalObjectKeys(O,enumBugKeys)}},"./node_modules/core-js/modules/es.object.assign.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),assign=__webpack_require__("./node_modules/core-js/internals/object-assign.js");$({target:"Object",stat:!0,arity:2,forced:Object.assign!==assign},{assign})}}]);