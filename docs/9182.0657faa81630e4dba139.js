(self.webpackChunkmall_admin=self.webpackChunkmall_admin||[]).push([[9182],{26271:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"profile",theme:"outlined"},l=r(30076);(r=function(e,t){return n.createElement(l.Z,Object.assign({},e,{ref:t,icon:a}))}).displayName="ProfileOutlined";var o=n.forwardRef(r)},76570:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},l=r(30076);(r=function(e,t){return n.createElement(l.Z,Object.assign({},e,{ref:t,icon:a}))}).displayName="SearchOutlined";var o=n.forwardRef(r)},19650:function(e,t,r){"use strict";r.d(t,{u:function(){return d},Z:function(){return p}}),t=r(67154);var n=r.n(t),a=(t=r(59713),r.n(t)),l=(t=r(63038),r.n(t)),o=r(67294),i=(t=r(94184),r.n(t)),s=r(50344),c=r(65632);function u(e){var t=e.className,r=e.direction,l=e.index,i=e.marginDirection,s=e.children,c=e.split,u=e.wrap,m=(f=o.useContext(d)).horizontalSize,p=f.verticalSize,f=(e=f.latestIndex,{});return"vertical"===r?l<e&&(f={marginBottom:m/(c?2:1)}):f=n()(n()({},l<e&&a()({},i,m/(c?2:1))),u&&{paddingBottom:p}),null==s?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:f},s),l<e&&c&&o.createElement("span",{className:"".concat(t,"-split"),style:f},c))}var d=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),m={small:8,middle:16,large:24},p=function(e){var t=(y=o.useContext(c.E_)).getPrefixCls,r=y.space,p=y.direction,f=void 0===(E=e.size)?(null==r?void 0:r.size)||"small":E,v=e.align,j=e.className,h=e.children,g=void 0===(O=e.direction)?"horizontal":O,y=e.prefixCls,b=e.split,S=(r=e.style,void 0!==(E=e.wrap)&&E),O=function(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r}(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),E=o.useMemo((function(){return(Array.isArray(f)?f:[f,f]).map((function(e){return"string"==typeof(e=e)?m[e]:e||0}))}),[f]);if(E=(e=l()(E,2))[0],e=e[1],0===(h=(0,s.Z)(h,{keepEmpty:!0})).length)return null;v=void 0===v&&"horizontal"===g?"center":v,t=t("space",y),j=i()(t,"".concat(t,"-").concat(g),(y={},a()(y,"".concat(t,"-rtl"),"rtl"===p),a()(y,"".concat(t,"-align-").concat(v),v),y),j);var w="".concat(t,"-item"),z="rtl"===p?"marginLeft":"marginRight",Z=0;return h=h.map((function(e,t){return null!=e&&(Z=t),o.createElement(u,{className:w,key:"".concat(w,"-").concat(t),direction:g,index:t,marginDirection:z,split:b,wrap:S},e)})),o.createElement("div",n()({className:j,style:n()(n()({},S&&{flexWrap:"wrap",marginBottom:-e}),r)},O),o.createElement(d.Provider,{value:{horizontalSize:E,verticalSize:e,latestIndex:Z}},h))}},34519:function(e,t,r){"use strict";r.d(t,{R:function(){return a}});var n=r(16911);e=r.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a={fetchList:l,closeOrder:o,deleteOrder:i,deliveryOrder:s,getOrderDetail:c,updateReceiverInfo:u,updateMoneyInfo:d,updateOrderNote:m};function l(e){return(0,n.Z)({url:"/order/list",method:"get",params:e})}function o(e){return(0,n.Z)({url:"/order/update/close",method:"post",params:e})}function i(e){return(0,n.Z)({url:"/order/delete",method:"post",params:e})}function s(e){return(0,n.Z)({url:"/order/update/delivery",method:"post",data:e})}function c(e){return(0,n.Z)({url:"/order/"+e,method:"get"})}function u(e){return(0,n.Z)({url:"/order/update/receiverInfo",method:"post",data:e})}function d(e){return(0,n.Z)({url:"/order/update/moneyInfo",method:"post",data:e})}function m(e){return(0,n.Z)({url:"/order/update/note",method:"post",params:e})}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(a,"orderServices","c:\\Project\\mall-admin\\src\\services\\order.js"),r.register(l,"fetchList","c:\\Project\\mall-admin\\src\\services\\order.js"),r.register(o,"closeOrder","c:\\Project\\mall-admin\\src\\services\\order.js"),r.register(i,"deleteOrder","c:\\Project\\mall-admin\\src\\services\\order.js"),r.register(s,"deliveryOrder","c:\\Project\\mall-admin\\src\\services\\order.js"),r.register(c,"getOrderDetail","c:\\Project\\mall-admin\\src\\services\\order.js"),r.register(u,"updateReceiverInfo","c:\\Project\\mall-admin\\src\\services\\order.js"),r.register(d,"updateMoneyInfo","c:\\Project\\mall-admin\\src\\services\\order.js"),r.register(m,"updateOrderNote","c:\\Project\\mall-admin\\src\\services\\order.js")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)},21671:function(e,t,r){"use strict";function n(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var r,n,l={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(r in l)new RegExp("(".concat(r,")")).test(t)&&(n=l[r]+"",t=t.replace(RegExp.$1,1===RegExp.$1.length?n:a(n)));return t}function a(e){return("00"+e).substr(e.length)}function l(e,t){t=t||"-";var r=e.split(t);return e=parseInt(r[0]),t=0==r[1].indexOf("0")?parseInt(r[1].substring(1)):parseInt(r[1]),r=parseInt(r[2]),new Date(e,t-1,r)}r.d(t,{p:function(){return n},v:function(){return l}}),e=r.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(n,"formatDate","c:\\Project\\mall-admin\\src\\utils\\date.js"),r.register(a,"padLeftZero","c:\\Project\\mall-admin\\src\\utils\\date.js"),r.register(l,"str2Date","c:\\Project\\mall-admin\\src\\utils\\date.js")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)},49210:function(e,t,r){"use strict";var n=r(97880),a=r(83663),l=r(67294);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){var t=e.value,r=e.onChange,i=o((0,l.useState)([{name:"Order submited, waiting to be paid",time:"2020-10-01 12:00:00 "},{name:"Order paid",time:"2020-10-05 12:00:00 "},{name:"Shipper created a label, UPS has not received the package yet.",time:"2020-10-06 12:00:00 "},{name:"Arrived at Facility at New York",time:"2020-10-07 12:00:00 "},{name:"Destination Scan ",time:"2020-10-08 12:00:00 "},{name:"Package transferred to post office ",time:"2020-10-09 12:00:00 "},{name:"Package delivered by local post office",time:"2020-10-09 12:00:00 "}]),2);return e=i[0],i[1],l.createElement(a.default,{title:"Order Tracking",width:"600px",visible:t,onCancel:function(){return r(!1)},okButtonProps:{style:{display:"none"}}},l.createElement(n.Z,{direction:"vertical",current:6,status:"finish"},e.map((function(e){return l.createElement(n.Z.Step,{key:e.name,description:e.time,title:e.name})}))))}e=r.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(s,"useState{[logisticsList, setLogisticsList](defaultLogisticsList)}"),r=s,t.Z=r,(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(t.register(s,"LogisticsDialog","c:\\Project\\mall-admin\\src\\views\\oms\\order\\components\\logisticsDialog.js"),t.register(r,"default","c:\\Project\\mall-admin\\src\\views\\oms\\order\\components\\logisticsDialog.js")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)},18009:function(e,t,r){"use strict";r.r(t);var n=r(8834),a=r(48086),l=r(39144),o=r(71577),i=r(35845),s=r(14617),c=r(78334),u=r(36929),d=r(19650),m=r(67294),p=r(76570),f=r(26271),v=r(94217),j=r(21671),h=r(34519),g=r(29041),y=r(83663),b=r(14104),S=r(49210),O=r(30381),E=r.n(O),w=r(28368);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)),n}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e=r.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};var x=n.Z.Option;function N(){function e(e,t){t||(e=(t=e.target).value,t=t.name),O(C(C({},r),{},k({},t,e)))}(0,m.useEffect)((function(){K()}),[]);var t={pageNum:1,pageSize:10,orderSn:null,receiverKeyword:null,status:null,orderType:null,sourceType:null,createTime:null},r=(F=P((0,m.useState)(t),2))[0],O=F[1],Z=($=P((0,m.useState)(!1),2))[0],L=$[1],N=(V=P((0,m.useState)(null),2))[0],H=V[1],T=(Y=P((0,m.useState)(null),2))[0],D=Y[1],I=(_=P((0,m.useState)(null),2))[0],G=_[1],M=(J=P((0,m.useState)([]),2))[0],A=J[1],R=(F=P((0,m.useState)({dialogVisible:!1,content:null,orderIds:[]}),2))[0],U=F[1],V=($=P((0,m.useState)([{label:"Unpaid",value:0},{label:"Unshipped",value:1},{label:"Shipped",value:2},{label:"Done",value:3},{label:"Closed",value:4}]),2))[0],_=($[1],Y=P((0,m.useState)([{label:"Normal",value:0},{label:"Flash",value:1}]),2))[0],F=(Y[1],J=P((0,m.useState)([{label:"PC",value:0},{label:"APP",value:1}]),2))[0],Y=(J[1],$=P((0,m.useState)([{label:"MultiShip",value:1},{label:"Close",value:2},{label:"Delete",value:3}]),2))[0],$=($[1],J=P((0,m.useState)(!1),2))[0],B=J[1],K=function(){L(!0),h.R.fetchList(r).then((function(e){L(!1),H(e.data.list),D(e.data.total)}))},Q=function(e){(0,w.default)({title:"Are you sure to delete?",okText:"Yes",okType:"primary",onOk:function(){var t=new URLSearchParams;t.append("ids",e),h.R.deleteOrder(t).then((function(e){a.ZP.success("Delete Success!",5),K()}))},onCancel:function(){}})},q=function(e){var t=e.receiverDetailAddress+", "+e.receiverCity+", "+e.receiverState;return{orderId:e.id,orderSn:e.orderSn,receiverName:e.receiverName,receiverPhone:e.receiverPhone,receiverZipCode:e.receiverZipCode,address:t,deliveryCompany:null,deliverySn:null}},J={pagination:{position:"bottomRight",pageSize:r.pageSize,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:[5,10,15],total:T,current:r.pageNum,onShowSizeChange:function(e,t){return n=t,(t=r).pageNum=1,t.pageSize=n,O(t),void K();var n},onChange:function(e){return t=e,(e=r).pageNum=t,O(e),void K();var t}},bordered:!0,size:"default"};return T={onChange:function(e,t){A(t)}},m.createElement("div",{className:"app-container"},m.createElement(l.Z,{className:"filter-container"},m.createElement("div",null,m.createElement(p.Z,null),m.createElement("span",null,"Filter Search"),m.createElement(o.Z,{style:{float:"right"},type:"primary",onClick:function(){O(C(C({},r),{},{pageNum:1})),K()},size:"small"},"Search"),m.createElement(o.Z,{style:{float:"right",marginRight:"15px"},onClick:function(){O(t)},size:"small"},"Reset")),m.createElement("div",{style:{marginTop:"5px"}},m.createElement(i.Z,{layout:"inline",size:"small",labelCol:{span:10}},m.createElement(i.Z.Item,{style:{marginTop:"10px"},label:"Search: "},m.createElement(s.Z,{value:r.orderSn,name:"orderSn",onChange:e,className:"Order_input-width",placeholder:"Order Sn"})),m.createElement(i.Z.Item,{style:{marginTop:"10px"},label:"Receiver: "},m.createElement(s.Z,{value:r.receiverKeyword,name:"receiverKeyword",onChange:e,className:"Order_input-width",placeholder:"Receiver Name/Phone"})),m.createElement(i.Z.Item,{style:{marginTop:"10px"},label:"ApplyDate: "},m.createElement(c.Z,{className:"Order_input-width",value:r.createTime?E()(r.createTime):null,format:"YYYY-MM-DD",placeholder:"Please select a date",name:"createTime",onChange:function(e,t){O(C(C({},r),{},{createTime:t}))}})),m.createElement(i.Z.Item,{style:{marginTop:"10px"},label:"Status: "},m.createElement(n.Z,{className:"Order_input-width",value:r.status,onChange:function(t){return e(t,"status")},placeholder:"All",allowClear:!0,name:"status"},V.map((function(e){return m.createElement(x,{key:e.value,value:e.value},e.label)})))),m.createElement(i.Z.Item,{style:{marginTop:"10px"},label:"Type: "},m.createElement(n.Z,{className:"Order_input-width",value:r.orderType,onChange:function(t){return e(t,"orderType")},placeholder:"All",allowClear:!0,name:"orderType"},_.map((function(e){return m.createElement(x,{key:e.value,value:e.value},e.label)})))),m.createElement(i.Z.Item,{style:{marginTop:"10px"},label:"Source: "},m.createElement(n.Z,{className:"Order_input-width",value:r.sourceType,onChange:function(t){return e(t,"sourceType")},placeholder:"All",allowClear:!0,name:"sourceType"},F.map((function(e){return m.createElement(x,{key:e.value,value:e.value},e.label)}))))))),m.createElement(l.Z,{className:"operate-container"},m.createElement(f.Z,null),m.createElement("span",null,"Data List")),m.createElement("div",{className:"table-container"},m.createElement(u.Z,z({rowKey:"id",rowSelection:C({},T)},J,{dataSource:N,style:{width:"100%"},loading:Z}),m.createElement(v.Z,{width:"80px",align:"center",title:"Id",render:function(e,t){return m.createElement("div",null,t.id)}}),m.createElement(v.Z,{width:"180px",align:"center",title:"Sn",render:function(e,t){return m.createElement("div",null,t.orderSn)}}),m.createElement(v.Z,{width:"180px",align:"center",title:"ApplyDate",render:function(e,t){return m.createElement("div",null,function(e){return e=new Date(e),(0,j.p)(e,"yyyy-MM-dd hh:mm:ss")}(t.createTime))}}),m.createElement(v.Z,{align:"center",title:"Username",render:function(e,t){return m.createElement("div",null,t.memberUsername)}}),m.createElement(v.Z,{width:"120px",align:"center",title:"Amount",render:function(e,t){return m.createElement("div",null,"$",t.totalAmount)}}),m.createElement(v.Z,{width:"120px",align:"center",title:"Payment",render:function(e,t){return m.createElement("div",null,1===(t=t.payType)?"Card":2===t?"Paypal":"Unpaid")}}),m.createElement(v.Z,{width:"120px",align:"center",title:"Source",render:function(e,t){return m.createElement("div",null,1===t.sourceType?"APP":"PC")}}),m.createElement(v.Z,{width:"120px",align:"center",title:"Status",render:function(e,t){return m.createElement("div",null,1===(t=t.status)?"Unshipped":2===t?"Shipped":3===t?"Done":4===t?"Closed":5===t?"Invalid":"Unpaid")}}),m.createElement(v.Z,{width:"200px",align:"center",title:"Operation",render:function(e,t){return m.createElement(d.Z,null,m.createElement(o.Z,{size:"small",onClick:function(){return e=t,void g.history.push("/oms/orderDetail",{id:e.id});var e}},"Detail"),0===t.status&&m.createElement(o.Z,{size:"small",onClick:function(){return e=t,void U(C(C({},R),{},{dialogVisible:!0,orderIds:[e.id]}));var e}},"Close"),1===t.status&&m.createElement(o.Z,{size:"small",onClick:function(){return function(e){e=q(e),g.history.push("/oms/deliverOrderList",{list:[e]})}(t)}},"Delivery"),(2===t.status||3===t.status)&&m.createElement(o.Z,{size:"small",onClick:function(){B(!0)}},"Track"),4===t.status&&m.createElement(o.Z,{size:"small",danger:!0,onClick:function(){return(e=[]).push(t.id),void Q(e);var e}},"Delete"))}}))),m.createElement("div",{className:"batch-operate-container"},m.createElement(n.Z,{size:"small",value:I,placeholder:"Multiple",onChange:function(e){return G(e)}},Y.map((function(e){return m.createElement(x,{key:e.value,value:e.value},e.label)}))),m.createElement(o.Z,{style:{marginLeft:"20px"},className:"search-button",onClick:function(){if(null==M||M.length<1)a.ZP.warning("Please select the operation",5);else if(1===I){for(var e=[],t=0;t<M.length;t++)1===M[t].status&&e.push(q(M[t]));0!==e.length?g.history.push("/oms/deliverOrderList",{list:e}):a.ZP.warning("No orders are available to ship",5)}else if(2===I){var r=R;r.orderIds=[];for(var n=0;n<M.length;n++)r.orderIds.push(M[n].id);r.dialogVisible=!0,U(r)}else if(3===I){for(var l=[],o=0;o<M.length;o++)l.push(M[o].id);Q(l)}},type:"primary",size:"small"},"Confirm")),m.createElement(y.default,{title:"Close Order",visible:R.dialogVisible,width:"30%",onOk:function(){var e;null!=R.content&&""!==R.content?((e=new URLSearchParams).append("ids",R.orderIds),e.append("note",R.content),h.R.closeOrder(e).then((function(e){U(C(C({},R),{},{orderIds:[],dialogVisible:!1})),K(),a.ZP.success("Modify Success",5)}))):a.ZP.warning("Note cannot be empty",5)},onCancel:function(){return U(C(C({},R),{},{dialogVisible:!1}))}},m.createElement("span",{style:{verticalAlign:"top"}},"Operation Note: "),m.createElement(b.Z,{style:{width:"80%"},rows:5,placeholder:"Please enter content",value:R.content,name:"content",onChange:function(e){return U(C(C({},R),{},{content:e.target.value}))}})),m.createElement(S.Z,{onChange:B,value:$}))}r(N,"useEffect{}\nuseState{[listQuery, setListQuery](defaultListQuery)}\nuseState{[listLoading, setListLoading](false)}\nuseState{[list, setList](null)}\nuseState{[total, setTotal](null)}\nuseState{[operateType, setOperateType](null)}\nuseState{[multipleSelection, setMultipleSelection]([])}\nuseState{[closeOrder, setCloseOrder]({\r\n        dialogVisible:false,\r\n        content:null,\r\n        orderIds:[]\r\n    })}\nuseState{[statusOptions, setStatusOptions]([\r\n        {\r\n            label: 'Unpaid',\r\n            value: 0\r\n        },\r\n        {\r\n            label: 'Unshipped',\r\n            value: 1\r\n        },\r\n        {\r\n            label: 'Shipped',\r\n            value: 2\r\n        },\r\n        {\r\n            label: 'Done',\r\n            value: 3\r\n        },\r\n        {\r\n            label: 'Closed',\r\n            value: 4\r\n        }\r\n    ])}\nuseState{[orderTypeOptions, setOrderTypeOptions]([\r\n        {\r\n            label: 'Normal',\r\n            value: 0\r\n        },\r\n        {\r\n            label: 'Flash',\r\n            value: 1\r\n        }\r\n    ])}\nuseState{[sourceTypeOptions, setSourceTypeOptions]([\r\n        {\r\n            label: 'PC',\r\n            value: 0\r\n        },\r\n        {\r\n            label: 'APP',\r\n            value: 1\r\n        }\r\n    ])}\nuseState{[operateOptions, setOperateOptions]([\r\n        {\r\n            label: 'MultiShip',\r\n            value: 1\r\n        },\r\n        {\r\n            label: 'Close',\r\n            value: 2\r\n        },\r\n        {\r\n            label: 'Delete',\r\n            value: 3\r\n        }\r\n    ])}\nuseState{[logisticsDialogVisible, setLogisticsDialogVisible](false)}"),r=N,t.default=r,(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(t.register(x,"Option","c:\\Project\\mall-admin\\src\\views\\oms\\order\\index.js"),t.register(N,"Order","c:\\Project\\mall-admin\\src\\views\\oms\\order\\index.js"),t.register(r,"default","c:\\Project\\mall-admin\\src\\views\\oms\\order\\index.js")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)},46700:function(e,t,r){var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":82705,"./ar-sa.js":82705,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":51894,"./en-au.js":51894,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":8227,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":8227,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){return e=l(e),r(e)}function l(e){if(r.o(n,e))return n[e];throw(e=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",e}a.keys=function(){return Object.keys(n)},a.resolve=l,(e.exports=a).id=46700}}]);