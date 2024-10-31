"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1957],{79418:function(e,t,n){function i(e){if(null!=e)return parseInt(e)}function o(e){return!0===e||!1===e?e:"true"===e||"false"===e?"true"===e:"t"===e||"f"===e?"t"===e:(1===e||0===e)&&1===e}n.d(t,{LC:function(){return i},gx:function(){return o},zW:function(){return function e(t){if(t instanceof Array)return t.map(function(t){return"object"==typeof t&&(t=e(t)),t});{let n={};for(let i in t)if(t.hasOwnProperty(i)){let o=(i.charAt(0).toLowerCase()+i.slice(1)||i).toString(),s=t[i];(s instanceof Array||null!==s&&s.constructor===Object)&&(s=e(s)),n[o]=s}return n}}}})},11144:function(e,t,n){n.d(t,{Z:function(){return f},z:function(){return l}});var i=n(57437),o=n(2265),s=n(79418),r=n(94547),a=n(83593),c=n(5085),d=n(37570),u=n(23447);let l=(0,o.createContext)({});function f(e){let t=(0,o.useContext)(d.H),[n,f]=(0,o.useState)(t.session),[h,v]=(0,o.useState)(t.graphic),{api:m,start:b}=(0,o.useContext)(u.E),p=(0,o.useContext)(c.rZ),S=async()=>{console.debug("Refresh session...");try{p.role===r._b.Controller?f(await b(m.getDeliberationSessionAdmin(t.sid,p.user.access_token,"live-session-refresh"))):f(await b(m.getDeliberationSession(t.sid,"live-session-refresh")))}catch(e){console.error("Error fetching session data.",e)}},[g,x]=(0,o.useState)();(0,o.useEffect)(()=>(a.Z.on(a.M.WSS_Distribute_Message,x),a.Z.on(a.M.WSS_Update_ConnectionState,x),a.Z.on(a.M.WSS_Refresh_Session,x),()=>{a.Z.off(a.M.WSS_Distribute_Message,x),a.Z.off(a.M.WSS_Update_ConnectionState,x),a.Z.off(a.M.WSS_Refresh_Session,x)}),[]),(0,o.useEffect)(()=>{if(void 0!==g)switch(g.type){case a.M.WSS_Update_ConnectionState:I(g.data);break;case a.M.WSS_Distribute_Message:w(g.data);break;case a.M.WSS_Refresh_Session:S()}},[g]);let I=e=>{console.debug("Connection state detected: ".concat(r.um[e])),e===r.um.Joined&&S()},w=e=>{if("send"===e.action&&"session-update"===e.type){var t;let i=(0,s.zW)(e.data.session);f({...i,joinCode:null!==(t=i.joinCode)&&void 0!==t?t:n.joinCode})}if("send"===e.action&&"answer-summary-update"===e.type){let t=e.data.questionId,i=(0,s.zW)(e.data.answers);f({...n,answers:[...n.answers.filter(e=>e.questionId!==t),...i]})}};return(0,i.jsx)(l.Provider,{value:{session:n,graphic:h},children:e.children})}},37471:function(e,t,n){n.d(t,{C:function(){return v},Z:function(){return f}});var i=n(57437),o=n(2265),s=n(70972),r=n(94547),a=n(83593),c=n(27785),d=n(5085);let u={debug:!1,connectionTimeout:3e3,maxReconnectionDelay:1e4,minReconnectionDelay:100,reconnectionDelayGrowFactor:1.3,maxRetries:1/0},l=(e,t,n)=>({deviceId:e.deviceId,sessionId:n,sessionToken:e.sessionToken,role:e.role,deviceName:void 0,participantName:t.participantName}),f=(0,o.createContext)({}),h=[r.um.Online,r.um.Connecting,r.um.Connected,r.um.Joining];function v(e){var t;let n=null!==(t=e.endpoint)&&void 0!==t?t:"wss://r4l7rywnc5.execute-api.eu-west-2.amazonaws.com/prod";if(!n)throw"No endpoint found for Zeitgeist WSS";let v=(0,o.useContext)(d.rZ),m=(0,o.useContext)(c.K),b=(0,o.useRef)(null),[p,S]=(0,o.useState)(r.um.Offline),[g,x]=(0,o.useState)(!1),[I,w]=(0,o.useState)(!1),[C,E]=(0,o.useState)(),[_,y]=(0,o.useState)();(0,o.useEffect)(()=>(a.Z.on(a.M.WSS_Request_Reconnect,y),()=>{a.Z.off(a.M.WSS_Request_Reconnect,y)}),[]),(0,o.useEffect)(()=>{void 0!==_&&_.type===a.M.WSS_Request_Reconnect&&N()},[_]);let j=(0,o.useCallback)(e=>{try{return b.current.send(JSON.stringify(e)),!0}catch(e){return console.error(e),!1}},[b]),[k,Z]=(0,o.useState)({state:p,isError:I,joinedOnce:g,sendMessage:j});(0,o.useEffect)(()=>{if(void 0===window||void 0===window.navigator)throw"Window undefined.";window.addEventListener("online",()=>{p===r.um.Offline&&S(r.um.Online)}),window.addEventListener("offline",()=>{S(r.um.Offline)}),S(window.navigator.onLine?r.um.Online:r.um.Offline)},[]),(0,o.useEffect)(()=>{E(l(v,m,e.sid))},[v.deviceId,e.sid,v.sessionToken,v.role,m.participantName]),(0,o.useEffect)(()=>{Z({state:p,isError:I,joinedOnce:g,sendMessage:j})},[b,p,I,g,j]),(0,o.useEffect)(()=>{switch(console.debug("WSS state change",r.um[p]),a.Z.emit({type:a.M.WSS_Update_ConnectionState,data:p}),p){case r.um.Offline:A();break;case r.um.Online:N(),S(r.um.Connecting);break;case r.um.Connecting:R();break;case r.um.Connected:S(r.um.Joining);break;case r.um.Joining:D();break;case r.um.Joined:x(!0);break;case r.um.Error:R()}w(p===r.um.Error)},[p]);let R=()=>{setTimeout(()=>{[s.Z.CLOSING,s.Z.CLOSED].includes(b.current.readyState)&&(console.debug("Recreating socket..."),N())},500)},N=()=>{A(),b.current=W()},W=()=>{let e=new s.Z(n,[],u);return e.onopen=e=>{console.debug("WSS open",e),S(r.um.Connected)},e.onclose=e=>{console.warn("WSS close",e),S(r.um.Disconnected)},e.onerror=e=>{console.error("WSS error",e),S(r.um.Error)},e.onmessage=async e=>{await T(e)},e},A=()=>{try{var e;null===(e=b.current)||void 0===e||e.close()}catch(e){console.warn(e)}finally{b.current&&(b.current.onopen=null,b.current.onclose=null,b.current.onerror=null,b.current.onmessage=null,b.current=null)}},D=()=>{var e,t;console.info("Joining session...");let n={action:"join",deviceId:C.deviceId,sessionId:C.sessionId,sessionToken:C.sessionToken,deviceName:null!==(e=C.deviceName)&&void 0!==e?e:null,participantName:null!==(t=C.participantName)&&void 0!==t?t:null,role:C.role};b.current.send(JSON.stringify(n))},T=e=>{if(null==e?void 0:e.data){let t=JSON.parse(e.data);if(t&&"send"===t.action)switch(t.type){case"remote-log":M(t);break;case"join-confirmation":O(t);break;default:a.Z.emit({type:a.M.WSS_Distribute_Message,data:t})}}},M=e=>{switch(e.data.severity){case"debug":console.debug("Remote debug log",e.data.message);break;case"info":console.info("Remote info log",e.data.message);break;case"warn":console.warn("Remote warn log",e.data.message);break;case"error":console.error("Remote error log",e.data.message);break;default:console.log("Remote log",e.data.message)}},O=e=>{console.info("Join confirmation"),S(r.um.Joined)};return(0,i.jsxs)(i.Fragment,{children:[I&&!g&&(0,i.jsx)("p",{children:e.error}),!I&&!g&&h.includes(p)&&e.load,g&&(0,i.jsx)(f.Provider,{value:k,children:e.children})]})}},70883:function(e,t,n){n.d(t,{Z:function(){return u},l:function(){return d}});var i=n(57437),o=n(2265),s=n(83593),r=n(11144),a=n(37471),c=n(5085);let d=(0,o.createContext)({});function u(e){let t=(0,o.useContext)(c.rZ),{session:n}=(0,o.useContext)(r.z),[u,l]=(0,o.useState)([]),[f,h]=(0,o.useState)(u.find(e=>e.deviceId===t.deviceId)),[v,m]=(0,o.useState)([]),b=(0,o.useContext)(a.Z);(0,o.useEffect)(()=>{b.sendMessage({action:"request",type:"subscription-update",sessionId:e.sid})},[]);let[p,S]=(0,o.useState)();(0,o.useEffect)(()=>(s.Z.on(s.M.WSS_Distribute_Message,S),()=>{s.Z.off(s.M.WSS_Distribute_Message,S)}),[]),(0,o.useEffect)(()=>{void 0!==p&&p.type===s.M.WSS_Distribute_Message&&g(p.data)},[p]);let g=e=>{if("send"===e.action&&"subscription-update"===e.type){var t;l(null!==(t=e.data.subscriptions)&&void 0!==t?t:[])}};return(0,o.useEffect)(()=>{h(u.find(e=>e.deviceId===t.deviceId))},[u,t]),(0,o.useEffect)(()=>{var e;m(null!==(e=n.deviceIdBanList)&&void 0!==e?e:[])},[n.deviceIdBanList]),(0,i.jsx)(d.Provider,{value:{subscriptions:u,thisUser:f,deviceIdBanList:v},children:e.children})}},5085:function(e,t,n){n.d(t,{ZP:function(){return f},rZ:function(){return l}});var i,o,s=n(57437),r=n(2265),a=n(67022),c=n(20920),d=n(94547),u=n(23447);(i=o||(o={}))[i.Init=0]="Init",i[i.Authenticating=1]="Authenticating",i[i.AuthError=2]="AuthError",i[i.AuthNotRequired=3]="AuthNotRequired",i[i.Authenticated=4]="Authenticated",i[i.ExchangingJoinCode=5]="ExchangingJoinCode",i[i.JoinCodeError=6]="JoinCodeError",i[i.JoinCodeAccepted=7]="JoinCodeAccepted",i[i.Ready=8]="Ready";let l=(0,r.createContext)({});function f(e){var t;let[n,i]=(0,r.useState)((null===(t=window)||void 0===t?void 0:t.localStorage.getItem("DeviceId"))||(0,c.Z)());(0,r.useEffect)(()=>{window&&window.localStorage.setItem("DeviceId",n)},[n]);let[f,h]=(0,r.useState)(0),[v,m]=(0,r.useState)(void 0),[b,p]=(0,r.useState)(e.role),[S,g]=(0,r.useState)(),[x,I]=(0,r.useState)(!1),[w,C]=(0,r.useState)(!1),[E,_]=(0,r.useState)({deviceId:n,role:b,state:f,user:v,sessionToken:S,noUserWarning:w});(0,r.useEffect)(()=>{_({...E,state:f})},[f]),(0,r.useEffect)(()=>{_({...E,user:v})},[v]),(0,r.useEffect)(()=>{_({...E,role:b})},[b]),(0,r.useEffect)(()=>{_({...E,sessionToken:S})},[S]),(0,r.useEffect)(()=>{_({...E,noUserWarning:w})},[w]);let y=(0,a.aC)(),{api:j,start:k}=(0,r.useContext)(u.E);return(0,r.useEffect)(()=>y.events.addAccessTokenExpiring(async()=>{console.debug("Access token renewal with auth.signinSilent()...");let e=await y.signinSilent();console.debug("User renewal: ".concat(e?"found":"not found")),m(e)}),[y.events,y.signinSilent]),(0,r.useEffect)(()=>{switch(console.debug("User state",o[f]),f){case 0:switch(b){case d._b.Controller:h(1);break;case d._b.Client:h(3),m(null);break;default:throw"Unsupported role: ".concat(d._b[b])}break;case 1:y.signinSilent().then(e=>{null!==e?(console.info("User found",e.profile.email),m(e),h(4)):(console.debug("Not authenticated"),m(void 0),h(2))}).catch(e=>{console.error(e),m(void 0),h(2)});break;case 2:case 6:break;case 4:case 3:h(5);break;case 5:let t={deviceId:n,role:b,joinCode:e.joinCode,sessionId:e.sid};k(j.exchangeJoinCodeForSessionToken(t)).then(e=>{g(e.sessionToken),h(7)}).catch(e=>{console.error(e),h(6)});break;case 7:h(8)}I(!![2,6].find(e=>e===f))},[f]),(0,r.useEffect)(()=>{C(null===v),null===v&&8===f&&console.error("No user found through Auth. The facilitator will not be able to manage the session.")},[v]),(0,s.jsxs)(s.Fragment,{children:[x&&e.err,8!==f&&!x&&e.load,8===f&&!x&&(0,s.jsx)(l.Provider,{value:E,children:e.children})]})}},37570:function(e,t,n){n.d(t,{H:function(){return v},Z:function(){return m}});var i,o,s=n(57437),r=n(2265),a=n(94547),c=n(20909),d=n(5085),u=n(23447);(i=o||(o={}))[i.Init=0]="Init",i[i.RetrievingSession=1]="RetrievingSession",i[i.RetrievingGraphic=2]="RetrievingGraphic",i[i.SessionError=3]="SessionError",i[i.Ready=4]="Ready";let l=[3],f=[0],h=[1,2],v=(0,r.createContext)({});function m(e){let{api:t,start:n}=(0,r.useContext)(u.E),i=(0,r.useContext)(d.rZ),[m,b]=(0,r.useState)(0),[p,S]=(0,r.useState)(),[g,x]=(0,r.useState)(),[I,w]=(0,r.useState)(!0),[C,E]=(0,r.useState)(!1),[_,y]=(0,r.useState)(!1);(0,r.useEffect)(()=>{switch(console.debug("Static data state",o[m]),m){case 0:b(1);break;case 1:j().then(e=>{S(e),b(2)}).catch(e=>{console.error(e),b(3)});break;case 2:k().then(e=>{x(e),b(4)}).catch(e=>{console.error(e),b(3)})}E(void 0!==h.find(e=>e===m)),y(void 0!==l.find(e=>e===m)),w(void 0!==f.find(e=>e===m))},[m]);let j=async()=>i.role===a._b.Controller?await n(t.getDeliberationSessionAdmin(e.sid,i.user.access_token,void 0)):await n(t.getDeliberationSession(e.sid,void 0)),k=async()=>{let e={workshopDirectory:(0,c.X)(p.sessionPresentationUris[0])};return await n(t.postPublicContentAccessRequest(p.id,e))};return(0,s.jsxs)(s.Fragment,{children:[I&&e.init,C&&e.load,_&&e.err,4===m&&(0,s.jsx)(v.Provider,{value:{sid:p.id,session:p,graphic:g},children:e.children})]})}},83593:function(e,t,n){n.d(t,{M:function(){return o}});var i,o,s=n(37836),r=n.n(s);(i=o||(o={})).Request_SlideRefresh="REQUEST_SLIDE_REFRESH",i.WSS_Update_ConnectionState="WSS_UPDATE_CONNECTION_STATE",i.WSS_Distribute_Message="WSS_DISTRIBUTE_MESSAGE",i.Content_Progress_Update="CONTENT_PROGRESS_UPDATE",i.Media_Playback_Update="MEDIA_PLAYBACK_UPDATE",i.WSS_Refresh_Session="WSS_REFRESH_SESSION",i.WSS_Request_Reconnect="WSS_REQUEST_RECONNECT";let a=new(r()),c={on:(e,t)=>a.on(e,t),once:(e,t)=>a.once(e,t),off:(e,t)=>a.off(e,t),emit:e=>a.emit(e.type,e)};Object.freeze(c),t.Z=c},59887:function(e,t,n){n.d(t,{ZP:function(){return b}});var i=n(57437),o=n(70883),s=n(80511),r=n(33351),a=n(6722),c=n(2265),d=n(31193);let u=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"solid 2px grey",borderRadius:1},children:"TEST"})}),l=e=>(0,i.jsx)(d.Z,{className:"shadow",sx:{borderRadius:"0.5rem",overflow:"hidden",background:"lightgray",height:"100%",width:"100%",position:"relative"},children:(0,i.jsx)(d.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,i.jsxs)(s.Z,{variant:"body2",color:"gray",align:"center",sx:{mx:4,textWrap:"balance"},children:["space reserved for ",e.name]})})}),f=(e,t)=>{var n;return null===(n=Object.entries(t).find(t=>t[1].externalUserId===e))||void 0===n?void 0:n[1]},h=e=>{let{tiles:t,attendeeIdToTileId:n}=(0,a.akC)(),{tileId:s,isVideoEnabled:r}=(0,a.Onx)(),{thisUser:d}=(0,c.useContext)(o.l),{roster:u}=(0,a.dJs)(),h=f(e.subscription.deviceId,u),[m,b]=(0,c.useState)();return(0,c.useEffect)(()=>{if(!e.test){if(h){var i;let o=e.subscription.deviceId===(null==d?void 0:d.deviceId);b({subscription:e.subscription,attendee:h,isLocal:o,hasVideo:o?r:!!h&&t.some(e=>e===n[h.chimeAttendeeId]),tileId:null!==(i=o?s:h?n[h.chimeAttendeeId]:void 0)&&void 0!==i?i:void 0,muted:void 0})}else b(void 0)}},[e.subscription.subscriptionId,r,t,d,u]),(0,i.jsxs)(i.Fragment,{children:[m&&(0,i.jsx)(v,{subscription:m.subscription,attendee:m.attendee,isLocal:m.isLocal,hasVideo:m.hasVideo,tileId:m.tileId,muted:void 0},"video-call-tile-".concat(m.tileId)),!m&&(0,i.jsx)(l,{name:e.subscription.participantName})]})},v=(0,c.memo)(function(e){let{muted:t}=(0,a.zDY)(e.attendee.chimeAttendeeId);return(0,i.jsx)(m,{...e,muted:t})},(e,t)=>{var n,i;let o=e.tileId===t.tileId,s=e.isLocal===t.isLocal,r=e.hasVideo===t.hasVideo,a=e.subscription.subscriptionId===t.subscription.subscriptionId&&e.subscription.participantName===t.subscription.participantName,c=(null===(n=e.attendee)||void 0===n?void 0:n.chimeAttendeeId)===(null===(i=t.attendee)||void 0===i?void 0:i.chimeAttendeeId),d=e.muted===t.muted;return o&&s&&r&&a&&c&&d}),m=(0,c.memo)(function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.Z,{className:"shadow",sx:{borderRadius:"0.5rem",overflow:"hidden",background:"gray",height:"100%",width:"100%",position:"relative"},children:[e.hasVideo&&!e.isLocal&&(0,i.jsx)(a.ZzX,{name:e.subscription.participantName,tileId:e.tileId}),e.hasVideo&&e.isLocal&&(0,i.jsx)(a.OuP,{nameplate:e.subscription.participantName}),!e.hasVideo&&(0,i.jsx)(r.Z,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(s.Z,{variant:"body2",color:"white",children:e.subscription.participantName})}),(0,i.jsx)(r.Z,{sx:{position:"absolute",left:"1rem",top:"1rem"},children:(0,i.jsx)("img",{style:{width:"2rem",height:"2rem"},src:e.muted?"/icons/av/mic-disabled.svg":"/icons/av/mic-enabled.svg"})})]})})},(e,t)=>{var n,i;let o=e.tileId===t.tileId,s=e.isLocal===t.isLocal,r=e.hasVideo===t.hasVideo,a=e.subscription.subscriptionId===t.subscription.subscriptionId&&e.subscription.participantName===t.subscription.participantName,c=(null===(n=e.attendee)||void 0===n?void 0:n.chimeAttendeeId)===(null===(i=t.attendee)||void 0===i?void 0:i.chimeAttendeeId),d=e.muted===t.muted;return o&&s&&r&&a&&c&&d});var b=(0,c.memo)(e=>(0,i.jsxs)(i.Fragment,{children:[e.test&&(0,i.jsx)(u,{}),!e.test&&(0,i.jsx)(h,{subscription:e.subscription})]}),(e,t)=>e.subscription.subscriptionId===t.subscription.subscriptionId)},2215:function(e,t,n){n.d(t,{ZP:function(){return l},fp:function(){return c},wB:function(){return d}});var i=n(57437),o=n(94547),s=n(2265),r=n(70883),a=n(59887);let c=(0,s.createContext)({}),d=(e,t)=>{if(void 0===e&&void 0===t)return!0;if(void 0===e||void 0===t||e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n].subscriptionId!=e[n].subscriptionId)return!1;return!0},u=(e,t)=>{if(void 0===e&&void 0===t)return!0;if(void 0===e||void 0===t||e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n].key!==t[n].key)return!1;return!0};function l(e){let{subscriptions:t,deviceIdBanList:n,thisUser:l}=(0,s.useContext)(r.l),[f,h]=(0,s.useState)([]),[v,m]=(0,s.useState)([]),[b,p]=(0,s.useState)({tiles:[]});(0,s.useEffect)(()=>{let i=t.filter(e=>void 0===n.find(t=>e.deviceId===t)),s=[...i.filter(e=>e.deviceId!==(null==l?void 0:l.deviceId)&&e.role===o._b.Controller)].sort((e,t)=>e.deviceId.localeCompare(t.deviceId)),r=[...i.filter(e=>e.deviceId!==(null==l?void 0:l.deviceId)&&e.role===o._b.Client)].sort((e,t)=>e.deviceId.localeCompare(t.deviceId)),a=e.role===o._b.Client?[...s,...l?[l]:[],...r]:[...l?[l]:[],...s,...r];d(a,f)||h(a)},[t,n]);let S=e=>"video-tile-".concat(e.subscriptionId);return(0,s.useEffect)(()=>{let e=[];f.forEach((t,n)=>{let o=v.find(e=>e.key===S(t));o?e.push(o):e.push((0,i.jsx)(a.ZP,{subscription:t,test:!1},S(t)))}),u(e,v)||m(e)},[f]),(0,s.useEffect)(()=>{p({tiles:v})},[v]),(0,i.jsx)(c.Provider,{value:b,children:e.children})}},71601:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(57437),o=n(31193);function s(e){var t;let n=null===(t=e.background)||void 0===t||t;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Z,{sx:{width:"100%",height:"100%",backgroundImage:n?"url(/images/zg-poster.png)":void 0,backgroundSize:"cover",backgroundPosition:"center",position:"relative",overflow:"hidden"},children:[(0,i.jsx)(o.Z,{sx:{position:"absolute",left:0,top:0,width:"50%",bottom:0,backgroundColor:"#3E7075CC"}}),(0,i.jsx)(o.Z,{sx:{position:"absolute",left:"5%",right:"5%",top:0,bottom:0,display:"flex",flexDirection:"column",justifyContent:"center",overflowY:"auto"},children:(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"start"},children:[(0,i.jsx)(o.Z,{sx:{flexGrow:1,flexBasis:0,p:2,pr:"10%"},children:e.children}),(0,i.jsx)(o.Z,{sx:{flexGrow:1,flexBasis:0,p:2},children:e.rightPanel})]})})]})})}},27785:function(e,t,n){n.d(t,{K:function(){return u},Z:function(){return l}});var i=n(57437),o=n(9646),s=n(31193),r=n(80511),a=n(66858),c=n(2265),d=n(71601);let u=(0,c.createContext)({});function l(e){let[t,n]=(0,c.useState)(""),[l,f]=(0,c.useState)(!1),[h,v]=(0,c.useState)(!1),m=l&&0===t.trim().length,b=!m&&t.trim().length>0,p=n=>{b&&(e.submitName(t),v(!0))};return(0,i.jsxs)(i.Fragment,{children:[!h&&(0,i.jsx)(d.Z,{children:(0,i.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"start",gap:2},children:[(0,i.jsx)(r.Z,{variant:"h4",component:"h2",color:"white",children:"Please enter your name"}),(0,i.jsx)(r.Z,{variant:"body1",color:"white",children:"This is so we know what to call you during the session, your name will not be saved or stored"}),(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),p()},style:{alignSelf:"stretch"},children:[(0,i.jsx)(a.Z,{sx:{mb:4,input:{background:"#ffffffcc"}},fullWidth:!0,style:{flexGrow:1},label:"Your name",variant:"outlined",value:t,autoComplete:"off",autoFocus:!0,onChange:e=>{n(e.target.value),f(!0)},error:m,color:"buttonStandard"}),(0,i.jsx)(o.Z,{color:"buttonReverse",btnKey:"submit",busy:!1,disabled:!b,onClick:p,btnText:"CONTINUE"})]})]})}),h&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Provider,{value:{participantName:t},children:e.children})})]})}},15785:function(e,t,n){var i,o;n.d(t,{I:function(){return s},S:function(){return i}}),(o=i||(i={}))[o.default=0]="default",o[o.deliberation=1]="deliberation";let s={activity:0,recordingId:void 0,notes:"",qids:[],secs:void 0}},9646:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(57437),o=n(42555),s=n(80511);function r(e){var t,n,r;return(0,i.jsx)(o.Z,{type:"submit",variant:null!==(t=e.variant)&&void 0!==t?t:"contained",size:e.size,color:null!==(n=e.color)&&void 0!==n?n:"buttonStandard",onClick:()=>{e.onClick(e.btnKey)},loading:e.busy,disabled:e.disabled||e.busy,startIcon:e.startIcon,endIcon:e.endIcon,sx:e.sx,children:(0,i.jsx)(s.Z,{variant:"submitButton",children:null!==(r=e.btnText)&&void 0!==r?r:"Submit"})})}},20909:function(e,t,n){n.d(t,{X:function(){return i}});let i=e=>e.split("/").at(-2)}}]);