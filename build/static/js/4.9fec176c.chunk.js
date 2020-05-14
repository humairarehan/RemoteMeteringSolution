(this.webpackJsonpremotemeteringssolution=this.webpackJsonpremotemeteringssolution||[]).push([[4],{1447:function(e,a,t){"use strict";t.r(a);var n=t(602),r=t(0),l=t.n(r),s=t(1404),i=t(1444),c=t(1445),o={ERROR_MESSAGE:{}};o.ERROR_MESSAGE.LIST_EMPTY_MESSAGE="Please enter a valid meter serial number.",o.ENDPOINT={},o.ENDPOINT.LIST="/api/list",o.ENDPOINT.METERDETAILS="/api/meterData",o.ENDPOINT.METERSERIALNUMBERS="/api/meterSerialNumbers";var u=o,m=t(613),E=t.n(m),g=t(614),p=t.n(g),b=function(e){var a=e.open,t=e.text,n=e.onWarningClose;return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement("div",{className:E()("alert","alert-warning","ml-3",p.a.warningPosition),role:"alert"},t,l.a.createElement("button",{onClick:n,className:"close ml-2","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))},h=function(e){var a=Object(r.useState)(""),t=Object(n.a)(a,2),o=t[0],m=t[1],E=Object(r.useState)(""),g=Object(n.a)(E,2),p=g[0],h=g[1],f=Object(r.useState)([]),w=Object(n.a)(f,2),d=w[0],O=w[1],S=Object(r.useState)({warningMessageOpen:!1,warningMessageText:""}),T=Object(n.a)(S,2),M=T[0],v=T[1];return Object(r.useEffect)((function(){fetch(u.ENDPOINT.METERSERIALNUMBERS).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){O(e)})).catch((function(e){return v({warningMessageOpen:!0,warningMessageText:"".concat(u.ERROR_MESSAGE.LIST_GET," ").concat(e)})}))}),[]),l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.plotChart(p),h("")},className:"input-group my-3"},l.a.createElement("br",null),l.a.createElement(c.a,{freeSolo:!0,value:o,onChange:function(e,a){m(a)},inputValue:p,onInputChange:function(e,a){h(a)},id:"free-solo-2-demo",disableClearable:!0,options:d.map((function(e){return e})),style:{width:300},renderInput:function(e){return l.a.createElement(i.a,Object.assign({},e,{label:"Search Serial Number",margin:"normal",variant:"outlined",InputProps:Object(s.a)(Object(s.a)({},e.InputProps),{},{type:"search"})}))}}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),l.a.createElement(b,{open:M.warningMessageOpen,text:M.warningMessageText,onWarningClose:function(){v({warningMessageOpen:!1,warningMessageText:""})}}))},f=t(617),w=t.n(f);a.default=function(){var e=Object(r.useState)([]),a=Object(n.a)(e,2),t=a[0],s=a[1],i=Object(r.useState)({warningMessageOpen:!1,warningMessageText:""}),c=Object(n.a)(i,2),o=c[0],m=c[1];return l.a.createElement("main",{id:"mainContent",className:"container"},l.a.createElement("div",{className:"row justify-content-center py-5"},l.a.createElement("h3",null,"Dashboard")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 p-0"},l.a.createElement(h,{plotChart:function(e){e?fetch("".concat(u.ENDPOINT.METERDETAILS,"/").concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){s(""),s(e)})).catch((function(e){return m({warningMessageOpen:!0,warningMessageText:"".concat(u.ERROR_MESSAGE.LIST_ADD," ").concat(e)})})):m({warningMessageOpen:!0,warningMessageText:u.ERROR_MESSAGE.LIST_EMPTY_MESSAGE})}}))),t.serialnumber?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 p-0"},l.a.createElement("label",null,"Meter Serial Number : ",l.a.createElement("b",null," ",t.serialnumber)))):null,t.averageWH?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 p-0"},l.a.createElement("label",null,"The average half hourly WH values is : ",l.a.createElement("b",null,parseFloat(t.averageWH).toFixed(2))))):null,t.averageVARH?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 p-0"},l.a.createElement("label",null,"The average  half hourly VARH values is : ",l.a.createElement("b",null," ",parseFloat(t.averageVARH).toFixed(2))))):null,t.averageVARH?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 p-0"},l.a.createElement("label",null,"The below chart displays the trend of every half hourly values of WH and VARH."))):null,t.xaxis?l.a.createElement(w.a,{data:[{x:t.xaxis,y:t.yaxisWHresult,type:"scatter",width:"auto",name:"WH",marker:{color:"blue"}},{x:t.xaxis,y:t.yaxisVARHresult,type:"scatter",width:"auto",name:"VARH",marker:{color:"red"}}],layout:{margin:{b:150},width:1028,height:400,yaxis:{title:"Unit",tickangle:270,titlefont:{size:18}},xaxis:{title:"Date",titlefont:{size:18}},autosize:!0,title:"Meter Graph with WH and VARH"},config:{responsive:!0,displaylogo:!1}}):null,l.a.createElement(b,{open:o.warningMessageOpen,text:o.warningMessageText,onWarningClose:function(){m({warningMessageOpen:!1,warningMessageText:""})}}))}},614:function(e,a,t){e.exports={warningPosition:"warningmessage_warningPosition__2OitO"}},893:function(e,a){}}]);
//# sourceMappingURL=4.9fec176c.chunk.js.map