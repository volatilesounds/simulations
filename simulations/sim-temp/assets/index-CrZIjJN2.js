(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var mf={exports:{}},Go={};var J0;function dS(){if(J0)return Go;J0=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var f in o)f!=="key"&&(u[f]=o[f])}else u=o;return o=u.ref,{$$typeof:l,type:a,key:h,ref:o!==void 0?o:null,props:u}}return Go.Fragment=t,Go.jsx=n,Go.jsxs=n,Go}var t_;function pS(){return t_||(t_=1,mf.exports=dS()),mf.exports}var mS=pS(),gf={exports:{}},ie={};var e_;function gS(){if(e_)return ie;e_=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(N,it,gt){this.props=N,this.context=it,this.refs=M,this.updater=gt||E}x.prototype.isReactComponent={},x.prototype.setState=function(N,it){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,it,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function w(){}w.prototype=x.prototype;function U(N,it,gt){this.props=N,this.context=it,this.refs=M,this.updater=gt||E}var O=U.prototype=new w;O.constructor=U,T(O,x.prototype),O.isPureReactComponent=!0;var P=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function R(N,it,gt){var Tt=gt.ref;return{$$typeof:l,type:N,key:it,ref:Tt!==void 0?Tt:null,props:gt}}function D(N,it){return R(N.type,it,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===l}function at(N){var it={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return it[gt]})}var nt=/\/+/g;function ft(N,it){return typeof N=="object"&&N!==null&&N.key!=null?at(""+N.key):it.toString(36)}function lt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(it){N.status==="pending"&&(N.status="fulfilled",N.value=it)},function(it){N.status==="pending"&&(N.status="rejected",N.reason=it)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function F(N,it,gt,Tt,Bt){var et=typeof N;(et==="undefined"||et==="boolean")&&(N=null);var ct=!1;if(N===null)ct=!0;else switch(et){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(N.$$typeof){case l:case t:ct=!0;break;case g:return ct=N._init,F(ct(N._payload),it,gt,Tt,Bt)}}if(ct)return Bt=Bt(N),ct=Tt===""?"."+ft(N,0):Tt,P(Bt)?(gt="",ct!=null&&(gt=ct.replace(nt,"$&/")+"/"),F(Bt,it,gt,"",function(It){return It})):Bt!=null&&(k(Bt)&&(Bt=D(Bt,gt+(Bt.key==null||N&&N.key===Bt.key?"":(""+Bt.key).replace(nt,"$&/")+"/")+ct)),it.push(Bt)),1;ct=0;var wt=Tt===""?".":Tt+":";if(P(N))for(var Gt=0;Gt<N.length;Gt++)Tt=N[Gt],et=wt+ft(Tt,Gt),ct+=F(Tt,it,gt,et,Bt);else if(Gt=y(N),typeof Gt=="function")for(N=Gt.call(N),Gt=0;!(Tt=N.next()).done;)Tt=Tt.value,et=wt+ft(Tt,Gt++),ct+=F(Tt,it,gt,et,Bt);else if(et==="object"){if(typeof N.then=="function")return F(lt(N),it,gt,Tt,Bt);throw it=String(N),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ct}function H(N,it,gt){if(N==null)return N;var Tt=[],Bt=0;return F(N,Tt,"","",function(et){return it.call(gt,et,Bt++)}),Tt}function $(N){if(N._status===-1){var it=N._result;it=it(),it.then(function(gt){(N._status===0||N._status===-1)&&(N._status=1,N._result=gt)},function(gt){(N._status===0||N._status===-1)&&(N._status=2,N._result=gt)}),N._status===-1&&(N._status=0,N._result=it)}if(N._status===1)return N._result.default;throw N._result}var yt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},vt={map:H,forEach:function(N,it,gt){H(N,function(){it.apply(this,arguments)},gt)},count:function(N){var it=0;return H(N,function(){it++}),it},toArray:function(N){return H(N,function(it){return it})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ie.Activity=_,ie.Children=vt,ie.Component=x,ie.Fragment=n,ie.Profiler=o,ie.PureComponent=U,ie.StrictMode=a,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},ie.cache=function(N){return function(){return N.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(N,it,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Tt=T({},N.props),Bt=N.key;if(it!=null)for(et in it.key!==void 0&&(Bt=""+it.key),it)!j.call(it,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&it.ref===void 0||(Tt[et]=it[et]);var et=arguments.length-2;if(et===1)Tt.children=gt;else if(1<et){for(var ct=Array(et),wt=0;wt<et;wt++)ct[wt]=arguments[wt+2];Tt.children=ct}return R(N.type,Bt,Tt)},ie.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ie.createElement=function(N,it,gt){var Tt,Bt={},et=null;if(it!=null)for(Tt in it.key!==void 0&&(et=""+it.key),it)j.call(it,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Bt[Tt]=it[Tt]);var ct=arguments.length-2;if(ct===1)Bt.children=gt;else if(1<ct){for(var wt=Array(ct),Gt=0;Gt<ct;Gt++)wt[Gt]=arguments[Gt+2];Bt.children=wt}if(N&&N.defaultProps)for(Tt in ct=N.defaultProps,ct)Bt[Tt]===void 0&&(Bt[Tt]=ct[Tt]);return R(N,et,Bt)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(N){return{$$typeof:f,render:N}},ie.isValidElement=k,ie.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:$}},ie.memo=function(N,it){return{$$typeof:p,type:N,compare:it===void 0?null:it}},ie.startTransition=function(N){var it=z.T,gt={};z.T=gt;try{var Tt=N(),Bt=z.S;Bt!==null&&Bt(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(B,yt)}catch(et){yt(et)}finally{it!==null&&gt.types!==null&&(it.types=gt.types),z.T=it}},ie.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ie.use=function(N){return z.H.use(N)},ie.useActionState=function(N,it,gt){return z.H.useActionState(N,it,gt)},ie.useCallback=function(N,it){return z.H.useCallback(N,it)},ie.useContext=function(N){return z.H.useContext(N)},ie.useDebugValue=function(){},ie.useDeferredValue=function(N,it){return z.H.useDeferredValue(N,it)},ie.useEffect=function(N,it){return z.H.useEffect(N,it)},ie.useEffectEvent=function(N){return z.H.useEffectEvent(N)},ie.useId=function(){return z.H.useId()},ie.useImperativeHandle=function(N,it,gt){return z.H.useImperativeHandle(N,it,gt)},ie.useInsertionEffect=function(N,it){return z.H.useInsertionEffect(N,it)},ie.useLayoutEffect=function(N,it){return z.H.useLayoutEffect(N,it)},ie.useMemo=function(N,it){return z.H.useMemo(N,it)},ie.useOptimistic=function(N,it){return z.H.useOptimistic(N,it)},ie.useReducer=function(N,it,gt){return z.H.useReducer(N,it,gt)},ie.useRef=function(N){return z.H.useRef(N)},ie.useState=function(N){return z.H.useState(N)},ie.useSyncExternalStore=function(N,it,gt){return z.H.useSyncExternalStore(N,it,gt)},ie.useTransition=function(){return z.H.useTransition()},ie.version="19.2.3",ie}var n_;function ap(){return n_||(n_=1,gf.exports=gS()),gf.exports}var _S=ap(),_f={exports:{}},ko={},vf={exports:{}},xf={};var i_;function vS(){return i_||(i_=1,(function(l){function t(F,H){var $=F.length;F.push(H);t:for(;0<$;){var yt=$-1>>>1,vt=F[yt];if(0<o(vt,H))F[yt]=H,F[$]=vt,$=yt;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],$=F.pop();if($!==H){F[0]=$;t:for(var yt=0,vt=F.length,N=vt>>>1;yt<N;){var it=2*(yt+1)-1,gt=F[it],Tt=it+1,Bt=F[Tt];if(0>o(gt,$))Tt<vt&&0>o(Bt,gt)?(F[yt]=Bt,F[Tt]=$,yt=Tt):(F[yt]=gt,F[it]=$,yt=it);else if(Tt<vt&&0>o(Bt,$))F[yt]=Bt,F[Tt]=$,yt=Tt;else break t}}return H}function o(F,H){var $=F.sortIndex-H.sortIndex;return $!==0?$:F.id-H.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;l.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();l.unstable_now=function(){return h.now()-f}}var m=[],p=[],g=1,_=null,v=3,y=!1,E=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function O(F){for(var H=n(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=F)a(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=n(p)}}function P(F){if(T=!1,O(F),!E)if(n(m)!==null)E=!0,B||(B=!0,at());else{var H=n(p);H!==null&&lt(P,H.startTime-F)}}var B=!1,z=-1,j=5,R=-1;function D(){return M?!0:!(l.unstable_now()-R<j)}function k(){if(M=!1,B){var F=l.unstable_now();R=F;var H=!0;try{t:{E=!1,T&&(T=!1,w(z),z=-1),y=!0;var $=v;try{e:{for(O(F),_=n(m);_!==null&&!(_.expirationTime>F&&D());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,v=_.priorityLevel;var vt=yt(_.expirationTime<=F);if(F=l.unstable_now(),typeof vt=="function"){_.callback=vt,O(F),H=!0;break e}_===n(m)&&a(m),O(F)}else a(m);_=n(m)}if(_!==null)H=!0;else{var N=n(p);N!==null&&lt(P,N.startTime-F),H=!1}}break t}finally{_=null,v=$,y=!1}H=void 0}}finally{H?at():B=!1}}}var at;if(typeof U=="function")at=function(){U(k)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ft=nt.port2;nt.port1.onmessage=k,at=function(){ft.postMessage(null)}}else at=function(){x(k,0)};function lt(F,H){z=x(function(){F(l.unstable_now())},H)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(F){F.callback=null},l.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var $=v;v=H;try{return F()}finally{v=$}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var $=v;v=F;try{return H()}finally{v=$}},l.unstable_scheduleCallback=function(F,H,$){var yt=l.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?yt+$:yt):$=yt,F){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=$+vt,F={id:g++,callback:H,priorityLevel:F,startTime:$,expirationTime:vt,sortIndex:-1},$>yt?(F.sortIndex=$,t(p,F),n(m)===null&&F===n(p)&&(T?(w(z),z=-1):T=!0,lt(P,$-yt))):(F.sortIndex=vt,t(m,F),E||y||(E=!0,B||(B=!0,at()))),F},l.unstable_shouldYield=D,l.unstable_wrapCallback=function(F){var H=v;return function(){var $=v;v=H;try{return F.apply(this,arguments)}finally{v=$}}}})(xf)),xf}var a_;function xS(){return a_||(a_=1,vf.exports=vS()),vf.exports}var yf={exports:{}},Dn={};var s_;function yS(){if(s_)return Dn;s_=1;var l=ap();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Dn.flushSync=function(m){var p=h.T,g=a.p;try{if(h.T=null,a.p=2,m)return m()}finally{h.T=p,a.p=g,a.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Dn.requestFormReset=function(m){a.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.2.3",Dn}var r_;function SS(){if(r_)return yf.exports;r_=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),yf.exports=yS(),yf.exports}var o_;function MS(){if(o_)return ko;o_=1;var l=xS(),t=ap(),n=SS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function h(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,r=i;;){var c=s.return;if(c===null)break;var d=c.alternate;if(d===null){if(r=c.return,r!==null){s=r;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===s)return m(c),e;if(d===r)return m(c),i;d=d.sibling}throw Error(a(188))}if(s.return!==r.return)s=c,r=d;else{for(var S=!1,A=c.child;A;){if(A===s){S=!0,s=c,r=d;break}if(A===r){S=!0,r=c,s=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===s){S=!0,s=d,r=c;break}if(A===r){S=!0,r=d,s=c;break}A=A.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==r)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case B:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case O:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:ft(e.type)||"Memo";case j:i=e._payload,e=e._init;try{return ft(e(i))}catch{}}return null}var lt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},yt=[],vt=-1;function N(e){return{current:e}}function it(e){0>vt||(e.current=yt[vt],yt[vt]=null,vt--)}function gt(e,i){vt++,yt[vt]=e.current,e.current=i}var Tt=N(null),Bt=N(null),et=N(null),ct=N(null);function wt(e,i){switch(gt(et,i),gt(Bt,e),gt(Tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?M0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=M0(i),e=E0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Tt),gt(Tt,e)}function Gt(){it(Tt),it(Bt),it(et)}function It(e){e.memoizedState!==null&&gt(ct,e);var i=Tt.current,s=E0(i,e.type);i!==s&&(gt(Bt,e),gt(Tt,s))}function he(e){Bt.current===e&&(it(Tt),it(Bt)),ct.current===e&&(it(ct),Bo._currentValue=$)}var Ke,ge;function fe(e){if(Ke===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ke=i&&i[1]||"",ge=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+ge}var Ce=!1;function se(e,i){if(!e||Ce)return"";Ce=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(i){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){tt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=r.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var I=S.split(`
`),Q=A.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===Q.length)for(r=I.length-1,c=Q.length-1;1<=r&&0<=c&&I[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==Q[c]){var ht=`
`+I[r].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=r&&0<=c);break}}}finally{Ce=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?fe(s):""}function Qe(e,i){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe("Lazy");case 13:return e.child!==i&&i!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return fe("Activity");default:return""}}function V(e){try{var i="",s=null;do i+=Qe(e,s),s=e,e=e.return;while(e);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ye=Object.prototype.hasOwnProperty,Se=l.unstable_scheduleCallback,Le=l.unstable_cancelCallback,qt=l.unstable_shouldYield,L=l.unstable_requestPaint,b=l.unstable_now,W=l.unstable_getCurrentPriorityLevel,dt=l.unstable_ImmediatePriority,xt=l.unstable_UserBlockingPriority,ut=l.unstable_NormalPriority,Zt=l.unstable_LowPriority,Ct=l.unstable_IdlePriority,kt=l.log,te=l.unstable_setDisableYieldValue,Mt=null,Et=null;function Pt(e){if(typeof kt=="function"&&te(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:X,Rt=Math.log,oe=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Rt(e)/oe|0)|0}var Ut=256,bt=262144,zt=4194304;function St(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,s){var r=e.pendingLanes;if(r===0)return 0;var c=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~d,r!==0?c=St(r):(S&=A,S!==0?c=St(S):s||(s=A&~e,s!==0&&(c=St(s))))):(A=r&~d,A!==0?c=St(A):S!==0?c=St(S):s||(s=r&~e,s!==0&&(c=St(s)))),c===0?0:i!==0&&i!==c&&(i&d)===0&&(d=c&-c,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:c}function At(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ee(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Me(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function wn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mi(e,i,s,r,c,d){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,Q=e.hiddenUpdates;for(s=S&~s;0<s;){var ht=31-Ot(s),mt=1<<ht;A[ht]=0,I[ht]=-1;var tt=Q[ht];if(tt!==null)for(Q[ht]=null,ht=0;ht<tt.length;ht++){var ot=tt[ht];ot!==null&&(ot.lane&=-536870913)}s&=~mt}r!==0&&fl(e,r,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function fl(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var r=31-Ot(i);e.entangledLanes|=i,e.entanglements[r]=e.entanglements[r]|1073741824|s&261930}function jr(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var r=31-Ot(s),c=1<<r;c&i|e[r]&i&&(e[r]|=i),s&=~c}}function Is(e,i){var s=i&-i;return s=(s&42)!==0?1:Kr(s),(s&(e.suspendedLanes|i))!==0?0:s}function Kr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:q0(e.type))}function wi(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var ni=Math.random().toString(36).slice(2),an="__reactFiber$"+ni,vn="__reactProps$"+ni,gi="__reactContainer$"+ni,Vs="__reactEvents$"+ni,Gs="__reactListeners$"+ni,dl="__reactHandles$"+ni,$r="__reactResources$"+ni,ls="__reactMarker$"+ni;function Jr(e){delete e[an],delete e[vn],delete e[Vs],delete e[Gs],delete e[dl]}function Ta(e){var i=e[an];if(i)return i;for(var s=e.parentNode;s;){if(i=s[gi]||s[an]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=D0(e);e!==null;){if(s=e[an])return s;e=D0(e)}return i}e=s,s=e.parentNode}return null}function Aa(e){if(e=e[an]||e[gi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function us(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ca(e){var i=e[$r];return i||(i=e[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function C(e){e[ls]=!0}var q=new Set,st={};function J(e,i){Z(e,i),Z(e+"Capture",i)}function Z(e,i){for(st[e]=i,e=0;e<i.length;e++)q.add(i[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},Lt={};function Ht(e){return Ye.call(Lt,e)?!0:Ye.call(Ft,e)?!1:Dt.test(e)?Lt[e]=!0:(Ft[e]=!0,!1)}function Xt(e,i,s){if(Ht(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var r=i.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Qt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Wt(e,i,s,r){if(r===null)e.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+r)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Re(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(e,i,s){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,d=r.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Xe(e){if(!e._valueTracker){var i=Re(e)?"checked":"value";e._valueTracker=Ze(e,i,""+e[i])}}function Ne(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),r="";return e&&(r=Re(e)?e.checked?"true":"false":e.value),e=r,e!==s?(i.setValue(e),!0):!1}function jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var we=/[\n"\\]/g;function ne(e){return e.replace(we,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function xn(e,i,s,r,c,d,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+$t(i)):e.value!==""+$t(i)&&(e.value=""+$t(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?yn(e,S,$t(i)):s!=null?yn(e,S,$t(s)):r!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+$t(A):e.removeAttribute("name")}function Wi(e,i,s,r,c,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Xe(e);return}s=s!=null?""+$t(s):"",i=i!=null?""+$t(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Xe(e)}function yn(e,i,s){i==="number"&&jt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ii(e,i,s,r){if(e=e.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=i.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&r&&(e[s].defaultSelected=!0)}else{for(s=""+$t(s),i=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function ze(e,i,s){if(i!=null&&(i=""+$t(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+$t(s):""}function Sn(e,i,s,r){if(i==null){if(r!=null){if(s!=null)throw Error(a(92));if(lt(r)){if(1<r.length)throw Error(a(93));r=r[0]}s=r}s==null&&(s=""),i=s}s=$t(i),e.defaultValue=s,r=e.textContent,r===s&&r!==""&&r!==null&&(e.value=r),Xe(e)}function cn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,i,s){var r=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?r?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":r?e.setProperty(i,s):typeof s!="number"||s===0||Mn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function ks(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var r in s)!s.hasOwnProperty(r)||i!=null&&i.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in i)r=i[c],i.hasOwnProperty(c)&&s[c]!==r&&En(e,c,r)}else for(var d in i)i.hasOwnProperty(d)&&En(e,d,i[d])}function _i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(e){return cx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var hc=null;function fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,Ws=null;function Sp(e){var i=Aa(e);if(i&&(e=i.stateNode)){var s=e[vn]||null;t:switch(e=i.stateNode,i.type){case"input":if(xn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ne(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var r=s[i];if(r!==e&&r.form===e.form){var c=r[vn]||null;if(!c)throw Error(a(90));xn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)r=s[i],r.form===e.form&&Ne(r)}break t;case"textarea":ze(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&ii(e,!!s.multiple,i,!1)}}}var dc=!1;function Mp(e,i,s){if(dc)return e(i,s);dc=!0;try{var r=e(i);return r}finally{if(dc=!1,(Xs!==null||Ws!==null)&&(eu(),Xs&&(i=Xs,e=Ws,Ws=Xs=null,Sp(i),e)))for(i=0;i<e.length;i++)Sp(e[i])}}function to(e,i){var s=e.stateNode;if(s===null)return null;var r=s[vn]||null;if(r===null)return null;s=r[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=!1;if(Yi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){pc=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{pc=!1}var Ra=null,mc=null,ml=null;function Ep(){if(ml)return ml;var e,i=mc,s=i.length,r,c="value"in Ra?Ra.value:Ra.textContent,d=c.length;for(e=0;e<s&&i[e]===c[e];e++);var S=s-e;for(r=1;r<=S&&i[s-r]===c[d-r];r++);return ml=c.slice(e,1<r?1-r:void 0)}function gl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function bp(){return!1}function Fn(e){function i(s,r,c,d,S){this._reactName=s,this._targetInst=c,this.type=r,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_l:bp,this.isPropagationStopped=bp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Fn(cs),no=_({},cs,{view:0,detail:0}),hx=Fn(no),gc,_c,io,xl=_({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(gc=e.screenX-io.screenX,_c=e.screenY-io.screenY):_c=gc=0,io=e),gc)},movementY:function(e){return"movementY"in e?e.movementY:_c}}),Tp=Fn(xl),fx=_({},xl,{dataTransfer:0}),dx=Fn(fx),px=_({},no,{relatedTarget:0}),vc=Fn(px),mx=_({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),gx=Fn(mx),_x=_({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vx=Fn(_x),xx=_({},cs,{data:0}),Ap=Fn(xx),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Mx[e])?!!i[e]:!1}function xc(){return Ex}var bx=_({},no,{key:function(e){if(e.key){var i=yx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tx=Fn(bx),Ax=_({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Fn(Ax),Cx=_({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),Rx=Fn(Cx),wx=_({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=Fn(wx),Ux=_({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lx=Fn(Ux),Nx=_({},cs,{newState:0,oldState:0}),Ox=Fn(Nx),zx=[9,13,27,32],yc=Yi&&"CompositionEvent"in window,ao=null;Yi&&"documentMode"in document&&(ao=document.documentMode);var Px=Yi&&"TextEvent"in window&&!ao,Rp=Yi&&(!yc||ao&&8<ao&&11>=ao),wp=" ",Dp=!1;function Up(e,i){switch(e){case"keyup":return zx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qs=!1;function Fx(e,i){switch(e){case"compositionend":return Lp(i);case"keypress":return i.which!==32?null:(Dp=!0,wp);case"textInput":return e=i.data,e===wp&&Dp?null:e;default:return null}}function Bx(e,i){if(qs)return e==="compositionend"||!yc&&Up(e,i)?(e=Ep(),ml=mc=Ra=null,qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rp&&i.locale!=="ko"?null:i.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ix[e.type]:i==="textarea"}function Op(e,i,s,r){Xs?Ws?Ws.push(r):Ws=[r]:Xs=r,i=lu(i,"onChange"),0<i.length&&(s=new vl("onChange","change",null,s,r),e.push({event:s,listeners:i}))}var so=null,ro=null;function Hx(e){g0(e,0)}function yl(e){var i=us(e);if(Ne(i))return e}function zp(e,i){if(e==="change")return i}var Pp=!1;if(Yi){var Sc;if(Yi){var Mc="oninput"in document;if(!Mc){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Mc=typeof Fp.oninput=="function"}Sc=Mc}else Sc=!1;Pp=Sc&&(!document.documentMode||9<document.documentMode)}function Bp(){so&&(so.detachEvent("onpropertychange",Ip),ro=so=null)}function Ip(e){if(e.propertyName==="value"&&yl(ro)){var i=[];Op(i,ro,e,fc(e)),Mp(Hx,i)}}function Vx(e,i,s){e==="focusin"?(Bp(),so=i,ro=s,so.attachEvent("onpropertychange",Ip)):e==="focusout"&&Bp()}function Gx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(ro)}function kx(e,i){if(e==="click")return yl(i)}function Xx(e,i){if(e==="input"||e==="change")return yl(i)}function Wx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Wn=typeof Object.is=="function"?Object.is:Wx;function oo(e,i){if(Wn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var c=s[r];if(!Ye.call(i,c)||!Wn(e[c],i[c]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,i){var s=Hp(e);e=0;for(var r;s;){if(s.nodeType===3){if(r=e+s.textContent.length,e<=i&&r>=i)return{node:s,offset:i-e};e=r}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Hp(s)}}function Gp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Gp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=jt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=jt(e.document)}return i}function Ec(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var qx=Yi&&"documentMode"in document&&11>=document.documentMode,Ys=null,bc=null,lo=null,Tc=!1;function Xp(e,i,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Tc||Ys==null||Ys!==jt(r)||(r=Ys,"selectionStart"in r&&Ec(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&oo(lo,r)||(lo=r,r=lu(bc,"onSelect"),0<r.length&&(i=new vl("onSelect","select",null,i,s),e.push({event:i,listeners:r}),i.target=Ys)))}function hs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Zs={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ac={},Wp={};Yi&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function fs(e){if(Ac[e])return Ac[e];if(!Zs[e])return e;var i=Zs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Wp)return Ac[e]=i[s];return e}var qp=fs("animationend"),Yp=fs("animationiteration"),Zp=fs("animationstart"),Yx=fs("transitionrun"),Zx=fs("transitionstart"),jx=fs("transitioncancel"),jp=fs("transitionend"),Kp=new Map,Cc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cc.push("scrollEnd");function vi(e,i){Kp.set(e,i),J(i,[e])}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],js=0,Rc=0;function Ml(){for(var e=js,i=Rc=js=0;i<e;){var s=ai[i];ai[i++]=null;var r=ai[i];ai[i++]=null;var c=ai[i];ai[i++]=null;var d=ai[i];if(ai[i++]=null,r!==null&&c!==null){var S=r.pending;S===null?c.next=c:(c.next=S.next,S.next=c),r.pending=c}d!==0&&Qp(s,c,d)}}function El(e,i,s,r){ai[js++]=e,ai[js++]=i,ai[js++]=s,ai[js++]=r,Rc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function wc(e,i,s,r){return El(e,i,s,r),bl(e)}function ds(e,i){return El(e,null,null,i),bl(e)}function Qp(e,i,s){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s);for(var c=!1,d=e.return;d!==null;)d.childLanes|=s,r=d.alternate,r!==null&&(r.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&i!==null&&(c=31-Ot(s),e=d.hiddenUpdates,r=e[c],r===null?e[c]=[i]:r.push(i),i.lane=s|536870912),d):null}function bl(e){if(50<Uo)throw Uo=0,Bh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ks={};function Kx(e,i,s,r){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,i,s,r){return new Kx(e,i,s,r)}function Dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,i){var s=e.alternate;return s===null?(s=qn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function $p(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Tl(e,i,s,r,c,d){var S=0;if(r=e,typeof e=="function")Dc(e)&&(S=1);else if(typeof e=="string")S=eS(e,s,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=qn(31,s,i,c),e.elementType=R,e.lanes=d,e;case T:return ps(s.children,c,d,i);case M:S=8,c|=24;break;case x:return e=qn(12,s,i,c|2),e.elementType=x,e.lanes=d,e;case P:return e=qn(13,s,i,c),e.elementType=P,e.lanes=d,e;case B:return e=qn(19,s,i,c),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case w:S=9;break t;case O:S=11;break t;case z:S=14;break t;case j:S=16,r=null;break t}S=29,s=Error(a(130,e===null?"null":typeof e,"")),r=null}return i=qn(S,s,i,c),i.elementType=e,i.type=r,i.lanes=d,i}function ps(e,i,s,r){return e=qn(7,e,r,i),e.lanes=s,e}function Uc(e,i,s){return e=qn(6,e,null,i),e.lanes=s,e}function Jp(e){var i=qn(18,null,null,0);return i.stateNode=e,i}function Lc(e,i,s){return i=qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var tm=new WeakMap;function si(e,i){if(typeof e=="object"&&e!==null){var s=tm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:V(i)},tm.set(e,i),i)}return{value:e,source:i,stack:V(i)}}var Qs=[],$s=0,Al=null,uo=0,ri=[],oi=0,wa=null,Di=1,Ui="";function ji(e,i){Qs[$s++]=uo,Qs[$s++]=Al,Al=e,uo=i}function em(e,i,s){ri[oi++]=Di,ri[oi++]=Ui,ri[oi++]=wa,wa=e;var r=Di;e=Ui;var c=32-Ot(r)-1;r&=~(1<<c),s+=1;var d=32-Ot(i)+c;if(30<d){var S=c-c%5;d=(r&(1<<S)-1).toString(32),r>>=S,c-=S,Di=1<<32-Ot(i)+c|s<<c|r,Ui=d+e}else Di=1<<d|s<<c|r,Ui=e}function Nc(e){e.return!==null&&(ji(e,1),em(e,1,0))}function Oc(e){for(;e===Al;)Al=Qs[--$s],Qs[$s]=null,uo=Qs[--$s],Qs[$s]=null;for(;e===wa;)wa=ri[--oi],ri[oi]=null,Ui=ri[--oi],ri[oi]=null,Di=ri[--oi],ri[oi]=null}function nm(e,i){ri[oi++]=Di,ri[oi++]=Ui,ri[oi++]=wa,Di=i.id,Ui=i.overflow,wa=e}var bn=null,We=null,xe=!1,Da=null,li=!1,zc=Error(a(519));function Ua(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(si(i,e)),zc}function im(e){var i=e.stateNode,s=e.type,r=e.memoizedProps;switch(i[an]=e,i[vn]=r,s){case"dialog":pe("cancel",i),pe("close",i);break;case"iframe":case"object":case"embed":pe("load",i);break;case"video":case"audio":for(s=0;s<No.length;s++)pe(No[s],i);break;case"source":pe("error",i);break;case"img":case"image":case"link":pe("error",i),pe("load",i);break;case"details":pe("toggle",i);break;case"input":pe("invalid",i),Wi(i,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pe("invalid",i);break;case"textarea":pe("invalid",i),Sn(i,r.value,r.defaultValue,r.children)}s=r.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||r.suppressHydrationWarning===!0||y0(i.textContent,s)?(r.popover!=null&&(pe("beforetoggle",i),pe("toggle",i)),r.onScroll!=null&&pe("scroll",i),r.onScrollEnd!=null&&pe("scrollend",i),r.onClick!=null&&(i.onclick=qi),i=!0):i=!1,i||Ua(e,!0)}function am(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:bn=bn.return}}function Js(e){if(e!==bn)return!1;if(!xe)return am(e),xe=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Jh(e.type,e.memoizedProps)),s=!s),s&&We&&Ua(e),am(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=w0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=w0(e)}else i===27?(i=We,Wa(e.type)?(e=sf,sf=null,We=e):We=i):We=bn?ci(e.stateNode.nextSibling):null;return!0}function ms(){We=bn=null,xe=!1}function Pc(){var e=Da;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Da=null),e}function co(e){Da===null?Da=[e]:Da.push(e)}var Fc=N(null),gs=null,Ki=null;function La(e,i,s){gt(Fc,i._currentValue),i._currentValue=s}function Qi(e){e._currentValue=Fc.current,it(Fc)}function Bc(e,i,s){for(;e!==null;){var r=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,r!==null&&(r.childLanes|=i)):r!==null&&(r.childLanes&i)!==i&&(r.childLanes|=i),e===s)break;e=e.return}}function Ic(e,i,s,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var S=c.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=c;for(var I=0;I<i.length;I++)if(A.context===i[I]){d.lanes|=s,A=d.alternate,A!==null&&(A.lanes|=s),Bc(d.return,s,e),r||(S=null);break t}d=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(a(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),Bc(S,s,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function tr(e,i,s,r){e=null;for(var c=i,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=c.type;Wn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===ct.current){if(S=c.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}c=c.return}e!==null&&Ic(i,e,s,r),i.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){gs=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return sm(gs,e)}function Rl(e,i){return gs===null&&_s(e),sm(e,i)}function sm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ki===null){if(e===null)throw Error(a(308));Ki=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ki=Ki.next=i;return s}var Qx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,r){e.push(r)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},$x=l.unstable_scheduleCallback,Jx=l.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hc(){return{controller:new Qx,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&$x(Jx,function(){e.controller.abort()})}var fo=null,Vc=0,er=0,nr=null;function ty(e,i){if(fo===null){var s=fo=[];Vc=0,er=Xh(),nr={status:"pending",value:void 0,then:function(r){s.push(r)}}}return Vc++,i.then(rm,rm),i}function rm(){if(--Vc===0&&fo!==null){nr!==null&&(nr.status="fulfilled");var e=fo;fo=null,er=0,nr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ey(e,i){var s=[],r={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return e.then(function(){r.status="fulfilled",r.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(r.status="rejected",r.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),r}var om=F.S;F.S=function(e,i){Xg=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ty(e,i),om!==null&&om(e,i)};var vs=N(null);function Gc(){var e=vs.current;return e!==null?e:ke.pooledCache}function wl(e,i){i===null?gt(vs,vs.current):gt(vs,i.pool)}function lm(){var e=Gc();return e===null?null:{parent:sn._currentValue,pool:e}}var ir=Error(a(460)),kc=Error(a(474)),Dl=Error(a(542)),Ul={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(qi,qi),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,fm(e),e;default:if(typeof i.status=="string")i.then(qi,qi);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(r){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=r}},function(r){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=r}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,fm(e),e}throw ys=i,ir}}function xs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ys=s,ir):s}}var ys=null;function hm(){if(ys===null)throw Error(a(459));var e=ys;return ys=null,e}function fm(e){if(e===ir||e===Dl)throw Error(a(483))}var ar=null,po=0;function Ll(e){var i=po;return po+=1,ar===null&&(ar=[]),cm(ar,e,i)}function mo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Nl(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function dm(e){function i(Y,G){if(e){var K=Y.deletions;K===null?(Y.deletions=[G],Y.flags|=16):K.push(G)}}function s(Y,G){if(!e)return null;for(;G!==null;)i(Y,G),G=G.sibling;return null}function r(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function c(Y,G){return Y=Zi(Y,G),Y.index=0,Y.sibling=null,Y}function d(Y,G,K){return Y.index=K,e?(K=Y.alternate,K!==null?(K=K.index,K<G?(Y.flags|=67108866,G):K):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,G,K,pt){return G===null||G.tag!==6?(G=Uc(K,Y.mode,pt),G.return=Y,G):(G=c(G,K),G.return=Y,G)}function I(Y,G,K,pt){var Kt=K.type;return Kt===T?ht(Y,G,K.props.children,pt,K.key):G!==null&&(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===j&&xs(Kt)===G.type)?(G=c(G,K.props),mo(G,K),G.return=Y,G):(G=Tl(K.type,K.key,K.props,null,Y.mode,pt),mo(G,K),G.return=Y,G)}function Q(Y,G,K,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=Lc(K,Y.mode,pt),G.return=Y,G):(G=c(G,K.children||[]),G.return=Y,G)}function ht(Y,G,K,pt,Kt){return G===null||G.tag!==7?(G=ps(K,Y.mode,pt,Kt),G.return=Y,G):(G=c(G,K),G.return=Y,G)}function mt(Y,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Uc(""+G,Y.mode,K),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return K=Tl(G.type,G.key,G.props,null,Y.mode,K),mo(K,G),K.return=Y,K;case E:return G=Lc(G,Y.mode,K),G.return=Y,G;case j:return G=xs(G),mt(Y,G,K)}if(lt(G)||at(G))return G=ps(G,Y.mode,K,null),G.return=Y,G;if(typeof G.then=="function")return mt(Y,Ll(G),K);if(G.$$typeof===U)return mt(Y,Rl(Y,G),K);Nl(Y,G)}return null}function tt(Y,G,K,pt){var Kt=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Kt!==null?null:A(Y,G,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return K.key===Kt?I(Y,G,K,pt):null;case E:return K.key===Kt?Q(Y,G,K,pt):null;case j:return K=xs(K),tt(Y,G,K,pt)}if(lt(K)||at(K))return Kt!==null?null:ht(Y,G,K,pt,null);if(typeof K.then=="function")return tt(Y,G,Ll(K),pt);if(K.$$typeof===U)return tt(Y,G,Rl(Y,K),pt);Nl(Y,K)}return null}function ot(Y,G,K,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,A(G,Y,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return Y=Y.get(pt.key===null?K:pt.key)||null,I(G,Y,pt,Kt);case E:return Y=Y.get(pt.key===null?K:pt.key)||null,Q(G,Y,pt,Kt);case j:return pt=xs(pt),ot(Y,G,K,pt,Kt)}if(lt(pt)||at(pt))return Y=Y.get(K)||null,ht(G,Y,pt,Kt,null);if(typeof pt.then=="function")return ot(Y,G,K,Ll(pt),Kt);if(pt.$$typeof===U)return ot(Y,G,K,Rl(G,pt),Kt);Nl(G,pt)}return null}function Vt(Y,G,K,pt){for(var Kt=null,be=null,Yt=G,le=G=0,ve=null;Yt!==null&&le<K.length;le++){Yt.index>le?(ve=Yt,Yt=null):ve=Yt.sibling;var Te=tt(Y,Yt,K[le],pt);if(Te===null){Yt===null&&(Yt=ve);break}e&&Yt&&Te.alternate===null&&i(Y,Yt),G=d(Te,G,le),be===null?Kt=Te:be.sibling=Te,be=Te,Yt=ve}if(le===K.length)return s(Y,Yt),xe&&ji(Y,le),Kt;if(Yt===null){for(;le<K.length;le++)Yt=mt(Y,K[le],pt),Yt!==null&&(G=d(Yt,G,le),be===null?Kt=Yt:be.sibling=Yt,be=Yt);return xe&&ji(Y,le),Kt}for(Yt=r(Yt);le<K.length;le++)ve=ot(Yt,Y,le,K[le],pt),ve!==null&&(e&&ve.alternate!==null&&Yt.delete(ve.key===null?le:ve.key),G=d(ve,G,le),be===null?Kt=ve:be.sibling=ve,be=ve);return e&&Yt.forEach(function(Ka){return i(Y,Ka)}),xe&&ji(Y,le),Kt}function Jt(Y,G,K,pt){if(K==null)throw Error(a(151));for(var Kt=null,be=null,Yt=G,le=G=0,ve=null,Te=K.next();Yt!==null&&!Te.done;le++,Te=K.next()){Yt.index>le?(ve=Yt,Yt=null):ve=Yt.sibling;var Ka=tt(Y,Yt,Te.value,pt);if(Ka===null){Yt===null&&(Yt=ve);break}e&&Yt&&Ka.alternate===null&&i(Y,Yt),G=d(Ka,G,le),be===null?Kt=Ka:be.sibling=Ka,be=Ka,Yt=ve}if(Te.done)return s(Y,Yt),xe&&ji(Y,le),Kt;if(Yt===null){for(;!Te.done;le++,Te=K.next())Te=mt(Y,Te.value,pt),Te!==null&&(G=d(Te,G,le),be===null?Kt=Te:be.sibling=Te,be=Te);return xe&&ji(Y,le),Kt}for(Yt=r(Yt);!Te.done;le++,Te=K.next())Te=ot(Yt,Y,le,Te.value,pt),Te!==null&&(e&&Te.alternate!==null&&Yt.delete(Te.key===null?le:Te.key),G=d(Te,G,le),be===null?Kt=Te:be.sibling=Te,be=Te);return e&&Yt.forEach(function(fS){return i(Y,fS)}),xe&&ji(Y,le),Kt}function Ge(Y,G,K,pt){if(typeof K=="object"&&K!==null&&K.type===T&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case y:t:{for(var Kt=K.key;G!==null;){if(G.key===Kt){if(Kt=K.type,Kt===T){if(G.tag===7){s(Y,G.sibling),pt=c(G,K.props.children),pt.return=Y,Y=pt;break t}}else if(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===j&&xs(Kt)===G.type){s(Y,G.sibling),pt=c(G,K.props),mo(pt,K),pt.return=Y,Y=pt;break t}s(Y,G);break}else i(Y,G);G=G.sibling}K.type===T?(pt=ps(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=Tl(K.type,K.key,K.props,null,Y.mode,pt),mo(pt,K),pt.return=Y,Y=pt)}return S(Y);case E:t:{for(Kt=K.key;G!==null;){if(G.key===Kt)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){s(Y,G.sibling),pt=c(G,K.children||[]),pt.return=Y,Y=pt;break t}else{s(Y,G);break}else i(Y,G);G=G.sibling}pt=Lc(K,Y.mode,pt),pt.return=Y,Y=pt}return S(Y);case j:return K=xs(K),Ge(Y,G,K,pt)}if(lt(K))return Vt(Y,G,K,pt);if(at(K)){if(Kt=at(K),typeof Kt!="function")throw Error(a(150));return K=Kt.call(K),Jt(Y,G,K,pt)}if(typeof K.then=="function")return Ge(Y,G,Ll(K),pt);if(K.$$typeof===U)return Ge(Y,G,Rl(Y,K),pt);Nl(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(s(Y,G.sibling),pt=c(G,K),pt.return=Y,Y=pt):(s(Y,G),pt=Uc(K,Y.mode,pt),pt.return=Y,Y=pt),S(Y)):s(Y,G)}return function(Y,G,K,pt){try{po=0;var Kt=Ge(Y,G,K,pt);return ar=null,Kt}catch(Yt){if(Yt===ir||Yt===Dl)throw Yt;var be=qn(29,Yt,null,Y.mode);return be.lanes=pt,be.return=Y,be}}}var Ss=dm(!0),pm=dm(!1),Na=!1;function Xc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wc(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,i,s){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var c=r.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),r.pending=i,i=bl(e),Qp(e,null,s),i}return El(e,r,i,s),bl(e)}function go(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var r=i.lanes;r&=e.pendingLanes,s|=r,i.lanes=s,jr(e,s)}}function qc(e,i){var s=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var c=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?c=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?c=d=i:d=d.next=i}else c=d=i;s={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:r.shared,callbacks:r.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Yc=!1;function _o(){if(Yc){var e=nr;if(e!==null)throw e}}function vo(e,i,s,r){Yc=!1;var c=e.updateQueue;Na=!1;var d=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var I=A,Q=I.next;I.next=null,S===null?d=Q:S.next=Q,S=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==S&&(A===null?ht.firstBaseUpdate=Q:A.next=Q,ht.lastBaseUpdate=I))}if(d!==null){var mt=c.baseState;S=0,ht=Q=I=null,A=d;do{var tt=A.lane&-536870913,ot=tt!==A.lane;if(ot?(_e&tt)===tt:(r&tt)===tt){tt!==0&&tt===er&&(Yc=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Vt=e,Jt=A;tt=i;var Ge=s;switch(Jt.tag){case 1:if(Vt=Jt.payload,typeof Vt=="function"){mt=Vt.call(Ge,mt,tt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=Jt.payload,tt=typeof Vt=="function"?Vt.call(Ge,mt,tt):Vt,tt==null)break t;mt=_({},mt,tt);break t;case 2:Na=!0}}tt=A.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(Q=ht=ot,I=mt):ht=ht.next=ot,S|=tt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ht===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=ht,d===null&&(c.shared.lanes=0),Ha|=S,e.lanes=S,e.memoizedState=mt}}function mm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function gm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)mm(s[e],i)}var sr=N(null),Ol=N(0);function _m(e,i){e=ra,gt(Ol,e),gt(sr,i),ra=e|i.baseLanes}function Zc(){gt(Ol,ra),gt(sr,sr.current)}function jc(){ra=Ol.current,it(sr),it(Ol)}var Yn=N(null),ui=null;function Pa(e){var i=e.alternate;gt(en,en.current&1),gt(Yn,e),ui===null&&(i===null||sr.current!==null||i.memoizedState!==null)&&(ui=e)}function Kc(e){gt(en,en.current),gt(Yn,e),ui===null&&(ui=e)}function vm(e){e.tag===22?(gt(en,en.current),gt(Yn,e),ui===null&&(ui=e)):Fa()}function Fa(){gt(en,en.current),gt(Yn,Yn.current)}function Zn(e){it(Yn),ui===e&&(ui=null),it(en)}var en=N(0);function zl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||nf(s)||af(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $i=0,re=null,He=null,rn=null,Pl=!1,rr=!1,Ms=!1,Fl=0,xo=0,or=null,ny=0;function $e(){throw Error(a(321))}function Qc(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Wn(e[s],i[s]))return!1;return!0}function $c(e,i,s,r,c,d){return $i=d,re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?eg:dh,Ms=!1,d=s(r,c),Ms=!1,rr&&(d=ym(i,s,r,c)),xm(e),d}function xm(e){F.H=Mo;var i=He!==null&&He.next!==null;if($i=0,rn=He=re=null,Pl=!1,xo=0,or=null,i)throw Error(a(300));e===null||on||(e=e.dependencies,e!==null&&Cl(e)&&(on=!0))}function ym(e,i,s,r){re=e;var c=0;do{if(rr&&(or=null),xo=0,rr=!1,25<=c)throw Error(a(301));if(c+=1,rn=He=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=ng,d=i(s,r)}while(rr);return d}function iy(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?yo(i):i,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(re.flags|=1024),i}function Jc(){var e=Fl!==0;return Fl=0,e}function th(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function eh(e){if(Pl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Pl=!1}$i=0,rn=He=re=null,rr=!1,xo=Fl=0,or=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?re.memoizedState=rn=e:rn=rn.next=e,rn}function nn(){if(He===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var i=rn===null?re.memoizedState:rn.next;if(i!==null)rn=i,He=e;else{if(e===null)throw re.alternate===null?Error(a(467)):Error(a(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},rn===null?re.memoizedState=rn=e:rn=rn.next=e}return rn}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var i=xo;return xo+=1,or===null&&(or=[]),e=cm(or,e,i),i=re,(rn===null?i.memoizedState:rn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?eg:dh),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===U)return Tn(e)}throw Error(a(438,String(e)))}function nh(e){var i=null,s=re.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var r=re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(i={data:r.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Bl(),re.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),r=0;r<e;r++)s[r]=D;return i.index++,s}function Ji(e,i){return typeof i=="function"?i(e):i}function Hl(e){var i=nn();return ih(i,He,e)}function ih(e,i,s){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=s;var c=e.baseQueue,d=r.pending;if(d!==null){if(c!==null){var S=c.next;c.next=d.next,d.next=S}i.baseQueue=c=d,r.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{i=c.next;var A=S=null,I=null,Q=i,ht=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(_e&mt)===mt:($i&mt)===mt){var tt=Q.revertLane;if(tt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===er&&(ht=!0);else if(($i&tt)===tt){Q=Q.next,tt===er&&(ht=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=mt,S=d):I=I.next=mt,re.lanes|=tt,Ha|=tt;mt=Q.action,Ms&&s(d,mt),d=Q.hasEagerState?Q.eagerState:s(d,mt)}else tt={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=tt,S=d):I=I.next=tt,re.lanes|=mt,Ha|=mt;Q=Q.next}while(Q!==null&&Q!==i);if(I===null?S=d:I.next=A,!Wn(d,e.memoizedState)&&(on=!0,ht&&(s=nr,s!==null)))throw s;e.memoizedState=d,e.baseState=S,e.baseQueue=I,r.lastRenderedState=d}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ah(e){var i=nn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var r=s.dispatch,c=s.pending,d=i.memoizedState;if(c!==null){s.pending=null;var S=c=c.next;do d=e(d,S.action),S=S.next;while(S!==c);Wn(d,i.memoizedState)||(on=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,r]}function Sm(e,i,s){var r=re,c=nn(),d=xe;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!Wn((He||c).memoizedState,s);if(S&&(c.memoizedState=s,on=!0),c=c.queue,oh(bm.bind(null,r,c,e),[e]),c.getSnapshot!==i||S||rn!==null&&rn.memoizedState.tag&1){if(r.flags|=2048,lr(9,{destroy:void 0},Em.bind(null,r,c,s,i),null),ke===null)throw Error(a(349));d||($i&127)!==0||Mm(r,i,s)}return s}function Mm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=re.updateQueue,i===null?(i=Bl(),re.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Em(e,i,s,r){i.value=s,i.getSnapshot=r,Tm(i)&&Am(e)}function bm(e,i,s){return s(function(){Tm(i)&&Am(e)})}function Tm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Wn(e,s)}catch{return!0}}function Am(e){var i=ds(e,2);i!==null&&Gn(i,e,2)}function sh(e){var i=zn();if(typeof e=="function"){var s=e;if(e=s(),Ms){Pt(!0);try{s()}finally{Pt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},i}function Cm(e,i,s,r){return e.baseState=s,ih(e,He,typeof r=="function"?r:Ji)}function ay(e,i,s,r,c){if(kl(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};F.T!==null?s(!0):d.isTransition=!1,r(d),s=i.pending,s===null?(d.next=i.pending=d,Rm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Rm(e,i){var s=i.action,r=i.payload,c=e.state;if(i.isTransition){var d=F.T,S={};F.T=S;try{var A=s(c,r),I=F.S;I!==null&&I(S,A),wm(e,i,A)}catch(Q){rh(e,i,Q)}finally{d!==null&&S.types!==null&&(d.types=S.types),F.T=d}}else try{d=s(c,r),wm(e,i,d)}catch(Q){rh(e,i,Q)}}function wm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(r){Dm(e,i,r)},function(r){return rh(e,i,r)}):Dm(e,i,s)}function Dm(e,i,s){i.status="fulfilled",i.value=s,Um(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Rm(e,s)))}function rh(e,i,s){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do i.status="rejected",i.reason=s,Um(i),i=i.next;while(i!==r)}e.action=null}function Um(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Lm(e,i){return i}function Nm(e,i){if(xe){var s=ke.formState;if(s!==null){t:{var r=re;if(xe){if(We){e:{for(var c=We,d=li;c.nodeType!==8;){if(!d){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){We=ci(c.nextSibling),r=c.data==="F!";break t}}Ua(r)}r=!1}r&&(i=s[0])}}return s=zn(),s.memoizedState=s.baseState=i,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:i},s.queue=r,s=$m.bind(null,re,r),r.dispatch=s,r=sh(!1),d=fh.bind(null,re,!1,r.queue),r=zn(),c={state:i,dispatch:null,action:e,pending:null},r.queue=c,s=ay.bind(null,re,c,d,s),c.dispatch=s,r.memoizedState=e,[i,s,!1]}function Om(e){var i=nn();return zm(i,He,e)}function zm(e,i,s){if(i=ih(e,i,Lm)[0],e=Hl(Ji)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var r=yo(i)}catch(S){throw S===ir?Dl:S}else r=i;i=nn();var c=i.queue,d=c.dispatch;return s!==i.memoizedState&&(re.flags|=2048,lr(9,{destroy:void 0},sy.bind(null,c,s),null)),[r,d,e]}function sy(e,i){e.action=i}function Pm(e){var i=nn(),s=He;if(s!==null)return zm(i,s,e);nn(),i=i.memoizedState,s=nn();var r=s.queue.dispatch;return s.memoizedState=e,[i,r,!1]}function lr(e,i,s,r){return e={tag:e,create:s,deps:r,inst:i,next:null},i=re.updateQueue,i===null&&(i=Bl(),re.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(r=s.next,s.next=e,e.next=r,i.lastEffect=e),e}function Fm(){return nn().memoizedState}function Vl(e,i,s,r){var c=zn();re.flags|=e,c.memoizedState=lr(1|i,{destroy:void 0},s,r===void 0?null:r)}function Gl(e,i,s,r){var c=nn();r=r===void 0?null:r;var d=c.memoizedState.inst;He!==null&&r!==null&&Qc(r,He.memoizedState.deps)?c.memoizedState=lr(i,d,s,r):(re.flags|=e,c.memoizedState=lr(1|i,d,s,r))}function Bm(e,i){Vl(8390656,8,e,i)}function oh(e,i){Gl(2048,8,e,i)}function ry(e){re.flags|=4;var i=re.updateQueue;if(i===null)i=Bl(),re.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function Im(e){var i=nn().memoizedState;return ry({ref:i,nextImpl:e}),function(){if((De&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Hm(e,i){return Gl(4,2,e,i)}function Vm(e,i){return Gl(4,4,e,i)}function Gm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function km(e,i,s){s=s!=null?s.concat([e]):null,Gl(4,4,Gm.bind(null,i,e),s)}function lh(){}function Xm(e,i){var s=nn();i=i===void 0?null:i;var r=s.memoizedState;return i!==null&&Qc(i,r[1])?r[0]:(s.memoizedState=[e,i],e)}function Wm(e,i){var s=nn();i=i===void 0?null:i;var r=s.memoizedState;if(i!==null&&Qc(i,r[1]))return r[0];if(r=e(),Ms){Pt(!0);try{e()}finally{Pt(!1)}}return s.memoizedState=[r,i],r}function uh(e,i,s){return s===void 0||($i&1073741824)!==0&&(_e&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=qg(),re.lanes|=e,Ha|=e,s)}function qm(e,i,s,r){return Wn(s,i)?s:sr.current!==null?(e=uh(e,s,r),Wn(e,i)||(on=!0),e):($i&42)===0||($i&1073741824)!==0&&(_e&261930)===0?(on=!0,e.memoizedState=s):(e=qg(),re.lanes|=e,Ha|=e,i)}function Ym(e,i,s,r,c){var d=H.p;H.p=d!==0&&8>d?d:8;var S=F.T,A={};F.T=A,fh(e,!1,i,s);try{var I=c(),Q=F.S;if(Q!==null&&Q(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=ey(I,r);So(e,i,ht,Qn(e))}else So(e,i,r,Qn(e))}catch(mt){So(e,i,{then:function(){},status:"rejected",reason:mt},Qn())}finally{H.p=d,S!==null&&A.types!==null&&(S.types=A.types),F.T=S}}function oy(){}function ch(e,i,s,r){if(e.tag!==5)throw Error(a(476));var c=Zm(e).queue;Ym(e,c,i,$,s===null?oy:function(){return jm(e),s(r)})}function Zm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:$},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function jm(e){var i=Zm(e);i.next===null&&(i=e.alternate.memoizedState),So(e,i.next.queue,{},Qn())}function hh(){return Tn(Bo)}function Km(){return nn().memoizedState}function Qm(){return nn().memoizedState}function ly(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Qn();e=Oa(s);var r=za(i,e,s);r!==null&&(Gn(r,i,s),go(r,i,s)),i={cache:Hc()},e.payload=i;return}i=i.return}}function uy(e,i,s){var r=Qn();s={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},kl(e)?Jm(i,s):(s=wc(e,i,s,r),s!==null&&(Gn(s,e,r),tg(s,i,r)))}function $m(e,i,s){var r=Qn();So(e,i,s,r)}function So(e,i,s,r){var c={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(kl(e))Jm(i,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,A=d(S,s);if(c.hasEagerState=!0,c.eagerState=A,Wn(A,S))return El(e,i,c,0),ke===null&&Ml(),!1}catch{}if(s=wc(e,i,c,r),s!==null)return Gn(s,e,r),tg(s,i,r),!0}return!1}function fh(e,i,s,r){if(r={lane:2,revertLane:Xh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(i)throw Error(a(479))}else i=wc(e,s,r,2),i!==null&&Gn(i,e,2)}function kl(e){var i=e.alternate;return e===re||i!==null&&i===re}function Jm(e,i){rr=Pl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function tg(e,i,s){if((s&4194048)!==0){var r=i.lanes;r&=e.pendingLanes,s|=r,i.lanes=s,jr(e,s)}}var Mo={readContext:Tn,use:Il,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};Mo.useEffectEvent=$e;var eg={readContext:Tn,use:Il,useCallback:function(e,i){return zn().memoizedState=[e,i===void 0?null:i],e},useContext:Tn,useEffect:Bm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Vl(4194308,4,Gm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Vl(4194308,4,e,i)},useInsertionEffect:function(e,i){Vl(4,2,e,i)},useMemo:function(e,i){var s=zn();i=i===void 0?null:i;var r=e();if(Ms){Pt(!0);try{e()}finally{Pt(!1)}}return s.memoizedState=[r,i],r},useReducer:function(e,i,s){var r=zn();if(s!==void 0){var c=s(i);if(Ms){Pt(!0);try{s(i)}finally{Pt(!1)}}}else c=i;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=uy.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var i=zn();return e={current:e},i.memoizedState=e},useState:function(e){e=sh(e);var i=e.queue,s=$m.bind(null,re,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:lh,useDeferredValue:function(e,i){var s=zn();return uh(s,e,i)},useTransition:function(){var e=sh(!1);return e=Ym.bind(null,re,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var r=re,c=zn();if(xe){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),ke===null)throw Error(a(349));(_e&127)!==0||Mm(r,i,s)}c.memoizedState=s;var d={value:s,getSnapshot:i};return c.queue=d,Bm(bm.bind(null,r,d,e),[e]),r.flags|=2048,lr(9,{destroy:void 0},Em.bind(null,r,d,s,i),null),s},useId:function(){var e=zn(),i=ke.identifierPrefix;if(xe){var s=Ui,r=Di;s=(r&~(1<<32-Ot(r)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Fl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=ny++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:hh,useFormState:Nm,useActionState:Nm,useOptimistic:function(e){var i=zn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=fh.bind(null,re,!0,s),s.dispatch=i,[e,i]},useMemoCache:nh,useCacheRefresh:function(){return zn().memoizedState=ly.bind(null,re)},useEffectEvent:function(e){var i=zn(),s={impl:e};return i.memoizedState=s,function(){if((De&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},dh={readContext:Tn,use:Il,useCallback:Xm,useContext:Tn,useEffect:oh,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Vm,useMemo:Wm,useReducer:Hl,useRef:Fm,useState:function(){return Hl(Ji)},useDebugValue:lh,useDeferredValue:function(e,i){var s=nn();return qm(s,He.memoizedState,e,i)},useTransition:function(){var e=Hl(Ji)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:yo(e),i]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:hh,useFormState:Om,useActionState:Om,useOptimistic:function(e,i){var s=nn();return Cm(s,He,e,i)},useMemoCache:nh,useCacheRefresh:Qm};dh.useEffectEvent=Im;var ng={readContext:Tn,use:Il,useCallback:Xm,useContext:Tn,useEffect:oh,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Vm,useMemo:Wm,useReducer:ah,useRef:Fm,useState:function(){return ah(Ji)},useDebugValue:lh,useDeferredValue:function(e,i){var s=nn();return He===null?uh(s,e,i):qm(s,He.memoizedState,e,i)},useTransition:function(){var e=ah(Ji)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:yo(e),i]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:hh,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,i){var s=nn();return He!==null?Cm(s,He,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:nh,useCacheRefresh:Qm};ng.useEffectEvent=Im;function ph(e,i,s,r){i=e.memoizedState,s=s(r,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var mh={enqueueSetState:function(e,i,s){e=e._reactInternals;var r=Qn(),c=Oa(r);c.payload=i,s!=null&&(c.callback=s),i=za(e,c,r),i!==null&&(Gn(i,e,r),go(i,e,r))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var r=Qn(),c=Oa(r);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=za(e,c,r),i!==null&&(Gn(i,e,r),go(i,e,r))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Qn(),r=Oa(s);r.tag=2,i!=null&&(r.callback=i),i=za(e,r,s),i!==null&&(Gn(i,e,s),go(i,e,s))}};function ig(e,i,s,r,c,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,d,S):i.prototype&&i.prototype.isPureReactComponent?!oo(s,r)||!oo(c,d):!0}function ag(e,i,s,r){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,r),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,r),i.state!==e&&mh.enqueueReplaceState(i,i.state,null)}function Es(e,i){var s=i;if("ref"in i){s={};for(var r in i)r!=="ref"&&(s[r]=i[r])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var c in e)s[c]===void 0&&(s[c]=e[c])}return s}function sg(e){Sl(e)}function rg(e){console.error(e)}function og(e){Sl(e)}function Xl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(r){setTimeout(function(){throw r})}}function lg(e,i,s){try{var r=e.onCaughtError;r(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function gh(e,i,s){return s=Oa(s),s.tag=3,s.payload={element:null},s.callback=function(){Xl(e,i)},s}function ug(e){return e=Oa(e),e.tag=3,e}function cg(e,i,s,r){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;e.payload=function(){return c(d)},e.callback=function(){lg(i,s,r)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){lg(i,s,r),typeof c!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function cy(e,i,s,r,c){if(s.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(i=s.alternate,i!==null&&tr(i,s,c,!0),s=Yn.current,s!==null){switch(s.tag){case 31:case 13:return ui===null?nu():s.alternate===null&&Je===0&&(Je=3),s.flags&=-257,s.flags|=65536,s.lanes=c,r===Ul?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([r]):i.add(r),Vh(e,r,c)),!1;case 22:return s.flags|=65536,r===Ul?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([r])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([r]):s.add(r)),Vh(e,r,c)),!1}throw Error(a(435,s.tag))}return Vh(e,r,c),nu(),!1}if(xe)return i=Yn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,r!==zc&&(e=Error(a(422),{cause:r}),co(si(e,s)))):(r!==zc&&(i=Error(a(423),{cause:r}),co(si(i,s))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=si(r,s),c=gh(e.stateNode,r,c),qc(e,c),Je!==4&&(Je=2)),!1;var d=Error(a(520),{cause:r});if(d=si(d,s),Do===null?Do=[d]:Do.push(d),Je!==4&&(Je=2),i===null)return!0;r=si(r,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=c&-c,s.lanes|=e,e=gh(s.stateNode,r,e),qc(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Va===null||!Va.has(d))))return s.flags|=65536,c&=-c,s.lanes|=c,c=ug(c),cg(c,e,s,r),qc(s,c),!1}s=s.return}while(s!==null);return!1}var _h=Error(a(461)),on=!1;function An(e,i,s,r){i.child=e===null?pm(i,null,s,r):Ss(i,e.child,s,r)}function hg(e,i,s,r,c){s=s.render;var d=i.ref;if("ref"in r){var S={};for(var A in r)A!=="ref"&&(S[A]=r[A])}else S=r;return _s(i),r=$c(e,i,s,S,d,c),A=Jc(),e!==null&&!on?(th(e,i,c),ta(e,i,c)):(xe&&A&&Nc(i),i.flags|=1,An(e,i,r,c),i.child)}function fg(e,i,s,r,c){if(e===null){var d=s.type;return typeof d=="function"&&!Dc(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,dg(e,i,d,r,c)):(e=Tl(s.type,null,r,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Th(e,c)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:oo,s(S,r)&&e.ref===i.ref)return ta(e,i,c)}return i.flags|=1,e=Zi(d,r),e.ref=i.ref,e.return=i,i.child=e}function dg(e,i,s,r,c){if(e!==null){var d=e.memoizedProps;if(oo(d,r)&&e.ref===i.ref)if(on=!1,i.pendingProps=r=d,Th(e,c))(e.flags&131072)!==0&&(on=!0);else return i.lanes=e.lanes,ta(e,i,c)}return vh(e,i,s,r,c)}function pg(e,i,s,r){var c=r.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(r=i.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~d}else r=0,i.child=null;return mg(e,i,d,s,r)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(i,d!==null?d.cachePool:null),d!==null?_m(i,d):Zc(),vm(i);else return r=i.lanes=536870912,mg(e,i,d!==null?d.baseLanes|s:s,s,r)}else d!==null?(wl(i,d.cachePool),_m(i,d),Fa(),i.memoizedState=null):(e!==null&&wl(i,null),Zc(),Fa());return An(e,i,c,s),i.child}function Eo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function mg(e,i,s,r,c){var d=Gc();return d=d===null?null:{parent:sn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&wl(i,null),Zc(),vm(i),e!==null&&tr(e,i,r,!0),i.childLanes=c,null}function Wl(e,i){return i=Yl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function gg(e,i,s){return Ss(i,e.child,null,s),e=Wl(i,i.pendingProps),e.flags|=2,Zn(i),i.memoizedState=null,e}function hy(e,i,s){var r=i.pendingProps,c=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(xe){if(r.mode==="hidden")return e=Wl(i,r),i.lanes=536870912,Eo(null,e);if(Kc(i),(e=We)?(e=R0(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},s=Jp(e),s.return=i,i.child=s,bn=i,We=null)):e=null,e===null)throw Ua(i);return i.lanes=536870912,null}return Wl(i,r)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(Kc(i),c)if(i.flags&256)i.flags&=-257,i=gg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(on||tr(e,i,s,!1),c=(s&e.childLanes)!==0,on||c){if(r=ke,r!==null&&(S=Is(r,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,ds(e,S),Gn(r,e,S),_h;nu(),i=gg(e,i,s)}else e=d.treeContext,We=ci(S.nextSibling),bn=i,xe=!0,Da=null,li=!1,e!==null&&nm(i,e),i=Wl(i,r),i.flags|=4096;return i}return e=Zi(e.child,{mode:r.mode,children:r.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ql(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function vh(e,i,s,r,c){return _s(i),s=$c(e,i,s,r,void 0,c),r=Jc(),e!==null&&!on?(th(e,i,c),ta(e,i,c)):(xe&&r&&Nc(i),i.flags|=1,An(e,i,s,c),i.child)}function _g(e,i,s,r,c,d){return _s(i),i.updateQueue=null,s=ym(i,r,s,c),xm(e),r=Jc(),e!==null&&!on?(th(e,i,d),ta(e,i,d)):(xe&&r&&Nc(i),i.flags|=1,An(e,i,s,d),i.child)}function vg(e,i,s,r,c){if(_s(i),i.stateNode===null){var d=Ks,S=s.contextType;typeof S=="object"&&S!==null&&(d=Tn(S)),d=new s(r,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=mh,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=r,d.state=i.memoizedState,d.refs={},Xc(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?Tn(S):Ks,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(ph(i,s,S,r),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&mh.enqueueReplaceState(d,d.state,null),vo(i,r,d,c),_o(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),r=!0}else if(e===null){d=i.stateNode;var A=i.memoizedProps,I=Es(s,A);d.props=I;var Q=d.context,ht=s.contextType;S=Ks,typeof ht=="object"&&ht!==null&&(S=Tn(ht));var mt=s.getDerivedStateFromProps;ht=typeof mt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ht||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||Q!==S)&&ag(i,d,r,S),Na=!1;var tt=i.memoizedState;d.state=tt,vo(i,r,d,c),_o(),Q=i.memoizedState,A||tt!==Q||Na?(typeof mt=="function"&&(ph(i,s,mt,r),Q=i.memoizedState),(I=Na||ig(i,s,I,r,tt,Q,S))?(ht||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=r,i.memoizedState=Q),d.props=r,d.state=Q,d.context=S,r=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),r=!1)}else{d=i.stateNode,Wc(e,i),S=i.memoizedProps,ht=Es(s,S),d.props=ht,mt=i.pendingProps,tt=d.context,Q=s.contextType,I=Ks,typeof Q=="object"&&Q!==null&&(I=Tn(Q)),A=s.getDerivedStateFromProps,(Q=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==mt||tt!==I)&&ag(i,d,r,I),Na=!1,tt=i.memoizedState,d.state=tt,vo(i,r,d,c),_o();var ot=i.memoizedState;S!==mt||tt!==ot||Na||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof A=="function"&&(ph(i,s,A,r),ot=i.memoizedState),(ht=Na||ig(i,s,ht,r,tt,ot,I)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(Q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,ot,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,ot,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),i.memoizedProps=r,i.memoizedState=ot),d.props=r,d.state=ot,d.context=I,r=ht):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),r=!1)}return d=r,ql(e,i),r=(i.flags&128)!==0,d||r?(d=i.stateNode,s=r&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&r?(i.child=Ss(i,e.child,null,c),i.child=Ss(i,null,s,c)):An(e,i,s,c),i.memoizedState=d.state,e=i.child):e=ta(e,i,c),e}function xg(e,i,s,r){return ms(),i.flags|=256,An(e,i,s,r),i.child}var xh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yh(e){return{baseLanes:e,cachePool:lm()}}function Sh(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=Kn),e}function yg(e,i,s){var r=i.pendingProps,c=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),S&&(c=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(xe){if(c?Pa(i):Fa(),(e=We)?(e=R0(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},s=Jp(e),s.return=i,i.child=s,bn=i,We=null)):e=null,e===null)throw Ua(i);return af(e)?i.lanes=32:i.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(Fa(),c=i.mode,A=Yl({mode:"hidden",children:A},c),r=ps(r,c,s,null),A.return=i,r.return=i,A.sibling=r,i.child=A,r=i.child,r.memoizedState=yh(s),r.childLanes=Sh(e,S,s),i.memoizedState=xh,Eo(null,r)):(Pa(i),Mh(i,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(d)i.flags&256?(Pa(i),i.flags&=-257,i=Eh(e,i,s)):i.memoizedState!==null?(Fa(),i.child=e.child,i.flags|=128,i=null):(Fa(),A=r.fallback,c=i.mode,r=Yl({mode:"visible",children:r.children},c),A=ps(A,c,s,null),A.flags|=2,r.return=i,A.return=i,r.sibling=A,i.child=r,Ss(i,e.child,null,s),r=i.child,r.memoizedState=yh(s),r.childLanes=Sh(e,S,s),i.memoizedState=xh,i=Eo(null,r));else if(Pa(i),af(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var Q=S.dgst;S=Q,r=Error(a(419)),r.stack="",r.digest=S,co({value:r,source:null,stack:null}),i=Eh(e,i,s)}else if(on||tr(e,i,s,!1),S=(s&e.childLanes)!==0,on||S){if(S=ke,S!==null&&(r=Is(S,s),r!==0&&r!==I.retryLane))throw I.retryLane=r,ds(e,r),Gn(S,e,r),_h;nf(A)||nu(),i=Eh(e,i,s)}else nf(A)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,We=ci(A.nextSibling),bn=i,xe=!0,Da=null,li=!1,e!==null&&nm(i,e),i=Mh(i,r.children),i.flags|=4096);return i}return c?(Fa(),A=r.fallback,c=i.mode,I=e.child,Q=I.sibling,r=Zi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,Q!==null?A=Zi(Q,A):(A=ps(A,c,s,null),A.flags|=2),A.return=i,r.return=i,r.sibling=A,i.child=r,Eo(null,r),r=i.child,A=e.child.memoizedState,A===null?A=yh(s):(c=A.cachePool,c!==null?(I=sn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=lm(),A={baseLanes:A.baseLanes|s,cachePool:c}),r.memoizedState=A,r.childLanes=Sh(e,S,s),i.memoizedState=xh,Eo(e.child,r)):(Pa(i),s=e.child,e=s.sibling,s=Zi(s,{mode:"visible",children:r.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function Mh(e,i){return i=Yl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Yl(e,i){return e=qn(22,e,null,i),e.lanes=0,e}function Eh(e,i,s){return Ss(i,e.child,null,s),e=Mh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Sg(e,i,s){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i),Bc(e.return,i,s)}function bh(e,i,s,r,c,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:c,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=r,S.tail=s,S.tailMode=c,S.treeForkCount=d)}function Mg(e,i,s){var r=i.pendingProps,c=r.revealOrder,d=r.tail;r=r.children;var S=en.current,A=(S&2)!==0;if(A?(S=S&1|2,i.flags|=128):S&=1,gt(en,S),An(e,i,r,s),r=xe?uo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sg(e,s,i);else if(e.tag===19)Sg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(s=i.child,c=null;s!==null;)e=s.alternate,e!==null&&zl(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),bh(i,!1,c,s,d,r);break;case"backwards":case"unstable_legacy-backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&zl(e)===null){i.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}bh(i,!0,s,null,d,r);break;case"together":bh(i,!1,null,null,void 0,r);break;default:i.memoizedState=null}return i.child}function ta(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ha|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(tr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Zi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Zi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Th(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function fy(e,i,s){switch(i.tag){case 3:wt(i,i.stateNode.containerInfo),La(i,sn,e.memoizedState.cache),ms();break;case 27:case 5:It(i);break;case 4:wt(i,i.stateNode.containerInfo);break;case 10:La(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Kc(i),null;break;case 13:var r=i.memoizedState;if(r!==null)return r.dehydrated!==null?(Pa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?yg(e,i,s):(Pa(i),e=ta(e,i,s),e!==null?e.sibling:null);Pa(i);break;case 19:var c=(e.flags&128)!==0;if(r=(s&i.childLanes)!==0,r||(tr(e,i,s,!1),r=(s&i.childLanes)!==0),c){if(r)return Mg(e,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt(en,en.current),r)break;return null;case 22:return i.lanes=0,pg(e,i,s,i.pendingProps);case 24:La(i,sn,e.memoizedState.cache)}return ta(e,i,s)}function Eg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)on=!0;else{if(!Th(e,s)&&(i.flags&128)===0)return on=!1,fy(e,i,s);on=(e.flags&131072)!==0}else on=!1,xe&&(i.flags&1048576)!==0&&em(i,uo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var r=i.pendingProps;if(e=xs(i.elementType),i.type=e,typeof e=="function")Dc(e)?(r=Es(e,r),i.tag=1,i=vg(null,i,e,r,s)):(i.tag=0,i=vh(null,i,e,r,s));else{if(e!=null){var c=e.$$typeof;if(c===O){i.tag=11,i=hg(null,i,e,r,s);break t}else if(c===z){i.tag=14,i=fg(null,i,e,r,s);break t}}throw i=ft(e)||e,Error(a(306,i,""))}}return i;case 0:return vh(e,i,i.type,i.pendingProps,s);case 1:return r=i.type,c=Es(r,i.pendingProps),vg(e,i,r,c,s);case 3:t:{if(wt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));r=i.pendingProps;var d=i.memoizedState;c=d.element,Wc(e,i),vo(i,r,null,s);var S=i.memoizedState;if(r=S.cache,La(i,sn,r),r!==d.cache&&Ic(i,[sn],s,!0),_o(),r=S.element,d.isDehydrated)if(d={element:r,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=xg(e,i,r,s);break t}else if(r!==c){c=si(Error(a(424)),i),co(c),i=xg(e,i,r,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=ci(e.firstChild),bn=i,xe=!0,Da=null,li=!0,s=pm(i,null,r,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ms(),r===c){i=ta(e,i,s);break t}An(e,i,r,s)}i=i.child}return i;case 26:return ql(e,i),e===null?(s=O0(i.type,null,i.pendingProps,null))?i.memoizedState=s:xe||(s=i.type,e=i.pendingProps,r=uu(et.current).createElement(s),r[an]=i,r[vn]=e,Cn(r,s,e),C(r),i.stateNode=r):i.memoizedState=O0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return It(i),e===null&&xe&&(r=i.stateNode=U0(i.type,i.pendingProps,et.current),bn=i,li=!0,c=We,Wa(i.type)?(sf=c,We=ci(r.firstChild)):We=c),An(e,i,i.pendingProps.children,s),ql(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&xe&&((c=r=We)&&(r=Gy(r,i.type,i.pendingProps,li),r!==null?(i.stateNode=r,bn=i,We=ci(r.firstChild),li=!1,c=!0):c=!1),c||Ua(i)),It(i),c=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,r=d.children,Jh(c,d)?r=null:S!==null&&Jh(c,S)&&(i.flags|=32),i.memoizedState!==null&&(c=$c(e,i,iy,null,null,s),Bo._currentValue=c),ql(e,i),An(e,i,r,s),i.child;case 6:return e===null&&xe&&((e=s=We)&&(s=ky(s,i.pendingProps,li),s!==null?(i.stateNode=s,bn=i,We=null,e=!0):e=!1),e||Ua(i)),null;case 13:return yg(e,i,s);case 4:return wt(i,i.stateNode.containerInfo),r=i.pendingProps,e===null?i.child=Ss(i,null,r,s):An(e,i,r,s),i.child;case 11:return hg(e,i,i.type,i.pendingProps,s);case 7:return An(e,i,i.pendingProps,s),i.child;case 8:return An(e,i,i.pendingProps.children,s),i.child;case 12:return An(e,i,i.pendingProps.children,s),i.child;case 10:return r=i.pendingProps,La(i,i.type,r.value),An(e,i,r.children,s),i.child;case 9:return c=i.type._context,r=i.pendingProps.children,_s(i),c=Tn(c),r=r(c),i.flags|=1,An(e,i,r,s),i.child;case 14:return fg(e,i,i.type,i.pendingProps,s);case 15:return dg(e,i,i.type,i.pendingProps,s);case 19:return Mg(e,i,s);case 31:return hy(e,i,s);case 22:return pg(e,i,s,i.pendingProps);case 24:return _s(i),r=Tn(sn),e===null?(c=Gc(),c===null&&(c=ke,d=Hc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=s),c=d),i.memoizedState={parent:r,cache:c},Xc(i),La(i,sn,c)):((e.lanes&s)!==0&&(Wc(e,i),vo(i,null,null,s),_o()),c=e.memoizedState,d=i.memoizedState,c.parent!==r?(c={parent:r,cache:r},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),La(i,sn,r)):(r=d.cache,La(i,sn,r),r!==c.cache&&Ic(i,[sn],s,!0))),An(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ea(e){e.flags|=4}function Ah(e,i,s,r,c){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw ys=Ul,kc}else e.flags&=-16777217}function bg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I0(i))if(Kg())e.flags|=8192;else throw ys=Ul,kc}function Zl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Oe():536870912,e.lanes|=i,fr|=i)}function bo(e,i){if(!xe)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,r=0;if(i)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=s,i}function dy(e,i,s){var r=i.pendingProps;switch(Oc(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(i),null;case 1:return qe(i),null;case 3:return s=i.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Qi(sn),Gt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Js(i)?ea(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pc())),qe(i),null;case 26:var c=i.type,d=i.memoizedState;return e===null?(ea(i),d!==null?(qe(i),bg(i,d)):(qe(i),Ah(i,c,null,r,s))):d?d!==e.memoizedState?(ea(i),qe(i),bg(i,d)):(qe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==r&&ea(i),qe(i),Ah(i,c,e,r,s)),null;case 27:if(he(i),s=et.current,c=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==r&&ea(i);else{if(!r){if(i.stateNode===null)throw Error(a(166));return qe(i),null}e=Tt.current,Js(i)?im(i):(e=U0(c,r,s),i.stateNode=e,ea(i))}return qe(i),null;case 5:if(he(i),c=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==r&&ea(i);else{if(!r){if(i.stateNode===null)throw Error(a(166));return qe(i),null}if(d=Tt.current,Js(i))im(i);else{var S=uu(et.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof r.is=="string"?S.createElement("select",{is:r.is}):S.createElement("select"),r.multiple?d.multiple=!0:r.size&&(d.size=r.size);break;default:d=typeof r.is=="string"?S.createElement(c,{is:r.is}):S.createElement(c)}}d[an]=i,d[vn]=r;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Cn(d,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ea(i)}}return qe(i),Ah(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==r&&ea(i);else{if(typeof r!="string"&&i.stateNode===null)throw Error(a(166));if(e=et.current,Js(i)){if(e=i.stateNode,s=i.memoizedProps,r=null,c=bn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[an]=i,e=!!(e.nodeValue===s||r!==null&&r.suppressHydrationWarning===!0||y0(e.nodeValue,s)),e||Ua(i,!0)}else e=uu(e).createTextNode(r),e[an]=i,i.stateNode=e}return qe(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(r=Js(i),s!==null){if(e===null){if(!r)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[an]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),e=!1}else s=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(Zn(i),i):(Zn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return qe(i),null;case 13:if(r=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Js(i),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[an]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),c=!1}else c=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(Zn(i),i):(Zn(i),null)}return Zn(i),(i.flags&128)!==0?(i.lanes=s,i):(s=r!==null,e=e!==null&&e.memoizedState!==null,s&&(r=i.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),d=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==c&&(r.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Zl(i,i.updateQueue),qe(i),null);case 4:return Gt(),e===null&&Zh(i.stateNode.containerInfo),qe(i),null;case 10:return Qi(i.type),qe(i),null;case 19:if(it(en),r=i.memoizedState,r===null)return qe(i),null;if(c=(i.flags&128)!==0,d=r.rendering,d===null)if(c)bo(r,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=zl(e),d!==null){for(i.flags|=128,bo(r,!1),e=d.updateQueue,i.updateQueue=e,Zl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)$p(s,e),s=s.sibling;return gt(en,en.current&1|2),xe&&ji(i,r.treeForkCount),i.child}e=e.sibling}r.tail!==null&&b()>Jl&&(i.flags|=128,c=!0,bo(r,!1),i.lanes=4194304)}else{if(!c)if(e=zl(d),e!==null){if(i.flags|=128,c=!0,e=e.updateQueue,i.updateQueue=e,Zl(i,e),bo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!d.alternate&&!xe)return qe(i),null}else 2*b()-r.renderingStartTime>Jl&&s!==536870912&&(i.flags|=128,c=!0,bo(r,!1),i.lanes=4194304);r.isBackwards?(d.sibling=i.child,i.child=d):(e=r.last,e!==null?e.sibling=d:i.child=d,r.last=d)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=b(),e.sibling=null,s=en.current,gt(en,c?s&1|2:s&1),xe&&ji(i,r.treeForkCount),e):(qe(i),null);case 22:case 23:return Zn(i),jc(),r=i.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(i.flags|=8192):r&&(i.flags|=8192),r?(s&536870912)!==0&&(i.flags&128)===0&&(qe(i),i.subtreeFlags&6&&(i.flags|=8192)):qe(i),s=i.updateQueue,s!==null&&Zl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048),e!==null&&it(vs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Qi(sn),qe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function py(e,i){switch(Oc(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Qi(sn),Gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return he(i),null;case 31:if(i.memoizedState!==null){if(Zn(i),i.alternate===null)throw Error(a(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Zn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(en),null;case 4:return Gt(),null;case 10:return Qi(i.type),null;case 22:case 23:return Zn(i),jc(),e!==null&&it(vs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Qi(sn),null;case 25:return null;default:return null}}function Tg(e,i){switch(Oc(i),i.tag){case 3:Qi(sn),Gt();break;case 26:case 27:case 5:he(i);break;case 4:Gt();break;case 31:i.memoizedState!==null&&Zn(i);break;case 13:Zn(i);break;case 19:it(en);break;case 10:Qi(i.type);break;case 22:case 23:Zn(i),jc(),e!==null&&it(vs);break;case 24:Qi(sn)}}function To(e,i){try{var s=i.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var c=r.next;s=c;do{if((s.tag&e)===e){r=void 0;var d=s.create,S=s.inst;r=d(),S.destroy=r}s=s.next}while(s!==c)}}catch(A){Fe(i,i.return,A)}}function Ba(e,i,s){try{var r=i.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var d=c.next;r=d;do{if((r.tag&e)===e){var S=r.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=i;var I=s,Q=A;try{Q()}catch(ht){Fe(c,I,ht)}}}r=r.next}while(r!==d)}}catch(ht){Fe(i,i.return,ht)}}function Ag(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{gm(i,s)}catch(r){Fe(e,e.return,r)}}}function Cg(e,i,s){s.props=Es(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(r){Fe(e,i,r)}}function Ao(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof s=="function"?e.refCleanup=s(r):s.current=r}}catch(c){Fe(e,i,c)}}function Li(e,i){var s=e.ref,r=e.refCleanup;if(s!==null)if(typeof r=="function")try{r()}catch(c){Fe(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Fe(e,i,c)}else s.current=null}function Rg(e){var i=e.type,s=e.memoizedProps,r=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break t;case"img":s.src?r.src=s.src:s.srcSet&&(r.srcset=s.srcSet)}}catch(c){Fe(e,e.return,c)}}function Ch(e,i,s){try{var r=e.stateNode;Py(r,e.type,s,i),r[vn]=i}catch(c){Fe(e,e.return,c)}}function wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Rh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wh(e,i,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=qi));else if(r!==4&&(r===27&&Wa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(wh(e,i,s),e=e.sibling;e!==null;)wh(e,i,s),e=e.sibling}function jl(e,i,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(r!==4&&(r===27&&Wa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(jl(e,i,s),e=e.sibling;e!==null;)jl(e,i,s),e=e.sibling}function Dg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var r=e.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);Cn(i,r,s),i[an]=e,i[vn]=s}catch(d){Fe(e,e.return,d)}}var na=!1,ln=!1,Dh=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,gn=null;function my(e,i){if(e=e.containerInfo,Qh=gu,e=kp(e),Ec(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var c=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var S=0,A=-1,I=-1,Q=0,ht=0,mt=e,tt=null;e:for(;;){for(var ot;mt!==s||c!==0&&mt.nodeType!==3||(A=S+c),mt!==d||r!==0&&mt.nodeType!==3||(I=S+r),mt.nodeType===3&&(S+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===e)break e;if(tt===s&&++Q===c&&(A=S),tt===d&&++ht===r&&(I=S),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for($h={focusedElem:e,selectionRange:s},gu=!1,gn=i;gn!==null;)if(i=gn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,gn=e;else for(;gn!==null;){switch(i=gn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)c=e[s],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,c=d.memoizedProps,d=d.memoizedState,r=s.stateNode;try{var Vt=Es(s.type,c);e=r.getSnapshotBeforeUpdate(Vt,d),r.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Fe(s,s.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)ef(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ef(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,gn=e;break}gn=i.return}}function Lg(e,i,s){var r=s.flags;switch(s.tag){case 0:case 11:case 15:aa(e,s),r&4&&To(5,s);break;case 1:if(aa(e,s),r&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(S){Fe(s,s.return,S)}else{var c=Es(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(s,s.return,S)}}r&64&&Ag(s),r&512&&Ao(s,s.return);break;case 3:if(aa(e,s),r&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{gm(e,i)}catch(S){Fe(s,s.return,S)}}break;case 27:i===null&&r&4&&Dg(s);case 26:case 5:aa(e,s),i===null&&r&4&&Rg(s),r&512&&Ao(s,s.return);break;case 12:aa(e,s);break;case 31:aa(e,s),r&4&&zg(e,s);break;case 13:aa(e,s),r&4&&Pg(e,s),r&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=by.bind(null,s),Xy(e,s))));break;case 22:if(r=s.memoizedState!==null||na,!r){i=i!==null&&i.memoizedState!==null||ln,c=na;var d=ln;na=r,(ln=i)&&!d?sa(e,s,(s.subtreeFlags&8772)!==0):aa(e,s),na=c,ln=d}break;case 30:break;default:aa(e,s)}}function Ng(e){var i=e.alternate;i!==null&&(e.alternate=null,Ng(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Jr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Bn=!1;function ia(e,i,s){for(s=s.child;s!==null;)Og(e,i,s),s=s.sibling}function Og(e,i,s){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,s)}catch{}switch(s.tag){case 26:ln||Li(s,i),ia(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ln||Li(s,i);var r=je,c=Bn;Wa(s.type)&&(je=s.stateNode,Bn=!1),ia(e,i,s),zo(s.stateNode),je=r,Bn=c;break;case 5:ln||Li(s,i);case 6:if(r=je,c=Bn,je=null,ia(e,i,s),je=r,Bn=c,je!==null)if(Bn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(s.stateNode)}catch(d){Fe(s,i,d)}else try{je.removeChild(s.stateNode)}catch(d){Fe(s,i,d)}break;case 18:je!==null&&(Bn?(e=je,A0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),yr(e)):A0(je,s.stateNode));break;case 4:r=je,c=Bn,je=s.stateNode.containerInfo,Bn=!0,ia(e,i,s),je=r,Bn=c;break;case 0:case 11:case 14:case 15:Ba(2,s,i),ln||Ba(4,s,i),ia(e,i,s);break;case 1:ln||(Li(s,i),r=s.stateNode,typeof r.componentWillUnmount=="function"&&Cg(s,i,r)),ia(e,i,s);break;case 21:ia(e,i,s);break;case 22:ln=(r=ln)||s.memoizedState!==null,ia(e,i,s),ln=r;break;default:ia(e,i,s)}}function zg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(s){Fe(i,i.return,s)}}}function Pg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(s){Fe(i,i.return,s)}}function gy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ug),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ug),i;default:throw Error(a(435,e.tag))}}function Kl(e,i){var s=gy(e);i.forEach(function(r){if(!s.has(r)){s.add(r);var c=Ty.bind(null,e,r);r.then(c,c)}})}function In(e,i){var s=i.deletions;if(s!==null)for(var r=0;r<s.length;r++){var c=s[r],d=e,S=i,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){je=A.stateNode,Bn=!1;break t}break;case 5:je=A.stateNode,Bn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if(je===null)throw Error(a(160));Og(d,S,c),je=null,Bn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Fg(i,e),i=i.sibling}var xi=null;function Fg(e,i){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(i,e),Hn(e),r&4&&(Ba(3,e,e.return),To(3,e),Ba(5,e,e.return));break;case 1:In(i,e),Hn(e),r&512&&(ln||s===null||Li(s,s.return)),r&64&&na&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?r:s.concat(r))));break;case 26:var c=xi;if(In(i,e),Hn(e),r&512&&(ln||s===null||Li(s,s.return)),r&4){var d=s!==null?s.memoizedState:null;if(r=e.memoizedState,s===null)if(r===null)if(e.stateNode===null){t:{r=e.type,s=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":d=c.getElementsByTagName("title")[0],(!d||d[ls]||d[an]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(r),c.head.insertBefore(d,c.querySelector("head > title"))),Cn(d,r,s),d[an]=e,C(d),r=d;break t;case"link":var S=F0("link","href",c).get(r+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break e}}d=c.createElement(r),Cn(d,r,s),c.head.appendChild(d);break;case"meta":if(S=F0("meta","content",c).get(r+(s.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break e}}d=c.createElement(r),Cn(d,r,s),c.head.appendChild(d);break;default:throw Error(a(468,r))}d[an]=e,C(d),r=d}e.stateNode=r}else B0(c,e.type,e.stateNode);else e.stateNode=P0(c,r,e.memoizedProps);else d!==r?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,r===null?B0(c,e.type,e.stateNode):P0(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Ch(e,e.memoizedProps,s.memoizedProps)}break;case 27:In(i,e),Hn(e),r&512&&(ln||s===null||Li(s,s.return)),s!==null&&r&4&&Ch(e,e.memoizedProps,s.memoizedProps);break;case 5:if(In(i,e),Hn(e),r&512&&(ln||s===null||Li(s,s.return)),e.flags&32){c=e.stateNode;try{cn(c,"")}catch(Vt){Fe(e,e.return,Vt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Ch(e,c,s!==null?s.memoizedProps:c)),r&1024&&(Dh=!0);break;case 6:if(In(i,e),Hn(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,s=e.stateNode;try{s.nodeValue=r}catch(Vt){Fe(e,e.return,Vt)}}break;case 3:if(fu=null,c=xi,xi=cu(i.containerInfo),In(i,e),xi=c,Hn(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{yr(i.containerInfo)}catch(Vt){Fe(e,e.return,Vt)}Dh&&(Dh=!1,Bg(e));break;case 4:r=xi,xi=cu(e.stateNode.containerInfo),In(i,e),Hn(e),xi=r;break;case 12:In(i,e),Hn(e);break;case 31:In(i,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Kl(e,r)));break;case 13:In(i,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($l=b()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Kl(e,r)));break;case 22:c=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,Q=na,ht=ln;if(na=Q||c,ln=ht||I,In(i,e),ln=ht,na=Q,Hn(e),r&8192)t:for(i=e.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(s===null||I||na||ln||bs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(d=I.stateNode,c)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=I.stateNode;var mt=I.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Vt){Fe(I,I.return,Vt)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Vt){Fe(I,I.return,Vt)}}}else if(i.tag===18){if(s===null){I=i;try{var ot=I.stateNode;c?C0(ot,!0):C0(I.stateNode,!1)}catch(Vt){Fe(I,I.return,Vt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}r&4&&(r=e.updateQueue,r!==null&&(s=r.retryQueue,s!==null&&(r.retryQueue=null,Kl(e,s))));break;case 19:In(i,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Kl(e,r)));break;case 30:break;case 21:break;default:In(i,e),Hn(e)}}function Hn(e){var i=e.flags;if(i&2){try{for(var s,r=e.return;r!==null;){if(wg(r)){s=r;break}r=r.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var c=s.stateNode,d=Rh(e);jl(e,d,c);break;case 5:var S=s.stateNode;s.flags&32&&(cn(S,""),s.flags&=-33);var A=Rh(e);jl(e,A,S);break;case 3:case 4:var I=s.stateNode.containerInfo,Q=Rh(e);wh(e,Q,I);break;default:throw Error(a(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Bg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function aa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Lg(e,i.alternate,i),i=i.sibling}function bs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ba(4,i,i.return),bs(i);break;case 1:Li(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Cg(i,i.return,s),bs(i);break;case 27:zo(i.stateNode);case 26:case 5:Li(i,i.return),bs(i);break;case 22:i.memoizedState===null&&bs(i);break;case 30:bs(i);break;default:bs(i)}e=e.sibling}}function sa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var r=i.alternate,c=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:sa(c,d,s),To(4,d);break;case 1:if(sa(c,d,s),r=d,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Fe(r,r.return,Q)}if(r=d,c=r.updateQueue,c!==null){var A=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)mm(I[c],A)}catch(Q){Fe(r,r.return,Q)}}s&&S&64&&Ag(d),Ao(d,d.return);break;case 27:Dg(d);case 26:case 5:sa(c,d,s),s&&r===null&&S&4&&Rg(d),Ao(d,d.return);break;case 12:sa(c,d,s);break;case 31:sa(c,d,s),s&&S&4&&zg(c,d);break;case 13:sa(c,d,s),s&&S&4&&Pg(c,d);break;case 22:d.memoizedState===null&&sa(c,d,s),Ao(d,d.return);break;case 30:break;default:sa(c,d,s)}i=i.sibling}}function Uh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ho(s))}function Lh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e))}function yi(e,i,s,r){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ig(e,i,s,r),i=i.sibling}function Ig(e,i,s,r){var c=i.flags;switch(i.tag){case 0:case 11:case 15:yi(e,i,s,r),c&2048&&To(9,i);break;case 1:yi(e,i,s,r);break;case 3:yi(e,i,s,r),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e)));break;case 12:if(c&2048){yi(e,i,s,r),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Fe(i,i.return,I)}}else yi(e,i,s,r);break;case 31:yi(e,i,s,r);break;case 13:yi(e,i,s,r);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?yi(e,i,s,r):Co(e,i):d._visibility&2?yi(e,i,s,r):(d._visibility|=2,ur(e,i,s,r,(i.subtreeFlags&10256)!==0||!1)),c&2048&&Uh(S,i);break;case 24:yi(e,i,s,r),c&2048&&Lh(i.alternate,i);break;default:yi(e,i,s,r)}}function ur(e,i,s,r,c){for(c=c&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,A=s,I=r,Q=S.flags;switch(S.tag){case 0:case 11:case 15:ur(d,S,A,I,c),To(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?ur(d,S,A,I,c):Co(d,S):(ht._visibility|=2,ur(d,S,A,I,c)),c&&Q&2048&&Uh(S.alternate,S);break;case 24:ur(d,S,A,I,c),c&&Q&2048&&Lh(S.alternate,S);break;default:ur(d,S,A,I,c)}i=i.sibling}}function Co(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,r=i,c=r.flags;switch(r.tag){case 22:Co(s,r),c&2048&&Uh(r.alternate,r);break;case 24:Co(s,r),c&2048&&Lh(r.alternate,r);break;default:Co(s,r)}i=i.sibling}}var Ro=8192;function cr(e,i,s){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)Hg(e,i,s),e=e.sibling}function Hg(e,i,s){switch(e.tag){case 26:cr(e,i,s),e.flags&Ro&&e.memoizedState!==null&&nS(s,xi,e.memoizedState,e.memoizedProps);break;case 5:cr(e,i,s);break;case 3:case 4:var r=xi;xi=cu(e.stateNode.containerInfo),cr(e,i,s),xi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ro,Ro=16777216,cr(e,i,s),Ro=r):cr(e,i,s));break;default:cr(e,i,s)}}function Vg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function wo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var r=i[s];gn=r,kg(r,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gg(e),e=e.sibling}function Gg(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Ql(e)):wo(e);break;default:wo(e)}}function Ql(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var r=i[s];gn=r,kg(r,e)}Vg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ba(8,i,i.return),Ql(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Ql(i));break;default:Ql(i)}e=e.sibling}}function kg(e,i){for(;gn!==null;){var s=gn;switch(s.tag){case 0:case 11:case 15:Ba(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var r=s.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ho(s.memoizedState.cache)}if(r=s.child,r!==null)r.return=s,gn=r;else t:for(s=e;gn!==null;){r=gn;var c=r.sibling,d=r.return;if(Ng(r),r===s){gn=null;break t}if(c!==null){c.return=d,gn=c;break t}gn=d}}}var _y={getCacheForType:function(e){var i=Tn(sn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Tn(sn).controller.signal}},vy=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,de=null,_e=0,Pe=0,jn=null,Ia=!1,hr=!1,Nh=!1,ra=0,Je=0,Ha=0,Ts=0,Oh=0,Kn=0,fr=0,Do=null,Vn=null,zh=!1,$l=0,Xg=0,Jl=1/0,tu=null,Va=null,hn=0,Ga=null,dr=null,oa=0,Ph=0,Fh=null,Wg=null,Uo=0,Bh=null;function Qn(){return(De&2)!==0&&_e!==0?_e&-_e:F.T!==null?Xh():Qr()}function qg(){if(Kn===0)if((_e&536870912)===0||xe){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function Gn(e,i,s){(e===ke&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(pr(e,0),ka(e,_e,Kn,!1)),wn(e,s),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(Ts|=s),Je===4&&ka(e,_e,Kn,!1)),Ni(e))}function Yg(e,i,s){if((De&6)!==0)throw Error(a(327));var r=!s&&(i&127)===0&&(i&e.expiredLanes)===0||At(e,i),c=r?Sy(e,i):Hh(e,i,!0),d=r;do{if(c===0){hr&&!r&&ka(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!xy(s)){c=Hh(e,i,!1),d=!1;continue}if(c===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var A=e;c=Do;var I=A.current.memoizedState.isDehydrated;if(I&&(pr(A,S).flags|=256),S=Hh(A,S,!1),S!==2){if(Nh&&!I){A.errorRecoveryDisabledLanes|=d,Ts|=d,c=4;break t}d=Vn,Vn=c,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}c=S}if(d=!1,c!==2)continue}}if(c===1){pr(e,0),ka(e,i,0,!0);break}t:{switch(r=e,d=c,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ka(r,i,Kn,!Ia);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(c=$l+300-b(),10<c)){if(ka(r,i,Kn,!Ia),_t(r,0,!0)!==0)break t;oa=i,r.timeoutHandle=b0(Zg.bind(null,r,s,Vn,tu,zh,i,Kn,Ts,fr,Ia,d,"Throttled",-0,0),c);break t}Zg(r,s,Vn,tu,zh,i,Kn,Ts,fr,Ia,d,null,-0,0)}}break}while(!0);Ni(e)}function Zg(e,i,s,r,c,d,S,A,I,Q,ht,mt,tt,ot){if(e.timeoutHandle=-1,mt=i.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},Hg(i,d,mt);var Vt=(d&62914560)===d?$l-b():(d&4194048)===d?Xg-b():0;if(Vt=iS(mt,Vt),Vt!==null){oa=d,e.cancelPendingCommit=Vt(n0.bind(null,e,i,d,s,r,c,S,A,I,ht,mt,null,tt,ot)),ka(e,d,S,!Q);return}}n0(e,i,d,s,r,c,S,A,I)}function xy(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var r=0;r<s.length;r++){var c=s[r],d=c.getSnapshot;c=c.value;try{if(!Wn(d(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ka(e,i,s,r){i&=~Oh,i&=~Ts,e.suspendedLanes|=i,e.pingedLanes&=~i,r&&(e.warmLanes|=i),r=e.expirationTimes;for(var c=i;0<c;){var d=31-Ot(c),S=1<<d;r[d]=-1,c&=~S}s!==0&&fl(e,s,i)}function eu(){return(De&6)===0?(Lo(0),!1):!0}function Ih(){if(de!==null){if(Pe===0)var e=de.return;else e=de,Ki=gs=null,eh(e),ar=null,po=0,e=de;for(;e!==null;)Tg(e.alternate,e),e=e.return;de=null}}function pr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Iy(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),oa=0,Ih(),ke=e,de=s=Zi(e.current,null),_e=i,Pe=0,jn=null,Ia=!1,hr=At(e,i),Nh=!1,fr=Kn=Oh=Ts=Ha=Je=0,Vn=Do=null,zh=!1,(i&8)!==0&&(i|=i&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=i;0<r;){var c=31-Ot(r),d=1<<c;i|=e[c],r&=~d}return ra=i,Ml(),s}function jg(e,i){re=null,F.H=Mo,i===ir||i===Dl?(i=hm(),Pe=3):i===kc?(i=hm(),Pe=4):Pe=i===_h?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,jn=i,de===null&&(Je=1,Xl(e,si(i,e.current)))}function Kg(){var e=Yn.current;return e===null?!0:(_e&4194048)===_e?ui===null:(_e&62914560)===_e||(_e&536870912)!==0?e===ui:!1}function Qg(){var e=F.H;return F.H=Mo,e===null?Mo:e}function $g(){var e=F.A;return F.A=_y,e}function nu(){Je=4,Ia||(_e&4194048)!==_e&&Yn.current!==null||(hr=!0),(Ha&134217727)===0&&(Ts&134217727)===0||ke===null||ka(ke,_e,Kn,!1)}function Hh(e,i,s){var r=De;De|=2;var c=Qg(),d=$g();(ke!==e||_e!==i)&&(tu=null,pr(e,i)),i=!1;var S=Je;t:do try{if(Pe!==0&&de!==null){var A=de,I=jn;switch(Pe){case 8:Ih(),S=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(i=!0);var Q=Pe;if(Pe=0,jn=null,mr(e,A,I,Q),s&&hr){S=0;break t}break;default:Q=Pe,Pe=0,jn=null,mr(e,A,I,Q)}}yy(),S=Je;break}catch(ht){jg(e,ht)}while(!0);return i&&e.shellSuspendCounter++,Ki=gs=null,De=r,F.H=c,F.A=d,de===null&&(ke=null,_e=0,Ml()),S}function yy(){for(;de!==null;)Jg(de)}function Sy(e,i){var s=De;De|=2;var r=Qg(),c=$g();ke!==e||_e!==i?(tu=null,Jl=b()+500,pr(e,i)):hr=At(e,i);t:do try{if(Pe!==0&&de!==null){i=de;var d=jn;e:switch(Pe){case 1:Pe=0,jn=null,mr(e,i,d,1);break;case 2:case 9:if(um(d)){Pe=0,jn=null,t0(i);break}i=function(){Pe!==2&&Pe!==9||ke!==e||(Pe=7),Ni(e)},d.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:um(d)?(Pe=0,jn=null,t0(i)):(Pe=0,jn=null,mr(e,i,d,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var A=de;if(S?I0(S):A.stateNode.complete){Pe=0,jn=null;var I=A.sibling;if(I!==null)de=I;else{var Q=A.return;Q!==null?(de=Q,iu(Q)):de=null}break e}}Pe=0,jn=null,mr(e,i,d,5);break;case 6:Pe=0,jn=null,mr(e,i,d,6);break;case 8:Ih(),Je=6;break t;default:throw Error(a(462))}}My();break}catch(ht){jg(e,ht)}while(!0);return Ki=gs=null,F.H=r,F.A=c,De=s,de!==null?0:(ke=null,_e=0,Ml(),Je)}function My(){for(;de!==null&&!qt();)Jg(de)}function Jg(e){var i=Eg(e.alternate,e,ra);e.memoizedProps=e.pendingProps,i===null?iu(e):de=i}function t0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=_g(s,i,i.pendingProps,i.type,void 0,_e);break;case 11:i=_g(s,i,i.pendingProps,i.type.render,i.ref,_e);break;case 5:eh(i);default:Tg(s,i),i=de=$p(i,ra),i=Eg(s,i,ra)}e.memoizedProps=e.pendingProps,i===null?iu(e):de=i}function mr(e,i,s,r){Ki=gs=null,eh(i),ar=null,po=0;var c=i.return;try{if(cy(e,c,i,s,_e)){Je=1,Xl(e,si(s,e.current)),de=null;return}}catch(d){if(c!==null)throw de=c,d;Je=1,Xl(e,si(s,e.current)),de=null;return}i.flags&32768?(xe||r===1?e=!0:hr||(_e&536870912)!==0?e=!1:(Ia=e=!0,(r===2||r===9||r===3||r===6)&&(r=Yn.current,r!==null&&r.tag===13&&(r.flags|=16384))),e0(i,e)):iu(i)}function iu(e){var i=e;do{if((i.flags&32768)!==0){e0(i,Ia);return}e=i.return;var s=dy(i.alternate,i,ra);if(s!==null){de=s;return}if(i=i.sibling,i!==null){de=i;return}de=i=e}while(i!==null);Je===0&&(Je=5)}function e0(e,i){do{var s=py(e.alternate,e);if(s!==null){s.flags&=32767,de=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){de=e;return}de=e=s}while(e!==null);Je=6,de=null}function n0(e,i,s,r,c,d,S,A,I){e.cancelPendingCommit=null;do au();while(hn!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Rc,mi(e,s,d,S,A,I),e===ke&&(de=ke=null,_e=0),dr=i,Ga=e,oa=s,Ph=d,Fh=c,Wg=r,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ay(ut,function(){return o0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,c=H.p,H.p=2,S=De,De|=4;try{my(e,i,s)}finally{De=S,H.p=c,F.T=r}}hn=1,i0(),a0(),s0()}}function i0(){if(hn===1){hn=0;var e=Ga,i=dr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var r=H.p;H.p=2;var c=De;De|=4;try{Fg(i,e);var d=$h,S=kp(e.containerInfo),A=d.focusedElem,I=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&Gp(A.ownerDocument.documentElement,A)){if(I!==null&&Ec(A)){var Q=I.start,ht=I.end;if(ht===void 0&&(ht=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(ht,A.value.length);else{var mt=A.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Vt=A.textContent.length,Jt=Math.min(I.start,Vt),Ge=I.end===void 0?Jt:Math.min(I.end,Vt);!ot.extend&&Jt>Ge&&(S=Ge,Ge=Jt,Jt=S);var Y=Vp(A,Jt),G=Vp(A,Ge);if(Y&&G&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==G.node||ot.focusOffset!==G.offset)){var K=mt.createRange();K.setStart(Y.node,Y.offset),ot.removeAllRanges(),Jt>Ge?(ot.addRange(K),ot.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),ot.addRange(K))}}}}for(mt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}gu=!!Qh,$h=Qh=null}finally{De=c,H.p=r,F.T=s}}e.current=i,hn=2}}function a0(){if(hn===2){hn=0;var e=Ga,i=dr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var r=H.p;H.p=2;var c=De;De|=4;try{Lg(e,i.alternate,i)}finally{De=c,H.p=r,F.T=s}}hn=3}}function s0(){if(hn===4||hn===3){hn=0,L();var e=Ga,i=dr,s=oa,r=Wg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?hn=5:(hn=0,dr=Ga=null,r0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Va=null),Hs(s),i=i.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,i,void 0,(i.current.flags&128)===128)}catch{}if(r!==null){i=F.T,c=H.p,H.p=2,F.T=null;try{for(var d=e.onRecoverableError,S=0;S<r.length;S++){var A=r[S];d(A.value,{componentStack:A.stack})}}finally{F.T=i,H.p=c}}(oa&3)!==0&&au(),Ni(e),c=e.pendingLanes,(s&261930)!==0&&(c&42)!==0?e===Bh?Uo++:(Uo=0,Bh=e):Uo=0,Lo(0)}}function r0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ho(i)))}function au(){return i0(),a0(),s0(),o0()}function o0(){if(hn!==5)return!1;var e=Ga,i=Ph;Ph=0;var s=Hs(oa),r=F.T,c=H.p;try{H.p=32>s?32:s,F.T=null,s=Fh,Fh=null;var d=Ga,S=oa;if(hn=0,dr=Ga=null,oa=0,(De&6)!==0)throw Error(a(331));var A=De;if(De|=4,Gg(d.current),Ig(d,d.current,S,s),De=A,Lo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,d)}catch{}return!0}finally{H.p=c,F.T=r,r0(e,i)}}function l0(e,i,s){i=si(s,i),i=gh(e.stateNode,i,2),e=za(e,i,2),e!==null&&(wn(e,2),Ni(e))}function Fe(e,i,s){if(e.tag===3)l0(e,e,s);else for(;i!==null;){if(i.tag===3){l0(i,e,s);break}else if(i.tag===1){var r=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){e=si(s,e),s=ug(2),r=za(i,s,2),r!==null&&(cg(s,r,i,e),wn(r,2),Ni(r));break}}i=i.return}}function Vh(e,i,s){var r=e.pingCache;if(r===null){r=e.pingCache=new vy;var c=new Set;r.set(i,c)}else c=r.get(i),c===void 0&&(c=new Set,r.set(i,c));c.has(s)||(Nh=!0,c.add(s),e=Ey.bind(null,e,i,s),i.then(e,e))}function Ey(e,i,s){var r=e.pingCache;r!==null&&r.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,ke===e&&(_e&s)===s&&(Je===4||Je===3&&(_e&62914560)===_e&&300>b()-$l?(De&2)===0&&pr(e,0):Oh|=s,fr===_e&&(fr=0)),Ni(e)}function u0(e,i){i===0&&(i=Oe()),e=ds(e,i),e!==null&&(wn(e,i),Ni(e))}function by(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),u0(e,s)}function Ty(e,i){var s=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(i),u0(e,s)}function Ay(e,i){return Se(e,i)}var su=null,gr=null,Gh=!1,ru=!1,kh=!1,Xa=0;function Ni(e){e!==gr&&e.next===null&&(gr===null?su=gr=e:gr=gr.next=e),ru=!0,Gh||(Gh=!0,Ry())}function Lo(e,i){if(!kh&&ru){kh=!0;do for(var s=!1,r=su;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var d=0;else{var S=r.suspendedLanes,A=r.pingedLanes;d=(1<<31-Ot(42|e)+1)-1,d&=c&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,d0(r,d))}else d=_e,d=_t(r,r===ke?d:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(d&3)===0||At(r,d)||(s=!0,d0(r,d));r=r.next}while(s);kh=!1}}function Cy(){c0()}function c0(){ru=Gh=!1;var e=0;Xa!==0&&By()&&(e=Xa);for(var i=b(),s=null,r=su;r!==null;){var c=r.next,d=h0(r,i);d===0?(r.next=null,s===null?su=c:s.next=c,c===null&&(gr=s)):(s=r,(e!==0||(d&3)!==0)&&(ru=!0)),r=c}hn!==0&&hn!==5||Lo(e),Xa!==0&&(Xa=0)}function h0(e,i){for(var s=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Ot(d),A=1<<S,I=c[S];I===-1?((A&s)===0||(A&r)!==0)&&(c[S]=ee(A,i)):I<=i&&(e.expiredLanes|=A),d&=~A}if(i=ke,s=_e,s=_t(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,s===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||At(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(r!==null&&Le(r),Hs(s)){case 2:case 8:s=xt;break;case 32:s=ut;break;case 268435456:s=Ct;break;default:s=ut}return r=f0.bind(null,e),s=Se(s,r),e.callbackPriority=i,e.callbackNode=s,i}return r!==null&&r!==null&&Le(r),e.callbackPriority=2,e.callbackNode=null,2}function f0(e,i){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(au()&&e.callbackNode!==s)return null;var r=_e;return r=_t(e,e===ke?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Yg(e,r,i),h0(e,b()),e.callbackNode!=null&&e.callbackNode===s?f0.bind(null,e):null)}function d0(e,i){if(au())return null;Yg(e,i,!0)}function Ry(){Hy(function(){(De&6)!==0?Se(dt,Cy):c0()})}function Xh(){if(Xa===0){var e=er;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Xa=e}return Xa}function p0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pl(""+e)}function m0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function wy(e,i,s,r,c){if(i==="submit"&&s&&s.stateNode===c){var d=p0((c[vn]||null).action),S=r.submitter;S&&(i=(i=S[vn]||null)?p0(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var A=new vl("action","action",null,r,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var I=S?m0(c,S):new FormData(c);ch(s,{pending:!0,data:I,method:c.method,action:d},null,I)}}else typeof d=="function"&&(A.preventDefault(),I=S?m0(c,S):new FormData(c),ch(s,{pending:!0,data:I,method:c.method,action:d},d,I))},currentTarget:c}]})}}for(var Wh=0;Wh<Cc.length;Wh++){var qh=Cc[Wh],Dy=qh.toLowerCase(),Uy=qh[0].toUpperCase()+qh.slice(1);vi(Dy,"on"+Uy)}vi(qp,"onAnimationEnd"),vi(Yp,"onAnimationIteration"),vi(Zp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(Yx,"onTransitionRun"),vi(Zx,"onTransitionStart"),vi(jx,"onTransitionCancel"),vi(jp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function g0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var r=e[s],c=r.event;r=r.listeners;t:{var d=void 0;if(i)for(var S=r.length-1;0<=S;S--){var A=r[S],I=A.instance,Q=A.currentTarget;if(A=A.listener,I!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=Q;try{d(c)}catch(ht){Sl(ht)}c.currentTarget=null,d=I}else for(S=0;S<r.length;S++){if(A=r[S],I=A.instance,Q=A.currentTarget,A=A.listener,I!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=Q;try{d(c)}catch(ht){Sl(ht)}c.currentTarget=null,d=I}}}}function pe(e,i){var s=i[Vs];s===void 0&&(s=i[Vs]=new Set);var r=e+"__bubble";s.has(r)||(_0(i,e,2,!1),s.add(r))}function Yh(e,i,s){var r=0;i&&(r|=4),_0(s,e,r,i)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Zh(e){if(!e[ou]){e[ou]=!0,q.forEach(function(s){s!=="selectionchange"&&(Ly.has(s)||Yh(s,!1,e),Yh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ou]||(i[ou]=!0,Yh("selectionchange",!1,i))}}function _0(e,i,s,r){switch(q0(i)){case 2:var c=rS;break;case 8:c=oS;break;default:c=cf}s=c.bind(null,i,s,e),c=void 0,!pc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(i,s,{capture:!0,passive:c}):e.addEventListener(i,s,!0):c!==void 0?e.addEventListener(i,s,{passive:c}):e.addEventListener(i,s,!1)}function jh(e,i,s,r,c){var d=r;if((i&1)===0&&(i&2)===0&&r!==null)t:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var A=r.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=r.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Ta(A),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){r=d=S;continue t}A=A.parentNode}}r=r.return}Mp(function(){var Q=d,ht=fc(s),mt=[];t:{var tt=Kp.get(e);if(tt!==void 0){var ot=vl,Vt=e;switch(e){case"keypress":if(gl(s)===0)break t;case"keydown":case"keyup":ot=Tx;break;case"focusin":Vt="focus",ot=vc;break;case"focusout":Vt="blur",ot=vc;break;case"beforeblur":case"afterblur":ot=vc;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Rx;break;case qp:case Yp:case Zp:ot=gx;break;case jp:ot=Dx;break;case"scroll":case"scrollend":ot=hx;break;case"wheel":ot=Lx;break;case"copy":case"cut":case"paste":ot=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Cp;break;case"toggle":case"beforetoggle":ot=Ox}var Jt=(i&4)!==0,Ge=!Jt&&(e==="scroll"||e==="scrollend"),Y=Jt?tt!==null?tt+"Capture":null:tt;Jt=[];for(var G=Q,K;G!==null;){var pt=G;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=to(G,Y),pt!=null&&Jt.push(Oo(G,pt,K))),Ge)break;G=G.return}0<Jt.length&&(tt=new ot(tt,Vt,null,s,ht),mt.push({event:tt,listeners:Jt}))}}if((i&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&s!==hc&&(Vt=s.relatedTarget||s.fromElement)&&(Ta(Vt)||Vt[gi]))break t;if((ot||tt)&&(tt=ht.window===ht?ht:(tt=ht.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Vt=s.relatedTarget||s.toElement,ot=Q,Vt=Vt?Ta(Vt):null,Vt!==null&&(Ge=u(Vt),Jt=Vt.tag,Vt!==Ge||Jt!==5&&Jt!==27&&Jt!==6)&&(Vt=null)):(ot=null,Vt=Q),ot!==Vt)){if(Jt=Tp,pt="onMouseLeave",Y="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Cp,pt="onPointerLeave",Y="onPointerEnter",G="pointer"),Ge=ot==null?tt:us(ot),K=Vt==null?tt:us(Vt),tt=new Jt(pt,G+"leave",ot,s,ht),tt.target=Ge,tt.relatedTarget=K,pt=null,Ta(ht)===Q&&(Jt=new Jt(Y,G+"enter",Vt,s,ht),Jt.target=K,Jt.relatedTarget=Ge,pt=Jt),Ge=pt,ot&&Vt)e:{for(Jt=Ny,Y=ot,G=Vt,K=0,pt=Y;pt;pt=Jt(pt))K++;pt=0;for(var Kt=G;Kt;Kt=Jt(Kt))pt++;for(;0<K-pt;)Y=Jt(Y),K--;for(;0<pt-K;)G=Jt(G),pt--;for(;K--;){if(Y===G||G!==null&&Y===G.alternate){Jt=Y;break e}Y=Jt(Y),G=Jt(G)}Jt=null}else Jt=null;ot!==null&&v0(mt,tt,ot,Jt,!1),Vt!==null&&Ge!==null&&v0(mt,Ge,Vt,Jt,!0)}}t:{if(tt=Q?us(Q):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var be=zp;else if(Np(tt))if(Pp)be=Xx;else{be=Gx;var Yt=Vx}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&_i(Q.elementType)&&(be=zp):be=kx;if(be&&(be=be(e,Q))){Op(mt,be,s,ht);break t}Yt&&Yt(e,tt,Q),e==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&yn(tt,"number",tt.value)}switch(Yt=Q?us(Q):window,e){case"focusin":(Np(Yt)||Yt.contentEditable==="true")&&(Ys=Yt,bc=Q,lo=null);break;case"focusout":lo=bc=Ys=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,Xp(mt,s,ht);break;case"selectionchange":if(qx)break;case"keydown":case"keyup":Xp(mt,s,ht)}var le;if(yc)t:{switch(e){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else qs?Up(e,s)&&(ve="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ve="onCompositionStart");ve&&(Rp&&s.locale!=="ko"&&(qs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&qs&&(le=Ep()):(Ra=ht,mc="value"in Ra?Ra.value:Ra.textContent,qs=!0)),Yt=lu(Q,ve),0<Yt.length&&(ve=new Ap(ve,e,null,s,ht),mt.push({event:ve,listeners:Yt}),le?ve.data=le:(le=Lp(s),le!==null&&(ve.data=le)))),(le=Px?Fx(e,s):Bx(e,s))&&(ve=lu(Q,"onBeforeInput"),0<ve.length&&(Yt=new Ap("onBeforeInput","beforeinput",null,s,ht),mt.push({event:Yt,listeners:ve}),Yt.data=le)),wy(mt,e,Q,s,ht)}g0(mt,i)})}function Oo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function lu(e,i){for(var s=i+"Capture",r=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=to(e,s),c!=null&&r.unshift(Oo(e,c,d)),c=to(e,i),c!=null&&r.push(Oo(e,c,d))),e.tag===3)return r;e=e.return}return[]}function Ny(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v0(e,i,s,r,c){for(var d=i._reactName,S=[];s!==null&&s!==r;){var A=s,I=A.alternate,Q=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||Q===null||(I=Q,c?(Q=to(s,d),Q!=null&&S.unshift(Oo(s,Q,I))):c||(Q=to(s,d),Q!=null&&S.push(Oo(s,Q,I)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var Oy=/\r\n?/g,zy=/\u0000|\uFFFD/g;function x0(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(zy,"")}function y0(e,i){return i=x0(i),x0(e)===i}function Ve(e,i,s,r,c,d){switch(s){case"children":typeof r=="string"?i==="body"||i==="textarea"&&r===""||cn(e,r):(typeof r=="number"||typeof r=="bigint")&&i!=="body"&&cn(e,""+r);break;case"className":Qt(e,"class",r);break;case"tabIndex":Qt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(e,s,r);break;case"style":ks(e,r,d);break;case"data":if(i!=="object"){Qt(e,"data",r);break}case"src":case"href":if(r===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=pl(""+r),e.setAttribute(s,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Ve(e,i,"name",c.name,c,null),Ve(e,i,"formEncType",c.formEncType,c,null),Ve(e,i,"formMethod",c.formMethod,c,null),Ve(e,i,"formTarget",c.formTarget,c,null)):(Ve(e,i,"encType",c.encType,c,null),Ve(e,i,"method",c.method,c,null),Ve(e,i,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=pl(""+r),e.setAttribute(s,r);break;case"onClick":r!=null&&(e.onclick=qi);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(s=r.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}s=pl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""+r):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":r===!0?e.setAttribute(s,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,r):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(s,r):e.removeAttribute(s);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(s):e.setAttribute(s,r);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Xt(e,"popover",r);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ux.get(s)||s,Xt(e,s,r))}}function Kh(e,i,s,r,c,d){switch(s){case"style":ks(e,r,d);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(s=r.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof r=="string"?cn(e,r):(typeof r=="number"||typeof r=="bigint")&&cn(e,""+r);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),d=e[vn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,c),typeof r=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,r,c);break t}s in e?e[s]=r:r===!0?e.setAttribute(s,""):Xt(e,s,r)}}}function Cn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var r=!1,c=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,d,S,s,null)}}c&&Ve(e,i,"srcSet",s.srcSet,s,null),r&&Ve(e,i,"src",s.src,s,null);return;case"input":pe("invalid",e);var A=d=S=c=null,I=null,Q=null;for(r in s)if(s.hasOwnProperty(r)){var ht=s[r];if(ht!=null)switch(r){case"name":c=ht;break;case"type":S=ht;break;case"checked":I=ht;break;case"defaultChecked":Q=ht;break;case"value":d=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:Ve(e,i,r,ht,s,null)}}Wi(e,d,A,I,Q,S,c,!1);return;case"select":pe("invalid",e),r=S=d=null;for(c in s)if(s.hasOwnProperty(c)&&(A=s[c],A!=null))switch(c){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":r=A;default:Ve(e,i,c,A,s,null)}i=d,s=S,e.multiple=!!r,i!=null?ii(e,!!r,i,!1):s!=null&&ii(e,!!r,s,!0);return;case"textarea":pe("invalid",e),d=c=r=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":r=A;break;case"defaultValue":c=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Ve(e,i,S,A,s,null)}Sn(e,r,c,d);return;case"option":for(I in s)s.hasOwnProperty(I)&&(r=s[I],r!=null)&&(I==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Ve(e,i,I,r,s,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(r=0;r<No.length;r++)pe(No[r],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in s)if(s.hasOwnProperty(Q)&&(r=s[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,Q,r,s,null)}return;default:if(_i(i)){for(ht in s)s.hasOwnProperty(ht)&&(r=s[ht],r!==void 0&&Kh(e,i,ht,r,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(r=s[A],r!=null&&Ve(e,i,A,r,s,null))}function Py(e,i,s,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,S=null,A=null,I=null,Q=null,ht=null;for(ot in s){var mt=s[ot];if(s.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=mt;default:r.hasOwnProperty(ot)||Ve(e,i,ot,null,r,mt)}}for(var tt in r){var ot=r[tt];if(mt=s[tt],r.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":d=ot;break;case"name":c=ot;break;case"checked":Q=ot;break;case"defaultChecked":ht=ot;break;case"value":S=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:ot!==mt&&Ve(e,i,tt,ot,r,mt)}}xn(e,S,A,I,Q,ht,d,c);return;case"select":ot=S=A=tt=null;for(d in s)if(I=s[d],s.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":ot=I;default:r.hasOwnProperty(d)||Ve(e,i,d,null,r,I)}for(c in r)if(d=r[c],I=s[c],r.hasOwnProperty(c)&&(d!=null||I!=null))switch(c){case"value":tt=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==I&&Ve(e,i,c,d,r,I)}i=A,s=S,r=ot,tt!=null?ii(e,!!s,tt,!1):!!r!=!!s&&(i!=null?ii(e,!!s,i,!0):ii(e,!!s,s?[]:"",!1));return;case"textarea":ot=tt=null;for(A in s)if(c=s[A],s.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,i,A,null,r,c)}for(S in r)if(c=r[S],d=s[S],r.hasOwnProperty(S)&&(c!=null||d!=null))switch(S){case"value":tt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==d&&Ve(e,i,S,c,r,d)}ze(e,tt,ot);return;case"option":for(var Vt in s)tt=s[Vt],s.hasOwnProperty(Vt)&&tt!=null&&!r.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:Ve(e,i,Vt,null,r,tt));for(I in r)tt=r[I],ot=s[I],r.hasOwnProperty(I)&&tt!==ot&&(tt!=null||ot!=null)&&(I==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Ve(e,i,I,tt,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in s)tt=s[Jt],s.hasOwnProperty(Jt)&&tt!=null&&!r.hasOwnProperty(Jt)&&Ve(e,i,Jt,null,r,tt);for(Q in r)if(tt=r[Q],ot=s[Q],r.hasOwnProperty(Q)&&tt!==ot&&(tt!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(a(137,i));break;default:Ve(e,i,Q,tt,r,ot)}return;default:if(_i(i)){for(var Ge in s)tt=s[Ge],s.hasOwnProperty(Ge)&&tt!==void 0&&!r.hasOwnProperty(Ge)&&Kh(e,i,Ge,void 0,r,tt);for(ht in r)tt=r[ht],ot=s[ht],!r.hasOwnProperty(ht)||tt===ot||tt===void 0&&ot===void 0||Kh(e,i,ht,tt,r,ot);return}}for(var Y in s)tt=s[Y],s.hasOwnProperty(Y)&&tt!=null&&!r.hasOwnProperty(Y)&&Ve(e,i,Y,null,r,tt);for(mt in r)tt=r[mt],ot=s[mt],!r.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Ve(e,i,mt,tt,r,ot)}function S0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),r=0;r<s.length;r++){var c=s[r],d=c.transferSize,S=c.initiatorType,A=c.duration;if(d&&A&&S0(S)){for(S=0,A=c.responseEnd,r+=1;r<s.length;r++){var I=s[r],Q=I.startTime;if(Q>A)break;var ht=I.transferSize,mt=I.initiatorType;ht&&S0(mt)&&(I=I.responseEnd,S+=ht*(I<A?1:(A-Q)/(I-Q)))}if(--r,i+=8*(d+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qh=null,$h=null;function uu(e){return e.nodeType===9?e:e.ownerDocument}function M0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Jh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tf=null;function By(){var e=window.event;return e&&e.type==="popstate"?e===tf?!1:(tf=e,!0):(tf=null,!1)}var b0=typeof setTimeout=="function"?setTimeout:void 0,Iy=typeof clearTimeout=="function"?clearTimeout:void 0,T0=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof T0<"u"?function(e){return T0.resolve(null).then(e).catch(Vy)}:b0;function Vy(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function A0(e,i){var s=i,r=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"||s==="/&"){if(r===0){e.removeChild(c),yr(i);return}r--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")r++;else if(s==="html")zo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,zo(s);for(var d=s.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[ls]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&zo(e.ownerDocument.body);s=c}while(s);yr(i)}function C0(e,i){var s=e;e=0;do{var r=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),r&&r.nodeType===8)if(s=r.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=r}while(s)}function ef(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ef(s),Jr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Gy(e,i,s,r){for(;e.nodeType===1;){var c=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ls])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function ky(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ci(e.nextSibling),e===null))return null;return e}function R0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=ci(e.nextSibling),e===null))return null;return e}function nf(e){return e.data==="$?"||e.data==="$~"}function af(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Xy(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var r=function(){i(),s.removeEventListener("DOMContentLoaded",r)};s.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ci(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var sf=null;function w0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return ci(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function D0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function U0(e,i,s){switch(i=uu(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function zo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Jr(e)}var hi=new Map,L0=new Set;function cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=H.d;H.d={f:Wy,r:qy,D:Yy,C:Zy,L:jy,m:Ky,X:$y,S:Qy,M:Jy};function Wy(){var e=la.f(),i=eu();return e||i}function qy(e){var i=Aa(e);i!==null&&i.tag===5&&i.type==="form"?jm(i):la.r(e)}var _r=typeof document>"u"?null:document;function N0(e,i,s){var r=_r;if(r&&typeof i=="string"&&i){var c=ne(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),L0.has(c)||(L0.add(c),e={rel:e,crossOrigin:s,href:i},r.querySelector(c)===null&&(i=r.createElement("link"),Cn(i,"link",e),C(i),r.head.appendChild(i)))}}function Yy(e){la.D(e),N0("dns-prefetch",e,null)}function Zy(e,i){la.C(e,i),N0("preconnect",e,i)}function jy(e,i,s){la.L(e,i,s);var r=_r;if(r&&e&&i){var c='link[rel="preload"][as="'+ne(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+ne(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+ne(s.imageSizes)+'"]')):c+='[href="'+ne(e)+'"]';var d=c;switch(i){case"style":d=vr(e);break;case"script":d=xr(e)}hi.has(d)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),hi.set(d,e),r.querySelector(c)!==null||i==="style"&&r.querySelector(Po(d))||i==="script"&&r.querySelector(Fo(d))||(i=r.createElement("link"),Cn(i,"link",e),C(i),r.head.appendChild(i)))}}function Ky(e,i){la.m(e,i);var s=_r;if(s&&e){var r=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+ne(r)+'"][href="'+ne(e)+'"]',d=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=xr(e)}if(!hi.has(d)&&(e=_({rel:"modulepreload",href:e},i),hi.set(d,e),s.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Fo(d)))return}r=s.createElement("link"),Cn(r,"link",e),C(r),s.head.appendChild(r)}}}function Qy(e,i,s){la.S(e,i,s);var r=_r;if(r&&e){var c=Ca(r).hoistableStyles,d=vr(e);i=i||"default";var S=c.get(d);if(!S){var A={loading:0,preload:null};if(S=r.querySelector(Po(d)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=hi.get(d))&&rf(e,s);var I=S=r.createElement("link");C(I),Cn(I,"link",e),I._p=new Promise(function(Q,ht){I.onload=Q,I.onerror=ht}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hu(S,i,r)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(d,S)}}}function $y(e,i){la.X(e,i);var s=_r;if(s&&e){var r=Ca(s).hoistableScripts,c=xr(e),d=r.get(c);d||(d=s.querySelector(Fo(c)),d||(e=_({src:e,async:!0},i),(i=hi.get(c))&&of(e,i),d=s.createElement("script"),C(d),Cn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(c,d))}}function Jy(e,i){la.M(e,i);var s=_r;if(s&&e){var r=Ca(s).hoistableScripts,c=xr(e),d=r.get(c);d||(d=s.querySelector(Fo(c)),d||(e=_({src:e,async:!0,type:"module"},i),(i=hi.get(c))&&of(e,i),d=s.createElement("script"),C(d),Cn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(c,d))}}function O0(e,i,s,r){var c=(c=et.current)?cu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=vr(s.href),s=Ca(c).hoistableStyles,r=s.get(i),r||(r={type:"style",instance:null,count:0,state:null},s.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=vr(s.href);var d=Ca(c).hoistableStyles,S=d.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=c.querySelector(Po(e)))&&!d._p&&(S.instance=d,S.state.loading=5),hi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},hi.set(e,s),d||tS(c,e,s,S.state))),i&&r===null)throw Error(a(528,""));return S}if(i&&r!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=xr(s),s=Ca(c).hoistableScripts,r=s.get(i),r||(r={type:"script",instance:null,count:0,state:null},s.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function vr(e){return'href="'+ne(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function tS(e,i,s,r){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?r.loading=1:(i=e.createElement("link"),r.preload=i,i.addEventListener("load",function(){return r.loading|=1}),i.addEventListener("error",function(){return r.loading|=2}),Cn(i,"link",s),C(i),e.head.appendChild(i))}function xr(e){return'[src="'+ne(e)+'"]'}function Fo(e){return"script[async]"+e}function P0(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var r=e.querySelector('style[data-href~="'+ne(s.href)+'"]');if(r)return i.instance=r,C(r),r;var c=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),C(r),Cn(r,"style",c),hu(r,s.precedence,e),i.instance=r;case"stylesheet":c=vr(s.href);var d=e.querySelector(Po(c));if(d)return i.state.loading|=4,i.instance=d,C(d),d;r=z0(s),(c=hi.get(c))&&rf(r,c),d=(e.ownerDocument||e).createElement("link"),C(d);var S=d;return S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),Cn(d,"link",r),i.state.loading|=4,hu(d,s.precedence,e),i.instance=d;case"script":return d=xr(s.src),(c=e.querySelector(Fo(d)))?(i.instance=c,C(c),c):(r=s,(c=hi.get(d))&&(r=_({},s),of(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),C(c),Cn(c,"link",r),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(r=i.instance,i.state.loading|=4,hu(r,s.precedence,e));return i.instance}function hu(e,i,s){for(var r=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,d=c,S=0;S<r.length;S++){var A=r[S];if(A.dataset.precedence===i)d=A;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function rf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function of(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var fu=null;function F0(e,i,s){if(fu===null){var r=new Map,c=fu=new Map;c.set(s,r)}else c=fu,r=c.get(s),r||(r=new Map,c.set(s,r));if(r.has(e))return r;for(r.set(e,null),s=s.getElementsByTagName(e),c=0;c<s.length;c++){var d=s[c];if(!(d[ls]||d[an]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var A=r.get(S);A?A.push(d):r.set(S,[d])}}return r}function B0(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function eS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function I0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nS(e,i,s,r){if(s.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var c=vr(r.href),d=i.querySelector(Po(c));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=du.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,C(d);return}d=i.ownerDocument||i,r=z0(r),(c=hi.get(c))&&rf(r,c),d=d.createElement("link"),C(d);var S=d;S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),Cn(d,"link",r),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=du.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var lf=0;function iS(e,i){return e.stylesheets&&e.count===0&&mu(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var r=setTimeout(function(){if(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&lf===0&&(lf=62500*Fy());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mu(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>lf?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function du(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pu=null;function mu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pu=new Map,i.forEach(aS,e),pu=null,du.call(e))}function aS(e,i){if(!(i.state.loading&4)){var s=pu.get(e);if(s)var r=s.get(null);else{s=new Map,pu.set(e,s);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var S=c[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),r=S)}r&&s.set(null,r)}c=i.instance,S=c.getAttribute("data-precedence"),d=s.get(S)||r,d===r&&s.set(null,c),s.set(S,c),this.count++,r=du.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var Bo={$$typeof:U,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function sS(e,i,s,r,c,d,S,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Me(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Me(0),this.hiddenUpdates=Me(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function H0(e,i,s,r,c,d,S,A,I,Q,ht,mt){return e=new sS(e,i,s,S,I,Q,ht,mt,A),i=1,d===!0&&(i|=24),d=qn(3,null,null,i),e.current=d,d.stateNode=e,i=Hc(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:r,isDehydrated:s,cache:i},Xc(d),e}function V0(e){return e?(e=Ks,e):Ks}function G0(e,i,s,r,c,d){c=V0(c),r.context===null?r.context=c:r.pendingContext=c,r=Oa(i),r.payload={element:s},d=d===void 0?null:d,d!==null&&(r.callback=d),s=za(e,r,i),s!==null&&(Gn(s,e,i),go(s,e,i))}function k0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function uf(e,i){k0(e,i),(e=e.alternate)&&k0(e,i)}function X0(e){if(e.tag===13||e.tag===31){var i=ds(e,67108864);i!==null&&Gn(i,e,67108864),uf(e,67108864)}}function W0(e){if(e.tag===13||e.tag===31){var i=Qn();i=Kr(i);var s=ds(e,i);s!==null&&Gn(s,e,i),uf(e,i)}}var gu=!0;function rS(e,i,s,r){var c=F.T;F.T=null;var d=H.p;try{H.p=2,cf(e,i,s,r)}finally{H.p=d,F.T=c}}function oS(e,i,s,r){var c=F.T;F.T=null;var d=H.p;try{H.p=8,cf(e,i,s,r)}finally{H.p=d,F.T=c}}function cf(e,i,s,r){if(gu){var c=hf(r);if(c===null)jh(e,i,r,_u,s),Y0(e,r);else if(uS(c,e,i,s,r))r.stopPropagation();else if(Y0(e,r),i&4&&-1<lS.indexOf(e)){for(;c!==null;){var d=Aa(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=St(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var I=1<<31-Ot(S);A.entanglements[1]|=I,S&=~I}Ni(d),(De&6)===0&&(Jl=b()+500,Lo(0))}}break;case 31:case 13:A=ds(d,2),A!==null&&Gn(A,d,2),eu(),uf(d,2)}if(d=hf(r),d===null&&jh(e,i,r,_u,s),d===c)break;c=d}c!==null&&r.stopPropagation()}else jh(e,i,r,null,s)}}function hf(e){return e=fc(e),ff(e)}var _u=null;function ff(e){if(_u=null,e=Ta(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=h(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return _u=e,null}function q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case dt:return 2;case xt:return 8;case ut:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var df=!1,qa=null,Ya=null,Za=null,Io=new Map,Ho=new Map,ja=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y0(e,i){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(i.pointerId)}}function Vo(e,i,s,r,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:r,nativeEvent:d,targetContainers:[c]},i!==null&&(i=Aa(i),i!==null&&X0(i)),e):(e.eventSystemFlags|=r,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function uS(e,i,s,r,c){switch(i){case"focusin":return qa=Vo(qa,e,i,s,r,c),!0;case"dragenter":return Ya=Vo(Ya,e,i,s,r,c),!0;case"mouseover":return Za=Vo(Za,e,i,s,r,c),!0;case"pointerover":var d=c.pointerId;return Io.set(d,Vo(Io.get(d)||null,e,i,s,r,c)),!0;case"gotpointercapture":return d=c.pointerId,Ho.set(d,Vo(Ho.get(d)||null,e,i,s,r,c)),!0}return!1}function Z0(e){var i=Ta(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=h(s),i!==null){e.blockedOn=i,wi(e.priority,function(){W0(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,wi(e.priority,function(){W0(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=hf(e.nativeEvent);if(s===null){s=e.nativeEvent;var r=new s.constructor(s.type,s);hc=r,s.target.dispatchEvent(r),hc=null}else return i=Aa(s),i!==null&&X0(i),e.blockedOn=s,!1;i.shift()}return!0}function j0(e,i,s){vu(e)&&s.delete(i)}function cS(){df=!1,qa!==null&&vu(qa)&&(qa=null),Ya!==null&&vu(Ya)&&(Ya=null),Za!==null&&vu(Za)&&(Za=null),Io.forEach(j0),Ho.forEach(j0)}function xu(e,i){e.blockedOn===i&&(e.blockedOn=null,df||(df=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,cS)))}var yu=null;function K0(e){yu!==e&&(yu=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){yu===e&&(yu=null);for(var i=0;i<e.length;i+=3){var s=e[i],r=e[i+1],c=e[i+2];if(typeof r!="function"){if(ff(r||s)===null)continue;break}var d=Aa(s);d!==null&&(e.splice(i,3),i-=3,ch(d,{pending:!0,data:c,method:s.method,action:r},r,c))}}))}function yr(e){function i(I){return xu(I,e)}qa!==null&&xu(qa,e),Ya!==null&&xu(Ya,e),Za!==null&&xu(Za,e),Io.forEach(i),Ho.forEach(i);for(var s=0;s<ja.length;s++){var r=ja[s];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ja.length&&(s=ja[0],s.blockedOn===null);)Z0(s),s.blockedOn===null&&ja.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(r=0;r<s.length;r+=3){var c=s[r],d=s[r+1],S=c[vn]||null;if(typeof d=="function")S||K0(s);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(c=d,S=d[vn]||null)A=S.formAction;else if(ff(c)!==null)continue}else A=S.action;typeof A=="function"?s[r+1]=A:(s.splice(r,3),r-=3),K0(s)}}}function Q0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function i(){c!==null&&(c(),c=null),r||setTimeout(s,20)}function s(){if(!r&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),c!==null&&(c(),c=null)}}}function pf(e){this._internalRoot=e}Su.prototype.render=pf.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,r=Qn();G0(s,r,e,i,null,null)},Su.prototype.unmount=pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;G0(e.current,2,null,e,null,null),eu(),i[gi]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var i=Qr();e={blockedOn:null,target:e,priority:i};for(var s=0;s<ja.length&&i!==0&&i<ja[s].priority;s++);ja.splice(s,0,e),s===0&&Z0(e)}};var $0=t.version;if($0!=="19.2.3")throw Error(a(527,$0,"19.2.3"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var hS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Mt=Mu.inject(hS),Et=Mu}catch{}}return ko.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,r="",c=sg,d=rg,S=og;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=H0(e,1,!1,null,null,s,r,null,c,d,S,Q0),e[gi]=i.current,Zh(e),new pf(i)},ko.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var r=!1,c="",d=sg,S=rg,A=og,I=null;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(I=s.formState)),i=H0(e,1,!0,i,s??null,r,c,I,d,S,A,Q0),i.context=V0(null),s=i.current,r=Qn(),r=Kr(r),c=Oa(r),c.callback=null,za(s,c,r),s=r,i.current.lanes=s,wn(i,s),Ni(i),e[gi]=i.current,Zh(e),new Su(i)},ko.version="19.2.3",ko}var l_;function ES(){if(l_)return _f.exports;l_=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),_f.exports=MS(),_f.exports}var bS=ES();const sp="182",TS=0,u_=1,AS=2,Zu=1,CS=2,$o=3,os=0,Xn=1,ga=2,va=0,Br=1,c_=2,h_=3,f_=4,RS=5,Ns=100,wS=101,DS=102,US=103,LS=104,NS=200,OS=201,zS=202,PS=203,ld=204,ud=205,FS=206,BS=207,IS=208,HS=209,VS=210,GS=211,kS=212,XS=213,WS=214,cd=0,hd=1,fd=2,Hr=3,dd=4,pd=5,md=6,gd=7,rp=0,qS=1,YS=2,Bi=0,yv=1,Sv=2,Mv=3,Ev=4,bv=5,Tv=6,Av=7,Cv=300,Bs=301,Vr=302,_d=303,vd=304,rc=306,xd=1e3,_a=1001,yd=1002,Rn=1003,ZS=1004,Eu=1005,On=1006,Sf=1007,zs=1008,ei=1009,Rv=1010,wv=1011,el=1012,op=1013,Gi=1014,Pi=1015,Ma=1016,lp=1017,up=1018,nl=1020,Dv=35902,Uv=35899,Lv=1021,Nv=1022,Ai=1023,Ea=1026,Ps=1027,Ov=1028,cp=1029,Gr=1030,hp=1031,fp=1033,ju=33776,Ku=33777,Qu=33778,$u=33779,Sd=35840,Md=35841,Ed=35842,bd=35843,Td=36196,Ad=37492,Cd=37496,Rd=37488,wd=37489,Dd=37490,Ud=37491,Ld=37808,Nd=37809,Od=37810,zd=37811,Pd=37812,Fd=37813,Bd=37814,Id=37815,Hd=37816,Vd=37817,Gd=37818,kd=37819,Xd=37820,Wd=37821,qd=36492,Yd=36494,Zd=36495,jd=36283,Kd=36284,Qd=36285,$d=36286,jS=3200,zv=0,KS=1,as="",di="srgb",kr="srgb-linear",nc="linear",Be="srgb",Sr=7680,d_=519,QS=512,$S=513,JS=514,dp=515,tM=516,eM=517,pp=518,nM=519,p_=35044,m_="300 es",Fi=2e3,ic=2001;function Pv(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function ac(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function iM(){const l=ac("canvas");return l.style.display="block",l}const g_={};function __(...l){const t="THREE."+l.shift();console.log(t,...l)}function ae(...l){const t="THREE."+l.shift();console.warn(t,...l)}function Ae(...l){const t="THREE."+l.shift();console.error(t,...l)}function il(...l){const t=l.join(" ");t in g_||(g_[t]=!0,ae(...l))}function aM(l,t,n){return new Promise(function(a,o){function u(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:o();break;case l.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}let Wr=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let u=0,h=o.length;u<h;u++)o[u].call(this,t);t.target=null}}};const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mf=Math.PI/180,Jd=180/Math.PI;function rl(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Un[l&255]+Un[l>>8&255]+Un[l>>16&255]+Un[l>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]).toLowerCase()}function ye(l,t,n){return Math.max(t,Math.min(n,l))}function sM(l,t){return(l%t+t)%t}function Ef(l,t,n){return(1-n)*l+n*t}function Xo(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function kn(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}let Ie=class Fv{constructor(t=0,n=0){Fv.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-t.x,h=this.y-t.y;return this.x=u*a-h*o+t.x,this.y=u*o+h*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ol=class{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,u,h,f){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],v=u[h+0],y=u[h+1],E=u[h+2],T=u[h+3];if(f<=0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=T;return}if(_!==T||m!==v||p!==y||g!==E){let M=m*v+p*y+g*E+_*T;M<0&&(v=-v,y=-y,E=-E,T=-T,M=-M);let x=1-f;if(M<.9995){const w=Math.acos(M),U=Math.sin(w);x=Math.sin(x*w)/U,f=Math.sin(f*w)/U,m=m*x+v*f,p=p*x+y*f,g=g*x+E*f,_=_*x+T*f}else{m=m*x+v*f,p=p*x+y*f,g=g*x+E*f,_=_*x+T*f;const w=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=w,p*=w,g*=w,_*=w}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,u,h){const f=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=u[h],v=u[h+1],y=u[h+2],E=u[h+3];return t[n]=f*E+g*_+m*y-p*v,t[n+1]=m*E+g*v+p*_-f*y,t[n+2]=p*E+g*y+f*v-m*_,t[n+3]=g*E-f*_-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,u=t._z,h=t._order,f=Math.cos,m=Math.sin,p=f(a/2),g=f(o/2),_=f(u/2),v=m(a/2),y=m(o/2),E=m(u/2);switch(h){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],u=n[8],h=n[1],f=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-o)*y}else if(a>f&&a>_){const y=2*Math.sqrt(1+a-f-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+h)/y,this._z=(u+p)/y}else if(f>_){const y=2*Math.sqrt(1+f-a-_);this._w=(u-p)/y,this._x=(o+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-f);this._w=(h-o)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,u=t._z,h=t._w,f=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+h*f+o*p-u*m,this._y=o*g+h*m+u*f-a*p,this._z=u*g+h*p+a*m-o*f,this._w=h*g-a*f-o*m-u*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,u=t._z,h=t._w,f=this.dot(t);f<0&&(a=-a,o=-o,u=-u,h=-h,f=-f);let m=1-n;if(f<.9995){const p=Math.acos(f),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+h*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+h*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rt=class Bv{constructor(t=0,n=0,a=0){Bv.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(v_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(v_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=t.elements,h=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*h,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*h,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*h,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,u=t.x,h=t.y,f=t.z,m=t.w,p=2*(h*o-f*a),g=2*(f*n-u*o),_=2*(u*a-h*n);return this.x=n+m*p+h*_-f*g,this.y=a+m*g+f*p-u*_,this.z=o+m*_+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,u=t.z,h=n.x,f=n.y,m=n.z;return this.x=o*m-u*f,this.y=u*h-a*m,this.z=a*f-o*h,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return bf.copy(this).projectOnVector(t),this.sub(bf)}reflect(t){return this.sub(bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const bf=new rt,v_=new ol;let ce=class Iv{constructor(t,n,a,o,u,h,f,m,p){Iv.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,h,f,m,p)}set(t,n,a,o,u,h,f,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=u,g[5]=m,g[6]=a,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,h=a[0],f=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],y=a[5],E=a[8],T=o[0],M=o[3],x=o[6],w=o[1],U=o[4],O=o[7],P=o[2],B=o[5],z=o[8];return u[0]=h*T+f*w+m*P,u[3]=h*M+f*U+m*B,u[6]=h*x+f*O+m*z,u[1]=p*T+g*w+_*P,u[4]=p*M+g*U+_*B,u[7]=p*x+g*O+_*z,u[2]=v*T+y*w+E*P,u[5]=v*M+y*U+E*B,u[8]=v*x+y*O+E*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8];return n*h*g-n*f*p-a*u*g+a*f*m+o*u*p-o*h*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],_=g*h-f*p,v=f*m-g*u,y=p*u-h*m,E=n*_+a*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(o*p-g*a)*T,t[2]=(f*a-o*h)*T,t[3]=v*T,t[4]=(g*n-o*m)*T,t[5]=(o*u-f*n)*T,t[6]=y*T,t[7]=(a*m-p*n)*T,t[8]=(h*n-a*u)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,u,h,f){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*h+p*f)+h+t,-o*p,o*m,-o*(-p*h+m*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Tf.makeScale(t,n)),this}rotate(t){return this.premultiply(Tf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Tf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const Tf=new ce,x_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rM(){const l={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(o,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(o.r=xa(o.r),o.g=xa(o.g),o.b=xa(o.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(o.r=Ir(o.r),o.g=Ir(o.g),o.b=Ir(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===as?nc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,h){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(o,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return l.define({[kr]:{primaries:t,whitePoint:a,transfer:nc,toXYZ:x_,fromXYZ:y_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:a,transfer:Be,toXYZ:x_,fromXYZ:y_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),l}const Ee=rM();function xa(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Ir(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Mr,oM=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Mr===void 0&&(Mr=ac("canvas")),Mr.width=t.width,Mr.height=t.height;const o=Mr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Mr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ac("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),u=o.data;for(let h=0;h<u.length;h++)u[h]=xa(u[h]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(xa(n[a]/255)*255):n[a]=xa(n[a]);return{data:n,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lM=0,mp=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let h=0,f=o.length;h<f;h++)o[h].isDataTexture?u.push(Af(o[h].image)):u.push(Af(o[h]))}else u=Af(o);a.url=u}return n||(t.images[this.uuid]=a),a}};function Af(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?oM.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let uM=0;const Cf=new rt;let Ri=class Ju extends Wr{constructor(t=Ju.DEFAULT_IMAGE,n=Ju.DEFAULT_MAPPING,a=_a,o=_a,u=On,h=zs,f=Ai,m=ei,p=Ju.DEFAULT_ANISOTROPY,g=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=rl(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cf).x}get height(){return this.source.getSize(Cf).y}get depth(){return this.source.getSize(Cf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){ae(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ae(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xd:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xd:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=Cv;Ri.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,n=0,a=0,o=1){tn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=this.w,h=t.elements;return this.x=h[0]*n+h[4]*a+h[8]*o+h[12]*u,this.y=h[1]*n+h[5]*a+h[9]*o+h[13]*u,this.z=h[2]*n+h[6]*a+h[10]*o+h[14]*u,this.w=h[3]*n+h[7]*a+h[11]*o+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,u;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,O=(y+1)/2,P=(x+1)/2,B=(g+v)/4,z=(_+T)/4,j=(E+M)/4;return U>O&&U>P?U<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(U),o=B/a,u=z/a):O>P?O<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(O),a=B/o,u=j/o):P<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(P),a=z/u,o=j/u),this.set(a,o,u,n),this}let w=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(_-T)/w,this.z=(v-g)/w,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cM extends Wr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new tn(0,0,t,n),this.scissorTest=!1,this.viewport=new tn(0,0,t,n);const o={width:t,height:n,depth:a.depth},u=new Ri(o);this.textures=[];const h=a.count;for(let f=0;f<h;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new mp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends cM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Hv extends Ri{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hM extends Ri{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,f=u.count;h<f;h++)t.isMesh===!0?t.getVertexPosition(h,Si):Si.fromBufferAttribute(u,h),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),bu.copy(a.boundingBox)),bu.applyMatrix4(t.matrixWorld),this.union(bu)}const o=t.children;for(let u=0,h=o.length;u<h;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Tu.subVectors(this.max,Wo),Er.subVectors(t.a,Wo),br.subVectors(t.b,Wo),Tr.subVectors(t.c,Wo),Qa.subVectors(br,Er),$a.subVectors(Tr,br),As.subVectors(Er,Tr);let n=[0,-Qa.z,Qa.y,0,-$a.z,$a.y,0,-As.z,As.y,Qa.z,0,-Qa.x,$a.z,0,-$a.x,As.z,0,-As.x,-Qa.y,Qa.x,0,-$a.y,$a.x,0,-As.y,As.x,0];return!Rf(n,Er,br,Tr,Tu)||(n=[1,0,0,0,1,0,0,0,1],!Rf(n,Er,br,Tr,Tu))?!1:(Au.crossVectors(Qa,$a),n=[Au.x,Au.y,Au.z],Rf(n,Er,br,Tr,Tu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ua=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Si=new rt,bu=new ll,Er=new rt,br=new rt,Tr=new rt,Qa=new rt,$a=new rt,As=new rt,Wo=new rt,Tu=new rt,Au=new rt,Cs=new rt;function Rf(l,t,n,a,o){for(let u=0,h=l.length-3;u<=h;u+=3){Cs.fromArray(l,u);const f=o.x*Math.abs(Cs.x)+o.y*Math.abs(Cs.y)+o.z*Math.abs(Cs.z),m=t.dot(Cs),p=n.dot(Cs),g=a.dot(Cs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>f)return!1}return!0}const fM=new ll,qo=new rt,wf=new rt;class gp{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):fM.setFromPoints(t).getCenter(a);let o=0;for(let u=0,h=t.length;u<h;u++)o=Math.max(o,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const n=qo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(qo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(wf)),this.expandByPoint(qo.copy(t.center).sub(wf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new rt,Df=new rt,Cu=new rt,Ja=new rt,Uf=new rt,Ru=new rt,Lf=new rt;class dM{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ca.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,n),ca.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Df.copy(t).add(n).multiplyScalar(.5),Cu.copy(n).sub(t).normalize(),Ja.copy(this.origin).sub(Df);const u=t.distanceTo(n)*.5,h=-this.direction.dot(Cu),f=Ja.dot(this.direction),m=-Ja.dot(Cu),p=Ja.lengthSq(),g=Math.abs(1-h*h);let _,v,y,E;if(g>0)if(_=h*m-f,v=h*f-m,E=u*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,y=_*(_+h*v+2*f)+v*(h*_+v+2*m)+p}else v=u,_=Math.max(0,-(h*v+f)),y=-_*_+v*(v+2*m)+p;else v=-u,_=Math.max(0,-(h*v+f)),y=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-h*u+f)),v=_>0?-u:Math.min(Math.max(-u,-m),u),y=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-u,-m),u),y=v*(v+2*m)+p):(_=Math.max(0,-(h*u+f)),v=_>0?u:Math.min(Math.max(-u,-m),u),y=-_*_+v*(v+2*m)+p);else v=h>0?-u:u,_=Math.max(0,-(h*v+f)),y=-_*_+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Df).addScaledVector(Cu,v),y}intersectSphere(t,n){ca.subVectors(t.center,this.origin);const a=ca.dot(this.direction),o=ca.dot(ca)-a*a,u=t.radius*t.radius;if(o>u)return null;const h=Math.sqrt(u-o),f=a-h,m=a+h;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,u,h,f,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),g>=0?(u=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),a>h||u>o||((u>a||isNaN(a))&&(a=u),(h<o||isNaN(o))&&(o=h),_>=0?(f=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),a>m||f>o)||((f>a||a!==a)&&(a=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,n,a,o,u){Uf.subVectors(n,t),Ru.subVectors(a,t),Lf.crossVectors(Uf,Ru);let h=this.direction.dot(Lf),f;if(h>0){if(o)return null;f=1}else if(h<0)f=-1,h=-h;else return null;Ja.subVectors(this.origin,t);const m=f*this.direction.dot(Ru.crossVectors(Ja,Ru));if(m<0)return null;const p=f*this.direction.dot(Uf.cross(Ja));if(p<0||m+p>h)return null;const g=-f*Ja.dot(Lf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let fn=class tp{constructor(t,n,a,o,u,h,f,m,p,g,_,v,y,E,T,M){tp.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,h,f,m,p,g,_,v,y,E,T,M)}set(t,n,a,o,u,h,f,m,p,g,_,v,y,E,T,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=u,x[5]=h,x[9]=f,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tp().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Ar.setFromMatrixColumn(t,0).length(),u=1/Ar.setFromMatrixColumn(t,1).length(),h=1/Ar.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*h,n[9]=a[9]*h,n[10]=a[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,u=t.z,h=Math.cos(a),f=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const v=h*g,y=h*_,E=f*g,T=f*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+E*p,n[5]=v-T*p,n[9]=-f*m,n[2]=T-v*p,n[6]=E+y*p,n[10]=h*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=p*g,T=p*_;n[0]=v+T*f,n[4]=E*f-y,n[8]=h*p,n[1]=h*_,n[5]=h*g,n[9]=-f,n[2]=y*f-E,n[6]=T+v*f,n[10]=h*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=p*g,T=p*_;n[0]=v-T*f,n[4]=-h*_,n[8]=E+y*f,n[1]=y+E*f,n[5]=h*g,n[9]=T-v*f,n[2]=-h*p,n[6]=f,n[10]=h*m}else if(t.order==="ZYX"){const v=h*g,y=h*_,E=f*g,T=f*_;n[0]=m*g,n[4]=E*p-y,n[8]=v*p+T,n[1]=m*_,n[5]=T*p+v,n[9]=y*p-E,n[2]=-p,n[6]=f*m,n[10]=h*m}else if(t.order==="YZX"){const v=h*m,y=h*p,E=f*m,T=f*p;n[0]=m*g,n[4]=T-v*_,n[8]=E*_+y,n[1]=_,n[5]=h*g,n[9]=-f*g,n[2]=-p*g,n[6]=y*_+E,n[10]=v-T*_}else if(t.order==="XZY"){const v=h*m,y=h*p,E=f*m,T=f*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+T,n[5]=h*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=f*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pM,t,mM)}lookAt(t,n,a){const o=this.elements;return $n.subVectors(t,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ts.crossVectors(a,$n),ts.lengthSq()===0&&(Math.abs(a.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ts.crossVectors(a,$n)),ts.normalize(),wu.crossVectors($n,ts),o[0]=ts.x,o[4]=wu.x,o[8]=$n.x,o[1]=ts.y,o[5]=wu.y,o[9]=$n.y,o[2]=ts.z,o[6]=wu.z,o[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,h=a[0],f=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],y=a[13],E=a[2],T=a[6],M=a[10],x=a[14],w=a[3],U=a[7],O=a[11],P=a[15],B=o[0],z=o[4],j=o[8],R=o[12],D=o[1],k=o[5],at=o[9],nt=o[13],ft=o[2],lt=o[6],F=o[10],H=o[14],$=o[3],yt=o[7],vt=o[11],N=o[15];return u[0]=h*B+f*D+m*ft+p*$,u[4]=h*z+f*k+m*lt+p*yt,u[8]=h*j+f*at+m*F+p*vt,u[12]=h*R+f*nt+m*H+p*N,u[1]=g*B+_*D+v*ft+y*$,u[5]=g*z+_*k+v*lt+y*yt,u[9]=g*j+_*at+v*F+y*vt,u[13]=g*R+_*nt+v*H+y*N,u[2]=E*B+T*D+M*ft+x*$,u[6]=E*z+T*k+M*lt+x*yt,u[10]=E*j+T*at+M*F+x*vt,u[14]=E*R+T*nt+M*H+x*N,u[3]=w*B+U*D+O*ft+P*$,u[7]=w*z+U*k+O*lt+P*yt,u[11]=w*j+U*at+O*F+P*vt,u[15]=w*R+U*nt+O*H+P*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],u=t[12],h=t[1],f=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],T=t[7],M=t[11],x=t[15],w=m*y-p*v,U=f*y-p*_,O=f*v-m*_,P=h*y-p*g,B=h*v-m*g,z=h*_-f*g;return n*(T*w-M*U+x*O)-a*(E*w-M*P+x*B)+o*(E*U-T*P+x*z)-u*(E*O-T*B+M*z)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],T=t[13],M=t[14],x=t[15],w=_*M*p-T*v*p+T*m*y-f*M*y-_*m*x+f*v*x,U=E*v*p-g*M*p-E*m*y+h*M*y+g*m*x-h*v*x,O=g*T*p-E*_*p+E*f*y-h*T*y-g*f*x+h*_*x,P=E*_*m-g*T*m-E*f*v+h*T*v+g*f*M-h*_*M,B=n*w+a*U+o*O+u*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=w*z,t[1]=(T*v*u-_*M*u-T*o*y+a*M*y+_*o*x-a*v*x)*z,t[2]=(f*M*u-T*m*u+T*o*p-a*M*p-f*o*x+a*m*x)*z,t[3]=(_*m*u-f*v*u-_*o*p+a*v*p+f*o*y-a*m*y)*z,t[4]=U*z,t[5]=(g*M*u-E*v*u+E*o*y-n*M*y-g*o*x+n*v*x)*z,t[6]=(E*m*u-h*M*u-E*o*p+n*M*p+h*o*x-n*m*x)*z,t[7]=(h*v*u-g*m*u+g*o*p-n*v*p-h*o*y+n*m*y)*z,t[8]=O*z,t[9]=(E*_*u-g*T*u-E*a*y+n*T*y+g*a*x-n*_*x)*z,t[10]=(h*T*u-E*f*u+E*a*p-n*T*p-h*a*x+n*f*x)*z,t[11]=(g*f*u-h*_*u-g*a*p+n*_*p+h*a*y-n*f*y)*z,t[12]=P*z,t[13]=(g*T*o-E*_*o+E*a*v-n*T*v-g*a*M+n*_*M)*z,t[14]=(E*f*o-h*T*o-E*a*m+n*T*m+h*a*M-n*f*M)*z,t[15]=(h*_*o-g*f*o+g*a*m-n*_*m-h*a*v+n*f*v)*z,this}scale(t){const n=this.elements,a=t.x,o=t.y,u=t.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,h=t.x,f=t.y,m=t.z,p=u*h,g=u*f;return this.set(p*h+a,p*f-o*m,p*m+o*f,0,p*f+o*m,g*f+a,g*m-o*h,0,p*m-o*f,g*m+o*h,u*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,u,h){return this.set(1,a,u,0,t,1,h,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,u=n._x,h=n._y,f=n._z,m=n._w,p=u+u,g=h+h,_=f+f,v=u*p,y=u*g,E=u*_,T=h*g,M=h*_,x=f*_,w=m*p,U=m*g,O=m*_,P=a.x,B=a.y,z=a.z;return o[0]=(1-(T+x))*P,o[1]=(y+O)*P,o[2]=(E-U)*P,o[3]=0,o[4]=(y-O)*B,o[5]=(1-(v+x))*B,o[6]=(M+w)*B,o[7]=0,o[8]=(E+U)*z,o[9]=(M-w)*z,o[10]=(1-(v+T))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let u=Ar.set(o[0],o[1],o[2]).length();const h=Ar.set(o[4],o[5],o[6]).length(),f=Ar.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),Mi.copy(this);const p=1/u,g=1/h,_=1/f;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=_,Mi.elements[9]*=_,Mi.elements[10]*=_,n.setFromRotationMatrix(Mi),a.x=u,a.y=h,a.z=f,this}makePerspective(t,n,a,o,u,h,f=Fi,m=!1){const p=this.elements,g=2*u/(n-t),_=2*u/(a-o),v=(n+t)/(n-t),y=(a+o)/(a-o);let E,T;if(m)E=u/(h-u),T=h*u/(h-u);else if(f===Fi)E=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(f===ic)E=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,u,h,f=Fi,m=!1){const p=this.elements,g=2/(n-t),_=2/(a-o),v=-(n+t)/(n-t),y=-(a+o)/(a-o);let E,T;if(m)E=1/(h-u),T=h/(h-u);else if(f===Fi)E=-2/(h-u),T=-(h+u)/(h-u);else if(f===ic)E=-1/(h-u),T=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};const Ar=new rt,Mi=new fn,pM=new rt(0,0,0),mM=new rt(1,1,1),ts=new rt,wu=new rt,$n=new rt,S_=new fn,M_=new ol;let qr=class Vv{constructor(t=0,n=0,a=0,o=Vv.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,u=o[0],h=o[4],f=o[8],m=o[1],p=o[5],g=o[9],_=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return S_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(S_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return M_.setFromEuler(this),this.setFromQuaternion(M_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qr.DEFAULT_ORDER="XYZ";let Gv=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gM=0;const E_=new rt,Cr=new ol,ha=new fn,Du=new rt,Yo=new rt,_M=new rt,vM=new ol,b_=new rt(1,0,0),T_=new rt(0,1,0),A_=new rt(0,0,1),C_={type:"added"},xM={type:"removed"},Rr={type:"childadded",child:null},Nf={type:"childremoved",child:null};let Ci=class tc extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tc.DEFAULT_UP.clone();const t=new rt,n=new qr,a=new ol,o=new rt(1,1,1);function u(){a.setFromEuler(n,!1)}function h(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new ce}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=tc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Cr.setFromAxisAngle(t,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,n){return Cr.setFromAxisAngle(t,n),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(b_,t)}rotateY(t){return this.rotateOnAxis(T_,t)}rotateZ(t){return this.rotateOnAxis(A_,t)}translateOnAxis(t,n){return E_.copy(t).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(b_,t)}translateY(t){return this.translateOnAxis(T_,t)}translateZ(t){return this.translateOnAxis(A_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Du.copy(t):Du.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Yo,Du,this.up):ha.lookAt(Du,Yo,this.up),this.quaternion.setFromRotationMatrix(ha),o&&(ha.extractRotation(o.matrixWorld),Cr.setFromRotationMatrix(ha),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(C_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(xM),Nf.child=t,this.dispatchEvent(Nf),Nf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(C_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const h=this.children[a].getObjectByProperty(t,n);if(h!==void 0)return h}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let u=0,h=o.length;u<h;u++)o[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,_M),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,vM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,h=o.length;u<h;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(u(t.materials,this.material[m]));o.material=f}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(u(t.animations,m))}}if(n){const f=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),v=h(t.skeletons),y=h(t.animations),E=h(t.nodes);f.length>0&&(a.geometries=f),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function h(f){const m=[];for(const p in f){const g=f[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}};Ci.DEFAULT_UP=new rt(0,1,0);Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new rt,fa=new rt,Of=new rt,da=new rt,wr=new rt,Dr=new rt,R_=new rt,zf=new rt,Pf=new rt,Ff=new rt,Bf=new tn,If=new tn,Hf=new tn;class Ti{constructor(t=new rt,n=new rt,a=new rt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ei.subVectors(t,n),o.cross(Ei);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,a,o,u){Ei.subVectors(o,n),fa.subVectors(a,n),Of.subVectors(t,n);const h=Ei.dot(Ei),f=Ei.dot(fa),m=Ei.dot(Of),p=fa.dot(fa),g=fa.dot(Of),_=h*p-f*f;if(_===0)return u.set(0,0,0),null;const v=1/_,y=(p*m-f*g)*v,E=(h*g-f*m)*v;return u.set(1-y-E,E,y)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,n,a,o,u,h,f,m){return this.getBarycoord(t,n,a,o,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,da.x),m.addScaledVector(h,da.y),m.addScaledVector(f,da.z),m)}static getInterpolatedAttribute(t,n,a,o,u,h){return Bf.setScalar(0),If.setScalar(0),Hf.setScalar(0),Bf.fromBufferAttribute(t,n),If.fromBufferAttribute(t,a),Hf.fromBufferAttribute(t,o),h.setScalar(0),h.addScaledVector(Bf,u.x),h.addScaledVector(If,u.y),h.addScaledVector(Hf,u.z),h}static isFrontFacing(t,n,a,o){return Ei.subVectors(a,n),fa.subVectors(t,n),Ei.cross(fa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ei.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ti.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,u){return Ti.getInterpolation(t,this.a,this.b,this.c,n,a,o,u)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,u=this.c;let h,f;wr.subVectors(o,a),Dr.subVectors(u,a),zf.subVectors(t,a);const m=wr.dot(zf),p=Dr.dot(zf);if(m<=0&&p<=0)return n.copy(a);Pf.subVectors(t,o);const g=wr.dot(Pf),_=Dr.dot(Pf);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),n.copy(a).addScaledVector(wr,h);Ff.subVectors(t,u);const y=wr.dot(Ff),E=Dr.dot(Ff);if(E>=0&&y<=E)return n.copy(u);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return f=p/(p-E),n.copy(a).addScaledVector(Dr,f);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return R_.subVectors(u,o),f=(_-g)/(_-g+(y-E)),n.copy(o).addScaledVector(R_,f);const x=1/(M+T+v);return h=T*x,f=v*x,n.copy(a).addScaledVector(wr,h).addScaledVector(Dr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function Vf(l,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?l+(t-l)*6*n:n<1/2?t:n<2/3?l+(t-l)*6*(2/3-n):l}class Ue{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Ee.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ee.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Ee.workingColorSpace){if(t=sM(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,h=2*a-u;this.r=Vf(h,u,t+1/3),this.g=Vf(h,u,t),this.b=Vf(h,u,t-1/3)}return Ee.colorSpaceToWorking(this,o),this}setStyle(t,n=di){function a(u){u!==void 0&&parseFloat(u)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=o[1],f=o[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:ae("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(h===6)return this.setHex(parseInt(u,16),n);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=di){const a=kv[t.toLowerCase()];return a!==void 0?this.setHex(a,n):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Ee.workingToColorSpace(Ln.copy(this),t),Math.round(ye(Ln.r*255,0,255))*65536+Math.round(ye(Ln.g*255,0,255))*256+Math.round(ye(Ln.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ee.workingColorSpace){Ee.workingToColorSpace(Ln.copy(this),n);const a=Ln.r,o=Ln.g,u=Ln.b,h=Math.max(a,o,u),f=Math.min(a,o,u);let m,p;const g=(f+h)/2;if(f===h)m=0,p=0;else{const _=h-f;switch(p=g<=.5?_/(h+f):_/(2-h-f),h){case a:m=(o-u)/_+(o<u?6:0);break;case o:m=(u-a)/_+2;break;case u:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Ee.workingColorSpace){return Ee.workingToColorSpace(Ln.copy(this),n),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=di){Ee.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,a=Ln.g,o=Ln.b;return t!==di?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(es),this.setHSL(es.h+t,es.s+n,es.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(es),t.getHSL(Uu);const a=Ef(es.h,Uu.h,n),o=Ef(es.s,Uu.s,n),u=Ef(es.l,Uu.l,n);return this.setHSL(a,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*o,this.g=u[1]*n+u[4]*a+u[7]*o,this.b=u[2]*n+u[5]*a+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ue;Ue.NAMES=kv;let yM=0;class ul extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Br,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=ud,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){ae(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ae(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(a.blending=this.blending),this.side!==os&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ld&&(a.blendSrc=this.blendSrc),this.blendDst!==ud&&(a.blendDst=this.blendDst),this.blendEquation!==Ns&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(u){const h=[];for(const f in u){const m=u[f];delete m.metadata,h.push(m)}return h}if(n){const u=o(t.textures),h=o(t.images);u.length>0&&(a.textures=u),h.length>0&&(a.images=h)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Xv extends ul{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new rt,Lu=new Ie;let SM=0;class Hi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=p_,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Lu.fromBufferAttribute(this,n),Lu.applyMatrix3(t),this.setXY(n,Lu.x,Lu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Xo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Xo(n,this.array)),n}setX(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Xo(n,this.array)),n}setY(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Xo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Xo(n,this.array)),n}setW(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,u){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array),u=kn(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==p_&&(t.usage=this.usage),t}}class Wv extends Hi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class qv extends Hi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ya extends Hi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let MM=0;const fi=new fn,Gf=new Ci,Ur=new rt,Jn=new ll,Zo=new ll,_n=new rt;class ba extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pv(t)?qv:Wv)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ce().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,n,a){return fi.makeTranslation(t,n,a),this.applyMatrix4(fi),this}scale(t,n,a){return fi.makeScale(t,n,a),this.applyMatrix4(fi),this}lookAt(t){return Gf.lookAt(t),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,u=t.length;o<u;o++){const h=t[o];a.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ya(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const u=t[o];n.setXYZ(o,u.x,u.y,u.z||0)}t.length>n.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const u=n[a];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const a=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),n)for(let u=0,h=n.length;u<h;u++){const f=n[u];Zo.setFromBufferAttribute(f),this.morphTargetsRelative?(_n.addVectors(Jn.min,Zo.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,Zo.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(Zo.min),Jn.expandByPoint(Zo.max))}Jn.getCenter(a);let o=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),o=Math.max(o,a.distanceToSquared(_n));if(n)for(let u=0,h=n.length;u<h;u++){const f=n[u],m=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)_n.fromBufferAttribute(f,p),m&&(Ur.fromBufferAttribute(t,p),_n.add(Ur)),o=Math.max(o,a.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*a.count),4));const h=this.getAttribute("tangent"),f=[],m=[];for(let j=0;j<a.count;j++)f[j]=new rt,m[j]=new rt;const p=new rt,g=new rt,_=new rt,v=new Ie,y=new Ie,E=new Ie,T=new rt,M=new rt;function x(j,R,D){p.fromBufferAttribute(a,j),g.fromBufferAttribute(a,R),_.fromBufferAttribute(a,D),v.fromBufferAttribute(u,j),y.fromBufferAttribute(u,R),E.fromBufferAttribute(u,D),g.sub(p),_.sub(p),y.sub(v),E.sub(v);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(k),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(k),f[j].add(T),f[R].add(T),f[D].add(T),m[j].add(M),m[R].add(M),m[D].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let j=0,R=w.length;j<R;++j){const D=w[j],k=D.start,at=D.count;for(let nt=k,ft=k+at;nt<ft;nt+=3)x(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const U=new rt,O=new rt,P=new rt,B=new rt;function z(j){P.fromBufferAttribute(o,j),B.copy(P);const R=f[j];U.copy(R),U.sub(P.multiplyScalar(P.dot(R))).normalize(),O.crossVectors(B,R);const k=O.dot(m[j])<0?-1:1;h.setXYZW(j,U.x,U.y,U.z,k)}for(let j=0,R=w.length;j<R;++j){const D=w[j],k=D.start,at=D.count;for(let nt=k,ft=k+at;nt<ft;nt+=3)z(t.getX(nt+0)),z(t.getX(nt+1)),z(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const o=new rt,u=new rt,h=new rt,f=new rt,m=new rt,p=new rt,g=new rt,_=new rt;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),g.subVectors(h,u),_.subVectors(o,u),g.cross(_),f.fromBufferAttribute(a,E),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),f.add(g),m.add(g),p.add(g),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)o.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),h.fromBufferAttribute(n,v+2),g.subVectors(h,u),_.subVectors(o,u),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)_n.fromBufferAttribute(t,n),_n.normalize(),t.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function t(f,m){const p=f.array,g=f.itemSize,_=f.normalized,v=new p.constructor(m.length*g);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){f.isInterleavedBufferAttribute?y=m[T]*f.data.stride+f.offset:y=m[T]*g;for(let x=0;x<g;x++)v[E++]=p[y++]}return new Hi(v,g,_)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ba,a=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=t(m,a);n.setAttribute(f,p)}const u=this.morphAttributes;for(const f in u){const m=[],p=u[f];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=t(v,a);m.push(y)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let f=0,m=h.length;f<m;f++){const p=h[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(o[m]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const u=t.morphAttributes;for(const p in u){const g=[],_=u[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const w_=new fn,Rs=new dM,Nu=new gp,D_=new rt,Ou=new rt,zu=new rt,Pu=new rt,kf=new rt,Fu=new rt,U_=new rt,Bu=new rt;class ki extends Ci{constructor(t=new ba,n=new Xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=o.length;u<h;u++){const f=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,u=a.morphAttributes.position,h=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(u&&f){Fu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=f[m],_=u[m];g!==0&&(kf.fromBufferAttribute(_,t),h?Fu.addScaledVector(kf,g):Fu.addScaledVector(kf.sub(n),g))}n.add(Fu)}return n}raycast(t,n){const a=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Nu.copy(a.boundingSphere),Nu.applyMatrix4(u),Rs.copy(t.ray).recast(t.near),!(Nu.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Nu,D_)===null||Rs.origin.distanceToSquared(D_)>(t.far-t.near)**2))&&(w_.copy(u).invert(),Rs.copy(t.ray).applyMatrix4(w_),!(a.boundingBox!==null&&Rs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Rs)))}_computeIntersections(t,n,a){let o;const u=this.geometry,h=this.material,f=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,v=u.groups,y=u.drawRange;if(f!==null)if(Array.isArray(h))for(let E=0,T=v.length;E<T;E++){const M=v[E],x=h[M.materialIndex],w=Math.max(M.start,y.start),U=Math.min(f.count,Math.min(M.start+M.count,y.start+y.count));for(let O=w,P=U;O<P;O+=3){const B=f.getX(O),z=f.getX(O+1),j=f.getX(O+2);o=Iu(this,x,t,a,p,g,_,B,z,j),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const w=f.getX(M),U=f.getX(M+1),O=f.getX(M+2);o=Iu(this,h,t,a,p,g,_,w,U,O),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=v.length;E<T;E++){const M=v[E],x=h[M.materialIndex],w=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let O=w,P=U;O<P;O+=3){const B=O,z=O+1,j=O+2;o=Iu(this,x,t,a,p,g,_,B,z,j),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const w=M,U=M+1,O=M+2;o=Iu(this,h,t,a,p,g,_,w,U,O),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function EM(l,t,n,a,o,u,h,f){let m;if(t.side===Xn?m=a.intersectTriangle(h,u,o,!0,f):m=a.intersectTriangle(o,u,h,t.side===os,f),m===null)return null;Bu.copy(f),Bu.applyMatrix4(l.matrixWorld);const p=n.ray.origin.distanceTo(Bu);return p<n.near||p>n.far?null:{distance:p,point:Bu.clone(),object:l}}function Iu(l,t,n,a,o,u,h,f,m,p){l.getVertexPosition(f,Ou),l.getVertexPosition(m,zu),l.getVertexPosition(p,Pu);const g=EM(l,t,n,a,Ou,zu,Pu,U_);if(g){const _=new rt;Ti.getBarycoord(U_,Ou,zu,Pu,_),o&&(g.uv=Ti.getInterpolatedAttribute(o,f,m,p,_,new Ie)),u&&(g.uv1=Ti.getInterpolatedAttribute(u,f,m,p,_,new Ie)),h&&(g.normal=Ti.getInterpolatedAttribute(h,f,m,p,_,new rt),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:m,c:p,normal:new rt,materialIndex:0};Ti.getNormal(Ou,zu,Pu,v.normal),g.face=v,g.barycoord=_}return g}class Yr extends ba{constructor(t=1,n=1,a=1,o=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:u,depthSegments:h};const f=this;o=Math.floor(o),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,t,h,u,0),E("z","y","x",1,-1,a,n,-t,h,u,1),E("x","z","y",1,1,t,a,n,o,h,2),E("x","z","y",1,-1,t,a,-n,o,h,3),E("x","y","z",1,-1,t,n,a,o,u,4),E("x","y","z",-1,-1,t,n,-a,o,u,5),this.setIndex(m),this.setAttribute("position",new ya(p,3)),this.setAttribute("normal",new ya(g,3)),this.setAttribute("uv",new ya(_,2));function E(T,M,x,w,U,O,P,B,z,j,R){const D=O/z,k=P/j,at=O/2,nt=P/2,ft=B/2,lt=z+1,F=j+1;let H=0,$=0;const yt=new rt;for(let vt=0;vt<F;vt++){const N=vt*k-nt;for(let it=0;it<lt;it++){const gt=it*D-at;yt[T]=gt*w,yt[M]=N*U,yt[x]=ft,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[M]=0,yt[x]=B>0?1:-1,g.push(yt.x,yt.y,yt.z),_.push(it/z),_.push(1-vt/j),H+=1}}for(let vt=0;vt<j;vt++)for(let N=0;N<z;N++){const it=v+N+lt*vt,gt=v+N+lt*(vt+1),Tt=v+(N+1)+lt*(vt+1),Bt=v+(N+1)+lt*vt;m.push(it,gt,Bt),m.push(gt,Tt,Bt),$+=6}f.addGroup(y,$,R),y+=$,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xr(l){const t={};for(const n in l){t[n]={};for(const a in l[n]){const o=l[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Pn(l){const t={};for(let n=0;n<l.length;n++){const a=Xr(l[n]);for(const o in a)t[o]=a[o]}return t}function bM(l){const t=[];for(let n=0;n<l.length;n++)t.push(l[n].clone());return t}function Yv(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const TM={clone:Xr,merge:Pn};var AM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends ul{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AM,this.fragmentShader=CM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=bM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?n.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?n.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?n.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?n.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?n.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?n.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?n.uniforms[o]={type:"m4",value:h.toArray()}:n.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Zv extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new rt,L_=new Ie,N_=new Ie;class pi extends Zv{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(Mf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,n){return this.getViewBounds(t,L_,N_),n.subVectors(N_,L_)}setViewOffset(t,n,a,o,u,h){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Mf*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,u=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*o/m,n-=h.offsetY*a/p,o*=h.width/m,a*=h.height/p}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lr=-90,Nr=1;class RM extends Ci{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pi(Lr,Nr,t,n);o.layers=this.layers,this.add(o);const u=new pi(Lr,Nr,t,n);u.layers=this.layers,this.add(u);const h=new pi(Lr,Nr,t,n);h.layers=this.layers,this.add(h);const f=new pi(Lr,Nr,t,n);f.layers=this.layers,this.add(f);const m=new pi(Lr,Nr,t,n);m.layers=this.layers,this.add(m);const p=new pi(Lr,Nr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,u,h,f,m]=n;for(const p of n)this.remove(p);if(t===Fi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ic)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,f,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,u),t.setRenderTarget(a,1,o),t.render(n,h),t.setRenderTarget(a,2,o),t.render(n,f),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class jv extends Ri{constructor(t=[],n=Bs,a,o,u,h,f,m,p,g){super(t,n,a,o,u,h,f,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kv extends Ii{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new jv(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Yr(5,5,5),u=new Xi({name:"CubemapFromEquirect",uniforms:Xr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Xn,blending:va});u.uniforms.tEquirect.value=n;const h=new ki(o,u),f=n.minFilter;return n.minFilter===zs&&(n.minFilter=On),new RM(1,10,this).update(t,h),n.minFilter=f,h.geometry.dispose(),h.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(n,a,o);t.setRenderTarget(u)}}class Hu extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wM={type:"move"};class Xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,u=null,h=null;const f=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wM)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Hu;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class DM extends Ri{constructor(t=null,n=1,a=1,o,u,h,f,m,p=Rn,g=Rn,_,v){super(null,h,f,m,p,g,o,u,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wf=new rt,UM=new rt,LM=new ce;class Ls{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Wf.subVectors(a,n).cross(UM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Wf),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||LM.getNormalMatrix(t),o=this.coplanarPoint(Wf).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new gp,NM=new Ie(.5,.5),Vu=new rt;class _p{constructor(t=new Ls,n=new Ls,a=new Ls,o=new Ls,u=new Ls,h=new Ls){this.planes=[t,n,a,o,u,h]}set(t,n,a,o,u,h){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(u),f[5].copy(h),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Fi,a=!1){const o=this.planes,u=t.elements,h=u[0],f=u[1],m=u[2],p=u[3],g=u[4],_=u[5],v=u[6],y=u[7],E=u[8],T=u[9],M=u[10],x=u[11],w=u[12],U=u[13],O=u[14],P=u[15];if(o[0].setComponents(p-h,y-g,x-E,P-w).normalize(),o[1].setComponents(p+h,y+g,x+E,P+w).normalize(),o[2].setComponents(p+f,y+_,x+T,P+U).normalize(),o[3].setComponents(p-f,y-_,x-T,P-U).normalize(),a)o[4].setComponents(m,v,M,O).normalize(),o[5].setComponents(p-m,y-v,x-M,P-O).normalize();else if(o[4].setComponents(p-m,y-v,x-M,P-O).normalize(),n===Fi)o[5].setComponents(p+m,y+v,x+M,P+O).normalize();else if(n===ic)o[5].setComponents(m,v,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const n=NM.distanceTo(t.center);return ws.radius=.7071067811865476+n,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Vu.x=o.normal.x>0?t.max.x:t.min.x,Vu.y=o.normal.y>0?t.max.y:t.min.y,Vu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Vu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends Ri{constructor(t,n,a=Gi,o,u,h,f=Rn,m=Rn,p,g=Ea,_=1){if(g!==Ea&&g!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,u,h,f,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class OM extends al{constructor(t,n=Gi,a=Bs,o,u,h=Rn,f=Rn,m,p=Ea){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,o,u,h,f,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qv extends Ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oc extends ba{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const u=t/2,h=n/2,f=Math.floor(a),m=Math.floor(o),p=f+1,g=m+1,_=t/f,v=n/m,y=[],E=[],T=[],M=[];for(let x=0;x<g;x++){const w=x*v-h;for(let U=0;U<p;U++){const O=U*_-u;E.push(O,-w,0),T.push(0,0,1),M.push(U/f),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let w=0;w<f;w++){const U=w+p*x,O=w+p*(x+1),P=w+1+p*(x+1),B=w+1+p*x;y.push(U,O,B),y.push(O,P,B)}this.setIndex(y),this.setAttribute("position",new ya(E,3)),this.setAttribute("normal",new ya(T,3)),this.setAttribute("uv",new ya(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.width,t.height,t.widthSegments,t.heightSegments)}}class zM extends Xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class PM extends ul{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zv,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class FM extends ul{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class BM extends ul{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $v extends Ci{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const qf=new fn,O_=new rt,z_=new rt;class IM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;O_.setFromMatrixPosition(t.matrixWorld),n.position.copy(O_),z_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(z_),n.updateMatrixWorld(),qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(qf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vp extends Zv{constructor(t=-1,n=1,a=1,o=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-t,h=a+t,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,f-=g*this.view.offsetY,m=f-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class HM extends IM{constructor(){super(new vp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class VM extends $v{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ci.DEFAULT_UP),this.updateMatrix(),this.target=new Ci,this.shadow=new HM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class GM extends $v{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class kM extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function P_(l,t,n,a){const o=XM(a);switch(n){case Lv:return l*t;case Ov:return l*t/o.components*o.byteLength;case cp:return l*t/o.components*o.byteLength;case Gr:return l*t*2/o.components*o.byteLength;case hp:return l*t*2/o.components*o.byteLength;case Nv:return l*t*3/o.components*o.byteLength;case Ai:return l*t*4/o.components*o.byteLength;case fp:return l*t*4/o.components*o.byteLength;case ju:case Ku:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Qu:case $u:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Md:case bd:return Math.max(l,16)*Math.max(t,8)/4;case Sd:case Ed:return Math.max(l,8)*Math.max(t,8)/2;case Td:case Ad:case Rd:case wd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Cd:case Dd:case Ud:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case Od:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case zd:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case Id:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case kd:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case qd:case Yd:case Zd:return Math.ceil(l/4)*Math.ceil(t/4)*16;case jd:case Kd:return Math.ceil(l/4)*Math.ceil(t/4)*8;case Qd:case $d:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function XM(l){switch(l){case ei:case Rv:return{byteLength:1,components:1};case el:case wv:case Ma:return{byteLength:2,components:1};case lp:case up:return{byteLength:2,components:4};case Gi:case op:case Pi:return{byteLength:4,components:1};case Dv:case Uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);function Jv(){let l=null,t=!1,n=null,a=null;function o(u,h){n(u,h),a=l.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=l.requestAnimationFrame(o),t=!0)},stop:function(){l.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){l=u}}}function WM(l){const t=new WeakMap;function n(f,m){const p=f.array,g=f.usage,_=p.byteLength,v=l.createBuffer();l.bindBuffer(m,v),l.bufferData(m,p,g),f.onUploadCallback();let y;if(p instanceof Float32Array)y=l.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=l.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=l.HALF_FLOAT:y=l.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=l.SHORT;else if(p instanceof Uint32Array)y=l.UNSIGNED_INT;else if(p instanceof Int32Array)y=l.INT;else if(p instanceof Int8Array)y=l.BYTE;else if(p instanceof Uint8Array)y=l.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,m,p){const g=m.array,_=m.updateRanges;if(l.bindBuffer(p,f),_.length===0)l.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];l.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=t.get(f);m&&(l.deleteBuffer(m.buffer),t.delete(f))}function h(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,m),p.version=f.version}}return{get:o,remove:u,update:h}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YM=`#ifdef USE_ALPHAHASH
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
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
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
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tE=`#ifdef USE_BATCHING
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
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sE=`#ifdef USE_IRIDESCENCE
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
#endif`,rE=`#ifdef USE_BUMPMAP
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mE=`#define PI 3.141592653589793
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
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_E=`vec3 transformedNormal = objectNormal;
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
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ME="gl_FragColor = linearToOutputTexel( gl_FragColor );",EE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NE=`#ifdef USE_GRADIENTMAP
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
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
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
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kE=`PhysicalMaterial material;
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
#endif`,XE=`uniform sampler2D dfgLUT;
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
}`,WE=`
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
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
#endif`,YE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eb=`#if defined( USE_POINTS_UV )
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
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
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
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Db=`float getShadowMask() {
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
}`,Ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ob=`#ifdef USE_SKINNING
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
#endif`,zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Hb=`#ifdef USE_TRANSMISSION
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`#include <common>
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
}`,$b=`#if DEPTH_PACKING == 3200
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
}`,Jb=`#define DISTANCE
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
}`,t1=`#define DISTANCE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`uniform float scale;
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
}`,a1=`uniform vec3 diffuse;
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
}`,s1=`#include <common>
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
}`,r1=`uniform vec3 diffuse;
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
}`,o1=`#define LAMBERT
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
}`,l1=`#define LAMBERT
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
}`,u1=`#define MATCAP
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
}`,c1=`#define MATCAP
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
}`,h1=`#define NORMAL
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
}`,f1=`#define NORMAL
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
}`,d1=`#define PHONG
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
}`,p1=`#define PHONG
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
}`,m1=`#define STANDARD
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
}`,g1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,v1=`#define TOON
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
}`,x1=`uniform float size;
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
}`,y1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,M1=`uniform vec3 color;
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
}`,E1=`uniform float rotation;
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
}`,b1=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:qM,alphahash_pars_fragment:YM,alphamap_fragment:ZM,alphamap_pars_fragment:jM,alphatest_fragment:KM,alphatest_pars_fragment:QM,aomap_fragment:$M,aomap_pars_fragment:JM,batching_pars_vertex:tE,batching_vertex:eE,begin_vertex:nE,beginnormal_vertex:iE,bsdfs:aE,iridescence_fragment:sE,bumpmap_pars_fragment:rE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:lE,clipping_planes_pars_vertex:uE,clipping_planes_vertex:cE,color_fragment:hE,color_pars_fragment:fE,color_pars_vertex:dE,color_vertex:pE,common:mE,cube_uv_reflection_fragment:gE,defaultnormal_vertex:_E,displacementmap_pars_vertex:vE,displacementmap_vertex:xE,emissivemap_fragment:yE,emissivemap_pars_fragment:SE,colorspace_fragment:ME,colorspace_pars_fragment:EE,envmap_fragment:bE,envmap_common_pars_fragment:TE,envmap_pars_fragment:AE,envmap_pars_vertex:CE,envmap_physical_pars_fragment:BE,envmap_vertex:RE,fog_vertex:wE,fog_pars_vertex:DE,fog_fragment:UE,fog_pars_fragment:LE,gradientmap_pars_fragment:NE,lightmap_pars_fragment:OE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:PE,lights_pars_begin:FE,lights_toon_fragment:IE,lights_toon_pars_fragment:HE,lights_phong_fragment:VE,lights_phong_pars_fragment:GE,lights_physical_fragment:kE,lights_physical_pars_fragment:XE,lights_fragment_begin:WE,lights_fragment_maps:qE,lights_fragment_end:YE,logdepthbuf_fragment:ZE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:KE,logdepthbuf_vertex:QE,map_fragment:$E,map_pars_fragment:JE,map_particle_fragment:tb,map_particle_pars_fragment:eb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:ab,morphcolor_vertex:sb,morphnormal_vertex:rb,morphtarget_pars_vertex:ob,morphtarget_vertex:lb,normal_fragment_begin:ub,normal_fragment_maps:cb,normal_pars_fragment:hb,normal_pars_vertex:fb,normal_vertex:db,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:_b,iridescence_pars_fragment:vb,opaque_fragment:xb,packing:yb,premultiplied_alpha_fragment:Sb,project_vertex:Mb,dithering_fragment:Eb,dithering_pars_fragment:bb,roughnessmap_fragment:Tb,roughnessmap_pars_fragment:Ab,shadowmap_pars_fragment:Cb,shadowmap_pars_vertex:Rb,shadowmap_vertex:wb,shadowmask_pars_fragment:Db,skinbase_vertex:Ub,skinning_pars_vertex:Lb,skinning_vertex:Nb,skinnormal_vertex:Ob,specularmap_fragment:zb,specularmap_pars_fragment:Pb,tonemapping_fragment:Fb,tonemapping_pars_fragment:Bb,transmission_fragment:Ib,transmission_pars_fragment:Hb,uv_pars_fragment:Vb,uv_pars_vertex:Gb,uv_vertex:kb,worldpos_vertex:Xb,background_vert:Wb,background_frag:qb,backgroundCube_vert:Yb,backgroundCube_frag:Zb,cube_vert:jb,cube_frag:Kb,depth_vert:Qb,depth_frag:$b,distance_vert:Jb,distance_frag:t1,equirect_vert:e1,equirect_frag:n1,linedashed_vert:i1,linedashed_frag:a1,meshbasic_vert:s1,meshbasic_frag:r1,meshlambert_vert:o1,meshlambert_frag:l1,meshmatcap_vert:u1,meshmatcap_frag:c1,meshnormal_vert:h1,meshnormal_frag:f1,meshphong_vert:d1,meshphong_frag:p1,meshphysical_vert:m1,meshphysical_frag:g1,meshtoon_vert:_1,meshtoon_frag:v1,points_vert:x1,points_frag:y1,shadow_vert:S1,shadow_frag:M1,sprite_vert:E1,sprite_frag:b1},Nt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},zi={basic:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Pn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Pn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Pn([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Pn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Pn([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Pn([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Pn([Nt.common,Nt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Pn([Nt.lights,Nt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};zi.physical={uniforms:Pn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Gu={r:0,b:0,g:0},Ds=new qr,T1=new fn;function A1(l,t,n,a,o,u,h){const f=new Ue(0);let m=u===!0?0:1,p,g,_=null,v=0,y=null;function E(U){let O=U.isScene===!0?U.background:null;return O&&O.isTexture&&(O=(U.backgroundBlurriness>0?n:t).get(O)),O}function T(U){let O=!1;const P=E(U);P===null?x(f,m):P&&P.isColor&&(x(P,1),O=!0);const B=l.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,h),(l.autoClear||O)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function M(U,O){const P=E(O);P&&(P.isCubeTexture||P.mapping===rc)?(g===void 0&&(g=new ki(new Yr(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Xr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ds.copy(O.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(T1.makeRotationFromEuler(Ds)),g.material.toneMapped=Ee.getTransfer(P.colorSpace)!==Be,(_!==P||v!==P.version||y!==l.toneMapping)&&(g.material.needsUpdate=!0,_=P,v=P.version,y=l.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new ki(new oc(2,2),new Xi({name:"BackgroundMaterial",uniforms:Xr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(P.colorSpace)!==Be,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||y!==l.toneMapping)&&(p.material.needsUpdate=!0,_=P,v=P.version,y=l.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,O){U.getRGB(Gu,Yv(l)),a.buffers.color.setClear(Gu.r,Gu.g,Gu.b,O,h)}function w(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,O=1){f.set(U),m=O,x(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(f,m)},render:T,addToRenderList:M,dispose:w}}function C1(l,t){const n=l.getParameter(l.MAX_VERTEX_ATTRIBS),a={},o=v(null);let u=o,h=!1;function f(D,k,at,nt,ft){let lt=!1;const F=_(nt,at,k);u!==F&&(u=F,p(u.object)),lt=y(D,nt,at,ft),lt&&E(D,nt,at,ft),ft!==null&&t.update(ft,l.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,O(D,k,at,nt),ft!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return l.createVertexArray()}function p(D){return l.bindVertexArray(D)}function g(D){return l.deleteVertexArray(D)}function _(D,k,at){const nt=at.wireframe===!0;let ft=a[D.id];ft===void 0&&(ft={},a[D.id]=ft);let lt=ft[k.id];lt===void 0&&(lt={},ft[k.id]=lt);let F=lt[nt];return F===void 0&&(F=v(m()),lt[nt]=F),F}function v(D){const k=[],at=[],nt=[];for(let ft=0;ft<n;ft++)k[ft]=0,at[ft]=0,nt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:at,attributeDivisors:nt,object:D,attributes:{},index:null}}function y(D,k,at,nt){const ft=u.attributes,lt=k.attributes;let F=0;const H=at.getAttributes();for(const $ in H)if(H[$].location>=0){const vt=ft[$];let N=lt[$];if(N===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),vt===void 0||vt.attribute!==N||N&&vt.data!==N.data)return!0;F++}return u.attributesNum!==F||u.index!==nt}function E(D,k,at,nt){const ft={},lt=k.attributes;let F=0;const H=at.getAttributes();for(const $ in H)if(H[$].location>=0){let vt=lt[$];vt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor));const N={};N.attribute=vt,vt&&vt.data&&(N.data=vt.data),ft[$]=N,F++}u.attributes=ft,u.attributesNum=F,u.index=nt}function T(){const D=u.newAttributes;for(let k=0,at=D.length;k<at;k++)D[k]=0}function M(D){x(D,0)}function x(D,k){const at=u.newAttributes,nt=u.enabledAttributes,ft=u.attributeDivisors;at[D]=1,nt[D]===0&&(l.enableVertexAttribArray(D),nt[D]=1),ft[D]!==k&&(l.vertexAttribDivisor(D,k),ft[D]=k)}function w(){const D=u.newAttributes,k=u.enabledAttributes;for(let at=0,nt=k.length;at<nt;at++)k[at]!==D[at]&&(l.disableVertexAttribArray(at),k[at]=0)}function U(D,k,at,nt,ft,lt,F){F===!0?l.vertexAttribIPointer(D,k,at,ft,lt):l.vertexAttribPointer(D,k,at,nt,ft,lt)}function O(D,k,at,nt){T();const ft=nt.attributes,lt=at.getAttributes(),F=k.defaultAttributeValues;for(const H in lt){const $=lt[H];if($.location>=0){let yt=ft[H];if(yt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const vt=yt.normalized,N=yt.itemSize,it=t.get(yt);if(it===void 0)continue;const gt=it.buffer,Tt=it.type,Bt=it.bytesPerElement,et=Tt===l.INT||Tt===l.UNSIGNED_INT||yt.gpuType===op;if(yt.isInterleavedBufferAttribute){const ct=yt.data,wt=ct.stride,Gt=yt.offset;if(ct.isInstancedInterleavedBuffer){for(let It=0;It<$.locationSize;It++)x($.location+It,ct.meshPerAttribute);D.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let It=0;It<$.locationSize;It++)M($.location+It);l.bindBuffer(l.ARRAY_BUFFER,gt);for(let It=0;It<$.locationSize;It++)U($.location+It,N/$.locationSize,Tt,vt,wt*Bt,(Gt+N/$.locationSize*It)*Bt,et)}else{if(yt.isInstancedBufferAttribute){for(let ct=0;ct<$.locationSize;ct++)x($.location+ct,yt.meshPerAttribute);D.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ct=0;ct<$.locationSize;ct++)M($.location+ct);l.bindBuffer(l.ARRAY_BUFFER,gt);for(let ct=0;ct<$.locationSize;ct++)U($.location+ct,N/$.locationSize,Tt,vt,N*Bt,N/$.locationSize*ct*Bt,et)}}else if(F!==void 0){const vt=F[H];if(vt!==void 0)switch(vt.length){case 2:l.vertexAttrib2fv($.location,vt);break;case 3:l.vertexAttrib3fv($.location,vt);break;case 4:l.vertexAttrib4fv($.location,vt);break;default:l.vertexAttrib1fv($.location,vt)}}}}w()}function P(){j();for(const D in a){const k=a[D];for(const at in k){const nt=k[at];for(const ft in nt)g(nt[ft].object),delete nt[ft];delete k[at]}delete a[D]}}function B(D){if(a[D.id]===void 0)return;const k=a[D.id];for(const at in k){const nt=k[at];for(const ft in nt)g(nt[ft].object),delete nt[ft];delete k[at]}delete a[D.id]}function z(D){for(const k in a){const at=a[k];if(at[D.id]===void 0)continue;const nt=at[D.id];for(const ft in nt)g(nt[ft].object),delete nt[ft];delete at[D.id]}}function j(){R(),h=!0,u!==o&&(u=o,p(u.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:j,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:w}}function R1(l,t,n){let a;function o(p){a=p}function u(p,g){l.drawArrays(a,p,g),n.update(g,a,1)}function h(p,g,_){_!==0&&(l.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function f(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,a,1)}function m(p,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];n.update(E,a,1)}}this.setMode=o,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function w1(l,t,n,a){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=l.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function h(z){return!(z!==Ai&&a.convert(z)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const j=z===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ei&&a.convert(z)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Pi&&!j)}function m(z){if(z==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(ae("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),E=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=l.getParameter(l.MAX_TEXTURE_SIZE),M=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),x=l.getParameter(l.MAX_VERTEX_ATTRIBS),w=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),U=l.getParameter(l.MAX_VARYING_VECTORS),O=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),P=l.getParameter(l.MAX_SAMPLES),B=l.getParameter(l.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:O,maxSamples:P,samples:B}}function D1(l){const t=this;let n=null,a=0,o=!1,u=!1;const h=new Ls,f=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||a!==0||o;return o=v,a=_.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,x=l.get(_);if(!o||E===null||E.length===0||u&&!M)u?g(null):p();else{const w=u?0:a,U=w*4;let O=x.clippingState||null;m.value=O,O=g(E,v,U,y);for(let P=0;P!==U;++P)O[P]=n[P];x.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,y,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const x=y+T*4,w=v.matrixWorldInverse;f.getNormalMatrix(w),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,O=y;U!==T;++U,O+=4)h.copy(_[U]).applyMatrix4(w,f),h.normal.toArray(M,O),M[O+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function U1(l){let t=new WeakMap;function n(h,f){return f===_d?h.mapping=Bs:f===vd&&(h.mapping=Vr),h}function a(h){if(h&&h.isTexture){const f=h.mapping;if(f===_d||f===vd)if(t.has(h)){const m=t.get(h).texture;return n(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Kv(m.height);return p.fromEquirectangularTexture(l,h),t.set(h,p),h.addEventListener("dispose",o),n(p.texture,h.mapping)}else return null}}return h}function o(h){const f=h.target;f.removeEventListener("dispose",o);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const ss=4,F_=[.125,.215,.35,.446,.526,.582],Os=20,L1=256,jo=new vp,B_=new Ue;let Yf=null,Zf=0,jf=0,Kf=!1;const N1=new rt;class I_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,u={}){const{size:h=256,position:f=N1}=u;Yf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),jf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yf,Zf,jf),this._renderer.xr.enabled=Kf,t.scissorTest=!1,Or(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Bs||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),jf=this._renderer.getActiveMipmapLevel(),Kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ma,format:Ai,colorSpace:kr,depthBuffer:!1},o=H_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(t,n,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=O1(u)),this._blurMaterial=P1(u,t,n),this._ggxMaterial=z1(u,t,n)}return o}_compileMaterial(t){const n=new ki(new ba,t);this._renderer.compile(n,jo)}_sceneToCubeUV(t,n,a,o,u){const m=new pi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(B_),_.toneMapping=Bi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ki(new Yr,new Xv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,x=!0):(M.color.copy(B_),x=!0);for(let U=0;U<6;U++){const O=U%3;O===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[U],u.y,u.z)):O===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[U]));const P=this._cubeSize;Or(o,O*P,U>2?P:0,P,P),_.setRenderTarget(o),x&&_.render(T,m),_.render(t,m)}_.toneMapping=y,_.autoClear=v,t.background=w}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Bs||t.mapping===Vr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V_());const u=o?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const f=u.uniforms;f.envMap.value=t;const m=this._cubeSize;Or(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(h,jo)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(t,u-1,u);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,f=this._lodMeshes[a];f.material=h;const m=h.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,y=_*v,{_lodMax:E}=this,T=this._sizeLods[a],M=3*T*(a>E-ss?a-E+ss:0),x=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-n,Or(u,M,x,3*T,2*T),o.setRenderTarget(u),o.render(f,jo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-a,Or(t,M,x,3*T,2*T),o.setRenderTarget(t),o.render(f,jo)}_blur(t,n,a,o,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,n,a,o,"latitudinal",u),this._halfBlur(h,t,a,a,o,"longitudinal",u)}_halfBlur(t,n,a,o,u,h,f){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const v=p.uniforms,y=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Os-1),T=u/E,M=isFinite(u)?1+Math.floor(g*T):Os;M>Os&&ae(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const x=[];let w=0;for(let z=0;z<Os;++z){const j=z/T,R=Math.exp(-j*j/2);x.push(R),z===0?w+=R:z<M&&(w+=2*R)}for(let z=0;z<x.length;z++)x[z]=x[z]/w;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=h==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-a;const O=this._sizeLods[o],P=3*O*(o>U-ss?o-U+ss:0),B=4*(this._cubeSize-O);Or(n,P,B,3*O,2*O),m.setRenderTarget(n),m.render(_,jo)}}function O1(l){const t=[],n=[],a=[];let o=l;const u=l-ss+1+F_.length;for(let h=0;h<u;h++){const f=Math.pow(2,o);t.push(f);let m=1/f;h>l-ss?m=F_[h-l+ss-1]:h===0&&(m=0),n.push(m);const p=1/(f-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,M=2,x=1,w=new Float32Array(T*E*y),U=new Float32Array(M*E*y),O=new Float32Array(x*E*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,j=B>2?0:-1,R=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];w.set(R,T*E*B),U.set(v,M*E*B);const D=[B,B,B,B,B,B];O.set(D,x*E*B)}const P=new ba;P.setAttribute("position",new Hi(w,T)),P.setAttribute("uv",new Hi(U,M)),P.setAttribute("faceIndex",new Hi(O,x)),a.push(new ki(P,null)),o>ss&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function H_(l,t,n){const a=new Ii(l,t,n);return a.texture.mapping=rc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Or(l,t,n,a,o){l.viewport.set(t,n,a,o),l.scissor.set(t,n,a,o)}function z1(l,t,n){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function P1(l,t,n){const a=new Float32Array(Os),o=new rt(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function V_(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function G_(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function F1(l){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const m=f.mapping,p=m===_d||m===vd,g=m===Bs||m===Vr;if(p||g){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new I_(l)),_=p?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new I_(l)),_=p?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function o(f){let m=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&m++;return m===p}function u(f){const m=f.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:h}}function B1(l){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=l.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&il("WebGLRenderer: "+a+" extension not supported."),o}}}function I1(l,t,n,a){const o={},u=new WeakMap;function h(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete o[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",h),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],l.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const w=y.array;T=y.version;for(let U=0,O=w.length;U<O;U+=3){const P=w[U+0],B=w[U+1],z=w[U+2];v.push(P,B,B,z,z,P)}}else if(E!==void 0){const w=E.array;T=E.version;for(let U=0,O=w.length/3-1;U<O;U+=3){const P=U+0,B=U+1,z=U+2;v.push(P,B,B,z,z,P)}}else return;const M=new(Pv(v)?qv:Wv)(v,1);M.version=T;const x=u.get(_);x&&t.remove(x),u.set(_,M)}function g(_){const v=u.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return u.get(_)}return{get:f,update:m,getWireframeAttribute:g}}function H1(l,t,n){let a;function o(v){a=v}let u,h;function f(v){u=v.type,h=v.bytesPerElement}function m(v,y){l.drawElements(a,y,u,v*h),n.update(y,a,1)}function p(v,y,E){E!==0&&(l.drawElementsInstanced(a,y,u,v*h,E),n.update(y,a,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,u,v,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];n.update(M,a,1)}function _(v,y,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/h,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,u,v,0,T,0,E);let x=0;for(let w=0;w<E;w++)x+=y[w]*T[w];n.update(x,a,1)}}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function V1(l){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,h,f){switch(n.calls++,h){case l.TRIANGLES:n.triangles+=f*(u/3);break;case l.LINES:n.lines+=f*(u/2);break;case l.LINE_STRIP:n.lines+=f*(u-1);break;case l.LINE_LOOP:n.lines+=f*u;break;case l.POINTS:n.points+=f*u;break;default:Ae("WebGLInfo: Unknown draw mode:",h);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function G1(l,t,n){const a=new WeakMap,o=new tn;function u(h,f,m){const p=h.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let D=function(){j.dispose(),a.delete(f),f.removeEventListener("dispose",D)};var y=D;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let O=0;E===!0&&(O=1),T===!0&&(O=2),M===!0&&(O=3);let P=f.attributes.position.count*O,B=1;P>t.maxTextureSize&&(B=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const z=new Float32Array(P*B*4*_),j=new Hv(z,P,B,_);j.type=Pi,j.needsUpdate=!0;const R=O*4;for(let k=0;k<_;k++){const at=x[k],nt=w[k],ft=U[k],lt=P*B*4*k;for(let F=0;F<at.count;F++){const H=F*R;E===!0&&(o.fromBufferAttribute(at,F),z[lt+H+0]=o.x,z[lt+H+1]=o.y,z[lt+H+2]=o.z,z[lt+H+3]=0),T===!0&&(o.fromBufferAttribute(nt,F),z[lt+H+4]=o.x,z[lt+H+5]=o.y,z[lt+H+6]=o.z,z[lt+H+7]=0),M===!0&&(o.fromBufferAttribute(ft,F),z[lt+H+8]=o.x,z[lt+H+9]=o.y,z[lt+H+10]=o.z,z[lt+H+11]=ft.itemSize===4?o.w:1)}}v={count:_,texture:j,size:new Ie(P,B)},a.set(f,v),f.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(l,"morphTexture",h.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(l,"morphTargetBaseInfluence",T),m.getUniforms().setValue(l,"morphTargetInfluences",p)}m.getUniforms().setValue(l,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}return{update:u}}function k1(l,t,n,a){let o=new WeakMap;function u(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(o.get(_)!==p&&(t.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),o.get(m)!==p&&(n.update(m.instanceMatrix,l.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,l.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return _}function h(){o=new WeakMap}function f(m){const p=m.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:h}}const X1={[yv]:"LINEAR_TONE_MAPPING",[Sv]:"REINHARD_TONE_MAPPING",[Mv]:"CINEON_TONE_MAPPING",[Ev]:"ACES_FILMIC_TONE_MAPPING",[Tv]:"AGX_TONE_MAPPING",[Av]:"NEUTRAL_TONE_MAPPING",[bv]:"CUSTOM_TONE_MAPPING"};function W1(l,t,n,a,o){const u=new Ii(t,n,{type:l,depthBuffer:a,stencilBuffer:o}),h=new Ii(t,n,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),f=new ba;f.setAttribute("position",new ya([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ya([0,2,0,0,2,0],2));const m=new zM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ki(f,m),g=new vp(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,T=null,M=[],x=!1;this.setSize=function(w,U){u.setSize(w,U),h.setSize(w,U);for(let O=0;O<M.length;O++){const P=M[O];P.setSize&&P.setSize(w,U)}},this.setEffects=function(w){M=w,x=M.length>0&&M[0].isRenderPass===!0;const U=u.width,O=u.height;for(let P=0;P<M.length;P++){const B=M[P];B.setSize&&B.setSize(U,O)}},this.begin=function(w,U){if(y||w.toneMapping===Bi&&M.length===0)return!1;if(T=U,U!==null){const O=U.width,P=U.height;(u.width!==O||u.height!==P)&&this.setSize(O,P)}return x===!1&&w.setRenderTarget(u),E=w.toneMapping,w.toneMapping=Bi,!0},this.hasRenderPass=function(){return x},this.end=function(w,U){w.toneMapping=E,y=!0;let O=u,P=h;for(let B=0;B<M.length;B++){const z=M[B];if(z.enabled!==!1&&(z.render(w,P,O,U),z.needsSwap!==!1)){const j=O;O=P,P=j}}if(_!==w.outputColorSpace||v!==w.toneMapping){_=w.outputColorSpace,v=w.toneMapping,m.defines={},Ee.getTransfer(_)===Be&&(m.defines.SRGB_TRANSFER="");const B=X1[v];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(T),w.render(p,g),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),h.dispose(),f.dispose(),m.dispose()}}const tx=new Ri,ep=new al(1,1),ex=new Hv,nx=new hM,ix=new jv,k_=[],X_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function Zr(l,t,n){const a=l[0];if(a<=0||a>0)return l;const o=t*n;let u=k_[o];if(u===void 0&&(u=new Float32Array(o),k_[o]=u),t!==0){a.toArray(u,0);for(let h=1,f=0;h!==t;++h)f+=n,l[h].toArray(u,f)}return u}function dn(l,t){if(l.length!==t.length)return!1;for(let n=0,a=l.length;n<a;n++)if(l[n]!==t[n])return!1;return!0}function pn(l,t){for(let n=0,a=t.length;n<a;n++)l[n]=t[n]}function uc(l,t){let n=X_[t];n===void 0&&(n=new Int32Array(t),X_[t]=n);for(let a=0;a!==t;++a)n[a]=l.allocateTextureUnit();return n}function q1(l,t){const n=this.cache;n[0]!==t&&(l.uniform1f(this.addr,t),n[0]=t)}function Y1(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;l.uniform2fv(this.addr,t),pn(n,t)}}function Z1(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(dn(n,t))return;l.uniform3fv(this.addr,t),pn(n,t)}}function j1(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;l.uniform4fv(this.addr,t),pn(n,t)}}function K1(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(dn(n,t))return;l.uniformMatrix2fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,a))return;Y_.set(a),l.uniformMatrix2fv(this.addr,!1,Y_),pn(n,a)}}function Q1(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(dn(n,t))return;l.uniformMatrix3fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,a))return;q_.set(a),l.uniformMatrix3fv(this.addr,!1,q_),pn(n,a)}}function $1(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(dn(n,t))return;l.uniformMatrix4fv(this.addr,!1,t),pn(n,t)}else{if(dn(n,a))return;W_.set(a),l.uniformMatrix4fv(this.addr,!1,W_),pn(n,a)}}function J1(l,t){const n=this.cache;n[0]!==t&&(l.uniform1i(this.addr,t),n[0]=t)}function tT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;l.uniform2iv(this.addr,t),pn(n,t)}}function eT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;l.uniform3iv(this.addr,t),pn(n,t)}}function nT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;l.uniform4iv(this.addr,t),pn(n,t)}}function iT(l,t){const n=this.cache;n[0]!==t&&(l.uniform1ui(this.addr,t),n[0]=t)}function aT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dn(n,t))return;l.uniform2uiv(this.addr,t),pn(n,t)}}function sT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dn(n,t))return;l.uniform3uiv(this.addr,t),pn(n,t)}}function rT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dn(n,t))return;l.uniform4uiv(this.addr,t),pn(n,t)}}function oT(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o);let u;this.type===l.SAMPLER_2D_SHADOW?(ep.compareFunction=n.isReversedDepthBuffer()?pp:dp,u=ep):u=tx,n.setTexture2D(t||u,o)}function lT(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||nx,o)}function uT(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||ix,o)}function cT(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||ex,o)}function hT(l){switch(l){case 5126:return q1;case 35664:return Y1;case 35665:return Z1;case 35666:return j1;case 35674:return K1;case 35675:return Q1;case 35676:return $1;case 5124:case 35670:return J1;case 35667:case 35671:return tT;case 35668:case 35672:return eT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return aT;case 36295:return sT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(l,t){l.uniform1fv(this.addr,t)}function dT(l,t){const n=Zr(t,this.size,2);l.uniform2fv(this.addr,n)}function pT(l,t){const n=Zr(t,this.size,3);l.uniform3fv(this.addr,n)}function mT(l,t){const n=Zr(t,this.size,4);l.uniform4fv(this.addr,n)}function gT(l,t){const n=Zr(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,n)}function _T(l,t){const n=Zr(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,n)}function vT(l,t){const n=Zr(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,n)}function xT(l,t){l.uniform1iv(this.addr,t)}function yT(l,t){l.uniform2iv(this.addr,t)}function ST(l,t){l.uniform3iv(this.addr,t)}function MT(l,t){l.uniform4iv(this.addr,t)}function ET(l,t){l.uniform1uiv(this.addr,t)}function bT(l,t){l.uniform2uiv(this.addr,t)}function TT(l,t){l.uniform3uiv(this.addr,t)}function AT(l,t){l.uniform4uiv(this.addr,t)}function CT(l,t,n){const a=this.cache,o=t.length,u=uc(n,o);dn(a,u)||(l.uniform1iv(this.addr,u),pn(a,u));let h;this.type===l.SAMPLER_2D_SHADOW?h=ep:h=tx;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||h,u[f])}function RT(l,t,n){const a=this.cache,o=t.length,u=uc(n,o);dn(a,u)||(l.uniform1iv(this.addr,u),pn(a,u));for(let h=0;h!==o;++h)n.setTexture3D(t[h]||nx,u[h])}function wT(l,t,n){const a=this.cache,o=t.length,u=uc(n,o);dn(a,u)||(l.uniform1iv(this.addr,u),pn(a,u));for(let h=0;h!==o;++h)n.setTextureCube(t[h]||ix,u[h])}function DT(l,t,n){const a=this.cache,o=t.length,u=uc(n,o);dn(a,u)||(l.uniform1iv(this.addr,u),pn(a,u));for(let h=0;h!==o;++h)n.setTexture2DArray(t[h]||ex,u[h])}function UT(l){switch(l){case 5126:return fT;case 35664:return dT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return _T;case 35676:return vT;case 5124:case 35670:return xT;case 35667:case 35671:return yT;case 35668:case 35672:return ST;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return bT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return DT}}class LT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=hT(n.type)}}class NT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UT(n.type)}}class OT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let u=0,h=o.length;u!==h;++u){const f=o[u];f.setValue(t,n[f.id],a)}}}const Qf=/(\w+)(\])?(\[|\.)?/g;function Z_(l,t){l.seq.push(t),l.map[t.id]=t}function zT(l,t,n){const a=l.name,o=a.length;for(Qf.lastIndex=0;;){const u=Qf.exec(a),h=Qf.lastIndex;let f=u[1];const m=u[2]==="]",p=u[3];if(m&&(f=f|0),p===void 0||p==="["&&h+2===o){Z_(n,p===void 0?new LT(f,l,t):new NT(f,l,t));break}else{let _=n.map[f];_===void 0&&(_=new OT(f),Z_(n,_)),n=_}}}class ec{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let h=0;h<a;++h){const f=t.getActiveUniform(n,h),m=t.getUniformLocation(n,f.name);zT(f,m,this)}const o=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(h):u.push(h);o.length>0&&(this.seq=o.concat(u))}setValue(t,n,a,o){const u=this.map[n];u!==void 0&&u.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let u=0,h=n.length;u!==h;++u){const f=n[u],m=a[f.id];m.needsUpdate!==!1&&f.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,u=t.length;o!==u;++o){const h=t[o];h.id in n&&a.push(h)}return a}}function j_(l,t,n){const a=l.createShader(t);return l.shaderSource(a,n),l.compileShader(a),a}const PT=37297;let FT=0;function BT(l,t){const n=l.split(`
`),a=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let h=o;h<u;h++){const f=h+1;a.push(`${f===t?">":" "} ${f}: ${n[h]}`)}return a.join(`
`)}const K_=new ce;function IT(l){Ee._getMatrix(K_,Ee.workingColorSpace,l);const t=`mat3( ${K_.elements.map(n=>n.toFixed(4))} )`;switch(Ee.getTransfer(l)){case nc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",l),[t,"LinearTransferOETF"]}}function Q_(l,t,n){const a=l.getShaderParameter(t,l.COMPILE_STATUS),u=(l.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const f=parseInt(h[1]);return n.toUpperCase()+`

`+u+`

`+BT(l.getShaderSource(t),f)}else return u}function HT(l,t){const n=IT(t);return[`vec4 ${l}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const VT={[yv]:"Linear",[Sv]:"Reinhard",[Mv]:"Cineon",[Ev]:"ACESFilmic",[Tv]:"AgX",[Av]:"Neutral",[bv]:"Custom"};function GT(l,t){const n=VT[t];return n===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+l+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+l+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ku=new rt;function kT(){Ee.getLuminanceCoefficients(ku);const l=ku.x.toFixed(4),t=ku.y.toFixed(4),n=ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XT(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function WT(l){const t=[];for(const n in l){const a=l[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function qT(l,t){const n={},a=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const u=l.getActiveAttrib(t,o),h=u.name;let f=1;u.type===l.FLOAT_MAT2&&(f=2),u.type===l.FLOAT_MAT3&&(f=3),u.type===l.FLOAT_MAT4&&(f=4),n[h]={type:u.type,location:l.getAttribLocation(t,h),locationSize:f}}return n}function Jo(l){return l!==""}function $_(l,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function J_(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YT=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(l){return l.replace(YT,jT)}const ZT=new Map;function jT(l,t){let n=ue[t];if(n===void 0){const a=ZT.get(t);if(a!==void 0)n=ue[a],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return np(n)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(l){return l.replace(KT,QT)}function QT(l,t,n,a){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function ev(l){let t=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const $T={[Zu]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function JT(l){return $T[l.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tA={[Bs]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[rc]:"ENVMAP_TYPE_CUBE_UV"};function eA(l){return l.envMap===!1?"ENVMAP_TYPE_CUBE":tA[l.envMapMode]||"ENVMAP_TYPE_CUBE"}const nA={[Vr]:"ENVMAP_MODE_REFRACTION"};function iA(l){return l.envMap===!1?"ENVMAP_MODE_REFLECTION":nA[l.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aA={[rp]:"ENVMAP_BLENDING_MULTIPLY",[qS]:"ENVMAP_BLENDING_MIX",[YS]:"ENVMAP_BLENDING_ADD"};function sA(l){return l.envMap===!1?"ENVMAP_BLENDING_NONE":aA[l.combine]||"ENVMAP_BLENDING_NONE"}function rA(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function oA(l,t,n,a){const o=l.getContext(),u=n.defines;let h=n.vertexShader,f=n.fragmentShader;const m=JT(n),p=eA(n),g=iA(n),_=sA(n),v=rA(n),y=XT(n),E=WT(u),T=o.createProgram();let M,x,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Jo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Jo).join(`
`),x.length>0&&(x+=`
`)):(M=[ev(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),x=[ev(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?ue.tonemapping_pars_fragment:"",n.toneMapping!==Bi?GT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,HT("linearToOutputTexel",n.outputColorSpace),kT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jo).join(`
`)),h=np(h),h=$_(h,n),h=J_(h,n),f=np(f),f=$_(f,n),f=J_(f,n),h=tv(h),f=tv(f),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=w+M+h,O=w+x+f,P=j_(o,o.VERTEX_SHADER,U),B=j_(o,o.FRAGMENT_SHADER,O);o.attachShader(T,P),o.attachShader(T,B),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function z(k){if(l.debug.checkShaderErrors){const at=o.getProgramInfoLog(T)||"",nt=o.getShaderInfoLog(P)||"",ft=o.getShaderInfoLog(B)||"",lt=at.trim(),F=nt.trim(),H=ft.trim();let $=!0,yt=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if($=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(o,T,P,B);else{const vt=Q_(o,P,"vertex"),N=Q_(o,B,"fragment");Ae("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+lt+`
`+vt+`
`+N)}else lt!==""?ae("WebGLProgram: Program Info Log:",lt):(F===""||H==="")&&(yt=!1);yt&&(k.diagnostics={runnable:$,programLog:lt,vertexShader:{log:F,prefix:M},fragmentShader:{log:H,prefix:x}})}o.deleteShader(P),o.deleteShader(B),j=new ec(o,T),R=qT(o,T)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(T,PT)),D},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=B,this}let lA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(a),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new cA(t),n.set(t,a)),a}}class cA{constructor(t){this.id=lA++,this.code=t,this.usedTimes=0}}function hA(l,t,n,a,o,u,h){const f=new Gv,m=new uA,p=new Set,g=[],_=new Map,v=o.logarithmicDepthBuffer;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,D,k,at,nt){const ft=at.fog,lt=nt.geometry,F=R.isMeshStandardMaterial?at.environment:null,H=(R.isMeshStandardMaterial?n:t).get(R.envMap||F),$=H&&H.mapping===rc?H.image.height:null,yt=E[R.type];R.precision!==null&&(y=o.getMaxPrecision(R.precision),y!==R.precision&&ae("WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const vt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,N=vt!==void 0?vt.length:0;let it=0;lt.morphAttributes.position!==void 0&&(it=1),lt.morphAttributes.normal!==void 0&&(it=2),lt.morphAttributes.color!==void 0&&(it=3);let gt,Tt,Bt,et;if(yt){const Me=zi[yt];gt=Me.vertexShader,Tt=Me.fragmentShader}else gt=R.vertexShader,Tt=R.fragmentShader,m.update(R),Bt=m.getVertexShaderID(R),et=m.getFragmentShaderID(R);const ct=l.getRenderTarget(),wt=l.state.buffers.depth.getReversed(),Gt=nt.isInstancedMesh===!0,It=nt.isBatchedMesh===!0,he=!!R.map,Ke=!!R.matcap,ge=!!H,fe=!!R.aoMap,Ce=!!R.lightMap,se=!!R.bumpMap,Qe=!!R.normalMap,V=!!R.displacementMap,Ye=!!R.emissiveMap,Se=!!R.metalnessMap,Le=!!R.roughnessMap,qt=R.anisotropy>0,L=R.clearcoat>0,b=R.dispersion>0,W=R.iridescence>0,dt=R.sheen>0,xt=R.transmission>0,ut=qt&&!!R.anisotropyMap,Zt=L&&!!R.clearcoatMap,Ct=L&&!!R.clearcoatNormalMap,kt=L&&!!R.clearcoatRoughnessMap,te=W&&!!R.iridescenceMap,Mt=W&&!!R.iridescenceThicknessMap,Et=dt&&!!R.sheenColorMap,Pt=dt&&!!R.sheenRoughnessMap,Ot=!!R.specularMap,Rt=!!R.specularColorMap,oe=!!R.specularIntensityMap,X=xt&&!!R.transmissionMap,Ut=xt&&!!R.thicknessMap,bt=!!R.gradientMap,zt=!!R.alphaMap,St=R.alphaTest>0,_t=!!R.alphaHash,At=!!R.extensions;let ee=Bi;R.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ee=l.toneMapping);const Oe={shaderID:yt,shaderType:R.type,shaderName:R.name,vertexShader:gt,fragmentShader:Tt,defines:R.defines,customVertexShaderID:Bt,customFragmentShaderID:et,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:It,batchingColor:It&&nt._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&nt.instanceColor!==null,instancingMorph:Gt&&nt.morphTexture!==null,outputColorSpace:ct===null?l.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:kr,alphaToCoverage:!!R.alphaToCoverage,map:he,matcap:Ke,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:$,aoMap:fe,lightMap:Ce,bumpMap:se,normalMap:Qe,displacementMap:V,emissiveMap:Ye,normalMapObjectSpace:Qe&&R.normalMapType===KS,normalMapTangentSpace:Qe&&R.normalMapType===zv,metalnessMap:Se,roughnessMap:Le,anisotropy:qt,anisotropyMap:ut,clearcoat:L,clearcoatMap:Zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:kt,dispersion:b,iridescence:W,iridescenceMap:te,iridescenceThicknessMap:Mt,sheen:dt,sheenColorMap:Et,sheenRoughnessMap:Pt,specularMap:Ot,specularColorMap:Rt,specularIntensityMap:oe,transmission:xt,transmissionMap:X,thicknessMap:Ut,gradientMap:bt,opaque:R.transparent===!1&&R.blending===Br&&R.alphaToCoverage===!1,alphaMap:zt,alphaTest:St,alphaHash:_t,combine:R.combine,mapUv:he&&T(R.map.channel),aoMapUv:fe&&T(R.aoMap.channel),lightMapUv:Ce&&T(R.lightMap.channel),bumpMapUv:se&&T(R.bumpMap.channel),normalMapUv:Qe&&T(R.normalMap.channel),displacementMapUv:V&&T(R.displacementMap.channel),emissiveMapUv:Ye&&T(R.emissiveMap.channel),metalnessMapUv:Se&&T(R.metalnessMap.channel),roughnessMapUv:Le&&T(R.roughnessMap.channel),anisotropyMapUv:ut&&T(R.anisotropyMap.channel),clearcoatMapUv:Zt&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&T(R.sheenRoughnessMap.channel),specularMapUv:Ot&&T(R.specularMap.channel),specularColorMapUv:Rt&&T(R.specularColorMap.channel),specularIntensityMapUv:oe&&T(R.specularIntensityMap.channel),transmissionMapUv:X&&T(R.transmissionMap.channel),thicknessMapUv:Ut&&T(R.thicknessMap.channel),alphaMapUv:zt&&T(R.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Qe||qt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!lt.attributes.uv&&(he||zt),fog:!!ft,useFog:R.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:nt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:it,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:l.shadowMap.enabled&&k.length>0,shadowMapType:l.shadowMap.type,toneMapping:ee,decodeVideoTexture:he&&R.map.isVideoTexture===!0&&Ee.getTransfer(R.map.colorSpace)===Be,decodeVideoTextureEmissive:Ye&&R.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(R.emissiveMap.colorSpace)===Be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ga,flipSided:R.side===Xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:At&&R.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&R.extensions.multiDraw===!0||It)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function x(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)D.push(k),D.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(w(D,R),U(D,R),D.push(l.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function w(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function U(R,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),R.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),R.push(f.mask)}function O(R){const D=E[R.type];let k;if(D){const at=zi[D];k=TM.clone(at.uniforms)}else k=R.uniforms;return k}function P(R,D){let k=_.get(D);return k!==void 0?++k.usedTimes:(k=new oA(l,D,R,u),g.push(k),_.set(D,k)),k}function B(R){if(--R.usedTimes===0){const D=g.indexOf(R);g[D]=g[g.length-1],g.pop(),_.delete(R.cacheKey),R.destroy()}}function z(R){m.remove(R)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:O,acquireProgram:P,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:j}}function fA(){let l=new WeakMap;function t(h){return l.has(h)}function n(h){let f=l.get(h);return f===void 0&&(f={},l.set(h,f)),f}function a(h){l.delete(h)}function o(h,f,m){l.get(h)[f]=m}function u(){l=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:u}}function dA(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function nv(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function iv(){const l=[];let t=0;const n=[],a=[],o=[];function u(){t=0,n.length=0,a.length=0,o.length=0}function h(_,v,y,E,T,M){let x=l[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},l[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=T,x.group=M),t++,x}function f(_,v,y,E,T,M){const x=h(_,v,y,E,T,M);y.transmission>0?a.push(x):y.transparent===!0?o.push(x):n.push(x)}function m(_,v,y,E,T,M){const x=h(_,v,y,E,T,M);y.transmission>0?a.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function p(_,v){n.length>1&&n.sort(_||dA),a.length>1&&a.sort(v||nv),o.length>1&&o.sort(v||nv)}function g(){for(let _=t,v=l.length;_<v;_++){const y=l[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:u,push:f,unshift:m,finish:g,sort:p}}function pA(){let l=new WeakMap;function t(a,o){const u=l.get(a);let h;return u===void 0?(h=new iv,l.set(a,[h])):o>=u.length?(h=new iv,u.push(h)):h=u[o],h}function n(){l=new WeakMap}return{get:t,dispose:n}}function mA(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new Ue};break;case"SpotLight":n={position:new rt,direction:new rt,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":n={color:new Ue,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return l[t.id]=n,n}}}function gA(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=n,n}}}let _A=0;function vA(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function xA(l){const t=new mA,n=gA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new rt);const o=new rt,u=new fn,h=new fn;function f(p){let g=0,_=0,v=0;for(let R=0;R<9;R++)a.probe[R].set(0,0,0);let y=0,E=0,T=0,M=0,x=0,w=0,U=0,O=0,P=0,B=0,z=0;p.sort(vA);for(let R=0,D=p.length;R<D;R++){const k=p[R],at=k.color,nt=k.intensity,ft=k.distance;let lt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Gr?lt=k.shadow.map.texture:lt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=at.r*nt,_+=at.g*nt,v+=at.b*nt;else if(k.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(k.sh.coefficients[F],nt);z++}else if(k.isDirectionalLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,$=n.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,a.directionalShadow[y]=$,a.directionalShadowMap[y]=lt,a.directionalShadowMatrix[y]=k.shadow.matrix,w++}a.directional[y]=F,y++}else if(k.isSpotLight){const F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(at).multiplyScalar(nt),F.distance=ft,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,a.spot[T]=F;const H=k.shadow;if(k.map&&(a.spotLightMap[P]=k.map,P++,H.updateMatrices(k),k.castShadow&&B++),a.spotLightMatrix[T]=H.matrix,k.castShadow){const $=n.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,a.spotShadow[T]=$,a.spotShadowMap[T]=lt,O++}T++}else if(k.isRectAreaLight){const F=t.get(k);F.color.copy(at).multiplyScalar(nt),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),a.rectArea[M]=F,M++}else if(k.isPointLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const H=k.shadow,$=n.get(k);$.shadowIntensity=H.intensity,$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,a.pointShadow[E]=$,a.pointShadowMap[E]=lt,a.pointShadowMatrix[E]=k.shadow.matrix,U++}a.point[E]=F,E++}else if(k.isHemisphereLight){const F=t.get(k);F.skyColor.copy(k.color).multiplyScalar(nt),F.groundColor.copy(k.groundColor).multiplyScalar(nt),a.hemi[x]=F,x++}}M>0&&(l.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const j=a.hash;(j.directionalLength!==y||j.pointLength!==E||j.spotLength!==T||j.rectAreaLength!==M||j.hemiLength!==x||j.numDirectionalShadows!==w||j.numPointShadows!==U||j.numSpotShadows!==O||j.numSpotMaps!==P||j.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=O+P-B,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=z,j.directionalLength=y,j.pointLength=E,j.spotLength=T,j.rectAreaLength=M,j.hemiLength=x,j.numDirectionalShadows=w,j.numPointShadows=U,j.numSpotShadows=O,j.numSpotMaps=P,j.numLightProbes=z,a.version=_A++)}function m(p,g){let _=0,v=0,y=0,E=0,T=0;const M=g.matrixWorldInverse;for(let x=0,w=p.length;x<w;x++){const U=p[x];if(U.isDirectionalLight){const O=a.directional[_];O.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(M),_++}else if(U.isSpotLight){const O=a.spot[y];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const O=a.rectArea[E];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(M),h.identity(),u.copy(U.matrixWorld),u.premultiply(M),h.extractRotation(u),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),O.halfWidth.applyMatrix4(h),O.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const O=a.point[v];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(M),v++}else if(U.isHemisphereLight){const O=a.hemi[T];O.direction.setFromMatrixPosition(U.matrixWorld),O.direction.transformDirection(M),T++}}}return{setup:f,setupView:m,state:a}}function av(l){const t=new xA(l),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function u(g){n.push(g)}function h(g){a.push(g)}function f(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:m,pushLight:u,pushShadow:h}}function yA(l){let t=new WeakMap;function n(o,u=0){const h=t.get(o);let f;return h===void 0?(f=new av(l),t.set(o,[f])):u>=h.length?(f=new av(l),h.push(f)):f=h[u],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const SA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
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
}`,EA=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],bA=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],sv=new fn,Ko=new rt,$f=new rt;function TA(l,t,n){let a=new _p;const o=new Ie,u=new Ie,h=new tn,f=new FM,m=new BM,p={},g=n.maxTextureSize,_={[os]:Xn,[Xn]:os,[ga]:ga},v=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:SA,fragmentShader:MA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new ba;E.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ki(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let x=this.type;this.render=function(B,z,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===CS&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Zu);const R=l.getRenderTarget(),D=l.getActiveCubeFace(),k=l.getActiveMipmapLevel(),at=l.state;at.setBlending(va),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const nt=x!==this.type;nt&&z.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(lt=>lt.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,lt=B.length;ft<lt;ft++){const F=B[ft],H=F.shadow;if(H===void 0){ae("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const $=H.getFrameExtents();if(o.multiply($),u.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/$.x),o.x=u.x*$.x,H.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/$.y),o.y=u.y*$.y,H.mapSize.y=u.y)),H.map===null||nt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===$o){if(F.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ii(o.x,o.y,{format:Gr,type:Ma,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new al(o.x,o.y,Pi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Ea,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else{F.isPointLight?(H.map=new Kv(o.x),H.map.depthTexture=new OM(o.x,Gi)):(H.map=new Ii(o.x,o.y),H.map.depthTexture=new al(o.x,o.y,Gi)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Ea;const vt=l.state.buffers.depth.getReversed();this.type===Zu?(H.map.depthTexture.compareFunction=vt?pp:dp,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<yt;vt++){if(H.map.isWebGLCubeRenderTarget)l.setRenderTarget(H.map,vt),l.clear();else{vt===0&&(l.setRenderTarget(H.map),l.clear());const N=H.getViewport(vt);h.set(u.x*N.x,u.y*N.y,u.x*N.z,u.y*N.w),at.viewport(h)}if(F.isPointLight){const N=H.camera,it=H.matrix,gt=F.distance||N.far;gt!==N.far&&(N.far=gt,N.updateProjectionMatrix()),Ko.setFromMatrixPosition(F.matrixWorld),N.position.copy(Ko),$f.copy(N.position),$f.add(EA[vt]),N.up.copy(bA[vt]),N.lookAt($f),N.updateMatrixWorld(),it.makeTranslation(-Ko.x,-Ko.y,-Ko.z),sv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(sv,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),O(z,j,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===$o&&w(H,j),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,l.setRenderTarget(R,D,k)};function w(B,z){const j=t.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ii(o.x,o.y,{format:Gr,type:Ma})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,l.setRenderTarget(B.mapPass),l.clear(),l.renderBufferDirect(z,null,j,v,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,l.setRenderTarget(B.map),l.clear(),l.renderBufferDirect(z,null,j,y,T,null)}function U(B,z,j,R){let D=null;const k=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)D=k;else if(D=j.isPointLight===!0?m:f,l.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const at=D.uuid,nt=z.uuid;let ft=p[at];ft===void 0&&(ft={},p[at]=ft);let lt=ft[nt];lt===void 0&&(lt=D.clone(),ft[nt]=lt,z.addEventListener("dispose",P)),D=lt}if(D.visible=z.visible,D.wireframe=z.wireframe,R===$o?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:_[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,j.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const at=l.properties.get(D);at.light=j}return D}function O(B,z,j,R,D){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===$o)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const nt=t.update(B),ft=B.material;if(Array.isArray(ft)){const lt=nt.groups;for(let F=0,H=lt.length;F<H;F++){const $=lt[F],yt=ft[$.materialIndex];if(yt&&yt.visible){const vt=U(B,yt,R,D);B.onBeforeShadow(l,B,z,j,nt,vt,$),l.renderBufferDirect(j,null,nt,vt,B,$),B.onAfterShadow(l,B,z,j,nt,vt,$)}}}else if(ft.visible){const lt=U(B,ft,R,D);B.onBeforeShadow(l,B,z,j,nt,lt,null),l.renderBufferDirect(j,null,nt,lt,B,null),B.onAfterShadow(l,B,z,j,nt,lt,null)}}const at=B.children;for(let nt=0,ft=at.length;nt<ft;nt++)O(at[nt],z,j,R,D)}function P(B){B.target.removeEventListener("dispose",P);for(const j in p){const R=p[j],D=B.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const AA={[cd]:hd,[fd]:md,[dd]:gd,[Hr]:pd,[hd]:cd,[md]:fd,[gd]:dd,[pd]:Hr};function CA(l,t){function n(){let X=!1;const Ut=new tn;let bt=null;const zt=new tn(0,0,0,0);return{setMask:function(St){bt!==St&&!X&&(l.colorMask(St,St,St,St),bt=St)},setLocked:function(St){X=St},setClear:function(St,_t,At,ee,Oe){Oe===!0&&(St*=ee,_t*=ee,At*=ee),Ut.set(St,_t,At,ee),zt.equals(Ut)===!1&&(l.clearColor(St,_t,At,ee),zt.copy(Ut))},reset:function(){X=!1,bt=null,zt.set(-1,0,0,0)}}}function a(){let X=!1,Ut=!1,bt=null,zt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ee=St;St=null,this.setClear(ee)}},getReversed:function(){return Ut},setTest:function(_t){_t?ct(l.DEPTH_TEST):wt(l.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!X&&(l.depthMask(_t),bt=_t)},setFunc:function(_t){if(Ut&&(_t=AA[_t]),zt!==_t){switch(_t){case cd:l.depthFunc(l.NEVER);break;case hd:l.depthFunc(l.ALWAYS);break;case fd:l.depthFunc(l.LESS);break;case Hr:l.depthFunc(l.LEQUAL);break;case dd:l.depthFunc(l.EQUAL);break;case pd:l.depthFunc(l.GEQUAL);break;case md:l.depthFunc(l.GREATER);break;case gd:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}zt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),l.clearDepth(_t),St=_t)},reset:function(){X=!1,bt=null,zt=null,St=null,Ut=!1}}}function o(){let X=!1,Ut=null,bt=null,zt=null,St=null,_t=null,At=null,ee=null,Oe=null;return{setTest:function(Me){X||(Me?ct(l.STENCIL_TEST):wt(l.STENCIL_TEST))},setMask:function(Me){Ut!==Me&&!X&&(l.stencilMask(Me),Ut=Me)},setFunc:function(Me,wn,mi){(bt!==Me||zt!==wn||St!==mi)&&(l.stencilFunc(Me,wn,mi),bt=Me,zt=wn,St=mi)},setOp:function(Me,wn,mi){(_t!==Me||At!==wn||ee!==mi)&&(l.stencilOp(Me,wn,mi),_t=Me,At=wn,ee=mi)},setLocked:function(Me){X=Me},setClear:function(Me){Oe!==Me&&(l.clearStencil(Me),Oe=Me)},reset:function(){X=!1,Ut=null,bt=null,zt=null,St=null,_t=null,At=null,ee=null,Oe=null}}}const u=new n,h=new a,f=new o,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,T=!1,M=null,x=null,w=null,U=null,O=null,P=null,B=null,z=new Ue(0,0,0),j=0,R=!1,D=null,k=null,at=null,nt=null,ft=null;const lt=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const $=l.getParameter(l.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),F=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),F=H>=2);let yt=null,vt={};const N=l.getParameter(l.SCISSOR_BOX),it=l.getParameter(l.VIEWPORT),gt=new tn().fromArray(N),Tt=new tn().fromArray(it);function Bt(X,Ut,bt,zt){const St=new Uint8Array(4),_t=l.createTexture();l.bindTexture(X,_t),l.texParameteri(X,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(X,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let At=0;At<bt;At++)X===l.TEXTURE_3D||X===l.TEXTURE_2D_ARRAY?l.texImage3D(Ut,0,l.RGBA,1,1,zt,0,l.RGBA,l.UNSIGNED_BYTE,St):l.texImage2D(Ut+At,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,St);return _t}const et={};et[l.TEXTURE_2D]=Bt(l.TEXTURE_2D,l.TEXTURE_2D,1),et[l.TEXTURE_CUBE_MAP]=Bt(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[l.TEXTURE_2D_ARRAY]=Bt(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),et[l.TEXTURE_3D]=Bt(l.TEXTURE_3D,l.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),f.setClear(0),ct(l.DEPTH_TEST),h.setFunc(Hr),se(!1),Qe(u_),ct(l.CULL_FACE),fe(va);function ct(X){g[X]!==!0&&(l.enable(X),g[X]=!0)}function wt(X){g[X]!==!1&&(l.disable(X),g[X]=!1)}function Gt(X,Ut){return _[X]!==Ut?(l.bindFramebuffer(X,Ut),_[X]=Ut,X===l.DRAW_FRAMEBUFFER&&(_[l.FRAMEBUFFER]=Ut),X===l.FRAMEBUFFER&&(_[l.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(X,Ut){let bt=y,zt=!1;if(X){bt=v.get(Ut),bt===void 0&&(bt=[],v.set(Ut,bt));const St=X.textures;if(bt.length!==St.length||bt[0]!==l.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)bt[_t]=l.COLOR_ATTACHMENT0+_t;bt.length=St.length,zt=!0}}else bt[0]!==l.BACK&&(bt[0]=l.BACK,zt=!0);zt&&l.drawBuffers(bt)}function he(X){return E!==X?(l.useProgram(X),E=X,!0):!1}const Ke={[Ns]:l.FUNC_ADD,[wS]:l.FUNC_SUBTRACT,[DS]:l.FUNC_REVERSE_SUBTRACT};Ke[US]=l.MIN,Ke[LS]=l.MAX;const ge={[NS]:l.ZERO,[OS]:l.ONE,[zS]:l.SRC_COLOR,[ld]:l.SRC_ALPHA,[VS]:l.SRC_ALPHA_SATURATE,[IS]:l.DST_COLOR,[FS]:l.DST_ALPHA,[PS]:l.ONE_MINUS_SRC_COLOR,[ud]:l.ONE_MINUS_SRC_ALPHA,[HS]:l.ONE_MINUS_DST_COLOR,[BS]:l.ONE_MINUS_DST_ALPHA,[GS]:l.CONSTANT_COLOR,[kS]:l.ONE_MINUS_CONSTANT_COLOR,[XS]:l.CONSTANT_ALPHA,[WS]:l.ONE_MINUS_CONSTANT_ALPHA};function fe(X,Ut,bt,zt,St,_t,At,ee,Oe,Me){if(X===va){T===!0&&(wt(l.BLEND),T=!1);return}if(T===!1&&(ct(l.BLEND),T=!0),X!==RS){if(X!==M||Me!==R){if((x!==Ns||O!==Ns)&&(l.blendEquation(l.FUNC_ADD),x=Ns,O=Ns),Me)switch(X){case Br:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case c_:l.blendFunc(l.ONE,l.ONE);break;case h_:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case f_:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:Ae("WebGLState: Invalid blending: ",X);break}else switch(X){case Br:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case c_:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case h_:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f_:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",X);break}w=null,U=null,P=null,B=null,z.set(0,0,0),j=0,M=X,R=Me}return}St=St||Ut,_t=_t||bt,At=At||zt,(Ut!==x||St!==O)&&(l.blendEquationSeparate(Ke[Ut],Ke[St]),x=Ut,O=St),(bt!==w||zt!==U||_t!==P||At!==B)&&(l.blendFuncSeparate(ge[bt],ge[zt],ge[_t],ge[At]),w=bt,U=zt,P=_t,B=At),(ee.equals(z)===!1||Oe!==j)&&(l.blendColor(ee.r,ee.g,ee.b,Oe),z.copy(ee),j=Oe),M=X,R=!1}function Ce(X,Ut){X.side===ga?wt(l.CULL_FACE):ct(l.CULL_FACE);let bt=X.side===Xn;Ut&&(bt=!bt),se(bt),X.blending===Br&&X.transparent===!1?fe(va):fe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const zt=X.stencilWrite;f.setTest(zt),zt&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ye(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(l.SAMPLE_ALPHA_TO_COVERAGE):wt(l.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){D!==X&&(X?l.frontFace(l.CW):l.frontFace(l.CCW),D=X)}function Qe(X){X!==TS?(ct(l.CULL_FACE),X!==k&&(X===u_?l.cullFace(l.BACK):X===AS?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):wt(l.CULL_FACE),k=X}function V(X){X!==at&&(F&&l.lineWidth(X),at=X)}function Ye(X,Ut,bt){X?(ct(l.POLYGON_OFFSET_FILL),(nt!==Ut||ft!==bt)&&(l.polygonOffset(Ut,bt),nt=Ut,ft=bt)):wt(l.POLYGON_OFFSET_FILL)}function Se(X){X?ct(l.SCISSOR_TEST):wt(l.SCISSOR_TEST)}function Le(X){X===void 0&&(X=l.TEXTURE0+lt-1),yt!==X&&(l.activeTexture(X),yt=X)}function qt(X,Ut,bt){bt===void 0&&(yt===null?bt=l.TEXTURE0+lt-1:bt=yt);let zt=vt[bt];zt===void 0&&(zt={type:void 0,texture:void 0},vt[bt]=zt),(zt.type!==X||zt.texture!==Ut)&&(yt!==bt&&(l.activeTexture(bt),yt=bt),l.bindTexture(X,Ut||et[X]),zt.type=X,zt.texture=Ut)}function L(){const X=vt[yt];X!==void 0&&X.type!==void 0&&(l.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{l.compressedTexImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function W(){try{l.compressedTexImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function dt(){try{l.texSubImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function xt(){try{l.texSubImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function ut(){try{l.compressedTexSubImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function Zt(){try{l.compressedTexSubImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function Ct(){try{l.texStorage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function kt(){try{l.texStorage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function te(){try{l.texImage2D(...arguments)}catch(X){Ae("WebGLState:",X)}}function Mt(){try{l.texImage3D(...arguments)}catch(X){Ae("WebGLState:",X)}}function Et(X){gt.equals(X)===!1&&(l.scissor(X.x,X.y,X.z,X.w),gt.copy(X))}function Pt(X){Tt.equals(X)===!1&&(l.viewport(X.x,X.y,X.z,X.w),Tt.copy(X))}function Ot(X,Ut){let bt=p.get(Ut);bt===void 0&&(bt=new WeakMap,p.set(Ut,bt));let zt=bt.get(X);zt===void 0&&(zt=l.getUniformBlockIndex(Ut,X.name),bt.set(X,zt))}function Rt(X,Ut){const zt=p.get(Ut).get(X);m.get(Ut)!==zt&&(l.uniformBlockBinding(Ut,zt,X.__bindingPointIndex),m.set(Ut,zt))}function oe(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),h.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),g={},yt=null,vt={},_={},v=new WeakMap,y=[],E=null,T=!1,M=null,x=null,w=null,U=null,O=null,P=null,B=null,z=new Ue(0,0,0),j=0,R=!1,D=null,k=null,at=null,nt=null,ft=null,gt.set(0,0,l.canvas.width,l.canvas.height),Tt.set(0,0,l.canvas.width,l.canvas.height),u.reset(),h.reset(),f.reset()}return{buffers:{color:u,depth:h,stencil:f},enable:ct,disable:wt,bindFramebuffer:Gt,drawBuffers:It,useProgram:he,setBlending:fe,setMaterial:Ce,setFlipSided:se,setCullFace:Qe,setLineWidth:V,setPolygonOffset:Ye,setScissorTest:Se,activeTexture:Le,bindTexture:qt,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:te,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Rt,texStorage2D:Ct,texStorage3D:kt,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:Et,viewport:Pt,reset:oe}}function RA(l,t,n,a,o,u,h){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ie,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return y?new OffscreenCanvas(L,b):ac("canvas")}function T(L,b,W){let dt=1;const xt=qt(L);if((xt.width>W||xt.height>W)&&(dt=W/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(dt*xt.width),Zt=Math.floor(dt*xt.height);_===void 0&&(_=E(ut,Zt));const Ct=b?E(ut,Zt):_;return Ct.width=ut,Ct.height=Zt,Ct.getContext("2d").drawImage(L,0,0,ut,Zt),ae("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Zt+")."),Ct}else return"data"in L&&ae("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){l.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?l.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function U(L,b,W,dt,xt=!1){if(L!==null){if(l[L]!==void 0)return l[L];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=b;if(b===l.RED&&(W===l.FLOAT&&(ut=l.R32F),W===l.HALF_FLOAT&&(ut=l.R16F),W===l.UNSIGNED_BYTE&&(ut=l.R8)),b===l.RED_INTEGER&&(W===l.UNSIGNED_BYTE&&(ut=l.R8UI),W===l.UNSIGNED_SHORT&&(ut=l.R16UI),W===l.UNSIGNED_INT&&(ut=l.R32UI),W===l.BYTE&&(ut=l.R8I),W===l.SHORT&&(ut=l.R16I),W===l.INT&&(ut=l.R32I)),b===l.RG&&(W===l.FLOAT&&(ut=l.RG32F),W===l.HALF_FLOAT&&(ut=l.RG16F),W===l.UNSIGNED_BYTE&&(ut=l.RG8)),b===l.RG_INTEGER&&(W===l.UNSIGNED_BYTE&&(ut=l.RG8UI),W===l.UNSIGNED_SHORT&&(ut=l.RG16UI),W===l.UNSIGNED_INT&&(ut=l.RG32UI),W===l.BYTE&&(ut=l.RG8I),W===l.SHORT&&(ut=l.RG16I),W===l.INT&&(ut=l.RG32I)),b===l.RGB_INTEGER&&(W===l.UNSIGNED_BYTE&&(ut=l.RGB8UI),W===l.UNSIGNED_SHORT&&(ut=l.RGB16UI),W===l.UNSIGNED_INT&&(ut=l.RGB32UI),W===l.BYTE&&(ut=l.RGB8I),W===l.SHORT&&(ut=l.RGB16I),W===l.INT&&(ut=l.RGB32I)),b===l.RGBA_INTEGER&&(W===l.UNSIGNED_BYTE&&(ut=l.RGBA8UI),W===l.UNSIGNED_SHORT&&(ut=l.RGBA16UI),W===l.UNSIGNED_INT&&(ut=l.RGBA32UI),W===l.BYTE&&(ut=l.RGBA8I),W===l.SHORT&&(ut=l.RGBA16I),W===l.INT&&(ut=l.RGBA32I)),b===l.RGB&&(W===l.UNSIGNED_INT_5_9_9_9_REV&&(ut=l.RGB9_E5),W===l.UNSIGNED_INT_10F_11F_11F_REV&&(ut=l.R11F_G11F_B10F)),b===l.RGBA){const Zt=xt?nc:Ee.getTransfer(dt);W===l.FLOAT&&(ut=l.RGBA32F),W===l.HALF_FLOAT&&(ut=l.RGBA16F),W===l.UNSIGNED_BYTE&&(ut=Zt===Be?l.SRGB8_ALPHA8:l.RGBA8),W===l.UNSIGNED_SHORT_4_4_4_4&&(ut=l.RGBA4),W===l.UNSIGNED_SHORT_5_5_5_1&&(ut=l.RGB5_A1)}return(ut===l.R16F||ut===l.R32F||ut===l.RG16F||ut===l.RG32F||ut===l.RGBA16F||ut===l.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function O(L,b){let W;return L?b===null||b===Gi||b===nl?W=l.DEPTH24_STENCIL8:b===Pi?W=l.DEPTH32F_STENCIL8:b===el&&(W=l.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===nl?W=l.DEPTH_COMPONENT24:b===Pi?W=l.DEPTH_COMPONENT32F:b===el&&(W=l.DEPTH_COMPONENT16),W}function P(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Rn&&L.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function B(L){const b=L.target;b.removeEventListener("dispose",B),j(b),b.isVideoTexture&&g.delete(b)}function z(L){const b=L.target;b.removeEventListener("dispose",z),D(b)}function j(L){const b=a.get(L);if(b.__webglInit===void 0)return;const W=L.source,dt=v.get(W);if(dt){const xt=dt[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&R(L),Object.keys(dt).length===0&&v.delete(W)}a.remove(L)}function R(L){const b=a.get(L);l.deleteTexture(b.__webglTexture);const W=L.source,dt=v.get(W);delete dt[b.__cacheKey],h.memory.textures--}function D(L){const b=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let xt=0;xt<b.__webglFramebuffer[dt].length;xt++)l.deleteFramebuffer(b.__webglFramebuffer[dt][xt]);else l.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&l.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)l.deleteFramebuffer(b.__webglFramebuffer[dt]);else l.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&l.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&l.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&l.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&l.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=L.textures;for(let dt=0,xt=W.length;dt<xt;dt++){const ut=a.get(W[dt]);ut.__webglTexture&&(l.deleteTexture(ut.__webglTexture),h.memory.textures--),a.remove(W[dt])}a.remove(L)}let k=0;function at(){k=0}function nt(){const L=k;return L>=o.maxTextures&&ae("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function ft(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function lt(L,b){const W=a.get(L);if(L.isVideoTexture&&Se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const dt=L.image;if(dt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,L,b);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(l.TEXTURE_2D,W.__webglTexture,l.TEXTURE0+b)}function F(L,b){const W=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){et(W,L,b);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(l.TEXTURE_2D_ARRAY,W.__webglTexture,l.TEXTURE0+b)}function H(L,b){const W=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){et(W,L,b);return}n.bindTexture(l.TEXTURE_3D,W.__webglTexture,l.TEXTURE0+b)}function $(L,b){const W=a.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){ct(W,L,b);return}n.bindTexture(l.TEXTURE_CUBE_MAP,W.__webglTexture,l.TEXTURE0+b)}const yt={[xd]:l.REPEAT,[_a]:l.CLAMP_TO_EDGE,[yd]:l.MIRRORED_REPEAT},vt={[Rn]:l.NEAREST,[ZS]:l.NEAREST_MIPMAP_NEAREST,[Eu]:l.NEAREST_MIPMAP_LINEAR,[On]:l.LINEAR,[Sf]:l.LINEAR_MIPMAP_NEAREST,[zs]:l.LINEAR_MIPMAP_LINEAR},N={[QS]:l.NEVER,[nM]:l.ALWAYS,[$S]:l.LESS,[dp]:l.LEQUAL,[JS]:l.EQUAL,[pp]:l.GEQUAL,[tM]:l.GREATER,[eM]:l.NOTEQUAL};function it(L,b){if(b.type===Pi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===On||b.magFilter===Sf||b.magFilter===Eu||b.magFilter===zs||b.minFilter===On||b.minFilter===Sf||b.minFilter===Eu||b.minFilter===zs)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(L,l.TEXTURE_WRAP_S,yt[b.wrapS]),l.texParameteri(L,l.TEXTURE_WRAP_T,yt[b.wrapT]),(L===l.TEXTURE_3D||L===l.TEXTURE_2D_ARRAY)&&l.texParameteri(L,l.TEXTURE_WRAP_R,yt[b.wrapR]),l.texParameteri(L,l.TEXTURE_MAG_FILTER,vt[b.magFilter]),l.texParameteri(L,l.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(l.texParameteri(L,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(L,l.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Rn||b.minFilter!==Eu&&b.minFilter!==zs||b.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");l.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function gt(L,b){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",B));const dt=b.source;let xt=v.get(dt);xt===void 0&&(xt={},v.set(dt,xt));const ut=ft(b);if(ut!==L.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,W=!0),xt[ut].usedTimes++;const Zt=xt[L.__cacheKey];Zt!==void 0&&(xt[L.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(b)),L.__cacheKey=ut,L.__webglTexture=xt[ut].texture}return W}function Tt(L,b,W){return Math.floor(Math.floor(L/W)/b)}function Bt(L,b,W,dt){const ut=L.updateRanges;if(ut.length===0)n.texSubImage2D(l.TEXTURE_2D,0,0,0,b.width,b.height,W,dt,b.data);else{ut.sort((Mt,Et)=>Mt.start-Et.start);let Zt=0;for(let Mt=1;Mt<ut.length;Mt++){const Et=ut[Zt],Pt=ut[Mt],Ot=Et.start+Et.count,Rt=Tt(Pt.start,b.width,4),oe=Tt(Et.start,b.width,4);Pt.start<=Ot+1&&Rt===oe&&Tt(Pt.start+Pt.count-1,b.width,4)===Rt?Et.count=Math.max(Et.count,Pt.start+Pt.count-Et.start):(++Zt,ut[Zt]=Pt)}ut.length=Zt+1;const Ct=l.getParameter(l.UNPACK_ROW_LENGTH),kt=l.getParameter(l.UNPACK_SKIP_PIXELS),te=l.getParameter(l.UNPACK_SKIP_ROWS);l.pixelStorei(l.UNPACK_ROW_LENGTH,b.width);for(let Mt=0,Et=ut.length;Mt<Et;Mt++){const Pt=ut[Mt],Ot=Math.floor(Pt.start/4),Rt=Math.ceil(Pt.count/4),oe=Ot%b.width,X=Math.floor(Ot/b.width),Ut=Rt,bt=1;l.pixelStorei(l.UNPACK_SKIP_PIXELS,oe),l.pixelStorei(l.UNPACK_SKIP_ROWS,X),n.texSubImage2D(l.TEXTURE_2D,0,oe,X,Ut,bt,W,dt,b.data)}L.clearUpdateRanges(),l.pixelStorei(l.UNPACK_ROW_LENGTH,Ct),l.pixelStorei(l.UNPACK_SKIP_PIXELS,kt),l.pixelStorei(l.UNPACK_SKIP_ROWS,te)}}function et(L,b,W){let dt=l.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=l.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=l.TEXTURE_3D);const xt=gt(L,b),ut=b.source;n.bindTexture(dt,L.__webglTexture,l.TEXTURE0+W);const Zt=a.get(ut);if(ut.version!==Zt.__version||xt===!0){n.activeTexture(l.TEXTURE0+W);const Ct=Ee.getPrimaries(Ee.workingColorSpace),kt=b.colorSpace===as?null:Ee.getPrimaries(b.colorSpace),te=b.colorSpace===as||Ct===kt?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,b.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,b.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Mt=T(b.image,!1,o.maxTextureSize);Mt=Le(b,Mt);const Et=u.convert(b.format,b.colorSpace),Pt=u.convert(b.type);let Ot=U(b.internalFormat,Et,Pt,b.colorSpace,b.isVideoTexture);it(dt,b);let Rt;const oe=b.mipmaps,X=b.isVideoTexture!==!0,Ut=Zt.__version===void 0||xt===!0,bt=ut.dataReady,zt=P(b,Mt);if(b.isDepthTexture)Ot=O(b.format===Ps,b.type),Ut&&(X?n.texStorage2D(l.TEXTURE_2D,1,Ot,Mt.width,Mt.height):n.texImage2D(l.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,Pt,null));else if(b.isDataTexture)if(oe.length>0){X&&Ut&&n.texStorage2D(l.TEXTURE_2D,zt,Ot,oe[0].width,oe[0].height);for(let St=0,_t=oe.length;St<_t;St++)Rt=oe[St],X?bt&&n.texSubImage2D(l.TEXTURE_2D,St,0,0,Rt.width,Rt.height,Et,Pt,Rt.data):n.texImage2D(l.TEXTURE_2D,St,Ot,Rt.width,Rt.height,0,Et,Pt,Rt.data);b.generateMipmaps=!1}else X?(Ut&&n.texStorage2D(l.TEXTURE_2D,zt,Ot,Mt.width,Mt.height),bt&&Bt(b,Mt,Et,Pt)):n.texImage2D(l.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,Pt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Ut&&n.texStorage3D(l.TEXTURE_2D_ARRAY,zt,Ot,oe[0].width,oe[0].height,Mt.depth);for(let St=0,_t=oe.length;St<_t;St++)if(Rt=oe[St],b.format!==Ai)if(Et!==null)if(X){if(bt)if(b.layerUpdates.size>0){const At=P_(Rt.width,Rt.height,b.format,b.type);for(const ee of b.layerUpdates){const Oe=Rt.data.subarray(ee*At/Rt.data.BYTES_PER_ELEMENT,(ee+1)*At/Rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,St,0,0,ee,Rt.width,Rt.height,1,Et,Oe)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,St,0,0,0,Rt.width,Rt.height,Mt.depth,Et,Rt.data)}else n.compressedTexImage3D(l.TEXTURE_2D_ARRAY,St,Ot,Rt.width,Rt.height,Mt.depth,0,Rt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?bt&&n.texSubImage3D(l.TEXTURE_2D_ARRAY,St,0,0,0,Rt.width,Rt.height,Mt.depth,Et,Pt,Rt.data):n.texImage3D(l.TEXTURE_2D_ARRAY,St,Ot,Rt.width,Rt.height,Mt.depth,0,Et,Pt,Rt.data)}else{X&&Ut&&n.texStorage2D(l.TEXTURE_2D,zt,Ot,oe[0].width,oe[0].height);for(let St=0,_t=oe.length;St<_t;St++)Rt=oe[St],b.format!==Ai?Et!==null?X?bt&&n.compressedTexSubImage2D(l.TEXTURE_2D,St,0,0,Rt.width,Rt.height,Et,Rt.data):n.compressedTexImage2D(l.TEXTURE_2D,St,Ot,Rt.width,Rt.height,0,Rt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?bt&&n.texSubImage2D(l.TEXTURE_2D,St,0,0,Rt.width,Rt.height,Et,Pt,Rt.data):n.texImage2D(l.TEXTURE_2D,St,Ot,Rt.width,Rt.height,0,Et,Pt,Rt.data)}else if(b.isDataArrayTexture)if(X){if(Ut&&n.texStorage3D(l.TEXTURE_2D_ARRAY,zt,Ot,Mt.width,Mt.height,Mt.depth),bt)if(b.layerUpdates.size>0){const St=P_(Mt.width,Mt.height,b.format,b.type);for(const _t of b.layerUpdates){const At=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,Pt,At)}b.clearLayerUpdates()}else n.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Pt,Mt.data)}else n.texImage3D(l.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,Pt,Mt.data);else if(b.isData3DTexture)X?(Ut&&n.texStorage3D(l.TEXTURE_3D,zt,Ot,Mt.width,Mt.height,Mt.depth),bt&&n.texSubImage3D(l.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Pt,Mt.data)):n.texImage3D(l.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,Pt,Mt.data);else if(b.isFramebufferTexture){if(Ut)if(X)n.texStorage2D(l.TEXTURE_2D,zt,Ot,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let At=0;At<zt;At++)n.texImage2D(l.TEXTURE_2D,At,Ot,St,_t,0,Et,Pt,null),St>>=1,_t>>=1}}else if(oe.length>0){if(X&&Ut){const St=qt(oe[0]);n.texStorage2D(l.TEXTURE_2D,zt,Ot,St.width,St.height)}for(let St=0,_t=oe.length;St<_t;St++)Rt=oe[St],X?bt&&n.texSubImage2D(l.TEXTURE_2D,St,0,0,Et,Pt,Rt):n.texImage2D(l.TEXTURE_2D,St,Ot,Et,Pt,Rt);b.generateMipmaps=!1}else if(X){if(Ut){const St=qt(Mt);n.texStorage2D(l.TEXTURE_2D,zt,Ot,St.width,St.height)}bt&&n.texSubImage2D(l.TEXTURE_2D,0,0,0,Et,Pt,Mt)}else n.texImage2D(l.TEXTURE_2D,0,Ot,Et,Pt,Mt);M(b)&&x(dt),Zt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ct(L,b,W){if(b.image.length!==6)return;const dt=gt(L,b),xt=b.source;n.bindTexture(l.TEXTURE_CUBE_MAP,L.__webglTexture,l.TEXTURE0+W);const ut=a.get(xt);if(xt.version!==ut.__version||dt===!0){n.activeTexture(l.TEXTURE0+W);const Zt=Ee.getPrimaries(Ee.workingColorSpace),Ct=b.colorSpace===as?null:Ee.getPrimaries(b.colorSpace),kt=b.colorSpace===as||Zt===Ct?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,b.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,b.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const te=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!te&&!Mt?Et[_t]=T(b.image[_t],!0,o.maxCubemapSize):Et[_t]=Mt?b.image[_t].image:b.image[_t],Et[_t]=Le(b,Et[_t]);const Pt=Et[0],Ot=u.convert(b.format,b.colorSpace),Rt=u.convert(b.type),oe=U(b.internalFormat,Ot,Rt,b.colorSpace),X=b.isVideoTexture!==!0,Ut=ut.__version===void 0||dt===!0,bt=xt.dataReady;let zt=P(b,Pt);it(l.TEXTURE_CUBE_MAP,b);let St;if(te){X&&Ut&&n.texStorage2D(l.TEXTURE_CUBE_MAP,zt,oe,Pt.width,Pt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ee=St[At];b.format!==Ai?Ot!==null?X?bt&&n.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ee.width,ee.height,Ot,ee.data):n.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,oe,ee.width,ee.height,0,ee.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ee.width,ee.height,Ot,Rt,ee.data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,oe,ee.width,ee.height,0,Ot,Rt,ee.data)}}}else{if(St=b.mipmaps,X&&Ut){St.length>0&&zt++;const _t=qt(Et[0]);n.texStorage2D(l.TEXTURE_CUBE_MAP,zt,oe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Rt,Et[_t].data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Et[_t].width,Et[_t].height,0,Ot,Rt,Et[_t].data);for(let At=0;At<St.length;At++){const Oe=St[At].image[_t].image;X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Oe.width,Oe.height,Ot,Rt,Oe.data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,oe,Oe.width,Oe.height,0,Ot,Rt,Oe.data)}}else{X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Rt,Et[_t]):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Ot,Rt,Et[_t]);for(let At=0;At<St.length;At++){const ee=St[At];X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Rt,ee.image[_t]):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,oe,Ot,Rt,ee.image[_t])}}}M(b)&&x(l.TEXTURE_CUBE_MAP),ut.__version=xt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function wt(L,b,W,dt,xt,ut){const Zt=u.convert(W.format,W.colorSpace),Ct=u.convert(W.type),kt=U(W.internalFormat,Zt,Ct,W.colorSpace),te=a.get(b),Mt=a.get(W);if(Mt.__renderTarget=b,!te.__hasExternalTextures){const Et=Math.max(1,b.width>>ut),Pt=Math.max(1,b.height>>ut);xt===l.TEXTURE_3D||xt===l.TEXTURE_2D_ARRAY?n.texImage3D(xt,ut,kt,Et,Pt,b.depth,0,Zt,Ct,null):n.texImage2D(xt,ut,kt,Et,Pt,0,Zt,Ct,null)}n.bindFramebuffer(l.FRAMEBUFFER,L),Ye(b)?f.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,dt,xt,Mt.__webglTexture,0,V(b)):(xt===l.TEXTURE_2D||xt>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,dt,xt,Mt.__webglTexture,ut),n.bindFramebuffer(l.FRAMEBUFFER,null)}function Gt(L,b,W){if(l.bindRenderbuffer(l.RENDERBUFFER,L),b.depthBuffer){const dt=b.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,ut=O(b.stencilBuffer,xt),Zt=b.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Ye(b)?f.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,V(b),ut,b.width,b.height):W?l.renderbufferStorageMultisample(l.RENDERBUFFER,V(b),ut,b.width,b.height):l.renderbufferStorage(l.RENDERBUFFER,ut,b.width,b.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,Zt,l.RENDERBUFFER,L)}else{const dt=b.textures;for(let xt=0;xt<dt.length;xt++){const ut=dt[xt],Zt=u.convert(ut.format,ut.colorSpace),Ct=u.convert(ut.type),kt=U(ut.internalFormat,Zt,Ct,ut.colorSpace);Ye(b)?f.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,V(b),kt,b.width,b.height):W?l.renderbufferStorageMultisample(l.RENDERBUFFER,V(b),kt,b.width,b.height):l.renderbufferStorage(l.RENDERBUFFER,kt,b.width,b.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function It(L,b,W){const dt=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(l.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=a.get(b.depthTexture);if(xt.__renderTarget=b,(!xt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=l.createTexture(),n.bindTexture(l.TEXTURE_CUBE_MAP,xt.__webglTexture),it(l.TEXTURE_CUBE_MAP,b.depthTexture);const te=u.convert(b.depthTexture.format),Mt=u.convert(b.depthTexture.type);let Et;b.depthTexture.format===Ea?Et=l.DEPTH_COMPONENT24:b.depthTexture.format===Ps&&(Et=l.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Et,b.width,b.height,0,te,Mt,null)}}else lt(b.depthTexture,0);const ut=xt.__webglTexture,Zt=V(b),Ct=dt?l.TEXTURE_CUBE_MAP_POSITIVE_X+W:l.TEXTURE_2D,kt=b.depthTexture.format===Ps?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ea)Ye(b)?f.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,kt,Ct,ut,0,Zt):l.framebufferTexture2D(l.FRAMEBUFFER,kt,Ct,ut,0);else if(b.depthTexture.format===Ps)Ye(b)?f.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,kt,Ct,ut,0,Zt):l.framebufferTexture2D(l.FRAMEBUFFER,kt,Ct,ut,0);else throw new Error("Unknown depthTexture format")}function he(L){const b=a.get(L),W=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const dt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=dt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let dt=0;dt<6;dt++)It(b.__webglFramebuffer[dt],L,dt);else{const dt=L.texture.mipmaps;dt&&dt.length>0?It(b.__webglFramebuffer[0],L,0):It(b.__webglFramebuffer,L,0)}else if(W){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(l.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=l.createRenderbuffer(),Gt(b.__webglDepthbuffer[dt],L,!1);else{const xt=L.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[dt];l.bindRenderbuffer(l.RENDERBUFFER,ut),l.framebufferRenderbuffer(l.FRAMEBUFFER,xt,l.RENDERBUFFER,ut)}}else{const dt=L.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(l.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(l.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=l.createRenderbuffer(),Gt(b.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,ut),l.framebufferRenderbuffer(l.FRAMEBUFFER,xt,l.RENDERBUFFER,ut)}}n.bindFramebuffer(l.FRAMEBUFFER,null)}function Ke(L,b,W){const dt=a.get(L);b!==void 0&&wt(dt.__webglFramebuffer,L,L.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),W!==void 0&&he(L)}function ge(L){const b=L.texture,W=a.get(L),dt=a.get(b);L.addEventListener("dispose",z);const xt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Zt=xt.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=l.createTexture()),dt.__version=b.version,h.memory.textures++),ut){W.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Ct]=[];for(let kt=0;kt<b.mipmaps.length;kt++)W.__webglFramebuffer[Ct][kt]=l.createFramebuffer()}else W.__webglFramebuffer[Ct]=l.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)W.__webglFramebuffer[Ct]=l.createFramebuffer()}else W.__webglFramebuffer=l.createFramebuffer();if(Zt)for(let Ct=0,kt=xt.length;Ct<kt;Ct++){const te=a.get(xt[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=l.createTexture(),h.memory.textures++)}if(L.samples>0&&Ye(L)===!1){W.__webglMultisampledFramebuffer=l.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(l.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const kt=xt[Ct];W.__webglColorRenderbuffer[Ct]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,W.__webglColorRenderbuffer[Ct]);const te=u.convert(kt.format,kt.colorSpace),Mt=u.convert(kt.type),Et=U(kt.internalFormat,te,Mt,kt.colorSpace,L.isXRRenderTarget===!0),Pt=V(L);l.renderbufferStorageMultisample(l.RENDERBUFFER,Pt,Et,L.width,L.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Ct,l.RENDERBUFFER,W.__webglColorRenderbuffer[Ct])}l.bindRenderbuffer(l.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=l.createRenderbuffer(),Gt(W.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(l.FRAMEBUFFER,null)}}if(ut){n.bindTexture(l.TEXTURE_CUBE_MAP,dt.__webglTexture),it(l.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let kt=0;kt<b.mipmaps.length;kt++)wt(W.__webglFramebuffer[Ct][kt],L,b,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,kt);else wt(W.__webglFramebuffer[Ct],L,b,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(b)&&x(l.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Ct=0,kt=xt.length;Ct<kt;Ct++){const te=xt[Ct],Mt=a.get(te);let Et=l.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),n.bindTexture(Et,Mt.__webglTexture),it(Et,te),wt(W.__webglFramebuffer,L,te,l.COLOR_ATTACHMENT0+Ct,Et,0),M(te)&&x(Et)}n.unbindTexture()}else{let Ct=l.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),n.bindTexture(Ct,dt.__webglTexture),it(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let kt=0;kt<b.mipmaps.length;kt++)wt(W.__webglFramebuffer[kt],L,b,l.COLOR_ATTACHMENT0,Ct,kt);else wt(W.__webglFramebuffer,L,b,l.COLOR_ATTACHMENT0,Ct,0);M(b)&&x(Ct),n.unbindTexture()}L.depthBuffer&&he(L)}function fe(L){const b=L.textures;for(let W=0,dt=b.length;W<dt;W++){const xt=b[W];if(M(xt)){const ut=w(L),Zt=a.get(xt).__webglTexture;n.bindTexture(ut,Zt),x(ut),n.unbindTexture()}}}const Ce=[],se=[];function Qe(L){if(L.samples>0){if(Ye(L)===!1){const b=L.textures,W=L.width,dt=L.height;let xt=l.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Zt=a.get(L),Ct=b.length>1;if(Ct)for(let te=0;te<b.length;te++)n.bindFramebuffer(l.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+te,l.RENDERBUFFER,null),n.bindFramebuffer(l.FRAMEBUFFER,Zt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+te,l.TEXTURE_2D,null,0);n.bindFramebuffer(l.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const kt=L.texture.mipmaps;kt&&kt.length>0?n.bindFramebuffer(l.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(l.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let te=0;te<b.length;te++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=l.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=l.STENCIL_BUFFER_BIT)),Ct){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,Zt.__webglColorRenderbuffer[te]);const Mt=a.get(b[te]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,Mt,0)}l.blitFramebuffer(0,0,W,dt,0,0,W,dt,xt,l.NEAREST),m===!0&&(Ce.length=0,se.length=0,Ce.push(l.COLOR_ATTACHMENT0+te),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ce.push(ut),se.push(ut),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,se)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(l.READ_FRAMEBUFFER,null),n.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<b.length;te++){n.bindFramebuffer(l.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+te,l.RENDERBUFFER,Zt.__webglColorRenderbuffer[te]);const Mt=a.get(b[te]).__webglTexture;n.bindFramebuffer(l.FRAMEBUFFER,Zt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+te,l.TEXTURE_2D,Mt,0)}n.bindFramebuffer(l.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[b])}}}function V(L){return Math.min(o.maxSamples,L.samples)}function Ye(L){const b=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(L){const b=h.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function Le(L,b){const W=L.colorSpace,dt=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==kr&&W!==as&&(Ee.getTransfer(W)===Be?(dt!==Ai||xt!==ei)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",W)),b}function qt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=at,this.setTexture2D=lt,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Ke,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wA(l,t){function n(a,o=as){let u;const h=Ee.getTransfer(o);if(a===ei)return l.UNSIGNED_BYTE;if(a===lp)return l.UNSIGNED_SHORT_4_4_4_4;if(a===up)return l.UNSIGNED_SHORT_5_5_5_1;if(a===Dv)return l.UNSIGNED_INT_5_9_9_9_REV;if(a===Uv)return l.UNSIGNED_INT_10F_11F_11F_REV;if(a===Rv)return l.BYTE;if(a===wv)return l.SHORT;if(a===el)return l.UNSIGNED_SHORT;if(a===op)return l.INT;if(a===Gi)return l.UNSIGNED_INT;if(a===Pi)return l.FLOAT;if(a===Ma)return l.HALF_FLOAT;if(a===Lv)return l.ALPHA;if(a===Nv)return l.RGB;if(a===Ai)return l.RGBA;if(a===Ea)return l.DEPTH_COMPONENT;if(a===Ps)return l.DEPTH_STENCIL;if(a===Ov)return l.RED;if(a===cp)return l.RED_INTEGER;if(a===Gr)return l.RG;if(a===hp)return l.RG_INTEGER;if(a===fp)return l.RGBA_INTEGER;if(a===ju||a===Ku||a===Qu||a===$u)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===ju)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===$u)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===ju)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ku)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Qu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===$u)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Sd||a===Md||a===Ed||a===bd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Sd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Md)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ed)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===bd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Td||a===Ad||a===Cd||a===Rd||a===wd||a===Dd||a===Ud)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Td||a===Ad)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===Rd)return u.COMPRESSED_R11_EAC;if(a===wd)return u.COMPRESSED_SIGNED_R11_EAC;if(a===Dd)return u.COMPRESSED_RG11_EAC;if(a===Ud)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Ld||a===Nd||a===Od||a===zd||a===Pd||a===Fd||a===Bd||a===Id||a===Hd||a===Vd||a===Gd||a===kd||a===Xd||a===Wd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Nd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===zd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Bd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Id)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Hd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Vd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Gd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===kd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Xd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Wd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===qd||a===Yd||a===Zd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===qd)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Yd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Zd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===jd||a===Kd||a===Qd||a===$d)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===jd)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Kd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Qd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===$d)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===nl?l.UNSIGNED_INT_24_8:l[a]!==void 0?l[a]:null}return{convert:n}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
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

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Qv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Xi({vertexShader:DA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ki(new oc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NA extends Wr{constructor(t,n){super();const a=this;let o=null,u=1,h=null,f="local-floor",m=1,p=null,g=null,_=null,v=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",M=new LA,x={},w=n.getContextAttributes();let U=null,O=null;const P=[],B=[],z=new Ie;let j=null;const R=new pi;R.viewport=new tn;const D=new pi;D.viewport=new tn;const k=[R,D],at=new kM;let nt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=P[et];return ct===void 0&&(ct=new Xf,P[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=P[et];return ct===void 0&&(ct=new Xf,P[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=P[et];return ct===void 0&&(ct=new Xf,P[et]=ct),ct.getHandSpace()};function lt(et){const ct=B.indexOf(et.inputSource);if(ct===-1)return;const wt=P[ct];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||h),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){o.removeEventListener("select",lt),o.removeEventListener("selectstart",lt),o.removeEventListener("selectend",lt),o.removeEventListener("squeeze",lt),o.removeEventListener("squeezestart",lt),o.removeEventListener("squeezeend",lt),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let et=0;et<P.length;et++){const ct=B[et];ct!==null&&(B[et]=null,P[et].disconnect(ct))}nt=null,ft=null,M.reset();for(const et in x)delete x[et];t.setRenderTarget(U),y=null,v=null,_=null,o=null,O=null,Bt.stop(),a.isPresenting=!1,t.setPixelRatio(j),t.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,a.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){f=et,a.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(et){if(o=et,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",lt),o.addEventListener("selectstart",lt),o.addEventListener("selectend",lt),o.addEventListener("squeeze",lt),o.addEventListener("squeezestart",lt),o.addEventListener("squeezeend",lt),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await n.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Gt=null,It=null;w.depth&&(It=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,wt=w.stencil?Ps:Ea,Gt=w.stencil?nl:Gi);const he={colorFormat:n.RGBA8,depthFormat:It,scaleFactor:u};_=this.getBinding(),v=_.createProjectionLayer(he),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new Ii(v.textureWidth,v.textureHeight,{format:Ai,type:ei,depthTexture:new al(v.textureWidth,v.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const wt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(o,n,wt),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Ii(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await o.requestReferenceSpace(f),Bt.setContext(o),Bt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(et){for(let ct=0;ct<et.removed.length;ct++){const wt=et.removed[ct],Gt=B.indexOf(wt);Gt>=0&&(B[Gt]=null,P[Gt].disconnect(wt))}for(let ct=0;ct<et.added.length;ct++){const wt=et.added[ct];let Gt=B.indexOf(wt);if(Gt===-1){for(let he=0;he<P.length;he++)if(he>=B.length){B.push(wt),Gt=he;break}else if(B[he]===null){B[he]=wt,Gt=he;break}if(Gt===-1)break}const It=P[Gt];It&&It.connect(wt)}}const $=new rt,yt=new rt;function vt(et,ct,wt){$.setFromMatrixPosition(ct.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const Gt=$.distanceTo(yt),It=ct.projectionMatrix.elements,he=wt.projectionMatrix.elements,Ke=It[14]/(It[10]-1),ge=It[14]/(It[10]+1),fe=(It[9]+1)/It[5],Ce=(It[9]-1)/It[5],se=(It[8]-1)/It[0],Qe=(he[8]+1)/he[0],V=Ke*se,Ye=Ke*Qe,Se=Gt/(-se+Qe),Le=Se*-se;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Le),et.translateZ(Se),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const qt=Ke+Se,L=ge+Se,b=V-Le,W=Ye+(Gt-Le),dt=fe*ge/L*qt,xt=Ce*ge/L*qt;et.projectionMatrix.makePerspective(b,W,dt,xt,qt,L),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function N(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(o===null)return;let ct=et.near,wt=et.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),at.near=D.near=R.near=ct,at.far=D.far=R.far=wt,(nt!==at.near||ft!==at.far)&&(o.updateRenderState({depthNear:at.near,depthFar:at.far}),nt=at.near,ft=at.far),at.layers.mask=et.layers.mask|6,R.layers.mask=at.layers.mask&3,D.layers.mask=at.layers.mask&5;const Gt=et.parent,It=at.cameras;N(at,Gt);for(let he=0;he<It.length;he++)N(It[he],Gt);It.length===2?vt(at,R,D):at.projectionMatrix.copy(R.projectionMatrix),it(et,at,Gt)};function it(et,ct,wt){wt===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Jd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(et){m=et,v!==null&&(v.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function(et){return x[et]};let gt=null;function Tt(et,ct){if(g=ct.getViewerPose(p||h),E=ct,g!==null){const wt=g.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let Gt=!1;wt.length!==at.cameras.length&&(at.cameras.length=0,Gt=!0);for(let ge=0;ge<wt.length;ge++){const fe=wt[ge];let Ce=null;if(y!==null)Ce=y.getViewport(fe);else{const Qe=_.getViewSubImage(v,fe);Ce=Qe.viewport,ge===0&&(t.setRenderTargetTextures(O,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(O))}let se=k[ge];se===void 0&&(se=new pi,se.layers.enable(ge),se.viewport=new tn,k[ge]=se),se.matrix.fromArray(fe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(fe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ge===0&&(at.matrix.copy(se.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Gt===!0&&at.cameras.push(se)}const It=o.enabledFeatures;if(It&&It.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const ge=_.getDepthInformation(wt[0]);ge&&ge.isValid&&ge.texture&&M.init(ge,o.renderState)}if(It&&It.includes("camera-access")&&T){t.state.unbindTexture(),_=a.getBinding();for(let ge=0;ge<wt.length;ge++){const fe=wt[ge].camera;if(fe){let Ce=x[fe];Ce||(Ce=new Qv,x[fe]=Ce);const se=_.getCameraImage(fe);Ce.sourceTexture=se}}}}for(let wt=0;wt<P.length;wt++){const Gt=B[wt],It=P[wt];Gt!==null&&It!==void 0&&It.update(Gt,ct,p||h)}gt&&gt(et,ct),ct.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ct}),E=null}const Bt=new Jv;Bt.setAnimationLoop(Tt),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const Us=new qr,OA=new fn;function zA(l,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,Yv(l)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,w,U,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),_(M,x)):x.isMeshPhongMaterial?(u(M,x),g(M,x)):x.isMeshStandardMaterial?(u(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,O)):x.isMeshMatcapMaterial?(u(M,x),E(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),T(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?m(M,x,w,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Xn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Xn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const w=t.get(x),U=w.envMap,O=w.envMapRotation;U&&(M.envMap.value=U,Us.copy(O),Us.x*=-1,Us.y*=-1,Us.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),M.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(Us)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,w,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*w,M.scale.value=U*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,w){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const w=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function PA(l,t,n,a){let o={},u={},h=[];const f=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const O=U.program;a.uniformBlockBinding(w,O)}function p(w,U){let O=o[w.id];O===void 0&&(E(w),O=g(w),o[w.id]=O,w.addEventListener("dispose",M));const P=U.program;a.updateUBOMapping(w,P);const B=t.render.frame;u[w.id]!==B&&(v(w),u[w.id]=B)}function g(w){const U=_();w.__bindingPointIndex=U;const O=l.createBuffer(),P=w.__size,B=w.usage;return l.bindBuffer(l.UNIFORM_BUFFER,O),l.bufferData(l.UNIFORM_BUFFER,P,B),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,U,O),O}function _(){for(let w=0;w<f;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const U=o[w.id],O=w.uniforms,P=w.__cache;l.bindBuffer(l.UNIFORM_BUFFER,U);for(let B=0,z=O.length;B<z;B++){const j=Array.isArray(O[B])?O[B]:[O[B]];for(let R=0,D=j.length;R<D;R++){const k=j[R];if(y(k,B,R,P)===!0){const at=k.__offset,nt=Array.isArray(k.value)?k.value:[k.value];let ft=0;for(let lt=0;lt<nt.length;lt++){const F=nt[lt],H=T(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,l.bufferSubData(l.UNIFORM_BUFFER,at+ft,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,ft),ft+=H.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,at,k.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function y(w,U,O,P){const B=w.value,z=U+"_"+O;if(P[z]===void 0)return typeof B=="number"||typeof B=="boolean"?P[z]=B:P[z]=B.clone(),!0;{const j=P[z];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return P[z]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function E(w){const U=w.uniforms;let O=0;const P=16;for(let z=0,j=U.length;z<j;z++){const R=Array.isArray(U[z])?U[z]:[U[z]];for(let D=0,k=R.length;D<k;D++){const at=R[D],nt=Array.isArray(at.value)?at.value:[at.value];for(let ft=0,lt=nt.length;ft<lt;ft++){const F=nt[ft],H=T(F),$=O%P,yt=$%H.boundary,vt=$+yt;O+=yt,vt!==0&&P-vt<H.storage&&(O+=P-vt),at.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=O,O+=H.storage}}}const B=O%P;return B>0&&(O+=P-B),w.__size=O,w.__cache={},this}function T(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",w),U}function M(w){const U=w.target;U.removeEventListener("dispose",M);const O=h.indexOf(U.__bindingPointIndex);h.splice(O,1),l.deleteBuffer(o[U.id]),delete o[U.id],delete u[U.id]}function x(){for(const w in o)l.deleteBuffer(o[w]);h=[],o={},u={}}return{bind:m,update:p,dispose:x}}const FA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function BA(){return Oi===null&&(Oi=new DM(FA,16,16,Gr,Ma),Oi.name="DFG_LUT",Oi.minFilter=On,Oi.magFilter=On,Oi.wrapS=_a,Oi.wrapT=_a,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class IA{constructor(t={}){const{canvas:n=iM(),context:a=null,depth:o=!0,stencil:u=!1,alpha:h=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=ei}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=h;const T=y,M=new Set([fp,hp,cp]),x=new Set([ei,Gi,el,nl,lp,up]),w=new Uint32Array(4),U=new Int32Array(4);let O=null,P=null;const B=[],z=[];let j=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=di;let k=0,at=0,nt=null,ft=-1,lt=null;const F=new tn,H=new tn;let $=null;const yt=new Ue(0);let vt=0,N=n.width,it=n.height,gt=1,Tt=null,Bt=null;const et=new tn(0,0,N,it),ct=new tn(0,0,N,it);let wt=!1;const Gt=new _p;let It=!1,he=!1;const Ke=new fn,ge=new rt,fe=new tn,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Qe(){return nt===null?gt:1}let V=a;function Ye(C,q){return n.getContext(C,q)}try{const C={alpha:!0,depth:o,stencil:u,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sp}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",Me,!1),V===null){const q="webgl2";if(V=Ye(q,C),V===null)throw Ye(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ae("WebGLRenderer: "+C.message),C}let Se,Le,qt,L,b,W,dt,xt,ut,Zt,Ct,kt,te,Mt,Et,Pt,Ot,Rt,oe,X,Ut,bt,zt,St;function _t(){Se=new B1(V),Se.init(),bt=new wA(V,Se),Le=new w1(V,Se,t,bt),qt=new CA(V,Se),Le.reversedDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),L=new V1(V),b=new fA,W=new RA(V,Se,qt,b,Le,bt,L),dt=new U1(R),xt=new F1(R),ut=new WM(V),zt=new C1(V,ut),Zt=new I1(V,ut,L,zt),Ct=new k1(V,Zt,ut,L),oe=new G1(V,Le,W),Pt=new D1(b),kt=new hA(R,dt,xt,Se,Le,zt,Pt),te=new zA(R,b),Mt=new pA,Et=new yA(Se),Rt=new A1(R,dt,xt,qt,Ct,E,m),Ot=new TA(R,Ct,Le),St=new PA(V,L,Le,qt),X=new R1(V,Se,L),Ut=new H1(V,Se,L),L.programs=kt.programs,R.capabilities=Le,R.extensions=Se,R.properties=b,R.renderLists=Mt,R.shadowMap=Ot,R.state=qt,R.info=L}_t(),T!==ei&&(j=new W1(T,n.width,n.height,o,u));const At=new NA(R,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(C){C!==void 0&&(gt=C,this.setSize(N,it,!1))},this.getSize=function(C){return C.set(N,it)},this.setSize=function(C,q,st=!0){if(At.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,it=q,n.width=Math.floor(C*gt),n.height=Math.floor(q*gt),st===!0&&(n.style.width=C+"px",n.style.height=q+"px"),j!==null&&j.setSize(n.width,n.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(N*gt,it*gt).floor()},this.setDrawingBufferSize=function(C,q,st){N=C,it=q,gt=st,n.width=Math.floor(C*st),n.height=Math.floor(q*st),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(T===ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(et)},this.setViewport=function(C,q,st,J){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,q,st,J),qt.viewport(F.copy(et).multiplyScalar(gt).round())},this.getScissor=function(C){return C.copy(ct)},this.setScissor=function(C,q,st,J){C.isVector4?ct.set(C.x,C.y,C.z,C.w):ct.set(C,q,st,J),qt.scissor(H.copy(ct).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(C){qt.setScissorTest(wt=C)},this.setOpaqueSort=function(C){Tt=C},this.setTransparentSort=function(C){Bt=C},this.getClearColor=function(C){return C.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,st=!0){let J=0;if(C){let Z=!1;if(nt!==null){const Dt=nt.texture.format;Z=M.has(Dt)}if(Z){const Dt=nt.texture.type,Ft=x.has(Dt),Lt=Rt.getClearColor(),Ht=Rt.getClearAlpha(),Xt=Lt.r,Qt=Lt.g,Wt=Lt.b;Ft?(w[0]=Xt,w[1]=Qt,w[2]=Wt,w[3]=Ht,V.clearBufferuiv(V.COLOR,0,w)):(U[0]=Xt,U[1]=Qt,U[2]=Wt,U[3]=Ht,V.clearBufferiv(V.COLOR,0,U))}else J|=V.COLOR_BUFFER_BIT}q&&(J|=V.DEPTH_BUFFER_BIT),st&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),Rt.dispose(),Mt.dispose(),Et.dispose(),b.dispose(),dt.dispose(),xt.dispose(),Ct.dispose(),zt.dispose(),St.dispose(),kt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Hs),At.removeEventListener("sessionend",Qr),wi.stop()};function ee(C){C.preventDefault(),__("WebGLRenderer: Context Lost."),D=!0}function Oe(){__("WebGLRenderer: Context Restored."),D=!1;const C=L.autoReset,q=Ot.enabled,st=Ot.autoUpdate,J=Ot.needsUpdate,Z=Ot.type;_t(),L.autoReset=C,Ot.enabled=q,Ot.autoUpdate=st,Ot.needsUpdate=J,Ot.type=Z}function Me(C){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function wn(C){const q=C.target;q.removeEventListener("dispose",wn),mi(q)}function mi(C){fl(C),b.remove(C)}function fl(C){const q=b.get(C).programs;q!==void 0&&(q.forEach(function(st){kt.releaseProgram(st)}),C.isShaderMaterial&&kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,st,J,Z,Dt){q===null&&(q=Ce);const Ft=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=ls(C,q,st,J,Z);qt.setMaterial(J,Ft);let Ht=st.index,Xt=1;if(J.wireframe===!0){if(Ht=Zt.getWireframeAttribute(st),Ht===void 0)return;Xt=2}const Qt=st.drawRange,Wt=st.attributes.position;let $t=Qt.start*Xt,Re=(Qt.start+Qt.count)*Xt;Dt!==null&&($t=Math.max($t,Dt.start*Xt),Re=Math.min(Re,(Dt.start+Dt.count)*Xt)),Ht!==null?($t=Math.max($t,0),Re=Math.min(Re,Ht.count)):Wt!=null&&($t=Math.max($t,0),Re=Math.min(Re,Wt.count));const Ze=Re-$t;if(Ze<0||Ze===1/0)return;zt.setup(Z,J,Lt,st,Ht);let Xe,Ne=X;if(Ht!==null&&(Xe=ut.get(Ht),Ne=Ut,Ne.setIndex(Xe)),Z.isMesh)J.wireframe===!0?(qt.setLineWidth(J.wireframeLinewidth*Qe()),Ne.setMode(V.LINES)):Ne.setMode(V.TRIANGLES);else if(Z.isLine){let jt=J.linewidth;jt===void 0&&(jt=1),qt.setLineWidth(jt*Qe()),Z.isLineSegments?Ne.setMode(V.LINES):Z.isLineLoop?Ne.setMode(V.LINE_LOOP):Ne.setMode(V.LINE_STRIP)}else Z.isPoints?Ne.setMode(V.POINTS):Z.isSprite&&Ne.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)il("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Ne.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const jt=Z._multiDrawStarts,we=Z._multiDrawCounts,ne=Z._multiDrawCount,xn=Ht?ut.get(Ht).bytesPerElement:1,Wi=b.get(J).currentProgram.getUniforms();for(let yn=0;yn<ne;yn++)Wi.setValue(V,"_gl_DrawID",yn),Ne.render(jt[yn]/xn,we[yn])}else if(Z.isInstancedMesh)Ne.renderInstances($t,Ze,Z.count);else if(st.isInstancedBufferGeometry){const jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,we=Math.min(st.instanceCount,jt);Ne.renderInstances($t,Ze,we)}else Ne.render($t,Ze)};function jr(C,q,st){C.transparent===!0&&C.side===ga&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,Gs(C,q,st),C.side=os,C.needsUpdate=!0,Gs(C,q,st),C.side=ga):Gs(C,q,st)}this.compile=function(C,q,st=null){st===null&&(st=C),P=Et.get(st),P.init(q),z.push(P),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),C!==st&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),P.setupLights();const J=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){const Lt=Dt[Ft];jr(Lt,st,Z),J.add(Lt)}else jr(Dt,st,Z),J.add(Dt)}),P=z.pop(),J},this.compileAsync=function(C,q,st=null){const J=this.compile(C,q,st);return new Promise(Z=>{function Dt(){if(J.forEach(function(Ft){b.get(Ft).currentProgram.isReady()&&J.delete(Ft)}),J.size===0){Z(C);return}setTimeout(Dt,10)}Se.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Is=null;function Kr(C){Is&&Is(C)}function Hs(){wi.stop()}function Qr(){wi.start()}const wi=new Jv;wi.setAnimationLoop(Kr),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){Is=C,At.setAnimationLoop(C),C===null?wi.stop():wi.start()},At.addEventListener("sessionstart",Hs),At.addEventListener("sessionend",Qr),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const st=At.enabled===!0&&At.isPresenting===!0,J=j!==null&&(nt===null||st)&&j.begin(R,nt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,q,nt),P=Et.get(C,z.length),P.init(q),z.push(P),Ke.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Gt.setFromProjectionMatrix(Ke,Fi,q.reversedDepth),he=this.localClippingEnabled,It=Pt.init(this.clippingPlanes,he),O=Mt.get(C,B.length),O.init(),B.push(O),At.enabled===!0&&At.isPresenting===!0){const Ft=R.xr.getDepthSensingMesh();Ft!==null&&ni(Ft,q,-1/0,R.sortObjects)}ni(C,q,0,R.sortObjects),O.finish(),R.sortObjects===!0&&O.sort(Tt,Bt),se=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,se&&Rt.addToRenderList(O,C),this.info.render.frame++,It===!0&&Pt.beginShadows();const Z=P.state.shadowsArray;if(Ot.render(Z,C,q),It===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&j.hasRenderPass())===!1){const Ft=O.opaque,Lt=O.transmissive;if(P.setupLights(),q.isArrayCamera){const Ht=q.cameras;if(Lt.length>0)for(let Xt=0,Qt=Ht.length;Xt<Qt;Xt++){const Wt=Ht[Xt];vn(Ft,Lt,C,Wt)}se&&Rt.render(C);for(let Xt=0,Qt=Ht.length;Xt<Qt;Xt++){const Wt=Ht[Xt];an(O,C,Wt,Wt.viewport)}}else Lt.length>0&&vn(Ft,Lt,C,q),se&&Rt.render(C),an(O,C,q)}nt!==null&&at===0&&(W.updateMultisampleRenderTarget(nt),W.updateRenderTargetMipmap(nt)),J&&j.end(R),C.isScene===!0&&C.onAfterRender(R,C,q),zt.resetDefaultState(),ft=-1,lt=null,z.pop(),z.length>0?(P=z[z.length-1],It===!0&&Pt.setGlobalState(R.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?O=B[B.length-1]:O=null};function ni(C,q,st,J){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Gt.intersectsSprite(C)){J&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ke);const Ft=Ct.update(C),Lt=C.material;Lt.visible&&O.push(C,Ft,Lt,st,fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Gt.intersectsObject(C))){const Ft=Ct.update(C),Lt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),fe.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),fe.copy(Ft.boundingSphere.center)),fe.applyMatrix4(C.matrixWorld).applyMatrix4(Ke)),Array.isArray(Lt)){const Ht=Ft.groups;for(let Xt=0,Qt=Ht.length;Xt<Qt;Xt++){const Wt=Ht[Xt],$t=Lt[Wt.materialIndex];$t&&$t.visible&&O.push(C,Ft,$t,st,fe.z,Wt)}}else Lt.visible&&O.push(C,Ft,Lt,st,fe.z,null)}}const Dt=C.children;for(let Ft=0,Lt=Dt.length;Ft<Lt;Ft++)ni(Dt[Ft],q,st,J)}function an(C,q,st,J){const{opaque:Z,transmissive:Dt,transparent:Ft}=C;P.setupLightsView(st),It===!0&&Pt.setGlobalState(R.clippingPlanes,st),J&&qt.viewport(F.copy(J)),Z.length>0&&gi(Z,q,st),Dt.length>0&&gi(Dt,q,st),Ft.length>0&&gi(Ft,q,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function vn(C,q,st,J){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[J.id]===void 0){const $t=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[J.id]=new Ii(1,1,{generateMipmaps:!0,type:$t?Ma:ei,minFilter:zs,samples:Le.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const Dt=P.state.transmissionRenderTarget[J.id],Ft=J.viewport||F;Dt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);const Lt=R.getRenderTarget(),Ht=R.getActiveCubeFace(),Xt=R.getActiveMipmapLevel();R.setRenderTarget(Dt),R.getClearColor(yt),vt=R.getClearAlpha(),vt<1&&R.setClearColor(16777215,.5),R.clear(),se&&Rt.render(st);const Qt=R.toneMapping;R.toneMapping=Bi;const Wt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),P.setupLightsView(J),It===!0&&Pt.setGlobalState(R.clippingPlanes,J),gi(C,st,J),W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Re=0,Ze=q.length;Re<Ze;Re++){const Xe=q[Re],{object:Ne,geometry:jt,material:we,group:ne}=Xe;if(we.side===ga&&Ne.layers.test(J.layers)){const xn=we.side;we.side=Xn,we.needsUpdate=!0,Vs(Ne,st,J,jt,we,ne),we.side=xn,we.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt))}R.setRenderTarget(Lt,Ht,Xt),R.setClearColor(yt,vt),Wt!==void 0&&(J.viewport=Wt),R.toneMapping=Qt}function gi(C,q,st){const J=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Dt=C.length;Z<Dt;Z++){const Ft=C[Z],{object:Lt,geometry:Ht,group:Xt}=Ft;let Qt=Ft.material;Qt.allowOverride===!0&&J!==null&&(Qt=J),Lt.layers.test(st.layers)&&Vs(Lt,q,st,Ht,Qt,Xt)}}function Vs(C,q,st,J,Z,Dt){C.onBeforeRender(R,q,st,J,Z,Dt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(R,q,st,J,C,Dt),Z.transparent===!0&&Z.side===ga&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,R.renderBufferDirect(st,q,J,Z,C,Dt),Z.side=os,Z.needsUpdate=!0,R.renderBufferDirect(st,q,J,Z,C,Dt),Z.side=ga):R.renderBufferDirect(st,q,J,Z,C,Dt),C.onAfterRender(R,q,st,J,Z,Dt)}function Gs(C,q,st){q.isScene!==!0&&(q=Ce);const J=b.get(C),Z=P.state.lights,Dt=P.state.shadowsArray,Ft=Z.state.version,Lt=kt.getParameters(C,Z.state,Dt,q,st),Ht=kt.getProgramCacheKey(Lt);let Xt=J.programs;J.environment=C.isMeshStandardMaterial?q.environment:null,J.fog=q.fog,J.envMap=(C.isMeshStandardMaterial?xt:dt).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Xt===void 0&&(C.addEventListener("dispose",wn),Xt=new Map,J.programs=Xt);let Qt=Xt.get(Ht);if(Qt!==void 0){if(J.currentProgram===Qt&&J.lightsStateVersion===Ft)return $r(C,Lt),Qt}else Lt.uniforms=kt.getUniforms(C),C.onBeforeCompile(Lt,R),Qt=kt.acquireProgram(Lt,Ht),Xt.set(Ht,Qt),J.uniforms=Lt.uniforms;const Wt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=Pt.uniform),$r(C,Lt),J.needsLights=Ta(C),J.lightsStateVersion=Ft,J.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Qt,J.uniformsList=null,Qt}function dl(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=ec.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function $r(C,q){const st=b.get(C);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function ls(C,q,st,J,Z){q.isScene!==!0&&(q=Ce),W.resetTextureUnits();const Dt=q.fog,Ft=J.isMeshStandardMaterial?q.environment:null,Lt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:kr,Ht=(J.isMeshStandardMaterial?xt:dt).get(J.envMap||Ft),Xt=J.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Qt=!!st.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Wt=!!st.morphAttributes.position,$t=!!st.morphAttributes.normal,Re=!!st.morphAttributes.color;let Ze=Bi;J.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ze=R.toneMapping);const Xe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ne=Xe!==void 0?Xe.length:0,jt=b.get(J),we=P.state.lights;if(It===!0&&(he===!0||C!==lt)){const Mn=C===lt&&J.id===ft;Pt.setState(J,C,Mn)}let ne=!1;J.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==we.state.version||jt.outputColorSpace!==Lt||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==Ht||J.fog===!0&&jt.fog!==Dt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Pt.numPlanes||jt.numIntersection!==Pt.numIntersection)||jt.vertexAlphas!==Xt||jt.vertexTangents!==Qt||jt.morphTargets!==Wt||jt.morphNormals!==$t||jt.morphColors!==Re||jt.toneMapping!==Ze||jt.morphTargetsCount!==Ne)&&(ne=!0):(ne=!0,jt.__version=J.version);let xn=jt.currentProgram;ne===!0&&(xn=Gs(J,q,Z));let Wi=!1,yn=!1,ii=!1;const ze=xn.getUniforms(),Sn=jt.uniforms;if(qt.useProgram(xn.program)&&(Wi=!0,yn=!0,ii=!0),J.id!==ft&&(ft=J.id,yn=!0),Wi||lt!==C){qt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ze.setValue(V,"projectionMatrix",C.projectionMatrix),ze.setValue(V,"viewMatrix",C.matrixWorldInverse);const En=ze.map.cameraPosition;En!==void 0&&En.setValue(V,ge.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&ze.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ze.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),lt!==C&&(lt=C,yn=!0,ii=!0)}if(jt.needsLights&&(we.state.directionalShadowMap.length>0&&ze.setValue(V,"directionalShadowMap",we.state.directionalShadowMap,W),we.state.spotShadowMap.length>0&&ze.setValue(V,"spotShadowMap",we.state.spotShadowMap,W),we.state.pointShadowMap.length>0&&ze.setValue(V,"pointShadowMap",we.state.pointShadowMap,W)),Z.isSkinnedMesh){ze.setOptional(V,Z,"bindMatrix"),ze.setOptional(V,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),ze.setValue(V,"boneTexture",Mn.boneTexture,W))}Z.isBatchedMesh&&(ze.setOptional(V,Z,"batchingTexture"),ze.setValue(V,"batchingTexture",Z._matricesTexture,W),ze.setOptional(V,Z,"batchingIdTexture"),ze.setValue(V,"batchingIdTexture",Z._indirectTexture,W),ze.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ze.setValue(V,"batchingColorTexture",Z._colorsTexture,W));const cn=st.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&oe.update(Z,st,xn),(yn||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,ze.setValue(V,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Sn.envMap.value=Ht,Sn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=BA()),yn&&(ze.setValue(V,"toneMappingExposure",R.toneMappingExposure),jt.needsLights&&Jr(Sn,ii),Dt&&J.fog===!0&&te.refreshFogUniforms(Sn,Dt),te.refreshMaterialUniforms(Sn,J,gt,it,P.state.transmissionRenderTarget[C.id]),ec.upload(V,dl(jt),Sn,W)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ec.upload(V,dl(jt),Sn,W),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ze.setValue(V,"center",Z.center),ze.setValue(V,"modelViewMatrix",Z.modelViewMatrix),ze.setValue(V,"normalMatrix",Z.normalMatrix),ze.setValue(V,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Mn=J.uniformsGroups;for(let En=0,ks=Mn.length;En<ks;En++){const _i=Mn[En];St.update(_i,xn),St.bind(_i,xn)}}return xn}function Jr(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Ta(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return at},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(C,q,st){const J=b.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=q,b.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:st,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const st=b.get(C);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const Aa=V.createFramebuffer();this.setRenderTarget=function(C,q=0,st=0){nt=C,k=q,at=st;let J=null,Z=!1,Dt=!1;if(C){const Lt=b.get(C);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),F.copy(C.viewport),H.copy(C.scissor),$=C.scissorTest,qt.viewport(F),qt.scissor(H),qt.setScissorTest($),ft=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(Lt.__hasExternalTextures)W.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qt=C.depthTexture;if(Lt.__boundDepthTexture!==Qt){if(Qt!==null&&b.has(Qt)&&(C.width!==Qt.image.width||C.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const Ht=C.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const Xt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[q])?J=Xt[q][st]:J=Xt[q],Z=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?J=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?J=Xt[st]:J=Xt,F.copy(C.viewport),H.copy(C.scissor),$=C.scissorTest}else F.copy(et).multiplyScalar(gt).floor(),H.copy(ct).multiplyScalar(gt).floor(),$=wt;if(st!==0&&(J=Aa),qt.bindFramebuffer(V.FRAMEBUFFER,J)&&qt.drawBuffers(C,J),qt.viewport(F),qt.scissor(H),qt.setScissorTest($),Z){const Lt=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,st)}else if(Dt){const Lt=q;for(let Ht=0;Ht<C.textures.length;Ht++){const Xt=b.get(C.textures[Ht]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,st,Lt)}}else if(C!==null&&st!==0){const Lt=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,st)}ft=-1},this.readRenderTargetPixels=function(C,q,st,J,Z,Dt,Ft,Lt=0){if(!(C&&C.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht){qt.bindFramebuffer(V.FRAMEBUFFER,Ht);try{const Xt=C.textures[Lt],Qt=Xt.format,Wt=Xt.type;if(!Le.textureFormatReadable(Qt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Wt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-J&&st>=0&&st<=C.height-Z&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(q,st,J,Z,bt.convert(Qt),bt.convert(Wt),Dt))}finally{const Xt=nt!==null?b.get(nt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(C,q,st,J,Z,Dt,Ft,Lt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht)if(q>=0&&q<=C.width-J&&st>=0&&st<=C.height-Z){qt.bindFramebuffer(V.FRAMEBUFFER,Ht);const Xt=C.textures[Lt],Qt=Xt.format,Wt=Xt.type;if(!Le.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(q,st,J,Z,bt.convert(Qt),bt.convert(Wt),0);const Re=nt!==null?b.get(nt).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Re);const Ze=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await aM(V,Ze,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer($t),V.deleteSync(Ze),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,st=0){const J=Math.pow(2,-st),Z=Math.floor(C.image.width*J),Dt=Math.floor(C.image.height*J),Ft=q!==null?q.x:0,Lt=q!==null?q.y:0;W.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Ft,Lt,Z,Dt),qt.unbindTexture()};const us=V.createFramebuffer(),Ca=V.createFramebuffer();this.copyTextureToTexture=function(C,q,st=null,J=null,Z=0,Dt=null){Dt===null&&(Z!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Z,Z=0):Dt=0);let Ft,Lt,Ht,Xt,Qt,Wt,$t,Re,Ze;const Xe=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(st!==null)Ft=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,Xt=st.min.x,Qt=st.min.y,Wt=st.isBox3?st.min.z:0;else{const cn=Math.pow(2,-Z);Ft=Math.floor(Xe.width*cn),Lt=Math.floor(Xe.height*cn),C.isDataArrayTexture?Ht=Xe.depth:C.isData3DTexture?Ht=Math.floor(Xe.depth*cn):Ht=1,Xt=0,Qt=0,Wt=0}J!==null?($t=J.x,Re=J.y,Ze=J.z):($t=0,Re=0,Ze=0);const Ne=bt.convert(q.format),jt=bt.convert(q.type);let we;q.isData3DTexture?(W.setTexture3D(q,0),we=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),we=V.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),we=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const ne=V.getParameter(V.UNPACK_ROW_LENGTH),xn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Wi=V.getParameter(V.UNPACK_SKIP_PIXELS),yn=V.getParameter(V.UNPACK_SKIP_ROWS),ii=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Xe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt);const ze=C.isDataArrayTexture||C.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const cn=b.get(C),Mn=b.get(q),En=b.get(cn.__renderTarget),ks=b.get(Mn.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,En.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let _i=0;_i<Ht;_i++)ze&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(C).__webglTexture,Z,Wt+_i),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Dt,Ze+_i)),V.blitFramebuffer(Xt,Qt,Ft,Lt,$t,Re,Ft,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||b.has(C)){const cn=b.get(C),Mn=b.get(q);qt.bindFramebuffer(V.READ_FRAMEBUFFER,us),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ca);for(let En=0;En<Ht;En++)ze?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,cn.__webglTexture,Z,Wt+En):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,cn.__webglTexture,Z),Sn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mn.__webglTexture,Dt,Ze+En):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mn.__webglTexture,Dt),Z!==0?V.blitFramebuffer(Xt,Qt,Ft,Lt,$t,Re,Ft,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):Sn?V.copyTexSubImage3D(we,Dt,$t,Re,Ze+En,Xt,Qt,Ft,Lt):V.copyTexSubImage2D(we,Dt,$t,Re,Xt,Qt,Ft,Lt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Sn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(we,Dt,$t,Re,Ze,Ft,Lt,Ht,Ne,jt,Xe.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(we,Dt,$t,Re,Ze,Ft,Lt,Ht,Ne,Xe.data):V.texSubImage3D(we,Dt,$t,Re,Ze,Ft,Lt,Ht,Ne,jt,Xe):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,$t,Re,Ft,Lt,Ne,jt,Xe.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,$t,Re,Xe.width,Xe.height,Ne,Xe.data):V.texSubImage2D(V.TEXTURE_2D,Dt,$t,Re,Ft,Lt,Ne,jt,Xe);V.pixelStorei(V.UNPACK_ROW_LENGTH,ne),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wi),V.pixelStorei(V.UNPACK_SKIP_ROWS,yn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ii),Dt===0&&q.generateMipmaps&&V.generateMipmap(we),qt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),qt.unbindTexture()},this.resetState=function(){k=0,at=0,nt=null,qt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ee._getUnpackColorSpace()}}class Vi{constructor(t,n,a,o,u="div"){this.parent=t,this.object=n,this.property=a,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(u),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Vi.nextNameID=Vi.nextNameID||0,this.$name.id=`lil-gui-name-${++Vi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(a)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const n=this.parent.add(this.object,this.property,t);return n.name(this._name),this.destroy(),n}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class HA extends Vi{constructor(t,n,a){super(t,n,a,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ip(l){let t,n;return(t=l.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?"#"+n:!1}const VA={isPrimitive:!0,match:l=>typeof l=="string",fromHexString:ip,toHexString:ip},sl={isPrimitive:!0,match:l=>typeof l=="number",fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},GA={isPrimitive:!1,match:l=>Array.isArray(l)||ArrayBuffer.isView(l),fromHexString(l,t,n=1){const a=sl.fromHexString(l);t[0]=(a>>16&255)/255*n,t[1]=(a>>8&255)/255*n,t[2]=(a&255)/255*n},toHexString([l,t,n],a=1){a=255/a;const o=l*a<<16^t*a<<8^n*a<<0;return sl.toHexString(o)}},kA={isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,t,n=1){const a=sl.fromHexString(l);t.r=(a>>16&255)/255*n,t.g=(a>>8&255)/255*n,t.b=(a&255)/255*n},toHexString({r:l,g:t,b:n},a=1){a=255/a;const o=l*a<<16^t*a<<8^n*a<<0;return sl.toHexString(o)}},XA=[VA,sl,GA,kA];function WA(l){return XA.find(t=>t.match(l))}class qA extends Vi{constructor(t,n,a,o){super(t,n,a,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=WA(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=ip(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const n=this._format.fromHexString(t);this.setValue(n)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Jf extends Vi{constructor(t,n,a){super(t,n,a,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class YA extends Vi{constructor(t,n,a,o,u,h){super(t,n,a,"lil-number"),this._initInput(),this.min(o),this.max(u);const f=h!==void 0;this.step(f?h:this._getImplicitStep(),f),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,n=!0){return this._step=t,this._stepExplicit=n,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let n=(t-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const n=()=>{let w=parseFloat(this.$input.value);isNaN(w)||(this._stepExplicit&&(w=this._snap(w)),this.setValue(this._clamp(w)))},a=w=>{const U=parseFloat(this.$input.value);isNaN(U)||(this._snapClampSetValue(U+w),this.$input.value=this.getValue())},o=w=>{w.key==="Enter"&&this.$input.blur(),w.code==="ArrowUp"&&(w.preventDefault(),a(this._step*this._arrowKeyMultiplier(w))),w.code==="ArrowDown"&&(w.preventDefault(),a(this._step*this._arrowKeyMultiplier(w)*-1))},u=w=>{this._inputFocused&&(w.preventDefault(),a(this._step*this._normalizeMouseWheel(w)))};let h=!1,f,m,p,g,_;const v=5,y=w=>{f=w.clientX,m=p=w.clientY,h=!0,g=this.getValue(),_=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",T)},E=w=>{if(h){const U=w.clientX-f,O=w.clientY-m;Math.abs(O)>v?(w.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(U)>v&&T()}if(!h){const U=w.clientY-p;_-=U*this._step*this._arrowKeyMultiplier(w),g+_>this._max?_=this._max-g:g+_<this._min&&(_=this._min-g),this._snapClampSetValue(g+_)}p=w.clientY},T=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",T)},M=()=>{this._inputFocused=!0},x=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",o),this.$input.addEventListener("wheel",u,{passive:!1}),this.$input.addEventListener("mousedown",y),this.$input.addEventListener("focus",M),this.$input.addEventListener("blur",x)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(x,w,U,O,P)=>(x-w)/(U-w)*(P-O)+O,n=x=>{const w=this.$slider.getBoundingClientRect();let U=t(x,w.left,w.right,this._min,this._max);this._snapClampSetValue(U)},a=x=>{this._setDraggingStyle(!0),n(x.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",u)},o=x=>{n(x.clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",u)};let h=!1,f,m;const p=x=>{x.preventDefault(),this._setDraggingStyle(!0),n(x.touches[0].clientX),h=!1},g=x=>{x.touches.length>1||(this._hasScrollBar?(f=x.touches[0].clientX,m=x.touches[0].clientY,h=!0):p(x),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",v))},_=x=>{if(h){const w=x.touches[0].clientX-f,U=x.touches[0].clientY-m;Math.abs(w)>Math.abs(U)?p(x):(window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v))}else x.preventDefault(),n(x.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v)},y=this._callOnFinishChange.bind(this),E=400;let T;const M=x=>{if(Math.abs(x.deltaX)<Math.abs(x.deltaY)&&this._hasScrollBar)return;x.preventDefault();const U=this._normalizeMouseWheel(x)*this._step;this._snapClampSetValue(this.getValue()+U),this.$input.value=this.getValue(),clearTimeout(T),T=setTimeout(y,E)};this.$slider.addEventListener("mousedown",a),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",M,{passive:!1})}_setDraggingStyle(t,n="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${n}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:n,deltaY:a}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(n=0,a=-t.wheelDelta/120,a*=this._stepExplicit?1:10),n+-a}_arrowKeyMultiplier(t){let n=this._stepExplicit?1:10;return t.shiftKey?n*=10:t.altKey&&(n/=10),n}_snap(t){let n=0;return this._hasMin?n=this._min:this._hasMax&&(n=this._max),t-=n,t=Math.round(t/this._step)*this._step,t+=n,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ZA extends Vi{constructor(t,n,a,o){super(t,n,a,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(o)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(n=>{const a=document.createElement("option");a.textContent=n,this.$select.appendChild(a)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),n=this._values.indexOf(t);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?t:this._names[n],this}}class jA extends Vi{constructor(t,n,a){super(t,n,a,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var KA=`.lil-gui {
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
}`;function QA(l){const t=document.createElement("style");t.innerHTML=l;const n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(t,n):document.head.appendChild(t)}let rv=!1;class xp{constructor({parent:t,autoPlace:n=t===void 0,container:a,width:o,title:u="Controls",closeFolders:h=!1,injectStyles:f=!0,touchStyles:m=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(u),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),m&&this.domElement.classList.add("lil-allow-touch-styles"),!rv&&f&&(QA(KA),rv=!0),a?a.appendChild(this.domElement):n&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=h}add(t,n,a,o,u){if(Object(a)===a)return new ZA(this,t,n,a);const h=t[n];switch(typeof h){case"number":return new YA(this,t,n,a,o,u);case"boolean":return new HA(this,t,n);case"string":return new jA(this,t,n);case"function":return new Jf(this,t,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,t,`
	value:`,h)}addColor(t,n,a=1){return new qA(this,t,n,a)}addFolder(t){const n=new xp({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(t,n=!0){return t.controllers&&this.controllers.forEach(a=>{a instanceof Jf||a._name in t.controllers&&a.load(t.controllers[a._name])}),n&&t.folders&&this.folders.forEach(a=>{a._title in t.folders&&a.load(t.folders[a._title])}),this}save(t=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(a=>{if(!(a instanceof Jf)){if(a._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${a._name}"`);n.controllers[a._name]=a.save()}}),t&&this.folders.forEach(a=>{if(a._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${a._title}"`);n.folders[a._title]=a.save()}),n}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("lil-transition");const a=u=>{u.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",a))};this.$children.addEventListener("transitionend",a);const o=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(a=>a.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(n=>{t=t.concat(n.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(n=>{t=t.concat(n.foldersRecursive())}),t}}const me={sizing:{paddingSmall:"4px",paddingMedium:"8px",spacingMedium:"8px",edgeMedium:"10px",edgeLarge:"32px"},colors:{text:"#ebebeb",overlay:"rgba(0, 0, 0, 0.5)"},typography:{fontFamily:"monospace",fontSizeSmall:"10px"},ui:{zIndex:"1000"}};me.panelBase={color:me.colors.text,background:me.colors.overlay,padding:me.sizing.paddingMedium,fontFamily:me.typography.fontFamily,fontSize:me.typography.fontSizeSmall,zIndex:me.ui.zIndex};me.buttonBase={color:me.colors.text,background:me.colors.overlay,padding:me.sizing.paddingMedium,border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",cursor:"pointer",fontFamily:me.typography.fontFamily,fontSize:me.typography.fontSizeSmall,pointerEvents:"auto",zIndex:me.ui.zIndex};class ax{constructor({container:t,title:n=null,style:a={},close:o=!1}={}){this.gui=new xp({title:n,autoPlace:!1}),Object.assign(this.gui.domElement.style,me.panelBase,a);const u=this.gui.domElement.querySelector(".lil-title");n===null&&u&&(u.style.display="none"),o&&this.gui.close(),t.appendChild(this.gui.domElement),this._proxies={}}addParams(t,n=!0){for(const a in t)this.#t(a,t[a]);n!==void 0&&this.show(n)}#t(t,n){const{value:a,min:o,max:u,step:h,label:f,onChange:m}=n,p={value:a},g=this.gui.add(p,"value",o,u,h).name(f??t);g.onChange(_=>{m?.(_)}),this._proxies[t]={proxy:p,controller:g,config:n}}reset(){for(const t in this._proxies){const{proxy:n,controller:a,config:o}=this._proxies[t];n.value=o.value,a.updateDisplay(),o.onChange?.(n.value)}}show(t){if(!this.gui)return;const n=this.gui.domElement.style.display!=="none";t===void 0?this.gui.domElement.style.display=n?"none":"block":this.gui.domElement.style.display=t?"block":"none"}destroy(){this.gui.destroy(),this.gui=null}}class sc{constructor({scene:t,camera:n,renderer:a,container:o,audioEngine:u,debugOverlay:h,title:f="Simulation",description:m="This is a simulation."}){if(this.onAudioEngineInit!==sc.prototype.onAudioEngineInit)throw new Error("onAudioEngineInit must not be overridden - override onAudioStart");if(this.onAudioEngineShutdown!==sc.prototype.onAudioEngineShutdown)throw new Error("onAudioEngineShutdown must not be overridden - override onAudioStop");this.scene=t,this.camera=n,this.renderer=a,this.container=o,this.audioEngine=u,this.audioBus=null,this.debugOverlay=h,this.gui=new ax({container:o,title:f,close:!0,style:{...me.panelBase,width:"100%"}}),this.showParams(!1)}onEnter(){}onExit(){}onPause(){}onResume(){}onAudioStart(){}onAudioStop(){}onAudioEngineInit(){this.audioBus=this.audioEngine.createSimBus(),this.onAudioStart()}async onAudioEngineShutdown(){this.audioBus&&(await this.audioEngine.releaseSimBus(this.audioBus),this.audioBus=null),this.onAudioStop()}showParams(t){this.gui.show(t)}update(t){}dispose(){this.debugOverlay?.dispose(),this.debugOverlay=null,this.gui?.destroy(),this.gui=null}}const sx="157",rx=300,ov=1e3,Xu=1001,lv=1002,$A=1006,JA=1008,tC=1009,eC=1023,nC=3e3,td=3001,ed="",nd="srgb",Wu=2e3,uv=2001;class ox{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let u=0,h=o.length;u<h;u++)o[u].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function yp(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Nn[l&255]+Nn[l>>8&255]+Nn[l>>16&255]+Nn[l>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]).toLowerCase()}function ma(l,t,n){return Math.max(t,Math.min(n,l))}class tl{constructor(t=0,n=0){tl.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ma(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-t.x,h=this.y-t.y;return this.x=u*a-h*o+t.x,this.y=u*o+h*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cl{constructor(t,n,a,o,u,h,f,m,p){cl.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,h,f,m,p)}set(t,n,a,o,u,h,f,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=u,g[5]=m,g[6]=a,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,h=a[0],f=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],y=a[5],E=a[8],T=o[0],M=o[3],x=o[6],w=o[1],U=o[4],O=o[7],P=o[2],B=o[5],z=o[8];return u[0]=h*T+f*w+m*P,u[3]=h*M+f*U+m*B,u[6]=h*x+f*O+m*z,u[1]=p*T+g*w+_*P,u[4]=p*M+g*U+_*B,u[7]=p*x+g*O+_*z,u[2]=v*T+y*w+E*P,u[5]=v*M+y*U+E*B,u[8]=v*x+y*O+E*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8];return n*h*g-n*f*p-a*u*g+a*f*m+o*u*p-o*h*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],_=g*h-f*p,v=f*m-g*u,y=p*u-h*m,E=n*_+a*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(o*p-g*a)*T,t[2]=(f*a-o*h)*T,t[3]=v*T,t[4]=(g*n-o*m)*T,t[5]=(o*u-f*n)*T,t[6]=y*T,t[7]=(a*m-p*n)*T,t[8]=(h*n-a*u)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,u,h,f){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*h+p*f)+h+t,-o*p,o*m,-o*(-p*h+m*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(id.makeScale(t,n)),this}rotate(t){return this.premultiply(id.makeRotation(-t)),this}translate(t,n){return this.premultiply(id.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const id=new cl;function cv(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}const hv={};function ad(l){l in hv||(hv[l]=!0,console.warn(l))}function sd(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}let zr;class iC{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zr===void 0&&(zr=cv("canvas")),zr.width=t.width,zr.height=t.height;const a=zr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=cv("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),u=o.data;for(let h=0;h<u.length;h++)u[h]=sd(u[h]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(sd(n[a]/255)*255):n[a]=sd(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let aC=0;class sC{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=yp(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let h=0,f=o.length;h<f;h++)o[h].isDataTexture?u.push(rd(o[h].image)):u.push(rd(o[h]))}else u=rd(o);a.url=u}return n||(t.images[this.uuid]=a),a}}function rd(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?iC.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rC=0;class Fs extends ox{constructor(t=Fs.DEFAULT_IMAGE,n=Fs.DEFAULT_MAPPING,a=Xu,o=Xu,u=$A,h=JA,f=eC,m=tC,p=Fs.DEFAULT_ANISOTROPY,g=ed){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=yp(),this.name="",this.source=new sC(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new tl(0,0),this.repeat=new tl(1,1),this.center=new tl(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cl,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(ad("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===td?nd:ed),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ov:t.x=t.x-Math.floor(t.x);break;case Xu:t.x=t.x<0?0:1;break;case lv:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ov:t.y=t.y-Math.floor(t.y);break;case Xu:t.y=t.y<0?0:1;break;case lv:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ad("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nd?td:nC}set encoding(t){ad("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===td?nd:ed}}Fs.DEFAULT_IMAGE=null;Fs.DEFAULT_MAPPING=rx;Fs.DEFAULT_ANISOTROPY=1;class hl{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,u,h,f){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3];const v=u[h+0],y=u[h+1],E=u[h+2],T=u[h+3];if(f===0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(f===1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=T;return}if(_!==T||m!==v||p!==y||g!==E){let M=1-f;const x=m*v+p*y+g*E+_*T,w=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const P=Math.sqrt(U),B=Math.atan2(P,x*w);M=Math.sin(M*B)/P,f=Math.sin(f*B)/P}const O=f*w;if(m=m*M+v*O,p=p*M+y*O,g=g*M+E*O,_=_*M+T*O,M===1-f){const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,u,h){const f=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=u[h],v=u[h+1],y=u[h+2],E=u[h+3];return t[n]=f*E+g*_+m*y-p*v,t[n+1]=m*E+g*v+p*_-f*y,t[n+2]=p*E+g*y+f*v-m*_,t[n+3]=g*E-f*_-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){const a=t._x,o=t._y,u=t._z,h=t._order,f=Math.cos,m=Math.sin,p=f(a/2),g=f(o/2),_=f(u/2),v=m(a/2),y=m(o/2),E=m(u/2);switch(h){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],u=n[8],h=n[1],f=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-o)*y}else if(a>f&&a>_){const y=2*Math.sqrt(1+a-f-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+h)/y,this._z=(u+p)/y}else if(f>_){const y=2*Math.sqrt(1+f-a-_);this._w=(u-p)/y,this._x=(o+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-f);this._w=(h-o)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ma(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,u=t._z,h=t._w,f=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+h*f+o*p-u*m,this._y=o*g+h*m+u*f-a*p,this._z=u*g+h*p+a*m-o*f,this._w=h*g-a*f-o*m-u*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,u=this._z,h=this._w;let f=h*t._w+a*t._x+o*t._y+u*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=h,this._x=a,this._y=o,this._z=u,this;const m=1-f*f;if(m<=Number.EPSILON){const y=1-n;return this._w=y*h+n*this._w,this._x=y*a+n*this._x,this._y=y*o+n*this._y,this._z=y*u+n*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),g=Math.atan2(p,f),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=h*_+this._w*v,this._x=a*_+this._x*v,this._y=o*_+this._y*v,this._z=u*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=Math.random(),n=Math.sqrt(1-t),a=Math.sqrt(t),o=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(n*Math.cos(o),a*Math.sin(u),a*Math.cos(u),n*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class mn{constructor(t=0,n=0,a=0){mn.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(fv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(fv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=t.elements,h=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*h,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*h,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*h,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,u=t.x,h=t.y,f=t.z,m=t.w,p=m*n+h*o-f*a,g=m*a+f*n-u*o,_=m*o+u*a-h*n,v=-u*n-h*a-f*o;return this.x=p*m+v*-u+g*-f-_*-h,this.y=g*m+v*-h+_*-u-p*-f,this.z=_*m+v*-f+p*-h-g*-u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,u=t.z,h=n.x,f=n.y,m=n.z;return this.x=o*m-u*f,this.y=u*h-a*m,this.z=a*f-o*h,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return od.copy(this).projectOnVector(t),this.sub(od)}reflect(t){return this.sub(od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ma(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,a=Math.sqrt(1-t**2);return this.x=a*Math.cos(n),this.y=a*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new mn,fv=new hl;class Sa{constructor(t,n,a,o,u,h,f,m,p,g,_,v,y,E,T,M){Sa.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,h,f,m,p,g,_,v,y,E,T,M)}set(t,n,a,o,u,h,f,m,p,g,_,v,y,E,T,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=u,x[5]=h,x[9]=f,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/Pr.setFromMatrixColumn(t,0).length(),u=1/Pr.setFromMatrixColumn(t,1).length(),h=1/Pr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*h,n[9]=a[9]*h,n[10]=a[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,u=t.z,h=Math.cos(a),f=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const v=h*g,y=h*_,E=f*g,T=f*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+E*p,n[5]=v-T*p,n[9]=-f*m,n[2]=T-v*p,n[6]=E+y*p,n[10]=h*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=p*g,T=p*_;n[0]=v+T*f,n[4]=E*f-y,n[8]=h*p,n[1]=h*_,n[5]=h*g,n[9]=-f,n[2]=y*f-E,n[6]=T+v*f,n[10]=h*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=p*g,T=p*_;n[0]=v-T*f,n[4]=-h*_,n[8]=E+y*f,n[1]=y+E*f,n[5]=h*g,n[9]=T-v*f,n[2]=-h*p,n[6]=f,n[10]=h*m}else if(t.order==="ZYX"){const v=h*g,y=h*_,E=f*g,T=f*_;n[0]=m*g,n[4]=E*p-y,n[8]=v*p+T,n[1]=m*_,n[5]=T*p+v,n[9]=y*p-E,n[2]=-p,n[6]=f*m,n[10]=h*m}else if(t.order==="YZX"){const v=h*m,y=h*p,E=f*m,T=f*p;n[0]=m*g,n[4]=T-v*_,n[8]=E*_+y,n[1]=_,n[5]=h*g,n[9]=-f*g,n[2]=-p*g,n[6]=y*_+E,n[10]=v-T*_}else if(t.order==="XZY"){const v=h*m,y=h*p,E=f*m,T=f*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+T,n[5]=h*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=f*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oC,t,lC)}lookAt(t,n,a){const o=this.elements;return ti.subVectors(t,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),is.crossVectors(a,ti),is.lengthSq()===0&&(Math.abs(a.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),is.crossVectors(a,ti)),is.normalize(),qu.crossVectors(ti,is),o[0]=is.x,o[4]=qu.x,o[8]=ti.x,o[1]=is.y,o[5]=qu.y,o[9]=ti.y,o[2]=is.z,o[6]=qu.z,o[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,h=a[0],f=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],y=a[13],E=a[2],T=a[6],M=a[10],x=a[14],w=a[3],U=a[7],O=a[11],P=a[15],B=o[0],z=o[4],j=o[8],R=o[12],D=o[1],k=o[5],at=o[9],nt=o[13],ft=o[2],lt=o[6],F=o[10],H=o[14],$=o[3],yt=o[7],vt=o[11],N=o[15];return u[0]=h*B+f*D+m*ft+p*$,u[4]=h*z+f*k+m*lt+p*yt,u[8]=h*j+f*at+m*F+p*vt,u[12]=h*R+f*nt+m*H+p*N,u[1]=g*B+_*D+v*ft+y*$,u[5]=g*z+_*k+v*lt+y*yt,u[9]=g*j+_*at+v*F+y*vt,u[13]=g*R+_*nt+v*H+y*N,u[2]=E*B+T*D+M*ft+x*$,u[6]=E*z+T*k+M*lt+x*yt,u[10]=E*j+T*at+M*F+x*vt,u[14]=E*R+T*nt+M*H+x*N,u[3]=w*B+U*D+O*ft+P*$,u[7]=w*z+U*k+O*lt+P*yt,u[11]=w*j+U*at+O*F+P*vt,u[15]=w*R+U*nt+O*H+P*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],u=t[12],h=t[1],f=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],T=t[7],M=t[11],x=t[15];return E*(+u*m*_-o*p*_-u*f*v+a*p*v+o*f*y-a*m*y)+T*(+n*m*y-n*p*v+u*h*v-o*h*y+o*p*g-u*m*g)+M*(+n*p*_-n*f*y-u*h*_+a*h*y+u*f*g-a*p*g)+x*(-o*f*g-n*m*_+n*f*v+o*h*_-a*h*v+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],T=t[13],M=t[14],x=t[15],w=_*M*p-T*v*p+T*m*y-f*M*y-_*m*x+f*v*x,U=E*v*p-g*M*p-E*m*y+h*M*y+g*m*x-h*v*x,O=g*T*p-E*_*p+E*f*y-h*T*y-g*f*x+h*_*x,P=E*_*m-g*T*m-E*f*v+h*T*v+g*f*M-h*_*M,B=n*w+a*U+o*O+u*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=w*z,t[1]=(T*v*u-_*M*u-T*o*y+a*M*y+_*o*x-a*v*x)*z,t[2]=(f*M*u-T*m*u+T*o*p-a*M*p-f*o*x+a*m*x)*z,t[3]=(_*m*u-f*v*u-_*o*p+a*v*p+f*o*y-a*m*y)*z,t[4]=U*z,t[5]=(g*M*u-E*v*u+E*o*y-n*M*y-g*o*x+n*v*x)*z,t[6]=(E*m*u-h*M*u-E*o*p+n*M*p+h*o*x-n*m*x)*z,t[7]=(h*v*u-g*m*u+g*o*p-n*v*p-h*o*y+n*m*y)*z,t[8]=O*z,t[9]=(E*_*u-g*T*u-E*a*y+n*T*y+g*a*x-n*_*x)*z,t[10]=(h*T*u-E*f*u+E*a*p-n*T*p-h*a*x+n*f*x)*z,t[11]=(g*f*u-h*_*u-g*a*p+n*_*p+h*a*y-n*f*y)*z,t[12]=P*z,t[13]=(g*T*o-E*_*o+E*a*v-n*T*v-g*a*M+n*_*M)*z,t[14]=(E*f*o-h*T*o-E*a*m+n*T*m+h*a*M-n*f*M)*z,t[15]=(h*_*o-g*f*o+g*a*m-n*_*m-h*a*v+n*f*v)*z,this}scale(t){const n=this.elements,a=t.x,o=t.y,u=t.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,h=t.x,f=t.y,m=t.z,p=u*h,g=u*f;return this.set(p*h+a,p*f-o*m,p*m+o*f,0,p*f+o*m,g*f+a,g*m-o*h,0,p*m-o*f,g*m+o*h,u*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,u,h){return this.set(1,a,u,0,t,1,h,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,u=n._x,h=n._y,f=n._z,m=n._w,p=u+u,g=h+h,_=f+f,v=u*p,y=u*g,E=u*_,T=h*g,M=h*_,x=f*_,w=m*p,U=m*g,O=m*_,P=a.x,B=a.y,z=a.z;return o[0]=(1-(T+x))*P,o[1]=(y+O)*P,o[2]=(E-U)*P,o[3]=0,o[4]=(y-O)*B,o[5]=(1-(v+x))*B,o[6]=(M+w)*B,o[7]=0,o[8]=(E+U)*z,o[9]=(M-w)*z,o[10]=(1-(v+T))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let u=Pr.set(o[0],o[1],o[2]).length();const h=Pr.set(o[4],o[5],o[6]).length(),f=Pr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],bi.copy(this);const p=1/u,g=1/h,_=1/f;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=_,bi.elements[9]*=_,bi.elements[10]*=_,n.setFromRotationMatrix(bi),a.x=u,a.y=h,a.z=f,this}makePerspective(t,n,a,o,u,h,f=Wu){const m=this.elements,p=2*u/(n-t),g=2*u/(a-o),_=(n+t)/(n-t),v=(a+o)/(a-o);let y,E;if(f===Wu)y=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(f===uv)y=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,a,o,u,h,f=Wu){const m=this.elements,p=1/(n-t),g=1/(a-o),_=1/(h-u),v=(n+t)*p,y=(a+o)*g;let E,T;if(f===Wu)E=(h+u)*_,T=-2*_;else if(f===uv)E=u*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Pr=new mn,bi=new Sa,oC=new mn(0,0,0),lC=new mn(1,1,1),is=new mn,qu=new mn,ti=new mn,dv=new Sa,pv=new hl;class cc{constructor(t=0,n=0,a=0,o=cc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,u=o[0],h=o[4],f=o[8],m=o[1],p=o[5],g=o[9],_=o[2],v=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(ma(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ma(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(ma(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ma(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ma(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ma(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return dv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return pv.setFromEuler(this),this.setFromQuaternion(pv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cc.DEFAULT_ORDER="XYZ";class uC{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cC=0;const mv=new mn,Fr=new hl,pa=new Sa,Yu=new mn,Qo=new mn,hC=new mn,fC=new hl,gv=new mn(1,0,0),_v=new mn(0,1,0),vv=new mn(0,0,1),dC={type:"added"},pC={type:"removed"};class rs extends ox{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cC++}),this.uuid=yp(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rs.DEFAULT_UP.clone();const t=new mn,n=new cc,a=new hl,o=new mn(1,1,1);function u(){a.setFromEuler(n,!1)}function h(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Sa},normalMatrix:{value:new cl}}),this.matrix=new Sa,this.matrixWorld=new Sa,this.matrixAutoUpdate=rs.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new uC,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Fr.setFromAxisAngle(t,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(t,n){return Fr.setFromAxisAngle(t,n),this.quaternion.premultiply(Fr),this}rotateX(t){return this.rotateOnAxis(gv,t)}rotateY(t){return this.rotateOnAxis(_v,t)}rotateZ(t){return this.rotateOnAxis(vv,t)}translateOnAxis(t,n){return mv.copy(t).applyQuaternion(this.quaternion),this.position.add(mv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(gv,t)}translateY(t){return this.translateOnAxis(_v,t)}translateZ(t){return this.translateOnAxis(vv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Yu.copy(t):Yu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Qo,Yu,this.up):pa.lookAt(Yu,Qo,this.up),this.quaternion.setFromRotationMatrix(pa),o&&(pa.extractRotation(o.matrixWorld),Fr.setFromRotationMatrix(pa),this.quaternion.premultiply(Fr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(dC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(pC)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const h=this.children[a].getObjectByProperty(t,n);if(h!==void 0)return h}}getObjectsByProperty(t,n){let a=[];this[t]===n&&a.push(this);for(let o=0,u=this.children.length;o<u;o++){const h=this.children[o].getObjectsByProperty(t,n);h.length>0&&(a=a.concat(h))}return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,hC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,fC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++){const u=n[a];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let u=0,h=o.length;u<h;u++){const f=o[u];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function u(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(u(t.materials,this.material[m]));o.material=f}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(u(t.animations,m))}}if(n){const f=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),v=h(t.skeletons),y=h(t.animations),E=h(t.nodes);f.length>0&&(a.geometries=f),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function h(f){const m=[];for(const p in f){const g=f[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}rs.DEFAULT_UP=new mn(0,1,0);rs.DEFAULT_MATRIX_AUTO_UPDATE=!0;rs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mC extends rs{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class gC{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=xv();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function xv(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sx}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sx);class _C{constructor(t){this.enabled=!1,this.debugData=new Map,this.debugDiv=document.createElement("div"),Object.assign(this.debugDiv.style,{...me.panelBase,position:"absolute",bottom:me.sizing.edgeMedium,left:me.sizing.edgeMedium,whiteSpace:"pre-line",display:"none"}),t.appendChild(this.debugDiv),document.addEventListener("keydown",n=>{n.key==="'"&&(this.enabled=!this.enabled,this.debugDiv&&(this.debugDiv.style.display=this.enabled?"block":"none"))})}addDebugCategory(t){this.debugData.has(t)||this.debugData.set(t,[])}addTextCategory(t,n,a){this.enabled&&(this.debugData.has(t)||this.addDebugCategory(t),this.debugData.get(t).push(`${n}: ${a}`))}addText(t,n){this.addTextCategory("Default",t,n)}update(){let t=`<strong>Debug Info</strong>
`;this.enabled&&(this.debugData.forEach((n,a)=>{t+=`
<strong>${a}</strong>
${n.join(`
`)}
`}),this.debugData.clear()),this.debugDiv.innerHTML=t}dispose(){this.debugDiv?.remove(),this.debugDiv=null,document.removeEventListener("keydown",this._onKeyDown),this._onKeyDown=null,this.debugData.clear()}}class vC{constructor(t,{onToggleAudio:n,onTogglePlay:a,onRestart:o}={}){this.onToggleAudio=n,this.onTogglePlay=a,this.onRestart=o,this.mainDiv=document.createElement("div"),Object.assign(this.mainDiv.style,{...me.panelBase,position:"absolute",bottom:me.sizing.edgeLarge,right:me.sizing.edgeLarge,display:"flex",flexDirection:"column",gap:me.sizing.spacingMedium,border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",pointerEvents:"auto"}),t.appendChild(this.mainDiv);const u=document.createElement("div");Object.assign(u.style,{position:"relative",display:"flex",gap:me.sizing.spacingMedium}),this.mainDiv.appendChild(u),this.audioBtn=this.#t("Audio: OFF"),this.playBtn=this.#t("Pause"),this.restartBtn=this.#t("Restart"),this.controlsBtn=this.#t("Controls"),this.audioBtn.onclick=()=>this.onToggleAudio?.(),this.playBtn.onclick=()=>this.onTogglePlay?.(),this.restartBtn.onclick=()=>this.#e(),this.controlsBtn.onclick=()=>this.#i(),u.append(this.controlsBtn,this.audioBtn,this.playBtn,this.restartBtn),this.guiContainer=document.createElement("div"),Object.assign(this.guiContainer.style,{display:"none"}),this.mainDiv.appendChild(this.guiContainer),this.gui=new ax({container:this.guiContainer,style:{...me.buttonBase,width:"100%"}})}setAudioEnabledLabel(t){this.audioBtn.textContent=t?"Audio: ON":"Audio: OFF"}setRunningLabel(t){this.playBtn.textContent=t?"Pause":"Resume"}#t(t=""){const n=document.createElement("button");return n.textContent=t,Object.assign(n.style,me.buttonBase),n.style.outline="none",n}#e(){window.confirm("Restart simulation?")&&this.onRestart?.()}#i(){const t=this.guiContainer.style.display==="none";this.guiContainer.style.display=t?"block":"none"}}class xC{#t=null;#e=null;#i=.02;constructor({enabled:t=!0,onInit:n=null}={}){this.#t=t,this.#e=n,this.audioContext=null,this.masterGain=null,this.simBus=null,this.#a()}#a(){const t=async()=>{this.audioContext||(this.#s(),this.#e&&(this.#e(this),this.#e=null)),this.audioContext.state==="suspended"&&await this.audioContext.resume(),document.removeEventListener("click",t),document.removeEventListener("keydown",t)};document.addEventListener("click",t),document.addEventListener("keydown",t)}#s(){this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.audioContext.createGain(),this.masterGain.gain.value=this.#t?1:0,this.masterGain.connect(this.audioContext.destination))}#n(t,n){const a=this.audioContext.currentTime;t.cancelScheduledValues(a),t.setTargetAtTime(n,a,this.#i)}isInitialised(){return this.audioContext!==null}isEnabled(){return this.#t}setAudioEnabled(t){if(this.#t=t,this.masterGain){let n=this.#t?1:0;this.#n(this.masterGain.gain,n)}}pauseSimulationAudio(){this.isInitialised()&&this.simBus&&this.#n(this.simBus.gain,0)}resumeSimulationAudio(){this.isInitialised()&&this.simBus&&this.#n(this.simBus.gain,1)}createSimBus(){if(!this.audioContext||!this.masterGain)return null;const t=this.audioContext.createGain();return t.gain.value=0,this.#n(t.gain,1),t.connect(this.masterGain),this.simBus=t,t}releaseSimBus(t){return!this.audioContext||!t?Promise.resolve():(this.#n(t.gain,0),new Promise(n=>{setTimeout(()=>{try{t.disconnect()}catch{}n()},(this.#i+.1)*1e3)}))}createOscillator(t="sine",n=440,a=null){if(!this.audioContext)return null;const o=this.audioContext.createOscillator(),u=this.audioContext.createGain();return o.type=t,o.frequency.value=n,u.gain.value=.5,o.connect(u),a?u.connect(a):u.connect(this.masterGain),o.start(),{osc:o,gainNode:u}}dispose(){this.audioContext&&(this.audioContext.close(),this.audioContext=null,this.masterGain=null)}}class yC{constructor(t){this.autoDispose=!0,this.messageDiv=document.createElement("div"),Object.assign(this.messageDiv.style,{...me.panelBase,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:"0",transition:"opacity 0.5s ease",pointerEvents:"none",textAlign:"center",zIndex:"1000",display:"none"}),t.appendChild(this.messageDiv),this.timeoutId=null}show(t,n=3){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),this.messageDiv.textContent=t,this.messageDiv.style.display="block",requestAnimationFrame(()=>{this.messageDiv.style.opacity="1"}),n>=0&&(this.timeoutId=setTimeout(()=>{this.hide()},n*1e3))}hide(){this.messageDiv.style.opacity="0",setTimeout(()=>{this.messageDiv.style.display="none",this.timeoutId=null,this.autoDispose&&this.dispose()},500)}dispose(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),this.messageDiv.remove(),this.messageDiv=null,this.parentDiv=null}}function SC(){if(document.getElementById("vsounds-style"))return;const l=document.createElement("style");l.id="vsounds-style",l.textContent=`
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
      --background-color: ${me.colors.overlay};
      --text-color: ${me.colors.text};
      --title-background-color: ${me.colors.overlay};
      --title-text-color: ${me.colors.text};
      --widget-color: #424242;
      --hover-color: #4f4f4f;
      --focus-color: #595959;
      --number-color: ${me.colors.text};
      --string-color: ${me.colors.text};
      --font-size: 11px;
      --input-font-size: 11px;
      --font-family: ${me.typography.fontFamily};
      --font-family-mono: ${me.typography.fontFamily};
      --padding: ${me.sizing.paddingSmall};
      --spacing: ${me.sizing.spacingMedium};
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
  `,document.head.appendChild(l)}class MC{constructor(t,n,a){SC(),this.renderer=t,this.camera=n,this.container=a,this.audioEngine=new xC({enabled:!0,onInit:()=>this.onAudioEngineInit()}),this.scene=new mC,this.clock=new gC,this.current=null,this.currentSimClass=null,this.paused=!1,this.audioEnabled=this.audioEngine?.isEnabled()??!0,this.debugOverlay=new _C(a),this.settingsOverlay=new vC(a,{onToggleAudio:()=>this.toggleAudio(),onTogglePlay:()=>this.togglePause(),onRestart:()=>this.restartSimulation()}),this.settingsOverlay.setAudioEnabledLabel(this.audioEnabled),this.settingsOverlay.setRunningLabel(!this.paused),this.messageOverlay=new yC(a),this.messageOverlay.autoDispose=!1,this.messageOverlay.show("Audio will start automatically after a click or key press.",3),this.simSpeed=1,this.settingsOverlay.gui.addParams({speed:{value:this.simSpeed,min:0,max:2,step:.01,label:"Time Dilation",onChange:o=>this.simSpeed=o}})}toggleAudio(){this.audioEnabled=!this.audioEnabled,this.audioEngine?.setAudioEnabled(this.audioEnabled),this.settingsOverlay.setAudioEnabledLabel(this.audioEnabled)}togglePause(){this.paused=!this.paused,this.paused?(this.messageOverlay.show("Simulation paused.",-1),this.pauseSimulation()):(this.messageOverlay.hide(),this.resumeSimulation()),this.settingsOverlay.setRunningLabel(!this.paused)}onAudioEngineInit(){this.current&&(this.current.onAudioEngineInit?.(),this.paused&&this.audioEngine.pauseSimulationAudio())}restartSimulation(){!this.current||!this.currentSimClass||this.setSimulation(this.currentSimClass)}pauseSimulation(){this.current&&(this.paused=!0,this.audioEngine.pauseSimulationAudio(),this.current.onPause?.())}resumeSimulation(){this.current&&(this.paused=!1,this.clock.getDelta(),this.audioEngine.resumeSimulationAudio(),this.current.onResume?.())}async setSimulation(t){this.current&&(await this.current.onAudioEngineShutdown(),this.current.onExit(),this.current.dispose?.(),this._clearSim()),this.currentSimClass=t,this.current=new t({scene:this.scene,camera:this.camera,renderer:this.renderer,container:this.settingsOverlay.mainDiv,debugOverlay:this.debugOverlay,audioEngine:this.audioEngine}),this.current.onEnter(),this.audioEngine.isInitialised()&&this.current.onAudioEngineInit?.(),this.paused&&this.togglePause(),this.resetGlobalParams()}resetGlobalParams(){this.settingsOverlay.gui.reset()}update(){if(!this.current)return;let t=this.clock.getDelta();t*=this.simSpeed,this.paused||this.current.update(t),this.renderer.render(this.scene,this.camera)}_clearSim(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0])}}const lx={VSSimBase:sc,VSSimsManager:MC};class EC extends lx.VSSimBase{onEnter(){const t=new GM(16777215,.25);this.scene.add(t);const n=new Yr,a=new PM({color:2434341});this.cube=new ki(n,a),this.scene.add(this.cube);const o=new VM(16777215,5);this.scene.add(o),this.gui.addParams({cubeSize:{value:1,min:.5,max:3,step:.1,label:"Cube Size",onChange:u=>{this.cube.scale.set(u,u,u)}}},!0)}onAudioStart(){const{osc:t,gainNode:n}=this.audioEngine.createOscillator("sine",220,this.audioBus);this.osc=t,this.gain=n}update(t){this.cube.rotation.x+=.5*t,this.cube.rotation.y+=.5*t,this.debugOverlay.addTextCategory("Cube","Rotation",`${this.cube.rotation.x.toFixed(2)}, ${this.cube.rotation.y.toFixed(2)}, ${this.cube.rotation.z.toFixed(2)}`),this.debugOverlay.addTextCategory("Cube","Size",this.cube.scale.x.toFixed(2)),this.debugOverlay.update()}onExit(){this.scene.background=null}}function bC({container:l}){_S.useEffect(()=>{if(!l){console.error("[sim-temp] Cannot init simulation app – invalid container");return}const t=l.clientWidth,n=l.clientHeight,a=75,o=t/n,u=.1,h=1e3,f=new pi(a,o,u,h);f.position.z=5;const m=new IA({antialias:!0});m.setSize(t,n),m.setClearColor(16119285,1);var p=function(){m.setSize(l.offsetWidth,l.offsetHeight),f.aspect=l.offsetWidth/l.offsetHeight,f.updateProjectionMatrix()};window.addEventListener("resize",p),l.appendChild(m.domElement);const g=new lx.VSSimsManager(m,f,l);g.setSimulation(EC);var _=function(){g.update()},v=function(){requestAnimationFrame(v),_()};v()},[l])}function TC(l){bS.createRoot(l).render(mS.jsx(bC,{container:l}))}function AC(l){return l.split(/[^a-zA-Z0-9]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}const CC="mount"+AC("sim-temp")+"App";window[CC]=TC;
