(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[938,860],{3110:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(4643),a=o(4249);class n extends a.Z{static getConfig(){return{className:"Neo.draggable.DragProxyComponent",ntype:"dragproxy",autoMount:!0,autoRender:!0,cls:["neo-dragproxy"],moveInMainThread:!0}}constructor(e){super(e);let t=this;t.on("mounted",t.onMounted,t)}onMounted(e){this.moveInMainThread&&Neo.main.addon.DragDrop.setDragProxyElement({appName:this.appName,id:e})}}Neo.applyClassConfig(n);var l=o(2926),i=(o(8389),o(1939));class s extends r.Z{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.draggable.DragZone",ntype:"dragzone",addDragProxyCls:!0,alwaysFireDragMove:!1,appName:null,bodyCursorStyle:null,boundaryContainerId:null,data:null,dragElement:null,dragElementRect:null,dragProxy:null,dragProxyConfig_:null,dragProxyCls:"neo-dragproxy",dropZoneIdentifier:null,moveHorizontal:!0,moveInMainThread:!0,moveVertical:!0,offsetX:0,offsetY:0,owner:null,proxyParentId_:"document.body",scrollContainerId:null,scrollFactorLeft:1,scrollFactorTop:1,useProxyWrapper:!0}}constructor(e){super(e),Neo.main.addon.DragDrop||console.error("You can not use Neo.draggable.DragZone without adding Neo.main.addon.DragDrop to the main thread addons",this.id)}beforeGetDragProxyConfig(e){return Neo.clone(e,!0,!0)}createDragProxy(e){let t=this,o=Neo.getComponent(t.getDragElementRoot().id)||t.owner,r=t.dragElementRect,a=t.dragProxyConfig&&t.dragProxyConfig.vdom,s=i.Z.clone(a||t.dragElement);const d={module:n,appName:t.appName,moveInMainThread:t.moveInMainThread,parentId:t.proxyParentId,style:{height:`${e.height}px`,left:`${t.moveHorizontal?e.x:r.x}px`,top:`${t.moveVertical?e.y:r.y}px`,width:`${e.width}px`},...t.dragProxyConfig||{},vdom:t.useProxyWrapper?{cn:[s]}:s};d.cls=d.cls||[],o&&d.cls.push(o.getTheme()),s.cls&&!t.useProxyWrapper&&d.cls.push(...s.cls),t.addDragProxyCls&&d.cls&&l.Z.add(d.cls,t.dragProxyCls),t.dragProxy=Neo.create(d)}destroyDragProxy(){let e=this,t=e.dragProxy.id;setTimeout((()=>{Neo.currentWorker.promiseMessage("main",{action:"updateDom",appName:e.appName,deltas:[{action:"removeNode",id:t}]})}),e.moveInMainThread?0:30),e.dragProxy.destroy()}dragEnd(e){let t=this,o=t.owner,r=o.cls;l.Z.remove(r,"neo-is-dragging"),o.cls=r,t.dragProxy&&(t.destroyDragProxy(),t.dragProxy=null),Object.assign(t,{dragElementRect:null,offsetX:0,offsetY:0,scrollContainerId:null}),t.fire("dragEnd",e),t.resetData()}dragMove(e){let t,o=this;!o.moveInMainThread&&o.dragProxy&&(t=o.dragProxy.style,o.moveHorizontal&&(t.left=e.clientX-o.offsetX+"px"),o.moveVertical&&(t.top=e.clientY-o.offsetY+"px"),o.dragProxy.style=t),o.fire("dragMove",e)}dragStart(e){let t,o,r=this,a=r.owner,n=a.cls,i=r.getDragElementRect(e);r.setData(),Neo.main.addon.DragDrop.setConfigs({appName:r.appName,...r.getMainThreadConfigs()}),l.Z.add(n,"neo-is-dragging"),a.cls=n,t=e.clientX-i.left,o=e.clientY-i.top,Object.assign(r,{dragElementRect:i,offsetX:t,offsetY:o}),r.createDragProxy(i),r.fire("dragStart",{clientX:e.clientX,clientY:e.clientY,dragElementRect:i,eventData:e,id:r.id,offsetX:t,offsetY:o})}getDragElementRect(e){let t=this.getDragElementRoot().id;for(let o of e.path)if(o.id===t)return o.rect;for(let o of e.targetPath)if(o.id===t)return o.rect;return null}getDragElementRoot(){return this.dragElement}getMainThreadConfigs(){let e=this;return{alwaysFireDragMove:e.alwaysFireDragMove,bodyCursorStyle:e.bodyCursorStyle,boundaryContainerId:e.boundaryContainerId,dragElementRootId:e.getDragElementRoot().id,dragProxyCls:e.dragProxyCls,dragZoneId:e.id,dropZoneIdentifier:e.dropZoneIdentifier,moveHorizontal:e.moveHorizontal,moveVertical:e.moveVertical,scrollContainerId:e.scrollContainerId,scrollFactorLeft:e.scrollFactorLeft,scrollFactorTop:e.scrollFactorTop}}onDrop(e){this.fire("drop",e)}onDropEnter(e){this.fire("drop:enter",e)}onDropLeave(e){this.fire("drop:leave",e)}resetData(){setTimeout((()=>{this.data=null}),30)}setData(e={}){let t=this;t.data={dragElement:t.getDragElementRoot(),dragZoneId:t.id,...e}}}Neo.applyClassConfig(s)},7894:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});var r=o(2952),a=o(2926);class n extends r.default{static getConfig(){return{className:"Neo.draggable.tab.header.toolbar.SortZone",ntype:"tab-header-toolbar-sortzone",dragProxyConfig:{cls:["neo-tab-header-toolbar","neo-toolbar"]}}}moveTo(e,t){this.owner.up().moveTo(e,t)}onDragEnd(e){super.onDragEnd(e),setTimeout((()=>{let e=this.owner,t=e.cls||[];a.Z.remove(t,"neo-no-animation"),e.cls=t}),300)}onDragStart(e){let t=this.owner,o=t.cls||[];a.Z.add(o,"neo-no-animation"),t.cls=o,super.onDragStart(e)}}Neo.applyClassConfig(n)},2952:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>i});var r=o(3110),a=o(2926),n=o(1939);class l extends r.Z{static getConfig(){return{className:"Neo.draggable.toolbar.DragZone",ntype:"toolbar-dragzone"}}constructor(e){super(e);let t=this,o=t.owner,r=o.domListeners,a={delegate:".neo-draggable",scope:t};r.push({"drag:end":t.onDragEnd,...a},{"drag:move":t.onDragMove,...a},{"drag:start":t.onDragStart,...a}),o.domListeners=r,o.on("insert",t.onItemInsert,t),t.adjustToolbarItemCls(!0)}adjustToolbarItemCls(e){let t=this.owner,o=t.vdom;o.cn.forEach((t=>{t.cls=t.cls||[],a.Z[e?"add":"remove"](t.cls,"neo-draggable")})),t.vdom=o}onDragEnd(e){if(this.owner.draggable){let e=this,t=e.dragProxy,o=t.cls||{},r=e.dragElementRect,n=t.wrapperStyle||{};a.Z.add(o,"neo-animate"),t.cls=o,setTimeout((()=>{n.left=`${r.left}px`,n.top=`${r.top}px`,t.wrapperStyle=n,setTimeout((()=>{e.dragEnd()}),300)}),30)}}onDragStart(e){let t=this;t.owner.draggable&&(t.dragElement=n.Z.findVdomChild(t.owner.vdom,e.path[0].id).vdom,t.dragStart(e))}onItemInsert(e){let t=e.item,o=t.cls||[];a.Z.add(o,"neo-draggable"),t.cls=o}}Neo.applyClassConfig(l);class i extends l{static getConfig(){return{className:"Neo.draggable.toolbar.SortZone",ntype:"toolbar-sortzone",alwaysFireDragMove:!0,currentIndex:-1,indexMap:null,itemRects:null,itemStyles:null,ownerRect:null,ownerStyle:null,reversedLayoutDirection:!1,sortDirection:"horizontal",startIndex:-1}}moveTo(e,t){this.owner.moveTo(e,t)}onDragEnd(e){let t,o=this,r=o.owner,a=o.itemStyles,n=r.style||{};r.sortable&&(n.height=o.ownerStyle.height||null,n.width=o.ownerStyle.width||null,r.style=n,r.items.forEach(((e,r)=>{t=e.style||{},Object.assign(t,{height:a[r].height||null,left:null,position:null,top:null,width:a[r].width||null}),r===o.startIndex&&(t.visibility=null),e.style=t})),o.startIndex!==o.currentIndex&&o.moveTo(o.startIndex,o.currentIndex),Object.assign(o,{currentIndex:-1,indexMap:null,itemRects:null,itemStyles:null,ownerRect:null,startIndex:-1}),o.dragEnd(e))}onDragMove(e){if(this.itemRects){let t,o,r=this,a=.55,n=r.currentIndex,l=r.itemRects,i=l.length-1,s=r.reversedLayoutDirection;"horizontal"===r.sortDirection?(t=e.clientX-r.offsetX-l[n].left,o="width"):(t=e.clientY-r.offsetY-l[n].top,o="height"),n>0&&(!s&&t<0||s&&t>0)?Math.abs(t)>l[n-1][o]*a&&(r.currentIndex--,r.switchItems(n,r.currentIndex)):n<i&&(!s&&t>0||s&&t<0)&&Math.abs(t)>l[n+1][o]*a&&(r.currentIndex++,r.switchItems(n,r.currentIndex))}}onDragStart(e){let t,o,r,a,l=this,i=Neo.getComponent(e.path[0].id),s=l.owner,d=l.itemStyles=[],g=s.layout,c=s.style||{};s.sortable&&(t=s.indexOf(i.id),o={},Object.assign(l,{currentIndex:t,dragElement:n.Z.findVdomChild(s.vdom,i.id).vdom,dragProxyConfig:{...l.dragProxyConfig||{},cls:[...s.cls]},indexMap:o,ownerStyle:{height:c.height,width:c.width},reversedLayoutDirection:"column-reverse"===g.direction||"row-reverse"===g.direction,sortDirection:"layout-vbox"===s.layout.ntype?"vertical":"horizontal",startIndex:t}),l.dragStart(e),s.items.forEach(((e,t)=>{o[t]=t,d.push({height:e.style&&e.style.height,width:e.style&&e.style.width})})),Neo.main.DomAccess.getBoundingClientRect({id:[s.id].concat(s.items.map((e=>e.id)))}).then((e=>{l.ownerRect=e[0],c.height=`${e[0].height}px`,c.width=`${e[0].width}px`,s.style=c,e.shift(),l.itemRects=e,s.items.forEach(((t,o)=>{r=t.style||{},a=e[o],t.style=Object.assign(r,{height:`${a.height}px`,left:`${a.left}px`,position:"absolute",top:`${a.top}px`,width:`${a.width}px`})})),setTimeout((()=>{r=i.style||{},r.visibility="hidden",i.style=r}),30)})))}switchItems(e,t){let o,r=this,a=r.reversedLayoutDirection;(!a&&t<e||a&&e<t)&&(o=e,e=t,t=o);let n=r.itemRects,l=r.indexMap,i=n[e],s=n[t],d={...i},g={...s};"horizontal"===r.sortDirection?(i.width=g.width,s.left=d.left+g.width,s.width=d.width):(i.height=g.height,s.height=d.height,s.top=d.top+g.height),o=l[e],l[e]=l[t],l[t]=o,r.updateItem(e,i),r.updateItem(t,s)}updateItem(e,t){let o=this.owner.items[this.indexMap[e]],r=o.style;r.left=`${t.left}px`,r.top=`${t.top}px`,o.style=r}}Neo.applyClassConfig(i)}}]);