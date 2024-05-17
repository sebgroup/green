/*! For license information please see src-components-dropdown-dropdown-stories.f7bc383c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[172],{"./libs/core/src/components/dropdown/dropdown.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomTrigger:()=>CustomTrigger,HiddenLabel:()=>HiddenLabel,OptionHeadings:()=>OptionHeadings,PlaceholderOptions:()=>PlaceholderOptions,Size:()=>Size,SyncedPopoverWidth:()=>SyncedPopoverWidth,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dropdown_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),lit=(__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/lit/index.js")),repeat=__webpack_require__("./node_modules/lit/directives/repeat.js");__webpack_require__("./dist/libs/core/src/chunks/chunk.II3FU2RT.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.KMJ27XE6.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.47XOMNCO.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.MZSK66DN.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.JSKHOIUF.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ZLP63WGC.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2X23R32H.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2ND5EWHE.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ZLWSCK7R.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");(0,__webpack_require__("./dist/libs/core/src/transitional-styles.js").Y)();const dropdown_stories={title:"Components/Dropdown",component:"gds-dropdown",subcomponents:{Option:"gds-option"},parameters:{layout:"centered",docs:{description:{component:"[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/dropdown)\n&nbsp;|&nbsp;\n[Usage guidelines](https://designlibrary.sebgroup.com/components/component-dropdown)\n\nA dropdown enables the user to choose one or multiple options from a list. It's ideal for\nsituations where there are numerous predetermined choices and space is limited.\n\nThe dropdown can be searchable, allowing users to filter the options by typing in the input\nfield, and it also suports both single and multiple selection."}}},tags:["autodocs"]};var DefaultParams={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{options:{control:{type:"array"}}},args:{options:[{label:"Option 1",value:"opt-1"},{label:"Option 2",value:"opt-2"},{label:"Option 3",value:"opt-3"}],label:"Select an option"}},Basic=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n    <gds-dropdown\n      label=","\n      ?open=","\n      ?searchable=","\n      ?multiple=","\n      ?sync-popover-width=","\n      .syncPopoverWith=","\n      ?hide-label=","\n      .hideLabel=","\n      max-height=","\n      .maxHeight=","\n    >\n      ","\n    </gds-dropdown>\n  "])),args.label,args.open,args.searchable,args.multiple,args["sync-popover-width"],args.syncPopoverWith,args["hide-label"],args.hideLabel,args["max-height"],args.maxHeight,(0,repeat.u)(args.options,(function(option){return(0,lit.qy)(_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(["<gds-option value=",">","</gds-option>"])),option.value,option.label)})))}}),OptionHeadings=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(_templateObject3||(_templateObject3=taggedTemplateLiteralLoose_default()(['\n    <gds-dropdown\n      onchange="document.getElementById(\'selected-value\').innerText = event.target.value"\n      label="Select a starship"\n    >\n      <gds-menu-heading>Space vehicles</gds-menu-heading>\n      <gds-option value="1701-D-1">Enterprise 1701-D</gds-option>\n      <gds-option value="falcon-1">Millenium Falcon</gds-option>\n      <gds-option value="defiant-1">Defiant</gds-option>\n      <gds-option value="voyager-1">Voyager</gds-option>\n      <gds-option value="prometheus-1">Prometheus</gds-option>\n      <gds-option value="discovery-1">Discovery</gds-option>\n      <gds-option value="columbia-1">Columbia</gds-option>\n      <gds-option value="yamato-1">Yamato</gds-option>\n      <gds-option value="equinox-1">Equinox</gds-option>\n      <gds-option value="daedalus-1">Daedalus</gds-option>\n      <gds-menu-heading>Ground vehicles</gds-menu-heading>\n      <gds-option value="at-at">AT-AT</gds-option>\n      <gds-option value="at-st">AT-ST</gds-option>\n      <gds-option value="at-te">AT-TE</gds-option>\n      <gds-option value="at-rt">AT-RT</gds-option>\n      <gds-option value="at-ap">AT-AP</gds-option>\n    </gds-dropdown>\n    <br />\n    <div>Selected starship: <span id="selected-value"></span></div>\n  '])))}}),CustomTrigger=Object.assign({},DefaultParams,{name:"Custom trigger content",render:function render(args){return(0,lit.qy)(_templateObject4||(_templateObject4=taggedTemplateLiteralLoose_default()(['\n    <gds-dropdown\n      onchange="document.getElementById(\'trigger-value\').innerText = event.target.value"\n    >\n      <div slot="trigger">\n        <b>Selected: </b>\n        <span id="trigger-value">v1</span>\n      </div>\n      <gds-option value="v1">Value 1</gds-option>\n      <gds-option value="v2">Value 2</gds-option>\n      <gds-option value="v3">Value 3</gds-option>\n    </gds-dropdown>\n  '])))}}),SyncedPopoverWidth=Object.assign({},DefaultParams,{name:"Synced popover width",render:function render(args){return(0,lit.qy)(_templateObject5||(_templateObject5=taggedTemplateLiteralLoose_default()(['\n    <gds-dropdown\n      onchange="document.getElementById(\'trigger-value\').innerText = event.target.value"\n    >\n      <div slot="trigger">\n        <b>Selected: </b>\n        <span id="trigger-value">v1</span>\n      </div>\n      <gds-option value="v1">Value 1</gds-option>\n      <gds-option value="v2">Value 2</gds-option>\n      <gds-option value="v3">Value 3</gds-option>\n    </gds-dropdown>\n  '])))}}),Size=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(_templateObject6||(_templateObject6=taggedTemplateLiteralLoose_default()(['\n    <gds-dropdown size="small" label="Select tech">\n      <gds-option value="">Select tech</gds-option>\n      <gds-option value="warp">Warp Drive</gds-option>\n      <gds-option value="cybernetics">Cybernetics</gds-option>\n      <gds-option value="nanotechnology">Nanotechnology</gds-option>\n      <gds-option value="cloning">Cloning</gds-option>\n      <gds-option value="cryonics">Cryonics</gds-option>\n      <gds-option value="teleportation">Teleportation</gds-option>\n    </gds-dropdown>\n  '])))}}),HiddenLabel=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(_templateObject7||(_templateObject7=taggedTemplateLiteralLoose_default()(['\n    <gds-dropdown size="small" label="Select tech" hide-label>\n      <gds-option value="">Select tech</gds-option>\n      <gds-option value="warp">Warp Drive</gds-option>\n      <gds-option value="cybernetics">Cybernetics</gds-option>\n      <gds-option value="nanotechnology">Nanotechnology</gds-option>\n      <gds-option value="cloning">Cloning</gds-option>\n      <gds-option value="cryonics">Cryonics</gds-option>\n      <gds-option value="teleportation">Teleportation</gds-option>\n    </gds-dropdown>\n  '])))}}),PlaceholderOptions=Object.assign({},DefaultParams,{render:function render(args){return(0,lit.qy)(_templateObject8||(_templateObject8=taggedTemplateLiteralLoose_default()(['\n    <gds-dropdown size="small" label="Select tech" hide-label>\n      <gds-option value="" isplaceholder>This is a placeholder</gds-option>\n      <gds-option value="warp">Warp Drive</gds-option>\n      <gds-option value="cybernetics">Cybernetics</gds-option>\n      <gds-option value="nanotechnology">Nanotechnology</gds-option>\n      <gds-option value="cloning">Cloning</gds-option>\n      <gds-option value="cryonics">Cryonics</gds-option>\n      <gds-option value="teleportation">Teleportation</gds-option>\n    </gds-dropdown>\n  '])))}});Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  ...DefaultParams,\n  render: args => html`\n    <gds-dropdown\n      label=${args.label}\n      ?open=${args.open}\n      ?searchable=${args.searchable}\n      ?multiple=${args.multiple}\n      ?sync-popover-width=${args['sync-popover-width']}\n      .syncPopoverWith=${args.syncPopoverWith}\n      ?hide-label=${args['hide-label']}\n      .hideLabel=${args.hideLabel}\n      max-height=${args['max-height']}\n      .maxHeight=${args.maxHeight}\n    >\n      ${repeat(args.options, (option: any) => html`<gds-option value=${option.value}>${option.label}</gds-option>`)}\n    </gds-dropdown>\n  `\n}",...Basic.parameters?.docs?.source}}},OptionHeadings.parameters={...OptionHeadings.parameters,docs:{...OptionHeadings.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-dropdown\n      onchange="document.getElementById(\'selected-value\').innerText = event.target.value"\n      label="Select a starship"\n    >\n      <gds-menu-heading>Space vehicles</gds-menu-heading>\n      <gds-option value="1701-D-1">Enterprise 1701-D</gds-option>\n      <gds-option value="falcon-1">Millenium Falcon</gds-option>\n      <gds-option value="defiant-1">Defiant</gds-option>\n      <gds-option value="voyager-1">Voyager</gds-option>\n      <gds-option value="prometheus-1">Prometheus</gds-option>\n      <gds-option value="discovery-1">Discovery</gds-option>\n      <gds-option value="columbia-1">Columbia</gds-option>\n      <gds-option value="yamato-1">Yamato</gds-option>\n      <gds-option value="equinox-1">Equinox</gds-option>\n      <gds-option value="daedalus-1">Daedalus</gds-option>\n      <gds-menu-heading>Ground vehicles</gds-menu-heading>\n      <gds-option value="at-at">AT-AT</gds-option>\n      <gds-option value="at-st">AT-ST</gds-option>\n      <gds-option value="at-te">AT-TE</gds-option>\n      <gds-option value="at-rt">AT-RT</gds-option>\n      <gds-option value="at-ap">AT-AP</gds-option>\n    </gds-dropdown>\n    <br />\n    <div>Selected starship: <span id="selected-value"></span></div>\n  `\n}',...OptionHeadings.parameters?.docs?.source},description:{story:"`<gds-menu-heading>` can be used to create group headings in the dropdown.",...OptionHeadings.parameters?.docs?.description}}},CustomTrigger.parameters={...CustomTrigger.parameters,docs:{...CustomTrigger.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  name: \'Custom trigger content\',\n  render: args => html`\n    <gds-dropdown\n      onchange="document.getElementById(\'trigger-value\').innerText = event.target.value"\n    >\n      <div slot="trigger">\n        <b>Selected: </b>\n        <span id="trigger-value">v1</span>\n      </div>\n      <gds-option value="v1">Value 1</gds-option>\n      <gds-option value="v2">Value 2</gds-option>\n      <gds-option value="v3">Value 3</gds-option>\n    </gds-dropdown>\n  `\n}',...CustomTrigger.parameters?.docs?.source},description:{story:"Custom content for the trigger can be provided by assigning an element to the `trigger` slot. When this slot is occupied,\nthe default trigger content will be overridden, and you will have to manage the displayed value yourself.",...CustomTrigger.parameters?.docs?.description}}},SyncedPopoverWidth.parameters={...SyncedPopoverWidth.parameters,docs:{...SyncedPopoverWidth.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  name: \'Synced popover width\',\n  render: args => html`\n    <gds-dropdown\n      onchange="document.getElementById(\'trigger-value\').innerText = event.target.value"\n    >\n      <div slot="trigger">\n        <b>Selected: </b>\n        <span id="trigger-value">v1</span>\n      </div>\n      <gds-option value="v1">Value 1</gds-option>\n      <gds-option value="v2">Value 2</gds-option>\n      <gds-option value="v3">Value 3</gds-option>\n    </gds-dropdown>\n  `\n}',...SyncedPopoverWidth.parameters?.docs?.source},description:{story:"Normally, the popover will never be narrower than the trigger, but may be wider if the option contents are wider.\nOptionally, the width of the popover can be locked to the width of the trigger by setting the `sync-popover-width` attribute.",...SyncedPopoverWidth.parameters?.docs?.description}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-dropdown size="small" label="Select tech">\n      <gds-option value="">Select tech</gds-option>\n      <gds-option value="warp">Warp Drive</gds-option>\n      <gds-option value="cybernetics">Cybernetics</gds-option>\n      <gds-option value="nanotechnology">Nanotechnology</gds-option>\n      <gds-option value="cloning">Cloning</gds-option>\n      <gds-option value="cryonics">Cryonics</gds-option>\n      <gds-option value="teleportation">Teleportation</gds-option>\n    </gds-dropdown>\n  `\n}',...Size.parameters?.docs?.source},description:{story:"The Dropdown is available in two sizes: `small` and `medium`. `medium` is the default.",...Size.parameters?.docs?.description}}},HiddenLabel.parameters={...HiddenLabel.parameters,docs:{...HiddenLabel.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-dropdown size="small" label="Select tech" hide-label>\n      <gds-option value="">Select tech</gds-option>\n      <gds-option value="warp">Warp Drive</gds-option>\n      <gds-option value="cybernetics">Cybernetics</gds-option>\n      <gds-option value="nanotechnology">Nanotechnology</gds-option>\n      <gds-option value="cloning">Cloning</gds-option>\n      <gds-option value="cryonics">Cryonics</gds-option>\n      <gds-option value="teleportation">Teleportation</gds-option>\n    </gds-dropdown>\n  `\n}',...HiddenLabel.parameters?.docs?.source},description:{story:"A common use case for the small version is in constrained areas, such as table cells. In those cases,\nit is also often desirable to hide the label. This can be done with the `hide-label` attribute.\n\nOmitting the label attribute itself is not recommended, as it would make the dropdown inaccessible to\nscreen readers.",...HiddenLabel.parameters?.docs?.description}}},PlaceholderOptions.parameters={...PlaceholderOptions.parameters,docs:{...PlaceholderOptions.parameters?.docs,source:{originalSource:'{\n  ...DefaultParams,\n  render: args => html`\n    <gds-dropdown size="small" label="Select tech" hide-label>\n      <gds-option value="" isplaceholder>This is a placeholder</gds-option>\n      <gds-option value="warp">Warp Drive</gds-option>\n      <gds-option value="cybernetics">Cybernetics</gds-option>\n      <gds-option value="nanotechnology">Nanotechnology</gds-option>\n      <gds-option value="cloning">Cloning</gds-option>\n      <gds-option value="cryonics">Cryonics</gds-option>\n      <gds-option value="teleportation">Teleportation</gds-option>\n    </gds-dropdown>\n  `\n}',...PlaceholderOptions.parameters?.docs?.source},description:{story:"If you need to show a placeholder in the trigger before an option is selected, but you don't want\nit to show in the list of options, you can mark an option as a placeholder by setting its\n`isplaceholder` attribute.",...PlaceholderOptions.parameters?.docs?.description}}};const __namedExportsOrder=["Basic","OptionHeadings","CustomTrigger","SyncedPopoverWidth","Size","HiddenLabel","PlaceholderOptions"]},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js"),o=o=>null!=o?o:lit_html.s6},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js");class e extends directive.WL{constructor(i){if(super(i),this.it=lit_html.s6,i.type!==directive.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.s6||null==r)return this._t=void 0,this.it=r;if(r===lit_html.c0)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;var s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;var o=(0,directive.u$)(e)},"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function n(n,r,t){return n?r(n):null==t?void 0:t(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})}}]);