(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(r){if(r.ep)return;r.ep=!0;const u=e(r);fetch(r.href,u)}})();var hd={exports:{}},yl={};var px;function tb(){if(px)return yl;px=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(a,r,u){var c=null;if(u!==void 0&&(c=""+u),r.key!==void 0&&(c=""+r.key),"key"in r){u={};for(var h in r)h!=="key"&&(u[h]=r[h])}else u=r;return r=u.ref,{$$typeof:o,type:a,key:c,ref:r!==void 0?r:null,props:u}}return yl.Fragment=t,yl.jsx=e,yl.jsxs=e,yl}var mx;function eb(){return mx||(mx=1,hd.exports=tb()),hd.exports}var nb=eb(),fd={exports:{}},re={};var gx;function ib(){if(gx)return re;gx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(F,nt,xt){this.props=F,this.context=nt,this.refs=M,this.updater=xt||b}y.prototype.isReactComponent={},y.prototype.setState=function(F,nt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,nt,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function D(){}D.prototype=y.prototype;function L(F,nt,xt){this.props=F,this.context=nt,this.refs=M,this.updater=xt||b}var N=L.prototype=new D;N.constructor=L,E(N,y.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function B(){}var U={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function C(F,nt,xt){var Rt=xt.ref;return{$$typeof:o,type:F,key:nt,ref:Rt!==void 0?Rt:null,props:xt}}function R(F,nt){return C(F.type,nt,F.props)}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function K(F){var nt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(xt){return nt[xt]})}var Q=/\/+/g;function ft(F,nt){return typeof F=="object"&&F!==null&&F.key!=null?K(""+F.key):nt.toString(36)}function at(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(B,B):(F.status="pending",F.then(function(nt){F.status==="pending"&&(F.status="fulfilled",F.value=nt)},function(nt){F.status==="pending"&&(F.status="rejected",F.reason=nt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function P(F,nt,xt,Rt,It){var it=typeof F;(it==="undefined"||it==="boolean")&&(F=null);var dt=!1;if(F===null)dt=!0;else switch(it){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(F.$$typeof){case o:case t:dt=!0;break;case g:return dt=F._init,P(dt(F._payload),nt,xt,Rt,It)}}if(dt)return It=It(F),dt=Rt===""?"."+ft(F,0):Rt,z(It)?(xt="",dt!=null&&(xt=dt.replace(Q,"$&/")+"/"),P(It,nt,xt,"",function(Ht){return Ht})):It!=null&&(V(It)&&(It=R(It,xt+(It.key==null||F&&F.key===It.key?"":(""+It.key).replace(Q,"$&/")+"/")+dt)),nt.push(It)),1;dt=0;var Ot=Rt===""?".":Rt+":";if(z(F))for(var Gt=0;Gt<F.length;Gt++)Rt=F[Gt],it=Ot+ft(Rt,Gt),dt+=P(Rt,nt,xt,it,It);else if(Gt=v(F),typeof Gt=="function")for(F=Gt.call(F),Gt=0;!(Rt=F.next()).done;)Rt=Rt.value,it=Ot+ft(Rt,Gt++),dt+=P(Rt,nt,xt,it,It);else if(it==="object"){if(typeof F.then=="function")return P(at(F),nt,xt,Rt,It);throw nt=String(F),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return dt}function H(F,nt,xt){if(F==null)return F;var Rt=[],It=0;return P(F,Rt,"","",function(it){return nt.call(xt,it,It++)}),Rt}function et(F){if(F._status===-1){var nt=F._result;nt=nt(),nt.then(function(xt){(F._status===0||F._status===-1)&&(F._status=1,F._result=xt)},function(xt){(F._status===0||F._status===-1)&&(F._status=2,F._result=xt)}),F._status===-1&&(F._status=0,F._result=nt)}if(F._status===1)return F._result.default;throw F._result}var Et=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},St={map:H,forEach:function(F,nt,xt){H(F,function(){nt.apply(this,arguments)},xt)},count:function(F){var nt=0;return H(F,function(){nt++}),nt},toArray:function(F){return H(F,function(nt){return nt})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return re.Activity=_,re.Children=St,re.Component=y,re.Fragment=e,re.Profiler=r,re.PureComponent=L,re.StrictMode=a,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,re.__COMPILER_RUNTIME={__proto__:null,c:function(F){return U.H.useMemoCache(F)}},re.cache=function(F){return function(){return F.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(F,nt,xt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Rt=E({},F.props),It=F.key;if(nt!=null)for(it in nt.key!==void 0&&(It=""+nt.key),nt)!Z.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(Rt[it]=nt[it]);var it=arguments.length-2;if(it===1)Rt.children=xt;else if(1<it){for(var dt=Array(it),Ot=0;Ot<it;Ot++)dt[Ot]=arguments[Ot+2];Rt.children=dt}return C(F.type,It,Rt)},re.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:u,_context:F},F},re.createElement=function(F,nt,xt){var Rt,It={},it=null;if(nt!=null)for(Rt in nt.key!==void 0&&(it=""+nt.key),nt)Z.call(nt,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(It[Rt]=nt[Rt]);var dt=arguments.length-2;if(dt===1)It.children=xt;else if(1<dt){for(var Ot=Array(dt),Gt=0;Gt<dt;Gt++)Ot[Gt]=arguments[Gt+2];It.children=Ot}if(F&&F.defaultProps)for(Rt in dt=F.defaultProps,dt)It[Rt]===void 0&&(It[Rt]=dt[Rt]);return C(F,it,It)},re.createRef=function(){return{current:null}},re.forwardRef=function(F){return{$$typeof:h,render:F}},re.isValidElement=V,re.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:et}},re.memo=function(F,nt){return{$$typeof:d,type:F,compare:nt===void 0?null:nt}},re.startTransition=function(F){var nt=U.T,xt={};U.T=xt;try{var Rt=F(),It=U.S;It!==null&&It(xt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(B,Et)}catch(it){Et(it)}finally{nt!==null&&xt.types!==null&&(nt.types=xt.types),U.T=nt}},re.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},re.use=function(F){return U.H.use(F)},re.useActionState=function(F,nt,xt){return U.H.useActionState(F,nt,xt)},re.useCallback=function(F,nt){return U.H.useCallback(F,nt)},re.useContext=function(F){return U.H.useContext(F)},re.useDebugValue=function(){},re.useDeferredValue=function(F,nt){return U.H.useDeferredValue(F,nt)},re.useEffect=function(F,nt){return U.H.useEffect(F,nt)},re.useEffectEvent=function(F){return U.H.useEffectEvent(F)},re.useId=function(){return U.H.useId()},re.useImperativeHandle=function(F,nt,xt){return U.H.useImperativeHandle(F,nt,xt)},re.useInsertionEffect=function(F,nt){return U.H.useInsertionEffect(F,nt)},re.useLayoutEffect=function(F,nt){return U.H.useLayoutEffect(F,nt)},re.useMemo=function(F,nt){return U.H.useMemo(F,nt)},re.useOptimistic=function(F,nt){return U.H.useOptimistic(F,nt)},re.useReducer=function(F,nt,xt){return U.H.useReducer(F,nt,xt)},re.useRef=function(F){return U.H.useRef(F)},re.useState=function(F){return U.H.useState(F)},re.useSyncExternalStore=function(F,nt,xt){return U.H.useSyncExternalStore(F,nt,xt)},re.useTransition=function(){return U.H.useTransition()},re.version="19.2.4",re}var _x;function dm(){return _x||(_x=1,fd.exports=ib()),fd.exports}var ab=dm(),dd={exports:{}},Sl={},pd={exports:{}},md={};var xx;function sb(){return xx||(xx=1,(function(o){function t(P,H){var et=P.length;P.push(H);t:for(;0<et;){var Et=et-1>>>1,St=P[Et];if(0<r(St,H))P[Et]=H,P[et]=St,et=Et;else break t}}function e(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var H=P[0],et=P.pop();if(et!==H){P[0]=et;t:for(var Et=0,St=P.length,F=St>>>1;Et<F;){var nt=2*(Et+1)-1,xt=P[nt],Rt=nt+1,It=P[Rt];if(0>r(xt,et))Rt<St&&0>r(It,xt)?(P[Et]=It,P[Rt]=et,Et=Rt):(P[Et]=xt,P[nt]=et,Et=nt);else if(Rt<St&&0>r(It,et))P[Et]=It,P[Rt]=et,Et=Rt;else break t}}return H}function r(P,H){var et=P.sortIndex-H.sortIndex;return et!==0?et:P.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();o.unstable_now=function(){return c.now()-h}}var p=[],d=[],g=1,_=null,x=3,v=!1,b=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(P){for(var H=e(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=P)a(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=e(d)}}function z(P){if(E=!1,N(P),!b)if(e(p)!==null)b=!0,B||(B=!0,K());else{var H=e(d);H!==null&&at(z,H.startTime-P)}}var B=!1,U=-1,Z=5,C=-1;function R(){return M?!0:!(o.unstable_now()-C<Z)}function V(){if(M=!1,B){var P=o.unstable_now();C=P;var H=!0;try{t:{b=!1,E&&(E=!1,D(U),U=-1),v=!0;var et=x;try{e:{for(N(P),_=e(p);_!==null&&!(_.expirationTime>P&&R());){var Et=_.callback;if(typeof Et=="function"){_.callback=null,x=_.priorityLevel;var St=Et(_.expirationTime<=P);if(P=o.unstable_now(),typeof St=="function"){_.callback=St,N(P),H=!0;break e}_===e(p)&&a(p),N(P)}else a(p);_=e(p)}if(_!==null)H=!0;else{var F=e(d);F!==null&&at(z,F.startTime-P),H=!1}}break t}finally{_=null,x=et,v=!1}H=void 0}}finally{H?K():B=!1}}}var K;if(typeof L=="function")K=function(){L(V)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ft=Q.port2;Q.port1.onmessage=V,K=function(){ft.postMessage(null)}}else K=function(){y(V,0)};function at(P,H){U=y(function(){P(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var et=x;x=H;try{return P()}finally{x=et}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var et=x;x=P;try{return H()}finally{x=et}},o.unstable_scheduleCallback=function(P,H,et){var Et=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?Et+et:Et):et=Et,P){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=et+St,P={id:g++,callback:H,priorityLevel:P,startTime:et,expirationTime:St,sortIndex:-1},et>Et?(P.sortIndex=et,t(d,P),e(p)===null&&P===e(d)&&(E?(D(U),U=-1):E=!0,at(z,et-Et))):(P.sortIndex=St,t(p,P),b||v||(b=!0,B||(B=!0,K()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var H=x;return function(){var et=x;x=H;try{return P.apply(this,arguments)}finally{x=et}}}})(md)),md}var vx;function rb(){return vx||(vx=1,pd.exports=sb()),pd.exports}var gd={exports:{}},Nn={};var yx;function ob(){if(yx)return Nn;yx=1;var o=dm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var a={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},r=Symbol.for("react.portal");function u(p,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:p,containerInfo:d,implementation:g}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Nn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,g)},Nn.flushSync=function(p){var d=c.T,g=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=g,a.d.f()}},Nn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Nn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Nn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),x=typeof d.integrity=="string"?d.integrity:void 0,v=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:v}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:v,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Nn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Nn.requestFormReset=function(p){a.d.r(p)},Nn.unstable_batchedUpdates=function(p,d){return p(d)},Nn.useFormState=function(p,d,g){return c.H.useFormState(p,d,g)},Nn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var Sx;function lb(){if(Sx)return gd.exports;Sx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),gd.exports=ob(),gd.exports}var Mx;function ub(){if(Mx)return Sl;Mx=1;var o=rb(),t=dm(),e=lb();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function c(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(a(188))}function d(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(a(188));return i!==n?null:n}for(var s=n,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),n;if(m===l)return p(f),i;m=m.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=m;else{for(var S=!1,T=f.child;T;){if(T===s){S=!0,s=f,l=m;break}if(T===l){S=!0,l=f,s=m;break}T=T.sibling}if(!S){for(T=m.child;T;){if(T===s){S=!0,s=m,l=f;break}if(T===l){S=!0,l=m,s=f;break}T=T.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Symbol.for("react.client.reference");function ft(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Q?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case b:return"Portal";case L:return n.displayName||"Context";case D:return(n._context.displayName||"Context")+".Consumer";case N:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case U:return i=n.displayName||null,i!==null?i:ft(n.type)||"Memo";case Z:i=n._payload,n=n._init;try{return ft(n(i))}catch{}}return null}var at=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},Et=[],St=-1;function F(n){return{current:n}}function nt(n){0>St||(n.current=Et[St],Et[St]=null,St--)}function xt(n,i){St++,Et[St]=n.current,n.current=i}var Rt=F(null),It=F(null),it=F(null),dt=F(null);function Ot(n,i){switch(xt(it,i),xt(It,n),xt(Rt,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?P_(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=P_(i),n=B_(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}nt(Rt),xt(Rt,n)}function Gt(){nt(Rt),nt(It),nt(it)}function Ht(n){n.memoizedState!==null&&xt(dt,n);var i=Rt.current,s=B_(i,n.type);i!==s&&(xt(It,n),xt(Rt,s))}function pe(n){It.current===n&&(nt(Rt),nt(It)),dt.current===n&&(nt(dt),gl._currentValue=et)}var Ze,me;function he(n){if(Ze===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ze=i&&i[1]||"",me=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+n+me}var be=!1;function ae(n,i){if(!n||be)return"";be=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var ot=ct}Reflect.construct(n,[],vt)}else{try{vt.call()}catch(ct){ot=ct}n.call(vt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(vt=n())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),S=m[0],T=m[1];if(S&&T){var I=S.split(`
`),tt=T.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<tt.length&&!tt[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===tt.length)for(l=I.length-1,f=tt.length-1;1<=l&&0<=f&&I[l]!==tt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==tt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==tt[f]){var pt=`
`+I[l].replace(" at new "," at ");return n.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",n.displayName)),pt}while(1<=l&&0<=f);break}}}finally{be=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?he(s):""}function $e(n,i){switch(n.tag){case 26:case 27:case 5:return he(n.type);case 16:return he("Lazy");case 13:return n.child!==i&&i!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return ae(n.type,!1);case 11:return ae(n.type.render,!1);case 1:return ae(n.type,!0);case 31:return he("Activity");default:return""}}function k(n){try{var i="",s=null;do i+=$e(n,s),s=n,n=n.return;while(n);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var He=Object.prototype.hasOwnProperty,fe=o.unstable_scheduleCallback,we=o.unstable_cancelCallback,qt=o.unstable_shouldYield,O=o.unstable_requestPaint,A=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,Mt=o.unstable_UserBlockingPriority,ht=o.unstable_NormalPriority,Yt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,kt=o.log,G=o.unstable_setDisableYieldValue,st=null,yt=null;function wt(n){if(typeof kt=="function"&&G(n),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(st,n)}catch{}}var Dt=Math.clz32?Math.clz32:W,Ut=Math.log,ie=Math.LN2;function W(n){return n>>>=0,n===0?32:31-(Ut(n)/ie|0)|0}var zt=256,Tt=262144,Nt=4194304;function bt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function _t(n,i,s){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,S=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~m,l!==0?f=bt(l):(S&=T,S!==0?f=bt(S):s||(s=T&~n,s!==0&&(f=bt(s))))):(T=l&~m,T!==0?f=bt(T):S!==0?f=bt(S):s||(s=l&~n,s!==0&&(f=bt(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ct(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function te(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var n=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),n}function Ae(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function Ln(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ai(n,i,s,l,f,m){var S=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var T=n.entanglements,I=n.expirationTimes,tt=n.hiddenUpdates;for(s=S&~s;0<s;){var pt=31-Dt(s),vt=1<<pt;T[pt]=0,I[pt]=-1;var ot=tt[pt];if(ot!==null)for(tt[pt]=null,pt=0;pt<ot.length;pt++){var ct=ot[pt];ct!==null&&(ct.lane&=-536870913)}s&=~vt}l!==0&&jl(n,l,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(S&~i))}function jl(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-Dt(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|s&261930}function Co(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var l=31-Dt(s),f=1<<l;f&i|n[l]&i&&(n[l]|=i),s&=~f}}function lr(n,i){var s=i&-i;return s=(s&42)!==0?1:Ro(s),(s&(n.suspendedLanes|i))!==0?0:s}function Ro(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ur(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Do(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:ox(n.type))}function Gi(n,i){var s=H.p;try{return H.p=n,i()}finally{H.p=s}}var ci=Math.random().toString(36).slice(2),sn="__reactFiber$"+ci,Sn="__reactProps$"+ci,Ti="__reactContainer$"+ci,cr="__reactEvents$"+ci,hr="__reactListeners$"+ci,Zl="__reactHandles$"+ci,Uo="__reactResources$"+ci,ws="__reactMarker$"+ci;function Lo(n){delete n[sn],delete n[Sn],delete n[cr],delete n[hr],delete n[Zl]}function Va(n){var i=n[sn];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Ti]||s[sn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=W_(n);n!==null;){if(s=n[sn])return s;n=W_(n)}return i}n=s,s=n.parentNode}return null}function Ga(n){if(n=n[sn]||n[Ti]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function Cs(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function ka(n){var i=n[Uo];return i||(i=n[Uo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function w(n){n[ws]=!0}var Y=new Set,lt={};function rt(n,i){$(n,i),$(n+"Capture",i)}function $(n,i){for(lt[n]=i,n=0;n<i.length;n++)Y.add(i[n])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Pt={};function Xt(n){return He.call(Pt,n)?!0:He.call(Vt,n)?!1:Ft.test(n)?Pt[n]=!0:(Vt[n]=!0,!1)}function jt(n,i,s){if(Xt(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function Jt(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function Zt(n,i,s,l){if(l===null)n.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+l)}}function ee(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n,i,s){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,m.call(this,S)}}),Object.defineProperty(n,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function qe(n){if(!n._valueTracker){var i=Ue(n)?"checked":"value";n._valueTracker=Ke(n,i,""+n[i])}}function Oe(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return n&&(l=Ue(n)?n.checked?"true":"false":n.value),n=l,n!==s?(i.setValue(n),!0):!1}function Kt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Le=/[\n"\\]/g;function se(n){return n.replace(Le,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Mn(n,i,s,l,f,m,S,T){n.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.type=S:n.removeAttribute("type"),i!=null?S==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+ee(i)):n.value!==""+ee(i)&&(n.value=""+ee(i)):S!=="submit"&&S!=="reset"||n.removeAttribute("value"),i!=null?bn(n,S,ee(i)):s!=null?bn(n,S,ee(s)):l!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+ee(T):n.removeAttribute("name")}function ia(n,i,s,l,f,m,S,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){qe(n);return}s=s!=null?""+ee(s):"",i=i!=null?""+ee(i):s,T||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(n.name=S),qe(n)}function bn(n,i,s){i==="number"&&Kt(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function hi(n,i,s,l){if(n=n.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=i.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&l&&(n[s].defaultSelected=!0)}else{for(s=""+ee(s),i=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Fe(n,i,s){if(i!=null&&(i=""+ee(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+ee(s):""}function En(n,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(at(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ee(i),n.defaultValue=s,l=n.textContent,l===s&&l!==""&&l!==null&&(n.value=l),qe(n)}function dn(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(n,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,s):typeof s!="number"||s===0||An.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function fr(n,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Tn(n,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Tn(n,m,i[m])}function wi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $y=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ky=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(n){return Ky.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function aa(){}var oh=null;function lh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dr=null,pr=null;function Fm(n){var i=Ga(n);if(i&&(n=i.stateNode)){var s=n[Sn]||null;t:switch(n=i.stateNode,i.type){case"input":if(Mn(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+se(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==n&&l.form===n.form){var f=l[Sn]||null;if(!f)throw Error(a(90));Mn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===n.form&&Oe(l)}break t;case"textarea":Fe(n,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&hi(n,!!s.multiple,i,!1)}}}var uh=!1;function Pm(n,i,s){if(uh)return n(i,s);uh=!0;try{var l=n(i);return l}finally{if(uh=!1,(dr!==null||pr!==null)&&(Pu(),dr&&(i=dr,n=pr,pr=dr=null,Fm(i),n)))for(i=0;i<n.length;i++)Fm(n[i])}}function No(n,i){var s=n.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ch=!1;if(sa)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){ch=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{ch=!1}var Xa=null,hh=null,Kl=null;function Bm(){if(Kl)return Kl;var n,i=hh,s=i.length,l,f="value"in Xa?Xa.value:Xa.textContent,m=f.length;for(n=0;n<s&&i[n]===f[n];n++);var S=s-n;for(l=1;l<=S&&i[s-l]===f[m-l];l++);return Kl=f.slice(n,1<l?1-l:void 0)}function Ql(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Jl(){return!0}function Im(){return!1}function Xn(n){function i(s,l,f,m,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(s=n[T],this[T]=s?s(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Jl:Im,this.isPropagationStopped=Im,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=Xn(Rs),zo=_({},Rs,{view:0,detail:0}),Qy=Xn(zo),fh,dh,Fo,eu=_({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fo&&(Fo&&n.type==="mousemove"?(fh=n.screenX-Fo.screenX,dh=n.screenY-Fo.screenY):dh=fh=0,Fo=n),fh)},movementY:function(n){return"movementY"in n?n.movementY:dh}}),Hm=Xn(eu),Jy=_({},eu,{dataTransfer:0}),tS=Xn(Jy),eS=_({},zo,{relatedTarget:0}),ph=Xn(eS),nS=_({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=Xn(nS),aS=_({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sS=Xn(aS),rS=_({},Rs,{data:0}),Vm=Xn(rS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=uS[n])?!!i[n]:!1}function mh(){return cS}var hS=_({},zo,{key:function(n){if(n.key){var i=oS[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ql(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(n){return n.type==="keypress"?Ql(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ql(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fS=Xn(hS),dS=_({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gm=Xn(dS),pS=_({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),mS=Xn(pS),gS=_({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=Xn(gS),xS=_({},eu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=Xn(xS),yS=_({},Rs,{newState:0,oldState:0}),SS=Xn(yS),MS=[9,13,27,32],gh=sa&&"CompositionEvent"in window,Po=null;sa&&"documentMode"in document&&(Po=document.documentMode);var bS=sa&&"TextEvent"in window&&!Po,km=sa&&(!gh||Po&&8<Po&&11>=Po),Xm=" ",Wm=!1;function qm(n,i){switch(n){case"keyup":return MS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ym(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var mr=!1;function ES(n,i){switch(n){case"compositionend":return Ym(i);case"keypress":return i.which!==32?null:(Wm=!0,Xm);case"textInput":return n=i.data,n===Xm&&Wm?null:n;default:return null}}function AS(n,i){if(mr)return n==="compositionend"||!gh&&qm(n,i)?(n=Bm(),Kl=hh=Xa=null,mr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return km&&i.locale!=="ko"?null:i.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!TS[n.type]:i==="textarea"}function Zm(n,i,s,l){dr?pr?pr.push(l):pr=[l]:dr=l,i=Xu(i,"onChange"),0<i.length&&(s=new tu("onChange","change",null,s,l),n.push({event:s,listeners:i}))}var Bo=null,Io=null;function wS(n){U_(n,0)}function nu(n){var i=Cs(n);if(Oe(i))return n}function $m(n,i){if(n==="change")return i}var Km=!1;if(sa){var _h;if(sa){var xh="oninput"in document;if(!xh){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),xh=typeof Qm.oninput=="function"}_h=xh}else _h=!1;Km=_h&&(!document.documentMode||9<document.documentMode)}function Jm(){Bo&&(Bo.detachEvent("onpropertychange",tg),Io=Bo=null)}function tg(n){if(n.propertyName==="value"&&nu(Io)){var i=[];Zm(i,Io,n,lh(n)),Pm(wS,i)}}function CS(n,i,s){n==="focusin"?(Jm(),Bo=i,Io=s,Bo.attachEvent("onpropertychange",tg)):n==="focusout"&&Jm()}function RS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nu(Io)}function DS(n,i){if(n==="click")return nu(i)}function US(n,i){if(n==="input"||n==="change")return nu(i)}function LS(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Qn=typeof Object.is=="function"?Object.is:LS;function Ho(n,i){if(Qn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!He.call(i,f)||!Qn(n[f],i[f]))return!1}return!0}function eg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ng(n,i){var s=eg(n);n=0;for(var l;s;){if(s.nodeType===3){if(l=n+s.textContent.length,n<=i&&l>=i)return{node:s,offset:i-n};n=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=eg(s)}}function ig(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ig(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ag(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Kt(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=Kt(n.document)}return i}function vh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var NS=sa&&"documentMode"in document&&11>=document.documentMode,gr=null,yh=null,Vo=null,Sh=!1;function sg(n,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Sh||gr==null||gr!==Kt(l)||(l=gr,"selectionStart"in l&&vh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Vo&&Ho(Vo,l)||(Vo=l,l=Xu(yh,"onSelect"),0<l.length&&(i=new tu("onSelect","select",null,i,s),n.push({event:i,listeners:l}),i.target=gr)))}function Ds(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var _r={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},Mh={},rg={};sa&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Us(n){if(Mh[n])return Mh[n];if(!_r[n])return n;var i=_r[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in rg)return Mh[n]=i[s];return n}var og=Us("animationend"),lg=Us("animationiteration"),ug=Us("animationstart"),OS=Us("transitionrun"),zS=Us("transitionstart"),FS=Us("transitioncancel"),cg=Us("transitionend"),hg=new Map,bh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bh.push("scrollEnd");function Ci(n,i){hg.set(n,i),rt(i,[n])}var iu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},fi=[],xr=0,Eh=0;function au(){for(var n=xr,i=Eh=xr=0;i<n;){var s=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var f=fi[i];fi[i++]=null;var m=fi[i];if(fi[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}m!==0&&fg(s,f,m)}}function su(n,i,s,l){fi[xr++]=n,fi[xr++]=i,fi[xr++]=s,fi[xr++]=l,Eh|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Ah(n,i,s,l){return su(n,i,s,l),ru(n)}function Ls(n,i){return su(n,null,null,i),ru(n)}function fg(n,i,s){n.lanes|=s;var l=n.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=n.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&i!==null&&(f=31-Dt(s),n=m.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function ru(n){if(50<ul)throw ul=0,zf=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var vr={};function PS(n,i,s,l){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,s,l){return new PS(n,i,s,l)}function Th(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ra(n,i){var s=n.alternate;return s===null?(s=Jn(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function dg(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function ou(n,i,s,l,f,m){var S=0;if(l=n,typeof n=="function")Th(n)&&(S=1);else if(typeof n=="string")S=GM(n,s,Rt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case C:return n=Jn(31,s,i,f),n.elementType=C,n.lanes=m,n;case E:return Ns(s.children,f,m,i);case M:S=8,f|=24;break;case y:return n=Jn(12,s,i,f|2),n.elementType=y,n.lanes=m,n;case z:return n=Jn(13,s,i,f),n.elementType=z,n.lanes=m,n;case B:return n=Jn(19,s,i,f),n.elementType=B,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case L:S=10;break t;case D:S=9;break t;case N:S=11;break t;case U:S=14;break t;case Z:S=16,l=null;break t}S=29,s=Error(a(130,n===null?"null":typeof n,"")),l=null}return i=Jn(S,s,i,f),i.elementType=n,i.type=l,i.lanes=m,i}function Ns(n,i,s,l){return n=Jn(7,n,l,i),n.lanes=s,n}function wh(n,i,s){return n=Jn(6,n,null,i),n.lanes=s,n}function pg(n){var i=Jn(18,null,null,0);return i.stateNode=n,i}function Ch(n,i,s){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var mg=new WeakMap;function di(n,i){if(typeof n=="object"&&n!==null){var s=mg.get(n);return s!==void 0?s:(i={value:n,source:i,stack:k(i)},mg.set(n,i),i)}return{value:n,source:i,stack:k(i)}}var yr=[],Sr=0,lu=null,Go=0,pi=[],mi=0,Wa=null,ki=1,Xi="";function oa(n,i){yr[Sr++]=Go,yr[Sr++]=lu,lu=n,Go=i}function gg(n,i,s){pi[mi++]=ki,pi[mi++]=Xi,pi[mi++]=Wa,Wa=n;var l=ki;n=Xi;var f=32-Dt(l)-1;l&=~(1<<f),s+=1;var m=32-Dt(i)+f;if(30<m){var S=f-f%5;m=(l&(1<<S)-1).toString(32),l>>=S,f-=S,ki=1<<32-Dt(i)+f|s<<f|l,Xi=m+n}else ki=1<<m|s<<f|l,Xi=n}function Rh(n){n.return!==null&&(oa(n,1),gg(n,1,0))}function Dh(n){for(;n===lu;)lu=yr[--Sr],yr[Sr]=null,Go=yr[--Sr],yr[Sr]=null;for(;n===Wa;)Wa=pi[--mi],pi[mi]=null,Xi=pi[--mi],pi[mi]=null,ki=pi[--mi],pi[mi]=null}function _g(n,i){pi[mi++]=ki,pi[mi++]=Xi,pi[mi++]=Wa,ki=i.id,Xi=i.overflow,Wa=n}var wn=null,Ye=null,Se=!1,qa=null,gi=!1,Uh=Error(a(519));function Ya(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ko(di(i,n)),Uh}function xg(n){var i=n.stateNode,s=n.type,l=n.memoizedProps;switch(i[sn]=n,i[Sn]=l,s){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(s=0;s<hl.length;s++)xe(hl[s],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),ia(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),En(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||z_(i.textContent,s)?(l.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),l.onScroll!=null&&xe("scroll",i),l.onScrollEnd!=null&&xe("scrollend",i),l.onClick!=null&&(i.onclick=aa),i=!0):i=!1,i||Ya(n,!0)}function vg(n){for(wn=n.return;wn;)switch(wn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:wn=wn.return}}function Mr(n){if(n!==wn)return!1;if(!Se)return vg(n),Se=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||$f(n.type,n.memoizedProps)),s=!s),s&&Ye&&Ya(n),vg(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));Ye=X_(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));Ye=X_(n)}else i===27?(i=Ye,os(n.type)?(n=ed,ed=null,Ye=n):Ye=i):Ye=wn?xi(n.stateNode.nextSibling):null;return!0}function Os(){Ye=wn=null,Se=!1}function Lh(){var n=qa;return n!==null&&(jn===null?jn=n:jn.push.apply(jn,n),qa=null),n}function ko(n){qa===null?qa=[n]:qa.push(n)}var Nh=F(null),zs=null,la=null;function ja(n,i,s){xt(Nh,i._currentValue),i._currentValue=s}function ua(n){n._currentValue=Nh.current,nt(Nh)}function Oh(n,i,s){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===s)break;n=n.return}}function zh(n,i,s,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var S=f.child;m=m.firstContext;t:for(;m!==null;){var T=m;m=f;for(var I=0;I<i.length;I++)if(T.context===i[I]){m.lanes|=s,T=m.alternate,T!==null&&(T.lanes|=s),Oh(m.return,s,n),l||(S=null);break t}m=T.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=s,m=S.alternate,m!==null&&(m.lanes|=s),Oh(S,s,n),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===n){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function br(n,i,s,l){n=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var T=f.type;Qn(f.pendingProps.value,S.value)||(n!==null?n.push(T):n=[T])}}else if(f===dt.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(gl):n=[gl])}f=f.return}n!==null&&zh(i,n,s,l),i.flags|=262144}function uu(n){for(n=n.firstContext;n!==null;){if(!Qn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Fs(n){zs=n,la=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Cn(n){return yg(zs,n)}function cu(n,i){return zs===null&&Fs(n),yg(n,i)}function yg(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},la===null){if(n===null)throw Error(a(308));la=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else la=la.next=i;return s}var BS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},IS=o.unstable_scheduleCallback,HS=o.unstable_NormalPriority,rn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fh(){return{controller:new BS,data:new Map,refCount:0}}function Xo(n){n.refCount--,n.refCount===0&&IS(HS,function(){n.controller.abort()})}var Wo=null,Ph=0,Er=0,Ar=null;function VS(n,i){if(Wo===null){var s=Wo=[];Ph=0,Er=Vf(),Ar={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ph++,i.then(Sg,Sg),i}function Sg(){if(--Ph===0&&Wo!==null){Ar!==null&&(Ar.status="fulfilled");var n=Wo;Wo=null,Er=0,Ar=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function GS(n,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Mg=P.S;P.S=function(n,i){s_=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&VS(n,i),Mg!==null&&Mg(n,i)};var Ps=F(null);function Bh(){var n=Ps.current;return n!==null?n:We.pooledCache}function hu(n,i){i===null?xt(Ps,Ps.current):xt(Ps,i.pool)}function bg(){var n=Bh();return n===null?null:{parent:rn._currentValue,pool:n}}var Tr=Error(a(460)),Ih=Error(a(474)),fu=Error(a(542)),du={then:function(){}};function Eg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ag(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(aa,aa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,wg(n),n;default:if(typeof i.status=="string")i.then(aa,aa);else{if(n=We,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,wg(n),n}throw Is=i,Tr}}function Bs(n){try{var i=n._init;return i(n._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Is=s,Tr):s}}var Is=null;function Tg(){if(Is===null)throw Error(a(459));var n=Is;return Is=null,n}function wg(n){if(n===Tr||n===fu)throw Error(a(483))}var wr=null,qo=0;function pu(n){var i=qo;return qo+=1,wr===null&&(wr=[]),Ag(wr,n,i)}function Yo(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function mu(n,i){throw i.$$typeof===x?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Cg(n){function i(j,X){if(n){var J=j.deletions;J===null?(j.deletions=[X],j.flags|=16):J.push(X)}}function s(j,X){if(!n)return null;for(;X!==null;)i(j,X),X=X.sibling;return null}function l(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function f(j,X){return j=ra(j,X),j.index=0,j.sibling=null,j}function m(j,X,J){return j.index=J,n?(J=j.alternate,J!==null?(J=J.index,J<X?(j.flags|=67108866,X):J):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function S(j){return n&&j.alternate===null&&(j.flags|=67108866),j}function T(j,X,J,gt){return X===null||X.tag!==6?(X=wh(J,j.mode,gt),X.return=j,X):(X=f(X,J),X.return=j,X)}function I(j,X,J,gt){var Qt=J.type;return Qt===E?pt(j,X,J.props.children,gt,J.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&Bs(Qt)===X.type)?(X=f(X,J.props),Yo(X,J),X.return=j,X):(X=ou(J.type,J.key,J.props,null,j.mode,gt),Yo(X,J),X.return=j,X)}function tt(j,X,J,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Ch(J,j.mode,gt),X.return=j,X):(X=f(X,J.children||[]),X.return=j,X)}function pt(j,X,J,gt,Qt){return X===null||X.tag!==7?(X=Ns(J,j.mode,gt,Qt),X.return=j,X):(X=f(X,J),X.return=j,X)}function vt(j,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=wh(""+X,j.mode,J),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return J=ou(X.type,X.key,X.props,null,j.mode,J),Yo(J,X),J.return=j,J;case b:return X=Ch(X,j.mode,J),X.return=j,X;case Z:return X=Bs(X),vt(j,X,J)}if(at(X)||K(X))return X=Ns(X,j.mode,J,null),X.return=j,X;if(typeof X.then=="function")return vt(j,pu(X),J);if(X.$$typeof===L)return vt(j,cu(j,X),J);mu(j,X)}return null}function ot(j,X,J,gt){var Qt=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Qt!==null?null:T(j,X,""+J,gt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===Qt?I(j,X,J,gt):null;case b:return J.key===Qt?tt(j,X,J,gt):null;case Z:return J=Bs(J),ot(j,X,J,gt)}if(at(J)||K(J))return Qt!==null?null:pt(j,X,J,gt,null);if(typeof J.then=="function")return ot(j,X,pu(J),gt);if(J.$$typeof===L)return ot(j,X,cu(j,J),gt);mu(j,J)}return null}function ct(j,X,J,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get(J)||null,T(X,j,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case v:return j=j.get(gt.key===null?J:gt.key)||null,I(X,j,gt,Qt);case b:return j=j.get(gt.key===null?J:gt.key)||null,tt(X,j,gt,Qt);case Z:return gt=Bs(gt),ct(j,X,J,gt,Qt)}if(at(gt)||K(gt))return j=j.get(J)||null,pt(X,j,gt,Qt,null);if(typeof gt.then=="function")return ct(j,X,J,pu(gt),Qt);if(gt.$$typeof===L)return ct(j,X,J,cu(X,gt),Qt);mu(X,gt)}return null}function Wt(j,X,J,gt){for(var Qt=null,Ce=null,$t=X,ue=X=0,ye=null;$t!==null&&ue<J.length;ue++){$t.index>ue?(ye=$t,$t=null):ye=$t.sibling;var Re=ot(j,$t,J[ue],gt);if(Re===null){$t===null&&($t=ye);break}n&&$t&&Re.alternate===null&&i(j,$t),X=m(Re,X,ue),Ce===null?Qt=Re:Ce.sibling=Re,Ce=Re,$t=ye}if(ue===J.length)return s(j,$t),Se&&oa(j,ue),Qt;if($t===null){for(;ue<J.length;ue++)$t=vt(j,J[ue],gt),$t!==null&&(X=m($t,X,ue),Ce===null?Qt=$t:Ce.sibling=$t,Ce=$t);return Se&&oa(j,ue),Qt}for($t=l($t);ue<J.length;ue++)ye=ct($t,j,ue,J[ue],gt),ye!==null&&(n&&ye.alternate!==null&&$t.delete(ye.key===null?ue:ye.key),X=m(ye,X,ue),Ce===null?Qt=ye:Ce.sibling=ye,Ce=ye);return n&&$t.forEach(function(fs){return i(j,fs)}),Se&&oa(j,ue),Qt}function ne(j,X,J,gt){if(J==null)throw Error(a(151));for(var Qt=null,Ce=null,$t=X,ue=X=0,ye=null,Re=J.next();$t!==null&&!Re.done;ue++,Re=J.next()){$t.index>ue?(ye=$t,$t=null):ye=$t.sibling;var fs=ot(j,$t,Re.value,gt);if(fs===null){$t===null&&($t=ye);break}n&&$t&&fs.alternate===null&&i(j,$t),X=m(fs,X,ue),Ce===null?Qt=fs:Ce.sibling=fs,Ce=fs,$t=ye}if(Re.done)return s(j,$t),Se&&oa(j,ue),Qt;if($t===null){for(;!Re.done;ue++,Re=J.next())Re=vt(j,Re.value,gt),Re!==null&&(X=m(Re,X,ue),Ce===null?Qt=Re:Ce.sibling=Re,Ce=Re);return Se&&oa(j,ue),Qt}for($t=l($t);!Re.done;ue++,Re=J.next())Re=ct($t,j,ue,Re.value,gt),Re!==null&&(n&&Re.alternate!==null&&$t.delete(Re.key===null?ue:Re.key),X=m(Re,X,ue),Ce===null?Qt=Re:Ce.sibling=Re,Ce=Re);return n&&$t.forEach(function(JM){return i(j,JM)}),Se&&oa(j,ue),Qt}function ke(j,X,J,gt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:t:{for(var Qt=J.key;X!==null;){if(X.key===Qt){if(Qt=J.type,Qt===E){if(X.tag===7){s(j,X.sibling),gt=f(X,J.props.children),gt.return=j,j=gt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&Bs(Qt)===X.type){s(j,X.sibling),gt=f(X,J.props),Yo(gt,J),gt.return=j,j=gt;break t}s(j,X);break}else i(j,X);X=X.sibling}J.type===E?(gt=Ns(J.props.children,j.mode,gt,J.key),gt.return=j,j=gt):(gt=ou(J.type,J.key,J.props,null,j.mode,gt),Yo(gt,J),gt.return=j,j=gt)}return S(j);case b:t:{for(Qt=J.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){s(j,X.sibling),gt=f(X,J.children||[]),gt.return=j,j=gt;break t}else{s(j,X);break}else i(j,X);X=X.sibling}gt=Ch(J,j.mode,gt),gt.return=j,j=gt}return S(j);case Z:return J=Bs(J),ke(j,X,J,gt)}if(at(J))return Wt(j,X,J,gt);if(K(J)){if(Qt=K(J),typeof Qt!="function")throw Error(a(150));return J=Qt.call(J),ne(j,X,J,gt)}if(typeof J.then=="function")return ke(j,X,pu(J),gt);if(J.$$typeof===L)return ke(j,X,cu(j,J),gt);mu(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(s(j,X.sibling),gt=f(X,J),gt.return=j,j=gt):(s(j,X),gt=wh(J,j.mode,gt),gt.return=j,j=gt),S(j)):s(j,X)}return function(j,X,J,gt){try{qo=0;var Qt=ke(j,X,J,gt);return wr=null,Qt}catch($t){if($t===Tr||$t===fu)throw $t;var Ce=Jn(29,$t,null,j.mode);return Ce.lanes=gt,Ce.return=j,Ce}}}var Hs=Cg(!0),Rg=Cg(!1),Za=!1;function Hh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function $a(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ka(n,i,s){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=ru(n),fg(n,null,s),i}return su(n,l,i,s),ru(n)}function jo(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,Co(n,s)}}function Gh(n,i){var s=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=S:m=m.next=S,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var kh=!1;function Zo(){if(kh){var n=Ar;if(n!==null)throw n}}function $o(n,i,s,l){kh=!1;var f=n.updateQueue;Za=!1;var m=f.firstBaseUpdate,S=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var I=T,tt=I.next;I.next=null,S===null?m=tt:S.next=tt,S=I;var pt=n.alternate;pt!==null&&(pt=pt.updateQueue,T=pt.lastBaseUpdate,T!==S&&(T===null?pt.firstBaseUpdate=tt:T.next=tt,pt.lastBaseUpdate=I))}if(m!==null){var vt=f.baseState;S=0,pt=tt=I=null,T=m;do{var ot=T.lane&-536870913,ct=ot!==T.lane;if(ct?(ve&ot)===ot:(l&ot)===ot){ot!==0&&ot===Er&&(kh=!0),pt!==null&&(pt=pt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Wt=n,ne=T;ot=i;var ke=s;switch(ne.tag){case 1:if(Wt=ne.payload,typeof Wt=="function"){vt=Wt.call(ke,vt,ot);break t}vt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ne.payload,ot=typeof Wt=="function"?Wt.call(ke,vt,ot):Wt,ot==null)break t;vt=_({},vt,ot);break t;case 2:Za=!0}}ot=T.callback,ot!==null&&(n.flags|=64,ct&&(n.flags|=8192),ct=f.callbacks,ct===null?f.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pt===null?(tt=pt=ct,I=vt):pt=pt.next=ct,S|=ot;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;ct=T,T=ct.next,ct.next=null,f.lastBaseUpdate=ct,f.shared.pending=null}}while(!0);pt===null&&(I=vt),f.baseState=I,f.firstBaseUpdate=tt,f.lastBaseUpdate=pt,m===null&&(f.shared.lanes=0),ns|=S,n.lanes=S,n.memoizedState=vt}}function Dg(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function Ug(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)Dg(s[n],i)}var Cr=F(null),gu=F(0);function Lg(n,i){n=xa,xt(gu,n),xt(Cr,i),xa=n|i.baseLanes}function Xh(){xt(gu,xa),xt(Cr,Cr.current)}function Wh(){xa=gu.current,nt(Cr),nt(gu)}var ti=F(null),_i=null;function Qa(n){var i=n.alternate;xt(nn,nn.current&1),xt(ti,n),_i===null&&(i===null||Cr.current!==null||i.memoizedState!==null)&&(_i=n)}function qh(n){xt(nn,nn.current),xt(ti,n),_i===null&&(_i=n)}function Ng(n){n.tag===22?(xt(nn,nn.current),xt(ti,n),_i===null&&(_i=n)):Ja()}function Ja(){xt(nn,nn.current),xt(ti,ti.current)}function ei(n){nt(ti),_i===n&&(_i=null),nt(nn)}var nn=F(0);function _u(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Jf(s)||td(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ca=0,le=null,Ve=null,on=null,xu=!1,Rr=!1,Vs=!1,vu=0,Ko=0,Dr=null,kS=0;function Je(){throw Error(a(321))}function Yh(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!Qn(n[s],i[s]))return!1;return!0}function jh(n,i,s,l,f,m){return ca=m,le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=n===null||n.memoizedState===null?g0:cf,Vs=!1,m=s(l,f),Vs=!1,Rr&&(m=zg(i,s,l,f)),Og(n),m}function Og(n){P.H=tl;var i=Ve!==null&&Ve.next!==null;if(ca=0,on=Ve=le=null,xu=!1,Ko=0,Dr=null,i)throw Error(a(300));n===null||ln||(n=n.dependencies,n!==null&&uu(n)&&(ln=!0))}function zg(n,i,s,l){le=n;var f=0;do{if(Rr&&(Dr=null),Ko=0,Rr=!1,25<=f)throw Error(a(301));if(f+=1,on=Ve=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}P.H=_0,m=i(s,l)}while(Rr);return m}function XS(){var n=P.H,i=n.useState()[0];return i=typeof i.then=="function"?Qo(i):i,n=n.useState()[0],(Ve!==null?Ve.memoizedState:null)!==n&&(le.flags|=1024),i}function Zh(){var n=vu!==0;return vu=0,n}function $h(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function Kh(n){if(xu){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}xu=!1}ca=0,on=Ve=le=null,Rr=!1,Ko=vu=0,Dr=null}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?le.memoizedState=on=n:on=on.next=n,on}function an(){if(Ve===null){var n=le.alternate;n=n!==null?n.memoizedState:null}else n=Ve.next;var i=on===null?le.memoizedState:on.next;if(i!==null)on=i,Ve=n;else{if(n===null)throw le.alternate===null?Error(a(467)):Error(a(310));Ve=n,n={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},on===null?le.memoizedState=on=n:on=on.next=n}return on}function yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(n){var i=Ko;return Ko+=1,Dr===null&&(Dr=[]),n=Ag(Dr,n,i),i=le,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?g0:cf),n}function Su(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Qo(n);if(n.$$typeof===L)return Cn(n)}throw Error(a(438,String(n)))}function Qh(n){var i=null,s=le.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=yu(),le.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),l=0;l<n;l++)s[l]=R;return i.index++,s}function ha(n,i){return typeof i=="function"?i(n):i}function Mu(n){var i=an();return Jh(i,Ve,n)}function Jh(n,i,s){var l=n.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=n.baseQueue,m=l.pending;if(m!==null){if(f!==null){var S=f.next;f.next=m.next,m.next=S}i.baseQueue=f=m,l.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{i=f.next;var T=S=null,I=null,tt=i,pt=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(ve&vt)===vt:(ca&vt)===vt){var ot=tt.revertLane;if(ot===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Er&&(pt=!0);else if((ca&ot)===ot){tt=tt.next,ot===Er&&(pt=!0);continue}else vt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=vt,S=m):I=I.next=vt,le.lanes|=ot,ns|=ot;vt=tt.action,Vs&&s(m,vt),m=tt.hasEagerState?tt.eagerState:s(m,vt)}else ot={lane:vt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=ot,S=m):I=I.next=ot,le.lanes|=vt,ns|=vt;tt=tt.next}while(tt!==null&&tt!==i);if(I===null?S=m:I.next=T,!Qn(m,n.memoizedState)&&(ln=!0,pt&&(s=Ar,s!==null)))throw s;n.memoizedState=m,n.baseState=S,n.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function tf(n){var i=an(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do m=n(m,S.action),S=S.next;while(S!==f);Qn(m,i.memoizedState)||(ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function Fg(n,i,s){var l=le,f=an(),m=Se;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!Qn((Ve||f).memoizedState,s);if(S&&(f.memoizedState=s,ln=!0),f=f.queue,af(Ig.bind(null,l,f,n),[n]),f.getSnapshot!==i||S||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,Ur(9,{destroy:void 0},Bg.bind(null,l,f,s,i),null),We===null)throw Error(a(349));m||(ca&127)!==0||Pg(l,i,s)}return s}function Pg(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=le.updateQueue,i===null?(i=yu(),le.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Bg(n,i,s,l){i.value=s,i.getSnapshot=l,Hg(i)&&Vg(n)}function Ig(n,i,s){return s(function(){Hg(i)&&Vg(n)})}function Hg(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!Qn(n,s)}catch{return!0}}function Vg(n){var i=Ls(n,2);i!==null&&Zn(i,n,2)}function ef(n){var i=Hn();if(typeof n=="function"){var s=n;if(n=s(),Vs){wt(!0);try{s()}finally{wt(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:n},i}function Gg(n,i,s,l){return n.baseState=s,Jh(n,Ve,typeof l=="function"?l:ha)}function WS(n,i,s,l,f){if(Au(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};P.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,kg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function kg(n,i){var s=i.action,l=i.payload,f=n.state;if(i.isTransition){var m=P.T,S={};P.T=S;try{var T=s(f,l),I=P.S;I!==null&&I(S,T),Xg(n,i,T)}catch(tt){nf(n,i,tt)}finally{m!==null&&S.types!==null&&(m.types=S.types),P.T=m}}else try{m=s(f,l),Xg(n,i,m)}catch(tt){nf(n,i,tt)}}function Xg(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Wg(n,i,l)},function(l){return nf(n,i,l)}):Wg(n,i,s)}function Wg(n,i,s){i.status="fulfilled",i.value=s,qg(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,kg(n,s)))}function nf(n,i,s){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,qg(i),i=i.next;while(i!==l)}n.action=null}function qg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Yg(n,i){return i}function jg(n,i){if(Se){var s=We.formState;if(s!==null){t:{var l=le;if(Se){if(Ye){e:{for(var f=Ye,m=gi;f.nodeType!==8;){if(!m){f=null;break e}if(f=xi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ye=xi(f.nextSibling),l=f.data==="F!";break t}}Ya(l)}l=!1}l&&(i=s[0])}}return s=Hn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yg,lastRenderedState:i},s.queue=l,s=d0.bind(null,le,l),l.dispatch=s,l=ef(!1),m=uf.bind(null,le,!1,l.queue),l=Hn(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,s=WS.bind(null,le,f,m,s),f.dispatch=s,l.memoizedState=n,[i,s,!1]}function Zg(n){var i=an();return $g(i,Ve,n)}function $g(n,i,s){if(i=Jh(n,i,Yg)[0],n=Mu(ha)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Qo(i)}catch(S){throw S===Tr?fu:S}else l=i;i=an();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(le.flags|=2048,Ur(9,{destroy:void 0},qS.bind(null,f,s),null)),[l,m,n]}function qS(n,i){n.action=i}function Kg(n){var i=an(),s=Ve;if(s!==null)return $g(i,s,n);an(),i=i.memoizedState,s=an();var l=s.queue.dispatch;return s.memoizedState=n,[i,l,!1]}function Ur(n,i,s,l){return n={tag:n,create:s,deps:l,inst:i,next:null},i=le.updateQueue,i===null&&(i=yu(),le.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(l=s.next,s.next=n,n.next=l,i.lastEffect=n),n}function Qg(){return an().memoizedState}function bu(n,i,s,l){var f=Hn();le.flags|=n,f.memoizedState=Ur(1|i,{destroy:void 0},s,l===void 0?null:l)}function Eu(n,i,s,l){var f=an();l=l===void 0?null:l;var m=f.memoizedState.inst;Ve!==null&&l!==null&&Yh(l,Ve.memoizedState.deps)?f.memoizedState=Ur(i,m,s,l):(le.flags|=n,f.memoizedState=Ur(1|i,m,s,l))}function Jg(n,i){bu(8390656,8,n,i)}function af(n,i){Eu(2048,8,n,i)}function YS(n){le.flags|=4;var i=le.updateQueue;if(i===null)i=yu(),le.updateQueue=i,i.events=[n];else{var s=i.events;s===null?i.events=[n]:s.push(n)}}function t0(n){var i=an().memoizedState;return YS({ref:i,nextImpl:n}),function(){if((Ne&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function e0(n,i){return Eu(4,2,n,i)}function n0(n,i){return Eu(4,4,n,i)}function i0(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function a0(n,i,s){s=s!=null?s.concat([n]):null,Eu(4,4,i0.bind(null,i,n),s)}function sf(){}function s0(n,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Yh(i,l[1])?l[0]:(s.memoizedState=[n,i],n)}function r0(n,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Yh(i,l[1]))return l[0];if(l=n(),Vs){wt(!0);try{n()}finally{wt(!1)}}return s.memoizedState=[l,i],l}function rf(n,i,s){return s===void 0||(ca&1073741824)!==0&&(ve&261930)===0?n.memoizedState=i:(n.memoizedState=s,n=o_(),le.lanes|=n,ns|=n,s)}function o0(n,i,s,l){return Qn(s,i)?s:Cr.current!==null?(n=rf(n,s,l),Qn(n,i)||(ln=!0),n):(ca&42)===0||(ca&1073741824)!==0&&(ve&261930)===0?(ln=!0,n.memoizedState=s):(n=o_(),le.lanes|=n,ns|=n,i)}function l0(n,i,s,l,f){var m=H.p;H.p=m!==0&&8>m?m:8;var S=P.T,T={};P.T=T,uf(n,!1,i,s);try{var I=f(),tt=P.S;if(tt!==null&&tt(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var pt=GS(I,l);Jo(n,i,pt,ai(n))}else Jo(n,i,l,ai(n))}catch(vt){Jo(n,i,{then:function(){},status:"rejected",reason:vt},ai())}finally{H.p=m,S!==null&&T.types!==null&&(S.types=T.types),P.T=S}}function jS(){}function of(n,i,s,l){if(n.tag!==5)throw Error(a(476));var f=u0(n).queue;l0(n,f,i,et,s===null?jS:function(){return c0(n),s(l)})}function u0(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:et},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function c0(n){var i=u0(n);i.next===null&&(i=n.alternate.memoizedState),Jo(n,i.next.queue,{},ai())}function lf(){return Cn(gl)}function h0(){return an().memoizedState}function f0(){return an().memoizedState}function ZS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=ai();n=$a(s);var l=Ka(i,n,s);l!==null&&(Zn(l,i,s),jo(l,i,s)),i={cache:Fh()},n.payload=i;return}i=i.return}}function $S(n,i,s){var l=ai();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Au(n)?p0(i,s):(s=Ah(n,i,s,l),s!==null&&(Zn(s,n,l),m0(s,i,l)))}function d0(n,i,s){var l=ai();Jo(n,i,s,l)}function Jo(n,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Au(n))p0(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var S=i.lastRenderedState,T=m(S,s);if(f.hasEagerState=!0,f.eagerState=T,Qn(T,S))return su(n,i,f,0),We===null&&au(),!1}catch{}if(s=Ah(n,i,f,l),s!==null)return Zn(s,n,l),m0(s,i,l),!0}return!1}function uf(n,i,s,l){if(l={lane:2,revertLane:Vf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Au(n)){if(i)throw Error(a(479))}else i=Ah(n,s,l,2),i!==null&&Zn(i,n,2)}function Au(n){var i=n.alternate;return n===le||i!==null&&i===le}function p0(n,i){Rr=xu=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function m0(n,i,s){if((s&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,Co(n,s)}}var tl={readContext:Cn,use:Su,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};tl.useEffectEvent=Je;var g0={readContext:Cn,use:Su,useCallback:function(n,i){return Hn().memoizedState=[n,i===void 0?null:i],n},useContext:Cn,useEffect:Jg,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,bu(4194308,4,i0.bind(null,i,n),s)},useLayoutEffect:function(n,i){return bu(4194308,4,n,i)},useInsertionEffect:function(n,i){bu(4,2,n,i)},useMemo:function(n,i){var s=Hn();i=i===void 0?null:i;var l=n();if(Vs){wt(!0);try{n()}finally{wt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(n,i,s){var l=Hn();if(s!==void 0){var f=s(i);if(Vs){wt(!0);try{s(i)}finally{wt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=$S.bind(null,le,n),[l.memoizedState,n]},useRef:function(n){var i=Hn();return n={current:n},i.memoizedState=n},useState:function(n){n=ef(n);var i=n.queue,s=d0.bind(null,le,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:sf,useDeferredValue:function(n,i){var s=Hn();return rf(s,n,i)},useTransition:function(){var n=ef(!1);return n=l0.bind(null,le,n.queue,!0,!1),Hn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var l=le,f=Hn();if(Se){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),We===null)throw Error(a(349));(ve&127)!==0||Pg(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Jg(Ig.bind(null,l,m,n),[n]),l.flags|=2048,Ur(9,{destroy:void 0},Bg.bind(null,l,m,s,i),null),s},useId:function(){var n=Hn(),i=We.identifierPrefix;if(Se){var s=Xi,l=ki;s=(l&~(1<<32-Dt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=vu++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=kS++,i="_"+i+"r_"+s.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:lf,useFormState:jg,useActionState:jg,useOptimistic:function(n){var i=Hn();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=uf.bind(null,le,!0,s),s.dispatch=i,[n,i]},useMemoCache:Qh,useCacheRefresh:function(){return Hn().memoizedState=ZS.bind(null,le)},useEffectEvent:function(n){var i=Hn(),s={impl:n};return i.memoizedState=s,function(){if((Ne&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},cf={readContext:Cn,use:Su,useCallback:s0,useContext:Cn,useEffect:af,useImperativeHandle:a0,useInsertionEffect:e0,useLayoutEffect:n0,useMemo:r0,useReducer:Mu,useRef:Qg,useState:function(){return Mu(ha)},useDebugValue:sf,useDeferredValue:function(n,i){var s=an();return o0(s,Ve.memoizedState,n,i)},useTransition:function(){var n=Mu(ha)[0],i=an().memoizedState;return[typeof n=="boolean"?n:Qo(n),i]},useSyncExternalStore:Fg,useId:h0,useHostTransitionStatus:lf,useFormState:Zg,useActionState:Zg,useOptimistic:function(n,i){var s=an();return Gg(s,Ve,n,i)},useMemoCache:Qh,useCacheRefresh:f0};cf.useEffectEvent=t0;var _0={readContext:Cn,use:Su,useCallback:s0,useContext:Cn,useEffect:af,useImperativeHandle:a0,useInsertionEffect:e0,useLayoutEffect:n0,useMemo:r0,useReducer:tf,useRef:Qg,useState:function(){return tf(ha)},useDebugValue:sf,useDeferredValue:function(n,i){var s=an();return Ve===null?rf(s,n,i):o0(s,Ve.memoizedState,n,i)},useTransition:function(){var n=tf(ha)[0],i=an().memoizedState;return[typeof n=="boolean"?n:Qo(n),i]},useSyncExternalStore:Fg,useId:h0,useHostTransitionStatus:lf,useFormState:Kg,useActionState:Kg,useOptimistic:function(n,i){var s=an();return Ve!==null?Gg(s,Ve,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Qh,useCacheRefresh:f0};_0.useEffectEvent=t0;function hf(n,i,s,l){i=n.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var ff={enqueueSetState:function(n,i,s){n=n._reactInternals;var l=ai(),f=$a(l);f.payload=i,s!=null&&(f.callback=s),i=Ka(n,f,l),i!==null&&(Zn(i,n,l),jo(i,n,l))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var l=ai(),f=$a(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ka(n,f,l),i!==null&&(Zn(i,n,l),jo(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=ai(),l=$a(s);l.tag=2,i!=null&&(l.callback=i),i=Ka(n,l,s),i!==null&&(Zn(i,n,s),jo(i,n,s))}};function x0(n,i,s,l,f,m,S){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,S):i.prototype&&i.prototype.isPureReactComponent?!Ho(s,l)||!Ho(f,m):!0}function v0(n,i,s,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==n&&ff.enqueueReplaceState(i,i.state,null)}function Gs(n,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(n=n.defaultProps){s===i&&(s=_({},s));for(var f in n)s[f]===void 0&&(s[f]=n[f])}return s}function y0(n){iu(n)}function S0(n){console.error(n)}function M0(n){iu(n)}function Tu(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function b0(n,i,s){try{var l=n.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function df(n,i,s){return s=$a(s),s.tag=3,s.payload={element:null},s.callback=function(){Tu(n,i)},s}function E0(n){return n=$a(n),n.tag=3,n}function A0(n,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;n.payload=function(){return f(m)},n.callback=function(){b0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(n.callback=function(){b0(i,s,l),typeof f!="function"&&(is===null?is=new Set([this]):is.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function KS(n,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&br(i,s,f,!0),s=ti.current,s!==null){switch(s.tag){case 31:case 13:return _i===null?Bu():s.alternate===null&&tn===0&&(tn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===du?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Bf(n,l,f)),!1;case 22:return s.flags|=65536,l===du?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Bf(n,l,f)),!1}throw Error(a(435,s.tag))}return Bf(n,l,f),Bu(),!1}if(Se)return i=ti.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Uh&&(n=Error(a(422),{cause:l}),ko(di(n,s)))):(l!==Uh&&(i=Error(a(423),{cause:l}),ko(di(i,s))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=di(l,s),f=df(n.stateNode,l,f),Gh(n,f),tn!==4&&(tn=2)),!1;var m=Error(a(520),{cause:l});if(m=di(m,s),ll===null?ll=[m]:ll.push(m),tn!==4&&(tn=2),i===null)return!0;l=di(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=f&-f,s.lanes|=n,n=df(s.stateNode,l,n),Gh(s,n),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(is===null||!is.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=E0(f),A0(f,n,s,l),Gh(s,f),!1}s=s.return}while(s!==null);return!1}var pf=Error(a(461)),ln=!1;function Rn(n,i,s,l){i.child=n===null?Rg(i,null,s,l):Hs(i,n.child,s,l)}function T0(n,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var S={};for(var T in l)T!=="ref"&&(S[T]=l[T])}else S=l;return Fs(i),l=jh(n,i,s,S,m,f),T=Zh(),n!==null&&!ln?($h(n,i,f),fa(n,i,f)):(Se&&T&&Rh(i),i.flags|=1,Rn(n,i,l,f),i.child)}function w0(n,i,s,l,f){if(n===null){var m=s.type;return typeof m=="function"&&!Th(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,C0(n,i,m,l,f)):(n=ou(s.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!Mf(n,f)){var S=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(S,l)&&n.ref===i.ref)return fa(n,i,f)}return i.flags|=1,n=ra(m,l),n.ref=i.ref,n.return=i,i.child=n}function C0(n,i,s,l,f){if(n!==null){var m=n.memoizedProps;if(Ho(m,l)&&n.ref===i.ref)if(ln=!1,i.pendingProps=l=m,Mf(n,f))(n.flags&131072)!==0&&(ln=!0);else return i.lanes=n.lanes,fa(n,i,f)}return mf(n,i,s,l,f)}function R0(n,i,s,l){var f=l.children,m=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,n!==null){for(l=i.child=n.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return D0(n,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&hu(i,m!==null?m.cachePool:null),m!==null?Lg(i,m):Xh(),Ng(i);else return l=i.lanes=536870912,D0(n,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(hu(i,m.cachePool),Lg(i,m),Ja(),i.memoizedState=null):(n!==null&&hu(i,null),Xh(),Ja());return Rn(n,i,f,s),i.child}function el(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function D0(n,i,s,l,f){var m=Bh();return m=m===null?null:{parent:rn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},n!==null&&hu(i,null),Xh(),Ng(i),n!==null&&br(n,i,l,!0),i.childLanes=f,null}function wu(n,i){return i=Ru({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function U0(n,i,s){return Hs(i,n.child,null,s),n=wu(i,i.pendingProps),n.flags|=2,ei(i),i.memoizedState=null,n}function QS(n,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Se){if(l.mode==="hidden")return n=wu(i,l),i.lanes=536870912,el(null,n);if(qh(i),(n=Ye)?(n=k_(n,gi),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Wa!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},s=pg(n),s.return=i,i.child=s,wn=i,Ye=null)):n=null,n===null)throw Ya(i);return i.lanes=536870912,null}return wu(i,l)}var m=n.memoizedState;if(m!==null){var S=m.dehydrated;if(qh(i),f)if(i.flags&256)i.flags&=-257,i=U0(n,i,s);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(ln||br(n,i,s,!1),f=(s&n.childLanes)!==0,ln||f){if(l=We,l!==null&&(S=lr(l,s),S!==0&&S!==m.retryLane))throw m.retryLane=S,Ls(n,S),Zn(l,n,S),pf;Bu(),i=U0(n,i,s)}else n=m.treeContext,Ye=xi(S.nextSibling),wn=i,Se=!0,qa=null,gi=!1,n!==null&&_g(i,n),i=wu(i,l),i.flags|=4096;return i}return n=ra(n.child,{mode:l.mode,children:l.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Cu(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function mf(n,i,s,l,f){return Fs(i),s=jh(n,i,s,l,void 0,f),l=Zh(),n!==null&&!ln?($h(n,i,f),fa(n,i,f)):(Se&&l&&Rh(i),i.flags|=1,Rn(n,i,s,f),i.child)}function L0(n,i,s,l,f,m){return Fs(i),i.updateQueue=null,s=zg(i,l,s,f),Og(n),l=Zh(),n!==null&&!ln?($h(n,i,m),fa(n,i,m)):(Se&&l&&Rh(i),i.flags|=1,Rn(n,i,s,m),i.child)}function N0(n,i,s,l,f){if(Fs(i),i.stateNode===null){var m=vr,S=s.contextType;typeof S=="object"&&S!==null&&(m=Cn(S)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=ff,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Hh(i),S=s.contextType,m.context=typeof S=="object"&&S!==null?Cn(S):vr,m.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(hf(i,s,S,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&ff.enqueueReplaceState(m,m.state,null),$o(i,l,m,f),Zo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){m=i.stateNode;var T=i.memoizedProps,I=Gs(s,T);m.props=I;var tt=m.context,pt=s.contextType;S=vr,typeof pt=="object"&&pt!==null&&(S=Cn(pt));var vt=s.getDerivedStateFromProps;pt=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,pt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||tt!==S)&&v0(i,m,l,S),Za=!1;var ot=i.memoizedState;m.state=ot,$o(i,l,m,f),Zo(),tt=i.memoizedState,T||ot!==tt||Za?(typeof vt=="function"&&(hf(i,s,vt,l),tt=i.memoizedState),(I=Za||x0(i,s,I,l,ot,tt,S))?(pt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=tt),m.props=l,m.state=tt,m.context=S,l=I):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Vh(n,i),S=i.memoizedProps,pt=Gs(s,S),m.props=pt,vt=i.pendingProps,ot=m.context,tt=s.contextType,I=vr,typeof tt=="object"&&tt!==null&&(I=Cn(tt)),T=s.getDerivedStateFromProps,(tt=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==vt||ot!==I)&&v0(i,m,l,I),Za=!1,ot=i.memoizedState,m.state=ot,$o(i,l,m,f),Zo();var ct=i.memoizedState;S!==vt||ot!==ct||Za||n!==null&&n.dependencies!==null&&uu(n.dependencies)?(typeof T=="function"&&(hf(i,s,T,l),ct=i.memoizedState),(pt=Za||x0(i,s,pt,l,ot,ct,I)||n!==null&&n.dependencies!==null&&uu(n.dependencies))?(tt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ct,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ct,I)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===n.memoizedProps&&ot===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&ot===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ct),m.props=l,m.state=ct,m.context=I,l=pt):(typeof m.componentDidUpdate!="function"||S===n.memoizedProps&&ot===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&ot===n.memoizedState||(i.flags|=1024),l=!1)}return m=l,Cu(n,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&l?(i.child=Hs(i,n.child,null,f),i.child=Hs(i,null,s,f)):Rn(n,i,s,f),i.memoizedState=m.state,n=i.child):n=fa(n,i,f),n}function O0(n,i,s,l){return Os(),i.flags|=256,Rn(n,i,s,l),i.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(n){return{baseLanes:n,cachePool:bg()}}function xf(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=ii),n}function z0(n,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,S;if((S=m)||(S=n!==null&&n.memoizedState===null?!1:(nn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,n===null){if(Se){if(f?Qa(i):Ja(),(n=Ye)?(n=k_(n,gi),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Wa!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},s=pg(n),s.return=i,i.child=s,wn=i,Ye=null)):n=null,n===null)throw Ya(i);return td(n)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,f?(Ja(),f=i.mode,T=Ru({mode:"hidden",children:T},f),l=Ns(l,f,s,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=_f(s),l.childLanes=xf(n,S,s),i.memoizedState=gf,el(null,l)):(Qa(i),vf(i,T))}var I=n.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(m)i.flags&256?(Qa(i),i.flags&=-257,i=yf(n,i,s)):i.memoizedState!==null?(Ja(),i.child=n.child,i.flags|=128,i=null):(Ja(),T=l.fallback,f=i.mode,l=Ru({mode:"visible",children:l.children},f),T=Ns(T,f,s,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,Hs(i,n.child,null,s),l=i.child,l.memoizedState=_f(s),l.childLanes=xf(n,S,s),i.memoizedState=gf,i=el(null,l));else if(Qa(i),td(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var tt=S.dgst;S=tt,l=Error(a(419)),l.stack="",l.digest=S,ko({value:l,source:null,stack:null}),i=yf(n,i,s)}else if(ln||br(n,i,s,!1),S=(s&n.childLanes)!==0,ln||S){if(S=We,S!==null&&(l=lr(S,s),l!==0&&l!==I.retryLane))throw I.retryLane=l,Ls(n,l),Zn(S,n,l),pf;Jf(T)||Bu(),i=yf(n,i,s)}else Jf(T)?(i.flags|=192,i.child=n.child,i=null):(n=I.treeContext,Ye=xi(T.nextSibling),wn=i,Se=!0,qa=null,gi=!1,n!==null&&_g(i,n),i=vf(i,l.children),i.flags|=4096);return i}return f?(Ja(),T=l.fallback,f=i.mode,I=n.child,tt=I.sibling,l=ra(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,tt!==null?T=ra(tt,T):(T=Ns(T,f,s,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,el(null,l),l=i.child,T=n.child.memoizedState,T===null?T=_f(s):(f=T.cachePool,f!==null?(I=rn._currentValue,f=f.parent!==I?{parent:I,pool:I}:f):f=bg(),T={baseLanes:T.baseLanes|s,cachePool:f}),l.memoizedState=T,l.childLanes=xf(n,S,s),i.memoizedState=gf,el(n.child,l)):(Qa(i),s=n.child,n=s.sibling,s=ra(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,n!==null&&(S=i.deletions,S===null?(i.deletions=[n],i.flags|=16):S.push(n)),i.child=s,i.memoizedState=null,s)}function vf(n,i){return i=Ru({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Ru(n,i){return n=Jn(22,n,null,i),n.lanes=0,n}function yf(n,i,s){return Hs(i,n.child,null,s),n=vf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function F0(n,i,s){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Oh(n.return,i,s)}function Sf(n,i,s,l,f,m){var S=n.memoizedState;S===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=m)}function P0(n,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var S=nn.current,T=(S&2)!==0;if(T?(S=S&1|2,i.flags|=128):S&=1,xt(nn,S),Rn(n,i,l,s),l=Se?Go:0,!T&&n!==null&&(n.flags&128)!==0)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&F0(n,s,i);else if(n.tag===19)F0(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)n=s.alternate,n!==null&&_u(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Sf(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&_u(n)===null){i.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}Sf(i,!0,s,null,m,l);break;case"together":Sf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function fa(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),ns|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(br(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,s=ra(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=ra(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function Mf(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&uu(n)))}function JS(n,i,s){switch(i.tag){case 3:Ot(i,i.stateNode.containerInfo),ja(i,rn,n.memoizedState.cache),Os();break;case 27:case 5:Ht(i);break;case 4:Ot(i,i.stateNode.containerInfo);break;case 10:ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,qh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?z0(n,i,s):(Qa(i),n=fa(n,i,s),n!==null?n.sibling:null);Qa(i);break;case 19:var f=(n.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(br(n,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return P0(n,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xt(nn,nn.current),l)break;return null;case 22:return i.lanes=0,R0(n,i,s,i.pendingProps);case 24:ja(i,rn,n.memoizedState.cache)}return fa(n,i,s)}function B0(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)ln=!0;else{if(!Mf(n,s)&&(i.flags&128)===0)return ln=!1,JS(n,i,s);ln=(n.flags&131072)!==0}else ln=!1,Se&&(i.flags&1048576)!==0&&gg(i,Go,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(n=Bs(i.elementType),i.type=n,typeof n=="function")Th(n)?(l=Gs(n,l),i.tag=1,i=N0(null,i,n,l,s)):(i.tag=0,i=mf(null,i,n,l,s));else{if(n!=null){var f=n.$$typeof;if(f===N){i.tag=11,i=T0(null,i,n,l,s);break t}else if(f===U){i.tag=14,i=w0(null,i,n,l,s);break t}}throw i=ft(n)||n,Error(a(306,i,""))}}return i;case 0:return mf(n,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Gs(l,i.pendingProps),N0(n,i,l,f,s);case 3:t:{if(Ot(i,i.stateNode.containerInfo),n===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Vh(n,i),$o(i,l,null,s);var S=i.memoizedState;if(l=S.cache,ja(i,rn,l),l!==m.cache&&zh(i,[rn],s,!0),Zo(),l=S.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=O0(n,i,l,s);break t}else if(l!==f){f=di(Error(a(424)),i),ko(f),i=O0(n,i,l,s);break t}else for(n=i.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Ye=xi(n.firstChild),wn=i,Se=!0,qa=null,gi=!0,s=Rg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Os(),l===f){i=fa(n,i,s);break t}Rn(n,i,l,s)}i=i.child}return i;case 26:return Cu(n,i),n===null?(s=Z_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Se||(s=i.type,n=i.pendingProps,l=Wu(it.current).createElement(s),l[sn]=i,l[Sn]=n,Dn(l,s,n),w(l),i.stateNode=l):i.memoizedState=Z_(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Ht(i),n===null&&Se&&(l=i.stateNode=q_(i.type,i.pendingProps,it.current),wn=i,gi=!0,f=Ye,os(i.type)?(ed=f,Ye=xi(l.firstChild)):Ye=f),Rn(n,i,i.pendingProps.children,s),Cu(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Se&&((f=l=Ye)&&(l=RM(l,i.type,i.pendingProps,gi),l!==null?(i.stateNode=l,wn=i,Ye=xi(l.firstChild),gi=!1,f=!0):f=!1),f||Ya(i)),Ht(i),f=i.type,m=i.pendingProps,S=n!==null?n.memoizedProps:null,l=m.children,$f(f,m)?l=null:S!==null&&$f(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=jh(n,i,XS,null,null,s),gl._currentValue=f),Cu(n,i),Rn(n,i,l,s),i.child;case 6:return n===null&&Se&&((n=s=Ye)&&(s=DM(s,i.pendingProps,gi),s!==null?(i.stateNode=s,wn=i,Ye=null,n=!0):n=!1),n||Ya(i)),null;case 13:return z0(n,i,s);case 4:return Ot(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=Hs(i,null,l,s):Rn(n,i,l,s),i.child;case 11:return T0(n,i,i.type,i.pendingProps,s);case 7:return Rn(n,i,i.pendingProps,s),i.child;case 8:return Rn(n,i,i.pendingProps.children,s),i.child;case 12:return Rn(n,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ja(i,i.type,l.value),Rn(n,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Fs(i),f=Cn(f),l=l(f),i.flags|=1,Rn(n,i,l,s),i.child;case 14:return w0(n,i,i.type,i.pendingProps,s);case 15:return C0(n,i,i.type,i.pendingProps,s);case 19:return P0(n,i,s);case 31:return QS(n,i,s);case 22:return R0(n,i,s,i.pendingProps);case 24:return Fs(i),l=Cn(rn),n===null?(f=Bh(),f===null&&(f=We,m=Fh(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},Hh(i),ja(i,rn,f)):((n.lanes&s)!==0&&(Vh(n,i),$o(i,null,null,s),Zo()),f=n.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ja(i,rn,l)):(l=m.cache,ja(i,rn,l),l!==f.cache&&zh(i,[rn],s,!0))),Rn(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function da(n){n.flags|=4}function bf(n,i,s,l,f){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(f&335544128)===f)if(n.stateNode.complete)n.flags|=8192;else if(h_())n.flags|=8192;else throw Is=du,Ih}else n.flags&=-16777217}function I0(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!tx(i))if(h_())n.flags|=8192;else throw Is=du,Ih}function Du(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Ee():536870912,n.lanes|=i,zr|=i)}function nl(n,i){if(!Se)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function je(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,l=0;if(i)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=s,i}function tM(n,i,s){var l=i.pendingProps;switch(Dh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return s=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ua(rn),Gt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Mr(i)?da(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Lh())),je(i),null;case 26:var f=i.type,m=i.memoizedState;return n===null?(da(i),m!==null?(je(i),I0(i,m)):(je(i),bf(i,f,null,l,s))):m?m!==n.memoizedState?(da(i),je(i),I0(i,m)):(je(i),i.flags&=-16777217):(n=n.memoizedProps,n!==l&&da(i),je(i),bf(i,f,n,l,s)),null;case 27:if(pe(i),s=it.current,f=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}n=Rt.current,Mr(i)?xg(i):(n=q_(f,l,s),i.stateNode=n,da(i))}return je(i),null;case 5:if(pe(i),f=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(m=Rt.current,Mr(i))xg(i);else{var S=Wu(it.current);switch(m){case 1:m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=S.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}m[sn]=i,m[Sn]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)m.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=m;t:switch(Dn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&da(i)}}return je(i),bf(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,s),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&da(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(n=it.current,Mr(i)){if(n=i.stateNode,s=i.memoizedProps,l=null,f=wn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[sn]=i,n=!!(n.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||z_(n.nodeValue,s)),n||Ya(i,!0)}else n=Wu(n).createTextNode(l),n[sn]=i,i.stateNode=n}return je(i),null;case 31:if(s=i.memoizedState,n===null||n.memoizedState!==null){if(l=Mr(i),s!==null){if(n===null){if(!l)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[sn]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),n=!1}else s=Lh(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),n=!0;if(!n)return i.flags&256?(ei(i),i):(ei(i),null);if((i.flags&128)!==0)throw Error(a(558))}return je(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Mr(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[sn]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),f=!1}else f=Lh(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ei(i),i):(ei(i),null)}return ei(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,n=n!==null&&n.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==n&&s&&(i.child.flags|=8192),Du(i,i.updateQueue),je(i),null);case 4:return Gt(),n===null&&Wf(i.stateNode.containerInfo),je(i),null;case 10:return ua(i.type),je(i),null;case 19:if(nt(nn),l=i.memoizedState,l===null)return je(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)nl(l,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=_u(n),m!==null){for(i.flags|=128,nl(l,!1),n=m.updateQueue,i.updateQueue=n,Du(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)dg(s,n),s=s.sibling;return xt(nn,nn.current&1|2),Se&&oa(i,l.treeForkCount),i.child}n=n.sibling}l.tail!==null&&A()>zu&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304)}else{if(!f)if(n=_u(m),n!==null){if(i.flags|=128,f=!0,n=n.updateQueue,i.updateQueue=n,Du(i,n),nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Se)return je(i),null}else 2*A()-l.renderingStartTime>zu&&s!==536870912&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(n=l.last,n!==null?n.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=A(),n.sibling=null,s=nn.current,xt(nn,f?s&1|2:s&1),Se&&oa(i,l.treeForkCount),n):(je(i),null);case 22:case 23:return ei(i),Wh(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),s=i.updateQueue,s!==null&&Du(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),n!==null&&nt(Ps),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ua(rn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function eM(n,i){switch(Dh(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ua(rn),Gt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return pe(i),null;case 31:if(i.memoizedState!==null){if(ei(i),i.alternate===null)throw Error(a(340));Os()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(ei(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Os()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return nt(nn),null;case 4:return Gt(),null;case 10:return ua(i.type),null;case 22:case 23:return ei(i),Wh(),n!==null&&nt(Ps),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ua(rn),null;case 25:return null;default:return null}}function H0(n,i){switch(Dh(i),i.tag){case 3:ua(rn),Gt();break;case 26:case 27:case 5:pe(i);break;case 4:Gt();break;case 31:i.memoizedState!==null&&ei(i);break;case 13:ei(i);break;case 19:nt(nn);break;case 10:ua(i.type);break;case 22:case 23:ei(i),Wh(),n!==null&&nt(Ps);break;case 24:ua(rn)}}function il(n,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&n)===n){l=void 0;var m=s.create,S=s.inst;l=m(),S.destroy=l}s=s.next}while(s!==f)}}catch(T){Be(i,i.return,T)}}function ts(n,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&n)===n){var S=l.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,f=i;var I=s,tt=T;try{tt()}catch(pt){Be(f,I,pt)}}}l=l.next}while(l!==m)}}catch(pt){Be(i,i.return,pt)}}function V0(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{Ug(i,s)}catch(l){Be(n,n.return,l)}}}function G0(n,i,s){s.props=Gs(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(l){Be(n,i,l)}}function al(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(f){Be(n,i,f)}}function Wi(n,i){var s=n.ref,l=n.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Be(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Be(n,i,f)}else s.current=null}function k0(n){var i=n.type,s=n.memoizedProps,l=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Be(n,n.return,f)}}function Ef(n,i,s){try{var l=n.stateNode;bM(l,n.type,s,i),l[Sn]=i}catch(f){Be(n,n.return,f)}}function X0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&os(n.type)||n.tag===4}function Af(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||X0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&os(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tf(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=aa));else if(l!==4&&(l===27&&os(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(Tf(n,i,s),n=n.sibling;n!==null;)Tf(n,i,s),n=n.sibling}function Uu(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(l!==4&&(l===27&&os(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Uu(n,i,s),n=n.sibling;n!==null;)Uu(n,i,s),n=n.sibling}function W0(n){var i=n.stateNode,s=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Dn(i,l,s),i[sn]=n,i[Sn]=s}catch(m){Be(n,n.return,m)}}var pa=!1,un=!1,wf=!1,q0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function nM(n,i){if(n=n.containerInfo,jf=Qu,n=ag(n),vh(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var S=0,T=-1,I=-1,tt=0,pt=0,vt=n,ot=null;e:for(;;){for(var ct;vt!==s||f!==0&&vt.nodeType!==3||(T=S+f),vt!==m||l!==0&&vt.nodeType!==3||(I=S+l),vt.nodeType===3&&(S+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)ot=vt,vt=ct;for(;;){if(vt===n)break e;if(ot===s&&++tt===f&&(T=S),ot===m&&++pt===l&&(I=S),(ct=vt.nextSibling)!==null)break;vt=ot,ot=vt.parentNode}vt=ct}s=T===-1||I===-1?null:{start:T,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zf={focusedElem:n,selectionRange:s},Qu=!1,xn=i;xn!==null;)if(i=xn,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,xn=n;else for(;xn!==null;){switch(i=xn,m=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(s=0;s<n.length;s++)f=n[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var Wt=Gs(s.type,f);n=l.getSnapshotBeforeUpdate(Wt,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(ne){Be(s,s.return,ne)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)Qf(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Qf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,xn=n;break}xn=i.return}}function Y0(n,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ga(n,s),l&4&&il(5,s);break;case 1:if(ga(n,s),l&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(S){Be(s,s.return,S)}else{var f=Gs(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(S){Be(s,s.return,S)}}l&64&&V0(s),l&512&&al(s,s.return);break;case 3:if(ga(n,s),l&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Ug(n,i)}catch(S){Be(s,s.return,S)}}break;case 27:i===null&&l&4&&W0(s);case 26:case 5:ga(n,s),i===null&&l&4&&k0(s),l&512&&al(s,s.return);break;case 12:ga(n,s);break;case 31:ga(n,s),l&4&&$0(n,s);break;case 13:ga(n,s),l&4&&K0(n,s),l&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=hM.bind(null,s),UM(n,s))));break;case 22:if(l=s.memoizedState!==null||pa,!l){i=i!==null&&i.memoizedState!==null||un,f=pa;var m=un;pa=l,(un=i)&&!m?_a(n,s,(s.subtreeFlags&8772)!==0):ga(n,s),pa=f,un=m}break;case 30:break;default:ga(n,s)}}function j0(n){var i=n.alternate;i!==null&&(n.alternate=null,j0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Lo(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Qe=null,Wn=!1;function ma(n,i,s){for(s=s.child;s!==null;)Z0(n,i,s),s=s.sibling}function Z0(n,i,s){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(st,s)}catch{}switch(s.tag){case 26:un||Wi(s,i),ma(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:un||Wi(s,i);var l=Qe,f=Wn;os(s.type)&&(Qe=s.stateNode,Wn=!1),ma(n,i,s),dl(s.stateNode),Qe=l,Wn=f;break;case 5:un||Wi(s,i);case 6:if(l=Qe,f=Wn,Qe=null,ma(n,i,s),Qe=l,Wn=f,Qe!==null)if(Wn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(s.stateNode)}catch(m){Be(s,i,m)}else try{Qe.removeChild(s.stateNode)}catch(m){Be(s,i,m)}break;case 18:Qe!==null&&(Wn?(n=Qe,V_(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),kr(n)):V_(Qe,s.stateNode));break;case 4:l=Qe,f=Wn,Qe=s.stateNode.containerInfo,Wn=!0,ma(n,i,s),Qe=l,Wn=f;break;case 0:case 11:case 14:case 15:ts(2,s,i),un||ts(4,s,i),ma(n,i,s);break;case 1:un||(Wi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&G0(s,i,l)),ma(n,i,s);break;case 21:ma(n,i,s);break;case 22:un=(l=un)||s.memoizedState!==null,ma(n,i,s),un=l;break;default:ma(n,i,s)}}function $0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{kr(n)}catch(s){Be(i,i.return,s)}}}function K0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{kr(n)}catch(s){Be(i,i.return,s)}}function iM(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new q0),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new q0),i;default:throw Error(a(435,n.tag))}}function Lu(n,i){var s=iM(n);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=fM.bind(null,n,l);l.then(f,f)}})}function qn(n,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=n,S=i,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(os(T.type)){Qe=T.stateNode,Wn=!1;break t}break;case 5:Qe=T.stateNode,Wn=!1;break t;case 3:case 4:Qe=T.stateNode.containerInfo,Wn=!0;break t}T=T.return}if(Qe===null)throw Error(a(160));Z0(m,S,f),Qe=null,Wn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Q0(i,n),i=i.sibling}var Ri=null;function Q0(n,i){var s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:qn(i,n),Yn(n),l&4&&(ts(3,n,n.return),il(3,n),ts(5,n,n.return));break;case 1:qn(i,n),Yn(n),l&512&&(un||s===null||Wi(s,s.return)),l&64&&pa&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ri;if(qn(i,n),Yn(n),l&512&&(un||s===null||Wi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=n.memoizedState,s===null)if(l===null)if(n.stateNode===null){t:{l=n.type,s=n.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[ws]||m[sn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),Dn(m,l,s),m[sn]=n,w(m),l=m;break t;case"link":var S=Q_("link","href",f).get(l+(s.href||""));if(S){for(var T=0;T<S.length;T++)if(m=S[T],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(T,1);break e}}m=f.createElement(l),Dn(m,l,s),f.head.appendChild(m);break;case"meta":if(S=Q_("meta","content",f).get(l+(s.content||""))){for(T=0;T<S.length;T++)if(m=S[T],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(T,1);break e}}m=f.createElement(l),Dn(m,l,s),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[sn]=n,w(m),l=m}n.stateNode=l}else J_(f,n.type,n.stateNode);else n.stateNode=K_(f,l,n.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?J_(f,n.type,n.stateNode):K_(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Ef(n,n.memoizedProps,s.memoizedProps)}break;case 27:qn(i,n),Yn(n),l&512&&(un||s===null||Wi(s,s.return)),s!==null&&l&4&&Ef(n,n.memoizedProps,s.memoizedProps);break;case 5:if(qn(i,n),Yn(n),l&512&&(un||s===null||Wi(s,s.return)),n.flags&32){f=n.stateNode;try{dn(f,"")}catch(Wt){Be(n,n.return,Wt)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,Ef(n,f,s!==null?s.memoizedProps:f)),l&1024&&(wf=!0);break;case 6:if(qn(i,n),Yn(n),l&4){if(n.stateNode===null)throw Error(a(162));l=n.memoizedProps,s=n.stateNode;try{s.nodeValue=l}catch(Wt){Be(n,n.return,Wt)}}break;case 3:if(ju=null,f=Ri,Ri=qu(i.containerInfo),qn(i,n),Ri=f,Yn(n),l&4&&s!==null&&s.memoizedState.isDehydrated)try{kr(i.containerInfo)}catch(Wt){Be(n,n.return,Wt)}wf&&(wf=!1,J0(n));break;case 4:l=Ri,Ri=qu(n.stateNode.containerInfo),qn(i,n),Yn(n),Ri=l;break;case 12:qn(i,n),Yn(n);break;case 31:qn(i,n),Yn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Lu(n,l)));break;case 13:qn(i,n),Yn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ou=A()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Lu(n,l)));break;case 22:f=n.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,tt=pa,pt=un;if(pa=tt||f,un=pt||I,qn(i,n),un=pt,pa=tt,Yn(n),l&8192)t:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||I||pa||un||ks(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(m=I.stateNode,f)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=I.stateNode;var vt=I.memoizedProps.style,ot=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;T.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Wt){Be(I,I.return,Wt)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(Wt){Be(I,I.return,Wt)}}}else if(i.tag===18){if(s===null){I=i;try{var ct=I.stateNode;f?G_(ct,!0):G_(I.stateNode,!1)}catch(Wt){Be(I,I.return,Wt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Lu(n,s))));break;case 19:qn(i,n),Yn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Lu(n,l)));break;case 30:break;case 21:break;default:qn(i,n),Yn(n)}}function Yn(n){var i=n.flags;if(i&2){try{for(var s,l=n.return;l!==null;){if(X0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,m=Af(n);Uu(n,m,f);break;case 5:var S=s.stateNode;s.flags&32&&(dn(S,""),s.flags&=-33);var T=Af(n);Uu(n,T,S);break;case 3:case 4:var I=s.stateNode.containerInfo,tt=Af(n);Tf(n,tt,I);break;default:throw Error(a(161))}}catch(pt){Be(n,n.return,pt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function J0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;J0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function ga(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Y0(n,i.alternate,i),i=i.sibling}function ks(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:ts(4,i,i.return),ks(i);break;case 1:Wi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&G0(i,i.return,s),ks(i);break;case 27:dl(i.stateNode);case 26:case 5:Wi(i,i.return),ks(i);break;case 22:i.memoizedState===null&&ks(i);break;case 30:ks(i);break;default:ks(i)}n=n.sibling}}function _a(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,m=i,S=m.flags;switch(m.tag){case 0:case 11:case 15:_a(f,m,s),il(4,m);break;case 1:if(_a(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(tt){Be(l,l.return,tt)}if(l=m,f=l.updateQueue,f!==null){var T=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Dg(I[f],T)}catch(tt){Be(l,l.return,tt)}}s&&S&64&&V0(m),al(m,m.return);break;case 27:W0(m);case 26:case 5:_a(f,m,s),s&&l===null&&S&4&&k0(m),al(m,m.return);break;case 12:_a(f,m,s);break;case 31:_a(f,m,s),s&&S&4&&$0(f,m);break;case 13:_a(f,m,s),s&&S&4&&K0(f,m);break;case 22:m.memoizedState===null&&_a(f,m,s),al(m,m.return);break;case 30:break;default:_a(f,m,s)}i=i.sibling}}function Cf(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Xo(s))}function Rf(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Xo(n))}function Di(n,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)t_(n,i,s,l),i=i.sibling}function t_(n,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Di(n,i,s,l),f&2048&&il(9,i);break;case 1:Di(n,i,s,l);break;case 3:Di(n,i,s,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Xo(n)));break;case 12:if(f&2048){Di(n,i,s,l),n=i.stateNode;try{var m=i.memoizedProps,S=m.id,T=m.onPostCommit;typeof T=="function"&&T(S,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){Be(i,i.return,I)}}else Di(n,i,s,l);break;case 31:Di(n,i,s,l);break;case 13:Di(n,i,s,l);break;case 23:break;case 22:m=i.stateNode,S=i.alternate,i.memoizedState!==null?m._visibility&2?Di(n,i,s,l):sl(n,i):m._visibility&2?Di(n,i,s,l):(m._visibility|=2,Lr(n,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Cf(S,i);break;case 24:Di(n,i,s,l),f&2048&&Rf(i.alternate,i);break;default:Di(n,i,s,l)}}function Lr(n,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=n,S=i,T=s,I=l,tt=S.flags;switch(S.tag){case 0:case 11:case 15:Lr(m,S,T,I,f),il(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?Lr(m,S,T,I,f):sl(m,S):(pt._visibility|=2,Lr(m,S,T,I,f)),f&&tt&2048&&Cf(S.alternate,S);break;case 24:Lr(m,S,T,I,f),f&&tt&2048&&Rf(S.alternate,S);break;default:Lr(m,S,T,I,f)}i=i.sibling}}function sl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,l=i,f=l.flags;switch(l.tag){case 22:sl(s,l),f&2048&&Cf(l.alternate,l);break;case 24:sl(s,l),f&2048&&Rf(l.alternate,l);break;default:sl(s,l)}i=i.sibling}}var rl=8192;function Nr(n,i,s){if(n.subtreeFlags&rl)for(n=n.child;n!==null;)e_(n,i,s),n=n.sibling}function e_(n,i,s){switch(n.tag){case 26:Nr(n,i,s),n.flags&rl&&n.memoizedState!==null&&kM(s,Ri,n.memoizedState,n.memoizedProps);break;case 5:Nr(n,i,s);break;case 3:case 4:var l=Ri;Ri=qu(n.stateNode.containerInfo),Nr(n,i,s),Ri=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,Nr(n,i,s),rl=l):Nr(n,i,s));break;default:Nr(n,i,s)}}function n_(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function ol(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];xn=l,a_(l,n)}n_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)i_(n),n=n.sibling}function i_(n){switch(n.tag){case 0:case 11:case 15:ol(n),n.flags&2048&&ts(9,n,n.return);break;case 3:ol(n);break;case 12:ol(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Nu(n)):ol(n);break;default:ol(n)}}function Nu(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];xn=l,a_(l,n)}n_(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:ts(8,i,i.return),Nu(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Nu(i));break;default:Nu(i)}n=n.sibling}}function a_(n,i){for(;xn!==null;){var s=xn;switch(s.tag){case 0:case 11:case 15:ts(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,xn=l;else t:for(s=n;xn!==null;){l=xn;var f=l.sibling,m=l.return;if(j0(l),l===s){xn=null;break t}if(f!==null){f.return=m,xn=f;break t}xn=m}}}var aM={getCacheForType:function(n){var i=Cn(rn),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s},cacheSignal:function(){return Cn(rn).controller.signal}},sM=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,_e=null,ve=0,Pe=0,ni=null,es=!1,Or=!1,Df=!1,xa=0,tn=0,ns=0,Xs=0,Uf=0,ii=0,zr=0,ll=null,jn=null,Lf=!1,Ou=0,s_=0,zu=1/0,Fu=null,is=null,pn=0,as=null,Fr=null,va=0,Nf=0,Of=null,r_=null,ul=0,zf=null;function ai(){return(Ne&2)!==0&&ve!==0?ve&-ve:P.T!==null?Vf():Do()}function o_(){if(ii===0)if((ve&536870912)===0||Se){var n=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ii=n}else ii=536870912;return n=ti.current,n!==null&&(n.flags|=32),ii}function Zn(n,i,s){(n===We&&(Pe===2||Pe===9)||n.cancelPendingCommit!==null)&&(Pr(n,0),ss(n,ve,ii,!1)),Ln(n,s),((Ne&2)===0||n!==We)&&(n===We&&((Ne&2)===0&&(Xs|=s),tn===4&&ss(n,ve,ii,!1)),qi(n))}function l_(n,i,s){if((Ne&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&n.expiredLanes)===0||Ct(n,i),f=l?lM(n,i):Pf(n,i,!0),m=l;do{if(f===0){Or&&!l&&ss(n,i,0,!1);break}else{if(s=n.current.alternate,m&&!rM(s)){f=Pf(n,i,!1),m=!1;continue}if(f===2){if(m=i,n.errorRecoveryDisabledLanes&m)var S=0;else S=n.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var T=n;f=ll;var I=T.current.memoizedState.isDehydrated;if(I&&(Pr(T,S).flags|=256),S=Pf(T,S,!1),S!==2){if(Df&&!I){T.errorRecoveryDisabledLanes|=m,Xs|=m,f=4;break t}m=jn,jn=f,m!==null&&(jn===null?jn=m:jn.push.apply(jn,m))}f=S}if(m=!1,f!==2)continue}}if(f===1){Pr(n,0),ss(n,i,0,!0);break}t:{switch(l=n,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ss(l,i,ii,!es);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Ou+300-A(),10<f)){if(ss(l,i,ii,!es),_t(l,0,!0)!==0)break t;va=i,l.timeoutHandle=I_(u_.bind(null,l,s,jn,Fu,Lf,i,ii,Xs,zr,es,m,"Throttled",-0,0),f);break t}u_(l,s,jn,Fu,Lf,i,ii,Xs,zr,es,m,null,-0,0)}}break}while(!0);qi(n)}function u_(n,i,s,l,f,m,S,T,I,tt,pt,vt,ot,ct){if(n.timeoutHandle=-1,vt=i.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},e_(i,m,vt);var Wt=(m&62914560)===m?Ou-A():(m&4194048)===m?s_-A():0;if(Wt=XM(vt,Wt),Wt!==null){va=m,n.cancelPendingCommit=Wt(__.bind(null,n,i,m,s,l,f,S,T,I,pt,vt,null,ot,ct)),ss(n,m,S,!tt);return}}__(n,i,m,s,l,f,S,T,I)}function rM(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Qn(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ss(n,i,s,l){i&=~Uf,i&=~Xs,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var m=31-Dt(f),S=1<<m;l[m]=-1,f&=~S}s!==0&&jl(n,s,i)}function Pu(){return(Ne&6)===0?(cl(0),!1):!0}function Ff(){if(_e!==null){if(Pe===0)var n=_e.return;else n=_e,la=zs=null,Kh(n),wr=null,qo=0,n=_e;for(;n!==null;)H0(n.alternate,n),n=n.return;_e=null}}function Pr(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,TM(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),va=0,Ff(),We=n,_e=s=ra(n.current,null),ve=i,Pe=0,ni=null,es=!1,Or=Ct(n,i),Df=!1,zr=ii=Uf=Xs=ns=tn=0,jn=ll=null,Lf=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-Dt(l),m=1<<f;i|=n[f],l&=~m}return xa=i,au(),s}function c_(n,i){le=null,P.H=tl,i===Tr||i===fu?(i=Tg(),Pe=3):i===Ih?(i=Tg(),Pe=4):Pe=i===pf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ni=i,_e===null&&(tn=1,Tu(n,di(i,n.current)))}function h_(){var n=ti.current;return n===null?!0:(ve&4194048)===ve?_i===null:(ve&62914560)===ve||(ve&536870912)!==0?n===_i:!1}function f_(){var n=P.H;return P.H=tl,n===null?tl:n}function d_(){var n=P.A;return P.A=aM,n}function Bu(){tn=4,es||(ve&4194048)!==ve&&ti.current!==null||(Or=!0),(ns&134217727)===0&&(Xs&134217727)===0||We===null||ss(We,ve,ii,!1)}function Pf(n,i,s){var l=Ne;Ne|=2;var f=f_(),m=d_();(We!==n||ve!==i)&&(Fu=null,Pr(n,i)),i=!1;var S=tn;t:do try{if(Pe!==0&&_e!==null){var T=_e,I=ni;switch(Pe){case 8:Ff(),S=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(i=!0);var tt=Pe;if(Pe=0,ni=null,Br(n,T,I,tt),s&&Or){S=0;break t}break;default:tt=Pe,Pe=0,ni=null,Br(n,T,I,tt)}}oM(),S=tn;break}catch(pt){c_(n,pt)}while(!0);return i&&n.shellSuspendCounter++,la=zs=null,Ne=l,P.H=f,P.A=m,_e===null&&(We=null,ve=0,au()),S}function oM(){for(;_e!==null;)p_(_e)}function lM(n,i){var s=Ne;Ne|=2;var l=f_(),f=d_();We!==n||ve!==i?(Fu=null,zu=A()+500,Pr(n,i)):Or=Ct(n,i);t:do try{if(Pe!==0&&_e!==null){i=_e;var m=ni;e:switch(Pe){case 1:Pe=0,ni=null,Br(n,i,m,1);break;case 2:case 9:if(Eg(m)){Pe=0,ni=null,m_(i);break}i=function(){Pe!==2&&Pe!==9||We!==n||(Pe=7),qi(n)},m.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Eg(m)?(Pe=0,ni=null,m_(i)):(Pe=0,ni=null,Br(n,i,m,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var T=_e;if(S?tx(S):T.stateNode.complete){Pe=0,ni=null;var I=T.sibling;if(I!==null)_e=I;else{var tt=T.return;tt!==null?(_e=tt,Iu(tt)):_e=null}break e}}Pe=0,ni=null,Br(n,i,m,5);break;case 6:Pe=0,ni=null,Br(n,i,m,6);break;case 8:Ff(),tn=6;break t;default:throw Error(a(462))}}uM();break}catch(pt){c_(n,pt)}while(!0);return la=zs=null,P.H=l,P.A=f,Ne=s,_e!==null?0:(We=null,ve=0,au(),tn)}function uM(){for(;_e!==null&&!qt();)p_(_e)}function p_(n){var i=B0(n.alternate,n,xa);n.memoizedProps=n.pendingProps,i===null?Iu(n):_e=i}function m_(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=L0(s,i,i.pendingProps,i.type,void 0,ve);break;case 11:i=L0(s,i,i.pendingProps,i.type.render,i.ref,ve);break;case 5:Kh(i);default:H0(s,i),i=_e=dg(i,xa),i=B0(s,i,xa)}n.memoizedProps=n.pendingProps,i===null?Iu(n):_e=i}function Br(n,i,s,l){la=zs=null,Kh(i),wr=null,qo=0;var f=i.return;try{if(KS(n,f,i,s,ve)){tn=1,Tu(n,di(s,n.current)),_e=null;return}}catch(m){if(f!==null)throw _e=f,m;tn=1,Tu(n,di(s,n.current)),_e=null;return}i.flags&32768?(Se||l===1?n=!0:Or||(ve&536870912)!==0?n=!1:(es=n=!0,(l===2||l===9||l===3||l===6)&&(l=ti.current,l!==null&&l.tag===13&&(l.flags|=16384))),g_(i,n)):Iu(i)}function Iu(n){var i=n;do{if((i.flags&32768)!==0){g_(i,es);return}n=i.return;var s=tM(i.alternate,i,xa);if(s!==null){_e=s;return}if(i=i.sibling,i!==null){_e=i;return}_e=i=n}while(i!==null);tn===0&&(tn=5)}function g_(n,i){do{var s=eM(n.alternate,n);if(s!==null){s.flags&=32767,_e=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){_e=n;return}_e=n=s}while(n!==null);tn=6,_e=null}function __(n,i,s,l,f,m,S,T,I){n.cancelPendingCommit=null;do Hu();while(pn!==0);if((Ne&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Eh,Ai(n,s,m,S,T,I),n===We&&(_e=We=null,ve=0),Fr=i,as=n,va=s,Nf=m,Of=f,r_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,dM(ht,function(){return M_(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=H.p,H.p=2,S=Ne,Ne|=4;try{nM(n,i,s)}finally{Ne=S,H.p=f,P.T=l}}pn=1,x_(),v_(),y_()}}function x_(){if(pn===1){pn=0;var n=as,i=Fr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var l=H.p;H.p=2;var f=Ne;Ne|=4;try{Q0(i,n);var m=Zf,S=ag(n.containerInfo),T=m.focusedElem,I=m.selectionRange;if(S!==T&&T&&T.ownerDocument&&ig(T.ownerDocument.documentElement,T)){if(I!==null&&vh(T)){var tt=I.start,pt=I.end;if(pt===void 0&&(pt=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(pt,T.value.length);else{var vt=T.ownerDocument||document,ot=vt&&vt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),Wt=T.textContent.length,ne=Math.min(I.start,Wt),ke=I.end===void 0?ne:Math.min(I.end,Wt);!ct.extend&&ne>ke&&(S=ke,ke=ne,ne=S);var j=ng(T,ne),X=ng(T,ke);if(j&&X&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var J=vt.createRange();J.setStart(j.node,j.offset),ct.removeAllRanges(),ne>ke?(ct.addRange(J),ct.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),ct.addRange(J))}}}}for(vt=[],ct=T;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<vt.length;T++){var gt=vt[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Qu=!!jf,Zf=jf=null}finally{Ne=f,H.p=l,P.T=s}}n.current=i,pn=2}}function v_(){if(pn===2){pn=0;var n=as,i=Fr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var l=H.p;H.p=2;var f=Ne;Ne|=4;try{Y0(n,i.alternate,i)}finally{Ne=f,H.p=l,P.T=s}}pn=3}}function y_(){if(pn===4||pn===3){pn=0,O();var n=as,i=Fr,s=va,l=r_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?pn=5:(pn=0,Fr=as=null,S_(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(is=null),ur(s),i=i.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(st,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,f=H.p,H.p=2,P.T=null;try{for(var m=n.onRecoverableError,S=0;S<l.length;S++){var T=l[S];m(T.value,{componentStack:T.stack})}}finally{P.T=i,H.p=f}}(va&3)!==0&&Hu(),qi(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===zf?ul++:(ul=0,zf=n):ul=0,cl(0)}}function S_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Xo(i)))}function Hu(){return x_(),v_(),y_(),M_()}function M_(){if(pn!==5)return!1;var n=as,i=Nf;Nf=0;var s=ur(va),l=P.T,f=H.p;try{H.p=32>s?32:s,P.T=null,s=Of,Of=null;var m=as,S=va;if(pn=0,Fr=as=null,va=0,(Ne&6)!==0)throw Error(a(331));var T=Ne;if(Ne|=4,i_(m.current),t_(m,m.current,S,s),Ne=T,cl(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(st,m)}catch{}return!0}finally{H.p=f,P.T=l,S_(n,i)}}function b_(n,i,s){i=di(s,i),i=df(n.stateNode,i,2),n=Ka(n,i,2),n!==null&&(Ln(n,2),qi(n))}function Be(n,i,s){if(n.tag===3)b_(n,n,s);else for(;i!==null;){if(i.tag===3){b_(i,n,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(is===null||!is.has(l))){n=di(s,n),s=E0(2),l=Ka(i,s,2),l!==null&&(A0(s,l,i,n),Ln(l,2),qi(l));break}}i=i.return}}function Bf(n,i,s){var l=n.pingCache;if(l===null){l=n.pingCache=new sM;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Df=!0,f.add(s),n=cM.bind(null,n,i,s),i.then(n,n))}function cM(n,i,s){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,We===n&&(ve&s)===s&&(tn===4||tn===3&&(ve&62914560)===ve&&300>A()-Ou?(Ne&2)===0&&Pr(n,0):Uf|=s,zr===ve&&(zr=0)),qi(n)}function E_(n,i){i===0&&(i=Ee()),n=Ls(n,i),n!==null&&(Ln(n,i),qi(n))}function hM(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),E_(n,s)}function fM(n,i){var s=0;switch(n.tag){case 31:case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),E_(n,s)}function dM(n,i){return fe(n,i)}var Vu=null,Ir=null,If=!1,Gu=!1,Hf=!1,rs=0;function qi(n){n!==Ir&&n.next===null&&(Ir===null?Vu=Ir=n:Ir=Ir.next=n),Gu=!0,If||(If=!0,mM())}function cl(n,i){if(!Hf&&Gu){Hf=!0;do for(var s=!1,l=Vu;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var S=l.suspendedLanes,T=l.pingedLanes;m=(1<<31-Dt(42|n)+1)-1,m&=f&~(S&~T),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,C_(l,m))}else m=ve,m=_t(l,l===We?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ct(l,m)||(s=!0,C_(l,m));l=l.next}while(s);Hf=!1}}function pM(){A_()}function A_(){Gu=If=!1;var n=0;rs!==0&&AM()&&(n=rs);for(var i=A(),s=null,l=Vu;l!==null;){var f=l.next,m=T_(l,i);m===0?(l.next=null,s===null?Vu=f:s.next=f,f===null&&(Ir=s)):(s=l,(n!==0||(m&3)!==0)&&(Gu=!0)),l=f}pn!==0&&pn!==5||cl(n),rs!==0&&(rs=0)}function T_(n,i){for(var s=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var S=31-Dt(m),T=1<<S,I=f[S];I===-1?((T&s)===0||(T&l)!==0)&&(f[S]=te(T,i)):I<=i&&(n.expiredLanes|=T),m&=~T}if(i=We,s=ve,s=_t(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,s===0||n===i&&(Pe===2||Pe===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&we(l),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Ct(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(l!==null&&we(l),ur(s)){case 2:case 8:s=Mt;break;case 32:s=ht;break;case 268435456:s=Lt;break;default:s=ht}return l=w_.bind(null,n),s=fe(s,l),n.callbackPriority=i,n.callbackNode=s,i}return l!==null&&l!==null&&we(l),n.callbackPriority=2,n.callbackNode=null,2}function w_(n,i){if(pn!==0&&pn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Hu()&&n.callbackNode!==s)return null;var l=ve;return l=_t(n,n===We?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(l_(n,l,i),T_(n,A()),n.callbackNode!=null&&n.callbackNode===s?w_.bind(null,n):null)}function C_(n,i){if(Hu())return null;l_(n,i,!0)}function mM(){wM(function(){(Ne&6)!==0?fe(mt,pM):A_()})}function Vf(){if(rs===0){var n=Er;n===0&&(n=zt,zt<<=1,(zt&261888)===0&&(zt=256)),rs=n}return rs}function R_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:$l(""+n)}function D_(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function gM(n,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=R_((f[Sn]||null).action),S=l.submitter;S&&(i=(i=S[Sn]||null)?R_(i.formAction):S.getAttribute("formAction"),i!==null&&(m=i,S=null));var T=new tu("action","action",null,l,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rs!==0){var I=S?D_(f,S):new FormData(f);of(s,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(T.preventDefault(),I=S?D_(f,S):new FormData(f),of(s,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Gf=0;Gf<bh.length;Gf++){var kf=bh[Gf],_M=kf.toLowerCase(),xM=kf[0].toUpperCase()+kf.slice(1);Ci(_M,"on"+xM)}Ci(og,"onAnimationEnd"),Ci(lg,"onAnimationIteration"),Ci(ug,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(OS,"onTransitionRun"),Ci(zS,"onTransitionStart"),Ci(FS,"onTransitionCancel"),Ci(cg,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function U_(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var l=n[s],f=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var S=l.length-1;0<=S;S--){var T=l[S],I=T.instance,tt=T.currentTarget;if(T=T.listener,I!==m&&f.isPropagationStopped())break t;m=T,f.currentTarget=tt;try{m(f)}catch(pt){iu(pt)}f.currentTarget=null,m=I}else for(S=0;S<l.length;S++){if(T=l[S],I=T.instance,tt=T.currentTarget,T=T.listener,I!==m&&f.isPropagationStopped())break t;m=T,f.currentTarget=tt;try{m(f)}catch(pt){iu(pt)}f.currentTarget=null,m=I}}}}function xe(n,i){var s=i[cr];s===void 0&&(s=i[cr]=new Set);var l=n+"__bubble";s.has(l)||(L_(i,n,2,!1),s.add(l))}function Xf(n,i,s){var l=0;i&&(l|=4),L_(s,n,l,i)}var ku="_reactListening"+Math.random().toString(36).slice(2);function Wf(n){if(!n[ku]){n[ku]=!0,Y.forEach(function(s){s!=="selectionchange"&&(vM.has(s)||Xf(s,!1,n),Xf(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ku]||(i[ku]=!0,Xf("selectionchange",!1,i))}}function L_(n,i,s,l){switch(ox(i)){case 2:var f=YM;break;case 8:f=jM;break;default:f=rd}s=f.bind(null,i,s,n),f=void 0,!ch||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,s,{capture:!0,passive:f}):n.addEventListener(i,s,!0):f!==void 0?n.addEventListener(i,s,{passive:f}):n.addEventListener(i,s,!1)}function qf(n,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var T=l.stateNode.containerInfo;if(T===f)break;if(S===4)for(S=l.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;T!==null;){if(S=Va(T),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){l=m=S;continue t}T=T.parentNode}}l=l.return}Pm(function(){var tt=m,pt=lh(s),vt=[];t:{var ot=hg.get(n);if(ot!==void 0){var ct=tu,Wt=n;switch(n){case"keypress":if(Ql(s)===0)break t;case"keydown":case"keyup":ct=fS;break;case"focusin":Wt="focus",ct=ph;break;case"focusout":Wt="blur",ct=ph;break;case"beforeblur":case"afterblur":ct=ph;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=mS;break;case og:case lg:case ug:ct=iS;break;case cg:ct=_S;break;case"scroll":case"scrollend":ct=Qy;break;case"wheel":ct=vS;break;case"copy":case"cut":case"paste":ct=sS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Gm;break;case"toggle":case"beforetoggle":ct=SS}var ne=(i&4)!==0,ke=!ne&&(n==="scroll"||n==="scrollend"),j=ne?ot!==null?ot+"Capture":null:ot;ne=[];for(var X=tt,J;X!==null;){var gt=X;if(J=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||J===null||j===null||(gt=No(X,j),gt!=null&&ne.push(fl(X,gt,J))),ke)break;X=X.return}0<ne.length&&(ot=new ct(ot,Wt,null,s,pt),vt.push({event:ot,listeners:ne}))}}if((i&7)===0){t:{if(ot=n==="mouseover"||n==="pointerover",ct=n==="mouseout"||n==="pointerout",ot&&s!==oh&&(Wt=s.relatedTarget||s.fromElement)&&(Va(Wt)||Wt[Ti]))break t;if((ct||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(Wt=s.relatedTarget||s.toElement,ct=tt,Wt=Wt?Va(Wt):null,Wt!==null&&(ke=u(Wt),ne=Wt.tag,Wt!==ke||ne!==5&&ne!==27&&ne!==6)&&(Wt=null)):(ct=null,Wt=tt),ct!==Wt)){if(ne=Hm,gt="onMouseLeave",j="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(ne=Gm,gt="onPointerLeave",j="onPointerEnter",X="pointer"),ke=ct==null?ot:Cs(ct),J=Wt==null?ot:Cs(Wt),ot=new ne(gt,X+"leave",ct,s,pt),ot.target=ke,ot.relatedTarget=J,gt=null,Va(pt)===tt&&(ne=new ne(j,X+"enter",Wt,s,pt),ne.target=J,ne.relatedTarget=ke,gt=ne),ke=gt,ct&&Wt)e:{for(ne=yM,j=ct,X=Wt,J=0,gt=j;gt;gt=ne(gt))J++;gt=0;for(var Qt=X;Qt;Qt=ne(Qt))gt++;for(;0<J-gt;)j=ne(j),J--;for(;0<gt-J;)X=ne(X),gt--;for(;J--;){if(j===X||X!==null&&j===X.alternate){ne=j;break e}j=ne(j),X=ne(X)}ne=null}else ne=null;ct!==null&&N_(vt,ot,ct,ne,!1),Wt!==null&&ke!==null&&N_(vt,ke,Wt,ne,!0)}}t:{if(ot=tt?Cs(tt):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var Ce=$m;else if(jm(ot))if(Km)Ce=US;else{Ce=RS;var $t=CS}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?tt&&wi(tt.elementType)&&(Ce=$m):Ce=DS;if(Ce&&(Ce=Ce(n,tt))){Zm(vt,Ce,s,pt);break t}$t&&$t(n,ot,tt),n==="focusout"&&tt&&ot.type==="number"&&tt.memoizedProps.value!=null&&bn(ot,"number",ot.value)}switch($t=tt?Cs(tt):window,n){case"focusin":(jm($t)||$t.contentEditable==="true")&&(gr=$t,yh=tt,Vo=null);break;case"focusout":Vo=yh=gr=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,sg(vt,s,pt);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":sg(vt,s,pt)}var ue;if(gh)t:{switch(n){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else mr?qm(n,s)&&(ye="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ye="onCompositionStart");ye&&(km&&s.locale!=="ko"&&(mr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&mr&&(ue=Bm()):(Xa=pt,hh="value"in Xa?Xa.value:Xa.textContent,mr=!0)),$t=Xu(tt,ye),0<$t.length&&(ye=new Vm(ye,n,null,s,pt),vt.push({event:ye,listeners:$t}),ue?ye.data=ue:(ue=Ym(s),ue!==null&&(ye.data=ue)))),(ue=bS?ES(n,s):AS(n,s))&&(ye=Xu(tt,"onBeforeInput"),0<ye.length&&($t=new Vm("onBeforeInput","beforeinput",null,s,pt),vt.push({event:$t,listeners:ye}),$t.data=ue)),gM(vt,n,tt,s,pt)}U_(vt,i)})}function fl(n,i,s){return{instance:n,listener:i,currentTarget:s}}function Xu(n,i){for(var s=i+"Capture",l=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=No(n,s),f!=null&&l.unshift(fl(n,f,m)),f=No(n,i),f!=null&&l.push(fl(n,f,m))),n.tag===3)return l;n=n.return}return[]}function yM(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function N_(n,i,s,l,f){for(var m=i._reactName,S=[];s!==null&&s!==l;){var T=s,I=T.alternate,tt=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||tt===null||(I=tt,f?(tt=No(s,m),tt!=null&&S.unshift(fl(s,tt,I))):f||(tt=No(s,m),tt!=null&&S.push(fl(s,tt,I)))),s=s.return}S.length!==0&&n.push({event:i,listeners:S})}var SM=/\r\n?/g,MM=/\u0000|\uFFFD/g;function O_(n){return(typeof n=="string"?n:""+n).replace(SM,`
`).replace(MM,"")}function z_(n,i){return i=O_(i),O_(n)===i}function Ge(n,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||dn(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&dn(n,""+l);break;case"className":Jt(n,"class",l);break;case"tabIndex":Jt(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(n,s,l);break;case"style":fr(n,l,m);break;case"data":if(i!=="object"){Jt(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=$l(""+l),n.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ge(n,i,"name",f.name,f,null),Ge(n,i,"formEncType",f.formEncType,f,null),Ge(n,i,"formMethod",f.formMethod,f,null),Ge(n,i,"formTarget",f.formTarget,f,null)):(Ge(n,i,"encType",f.encType,f,null),Ge(n,i,"method",f.method,f,null),Ge(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=$l(""+l),n.setAttribute(s,l);break;case"onClick":l!=null&&(n.onclick=aa);break;case"onScroll":l!=null&&xe("scroll",n);break;case"onScrollEnd":l!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}s=$l(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""+l):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":l===!0?n.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,l):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(s,l):n.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(s):n.setAttribute(s,l);break;case"popover":xe("beforetoggle",n),xe("toggle",n),jt(n,"popover",l);break;case"xlinkActuate":Zt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Zt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Zt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Zt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Zt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Zt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Zt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Zt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Zt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":jt(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=$y.get(s)||s,jt(n,s,l))}}function Yf(n,i,s,l,f,m){switch(s){case"style":fr(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof l=="string"?dn(n,l):(typeof l=="number"||typeof l=="bigint")&&dn(n,""+l);break;case"onScroll":l!=null&&xe("scroll",n);break;case"onScrollEnd":l!=null&&xe("scrollend",n);break;case"onClick":l!=null&&(n.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=n[Sn]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,l,f);break t}s in n?n[s]=l:l===!0?n.setAttribute(s,""):jt(n,s,l)}}}function Dn(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var S=s[m];if(S!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(n,i,m,S,s,null)}}f&&Ge(n,i,"srcSet",s.srcSet,s,null),l&&Ge(n,i,"src",s.src,s,null);return;case"input":xe("invalid",n);var T=m=S=f=null,I=null,tt=null;for(l in s)if(s.hasOwnProperty(l)){var pt=s[l];if(pt!=null)switch(l){case"name":f=pt;break;case"type":S=pt;break;case"checked":I=pt;break;case"defaultChecked":tt=pt;break;case"value":m=pt;break;case"defaultValue":T=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Ge(n,i,l,pt,s,null)}}ia(n,m,T,I,tt,S,f,!1);return;case"select":xe("invalid",n),l=S=m=null;for(f in s)if(s.hasOwnProperty(f)&&(T=s[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":S=T;break;case"multiple":l=T;default:Ge(n,i,f,T,s,null)}i=m,s=S,n.multiple=!!l,i!=null?hi(n,!!l,i,!1):s!=null&&hi(n,!!l,s,!0);return;case"textarea":xe("invalid",n),m=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(T=s[S],T!=null))switch(S){case"value":l=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Ge(n,i,S,T,s,null)}En(n,l,f,m);return;case"option":for(I in s)s.hasOwnProperty(I)&&(l=s[I],l!=null)&&(I==="selected"?n.selected=l&&typeof l!="function"&&typeof l!="symbol":Ge(n,i,I,l,s,null));return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(l=0;l<hl.length;l++)xe(hl[l],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in s)if(s.hasOwnProperty(tt)&&(l=s[tt],l!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(n,i,tt,l,s,null)}return;default:if(wi(i)){for(pt in s)s.hasOwnProperty(pt)&&(l=s[pt],l!==void 0&&Yf(n,i,pt,l,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(l=s[T],l!=null&&Ge(n,i,T,l,s,null))}function bM(n,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,S=null,T=null,I=null,tt=null,pt=null;for(ct in s){var vt=s[ct];if(s.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=vt;default:l.hasOwnProperty(ct)||Ge(n,i,ct,null,l,vt)}}for(var ot in l){var ct=l[ot];if(vt=s[ot],l.hasOwnProperty(ot)&&(ct!=null||vt!=null))switch(ot){case"type":m=ct;break;case"name":f=ct;break;case"checked":tt=ct;break;case"defaultChecked":pt=ct;break;case"value":S=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==vt&&Ge(n,i,ot,ct,l,vt)}}Mn(n,S,T,I,tt,pt,m,f);return;case"select":ct=S=T=ot=null;for(m in s)if(I=s[m],s.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":ct=I;default:l.hasOwnProperty(m)||Ge(n,i,m,null,l,I)}for(f in l)if(m=l[f],I=s[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":ot=m;break;case"defaultValue":T=m;break;case"multiple":S=m;default:m!==I&&Ge(n,i,f,m,l,I)}i=T,s=S,l=ct,ot!=null?hi(n,!!s,ot,!1):!!l!=!!s&&(i!=null?hi(n,!!s,i,!0):hi(n,!!s,s?[]:"",!1));return;case"textarea":ct=ot=null;for(T in s)if(f=s[T],s.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(n,i,T,null,l,f)}for(S in l)if(f=l[S],m=s[S],l.hasOwnProperty(S)&&(f!=null||m!=null))switch(S){case"value":ot=f;break;case"defaultValue":ct=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&Ge(n,i,S,f,l,m)}Fe(n,ot,ct);return;case"option":for(var Wt in s)ot=s[Wt],s.hasOwnProperty(Wt)&&ot!=null&&!l.hasOwnProperty(Wt)&&(Wt==="selected"?n.selected=!1:Ge(n,i,Wt,null,l,ot));for(I in l)ot=l[I],ct=s[I],l.hasOwnProperty(I)&&ot!==ct&&(ot!=null||ct!=null)&&(I==="selected"?n.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ge(n,i,I,ot,l,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in s)ot=s[ne],s.hasOwnProperty(ne)&&ot!=null&&!l.hasOwnProperty(ne)&&Ge(n,i,ne,null,l,ot);for(tt in l)if(ot=l[tt],ct=s[tt],l.hasOwnProperty(tt)&&ot!==ct&&(ot!=null||ct!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:Ge(n,i,tt,ot,l,ct)}return;default:if(wi(i)){for(var ke in s)ot=s[ke],s.hasOwnProperty(ke)&&ot!==void 0&&!l.hasOwnProperty(ke)&&Yf(n,i,ke,void 0,l,ot);for(pt in l)ot=l[pt],ct=s[pt],!l.hasOwnProperty(pt)||ot===ct||ot===void 0&&ct===void 0||Yf(n,i,pt,ot,l,ct);return}}for(var j in s)ot=s[j],s.hasOwnProperty(j)&&ot!=null&&!l.hasOwnProperty(j)&&Ge(n,i,j,null,l,ot);for(vt in l)ot=l[vt],ct=s[vt],!l.hasOwnProperty(vt)||ot===ct||ot==null&&ct==null||Ge(n,i,vt,ot,l,ct)}function F_(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function EM(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,S=f.initiatorType,T=f.duration;if(m&&T&&F_(S)){for(S=0,T=f.responseEnd,l+=1;l<s.length;l++){var I=s[l],tt=I.startTime;if(tt>T)break;var pt=I.transferSize,vt=I.initiatorType;pt&&F_(vt)&&(I=I.responseEnd,S+=pt*(I<T?1:(T-tt)/(I-tt)))}if(--l,i+=8*(m+S)/(f.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var jf=null,Zf=null;function Wu(n){return n.nodeType===9?n:n.ownerDocument}function P_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B_(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function $f(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kf=null;function AM(){var n=window.event;return n&&n.type==="popstate"?n===Kf?!1:(Kf=n,!0):(Kf=null,!1)}var I_=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,H_=typeof Promise=="function"?Promise:void 0,wM=typeof queueMicrotask=="function"?queueMicrotask:typeof H_<"u"?function(n){return H_.resolve(null).then(n).catch(CM)}:I_;function CM(n){setTimeout(function(){throw n})}function os(n){return n==="head"}function V_(n,i){var s=i,l=0;do{var f=s.nextSibling;if(n.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){n.removeChild(f),kr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")dl(n.ownerDocument.documentElement);else if(s==="head"){s=n.ownerDocument.head,dl(s);for(var m=s.firstChild;m;){var S=m.nextSibling,T=m.nodeName;m[ws]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=S}}else s==="body"&&dl(n.ownerDocument.body);s=f}while(s);kr(i)}function G_(n,i){var s=n;n=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(n===0)break;n--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||n++;s=l}while(s)}function Qf(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Qf(s),Lo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function RM(n,i,s,l){for(;n.nodeType===1;){var f=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[ws])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=xi(n.nextSibling),n===null)break}return null}function DM(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=xi(n.nextSibling),n===null))return null;return n}function k_(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=xi(n.nextSibling),n===null))return null;return n}function Jf(n){return n.data==="$?"||n.data==="$~"}function td(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function UM(n,i){var s=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function xi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var ed=null;function X_(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"||s==="/&"){if(i===0)return xi(n.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}n=n.nextSibling}return null}function W_(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return n;i--}else s!=="/$"&&s!=="/&"||i++}n=n.previousSibling}return null}function q_(n,i,s){switch(i=Wu(s),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function dl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Lo(n)}var vi=new Map,Y_=new Set;function qu(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ya=H.d;H.d={f:LM,r:NM,D:OM,C:zM,L:FM,m:PM,X:IM,S:BM,M:HM};function LM(){var n=ya.f(),i=Pu();return n||i}function NM(n){var i=Ga(n);i!==null&&i.tag===5&&i.type==="form"?c0(i):ya.r(n)}var Hr=typeof document>"u"?null:document;function j_(n,i,s){var l=Hr;if(l&&typeof i=="string"&&i){var f=se(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Y_.has(f)||(Y_.add(f),n={rel:n,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Dn(i,"link",n),w(i),l.head.appendChild(i)))}}function OM(n){ya.D(n),j_("dns-prefetch",n,null)}function zM(n,i){ya.C(n,i),j_("preconnect",n,i)}function FM(n,i,s){ya.L(n,i,s);var l=Hr;if(l&&n&&i){var f='link[rel="preload"][as="'+se(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+se(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+se(s.imageSizes)+'"]')):f+='[href="'+se(n)+'"]';var m=f;switch(i){case"style":m=Vr(n);break;case"script":m=Gr(n)}vi.has(m)||(n=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),vi.set(m,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(pl(m))||i==="script"&&l.querySelector(ml(m))||(i=l.createElement("link"),Dn(i,"link",n),w(i),l.head.appendChild(i)))}}function PM(n,i){ya.m(n,i);var s=Hr;if(s&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+se(l)+'"][href="'+se(n)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Gr(n)}if(!vi.has(m)&&(n=_({rel:"modulepreload",href:n},i),vi.set(m,n),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ml(m)))return}l=s.createElement("link"),Dn(l,"link",n),w(l),s.head.appendChild(l)}}}function BM(n,i,s){ya.S(n,i,s);var l=Hr;if(l&&n){var f=ka(l).hoistableStyles,m=Vr(n);i=i||"default";var S=f.get(m);if(!S){var T={loading:0,preload:null};if(S=l.querySelector(pl(m)))T.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":i},s),(s=vi.get(m))&&nd(n,s);var I=S=l.createElement("link");w(I),Dn(I,"link",n),I._p=new Promise(function(tt,pt){I.onload=tt,I.onerror=pt}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yu(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:T},f.set(m,S)}}}function IM(n,i){ya.X(n,i);var s=Hr;if(s&&n){var l=ka(s).hoistableScripts,f=Gr(n),m=l.get(f);m||(m=s.querySelector(ml(f)),m||(n=_({src:n,async:!0},i),(i=vi.get(f))&&id(n,i),m=s.createElement("script"),w(m),Dn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function HM(n,i){ya.M(n,i);var s=Hr;if(s&&n){var l=ka(s).hoistableScripts,f=Gr(n),m=l.get(f);m||(m=s.querySelector(ml(f)),m||(n=_({src:n,async:!0,type:"module"},i),(i=vi.get(f))&&id(n,i),m=s.createElement("script"),w(m),Dn(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Z_(n,i,s,l){var f=(f=it.current)?qu(f):null;if(!f)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Vr(s.href),s=ka(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Vr(s.href);var m=ka(f).hoistableStyles,S=m.get(n);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,S),(m=f.querySelector(pl(n)))&&!m._p&&(S.instance=m,S.state.loading=5),vi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},vi.set(n,s),m||VM(f,n,s,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Gr(s),s=ka(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function Vr(n){return'href="'+se(n)+'"'}function pl(n){return'link[rel="stylesheet"]['+n+"]"}function $_(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function VM(n,i,s,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Dn(i,"link",s),w(i),n.head.appendChild(i))}function Gr(n){return'[src="'+se(n)+'"]'}function ml(n){return"script[async]"+n}function K_(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+se(s.href)+'"]');if(l)return i.instance=l,w(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),w(l),Dn(l,"style",f),Yu(l,s.precedence,n),i.instance=l;case"stylesheet":f=Vr(s.href);var m=n.querySelector(pl(f));if(m)return i.state.loading|=4,i.instance=m,w(m),m;l=$_(s),(f=vi.get(f))&&nd(l,f),m=(n.ownerDocument||n).createElement("link"),w(m);var S=m;return S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Dn(m,"link",l),i.state.loading|=4,Yu(m,s.precedence,n),i.instance=m;case"script":return m=Gr(s.src),(f=n.querySelector(ml(m)))?(i.instance=f,w(f),f):(l=s,(f=vi.get(m))&&(l=_({},s),id(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),w(f),Dn(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Yu(l,s.precedence,n));return i.instance}function Yu(n,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,S=0;S<l.length;S++){var T=l[S];if(T.dataset.precedence===i)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function nd(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function id(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var ju=null;function Q_(n,i,s){if(ju===null){var l=new Map,f=ju=new Map;f.set(s,l)}else f=ju,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(n))return l;for(l.set(n,null),s=s.getElementsByTagName(n),f=0;f<s.length;f++){var m=s[f];if(!(m[ws]||m[sn]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(i)||"";S=n+S;var T=l.get(S);T?T.push(m):l.set(S,[m])}}return l}function J_(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function GM(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(n=i.disabled,typeof i.precedence=="string"&&n==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function tx(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function kM(n,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Vr(l.href),m=i.querySelector(pl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=Zu.bind(n),i.then(n,n)),s.state.loading|=4,s.instance=m,w(m);return}m=i.ownerDocument||i,l=$_(l),(f=vi.get(f))&&nd(l,f),m=m.createElement("link"),w(m);var S=m;S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Dn(m,"link",l),s.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(n.count++,s=Zu.bind(n),i.addEventListener("load",s),i.addEventListener("error",s))}}var ad=0;function XM(n,i){return n.stylesheets&&n.count===0&&Ku(n,n.stylesheets),0<n.count||0<n.imgCount?function(s){var l=setTimeout(function(){if(n.stylesheets&&Ku(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+i);0<n.imgBytes&&ad===0&&(ad=62500*EM());var f=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Ku(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>ad?50:800)+i);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Zu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ku(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var $u=null;function Ku(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,$u=new Map,i.forEach(WM,n),$u=null,Zu.call(n))}function WM(n,i){if(!(i.state.loading&4)){var s=$u.get(n);if(s)var l=s.get(null);else{s=new Map,$u.set(n,s);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var S=f[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),m=s.get(S)||l,m===l&&s.set(null,f),s.set(S,f),this.count++,l=Zu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var gl={$$typeof:L,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function qM(n,i,s,l,f,m,S,T,I){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function ex(n,i,s,l,f,m,S,T,I,tt,pt,vt){return n=new qM(n,i,s,S,I,tt,pt,vt,T),i=1,m===!0&&(i|=24),m=Jn(3,null,null,i),n.current=m,m.stateNode=n,i=Fh(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},Hh(m),n}function nx(n){return n?(n=vr,n):vr}function ix(n,i,s,l,f,m){f=nx(f),l.context===null?l.context=f:l.pendingContext=f,l=$a(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ka(n,l,i),s!==null&&(Zn(s,n,i),jo(s,n,i))}function ax(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function sd(n,i){ax(n,i),(n=n.alternate)&&ax(n,i)}function sx(n){if(n.tag===13||n.tag===31){var i=Ls(n,67108864);i!==null&&Zn(i,n,67108864),sd(n,67108864)}}function rx(n){if(n.tag===13||n.tag===31){var i=ai();i=Ro(i);var s=Ls(n,i);s!==null&&Zn(s,n,i),sd(n,i)}}var Qu=!0;function YM(n,i,s,l){var f=P.T;P.T=null;var m=H.p;try{H.p=2,rd(n,i,s,l)}finally{H.p=m,P.T=f}}function jM(n,i,s,l){var f=P.T;P.T=null;var m=H.p;try{H.p=8,rd(n,i,s,l)}finally{H.p=m,P.T=f}}function rd(n,i,s,l){if(Qu){var f=od(l);if(f===null)qf(n,i,l,Ju,s),lx(n,l);else if($M(f,n,i,s,l))l.stopPropagation();else if(lx(n,l),i&4&&-1<ZM.indexOf(n)){for(;f!==null;){var m=Ga(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=bt(m.pendingLanes);if(S!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var I=1<<31-Dt(S);T.entanglements[1]|=I,S&=~I}qi(m),(Ne&6)===0&&(zu=A()+500,cl(0))}}break;case 31:case 13:T=Ls(m,2),T!==null&&Zn(T,m,2),Pu(),sd(m,2)}if(m=od(l),m===null&&qf(n,i,l,Ju,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else qf(n,i,l,null,s)}}function od(n){return n=lh(n),ld(n)}var Ju=null;function ld(n){if(Ju=null,n=Va(n),n!==null){var i=u(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=c(i),n!==null)return n;n=null}else if(s===31){if(n=h(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Ju=n,null}function ox(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case mt:return 2;case Mt:return 8;case ht:case Yt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var ud=!1,ls=null,us=null,cs=null,_l=new Map,xl=new Map,hs=[],ZM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lx(n,i){switch(n){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":us=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(i.pointerId)}}function vl(n,i,s,l,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ga(i),i!==null&&sx(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function $M(n,i,s,l,f){switch(i){case"focusin":return ls=vl(ls,n,i,s,l,f),!0;case"dragenter":return us=vl(us,n,i,s,l,f),!0;case"mouseover":return cs=vl(cs,n,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return _l.set(m,vl(_l.get(m)||null,n,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,xl.set(m,vl(xl.get(m)||null,n,i,s,l,f)),!0}return!1}function ux(n){var i=Va(n.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){n.blockedOn=i,Gi(n.priority,function(){rx(s)});return}}else if(i===31){if(i=h(s),i!==null){n.blockedOn=i,Gi(n.priority,function(){rx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=od(n.nativeEvent);if(s===null){s=n.nativeEvent;var l=new s.constructor(s.type,s);oh=l,s.target.dispatchEvent(l),oh=null}else return i=Ga(s),i!==null&&sx(i),n.blockedOn=s,!1;i.shift()}return!0}function cx(n,i,s){tc(n)&&s.delete(i)}function KM(){ud=!1,ls!==null&&tc(ls)&&(ls=null),us!==null&&tc(us)&&(us=null),cs!==null&&tc(cs)&&(cs=null),_l.forEach(cx),xl.forEach(cx)}function ec(n,i){n.blockedOn===i&&(n.blockedOn=null,ud||(ud=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,KM)))}var nc=null;function hx(n){nc!==n&&(nc=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){nc===n&&(nc=null);for(var i=0;i<n.length;i+=3){var s=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(ld(l||s)===null)continue;break}var m=Ga(s);m!==null&&(n.splice(i,3),i-=3,of(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function kr(n){function i(I){return ec(I,n)}ls!==null&&ec(ls,n),us!==null&&ec(us,n),cs!==null&&ec(cs,n),_l.forEach(i),xl.forEach(i);for(var s=0;s<hs.length;s++){var l=hs[s];l.blockedOn===n&&(l.blockedOn=null)}for(;0<hs.length&&(s=hs[0],s.blockedOn===null);)ux(s),s.blockedOn===null&&hs.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],S=f[Sn]||null;if(typeof m=="function")S||hx(s);else if(S){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,S=m[Sn]||null)T=S.formAction;else if(ld(f)!==null)continue}else T=S.action;typeof T=="function"?s[l+1]=T:(s.splice(l,3),l-=3),hx(s)}}}function fx(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function cd(n){this._internalRoot=n}ic.prototype.render=cd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ai();ix(s,l,n,i,null,null)},ic.prototype.unmount=cd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ix(n.current,2,null,n,null,null),Pu(),i[Ti]=null}};function ic(n){this._internalRoot=n}ic.prototype.unstable_scheduleHydration=function(n){if(n){var i=Do();n={blockedOn:null,target:n,priority:i};for(var s=0;s<hs.length&&i!==0&&i<hs[s].priority;s++);hs.splice(s,0,n),s===0&&ux(n)}};var dx=t.version;if(dx!=="19.2.4")throw Error(a(527,dx,"19.2.4"));H.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=d(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var QM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{st=ac.inject(QM),yt=ac}catch{}}return Sl.createRoot=function(n,i){if(!r(n))throw Error(a(299));var s=!1,l="",f=y0,m=S0,S=M0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=ex(n,1,!1,null,null,s,l,null,f,m,S,fx),n[Ti]=i.current,Wf(n),new cd(i)},Sl.hydrateRoot=function(n,i,s){if(!r(n))throw Error(a(299));var l=!1,f="",m=y0,S=S0,T=M0,I=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.formState!==void 0&&(I=s.formState)),i=ex(n,1,!0,i,s??null,l,f,I,m,S,T,fx),i.context=nx(null),s=i.current,l=ai(),l=Ro(l),f=$a(l),f.callback=null,Ka(s,f,l),s=l,i.current.lanes=s,Ln(i,s),qi(i),n[Ti]=i.current,Wf(n),new ic(i)},Sl.version="19.2.4",Sl}var bx;function cb(){if(bx)return dd.exports;bx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),dd.exports=ub(),dd.exports}var hb=cb();const pm="182",fb=0,Ex=1,db=2,Vc=1,pb=2,Nl=3,Ts=0,Kn=1,Ua=2,Na=0,go=1,Ax=2,Tx=3,wx=4,mb=5,tr=100,gb=101,_b=102,xb=103,vb=104,yb=200,Sb=201,Mb=202,bb=203,dp=204,pp=205,Eb=206,Ab=207,Tb=208,wb=209,Cb=210,Rb=211,Db=212,Ub=213,Lb=214,mp=0,gp=1,_p=2,vo=3,xp=4,vp=5,yp=6,Sp=7,ny=0,Nb=1,Ob=2,Ki=0,iy=1,ay=2,sy=3,ry=4,oy=5,ly=6,uy=7,cy=300,sr=301,yo=302,Mp=303,bp=304,th=306,Ep=1e3,La=1001,Ap=1002,Un=1003,zb=1004,sc=1005,In=1006,_d=1007,nr=1008,ui=1009,hy=1010,fy=1011,Fl=1012,mm=1013,ea=1014,Zi=1015,Pa=1016,gm=1017,_m=1018,Pl=1020,dy=35902,py=35899,my=1021,gy=1022,Bi=1023,Ba=1026,ir=1027,_y=1028,xm=1029,So=1030,vm=1031,ym=1033,Gc=33776,kc=33777,Xc=33778,Wc=33779,Tp=35840,wp=35841,Cp=35842,Rp=35843,Dp=36196,Up=37492,Lp=37496,Np=37488,Op=37489,zp=37490,Fp=37491,Pp=37808,Bp=37809,Ip=37810,Hp=37811,Vp=37812,Gp=37813,kp=37814,Xp=37815,Wp=37816,qp=37817,Yp=37818,jp=37819,Zp=37820,$p=37821,Kp=36492,Qp=36494,Jp=36495,tm=36283,em=36284,nm=36285,im=36286,Fb=3200,Pb=0,Bb=1,Es="",Mi="srgb",Mo="srgb-linear",$c="linear",Ie="srgb",Xr=7680,Cx=519,Ib=512,Hb=513,Vb=514,Sm=515,Gb=516,kb=517,Mm=518,Xb=519,Rx=35044,Dx="300 es",$i=2e3,Kc=2001;function xy(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Qc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Wb(){const o=Qc("canvas");return o.style.display="block",o}const Ux={};function Lx(...o){const t="THREE."+o.shift();console.log(t,...o)}function oe(...o){const t="THREE."+o.shift();console.warn(t,...o)}function De(...o){const t="THREE."+o.shift();console.error(t,...o)}function Bl(...o){const t=o.join(" ");t in Ux||(Ux[t]=!0,oe(...o))}function qb(o,t,e){return new Promise(function(a,r){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(u,e);break;default:a()}}setTimeout(u,e)})}let Eo=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(e)===-1&&a[t].push(e)}hasEventListener(t,e){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(e)!==-1}removeEventListener(t,e){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const u=r.indexOf(e);u!==-1&&r.splice(u,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const a=e[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let u=0,c=r.length;u<c;u++)r[u].call(this,t);t.target=null}}};const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=Math.PI/180,am=180/Math.PI;function Vl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[e&63|128]+On[e>>8&255]+"-"+On[e>>16&255]+On[e>>24&255]+On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]).toLowerCase()}function Me(o,t,e){return Math.max(t,Math.min(e,o))}function Yb(o,t){return(o%t+t)%t}function vd(o,t,e){return(1-e)*o+e*t}function Ml(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function $n(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}let Xe=class vy{constructor(t=0,e=0){vy.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,a=this.y,r=t.elements;return this.x=r[0]*e+r[3]*a+r[6],this.y=r[1]*e+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y;return e*e+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const a=Math.cos(e),r=Math.sin(e),u=this.x-t.x,c=this.y-t.y;return this.x=u*a-c*r+t.x,this.y=u*r+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gl=class{constructor(t=0,e=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=a,this._w=r}static slerpFlat(t,e,a,r,u,c,h){let p=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3],x=u[c+0],v=u[c+1],b=u[c+2],E=u[c+3];if(h<=0){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h>=1){t[e+0]=x,t[e+1]=v,t[e+2]=b,t[e+3]=E;return}if(_!==E||p!==x||d!==v||g!==b){let M=p*x+d*v+g*b+_*E;M<0&&(x=-x,v=-v,b=-b,E=-E,M=-M);let y=1-h;if(M<.9995){const D=Math.acos(M),L=Math.sin(D);y=Math.sin(y*D)/L,h=Math.sin(h*D)/L,p=p*y+x*h,d=d*y+v*h,g=g*y+b*h,_=_*y+E*h}else{p=p*y+x*h,d=d*y+v*h,g=g*y+b*h,_=_*y+E*h;const D=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=D,d*=D,g*=D,_*=D}}t[e]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_}static multiplyQuaternionsFlat(t,e,a,r,u,c){const h=a[r],p=a[r+1],d=a[r+2],g=a[r+3],_=u[c],x=u[c+1],v=u[c+2],b=u[c+3];return t[e]=h*b+g*_+p*v-d*x,t[e+1]=p*b+g*x+d*_-h*v,t[e+2]=d*b+g*v+h*x-p*_,t[e+3]=g*b-h*_-p*x-d*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,a,r){return this._x=t,this._y=e,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const a=t._x,r=t._y,u=t._z,c=t._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(r/2),_=h(u/2),x=p(a/2),v=p(r/2),b=p(u/2);switch(c){case"XYZ":this._x=x*g*_+d*v*b,this._y=d*v*_-x*g*b,this._z=d*g*b+x*v*_,this._w=d*g*_-x*v*b;break;case"YXZ":this._x=x*g*_+d*v*b,this._y=d*v*_-x*g*b,this._z=d*g*b-x*v*_,this._w=d*g*_+x*v*b;break;case"ZXY":this._x=x*g*_-d*v*b,this._y=d*v*_+x*g*b,this._z=d*g*b+x*v*_,this._w=d*g*_-x*v*b;break;case"ZYX":this._x=x*g*_-d*v*b,this._y=d*v*_+x*g*b,this._z=d*g*b-x*v*_,this._w=d*g*_+x*v*b;break;case"YZX":this._x=x*g*_+d*v*b,this._y=d*v*_+x*g*b,this._z=d*g*b-x*v*_,this._w=d*g*_-x*v*b;break;case"XZY":this._x=x*g*_-d*v*b,this._y=d*v*_-x*g*b,this._z=d*g*b+x*v*_,this._w=d*g*_+x*v*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const a=e/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,a=e[0],r=e[4],u=e[8],c=e[1],h=e[5],p=e[9],d=e[2],g=e[6],_=e[10],x=a+h+_;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(g-p)*v,this._y=(u-d)*v,this._z=(c-r)*v}else if(a>h&&a>_){const v=2*Math.sqrt(1+a-h-_);this._w=(g-p)/v,this._x=.25*v,this._y=(r+c)/v,this._z=(u+d)/v}else if(h>_){const v=2*Math.sqrt(1+h-a-_);this._w=(u-d)/v,this._x=(r+c)/v,this._y=.25*v,this._z=(p+g)/v}else{const v=2*Math.sqrt(1+_-a-h);this._w=(c-r)/v,this._x=(u+d)/v,this._y=(p+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let a=t.dot(e)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,e/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const a=t._x,r=t._y,u=t._z,c=t._w,h=e._x,p=e._y,d=e._z,g=e._w;return this._x=a*g+c*h+r*d-u*p,this._y=r*g+c*p+u*h-a*d,this._z=u*g+c*d+a*p-r*h,this._w=c*g-a*h-r*p-u*d,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let a=t._x,r=t._y,u=t._z,c=t._w,h=this.dot(t);h<0&&(a=-a,r=-r,u=-u,c=-c,h=-h);let p=1-e;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);p=Math.sin(p*d)/g,e=Math.sin(e*d)/g,this._x=this._x*p+a*e,this._y=this._y*p+r*e,this._z=this._z*p+u*e,this._w=this._w*p+c*e,this._onChangeCallback()}else this._x=this._x*p+a*e,this._y=this._y*p+r*e,this._z=this._z*p+u*e,this._w=this._w*p+c*e,this.normalize();return this}slerpQuaternions(t,e,a){return this.copy(t).slerp(e,a)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),u*Math.sin(e),u*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ut=class yy{constructor(t=0,e=0,a=0){yy.prototype.isVector3=!0,this.x=t,this.y=e,this.z=a}set(t,e,a){return a===void 0&&(a=this.z),this.x=t,this.y=e,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nx.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nx.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,a=this.y,r=this.z,u=t.elements;return this.x=u[0]*e+u[3]*a+u[6]*r,this.y=u[1]*e+u[4]*a+u[7]*r,this.z=u[2]*e+u[5]*a+u[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,u=t.elements,c=1/(u[3]*e+u[7]*a+u[11]*r+u[15]);return this.x=(u[0]*e+u[4]*a+u[8]*r+u[12])*c,this.y=(u[1]*e+u[5]*a+u[9]*r+u[13])*c,this.z=(u[2]*e+u[6]*a+u[10]*r+u[14])*c,this}applyQuaternion(t){const e=this.x,a=this.y,r=this.z,u=t.x,c=t.y,h=t.z,p=t.w,d=2*(c*r-h*a),g=2*(h*e-u*r),_=2*(u*a-c*e);return this.x=e+p*d+c*_-h*g,this.y=a+p*g+h*d-u*_,this.z=r+p*_+u*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,a=this.y,r=this.z,u=t.elements;return this.x=u[0]*e+u[4]*a+u[8]*r,this.y=u[1]*e+u[5]*a+u[9]*r,this.z=u[2]*e+u[6]*a+u[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const a=t.x,r=t.y,u=t.z,c=e.x,h=e.y,p=e.z;return this.x=r*p-u*h,this.y=u*c-a*p,this.z=a*h-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const a=t.dot(this)/e;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return yd.copy(this).projectOnVector(t),this.sub(yd)}reflect(t){return this.sub(yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return e*e+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,a){const r=Math.sin(e)*t;return this.x=r*Math.sin(a),this.y=Math.cos(e)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,a){return this.x=t*Math.sin(e),this.y=a,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=a,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,a=Math.sqrt(1-e*e);return this.x=a*Math.cos(t),this.y=e,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const yd=new ut,Nx=new Gl;let ge=class Sy{constructor(t,e,a,r,u,c,h,p,d){Sy.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,a,r,u,c,h,p,d)}set(t,e,a,r,u,c,h,p,d){const g=this.elements;return g[0]=t,g[1]=r,g[2]=h,g[3]=e,g[4]=u,g[5]=p,g[6]=a,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],this}extractBasis(t,e,a){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,u=this.elements,c=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],x=a[2],v=a[5],b=a[8],E=r[0],M=r[3],y=r[6],D=r[1],L=r[4],N=r[7],z=r[2],B=r[5],U=r[8];return u[0]=c*E+h*D+p*z,u[3]=c*M+h*L+p*B,u[6]=c*y+h*N+p*U,u[1]=d*E+g*D+_*z,u[4]=d*M+g*L+_*B,u[7]=d*y+g*N+_*U,u[2]=x*E+v*D+b*z,u[5]=x*M+v*L+b*B,u[8]=x*y+v*N+b*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[1],r=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return e*c*g-e*h*d-a*u*g+a*h*p+r*u*d-r*c*p}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=g*c-h*d,x=h*p-g*u,v=d*u-c*p,b=e*_+a*x+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=_*E,t[1]=(r*d-g*a)*E,t[2]=(h*a-r*c)*E,t[3]=x*E,t[4]=(g*e-r*p)*E,t[5]=(r*u-h*e)*E,t[6]=v*E,t[7]=(a*p-d*e)*E,t[8]=(c*e-a*u)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,a,r,u,c,h){const p=Math.cos(u),d=Math.sin(u);return this.set(a*p,a*d,-a*(p*c+d*h)+c+t,-r*d,r*p,-r*(-d*c+p*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(Sd.makeScale(t,e)),this}rotate(t){return this.premultiply(Sd.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,a,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<9;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<9;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const Sd=new ge,Ox=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zx=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jb(){const o={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(r,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ie&&(r.r=Oa(r.r),r.g=Oa(r.g),r.b=Oa(r.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[u].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ie&&(r.r=_o(r.r),r.g=_o(r.g),r.b=_o(r.b))),r},workingToColorSpace:function(r,u){return this.convert(r,this.workingColorSpace,u)},colorSpaceToWorking:function(r,u){return this.convert(r,u,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Es?$c:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,u=this.workingColorSpace){return r.fromArray(this.spaces[u].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,u,c){return r.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,u){return Bl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,u)},toWorkingColorSpace:function(r,u){return Bl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,u)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Mo]:{primaries:t,whitePoint:a,transfer:$c,toXYZ:Ox,fromXYZ:zx,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:a,transfer:Ie,toXYZ:Ox,fromXYZ:zx,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Te=jb();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function _o(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Wr,Zb=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Wr===void 0&&(Wr=Qc("canvas")),Wr.width=t.width,Wr.height=t.height;const r=Wr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=Wr}return a.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qc("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),u=r.data;for(let c=0;c<u.length;c++)u[c]=Oa(u[c]/255)*255;return a.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let a=0;a<e.length;a++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[a]=Math.floor(Oa(e[a]/255)*255):e[a]=Oa(e[a]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$b=0,bm=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=Vl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let u;if(Array.isArray(r)){u=[];for(let c=0,h=r.length;c<h;c++)r[c].isDataTexture?u.push(Md(r[c].image)):u.push(Md(r[c]))}else u=Md(r);a.url=u}return e||(t.images[this.uuid]=a),a}};function Md(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Zb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let Kb=0;const bd=new ut;let Vi=class qc extends Eo{constructor(t=qc.DEFAULT_IMAGE,e=qc.DEFAULT_MAPPING,a=La,r=La,u=In,c=nr,h=Bi,p=ui,d=qc.DEFAULT_ANISOTROPY,g=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=Vl(),this.name="",this.source=new bm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const a=t[e];if(a===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),e||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ep:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case Ap:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ep:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case Ap:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vi.DEFAULT_IMAGE=null;Vi.DEFAULT_MAPPING=cy;Vi.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,e=0,a=0,r=1){en.prototype.isVector4=!0,this.x=t,this.y=e,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,a,r){return this.x=t,this.y=e,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,u=this.w,c=t.elements;return this.x=c[0]*e+c[4]*a+c[8]*r+c[12]*u,this.y=c[1]*e+c[5]*a+c[9]*r+c[13]*u,this.z=c[2]*e+c[6]*a+c[10]*r+c[14]*u,this.w=c[3]*e+c[7]*a+c[11]*r+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,a,r,u;const p=t.elements,d=p[0],g=p[4],_=p[8],x=p[1],v=p[5],b=p[9],E=p[2],M=p[6],y=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-E)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+E)<.1&&Math.abs(b+M)<.1&&Math.abs(d+v+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(d+1)/2,N=(v+1)/2,z=(y+1)/2,B=(g+x)/4,U=(_+E)/4,Z=(b+M)/4;return L>N&&L>z?L<.01?(a=0,r=.707106781,u=.707106781):(a=Math.sqrt(L),r=B/a,u=U/a):N>z?N<.01?(a=.707106781,r=0,u=.707106781):(r=Math.sqrt(N),a=B/r,u=Z/r):z<.01?(a=.707106781,r=.707106781,u=0):(u=Math.sqrt(z),a=U/u,r=Z/u),this.set(a,r,u,e),this}let D=Math.sqrt((M-b)*(M-b)+(_-E)*(_-E)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(_-E)/D,this.z=(x-g)/D,this.w=Math.acos((d+v+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this.w=t.w+(e.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qb extends Eo{constructor(t=1,e=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=a.depth,this.scissor=new en(0,0,t,e),this.scissorTest=!1,this.viewport=new en(0,0,t,e);const r={width:t,height:e,depth:a.depth},u=new Vi(r);this.textures=[];const c=a.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const e={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,a=1){if(this.width!==t||this.height!==e||this.depth!==a){this.width=t,this.height=e,this.depth=a;for(let r=0,u=this.textures.length;r<u;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,a=t.textures.length;e<a;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new bm(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Qb{constructor(t=1,e=1,a={}){super(t,e,a),this.isWebGLRenderTarget=!0}}class My extends Vi{constructor(t=null,e=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jb extends Vi{constructor(t=null,e=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let kl=class{constructor(t=new ut(1/0,1/0,1/0),e=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,a=t.count;e<a;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const a=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(e===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,Ui):Ui.fromBufferAttribute(u,c),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),rc.copy(a.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const r=t.children;for(let u=0,c=r.length;u<c;u++)this.expandByObject(r[u],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,a;return t.normal.x>0?(e=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),e<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bl),oc.subVectors(this.max,bl),qr.subVectors(t.a,bl),Yr.subVectors(t.b,bl),jr.subVectors(t.c,bl),ds.subVectors(Yr,qr),ps.subVectors(jr,Yr),Ws.subVectors(qr,jr);let e=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-Ws.z,Ws.y,ds.z,0,-ds.x,ps.z,0,-ps.x,Ws.z,0,-Ws.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-Ws.y,Ws.x,0];return!Ed(e,qr,Yr,jr,oc)||(e=[1,0,0,0,1,0,0,0,1],!Ed(e,qr,Yr,jr,oc))?!1:(lc.crossVectors(ds,ps),e=[lc.x,lc.y,lc.z],Ed(e,qr,Yr,jr,oc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}};const Sa=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],Ui=new ut,rc=new kl,qr=new ut,Yr=new ut,jr=new ut,ds=new ut,ps=new ut,Ws=new ut,bl=new ut,oc=new ut,lc=new ut,qs=new ut;function Ed(o,t,e,a,r){for(let u=0,c=o.length-3;u<=c;u+=3){qs.fromArray(o,u);const h=r.x*Math.abs(qs.x)+r.y*Math.abs(qs.y)+r.z*Math.abs(qs.z),p=t.dot(qs),d=e.dot(qs),g=a.dot(qs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const tE=new kl,El=new ut,Ad=new ut;let Em=class{constructor(t=new ut,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const a=this.center;e!==void 0?a.copy(e):tE.setFromPoints(t).getCenter(a);let r=0;for(let u=0,c=t.length;u<c;u++)r=Math.max(r,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const a=this.center.distanceToSquared(t);return e.copy(t),a>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;El.subVectors(t,this.center);const e=El.lengthSq();if(e>this.radius*this.radius){const a=Math.sqrt(e),r=(a-this.radius)*.5;this.center.addScaledVector(El,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(El.copy(t.center).add(Ad)),this.expandByPoint(El.copy(t.center).sub(Ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Ma=new ut,Td=new ut,uc=new ut,ms=new ut,wd=new ut,cc=new ut,Cd=new ut;let eE=class{constructor(t=new ut,e=new ut(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const a=e.dot(this.direction);return a<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ma.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,e),Ma.distanceToSquared(t))}distanceSqToSegment(t,e,a,r){Td.copy(t).add(e).multiplyScalar(.5),uc.copy(e).sub(t).normalize(),ms.copy(this.origin).sub(Td);const u=t.distanceTo(e)*.5,c=-this.direction.dot(uc),h=ms.dot(this.direction),p=-ms.dot(uc),d=ms.lengthSq(),g=Math.abs(1-c*c);let _,x,v,b;if(g>0)if(_=c*p-h,x=c*h-p,b=u*g,_>=0)if(x>=-b)if(x<=b){const E=1/g;_*=E,x*=E,v=_*(_+c*x+2*h)+x*(c*_+x+2*p)+d}else x=u,_=Math.max(0,-(c*x+h)),v=-_*_+x*(x+2*p)+d;else x=-u,_=Math.max(0,-(c*x+h)),v=-_*_+x*(x+2*p)+d;else x<=-b?(_=Math.max(0,-(-c*u+h)),x=_>0?-u:Math.min(Math.max(-u,-p),u),v=-_*_+x*(x+2*p)+d):x<=b?(_=0,x=Math.min(Math.max(-u,-p),u),v=x*(x+2*p)+d):(_=Math.max(0,-(c*u+h)),x=_>0?u:Math.min(Math.max(-u,-p),u),v=-_*_+x*(x+2*p)+d);else x=c>0?-u:u,_=Math.max(0,-(c*x+h)),v=-_*_+x*(x+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Td).addScaledVector(uc,x),v}intersectSphere(t,e){Ma.subVectors(t.center,this.origin);const a=Ma.dot(this.direction),r=Ma.dot(Ma)-a*a,u=t.radius*t.radius;if(r>u)return null;const c=Math.sqrt(u-r),h=a-c,p=a+c;return p<0?null:h<0?this.at(p,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/e;return a>=0?a:null}intersectPlane(t,e){const a=this.distanceToPlane(t);return a===null?null:this.at(a,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let a,r,u,c,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return d>=0?(a=(t.min.x-x.x)*d,r=(t.max.x-x.x)*d):(a=(t.max.x-x.x)*d,r=(t.min.x-x.x)*d),g>=0?(u=(t.min.y-x.y)*g,c=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,c=(t.min.y-x.y)*g),a>c||u>r||((u>a||isNaN(a))&&(a=u),(c<r||isNaN(r))&&(r=c),_>=0?(h=(t.min.z-x.z)*_,p=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,p=(t.min.z-x.z)*_),a>p||h>r)||((h>a||a!==a)&&(a=h),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,e)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,e,a,r,u){wd.subVectors(e,t),cc.subVectors(a,t),Cd.crossVectors(wd,cc);let c=this.direction.dot(Cd),h;if(c>0){if(r)return null;h=1}else if(c<0)h=-1,c=-c;else return null;ms.subVectors(this.origin,t);const p=h*this.direction.dot(cc.crossVectors(ms,cc));if(p<0)return null;const d=h*this.direction.dot(wd.cross(ms));if(d<0||p+d>c)return null;const g=-h*ms.dot(Cd);return g<0?null:this.at(g/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class sm{constructor(t,e,a,r,u,c,h,p,d,g,_,x,v,b,E,M){sm.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,a,r,u,c,h,p,d,g,_,x,v,b,E,M)}set(t,e,a,r,u,c,h,p,d,g,_,x,v,b,E,M){const y=this.elements;return y[0]=t,y[4]=e,y[8]=a,y[12]=r,y[1]=u,y[5]=c,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=_,y[14]=x,y[3]=v,y[7]=b,y[11]=E,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sm().fromArray(this.elements)}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],e[9]=a[9],e[10]=a[10],e[11]=a[11],e[12]=a[12],e[13]=a[13],e[14]=a[14],e[15]=a[15],this}copyPosition(t){const e=this.elements,a=t.elements;return e[12]=a[12],e[13]=a[13],e[14]=a[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,a){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,e,a){return this.set(t.x,e.x,a.x,0,t.y,e.y,a.y,0,t.z,e.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,a=t.elements,r=1/Zr.setFromMatrixColumn(t,0).length(),u=1/Zr.setFromMatrixColumn(t,1).length(),c=1/Zr.setFromMatrixColumn(t,2).length();return e[0]=a[0]*r,e[1]=a[1]*r,e[2]=a[2]*r,e[3]=0,e[4]=a[4]*u,e[5]=a[5]*u,e[6]=a[6]*u,e[7]=0,e[8]=a[8]*c,e[9]=a[9]*c,e[10]=a[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,a=t.x,r=t.y,u=t.z,c=Math.cos(a),h=Math.sin(a),p=Math.cos(r),d=Math.sin(r),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const x=c*g,v=c*_,b=h*g,E=h*_;e[0]=p*g,e[4]=-p*_,e[8]=d,e[1]=v+b*d,e[5]=x-E*d,e[9]=-h*p,e[2]=E-x*d,e[6]=b+v*d,e[10]=c*p}else if(t.order==="YXZ"){const x=p*g,v=p*_,b=d*g,E=d*_;e[0]=x+E*h,e[4]=b*h-v,e[8]=c*d,e[1]=c*_,e[5]=c*g,e[9]=-h,e[2]=v*h-b,e[6]=E+x*h,e[10]=c*p}else if(t.order==="ZXY"){const x=p*g,v=p*_,b=d*g,E=d*_;e[0]=x-E*h,e[4]=-c*_,e[8]=b+v*h,e[1]=v+b*h,e[5]=c*g,e[9]=E-x*h,e[2]=-c*d,e[6]=h,e[10]=c*p}else if(t.order==="ZYX"){const x=c*g,v=c*_,b=h*g,E=h*_;e[0]=p*g,e[4]=b*d-v,e[8]=x*d+E,e[1]=p*_,e[5]=E*d+x,e[9]=v*d-b,e[2]=-d,e[6]=h*p,e[10]=c*p}else if(t.order==="YZX"){const x=c*p,v=c*d,b=h*p,E=h*d;e[0]=p*g,e[4]=E-x*_,e[8]=b*_+v,e[1]=_,e[5]=c*g,e[9]=-h*g,e[2]=-d*g,e[6]=v*_+b,e[10]=x-E*_}else if(t.order==="XZY"){const x=c*p,v=c*d,b=h*p,E=h*d;e[0]=p*g,e[4]=-_,e[8]=d*g,e[1]=x*_+E,e[5]=c*g,e[9]=v*_-b,e[2]=b*_-v,e[6]=h*g,e[10]=E*_+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nE,t,iE)}lookAt(t,e,a){const r=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),gs.crossVectors(a,si),gs.lengthSq()===0&&(Math.abs(a.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),gs.crossVectors(a,si)),gs.normalize(),hc.crossVectors(si,gs),r[0]=gs.x,r[4]=hc.x,r[8]=si.x,r[1]=gs.y,r[5]=hc.y,r[9]=si.y,r[2]=gs.z,r[6]=hc.z,r[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,u=this.elements,c=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],x=a[9],v=a[13],b=a[2],E=a[6],M=a[10],y=a[14],D=a[3],L=a[7],N=a[11],z=a[15],B=r[0],U=r[4],Z=r[8],C=r[12],R=r[1],V=r[5],K=r[9],Q=r[13],ft=r[2],at=r[6],P=r[10],H=r[14],et=r[3],Et=r[7],St=r[11],F=r[15];return u[0]=c*B+h*R+p*ft+d*et,u[4]=c*U+h*V+p*at+d*Et,u[8]=c*Z+h*K+p*P+d*St,u[12]=c*C+h*Q+p*H+d*F,u[1]=g*B+_*R+x*ft+v*et,u[5]=g*U+_*V+x*at+v*Et,u[9]=g*Z+_*K+x*P+v*St,u[13]=g*C+_*Q+x*H+v*F,u[2]=b*B+E*R+M*ft+y*et,u[6]=b*U+E*V+M*at+y*Et,u[10]=b*Z+E*K+M*P+y*St,u[14]=b*C+E*Q+M*H+y*F,u[3]=D*B+L*R+N*ft+z*et,u[7]=D*U+L*V+N*at+z*Et,u[11]=D*Z+L*K+N*P+z*St,u[15]=D*C+L*Q+N*H+z*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[4],r=t[8],u=t[12],c=t[1],h=t[5],p=t[9],d=t[13],g=t[2],_=t[6],x=t[10],v=t[14],b=t[3],E=t[7],M=t[11],y=t[15],D=p*v-d*x,L=h*v-d*_,N=h*x-p*_,z=c*v-d*g,B=c*x-p*g,U=c*_-h*g;return e*(E*D-M*L+y*N)-a*(b*D-M*z+y*B)+r*(b*L-E*z+y*U)-u*(b*N-E*B+M*U)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=a),this}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=t[9],x=t[10],v=t[11],b=t[12],E=t[13],M=t[14],y=t[15],D=_*M*d-E*x*d+E*p*v-h*M*v-_*p*y+h*x*y,L=b*x*d-g*M*d-b*p*v+c*M*v+g*p*y-c*x*y,N=g*E*d-b*_*d+b*h*v-c*E*v-g*h*y+c*_*y,z=b*_*p-g*E*p-b*h*x+c*E*x+g*h*M-c*_*M,B=e*D+a*L+r*N+u*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return t[0]=D*U,t[1]=(E*x*u-_*M*u-E*r*v+a*M*v+_*r*y-a*x*y)*U,t[2]=(h*M*u-E*p*u+E*r*d-a*M*d-h*r*y+a*p*y)*U,t[3]=(_*p*u-h*x*u-_*r*d+a*x*d+h*r*v-a*p*v)*U,t[4]=L*U,t[5]=(g*M*u-b*x*u+b*r*v-e*M*v-g*r*y+e*x*y)*U,t[6]=(b*p*u-c*M*u-b*r*d+e*M*d+c*r*y-e*p*y)*U,t[7]=(c*x*u-g*p*u+g*r*d-e*x*d-c*r*v+e*p*v)*U,t[8]=N*U,t[9]=(b*_*u-g*E*u-b*a*v+e*E*v+g*a*y-e*_*y)*U,t[10]=(c*E*u-b*h*u+b*a*d-e*E*d-c*a*y+e*h*y)*U,t[11]=(g*h*u-c*_*u-g*a*d+e*_*d+c*a*v-e*h*v)*U,t[12]=z*U,t[13]=(g*E*r-b*_*r+b*a*x-e*E*x-g*a*M+e*_*M)*U,t[14]=(b*h*r-c*E*r-b*a*p+e*E*p+c*a*M-e*h*M)*U,t[15]=(c*_*r-g*h*r+g*a*p-e*_*p-c*a*x+e*h*x)*U,this}scale(t){const e=this.elements,a=t.x,r=t.y,u=t.z;return e[0]*=a,e[4]*=r,e[8]*=u,e[1]*=a,e[5]*=r,e[9]*=u,e[2]*=a,e[6]*=r,e[10]*=u,e[3]*=a,e[7]*=r,e[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,a,r))}makeTranslation(t,e,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,a,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,e,-a,0,0,a,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,0,a,0,0,1,0,0,-a,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,0,a,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const a=Math.cos(e),r=Math.sin(e),u=1-a,c=t.x,h=t.y,p=t.z,d=u*c,g=u*h;return this.set(d*c+a,d*h-r*p,d*p+r*h,0,d*h+r*p,g*h+a,g*p-r*c,0,d*p-r*h,g*p+r*c,u*p*p+a,0,0,0,0,1),this}makeScale(t,e,a){return this.set(t,0,0,0,0,e,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,e,a,r,u,c){return this.set(1,a,u,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,a){const r=this.elements,u=e._x,c=e._y,h=e._z,p=e._w,d=u+u,g=c+c,_=h+h,x=u*d,v=u*g,b=u*_,E=c*g,M=c*_,y=h*_,D=p*d,L=p*g,N=p*_,z=a.x,B=a.y,U=a.z;return r[0]=(1-(E+y))*z,r[1]=(v+N)*z,r[2]=(b-L)*z,r[3]=0,r[4]=(v-N)*B,r[5]=(1-(x+y))*B,r[6]=(M+D)*B,r[7]=0,r[8]=(b+L)*U,r[9]=(M-D)*U,r[10]=(1-(x+E))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,a){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return a.set(1,1,1),e.identity(),this;let u=Zr.set(r[0],r[1],r[2]).length();const c=Zr.set(r[4],r[5],r[6]).length(),h=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(u=-u),Li.copy(this);const d=1/u,g=1/c,_=1/h;return Li.elements[0]*=d,Li.elements[1]*=d,Li.elements[2]*=d,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=_,Li.elements[9]*=_,Li.elements[10]*=_,e.setFromRotationMatrix(Li),a.x=u,a.y=c,a.z=h,this}makePerspective(t,e,a,r,u,c,h=$i,p=!1){const d=this.elements,g=2*u/(e-t),_=2*u/(a-r),x=(e+t)/(e-t),v=(a+r)/(a-r);let b,E;if(p)b=u/(c-u),E=c*u/(c-u);else if(h===$i)b=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(h===Kc)b=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,a,r,u,c,h=$i,p=!1){const d=this.elements,g=2/(e-t),_=2/(a-r),x=-(e+t)/(e-t),v=-(a+r)/(a-r);let b,E;if(p)b=1/(c-u),E=c/(c-u);else if(h===$i)b=-2/(c-u),E=-(c+u)/(c-u);else if(h===Kc)b=-1/(c-u),E=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=_,d[9]=0,d[13]=v,d[2]=0,d[6]=0,d[10]=b,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<16;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<16;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t[e+9]=a[9],t[e+10]=a[10],t[e+11]=a[11],t[e+12]=a[12],t[e+13]=a[13],t[e+14]=a[14],t[e+15]=a[15],t}};const Zr=new ut,Li=new mn,nE=new ut(0,0,0),iE=new ut(1,1,1),gs=new ut,hc=new ut,si=new ut,Fx=new mn,Px=new Gl;let Xl=class by{constructor(t=0,e=0,a=0,r=by.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,a,r=this._order){return this._x=t,this._y=e,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,a=!0){const r=t.elements,u=r[0],c=r[4],h=r[8],p=r[1],d=r[5],g=r[9],_=r[2],x=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,v),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,a){return Fx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fx,e,a)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Px.setFromEuler(this),this.setFromQuaternion(Px,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xl.DEFAULT_ORDER="XYZ";let Ey=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},aE=0;const Bx=new ut,$r=new Gl,ba=new mn,fc=new ut,Al=new ut,sE=new ut,rE=new Gl,Ix=new ut(1,0,0),Hx=new ut(0,1,0),Vx=new ut(0,0,1),Gx={type:"added"},oE={type:"removed"},Kr={type:"childadded",child:null},Rd={type:"childremoved",child:null};let Hi=class Yc extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yc.DEFAULT_UP.clone();const t=new ut,e=new Xl,a=new Gl,r=new ut(1,1,1);function u(){a.setFromEuler(e,!1)}function c(){e.setFromQuaternion(a,void 0,!1)}e._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mn},normalMatrix:{value:new ge}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=Yc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ey,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,e){return $r.setFromAxisAngle(t,e),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(Ix,t)}rotateY(t){return this.rotateOnAxis(Hx,t)}rotateZ(t){return this.rotateOnAxis(Vx,t)}translateOnAxis(t,e){return Bx.copy(t).applyQuaternion(this.quaternion),this.position.add(Bx.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ix,t)}translateY(t){return this.translateOnAxis(Hx,t)}translateZ(t){return this.translateOnAxis(Vx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(t,e,a){t.isVector3?fc.copy(t):fc.set(t,e,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(Al,fc,this.up):ba.lookAt(fc,Al,this.up),this.quaternion.setFromRotationMatrix(ba),r&&(ba.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(ba),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gx),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oE),Rd.child=t,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gx),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,a=[]){this[t]===e&&a.push(this);const r=this.children;for(let u=0,c=r.length;u<c;u++)r[u].getObjectsByProperty(t,e,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,t,sE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,rE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].updateMatrixWorld(t)}updateWorldMatrix(t,e){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let u=0,c=r.length;u<c;u++)r[u].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",a={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];u(t.shapes,_)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(u(t.materials,this.material[p]));r.material=h}else r.material=u(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];r.animations.push(u(t.animations,p))}}if(e){const h=c(t.geometries),p=c(t.materials),d=c(t.textures),g=c(t.images),_=c(t.shapes),x=c(t.skeletons),v=c(t.animations),b=c(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),v.length>0&&(a.animations=v),b.length>0&&(a.nodes=b)}return a.object=r,a;function c(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}};Hi.DEFAULT_UP=new ut(0,1,0);Hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new ut,Ea=new ut,Dd=new ut,Aa=new ut,Qr=new ut,Jr=new ut,kx=new ut,Ud=new ut,Ld=new ut,Nd=new ut,Od=new en,zd=new en,Fd=new en;class Pi{constructor(t=new ut,e=new ut,a=new ut){this.a=t,this.b=e,this.c=a}static getNormal(t,e,a,r){r.subVectors(a,e),Ni.subVectors(t,e),r.cross(Ni);const u=r.lengthSq();return u>0?r.multiplyScalar(1/Math.sqrt(u)):r.set(0,0,0)}static getBarycoord(t,e,a,r,u){Ni.subVectors(r,e),Ea.subVectors(a,e),Dd.subVectors(t,e);const c=Ni.dot(Ni),h=Ni.dot(Ea),p=Ni.dot(Dd),d=Ea.dot(Ea),g=Ea.dot(Dd),_=c*d-h*h;if(_===0)return u.set(0,0,0),null;const x=1/_,v=(d*p-h*g)*x,b=(c*g-h*p)*x;return u.set(1-v-b,b,v)}static containsPoint(t,e,a,r){return this.getBarycoord(t,e,a,r,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,e,a,r,u,c,h,p){return this.getBarycoord(t,e,a,r,Aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Aa.x),p.addScaledVector(c,Aa.y),p.addScaledVector(h,Aa.z),p)}static getInterpolatedAttribute(t,e,a,r,u,c){return Od.setScalar(0),zd.setScalar(0),Fd.setScalar(0),Od.fromBufferAttribute(t,e),zd.fromBufferAttribute(t,a),Fd.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(Od,u.x),c.addScaledVector(zd,u.y),c.addScaledVector(Fd,u.z),c}static isFrontFacing(t,e,a,r){return Ni.subVectors(a,e),Ea.subVectors(t,e),Ni.cross(Ea).dot(r)<0}set(t,e,a){return this.a.copy(t),this.b.copy(e),this.c.copy(a),this}setFromPointsAndIndices(t,e,a,r){return this.a.copy(t[e]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,a,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Ni.cross(Ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,a,r,u){return Pi.getInterpolation(t,this.a,this.b,this.c,e,a,r,u)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const a=this.a,r=this.b,u=this.c;let c,h;Qr.subVectors(r,a),Jr.subVectors(u,a),Ud.subVectors(t,a);const p=Qr.dot(Ud),d=Jr.dot(Ud);if(p<=0&&d<=0)return e.copy(a);Ld.subVectors(t,r);const g=Qr.dot(Ld),_=Jr.dot(Ld);if(g>=0&&_<=g)return e.copy(r);const x=p*_-g*d;if(x<=0&&p>=0&&g<=0)return c=p/(p-g),e.copy(a).addScaledVector(Qr,c);Nd.subVectors(t,u);const v=Qr.dot(Nd),b=Jr.dot(Nd);if(b>=0&&v<=b)return e.copy(u);const E=v*d-p*b;if(E<=0&&d>=0&&b<=0)return h=d/(d-b),e.copy(a).addScaledVector(Jr,h);const M=g*b-v*_;if(M<=0&&_-g>=0&&v-b>=0)return kx.subVectors(u,r),h=(_-g)/(_-g+(v-b)),e.copy(r).addScaledVector(kx,h);const y=1/(M+E+x);return c=E*y,h=x*y,e.copy(a).addScaledVector(Qr,c).addScaledVector(Jr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Pd(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}let ze=class{constructor(t,e,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,a)}set(t,e,a){if(e===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,a,r=Te.workingColorSpace){return this.r=t,this.g=e,this.b=a,Te.colorSpaceToWorking(this,r),this}setHSL(t,e,a,r=Te.workingColorSpace){if(t=Yb(t,1),e=Me(e,0,1),a=Me(a,0,1),e===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+e):a+e-a*e,c=2*a-u;this.r=Pd(c,u,t+1/3),this.g=Pd(c,u,t),this.b=Pd(c,u,t-1/3)}return Te.colorSpaceToWorking(this,r),this}setStyle(t,e=Mi){function a(u){u!==void 0&&parseFloat(u)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=r[1],h=r[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,e);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,e);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=r[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(u,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mi){const a=Ay[t.toLowerCase()];return a!==void 0?this.setHex(a,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Te.workingToColorSpace(zn.copy(this),t),Math.round(Me(zn.r*255,0,255))*65536+Math.round(Me(zn.g*255,0,255))*256+Math.round(Me(zn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(zn.copy(this),e);const a=zn.r,r=zn.g,u=zn.b,c=Math.max(a,r,u),h=Math.min(a,r,u);let p,d;const g=(h+c)/2;if(h===c)p=0,d=0;else{const _=c-h;switch(d=g<=.5?_/(c+h):_/(2-c-h),c){case a:p=(r-u)/_+(r<u?6:0);break;case r:p=(u-a)/_+2;break;case u:p=(a-r)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(zn.copy(this),e),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=Mi){Te.workingToColorSpace(zn.copy(this),t);const e=zn.r,a=zn.g,r=zn.b;return t!==Mi?`color(${t} ${e.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,e,a){return this.getHSL(_s),this.setHSL(_s.h+t,_s.s+e,_s.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,a){return this.r=t.r+(e.r-t.r)*a,this.g=t.g+(e.g-t.g)*a,this.b=t.b+(e.b-t.b)*a,this}lerpHSL(t,e){this.getHSL(_s),t.getHSL(dc);const a=vd(_s.h,dc.h,e),r=vd(_s.s,dc.s,e),u=vd(_s.l,dc.l,e);return this.setHSL(a,r,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,a=this.g,r=this.b,u=t.elements;return this.r=u[0]*e+u[3]*a+u[6]*r,this.g=u[1]*e+u[4]*a+u[7]*r,this.b=u[2]*e+u[5]*a+u[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const zn=new ze;ze.NAMES=Ay;let lE=0,eh=class extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Vl(),this.name="",this.type="Material",this.blending=go,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dp,this.blendDst=pp,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const a=t[e];if(a===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(a.blending=this.blending),this.side!==Ts&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==dp&&(a.blendSrc=this.blendSrc),this.blendDst!==pp&&(a.blendDst=this.blendDst),this.blendEquation!==tr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(e){const u=r(t.textures),c=r(t.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let a=null;if(e!==null){const r=e.length;a=new Array(r);for(let u=0;u!==r;++u)a[u]=e[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Ty extends eh{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xl,this.combine=ny,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new ut,pc=new Xe;let uE=0,Ji=class{constructor(t,e,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=a,this.usage=Rx,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,a){t*=this.itemSize,a*=e.itemSize;for(let r=0,u=this.itemSize;r<u;r++)this.array[t+r]=e.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,a=this.count;e<a;e++)pc.fromBufferAttribute(this,e),pc.applyMatrix3(t),this.setXY(e,pc.x,pc.y);else if(this.itemSize===3)for(let e=0,a=this.count;e<a;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix3(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let e=0,a=this.count;e<a;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let a=this.array[t*this.itemSize+e];return this.normalized&&(a=Ml(a,this.array)),a}setComponent(t,e,a){return this.normalized&&(a=$n(a,this.array)),this.array[t*this.itemSize+e]=a,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ml(e,this.array)),e}setX(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ml(e,this.array)),e}setY(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ml(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ml(e,this.array)),e}setW(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,a){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),a=$n(a,this.array)),this.array[t+0]=e,this.array[t+1]=a,this}setXYZ(t,e,a,r){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),a=$n(a,this.array),r=$n(r,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,e,a,r,u){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),a=$n(a,this.array),r=$n(r,this.array),u=$n(u,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rx&&(t.usage=this.usage),t}},wy=class extends Ji{constructor(t,e,a){super(new Uint16Array(t),e,a)}},Cy=class extends Ji{constructor(t,e,a){super(new Uint32Array(t),e,a)}},za=class extends Ji{constructor(t,e,a){super(new Float32Array(t),e,a)}},cE=0;const yi=new mn,Bd=new Hi,to=new ut,ri=new kl,Tl=new kl,vn=new ut;let or=class Ry extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xy(t)?Cy:wy)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,a=0){this.groups.push({start:t,count:e,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ge().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,a){return yi.makeTranslation(t,e,a),this.applyMatrix4(yi),this}scale(t,e,a){return yi.makeScale(t,e,a),this.applyMatrix4(yi),this}lookAt(t){return Bd.lookAt(t),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const a=[];for(let r=0,u=t.length;r<u;r++){const c=t[r];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new za(a,3))}else{const a=Math.min(t.length,e.count);for(let r=0;r<a;r++){const u=t[r];e.setXYZ(r,u.x,u.y,u.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const u=e[a];ri.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Em);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const a=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let u=0,c=e.length;u<c;u++){const h=e[u];Tl.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ri.min,Tl.min),ri.expandByPoint(vn),vn.addVectors(ri.max,Tl.max),ri.expandByPoint(vn)):(ri.expandByPoint(Tl.min),ri.expandByPoint(Tl.max))}ri.getCenter(a);let r=0;for(let u=0,c=t.count;u<c;u++)vn.fromBufferAttribute(t,u),r=Math.max(r,a.distanceToSquared(vn));if(e)for(let u=0,c=e.length;u<c;u++){const h=e[u],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)vn.fromBufferAttribute(h,d),p&&(to.fromBufferAttribute(t,d),vn.add(to)),r=Math.max(r,a.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=e.position,r=e.normal,u=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let Z=0;Z<a.count;Z++)h[Z]=new ut,p[Z]=new ut;const d=new ut,g=new ut,_=new ut,x=new Xe,v=new Xe,b=new Xe,E=new ut,M=new ut;function y(Z,C,R){d.fromBufferAttribute(a,Z),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,R),x.fromBufferAttribute(u,Z),v.fromBufferAttribute(u,C),b.fromBufferAttribute(u,R),g.sub(d),_.sub(d),v.sub(x),b.sub(x);const V=1/(v.x*b.y-b.x*v.y);isFinite(V)&&(E.copy(g).multiplyScalar(b.y).addScaledVector(_,-v.y).multiplyScalar(V),M.copy(_).multiplyScalar(v.x).addScaledVector(g,-b.x).multiplyScalar(V),h[Z].add(E),h[C].add(E),h[R].add(E),p[Z].add(M),p[C].add(M),p[R].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let Z=0,C=D.length;Z<C;++Z){const R=D[Z],V=R.start,K=R.count;for(let Q=V,ft=V+K;Q<ft;Q+=3)y(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const L=new ut,N=new ut,z=new ut,B=new ut;function U(Z){z.fromBufferAttribute(r,Z),B.copy(z);const C=h[Z];L.copy(C),L.sub(z.multiplyScalar(z.dot(C))).normalize(),N.crossVectors(B,C);const V=N.dot(p[Z])<0?-1:1;c.setXYZW(Z,L.x,L.y,L.z,V)}for(let Z=0,C=D.length;Z<C;++Z){const R=D[Z],V=R.start,K=R.count;for(let Q=V,ft=V+K;Q<ft;Q+=3)U(t.getX(Q+0)),U(t.getX(Q+1)),U(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ji(new Float32Array(e.count*3),3),this.setAttribute("normal",a);else for(let x=0,v=a.count;x<v;x++)a.setXYZ(x,0,0,0);const r=new ut,u=new ut,c=new ut,h=new ut,p=new ut,d=new ut,g=new ut,_=new ut;if(t)for(let x=0,v=t.count;x<v;x+=3){const b=t.getX(x+0),E=t.getX(x+1),M=t.getX(x+2);r.fromBufferAttribute(e,b),u.fromBufferAttribute(e,E),c.fromBufferAttribute(e,M),g.subVectors(c,u),_.subVectors(r,u),g.cross(_),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,M),h.add(g),p.add(g),d.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let x=0,v=e.count;x<v;x+=3)r.fromBufferAttribute(e,x+0),u.fromBufferAttribute(e,x+1),c.fromBufferAttribute(e,x+2),g.subVectors(c,u),_.subVectors(r,u),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,a=t.count;e<a;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,_=h.normalized,x=new d.constructor(p.length*g);let v=0,b=0;for(let E=0,M=p.length;E<M;E++){h.isInterleavedBufferAttribute?v=p[E]*h.data.stride+h.offset:v=p[E]*g;for(let y=0;y<g;y++)x[b++]=d[v++]}return new Ji(x,g,_)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ry,a=this.index.array,r=this.attributes;for(const h in r){const p=r[h],d=t(p,a);e.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const p=[],d=u[h];for(let g=0,_=d.length;g<_;g++){const x=d[g],v=t(x,a);p.push(v)}e.morphAttributes[h]=p}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const d=c[h];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const r={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,x=d.length;_<x;_++){const v=d[_];g.push(v.toJSON(t.data))}g.length>0&&(r[p]=g,u=!0)}u&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const d in r){const g=r[d];this.setAttribute(d,g.clone(e))}const u=t.morphAttributes;for(const d in u){const g=[],_=u[d];for(let x=0,v=_.length;x<v;x++)g.push(_[x].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,g=c.length;d<g;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const Xx=new mn,Ys=new eE,mc=new Em,Wx=new ut,gc=new ut,_c=new ut,xc=new ut,Id=new ut,vc=new ut,qx=new ut,yc=new ut;class Ia extends Hi{constructor(t=new or,e=new Ty){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=r.length;u<c;u++){const h=r[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,e){const a=this.geometry,r=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;e.fromBufferAttribute(r,t);const h=this.morphTargetInfluences;if(u&&h){vc.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const g=h[p],_=u[p];g!==0&&(Id.fromBufferAttribute(_,t),c?vc.addScaledVector(Id,g):vc.addScaledVector(Id.sub(e),g))}e.add(vc)}return e}raycast(t,e){const a=this.geometry,r=this.material,u=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),mc.copy(a.boundingSphere),mc.applyMatrix4(u),Ys.copy(t.ray).recast(t.near),!(mc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(mc,Wx)===null||Ys.origin.distanceToSquared(Wx)>(t.far-t.near)**2))&&(Xx.copy(u).invert(),Ys.copy(t.ray).applyMatrix4(Xx),!(a.boundingBox!==null&&Ys.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,e,Ys)))}_computeIntersections(t,e,a){let r;const u=this.geometry,c=this.material,h=u.index,p=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,v=u.drawRange;if(h!==null)if(Array.isArray(c))for(let b=0,E=x.length;b<E;b++){const M=x[b],y=c[M.materialIndex],D=Math.max(M.start,v.start),L=Math.min(h.count,Math.min(M.start+M.count,v.start+v.count));for(let N=D,z=L;N<z;N+=3){const B=h.getX(N),U=h.getX(N+1),Z=h.getX(N+2);r=Sc(this,y,t,a,d,g,_,B,U,Z),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=M.materialIndex,e.push(r))}}else{const b=Math.max(0,v.start),E=Math.min(h.count,v.start+v.count);for(let M=b,y=E;M<y;M+=3){const D=h.getX(M),L=h.getX(M+1),N=h.getX(M+2);r=Sc(this,c,t,a,d,g,_,D,L,N),r&&(r.faceIndex=Math.floor(M/3),e.push(r))}}else if(p!==void 0)if(Array.isArray(c))for(let b=0,E=x.length;b<E;b++){const M=x[b],y=c[M.materialIndex],D=Math.max(M.start,v.start),L=Math.min(p.count,Math.min(M.start+M.count,v.start+v.count));for(let N=D,z=L;N<z;N+=3){const B=N,U=N+1,Z=N+2;r=Sc(this,y,t,a,d,g,_,B,U,Z),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=M.materialIndex,e.push(r))}}else{const b=Math.max(0,v.start),E=Math.min(p.count,v.start+v.count);for(let M=b,y=E;M<y;M+=3){const D=M,L=M+1,N=M+2;r=Sc(this,c,t,a,d,g,_,D,L,N),r&&(r.faceIndex=Math.floor(M/3),e.push(r))}}}}function hE(o,t,e,a,r,u,c,h){let p;if(t.side===Kn?p=a.intersectTriangle(c,u,r,!0,h):p=a.intersectTriangle(r,u,c,t.side===Ts,h),p===null)return null;yc.copy(h),yc.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(yc);return d<e.near||d>e.far?null:{distance:d,point:yc.clone(),object:o}}function Sc(o,t,e,a,r,u,c,h,p,d){o.getVertexPosition(h,gc),o.getVertexPosition(p,_c),o.getVertexPosition(d,xc);const g=hE(o,t,e,a,gc,_c,xc,qx);if(g){const _=new ut;Pi.getBarycoord(qx,gc,_c,xc,_),r&&(g.uv=Pi.getInterpolatedAttribute(r,h,p,d,_,new Xe)),u&&(g.uv1=Pi.getInterpolatedAttribute(u,h,p,d,_,new Xe)),c&&(g.normal=Pi.getInterpolatedAttribute(c,h,p,d,_,new ut),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:p,c:d,normal:new ut,materialIndex:0};Pi.getNormal(gc,_c,xc,x.normal),g.face=x,g.barycoord=_}return g}class Wl extends or{constructor(t=1,e=1,a=1,r=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:a,widthSegments:r,heightSegments:u,depthSegments:c};const h=this;r=Math.floor(r),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],g=[],_=[];let x=0,v=0;b("z","y","x",-1,-1,a,e,t,c,u,0),b("z","y","x",1,-1,a,e,-t,c,u,1),b("x","z","y",1,1,t,a,e,r,c,2),b("x","z","y",1,-1,t,a,-e,r,c,3),b("x","y","z",1,-1,t,e,a,r,u,4),b("x","y","z",-1,-1,t,e,-a,r,u,5),this.setIndex(p),this.setAttribute("position",new za(d,3)),this.setAttribute("normal",new za(g,3)),this.setAttribute("uv",new za(_,2));function b(E,M,y,D,L,N,z,B,U,Z,C){const R=N/U,V=z/Z,K=N/2,Q=z/2,ft=B/2,at=U+1,P=Z+1;let H=0,et=0;const Et=new ut;for(let St=0;St<P;St++){const F=St*V-Q;for(let nt=0;nt<at;nt++){const xt=nt*R-K;Et[E]=xt*D,Et[M]=F*L,Et[y]=ft,d.push(Et.x,Et.y,Et.z),Et[E]=0,Et[M]=0,Et[y]=B>0?1:-1,g.push(Et.x,Et.y,Et.z),_.push(nt/U),_.push(1-St/Z),H+=1}}for(let St=0;St<Z;St++)for(let F=0;F<U;F++){const nt=x+F+at*St,xt=x+F+at*(St+1),Rt=x+(F+1)+at*(St+1),It=x+(F+1)+at*St;p.push(nt,xt,It),p.push(xt,Rt,It),et+=6}h.addGroup(v,et,C),v+=et,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bo(o){const t={};for(const e in o){t[e]={};for(const a in o[e]){const r=o[e][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][a]=null):t[e][a]=r.clone():Array.isArray(r)?t[e][a]=r.slice():t[e][a]=r}}return t}function Gn(o){const t={};for(let e=0;e<o.length;e++){const a=bo(o[e]);for(const r in a)t[r]=a[r]}return t}function fE(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Dy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const dE={clone:bo,merge:Gn};var pE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let na=class extends eh{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pE,this.fragmentShader=mE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bo(t.uniforms),this.uniformsGroups=fE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(e.extensions=a),e}};class Uy extends Hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xs=new ut,Yx=new Xe,jx=new Xe;class bi extends Uy{constructor(t=50,e=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=am*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return am*2*Math.atan(Math.tan(xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,a){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,e){return this.getViewBounds(t,Yx,jx),e.subVectors(jx,Yx)}setViewOffset(t,e,a,r,u,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xd*.5*this.fov)/this.zoom,a=2*e,r=this.aspect*a,u=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*r/p,e-=c.offsetY*a/d,r*=c.width/p,a*=c.height/d}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+r,e,e-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const eo=-90,no=1;class gE extends Hi{constructor(t,e,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bi(eo,no,t,e);r.layers=this.layers,this.add(r);const u=new bi(eo,no,t,e);u.layers=this.layers,this.add(u);const c=new bi(eo,no,t,e);c.layers=this.layers,this.add(c);const h=new bi(eo,no,t,e);h.layers=this.layers,this.add(h);const p=new bi(eo,no,t,e);p.layers=this.layers,this.add(p);const d=new bi(eo,no,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[a,r,u,c,h,p]=e;for(const d of e)this.remove(d);if(t===$i)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Kc)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,p,d,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(e,u),t.setRenderTarget(a,1,r),t.render(e,c),t.setRenderTarget(a,2,r),t.render(e,h),t.setRenderTarget(a,3,r),t.render(e,p),t.setRenderTarget(a,4,r),t.render(e,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,r),t.render(e,g),t.setRenderTarget(_,x,v),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class Ly extends Vi{constructor(t=[],e=sr,a,r,u,c,h,p,d,g){super(t,e,a,r,u,c,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ny extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new Ly(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wl(5,5,5),u=new na({name:"CubemapFromEquirect",uniforms:bo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Kn,blending:Na});u.uniforms.tEquirect.value=e;const c=new Ia(r,u),h=e.minFilter;return e.minFilter===nr&&(e.minFilter=In),new gE(1,10,this).update(t,c),e.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,a=!0,r=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,a,r);t.setRenderTarget(u)}}class Mc extends Hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _E={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const a of t.hand.values())this._getHandJoint(e,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,a){let r=null,u=null,c=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const E of t.hand.values()){const M=e.getJointPose(E,a),y=this._getHandJoint(d,E);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],x=g.position.distanceTo(_.position),v=.02,b=.005;d.inputState.pinching&&x>v+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&x<=v-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=e.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(r=e.getPose(t.targetRaySpace,a),r===null&&u!==null&&(r=u),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return h!==null&&(h.visible=r!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const a=new Mc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[e.jointName]=a,t.add(a)}return t.joints[e.jointName]}}class xE extends Vi{constructor(t=null,e=1,a=1,r,u,c,h,p,d=Un,g=Un,_,x){super(null,c,h,p,d,g,r,u,_,x),this.isDataTexture=!0,this.image={data:t,width:e,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new ut,vE=new ut,yE=new ge;let Js=class{constructor(t=new ut(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,a,r){return this.normal.set(t,e,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,a){const r=Vd.subVectors(a,e).cross(vE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const a=t.delta(Vd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/r;return u<0||u>1?null:e.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const e=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return e<0&&a>0||a<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const a=e||yE.getNormalMatrix(t),r=this.coplanarPoint(Vd).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const js=new Em,SE=new Xe(.5,.5),bc=new ut;class Am{constructor(t=new Js,e=new Js,a=new Js,r=new Js,u=new Js,c=new Js){this.planes=[t,e,a,r,u,c]}set(t,e,a,r,u,c){const h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(a),h[3].copy(r),h[4].copy(u),h[5].copy(c),this}copy(t){const e=this.planes;for(let a=0;a<6;a++)e[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,e=$i,a=!1){const r=this.planes,u=t.elements,c=u[0],h=u[1],p=u[2],d=u[3],g=u[4],_=u[5],x=u[6],v=u[7],b=u[8],E=u[9],M=u[10],y=u[11],D=u[12],L=u[13],N=u[14],z=u[15];if(r[0].setComponents(d-c,v-g,y-b,z-D).normalize(),r[1].setComponents(d+c,v+g,y+b,z+D).normalize(),r[2].setComponents(d+h,v+_,y+E,z+L).normalize(),r[3].setComponents(d-h,v-_,y-E,z-L).normalize(),a)r[4].setComponents(p,x,M,N).normalize(),r[5].setComponents(d-p,v-x,y-M,z-N).normalize();else if(r[4].setComponents(d-p,v-x,y-M,z-N).normalize(),e===$i)r[5].setComponents(d+p,v+x,y+M,z+N).normalize();else if(e===Kc)r[5].setComponents(p,x,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(t){js.center.set(0,0,0);const e=SE.distanceTo(t.center);return js.radius=.7071067811865476+e,js.applyMatrix4(t.matrixWorld),this.intersectsSphere(js)}intersectsSphere(t){const e=this.planes,a=t.center,r=-t.radius;for(let u=0;u<6;u++)if(e[u].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let a=0;a<6;a++){const r=e[a];if(bc.x=r.normal.x>0?t.max.x:t.min.x,bc.y=r.normal.y>0?t.max.y:t.min.y,bc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let a=0;a<6;a++)if(e[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Il extends Vi{constructor(t,e,a=ea,r,u,c,h=Un,p=Un,d,g=Ba,_=1){if(g!==Ba&&g!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:e,depth:_};super(x,r,u,c,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ME extends Il{constructor(t,e=ea,a=sr,r,u,c=Un,h=Un,p,d=Ba){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,e,a,r,u,c,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Oy extends Vi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nh extends or{constructor(t=1,e=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:a,heightSegments:r};const u=t/2,c=e/2,h=Math.floor(a),p=Math.floor(r),d=h+1,g=p+1,_=t/h,x=e/p,v=[],b=[],E=[],M=[];for(let y=0;y<g;y++){const D=y*x-c;for(let L=0;L<d;L++){const N=L*_-u;b.push(N,-D,0),E.push(0,0,1),M.push(L/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let D=0;D<h;D++){const L=D+d*y,N=D+d*(y+1),z=D+1+d*(y+1),B=D+1+d*y;v.push(L,N,B),v.push(N,z,B)}this.setIndex(v),this.setAttribute("position",new za(b,3)),this.setAttribute("normal",new za(E,3)),this.setAttribute("uv",new za(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nh(t.width,t.height,t.widthSegments,t.heightSegments)}}class bE extends na{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class EE extends eh{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class AE extends eh{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zy extends Hi{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Gd=new mn,Zx=new ut,$x=new ut;class TE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Am,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,a=this.matrix;Zx.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zx),$x.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($x),e.updateMatrixWorld(),Gd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd,e.coordinateSystem,e.reversedDepth),e.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Gd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tm extends Uy{constructor(t=-1,e=1,a=1,r=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=a,this.bottom=r,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,a,r,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let u=a-t,c=a+t,h=r+e,p=r-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class wE extends TE{constructor(){super(new Tm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class CE extends zy{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hi.DEFAULT_UP),this.updateMatrix(),this.target=new Hi,this.shadow=new wE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class RE extends zy{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class DE extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Kx(o,t,e,a){const r=UE(a);switch(e){case my:return o*t;case _y:return o*t/r.components*r.byteLength;case xm:return o*t/r.components*r.byteLength;case So:return o*t*2/r.components*r.byteLength;case vm:return o*t*2/r.components*r.byteLength;case gy:return o*t*3/r.components*r.byteLength;case Bi:return o*t*4/r.components*r.byteLength;case ym:return o*t*4/r.components*r.byteLength;case Gc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case wp:case Rp:return Math.max(o,16)*Math.max(t,8)/4;case Tp:case Cp:return Math.max(o,8)*Math.max(t,8)/2;case Dp:case Up:case Np:case Op:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Lp:case zp:case Fp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Pp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ip:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Hp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Vp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Gp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case kp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Xp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Wp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case qp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Yp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case jp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Zp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case $p:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Kp:case Qp:case Jp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case tm:case em:return Math.ceil(o/4)*Math.ceil(t/4)*8;case nm:case im:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function UE(o){switch(o){case ui:case hy:return{byteLength:1,components:1};case Fl:case fy:case Pa:return{byteLength:2,components:1};case gm:case _m:return{byteLength:2,components:4};case ea:case mm:case Zi:return{byteLength:4,components:1};case dy:case py:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pm}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pm);function Fy(){let o=null,t=!1,e=null,a=null;function r(u,c){e(u,c),a=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(a=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){e=u},setContext:function(u){o=u}}}function LE(o){const t=new WeakMap;function e(h,p){const d=h.array,g=h.usage,_=d.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,d,g),h.onUploadCallback();let v;if(d instanceof Float32Array)v=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)v=o.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=o.SHORT;else if(d instanceof Uint32Array)v=o.UNSIGNED_INT;else if(d instanceof Int32Array)v=o.INT;else if(d instanceof Int8Array)v=o.BYTE;else if(d instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,d){const g=p.array,_=p.updateRanges;if(o.bindBuffer(d,h),_.length===0)o.bufferSubData(d,0,g);else{_.sort((v,b)=>v.start-b.start);let x=0;for(let v=1;v<_.length;v++){const b=_[x],E=_[v];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,_[x]=E)}_.length=x+1;for(let v=0,b=_.length;v<b;v++){const E=_[v];o.bufferSubData(d,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(o.deleteBuffer(p.buffer),t.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,e(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:r,remove:u,update:c}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OE=`#ifdef USE_ALPHAHASH
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
#endif`,zE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IE=`#ifdef USE_AOMAP
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
#endif`,HE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VE=`#ifdef USE_BATCHING
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
#endif`,GE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qE=`#ifdef USE_IRIDESCENCE
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
#endif`,YE=`#ifdef USE_BUMPMAP
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
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,n1=`#define PI 3.141592653589793
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
} // validated`,i1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y1=`#ifdef USE_GRADIENTMAP
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
}`,S1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E1=`uniform bool receiveShadow;
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
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,T1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D1=`PhysicalMaterial material;
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
#endif`,U1=`uniform sampler2D dfgLUT;
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
}`,L1=`
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G1=`#if defined( USE_POINTS_UV )
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
#endif`,k1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`#ifdef USE_MORPHTARGETS
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
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eA=`#ifdef USE_NORMALMAP
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
#endif`,nA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_A=`float getShadowMask() {
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
}`,xA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vA=`#ifdef USE_SKINNING
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
#endif`,yA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SA=`#ifdef USE_SKINNING
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
#endif`,MA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TA=`#ifdef USE_TRANSMISSION
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
#endif`,wA=`#ifdef USE_TRANSMISSION
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
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NA=`uniform sampler2D t2D;
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
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`#include <common>
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
}`,IA=`#if DEPTH_PACKING == 3200
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
}`,HA=`#define DISTANCE
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
}`,VA=`#define DISTANCE
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
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`uniform float scale;
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
}`,WA=`uniform vec3 diffuse;
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
}`,qA=`#include <common>
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
}`,YA=`uniform vec3 diffuse;
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
}`,jA=`#define LAMBERT
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
}`,ZA=`#define LAMBERT
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
}`,$A=`#define MATCAP
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
}`,KA=`#define MATCAP
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
}`,QA=`#define NORMAL
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
}`,JA=`#define NORMAL
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
}`,tT=`#define PHONG
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
}`,eT=`#define PHONG
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
}`,nT=`#define STANDARD
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
}`,iT=`#define STANDARD
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
}`,aT=`#define TOON
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
}`,sT=`#define TOON
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
}`,rT=`uniform float size;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,uT=`uniform vec3 color;
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
}`,cT=`uniform float rotation;
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
}`,hT=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:NE,alphahash_pars_fragment:OE,alphamap_fragment:zE,alphamap_pars_fragment:FE,alphatest_fragment:PE,alphatest_pars_fragment:BE,aomap_fragment:IE,aomap_pars_fragment:HE,batching_pars_vertex:VE,batching_vertex:GE,begin_vertex:kE,beginnormal_vertex:XE,bsdfs:WE,iridescence_fragment:qE,bumpmap_pars_fragment:YE,clipping_planes_fragment:jE,clipping_planes_pars_fragment:ZE,clipping_planes_pars_vertex:$E,clipping_planes_vertex:KE,color_fragment:QE,color_pars_fragment:JE,color_pars_vertex:t1,color_vertex:e1,common:n1,cube_uv_reflection_fragment:i1,defaultnormal_vertex:a1,displacementmap_pars_vertex:s1,displacementmap_vertex:r1,emissivemap_fragment:o1,emissivemap_pars_fragment:l1,colorspace_fragment:u1,colorspace_pars_fragment:c1,envmap_fragment:h1,envmap_common_pars_fragment:f1,envmap_pars_fragment:d1,envmap_pars_vertex:p1,envmap_physical_pars_fragment:A1,envmap_vertex:m1,fog_vertex:g1,fog_pars_vertex:_1,fog_fragment:x1,fog_pars_fragment:v1,gradientmap_pars_fragment:y1,lightmap_pars_fragment:S1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:b1,lights_pars_begin:E1,lights_toon_fragment:T1,lights_toon_pars_fragment:w1,lights_phong_fragment:C1,lights_phong_pars_fragment:R1,lights_physical_fragment:D1,lights_physical_pars_fragment:U1,lights_fragment_begin:L1,lights_fragment_maps:N1,lights_fragment_end:O1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:F1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:B1,map_fragment:I1,map_pars_fragment:H1,map_particle_fragment:V1,map_particle_pars_fragment:G1,metalnessmap_fragment:k1,metalnessmap_pars_fragment:X1,morphinstance_vertex:W1,morphcolor_vertex:q1,morphnormal_vertex:Y1,morphtarget_pars_vertex:j1,morphtarget_vertex:Z1,normal_fragment_begin:$1,normal_fragment_maps:K1,normal_pars_fragment:Q1,normal_pars_vertex:J1,normal_vertex:tA,normalmap_pars_fragment:eA,clearcoat_normal_fragment_begin:nA,clearcoat_normal_fragment_maps:iA,clearcoat_pars_fragment:aA,iridescence_pars_fragment:sA,opaque_fragment:rA,packing:oA,premultiplied_alpha_fragment:lA,project_vertex:uA,dithering_fragment:cA,dithering_pars_fragment:hA,roughnessmap_fragment:fA,roughnessmap_pars_fragment:dA,shadowmap_pars_fragment:pA,shadowmap_pars_vertex:mA,shadowmap_vertex:gA,shadowmask_pars_fragment:_A,skinbase_vertex:xA,skinning_pars_vertex:vA,skinning_vertex:yA,skinnormal_vertex:SA,specularmap_fragment:MA,specularmap_pars_fragment:bA,tonemapping_fragment:EA,tonemapping_pars_fragment:AA,transmission_fragment:TA,transmission_pars_fragment:wA,uv_pars_fragment:CA,uv_pars_vertex:RA,uv_vertex:DA,worldpos_vertex:UA,background_vert:LA,background_frag:NA,backgroundCube_vert:OA,backgroundCube_frag:zA,cube_vert:FA,cube_frag:PA,depth_vert:BA,depth_frag:IA,distance_vert:HA,distance_frag:VA,equirect_vert:GA,equirect_frag:kA,linedashed_vert:XA,linedashed_frag:WA,meshbasic_vert:qA,meshbasic_frag:YA,meshlambert_vert:jA,meshlambert_frag:ZA,meshmatcap_vert:$A,meshmatcap_frag:KA,meshnormal_vert:QA,meshnormal_frag:JA,meshphong_vert:tT,meshphong_frag:eT,meshphysical_vert:nT,meshphysical_frag:iT,meshtoon_vert:aT,meshtoon_frag:sT,points_vert:rT,points_frag:oT,shadow_vert:lT,shadow_frag:uT,sprite_vert:cT,sprite_frag:hT},Bt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},ji={basic:{uniforms:Gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ze(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Gn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Gn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ze(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Gn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Gn([Bt.points,Bt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Gn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Gn([Bt.common,Bt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Gn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Gn([Bt.sprite,Bt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Gn([Bt.common,Bt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Gn([Bt.lights,Bt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};ji.physical={uniforms:Gn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ec={r:0,b:0,g:0},Zs=new Xl,fT=new mn;function dT(o,t,e,a,r,u,c){const h=new ze(0);let p=u===!0?0:1,d,g,_=null,x=0,v=null;function b(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?e:t).get(N)),N}function E(L){let N=!1;const z=b(L);z===null?y(h,p):z&&z.isColor&&(y(z,1),N=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||N)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,N){const z=b(N);z&&(z.isCubeTexture||z.mapping===th)?(g===void 0&&(g=new Ia(new Wl(1,1,1),new na({name:"BackgroundCubeMaterial",uniforms:bo(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,U,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Zs.copy(N.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(fT.makeRotationFromEuler(Zs)),g.material.toneMapped=Te.getTransfer(z.colorSpace)!==Ie,(_!==z||x!==z.version||v!==o.toneMapping)&&(g.material.needsUpdate=!0,_=z,x=z.version,v=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(d===void 0&&(d=new Ia(new nh(2,2),new na({name:"BackgroundMaterial",uniforms:bo(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=z,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=Te.getTransfer(z.colorSpace)!==Ie,z.matrixAutoUpdate===!0&&z.updateMatrix(),d.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||x!==z.version||v!==o.toneMapping)&&(d.material.needsUpdate=!0,_=z,x=z.version,v=o.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function y(L,N){L.getRGB(Ec,Dy(o)),a.buffers.color.setClear(Ec.r,Ec.g,Ec.b,N,c)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,N=1){h.set(L),p=N,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,y(h,p)},render:E,addToRenderList:M,dispose:D}}function pT(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=x(null);let u=r,c=!1;function h(R,V,K,Q,ft){let at=!1;const P=_(Q,K,V);u!==P&&(u=P,d(u.object)),at=v(R,Q,K,ft),at&&b(R,Q,K,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(at||c)&&(c=!1,N(R,V,K,Q),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return o.createVertexArray()}function d(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function _(R,V,K){const Q=K.wireframe===!0;let ft=a[R.id];ft===void 0&&(ft={},a[R.id]=ft);let at=ft[V.id];at===void 0&&(at={},ft[V.id]=at);let P=at[Q];return P===void 0&&(P=x(p()),at[Q]=P),P}function x(R){const V=[],K=[],Q=[];for(let ft=0;ft<e;ft++)V[ft]=0,K[ft]=0,Q[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:Q,object:R,attributes:{},index:null}}function v(R,V,K,Q){const ft=u.attributes,at=V.attributes;let P=0;const H=K.getAttributes();for(const et in H)if(H[et].location>=0){const St=ft[et];let F=at[et];if(F===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),St===void 0||St.attribute!==F||F&&St.data!==F.data)return!0;P++}return u.attributesNum!==P||u.index!==Q}function b(R,V,K,Q){const ft={},at=V.attributes;let P=0;const H=K.getAttributes();for(const et in H)if(H[et].location>=0){let St=at[et];St===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(St=R.instanceColor));const F={};F.attribute=St,St&&St.data&&(F.data=St.data),ft[et]=F,P++}u.attributes=ft,u.attributesNum=P,u.index=Q}function E(){const R=u.newAttributes;for(let V=0,K=R.length;V<K;V++)R[V]=0}function M(R){y(R,0)}function y(R,V){const K=u.newAttributes,Q=u.enabledAttributes,ft=u.attributeDivisors;K[R]=1,Q[R]===0&&(o.enableVertexAttribArray(R),Q[R]=1),ft[R]!==V&&(o.vertexAttribDivisor(R,V),ft[R]=V)}function D(){const R=u.newAttributes,V=u.enabledAttributes;for(let K=0,Q=V.length;K<Q;K++)V[K]!==R[K]&&(o.disableVertexAttribArray(K),V[K]=0)}function L(R,V,K,Q,ft,at,P){P===!0?o.vertexAttribIPointer(R,V,K,ft,at):o.vertexAttribPointer(R,V,K,Q,ft,at)}function N(R,V,K,Q){E();const ft=Q.attributes,at=K.getAttributes(),P=V.defaultAttributeValues;for(const H in at){const et=at[H];if(et.location>=0){let Et=ft[H];if(Et===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),Et!==void 0){const St=Et.normalized,F=Et.itemSize,nt=t.get(Et);if(nt===void 0)continue;const xt=nt.buffer,Rt=nt.type,It=nt.bytesPerElement,it=Rt===o.INT||Rt===o.UNSIGNED_INT||Et.gpuType===mm;if(Et.isInterleavedBufferAttribute){const dt=Et.data,Ot=dt.stride,Gt=Et.offset;if(dt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<et.locationSize;Ht++)y(et.location+Ht,dt.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ht=0;Ht<et.locationSize;Ht++)M(et.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Ht=0;Ht<et.locationSize;Ht++)L(et.location+Ht,F/et.locationSize,Rt,St,Ot*It,(Gt+F/et.locationSize*Ht)*It,it)}else{if(Et.isInstancedBufferAttribute){for(let dt=0;dt<et.locationSize;dt++)y(et.location+dt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let dt=0;dt<et.locationSize;dt++)M(et.location+dt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let dt=0;dt<et.locationSize;dt++)L(et.location+dt,F/et.locationSize,Rt,St,F*It,F/et.locationSize*dt*It,it)}}else if(P!==void 0){const St=P[H];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(et.location,St);break;case 3:o.vertexAttrib3fv(et.location,St);break;case 4:o.vertexAttrib4fv(et.location,St);break;default:o.vertexAttrib1fv(et.location,St)}}}}D()}function z(){Z();for(const R in a){const V=a[R];for(const K in V){const Q=V[K];for(const ft in Q)g(Q[ft].object),delete Q[ft];delete V[K]}delete a[R]}}function B(R){if(a[R.id]===void 0)return;const V=a[R.id];for(const K in V){const Q=V[K];for(const ft in Q)g(Q[ft].object),delete Q[ft];delete V[K]}delete a[R.id]}function U(R){for(const V in a){const K=a[V];if(K[R.id]===void 0)continue;const Q=K[R.id];for(const ft in Q)g(Q[ft].object),delete Q[ft];delete K[R.id]}}function Z(){C(),c=!0,u!==r&&(u=r,d(u.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:M,disableUnusedAttributes:D}}function mT(o,t,e){let a;function r(d){a=d}function u(d,g){o.drawArrays(a,d,g),e.update(g,a,1)}function c(d,g,_){_!==0&&(o.drawArraysInstanced(a,d,g,_),e.update(g,a,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let v=0;for(let b=0;b<_;b++)v+=g[b];e.update(v,a,1)}function p(d,g,_,x){if(_===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<d.length;b++)c(d[b],g[b],x[b]);else{v.multiDrawArraysInstancedWEBGL(a,d,0,g,0,x,0,_);let b=0;for(let E=0;E<_;E++)b+=g[E]*x[E];e.update(b,a,1)}}this.setMode=r,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function gT(o,t,e,a){let r;function u(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(U){return!(U!==Bi&&a.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const Z=U===Pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==ui&&a.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Zi&&!Z)}function p(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const g=p(d);g!==d&&(oe("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=e.logarithmicDepthBuffer===!0,x=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:v,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:N,maxSamples:z,samples:B}}function _T(o){const t=this;let e=null,a=0,r=!1,u=!1;const c=new Js,h=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const v=_.length!==0||x||a!==0||r;return r=x,a=_.length,v},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){e=g(_,x,0)},this.setState=function(_,x,v){const b=_.clippingPlanes,E=_.clipIntersection,M=_.clipShadows,y=o.get(_);if(!r||b===null||b.length===0||u&&!M)u?g(null):d();else{const D=u?0:a,L=D*4;let N=y.clippingState||null;p.value=N,N=g(b,x,L,v);for(let z=0;z!==L;++z)N[z]=e[z];y.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function d(){p.value!==e&&(p.value=e,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,x,v,b){const E=_!==null?_.length:0;let M=null;if(E!==0){if(M=p.value,b!==!0||M===null){const y=v+E*4,D=x.matrixWorldInverse;h.getNormalMatrix(D),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,N=v;L!==E;++L,N+=4)c.copy(_[L]).applyMatrix4(D,h),c.normal.toArray(M,N),M[N+3]=c.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,M}}function xT(o){let t=new WeakMap;function e(c,h){return h===Mp?c.mapping=sr:h===bp&&(c.mapping=yo),c}function a(c){if(c&&c.isTexture){const h=c.mapping;if(h===Mp||h===bp)if(t.has(c)){const p=t.get(c).texture;return e(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new Ny(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",r),e(d.texture,c.mapping)}else return null}}return c}function r(c){const h=c.target;h.removeEventListener("dispose",r);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const As=4,Qx=[.125,.215,.35,.446,.526,.582],er=20,vT=256,wl=new Tm,Jx=new ze;let kd=null,Xd=0,Wd=0,qd=!1;const yT=new ut;class tv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,a=.1,r=100,u={}){const{size:c=256,position:h=yT}=u;kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,h),e>0&&this._blur(p,0,0,e),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kd,Xd,Wd),this._renderer.xr.enabled=qd,t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=e||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,a={magFilter:In,minFilter:In,generateMipmaps:!1,type:Pa,format:Bi,colorSpace:Mo,depthBuffer:!1},r=ev(t,e,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(t,e,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ST(u)),this._blurMaterial=bT(u,t,e),this._ggxMaterial=MT(u,t,e)}return r}_compileMaterial(t){const e=new Ia(new or,t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,a,r,u){const p=new bi(90,1,e,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(Jx),_.toneMapping=Ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(r),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ia(new Wl,new Ty({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,M=E.material;let y=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,y=!0):(M.color.copy(Jx),y=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(p.up.set(0,d[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[L],u.y,u.z)):N===1?(p.up.set(0,0,d[L]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[L],u.z)):(p.up.set(0,d[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[L]));const z=this._cubeSize;io(r,N*z,L>2?z:0,z,z),_.setRenderTarget(r),y&&_.render(E,p),_.render(t,p)}_.toneMapping=v,_.autoClear=x,t.background=D}_textureToCubeUV(t,e){const a=this._renderer,r=t.mapping===sr||t.mapping===yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nv());const u=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;io(e,0,0,3*p,2*p),a.setRenderTarget(e),a.render(c,wl)}_applyPMREM(t){const e=this._renderer,a=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let u=1;u<r;u++)this._applyGGXFilter(t,u-1,u);e.autoClear=a}_applyGGXFilter(t,e,a){const r=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[a];h.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),x=0+d*1.25,v=_*x,{_lodMax:b}=this,E=this._sizeLods[a],M=3*E*(a>b-As?a-b+As:0),y=4*(this._cubeSize-E);p.envMap.value=t.texture,p.roughness.value=v,p.mipInt.value=b-e,io(u,M,y,3*E,2*E),r.setRenderTarget(u),r.render(h,wl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=b-a,io(t,M,y,3*E,2*E),r.setRenderTarget(t),r.render(h,wl)}_blur(t,e,a,r,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,a,r,"latitudinal",u),this._halfBlur(c,t,a,a,r,"longitudinal",u)}_halfBlur(t,e,a,r,u,c,h){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[r];_.material=d;const x=d.uniforms,v=this._sizeLods[a]-1,b=isFinite(u)?Math.PI/(2*v):2*Math.PI/(2*er-1),E=u/b,M=isFinite(u)?1+Math.floor(g*E):er;M>er&&oe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${er}`);const y=[];let D=0;for(let U=0;U<er;++U){const Z=U/E,C=Math.exp(-Z*Z/2);y.push(C),U===0?D+=C:U<M&&(D+=2*C)}for(let U=0;U<y.length;U++)y[U]=y[U]/D;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=y,x.latitudinal.value=c==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=b,x.mipInt.value=L-a;const N=this._sizeLods[r],z=3*N*(r>L-As?r-L+As:0),B=4*(this._cubeSize-N);io(e,z,B,3*N,2*N),p.setRenderTarget(e),p.render(_,wl)}}function ST(o){const t=[],e=[],a=[];let r=o;const u=o-As+1+Qx.length;for(let c=0;c<u;c++){const h=Math.pow(2,r);t.push(h);let p=1/h;c>o-As?p=Qx[c-o+As-1]:c===0&&(p=0),e.push(p);const d=1/(h-2),g=-d,_=1+d,x=[g,g,_,g,_,_,g,g,_,_,g,_],v=6,b=6,E=3,M=2,y=1,D=new Float32Array(E*b*v),L=new Float32Array(M*b*v),N=new Float32Array(y*b*v);for(let B=0;B<v;B++){const U=B%3*2/3-1,Z=B>2?0:-1,C=[U,Z,0,U+2/3,Z,0,U+2/3,Z+1,0,U,Z,0,U+2/3,Z+1,0,U,Z+1,0];D.set(C,E*b*B),L.set(x,M*b*B);const R=[B,B,B,B,B,B];N.set(R,y*b*B)}const z=new or;z.setAttribute("position",new Ji(D,E)),z.setAttribute("uv",new Ji(L,M)),z.setAttribute("faceIndex",new Ji(N,y)),a.push(new Ia(z,null)),r>As&&r--}return{lodMeshes:a,sizeLods:t,sigmas:e}}function ev(o,t,e){const a=new Qi(o,t,e);return a.texture.mapping=th,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function io(o,t,e,a,r){o.viewport.set(t,e,a,r),o.scissor.set(t,e,a,r)}function MT(o,t,e){return new na({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ih(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function bT(o,t,e){const a=new Float32Array(er),r=new ut(0,1,0);return new na({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ih(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function nv(){return new na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function iv(){return new na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function ih(){return`

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
	`}function ET(o){let t=new WeakMap,e=null;function a(h){if(h&&h.isTexture){const p=h.mapping,d=p===Mp||p===bp,g=p===sr||p===yo;if(d||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return e===null&&(e=new tv(o)),_=d?e.fromEquirectangular(h,_):e.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const v=h.image;return d&&v&&v.height>0||g&&v&&r(v)?(e===null&&(e=new tv(o)),_=d?e.fromEquirectangular(h):e.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function r(h){let p=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&p++;return p===d}function u(h){const p=h.target;p.removeEventListener("dispose",u);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:a,dispose:c}}function AT(o){const t={};function e(a){if(t[a]!==void 0)return t[a];const r=o.getExtension(a);return t[a]=r,r}return{has:function(a){return e(a)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(a){const r=e(a);return r===null&&Bl("WebGLRenderer: "+a+" extension not supported."),r}}}function TT(o,t,e,a){const r={},u=new WeakMap;function c(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",c),delete r[x.id];const v=u.get(x);v&&(t.remove(v),u.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function h(_,x){return r[x.id]===!0||(x.addEventListener("dispose",c),r[x.id]=!0,e.memory.geometries++),x}function p(_){const x=_.attributes;for(const v in x)t.update(x[v],o.ARRAY_BUFFER)}function d(_){const x=[],v=_.index,b=_.attributes.position;let E=0;if(v!==null){const D=v.array;E=v.version;for(let L=0,N=D.length;L<N;L+=3){const z=D[L+0],B=D[L+1],U=D[L+2];x.push(z,B,B,U,U,z)}}else if(b!==void 0){const D=b.array;E=b.version;for(let L=0,N=D.length/3-1;L<N;L+=3){const z=L+0,B=L+1,U=L+2;x.push(z,B,B,U,U,z)}}else return;const M=new(xy(x)?Cy:wy)(x,1);M.version=E;const y=u.get(_);y&&t.remove(y),u.set(_,M)}function g(_){const x=u.get(_);if(x){const v=_.index;v!==null&&x.version<v.version&&d(_)}else d(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function wT(o,t,e){let a;function r(x){a=x}let u,c;function h(x){u=x.type,c=x.bytesPerElement}function p(x,v){o.drawElements(a,v,u,x*c),e.update(v,a,1)}function d(x,v,b){b!==0&&(o.drawElementsInstanced(a,v,u,x*c,b),e.update(v,a,b))}function g(x,v,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,u,x,0,b);let M=0;for(let y=0;y<b;y++)M+=v[y];e.update(M,a,1)}function _(x,v,b,E){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<x.length;y++)d(x[y]/c,v[y],E[y]);else{M.multiDrawElementsInstancedWEBGL(a,v,0,u,x,0,E,0,b);let y=0;for(let D=0;D<b;D++)y+=v[D]*E[D];e.update(y,a,1)}}this.setMode=r,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function CT(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,h){switch(e.calls++,c){case o.TRIANGLES:e.triangles+=h*(u/3);break;case o.LINES:e.lines+=h*(u/2);break;case o.LINE_STRIP:e.lines+=h*(u-1);break;case o.LINE_LOOP:e.lines+=h*u;break;case o.POINTS:e.points+=h*u;break;default:De("WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:a}}function RT(o,t,e){const a=new WeakMap,r=new en;function u(c,h,p){const d=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(h);if(x===void 0||x.count!==_){let R=function(){Z.dispose(),a.delete(h),h.removeEventListener("dispose",R)};var v=R;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),E===!0&&(N=2),M===!0&&(N=3);let z=h.attributes.position.count*N,B=1;z>t.maxTextureSize&&(B=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const U=new Float32Array(z*B*4*_),Z=new My(U,z,B,_);Z.type=Zi,Z.needsUpdate=!0;const C=N*4;for(let V=0;V<_;V++){const K=y[V],Q=D[V],ft=L[V],at=z*B*4*V;for(let P=0;P<K.count;P++){const H=P*C;b===!0&&(r.fromBufferAttribute(K,P),U[at+H+0]=r.x,U[at+H+1]=r.y,U[at+H+2]=r.z,U[at+H+3]=0),E===!0&&(r.fromBufferAttribute(Q,P),U[at+H+4]=r.x,U[at+H+5]=r.y,U[at+H+6]=r.z,U[at+H+7]=0),M===!0&&(r.fromBufferAttribute(ft,P),U[at+H+8]=r.x,U[at+H+9]=r.y,U[at+H+10]=r.z,U[at+H+11]=ft.itemSize===4?r.w:1)}}x={count:_,texture:Z,size:new Xe(z,B)},a.set(h,x),h.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,e);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const E=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,e),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function DT(o,t,e,a){let r=new WeakMap;function u(p){const d=a.render.frame,g=p.geometry,_=t.get(p,g);if(r.get(_)!==d&&(t.update(_),r.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),r.get(p)!==d&&(e.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&e.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,d))),p.isSkinnedMesh){const x=p.skeleton;r.get(x)!==d&&(x.update(),r.set(x,d))}return _}function c(){r=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:u,dispose:c}}const UT={[iy]:"LINEAR_TONE_MAPPING",[ay]:"REINHARD_TONE_MAPPING",[sy]:"CINEON_TONE_MAPPING",[ry]:"ACES_FILMIC_TONE_MAPPING",[ly]:"AGX_TONE_MAPPING",[uy]:"NEUTRAL_TONE_MAPPING",[oy]:"CUSTOM_TONE_MAPPING"};function LT(o,t,e,a,r){const u=new Qi(t,e,{type:o,depthBuffer:a,stencilBuffer:r}),c=new Qi(t,e,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),h=new or;h.setAttribute("position",new za([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new za([0,2,0,0,2,0],2));const p=new bE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ia(h,p),g=new Tm(-1,1,1,-1,0,1);let _=null,x=null,v=!1,b,E=null,M=[],y=!1;this.setSize=function(D,L){u.setSize(D,L),c.setSize(D,L);for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(D,L)}},this.setEffects=function(D){M=D,y=M.length>0&&M[0].isRenderPass===!0;const L=u.width,N=u.height;for(let z=0;z<M.length;z++){const B=M[z];B.setSize&&B.setSize(L,N)}},this.begin=function(D,L){if(v||D.toneMapping===Ki&&M.length===0)return!1;if(E=L,L!==null){const N=L.width,z=L.height;(u.width!==N||u.height!==z)&&this.setSize(N,z)}return y===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=Ki,!0},this.hasRenderPass=function(){return y},this.end=function(D,L){D.toneMapping=b,v=!0;let N=u,z=c;for(let B=0;B<M.length;B++){const U=M[B];if(U.enabled!==!1&&(U.render(D,z,N,L),U.needsSwap!==!1)){const Z=N;N=z,z=Z}}if(_!==D.outputColorSpace||x!==D.toneMapping){_=D.outputColorSpace,x=D.toneMapping,p.defines={},Te.getTransfer(_)===Ie&&(p.defines.SRGB_TRANSFER="");const B=UT[x];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(E),D.render(d,g),E=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){u.dispose(),c.dispose(),h.dispose(),p.dispose()}}const Py=new Vi,rm=new Il(1,1),By=new My,Iy=new Jb,Hy=new Ly,av=[],sv=[],rv=new Float32Array(16),ov=new Float32Array(9),lv=new Float32Array(4);function Ao(o,t,e){const a=o[0];if(a<=0||a>0)return o;const r=t*e;let u=av[r];if(u===void 0&&(u=new Float32Array(r),av[r]=u),t!==0){a.toArray(u,0);for(let c=1,h=0;c!==t;++c)h+=e,o[c].toArray(u,h)}return u}function gn(o,t){if(o.length!==t.length)return!1;for(let e=0,a=o.length;e<a;e++)if(o[e]!==t[e])return!1;return!0}function _n(o,t){for(let e=0,a=t.length;e<a;e++)o[e]=t[e]}function ah(o,t){let e=sv[t];e===void 0&&(e=new Int32Array(t),sv[t]=e);for(let a=0;a!==t;++a)e[a]=o.allocateTextureUnit();return e}function NT(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function OT(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;o.uniform2fv(this.addr,t),_n(e,t)}}function zT(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;o.uniform3fv(this.addr,t),_n(e,t)}}function FT(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;o.uniform4fv(this.addr,t),_n(e,t)}}function PT(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(gn(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,a))return;lv.set(a),o.uniformMatrix2fv(this.addr,!1,lv),_n(e,a)}}function BT(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(gn(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,a))return;ov.set(a),o.uniformMatrix3fv(this.addr,!1,ov),_n(e,a)}}function IT(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(gn(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(e,t)}else{if(gn(e,a))return;rv.set(a),o.uniformMatrix4fv(this.addr,!1,rv),_n(e,a)}}function HT(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function VT(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;o.uniform2iv(this.addr,t),_n(e,t)}}function GT(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;o.uniform3iv(this.addr,t),_n(e,t)}}function kT(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;o.uniform4iv(this.addr,t),_n(e,t)}}function XT(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function WT(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;o.uniform2uiv(this.addr,t),_n(e,t)}}function qT(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;o.uniform3uiv(this.addr,t),_n(e,t)}}function YT(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;o.uniform4uiv(this.addr,t),_n(e,t)}}function jT(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let u;this.type===o.SAMPLER_2D_SHADOW?(rm.compareFunction=e.isReversedDepthBuffer()?Mm:Sm,u=rm):u=Py,e.setTexture2D(t||u,r)}function ZT(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTexture3D(t||Iy,r)}function $T(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTextureCube(t||Hy,r)}function KT(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTexture2DArray(t||By,r)}function QT(o){switch(o){case 5126:return NT;case 35664:return OT;case 35665:return zT;case 35666:return FT;case 35674:return PT;case 35675:return BT;case 35676:return IT;case 5124:case 35670:return HT;case 35667:case 35671:return VT;case 35668:case 35672:return GT;case 35669:case 35673:return kT;case 5125:return XT;case 36294:return WT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return KT}}function JT(o,t){o.uniform1fv(this.addr,t)}function t2(o,t){const e=Ao(t,this.size,2);o.uniform2fv(this.addr,e)}function e2(o,t){const e=Ao(t,this.size,3);o.uniform3fv(this.addr,e)}function n2(o,t){const e=Ao(t,this.size,4);o.uniform4fv(this.addr,e)}function i2(o,t){const e=Ao(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function a2(o,t){const e=Ao(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function s2(o,t){const e=Ao(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function r2(o,t){o.uniform1iv(this.addr,t)}function o2(o,t){o.uniform2iv(this.addr,t)}function l2(o,t){o.uniform3iv(this.addr,t)}function u2(o,t){o.uniform4iv(this.addr,t)}function c2(o,t){o.uniform1uiv(this.addr,t)}function h2(o,t){o.uniform2uiv(this.addr,t)}function f2(o,t){o.uniform3uiv(this.addr,t)}function d2(o,t){o.uniform4uiv(this.addr,t)}function p2(o,t,e){const a=this.cache,r=t.length,u=ah(e,r);gn(a,u)||(o.uniform1iv(this.addr,u),_n(a,u));let c;this.type===o.SAMPLER_2D_SHADOW?c=rm:c=Py;for(let h=0;h!==r;++h)e.setTexture2D(t[h]||c,u[h])}function m2(o,t,e){const a=this.cache,r=t.length,u=ah(e,r);gn(a,u)||(o.uniform1iv(this.addr,u),_n(a,u));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Iy,u[c])}function g2(o,t,e){const a=this.cache,r=t.length,u=ah(e,r);gn(a,u)||(o.uniform1iv(this.addr,u),_n(a,u));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||Hy,u[c])}function _2(o,t,e){const a=this.cache,r=t.length,u=ah(e,r);gn(a,u)||(o.uniform1iv(this.addr,u),_n(a,u));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||By,u[c])}function x2(o){switch(o){case 5126:return JT;case 35664:return t2;case 35665:return e2;case 35666:return n2;case 35674:return i2;case 35675:return a2;case 35676:return s2;case 5124:case 35670:return r2;case 35667:case 35671:return o2;case 35668:case 35672:return l2;case 35669:case 35673:return u2;case 5125:return c2;case 36294:return h2;case 36295:return f2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return _2}}class v2{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.setValue=QT(e.type)}}class y2{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x2(e.type)}}class S2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,a){const r=this.seq;for(let u=0,c=r.length;u!==c;++u){const h=r[u];h.setValue(t,e[h.id],a)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function uv(o,t){o.seq.push(t),o.map[t.id]=t}function M2(o,t,e){const a=o.name,r=a.length;for(Yd.lastIndex=0;;){const u=Yd.exec(a),c=Yd.lastIndex;let h=u[1];const p=u[2]==="]",d=u[3];if(p&&(h=h|0),d===void 0||d==="["&&c+2===r){uv(e,d===void 0?new v2(h,o,t):new y2(h,o,t));break}else{let _=e.map[h];_===void 0&&(_=new S2(h),uv(e,_)),e=_}}}class jc{constructor(t,e){this.seq=[],this.map={};const a=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const h=t.getActiveUniform(e,c),p=t.getUniformLocation(e,h.name);M2(h,p,this)}const r=[],u=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(c):u.push(c);r.length>0&&(this.seq=r.concat(u))}setValue(t,e,a,r){const u=this.map[e];u!==void 0&&u.setValue(t,a,r)}setOptional(t,e,a){const r=e[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,e,a,r){for(let u=0,c=e.length;u!==c;++u){const h=e[u],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,r)}}static seqWithValue(t,e){const a=[];for(let r=0,u=t.length;r!==u;++r){const c=t[r];c.id in e&&a.push(c)}return a}}function cv(o,t,e){const a=o.createShader(t);return o.shaderSource(a,e),o.compileShader(a),a}const b2=37297;let E2=0;function A2(o,t){const e=o.split(`
`),a=[],r=Math.max(t-6,0),u=Math.min(t+6,e.length);for(let c=r;c<u;c++){const h=c+1;a.push(`${h===t?">":" "} ${h}: ${e[c]}`)}return a.join(`
`)}const hv=new ge;function T2(o){Te._getMatrix(hv,Te.workingColorSpace,o);const t=`mat3( ${hv.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(o)){case $c:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function fv(o,t,e){const a=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return e.toUpperCase()+`

`+u+`

`+A2(o.getShaderSource(t),h)}else return u}function w2(o,t){const e=T2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const C2={[iy]:"Linear",[ay]:"Reinhard",[sy]:"Cineon",[ry]:"ACESFilmic",[ly]:"AgX",[uy]:"Neutral",[oy]:"Custom"};function R2(o,t){const e=C2[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ac=new ut;function D2(){Te.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),t=Ac.y.toFixed(4),e=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function L2(o){const t=[];for(const e in o){const a=o[e];a!==!1&&t.push("#define "+e+" "+a)}return t.join(`
`)}function N2(o,t){const e={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const u=o.getActiveAttrib(t,r),c=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),e[c]={type:u.type,location:o.getAttribLocation(t,c),locationSize:h}}return e}function Ol(o){return o!==""}function dv(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O2=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(o){return o.replace(O2,F2)}const z2=new Map;function F2(o,t){let e=de[t];if(e===void 0){const a=z2.get(t);if(a!==void 0)e=de[a],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return om(e)}const P2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(o){return o.replace(P2,B2)}function B2(o,t,e,a){let r="";for(let u=parseInt(t);u<parseInt(e);u++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return r}function gv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const I2={[Vc]:"SHADOWMAP_TYPE_PCF",[Nl]:"SHADOWMAP_TYPE_VSM"};function H2(o){return I2[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const V2={[sr]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE",[th]:"ENVMAP_TYPE_CUBE_UV"};function G2(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":V2[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const k2={[yo]:"ENVMAP_MODE_REFRACTION"};function X2(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":k2[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const W2={[ny]:"ENVMAP_BLENDING_MULTIPLY",[Nb]:"ENVMAP_BLENDING_MIX",[Ob]:"ENVMAP_BLENDING_ADD"};function q2(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":W2[o.combine]||"ENVMAP_BLENDING_NONE"}function Y2(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:a,maxMip:e}}function j2(o,t,e,a){const r=o.getContext(),u=e.defines;let c=e.vertexShader,h=e.fragmentShader;const p=H2(e),d=G2(e),g=X2(e),_=q2(e),x=Y2(e),v=U2(e),b=L2(u),E=r.createProgram();let M,y,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ol).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ol).join(`
`),y.length>0&&(y+=`
`)):(M=[gv(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),y=[gv(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?de.tonemapping_pars_fragment:"",e.toneMapping!==Ki?R2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,w2("linearToOutputTexel",e.outputColorSpace),D2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ol).join(`
`)),c=om(c),c=dv(c,e),c=pv(c,e),h=om(h),h=dv(h,e),h=pv(h,e),c=mv(c),h=mv(h),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",e.glslVersion===Dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=D+M+c,N=D+y+h,z=cv(r,r.VERTEX_SHADER,L),B=cv(r,r.FRAGMENT_SHADER,N);r.attachShader(E,z),r.attachShader(E,B),e.index0AttributeName!==void 0?r.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function U(V){if(o.debug.checkShaderErrors){const K=r.getProgramInfoLog(E)||"",Q=r.getShaderInfoLog(z)||"",ft=r.getShaderInfoLog(B)||"",at=K.trim(),P=Q.trim(),H=ft.trim();let et=!0,Et=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(et=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,E,z,B);else{const St=fv(r,z,"vertex"),F=fv(r,B,"fragment");De("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+at+`
`+St+`
`+F)}else at!==""?oe("WebGLProgram: Program Info Log:",at):(P===""||H==="")&&(Et=!1);Et&&(V.diagnostics={runnable:et,programLog:at,vertexShader:{log:P,prefix:M},fragmentShader:{log:H,prefix:y}})}r.deleteShader(z),r.deleteShader(B),Z=new jc(r,E),C=N2(r,E)}let Z;this.getUniforms=function(){return Z===void 0&&U(this),Z};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(E,b2)),R},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E2++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=B,this}let Z2=0;class $2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(e),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const a of e)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let a=e.get(t);return a===void 0&&(a=new Set,e.set(t,a)),a}_getShaderStage(t){const e=this.shaderCache;let a=e.get(t);return a===void 0&&(a=new K2(t),e.set(t,a)),a}}class K2{constructor(t){this.id=Z2++,this.code=t,this.usedTimes=0}}function Q2(o,t,e,a,r,u,c){const h=new Ey,p=new $2,d=new Set,g=[],_=new Map,x=r.logarithmicDepthBuffer;let v=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return d.add(C),C===0?"uv":`uv${C}`}function M(C,R,V,K,Q){const ft=K.fog,at=Q.geometry,P=C.isMeshStandardMaterial?K.environment:null,H=(C.isMeshStandardMaterial?e:t).get(C.envMap||P),et=H&&H.mapping===th?H.image.height:null,Et=b[C.type];C.precision!==null&&(v=r.getMaxPrecision(C.precision),v!==C.precision&&oe("WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const St=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,F=St!==void 0?St.length:0;let nt=0;at.morphAttributes.position!==void 0&&(nt=1),at.morphAttributes.normal!==void 0&&(nt=2),at.morphAttributes.color!==void 0&&(nt=3);let xt,Rt,It,it;if(Et){const Ae=ji[Et];xt=Ae.vertexShader,Rt=Ae.fragmentShader}else xt=C.vertexShader,Rt=C.fragmentShader,p.update(C),It=p.getVertexShaderID(C),it=p.getFragmentShaderID(C);const dt=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),Gt=Q.isInstancedMesh===!0,Ht=Q.isBatchedMesh===!0,pe=!!C.map,Ze=!!C.matcap,me=!!H,he=!!C.aoMap,be=!!C.lightMap,ae=!!C.bumpMap,$e=!!C.normalMap,k=!!C.displacementMap,He=!!C.emissiveMap,fe=!!C.metalnessMap,we=!!C.roughnessMap,qt=C.anisotropy>0,O=C.clearcoat>0,A=C.dispersion>0,q=C.iridescence>0,mt=C.sheen>0,Mt=C.transmission>0,ht=qt&&!!C.anisotropyMap,Yt=O&&!!C.clearcoatMap,Lt=O&&!!C.clearcoatNormalMap,kt=O&&!!C.clearcoatRoughnessMap,G=q&&!!C.iridescenceMap,st=q&&!!C.iridescenceThicknessMap,yt=mt&&!!C.sheenColorMap,wt=mt&&!!C.sheenRoughnessMap,Dt=!!C.specularMap,Ut=!!C.specularColorMap,ie=!!C.specularIntensityMap,W=Mt&&!!C.transmissionMap,zt=Mt&&!!C.thicknessMap,Tt=!!C.gradientMap,Nt=!!C.alphaMap,bt=C.alphaTest>0,_t=!!C.alphaHash,Ct=!!C.extensions;let te=Ki;C.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(te=o.toneMapping);const Ee={shaderID:Et,shaderType:C.type,shaderName:C.name,vertexShader:xt,fragmentShader:Rt,defines:C.defines,customVertexShaderID:It,customFragmentShaderID:it,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:Ht,batchingColor:Ht&&Q._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&Q.instanceColor!==null,instancingMorph:Gt&&Q.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Mo,alphaToCoverage:!!C.alphaToCoverage,map:pe,matcap:Ze,envMap:me,envMapMode:me&&H.mapping,envMapCubeUVHeight:et,aoMap:he,lightMap:be,bumpMap:ae,normalMap:$e,displacementMap:k,emissiveMap:He,normalMapObjectSpace:$e&&C.normalMapType===Bb,normalMapTangentSpace:$e&&C.normalMapType===Pb,metalnessMap:fe,roughnessMap:we,anisotropy:qt,anisotropyMap:ht,clearcoat:O,clearcoatMap:Yt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:kt,dispersion:A,iridescence:q,iridescenceMap:G,iridescenceThicknessMap:st,sheen:mt,sheenColorMap:yt,sheenRoughnessMap:wt,specularMap:Dt,specularColorMap:Ut,specularIntensityMap:ie,transmission:Mt,transmissionMap:W,thicknessMap:zt,gradientMap:Tt,opaque:C.transparent===!1&&C.blending===go&&C.alphaToCoverage===!1,alphaMap:Nt,alphaTest:bt,alphaHash:_t,combine:C.combine,mapUv:pe&&E(C.map.channel),aoMapUv:he&&E(C.aoMap.channel),lightMapUv:be&&E(C.lightMap.channel),bumpMapUv:ae&&E(C.bumpMap.channel),normalMapUv:$e&&E(C.normalMap.channel),displacementMapUv:k&&E(C.displacementMap.channel),emissiveMapUv:He&&E(C.emissiveMap.channel),metalnessMapUv:fe&&E(C.metalnessMap.channel),roughnessMapUv:we&&E(C.roughnessMap.channel),anisotropyMapUv:ht&&E(C.anisotropyMap.channel),clearcoatMapUv:Yt&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:st&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:wt&&E(C.sheenRoughnessMap.channel),specularMapUv:Dt&&E(C.specularMap.channel),specularColorMapUv:Ut&&E(C.specularColorMap.channel),specularIntensityMapUv:ie&&E(C.specularIntensityMap.channel),transmissionMapUv:W&&E(C.transmissionMap.channel),thicknessMapUv:zt&&E(C.thicknessMap.channel),alphaMapUv:Nt&&E(C.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&($e||qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!at.attributes.uv&&(pe||Nt),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ot,skinning:Q.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:nt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:te,decodeVideoTexture:pe&&C.map.isVideoTexture===!0&&Te.getTransfer(C.map.colorSpace)===Ie,decodeVideoTextureEmissive:He&&C.emissiveMap.isVideoTexture===!0&&Te.getTransfer(C.emissiveMap.colorSpace)===Ie,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ua,flipSided:C.side===Kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ct&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&C.extensions.multiDraw===!0||Ht)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ee.vertexUv1s=d.has(1),Ee.vertexUv2s=d.has(2),Ee.vertexUv3s=d.has(3),d.clear(),Ee}function y(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)R.push(V),R.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(D(R,C),L(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function D(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function L(C,R){h.disableAll(),R.instancing&&h.enable(0),R.instancingColor&&h.enable(1),R.instancingMorph&&h.enable(2),R.matcap&&h.enable(3),R.envMap&&h.enable(4),R.normalMapObjectSpace&&h.enable(5),R.normalMapTangentSpace&&h.enable(6),R.clearcoat&&h.enable(7),R.iridescence&&h.enable(8),R.alphaTest&&h.enable(9),R.vertexColors&&h.enable(10),R.vertexAlphas&&h.enable(11),R.vertexUv1s&&h.enable(12),R.vertexUv2s&&h.enable(13),R.vertexUv3s&&h.enable(14),R.vertexTangents&&h.enable(15),R.anisotropy&&h.enable(16),R.alphaHash&&h.enable(17),R.batching&&h.enable(18),R.dispersion&&h.enable(19),R.batchingColor&&h.enable(20),R.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),C.push(h.mask)}function N(C){const R=b[C.type];let V;if(R){const K=ji[R];V=dE.clone(K.uniforms)}else V=C.uniforms;return V}function z(C,R){let V=_.get(R);return V!==void 0?++V.usedTimes:(V=new j2(o,R,C,u),g.push(V),_.set(R,V)),V}function B(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function U(C){p.remove(C)}function Z(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:N,acquireProgram:z,releaseProgram:B,releaseShaderCache:U,programs:g,dispose:Z}}function J2(){let o=new WeakMap;function t(c){return o.has(c)}function e(c){let h=o.get(c);return h===void 0&&(h={},o.set(c,h)),h}function a(c){o.delete(c)}function r(c,h,p){o.get(c)[h]=p}function u(){o=new WeakMap}return{has:t,get:e,remove:a,update:r,dispose:u}}function tw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function _v(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function xv(){const o=[];let t=0;const e=[],a=[],r=[];function u(){t=0,e.length=0,a.length=0,r.length=0}function c(_,x,v,b,E,M){let y=o[t];return y===void 0?(y={id:_.id,object:_,geometry:x,material:v,groupOrder:b,renderOrder:_.renderOrder,z:E,group:M},o[t]=y):(y.id=_.id,y.object=_,y.geometry=x,y.material=v,y.groupOrder=b,y.renderOrder=_.renderOrder,y.z=E,y.group=M),t++,y}function h(_,x,v,b,E,M){const y=c(_,x,v,b,E,M);v.transmission>0?a.push(y):v.transparent===!0?r.push(y):e.push(y)}function p(_,x,v,b,E,M){const y=c(_,x,v,b,E,M);v.transmission>0?a.unshift(y):v.transparent===!0?r.unshift(y):e.unshift(y)}function d(_,x){e.length>1&&e.sort(_||tw),a.length>1&&a.sort(x||_v),r.length>1&&r.sort(x||_v)}function g(){for(let _=t,x=o.length;_<x;_++){const v=o[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:a,transparent:r,init:u,push:h,unshift:p,finish:g,sort:d}}function ew(){let o=new WeakMap;function t(a,r){const u=o.get(a);let c;return u===void 0?(c=new xv,o.set(a,[c])):r>=u.length?(c=new xv,u.push(c)):c=u[r],c}function e(){o=new WeakMap}return{get:t,dispose:e}}function nw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new ut,color:new ze};break;case"SpotLight":e={position:new ut,direction:new ut,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ut,color:new ze,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ut,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":e={color:new ze,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[t.id]=e,e}}}function iw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let aw=0;function sw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function rw(o){const t=new nw,e=iw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new ut);const r=new ut,u=new mn,c=new mn;function h(d){let g=0,_=0,x=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let v=0,b=0,E=0,M=0,y=0,D=0,L=0,N=0,z=0,B=0,U=0;d.sort(sw);for(let C=0,R=d.length;C<R;C++){const V=d[C],K=V.color,Q=V.intensity,ft=V.distance;let at=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===So?at=V.shadow.map.texture:at=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=K.r*Q,_+=K.g*Q,x+=K.b*Q;else if(V.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(V.sh.coefficients[P],Q);U++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,et=e.get(V);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,a.directionalShadow[v]=et,a.directionalShadowMap[v]=at,a.directionalShadowMatrix[v]=V.shadow.matrix,D++}a.directional[v]=P,v++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(K).multiplyScalar(Q),P.distance=ft,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,a.spot[E]=P;const H=V.shadow;if(V.map&&(a.spotLightMap[z]=V.map,z++,H.updateMatrices(V),V.castShadow&&B++),a.spotLightMatrix[E]=H.matrix,V.castShadow){const et=e.get(V);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,a.spotShadow[E]=et,a.spotShadowMap[E]=at,N++}E++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(K).multiplyScalar(Q),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),a.rectArea[M]=P,M++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const H=V.shadow,et=e.get(V);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,et.shadowCameraNear=H.camera.near,et.shadowCameraFar=H.camera.far,a.pointShadow[b]=et,a.pointShadowMap[b]=at,a.pointShadowMatrix[b]=V.shadow.matrix,L++}a.point[b]=P,b++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(Q),P.groundColor.copy(V.groundColor).multiplyScalar(Q),a.hemi[y]=P,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Bt.LTC_FLOAT_1,a.rectAreaLTC2=Bt.LTC_FLOAT_2):(a.rectAreaLTC1=Bt.LTC_HALF_1,a.rectAreaLTC2=Bt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const Z=a.hash;(Z.directionalLength!==v||Z.pointLength!==b||Z.spotLength!==E||Z.rectAreaLength!==M||Z.hemiLength!==y||Z.numDirectionalShadows!==D||Z.numPointShadows!==L||Z.numSpotShadows!==N||Z.numSpotMaps!==z||Z.numLightProbes!==U)&&(a.directional.length=v,a.spot.length=E,a.rectArea.length=M,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=N+z-B,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=U,Z.directionalLength=v,Z.pointLength=b,Z.spotLength=E,Z.rectAreaLength=M,Z.hemiLength=y,Z.numDirectionalShadows=D,Z.numPointShadows=L,Z.numSpotShadows=N,Z.numSpotMaps=z,Z.numLightProbes=U,a.version=aw++)}function p(d,g){let _=0,x=0,v=0,b=0,E=0;const M=g.matrixWorldInverse;for(let y=0,D=d.length;y<D;y++){const L=d[y];if(L.isDirectionalLight){const N=a.directional[_];N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(M),_++}else if(L.isSpotLight){const N=a.spot[v];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(M),v++}else if(L.isRectAreaLight){const N=a.rectArea[b];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),c.identity(),u.copy(L.matrixWorld),u.premultiply(M),c.extractRotation(u),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),b++}else if(L.isPointLight){const N=a.point[x];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const N=a.hemi[E];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(M),E++}}}return{setup:h,setupView:p,state:a}}function vv(o){const t=new rw(o),e=[],a=[];function r(g){d.camera=g,e.length=0,a.length=0}function u(g){e.push(g)}function c(g){a.push(g)}function h(){t.setup(e)}function p(g){t.setupView(e,g)}const d={lightsArray:e,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c}}function ow(o){let t=new WeakMap;function e(r,u=0){const c=t.get(r);let h;return c===void 0?(h=new vv(o),t.set(r,[h])):u>=c.length?(h=new vv(o),c.push(h)):h=c[u],h}function a(){t=new WeakMap}return{get:e,dispose:a}}const lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uw=`uniform sampler2D shadow_pass;
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
}`,cw=[new ut(1,0,0),new ut(-1,0,0),new ut(0,1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1)],hw=[new ut(0,-1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1),new ut(0,-1,0),new ut(0,-1,0)],yv=new mn,Cl=new ut,jd=new ut;function fw(o,t,e){let a=new Am;const r=new Xe,u=new Xe,c=new en,h=new EE,p=new AE,d={},g=e.maxTextureSize,_={[Ts]:Kn,[Kn]:Ts,[Ua]:Ua},x=new na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:lw,fragmentShader:uw}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const b=new or;b.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ia(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let y=this.type;this.render=function(B,U,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===pb&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Vc);const C=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Na),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Q=y!==this.type;Q&&U.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(at=>at.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,at=B.length;ft<at;ft++){const P=B[ft],H=P.shadow;if(H===void 0){oe("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const et=H.getFrameExtents();if(r.multiply(et),u.copy(H.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(u.x=Math.floor(g/et.x),r.x=u.x*et.x,H.mapSize.x=u.x),r.y>g&&(u.y=Math.floor(g/et.y),r.y=u.y*et.y,H.mapSize.y=u.y)),H.map===null||Q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Nl){if(P.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qi(r.x,r.y,{format:So,type:Pa,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new Il(r.x,r.y,Zi),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Ba,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else{P.isPointLight?(H.map=new Ny(r.x),H.map.depthTexture=new ME(r.x,ea)):(H.map=new Qi(r.x,r.y),H.map.depthTexture=new Il(r.x,r.y,ea)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Ba;const St=o.state.buffers.depth.getReversed();this.type===Vc?(H.map.depthTexture.compareFunction=St?Mm:Sm,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un)}H.camera.updateProjectionMatrix()}const Et=H.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<Et;St++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,St),o.clear();else{St===0&&(o.setRenderTarget(H.map),o.clear());const F=H.getViewport(St);c.set(u.x*F.x,u.y*F.y,u.x*F.z,u.y*F.w),K.viewport(c)}if(P.isPointLight){const F=H.camera,nt=H.matrix,xt=P.distance||F.far;xt!==F.far&&(F.far=xt,F.updateProjectionMatrix()),Cl.setFromMatrixPosition(P.matrixWorld),F.position.copy(Cl),jd.copy(F.position),jd.add(cw[St]),F.up.copy(hw[St]),F.lookAt(jd),F.updateMatrixWorld(),nt.makeTranslation(-Cl.x,-Cl.y,-Cl.z),yv.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),H._frustum.setFromProjectionMatrix(yv,F.coordinateSystem,F.reversedDepth)}else H.updateMatrices(P);a=H.getFrustum(),N(U,Z,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===Nl&&D(H,Z),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(C,R,V)};function D(B,U){const Z=t.update(E);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,v.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Qi(r.x,r.y,{format:So,type:Pa})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(U,null,Z,x,E,null),v.uniforms.shadow_pass.value=B.mapPass.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(U,null,Z,v,E,null)}function L(B,U,Z,C){let R=null;const V=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)R=V;else if(R=Z.isPointLight===!0?p:h,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const K=R.uuid,Q=U.uuid;let ft=d[K];ft===void 0&&(ft={},d[K]=ft);let at=ft[Q];at===void 0&&(at=R.clone(),ft[Q]=at,U.addEventListener("dispose",z)),R=at}if(R.visible=U.visible,R.wireframe=U.wireframe,C===Nl?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:_[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const K=o.properties.get(R);K.light=Z}return R}function N(B,U,Z,C,R){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Nl)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const Q=t.update(B),ft=B.material;if(Array.isArray(ft)){const at=Q.groups;for(let P=0,H=at.length;P<H;P++){const et=at[P],Et=ft[et.materialIndex];if(Et&&Et.visible){const St=L(B,Et,C,R);B.onBeforeShadow(o,B,U,Z,Q,St,et),o.renderBufferDirect(Z,null,Q,St,B,et),B.onAfterShadow(o,B,U,Z,Q,St,et)}}}else if(ft.visible){const at=L(B,ft,C,R);B.onBeforeShadow(o,B,U,Z,Q,at,null),o.renderBufferDirect(Z,null,Q,at,B,null),B.onAfterShadow(o,B,U,Z,Q,at,null)}}const K=B.children;for(let Q=0,ft=K.length;Q<ft;Q++)N(K[Q],U,Z,C,R)}function z(B){B.target.removeEventListener("dispose",z);for(const Z in d){const C=d[Z],R=B.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const dw={[mp]:gp,[_p]:yp,[xp]:Sp,[vo]:vp,[gp]:mp,[yp]:_p,[Sp]:xp,[vp]:vo};function pw(o,t){function e(){let W=!1;const zt=new en;let Tt=null;const Nt=new en(0,0,0,0);return{setMask:function(bt){Tt!==bt&&!W&&(o.colorMask(bt,bt,bt,bt),Tt=bt)},setLocked:function(bt){W=bt},setClear:function(bt,_t,Ct,te,Ee){Ee===!0&&(bt*=te,_t*=te,Ct*=te),zt.set(bt,_t,Ct,te),Nt.equals(zt)===!1&&(o.clearColor(bt,_t,Ct,te),Nt.copy(zt))},reset:function(){W=!1,Tt=null,Nt.set(-1,0,0,0)}}}function a(){let W=!1,zt=!1,Tt=null,Nt=null,bt=null;return{setReversed:function(_t){if(zt!==_t){const Ct=t.get("EXT_clip_control");_t?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),zt=_t;const te=bt;bt=null,this.setClear(te)}},getReversed:function(){return zt},setTest:function(_t){_t?dt(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!W&&(o.depthMask(_t),Tt=_t)},setFunc:function(_t){if(zt&&(_t=dw[_t]),Nt!==_t){switch(_t){case mp:o.depthFunc(o.NEVER);break;case gp:o.depthFunc(o.ALWAYS);break;case _p:o.depthFunc(o.LESS);break;case vo:o.depthFunc(o.LEQUAL);break;case xp:o.depthFunc(o.EQUAL);break;case vp:o.depthFunc(o.GEQUAL);break;case yp:o.depthFunc(o.GREATER);break;case Sp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Nt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){bt!==_t&&(zt&&(_t=1-_t),o.clearDepth(_t),bt=_t)},reset:function(){W=!1,Tt=null,Nt=null,bt=null,zt=!1}}}function r(){let W=!1,zt=null,Tt=null,Nt=null,bt=null,_t=null,Ct=null,te=null,Ee=null;return{setTest:function(Ae){W||(Ae?dt(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(Ae){zt!==Ae&&!W&&(o.stencilMask(Ae),zt=Ae)},setFunc:function(Ae,Ln,Ai){(Tt!==Ae||Nt!==Ln||bt!==Ai)&&(o.stencilFunc(Ae,Ln,Ai),Tt=Ae,Nt=Ln,bt=Ai)},setOp:function(Ae,Ln,Ai){(_t!==Ae||Ct!==Ln||te!==Ai)&&(o.stencilOp(Ae,Ln,Ai),_t=Ae,Ct=Ln,te=Ai)},setLocked:function(Ae){W=Ae},setClear:function(Ae){Ee!==Ae&&(o.clearStencil(Ae),Ee=Ae)},reset:function(){W=!1,zt=null,Tt=null,Nt=null,bt=null,_t=null,Ct=null,te=null,Ee=null}}}const u=new e,c=new a,h=new r,p=new WeakMap,d=new WeakMap;let g={},_={},x=new WeakMap,v=[],b=null,E=!1,M=null,y=null,D=null,L=null,N=null,z=null,B=null,U=new ze(0,0,0),Z=0,C=!1,R=null,V=null,K=null,Q=null,ft=null;const at=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const et=o.getParameter(o.VERSION);et.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(et)[1]),P=H>=1):et.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),P=H>=2);let Et=null,St={};const F=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),xt=new en().fromArray(F),Rt=new en().fromArray(nt);function It(W,zt,Tt,Nt){const bt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(W,_t),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ct=0;Ct<Tt;Ct++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(zt,0,o.RGBA,1,1,Nt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(zt+Ct,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return _t}const it={};it[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),dt(o.DEPTH_TEST),c.setFunc(vo),ae(!1),$e(Ex),dt(o.CULL_FACE),he(Na);function dt(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Ot(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Gt(W,zt){return _[W]!==zt?(o.bindFramebuffer(W,zt),_[W]=zt,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=zt),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=zt),!0):!1}function Ht(W,zt){let Tt=v,Nt=!1;if(W){Tt=x.get(zt),Tt===void 0&&(Tt=[],x.set(zt,Tt));const bt=W.textures;if(Tt.length!==bt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Ct=bt.length;_t<Ct;_t++)Tt[_t]=o.COLOR_ATTACHMENT0+_t;Tt.length=bt.length,Nt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Nt=!0);Nt&&o.drawBuffers(Tt)}function pe(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const Ze={[tr]:o.FUNC_ADD,[gb]:o.FUNC_SUBTRACT,[_b]:o.FUNC_REVERSE_SUBTRACT};Ze[xb]=o.MIN,Ze[vb]=o.MAX;const me={[yb]:o.ZERO,[Sb]:o.ONE,[Mb]:o.SRC_COLOR,[dp]:o.SRC_ALPHA,[Cb]:o.SRC_ALPHA_SATURATE,[Tb]:o.DST_COLOR,[Eb]:o.DST_ALPHA,[bb]:o.ONE_MINUS_SRC_COLOR,[pp]:o.ONE_MINUS_SRC_ALPHA,[wb]:o.ONE_MINUS_DST_COLOR,[Ab]:o.ONE_MINUS_DST_ALPHA,[Rb]:o.CONSTANT_COLOR,[Db]:o.ONE_MINUS_CONSTANT_COLOR,[Ub]:o.CONSTANT_ALPHA,[Lb]:o.ONE_MINUS_CONSTANT_ALPHA};function he(W,zt,Tt,Nt,bt,_t,Ct,te,Ee,Ae){if(W===Na){E===!0&&(Ot(o.BLEND),E=!1);return}if(E===!1&&(dt(o.BLEND),E=!0),W!==mb){if(W!==M||Ae!==C){if((y!==tr||N!==tr)&&(o.blendEquation(o.FUNC_ADD),y=tr,N=tr),Ae)switch(W){case go:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ax:o.blendFunc(o.ONE,o.ONE);break;case Tx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:De("WebGLState: Invalid blending: ",W);break}else switch(W){case go:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ax:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Tx:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wx:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",W);break}D=null,L=null,z=null,B=null,U.set(0,0,0),Z=0,M=W,C=Ae}return}bt=bt||zt,_t=_t||Tt,Ct=Ct||Nt,(zt!==y||bt!==N)&&(o.blendEquationSeparate(Ze[zt],Ze[bt]),y=zt,N=bt),(Tt!==D||Nt!==L||_t!==z||Ct!==B)&&(o.blendFuncSeparate(me[Tt],me[Nt],me[_t],me[Ct]),D=Tt,L=Nt,z=_t,B=Ct),(te.equals(U)===!1||Ee!==Z)&&(o.blendColor(te.r,te.g,te.b,Ee),U.copy(te),Z=Ee),M=W,C=!1}function be(W,zt){W.side===Ua?Ot(o.CULL_FACE):dt(o.CULL_FACE);let Tt=W.side===Kn;zt&&(Tt=!Tt),ae(Tt),W.blending===go&&W.transparent===!1?he(Na):he(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),u.setMask(W.colorWrite);const Nt=W.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),He(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(W){R!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),R=W)}function $e(W){W!==fb?(dt(o.CULL_FACE),W!==V&&(W===Ex?o.cullFace(o.BACK):W===db?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),V=W}function k(W){W!==K&&(P&&o.lineWidth(W),K=W)}function He(W,zt,Tt){W?(dt(o.POLYGON_OFFSET_FILL),(Q!==zt||ft!==Tt)&&(o.polygonOffset(zt,Tt),Q=zt,ft=Tt)):Ot(o.POLYGON_OFFSET_FILL)}function fe(W){W?dt(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function we(W){W===void 0&&(W=o.TEXTURE0+at-1),Et!==W&&(o.activeTexture(W),Et=W)}function qt(W,zt,Tt){Tt===void 0&&(Et===null?Tt=o.TEXTURE0+at-1:Tt=Et);let Nt=St[Tt];Nt===void 0&&(Nt={type:void 0,texture:void 0},St[Tt]=Nt),(Nt.type!==W||Nt.texture!==zt)&&(Et!==Tt&&(o.activeTexture(Tt),Et=Tt),o.bindTexture(W,zt||it[W]),Nt.type=W,Nt.texture=zt)}function O(){const W=St[Et];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function mt(){try{o.texSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Yt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Lt(){try{o.texStorage2D(...arguments)}catch(W){De("WebGLState:",W)}}function kt(){try{o.texStorage3D(...arguments)}catch(W){De("WebGLState:",W)}}function G(){try{o.texImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function st(){try{o.texImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function yt(W){xt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),xt.copy(W))}function wt(W){Rt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Dt(W,zt){let Tt=d.get(zt);Tt===void 0&&(Tt=new WeakMap,d.set(zt,Tt));let Nt=Tt.get(W);Nt===void 0&&(Nt=o.getUniformBlockIndex(zt,W.name),Tt.set(W,Nt))}function Ut(W,zt){const Nt=d.get(zt).get(W);p.get(zt)!==Nt&&(o.uniformBlockBinding(zt,Nt,W.__bindingPointIndex),p.set(zt,Nt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},Et=null,St={},_={},x=new WeakMap,v=[],b=null,E=!1,M=null,y=null,D=null,L=null,N=null,z=null,B=null,U=new ze(0,0,0),Z=0,C=!1,R=null,V=null,K=null,Q=null,ft=null,xt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:dt,disable:Ot,bindFramebuffer:Gt,drawBuffers:Ht,useProgram:pe,setBlending:he,setMaterial:be,setFlipSided:ae,setCullFace:$e,setLineWidth:k,setPolygonOffset:He,setScissorTest:fe,activeTexture:we,bindTexture:qt,unbindTexture:O,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:G,texImage3D:st,updateUBOMapping:Dt,uniformBlockBinding:Ut,texStorage2D:Lt,texStorage3D:kt,texSubImage2D:mt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Yt,scissor:yt,viewport:wt,reset:ie}}function mw(o,t,e,a,r,u,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xe,g=new WeakMap;let _;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,A){return v?new OffscreenCanvas(O,A):Qc("canvas")}function E(O,A,q){let mt=1;const Mt=qt(O);if((Mt.width>q||Mt.height>q)&&(mt=q/Math.max(Mt.width,Mt.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ht=Math.floor(mt*Mt.width),Yt=Math.floor(mt*Mt.height);_===void 0&&(_=b(ht,Yt));const Lt=A?b(ht,Yt):_;return Lt.width=ht,Lt.height=Yt,Lt.getContext("2d").drawImage(O,0,0,ht,Yt),oe("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+Yt+")."),Lt}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),O;return O}function M(O){return O.generateMipmaps}function y(O){o.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,A,q,mt,Mt=!1){if(O!==null){if(o[O]!==void 0)return o[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ht=A;if(A===o.RED&&(q===o.FLOAT&&(ht=o.R32F),q===o.HALF_FLOAT&&(ht=o.R16F),q===o.UNSIGNED_BYTE&&(ht=o.R8)),A===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ht=o.R8UI),q===o.UNSIGNED_SHORT&&(ht=o.R16UI),q===o.UNSIGNED_INT&&(ht=o.R32UI),q===o.BYTE&&(ht=o.R8I),q===o.SHORT&&(ht=o.R16I),q===o.INT&&(ht=o.R32I)),A===o.RG&&(q===o.FLOAT&&(ht=o.RG32F),q===o.HALF_FLOAT&&(ht=o.RG16F),q===o.UNSIGNED_BYTE&&(ht=o.RG8)),A===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ht=o.RG8UI),q===o.UNSIGNED_SHORT&&(ht=o.RG16UI),q===o.UNSIGNED_INT&&(ht=o.RG32UI),q===o.BYTE&&(ht=o.RG8I),q===o.SHORT&&(ht=o.RG16I),q===o.INT&&(ht=o.RG32I)),A===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),q===o.UNSIGNED_INT&&(ht=o.RGB32UI),q===o.BYTE&&(ht=o.RGB8I),q===o.SHORT&&(ht=o.RGB16I),q===o.INT&&(ht=o.RGB32I)),A===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),q===o.UNSIGNED_INT&&(ht=o.RGBA32UI),q===o.BYTE&&(ht=o.RGBA8I),q===o.SHORT&&(ht=o.RGBA16I),q===o.INT&&(ht=o.RGBA32I)),A===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),A===o.RGBA){const Yt=Mt?$c:Te.getTransfer(mt);q===o.FLOAT&&(ht=o.RGBA32F),q===o.HALF_FLOAT&&(ht=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ht=Yt===Ie?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function N(O,A){let q;return O?A===null||A===ea||A===Pl?q=o.DEPTH24_STENCIL8:A===Zi?q=o.DEPTH32F_STENCIL8:A===Fl&&(q=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ea||A===Pl?q=o.DEPTH_COMPONENT24:A===Zi?q=o.DEPTH_COMPONENT32F:A===Fl&&(q=o.DEPTH_COMPONENT16),q}function z(O,A){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Un&&O.minFilter!==In?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function B(O){const A=O.target;A.removeEventListener("dispose",B),Z(A),A.isVideoTexture&&g.delete(A)}function U(O){const A=O.target;A.removeEventListener("dispose",U),R(A)}function Z(O){const A=a.get(O);if(A.__webglInit===void 0)return;const q=O.source,mt=x.get(q);if(mt){const Mt=mt[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&C(O),Object.keys(mt).length===0&&x.delete(q)}a.remove(O)}function C(O){const A=a.get(O);o.deleteTexture(A.__webglTexture);const q=O.source,mt=x.get(q);delete mt[A.__cacheKey],c.memory.textures--}function R(O){const A=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(A.__webglFramebuffer[mt]))for(let Mt=0;Mt<A.__webglFramebuffer[mt].length;Mt++)o.deleteFramebuffer(A.__webglFramebuffer[mt][Mt]);else o.deleteFramebuffer(A.__webglFramebuffer[mt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[mt])}else{if(Array.isArray(A.__webglFramebuffer))for(let mt=0;mt<A.__webglFramebuffer.length;mt++)o.deleteFramebuffer(A.__webglFramebuffer[mt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let mt=0;mt<A.__webglColorRenderbuffer.length;mt++)A.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[mt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=O.textures;for(let mt=0,Mt=q.length;mt<Mt;mt++){const ht=a.get(q[mt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),c.memory.textures--),a.remove(q[mt])}a.remove(O)}let V=0;function K(){V=0}function Q(){const O=V;return O>=r.maxTextures&&oe("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),V+=1,O}function ft(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function at(O,A){const q=a.get(O);if(O.isVideoTexture&&fe(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const mt=O.image;if(mt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,O,A);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+A)}function P(O,A){const q=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){it(q,O,A);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+A)}function H(O,A){const q=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){it(q,O,A);return}e.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+A)}function et(O,A){const q=a.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){dt(q,O,A);return}e.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+A)}const Et={[Ep]:o.REPEAT,[La]:o.CLAMP_TO_EDGE,[Ap]:o.MIRRORED_REPEAT},St={[Un]:o.NEAREST,[zb]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[_d]:o.LINEAR_MIPMAP_NEAREST,[nr]:o.LINEAR_MIPMAP_LINEAR},F={[Ib]:o.NEVER,[Xb]:o.ALWAYS,[Hb]:o.LESS,[Sm]:o.LEQUAL,[Vb]:o.EQUAL,[Mm]:o.GEQUAL,[Gb]:o.GREATER,[kb]:o.NOTEQUAL};function nt(O,A){if(A.type===Zi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===In||A.magFilter===_d||A.magFilter===sc||A.magFilter===nr||A.minFilter===In||A.minFilter===_d||A.minFilter===sc||A.minFilter===nr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Et[A.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Et[A.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Et[A.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,St[A.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,St[A.minFilter]),A.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Un||A.minFilter!==sc&&A.minFilter!==nr||A.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function xt(O,A){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",B));const mt=A.source;let Mt=x.get(mt);Mt===void 0&&(Mt={},x.set(mt,Mt));const ht=ft(A);if(ht!==O.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,q=!0),Mt[ht].usedTimes++;const Yt=Mt[O.__cacheKey];Yt!==void 0&&(Mt[O.__cacheKey].usedTimes--,Yt.usedTimes===0&&C(A)),O.__cacheKey=ht,O.__webglTexture=Mt[ht].texture}return q}function Rt(O,A,q){return Math.floor(Math.floor(O/q)/A)}function It(O,A,q,mt){const ht=O.updateRanges;if(ht.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,q,mt,A.data);else{ht.sort((st,yt)=>st.start-yt.start);let Yt=0;for(let st=1;st<ht.length;st++){const yt=ht[Yt],wt=ht[st],Dt=yt.start+yt.count,Ut=Rt(wt.start,A.width,4),ie=Rt(yt.start,A.width,4);wt.start<=Dt+1&&Ut===ie&&Rt(wt.start+wt.count-1,A.width,4)===Ut?yt.count=Math.max(yt.count,wt.start+wt.count-yt.start):(++Yt,ht[Yt]=wt)}ht.length=Yt+1;const Lt=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),G=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let st=0,yt=ht.length;st<yt;st++){const wt=ht[st],Dt=Math.floor(wt.start/4),Ut=Math.ceil(wt.count/4),ie=Dt%A.width,W=Math.floor(Dt/A.width),zt=Ut,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),e.texSubImage2D(o.TEXTURE_2D,0,ie,W,zt,Tt,q,mt,A.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Lt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,G)}}function it(O,A,q){let mt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=o.TEXTURE_3D);const Mt=xt(O,A),ht=A.source;e.bindTexture(mt,O.__webglTexture,o.TEXTURE0+q);const Yt=a.get(ht);if(ht.version!==Yt.__version||Mt===!0){e.activeTexture(o.TEXTURE0+q);const Lt=Te.getPrimaries(Te.workingColorSpace),kt=A.colorSpace===Es?null:Te.getPrimaries(A.colorSpace),G=A.colorSpace===Es||Lt===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let st=E(A.image,!1,r.maxTextureSize);st=we(A,st);const yt=u.convert(A.format,A.colorSpace),wt=u.convert(A.type);let Dt=L(A.internalFormat,yt,wt,A.colorSpace,A.isVideoTexture);nt(mt,A);let Ut;const ie=A.mipmaps,W=A.isVideoTexture!==!0,zt=Yt.__version===void 0||Mt===!0,Tt=ht.dataReady,Nt=z(A,st);if(A.isDepthTexture)Dt=N(A.format===ir,A.type),zt&&(W?e.texStorage2D(o.TEXTURE_2D,1,Dt,st.width,st.height):e.texImage2D(o.TEXTURE_2D,0,Dt,st.width,st.height,0,yt,wt,null));else if(A.isDataTexture)if(ie.length>0){W&&zt&&e.texStorage2D(o.TEXTURE_2D,Nt,Dt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Ut=ie[bt],W?Tt&&e.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ut.width,Ut.height,yt,wt,Ut.data):e.texImage2D(o.TEXTURE_2D,bt,Dt,Ut.width,Ut.height,0,yt,wt,Ut.data);A.generateMipmaps=!1}else W?(zt&&e.texStorage2D(o.TEXTURE_2D,Nt,Dt,st.width,st.height),Tt&&It(A,st,yt,wt)):e.texImage2D(o.TEXTURE_2D,0,Dt,st.width,st.height,0,yt,wt,st.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&zt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Dt,ie[0].width,ie[0].height,st.depth);for(let bt=0,_t=ie.length;bt<_t;bt++)if(Ut=ie[bt],A.format!==Bi)if(yt!==null)if(W){if(Tt)if(A.layerUpdates.size>0){const Ct=Kx(Ut.width,Ut.height,A.format,A.type);for(const te of A.layerUpdates){const Ee=Ut.data.subarray(te*Ct/Ut.data.BYTES_PER_ELEMENT,(te+1)*Ct/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,te,Ut.width,Ut.height,1,yt,Ee)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ut.width,Ut.height,st.depth,yt,Ut.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Dt,Ut.width,Ut.height,st.depth,0,Ut.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ut.width,Ut.height,st.depth,yt,wt,Ut.data):e.texImage3D(o.TEXTURE_2D_ARRAY,bt,Dt,Ut.width,Ut.height,st.depth,0,yt,wt,Ut.data)}else{W&&zt&&e.texStorage2D(o.TEXTURE_2D,Nt,Dt,ie[0].width,ie[0].height);for(let bt=0,_t=ie.length;bt<_t;bt++)Ut=ie[bt],A.format!==Bi?yt!==null?W?Tt&&e.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ut.width,Ut.height,yt,Ut.data):e.compressedTexImage2D(o.TEXTURE_2D,bt,Dt,Ut.width,Ut.height,0,Ut.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&e.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ut.width,Ut.height,yt,wt,Ut.data):e.texImage2D(o.TEXTURE_2D,bt,Dt,Ut.width,Ut.height,0,yt,wt,Ut.data)}else if(A.isDataArrayTexture)if(W){if(zt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,Dt,st.width,st.height,st.depth),Tt)if(A.layerUpdates.size>0){const bt=Kx(st.width,st.height,A.format,A.type);for(const _t of A.layerUpdates){const Ct=st.data.subarray(_t*bt/st.data.BYTES_PER_ELEMENT,(_t+1)*bt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,st.width,st.height,1,yt,wt,Ct)}A.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,yt,wt,st.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Dt,st.width,st.height,st.depth,0,yt,wt,st.data);else if(A.isData3DTexture)W?(zt&&e.texStorage3D(o.TEXTURE_3D,Nt,Dt,st.width,st.height,st.depth),Tt&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,yt,wt,st.data)):e.texImage3D(o.TEXTURE_3D,0,Dt,st.width,st.height,st.depth,0,yt,wt,st.data);else if(A.isFramebufferTexture){if(zt)if(W)e.texStorage2D(o.TEXTURE_2D,Nt,Dt,st.width,st.height);else{let bt=st.width,_t=st.height;for(let Ct=0;Ct<Nt;Ct++)e.texImage2D(o.TEXTURE_2D,Ct,Dt,bt,_t,0,yt,wt,null),bt>>=1,_t>>=1}}else if(ie.length>0){if(W&&zt){const bt=qt(ie[0]);e.texStorage2D(o.TEXTURE_2D,Nt,Dt,bt.width,bt.height)}for(let bt=0,_t=ie.length;bt<_t;bt++)Ut=ie[bt],W?Tt&&e.texSubImage2D(o.TEXTURE_2D,bt,0,0,yt,wt,Ut):e.texImage2D(o.TEXTURE_2D,bt,Dt,yt,wt,Ut);A.generateMipmaps=!1}else if(W){if(zt){const bt=qt(st);e.texStorage2D(o.TEXTURE_2D,Nt,Dt,bt.width,bt.height)}Tt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,yt,wt,st)}else e.texImage2D(o.TEXTURE_2D,0,Dt,yt,wt,st);M(A)&&y(mt),Yt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function dt(O,A,q){if(A.image.length!==6)return;const mt=xt(O,A),Mt=A.source;e.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+q);const ht=a.get(Mt);if(Mt.version!==ht.__version||mt===!0){e.activeTexture(o.TEXTURE0+q);const Yt=Te.getPrimaries(Te.workingColorSpace),Lt=A.colorSpace===Es?null:Te.getPrimaries(A.colorSpace),kt=A.colorSpace===Es||Yt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const G=A.isCompressedTexture||A.image[0].isCompressedTexture,st=A.image[0]&&A.image[0].isDataTexture,yt=[];for(let _t=0;_t<6;_t++)!G&&!st?yt[_t]=E(A.image[_t],!0,r.maxCubemapSize):yt[_t]=st?A.image[_t].image:A.image[_t],yt[_t]=we(A,yt[_t]);const wt=yt[0],Dt=u.convert(A.format,A.colorSpace),Ut=u.convert(A.type),ie=L(A.internalFormat,Dt,Ut,A.colorSpace),W=A.isVideoTexture!==!0,zt=ht.__version===void 0||mt===!0,Tt=Mt.dataReady;let Nt=z(A,wt);nt(o.TEXTURE_CUBE_MAP,A);let bt;if(G){W&&zt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,ie,wt.width,wt.height);for(let _t=0;_t<6;_t++){bt=yt[_t].mipmaps;for(let Ct=0;Ct<bt.length;Ct++){const te=bt[Ct];A.format!==Bi?Dt!==null?W?Tt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,te.width,te.height,Dt,te.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ie,te.width,te.height,0,te.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,te.width,te.height,Dt,Ut,te.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ie,te.width,te.height,0,Dt,Ut,te.data)}}}else{if(bt=A.mipmaps,W&&zt){bt.length>0&&Nt++;const _t=qt(yt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(st){W?Tt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,yt[_t].width,yt[_t].height,Dt,Ut,yt[_t].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,yt[_t].width,yt[_t].height,0,Dt,Ut,yt[_t].data);for(let Ct=0;Ct<bt.length;Ct++){const Ee=bt[Ct].image[_t].image;W?Tt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Ee.width,Ee.height,Dt,Ut,Ee.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ie,Ee.width,Ee.height,0,Dt,Ut,Ee.data)}}else{W?Tt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Dt,Ut,yt[_t]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Dt,Ut,yt[_t]);for(let Ct=0;Ct<bt.length;Ct++){const te=bt[Ct];W?Tt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Dt,Ut,te.image[_t]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ie,Dt,Ut,te.image[_t])}}}M(A)&&y(o.TEXTURE_CUBE_MAP),ht.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Ot(O,A,q,mt,Mt,ht){const Yt=u.convert(q.format,q.colorSpace),Lt=u.convert(q.type),kt=L(q.internalFormat,Yt,Lt,q.colorSpace),G=a.get(A),st=a.get(q);if(st.__renderTarget=A,!G.__hasExternalTextures){const yt=Math.max(1,A.width>>ht),wt=Math.max(1,A.height>>ht);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?e.texImage3D(Mt,ht,kt,yt,wt,A.depth,0,Yt,Lt,null):e.texImage2D(Mt,ht,kt,yt,wt,0,Yt,Lt,null)}e.bindFramebuffer(o.FRAMEBUFFER,O),He(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,Mt,st.__webglTexture,0,k(A)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,Mt,st.__webglTexture,ht),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(O,A,q){if(o.bindRenderbuffer(o.RENDERBUFFER,O),A.depthBuffer){const mt=A.depthTexture,Mt=mt&&mt.isDepthTexture?mt.type:null,ht=N(A.stencilBuffer,Mt),Yt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;He(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(A),ht,A.width,A.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(A),ht,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ht,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,O)}else{const mt=A.textures;for(let Mt=0;Mt<mt.length;Mt++){const ht=mt[Mt],Yt=u.convert(ht.format,ht.colorSpace),Lt=u.convert(ht.type),kt=L(ht.internalFormat,Yt,Lt,ht.colorSpace);He(A)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(A),kt,A.width,A.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(A),kt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,kt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(O,A,q){const mt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(o.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=a.get(A.depthTexture);if(Mt.__renderTarget=A,(!Mt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),mt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,A.depthTexture.addEventListener("dispose",B)),Mt.__webglTexture===void 0){Mt.__webglTexture=o.createTexture(),e.bindTexture(o.TEXTURE_CUBE_MAP,Mt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,A.depthTexture);const G=u.convert(A.depthTexture.format),st=u.convert(A.depthTexture.type);let yt;A.depthTexture.format===Ba?yt=o.DEPTH_COMPONENT24:A.depthTexture.format===ir&&(yt=o.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,yt,A.width,A.height,0,G,st,null)}}else at(A.depthTexture,0);const ht=Mt.__webglTexture,Yt=k(A),Lt=mt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,kt=A.depthTexture.format===ir?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ba)He(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,Lt,ht,0,Yt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,Lt,ht,0);else if(A.depthTexture.format===ir)He(A)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,Lt,ht,0,Yt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,Lt,ht,0);else throw new Error("Unknown depthTexture format")}function pe(O){const A=a.get(O),q=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),mt){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,mt.removeEventListener("dispose",Mt)};mt.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=mt}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(q)for(let mt=0;mt<6;mt++)Ht(A.__webglFramebuffer[mt],O,mt);else{const mt=O.texture.mipmaps;mt&&mt.length>0?Ht(A.__webglFramebuffer[0],O,0):Ht(A.__webglFramebuffer,O,0)}else if(q){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]===void 0)A.__webglDepthbuffer[mt]=o.createRenderbuffer(),Gt(A.__webglDepthbuffer[mt],O,!1);else{const Mt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}else{const mt=O.texture.mipmaps;if(mt&&mt.length>0?e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Gt(A.__webglDepthbuffer,O,!1);else{const Mt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ht)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(O,A,q){const mt=a.get(O);A!==void 0&&Ot(mt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&pe(O)}function me(O){const A=O.texture,q=a.get(O),mt=a.get(A);O.addEventListener("dispose",U);const Mt=O.textures,ht=O.isWebGLCubeRenderTarget===!0,Yt=Mt.length>1;if(Yt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=A.version,c.memory.textures++),ht){q.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[Lt]=[];for(let kt=0;kt<A.mipmaps.length;kt++)q.__webglFramebuffer[Lt][kt]=o.createFramebuffer()}else q.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let Lt=0;Lt<A.mipmaps.length;Lt++)q.__webglFramebuffer[Lt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Lt=0,kt=Mt.length;Lt<kt;Lt++){const G=a.get(Mt[Lt]);G.__webglTexture===void 0&&(G.__webglTexture=o.createTexture(),c.memory.textures++)}if(O.samples>0&&He(O)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Mt.length;Lt++){const kt=Mt[Lt];q.__webglColorRenderbuffer[Lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Lt]);const G=u.convert(kt.format,kt.colorSpace),st=u.convert(kt.type),yt=L(kt.internalFormat,G,st,kt.colorSpace,O.isXRRenderTarget===!0),wt=k(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,yt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,q.__webglColorRenderbuffer[Lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Gt(q.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){e.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,A);for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)Ot(q.__webglFramebuffer[Lt][kt],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,kt);else Ot(q.__webglFramebuffer[Lt],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(A)&&y(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Yt){for(let Lt=0,kt=Mt.length;Lt<kt;Lt++){const G=Mt[Lt],st=a.get(G);let yt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(yt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(yt,st.__webglTexture),nt(yt,G),Ot(q.__webglFramebuffer,O,G,o.COLOR_ATTACHMENT0+Lt,yt,0),M(G)&&y(yt)}e.unbindTexture()}else{let Lt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Lt,mt.__webglTexture),nt(Lt,A),A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)Ot(q.__webglFramebuffer[kt],O,A,o.COLOR_ATTACHMENT0,Lt,kt);else Ot(q.__webglFramebuffer,O,A,o.COLOR_ATTACHMENT0,Lt,0);M(A)&&y(Lt),e.unbindTexture()}O.depthBuffer&&pe(O)}function he(O){const A=O.textures;for(let q=0,mt=A.length;q<mt;q++){const Mt=A[q];if(M(Mt)){const ht=D(O),Yt=a.get(Mt).__webglTexture;e.bindTexture(ht,Yt),y(ht),e.unbindTexture()}}}const be=[],ae=[];function $e(O){if(O.samples>0){if(He(O)===!1){const A=O.textures,q=O.width,mt=O.height;let Mt=o.COLOR_BUFFER_BIT;const ht=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=a.get(O),Lt=A.length>1;if(Lt)for(let G=0;G<A.length;G++)e.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+G,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+G,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const kt=O.texture.mipmaps;kt&&kt.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let G=0;G<A.length;G++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[G]);const st=a.get(A[G]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,st,0)}o.blitFramebuffer(0,0,q,mt,0,0,q,mt,Mt,o.NEAREST),p===!0&&(be.length=0,ae.length=0,be.push(o.COLOR_ATTACHMENT0+G),O.depthBuffer&&O.resolveDepthBuffer===!1&&(be.push(ht),ae.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Lt)for(let G=0;G<A.length;G++){e.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+G,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[G]);const st=a.get(A[G]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+G,o.TEXTURE_2D,st,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const A=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function k(O){return Math.min(r.maxSamples,O.samples)}function He(O){const A=a.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function fe(O){const A=c.render.frame;g.get(O)!==A&&(g.set(O,A),O.update())}function we(O,A){const q=O.colorSpace,mt=O.format,Mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==Mo&&q!==Es&&(Te.getTransfer(q)===Ie?(mt!==Bi||Mt!==ui)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",q)),A}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=K,this.setTexture2D=at,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=et,this.rebindTextures=Ze,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gw(o,t){function e(a,r=Es){let u;const c=Te.getTransfer(r);if(a===ui)return o.UNSIGNED_BYTE;if(a===gm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===_m)return o.UNSIGNED_SHORT_5_5_5_1;if(a===dy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===py)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===hy)return o.BYTE;if(a===fy)return o.SHORT;if(a===Fl)return o.UNSIGNED_SHORT;if(a===mm)return o.INT;if(a===ea)return o.UNSIGNED_INT;if(a===Zi)return o.FLOAT;if(a===Pa)return o.HALF_FLOAT;if(a===my)return o.ALPHA;if(a===gy)return o.RGB;if(a===Bi)return o.RGBA;if(a===Ba)return o.DEPTH_COMPONENT;if(a===ir)return o.DEPTH_STENCIL;if(a===_y)return o.RED;if(a===xm)return o.RED_INTEGER;if(a===So)return o.RG;if(a===vm)return o.RG_INTEGER;if(a===ym)return o.RGBA_INTEGER;if(a===Gc||a===kc||a===Xc||a===Wc)if(c===Ie)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===Gc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===kc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===Gc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===kc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Xc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Wc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Tp||a===wp||a===Cp||a===Rp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Tp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===wp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Cp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Rp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Dp||a===Up||a===Lp||a===Np||a===Op||a===zp||a===Fp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Dp||a===Up)return c===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Lp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===Np)return u.COMPRESSED_R11_EAC;if(a===Op)return u.COMPRESSED_SIGNED_R11_EAC;if(a===zp)return u.COMPRESSED_RG11_EAC;if(a===Fp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Pp||a===Bp||a===Ip||a===Hp||a===Vp||a===Gp||a===kp||a===Xp||a===Wp||a===qp||a===Yp||a===jp||a===Zp||a===$p)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Pp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Bp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ip)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Hp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Vp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Gp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===kp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Xp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Wp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===qp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Yp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===jp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Zp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===$p)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Kp||a===Qp||a===Jp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===Kp)return c===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Qp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Jp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===tm||a===em||a===nm||a===im)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===tm)return u.COMPRESSED_RED_RGTC1_EXT;if(a===em)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===nm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===im)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Pl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:e}}const _w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xw=`
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

}`;class vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const a=new Oy(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,a=new na({vertexShader:_w,fragmentShader:xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ia(new nh(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yw extends Eo{constructor(t,e){super();const a=this;let r=null,u=1,c=null,h="local-floor",p=1,d=null,g=null,_=null,x=null,v=null,b=null;const E=typeof XRWebGLBinding<"u",M=new vw,y={},D=e.getContextAttributes();let L=null,N=null;const z=[],B=[],U=new Xe;let Z=null;const C=new bi;C.viewport=new en;const R=new bi;R.viewport=new en;const V=[C,R],K=new DE;let Q=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let dt=z[it];return dt===void 0&&(dt=new Hd,z[it]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(it){let dt=z[it];return dt===void 0&&(dt=new Hd,z[it]=dt),dt.getGripSpace()},this.getHand=function(it){let dt=z[it];return dt===void 0&&(dt=new Hd,z[it]=dt),dt.getHandSpace()};function at(it){const dt=B.indexOf(it.inputSource);if(dt===-1)return;const Ot=z[dt];Ot!==void 0&&(Ot.update(it.inputSource,it.frame,d||c),Ot.dispatchEvent({type:it.type,data:it.inputSource}))}function P(){r.removeEventListener("select",at),r.removeEventListener("selectstart",at),r.removeEventListener("selectend",at),r.removeEventListener("squeeze",at),r.removeEventListener("squeezestart",at),r.removeEventListener("squeezeend",at),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",H);for(let it=0;it<z.length;it++){const dt=B[it];dt!==null&&(B[it]=null,z[it].disconnect(dt))}Q=null,ft=null,M.reset();for(const it in y)delete y[it];t.setRenderTarget(L),v=null,x=null,_=null,r=null,N=null,It.stop(),a.isPresenting=!1,t.setPixelRatio(Z),t.setSize(U.width,U.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,a.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,a.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(r,e)),_},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(L=t.getRenderTarget(),r.addEventListener("select",at),r.addEventListener("selectstart",at),r.addEventListener("selectend",at),r.addEventListener("squeeze",at),r.addEventListener("squeezestart",at),r.addEventListener("squeezeend",at),r.addEventListener("end",P),r.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await e.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(U),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,Gt=null,Ht=null;D.depth&&(Ht=D.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=D.stencil?ir:Ba,Gt=D.stencil?Pl:ea);const pe={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:u};_=this.getBinding(),x=_.createProjectionLayer(pe),r.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new Qi(x.textureWidth,x.textureHeight,{format:Bi,type:ui,depthTexture:new Il(x.textureWidth,x.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ot={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};v=new XRWebGLLayer(r,e,Ot),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),N=new Qi(v.framebufferWidth,v.framebufferHeight,{format:Bi,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await r.requestReferenceSpace(h),It.setContext(r),It.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(it){for(let dt=0;dt<it.removed.length;dt++){const Ot=it.removed[dt],Gt=B.indexOf(Ot);Gt>=0&&(B[Gt]=null,z[Gt].disconnect(Ot))}for(let dt=0;dt<it.added.length;dt++){const Ot=it.added[dt];let Gt=B.indexOf(Ot);if(Gt===-1){for(let pe=0;pe<z.length;pe++)if(pe>=B.length){B.push(Ot),Gt=pe;break}else if(B[pe]===null){B[pe]=Ot,Gt=pe;break}if(Gt===-1)break}const Ht=z[Gt];Ht&&Ht.connect(Ot)}}const et=new ut,Et=new ut;function St(it,dt,Ot){et.setFromMatrixPosition(dt.matrixWorld),Et.setFromMatrixPosition(Ot.matrixWorld);const Gt=et.distanceTo(Et),Ht=dt.projectionMatrix.elements,pe=Ot.projectionMatrix.elements,Ze=Ht[14]/(Ht[10]-1),me=Ht[14]/(Ht[10]+1),he=(Ht[9]+1)/Ht[5],be=(Ht[9]-1)/Ht[5],ae=(Ht[8]-1)/Ht[0],$e=(pe[8]+1)/pe[0],k=Ze*ae,He=Ze*$e,fe=Gt/(-ae+$e),we=fe*-ae;if(dt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(we),it.translateZ(fe),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ht[10]===-1)it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const qt=Ze+fe,O=me+fe,A=k-we,q=He+(Gt-we),mt=he*me/O*qt,Mt=be*me/O*qt;it.projectionMatrix.makePerspective(A,q,mt,Mt,qt,O),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function F(it,dt){dt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(dt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let dt=it.near,Ot=it.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Ot=M.depthFar)),K.near=R.near=C.near=dt,K.far=R.far=C.far=Ot,(Q!==K.near||ft!==K.far)&&(r.updateRenderState({depthNear:K.near,depthFar:K.far}),Q=K.near,ft=K.far),K.layers.mask=it.layers.mask|6,C.layers.mask=K.layers.mask&3,R.layers.mask=K.layers.mask&5;const Gt=it.parent,Ht=K.cameras;F(K,Gt);for(let pe=0;pe<Ht.length;pe++)F(Ht[pe],Gt);Ht.length===2?St(K,C,R):K.projectionMatrix.copy(C.projectionMatrix),nt(it,K,Gt)};function nt(it,dt,Ot){Ot===null?it.matrix.copy(dt.matrixWorld):(it.matrix.copy(Ot.matrixWorld),it.matrix.invert(),it.matrix.multiply(dt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=am*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&v===null))return p},this.setFoveation=function(it){p=it,x!==null&&(x.fixedFoveation=it),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(it){return y[it]};let xt=null;function Rt(it,dt){if(g=dt.getViewerPose(d||c),b=dt,g!==null){const Ot=g.views;v!==null&&(t.setRenderTargetFramebuffer(N,v.framebuffer),t.setRenderTarget(N));let Gt=!1;Ot.length!==K.cameras.length&&(K.cameras.length=0,Gt=!0);for(let me=0;me<Ot.length;me++){const he=Ot[me];let be=null;if(v!==null)be=v.getViewport(he);else{const $e=_.getViewSubImage(x,he);be=$e.viewport,me===0&&(t.setRenderTargetTextures(N,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(N))}let ae=V[me];ae===void 0&&(ae=new bi,ae.layers.enable(me),ae.viewport=new en,V[me]=ae),ae.matrix.fromArray(he.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(he.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(be.x,be.y,be.width,be.height),me===0&&(K.matrix.copy(ae.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Gt===!0&&K.cameras.push(ae)}const Ht=r.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){_=a.getBinding();const me=_.getDepthInformation(Ot[0]);me&&me.isValid&&me.texture&&M.init(me,r.renderState)}if(Ht&&Ht.includes("camera-access")&&E){t.state.unbindTexture(),_=a.getBinding();for(let me=0;me<Ot.length;me++){const he=Ot[me].camera;if(he){let be=y[he];be||(be=new Oy,y[he]=be);const ae=_.getCameraImage(he);be.sourceTexture=ae}}}}for(let Ot=0;Ot<z.length;Ot++){const Gt=B[Ot],Ht=z[Ot];Gt!==null&&Ht!==void 0&&Ht.update(Gt,dt,d||c)}xt&&xt(it,dt),dt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:dt}),b=null}const It=new Fy;It.setAnimationLoop(Rt),this.setAnimationLoop=function(it){xt=it},this.dispose=function(){}}}const $s=new Xl,Sw=new mn;function Mw(o,t){function e(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,Dy(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function r(M,y,D,L,N){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(M,y):y.isMeshToonMaterial?(u(M,y),_(M,y)):y.isMeshPhongMaterial?(u(M,y),g(M,y)):y.isMeshStandardMaterial?(u(M,y),x(M,y),y.isMeshPhysicalMaterial&&v(M,y,N)):y.isMeshMatcapMaterial?(u(M,y),b(M,y)):y.isMeshDepthMaterial?u(M,y):y.isMeshDistanceMaterial?(u(M,y),E(M,y)):y.isMeshNormalMaterial?u(M,y):y.isLineBasicMaterial?(c(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,D,L):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,e(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,e(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,e(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,e(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,e(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,e(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const D=t.get(y),L=D.envMap,N=D.envMapRotation;L&&(M.envMap.value=L,$s.copy(N),$s.x*=-1,$s.y*=-1,$s.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),M.envMapRotation.value.setFromMatrix4(Sw.makeRotationFromEuler($s)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,M.aoMapTransform))}function c(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,e(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,D,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*D,M.scale.value=L*.5,y.map&&(M.map.value=y.map,e(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,e(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,e(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,e(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function v(M,y,D){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function E(M,y){const D=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function bw(o,t,e,a){let r={},u={},c=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,L){const N=L.program;a.uniformBlockBinding(D,N)}function d(D,L){let N=r[D.id];N===void 0&&(b(D),N=g(D),r[D.id]=N,D.addEventListener("dispose",M));const z=L.program;a.updateUBOMapping(D,z);const B=t.render.frame;u[D.id]!==B&&(x(D),u[D.id]=B)}function g(D){const L=_();D.__bindingPointIndex=L;const N=o.createBuffer(),z=D.__size,B=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,z,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,N),N}function _(){for(let D=0;D<h;D++)if(c.indexOf(D)===-1)return c.push(D),D;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=r[D.id],N=D.uniforms,z=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let B=0,U=N.length;B<U;B++){const Z=Array.isArray(N[B])?N[B]:[N[B]];for(let C=0,R=Z.length;C<R;C++){const V=Z[C];if(v(V,B,C,z)===!0){const K=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let ft=0;for(let at=0;at<Q.length;at++){const P=Q[at],H=E(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,K+ft,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,ft),ft+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(D,L,N,z){const B=D.value,U=L+"_"+N;if(z[U]===void 0)return typeof B=="number"||typeof B=="boolean"?z[U]=B:z[U]=B.clone(),!0;{const Z=z[U];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return z[U]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function b(D){const L=D.uniforms;let N=0;const z=16;for(let U=0,Z=L.length;U<Z;U++){const C=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,V=C.length;R<V;R++){const K=C[R],Q=Array.isArray(K.value)?K.value:[K.value];for(let ft=0,at=Q.length;ft<at;ft++){const P=Q[ft],H=E(P),et=N%z,Et=et%H.boundary,St=et+Et;N+=Et,St!==0&&z-St<H.storage&&(N+=z-St),K.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=H.storage}}}const B=N%z;return B>0&&(N+=z-B),D.__size=N,D.__cache={},this}function E(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",D),L}function M(D){const L=D.target;L.removeEventListener("dispose",M);const N=c.indexOf(L.__bindingPointIndex);c.splice(N,1),o.deleteBuffer(r[L.id]),delete r[L.id],delete u[L.id]}function y(){for(const D in r)o.deleteBuffer(r[D]);c=[],r={},u={}}return{bind:p,update:d,dispose:y}}const Ew=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function Aw(){return Yi===null&&(Yi=new xE(Ew,16,16,So,Pa),Yi.name="DFG_LUT",Yi.minFilter=In,Yi.magFilter=In,Yi.wrapS=La,Yi.wrapT=La,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class Tw{constructor(t={}){const{canvas:e=Wb(),context:a=null,depth:r=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:v=ui}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=c;const E=v,M=new Set([ym,vm,xm]),y=new Set([ui,ea,Fl,Pl,gm,_m]),D=new Uint32Array(4),L=new Int32Array(4);let N=null,z=null;const B=[],U=[];let Z=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1;this._outputColorSpace=Mi;let V=0,K=0,Q=null,ft=-1,at=null;const P=new en,H=new en;let et=null;const Et=new ze(0);let St=0,F=e.width,nt=e.height,xt=1,Rt=null,It=null;const it=new en(0,0,F,nt),dt=new en(0,0,F,nt);let Ot=!1;const Gt=new Am;let Ht=!1,pe=!1;const Ze=new mn,me=new ut,he=new en,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function $e(){return Q===null?xt:1}let k=a;function He(w,Y){return e.getContext(w,Y)}try{const w={alpha:!0,depth:r,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pm}`),e.addEventListener("webglcontextlost",te,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),k===null){const Y="webgl2";if(k=He(Y,w),k===null)throw He(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw De("WebGLRenderer: "+w.message),w}let fe,we,qt,O,A,q,mt,Mt,ht,Yt,Lt,kt,G,st,yt,wt,Dt,Ut,ie,W,zt,Tt,Nt,bt;function _t(){fe=new AT(k),fe.init(),Tt=new gw(k,fe),we=new gT(k,fe,t,Tt),qt=new pw(k,fe),we.reversedDepthBuffer&&x&&qt.buffers.depth.setReversed(!0),O=new CT(k),A=new J2,q=new mw(k,fe,qt,A,we,Tt,O),mt=new xT(C),Mt=new ET(C),ht=new LE(k),Nt=new pT(k,ht),Yt=new TT(k,ht,O,Nt),Lt=new DT(k,Yt,ht,O),ie=new RT(k,we,q),wt=new _T(A),kt=new Q2(C,mt,Mt,fe,we,Nt,wt),G=new Mw(C,A),st=new ew,yt=new ow(fe),Ut=new dT(C,mt,Mt,qt,Lt,b,p),Dt=new fw(C,Lt,we),bt=new bw(k,O,we,qt),W=new mT(k,fe,O),zt=new wT(k,fe,O),O.programs=kt.programs,C.capabilities=we,C.extensions=fe,C.properties=A,C.renderLists=st,C.shadowMap=Dt,C.state=qt,C.info=O}_t(),E!==ui&&(Z=new LT(E,e.width,e.height,r,u));const Ct=new yw(C,k);this.xr=Ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(w){w!==void 0&&(xt=w,this.setSize(F,nt,!1))},this.getSize=function(w){return w.set(F,nt)},this.setSize=function(w,Y,lt=!0){if(Ct.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,nt=Y,e.width=Math.floor(w*xt),e.height=Math.floor(Y*xt),lt===!0&&(e.style.width=w+"px",e.style.height=Y+"px"),Z!==null&&Z.setSize(e.width,e.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(F*xt,nt*xt).floor()},this.setDrawingBufferSize=function(w,Y,lt){F=w,nt=Y,xt=lt,e.width=Math.floor(w*lt),e.height=Math.floor(Y*lt),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(E===ui){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(it)},this.setViewport=function(w,Y,lt,rt){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,Y,lt,rt),qt.viewport(P.copy(it).multiplyScalar(xt).round())},this.getScissor=function(w){return w.copy(dt)},this.setScissor=function(w,Y,lt,rt){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,Y,lt,rt),qt.scissor(H.copy(dt).multiplyScalar(xt).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(w){qt.setScissorTest(Ot=w)},this.setOpaqueSort=function(w){Rt=w},this.setTransparentSort=function(w){It=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,lt=!0){let rt=0;if(w){let $=!1;if(Q!==null){const Ft=Q.texture.format;$=M.has(Ft)}if($){const Ft=Q.texture.type,Vt=y.has(Ft),Pt=Ut.getClearColor(),Xt=Ut.getClearAlpha(),jt=Pt.r,Jt=Pt.g,Zt=Pt.b;Vt?(D[0]=jt,D[1]=Jt,D[2]=Zt,D[3]=Xt,k.clearBufferuiv(k.COLOR,0,D)):(L[0]=jt,L[1]=Jt,L[2]=Zt,L[3]=Xt,k.clearBufferiv(k.COLOR,0,L))}else rt|=k.COLOR_BUFFER_BIT}Y&&(rt|=k.DEPTH_BUFFER_BIT),lt&&(rt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),Ut.dispose(),st.dispose(),yt.dispose(),A.dispose(),mt.dispose(),Mt.dispose(),Lt.dispose(),Nt.dispose(),bt.dispose(),kt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ur),Ct.removeEventListener("sessionend",Do),Gi.stop()};function te(w){w.preventDefault(),Lx("WebGLRenderer: Context Lost."),R=!0}function Ee(){Lx("WebGLRenderer: Context Restored."),R=!1;const w=O.autoReset,Y=Dt.enabled,lt=Dt.autoUpdate,rt=Dt.needsUpdate,$=Dt.type;_t(),O.autoReset=w,Dt.enabled=Y,Dt.autoUpdate=lt,Dt.needsUpdate=rt,Dt.type=$}function Ae(w){De("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ln(w){const Y=w.target;Y.removeEventListener("dispose",Ln),Ai(Y)}function Ai(w){jl(w),A.remove(w)}function jl(w){const Y=A.get(w).programs;Y!==void 0&&(Y.forEach(function(lt){kt.releaseProgram(lt)}),w.isShaderMaterial&&kt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,lt,rt,$,Ft){Y===null&&(Y=be);const Vt=$.isMesh&&$.matrixWorld.determinant()<0,Pt=ws(w,Y,lt,rt,$);qt.setMaterial(rt,Vt);let Xt=lt.index,jt=1;if(rt.wireframe===!0){if(Xt=Yt.getWireframeAttribute(lt),Xt===void 0)return;jt=2}const Jt=lt.drawRange,Zt=lt.attributes.position;let ee=Jt.start*jt,Ue=(Jt.start+Jt.count)*jt;Ft!==null&&(ee=Math.max(ee,Ft.start*jt),Ue=Math.min(Ue,(Ft.start+Ft.count)*jt)),Xt!==null?(ee=Math.max(ee,0),Ue=Math.min(Ue,Xt.count)):Zt!=null&&(ee=Math.max(ee,0),Ue=Math.min(Ue,Zt.count));const Ke=Ue-ee;if(Ke<0||Ke===1/0)return;Nt.setup($,rt,Pt,lt,Xt);let qe,Oe=W;if(Xt!==null&&(qe=ht.get(Xt),Oe=zt,Oe.setIndex(qe)),$.isMesh)rt.wireframe===!0?(qt.setLineWidth(rt.wireframeLinewidth*$e()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if($.isLine){let Kt=rt.linewidth;Kt===void 0&&(Kt=1),qt.setLineWidth(Kt*$e()),$.isLineSegments?Oe.setMode(k.LINES):$.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else $.isPoints?Oe.setMode(k.POINTS):$.isSprite&&Oe.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Bl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))Oe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Kt=$._multiDrawStarts,Le=$._multiDrawCounts,se=$._multiDrawCount,Mn=Xt?ht.get(Xt).bytesPerElement:1,ia=A.get(rt).currentProgram.getUniforms();for(let bn=0;bn<se;bn++)ia.setValue(k,"_gl_DrawID",bn),Oe.render(Kt[bn]/Mn,Le[bn])}else if($.isInstancedMesh)Oe.renderInstances(ee,Ke,$.count);else if(lt.isInstancedBufferGeometry){const Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Le=Math.min(lt.instanceCount,Kt);Oe.renderInstances(ee,Ke,Le)}else Oe.render(ee,Ke)};function Co(w,Y,lt){w.transparent===!0&&w.side===Ua&&w.forceSinglePass===!1?(w.side=Kn,w.needsUpdate=!0,hr(w,Y,lt),w.side=Ts,w.needsUpdate=!0,hr(w,Y,lt),w.side=Ua):hr(w,Y,lt)}this.compile=function(w,Y,lt=null){lt===null&&(lt=w),z=yt.get(lt),z.init(Y),U.push(z),lt.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),w!==lt&&w.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(z.pushLight($),$.castShadow&&z.pushShadow($))}),z.setupLights();const rt=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ft=$.material;if(Ft)if(Array.isArray(Ft))for(let Vt=0;Vt<Ft.length;Vt++){const Pt=Ft[Vt];Co(Pt,lt,$),rt.add(Pt)}else Co(Ft,lt,$),rt.add(Ft)}),z=U.pop(),rt},this.compileAsync=function(w,Y,lt=null){const rt=this.compile(w,Y,lt);return new Promise($=>{function Ft(){if(rt.forEach(function(Vt){A.get(Vt).currentProgram.isReady()&&rt.delete(Vt)}),rt.size===0){$(w);return}setTimeout(Ft,10)}fe.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let lr=null;function Ro(w){lr&&lr(w)}function ur(){Gi.stop()}function Do(){Gi.start()}const Gi=new Fy;Gi.setAnimationLoop(Ro),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(w){lr=w,Ct.setAnimationLoop(w),w===null?Gi.stop():Gi.start()},Ct.addEventListener("sessionstart",ur),Ct.addEventListener("sessionend",Do),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const lt=Ct.enabled===!0&&Ct.isPresenting===!0,rt=Z!==null&&(Q===null||lt)&&Z.begin(C,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Y),Y=Ct.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,Y,Q),z=yt.get(w,U.length),z.init(Y),U.push(z),Ze.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Gt.setFromProjectionMatrix(Ze,$i,Y.reversedDepth),pe=this.localClippingEnabled,Ht=wt.init(this.clippingPlanes,pe),N=st.get(w,B.length),N.init(),B.push(N),Ct.enabled===!0&&Ct.isPresenting===!0){const Vt=C.xr.getDepthSensingMesh();Vt!==null&&ci(Vt,Y,-1/0,C.sortObjects)}ci(w,Y,0,C.sortObjects),N.finish(),C.sortObjects===!0&&N.sort(Rt,It),ae=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ae&&Ut.addToRenderList(N,w),this.info.render.frame++,Ht===!0&&wt.beginShadows();const $=z.state.shadowsArray;if(Dt.render($,w,Y),Ht===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt&&Z.hasRenderPass())===!1){const Vt=N.opaque,Pt=N.transmissive;if(z.setupLights(),Y.isArrayCamera){const Xt=Y.cameras;if(Pt.length>0)for(let jt=0,Jt=Xt.length;jt<Jt;jt++){const Zt=Xt[jt];Sn(Vt,Pt,w,Zt)}ae&&Ut.render(w);for(let jt=0,Jt=Xt.length;jt<Jt;jt++){const Zt=Xt[jt];sn(N,w,Zt,Zt.viewport)}}else Pt.length>0&&Sn(Vt,Pt,w,Y),ae&&Ut.render(w),sn(N,w,Y)}Q!==null&&K===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),rt&&Z.end(C),w.isScene===!0&&w.onAfterRender(C,w,Y),Nt.resetDefaultState(),ft=-1,at=null,U.pop(),U.length>0?(z=U[U.length-1],Ht===!0&&wt.setGlobalState(C.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function ci(w,Y,lt,rt){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)lt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)z.pushLight(w),w.castShadow&&z.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Gt.intersectsSprite(w)){rt&&he.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ze);const Vt=Lt.update(w),Pt=w.material;Pt.visible&&N.push(w,Vt,Pt,lt,he.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Gt.intersectsObject(w))){const Vt=Lt.update(w),Pt=w.material;if(rt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),he.copy(w.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),he.copy(Vt.boundingSphere.center)),he.applyMatrix4(w.matrixWorld).applyMatrix4(Ze)),Array.isArray(Pt)){const Xt=Vt.groups;for(let jt=0,Jt=Xt.length;jt<Jt;jt++){const Zt=Xt[jt],ee=Pt[Zt.materialIndex];ee&&ee.visible&&N.push(w,Vt,ee,lt,he.z,Zt)}}else Pt.visible&&N.push(w,Vt,Pt,lt,he.z,null)}}const Ft=w.children;for(let Vt=0,Pt=Ft.length;Vt<Pt;Vt++)ci(Ft[Vt],Y,lt,rt)}function sn(w,Y,lt,rt){const{opaque:$,transmissive:Ft,transparent:Vt}=w;z.setupLightsView(lt),Ht===!0&&wt.setGlobalState(C.clippingPlanes,lt),rt&&qt.viewport(P.copy(rt)),$.length>0&&Ti($,Y,lt),Ft.length>0&&Ti(Ft,Y,lt),Vt.length>0&&Ti(Vt,Y,lt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Sn(w,Y,lt,rt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[rt.id]===void 0){const ee=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[rt.id]=new Qi(1,1,{generateMipmaps:!0,type:ee?Pa:ui,minFilter:nr,samples:we.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Ft=z.state.transmissionRenderTarget[rt.id],Vt=rt.viewport||P;Ft.setSize(Vt.z*C.transmissionResolutionScale,Vt.w*C.transmissionResolutionScale);const Pt=C.getRenderTarget(),Xt=C.getActiveCubeFace(),jt=C.getActiveMipmapLevel();C.setRenderTarget(Ft),C.getClearColor(Et),St=C.getClearAlpha(),St<1&&C.setClearColor(16777215,.5),C.clear(),ae&&Ut.render(lt);const Jt=C.toneMapping;C.toneMapping=Ki;const Zt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),z.setupLightsView(rt),Ht===!0&&wt.setGlobalState(C.clippingPlanes,rt),Ti(w,lt,rt),q.updateMultisampleRenderTarget(Ft),q.updateRenderTargetMipmap(Ft),fe.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ue=0,Ke=Y.length;Ue<Ke;Ue++){const qe=Y[Ue],{object:Oe,geometry:Kt,material:Le,group:se}=qe;if(Le.side===Ua&&Oe.layers.test(rt.layers)){const Mn=Le.side;Le.side=Kn,Le.needsUpdate=!0,cr(Oe,lt,rt,Kt,Le,se),Le.side=Mn,Le.needsUpdate=!0,ee=!0}}ee===!0&&(q.updateMultisampleRenderTarget(Ft),q.updateRenderTargetMipmap(Ft))}C.setRenderTarget(Pt,Xt,jt),C.setClearColor(Et,St),Zt!==void 0&&(rt.viewport=Zt),C.toneMapping=Jt}function Ti(w,Y,lt){const rt=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ft=w.length;$<Ft;$++){const Vt=w[$],{object:Pt,geometry:Xt,group:jt}=Vt;let Jt=Vt.material;Jt.allowOverride===!0&&rt!==null&&(Jt=rt),Pt.layers.test(lt.layers)&&cr(Pt,Y,lt,Xt,Jt,jt)}}function cr(w,Y,lt,rt,$,Ft){w.onBeforeRender(C,Y,lt,rt,$,Ft),w.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(C,Y,lt,rt,w,Ft),$.transparent===!0&&$.side===Ua&&$.forceSinglePass===!1?($.side=Kn,$.needsUpdate=!0,C.renderBufferDirect(lt,Y,rt,$,w,Ft),$.side=Ts,$.needsUpdate=!0,C.renderBufferDirect(lt,Y,rt,$,w,Ft),$.side=Ua):C.renderBufferDirect(lt,Y,rt,$,w,Ft),w.onAfterRender(C,Y,lt,rt,$,Ft)}function hr(w,Y,lt){Y.isScene!==!0&&(Y=be);const rt=A.get(w),$=z.state.lights,Ft=z.state.shadowsArray,Vt=$.state.version,Pt=kt.getParameters(w,$.state,Ft,Y,lt),Xt=kt.getProgramCacheKey(Pt);let jt=rt.programs;rt.environment=w.isMeshStandardMaterial?Y.environment:null,rt.fog=Y.fog,rt.envMap=(w.isMeshStandardMaterial?Mt:mt).get(w.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,jt===void 0&&(w.addEventListener("dispose",Ln),jt=new Map,rt.programs=jt);let Jt=jt.get(Xt);if(Jt!==void 0){if(rt.currentProgram===Jt&&rt.lightsStateVersion===Vt)return Uo(w,Pt),Jt}else Pt.uniforms=kt.getUniforms(w),w.onBeforeCompile(Pt,C),Jt=kt.acquireProgram(Pt,Xt),jt.set(Xt,Jt),rt.uniforms=Pt.uniforms;const Zt=rt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=wt.uniform),Uo(w,Pt),rt.needsLights=Va(w),rt.lightsStateVersion=Vt,rt.needsLights&&(Zt.ambientLightColor.value=$.state.ambient,Zt.lightProbe.value=$.state.probe,Zt.directionalLights.value=$.state.directional,Zt.directionalLightShadows.value=$.state.directionalShadow,Zt.spotLights.value=$.state.spot,Zt.spotLightShadows.value=$.state.spotShadow,Zt.rectAreaLights.value=$.state.rectArea,Zt.ltc_1.value=$.state.rectAreaLTC1,Zt.ltc_2.value=$.state.rectAreaLTC2,Zt.pointLights.value=$.state.point,Zt.pointLightShadows.value=$.state.pointShadow,Zt.hemisphereLights.value=$.state.hemi,Zt.directionalShadowMap.value=$.state.directionalShadowMap,Zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Zt.spotShadowMap.value=$.state.spotShadowMap,Zt.spotLightMatrix.value=$.state.spotLightMatrix,Zt.spotLightMap.value=$.state.spotLightMap,Zt.pointShadowMap.value=$.state.pointShadowMap,Zt.pointShadowMatrix.value=$.state.pointShadowMatrix),rt.currentProgram=Jt,rt.uniformsList=null,Jt}function Zl(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=jc.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Uo(w,Y){const lt=A.get(w);lt.outputColorSpace=Y.outputColorSpace,lt.batching=Y.batching,lt.batchingColor=Y.batchingColor,lt.instancing=Y.instancing,lt.instancingColor=Y.instancingColor,lt.instancingMorph=Y.instancingMorph,lt.skinning=Y.skinning,lt.morphTargets=Y.morphTargets,lt.morphNormals=Y.morphNormals,lt.morphColors=Y.morphColors,lt.morphTargetsCount=Y.morphTargetsCount,lt.numClippingPlanes=Y.numClippingPlanes,lt.numIntersection=Y.numClipIntersection,lt.vertexAlphas=Y.vertexAlphas,lt.vertexTangents=Y.vertexTangents,lt.toneMapping=Y.toneMapping}function ws(w,Y,lt,rt,$){Y.isScene!==!0&&(Y=be),q.resetTextureUnits();const Ft=Y.fog,Vt=rt.isMeshStandardMaterial?Y.environment:null,Pt=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Mo,Xt=(rt.isMeshStandardMaterial?Mt:mt).get(rt.envMap||Vt),jt=rt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Zt=!!lt.morphAttributes.position,ee=!!lt.morphAttributes.normal,Ue=!!lt.morphAttributes.color;let Ke=Ki;rt.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ke=C.toneMapping);const qe=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Oe=qe!==void 0?qe.length:0,Kt=A.get(rt),Le=z.state.lights;if(Ht===!0&&(pe===!0||w!==at)){const An=w===at&&rt.id===ft;wt.setState(rt,w,An)}let se=!1;rt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Le.state.version||Kt.outputColorSpace!==Pt||$.isBatchedMesh&&Kt.batching===!1||!$.isBatchedMesh&&Kt.batching===!0||$.isBatchedMesh&&Kt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Kt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Kt.instancing===!1||!$.isInstancedMesh&&Kt.instancing===!0||$.isSkinnedMesh&&Kt.skinning===!1||!$.isSkinnedMesh&&Kt.skinning===!0||$.isInstancedMesh&&Kt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Kt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Kt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Kt.instancingMorph===!1&&$.morphTexture!==null||Kt.envMap!==Xt||rt.fog===!0&&Kt.fog!==Ft||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==wt.numPlanes||Kt.numIntersection!==wt.numIntersection)||Kt.vertexAlphas!==jt||Kt.vertexTangents!==Jt||Kt.morphTargets!==Zt||Kt.morphNormals!==ee||Kt.morphColors!==Ue||Kt.toneMapping!==Ke||Kt.morphTargetsCount!==Oe)&&(se=!0):(se=!0,Kt.__version=rt.version);let Mn=Kt.currentProgram;se===!0&&(Mn=hr(rt,Y,$));let ia=!1,bn=!1,hi=!1;const Fe=Mn.getUniforms(),En=Kt.uniforms;if(qt.useProgram(Mn.program)&&(ia=!0,bn=!0,hi=!0),rt.id!==ft&&(ft=rt.id,bn=!0),ia||at!==w){qt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Fe.setValue(k,"projectionMatrix",w.projectionMatrix),Fe.setValue(k,"viewMatrix",w.matrixWorldInverse);const Tn=Fe.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,me.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&Fe.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Fe.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),at!==w&&(at=w,bn=!0,hi=!0)}if(Kt.needsLights&&(Le.state.directionalShadowMap.length>0&&Fe.setValue(k,"directionalShadowMap",Le.state.directionalShadowMap,q),Le.state.spotShadowMap.length>0&&Fe.setValue(k,"spotShadowMap",Le.state.spotShadowMap,q),Le.state.pointShadowMap.length>0&&Fe.setValue(k,"pointShadowMap",Le.state.pointShadowMap,q)),$.isSkinnedMesh){Fe.setOptional(k,$,"bindMatrix"),Fe.setOptional(k,$,"bindMatrixInverse");const An=$.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Fe.setValue(k,"boneTexture",An.boneTexture,q))}$.isBatchedMesh&&(Fe.setOptional(k,$,"batchingTexture"),Fe.setValue(k,"batchingTexture",$._matricesTexture,q),Fe.setOptional(k,$,"batchingIdTexture"),Fe.setValue(k,"batchingIdTexture",$._indirectTexture,q),Fe.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Fe.setValue(k,"batchingColorTexture",$._colorsTexture,q));const dn=lt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ie.update($,lt,Mn),(bn||Kt.receiveShadow!==$.receiveShadow)&&(Kt.receiveShadow=$.receiveShadow,Fe.setValue(k,"receiveShadow",$.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(En.envMap.value=Xt,En.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Y.environment!==null&&(En.envMapIntensity.value=Y.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=Aw()),bn&&(Fe.setValue(k,"toneMappingExposure",C.toneMappingExposure),Kt.needsLights&&Lo(En,hi),Ft&&rt.fog===!0&&G.refreshFogUniforms(En,Ft),G.refreshMaterialUniforms(En,rt,xt,nt,z.state.transmissionRenderTarget[w.id]),jc.upload(k,Zl(Kt),En,q)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(jc.upload(k,Zl(Kt),En,q),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Fe.setValue(k,"center",$.center),Fe.setValue(k,"modelViewMatrix",$.modelViewMatrix),Fe.setValue(k,"normalMatrix",$.normalMatrix),Fe.setValue(k,"modelMatrix",$.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const An=rt.uniformsGroups;for(let Tn=0,fr=An.length;Tn<fr;Tn++){const wi=An[Tn];bt.update(wi,Mn),bt.bind(wi,Mn)}}return Mn}function Lo(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function Va(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,Y,lt){const rt=A.get(w);rt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),A.get(w.texture).__webglTexture=Y,A.get(w.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:lt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const lt=A.get(w);lt.__webglFramebuffer=Y,lt.__useDefaultFramebuffer=Y===void 0};const Ga=k.createFramebuffer();this.setRenderTarget=function(w,Y=0,lt=0){Q=w,V=Y,K=lt;let rt=null,$=!1,Ft=!1;if(w){const Pt=A.get(w);if(Pt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(k.FRAMEBUFFER,Pt.__webglFramebuffer),P.copy(w.viewport),H.copy(w.scissor),et=w.scissorTest,qt.viewport(P),qt.scissor(H),qt.setScissorTest(et),ft=-1;return}else if(Pt.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(Pt.__hasExternalTextures)q.rebindTextures(w,A.get(w.texture).__webglTexture,A.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Jt=w.depthTexture;if(Pt.__boundDepthTexture!==Jt){if(Jt!==null&&A.has(Jt)&&(w.width!==Jt.image.width||w.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ft=!0);const jt=A.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(jt[Y])?rt=jt[Y][lt]:rt=jt[Y],$=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?rt=A.get(w).__webglMultisampledFramebuffer:Array.isArray(jt)?rt=jt[lt]:rt=jt,P.copy(w.viewport),H.copy(w.scissor),et=w.scissorTest}else P.copy(it).multiplyScalar(xt).floor(),H.copy(dt).multiplyScalar(xt).floor(),et=Ot;if(lt!==0&&(rt=Ga),qt.bindFramebuffer(k.FRAMEBUFFER,rt)&&qt.drawBuffers(w,rt),qt.viewport(P),qt.scissor(H),qt.setScissorTest(et),$){const Pt=A.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,lt)}else if(Ft){const Pt=Y;for(let Xt=0;Xt<w.textures.length;Xt++){const jt=A.get(w.textures[Xt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Xt,jt.__webglTexture,lt,Pt)}}else if(w!==null&&lt!==0){const Pt=A.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pt.__webglTexture,lt)}ft=-1},this.readRenderTargetPixels=function(w,Y,lt,rt,$,Ft,Vt,Pt=0){if(!(w&&w.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){qt.bindFramebuffer(k.FRAMEBUFFER,Xt);try{const jt=w.textures[Pt],Jt=jt.format,Zt=jt.type;if(!we.textureFormatReadable(Jt)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Zt)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-rt&&lt>=0&&lt<=w.height-$&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt),k.readPixels(Y,lt,rt,$,Tt.convert(Jt),Tt.convert(Zt),Ft))}finally{const jt=Q!==null?A.get(Q).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,lt,rt,$,Ft,Vt,Pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=A.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(Y>=0&&Y<=w.width-rt&&lt>=0&&lt<=w.height-$){qt.bindFramebuffer(k.FRAMEBUFFER,Xt);const jt=w.textures[Pt],Jt=jt.format,Zt=jt.type;if(!we.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ee),k.bufferData(k.PIXEL_PACK_BUFFER,Ft.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt),k.readPixels(Y,lt,rt,$,Tt.convert(Jt),Tt.convert(Zt),0);const Ue=Q!==null?A.get(Q).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,Ue);const Ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await qb(k,Ke,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ee),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ft),k.deleteBuffer(ee),k.deleteSync(Ke),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,lt=0){const rt=Math.pow(2,-lt),$=Math.floor(w.image.width*rt),Ft=Math.floor(w.image.height*rt),Vt=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;q.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,lt,0,0,Vt,Pt,$,Ft),qt.unbindTexture()};const Cs=k.createFramebuffer(),ka=k.createFramebuffer();this.copyTextureToTexture=function(w,Y,lt=null,rt=null,$=0,Ft=null){Ft===null&&($!==0?(Bl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ft=$,$=0):Ft=0);let Vt,Pt,Xt,jt,Jt,Zt,ee,Ue,Ke;const qe=w.isCompressedTexture?w.mipmaps[Ft]:w.image;if(lt!==null)Vt=lt.max.x-lt.min.x,Pt=lt.max.y-lt.min.y,Xt=lt.isBox3?lt.max.z-lt.min.z:1,jt=lt.min.x,Jt=lt.min.y,Zt=lt.isBox3?lt.min.z:0;else{const dn=Math.pow(2,-$);Vt=Math.floor(qe.width*dn),Pt=Math.floor(qe.height*dn),w.isDataArrayTexture?Xt=qe.depth:w.isData3DTexture?Xt=Math.floor(qe.depth*dn):Xt=1,jt=0,Jt=0,Zt=0}rt!==null?(ee=rt.x,Ue=rt.y,Ke=rt.z):(ee=0,Ue=0,Ke=0);const Oe=Tt.convert(Y.format),Kt=Tt.convert(Y.type);let Le;Y.isData3DTexture?(q.setTexture3D(Y,0),Le=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Le=k.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Le=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const se=k.getParameter(k.UNPACK_ROW_LENGTH),Mn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ia=k.getParameter(k.UNPACK_SKIP_PIXELS),bn=k.getParameter(k.UNPACK_SKIP_ROWS),hi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,qe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zt);const Fe=w.isDataArrayTexture||w.isData3DTexture,En=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const dn=A.get(w),An=A.get(Y),Tn=A.get(dn.__renderTarget),fr=A.get(An.__renderTarget);qt.bindFramebuffer(k.READ_FRAMEBUFFER,Tn.__webglFramebuffer),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let wi=0;wi<Xt;wi++)Fe&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(w).__webglTexture,$,Zt+wi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(Y).__webglTexture,Ft,Ke+wi)),k.blitFramebuffer(jt,Jt,Vt,Pt,ee,Ue,Vt,Pt,k.DEPTH_BUFFER_BIT,k.NEAREST);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||A.has(w)){const dn=A.get(w),An=A.get(Y);qt.bindFramebuffer(k.READ_FRAMEBUFFER,Cs),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,ka);for(let Tn=0;Tn<Xt;Tn++)Fe?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,dn.__webglTexture,$,Zt+Tn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,dn.__webglTexture,$),En?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,An.__webglTexture,Ft,Ke+Tn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,An.__webglTexture,Ft),$!==0?k.blitFramebuffer(jt,Jt,Vt,Pt,ee,Ue,Vt,Pt,k.COLOR_BUFFER_BIT,k.NEAREST):En?k.copyTexSubImage3D(Le,Ft,ee,Ue,Ke+Tn,jt,Jt,Vt,Pt):k.copyTexSubImage2D(Le,Ft,ee,Ue,jt,Jt,Vt,Pt);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else En?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Le,Ft,ee,Ue,Ke,Vt,Pt,Xt,Oe,Kt,qe.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Le,Ft,ee,Ue,Ke,Vt,Pt,Xt,Oe,qe.data):k.texSubImage3D(Le,Ft,ee,Ue,Ke,Vt,Pt,Xt,Oe,Kt,qe):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ft,ee,Ue,Vt,Pt,Oe,Kt,qe.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ft,ee,Ue,qe.width,qe.height,Oe,qe.data):k.texSubImage2D(k.TEXTURE_2D,Ft,ee,Ue,Vt,Pt,Oe,Kt,qe);k.pixelStorei(k.UNPACK_ROW_LENGTH,se),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ia),k.pixelStorei(k.UNPACK_SKIP_ROWS,bn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hi),Ft===0&&Y.generateMipmaps&&k.generateMipmap(Le),qt.unbindTexture()},this.initRenderTarget=function(w){A.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),qt.unbindTexture()},this.resetState=function(){V=0,K=0,Q=null,qt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}class ta{constructor(t,e,a,r,u="div"){this.parent=t,this.object=e,this.property=a,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(u),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),ta.nextNameID=ta.nextNameID||0,this.$name.id=`lil-gui-name-${++ta.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(a)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ww extends ta{constructor(t,e,a){super(t,e,a,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function lm(o){let t,e;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Cw={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:lm,toHexString:lm},Hl={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Rw={isPrimitive:!1,match:o=>Array.isArray(o)||ArrayBuffer.isView(o),fromHexString(o,t,e=1){const a=Hl.fromHexString(o);t[0]=(a>>16&255)/255*e,t[1]=(a>>8&255)/255*e,t[2]=(a&255)/255*e},toHexString([o,t,e],a=1){a=255/a;const r=o*a<<16^t*a<<8^e*a<<0;return Hl.toHexString(r)}},Dw={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,e=1){const a=Hl.fromHexString(o);t.r=(a>>16&255)/255*e,t.g=(a>>8&255)/255*e,t.b=(a&255)/255*e},toHexString({r:o,g:t,b:e},a=1){a=255/a;const r=o*a<<16^t*a<<8^e*a<<0;return Hl.toHexString(r)}},Uw=[Cw,Hl,Rw,Dw];function Lw(o){return Uw.find(t=>t.match(o))}class Nw extends ta{constructor(t,e,a,r){super(t,e,a,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Lw(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=lm(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Zd extends ta{constructor(t,e,a){super(t,e,a,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ow extends ta{constructor(t,e,a,r,u,c){super(t,e,a,"lil-number"),this._initInput(),this.min(r),this.max(u);const h=c!==void 0;this.step(h?c:this._getImplicitStep(),h),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let D=parseFloat(this.$input.value);isNaN(D)||(this._stepExplicit&&(D=this._snap(D)),this.setValue(this._clamp(D)))},a=D=>{const L=parseFloat(this.$input.value);isNaN(L)||(this._snapClampSetValue(L+D),this.$input.value=this.getValue())},r=D=>{D.key==="Enter"&&this.$input.blur(),D.code==="ArrowUp"&&(D.preventDefault(),a(this._step*this._arrowKeyMultiplier(D))),D.code==="ArrowDown"&&(D.preventDefault(),a(this._step*this._arrowKeyMultiplier(D)*-1))},u=D=>{this._inputFocused&&(D.preventDefault(),a(this._step*this._normalizeMouseWheel(D)))};let c=!1,h,p,d,g,_;const x=5,v=D=>{h=D.clientX,p=d=D.clientY,c=!0,g=this.getValue(),_=0,window.addEventListener("mousemove",b),window.addEventListener("mouseup",E)},b=D=>{if(c){const L=D.clientX-h,N=D.clientY-p;Math.abs(N)>x?(D.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(L)>x&&E()}if(!c){const L=D.clientY-d;_-=L*this._step*this._arrowKeyMultiplier(D),g+_>this._max?_=this._max-g:g+_<this._min&&(_=this._min-g),this._snapClampSetValue(g+_)}d=D.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",E)},M=()=>{this._inputFocused=!0},y=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",u,{passive:!1}),this.$input.addEventListener("mousedown",v),this.$input.addEventListener("focus",M),this.$input.addEventListener("blur",y)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(y,D,L,N,z)=>(y-D)/(L-D)*(z-N)+N,e=y=>{const D=this.$slider.getBoundingClientRect();let L=t(y,D.left,D.right,this._min,this._max);this._snapClampSetValue(L)},a=y=>{this._setDraggingStyle(!0),e(y.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",u)},r=y=>{e(y.clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",u)};let c=!1,h,p;const d=y=>{y.preventDefault(),this._setDraggingStyle(!0),e(y.touches[0].clientX),c=!1},g=y=>{y.touches.length>1||(this._hasScrollBar?(h=y.touches[0].clientX,p=y.touches[0].clientY,c=!0):d(y),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",x))},_=y=>{if(c){const D=y.touches[0].clientX-h,L=y.touches[0].clientY-p;Math.abs(D)>Math.abs(L)?d(y):(window.removeEventListener("touchmove",_),window.removeEventListener("touchend",x))}else y.preventDefault(),e(y.touches[0].clientX)},x=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",x)},v=this._callOnFinishChange.bind(this),b=400;let E;const M=y=>{if(Math.abs(y.deltaX)<Math.abs(y.deltaY)&&this._hasScrollBar)return;y.preventDefault();const L=this._normalizeMouseWheel(y)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(E),E=setTimeout(v,b)};this.$slider.addEventListener("mousedown",a),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",M,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:a}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,a=-t.wheelDelta/120,a*=this._stepExplicit?1:10),e+-a}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class zw extends ta{constructor(t,e,a,r){super(t,e,a,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const a=document.createElement("option");a.textContent=e,this.$select.appendChild(a)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Fw extends ta{constructor(t,e,a){super(t,e,a,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Pw=`.lil-gui {
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
}`;function Bw(o){const t=document.createElement("style");t.innerHTML=o;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Sv=!1;class wm{constructor({parent:t,autoPlace:e=t===void 0,container:a,width:r,title:u="Controls",closeFolders:c=!1,injectStyles:h=!0,touchStyles:p=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(u),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),p&&this.domElement.classList.add("lil-allow-touch-styles"),!Sv&&h&&(Bw(Pw),Sv=!0),a?a.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=c}add(t,e,a,r,u){if(Object(a)===a)return new zw(this,t,e,a);const c=t[e];switch(typeof c){case"number":return new Ow(this,t,e,a,r,u);case"boolean":return new ww(this,t,e);case"string":return new Fw(this,t,e);case"function":return new Zd(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,c)}addColor(t,e,a=1){return new Nw(this,t,e,a)}addFolder(t){const e=new wm({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(a=>{a instanceof Zd||a._name in t.controllers&&a.load(t.controllers[a._name])}),e&&t.folders&&this.folders.forEach(a=>{a._title in t.folders&&a.load(t.folders[a._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(a=>{if(!(a instanceof Zd)){if(a._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${a._name}"`);e.controllers[a._name]=a.save()}}),t&&this.folders.forEach(a=>{if(a._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${a._title}"`);e.folders[a._title]=a.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const a=u=>{u.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",a))};this.$children.addEventListener("transitionend",a);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(a=>a.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const ce={sizing:{paddingSmall:"4px",paddingMedium:"8px",spacingMedium:"8px",edgeMedium:"12px",edgeLarge:"22px"},colors:{text:"#ebebeb",textLight:"#ebebeb",textDark:"#00000",overlay:"rgba(0, 0, 0, 0.5)"},typography:{fontFamily:"monospace",fontSizeSmall:"10px"},ui:{zIndex:"1000"}};ce.panelBase={color:ce.colors.text,background:ce.colors.overlay,padding:ce.sizing.paddingMedium,fontFamily:ce.typography.fontFamily,fontSize:ce.typography.fontSizeSmall,zIndex:ce.ui.zIndex};ce.buttonBase={color:ce.colors.text,background:ce.colors.overlay,padding:ce.sizing.paddingMedium,border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",cursor:"pointer",fontFamily:ce.typography.fontFamily,fontSize:ce.typography.fontSizeSmall,pointerEvents:"auto",zIndex:ce.ui.zIndex};class Vy{constructor({container:t,title:e=null,style:a={},close:r=!1}={}){this.gui=new wm({title:e,autoPlace:!1}),Object.assign(this.gui.domElement.style,ce.panelBase,a);const u=this.gui.domElement.querySelector(".lil-title");e===null&&u&&(u.style.display="none"),r&&this.gui.close(),t.appendChild(this.gui.domElement),this._proxies={}}addParams(t){for(const e in t)this.#t(e,t[e])}#t(t,e){const{type:a=typeof e.value,value:r,min:u,max:c,step:h,label:p,onChange:d}=e,g={value:r};let _;switch(a){case"boolean":_=this.gui.add(g,"value").name(p??t);break;case"number":_=this.gui.add(g,"value",u,c,h).name(p??t);break;default:console.warn(`[VSGUI] Unsupported param type: ${a}`,t);return}_.onChange(x=>{d?.(x)}),this._proxies[t]={proxy:g,controller:_,config:e}}reset(){for(const t in this._proxies){const{proxy:e,controller:a,config:r}=this._proxies[t];e.value=r.value,a.updateDisplay(),r.onChange?.(e.value)}}show(t){if(!this.gui)return;const e=this.gui.domElement.style.display!=="none";t===void 0?this.gui.domElement.style.display=e?"none":"block":this.gui.domElement.style.display=t?"block":"none"}destroy(){this.gui.destroy(),this.gui=null}}class Jc{constructor({scene:t,camera:e,renderer:a,container:r,audioEngine:u,debugOverlay:c,title:h="Simulation",description:p="This is a simulation."}){if(this.onAudioEngineInit!==Jc.prototype.onAudioEngineInit)throw new Error("onAudioEngineInit must not be overridden - override onAudioStart");if(this.onAudioEngineShutdown!==Jc.prototype.onAudioEngineShutdown)throw new Error("onAudioEngineShutdown must not be overridden - override onAudioStop");this.scene=t,this.camera=e,this.renderer=a,this.container=r,this.audioEngine=u,this.audioBus=null,this.debugOverlay=c,this.gui=new Vy({container:r,title:h,close:!1,style:{...ce.panelBase,marginTop:ce.sizing.spacingMedium,minWidth:"100%",maxWidth:"100%"}}),this.showParams(!0)}onEnter(){}onExit(){}onPause(){}onResume(){}onAudioStart(){}onAudioStop(){}onAudioEngineInit(){this.audioBus=this.audioEngine.createSimBus(),this.onAudioStart()}async onAudioEngineShutdown(){this.audioBus&&(await this.audioEngine.releaseSimBus(this.audioBus),this.audioBus=null),this.onAudioStop()}showParams(t){this.gui.show(t)}update(t){}dispose(){this.gui?.destroy(),this.gui=null}}const Gy="157",ao={ROTATE:0,DOLLY:1,PAN:2},so={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mv=0,bv=1,Iw=100,Hw=204,Vw=205,Gw=3,ky=300,Ev=1e3,Tc=1001,Av=1002,kw=1006,Xw=1008,Ww=1009,qw=1015,Yw=1023,jw=3e3,$d=3001,Zc="",Fi="srgb",Cm="srgb-linear",Zw="display-p3",Xy="display-p3-linear",um="linear",Tv="srgb",wv="rec709",Cv="p3",Kd=7680,$w=519,Rv=35044,wc=2e3,Dv=2001;class ql{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(e)===-1&&a[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const u=r.indexOf(e);u!==-1&&r.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let u=0,c=r.length;u<c;u++)r[u].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uv=1234567;const Wy=Math.PI/180,qy=180/Math.PI;function To(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[e&63|128]+Fn[e>>8&255]+"-"+Fn[e>>16&255]+Fn[e>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function Bn(o,t,e){return Math.max(t,Math.min(e,o))}function Rm(o,t){return(o%t+t)%t}function Kw(o,t,e,a,r){return a+(o-t)*(r-a)/(e-t)}function Qw(o,t,e){return o!==t?(e-o)/(t-o):0}function zl(o,t,e){return(1-e)*o+e*t}function Jw(o,t,e,a){return zl(o,t,1-Math.exp(-e*a))}function tC(o,t=1){return t-Math.abs(Rm(o,t*2)-t)}function eC(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function nC(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function iC(o,t){return o+Math.floor(Math.random()*(t-o+1))}function aC(o,t){return o+Math.random()*(t-o)}function sC(o){return o*(.5-Math.random())}function rC(o){o!==void 0&&(Uv=o);let t=Uv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function oC(o){return o*Wy}function lC(o){return o*qy}function uC(o){return(o&o-1)===0&&o!==0}function cC(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function hC(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function fC(o,t,e,a,r){const u=Math.cos,c=Math.sin,h=u(e/2),p=c(e/2),d=u((t+a)/2),g=c((t+a)/2),_=u((t-a)/2),x=c((t-a)/2),v=u((a-t)/2),b=c((a-t)/2);switch(r){case"XYX":o.set(h*g,p*_,p*x,h*d);break;case"YZY":o.set(p*x,h*g,p*_,h*d);break;case"ZXZ":o.set(p*_,p*x,h*g,h*d);break;case"XZX":o.set(h*g,p*b,p*v,h*d);break;case"YXY":o.set(p*v,h*g,p*b,h*d);break;case"ZYZ":o.set(p*b,p*v,h*g,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Yy={DEG2RAD:Wy,RAD2DEG:qy,generateUUID:To,clamp:Bn,euclideanModulo:Rm,mapLinear:Kw,inverseLerp:Qw,lerp:zl,damp:Jw,pingpong:tC,smoothstep:eC,smootherstep:nC,randInt:iC,randFloat:aC,randFloatSpread:sC,seededRandom:rC,degToRad:oC,radToDeg:lC,isPowerOfTwo:uC,ceilPowerOfTwo:cC,floorPowerOfTwo:hC,setQuaternionFromProperEuler:fC,normalize:Vn,denormalize:mo};class fn{constructor(t=0,e=0){fn.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,a=this.y,r=t.elements;return this.x=r[0]*e+r[3]*a+r[6],this.y=r[1]*e+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(e,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Bn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y;return e*e+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const a=Math.cos(e),r=Math.sin(e),u=this.x-t.x,c=this.y-t.y;return this.x=u*a-c*r+t.x,this.y=u*r+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ha{constructor(t,e,a,r,u,c,h,p,d){Ha.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,a,r,u,c,h,p,d)}set(t,e,a,r,u,c,h,p,d){const g=this.elements;return g[0]=t,g[1]=r,g[2]=h,g[3]=e,g[4]=u,g[5]=p,g[6]=a,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],this}extractBasis(t,e,a){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,u=this.elements,c=a[0],h=a[3],p=a[6],d=a[1],g=a[4],_=a[7],x=a[2],v=a[5],b=a[8],E=r[0],M=r[3],y=r[6],D=r[1],L=r[4],N=r[7],z=r[2],B=r[5],U=r[8];return u[0]=c*E+h*D+p*z,u[3]=c*M+h*L+p*B,u[6]=c*y+h*N+p*U,u[1]=d*E+g*D+_*z,u[4]=d*M+g*L+_*B,u[7]=d*y+g*N+_*U,u[2]=x*E+v*D+b*z,u[5]=x*M+v*L+b*B,u[8]=x*y+v*N+b*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[1],r=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return e*c*g-e*h*d-a*u*g+a*h*p+r*u*d-r*c*p}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=g*c-h*d,x=h*p-g*u,v=d*u-c*p,b=e*_+a*x+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=_*E,t[1]=(r*d-g*a)*E,t[2]=(h*a-r*c)*E,t[3]=x*E,t[4]=(g*e-r*p)*E,t[5]=(r*u-h*e)*E,t[6]=v*E,t[7]=(a*p-d*e)*E,t[8]=(c*e-a*u)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,a,r,u,c,h){const p=Math.cos(u),d=Math.sin(u);return this.set(a*p,a*d,-a*(p*c+d*h)+c+t,-r*d,r*p,-r*(-d*c+p*h)+h+e,0,0,1),this}scale(t,e){return this.premultiply(Qd.makeScale(t,e)),this}rotate(t){return this.premultiply(Qd.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,a,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<9;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<9;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qd=new Ha;function dC(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Lv(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}const Nv={};function Jd(o){o in Nv||(Nv[o]=!0,console.warn(o))}const Ov=new Ha().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zv=new Ha().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cc={[Cm]:{transfer:um,primaries:wv,toReference:o=>o,fromReference:o=>o},[Fi]:{transfer:Tv,primaries:wv,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Xy]:{transfer:um,primaries:Cv,toReference:o=>o.applyMatrix3(zv),fromReference:o=>o.applyMatrix3(Ov)},[Zw]:{transfer:Tv,primaries:Cv,toReference:o=>o.convertSRGBToLinear().applyMatrix3(zv),fromReference:o=>o.applyMatrix3(Ov).convertLinearToSRGB()}},pC=new Set([Cm,Xy]),Oi={enabled:!0,_workingColorSpace:Cm,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!pC.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const a=Cc[t].toReference,r=Cc[e].fromReference;return r(a(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Cc[o].primaries},getTransfer:function(o){return o===Zc?um:Cc[o].transfer}};function xo(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function tp(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ro;class mC{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ro===void 0&&(ro=Lv("canvas")),ro.width=t.width,ro.height=t.height;const a=ro.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),e=ro}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lv("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),u=r.data;for(let c=0;c<u.length;c++)u[c]=xo(u[c]/255)*255;return a.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let a=0;a<e.length;a++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[a]=Math.floor(xo(e[a]/255)*255):e[a]=xo(e[a]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gC=0;class _C{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=To(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let u;if(Array.isArray(r)){u=[];for(let c=0,h=r.length;c<h;c++)r[c].isDataTexture?u.push(ep(r[c].image)):u.push(ep(r[c]))}else u=ep(r);a.url=u}return e||(t.images[this.uuid]=a),a}}function ep(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?mC.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xC=0;class ar extends ql{constructor(t=ar.DEFAULT_IMAGE,e=ar.DEFAULT_MAPPING,a=Tc,r=Tc,u=kw,c=Xw,h=Yw,p=Ww,d=ar.DEFAULT_ANISOTROPY,g=Zc){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xC++}),this.uuid=To(),this.name="",this.source=new _C(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new fn(0,0),this.repeat=new fn(1,1),this.center=new fn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ha,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Jd("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===$d?Fi:Zc),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),e||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ky)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ev:t.x=t.x-Math.floor(t.x);break;case Tc:t.x=t.x<0?0:1;break;case Av:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ev:t.y=t.y-Math.floor(t.y);break;case Tc:t.y=t.y<0?0:1;break;case Av:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jd("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fi?$d:jw}set encoding(t){Jd("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===$d?Fi:Zc}}ar.DEFAULT_IMAGE=null;ar.DEFAULT_MAPPING=ky;ar.DEFAULT_ANISOTROPY=1;class rr{constructor(t=0,e=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=a,this._w=r}static slerpFlat(t,e,a,r,u,c,h){let p=a[r+0],d=a[r+1],g=a[r+2],_=a[r+3];const x=u[c+0],v=u[c+1],b=u[c+2],E=u[c+3];if(h===0){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h===1){t[e+0]=x,t[e+1]=v,t[e+2]=b,t[e+3]=E;return}if(_!==E||p!==x||d!==v||g!==b){let M=1-h;const y=p*x+d*v+g*b+_*E,D=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const z=Math.sqrt(L),B=Math.atan2(z,y*D);M=Math.sin(M*B)/z,h=Math.sin(h*B)/z}const N=h*D;if(p=p*M+x*N,d=d*M+v*N,g=g*M+b*N,_=_*M+E*N,M===1-h){const z=1/Math.sqrt(p*p+d*d+g*g+_*_);p*=z,d*=z,g*=z,_*=z}}t[e]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_}static multiplyQuaternionsFlat(t,e,a,r,u,c){const h=a[r],p=a[r+1],d=a[r+2],g=a[r+3],_=u[c],x=u[c+1],v=u[c+2],b=u[c+3];return t[e]=h*b+g*_+p*v-d*x,t[e+1]=p*b+g*x+d*_-h*v,t[e+2]=d*b+g*v+h*x-p*_,t[e+3]=g*b-h*_-p*x-d*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,a,r){return this._x=t,this._y=e,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const a=t._x,r=t._y,u=t._z,c=t._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(r/2),_=h(u/2),x=p(a/2),v=p(r/2),b=p(u/2);switch(c){case"XYZ":this._x=x*g*_+d*v*b,this._y=d*v*_-x*g*b,this._z=d*g*b+x*v*_,this._w=d*g*_-x*v*b;break;case"YXZ":this._x=x*g*_+d*v*b,this._y=d*v*_-x*g*b,this._z=d*g*b-x*v*_,this._w=d*g*_+x*v*b;break;case"ZXY":this._x=x*g*_-d*v*b,this._y=d*v*_+x*g*b,this._z=d*g*b+x*v*_,this._w=d*g*_-x*v*b;break;case"ZYX":this._x=x*g*_-d*v*b,this._y=d*v*_+x*g*b,this._z=d*g*b-x*v*_,this._w=d*g*_+x*v*b;break;case"YZX":this._x=x*g*_+d*v*b,this._y=d*v*_+x*g*b,this._z=d*g*b-x*v*_,this._w=d*g*_-x*v*b;break;case"XZY":this._x=x*g*_-d*v*b,this._y=d*v*_-x*g*b,this._z=d*g*b+x*v*_,this._w=d*g*_+x*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const a=e/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,a=e[0],r=e[4],u=e[8],c=e[1],h=e[5],p=e[9],d=e[2],g=e[6],_=e[10],x=a+h+_;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(g-p)*v,this._y=(u-d)*v,this._z=(c-r)*v}else if(a>h&&a>_){const v=2*Math.sqrt(1+a-h-_);this._w=(g-p)/v,this._x=.25*v,this._y=(r+c)/v,this._z=(u+d)/v}else if(h>_){const v=2*Math.sqrt(1+h-a-_);this._w=(u-d)/v,this._x=(r+c)/v,this._y=.25*v,this._z=(p+g)/v}else{const v=2*Math.sqrt(1+_-a-h);this._w=(c-r)/v,this._x=(u+d)/v,this._y=(p+g)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let a=t.dot(e)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Bn(this.dot(t),-1,1)))}rotateTowards(t,e){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,e/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const a=t._x,r=t._y,u=t._z,c=t._w,h=e._x,p=e._y,d=e._z,g=e._w;return this._x=a*g+c*h+r*d-u*p,this._y=r*g+c*p+u*h-a*d,this._z=u*g+c*d+a*p-r*h,this._w=c*g-a*h-r*p-u*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const a=this._x,r=this._y,u=this._z,c=this._w;let h=c*t._w+a*t._x+r*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=c,this._x=a,this._y=r,this._z=u,this;const p=1-h*h;if(p<=Number.EPSILON){const v=1-e;return this._w=v*c+e*this._w,this._x=v*a+e*this._x,this._y=v*r+e*this._y,this._z=v*u+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(p),g=Math.atan2(d,h),_=Math.sin((1-e)*g)/d,x=Math.sin(e*g)/d;return this._w=c*_+this._w*x,this._x=a*_+this._x*x,this._y=r*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,e,a){return this.copy(t).slerp(e,a)}random(){const t=Math.random(),e=Math.sqrt(1-t),a=Math.sqrt(t),r=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(e*Math.cos(r),a*Math.sin(u),a*Math.cos(u),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class At{constructor(t=0,e=0,a=0){At.prototype.isVector3=!0,this.x=t,this.y=e,this.z=a}set(t,e,a){return a===void 0&&(a=this.z),this.x=t,this.y=e,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,a=this.y,r=this.z,u=t.elements;return this.x=u[0]*e+u[3]*a+u[6]*r,this.y=u[1]*e+u[4]*a+u[7]*r,this.z=u[2]*e+u[5]*a+u[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,u=t.elements,c=1/(u[3]*e+u[7]*a+u[11]*r+u[15]);return this.x=(u[0]*e+u[4]*a+u[8]*r+u[12])*c,this.y=(u[1]*e+u[5]*a+u[9]*r+u[13])*c,this.z=(u[2]*e+u[6]*a+u[10]*r+u[14])*c,this}applyQuaternion(t){const e=this.x,a=this.y,r=this.z,u=t.x,c=t.y,h=t.z,p=t.w,d=p*e+c*r-h*a,g=p*a+h*e-u*r,_=p*r+u*a-c*e,x=-u*e-c*a-h*r;return this.x=d*p+x*-u+g*-h-_*-c,this.y=g*p+x*-c+_*-u-d*-h,this.z=_*p+x*-h+d*-c-g*-u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,a=this.y,r=this.z,u=t.elements;return this.x=u[0]*e+u[4]*a+u[8]*r,this.y=u[1]*e+u[5]*a+u[9]*r,this.z=u[2]*e+u[6]*a+u[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(e,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const a=t.x,r=t.y,u=t.z,c=e.x,h=e.y,p=e.z;return this.x=r*p-u*h,this.y=u*c-a*p,this.z=a*h-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const a=t.dot(this)/e;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return np.copy(this).projectOnVector(t),this.sub(np)}reflect(t){return this.sub(np.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Bn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return e*e+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,a){const r=Math.sin(e)*t;return this.x=r*Math.sin(a),this.y=Math.cos(e)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,a){return this.x=t*Math.sin(e),this.y=a,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=a,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,a=Math.sqrt(1-t**2);return this.x=a*Math.cos(e),this.y=a*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new At,Fv=new rr;class Yl{constructor(t=new At(1/0,1/0,1/0),e=new At(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e+=3)this.expandByPoint(wa.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,a=t.count;e<a;e++)this.expandByPoint(wa.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const a=wa.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),oo.copy(t.boundingBox),oo.applyMatrix4(t.matrixWorld),this.union(oo);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const u=r.attributes.position;for(let c=0,h=u.count;c<h;c++)wa.fromBufferAttribute(u,c).applyMatrix4(t.matrixWorld),this.expandByPoint(wa)}else r.boundingBox===null&&r.computeBoundingBox(),oo.copy(r.boundingBox),oo.applyMatrix4(t.matrixWorld),this.union(oo)}const a=t.children;for(let r=0,u=a.length;r<u;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wa),wa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,a;return t.normal.x>0?(e=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),e<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rl),Rc.subVectors(this.max,Rl),lo.subVectors(t.a,Rl),uo.subVectors(t.b,Rl),co.subVectors(t.c,Rl),vs.subVectors(uo,lo),ys.subVectors(co,uo),Ks.subVectors(lo,co);let e=[0,-vs.z,vs.y,0,-ys.z,ys.y,0,-Ks.z,Ks.y,vs.z,0,-vs.x,ys.z,0,-ys.x,Ks.z,0,-Ks.x,-vs.y,vs.x,0,-ys.y,ys.x,0,-Ks.y,Ks.x,0];return!ip(e,lo,uo,co,Rc)||(e=[1,0,0,0,1,0,0,0,1],!ip(e,lo,uo,co,Rc))?!1:(Dc.crossVectors(vs,ys),e=[Dc.x,Dc.y,Dc.z],ip(e,lo,uo,co,Rc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ta=[new At,new At,new At,new At,new At,new At,new At,new At],wa=new At,oo=new Yl,lo=new At,uo=new At,co=new At,vs=new At,ys=new At,Ks=new At,Rl=new At,Rc=new At,Dc=new At,Qs=new At;function ip(o,t,e,a,r){for(let u=0,c=o.length-3;u<=c;u+=3){Qs.fromArray(o,u);const h=r.x*Math.abs(Qs.x)+r.y*Math.abs(Qs.y)+r.z*Math.abs(Qs.z),p=t.dot(Qs),d=e.dot(Qs),g=a.dot(Qs);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const vC=new Yl,Dl=new At,ap=new At;class Dm{constructor(t=new At,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const a=this.center;e!==void 0?a.copy(e):vC.setFromPoints(t).getCenter(a);let r=0;for(let u=0,c=t.length;u<c;u++)r=Math.max(r,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const a=this.center.distanceToSquared(t);return e.copy(t),a>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dl.subVectors(t,this.center);const e=Dl.lengthSq();if(e>this.radius*this.radius){const a=Math.sqrt(e),r=(a-this.radius)*.5;this.center.addScaledVector(Dl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ap.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dl.copy(t.center).add(ap)),this.expandByPoint(Dl.copy(t.center).sub(ap))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ca=new At,sp=new At,Uc=new At,Ss=new At,rp=new At,Lc=new At,op=new At;class Um{constructor(t=new At,e=new At(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const a=e.dot(this.direction);return a<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ca.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,e),Ca.distanceToSquared(t))}distanceSqToSegment(t,e,a,r){sp.copy(t).add(e).multiplyScalar(.5),Uc.copy(e).sub(t).normalize(),Ss.copy(this.origin).sub(sp);const u=t.distanceTo(e)*.5,c=-this.direction.dot(Uc),h=Ss.dot(this.direction),p=-Ss.dot(Uc),d=Ss.lengthSq(),g=Math.abs(1-c*c);let _,x,v,b;if(g>0)if(_=c*p-h,x=c*h-p,b=u*g,_>=0)if(x>=-b)if(x<=b){const E=1/g;_*=E,x*=E,v=_*(_+c*x+2*h)+x*(c*_+x+2*p)+d}else x=u,_=Math.max(0,-(c*x+h)),v=-_*_+x*(x+2*p)+d;else x=-u,_=Math.max(0,-(c*x+h)),v=-_*_+x*(x+2*p)+d;else x<=-b?(_=Math.max(0,-(-c*u+h)),x=_>0?-u:Math.min(Math.max(-u,-p),u),v=-_*_+x*(x+2*p)+d):x<=b?(_=0,x=Math.min(Math.max(-u,-p),u),v=x*(x+2*p)+d):(_=Math.max(0,-(c*u+h)),x=_>0?u:Math.min(Math.max(-u,-p),u),v=-_*_+x*(x+2*p)+d);else x=c>0?-u:u,_=Math.max(0,-(c*x+h)),v=-_*_+x*(x+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(sp).addScaledVector(Uc,x),v}intersectSphere(t,e){Ca.subVectors(t.center,this.origin);const a=Ca.dot(this.direction),r=Ca.dot(Ca)-a*a,u=t.radius*t.radius;if(r>u)return null;const c=Math.sqrt(u-r),h=a-c,p=a+c;return p<0?null:h<0?this.at(p,e):this.at(h,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/e;return a>=0?a:null}intersectPlane(t,e){const a=this.distanceToPlane(t);return a===null?null:this.at(a,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let a,r,u,c,h,p;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return d>=0?(a=(t.min.x-x.x)*d,r=(t.max.x-x.x)*d):(a=(t.max.x-x.x)*d,r=(t.min.x-x.x)*d),g>=0?(u=(t.min.y-x.y)*g,c=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,c=(t.min.y-x.y)*g),a>c||u>r||((u>a||isNaN(a))&&(a=u),(c<r||isNaN(r))&&(r=c),_>=0?(h=(t.min.z-x.z)*_,p=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,p=(t.min.z-x.z)*_),a>p||h>r)||((h>a||a!==a)&&(a=h),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,e)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,e,a,r,u){rp.subVectors(e,t),Lc.subVectors(a,t),op.crossVectors(rp,Lc);let c=this.direction.dot(op),h;if(c>0){if(r)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Ss.subVectors(this.origin,t);const p=h*this.direction.dot(Lc.crossVectors(Ss,Lc));if(p<0)return null;const d=h*this.direction.dot(rp.cross(Ss));if(d<0||p+d>c)return null;const g=-h*Ss.dot(op);return g<0?null:this.at(g/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ei{constructor(t,e,a,r,u,c,h,p,d,g,_,x,v,b,E,M){Ei.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,a,r,u,c,h,p,d,g,_,x,v,b,E,M)}set(t,e,a,r,u,c,h,p,d,g,_,x,v,b,E,M){const y=this.elements;return y[0]=t,y[4]=e,y[8]=a,y[12]=r,y[1]=u,y[5]=c,y[9]=h,y[13]=p,y[2]=d,y[6]=g,y[10]=_,y[14]=x,y[3]=v,y[7]=b,y[11]=E,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ei().fromArray(this.elements)}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],e[9]=a[9],e[10]=a[10],e[11]=a[11],e[12]=a[12],e[13]=a[13],e[14]=a[14],e[15]=a[15],this}copyPosition(t){const e=this.elements,a=t.elements;return e[12]=a[12],e[13]=a[13],e[14]=a[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,a){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,e,a){return this.set(t.x,e.x,a.x,0,t.y,e.y,a.y,0,t.z,e.z,a.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,a=t.elements,r=1/ho.setFromMatrixColumn(t,0).length(),u=1/ho.setFromMatrixColumn(t,1).length(),c=1/ho.setFromMatrixColumn(t,2).length();return e[0]=a[0]*r,e[1]=a[1]*r,e[2]=a[2]*r,e[3]=0,e[4]=a[4]*u,e[5]=a[5]*u,e[6]=a[6]*u,e[7]=0,e[8]=a[8]*c,e[9]=a[9]*c,e[10]=a[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,a=t.x,r=t.y,u=t.z,c=Math.cos(a),h=Math.sin(a),p=Math.cos(r),d=Math.sin(r),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const x=c*g,v=c*_,b=h*g,E=h*_;e[0]=p*g,e[4]=-p*_,e[8]=d,e[1]=v+b*d,e[5]=x-E*d,e[9]=-h*p,e[2]=E-x*d,e[6]=b+v*d,e[10]=c*p}else if(t.order==="YXZ"){const x=p*g,v=p*_,b=d*g,E=d*_;e[0]=x+E*h,e[4]=b*h-v,e[8]=c*d,e[1]=c*_,e[5]=c*g,e[9]=-h,e[2]=v*h-b,e[6]=E+x*h,e[10]=c*p}else if(t.order==="ZXY"){const x=p*g,v=p*_,b=d*g,E=d*_;e[0]=x-E*h,e[4]=-c*_,e[8]=b+v*h,e[1]=v+b*h,e[5]=c*g,e[9]=E-x*h,e[2]=-c*d,e[6]=h,e[10]=c*p}else if(t.order==="ZYX"){const x=c*g,v=c*_,b=h*g,E=h*_;e[0]=p*g,e[4]=b*d-v,e[8]=x*d+E,e[1]=p*_,e[5]=E*d+x,e[9]=v*d-b,e[2]=-d,e[6]=h*p,e[10]=c*p}else if(t.order==="YZX"){const x=c*p,v=c*d,b=h*p,E=h*d;e[0]=p*g,e[4]=E-x*_,e[8]=b*_+v,e[1]=_,e[5]=c*g,e[9]=-h*g,e[2]=-d*g,e[6]=v*_+b,e[10]=x-E*_}else if(t.order==="XZY"){const x=c*p,v=c*d,b=h*p,E=h*d;e[0]=p*g,e[4]=-_,e[8]=d*g,e[1]=x*_+E,e[5]=c*g,e[9]=v*_-b,e[2]=b*_-v,e[6]=h*g,e[10]=E*_+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yC,t,SC)}lookAt(t,e,a){const r=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ms.crossVectors(a,oi),Ms.lengthSq()===0&&(Math.abs(a.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ms.crossVectors(a,oi)),Ms.normalize(),Nc.crossVectors(oi,Ms),r[0]=Ms.x,r[4]=Nc.x,r[8]=oi.x,r[1]=Ms.y,r[5]=Nc.y,r[9]=oi.y,r[2]=Ms.z,r[6]=Nc.z,r[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,u=this.elements,c=a[0],h=a[4],p=a[8],d=a[12],g=a[1],_=a[5],x=a[9],v=a[13],b=a[2],E=a[6],M=a[10],y=a[14],D=a[3],L=a[7],N=a[11],z=a[15],B=r[0],U=r[4],Z=r[8],C=r[12],R=r[1],V=r[5],K=r[9],Q=r[13],ft=r[2],at=r[6],P=r[10],H=r[14],et=r[3],Et=r[7],St=r[11],F=r[15];return u[0]=c*B+h*R+p*ft+d*et,u[4]=c*U+h*V+p*at+d*Et,u[8]=c*Z+h*K+p*P+d*St,u[12]=c*C+h*Q+p*H+d*F,u[1]=g*B+_*R+x*ft+v*et,u[5]=g*U+_*V+x*at+v*Et,u[9]=g*Z+_*K+x*P+v*St,u[13]=g*C+_*Q+x*H+v*F,u[2]=b*B+E*R+M*ft+y*et,u[6]=b*U+E*V+M*at+y*Et,u[10]=b*Z+E*K+M*P+y*St,u[14]=b*C+E*Q+M*H+y*F,u[3]=D*B+L*R+N*ft+z*et,u[7]=D*U+L*V+N*at+z*Et,u[11]=D*Z+L*K+N*P+z*St,u[15]=D*C+L*Q+N*H+z*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[4],r=t[8],u=t[12],c=t[1],h=t[5],p=t[9],d=t[13],g=t[2],_=t[6],x=t[10],v=t[14],b=t[3],E=t[7],M=t[11],y=t[15];return b*(+u*p*_-r*d*_-u*h*x+a*d*x+r*h*v-a*p*v)+E*(+e*p*v-e*d*x+u*c*x-r*c*v+r*d*g-u*p*g)+M*(+e*d*_-e*h*v-u*c*_+a*c*v+u*h*g-a*d*g)+y*(-r*h*g-e*p*_+e*h*x+r*c*_-a*c*x+a*p*g)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=a),this}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],u=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],_=t[9],x=t[10],v=t[11],b=t[12],E=t[13],M=t[14],y=t[15],D=_*M*d-E*x*d+E*p*v-h*M*v-_*p*y+h*x*y,L=b*x*d-g*M*d-b*p*v+c*M*v+g*p*y-c*x*y,N=g*E*d-b*_*d+b*h*v-c*E*v-g*h*y+c*_*y,z=b*_*p-g*E*p-b*h*x+c*E*x+g*h*M-c*_*M,B=e*D+a*L+r*N+u*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return t[0]=D*U,t[1]=(E*x*u-_*M*u-E*r*v+a*M*v+_*r*y-a*x*y)*U,t[2]=(h*M*u-E*p*u+E*r*d-a*M*d-h*r*y+a*p*y)*U,t[3]=(_*p*u-h*x*u-_*r*d+a*x*d+h*r*v-a*p*v)*U,t[4]=L*U,t[5]=(g*M*u-b*x*u+b*r*v-e*M*v-g*r*y+e*x*y)*U,t[6]=(b*p*u-c*M*u-b*r*d+e*M*d+c*r*y-e*p*y)*U,t[7]=(c*x*u-g*p*u+g*r*d-e*x*d-c*r*v+e*p*v)*U,t[8]=N*U,t[9]=(b*_*u-g*E*u-b*a*v+e*E*v+g*a*y-e*_*y)*U,t[10]=(c*E*u-b*h*u+b*a*d-e*E*d-c*a*y+e*h*y)*U,t[11]=(g*h*u-c*_*u-g*a*d+e*_*d+c*a*v-e*h*v)*U,t[12]=z*U,t[13]=(g*E*r-b*_*r+b*a*x-e*E*x-g*a*M+e*_*M)*U,t[14]=(b*h*r-c*E*r-b*a*p+e*E*p+c*a*M-e*h*M)*U,t[15]=(c*_*r-g*h*r+g*a*p-e*_*p-c*a*x+e*h*x)*U,this}scale(t){const e=this.elements,a=t.x,r=t.y,u=t.z;return e[0]*=a,e[4]*=r,e[8]*=u,e[1]*=a,e[5]*=r,e[9]*=u,e[2]*=a,e[6]*=r,e[10]*=u,e[3]*=a,e[7]*=r,e[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,a,r))}makeTranslation(t,e,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,a,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,e,-a,0,0,a,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,0,a,0,0,1,0,0,-a,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,0,a,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const a=Math.cos(e),r=Math.sin(e),u=1-a,c=t.x,h=t.y,p=t.z,d=u*c,g=u*h;return this.set(d*c+a,d*h-r*p,d*p+r*h,0,d*h+r*p,g*h+a,g*p-r*c,0,d*p-r*h,g*p+r*c,u*p*p+a,0,0,0,0,1),this}makeScale(t,e,a){return this.set(t,0,0,0,0,e,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,e,a,r,u,c){return this.set(1,a,u,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,a){const r=this.elements,u=e._x,c=e._y,h=e._z,p=e._w,d=u+u,g=c+c,_=h+h,x=u*d,v=u*g,b=u*_,E=c*g,M=c*_,y=h*_,D=p*d,L=p*g,N=p*_,z=a.x,B=a.y,U=a.z;return r[0]=(1-(E+y))*z,r[1]=(v+N)*z,r[2]=(b-L)*z,r[3]=0,r[4]=(v-N)*B,r[5]=(1-(x+y))*B,r[6]=(M+D)*B,r[7]=0,r[8]=(b+L)*U,r[9]=(M-D)*U,r[10]=(1-(x+E))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,a){const r=this.elements;let u=ho.set(r[0],r[1],r[2]).length();const c=ho.set(r[4],r[5],r[6]).length(),h=ho.set(r[8],r[9],r[10]).length();this.determinant()<0&&(u=-u),t.x=r[12],t.y=r[13],t.z=r[14],zi.copy(this);const d=1/u,g=1/c,_=1/h;return zi.elements[0]*=d,zi.elements[1]*=d,zi.elements[2]*=d,zi.elements[4]*=g,zi.elements[5]*=g,zi.elements[6]*=g,zi.elements[8]*=_,zi.elements[9]*=_,zi.elements[10]*=_,e.setFromRotationMatrix(zi),a.x=u,a.y=c,a.z=h,this}makePerspective(t,e,a,r,u,c,h=wc){const p=this.elements,d=2*u/(e-t),g=2*u/(a-r),_=(e+t)/(e-t),x=(a+r)/(a-r);let v,b;if(h===wc)v=-(c+u)/(c-u),b=-2*c*u/(c-u);else if(h===Dv)v=-c/(c-u),b=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=d,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=v,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,e,a,r,u,c,h=wc){const p=this.elements,d=1/(e-t),g=1/(a-r),_=1/(c-u),x=(e+t)*d,v=(a+r)*g;let b,E;if(h===wc)b=(c+u)*_,E=-2*_;else if(h===Dv)b=u*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-v,p[2]=0,p[6]=0,p[10]=E,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<16;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<16;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t[e+9]=a[9],t[e+10]=a[10],t[e+11]=a[11],t[e+12]=a[12],t[e+13]=a[13],t[e+14]=a[14],t[e+15]=a[15],t}}const ho=new At,zi=new Ei,yC=new At(0,0,0),SC=new At(1,1,1),Ms=new At,Nc=new At,oi=new At,Pv=new Ei,Bv=new rr;class sh{constructor(t=0,e=0,a=0,r=sh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,a,r=this._order){return this._x=t,this._y=e,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,a=!0){const r=t.elements,u=r[0],c=r[4],h=r[8],p=r[1],d=r[5],g=r[9],_=r[2],x=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(Bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,v),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,v),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Bn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,v));break;case"XZY":this._z=Math.asin(-Bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,a){return Pv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pv,e,a)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sh.DEFAULT_ORDER="XYZ";class MC{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bC=0;const Iv=new At,fo=new rr,Ra=new Ei,Oc=new At,Ul=new At,EC=new At,AC=new rr,Hv=new At(1,0,0),Vv=new At(0,1,0),Gv=new At(0,0,1),TC={type:"added"},wC={type:"removed"};class Ii extends ql{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ii.DEFAULT_UP.clone();const t=new At,e=new sh,a=new rr,r=new At(1,1,1);function u(){a.setFromEuler(e,!1)}function c(){e.setFromQuaternion(a,void 0,!1)}e._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ei},normalMatrix:{value:new Ha}}),this.matrix=new Ei,this.matrixWorld=new Ei,this.matrixAutoUpdate=Ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new MC,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.multiply(fo),this}rotateOnWorldAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.premultiply(fo),this}rotateX(t){return this.rotateOnAxis(Hv,t)}rotateY(t){return this.rotateOnAxis(Vv,t)}rotateZ(t){return this.rotateOnAxis(Gv,t)}translateOnAxis(t,e){return Iv.copy(t).applyQuaternion(this.quaternion),this.position.add(Iv.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hv,t)}translateY(t){return this.translateOnAxis(Vv,t)}translateZ(t){return this.translateOnAxis(Gv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,e,a){t.isVector3?Oc.copy(t):Oc.set(t,e,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Ul,Oc,this.up):Ra.lookAt(Oc,Ul,this.up),this.quaternion.setFromRotationMatrix(Ra),r&&(Ra.extractRotation(r.matrixWorld),fo.setFromRotationMatrix(Ra),this.quaternion.premultiply(fo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(TC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wC)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e){let a=[];this[t]===e&&a.push(this);for(let r=0,u=this.children.length;r<u;r++){const c=this.children[r].getObjectsByProperty(t,e);c.length>0&&(a=a.concat(c))}return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,t,EC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,AC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let a=0,r=e.length;a<r;a++){const u=e[a];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let u=0,c=r.length;u<c;u++){const h=r[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",a={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const _=p[d];u(t.shapes,_)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(u(t.materials,this.material[p]));r.material=h}else r.material=u(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];r.animations.push(u(t.animations,p))}}if(e){const h=c(t.geometries),p=c(t.materials),d=c(t.textures),g=c(t.images),_=c(t.shapes),x=c(t.skeletons),v=c(t.animations),b=c(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),v.length>0&&(a.animations=v),b.length>0&&(a.nodes=b)}return a.object=r,a;function c(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}Ii.DEFAULT_UP=new At(0,1,0);Ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let CC=0;class Lm extends ql{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CC++}),this.uuid=To(),this.name="",this.type="Material",this.blending=bv,this.side=Mv,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hw,this.blendDst=Vw,this.blendEquation=Iw,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gw,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$w,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kd,this.stencilZFail=Kd,this.stencilZPass=Kd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==bv&&(a.blending=this.blending),this.side!==Mv&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.stencilWrite=this.stencilWrite,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(e){const u=r(t.textures),c=r(t.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let a=null;if(e!==null){const r=e.length;a=new Array(r);for(let u=0;u!==r;++u)a[u]=e[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const jy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},zc={h:0,s:0,l:0};function lp(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class rh{constructor(t,e,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,a)}set(t,e,a){if(e===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oi.toWorkingColorSpace(this,e),this}setRGB(t,e,a,r=Oi.workingColorSpace){return this.r=t,this.g=e,this.b=a,Oi.toWorkingColorSpace(this,r),this}setHSL(t,e,a,r=Oi.workingColorSpace){if(t=Rm(t,1),e=Bn(e,0,1),a=Bn(a,0,1),e===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+e):a+e-a*e,c=2*a-u;this.r=lp(c,u,t+1/3),this.g=lp(c,u,t),this.b=lp(c,u,t-1/3)}return Oi.toWorkingColorSpace(this,r),this}setStyle(t,e=Fi){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=r[1],h=r[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,e);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,e);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=r[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(u,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fi){const a=jy[t.toLowerCase()];return a!==void 0?this.setHex(a,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}copyLinearToSRGB(t){return this.r=tp(t.r),this.g=tp(t.g),this.b=tp(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fi){return Oi.fromWorkingColorSpace(Pn.copy(this),t),Math.round(Bn(Pn.r*255,0,255))*65536+Math.round(Bn(Pn.g*255,0,255))*256+Math.round(Bn(Pn.b*255,0,255))}getHexString(t=Fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oi.workingColorSpace){Oi.fromWorkingColorSpace(Pn.copy(this),e);const a=Pn.r,r=Pn.g,u=Pn.b,c=Math.max(a,r,u),h=Math.min(a,r,u);let p,d;const g=(h+c)/2;if(h===c)p=0,d=0;else{const _=c-h;switch(d=g<=.5?_/(c+h):_/(2-c-h),c){case a:p=(r-u)/_+(r<u?6:0);break;case r:p=(u-a)/_+2;break;case u:p=(a-r)/_+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,e=Oi.workingColorSpace){return Oi.fromWorkingColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Fi){Oi.fromWorkingColorSpace(Pn.copy(this),t);const e=Pn.r,a=Pn.g,r=Pn.b;return t!==Fi?`color(${t} ${e.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,e,a){return this.getHSL(bs),this.setHSL(bs.h+t,bs.s+e,bs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,a){return this.r=t.r+(e.r-t.r)*a,this.g=t.g+(e.g-t.g)*a,this.b=t.b+(e.b-t.b)*a,this}lerpHSL(t,e){this.getHSL(bs),t.getHSL(zc);const a=zl(bs.h,zc.h,e),r=zl(bs.s,zc.s,e),u=zl(bs.l,zc.l,e);return this.setHSL(a,r,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,a=this.g,r=this.b,u=t.elements;return this.r=u[0]*e+u[3]*a+u[6]*r,this.g=u[1]*e+u[4]*a+u[7]*r,this.b=u[2]*e+u[5]*a+u[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new rh;rh.NAMES=jy;const hn=new At,Fc=new fn;class Fa{constructor(t,e,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=a,this.usage=Rv,this.updateRange={offset:0,count:-1},this.gpuType=qw,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,a){t*=this.itemSize,a*=e.itemSize;for(let r=0,u=this.itemSize;r<u;r++)this.array[t+r]=e.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,a=this.count;e<a;e++)Fc.fromBufferAttribute(this,e),Fc.applyMatrix3(t),this.setXY(e,Fc.x,Fc.y);else if(this.itemSize===3)for(let e=0,a=this.count;e<a;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix3(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let e=0,a=this.count;e<a;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let a=this.array[t*this.itemSize+e];return this.normalized&&(a=mo(a,this.array)),a}setComponent(t,e,a){return this.normalized&&(a=Vn(a,this.array)),this.array[t*this.itemSize+e]=a,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Vn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,a){return t*=this.itemSize,this.normalized&&(e=Vn(e,this.array),a=Vn(a,this.array)),this.array[t+0]=e,this.array[t+1]=a,this}setXYZ(t,e,a,r){return t*=this.itemSize,this.normalized&&(e=Vn(e,this.array),a=Vn(a,this.array),r=Vn(r,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,e,a,r,u){return t*=this.itemSize,this.normalized&&(e=Vn(e,this.array),a=Vn(a,this.array),r=Vn(r,this.array),u=Vn(u,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rv&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class RC extends Fa{constructor(t,e,a){super(new Uint16Array(t),e,a)}}class DC extends Fa{constructor(t,e,a){super(new Uint32Array(t),e,a)}}class Nm extends Fa{constructor(t,e,a){super(new Float32Array(t),e,a)}}let UC=0;const Si=new Ei,up=new Ii,po=new At,li=new Yl,Ll=new Yl,yn=new At;class wo extends ql{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UC++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dC(t)?DC:RC)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,a=0){this.groups.push({start:t,count:e,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new Ha().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,a){return Si.makeTranslation(t,e,a),this.applyMatrix4(Si),this}scale(t,e,a){return Si.makeScale(t,e,a),this.applyMatrix4(Si),this}lookAt(t){return up.lookAt(t),up.updateMatrix(),this.applyMatrix4(up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(t){const e=[];for(let a=0,r=t.length;a<r;a++){const u=t[a];e.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Nm(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new At(-1/0,-1/0,-1/0),new At(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const u=e[a];li.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dm);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new At,1/0);return}if(t){const a=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let u=0,c=e.length;u<c;u++){const h=e[u];Ll.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(li.min,Ll.min),li.expandByPoint(yn),yn.addVectors(li.max,Ll.max),li.expandByPoint(yn)):(li.expandByPoint(Ll.min),li.expandByPoint(Ll.max))}li.getCenter(a);let r=0;for(let u=0,c=t.count;u<c;u++)yn.fromBufferAttribute(t,u),r=Math.max(r,a.distanceToSquared(yn));if(e)for(let u=0,c=e.length;u<c;u++){const h=e[u],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)yn.fromBufferAttribute(h,d),p&&(po.fromBufferAttribute(t,d),yn.add(po)),r=Math.max(r,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.array,r=e.position.array,u=e.normal.array,c=e.uv.array,h=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fa(new Float32Array(4*h),4));const p=this.getAttribute("tangent").array,d=[],g=[];for(let R=0;R<h;R++)d[R]=new At,g[R]=new At;const _=new At,x=new At,v=new At,b=new fn,E=new fn,M=new fn,y=new At,D=new At;function L(R,V,K){_.fromArray(r,R*3),x.fromArray(r,V*3),v.fromArray(r,K*3),b.fromArray(c,R*2),E.fromArray(c,V*2),M.fromArray(c,K*2),x.sub(_),v.sub(_),E.sub(b),M.sub(b);const Q=1/(E.x*M.y-M.x*E.y);isFinite(Q)&&(y.copy(x).multiplyScalar(M.y).addScaledVector(v,-E.y).multiplyScalar(Q),D.copy(v).multiplyScalar(E.x).addScaledVector(x,-M.x).multiplyScalar(Q),d[R].add(y),d[V].add(y),d[K].add(y),g[R].add(D),g[V].add(D),g[K].add(D))}let N=this.groups;N.length===0&&(N=[{start:0,count:a.length}]);for(let R=0,V=N.length;R<V;++R){const K=N[R],Q=K.start,ft=K.count;for(let at=Q,P=Q+ft;at<P;at+=3)L(a[at+0],a[at+1],a[at+2])}const z=new At,B=new At,U=new At,Z=new At;function C(R){U.fromArray(u,R*3),Z.copy(U);const V=d[R];z.copy(V),z.sub(U.multiplyScalar(U.dot(V))).normalize(),B.crossVectors(Z,V);const Q=B.dot(g[R])<0?-1:1;p[R*4]=z.x,p[R*4+1]=z.y,p[R*4+2]=z.z,p[R*4+3]=Q}for(let R=0,V=N.length;R<V;++R){const K=N[R],Q=K.start,ft=K.count;for(let at=Q,P=Q+ft;at<P;at+=3)C(a[at+0]),C(a[at+1]),C(a[at+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Fa(new Float32Array(e.count*3),3),this.setAttribute("normal",a);else for(let x=0,v=a.count;x<v;x++)a.setXYZ(x,0,0,0);const r=new At,u=new At,c=new At,h=new At,p=new At,d=new At,g=new At,_=new At;if(t)for(let x=0,v=t.count;x<v;x+=3){const b=t.getX(x+0),E=t.getX(x+1),M=t.getX(x+2);r.fromBufferAttribute(e,b),u.fromBufferAttribute(e,E),c.fromBufferAttribute(e,M),g.subVectors(c,u),_.subVectors(r,u),g.cross(_),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,M),h.add(g),p.add(g),d.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let x=0,v=e.count;x<v;x+=3)r.fromBufferAttribute(e,x+0),u.fromBufferAttribute(e,x+1),c.fromBufferAttribute(e,x+2),g.subVectors(c,u),_.subVectors(r,u),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,a=t.count;e<a;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,_=h.normalized,x=new d.constructor(p.length*g);let v=0,b=0;for(let E=0,M=p.length;E<M;E++){h.isInterleavedBufferAttribute?v=p[E]*h.data.stride+h.offset:v=p[E]*g;for(let y=0;y<g;y++)x[b++]=d[v++]}return new Fa(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wo,a=this.index.array,r=this.attributes;for(const h in r){const p=r[h],d=t(p,a);e.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const p=[],d=u[h];for(let g=0,_=d.length;g<_;g++){const x=d[g],v=t(x,a);p.push(v)}e.morphAttributes[h]=p}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const d=c[h];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const r={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let _=0,x=d.length;_<x;_++){const v=d[_];g.push(v.toJSON(t.data))}g.length>0&&(r[p]=g,u=!0)}u&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(e));const r=t.attributes;for(const d in r){const g=r[d];this.setAttribute(d,g.clone(e))}const u=t.morphAttributes;for(const d in u){const g=[],_=u[d];for(let x=0,v=_.length;x<v;x++)g.push(_[x].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,g=c.length;d<g;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}function LC(o){const t={};for(const e in o){t[e]={};for(const a in o[e]){const r=o[e][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][a]=null):t[e][a]=r.clone():Array.isArray(r)?t[e][a]=r.slice():t[e][a]=r}}return t}function NC(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}var OC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class FC extends Lm{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OC,this.fragmentShader=zC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=LC(t.uniforms),this.uniformsGroups=NC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(e.extensions=a),e}}const cp=new At,PC=new At,BC=new Ha;class IC{constructor(t=new At(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,a,r){return this.normal.set(t,e,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,a){const r=cp.subVectors(a,e).cross(PC.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const a=t.delta(cp),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/r;return u<0||u>1?null:e.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const e=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return e<0&&a>0||a<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const a=e||BC.getNormalMatrix(t),r=this.coplanarPoint(cp).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}class HC extends Ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Zy extends Lm{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rh(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kv=new At,Xv=new At,Wv=new Ei,hp=new Um,Pc=new Dm;class VC extends Ii{constructor(t=new wo,e=new Zy){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[0];for(let r=1,u=e.count;r<u;r++)kv.fromBufferAttribute(e,r-1),Xv.fromBufferAttribute(e,r),a[r]=a[r-1],a[r]+=kv.distanceTo(Xv);t.setAttribute("lineDistance",new Nm(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const a=this.geometry,r=this.matrixWorld,u=t.params.Line.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Pc.copy(a.boundingSphere),Pc.applyMatrix4(r),Pc.radius+=u,t.ray.intersectsSphere(Pc)===!1)return;Wv.copy(r).invert(),hp.copy(t.ray).applyMatrix4(Wv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=new At,g=new At,_=new At,x=new At,v=this.isLineSegments?2:1,b=a.index,M=a.attributes.position;if(b!==null){const y=Math.max(0,c.start),D=Math.min(b.count,c.start+c.count);for(let L=y,N=D-1;L<N;L+=v){const z=b.getX(L),B=b.getX(L+1);if(d.fromBufferAttribute(M,z),g.fromBufferAttribute(M,B),hp.distanceSqToSegment(d,g,x,_)>p)continue;x.applyMatrix4(this.matrixWorld);const Z=t.ray.origin.distanceTo(x);Z<t.near||Z>t.far||e.push({distance:Z,point:_.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,c.start),D=Math.min(M.count,c.start+c.count);for(let L=y,N=D-1;L<N;L+=v){if(d.fromBufferAttribute(M,L),g.fromBufferAttribute(M,L+1),hp.distanceSqToSegment(d,g,x,_)>p)continue;x.applyMatrix4(this.matrixWorld);const B=t.ray.origin.distanceTo(x);B<t.near||B>t.far||e.push({distance:B,point:_.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=r.length;u<c;u++){const h=r[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}const qv=new At,Yv=new At;class GC extends VC{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[];for(let r=0,u=e.count;r<u;r+=2)qv.fromBufferAttribute(e,r),Yv.fromBufferAttribute(e,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+qv.distanceTo(Yv);t.setAttribute("lineDistance",new Nm(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kC extends Lm{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rh(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jv=new Ei,cm=new Um,Bc=new Dm,Ic=new At;class XC extends Ii{constructor(t=new wo,e=new kC){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const a=this.geometry,r=this.matrixWorld,u=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(r),Bc.radius+=u,t.ray.intersectsSphere(Bc)===!1)return;jv.copy(r).invert(),cm.copy(t.ray).applyMatrix4(jv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,_=a.attributes.position;if(d!==null){const x=Math.max(0,c.start),v=Math.min(d.count,c.start+c.count);for(let b=x,E=v;b<E;b++){const M=d.getX(b);Ic.fromBufferAttribute(_,M),Zv(Ic,M,p,r,t,e,this)}}else{const x=Math.max(0,c.start),v=Math.min(_.count,c.start+c.count);for(let b=x,E=v;b<E;b++)Ic.fromBufferAttribute(_,b),Zv(Ic,b,p,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=r.length;u<c;u++){const h=r[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Zv(o,t,e,a,r,u,c){const h=cm.distanceSqToPoint(o);if(h<e){const p=new At;cm.closestPointToPoint(o,p),p.applyMatrix4(a);const d=r.ray.origin.distanceTo(p);if(d<r.near||d>r.far)return;u.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,object:c})}}class WC{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$v(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$v();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function $v(){return(typeof performance>"u"?Date:performance).now()}class Kv{constructor(t=1,e=0,a=0){return this.radius=t,this.phi=e,this.theta=a,this}set(t,e,a){return this.radius=t,this.phi=e,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,a){return this.radius=Math.sqrt(t*t+e*e+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(Bn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gy}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gy);const Qv={type:"change"},fp={type:"start"},Jv={type:"end"},Hc=new Um,ty=new IC,qC=Math.cos(70*Yy.DEG2RAD);class YC extends ql{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new At,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:so.ROTATE,TWO:so.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(G){G.addEventListener("keydown",A),this._domElementKeyEvents=G},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(Qv),a.update(),u=r.NONE},this.update=(function(){const G=new At,st=new rr().setFromUnitVectors(t.up,new At(0,1,0)),yt=st.clone().invert(),wt=new At,Dt=new rr,Ut=new At,ie=2*Math.PI;return function(zt=null){const Tt=a.object.position;G.copy(Tt).sub(a.target),G.applyQuaternion(st),h.setFromVector3(G),a.autoRotate&&u===r.NONE&&V(C(zt)),a.enableDamping?(h.theta+=p.theta*a.dampingFactor,h.phi+=p.phi*a.dampingFactor):(h.theta+=p.theta,h.phi+=p.phi);let Nt=a.minAzimuthAngle,bt=a.maxAzimuthAngle;isFinite(Nt)&&isFinite(bt)&&(Nt<-Math.PI?Nt+=ie:Nt>Math.PI&&(Nt-=ie),bt<-Math.PI?bt+=ie:bt>Math.PI&&(bt-=ie),Nt<=bt?h.theta=Math.max(Nt,Math.min(bt,h.theta)):h.theta=h.theta>(Nt+bt)/2?Math.max(Nt,h.theta):Math.min(bt,h.theta)),h.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,h.phi)),h.makeSafe(),a.enableDamping===!0?a.target.addScaledVector(g,a.dampingFactor):a.target.add(g),a.zoomToCursor&&B||a.object.isOrthographicCamera?h.radius=Et(h.radius):h.radius=Et(h.radius*d),G.setFromSpherical(h),G.applyQuaternion(yt),Tt.copy(a.target).add(G),a.object.lookAt(a.target),a.enableDamping===!0?(p.theta*=1-a.dampingFactor,p.phi*=1-a.dampingFactor,g.multiplyScalar(1-a.dampingFactor)):(p.set(0,0,0),g.set(0,0,0));let _t=!1;if(a.zoomToCursor&&B){let Ct=null;if(a.object.isPerspectiveCamera){const te=G.length();Ct=Et(te*d);const Ee=te-Ct;a.object.position.addScaledVector(N,Ee),a.object.updateMatrixWorld()}else if(a.object.isOrthographicCamera){const te=new At(z.x,z.y,0);te.unproject(a.object),a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/d)),a.object.updateProjectionMatrix(),_t=!0;const Ee=new At(z.x,z.y,0);Ee.unproject(a.object),a.object.position.sub(Ee).add(te),a.object.updateMatrixWorld(),Ct=G.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;Ct!==null&&(this.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(Ct).add(a.object.position):(Hc.origin.copy(a.object.position),Hc.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(Hc.direction))<qC?t.lookAt(a.target):(ty.setFromNormalAndCoplanarPoint(a.object.up,a.target),Hc.intersectPlane(ty,a.target))))}else a.object.isOrthographicCamera&&(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/d)),a.object.updateProjectionMatrix(),_t=!0);return d=1,B=!1,_t||wt.distanceToSquared(a.object.position)>c||8*(1-Dt.dot(a.object.quaternion))>c||Ut.distanceToSquared(a.target)>0?(a.dispatchEvent(Qv),wt.copy(a.object.position),Dt.copy(a.object.quaternion),Ut.copy(a.target),_t=!1,!0):!1}})(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",Mt),a.domElement.removeEventListener("pointerdown",k),a.domElement.removeEventListener("pointercancel",fe),a.domElement.removeEventListener("wheel",O),a.domElement.removeEventListener("pointermove",He),a.domElement.removeEventListener("pointerup",fe),a._domElementKeyEvents!==null&&(a._domElementKeyEvents.removeEventListener("keydown",A),a._domElementKeyEvents=null)};const a=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=r.NONE;const c=1e-6,h=new Kv,p=new Kv;let d=1;const g=new At,_=new fn,x=new fn,v=new fn,b=new fn,E=new fn,M=new fn,y=new fn,D=new fn,L=new fn,N=new At,z=new fn;let B=!1;const U=[],Z={};function C(G){return G!==null?2*Math.PI/60*a.autoRotateSpeed*G:2*Math.PI/60/60*a.autoRotateSpeed}function R(){return Math.pow(.95,a.zoomSpeed)}function V(G){p.theta-=G}function K(G){p.phi-=G}const Q=(function(){const G=new At;return function(yt,wt){G.setFromMatrixColumn(wt,0),G.multiplyScalar(-yt),g.add(G)}})(),ft=(function(){const G=new At;return function(yt,wt){a.screenSpacePanning===!0?G.setFromMatrixColumn(wt,1):(G.setFromMatrixColumn(wt,0),G.crossVectors(a.object.up,G)),G.multiplyScalar(yt),g.add(G)}})(),at=(function(){const G=new At;return function(yt,wt){const Dt=a.domElement;if(a.object.isPerspectiveCamera){const Ut=a.object.position;G.copy(Ut).sub(a.target);let ie=G.length();ie*=Math.tan(a.object.fov/2*Math.PI/180),Q(2*yt*ie/Dt.clientHeight,a.object.matrix),ft(2*wt*ie/Dt.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(Q(yt*(a.object.right-a.object.left)/a.object.zoom/Dt.clientWidth,a.object.matrix),ft(wt*(a.object.top-a.object.bottom)/a.object.zoom/Dt.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function P(G){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?d/=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function H(G){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?d*=G:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function et(G){if(!a.zoomToCursor)return;B=!0;const st=a.domElement.getBoundingClientRect(),yt=G.clientX-st.left,wt=G.clientY-st.top,Dt=st.width,Ut=st.height;z.x=yt/Dt*2-1,z.y=-(wt/Ut)*2+1,N.set(z.x,z.y,1).unproject(a.object).sub(a.object.position).normalize()}function Et(G){return Math.max(a.minDistance,Math.min(a.maxDistance,G))}function St(G){_.set(G.clientX,G.clientY)}function F(G){et(G),y.set(G.clientX,G.clientY)}function nt(G){b.set(G.clientX,G.clientY)}function xt(G){x.set(G.clientX,G.clientY),v.subVectors(x,_).multiplyScalar(a.rotateSpeed);const st=a.domElement;V(2*Math.PI*v.x/st.clientHeight),K(2*Math.PI*v.y/st.clientHeight),_.copy(x),a.update()}function Rt(G){D.set(G.clientX,G.clientY),L.subVectors(D,y),L.y>0?P(R()):L.y<0&&H(R()),y.copy(D),a.update()}function It(G){E.set(G.clientX,G.clientY),M.subVectors(E,b).multiplyScalar(a.panSpeed),at(M.x,M.y),b.copy(E),a.update()}function it(G){et(G),G.deltaY<0?H(R()):G.deltaY>0&&P(R()),a.update()}function dt(G){let st=!1;switch(G.code){case a.keys.UP:G.ctrlKey||G.metaKey||G.shiftKey?K(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):at(0,a.keyPanSpeed),st=!0;break;case a.keys.BOTTOM:G.ctrlKey||G.metaKey||G.shiftKey?K(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):at(0,-a.keyPanSpeed),st=!0;break;case a.keys.LEFT:G.ctrlKey||G.metaKey||G.shiftKey?V(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):at(a.keyPanSpeed,0),st=!0;break;case a.keys.RIGHT:G.ctrlKey||G.metaKey||G.shiftKey?V(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):at(-a.keyPanSpeed,0),st=!0;break}st&&(G.preventDefault(),a.update())}function Ot(){if(U.length===1)_.set(U[0].pageX,U[0].pageY);else{const G=.5*(U[0].pageX+U[1].pageX),st=.5*(U[0].pageY+U[1].pageY);_.set(G,st)}}function Gt(){if(U.length===1)b.set(U[0].pageX,U[0].pageY);else{const G=.5*(U[0].pageX+U[1].pageX),st=.5*(U[0].pageY+U[1].pageY);b.set(G,st)}}function Ht(){const G=U[0].pageX-U[1].pageX,st=U[0].pageY-U[1].pageY,yt=Math.sqrt(G*G+st*st);y.set(0,yt)}function pe(){a.enableZoom&&Ht(),a.enablePan&&Gt()}function Ze(){a.enableZoom&&Ht(),a.enableRotate&&Ot()}function me(G){if(U.length==1)x.set(G.pageX,G.pageY);else{const yt=kt(G),wt=.5*(G.pageX+yt.x),Dt=.5*(G.pageY+yt.y);x.set(wt,Dt)}v.subVectors(x,_).multiplyScalar(a.rotateSpeed);const st=a.domElement;V(2*Math.PI*v.x/st.clientHeight),K(2*Math.PI*v.y/st.clientHeight),_.copy(x)}function he(G){if(U.length===1)E.set(G.pageX,G.pageY);else{const st=kt(G),yt=.5*(G.pageX+st.x),wt=.5*(G.pageY+st.y);E.set(yt,wt)}M.subVectors(E,b).multiplyScalar(a.panSpeed),at(M.x,M.y),b.copy(E)}function be(G){const st=kt(G),yt=G.pageX-st.x,wt=G.pageY-st.y,Dt=Math.sqrt(yt*yt+wt*wt);D.set(0,Dt),L.set(0,Math.pow(D.y/y.y,a.zoomSpeed)),P(L.y),y.copy(D)}function ae(G){a.enableZoom&&be(G),a.enablePan&&he(G)}function $e(G){a.enableZoom&&be(G),a.enableRotate&&me(G)}function k(G){a.enabled!==!1&&(U.length===0&&(a.domElement.setPointerCapture(G.pointerId),a.domElement.addEventListener("pointermove",He),a.domElement.addEventListener("pointerup",fe)),ht(G),G.pointerType==="touch"?q(G):we(G))}function He(G){a.enabled!==!1&&(G.pointerType==="touch"?mt(G):qt(G))}function fe(G){Yt(G),U.length===0&&(a.domElement.releasePointerCapture(G.pointerId),a.domElement.removeEventListener("pointermove",He),a.domElement.removeEventListener("pointerup",fe)),a.dispatchEvent(Jv),u=r.NONE}function we(G){let st;switch(G.button){case 0:st=a.mouseButtons.LEFT;break;case 1:st=a.mouseButtons.MIDDLE;break;case 2:st=a.mouseButtons.RIGHT;break;default:st=-1}switch(st){case ao.DOLLY:if(a.enableZoom===!1)return;F(G),u=r.DOLLY;break;case ao.ROTATE:if(G.ctrlKey||G.metaKey||G.shiftKey){if(a.enablePan===!1)return;nt(G),u=r.PAN}else{if(a.enableRotate===!1)return;St(G),u=r.ROTATE}break;case ao.PAN:if(G.ctrlKey||G.metaKey||G.shiftKey){if(a.enableRotate===!1)return;St(G),u=r.ROTATE}else{if(a.enablePan===!1)return;nt(G),u=r.PAN}break;default:u=r.NONE}u!==r.NONE&&a.dispatchEvent(fp)}function qt(G){switch(u){case r.ROTATE:if(a.enableRotate===!1)return;xt(G);break;case r.DOLLY:if(a.enableZoom===!1)return;Rt(G);break;case r.PAN:if(a.enablePan===!1)return;It(G);break}}function O(G){a.enabled===!1||a.enableZoom===!1||u!==r.NONE||(G.preventDefault(),a.dispatchEvent(fp),it(G),a.dispatchEvent(Jv))}function A(G){a.enabled===!1||a.enablePan===!1||dt(G)}function q(G){switch(Lt(G),U.length){case 1:switch(a.touches.ONE){case so.ROTATE:if(a.enableRotate===!1)return;Ot(),u=r.TOUCH_ROTATE;break;case so.PAN:if(a.enablePan===!1)return;Gt(),u=r.TOUCH_PAN;break;default:u=r.NONE}break;case 2:switch(a.touches.TWO){case so.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;pe(),u=r.TOUCH_DOLLY_PAN;break;case so.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Ze(),u=r.TOUCH_DOLLY_ROTATE;break;default:u=r.NONE}break;default:u=r.NONE}u!==r.NONE&&a.dispatchEvent(fp)}function mt(G){switch(Lt(G),u){case r.TOUCH_ROTATE:if(a.enableRotate===!1)return;me(G),a.update();break;case r.TOUCH_PAN:if(a.enablePan===!1)return;he(G),a.update();break;case r.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;ae(G),a.update();break;case r.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;$e(G),a.update();break;default:u=r.NONE}}function Mt(G){a.enabled!==!1&&G.preventDefault()}function ht(G){U.push(G)}function Yt(G){delete Z[G.pointerId];for(let st=0;st<U.length;st++)if(U[st].pointerId==G.pointerId){U.splice(st,1);return}}function Lt(G){let st=Z[G.pointerId];st===void 0&&(st=new fn,Z[G.pointerId]=st),st.set(G.pageX,G.pageY)}function kt(G){const st=G.pointerId===U[0].pointerId?U[1]:U[0];return Z[st.pointerId]}a.domElement.addEventListener("contextmenu",Mt),a.domElement.addEventListener("pointerdown",k),a.domElement.addEventListener("pointercancel",fe),a.domElement.addEventListener("wheel",O,{passive:!1}),this.update()}}class jC{constructor(t){this.enabled=!1,this.debugData=new Map,this.debugDiv=document.createElement("div"),Object.assign(this.debugDiv.style,{...ce.panelBase,position:"absolute",bottom:ce.sizing.edgeMedium,left:ce.sizing.edgeMedium,whiteSpace:"pre-line",display:"none"}),t.appendChild(this.debugDiv),document.addEventListener("keydown",e=>{e.key==="'"&&(this.enabled=!this.enabled,this.debugDiv&&(this.debugDiv.style.display=this.enabled?"block":"none"))})}addDebugCategory(t){this.debugData.has(t)||this.debugData.set(t,[])}addTextCategory(t,e,a){this.enabled&&(this.debugData.has(t)||this.addDebugCategory(t),this.debugData.get(t).push(`${e}: ${a}`))}addText(t,e){this.addTextCategory("Default",t,e)}update(){let t=`<strong>Debug Info</strong>
`;this.enabled&&(this.debugData.forEach((e,a)=>{t+=`
<strong>${a}</strong>
${e.join(`
`)}
`}),this.debugData.clear()),this.debugDiv.innerHTML=t}dispose(){this.debugDiv?.remove(),this.debugDiv=null,document.removeEventListener("keydown",this._onKeyDown),this._onKeyDown=null,this.debugData.clear()}}class ZC{constructor(t,{onToggleAudio:e,onTogglePlay:a,onRestart:r,onShowControls:u}={}){this.onToggleAudio=e,this.onTogglePlay=a,this.onRestart=r,this.onShowControls=u,this.mainDiv=document.createElement("div"),Object.assign(this.mainDiv.style,{...ce.panelBase,position:"absolute",bottom:ce.sizing.edgeLarge,right:ce.sizing.edgeLarge,display:"flex",flexDirection:"column",gap:ce.sizing.spacingMedium,border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",pointerEvents:"auto"}),t.appendChild(this.mainDiv);const c=document.createElement("div");Object.assign(c.style,{position:"relative",display:"flex",gap:ce.sizing.spacingMedium}),this.mainDiv.appendChild(c),this.audioBtn=this.#t("Audio: OFF"),this.playBtn=this.#t("Pause"),this.restartBtn=this.#t("Restart"),this.controlsBtn=this.#t("Controls"),this.audioBtn.onclick=()=>this.onToggleAudio?.(),this.playBtn.onclick=()=>this.onTogglePlay?.(),this.restartBtn.onclick=()=>this.#e(),this.controlsBtn.onclick=()=>this.#n(),c.append(this.controlsBtn,this.audioBtn,this.playBtn,this.restartBtn),this.guiContainer=document.createElement("div"),Object.assign(this.guiContainer.style,{display:"none"}),this.mainDiv.appendChild(this.guiContainer),this.gui=new Vy({container:this.guiContainer,style:{...ce.buttonBase,minWidth:"100%",maxWidth:"100%"}})}setAudioEnabledLabel(t){this.audioBtn.textContent=t?"Audio: ON":"Audio: OFF"}setRunningLabel(t){this.playBtn.textContent=t?"Pause":"Resume"}#t(t=""){const e=document.createElement("button");return e.textContent=t,Object.assign(e.style,ce.buttonBase),e.style.outline="none",e}#e(){window.confirm("Restart simulation?")&&this.onRestart?.()}#n(){const t=this.guiContainer.style.display==="none";this.guiContainer.style.display=t?"block":"none",this.onShowControls?.(t)}}class $C{#t=null;#e=null;#n=.02;constructor({enabled:t=!0,onInit:e=null}={}){this.#t=t,this.#e=e,this.audioContext=null,this.masterGain=null,this.simBus=null,this.#a()}#a(){const t=async()=>{this.audioContext||(this.#s(),this.#e&&(this.#e(this),this.#e=null)),this.audioContext.state==="suspended"&&await this.audioContext.resume(),document.removeEventListener("click",t),document.removeEventListener("keydown",t)};document.addEventListener("click",t),document.addEventListener("keydown",t)}#s(){this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.audioContext.createGain(),this.masterGain.gain.value=this.#t?1:0,this.masterGain.connect(this.audioContext.destination))}#i(t,e){const a=this.audioContext.currentTime;t.cancelScheduledValues(a),t.setTargetAtTime(e,a,this.#n)}isInitialised(){return this.audioContext!==null}isEnabled(){return this.#t}setAudioEnabled(t){if(this.#t=t,this.masterGain){let e=this.#t?1:0;this.#i(this.masterGain.gain,e)}}pauseSimulationAudio(){this.isInitialised()&&this.simBus&&this.#i(this.simBus.gain,0)}resumeSimulationAudio(){this.isInitialised()&&this.simBus&&this.#i(this.simBus.gain,1)}createSimBus(){if(!this.audioContext||!this.masterGain)return null;const t=this.audioContext.createGain();return t.gain.value=0,this.#i(t.gain,1),t.connect(this.masterGain),this.simBus=t,t}releaseSimBus(t){return!this.audioContext||!t?Promise.resolve():(this.#i(t.gain,0),new Promise(e=>{setTimeout(()=>{try{t.disconnect()}catch{}e()},(this.#n+.1)*1e3)}))}createOscillator(t="sine",e=440,a=null){if(!this.audioContext)return null;const r=this.audioContext.createOscillator(),u=this.audioContext.createGain();return r.type=t,r.frequency.value=e,u.gain.value=.5,r.connect(u),a?u.connect(a):u.connect(this.masterGain),r.start(),{osc:r,gainNode:u}}dispose(){this.audioContext&&(this.audioContext.close(),this.audioContext=null,this.masterGain=null)}}class KC{constructor(t){this.autoDispose=!0,this.messageDiv=document.createElement("div"),Object.assign(this.messageDiv.style,{...ce.panelBase,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:"0",transition:"opacity 0.5s ease",pointerEvents:"none",textAlign:"center",zIndex:"1000",display:"none"}),t.appendChild(this.messageDiv),this.timeoutId=null}show(t,e=3){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),this.messageDiv.textContent=t,this.messageDiv.style.display="block",requestAnimationFrame(()=>{this.messageDiv.style.opacity="1"}),e>=0&&(this.timeoutId=setTimeout(()=>{this.hide()},e*1e3))}hide(){this.messageDiv.style.opacity="0",setTimeout(()=>{this.messageDiv.style.display="none",this.timeoutId=null,this.autoDispose&&this.dispose()},500)}dispose(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),this.messageDiv.remove(),this.messageDiv=null,this.parentDiv=null}}function QC(){if(document.getElementById("vsounds-style"))return;const o=document.createElement("style");o.id="vsounds-style",o.textContent=`
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
  `,document.head.appendChild(o)}class JC{constructor(t,e,a){QC(),this.renderer=t,this.camera=e,this.container=a,this.audioEngine=new $C({enabled:!0,onInit:()=>this.onAudioEngineInit()}),this.scene=new HC,this.clock=new WC,this.currentSim=null,this.currentSimClass=null,this.orbitControls=new YC(e,t.domElement),this.orbitControls.enableDamping=!0,this.orbitControls.enabled=!1,this.paused=!1,this.audioEnabled=this.audioEngine?.isEnabled()??!0,this.debugOverlay=new jC(a),this.settingsOverlay=new ZC(a,{onToggleAudio:()=>this.toggleAudio(),onTogglePlay:()=>this.togglePause(),onRestart:()=>this.restartSimulation()}),this.settingsOverlay.setAudioEnabledLabel(this.audioEnabled),this.settingsOverlay.setRunningLabel(!this.paused),this.messageOverlay=new KC(a),this.messageOverlay.autoDispose=!1,this.messageOverlay.show("Audio will start automatically after a click or key press.",3),this.simSpeed=1,this.enabledOrbitControls=!1,this.settingsOverlay.gui.addParams({orbit:{type:"boolean",value:this.enabledOrbitControls,label:"Orbit Controls",onChange:r=>{this.orbitControls.enabled=r}},speed:{value:this.simSpeed,min:0,max:2,step:.01,label:"Time Dilation",onChange:r=>this.simSpeed=r}})}toggleAudio(){this.audioEnabled=!this.audioEnabled,this.audioEngine?.setAudioEnabled(this.audioEnabled),this.settingsOverlay.setAudioEnabledLabel(this.audioEnabled)}togglePause(){this.paused=!this.paused,this.paused?(this.messageOverlay.show("Simulation paused.",-1),this.pauseSimulation()):(this.messageOverlay.hide(),this.resumeSimulation()),this.settingsOverlay.setRunningLabel(!this.paused)}onAudioEngineInit(){this.currentSim&&(this.currentSim.onAudioEngineInit?.(),this.paused&&this.audioEngine.pauseSimulationAudio())}restartSimulation(){!this.currentSim||!this.currentSimClass||this.setSimulation(this.currentSimClass)}pauseSimulation(){this.currentSim&&(this.paused=!0,this.audioEngine.pauseSimulationAudio(),this.currentSim.onPause?.())}resumeSimulation(){this.currentSim&&(this.paused=!1,this.clock.getDelta(),this.audioEngine.resumeSimulationAudio(),this.currentSim.onResume?.())}async setSimulation(t){this.currentSim&&(await this.currentSim.onAudioEngineShutdown(),this.currentSim.onExit(),this.currentSim.dispose?.(),this._clearSim()),this.currentSimClass=t,this.currentSim=new t({scene:this.scene,camera:this.camera,renderer:this.renderer,container:this.settingsOverlay.guiContainer,debugOverlay:this.debugOverlay,audioEngine:this.audioEngine}),this.currentSim.onEnter(),this.audioEngine.isInitialised()&&this.currentSim.onAudioEngineInit?.(),this.paused&&this.togglePause(),this.resetGlobalParams(),this.orbitControls.reset()}resetGlobalParams(){this.settingsOverlay.gui.reset()}update(){if(!this.currentSim)return;let t=this.clock.getDelta();t*=this.simSpeed,this.paused||this.currentSim.update(t),this.renderer.render(this.scene,this.camera)}_clearSim(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0])}}const kn=Object.freeze({Verbose:0,Log:1,Warning:2,Error:3,None:4}),hm=Object.freeze({Core:"Core",Audio:"Audio",DSP:"DSP",Engine:"Engine",UI:"UI",Debug:"Debug",Particles:"Particles"}),ey={globalVerbosity:kn.Log,categoryVerbosity:{Core:kn.Verbose,Audio:kn.Verbose,DSP:kn.Warning,Engine:kn.Log,UI:kn.Verbose,Debug:kn.Verbose,Particles:kn.Verbose}};function fm(o,t,...e){const a=ey.categoryVerbosity[o]??ey.globalVerbosity;if(!(t<a))switch(t){case kn.Verbose:case kn.Log:console.log(`[${o}]`,...e);break;case kn.Warning:console.warn(`[${o}]`,...e);break;case kn.Error:console.error(`[${o}]`,...e);break}}class t3{constructor(t,e={}){this.scene=t,this.params=e,this.geometry=null,this.material=null,this.object3D=null,fm(hm.Particles,kn.Verbose,"Particle system: ",this.params)}init(){this.initParticleSystem(),this.onInit?.()}initParticleSystem(){this.geometry=this.createGeometry(),this.material=this.createMaterial(),this.object3D=this.createObject3D(this.geometry,this.material),this.scene.add(this.object3D)}update(t){throw new Error("update() not implemented")}dispose(){this.scene.remove(this.object3D),this.geometry?.dispose(),this.material?.dispose()}createGeometry(){throw new Error("createGeometry() not implemented")}createMaterial(){throw new Error("createMaterial() not implemented")}createObject3D(t,e){return new XC(t,e)}}class Om extends t3{static DEFAULT_PARAMS={count:100,radius:4,initialSpeed:.1,particleSize:.1};constructor(t,e={}){const a={...Om.DEFAULT_PARAMS,...e};super(t,a);const r=this.params.count;this.positions=new Float32Array(r*3),this.velocities=new Float32Array(r*3),this.alphas=new Float32Array(r)}#t(){for(let t=0;t<this.params.count;t++){const e=t*3;let a,r,u,c;do a=Math.random()*2-1,r=Math.random()*2-1,u=Math.random()*2-1,c=a*a+r*r+u*u;while(c>1||c===0);const h=Math.cbrt(Math.random())*this.params.radius;this.positions[e]=a*h,this.positions[e+1]=r*h,this.positions[e+2]=u*h;const p=Math.random()*2-1,d=Math.random()*2-1,g=Math.random()*2-1,_=Math.hypot(p,d,g)||1;this.velocities[e]=p/_*this.params.initialSpeed,this.velocities[e+1]=d/_*this.params.initialSpeed,this.velocities[e+2]=g/_*this.params.initialSpeed,this.alphas[t]=1}}updatePositions(t){const e=this.positions,a=this.velocities;for(let r=0;r<this.params.count;r++){const u=r*3;e[u]+=a[u]*t,e[u+1]+=a[u+1]*t,e[u+2]+=a[u+2]*t}}applyDamping(t=.98,e){const a=Math.pow(t,e),r=this.velocities;for(let u=0;u<r.length;u++)r[u]*=a}constrainToSphere(){const t=this.positions,e=this.velocities,a=this.params.radius,r=a*a;for(let u=0;u<t.length;u+=3){const c=t[u],h=t[u+1],p=t[u+2],d=c*c+h*h+p*p;if(d>r){const g=Math.sqrt(d),_=c/g,x=h/g,v=p/g;t[u]=_*a,t[u+1]=x*a,t[u+2]=v*a;const b=e[u]*_+e[u+1]*x+e[u+2]*v;e[u]-=2*b*_,e[u+1]-=2*b*x,e[u+2]-=2*b*v}}}syncPositions(){this.geometry.attributes.position.needsUpdate=!0}syncAlphas(){const t=this.geometry.attributes.alpha;t&&(t.needsUpdate=!0)}createGeometry(){this.#t();const t=new wo;return t.setAttribute("position",new Fa(this.positions,3)),t.setAttribute("alpha",new Fa(this.alphas,1)),t}createMaterial(){return new FC({uniforms:{uSize:{value:this.params.particleSize}},vertexShader:`
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
      `,transparent:!0,depthTest:!0,depthWrite:!1})}update(t){this.applyDamping(.98,t),this.updatePositions(t),this.constrainToSphere(),this.syncPositions()}}class zm extends Om{static DEFAULT_PARAMS={linkRadius:1,maxLinksPerParticle:4,linkForce:15e-5};constructor(t,e={}){super(t,{...zm.DEFAULT_PARAMS,...e}),this.linkCounts=new Uint8Array(this.params.count),this.maxLinks=this.params.count*this.params.maxLinksPerParticle,this.linkPositions=new Float32Array(this.maxLinks*2*3),this.linkGeometry=new wo,this.linkGeometry.setAttribute("position",new Fa(this.linkPositions,3)),this.linkMaterial=new Zy({color:16777215,transparent:!0,opacity:.25}),this.links=new GC(this.linkGeometry,this.linkMaterial),this.scene.add(this.links),this.grid=new Map}#t(){return this.params.linkRadius}#e(t,e,a){const r=this.#t();return Math.floor(t/r)+","+Math.floor(e/r)+","+Math.floor(a/r)}#n(){this.grid.clear();const t=this.positions;for(let e=0;e<this.params.count;e++){const a=e*3,r=this.#e(t[a],t[a+1],t[a+2]);this.grid.has(r)||this.grid.set(r,[]),this.grid.get(r).push(e)}}#a(t,e){const a=this.positions,r=t*3,u=this.#t(),c=Math.floor(a[r]/u),h=Math.floor(a[r+1]/u),p=Math.floor(a[r+2]/u);for(let d=-1;d<=1;d++)for(let g=-1;g<=1;g++)for(let _=-1;_<=1;_++){const x=this.grid.get(`${c+d},${h+g},${p+_}`);if(x)for(const v of x)v!==t&&e(v)}}#s(){const t=this.positions,e=this.velocities;this.linkCounts.fill(0);let a=0;const r=this.params.linkRadius*this.params.linkRadius;for(let c=0;c<this.params.count;c++){let h=0;const p=c*3;this.#a(c,d=>{if(d<=c||h>=this.params.maxLinksPerParticle||a>=this.maxLinks)return;const g=d*3,_=t[p]-t[g],x=t[p+1]-t[g+1],v=t[p+2]-t[g+2],b=_*_+x*x+v*v;if(b<r){const E=a*6;this.linkPositions[E]=t[p],this.linkPositions[E+1]=t[p+1],this.linkPositions[E+2]=t[p+2],this.linkPositions[E+3]=t[g],this.linkPositions[E+4]=t[g+1],this.linkPositions[E+5]=t[g+2];const M=Math.sqrt(b)+1e-6,y=_/M,D=x/M,L=v/M,N=this.params.linkForce;e[p]+=y*N,e[p+1]+=D*N,e[p+2]+=L*N,e[g]-=y*N,e[g+1]-=D*N,e[g+2]-=L*N,this.linkCounts[c]++,this.linkCounts[d]++,h++,a++}})}this.linkGeometry.setDrawRange(0,a*2),this.linkGeometry.attributes.position.needsUpdate=!0;for(let c=0;c<this.params.count;c++)this.alphas[c]=Yy.clamp(this.linkCounts[c]/this.params.maxLinksPerParticle,.1,1);this.syncAlphas();let u=0;for(let c=0;c<this.params.count;c++)u+=this.linkCounts[c]/this.params.maxLinksPerParticle;u/=this.params.count}update(t){this.applyDamping(.98,t),this.updatePositions(t),this.constrainToSphere(),this.#n(),this.#s(),this.syncPositions()}}class Da{static Theme=Object.freeze({LIGHT:"light",DARK:"dark"});static current=null;static apply(t){if(!Object.values(Da.Theme).includes(t)){fm(hm.UI,kn.Error,"Canont apply theme: ",t);return}Da.current=t;const e=document.body;e&&(e.classList.remove("vsounds-light","vsounds-dark"),e.classList.add(`vsounds-${t}`),fm(hm.UI,kn.Verbose,"Applied theme: ",t))}static isDark(){return Da.current===Da.Theme.DARK}static isLight(){return Da.current===Da.Theme.LIGHT}}class e3 extends Jc{onEnter(){this.scene.background=new ze(1315860),Da.apply(Da.Theme.DARK);const t=new RE(16777215,.25);this.scene.add(t);const e=new CE(16777215,5);this.scene.add(e),this.particleSystem=new zm(this.scene,{count:20,radius:2.5,initialSpeed:.5,particleSize:.1,linkRadius:1,maxLinksPerParticle:4,linkForce:15e-5}),this.particleSystem.init();const a=this.particleSystem.params;this.gui.addParams({radius:{value:a.radius,min:.5,max:4,step:.1,label:"Sphere Radius",onChange:r=>{a.radius=r}},linkRadius:{value:a.linkRadius,min:.5,max:4,step:.1,label:"Link Radius",onChange:r=>{a.linkRadius=r}},maxLinks:{value:a.maxLinksPerParticle,min:1,max:4,step:1,label:"Max Links",onChange:r=>{a.maxLinksPerParticle=r}}})}onAudioStart(){}update(t){this.particleSystem.update(t)}onExit(){}}function n3({container:o}){ab.useEffect(()=>{if(!o){console.error("[sim-001] Cannot init simulation app – invalid container");return}const t=o.clientWidth,e=o.clientHeight,a=75,r=t/e,u=.1,c=1e3,h=new bi(a,r,u,c);h.position.z=5;const p=new Tw({antialias:!0});p.setSize(t,e),p.setClearColor(16119285,1);var d=function(){p.setSize(o.offsetWidth,o.offsetHeight),h.aspect=o.offsetWidth/o.offsetHeight,h.updateProjectionMatrix()};window.addEventListener("resize",d),o.appendChild(p.domElement);const g=new JC(p,h,o);g.setSimulation(e3);var _=function(){g.update()},x=function(){requestAnimationFrame(x),_()};x()},[o])}function i3(o){hb.createRoot(o).render(nb.jsx(n3,{container:o}))}function a3(o){return o.split(/[^a-zA-Z0-9]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}const s3="mount"+a3("sim-001")+"App";window[s3]=i3;
