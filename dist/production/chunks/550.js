(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[550],{249:(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var n=o(300),r=o(643),s=o(383),i=o(634),a=o(926);class l extends r.Z{static getConfig(){return{className:"Neo.util.Object"}}static isEqual(e,t){return Neo.isObject(e)&&Neo.isObject(t)?Object.keys(e).length===Object.keys(t).length&&Object.keys(e).reduce((function(o,n){return o&&l.isEqual(e[n],t[n])}),!0):e===t}}Neo.applyClassConfig(l);const d=l;class c extends r.Z{static getConfig(){return{className:"Neo.util.KeyNavigation",ntype:"keynav",component_:null,keyDownEventBubble:!1,keys_:null}}add(e){this._keys.push(...this.parseKeys(e))}beforeGetComponent(){return Neo.getComponent(this._component)}beforeSetComponent(e){return e&&e.id}destroy(){this.unregister(),super.destroy()}onKeyDown(e){if(e.key){let t,o=this,n=e.key.toUpperCase();n=o.parseUpperCaseKey(n),o.keys.forEach((o=>{t=Neo.get(o.scope),o.key.toUpperCase()===n&&t[o.fn]&&t[o.fn].apply(t,[e])}))}}parseKeys(e){if(!Array.isArray(e)){let t=this._component,o=[];t&&(Object.entries(e).forEach((([e,n])=>{o.push({fn:n,key:e,scope:t})})),e=o)}return e}parseUpperCaseKey(e){switch(e){case" ":e="SPACE";break;case"ARROWDOWN":e="DOWN";break;case"ARROWLEFT":e="LEFT";break;case"ARROWRIGHT":e="RIGHT";break;case"ARROWUP":e="UP"}return e}register(e){let t=this,o=e.domListeners;t.component=e,t.keys=t.parseKeys(t.keys),o&&(o.push({keydown:{fn:t.onKeyDown,bubble:t.keyDownEventBubble,scope:t}}),e.domListeners=o)}removeKey(e){let t,o=this._keys,n=0,r=o.length;for(;n<r;n++)if(t=o[n],d.isEqual(t,e)){a.Z.remove(o,t);break}}removeKeys(e){Array.isArray(e)&&e.forEach((e=>this.removeKey(e)))}unregister(){}}Neo.applyClassConfig(c);const p=c;var m=o(212);o(389);class u extends r.Z{static getConfig(){return{className:"Neo.util.Style"}}static compareStyles(e,t){let o={};return Neo.isString(e)&&(e=Neo.core.Util.createStyleObject(e)),Neo.isString(t)&&(t=Neo.core.Util.createStyleObject(t)),e||t?t?e?(Object.keys(e).forEach((function(n){t.hasOwnProperty(n)&&t[n]===e[n]||(o[n]=e[n])})),Object.keys(t).forEach((function(t){e.hasOwnProperty(t)||(o[t]=null)})),Object.keys(o).length>0?o:null):void Object.keys(t).forEach((function(e){o[e]=null})):Neo.clone(e):null}}Neo.applyClassConfig(u);const h=u;var f=o(83),g=o(939),y=o(692);class v extends r.Z{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.component.Base",ntype:"component",appName_:null,autoMount:!1,autoRender:!1,containsFocus_:!1,controller_:null,disabled_:!1,domListeners_:null,droppable_:!1,dropZone:null,dropZoneConfig:null,hasBeenMounted:!1,hasUnmountedVdomChanges_:!1,height_:null,html_:null,id_:null,isVdomUpdating:!1,keys_:null,maxHeight_:null,maxWidth_:null,minHeight_:null,minWidth_:null,mounted_:!1,needsVdomUpdate:!1,parentId:"document.body",plugins_:null,rendering_:!1,silentVdomUpdate:!1,style:{},tooltips_:null,vnode_:null,width_:null,wrapperStyle_:null,_vdom:{}}}getVdomRoot(){return this.vdom}getVnodeRoot(){return this.vnode}mergeConfig(...e){let t=this,o=super.mergeConfig(...e),n={...t._vdom||{},...o.vdom||{}};return t._vdom=Neo.clone(n,!0,!0),t.cls=o.cls,t._style=o.style,t.wrapperStyle=Neo.clone(o.wrapperStyle,!1),delete o.cls,delete o.style,delete o._vdom,delete o.vdom,delete o.wrapperStyle,o}constructor(e){super(e),s.Z.register(this)}onConstructed(){super.onConstructed();let e=this;e.fire("constructed",{id:e.id}),e.keys&&e.keys.register(e)}init(){this.autoRender&&this.render()}get cls(){return this._cls?Neo.clone(this._cls):["neo-component"]}set cls(e){e=e||[];let t,o=this,n=o.vdom,r=o.getVdomRoot();"string"==typeof e&&(e=e.split("")),o.mounted&&(t=Neo.clone(o._cls)),o._cls=e,r&&(r.cls=[...e]),o._vdom=n,o.mounted&&o.updateCls(e,t)}get listeners(){return this._listeners||{}}set listeners(e){this._listeners=e}get rendered(){return this._rendered||!1}set rendered(e){let t=this;t._rendered=e,!0===e&&t.fire("rendered",t.id)}get style(){return Neo.clone(this._style)}set style(e){let t=this,o=t.style;t._style=e,t.updateStyle(e,o)}get vdom(){return this._vdom}set vdom(e){let t,o=this,n=Neo.apps[o.appName],r=e,s=o.cls,i=o.height,a=o.style,l=o.getVdomRoot(),d=o.width;l&&(s&&(l.cls=s),i&&(l.height=i),d&&(l.width=d),a&&(l.style=Object.assign(l.style||{},a))),o._vdom!==r?(m.Z.warn("vdom got replaced for: "+o.id+". Copying the content into the reference holder object"),Object.keys(o._vdom).forEach((e=>{delete o._vdom[e]})),Object.assign(o._vdom,r)):o._vdom=r,o.silentVdomUpdate||(!o.mounted&&n&&!0===n.rendering?t=n.on("render",(()=>{n.un("render",t),setTimeout((()=>{o.updateVdom(o.vdom,o.vnode)}),50)})):o.mounted&&o.updateVdom(r,o.vnode),o.hasUnmountedVdomChanges=!o.mounted&&o.hasBeenMounted)}addStyle(e){return"string"==typeof e&&(e=f.Z.createStyleObject(e)),this.style=Object.assign(this.style,e)}afterSetDisabled(e,t){let o=this.cls;a.Z[e?"add":"remove"](o,"neo-disabled"),this.cls=o}afterSetDomListeners(e,t){i.Z.updateDomListeners(this,e,t)}afterSetDroppable(e,t){let n=this;e&&!n.dropZone&&o.e(304).then(o.bind(o,404)).then((e=>{n.dropZone=Neo.create({module:e.default,appName:n.appName,owner:n,...n.dropZoneConfig||{}})}))}afterSetHasUnmountedVdomChanges(e,t){if(e||!e&&t){let t,o=s.Z.getParentIds(this),n=0,r=o.length;for(;n<r;n++)t=Neo.getComponent(o[n]),t&&(t._hasUnmountedVdomChanges=e)}}afterSetHeight(e,t){this.changeVdomRootKey("height",e)}afterSetHtml(e,t){this.changeVdomRootKey("html",e)}afterSetId(e,t){this.changeVdomRootKey("id",e)}afterSetMaxHeight(e,t){this.changeVdomRootKey("maxHeight",e)}afterSetMaxWidth(e,t){this.changeVdomRootKey("maxWidth",e)}afterSetMinHeight(e,t){this.changeVdomRootKey("minHeight",e)}afterSetMinWidth(e,t){this.changeVdomRootKey("minWidth",e)}afterSetMounted(e,t){if(void 0!==t){let t=this;e&&(t.hasBeenMounted=!0,t.domListeners&&t.domListeners.length>0&&setTimeout((()=>{i.Z.mountDomListeners(t)}),300),t.fire("mounted",t.id))}}afterSetTooltips(e,t){if(e){let t=this;Neo.ns("Neo.tooltip.Base")?t.createTooltips(e):o.e(270).then(o.bind(o,811)).then((o=>{t.createTooltips(e)}))}}afterSetVnode(e,t){void 0!==t&&this.syncVnodeTree()}afterSetWidth(e,t){this.changeVdomRootKey("width",e)}afterSetWrapperStyle(e,t){if(e||void 0!==t){let o=this,n=o.vdom;o.vdom.id?o.updateStyle(e,t,o.vdom.id):(n.style=e,o.vdom=n)}}beforeGetWrapperStyle(e){return{...Object.assign(this.vdom.style||{},e)}}beforeGetController(e){return e&&Neo.get(e)}beforeSetController(e,t){return t&&t.destroy(),(e=n.Z.beforeSetInstance(e,null,{view:this}))&&e.id}beforeSetDomListeners(e,t){return Neo.isObject(e)&&(e=[e]),e||[]}beforeSetKeys(e,t){return t&&t.destroy(),e&&(e=n.Z.beforeSetInstance(e,p,{keys:e})),e}beforeSetPlugins(e,t){return Array.isArray(e)&&e.forEach(((t,o)=>{e[o]=n.Z.beforeSetInstance(t,null,{owner:this})})),e}changeVdomRootKey(e,t){let o=this,n=o.vdom;t?o.getVdomRoot()[e]=t:delete o.getVdomRoot()[e],o.vdom=n}createTooltips(e){Array.isArray(e)||(e=[e]);let t,o=this,n=[];e.forEach((e=>{t=Neo.create("Neo.tooltip.Base",{appName:o.appName,componentId:o.id,...e}),n.push(t)})),o._tooltips=n}destroy(e=!1,t=!1){let o,n,r=this;e&&r.parentId&&("document.body"===r.parentId?Neo.currentWorker.promiseMessage("main",{action:"updateDom",deltas:[{action:"removeNode",id:r.vdom.id}]}):(o=Neo.getComponent(r.parentId),n=o.vdom,g.Z.removeVdomChild(n,r.vdom.id),o[t?"_vdom":"vdom"]=n)),s.Z.unregister(this),super.destroy()}down(e){return s.Z.down(this.id,e)}focus(e){let t=this;Neo.main.DomAccess.focus({id:e||t.id}).then((e=>{})).catch((e=>{console.log("Error attempting to receive focus for component",e,t)}))}getController(e){let t,o,n,r=this.controller;if(r&&(!e||e===r.ntype))return r;for(n=s.Z.getParents(this),t=0,o=n.length;t<o;t++)if(n[t].controller&&(!e||e===n[t].controller.ntype))return n[t].controller;return null}getPlugin(e){e="string"!=typeof e?e:{id:e};let t,o=this;for(const n of o.plugins||[]){t=!0;for(const o in e)if(n[o]!==e[o]){t=!1;break}if(t)return n}return null}getTheme(){let e,t,o,n=this,r="neo-theme-";for(const e of n.cls||[])if(e.startsWith(r))return e;if(e=Neo.apps[n.appName],t=e&&e.mainViewInstance,t){o=g.Z.getParentNodes(t.vdom,n.id);for(const e of o||[])for(const t of e.cls||[])if(t.startsWith(r))return t}return Neo.config.themes&&Neo.config.themes[0]}getVdomChild(e,t){let o=g.Z.findVdomChild(t||this.vdom,e);return o&&o.vdom}mount(){let e,t,o=this;if(!o.vnode)throw new Error("Component vnode must be generated before mounting, use Component.render()");o.hasUnmountedVdomChanges?(o.hasUnmountedVdomChanges=!1,t=s.Z.getChildIds(o.vnode),t.forEach((t=>{e=Neo.getComponent(t),e&&(e._hasUnmountedVdomChanges=!1)})),o.render(!0)):Neo.currentWorker.promiseMessage("main",{action:"mountDom",id:o.id,html:o.vnode.outerHTML,parentId:o.parentId,parentIndex:o.parentIndex}).then((()=>{o.mounted=!0}))}onRender(e,t){let o=this,n=Neo.apps[o.appName];if(o.rendering=!1,n){n.rendered||(n.rendering=!1,n.rendered=!0,n.fire("render")),o.vnode=e;let r,i=s.Z.getChildIds(e),a=0,l=i.length;for(;a<l;a++)r=Neo.getComponent(i[a]),r&&(r.rendered=!0);o._rendered=!0,o.fire("rendered",o.id),console.log("rendered: "+o.appName+" "+o.id,o),t&&(o.mounted=!0)}}promiseVdomUpdate(e=this.vdom,t=this.vnode){let o=this;return o._vdom!==e?(m.Z.warn("vdom got replaced for: "+o.id+". Copying the content into the reference holder object"),Object.keys(o._vdom).forEach((e=>{delete o._vdom[e]})),Object.assign(o._vdom,e)):o._vdom=e,new Promise(((n,r)=>{o.mounted?o.updateVdom(e,t,n,r):n()}))}removeStyle(e){"string"==typeof e&&(e=[e]);let t=this.style,o=!1;return Object.entries(t).forEach((n=>{e.indexOf(n)>-1&&(delete t[n],o=!0)})),o&&(this.style=t),t}render(e){let t=this,o=e||t.autoMount,n=Neo.apps[t.appName];t.rendering=!0,n.rendered||(n.rendering=!0),t.vdom&&Neo.vdom.Helper.create({appName:t.appName,autoMount:o,cls:t.cls,parentId:o?t.parentId:void 0,parentIndex:o?t.parentIndex:void 0,style:t.style,...t.vdom}).then((e=>{t.onRender(e,o)}))}set(e={},t=!1){let o=this,n=o.vdom;if(o.silentVdomUpdate=!0,super.set(e),o.silentVdomUpdate=!1,!t)return o.promiseVdomUpdate();o._vdom=n}setSilent(e={}){return this.set(e,!0)}syncVdomIds(e=this.vnode,t=this.vdom){g.Z.syncVdomIds(e,t)}syncVnodeTree(e=this.vnode){let t,o=this;o.syncVdomIds(),s.Z.getChildren(o).forEach((e=>{t=y.Z.findChildVnode(o.vnode,e.vdom.id),t?(e._vnode=t.vnode,e.rendered||(e._rendered=!0,e.fire("rendered",e.id)),e.mounted=!0):console.warn("syncVnodeTree: Could not replace the child vnode for",e.id)})),s.Z.getParents(o).forEach(((e,t)=>{o.vnode?0===t&&o.vnode.outerHTML?e.vnode.childNodes.splice(o.parentIndex||0,0,o.vnode):y.Z.replaceChildVnode(e.vnode,o.vnode.id,o.vnode):0===t&&y.Z.removeChildVnode(e.vnode,o.id)}))}unmount(){let e=this;Neo.currentWorker.promiseMessage("main",{action:"updateDom",deltas:[{action:"removeNode",id:e.id}]}).then((()=>{e.mounted=!1})).catch((t=>{console.log("Error attempting to unmount component",t,e)}))}up(e){return s.Z.up(this.id,e)}updateCls(e,t){let o,n=this,r=n.vnode;a.Z.isEqual(e,t)||(r&&(r.className=e,n.vnode=r),o={action:"updateDom",deltas:[{id:n.id,cls:{add:Neo.util.Array.difference(e,t),remove:Neo.util.Array.difference(t,e)}}]},Neo.currentWorker.isSharedWorker&&(o.appName=n.appName),Neo.currentWorker.promiseMessage("main",o).then((()=>{})).catch((e=>{console.log("Error attempting to update Component cls",e,n)})))}updateStyle(e,t,o=this.id){let n,r=this,s=h.compareStyles(e,t),i=g.Z.findVdomChild(r.vdom,o),a=r.vnode&&y.Z.findChildVnode(r.vnode,o);s&&(i.vdom.style=e,a&&(a.vnode.style=e,n={action:"updateDom",deltas:[{id:o,style:s}]},Neo.currentWorker.isSharedWorker&&(n.appName=r.appName),Neo.currentWorker.sendMessage("main",n)))}updateVdom(e,t,o,n){let r,s=this;s.isVdomUpdating?s.needsVdomUpdate=!0:(s.isVdomUpdating=!0,r={vdom:e,vnode:t},Neo.currentWorker.isSharedWorker&&(r.appName=s.appName),Neo.vdom.Helper.update(r).then((e=>{s.vnode=e.vnode,s.isVdomUpdating=!1,o&&o(),s.needsVdomUpdate&&(s.needsVdomUpdate=!1,s.vdom=s.vdom)})).catch((e=>{console.log("Error attempting to update component dom",e,s),s.isVdomUpdating=!1,n&&n()})))}}Neo.applyClassConfig(v)},805:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var n=o(249),r=o(643);class s extends r.Z{static getConfig(){return{className:"Neo.layout.Base",ntype:"layout-base",containerId:null,isLayout:!0}}applyChildAttributes(e){}applyRenderAttributes(){}removeChildAttributes(e){}removeRenderAttributes(){}}Neo.applyClassConfig(s);var i=o(926);Neo.applyClassConfig(class extends s{static getStaticConfig(){return{activeItemCls:"active-item",inactiveItemCls:"inactive-item",itemCls:"neo-layout-card-item"}}static getConfig(){return{className:"Neo.layout.Card",ntype:"layout-card",activeIndex_:0,removeInactiveCards:!0}}afterSetActiveIndex(e,t){let o,n,r,s,a=this,l=Neo.getComponent(a.containerId),d=a.getStaticConfig();l&&(r=l.items,s=l.vdom,r[e]||Neo.error("Trying to activate a non existing card",e,r),r.forEach(((t,r)=>{n=t.cls,o=r===e,i.Z.remove(n,o?d.inactiveItemCls:d.activeItemCls),i.Z.add(n,o?d.activeItemCls:d.inactiveItemCls),a.removeInactiveCards?(t._cls=n,t.getVdomRoot().cls=n,o?t.vdom.removeDom=!1:(t.mounted=!1,t.vdom.removeDom=!0)):t.cls=n})),a.removeInactiveCards&&(l.vdom=s))}applyChildAttributes(e,t,o=!1){let n=this,r=n.activeIndex===t,s=n.getStaticConfig(),a=e.cls,l=e.vdom;i.Z.add(a,s.itemCls),i.Z.add(a,r?s.activeItemCls:s.inactiveItemCls),!o&&n.removeInactiveCards?(e._cls=a,l.removeDom=!r,e.vdom=l):e.cls=a}applyRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e&&e.cls;e||Neo.logError("layout.Card: applyRenderAttributes -> container not yet created",this.containerId),i.Z.add(t||[],"neo-layout-card"),e.cls=t}removeRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e&&e.cls;e||Neo.logError("layout.Card: removeRenderAttributes -> container not yet created",this.containerId),i.Z.remove(t,"neo-layout-card"),e.cls=t}}),Neo.applyClassConfig(class extends s{static getConfig(){return{className:"Neo.layout.Fit",ntype:"layout-fit"}}applyChildAttributes(e,t){e.ignoreLayout||(e.cls=i.Z.union(e.cls,"neo-layout-fit-item"))}applyRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e&&e.cls;e||Neo.logError("layout.Fit: applyRenderAttributes -> container not yet created",this.containerId),i.Z.add(t||[],"neo-layout-fit"),e.cls=t}removeRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e&&e.cls;e||Neo.logError("layout.Fit: removeRenderAttributes -> container not yet created",this.containerId),i.Z.remove(t,"neo-layout-fit"),e.cls=t}});class a extends s{static getStaticConfig(){return{alignValues:["center","end","start","stretch",null],directionValues:["column","column-reverse","row","row-reverse",null],packValues:["center","end","start",null],wrapValues:["nowrap","wrap","wrap-reverse"]}}static getConfig(){return{className:"Neo.layout.Flexbox",ntype:"layout-flexbox",align_:null,direction_:null,pack_:null,prefix:"neo-flex-",wrap_:"nowrap"}}afterSetAlign(e,t){this.updateInputValue(e,t,"align")}afterSetDirection(e,t){this.updateInputValue(e,t,"direction")}afterSetPack(e,t){this.updateInputValue(e,t,"pack")}afterSetWrap(e,t){this.updateInputValue(e,t,"wrap")}applyChildAttributes(e){let t=e.wrapperStyle;t.flex=t.flex||e.flex||("stretch"===this.align?1:"0 1 auto"),e.wrapperStyle=t}applyRenderAttributes(){let e=this,t=Neo.getComponent(e.containerId),o=e.prefix,n=t&&t.cls;t||Neo.logError("layout.Flexbox: applyRenderAttributes -> container not yet created",e.containerId),i.Z.add(n||[],o+"container"),e.align&&i.Z.add(n,o+"align-"+e.align),e.direction&&i.Z.add(n,o+"direction-"+e.direction),e.pack&&i.Z.add(n,o+"pack-"+e.pack),e.wrap&&i.Z.add(n,o+"wrap-"+e.wrap),t.cls=n}beforeSetAlign(e,t){return this.testInputValue(e,t,"alignValues","align")}beforeSetDirection(e,t){return this.testInputValue(e,t,"directionValues","direction")}beforeSetPack(e,t){return this.testInputValue(e,t,"packValues","pack")}beforeSetWrap(e,t){return this.testInputValue(e,t,"wrapValues","wrap")}removeChildAttributes(e){let t=e.wrapperStyle||{};t.flex=e.flex||null,e.wrapperStyle=t}removeRenderAttributes(){let e=this,t=Neo.getComponent(e.containerId),o=e.prefix,n=t&&t.cls;t||Neo.logError("layout.Flexbox: removeRenderAttributes -> container not yet created",e.containerId),i.Z.remove(n,o+"container"),e.align&&i.Z.remove(n,o+"align-"+e.align),e.direction&&i.Z.remove(n,o+"direction-"+e.direction),e.pack&&i.Z.remove(n,o+"pack-"+e.pack),e.wrap&&i.Z.remove(n,o+"wrap-"+e.wrap),t.cls=n}testInputValue(e,t,o,n){const r=this.getStaticConfig(o);return i.Z.hasItem(r,e)?e:(Neo.logError(this.containerId,'-> layout: supported values for "'+n+'" are',r),t)}updateInputValue(e,t,o){let n=Neo.getComponent(this.containerId),r=this.prefix,s=n&&n.cls;n&&n.rendered&&(i.Z.remove(s,r+o+"-"+t),null!==e&&i.Z.add(s,r+o+"-"+e),n.cls=s)}}Neo.applyClassConfig(a),Neo.applyClassConfig(class extends a{static getConfig(){return{className:"Neo.layout.HBox",ntype:"layout-hbox",direction:"row"}}applyChildAttributes(e){e.width||super.applyChildAttributes(e)}}),Neo.applyClassConfig(class extends a{static getConfig(){return{className:"Neo.layout.VBox",ntype:"layout-vbox",direction:"column"}}applyChildAttributes(e){e.height||super.applyChildAttributes(e)}});var l=o(212);class d extends n.Z{static getConfig(){return{className:"Neo.container.Base",ntype:"container",cls:["neo-container"],itemDefaults_:null,items_:[],layout_:{ntype:"vbox",align:"stretch"},_vdom:{cn:[]}}}mergeConfig(...e){let t=super.mergeConfig(...e);return t.itemDefaults&&(this._itemDefaults=Neo.clone(t.itemDefaults,!0,!0),delete t.itemDefaults),t.items&&(this._items=Neo.clone(t.items,!0,!0),delete t.items),t}onConstructed(){let e=this;e._layout=e.createLayout(e.layout),e._layout.applyRenderAttributes(),super.onConstructed(),e.parseItemConfigs(e.items),e.createItems()}add(e){let t=this;return t.insert(t.items?t.items.length:0,e)}afterSetAppName(e,t){e&&this.items&&this.items.forEach((t=>{Neo.isObject(t)&&(t.appName=e)}))}afterSetLayout(e,t){this.rendered&&(t.removeRenderAttributes(),e.applyRenderAttributes(),this.items.forEach(((o,n)=>{t.removeChildAttributes(o,n),e.applyChildAttributes(o,n)})))}afterSetMounted(e,t){if(super.afterSetMounted(e,t),void 0!==t){let t=this.items,o=0,n=t.length;for(;o<n;o++)t[o].vdom.removeDom||(t[o].mounted=e)}}afterSetRendering(e,t){if(void 0!==t){let t=this.items,o=0,n=t.length;for(;o<n;o++)t[o].vdom.removeDom||(t[o].rendering=e)}}beforeSetLayout(e){return this.createLayout(e)}createItems(){let e=this,t=e._items,o=e.itemDefaults,n=e.layout,r=e.vdom,s=e.getVdomRoot();s.cn=[],t.forEach(((r,i)=>{r.constructor.isClass&&r instanceof Neo.core.Base?Object.assign(r,{appName:e.appName,parentId:e.id}):r.isClass?r=Neo.create(r,{appName:e.appName,parentId:e.id}):"string"==typeof r?r=Neo.ntype({ntype:"component",appName:e.appName,vdom:{innerHTML:r}}):(o&&Neo.assignDefaults(r,o),r.module&&(r.className=r.module.prototype.className),Object.assign(r,{appName:e.appName,parentId:e.id,style:r.style||{}}),r=Neo[r.className?"create":"ntype"](r)),t[i]=r,n.applyChildAttributes(r,i),s.cn.push(r.vdom)})),e.vdom=r}createLayout(e){let t=this;return e&&(e instanceof s&&e.isLayout?e.containerId=t.id:((e=t.parseLayoutClass(e)).containerId=t.id,e=Neo.ntype(e))),e}destroy(e=!1,t=!1){this.items.forEach((e=>{e.destroy(!1,!0)})),super.destroy(e,t)}getVdomItemsRoot(){return this.vdom.cn}indexOf(e){let t=this,o=0,n=t.items&&t.items.length||0;for(Neo.isString(e)||(e=e.id);o<n;o++)if(t.items[o].id===e)return o;return-1}insert(e,t,o=!1){let n,r,s=this,i=s.items,a=s.vdom;if(Array.isArray(t))for(n=0,r=t.length;n<r;n++)s.insert(e,t[r-1-n],!0);else"object"==typeof t&&(t instanceof Neo.component.Base?Object.assign(t,{appName:s.appName,parentId:s.id,parentIndex:e}):(t.module&&(t.className=t.module.prototype.className),t={...s.itemDefaults||{},appName:s.appName,autoMount:s.mounted,parentId:s.id,parentIndex:e,...t},t=Neo[t.className?"create":"ntype"](t)),s.layout.applyChildAttributes(t,e,!0),i.splice(e,0,t),s.items=i,a.cn.splice(e,0,t.vdom));return o?s._vdom=a:s.promiseVdomUpdate().then((()=>{s.fire("insert",{index:e,item:t})})),t}moveTo(e,t){let o=this,n=o.items[e];return e!==t&&o.switchItems(o.items[t].id,n.id),n}parseItemConfigs(e){let t=this;e.forEach((e=>{Object.entries(e).forEach((([o,n])=>{"items"===o?t.parseItemConfigs(n):"string"==typeof n&&n.startsWith("@config:")&&(n=n.substr(8),t[n]?e[o]=t[n]:l.Z.logError("The used @config does not exist:",n,t))}))}))}parseLayoutClass(e){return Neo.isObject(e)?e.ntype.indexOf("layout-")<0&&(e.ntype="layout-"+e.ntype):e=e.indexOf("layout-")<0?{ntype:"layout-"+e}:{ntype:e},e}remove(e,t=!0,o=!1){let n=[...this.items],r=0,s=n.length;for(;r<s;r++)n[r].id===e.id&&this.removeAt(r,t,o)}removeAt(e,t=!0,o=!1){let n,r,s=this,i=s.items,a=s.vdom;e>=i.length?Neo.warn("Container.removeAt: index >= items.length. "+s.id):(r=i[e],i.splice(e,1),n=a.cn||a.childNodes||a.children,n.splice(e,1),s[o&&!t?"_vdom":"vdom"]=a,t?r.destroy(!0):r.mounted=!1)}switchItems(e,t){let o=this,n=o.indexOf(e),r=o.indexOf(t),s=o.vdom;i.Z.move(o.items,r,n),i.Z.move(o.getVdomItemsRoot(),r,n),o.vdom=s}}Neo.applyClassConfig(d)},748:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o(805);class r extends n.Z{static getConfig(){return{className:"Neo.container.Viewport",ntype:"viewport",applyBodyCls:!0,cls:["neo-viewport"]}}onConstructed(){super.onConstructed(),this.applyBodyCls&&Neo.main.DomAccess.applyBodyCls({appName:this.appName,cls:["neo-body-viewport"]})}}Neo.applyClassConfig(r)},853:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var n=o(220),r=o(383),s=o(634),i=o(212),a=o(643);class l extends a.Z{static getConfig(){return{className:"Neo.util.Function"}}static bindAppend(e){const t=this,o=[].slice.call(arguments).slice(1);return function(){return t.apply(e,[].slice.call(arguments).concat(o))}}static createSequence(e,t,o,n){let r=e[t]||Neo.emptyFn;return e[t]=function(){return r.apply(this,arguments),o.apply(n||this,arguments)}}static intercept(e,t,o,n){let r=e[t]||Neo.emptyFn;return e[t]=function(){let e=o.apply(n||this,arguments);return r.apply(this,arguments),e}}}Neo.applyClassConfig(l);const d=l;class c extends n.Z{static getConfig(){return{className:"Neo.controller.Component",ntype:"component-controller",references:null,view_:null}}constructor(e){super(e);let t=this;t.references={},d.createSequence(t.view,"onConstructed",t.onViewConstructed,t)}beforeGetView(e,t){return Neo.get(e)}beforeSetView(e,t){return e.id}getParent(e){let t,o=this.view,n=r.Z.getParents(o),s=0,i=n.length;for(;s<i;s++)if(t=n[s].controller,t){if(!e)return t;if(e===t.ntype)return t}return null}getParentHandlerScope(e){let t,o=this.view,n=r.Z.getParents(o),s=0,i=n.length;for(;s<i;s++)if(t=n[s].controller,t&&t[e])return t;return null}getReference(e){let t,o=this,n=o.references[e];return n&&(t=Neo.getComponent(n)),t||(t=o.view.down({reference:e}),t&&(o.references[e]=t.id)),t||null}onViewConstructed(e){let t,o,n,r,a=this,l=!!e;(e=e||a.view).domListeners=Neo.clone(e.domListeners,!0,!0),t=e.domListeners,t&&(Array.isArray(t)||(t=[t]),t.forEach((t=>{Object.entries(t).forEach((([l,d])=>{o=null,"scope"!==l&&"delegate"!==l&&(Neo.isString(d)?o=d:Neo.isObject(d)&&d.hasOwnProperty("fn")&&Neo.isString(d.fn)&&(o=d.fn),o&&(a[o]?(n=a[o].bind(a),t[l]=n,s.Z.updateListenerPlaceholder({componentId:e.id,eventHandlerMethod:n,eventHandlerName:o,eventName:l,scope:a})):(r=a.getParentHandlerScope(o),r?(n=r[o].bind(r),t[l]=n,s.Z.updateListenerPlaceholder({componentId:e.id,eventHandlerMethod:n,eventHandlerName:o,eventName:l,scope:r})):i.Z.logError("Unknown domEvent handler for",e,o))))}))}))),e.listeners&&Object.entries(e.listeners).forEach((([t,n])=>{Array.isArray(n)&&n.forEach((t=>{o=null,Neo.isObject(t)&&t.hasOwnProperty("fn")&&Neo.isString(t.fn)&&(o=t.fn,a[o]?t.fn=a[o].bind(a):i.Z.logError("Unknown event handler for",e,o))}))})),e.items&&e.items.forEach((e=>{e.controller||a.onViewConstructed(e)})),l||a.onViewParsed()}onViewParsed(){}parseConfig(e){let t,o=this,n=e||o.view,r=n.domListeners;r&&(Array.isArray(r)||(r=[r]),r.forEach((e=>{Object.entries(e).forEach((([r,s])=>{t=null,"scope"!==r&&"delegate"!==r&&(Neo.isString(s)?t=s:Neo.isObject(s)&&s.hasOwnProperty("fn")&&Neo.isString(s.fn)&&(t=s.fn),t&&(o[t]?(console.log("#",r,o.id),console.log("parseConfig",t),e[r]=o[t].bind(o)):i.Z.logError("Unknown domEvent handler for",n,t)))}))}))),n.listeners&&Object.entries(n.listeners).forEach((([e,r])=>{t=null,"scope"!==e&&"delegate"!==e&&(Neo.isString(r)?t=r:Neo.isObject(r)&&r.hasOwnProperty("fn")&&Neo.isString(r.fn)&&(t=r.fn),t&&(o[t]?n.listeners[e]=o[t].bind(o):i.Z.logError("Unknown event handler for",n,t)))})),n.headers&&n.headers.forEach((e=>{e.controller||o.parseConfig(e)})),n.items&&n.items.forEach((e=>{e.controller||o.parseConfig(e)}))}}Neo.applyClassConfig(c)},300:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(643);class r extends n.Z{static getConfig(){return{className:"Neo.util.ClassSystem"}}static beforeSetInstance(e,t=null,o={}){if(!e&&t)e=Neo.create(t,o);else if(e&&e.isClass)e=Neo.create(e,o);else if(Neo.isObject(e)&&!(e instanceof Neo.core.Base))if(e.ntype)e=Neo.ntype({...o,...e});else{const n={};t&&(n.module=t),Object.assign(n,{...o,...e}),e=Neo.create(n)}return e}}Neo.applyClassConfig(r);const s=r}}]);