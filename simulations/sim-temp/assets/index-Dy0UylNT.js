(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();var Ef={exports:{}},Ko={};var d_;function wS(){if(d_)return Ko;d_=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,u){var h=null;if(u!==void 0&&(h=""+u),r.key!==void 0&&(h=""+r.key),"key"in r){u={};for(var f in r)f!=="key"&&(u[f]=r[f])}else u=r;return r=u.ref,{$$typeof:l,type:a,key:h,ref:r!==void 0?r:null,props:u}}return Ko.Fragment=t,Ko.jsx=n,Ko.jsxs=n,Ko}var p_;function DS(){return p_||(p_=1,Ef.exports=wS()),Ef.exports}var US=DS(),bf={exports:{}},se={};var m_;function LS(){if(m_)return se;m_=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(O,nt,vt){this.props=O,this.context=nt,this.refs=M,this.updater=vt||E}x.prototype.isReactComponent={},x.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function L(O,nt,vt){this.props=O,this.context=nt,this.refs=M,this.updater=vt||E}var z=L.prototype=new D;z.constructor=L,T(z,x.prototype),z.isPureReactComponent=!0;var P=Array.isArray;function I(){}var w={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function R(O,nt,vt){var Rt=vt.ref;return{$$typeof:l,type:O,key:nt,ref:Rt!==void 0?Rt:null,props:vt}}function U(O,nt){return R(O.type,nt,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===l}function tt(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(vt){return nt[vt]})}var et=/\/+/g;function dt(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?tt(""+O.key):nt.toString(36)}function ut(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,nt,vt,Rt,It){var it=typeof O;(it==="undefined"||it==="boolean")&&(O=null);var ft=!1;if(O===null)ft=!0;else switch(it){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(O.$$typeof){case l:case t:ft=!0;break;case _:return ft=O._init,F(ft(O._payload),nt,vt,Rt,It)}}if(ft)return It=It(O),ft=Rt===""?"."+dt(O,0):Rt,P(It)?(vt="",ft!=null&&(vt=ft.replace(et,"$&/")+"/"),F(It,nt,vt,"",function(Bt){return Bt})):It!=null&&(k(It)&&(It=U(It,vt+(It.key==null||O&&O.key===It.key?"":(""+It.key).replace(et,"$&/")+"/")+ft)),nt.push(It)),1;ft=0;var Nt=Rt===""?".":Rt+":";if(P(O))for(var Vt=0;Vt<O.length;Vt++)Rt=O[Vt],it=Nt+dt(Rt,Vt),ft+=F(Rt,nt,vt,it,It);else if(Vt=y(O),typeof Vt=="function")for(O=Vt.call(O),Vt=0;!(Rt=O.next()).done;)Rt=Rt.value,it=Nt+dt(Rt,Vt++),ft+=F(Rt,nt,vt,it,It);else if(it==="object"){if(typeof O.then=="function")return F(ut(O),nt,vt,Rt,It);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ft}function H(O,nt,vt){if(O==null)return O;var Rt=[],It=0;return F(O,Rt,"","",function(it){return nt.call(vt,it,It++)}),Rt}function J(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(vt){(O._status===0||O._status===-1)&&(O._status=1,O._result=vt)},function(vt){(O._status===0||O._status===-1)&&(O._status=2,O._result=vt)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var bt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},St={map:H,forEach:function(O,nt,vt){H(O,function(){nt.apply(this,arguments)},vt)},count:function(O){var nt=0;return H(O,function(){nt++}),nt},toArray:function(O){return H(O,function(nt){return nt})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=g,se.Children=St,se.Component=x,se.Fragment=n,se.Profiler=r,se.PureComponent=L,se.StrictMode=a,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return w.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,nt,vt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Rt=T({},O.props),It=O.key;if(nt!=null)for(it in nt.key!==void 0&&(It=""+nt.key),nt)!Z.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(Rt[it]=nt[it]);var it=arguments.length-2;if(it===1)Rt.children=vt;else if(1<it){for(var ft=Array(it),Nt=0;Nt<it;Nt++)ft[Nt]=arguments[Nt+2];Rt.children=ft}return R(O.type,It,Rt)},se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},se.createElement=function(O,nt,vt){var Rt,It={},it=null;if(nt!=null)for(Rt in nt.key!==void 0&&(it=""+nt.key),nt)Z.call(nt,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(It[Rt]=nt[Rt]);var ft=arguments.length-2;if(ft===1)It.children=vt;else if(1<ft){for(var Nt=Array(ft),Vt=0;Vt<ft;Vt++)Nt[Vt]=arguments[Vt+2];It.children=Nt}if(O&&O.defaultProps)for(Rt in ft=O.defaultProps,ft)It[Rt]===void 0&&(It[Rt]=ft[Rt]);return R(O,it,It)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:f,render:O}},se.isValidElement=k,se.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:J}},se.memo=function(O,nt){return{$$typeof:p,type:O,compare:nt===void 0?null:nt}},se.startTransition=function(O){var nt=w.T,vt={};w.T=vt;try{var Rt=O(),It=w.S;It!==null&&It(vt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(I,bt)}catch(it){bt(it)}finally{nt!==null&&vt.types!==null&&(nt.types=vt.types),w.T=nt}},se.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},se.use=function(O){return w.H.use(O)},se.useActionState=function(O,nt,vt){return w.H.useActionState(O,nt,vt)},se.useCallback=function(O,nt){return w.H.useCallback(O,nt)},se.useContext=function(O){return w.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,nt){return w.H.useDeferredValue(O,nt)},se.useEffect=function(O,nt){return w.H.useEffect(O,nt)},se.useEffectEvent=function(O){return w.H.useEffectEvent(O)},se.useId=function(){return w.H.useId()},se.useImperativeHandle=function(O,nt,vt){return w.H.useImperativeHandle(O,nt,vt)},se.useInsertionEffect=function(O,nt){return w.H.useInsertionEffect(O,nt)},se.useLayoutEffect=function(O,nt){return w.H.useLayoutEffect(O,nt)},se.useMemo=function(O,nt){return w.H.useMemo(O,nt)},se.useOptimistic=function(O,nt){return w.H.useOptimistic(O,nt)},se.useReducer=function(O,nt,vt){return w.H.useReducer(O,nt,vt)},se.useRef=function(O){return w.H.useRef(O)},se.useState=function(O){return w.H.useState(O)},se.useSyncExternalStore=function(O,nt,vt){return w.H.useSyncExternalStore(O,nt,vt)},se.useTransition=function(){return w.H.useTransition()},se.version="19.2.3",se}var g_;function _p(){return g_||(g_=1,bf.exports=LS()),bf.exports}var NS=_p(),Tf={exports:{}},Qo={},Af={exports:{}},Cf={};var __;function OS(){return __||(__=1,(function(l){function t(F,H){var J=F.length;F.push(H);t:for(;0<J;){var bt=J-1>>>1,St=F[bt];if(0<r(St,H))F[bt]=H,F[J]=St,J=bt;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],J=F.pop();if(J!==H){F[0]=J;t:for(var bt=0,St=F.length,O=St>>>1;bt<O;){var nt=2*(bt+1)-1,vt=F[nt],Rt=nt+1,It=F[Rt];if(0>r(vt,J))Rt<St&&0>r(It,vt)?(F[bt]=It,F[Rt]=J,bt=Rt):(F[bt]=vt,F[nt]=J,bt=nt);else if(Rt<St&&0>r(It,J))F[bt]=It,F[Rt]=J,bt=Rt;else break t}}return H}function r(F,H){var J=F.sortIndex-H.sortIndex;return J!==0?J:F.id-H.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;l.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();l.unstable_now=function(){return h.now()-f}}var m=[],p=[],_=1,g=null,v=3,y=!1,E=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function z(F){for(var H=n(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=F)a(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=n(p)}}function P(F){if(T=!1,z(F),!E)if(n(m)!==null)E=!0,I||(I=!0,tt());else{var H=n(p);H!==null&&ut(P,H.startTime-F)}}var I=!1,w=-1,Z=5,R=-1;function U(){return M?!0:!(l.unstable_now()-R<Z)}function k(){if(M=!1,I){var F=l.unstable_now();R=F;var H=!0;try{t:{E=!1,T&&(T=!1,D(w),w=-1),y=!0;var J=v;try{e:{for(z(F),g=n(m);g!==null&&!(g.expirationTime>F&&U());){var bt=g.callback;if(typeof bt=="function"){g.callback=null,v=g.priorityLevel;var St=bt(g.expirationTime<=F);if(F=l.unstable_now(),typeof St=="function"){g.callback=St,z(F),H=!0;break e}g===n(m)&&a(m),z(F)}else a(m);g=n(m)}if(g!==null)H=!0;else{var O=n(p);O!==null&&ut(P,O.startTime-F),H=!1}}break t}finally{g=null,v=J,y=!1}H=void 0}}finally{H?tt():I=!1}}}var tt;if(typeof L=="function")tt=function(){L(k)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,dt=et.port2;et.port1.onmessage=k,tt=function(){dt.postMessage(null)}}else tt=function(){x(k,0)};function ut(F,H){w=x(function(){F(l.unstable_now())},H)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(F){F.callback=null},l.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<F?Math.floor(1e3/F):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var J=v;v=H;try{return F()}finally{v=J}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=v;v=F;try{return H()}finally{v=J}},l.unstable_scheduleCallback=function(F,H,J){var bt=l.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?bt+J:bt):J=bt,F){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=J+St,F={id:_++,callback:H,priorityLevel:F,startTime:J,expirationTime:St,sortIndex:-1},J>bt?(F.sortIndex=J,t(p,F),n(m)===null&&F===n(p)&&(T?(D(w),w=-1):T=!0,ut(P,J-bt))):(F.sortIndex=St,t(m,F),E||y||(E=!0,I||(I=!0,tt()))),F},l.unstable_shouldYield=U,l.unstable_wrapCallback=function(F){var H=v;return function(){var J=v;v=H;try{return F.apply(this,arguments)}finally{v=J}}}})(Cf)),Cf}var v_;function zS(){return v_||(v_=1,Af.exports=OS()),Af.exports}var Rf={exports:{}},Dn={};var x_;function PS(){if(x_)return Dn;x_=1;var l=_p();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Dn.flushSync=function(m){var p=h.T,_=a.p;try{if(h.T=null,a.p=2,m)return m()}finally{h.T=p,a.p=_,a.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=f(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=f(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Dn.requestFormReset=function(m){a.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.2.3",Dn}var y_;function FS(){if(y_)return Rf.exports;y_=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Rf.exports=PS(),Rf.exports}var S_;function IS(){if(S_)return Qo;S_=1;var l=zS(),t=_p(),n=FS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function h(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var c=s.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===s)return m(c),e;if(d===o)return m(c),i;d=d.sibling}throw Error(a(188))}if(s.return!==o.return)s=c,o=d;else{for(var S=!1,A=c.child;A;){if(A===s){S=!0,s=c,o=d;break}if(A===o){S=!0,o=c,s=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===s){S=!0,s=d,o=c;break}if(A===o){S=!0,o=d,s=c;break}A=A.sibling}if(!S)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case I:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case z:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case w:return i=e.displayName||null,i!==null?i:dt(e.type)||"Memo";case Z:i=e._payload,e=e._init;try{return dt(e(i))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},bt=[],St=-1;function O(e){return{current:e}}function nt(e){0>St||(e.current=bt[St],bt[St]=null,St--)}function vt(e,i){St++,bt[St]=e.current,e.current=i}var Rt=O(null),It=O(null),it=O(null),ft=O(null);function Nt(e,i){switch(vt(it,i),vt(It,e),vt(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?P0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=P0(i),e=F0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Rt),vt(Rt,e)}function Vt(){nt(Rt),nt(It),nt(it)}function Bt(e){e.memoizedState!==null&&vt(ft,e);var i=Rt.current,s=F0(i,e.type);i!==s&&(vt(It,e),vt(Rt,s))}function pe(e){It.current===e&&(nt(Rt),nt(It)),ft.current===e&&(nt(ft),qo._currentValue=J)}var Ze,me;function he(e){if(Ze===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ze=i&&i[1]||"",me=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+e+me}var Ee=!1;function ie(e,i){if(!e||Ee)return"";Ee=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ct){var rt=ct}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ct){rt=ct}e.call(xt.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var B=S.split(`
`),$=A.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===$.length)for(o=B.length-1,c=$.length-1;1<=o&&0<=c&&B[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==$[c]){var pt=`
`+B[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=c);break}}}finally{Ee=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?he(s):""}function Ke(e,i){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he("Lazy");case 13:return e.child!==i&&i!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return ie(e.type,!1);case 11:return ie(e.type.render,!1);case 1:return ie(e.type,!0);case 31:return he("Activity");default:return""}}function G(e){try{var i="",s=null;do i+=Ke(e,s),s=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ve=Object.prototype.hasOwnProperty,fe=l.unstable_scheduleCallback,Ce=l.unstable_cancelCallback,Wt=l.unstable_shouldYield,N=l.unstable_requestPaint,b=l.unstable_now,q=l.unstable_getCurrentPriorityLevel,mt=l.unstable_ImmediatePriority,Mt=l.unstable_UserBlockingPriority,ht=l.unstable_NormalPriority,qt=l.unstable_LowPriority,Ut=l.unstable_IdlePriority,Gt=l.log,V=l.unstable_setDisableYieldValue,at=null,yt=null;function At(e){if(typeof Gt=="function"&&V(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(at,e)}catch{}}var wt=Math.clz32?Math.clz32:W,Dt=Math.log,ne=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Dt(e)/ne|0)|0}var Ot=256,Tt=262144,Lt=4194304;function Et(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?c=Et(o):(S&=A,S!==0?c=Et(S):s||(s=A&~e,s!==0&&(c=Et(s))))):(A=o&~d,A!==0?c=Et(A):S!==0?c=Et(S):s||(s=o&~e,s!==0&&(c=Et(s)))),c===0?0:i!==0&&i!==c&&(i&d)===0&&(d=c&-c,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:c}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Jt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Te(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function wn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,i,s,o,c,d){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,$=e.hiddenUpdates;for(s=S&~s;0<s;){var pt=31-wt(s),xt=1<<pt;A[pt]=0,B[pt]=-1;var rt=$[pt];if(rt!==null)for($[pt]=null,pt=0;pt<rt.length;pt++){var ct=rt[pt];ct!==null&&(ct.lane&=-536870913)}s&=~xt}o!==0&&_l(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function _l(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-wt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function io(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-wt(s),c=1<<o;c&i|e[o]&i&&(e[o]|=i),s&=~c}}function Xs(e,i){var s=i&-i;return s=(s&42)!==0?1:ao(s),(s&(e.suspendedLanes|i))!==0?0:s}function ao(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function so(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:r_(e.type))}function Di(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var ii=Math.random().toString(36).slice(2),sn="__reactFiber$"+ii,vn="__reactProps$"+ii,_i="__reactContainer$"+ii,qs="__reactEvents$"+ii,Ys="__reactListeners$"+ii,vl="__reactHandles$"+ii,ro="__reactResources$"+ii,fs="__reactMarker$"+ii;function oo(e){delete e[sn],delete e[vn],delete e[qs],delete e[Ys],delete e[vl]}function Ca(e){var i=e[sn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[_i]||s[sn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=X0(e);e!==null;){if(s=e[sn])return s;e=X0(e)}return i}e=s,s=e.parentNode}return null}function Ra(e){if(e=e[sn]||e[_i]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ds(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function wa(e){var i=e[ro];return i||(i=e[ro]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function C(e){e[fs]=!0}var Y=new Set,ot={};function st(e,i){K(e,i),K(e+"Capture",i)}function K(e,i){for(ot[e]=i,e=0;e<i.length;e++)Y.add(i[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},Pt={};function kt(e){return Ve.call(Pt,e)?!0:Ve.call(Ht,e)?!1:zt.test(e)?Pt[e]=!0:(Ht[e]=!0,!1)}function Yt(e,i,s){if(kt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function $t(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function jt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ue(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(e,i,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function qe(e){if(!e._valueTracker){var i=Ue(e)?"checked":"value";e._valueTracker=Qe(e,i,""+e[i])}}function ze(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Ue(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Le=/[\n"\\]/g;function ae(e){return e.replace(Le,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function xn(e,i,s,o,c,d,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+te(i)):e.value!==""+te(i)&&(e.value=""+te(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?yn(e,S,te(i)):s!=null?yn(e,S,te(s)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+te(A):e.removeAttribute("name")}function Yi(e,i,s,o,c,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){qe(e);return}s=s!=null?""+te(s):"",i=i!=null?""+te(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),qe(e)}function yn(e,i,s){i==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ai(e,i,s,o){if(e=e.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=i.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&o&&(e[s].defaultSelected=!0)}else{for(s=""+te(s),i=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function Pe(e,i,s){if(i!=null&&(i=""+te(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+te(s):""}function Sn(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(ut(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=te(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),qe(e)}function hn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||Mn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function js(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in i)o=i[c],i.hasOwnProperty(c)&&s[c]!==o&&En(e,c,o)}else for(var d in i)i.hasOwnProperty(d)&&En(e,d,i[d])}function vi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(e){return Ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var xc=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function zp(e){var i=Ra(e);if(i&&(e=i.stateNode)){var s=e[vn]||null;t:switch(e=i.stateNode,i.type){case"input":if(xn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ae(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var c=o[vn]||null;if(!c)throw Error(a(90));xn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&ze(o)}break t;case"textarea":Pe(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&ai(e,!!s.multiple,i,!1)}}}var Sc=!1;function Pp(e,i,s){if(Sc)return e(i,s);Sc=!0;try{var o=e(i);return o}finally{if(Sc=!1,(Zs!==null||Ks!==null)&&(ru(),Zs&&(i=Zs,e=Ks,Ks=Zs=null,zp(i),e)))for(i=0;i<e.length;i++)zp(e[i])}}function lo(e,i){var s=e.stateNode;if(s===null)return null;var o=s[vn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=!1;if(Zi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Mc=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Mc=!1}var Da=null,Ec=null,yl=null;function Fp(){if(yl)return yl;var e,i=Ec,s=i.length,o,c="value"in Da?Da.value:Da.textContent,d=c.length;for(e=0;e<s&&i[e]===c[e];e++);var S=s-e;for(o=1;o<=S&&i[s-o]===c[d-o];o++);return yl=c.slice(e,1<o?1-o:void 0)}function Sl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function Ip(){return!1}function In(e){function i(s,o,c,d,S){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ml:Ip,this.isPropagationStopped=Ip,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=In(ps),co=g({},ps,{view:0,detail:0}),Cx=In(co),bc,Tc,ho,bl=g({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(bc=e.screenX-ho.screenX,Tc=e.screenY-ho.screenY):Tc=bc=0,ho=e),bc)},movementY:function(e){return"movementY"in e?e.movementY:Tc}}),Bp=In(bl),Rx=g({},bl,{dataTransfer:0}),wx=In(Rx),Dx=g({},co,{relatedTarget:0}),Ac=In(Dx),Ux=g({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=In(Ux),Nx=g({},ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ox=In(Nx),zx=g({},ps,{data:0}),Hp=In(zx),Px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ix[e])?!!i[e]:!1}function Cc(){return Bx}var Hx=g({},co,{key:function(e){if(e.key){var i=Px[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vx=In(Hx),Gx=g({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=In(Gx),kx=g({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),Xx=In(kx),Wx=g({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),qx=In(Wx),Yx=g({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=In(Yx),Zx=g({},ps,{newState:0,oldState:0}),Kx=In(Zx),Qx=[9,13,27,32],Rc=Zi&&"CompositionEvent"in window,fo=null;Zi&&"documentMode"in document&&(fo=document.documentMode);var $x=Zi&&"TextEvent"in window&&!fo,Gp=Zi&&(!Rc||fo&&8<fo&&11>=fo),kp=" ",Xp=!1;function Wp(e,i){switch(e){case"keyup":return Qx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function Jx(e,i){switch(e){case"compositionend":return qp(i);case"keypress":return i.which!==32?null:(Xp=!0,kp);case"textInput":return e=i.data,e===kp&&Xp?null:e;default:return null}}function ty(e,i){if(Qs)return e==="compositionend"||!Rc&&Wp(e,i)?(e=Fp(),yl=Ec=Da=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gp&&i.locale!=="ko"?null:i.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!ey[e.type]:i==="textarea"}function jp(e,i,s,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,i=du(i,"onChange"),0<i.length&&(s=new El("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var po=null,mo=null;function ny(e){D0(e,0)}function Tl(e){var i=ds(e);if(ze(i))return e}function Zp(e,i){if(e==="change")return i}var Kp=!1;if(Zi){var wc;if(Zi){var Dc="oninput"in document;if(!Dc){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),Dc=typeof Qp.oninput=="function"}wc=Dc}else wc=!1;Kp=wc&&(!document.documentMode||9<document.documentMode)}function $p(){po&&(po.detachEvent("onpropertychange",Jp),mo=po=null)}function Jp(e){if(e.propertyName==="value"&&Tl(mo)){var i=[];jp(i,mo,e,yc(e)),Pp(ny,i)}}function iy(e,i,s){e==="focusin"?($p(),po=i,mo=s,po.attachEvent("onpropertychange",Jp)):e==="focusout"&&$p()}function ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(mo)}function sy(e,i){if(e==="click")return Tl(i)}function ry(e,i){if(e==="input"||e==="change")return Tl(i)}function oy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var qn=typeof Object.is=="function"?Object.is:oy;function go(e,i){if(qn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!Ve.call(i,c)||!qn(e[c],i[c]))return!1}return!0}function tm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function em(e,i){var s=tm(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=tm(s)}}function nm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?nm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function im(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Kt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Kt(e.document)}return i}function Uc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var ly=Zi&&"documentMode"in document&&11>=document.documentMode,$s=null,Lc=null,_o=null,Nc=!1;function am(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Nc||$s==null||$s!==Kt(o)||(o=$s,"selectionStart"in o&&Uc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&go(_o,o)||(_o=o,o=du(Lc,"onSelect"),0<o.length&&(i=new El("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=$s)))}function ms(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Js={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Oc={},sm={};Zi&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function gs(e){if(Oc[e])return Oc[e];if(!Js[e])return e;var i=Js[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in sm)return Oc[e]=i[s];return e}var rm=gs("animationend"),om=gs("animationiteration"),lm=gs("animationstart"),uy=gs("transitionrun"),cy=gs("transitionstart"),hy=gs("transitioncancel"),um=gs("transitionend"),cm=new Map,zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zc.push("scrollEnd");function xi(e,i){cm.set(e,i),st(i,[e])}var Al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],tr=0,Pc=0;function Cl(){for(var e=tr,i=Pc=tr=0;i<e;){var s=si[i];si[i++]=null;var o=si[i];si[i++]=null;var c=si[i];si[i++]=null;var d=si[i];if(si[i++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}d!==0&&hm(s,c,d)}}function Rl(e,i,s,o){si[tr++]=e,si[tr++]=i,si[tr++]=s,si[tr++]=o,Pc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Fc(e,i,s,o){return Rl(e,i,s,o),wl(e)}function _s(e,i){return Rl(e,null,null,i),wl(e)}function hm(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var c=!1,d=e.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&i!==null&&(c=31-wt(s),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[i]:o.push(i),i.lane=s|536870912),d):null}function wl(e){if(50<Bo)throw Bo=0,qh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var er={};function fy(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,i,s,o){return new fy(e,i,s,o)}function Ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,i){var s=e.alternate;return s===null?(s=Yn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function fm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Dl(e,i,s,o,c,d){var S=0;if(o=e,typeof e=="function")Ic(e)&&(S=1);else if(typeof e=="string")S=_S(e,s,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Yn(31,s,i,c),e.elementType=R,e.lanes=d,e;case T:return vs(s.children,c,d,i);case M:S=8,c|=24;break;case x:return e=Yn(12,s,i,c|2),e.elementType=x,e.lanes=d,e;case P:return e=Yn(13,s,i,c),e.elementType=P,e.lanes=d,e;case I:return e=Yn(19,s,i,c),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break t;case D:S=9;break t;case z:S=11;break t;case w:S=14;break t;case Z:S=16,o=null;break t}S=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=Yn(S,s,i,c),i.elementType=e,i.type=o,i.lanes=d,i}function vs(e,i,s,o){return e=Yn(7,e,o,i),e.lanes=s,e}function Bc(e,i,s){return e=Yn(6,e,null,i),e.lanes=s,e}function dm(e){var i=Yn(18,null,null,0);return i.stateNode=e,i}function Hc(e,i,s){return i=Yn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var pm=new WeakMap;function ri(e,i){if(typeof e=="object"&&e!==null){var s=pm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:G(i)},pm.set(e,i),i)}return{value:e,source:i,stack:G(i)}}var nr=[],ir=0,Ul=null,vo=0,oi=[],li=0,Ua=null,Ui=1,Li="";function Qi(e,i){nr[ir++]=vo,nr[ir++]=Ul,Ul=e,vo=i}function mm(e,i,s){oi[li++]=Ui,oi[li++]=Li,oi[li++]=Ua,Ua=e;var o=Ui;e=Li;var c=32-wt(o)-1;o&=~(1<<c),s+=1;var d=32-wt(i)+c;if(30<d){var S=c-c%5;d=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Ui=1<<32-wt(i)+c|s<<c|o,Li=d+e}else Ui=1<<d|s<<c|o,Li=e}function Vc(e){e.return!==null&&(Qi(e,1),mm(e,1,0))}function Gc(e){for(;e===Ul;)Ul=nr[--ir],nr[ir]=null,vo=nr[--ir],nr[ir]=null;for(;e===Ua;)Ua=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null,Ui=oi[--li],oi[li]=null}function gm(e,i){oi[li++]=Ui,oi[li++]=Li,oi[li++]=Ua,Ui=i.id,Li=i.overflow,Ua=e}var bn=null,Ye=null,Se=!1,La=null,ui=!1,kc=Error(a(519));function Na(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(ri(i,e)),kc}function _m(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[sn]=e,i[vn]=o,s){case"dialog":ve("cancel",i),ve("close",i);break;case"iframe":case"object":case"embed":ve("load",i);break;case"video":case"audio":for(s=0;s<Vo.length;s++)ve(Vo[s],i);break;case"source":ve("error",i);break;case"img":case"image":case"link":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"input":ve("invalid",i),Yi(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",i);break;case"textarea":ve("invalid",i),Sn(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||O0(i.textContent,s)?(o.popover!=null&&(ve("beforetoggle",i),ve("toggle",i)),o.onScroll!=null&&ve("scroll",i),o.onScrollEnd!=null&&ve("scrollend",i),o.onClick!=null&&(i.onclick=ji),i=!0):i=!1,i||Na(e,!0)}function vm(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:bn=bn.return}}function ar(e){if(e!==bn)return!1;if(!Se)return vm(e),Se=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||lf(e.type,e.memoizedProps)),s=!s),s&&Ye&&Na(e),vm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=k0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=k0(e)}else i===27?(i=Ye,Ya(e.type)?(e=df,df=null,Ye=e):Ye=i):Ye=bn?hi(e.stateNode.nextSibling):null;return!0}function xs(){Ye=bn=null,Se=!1}function Xc(){var e=La;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),La=null),e}function xo(e){La===null?La=[e]:La.push(e)}var Wc=O(null),ys=null,$i=null;function Oa(e,i,s){vt(Wc,i._currentValue),i._currentValue=s}function Ji(e){e._currentValue=Wc.current,nt(Wc)}function qc(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function Yc(e,i,s,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var S=c.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=c;for(var B=0;B<i.length;B++)if(A.context===i[B]){d.lanes|=s,A=d.alternate,A!==null&&(A.lanes|=s),qc(d.return,s,e),o||(S=null);break t}d=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(a(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),qc(S,s,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function sr(e,i,s,o){e=null;for(var c=i,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=c.type;qn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===ft.current){if(S=c.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(qo):e=[qo])}c=c.return}e!==null&&Yc(i,e,s,o),i.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){ys=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return xm(ys,e)}function Nl(e,i){return ys===null&&Ss(e),xm(e,i)}function xm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},$i===null){if(e===null)throw Error(a(308));$i=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else $i=$i.next=i;return s}var dy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},py=l.unstable_scheduleCallback,my=l.unstable_NormalPriority,rn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new dy,data:new Map,refCount:0}}function yo(e){e.refCount--,e.refCount===0&&py(my,function(){e.controller.abort()})}var So=null,Zc=0,rr=0,or=null;function gy(e,i){if(So===null){var s=So=[];Zc=0,rr=$h(),or={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Zc++,i.then(ym,ym),i}function ym(){if(--Zc===0&&So!==null){or!==null&&(or.status="fulfilled");var e=So;So=null,rr=0,or=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function _y(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(o.status="rejected",o.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),o}var Sm=F.S;F.S=function(e,i){a0=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&gy(e,i),Sm!==null&&Sm(e,i)};var Ms=O(null);function Kc(){var e=Ms.current;return e!==null?e:We.pooledCache}function Ol(e,i){i===null?vt(Ms,Ms.current):vt(Ms,i.pool)}function Mm(){var e=Kc();return e===null?null:{parent:rn._currentValue,pool:e}}var lr=Error(a(460)),Qc=Error(a(474)),zl=Error(a(542)),Pl={then:function(){}};function Em(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ji,ji),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Am(e),e;default:if(typeof i.status=="string")i.then(ji,ji);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=o}},function(o){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Am(e),e}throw bs=i,lr}}function Es(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(bs=s,lr):s}}var bs=null;function Tm(){if(bs===null)throw Error(a(459));var e=bs;return bs=null,e}function Am(e){if(e===lr||e===zl)throw Error(a(483))}var ur=null,Mo=0;function Fl(e){var i=Mo;return Mo+=1,ur===null&&(ur=[]),bm(ur,e,i)}function Eo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Il(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Cm(e){function i(j,X){if(e){var Q=j.deletions;Q===null?(j.deletions=[X],j.flags|=16):Q.push(X)}}function s(j,X){if(!e)return null;for(;X!==null;)i(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function c(j,X){return j=Ki(j,X),j.index=0,j.sibling=null,j}function d(j,X,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<X?(j.flags|=67108866,X):Q):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,Q,gt){return X===null||X.tag!==6?(X=Bc(Q,j.mode,gt),X.return=j,X):(X=c(X,Q),X.return=j,X)}function B(j,X,Q,gt){var Qt=Q.type;return Qt===T?pt(j,X,Q.props.children,gt,Q.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&Es(Qt)===X.type)?(X=c(X,Q.props),Eo(X,Q),X.return=j,X):(X=Dl(Q.type,Q.key,Q.props,null,j.mode,gt),Eo(X,Q),X.return=j,X)}function $(j,X,Q,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Hc(Q,j.mode,gt),X.return=j,X):(X=c(X,Q.children||[]),X.return=j,X)}function pt(j,X,Q,gt,Qt){return X===null||X.tag!==7?(X=vs(Q,j.mode,gt,Qt),X.return=j,X):(X=c(X,Q),X.return=j,X)}function xt(j,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Bc(""+X,j.mode,Q),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return Q=Dl(X.type,X.key,X.props,null,j.mode,Q),Eo(Q,X),Q.return=j,Q;case E:return X=Hc(X,j.mode,Q),X.return=j,X;case Z:return X=Es(X),xt(j,X,Q)}if(ut(X)||tt(X))return X=vs(X,j.mode,Q,null),X.return=j,X;if(typeof X.then=="function")return xt(j,Fl(X),Q);if(X.$$typeof===L)return xt(j,Nl(j,X),Q);Il(j,X)}return null}function rt(j,X,Q,gt){var Qt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qt!==null?null:A(j,X,""+Q,gt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Qt?B(j,X,Q,gt):null;case E:return Q.key===Qt?$(j,X,Q,gt):null;case Z:return Q=Es(Q),rt(j,X,Q,gt)}if(ut(Q)||tt(Q))return Qt!==null?null:pt(j,X,Q,gt,null);if(typeof Q.then=="function")return rt(j,X,Fl(Q),gt);if(Q.$$typeof===L)return rt(j,X,Nl(j,Q),gt);Il(j,Q)}return null}function ct(j,X,Q,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get(Q)||null,A(X,j,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return j=j.get(gt.key===null?Q:gt.key)||null,B(X,j,gt,Qt);case E:return j=j.get(gt.key===null?Q:gt.key)||null,$(X,j,gt,Qt);case Z:return gt=Es(gt),ct(j,X,Q,gt,Qt)}if(ut(gt)||tt(gt))return j=j.get(Q)||null,pt(X,j,gt,Qt,null);if(typeof gt.then=="function")return ct(j,X,Q,Fl(gt),Qt);if(gt.$$typeof===L)return ct(j,X,Q,Nl(X,gt),Qt);Il(X,gt)}return null}function Xt(j,X,Q,gt){for(var Qt=null,Re=null,Zt=X,ue=X=0,ye=null;Zt!==null&&ue<Q.length;ue++){Zt.index>ue?(ye=Zt,Zt=null):ye=Zt.sibling;var we=rt(j,Zt,Q[ue],gt);if(we===null){Zt===null&&(Zt=ye);break}e&&Zt&&we.alternate===null&&i(j,Zt),X=d(we,X,ue),Re===null?Qt=we:Re.sibling=we,Re=we,Zt=ye}if(ue===Q.length)return s(j,Zt),Se&&Qi(j,ue),Qt;if(Zt===null){for(;ue<Q.length;ue++)Zt=xt(j,Q[ue],gt),Zt!==null&&(X=d(Zt,X,ue),Re===null?Qt=Zt:Re.sibling=Zt,Re=Zt);return Se&&Qi(j,ue),Qt}for(Zt=o(Zt);ue<Q.length;ue++)ye=ct(Zt,j,ue,Q[ue],gt),ye!==null&&(e&&ye.alternate!==null&&Zt.delete(ye.key===null?ue:ye.key),X=d(ye,X,ue),Re===null?Qt=ye:Re.sibling=ye,Re=ye);return e&&Zt.forEach(function($a){return i(j,$a)}),Se&&Qi(j,ue),Qt}function ee(j,X,Q,gt){if(Q==null)throw Error(a(151));for(var Qt=null,Re=null,Zt=X,ue=X=0,ye=null,we=Q.next();Zt!==null&&!we.done;ue++,we=Q.next()){Zt.index>ue?(ye=Zt,Zt=null):ye=Zt.sibling;var $a=rt(j,Zt,we.value,gt);if($a===null){Zt===null&&(Zt=ye);break}e&&Zt&&$a.alternate===null&&i(j,Zt),X=d($a,X,ue),Re===null?Qt=$a:Re.sibling=$a,Re=$a,Zt=ye}if(we.done)return s(j,Zt),Se&&Qi(j,ue),Qt;if(Zt===null){for(;!we.done;ue++,we=Q.next())we=xt(j,we.value,gt),we!==null&&(X=d(we,X,ue),Re===null?Qt=we:Re.sibling=we,Re=we);return Se&&Qi(j,ue),Qt}for(Zt=o(Zt);!we.done;ue++,we=Q.next())we=ct(Zt,j,ue,we.value,gt),we!==null&&(e&&we.alternate!==null&&Zt.delete(we.key===null?ue:we.key),X=d(we,X,ue),Re===null?Qt=we:Re.sibling=we,Re=we);return e&&Zt.forEach(function(RS){return i(j,RS)}),Se&&Qi(j,ue),Qt}function Xe(j,X,Q,gt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var Qt=Q.key;X!==null;){if(X.key===Qt){if(Qt=Q.type,Qt===T){if(X.tag===7){s(j,X.sibling),gt=c(X,Q.props.children),gt.return=j,j=gt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&Es(Qt)===X.type){s(j,X.sibling),gt=c(X,Q.props),Eo(gt,Q),gt.return=j,j=gt;break t}s(j,X);break}else i(j,X);X=X.sibling}Q.type===T?(gt=vs(Q.props.children,j.mode,gt,Q.key),gt.return=j,j=gt):(gt=Dl(Q.type,Q.key,Q.props,null,j.mode,gt),Eo(gt,Q),gt.return=j,j=gt)}return S(j);case E:t:{for(Qt=Q.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){s(j,X.sibling),gt=c(X,Q.children||[]),gt.return=j,j=gt;break t}else{s(j,X);break}else i(j,X);X=X.sibling}gt=Hc(Q,j.mode,gt),gt.return=j,j=gt}return S(j);case Z:return Q=Es(Q),Xe(j,X,Q,gt)}if(ut(Q))return Xt(j,X,Q,gt);if(tt(Q)){if(Qt=tt(Q),typeof Qt!="function")throw Error(a(150));return Q=Qt.call(Q),ee(j,X,Q,gt)}if(typeof Q.then=="function")return Xe(j,X,Fl(Q),gt);if(Q.$$typeof===L)return Xe(j,X,Nl(j,Q),gt);Il(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(s(j,X.sibling),gt=c(X,Q),gt.return=j,j=gt):(s(j,X),gt=Bc(Q,j.mode,gt),gt.return=j,j=gt),S(j)):s(j,X)}return function(j,X,Q,gt){try{Mo=0;var Qt=Xe(j,X,Q,gt);return ur=null,Qt}catch(Zt){if(Zt===lr||Zt===zl)throw Zt;var Re=Yn(29,Zt,null,j.mode);return Re.lanes=gt,Re.return=j,Re}}}var Ts=Cm(!0),Rm=Cm(!1),za=!1;function $c(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jc(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var c=o.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),o.pending=i,i=wl(e),hm(e,null,s),i}return Rl(e,o,i,s),wl(e)}function bo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,io(e,s)}}function th(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?c=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?c=d=i:d=d.next=i}else c=d=i;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var eh=!1;function To(){if(eh){var e=or;if(e!==null)throw e}}function Ao(e,i,s,o){eh=!1;var c=e.updateQueue;za=!1;var d=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var B=A,$=B.next;B.next=null,S===null?d=$:S.next=$,S=B;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==S&&(A===null?pt.firstBaseUpdate=$:A.next=$,pt.lastBaseUpdate=B))}if(d!==null){var xt=c.baseState;S=0,pt=$=B=null,A=d;do{var rt=A.lane&-536870913,ct=rt!==A.lane;if(ct?(xe&rt)===rt:(o&rt)===rt){rt!==0&&rt===rr&&(eh=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Xt=e,ee=A;rt=i;var Xe=s;switch(ee.tag){case 1:if(Xt=ee.payload,typeof Xt=="function"){xt=Xt.call(Xe,xt,rt);break t}xt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ee.payload,rt=typeof Xt=="function"?Xt.call(Xe,xt,rt):Xt,rt==null)break t;xt=g({},xt,rt);break t;case 2:za=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?($=pt=ct,B=xt):pt=pt.next=ct,S|=rt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);pt===null&&(B=xt),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=pt,d===null&&(c.shared.lanes=0),Ga|=S,e.lanes=S,e.memoizedState=xt}}function wm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Dm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)wm(s[e],i)}var cr=O(null),Bl=O(0);function Um(e,i){e=la,vt(Bl,e),vt(cr,i),la=e|i.baseLanes}function nh(){vt(Bl,la),vt(cr,cr.current)}function ih(){la=Bl.current,nt(cr),nt(Bl)}var jn=O(null),ci=null;function Ia(e){var i=e.alternate;vt(nn,nn.current&1),vt(jn,e),ci===null&&(i===null||cr.current!==null||i.memoizedState!==null)&&(ci=e)}function ah(e){vt(nn,nn.current),vt(jn,e),ci===null&&(ci=e)}function Lm(e){e.tag===22?(vt(nn,nn.current),vt(jn,e),ci===null&&(ci=e)):Ba()}function Ba(){vt(nn,nn.current),vt(jn,jn.current)}function Zn(e){nt(jn),ci===e&&(ci=null),nt(nn)}var nn=O(0);function Hl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||hf(s)||ff(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ta=0,le=null,Ge=null,on=null,Vl=!1,hr=!1,As=!1,Gl=0,Co=0,fr=null,vy=0;function Je(){throw Error(a(321))}function sh(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!qn(e[s],i[s]))return!1;return!0}function rh(e,i,s,o,c,d){return ta=d,le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?mg:Sh,As=!1,d=s(o,c),As=!1,hr&&(d=Om(i,s,o,c)),Nm(e),d}function Nm(e){F.H=Do;var i=Ge!==null&&Ge.next!==null;if(ta=0,on=Ge=le=null,Vl=!1,Co=0,fr=null,i)throw Error(a(300));e===null||ln||(e=e.dependencies,e!==null&&Ll(e)&&(ln=!0))}function Om(e,i,s,o){le=e;var c=0;do{if(hr&&(fr=null),Co=0,hr=!1,25<=c)throw Error(a(301));if(c+=1,on=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=gg,d=i(s,o)}while(hr);return d}function xy(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Ro(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(le.flags|=1024),i}function oh(){var e=Gl!==0;return Gl=0,e}function lh(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function uh(e){if(Vl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Vl=!1}ta=0,on=Ge=le=null,hr=!1,Co=Gl=0,fr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?le.memoizedState=on=e:on=on.next=e,on}function an(){if(Ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=on===null?le.memoizedState:on.next;if(i!==null)on=i,Ge=e;else{if(e===null)throw le.alternate===null?Error(a(467)):Error(a(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},on===null?le.memoizedState=on=e:on=on.next=e}return on}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var i=Co;return Co+=1,fr===null&&(fr=[]),e=bm(fr,e,i),i=le,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?mg:Sh),e}function Xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ro(e);if(e.$$typeof===L)return Tn(e)}throw Error(a(438,String(e)))}function ch(e){var i=null,s=le.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=kl(),le.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=U;return i.index++,s}function ea(e,i){return typeof i=="function"?i(e):i}function Wl(e){var i=an();return hh(i,Ge,e)}function hh(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var S=c.next;c.next=d.next,d.next=S}i.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{i=c.next;var A=S=null,B=null,$=i,pt=!1;do{var xt=$.lane&-536870913;if(xt!==$.lane?(xe&xt)===xt:(ta&xt)===xt){var rt=$.revertLane;if(rt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xt===rr&&(pt=!0);else if((ta&rt)===rt){$=$.next,rt===rr&&(pt=!0);continue}else xt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=xt,S=d):B=B.next=xt,le.lanes|=rt,Ga|=rt;xt=$.action,As&&s(d,xt),d=$.hasEagerState?$.eagerState:s(d,xt)}else rt={lane:xt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(A=B=rt,S=d):B=B.next=rt,le.lanes|=xt,Ga|=xt;$=$.next}while($!==null&&$!==i);if(B===null?S=d:B.next=A,!qn(d,e.memoizedState)&&(ln=!0,pt&&(s=or,s!==null)))throw s;e.memoizedState=d,e.baseState=S,e.baseQueue=B,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function fh(e){var i=an(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,c=s.pending,d=i.memoizedState;if(c!==null){s.pending=null;var S=c=c.next;do d=e(d,S.action),S=S.next;while(S!==c);qn(d,i.memoizedState)||(ln=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function zm(e,i,s){var o=le,c=an(),d=Se;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var S=!qn((Ge||c).memoizedState,s);if(S&&(c.memoizedState=s,ln=!0),c=c.queue,mh(Im.bind(null,o,c,e),[e]),c.getSnapshot!==i||S||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,dr(9,{destroy:void 0},Fm.bind(null,o,c,s,i),null),We===null)throw Error(a(349));d||(ta&127)!==0||Pm(o,i,s)}return s}function Pm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=le.updateQueue,i===null?(i=kl(),le.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Fm(e,i,s,o){i.value=s,i.getSnapshot=o,Bm(i)&&Hm(e)}function Im(e,i,s){return s(function(){Bm(i)&&Hm(e)})}function Bm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!qn(e,s)}catch{return!0}}function Hm(e){var i=_s(e,2);i!==null&&kn(i,e,2)}function dh(e){var i=Pn();if(typeof e=="function"){var s=e;if(e=s(),As){At(!0);try{s()}finally{At(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},i}function Vm(e,i,s,o){return e.baseState=s,hh(e,Ge,typeof o=="function"?o:ea)}function yy(e,i,s,o,c){if(jl(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};F.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,Gm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Gm(e,i){var s=i.action,o=i.payload,c=e.state;if(i.isTransition){var d=F.T,S={};F.T=S;try{var A=s(c,o),B=F.S;B!==null&&B(S,A),km(e,i,A)}catch($){ph(e,i,$)}finally{d!==null&&S.types!==null&&(d.types=S.types),F.T=d}}else try{d=s(c,o),km(e,i,d)}catch($){ph(e,i,$)}}function km(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Xm(e,i,o)},function(o){return ph(e,i,o)}):Xm(e,i,s)}function Xm(e,i,s){i.status="fulfilled",i.value=s,Wm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Gm(e,s)))}function ph(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Wm(i),i=i.next;while(i!==o)}e.action=null}function Wm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function qm(e,i){return i}function Ym(e,i){if(Se){var s=We.formState;if(s!==null){t:{var o=le;if(Se){if(Ye){e:{for(var c=Ye,d=ui;c.nodeType!==8;){if(!d){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Ye=hi(c.nextSibling),o=c.data==="F!";break t}}Na(o)}o=!1}o&&(i=s[0])}}return s=Pn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qm,lastRenderedState:i},s.queue=o,s=fg.bind(null,le,o),o.dispatch=s,o=dh(!1),d=yh.bind(null,le,!1,o.queue),o=Pn(),c={state:i,dispatch:null,action:e,pending:null},o.queue=c,s=yy.bind(null,le,c,d,s),c.dispatch=s,o.memoizedState=e,[i,s,!1]}function jm(e){var i=an();return Zm(i,Ge,e)}function Zm(e,i,s){if(i=hh(e,i,qm)[0],e=Wl(ea)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Ro(i)}catch(S){throw S===lr?zl:S}else o=i;i=an();var c=i.queue,d=c.dispatch;return s!==i.memoizedState&&(le.flags|=2048,dr(9,{destroy:void 0},Sy.bind(null,c,s),null)),[o,d,e]}function Sy(e,i){e.action=i}function Km(e){var i=an(),s=Ge;if(s!==null)return Zm(i,s,e);an(),i=i.memoizedState,s=an();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function dr(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=le.updateQueue,i===null&&(i=kl(),le.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function Qm(){return an().memoizedState}function ql(e,i,s,o){var c=Pn();le.flags|=e,c.memoizedState=dr(1|i,{destroy:void 0},s,o===void 0?null:o)}function Yl(e,i,s,o){var c=an();o=o===void 0?null:o;var d=c.memoizedState.inst;Ge!==null&&o!==null&&sh(o,Ge.memoizedState.deps)?c.memoizedState=dr(i,d,s,o):(le.flags|=e,c.memoizedState=dr(1|i,d,s,o))}function $m(e,i){ql(8390656,8,e,i)}function mh(e,i){Yl(2048,8,e,i)}function My(e){le.flags|=4;var i=le.updateQueue;if(i===null)i=kl(),le.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function Jm(e){var i=an().memoizedState;return My({ref:i,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function tg(e,i){return Yl(4,2,e,i)}function eg(e,i){return Yl(4,4,e,i)}function ng(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ig(e,i,s){s=s!=null?s.concat([e]):null,Yl(4,4,ng.bind(null,i,e),s)}function gh(){}function ag(e,i){var s=an();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&sh(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function sg(e,i){var s=an();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&sh(i,o[1]))return o[0];if(o=e(),As){At(!0);try{e()}finally{At(!1)}}return s.memoizedState=[o,i],o}function _h(e,i,s){return s===void 0||(ta&1073741824)!==0&&(xe&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=r0(),le.lanes|=e,Ga|=e,s)}function rg(e,i,s,o){return qn(s,i)?s:cr.current!==null?(e=_h(e,s,o),qn(e,i)||(ln=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(xe&261930)===0?(ln=!0,e.memoizedState=s):(e=r0(),le.lanes|=e,Ga|=e,i)}function og(e,i,s,o,c){var d=H.p;H.p=d!==0&&8>d?d:8;var S=F.T,A={};F.T=A,yh(e,!1,i,s);try{var B=c(),$=F.S;if($!==null&&$(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=_y(B,o);wo(e,i,pt,$n(e))}else wo(e,i,o,$n(e))}catch(xt){wo(e,i,{then:function(){},status:"rejected",reason:xt},$n())}finally{H.p=d,S!==null&&A.types!==null&&(S.types=A.types),F.T=S}}function Ey(){}function vh(e,i,s,o){if(e.tag!==5)throw Error(a(476));var c=lg(e).queue;og(e,c,i,J,s===null?Ey:function(){return ug(e),s(o)})}function lg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:J},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function ug(e){var i=lg(e);i.next===null&&(i=e.alternate.memoizedState),wo(e,i.next.queue,{},$n())}function xh(){return Tn(qo)}function cg(){return an().memoizedState}function hg(){return an().memoizedState}function by(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=$n();e=Pa(s);var o=Fa(i,e,s);o!==null&&(kn(o,i,s),bo(o,i,s)),i={cache:jc()},e.payload=i;return}i=i.return}}function Ty(e,i,s){var o=$n();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},jl(e)?dg(i,s):(s=Fc(e,i,s,o),s!==null&&(kn(s,e,o),pg(s,i,o)))}function fg(e,i,s){var o=$n();wo(e,i,s,o)}function wo(e,i,s,o){var c={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(jl(e))dg(i,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,A=d(S,s);if(c.hasEagerState=!0,c.eagerState=A,qn(A,S))return Rl(e,i,c,0),We===null&&Cl(),!1}catch{}if(s=Fc(e,i,c,o),s!==null)return kn(s,e,o),pg(s,i,o),!0}return!1}function yh(e,i,s,o){if(o={lane:2,revertLane:$h(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(e)){if(i)throw Error(a(479))}else i=Fc(e,s,o,2),i!==null&&kn(i,e,2)}function jl(e){var i=e.alternate;return e===le||i!==null&&i===le}function dg(e,i){hr=Vl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function pg(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,io(e,s)}}var Do={readContext:Tn,use:Xl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Do.useEffectEvent=Je;var mg={readContext:Tn,use:Xl,useCallback:function(e,i){return Pn().memoizedState=[e,i===void 0?null:i],e},useContext:Tn,useEffect:$m,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ql(4194308,4,ng.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ql(4194308,4,e,i)},useInsertionEffect:function(e,i){ql(4,2,e,i)},useMemo:function(e,i){var s=Pn();i=i===void 0?null:i;var o=e();if(As){At(!0);try{e()}finally{At(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Pn();if(s!==void 0){var c=s(i);if(As){At(!0);try{s(i)}finally{At(!1)}}}else c=i;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Ty.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var i=Pn();return e={current:e},i.memoizedState=e},useState:function(e){e=dh(e);var i=e.queue,s=fg.bind(null,le,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:gh,useDeferredValue:function(e,i){var s=Pn();return _h(s,e,i)},useTransition:function(){var e=dh(!1);return e=og.bind(null,le,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=le,c=Pn();if(Se){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),We===null)throw Error(a(349));(xe&127)!==0||Pm(o,i,s)}c.memoizedState=s;var d={value:s,getSnapshot:i};return c.queue=d,$m(Im.bind(null,o,d,e),[e]),o.flags|=2048,dr(9,{destroy:void 0},Fm.bind(null,o,d,s,i),null),s},useId:function(){var e=Pn(),i=We.identifierPrefix;if(Se){var s=Li,o=Ui;s=(o&~(1<<32-wt(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Gl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=vy++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:xh,useFormState:Ym,useActionState:Ym,useOptimistic:function(e){var i=Pn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=yh.bind(null,le,!0,s),s.dispatch=i,[e,i]},useMemoCache:ch,useCacheRefresh:function(){return Pn().memoizedState=by.bind(null,le)},useEffectEvent:function(e){var i=Pn(),s={impl:e};return i.memoizedState=s,function(){if((Ne&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Sh={readContext:Tn,use:Xl,useCallback:ag,useContext:Tn,useEffect:mh,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:sg,useReducer:Wl,useRef:Qm,useState:function(){return Wl(ea)},useDebugValue:gh,useDeferredValue:function(e,i){var s=an();return rg(s,Ge.memoizedState,e,i)},useTransition:function(){var e=Wl(ea)[0],i=an().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:zm,useId:cg,useHostTransitionStatus:xh,useFormState:jm,useActionState:jm,useOptimistic:function(e,i){var s=an();return Vm(s,Ge,e,i)},useMemoCache:ch,useCacheRefresh:hg};Sh.useEffectEvent=Jm;var gg={readContext:Tn,use:Xl,useCallback:ag,useContext:Tn,useEffect:mh,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:sg,useReducer:fh,useRef:Qm,useState:function(){return fh(ea)},useDebugValue:gh,useDeferredValue:function(e,i){var s=an();return Ge===null?_h(s,e,i):rg(s,Ge.memoizedState,e,i)},useTransition:function(){var e=fh(ea)[0],i=an().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:zm,useId:cg,useHostTransitionStatus:xh,useFormState:Km,useActionState:Km,useOptimistic:function(e,i){var s=an();return Ge!==null?Vm(s,Ge,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:ch,useCacheRefresh:hg};gg.useEffectEvent=Jm;function Mh(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Eh={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=$n(),c=Pa(o);c.payload=i,s!=null&&(c.callback=s),i=Fa(e,c,o),i!==null&&(kn(i,e,o),bo(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=$n(),c=Pa(o);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=Fa(e,c,o),i!==null&&(kn(i,e,o),bo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=$n(),o=Pa(s);o.tag=2,i!=null&&(o.callback=i),i=Fa(e,o,s),i!==null&&(kn(i,e,s),bo(i,e,s))}};function _g(e,i,s,o,c,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):i.prototype&&i.prototype.isPureReactComponent?!go(s,o)||!go(c,d):!0}function vg(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&Eh.enqueueReplaceState(i,i.state,null)}function Cs(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var c in e)s[c]===void 0&&(s[c]=e[c])}return s}function xg(e){Al(e)}function yg(e){console.error(e)}function Sg(e){Al(e)}function Zl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Mg(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function bh(e,i,s){return s=Pa(s),s.tag=3,s.payload={element:null},s.callback=function(){Zl(e,i)},s}function Eg(e){return e=Pa(e),e.tag=3,e}function bg(e,i,s,o){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){Mg(i,s,o)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Mg(i,s,o),typeof c!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Ay(e,i,s,o,c){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&sr(i,s,c,!0),s=jn.current,s!==null){switch(s.tag){case 31:case 13:return ci===null?ou():s.alternate===null&&tn===0&&(tn=3),s.flags&=-257,s.flags|=65536,s.lanes=c,o===Pl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Zh(e,o,c)),!1;case 22:return s.flags|=65536,o===Pl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Zh(e,o,c)),!1}throw Error(a(435,s.tag))}return Zh(e,o,c),ou(),!1}if(Se)return i=jn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,o!==kc&&(e=Error(a(422),{cause:o}),xo(ri(e,s)))):(o!==kc&&(i=Error(a(423),{cause:o}),xo(ri(i,s))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ri(o,s),c=bh(e.stateNode,o,c),th(e,c),tn!==4&&(tn=2)),!1;var d=Error(a(520),{cause:o});if(d=ri(d,s),Io===null?Io=[d]:Io.push(d),tn!==4&&(tn=2),i===null)return!0;o=ri(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=c&-c,s.lanes|=e,e=bh(s.stateNode,o,e),th(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ka===null||!ka.has(d))))return s.flags|=65536,c&=-c,s.lanes|=c,c=Eg(c),bg(c,e,s,o),th(s,c),!1}s=s.return}while(s!==null);return!1}var Th=Error(a(461)),ln=!1;function An(e,i,s,o){i.child=e===null?Rm(i,null,s,o):Ts(i,e.child,s,o)}function Tg(e,i,s,o,c){s=s.render;var d=i.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return Ss(i),o=rh(e,i,s,S,d,c),A=oh(),e!==null&&!ln?(lh(e,i,c),na(e,i,c)):(Se&&A&&Vc(i),i.flags|=1,An(e,i,o,c),i.child)}function Ag(e,i,s,o,c){if(e===null){var d=s.type;return typeof d=="function"&&!Ic(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Cg(e,i,d,o,c)):(e=Dl(s.type,null,o,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Nh(e,c)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:go,s(S,o)&&e.ref===i.ref)return na(e,i,c)}return i.flags|=1,e=Ki(d,o),e.ref=i.ref,e.return=i,i.child=e}function Cg(e,i,s,o,c){if(e!==null){var d=e.memoizedProps;if(go(d,o)&&e.ref===i.ref)if(ln=!1,i.pendingProps=o=d,Nh(e,c))(e.flags&131072)!==0&&(ln=!0);else return i.lanes=e.lanes,na(e,i,c)}return Ah(e,i,s,o,c)}function Rg(e,i,s,o){var c=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(o=i.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,i.child=null;return wg(e,i,d,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(i,d!==null?d.cachePool:null),d!==null?Um(i,d):nh(),Lm(i);else return o=i.lanes=536870912,wg(e,i,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(Ol(i,d.cachePool),Um(i,d),Ba(),i.memoizedState=null):(e!==null&&Ol(i,null),nh(),Ba());return An(e,i,c,s),i.child}function Uo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function wg(e,i,s,o,c){var d=Kc();return d=d===null?null:{parent:rn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&Ol(i,null),nh(),Lm(i),e!==null&&sr(e,i,o,!0),i.childLanes=c,null}function Kl(e,i){return i=$l({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Dg(e,i,s){return Ts(i,e.child,null,s),e=Kl(i,i.pendingProps),e.flags|=2,Zn(i),i.memoizedState=null,e}function Cy(e,i,s){var o=i.pendingProps,c=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=Kl(i,o),i.lanes=536870912,Uo(null,e);if(ah(i),(e=Ye)?(e=G0(e,ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},s=dm(e),s.return=i,i.child=s,bn=i,Ye=null)):e=null,e===null)throw Na(i);return i.lanes=536870912,null}return Kl(i,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(ah(i),c)if(i.flags&256)i.flags&=-257,i=Dg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(ln||sr(e,i,s,!1),c=(s&e.childLanes)!==0,ln||c){if(o=We,o!==null&&(S=Xs(o,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,_s(e,S),kn(o,e,S),Th;ou(),i=Dg(e,i,s)}else e=d.treeContext,Ye=hi(S.nextSibling),bn=i,Se=!0,La=null,ui=!1,e!==null&&gm(i,e),i=Kl(i,o),i.flags|=4096;return i}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Ql(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Ah(e,i,s,o,c){return Ss(i),s=rh(e,i,s,o,void 0,c),o=oh(),e!==null&&!ln?(lh(e,i,c),na(e,i,c)):(Se&&o&&Vc(i),i.flags|=1,An(e,i,s,c),i.child)}function Ug(e,i,s,o,c,d){return Ss(i),i.updateQueue=null,s=Om(i,o,s,c),Nm(e),o=oh(),e!==null&&!ln?(lh(e,i,d),na(e,i,d)):(Se&&o&&Vc(i),i.flags|=1,An(e,i,s,d),i.child)}function Lg(e,i,s,o,c){if(Ss(i),i.stateNode===null){var d=er,S=s.contextType;typeof S=="object"&&S!==null&&(d=Tn(S)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Eh,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},$c(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?Tn(S):er,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Mh(i,s,S,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Eh.enqueueReplaceState(d,d.state,null),Ao(i,o,d,c),To(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var A=i.memoizedProps,B=Cs(s,A);d.props=B;var $=d.context,pt=s.contextType;S=er,typeof pt=="object"&&pt!==null&&(S=Tn(pt));var xt=s.getDerivedStateFromProps;pt=typeof xt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||$!==S)&&vg(i,d,o,S),za=!1;var rt=i.memoizedState;d.state=rt,Ao(i,o,d,c),To(),$=i.memoizedState,A||rt!==$||za?(typeof xt=="function"&&(Mh(i,s,xt,o),$=i.memoizedState),(B=za||_g(i,s,B,o,rt,$,S))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=$),d.props=o,d.state=$,d.context=S,o=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Jc(e,i),S=i.memoizedProps,pt=Cs(s,S),d.props=pt,xt=i.pendingProps,rt=d.context,$=s.contextType,B=er,typeof $=="object"&&$!==null&&(B=Tn($)),A=s.getDerivedStateFromProps,($=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==xt||rt!==B)&&vg(i,d,o,B),za=!1,rt=i.memoizedState,d.state=rt,Ao(i,o,d,c),To();var ct=i.memoizedState;S!==xt||rt!==ct||za||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof A=="function"&&(Mh(i,s,A,o),ct=i.memoizedState),(pt=za||_g(i,s,pt,o,rt,ct,B)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ct,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ct,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ct),d.props=o,d.state=ct,d.context=B,o=pt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Ql(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Ts(i,e.child,null,c),i.child=Ts(i,null,s,c)):An(e,i,s,c),i.memoizedState=d.state,e=i.child):e=na(e,i,c),e}function Ng(e,i,s,o){return xs(),i.flags|=256,An(e,i,s,o),i.child}var Ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rh(e){return{baseLanes:e,cachePool:Mm()}}function wh(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=Qn),e}function Og(e,i,s){var o=i.pendingProps,c=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),S&&(c=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Se){if(c?Ia(i):Ba(),(e=Ye)?(e=G0(e,ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},s=dm(e),s.return=i,i.child=s,bn=i,Ye=null)):e=null,e===null)throw Na(i);return ff(e)?i.lanes=32:i.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(Ba(),c=i.mode,A=$l({mode:"hidden",children:A},c),o=vs(o,c,s,null),A.return=i,o.return=i,A.sibling=o,i.child=A,o=i.child,o.memoizedState=Rh(s),o.childLanes=wh(e,S,s),i.memoizedState=Ch,Uo(null,o)):(Ia(i),Dh(i,A))}var B=e.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(d)i.flags&256?(Ia(i),i.flags&=-257,i=Uh(e,i,s)):i.memoizedState!==null?(Ba(),i.child=e.child,i.flags|=128,i=null):(Ba(),A=o.fallback,c=i.mode,o=$l({mode:"visible",children:o.children},c),A=vs(A,c,s,null),A.flags|=2,o.return=i,A.return=i,o.sibling=A,i.child=o,Ts(i,e.child,null,s),o=i.child,o.memoizedState=Rh(s),o.childLanes=wh(e,S,s),i.memoizedState=Ch,i=Uo(null,o));else if(Ia(i),ff(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(a(419)),o.stack="",o.digest=S,xo({value:o,source:null,stack:null}),i=Uh(e,i,s)}else if(ln||sr(e,i,s,!1),S=(s&e.childLanes)!==0,ln||S){if(S=We,S!==null&&(o=Xs(S,s),o!==0&&o!==B.retryLane))throw B.retryLane=o,_s(e,o),kn(S,e,o),Th;hf(A)||ou(),i=Uh(e,i,s)}else hf(A)?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,Ye=hi(A.nextSibling),bn=i,Se=!0,La=null,ui=!1,e!==null&&gm(i,e),i=Dh(i,o.children),i.flags|=4096);return i}return c?(Ba(),A=o.fallback,c=i.mode,B=e.child,$=B.sibling,o=Ki(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?A=Ki($,A):(A=vs(A,c,s,null),A.flags|=2),A.return=i,o.return=i,o.sibling=A,i.child=o,Uo(null,o),o=i.child,A=e.child.memoizedState,A===null?A=Rh(s):(c=A.cachePool,c!==null?(B=rn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Mm(),A={baseLanes:A.baseLanes|s,cachePool:c}),o.memoizedState=A,o.childLanes=wh(e,S,s),i.memoizedState=Ch,Uo(e.child,o)):(Ia(i),s=e.child,e=s.sibling,s=Ki(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function Dh(e,i){return i=$l({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function $l(e,i){return e=Yn(22,e,null,i),e.lanes=0,e}function Uh(e,i,s){return Ts(i,e.child,null,s),e=Dh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function zg(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),qc(e.return,i,s)}function Lh(e,i,s,o,c,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=s,S.tailMode=c,S.treeForkCount=d)}function Pg(e,i,s){var o=i.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var S=nn.current,A=(S&2)!==0;if(A?(S=S&1|2,i.flags|=128):S&=1,vt(nn,S),An(e,i,o,s),o=Se?vo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zg(e,s,i);else if(e.tag===19)zg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(s=i.child,c=null;s!==null;)e=s.alternate,e!==null&&Hl(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Lh(i,!1,c,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&Hl(e)===null){i.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}Lh(i,!0,s,null,d,o);break;case"together":Lh(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function na(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ga|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(sr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ki(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ki(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Nh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function Ry(e,i,s){switch(i.tag){case 3:Nt(i,i.stateNode.containerInfo),Oa(i,rn,e.memoizedState.cache),xs();break;case 27:case 5:Bt(i);break;case 4:Nt(i,i.stateNode.containerInfo);break;case 10:Oa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ah(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Og(e,i,s):(Ia(i),e=na(e,i,s),e!==null?e.sibling:null);Ia(i);break;case 19:var c=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(sr(e,i,s,!1),o=(s&i.childLanes)!==0),c){if(o)return Pg(e,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt(nn,nn.current),o)break;return null;case 22:return i.lanes=0,Rg(e,i,s,i.pendingProps);case 24:Oa(i,rn,e.memoizedState.cache)}return na(e,i,s)}function Fg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)ln=!0;else{if(!Nh(e,s)&&(i.flags&128)===0)return ln=!1,Ry(e,i,s);ln=(e.flags&131072)!==0}else ln=!1,Se&&(i.flags&1048576)!==0&&mm(i,vo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Es(i.elementType),i.type=e,typeof e=="function")Ic(e)?(o=Cs(e,o),i.tag=1,i=Lg(null,i,e,o,s)):(i.tag=0,i=Ah(null,i,e,o,s));else{if(e!=null){var c=e.$$typeof;if(c===z){i.tag=11,i=Tg(null,i,e,o,s);break t}else if(c===w){i.tag=14,i=Ag(null,i,e,o,s);break t}}throw i=dt(e)||e,Error(a(306,i,""))}}return i;case 0:return Ah(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,c=Cs(o,i.pendingProps),Lg(e,i,o,c,s);case 3:t:{if(Nt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var d=i.memoizedState;c=d.element,Jc(e,i),Ao(i,o,null,s);var S=i.memoizedState;if(o=S.cache,Oa(i,rn,o),o!==d.cache&&Yc(i,[rn],s,!0),To(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Ng(e,i,o,s);break t}else if(o!==c){c=ri(Error(a(424)),i),xo(c),i=Ng(e,i,o,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ye=hi(e.firstChild),bn=i,Se=!0,La=null,ui=!0,s=Rm(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(xs(),o===c){i=na(e,i,s);break t}An(e,i,o,s)}i=i.child}return i;case 26:return Ql(e,i),e===null?(s=j0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Se||(s=i.type,e=i.pendingProps,o=pu(it.current).createElement(s),o[sn]=i,o[vn]=e,Cn(o,s,e),C(o),i.stateNode=o):i.memoizedState=j0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Bt(i),e===null&&Se&&(o=i.stateNode=W0(i.type,i.pendingProps,it.current),bn=i,ui=!0,c=Ye,Ya(i.type)?(df=c,Ye=hi(o.firstChild)):Ye=c),An(e,i,i.pendingProps.children,s),Ql(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Se&&((c=o=Ye)&&(o=aS(o,i.type,i.pendingProps,ui),o!==null?(i.stateNode=o,bn=i,Ye=hi(o.firstChild),ui=!1,c=!0):c=!1),c||Na(i)),Bt(i),c=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,lf(c,d)?o=null:S!==null&&lf(c,S)&&(i.flags|=32),i.memoizedState!==null&&(c=rh(e,i,xy,null,null,s),qo._currentValue=c),Ql(e,i),An(e,i,o,s),i.child;case 6:return e===null&&Se&&((e=s=Ye)&&(s=sS(s,i.pendingProps,ui),s!==null?(i.stateNode=s,bn=i,Ye=null,e=!0):e=!1),e||Na(i)),null;case 13:return Og(e,i,s);case 4:return Nt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ts(i,null,o,s):An(e,i,o,s),i.child;case 11:return Tg(e,i,i.type,i.pendingProps,s);case 7:return An(e,i,i.pendingProps,s),i.child;case 8:return An(e,i,i.pendingProps.children,s),i.child;case 12:return An(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Oa(i,i.type,o.value),An(e,i,o.children,s),i.child;case 9:return c=i.type._context,o=i.pendingProps.children,Ss(i),c=Tn(c),o=o(c),i.flags|=1,An(e,i,o,s),i.child;case 14:return Ag(e,i,i.type,i.pendingProps,s);case 15:return Cg(e,i,i.type,i.pendingProps,s);case 19:return Pg(e,i,s);case 31:return Cy(e,i,s);case 22:return Rg(e,i,s,i.pendingProps);case 24:return Ss(i),o=Tn(rn),e===null?(c=Kc(),c===null&&(c=We,d=jc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=s),c=d),i.memoizedState={parent:o,cache:c},$c(i),Oa(i,rn,c)):((e.lanes&s)!==0&&(Jc(e,i),Ao(i,null,null,s),To()),c=e.memoizedState,d=i.memoizedState,c.parent!==o?(c={parent:o,cache:o},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Oa(i,rn,o)):(o=d.cache,Oa(i,rn,o),o!==c.cache&&Yc(i,[rn],s,!0))),An(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ia(e){e.flags|=4}function Oh(e,i,s,o,c){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(c0())e.flags|=8192;else throw bs=Pl,Qc}else e.flags&=-16777217}function Ig(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!J0(i))if(c0())e.flags|=8192;else throw bs=Pl,Qc}function Jl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?be():536870912,e.lanes|=i,_r|=i)}function Lo(e,i){if(!Se)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function wy(e,i,s){var o=i.pendingProps;switch(Gc(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ji(rn),Vt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ar(i)?ia(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xc())),je(i),null;case 26:var c=i.type,d=i.memoizedState;return e===null?(ia(i),d!==null?(je(i),Ig(i,d)):(je(i),Oh(i,c,null,o,s))):d?d!==e.memoizedState?(ia(i),je(i),Ig(i,d)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&ia(i),je(i),Oh(i,c,e,o,s)),null;case 27:if(pe(i),s=it.current,c=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ia(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return je(i),null}e=Rt.current,ar(i)?_m(i):(e=W0(c,o,s),i.stateNode=e,ia(i))}return je(i),null;case 5:if(pe(i),c=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ia(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(d=Rt.current,ar(i))_m(i);else{var S=pu(it.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}d[sn]=i,d[vn]=o;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Cn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ia(i)}}return je(i),Oh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ia(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,ar(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,c=bn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[sn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||O0(e.nodeValue,s)),e||Na(i,!0)}else e=pu(e).createTextNode(o),e[sn]=i,i.stateNode=e}return je(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(o=ar(i),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[sn]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else s=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(Zn(i),i):(Zn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ar(i),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[sn]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),c=!1}else c=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(Zn(i),i):(Zn(i),null)}return Zn(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=i.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Jl(i,i.updateQueue),je(i),null);case 4:return Vt(),e===null&&nf(i.stateNode.containerInfo),je(i),null;case 10:return Ji(i.type),je(i),null;case 19:if(nt(nn),o=i.memoizedState,o===null)return je(i),null;if(c=(i.flags&128)!==0,d=o.rendering,d===null)if(c)Lo(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Hl(e),d!==null){for(i.flags|=128,Lo(o,!1),e=d.updateQueue,i.updateQueue=e,Jl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)fm(s,e),s=s.sibling;return vt(nn,nn.current&1|2),Se&&Qi(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&b()>au&&(i.flags|=128,c=!0,Lo(o,!1),i.lanes=4194304)}else{if(!c)if(e=Hl(d),e!==null){if(i.flags|=128,c=!0,e=e.updateQueue,i.updateQueue=e,Jl(i,e),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Se)return je(i),null}else 2*b()-o.renderingStartTime>au&&s!==536870912&&(i.flags|=128,c=!0,Lo(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,s=nn.current,vt(nn,c?s&1|2:s&1),Se&&Qi(i,o.treeForkCount),e):(je(i),null);case 22:case 23:return Zn(i),ih(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),s=i.updateQueue,s!==null&&Jl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&nt(Ms),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ji(rn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Dy(e,i){switch(Gc(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ji(rn),Vt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return pe(i),null;case 31:if(i.memoizedState!==null){if(Zn(i),i.alternate===null)throw Error(a(340));xs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Zn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));xs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return nt(nn),null;case 4:return Vt(),null;case 10:return Ji(i.type),null;case 22:case 23:return Zn(i),ih(),e!==null&&nt(Ms),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ji(rn),null;case 25:return null;default:return null}}function Bg(e,i){switch(Gc(i),i.tag){case 3:Ji(rn),Vt();break;case 26:case 27:case 5:pe(i);break;case 4:Vt();break;case 31:i.memoizedState!==null&&Zn(i);break;case 13:Zn(i);break;case 19:nt(nn);break;case 10:Ji(i.type);break;case 22:case 23:Zn(i),ih(),e!==null&&nt(Ms);break;case 24:Ji(rn)}}function No(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&e)===e){o=void 0;var d=s.create,S=s.inst;o=d(),S.destroy=o}s=s.next}while(s!==c)}}catch(A){Ie(i,i.return,A)}}function Ha(e,i,s){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=i;var B=s,$=A;try{$()}catch(pt){Ie(c,B,pt)}}}o=o.next}while(o!==d)}}catch(pt){Ie(i,i.return,pt)}}function Hg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Dm(i,s)}catch(o){Ie(e,e.return,o)}}}function Vg(e,i,s){s.props=Cs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Ie(e,i,o)}}function Oo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(c){Ie(e,i,c)}}function Ni(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(c){Ie(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Ie(e,i,c)}else s.current=null}function Gg(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(c){Ie(e,e.return,c)}}function zh(e,i,s){try{var o=e.stateNode;$y(o,e.type,s,i),o[vn]=i}catch(c){Ie(e,e.return,c)}}function kg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Ph(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||kg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fh(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ji));else if(o!==4&&(o===27&&Ya(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Fh(e,i,s),e=e.sibling;e!==null;)Fh(e,i,s),e=e.sibling}function tu(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(tu(e,i,s),e=e.sibling;e!==null;)tu(e,i,s),e=e.sibling}function Xg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);Cn(i,o,s),i[sn]=e,i[vn]=s}catch(d){Ie(e,e.return,d)}}var aa=!1,un=!1,Ih=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Uy(e,i){if(e=e.containerInfo,rf=Su,e=im(e),Uc(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var S=0,A=-1,B=-1,$=0,pt=0,xt=e,rt=null;e:for(;;){for(var ct;xt!==s||c!==0&&xt.nodeType!==3||(A=S+c),xt!==d||o!==0&&xt.nodeType!==3||(B=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(ct=xt.firstChild)!==null;)rt=xt,xt=ct;for(;;){if(xt===e)break e;if(rt===s&&++$===c&&(A=S),rt===d&&++pt===o&&(B=S),(ct=xt.nextSibling)!==null)break;xt=rt,rt=xt.parentNode}xt=ct}s=A===-1||B===-1?null:{start:A,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(of={focusedElem:e,selectionRange:s},Su=!1,gn=i;gn!==null;)if(i=gn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,gn=e;else for(;gn!==null;){switch(i=gn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)c=e[s],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,c=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Xt=Cs(s.type,c);e=o.getSnapshotBeforeUpdate(Xt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ie(s,s.return,ee)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)cf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,gn=e;break}gn=i.return}}function qg(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:ra(e,s),o&4&&No(5,s);break;case 1:if(ra(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(S){Ie(s,s.return,S)}else{var c=Cs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(s,s.return,S)}}o&64&&Hg(s),o&512&&Oo(s,s.return);break;case 3:if(ra(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Dm(e,i)}catch(S){Ie(s,s.return,S)}}break;case 27:i===null&&o&4&&Xg(s);case 26:case 5:ra(e,s),i===null&&o&4&&Gg(s),o&512&&Oo(s,s.return);break;case 12:ra(e,s);break;case 31:ra(e,s),o&4&&Zg(e,s);break;case 13:ra(e,s),o&4&&Kg(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Hy.bind(null,s),rS(e,s))));break;case 22:if(o=s.memoizedState!==null||aa,!o){i=i!==null&&i.memoizedState!==null||un,c=aa;var d=un;aa=o,(un=i)&&!d?oa(e,s,(s.subtreeFlags&8772)!==0):ra(e,s),aa=c,un=d}break;case 30:break;default:ra(e,s)}}function Yg(e){var i=e.alternate;i!==null&&(e.alternate=null,Yg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&oo(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Bn=!1;function sa(e,i,s){for(s=s.child;s!==null;)jg(e,i,s),s=s.sibling}function jg(e,i,s){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(at,s)}catch{}switch(s.tag){case 26:un||Ni(s,i),sa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:un||Ni(s,i);var o=$e,c=Bn;Ya(s.type)&&($e=s.stateNode,Bn=!1),sa(e,i,s),ko(s.stateNode),$e=o,Bn=c;break;case 5:un||Ni(s,i);case 6:if(o=$e,c=Bn,$e=null,sa(e,i,s),$e=o,Bn=c,$e!==null)if(Bn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(s.stateNode)}catch(d){Ie(s,i,d)}else try{$e.removeChild(s.stateNode)}catch(d){Ie(s,i,d)}break;case 18:$e!==null&&(Bn?(e=$e,H0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Tr(e)):H0($e,s.stateNode));break;case 4:o=$e,c=Bn,$e=s.stateNode.containerInfo,Bn=!0,sa(e,i,s),$e=o,Bn=c;break;case 0:case 11:case 14:case 15:Ha(2,s,i),un||Ha(4,s,i),sa(e,i,s);break;case 1:un||(Ni(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Vg(s,i,o)),sa(e,i,s);break;case 21:sa(e,i,s);break;case 22:un=(o=un)||s.memoizedState!==null,sa(e,i,s),un=o;break;default:sa(e,i,s)}}function Zg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(s){Ie(i,i.return,s)}}}function Kg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(s){Ie(i,i.return,s)}}function Ly(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Wg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Wg),i;default:throw Error(a(435,e.tag))}}function eu(e,i){var s=Ly(e);i.forEach(function(o){if(!s.has(o)){s.add(o);var c=Vy.bind(null,e,o);o.then(c,c)}})}function Hn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o],d=e,S=i,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){$e=A.stateNode,Bn=!1;break t}break;case 5:$e=A.stateNode,Bn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Bn=!0;break t}A=A.return}if($e===null)throw Error(a(160));jg(d,S,c),$e=null,Bn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Qg(i,e),i=i.sibling}var yi=null;function Qg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(i,e),Vn(e),o&4&&(Ha(3,e,e.return),No(3,e),Ha(5,e,e.return));break;case 1:Hn(i,e),Vn(e),o&512&&(un||s===null||Ni(s,s.return)),o&64&&aa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var c=yi;if(Hn(i,e),Vn(e),o&512&&(un||s===null||Ni(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[fs]||d[sn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Cn(d,o,s),d[sn]=e,C(d),o=d;break t;case"link":var S=Q0("link","href",c).get(o+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break e}}d=c.createElement(o),Cn(d,o,s),c.head.appendChild(d);break;case"meta":if(S=Q0("meta","content",c).get(o+(s.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break e}}d=c.createElement(o),Cn(d,o,s),c.head.appendChild(d);break;default:throw Error(a(468,o))}d[sn]=e,C(d),o=d}e.stateNode=o}else $0(c,e.type,e.stateNode);else e.stateNode=K0(c,o,e.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?$0(c,e.type,e.stateNode):K0(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&zh(e,e.memoizedProps,s.memoizedProps)}break;case 27:Hn(i,e),Vn(e),o&512&&(un||s===null||Ni(s,s.return)),s!==null&&o&4&&zh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Hn(i,e),Vn(e),o&512&&(un||s===null||Ni(s,s.return)),e.flags&32){c=e.stateNode;try{hn(c,"")}catch(Xt){Ie(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,zh(e,c,s!==null?s.memoizedProps:c)),o&1024&&(Ih=!0);break;case 6:if(Hn(i,e),Vn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(Xt){Ie(e,e.return,Xt)}}break;case 3:if(_u=null,c=yi,yi=mu(i.containerInfo),Hn(i,e),yi=c,Vn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Tr(i.containerInfo)}catch(Xt){Ie(e,e.return,Xt)}Ih&&(Ih=!1,$g(e));break;case 4:o=yi,yi=mu(e.stateNode.containerInfo),Hn(i,e),Vn(e),yi=o;break;case 12:Hn(i,e),Vn(e);break;case 31:Hn(i,e),Vn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,eu(e,o)));break;case 13:Hn(i,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(iu=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,eu(e,o)));break;case 22:c=e.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,$=aa,pt=un;if(aa=$||c,un=pt||B,Hn(i,e),un=pt,aa=$,Vn(e),o&8192)t:for(i=e.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(s===null||B||aa||un||Rs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){B=s=i;try{if(d=B.stateNode,c)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var xt=B.memoizedProps.style,rt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Xt){Ie(B,B.return,Xt)}}}else if(i.tag===6){if(s===null){B=i;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Xt){Ie(B,B.return,Xt)}}}else if(i.tag===18){if(s===null){B=i;try{var ct=B.stateNode;c?V0(ct,!0):V0(B.stateNode,!1)}catch(Xt){Ie(B,B.return,Xt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,eu(e,s))));break;case 19:Hn(i,e),Vn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,eu(e,o)));break;case 30:break;case 21:break;default:Hn(i,e),Vn(e)}}function Vn(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(kg(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var c=s.stateNode,d=Ph(e);tu(e,d,c);break;case 5:var S=s.stateNode;s.flags&32&&(hn(S,""),s.flags&=-33);var A=Ph(e);tu(e,A,S);break;case 3:case 4:var B=s.stateNode.containerInfo,$=Ph(e);Fh(e,$,B);break;default:throw Error(a(161))}}catch(pt){Ie(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function $g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;$g(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ra(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)qg(e,i.alternate,i),i=i.sibling}function Rs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Rs(i);break;case 1:Ni(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Vg(i,i.return,s),Rs(i);break;case 27:ko(i.stateNode);case 26:case 5:Ni(i,i.return),Rs(i);break;case 22:i.memoizedState===null&&Rs(i);break;case 30:Rs(i);break;default:Rs(i)}e=e.sibling}}function oa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,c=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:oa(c,d,s),No(4,d);break;case 1:if(oa(c,d,s),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ie(o,o.return,$)}if(o=d,c=o.updateQueue,c!==null){var A=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)wm(B[c],A)}catch($){Ie(o,o.return,$)}}s&&S&64&&Hg(d),Oo(d,d.return);break;case 27:Xg(d);case 26:case 5:oa(c,d,s),s&&o===null&&S&4&&Gg(d),Oo(d,d.return);break;case 12:oa(c,d,s);break;case 31:oa(c,d,s),s&&S&4&&Zg(c,d);break;case 13:oa(c,d,s),s&&S&4&&Kg(c,d);break;case 22:d.memoizedState===null&&oa(c,d,s),Oo(d,d.return);break;case 30:break;default:oa(c,d,s)}i=i.sibling}}function Bh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&yo(s))}function Hh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&yo(e))}function Si(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Jg(e,i,s,o),i=i.sibling}function Jg(e,i,s,o){var c=i.flags;switch(i.tag){case 0:case 11:case 15:Si(e,i,s,o),c&2048&&No(9,i);break;case 1:Si(e,i,s,o);break;case 3:Si(e,i,s,o),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&yo(e)));break;case 12:if(c&2048){Si(e,i,s,o),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ie(i,i.return,B)}}else Si(e,i,s,o);break;case 31:Si(e,i,s,o);break;case 13:Si(e,i,s,o);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Si(e,i,s,o):zo(e,i):d._visibility&2?Si(e,i,s,o):(d._visibility|=2,pr(e,i,s,o,(i.subtreeFlags&10256)!==0||!1)),c&2048&&Bh(S,i);break;case 24:Si(e,i,s,o),c&2048&&Hh(i.alternate,i);break;default:Si(e,i,s,o)}}function pr(e,i,s,o,c){for(c=c&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,A=s,B=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:pr(d,S,A,B,c),No(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?pr(d,S,A,B,c):zo(d,S):(pt._visibility|=2,pr(d,S,A,B,c)),c&&$&2048&&Bh(S.alternate,S);break;case 24:pr(d,S,A,B,c),c&&$&2048&&Hh(S.alternate,S);break;default:pr(d,S,A,B,c)}i=i.sibling}}function zo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,c=o.flags;switch(o.tag){case 22:zo(s,o),c&2048&&Bh(o.alternate,o);break;case 24:zo(s,o),c&2048&&Hh(o.alternate,o);break;default:zo(s,o)}i=i.sibling}}var Po=8192;function mr(e,i,s){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)t0(e,i,s),e=e.sibling}function t0(e,i,s){switch(e.tag){case 26:mr(e,i,s),e.flags&Po&&e.memoizedState!==null&&vS(s,yi,e.memoizedState,e.memoizedProps);break;case 5:mr(e,i,s);break;case 3:case 4:var o=yi;yi=mu(e.stateNode.containerInfo),mr(e,i,s),yi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,mr(e,i,s),Po=o):mr(e,i,s));break;default:mr(e,i,s)}}function e0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Fo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];gn=o,i0(o,e)}e0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)n0(e),e=e.sibling}function n0(e){switch(e.tag){case 0:case 11:case 15:Fo(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Fo(e);break;case 12:Fo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,nu(e)):Fo(e);break;default:Fo(e)}}function nu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];gn=o,i0(o,e)}e0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ha(8,i,i.return),nu(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,nu(i));break;default:nu(i)}e=e.sibling}}function i0(e,i){for(;gn!==null;){var s=gn;switch(s.tag){case 0:case 11:case 15:Ha(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:yo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,gn=o;else t:for(s=e;gn!==null;){o=gn;var c=o.sibling,d=o.return;if(Yg(o),o===s){gn=null;break t}if(c!==null){c.return=d,gn=c;break t}gn=d}}}var Ny={getCacheForType:function(e){var i=Tn(rn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Tn(rn).controller.signal}},Oy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,_e=null,xe=0,Fe=0,Kn=null,Va=!1,gr=!1,Vh=!1,la=0,tn=0,Ga=0,ws=0,Gh=0,Qn=0,_r=0,Io=null,Gn=null,kh=!1,iu=0,a0=0,au=1/0,su=null,ka=null,fn=0,Xa=null,vr=null,ua=0,Xh=0,Wh=null,s0=null,Bo=0,qh=null;function $n(){return(Ne&2)!==0&&xe!==0?xe&-xe:F.T!==null?$h():so()}function r0(){if(Qn===0)if((xe&536870912)===0||Se){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),Qn=e}else Qn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Qn}function kn(e,i,s){(e===We&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Wa(e,xe,Qn,!1)),wn(e,s),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(ws|=s),tn===4&&Wa(e,xe,Qn,!1)),Oi(e))}function o0(e,i,s){if((Ne&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Ct(e,i),c=o?Fy(e,i):jh(e,i,!0),d=o;do{if(c===0){gr&&!o&&Wa(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!zy(s)){c=jh(e,i,!1),d=!1;continue}if(c===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var A=e;c=Io;var B=A.current.memoizedState.isDehydrated;if(B&&(xr(A,S).flags|=256),S=jh(A,S,!1),S!==2){if(Vh&&!B){A.errorRecoveryDisabledLanes|=d,ws|=d,c=4;break t}d=Gn,Gn=c,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}c=S}if(d=!1,c!==2)continue}}if(c===1){xr(e,0),Wa(e,i,0,!0);break}t:{switch(o=e,d=c,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Wa(o,i,Qn,!Va);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(c=iu+300-b(),10<c)){if(Wa(o,i,Qn,!Va),_t(o,0,!0)!==0)break t;ua=i,o.timeoutHandle=I0(l0.bind(null,o,s,Gn,su,kh,i,Qn,ws,_r,Va,d,"Throttled",-0,0),c);break t}l0(o,s,Gn,su,kh,i,Qn,ws,_r,Va,d,null,-0,0)}}break}while(!0);Oi(e)}function l0(e,i,s,o,c,d,S,A,B,$,pt,xt,rt,ct){if(e.timeoutHandle=-1,xt=i.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},t0(i,d,xt);var Xt=(d&62914560)===d?iu-b():(d&4194048)===d?a0-b():0;if(Xt=xS(xt,Xt),Xt!==null){ua=d,e.cancelPendingCommit=Xt(g0.bind(null,e,i,d,s,o,c,S,A,B,pt,xt,null,rt,ct)),Wa(e,d,S,!$);return}}g0(e,i,d,s,o,c,S,A,B)}function zy(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var c=s[o],d=c.getSnapshot;c=c.value;try{if(!qn(d(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wa(e,i,s,o){i&=~Gh,i&=~ws,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var c=i;0<c;){var d=31-wt(c),S=1<<d;o[d]=-1,c&=~S}s!==0&&_l(e,s,i)}function ru(){return(Ne&6)===0?(Ho(0),!1):!0}function Yh(){if(_e!==null){if(Fe===0)var e=_e.return;else e=_e,$i=ys=null,uh(e),ur=null,Mo=0,e=_e;for(;e!==null;)Bg(e.alternate,e),e=e.return;_e=null}}function xr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,eS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ua=0,Yh(),We=e,_e=s=Ki(e.current,null),xe=i,Fe=0,Kn=null,Va=!1,gr=Ct(e,i),Vh=!1,_r=Qn=Gh=ws=Ga=tn=0,Gn=Io=null,kh=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var c=31-wt(o),d=1<<c;i|=e[c],o&=~d}return la=i,Cl(),s}function u0(e,i){le=null,F.H=Do,i===lr||i===zl?(i=Tm(),Fe=3):i===Qc?(i=Tm(),Fe=4):Fe=i===Th?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Kn=i,_e===null&&(tn=1,Zl(e,ri(i,e.current)))}function c0(){var e=jn.current;return e===null?!0:(xe&4194048)===xe?ci===null:(xe&62914560)===xe||(xe&536870912)!==0?e===ci:!1}function h0(){var e=F.H;return F.H=Do,e===null?Do:e}function f0(){var e=F.A;return F.A=Ny,e}function ou(){tn=4,Va||(xe&4194048)!==xe&&jn.current!==null||(gr=!0),(Ga&134217727)===0&&(ws&134217727)===0||We===null||Wa(We,xe,Qn,!1)}function jh(e,i,s){var o=Ne;Ne|=2;var c=h0(),d=f0();(We!==e||xe!==i)&&(su=null,xr(e,i)),i=!1;var S=tn;t:do try{if(Fe!==0&&_e!==null){var A=_e,B=Kn;switch(Fe){case 8:Yh(),S=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(i=!0);var $=Fe;if(Fe=0,Kn=null,yr(e,A,B,$),s&&gr){S=0;break t}break;default:$=Fe,Fe=0,Kn=null,yr(e,A,B,$)}}Py(),S=tn;break}catch(pt){u0(e,pt)}while(!0);return i&&e.shellSuspendCounter++,$i=ys=null,Ne=o,F.H=c,F.A=d,_e===null&&(We=null,xe=0,Cl()),S}function Py(){for(;_e!==null;)d0(_e)}function Fy(e,i){var s=Ne;Ne|=2;var o=h0(),c=f0();We!==e||xe!==i?(su=null,au=b()+500,xr(e,i)):gr=Ct(e,i);t:do try{if(Fe!==0&&_e!==null){i=_e;var d=Kn;e:switch(Fe){case 1:Fe=0,Kn=null,yr(e,i,d,1);break;case 2:case 9:if(Em(d)){Fe=0,Kn=null,p0(i);break}i=function(){Fe!==2&&Fe!==9||We!==e||(Fe=7),Oi(e)},d.then(i,i);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Em(d)?(Fe=0,Kn=null,p0(i)):(Fe=0,Kn=null,yr(e,i,d,7));break;case 5:var S=null;switch(_e.tag){case 26:S=_e.memoizedState;case 5:case 27:var A=_e;if(S?J0(S):A.stateNode.complete){Fe=0,Kn=null;var B=A.sibling;if(B!==null)_e=B;else{var $=A.return;$!==null?(_e=$,lu($)):_e=null}break e}}Fe=0,Kn=null,yr(e,i,d,5);break;case 6:Fe=0,Kn=null,yr(e,i,d,6);break;case 8:Yh(),tn=6;break t;default:throw Error(a(462))}}Iy();break}catch(pt){u0(e,pt)}while(!0);return $i=ys=null,F.H=o,F.A=c,Ne=s,_e!==null?0:(We=null,xe=0,Cl(),tn)}function Iy(){for(;_e!==null&&!Wt();)d0(_e)}function d0(e){var i=Fg(e.alternate,e,la);e.memoizedProps=e.pendingProps,i===null?lu(e):_e=i}function p0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Ug(s,i,i.pendingProps,i.type,void 0,xe);break;case 11:i=Ug(s,i,i.pendingProps,i.type.render,i.ref,xe);break;case 5:uh(i);default:Bg(s,i),i=_e=fm(i,la),i=Fg(s,i,la)}e.memoizedProps=e.pendingProps,i===null?lu(e):_e=i}function yr(e,i,s,o){$i=ys=null,uh(i),ur=null,Mo=0;var c=i.return;try{if(Ay(e,c,i,s,xe)){tn=1,Zl(e,ri(s,e.current)),_e=null;return}}catch(d){if(c!==null)throw _e=c,d;tn=1,Zl(e,ri(s,e.current)),_e=null;return}i.flags&32768?(Se||o===1?e=!0:gr||(xe&536870912)!==0?e=!1:(Va=e=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),m0(i,e)):lu(i)}function lu(e){var i=e;do{if((i.flags&32768)!==0){m0(i,Va);return}e=i.return;var s=wy(i.alternate,i,la);if(s!==null){_e=s;return}if(i=i.sibling,i!==null){_e=i;return}_e=i=e}while(i!==null);tn===0&&(tn=5)}function m0(e,i){do{var s=Dy(e.alternate,e);if(s!==null){s.flags&=32767,_e=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){_e=e;return}_e=e=s}while(e!==null);tn=6,_e=null}function g0(e,i,s,o,c,d,S,A,B){e.cancelPendingCommit=null;do uu();while(fn!==0);if((Ne&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Pc,gi(e,s,d,S,A,B),e===We&&(_e=We=null,xe=0),vr=i,Xa=e,ua=s,Xh=d,Wh=c,s0=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gy(ht,function(){return S0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,c=H.p,H.p=2,S=Ne,Ne|=4;try{Uy(e,i,s)}finally{Ne=S,H.p=c,F.T=o}}fn=1,_0(),v0(),x0()}}function _0(){if(fn===1){fn=0;var e=Xa,i=vr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var o=H.p;H.p=2;var c=Ne;Ne|=4;try{Qg(i,e);var d=of,S=im(e.containerInfo),A=d.focusedElem,B=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&nm(A.ownerDocument.documentElement,A)){if(B!==null&&Uc(A)){var $=B.start,pt=B.end;if(pt===void 0&&(pt=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(pt,A.value.length);else{var xt=A.ownerDocument||document,rt=xt&&xt.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Xt=A.textContent.length,ee=Math.min(B.start,Xt),Xe=B.end===void 0?ee:Math.min(B.end,Xt);!ct.extend&&ee>Xe&&(S=Xe,Xe=ee,ee=S);var j=em(A,ee),X=em(A,Xe);if(j&&X&&(ct.rangeCount!==1||ct.anchorNode!==j.node||ct.anchorOffset!==j.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var Q=xt.createRange();Q.setStart(j.node,j.offset),ct.removeAllRanges(),ee>Xe?(ct.addRange(Q),ct.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),ct.addRange(Q))}}}}for(xt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&xt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var gt=xt[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Su=!!rf,of=rf=null}finally{Ne=c,H.p=o,F.T=s}}e.current=i,fn=2}}function v0(){if(fn===2){fn=0;var e=Xa,i=vr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var o=H.p;H.p=2;var c=Ne;Ne|=4;try{qg(e,i.alternate,i)}finally{Ne=c,H.p=o,F.T=s}}fn=3}}function x0(){if(fn===4||fn===3){fn=0,N();var e=Xa,i=vr,s=ua,o=s0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?fn=5:(fn=0,vr=Xa=null,y0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ka=null),Ws(s),i=i.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(at,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=F.T,c=H.p,H.p=2,F.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{F.T=i,H.p=c}}(ua&3)!==0&&uu(),Oi(e),c=e.pendingLanes,(s&261930)!==0&&(c&42)!==0?e===qh?Bo++:(Bo=0,qh=e):Bo=0,Ho(0)}}function y0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,yo(i)))}function uu(){return _0(),v0(),x0(),S0()}function S0(){if(fn!==5)return!1;var e=Xa,i=Xh;Xh=0;var s=Ws(ua),o=F.T,c=H.p;try{H.p=32>s?32:s,F.T=null,s=Wh,Wh=null;var d=Xa,S=ua;if(fn=0,vr=Xa=null,ua=0,(Ne&6)!==0)throw Error(a(331));var A=Ne;if(Ne|=4,n0(d.current),Jg(d,d.current,S,s),Ne=A,Ho(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(at,d)}catch{}return!0}finally{H.p=c,F.T=o,y0(e,i)}}function M0(e,i,s){i=ri(s,i),i=bh(e.stateNode,i,2),e=Fa(e,i,2),e!==null&&(wn(e,2),Oi(e))}function Ie(e,i,s){if(e.tag===3)M0(e,e,s);else for(;i!==null;){if(i.tag===3){M0(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=ri(s,e),s=Eg(2),o=Fa(i,s,2),o!==null&&(bg(s,o,i,e),wn(o,2),Oi(o));break}}i=i.return}}function Zh(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Oy;var c=new Set;o.set(i,c)}else c=o.get(i),c===void 0&&(c=new Set,o.set(i,c));c.has(s)||(Vh=!0,c.add(s),e=By.bind(null,e,i,s),i.then(e,e))}function By(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,We===e&&(xe&s)===s&&(tn===4||tn===3&&(xe&62914560)===xe&&300>b()-iu?(Ne&2)===0&&xr(e,0):Gh|=s,_r===xe&&(_r=0)),Oi(e)}function E0(e,i){i===0&&(i=be()),e=_s(e,i),e!==null&&(wn(e,i),Oi(e))}function Hy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),E0(e,s)}function Vy(e,i){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),E0(e,s)}function Gy(e,i){return fe(e,i)}var cu=null,Sr=null,Kh=!1,hu=!1,Qh=!1,qa=0;function Oi(e){e!==Sr&&e.next===null&&(Sr===null?cu=Sr=e:Sr=Sr.next=e),hu=!0,Kh||(Kh=!0,Xy())}function Ho(e,i){if(!Qh&&hu){Qh=!0;do for(var s=!1,o=cu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-wt(42|e)+1)-1,d&=c&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,C0(o,d))}else d=xe,d=_t(o,o===We?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ct(o,d)||(s=!0,C0(o,d));o=o.next}while(s);Qh=!1}}function ky(){b0()}function b0(){hu=Kh=!1;var e=0;qa!==0&&tS()&&(e=qa);for(var i=b(),s=null,o=cu;o!==null;){var c=o.next,d=T0(o,i);d===0?(o.next=null,s===null?cu=c:s.next=c,c===null&&(Sr=s)):(s=o,(e!==0||(d&3)!==0)&&(hu=!0)),o=c}fn!==0&&fn!==5||Ho(e),qa!==0&&(qa=0)}function T0(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-wt(d),A=1<<S,B=c[S];B===-1?((A&s)===0||(A&o)!==0)&&(c[S]=Jt(A,i)):B<=i&&(e.expiredLanes|=A),d&=~A}if(i=We,s=xe,s=_t(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ce(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&Ce(o),Ws(s)){case 2:case 8:s=Mt;break;case 32:s=ht;break;case 268435456:s=Ut;break;default:s=ht}return o=A0.bind(null,e),s=fe(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&Ce(o),e.callbackPriority=2,e.callbackNode=null,2}function A0(e,i){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(uu()&&e.callbackNode!==s)return null;var o=xe;return o=_t(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(o0(e,o,i),T0(e,b()),e.callbackNode!=null&&e.callbackNode===s?A0.bind(null,e):null)}function C0(e,i){if(uu())return null;o0(e,i,!0)}function Xy(){nS(function(){(Ne&6)!==0?fe(mt,ky):b0()})}function $h(){if(qa===0){var e=rr;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),qa=e}return qa}function R0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xl(""+e)}function w0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Wy(e,i,s,o,c){if(i==="submit"&&s&&s.stateNode===c){var d=R0((c[vn]||null).action),S=o.submitter;S&&(i=(i=S[vn]||null)?R0(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var A=new El("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var B=S?w0(c,S):new FormData(c);vh(s,{pending:!0,data:B,method:c.method,action:d},null,B)}}else typeof d=="function"&&(A.preventDefault(),B=S?w0(c,S):new FormData(c),vh(s,{pending:!0,data:B,method:c.method,action:d},d,B))},currentTarget:c}]})}}for(var Jh=0;Jh<zc.length;Jh++){var tf=zc[Jh],qy=tf.toLowerCase(),Yy=tf[0].toUpperCase()+tf.slice(1);xi(qy,"on"+Yy)}xi(rm,"onAnimationEnd"),xi(om,"onAnimationIteration"),xi(lm,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(uy,"onTransitionRun"),xi(cy,"onTransitionStart"),xi(hy,"onTransitionCancel"),xi(um,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function D0(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],c=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var S=o.length-1;0<=S;S--){var A=o[S],B=A.instance,$=A.currentTarget;if(A=A.listener,B!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=$;try{d(c)}catch(pt){Al(pt)}c.currentTarget=null,d=B}else for(S=0;S<o.length;S++){if(A=o[S],B=A.instance,$=A.currentTarget,A=A.listener,B!==d&&c.isPropagationStopped())break t;d=A,c.currentTarget=$;try{d(c)}catch(pt){Al(pt)}c.currentTarget=null,d=B}}}}function ve(e,i){var s=i[qs];s===void 0&&(s=i[qs]=new Set);var o=e+"__bubble";s.has(o)||(U0(i,e,2,!1),s.add(o))}function ef(e,i,s){var o=0;i&&(o|=4),U0(s,e,o,i)}var fu="_reactListening"+Math.random().toString(36).slice(2);function nf(e){if(!e[fu]){e[fu]=!0,Y.forEach(function(s){s!=="selectionchange"&&(jy.has(s)||ef(s,!1,e),ef(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[fu]||(i[fu]=!0,ef("selectionchange",!1,i))}}function U0(e,i,s,o){switch(r_(i)){case 2:var c=MS;break;case 8:c=ES;break;default:c=vf}s=c.bind(null,i,s,e),c=void 0,!Mc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(i,s,{capture:!0,passive:c}):e.addEventListener(i,s,!0):c!==void 0?e.addEventListener(i,s,{passive:c}):e.addEventListener(i,s,!1)}function af(e,i,s,o,c){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Ca(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=d=S;continue t}A=A.parentNode}}o=o.return}Pp(function(){var $=d,pt=yc(s),xt=[];t:{var rt=cm.get(e);if(rt!==void 0){var ct=El,Xt=e;switch(e){case"keypress":if(Sl(s)===0)break t;case"keydown":case"keyup":ct=Vx;break;case"focusin":Xt="focus",ct=Ac;break;case"focusout":Xt="blur",ct=Ac;break;case"beforeblur":case"afterblur":ct=Ac;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Xx;break;case rm:case om:case lm:ct=Lx;break;case um:ct=qx;break;case"scroll":case"scrollend":ct=Cx;break;case"wheel":ct=jx;break;case"copy":case"cut":case"paste":ct=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Vp;break;case"toggle":case"beforetoggle":ct=Kx}var ee=(i&4)!==0,Xe=!ee&&(e==="scroll"||e==="scrollend"),j=ee?rt!==null?rt+"Capture":null:rt;ee=[];for(var X=$,Q;X!==null;){var gt=X;if(Q=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||Q===null||j===null||(gt=lo(X,j),gt!=null&&ee.push(Go(X,gt,Q))),Xe)break;X=X.return}0<ee.length&&(rt=new ct(rt,Xt,null,s,pt),xt.push({event:rt,listeners:ee}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&s!==xc&&(Xt=s.relatedTarget||s.fromElement)&&(Ca(Xt)||Xt[_i]))break t;if((ct||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Xt=s.relatedTarget||s.toElement,ct=$,Xt=Xt?Ca(Xt):null,Xt!==null&&(Xe=u(Xt),ee=Xt.tag,Xt!==Xe||ee!==5&&ee!==27&&ee!==6)&&(Xt=null)):(ct=null,Xt=$),ct!==Xt)){if(ee=Bp,gt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Vp,gt="onPointerLeave",j="onPointerEnter",X="pointer"),Xe=ct==null?rt:ds(ct),Q=Xt==null?rt:ds(Xt),rt=new ee(gt,X+"leave",ct,s,pt),rt.target=Xe,rt.relatedTarget=Q,gt=null,Ca(pt)===$&&(ee=new ee(j,X+"enter",Xt,s,pt),ee.target=Q,ee.relatedTarget=Xe,gt=ee),Xe=gt,ct&&Xt)e:{for(ee=Zy,j=ct,X=Xt,Q=0,gt=j;gt;gt=ee(gt))Q++;gt=0;for(var Qt=X;Qt;Qt=ee(Qt))gt++;for(;0<Q-gt;)j=ee(j),Q--;for(;0<gt-Q;)X=ee(X),gt--;for(;Q--;){if(j===X||X!==null&&j===X.alternate){ee=j;break e}j=ee(j),X=ee(X)}ee=null}else ee=null;ct!==null&&L0(xt,rt,ct,ee,!1),Xt!==null&&Xe!==null&&L0(xt,Xe,Xt,ee,!0)}}t:{if(rt=$?ds($):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var Re=Zp;else if(Yp(rt))if(Kp)Re=ry;else{Re=ay;var Zt=iy}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?$&&vi($.elementType)&&(Re=Zp):Re=sy;if(Re&&(Re=Re(e,$))){jp(xt,Re,s,pt);break t}Zt&&Zt(e,rt,$),e==="focusout"&&$&&rt.type==="number"&&$.memoizedProps.value!=null&&yn(rt,"number",rt.value)}switch(Zt=$?ds($):window,e){case"focusin":(Yp(Zt)||Zt.contentEditable==="true")&&($s=Zt,Lc=$,_o=null);break;case"focusout":_o=Lc=$s=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,am(xt,s,pt);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":am(xt,s,pt)}var ue;if(Rc)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Qs?Wp(e,s)&&(ye="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ye="onCompositionStart");ye&&(Gp&&s.locale!=="ko"&&(Qs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Qs&&(ue=Fp()):(Da=pt,Ec="value"in Da?Da.value:Da.textContent,Qs=!0)),Zt=du($,ye),0<Zt.length&&(ye=new Hp(ye,e,null,s,pt),xt.push({event:ye,listeners:Zt}),ue?ye.data=ue:(ue=qp(s),ue!==null&&(ye.data=ue)))),(ue=$x?Jx(e,s):ty(e,s))&&(ye=du($,"onBeforeInput"),0<ye.length&&(Zt=new Hp("onBeforeInput","beforeinput",null,s,pt),xt.push({event:Zt,listeners:ye}),Zt.data=ue)),Wy(xt,e,$,s,pt)}D0(xt,i)})}function Go(e,i,s){return{instance:e,listener:i,currentTarget:s}}function du(e,i){for(var s=i+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=lo(e,s),c!=null&&o.unshift(Go(e,c,d)),c=lo(e,i),c!=null&&o.push(Go(e,c,d))),e.tag===3)return o;e=e.return}return[]}function Zy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function L0(e,i,s,o,c){for(var d=i._reactName,S=[];s!==null&&s!==o;){var A=s,B=A.alternate,$=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||$===null||(B=$,c?($=lo(s,d),$!=null&&S.unshift(Go(s,$,B))):c||($=lo(s,d),$!=null&&S.push(Go(s,$,B)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var Ky=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function N0(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Qy,"")}function O0(e,i){return i=N0(i),N0(e)===i}function ke(e,i,s,o,c,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||hn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&hn(e,""+o);break;case"className":$t(e,"class",o);break;case"tabIndex":$t(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,s,o);break;case"style":js(e,o,d);break;case"data":if(i!=="object"){$t(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=xl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&ke(e,i,"name",c.name,c,null),ke(e,i,"formEncType",c.formEncType,c,null),ke(e,i,"formMethod",c.formMethod,c,null),ke(e,i,"formTarget",c.formTarget,c,null)):(ke(e,i,"encType",c.encType,c,null),ke(e,i,"method",c.method,c,null),ke(e,i,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=xl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=xl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Yt(e,"popover",o);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Yt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Tx.get(s)||s,Yt(e,s,o))}}function sf(e,i,s,o,c,d){switch(s){case"style":js(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?hn(e,o):(typeof o=="number"||typeof o=="bigint")&&hn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),d=e[vn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,c);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Yt(e,s,o)}}}function Cn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,c=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,d,S,s,null)}}c&&ke(e,i,"srcSet",s.srcSet,s,null),o&&ke(e,i,"src",s.src,s,null);return;case"input":ve("invalid",e);var A=d=S=c=null,B=null,$=null;for(o in s)if(s.hasOwnProperty(o)){var pt=s[o];if(pt!=null)switch(o){case"name":c=pt;break;case"type":S=pt;break;case"checked":B=pt;break;case"defaultChecked":$=pt;break;case"value":d=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:ke(e,i,o,pt,s,null)}}Yi(e,d,A,B,$,S,c,!1);return;case"select":ve("invalid",e),o=S=d=null;for(c in s)if(s.hasOwnProperty(c)&&(A=s[c],A!=null))switch(c){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:ke(e,i,c,A,s,null)}i=d,s=S,e.multiple=!!o,i!=null?ai(e,!!o,i,!1):s!=null&&ai(e,!!o,s,!0);return;case"textarea":ve("invalid",e),d=c=o=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ke(e,i,S,A,s,null)}Sn(e,o,c,d);return;case"option":for(B in s)s.hasOwnProperty(B)&&(o=s[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ke(e,i,B,o,s,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Vo.length;o++)ve(Vo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(o=s[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,$,o,s,null)}return;default:if(vi(i)){for(pt in s)s.hasOwnProperty(pt)&&(o=s[pt],o!==void 0&&sf(e,i,pt,o,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(o=s[A],o!=null&&ke(e,i,A,o,s,null))}function $y(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,S=null,A=null,B=null,$=null,pt=null;for(ct in s){var xt=s[ct];if(s.hasOwnProperty(ct)&&xt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":B=xt;default:o.hasOwnProperty(ct)||ke(e,i,ct,null,o,xt)}}for(var rt in o){var ct=o[rt];if(xt=s[rt],o.hasOwnProperty(rt)&&(ct!=null||xt!=null))switch(rt){case"type":d=ct;break;case"name":c=ct;break;case"checked":$=ct;break;case"defaultChecked":pt=ct;break;case"value":S=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==xt&&ke(e,i,rt,ct,o,xt)}}xn(e,S,A,B,$,pt,d,c);return;case"select":ct=S=A=rt=null;for(d in s)if(B=s[d],s.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ct=B;default:o.hasOwnProperty(d)||ke(e,i,d,null,o,B)}for(c in o)if(d=o[c],B=s[c],o.hasOwnProperty(c)&&(d!=null||B!=null))switch(c){case"value":rt=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==B&&ke(e,i,c,d,o,B)}i=A,s=S,o=ct,rt!=null?ai(e,!!s,rt,!1):!!o!=!!s&&(i!=null?ai(e,!!s,i,!0):ai(e,!!s,s?[]:"",!1));return;case"textarea":ct=rt=null;for(A in s)if(c=s[A],s.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ke(e,i,A,null,o,c)}for(S in o)if(c=o[S],d=s[S],o.hasOwnProperty(S)&&(c!=null||d!=null))switch(S){case"value":rt=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==d&&ke(e,i,S,c,o,d)}Pe(e,rt,ct);return;case"option":for(var Xt in s)rt=s[Xt],s.hasOwnProperty(Xt)&&rt!=null&&!o.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:ke(e,i,Xt,null,o,rt));for(B in o)rt=o[B],ct=s[B],o.hasOwnProperty(B)&&rt!==ct&&(rt!=null||ct!=null)&&(B==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":ke(e,i,B,rt,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in s)rt=s[ee],s.hasOwnProperty(ee)&&rt!=null&&!o.hasOwnProperty(ee)&&ke(e,i,ee,null,o,rt);for($ in o)if(rt=o[$],ct=s[$],o.hasOwnProperty($)&&rt!==ct&&(rt!=null||ct!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:ke(e,i,$,rt,o,ct)}return;default:if(vi(i)){for(var Xe in s)rt=s[Xe],s.hasOwnProperty(Xe)&&rt!==void 0&&!o.hasOwnProperty(Xe)&&sf(e,i,Xe,void 0,o,rt);for(pt in o)rt=o[pt],ct=s[pt],!o.hasOwnProperty(pt)||rt===ct||rt===void 0&&ct===void 0||sf(e,i,pt,rt,o,ct);return}}for(var j in s)rt=s[j],s.hasOwnProperty(j)&&rt!=null&&!o.hasOwnProperty(j)&&ke(e,i,j,null,o,rt);for(xt in o)rt=o[xt],ct=s[xt],!o.hasOwnProperty(xt)||rt===ct||rt==null&&ct==null||ke(e,i,xt,rt,o,ct)}function z0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var c=s[o],d=c.transferSize,S=c.initiatorType,A=c.duration;if(d&&A&&z0(S)){for(S=0,A=c.responseEnd,o+=1;o<s.length;o++){var B=s[o],$=B.startTime;if($>A)break;var pt=B.transferSize,xt=B.initiatorType;pt&&z0(xt)&&(B=B.responseEnd,S+=pt*(B<A?1:(A-$)/(B-$)))}if(--o,i+=8*(d+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rf=null,of=null;function pu(e){return e.nodeType===9?e:e.ownerDocument}function P0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function F0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function lf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uf=null;function tS(){var e=window.event;return e&&e.type==="popstate"?e===uf?!1:(uf=e,!0):(uf=null,!1)}var I0=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,B0=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof B0<"u"?function(e){return B0.resolve(null).then(e).catch(iS)}:I0;function iS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function H0(e,i){var s=i,o=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(c),Tr(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")ko(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,ko(s);for(var d=s.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[fs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&ko(e.ownerDocument.body);s=c}while(s);Tr(i)}function V0(e,i){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function cf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":cf(s),oo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function aS(e,i,s,o){for(;e.nodeType===1;){var c=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fs])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function sS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=hi(e.nextSibling),e===null))return null;return e}function G0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=hi(e.nextSibling),e===null))return null;return e}function hf(e){return e.data==="$?"||e.data==="$~"}function ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var df=null;function k0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return hi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function X0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function W0(e,i,s){switch(i=pu(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function ko(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);oo(e)}var fi=new Map,q0=new Set;function mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=H.d;H.d={f:oS,r:lS,D:uS,C:cS,L:hS,m:fS,X:pS,S:dS,M:mS};function oS(){var e=ca.f(),i=ru();return e||i}function lS(e){var i=Ra(e);i!==null&&i.tag===5&&i.type==="form"?ug(i):ca.r(e)}var Mr=typeof document>"u"?null:document;function Y0(e,i,s){var o=Mr;if(o&&typeof i=="string"&&i){var c=ae(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),q0.has(c)||(q0.add(c),e={rel:e,crossOrigin:s,href:i},o.querySelector(c)===null&&(i=o.createElement("link"),Cn(i,"link",e),C(i),o.head.appendChild(i)))}}function uS(e){ca.D(e),Y0("dns-prefetch",e,null)}function cS(e,i){ca.C(e,i),Y0("preconnect",e,i)}function hS(e,i,s){ca.L(e,i,s);var o=Mr;if(o&&e&&i){var c='link[rel="preload"][as="'+ae(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+ae(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+ae(s.imageSizes)+'"]')):c+='[href="'+ae(e)+'"]';var d=c;switch(i){case"style":d=Er(e);break;case"script":d=br(e)}fi.has(d)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),fi.set(d,e),o.querySelector(c)!==null||i==="style"&&o.querySelector(Xo(d))||i==="script"&&o.querySelector(Wo(d))||(i=o.createElement("link"),Cn(i,"link",e),C(i),o.head.appendChild(i)))}}function fS(e,i){ca.m(e,i);var s=Mr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+ae(o)+'"][href="'+ae(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=br(e)}if(!fi.has(d)&&(e=g({rel:"modulepreload",href:e},i),fi.set(d,e),s.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Wo(d)))return}o=s.createElement("link"),Cn(o,"link",e),C(o),s.head.appendChild(o)}}}function dS(e,i,s){ca.S(e,i,s);var o=Mr;if(o&&e){var c=wa(o).hoistableStyles,d=Er(e);i=i||"default";var S=c.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Xo(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=fi.get(d))&&pf(e,s);var B=S=o.createElement("link");C(B),Cn(B,"link",e),B._p=new Promise(function($,pt){B.onload=$,B.onerror=pt}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,gu(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(d,S)}}}function pS(e,i){ca.X(e,i);var s=Mr;if(s&&e){var o=wa(s).hoistableScripts,c=br(e),d=o.get(c);d||(d=s.querySelector(Wo(c)),d||(e=g({src:e,async:!0},i),(i=fi.get(c))&&mf(e,i),d=s.createElement("script"),C(d),Cn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function mS(e,i){ca.M(e,i);var s=Mr;if(s&&e){var o=wa(s).hoistableScripts,c=br(e),d=o.get(c);d||(d=s.querySelector(Wo(c)),d||(e=g({src:e,async:!0,type:"module"},i),(i=fi.get(c))&&mf(e,i),d=s.createElement("script"),C(d),Cn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function j0(e,i,s,o){var c=(c=it.current)?mu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Er(s.href),s=wa(c).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Er(s.href);var d=wa(c).hoistableStyles,S=d.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=c.querySelector(Xo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),fi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},fi.set(e,s),d||gS(c,e,s,S.state))),i&&o===null)throw Error(a(528,""));return S}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=br(s),s=wa(c).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Er(e){return'href="'+ae(e)+'"'}function Xo(e){return'link[rel="stylesheet"]['+e+"]"}function Z0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Cn(i,"link",s),C(i),e.head.appendChild(i))}function br(e){return'[src="'+ae(e)+'"]'}function Wo(e){return"script[async]"+e}function K0(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+ae(s.href)+'"]');if(o)return i.instance=o,C(o),o;var c=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Cn(o,"style",c),gu(o,s.precedence,e),i.instance=o;case"stylesheet":c=Er(s.href);var d=e.querySelector(Xo(c));if(d)return i.state.loading|=4,i.instance=d,C(d),d;o=Z0(s),(c=fi.get(c))&&pf(o,c),d=(e.ownerDocument||e).createElement("link"),C(d);var S=d;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Cn(d,"link",o),i.state.loading|=4,gu(d,s.precedence,e),i.instance=d;case"script":return d=br(s.src),(c=e.querySelector(Wo(d)))?(i.instance=c,C(c),c):(o=s,(c=fi.get(d))&&(o=g({},s),mf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),C(c),Cn(c,"link",o),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,gu(o,s.precedence,e));return i.instance}function gu(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===i)d=A;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function pf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function mf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var _u=null;function Q0(e,i,s){if(_u===null){var o=new Map,c=_u=new Map;c.set(s,o)}else c=_u,o=c.get(s),o||(o=new Map,c.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),c=0;c<s.length;c++){var d=s[c];if(!(d[fs]||d[sn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function $0(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function _S(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function J0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vS(e,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var c=Er(o.href),d=i.querySelector(Xo(c));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=vu.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,C(d);return}d=i.ownerDocument||i,o=Z0(o),(c=fi.get(c))&&pf(o,c),d=d.createElement("link"),C(d);var S=d;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Cn(d,"link",o),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=vu.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var gf=0;function xS(e,i){return e.stylesheets&&e.count===0&&yu(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&yu(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&gf===0&&(gf=62500*Jy());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yu(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>gf?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function vu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xu=null;function yu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xu=new Map,i.forEach(yS,e),xu=null,vu.call(e))}function yS(e,i){if(!(i.state.loading&4)){var s=xu.get(e);if(s)var o=s.get(null);else{s=new Map,xu.set(e,s);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var S=c[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),o=S)}o&&s.set(null,o)}c=i.instance,S=c.getAttribute("data-precedence"),d=s.get(S)||o,d===o&&s.set(null,c),s.set(S,c),this.count++,o=vu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var qo={$$typeof:L,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function SS(e,i,s,o,c,d,S,A,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function t_(e,i,s,o,c,d,S,A,B,$,pt,xt){return e=new SS(e,i,s,S,B,$,pt,xt,A),i=1,d===!0&&(i|=24),d=Yn(3,null,null,i),e.current=d,d.stateNode=e,i=jc(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},$c(d),e}function e_(e){return e?(e=er,e):er}function n_(e,i,s,o,c,d){c=e_(c),o.context===null?o.context=c:o.pendingContext=c,o=Pa(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Fa(e,o,i),s!==null&&(kn(s,e,i),bo(s,e,i))}function i_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function _f(e,i){i_(e,i),(e=e.alternate)&&i_(e,i)}function a_(e){if(e.tag===13||e.tag===31){var i=_s(e,67108864);i!==null&&kn(i,e,67108864),_f(e,67108864)}}function s_(e){if(e.tag===13||e.tag===31){var i=$n();i=ao(i);var s=_s(e,i);s!==null&&kn(s,e,i),_f(e,i)}}var Su=!0;function MS(e,i,s,o){var c=F.T;F.T=null;var d=H.p;try{H.p=2,vf(e,i,s,o)}finally{H.p=d,F.T=c}}function ES(e,i,s,o){var c=F.T;F.T=null;var d=H.p;try{H.p=8,vf(e,i,s,o)}finally{H.p=d,F.T=c}}function vf(e,i,s,o){if(Su){var c=xf(o);if(c===null)af(e,i,o,Mu,s),o_(e,o);else if(TS(c,e,i,s,o))o.stopPropagation();else if(o_(e,o),i&4&&-1<bS.indexOf(e)){for(;c!==null;){var d=Ra(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Et(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-wt(S);A.entanglements[1]|=B,S&=~B}Oi(d),(Ne&6)===0&&(au=b()+500,Ho(0))}}break;case 31:case 13:A=_s(d,2),A!==null&&kn(A,d,2),ru(),_f(d,2)}if(d=xf(o),d===null&&af(e,i,o,Mu,s),d===c)break;c=d}c!==null&&o.stopPropagation()}else af(e,i,o,null,s)}}function xf(e){return e=yc(e),yf(e)}var Mu=null;function yf(e){if(Mu=null,e=Ca(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=h(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Mu=e,null}function r_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case mt:return 2;case Mt:return 8;case ht:case qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Sf=!1,ja=null,Za=null,Ka=null,Yo=new Map,jo=new Map,Qa=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(e,i){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Yo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(i.pointerId)}}function Zo(e,i,s,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},i!==null&&(i=Ra(i),i!==null&&a_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function TS(e,i,s,o,c){switch(i){case"focusin":return ja=Zo(ja,e,i,s,o,c),!0;case"dragenter":return Za=Zo(Za,e,i,s,o,c),!0;case"mouseover":return Ka=Zo(Ka,e,i,s,o,c),!0;case"pointerover":var d=c.pointerId;return Yo.set(d,Zo(Yo.get(d)||null,e,i,s,o,c)),!0;case"gotpointercapture":return d=c.pointerId,jo.set(d,Zo(jo.get(d)||null,e,i,s,o,c)),!0}return!1}function l_(e){var i=Ca(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=h(s),i!==null){e.blockedOn=i,Di(e.priority,function(){s_(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,Di(e.priority,function(){s_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=xf(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);xc=o,s.target.dispatchEvent(o),xc=null}else return i=Ra(s),i!==null&&a_(i),e.blockedOn=s,!1;i.shift()}return!0}function u_(e,i,s){Eu(e)&&s.delete(i)}function AS(){Sf=!1,ja!==null&&Eu(ja)&&(ja=null),Za!==null&&Eu(Za)&&(Za=null),Ka!==null&&Eu(Ka)&&(Ka=null),Yo.forEach(u_),jo.forEach(u_)}function bu(e,i){e.blockedOn===i&&(e.blockedOn=null,Sf||(Sf=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,AS)))}var Tu=null;function c_(e){Tu!==e&&(Tu=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Tu===e&&(Tu=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],c=e[i+2];if(typeof o!="function"){if(yf(o||s)===null)continue;break}var d=Ra(s);d!==null&&(e.splice(i,3),i-=3,vh(d,{pending:!0,data:c,method:s.method,action:o},o,c))}}))}function Tr(e){function i(B){return bu(B,e)}ja!==null&&bu(ja,e),Za!==null&&bu(Za,e),Ka!==null&&bu(Ka,e),Yo.forEach(i),jo.forEach(i);for(var s=0;s<Qa.length;s++){var o=Qa[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(s=Qa[0],s.blockedOn===null);)l_(s),s.blockedOn===null&&Qa.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var c=s[o],d=s[o+1],S=c[vn]||null;if(typeof d=="function")S||c_(s);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(c=d,S=d[vn]||null)A=S.formAction;else if(yf(c)!==null)continue}else A=S.action;typeof A=="function"?s[o+1]=A:(s.splice(o,3),o-=3),c_(s)}}}function h_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function i(){c!==null&&(c(),c=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),c!==null&&(c(),c=null)}}}function Mf(e){this._internalRoot=e}Au.prototype.render=Mf.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=$n();n_(s,o,e,i,null,null)},Au.prototype.unmount=Mf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;n_(e.current,2,null,e,null,null),ru(),i[_i]=null}};function Au(e){this._internalRoot=e}Au.prototype.unstable_scheduleHydration=function(e){if(e){var i=so();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Qa.length&&i!==0&&i<Qa[s].priority;s++);Qa.splice(s,0,e),s===0&&l_(e)}};var f_=t.version;if(f_!=="19.2.3")throw Error(a(527,f_,"19.2.3"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var CS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{at=Cu.inject(CS),yt=Cu}catch{}}return Qo.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,o="",c=xg,d=yg,S=Sg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=t_(e,1,!1,null,null,s,o,null,c,d,S,h_),e[_i]=i.current,nf(e),new Mf(i)},Qo.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var o=!1,c="",d=xg,S=yg,A=Sg,B=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(B=s.formState)),i=t_(e,1,!0,i,s??null,o,c,B,d,S,A,h_),i.context=e_(null),s=i.current,o=$n(),o=ao(o),c=Pa(o),c.callback=null,Fa(s,c,o),s=o,i.current.lanes=s,wn(i,s),Oi(i),e[_i]=i.current,nf(e),new Au(i)},Qo.version="19.2.3",Qo}var M_;function BS(){if(M_)return Tf.exports;M_=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Tf.exports=IS(),Tf.exports}var HS=BS();const vp="182",VS=0,E_=1,GS=2,nc=1,kS=2,rl=3,hs=0,Wn=1,va=2,ya=0,Wr=1,b_=2,T_=3,A_=4,XS=5,Fs=100,WS=101,qS=102,YS=103,jS=104,ZS=200,KS=201,QS=202,$S=203,Sd=204,Md=205,JS=206,tM=207,eM=208,nM=209,iM=210,aM=211,sM=212,rM=213,oM=214,Ed=0,bd=1,Td=2,Yr=3,Ad=4,Cd=5,Rd=6,wd=7,xp=0,lM=1,uM=2,Hi=0,Iv=1,Bv=2,Hv=3,Vv=4,Gv=5,kv=6,Xv=7,Wv=300,Gs=301,jr=302,Dd=303,Ud=304,pc=306,Ld=1e3,xa=1001,Nd=1002,Rn=1003,cM=1004,Ru=1005,zn=1006,wf=1007,Bs=1008,ni=1009,qv=1010,Yv=1011,ll=1012,yp=1013,Xi=1014,Ii=1015,ba=1016,Sp=1017,Mp=1018,ul=1020,jv=35902,Zv=35899,Kv=1021,Qv=1022,Ci=1023,Ta=1026,Hs=1027,$v=1028,Ep=1029,Zr=1030,bp=1031,Tp=1033,ic=33776,ac=33777,sc=33778,rc=33779,Od=35840,zd=35841,Pd=35842,Fd=35843,Id=36196,Bd=37492,Hd=37496,Vd=37488,Gd=37489,kd=37490,Xd=37491,Wd=37808,qd=37809,Yd=37810,jd=37811,Zd=37812,Kd=37813,Qd=37814,$d=37815,Jd=37816,tp=37817,ep=37818,np=37819,ip=37820,ap=37821,sp=36492,rp=36494,op=36495,lp=36283,up=36284,cp=36285,hp=36286,hM=3200,Jv=0,fM=1,ls="",pi="srgb",Kr="srgb-linear",cc="linear",Be="srgb",Ar=7680,C_=519,dM=512,pM=513,mM=514,Ap=515,gM=516,_M=517,Cp=518,vM=519,R_=35044,w_="300 es",Bi=2e3,hc=2001;function tx(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function fc(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function xM(){const l=fc("canvas");return l.style.display="block",l}const D_={};function U_(...l){const t="THREE."+l.shift();console.log(t,...l)}function re(...l){const t="THREE."+l.shift();console.warn(t,...l)}function De(...l){const t="THREE."+l.shift();console.error(t,...l)}function cl(...l){const t=l.join(" ");t in D_||(D_[t]=!0,re(...l))}function yM(l,t,n){return new Promise(function(a,r){function u(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:r();break;case l.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}let $r=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const u=r.indexOf(n);u!==-1&&r.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let u=0,h=r.length;u<h;u++)r[u].call(this,t);t.target=null}}};const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=Math.PI/180,fp=180/Math.PI;function dl(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Un[l&255]+Un[l>>8&255]+Un[l>>16&255]+Un[l>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[n&63|128]+Un[n>>8&255]+"-"+Un[n>>16&255]+Un[n>>24&255]+Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]).toLowerCase()}function Me(l,t,n){return Math.max(t,Math.min(n,l))}function SM(l,t){return(l%t+t)%t}function Uf(l,t,n){return(1-n)*l+n*t}function $o(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Xn(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}let He=class ex{constructor(t=0,n=0){ex.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),u=this.x-t.x,h=this.y-t.y;return this.x=u*a-h*r+t.x,this.y=u*r+h*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pl=class{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,u,h,f){let m=a[r+0],p=a[r+1],_=a[r+2],g=a[r+3],v=u[h+0],y=u[h+1],E=u[h+2],T=u[h+3];if(f<=0){t[n+0]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=T;return}if(g!==T||m!==v||p!==y||_!==E){let M=m*v+p*y+_*E+g*T;M<0&&(v=-v,y=-y,E=-E,T=-T,M=-M);let x=1-f;if(M<.9995){const D=Math.acos(M),L=Math.sin(D);x=Math.sin(x*D)/L,f=Math.sin(f*D)/L,m=m*x+v*f,p=p*x+y*f,_=_*x+E*f,g=g*x+T*f}else{m=m*x+v*f,p=p*x+y*f,_=_*x+E*f,g=g*x+T*f;const D=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=D,p*=D,_*=D,g*=D}}t[n]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,r,u,h){const f=a[r],m=a[r+1],p=a[r+2],_=a[r+3],g=u[h],v=u[h+1],y=u[h+2],E=u[h+3];return t[n]=f*E+_*g+m*y-p*v,t[n+1]=m*E+_*v+p*g-f*y,t[n+2]=p*E+_*y+f*v-m*g,t[n+3]=_*E-f*g-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,u=t._z,h=t._order,f=Math.cos,m=Math.sin,p=f(a/2),_=f(r/2),g=f(u/2),v=m(a/2),y=m(r/2),E=m(u/2);switch(h){case"XYZ":this._x=v*_*g+p*y*E,this._y=p*y*g-v*_*E,this._z=p*_*E+v*y*g,this._w=p*_*g-v*y*E;break;case"YXZ":this._x=v*_*g+p*y*E,this._y=p*y*g-v*_*E,this._z=p*_*E-v*y*g,this._w=p*_*g+v*y*E;break;case"ZXY":this._x=v*_*g-p*y*E,this._y=p*y*g+v*_*E,this._z=p*_*E+v*y*g,this._w=p*_*g-v*y*E;break;case"ZYX":this._x=v*_*g-p*y*E,this._y=p*y*g+v*_*E,this._z=p*_*E-v*y*g,this._w=p*_*g+v*y*E;break;case"YZX":this._x=v*_*g+p*y*E,this._y=p*y*g+v*_*E,this._z=p*_*E-v*y*g,this._w=p*_*g-v*y*E;break;case"XZY":this._x=v*_*g-p*y*E,this._y=p*y*g-v*_*E,this._z=p*_*E+v*y*g,this._w=p*_*g+v*y*E;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],u=n[8],h=n[1],f=n[5],m=n[9],p=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(h-r)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-m)/y,this._x=.25*y,this._y=(r+h)/y,this._z=(u+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(u-p)/y,this._x=(r+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(h-r)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,u=t._z,h=t._w,f=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+h*f+r*p-u*m,this._y=r*_+h*m+u*f-a*p,this._z=u*_+h*p+a*m-r*f,this._w=h*_-a*f-r*m-u*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,r=t._y,u=t._z,h=t._w,f=this.dot(t);f<0&&(a=-a,r=-r,u=-u,h=-h,f=-f);let m=1-n;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+r*n,this._z=this._z*m+u*n,this._w=this._w*m+h*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+r*n,this._z=this._z*m+u*n,this._w=this._w*m+h*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lt=class nx{constructor(t=0,n=0,a=0){nx.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(L_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(L_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*r,this.y=u[1]*n+u[4]*a+u[7]*r,this.z=u[2]*n+u[5]*a+u[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,u=t.elements,h=1/(u[3]*n+u[7]*a+u[11]*r+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*r+u[12])*h,this.y=(u[1]*n+u[5]*a+u[9]*r+u[13])*h,this.z=(u[2]*n+u[6]*a+u[10]*r+u[14])*h,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,u=t.x,h=t.y,f=t.z,m=t.w,p=2*(h*r-f*a),_=2*(f*n-u*r),g=2*(u*a-h*n);return this.x=n+m*p+h*g-f*_,this.y=a+m*_+f*p-u*g,this.z=r+m*g+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r,this.y=u[1]*n+u[5]*a+u[9]*r,this.z=u[2]*n+u[6]*a+u[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,u=t.z,h=n.x,f=n.y,m=n.z;return this.x=r*m-u*f,this.y=u*h-a*m,this.z=a*f-r*h,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Lf.copy(this).projectOnVector(t),this.sub(Lf)}reflect(t){return this.sub(Lf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Lf=new lt,L_=new pl;let ge=class ix{constructor(t,n,a,r,u,h,f,m,p){ix.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,u,h,f,m,p)}set(t,n,a,r,u,h,f,m,p){const _=this.elements;return _[0]=t,_[1]=r,_[2]=f,_[3]=n,_[4]=u,_[5]=m,_[6]=a,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,u=this.elements,h=a[0],f=a[3],m=a[6],p=a[1],_=a[4],g=a[7],v=a[2],y=a[5],E=a[8],T=r[0],M=r[3],x=r[6],D=r[1],L=r[4],z=r[7],P=r[2],I=r[5],w=r[8];return u[0]=h*T+f*D+m*P,u[3]=h*M+f*L+m*I,u[6]=h*x+f*z+m*w,u[1]=p*T+_*D+g*P,u[4]=p*M+_*L+g*I,u[7]=p*x+_*z+g*w,u[2]=v*T+y*D+E*P,u[5]=v*M+y*L+E*I,u[8]=v*x+y*z+E*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],_=t[8];return n*h*_-n*f*p-a*u*_+a*f*m+r*u*p-r*h*m}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],_=t[8],g=_*h-f*p,v=f*m-_*u,y=p*u-h*m,E=n*g+a*v+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(r*p-_*a)*T,t[2]=(f*a-r*h)*T,t[3]=v*T,t[4]=(_*n-r*m)*T,t[5]=(r*u-f*n)*T,t[6]=y*T,t[7]=(a*m-p*n)*T,t[8]=(h*n-a*u)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,u,h,f){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*h+p*f)+h+t,-r*p,r*m,-r*(-p*h+m*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Nf.makeScale(t,n)),this}rotate(t){return this.premultiply(Nf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Nf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const Nf=new ge,N_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MM(){const l={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(r,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(r.r=Sa(r.r),r.g=Sa(r.g),r.b=Sa(r.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(r.applyMatrix3(this.spaces[u].toXYZ),r.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,u){return this.convert(r,this.workingColorSpace,u)},colorSpaceToWorking:function(r,u){return this.convert(r,u,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ls?cc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,u=this.workingColorSpace){return r.fromArray(this.spaces[u].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,u,h){return r.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,u){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(r,u)},toWorkingColorSpace:function(r,u){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(r,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return l.define({[Kr]:{primaries:t,whitePoint:a,transfer:cc,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:a,transfer:Be,toXYZ:N_,fromXYZ:O_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),l}const Ae=MM();function Sa(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function qr(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Cr,EM=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Cr===void 0&&(Cr=fc("canvas")),Cr.width=t.width,Cr.height=t.height;const r=Cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=Cr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=fc("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),u=r.data;for(let h=0;h<u.length;h++)u[h]=Sa(u[h]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Sa(n[a]/255)*255):n[a]=Sa(n[a]);return{data:n,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bM=0,Rp=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=dl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let u;if(Array.isArray(r)){u=[];for(let h=0,f=r.length;h<f;h++)r[h].isDataTexture?u.push(Of(r[h].image)):u.push(Of(r[h]))}else u=Of(r);a.url=u}return n||(t.images[this.uuid]=a),a}};function Of(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?EM.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let TM=0;const zf=new lt;let wi=class oc extends $r{constructor(t=oc.DEFAULT_IMAGE,n=oc.DEFAULT_MAPPING,a=xa,r=xa,u=zn,h=Bs,f=Ci,m=ni,p=oc.DEFAULT_ANISOTROPY,_=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=dl(),this.name="",this.source=new Rp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zf).x}get height(){return this.source.getSize(zf).y}get depth(){return this.source.getSize(zf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){re(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ld:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case Nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ld:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case Nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wi.DEFAULT_IMAGE=null;wi.DEFAULT_MAPPING=Wv;wi.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,n=0,a=0,r=1){en.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,u=this.w,h=t.elements;return this.x=h[0]*n+h[4]*a+h[8]*r+h[12]*u,this.y=h[1]*n+h[5]*a+h[9]*r+h[13]*u,this.z=h[2]*n+h[6]*a+h[10]*r+h[14]*u,this.w=h[3]*n+h[7]*a+h[11]*r+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,u;const m=t.elements,p=m[0],_=m[4],g=m[8],v=m[1],y=m[5],E=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,z=(y+1)/2,P=(x+1)/2,I=(_+v)/4,w=(g+T)/4,Z=(E+M)/4;return L>z&&L>P?L<.01?(a=0,r=.707106781,u=.707106781):(a=Math.sqrt(L),r=I/a,u=w/a):z>P?z<.01?(a=.707106781,r=0,u=.707106781):(r=Math.sqrt(z),a=I/r,u=Z/r):P<.01?(a=.707106781,r=.707106781,u=0):(u=Math.sqrt(P),a=w/u,r=Z/u),this.set(a,r,u,n),this}let D=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(g-T)/D,this.z=(v-_)/D,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AM extends $r{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new en(0,0,t,n),this.scissorTest=!1,this.viewport=new en(0,0,t,n);const r={width:t,height:n,depth:a.depth},u=new wi(r);this.textures=[];const h=a.count;for(let f=0;f<h;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,u=this.textures.length;r<u;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new Rp(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends AM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class ax extends wi{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class CM extends wi{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Mi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Mi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Mi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,f=u.count;h<f;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(u,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),wu.copy(a.boundingBox)),wu.applyMatrix4(t.matrixWorld),this.union(wu)}const r=t.children;for(let u=0,h=r.length;u<h;u++)this.expandByObject(r[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jo),Du.subVectors(this.max,Jo),Rr.subVectors(t.a,Jo),wr.subVectors(t.b,Jo),Dr.subVectors(t.c,Jo),Ja.subVectors(wr,Rr),ts.subVectors(Dr,wr),Ds.subVectors(Rr,Dr);let n=[0,-Ja.z,Ja.y,0,-ts.z,ts.y,0,-Ds.z,Ds.y,Ja.z,0,-Ja.x,ts.z,0,-ts.x,Ds.z,0,-Ds.x,-Ja.y,Ja.x,0,-ts.y,ts.x,0,-Ds.y,Ds.x,0];return!Pf(n,Rr,wr,Dr,Du)||(n=[1,0,0,0,1,0,0,0,1],!Pf(n,Rr,wr,Dr,Du))?!1:(Uu.crossVectors(Ja,ts),n=[Uu.x,Uu.y,Uu.z],Pf(n,Rr,wr,Dr,Du))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ha=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Mi=new lt,wu=new ml,Rr=new lt,wr=new lt,Dr=new lt,Ja=new lt,ts=new lt,Ds=new lt,Jo=new lt,Du=new lt,Uu=new lt,Us=new lt;function Pf(l,t,n,a,r){for(let u=0,h=l.length-3;u<=h;u+=3){Us.fromArray(l,u);const f=r.x*Math.abs(Us.x)+r.y*Math.abs(Us.y)+r.z*Math.abs(Us.z),m=t.dot(Us),p=n.dot(Us),_=a.dot(Us);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>f)return!1}return!0}const RM=new ml,tl=new lt,Ff=new lt;class wp{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):RM.setFromPoints(t).getCenter(a);let r=0;for(let u=0,h=t.length;u<h;u++)r=Math.max(r,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(tl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ff.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(Ff)),this.expandByPoint(tl.copy(t.center).sub(Ff))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new lt,If=new lt,Lu=new lt,es=new lt,Bf=new lt,Nu=new lt,Hf=new lt;let wM=class{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=fa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,n),fa.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){If.copy(t).add(n).multiplyScalar(.5),Lu.copy(n).sub(t).normalize(),es.copy(this.origin).sub(If);const u=t.distanceTo(n)*.5,h=-this.direction.dot(Lu),f=es.dot(this.direction),m=-es.dot(Lu),p=es.lengthSq(),_=Math.abs(1-h*h);let g,v,y,E;if(_>0)if(g=h*m-f,v=h*f-m,E=u*_,g>=0)if(v>=-E)if(v<=E){const T=1/_;g*=T,v*=T,y=g*(g+h*v+2*f)+v*(h*g+v+2*m)+p}else v=u,g=Math.max(0,-(h*v+f)),y=-g*g+v*(v+2*m)+p;else v=-u,g=Math.max(0,-(h*v+f)),y=-g*g+v*(v+2*m)+p;else v<=-E?(g=Math.max(0,-(-h*u+f)),v=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+v*(v+2*m)+p):v<=E?(g=0,v=Math.min(Math.max(-u,-m),u),y=v*(v+2*m)+p):(g=Math.max(0,-(h*u+f)),v=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+v*(v+2*m)+p);else v=h>0?-u:u,g=Math.max(0,-(h*v+f)),y=-g*g+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(If).addScaledVector(Lu,v),y}intersectSphere(t,n){fa.subVectors(t.center,this.origin);const a=fa.dot(this.direction),r=fa.dot(fa)-a*a,u=t.radius*t.radius;if(r>u)return null;const h=Math.sqrt(u-r),f=a-h,m=a+h;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,u,h,f,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),_>=0?(u=(t.min.y-v.y)*_,h=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,h=(t.min.y-v.y)*_),a>h||u>r||((u>a||isNaN(a))&&(a=u),(h<r||isNaN(r))&&(r=h),g>=0?(f=(t.min.z-v.z)*g,m=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,m=(t.min.z-v.z)*g),a>m||f>r)||((f>a||a!==a)&&(a=f),(m<r||r!==r)&&(r=m),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,n,a,r,u){Bf.subVectors(n,t),Nu.subVectors(a,t),Hf.crossVectors(Bf,Nu);let h=this.direction.dot(Hf),f;if(h>0){if(r)return null;f=1}else if(h<0)f=-1,h=-h;else return null;es.subVectors(this.origin,t);const m=f*this.direction.dot(Nu.crossVectors(es,Nu));if(m<0)return null;const p=f*this.direction.dot(Bf.cross(es));if(p<0||m+p>h)return null;const _=-f*es.dot(Hf);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class dp{constructor(t,n,a,r,u,h,f,m,p,_,g,v,y,E,T,M){dp.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,u,h,f,m,p,_,g,v,y,E,T,M)}set(t,n,a,r,u,h,f,m,p,_,g,v,y,E,T,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=r,x[1]=u,x[5]=h,x[9]=f,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dp().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,r=1/Ur.setFromMatrixColumn(t,0).length(),u=1/Ur.setFromMatrixColumn(t,1).length(),h=1/Ur.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*h,n[9]=a[9]*h,n[10]=a[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,u=t.z,h=Math.cos(a),f=Math.sin(a),m=Math.cos(r),p=Math.sin(r),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=h*_,y=h*g,E=f*_,T=f*g;n[0]=m*_,n[4]=-m*g,n[8]=p,n[1]=y+E*p,n[5]=v-T*p,n[9]=-f*m,n[2]=T-v*p,n[6]=E+y*p,n[10]=h*m}else if(t.order==="YXZ"){const v=m*_,y=m*g,E=p*_,T=p*g;n[0]=v+T*f,n[4]=E*f-y,n[8]=h*p,n[1]=h*g,n[5]=h*_,n[9]=-f,n[2]=y*f-E,n[6]=T+v*f,n[10]=h*m}else if(t.order==="ZXY"){const v=m*_,y=m*g,E=p*_,T=p*g;n[0]=v-T*f,n[4]=-h*g,n[8]=E+y*f,n[1]=y+E*f,n[5]=h*_,n[9]=T-v*f,n[2]=-h*p,n[6]=f,n[10]=h*m}else if(t.order==="ZYX"){const v=h*_,y=h*g,E=f*_,T=f*g;n[0]=m*_,n[4]=E*p-y,n[8]=v*p+T,n[1]=m*g,n[5]=T*p+v,n[9]=y*p-E,n[2]=-p,n[6]=f*m,n[10]=h*m}else if(t.order==="YZX"){const v=h*m,y=h*p,E=f*m,T=f*p;n[0]=m*_,n[4]=T-v*g,n[8]=E*g+y,n[1]=g,n[5]=h*_,n[9]=-f*_,n[2]=-p*_,n[6]=y*g+E,n[10]=v-T*g}else if(t.order==="XZY"){const v=h*m,y=h*p,E=f*m,T=f*p;n[0]=m*_,n[4]=-g,n[8]=p*_,n[1]=v*g+T,n[5]=h*_,n[9]=y*g-E,n[2]=E*g-y,n[6]=f*_,n[10]=T*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(DM,t,UM)}lookAt(t,n,a){const r=this.elements;return Jn.subVectors(t,n),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ns.crossVectors(a,Jn),ns.lengthSq()===0&&(Math.abs(a.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ns.crossVectors(a,Jn)),ns.normalize(),Ou.crossVectors(Jn,ns),r[0]=ns.x,r[4]=Ou.x,r[8]=Jn.x,r[1]=ns.y,r[5]=Ou.y,r[9]=Jn.y,r[2]=ns.z,r[6]=Ou.z,r[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,u=this.elements,h=a[0],f=a[4],m=a[8],p=a[12],_=a[1],g=a[5],v=a[9],y=a[13],E=a[2],T=a[6],M=a[10],x=a[14],D=a[3],L=a[7],z=a[11],P=a[15],I=r[0],w=r[4],Z=r[8],R=r[12],U=r[1],k=r[5],tt=r[9],et=r[13],dt=r[2],ut=r[6],F=r[10],H=r[14],J=r[3],bt=r[7],St=r[11],O=r[15];return u[0]=h*I+f*U+m*dt+p*J,u[4]=h*w+f*k+m*ut+p*bt,u[8]=h*Z+f*tt+m*F+p*St,u[12]=h*R+f*et+m*H+p*O,u[1]=_*I+g*U+v*dt+y*J,u[5]=_*w+g*k+v*ut+y*bt,u[9]=_*Z+g*tt+v*F+y*St,u[13]=_*R+g*et+v*H+y*O,u[2]=E*I+T*U+M*dt+x*J,u[6]=E*w+T*k+M*ut+x*bt,u[10]=E*Z+T*tt+M*F+x*St,u[14]=E*R+T*et+M*H+x*O,u[3]=D*I+L*U+z*dt+P*J,u[7]=D*w+L*k+z*ut+P*bt,u[11]=D*Z+L*tt+z*F+P*St,u[15]=D*R+L*et+z*H+P*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],u=t[12],h=t[1],f=t[5],m=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],E=t[3],T=t[7],M=t[11],x=t[15],D=m*y-p*v,L=f*y-p*g,z=f*v-m*g,P=h*y-p*_,I=h*v-m*_,w=h*g-f*_;return n*(T*D-M*L+x*z)-a*(E*D-M*P+x*I)+r*(E*L-T*P+x*w)-u*(E*z-T*I+M*w)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],E=t[12],T=t[13],M=t[14],x=t[15],D=g*M*p-T*v*p+T*m*y-f*M*y-g*m*x+f*v*x,L=E*v*p-_*M*p-E*m*y+h*M*y+_*m*x-h*v*x,z=_*T*p-E*g*p+E*f*y-h*T*y-_*f*x+h*g*x,P=E*g*m-_*T*m-E*f*v+h*T*v+_*f*M-h*g*M,I=n*D+a*L+r*z+u*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/I;return t[0]=D*w,t[1]=(T*v*u-g*M*u-T*r*y+a*M*y+g*r*x-a*v*x)*w,t[2]=(f*M*u-T*m*u+T*r*p-a*M*p-f*r*x+a*m*x)*w,t[3]=(g*m*u-f*v*u-g*r*p+a*v*p+f*r*y-a*m*y)*w,t[4]=L*w,t[5]=(_*M*u-E*v*u+E*r*y-n*M*y-_*r*x+n*v*x)*w,t[6]=(E*m*u-h*M*u-E*r*p+n*M*p+h*r*x-n*m*x)*w,t[7]=(h*v*u-_*m*u+_*r*p-n*v*p-h*r*y+n*m*y)*w,t[8]=z*w,t[9]=(E*g*u-_*T*u-E*a*y+n*T*y+_*a*x-n*g*x)*w,t[10]=(h*T*u-E*f*u+E*a*p-n*T*p-h*a*x+n*f*x)*w,t[11]=(_*f*u-h*g*u-_*a*p+n*g*p+h*a*y-n*f*y)*w,t[12]=P*w,t[13]=(_*T*r-E*g*r+E*a*v-n*T*v-_*a*M+n*g*M)*w,t[14]=(E*f*r-h*T*r-E*a*m+n*T*m+h*a*M-n*f*M)*w,t[15]=(h*g*r-_*f*r+_*a*m-n*g*m-h*a*v+n*f*v)*w,this}scale(t){const n=this.elements,a=t.x,r=t.y,u=t.z;return n[0]*=a,n[4]*=r,n[8]*=u,n[1]*=a,n[5]*=r,n[9]*=u,n[2]*=a,n[6]*=r,n[10]*=u,n[3]*=a,n[7]*=r,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),u=1-a,h=t.x,f=t.y,m=t.z,p=u*h,_=u*f;return this.set(p*h+a,p*f-r*m,p*m+r*f,0,p*f+r*m,_*f+a,_*m-r*h,0,p*m-r*f,_*m+r*h,u*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,u,h){return this.set(1,a,u,0,t,1,h,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,u=n._x,h=n._y,f=n._z,m=n._w,p=u+u,_=h+h,g=f+f,v=u*p,y=u*_,E=u*g,T=h*_,M=h*g,x=f*g,D=m*p,L=m*_,z=m*g,P=a.x,I=a.y,w=a.z;return r[0]=(1-(T+x))*P,r[1]=(y+z)*P,r[2]=(E-L)*P,r[3]=0,r[4]=(y-z)*I,r[5]=(1-(v+x))*I,r[6]=(M+D)*I,r[7]=0,r[8]=(E+L)*w,r[9]=(M-D)*w,r[10]=(1-(v+T))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let u=Ur.set(r[0],r[1],r[2]).length();const h=Ur.set(r[4],r[5],r[6]).length(),f=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(u=-u),Ei.copy(this);const p=1/u,_=1/h,g=1/f;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,n.setFromRotationMatrix(Ei),a.x=u,a.y=h,a.z=f,this}makePerspective(t,n,a,r,u,h,f=Bi,m=!1){const p=this.elements,_=2*u/(n-t),g=2*u/(a-r),v=(n+t)/(n-t),y=(a+r)/(a-r);let E,T;if(m)E=u/(h-u),T=h*u/(h-u);else if(f===Bi)E=-(h+u)/(h-u),T=-2*h*u/(h-u);else if(f===hc)E=-h/(h-u),T=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,r,u,h,f=Bi,m=!1){const p=this.elements,_=2/(n-t),g=2/(a-r),v=-(n+t)/(n-t),y=-(a+r)/(a-r);let E,T;if(m)E=1/(h-u),T=h/(h-u);else if(f===Bi)E=-2/(h-u),T=-(h+u)/(h-u);else if(f===hc)E=-1/(h-u),T=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};const Ur=new lt,Ei=new dn,DM=new lt(0,0,0),UM=new lt(1,1,1),ns=new lt,Ou=new lt,Jn=new lt,z_=new dn,P_=new pl;let Jr=class sx{constructor(t=0,n=0,a=0,r=sx.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,u=r[0],h=r[4],f=r[8],m=r[1],p=r[5],_=r[9],g=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return z_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(z_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jr.DEFAULT_ORDER="XYZ";let rx=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},LM=0;const F_=new lt,Lr=new pl,da=new dn,zu=new lt,el=new lt,NM=new lt,OM=new pl,I_=new lt(1,0,0),B_=new lt(0,1,0),H_=new lt(0,0,1),V_={type:"added"},zM={type:"removed"},Nr={type:"childadded",child:null},Vf={type:"childremoved",child:null};let Ri=class lc extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lc.DEFAULT_UP.clone();const t=new lt,n=new Jr,a=new pl,r=new lt(1,1,1);function u(){a.setFromEuler(n,!1)}function h(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dn},normalMatrix:{value:new ge}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=lc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(B_,t)}rotateZ(t){return this.rotateOnAxis(H_,t)}translateOnAxis(t,n){return F_.copy(t).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(B_,t)}translateZ(t){return this.translateOnAxis(H_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?zu.copy(t):zu.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(el,zu,this.up):da.lookAt(zu,el,this.up),this.quaternion.setFromRotationMatrix(da),r&&(da.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(da),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(V_),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(zM),Vf.child=t,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(V_),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const h=this.children[a].getObjectByProperty(t,n);if(h!==void 0)return h}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let u=0,h=r.length;u<h;u++)r[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,t,NM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,OM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let u=0,h=r.length;u<h;u++)r[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function u(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(u(t.materials,this.material[m]));r.material=f}else r.material=u(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];r.animations.push(u(t.animations,m))}}if(n){const f=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),v=h(t.skeletons),y=h(t.animations),E=h(t.nodes);f.length>0&&(a.geometries=f),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=r,a;function h(f){const m=[];for(const p in f){const _=f[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}};Ri.DEFAULT_UP=new lt(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new lt,pa=new lt,Gf=new lt,ma=new lt,Or=new lt,zr=new lt,G_=new lt,kf=new lt,Xf=new lt,Wf=new lt,qf=new en,Yf=new en,jf=new en;class Ai{constructor(t=new lt,n=new lt,a=new lt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),bi.subVectors(t,n),r.cross(bi);const u=r.lengthSq();return u>0?r.multiplyScalar(1/Math.sqrt(u)):r.set(0,0,0)}static getBarycoord(t,n,a,r,u){bi.subVectors(r,n),pa.subVectors(a,n),Gf.subVectors(t,n);const h=bi.dot(bi),f=bi.dot(pa),m=bi.dot(Gf),p=pa.dot(pa),_=pa.dot(Gf),g=h*p-f*f;if(g===0)return u.set(0,0,0),null;const v=1/g,y=(p*m-f*_)*v,E=(h*_-f*m)*v;return u.set(1-y-E,E,y)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,n,a,r,u,h,f,m){return this.getBarycoord(t,n,a,r,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(f,ma.z),m)}static getInterpolatedAttribute(t,n,a,r,u,h){return qf.setScalar(0),Yf.setScalar(0),jf.setScalar(0),qf.fromBufferAttribute(t,n),Yf.fromBufferAttribute(t,a),jf.fromBufferAttribute(t,r),h.setScalar(0),h.addScaledVector(qf,u.x),h.addScaledVector(Yf,u.y),h.addScaledVector(jf,u.z),h}static isFrontFacing(t,n,a,r){return bi.subVectors(a,n),pa.subVectors(t,n),bi.cross(pa).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),bi.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ai.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,u){return Ai.getInterpolation(t,this.a,this.b,this.c,n,a,r,u)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,u=this.c;let h,f;Or.subVectors(r,a),zr.subVectors(u,a),kf.subVectors(t,a);const m=Or.dot(kf),p=zr.dot(kf);if(m<=0&&p<=0)return n.copy(a);Xf.subVectors(t,r);const _=Or.dot(Xf),g=zr.dot(Xf);if(_>=0&&g<=_)return n.copy(r);const v=m*g-_*p;if(v<=0&&m>=0&&_<=0)return h=m/(m-_),n.copy(a).addScaledVector(Or,h);Wf.subVectors(t,u);const y=Or.dot(Wf),E=zr.dot(Wf);if(E>=0&&y<=E)return n.copy(u);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return f=p/(p-E),n.copy(a).addScaledVector(zr,f);const M=_*E-y*g;if(M<=0&&g-_>=0&&y-E>=0)return G_.subVectors(u,r),f=(g-_)/(g-_+(y-E)),n.copy(r).addScaledVector(G_,f);const x=1/(M+T+v);return h=T*x,f=v*x,n.copy(a).addScaledVector(Or,h).addScaledVector(zr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Pu={h:0,s:0,l:0};function Zf(l,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?l+(t-l)*6*n:n<1/2?t:n<2/3?l+(t-l)*6*(2/3-n):l}class Oe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ae.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=Ae.workingColorSpace){if(t=SM(t,1),n=Me(n,0,1),a=Me(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,h=2*a-u;this.r=Zf(h,u,t+1/3),this.g=Zf(h,u,t),this.b=Zf(h,u,t-1/3)}return Ae.colorSpaceToWorking(this,r),this}setStyle(t,n=pi){function a(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=r[1],f=r[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:re("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=r[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(h===6)return this.setHex(parseInt(u,16),n);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pi){const a=ox[t.toLowerCase()];return a!==void 0?this.setHex(a,n):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Ae.workingToColorSpace(Ln.copy(this),t),Math.round(Me(Ln.r*255,0,255))*65536+Math.round(Me(Ln.g*255,0,255))*256+Math.round(Me(Ln.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(Ln.copy(this),n);const a=Ln.r,r=Ln.g,u=Ln.b,h=Math.max(a,r,u),f=Math.min(a,r,u);let m,p;const _=(f+h)/2;if(f===h)m=0,p=0;else{const g=h-f;switch(p=_<=.5?g/(h+f):g/(2-h-f),h){case a:m=(r-u)/g+(r<u?6:0);break;case r:m=(u-a)/g+2;break;case u:m=(a-r)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(Ln.copy(this),n),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=pi){Ae.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,a=Ln.g,r=Ln.b;return t!==pi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(is),this.setHSL(is.h+t,is.s+n,is.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(is),t.getHSL(Pu);const a=Uf(is.h,Pu.h,n),r=Uf(is.s,Pu.s,n),u=Uf(is.l,Pu.l,n);return this.setHSL(a,r,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*r,this.g=u[1]*n+u[4]*a+u[7]*r,this.b=u[2]*n+u[5]*a+u[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Oe;Oe.NAMES=ox;let PM=0;class gl extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Wr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){re(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){re(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(a.blending=this.blending),this.side!==hs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Sd&&(a.blendSrc=this.blendSrc),this.blendDst!==Md&&(a.blendDst=this.blendDst),this.blendEquation!==Fs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(u){const h=[];for(const f in u){const m=u[f];delete m.metadata,h.push(m)}return h}if(n){const u=r(t.textures),h=r(t.images);u.length>0&&(a.textures=u),h.length>0&&(a.images=h)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let u=0;u!==r;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class lx extends gl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.combine=xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new lt,Fu=new He;let FM=0;class Gi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=R_,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,u=this.itemSize;r<u;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Fu.fromBufferAttribute(this,n),Fu.applyMatrix3(t),this.setXY(n,Fu.x,Fu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=$o(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Xn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=$o(n,this.array)),n}setX(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=$o(n,this.array)),n}setY(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=$o(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=$o(n,this.array)),n}setW(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),a=Xn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),a=Xn(a,this.array),r=Xn(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,u){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),a=Xn(a,this.array),r=Xn(r,this.array),u=Xn(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==R_&&(t.usage=this.usage),t}}class ux extends Gi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class cx extends Gi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ma extends Gi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let IM=0;const di=new dn,Kf=new Ri,Pr=new lt,ti=new ml,nl=new ml,_n=new lt;class Aa extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tx(t)?cx:ux)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ge().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,n,a){return di.makeTranslation(t,n,a),this.applyMatrix4(di),this}scale(t,n,a){return di.makeScale(t,n,a),this.applyMatrix4(di),this}lookAt(t){return Kf.lookAt(t),Kf.updateMatrix(),this.applyMatrix4(Kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,u=t.length;r<u;r++){const h=t[r];a.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ma(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const u=t[r];n.setXYZ(r,u.x,u.y,u.z||0)}t.length>n.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const u=n[a];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const a=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),n)for(let u=0,h=n.length;u<h;u++){const f=n[u];nl.setFromBufferAttribute(f),this.morphTargetsRelative?(_n.addVectors(ti.min,nl.min),ti.expandByPoint(_n),_n.addVectors(ti.max,nl.max),ti.expandByPoint(_n)):(ti.expandByPoint(nl.min),ti.expandByPoint(nl.max))}ti.getCenter(a);let r=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),r=Math.max(r,a.distanceToSquared(_n));if(n)for(let u=0,h=n.length;u<h;u++){const f=n[u],m=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)_n.fromBufferAttribute(f,p),m&&(Pr.fromBufferAttribute(t,p),_n.add(Pr)),r=Math.max(r,a.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*a.count),4));const h=this.getAttribute("tangent"),f=[],m=[];for(let Z=0;Z<a.count;Z++)f[Z]=new lt,m[Z]=new lt;const p=new lt,_=new lt,g=new lt,v=new He,y=new He,E=new He,T=new lt,M=new lt;function x(Z,R,U){p.fromBufferAttribute(a,Z),_.fromBufferAttribute(a,R),g.fromBufferAttribute(a,U),v.fromBufferAttribute(u,Z),y.fromBufferAttribute(u,R),E.fromBufferAttribute(u,U),_.sub(p),g.sub(p),y.sub(v),E.sub(v);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(k),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(k),f[Z].add(T),f[R].add(T),f[U].add(T),m[Z].add(M),m[R].add(M),m[U].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let Z=0,R=D.length;Z<R;++Z){const U=D[Z],k=U.start,tt=U.count;for(let et=k,dt=k+tt;et<dt;et+=3)x(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const L=new lt,z=new lt,P=new lt,I=new lt;function w(Z){P.fromBufferAttribute(r,Z),I.copy(P);const R=f[Z];L.copy(R),L.sub(P.multiplyScalar(P.dot(R))).normalize(),z.crossVectors(I,R);const k=z.dot(m[Z])<0?-1:1;h.setXYZW(Z,L.x,L.y,L.z,k)}for(let Z=0,R=D.length;Z<R;++Z){const U=D[Z],k=U.start,tt=U.count;for(let et=k,dt=k+tt;et<dt;et+=3)w(t.getX(et+0)),w(t.getX(et+1)),w(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Gi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const r=new lt,u=new lt,h=new lt,f=new lt,m=new lt,p=new lt,_=new lt,g=new lt;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);r.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),_.subVectors(h,u),g.subVectors(r,u),_.cross(g),f.fromBufferAttribute(a,E),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),f.add(_),m.add(_),p.add(_),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),h.fromBufferAttribute(n,v+2),_.subVectors(h,u),g.subVectors(r,u),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)_n.fromBufferAttribute(t,n),_n.normalize(),t.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function t(f,m){const p=f.array,_=f.itemSize,g=f.normalized,v=new p.constructor(m.length*_);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){f.isInterleavedBufferAttribute?y=m[T]*f.data.stride+f.offset:y=m[T]*_;for(let x=0;x<_;x++)v[E++]=p[y++]}return new Gi(v,_,g)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Aa,a=this.index.array,r=this.attributes;for(const f in r){const m=r[f],p=t(m,a);n.setAttribute(f,p)}const u=this.morphAttributes;for(const f in u){const m=[],p=u[f];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=t(v,a);m.push(y)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let f=0,m=h.length;f<m;f++){const p=h[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const r={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(r[m]=_,u=!0)}u&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const p in r){const _=r[p];this.setAttribute(p,_.clone(n))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k_=new dn,Ls=new wM,Iu=new wp,X_=new lt,Bu=new lt,Hu=new lt,Vu=new lt,Qf=new lt,Gu=new lt,W_=new lt,ku=new lt;class Wi extends Ri{constructor(t=new Aa,n=new lx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=r.length;u<h;u++){const f=r[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,u=a.morphAttributes.position,h=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(u&&f){Gu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=f[m],g=u[m];_!==0&&(Qf.fromBufferAttribute(g,t),h?Gu.addScaledVector(Qf,_):Gu.addScaledVector(Qf.sub(n),_))}n.add(Gu)}return n}raycast(t,n){const a=this.geometry,r=this.material,u=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Iu.copy(a.boundingSphere),Iu.applyMatrix4(u),Ls.copy(t.ray).recast(t.near),!(Iu.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Iu,X_)===null||Ls.origin.distanceToSquared(X_)>(t.far-t.near)**2))&&(k_.copy(u).invert(),Ls.copy(t.ray).applyMatrix4(k_),!(a.boundingBox!==null&&Ls.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ls)))}_computeIntersections(t,n,a){let r;const u=this.geometry,h=this.material,f=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,y=u.drawRange;if(f!==null)if(Array.isArray(h))for(let E=0,T=v.length;E<T;E++){const M=v[E],x=h[M.materialIndex],D=Math.max(M.start,y.start),L=Math.min(f.count,Math.min(M.start+M.count,y.start+y.count));for(let z=D,P=L;z<P;z+=3){const I=f.getX(z),w=f.getX(z+1),Z=f.getX(z+2);r=Xu(this,x,t,a,p,_,g,I,w,Z),r&&(r.faceIndex=Math.floor(z/3),r.face.materialIndex=M.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const D=f.getX(M),L=f.getX(M+1),z=f.getX(M+2);r=Xu(this,h,t,a,p,_,g,D,L,z),r&&(r.faceIndex=Math.floor(M/3),n.push(r))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=v.length;E<T;E++){const M=v[E],x=h[M.materialIndex],D=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let z=D,P=L;z<P;z+=3){const I=z,w=z+1,Z=z+2;r=Xu(this,x,t,a,p,_,g,I,w,Z),r&&(r.faceIndex=Math.floor(z/3),r.face.materialIndex=M.materialIndex,n.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,x=T;M<x;M+=3){const D=M,L=M+1,z=M+2;r=Xu(this,h,t,a,p,_,g,D,L,z),r&&(r.faceIndex=Math.floor(M/3),n.push(r))}}}}function BM(l,t,n,a,r,u,h,f){let m;if(t.side===Wn?m=a.intersectTriangle(h,u,r,!0,f):m=a.intersectTriangle(r,u,h,t.side===hs,f),m===null)return null;ku.copy(f),ku.applyMatrix4(l.matrixWorld);const p=n.ray.origin.distanceTo(ku);return p<n.near||p>n.far?null:{distance:p,point:ku.clone(),object:l}}function Xu(l,t,n,a,r,u,h,f,m,p){l.getVertexPosition(f,Bu),l.getVertexPosition(m,Hu),l.getVertexPosition(p,Vu);const _=BM(l,t,n,a,Bu,Hu,Vu,W_);if(_){const g=new lt;Ai.getBarycoord(W_,Bu,Hu,Vu,g),r&&(_.uv=Ai.getInterpolatedAttribute(r,f,m,p,g,new He)),u&&(_.uv1=Ai.getInterpolatedAttribute(u,f,m,p,g,new He)),h&&(_.normal=Ai.getInterpolatedAttribute(h,f,m,p,g,new lt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:m,c:p,normal:new lt,materialIndex:0};Ai.getNormal(Bu,Hu,Vu,v.normal),_.face=v,_.barycoord=g}return _}class to extends Aa{constructor(t=1,n=1,a=1,r=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:u,depthSegments:h};const f=this;r=Math.floor(r),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,t,h,u,0),E("z","y","x",1,-1,a,n,-t,h,u,1),E("x","z","y",1,1,t,a,n,r,h,2),E("x","z","y",1,-1,t,a,-n,r,h,3),E("x","y","z",1,-1,t,n,a,r,u,4),E("x","y","z",-1,-1,t,n,-a,r,u,5),this.setIndex(m),this.setAttribute("position",new Ma(p,3)),this.setAttribute("normal",new Ma(_,3)),this.setAttribute("uv",new Ma(g,2));function E(T,M,x,D,L,z,P,I,w,Z,R){const U=z/w,k=P/Z,tt=z/2,et=P/2,dt=I/2,ut=w+1,F=Z+1;let H=0,J=0;const bt=new lt;for(let St=0;St<F;St++){const O=St*k-et;for(let nt=0;nt<ut;nt++){const vt=nt*U-tt;bt[T]=vt*D,bt[M]=O*L,bt[x]=dt,p.push(bt.x,bt.y,bt.z),bt[T]=0,bt[M]=0,bt[x]=I>0?1:-1,_.push(bt.x,bt.y,bt.z),g.push(nt/w),g.push(1-St/Z),H+=1}}for(let St=0;St<Z;St++)for(let O=0;O<w;O++){const nt=v+O+ut*St,vt=v+O+ut*(St+1),Rt=v+(O+1)+ut*(St+1),It=v+(O+1)+ut*St;m.push(nt,vt,It),m.push(vt,Rt,It),J+=6}f.addGroup(y,J,R),y+=J,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qr(l){const t={};for(const n in l){t[n]={};for(const a in l[n]){const r=l[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function Fn(l){const t={};for(let n=0;n<l.length;n++){const a=Qr(l[n]);for(const r in a)t[r]=a[r]}return t}function HM(l){const t=[];for(let n=0;n<l.length;n++)t.push(l[n].clone());return t}function hx(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const VM={clone:Qr,merge:Fn};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends gl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=kM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=HM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const h=this.uniforms[r].value;h&&h.isTexture?n.uniforms[r]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?n.uniforms[r]={type:"c",value:h.getHex()}:h&&h.isVector2?n.uniforms[r]={type:"v2",value:h.toArray()}:h&&h.isVector3?n.uniforms[r]={type:"v3",value:h.toArray()}:h&&h.isVector4?n.uniforms[r]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?n.uniforms[r]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?n.uniforms[r]={type:"m4",value:h.toArray()}:n.uniforms[r]={value:h}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class fx extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new lt,q_=new He,Y_=new He;class mi extends fx{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=fp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Df*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fp*2*Math.atan(Math.tan(Df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,n){return this.getViewBounds(t,q_,Y_),n.subVectors(Y_,q_)}setViewOffset(t,n,a,r,u,h){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Df*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,u=-.5*r;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*r/m,n-=h.offsetY*a/p,r*=h.width/m,a*=h.height/p}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Ir=1;class XM extends Ri{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mi(Fr,Ir,t,n);r.layers=this.layers,this.add(r);const u=new mi(Fr,Ir,t,n);u.layers=this.layers,this.add(u);const h=new mi(Fr,Ir,t,n);h.layers=this.layers,this.add(h);const f=new mi(Fr,Ir,t,n);f.layers=this.layers,this.add(f);const m=new mi(Fr,Ir,t,n);m.layers=this.layers,this.add(m);const p=new mi(Fr,Ir,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,u,h,f,m]=n;for(const p of n)this.remove(p);if(t===Bi)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===hc)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,f,m,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,u),t.setRenderTarget(a,1,r),t.render(n,h),t.setRenderTarget(a,2,r),t.render(n,f),t.setRenderTarget(a,3,r),t.render(n,m),t.setRenderTarget(a,4,r),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,r),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class dx extends wi{constructor(t=[],n=Gs,a,r,u,h,f,m,p,_){super(t,n,a,r,u,h,f,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class px extends Vi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new dx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new to(5,5,5),u=new qi({name:"CubemapFromEquirect",uniforms:Qr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Wn,blending:ya});u.uniforms.tEquirect.value=n;const h=new Wi(r,u),f=n.minFilter;return n.minFilter===Bs&&(n.minFilter=zn),new XM(1,10,this).update(t,h),n.minFilter=f,h.geometry.dispose(),h.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(n,a,r);t.setRenderTarget(u)}}class Wu extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class $f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,u=null,h=null;const f=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&u!==null&&(r=u),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return f!==null&&(f.visible=r!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Wu;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class qM extends wi{constructor(t=null,n=1,a=1,r,u,h,f,m,p=Rn,_=Rn,g,v){super(null,h,f,m,p,_,r,u,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jf=new lt,YM=new lt,jM=new ge;let Ps=class{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=Jf.subVectors(a,n).cross(YM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Jf),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/r;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||jM.getNormalMatrix(t),r=this.coplanarPoint(Jf).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ns=new wp,ZM=new He(.5,.5),qu=new lt;class Dp{constructor(t=new Ps,n=new Ps,a=new Ps,r=new Ps,u=new Ps,h=new Ps){this.planes=[t,n,a,r,u,h]}set(t,n,a,r,u,h){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(u),f[5].copy(h),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Bi,a=!1){const r=this.planes,u=t.elements,h=u[0],f=u[1],m=u[2],p=u[3],_=u[4],g=u[5],v=u[6],y=u[7],E=u[8],T=u[9],M=u[10],x=u[11],D=u[12],L=u[13],z=u[14],P=u[15];if(r[0].setComponents(p-h,y-_,x-E,P-D).normalize(),r[1].setComponents(p+h,y+_,x+E,P+D).normalize(),r[2].setComponents(p+f,y+g,x+T,P+L).normalize(),r[3].setComponents(p-f,y-g,x-T,P-L).normalize(),a)r[4].setComponents(m,v,M,z).normalize(),r[5].setComponents(p-m,y-v,x-M,P-z).normalize();else if(r[4].setComponents(p-m,y-v,x-M,P-z).normalize(),n===Bi)r[5].setComponents(p+m,y+v,x+M,P+z).normalize();else if(n===hc)r[5].setComponents(m,v,M,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);const n=ZM.distanceTo(t.center);return Ns.radius=.7071067811865476+n,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(qu.x=r.normal.x>0?t.max.x:t.min.x,qu.y=r.normal.y>0?t.max.y:t.min.y,qu.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hl extends wi{constructor(t,n,a=Xi,r,u,h,f=Rn,m=Rn,p,_=Ta,g=1){if(_!==Ta&&_!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,r,u,h,f,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class KM extends hl{constructor(t,n=Xi,a=Gs,r,u,h=Rn,f=Rn,m,p=Ta){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,n,a,r,u,h,f,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mx extends wi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mc extends Aa{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const u=t/2,h=n/2,f=Math.floor(a),m=Math.floor(r),p=f+1,_=m+1,g=t/f,v=n/m,y=[],E=[],T=[],M=[];for(let x=0;x<_;x++){const D=x*v-h;for(let L=0;L<p;L++){const z=L*g-u;E.push(z,-D,0),T.push(0,0,1),M.push(L/f),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<f;D++){const L=D+p*x,z=D+p*(x+1),P=D+1+p*(x+1),I=D+1+p*x;y.push(L,z,I),y.push(z,P,I)}this.setIndex(y),this.setAttribute("position",new Ma(E,3)),this.setAttribute("normal",new Ma(T,3)),this.setAttribute("uv",new Ma(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.width,t.height,t.widthSegments,t.heightSegments)}}class QM extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $M extends gl{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jv,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.combine=xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class JM extends gl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tE extends gl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gx extends Ri{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const td=new dn,j_=new lt,Z_=new lt;class eE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dp,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;j_.setFromMatrixPosition(t.matrixWorld),n.position.copy(j_),Z_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Z_),n.updateMatrixWorld(),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Up extends fx{constructor(t=-1,n=1,a=1,r=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let u=a-t,h=a+t,f=r+n,m=r-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,f-=_*this.view.offsetY,m=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class nE extends eE{constructor(){super(new Up(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iE extends gx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ri.DEFAULT_UP),this.updateMatrix(),this.target=new Ri,this.shadow=new nE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class aE extends gx{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class sE extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function K_(l,t,n,a){const r=rE(a);switch(n){case Kv:return l*t;case $v:return l*t/r.components*r.byteLength;case Ep:return l*t/r.components*r.byteLength;case Zr:return l*t*2/r.components*r.byteLength;case bp:return l*t*2/r.components*r.byteLength;case Qv:return l*t*3/r.components*r.byteLength;case Ci:return l*t*4/r.components*r.byteLength;case Tp:return l*t*4/r.components*r.byteLength;case ic:case ac:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case sc:case rc:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case zd:case Fd:return Math.max(l,16)*Math.max(t,8)/4;case Od:case Pd:return Math.max(l,8)*Math.max(t,8)/2;case Id:case Bd:case Vd:case Gd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Hd:case kd:case Xd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case qd:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case jd:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case $d:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case tp:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case ep:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case np:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case ip:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case ap:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case sp:case rp:case op:return Math.ceil(l/4)*Math.ceil(t/4)*16;case lp:case up:return Math.ceil(l/4)*Math.ceil(t/4)*8;case cp:case hp:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rE(l){switch(l){case ni:case qv:return{byteLength:1,components:1};case ll:case Yv:case ba:return{byteLength:2,components:1};case Sp:case Mp:return{byteLength:2,components:4};case Xi:case yp:case Ii:return{byteLength:4,components:1};case jv:case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);function _x(){let l=null,t=!1,n=null,a=null;function r(u,h){n(u,h),a=l.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=l.requestAnimationFrame(r),t=!0)},stop:function(){l.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){l=u}}}function oE(l){const t=new WeakMap;function n(f,m){const p=f.array,_=f.usage,g=p.byteLength,v=l.createBuffer();l.bindBuffer(m,v),l.bufferData(m,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=l.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=l.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=l.HALF_FLOAT:y=l.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=l.SHORT;else if(p instanceof Uint32Array)y=l.UNSIGNED_INT;else if(p instanceof Int32Array)y=l.INT;else if(p instanceof Int8Array)y=l.BYTE;else if(p instanceof Uint8Array)y=l.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,m,p){const _=m.array,g=m.updateRanges;if(l.bindBuffer(p,f),g.length===0)l.bufferSubData(p,0,_);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],T=g[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,g[v]=T)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const T=g[y];l.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=t.get(f);m&&(l.deleteBuffer(m.buffer),t.delete(f))}function h(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,m),p.version=f.version}}return{get:r,remove:u,update:h}}var lE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uE=`#ifdef USE_ALPHAHASH
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
#endif`,cE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
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
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
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
#endif`,_E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SE=`#ifdef USE_IRIDESCENCE
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
#endif`,ME=`#ifdef USE_BUMPMAP
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
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UE=`#define PI 3.141592653589793
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
} // validated`,LE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NE=`vec3 transformedNormal = objectNormal;
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
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",BE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZE=`#ifdef USE_GRADIENTMAP
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
}`,KE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
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
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sb=`PhysicalMaterial material;
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
#endif`,rb=`uniform sampler2D dfgLUT;
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
}`,ob=`
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_b=`#if defined( USE_POINTS_UV )
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
#endif`,vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`#ifdef USE_MORPHTARGETS
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
#endif`,bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Db=`#ifdef USE_NORMALMAP
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
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qb=`float getShadowMask() {
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
}`,Yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,Zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,n1=`#ifdef USE_TRANSMISSION
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
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
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
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
}`,p1=`#if DEPTH_PACKING == 3200
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
}`,m1=`#define DISTANCE
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
}`,g1=`#define DISTANCE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
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
}`,y1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#define LAMBERT
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
}`,b1=`#define LAMBERT
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
}`,T1=`#define MATCAP
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
}`,A1=`#define MATCAP
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
}`,C1=`#define NORMAL
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
}`,R1=`#define NORMAL
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
}`,w1=`#define PHONG
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
}`,D1=`#define PHONG
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
}`,U1=`#define STANDARD
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
}`,L1=`#define STANDARD
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
}`,N1=`#define TOON
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
}`,O1=`#define TOON
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
}`,z1=`uniform float size;
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
}`,P1=`uniform vec3 diffuse;
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
}`,F1=`#include <common>
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
}`,I1=`uniform vec3 color;
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
}`,B1=`uniform float rotation;
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
}`,H1=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:lE,alphahash_pars_fragment:uE,alphamap_fragment:cE,alphamap_pars_fragment:hE,alphatest_fragment:fE,alphatest_pars_fragment:dE,aomap_fragment:pE,aomap_pars_fragment:mE,batching_pars_vertex:gE,batching_vertex:_E,begin_vertex:vE,beginnormal_vertex:xE,bsdfs:yE,iridescence_fragment:SE,bumpmap_pars_fragment:ME,clipping_planes_fragment:EE,clipping_planes_pars_fragment:bE,clipping_planes_pars_vertex:TE,clipping_planes_vertex:AE,color_fragment:CE,color_pars_fragment:RE,color_pars_vertex:wE,color_vertex:DE,common:UE,cube_uv_reflection_fragment:LE,defaultnormal_vertex:NE,displacementmap_pars_vertex:OE,displacementmap_vertex:zE,emissivemap_fragment:PE,emissivemap_pars_fragment:FE,colorspace_fragment:IE,colorspace_pars_fragment:BE,envmap_fragment:HE,envmap_common_pars_fragment:VE,envmap_pars_fragment:GE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:tb,envmap_vertex:XE,fog_vertex:WE,fog_pars_vertex:qE,fog_fragment:YE,fog_pars_fragment:jE,gradientmap_pars_fragment:ZE,lightmap_pars_fragment:KE,lights_lambert_fragment:QE,lights_lambert_pars_fragment:$E,lights_pars_begin:JE,lights_toon_fragment:eb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:ab,lights_physical_fragment:sb,lights_physical_pars_fragment:rb,lights_fragment_begin:ob,lights_fragment_maps:lb,lights_fragment_end:ub,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:hb,logdepthbuf_pars_vertex:fb,logdepthbuf_vertex:db,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:_b,metalnessmap_fragment:vb,metalnessmap_pars_fragment:xb,morphinstance_vertex:yb,morphcolor_vertex:Sb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Eb,morphtarget_vertex:bb,normal_fragment_begin:Tb,normal_fragment_maps:Ab,normal_pars_fragment:Cb,normal_pars_vertex:Rb,normal_vertex:wb,normalmap_pars_fragment:Db,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Lb,clearcoat_pars_fragment:Nb,iridescence_pars_fragment:Ob,opaque_fragment:zb,packing:Pb,premultiplied_alpha_fragment:Fb,project_vertex:Ib,dithering_fragment:Bb,dithering_pars_fragment:Hb,roughnessmap_fragment:Vb,roughnessmap_pars_fragment:Gb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:Xb,shadowmap_vertex:Wb,shadowmask_pars_fragment:qb,skinbase_vertex:Yb,skinning_pars_vertex:jb,skinning_vertex:Zb,skinnormal_vertex:Kb,specularmap_fragment:Qb,specularmap_pars_fragment:$b,tonemapping_fragment:Jb,tonemapping_pars_fragment:t1,transmission_fragment:e1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:s1,worldpos_vertex:r1,background_vert:o1,background_frag:l1,backgroundCube_vert:u1,backgroundCube_frag:c1,cube_vert:h1,cube_frag:f1,depth_vert:d1,depth_frag:p1,distance_vert:m1,distance_frag:g1,equirect_vert:_1,equirect_frag:v1,linedashed_vert:x1,linedashed_frag:y1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:b1,meshmatcap_vert:T1,meshmatcap_frag:A1,meshnormal_vert:C1,meshnormal_frag:R1,meshphong_vert:w1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:L1,meshtoon_vert:N1,meshtoon_frag:O1,points_vert:z1,points_frag:P1,shadow_vert:F1,shadow_frag:I1,sprite_vert:B1,sprite_frag:H1},Ft={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Pi={basic:{uniforms:Fn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Fn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Oe(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Fn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Fn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Fn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Oe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Fn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Fn([Ft.points,Ft.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Fn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Fn([Ft.common,Ft.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Fn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Fn([Ft.sprite,Ft.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Fn([Ft.common,Ft.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Fn([Ft.lights,Ft.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Pi.physical={uniforms:Fn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Yu={r:0,b:0,g:0},Os=new Jr,V1=new dn;function G1(l,t,n,a,r,u,h){const f=new Oe(0);let m=u===!0?0:1,p,_,g=null,v=0,y=null;function E(L){let z=L.isScene===!0?L.background:null;return z&&z.isTexture&&(z=(L.backgroundBlurriness>0?n:t).get(z)),z}function T(L){let z=!1;const P=E(L);P===null?x(f,m):P&&P.isColor&&(x(P,1),z=!0);const I=l.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,h),(l.autoClear||z)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function M(L,z){const P=E(z);P&&(P.isCubeTexture||P.mapping===pc)?(_===void 0&&(_=new Wi(new to(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Qr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,w,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),Os.copy(z.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(V1.makeRotationFromEuler(Os)),_.material.toneMapped=Ae.getTransfer(P.colorSpace)!==Be,(g!==P||v!==P.version||y!==l.toneMapping)&&(_.material.needsUpdate=!0,g=P,v=P.version,y=l.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Wi(new mc(2,2),new qi({name:"BackgroundMaterial",uniforms:Qr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(P.colorSpace)!==Be,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||y!==l.toneMapping)&&(p.material.needsUpdate=!0,g=P,v=P.version,y=l.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,z){L.getRGB(Yu,hx(l)),a.buffers.color.setClear(Yu.r,Yu.g,Yu.b,z,h)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,z=1){f.set(L),m=z,x(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(f,m)},render:T,addToRenderList:M,dispose:D}}function k1(l,t){const n=l.getParameter(l.MAX_VERTEX_ATTRIBS),a={},r=v(null);let u=r,h=!1;function f(U,k,tt,et,dt){let ut=!1;const F=g(et,tt,k);u!==F&&(u=F,p(u.object)),ut=y(U,et,tt,dt),ut&&E(U,et,tt,dt),dt!==null&&t.update(dt,l.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,z(U,k,tt,et),dt!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return l.createVertexArray()}function p(U){return l.bindVertexArray(U)}function _(U){return l.deleteVertexArray(U)}function g(U,k,tt){const et=tt.wireframe===!0;let dt=a[U.id];dt===void 0&&(dt={},a[U.id]=dt);let ut=dt[k.id];ut===void 0&&(ut={},dt[k.id]=ut);let F=ut[et];return F===void 0&&(F=v(m()),ut[et]=F),F}function v(U){const k=[],tt=[],et=[];for(let dt=0;dt<n;dt++)k[dt]=0,tt[dt]=0,et[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:tt,attributeDivisors:et,object:U,attributes:{},index:null}}function y(U,k,tt,et){const dt=u.attributes,ut=k.attributes;let F=0;const H=tt.getAttributes();for(const J in H)if(H[J].location>=0){const St=dt[J];let O=ut[J];if(O===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),St===void 0||St.attribute!==O||O&&St.data!==O.data)return!0;F++}return u.attributesNum!==F||u.index!==et}function E(U,k,tt,et){const dt={},ut=k.attributes;let F=0;const H=tt.getAttributes();for(const J in H)if(H[J].location>=0){let St=ut[J];St===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(St=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(St=U.instanceColor));const O={};O.attribute=St,St&&St.data&&(O.data=St.data),dt[J]=O,F++}u.attributes=dt,u.attributesNum=F,u.index=et}function T(){const U=u.newAttributes;for(let k=0,tt=U.length;k<tt;k++)U[k]=0}function M(U){x(U,0)}function x(U,k){const tt=u.newAttributes,et=u.enabledAttributes,dt=u.attributeDivisors;tt[U]=1,et[U]===0&&(l.enableVertexAttribArray(U),et[U]=1),dt[U]!==k&&(l.vertexAttribDivisor(U,k),dt[U]=k)}function D(){const U=u.newAttributes,k=u.enabledAttributes;for(let tt=0,et=k.length;tt<et;tt++)k[tt]!==U[tt]&&(l.disableVertexAttribArray(tt),k[tt]=0)}function L(U,k,tt,et,dt,ut,F){F===!0?l.vertexAttribIPointer(U,k,tt,dt,ut):l.vertexAttribPointer(U,k,tt,et,dt,ut)}function z(U,k,tt,et){T();const dt=et.attributes,ut=tt.getAttributes(),F=k.defaultAttributeValues;for(const H in ut){const J=ut[H];if(J.location>=0){let bt=dt[H];if(bt===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(bt=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(bt=U.instanceColor)),bt!==void 0){const St=bt.normalized,O=bt.itemSize,nt=t.get(bt);if(nt===void 0)continue;const vt=nt.buffer,Rt=nt.type,It=nt.bytesPerElement,it=Rt===l.INT||Rt===l.UNSIGNED_INT||bt.gpuType===yp;if(bt.isInterleavedBufferAttribute){const ft=bt.data,Nt=ft.stride,Vt=bt.offset;if(ft.isInstancedInterleavedBuffer){for(let Bt=0;Bt<J.locationSize;Bt++)x(J.location+Bt,ft.meshPerAttribute);U.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Bt=0;Bt<J.locationSize;Bt++)M(J.location+Bt);l.bindBuffer(l.ARRAY_BUFFER,vt);for(let Bt=0;Bt<J.locationSize;Bt++)L(J.location+Bt,O/J.locationSize,Rt,St,Nt*It,(Vt+O/J.locationSize*Bt)*It,it)}else{if(bt.isInstancedBufferAttribute){for(let ft=0;ft<J.locationSize;ft++)x(J.location+ft,bt.meshPerAttribute);U.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ft=0;ft<J.locationSize;ft++)M(J.location+ft);l.bindBuffer(l.ARRAY_BUFFER,vt);for(let ft=0;ft<J.locationSize;ft++)L(J.location+ft,O/J.locationSize,Rt,St,O*It,O/J.locationSize*ft*It,it)}}else if(F!==void 0){const St=F[H];if(St!==void 0)switch(St.length){case 2:l.vertexAttrib2fv(J.location,St);break;case 3:l.vertexAttrib3fv(J.location,St);break;case 4:l.vertexAttrib4fv(J.location,St);break;default:l.vertexAttrib1fv(J.location,St)}}}}D()}function P(){Z();for(const U in a){const k=a[U];for(const tt in k){const et=k[tt];for(const dt in et)_(et[dt].object),delete et[dt];delete k[tt]}delete a[U]}}function I(U){if(a[U.id]===void 0)return;const k=a[U.id];for(const tt in k){const et=k[tt];for(const dt in et)_(et[dt].object),delete et[dt];delete k[tt]}delete a[U.id]}function w(U){for(const k in a){const tt=a[k];if(tt[U.id]===void 0)continue;const et=tt[U.id];for(const dt in et)_(et[dt].object),delete et[dt];delete tt[U.id]}}function Z(){R(),h=!0,u!==r&&(u=r,p(u.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:w,initAttributes:T,enableAttribute:M,disableUnusedAttributes:D}}function X1(l,t,n){let a;function r(p){a=p}function u(p,_){l.drawArrays(a,p,_),n.update(_,a,1)}function h(p,_,g){g!==0&&(l.drawArraysInstanced(a,p,_,g),n.update(_,a,g))}function f(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=_[E];n.update(y,a,1)}function m(p,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],_[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,_,0,v,0,g);let E=0;for(let T=0;T<g;T++)E+=_[T]*v[T];n.update(E,a,1)}}this.setMode=r,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function W1(l,t,n,a){let r;function u(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=l.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function h(w){return!(w!==Ci&&a.convert(w)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(w){const Z=w===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ni&&a.convert(w)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ii&&!Z)}function m(w){if(w==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(re("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),E=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=l.getParameter(l.MAX_TEXTURE_SIZE),M=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),x=l.getParameter(l.MAX_VERTEX_ATTRIBS),D=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),L=l.getParameter(l.MAX_VARYING_VECTORS),z=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),P=l.getParameter(l.MAX_SAMPLES),I=l.getParameter(l.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:z,maxSamples:P,samples:I}}function q1(l){const t=this;let n=null,a=0,r=!1,u=!1;const h=new Ps,f=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||r;return r=v,a=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,x=l.get(g);if(!r||E===null||E.length===0||u&&!M)u?_(null):p();else{const D=u?0:a,L=D*4;let z=x.clippingState||null;m.value=z,z=_(E,v,L,y);for(let P=0;P!==L;++P)z[P]=n[P];x.clippingState=z,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const x=y+T*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,z=y;L!==T;++L,z+=4)h.copy(g[L]).applyMatrix4(D,f),h.normal.toArray(M,z),M[z+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function Y1(l){let t=new WeakMap;function n(h,f){return f===Dd?h.mapping=Gs:f===Ud&&(h.mapping=jr),h}function a(h){if(h&&h.isTexture){const f=h.mapping;if(f===Dd||f===Ud)if(t.has(h)){const m=t.get(h).texture;return n(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new px(m.height);return p.fromEquirectangularTexture(l,h),t.set(h,p),h.addEventListener("dispose",r),n(p.texture,h.mapping)}else return null}}return h}function r(h){const f=h.target;f.removeEventListener("dispose",r);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const us=4,Q_=[.125,.215,.35,.446,.526,.582],Is=20,j1=256,il=new Up,$_=new Oe;let ed=null,nd=0,id=0,ad=!1;const Z1=new lt;class J_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,u={}){const{size:h=256,position:f=Z1}=u;ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,r,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ed,nd,id),this._renderer.xr.enabled=ad,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Gs||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ba,format:Ci,colorSpace:Kr,depthBuffer:!1},r=tv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tv(t,n,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=K1(u)),this._blurMaterial=$1(u,t,n),this._ggxMaterial=Q1(u,t,n)}return r}_compileMaterial(t){const n=new Wi(new Aa,t);this._renderer.compile(n,il)}_sceneToCubeUV(t,n,a,r,u){const m=new mi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor($_),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new to,new lx({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,x=!0):(M.color.copy($_),x=!0);for(let L=0;L<6;L++){const z=L%3;z===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[L],u.y,u.z)):z===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[L]));const P=this._cubeSize;Br(r,z*P,L>2?P:0,P,P),g.setRenderTarget(r),x&&g.render(T,m),g.render(t,m)}g.toneMapping=y,g.autoClear=v,t.background=D}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===Gs||t.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const u=r?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const f=u.uniforms;f.envMap.value=t;const m=this._cubeSize;Br(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(h,il)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let u=1;u<r;u++)this._applyGGXFilter(t,u-1,u);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,f=this._lodMeshes[a];f.material=h;const m=h.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),v=0+p*1.25,y=g*v,{_lodMax:E}=this,T=this._sizeLods[a],M=3*T*(a>E-us?a-E+us:0),x=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-n,Br(u,M,x,3*T,2*T),r.setRenderTarget(u),r.render(f,il),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-a,Br(t,M,x,3*T,2*T),r.setRenderTarget(t),r.render(f,il)}_blur(t,n,a,r,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,n,a,r,"latitudinal",u),this._halfBlur(h,t,a,a,r,"longitudinal",u)}_halfBlur(t,n,a,r,u,h,f){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[r];g.material=p;const v=p.uniforms,y=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Is-1),T=u/E,M=isFinite(u)?1+Math.floor(_*T):Is;M>Is&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Is}`);const x=[];let D=0;for(let w=0;w<Is;++w){const Z=w/T,R=Math.exp(-Z*Z/2);x.push(R),w===0?D+=R:w<M&&(D+=2*R)}for(let w=0;w<x.length;w++)x[w]=x[w]/D;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=h==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const z=this._sizeLods[r],P=3*z*(r>L-us?r-L+us:0),I=4*(this._cubeSize-z);Br(n,P,I,3*z,2*z),m.setRenderTarget(n),m.render(g,il)}}function K1(l){const t=[],n=[],a=[];let r=l;const u=l-us+1+Q_.length;for(let h=0;h<u;h++){const f=Math.pow(2,r);t.push(f);let m=1/f;h>l-us?m=Q_[h-l+us-1]:h===0&&(m=0),n.push(m);const p=1/(f-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,T=3,M=2,x=1,D=new Float32Array(T*E*y),L=new Float32Array(M*E*y),z=new Float32Array(x*E*y);for(let I=0;I<y;I++){const w=I%3*2/3-1,Z=I>2?0:-1,R=[w,Z,0,w+2/3,Z,0,w+2/3,Z+1,0,w,Z,0,w+2/3,Z+1,0,w,Z+1,0];D.set(R,T*E*I),L.set(v,M*E*I);const U=[I,I,I,I,I,I];z.set(U,x*E*I)}const P=new Aa;P.setAttribute("position",new Gi(D,T)),P.setAttribute("uv",new Gi(L,M)),P.setAttribute("faceIndex",new Gi(z,x)),a.push(new Wi(P,null)),r>us&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function tv(l,t,n){const a=new Vi(l,t,n);return a.texture.mapping=pc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Br(l,t,n,a,r){l.viewport.set(t,n,a,r),l.scissor.set(t,n,a,r)}function Q1(l,t,n){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function $1(l,t,n){const a=new Float32Array(Is),r=new lt(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function ev(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function nv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function J1(l){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const m=f.mapping,p=m===Dd||m===Ud,_=m===Gs||m===jr;if(p||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new J_(l)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&r(y)?(n===null&&(n=new J_(l)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function r(f){let m=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&m++;return m===p}function u(f){const m=f.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:h}}function tT(l){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=l.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&cl("WebGLRenderer: "+a+" extension not supported."),r}}}function eT(l,t,n,a){const r={},u=new WeakMap;function h(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete r[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",h),r[v.id]=!0,n.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)t.update(v[y],l.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,E=g.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let L=0,z=D.length;L<z;L+=3){const P=D[L+0],I=D[L+1],w=D[L+2];v.push(P,I,I,w,w,P)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,z=D.length/3-1;L<z;L+=3){const P=L+0,I=L+1,w=L+2;v.push(P,I,I,w,w,P)}}else return;const M=new(tx(v)?cx:ux)(v,1);M.version=T;const x=u.get(g);x&&t.remove(x),u.set(g,M)}function _(g){const v=u.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:f,update:m,getWireframeAttribute:_}}function nT(l,t,n){let a;function r(v){a=v}let u,h;function f(v){u=v.type,h=v.bytesPerElement}function m(v,y){l.drawElements(a,y,u,v*h),n.update(y,a,1)}function p(v,y,E){E!==0&&(l.drawElementsInstanced(a,y,u,v*h,E),n.update(y,a,E))}function _(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,u,v,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];n.update(M,a,1)}function g(v,y,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/h,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,u,v,0,T,0,E);let x=0;for(let D=0;D<E;D++)x+=y[D]*T[D];n.update(x,a,1)}}this.setMode=r,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function iT(l){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,h,f){switch(n.calls++,h){case l.TRIANGLES:n.triangles+=f*(u/3);break;case l.LINES:n.lines+=f*(u/2);break;case l.LINE_STRIP:n.lines+=f*(u-1);break;case l.LINE_LOOP:n.lines+=f*u;break;case l.POINTS:n.points+=f*u;break;default:De("WebGLInfo: Unknown draw mode:",h);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function aT(l,t,n){const a=new WeakMap,r=new en;function u(h,f,m){const p=h.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let U=function(){Z.dispose(),a.delete(f),f.removeEventListener("dispose",U)};var y=U;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let z=0;E===!0&&(z=1),T===!0&&(z=2),M===!0&&(z=3);let P=f.attributes.position.count*z,I=1;P>t.maxTextureSize&&(I=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*I*4*g),Z=new ax(w,P,I,g);Z.type=Ii,Z.needsUpdate=!0;const R=z*4;for(let k=0;k<g;k++){const tt=x[k],et=D[k],dt=L[k],ut=P*I*4*k;for(let F=0;F<tt.count;F++){const H=F*R;E===!0&&(r.fromBufferAttribute(tt,F),w[ut+H+0]=r.x,w[ut+H+1]=r.y,w[ut+H+2]=r.z,w[ut+H+3]=0),T===!0&&(r.fromBufferAttribute(et,F),w[ut+H+4]=r.x,w[ut+H+5]=r.y,w[ut+H+6]=r.z,w[ut+H+7]=0),M===!0&&(r.fromBufferAttribute(dt,F),w[ut+H+8]=r.x,w[ut+H+9]=r.y,w[ut+H+10]=r.z,w[ut+H+11]=dt.itemSize===4?r.w:1)}}v={count:g,texture:Z,size:new He(P,I)},a.set(f,v),f.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(l,"morphTexture",h.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(l,"morphTargetBaseInfluence",T),m.getUniforms().setValue(l,"morphTargetInfluences",p)}m.getUniforms().setValue(l,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}return{update:u}}function sT(l,t,n,a){let r=new WeakMap;function u(m){const p=a.render.frame,_=m.geometry,g=t.get(m,_);if(r.get(g)!==p&&(t.update(g),r.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),r.get(m)!==p&&(n.update(m.instanceMatrix,l.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,l.ARRAY_BUFFER),r.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return g}function h(){r=new WeakMap}function f(m){const p=m.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:h}}const rT={[Iv]:"LINEAR_TONE_MAPPING",[Bv]:"REINHARD_TONE_MAPPING",[Hv]:"CINEON_TONE_MAPPING",[Vv]:"ACES_FILMIC_TONE_MAPPING",[kv]:"AGX_TONE_MAPPING",[Xv]:"NEUTRAL_TONE_MAPPING",[Gv]:"CUSTOM_TONE_MAPPING"};function oT(l,t,n,a,r){const u=new Vi(t,n,{type:l,depthBuffer:a,stencilBuffer:r}),h=new Vi(t,n,{type:ba,depthBuffer:!1,stencilBuffer:!1}),f=new Aa;f.setAttribute("position",new Ma([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ma([0,2,0,0,2,0],2));const m=new QM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Wi(f,m),_=new Up(-1,1,1,-1,0,1);let g=null,v=null,y=!1,E,T=null,M=[],x=!1;this.setSize=function(D,L){u.setSize(D,L),h.setSize(D,L);for(let z=0;z<M.length;z++){const P=M[z];P.setSize&&P.setSize(D,L)}},this.setEffects=function(D){M=D,x=M.length>0&&M[0].isRenderPass===!0;const L=u.width,z=u.height;for(let P=0;P<M.length;P++){const I=M[P];I.setSize&&I.setSize(L,z)}},this.begin=function(D,L){if(y||D.toneMapping===Hi&&M.length===0)return!1;if(T=L,L!==null){const z=L.width,P=L.height;(u.width!==z||u.height!==P)&&this.setSize(z,P)}return x===!1&&D.setRenderTarget(u),E=D.toneMapping,D.toneMapping=Hi,!0},this.hasRenderPass=function(){return x},this.end=function(D,L){D.toneMapping=E,y=!0;let z=u,P=h;for(let I=0;I<M.length;I++){const w=M[I];if(w.enabled!==!1&&(w.render(D,P,z,L),w.needsSwap!==!1)){const Z=z;z=P,P=Z}}if(g!==D.outputColorSpace||v!==D.toneMapping){g=D.outputColorSpace,v=D.toneMapping,m.defines={},Ae.getTransfer(g)===Be&&(m.defines.SRGB_TRANSFER="");const I=rT[v];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=z.texture,D.setRenderTarget(T),D.render(p,_),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),h.dispose(),f.dispose(),m.dispose()}}const vx=new wi,pp=new hl(1,1),xx=new ax,yx=new CM,Sx=new dx,iv=[],av=[],sv=new Float32Array(16),rv=new Float32Array(9),ov=new Float32Array(4);function eo(l,t,n){const a=l[0];if(a<=0||a>0)return l;const r=t*n;let u=iv[r];if(u===void 0&&(u=new Float32Array(r),iv[r]=u),t!==0){a.toArray(u,0);for(let h=1,f=0;h!==t;++h)f+=n,l[h].toArray(u,f)}return u}function pn(l,t){if(l.length!==t.length)return!1;for(let n=0,a=l.length;n<a;n++)if(l[n]!==t[n])return!1;return!0}function mn(l,t){for(let n=0,a=t.length;n<a;n++)l[n]=t[n]}function _c(l,t){let n=av[t];n===void 0&&(n=new Int32Array(t),av[t]=n);for(let a=0;a!==t;++a)n[a]=l.allocateTextureUnit();return n}function lT(l,t){const n=this.cache;n[0]!==t&&(l.uniform1f(this.addr,t),n[0]=t)}function uT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;l.uniform2fv(this.addr,t),mn(n,t)}}function cT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(pn(n,t))return;l.uniform3fv(this.addr,t),mn(n,t)}}function hT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;l.uniform4fv(this.addr,t),mn(n,t)}}function fT(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(pn(n,t))return;l.uniformMatrix2fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,a))return;ov.set(a),l.uniformMatrix2fv(this.addr,!1,ov),mn(n,a)}}function dT(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(pn(n,t))return;l.uniformMatrix3fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,a))return;rv.set(a),l.uniformMatrix3fv(this.addr,!1,rv),mn(n,a)}}function pT(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(pn(n,t))return;l.uniformMatrix4fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,a))return;sv.set(a),l.uniformMatrix4fv(this.addr,!1,sv),mn(n,a)}}function mT(l,t){const n=this.cache;n[0]!==t&&(l.uniform1i(this.addr,t),n[0]=t)}function gT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;l.uniform2iv(this.addr,t),mn(n,t)}}function _T(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;l.uniform3iv(this.addr,t),mn(n,t)}}function vT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;l.uniform4iv(this.addr,t),mn(n,t)}}function xT(l,t){const n=this.cache;n[0]!==t&&(l.uniform1ui(this.addr,t),n[0]=t)}function yT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;l.uniform2uiv(this.addr,t),mn(n,t)}}function ST(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;l.uniform3uiv(this.addr,t),mn(n,t)}}function MT(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;l.uniform4uiv(this.addr,t),mn(n,t)}}function ET(l,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(l.uniform1i(this.addr,r),a[0]=r);let u;this.type===l.SAMPLER_2D_SHADOW?(pp.compareFunction=n.isReversedDepthBuffer()?Cp:Ap,u=pp):u=vx,n.setTexture2D(t||u,r)}function bT(l,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(l.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||yx,r)}function TT(l,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(l.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||Sx,r)}function AT(l,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(l.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||xx,r)}function CT(l){switch(l){case 5126:return lT;case 35664:return uT;case 35665:return cT;case 35666:return hT;case 35674:return fT;case 35675:return dT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return yT;case 36295:return ST;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}function RT(l,t){l.uniform1fv(this.addr,t)}function wT(l,t){const n=eo(t,this.size,2);l.uniform2fv(this.addr,n)}function DT(l,t){const n=eo(t,this.size,3);l.uniform3fv(this.addr,n)}function UT(l,t){const n=eo(t,this.size,4);l.uniform4fv(this.addr,n)}function LT(l,t){const n=eo(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,n)}function NT(l,t){const n=eo(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,n)}function OT(l,t){const n=eo(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,n)}function zT(l,t){l.uniform1iv(this.addr,t)}function PT(l,t){l.uniform2iv(this.addr,t)}function FT(l,t){l.uniform3iv(this.addr,t)}function IT(l,t){l.uniform4iv(this.addr,t)}function BT(l,t){l.uniform1uiv(this.addr,t)}function HT(l,t){l.uniform2uiv(this.addr,t)}function VT(l,t){l.uniform3uiv(this.addr,t)}function GT(l,t){l.uniform4uiv(this.addr,t)}function kT(l,t,n){const a=this.cache,r=t.length,u=_c(n,r);pn(a,u)||(l.uniform1iv(this.addr,u),mn(a,u));let h;this.type===l.SAMPLER_2D_SHADOW?h=pp:h=vx;for(let f=0;f!==r;++f)n.setTexture2D(t[f]||h,u[f])}function XT(l,t,n){const a=this.cache,r=t.length,u=_c(n,r);pn(a,u)||(l.uniform1iv(this.addr,u),mn(a,u));for(let h=0;h!==r;++h)n.setTexture3D(t[h]||yx,u[h])}function WT(l,t,n){const a=this.cache,r=t.length,u=_c(n,r);pn(a,u)||(l.uniform1iv(this.addr,u),mn(a,u));for(let h=0;h!==r;++h)n.setTextureCube(t[h]||Sx,u[h])}function qT(l,t,n){const a=this.cache,r=t.length,u=_c(n,r);pn(a,u)||(l.uniform1iv(this.addr,u),mn(a,u));for(let h=0;h!==r;++h)n.setTexture2DArray(t[h]||xx,u[h])}function YT(l){switch(l){case 5126:return RT;case 35664:return wT;case 35665:return DT;case 35666:return UT;case 35674:return LT;case 35675:return NT;case 35676:return OT;case 5124:case 35670:return zT;case 35667:case 35671:return PT;case 35668:case 35672:return FT;case 35669:case 35673:return IT;case 5125:return BT;case 36294:return HT;case 36295:return VT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}class jT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=CT(n.type)}}class ZT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YT(n.type)}}class KT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let u=0,h=r.length;u!==h;++u){const f=r[u];f.setValue(t,n[f.id],a)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function lv(l,t){l.seq.push(t),l.map[t.id]=t}function QT(l,t,n){const a=l.name,r=a.length;for(sd.lastIndex=0;;){const u=sd.exec(a),h=sd.lastIndex;let f=u[1];const m=u[2]==="]",p=u[3];if(m&&(f=f|0),p===void 0||p==="["&&h+2===r){lv(n,p===void 0?new jT(f,l,t):new ZT(f,l,t));break}else{let g=n.map[f];g===void 0&&(g=new KT(f),lv(n,g)),n=g}}}class uc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let h=0;h<a;++h){const f=t.getActiveUniform(n,h),m=t.getUniformLocation(n,f.name);QT(f,m,this)}const r=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(h):u.push(h);r.length>0&&(this.seq=r.concat(u))}setValue(t,n,a,r){const u=this.map[n];u!==void 0&&u.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let u=0,h=n.length;u!==h;++u){const f=n[u],m=a[f.id];m.needsUpdate!==!1&&f.setValue(t,m.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,u=t.length;r!==u;++r){const h=t[r];h.id in n&&a.push(h)}return a}}function uv(l,t,n){const a=l.createShader(t);return l.shaderSource(a,n),l.compileShader(a),a}const $T=37297;let JT=0;function tA(l,t){const n=l.split(`
`),a=[],r=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let h=r;h<u;h++){const f=h+1;a.push(`${f===t?">":" "} ${f}: ${n[h]}`)}return a.join(`
`)}const cv=new ge;function eA(l){Ae._getMatrix(cv,Ae.workingColorSpace,l);const t=`mat3( ${cv.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(l)){case cc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",l),[t,"LinearTransferOETF"]}}function hv(l,t,n){const a=l.getShaderParameter(t,l.COMPILE_STATUS),u=(l.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const f=parseInt(h[1]);return n.toUpperCase()+`

`+u+`

`+tA(l.getShaderSource(t),f)}else return u}function nA(l,t){const n=eA(t);return[`vec4 ${l}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const iA={[Iv]:"Linear",[Bv]:"Reinhard",[Hv]:"Cineon",[Vv]:"ACESFilmic",[kv]:"AgX",[Xv]:"Neutral",[Gv]:"Custom"};function aA(l,t){const n=iA[t];return n===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+l+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+l+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ju=new lt;function sA(){Ae.getLuminanceCoefficients(ju);const l=ju.x.toFixed(4),t=ju.y.toFixed(4),n=ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function oA(l){const t=[];for(const n in l){const a=l[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function lA(l,t){const n={},a=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const u=l.getActiveAttrib(t,r),h=u.name;let f=1;u.type===l.FLOAT_MAT2&&(f=2),u.type===l.FLOAT_MAT3&&(f=3),u.type===l.FLOAT_MAT4&&(f=4),n[h]={type:u.type,location:l.getAttribLocation(t,h),locationSize:f}}return n}function ol(l){return l!==""}function fv(l,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dv(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(l){return l.replace(uA,hA)}const cA=new Map;function hA(l,t){let n=de[t];if(n===void 0){const a=cA.get(t);if(a!==void 0)n=de[a],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return mp(n)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(l){return l.replace(fA,dA)}function dA(l,t,n,a){let r="";for(let u=parseInt(t);u<parseInt(n);u++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return r}function mv(l){let t=`precision ${l.precision} float;
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
#define LOW_PRECISION`),t}const pA={[nc]:"SHADOWMAP_TYPE_PCF",[rl]:"SHADOWMAP_TYPE_VSM"};function mA(l){return pA[l.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gA={[Gs]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[pc]:"ENVMAP_TYPE_CUBE_UV"};function _A(l){return l.envMap===!1?"ENVMAP_TYPE_CUBE":gA[l.envMapMode]||"ENVMAP_TYPE_CUBE"}const vA={[jr]:"ENVMAP_MODE_REFRACTION"};function xA(l){return l.envMap===!1?"ENVMAP_MODE_REFLECTION":vA[l.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yA={[xp]:"ENVMAP_BLENDING_MULTIPLY",[lM]:"ENVMAP_BLENDING_MIX",[uM]:"ENVMAP_BLENDING_ADD"};function SA(l){return l.envMap===!1?"ENVMAP_BLENDING_NONE":yA[l.combine]||"ENVMAP_BLENDING_NONE"}function MA(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function EA(l,t,n,a){const r=l.getContext(),u=n.defines;let h=n.vertexShader,f=n.fragmentShader;const m=mA(n),p=_A(n),_=xA(n),g=SA(n),v=MA(n),y=rA(n),E=oA(u),T=r.createProgram();let M,x,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ol).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ol).join(`
`),x.length>0&&(x+=`
`)):(M=[mv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),x=[mv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?de.tonemapping_pars_fragment:"",n.toneMapping!==Hi?aA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,nA("linearToOutputTexel",n.outputColorSpace),sA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ol).join(`
`)),h=mp(h),h=fv(h,n),h=dv(h,n),f=mp(f),f=fv(f,n),f=dv(f,n),h=pv(h),f=pv(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=D+M+h,z=D+x+f,P=uv(r,r.VERTEX_SHADER,L),I=uv(r,r.FRAGMENT_SHADER,z);r.attachShader(T,P),r.attachShader(T,I),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function w(k){if(l.debug.checkShaderErrors){const tt=r.getProgramInfoLog(T)||"",et=r.getShaderInfoLog(P)||"",dt=r.getShaderInfoLog(I)||"",ut=tt.trim(),F=et.trim(),H=dt.trim();let J=!0,bt=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(J=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(r,T,P,I);else{const St=hv(r,P,"vertex"),O=hv(r,I,"fragment");De("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ut+`
`+St+`
`+O)}else ut!==""?re("WebGLProgram: Program Info Log:",ut):(F===""||H==="")&&(bt=!1);bt&&(k.diagnostics={runnable:J,programLog:ut,vertexShader:{log:F,prefix:M},fragmentShader:{log:H,prefix:x}})}r.deleteShader(P),r.deleteShader(I),Z=new uc(r,T),R=lA(r,T)}let Z;this.getUniforms=function(){return Z===void 0&&w(this),Z};let R;this.getAttributes=function(){return R===void 0&&w(this),R};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(T,$T)),U},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let bA=0;class TA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),u=this._getShaderStage(a),h=this._getShaderCacheForMaterial(t);return h.has(r)===!1&&(h.add(r),r.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new AA(t),n.set(t,a)),a}}class AA{constructor(t){this.id=bA++,this.code=t,this.usedTimes=0}}function CA(l,t,n,a,r,u,h){const f=new rx,m=new TA,p=new Set,_=[],g=new Map,v=r.logarithmicDepthBuffer;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,U,k,tt,et){const dt=tt.fog,ut=et.geometry,F=R.isMeshStandardMaterial?tt.environment:null,H=(R.isMeshStandardMaterial?n:t).get(R.envMap||F),J=H&&H.mapping===pc?H.image.height:null,bt=E[R.type];R.precision!==null&&(y=r.getMaxPrecision(R.precision),y!==R.precision&&re("WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,O=St!==void 0?St.length:0;let nt=0;ut.morphAttributes.position!==void 0&&(nt=1),ut.morphAttributes.normal!==void 0&&(nt=2),ut.morphAttributes.color!==void 0&&(nt=3);let vt,Rt,It,it;if(bt){const Te=Pi[bt];vt=Te.vertexShader,Rt=Te.fragmentShader}else vt=R.vertexShader,Rt=R.fragmentShader,m.update(R),It=m.getVertexShaderID(R),it=m.getFragmentShaderID(R);const ft=l.getRenderTarget(),Nt=l.state.buffers.depth.getReversed(),Vt=et.isInstancedMesh===!0,Bt=et.isBatchedMesh===!0,pe=!!R.map,Ze=!!R.matcap,me=!!H,he=!!R.aoMap,Ee=!!R.lightMap,ie=!!R.bumpMap,Ke=!!R.normalMap,G=!!R.displacementMap,Ve=!!R.emissiveMap,fe=!!R.metalnessMap,Ce=!!R.roughnessMap,Wt=R.anisotropy>0,N=R.clearcoat>0,b=R.dispersion>0,q=R.iridescence>0,mt=R.sheen>0,Mt=R.transmission>0,ht=Wt&&!!R.anisotropyMap,qt=N&&!!R.clearcoatMap,Ut=N&&!!R.clearcoatNormalMap,Gt=N&&!!R.clearcoatRoughnessMap,V=q&&!!R.iridescenceMap,at=q&&!!R.iridescenceThicknessMap,yt=mt&&!!R.sheenColorMap,At=mt&&!!R.sheenRoughnessMap,wt=!!R.specularMap,Dt=!!R.specularColorMap,ne=!!R.specularIntensityMap,W=Mt&&!!R.transmissionMap,Ot=Mt&&!!R.thicknessMap,Tt=!!R.gradientMap,Lt=!!R.alphaMap,Et=R.alphaTest>0,_t=!!R.alphaHash,Ct=!!R.extensions;let Jt=Hi;R.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Jt=l.toneMapping);const be={shaderID:bt,shaderType:R.type,shaderName:R.name,vertexShader:vt,fragmentShader:Rt,defines:R.defines,customVertexShaderID:It,customFragmentShaderID:it,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Bt,batchingColor:Bt&&et._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&et.instanceColor!==null,instancingMorph:Vt&&et.morphTexture!==null,outputColorSpace:ft===null?l.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Kr,alphaToCoverage:!!R.alphaToCoverage,map:pe,matcap:Ze,envMap:me,envMapMode:me&&H.mapping,envMapCubeUVHeight:J,aoMap:he,lightMap:Ee,bumpMap:ie,normalMap:Ke,displacementMap:G,emissiveMap:Ve,normalMapObjectSpace:Ke&&R.normalMapType===fM,normalMapTangentSpace:Ke&&R.normalMapType===Jv,metalnessMap:fe,roughnessMap:Ce,anisotropy:Wt,anisotropyMap:ht,clearcoat:N,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:b,iridescence:q,iridescenceMap:V,iridescenceThicknessMap:at,sheen:mt,sheenColorMap:yt,sheenRoughnessMap:At,specularMap:wt,specularColorMap:Dt,specularIntensityMap:ne,transmission:Mt,transmissionMap:W,thicknessMap:Ot,gradientMap:Tt,opaque:R.transparent===!1&&R.blending===Wr&&R.alphaToCoverage===!1,alphaMap:Lt,alphaTest:Et,alphaHash:_t,combine:R.combine,mapUv:pe&&T(R.map.channel),aoMapUv:he&&T(R.aoMap.channel),lightMapUv:Ee&&T(R.lightMap.channel),bumpMapUv:ie&&T(R.bumpMap.channel),normalMapUv:Ke&&T(R.normalMap.channel),displacementMapUv:G&&T(R.displacementMap.channel),emissiveMapUv:Ve&&T(R.emissiveMap.channel),metalnessMapUv:fe&&T(R.metalnessMap.channel),roughnessMapUv:Ce&&T(R.roughnessMap.channel),anisotropyMapUv:ht&&T(R.anisotropyMap.channel),clearcoatMapUv:qt&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:at&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:At&&T(R.sheenRoughnessMap.channel),specularMapUv:wt&&T(R.specularMap.channel),specularColorMapUv:Dt&&T(R.specularColorMap.channel),specularIntensityMapUv:ne&&T(R.specularIntensityMap.channel),transmissionMapUv:W&&T(R.transmissionMap.channel),thicknessMapUv:Ot&&T(R.thicknessMap.channel),alphaMapUv:Lt&&T(R.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Ke||Wt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ut.attributes.uv&&(pe||Lt),fog:!!dt,useFog:R.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Nt,skinning:et.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:nt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:l.shadowMap.enabled&&k.length>0,shadowMapType:l.shadowMap.type,toneMapping:Jt,decodeVideoTexture:pe&&R.map.isVideoTexture===!0&&Ae.getTransfer(R.map.colorSpace)===Be,decodeVideoTextureEmissive:Ve&&R.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(R.emissiveMap.colorSpace)===Be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===va,flipSided:R.side===Wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ct&&R.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&R.extensions.multiDraw===!0||Bt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return be.vertexUv1s=p.has(1),be.vertexUv2s=p.has(2),be.vertexUv3s=p.has(3),p.clear(),be}function x(R){const U=[];if(R.shaderID?U.push(R.shaderID):(U.push(R.customVertexShaderID),U.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)U.push(k),U.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(D(U,R),L(U,R),U.push(l.outputColorSpace)),U.push(R.customProgramCacheKey),U.join()}function D(R,U){R.push(U.precision),R.push(U.outputColorSpace),R.push(U.envMapMode),R.push(U.envMapCubeUVHeight),R.push(U.mapUv),R.push(U.alphaMapUv),R.push(U.lightMapUv),R.push(U.aoMapUv),R.push(U.bumpMapUv),R.push(U.normalMapUv),R.push(U.displacementMapUv),R.push(U.emissiveMapUv),R.push(U.metalnessMapUv),R.push(U.roughnessMapUv),R.push(U.anisotropyMapUv),R.push(U.clearcoatMapUv),R.push(U.clearcoatNormalMapUv),R.push(U.clearcoatRoughnessMapUv),R.push(U.iridescenceMapUv),R.push(U.iridescenceThicknessMapUv),R.push(U.sheenColorMapUv),R.push(U.sheenRoughnessMapUv),R.push(U.specularMapUv),R.push(U.specularColorMapUv),R.push(U.specularIntensityMapUv),R.push(U.transmissionMapUv),R.push(U.thicknessMapUv),R.push(U.combine),R.push(U.fogExp2),R.push(U.sizeAttenuation),R.push(U.morphTargetsCount),R.push(U.morphAttributeCount),R.push(U.numDirLights),R.push(U.numPointLights),R.push(U.numSpotLights),R.push(U.numSpotLightMaps),R.push(U.numHemiLights),R.push(U.numRectAreaLights),R.push(U.numDirLightShadows),R.push(U.numPointLightShadows),R.push(U.numSpotLightShadows),R.push(U.numSpotLightShadowsWithMaps),R.push(U.numLightProbes),R.push(U.shadowMapType),R.push(U.toneMapping),R.push(U.numClippingPlanes),R.push(U.numClipIntersection),R.push(U.depthPacking)}function L(R,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),R.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),R.push(f.mask)}function z(R){const U=E[R.type];let k;if(U){const tt=Pi[U];k=VM.clone(tt.uniforms)}else k=R.uniforms;return k}function P(R,U){let k=g.get(U);return k!==void 0?++k.usedTimes:(k=new EA(l,U,R,u),_.push(k),g.set(U,k)),k}function I(R){if(--R.usedTimes===0){const U=_.indexOf(R);_[U]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function w(R){m.remove(R)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:z,acquireProgram:P,releaseProgram:I,releaseShaderCache:w,programs:_,dispose:Z}}function RA(){let l=new WeakMap;function t(h){return l.has(h)}function n(h){let f=l.get(h);return f===void 0&&(f={},l.set(h,f)),f}function a(h){l.delete(h)}function r(h,f,m){l.get(h)[f]=m}function u(){l=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:u}}function wA(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function gv(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function _v(){const l=[];let t=0;const n=[],a=[],r=[];function u(){t=0,n.length=0,a.length=0,r.length=0}function h(g,v,y,E,T,M){let x=l[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},l[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=T,x.group=M),t++,x}function f(g,v,y,E,T,M){const x=h(g,v,y,E,T,M);y.transmission>0?a.push(x):y.transparent===!0?r.push(x):n.push(x)}function m(g,v,y,E,T,M){const x=h(g,v,y,E,T,M);y.transmission>0?a.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function p(g,v){n.length>1&&n.sort(g||wA),a.length>1&&a.sort(v||gv),r.length>1&&r.sort(v||gv)}function _(){for(let g=t,v=l.length;g<v;g++){const y=l[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:r,init:u,push:f,unshift:m,finish:_,sort:p}}function DA(){let l=new WeakMap;function t(a,r){const u=l.get(a);let h;return u===void 0?(h=new _v,l.set(a,[h])):r>=u.length?(h=new _v,u.push(h)):h=u[r],h}function n(){l=new WeakMap}return{get:t,dispose:n}}function UA(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new Oe};break;case"SpotLight":n={position:new lt,direction:new lt,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return l[t.id]=n,n}}}function LA(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=n,n}}}let NA=0;function OA(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function zA(l){const t=new UA,n=LA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new lt);const r=new lt,u=new dn,h=new dn;function f(p){let _=0,g=0,v=0;for(let R=0;R<9;R++)a.probe[R].set(0,0,0);let y=0,E=0,T=0,M=0,x=0,D=0,L=0,z=0,P=0,I=0,w=0;p.sort(OA);for(let R=0,U=p.length;R<U;R++){const k=p[R],tt=k.color,et=k.intensity,dt=k.distance;let ut=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Zr?ut=k.shadow.map.texture:ut=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=tt.r*et,g+=tt.g*et,v+=tt.b*et;else if(k.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(k.sh.coefficients[F],et);w++}else if(k.isDirectionalLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,J=n.get(k);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.directionalShadow[y]=J,a.directionalShadowMap[y]=ut,a.directionalShadowMatrix[y]=k.shadow.matrix,D++}a.directional[y]=F,y++}else if(k.isSpotLight){const F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(tt).multiplyScalar(et),F.distance=dt,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,a.spot[T]=F;const H=k.shadow;if(k.map&&(a.spotLightMap[P]=k.map,P++,H.updateMatrices(k),k.castShadow&&I++),a.spotLightMatrix[T]=H.matrix,k.castShadow){const J=n.get(k);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.spotShadow[T]=J,a.spotShadowMap[T]=ut,z++}T++}else if(k.isRectAreaLight){const F=t.get(k);F.color.copy(tt).multiplyScalar(et),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),a.rectArea[M]=F,M++}else if(k.isPointLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const H=k.shadow,J=n.get(k);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,a.pointShadow[E]=J,a.pointShadowMap[E]=ut,a.pointShadowMatrix[E]=k.shadow.matrix,L++}a.point[E]=F,E++}else if(k.isHemisphereLight){const F=t.get(k);F.skyColor.copy(k.color).multiplyScalar(et),F.groundColor.copy(k.groundColor).multiplyScalar(et),a.hemi[x]=F,x++}}M>0&&(l.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ft.LTC_FLOAT_1,a.rectAreaLTC2=Ft.LTC_FLOAT_2):(a.rectAreaLTC1=Ft.LTC_HALF_1,a.rectAreaLTC2=Ft.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const Z=a.hash;(Z.directionalLength!==y||Z.pointLength!==E||Z.spotLength!==T||Z.rectAreaLength!==M||Z.hemiLength!==x||Z.numDirectionalShadows!==D||Z.numPointShadows!==L||Z.numSpotShadows!==z||Z.numSpotMaps!==P||Z.numLightProbes!==w)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=z,a.spotShadowMap.length=z,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=z+P-I,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=w,Z.directionalLength=y,Z.pointLength=E,Z.spotLength=T,Z.rectAreaLength=M,Z.hemiLength=x,Z.numDirectionalShadows=D,Z.numPointShadows=L,Z.numSpotShadows=z,Z.numSpotMaps=P,Z.numLightProbes=w,a.version=NA++)}function m(p,_){let g=0,v=0,y=0,E=0,T=0;const M=_.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const L=p[x];if(L.isDirectionalLight){const z=a.directional[g];z.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(M),g++}else if(L.isSpotLight){const z=a.spot[y];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(M),z.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(r),z.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const z=a.rectArea[E];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(M),h.identity(),u.copy(L.matrixWorld),u.premultiply(M),h.extractRotation(u),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const z=a.point[v];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(M),v++}else if(L.isHemisphereLight){const z=a.hemi[T];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(M),T++}}}return{setup:f,setupView:m,state:a}}function vv(l){const t=new zA(l),n=[],a=[];function r(_){p.camera=_,n.length=0,a.length=0}function u(_){n.push(_)}function h(_){a.push(_)}function f(){t.setup(n)}function m(_){t.setupView(n,_)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:f,setupLightsView:m,pushLight:u,pushShadow:h}}function PA(l){let t=new WeakMap;function n(r,u=0){const h=t.get(r);let f;return h===void 0?(f=new vv(l),t.set(r,[f])):u>=h.length?(f=new vv(l),h.push(f)):f=h[u],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
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
}`,BA=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],HA=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],xv=new dn,al=new lt,rd=new lt;function VA(l,t,n){let a=new Dp;const r=new He,u=new He,h=new en,f=new JM,m=new tE,p={},_=n.maxTextureSize,g={[hs]:Wn,[Wn]:hs,[va]:va},v=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:FA,fragmentShader:IA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Aa;E.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Wi(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let x=this.type;this.render=function(I,w,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;I.type===kS&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=nc);const R=l.getRenderTarget(),U=l.getActiveCubeFace(),k=l.getActiveMipmapLevel(),tt=l.state;tt.setBlending(ya),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const et=x!==this.type;et&&w.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ut=>ut.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ut=I.length;dt<ut;dt++){const F=I[dt],H=F.shadow;if(H===void 0){re("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const J=H.getFrameExtents();if(r.multiply(J),u.copy(H.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(u.x=Math.floor(_/J.x),r.x=u.x*J.x,H.mapSize.x=u.x),r.y>_&&(u.y=Math.floor(_/J.y),r.y=u.y*J.y,H.mapSize.y=u.y)),H.map===null||et===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===rl){if(F.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vi(r.x,r.y,{format:Zr,type:ba,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new hl(r.x,r.y,Ii),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=Ta,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else{F.isPointLight?(H.map=new px(r.x),H.map.depthTexture=new KM(r.x,Xi)):(H.map=new Vi(r.x,r.y),H.map.depthTexture=new hl(r.x,r.y,Xi)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=Ta;const St=l.state.buffers.depth.getReversed();this.type===nc?(H.map.depthTexture.compareFunction=St?Cp:Ap,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn)}H.camera.updateProjectionMatrix()}const bt=H.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<bt;St++){if(H.map.isWebGLCubeRenderTarget)l.setRenderTarget(H.map,St),l.clear();else{St===0&&(l.setRenderTarget(H.map),l.clear());const O=H.getViewport(St);h.set(u.x*O.x,u.y*O.y,u.x*O.z,u.y*O.w),tt.viewport(h)}if(F.isPointLight){const O=H.camera,nt=H.matrix,vt=F.distance||O.far;vt!==O.far&&(O.far=vt,O.updateProjectionMatrix()),al.setFromMatrixPosition(F.matrixWorld),O.position.copy(al),rd.copy(O.position),rd.add(BA[St]),O.up.copy(HA[St]),O.lookAt(rd),O.updateMatrixWorld(),nt.makeTranslation(-al.x,-al.y,-al.z),xv.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H._frustum.setFromProjectionMatrix(xv,O.coordinateSystem,O.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),z(w,Z,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===rl&&D(H,Z),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,l.setRenderTarget(R,U,k)};function D(I,w){const Z=t.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Vi(r.x,r.y,{format:Zr,type:ba})),v.uniforms.shadow_pass.value=I.map.depthTexture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,l.setRenderTarget(I.mapPass),l.clear(),l.renderBufferDirect(w,null,Z,v,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,l.setRenderTarget(I.map),l.clear(),l.renderBufferDirect(w,null,Z,y,T,null)}function L(I,w,Z,R){let U=null;const k=Z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)U=k;else if(U=Z.isPointLight===!0?m:f,l.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const tt=U.uuid,et=w.uuid;let dt=p[tt];dt===void 0&&(dt={},p[tt]=dt);let ut=dt[et];ut===void 0&&(ut=U.clone(),dt[et]=ut,w.addEventListener("dispose",P)),U=ut}if(U.visible=w.visible,U.wireframe=w.wireframe,R===rl?U.side=w.shadowSide!==null?w.shadowSide:w.side:U.side=w.shadowSide!==null?w.shadowSide:g[w.side],U.alphaMap=w.alphaMap,U.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,U.map=w.map,U.clipShadows=w.clipShadows,U.clippingPlanes=w.clippingPlanes,U.clipIntersection=w.clipIntersection,U.displacementMap=w.displacementMap,U.displacementScale=w.displacementScale,U.displacementBias=w.displacementBias,U.wireframeLinewidth=w.wireframeLinewidth,U.linewidth=w.linewidth,Z.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const tt=l.properties.get(U);tt.light=Z}return U}function z(I,w,Z,R,U){if(I.visible===!1)return;if(I.layers.test(w.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&U===rl)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld);const et=t.update(I),dt=I.material;if(Array.isArray(dt)){const ut=et.groups;for(let F=0,H=ut.length;F<H;F++){const J=ut[F],bt=dt[J.materialIndex];if(bt&&bt.visible){const St=L(I,bt,R,U);I.onBeforeShadow(l,I,w,Z,et,St,J),l.renderBufferDirect(Z,null,et,St,I,J),I.onAfterShadow(l,I,w,Z,et,St,J)}}}else if(dt.visible){const ut=L(I,dt,R,U);I.onBeforeShadow(l,I,w,Z,et,ut,null),l.renderBufferDirect(Z,null,et,ut,I,null),I.onAfterShadow(l,I,w,Z,et,ut,null)}}const tt=I.children;for(let et=0,dt=tt.length;et<dt;et++)z(tt[et],w,Z,R,U)}function P(I){I.target.removeEventListener("dispose",P);for(const Z in p){const R=p[Z],U=I.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}const GA={[Ed]:bd,[Td]:Rd,[Ad]:wd,[Yr]:Cd,[bd]:Ed,[Rd]:Td,[wd]:Ad,[Cd]:Yr};function kA(l,t){function n(){let W=!1;const Ot=new en;let Tt=null;const Lt=new en(0,0,0,0);return{setMask:function(Et){Tt!==Et&&!W&&(l.colorMask(Et,Et,Et,Et),Tt=Et)},setLocked:function(Et){W=Et},setClear:function(Et,_t,Ct,Jt,be){be===!0&&(Et*=Jt,_t*=Jt,Ct*=Jt),Ot.set(Et,_t,Ct,Jt),Lt.equals(Ot)===!1&&(l.clearColor(Et,_t,Ct,Jt),Lt.copy(Ot))},reset:function(){W=!1,Tt=null,Lt.set(-1,0,0,0)}}}function a(){let W=!1,Ot=!1,Tt=null,Lt=null,Et=null;return{setReversed:function(_t){if(Ot!==_t){const Ct=t.get("EXT_clip_control");_t?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Ot=_t;const Jt=Et;Et=null,this.setClear(Jt)}},getReversed:function(){return Ot},setTest:function(_t){_t?ft(l.DEPTH_TEST):Nt(l.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!W&&(l.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Ot&&(_t=GA[_t]),Lt!==_t){switch(_t){case Ed:l.depthFunc(l.NEVER);break;case bd:l.depthFunc(l.ALWAYS);break;case Td:l.depthFunc(l.LESS);break;case Yr:l.depthFunc(l.LEQUAL);break;case Ad:l.depthFunc(l.EQUAL);break;case Cd:l.depthFunc(l.GEQUAL);break;case Rd:l.depthFunc(l.GREATER);break;case wd:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}Lt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){Et!==_t&&(Ot&&(_t=1-_t),l.clearDepth(_t),Et=_t)},reset:function(){W=!1,Tt=null,Lt=null,Et=null,Ot=!1}}}function r(){let W=!1,Ot=null,Tt=null,Lt=null,Et=null,_t=null,Ct=null,Jt=null,be=null;return{setTest:function(Te){W||(Te?ft(l.STENCIL_TEST):Nt(l.STENCIL_TEST))},setMask:function(Te){Ot!==Te&&!W&&(l.stencilMask(Te),Ot=Te)},setFunc:function(Te,wn,gi){(Tt!==Te||Lt!==wn||Et!==gi)&&(l.stencilFunc(Te,wn,gi),Tt=Te,Lt=wn,Et=gi)},setOp:function(Te,wn,gi){(_t!==Te||Ct!==wn||Jt!==gi)&&(l.stencilOp(Te,wn,gi),_t=Te,Ct=wn,Jt=gi)},setLocked:function(Te){W=Te},setClear:function(Te){be!==Te&&(l.clearStencil(Te),be=Te)},reset:function(){W=!1,Ot=null,Tt=null,Lt=null,Et=null,_t=null,Ct=null,Jt=null,be=null}}}const u=new n,h=new a,f=new r,m=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],E=null,T=!1,M=null,x=null,D=null,L=null,z=null,P=null,I=null,w=new Oe(0,0,0),Z=0,R=!1,U=null,k=null,tt=null,et=null,dt=null;const ut=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const J=l.getParameter(l.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=H>=2);let bt=null,St={};const O=l.getParameter(l.SCISSOR_BOX),nt=l.getParameter(l.VIEWPORT),vt=new en().fromArray(O),Rt=new en().fromArray(nt);function It(W,Ot,Tt,Lt){const Et=new Uint8Array(4),_t=l.createTexture();l.bindTexture(W,_t),l.texParameteri(W,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(W,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let Ct=0;Ct<Tt;Ct++)W===l.TEXTURE_3D||W===l.TEXTURE_2D_ARRAY?l.texImage3D(Ot,0,l.RGBA,1,1,Lt,0,l.RGBA,l.UNSIGNED_BYTE,Et):l.texImage2D(Ot+Ct,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Et);return _t}const it={};it[l.TEXTURE_2D]=It(l.TEXTURE_2D,l.TEXTURE_2D,1),it[l.TEXTURE_CUBE_MAP]=It(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[l.TEXTURE_2D_ARRAY]=It(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),it[l.TEXTURE_3D]=It(l.TEXTURE_3D,l.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),f.setClear(0),ft(l.DEPTH_TEST),h.setFunc(Yr),ie(!1),Ke(E_),ft(l.CULL_FACE),he(ya);function ft(W){_[W]!==!0&&(l.enable(W),_[W]=!0)}function Nt(W){_[W]!==!1&&(l.disable(W),_[W]=!1)}function Vt(W,Ot){return g[W]!==Ot?(l.bindFramebuffer(W,Ot),g[W]=Ot,W===l.DRAW_FRAMEBUFFER&&(g[l.FRAMEBUFFER]=Ot),W===l.FRAMEBUFFER&&(g[l.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Bt(W,Ot){let Tt=y,Lt=!1;if(W){Tt=v.get(Ot),Tt===void 0&&(Tt=[],v.set(Ot,Tt));const Et=W.textures;if(Tt.length!==Et.length||Tt[0]!==l.COLOR_ATTACHMENT0){for(let _t=0,Ct=Et.length;_t<Ct;_t++)Tt[_t]=l.COLOR_ATTACHMENT0+_t;Tt.length=Et.length,Lt=!0}}else Tt[0]!==l.BACK&&(Tt[0]=l.BACK,Lt=!0);Lt&&l.drawBuffers(Tt)}function pe(W){return E!==W?(l.useProgram(W),E=W,!0):!1}const Ze={[Fs]:l.FUNC_ADD,[WS]:l.FUNC_SUBTRACT,[qS]:l.FUNC_REVERSE_SUBTRACT};Ze[YS]=l.MIN,Ze[jS]=l.MAX;const me={[ZS]:l.ZERO,[KS]:l.ONE,[QS]:l.SRC_COLOR,[Sd]:l.SRC_ALPHA,[iM]:l.SRC_ALPHA_SATURATE,[eM]:l.DST_COLOR,[JS]:l.DST_ALPHA,[$S]:l.ONE_MINUS_SRC_COLOR,[Md]:l.ONE_MINUS_SRC_ALPHA,[nM]:l.ONE_MINUS_DST_COLOR,[tM]:l.ONE_MINUS_DST_ALPHA,[aM]:l.CONSTANT_COLOR,[sM]:l.ONE_MINUS_CONSTANT_COLOR,[rM]:l.CONSTANT_ALPHA,[oM]:l.ONE_MINUS_CONSTANT_ALPHA};function he(W,Ot,Tt,Lt,Et,_t,Ct,Jt,be,Te){if(W===ya){T===!0&&(Nt(l.BLEND),T=!1);return}if(T===!1&&(ft(l.BLEND),T=!0),W!==XS){if(W!==M||Te!==R){if((x!==Fs||z!==Fs)&&(l.blendEquation(l.FUNC_ADD),x=Fs,z=Fs),Te)switch(W){case Wr:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case b_:l.blendFunc(l.ONE,l.ONE);break;case T_:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case A_:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:De("WebGLState: Invalid blending: ",W);break}else switch(W){case Wr:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case b_:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case T_:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case A_:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",W);break}D=null,L=null,P=null,I=null,w.set(0,0,0),Z=0,M=W,R=Te}return}Et=Et||Ot,_t=_t||Tt,Ct=Ct||Lt,(Ot!==x||Et!==z)&&(l.blendEquationSeparate(Ze[Ot],Ze[Et]),x=Ot,z=Et),(Tt!==D||Lt!==L||_t!==P||Ct!==I)&&(l.blendFuncSeparate(me[Tt],me[Lt],me[_t],me[Ct]),D=Tt,L=Lt,P=_t,I=Ct),(Jt.equals(w)===!1||be!==Z)&&(l.blendColor(Jt.r,Jt.g,Jt.b,be),w.copy(Jt),Z=be),M=W,R=!1}function Ee(W,Ot){W.side===va?Nt(l.CULL_FACE):ft(l.CULL_FACE);let Tt=W.side===Wn;Ot&&(Tt=!Tt),ie(Tt),W.blending===Wr&&W.transparent===!1?he(ya):he(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const Lt=W.stencilWrite;f.setTest(Lt),Lt&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(l.SAMPLE_ALPHA_TO_COVERAGE):Nt(l.SAMPLE_ALPHA_TO_COVERAGE)}function ie(W){U!==W&&(W?l.frontFace(l.CW):l.frontFace(l.CCW),U=W)}function Ke(W){W!==VS?(ft(l.CULL_FACE),W!==k&&(W===E_?l.cullFace(l.BACK):W===GS?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):Nt(l.CULL_FACE),k=W}function G(W){W!==tt&&(F&&l.lineWidth(W),tt=W)}function Ve(W,Ot,Tt){W?(ft(l.POLYGON_OFFSET_FILL),(et!==Ot||dt!==Tt)&&(l.polygonOffset(Ot,Tt),et=Ot,dt=Tt)):Nt(l.POLYGON_OFFSET_FILL)}function fe(W){W?ft(l.SCISSOR_TEST):Nt(l.SCISSOR_TEST)}function Ce(W){W===void 0&&(W=l.TEXTURE0+ut-1),bt!==W&&(l.activeTexture(W),bt=W)}function Wt(W,Ot,Tt){Tt===void 0&&(bt===null?Tt=l.TEXTURE0+ut-1:Tt=bt);let Lt=St[Tt];Lt===void 0&&(Lt={type:void 0,texture:void 0},St[Tt]=Lt),(Lt.type!==W||Lt.texture!==Ot)&&(bt!==Tt&&(l.activeTexture(Tt),bt=Tt),l.bindTexture(W,Ot||it[W]),Lt.type=W,Lt.texture=Ot)}function N(){const W=St[bt];W!==void 0&&W.type!==void 0&&(l.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{l.compressedTexImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function q(){try{l.compressedTexImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function mt(){try{l.texSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Mt(){try{l.texSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ht(){try{l.compressedTexSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function qt(){try{l.compressedTexSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Ut(){try{l.texStorage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Gt(){try{l.texStorage3D(...arguments)}catch(W){De("WebGLState:",W)}}function V(){try{l.texImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function at(){try{l.texImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function yt(W){vt.equals(W)===!1&&(l.scissor(W.x,W.y,W.z,W.w),vt.copy(W))}function At(W){Rt.equals(W)===!1&&(l.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function wt(W,Ot){let Tt=p.get(Ot);Tt===void 0&&(Tt=new WeakMap,p.set(Ot,Tt));let Lt=Tt.get(W);Lt===void 0&&(Lt=l.getUniformBlockIndex(Ot,W.name),Tt.set(W,Lt))}function Dt(W,Ot){const Lt=p.get(Ot).get(W);m.get(Ot)!==Lt&&(l.uniformBlockBinding(Ot,Lt,W.__bindingPointIndex),m.set(Ot,Lt))}function ne(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),h.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),_={},bt=null,St={},g={},v=new WeakMap,y=[],E=null,T=!1,M=null,x=null,D=null,L=null,z=null,P=null,I=null,w=new Oe(0,0,0),Z=0,R=!1,U=null,k=null,tt=null,et=null,dt=null,vt.set(0,0,l.canvas.width,l.canvas.height),Rt.set(0,0,l.canvas.width,l.canvas.height),u.reset(),h.reset(),f.reset()}return{buffers:{color:u,depth:h,stencil:f},enable:ft,disable:Nt,bindFramebuffer:Vt,drawBuffers:Bt,useProgram:pe,setBlending:he,setMaterial:Ee,setFlipSided:ie,setCullFace:Ke,setLineWidth:G,setPolygonOffset:Ve,setScissorTest:fe,activeTexture:Ce,bindTexture:Wt,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:V,texImage3D:at,updateUBOMapping:wt,uniformBlockBinding:Dt,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:mt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:qt,scissor:yt,viewport:At,reset:ne}}function XA(l,t,n,a,r,u,h){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new He,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):fc("canvas")}function T(N,b,q){let mt=1;const Mt=Wt(N);if((Mt.width>q||Mt.height>q)&&(mt=q/Math.max(Mt.width,Mt.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ht=Math.floor(mt*Mt.width),qt=Math.floor(mt*Mt.height);g===void 0&&(g=E(ht,qt));const Ut=b?E(ht,qt):g;return Ut.width=ht,Ut.height=qt,Ut.getContext("2d").drawImage(N,0,0,ht,qt),re("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+qt+")."),Ut}else return"data"in N&&re("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){l.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?l.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function L(N,b,q,mt,Mt=!1){if(N!==null){if(l[N]!==void 0)return l[N];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht=b;if(b===l.RED&&(q===l.FLOAT&&(ht=l.R32F),q===l.HALF_FLOAT&&(ht=l.R16F),q===l.UNSIGNED_BYTE&&(ht=l.R8)),b===l.RED_INTEGER&&(q===l.UNSIGNED_BYTE&&(ht=l.R8UI),q===l.UNSIGNED_SHORT&&(ht=l.R16UI),q===l.UNSIGNED_INT&&(ht=l.R32UI),q===l.BYTE&&(ht=l.R8I),q===l.SHORT&&(ht=l.R16I),q===l.INT&&(ht=l.R32I)),b===l.RG&&(q===l.FLOAT&&(ht=l.RG32F),q===l.HALF_FLOAT&&(ht=l.RG16F),q===l.UNSIGNED_BYTE&&(ht=l.RG8)),b===l.RG_INTEGER&&(q===l.UNSIGNED_BYTE&&(ht=l.RG8UI),q===l.UNSIGNED_SHORT&&(ht=l.RG16UI),q===l.UNSIGNED_INT&&(ht=l.RG32UI),q===l.BYTE&&(ht=l.RG8I),q===l.SHORT&&(ht=l.RG16I),q===l.INT&&(ht=l.RG32I)),b===l.RGB_INTEGER&&(q===l.UNSIGNED_BYTE&&(ht=l.RGB8UI),q===l.UNSIGNED_SHORT&&(ht=l.RGB16UI),q===l.UNSIGNED_INT&&(ht=l.RGB32UI),q===l.BYTE&&(ht=l.RGB8I),q===l.SHORT&&(ht=l.RGB16I),q===l.INT&&(ht=l.RGB32I)),b===l.RGBA_INTEGER&&(q===l.UNSIGNED_BYTE&&(ht=l.RGBA8UI),q===l.UNSIGNED_SHORT&&(ht=l.RGBA16UI),q===l.UNSIGNED_INT&&(ht=l.RGBA32UI),q===l.BYTE&&(ht=l.RGBA8I),q===l.SHORT&&(ht=l.RGBA16I),q===l.INT&&(ht=l.RGBA32I)),b===l.RGB&&(q===l.UNSIGNED_INT_5_9_9_9_REV&&(ht=l.RGB9_E5),q===l.UNSIGNED_INT_10F_11F_11F_REV&&(ht=l.R11F_G11F_B10F)),b===l.RGBA){const qt=Mt?cc:Ae.getTransfer(mt);q===l.FLOAT&&(ht=l.RGBA32F),q===l.HALF_FLOAT&&(ht=l.RGBA16F),q===l.UNSIGNED_BYTE&&(ht=qt===Be?l.SRGB8_ALPHA8:l.RGBA8),q===l.UNSIGNED_SHORT_4_4_4_4&&(ht=l.RGBA4),q===l.UNSIGNED_SHORT_5_5_5_1&&(ht=l.RGB5_A1)}return(ht===l.R16F||ht===l.R32F||ht===l.RG16F||ht===l.RG32F||ht===l.RGBA16F||ht===l.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function z(N,b){let q;return N?b===null||b===Xi||b===ul?q=l.DEPTH24_STENCIL8:b===Ii?q=l.DEPTH32F_STENCIL8:b===ll&&(q=l.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===ul?q=l.DEPTH_COMPONENT24:b===Ii?q=l.DEPTH_COMPONENT32F:b===ll&&(q=l.DEPTH_COMPONENT16),q}function P(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Rn&&N.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function I(N){const b=N.target;b.removeEventListener("dispose",I),Z(b),b.isVideoTexture&&_.delete(b)}function w(N){const b=N.target;b.removeEventListener("dispose",w),U(b)}function Z(N){const b=a.get(N);if(b.__webglInit===void 0)return;const q=N.source,mt=v.get(q);if(mt){const Mt=mt[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&R(N),Object.keys(mt).length===0&&v.delete(q)}a.remove(N)}function R(N){const b=a.get(N);l.deleteTexture(b.__webglTexture);const q=N.source,mt=v.get(q);delete mt[b.__cacheKey],h.memory.textures--}function U(N){const b=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let Mt=0;Mt<b.__webglFramebuffer[mt].length;Mt++)l.deleteFramebuffer(b.__webglFramebuffer[mt][Mt]);else l.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&l.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)l.deleteFramebuffer(b.__webglFramebuffer[mt]);else l.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&l.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&l.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&l.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&l.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=N.textures;for(let mt=0,Mt=q.length;mt<Mt;mt++){const ht=a.get(q[mt]);ht.__webglTexture&&(l.deleteTexture(ht.__webglTexture),h.memory.textures--),a.remove(q[mt])}a.remove(N)}let k=0;function tt(){k=0}function et(){const N=k;return N>=r.maxTextures&&re("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),k+=1,N}function dt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ut(N,b){const q=a.get(N);if(N.isVideoTexture&&fe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const mt=N.image;if(mt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,N,b);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(l.TEXTURE_2D,q.__webglTexture,l.TEXTURE0+b)}function F(N,b){const q=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){it(q,N,b);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(l.TEXTURE_2D_ARRAY,q.__webglTexture,l.TEXTURE0+b)}function H(N,b){const q=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){it(q,N,b);return}n.bindTexture(l.TEXTURE_3D,q.__webglTexture,l.TEXTURE0+b)}function J(N,b){const q=a.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){ft(q,N,b);return}n.bindTexture(l.TEXTURE_CUBE_MAP,q.__webglTexture,l.TEXTURE0+b)}const bt={[Ld]:l.REPEAT,[xa]:l.CLAMP_TO_EDGE,[Nd]:l.MIRRORED_REPEAT},St={[Rn]:l.NEAREST,[cM]:l.NEAREST_MIPMAP_NEAREST,[Ru]:l.NEAREST_MIPMAP_LINEAR,[zn]:l.LINEAR,[wf]:l.LINEAR_MIPMAP_NEAREST,[Bs]:l.LINEAR_MIPMAP_LINEAR},O={[dM]:l.NEVER,[vM]:l.ALWAYS,[pM]:l.LESS,[Ap]:l.LEQUAL,[mM]:l.EQUAL,[Cp]:l.GEQUAL,[gM]:l.GREATER,[_M]:l.NOTEQUAL};function nt(N,b){if(b.type===Ii&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===wf||b.magFilter===Ru||b.magFilter===Bs||b.minFilter===zn||b.minFilter===wf||b.minFilter===Ru||b.minFilter===Bs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(N,l.TEXTURE_WRAP_S,bt[b.wrapS]),l.texParameteri(N,l.TEXTURE_WRAP_T,bt[b.wrapT]),(N===l.TEXTURE_3D||N===l.TEXTURE_2D_ARRAY)&&l.texParameteri(N,l.TEXTURE_WRAP_R,bt[b.wrapR]),l.texParameteri(N,l.TEXTURE_MAG_FILTER,St[b.magFilter]),l.texParameteri(N,l.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(l.texParameteri(N,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(N,l.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Rn||b.minFilter!==Ru&&b.minFilter!==Bs||b.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");l.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function vt(N,b){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",I));const mt=b.source;let Mt=v.get(mt);Mt===void 0&&(Mt={},v.set(mt,Mt));const ht=dt(b);if(ht!==N.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,q=!0),Mt[ht].usedTimes++;const qt=Mt[N.__cacheKey];qt!==void 0&&(Mt[N.__cacheKey].usedTimes--,qt.usedTimes===0&&R(b)),N.__cacheKey=ht,N.__webglTexture=Mt[ht].texture}return q}function Rt(N,b,q){return Math.floor(Math.floor(N/q)/b)}function It(N,b,q,mt){const ht=N.updateRanges;if(ht.length===0)n.texSubImage2D(l.TEXTURE_2D,0,0,0,b.width,b.height,q,mt,b.data);else{ht.sort((at,yt)=>at.start-yt.start);let qt=0;for(let at=1;at<ht.length;at++){const yt=ht[qt],At=ht[at],wt=yt.start+yt.count,Dt=Rt(At.start,b.width,4),ne=Rt(yt.start,b.width,4);At.start<=wt+1&&Dt===ne&&Rt(At.start+At.count-1,b.width,4)===Dt?yt.count=Math.max(yt.count,At.start+At.count-yt.start):(++qt,ht[qt]=At)}ht.length=qt+1;const Ut=l.getParameter(l.UNPACK_ROW_LENGTH),Gt=l.getParameter(l.UNPACK_SKIP_PIXELS),V=l.getParameter(l.UNPACK_SKIP_ROWS);l.pixelStorei(l.UNPACK_ROW_LENGTH,b.width);for(let at=0,yt=ht.length;at<yt;at++){const At=ht[at],wt=Math.floor(At.start/4),Dt=Math.ceil(At.count/4),ne=wt%b.width,W=Math.floor(wt/b.width),Ot=Dt,Tt=1;l.pixelStorei(l.UNPACK_SKIP_PIXELS,ne),l.pixelStorei(l.UNPACK_SKIP_ROWS,W),n.texSubImage2D(l.TEXTURE_2D,0,ne,W,Ot,Tt,q,mt,b.data)}N.clearUpdateRanges(),l.pixelStorei(l.UNPACK_ROW_LENGTH,Ut),l.pixelStorei(l.UNPACK_SKIP_PIXELS,Gt),l.pixelStorei(l.UNPACK_SKIP_ROWS,V)}}function it(N,b,q){let mt=l.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=l.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=l.TEXTURE_3D);const Mt=vt(N,b),ht=b.source;n.bindTexture(mt,N.__webglTexture,l.TEXTURE0+q);const qt=a.get(ht);if(ht.version!==qt.__version||Mt===!0){n.activeTexture(l.TEXTURE0+q);const Ut=Ae.getPrimaries(Ae.workingColorSpace),Gt=b.colorSpace===ls?null:Ae.getPrimaries(b.colorSpace),V=b.colorSpace===ls||Ut===Gt?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,b.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,b.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let at=T(b.image,!1,r.maxTextureSize);at=Ce(b,at);const yt=u.convert(b.format,b.colorSpace),At=u.convert(b.type);let wt=L(b.internalFormat,yt,At,b.colorSpace,b.isVideoTexture);nt(mt,b);let Dt;const ne=b.mipmaps,W=b.isVideoTexture!==!0,Ot=qt.__version===void 0||Mt===!0,Tt=ht.dataReady,Lt=P(b,at);if(b.isDepthTexture)wt=z(b.format===Hs,b.type),Ot&&(W?n.texStorage2D(l.TEXTURE_2D,1,wt,at.width,at.height):n.texImage2D(l.TEXTURE_2D,0,wt,at.width,at.height,0,yt,At,null));else if(b.isDataTexture)if(ne.length>0){W&&Ot&&n.texStorage2D(l.TEXTURE_2D,Lt,wt,ne[0].width,ne[0].height);for(let Et=0,_t=ne.length;Et<_t;Et++)Dt=ne[Et],W?Tt&&n.texSubImage2D(l.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,yt,At,Dt.data):n.texImage2D(l.TEXTURE_2D,Et,wt,Dt.width,Dt.height,0,yt,At,Dt.data);b.generateMipmaps=!1}else W?(Ot&&n.texStorage2D(l.TEXTURE_2D,Lt,wt,at.width,at.height),Tt&&It(b,at,yt,At)):n.texImage2D(l.TEXTURE_2D,0,wt,at.width,at.height,0,yt,At,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Ot&&n.texStorage3D(l.TEXTURE_2D_ARRAY,Lt,wt,ne[0].width,ne[0].height,at.depth);for(let Et=0,_t=ne.length;Et<_t;Et++)if(Dt=ne[Et],b.format!==Ci)if(yt!==null)if(W){if(Tt)if(b.layerUpdates.size>0){const Ct=K_(Dt.width,Dt.height,b.format,b.type);for(const Jt of b.layerUpdates){const be=Dt.data.subarray(Jt*Ct/Dt.data.BYTES_PER_ELEMENT,(Jt+1)*Ct/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Et,0,0,Jt,Dt.width,Dt.height,1,yt,be)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,at.depth,yt,Dt.data)}else n.compressedTexImage3D(l.TEXTURE_2D_ARRAY,Et,wt,Dt.width,Dt.height,at.depth,0,Dt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&n.texSubImage3D(l.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,at.depth,yt,At,Dt.data):n.texImage3D(l.TEXTURE_2D_ARRAY,Et,wt,Dt.width,Dt.height,at.depth,0,yt,At,Dt.data)}else{W&&Ot&&n.texStorage2D(l.TEXTURE_2D,Lt,wt,ne[0].width,ne[0].height);for(let Et=0,_t=ne.length;Et<_t;Et++)Dt=ne[Et],b.format!==Ci?yt!==null?W?Tt&&n.compressedTexSubImage2D(l.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,yt,Dt.data):n.compressedTexImage2D(l.TEXTURE_2D,Et,wt,Dt.width,Dt.height,0,Dt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&n.texSubImage2D(l.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,yt,At,Dt.data):n.texImage2D(l.TEXTURE_2D,Et,wt,Dt.width,Dt.height,0,yt,At,Dt.data)}else if(b.isDataArrayTexture)if(W){if(Ot&&n.texStorage3D(l.TEXTURE_2D_ARRAY,Lt,wt,at.width,at.height,at.depth),Tt)if(b.layerUpdates.size>0){const Et=K_(at.width,at.height,b.format,b.type);for(const _t of b.layerUpdates){const Ct=at.data.subarray(_t*Et/at.data.BYTES_PER_ELEMENT,(_t+1)*Et/at.data.BYTES_PER_ELEMENT);n.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,_t,at.width,at.height,1,yt,At,Ct)}b.clearLayerUpdates()}else n.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,At,at.data)}else n.texImage3D(l.TEXTURE_2D_ARRAY,0,wt,at.width,at.height,at.depth,0,yt,At,at.data);else if(b.isData3DTexture)W?(Ot&&n.texStorage3D(l.TEXTURE_3D,Lt,wt,at.width,at.height,at.depth),Tt&&n.texSubImage3D(l.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,At,at.data)):n.texImage3D(l.TEXTURE_3D,0,wt,at.width,at.height,at.depth,0,yt,At,at.data);else if(b.isFramebufferTexture){if(Ot)if(W)n.texStorage2D(l.TEXTURE_2D,Lt,wt,at.width,at.height);else{let Et=at.width,_t=at.height;for(let Ct=0;Ct<Lt;Ct++)n.texImage2D(l.TEXTURE_2D,Ct,wt,Et,_t,0,yt,At,null),Et>>=1,_t>>=1}}else if(ne.length>0){if(W&&Ot){const Et=Wt(ne[0]);n.texStorage2D(l.TEXTURE_2D,Lt,wt,Et.width,Et.height)}for(let Et=0,_t=ne.length;Et<_t;Et++)Dt=ne[Et],W?Tt&&n.texSubImage2D(l.TEXTURE_2D,Et,0,0,yt,At,Dt):n.texImage2D(l.TEXTURE_2D,Et,wt,yt,At,Dt);b.generateMipmaps=!1}else if(W){if(Ot){const Et=Wt(at);n.texStorage2D(l.TEXTURE_2D,Lt,wt,Et.width,Et.height)}Tt&&n.texSubImage2D(l.TEXTURE_2D,0,0,0,yt,At,at)}else n.texImage2D(l.TEXTURE_2D,0,wt,yt,At,at);M(b)&&x(mt),qt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ft(N,b,q){if(b.image.length!==6)return;const mt=vt(N,b),Mt=b.source;n.bindTexture(l.TEXTURE_CUBE_MAP,N.__webglTexture,l.TEXTURE0+q);const ht=a.get(Mt);if(Mt.version!==ht.__version||mt===!0){n.activeTexture(l.TEXTURE0+q);const qt=Ae.getPrimaries(Ae.workingColorSpace),Ut=b.colorSpace===ls?null:Ae.getPrimaries(b.colorSpace),Gt=b.colorSpace===ls||qt===Ut?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,b.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,b.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const V=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let _t=0;_t<6;_t++)!V&&!at?yt[_t]=T(b.image[_t],!0,r.maxCubemapSize):yt[_t]=at?b.image[_t].image:b.image[_t],yt[_t]=Ce(b,yt[_t]);const At=yt[0],wt=u.convert(b.format,b.colorSpace),Dt=u.convert(b.type),ne=L(b.internalFormat,wt,Dt,b.colorSpace),W=b.isVideoTexture!==!0,Ot=ht.__version===void 0||mt===!0,Tt=Mt.dataReady;let Lt=P(b,At);nt(l.TEXTURE_CUBE_MAP,b);let Et;if(V){W&&Ot&&n.texStorage2D(l.TEXTURE_CUBE_MAP,Lt,ne,At.width,At.height);for(let _t=0;_t<6;_t++){Et=yt[_t].mipmaps;for(let Ct=0;Ct<Et.length;Ct++){const Jt=Et[Ct];b.format!==Ci?wt!==null?W?Tt&&n.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Jt.width,Jt.height,wt,Jt.data):n.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ne,Jt.width,Jt.height,0,Jt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Jt.width,Jt.height,wt,Dt,Jt.data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ne,Jt.width,Jt.height,0,wt,Dt,Jt.data)}}}else{if(Et=b.mipmaps,W&&Ot){Et.length>0&&Lt++;const _t=Wt(yt[0]);n.texStorage2D(l.TEXTURE_CUBE_MAP,Lt,ne,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(at){W?Tt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,yt[_t].width,yt[_t].height,wt,Dt,yt[_t].data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,yt[_t].width,yt[_t].height,0,wt,Dt,yt[_t].data);for(let Ct=0;Ct<Et.length;Ct++){const be=Et[Ct].image[_t].image;W?Tt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,be.width,be.height,wt,Dt,be.data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ne,be.width,be.height,0,wt,Dt,be.data)}}else{W?Tt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,wt,Dt,yt[_t]):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,wt,Dt,yt[_t]);for(let Ct=0;Ct<Et.length;Ct++){const Jt=Et[Ct];W?Tt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,wt,Dt,Jt.image[_t]):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ne,wt,Dt,Jt.image[_t])}}}M(b)&&x(l.TEXTURE_CUBE_MAP),ht.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Nt(N,b,q,mt,Mt,ht){const qt=u.convert(q.format,q.colorSpace),Ut=u.convert(q.type),Gt=L(q.internalFormat,qt,Ut,q.colorSpace),V=a.get(b),at=a.get(q);if(at.__renderTarget=b,!V.__hasExternalTextures){const yt=Math.max(1,b.width>>ht),At=Math.max(1,b.height>>ht);Mt===l.TEXTURE_3D||Mt===l.TEXTURE_2D_ARRAY?n.texImage3D(Mt,ht,Gt,yt,At,b.depth,0,qt,Ut,null):n.texImage2D(Mt,ht,Gt,yt,At,0,qt,Ut,null)}n.bindFramebuffer(l.FRAMEBUFFER,N),Ve(b)?f.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,mt,Mt,at.__webglTexture,0,G(b)):(Mt===l.TEXTURE_2D||Mt>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,mt,Mt,at.__webglTexture,ht),n.bindFramebuffer(l.FRAMEBUFFER,null)}function Vt(N,b,q){if(l.bindRenderbuffer(l.RENDERBUFFER,N),b.depthBuffer){const mt=b.depthTexture,Mt=mt&&mt.isDepthTexture?mt.type:null,ht=z(b.stencilBuffer,Mt),qt=b.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Ve(b)?f.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,G(b),ht,b.width,b.height):q?l.renderbufferStorageMultisample(l.RENDERBUFFER,G(b),ht,b.width,b.height):l.renderbufferStorage(l.RENDERBUFFER,ht,b.width,b.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,qt,l.RENDERBUFFER,N)}else{const mt=b.textures;for(let Mt=0;Mt<mt.length;Mt++){const ht=mt[Mt],qt=u.convert(ht.format,ht.colorSpace),Ut=u.convert(ht.type),Gt=L(ht.internalFormat,qt,Ut,ht.colorSpace);Ve(b)?f.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,G(b),Gt,b.width,b.height):q?l.renderbufferStorageMultisample(l.RENDERBUFFER,G(b),Gt,b.width,b.height):l.renderbufferStorage(l.RENDERBUFFER,Gt,b.width,b.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Bt(N,b,q){const mt=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(l.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=a.get(b.depthTexture);if(Mt.__renderTarget=b,(!Mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),mt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),Mt.__webglTexture===void 0){Mt.__webglTexture=l.createTexture(),n.bindTexture(l.TEXTURE_CUBE_MAP,Mt.__webglTexture),nt(l.TEXTURE_CUBE_MAP,b.depthTexture);const V=u.convert(b.depthTexture.format),at=u.convert(b.depthTexture.type);let yt;b.depthTexture.format===Ta?yt=l.DEPTH_COMPONENT24:b.depthTexture.format===Hs&&(yt=l.DEPTH24_STENCIL8);for(let At=0;At<6;At++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,yt,b.width,b.height,0,V,at,null)}}else ut(b.depthTexture,0);const ht=Mt.__webglTexture,qt=G(b),Ut=mt?l.TEXTURE_CUBE_MAP_POSITIVE_X+q:l.TEXTURE_2D,Gt=b.depthTexture.format===Hs?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ta)Ve(b)?f.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,Gt,Ut,ht,0,qt):l.framebufferTexture2D(l.FRAMEBUFFER,Gt,Ut,ht,0);else if(b.depthTexture.format===Hs)Ve(b)?f.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,Gt,Ut,ht,0,qt):l.framebufferTexture2D(l.FRAMEBUFFER,Gt,Ut,ht,0);else throw new Error("Unknown depthTexture format")}function pe(N){const b=a.get(N),q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",Mt)};mt.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=mt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let mt=0;mt<6;mt++)Bt(b.__webglFramebuffer[mt],N,mt);else{const mt=N.texture.mipmaps;mt&&mt.length>0?Bt(b.__webglFramebuffer[0],N,0):Bt(b.__webglFramebuffer,N,0)}else if(q){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(n.bindFramebuffer(l.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=l.createRenderbuffer(),Vt(b.__webglDepthbuffer[mt],N,!1);else{const Mt=N.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[mt];l.bindRenderbuffer(l.RENDERBUFFER,ht),l.framebufferRenderbuffer(l.FRAMEBUFFER,Mt,l.RENDERBUFFER,ht)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?n.bindFramebuffer(l.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(l.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=l.createRenderbuffer(),Vt(b.__webglDepthbuffer,N,!1);else{const Mt=N.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,ht),l.framebufferRenderbuffer(l.FRAMEBUFFER,Mt,l.RENDERBUFFER,ht)}}n.bindFramebuffer(l.FRAMEBUFFER,null)}function Ze(N,b,q){const mt=a.get(N);b!==void 0&&Nt(mt.__webglFramebuffer,N,N.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),q!==void 0&&pe(N)}function me(N){const b=N.texture,q=a.get(N),mt=a.get(b);N.addEventListener("dispose",w);const Mt=N.textures,ht=N.isWebGLCubeRenderTarget===!0,qt=Mt.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=l.createTexture()),mt.__version=b.version,h.memory.textures++),ht){q.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<b.mipmaps.length;Gt++)q.__webglFramebuffer[Ut][Gt]=l.createFramebuffer()}else q.__webglFramebuffer[Ut]=l.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)q.__webglFramebuffer[Ut]=l.createFramebuffer()}else q.__webglFramebuffer=l.createFramebuffer();if(qt)for(let Ut=0,Gt=Mt.length;Ut<Gt;Ut++){const V=a.get(Mt[Ut]);V.__webglTexture===void 0&&(V.__webglTexture=l.createTexture(),h.memory.textures++)}if(N.samples>0&&Ve(N)===!1){q.__webglMultisampledFramebuffer=l.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(l.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ut=0;Ut<Mt.length;Ut++){const Gt=Mt[Ut];q.__webglColorRenderbuffer[Ut]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,q.__webglColorRenderbuffer[Ut]);const V=u.convert(Gt.format,Gt.colorSpace),at=u.convert(Gt.type),yt=L(Gt.internalFormat,V,at,Gt.colorSpace,N.isXRRenderTarget===!0),At=G(N);l.renderbufferStorageMultisample(l.RENDERBUFFER,At,yt,N.width,N.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Ut,l.RENDERBUFFER,q.__webglColorRenderbuffer[Ut])}l.bindRenderbuffer(l.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=l.createRenderbuffer(),Vt(q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(l.FRAMEBUFFER,null)}}if(ht){n.bindTexture(l.TEXTURE_CUBE_MAP,mt.__webglTexture),nt(l.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)Nt(q.__webglFramebuffer[Ut][Gt],N,b,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else Nt(q.__webglFramebuffer[Ut],N,b,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(b)&&x(l.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qt){for(let Ut=0,Gt=Mt.length;Ut<Gt;Ut++){const V=Mt[Ut],at=a.get(V);let yt=l.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(yt=N.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),n.bindTexture(yt,at.__webglTexture),nt(yt,V),Nt(q.__webglFramebuffer,N,V,l.COLOR_ATTACHMENT0+Ut,yt,0),M(V)&&x(yt)}n.unbindTexture()}else{let Ut=l.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),n.bindTexture(Ut,mt.__webglTexture),nt(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)Nt(q.__webglFramebuffer[Gt],N,b,l.COLOR_ATTACHMENT0,Ut,Gt);else Nt(q.__webglFramebuffer,N,b,l.COLOR_ATTACHMENT0,Ut,0);M(b)&&x(Ut),n.unbindTexture()}N.depthBuffer&&pe(N)}function he(N){const b=N.textures;for(let q=0,mt=b.length;q<mt;q++){const Mt=b[q];if(M(Mt)){const ht=D(N),qt=a.get(Mt).__webglTexture;n.bindTexture(ht,qt),x(ht),n.unbindTexture()}}}const Ee=[],ie=[];function Ke(N){if(N.samples>0){if(Ve(N)===!1){const b=N.textures,q=N.width,mt=N.height;let Mt=l.COLOR_BUFFER_BIT;const ht=N.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,qt=a.get(N),Ut=b.length>1;if(Ut)for(let V=0;V<b.length;V++)n.bindFramebuffer(l.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+V,l.RENDERBUFFER,null),n.bindFramebuffer(l.FRAMEBUFFER,qt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+V,l.TEXTURE_2D,null,0);n.bindFramebuffer(l.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Gt=N.texture.mipmaps;Gt&&Gt.length>0?n.bindFramebuffer(l.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):n.bindFramebuffer(l.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let V=0;V<b.length;V++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=l.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=l.STENCIL_BUFFER_BIT)),Ut){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,qt.__webglColorRenderbuffer[V]);const at=a.get(b[V]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,at,0)}l.blitFramebuffer(0,0,q,mt,0,0,q,mt,Mt,l.NEAREST),m===!0&&(Ee.length=0,ie.length=0,Ee.push(l.COLOR_ATTACHMENT0+V),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ee.push(ht),ie.push(ht),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,ie)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ee))}if(n.bindFramebuffer(l.READ_FRAMEBUFFER,null),n.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),Ut)for(let V=0;V<b.length;V++){n.bindFramebuffer(l.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+V,l.RENDERBUFFER,qt.__webglColorRenderbuffer[V]);const at=a.get(b[V]).__webglTexture;n.bindFramebuffer(l.FRAMEBUFFER,qt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+V,l.TEXTURE_2D,at,0)}n.bindFramebuffer(l.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[b])}}}function G(N){return Math.min(r.maxSamples,N.samples)}function Ve(N){const b=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function fe(N){const b=h.render.frame;_.get(N)!==b&&(_.set(N,b),N.update())}function Ce(N,b){const q=N.colorSpace,mt=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Kr&&q!==ls&&(Ae.getTransfer(q)===Be?(mt!==Ci||Mt!==ni)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",q)),b}function Wt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=tt,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Ze,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function WA(l,t){function n(a,r=ls){let u;const h=Ae.getTransfer(r);if(a===ni)return l.UNSIGNED_BYTE;if(a===Sp)return l.UNSIGNED_SHORT_4_4_4_4;if(a===Mp)return l.UNSIGNED_SHORT_5_5_5_1;if(a===jv)return l.UNSIGNED_INT_5_9_9_9_REV;if(a===Zv)return l.UNSIGNED_INT_10F_11F_11F_REV;if(a===qv)return l.BYTE;if(a===Yv)return l.SHORT;if(a===ll)return l.UNSIGNED_SHORT;if(a===yp)return l.INT;if(a===Xi)return l.UNSIGNED_INT;if(a===Ii)return l.FLOAT;if(a===ba)return l.HALF_FLOAT;if(a===Kv)return l.ALPHA;if(a===Qv)return l.RGB;if(a===Ci)return l.RGBA;if(a===Ta)return l.DEPTH_COMPONENT;if(a===Hs)return l.DEPTH_STENCIL;if(a===$v)return l.RED;if(a===Ep)return l.RED_INTEGER;if(a===Zr)return l.RG;if(a===bp)return l.RG_INTEGER;if(a===Tp)return l.RGBA_INTEGER;if(a===ic||a===ac||a===sc||a===rc)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===ic)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===ic)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ac)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===rc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Od||a===zd||a===Pd||a===Fd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Od)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===zd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Pd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Fd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Id||a===Bd||a===Hd||a===Vd||a===Gd||a===kd||a===Xd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Id||a===Bd)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Hd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===Vd)return u.COMPRESSED_R11_EAC;if(a===Gd)return u.COMPRESSED_SIGNED_R11_EAC;if(a===kd)return u.COMPRESSED_RG11_EAC;if(a===Xd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Wd||a===qd||a===Yd||a===jd||a===Zd||a===Kd||a===Qd||a===$d||a===Jd||a===tp||a===ep||a===np||a===ip||a===ap)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Wd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===qd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===jd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$d)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Jd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===tp)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ep)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===np)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ip)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ap)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===sp||a===rp||a===op)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===sp)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===rp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===op)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===lp||a===up||a===cp||a===hp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===lp)return u.COMPRESSED_RED_RGTC1_EXT;if(a===up)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===hp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ul?l.UNSIGNED_INT_24_8:l[a]!==void 0?l[a]:null}return{convert:n}}const qA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
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

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new mx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new qi({vertexShader:qA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wi(new mc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZA extends $r{constructor(t,n){super();const a=this;let r=null,u=1,h=null,f="local-floor",m=1,p=null,_=null,g=null,v=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",M=new jA,x={},D=n.getContextAttributes();let L=null,z=null;const P=[],I=[],w=new He;let Z=null;const R=new mi;R.viewport=new en;const U=new mi;U.viewport=new en;const k=[R,U],tt=new sE;let et=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ft=P[it];return ft===void 0&&(ft=new $f,P[it]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(it){let ft=P[it];return ft===void 0&&(ft=new $f,P[it]=ft),ft.getGripSpace()},this.getHand=function(it){let ft=P[it];return ft===void 0&&(ft=new $f,P[it]=ft),ft.getHandSpace()};function ut(it){const ft=I.indexOf(it.inputSource);if(ft===-1)return;const Nt=P[ft];Nt!==void 0&&(Nt.update(it.inputSource,it.frame,p||h),Nt.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){r.removeEventListener("select",ut),r.removeEventListener("selectstart",ut),r.removeEventListener("selectend",ut),r.removeEventListener("squeeze",ut),r.removeEventListener("squeezestart",ut),r.removeEventListener("squeezeend",ut),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",H);for(let it=0;it<P.length;it++){const ft=I[it];ft!==null&&(I[it]=null,P[it].disconnect(ft))}et=null,dt=null,M.reset();for(const it in x)delete x[it];t.setRenderTarget(L),y=null,v=null,g=null,r=null,z=null,It.stop(),a.isPresenting=!1,t.setPixelRatio(Z),t.setSize(w.width,w.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,a.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,a.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(r,n)),g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(L=t.getRenderTarget(),r.addEventListener("select",ut),r.addEventListener("selectstart",ut),r.addEventListener("selectend",ut),r.addEventListener("squeeze",ut),r.addEventListener("squeezestart",ut),r.addEventListener("squeezeend",ut),r.addEventListener("end",F),r.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await n.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(w),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Vt=null,Bt=null;D.depth&&(Bt=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Nt=D.stencil?Hs:Ta,Vt=D.stencil?ul:Xi);const pe={colorFormat:n.RGBA8,depthFormat:Bt,scaleFactor:u};g=this.getBinding(),v=g.createProjectionLayer(pe),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),z=new Vi(v.textureWidth,v.textureHeight,{format:Ci,type:ni,depthTexture:new hl(v.textureWidth,v.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Nt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(r,n,Nt),r.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),z=new Vi(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await r.requestReferenceSpace(f),It.setContext(r),It.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(it){for(let ft=0;ft<it.removed.length;ft++){const Nt=it.removed[ft],Vt=I.indexOf(Nt);Vt>=0&&(I[Vt]=null,P[Vt].disconnect(Nt))}for(let ft=0;ft<it.added.length;ft++){const Nt=it.added[ft];let Vt=I.indexOf(Nt);if(Vt===-1){for(let pe=0;pe<P.length;pe++)if(pe>=I.length){I.push(Nt),Vt=pe;break}else if(I[pe]===null){I[pe]=Nt,Vt=pe;break}if(Vt===-1)break}const Bt=P[Vt];Bt&&Bt.connect(Nt)}}const J=new lt,bt=new lt;function St(it,ft,Nt){J.setFromMatrixPosition(ft.matrixWorld),bt.setFromMatrixPosition(Nt.matrixWorld);const Vt=J.distanceTo(bt),Bt=ft.projectionMatrix.elements,pe=Nt.projectionMatrix.elements,Ze=Bt[14]/(Bt[10]-1),me=Bt[14]/(Bt[10]+1),he=(Bt[9]+1)/Bt[5],Ee=(Bt[9]-1)/Bt[5],ie=(Bt[8]-1)/Bt[0],Ke=(pe[8]+1)/pe[0],G=Ze*ie,Ve=Ze*Ke,fe=Vt/(-ie+Ke),Ce=fe*-ie;if(ft.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ce),it.translateZ(fe),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Bt[10]===-1)it.projectionMatrix.copy(ft.projectionMatrix),it.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Wt=Ze+fe,N=me+fe,b=G-Ce,q=Ve+(Vt-Ce),mt=he*me/N*Wt,Mt=Ee*me/N*Wt;it.projectionMatrix.makePerspective(b,q,mt,Mt,Wt,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function O(it,ft){ft===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ft.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let ft=it.near,Nt=it.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Nt=M.depthFar)),tt.near=U.near=R.near=ft,tt.far=U.far=R.far=Nt,(et!==tt.near||dt!==tt.far)&&(r.updateRenderState({depthNear:tt.near,depthFar:tt.far}),et=tt.near,dt=tt.far),tt.layers.mask=it.layers.mask|6,R.layers.mask=tt.layers.mask&3,U.layers.mask=tt.layers.mask&5;const Vt=it.parent,Bt=tt.cameras;O(tt,Vt);for(let pe=0;pe<Bt.length;pe++)O(Bt[pe],Vt);Bt.length===2?St(tt,R,U):tt.projectionMatrix.copy(R.projectionMatrix),nt(it,tt,Vt)};function nt(it,ft,Nt){Nt===null?it.matrix.copy(ft.matrixWorld):(it.matrix.copy(Nt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ft.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ft.projectionMatrix),it.projectionMatrixInverse.copy(ft.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=fp*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(it){m=it,v!==null&&(v.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(tt)},this.getCameraTexture=function(it){return x[it]};let vt=null;function Rt(it,ft){if(_=ft.getViewerPose(p||h),E=ft,_!==null){const Nt=_.views;y!==null&&(t.setRenderTargetFramebuffer(z,y.framebuffer),t.setRenderTarget(z));let Vt=!1;Nt.length!==tt.cameras.length&&(tt.cameras.length=0,Vt=!0);for(let me=0;me<Nt.length;me++){const he=Nt[me];let Ee=null;if(y!==null)Ee=y.getViewport(he);else{const Ke=g.getViewSubImage(v,he);Ee=Ke.viewport,me===0&&(t.setRenderTargetTextures(z,Ke.colorTexture,Ke.depthStencilTexture),t.setRenderTarget(z))}let ie=k[me];ie===void 0&&(ie=new mi,ie.layers.enable(me),ie.viewport=new en,k[me]=ie),ie.matrix.fromArray(he.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(he.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),me===0&&(tt.matrix.copy(ie.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Vt===!0&&tt.cameras.push(ie)}const Bt=r.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){g=a.getBinding();const me=g.getDepthInformation(Nt[0]);me&&me.isValid&&me.texture&&M.init(me,r.renderState)}if(Bt&&Bt.includes("camera-access")&&T){t.state.unbindTexture(),g=a.getBinding();for(let me=0;me<Nt.length;me++){const he=Nt[me].camera;if(he){let Ee=x[he];Ee||(Ee=new mx,x[he]=Ee);const ie=g.getCameraImage(he);Ee.sourceTexture=ie}}}}for(let Nt=0;Nt<P.length;Nt++){const Vt=I[Nt],Bt=P[Nt];Vt!==null&&Bt!==void 0&&Bt.update(Vt,ft,p||h)}vt&&vt(it,ft),ft.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ft}),E=null}const It=new _x;It.setAnimationLoop(Rt),this.setAnimationLoop=function(it){vt=it},this.dispose=function(){}}}const zs=new Jr,KA=new dn;function QA(l,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,hx(l)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function r(M,x,D,L,z){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),g(M,x)):x.isMeshPhongMaterial?(u(M,x),_(M,x)):x.isMeshStandardMaterial?(u(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,z)):x.isMeshMatcapMaterial?(u(M,x),E(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),T(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?m(M,x,D,L):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Wn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Wn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=t.get(x),L=D.envMap,z=D.envMapRotation;L&&(M.envMap.value=L,zs.copy(z),zs.x*=-1,zs.y*=-1,zs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),M.envMapRotation.value.setFromMatrix4(KA.makeRotationFromEuler(zs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,D,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=L*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const D=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function $A(l,t,n,a){let r={},u={},h=[];const f=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const z=L.program;a.uniformBlockBinding(D,z)}function p(D,L){let z=r[D.id];z===void 0&&(E(D),z=_(D),r[D.id]=z,D.addEventListener("dispose",M));const P=L.program;a.updateUBOMapping(D,P);const I=t.render.frame;u[D.id]!==I&&(v(D),u[D.id]=I)}function _(D){const L=g();D.__bindingPointIndex=L;const z=l.createBuffer(),P=D.__size,I=D.usage;return l.bindBuffer(l.UNIFORM_BUFFER,z),l.bufferData(l.UNIFORM_BUFFER,P,I),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,L,z),z}function g(){for(let D=0;D<f;D++)if(h.indexOf(D)===-1)return h.push(D),D;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=r[D.id],z=D.uniforms,P=D.__cache;l.bindBuffer(l.UNIFORM_BUFFER,L);for(let I=0,w=z.length;I<w;I++){const Z=Array.isArray(z[I])?z[I]:[z[I]];for(let R=0,U=Z.length;R<U;R++){const k=Z[R];if(y(k,I,R,P)===!0){const tt=k.__offset,et=Array.isArray(k.value)?k.value:[k.value];let dt=0;for(let ut=0;ut<et.length;ut++){const F=et[ut],H=T(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,l.bufferSubData(l.UNIFORM_BUFFER,tt+dt,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,tt,k.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function y(D,L,z,P){const I=D.value,w=L+"_"+z;if(P[w]===void 0)return typeof I=="number"||typeof I=="boolean"?P[w]=I:P[w]=I.clone(),!0;{const Z=P[w];if(typeof I=="number"||typeof I=="boolean"){if(Z!==I)return P[w]=I,!0}else if(Z.equals(I)===!1)return Z.copy(I),!0}return!1}function E(D){const L=D.uniforms;let z=0;const P=16;for(let w=0,Z=L.length;w<Z;w++){const R=Array.isArray(L[w])?L[w]:[L[w]];for(let U=0,k=R.length;U<k;U++){const tt=R[U],et=Array.isArray(tt.value)?tt.value:[tt.value];for(let dt=0,ut=et.length;dt<ut;dt++){const F=et[dt],H=T(F),J=z%P,bt=J%H.boundary,St=J+bt;z+=bt,St!==0&&P-St<H.storage&&(z+=P-St),tt.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=z,z+=H.storage}}}const I=z%P;return I>0&&(z+=P-I),D.__size=z,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",D),L}function M(D){const L=D.target;L.removeEventListener("dispose",M);const z=h.indexOf(L.__bindingPointIndex);h.splice(z,1),l.deleteBuffer(r[L.id]),delete r[L.id],delete u[L.id]}function x(){for(const D in r)l.deleteBuffer(r[D]);h=[],r={},u={}}return{bind:m,update:p,dispose:x}}const JA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function tC(){return zi===null&&(zi=new qM(JA,16,16,Zr,ba),zi.name="DFG_LUT",zi.minFilter=zn,zi.magFilter=zn,zi.wrapS=xa,zi.wrapT=xa,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class eC{constructor(t={}){const{canvas:n=xM(),context:a=null,depth:r=!0,stencil:u=!1,alpha:h=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=ni}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=h;const T=y,M=new Set([Tp,bp,Ep]),x=new Set([ni,Xi,ll,ul,Sp,Mp]),D=new Uint32Array(4),L=new Int32Array(4);let z=null,P=null;const I=[],w=[];let Z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let U=!1;this._outputColorSpace=pi;let k=0,tt=0,et=null,dt=-1,ut=null;const F=new en,H=new en;let J=null;const bt=new Oe(0);let St=0,O=n.width,nt=n.height,vt=1,Rt=null,It=null;const it=new en(0,0,O,nt),ft=new en(0,0,O,nt);let Nt=!1;const Vt=new Dp;let Bt=!1,pe=!1;const Ze=new dn,me=new lt,he=new en,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Ke(){return et===null?vt:1}let G=a;function Ve(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:r,stencil:u,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vp}`),n.addEventListener("webglcontextlost",Jt,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Te,!1),G===null){const Y="webgl2";if(G=Ve(Y,C),G===null)throw Ve(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw De("WebGLRenderer: "+C.message),C}let fe,Ce,Wt,N,b,q,mt,Mt,ht,qt,Ut,Gt,V,at,yt,At,wt,Dt,ne,W,Ot,Tt,Lt,Et;function _t(){fe=new tT(G),fe.init(),Tt=new WA(G,fe),Ce=new W1(G,fe,t,Tt),Wt=new kA(G,fe),Ce.reversedDepthBuffer&&v&&Wt.buffers.depth.setReversed(!0),N=new iT(G),b=new RA,q=new XA(G,fe,Wt,b,Ce,Tt,N),mt=new Y1(R),Mt=new J1(R),ht=new oE(G),Lt=new k1(G,ht),qt=new eT(G,ht,N,Lt),Ut=new sT(G,qt,ht,N),ne=new aT(G,Ce,q),At=new q1(b),Gt=new CA(R,mt,Mt,fe,Ce,Lt,At),V=new QA(R,b),at=new DA,yt=new PA(fe),Dt=new G1(R,mt,Mt,Wt,Ut,E,m),wt=new VA(R,Ut,Ce),Et=new $A(G,N,Ce,Wt),W=new X1(G,fe,N),Ot=new nT(G,fe,N),N.programs=Gt.programs,R.capabilities=Ce,R.extensions=fe,R.properties=b,R.renderLists=at,R.shadowMap=wt,R.state=Wt,R.info=N}_t(),T!==ni&&(Z=new oT(T,n.width,n.height,r,u));const Ct=new ZA(R,G);this.xr=Ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(C){C!==void 0&&(vt=C,this.setSize(O,nt,!1))},this.getSize=function(C){return C.set(O,nt)},this.setSize=function(C,Y,ot=!0){if(Ct.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,nt=Y,n.width=Math.floor(C*vt),n.height=Math.floor(Y*vt),ot===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),Z!==null&&Z.setSize(n.width,n.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(O*vt,nt*vt).floor()},this.setDrawingBufferSize=function(C,Y,ot){O=C,nt=Y,vt=ot,n.width=Math.floor(C*ot),n.height=Math.floor(Y*ot),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(T===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,Y,ot,st){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,Y,ot,st),Wt.viewport(F.copy(it).multiplyScalar(vt).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,Y,ot,st){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,Y,ot,st),Wt.scissor(H.copy(ft).multiplyScalar(vt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(C){Wt.setScissorTest(Nt=C)},this.setOpaqueSort=function(C){Rt=C},this.setTransparentSort=function(C){It=C},this.getClearColor=function(C){return C.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ot=!0){let st=0;if(C){let K=!1;if(et!==null){const zt=et.texture.format;K=M.has(zt)}if(K){const zt=et.texture.type,Ht=x.has(zt),Pt=Dt.getClearColor(),kt=Dt.getClearAlpha(),Yt=Pt.r,$t=Pt.g,jt=Pt.b;Ht?(D[0]=Yt,D[1]=$t,D[2]=jt,D[3]=kt,G.clearBufferuiv(G.COLOR,0,D)):(L[0]=Yt,L[1]=$t,L[2]=jt,L[3]=kt,G.clearBufferiv(G.COLOR,0,L))}else st|=G.COLOR_BUFFER_BIT}Y&&(st|=G.DEPTH_BUFFER_BIT),ot&&(st|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Jt,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Dt.dispose(),at.dispose(),yt.dispose(),b.dispose(),mt.dispose(),Mt.dispose(),Ut.dispose(),Lt.dispose(),Et.dispose(),Gt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Ws),Ct.removeEventListener("sessionend",so),Di.stop()};function Jt(C){C.preventDefault(),U_("WebGLRenderer: Context Lost."),U=!0}function be(){U_("WebGLRenderer: Context Restored."),U=!1;const C=N.autoReset,Y=wt.enabled,ot=wt.autoUpdate,st=wt.needsUpdate,K=wt.type;_t(),N.autoReset=C,wt.enabled=Y,wt.autoUpdate=ot,wt.needsUpdate=st,wt.type=K}function Te(C){De("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function wn(C){const Y=C.target;Y.removeEventListener("dispose",wn),gi(Y)}function gi(C){_l(C),b.remove(C)}function _l(C){const Y=b.get(C).programs;Y!==void 0&&(Y.forEach(function(ot){Gt.releaseProgram(ot)}),C.isShaderMaterial&&Gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ot,st,K,zt){Y===null&&(Y=Ee);const Ht=K.isMesh&&K.matrixWorld.determinant()<0,Pt=fs(C,Y,ot,st,K);Wt.setMaterial(st,Ht);let kt=ot.index,Yt=1;if(st.wireframe===!0){if(kt=qt.getWireframeAttribute(ot),kt===void 0)return;Yt=2}const $t=ot.drawRange,jt=ot.attributes.position;let te=$t.start*Yt,Ue=($t.start+$t.count)*Yt;zt!==null&&(te=Math.max(te,zt.start*Yt),Ue=Math.min(Ue,(zt.start+zt.count)*Yt)),kt!==null?(te=Math.max(te,0),Ue=Math.min(Ue,kt.count)):jt!=null&&(te=Math.max(te,0),Ue=Math.min(Ue,jt.count));const Qe=Ue-te;if(Qe<0||Qe===1/0)return;Lt.setup(K,st,Pt,ot,kt);let qe,ze=W;if(kt!==null&&(qe=ht.get(kt),ze=Ot,ze.setIndex(qe)),K.isMesh)st.wireframe===!0?(Wt.setLineWidth(st.wireframeLinewidth*Ke()),ze.setMode(G.LINES)):ze.setMode(G.TRIANGLES);else if(K.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),Wt.setLineWidth(Kt*Ke()),K.isLineSegments?ze.setMode(G.LINES):K.isLineLoop?ze.setMode(G.LINE_LOOP):ze.setMode(G.LINE_STRIP)}else K.isPoints?ze.setMode(G.POINTS):K.isSprite&&ze.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))ze.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Kt=K._multiDrawStarts,Le=K._multiDrawCounts,ae=K._multiDrawCount,xn=kt?ht.get(kt).bytesPerElement:1,Yi=b.get(st).currentProgram.getUniforms();for(let yn=0;yn<ae;yn++)Yi.setValue(G,"_gl_DrawID",yn),ze.render(Kt[yn]/xn,Le[yn])}else if(K.isInstancedMesh)ze.renderInstances(te,Qe,K.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Le=Math.min(ot.instanceCount,Kt);ze.renderInstances(te,Qe,Le)}else ze.render(te,Qe)};function io(C,Y,ot){C.transparent===!0&&C.side===va&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Ys(C,Y,ot),C.side=hs,C.needsUpdate=!0,Ys(C,Y,ot),C.side=va):Ys(C,Y,ot)}this.compile=function(C,Y,ot=null){ot===null&&(ot=C),P=yt.get(ot),P.init(Y),w.push(P),ot.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),C!==ot&&C.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(P.pushLight(K),K.castShadow&&P.pushShadow(K))}),P.setupLights();const st=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const zt=K.material;if(zt)if(Array.isArray(zt))for(let Ht=0;Ht<zt.length;Ht++){const Pt=zt[Ht];io(Pt,ot,K),st.add(Pt)}else io(zt,ot,K),st.add(zt)}),P=w.pop(),st},this.compileAsync=function(C,Y,ot=null){const st=this.compile(C,Y,ot);return new Promise(K=>{function zt(){if(st.forEach(function(Ht){b.get(Ht).currentProgram.isReady()&&st.delete(Ht)}),st.size===0){K(C);return}setTimeout(zt,10)}fe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Xs=null;function ao(C){Xs&&Xs(C)}function Ws(){Di.stop()}function so(){Di.start()}const Di=new _x;Di.setAnimationLoop(ao),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){Xs=C,Ct.setAnimationLoop(C),C===null?Di.stop():Di.start()},Ct.addEventListener("sessionstart",Ws),Ct.addEventListener("sessionend",so),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const ot=Ct.enabled===!0&&Ct.isPresenting===!0,st=Z!==null&&(et===null||ot)&&Z.begin(R,et);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Y),Y=Ct.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Y,et),P=yt.get(C,w.length),P.init(Y),w.push(P),Ze.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Vt.setFromProjectionMatrix(Ze,Bi,Y.reversedDepth),pe=this.localClippingEnabled,Bt=At.init(this.clippingPlanes,pe),z=at.get(C,I.length),z.init(),I.push(z),Ct.enabled===!0&&Ct.isPresenting===!0){const Ht=R.xr.getDepthSensingMesh();Ht!==null&&ii(Ht,Y,-1/0,R.sortObjects)}ii(C,Y,0,R.sortObjects),z.finish(),R.sortObjects===!0&&z.sort(Rt,It),ie=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ie&&Dt.addToRenderList(z,C),this.info.render.frame++,Bt===!0&&At.beginShadows();const K=P.state.shadowsArray;if(wt.render(K,C,Y),Bt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&Z.hasRenderPass())===!1){const Ht=z.opaque,Pt=z.transmissive;if(P.setupLights(),Y.isArrayCamera){const kt=Y.cameras;if(Pt.length>0)for(let Yt=0,$t=kt.length;Yt<$t;Yt++){const jt=kt[Yt];vn(Ht,Pt,C,jt)}ie&&Dt.render(C);for(let Yt=0,$t=kt.length;Yt<$t;Yt++){const jt=kt[Yt];sn(z,C,jt,jt.viewport)}}else Pt.length>0&&vn(Ht,Pt,C,Y),ie&&Dt.render(C),sn(z,C,Y)}et!==null&&tt===0&&(q.updateMultisampleRenderTarget(et),q.updateRenderTargetMipmap(et)),st&&Z.end(R),C.isScene===!0&&C.onAfterRender(R,C,Y),Lt.resetDefaultState(),dt=-1,ut=null,w.pop(),w.length>0?(P=w[w.length-1],Bt===!0&&At.setGlobalState(R.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?z=I[I.length-1]:z=null};function ii(C,Y,ot,st){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Vt.intersectsSprite(C)){st&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ze);const Ht=Ut.update(C),Pt=C.material;Pt.visible&&z.push(C,Ht,Pt,ot,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Vt.intersectsObject(C))){const Ht=Ut.update(C),Pt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),he.copy(Ht.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(Ze)),Array.isArray(Pt)){const kt=Ht.groups;for(let Yt=0,$t=kt.length;Yt<$t;Yt++){const jt=kt[Yt],te=Pt[jt.materialIndex];te&&te.visible&&z.push(C,Ht,te,ot,he.z,jt)}}else Pt.visible&&z.push(C,Ht,Pt,ot,he.z,null)}}const zt=C.children;for(let Ht=0,Pt=zt.length;Ht<Pt;Ht++)ii(zt[Ht],Y,ot,st)}function sn(C,Y,ot,st){const{opaque:K,transmissive:zt,transparent:Ht}=C;P.setupLightsView(ot),Bt===!0&&At.setGlobalState(R.clippingPlanes,ot),st&&Wt.viewport(F.copy(st)),K.length>0&&_i(K,Y,ot),zt.length>0&&_i(zt,Y,ot),Ht.length>0&&_i(Ht,Y,ot),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function vn(C,Y,ot,st){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[st.id]===void 0){const te=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[st.id]=new Vi(1,1,{generateMipmaps:!0,type:te?ba:ni,minFilter:Bs,samples:Ce.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const zt=P.state.transmissionRenderTarget[st.id],Ht=st.viewport||F;zt.setSize(Ht.z*R.transmissionResolutionScale,Ht.w*R.transmissionResolutionScale);const Pt=R.getRenderTarget(),kt=R.getActiveCubeFace(),Yt=R.getActiveMipmapLevel();R.setRenderTarget(zt),R.getClearColor(bt),St=R.getClearAlpha(),St<1&&R.setClearColor(16777215,.5),R.clear(),ie&&Dt.render(ot);const $t=R.toneMapping;R.toneMapping=Hi;const jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),P.setupLightsView(st),Bt===!0&&At.setGlobalState(R.clippingPlanes,st),_i(C,ot,st),q.updateMultisampleRenderTarget(zt),q.updateRenderTargetMipmap(zt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ue=0,Qe=Y.length;Ue<Qe;Ue++){const qe=Y[Ue],{object:ze,geometry:Kt,material:Le,group:ae}=qe;if(Le.side===va&&ze.layers.test(st.layers)){const xn=Le.side;Le.side=Wn,Le.needsUpdate=!0,qs(ze,ot,st,Kt,Le,ae),Le.side=xn,Le.needsUpdate=!0,te=!0}}te===!0&&(q.updateMultisampleRenderTarget(zt),q.updateRenderTargetMipmap(zt))}R.setRenderTarget(Pt,kt,Yt),R.setClearColor(bt,St),jt!==void 0&&(st.viewport=jt),R.toneMapping=$t}function _i(C,Y,ot){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,zt=C.length;K<zt;K++){const Ht=C[K],{object:Pt,geometry:kt,group:Yt}=Ht;let $t=Ht.material;$t.allowOverride===!0&&st!==null&&($t=st),Pt.layers.test(ot.layers)&&qs(Pt,Y,ot,kt,$t,Yt)}}function qs(C,Y,ot,st,K,zt){C.onBeforeRender(R,Y,ot,st,K,zt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(R,Y,ot,st,C,zt),K.transparent===!0&&K.side===va&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,R.renderBufferDirect(ot,Y,st,K,C,zt),K.side=hs,K.needsUpdate=!0,R.renderBufferDirect(ot,Y,st,K,C,zt),K.side=va):R.renderBufferDirect(ot,Y,st,K,C,zt),C.onAfterRender(R,Y,ot,st,K,zt)}function Ys(C,Y,ot){Y.isScene!==!0&&(Y=Ee);const st=b.get(C),K=P.state.lights,zt=P.state.shadowsArray,Ht=K.state.version,Pt=Gt.getParameters(C,K.state,zt,Y,ot),kt=Gt.getProgramCacheKey(Pt);let Yt=st.programs;st.environment=C.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(C.isMeshStandardMaterial?Mt:mt).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Yt===void 0&&(C.addEventListener("dispose",wn),Yt=new Map,st.programs=Yt);let $t=Yt.get(kt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===Ht)return ro(C,Pt),$t}else Pt.uniforms=Gt.getUniforms(C),C.onBeforeCompile(Pt,R),$t=Gt.acquireProgram(Pt,kt),Yt.set(kt,$t),st.uniforms=Pt.uniforms;const jt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(jt.clippingPlanes=At.uniform),ro(C,Pt),st.needsLights=Ca(C),st.lightsStateVersion=Ht,st.needsLights&&(jt.ambientLightColor.value=K.state.ambient,jt.lightProbe.value=K.state.probe,jt.directionalLights.value=K.state.directional,jt.directionalLightShadows.value=K.state.directionalShadow,jt.spotLights.value=K.state.spot,jt.spotLightShadows.value=K.state.spotShadow,jt.rectAreaLights.value=K.state.rectArea,jt.ltc_1.value=K.state.rectAreaLTC1,jt.ltc_2.value=K.state.rectAreaLTC2,jt.pointLights.value=K.state.point,jt.pointLightShadows.value=K.state.pointShadow,jt.hemisphereLights.value=K.state.hemi,jt.directionalShadowMap.value=K.state.directionalShadowMap,jt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,jt.spotShadowMap.value=K.state.spotShadowMap,jt.spotLightMatrix.value=K.state.spotLightMatrix,jt.spotLightMap.value=K.state.spotLightMap,jt.pointShadowMap.value=K.state.pointShadowMap,jt.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function vl(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=uc.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ro(C,Y){const ot=b.get(C);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function fs(C,Y,ot,st,K){Y.isScene!==!0&&(Y=Ee),q.resetTextureUnits();const zt=Y.fog,Ht=st.isMeshStandardMaterial?Y.environment:null,Pt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Kr,kt=(st.isMeshStandardMaterial?Mt:mt).get(st.envMap||Ht),Yt=st.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,$t=!!ot.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),jt=!!ot.morphAttributes.position,te=!!ot.morphAttributes.normal,Ue=!!ot.morphAttributes.color;let Qe=Hi;st.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Qe=R.toneMapping);const qe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ze=qe!==void 0?qe.length:0,Kt=b.get(st),Le=P.state.lights;if(Bt===!0&&(pe===!0||C!==ut)){const Mn=C===ut&&st.id===dt;At.setState(st,C,Mn)}let ae=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Le.state.version||Kt.outputColorSpace!==Pt||K.isBatchedMesh&&Kt.batching===!1||!K.isBatchedMesh&&Kt.batching===!0||K.isBatchedMesh&&Kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Kt.instancing===!1||!K.isInstancedMesh&&Kt.instancing===!0||K.isSkinnedMesh&&Kt.skinning===!1||!K.isSkinnedMesh&&Kt.skinning===!0||K.isInstancedMesh&&Kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Kt.instancingMorph===!1&&K.morphTexture!==null||Kt.envMap!==kt||st.fog===!0&&Kt.fog!==zt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==At.numPlanes||Kt.numIntersection!==At.numIntersection)||Kt.vertexAlphas!==Yt||Kt.vertexTangents!==$t||Kt.morphTargets!==jt||Kt.morphNormals!==te||Kt.morphColors!==Ue||Kt.toneMapping!==Qe||Kt.morphTargetsCount!==ze)&&(ae=!0):(ae=!0,Kt.__version=st.version);let xn=Kt.currentProgram;ae===!0&&(xn=Ys(st,Y,K));let Yi=!1,yn=!1,ai=!1;const Pe=xn.getUniforms(),Sn=Kt.uniforms;if(Wt.useProgram(xn.program)&&(Yi=!0,yn=!0,ai=!0),st.id!==dt&&(dt=st.id,yn=!0),Yi||ut!==C){Wt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pe.setValue(G,"projectionMatrix",C.projectionMatrix),Pe.setValue(G,"viewMatrix",C.matrixWorldInverse);const En=Pe.map.cameraPosition;En!==void 0&&En.setValue(G,me.setFromMatrixPosition(C.matrixWorld)),Ce.logarithmicDepthBuffer&&Pe.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Pe.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),ut!==C&&(ut=C,yn=!0,ai=!0)}if(Kt.needsLights&&(Le.state.directionalShadowMap.length>0&&Pe.setValue(G,"directionalShadowMap",Le.state.directionalShadowMap,q),Le.state.spotShadowMap.length>0&&Pe.setValue(G,"spotShadowMap",Le.state.spotShadowMap,q),Le.state.pointShadowMap.length>0&&Pe.setValue(G,"pointShadowMap",Le.state.pointShadowMap,q)),K.isSkinnedMesh){Pe.setOptional(G,K,"bindMatrix"),Pe.setOptional(G,K,"bindMatrixInverse");const Mn=K.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Pe.setValue(G,"boneTexture",Mn.boneTexture,q))}K.isBatchedMesh&&(Pe.setOptional(G,K,"batchingTexture"),Pe.setValue(G,"batchingTexture",K._matricesTexture,q),Pe.setOptional(G,K,"batchingIdTexture"),Pe.setValue(G,"batchingIdTexture",K._indirectTexture,q),Pe.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Pe.setValue(G,"batchingColorTexture",K._colorsTexture,q));const hn=ot.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ne.update(K,ot,xn),(yn||Kt.receiveShadow!==K.receiveShadow)&&(Kt.receiveShadow=K.receiveShadow,Pe.setValue(G,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Sn.envMap.value=kt,Sn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(Sn.envMapIntensity.value=Y.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=tC()),yn&&(Pe.setValue(G,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&oo(Sn,ai),zt&&st.fog===!0&&V.refreshFogUniforms(Sn,zt),V.refreshMaterialUniforms(Sn,st,vt,nt,P.state.transmissionRenderTarget[C.id]),uc.upload(G,vl(Kt),Sn,q)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(uc.upload(G,vl(Kt),Sn,q),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Pe.setValue(G,"center",K.center),Pe.setValue(G,"modelViewMatrix",K.modelViewMatrix),Pe.setValue(G,"normalMatrix",K.normalMatrix),Pe.setValue(G,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Mn=st.uniformsGroups;for(let En=0,js=Mn.length;En<js;En++){const vi=Mn[En];Et.update(vi,xn),Et.bind(vi,xn)}}return xn}function oo(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ca(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(C,Y,ot){const st=b.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=Y,b.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ot,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ot=b.get(C);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const Ra=G.createFramebuffer();this.setRenderTarget=function(C,Y=0,ot=0){et=C,k=Y,tt=ot;let st=null,K=!1,zt=!1;if(C){const Pt=b.get(C);if(Pt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(G.FRAMEBUFFER,Pt.__webglFramebuffer),F.copy(C.viewport),H.copy(C.scissor),J=C.scissorTest,Wt.viewport(F),Wt.scissor(H),Wt.setScissorTest(J),dt=-1;return}else if(Pt.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Pt.__hasExternalTextures)q.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $t=C.depthTexture;if(Pt.__boundDepthTexture!==$t){if($t!==null&&b.has($t)&&(C.width!==$t.image.width||C.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const kt=C.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(zt=!0);const Yt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Yt[Y])?st=Yt[Y][ot]:st=Yt[Y],K=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?st=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Yt)?st=Yt[ot]:st=Yt,F.copy(C.viewport),H.copy(C.scissor),J=C.scissorTest}else F.copy(it).multiplyScalar(vt).floor(),H.copy(ft).multiplyScalar(vt).floor(),J=Nt;if(ot!==0&&(st=Ra),Wt.bindFramebuffer(G.FRAMEBUFFER,st)&&Wt.drawBuffers(C,st),Wt.viewport(F),Wt.scissor(H),Wt.setScissorTest(J),K){const Pt=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pt.__webglTexture,ot)}else if(zt){const Pt=Y;for(let kt=0;kt<C.textures.length;kt++){const Yt=b.get(C.textures[kt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,ot,Pt)}}else if(C!==null&&ot!==0){const Pt=b.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pt.__webglTexture,ot)}dt=-1},this.readRenderTargetPixels=function(C,Y,ot,st,K,zt,Ht,Pt=0){if(!(C&&C.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt){Wt.bindFramebuffer(G.FRAMEBUFFER,kt);try{const Yt=C.textures[Pt],$t=Yt.format,jt=Yt.type;if(!Ce.textureFormatReadable($t)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(jt)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-st&&ot>=0&&ot<=C.height-K&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(Y,ot,st,K,Tt.convert($t),Tt.convert(jt),zt))}finally{const Yt=et!==null?b.get(et).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ot,st,K,zt,Ht,Pt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(kt=kt[Ht]),kt)if(Y>=0&&Y<=C.width-st&&ot>=0&&ot<=C.height-K){Wt.bindFramebuffer(G.FRAMEBUFFER,kt);const Yt=C.textures[Pt],$t=Yt.format,jt=Yt.type;if(!Ce.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.bufferData(G.PIXEL_PACK_BUFFER,zt.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(Y,ot,st,K,Tt.convert($t),Tt.convert(jt),0);const Ue=et!==null?b.get(et).__webglFramebuffer:null;Wt.bindFramebuffer(G.FRAMEBUFFER,Ue);const Qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await yM(G,Qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,zt),G.deleteBuffer(te),G.deleteSync(Qe),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ot=0){const st=Math.pow(2,-ot),K=Math.floor(C.image.width*st),zt=Math.floor(C.image.height*st),Ht=Y!==null?Y.x:0,Pt=Y!==null?Y.y:0;q.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Ht,Pt,K,zt),Wt.unbindTexture()};const ds=G.createFramebuffer(),wa=G.createFramebuffer();this.copyTextureToTexture=function(C,Y,ot=null,st=null,K=0,zt=null){zt===null&&(K!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),zt=K,K=0):zt=0);let Ht,Pt,kt,Yt,$t,jt,te,Ue,Qe;const qe=C.isCompressedTexture?C.mipmaps[zt]:C.image;if(ot!==null)Ht=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,kt=ot.isBox3?ot.max.z-ot.min.z:1,Yt=ot.min.x,$t=ot.min.y,jt=ot.isBox3?ot.min.z:0;else{const hn=Math.pow(2,-K);Ht=Math.floor(qe.width*hn),Pt=Math.floor(qe.height*hn),C.isDataArrayTexture?kt=qe.depth:C.isData3DTexture?kt=Math.floor(qe.depth*hn):kt=1,Yt=0,$t=0,jt=0}st!==null?(te=st.x,Ue=st.y,Qe=st.z):(te=0,Ue=0,Qe=0);const ze=Tt.convert(Y.format),Kt=Tt.convert(Y.type);let Le;Y.isData3DTexture?(q.setTexture3D(Y,0),Le=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Le=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Le=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ae=G.getParameter(G.UNPACK_ROW_LENGTH),xn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Yi=G.getParameter(G.UNPACK_SKIP_PIXELS),yn=G.getParameter(G.UNPACK_SKIP_ROWS),ai=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,qe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yt),G.pixelStorei(G.UNPACK_SKIP_ROWS,$t),G.pixelStorei(G.UNPACK_SKIP_IMAGES,jt);const Pe=C.isDataArrayTexture||C.isData3DTexture,Sn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const hn=b.get(C),Mn=b.get(Y),En=b.get(hn.__renderTarget),js=b.get(Mn.__renderTarget);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let vi=0;vi<kt;vi++)Pe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(C).__webglTexture,K,jt+vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,zt,Qe+vi)),G.blitFramebuffer(Yt,$t,Ht,Pt,te,Ue,Ht,Pt,G.DEPTH_BUFFER_BIT,G.NEAREST);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||b.has(C)){const hn=b.get(C),Mn=b.get(Y);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,ds),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,wa);for(let En=0;En<kt;En++)Pe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hn.__webglTexture,K,jt+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hn.__webglTexture,K),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,zt,Qe+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,zt),K!==0?G.blitFramebuffer(Yt,$t,Ht,Pt,te,Ue,Ht,Pt,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(Le,zt,te,Ue,Qe+En,Yt,$t,Ht,Pt):G.copyTexSubImage2D(Le,zt,te,Ue,Yt,$t,Ht,Pt);Wt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Le,zt,te,Ue,Qe,Ht,Pt,kt,ze,Kt,qe.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Le,zt,te,Ue,Qe,Ht,Pt,kt,ze,qe.data):G.texSubImage3D(Le,zt,te,Ue,Qe,Ht,Pt,kt,ze,Kt,qe):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,zt,te,Ue,Ht,Pt,ze,Kt,qe.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,zt,te,Ue,qe.width,qe.height,ze,qe.data):G.texSubImage2D(G.TEXTURE_2D,zt,te,Ue,Ht,Pt,ze,Kt,qe);G.pixelStorei(G.UNPACK_ROW_LENGTH,ae),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yi),G.pixelStorei(G.UNPACK_SKIP_ROWS,yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ai),zt===0&&Y.generateMipmaps&&G.generateMipmap(Le),Wt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),Wt.unbindTexture()},this.resetState=function(){k=0,tt=0,et=null,Wt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}class ki{constructor(t,n,a,r,u="div"){this.parent=t,this.object=n,this.property=a,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(u),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),ki.nextNameID=ki.nextNameID||0,this.$name.id=`lil-gui-name-${++ki.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(a)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const n=this.parent.add(this.object,this.property,t);return n.name(this._name),this.destroy(),n}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class nC extends ki{constructor(t,n,a){super(t,n,a,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function gp(l){let t,n;return(t=l.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?"#"+n:!1}const iC={isPrimitive:!0,match:l=>typeof l=="string",fromHexString:gp,toHexString:gp},fl={isPrimitive:!0,match:l=>typeof l=="number",fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},aC={isPrimitive:!1,match:l=>Array.isArray(l)||ArrayBuffer.isView(l),fromHexString(l,t,n=1){const a=fl.fromHexString(l);t[0]=(a>>16&255)/255*n,t[1]=(a>>8&255)/255*n,t[2]=(a&255)/255*n},toHexString([l,t,n],a=1){a=255/a;const r=l*a<<16^t*a<<8^n*a<<0;return fl.toHexString(r)}},sC={isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,t,n=1){const a=fl.fromHexString(l);t.r=(a>>16&255)/255*n,t.g=(a>>8&255)/255*n,t.b=(a&255)/255*n},toHexString({r:l,g:t,b:n},a=1){a=255/a;const r=l*a<<16^t*a<<8^n*a<<0;return fl.toHexString(r)}},rC=[iC,fl,aC,sC];function oC(l){return rC.find(t=>t.match(l))}class lC extends ki{constructor(t,n,a,r){super(t,n,a,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=oC(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const u=gp(this.$text.value);u&&this._setValueFromHexString(u)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const n=this._format.fromHexString(t);this.setValue(n)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class od extends ki{constructor(t,n,a){super(t,n,a,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class uC extends ki{constructor(t,n,a,r,u,h){super(t,n,a,"lil-number"),this._initInput(),this.min(r),this.max(u);const f=h!==void 0;this.step(f?h:this._getImplicitStep(),f),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,n=!0){return this._step=t,this._stepExplicit=n,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let n=(t-this._min)/(this._max-this._min);n=Math.max(0,Math.min(n,1)),this.$fill.style.width=n*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const n=()=>{let D=parseFloat(this.$input.value);isNaN(D)||(this._stepExplicit&&(D=this._snap(D)),this.setValue(this._clamp(D)))},a=D=>{const L=parseFloat(this.$input.value);isNaN(L)||(this._snapClampSetValue(L+D),this.$input.value=this.getValue())},r=D=>{D.key==="Enter"&&this.$input.blur(),D.code==="ArrowUp"&&(D.preventDefault(),a(this._step*this._arrowKeyMultiplier(D))),D.code==="ArrowDown"&&(D.preventDefault(),a(this._step*this._arrowKeyMultiplier(D)*-1))},u=D=>{this._inputFocused&&(D.preventDefault(),a(this._step*this._normalizeMouseWheel(D)))};let h=!1,f,m,p,_,g;const v=5,y=D=>{f=D.clientX,m=p=D.clientY,h=!0,_=this.getValue(),g=0,window.addEventListener("mousemove",E),window.addEventListener("mouseup",T)},E=D=>{if(h){const L=D.clientX-f,z=D.clientY-m;Math.abs(z)>v?(D.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(L)>v&&T()}if(!h){const L=D.clientY-p;g-=L*this._step*this._arrowKeyMultiplier(D),_+g>this._max?g=this._max-_:_+g<this._min&&(g=this._min-_),this._snapClampSetValue(_+g)}p=D.clientY},T=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",T)},M=()=>{this._inputFocused=!0},x=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",n),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",u,{passive:!1}),this.$input.addEventListener("mousedown",y),this.$input.addEventListener("focus",M),this.$input.addEventListener("blur",x)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(x,D,L,z,P)=>(x-D)/(L-D)*(P-z)+z,n=x=>{const D=this.$slider.getBoundingClientRect();let L=t(x,D.left,D.right,this._min,this._max);this._snapClampSetValue(L)},a=x=>{this._setDraggingStyle(!0),n(x.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",u)},r=x=>{n(x.clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",u)};let h=!1,f,m;const p=x=>{x.preventDefault(),this._setDraggingStyle(!0),n(x.touches[0].clientX),h=!1},_=x=>{x.touches.length>1||(this._hasScrollBar?(f=x.touches[0].clientX,m=x.touches[0].clientY,h=!0):p(x),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",v))},g=x=>{if(h){const D=x.touches[0].clientX-f,L=x.touches[0].clientY-m;Math.abs(D)>Math.abs(L)?p(x):(window.removeEventListener("touchmove",g),window.removeEventListener("touchend",v))}else x.preventDefault(),n(x.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",v)},y=this._callOnFinishChange.bind(this),E=400;let T;const M=x=>{if(Math.abs(x.deltaX)<Math.abs(x.deltaY)&&this._hasScrollBar)return;x.preventDefault();const L=this._normalizeMouseWheel(x)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(T),T=setTimeout(y,E)};this.$slider.addEventListener("mousedown",a),this.$slider.addEventListener("touchstart",_,{passive:!1}),this.$slider.addEventListener("wheel",M,{passive:!1})}_setDraggingStyle(t,n="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${n}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:n,deltaY:a}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(n=0,a=-t.wheelDelta/120,a*=this._stepExplicit?1:10),n+-a}_arrowKeyMultiplier(t){let n=this._stepExplicit?1:10;return t.shiftKey?n*=10:t.altKey&&(n/=10),n}_snap(t){let n=0;return this._hasMin?n=this._min:this._hasMax&&(n=this._max),t-=n,t=Math.round(t/this._step)*this._step,t+=n,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class cC extends ki{constructor(t,n,a,r){super(t,n,a,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(n=>{const a=document.createElement("option");a.textContent=n,this.$select.appendChild(a)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),n=this._values.indexOf(t);return this.$select.selectedIndex=n,this.$display.textContent=n===-1?t:this._names[n],this}}class hC extends ki{constructor(t,n,a){super(t,n,a,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var fC=`.lil-gui {
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
}`;function dC(l){const t=document.createElement("style");t.innerHTML=l;const n=document.querySelector("head link[rel=stylesheet], head style");n?document.head.insertBefore(t,n):document.head.appendChild(t)}let yv=!1;class Lp{constructor({parent:t,autoPlace:n=t===void 0,container:a,width:r,title:u="Controls",closeFolders:h=!1,injectStyles:f=!0,touchStyles:m=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(u),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),m&&this.domElement.classList.add("lil-allow-touch-styles"),!yv&&f&&(dC(fC),yv=!0),a?a.appendChild(this.domElement):n&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=h}add(t,n,a,r,u){if(Object(a)===a)return new cC(this,t,n,a);const h=t[n];switch(typeof h){case"number":return new uC(this,t,n,a,r,u);case"boolean":return new nC(this,t,n);case"string":return new hC(this,t,n);case"function":return new od(this,t,n)}console.error(`gui.add failed
	property:`,n,`
	object:`,t,`
	value:`,h)}addColor(t,n,a=1){return new lC(this,t,n,a)}addFolder(t){const n=new Lp({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(t,n=!0){return t.controllers&&this.controllers.forEach(a=>{a instanceof od||a._name in t.controllers&&a.load(t.controllers[a._name])}),n&&t.folders&&this.folders.forEach(a=>{a._title in t.folders&&a.load(t.folders[a._title])}),this}save(t=!0){const n={controllers:{},folders:{}};return this.controllers.forEach(a=>{if(!(a instanceof od)){if(a._name in n.controllers)throw new Error(`Cannot save GUI with duplicate property "${a._name}"`);n.controllers[a._name]=a.save()}}),t&&this.folders.forEach(a=>{if(a._title in n.folders)throw new Error(`Cannot save GUI with duplicate folder "${a._title}"`);n.folders[a._title]=a.save()}),n}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const n=this.$children.clientHeight;this.$children.style.height=n+"px",this.domElement.classList.add("lil-transition");const a=u=>{u.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",a))};this.$children.addEventListener("transitionend",a);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(a=>a.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(n=>{t=t.concat(n.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(n=>{t=t.concat(n.foldersRecursive())}),t}}const ce={sizing:{paddingSmall:"4px",paddingMedium:"8px",spacingMedium:"8px",edgeMedium:"12px",edgeLarge:"22px"},colors:{text:"#ebebeb",textLight:"#ebebeb",textDark:"#00000",overlay:"rgba(0, 0, 0, 0.5)"},typography:{fontFamily:"monospace",fontSizeSmall:"10px"},ui:{zIndex:"1000"}};ce.panelBase={color:ce.colors.text,background:ce.colors.overlay,padding:ce.sizing.paddingMedium,fontFamily:ce.typography.fontFamily,fontSize:ce.typography.fontSizeSmall,zIndex:ce.ui.zIndex};ce.buttonBase={color:ce.colors.text,background:ce.colors.overlay,padding:ce.sizing.paddingMedium,border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",cursor:"pointer",fontFamily:ce.typography.fontFamily,fontSize:ce.typography.fontSizeSmall,pointerEvents:"auto",zIndex:ce.ui.zIndex};class Mx{constructor({container:t,title:n=null,style:a={},close:r=!1}={}){this.gui=new Lp({title:n,autoPlace:!1}),Object.assign(this.gui.domElement.style,ce.panelBase,a);const u=this.gui.domElement.querySelector(".lil-title");n===null&&u&&(u.style.display="none"),r&&this.gui.close(),t.appendChild(this.gui.domElement),this._proxies={}}addParams(t){for(const n in t)this.#t(n,t[n])}#t(t,n){const{type:a=typeof n.value,value:r,min:u,max:h,step:f,label:m,onChange:p}=n,_={value:r};let g;switch(a){case"boolean":g=this.gui.add(_,"value").name(m??t);break;case"number":g=this.gui.add(_,"value",u,h,f).name(m??t);break;default:console.warn(`[VSGUI] Unsupported param type: ${a}`,t);return}g.onChange(v=>{p?.(v)}),this._proxies[t]={proxy:_,controller:g,config:n}}reset(){for(const t in this._proxies){const{proxy:n,controller:a,config:r}=this._proxies[t];n.value=r.value,a.updateDisplay(),r.onChange?.(n.value)}}show(t){if(!this.gui)return;const n=this.gui.domElement.style.display!=="none";t===void 0?this.gui.domElement.style.display=n?"none":"block":this.gui.domElement.style.display=t?"block":"none"}destroy(){this.gui.destroy(),this.gui=null}}class dc{constructor({scene:t,camera:n,renderer:a,container:r,audioEngine:u,debugOverlay:h,title:f="Simulation",description:m="This is a simulation."}){if(this.onAudioEngineInit!==dc.prototype.onAudioEngineInit)throw new Error("onAudioEngineInit must not be overridden - override onAudioStart");if(this.onAudioEngineShutdown!==dc.prototype.onAudioEngineShutdown)throw new Error("onAudioEngineShutdown must not be overridden - override onAudioStop");this.scene=t,this.camera=n,this.renderer=a,this.container=r,this.audioEngine=u,this.audioBus=null,this.debugOverlay=h,this.gui=new Mx({container:r,title:f,close:!1,style:{...ce.panelBase,marginTop:ce.sizing.spacingMedium,minWidth:"100%",maxWidth:"100%"}}),this.showParams(!0)}onEnter(){}onExit(){}onPause(){}onResume(){}onAudioStart(){}onAudioStop(){}onAudioEngineInit(){this.audioBus=this.audioEngine.createSimBus(),this.onAudioStart()}async onAudioEngineShutdown(){this.audioBus&&(await this.audioEngine.releaseSimBus(this.audioBus),this.audioBus=null),this.onAudioStop()}showParams(t){this.gui.show(t)}update(t){}dispose(){this.gui?.destroy(),this.gui=null}}const Ex="157",Hr={ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bx=300,Sv=1e3,Zu=1001,Mv=1002,pC=1006,mC=1008,gC=1009,_C=1023,vC=3e3,ld=3001,ud="",cd="srgb",Ku=2e3,Ev=2001;class Np{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const u=r.indexOf(n);u!==-1&&r.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let u=0,h=r.length;u<h;u++)r[u].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xC=Math.PI/180;function Op(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Nn[l&255]+Nn[l>>8&255]+Nn[l>>16&255]+Nn[l>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]).toLowerCase()}function Fi(l,t,n){return Math.max(t,Math.min(n,l))}const yC={DEG2RAD:xC};class On{constructor(t=0,n=0){On.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Fi(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),u=this.x-t.x,h=this.y-t.y;return this.x=u*a-h*r+t.x,this.y=u*r+h*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class no{constructor(t,n,a,r,u,h,f,m,p){no.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,u,h,f,m,p)}set(t,n,a,r,u,h,f,m,p){const _=this.elements;return _[0]=t,_[1]=r,_[2]=f,_[3]=n,_[4]=u,_[5]=m,_[6]=a,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,u=this.elements,h=a[0],f=a[3],m=a[6],p=a[1],_=a[4],g=a[7],v=a[2],y=a[5],E=a[8],T=r[0],M=r[3],x=r[6],D=r[1],L=r[4],z=r[7],P=r[2],I=r[5],w=r[8];return u[0]=h*T+f*D+m*P,u[3]=h*M+f*L+m*I,u[6]=h*x+f*z+m*w,u[1]=p*T+_*D+g*P,u[4]=p*M+_*L+g*I,u[7]=p*x+_*z+g*w,u[2]=v*T+y*D+E*P,u[5]=v*M+y*L+E*I,u[8]=v*x+y*z+E*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],_=t[8];return n*h*_-n*f*p-a*u*_+a*f*m+r*u*p-r*h*m}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],_=t[8],g=_*h-f*p,v=f*m-_*u,y=p*u-h*m,E=n*g+a*v+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(r*p-_*a)*T,t[2]=(f*a-r*h)*T,t[3]=v*T,t[4]=(_*n-r*m)*T,t[5]=(r*u-f*n)*T,t[6]=y*T,t[7]=(a*m-p*n)*T,t[8]=(h*n-a*u)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,u,h,f){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*h+p*f)+h+t,-r*p,r*m,-r*(-p*h+m*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(hd.makeScale(t,n)),this}rotate(t){return this.premultiply(hd.makeRotation(-t)),this}translate(t,n){return this.premultiply(hd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new no;function bv(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}const Tv={};function fd(l){l in Tv||(Tv[l]=!0,console.warn(l))}function dd(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}let Gr;class SC{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gr===void 0&&(Gr=bv("canvas")),Gr.width=t.width,Gr.height=t.height;const a=Gr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=bv("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),u=r.data;for(let h=0;h<u.length;h++)u[h]=dd(u[h]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(dd(n[a]/255)*255):n[a]=dd(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let MC=0;class EC{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MC++}),this.uuid=Op(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let u;if(Array.isArray(r)){u=[];for(let h=0,f=r.length;h<f;h++)r[h].isDataTexture?u.push(pd(r[h].image)):u.push(pd(r[h]))}else u=pd(r);a.url=u}return n||(t.images[this.uuid]=a),a}}function pd(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?SC.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bC=0;class Vs extends Np{constructor(t=Vs.DEFAULT_IMAGE,n=Vs.DEFAULT_MAPPING,a=Zu,r=Zu,u=pC,h=mC,f=_C,m=gC,p=Vs.DEFAULT_ANISOTROPY,_=ud){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=Op(),this.name="",this.source=new EC(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new On(0,0),this.repeat=new On(1,1),this.center=new On(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new no,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(fd("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===ld?cd:ud),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sv:t.x=t.x-Math.floor(t.x);break;case Zu:t.x=t.x<0?0:1;break;case Mv:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sv:t.y=t.y-Math.floor(t.y);break;case Zu:t.y=t.y<0?0:1;break;case Mv:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fd("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===cd?ld:vC}set encoding(t){fd("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ld?cd:ud}}Vs.DEFAULT_IMAGE=null;Vs.DEFAULT_MAPPING=bx;Vs.DEFAULT_ANISOTROPY=1;class ks{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,u,h,f){let m=a[r+0],p=a[r+1],_=a[r+2],g=a[r+3];const v=u[h+0],y=u[h+1],E=u[h+2],T=u[h+3];if(f===0){t[n+0]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=T;return}if(g!==T||m!==v||p!==y||_!==E){let M=1-f;const x=m*v+p*y+_*E+g*T,D=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const P=Math.sqrt(L),I=Math.atan2(P,x*D);M=Math.sin(M*I)/P,f=Math.sin(f*I)/P}const z=f*D;if(m=m*M+v*z,p=p*M+y*z,_=_*M+E*z,g=g*M+T*z,M===1-f){const P=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=P,p*=P,_*=P,g*=P}}t[n]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,r,u,h){const f=a[r],m=a[r+1],p=a[r+2],_=a[r+3],g=u[h],v=u[h+1],y=u[h+2],E=u[h+3];return t[n]=f*E+_*g+m*y-p*v,t[n+1]=m*E+_*v+p*g-f*y,t[n+2]=p*E+_*y+f*v-m*g,t[n+3]=_*E-f*g-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){const a=t._x,r=t._y,u=t._z,h=t._order,f=Math.cos,m=Math.sin,p=f(a/2),_=f(r/2),g=f(u/2),v=m(a/2),y=m(r/2),E=m(u/2);switch(h){case"XYZ":this._x=v*_*g+p*y*E,this._y=p*y*g-v*_*E,this._z=p*_*E+v*y*g,this._w=p*_*g-v*y*E;break;case"YXZ":this._x=v*_*g+p*y*E,this._y=p*y*g-v*_*E,this._z=p*_*E-v*y*g,this._w=p*_*g+v*y*E;break;case"ZXY":this._x=v*_*g-p*y*E,this._y=p*y*g+v*_*E,this._z=p*_*E+v*y*g,this._w=p*_*g-v*y*E;break;case"ZYX":this._x=v*_*g-p*y*E,this._y=p*y*g+v*_*E,this._z=p*_*E-v*y*g,this._w=p*_*g+v*y*E;break;case"YZX":this._x=v*_*g+p*y*E,this._y=p*y*g+v*_*E,this._z=p*_*E-v*y*g,this._w=p*_*g-v*y*E;break;case"XZY":this._x=v*_*g-p*y*E,this._y=p*y*g-v*_*E,this._z=p*_*E+v*y*g,this._w=p*_*g+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],u=n[8],h=n[1],f=n[5],m=n[9],p=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(h-r)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-m)/y,this._x=.25*y,this._y=(r+h)/y,this._z=(u+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(u-p)/y,this._x=(r+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(h-r)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fi(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,u=t._z,h=t._w,f=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+h*f+r*p-u*m,this._y=r*_+h*m+u*f-a*p,this._z=u*_+h*p+a*m-r*f,this._w=h*_-a*f-r*m-u*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,r=this._y,u=this._z,h=this._w;let f=h*t._w+a*t._x+r*t._y+u*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=h,this._x=a,this._y=r,this._z=u,this;const m=1-f*f;if(m<=Number.EPSILON){const y=1-n;return this._w=y*h+n*this._w,this._x=y*a+n*this._x,this._y=y*r+n*this._y,this._z=y*u+n*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),_=Math.atan2(p,f),g=Math.sin((1-n)*_)/p,v=Math.sin(n*_)/p;return this._w=h*g+this._w*v,this._x=a*g+this._x*v,this._y=r*g+this._y*v,this._z=u*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=Math.random(),n=Math.sqrt(1-t),a=Math.sqrt(t),r=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(n*Math.cos(r),a*Math.sin(u),a*Math.cos(u),n*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(t=0,n=0,a=0){oe.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Av.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Av.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*r,this.y=u[1]*n+u[4]*a+u[7]*r,this.z=u[2]*n+u[5]*a+u[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,u=t.elements,h=1/(u[3]*n+u[7]*a+u[11]*r+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*r+u[12])*h,this.y=(u[1]*n+u[5]*a+u[9]*r+u[13])*h,this.z=(u[2]*n+u[6]*a+u[10]*r+u[14])*h,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,u=t.x,h=t.y,f=t.z,m=t.w,p=m*n+h*r-f*a,_=m*a+f*n-u*r,g=m*r+u*a-h*n,v=-u*n-h*a-f*r;return this.x=p*m+v*-u+_*-f-g*-h,this.y=_*m+v*-h+g*-u-p*-f,this.z=g*m+v*-f+p*-h-_*-u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r,this.y=u[1]*n+u[5]*a+u[9]*r,this.z=u[2]*n+u[6]*a+u[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,u=t.z,h=n.x,f=n.y,m=n.z;return this.x=r*m-u*f,this.y=u*h-a*m,this.z=a*f-r*h,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return md.copy(this).projectOnVector(t),this.sub(md)}reflect(t){return this.sub(md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Fi(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,a=Math.sqrt(1-t**2);return this.x=a*Math.cos(n),this.y=a*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const md=new oe,Av=new ks,ga=new oe,gd=new oe,Qu=new oe,ss=new oe,_d=new oe,$u=new oe,vd=new oe;class TC{constructor(t=new oe,n=new oe(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ga.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,n),ga.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){gd.copy(t).add(n).multiplyScalar(.5),Qu.copy(n).sub(t).normalize(),ss.copy(this.origin).sub(gd);const u=t.distanceTo(n)*.5,h=-this.direction.dot(Qu),f=ss.dot(this.direction),m=-ss.dot(Qu),p=ss.lengthSq(),_=Math.abs(1-h*h);let g,v,y,E;if(_>0)if(g=h*m-f,v=h*f-m,E=u*_,g>=0)if(v>=-E)if(v<=E){const T=1/_;g*=T,v*=T,y=g*(g+h*v+2*f)+v*(h*g+v+2*m)+p}else v=u,g=Math.max(0,-(h*v+f)),y=-g*g+v*(v+2*m)+p;else v=-u,g=Math.max(0,-(h*v+f)),y=-g*g+v*(v+2*m)+p;else v<=-E?(g=Math.max(0,-(-h*u+f)),v=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+v*(v+2*m)+p):v<=E?(g=0,v=Math.min(Math.max(-u,-m),u),y=v*(v+2*m)+p):(g=Math.max(0,-(h*u+f)),v=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+v*(v+2*m)+p);else v=h>0?-u:u,g=Math.max(0,-(h*v+f)),y=-g*g+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(gd).addScaledVector(Qu,v),y}intersectSphere(t,n){ga.subVectors(t.center,this.origin);const a=ga.dot(this.direction),r=ga.dot(ga)-a*a,u=t.radius*t.radius;if(r>u)return null;const h=Math.sqrt(u-r),f=a-h,m=a+h;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,u,h,f,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),_>=0?(u=(t.min.y-v.y)*_,h=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,h=(t.min.y-v.y)*_),a>h||u>r||((u>a||isNaN(a))&&(a=u),(h<r||isNaN(r))&&(r=h),g>=0?(f=(t.min.z-v.z)*g,m=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,m=(t.min.z-v.z)*g),a>m||f>r)||((f>a||a!==a)&&(a=f),(m<r||r!==r)&&(r=m),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,n,a,r,u){_d.subVectors(n,t),$u.subVectors(a,t),vd.crossVectors(_d,$u);let h=this.direction.dot(vd),f;if(h>0){if(r)return null;f=1}else if(h<0)f=-1,h=-h;else return null;ss.subVectors(this.origin,t);const m=f*this.direction.dot($u.crossVectors(ss,$u));if(m<0)return null;const p=f*this.direction.dot(_d.cross(ss));if(p<0||m+p>h)return null;const _=-f*ss.dot(vd);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ea{constructor(t,n,a,r,u,h,f,m,p,_,g,v,y,E,T,M){Ea.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,u,h,f,m,p,_,g,v,y,E,T,M)}set(t,n,a,r,u,h,f,m,p,_,g,v,y,E,T,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=r,x[1]=u,x[5]=h,x[9]=f,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=E,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ea().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,r=1/kr.setFromMatrixColumn(t,0).length(),u=1/kr.setFromMatrixColumn(t,1).length(),h=1/kr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*h,n[9]=a[9]*h,n[10]=a[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,u=t.z,h=Math.cos(a),f=Math.sin(a),m=Math.cos(r),p=Math.sin(r),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=h*_,y=h*g,E=f*_,T=f*g;n[0]=m*_,n[4]=-m*g,n[8]=p,n[1]=y+E*p,n[5]=v-T*p,n[9]=-f*m,n[2]=T-v*p,n[6]=E+y*p,n[10]=h*m}else if(t.order==="YXZ"){const v=m*_,y=m*g,E=p*_,T=p*g;n[0]=v+T*f,n[4]=E*f-y,n[8]=h*p,n[1]=h*g,n[5]=h*_,n[9]=-f,n[2]=y*f-E,n[6]=T+v*f,n[10]=h*m}else if(t.order==="ZXY"){const v=m*_,y=m*g,E=p*_,T=p*g;n[0]=v-T*f,n[4]=-h*g,n[8]=E+y*f,n[1]=y+E*f,n[5]=h*_,n[9]=T-v*f,n[2]=-h*p,n[6]=f,n[10]=h*m}else if(t.order==="ZYX"){const v=h*_,y=h*g,E=f*_,T=f*g;n[0]=m*_,n[4]=E*p-y,n[8]=v*p+T,n[1]=m*g,n[5]=T*p+v,n[9]=y*p-E,n[2]=-p,n[6]=f*m,n[10]=h*m}else if(t.order==="YZX"){const v=h*m,y=h*p,E=f*m,T=f*p;n[0]=m*_,n[4]=T-v*g,n[8]=E*g+y,n[1]=g,n[5]=h*_,n[9]=-f*_,n[2]=-p*_,n[6]=y*g+E,n[10]=v-T*g}else if(t.order==="XZY"){const v=h*m,y=h*p,E=f*m,T=f*p;n[0]=m*_,n[4]=-g,n[8]=p*_,n[1]=v*g+T,n[5]=h*_,n[9]=y*g-E,n[2]=E*g-y,n[6]=f*_,n[10]=T*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AC,t,CC)}lookAt(t,n,a){const r=this.elements;return ei.subVectors(t,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),rs.crossVectors(a,ei),rs.lengthSq()===0&&(Math.abs(a.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),rs.crossVectors(a,ei)),rs.normalize(),Ju.crossVectors(ei,rs),r[0]=rs.x,r[4]=Ju.x,r[8]=ei.x,r[1]=rs.y,r[5]=Ju.y,r[9]=ei.y,r[2]=rs.z,r[6]=Ju.z,r[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,u=this.elements,h=a[0],f=a[4],m=a[8],p=a[12],_=a[1],g=a[5],v=a[9],y=a[13],E=a[2],T=a[6],M=a[10],x=a[14],D=a[3],L=a[7],z=a[11],P=a[15],I=r[0],w=r[4],Z=r[8],R=r[12],U=r[1],k=r[5],tt=r[9],et=r[13],dt=r[2],ut=r[6],F=r[10],H=r[14],J=r[3],bt=r[7],St=r[11],O=r[15];return u[0]=h*I+f*U+m*dt+p*J,u[4]=h*w+f*k+m*ut+p*bt,u[8]=h*Z+f*tt+m*F+p*St,u[12]=h*R+f*et+m*H+p*O,u[1]=_*I+g*U+v*dt+y*J,u[5]=_*w+g*k+v*ut+y*bt,u[9]=_*Z+g*tt+v*F+y*St,u[13]=_*R+g*et+v*H+y*O,u[2]=E*I+T*U+M*dt+x*J,u[6]=E*w+T*k+M*ut+x*bt,u[10]=E*Z+T*tt+M*F+x*St,u[14]=E*R+T*et+M*H+x*O,u[3]=D*I+L*U+z*dt+P*J,u[7]=D*w+L*k+z*ut+P*bt,u[11]=D*Z+L*tt+z*F+P*St,u[15]=D*R+L*et+z*H+P*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],u=t[12],h=t[1],f=t[5],m=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],E=t[3],T=t[7],M=t[11],x=t[15];return E*(+u*m*g-r*p*g-u*f*v+a*p*v+r*f*y-a*m*y)+T*(+n*m*y-n*p*v+u*h*v-r*h*y+r*p*_-u*m*_)+M*(+n*p*g-n*f*y-u*h*g+a*h*y+u*f*_-a*p*_)+x*(-r*f*_-n*m*g+n*f*v+r*h*g-a*h*v+a*m*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],u=t[3],h=t[4],f=t[5],m=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],E=t[12],T=t[13],M=t[14],x=t[15],D=g*M*p-T*v*p+T*m*y-f*M*y-g*m*x+f*v*x,L=E*v*p-_*M*p-E*m*y+h*M*y+_*m*x-h*v*x,z=_*T*p-E*g*p+E*f*y-h*T*y-_*f*x+h*g*x,P=E*g*m-_*T*m-E*f*v+h*T*v+_*f*M-h*g*M,I=n*D+a*L+r*z+u*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/I;return t[0]=D*w,t[1]=(T*v*u-g*M*u-T*r*y+a*M*y+g*r*x-a*v*x)*w,t[2]=(f*M*u-T*m*u+T*r*p-a*M*p-f*r*x+a*m*x)*w,t[3]=(g*m*u-f*v*u-g*r*p+a*v*p+f*r*y-a*m*y)*w,t[4]=L*w,t[5]=(_*M*u-E*v*u+E*r*y-n*M*y-_*r*x+n*v*x)*w,t[6]=(E*m*u-h*M*u-E*r*p+n*M*p+h*r*x-n*m*x)*w,t[7]=(h*v*u-_*m*u+_*r*p-n*v*p-h*r*y+n*m*y)*w,t[8]=z*w,t[9]=(E*g*u-_*T*u-E*a*y+n*T*y+_*a*x-n*g*x)*w,t[10]=(h*T*u-E*f*u+E*a*p-n*T*p-h*a*x+n*f*x)*w,t[11]=(_*f*u-h*g*u-_*a*p+n*g*p+h*a*y-n*f*y)*w,t[12]=P*w,t[13]=(_*T*r-E*g*r+E*a*v-n*T*v-_*a*M+n*g*M)*w,t[14]=(E*f*r-h*T*r-E*a*m+n*T*m+h*a*M-n*f*M)*w,t[15]=(h*g*r-_*f*r+_*a*m-n*g*m-h*a*v+n*f*v)*w,this}scale(t){const n=this.elements,a=t.x,r=t.y,u=t.z;return n[0]*=a,n[4]*=r,n[8]*=u,n[1]*=a,n[5]*=r,n[9]*=u,n[2]*=a,n[6]*=r,n[10]*=u,n[3]*=a,n[7]*=r,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),u=1-a,h=t.x,f=t.y,m=t.z,p=u*h,_=u*f;return this.set(p*h+a,p*f-r*m,p*m+r*f,0,p*f+r*m,_*f+a,_*m-r*h,0,p*m-r*f,_*m+r*h,u*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,u,h){return this.set(1,a,u,0,t,1,h,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,u=n._x,h=n._y,f=n._z,m=n._w,p=u+u,_=h+h,g=f+f,v=u*p,y=u*_,E=u*g,T=h*_,M=h*g,x=f*g,D=m*p,L=m*_,z=m*g,P=a.x,I=a.y,w=a.z;return r[0]=(1-(T+x))*P,r[1]=(y+z)*P,r[2]=(E-L)*P,r[3]=0,r[4]=(y-z)*I,r[5]=(1-(v+x))*I,r[6]=(M+D)*I,r[7]=0,r[8]=(E+L)*w,r[9]=(M-D)*w,r[10]=(1-(v+T))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;let u=kr.set(r[0],r[1],r[2]).length();const h=kr.set(r[4],r[5],r[6]).length(),f=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(u=-u),t.x=r[12],t.y=r[13],t.z=r[14],Ti.copy(this);const p=1/u,_=1/h,g=1/f;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=_,Ti.elements[5]*=_,Ti.elements[6]*=_,Ti.elements[8]*=g,Ti.elements[9]*=g,Ti.elements[10]*=g,n.setFromRotationMatrix(Ti),a.x=u,a.y=h,a.z=f,this}makePerspective(t,n,a,r,u,h,f=Ku){const m=this.elements,p=2*u/(n-t),_=2*u/(a-r),g=(n+t)/(n-t),v=(a+r)/(a-r);let y,E;if(f===Ku)y=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(f===Ev)y=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=p,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,a,r,u,h,f=Ku){const m=this.elements,p=1/(n-t),_=1/(a-r),g=1/(h-u),v=(n+t)*p,y=(a+r)*_;let E,T;if(f===Ku)E=(h+u)*g,T=-2*g;else if(f===Ev)E=u*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const kr=new oe,Ti=new Ea,AC=new oe(0,0,0),CC=new oe(1,1,1),rs=new oe,Ju=new oe,ei=new oe,Cv=new Ea,Rv=new ks;class vc{constructor(t=0,n=0,a=0,r=vc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,u=r[0],h=r[4],f=r[8],m=r[1],p=r[5],_=r[9],g=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(Fi(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Fi(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Fi(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Fi(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Fi(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Fi(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Cv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Rv.setFromEuler(this),this.setFromQuaternion(Rv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vc.DEFAULT_ORDER="XYZ";class RC{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wC=0;const wv=new oe,Xr=new ks,_a=new Ea,tc=new oe,sl=new oe,DC=new oe,UC=new ks,Dv=new oe(1,0,0),Uv=new oe(0,1,0),Lv=new oe(0,0,1),LC={type:"added"},NC={type:"removed"};class cs extends Np{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wC++}),this.uuid=Op(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cs.DEFAULT_UP.clone();const t=new oe,n=new vc,a=new ks,r=new oe(1,1,1);function u(){a.setFromEuler(n,!1)}function h(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ea},normalMatrix:{value:new no}}),this.matrix=new Ea,this.matrixWorld=new Ea,this.matrixAutoUpdate=cs.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=cs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new RC,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Xr.setFromAxisAngle(t,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(t,n){return Xr.setFromAxisAngle(t,n),this.quaternion.premultiply(Xr),this}rotateX(t){return this.rotateOnAxis(Dv,t)}rotateY(t){return this.rotateOnAxis(Uv,t)}rotateZ(t){return this.rotateOnAxis(Lv,t)}translateOnAxis(t,n){return wv.copy(t).applyQuaternion(this.quaternion),this.position.add(wv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Dv,t)}translateY(t){return this.translateOnAxis(Uv,t)}translateZ(t){return this.translateOnAxis(Lv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?tc.copy(t):tc.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(sl,tc,this.up):_a.lookAt(tc,sl,this.up),this.quaternion.setFromRotationMatrix(_a),r&&(_a.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(_a),this.quaternion.premultiply(Xr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(LC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(NC)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const h=this.children[a].getObjectByProperty(t,n);if(h!==void 0)return h}}getObjectsByProperty(t,n){let a=[];this[t]===n&&a.push(this);for(let r=0,u=this.children.length;r<u;r++){const h=this.children[r].getObjectsByProperty(t,n);h.length>0&&(a=a.concat(h))}return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,DC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,UC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++){const u=n[a];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let u=0,h=r.length;u<h;u++){const f=r[u];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function u(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(u(t.materials,this.material[m]));r.material=f}else r.material=u(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];r.animations.push(u(t.animations,m))}}if(n){const f=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),v=h(t.skeletons),y=h(t.animations),E=h(t.nodes);f.length>0&&(a.geometries=f),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=r,a;function h(f){const m=[];for(const p in f){const _=f[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}cs.DEFAULT_UP=new oe(0,1,0);cs.DEFAULT_MATRIX_AUTO_UPDATE=!0;cs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xd=new oe,OC=new oe,zC=new no;class PC{constructor(t=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=xd.subVectors(a,n).cross(OC.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(xd),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/r;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||zC.getNormalMatrix(t),r=this.coplanarPoint(xd).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}class FC extends cs{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class IC{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Nv();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Nv(){return(typeof performance>"u"?Date:performance).now()}class Ov{constructor(t=1,n=0,a=0){return this.radius=t,this.phi=n,this.theta=a,this}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(Fi(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ex}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ex);const zv={type:"change"},yd={type:"start"},Pv={type:"end"},ec=new TC,Fv=new PC,BC=Math.cos(70*yC.DEG2RAD);class HC extends Np{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new oe,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",b),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(zv),a.update(),u=r.NONE},this.update=(function(){const V=new oe,at=new ks().setFromUnitVectors(t.up,new oe(0,1,0)),yt=at.clone().invert(),At=new oe,wt=new ks,Dt=new oe,ne=2*Math.PI;return function(Ot=null){const Tt=a.object.position;V.copy(Tt).sub(a.target),V.applyQuaternion(at),f.setFromVector3(V),a.autoRotate&&u===r.NONE&&k(R(Ot)),a.enableDamping?(f.theta+=m.theta*a.dampingFactor,f.phi+=m.phi*a.dampingFactor):(f.theta+=m.theta,f.phi+=m.phi);let Lt=a.minAzimuthAngle,Et=a.maxAzimuthAngle;isFinite(Lt)&&isFinite(Et)&&(Lt<-Math.PI?Lt+=ne:Lt>Math.PI&&(Lt-=ne),Et<-Math.PI?Et+=ne:Et>Math.PI&&(Et-=ne),Lt<=Et?f.theta=Math.max(Lt,Math.min(Et,f.theta)):f.theta=f.theta>(Lt+Et)/2?Math.max(Lt,f.theta):Math.min(Et,f.theta)),f.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,f.phi)),f.makeSafe(),a.enableDamping===!0?a.target.addScaledVector(_,a.dampingFactor):a.target.add(_),a.zoomToCursor&&I||a.object.isOrthographicCamera?f.radius=bt(f.radius):f.radius=bt(f.radius*p),V.setFromSpherical(f),V.applyQuaternion(yt),Tt.copy(a.target).add(V),a.object.lookAt(a.target),a.enableDamping===!0?(m.theta*=1-a.dampingFactor,m.phi*=1-a.dampingFactor,_.multiplyScalar(1-a.dampingFactor)):(m.set(0,0,0),_.set(0,0,0));let _t=!1;if(a.zoomToCursor&&I){let Ct=null;if(a.object.isPerspectiveCamera){const Jt=V.length();Ct=bt(Jt*p);const be=Jt-Ct;a.object.position.addScaledVector(z,be),a.object.updateMatrixWorld()}else if(a.object.isOrthographicCamera){const Jt=new oe(P.x,P.y,0);Jt.unproject(a.object),a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/p)),a.object.updateProjectionMatrix(),_t=!0;const be=new oe(P.x,P.y,0);be.unproject(a.object),a.object.position.sub(be).add(Jt),a.object.updateMatrixWorld(),Ct=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;Ct!==null&&(this.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(Ct).add(a.object.position):(ec.origin.copy(a.object.position),ec.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(ec.direction))<BC?t.lookAt(a.target):(Fv.setFromNormalAndCoplanarPoint(a.object.up,a.target),ec.intersectPlane(Fv,a.target))))}else a.object.isOrthographicCamera&&(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/p)),a.object.updateProjectionMatrix(),_t=!0);return p=1,I=!1,_t||At.distanceToSquared(a.object.position)>h||8*(1-wt.dot(a.object.quaternion))>h||Dt.distanceToSquared(a.target)>0?(a.dispatchEvent(zv),At.copy(a.object.position),wt.copy(a.object.quaternion),Dt.copy(a.target),_t=!1,!0):!1}})(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",Mt),a.domElement.removeEventListener("pointerdown",G),a.domElement.removeEventListener("pointercancel",fe),a.domElement.removeEventListener("wheel",N),a.domElement.removeEventListener("pointermove",Ve),a.domElement.removeEventListener("pointerup",fe),a._domElementKeyEvents!==null&&(a._domElementKeyEvents.removeEventListener("keydown",b),a._domElementKeyEvents=null)};const a=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=r.NONE;const h=1e-6,f=new Ov,m=new Ov;let p=1;const _=new oe,g=new On,v=new On,y=new On,E=new On,T=new On,M=new On,x=new On,D=new On,L=new On,z=new oe,P=new On;let I=!1;const w=[],Z={};function R(V){return V!==null?2*Math.PI/60*a.autoRotateSpeed*V:2*Math.PI/60/60*a.autoRotateSpeed}function U(){return Math.pow(.95,a.zoomSpeed)}function k(V){m.theta-=V}function tt(V){m.phi-=V}const et=(function(){const V=new oe;return function(yt,At){V.setFromMatrixColumn(At,0),V.multiplyScalar(-yt),_.add(V)}})(),dt=(function(){const V=new oe;return function(yt,At){a.screenSpacePanning===!0?V.setFromMatrixColumn(At,1):(V.setFromMatrixColumn(At,0),V.crossVectors(a.object.up,V)),V.multiplyScalar(yt),_.add(V)}})(),ut=(function(){const V=new oe;return function(yt,At){const wt=a.domElement;if(a.object.isPerspectiveCamera){const Dt=a.object.position;V.copy(Dt).sub(a.target);let ne=V.length();ne*=Math.tan(a.object.fov/2*Math.PI/180),et(2*yt*ne/wt.clientHeight,a.object.matrix),dt(2*At*ne/wt.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(et(yt*(a.object.right-a.object.left)/a.object.zoom/wt.clientWidth,a.object.matrix),dt(At*(a.object.top-a.object.bottom)/a.object.zoom/wt.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function F(V){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?p/=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function H(V){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?p*=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function J(V){if(!a.zoomToCursor)return;I=!0;const at=a.domElement.getBoundingClientRect(),yt=V.clientX-at.left,At=V.clientY-at.top,wt=at.width,Dt=at.height;P.x=yt/wt*2-1,P.y=-(At/Dt)*2+1,z.set(P.x,P.y,1).unproject(a.object).sub(a.object.position).normalize()}function bt(V){return Math.max(a.minDistance,Math.min(a.maxDistance,V))}function St(V){g.set(V.clientX,V.clientY)}function O(V){J(V),x.set(V.clientX,V.clientY)}function nt(V){E.set(V.clientX,V.clientY)}function vt(V){v.set(V.clientX,V.clientY),y.subVectors(v,g).multiplyScalar(a.rotateSpeed);const at=a.domElement;k(2*Math.PI*y.x/at.clientHeight),tt(2*Math.PI*y.y/at.clientHeight),g.copy(v),a.update()}function Rt(V){D.set(V.clientX,V.clientY),L.subVectors(D,x),L.y>0?F(U()):L.y<0&&H(U()),x.copy(D),a.update()}function It(V){T.set(V.clientX,V.clientY),M.subVectors(T,E).multiplyScalar(a.panSpeed),ut(M.x,M.y),E.copy(T),a.update()}function it(V){J(V),V.deltaY<0?H(U()):V.deltaY>0&&F(U()),a.update()}function ft(V){let at=!1;switch(V.code){case a.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?tt(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):ut(0,a.keyPanSpeed),at=!0;break;case a.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?tt(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):ut(0,-a.keyPanSpeed),at=!0;break;case a.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?k(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):ut(a.keyPanSpeed,0),at=!0;break;case a.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?k(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):ut(-a.keyPanSpeed,0),at=!0;break}at&&(V.preventDefault(),a.update())}function Nt(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const V=.5*(w[0].pageX+w[1].pageX),at=.5*(w[0].pageY+w[1].pageY);g.set(V,at)}}function Vt(){if(w.length===1)E.set(w[0].pageX,w[0].pageY);else{const V=.5*(w[0].pageX+w[1].pageX),at=.5*(w[0].pageY+w[1].pageY);E.set(V,at)}}function Bt(){const V=w[0].pageX-w[1].pageX,at=w[0].pageY-w[1].pageY,yt=Math.sqrt(V*V+at*at);x.set(0,yt)}function pe(){a.enableZoom&&Bt(),a.enablePan&&Vt()}function Ze(){a.enableZoom&&Bt(),a.enableRotate&&Nt()}function me(V){if(w.length==1)v.set(V.pageX,V.pageY);else{const yt=Gt(V),At=.5*(V.pageX+yt.x),wt=.5*(V.pageY+yt.y);v.set(At,wt)}y.subVectors(v,g).multiplyScalar(a.rotateSpeed);const at=a.domElement;k(2*Math.PI*y.x/at.clientHeight),tt(2*Math.PI*y.y/at.clientHeight),g.copy(v)}function he(V){if(w.length===1)T.set(V.pageX,V.pageY);else{const at=Gt(V),yt=.5*(V.pageX+at.x),At=.5*(V.pageY+at.y);T.set(yt,At)}M.subVectors(T,E).multiplyScalar(a.panSpeed),ut(M.x,M.y),E.copy(T)}function Ee(V){const at=Gt(V),yt=V.pageX-at.x,At=V.pageY-at.y,wt=Math.sqrt(yt*yt+At*At);D.set(0,wt),L.set(0,Math.pow(D.y/x.y,a.zoomSpeed)),F(L.y),x.copy(D)}function ie(V){a.enableZoom&&Ee(V),a.enablePan&&he(V)}function Ke(V){a.enableZoom&&Ee(V),a.enableRotate&&me(V)}function G(V){a.enabled!==!1&&(w.length===0&&(a.domElement.setPointerCapture(V.pointerId),a.domElement.addEventListener("pointermove",Ve),a.domElement.addEventListener("pointerup",fe)),ht(V),V.pointerType==="touch"?q(V):Ce(V))}function Ve(V){a.enabled!==!1&&(V.pointerType==="touch"?mt(V):Wt(V))}function fe(V){qt(V),w.length===0&&(a.domElement.releasePointerCapture(V.pointerId),a.domElement.removeEventListener("pointermove",Ve),a.domElement.removeEventListener("pointerup",fe)),a.dispatchEvent(Pv),u=r.NONE}function Ce(V){let at;switch(V.button){case 0:at=a.mouseButtons.LEFT;break;case 1:at=a.mouseButtons.MIDDLE;break;case 2:at=a.mouseButtons.RIGHT;break;default:at=-1}switch(at){case Hr.DOLLY:if(a.enableZoom===!1)return;O(V),u=r.DOLLY;break;case Hr.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(a.enablePan===!1)return;nt(V),u=r.PAN}else{if(a.enableRotate===!1)return;St(V),u=r.ROTATE}break;case Hr.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(a.enableRotate===!1)return;St(V),u=r.ROTATE}else{if(a.enablePan===!1)return;nt(V),u=r.PAN}break;default:u=r.NONE}u!==r.NONE&&a.dispatchEvent(yd)}function Wt(V){switch(u){case r.ROTATE:if(a.enableRotate===!1)return;vt(V);break;case r.DOLLY:if(a.enableZoom===!1)return;Rt(V);break;case r.PAN:if(a.enablePan===!1)return;It(V);break}}function N(V){a.enabled===!1||a.enableZoom===!1||u!==r.NONE||(V.preventDefault(),a.dispatchEvent(yd),it(V),a.dispatchEvent(Pv))}function b(V){a.enabled===!1||a.enablePan===!1||ft(V)}function q(V){switch(Ut(V),w.length){case 1:switch(a.touches.ONE){case Vr.ROTATE:if(a.enableRotate===!1)return;Nt(),u=r.TOUCH_ROTATE;break;case Vr.PAN:if(a.enablePan===!1)return;Vt(),u=r.TOUCH_PAN;break;default:u=r.NONE}break;case 2:switch(a.touches.TWO){case Vr.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;pe(),u=r.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Ze(),u=r.TOUCH_DOLLY_ROTATE;break;default:u=r.NONE}break;default:u=r.NONE}u!==r.NONE&&a.dispatchEvent(yd)}function mt(V){switch(Ut(V),u){case r.TOUCH_ROTATE:if(a.enableRotate===!1)return;me(V),a.update();break;case r.TOUCH_PAN:if(a.enablePan===!1)return;he(V),a.update();break;case r.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;ie(V),a.update();break;case r.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Ke(V),a.update();break;default:u=r.NONE}}function Mt(V){a.enabled!==!1&&V.preventDefault()}function ht(V){w.push(V)}function qt(V){delete Z[V.pointerId];for(let at=0;at<w.length;at++)if(w[at].pointerId==V.pointerId){w.splice(at,1);return}}function Ut(V){let at=Z[V.pointerId];at===void 0&&(at=new On,Z[V.pointerId]=at),at.set(V.pageX,V.pageY)}function Gt(V){const at=V.pointerId===w[0].pointerId?w[1]:w[0];return Z[at.pointerId]}a.domElement.addEventListener("contextmenu",Mt),a.domElement.addEventListener("pointerdown",G),a.domElement.addEventListener("pointercancel",fe),a.domElement.addEventListener("wheel",N,{passive:!1}),this.update()}}class VC{constructor(t){this.enabled=!1,this.debugData=new Map,this.debugDiv=document.createElement("div"),Object.assign(this.debugDiv.style,{...ce.panelBase,position:"absolute",bottom:ce.sizing.edgeMedium,left:ce.sizing.edgeMedium,whiteSpace:"pre-line",display:"none"}),t.appendChild(this.debugDiv),document.addEventListener("keydown",n=>{n.key==="'"&&(this.enabled=!this.enabled,this.debugDiv&&(this.debugDiv.style.display=this.enabled?"block":"none"))})}addDebugCategory(t){this.debugData.has(t)||this.debugData.set(t,[])}addTextCategory(t,n,a){this.enabled&&(this.debugData.has(t)||this.addDebugCategory(t),this.debugData.get(t).push(`${n}: ${a}`))}addText(t,n){this.addTextCategory("Default",t,n)}update(){let t=`<strong>Debug Info</strong>
`;this.enabled&&(this.debugData.forEach((n,a)=>{t+=`
<strong>${a}</strong>
${n.join(`
`)}
`}),this.debugData.clear()),this.debugDiv.innerHTML=t}dispose(){this.debugDiv?.remove(),this.debugDiv=null,document.removeEventListener("keydown",this._onKeyDown),this._onKeyDown=null,this.debugData.clear()}}class GC{constructor(t,{onToggleAudio:n,onTogglePlay:a,onRestart:r,onShowControls:u}={}){this.onToggleAudio=n,this.onTogglePlay=a,this.onRestart=r,this.onShowControls=u,this.mainDiv=document.createElement("div"),Object.assign(this.mainDiv.style,{...ce.panelBase,position:"absolute",bottom:ce.sizing.edgeLarge,right:ce.sizing.edgeLarge,display:"flex",flexDirection:"column",gap:ce.sizing.spacingMedium,border:"1px solid rgba(255,255,255,0.2)",borderRadius:"4px",pointerEvents:"auto"}),t.appendChild(this.mainDiv);const h=document.createElement("div");Object.assign(h.style,{position:"relative",display:"flex",gap:ce.sizing.spacingMedium}),this.mainDiv.appendChild(h),this.audioBtn=this.#t("Audio: OFF"),this.playBtn=this.#t("Pause"),this.restartBtn=this.#t("Restart"),this.controlsBtn=this.#t("Controls"),this.audioBtn.onclick=()=>this.onToggleAudio?.(),this.playBtn.onclick=()=>this.onTogglePlay?.(),this.restartBtn.onclick=()=>this.#e(),this.controlsBtn.onclick=()=>this.#i(),h.append(this.controlsBtn,this.audioBtn,this.playBtn,this.restartBtn),this.guiContainer=document.createElement("div"),Object.assign(this.guiContainer.style,{display:"none"}),this.mainDiv.appendChild(this.guiContainer),this.gui=new Mx({container:this.guiContainer,style:{...ce.buttonBase,minWidth:"100%",maxWidth:"100%"}})}setAudioEnabledLabel(t){this.audioBtn.textContent=t?"Audio: ON":"Audio: OFF"}setRunningLabel(t){this.playBtn.textContent=t?"Pause":"Resume"}#t(t=""){const n=document.createElement("button");return n.textContent=t,Object.assign(n.style,ce.buttonBase),n.style.outline="none",n}#e(){window.confirm("Restart simulation?")&&this.onRestart?.()}#i(){const t=this.guiContainer.style.display==="none";this.guiContainer.style.display=t?"block":"none",this.onShowControls?.(t)}}class kC{#t=null;#e=null;#i=.02;constructor({enabled:t=!0,onInit:n=null}={}){this.#t=t,this.#e=n,this.audioContext=null,this.masterGain=null,this.simBus=null,this.#a()}#a(){const t=async()=>{this.audioContext||(this.#s(),this.#e&&(this.#e(this),this.#e=null)),this.audioContext.state==="suspended"&&await this.audioContext.resume(),document.removeEventListener("click",t),document.removeEventListener("keydown",t)};document.addEventListener("click",t),document.addEventListener("keydown",t)}#s(){this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.audioContext.createGain(),this.masterGain.gain.value=this.#t?1:0,this.masterGain.connect(this.audioContext.destination))}#n(t,n){const a=this.audioContext.currentTime;t.cancelScheduledValues(a),t.setTargetAtTime(n,a,this.#i)}isInitialised(){return this.audioContext!==null}isEnabled(){return this.#t}setAudioEnabled(t){if(this.#t=t,this.masterGain){let n=this.#t?1:0;this.#n(this.masterGain.gain,n)}}pauseSimulationAudio(){this.isInitialised()&&this.simBus&&this.#n(this.simBus.gain,0)}resumeSimulationAudio(){this.isInitialised()&&this.simBus&&this.#n(this.simBus.gain,1)}createSimBus(){if(!this.audioContext||!this.masterGain)return null;const t=this.audioContext.createGain();return t.gain.value=0,this.#n(t.gain,1),t.connect(this.masterGain),this.simBus=t,t}releaseSimBus(t){return!this.audioContext||!t?Promise.resolve():(this.#n(t.gain,0),new Promise(n=>{setTimeout(()=>{try{t.disconnect()}catch{}n()},(this.#i+.1)*1e3)}))}createOscillator(t="sine",n=440,a=null){if(!this.audioContext)return null;const r=this.audioContext.createOscillator(),u=this.audioContext.createGain();return r.type=t,r.frequency.value=n,u.gain.value=.5,r.connect(u),a?u.connect(a):u.connect(this.masterGain),r.start(),{osc:r,gainNode:u}}dispose(){this.audioContext&&(this.audioContext.close(),this.audioContext=null,this.masterGain=null)}}class XC{constructor(t){this.autoDispose=!0,this.messageDiv=document.createElement("div"),Object.assign(this.messageDiv.style,{...ce.panelBase,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:"0",transition:"opacity 0.5s ease",pointerEvents:"none",textAlign:"center",zIndex:"1000",display:"none"}),t.appendChild(this.messageDiv),this.timeoutId=null}show(t,n=3){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),this.messageDiv.textContent=t,this.messageDiv.style.display="block",requestAnimationFrame(()=>{this.messageDiv.style.opacity="1"}),n>=0&&(this.timeoutId=setTimeout(()=>{this.hide()},n*1e3))}hide(){this.messageDiv.style.opacity="0",setTimeout(()=>{this.messageDiv.style.display="none",this.timeoutId=null,this.autoDispose&&this.dispose()},500)}dispose(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),this.messageDiv.remove(),this.messageDiv=null,this.parentDiv=null}}function WC(){if(document.getElementById("vsounds-style"))return;const l=document.createElement("style");l.id="vsounds-style",l.textContent=`
    /*
      VSounds Style
      You can reference these classes in the website where simulations are embedded.
    */
   :root {
      --vsounds-title-color: ${ce.colors.text};
    }

    body.vsounds-dark {
      --vsounds-title-color: ${ce.colors.textDark};
    }

    body.vsounds-light {
      --vsounds-title-color: ${ce.colors.textLight};
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
  `,document.head.appendChild(l)}class qC{constructor(t,n,a){WC(),this.renderer=t,this.camera=n,this.container=a,this.audioEngine=new kC({enabled:!0,onInit:()=>this.onAudioEngineInit()}),this.scene=new FC,this.clock=new IC,this.currentSim=null,this.currentSimClass=null,this.orbitControls=new HC(n,t.domElement),this.orbitControls.enableDamping=!0,this.orbitControls.enabled=!1,this.paused=!1,this.audioEnabled=this.audioEngine?.isEnabled()??!0,this.debugOverlay=new VC(a),this.settingsOverlay=new GC(a,{onToggleAudio:()=>this.toggleAudio(),onTogglePlay:()=>this.togglePause(),onRestart:()=>this.restartSimulation()}),this.settingsOverlay.setAudioEnabledLabel(this.audioEnabled),this.settingsOverlay.setRunningLabel(!this.paused),this.messageOverlay=new XC(a),this.messageOverlay.autoDispose=!1,this.messageOverlay.show("Audio will start automatically after a click or key press.",3),this.simSpeed=1,this.enabledOrbitControls=!1,this.settingsOverlay.gui.addParams({orbit:{type:"boolean",value:this.enabledOrbitControls,label:"Orbit Controls",onChange:r=>{this.orbitControls.enabled=r}},speed:{value:this.simSpeed,min:0,max:2,step:.01,label:"Time Dilation",onChange:r=>this.simSpeed=r}})}toggleAudio(){this.audioEnabled=!this.audioEnabled,this.audioEngine?.setAudioEnabled(this.audioEnabled),this.settingsOverlay.setAudioEnabledLabel(this.audioEnabled)}togglePause(){this.paused=!this.paused,this.paused?(this.messageOverlay.show("Simulation paused.",-1),this.pauseSimulation()):(this.messageOverlay.hide(),this.resumeSimulation()),this.settingsOverlay.setRunningLabel(!this.paused)}onAudioEngineInit(){this.currentSim&&(this.currentSim.onAudioEngineInit?.(),this.paused&&this.audioEngine.pauseSimulationAudio())}restartSimulation(){!this.currentSim||!this.currentSimClass||this.setSimulation(this.currentSimClass)}pauseSimulation(){this.currentSim&&(this.paused=!0,this.audioEngine.pauseSimulationAudio(),this.currentSim.onPause?.())}resumeSimulation(){this.currentSim&&(this.paused=!1,this.clock.getDelta(),this.audioEngine.resumeSimulationAudio(),this.currentSim.onResume?.())}async setSimulation(t){this.currentSim&&(await this.currentSim.onAudioEngineShutdown(),this.currentSim.onExit(),this.currentSim.dispose?.(),this._clearSim()),this.currentSimClass=t,this.currentSim=new t({scene:this.scene,camera:this.camera,renderer:this.renderer,container:this.settingsOverlay.guiContainer,debugOverlay:this.debugOverlay,audioEngine:this.audioEngine}),this.currentSim.onEnter(),this.audioEngine.isInitialised()&&this.currentSim.onAudioEngineInit?.(),this.paused&&this.togglePause(),this.resetGlobalParams(),this.orbitControls.reset()}resetGlobalParams(){this.settingsOverlay.gui.reset()}update(){if(!this.currentSim)return;let t=this.clock.getDelta();t*=this.simSpeed,this.paused||this.currentSim.update(t),this.renderer.render(this.scene,this.camera)}_clearSim(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0])}}const os=Object.freeze({Verbose:0,Log:1,Warning:2,Error:3,None:4});os.Log,os.Verbose,os.Verbose,os.Warning,os.Log,os.Verbose,os.Verbose,os.Verbose;class YC extends dc{onEnter(){const t=new aE(16777215,.25);this.scene.add(t);const n=new to,a=new $M({color:2434341});this.cube=new Wi(n,a),this.scene.add(this.cube);const r=new iE(16777215,5);this.scene.add(r),this.gui.addParams({cubeSize:{value:1,min:.5,max:3,step:.1,label:"Cube Size",onChange:u=>{this.cube.scale.set(u,u,u)}}})}onAudioStart(){const{osc:t,gainNode:n}=this.audioEngine.createOscillator("sine",220,this.audioBus);this.osc=t,this.gain=n}update(t){this.cube.rotation.x+=.5*t,this.cube.rotation.y+=.5*t,this.debugOverlay.addTextCategory("Cube","Rotation",`${this.cube.rotation.x.toFixed(2)}, ${this.cube.rotation.y.toFixed(2)}, ${this.cube.rotation.z.toFixed(2)}`),this.debugOverlay.addTextCategory("Cube","Size",this.cube.scale.x.toFixed(2)),this.debugOverlay.update()}onExit(){this.scene.background=null}}function jC({container:l}){NS.useEffect(()=>{if(!l){console.error("[sim-temp] Cannot init simulation app – invalid container");return}const t=l.clientWidth,n=l.clientHeight,a=75,r=t/n,u=.1,h=1e3,f=new mi(a,r,u,h);f.position.z=5;const m=new eC({antialias:!0});m.setSize(t,n),m.setClearColor(16119285,1);var p=function(){m.setSize(l.offsetWidth,l.offsetHeight),f.aspect=l.offsetWidth/l.offsetHeight,f.updateProjectionMatrix()};window.addEventListener("resize",p),l.appendChild(m.domElement);const _=new qC(m,f,l);_.setSimulation(YC);var g=function(){_.update()},v=function(){requestAnimationFrame(v),g()};v()},[l])}function ZC(l){HS.createRoot(l).render(US.jsx(jC,{container:l}))}function KC(l){return l.split(/[^a-zA-Z0-9]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}const QC="mount"+KC("sim-temp")+"App";window[QC]=ZC;
