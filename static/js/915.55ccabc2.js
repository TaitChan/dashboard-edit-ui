(self["webpackChunkdashboard_edit_ui"]=self["webpackChunkdashboard_edit_ui"]||[]).push([[915],{3541:function(t,e,i){"use strict";i.d(e,{Hj:function(){return o},_u:function(){return a},eA:function(){return r},lf:function(){return c}});const r={code:200,msg:"ok",data:[{label:"项目",name:"project",count:2},{label:"其它",name:"other",count:3}]},a={code:200,msg:"ok",data:[{cardId:"project-overview",category:"project",creatorId:"admin",modifierId:"admin",title:"项目概况",description:"项目概况",picUrl:"项目概况",w:25,h:20},{cardId:"code-library-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"代码库概况",description:"代码库概况",picUrl:"代码库概况",w:50,h:12},{cardId:"product-library-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"制品库概况",description:"制品库概况",picUrl:"制品库概况",w:50,h:8},{cardId:"app-library-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"应用库概况",description:"应用库概况",picUrl:"应用库概况",w:21,h:20},{cardId:"follow-project",category:"project",creatorId:"admin",modifierId:"admin",title:"重点关注项目情况",description:"重点关注项目情况",picUrl:"重点项目关注情况",w:100,h:12}]},o={code:200,msg:"ok",data:[{cardId:"project-overview",category:"project",creatorId:"admin",modifierId:"admin",title:"项目概况",description:"项目概况",w:26,h:20,active:!0,x:0,y:0,i:0,moved:!1},{cardId:"code-library-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"代码库概况",description:"代码库概况",w:50,h:12,active:!0,x:27,y:0,i:1,moved:!1},{cardId:"product-library-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"制品库概况",description:"制品库概况",w:50,h:8,active:!0,x:27,y:12,i:2,moved:!1},{cardId:"app-library-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"应用库概况",description:"应用库概况",w:22,h:20,active:!0,x:78,y:0,i:3,moved:!1},{cardId:"follow-project",category:"project",creatorId:"admin",modifierId:"admin",title:"重点关注项目情况",description:"重点关注项目情况",picUrl:"重点项目关注情况",w:100,h:12,active:!0,x:0,y:20,i:4,moved:!1}]},c={code:200,msg:"ok",data:[{cardId:"project-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"项目概况",description:"项目概况",w:26,h:20,active:!0,x:0,y:0,i:0,moved:!1},{cardId:"code-library-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"代码库概况",description:"代码库概况",w:73,h:20,active:!0,x:27,y:0,i:1,moved:!1},{cardId:"product-library-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"制品库概况",description:"制品库概况",w:50,h:9,active:!0,x:0,y:20,i:2,moved:!1},{cardId:"app-library-overview",category:"other",creatorId:"admin",modifierId:"admin",title:"应用库概况",description:"应用库概况",w:47,h:9,active:!0,x:53,y:20,i:3,moved:!1},{cardId:"follow-project",category:"other",creatorId:"admin",modifierId:"admin",title:"重点关注项目情况",description:"重点关注项目情况",picUrl:"重点项目关注情况",w:100,h:12,active:!0,x:0,y:29,i:4,moved:!1}]}},5353:function(t,e,i){"use strict";i.d(e,{O:function(){return o},m:function(){return a}});var r=i(3541);function a(){return JSON.parse(JSON.stringify(r._u))}function o(){return JSON.parse(JSON.stringify(r.eA))}},7915:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return w}});var r=i(6252),a=i(3577);const o=t=>((0,r.dD)("data-v-1ae13fc3"),t=t(),(0,r.Cn)(),t),c={class:"flex flex-column height-100-percent"},d=o((()=>(0,r._)("div",{class:"font-size-20px font-weight mb-12px"},"指标库",-1))),n={class:"flex-1 overflow-scroll"},s={class:"grid grid-gap-10px grid-template-columns-250px"},l={style:{"min-height":"150px",height:"150px",background:"#f1f2f6"}},p={class:"font-size-16px font-weight pl-20px"},m={style:{"max-width":"300px"}};function u(t,e,o,u,f,g){const v=(0,r.up)("el-tag"),h=(0,r.up)("el-tab-pane"),w=(0,r.up)("el-tabs"),y=(0,r.up)("el-image"),I=(0,r.up)("svg-icon"),b=(0,r.up)("el-tooltip");return(0,r.wg)(),(0,r.iD)("div",c,[d,(0,r.Wm)(w,{modelValue:g.activeTab,"onUpdate:modelValue":e[0]||(e[0]=t=>g.activeTab=t)},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(f.tabList,(t=>((0,r.wg)(),(0,r.j4)(h,{key:t.name,label:t.label,name:t.name},{label:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t.label)+" ",1),(0,r.Wm)(v,{effect:"light",round:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t.count),1)])),_:2},1024)])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"]),(0,r._)("div",n,[(0,r._)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(g.filterTargetList,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"target-card",key:t.cardId},[(0,r._)("div",l,[(0,r.Wm)(y,{src:i(1650)("./"+t.picUrl+".png")},null,8,["src"])]),(0,r._)("div",p,[(0,r.Uk)((0,a.zw)(t.title)+" ",1),(0,r.Wm)(b,{placement:"top"},{content:(0,r.w5)((()=>[(0,r._)("div",m,(0,a.zw)(t.description),1)])),default:(0,r.w5)((()=>[(0,r.Wm)(I,{"icon-class":"question",class:"color-info"})])),_:2},1024)])])))),128))])])])}var f=i(5353),g={name:"TargetMng",components:{},data(){return{targetList:[],tabList:[]}},computed:{activeTab:{get(){return this.$route.query.activeTab||"all"},set(t){this.$router.replace({path:this.$route.path,query:{...this.$route.query,activeTab:t}})}},filterTargetList(){return"all"===this.activeTab?this.targetList:this.targetList.filter((t=>t.category===this.activeTab))}},created(){this.getTabList(),this.getTargetList()},methods:{async getTabList(){const{data:t}=await(0,f.O)();this.tabList=t},async getTargetList(){const{data:t}=await(0,f.m)();this.targetList=t,this.tabList.unshift({label:"全部指标卡",name:"all",count:t.length})}}},v=i(3744);const h=(0,v.Z)(g,[["render",u],["__scopeId","data-v-1ae13fc3"]]);var w=h},1650:function(t,e,i){var r={"./代码库概况.png":3282,"./制品库概况.png":809,"./应用库概况.png":3932,"./重点项目关注情况.png":7650,"./项目概况.png":204};function a(t){var e=o(t);return i(e)}function o(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=1650},3282:function(t,e,i){"use strict";t.exports=i.p+"static/img/代码库概况.2c0cb85b.png"},809:function(t,e,i){"use strict";t.exports=i.p+"static/img/制品库概况.ac09333e.png"},3932:function(t,e,i){"use strict";t.exports=i.p+"static/img/应用库概况.31ccdb20.png"},7650:function(t,e,i){"use strict";t.exports=i.p+"static/img/重点项目关注情况.cf5747f8.png"},204:function(t,e,i){"use strict";t.exports=i.p+"static/img/项目概况.3beff453.png"}}]);