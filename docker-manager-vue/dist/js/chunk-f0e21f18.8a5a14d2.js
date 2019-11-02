(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0e21f18","chunk-0f67cf38"],{"0d51":function(t,e,s){},"244e":function(t,e,s){"use strict";var a=s("0d51"),o=s.n(a);o.a},"265a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("el-dialog",{staticClass:"remove-dialog",attrs:{title:"提示",visible:t.removeDialogVisible,width:"25%","show-close":!1},on:{"update:visible":function(e){t.removeDialogVisible=e},close:t.closeRemoveForm}},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("l-icon",{attrs:{name:"info-circle",width:"1.4rem",height:"1.4rem",color:"#FFBE4D"}}),t._v(" 此操作将永久删除该容器，是否继续？")],1),s("div",{staticStyle:{"margin-top":"15px"}},[t._v("同时删除挂载卷  "),s("el-switch",{model:{value:t.removeForm.volume,callback:function(e){t.$set(t.removeForm,"volume",e)},expression:"removeForm.volume"}})],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.removeDialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.removeContainer}},[t._v("确 定")])],1)]),s("div",{staticClass:"select"},[s("div",{staticClass:"select-left"},[s("label",{staticClass:"select-label"},[t._v("服务器")]),s("el-select",{attrs:{filterable:"",placeholder:"请选择服务器"},model:{value:t.host,callback:function(e){t.host=e},expression:"host"}},t._l(t.hostList,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),s("div",[s("i",{staticClass:"el-icon-refresh",on:{click:t.handleRefresh}})])],1),s("div",{staticClass:"select-right"},[s("div",{staticClass:"search"},[s("lin-search",{attrs:{placeholder:"镜像名称或镜像id",searchKeyWord:t.searchWord},on:{query:t.onQueryChange}})],1)])]),s("div",{staticClass:"table"},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.containerList,stripe:""}},[s("el-table-column",{attrs:{type:"expand",fixed:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[s("el-form-item",{attrs:{label:"启动命令"}},[s("span",[t._v(t._s(e.row.cmd))])]),s("el-form-item",{attrs:{label:"网络"}},[s("span",[t._v(t._s(e.row.network))])]),s("el-form-item",{attrs:{label:"重启次数"}},[s("span",[t._v(t._s(e.row.restartCount))])]),s("el-form-item",{attrs:{label:"端口映射"}},[s("span",[t._v(t._s(e.row.ports))])]),s("el-form-item",{attrs:{label:"数据挂载"}},[s("span",[t._v(t._s(e.row.volumes))])])],1)]}}])}),s("el-table-column",{attrs:{fixed:"",prop:"name",label:"容器名称","show-overflow-tooltip":!0,"min-width":"150"}}),s("el-table-column",{attrs:{label:"容器状态","show-overflow-tooltip":!0,width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return["running"===e.row.status?s("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))]):"exited"===e.row.status?s("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.status))]):s("el-tag",{attrs:{type:"warning"}},[t._v(t._s(e.row.status))])]}}])}),s("el-table-column",{attrs:{prop:"id",label:"容器ID",width:"200"}}),s("el-table-column",{attrs:{prop:"image",label:"镜像","show-overflow-tooltip":!0,width:"300"}}),s("el-table-column",{attrs:{label:"创建时间",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[s("i",{staticClass:"el-icon-time"})]),s("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.created))])]}}])}),s("el-table-column",{attrs:{width:"380",align:"center",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-tooltip",{attrs:{effect:"dark",placement:"top-start"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v("docker start")]),s("el-button",{staticStyle:{margin:"auto"},attrs:{disabled:"exited"!==e.row.status,size:"mini",type:"success"},on:{click:function(s){return t.handleStart(e.$index,e.row)}}},[t._v("启动")])],1),s("el-tooltip",{attrs:{effect:"dark",placement:"top-start"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v("docker stop")]),s("el-button",{staticStyle:{margin:"auto"},attrs:{disabled:"running"!==e.row.status,size:"mini",type:"warning"},on:{click:function(s){return t.handleStop(e.$index,e.row)}}},[t._v("停止")])],1),s("el-tooltip",{attrs:{effect:"dark",placement:"top-start"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v("docker rm")]),s("el-button",{staticStyle:{margin:"auto"},attrs:{disabled:"running"===e.row.status,size:"mini",type:"danger"},on:{click:function(s){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])],1),s("el-tooltip",{attrs:{effect:"dark",placement:"top-start"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v("docker logs")]),s("el-button",{staticStyle:{margin:"auto"},attrs:{disabled:"running"!==e.row.status,size:"mini",type:"primary"},on:{click:function(s){return t.handleLogs(e.$index,e.row)}}},[t._v("日志")])],1),s("el-tooltip",{attrs:{effect:"dark",placement:"top-start"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v("docker attach")]),s("el-button",{staticStyle:{margin:"auto"},attrs:{disabled:"running"!==e.row.status,size:"mini",type:"info"},on:{click:function(s){return t.handleShell(e.$index,e.row)}}},[t._v("shell")])],1)]}}])})],1)],1),s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{background:"","hide-on-single-page":!0,layout:"prev, pager, next","current-page":t.page,"page-size":10,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},o=[],i=s("bc3a"),n=s.n(i),r=s("8eab"),l={name:"container",components:{LinSearch:r["default"]},data:function(){return{loading:!1,hostList:[],host:"",containerList:[],page:1,pages:1,total:0,searchWord:"",searchResultData:[],hasLogs:[],removeForm:{container:"",volume:!1},removeDialogVisible:!1}},activated:function(){this.$route.query.id&&(this.searchWord=this.$route.query.id)},mounted:function(){this.$socket.emit("disconnect"),document.body.clientWidth>1200&&document.body.clientWidth<1330&&(this.showTeam=!0),this.getHostList(),this.$route.query.id&&(this.searchWord=this.$route.query.id)},watch:{host:function(){this.page=1,this.total=0,this.pages=1,this.searchWord="",this.getContainerList()}},methods:{handleRefresh:function(){this.page=1,this.total=0,this.pages=1,this.getContainerList()},onQueryChange:function(t){this.searchWord=t.trim(),this.page=1,this.pages=1,this.total=0,this.getContainerList()},getHostList:function(){var t=this;n.a.get("/v1/client/hosts").then(function(e){var s=e.data;t.hostList=s,t.host=t.hostList[0].label}).catch(this.getHostListFail)},getHostListFail:function(t){this.$message.error(t.response.data.msg)},getContainerList:function(){this.loading=!0,n.a.get("/v1/container/list",{params:{host:this.host,page:this.page,search:this.searchWord}}).then(this.getContainerListSucc).catch(this.getHostListFail)},getContainerListSucc:function(t){this.containerList=t.data.data,this.page=t.data.page,this.pages=t.data.pages,this.total=t.data.total,this.loading=!1},handleCurrentChange:function(t){this.page=t,this.getContainerList()},handleStart:function(t,e){var s=this;this.loading=!0,n.a.get("/v1/container/start",{params:{host:this.host,nameOrId:e.id}}).then(function(t){0===t.data.error_code&&(s.$message({type:"success",message:t.data.msg}),s.page=1,s.pages=1,s.total=0,s.getContainerList())}).catch(function(t){s.loading=!1,1023===t.response.data.error_code&&s.$message.error(t.response.data.msg)})},handleStop:function(t,e){var s=this;this.loading=!0,n.a.get("/v1/container/stop",{params:{host:this.host,nameOrId:e.id}}).then(function(t){0===t.data.error_code&&(s.$message({type:"success",message:t.data.msg}),s.page=1,s.pages=1,s.total=0,s.getContainerList())}).catch(function(t){s.loading=!1,1022===t.response.data.error_code&&s.$message.error(t.response.data.msg)})},handleDelete:function(t,e){this.removeDialogVisible=!0,this.removeForm.container=e.id},closeRemoveForm:function(){this.removeForm.container="",this.removeForm.volume=!1},removeContainer:function(){var t=this;this.loading=!0,this.removeDialogVisible=!1,n.a.get("/v1/container/remove",{params:{host:this.host,nameOrId:this.removeForm.container,volume:this.removeForm.volume}}).then(function(e){0===e.data.error_code&&(t.$message({type:"success",message:e.data.msg}),t.page=1,t.pages=1,t.total=0,t.getContainerList())}).catch(function(e){t.loading=!1,1024===e.response.data.error_code&&t.$message.error(e.response.data.msg)})},handleLogs:function(t,e){this.hasLogs.indexOf(this.host+e.id)>-1?this.sockets.subscribe(this.host+e.id,function(t){console.log(t.msg)}):(this.hasLogs.push(this.host+e.id),this.$socket.emit("logs",{host:this.host,id:e.id}),this.sockets.subscribe(this.host+e.id,function(t){console.log(t.msg)}))},handleShell:function(t,e){this.sockets.unsubscribe(this.host+e.id)}}},c=l,d=(s("5049"),s("2877")),h=Object(d["a"])(c,a,o,!1,null,"21906c78",null);e["default"]=h.exports},5049:function(t,e,s){"use strict";var a=s("bc6a"),o=s.n(a);o.a},"8eab":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lin-search"},[s("el-input",{staticClass:"input-with-select",attrs:{size:"medium",placeholder:t.placeholder,clearable:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1)},o=[],i=s("306b"),n={props:{placeholder:{type:String,default:"请输入内容"},searchKeyWord:{type:String,default:""}},watch:{searchKeyWord:function(){this.keyword=this.searchKeyWord}},data:function(){return{keyword:this.searchKeyWord}},created:function(){var t=this;this.$watch("keyword",i["default"].debounce(function(e){t.$emit("query",e)},1e3))},methods:{clear:function(){this.keyword=""}}},r=n,l=(s("244e"),s("2877")),c=Object(l["a"])(r,a,o,!1,null,"7342bd8f",null);e["default"]=c.exports},bc6a:function(t,e,s){}}]);