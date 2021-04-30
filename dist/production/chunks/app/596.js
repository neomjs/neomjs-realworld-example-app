(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[596],{4249:(e,t,o)=>{"use strict";o.d(t,{Z:()=>v});var n=o(9300),r=o(1383),s=o(4643),i=o(4634),a=o(2926);class d extends s.Z{static getConfig(){return{className:"Neo.util.Object"}}static isEqual(e,t){return Neo.isObject(e)&&Neo.isObject(t)?Object.keys(e).length===Object.keys(t).length&&Object.keys(e).reduce((function(o,n){return o&&d.isEqual(e[n],t[n])}),!0):e===t}}Neo.applyClassConfig(d);const l=d;class p extends s.Z{static getConfig(){return{className:"Neo.util.KeyNavigation",ntype:"keynav",component_:null,keyDownEventBubble:!1,keys_:null}}add(e){this._keys.push(...this.parseKeys(e))}beforeGetComponent(){return Neo.getComponent(this._component)}beforeSetComponent(e){return e&&e.id}destroy(){this.unregister(),super.destroy()}onKeyDown(e){if(e.key){let t,o=this,n=e.key.toUpperCase();n=o.parseUpperCaseKey(n),o.keys.forEach((o=>{t=Neo.get(o.scope),o.key.toUpperCase()===n&&t[o.fn]&&t[o.fn].apply(t,[e])}))}}parseKeys(e){if(!Array.isArray(e)){let t=this._component,o=[];t&&(Object.entries(e).forEach((([e,n])=>{o.push({fn:n,key:e,scope:t})})),e=o)}return e}parseUpperCaseKey(e){switch(e){case" ":e="SPACE";break;case"ARROWDOWN":e="DOWN";break;case"ARROWLEFT":e="LEFT";break;case"ARROWRIGHT":e="RIGHT";break;case"ARROWUP":e="UP"}return e}register(e){let t=this,o=e.domListeners;t.component=e,t.keys=t.parseKeys(t.keys),o&&(o.push({keydown:{fn:t.onKeyDown,bubble:t.keyDownEventBubble,scope:t}}),e.domListeners=o)}removeKey(e){let t,o=this._keys,n=0,r=o.length;for(;n<r;n++)if(t=o[n],l.isEqual(t,e)){a.Z.remove(o,t);break}}removeKeys(e){Array.isArray(e)&&e.forEach((e=>this.removeKey(e)))}unregister(){}}Neo.applyClassConfig(p);const c=p;var m=o(6212);o(8389);class u extends s.Z{static getConfig(){return{className:"Neo.util.Style"}}static compareStyles(e,t){let o={};return Neo.isString(e)&&(e=Neo.core.Util.createStyleObject(e)),Neo.isString(t)&&(t=Neo.core.Util.createStyleObject(t)),e||t?t?e?(Object.keys(e).forEach((function(n){t.hasOwnProperty(n)&&t[n]===e[n]||(o[n]=e[n])})),Object.keys(t).forEach((function(t){e.hasOwnProperty(t)||(o[t]=null)})),Object.keys(o).length>0?o:null):void Object.keys(t).forEach((function(e){o[e]=null})):Neo.clone(e):null}}Neo.applyClassConfig(u);const h=u;var g=o(3083),y=o(1939),f=o(7692);class v extends s.Z{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.component.Base",ntype:"component",appName_:null,autoMount:!1,autoRender:!1,bind:null,containsFocus_:!1,controller_:null,disabled_:!1,domListeners_:null,droppable_:!1,dropZone:null,dropZoneConfig:null,hasBeenMounted:!1,hasRenderingListener:!1,hasUnmountedVdomChanges_:!1,height_:null,html_:null,id_:null,isVdomUpdating:!1,keys_:null,maxHeight_:null,maxWidth_:null,minHeight_:null,minWidth_:null,model_:null,mounted_:!1,needsVdomUpdate:!1,parentId:"document.body",plugins_:null,rendering_:!1,silentVdomUpdate:!1,style:{},tooltips_:null,vnode_:null,width_:null,wrapperStyle_:null,_vdom:{}}}get cls(){return this._cls?Neo.clone(this._cls):["neo-component"]}set cls(e){e=e||[];let t,o=this,n=o.vdom,r=o.getVdomRoot();"string"==typeof e&&(e=e.split("")),o.mounted&&(t=Neo.clone(o._cls)),o._cls=e,r&&(r.cls=[...e]),o._vdom=n,o.mounted&&o.updateCls(e,t)}get listeners(){return this._listeners||{}}set listeners(e){this._listeners=e}get rendered(){return this._rendered||!1}set rendered(e){let t=this;t._rendered=e,!0===e&&t.fire("rendered",t.id)}get style(){return Neo.clone(this._style)}set style(e){let t=this,o=t.style;t._style=e,t.updateStyle(e,o)}get vdom(){return this._vdom}set vdom(e){let t,o=this,n=Neo.apps[o.appName],r=e,s=o.cls,i=o.height,a=o.style,d=o.getVdomRoot(),l=o.width;d&&(s&&(d.cls=s),i&&(d.height=i),l&&(d.width=l),a&&(d.style=Object.assign(d.style||{},a))),o._vdom!==r?(m.Z.warn("vdom got replaced for: "+o.id+". Copying the content into the reference holder object"),Object.keys(o._vdom).forEach((e=>{delete o._vdom[e]})),Object.assign(o._vdom,r)):o._vdom=r,o.silentVdomUpdate||(!o.mounted&&o.isConstructed&&!o.hasRenderingListener&&n&&!0===n.rendering?(o.hasRenderingListener=!0,t=n.on("mounted",(()=>{n.un("mounted",t),setTimeout((()=>{o.updateVdom(o.vdom,o.vnode)}),50)}))):o.mounted&&o.updateVdom(r,o.vnode),o.hasUnmountedVdomChanges=!o.mounted&&o.hasBeenMounted)}constructor(e){super(e),r.Z.register(this)}addStyle(e){return"string"==typeof e&&(e=g.Z.createStyleObject(e)),this.style=Object.assign(this.style,e)}afterSetDisabled(e,t){let o=this.cls;a.Z[e?"add":"remove"](o,"neo-disabled"),this.cls=o}afterSetDomListeners(e,t){i.Z.updateDomListeners(this,e,t)}afterSetDroppable(e,t){let n=this;e&&!n.dropZone&&o.e(304).then(o.bind(o,8404)).then((e=>{n.dropZone=Neo.create({module:e.default,appName:n.appName,owner:n,...n.dropZoneConfig||{}})}))}afterSetHasUnmountedVdomChanges(e,t){if(e||!e&&t){let t,o=r.Z.getParentIds(this),n=0,s=o.length;for(;n<s;n++)t=Neo.getComponent(o[n]),t&&(t._hasUnmountedVdomChanges=e)}}afterSetHeight(e,t){this.changeVdomRootKey("height",e)}afterSetHtml(e,t){this.changeVdomRootKey("html",e)}afterSetId(e,t){this.changeVdomRootKey("id",e)}afterSetMaxHeight(e,t){this.changeVdomRootKey("maxHeight",e)}afterSetMaxWidth(e,t){this.changeVdomRootKey("maxWidth",e)}afterSetMinHeight(e,t){this.changeVdomRootKey("minHeight",e)}afterSetMinWidth(e,t){this.changeVdomRootKey("minWidth",e)}afterSetMounted(e,t){if(void 0!==t){let t=this;e&&(t.hasBeenMounted=!0,t.domListeners&&t.domListeners.length>0&&setTimeout((()=>{i.Z.mountDomListeners(t)}),300),t.fire("mounted",t.id))}}afterSetTooltips(e,t){if(e){let t=this;Neo.ns("Neo.tooltip.Base")?t.createTooltips(e):o.e(270).then(o.bind(o,2811)).then((o=>{t.createTooltips(e)}))}}afterSetVnode(e,t){void 0!==t&&this.syncVnodeTree()}afterSetWidth(e,t){this.changeVdomRootKey("width",e)}afterSetWrapperStyle(e,t){if(e||void 0!==t){let o=this,n=o.vdom;o.vdom.id?o.updateStyle(e,t,o.vdom.id):(n.style=e,o.vdom=n)}}beforeGetWrapperStyle(e){return{...Object.assign(this.vdom.style||{},e)}}beforeSetController(e,t){return t&&t.destroy(),e?n.Z.beforeSetInstance(e,null,{component:this}):e}beforeSetDomListeners(e,t){return Neo.isObject(e)&&(e=[e]),e||[]}beforeSetKeys(e,t){return t&&t.destroy(),e&&(e=n.Z.beforeSetInstance(e,c,{keys:e})),e}beforeSetModel(e,t){return t&&t.destroy(),e?n.Z.beforeSetInstance(e,"Neo.model.Component",{component:this}):null}beforeSetPlugins(e,t){return Array.isArray(e)&&e.forEach(((t,o)=>{e[o]=n.Z.beforeSetInstance(t,null,{owner:this})})),e}changeVdomRootKey(e,t){let o=this,n=o.vdom;t?o.getVdomRoot()[e]=t:delete o.getVdomRoot()[e],o.vdom=n}createTooltips(e){Array.isArray(e)||(e=[e]);let t,o=this,n=[];e.forEach((e=>{t=Neo.create("Neo.tooltip.Base",{appName:o.appName,componentId:o.id,...e}),n.push(t)})),o._tooltips=n}destroy(e=!1,t=!1){let o,n,s=this,i=Neo.getComponent(s.parentId),a=i&&i.getModel();s.controller?s.controller.destroy():s.reference&&(o=s.getController(),o&&o.removeReference(s)),s.model&&s.model.destroy(),s.bind&&a&&a.removeBindings(s.id),e&&s.parentId&&("document.body"===s.parentId?Neo.currentWorker.promiseMessage("main",{action:"updateDom",appName:s.appName,deltas:[{action:"removeNode",id:s.vdom.id}]}):(n=i.vdom,y.Z.removeVdomChild(n,s.vdom.id),i[t?"_vdom":"vdom"]=n)),r.Z.unregister(s),super.destroy()}down(e){return r.Z.down(this,e)}focus(e){let t=this;Neo.main.DomAccess.focus({id:e||t.id}).then((e=>{})).catch((e=>{console.log("Error attempting to receive focus for component",e,t)}))}getApp(){return Neo.apps[this.appName]}getConfigInstanceByNtype(e,t){let o,n=this,r=n[e];return!r||t&&t!==r.ntype?n.parentId&&(o=Neo.getComponent(n.parentId),o)?o.getConfigInstanceByNtype(e,t):null:r}getController(e){return this.getConfigInstanceByNtype("controller",e)}getModel(e){return Neo.currentWorker.isUsingViewModels?this.getConfigInstanceByNtype("model",e):null}getPlugin(e){e="string"!=typeof e?e:{id:e};let t,o=this;for(const n of o.plugins||[]){t=!0;for(const o in e)if(n[o]!==e[o]){t=!1;break}if(t)return n}return null}getTheme(){let e,t,o,n=this,r="neo-theme-";for(const e of n.cls||[])if(e.startsWith(r))return e;if(e=Neo.apps[n.appName],t=e&&e.mainView,t){o=y.Z.getParentNodes(t.vdom,n.id);for(const e of o||[])for(const t of e.cls||[])if(t.startsWith(r))return t}return Neo.config.themes&&Neo.config.themes[0]}getVdomChild(e,t){let o=y.Z.findVdomChild(t||this.vdom,e);return o&&o.vdom}getVdomRoot(){return this.vdom}getVnodeRoot(){return this.vnode}init(){this.autoRender&&this.render()}initConfig(e,t){super.initConfig(e,t);let o=this,n=o.getController(),r=o.getModel();n&&n.parseConfig(o),r&&r.parseConfig(o)}mergeConfig(...e){let t=this,o=super.mergeConfig(...e),n={...t._vdom||{},...o.vdom||{}};return t._vdom=Neo.clone(n,!0,!0),t.cls=o.cls,t._style=o.style,t.wrapperStyle=Neo.clone(o.wrapperStyle,!1),delete o.cls,delete o.style,delete o._vdom,delete o.vdom,delete o.wrapperStyle,o}mount(){let e,t,o=this;if(!o.vnode)throw new Error("Component vnode must be generated before mounting, use Component.render()");o.hasUnmountedVdomChanges?(o.hasUnmountedVdomChanges=!1,t=r.Z.getChildIds(o.vnode),t.forEach((t=>{e=Neo.getComponent(t),e&&(e._hasUnmountedVdomChanges=!1)})),o.render(!0)):Neo.currentWorker.promiseMessage("main",{action:"mountDom",appName:o.appName,id:o.id,html:o.vnode.outerHTML,parentId:o.parentId,parentIndex:o.parentIndex}).then((()=>{o.mounted=!0}))}onConstructed(){super.onConstructed();let e=this;e.keys&&e.keys.register(e)}onRender(e,t){let o=this,n=Neo.apps[o.appName];if(o.rendering=!1,n){n.rendered||(n.rendering=!1,n.rendered=!0,n.fire("render")),o.vnode=e;let s,i=r.Z.getChildIds(e),a=0,d=i.length;for(;a<d;a++)s=Neo.getComponent(i[a]),s&&(s.rendered=!0);o._rendered=!0,o.fire("rendered",o.id),console.log("rendered: "+o.appName+" "+o.id,o),t&&(o.mounted=!0,n.mounted||(n.mounted=!0,n.fire("mounted")))}}promiseVdomUpdate(e=this.vdom,t=this.vnode){let o=this;return o._vdom!==e?(m.Z.warn("vdom got replaced for: "+o.id+". Copying the content into the reference holder object"),Object.keys(o._vdom).forEach((e=>{delete o._vdom[e]})),Object.assign(o._vdom,e)):o._vdom=e,new Promise(((n,r)=>{o.mounted?o.updateVdom(e,t,n,r):(o.vdom=e,n())}))}removeStyle(e){"string"==typeof e&&(e=[e]);let t=this.style,o=!1;return Object.entries(t).forEach((n=>{e.indexOf(n)>-1&&(delete t[n],o=!0)})),o&&(this.style=t),t}render(e){let t=this,o=e||t.autoMount,n=Neo.apps[t.appName];t.rendering=!0,n.rendered||(n.rendering=!0),t.vdom&&(t.isVdomUpdating=!0,Neo.vdom.Helper.create({appName:t.appName,autoMount:o,cls:t.cls,parentId:o?t.parentId:void 0,parentIndex:o?t.parentIndex:void 0,style:t.style,...t.vdom}).then((e=>{t.onRender(e,o),t.isVdomUpdating=!1})))}set(e={},t=!1){let o=this,n=o.vdom;if(o.silentVdomUpdate=!0,super.set(e),o.silentVdomUpdate=!1,!t)return o.promiseVdomUpdate();o._vdom=n}setSilent(e={}){return this.set(e,!0)}syncVdomIds(e=this.vnode,t=this.vdom){y.Z.syncVdomIds(e,t)}syncVnodeTree(e=this.vnode){let t,o=this;o.syncVdomIds(),r.Z.getChildren(o).forEach((e=>{t=f.Z.findChildVnode(o.vnode,e.vdom.id),t?(e._vnode=t.vnode,e.rendered||(e._rendered=!0,e.fire("rendered",e.id)),e.mounted=!0):console.warn("syncVnodeTree: Could not replace the child vnode for",e.id)})),r.Z.getParents(o).forEach(((e,t)=>{o.vnode?0===t&&o.vnode.outerHTML?e.vnode.childNodes.splice(o.parentIndex||0,0,o.vnode):f.Z.replaceChildVnode(e.vnode,o.vnode.id,o.vnode):0===t&&f.Z.removeChildVnode(e.vnode,o.id)}))}unmount(){let e=this;Neo.currentWorker.promiseMessage("main",{action:"updateDom",appName:e.appName,deltas:[{action:"removeNode",id:e.vdom.id}]}).then((()=>{e.mounted=!1})).catch((t=>{console.log("Error attempting to unmount component",t,e)}))}up(e){return r.Z.up(this.id,e)}updateCls(e,t){let o,n=this,r=n.vnode;a.Z.isEqual(e,t)||(r&&(r.className=e,n.vnode=r),o={action:"updateDom",deltas:[{id:n.id,cls:{add:Neo.util.Array.difference(e,t),remove:Neo.util.Array.difference(t,e)}}]},Neo.currentWorker.isSharedWorker&&(o.appName=n.appName),Neo.currentWorker.promiseMessage("main",o).then((()=>{})).catch((e=>{console.log("Error attempting to update Component cls",e,n)})))}updateStyle(e,t,o=this.id){let n,r=this,s=h.compareStyles(e,t),i=y.Z.findVdomChild(r.vdom,o),a=r.vnode&&f.Z.findChildVnode(r.vnode,o);s&&(r.hasUnmountedVdomChanges||(r.hasUnmountedVdomChanges=!r.mounted&&r.hasBeenMounted),i.vdom.style=e,a&&(a.vnode.style=e),r.mounted&&(n={action:"updateDom",deltas:[{id:o,style:s}]},Neo.currentWorker.isSharedWorker&&(n.appName=r.appName),Neo.currentWorker.sendMessage("main",n)))}updateVdom(e,t,o,n){let r,s=this;s.isVdomUpdating?s.needsVdomUpdate=!0:(s.isVdomUpdating=!0,r={vdom:e,vnode:t},Neo.currentWorker.isSharedWorker&&(r.appName=s.appName),Neo.vdom.Helper.update(r).then((e=>{s.vnode=e.vnode,s.isVdomUpdating=!1,o&&o(),s.needsVdomUpdate&&(s.needsVdomUpdate=!1,s.vdom=s.vdom)})).catch((e=>{console.log("Error attempting to update component dom",e,s),s.isVdomUpdating=!1,n&&n()})))}}Neo.applyClassConfig(v)},805:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(4249),r=o(4643);class s extends r.Z{static getConfig(){return{className:"Neo.layout.Base",ntype:"layout-base",containerId:null,isLayout:!0}}applyChildAttributes(e){}applyRenderAttributes(){}removeChildAttributes(e){}removeRenderAttributes(){}}Neo.applyClassConfig(s);var i=o(2926);Neo.applyClassConfig(class extends s{static getStaticConfig(){return{activeItemCls:"active-item",inactiveItemCls:"inactive-item",itemCls:"neo-layout-card-item"}}static getConfig(){return{className:"Neo.layout.Card",ntype:"layout-card",activeIndex_:0,removeInactiveCards:!0}}async afterSetActiveIndex(e,t){let o,n,r,s,a,d,l,p,c,m=this,u=Neo.getComponent(m.containerId),h=m.getStaticConfig(),g=!1;if(u){for(a=u.items,c=u.vdom,d=a.length,a[e]||Neo.error("Trying to activate a non existing card",e,a),r=0;r<d;r++)if(l=a[r].module,r===e&&l&&!l.isClass&&Neo.isFunction(l)){g=!0;break}for(r=0;r<d;r++)o=r===e,s=a[r],l=s.module,o&&l&&!l.isClass&&Neo.isFunction(l)&&(l=await l(),l=l.default,p=l.prototype,n=s.cls||p.constructor.config.cls||[],s.className=p.className,s.cls=[...n,h.itemCls],s.module=l,delete s.vdom,a[r]=s=Neo.create(s),c.cn[r]=s.vdom),s instanceof Neo.core.Base&&(n=s.cls,i.Z.remove(n,o?h.inactiveItemCls:h.activeItemCls),i.Z.add(n,o?h.activeItemCls:h.inactiveItemCls),m.removeInactiveCards||g?(s._cls=n,s.getVdomRoot().cls=n,o?delete s.vdom.removeDom:(s.mounted=!1,s.vdom.removeDom=!0)):s.cls=n);(m.removeInactiveCards||g)&&(u.vdom=c)}}applyChildAttributes(e,t,o=!1){let n=this,r=n.activeIndex===t,s=n.getStaticConfig(),a=e.cls,d=e.vdom;i.Z.add(a,s.itemCls),i.Z.add(a,r?s.activeItemCls:s.inactiveItemCls),!o&&n.removeInactiveCards?(e._cls=a,d.removeDom=!r,e.vdom=d):e.cls=a}applyRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e&&e.cls;e||Neo.logError("layout.Card: applyRenderAttributes -> container not yet created",this.containerId),i.Z.add(t||[],"neo-layout-card"),e.cls=t}removeRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e&&e.cls;e||Neo.logError("layout.Card: removeRenderAttributes -> container not yet created",this.containerId),i.Z.remove(t,"neo-layout-card"),e.cls=t}}),Neo.applyClassConfig(class extends s{static getConfig(){return{className:"Neo.layout.Fit",ntype:"layout-fit"}}applyChildAttributes(e,t){e.ignoreLayout||(e.cls=i.Z.union(e.cls,"neo-layout-fit-item"))}applyRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e&&e.cls;e||Neo.logError("layout.Fit: applyRenderAttributes -> container not yet created",this.containerId),i.Z.add(t||[],"neo-layout-fit"),e.cls=t}removeRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e&&e.cls;e||Neo.logError("layout.Fit: removeRenderAttributes -> container not yet created",this.containerId),i.Z.remove(t,"neo-layout-fit"),e.cls=t}});class a extends s{static getStaticConfig(){return{alignValues:["center","end","start","stretch",null],directionValues:["column","column-reverse","row","row-reverse",null],packValues:["center","end","start",null],wrapValues:["nowrap","wrap","wrap-reverse"]}}static getConfig(){return{className:"Neo.layout.Flexbox",ntype:"layout-flexbox",align_:null,direction_:null,pack_:null,prefix:"neo-flex-",wrap_:"nowrap"}}afterSetAlign(e,t){this.updateInputValue(e,t,"align")}afterSetDirection(e,t){this.updateInputValue(e,t,"direction")}afterSetPack(e,t){this.updateInputValue(e,t,"pack")}afterSetWrap(e,t){this.updateInputValue(e,t,"wrap")}applyChildAttributes(e){let t=e.wrapperStyle;t.flex=t.flex||e.flex||("stretch"===this.align?1:"0 1 auto"),e.wrapperStyle=t}applyRenderAttributes(){let e=this,t=Neo.getComponent(e.containerId),o=e.prefix,n=t&&t.cls;t||Neo.logError("layout.Flexbox: applyRenderAttributes -> container not yet created",e.containerId),i.Z.add(n||[],o+"container"),e.align&&i.Z.add(n,o+"align-"+e.align),e.direction&&i.Z.add(n,o+"direction-"+e.direction),e.pack&&i.Z.add(n,o+"pack-"+e.pack),e.wrap&&i.Z.add(n,o+"wrap-"+e.wrap),t.cls=n}beforeSetAlign(e,t){return this.testInputValue(e,t,"alignValues","align")}beforeSetDirection(e,t){return this.testInputValue(e,t,"directionValues","direction")}beforeSetPack(e,t){return this.testInputValue(e,t,"packValues","pack")}beforeSetWrap(e,t){return this.testInputValue(e,t,"wrapValues","wrap")}removeChildAttributes(e){let t=e.wrapperStyle||{};t.flex=e.flex||null,e.wrapperStyle=t}removeRenderAttributes(){let e=this,t=Neo.getComponent(e.containerId),o=e.prefix,n=t&&t.cls;t||Neo.logError("layout.Flexbox: removeRenderAttributes -> container not yet created",e.containerId),i.Z.remove(n,o+"container"),e.align&&i.Z.remove(n,o+"align-"+e.align),e.direction&&i.Z.remove(n,o+"direction-"+e.direction),e.pack&&i.Z.remove(n,o+"pack-"+e.pack),e.wrap&&i.Z.remove(n,o+"wrap-"+e.wrap),t.cls=n}testInputValue(e,t,o,n){const r=this.getStaticConfig(o);return i.Z.hasItem(r,e)?e:(Neo.logError(this.containerId,'-> layout: supported values for "'+n+'" are',r),t)}updateInputValue(e,t,o){let n=Neo.getComponent(this.containerId),r=this.prefix,s=n&&n.cls;n&&n.rendered&&(i.Z.remove(s,r+o+"-"+t),null!==e&&i.Z.add(s,r+o+"-"+e),n.cls=s)}}Neo.applyClassConfig(a),Neo.applyClassConfig(class extends a{static getConfig(){return{className:"Neo.layout.HBox",ntype:"layout-hbox",direction:"row"}}applyChildAttributes(e){e.width||super.applyChildAttributes(e)}}),Neo.applyClassConfig(class extends a{static getConfig(){return{className:"Neo.layout.VBox",ntype:"layout-vbox",direction:"column"}}applyChildAttributes(e){e.height||super.applyChildAttributes(e)}});var d=o(6212);class l extends n.Z{static getConfig(){return{className:"Neo.container.Base",ntype:"container",cls:["neo-container"],itemDefaults_:null,items_:[],layout_:{ntype:"vbox",align:"stretch"},_vdom:{cn:[]}}}add(e){let t=this;return t.insert(t.items?t.items.length:0,e)}afterSetAppName(e,t){e&&this.items&&this.items.forEach((t=>{Neo.isObject(t)&&(t.appName=e)}))}afterSetLayout(e,t){this.rendered&&(t.removeRenderAttributes(),e.applyRenderAttributes(),this.items.forEach(((o,n)=>{t.removeChildAttributes(o,n),e.applyChildAttributes(o,n)})))}afterSetMounted(e,t){if(super.afterSetMounted(e,t),void 0!==t){let t=this.items,o=0,n=t.length;for(;o<n;o++)t[o].vdom.removeDom||(t[o].mounted=e)}}afterSetRendering(e,t){if(void 0!==t){let t=this.items,o=0,n=t.length;for(;o<n;o++)t[o].vdom.removeDom||(t[o].rendering=e)}}beforeSetLayout(e){return this.createLayout(e)}createItems(){let e,t,o=this,n=o._items,r=o.itemDefaults,s=o.layout,i=o.vdom,a=o.getVdomRoot();a.cn=[],n.forEach(((i,d)=>{i.constructor.isClass&&i instanceof Neo.core.Base?Object.assign(i,{appName:o.appName,parentId:o.id}):i.isClass?i=Neo.create(i,{appName:o.appName,parentId:o.id}):"string"==typeof i?i=Neo.ntype({ntype:"component",appName:o.appName,vdom:{innerHTML:i}}):(r&&Neo.assignDefaults(i,r),t=i.module,e=t&&!t.isClass&&Neo.isFunction(t),t&&!e&&(i.className=t.prototype.className),Object.assign(i,{appName:o.appName,parentId:o.id,style:i.style||{}}),e?i.vdom={removeDom:!0}:i=Neo[i.className?"create":"ntype"](i)),n[d]=i,e||s.applyChildAttributes(i,d),a.cn.push(i.vdom)})),o.vdom=i}createLayout(e){let t=this;return e&&(e instanceof s&&e.isLayout?e.containerId=t.id:((e=t.parseLayoutClass(e)).containerId=t.id,e=Neo.ntype(e))),e}destroy(e=!1,t=!1){this.items.forEach((e=>{e.destroy(!1,!0)})),super.destroy(e,t)}getVdomItemsRoot(){return this.vdom.cn}indexOf(e){let t=this,o=0,n=t.items&&t.items.length||0;for(Neo.isString(e)||(e=e.id);o<n;o++)if(t.items[o].id===e)return o;return-1}insert(e,t,o=!1){let n,r,s=this,i=s.items,a=s.vdom;if(Array.isArray(t))for(n=0,r=t.length;n<r;n++)s.insert(e,t[r-1-n],!0);else"object"==typeof t&&(t instanceof Neo.component.Base?Object.assign(t,{appName:s.appName,parentId:s.id,parentIndex:e}):(t.module&&(t.className=t.module.prototype.className),t={...s.itemDefaults||{},appName:s.appName,parentId:s.id,parentIndex:e,...t},t=Neo[t.className?"create":"ntype"](t)),s.layout.applyChildAttributes(t,e,!0),i.splice(e,0,t),s.items=i,a.cn.splice(e,0,t.vdom));return o?s._vdom=a:s.promiseVdomUpdate().then((()=>{s.fire("insert",{index:e,item:t})})),t}mergeConfig(...e){let t=super.mergeConfig(...e);return t.itemDefaults&&(this._itemDefaults=Neo.clone(t.itemDefaults,!0,!0),delete t.itemDefaults),t.items&&(this._items=Neo.clone(t.items,!0,!0),delete t.items),t}moveTo(e,t){let o=this,n=o.items[e];return e!==t&&o.switchItems(o.items[t].id,n.id),n}onConstructed(){let e=this;e._layout=e.createLayout(e.layout),e._layout.applyRenderAttributes(),super.onConstructed(),e.parseItemConfigs(e.items),e.createItems()}parseItemConfigs(e){let t=this;e.forEach((e=>{Object.entries(e).forEach((([o,n])=>{"items"===o?t.parseItemConfigs(n):"string"==typeof n&&n.startsWith("@config:")&&(n=n.substr(8),t.hasOwnProperty(n)?e[o]=t[n]:d.Z.logError("The used @config does not exist:",n,t))}))}))}parseLayoutClass(e){return Neo.isObject(e)?e.ntype.indexOf("layout-")<0&&(e.ntype="layout-"+e.ntype):e=e.indexOf("layout-")<0?{ntype:"layout-"+e}:{ntype:e},e}remove(e,t=!0,o=!1){let n=[...this.items],r=0,s=n.length;for(;r<s;r++)n[r].id===e.id&&this.removeAt(r,t,o)}removeAt(e,t=!0,o=!1){let n,r,s=this,i=s.items,a=s.vdom;e>=i.length?Neo.warn("Container.removeAt: index >= items.length. "+s.id):(r=i[e],i.splice(e,1),n=a.cn||a.childNodes||a.children,n.splice(e,1),s[o&&!t?"_vdom":"vdom"]=a,t?r.destroy(!0):r.mounted=!1)}switchItems(e,t){let o=this,n=o.indexOf(e),r=o.indexOf(t),s=o.vdom;i.Z.move(o.items,r,n),i.Z.move(o.getVdomItemsRoot(),r,n),o.vdom=s}}Neo.applyClassConfig(l)},6748:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o(805);class r extends n.Z{static getConfig(){return{className:"Neo.container.Viewport",ntype:"viewport",applyBodyCls:!0,cls:["neo-viewport"]}}onConstructed(){super.onConstructed(),this.applyBodyCls&&Neo.main.DomAccess.applyBodyCls({appName:this.appName,cls:["neo-body-viewport"]})}}Neo.applyClassConfig(r)},6671:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(9220),r=(o(1383),o(4634)),s=o(6212);class i extends n.Z{static getConfig(){return{className:"Neo.controller.Component",ntype:"component-controller",component:null,parent_:null,references:null}}constructor(e){super(e);let t=this;t.references={},t.component.isConstructed?t.onComponentConstructed():t.component.on("constructed",(()=>{t.onComponentConstructed()}))}beforeSetParent(e,t){return e||this.getParent()}getHandlerScope(e){let t=this,o=t.parent;return Neo.isFunction(t[e])?t:o?o.getHandlerScope(e):null}getModel(e=!1){let t=this.component;return e?t.model:t.getModel()}getParent(){let e,t,o=this;return o.parent?o.parent:(t=o.component.parentId,e=t&&Neo.getComponent(t),e&&e.getController()||null)}getReference(e){let t=this,o=t.references[e];return o||(o=t.component.down({reference:e}),o&&(t.references[e]=o)),o||null}onComponentConstructed(){}parseConfig(e=this.component){let t,o,n,i=this,a=e.domListeners,d=e.listeners,l=e.reference;a&&a.forEach((a=>{Object.entries(a).forEach((([d,l])=>{t=null,"scope"!==d&&"delegate"!==d&&(Neo.isString(l)?t=l:Neo.isObject(l)&&l.hasOwnProperty("fn")&&Neo.isString(l.fn)&&(t=l.fn),t&&(n=i.getHandlerScope(t),n?(o=n[t].bind(n),a[d]=o,r.Z.updateListenerPlaceholder({componentId:e.id,eventHandlerMethod:o,eventHandlerName:t,eventName:d,scope:void 0})):s.Z.logError("Unknown domEvent handler for",t,e)))}))})),d&&Object.entries(d).forEach((([o,r])=>{"scope"!==o&&"delegate"!==o&&r.forEach((o=>{Neo.isObject(o)&&o.hasOwnProperty("fn")&&Neo.isString(o.fn)&&(t=o.fn,n=i.getHandlerScope(t),n?o.fn=n[t].bind(n):s.Z.logError("Unknown event handler for",t,e))}))})),l&&(i.references[l]=e)}removeReference(e){let t,o=this.references;for(t in o)if(e===o[t]){delete o[t];break}}}Neo.applyClassConfig(i)}}]);