(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[304],{8404:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>t});var n=o(4643);class t extends n.Z{static getConfig(){return{className:"Neo.draggable.DropZone",ntype:"dropzone",owner:null}}constructor(e){super(e);let r=this,o=r.owner,n=o.domListeners;n.push({drop:r.onDrop,scope:r},{"drop:enter":r.onDropEnter,scope:r},{"drop:leave":r.onDropLeave,scope:r}),o.domListeners=n}fireOwnerEvent(e,r){this.owner.fire(e,this.getDragData(r.dragZoneId))}getDragData(e){let r=Neo.get(e);return r?r.data:null}onDrop(e){this.fireOwnerEvent("drop",e)}onDropEnter(e){this.fireOwnerEvent("drop:enter",e)}onDropLeave(e){this.fireOwnerEvent("drop:leave",e)}}Neo.applyClassConfig(t)}}]);