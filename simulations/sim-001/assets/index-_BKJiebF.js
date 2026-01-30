(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var ch={exports:{}},Io={};var G_;function KS(){if(G_)return Io;G_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var k_;function QS(){return k_||(k_=1,ch.exports=KS()),ch.exports}var JS=QS(),fh={exports:{}},ae={};var X_;function $S(){if(X_)return ae;X_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(L,nt,gt){this.props=L,this.context=nt,this.refs=y,this.updater=gt||b}v.prototype.isReactComponent={},v.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function D(){}D.prototype=v.prototype;function N(L,nt,gt){this.props=L,this.context=nt,this.refs=y,this.updater=gt||b}var O=N.prototype=new D;O.constructor=N,C(O,v.prototype),O.isPureReactComponent=!0;var z=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function R(L,nt,gt){var Tt=gt.ref;return{$$typeof:r,type:L,key:nt,ref:Tt!==void 0?Tt:null,props:gt}}function w(L,nt){return R(L.type,nt,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function st(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(gt){return nt[gt]})}var at=/\/+/g;function dt(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?st(""+L.key):nt.toString(36)}function ct(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(B,B):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,nt,gt,Tt,It){var et=typeof L;(et==="undefined"||et==="boolean")&&(L=null);var ut=!1;if(L===null)ut=!0;else switch(et){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(L.$$typeof){case r:case t:ut=!0;break;case _:return ut=L._init,P(ut(L._payload),nt,gt,Tt,It)}}if(ut)return It=It(L),ut=Tt===""?"."+dt(L,0):Tt,z(It)?(gt="",ut!=null&&(gt=ut.replace(at,"$&/")+"/"),P(It,nt,gt,"",function(Bt){return Bt})):It!=null&&(k(It)&&(It=w(It,gt+(It.key==null||L&&L.key===It.key?"":(""+It.key).replace(at,"$&/")+"/")+ut)),nt.push(It)),1;ut=0;var wt=Tt===""?".":Tt+":";if(z(L))for(var Gt=0;Gt<L.length;Gt++)Tt=L[Gt],et=wt+dt(Tt,Gt),ut+=P(Tt,nt,gt,et,It);else if(Gt=M(L),typeof Gt=="function")for(L=Gt.call(L),Gt=0;!(Tt=L.next()).done;)Tt=Tt.value,et=wt+dt(Tt,Gt++),ut+=P(Tt,nt,gt,et,It);else if(et==="object"){if(typeof L.then=="function")return P(ct(L),nt,gt,Tt,It);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ut}function H(L,nt,gt){if(L==null)return L;var Tt=[],It=0;return P(L,Tt,"","",function(et){return nt.call(gt,et,It++)}),Tt}function it(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(gt){(L._status===0||L._status===-1)&&(L._status=1,L._result=gt)},function(gt){(L._status===0||L._status===-1)&&(L._status=2,L._result=gt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var yt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},xt={map:H,forEach:function(L,nt,gt){H(L,function(){nt.apply(this,arguments)},gt)},count:function(L){var nt=0;return H(L,function(){nt++}),nt},toArray:function(L){return H(L,function(nt){return nt})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ae.Activity=g,ae.Children=xt,ae.Component=v,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=N,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ae.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},ae.cache=function(L){return function(){return L.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(L,nt,gt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Tt=C({},L.props),It=L.key;if(nt!=null)for(et in nt.key!==void 0&&(It=""+nt.key),nt)!J.call(nt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&nt.ref===void 0||(Tt[et]=nt[et]);var et=arguments.length-2;if(et===1)Tt.children=gt;else if(1<et){for(var ut=Array(et),wt=0;wt<et;wt++)ut[wt]=arguments[wt+2];Tt.children=ut}return R(L.type,It,Tt)},ae.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ae.createElement=function(L,nt,gt){var Tt,It={},et=null;if(nt!=null)for(Tt in nt.key!==void 0&&(et=""+nt.key),nt)J.call(nt,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(It[Tt]=nt[Tt]);var ut=arguments.length-2;if(ut===1)It.children=gt;else if(1<ut){for(var wt=Array(ut),Gt=0;Gt<ut;Gt++)wt[Gt]=arguments[Gt+2];It.children=wt}if(L&&L.defaultProps)for(Tt in ut=L.defaultProps,ut)It[Tt]===void 0&&(It[Tt]=ut[Tt]);return R(L,et,It)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(L){return{$$typeof:d,render:L}},ae.isValidElement=k,ae.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:it}},ae.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},ae.startTransition=function(L){var nt=F.T,gt={};F.T=gt;try{var Tt=L(),It=F.S;It!==null&&It(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(B,yt)}catch(et){yt(et)}finally{nt!==null&&gt.types!==null&&(nt.types=gt.types),F.T=nt}},ae.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ae.use=function(L){return F.H.use(L)},ae.useActionState=function(L,nt,gt){return F.H.useActionState(L,nt,gt)},ae.useCallback=function(L,nt){return F.H.useCallback(L,nt)},ae.useContext=function(L){return F.H.useContext(L)},ae.useDebugValue=function(){},ae.useDeferredValue=function(L,nt){return F.H.useDeferredValue(L,nt)},ae.useEffect=function(L,nt){return F.H.useEffect(L,nt)},ae.useEffectEvent=function(L){return F.H.useEffectEvent(L)},ae.useId=function(){return F.H.useId()},ae.useImperativeHandle=function(L,nt,gt){return F.H.useImperativeHandle(L,nt,gt)},ae.useInsertionEffect=function(L,nt){return F.H.useInsertionEffect(L,nt)},ae.useLayoutEffect=function(L,nt){return F.H.useLayoutEffect(L,nt)},ae.useMemo=function(L,nt){return F.H.useMemo(L,nt)},ae.useOptimistic=function(L,nt){return F.H.useOptimistic(L,nt)},ae.useReducer=function(L,nt,gt){return F.H.useReducer(L,nt,gt)},ae.useRef=function(L){return F.H.useRef(L)},ae.useState=function(L){return F.H.useState(L)},ae.useSyncExternalStore=function(L,nt,gt){return F.H.useSyncExternalStore(L,nt,gt)},ae.useTransition=function(){return F.H.useTransition()},ae.version="19.2.4",ae}var W_;function Yd(){return W_||(W_=1,fh.exports=$S()),fh.exports}var ty=Yd(),hh={exports:{}},Bo={},dh={exports:{}},ph={};var Y_;function ey(){return Y_||(Y_=1,(function(r){function t(P,H){var it=P.length;P.push(H);t:for(;0<it;){var yt=it-1>>>1,xt=P[yt];if(0<l(xt,H))P[yt]=H,P[it]=xt,it=yt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var H=P[0],it=P.pop();if(it!==H){P[0]=it;t:for(var yt=0,xt=P.length,L=xt>>>1;yt<L;){var nt=2*(yt+1)-1,gt=P[nt],Tt=nt+1,It=P[Tt];if(0>l(gt,it))Tt<xt&&0>l(It,gt)?(P[yt]=It,P[Tt]=it,yt=Tt):(P[yt]=gt,P[nt]=it,yt=nt);else if(Tt<xt&&0>l(It,it))P[yt]=It,P[Tt]=it,yt=Tt;else break t}}return H}function l(P,H){var it=P.sortIndex-H.sortIndex;return it!==0?it:P.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,S=3,M=!1,b=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=P)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function z(P){if(C=!1,O(P),!b)if(i(m)!==null)b=!0,B||(B=!0,st());else{var H=i(p);H!==null&&ct(z,H.startTime-P)}}var B=!1,F=-1,J=5,R=-1;function w(){return y?!0:!(r.unstable_now()-R<J)}function k(){if(y=!1,B){var P=r.unstable_now();R=P;var H=!0;try{t:{b=!1,C&&(C=!1,D(F),F=-1),M=!0;var it=S;try{e:{for(O(P),g=i(m);g!==null&&!(g.expirationTime>P&&w());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,S=g.priorityLevel;var xt=yt(g.expirationTime<=P);if(P=r.unstable_now(),typeof xt=="function"){g.callback=xt,O(P),H=!0;break e}g===i(m)&&s(m),O(P)}else s(m);g=i(m)}if(g!==null)H=!0;else{var L=i(p);L!==null&&ct(z,L.startTime-P),H=!1}}break t}finally{g=null,S=it,M=!1}H=void 0}}finally{H?st():B=!1}}}var st;if(typeof N=="function")st=function(){N(k)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=k,st=function(){dt.postMessage(null)}}else st=function(){v(k,0)};function ct(P,H){F=v(function(){P(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(P){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var it=S;S=H;try{return P()}finally{S=it}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var it=S;S=P;try{return H()}finally{S=it}},r.unstable_scheduleCallback=function(P,H,it){var yt=r.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?yt+it:yt):it=yt,P){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=it+xt,P={id:_++,callback:H,priorityLevel:P,startTime:it,expirationTime:xt,sortIndex:-1},it>yt?(P.sortIndex=it,t(p,P),i(m)===null&&P===i(p)&&(C?(D(F),F=-1):C=!0,ct(z,it-yt))):(P.sortIndex=xt,t(m,P),b||M||(b=!0,B||(B=!0,st()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var H=S;return function(){var it=S;S=H;try{return P.apply(this,arguments)}finally{S=it}}}})(ph)),ph}var q_;function ny(){return q_||(q_=1,dh.exports=ey()),dh.exports}var mh={exports:{}},Ln={};var j_;function iy(){if(j_)return Ln;j_=1;var r=Yd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Ln.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var Z_;function ay(){if(Z_)return mh.exports;Z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),mh.exports=iy(),mh.exports}var K_;function sy(){if(K_)return Bo;K_=1;var r=ny(),t=Yd(),i=ay();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,o=f;break}if(T===o){x=!0,o=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,o=c;break}if(T===o){x=!0,o=f,a=c;break}T=T.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ct=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function L(e){return{current:e}}function nt(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function gt(e,n){xt++,yt[xt]=e.current,e.current=n}var Tt=L(null),It=L(null),et=L(null),ut=L(null);function wt(e,n){switch(gt(et,n),gt(It,e),gt(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?f_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=f_(n),e=h_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Tt),gt(Tt,e)}function Gt(){nt(Tt),nt(It),nt(et)}function Bt(e){e.memoizedState!==null&&gt(ut,e);var n=Tt.current,a=h_(n,e.type);n!==a&&(gt(It,e),gt(Tt,a))}function pe(e){It.current===e&&(nt(Tt),nt(It)),ut.current===e&&(nt(ut),Oo._currentValue=it)}var Je,ve;function me(e){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+ve}var we=!1;function se(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){tt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var I=x.split(`
`),Q=T.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===Q.length)for(o=I.length-1,c=Q.length-1;1<=o&&0<=c&&I[o]!==Q[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==Q[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==Q[c]){var ft=`
`+I[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=c);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function $e(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return me("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=$e(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var je=Object.prototype.hasOwnProperty,Me=r.unstable_scheduleCallback,Ne=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,U=r.unstable_requestPaint,E=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,ht=r.unstable_ImmediatePriority,vt=r.unstable_UserBlockingPriority,lt=r.unstable_NormalPriority,jt=r.unstable_LowPriority,Ct=r.unstable_IdlePriority,kt=r.log,te=r.unstable_setDisableYieldValue,Mt=null,Et=null;function Ft(e){if(typeof kt=="function"&&te(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:X,Rt=Math.log,oe=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Rt(e)/oe|0)|0}var Ut=256,bt=262144,Pt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=St(o):(x&=T,x!==0?c=St(x):a||(a=T&~e,a!==0&&(c=St(a))))):(T=o&~f,T!==0?c=St(T):x!==0?c=St(x):a||(a=o&~e,a!==0&&(c=St(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,o,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(a=x&~a;0<a;){var ft=31-Ot(a),mt=1<<ft;T[ft]=0,I[ft]=-1;var tt=Q[ft];if(tt!==null)for(Q[ft]=null,ft=0;ft<tt.length;ft++){var ot=tt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}o!==0&&rl(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function rl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Wr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Fs(e,n){var a=n&-n;return a=(a&42)!==0?1:Yr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:P_(e.type))}function Ni(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var oi=Math.random().toString(36).slice(2),rn="__reactFiber$"+oi,Sn="__reactProps$"+oi,yi="__reactContainer$"+oi,Is="__reactEvents$"+oi,Bs="__reactListeners$"+oi,ol="__reactHandles$"+oi,jr="__reactResources$"+oi,ss="__reactMarker$"+oi;function Zr(e){delete e[rn],delete e[Sn],delete e[Is],delete e[Bs],delete e[ol]}function Ea(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[yi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=x_(e);e!==null;){if(a=e[rn])return a;e=x_(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[rn]||e[yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ta(e){var n=e[jr];return n||(n=e[jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(e){e[ss]=!0}var Y=new Set,rt={};function $(e,n){j(e,n),j(e+"Capture",n)}function j(e,n){for(rt[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zt={},Lt={};function Ht(e){return je.call(Lt,e)?!0:je.call(zt,e)?!1:Dt.test(e)?Lt[e]=!0:(zt[e]=!0,!1)}function Xt(e,n,a){if(Ht(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Qt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function We(e){if(!e._valueTracker){var n=De(e)?"checked":"value";e._valueTracker=Ze(e,n,""+e[n])}}function Oe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=De(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function ie(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,o,c,f,x,T){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Jt(n)):e.value!==""+Jt(n)&&(e.value=""+Jt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,x,Jt(n)):a!=null?Mn(e,x,Jt(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Jt(T):e.removeAttribute("name")}function Yi(e,n,a,o,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(e);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),We(e)}function Mn(e,n,a){n==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+Jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Jt(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Jt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),We(e)}function hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Tn(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Tn(e,f,n[f])}function Mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var rc=null;function oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,Gs=null;function cp(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Sn]||null;if(!c)throw Error(s(90));yn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Oe(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&li(e,!!a.multiple,n,!1)}}}var lc=!1;function fp(e,n,a){if(lc)return e(n,a);lc=!0;try{var o=e(n);return o}finally{if(lc=!1,(Vs!==null||Gs!==null)&&(Zl(),Vs&&(n=Vs,e=Gs,Gs=Vs=null,cp(n),e)))for(n=0;n<e.length;n++)cp(e[n])}}function Kr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=!1;if(ji)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){uc=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{uc=!1}var Aa=null,cc=null,ul=null;function hp(){if(ul)return ul;var e,n=cc,a=n.length,o,c="value"in Aa?Aa.value:Aa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===c[f-o];o++);return ul=c.slice(e,1<o?1-o:void 0)}function cl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function dp(){return!1}function Vn(e){function n(a,o,c,f,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:dp,this.isPropagationStopped=dp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Vn(os),Jr=g({},os,{view:0,detail:0}),jv=Vn(Jr),fc,hc,$r,dl=g({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(fc=e.screenX-$r.screenX,hc=e.screenY-$r.screenY):hc=fc=0,$r=e),fc)},movementY:function(e){return"movementY"in e?e.movementY:hc}}),pp=Vn(dl),Zv=g({},dl,{dataTransfer:0}),Kv=Vn(Zv),Qv=g({},Jr,{relatedTarget:0}),dc=Vn(Qv),Jv=g({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),$v=Vn(Jv),tx=g({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ex=Vn(tx),nx=g({},os,{data:0}),mp=Vn(nx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=sx[e])?!!n[e]:!1}function pc(){return rx}var ox=g({},Jr,{key:function(e){if(e.key){var n=ix[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lx=Vn(ox),ux=g({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Vn(ux),cx=g({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),fx=Vn(cx),hx=g({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),dx=Vn(hx),px=g({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=Vn(px),gx=g({},os,{newState:0,oldState:0}),_x=Vn(gx),vx=[9,13,27,32],mc=ji&&"CompositionEvent"in window,to=null;ji&&"documentMode"in document&&(to=document.documentMode);var xx=ji&&"TextEvent"in window&&!to,_p=ji&&(!mc||to&&8<to&&11>=to),vp=" ",xp=!1;function Sp(e,n){switch(e){case"keyup":return vx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function Sx(e,n){switch(e){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(xp=!0,vp);case"textInput":return e=n.data,e===vp&&xp?null:e;default:return null}}function yx(e,n){if(ks)return e==="compositionend"||!mc&&Sp(e,n)?(e=hp(),ul=cc=Aa=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _p&&n.locale!=="ko"?null:n.data;default:return null}}var Mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Mx[e.type]:n==="textarea"}function Ep(e,n,a,o){Vs?Gs?Gs.push(o):Gs=[o]:Vs=o,n=nu(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,no=null;function Ex(e){s_(e,0)}function pl(e){var n=rs(e);if(Oe(n))return e}function bp(e,n){if(e==="change")return n}var Tp=!1;if(ji){var gc;if(ji){var _c="oninput"in document;if(!_c){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),_c=typeof Ap.oninput=="function"}gc=_c}else gc=!1;Tp=gc&&(!document.documentMode||9<document.documentMode)}function Cp(){eo&&(eo.detachEvent("onpropertychange",Rp),no=eo=null)}function Rp(e){if(e.propertyName==="value"&&pl(no)){var n=[];Ep(n,no,e,oc(e)),fp(Ex,n)}}function bx(e,n,a){e==="focusin"?(Cp(),eo=n,no=a,eo.attachEvent("onpropertychange",Rp)):e==="focusout"&&Cp()}function Tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(no)}function Ax(e,n){if(e==="click")return pl(n)}function Cx(e,n){if(e==="input"||e==="change")return pl(n)}function Rx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Rx;function io(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!je.call(n,c)||!Zn(e[c],n[c]))return!1}return!0}function wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dp(e,n){var a=wp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=wp(a)}}function Up(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Up(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zt(e.document)}return n}function vc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var wx=ji&&"documentMode"in document&&11>=document.documentMode,Xs=null,xc=null,ao=null,Sc=!1;function Np(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sc||Xs==null||Xs!==Zt(o)||(o=Xs,"selectionStart"in o&&vc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=nu(xc,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Xs)))}function ls(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ws={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},yc={},Op={};ji&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function us(e){if(yc[e])return yc[e];if(!Ws[e])return e;var n=Ws[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Op)return yc[e]=n[a];return e}var Pp=us("animationend"),Fp=us("animationiteration"),zp=us("animationstart"),Dx=us("transitionrun"),Ux=us("transitionstart"),Lx=us("transitioncancel"),Ip=us("transitionend"),Bp=new Map,Mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mc.push("scrollEnd");function Ei(e,n){Bp.set(e,n),$(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Ys=0,Ec=0;function gl(){for(var e=Ys,n=Ec=Ys=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var c=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}f!==0&&Hp(a,c,f)}}function _l(e,n,a,o){ui[Ys++]=e,ui[Ys++]=n,ui[Ys++]=a,ui[Ys++]=o,Ec|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function bc(e,n,a,o){return _l(e,n,a,o),vl(e)}function cs(e,n){return _l(e,null,null,n),vl(e)}function Hp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ot(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Co)throw Co=0,Of=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qs={};function Nx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,o){return new Nx(e,n,a,o)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,c,f){var x=0;if(o=e,typeof e=="function")Tc(e)&&(x=1);else if(typeof e=="string")x=IS(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Kn(31,a,n,c),e.elementType=R,e.lanes=f,e;case C:return fs(a.children,c,f,n);case y:x=8,c|=24;break;case v:return e=Kn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case z:return e=Kn(13,a,n,c),e.elementType=z,e.lanes=f,e;case B:return e=Kn(19,a,n,c),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:x=10;break t;case D:x=9;break t;case O:x=11;break t;case F:x=14;break t;case J:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Kn(x,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function fs(e,n,a,o){return e=Kn(7,e,o,n),e.lanes=a,e}function Ac(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function Gp(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function Cc(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var kp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=kp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},kp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var js=[],Zs=0,Sl=null,so=0,fi=[],hi=0,Ca=null,Oi=1,Pi="";function Ki(e,n){js[Zs++]=so,js[Zs++]=Sl,Sl=e,so=n}function Xp(e,n,a){fi[hi++]=Oi,fi[hi++]=Pi,fi[hi++]=Ca,Ca=e;var o=Oi;e=Pi;var c=32-Ot(o)-1;o&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var x=c-c%5;f=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Oi=1<<32-Ot(n)+c|a<<c|o,Pi=f+e}else Oi=1<<f|a<<c|o,Pi=e}function Rc(e){e.return!==null&&(Ki(e,1),Xp(e,1,0))}function wc(e){for(;e===Sl;)Sl=js[--Zs],js[Zs]=null,so=js[--Zs],js[Zs]=null;for(;e===Ca;)Ca=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null,Oi=fi[--hi],fi[hi]=null}function Wp(e,n){fi[hi++]=Oi,fi[hi++]=Pi,fi[hi++]=Ca,Oi=n.id,Pi=n.overflow,Ca=e}var An=null,Ye=null,ye=!1,Ra=null,di=!1,Dc=Error(s(519));function wa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(ci(n,e)),Dc}function Yp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[Sn]=o,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)_e(wo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Yi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||u_(n.textContent,a)?(o.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),o.onScroll!=null&&_e("scroll",n),o.onScrollEnd!=null&&_e("scrollend",n),o.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||wa(e,!0)}function qp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function Ks(e){if(e!==An)return!1;if(!ye)return qp(e),ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zf(e.type,e.memoizedProps)),a=!a),a&&Ye&&wa(e),qp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=v_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=v_(e)}else n===27?(n=Ye,ka(e.type)?(e=th,th=null,Ye=e):Ye=n):Ye=An?mi(e.stateNode.nextSibling):null;return!0}function hs(){Ye=An=null,ye=!1}function Uc(){var e=Ra;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ra=null),e}function ro(e){Ra===null?Ra=[e]:Ra.push(e)}var Lc=L(null),ds=null,Qi=null;function Da(e,n,a){gt(Lc,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=Lc.current,nt(Lc)}function Nc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Oc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Nc(f.return,a,e),o||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Nc(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Qs(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var T=c.type;Zn(c.pendingProps.value,x.value)||(e!==null?e.push(T):e=[T])}}else if(c===ut.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}c=c.return}e!==null&&Oc(n,e,a,o),n.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){ds=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return jp(ds,e)}function Ml(e,n){return ds===null&&ps(e),jp(e,n)}function jp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var Ox=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Px=r.unstable_scheduleCallback,Fx=r.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pc(){return{controller:new Ox,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&Px(Fx,function(){e.controller.abort()})}var lo=null,Fc=0,Js=0,$s=null;function zx(e,n){if(lo===null){var a=lo=[];Fc=0,Js=Hf(),$s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fc++,n.then(Zp,Zp),n}function Zp(){if(--Fc===0&&lo!==null){$s!==null&&($s.status="fulfilled");var e=lo;lo=null,Js=0,$s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ix(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Kp=P.S;P.S=function(e,n){Ng=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zx(e,n),Kp!==null&&Kp(e,n)};var ms=L(null);function zc(){var e=ms.current;return e!==null?e:Xe.pooledCache}function El(e,n){n===null?gt(ms,ms.current):gt(ms,n.pool)}function Qp(){var e=zc();return e===null?null:{parent:on._currentValue,pool:e}}var tr=Error(s(460)),Ic=Error(s(474)),bl=Error(s(542)),Tl={then:function(){}};function Jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,em(e),e;default:if(typeof n.status=="string")n.then(qi,qi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,em(e),e}throw _s=n,tr}}function gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,tr):a}}var _s=null;function tm(){if(_s===null)throw Error(s(459));var e=_s;return _s=null,e}function em(e){if(e===tr||e===bl)throw Error(s(483))}var er=null,uo=0;function Al(e){var n=uo;return uo+=1,er===null&&(er=[]),$p(er,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function nm(e){function n(q,G){if(e){var K=q.deletions;K===null?(q.deletions=[G],q.flags|=16):K.push(G)}}function a(q,G){if(!e)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function o(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function c(q,G){return q=Zi(q,G),q.index=0,q.sibling=null,q}function f(q,G,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<G?(q.flags|=67108866,G):K):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function x(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,G,K,pt){return G===null||G.tag!==6?(G=Ac(K,q.mode,pt),G.return=q,G):(G=c(G,K),G.return=q,G)}function I(q,G,K,pt){var Kt=K.type;return Kt===C?ft(q,G,K.props.children,pt,K.key):G!==null&&(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===J&&gs(Kt)===G.type)?(G=c(G,K.props),co(G,K),G.return=q,G):(G=xl(K.type,K.key,K.props,null,q.mode,pt),co(G,K),G.return=q,G)}function Q(q,G,K,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=Cc(K,q.mode,pt),G.return=q,G):(G=c(G,K.children||[]),G.return=q,G)}function ft(q,G,K,pt,Kt){return G===null||G.tag!==7?(G=fs(K,q.mode,pt,Kt),G.return=q,G):(G=c(G,K),G.return=q,G)}function mt(q,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Ac(""+G,q.mode,K),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return K=xl(G.type,G.key,G.props,null,q.mode,K),co(K,G),K.return=q,K;case b:return G=Cc(G,q.mode,K),G.return=q,G;case J:return G=gs(G),mt(q,G,K)}if(ct(G)||st(G))return G=fs(G,q.mode,K,null),G.return=q,G;if(typeof G.then=="function")return mt(q,Al(G),K);if(G.$$typeof===N)return mt(q,Ml(q,G),K);Cl(q,G)}return null}function tt(q,G,K,pt){var Kt=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Kt!==null?null:T(q,G,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Kt?I(q,G,K,pt):null;case b:return K.key===Kt?Q(q,G,K,pt):null;case J:return K=gs(K),tt(q,G,K,pt)}if(ct(K)||st(K))return Kt!==null?null:ft(q,G,K,pt,null);if(typeof K.then=="function")return tt(q,G,Al(K),pt);if(K.$$typeof===N)return tt(q,G,Ml(q,K),pt);Cl(q,K)}return null}function ot(q,G,K,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(K)||null,T(G,q,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return q=q.get(pt.key===null?K:pt.key)||null,I(G,q,pt,Kt);case b:return q=q.get(pt.key===null?K:pt.key)||null,Q(G,q,pt,Kt);case J:return pt=gs(pt),ot(q,G,K,pt,Kt)}if(ct(pt)||st(pt))return q=q.get(K)||null,ft(G,q,pt,Kt,null);if(typeof pt.then=="function")return ot(q,G,K,Al(pt),Kt);if(pt.$$typeof===N)return ot(q,G,K,Ml(G,pt),Kt);Cl(G,pt)}return null}function Vt(q,G,K,pt){for(var Kt=null,Te=null,qt=G,le=G=0,Se=null;qt!==null&&le<K.length;le++){qt.index>le?(Se=qt,qt=null):Se=qt.sibling;var Ae=tt(q,qt,K[le],pt);if(Ae===null){qt===null&&(qt=Se);break}e&&qt&&Ae.alternate===null&&n(q,qt),G=f(Ae,G,le),Te===null?Kt=Ae:Te.sibling=Ae,Te=Ae,qt=Se}if(le===K.length)return a(q,qt),ye&&Ki(q,le),Kt;if(qt===null){for(;le<K.length;le++)qt=mt(q,K[le],pt),qt!==null&&(G=f(qt,G,le),Te===null?Kt=qt:Te.sibling=qt,Te=qt);return ye&&Ki(q,le),Kt}for(qt=o(qt);le<K.length;le++)Se=ot(qt,q,le,K[le],pt),Se!==null&&(e&&Se.alternate!==null&&qt.delete(Se.key===null?le:Se.key),G=f(Se,G,le),Te===null?Kt=Se:Te.sibling=Se,Te=Se);return e&&qt.forEach(function(ja){return n(q,ja)}),ye&&Ki(q,le),Kt}function $t(q,G,K,pt){if(K==null)throw Error(s(151));for(var Kt=null,Te=null,qt=G,le=G=0,Se=null,Ae=K.next();qt!==null&&!Ae.done;le++,Ae=K.next()){qt.index>le?(Se=qt,qt=null):Se=qt.sibling;var ja=tt(q,qt,Ae.value,pt);if(ja===null){qt===null&&(qt=Se);break}e&&qt&&ja.alternate===null&&n(q,qt),G=f(ja,G,le),Te===null?Kt=ja:Te.sibling=ja,Te=ja,qt=Se}if(Ae.done)return a(q,qt),ye&&Ki(q,le),Kt;if(qt===null){for(;!Ae.done;le++,Ae=K.next())Ae=mt(q,Ae.value,pt),Ae!==null&&(G=f(Ae,G,le),Te===null?Kt=Ae:Te.sibling=Ae,Te=Ae);return ye&&Ki(q,le),Kt}for(qt=o(qt);!Ae.done;le++,Ae=K.next())Ae=ot(qt,q,le,Ae.value,pt),Ae!==null&&(e&&Ae.alternate!==null&&qt.delete(Ae.key===null?le:Ae.key),G=f(Ae,G,le),Te===null?Kt=Ae:Te.sibling=Ae,Te=Ae);return e&&qt.forEach(function(ZS){return n(q,ZS)}),ye&&Ki(q,le),Kt}function Ge(q,G,K,pt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var Kt=K.key;G!==null;){if(G.key===Kt){if(Kt=K.type,Kt===C){if(G.tag===7){a(q,G.sibling),pt=c(G,K.props.children),pt.return=q,q=pt;break t}}else if(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===J&&gs(Kt)===G.type){a(q,G.sibling),pt=c(G,K.props),co(pt,K),pt.return=q,q=pt;break t}a(q,G);break}else n(q,G);G=G.sibling}K.type===C?(pt=fs(K.props.children,q.mode,pt,K.key),pt.return=q,q=pt):(pt=xl(K.type,K.key,K.props,null,q.mode,pt),co(pt,K),pt.return=q,q=pt)}return x(q);case b:t:{for(Kt=K.key;G!==null;){if(G.key===Kt)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(q,G.sibling),pt=c(G,K.children||[]),pt.return=q,q=pt;break t}else{a(q,G);break}else n(q,G);G=G.sibling}pt=Cc(K,q.mode,pt),pt.return=q,q=pt}return x(q);case J:return K=gs(K),Ge(q,G,K,pt)}if(ct(K))return Vt(q,G,K,pt);if(st(K)){if(Kt=st(K),typeof Kt!="function")throw Error(s(150));return K=Kt.call(K),$t(q,G,K,pt)}if(typeof K.then=="function")return Ge(q,G,Al(K),pt);if(K.$$typeof===N)return Ge(q,G,Ml(q,K),pt);Cl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(q,G.sibling),pt=c(G,K),pt.return=q,q=pt):(a(q,G),pt=Ac(K,q.mode,pt),pt.return=q,q=pt),x(q)):a(q,G)}return function(q,G,K,pt){try{uo=0;var Kt=Ge(q,G,K,pt);return er=null,Kt}catch(qt){if(qt===tr||qt===bl)throw qt;var Te=Kn(29,qt,null,q.mode);return Te.lanes=pt,Te.return=q,Te}}}var vs=nm(!0),im=nm(!1),Ua=!1;function Bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=vl(e),Hp(e,null,a),n}return _l(e,o,n,a),vl(e)}function fo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wr(e,a)}}function Vc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Gc=!1;function ho(){if(Gc){var e=$s;if(e!==null)throw e}}function po(e,n,a,o){Gc=!1;var c=e.updateQueue;Ua=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var I=T,Q=I.next;I.next=null,x===null?f=Q:x.next=Q,x=I;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==x&&(T===null?ft.firstBaseUpdate=Q:T.next=Q,ft.lastBaseUpdate=I))}if(f!==null){var mt=c.baseState;x=0,ft=Q=I=null,T=f;do{var tt=T.lane&-536870913,ot=tt!==T.lane;if(ot?(xe&tt)===tt:(o&tt)===tt){tt!==0&&tt===Js&&(Gc=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=e,$t=T;tt=n;var Ge=a;switch($t.tag){case 1:if(Vt=$t.payload,typeof Vt=="function"){mt=Vt.call(Ge,mt,tt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=$t.payload,tt=typeof Vt=="function"?Vt.call(Ge,mt,tt):Vt,tt==null)break t;mt=g({},mt,tt);break t;case 2:Ua=!0}}tt=T.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(Q=ft=ot,I=mt):ft=ft.next=ot,x|=tt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ft===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Ia|=x,e.lanes=x,e.memoizedState=mt}}function am(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)am(a[e],n)}var nr=L(null),Rl=L(0);function rm(e,n){e=oa,gt(Rl,e),gt(nr,n),oa=e|n.baseLanes}function kc(){gt(Rl,oa),gt(nr,nr.current)}function Xc(){oa=Rl.current,nt(nr),nt(Rl)}var Qn=L(null),pi=null;function Oa(e){var n=e.alternate;gt(an,an.current&1),gt(Qn,e),pi===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(pi=e)}function Wc(e){gt(an,an.current),gt(Qn,e),pi===null&&(pi=e)}function om(e){e.tag===22?(gt(an,an.current),gt(Qn,e),pi===null&&(pi=e)):Pa()}function Pa(){gt(an,an.current),gt(Qn,Qn.current)}function Jn(e){nt(Qn),pi===e&&(pi=null),nt(an)}var an=L(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jf(a)||$f(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,re=null,He=null,ln=null,Dl=!1,ir=!1,xs=!1,Ul=0,mo=0,ar=null,Bx=0;function tn(){throw Error(s(321))}function Yc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function qc(e,n,a,o,c,f){return $i=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Xm:uf,xs=!1,f=a(o,c),xs=!1,ir&&(f=um(n,a,o,c)),lm(e),f}function lm(e){P.H=vo;var n=He!==null&&He.next!==null;if($i=0,ln=He=re=null,Dl=!1,mo=0,ar=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&yl(e)&&(un=!0))}function um(e,n,a,o){re=e;var c=0;do{if(ir&&(ar=null),mo=0,ir=!1,25<=c)throw Error(s(301));if(c+=1,ln=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Wm,f=n(a,o)}while(ir);return f}function Hx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?go(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(re.flags|=1024),n}function jc(){var e=Ul!==0;return Ul=0,e}function Zc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Kc(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}$i=0,ln=He=re=null,ir=!1,mo=Ul=0,ar=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?re.memoizedState=ln=e:ln=ln.next=e,ln}function sn(){if(He===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=ln===null?re.memoizedState:ln.next;if(n!==null)ln=n,He=e;else{if(e===null)throw re.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},ln===null?re.memoizedState=ln=e:ln=ln.next=e}return ln}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(e){var n=mo;return mo+=1,ar===null&&(ar=[]),e=$p(ar,e,n),n=re,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Xm:uf),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===N)return Cn(e)}throw Error(s(438,String(e)))}function Qc(e){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=sn();return Jc(n,He,e)}function Jc(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=x=null,I=null,Q=n,ft=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(xe&mt)===mt:($i&mt)===mt){var tt=Q.revertLane;if(tt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Js&&(ft=!0);else if(($i&tt)===tt){Q=Q.next,tt===Js&&(ft=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(T=I=mt,x=f):I=I.next=mt,re.lanes|=tt,Ia|=tt;mt=Q.action,xs&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else tt={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(T=I=tt,x=f):I=I.next=tt,re.lanes|=mt,Ia|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?x=f:I.next=T,!Zn(f,e.memoizedState)&&(un=!0,ft&&(a=$s,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=I,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $c(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);Zn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function cm(e,n,a){var o=re,c=sn(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Zn((He||c).memoizedState,a);if(x&&(c.memoizedState=a,un=!0),c=c.queue,nf(dm.bind(null,o,c,e),[e]),c.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,sr(9,{destroy:void 0},hm.bind(null,o,c,a,n),null),Xe===null)throw Error(s(349));f||($i&127)!==0||fm(o,n,a)}return a}function fm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=Ll(),re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function hm(e,n,a,o){n.value=a,n.getSnapshot=o,pm(n)&&mm(e)}function dm(e,n,a){return a(function(){pm(n)&&mm(e)})}function pm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function mm(e){var n=cs(e,2);n!==null&&Yn(n,e,2)}function tf(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),xs){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function gm(e,n,a,o){return e.baseState=a,Jc(e,He,typeof o=="function"?o:ta)}function Vx(e,n,a,o,c){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,_m(n,f)):(f.next=a.next,n.pending=a.next=f)}}function _m(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var T=a(c,o),I=P.S;I!==null&&I(x,T),vm(e,n,T)}catch(Q){ef(e,n,Q)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(c,o),vm(e,n,f)}catch(Q){ef(e,n,Q)}}function vm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){xm(e,n,o)},function(o){return ef(e,n,o)}):xm(e,n,a)}function xm(e,n,a){n.status="fulfilled",n.value=a,Sm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,_m(e,a)))}function ef(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Sm(n),n=n.next;while(n!==o)}e.action=null}function Sm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ym(e,n){return n}function Mm(e,n){if(ye){var a=Xe.formState;if(a!==null){t:{var o=re;if(ye){if(Ye){e:{for(var c=Ye,f=di;c.nodeType!==8;){if(!f){c=null;break e}if(c=mi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=mi(c.nextSibling),o=c.data==="F!";break t}}wa(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},a.queue=o,a=Vm.bind(null,re,o),o.dispatch=a,o=tf(!1),f=lf.bind(null,re,!1,o.queue),o=Fn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Vx.bind(null,re,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Em(e){var n=sn();return bm(n,He,e)}function bm(e,n,a){if(n=Jc(e,n,ym)[0],e=Ol(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(x){throw x===tr?bl:x}else o=n;n=sn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,sr(9,{destroy:void 0},Gx.bind(null,c,a),null)),[o,f,e]}function Gx(e,n){e.action=n}function Tm(e){var n=sn(),a=He;if(a!==null)return bm(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function sr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=re.updateQueue,n===null&&(n=Ll(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Am(){return sn().memoizedState}function Pl(e,n,a,o){var c=Fn();re.flags|=e,c.memoizedState=sr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Fl(e,n,a,o){var c=sn();o=o===void 0?null:o;var f=c.memoizedState.inst;He!==null&&o!==null&&Yc(o,He.memoizedState.deps)?c.memoizedState=sr(n,f,a,o):(re.flags|=e,c.memoizedState=sr(1|n,f,a,o))}function Cm(e,n){Pl(8390656,8,e,n)}function nf(e,n){Fl(2048,8,e,n)}function kx(e){re.flags|=4;var n=re.updateQueue;if(n===null)n=Ll(),re.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rm(e){var n=sn().memoizedState;return kx({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function wm(e,n){return Fl(4,2,e,n)}function Dm(e,n){return Fl(4,4,e,n)}function Um(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lm(e,n,a){a=a!=null?a.concat([e]):null,Fl(4,4,Um.bind(null,n,e),a)}function af(){}function Nm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Om(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yc(n,o[1]))return o[0];if(o=e(),xs){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function sf(e,n,a){return a===void 0||($i&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Pg(),re.lanes|=e,Ia|=e,a)}function Pm(e,n,a,o){return Zn(a,n)?a:nr.current!==null?(e=sf(e,a,o),Zn(e,n)||(un=!0),e):($i&42)===0||($i&1073741824)!==0&&(xe&261930)===0?(un=!0,e.memoizedState=a):(e=Pg(),re.lanes|=e,Ia|=e,n)}function Fm(e,n,a,o,c){var f=H.p;H.p=f!==0&&8>f?f:8;var x=P.T,T={};P.T=T,lf(e,!1,n,a);try{var I=c(),Q=P.S;if(Q!==null&&Q(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=Ix(I,o);_o(e,n,ft,ei(e))}else _o(e,n,o,ei(e))}catch(mt){_o(e,n,{then:function(){},status:"rejected",reason:mt},ei())}finally{H.p=f,x!==null&&T.types!==null&&(x.types=T.types),P.T=x}}function Xx(){}function rf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=zm(e).queue;Fm(e,c,n,it,a===null?Xx:function(){return Im(e),a(o)})}function zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Im(e){var n=zm(e);n.next===null&&(n=e.alternate.memoizedState),_o(e,n.next.queue,{},ei())}function of(){return Cn(Oo)}function Bm(){return sn().memoizedState}function Hm(){return sn().memoizedState}function Wx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=La(a);var o=Na(n,e,a);o!==null&&(Yn(o,n,a),fo(o,n,a)),n={cache:Pc()},e.payload=n;return}n=n.return}}function Yx(e,n,a){var o=ei();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Gm(n,a):(a=bc(e,n,a,o),a!==null&&(Yn(a,e,o),km(a,n,o)))}function Vm(e,n,a){var o=ei();_o(e,n,a,o)}function _o(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Gm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,Zn(T,x))return _l(e,n,c,0),Xe===null&&gl(),!1}catch{}if(a=bc(e,n,c,o),a!==null)return Yn(a,e,o),km(a,n,o),!0}return!1}function lf(e,n,a,o){if(o={lane:2,revertLane:Hf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=bc(e,a,o,2),n!==null&&Yn(n,e,2)}function zl(e){var n=e.alternate;return e===re||n!==null&&n===re}function Gm(e,n){ir=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function km(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Wr(e,a)}}var vo={readContext:Cn,use:Nl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};vo.useEffectEvent=tn;var Xm={readContext:Cn,use:Nl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Cm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Um.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(xs){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var c=a(n);if(xs){Ft(!0);try{a(n)}finally{Ft(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Yx.bind(null,re,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,a=Vm.bind(null,re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:af,useDeferredValue:function(e,n){var a=Fn();return sf(a,e,n)},useTransition:function(){var e=tf(!1);return e=Fm.bind(null,re,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=re,c=Fn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(xe&127)!==0||fm(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Cm(dm.bind(null,o,f,e),[e]),o.flags|=2048,sr(9,{destroy:void 0},hm.bind(null,o,f,a,n),null),a},useId:function(){var e=Fn(),n=Xe.identifierPrefix;if(ye){var a=Pi,o=Oi;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Bx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:of,useFormState:Mm,useActionState:Mm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lf.bind(null,re,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qc,useCacheRefresh:function(){return Fn().memoizedState=Wx.bind(null,re)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},uf={readContext:Cn,use:Nl,useCallback:Nm,useContext:Cn,useEffect:nf,useImperativeHandle:Lm,useInsertionEffect:wm,useLayoutEffect:Dm,useMemo:Om,useReducer:Ol,useRef:Am,useState:function(){return Ol(ta)},useDebugValue:af,useDeferredValue:function(e,n){var a=sn();return Pm(a,He.memoizedState,e,n)},useTransition:function(){var e=Ol(ta)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:of,useFormState:Em,useActionState:Em,useOptimistic:function(e,n){var a=sn();return gm(a,He,e,n)},useMemoCache:Qc,useCacheRefresh:Hm};uf.useEffectEvent=Rm;var Wm={readContext:Cn,use:Nl,useCallback:Nm,useContext:Cn,useEffect:nf,useImperativeHandle:Lm,useInsertionEffect:wm,useLayoutEffect:Dm,useMemo:Om,useReducer:$c,useRef:Am,useState:function(){return $c(ta)},useDebugValue:af,useDeferredValue:function(e,n){var a=sn();return He===null?sf(a,e,n):Pm(a,He.memoizedState,e,n)},useTransition:function(){var e=$c(ta)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:of,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,n){var a=sn();return He!==null?gm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qc,useCacheRefresh:Hm};Wm.useEffectEvent=Rm;function cf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ff={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ei(),c=La(o);c.payload=n,a!=null&&(c.callback=a),n=Na(e,c,o),n!==null&&(Yn(n,e,o),fo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ei(),c=La(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Na(e,c,o),n!==null&&(Yn(n,e,o),fo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),o=La(a);o.tag=2,n!=null&&(o.callback=n),n=Na(e,o,a),n!==null&&(Yn(n,e,a),fo(n,e,a))}};function Ym(e,n,a,o,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(c,f):!0}function qm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ff.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function jm(e){ml(e)}function Zm(e){console.error(e)}function Km(e){ml(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Qm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function hf(e,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function Jm(e){return e=La(e),e.tag=3,e}function $m(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Qm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Qm(n,a,o),typeof c!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function qx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,c,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Kl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(e,o,c)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(e,o,c)),!1}throw Error(s(435,a.tag))}return zf(e,o,c),Kl(),!1}if(ye)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Dc&&(e=Error(s(422),{cause:o}),ro(ci(e,a)))):(o!==Dc&&(n=Error(s(423),{cause:o}),ro(ci(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ci(o,a),c=hf(e.stateNode,o,c),Vc(e,c),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:o});if(f=ci(f,a),Ao===null?Ao=[f]:Ao.push(f),en!==4&&(en=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=hf(a.stateNode,o,e),Vc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Jm(c),$m(c,e,a,o),Vc(a,c),!1}a=a.return}while(a!==null);return!1}var df=Error(s(461)),un=!1;function Rn(e,n,a,o){n.child=e===null?im(n,null,a,o):vs(n,e.child,a,o)}function tg(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return ps(n),o=qc(e,n,a,x,f,c),T=jc(),e!==null&&!un?(Zc(e,n,c),ea(e,n,c)):(ye&&T&&Rc(n),n.flags|=1,Rn(e,n,o,c),n.child)}function eg(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!Tc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ng(e,n,f,o,c)):(e=xl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!yf(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(x,o)&&e.ref===n.ref)return ea(e,n,c)}return n.flags|=1,e=Zi(f,o),e.ref=n.ref,e.return=n,n.child=e}function ng(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(io(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,yf(e,c))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ea(e,n,c)}return pf(e,n,a,o,c)}function ig(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return ag(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,f!==null?f.cachePool:null),f!==null?rm(n,f):kc(),om(n);else return o=n.lanes=536870912,ag(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(El(n,f.cachePool),rm(n,f),Pa(),n.memoizedState=null):(e!==null&&El(n,null),kc(),Pa());return Rn(e,n,c,a),n.child}function xo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ag(e,n,a,o,c){var f=zc();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&El(n,null),kc(),om(n),e!==null&&Qs(e,n,o,!0),n.childLanes=c,null}function Bl(e,n){return n=Vl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function sg(e,n,a){return vs(n,e.child,null,a),e=Bl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function jx(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ye){if(o.mode==="hidden")return e=Bl(n,o),n.lanes=536870912,xo(null,e);if(Wc(n),(e=Ye)?(e=__(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,An=n,Ye=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return Bl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Wc(n),c)if(n.flags&256)n.flags&=-257,n=sg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Qs(e,n,a,!1),c=(a&e.childLanes)!==0,un||c){if(o=Xe,o!==null&&(x=Fs(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,cs(e,x),Yn(o,e,x),df;Kl(),n=sg(e,n,a)}else e=f.treeContext,Ye=mi(x.nextSibling),An=n,ye=!0,Ra=null,di=!1,e!==null&&Wp(n,e),n=Bl(n,o),n.flags|=4096;return n}return e=Zi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function pf(e,n,a,o,c){return ps(n),a=qc(e,n,a,o,void 0,c),o=jc(),e!==null&&!un?(Zc(e,n,c),ea(e,n,c)):(ye&&o&&Rc(n),n.flags|=1,Rn(e,n,a,c),n.child)}function rg(e,n,a,o,c,f){return ps(n),n.updateQueue=null,a=um(n,o,a,c),lm(e),o=jc(),e!==null&&!un?(Zc(e,n,f),ea(e,n,f)):(ye&&o&&Rc(n),n.flags|=1,Rn(e,n,a,f),n.child)}function og(e,n,a,o,c){if(ps(n),n.stateNode===null){var f=qs,x=a.contextType;typeof x=="object"&&x!==null&&(f=Cn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ff,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Bc(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Cn(x):qs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(cf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&ff.enqueueReplaceState(f,f.state,null),po(n,o,f,c),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=Ss(a,T);f.props=I;var Q=f.context,ft=a.contextType;x=qs,typeof ft=="object"&&ft!==null&&(x=Cn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==x)&&qm(n,f,o,x),Ua=!1;var tt=n.memoizedState;f.state=tt,po(n,o,f,c),ho(),Q=n.memoizedState,T||tt!==Q||Ua?(typeof mt=="function"&&(cf(n,a,mt,o),Q=n.memoizedState),(I=Ua||Ym(n,a,I,o,tt,Q,x))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=Q),f.props=o,f.state=Q,f.context=x,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Hc(e,n),x=n.memoizedProps,ft=Ss(a,x),f.props=ft,mt=n.pendingProps,tt=f.context,Q=a.contextType,I=qs,typeof Q=="object"&&Q!==null&&(I=Cn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==mt||tt!==I)&&qm(n,f,o,I),Ua=!1,tt=n.memoizedState,f.state=tt,po(n,o,f,c),ho();var ot=n.memoizedState;x!==mt||tt!==ot||Ua||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof T=="function"&&(cf(n,a,T,o),ot=n.memoizedState),(ft=Ua||Ym(n,a,ft,o,tt,ot,I)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=I,o=ft):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Hl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=vs(n,e.child,null,c),n.child=vs(n,null,a,c)):Rn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ea(e,n,c),e}function lg(e,n,a,o){return hs(),n.flags|=256,Rn(e,n,a,o),n.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(e){return{baseLanes:e,cachePool:Qp()}}function _f(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function ug(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(ye){if(c?Oa(n):Pa(),(e=Ye)?(e=__(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,An=n,Ye=null)):e=null,e===null)throw wa(n);return $f(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(Pa(),c=n.mode,T=Vl({mode:"hidden",children:T},c),o=fs(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=gf(a),o.childLanes=_f(e,x,a),n.memoizedState=mf,xo(null,o)):(Oa(n),vf(n,T))}var I=e.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=xf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),T=o.fallback,c=n.mode,o=Vl({mode:"visible",children:o.children},c),T=fs(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,vs(n,e.child,null,a),o=n.child,o.memoizedState=gf(a),o.childLanes=_f(e,x,a),n.memoizedState=mf,n=xo(null,o));else if(Oa(n),$f(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var Q=x.dgst;x=Q,o=Error(s(419)),o.stack="",o.digest=x,ro({value:o,source:null,stack:null}),n=xf(e,n,a)}else if(un||Qs(e,n,a,!1),x=(a&e.childLanes)!==0,un||x){if(x=Xe,x!==null&&(o=Fs(x,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,cs(e,o),Yn(x,e,o),df;Jf(T)||Kl(),n=xf(e,n,a)}else Jf(T)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ye=mi(T.nextSibling),An=n,ye=!0,Ra=null,di=!1,e!==null&&Wp(n,e),n=vf(n,o.children),n.flags|=4096);return n}return c?(Pa(),T=o.fallback,c=n.mode,I=e.child,Q=I.sibling,o=Zi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,Q!==null?T=Zi(Q,T):(T=fs(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,xo(null,o),o=n.child,T=e.child.memoizedState,T===null?T=gf(a):(c=T.cachePool,c!==null?(I=on._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Qp(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=_f(e,x,a),n.memoizedState=mf,xo(e.child,o)):(Oa(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function vf(e,n){return n=Vl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Vl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function xf(e,n,a){return vs(n,e.child,null,a),e=vf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Nc(e.return,n,a)}function Sf(e,n,a,o,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function fg(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var x=an.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,gt(an,x),Rn(e,n,o,a),o=ye?so:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,a,n);else if(e.tag===19)cg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Sf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&wl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Sf(n,!0,a,null,f,o);break;case"together":Sf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function Zx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Da(n,on,e.memoizedState.cache),hs();break;case 27:case 5:Bt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Wc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ug(e,n,a):(Oa(n),e=ea(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return fg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt(an,an.current),o)break;return null;case 22:return n.lanes=0,ig(e,n,a,n.pendingProps);case 24:Da(n,on,e.memoizedState.cache)}return ea(e,n,a)}function hg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!yf(e,a)&&(n.flags&128)===0)return un=!1,Zx(e,n,a);un=(e.flags&131072)!==0}else un=!1,ye&&(n.flags&1048576)!==0&&Xp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=gs(n.elementType),n.type=e,typeof e=="function")Tc(e)?(o=Ss(e,o),n.tag=1,n=og(null,n,e,o,a)):(n.tag=0,n=pf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===O){n.tag=11,n=tg(null,n,e,o,a);break t}else if(c===F){n.tag=14,n=eg(null,n,e,o,a);break t}}throw n=dt(e)||e,Error(s(306,n,""))}}return n;case 0:return pf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Ss(o,n.pendingProps),og(e,n,o,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Hc(e,n),po(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Da(n,on,o),o!==f.cache&&Oc(n,[on],a,!0),ho(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=lg(e,n,o,a);break t}else if(o!==c){c=ci(Error(s(424)),n),ro(c),n=lg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ye=mi(e.firstChild),An=n,ye=!0,Ra=null,di=!0,a=im(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),o===c){n=ea(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=E_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,e=n.pendingProps,o=iu(et.current).createElement(a),o[rn]=n,o[Sn]=e,wn(o,a,e),A(o),n.stateNode=o):n.memoizedState=E_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Bt(n),e===null&&ye&&(o=n.stateNode=S_(n.type,n.pendingProps,et.current),An=n,di=!0,c=Ye,ka(n.type)?(th=c,Ye=mi(o.firstChild)):Ye=c),Rn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ye&&((c=o=Ye)&&(o=TS(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,An=n,Ye=mi(o.firstChild),di=!1,c=!0):c=!1),c||wa(n)),Bt(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,Zf(c,f)?o=null:x!==null&&Zf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=qc(e,n,Hx,null,null,a),Oo._currentValue=c),Hl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&ye&&((e=a=Ye)&&(a=AS(a,n.pendingProps,di),a!==null?(n.stateNode=a,An=n,Ye=null,e=!0):e=!1),e||wa(n)),null;case 13:return ug(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=vs(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return tg(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Da(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ps(n),c=Cn(c),o=o(c),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return eg(e,n,n.type,n.pendingProps,a);case 15:return ng(e,n,n.type,n.pendingProps,a);case 19:return fg(e,n,a);case 31:return jx(e,n,a);case 22:return ig(e,n,a,n.pendingProps);case 24:return ps(n),o=Cn(on),e===null?(c=zc(),c===null&&(c=Xe,f=Pc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Bc(n),Da(n,on,c)):((e.lanes&a)!==0&&(Hc(e,n),po(n,null,null,a),ho()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Da(n,on,o)):(o=f.cache,Da(n,on,o),o!==c.cache&&Oc(n,[on],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function Mf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Bg())e.flags|=8192;else throw _s=Tl,Ic}else e.flags&=-16777217}function dg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!R_(n))if(Bg())e.flags|=8192;else throw _s=Tl,Ic}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,ur|=n)}function So(e,n){if(!ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Kx(e,n,a){var o=n.pendingProps;switch(wc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(on),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ks(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uc())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(na(n),f!==null?(qe(n),dg(n,f)):(qe(n),Mf(n,c,null,o,a))):f?f!==e.memoizedState?(na(n),qe(n),dg(n,f)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&na(n),qe(n),Mf(n,c,e,o,a)),null;case 27:if(pe(n),a=et.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=Tt.current,Ks(n)?Yp(n):(e=S_(c,o,a),n.stateNode=e,na(n))}return qe(n),null;case 5:if(pe(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=Tt.current,Ks(n))Yp(n);else{var x=iu(et.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}f[rn]=n,f[Sn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(wn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&na(n)}}return qe(n),Mf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,Ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=An,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||u_(e.nodeValue,a)),e||wa(n,!0)}else e=iu(e).createTextNode(o),e[rn]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ks(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=Uc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Uc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),qe(n),null);case 4:return Gt(),e===null&&Xf(n.stateNode.containerInfo),qe(n),null;case 10:return Ji(n.type),qe(n),null;case 19:if(nt(an),o=n.memoizedState,o===null)return qe(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)So(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,So(o,!1),e=f.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Vp(a,e),a=a.sibling;return gt(an,an.current&1|2),ye&&Ki(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>ql&&(n.flags|=128,c=!0,So(o,!1),n.lanes=4194304)}else{if(!c)if(e=wl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!ye)return qe(n),null}else 2*E()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,c=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=an.current,gt(an,c?a&1|2:a&1),ye&&Ki(n,o.treeForkCount),e):(qe(n),null);case 22:case 23:return Jn(n),Xc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(on),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Qx(e,n){switch(wc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(on),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pe(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(an),null;case 4:return Gt(),null;case 10:return Ji(n.type),null;case 22:case 23:return Jn(n),Xc(),e!==null&&nt(ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(on),null;case 25:return null;default:return null}}function pg(e,n){switch(wc(n),n.tag){case 3:Ji(on),Gt();break;case 26:case 27:case 5:pe(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:nt(an);break;case 10:Ji(n.type);break;case 22:case 23:Jn(n),Xc(),e!==null&&nt(ms);break;case 24:Ji(on)}}function yo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function Fa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var I=a,Q=T;try{Q()}catch(ft){Ie(c,I,ft)}}}o=o.next}while(o!==f)}}catch(ft){Ie(n,n.return,ft)}}function mg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{sm(n,a)}catch(o){Ie(e,e.return,o)}}}function gg(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,n,o)}}function Mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ie(e,n,c)}}function Fi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ie(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(e,n,c)}else a.current=null}function _g(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ie(e,e.return,c)}}function Ef(e,n,a){try{var o=e.stateNode;xS(o,e.type,a,n),o[Sn]=n}catch(c){Ie(e,e.return,c)}}function vg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function bf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||vg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Tf(e,n,a),e=e.sibling;e!==null;)Tf(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function xg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);wn(n,o,a),n[rn]=e,n[Sn]=a}catch(f){Ie(e,e.return,f)}}var ia=!1,cn=!1,Af=!1,Sg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Jx(e,n){if(e=e.containerInfo,qf=cu,e=Lp(e),vc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,I=-1,Q=0,ft=0,mt=e,tt=null;e:for(;;){for(var ot;mt!==a||c!==0&&mt.nodeType!==3||(T=x+c),mt!==f||o!==0&&mt.nodeType!==3||(I=x+o),mt.nodeType===3&&(x+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===e)break e;if(tt===a&&++Q===c&&(T=x),tt===f&&++ft===o&&(I=x),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(jf={focusedElem:e,selectionRange:a},cu=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Vt=Ss(a.type,c);e=o.getSnapshotBeforeUpdate(Vt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ie(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function yg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),o&4&&yo(5,a);break;case 1:if(sa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ie(a,a.return,x)}else{var c=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(a,a.return,x)}}o&64&&mg(a),o&512&&Mo(a,a.return);break;case 3:if(sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(e,n)}catch(x){Ie(a,a.return,x)}}break;case 27:n===null&&o&4&&xg(a);case 26:case 5:sa(e,a),n===null&&o&4&&_g(a),o&512&&Mo(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),o&4&&bg(e,a);break;case 13:sa(e,a),o&4&&Tg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=oS.bind(null,a),CS(e,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||cn,c=ia;var f=cn;ia=o,(cn=n)&&!f?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=c,cn=f}break;case 30:break;default:sa(e,a)}}function Mg(e){var n=e.alternate;n!==null&&(e.alternate=null,Mg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Gn=!1;function aa(e,n,a){for(a=a.child;a!==null;)Eg(e,n,a),a=a.sibling}function Eg(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:cn||Fi(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Fi(a,n);var o=Ke,c=Gn;ka(a.type)&&(Ke=a.stateNode,Gn=!1),aa(e,n,a),Uo(a.stateNode),Ke=o,Gn=c;break;case 5:cn||Fi(a,n);case 6:if(o=Ke,c=Gn,Ke=null,aa(e,n,a),Ke=o,Gn=c,Ke!==null)if(Gn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Ke!==null&&(Gn?(e=Ke,m_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_r(e)):m_(Ke,a.stateNode));break;case 4:o=Ke,c=Gn,Ke=a.stateNode.containerInfo,Gn=!0,aa(e,n,a),Ke=o,Gn=c;break;case 0:case 11:case 14:case 15:Fa(2,a,n),cn||Fa(4,a,n),aa(e,n,a);break;case 1:cn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&gg(a,n,o)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:cn=(o=cn)||a.memoizedState!==null,aa(e,n,a),cn=o;break;default:aa(e,n,a)}}function bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(a){Ie(n,n.return,a)}}}function Tg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(a){Ie(n,n.return,a)}}function $x(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Sg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Sg),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=$x(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=lS.bind(null,e,o);o.then(c,c)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(ka(T.type)){Ke=T.stateNode,Gn=!1;break t}break;case 5:Ke=T.stateNode,Gn=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,Gn=!0;break t}T=T.return}if(Ke===null)throw Error(s(160));Eg(f,x,c),Ke=null,Gn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ag(n,e),n=n.sibling}var bi=null;function Ag(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),o&4&&(Fa(3,e,e.return),yo(3,e),Fa(5,e,e.return));break;case 1:kn(n,e),Xn(e),o&512&&(cn||a===null||Fi(a,a.return)),o&64&&ia&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=bi;if(kn(n,e),Xn(e),o&512&&(cn||a===null||Fi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ss]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),wn(f,o,a),f[rn]=e,A(f),o=f;break t;case"link":var x=A_("link","href",c).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(o),wn(f,o,a),c.head.appendChild(f);break;case"meta":if(x=A_("meta","content",c).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(o),wn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[rn]=e,A(f),o=f}e.stateNode=o}else C_(c,e.type,e.stateNode);else e.stateNode=T_(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?C_(c,e.type,e.stateNode):T_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),o&512&&(cn||a===null||Fi(a,a.return)),a!==null&&o&4&&Ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),o&512&&(cn||a===null||Fi(a,a.return)),e.flags&32){c=e.stateNode;try{hn(c,"")}catch(Vt){Ie(e,e.return,Vt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Ef(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Af=!0);break;case 6:if(kn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Vt){Ie(e,e.return,Vt)}}break;case 3:if(ru=null,c=bi,bi=au(n.containerInfo),kn(n,e),bi=c,Xn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_r(n.containerInfo)}catch(Vt){Ie(e,e.return,Vt)}Af&&(Af=!1,Cg(e));break;case 4:o=bi,bi=au(e.stateNode.containerInfo),kn(n,e),Xn(e),bi=o;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=ia,ft=cn;if(ia=Q||c,cn=ft||I,kn(n,e),cn=ft,ia=Q,Xn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||ia||cn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=I.stateNode;var mt=I.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Vt){Ie(I,I.return,Vt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Vt){Ie(I,I.return,Vt)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;c?g_(ot,!0):g_(I.stateNode,!1)}catch(Vt){Ie(I,I.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(e,a))));break;case 19:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(vg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=bf(e);kl(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(hn(x,""),a.flags&=-33);var T=bf(e);kl(e,T,x);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=bf(e);Tf(e,Q,I);break;default:throw Error(s(161))}}catch(ft){Ie(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)yg(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),ys(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&gg(n,n.return,a),ys(n);break;case 27:Uo(n.stateNode);case 26:case 5:Fi(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ra(c,f,a),yo(4,f);break;case 1:if(ra(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ie(o,o.return,Q)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)am(I[c],T)}catch(Q){Ie(o,o.return,Q)}}a&&x&64&&mg(f),Mo(f,f.return);break;case 27:xg(f);case 26:case 5:ra(c,f,a),a&&o===null&&x&4&&_g(f),Mo(f,f.return);break;case 12:ra(c,f,a);break;case 31:ra(c,f,a),a&&x&4&&bg(c,f);break;case 13:ra(c,f,a),a&&x&4&&Tg(c,f);break;case 22:f.memoizedState===null&&ra(c,f,a),Mo(f,f.return);break;case 30:break;default:ra(c,f,a)}n=n.sibling}}function Cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function Rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e))}function Ti(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rg(e,n,a,o),n=n.sibling}function Rg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,o),c&2048&&yo(9,n);break;case 1:Ti(e,n,a,o);break;case 3:Ti(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e)));break;case 12:if(c&2048){Ti(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ie(n,n.return,I)}}else Ti(e,n,a,o);break;case 31:Ti(e,n,a,o);break;case 13:Ti(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,o):Eo(e,n):f._visibility&2?Ti(e,n,a,o):(f._visibility|=2,rr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Cf(x,n);break;case 24:Ti(e,n,a,o),c&2048&&Rf(n.alternate,n);break;default:Ti(e,n,a,o)}}function rr(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,T=a,I=o,Q=x.flags;switch(x.tag){case 0:case 11:case 15:rr(f,x,T,I,c),yo(8,x);break;case 23:break;case 22:var ft=x.stateNode;x.memoizedState!==null?ft._visibility&2?rr(f,x,T,I,c):Eo(f,x):(ft._visibility|=2,rr(f,x,T,I,c)),c&&Q&2048&&Cf(x.alternate,x);break;case 24:rr(f,x,T,I,c),c&&Q&2048&&Rf(x.alternate,x);break;default:rr(f,x,T,I,c)}n=n.sibling}}function Eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:Eo(a,o),c&2048&&Cf(o.alternate,o);break;case 24:Eo(a,o),c&2048&&Rf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function or(e,n,a){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)wg(e,n,a),e=e.sibling}function wg(e,n,a){switch(e.tag){case 26:or(e,n,a),e.flags&bo&&e.memoizedState!==null&&BS(a,bi,e.memoizedState,e.memoizedProps);break;case 5:or(e,n,a);break;case 3:case 4:var o=bi;bi=au(e.stateNode.containerInfo),or(e,n,a),bi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,or(e,n,a),bo=o):or(e,n,a));break;default:or(e,n,a)}}function Dg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function To(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Lg(o,e)}Dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):To(e);break;default:To(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Lg(o,e)}Dg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function Lg(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=e;_n!==null;){o=_n;var c=o.sibling,f=o.return;if(Mg(o),o===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var tS={getCacheForType:function(e){var n=Cn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(on).controller.signal}},eS=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,ge=null,xe=0,ze=0,$n=null,za=!1,lr=!1,wf=!1,oa=0,en=0,Ia=0,Ms=0,Df=0,ti=0,ur=0,Ao=null,Wn=null,Uf=!1,Yl=0,Ng=0,ql=1/0,jl=null,Ba=null,dn=0,Ha=null,cr=null,la=0,Lf=0,Nf=null,Og=null,Co=0,Of=null;function ei(){return(Le&2)!==0&&xe!==0?xe&-xe:P.T!==null?Hf():qr()}function Pg(){if(ti===0)if((xe&536870912)===0||ye){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function Yn(e,n,a){(e===Xe&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(fr(e,0),Va(e,xe,ti,!1)),Un(e,a),((Le&2)===0||e!==Xe)&&(e===Xe&&((Le&2)===0&&(Ms|=a),en===4&&Va(e,xe,ti,!1)),zi(e))}function Fg(e,n,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),c=o?aS(e,n):Ff(e,n,!0),f=o;do{if(c===0){lr&&!o&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!nS(a)){c=Ff(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=e;c=Ao;var I=T.current.memoizedState.isDehydrated;if(I&&(fr(T,x).flags|=256),x=Ff(T,x,!1),x!==2){if(wf&&!I){T.errorRecoveryDisabledLanes|=f,Ms|=f,c=4;break t}f=Wn,Wn=c,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){fr(e,0),Va(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(o,n,ti,!za);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Yl+300-E(),10<c)){if(Va(o,n,ti,!za),_t(o,0,!0)!==0)break t;la=n,o.timeoutHandle=d_(zg.bind(null,o,a,Wn,jl,Uf,n,ti,Ms,ur,za,f,"Throttled",-0,0),c);break t}zg(o,a,Wn,jl,Uf,n,ti,Ms,ur,za,f,null,-0,0)}}break}while(!0);zi(e)}function zg(e,n,a,o,c,f,x,T,I,Q,ft,mt,tt,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},wg(n,f,mt);var Vt=(f&62914560)===f?Yl-E():(f&4194048)===f?Ng-E():0;if(Vt=HS(mt,Vt),Vt!==null){la=f,e.cancelPendingCommit=Vt(Wg.bind(null,e,n,f,a,o,c,x,T,I,ft,mt,null,tt,ot)),Va(e,f,x,!Q);return}}Wg(e,n,f,a,o,c,x,T,I)}function nS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,o){n&=~Df,n&=~Ms,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),x=1<<f;o[f]=-1,c&=~x}a!==0&&rl(e,a,n)}function Zl(){return(Le&6)===0?(Ro(0),!1):!0}function Pf(){if(ge!==null){if(ze===0)var e=ge.return;else e=ge,Qi=ds=null,Kc(e),er=null,uo=0,e=ge;for(;e!==null;)pg(e.alternate,e),e=e.return;ge=null}}function fr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,MS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Pf(),Xe=e,ge=a=Zi(e.current,null),xe=n,ze=0,$n=null,za=!1,lr=At(e,n),wf=!1,ur=ti=Df=Ms=Ia=en=0,Wn=Ao=null,Uf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ot(o),f=1<<c;n|=e[c],o&=~f}return oa=n,gl(),a}function Ig(e,n){re=null,P.H=vo,n===tr||n===bl?(n=tm(),ze=3):n===Ic?(n=tm(),ze=4):ze=n===df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ge===null&&(en=1,Il(e,ci(n,e.current)))}function Bg(){var e=Qn.current;return e===null?!0:(xe&4194048)===xe?pi===null:(xe&62914560)===xe||(xe&536870912)!==0?e===pi:!1}function Hg(){var e=P.H;return P.H=vo,e===null?vo:e}function Vg(){var e=P.A;return P.A=tS,e}function Kl(){en=4,za||(xe&4194048)!==xe&&Qn.current!==null||(lr=!0),(Ia&134217727)===0&&(Ms&134217727)===0||Xe===null||Va(Xe,xe,ti,!1)}function Ff(e,n,a){var o=Le;Le|=2;var c=Hg(),f=Vg();(Xe!==e||xe!==n)&&(jl=null,fr(e,n)),n=!1;var x=en;t:do try{if(ze!==0&&ge!==null){var T=ge,I=$n;switch(ze){case 8:Pf(),x=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var Q=ze;if(ze=0,$n=null,hr(e,T,I,Q),a&&lr){x=0;break t}break;default:Q=ze,ze=0,$n=null,hr(e,T,I,Q)}}iS(),x=en;break}catch(ft){Ig(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Qi=ds=null,Le=o,P.H=c,P.A=f,ge===null&&(Xe=null,xe=0,gl()),x}function iS(){for(;ge!==null;)Gg(ge)}function aS(e,n){var a=Le;Le|=2;var o=Hg(),c=Vg();Xe!==e||xe!==n?(jl=null,ql=E()+500,fr(e,n)):lr=At(e,n);t:do try{if(ze!==0&&ge!==null){n=ge;var f=$n;e:switch(ze){case 1:ze=0,$n=null,hr(e,n,f,1);break;case 2:case 9:if(Jp(f)){ze=0,$n=null,kg(n);break}n=function(){ze!==2&&ze!==9||Xe!==e||(ze=7),zi(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Jp(f)?(ze=0,$n=null,kg(n)):(ze=0,$n=null,hr(e,n,f,7));break;case 5:var x=null;switch(ge.tag){case 26:x=ge.memoizedState;case 5:case 27:var T=ge;if(x?R_(x):T.stateNode.complete){ze=0,$n=null;var I=T.sibling;if(I!==null)ge=I;else{var Q=T.return;Q!==null?(ge=Q,Ql(Q)):ge=null}break e}}ze=0,$n=null,hr(e,n,f,5);break;case 6:ze=0,$n=null,hr(e,n,f,6);break;case 8:Pf(),en=6;break t;default:throw Error(s(462))}}sS();break}catch(ft){Ig(e,ft)}while(!0);return Qi=ds=null,P.H=o,P.A=c,Le=a,ge!==null?0:(Xe=null,xe=0,gl(),en)}function sS(){for(;ge!==null&&!Yt();)Gg(ge)}function Gg(e){var n=hg(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?Ql(e):ge=n}function kg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=rg(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=rg(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Kc(n);default:pg(a,n),n=ge=Vp(n,oa),n=hg(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?Ql(e):ge=n}function hr(e,n,a,o){Qi=ds=null,Kc(n),er=null,uo=0;var c=n.return;try{if(qx(e,c,n,a,xe)){en=1,Il(e,ci(a,e.current)),ge=null;return}}catch(f){if(c!==null)throw ge=c,f;en=1,Il(e,ci(a,e.current)),ge=null;return}n.flags&32768?(ye||o===1?e=!0:lr||(xe&536870912)!==0?e=!1:(za=e=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Xg(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){Xg(n,za);return}e=n.return;var a=Kx(n.alternate,n,oa);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);en===0&&(en=5)}function Xg(e,n){do{var a=Qx(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);en=6,ge=null}function Wg(e,n,a,o,c,f,x,T,I){e.cancelPendingCommit=null;do Jl();while(dn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ec,Si(e,a,f,x,T,I),e===Xe&&(ge=Xe=null,xe=0),cr=n,Ha=e,la=a,Lf=f,Nf=c,Og=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uS(lt,function(){return Kg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=H.p,H.p=2,x=Le,Le|=4;try{Jx(e,n,a)}finally{Le=x,H.p=c,P.T=o}}dn=1,Yg(),qg(),jg()}}function Yg(){if(dn===1){dn=0;var e=Ha,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var c=Le;Le|=4;try{Ag(n,e);var f=jf,x=Lp(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Up(T.ownerDocument.documentElement,T)){if(I!==null&&vc(T)){var Q=I.start,ft=I.end;if(ft===void 0&&(ft=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ft,T.value.length);else{var mt=T.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Vt=T.textContent.length,$t=Math.min(I.start,Vt),Ge=I.end===void 0?$t:Math.min(I.end,Vt);!ot.extend&&$t>Ge&&(x=Ge,Ge=$t,$t=x);var q=Dp(T,$t),G=Dp(T,Ge);if(q&&G&&(ot.rangeCount!==1||ot.anchorNode!==q.node||ot.anchorOffset!==q.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var K=mt.createRange();K.setStart(q.node,q.offset),ot.removeAllRanges(),$t>Ge?(ot.addRange(K),ot.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),ot.addRange(K))}}}}for(mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}cu=!!qf,jf=qf=null}finally{Le=c,H.p=o,P.T=a}}e.current=n,dn=2}}function qg(){if(dn===2){dn=0;var e=Ha,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var c=Le;Le|=4;try{yg(e,n.alternate,n)}finally{Le=c,H.p=o,P.T=a}}dn=3}}function jg(){if(dn===4||dn===3){dn=0,U();var e=Ha,n=cr,a=la,o=Og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,cr=Ha=null,Zg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ba=null),zs(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=H.p,H.p=2,P.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var T=o[x];f(T.value,{componentStack:T.stack})}}finally{P.T=n,H.p=c}}(la&3)!==0&&Jl(),zi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Of?Co++:(Co=0,Of=e):Co=0,Ro(0)}}function Zg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oo(n)))}function Jl(){return Yg(),qg(),jg(),Kg()}function Kg(){if(dn!==5)return!1;var e=Ha,n=Lf;Lf=0;var a=zs(la),o=P.T,c=H.p;try{H.p=32>a?32:a,P.T=null,a=Nf,Nf=null;var f=Ha,x=la;if(dn=0,cr=Ha=null,la=0,(Le&6)!==0)throw Error(s(331));var T=Le;if(Le|=4,Ug(f.current),Rg(f,f.current,x,a),Le=T,Ro(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{H.p=c,P.T=o,Zg(e,n)}}function Qg(e,n,a){n=ci(a,n),n=hf(e.stateNode,n,2),e=Na(e,n,2),e!==null&&(Un(e,2),zi(e))}function Ie(e,n,a){if(e.tag===3)Qg(e,e,a);else for(;n!==null;){if(n.tag===3){Qg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ba===null||!Ba.has(o))){e=ci(a,e),a=Jm(2),o=Na(n,a,2),o!==null&&($m(a,o,n,e),Un(o,2),zi(o));break}}n=n.return}}function zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new eS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(wf=!0,c.add(a),e=rS.bind(null,e,n,a),n.then(e,e))}function rS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(xe&a)===a&&(en===4||en===3&&(xe&62914560)===xe&&300>E()-Yl?(Le&2)===0&&fr(e,0):Df|=a,ur===xe&&(ur=0)),zi(e)}function Jg(e,n){n===0&&(n=Pe()),e=cs(e,n),e!==null&&(Un(e,n),zi(e))}function oS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Jg(e,a)}function lS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Jg(e,a)}function uS(e,n){return Me(e,n)}var $l=null,dr=null,If=!1,tu=!1,Bf=!1,Ga=0;function zi(e){e!==dr&&e.next===null&&(dr===null?$l=dr=e:dr=dr.next=e),tu=!0,If||(If=!0,fS())}function Ro(e,n){if(!Bf&&tu){Bf=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var x=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,n_(o,f))}else f=xe,f=_t(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||At(o,f)||(a=!0,n_(o,f));o=o.next}while(a);Bf=!1}}function cS(){$g()}function $g(){tu=If=!1;var e=0;Ga!==0&&yS()&&(e=Ga);for(var n=E(),a=null,o=$l;o!==null;){var c=o.next,f=t_(o,n);f===0?(o.next=null,a===null?$l=c:a.next=c,c===null&&(dr=a)):(a=o,(e!==0||(f&3)!==0)&&(tu=!0)),o=c}dn!==0&&dn!==5||Ro(e),Ga!==0&&(Ga=0)}function t_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ot(f),T=1<<x,I=c[x];I===-1?((T&a)===0||(T&o)!==0)&&(c[x]=ne(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xe,a=xe,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ne(o),zs(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Ct;break;default:a=lt}return o=e_.bind(null,e),a=Me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ne(o),e.callbackPriority=2,e.callbackNode=null,2}function e_(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=xe;return o=_t(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Fg(e,o,n),t_(e,E()),e.callbackNode!=null&&e.callbackNode===a?e_.bind(null,e):null)}function n_(e,n){if(Jl())return null;Fg(e,n,!0)}function fS(){ES(function(){(Le&6)!==0?Me(ht,cS):$g()})}function Hf(){if(Ga===0){var e=Js;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Ga=e}return Ga}function i_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function a_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function hS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=i_((c[Sn]||null).action),x=o.submitter;x&&(n=(n=x[Sn]||null)?i_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new hl("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ga!==0){var I=x?a_(c,x):new FormData(c);rf(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=x?a_(c,x):new FormData(c),rf(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Vf=0;Vf<Mc.length;Vf++){var Gf=Mc[Vf],dS=Gf.toLowerCase(),pS=Gf[0].toUpperCase()+Gf.slice(1);Ei(dS,"on"+pS)}Ei(Pp,"onAnimationEnd"),Ei(Fp,"onAnimationIteration"),Ei(zp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Dx,"onTransitionRun"),Ei(Ux,"onTransitionStart"),Ei(Lx,"onTransitionCancel"),Ei(Ip,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function s_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],I=T.instance,Q=T.currentTarget;if(T=T.listener,I!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Q;try{f(c)}catch(ft){ml(ft)}c.currentTarget=null,f=I}else for(x=0;x<o.length;x++){if(T=o[x],I=T.instance,Q=T.currentTarget,T=T.listener,I!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Q;try{f(c)}catch(ft){ml(ft)}c.currentTarget=null,f=I}}}}function _e(e,n){var a=n[Is];a===void 0&&(a=n[Is]=new Set);var o=e+"__bubble";a.has(o)||(r_(n,e,2,!1),a.add(o))}function kf(e,n,a){var o=0;n&&(o|=4),r_(a,e,o,n)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Xf(e){if(!e[eu]){e[eu]=!0,Y.forEach(function(a){a!=="selectionchange"&&(mS.has(a)||kf(a,!1,e),kf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[eu]||(n[eu]=!0,kf("selectionchange",!1,n))}}function r_(e,n,a,o){switch(P_(n)){case 2:var c=kS;break;case 8:c=XS;break;default:c=sh}a=c.bind(null,n,a,e),c=void 0,!uc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Wf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=o.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=Ea(T),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){o=f=x;continue t}T=T.parentNode}}o=o.return}fp(function(){var Q=f,ft=oc(a),mt=[];t:{var tt=Bp.get(e);if(tt!==void 0){var ot=hl,Vt=e;switch(e){case"keypress":if(cl(a)===0)break t;case"keydown":case"keyup":ot=lx;break;case"focusin":Vt="focus",ot=dc;break;case"focusout":Vt="blur",ot=dc;break;case"beforeblur":case"afterblur":ot=dc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=fx;break;case Pp:case Fp:case zp:ot=$v;break;case Ip:ot=dx;break;case"scroll":case"scrollend":ot=jv;break;case"wheel":ot=mx;break;case"copy":case"cut":case"paste":ot=ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=gp;break;case"toggle":case"beforetoggle":ot=_x}var $t=(n&4)!==0,Ge=!$t&&(e==="scroll"||e==="scrollend"),q=$t?tt!==null?tt+"Capture":null:tt;$t=[];for(var G=Q,K;G!==null;){var pt=G;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||q===null||(pt=Kr(G,q),pt!=null&&$t.push(Do(G,pt,K))),Ge)break;G=G.return}0<$t.length&&(tt=new ot(tt,Vt,null,a,ft),mt.push({event:tt,listeners:$t}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&a!==rc&&(Vt=a.relatedTarget||a.fromElement)&&(Ea(Vt)||Vt[yi]))break t;if((ot||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=Q,Vt=Vt?Ea(Vt):null,Vt!==null&&(Ge=u(Vt),$t=Vt.tag,Vt!==Ge||$t!==5&&$t!==27&&$t!==6)&&(Vt=null)):(ot=null,Vt=Q),ot!==Vt)){if($t=pp,pt="onMouseLeave",q="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=gp,pt="onPointerLeave",q="onPointerEnter",G="pointer"),Ge=ot==null?tt:rs(ot),K=Vt==null?tt:rs(Vt),tt=new $t(pt,G+"leave",ot,a,ft),tt.target=Ge,tt.relatedTarget=K,pt=null,Ea(ft)===Q&&($t=new $t(q,G+"enter",Vt,a,ft),$t.target=K,$t.relatedTarget=Ge,pt=$t),Ge=pt,ot&&Vt)e:{for($t=gS,q=ot,G=Vt,K=0,pt=q;pt;pt=$t(pt))K++;pt=0;for(var Kt=G;Kt;Kt=$t(Kt))pt++;for(;0<K-pt;)q=$t(q),K--;for(;0<pt-K;)G=$t(G),pt--;for(;K--;){if(q===G||G!==null&&q===G.alternate){$t=q;break e}q=$t(q),G=$t(G)}$t=null}else $t=null;ot!==null&&o_(mt,tt,ot,$t,!1),Vt!==null&&Ge!==null&&o_(mt,Ge,Vt,$t,!0)}}t:{if(tt=Q?rs(Q):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Te=bp;else if(Mp(tt))if(Tp)Te=Cx;else{Te=Tx;var qt=bx}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&Mi(Q.elementType)&&(Te=bp):Te=Ax;if(Te&&(Te=Te(e,Q))){Ep(mt,Te,a,ft);break t}qt&&qt(e,tt,Q),e==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&Mn(tt,"number",tt.value)}switch(qt=Q?rs(Q):window,e){case"focusin":(Mp(qt)||qt.contentEditable==="true")&&(Xs=qt,xc=Q,ao=null);break;case"focusout":ao=xc=Xs=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Np(mt,a,ft);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Np(mt,a,ft)}var le;if(mc)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else ks?Sp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(_p&&a.locale!=="ko"&&(ks||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&ks&&(le=hp()):(Aa=ft,cc="value"in Aa?Aa.value:Aa.textContent,ks=!0)),qt=nu(Q,Se),0<qt.length&&(Se=new mp(Se,e,null,a,ft),mt.push({event:Se,listeners:qt}),le?Se.data=le:(le=yp(a),le!==null&&(Se.data=le)))),(le=xx?Sx(e,a):yx(e,a))&&(Se=nu(Q,"onBeforeInput"),0<Se.length&&(qt=new mp("onBeforeInput","beforeinput",null,a,ft),mt.push({event:qt,listeners:Se}),qt.data=le)),hS(mt,e,Q,a,ft)}s_(mt,n)})}function Do(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Kr(e,a),c!=null&&o.unshift(Do(e,c,f)),c=Kr(e,n),c!=null&&o.push(Do(e,c,f))),e.tag===3)return o;e=e.return}return[]}function gS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function o_(e,n,a,o,c){for(var f=n._reactName,x=[];a!==null&&a!==o;){var T=a,I=T.alternate,Q=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||Q===null||(I=Q,c?(Q=Kr(a,f),Q!=null&&x.unshift(Do(a,Q,I))):c||(Q=Kr(a,f),Q!=null&&x.push(Do(a,Q,I)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var _S=/\r\n?/g,vS=/\u0000|\uFFFD/g;function l_(e){return(typeof e=="string"?e:""+e).replace(_S,`
`).replace(vS,"")}function u_(e,n){return n=l_(n),l_(e)===n}function Ve(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hn(e,""+o);break;case"className":Qt(e,"class",o);break;case"tabIndex":Qt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(e,a,o);break;case"style":Hs(e,o,f);break;case"data":if(n!=="object"){Qt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",c.name,c,null),Ve(e,n,"formEncType",c.formEncType,c,null),Ve(e,n,"formMethod",c.formMethod,c,null),Ve(e,n,"formTarget",c.formTarget,c,null)):(Ve(e,n,"encType",c.encType,c,null),Ve(e,n,"method",c.method,c,null),Ve(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=qi);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Xt(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yv.get(a)||a,Xt(e,a,o))}}function Yf(e,n,a,o,c,f){switch(a){case"style":Hs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?hn(e,o):(typeof o=="number"||typeof o=="bigint")&&hn(e,""+o);break;case"onScroll":o!=null&&_e("scroll",e);break;case"onScrollEnd":o!=null&&_e("scrollend",e);break;case"onClick":o!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Xt(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,x,a,null)}}c&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var T=f=x=c=null,I=null,Q=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":c=ft;break;case"type":x=ft;break;case"checked":I=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ve(e,n,o,ft,a,null)}}Yi(e,f,T,I,Q,x,c,!1);return;case"select":_e("invalid",e),o=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:Ve(e,n,c,T,a,null)}n=f,a=x,e.multiple=!!o,n!=null?li(e,!!o,n,!1):a!=null&&li(e,!!o,a,!0);return;case"textarea":_e("invalid",e),f=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ve(e,n,x,T,a,null)}En(e,o,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,I,o,a,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(o=0;o<wo.length;o++)_e(wo[o],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,Q,o,a,null)}return;default:if(Mi(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Yf(e,n,ft,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ve(e,n,T,o,a,null))}function xS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,I=null,Q=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=mt;default:o.hasOwnProperty(ot)||Ve(e,n,ot,null,o,mt)}}for(var tt in o){var ot=o[tt];if(mt=a[tt],o.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":f=ot;break;case"name":c=ot;break;case"checked":Q=ot;break;case"defaultChecked":ft=ot;break;case"value":x=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Ve(e,n,tt,ot,o,mt)}}yn(e,x,T,I,Q,ft,f,c);return;case"select":ot=x=T=tt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,I)}for(c in o)if(f=o[c],I=a[c],o.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":tt=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==I&&Ve(e,n,c,f,o,I)}n=T,a=x,o=ot,tt!=null?li(e,!!a,tt,!1):!!o!=!!a&&(n!=null?li(e,!!a,n,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(e,n,T,null,o,c)}for(x in o)if(c=o[x],f=a[x],o.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":tt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ve(e,n,x,c,o,f)}Fe(e,tt,ot);return;case"option":for(var Vt in a)tt=a[Vt],a.hasOwnProperty(Vt)&&tt!=null&&!o.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:Ve(e,n,Vt,null,o,tt));for(I in o)tt=o[I],ot=a[I],o.hasOwnProperty(I)&&tt!==ot&&(tt!=null||ot!=null)&&(I==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Ve(e,n,I,tt,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)tt=a[$t],a.hasOwnProperty($t)&&tt!=null&&!o.hasOwnProperty($t)&&Ve(e,n,$t,null,o,tt);for(Q in o)if(tt=o[Q],ot=a[Q],o.hasOwnProperty(Q)&&tt!==ot&&(tt!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Ve(e,n,Q,tt,o,ot)}return;default:if(Mi(n)){for(var Ge in a)tt=a[Ge],a.hasOwnProperty(Ge)&&tt!==void 0&&!o.hasOwnProperty(Ge)&&Yf(e,n,Ge,void 0,o,tt);for(ft in o)tt=o[ft],ot=a[ft],!o.hasOwnProperty(ft)||tt===ot||tt===void 0&&ot===void 0||Yf(e,n,ft,tt,o,ot);return}}for(var q in a)tt=a[q],a.hasOwnProperty(q)&&tt!=null&&!o.hasOwnProperty(q)&&Ve(e,n,q,null,o,tt);for(mt in o)tt=o[mt],ot=a[mt],!o.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Ve(e,n,mt,tt,o,ot)}function c_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,x=c.initiatorType,T=c.duration;if(f&&T&&c_(x)){for(x=0,T=c.responseEnd,o+=1;o<a.length;o++){var I=a[o],Q=I.startTime;if(Q>T)break;var ft=I.transferSize,mt=I.initiatorType;ft&&c_(mt)&&(I=I.responseEnd,x+=ft*(I<T?1:(T-Q)/(I-Q)))}if(--o,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qf=null,jf=null;function iu(e){return e.nodeType===9?e:e.ownerDocument}function f_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kf=null;function yS(){var e=window.event;return e&&e.type==="popstate"?e===Kf?!1:(Kf=e,!0):(Kf=null,!1)}var d_=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,p_=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof p_<"u"?function(e){return p_.resolve(null).then(e).catch(bS)}:d_;function bS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function m_(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),_r(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Uo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[ss]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Uo(e.ownerDocument.body);a=c}while(a);_r(n)}function g_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qf(a),Zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function TS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ss])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function AS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function __(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function Jf(e){return e.data==="$?"||e.data==="$~"}function $f(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function CS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var th=null;function v_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function x_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function S_(e,n,a){switch(n=iu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Uo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zr(e)}var gi=new Map,y_=new Set;function au(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=H.d;H.d={f:RS,r:wS,D:DS,C:US,L:LS,m:NS,X:PS,S:OS,M:FS};function RS(){var e=ua.f(),n=Zl();return e||n}function wS(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?Im(n):ua.r(e)}var pr=typeof document>"u"?null:document;function M_(e,n,a){var o=pr;if(o&&typeof n=="string"&&n){var c=ie(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),y_.has(c)||(y_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),wn(n,"link",e),A(n),o.head.appendChild(n)))}}function DS(e){ua.D(e),M_("dns-prefetch",e,null)}function US(e,n){ua.C(e,n),M_("preconnect",e,n)}function LS(e,n,a){ua.L(e,n,a);var o=pr;if(o&&e&&n){var c='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ie(a.imageSizes)+'"]')):c+='[href="'+ie(e)+'"]';var f=c;switch(n){case"style":f=mr(e);break;case"script":f=gr(e)}gi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Lo(f))||n==="script"&&o.querySelector(No(f))||(n=o.createElement("link"),wn(n,"link",e),A(n),o.head.appendChild(n)))}}function NS(e,n){ua.m(e,n);var a=pr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ie(o)+'"][href="'+ie(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gr(e)}if(!gi.has(f)&&(e=g({rel:"modulepreload",href:e},n),gi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(f)))return}o=a.createElement("link"),wn(o,"link",e),A(o),a.head.appendChild(o)}}}function OS(e,n,a){ua.S(e,n,a);var o=pr;if(o&&e){var c=Ta(o).hoistableStyles,f=mr(e);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(Lo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(f))&&eh(e,a);var I=x=o.createElement("link");A(I),wn(I,"link",e),I._p=new Promise(function(Q,ft){I.onload=Q,I.onerror=ft}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,su(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function PS(e,n){ua.X(e,n);var a=pr;if(a&&e){var o=Ta(a).hoistableScripts,c=gr(e),f=o.get(c);f||(f=a.querySelector(No(c)),f||(e=g({src:e,async:!0},n),(n=gi.get(c))&&nh(e,n),f=a.createElement("script"),A(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function FS(e,n){ua.M(e,n);var a=pr;if(a&&e){var o=Ta(a).hoistableScripts,c=gr(e),f=o.get(c);f||(f=a.querySelector(No(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=gi.get(c))&&nh(e,n),f=a.createElement("script"),A(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function E_(e,n,a,o){var c=(c=et.current)?au(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=mr(a.href),a=Ta(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=mr(a.href);var f=Ta(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(Lo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),f||zS(c,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gr(a),a=Ta(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function mr(e){return'href="'+ie(e)+'"'}function Lo(e){return'link[rel="stylesheet"]['+e+"]"}function b_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function zS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),A(n),e.head.appendChild(n))}function gr(e){return'[src="'+ie(e)+'"]'}function No(e){return"script[async]"+e}function T_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ie(a.href)+'"]');if(o)return n.instance=o,A(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),A(o),wn(o,"style",c),su(o,a.precedence,e),n.instance=o;case"stylesheet":c=mr(a.href);var f=e.querySelector(Lo(c));if(f)return n.state.loading|=4,n.instance=f,A(f),f;o=b_(a),(c=gi.get(c))&&eh(o,c),f=(e.ownerDocument||e).createElement("link"),A(f);var x=f;return x._p=new Promise(function(T,I){x.onload=T,x.onerror=I}),wn(f,"link",o),n.state.loading|=4,su(f,a.precedence,e),n.instance=f;case"script":return f=gr(a.src),(c=e.querySelector(No(f)))?(n.instance=c,A(c),c):(o=a,(c=gi.get(f))&&(o=g({},a),nh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),A(c),wn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,su(o,a.precedence,e));return n.instance}function su(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function eh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ru=null;function A_(e,n,a){if(ru===null){var o=new Map,c=ru=new Map;c.set(a,o)}else c=ru,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ss]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var T=o.get(x);T?T.push(f):o.set(x,[f])}}return o}function C_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function IS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function R_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function BS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=mr(o.href),f=n.querySelector(Lo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ou.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,o=b_(o),(c=gi.get(c))&&eh(o,c),f=f.createElement("link"),A(f);var x=f;x._p=new Promise(function(T,I){x.onload=T,x.onerror=I}),wn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ou.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ih=0;function HS(e,n){return e.stylesheets&&e.count===0&&uu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&uu(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ih===0&&(ih=62500*SS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uu(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ih?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function ou(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lu=null;function uu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lu=new Map,n.forEach(VS,e),lu=null,ou.call(e))}function VS(e,n){if(!(n.state.loading&4)){var a=lu.get(e);if(a)var o=a.get(null);else{a=new Map,lu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,c),a.set(x,c),this.count++,o=ou.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Oo={$$typeof:N,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function GS(e,n,a,o,c,f,x,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function w_(e,n,a,o,c,f,x,T,I,Q,ft,mt){return e=new GS(e,n,a,x,I,Q,ft,mt,T),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Pc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Bc(f),e}function D_(e){return e?(e=qs,e):qs}function U_(e,n,a,o,c,f){c=D_(c),o.context===null?o.context=c:o.pendingContext=c,o=La(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Na(e,o,n),a!==null&&(Yn(a,e,n),fo(a,e,n))}function L_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ah(e,n){L_(e,n),(e=e.alternate)&&L_(e,n)}function N_(e){if(e.tag===13||e.tag===31){var n=cs(e,67108864);n!==null&&Yn(n,e,67108864),ah(e,67108864)}}function O_(e){if(e.tag===13||e.tag===31){var n=ei();n=Yr(n);var a=cs(e,n);a!==null&&Yn(a,e,n),ah(e,n)}}var cu=!0;function kS(e,n,a,o){var c=P.T;P.T=null;var f=H.p;try{H.p=2,sh(e,n,a,o)}finally{H.p=f,P.T=c}}function XS(e,n,a,o){var c=P.T;P.T=null;var f=H.p;try{H.p=8,sh(e,n,a,o)}finally{H.p=f,P.T=c}}function sh(e,n,a,o){if(cu){var c=rh(o);if(c===null)Wf(e,n,o,fu,a),F_(e,o);else if(YS(c,e,n,a,o))o.stopPropagation();else if(F_(e,o),n&4&&-1<WS.indexOf(e)){for(;c!==null;){var f=ba(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=St(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var I=1<<31-Ot(x);T.entanglements[1]|=I,x&=~I}zi(f),(Le&6)===0&&(ql=E()+500,Ro(0))}}break;case 31:case 13:T=cs(f,2),T!==null&&Yn(T,f,2),Zl(),ah(f,2)}if(f=rh(o),f===null&&Wf(e,n,o,fu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Wf(e,n,o,null,a)}}function rh(e){return e=oc(e),oh(e)}var fu=null;function oh(e){if(fu=null,e=Ea(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fu=e,null}function P_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ht:return 2;case vt:return 8;case lt:case jt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var lh=!1,Xa=null,Wa=null,Ya=null,Po=new Map,Fo=new Map,qa=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F_(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function zo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ba(n),n!==null&&N_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function YS(e,n,a,o,c){switch(n){case"focusin":return Xa=zo(Xa,e,n,a,o,c),!0;case"dragenter":return Wa=zo(Wa,e,n,a,o,c),!0;case"mouseover":return Ya=zo(Ya,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Po.set(f,zo(Po.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Fo.set(f,zo(Fo.get(f)||null,e,n,a,o,c)),!0}return!1}function z_(e){var n=Ea(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){O_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ni(e.priority,function(){O_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=rh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);rc=o,a.target.dispatchEvent(o),rc=null}else return n=ba(a),n!==null&&N_(n),e.blockedOn=a,!1;n.shift()}return!0}function I_(e,n,a){hu(e)&&a.delete(n)}function qS(){lh=!1,Xa!==null&&hu(Xa)&&(Xa=null),Wa!==null&&hu(Wa)&&(Wa=null),Ya!==null&&hu(Ya)&&(Ya=null),Po.forEach(I_),Fo.forEach(I_)}function du(e,n){e.blockedOn===n&&(e.blockedOn=null,lh||(lh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,qS)))}var pu=null;function B_(e){pu!==e&&(pu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pu===e&&(pu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(oh(o||a)===null)continue;break}var f=ba(a);f!==null&&(e.splice(n,3),n-=3,rf(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function _r(e){function n(I){return du(I,e)}Xa!==null&&du(Xa,e),Wa!==null&&du(Wa,e),Ya!==null&&du(Ya,e),Po.forEach(n),Fo.forEach(n);for(var a=0;a<qa.length;a++){var o=qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)z_(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],x=c[Sn]||null;if(typeof f=="function")x||B_(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[Sn]||null)T=x.formAction;else if(oh(c)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),B_(a)}}}function H_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function uh(e){this._internalRoot=e}mu.prototype.render=uh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ei();U_(a,o,e,n,null,null)},mu.prototype.unmount=uh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;U_(e.current,2,null,e,null,null),Zl(),n[yi]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var n=qr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,e),a===0&&z_(e)}};var V_=t.version;if(V_!=="19.2.4")throw Error(s(527,V_,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var jS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gu.isDisabled&&gu.supportsFiber)try{Mt=gu.inject(jS),Et=gu}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=jm,f=Zm,x=Km;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=w_(e,1,!1,null,null,a,o,null,c,f,x,H_),e[yi]=n.current,Xf(e),new uh(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=jm,x=Zm,T=Km,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=w_(e,1,!0,n,a??null,o,c,I,f,x,T,H_),n.context=D_(null),a=n.current,o=ei(),o=Yr(o),c=La(o),c.callback=null,Na(a,c,o),a=o,n.current.lanes=a,Un(n,a),zi(n),e[yi]=n.current,Xf(e),new mu(n)},Bo.version="19.2.4",Bo}var Q_;function ry(){if(Q_)return hh.exports;Q_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),hh.exports=sy(),hh.exports}var oy=ry();const qd="182",Or={ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ly=0,J_=1,uy=2,ku=1,cy=2,qo=3,as=0,jn=1,ma=2,_a=0,Pr=1,$_=2,t0=3,e0=4,fy=5,ws=100,hy=101,dy=102,py=103,my=104,gy=200,_y=201,vy=202,xy=203,Zh=204,Kh=205,Sy=206,yy=207,My=208,Ey=209,by=210,Ty=211,Ay=212,Cy=213,Ry=214,Qh=0,Jh=1,$h=2,zr=3,td=4,ed=5,nd=6,id=7,ov=0,wy=1,Dy=2,Gi=0,lv=1,uv=2,cv=3,fv=4,hv=5,dv=6,pv=7,mv=300,Ns=301,Ir=302,ad=303,sd=304,ec=306,rd=1e3,ga=1001,od=1002,Dn=1003,Uy=1004,_u=1005,Pn=1006,gh=1007,Us=1008,ai=1009,gv=1010,_v=1011,Qo=1012,jd=1013,Wi=1014,Hi=1015,xa=1016,Zd=1017,Kd=1018,Jo=1020,vv=35902,xv=35899,Sv=1021,yv=1022,Di=1023,Sa=1026,Ls=1027,Mv=1028,Qd=1029,Br=1030,Jd=1031,$d=1033,Xu=33776,Wu=33777,Yu=33778,qu=33779,ld=35840,ud=35841,cd=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37488,gd=37489,_d=37490,vd=37491,xd=37808,Sd=37809,yd=37810,Md=37811,Ed=37812,bd=37813,Td=37814,Ad=37815,Cd=37816,Rd=37817,wd=37818,Dd=37819,Ud=37820,Ld=37821,Nd=36492,Od=36494,Pd=36495,Fd=36283,zd=36284,Id=36285,Bd=36286,Ly=3200,Ny=0,Oy=1,ns="",vi="srgb",Hr="srgb-linear",Zu="linear",Be="srgb",vr=7680,n0=519,Py=512,Fy=513,zy=514,tp=515,Iy=516,By=517,ep=518,Hy=519,i0=35044,a0="300 es",Vi=2e3,Ku=2001;function Ev(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vy(){const r=Qu("canvas");return r.style.display="block",r}const s0={};function r0(...r){const t="THREE."+r.shift();console.log(t,...r)}function ee(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ce(...r){const t="THREE."+r.shift();console.error(t,...r)}function $o(...r){const t=r.join(" ");t in s0||(s0[t]=!0,ee(...r))}function Gy(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let o0=1234567;const Zo=Math.PI/180,tl=180/Math.PI;function Gr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function de(r,t,i){return Math.max(t,Math.min(i,r))}function np(r,t){return(r%t+t)%t}function ky(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function Xy(r,t,i){return r!==t?(i-r)/(t-r):0}function Ko(r,t,i){return(1-i)*r+i*t}function Wy(r,t,i,s){return Ko(r,t,1-Math.exp(-i*s))}function Yy(r,t=1){return t-Math.abs(np(r,t*2)-t)}function qy(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function jy(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function Zy(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ky(r,t){return r+Math.random()*(t-r)}function Qy(r){return r*(.5-Math.random())}function Jy(r){r!==void 0&&(o0=r);let t=o0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $y(r){return r*Zo}function tM(r){return r*tl}function eM(r){return(r&r-1)===0&&r!==0}function nM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function iM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function aM(r,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),m=h(i/2),p=u((t+s)/2),_=h((t+s)/2),g=u((t-s)/2),S=h((t-s)/2),M=u((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":r.set(d*_,m*g,m*S,d*p);break;case"YZY":r.set(m*S,d*_,m*g,d*p);break;case"ZXZ":r.set(m*g,m*S,d*_,d*p);break;case"XZX":r.set(d*_,m*b,m*M,d*p);break;case"YXY":r.set(m*M,d*_,m*b,d*p);break;case"ZYZ":r.set(m*b,m*M,d*_,d*p);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Lr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const bv={DEG2RAD:Zo,RAD2DEG:tl,generateUUID:Gr,clamp:de,euclideanModulo:np,mapLinear:ky,inverseLerp:Xy,lerp:Ko,damp:Wy,pingpong:Yy,smoothstep:qy,smootherstep:jy,randInt:Zy,randFloat:Ky,randFloatSpread:Qy,seededRandom:Jy,degToRad:$y,radToDeg:tM,isPowerOfTwo:eM,ceilPowerOfTwo:nM,floorPowerOfTwo:iM,setQuaternionFromProperEuler:aM,normalize:zn,denormalize:Lr};class fe{constructor(t=0,i=0){fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],S=u[h+0],M=u[h+1],b=u[h+2],C=u[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d>=1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=C;return}if(g!==C||m!==S||p!==M||_!==b){let y=m*S+p*M+_*b+g*C;y<0&&(S=-S,M=-M,b=-b,C=-C,y=-y);let v=1-d;if(y<.9995){const D=Math.acos(y),N=Math.sin(D);v=Math.sin(v*D)/N,d=Math.sin(d*D)/N,m=m*v+S*d,p=p*v+M*d,_=_*v+b*d,g=g*v+C*d}else{m=m*v+S*d,p=p*v+M*d,_=_*v+b*d,g=g*v+C*d;const D=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=D,p*=D,_*=D,g*=D}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return t[i]=d*b+_*g+m*M-p*S,t[i+1]=m*b+_*S+p*g-d*M,t[i+2]=p*b+_*M+d*S-m*g,t[i+3]=_*b-d*g-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(u/2),S=m(s/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*_*g+p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g-S*M*b;break;case"YXZ":this._x=S*_*g+p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g+S*M*b;break;case"ZXY":this._x=S*_*g-p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g-S*M*b;break;case"ZYX":this._x=S*_*g-p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g+S*M*b;break;case"YZX":this._x=S*_*g+p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g-S*M*b;break;case"XZY":this._x=S*_*g-p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g+S*M*b;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=s+d+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-s*p,this._z=u*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(l0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(l0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-u*l),g=2*(u*s-h*i);return this.x=i+m*p+h*g-d*_,this.y=s+m*_+d*p-u*g,this.z=l+m*g+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new Z,l0=new Os;class ue{constructor(t,i,s,l,u,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],S=s[2],M=s[5],b=s[8],C=l[0],y=l[3],v=l[6],D=l[1],N=l[4],O=l[7],z=l[2],B=l[5],F=l[8];return u[0]=h*C+d*D+m*z,u[3]=h*y+d*N+m*B,u[6]=h*v+d*O+m*F,u[1]=p*C+_*D+g*z,u[4]=p*y+_*N+g*B,u[7]=p*v+_*O+g*F,u[2]=S*C+M*D+b*z,u[5]=S*y+M*N+b*B,u[8]=S*v+M*O+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*u*_+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,S=d*m-_*u,M=p*u-h*m,b=i*g+s*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=g*C,t[1]=(l*p-_*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(_*i-l*m)*C,t[5]=(l*u-d*i)*C,t[6]=M*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(vh.makeScale(t,i)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,i){return this.premultiply(vh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new ue,u0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sM(){const r={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ns?Zu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Hr]:{primaries:t,whitePoint:s,transfer:Zu,toXYZ:u0,fromXYZ:c0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:u0,fromXYZ:c0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),r}const be=sM();function va(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xr;class rM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{xr===void 0&&(xr=Qu("canvas")),xr.width=t.width,xr.height=t.height;const l=xr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=xr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Qu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=va(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oM=0;class ip{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Gr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(xh(l[h].image)):u.push(xh(l[h]))}else u=xh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let lM=0;const Sh=new Z;class Hn extends Ps{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=ga,l=ga,u=Pn,h=Us,d=Di,m=ai,p=Hn.DEFAULT_ANISOTROPY,_=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Gr(),this.name="",this.source=new ip(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case ga:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case ga:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=mv;Hn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],S=m[1],M=m[5],b=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+C)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(M+1)/2,z=(v+1)/2,B=(_+S)/4,F=(g+C)/4,J=(b+y)/4;return N>O&&N>z?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=B/s,u=F/s):O>z?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=B/l,u=J/l):z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),s=F/u,l=J/u),this.set(s,l,u,i),this}let D=Math.sqrt((y-b)*(y-b)+(g-C)*(g-C)+(S-_)*(S-_));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(g-C)/D,this.z=(S-_)/D,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this.w=de(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this.w=de(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uM extends Ps{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ip(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends uM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Tv extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ai):Ai.fromBufferAttribute(u,h),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vu.copy(s.boundingBox)),vu.applyMatrix4(t.matrixWorld),this.union(vu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ho),xu.subVectors(this.max,Ho),Sr.subVectors(t.a,Ho),yr.subVectors(t.b,Ho),Mr.subVectors(t.c,Ho),Za.subVectors(yr,Sr),Ka.subVectors(Mr,yr),Es.subVectors(Sr,Mr);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Es.z,Es.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Es.z,0,-Es.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Es.y,Es.x,0];return!yh(i,Sr,yr,Mr,xu)||(i=[1,0,0,0,1,0,0,0,1],!yh(i,Sr,yr,Mr,xu))?!1:(Su.crossVectors(Za,Ka),i=[Su.x,Su.y,Su.z],yh(i,Sr,yr,Mr,xu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ca=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ai=new Z,vu=new il,Sr=new Z,yr=new Z,Mr=new Z,Za=new Z,Ka=new Z,Es=new Z,Ho=new Z,xu=new Z,Su=new Z,bs=new Z;function yh(r,t,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){bs.fromArray(r,u);const d=l.x*Math.abs(bs.x)+l.y*Math.abs(bs.y)+l.z*Math.abs(bs.z),m=t.dot(bs),p=i.dot(bs),_=s.dot(bs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const fM=new il,Vo=new Z,Mh=new Z;class al{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):fM.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Vo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Mh)),this.expandByPoint(Vo.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new Z,Eh=new Z,yu=new Z,Qa=new Z,bh=new Z,Mu=new Z,Th=new Z;class nc{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Eh.copy(t).add(i).multiplyScalar(.5),yu.copy(i).sub(t).normalize(),Qa.copy(this.origin).sub(Eh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(yu),d=Qa.dot(this.direction),m=-Qa.dot(yu),p=Qa.lengthSq(),_=Math.abs(1-h*h);let g,S,M,b;if(_>0)if(g=h*m-d,S=h*d-m,b=u*_,g>=0)if(S>=-b)if(S<=b){const C=1/_;g*=C,S*=C,M=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-h*u+d)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(h*u+d)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=h>0?-u:u,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Eh).addScaledVector(yu,S),M}intersectSphere(t,i){fa.subVectors(t.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(d=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,i,s,l,u){bh.subVectors(i,t),Mu.subVectors(s,t),Th.crossVectors(bh,Mu);let h=this.direction.dot(Th),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Qa.subVectors(this.origin,t);const m=d*this.direction.dot(Mu.crossVectors(Qa,Mu));if(m<0)return null;const p=d*this.direction.dot(bh.cross(Qa));if(p<0||m+p>h)return null;const _=-d*Qa.dot(Th);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,s,l,u,h,d,m,p,_,g,S,M,b,C,y){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,_,g,S,M,b,C,y)}set(t,i,s,l,u,h,d,m,p,_,g,S,M,b,C,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=M,v[7]=b,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Er.setFromMatrixColumn(t,0).length(),u=1/Er.setFromMatrixColumn(t,1).length(),h=1/Er.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=h*_,M=h*g,b=d*_,C=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*_,M=m*g,b=p*_,C=p*g;i[0]=S+C*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=M*d-b,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*_,M=m*g,b=p*_,C=p*g;i[0]=S-C*d,i[4]=-h*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*_,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*_,M=h*g,b=d*_,C=d*g;i[0]=m*_,i[4]=b*p-M,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=C-S*g,i[8]=b*g+M,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*g+b,i[10]=S-C*g}else if(t.order==="XZY"){const S=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+C,i[5]=h*_,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*_,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hM,t,dM)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ja.crossVectors(s,ni),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ja.crossVectors(s,ni)),Ja.normalize(),Eu.crossVectors(ni,Ja),l[0]=Ja.x,l[4]=Eu.x,l[8]=ni.x,l[1]=Ja.y,l[5]=Eu.y,l[9]=ni.y,l[2]=Ja.z,l[6]=Eu.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],S=s[9],M=s[13],b=s[2],C=s[6],y=s[10],v=s[14],D=s[3],N=s[7],O=s[11],z=s[15],B=l[0],F=l[4],J=l[8],R=l[12],w=l[1],k=l[5],st=l[9],at=l[13],dt=l[2],ct=l[6],P=l[10],H=l[14],it=l[3],yt=l[7],xt=l[11],L=l[15];return u[0]=h*B+d*w+m*dt+p*it,u[4]=h*F+d*k+m*ct+p*yt,u[8]=h*J+d*st+m*P+p*xt,u[12]=h*R+d*at+m*H+p*L,u[1]=_*B+g*w+S*dt+M*it,u[5]=_*F+g*k+S*ct+M*yt,u[9]=_*J+g*st+S*P+M*xt,u[13]=_*R+g*at+S*H+M*L,u[2]=b*B+C*w+y*dt+v*it,u[6]=b*F+C*k+y*ct+v*yt,u[10]=b*J+C*st+y*P+v*xt,u[14]=b*R+C*at+y*H+v*L,u[3]=D*B+N*w+O*dt+z*it,u[7]=D*F+N*k+O*ct+z*yt,u[11]=D*J+N*st+O*P+z*xt,u[15]=D*R+N*at+O*H+z*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],S=t[10],M=t[14],b=t[3],C=t[7],y=t[11],v=t[15],D=m*M-p*S,N=d*M-p*g,O=d*S-m*g,z=h*M-p*_,B=h*S-m*_,F=h*g-d*_;return i*(C*D-y*N+v*O)-s*(b*D-y*z+v*B)+l*(b*N-C*z+v*F)-u*(b*O-C*B+y*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],S=t[10],M=t[11],b=t[12],C=t[13],y=t[14],v=t[15],D=g*y*p-C*S*p+C*m*M-d*y*M-g*m*v+d*S*v,N=b*S*p-_*y*p-b*m*M+h*y*M+_*m*v-h*S*v,O=_*C*p-b*g*p+b*d*M-h*C*M-_*d*v+h*g*v,z=b*g*m-_*C*m-b*d*S+h*C*S+_*d*y-h*g*y,B=i*D+s*N+l*O+u*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return t[0]=D*F,t[1]=(C*S*u-g*y*u-C*l*M+s*y*M+g*l*v-s*S*v)*F,t[2]=(d*y*u-C*m*u+C*l*p-s*y*p-d*l*v+s*m*v)*F,t[3]=(g*m*u-d*S*u-g*l*p+s*S*p+d*l*M-s*m*M)*F,t[4]=N*F,t[5]=(_*y*u-b*S*u+b*l*M-i*y*M-_*l*v+i*S*v)*F,t[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*v-i*m*v)*F,t[7]=(h*S*u-_*m*u+_*l*p-i*S*p-h*l*M+i*m*M)*F,t[8]=O*F,t[9]=(b*g*u-_*C*u-b*s*M+i*C*M+_*s*v-i*g*v)*F,t[10]=(h*C*u-b*d*u+b*s*p-i*C*p-h*s*v+i*d*v)*F,t[11]=(_*d*u-h*g*u-_*s*p+i*g*p+h*s*M-i*d*M)*F,t[12]=z*F,t[13]=(_*C*l-b*g*l+b*s*S-i*C*S-_*s*y+i*g*y)*F,t[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*y-i*d*y)*F,t[15]=(h*g*l-_*d*l+_*s*m-i*g*m-h*s*S+i*d*S)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,g=d+d,S=u*p,M=u*_,b=u*g,C=h*_,y=h*g,v=d*g,D=m*p,N=m*_,O=m*g,z=s.x,B=s.y,F=s.z;return l[0]=(1-(C+v))*z,l[1]=(M+O)*z,l[2]=(b-N)*z,l[3]=0,l[4]=(M-O)*B,l[5]=(1-(S+v))*B,l[6]=(y+D)*B,l[7]=0,l[8]=(b+N)*F,l[9]=(y-D)*F,l[10]=(1-(S+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=Er.set(l[0],l[1],l[2]).length();const h=Er.set(l[4],l[5],l[6]).length(),d=Er.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ci.copy(this);const p=1/u,_=1/h,g=1/d;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=_,Ci.elements[5]*=_,Ci.elements[6]*=_,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,i.setFromRotationMatrix(Ci),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Vi,m=!1){const p=this.elements,_=2*u/(i-t),g=2*u/(s-l),S=(i+t)/(i-t),M=(s+l)/(s-l);let b,C;if(m)b=u/(h-u),C=h*u/(h-u);else if(d===Vi)b=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Ku)b=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Vi,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),S=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,C;if(m)b=1/(h-u),C=h/(h-u);else if(d===Vi)b=-2/(h-u),C=-(h+u)/(h-u);else if(d===Ku)b=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Er=new Z,Ci=new Qe,hM=new Z(0,0,0),dM=new Z(1,1,1),Ja=new Z,Eu=new Z,ni=new Z,f0=new Qe,h0=new Os;class ya{constructor(t=0,i=0,s=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-de(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(de(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-de(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(de(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return f0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(f0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return h0.setFromEuler(this),this.setFromQuaternion(h0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class Av{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pM=0;const d0=new Z,br=new Os,ha=new Qe,bu=new Z,Go=new Z,mM=new Z,gM=new Os,p0=new Z(1,0,0),m0=new Z(0,1,0),g0=new Z(0,0,1),_0={type:"added"},_M={type:"removed"},Tr={type:"childadded",child:null},Ah={type:"childremoved",child:null};class xn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new Z,i=new ya,s=new Os,l=new Z(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ue}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,i){return br.setFromAxisAngle(t,i),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(p0,t)}rotateY(t){return this.rotateOnAxis(m0,t)}rotateZ(t){return this.rotateOnAxis(g0,t)}translateOnAxis(t,i){return d0.copy(t).applyQuaternion(this.quaternion),this.position.add(d0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(p0,t)}translateY(t){return this.translateOnAxis(m0,t)}translateZ(t){return this.translateOnAxis(g0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bu.copy(t):bu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Go,bu,this.up):ha.lookAt(bu,Go,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),br.setFromRotationMatrix(ha),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_0),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_M),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_0),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,mM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,gM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),S=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}xn.DEFAULT_UP=new Z(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new Z,da=new Z,Ch=new Z,pa=new Z,Ar=new Z,Cr=new Z,v0=new Z,Rh=new Z,wh=new Z,Dh=new Z,Uh=new nn,Lh=new nn,Nh=new nn;class wi{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ri.subVectors(t,i),l.cross(Ri);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ri.subVectors(l,i),da.subVectors(s,i),Ch.subVectors(t,i);const h=Ri.dot(Ri),d=Ri.dot(da),m=Ri.dot(Ch),p=da.dot(da),_=da.dot(Ch),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-d*_)*S,b=(h*_-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,s),Nh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Uh,u.x),h.addScaledVector(Lh,u.y),h.addScaledVector(Nh,u.z),h}static isFrontFacing(t,i,s,l){return Ri.subVectors(s,i),da.subVectors(t,i),Ri.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ri.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return wi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;Ar.subVectors(l,s),Cr.subVectors(u,s),Rh.subVectors(t,s);const m=Ar.dot(Rh),p=Cr.dot(Rh);if(m<=0&&p<=0)return i.copy(s);wh.subVectors(t,l);const _=Ar.dot(wh),g=Cr.dot(wh);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Ar,h);Dh.subVectors(t,u);const M=Ar.dot(Dh),b=Cr.dot(Dh);if(b>=0&&M<=b)return i.copy(u);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Cr,d);const y=_*b-M*g;if(y<=0&&g-_>=0&&M-b>=0)return v0.subVectors(u,l),d=(g-_)/(g-_+(M-b)),i.copy(l).addScaledVector(v0,d);const v=1/(y+C+S);return h=C*v,d=S*v,i.copy(s).addScaledVector(Ar,h).addScaledVector(Cr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Tu={h:0,s:0,l:0};function Oh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=np(t,1),i=de(i,0,1),s=de(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Oh(h,u,t+1/3),this.g=Oh(h,u,t),this.b=Oh(h,u,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=vi){function s(u){u!==void 0&&parseFloat(u)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ee("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const s=Cv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return be.workingToColorSpace(On.copy(this),t),Math.round(de(On.r*255,0,255))*65536+Math.round(de(On.g*255,0,255))*256+Math.round(de(On.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,u=On.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=vi){be.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(Tu);const s=Ko($a.h,Tu.h,i),l=Ko($a.s,Tu.s,i),u=Ko($a.l,Tu.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Re;Re.NAMES=Cv;let vM=0;class kr extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=Pr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Kh&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Rv extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new Z,Au=new fe;let xM=0;class si{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=i0,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Au.fromBufferAttribute(this,i),Au.applyMatrix3(t),this.setXY(i,Au.x,Au.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Lr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lr(i,this.array)),i}setX(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lr(i,this.array)),i}setY(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lr(i,this.array)),i}setW(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array),l=zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==i0&&(t.usage=this.usage),t}}class wv extends si{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Dv extends si{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ui extends si{constructor(t,i,s){super(new Float32Array(t),i,s)}}let SM=0;const _i=new Qe,Ph=new xn,Rr=new Z,ii=new il,ko=new il,vn=new Z;class ri extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ev(t)?Dv:wv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ue().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,s){return _i.makeTranslation(t,i,s),this.applyMatrix4(_i),this}scale(t,i,s){return _i.makeScale(t,i,s),this.applyMatrix4(_i),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ui(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new al);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];ko.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ii.min,ko.min),ii.expandByPoint(vn),vn.addVectors(ii.max,ko.max),ii.expandByPoint(vn)):(ii.expandByPoint(ko.min),ii.expandByPoint(ko.max))}ii.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)vn.fromBufferAttribute(d,p),m&&(Rr.fromBufferAttribute(t,p),vn.add(Rr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let J=0;J<s.count;J++)d[J]=new Z,m[J]=new Z;const p=new Z,_=new Z,g=new Z,S=new fe,M=new fe,b=new fe,C=new Z,y=new Z;function v(J,R,w){p.fromBufferAttribute(s,J),_.fromBufferAttribute(s,R),g.fromBufferAttribute(s,w),S.fromBufferAttribute(u,J),M.fromBufferAttribute(u,R),b.fromBufferAttribute(u,w),_.sub(p),g.sub(p),M.sub(S),b.sub(S);const k=1/(M.x*b.y-b.x*M.y);isFinite(k)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(k),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(k),d[J].add(C),d[R].add(C),d[w].add(C),m[J].add(y),m[R].add(y),m[w].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let J=0,R=D.length;J<R;++J){const w=D[J],k=w.start,st=w.count;for(let at=k,dt=k+st;at<dt;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const N=new Z,O=new Z,z=new Z,B=new Z;function F(J){z.fromBufferAttribute(l,J),B.copy(z);const R=d[J];N.copy(R),N.sub(z.multiplyScalar(z.dot(R))).normalize(),O.crossVectors(B,R);const k=O.dot(m[J])<0?-1:1;h.setXYZW(J,N.x,N.y,N.z,k)}for(let J=0,R=D.length;J<R;++J){const w=D[J],k=w.start,st=w.count;for(let at=k,dt=k+st;at<dt;at+=3)F(t.getX(at+0)),F(t.getX(at+1)),F(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new si(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new Z,u=new Z,h=new Z,d=new Z,m=new Z,p=new Z,_=new Z,g=new Z;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,S=new p.constructor(m.length*_);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*_;for(let v=0;v<_;v++)S[b++]=p[M++]}return new si(S,_,g)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ri,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,g=p.length;_<g;_++){const S=p[_],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let S=0,M=g.length;S<M;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x0=new Qe,Ts=new nc,Cu=new al,S0=new Z,Ru=new Z,wu=new Z,Du=new Z,Fh=new Z,Uu=new Z,y0=new Z,Lu=new Z;class Ma extends xn{constructor(t=new ri,i=new Rv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Uu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],g=u[m];_!==0&&(Fh.fromBufferAttribute(g,t),h?Uu.addScaledVector(Fh,_):Uu.addScaledVector(Fh.sub(i),_))}i.add(Uu)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Cu.copy(s.boundingSphere),Cu.applyMatrix4(u),Ts.copy(t.ray).recast(t.near),!(Cu.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Cu,S0)===null||Ts.origin.distanceToSquared(S0)>(t.far-t.near)**2))&&(x0.copy(u).invert(),Ts.copy(t.ray).applyMatrix4(x0),!(s.boundingBox!==null&&Ts.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ts)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],v=h[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let O=D,z=N;O<z;O+=3){const B=d.getX(O),F=d.getX(O+1),J=d.getX(O+2);l=Nu(this,v,t,s,p,_,g,B,F,J),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,v=C;y<v;y+=3){const D=d.getX(y),N=d.getX(y+1),O=d.getX(y+2);l=Nu(this,h,t,s,p,_,g,D,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],v=h[y.materialIndex],D=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=D,z=N;O<z;O+=3){const B=O,F=O+1,J=O+2;l=Nu(this,v,t,s,p,_,g,B,F,J),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,v=C;y<v;y+=3){const D=y,N=y+1,O=y+2;l=Nu(this,h,t,s,p,_,g,D,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function yM(r,t,i,s,l,u,h,d){let m;if(t.side===jn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===as,d),m===null)return null;Lu.copy(d),Lu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Lu);return p<i.near||p>i.far?null:{distance:p,point:Lu.clone(),object:r}}function Nu(r,t,i,s,l,u,h,d,m,p){r.getVertexPosition(d,Ru),r.getVertexPosition(m,wu),r.getVertexPosition(p,Du);const _=yM(r,t,i,s,Ru,wu,Du,y0);if(_){const g=new Z;wi.getBarycoord(y0,Ru,wu,Du,g),l&&(_.uv=wi.getInterpolatedAttribute(l,d,m,p,g,new fe)),u&&(_.uv1=wi.getInterpolatedAttribute(u,d,m,p,g,new fe)),h&&(_.normal=wi.getInterpolatedAttribute(h,d,m,p,g,new Z),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new Z,materialIndex:0};wi.getNormal(Ru,wu,Du,S.normal),_.face=S,_.barycoord=g}return _}class sl extends ri{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],g=[];let S=0,M=0;b("z","y","x",-1,-1,s,i,t,h,u,0),b("z","y","x",1,-1,s,i,-t,h,u,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,u,4),b("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ui(p,3)),this.setAttribute("normal",new Ui(_,3)),this.setAttribute("uv",new Ui(g,2));function b(C,y,v,D,N,O,z,B,F,J,R){const w=O/F,k=z/J,st=O/2,at=z/2,dt=B/2,ct=F+1,P=J+1;let H=0,it=0;const yt=new Z;for(let xt=0;xt<P;xt++){const L=xt*k-at;for(let nt=0;nt<ct;nt++){const gt=nt*w-st;yt[C]=gt*D,yt[y]=L*N,yt[v]=dt,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[y]=0,yt[v]=B>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(nt/F),g.push(1-xt/J),H+=1}}for(let xt=0;xt<J;xt++)for(let L=0;L<F;L++){const nt=S+L+ct*xt,gt=S+L+ct*(xt+1),Tt=S+(L+1)+ct*(xt+1),It=S+(L+1)+ct*xt;m.push(nt,gt,It),m.push(gt,Tt,It),it+=6}d.addGroup(M,it,R),M+=it,S+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=Vr(r[i]);for(const l in s)t[l]=s[l]}return t}function MM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Uv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const EM={clone:Vr,merge:In};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=MM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Lv extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new Z,M0=new fe,E0=new fe;class xi extends Lv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,i){return this.getViewBounds(t,M0,E0),i.subVectors(E0,M0)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const wr=-90,Dr=1;class AM extends xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(wr,Dr,t,i);l.layers=this.layers,this.add(l);const u=new xi(wr,Dr,t,i);u.layers=this.layers,this.add(u);const h=new xi(wr,Dr,t,i);h.layers=this.layers,this.add(h);const d=new xi(wr,Dr,t,i);d.layers=this.layers,this.add(d);const m=new xi(wr,Dr,t,i);m.layers=this.layers,this.add(m);const p=new xi(wr,Dr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ku)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,S,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Nv extends Hn{constructor(t=[],i=Ns,s,l,u,h,d,m,p,_){super(t,i,s,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ov extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Nv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new sl(5,5,5),u=new Li({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:_a});u.uniforms.tEquirect.value=i;const h=new Ma(l,u),d=i.minFilter;return i.minFilter===Us&&(i.minFilter=Pn),new AM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class Ou extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ou;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class RM extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wM extends Hn{constructor(t=null,i=1,s=1,l,u,h,d,m,p=Dn,_=Dn,g,S){super(null,h,d,m,p,_,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new Z,DM=new Z,UM=new ue;class es{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ih.subVectors(s,i).cross(DM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ih),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||UM.getNormalMatrix(t),l=this.coplanarPoint(Ih).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new al,LM=new fe(.5,.5),Pu=new Z;class ap{constructor(t=new es,i=new es,s=new es,l=new es,u=new es,h=new es){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Vi,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],_=u[4],g=u[5],S=u[6],M=u[7],b=u[8],C=u[9],y=u[10],v=u[11],D=u[12],N=u[13],O=u[14],z=u[15];if(l[0].setComponents(p-h,M-_,v-b,z-D).normalize(),l[1].setComponents(p+h,M+_,v+b,z+D).normalize(),l[2].setComponents(p+d,M+g,v+C,z+N).normalize(),l[3].setComponents(p-d,M-g,v-C,z-N).normalize(),s)l[4].setComponents(m,S,y,O).normalize(),l[5].setComponents(p-m,M-S,v-y,z-O).normalize();else if(l[4].setComponents(p-m,M-S,v-y,z-O).normalize(),i===Vi)l[5].setComponents(p+m,M+S,v+y,z+O).normalize();else if(i===Ku)l[5].setComponents(m,S,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);const i=LM.distanceTo(t.center);return As.radius=.7071067811865476+i,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pu.x=l.normal.x>0?t.max.x:t.min.x,Pu.y=l.normal.y>0?t.max.y:t.min.y,Pu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pv extends kr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ju=new Z,$u=new Z,b0=new Qe,Xo=new nc,Fu=new al,Bh=new Z,T0=new Z;class NM extends xn{constructor(t=new ri,i=new Pv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Ju.fromBufferAttribute(i,l-1),$u.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Ju.distanceTo($u);t.setAttribute("lineDistance",new Ui(s,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Fu.copy(s.boundingSphere),Fu.applyMatrix4(l),Fu.radius+=u,t.ray.intersectsSphere(Fu)===!1)return;b0.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(b0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const M=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let C=M,y=b-1;C<y;C+=p){const v=_.getX(C),D=_.getX(C+1),N=zu(this,t,Xo,m,v,D,C);N&&i.push(N)}if(this.isLineLoop){const C=_.getX(b-1),y=_.getX(M),v=zu(this,t,Xo,m,C,y,b-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=M,y=b-1;C<y;C+=p){const v=zu(this,t,Xo,m,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=zu(this,t,Xo,m,b-1,M,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function zu(r,t,i,s,l,u,h){const d=r.geometry.attributes.position;if(Ju.fromBufferAttribute(d,l),$u.fromBufferAttribute(d,u),i.distanceSqToSegment(Ju,$u,Bh,T0)>s)return;Bh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Bh);if(!(p<t.near||p>t.far))return{distance:p,point:T0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const A0=new Z,C0=new Z;class OM extends NM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)A0.fromBufferAttribute(i,l),C0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+A0.distanceTo(C0);t.setAttribute("lineDistance",new Ui(s,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PM extends kr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const R0=new Qe,Hd=new nc,Iu=new al,Bu=new Z;class FM extends xn{constructor(t=new ri,i=new PM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Iu.copy(s.boundingSphere),Iu.applyMatrix4(l),Iu.radius+=u,t.ray.intersectsSphere(Iu)===!1)return;R0.copy(l).invert(),Hd.copy(t.ray).applyMatrix4(R0);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=S,C=M;b<C;b++){const y=p.getX(b);Bu.fromBufferAttribute(g,y),w0(Bu,y,m,l,t,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=S,C=M;b<C;b++)Bu.fromBufferAttribute(g,b),w0(Bu,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function w0(r,t,i,s,l,u,h){const d=Hd.distanceSqToPoint(r);if(d<i){const m=new Z;Hd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class el extends Hn{constructor(t,i,s=Wi,l,u,h,d=Dn,m=Dn,p,_=Sa,g=1){if(_!==Sa&&_!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ip(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zM extends el{constructor(t,i=Wi,s=Ns,l,u,h=Dn,d=Dn,m,p=Sa){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,s,l,u,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ic extends ri{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=t/d,S=i/m,M=[],b=[],C=[],y=[];for(let v=0;v<_;v++){const D=v*S-h;for(let N=0;N<p;N++){const O=N*g-u;b.push(O,-D,0),C.push(0,0,1),y.push(N/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<d;D++){const N=D+p*v,O=D+p*(v+1),z=D+1+p*(v+1),B=D+1+p*v;M.push(N,O,B),M.push(O,z,B)}this.setIndex(M),this.setAttribute("position",new Ui(b,3)),this.setAttribute("normal",new Ui(C,3)),this.setAttribute("uv",new Ui(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.width,t.height,t.widthSegments,t.heightSegments)}}class IM extends Li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class BM extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class HM extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zv extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Hh=new Qe,D0=new Z,U0=new Z;class VM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ap,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;D0.setFromMatrixPosition(t.matrixWorld),i.position.copy(D0),U0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(U0),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sp extends Lv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class GM extends VM{constructor(){super(new sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kM extends zv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new GM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class XM extends zv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class WM extends xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class YM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class L0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(de(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qM extends Ps{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function N0(r,t,i,s){const l=jM(s);switch(i){case Sv:return r*t;case Mv:return r*t/l.components*l.byteLength;case Qd:return r*t/l.components*l.byteLength;case Br:return r*t*2/l.components*l.byteLength;case Jd:return r*t*2/l.components*l.byteLength;case yv:return r*t*3/l.components*l.byteLength;case Di:return r*t*4/l.components*l.byteLength;case $d:return r*t*4/l.components*l.byteLength;case Xu:case Wu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yu:case qu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ud:case fd:return Math.max(r,16)*Math.max(t,8)/4;case ld:case cd:return Math.max(r,8)*Math.max(t,8)/2;case hd:case dd:case md:case gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pd:case _d:case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Md:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ud:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Nd:case Od:case Pd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Fd:case zd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Id:case Bd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jM(r){switch(r){case ai:case gv:return{byteLength:1,components:1};case Qo:case _v:case xa:return{byteLength:2,components:1};case Zd:case Kd:return{byteLength:2,components:4};case Wi:case jd:case Hi:return{byteLength:4,components:1};case vv:case xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);function Iv(){let r=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function ZM(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,_);else{g.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<g.length;M++){const b=g[S],C=g[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,g[S]=C)}g.length=S+1;for(let M=0,b=g.length;M<b;M++){const C=g[M];r.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var KM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:KM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:$M,alphatest_fragment:tE,alphatest_pars_fragment:eE,aomap_fragment:nE,aomap_pars_fragment:iE,batching_pars_vertex:aE,batching_vertex:sE,begin_vertex:rE,beginnormal_vertex:oE,bsdfs:lE,iridescence_fragment:uE,bumpmap_pars_fragment:cE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:dE,clipping_planes_vertex:pE,color_fragment:mE,color_pars_fragment:gE,color_pars_vertex:_E,color_vertex:vE,common:xE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:yE,displacementmap_pars_vertex:ME,displacementmap_vertex:EE,emissivemap_fragment:bE,emissivemap_pars_fragment:TE,colorspace_fragment:AE,colorspace_pars_fragment:CE,envmap_fragment:RE,envmap_common_pars_fragment:wE,envmap_pars_fragment:DE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:GE,envmap_vertex:LE,fog_vertex:NE,fog_pars_vertex:OE,fog_fragment:PE,fog_pars_fragment:FE,gradientmap_pars_fragment:zE,lightmap_pars_fragment:IE,lights_lambert_fragment:BE,lights_lambert_pars_fragment:HE,lights_pars_begin:VE,lights_toon_fragment:kE,lights_toon_pars_fragment:XE,lights_phong_fragment:WE,lights_phong_pars_fragment:YE,lights_physical_fragment:qE,lights_physical_pars_fragment:jE,lights_fragment_begin:ZE,lights_fragment_maps:KE,lights_fragment_end:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:eb,map_fragment:nb,map_pars_fragment:ib,map_particle_fragment:ab,map_particle_pars_fragment:sb,metalnessmap_fragment:rb,metalnessmap_pars_fragment:ob,morphinstance_vertex:lb,morphcolor_vertex:ub,morphnormal_vertex:cb,morphtarget_pars_vertex:fb,morphtarget_vertex:hb,normal_fragment_begin:db,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:gb,normal_vertex:_b,normalmap_pars_fragment:vb,clearcoat_normal_fragment_begin:xb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:Mb,opaque_fragment:Eb,packing:bb,premultiplied_alpha_fragment:Tb,project_vertex:Ab,dithering_fragment:Cb,dithering_pars_fragment:Rb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Db,shadowmap_pars_fragment:Ub,shadowmap_pars_vertex:Lb,shadowmap_vertex:Nb,shadowmask_pars_fragment:Ob,skinbase_vertex:Pb,skinning_pars_vertex:Fb,skinning_vertex:zb,skinnormal_vertex:Ib,specularmap_fragment:Bb,specularmap_pars_fragment:Hb,tonemapping_fragment:Vb,tonemapping_pars_fragment:Gb,transmission_fragment:kb,transmission_pars_fragment:Xb,uv_pars_fragment:Wb,uv_pars_vertex:Yb,uv_vertex:qb,worldpos_vertex:jb,background_vert:Zb,background_frag:Kb,backgroundCube_vert:Qb,backgroundCube_frag:Jb,cube_vert:$b,cube_frag:tT,depth_vert:eT,depth_frag:nT,distance_vert:iT,distance_frag:aT,equirect_vert:sT,equirect_frag:rT,linedashed_vert:oT,linedashed_frag:lT,meshbasic_vert:uT,meshbasic_frag:cT,meshlambert_vert:fT,meshlambert_frag:hT,meshmatcap_vert:dT,meshmatcap_frag:pT,meshnormal_vert:mT,meshnormal_frag:gT,meshphong_vert:_T,meshphong_frag:vT,meshphysical_vert:xT,meshphysical_frag:ST,meshtoon_vert:yT,meshtoon_frag:MT,points_vert:ET,points_frag:bT,shadow_vert:TT,shadow_frag:AT,sprite_vert:CT,sprite_frag:RT},Nt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Bi={basic:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:In([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:In([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:In([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:In([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:In([Nt.points,Nt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:In([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:In([Nt.common,Nt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:In([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:In([Nt.sprite,Nt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:In([Nt.common,Nt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:In([Nt.lights,Nt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Bi.physical={uniforms:In([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Hu={r:0,b:0,g:0},Cs=new ya,wT=new Qe;function DT(r,t,i,s,l,u,h){const d=new Re(0);let m=u===!0?0:1,p,_,g=null,S=0,M=null;function b(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:t).get(O)),O}function C(N){let O=!1;const z=b(N);z===null?v(d,m):z&&z.isColor&&(v(z,1),O=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||O)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(N,O){const z=b(O);z&&(z.isCubeTexture||z.mapping===ec)?(_===void 0&&(_=new Ma(new sl(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Vr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,F,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Cs.copy(O.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(Cs)),_.material.toneMapped=be.getTransfer(z.colorSpace)!==Be,(g!==z||S!==z.version||M!==r.toneMapping)&&(_.material.needsUpdate=!0,g=z,S=z.version,M=r.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Ma(new ic(2,2),new Li({name:"BackgroundMaterial",uniforms:Vr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=be.getTransfer(z.colorSpace)!==Be,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||S!==z.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=z,S=z.version,M=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,O){N.getRGB(Hu,Uv(r)),s.buffers.color.setClear(Hu.r,Hu.g,Hu.b,O,h)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,O=1){d.set(N),m=O,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(d,m)},render:C,addToRenderList:y,dispose:D}}function UT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(w,k,st,at,dt){let ct=!1;const P=g(at,st,k);u!==P&&(u=P,p(u.object)),ct=M(w,at,st,dt),ct&&b(w,at,st,dt),dt!==null&&t.update(dt,r.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,O(w,k,st,at),dt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function _(w){return r.deleteVertexArray(w)}function g(w,k,st){const at=st.wireframe===!0;let dt=s[w.id];dt===void 0&&(dt={},s[w.id]=dt);let ct=dt[k.id];ct===void 0&&(ct={},dt[k.id]=ct);let P=ct[at];return P===void 0&&(P=S(m()),ct[at]=P),P}function S(w){const k=[],st=[],at=[];for(let dt=0;dt<i;dt++)k[dt]=0,st[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:st,attributeDivisors:at,object:w,attributes:{},index:null}}function M(w,k,st,at){const dt=u.attributes,ct=k.attributes;let P=0;const H=st.getAttributes();for(const it in H)if(H[it].location>=0){const xt=dt[it];let L=ct[it];if(L===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),xt===void 0||xt.attribute!==L||L&&xt.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==at}function b(w,k,st,at){const dt={},ct=k.attributes;let P=0;const H=st.getAttributes();for(const it in H)if(H[it].location>=0){let xt=ct[it];xt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const L={};L.attribute=xt,xt&&xt.data&&(L.data=xt.data),dt[it]=L,P++}u.attributes=dt,u.attributesNum=P,u.index=at}function C(){const w=u.newAttributes;for(let k=0,st=w.length;k<st;k++)w[k]=0}function y(w){v(w,0)}function v(w,k){const st=u.newAttributes,at=u.enabledAttributes,dt=u.attributeDivisors;st[w]=1,at[w]===0&&(r.enableVertexAttribArray(w),at[w]=1),dt[w]!==k&&(r.vertexAttribDivisor(w,k),dt[w]=k)}function D(){const w=u.newAttributes,k=u.enabledAttributes;for(let st=0,at=k.length;st<at;st++)k[st]!==w[st]&&(r.disableVertexAttribArray(st),k[st]=0)}function N(w,k,st,at,dt,ct,P){P===!0?r.vertexAttribIPointer(w,k,st,dt,ct):r.vertexAttribPointer(w,k,st,at,dt,ct)}function O(w,k,st,at){C();const dt=at.attributes,ct=st.getAttributes(),P=k.defaultAttributeValues;for(const H in ct){const it=ct[H];if(it.location>=0){let yt=dt[H];if(yt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const xt=yt.normalized,L=yt.itemSize,nt=t.get(yt);if(nt===void 0)continue;const gt=nt.buffer,Tt=nt.type,It=nt.bytesPerElement,et=Tt===r.INT||Tt===r.UNSIGNED_INT||yt.gpuType===jd;if(yt.isInterleavedBufferAttribute){const ut=yt.data,wt=ut.stride,Gt=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<it.locationSize;Bt++)v(it.location+Bt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<it.locationSize;Bt++)y(it.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Bt=0;Bt<it.locationSize;Bt++)N(it.location+Bt,L/it.locationSize,Tt,xt,wt*It,(Gt+L/it.locationSize*Bt)*It,et)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<it.locationSize;ut++)v(it.location+ut,yt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<it.locationSize;ut++)y(it.location+ut);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let ut=0;ut<it.locationSize;ut++)N(it.location+ut,L/it.locationSize,Tt,xt,L*It,L/it.locationSize*ut*It,et)}}else if(P!==void 0){const xt=P[H];if(xt!==void 0)switch(xt.length){case 2:r.vertexAttrib2fv(it.location,xt);break;case 3:r.vertexAttrib3fv(it.location,xt);break;case 4:r.vertexAttrib4fv(it.location,xt);break;default:r.vertexAttrib1fv(it.location,xt)}}}}D()}function z(){J();for(const w in s){const k=s[w];for(const st in k){const at=k[st];for(const dt in at)_(at[dt].object),delete at[dt];delete k[st]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const st in k){const at=k[st];for(const dt in at)_(at[dt].object),delete at[dt];delete k[st]}delete s[w.id]}function F(w){for(const k in s){const st=s[k];if(st[w.id]===void 0)continue;const at=st[w.id];for(const dt in at)_(at[dt].object),delete at[dt];delete st[w.id]}}function J(){R(),h=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function LT(r,t,i){let s;function l(p){s=p}function u(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];i.update(M,s,1)}function m(p,_,g,S){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],_[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,g);let b=0;for(let C=0;C<g;C++)b+=_[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function NT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Di&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const J=F===xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ai&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Hi&&!J)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ee("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:O,maxSamples:z,samples:B}}function OT(r){const t=this;let i=null,s=0,l=!1,u=!1;const h=new es,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||s!==0||l;return l=S,s=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,M){const b=g.clippingPlanes,C=g.clipIntersection,y=g.clipShadows,v=r.get(g);if(!l||b===null||b.length===0||u&&!y)u?_(null):p();else{const D=u?0:s,N=D*4;let O=v.clippingState||null;m.value=O,O=_(b,S,N,M);for(let z=0;z!==N;++z)O[z]=i[z];v.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,S,M,b){const C=g!==null?g.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const v=M+C*4,D=S.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,O=M;N!==C;++N,O+=4)h.copy(g[N]).applyMatrix4(D,d),h.normal.toArray(y,O),y[O+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function PT(r){let t=new WeakMap;function i(h,d){return d===ad?h.mapping=Ns:d===sd&&(h.mapping=Ir),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ad||d===sd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ov(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const is=4,O0=[.125,.215,.35,.446,.526,.582],Ds=20,FT=256,Wo=new sp,P0=new Re;let Vh=null,Gh=0,kh=0,Xh=!1;const zT=new Z;class F0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=zT}=u;Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,Gh,kh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ns||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:xa,format:Di,colorSpace:Hr,depthBuffer:!1},l=z0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IT(u)),this._blurMaterial=HT(u,t,i),this._ggxMaterial=BT(u,t,i)}return l}_compileMaterial(t){const i=new Ma(new ri,t);this._renderer.compile(i,Wo)}_sceneToCubeUV(t,i,s,l,u){const m=new xi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(P0),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ma(new sl,new Rv({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,v=!0):(y.color.copy(P0),v=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[N],u.y,u.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[N]));const z=this._cubeSize;Ur(l,O*z,N>2?z:0,z,z),g.setRenderTarget(l),v&&g.render(C,m),g.render(t,m)}g.toneMapping=M,g.autoClear=S,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ns||t.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Ur(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Wo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,M=g*S,{_lodMax:b}=this,C=this._sizeLods[s],y=3*C*(s>b-is?s-b+is:0),v=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Ur(u,y,v,3*C,2*C),l.setRenderTarget(u),l.render(d,Wo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Ur(t,y,v,3*C,2*C),l.setRenderTarget(t),l.render(d,Wo)}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Ds-1),C=u/b,y=isFinite(u)?1+Math.floor(_*C):Ds;y>Ds&&ee(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ds}`);const v=[];let D=0;for(let F=0;F<Ds;++F){const J=F/C,R=Math.exp(-J*J/2);v.push(R),F===0?D+=R:F<y&&(D+=2*R)}for(let F=0;F<v.length;F++)v[F]=v[F]/D;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-s;const O=this._sizeLods[l],z=3*O*(l>N-is?l-N+is:0),B=4*(this._cubeSize-O);Ur(i,z,B,3*O,2*O),m.setRenderTarget(i),m.render(g,Wo)}}function IT(r){const t=[],i=[],s=[];let l=r;const u=r-is+1+O0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-is?m=O0[h-r+is-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,C=3,y=2,v=1,D=new Float32Array(C*b*M),N=new Float32Array(y*b*M),O=new Float32Array(v*b*M);for(let B=0;B<M;B++){const F=B%3*2/3-1,J=B>2?0:-1,R=[F,J,0,F+2/3,J,0,F+2/3,J+1,0,F,J,0,F+2/3,J+1,0,F,J+1,0];D.set(R,C*b*B),N.set(S,y*b*B);const w=[B,B,B,B,B,B];O.set(w,v*b*B)}const z=new ri;z.setAttribute("position",new si(D,C)),z.setAttribute("uv",new si(N,y)),z.setAttribute("faceIndex",new si(O,v)),s.push(new Ma(z,null)),l>is&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function z0(r,t,i){const s=new ki(r,t,i);return s.texture.mapping=ec,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function BT(r,t,i){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function HT(r,t,i){const s=new Float32Array(Ds),l=new Z(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function I0(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function B0(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ad||m===sd,_=m===Ns||m===Ir;if(p||_){let g=t.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new F0(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new F0(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function GT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&$o("WebGLRenderer: "+s+" extension not supported."),l}}}function kT(r,t,i,s){const l={},u=new WeakMap;function h(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)t.update(S[M],r.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,b=g.attributes.position;let C=0;if(M!==null){const D=M.array;C=M.version;for(let N=0,O=D.length;N<O;N+=3){const z=D[N+0],B=D[N+1],F=D[N+2];S.push(z,B,B,F,F,z)}}else if(b!==void 0){const D=b.array;C=b.version;for(let N=0,O=D.length/3-1;N<O;N+=3){const z=N+0,B=N+1,F=N+2;S.push(z,B,B,F,F,z)}}else return;const y=new(Ev(S)?Dv:wv)(S,1);y.version=C;const v=u.get(g);v&&t.remove(v),u.set(g,y)}function _(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function XT(r,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){r.drawElements(s,M,u,S*h),i.update(M,s,1)}function p(S,M,b){b!==0&&(r.drawElementsInstanced(s,M,u,S*h,b),i.update(M,s,b))}function _(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,S,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,s,1)}function g(S,M,b,C){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/h,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,S,0,C,0,b);let v=0;for(let D=0;D<b;D++)v+=M[D]*C[D];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function WT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function YT(r,t,i){const s=new WeakMap,l=new nn;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let w=function(){J.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let O=0;b===!0&&(O=1),C===!0&&(O=2),y===!0&&(O=3);let z=d.attributes.position.count*O,B=1;z>t.maxTextureSize&&(B=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const F=new Float32Array(z*B*4*g),J=new Tv(F,z,B,g);J.type=Hi,J.needsUpdate=!0;const R=O*4;for(let k=0;k<g;k++){const st=v[k],at=D[k],dt=N[k],ct=z*B*4*k;for(let P=0;P<st.count;P++){const H=P*R;b===!0&&(l.fromBufferAttribute(st,P),F[ct+H+0]=l.x,F[ct+H+1]=l.y,F[ct+H+2]=l.z,F[ct+H+3]=0),C===!0&&(l.fromBufferAttribute(at,P),F[ct+H+4]=l.x,F[ct+H+5]=l.y,F[ct+H+6]=l.z,F[ct+H+7]=0),y===!0&&(l.fromBufferAttribute(dt,P),F[ct+H+8]=l.x,F[ct+H+9]=l.y,F[ct+H+10]=l.z,F[ct+H+11]=dt.itemSize===4?l.w:1)}}S={count:g,texture:J,size:new fe(z,B)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:u}}function qT(r,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const jT={[lv]:"LINEAR_TONE_MAPPING",[uv]:"REINHARD_TONE_MAPPING",[cv]:"CINEON_TONE_MAPPING",[fv]:"ACES_FILMIC_TONE_MAPPING",[dv]:"AGX_TONE_MAPPING",[pv]:"NEUTRAL_TONE_MAPPING",[hv]:"CUSTOM_TONE_MAPPING"};function ZT(r,t,i,s,l){const u=new ki(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new ki(t,i,{type:xa,depthBuffer:!1,stencilBuffer:!1}),d=new ri;d.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ui([0,2,0,0,2,0],2));const m=new IM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ma(d,m),_=new sp(-1,1,1,-1,0,1);let g=null,S=null,M=!1,b,C=null,y=[],v=!1;this.setSize=function(D,N){u.setSize(D,N),h.setSize(D,N);for(let O=0;O<y.length;O++){const z=y[O];z.setSize&&z.setSize(D,N)}},this.setEffects=function(D){y=D,v=y.length>0&&y[0].isRenderPass===!0;const N=u.width,O=u.height;for(let z=0;z<y.length;z++){const B=y[z];B.setSize&&B.setSize(N,O)}},this.begin=function(D,N){if(M||D.toneMapping===Gi&&y.length===0)return!1;if(C=N,N!==null){const O=N.width,z=N.height;(u.width!==O||u.height!==z)&&this.setSize(O,z)}return v===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=Gi,!0},this.hasRenderPass=function(){return v},this.end=function(D,N){D.toneMapping=b,M=!0;let O=u,z=h;for(let B=0;B<y.length;B++){const F=y[B];if(F.enabled!==!1&&(F.render(D,z,O,N),F.needsSwap!==!1)){const J=O;O=z,z=J}}if(g!==D.outputColorSpace||S!==D.toneMapping){g=D.outputColorSpace,S=D.toneMapping,m.defines={},be.getTransfer(g)===Be&&(m.defines.SRGB_TRANSFER="");const B=jT[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,D.setRenderTarget(C),D.render(p,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Bv=new Hn,Vd=new el(1,1),Hv=new Tv,Vv=new cM,Gv=new Nv,H0=[],V0=[],G0=new Float32Array(16),k0=new Float32Array(9),X0=new Float32Array(4);function Xr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=H0[l];if(u===void 0&&(u=new Float32Array(l),H0[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(u,d)}return u}function mn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function gn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function sc(r,t){let i=V0[t];i===void 0&&(i=new Int32Array(t),V0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function KT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2fv(this.addr,t),gn(i,t)}}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;r.uniform3fv(this.addr,t),gn(i,t)}}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4fv(this.addr,t),gn(i,t)}}function tA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;X0.set(s),r.uniformMatrix2fv(this.addr,!1,X0),gn(i,s)}}function eA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;k0.set(s),r.uniformMatrix3fv(this.addr,!1,k0),gn(i,s)}}function nA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;G0.set(s),r.uniformMatrix4fv(this.addr,!1,G0),gn(i,s)}}function iA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function aA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2iv(this.addr,t),gn(i,t)}}function sA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;r.uniform3iv(this.addr,t),gn(i,t)}}function rA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4iv(this.addr,t),gn(i,t)}}function oA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2uiv(this.addr,t),gn(i,t)}}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;r.uniform3uiv(this.addr,t),gn(i,t)}}function cA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4uiv(this.addr,t),gn(i,t)}}function fA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Vd.compareFunction=i.isReversedDepthBuffer()?ep:tp,u=Vd):u=Bv,i.setTexture2D(t||u,l)}function hA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Vv,l)}function dA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Gv,l)}function pA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Hv,l)}function mA(r){switch(r){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return tA;case 35675:return eA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return lA;case 36295:return uA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return pA}}function gA(r,t){r.uniform1fv(this.addr,t)}function _A(r,t){const i=Xr(t,this.size,2);r.uniform2fv(this.addr,i)}function vA(r,t){const i=Xr(t,this.size,3);r.uniform3fv(this.addr,i)}function xA(r,t){const i=Xr(t,this.size,4);r.uniform4fv(this.addr,i)}function SA(r,t){const i=Xr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function yA(r,t){const i=Xr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function MA(r,t){const i=Xr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function EA(r,t){r.uniform1iv(this.addr,t)}function bA(r,t){r.uniform2iv(this.addr,t)}function TA(r,t){r.uniform3iv(this.addr,t)}function AA(r,t){r.uniform4iv(this.addr,t)}function CA(r,t){r.uniform1uiv(this.addr,t)}function RA(r,t){r.uniform2uiv(this.addr,t)}function wA(r,t){r.uniform3uiv(this.addr,t)}function DA(r,t){r.uniform4uiv(this.addr,t)}function UA(r,t,i){const s=this.cache,l=t.length,u=sc(i,l);mn(s,u)||(r.uniform1iv(this.addr,u),gn(s,u));let h;this.type===r.SAMPLER_2D_SHADOW?h=Vd:h=Bv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function LA(r,t,i){const s=this.cache,l=t.length,u=sc(i,l);mn(s,u)||(r.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Vv,u[h])}function NA(r,t,i){const s=this.cache,l=t.length,u=sc(i,l);mn(s,u)||(r.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Gv,u[h])}function OA(r,t,i){const s=this.cache,l=t.length,u=sc(i,l);mn(s,u)||(r.uniform1iv(this.addr,u),gn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Hv,u[h])}function PA(r){switch(r){case 5126:return gA;case 35664:return _A;case 35665:return vA;case 35666:return xA;case 35674:return SA;case 35675:return yA;case 35676:return MA;case 5124:case 35670:return EA;case 35667:case 35671:return bA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return CA;case 36294:return RA;case 36295:return wA;case 36296:return DA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return OA}}class FA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=mA(i.type)}}class zA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PA(i.type)}}class IA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function W0(r,t){r.seq.push(t),r.map[t.id]=t}function BA(r,t,i){const s=r.name,l=s.length;for(Wh.lastIndex=0;;){const u=Wh.exec(s),h=Wh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){W0(i,p===void 0?new FA(d,r,t):new zA(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new IA(d),W0(i,g)),i=g}}}class ju{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);BA(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Y0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const HA=37297;let VA=0;function GA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const q0=new ue;function kA(r){be._getMatrix(q0,be.workingColorSpace,r);const t=`mat3( ${q0.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(r)){case Zu:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function j0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+GA(r.getShaderSource(t),d)}else return u}function XA(r,t){const i=kA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const WA={[lv]:"Linear",[uv]:"Reinhard",[cv]:"Cineon",[fv]:"ACESFilmic",[dv]:"AgX",[pv]:"Neutral",[hv]:"Custom"};function YA(r,t){const i=WA[t];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vu=new Z;function qA(){be.getLuminanceCoefficients(Vu);const r=Vu.x.toFixed(4),t=Vu.y.toFixed(4),i=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function ZA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function KA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function jo(r){return r!==""}function Z0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function K0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(r){return r.replace(QA,$A)}const JA=new Map;function $A(r,t){let i=he[t];if(i===void 0){const s=JA.get(t);if(s!==void 0)i=he[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Gd(i)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(r){return r.replace(t1,e1)}function e1(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function J0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const n1={[ku]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function i1(r){return n1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a1={[Ns]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[ec]:"ENVMAP_TYPE_CUBE_UV"};function s1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":a1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const r1={[Ir]:"ENVMAP_MODE_REFRACTION"};function o1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":r1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l1={[ov]:"ENVMAP_BLENDING_MULTIPLY",[wy]:"ENVMAP_BLENDING_MIX",[Dy]:"ENVMAP_BLENDING_ADD"};function u1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":l1[r.combine]||"ENVMAP_BLENDING_NONE"}function c1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function f1(r,t,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=i1(i),p=s1(i),_=o1(i),g=u1(i),S=c1(i),M=jA(i),b=ZA(u),C=l.createProgram();let y,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(jo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(jo).join(`
`),v.length>0&&(v+=`
`)):(y=[J0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),v=[J0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?he.tonemapping_pars_fragment:"",i.toneMapping!==Gi?YA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,XA("linearToOutputTexel",i.outputColorSpace),qA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),h=Gd(h),h=Z0(h,i),h=K0(h,i),d=Gd(d),d=Z0(d,i),d=K0(d,i),h=Q0(h),d=Q0(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===a0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=D+y+h,O=D+v+d,z=Y0(l,l.VERTEX_SHADER,N),B=Y0(l,l.FRAGMENT_SHADER,O);l.attachShader(C,z),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(k){if(r.debug.checkShaderErrors){const st=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(z)||"",dt=l.getShaderInfoLog(B)||"",ct=st.trim(),P=at.trim(),H=dt.trim();let it=!0,yt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(it=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,z,B);else{const xt=j0(l,z,"vertex"),L=j0(l,B,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ct+`
`+xt+`
`+L)}else ct!==""?ee("WebGLProgram: Program Info Log:",ct):(P===""||H==="")&&(yt=!1);yt&&(k.diagnostics={runnable:it,programLog:ct,vertexShader:{log:P,prefix:y},fragmentShader:{log:H,prefix:v}})}l.deleteShader(z),l.deleteShader(B),J=new ju(l,C),R=KA(l,C)}let J;this.getUniforms=function(){return J===void 0&&F(this),J};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,HA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=B,this}let h1=0;class d1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new p1(t),i.set(t,s)),s}}class p1{constructor(t){this.id=h1++,this.code=t,this.usedTimes=0}}function m1(r,t,i,s,l,u,h){const d=new Av,m=new d1,p=new Set,_=[],g=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,w,k,st,at){const dt=st.fog,ct=at.geometry,P=R.isMeshStandardMaterial?st.environment:null,H=(R.isMeshStandardMaterial?i:t).get(R.envMap||P),it=H&&H.mapping===ec?H.image.height:null,yt=b[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&ee("WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const xt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,L=xt!==void 0?xt.length:0;let nt=0;ct.morphAttributes.position!==void 0&&(nt=1),ct.morphAttributes.normal!==void 0&&(nt=2),ct.morphAttributes.color!==void 0&&(nt=3);let gt,Tt,It,et;if(yt){const Ee=Bi[yt];gt=Ee.vertexShader,Tt=Ee.fragmentShader}else gt=R.vertexShader,Tt=R.fragmentShader,m.update(R),It=m.getVertexShaderID(R),et=m.getFragmentShaderID(R);const ut=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Gt=at.isInstancedMesh===!0,Bt=at.isBatchedMesh===!0,pe=!!R.map,Je=!!R.matcap,ve=!!H,me=!!R.aoMap,we=!!R.lightMap,se=!!R.bumpMap,$e=!!R.normalMap,V=!!R.displacementMap,je=!!R.emissiveMap,Me=!!R.metalnessMap,Ne=!!R.roughnessMap,Yt=R.anisotropy>0,U=R.clearcoat>0,E=R.dispersion>0,W=R.iridescence>0,ht=R.sheen>0,vt=R.transmission>0,lt=Yt&&!!R.anisotropyMap,jt=U&&!!R.clearcoatMap,Ct=U&&!!R.clearcoatNormalMap,kt=U&&!!R.clearcoatRoughnessMap,te=W&&!!R.iridescenceMap,Mt=W&&!!R.iridescenceThicknessMap,Et=ht&&!!R.sheenColorMap,Ft=ht&&!!R.sheenRoughnessMap,Ot=!!R.specularMap,Rt=!!R.specularColorMap,oe=!!R.specularIntensityMap,X=vt&&!!R.transmissionMap,Ut=vt&&!!R.thicknessMap,bt=!!R.gradientMap,Pt=!!R.alphaMap,St=R.alphaTest>0,_t=!!R.alphaHash,At=!!R.extensions;let ne=Gi;R.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ne=r.toneMapping);const Pe={shaderID:yt,shaderType:R.type,shaderName:R.name,vertexShader:gt,fragmentShader:Tt,defines:R.defines,customVertexShaderID:It,customFragmentShaderID:et,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Bt,batchingColor:Bt&&at._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&at.instanceColor!==null,instancingMorph:Gt&&at.morphTexture!==null,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Hr,alphaToCoverage:!!R.alphaToCoverage,map:pe,matcap:Je,envMap:ve,envMapMode:ve&&H.mapping,envMapCubeUVHeight:it,aoMap:me,lightMap:we,bumpMap:se,normalMap:$e,displacementMap:V,emissiveMap:je,normalMapObjectSpace:$e&&R.normalMapType===Oy,normalMapTangentSpace:$e&&R.normalMapType===Ny,metalnessMap:Me,roughnessMap:Ne,anisotropy:Yt,anisotropyMap:lt,clearcoat:U,clearcoatMap:jt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:kt,dispersion:E,iridescence:W,iridescenceMap:te,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:Ft,specularMap:Ot,specularColorMap:Rt,specularIntensityMap:oe,transmission:vt,transmissionMap:X,thicknessMap:Ut,gradientMap:bt,opaque:R.transparent===!1&&R.blending===Pr&&R.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:R.combine,mapUv:pe&&C(R.map.channel),aoMapUv:me&&C(R.aoMap.channel),lightMapUv:we&&C(R.lightMap.channel),bumpMapUv:se&&C(R.bumpMap.channel),normalMapUv:$e&&C(R.normalMap.channel),displacementMapUv:V&&C(R.displacementMap.channel),emissiveMapUv:je&&C(R.emissiveMap.channel),metalnessMapUv:Me&&C(R.metalnessMap.channel),roughnessMapUv:Ne&&C(R.roughnessMap.channel),anisotropyMapUv:lt&&C(R.anisotropyMap.channel),clearcoatMapUv:jt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&C(R.sheenRoughnessMap.channel),specularMapUv:Ot&&C(R.specularMap.channel),specularColorMapUv:Rt&&C(R.specularColorMap.channel),specularIntensityMapUv:oe&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Ut&&C(R.thicknessMap.channel),alphaMapUv:Pt&&C(R.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&($e||Yt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ct.attributes.uv&&(pe||Pt),fog:!!dt,useFog:R.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:wt,skinning:at.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,decodeVideoTexture:pe&&R.map.isVideoTexture===!0&&be.getTransfer(R.map.colorSpace)===Be,decodeVideoTextureEmissive:je&&R.emissiveMap.isVideoTexture===!0&&be.getTransfer(R.emissiveMap.colorSpace)===Be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ma,flipSided:R.side===jn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:At&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&R.extensions.multiDraw===!0||Bt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function v(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)w.push(k),w.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(D(w,R),N(w,R),w.push(r.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function D(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function N(R,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),R.push(d.mask)}function O(R){const w=b[R.type];let k;if(w){const st=Bi[w];k=EM.clone(st.uniforms)}else k=R.uniforms;return k}function z(R,w){let k=g.get(w);return k!==void 0?++k.usedTimes:(k=new f1(r,w,R,u),_.push(k),g.set(w,k)),k}function B(R){if(--R.usedTimes===0){const w=_.indexOf(R);_[w]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function F(R){m.remove(R)}function J(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:O,acquireProgram:z,releaseProgram:B,releaseShaderCache:F,programs:_,dispose:J}}function g1(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function _1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function $0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function tv(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(g,S,M,b,C,y){let v=r[t];return v===void 0?(v={id:g.id,object:g,geometry:S,material:M,groupOrder:b,renderOrder:g.renderOrder,z:C,group:y},r[t]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=M,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=C,v.group=y),t++,v}function d(g,S,M,b,C,y){const v=h(g,S,M,b,C,y);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,S,M,b,C,y){const v=h(g,S,M,b,C,y);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||_1),s.length>1&&s.sort(S||$0),l.length>1&&l.sort(S||$0)}function _(){for(let g=t,S=r.length;g<S;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function v1(){let r=new WeakMap;function t(s,l){const u=r.get(s);let h;return u===void 0?(h=new tv,r.set(s,[h])):l>=u.length?(h=new tv,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function x1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Re};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function S1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let y1=0;function M1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function E1(r){const t=new x1,i=S1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,u=new Qe,h=new Qe;function d(p){let _=0,g=0,S=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let M=0,b=0,C=0,y=0,v=0,D=0,N=0,O=0,z=0,B=0,F=0;p.sort(M1);for(let R=0,w=p.length;R<w;R++){const k=p[R],st=k.color,at=k.intensity,dt=k.distance;let ct=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Br?ct=k.shadow.map.texture:ct=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=st.r*at,g+=st.g*at,S+=st.b*at;else if(k.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(k.sh.coefficients[P],at);F++}else if(k.isDirectionalLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,it=i.get(k);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.directionalShadow[M]=it,s.directionalShadowMap[M]=ct,s.directionalShadowMatrix[M]=k.shadow.matrix,D++}s.directional[M]=P,M++}else if(k.isSpotLight){const P=t.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(st).multiplyScalar(at),P.distance=dt,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,s.spot[C]=P;const H=k.shadow;if(k.map&&(s.spotLightMap[z]=k.map,z++,H.updateMatrices(k),k.castShadow&&B++),s.spotLightMatrix[C]=H.matrix,k.castShadow){const it=i.get(k);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,s.spotShadow[C]=it,s.spotShadowMap[C]=ct,O++}C++}else if(k.isRectAreaLight){const P=t.get(k);P.color.copy(st).multiplyScalar(at),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=P,y++}else if(k.isPointLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const H=k.shadow,it=i.get(k);it.shadowIntensity=H.intensity,it.shadowBias=H.bias,it.shadowNormalBias=H.normalBias,it.shadowRadius=H.radius,it.shadowMapSize=H.mapSize,it.shadowCameraNear=H.camera.near,it.shadowCameraFar=H.camera.far,s.pointShadow[b]=it,s.pointShadowMap[b]=ct,s.pointShadowMatrix[b]=k.shadow.matrix,N++}s.point[b]=P,b++}else if(k.isHemisphereLight){const P=t.get(k);P.skyColor.copy(k.color).multiplyScalar(at),P.groundColor.copy(k.groundColor).multiplyScalar(at),s.hemi[v]=P,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=S;const J=s.hash;(J.directionalLength!==M||J.pointLength!==b||J.spotLength!==C||J.rectAreaLength!==y||J.hemiLength!==v||J.numDirectionalShadows!==D||J.numPointShadows!==N||J.numSpotShadows!==O||J.numSpotMaps!==z||J.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=O+z-B,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=F,J.directionalLength=M,J.pointLength=b,J.spotLength=C,J.rectAreaLength=y,J.hemiLength=v,J.numDirectionalShadows=D,J.numPointShadows=N,J.numSpotShadows=O,J.numSpotMaps=z,J.numLightProbes=F,s.version=y1++)}function m(p,_){let g=0,S=0,M=0,b=0,C=0;const y=_.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const N=p[v];if(N.isDirectionalLight){const O=s.directional[g];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),g++}else if(N.isSpotLight){const O=s.spot[M];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const O=s.rectArea[b];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const O=s.point[S];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const O=s.hemi[C];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function ev(r){const t=new E1(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function b1(r){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new ev(r),t.set(l,[d])):u>=h.length?(d=new ev(r),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const T1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,C1=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],R1=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],nv=new Qe,Yo=new Z,Yh=new Z;function w1(r,t,i){let s=new ap;const l=new fe,u=new fe,h=new nn,d=new BM,m=new HM,p={},_=i.maxTextureSize,g={[as]:jn,[jn]:as,[ma]:ma},S=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:T1,fragmentShader:A1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new ri;b.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ma(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let v=this.type;this.render=function(B,F,J){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===cy&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=ku);const R=r.getRenderTarget(),w=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),st=r.state;st.setBlending(_a),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const at=v!==this.type;at&&F.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ct=>ct.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ct=B.length;dt<ct;dt++){const P=B[dt],H=P.shadow;if(H===void 0){ee("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const it=H.getFrameExtents();if(l.multiply(it),u.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/it.x),l.x=u.x*it.x,H.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/it.y),l.y=u.y*it.y,H.mapSize.y=u.y)),H.map===null||at===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===qo){if(P.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ki(l.x,l.y,{format:Br,type:xa,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new el(l.x,l.y,Hi),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Sa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn}else{P.isPointLight?(H.map=new Ov(l.x),H.map.depthTexture=new zM(l.x,Wi)):(H.map=new ki(l.x,l.y),H.map.depthTexture=new el(l.x,l.y,Wi)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Sa;const xt=r.state.buffers.depth.getReversed();this.type===ku?(H.map.depthTexture.compareFunction=xt?ep:tp,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,xt),r.clear();else{xt===0&&(r.setRenderTarget(H.map),r.clear());const L=H.getViewport(xt);h.set(u.x*L.x,u.y*L.y,u.x*L.z,u.y*L.w),st.viewport(h)}if(P.isPointLight){const L=H.camera,nt=H.matrix,gt=P.distance||L.far;gt!==L.far&&(L.far=gt,L.updateProjectionMatrix()),Yo.setFromMatrixPosition(P.matrixWorld),L.position.copy(Yo),Yh.copy(L.position),Yh.add(C1[xt]),L.up.copy(R1[xt]),L.lookAt(Yh),L.updateMatrixWorld(),nt.makeTranslation(-Yo.x,-Yo.y,-Yo.z),nv.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),H._frustum.setFromProjectionMatrix(nv,L.coordinateSystem,L.reversedDepth)}else H.updateMatrices(P);s=H.getFrustum(),O(F,J,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===qo&&D(H,J),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(R,w,k)};function D(B,F){const J=t.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ki(l.x,l.y,{format:Br,type:xa})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(F,null,J,S,C,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(F,null,J,M,C,null)}function N(B,F,J,R){let w=null;const k=J.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)w=k;else if(w=J.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const st=w.uuid,at=F.uuid;let dt=p[st];dt===void 0&&(dt={},p[st]=dt);let ct=dt[at];ct===void 0&&(ct=w.clone(),dt[at]=ct,F.addEventListener("dispose",z)),w=ct}if(w.visible=F.visible,w.wireframe=F.wireframe,R===qo?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:g[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,J.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const st=r.properties.get(w);st.light=J}return w}function O(B,F,J,R,w){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===qo)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,B.matrixWorld);const at=t.update(B),dt=B.material;if(Array.isArray(dt)){const ct=at.groups;for(let P=0,H=ct.length;P<H;P++){const it=ct[P],yt=dt[it.materialIndex];if(yt&&yt.visible){const xt=N(B,yt,R,w);B.onBeforeShadow(r,B,F,J,at,xt,it),r.renderBufferDirect(J,null,at,xt,B,it),B.onAfterShadow(r,B,F,J,at,xt,it)}}}else if(dt.visible){const ct=N(B,dt,R,w);B.onBeforeShadow(r,B,F,J,at,ct,null),r.renderBufferDirect(J,null,at,ct,B,null),B.onAfterShadow(r,B,F,J,at,ct,null)}}const st=B.children;for(let at=0,dt=st.length;at<dt;at++)O(st[at],F,J,R,w)}function z(B){B.target.removeEventListener("dispose",z);for(const J in p){const R=p[J],w=B.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const D1={[Qh]:Jh,[$h]:nd,[td]:id,[zr]:ed,[Jh]:Qh,[nd]:$h,[id]:td,[ed]:zr};function U1(r,t){function i(){let X=!1;const Ut=new nn;let bt=null;const Pt=new nn(0,0,0,0);return{setMask:function(St){bt!==St&&!X&&(r.colorMask(St,St,St,St),bt=St)},setLocked:function(St){X=St},setClear:function(St,_t,At,ne,Pe){Pe===!0&&(St*=ne,_t*=ne,At*=ne),Ut.set(St,_t,At,ne),Pt.equals(Ut)===!1&&(r.clearColor(St,_t,At,ne),Pt.copy(Ut))},reset:function(){X=!1,bt=null,Pt.set(-1,0,0,0)}}}function s(){let X=!1,Ut=!1,bt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ne=St;St=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(_t){_t?ut(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!X&&(r.depthMask(_t),bt=_t)},setFunc:function(_t){if(Ut&&(_t=D1[_t]),Pt!==_t){switch(_t){case Qh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case $h:r.depthFunc(r.LESS);break;case zr:r.depthFunc(r.LEQUAL);break;case td:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),r.clearDepth(_t),St=_t)},reset:function(){X=!1,bt=null,Pt=null,St=null,Ut=!1}}}function l(){let X=!1,Ut=null,bt=null,Pt=null,St=null,_t=null,At=null,ne=null,Pe=null;return{setTest:function(Ee){X||(Ee?ut(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!X&&(r.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,Un,Si){(bt!==Ee||Pt!==Un||St!==Si)&&(r.stencilFunc(Ee,Un,Si),bt=Ee,Pt=Un,St=Si)},setOp:function(Ee,Un,Si){(_t!==Ee||At!==Un||ne!==Si)&&(r.stencilOp(Ee,Un,Si),_t=Ee,At=Un,ne=Si)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Pe!==Ee&&(r.clearStencil(Ee),Pe=Ee)},reset:function(){X=!1,Ut=null,bt=null,Pt=null,St=null,_t=null,At=null,ne=null,Pe=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,M=[],b=null,C=!1,y=null,v=null,D=null,N=null,O=null,z=null,B=null,F=new Re(0,0,0),J=0,R=!1,w=null,k=null,st=null,at=null,dt=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const it=r.getParameter(r.VERSION);it.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(it)[1]),P=H>=1):it.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),P=H>=2);let yt=null,xt={};const L=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),gt=new nn().fromArray(L),Tt=new nn().fromArray(nt);function It(X,Ut,bt,Pt){const St=new Uint8Array(4),_t=r.createTexture();r.bindTexture(X,_t),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let At=0;At<bt;At++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,Pt,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(Ut+At,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return _t}const et={};et[r.TEXTURE_2D]=It(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=It(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=It(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=It(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(r.DEPTH_TEST),h.setFunc(zr),se(!1),$e(J_),ut(r.CULL_FACE),me(_a);function ut(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function wt(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function Gt(X,Ut){return g[X]!==Ut?(r.bindFramebuffer(X,Ut),g[X]=Ut,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ut),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Bt(X,Ut){let bt=M,Pt=!1;if(X){bt=S.get(Ut),bt===void 0&&(bt=[],S.set(Ut,bt));const St=X.textures;if(bt.length!==St.length||bt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)bt[_t]=r.COLOR_ATTACHMENT0+_t;bt.length=St.length,Pt=!0}}else bt[0]!==r.BACK&&(bt[0]=r.BACK,Pt=!0);Pt&&r.drawBuffers(bt)}function pe(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const Je={[ws]:r.FUNC_ADD,[hy]:r.FUNC_SUBTRACT,[dy]:r.FUNC_REVERSE_SUBTRACT};Je[py]=r.MIN,Je[my]=r.MAX;const ve={[gy]:r.ZERO,[_y]:r.ONE,[vy]:r.SRC_COLOR,[Zh]:r.SRC_ALPHA,[by]:r.SRC_ALPHA_SATURATE,[My]:r.DST_COLOR,[Sy]:r.DST_ALPHA,[xy]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[Ey]:r.ONE_MINUS_DST_COLOR,[yy]:r.ONE_MINUS_DST_ALPHA,[Ty]:r.CONSTANT_COLOR,[Ay]:r.ONE_MINUS_CONSTANT_COLOR,[Cy]:r.CONSTANT_ALPHA,[Ry]:r.ONE_MINUS_CONSTANT_ALPHA};function me(X,Ut,bt,Pt,St,_t,At,ne,Pe,Ee){if(X===_a){C===!0&&(wt(r.BLEND),C=!1);return}if(C===!1&&(ut(r.BLEND),C=!0),X!==fy){if(X!==y||Ee!==R){if((v!==ws||O!==ws)&&(r.blendEquation(r.FUNC_ADD),v=ws,O=ws),Ee)switch(X){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $_:r.blendFunc(r.ONE,r.ONE);break;case t0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case e0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ce("WebGLState: Invalid blending: ",X);break}else switch(X){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case t0:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e0:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",X);break}D=null,N=null,z=null,B=null,F.set(0,0,0),J=0,y=X,R=Ee}return}St=St||Ut,_t=_t||bt,At=At||Pt,(Ut!==v||St!==O)&&(r.blendEquationSeparate(Je[Ut],Je[St]),v=Ut,O=St),(bt!==D||Pt!==N||_t!==z||At!==B)&&(r.blendFuncSeparate(ve[bt],ve[Pt],ve[_t],ve[At]),D=bt,N=Pt,z=_t,B=At),(ne.equals(F)===!1||Pe!==J)&&(r.blendColor(ne.r,ne.g,ne.b,Pe),F.copy(ne),J=Pe),y=X,R=!1}function we(X,Ut){X.side===ma?wt(r.CULL_FACE):ut(r.CULL_FACE);let bt=X.side===jn;Ut&&(bt=!bt),se(bt),X.blending===Pr&&X.transparent===!1?me(_a):me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Pt=X.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),je(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function $e(X){X!==ly?(ut(r.CULL_FACE),X!==k&&(X===J_?r.cullFace(r.BACK):X===uy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),k=X}function V(X){X!==st&&(P&&r.lineWidth(X),st=X)}function je(X,Ut,bt){X?(ut(r.POLYGON_OFFSET_FILL),(at!==Ut||dt!==bt)&&(r.polygonOffset(Ut,bt),at=Ut,dt=bt)):wt(r.POLYGON_OFFSET_FILL)}function Me(X){X?ut(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Ne(X){X===void 0&&(X=r.TEXTURE0+ct-1),yt!==X&&(r.activeTexture(X),yt=X)}function Yt(X,Ut,bt){bt===void 0&&(yt===null?bt=r.TEXTURE0+ct-1:bt=yt);let Pt=xt[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[bt]=Pt),(Pt.type!==X||Pt.texture!==Ut)&&(yt!==bt&&(r.activeTexture(bt),yt=bt),r.bindTexture(X,Ut||et[X]),Pt.type=X,Pt.texture=Ut)}function U(){const X=xt[yt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function ht(){try{r.texSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function vt(){try{r.texSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function lt(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function jt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Ct(){try{r.texStorage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function kt(){try{r.texStorage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function te(){try{r.texImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Mt(){try{r.texImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Et(X){gt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),gt.copy(X))}function Ft(X){Tt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Tt.copy(X))}function Ot(X,Ut){let bt=p.get(Ut);bt===void 0&&(bt=new WeakMap,p.set(Ut,bt));let Pt=bt.get(X);Pt===void 0&&(Pt=r.getUniformBlockIndex(Ut,X.name),bt.set(X,Pt))}function Rt(X,Ut){const Pt=p.get(Ut).get(X);m.get(Ut)!==Pt&&(r.uniformBlockBinding(Ut,Pt,X.__bindingPointIndex),m.set(Ut,Pt))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},yt=null,xt={},g={},S=new WeakMap,M=[],b=null,C=!1,y=null,v=null,D=null,N=null,O=null,z=null,B=null,F=new Re(0,0,0),J=0,R=!1,w=null,k=null,st=null,at=null,dt=null,gt.set(0,0,r.canvas.width,r.canvas.height),Tt.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ut,disable:wt,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:pe,setBlending:me,setMaterial:we,setFlipSided:se,setCullFace:$e,setLineWidth:V,setPolygonOffset:je,setScissorTest:Me,activeTexture:Ne,bindTexture:Yt,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:te,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Rt,texStorage2D:Ct,texStorage3D:kt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:jt,scissor:Et,viewport:Ft,reset:oe}}function L1(r,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,_=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return M?new OffscreenCanvas(U,E):Qu("canvas")}function C(U,E,W){let ht=1;const vt=Yt(U);if((vt.width>W||vt.height>W)&&(ht=W/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const lt=Math.floor(ht*vt.width),jt=Math.floor(ht*vt.height);g===void 0&&(g=b(lt,jt));const Ct=E?b(lt,jt):g;return Ct.width=lt,Ct.height=jt,Ct.getContext("2d").drawImage(U,0,0,lt,jt),ee("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+jt+")."),Ct}else return"data"in U&&ee("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){r.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(U,E,W,ht,vt=!1){if(U!==null){if(r[U]!==void 0)return r[U];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=E;if(E===r.RED&&(W===r.FLOAT&&(lt=r.R32F),W===r.HALF_FLOAT&&(lt=r.R16F),W===r.UNSIGNED_BYTE&&(lt=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(lt=r.R8UI),W===r.UNSIGNED_SHORT&&(lt=r.R16UI),W===r.UNSIGNED_INT&&(lt=r.R32UI),W===r.BYTE&&(lt=r.R8I),W===r.SHORT&&(lt=r.R16I),W===r.INT&&(lt=r.R32I)),E===r.RG&&(W===r.FLOAT&&(lt=r.RG32F),W===r.HALF_FLOAT&&(lt=r.RG16F),W===r.UNSIGNED_BYTE&&(lt=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(lt=r.RG8UI),W===r.UNSIGNED_SHORT&&(lt=r.RG16UI),W===r.UNSIGNED_INT&&(lt=r.RG32UI),W===r.BYTE&&(lt=r.RG8I),W===r.SHORT&&(lt=r.RG16I),W===r.INT&&(lt=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(lt=r.RGB8UI),W===r.UNSIGNED_SHORT&&(lt=r.RGB16UI),W===r.UNSIGNED_INT&&(lt=r.RGB32UI),W===r.BYTE&&(lt=r.RGB8I),W===r.SHORT&&(lt=r.RGB16I),W===r.INT&&(lt=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(lt=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(lt=r.RGBA16UI),W===r.UNSIGNED_INT&&(lt=r.RGBA32UI),W===r.BYTE&&(lt=r.RGBA8I),W===r.SHORT&&(lt=r.RGBA16I),W===r.INT&&(lt=r.RGBA32I)),E===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(lt=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(lt=r.R11F_G11F_B10F)),E===r.RGBA){const jt=vt?Zu:be.getTransfer(ht);W===r.FLOAT&&(lt=r.RGBA32F),W===r.HALF_FLOAT&&(lt=r.RGBA16F),W===r.UNSIGNED_BYTE&&(lt=jt===Be?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(lt=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(lt=r.RGB5_A1)}return(lt===r.R16F||lt===r.R32F||lt===r.RG16F||lt===r.RG32F||lt===r.RGBA16F||lt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function O(U,E){let W;return U?E===null||E===Wi||E===Jo?W=r.DEPTH24_STENCIL8:E===Hi?W=r.DEPTH32F_STENCIL8:E===Qo&&(W=r.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===Jo?W=r.DEPTH_COMPONENT24:E===Hi?W=r.DEPTH_COMPONENT32F:E===Qo&&(W=r.DEPTH_COMPONENT16),W}function z(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dn&&U.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),J(E),E.isVideoTexture&&_.delete(E)}function F(U){const E=U.target;E.removeEventListener("dispose",F),w(E)}function J(U){const E=s.get(U);if(E.__webglInit===void 0)return;const W=U.source,ht=S.get(W);if(ht){const vt=ht[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&R(U),Object.keys(ht).length===0&&S.delete(W)}s.remove(U)}function R(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const W=U.source,ht=S.get(W);delete ht[E.__cacheKey],h.memory.textures--}function w(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let vt=0;vt<E.__webglFramebuffer[ht].length;vt++)r.deleteFramebuffer(E.__webglFramebuffer[ht][vt]);else r.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)r.deleteFramebuffer(E.__webglFramebuffer[ht]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=U.textures;for(let ht=0,vt=W.length;ht<vt;ht++){const lt=s.get(W[ht]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(W[ht])}s.remove(U)}let k=0;function st(){k=0}function at(){const U=k;return U>=l.maxTextures&&ee("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),k+=1,U}function dt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ct(U,E){const W=s.get(U);if(U.isVideoTexture&&Me(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const ht=U.image;if(ht===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,U,E);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function P(U,E){const W=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){et(W,U,E);return}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function H(U,E){const W=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){et(W,U,E);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function it(U,E){const W=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&W.__version!==U.version){ut(W,U,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const yt={[rd]:r.REPEAT,[ga]:r.CLAMP_TO_EDGE,[od]:r.MIRRORED_REPEAT},xt={[Dn]:r.NEAREST,[Uy]:r.NEAREST_MIPMAP_NEAREST,[_u]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[gh]:r.LINEAR_MIPMAP_NEAREST,[Us]:r.LINEAR_MIPMAP_LINEAR},L={[Py]:r.NEVER,[Hy]:r.ALWAYS,[Fy]:r.LESS,[tp]:r.LEQUAL,[zy]:r.EQUAL,[ep]:r.GEQUAL,[Iy]:r.GREATER,[By]:r.NOTEQUAL};function nt(U,E){if(E.type===Hi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===gh||E.magFilter===_u||E.magFilter===Us||E.minFilter===Pn||E.minFilter===gh||E.minFilter===_u||E.minFilter===Us)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,yt[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,yt[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,yt[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,xt[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==_u&&E.minFilter!==Us||E.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(U,E){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const ht=E.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const lt=dt(E);if(lt!==U.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,W=!0),vt[lt].usedTimes++;const jt=vt[U.__cacheKey];jt!==void 0&&(vt[U.__cacheKey].usedTimes--,jt.usedTimes===0&&R(E)),U.__cacheKey=lt,U.__webglTexture=vt[lt].texture}return W}function Tt(U,E,W){return Math.floor(Math.floor(U/W)/E)}function It(U,E,W,ht){const lt=U.updateRanges;if(lt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,W,ht,E.data);else{lt.sort((Mt,Et)=>Mt.start-Et.start);let jt=0;for(let Mt=1;Mt<lt.length;Mt++){const Et=lt[jt],Ft=lt[Mt],Ot=Et.start+Et.count,Rt=Tt(Ft.start,E.width,4),oe=Tt(Et.start,E.width,4);Ft.start<=Ot+1&&Rt===oe&&Tt(Ft.start+Ft.count-1,E.width,4)===Rt?Et.count=Math.max(Et.count,Ft.start+Ft.count-Et.start):(++jt,lt[jt]=Ft)}lt.length=jt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),kt=r.getParameter(r.UNPACK_SKIP_PIXELS),te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Et=lt.length;Mt<Et;Mt++){const Ft=lt[Mt],Ot=Math.floor(Ft.start/4),Rt=Math.ceil(Ft.count/4),oe=Ot%E.width,X=Math.floor(Ot/E.width),Ut=Rt,bt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,oe,X,Ut,bt,W,ht,E.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,te)}}function et(U,E,W){let ht=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=r.TEXTURE_3D);const vt=gt(U,E),lt=E.source;i.bindTexture(ht,U.__webglTexture,r.TEXTURE0+W);const jt=s.get(lt);if(lt.version!==jt.__version||vt===!0){i.activeTexture(r.TEXTURE0+W);const Ct=be.getPrimaries(be.workingColorSpace),kt=E.colorSpace===ns?null:be.getPrimaries(E.colorSpace),te=E.colorSpace===ns||Ct===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Mt=C(E.image,!1,l.maxTextureSize);Mt=Ne(E,Mt);const Et=u.convert(E.format,E.colorSpace),Ft=u.convert(E.type);let Ot=N(E.internalFormat,Et,Ft,E.colorSpace,E.isVideoTexture);nt(ht,E);let Rt;const oe=E.mipmaps,X=E.isVideoTexture!==!0,Ut=jt.__version===void 0||vt===!0,bt=lt.dataReady,Pt=z(E,Mt);if(E.isDepthTexture)Ot=O(E.format===Ls,E.type),Ut&&(X?i.texStorage2D(r.TEXTURE_2D,1,Ot,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,Ft,null));else if(E.isDataTexture)if(oe.length>0){X&&Ut&&i.texStorage2D(r.TEXTURE_2D,Pt,Ot,oe[0].width,oe[0].height);for(let St=0,_t=oe.length;St<_t;St++)Rt=oe[St],X?bt&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Rt.width,Rt.height,Et,Ft,Rt.data):i.texImage2D(r.TEXTURE_2D,St,Ot,Rt.width,Rt.height,0,Et,Ft,Rt.data);E.generateMipmaps=!1}else X?(Ut&&i.texStorage2D(r.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),bt&&It(E,Mt,Et,Ft)):i.texImage2D(r.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,Ft,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Ot,oe[0].width,oe[0].height,Mt.depth);for(let St=0,_t=oe.length;St<_t;St++)if(Rt=oe[St],E.format!==Di)if(Et!==null)if(X){if(bt)if(E.layerUpdates.size>0){const At=N0(Rt.width,Rt.height,E.format,E.type);for(const ne of E.layerUpdates){const Pe=Rt.data.subarray(ne*At/Rt.data.BYTES_PER_ELEMENT,(ne+1)*At/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,ne,Rt.width,Rt.height,1,Et,Pe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Rt.width,Rt.height,Mt.depth,Et,Rt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,Ot,Rt.width,Rt.height,Mt.depth,0,Rt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?bt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Rt.width,Rt.height,Mt.depth,Et,Ft,Rt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,St,Ot,Rt.width,Rt.height,Mt.depth,0,Et,Ft,Rt.data)}else{X&&Ut&&i.texStorage2D(r.TEXTURE_2D,Pt,Ot,oe[0].width,oe[0].height);for(let St=0,_t=oe.length;St<_t;St++)Rt=oe[St],E.format!==Di?Et!==null?X?bt&&i.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,Rt.width,Rt.height,Et,Rt.data):i.compressedTexImage2D(r.TEXTURE_2D,St,Ot,Rt.width,Rt.height,0,Rt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?bt&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Rt.width,Rt.height,Et,Ft,Rt.data):i.texImage2D(r.TEXTURE_2D,St,Ot,Rt.width,Rt.height,0,Et,Ft,Rt.data)}else if(E.isDataArrayTexture)if(X){if(Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),bt)if(E.layerUpdates.size>0){const St=N0(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const At=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,Ft,At)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Ft,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,Ft,Mt.data);else if(E.isData3DTexture)X?(Ut&&i.texStorage3D(r.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),bt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Ft,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,Ft,Mt.data);else if(E.isFramebufferTexture){if(Ut)if(X)i.texStorage2D(r.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let At=0;At<Pt;At++)i.texImage2D(r.TEXTURE_2D,At,Ot,St,_t,0,Et,Ft,null),St>>=1,_t>>=1}}else if(oe.length>0){if(X&&Ut){const St=Yt(oe[0]);i.texStorage2D(r.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=oe.length;St<_t;St++)Rt=oe[St],X?bt&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Et,Ft,Rt):i.texImage2D(r.TEXTURE_2D,St,Ot,Et,Ft,Rt);E.generateMipmaps=!1}else if(X){if(Ut){const St=Yt(Mt);i.texStorage2D(r.TEXTURE_2D,Pt,Ot,St.width,St.height)}bt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,Ft,Mt)}else i.texImage2D(r.TEXTURE_2D,0,Ot,Et,Ft,Mt);y(E)&&v(ht),jt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ut(U,E,W){if(E.image.length!==6)return;const ht=gt(U,E),vt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+W);const lt=s.get(vt);if(vt.version!==lt.__version||ht===!0){i.activeTexture(r.TEXTURE0+W);const jt=be.getPrimaries(be.workingColorSpace),Ct=E.colorSpace===ns?null:be.getPrimaries(E.colorSpace),kt=E.colorSpace===ns||jt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!te&&!Mt?Et[_t]=C(E.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?E.image[_t].image:E.image[_t],Et[_t]=Ne(E,Et[_t]);const Ft=Et[0],Ot=u.convert(E.format,E.colorSpace),Rt=u.convert(E.type),oe=N(E.internalFormat,Ot,Rt,E.colorSpace),X=E.isVideoTexture!==!0,Ut=lt.__version===void 0||ht===!0,bt=vt.dataReady;let Pt=z(E,Ft);nt(r.TEXTURE_CUBE_MAP,E);let St;if(te){X&&Ut&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,oe,Ft.width,Ft.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ne=St[At];E.format!==Di?Ot!==null?X?bt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,ne.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,oe,ne.width,ne.height,0,ne.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,Rt,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,oe,ne.width,ne.height,0,Ot,Rt,ne.data)}}}else{if(St=E.mipmaps,X&&Ut){St.length>0&&Pt++;const _t=Yt(Et[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,oe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){X?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Rt,Et[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Et[_t].width,Et[_t].height,0,Ot,Rt,Et[_t].data);for(let At=0;At<St.length;At++){const Pe=St[At].image[_t].image;X?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Pe.width,Pe.height,Ot,Rt,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,oe,Pe.width,Pe.height,0,Ot,Rt,Pe.data)}}else{X?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Rt,Et[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Ot,Rt,Et[_t]);for(let At=0;At<St.length;At++){const ne=St[At];X?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Rt,ne.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,oe,Ot,Rt,ne.image[_t])}}}y(E)&&v(r.TEXTURE_CUBE_MAP),lt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function wt(U,E,W,ht,vt,lt){const jt=u.convert(W.format,W.colorSpace),Ct=u.convert(W.type),kt=N(W.internalFormat,jt,Ct,W.colorSpace),te=s.get(E),Mt=s.get(W);if(Mt.__renderTarget=E,!te.__hasExternalTextures){const Et=Math.max(1,E.width>>lt),Ft=Math.max(1,E.height>>lt);vt===r.TEXTURE_3D||vt===r.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,kt,Et,Ft,E.depth,0,jt,Ct,null):i.texImage2D(vt,lt,kt,Et,Ft,0,jt,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,vt,Mt.__webglTexture,0,V(E)):(vt===r.TEXTURE_2D||vt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,vt,Mt.__webglTexture,lt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(U,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const ht=E.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,lt=O(E.stencilBuffer,vt),jt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;je(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),lt,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),lt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,lt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,jt,r.RENDERBUFFER,U)}else{const ht=E.textures;for(let vt=0;vt<ht.length;vt++){const lt=ht[vt],jt=u.convert(lt.format,lt.colorSpace),Ct=u.convert(lt.type),kt=N(lt.internalFormat,jt,Ct,lt.colorSpace);je(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),kt,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),kt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,kt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Bt(U,E,W){const ht=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),vt.__webglTexture===void 0){vt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),nt(r.TEXTURE_CUBE_MAP,E.depthTexture);const te=u.convert(E.depthTexture.format),Mt=u.convert(E.depthTexture.type);let Et;E.depthTexture.format===Sa?Et=r.DEPTH_COMPONENT24:E.depthTexture.format===Ls&&(Et=r.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Et,E.width,E.height,0,te,Mt,null)}}else ct(E.depthTexture,0);const lt=vt.__webglTexture,jt=V(E),Ct=ht?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,kt=E.depthTexture.format===Ls?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Sa)je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Ct,lt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Ct,lt,0);else if(E.depthTexture.format===Ls)je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Ct,lt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Ct,lt,0);else throw new Error("Unknown depthTexture format")}function pe(U){const E=s.get(U),W=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ht}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)Bt(E.__webglFramebuffer[ht],U,ht);else{const ht=U.texture.mipmaps;ht&&ht.length>0?Bt(E.__webglFramebuffer[0],U,0):Bt(E.__webglFramebuffer,U,0)}else if(W){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=r.createRenderbuffer(),Gt(E.__webglDepthbuffer[ht],U,!1);else{const vt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,lt)}}else{const ht=U.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Gt(E.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,lt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(U,E,W){const ht=s.get(U);E!==void 0&&wt(ht.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&pe(U)}function ve(U){const E=U.texture,W=s.get(U),ht=s.get(E);U.addEventListener("dispose",F);const vt=U.textures,lt=U.isWebGLCubeRenderTarget===!0,jt=vt.length>1;if(jt||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=E.version,h.memory.textures++),lt){W.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Ct]=[];for(let kt=0;kt<E.mipmaps.length;kt++)W.__webglFramebuffer[Ct][kt]=r.createFramebuffer()}else W.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)W.__webglFramebuffer[Ct]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(jt)for(let Ct=0,kt=vt.length;Ct<kt;Ct++){const te=s.get(vt[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&je(U)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ct=0;Ct<vt.length;Ct++){const kt=vt[Ct];W.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Ct]);const te=u.convert(kt.format,kt.colorSpace),Mt=u.convert(kt.type),Et=N(kt.internalFormat,te,Mt,kt.colorSpace,U.isXRRenderTarget===!0),Ft=V(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,Et,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,W.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(W.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){i.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(r.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)wt(W.__webglFramebuffer[Ct][kt],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,kt);else wt(W.__webglFramebuffer[Ct],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ct=0,kt=vt.length;Ct<kt;Ct++){const te=vt[Ct],Mt=s.get(te);let Et=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Et=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),nt(Et,te),wt(W.__webglFramebuffer,U,te,r.COLOR_ATTACHMENT0+Ct,Et,0),y(te)&&v(Et)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ht.__webglTexture),nt(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)wt(W.__webglFramebuffer[kt],U,E,r.COLOR_ATTACHMENT0,Ct,kt);else wt(W.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,Ct,0);y(E)&&v(Ct),i.unbindTexture()}U.depthBuffer&&pe(U)}function me(U){const E=U.textures;for(let W=0,ht=E.length;W<ht;W++){const vt=E[W];if(y(vt)){const lt=D(U),jt=s.get(vt).__webglTexture;i.bindTexture(lt,jt),v(lt),i.unbindTexture()}}}const we=[],se=[];function $e(U){if(U.samples>0){if(je(U)===!1){const E=U.textures,W=U.width,ht=U.height;let vt=r.COLOR_BUFFER_BIT;const lt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=s.get(U),Ct=E.length>1;if(Ct)for(let te=0;te<E.length;te++)i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const kt=U.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[te]);const Mt=s.get(E[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,W,ht,0,0,W,ht,vt,r.NEAREST),m===!0&&(we.length=0,se.length=0,we.push(r.COLOR_ATTACHMENT0+te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(we.push(lt),se.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<E.length;te++){i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,jt.__webglColorRenderbuffer[te]);const Mt=s.get(E[te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,Mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(U){return Math.min(l.maxSamples,U.samples)}function je(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Ne(U,E){const W=U.colorSpace,ht=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==Hr&&W!==ns&&(be.getTransfer(W)===Be?(ht!==Di||vt!==ai)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",W)),E}function Yt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=st,this.setTexture2D=ct,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=Je,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function N1(r,t){function i(s,l=ns){let u;const h=be.getTransfer(l);if(s===ai)return r.UNSIGNED_BYTE;if(s===Zd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===vv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===xv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===gv)return r.BYTE;if(s===_v)return r.SHORT;if(s===Qo)return r.UNSIGNED_SHORT;if(s===jd)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===xa)return r.HALF_FLOAT;if(s===Sv)return r.ALPHA;if(s===yv)return r.RGB;if(s===Di)return r.RGBA;if(s===Sa)return r.DEPTH_COMPONENT;if(s===Ls)return r.DEPTH_STENCIL;if(s===Mv)return r.RED;if(s===Qd)return r.RED_INTEGER;if(s===Br)return r.RG;if(s===Jd)return r.RG_INTEGER;if(s===$d)return r.RGBA_INTEGER;if(s===Xu||s===Wu||s===Yu||s===qu)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Xu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Xu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===ud||s===cd||s===fd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===ld)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ud)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===hd||s===dd)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===md)return u.COMPRESSED_R11_EAC;if(s===gd)return u.COMPRESSED_SIGNED_R11_EAC;if(s===_d)return u.COMPRESSED_RG11_EAC;if(s===vd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===xd||s===Sd||s===yd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Cd||s===Rd||s===wd||s===Dd||s===Ud||s===Ld)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===xd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Td)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ad)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nd||s===Od||s===Pd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Nd)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Od)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fd||s===zd||s===Id||s===Bd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Fd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===zd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Id)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const O1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Fv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Li({vertexShader:O1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ma(new ic(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z1 extends Ps{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,S=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new F1,v={},D=i.getContextAttributes();let N=null,O=null;const z=[],B=[],F=new fe;let J=null;const R=new xi;R.viewport=new nn;const w=new xi;w.viewport=new nn;const k=[R,w],st=new WM;let at=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=z[et];return ut===void 0&&(ut=new zh,z[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=z[et];return ut===void 0&&(ut=new zh,z[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=z[et];return ut===void 0&&(ut=new zh,z[et]=ut),ut.getHandSpace()};function ct(et){const ut=B.indexOf(et.inputSource);if(ut===-1)return;const wt=z[ut];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||h),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function P(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let et=0;et<z.length;et++){const ut=B[et];ut!==null&&(B[et]=null,z[et].disconnect(ut))}at=null,dt=null,y.reset();for(const et in v)delete v[et];t.setRenderTarget(N),M=null,S=null,g=null,l=null,O=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(J),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),J=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Gt=null,Bt=null;D.depth&&(Bt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=D.stencil?Ls:Sa,Gt=D.stencil?Jo:Wi);const pe={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(pe),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),O=new ki(S.textureWidth,S.textureHeight,{format:Di,type:ai,depthTexture:new el(S.textureWidth,S.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new ki(M.framebufferWidth,M.framebufferHeight,{format:Di,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(et){for(let ut=0;ut<et.removed.length;ut++){const wt=et.removed[ut],Gt=B.indexOf(wt);Gt>=0&&(B[Gt]=null,z[Gt].disconnect(wt))}for(let ut=0;ut<et.added.length;ut++){const wt=et.added[ut];let Gt=B.indexOf(wt);if(Gt===-1){for(let pe=0;pe<z.length;pe++)if(pe>=B.length){B.push(wt),Gt=pe;break}else if(B[pe]===null){B[pe]=wt,Gt=pe;break}if(Gt===-1)break}const Bt=z[Gt];Bt&&Bt.connect(wt)}}const it=new Z,yt=new Z;function xt(et,ut,wt){it.setFromMatrixPosition(ut.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const Gt=it.distanceTo(yt),Bt=ut.projectionMatrix.elements,pe=wt.projectionMatrix.elements,Je=Bt[14]/(Bt[10]-1),ve=Bt[14]/(Bt[10]+1),me=(Bt[9]+1)/Bt[5],we=(Bt[9]-1)/Bt[5],se=(Bt[8]-1)/Bt[0],$e=(pe[8]+1)/pe[0],V=Je*se,je=Je*$e,Me=Gt/(-se+$e),Ne=Me*-se;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ne),et.translateZ(Me),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Bt[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Yt=Je+Me,U=ve+Me,E=V-Ne,W=je+(Gt-Ne),ht=me*ve/U*Yt,vt=we*ve/U*Yt;et.projectionMatrix.makePerspective(E,W,ht,vt,Yt,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function L(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let ut=et.near,wt=et.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),st.near=w.near=R.near=ut,st.far=w.far=R.far=wt,(at!==st.near||dt!==st.far)&&(l.updateRenderState({depthNear:st.near,depthFar:st.far}),at=st.near,dt=st.far),st.layers.mask=et.layers.mask|6,R.layers.mask=st.layers.mask&3,w.layers.mask=st.layers.mask&5;const Gt=et.parent,Bt=st.cameras;L(st,Gt);for(let pe=0;pe<Bt.length;pe++)L(Bt[pe],Gt);Bt.length===2?xt(st,R,w):st.projectionMatrix.copy(R.projectionMatrix),nt(et,st,Gt)};function nt(et,ut,wt){wt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=tl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(st)},this.getCameraTexture=function(et){return v[et]};let gt=null;function Tt(et,ut){if(_=ut.getViewerPose(p||h),b=ut,_!==null){const wt=_.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let Gt=!1;wt.length!==st.cameras.length&&(st.cameras.length=0,Gt=!0);for(let ve=0;ve<wt.length;ve++){const me=wt[ve];let we=null;if(M!==null)we=M.getViewport(me);else{const $e=g.getViewSubImage(S,me);we=$e.viewport,ve===0&&(t.setRenderTargetTextures(O,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(O))}let se=k[ve];se===void 0&&(se=new xi,se.layers.enable(ve),se.viewport=new nn,k[ve]=se),se.matrix.fromArray(me.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(me.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(we.x,we.y,we.width,we.height),ve===0&&(st.matrix.copy(se.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Gt===!0&&st.cameras.push(se)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const ve=g.getDepthInformation(wt[0]);ve&&ve.isValid&&ve.texture&&y.init(ve,l.renderState)}if(Bt&&Bt.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let ve=0;ve<wt.length;ve++){const me=wt[ve].camera;if(me){let we=v[me];we||(we=new Fv,v[me]=we);const se=g.getCameraImage(me);we.sourceTexture=se}}}}for(let wt=0;wt<z.length;wt++){const Gt=B[wt],Bt=z[wt];Gt!==null&&Bt!==void 0&&Bt.update(Gt,ut,p||h)}gt&&gt(et,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),b=null}const It=new Iv;It.setAnimationLoop(Tt),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const Rs=new ya,I1=new Qe;function B1(r,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,Uv(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,D,N,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,O)):v.isMeshMatcapMaterial?(u(y,v),b(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),C(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,D,N):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===jn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===jn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=t.get(v),N=D.envMap,O=D.envMapRotation;N&&(y.envMap.value=N,Rs.copy(O),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),y.envMapRotation.value.setFromMatrix4(I1.makeRotationFromEuler(Rs)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,D,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=N*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const D=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function H1(r,t,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,N){const O=N.program;s.uniformBlockBinding(D,O)}function p(D,N){let O=l[D.id];O===void 0&&(b(D),O=_(D),l[D.id]=O,D.addEventListener("dispose",y));const z=N.program;s.updateUBOMapping(D,z);const B=t.render.frame;u[D.id]!==B&&(S(D),u[D.id]=B)}function _(D){const N=g();D.__bindingPointIndex=N;const O=r.createBuffer(),z=D.__size,B=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,z,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,O),O}function g(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const N=l[D.id],O=D.uniforms,z=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let B=0,F=O.length;B<F;B++){const J=Array.isArray(O[B])?O[B]:[O[B]];for(let R=0,w=J.length;R<w;R++){const k=J[R];if(M(k,B,R,z)===!0){const st=k.__offset,at=Array.isArray(k.value)?k.value:[k.value];let dt=0;for(let ct=0;ct<at.length;ct++){const P=at[ct],H=C(P);typeof P=="number"||typeof P=="boolean"?(k.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,st+dt,k.__data)):P.isMatrix3?(k.__data[0]=P.elements[0],k.__data[1]=P.elements[1],k.__data[2]=P.elements[2],k.__data[3]=0,k.__data[4]=P.elements[3],k.__data[5]=P.elements[4],k.__data[6]=P.elements[5],k.__data[7]=0,k.__data[8]=P.elements[6],k.__data[9]=P.elements[7],k.__data[10]=P.elements[8],k.__data[11]=0):(P.toArray(k.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,st,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,N,O,z){const B=D.value,F=N+"_"+O;if(z[F]===void 0)return typeof B=="number"||typeof B=="boolean"?z[F]=B:z[F]=B.clone(),!0;{const J=z[F];if(typeof B=="number"||typeof B=="boolean"){if(J!==B)return z[F]=B,!0}else if(J.equals(B)===!1)return J.copy(B),!0}return!1}function b(D){const N=D.uniforms;let O=0;const z=16;for(let F=0,J=N.length;F<J;F++){const R=Array.isArray(N[F])?N[F]:[N[F]];for(let w=0,k=R.length;w<k;w++){const st=R[w],at=Array.isArray(st.value)?st.value:[st.value];for(let dt=0,ct=at.length;dt<ct;dt++){const P=at[dt],H=C(P),it=O%z,yt=it%H.boundary,xt=it+yt;O+=yt,xt!==0&&z-xt<H.storage&&(O+=z-xt),st.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=O,O+=H.storage}}}const B=O%z;return B>0&&(O+=z-B),D.__size=O,D.__cache={},this}function C(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ee("WebGLRenderer: Unsupported uniform value type.",D),N}function y(D){const N=D.target;N.removeEventListener("dispose",y);const O=h.indexOf(N.__bindingPointIndex);h.splice(O,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const D in l)r.deleteBuffer(l[D]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}const V1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function G1(){return Ii===null&&(Ii=new wM(V1,16,16,Br,xa),Ii.name="DFG_LUT",Ii.minFilter=Pn,Ii.magFilter=Pn,Ii.wrapS=ga,Ii.wrapT=ga,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class k1{constructor(t={}){const{canvas:i=Vy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:M=ai}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=M,y=new Set([$d,Jd,Qd]),v=new Set([ai,Wi,Qo,Jo,Zd,Kd]),D=new Uint32Array(4),N=new Int32Array(4);let O=null,z=null;const B=[],F=[];let J=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1;this._outputColorSpace=vi;let k=0,st=0,at=null,dt=-1,ct=null;const P=new nn,H=new nn;let it=null;const yt=new Re(0);let xt=0,L=i.width,nt=i.height,gt=1,Tt=null,It=null;const et=new nn(0,0,L,nt),ut=new nn(0,0,L,nt);let wt=!1;const Gt=new ap;let Bt=!1,pe=!1;const Je=new Qe,ve=new Z,me=new nn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function $e(){return at===null?gt:1}let V=s;function je(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const Y="webgl2";if(V=je(Y,A),V===null)throw je(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ce("WebGLRenderer: "+A.message),A}let Me,Ne,Yt,U,E,W,ht,vt,lt,jt,Ct,kt,te,Mt,Et,Ft,Ot,Rt,oe,X,Ut,bt,Pt,St;function _t(){Me=new GT(V),Me.init(),bt=new N1(V,Me),Ne=new NT(V,Me,t,bt),Yt=new U1(V,Me),Ne.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),U=new WT(V),E=new g1,W=new L1(V,Me,Yt,E,Ne,bt,U),ht=new PT(R),vt=new VT(R),lt=new ZM(V),Pt=new UT(V,lt),jt=new kT(V,lt,U,Pt),Ct=new qT(V,jt,lt,U),oe=new YT(V,Ne,W),Ft=new OT(E),kt=new m1(R,ht,vt,Me,Ne,Pt,Ft),te=new B1(R,E),Mt=new v1,Et=new b1(Me),Rt=new DT(R,ht,vt,Yt,Ct,b,m),Ot=new w1(R,Ct,Ne),St=new H1(V,U,Ne,Yt),X=new LT(V,Me,U),Ut=new XT(V,Me,U),U.programs=kt.programs,R.capabilities=Ne,R.extensions=Me,R.properties=E,R.renderLists=Mt,R.shadowMap=Ot,R.state=Yt,R.info=U}_t(),C!==ai&&(J=new ZT(C,i.width,i.height,l,u));const At=new z1(R,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(A){A!==void 0&&(gt=A,this.setSize(L,nt,!1))},this.getSize=function(A){return A.set(L,nt)},this.setSize=function(A,Y,rt=!0){if(At.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,nt=Y,i.width=Math.floor(A*gt),i.height=Math.floor(Y*gt),rt===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),J!==null&&J.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(L*gt,nt*gt).floor()},this.setDrawingBufferSize=function(A,Y,rt){L=A,nt=Y,gt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(C===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,Y,rt,$){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,Y,rt,$),Yt.viewport(P.copy(et).multiplyScalar(gt).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,Y,rt,$){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,Y,rt,$),Yt.scissor(H.copy(ut).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){Yt.setScissorTest(wt=A)},this.setOpaqueSort=function(A){Tt=A},this.setTransparentSort=function(A){It=A},this.getClearColor=function(A){return A.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,rt=!0){let $=0;if(A){let j=!1;if(at!==null){const Dt=at.texture.format;j=y.has(Dt)}if(j){const Dt=at.texture.type,zt=v.has(Dt),Lt=Rt.getClearColor(),Ht=Rt.getClearAlpha(),Xt=Lt.r,Qt=Lt.g,Wt=Lt.b;zt?(D[0]=Xt,D[1]=Qt,D[2]=Wt,D[3]=Ht,V.clearBufferuiv(V.COLOR,0,D)):(N[0]=Xt,N[1]=Qt,N[2]=Wt,N[3]=Ht,V.clearBufferiv(V.COLOR,0,N))}else $|=V.COLOR_BUFFER_BIT}Y&&($|=V.DEPTH_BUFFER_BIT),rt&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),Rt.dispose(),Mt.dispose(),Et.dispose(),E.dispose(),ht.dispose(),vt.dispose(),Ct.dispose(),Pt.dispose(),St.dispose(),kt.dispose(),At.dispose(),At.removeEventListener("sessionstart",zs),At.removeEventListener("sessionend",qr),Ni.stop()};function ne(A){A.preventDefault(),r0("WebGLRenderer: Context Lost."),w=!0}function Pe(){r0("WebGLRenderer: Context Restored."),w=!1;const A=U.autoReset,Y=Ot.enabled,rt=Ot.autoUpdate,$=Ot.needsUpdate,j=Ot.type;_t(),U.autoReset=A,Ot.enabled=Y,Ot.autoUpdate=rt,Ot.needsUpdate=$,Ot.type=j}function Ee(A){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Un(A){const Y=A.target;Y.removeEventListener("dispose",Un),Si(Y)}function Si(A){rl(A),E.remove(A)}function rl(A){const Y=E.get(A).programs;Y!==void 0&&(Y.forEach(function(rt){kt.releaseProgram(rt)}),A.isShaderMaterial&&kt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,rt,$,j,Dt){Y===null&&(Y=we);const zt=j.isMesh&&j.matrixWorld.determinant()<0,Lt=ss(A,Y,rt,$,j);Yt.setMaterial($,zt);let Ht=rt.index,Xt=1;if($.wireframe===!0){if(Ht=jt.getWireframeAttribute(rt),Ht===void 0)return;Xt=2}const Qt=rt.drawRange,Wt=rt.attributes.position;let Jt=Qt.start*Xt,De=(Qt.start+Qt.count)*Xt;Dt!==null&&(Jt=Math.max(Jt,Dt.start*Xt),De=Math.min(De,(Dt.start+Dt.count)*Xt)),Ht!==null?(Jt=Math.max(Jt,0),De=Math.min(De,Ht.count)):Wt!=null&&(Jt=Math.max(Jt,0),De=Math.min(De,Wt.count));const Ze=De-Jt;if(Ze<0||Ze===1/0)return;Pt.setup(j,$,Lt,rt,Ht);let We,Oe=X;if(Ht!==null&&(We=lt.get(Ht),Oe=Ut,Oe.setIndex(We)),j.isMesh)$.wireframe===!0?(Yt.setLineWidth($.wireframeLinewidth*$e()),Oe.setMode(V.LINES)):Oe.setMode(V.TRIANGLES);else if(j.isLine){let Zt=$.linewidth;Zt===void 0&&(Zt=1),Yt.setLineWidth(Zt*$e()),j.isLineSegments?Oe.setMode(V.LINES):j.isLineLoop?Oe.setMode(V.LINE_LOOP):Oe.setMode(V.LINE_STRIP)}else j.isPoints?Oe.setMode(V.POINTS):j.isSprite&&Oe.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)$o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,Ue=j._multiDrawCounts,ie=j._multiDrawCount,yn=Ht?lt.get(Ht).bytesPerElement:1,Yi=E.get($).currentProgram.getUniforms();for(let Mn=0;Mn<ie;Mn++)Yi.setValue(V,"_gl_DrawID",Mn),Oe.render(Zt[Mn]/yn,Ue[Mn])}else if(j.isInstancedMesh)Oe.renderInstances(Jt,Ze,j.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ue=Math.min(rt.instanceCount,Zt);Oe.renderInstances(Jt,Ze,Ue)}else Oe.render(Jt,Ze)};function Wr(A,Y,rt){A.transparent===!0&&A.side===ma&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Bs(A,Y,rt),A.side=as,A.needsUpdate=!0,Bs(A,Y,rt),A.side=ma):Bs(A,Y,rt)}this.compile=function(A,Y,rt=null){rt===null&&(rt=A),z=Et.get(rt),z.init(Y),F.push(z),rt.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(z.pushLight(j),j.castShadow&&z.pushShadow(j))}),A!==rt&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(z.pushLight(j),j.castShadow&&z.pushShadow(j))}),z.setupLights();const $=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Dt=j.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const Lt=Dt[zt];Wr(Lt,rt,j),$.add(Lt)}else Wr(Dt,rt,j),$.add(Dt)}),z=F.pop(),$},this.compileAsync=function(A,Y,rt=null){const $=this.compile(A,Y,rt);return new Promise(j=>{function Dt(){if($.forEach(function(zt){E.get(zt).currentProgram.isReady()&&$.delete(zt)}),$.size===0){j(A);return}setTimeout(Dt,10)}Me.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Fs=null;function Yr(A){Fs&&Fs(A)}function zs(){Ni.stop()}function qr(){Ni.start()}const Ni=new Iv;Ni.setAnimationLoop(Yr),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){Fs=A,At.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},At.addEventListener("sessionstart",zs),At.addEventListener("sessionend",qr),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const rt=At.enabled===!0&&At.isPresenting===!0,$=J!==null&&(at===null||rt)&&J.begin(R,at);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,Y,at),z=Et.get(A,F.length),z.init(Y),F.push(z),Je.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Gt.setFromProjectionMatrix(Je,Vi,Y.reversedDepth),pe=this.localClippingEnabled,Bt=Ft.init(this.clippingPlanes,pe),O=Mt.get(A,B.length),O.init(),B.push(O),At.enabled===!0&&At.isPresenting===!0){const zt=R.xr.getDepthSensingMesh();zt!==null&&oi(zt,Y,-1/0,R.sortObjects)}oi(A,Y,0,R.sortObjects),O.finish(),R.sortObjects===!0&&O.sort(Tt,It),se=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,se&&Rt.addToRenderList(O,A),this.info.render.frame++,Bt===!0&&Ft.beginShadows();const j=z.state.shadowsArray;if(Ot.render(j,A,Y),Bt===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&J.hasRenderPass())===!1){const zt=O.opaque,Lt=O.transmissive;if(z.setupLights(),Y.isArrayCamera){const Ht=Y.cameras;if(Lt.length>0)for(let Xt=0,Qt=Ht.length;Xt<Qt;Xt++){const Wt=Ht[Xt];Sn(zt,Lt,A,Wt)}se&&Rt.render(A);for(let Xt=0,Qt=Ht.length;Xt<Qt;Xt++){const Wt=Ht[Xt];rn(O,A,Wt,Wt.viewport)}}else Lt.length>0&&Sn(zt,Lt,A,Y),se&&Rt.render(A),rn(O,A,Y)}at!==null&&st===0&&(W.updateMultisampleRenderTarget(at),W.updateRenderTargetMipmap(at)),$&&J.end(R),A.isScene===!0&&A.onAfterRender(R,A,Y),Pt.resetDefaultState(),dt=-1,ct=null,F.pop(),F.length>0?(z=F[F.length-1],Bt===!0&&Ft.setGlobalState(R.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?O=B[B.length-1]:O=null};function oi(A,Y,rt,$){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Gt.intersectsSprite(A)){$&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Je);const zt=Ct.update(A),Lt=A.material;Lt.visible&&O.push(A,zt,Lt,rt,me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Gt.intersectsObject(A))){const zt=Ct.update(A),Lt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),me.copy(zt.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4(Je)),Array.isArray(Lt)){const Ht=zt.groups;for(let Xt=0,Qt=Ht.length;Xt<Qt;Xt++){const Wt=Ht[Xt],Jt=Lt[Wt.materialIndex];Jt&&Jt.visible&&O.push(A,zt,Jt,rt,me.z,Wt)}}else Lt.visible&&O.push(A,zt,Lt,rt,me.z,null)}}const Dt=A.children;for(let zt=0,Lt=Dt.length;zt<Lt;zt++)oi(Dt[zt],Y,rt,$)}function rn(A,Y,rt,$){const{opaque:j,transmissive:Dt,transparent:zt}=A;z.setupLightsView(rt),Bt===!0&&Ft.setGlobalState(R.clippingPlanes,rt),$&&Yt.viewport(P.copy($)),j.length>0&&yi(j,Y,rt),Dt.length>0&&yi(Dt,Y,rt),zt.length>0&&yi(zt,Y,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Sn(A,Y,rt,$){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[$.id]===void 0){const Jt=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[$.id]=new ki(1,1,{generateMipmaps:!0,type:Jt?xa:ai,minFilter:Us,samples:Ne.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Dt=z.state.transmissionRenderTarget[$.id],zt=$.viewport||P;Dt.setSize(zt.z*R.transmissionResolutionScale,zt.w*R.transmissionResolutionScale);const Lt=R.getRenderTarget(),Ht=R.getActiveCubeFace(),Xt=R.getActiveMipmapLevel();R.setRenderTarget(Dt),R.getClearColor(yt),xt=R.getClearAlpha(),xt<1&&R.setClearColor(16777215,.5),R.clear(),se&&Rt.render(rt);const Qt=R.toneMapping;R.toneMapping=Gi;const Wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),z.setupLightsView($),Bt===!0&&Ft.setGlobalState(R.clippingPlanes,$),yi(A,rt,$),W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let De=0,Ze=Y.length;De<Ze;De++){const We=Y[De],{object:Oe,geometry:Zt,material:Ue,group:ie}=We;if(Ue.side===ma&&Oe.layers.test($.layers)){const yn=Ue.side;Ue.side=jn,Ue.needsUpdate=!0,Is(Oe,rt,$,Zt,Ue,ie),Ue.side=yn,Ue.needsUpdate=!0,Jt=!0}}Jt===!0&&(W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt))}R.setRenderTarget(Lt,Ht,Xt),R.setClearColor(yt,xt),Wt!==void 0&&($.viewport=Wt),R.toneMapping=Qt}function yi(A,Y,rt){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Dt=A.length;j<Dt;j++){const zt=A[j],{object:Lt,geometry:Ht,group:Xt}=zt;let Qt=zt.material;Qt.allowOverride===!0&&$!==null&&(Qt=$),Lt.layers.test(rt.layers)&&Is(Lt,Y,rt,Ht,Qt,Xt)}}function Is(A,Y,rt,$,j,Dt){A.onBeforeRender(R,Y,rt,$,j,Dt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,Y,rt,$,A,Dt),j.transparent===!0&&j.side===ma&&j.forceSinglePass===!1?(j.side=jn,j.needsUpdate=!0,R.renderBufferDirect(rt,Y,$,j,A,Dt),j.side=as,j.needsUpdate=!0,R.renderBufferDirect(rt,Y,$,j,A,Dt),j.side=ma):R.renderBufferDirect(rt,Y,$,j,A,Dt),A.onAfterRender(R,Y,rt,$,j,Dt)}function Bs(A,Y,rt){Y.isScene!==!0&&(Y=we);const $=E.get(A),j=z.state.lights,Dt=z.state.shadowsArray,zt=j.state.version,Lt=kt.getParameters(A,j.state,Dt,Y,rt),Ht=kt.getProgramCacheKey(Lt);let Xt=$.programs;$.environment=A.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(A.isMeshStandardMaterial?vt:ht).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",Un),Xt=new Map,$.programs=Xt);let Qt=Xt.get(Ht);if(Qt!==void 0){if($.currentProgram===Qt&&$.lightsStateVersion===zt)return jr(A,Lt),Qt}else Lt.uniforms=kt.getUniforms(A),A.onBeforeCompile(Lt,R),Qt=kt.acquireProgram(Lt,Ht),Xt.set(Ht,Qt),$.uniforms=Lt.uniforms;const Wt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=Ft.uniform),jr(A,Lt),$.needsLights=Ea(A),$.lightsStateVersion=zt,$.needsLights&&(Wt.ambientLightColor.value=j.state.ambient,Wt.lightProbe.value=j.state.probe,Wt.directionalLights.value=j.state.directional,Wt.directionalLightShadows.value=j.state.directionalShadow,Wt.spotLights.value=j.state.spot,Wt.spotLightShadows.value=j.state.spotShadow,Wt.rectAreaLights.value=j.state.rectArea,Wt.ltc_1.value=j.state.rectAreaLTC1,Wt.ltc_2.value=j.state.rectAreaLTC2,Wt.pointLights.value=j.state.point,Wt.pointLightShadows.value=j.state.pointShadow,Wt.hemisphereLights.value=j.state.hemi,Wt.directionalShadowMap.value=j.state.directionalShadowMap,Wt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Wt.spotShadowMap.value=j.state.spotShadowMap,Wt.spotLightMatrix.value=j.state.spotLightMatrix,Wt.spotLightMap.value=j.state.spotLightMap,Wt.pointShadowMap.value=j.state.pointShadowMap,Wt.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=Qt,$.uniformsList=null,Qt}function ol(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=ju.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function jr(A,Y){const rt=E.get(A);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function ss(A,Y,rt,$,j){Y.isScene!==!0&&(Y=we),W.resetTextureUnits();const Dt=Y.fog,zt=$.isMeshStandardMaterial?Y.environment:null,Lt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Hr,Ht=($.isMeshStandardMaterial?vt:ht).get($.envMap||zt),Xt=$.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Wt=!!rt.morphAttributes.position,Jt=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let Ze=Gi;$.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ze=R.toneMapping);const We=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Oe=We!==void 0?We.length:0,Zt=E.get($),Ue=z.state.lights;if(Bt===!0&&(pe===!0||A!==ct)){const bn=A===ct&&$.id===dt;Ft.setState($,A,bn)}let ie=!1;$.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ue.state.version||Zt.outputColorSpace!==Lt||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==Ht||$.fog===!0&&Zt.fog!==Dt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ft.numPlanes||Zt.numIntersection!==Ft.numIntersection)||Zt.vertexAlphas!==Xt||Zt.vertexTangents!==Qt||Zt.morphTargets!==Wt||Zt.morphNormals!==Jt||Zt.morphColors!==De||Zt.toneMapping!==Ze||Zt.morphTargetsCount!==Oe)&&(ie=!0):(ie=!0,Zt.__version=$.version);let yn=Zt.currentProgram;ie===!0&&(yn=Bs($,Y,j));let Yi=!1,Mn=!1,li=!1;const Fe=yn.getUniforms(),En=Zt.uniforms;if(Yt.useProgram(yn.program)&&(Yi=!0,Mn=!0,li=!0),$.id!==dt&&(dt=$.id,Mn=!0),Yi||ct!==A){Yt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(V,"projectionMatrix",A.projectionMatrix),Fe.setValue(V,"viewMatrix",A.matrixWorldInverse);const Tn=Fe.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,ve.setFromMatrixPosition(A.matrixWorld)),Ne.logarithmicDepthBuffer&&Fe.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Fe.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),ct!==A&&(ct=A,Mn=!0,li=!0)}if(Zt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Fe.setValue(V,"directionalShadowMap",Ue.state.directionalShadowMap,W),Ue.state.spotShadowMap.length>0&&Fe.setValue(V,"spotShadowMap",Ue.state.spotShadowMap,W),Ue.state.pointShadowMap.length>0&&Fe.setValue(V,"pointShadowMap",Ue.state.pointShadowMap,W)),j.isSkinnedMesh){Fe.setOptional(V,j,"bindMatrix"),Fe.setOptional(V,j,"bindMatrixInverse");const bn=j.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Fe.setValue(V,"boneTexture",bn.boneTexture,W))}j.isBatchedMesh&&(Fe.setOptional(V,j,"batchingTexture"),Fe.setValue(V,"batchingTexture",j._matricesTexture,W),Fe.setOptional(V,j,"batchingIdTexture"),Fe.setValue(V,"batchingIdTexture",j._indirectTexture,W),Fe.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(V,"batchingColorTexture",j._colorsTexture,W));const hn=rt.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&oe.update(j,rt,yn),(Mn||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,Fe.setValue(V,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(En.envMap.value=Ht,En.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&Y.environment!==null&&(En.envMapIntensity.value=Y.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=G1()),Mn&&(Fe.setValue(V,"toneMappingExposure",R.toneMappingExposure),Zt.needsLights&&Zr(En,li),Dt&&$.fog===!0&&te.refreshFogUniforms(En,Dt),te.refreshMaterialUniforms(En,$,gt,nt,z.state.transmissionRenderTarget[A.id]),ju.upload(V,ol(Zt),En,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ju.upload(V,ol(Zt),En,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Fe.setValue(V,"center",j.center),Fe.setValue(V,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(V,"normalMatrix",j.normalMatrix),Fe.setValue(V,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bn=$.uniformsGroups;for(let Tn=0,Hs=bn.length;Tn<Hs;Tn++){const Mi=bn[Tn];St.update(Mi,yn),St.bind(Mi,yn)}}return yn}function Zr(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Ea(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(A,Y,rt){const $=E.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=Y,E.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:rt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const rt=E.get(A);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const ba=V.createFramebuffer();this.setRenderTarget=function(A,Y=0,rt=0){at=A,k=Y,st=rt;let $=null,j=!1,Dt=!1;if(A){const Lt=E.get(A);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),P.copy(A.viewport),H.copy(A.scissor),it=A.scissorTest,Yt.viewport(P),Yt.scissor(H),Yt.setScissorTest(it),dt=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Lt.__hasExternalTextures)W.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qt=A.depthTexture;if(Lt.__boundDepthTexture!==Qt){if(Qt!==null&&E.has(Qt)&&(A.width!==Qt.image.width||A.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const Xt=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[Y])?$=Xt[Y][rt]:$=Xt[Y],j=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?$=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?$=Xt[rt]:$=Xt,P.copy(A.viewport),H.copy(A.scissor),it=A.scissorTest}else P.copy(et).multiplyScalar(gt).floor(),H.copy(ut).multiplyScalar(gt).floor(),it=wt;if(rt!==0&&($=ba),Yt.bindFramebuffer(V.FRAMEBUFFER,$)&&Yt.drawBuffers(A,$),Yt.viewport(P),Yt.scissor(H),Yt.setScissorTest(it),j){const Lt=E.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,rt)}else if(Dt){const Lt=Y;for(let Ht=0;Ht<A.textures.length;Ht++){const Xt=E.get(A.textures[Ht]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,rt,Lt)}}else if(A!==null&&rt!==0){const Lt=E.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,rt)}dt=-1},this.readRenderTargetPixels=function(A,Y,rt,$,j,Dt,zt,Lt=0){if(!(A&&A.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht){Yt.bindFramebuffer(V.FRAMEBUFFER,Ht);try{const Xt=A.textures[Lt],Qt=Xt.format,Wt=Xt.type;if(!Ne.textureFormatReadable(Qt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Wt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-$&&rt>=0&&rt<=A.height-j&&(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Y,rt,$,j,bt.convert(Qt),bt.convert(Wt),Dt))}finally{const Xt=at!==null?E.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,rt,$,j,Dt,zt,Lt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht)if(Y>=0&&Y<=A.width-$&&rt>=0&&rt<=A.height-j){Yt.bindFramebuffer(V.FRAMEBUFFER,Ht);const Xt=A.textures[Lt],Qt=Xt.format,Wt=Xt.type;if(!Ne.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Jt),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Y,rt,$,j,bt.convert(Qt),bt.convert(Wt),0);const De=at!==null?E.get(at).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,De);const Ze=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Gy(V,Ze,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Jt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(Jt),V.deleteSync(Ze),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,rt=0){const $=Math.pow(2,-rt),j=Math.floor(A.image.width*$),Dt=Math.floor(A.image.height*$),zt=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;W.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,zt,Lt,j,Dt),Yt.unbindTexture()};const rs=V.createFramebuffer(),Ta=V.createFramebuffer();this.copyTextureToTexture=function(A,Y,rt=null,$=null,j=0,Dt=null){Dt===null&&(j!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=j,j=0):Dt=0);let zt,Lt,Ht,Xt,Qt,Wt,Jt,De,Ze;const We=A.isCompressedTexture?A.mipmaps[Dt]:A.image;if(rt!==null)zt=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Ht=rt.isBox3?rt.max.z-rt.min.z:1,Xt=rt.min.x,Qt=rt.min.y,Wt=rt.isBox3?rt.min.z:0;else{const hn=Math.pow(2,-j);zt=Math.floor(We.width*hn),Lt=Math.floor(We.height*hn),A.isDataArrayTexture?Ht=We.depth:A.isData3DTexture?Ht=Math.floor(We.depth*hn):Ht=1,Xt=0,Qt=0,Wt=0}$!==null?(Jt=$.x,De=$.y,Ze=$.z):(Jt=0,De=0,Ze=0);const Oe=bt.convert(Y.format),Zt=bt.convert(Y.type);let Ue;Y.isData3DTexture?(W.setTexture3D(Y,0),Ue=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Ue=V.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Ue=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const ie=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Yi=V.getParameter(V.UNPACK_SKIP_PIXELS),Mn=V.getParameter(V.UNPACK_SKIP_ROWS),li=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,We.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,We.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt);const Fe=A.isDataArrayTexture||A.isData3DTexture,En=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const hn=E.get(A),bn=E.get(Y),Tn=E.get(hn.__renderTarget),Hs=E.get(bn.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Hs.__webglFramebuffer);for(let Mi=0;Mi<Ht;Mi++)Fe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(A).__webglTexture,j,Wt+Mi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Dt,Ze+Mi)),V.blitFramebuffer(Xt,Qt,zt,Lt,Jt,De,zt,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||E.has(A)){const hn=E.get(A),bn=E.get(Y);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,rs),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ta);for(let Tn=0;Tn<Ht;Tn++)Fe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,j,Wt+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,j),En?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,Dt,Ze+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,Dt),j!==0?V.blitFramebuffer(Xt,Qt,zt,Lt,Jt,De,zt,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):En?V.copyTexSubImage3D(Ue,Dt,Jt,De,Ze+Tn,Xt,Qt,zt,Lt):V.copyTexSubImage2D(Ue,Dt,Jt,De,Xt,Qt,zt,Lt);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ue,Dt,Jt,De,Ze,zt,Lt,Ht,Oe,Zt,We.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Ue,Dt,Jt,De,Ze,zt,Lt,Ht,Oe,We.data):V.texSubImage3D(Ue,Dt,Jt,De,Ze,zt,Lt,Ht,Oe,Zt,We):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Jt,De,zt,Lt,Oe,Zt,We.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Jt,De,We.width,We.height,Oe,We.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Jt,De,zt,Lt,Oe,Zt,We);V.pixelStorei(V.UNPACK_ROW_LENGTH,ie),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Mn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,li),Dt===0&&Y.generateMipmaps&&V.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Yt.unbindTexture()},this.resetState=function(){k=0,st=0,at=null,Yt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}class Xi{constructor(t,i,s,l,u="div"){this.parent=t,this.object=i,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(u),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(l),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Xi.nextNameID=Xi.nextNameID||0,this.$name.id=`lil-gui-name-${++Xi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class X1 extends Xi{constructor(t,i,s){super(t,i,s,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function kd(r){let t,i;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const W1={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:kd,toHexString:kd},nl={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Y1={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,t,i=1){const s=nl.fromHexString(r);t[0]=(s>>16&255)/255*i,t[1]=(s>>8&255)/255*i,t[2]=(s&255)/255*i},toHexString([r,t,i],s=1){s=255/s;const l=r*s<<16^t*s<<8^i*s<<0;return nl.toHexString(l)}},q1={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,i=1){const s=nl.fromHexString(r);t.r=(s>>16&255)/255*i,t.g=(s>>8&255)/255*i,t.b=(s&255)/255*i},toHexString({r,g:t,b:i},s=1){s=255/s;const l=r*s<<16^t*s<<8^i*s<<0;return nl.toHexString(l)}},j1=[W1,nl,Y1,q1];function Z1(r){return j1.find(t=>t.match(r))}class K1 extends Xi{constructor(t,i,s,l){super(t,i,s,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Z1(this.initialValue),this._rgbScale=l,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=kd(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class qh extends Xi{constructor(t,i,s){super(t,i,s,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",l=>{l.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Q1 extends Xi{constructor(t,i,s,l,u,h){super(t,i,s,"lil-number"),this._initInput(),this.min(l),this.max(u);const d=h!==void 0;this.step(d?h:this._getImplicitStep(),d),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let D=parseFloat(this.$input.value);isNaN(D)||(this._stepExplicit&&(D=this._snap(D)),this.setValue(this._clamp(D)))},s=D=>{const N=parseFloat(this.$input.value);isNaN(N)||(this._snapClampSetValue(N+D),this.$input.value=this.getValue())},l=D=>{D.key==="Enter"&&this.$input.blur(),D.code==="ArrowUp"&&(D.preventDefault(),s(this._step*this._arrowKeyMultiplier(D))),D.code==="ArrowDown"&&(D.preventDefault(),s(this._step*this._arrowKeyMultiplier(D)*-1))},u=D=>{this._inputFocused&&(D.preventDefault(),s(this._step*this._normalizeMouseWheel(D)))};let h=!1,d,m,p,_,g;const S=5,M=D=>{d=D.clientX,m=p=D.clientY,h=!0,_=this.getValue(),g=0,window.addEventListener("mousemove",b),window.addEventListener("mouseup",C)},b=D=>{if(h){const N=D.clientX-d,O=D.clientY-m;Math.abs(O)>S?(D.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(N)>S&&C()}if(!h){const N=D.clientY-p;g-=N*this._step*this._arrowKeyMultiplier(D),_+g>this._max?g=this._max-_:_+g<this._min&&(g=this._min-_),this._snapClampSetValue(_+g)}p=D.clientY},C=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",C)},y=()=>{this._inputFocused=!0},v=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",l),this.$input.addEventListener("wheel",u,{passive:!1}),this.$input.addEventListener("mousedown",M),this.$input.addEventListener("focus",y),this.$input.addEventListener("blur",v)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(v,D,N,O,z)=>(v-D)/(N-D)*(z-O)+O,i=v=>{const D=this.$slider.getBoundingClientRect();let N=t(v,D.left,D.right,this._min,this._max);this._snapClampSetValue(N)},s=v=>{this._setDraggingStyle(!0),i(v.clientX),window.addEventListener("mousemove",l),window.addEventListener("mouseup",u)},l=v=>{i(v.clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)};let h=!1,d,m;const p=v=>{v.preventDefault(),this._setDraggingStyle(!0),i(v.touches[0].clientX),h=!1},_=v=>{v.touches.length>1||(this._hasScrollBar?(d=v.touches[0].clientX,m=v.touches[0].clientY,h=!0):p(v),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",S))},g=v=>{if(h){const D=v.touches[0].clientX-d,N=v.touches[0].clientY-m;Math.abs(D)>Math.abs(N)?p(v):(window.removeEventListener("touchmove",g),window.removeEventListener("touchend",S))}else v.preventDefault(),i(v.touches[0].clientX)},S=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",S)},M=this._callOnFinishChange.bind(this),b=400;let C;const y=v=>{if(Math.abs(v.deltaX)<Math.abs(v.deltaY)&&this._hasScrollBar)return;v.preventDefault();const N=this._normalizeMouseWheel(v)*this._step;this._snapClampSetValue(this.getValue()+N),this.$input.value=this.getValue(),clearTimeout(C),C=setTimeout(M,b)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",_,{passive:!1}),this.$slider.addEventListener("wheel",y,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:s}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,s=-t.wheelDelta/120,s*=this._stepExplicit?1:10),i+-s}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){let i=0;return this._hasMin?i=this._min:this._hasMax&&(i=this._max),t-=i,t=Math.round(t/this._step)*this._step,t+=i,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class J1 extends Xi{constructor(t,i,s,l){super(t,i,s,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(l)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(i=>{const s=document.createElement("option");s.textContent=i,this.$select.appendChild(s)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?t:this._names[i],this}}class $1 extends Xi{constructor(t,i,s){super(t,i,s,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var tC=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function eC(r){const t=document.createElement("style");t.innerHTML=r;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let iv=!1;class rp{constructor({parent:t,autoPlace:i=t===void 0,container:s,width:l,title:u="Controls",closeFolders:h=!1,injectStyles:d=!0,touchStyles:m=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(u),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),m&&this.domElement.classList.add("lil-allow-touch-styles"),!iv&&d&&(eC(tC),iv=!0),s?s.appendChild(this.domElement):i&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),l&&this.domElement.style.setProperty("--width",l+"px"),this._closeFolders=h}add(t,i,s,l,u){if(Object(s)===s)return new J1(this,t,i,s);const h=t[i];switch(typeof h){case"number":return new Q1(this,t,i,s,l,u);case"boolean":return new X1(this,t,i);case"string":return new $1(this,t,i);case"function":return new qh(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,h)}addColor(t,i,s=1){return new K1(this,t,i,s)}addFolder(t){const i=new rp({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(s=>{s instanceof qh||s._name in t.controllers&&s.load(t.controllers[s._name])}),i&&t.folders&&this.folders.forEach(s=>{s._title in t.folders&&s.load(t.folders[s._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof qh)){if(s._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);i.controllers[s._name]=s.save()}}),t&&this.folders.forEach(s=>{if(s._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);i.folders[s._title]=s.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("lil-transition");const s=u=>{u.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const l=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=l+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}const ce={sizing:{paddingSmall:"4px",paddingMedium:"8px",spacingMedium:"8px",edgeMedium:"12px",edgeLarge:"22px"},colors:{text:"#ebebeb",textLight:"#ebebeb",textDark:"#00000",overlay:"rgba(0, 0, 0, 0.5)"},typography:{fontFamily:"monospace",fontSizeSmall:"10px"},ui:{zIndex:"1000"}};ce.panelBase={color:ce.colors.text,background:ce.colors.overlay,padding:ce.sizing.paddingMedium,fontFamily:ce.typography.fontFamily,fontSize:ce.typography.fontSizeSmall,zIndex:ce.ui.zIndex};ce.buttonBase={color:ce.colors.text,background:ce.colors.overlay,padding:ce.sizing.paddingMedium,border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",cursor:"pointer",fontFamily:ce.typography.fontFamily,fontSize:ce.typography.fontSizeSmall,pointerEvents:"auto",zIndex:ce.ui.zIndex};class kv{constructor({container:t,title:i=null,style:s={},close:l=!1}={}){this.gui=new rp({title:i,autoPlace:!1}),Object.assign(this.gui.domElement.style,ce.panelBase,s);const u=this.gui.domElement.querySelector(".lil-title");i===null&&u&&(u.style.display="none"),l&&this.gui.close(),t.appendChild(this.gui.domElement),this._proxies={}}addParams(t){for(const i in t)this.#t(i,t[i])}#t(t,i){const{type:s=typeof i.value,value:l,min:u,max:h,step:d,label:m,onChange:p}=i,_={value:l};let g;switch(s){case"boolean":g=this.gui.add(_,"value").name(m??t);break;case"number":g=this.gui.add(_,"value",u,h,d).name(m??t);break;default:console.warn(`[VSGUI] Unsupported param type: ${s}`,t);return}g.onChange(S=>{p?.(S)}),this._proxies[t]={proxy:_,controller:g,config:i}}reset(){for(const t in this._proxies){const{proxy:i,controller:s,config:l}=this._proxies[t];i.value=l.value,s.updateDisplay(),l.onChange?.(i.value)}}show(t){if(!this.gui)return;const i=this.gui.domElement.style.display!=="none";t===void 0?this.gui.domElement.style.display=i?"none":"block":this.gui.domElement.style.display=t?"block":"none"}destroy(){this.gui.destroy(),this.gui=null}}class tc{constructor({scene:t,camera:i,renderer:s,container:l,audioEngine:u,debugOverlay:h,title:d="Simulation",description:m="This is a simulation."}){if(this.onAudioEngineInit!==tc.prototype.onAudioEngineInit)throw new Error("onAudioEngineInit must not be overridden - override onAudioStart");if(this.onAudioEngineShutdown!==tc.prototype.onAudioEngineShutdown)throw new Error("onAudioEngineShutdown must not be overridden - override onAudioStop");this.scene=t,this.camera=i,this.renderer=s,this.container=l,this.audioEngine=u,this.audioBus=null,this.debugOverlay=h,this.gui=new kv({container:l,title:d,close:!1,style:{...ce.panelBase,marginTop:ce.sizing.spacingMedium,minWidth:"100%",maxWidth:"100%"}}),this.showParams(!0)}onEnter(){}onExit(){}onPause(){}onResume(){}onAudioStart(){}onAudioStop(){}onAudioEngineInit(){this.audioBus=this.audioEngine.createSimBus(),this.onAudioStart()}async onAudioEngineShutdown(){this.audioBus&&(await this.audioEngine.releaseSimBus(this.audioBus),this.audioBus=null),this.onAudioStop()}showParams(t){this.gui.show(t)}update(t){}dispose(){this.gui?.destroy(),this.gui=null}}const av={type:"change"},op={type:"start"},Xv={type:"end"},Gu=new nc,sv=new es,nC=Math.cos(70*bv.DEG2RAD),pn=new Z,qn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jh=1e-6;class iC extends qM{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Os,this._lastTargetPosition=new Z,this._quat=new Os().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new L0,this._sphericalDelta=new L0,this._scale=1,this._panOffset=new Z,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new Z,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sC.bind(this),this._onPointerDown=aC.bind(this),this._onPointerUp=rC.bind(this),this._onContextMenu=dC.bind(this),this._onMouseWheel=uC.bind(this),this._onKeyDown=cC.bind(this),this._onTouchStart=fC.bind(this),this._onTouchMove=hC.bind(this),this._onMouseDown=oC.bind(this),this._onMouseMove=lC.bind(this),this._interceptControlDown=pC.bind(this),this._interceptControlUp=mC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(av),this.update(),this.state=ke.NONE}update(t=null){const i=this.object.position;pn.copy(i).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),l<-Math.PI?l+=qn:l>Math.PI&&(l-=qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),i.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=pn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Gu.origin.copy(this.object.position),Gu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gu.direction))<nC?this.object.lookAt(this.target):(sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gu.intersectPlane(sv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jh||this._lastTargetPosition.distanceToSquared(this.target)>jh?(this.dispatchEvent(av),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qn/60*this.autoRotateSpeed*t:qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){pn.setFromMatrixColumn(i,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,i){this.screenSpacePanning===!0?pn.setFromMatrixColumn(i,1):(pn.setFromMatrixColumn(i,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;pn.copy(l).sub(this.target);let u=pn.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new fe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function aC(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function sC(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function rC(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xv),this.state=ke.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function oC(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case Or.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case Or.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(op)}function lC(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function uC(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(op),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Xv))}function cC(r){this.enabled!==!1&&this._handleKeyDown(r)}function fC(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(op)}function hC(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function dC(r){this.enabled!==!1&&r.preventDefault()}function pC(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mC(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class gC{constructor(t){this.enabled=!1,this.debugData=new Map,this.debugDiv=document.createElement("div"),Object.assign(this.debugDiv.style,{...ce.panelBase,position:"absolute",bottom:ce.sizing.edgeMedium,left:ce.sizing.edgeMedium,whiteSpace:"pre-line",display:"none"}),t.appendChild(this.debugDiv),document.addEventListener("keydown",i=>{i.key==="'"&&(this.enabled=!this.enabled,this.debugDiv&&(this.debugDiv.style.display=this.enabled?"block":"none"))})}addDebugCategory(t){this.debugData.has(t)||this.debugData.set(t,[])}addTextCategory(t,i,s){this.enabled&&(this.debugData.has(t)||this.addDebugCategory(t),this.debugData.get(t).push(`${i}: ${s}`))}addText(t,i){this.addTextCategory("Default",t,i)}update(){let t=`<strong>Debug Info</strong>
`;this.enabled&&(this.debugData.forEach((i,s)=>{t+=`
<strong>${s}</strong>
${i.join(`
`)}
`}),this.debugData.clear()),this.debugDiv.innerHTML=t}dispose(){this.debugDiv?.remove(),this.debugDiv=null,document.removeEventListener("keydown",this._onKeyDown),this._onKeyDown=null,this.debugData.clear()}}class _C{constructor(t,{onToggleAudio:i,onTogglePlay:s,onRestart:l,onShowControls:u}={}){this.onToggleAudio=i,this.onTogglePlay=s,this.onRestart=l,this.onShowControls=u,this.mainDiv=document.createElement("div"),Object.assign(this.mainDiv.style,{...ce.panelBase,position:"absolute",bottom:ce.sizing.edgeLarge,right:ce.sizing.edgeLarge,display:"flex",flexDirection:"column",gap:ce.sizing.spacingMedium,border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",pointerEvents:"auto"}),t.appendChild(this.mainDiv);const h=document.createElement("div");Object.assign(h.style,{position:"relative",display:"flex",gap:ce.sizing.spacingMedium}),this.mainDiv.appendChild(h),this.audioBtn=this.#t("Audio: OFF"),this.playBtn=this.#t("Pause"),this.restartBtn=this.#t("Restart"),this.controlsBtn=this.#t("Controls"),this.audioBtn.onclick=()=>this.onToggleAudio?.(),this.playBtn.onclick=()=>this.onTogglePlay?.(),this.restartBtn.onclick=()=>this.#e(),this.controlsBtn.onclick=()=>this.#n(),h.append(this.controlsBtn,this.audioBtn,this.playBtn,this.restartBtn),this.guiContainer=document.createElement("div"),Object.assign(this.guiContainer.style,{display:"none"}),this.mainDiv.appendChild(this.guiContainer),this.gui=new kv({container:this.guiContainer,style:{...ce.buttonBase,minWidth:"100%",maxWidth:"100%"}})}setAudioEnabledLabel(t){this.audioBtn.textContent=t?"Audio: ON":"Audio: OFF"}setRunningLabel(t){this.playBtn.textContent=t?"Pause":"Resume"}#t(t=""){const i=document.createElement("button");return i.textContent=t,Object.assign(i.style,ce.buttonBase),i.style.outline="none",i}#e(){window.confirm("Restart simulation?")&&this.onRestart?.()}#n(){const t=this.guiContainer.style.display==="none";this.guiContainer.style.display=t?"block":"none",this.onShowControls?.(t)}}class vC{#t=null;#e=null;#n=.02;constructor({enabled:t=!0,onInit:i=null}={}){this.#t=t,this.#e=i,this.audioContext=null,this.masterGain=null,this.simBus=null,this.#a()}#a(){const t=async()=>{this.audioContext||(this.#s(),this.#e&&(this.#e(this),this.#e=null)),this.audioContext.state==="suspended"&&await this.audioContext.resume(),document.removeEventListener("click",t),document.removeEventListener("keydown",t)};document.addEventListener("click",t),document.addEventListener("keydown",t)}#s(){this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.audioContext.createGain(),this.masterGain.gain.value=this.#t?1:0,this.masterGain.connect(this.audioContext.destination))}#i(t,i){const s=this.audioContext.currentTime;t.cancelScheduledValues(s),t.setTargetAtTime(i,s,this.#n)}isInitialised(){return this.audioContext!==null}isEnabled(){return this.#t}setAudioEnabled(t){if(this.#t=t,this.masterGain){let i=this.#t?1:0;this.#i(this.masterGain.gain,i)}}pauseSimulationAudio(){this.isInitialised()&&this.simBus&&this.#i(this.simBus.gain,0)}resumeSimulationAudio(){this.isInitialised()&&this.simBus&&this.#i(this.simBus.gain,1)}createSimBus(){if(!this.audioContext||!this.masterGain)return null;const t=this.audioContext.createGain();return t.gain.value=0,this.#i(t.gain,1),t.connect(this.masterGain),this.simBus=t,t}releaseSimBus(t){return!this.audioContext||!t?Promise.resolve():(this.#i(t.gain,0),new Promise(i=>{setTimeout(()=>{try{t.disconnect()}catch{}i()},(this.#n+.1)*1e3)}))}createOscillator(t="sine",i=440,s=null){if(!this.audioContext)return null;const l=this.audioContext.createOscillator(),u=this.audioContext.createGain();return l.type=t,l.frequency.value=i,u.gain.value=.5,l.connect(u),s?u.connect(s):u.connect(this.masterGain),l.start(),{osc:l,gainNode:u}}dispose(){this.audioContext&&(this.audioContext.close(),this.audioContext=null,this.masterGain=null)}}class xC{constructor(t){this.autoDispose=!0,this.messageDiv=document.createElement("div"),Object.assign(this.messageDiv.style,{...ce.panelBase,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:"0",transition:"opacity 0.5s ease",pointerEvents:"none",textAlign:"center",zIndex:"1000",display:"none"}),t.appendChild(this.messageDiv),this.timeoutId=null}show(t,i=3){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),this.messageDiv.textContent=t,this.messageDiv.style.display="block",requestAnimationFrame(()=>{this.messageDiv.style.opacity="1"}),i>=0&&(this.timeoutId=setTimeout(()=>{this.hide()},i*1e3))}hide(){this.messageDiv.style.opacity="0",setTimeout(()=>{this.messageDiv.style.display="none",this.timeoutId=null,this.autoDispose&&this.dispose()},500)}dispose(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),this.messageDiv.remove(),this.messageDiv=null,this.parentDiv=null}}function SC(){if(document.getElementById("vsounds-style"))return;const r=document.createElement("style");r.id="vsounds-style",r.textContent=`
    /*
      VSounds Style
      You can reference these classes in the website where simulations are embedded.
    */
   :root {
      --vsounds-title-color: ${ce.colors.text};
    }

    body.vsounds-dark {
      --vsounds-title-color: ${ce.colors.textLight};
    }

    body.vsounds-light {
      --vsounds-title-color: ${ce.colors.textDark};
    }

    .vsounds-title {
      color: var(--vsounds-title-color);
    }

    /* 
      Lil Gui overrides
      The full list is included, even variables which are overridden
    */
    .lil-gui {
      font-family: var(--font-family);
      font-size: var(--font-size);
      line-height: 1;
      font-weight: normal;
      font-style: normal;
      text-align: left;
      color: var(--text-color);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      --background-color: ${ce.colors.overlay};
      --text-color: ${ce.colors.text};
      --title-background-color: ${ce.colors.overlay};
      --title-text-color: ${ce.colors.text};
      --widget-color: #424242;
      --hover-color: #4f4f4f;
      --focus-color: #595959;
      --number-color: ${ce.colors.text};
      --string-color: ${ce.colors.text};
      --font-size: 11px;
      --input-font-size: 11px;
      --font-family: ${ce.typography.fontFamily};
      --font-family-mono: ${ce.typography.fontFamily};
      --padding: ${ce.sizing.paddingSmall};
      --spacing: ${ce.sizing.spacingMedium};
      --widget-height: 20px;
      --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
      --name-width: 45%;
      --slider-knob-width: 2px;
      --slider-input-width: 27%;
      --color-input-width: 27%;
      --slider-input-min-width: 45px;
      --color-input-min-width: 45px;
      --folder-indent: 7px;
      --widget-padding: 0 0 0 3px;
      --widget-border-radius: 2px;
      --checkbox-size: calc(0.75 * var(--widget-height));
      --scrollbar-width: 5px;
    }
  `,document.head.appendChild(r)}class yC{constructor(t,i,s){SC(),this.renderer=t,this.camera=i,this.container=s,this.audioEngine=new vC({enabled:!0,onInit:()=>this.onAudioEngineInit()}),this.scene=new RM,this.clock=new YM,this.currentSim=null,this.currentSimClass=null,this.orbitControls=new iC(i,t.domElement),this.orbitControls.enableDamping=!0,this.orbitControls.enabled=!1,this.paused=!1,this.audioEnabled=this.audioEngine?.isEnabled()??!0,this.debugOverlay=new gC(s),this.settingsOverlay=new _C(s,{onToggleAudio:()=>this.toggleAudio(),onTogglePlay:()=>this.togglePause(),onRestart:()=>this.restartSimulation()}),this.settingsOverlay.setAudioEnabledLabel(this.audioEnabled),this.settingsOverlay.setRunningLabel(!this.paused),this.messageOverlay=new xC(s),this.messageOverlay.autoDispose=!1,this.messageOverlay.show("Audio will start automatically after a click or key press.",3),this.simSpeed=1,this.enabledOrbitControls=!1,this.settingsOverlay.gui.addParams({orbit:{type:"boolean",value:this.enabledOrbitControls,label:"Orbit Controls",onChange:l=>{this.orbitControls.enabled=l}},speed:{value:this.simSpeed,min:0,max:2,step:.01,label:"Time Dilation",onChange:l=>this.simSpeed=l}})}toggleAudio(){this.audioEnabled=!this.audioEnabled,this.audioEngine?.setAudioEnabled(this.audioEnabled),this.settingsOverlay.setAudioEnabledLabel(this.audioEnabled)}togglePause(){this.paused=!this.paused,this.paused?(this.messageOverlay.show("Simulation paused.",-1),this.pauseSimulation()):(this.messageOverlay.hide(),this.resumeSimulation()),this.settingsOverlay.setRunningLabel(!this.paused)}onAudioEngineInit(){this.currentSim&&(this.currentSim.onAudioEngineInit?.(),this.paused&&this.audioEngine.pauseSimulationAudio())}restartSimulation(){!this.currentSim||!this.currentSimClass||this.setSimulation(this.currentSimClass)}pauseSimulation(){this.currentSim&&(this.paused=!0,this.audioEngine.pauseSimulationAudio(),this.currentSim.onPause?.())}resumeSimulation(){this.currentSim&&(this.paused=!1,this.clock.getDelta(),this.audioEngine.resumeSimulationAudio(),this.currentSim.onResume?.())}async setSimulation(t){this.currentSim&&(await this.currentSim.onAudioEngineShutdown(),this.currentSim.onExit(),this.currentSim.dispose?.(),this._clearSim()),this.currentSimClass=t,this.currentSim=new t({scene:this.scene,camera:this.camera,renderer:this.renderer,container:this.settingsOverlay.guiContainer,debugOverlay:this.debugOverlay,audioEngine:this.audioEngine}),this.currentSim.onEnter(),this.audioEngine.isInitialised()&&this.currentSim.onAudioEngineInit?.(),this.paused&&this.togglePause(),this.resetGlobalParams(),this.orbitControls.reset()}resetGlobalParams(){this.settingsOverlay.gui.reset()}update(){if(!this.currentSim)return;let t=this.clock.getDelta();t*=this.simSpeed,this.paused||this.currentSim.update(t),this.renderer.render(this.scene,this.camera)}_clearSim(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0])}}const Bn=Object.freeze({Verbose:0,Log:1,Warning:2,Error:3,None:4}),Xd=Object.freeze({Core:"Core",Audio:"Audio",DSP:"DSP",Engine:"Engine",UI:"UI",Debug:"Debug",Particles:"Particles"}),rv={globalVerbosity:Bn.Log,categoryVerbosity:{Core:Bn.Verbose,Audio:Bn.Verbose,DSP:Bn.Warning,Engine:Bn.Log,UI:Bn.Verbose,Debug:Bn.Verbose,Particles:Bn.Verbose}};function Wd(r,t,...i){const s=rv.categoryVerbosity[r]??rv.globalVerbosity;if(!(t<s))switch(t){case Bn.Verbose:case Bn.Log:console.log(`[${r}]`,...i);break;case Bn.Warning:console.warn(`[${r}]`,...i);break;case Bn.Error:console.error(`[${r}]`,...i);break}}class MC{constructor(t,i={}){this.scene=t,this.params=i,this.geometry=null,this.material=null,this.object3D=null,Wd(Xd.Particles,Bn.Verbose,"Particle system: ",this.params)}init(){this.initParticleSystem(),this.onInit?.()}initParticleSystem(){this.geometry=this.createGeometry(),this.material=this.createMaterial(),this.object3D=this.createObject3D(this.geometry,this.material),this.scene.add(this.object3D)}update(t){throw new Error("update() not implemented")}dispose(){this.scene.remove(this.object3D),this.geometry?.dispose(),this.material?.dispose()}createGeometry(){throw new Error("createGeometry() not implemented")}createMaterial(){throw new Error("createMaterial() not implemented")}createObject3D(t,i){return new FM(t,i)}}class lp extends MC{static DEFAULT_PARAMS={count:100,radius:4,initialSpeed:.1,particleSize:.1};constructor(t,i={}){const s={...lp.DEFAULT_PARAMS,...i};super(t,s);const l=this.params.count;this.positions=new Float32Array(l*3),this.velocities=new Float32Array(l*3),this.alphas=new Float32Array(l)}#t(){for(let t=0;t<this.params.count;t++){const i=t*3;let s,l,u,h;do s=Math.random()*2-1,l=Math.random()*2-1,u=Math.random()*2-1,h=s*s+l*l+u*u;while(h>1||h===0);const d=Math.cbrt(Math.random())*this.params.radius;this.positions[i]=s*d,this.positions[i+1]=l*d,this.positions[i+2]=u*d;const m=Math.random()*2-1,p=Math.random()*2-1,_=Math.random()*2-1,g=Math.hypot(m,p,_)||1;this.velocities[i]=m/g*this.params.initialSpeed,this.velocities[i+1]=p/g*this.params.initialSpeed,this.velocities[i+2]=_/g*this.params.initialSpeed,this.alphas[t]=1}}updatePositions(t){const i=this.positions,s=this.velocities;for(let l=0;l<this.params.count;l++){const u=l*3;i[u]+=s[u]*t,i[u+1]+=s[u+1]*t,i[u+2]+=s[u+2]*t}}applyDamping(t=.98,i){const s=Math.pow(t,i),l=this.velocities;for(let u=0;u<l.length;u++)l[u]*=s}constrainToSphere(){const t=this.positions,i=this.velocities,s=this.params.radius,l=s*s;for(let u=0;u<t.length;u+=3){const h=t[u],d=t[u+1],m=t[u+2],p=h*h+d*d+m*m;if(p>l){const _=Math.sqrt(p),g=h/_,S=d/_,M=m/_;t[u]=g*s,t[u+1]=S*s,t[u+2]=M*s;const b=i[u]*g+i[u+1]*S+i[u+2]*M;i[u]-=2*b*g,i[u+1]-=2*b*S,i[u+2]-=2*b*M}}}syncPositions(){this.geometry.attributes.position.needsUpdate=!0}syncAlphas(){const t=this.geometry.attributes.alpha;t&&(t.needsUpdate=!0)}createGeometry(){this.#t();const t=new ri;return t.setAttribute("position",new si(this.positions,3)),t.setAttribute("alpha",new si(this.alphas,1)),t}createMaterial(){return new Li({uniforms:{uSize:{value:this.params.particleSize}},vertexShader:`
        attribute float alpha;
        varying float vAlpha;
        uniform float uSize;
        void main() {
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = uSize * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying float vAlpha;
        void main(){
          vec2 coord = gl_PointCoord - vec2(0.5);
          if(abs(coord.x) > 0.5 || abs(coord.y) > 0.5) discard;
          gl_FragColor = vec4(1.0,1.0,1.0,vAlpha);
        }
      `,transparent:!0,depthTest:!0,depthWrite:!1})}update(t){this.applyDamping(.98,t),this.updatePositions(t),this.constrainToSphere(),this.syncPositions()}}class up extends lp{static DEFAULT_PARAMS={linkRadius:1,maxLinksPerParticle:4,linkForce:15e-5};constructor(t,i={}){super(t,{...up.DEFAULT_PARAMS,...i}),this.linkCounts=new Uint8Array(this.params.count),this.maxLinks=this.params.count*this.params.maxLinksPerParticle,this.linkPositions=new Float32Array(this.maxLinks*2*3),this.linkGeometry=new ri,this.linkGeometry.setAttribute("position",new si(this.linkPositions,3)),this.linkMaterial=new Pv({color:16777215,transparent:!0,opacity:.25}),this.links=new OM(this.linkGeometry,this.linkMaterial),this.scene.add(this.links),this.grid=new Map}#t(){return this.params.linkRadius}#e(t,i,s){const l=this.#t();return Math.floor(t/l)+","+Math.floor(i/l)+","+Math.floor(s/l)}#n(){this.grid.clear();const t=this.positions;for(let i=0;i<this.params.count;i++){const s=i*3,l=this.#e(t[s],t[s+1],t[s+2]);this.grid.has(l)||this.grid.set(l,[]),this.grid.get(l).push(i)}}#a(t,i){const s=this.positions,l=t*3,u=this.#t(),h=Math.floor(s[l]/u),d=Math.floor(s[l+1]/u),m=Math.floor(s[l+2]/u);for(let p=-1;p<=1;p++)for(let _=-1;_<=1;_++)for(let g=-1;g<=1;g++){const S=this.grid.get(`${h+p},${d+_},${m+g}`);if(S)for(const M of S)M!==t&&i(M)}}#s(){const t=this.positions,i=this.velocities;this.linkCounts.fill(0);let s=0;const l=this.params.linkRadius*this.params.linkRadius;for(let h=0;h<this.params.count;h++){let d=0;const m=h*3;this.#a(h,p=>{if(p<=h||d>=this.params.maxLinksPerParticle||s>=this.maxLinks)return;const _=p*3,g=t[m]-t[_],S=t[m+1]-t[_+1],M=t[m+2]-t[_+2],b=g*g+S*S+M*M;if(b<l){const C=s*6;this.linkPositions[C]=t[m],this.linkPositions[C+1]=t[m+1],this.linkPositions[C+2]=t[m+2],this.linkPositions[C+3]=t[_],this.linkPositions[C+4]=t[_+1],this.linkPositions[C+5]=t[_+2];const y=Math.sqrt(b)+1e-6,v=g/y,D=S/y,N=M/y,O=this.params.linkForce;i[m]+=v*O,i[m+1]+=D*O,i[m+2]+=N*O,i[_]-=v*O,i[_+1]-=D*O,i[_+2]-=N*O,this.linkCounts[h]++,this.linkCounts[p]++,d++,s++}})}this.linkGeometry.setDrawRange(0,s*2),this.linkGeometry.attributes.position.needsUpdate=!0;for(let h=0;h<this.params.count;h++)this.alphas[h]=bv.clamp(this.linkCounts[h]/this.params.maxLinksPerParticle,.1,1);this.syncAlphas();let u=0;for(let h=0;h<this.params.count;h++)u+=this.linkCounts[h]/this.params.maxLinksPerParticle;u/=this.params.count}update(t){this.applyDamping(.98,t),this.updatePositions(t),this.constrainToSphere(),this.#n(),this.#s(),this.syncPositions()}}const Wv=Object.freeze({LIGHT:"light",DARK:"dark"});function EC(r){if(!Object.values(Wv).includes(r)){Wd(Xd.UI,Bn.Error,"Canont apply theme: ",r);return}const t=document.body;t&&(t.classList.remove("vsounds-light","vsounds-dark"),t.classList.add(`vsounds-${r}`),Wd(Xd.UI,Bn.Verbose,"Applied theme: ",r))}const bC={applyTheme:EC};class TC extends tc{onEnter(){this.scene.background=new Re(1315860),bC.applyTheme(Wv.DARK);const t=new XM(16777215,.25);this.scene.add(t);const i=new kM(16777215,5);this.scene.add(i),this.particleSystem=new up(this.scene,{count:20,radius:2.5,initialSpeed:.5,particleSize:.1,linkRadius:1,maxLinksPerParticle:4,linkForce:15e-5}),this.particleSystem.init();const s=this.particleSystem.params;this.gui.addParams({radius:{value:s.radius,min:.5,max:4,step:.1,label:"Sphere Radius",onChange:l=>{s.radius=l}},linkRadius:{value:s.linkRadius,min:.5,max:4,step:.1,label:"Link Radius",onChange:l=>{s.linkRadius=l}},maxLinks:{value:s.maxLinksPerParticle,min:1,max:4,step:1,label:"Max Links",onChange:l=>{s.maxLinksPerParticle=l}}})}onAudioStart(){}update(t){this.particleSystem.update(t)}onExit(){}}function AC({container:r}){ty.useEffect(()=>{if(!r){console.error("[sim-001] Cannot init simulation app – invalid container");return}const t=r.clientWidth,i=r.clientHeight,s=75,l=t/i,u=.1,h=1e3,d=new xi(s,l,u,h);d.position.z=5;const m=new k1({antialias:!0});m.setSize(t,i),m.setClearColor(16119285,1);var p=function(){m.setSize(r.offsetWidth,r.offsetHeight),d.aspect=r.offsetWidth/r.offsetHeight,d.updateProjectionMatrix()};window.addEventListener("resize",p),r.appendChild(m.domElement);const _=new yC(m,d,r);_.setSimulation(TC);var g=function(){_.update()},S=function(){requestAnimationFrame(S),g()};S()},[r])}function CC(r){oy.createRoot(r).render(JS.jsx(AC,{container:r}))}function RC(r){return r.split(/[^a-zA-Z0-9]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}const wC="mount"+RC("sim-001")+"App";window[wC]=CC;
