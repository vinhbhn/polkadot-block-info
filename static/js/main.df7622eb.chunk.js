(this["webpackJsonpsubstrate-front-end-template"]=this["webpackJsonpsubstrate-front-end-template"]||[]).push([[0],{557:function(e){e.exports=JSON.parse('{"APP_NAME":"substrate-front-end-tutorial","DEVELOPMENT_KEYRING":true,"RPC":{}}')},604:function(e){e.exports=JSON.parse('{"PROVIDER_SOCKET":"wss://kusama-rpc.polkadot.io"}')},605:function(e){e.exports=JSON.parse('{"Address":"MultiAddress","LookupSource":"MultiAddress"}')},610:function(e,t){},630:function(e,t){},648:function(e,t){},651:function(e,t){},653:function(e,t){},663:function(e,t){},665:function(e,t){},695:function(e,t){},697:function(e,t){},704:function(e,t){},705:function(e,t){},794:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(173),s=n.n(a),i=n(2),o=n(863),u=n(852),l=n(864),j=n(859),d=n(853),O=n(851),b=(n(594),n(15)),h=n.n(b),p=n(29),f=n(36),x=n(428),E=n(556),v=n.n(E),C=n(448),S=n(280),R=n(394),y=n.n(R),m=n(557),g=n(604),N=n(605),k=["REACT_APP_PROVIDER_SOCKET","REACT_APP_DEVELOPMENT_KEYRING"].reduce((function(e,t){return void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/frontend-polkadot-hackathon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})[t]&&(e[t.slice(10)]=Object({NODE_ENV:"production",PUBLIC_URL:"/frontend-polkadot-hackathon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})[t]),e}),{}),w=Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({},m),g),k),{},{types:N}),_=n(16),T=v.a.parse(window.location.search).rpc||w.PROVIDER_SOCKET;console.log("Connected socket: ".concat(T));var A={socket:T,jsonrpc:Object(f.a)(Object(f.a)({},x.default),w.RPC),types:w.types,keyring:null,keyringState:null,api:null,apiError:null,apiState:null},P=function(e,t){switch(t.type){case"CONNECT_INIT":return Object(f.a)(Object(f.a)({},e),{},{apiState:"CONNECT_INIT"});case"CONNECT":return Object(f.a)(Object(f.a)({},e),{},{api:t.payload,apiState:"CONNECTING"});case"CONNECT_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{apiState:"READY"});case"CONNECT_ERROR":return Object(f.a)(Object(f.a)({},e),{},{apiState:"ERROR",apiError:t.payload});case"LOAD_KEYRING":return Object(f.a)(Object(f.a)({},e),{},{keyringState:"LOADING"});case"SET_KEYRING":return Object(f.a)(Object(f.a)({},e),{},{keyring:t.payload,keyringState:"READY"});case"KEYRING_ERROR":return Object(f.a)(Object(f.a)({},e),{},{keyring:null,keyringState:"ERROR"});default:throw new Error("Unknown type: ".concat(t.type))}},I=!1,D=c.a.createContext(),K=function(e){var t=Object(f.a)({},A);["socket","types"].forEach((function(n){t[n]="undefined"===typeof e[n]?t[n]:e[n]}));var n=Object(r.useReducer)(P,t),c=Object(i.a)(n,2),a=c[0],s=c[1];return function(e,t){var n=e.apiState,r=e.socket,c=e.jsonrpc,a=e.types;if(!n){t({type:"CONNECT_INIT"});var s=new C.WsProvider(r),i=new C.ApiPromise({provider:s,types:a,rpc:c});i.on("connected",(function(){t({type:"CONNECT",payload:i}),i.isReady.then((function(e){return t({type:"CONNECT_SUCCESS"})}))})),i.on("ready",(function(){return t({type:"CONNECT_SUCCESS"})})),i.on("error",(function(e){return t({type:"CONNECT_ERROR",payload:e})}))}}(a,s),function(e,t){var n=function(){var e=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOAD_KEYRING"}),e.prev=1,e.next=4,Object(S.web3Enable)(w.APP_NAME);case 4:return e.next=6,Object(S.web3Accounts)();case 6:n=(n=e.sent).map((function(e){var t=e.address,n=e.meta;return{address:t,meta:Object(f.a)(Object(f.a)({},n),{},{name:"".concat(n.name," (").concat(n.source,")")})}})),y.a.loadAll({isDevelopment:w.DEVELOPMENT_KEYRING},n),t({type:"SET_KEYRING",payload:y.a}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),t({type:"KEYRING_ERROR"});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();if(!e.keyringState){if(I)return t({type:"SET_KEYRING",payload:y.a});I=!0,n()}}(a,s),Object(_.jsx)(D.Provider,{value:a,children:e.children})},Y=function(){return Object(f.a)({},Object(r.useContext)(D))},M=(n(21),n(860));function H(e){var t=Y(),r=t.api,c=t.apiState,a=t.keyring,s=t.keyringState;return"READY"===c&&(window.api=r),"READY"===s&&(window.keyring=a),window.util=n(0),window.utilCrypto=n(20),null}var G=n(575),L=n(855),B=n(576),z=n(854),V=n(385),U=n(254);function F(e){var t=Y().keyring,n=e.setAccountAddress,c=Object(r.useState)(""),a=Object(i.a)(c,2),s=a[0],o=a[1],u=t.getPairs().map((function(e){return{key:e.address,value:e.address,text:e.meta.name.toUpperCase(),icon:"user"}})),l=u.length>0?u[0].value:"";Object(r.useEffect)((function(){n(l),o(l)}),[n,l]);return Object(_.jsx)(L.a,{attached:"top",tabular:!0,style:{backgroundColor:"#fff",borderColor:"#fff",paddingTop:"1em",paddingBottom:"1em"},children:Object(_.jsxs)(O.a,{children:[Object(_.jsx)(L.a.Menu,{children:Object(_.jsx)(B.a,{src:"".concat("/frontend-polkadot-hackathon","/assets/substrate-logo.png"),size:"mini"})}),Object(_.jsxs)(L.a.Menu,{position:"right",style:{alignItems:"center"},children:[s?null:Object(_.jsxs)("span",{children:["Add your account with the"," ",Object(_.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/polkadot-js/extension",children:"Polkadot JS Extension"})]}),Object(_.jsx)(G.CopyToClipboard,{text:s,children:Object(_.jsx)(M.a,{basic:!0,circular:!0,size:"large",icon:"user",color:s?"green":"red"})}),Object(_.jsx)(z.a,{search:!0,selection:!0,clearable:!0,placeholder:"Select an account",options:u,onChange:function(e,t){var r;r=t.value,n(r),o(r)},value:s}),Object(_.jsx)(J,{accountSelected:s})]})]})})}function J(e){var t=e.accountSelected,n=Y().api,c=Object(r.useState)(0),a=Object(i.a)(c,2),s=a[0],o=a[1];return Object(r.useEffect)((function(){var e;return t&&n.query.system.account(t,(function(e){o(e.data.free.toHuman())})).then((function(t){e=t})).catch(console.error),function(){return e&&e()}}),[n,t]),t?Object(_.jsxs)(V.a,{pointing:"left",children:[Object(_.jsx)(U.a,{name:"money",color:"green"}),s]}):null}function W(e){var t=Y(),n=t.api;return t.keyring.getPairs&&n.query?Object(_.jsx)(F,Object(f.a)({},e)):null}var q=n(858),Q=n(862);function X(e){var t=Y().api,n=e.finalized,c=Object(r.useState)(0),a=Object(i.a)(c,2),s=a[0],o=a[1],u=Object(r.useState)(0),j=Object(i.a)(u,2),d=j[0],O=j[1],b=n?t.derive.chain.bestNumberFinalized:t.derive.chain.bestNumber;Object(r.useEffect)((function(){var e=null;return b((function(e){o(e.toNumber()),O(0)})).then((function(t){e=t})).catch(console.error),function(){return e&&e()}}),[b]);var h=function(){O((function(e){return e+1}))};return Object(r.useEffect)((function(){var e=setInterval(h,1e3);return function(){return clearInterval(e)}}),[]),Object(_.jsx)(l.a.Column,{children:Object(_.jsxs)(q.a,{children:[Object(_.jsx)(q.a.Content,{textAlign:"center",children:Object(_.jsx)(Q.a,{label:(n?"Finalized":"Current")+" Block",value:s})}),Object(_.jsxs)(q.a.Content,{extra:!0,children:[Object(_.jsx)(U.a,{name:"time"})," ",d]})]})})}function Z(e){var t=Y().api;return t.derive&&t.derive.chain&&t.derive.chain.bestNumber&&t.derive.chain.bestNumberFinalized?Object(_.jsx)(X,Object(f.a)({},e)):null}var $=n(856);function ee(e){var t=Y().api,n=Object(r.useState)({data:null,version:null}),c=Object(i.a)(n,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.rpc.state.getMetadata();case 3:n=e.sent,s({data:n,version:n.version}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.state]),Object(_.jsx)(l.a.Column,{children:Object(_.jsxs)(q.a,{children:[Object(_.jsxs)(q.a.Content,{children:[Object(_.jsx)(q.a.Header,{children:"Metadata"}),Object(_.jsx)(q.a.Meta,{children:Object(_.jsxs)("span",{children:["v",a.version]})})]}),Object(_.jsx)(q.a.Content,{extra:!0,children:Object(_.jsxs)($.a,{trigger:Object(_.jsx)(M.a,{children:"Show Metadata"}),children:[Object(_.jsx)($.a.Header,{children:"Runtime Metadata"}),Object(_.jsx)($.a.Content,{scrolling:!0,children:Object(_.jsx)($.a.Description,{children:Object(_.jsx)("pre",{children:Object(_.jsx)("code",{children:JSON.stringify(a.data,null,2)})})})})]})})]})})}function te(e){var t=Y().api;return t.rpc&&t.rpc.state&&t.rpc.state.getMetadata?Object(_.jsx)(ee,Object(f.a)({},e)):null}function ne(e){var t=Y().api,n=Object(r.useState)({}),c=Object(i.a)(n,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var n,r,c,a,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([t.rpc.system.chain(),t.rpc.system.name(),t.rpc.system.version()]);case 3:n=e.sent,r=Object(i.a)(n,3),c=r[0],a=r[1],o=r[2],s({chain:c,nodeName:a,nodeVersion:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.system]),Object(_.jsx)(l.a.Column,{children:Object(_.jsxs)(q.a,{children:[Object(_.jsxs)(q.a.Content,{children:[Object(_.jsx)(q.a.Header,{children:a.nodeName}),Object(_.jsx)(q.a.Meta,{children:Object(_.jsx)("span",{children:a.chain})}),Object(_.jsxs)(q.a.Description,{children:["Built using the"," ",Object(_.jsx)("a",{href:"https://github.com/substrate-developer-hub/substrate-front-end-template",children:"Substrate Front End Template"})]})]}),Object(_.jsxs)(q.a.Content,{extra:!0,children:[Object(_.jsx)(U.a,{name:"setting"}),"v",a.nodeVersion]})]})})}function re(e){var t=Y().api;return t.rpc&&t.rpc.system&&t.rpc.system.chain&&t.rpc.system.name&&t.rpc.system.version?Object(_.jsx)(ne,Object(f.a)({},e)):null}var ce=n(857);function ae(){var e=Y().api,t=Object(r.useState)(0),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)({}),o=Object(i.a)(s,2),u=o[0],j=o[1],d=e.derive.chain.bestNumber;return Object(r.useEffect)((function(){var e=null;return d((function(e){a(e.toNumber())})).then((function(t){e=t})).catch(console.error),function(){return e&&e()}}),[d,e,c]),Object(r.useEffect)((function(){(function(){var t=Object(p.a)(h.a.mark((function t(){var n,r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.rpc.chain.getBlockHash(c);case 3:return n=t.sent,t.next=6,e.rpc.chain.getBlock(n);case 6:r=t.sent,a=r.block,j(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}})()()}),[e,c]),Object(_.jsxs)(l.a.Column,{children:[Object(_.jsx)("h1",{children:"Current Block Info"}),Object(_.jsx)(ce.a,{celled:!0,striped:!0,size:"small",children:Object(_.jsxs)(ce.a.Body,{children:[Object(_.jsxs)(ce.a.Row,{children:[Object(_.jsx)(ce.a.Cell,{width:3,textAlign:"center",children:"Block Number"}),Object(_.jsx)(ce.a.Cell,{width:10,children:c})]}),Object(_.jsxs)(ce.a.Row,{children:[Object(_.jsx)(ce.a.Cell,{width:3,textAlign:"center",children:"Hash"}),Object(_.jsx)(ce.a.Cell,{width:10,children:u.header&&u.header.hash.toString()})]}),Object(_.jsxs)(ce.a.Row,{children:[Object(_.jsx)(ce.a.Cell,{width:3,textAlign:"center",children:"Parent Hash"}),Object(_.jsx)(ce.a.Cell,{width:10,children:u.header&&u.header.parentHash.toString()})]}),Object(_.jsxs)(ce.a.Row,{children:[Object(_.jsx)(ce.a.Cell,{width:3,textAlign:"center",children:"State Root"}),Object(_.jsx)(ce.a.Cell,{width:10,children:u.header&&u.header.stateRoot.toString()})]}),Object(_.jsxs)(ce.a.Row,{children:[Object(_.jsx)(ce.a.Cell,{width:3,textAlign:"center",children:"Extrinsics Root"}),Object(_.jsx)(ce.a.Cell,{width:10,children:u.header&&u.header.extrinsicsRoot.toString()})]})]})})]})}function se(){var e,t=Object(r.useState)(null),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Y(),b=s.apiState,h=s.keyring,p=s.keyringState,f=s.apiError,x=(c&&"READY"===p&&h.getPair(c),function(e){return Object(_.jsx)(o.a,{active:!0,children:Object(_.jsx)(u.a,{size:"small",children:e})})});if("ERROR"===b)return e=f,Object(_.jsx)(l.a,{centered:!0,columns:2,padded:!0,children:Object(_.jsx)(l.a.Column,{children:Object(_.jsx)(j.a,{negative:!0,compact:!0,floating:!0,header:"Error Connecting to Substrate",content:"".concat(JSON.stringify(e,null,4))})})});if("READY"!==b)return x("Connecting to Substrate");if("READY"!==p)return x("Loading accounts (please review any extension's authorization)");var E=Object(r.createRef)();return Object(_.jsxs)("div",{ref:E,children:[Object(_.jsx)(d.a,{context:E,children:Object(_.jsx)(W,{setAccountAddress:a})}),Object(_.jsx)(O.a,{children:Object(_.jsxs)(l.a,{stackable:!0,columns:"equal",children:[Object(_.jsxs)(l.a.Row,{stretched:!0,children:[Object(_.jsx)(re,{}),Object(_.jsx)(te,{}),Object(_.jsx)(Z,{}),Object(_.jsx)(Z,{finalized:!0})]}),Object(_.jsx)(l.a.Row,{stretched:!0,children:Object(_.jsx)(ae,{})})]})}),Object(_.jsx)(H,{})]})}function ie(){return Object(_.jsx)(K,{children:Object(_.jsx)(se,{})})}s.a.render(Object(_.jsx)(ie,{}),document.getElementById("root"))}},[[794,1,2]]]);
//# sourceMappingURL=main.df7622eb.chunk.js.map