(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var fh={exports:{}},Ho={};var qg;function ay(){if(qg)return Ho;qg=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:l,type:a,key:f,ref:o!==void 0?o:null,props:u}}return Ho.Fragment=t,Ho.jsx=n,Ho.jsxs=n,Ho}var Yg;function sy(){return Yg||(Yg=1,fh.exports=ay()),fh.exports}var ry=sy(),hh={exports:{}},ie={};var Zg;function oy(){if(Zg)return ie;Zg=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function S(U,it,gt){this.props=U,this.context=it,this.refs=M,this.updater=gt||E}S.prototype.isReactComponent={},S.prototype.setState=function(U,it){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,it,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=S.prototype;function O(U,it,gt){this.props=U,this.context=it,this.refs=M,this.updater=gt||E}var N=O.prototype=new z;N.constructor=O,T(N,S.prototype),N.isPureReactComponent=!0;var P=Array.isArray;function B(){}var L={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(U,it,gt){var Tt=gt.ref;return{$$typeof:l,type:U,key:it,ref:Tt!==void 0?Tt:null,props:gt}}function w(U,it){return C(U.type,it,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===l}function at(U){var it={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return it[gt]})}var nt=/\/+/g;function ht(U,it){return typeof U=="object"&&U!==null&&U.key!=null?at(""+U.key):it.toString(36)}function lt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(B,B):(U.status="pending",U.then(function(it){U.status==="pending"&&(U.status="fulfilled",U.value=it)},function(it){U.status==="pending"&&(U.status="rejected",U.reason=it)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function F(U,it,gt,Tt,Bt){var et=typeof U;(et==="undefined"||et==="boolean")&&(U=null);var ct=!1;if(U===null)ct=!0;else switch(et){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(U.$$typeof){case l:case t:ct=!0;break;case g:return ct=U._init,F(ct(U._payload),it,gt,Tt,Bt)}}if(ct)return Bt=Bt(U),ct=Tt===""?"."+ht(U,0):Tt,P(Bt)?(gt="",ct!=null&&(gt=ct.replace(nt,"$&/")+"/"),F(Bt,it,gt,"",function(It){return It})):Bt!=null&&(k(Bt)&&(Bt=w(Bt,gt+(Bt.key==null||U&&U.key===Bt.key?"":(""+Bt.key).replace(nt,"$&/")+"/")+ct)),it.push(Bt)),1;ct=0;var wt=Tt===""?".":Tt+":";if(P(U))for(var Vt=0;Vt<U.length;Vt++)Tt=U[Vt],et=wt+ht(Tt,Vt),ct+=F(Tt,it,gt,et,Bt);else if(Vt=x(U),typeof Vt=="function")for(U=Vt.call(U),Vt=0;!(Tt=U.next()).done;)Tt=Tt.value,et=wt+ht(Tt,Vt++),ct+=F(Tt,it,gt,et,Bt);else if(et==="object"){if(typeof U.then=="function")return F(lt(U),it,gt,Tt,Bt);throw it=String(U),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ct}function H(U,it,gt){if(U==null)return U;var Tt=[],Bt=0;return F(U,Tt,"","",function(et){return it.call(gt,et,Bt++)}),Tt}function J(U){if(U._status===-1){var it=U._result;it=it(),it.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=it)}if(U._status===1)return U._result.default;throw U._result}var St=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},vt={map:H,forEach:function(U,it,gt){H(U,function(){it.apply(this,arguments)},gt)},count:function(U){var it=0;return H(U,function(){it++}),it},toArray:function(U){return H(U,function(it){return it})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ie.Activity=_,ie.Children=vt,ie.Component=S,ie.Fragment=n,ie.Profiler=o,ie.PureComponent=O,ie.StrictMode=a,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ie.__COMPILER_RUNTIME={__proto__:null,c:function(U){return L.H.useMemoCache(U)}},ie.cache=function(U){return function(){return U.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(U,it,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Tt=T({},U.props),Bt=U.key;if(it!=null)for(et in it.key!==void 0&&(Bt=""+it.key),it)!j.call(it,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&it.ref===void 0||(Tt[et]=it[et]);var et=arguments.length-2;if(et===1)Tt.children=gt;else if(1<et){for(var ct=Array(et),wt=0;wt<et;wt++)ct[wt]=arguments[wt+2];Tt.children=ct}return C(U.type,Bt,Tt)},ie.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ie.createElement=function(U,it,gt){var Tt,Bt={},et=null;if(it!=null)for(Tt in it.key!==void 0&&(et=""+it.key),it)j.call(it,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Bt[Tt]=it[Tt]);var ct=arguments.length-2;if(ct===1)Bt.children=gt;else if(1<ct){for(var wt=Array(ct),Vt=0;Vt<ct;Vt++)wt[Vt]=arguments[Vt+2];Bt.children=wt}if(U&&U.defaultProps)for(Tt in ct=U.defaultProps,ct)Bt[Tt]===void 0&&(Bt[Tt]=ct[Tt]);return C(U,et,Bt)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(U){return{$$typeof:d,render:U}},ie.isValidElement=k,ie.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:J}},ie.memo=function(U,it){return{$$typeof:p,type:U,compare:it===void 0?null:it}},ie.startTransition=function(U){var it=L.T,gt={};L.T=gt;try{var Tt=U(),Bt=L.S;Bt!==null&&Bt(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(B,St)}catch(et){St(et)}finally{it!==null&&gt.types!==null&&(it.types=gt.types),L.T=it}},ie.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ie.use=function(U){return L.H.use(U)},ie.useActionState=function(U,it,gt){return L.H.useActionState(U,it,gt)},ie.useCallback=function(U,it){return L.H.useCallback(U,it)},ie.useContext=function(U){return L.H.useContext(U)},ie.useDebugValue=function(){},ie.useDeferredValue=function(U,it){return L.H.useDeferredValue(U,it)},ie.useEffect=function(U,it){return L.H.useEffect(U,it)},ie.useEffectEvent=function(U){return L.H.useEffectEvent(U)},ie.useId=function(){return L.H.useId()},ie.useImperativeHandle=function(U,it,gt){return L.H.useImperativeHandle(U,it,gt)},ie.useInsertionEffect=function(U,it){return L.H.useInsertionEffect(U,it)},ie.useLayoutEffect=function(U,it){return L.H.useLayoutEffect(U,it)},ie.useMemo=function(U,it){return L.H.useMemo(U,it)},ie.useOptimistic=function(U,it){return L.H.useOptimistic(U,it)},ie.useReducer=function(U,it,gt){return L.H.useReducer(U,it,gt)},ie.useRef=function(U){return L.H.useRef(U)},ie.useState=function(U){return L.H.useState(U)},ie.useSyncExternalStore=function(U,it,gt){return L.H.useSyncExternalStore(U,it,gt)},ie.useTransition=function(){return L.H.useTransition()},ie.version="19.2.3",ie}var jg;function Jd(){return jg||(jg=1,hh.exports=oy()),hh.exports}var ly=Jd(),dh={exports:{}},Go={},ph={exports:{}},mh={};var Qg;function uy(){return Qg||(Qg=1,(function(l){function t(F,H){var J=F.length;F.push(H);t:for(;0<J;){var St=J-1>>>1,vt=F[St];if(0<o(vt,H))F[St]=H,F[J]=vt,J=St;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],J=F.pop();if(J!==H){F[0]=J;t:for(var St=0,vt=F.length,U=vt>>>1;St<U;){var it=2*(St+1)-1,gt=F[it],Tt=it+1,Bt=F[Tt];if(0>o(gt,J))Tt<vt&&0>o(Bt,gt)?(F[St]=Bt,F[Tt]=J,St=Tt):(F[St]=gt,F[it]=J,St=it);else if(Tt<vt&&0>o(Bt,J))F[St]=Bt,F[Tt]=J,St=Tt;else break t}}return H}function o(F,H){var J=F.sortIndex-H.sortIndex;return J!==0?J:F.id-H.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;l.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();l.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,v=3,x=!1,E=!1,T=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(F){for(var H=n(p);H!==null;){if(H.callback===null)a(p);else if(H.startTime<=F)a(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=n(p)}}function P(F){if(T=!1,N(F),!E)if(n(m)!==null)E=!0,B||(B=!0,at());else{var H=n(p);H!==null&&lt(P,H.startTime-F)}}var B=!1,L=-1,j=5,C=-1;function w(){return M?!0:!(l.unstable_now()-C<j)}function k(){if(M=!1,B){var F=l.unstable_now();C=F;var H=!0;try{t:{E=!1,T&&(T=!1,z(L),L=-1),x=!0;var J=v;try{e:{for(N(F),_=n(m);_!==null&&!(_.expirationTime>F&&w());){var St=_.callback;if(typeof St=="function"){_.callback=null,v=_.priorityLevel;var vt=St(_.expirationTime<=F);if(F=l.unstable_now(),typeof vt=="function"){_.callback=vt,N(F),H=!0;break e}_===n(m)&&a(m),N(F)}else a(m);_=n(m)}if(_!==null)H=!0;else{var U=n(p);U!==null&&lt(P,U.startTime-F),H=!1}}break t}finally{_=null,v=J,x=!1}H=void 0}}finally{H?at():B=!1}}}var at;if(typeof O=="function")at=function(){O(k)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ht=nt.port2;nt.port1.onmessage=k,at=function(){ht.postMessage(null)}}else at=function(){S(k,0)};function lt(F,H){L=S(function(){F(l.unstable_now())},H)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(F){F.callback=null},l.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var J=v;v=H;try{return F()}finally{v=J}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=v;v=F;try{return H()}finally{v=J}},l.unstable_scheduleCallback=function(F,H,J){var St=l.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?St+J:St):J=St,F){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=J+vt,F={id:g++,callback:H,priorityLevel:F,startTime:J,expirationTime:vt,sortIndex:-1},J>St?(F.sortIndex=J,t(p,F),n(m)===null&&F===n(p)&&(T?(z(L),L=-1):T=!0,lt(P,J-St))):(F.sortIndex=vt,t(m,F),E||x||(E=!0,B||(B=!0,at()))),F},l.unstable_shouldYield=w,l.unstable_wrapCallback=function(F){var H=v;return function(){var J=v;v=H;try{return F.apply(this,arguments)}finally{v=J}}}})(mh)),mh}var Kg;function cy(){return Kg||(Kg=1,ph.exports=uy()),ph.exports}var gh={exports:{}},wn={};var Jg;function fy(){if(Jg)return wn;Jg=1;var l=Jd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},wn.requestFormReset=function(m){a.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.2.3",wn}var $g;function hy(){if($g)return gh.exports;$g=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),gh.exports=fy(),gh.exports}var t_;function dy(){if(t_)return Go;t_=1;var l=cy(),t=Jd(),n=hy();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,r=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(r=c.return,r!==null){s=r;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return m(c),e;if(h===r)return m(c),i;h=h.sibling}throw Error(a(188))}if(s.return!==r.return)s=c,r=h;else{for(var y=!1,A=c.child;A;){if(A===s){y=!0,s=c,r=h;break}if(A===r){y=!0,r=c,s=h;break}A=A.sibling}if(!y){for(A=h.child;A;){if(A===s){y=!0,s=h,r=c;break}if(A===r){y=!0,r=h,s=c;break}A=A.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==r)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function at(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case O:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case N:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return i=e.displayName||null,i!==null?i:ht(e.type)||"Memo";case j:i=e._payload,e=e._init;try{return ht(e(i))}catch{}}return null}var lt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},St=[],vt=-1;function U(e){return{current:e}}function it(e){0>vt||(e.current=St[vt],St[vt]=null,vt--)}function gt(e,i){vt++,St[vt]=e.current,e.current=i}var Tt=U(null),Bt=U(null),et=U(null),ct=U(null);function wt(e,i){switch(gt(et,i),gt(Bt,e),gt(Tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?mg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=mg(i),e=gg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Tt),gt(Tt,e)}function Vt(){it(Tt),it(Bt),it(et)}function It(e){e.memoizedState!==null&&gt(ct,e);var i=Tt.current,s=gg(i,e.type);i!==s&&(gt(Bt,e),gt(Tt,s))}function fe(e){Bt.current===e&&(it(Tt),it(Bt)),ct.current===e&&(it(ct),Po._currentValue=J)}var je,me;function he(e){if(je===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);je=i&&i[1]||"",me=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+e+me}var Ae=!1;function se(e,i){if(!e||Ae)return"";Ae=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(i){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){tt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),y=h[0],A=h[1];if(y&&A){var I=y.split(`
`),K=A.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<K.length&&!K[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===K.length)for(r=I.length-1,c=K.length-1;1<=r&&0<=c&&I[r]!==K[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==K[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==K[c]){var ft=`
`+I[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=c);break}}}finally{Ae=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?he(s):""}function Qe(e,i){switch(e.tag){case 26:case 27:case 5:return he(e.type);case 16:return he("Lazy");case 13:return e.child!==i&&i!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return he("Activity");default:return""}}function G(e){try{var i="",s=null;do i+=Qe(e,s),s=e,e=e.return;while(e);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var qe=Object.prototype.hasOwnProperty,Se=l.unstable_scheduleCallback,Ue=l.unstable_cancelCallback,qt=l.unstable_shouldYield,D=l.unstable_requestPaint,b=l.unstable_now,W=l.unstable_getCurrentPriorityLevel,dt=l.unstable_ImmediatePriority,xt=l.unstable_UserBlockingPriority,ut=l.unstable_NormalPriority,Zt=l.unstable_LowPriority,Rt=l.unstable_IdlePriority,kt=l.log,te=l.unstable_setDisableYieldValue,Mt=null,Et=null;function Pt(e){if(typeof kt=="function"&&te(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:X,Ct=Math.log,oe=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ct(e)/oe|0)|0}var Ut=256,bt=262144,zt=4194304;function yt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,s){var r=e.pendingLanes;if(r===0)return 0;var c=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~h,r!==0?c=yt(r):(y&=A,y!==0?c=yt(y):s||(s=A&~e,s!==0&&(c=yt(s))))):(A=r&~h,A!==0?c=yt(A):y!==0?c=yt(y):s||(s=r&~e,s!==0&&(c=yt(s)))),c===0?0:i!==0&&i!==c&&(i&h)===0&&(h=c&-c,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:c}function At(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ee(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function ye(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Cn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,i,s,r,c,h){var y=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,K=e.hiddenUpdates;for(s=y&~s;0<s;){var ft=31-Ot(s),mt=1<<ft;A[ft]=0,I[ft]=-1;var tt=K[ft];if(tt!==null)for(K[ft]=null,ft=0;ft<tt.length;ft++){var ot=tt[ft];ot!==null&&(ot.lane&=-536870913)}s&=~mt}r!==0&&ul(e,r,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~i))}function ul(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var r=31-Ot(i);e.entangledLanes|=i,e.entanglements[r]=e.entanglements[r]|1073741824|s&261930}function Yr(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var r=31-Ot(s),c=1<<r;c&i|e[r]&i&&(e[r]|=i),s&=~c}}function Fs(e,i){var s=i&-i;return s=(s&42)!==0?1:Zr(s),(s&(e.suspendedLanes|i))!==0?0:s}function Zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Ig(e.type))}function Ci(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var ei=Math.random().toString(36).slice(2),nn="__reactFiber$"+ei,_n="__reactProps$"+ei,mi="__reactContainer$"+ei,Is="__reactEvents$"+ei,Hs="__reactListeners$"+ei,cl="__reactHandles$"+ei,Qr="__reactResources$"+ei,rs="__reactMarker$"+ei;function Kr(e){delete e[nn],delete e[_n],delete e[Is],delete e[Hs],delete e[cl]}function Ea(e){var i=e[nn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[mi]||s[nn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Eg(e);e!==null;){if(s=e[nn])return s;e=Eg(e)}return i}e=s,s=e.parentNode}return null}function ba(e){if(e=e[nn]||e[mi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function os(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ta(e){var i=e[Qr];return i||(i=e[Qr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function R(e){e[rs]=!0}var q=new Set,st={};function $(e,i){Z(e,i),Z(e+"Capture",i)}function Z(e,i){for(st[e]=i,e=0;e<i.length;e++)q.add(i[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},Lt={};function Ht(e){return qe.call(Lt,e)?!0:qe.call(Ft,e)?!1:Dt.test(e)?Lt[e]=!0:(Ft[e]=!0,!1)}function Xt(e,i,s){if(Ht(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var r=i.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Kt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Wt(e,i,s,r){if(r===null)e.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+r)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Re(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(e,i,s){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,h.call(this,y)}}),Object.defineProperty(e,i,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ke(e){if(!e._valueTracker){var i=Re(e)?"checked":"value";e._valueTracker=Ye(e,i,""+e[i])}}function Le(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),r="";return e&&(r=Re(e)?e.checked?"true":"false":e.value),e=r,e!==s?(i.setValue(e),!0):!1}function jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ce=/[\n"\\]/g;function ne(e){return e.replace(Ce,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function vn(e,i,s,r,c,h,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Jt(i)):e.value!==""+Jt(i)&&(e.value=""+Jt(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?xn(e,y,Jt(i)):s!=null?xn(e,y,Jt(s)):r!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Jt(A):e.removeAttribute("name")}function ki(e,i,s,r,c,h,y,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){ke(e);return}s=s!=null?""+Jt(s):"",i=i!=null?""+Jt(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),ke(e)}function xn(e,i,s){i==="number"&&jt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ni(e,i,s,r){if(e=e.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=i.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&r&&(e[s].defaultSelected=!0)}else{for(s=""+Jt(s),i=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function Oe(e,i,s){if(i!=null&&(i=""+Jt(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Jt(s):""}function Sn(e,i,s,r){if(i==null){if(r!=null){if(s!=null)throw Error(a(92));if(lt(r)){if(1<r.length)throw Error(a(93));r=r[0]}s=r}s==null&&(s=""),i=s}s=Jt(i),e.defaultValue=s,r=e.textContent,r===s&&r!==""&&r!==null&&(e.value=r),ke(e)}function un(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mn(e,i,s){var r=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?r?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":r?e.setProperty(i,s):typeof s!="number"||s===0||yn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Gs(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var r in s)!s.hasOwnProperty(r)||i!=null&&i.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in i)r=i[c],i.hasOwnProperty(c)&&s[c]!==r&&Mn(e,c,r)}else for(var h in i)i.hasOwnProperty(h)&&Mn(e,h,i[h])}function gi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ex=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return ex.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var oc=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,ks=null;function pp(e){var i=ba(e);if(i&&(e=i.stateNode)){var s=e[_n]||null;t:switch(e=i.stateNode,i.type){case"input":if(vn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ne(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var r=s[i];if(r!==e&&r.form===e.form){var c=r[_n]||null;if(!c)throw Error(a(90));vn(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)r=s[i],r.form===e.form&&Le(r)}break t;case"textarea":Oe(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&ni(e,!!s.multiple,i,!1)}}}var uc=!1;function mp(e,i,s){if(uc)return e(i,s);uc=!0;try{var r=e(i);return r}finally{if(uc=!1,(Vs!==null||ks!==null)&&(Jl(),Vs&&(i=Vs,e=ks,ks=Vs=null,pp(i),e)))for(i=0;i<e.length;i++)pp(e[i])}}function Jr(e,i){var s=e.stateNode;if(s===null)return null;var r=s[_n]||null;if(r===null)return null;s=r[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=!1;if(Wi)try{var $r={};Object.defineProperty($r,"passive",{get:function(){cc=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{cc=!1}var Aa=null,fc=null,hl=null;function gp(){if(hl)return hl;var e,i=fc,s=i.length,r,c="value"in Aa?Aa.value:Aa.textContent,h=c.length;for(e=0;e<s&&i[e]===c[e];e++);var y=s-e;for(r=1;r<=y&&i[s-r]===c[h-r];r++);return hl=c.slice(e,1<r?1-r:void 0)}function dl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function _p(){return!1}function Pn(e){function i(s,r,c,h,y){this._reactName=s,this._targetInst=c,this.type=r,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?pl:_p,this.isPropagationStopped=_p,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),i}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Pn(ls),to=_({},ls,{view:0,detail:0}),nx=Pn(to),hc,dc,eo,gl=_({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(hc=e.screenX-eo.screenX,dc=e.screenY-eo.screenY):dc=hc=0,eo=e),hc)},movementY:function(e){return"movementY"in e?e.movementY:dc}}),vp=Pn(gl),ix=_({},gl,{dataTransfer:0}),ax=Pn(ix),sx=_({},to,{relatedTarget:0}),pc=Pn(sx),rx=_({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=Pn(rx),lx=_({},ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ux=Pn(lx),cx=_({},ls,{data:0}),xp=Pn(cx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=dx[e])?!!i[e]:!1}function mc(){return px}var mx=_({},to,{key:function(e){if(e.key){var i=fx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gx=Pn(mx),_x=_({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=Pn(_x),vx=_({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),xx=Pn(vx),Sx=_({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),yx=Pn(Sx),Mx=_({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ex=Pn(Mx),bx=_({},ls,{newState:0,oldState:0}),Tx=Pn(bx),Ax=[9,13,27,32],gc=Wi&&"CompositionEvent"in window,no=null;Wi&&"documentMode"in document&&(no=document.documentMode);var Rx=Wi&&"TextEvent"in window&&!no,yp=Wi&&(!gc||no&&8<no&&11>=no),Mp=" ",Ep=!1;function bp(e,i){switch(e){case"keyup":return Ax.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function Cx(e,i){switch(e){case"compositionend":return Tp(i);case"keypress":return i.which!==32?null:(Ep=!0,Mp);case"textInput":return e=i.data,e===Mp&&Ep?null:e;default:return null}}function wx(e,i){if(Xs)return e==="compositionend"||!gc&&bp(e,i)?(e=gp(),hl=fc=Aa=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yp&&i.locale!=="ko"?null:i.data;default:return null}}var Dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Dx[e.type]:i==="textarea"}function Rp(e,i,s,r){Vs?ks?ks.push(r):ks=[r]:Vs=r,i=su(i,"onChange"),0<i.length&&(s=new ml("onChange","change",null,s,r),e.push({event:s,listeners:i}))}var io=null,ao=null;function Ux(e){ug(e,0)}function _l(e){var i=os(e);if(Le(i))return e}function Cp(e,i){if(e==="change")return i}var wp=!1;if(Wi){var _c;if(Wi){var vc="oninput"in document;if(!vc){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),vc=typeof Dp.oninput=="function"}_c=vc}else _c=!1;wp=_c&&(!document.documentMode||9<document.documentMode)}function Up(){io&&(io.detachEvent("onpropertychange",Lp),ao=io=null)}function Lp(e){if(e.propertyName==="value"&&_l(ao)){var i=[];Rp(i,ao,e,lc(e)),mp(Ux,i)}}function Lx(e,i,s){e==="focusin"?(Up(),io=i,ao=s,io.attachEvent("onpropertychange",Lp)):e==="focusout"&&Up()}function Nx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(ao)}function Ox(e,i){if(e==="click")return _l(i)}function zx(e,i){if(e==="input"||e==="change")return _l(i)}function Px(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Xn=typeof Object.is=="function"?Object.is:Px;function so(e,i){if(Xn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var c=s[r];if(!qe.call(i,c)||!Xn(e[c],i[c]))return!1}return!0}function Np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Op(e,i){var s=Np(e);e=0;for(var r;s;){if(s.nodeType===3){if(r=e+s.textContent.length,e<=i&&r>=i)return{node:s,offset:i-e};e=r}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Np(s)}}function zp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?zp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=jt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=jt(e.document)}return i}function xc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Fx=Wi&&"documentMode"in document&&11>=document.documentMode,Ws=null,Sc=null,ro=null,yc=!1;function Fp(e,i,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;yc||Ws==null||Ws!==jt(r)||(r=Ws,"selectionStart"in r&&xc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&so(ro,r)||(ro=r,r=su(Sc,"onSelect"),0<r.length&&(i=new ml("onSelect","select",null,i,s),e.push({event:i,listeners:r}),i.target=Ws)))}function us(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var qs={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},Mc={},Bp={};Wi&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function cs(e){if(Mc[e])return Mc[e];if(!qs[e])return e;var i=qs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Bp)return Mc[e]=i[s];return e}var Ip=cs("animationend"),Hp=cs("animationiteration"),Gp=cs("animationstart"),Bx=cs("transitionrun"),Ix=cs("transitionstart"),Hx=cs("transitioncancel"),Vp=cs("transitionend"),kp=new Map,Ec="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ec.push("scrollEnd");function _i(e,i){kp.set(e,i),$(i,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Ys=0,bc=0;function xl(){for(var e=Ys,i=bc=Ys=0;i<e;){var s=ii[i];ii[i++]=null;var r=ii[i];ii[i++]=null;var c=ii[i];ii[i++]=null;var h=ii[i];if(ii[i++]=null,r!==null&&c!==null){var y=r.pending;y===null?c.next=c:(c.next=y.next,y.next=c),r.pending=c}h!==0&&Xp(s,c,h)}}function Sl(e,i,s,r){ii[Ys++]=e,ii[Ys++]=i,ii[Ys++]=s,ii[Ys++]=r,bc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Tc(e,i,s,r){return Sl(e,i,s,r),yl(e)}function fs(e,i){return Sl(e,null,null,i),yl(e)}function Xp(e,i,s){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s);for(var c=!1,h=e.return;h!==null;)h.childLanes|=s,r=h.alternate,r!==null&&(r.childLanes|=s),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&i!==null&&(c=31-Ot(s),e=h.hiddenUpdates,r=e[c],r===null?e[c]=[i]:r.push(i),i.lane=s|536870912),h):null}function yl(e){if(50<wo)throw wo=0,zf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Zs={};function Gx(e,i,s,r){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,i,s,r){return new Gx(e,i,s,r)}function Ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,i){var s=e.alternate;return s===null?(s=Wn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Wp(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ml(e,i,s,r,c,h){var y=0;if(r=e,typeof e=="function")Ac(e)&&(y=1);else if(typeof e=="string")y=qS(e,s,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Wn(31,s,i,c),e.elementType=C,e.lanes=h,e;case T:return hs(s.children,c,h,i);case M:y=8,c|=24;break;case S:return e=Wn(12,s,i,c|2),e.elementType=S,e.lanes=h,e;case P:return e=Wn(13,s,i,c),e.elementType=P,e.lanes=h,e;case B:return e=Wn(19,s,i,c),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:y=10;break t;case z:y=9;break t;case N:y=11;break t;case L:y=14;break t;case j:y=16,r=null;break t}y=29,s=Error(a(130,e===null?"null":typeof e,"")),r=null}return i=Wn(y,s,i,c),i.elementType=e,i.type=r,i.lanes=h,i}function hs(e,i,s,r){return e=Wn(7,e,r,i),e.lanes=s,e}function Rc(e,i,s){return e=Wn(6,e,null,i),e.lanes=s,e}function qp(e){var i=Wn(18,null,null,0);return i.stateNode=e,i}function Cc(e,i,s){return i=Wn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Yp=new WeakMap;function ai(e,i){if(typeof e=="object"&&e!==null){var s=Yp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:G(i)},Yp.set(e,i),i)}return{value:e,source:i,stack:G(i)}}var js=[],Qs=0,El=null,oo=0,si=[],ri=0,Ra=null,wi=1,Di="";function Yi(e,i){js[Qs++]=oo,js[Qs++]=El,El=e,oo=i}function Zp(e,i,s){si[ri++]=wi,si[ri++]=Di,si[ri++]=Ra,Ra=e;var r=wi;e=Di;var c=32-Ot(r)-1;r&=~(1<<c),s+=1;var h=32-Ot(i)+c;if(30<h){var y=c-c%5;h=(r&(1<<y)-1).toString(32),r>>=y,c-=y,wi=1<<32-Ot(i)+c|s<<c|r,Di=h+e}else wi=1<<h|s<<c|r,Di=e}function wc(e){e.return!==null&&(Yi(e,1),Zp(e,1,0))}function Dc(e){for(;e===El;)El=js[--Qs],js[Qs]=null,oo=js[--Qs],js[Qs]=null;for(;e===Ra;)Ra=si[--ri],si[ri]=null,Di=si[--ri],si[ri]=null,wi=si[--ri],si[ri]=null}function jp(e,i){si[ri++]=wi,si[ri++]=Di,si[ri++]=Ra,wi=i.id,Di=i.overflow,Ra=e}var En=null,Xe=null,ve=!1,Ca=null,oi=!1,Uc=Error(a(519));function wa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(ai(i,e)),Uc}function Qp(e){var i=e.stateNode,s=e.type,r=e.memoizedProps;switch(i[nn]=e,i[_n]=r,s){case"dialog":pe("cancel",i),pe("close",i);break;case"iframe":case"object":case"embed":pe("load",i);break;case"video":case"audio":for(s=0;s<Uo.length;s++)pe(Uo[s],i);break;case"source":pe("error",i);break;case"img":case"image":case"link":pe("error",i),pe("load",i);break;case"details":pe("toggle",i);break;case"input":pe("invalid",i),ki(i,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pe("invalid",i);break;case"textarea":pe("invalid",i),Sn(i,r.value,r.defaultValue,r.children)}s=r.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||r.suppressHydrationWarning===!0||dg(i.textContent,s)?(r.popover!=null&&(pe("beforetoggle",i),pe("toggle",i)),r.onScroll!=null&&pe("scroll",i),r.onScrollEnd!=null&&pe("scrollend",i),r.onClick!=null&&(i.onclick=Xi),i=!0):i=!1,i||wa(e,!0)}function Kp(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:En=En.return}}function Ks(e){if(e!==En)return!1;if(!ve)return Kp(e),ve=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Qf(e.type,e.memoizedProps)),s=!s),s&&Xe&&wa(e),Kp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Xe=Mg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Xe=Mg(e)}else i===27?(i=Xe,ka(e.type)?(e=eh,eh=null,Xe=e):Xe=i):Xe=En?ui(e.stateNode.nextSibling):null;return!0}function ds(){Xe=En=null,ve=!1}function Lc(){var e=Ca;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),Ca=null),e}function lo(e){Ca===null?Ca=[e]:Ca.push(e)}var Nc=U(null),ps=null,Zi=null;function Da(e,i,s){gt(Nc,i._currentValue),i._currentValue=s}function ji(e){e._currentValue=Nc.current,it(Nc)}function Oc(e,i,s){for(;e!==null;){var r=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,r!==null&&(r.childLanes|=i)):r!==null&&(r.childLanes&i)!==i&&(r.childLanes|=i),e===s)break;e=e.return}}function zc(e,i,s,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var y=c.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=c;for(var I=0;I<i.length;I++)if(A.context===i[I]){h.lanes|=s,A=h.alternate,A!==null&&(A.lanes|=s),Oc(h.return,s,e),r||(y=null);break t}h=A.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(a(341));y.lanes|=s,h=y.alternate,h!==null&&(h.lanes|=s),Oc(y,s,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Js(e,i,s,r){e=null;for(var c=i,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var A=c.type;Xn(c.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(c===ct.current){if(y=c.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}c=c.return}e!==null&&zc(i,e,s,r),i.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ps=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return Jp(ps,e)}function Tl(e,i){return ps===null&&ms(e),Jp(e,i)}function Jp(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Zi===null){if(e===null)throw Error(a(308));Zi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Zi=Zi.next=i;return s}var Vx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,r){e.push(r)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},kx=l.unstable_scheduleCallback,Xx=l.unstable_NormalPriority,an={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pc(){return{controller:new Vx,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&kx(Xx,function(){e.controller.abort()})}var co=null,Fc=0,$s=0,tr=null;function Wx(e,i){if(co===null){var s=co=[];Fc=0,$s=Gf(),tr={status:"pending",value:void 0,then:function(r){s.push(r)}}}return Fc++,i.then($p,$p),i}function $p(){if(--Fc===0&&co!==null){tr!==null&&(tr.status="fulfilled");var e=co;co=null,$s=0,tr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function qx(e,i){var s=[],r={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return e.then(function(){r.status="fulfilled",r.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(r.status="rejected",r.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),r}var tm=F.S;F.S=function(e,i){F0=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Wx(e,i),tm!==null&&tm(e,i)};var gs=U(null);function Bc(){var e=gs.current;return e!==null?e:Ve.pooledCache}function Al(e,i){i===null?gt(gs,gs.current):gt(gs,i.pool)}function em(){var e=Bc();return e===null?null:{parent:an._currentValue,pool:e}}var er=Error(a(460)),Ic=Error(a(474)),Rl=Error(a(542)),Cl={then:function(){}};function nm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function im(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Xi,Xi),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,sm(e),e;default:if(typeof i.status=="string")i.then(Xi,Xi);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(r){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=r}},function(r){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=r}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,sm(e),e}throw vs=i,er}}function _s(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(vs=s,er):s}}var vs=null;function am(){if(vs===null)throw Error(a(459));var e=vs;return vs=null,e}function sm(e){if(e===er||e===Rl)throw Error(a(483))}var nr=null,fo=0;function wl(e){var i=fo;return fo+=1,nr===null&&(nr=[]),im(nr,e,i)}function ho(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Dl(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function rm(e){function i(Y,V){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function s(Y,V){if(!e)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function r(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=qi(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function y(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,Q,pt){return V===null||V.tag!==6?(V=Rc(Q,Y.mode,pt),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function I(Y,V,Q,pt){var Qt=Q.type;return Qt===T?ft(Y,V,Q.props.children,pt,Q.key):V!==null&&(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===j&&_s(Qt)===V.type)?(V=c(V,Q.props),ho(V,Q),V.return=Y,V):(V=Ml(Q.type,Q.key,Q.props,null,Y.mode,pt),ho(V,Q),V.return=Y,V)}function K(Y,V,Q,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Cc(Q,Y.mode,pt),V.return=Y,V):(V=c(V,Q.children||[]),V.return=Y,V)}function ft(Y,V,Q,pt,Qt){return V===null||V.tag!==7?(V=hs(Q,Y.mode,pt,Qt),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function mt(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Rc(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return Q=Ml(V.type,V.key,V.props,null,Y.mode,Q),ho(Q,V),Q.return=Y,Q;case E:return V=Cc(V,Y.mode,Q),V.return=Y,V;case j:return V=_s(V),mt(Y,V,Q)}if(lt(V)||at(V))return V=hs(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,wl(V),Q);if(V.$$typeof===O)return mt(Y,Tl(Y,V),Q);Dl(Y,V)}return null}function tt(Y,V,Q,pt){var Qt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qt!==null?null:A(Y,V,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Qt?I(Y,V,Q,pt):null;case E:return Q.key===Qt?K(Y,V,Q,pt):null;case j:return Q=_s(Q),tt(Y,V,Q,pt)}if(lt(Q)||at(Q))return Qt!==null?null:ft(Y,V,Q,pt,null);if(typeof Q.then=="function")return tt(Y,V,wl(Q),pt);if(Q.$$typeof===O)return tt(Y,V,Tl(Y,Q),pt);Dl(Y,Q)}return null}function ot(Y,V,Q,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(Q)||null,A(V,Y,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return Y=Y.get(pt.key===null?Q:pt.key)||null,I(V,Y,pt,Qt);case E:return Y=Y.get(pt.key===null?Q:pt.key)||null,K(V,Y,pt,Qt);case j:return pt=_s(pt),ot(Y,V,Q,pt,Qt)}if(lt(pt)||at(pt))return Y=Y.get(Q)||null,ft(V,Y,pt,Qt,null);if(typeof pt.then=="function")return ot(Y,V,Q,wl(pt),Qt);if(pt.$$typeof===O)return ot(Y,V,Q,Tl(V,pt),Qt);Dl(V,pt)}return null}function Gt(Y,V,Q,pt){for(var Qt=null,Ee=null,Yt=V,le=V=0,_e=null;Yt!==null&&le<Q.length;le++){Yt.index>le?(_e=Yt,Yt=null):_e=Yt.sibling;var be=tt(Y,Yt,Q[le],pt);if(be===null){Yt===null&&(Yt=_e);break}e&&Yt&&be.alternate===null&&i(Y,Yt),V=h(be,V,le),Ee===null?Qt=be:Ee.sibling=be,Ee=be,Yt=_e}if(le===Q.length)return s(Y,Yt),ve&&Yi(Y,le),Qt;if(Yt===null){for(;le<Q.length;le++)Yt=mt(Y,Q[le],pt),Yt!==null&&(V=h(Yt,V,le),Ee===null?Qt=Yt:Ee.sibling=Yt,Ee=Yt);return ve&&Yi(Y,le),Qt}for(Yt=r(Yt);le<Q.length;le++)_e=ot(Yt,Y,le,Q[le],pt),_e!==null&&(e&&_e.alternate!==null&&Yt.delete(_e.key===null?le:_e.key),V=h(_e,V,le),Ee===null?Qt=_e:Ee.sibling=_e,Ee=_e);return e&&Yt.forEach(function(Za){return i(Y,Za)}),ve&&Yi(Y,le),Qt}function $t(Y,V,Q,pt){if(Q==null)throw Error(a(151));for(var Qt=null,Ee=null,Yt=V,le=V=0,_e=null,be=Q.next();Yt!==null&&!be.done;le++,be=Q.next()){Yt.index>le?(_e=Yt,Yt=null):_e=Yt.sibling;var Za=tt(Y,Yt,be.value,pt);if(Za===null){Yt===null&&(Yt=_e);break}e&&Yt&&Za.alternate===null&&i(Y,Yt),V=h(Za,V,le),Ee===null?Qt=Za:Ee.sibling=Za,Ee=Za,Yt=_e}if(be.done)return s(Y,Yt),ve&&Yi(Y,le),Qt;if(Yt===null){for(;!be.done;le++,be=Q.next())be=mt(Y,be.value,pt),be!==null&&(V=h(be,V,le),Ee===null?Qt=be:Ee.sibling=be,Ee=be);return ve&&Yi(Y,le),Qt}for(Yt=r(Yt);!be.done;le++,be=Q.next())be=ot(Yt,Y,le,be.value,pt),be!==null&&(e&&be.alternate!==null&&Yt.delete(be.key===null?le:be.key),V=h(be,V,le),Ee===null?Qt=be:Ee.sibling=be,Ee=be);return e&&Yt.forEach(function(iy){return i(Y,iy)}),ve&&Yi(Y,le),Qt}function Ge(Y,V,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Qt=Q.key;V!==null;){if(V.key===Qt){if(Qt=Q.type,Qt===T){if(V.tag===7){s(Y,V.sibling),pt=c(V,Q.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===j&&_s(Qt)===V.type){s(Y,V.sibling),pt=c(V,Q.props),ho(pt,Q),pt.return=Y,Y=pt;break t}s(Y,V);break}else i(Y,V);V=V.sibling}Q.type===T?(pt=hs(Q.props.children,Y.mode,pt,Q.key),pt.return=Y,Y=pt):(pt=Ml(Q.type,Q.key,Q.props,null,Y.mode,pt),ho(pt,Q),pt.return=Y,Y=pt)}return y(Y);case E:t:{for(Qt=Q.key;V!==null;){if(V.key===Qt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){s(Y,V.sibling),pt=c(V,Q.children||[]),pt.return=Y,Y=pt;break t}else{s(Y,V);break}else i(Y,V);V=V.sibling}pt=Cc(Q,Y.mode,pt),pt.return=Y,Y=pt}return y(Y);case j:return Q=_s(Q),Ge(Y,V,Q,pt)}if(lt(Q))return Gt(Y,V,Q,pt);if(at(Q)){if(Qt=at(Q),typeof Qt!="function")throw Error(a(150));return Q=Qt.call(Q),$t(Y,V,Q,pt)}if(typeof Q.then=="function")return Ge(Y,V,wl(Q),pt);if(Q.$$typeof===O)return Ge(Y,V,Tl(Y,Q),pt);Dl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(s(Y,V.sibling),pt=c(V,Q),pt.return=Y,Y=pt):(s(Y,V),pt=Rc(Q,Y.mode,pt),pt.return=Y,Y=pt),y(Y)):s(Y,V)}return function(Y,V,Q,pt){try{fo=0;var Qt=Ge(Y,V,Q,pt);return nr=null,Qt}catch(Yt){if(Yt===er||Yt===Rl)throw Yt;var Ee=Wn(29,Yt,null,Y.mode);return Ee.lanes=pt,Ee.return=Y,Ee}}}var xs=rm(!0),om=rm(!1),Ua=!1;function Hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gc(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,i,s){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(we&2)!==0){var c=r.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),r.pending=i,i=yl(e),Xp(e,null,s),i}return Sl(e,r,i,s),yl(e)}function po(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var r=i.lanes;r&=e.pendingLanes,s|=r,i.lanes=s,Yr(e,s)}}function Vc(e,i){var s=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?c=h=y:h=h.next=y,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var kc=!1;function mo(){if(kc){var e=tr;if(e!==null)throw e}}function go(e,i,s,r){kc=!1;var c=e.updateQueue;Ua=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var I=A,K=I.next;I.next=null,y===null?h=K:y.next=K,y=I;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==y&&(A===null?ft.firstBaseUpdate=K:A.next=K,ft.lastBaseUpdate=I))}if(h!==null){var mt=c.baseState;y=0,ft=K=I=null,A=h;do{var tt=A.lane&-536870913,ot=tt!==A.lane;if(ot?(ge&tt)===tt:(r&tt)===tt){tt!==0&&tt===$s&&(kc=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,$t=A;tt=i;var Ge=s;switch($t.tag){case 1:if(Gt=$t.payload,typeof Gt=="function"){mt=Gt.call(Ge,mt,tt);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=$t.payload,tt=typeof Gt=="function"?Gt.call(Ge,mt,tt):Gt,tt==null)break t;mt=_({},mt,tt);break t;case 2:Ua=!0}}tt=A.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(K=ft=ot,I=mt):ft=ft.next=ot,y|=tt;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ft===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=K,c.lastBaseUpdate=ft,h===null&&(c.shared.lanes=0),Ba|=y,e.lanes=y,e.memoizedState=mt}}function lm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function um(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)lm(s[e],i)}var ir=U(null),Ul=U(0);function cm(e,i){e=aa,gt(Ul,e),gt(ir,i),aa=e|i.baseLanes}function Xc(){gt(Ul,aa),gt(ir,ir.current)}function Wc(){aa=Ul.current,it(ir),it(Ul)}var qn=U(null),li=null;function Oa(e){var i=e.alternate;gt(tn,tn.current&1),gt(qn,e),li===null&&(i===null||ir.current!==null||i.memoizedState!==null)&&(li=e)}function qc(e){gt(tn,tn.current),gt(qn,e),li===null&&(li=e)}function fm(e){e.tag===22?(gt(tn,tn.current),gt(qn,e),li===null&&(li=e)):za()}function za(){gt(tn,tn.current),gt(qn,qn.current)}function Yn(e){it(qn),li===e&&(li=null),it(tn)}var tn=U(0);function Ll(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||$f(s)||th(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qi=0,re=null,Ie=null,sn=null,Nl=!1,ar=!1,Ss=!1,Ol=0,_o=0,sr=null,Yx=0;function Ke(){throw Error(a(321))}function Yc(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Xn(e[s],i[s]))return!1;return!0}function Zc(e,i,s,r,c,h){return Qi=h,re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Zm:cf,Ss=!1,h=s(r,c),Ss=!1,ar&&(h=dm(i,s,r,c)),hm(e),h}function hm(e){F.H=So;var i=Ie!==null&&Ie.next!==null;if(Qi=0,sn=Ie=re=null,Nl=!1,_o=0,sr=null,i)throw Error(a(300));e===null||rn||(e=e.dependencies,e!==null&&bl(e)&&(rn=!0))}function dm(e,i,s,r){re=e;var c=0;do{if(ar&&(sr=null),_o=0,ar=!1,25<=c)throw Error(a(301));if(c+=1,sn=Ie=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=jm,h=i(s,r)}while(ar);return h}function Zx(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?vo(i):i,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(re.flags|=1024),i}function jc(){var e=Ol!==0;return Ol=0,e}function Qc(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Kc(e){if(Nl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Nl=!1}Qi=0,sn=Ie=re=null,ar=!1,_o=Ol=0,sr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?re.memoizedState=sn=e:sn=sn.next=e,sn}function en(){if(Ie===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var i=sn===null?re.memoizedState:sn.next;if(i!==null)sn=i,Ie=e;else{if(e===null)throw re.alternate===null?Error(a(467)):Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},sn===null?re.memoizedState=sn=e:sn=sn.next=e}return sn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var i=_o;return _o+=1,sr===null&&(sr=[]),e=im(sr,e,i),i=re,(sn===null?i.memoizedState:sn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Zm:cf),e}function Pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===O)return bn(e)}throw Error(a(438,String(e)))}function Jc(e){var i=null,s=re.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var r=re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(i={data:r.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=zl(),re.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),r=0;r<e;r++)s[r]=w;return i.index++,s}function Ki(e,i){return typeof i=="function"?i(e):i}function Fl(e){var i=en();return $c(i,Ie,e)}function $c(e,i,s){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=s;var c=e.baseQueue,h=r.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}i.baseQueue=c=h,r.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{i=c.next;var A=y=null,I=null,K=i,ft=!1;do{var mt=K.lane&-536870913;if(mt!==K.lane?(ge&mt)===mt:(Qi&mt)===mt){var tt=K.revertLane;if(tt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),mt===$s&&(ft=!0);else if((Qi&tt)===tt){K=K.next,tt===$s&&(ft=!0);continue}else mt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(A=I=mt,y=h):I=I.next=mt,re.lanes|=tt,Ba|=tt;mt=K.action,Ss&&s(h,mt),h=K.hasEagerState?K.eagerState:s(h,mt)}else tt={lane:mt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},I===null?(A=I=tt,y=h):I=I.next=tt,re.lanes|=mt,Ba|=mt;K=K.next}while(K!==null&&K!==i);if(I===null?y=h:I.next=A,!Xn(h,e.memoizedState)&&(rn=!0,ft&&(s=tr,s!==null)))throw s;e.memoizedState=h,e.baseState=y,e.baseQueue=I,r.lastRenderedState=h}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function tf(e){var i=en(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var r=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var y=c=c.next;do h=e(h,y.action),y=y.next;while(y!==c);Xn(h,i.memoizedState)||(rn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,r]}function pm(e,i,s){var r=re,c=en(),h=ve;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!Xn((Ie||c).memoizedState,s);if(y&&(c.memoizedState=s,rn=!0),c=c.queue,af(_m.bind(null,r,c,e),[e]),c.getSnapshot!==i||y||sn!==null&&sn.memoizedState.tag&1){if(r.flags|=2048,rr(9,{destroy:void 0},gm.bind(null,r,c,s,i),null),Ve===null)throw Error(a(349));h||(Qi&127)!==0||mm(r,i,s)}return s}function mm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=re.updateQueue,i===null?(i=zl(),re.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function gm(e,i,s,r){i.value=s,i.getSnapshot=r,vm(i)&&xm(e)}function _m(e,i,s){return s(function(){vm(i)&&xm(e)})}function vm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Xn(e,s)}catch{return!0}}function xm(e){var i=fs(e,2);i!==null&&Gn(i,e,2)}function ef(e){var i=On();if(typeof e=="function"){var s=e;if(e=s(),Ss){Pt(!0);try{s()}finally{Pt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},i}function Sm(e,i,s,r){return e.baseState=s,$c(e,Ie,typeof r=="function"?r:Ki)}function jx(e,i,s,r,c){if(Hl(e))throw Error(a(485));if(e=i.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};F.T!==null?s(!0):h.isTransition=!1,r(h),s=i.pending,s===null?(h.next=i.pending=h,ym(i,h)):(h.next=s.next,i.pending=s.next=h)}}function ym(e,i){var s=i.action,r=i.payload,c=e.state;if(i.isTransition){var h=F.T,y={};F.T=y;try{var A=s(c,r),I=F.S;I!==null&&I(y,A),Mm(e,i,A)}catch(K){nf(e,i,K)}finally{h!==null&&y.types!==null&&(h.types=y.types),F.T=h}}else try{h=s(c,r),Mm(e,i,h)}catch(K){nf(e,i,K)}}function Mm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(r){Em(e,i,r)},function(r){return nf(e,i,r)}):Em(e,i,s)}function Em(e,i,s){i.status="fulfilled",i.value=s,bm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,ym(e,s)))}function nf(e,i,s){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do i.status="rejected",i.reason=s,bm(i),i=i.next;while(i!==r)}e.action=null}function bm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Tm(e,i){return i}function Am(e,i){if(ve){var s=Ve.formState;if(s!==null){t:{var r=re;if(ve){if(Xe){e:{for(var c=Xe,h=oi;c.nodeType!==8;){if(!h){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Xe=ui(c.nextSibling),r=c.data==="F!";break t}}wa(r)}r=!1}r&&(i=s[0])}}return s=On(),s.memoizedState=s.baseState=i,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tm,lastRenderedState:i},s.queue=r,s=Wm.bind(null,re,r),r.dispatch=s,r=ef(!1),h=uf.bind(null,re,!1,r.queue),r=On(),c={state:i,dispatch:null,action:e,pending:null},r.queue=c,s=jx.bind(null,re,c,h,s),c.dispatch=s,r.memoizedState=e,[i,s,!1]}function Rm(e){var i=en();return Cm(i,Ie,e)}function Cm(e,i,s){if(i=$c(e,i,Tm)[0],e=Fl(Ki)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var r=vo(i)}catch(y){throw y===er?Rl:y}else r=i;i=en();var c=i.queue,h=c.dispatch;return s!==i.memoizedState&&(re.flags|=2048,rr(9,{destroy:void 0},Qx.bind(null,c,s),null)),[r,h,e]}function Qx(e,i){e.action=i}function wm(e){var i=en(),s=Ie;if(s!==null)return Cm(i,s,e);en(),i=i.memoizedState,s=en();var r=s.queue.dispatch;return s.memoizedState=e,[i,r,!1]}function rr(e,i,s,r){return e={tag:e,create:s,deps:r,inst:i,next:null},i=re.updateQueue,i===null&&(i=zl(),re.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(r=s.next,s.next=e,e.next=r,i.lastEffect=e),e}function Dm(){return en().memoizedState}function Bl(e,i,s,r){var c=On();re.flags|=e,c.memoizedState=rr(1|i,{destroy:void 0},s,r===void 0?null:r)}function Il(e,i,s,r){var c=en();r=r===void 0?null:r;var h=c.memoizedState.inst;Ie!==null&&r!==null&&Yc(r,Ie.memoizedState.deps)?c.memoizedState=rr(i,h,s,r):(re.flags|=e,c.memoizedState=rr(1|i,h,s,r))}function Um(e,i){Bl(8390656,8,e,i)}function af(e,i){Il(2048,8,e,i)}function Kx(e){re.flags|=4;var i=re.updateQueue;if(i===null)i=zl(),re.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function Lm(e){var i=en().memoizedState;return Kx({ref:i,nextImpl:e}),function(){if((we&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Nm(e,i){return Il(4,2,e,i)}function Om(e,i){return Il(4,4,e,i)}function zm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Pm(e,i,s){s=s!=null?s.concat([e]):null,Il(4,4,zm.bind(null,i,e),s)}function sf(){}function Fm(e,i){var s=en();i=i===void 0?null:i;var r=s.memoizedState;return i!==null&&Yc(i,r[1])?r[0]:(s.memoizedState=[e,i],e)}function Bm(e,i){var s=en();i=i===void 0?null:i;var r=s.memoizedState;if(i!==null&&Yc(i,r[1]))return r[0];if(r=e(),Ss){Pt(!0);try{e()}finally{Pt(!1)}}return s.memoizedState=[r,i],r}function rf(e,i,s){return s===void 0||(Qi&1073741824)!==0&&(ge&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=I0(),re.lanes|=e,Ba|=e,s)}function Im(e,i,s,r){return Xn(s,i)?s:ir.current!==null?(e=rf(e,s,r),Xn(e,i)||(rn=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(ge&261930)===0?(rn=!0,e.memoizedState=s):(e=I0(),re.lanes|=e,Ba|=e,i)}function Hm(e,i,s,r,c){var h=H.p;H.p=h!==0&&8>h?h:8;var y=F.T,A={};F.T=A,uf(e,!1,i,s);try{var I=c(),K=F.S;if(K!==null&&K(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=qx(I,r);xo(e,i,ft,Qn(e))}else xo(e,i,r,Qn(e))}catch(mt){xo(e,i,{then:function(){},status:"rejected",reason:mt},Qn())}finally{H.p=h,y!==null&&A.types!==null&&(y.types=A.types),F.T=y}}function Jx(){}function of(e,i,s,r){if(e.tag!==5)throw Error(a(476));var c=Gm(e).queue;Hm(e,c,i,J,s===null?Jx:function(){return Vm(e),s(r)})}function Gm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:J},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Vm(e){var i=Gm(e);i.next===null&&(i=e.alternate.memoizedState),xo(e,i.next.queue,{},Qn())}function lf(){return bn(Po)}function km(){return en().memoizedState}function Xm(){return en().memoizedState}function $x(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Qn();e=La(s);var r=Na(i,e,s);r!==null&&(Gn(r,i,s),po(r,i,s)),i={cache:Pc()},e.payload=i;return}i=i.return}}function tS(e,i,s){var r=Qn();s={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Hl(e)?qm(i,s):(s=Tc(e,i,s,r),s!==null&&(Gn(s,e,r),Ym(s,i,r)))}function Wm(e,i,s){var r=Qn();xo(e,i,s,r)}function xo(e,i,s,r){var c={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))qm(i,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var y=i.lastRenderedState,A=h(y,s);if(c.hasEagerState=!0,c.eagerState=A,Xn(A,y))return Sl(e,i,c,0),Ve===null&&xl(),!1}catch{}if(s=Tc(e,i,c,r),s!==null)return Gn(s,e,r),Ym(s,i,r),!0}return!1}function uf(e,i,s,r){if(r={lane:2,revertLane:Gf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(i)throw Error(a(479))}else i=Tc(e,s,r,2),i!==null&&Gn(i,e,2)}function Hl(e){var i=e.alternate;return e===re||i!==null&&i===re}function qm(e,i){ar=Nl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Ym(e,i,s){if((s&4194048)!==0){var r=i.lanes;r&=e.pendingLanes,s|=r,i.lanes=s,Yr(e,s)}}var So={readContext:bn,use:Pl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};So.useEffectEvent=Ke;var Zm={readContext:bn,use:Pl,useCallback:function(e,i){return On().memoizedState=[e,i===void 0?null:i],e},useContext:bn,useEffect:Um,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Bl(4194308,4,zm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Bl(4194308,4,e,i)},useInsertionEffect:function(e,i){Bl(4,2,e,i)},useMemo:function(e,i){var s=On();i=i===void 0?null:i;var r=e();if(Ss){Pt(!0);try{e()}finally{Pt(!1)}}return s.memoizedState=[r,i],r},useReducer:function(e,i,s){var r=On();if(s!==void 0){var c=s(i);if(Ss){Pt(!0);try{s(i)}finally{Pt(!1)}}}else c=i;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=tS.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var i=On();return e={current:e},i.memoizedState=e},useState:function(e){e=ef(e);var i=e.queue,s=Wm.bind(null,re,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:sf,useDeferredValue:function(e,i){var s=On();return rf(s,e,i)},useTransition:function(){var e=ef(!1);return e=Hm.bind(null,re,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var r=re,c=On();if(ve){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ve===null)throw Error(a(349));(ge&127)!==0||mm(r,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,Um(_m.bind(null,r,h,e),[e]),r.flags|=2048,rr(9,{destroy:void 0},gm.bind(null,r,h,s,i),null),s},useId:function(){var e=On(),i=Ve.identifierPrefix;if(ve){var s=Di,r=wi;s=(r&~(1<<32-Ot(r)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Ol++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Yx++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:lf,useFormState:Am,useActionState:Am,useOptimistic:function(e){var i=On();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=uf.bind(null,re,!0,s),s.dispatch=i,[e,i]},useMemoCache:Jc,useCacheRefresh:function(){return On().memoizedState=$x.bind(null,re)},useEffectEvent:function(e){var i=On(),s={impl:e};return i.memoizedState=s,function(){if((we&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},cf={readContext:bn,use:Pl,useCallback:Fm,useContext:bn,useEffect:af,useImperativeHandle:Pm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:Bm,useReducer:Fl,useRef:Dm,useState:function(){return Fl(Ki)},useDebugValue:sf,useDeferredValue:function(e,i){var s=en();return Im(s,Ie.memoizedState,e,i)},useTransition:function(){var e=Fl(Ki)[0],i=en().memoizedState;return[typeof e=="boolean"?e:vo(e),i]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:lf,useFormState:Rm,useActionState:Rm,useOptimistic:function(e,i){var s=en();return Sm(s,Ie,e,i)},useMemoCache:Jc,useCacheRefresh:Xm};cf.useEffectEvent=Lm;var jm={readContext:bn,use:Pl,useCallback:Fm,useContext:bn,useEffect:af,useImperativeHandle:Pm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:Bm,useReducer:tf,useRef:Dm,useState:function(){return tf(Ki)},useDebugValue:sf,useDeferredValue:function(e,i){var s=en();return Ie===null?rf(s,e,i):Im(s,Ie.memoizedState,e,i)},useTransition:function(){var e=tf(Ki)[0],i=en().memoizedState;return[typeof e=="boolean"?e:vo(e),i]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:lf,useFormState:wm,useActionState:wm,useOptimistic:function(e,i){var s=en();return Ie!==null?Sm(s,Ie,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Jc,useCacheRefresh:Xm};jm.useEffectEvent=Lm;function ff(e,i,s,r){i=e.memoizedState,s=s(r,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var hf={enqueueSetState:function(e,i,s){e=e._reactInternals;var r=Qn(),c=La(r);c.payload=i,s!=null&&(c.callback=s),i=Na(e,c,r),i!==null&&(Gn(i,e,r),po(i,e,r))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var r=Qn(),c=La(r);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=Na(e,c,r),i!==null&&(Gn(i,e,r),po(i,e,r))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Qn(),r=La(s);r.tag=2,i!=null&&(r.callback=i),i=Na(e,r,s),i!==null&&(Gn(i,e,s),po(i,e,s))}};function Qm(e,i,s,r,c,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,h,y):i.prototype&&i.prototype.isPureReactComponent?!so(s,r)||!so(c,h):!0}function Km(e,i,s,r){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,r),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,r),i.state!==e&&hf.enqueueReplaceState(i,i.state,null)}function ys(e,i){var s=i;if("ref"in i){s={};for(var r in i)r!=="ref"&&(s[r]=i[r])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var c in e)s[c]===void 0&&(s[c]=e[c])}return s}function Jm(e){vl(e)}function $m(e){console.error(e)}function t0(e){vl(e)}function Gl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(r){setTimeout(function(){throw r})}}function e0(e,i,s){try{var r=e.onCaughtError;r(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function df(e,i,s){return s=La(s),s.tag=3,s.payload={element:null},s.callback=function(){Gl(e,i)},s}function n0(e){return e=La(e),e.tag=3,e}function i0(e,i,s,r){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var h=r.value;e.payload=function(){return c(h)},e.callback=function(){e0(i,s,r)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){e0(i,s,r),typeof c!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function eS(e,i,s,r,c){if(s.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(i=s.alternate,i!==null&&Js(i,s,c,!0),s=qn.current,s!==null){switch(s.tag){case 31:case 13:return li===null?$l():s.alternate===null&&Je===0&&(Je=3),s.flags&=-257,s.flags|=65536,s.lanes=c,r===Cl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([r]):i.add(r),Bf(e,r,c)),!1;case 22:return s.flags|=65536,r===Cl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([r])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([r]):s.add(r)),Bf(e,r,c)),!1}throw Error(a(435,s.tag))}return Bf(e,r,c),$l(),!1}if(ve)return i=qn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,r!==Uc&&(e=Error(a(422),{cause:r}),lo(ai(e,s)))):(r!==Uc&&(i=Error(a(423),{cause:r}),lo(ai(i,s))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ai(r,s),c=df(e.stateNode,r,c),Vc(e,c),Je!==4&&(Je=2)),!1;var h=Error(a(520),{cause:r});if(h=ai(h,s),Co===null?Co=[h]:Co.push(h),Je!==4&&(Je=2),i===null)return!0;r=ai(r,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=c&-c,s.lanes|=e,e=df(s.stateNode,r,e),Vc(s,e),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ia===null||!Ia.has(h))))return s.flags|=65536,c&=-c,s.lanes|=c,c=n0(c),i0(c,e,s,r),Vc(s,c),!1}s=s.return}while(s!==null);return!1}var pf=Error(a(461)),rn=!1;function Tn(e,i,s,r){i.child=e===null?om(i,null,s,r):xs(i,e.child,s,r)}function a0(e,i,s,r,c){s=s.render;var h=i.ref;if("ref"in r){var y={};for(var A in r)A!=="ref"&&(y[A]=r[A])}else y=r;return ms(i),r=Zc(e,i,s,y,h,c),A=jc(),e!==null&&!rn?(Qc(e,i,c),Ji(e,i,c)):(ve&&A&&wc(i),i.flags|=1,Tn(e,i,r,c),i.child)}function s0(e,i,s,r,c){if(e===null){var h=s.type;return typeof h=="function"&&!Ac(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,r0(e,i,h,r,c)):(e=Ml(s.type,null,r,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!Mf(e,c)){var y=h.memoizedProps;if(s=s.compare,s=s!==null?s:so,s(y,r)&&e.ref===i.ref)return Ji(e,i,c)}return i.flags|=1,e=qi(h,r),e.ref=i.ref,e.return=i,i.child=e}function r0(e,i,s,r,c){if(e!==null){var h=e.memoizedProps;if(so(h,r)&&e.ref===i.ref)if(rn=!1,i.pendingProps=r=h,Mf(e,c))(e.flags&131072)!==0&&(rn=!0);else return i.lanes=e.lanes,Ji(e,i,c)}return mf(e,i,s,r,c)}function o0(e,i,s,r){var c=r.children,h=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,e!==null){for(r=i.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~h}else r=0,i.child=null;return l0(e,i,h,s,r)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(i,h!==null?h.cachePool:null),h!==null?cm(i,h):Xc(),fm(i);else return r=i.lanes=536870912,l0(e,i,h!==null?h.baseLanes|s:s,s,r)}else h!==null?(Al(i,h.cachePool),cm(i,h),za(),i.memoizedState=null):(e!==null&&Al(i,null),Xc(),za());return Tn(e,i,c,s),i.child}function yo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function l0(e,i,s,r,c){var h=Bc();return h=h===null?null:{parent:an._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&Al(i,null),Xc(),fm(i),e!==null&&Js(e,i,r,!0),i.childLanes=c,null}function Vl(e,i){return i=Xl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function u0(e,i,s){return xs(i,e.child,null,s),e=Vl(i,i.pendingProps),e.flags|=2,Yn(i),i.memoizedState=null,e}function nS(e,i,s){var r=i.pendingProps,c=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(ve){if(r.mode==="hidden")return e=Vl(i,r),i.lanes=536870912,yo(null,e);if(qc(i),(e=Xe)?(e=yg(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},s=qp(e),s.return=i,i.child=s,En=i,Xe=null)):e=null,e===null)throw wa(i);return i.lanes=536870912,null}return Vl(i,r)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(qc(i),c)if(i.flags&256)i.flags&=-257,i=u0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(rn||Js(e,i,s,!1),c=(s&e.childLanes)!==0,rn||c){if(r=Ve,r!==null&&(y=Fs(r,s),y!==0&&y!==h.retryLane))throw h.retryLane=y,fs(e,y),Gn(r,e,y),pf;$l(),i=u0(e,i,s)}else e=h.treeContext,Xe=ui(y.nextSibling),En=i,ve=!0,Ca=null,oi=!1,e!==null&&jp(i,e),i=Vl(i,r),i.flags|=4096;return i}return e=qi(e.child,{mode:r.mode,children:r.children}),e.ref=i.ref,i.child=e,e.return=i,e}function kl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function mf(e,i,s,r,c){return ms(i),s=Zc(e,i,s,r,void 0,c),r=jc(),e!==null&&!rn?(Qc(e,i,c),Ji(e,i,c)):(ve&&r&&wc(i),i.flags|=1,Tn(e,i,s,c),i.child)}function c0(e,i,s,r,c,h){return ms(i),i.updateQueue=null,s=dm(i,r,s,c),hm(e),r=jc(),e!==null&&!rn?(Qc(e,i,h),Ji(e,i,h)):(ve&&r&&wc(i),i.flags|=1,Tn(e,i,s,h),i.child)}function f0(e,i,s,r,c){if(ms(i),i.stateNode===null){var h=Zs,y=s.contextType;typeof y=="object"&&y!==null&&(h=bn(y)),h=new s(r,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=hf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=r,h.state=i.memoizedState,h.refs={},Hc(i),y=s.contextType,h.context=typeof y=="object"&&y!==null?bn(y):Zs,h.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(ff(i,s,y,r),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&hf.enqueueReplaceState(h,h.state,null),go(i,r,h,c),mo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),r=!0}else if(e===null){h=i.stateNode;var A=i.memoizedProps,I=ys(s,A);h.props=I;var K=h.context,ft=s.contextType;y=Zs,typeof ft=="object"&&ft!==null&&(y=bn(ft));var mt=s.getDerivedStateFromProps;ft=typeof mt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ft||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||K!==y)&&Km(i,h,r,y),Ua=!1;var tt=i.memoizedState;h.state=tt,go(i,r,h,c),mo(),K=i.memoizedState,A||tt!==K||Ua?(typeof mt=="function"&&(ff(i,s,mt,r),K=i.memoizedState),(I=Ua||Qm(i,s,I,r,tt,K,y))?(ft||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=r,i.memoizedState=K),h.props=r,h.state=K,h.context=y,r=I):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),r=!1)}else{h=i.stateNode,Gc(e,i),y=i.memoizedProps,ft=ys(s,y),h.props=ft,mt=i.pendingProps,tt=h.context,K=s.contextType,I=Zs,typeof K=="object"&&K!==null&&(I=bn(K)),A=s.getDerivedStateFromProps,(K=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==mt||tt!==I)&&Km(i,h,r,I),Ua=!1,tt=i.memoizedState,h.state=tt,go(i,r,h,c),mo();var ot=i.memoizedState;y!==mt||tt!==ot||Ua||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof A=="function"&&(ff(i,s,A,r),ot=i.memoizedState),(ft=Ua||Qm(i,s,ft,r,tt,ot,I)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(K||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,ot,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,ot,I)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),i.memoizedProps=r,i.memoizedState=ot),h.props=r,h.state=ot,h.context=I,r=ft):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&tt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&tt===e.memoizedState||(i.flags|=1024),r=!1)}return h=r,kl(e,i),r=(i.flags&128)!==0,h||r?(h=i.stateNode,s=r&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&r?(i.child=xs(i,e.child,null,c),i.child=xs(i,null,s,c)):Tn(e,i,s,c),i.memoizedState=h.state,e=i.child):e=Ji(e,i,c),e}function h0(e,i,s,r){return ds(),i.flags|=256,Tn(e,i,s,r),i.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(e){return{baseLanes:e,cachePool:em()}}function vf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=jn),e}function d0(e,i,s){var r=i.pendingProps,c=!1,h=(i.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),y&&(c=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(ve){if(c?Oa(i):za(),(e=Xe)?(e=yg(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},s=qp(e),s.return=i,i.child=s,En=i,Xe=null)):e=null,e===null)throw wa(i);return th(e)?i.lanes=32:i.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(za(),c=i.mode,A=Xl({mode:"hidden",children:A},c),r=hs(r,c,s,null),A.return=i,r.return=i,A.sibling=r,i.child=A,r=i.child,r.memoizedState=_f(s),r.childLanes=vf(e,y,s),i.memoizedState=gf,yo(null,r)):(Oa(i),xf(i,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(h)i.flags&256?(Oa(i),i.flags&=-257,i=Sf(e,i,s)):i.memoizedState!==null?(za(),i.child=e.child,i.flags|=128,i=null):(za(),A=r.fallback,c=i.mode,r=Xl({mode:"visible",children:r.children},c),A=hs(A,c,s,null),A.flags|=2,r.return=i,A.return=i,r.sibling=A,i.child=r,xs(i,e.child,null,s),r=i.child,r.memoizedState=_f(s),r.childLanes=vf(e,y,s),i.memoizedState=gf,i=yo(null,r));else if(Oa(i),th(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var K=y.dgst;y=K,r=Error(a(419)),r.stack="",r.digest=y,lo({value:r,source:null,stack:null}),i=Sf(e,i,s)}else if(rn||Js(e,i,s,!1),y=(s&e.childLanes)!==0,rn||y){if(y=Ve,y!==null&&(r=Fs(y,s),r!==0&&r!==I.retryLane))throw I.retryLane=r,fs(e,r),Gn(y,e,r),pf;$f(A)||$l(),i=Sf(e,i,s)}else $f(A)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,Xe=ui(A.nextSibling),En=i,ve=!0,Ca=null,oi=!1,e!==null&&jp(i,e),i=xf(i,r.children),i.flags|=4096);return i}return c?(za(),A=r.fallback,c=i.mode,I=e.child,K=I.sibling,r=qi(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,K!==null?A=qi(K,A):(A=hs(A,c,s,null),A.flags|=2),A.return=i,r.return=i,r.sibling=A,i.child=r,yo(null,r),r=i.child,A=e.child.memoizedState,A===null?A=_f(s):(c=A.cachePool,c!==null?(I=an._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=em(),A={baseLanes:A.baseLanes|s,cachePool:c}),r.memoizedState=A,r.childLanes=vf(e,y,s),i.memoizedState=gf,yo(e.child,r)):(Oa(i),s=e.child,e=s.sibling,s=qi(s,{mode:"visible",children:r.children}),s.return=i,s.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=s,i.memoizedState=null,s)}function xf(e,i){return i=Xl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Xl(e,i){return e=Wn(22,e,null,i),e.lanes=0,e}function Sf(e,i,s){return xs(i,e.child,null,s),e=xf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function p0(e,i,s){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i),Oc(e.return,i,s)}function yf(e,i,s,r,c,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:c,treeForkCount:h}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=s,y.tailMode=c,y.treeForkCount=h)}function m0(e,i,s){var r=i.pendingProps,c=r.revealOrder,h=r.tail;r=r.children;var y=tn.current,A=(y&2)!==0;if(A?(y=y&1|2,i.flags|=128):y&=1,gt(tn,y),Tn(e,i,r,s),r=ve?oo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&p0(e,s,i);else if(e.tag===19)p0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(s=i.child,c=null;s!==null;)e=s.alternate,e!==null&&Ll(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),yf(i,!1,c,s,h,r);break;case"backwards":case"unstable_legacy-backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&Ll(e)===null){i.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}yf(i,!0,s,null,h,r);break;case"together":yf(i,!1,null,null,void 0,r);break;default:i.memoizedState=null}return i.child}function Ji(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ba|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Js(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=qi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=qi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Mf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function iS(e,i,s){switch(i.tag){case 3:wt(i,i.stateNode.containerInfo),Da(i,an,e.memoizedState.cache),ds();break;case 27:case 5:It(i);break;case 4:wt(i,i.stateNode.containerInfo);break;case 10:Da(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,qc(i),null;break;case 13:var r=i.memoizedState;if(r!==null)return r.dehydrated!==null?(Oa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?d0(e,i,s):(Oa(i),e=Ji(e,i,s),e!==null?e.sibling:null);Oa(i);break;case 19:var c=(e.flags&128)!==0;if(r=(s&i.childLanes)!==0,r||(Js(e,i,s,!1),r=(s&i.childLanes)!==0),c){if(r)return m0(e,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt(tn,tn.current),r)break;return null;case 22:return i.lanes=0,o0(e,i,s,i.pendingProps);case 24:Da(i,an,e.memoizedState.cache)}return Ji(e,i,s)}function g0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)rn=!0;else{if(!Mf(e,s)&&(i.flags&128)===0)return rn=!1,iS(e,i,s);rn=(e.flags&131072)!==0}else rn=!1,ve&&(i.flags&1048576)!==0&&Zp(i,oo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var r=i.pendingProps;if(e=_s(i.elementType),i.type=e,typeof e=="function")Ac(e)?(r=ys(e,r),i.tag=1,i=f0(null,i,e,r,s)):(i.tag=0,i=mf(null,i,e,r,s));else{if(e!=null){var c=e.$$typeof;if(c===N){i.tag=11,i=a0(null,i,e,r,s);break t}else if(c===L){i.tag=14,i=s0(null,i,e,r,s);break t}}throw i=ht(e)||e,Error(a(306,i,""))}}return i;case 0:return mf(e,i,i.type,i.pendingProps,s);case 1:return r=i.type,c=ys(r,i.pendingProps),f0(e,i,r,c,s);case 3:t:{if(wt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));r=i.pendingProps;var h=i.memoizedState;c=h.element,Gc(e,i),go(i,r,null,s);var y=i.memoizedState;if(r=y.cache,Da(i,an,r),r!==h.cache&&zc(i,[an],s,!0),mo(),r=y.element,h.isDehydrated)if(h={element:r,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=h0(e,i,r,s);break t}else if(r!==c){c=ai(Error(a(424)),i),lo(c),i=h0(e,i,r,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Xe=ui(e.firstChild),En=i,ve=!0,Ca=null,oi=!0,s=om(i,null,r,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ds(),r===c){i=Ji(e,i,s);break t}Tn(e,i,r,s)}i=i.child}return i;case 26:return kl(e,i),e===null?(s=Rg(i.type,null,i.pendingProps,null))?i.memoizedState=s:ve||(s=i.type,e=i.pendingProps,r=ru(et.current).createElement(s),r[nn]=i,r[_n]=e,An(r,s,e),R(r),i.stateNode=r):i.memoizedState=Rg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return It(i),e===null&&ve&&(r=i.stateNode=bg(i.type,i.pendingProps,et.current),En=i,oi=!0,c=Xe,ka(i.type)?(eh=c,Xe=ui(r.firstChild)):Xe=c),Tn(e,i,i.pendingProps.children,s),kl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&ve&&((c=r=Xe)&&(r=NS(r,i.type,i.pendingProps,oi),r!==null?(i.stateNode=r,En=i,Xe=ui(r.firstChild),oi=!1,c=!0):c=!1),c||wa(i)),It(i),c=i.type,h=i.pendingProps,y=e!==null?e.memoizedProps:null,r=h.children,Qf(c,h)?r=null:y!==null&&Qf(c,y)&&(i.flags|=32),i.memoizedState!==null&&(c=Zc(e,i,Zx,null,null,s),Po._currentValue=c),kl(e,i),Tn(e,i,r,s),i.child;case 6:return e===null&&ve&&((e=s=Xe)&&(s=OS(s,i.pendingProps,oi),s!==null?(i.stateNode=s,En=i,Xe=null,e=!0):e=!1),e||wa(i)),null;case 13:return d0(e,i,s);case 4:return wt(i,i.stateNode.containerInfo),r=i.pendingProps,e===null?i.child=xs(i,null,r,s):Tn(e,i,r,s),i.child;case 11:return a0(e,i,i.type,i.pendingProps,s);case 7:return Tn(e,i,i.pendingProps,s),i.child;case 8:return Tn(e,i,i.pendingProps.children,s),i.child;case 12:return Tn(e,i,i.pendingProps.children,s),i.child;case 10:return r=i.pendingProps,Da(i,i.type,r.value),Tn(e,i,r.children,s),i.child;case 9:return c=i.type._context,r=i.pendingProps.children,ms(i),c=bn(c),r=r(c),i.flags|=1,Tn(e,i,r,s),i.child;case 14:return s0(e,i,i.type,i.pendingProps,s);case 15:return r0(e,i,i.type,i.pendingProps,s);case 19:return m0(e,i,s);case 31:return nS(e,i,s);case 22:return o0(e,i,s,i.pendingProps);case 24:return ms(i),r=bn(an),e===null?(c=Bc(),c===null&&(c=Ve,h=Pc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=s),c=h),i.memoizedState={parent:r,cache:c},Hc(i),Da(i,an,c)):((e.lanes&s)!==0&&(Gc(e,i),go(i,null,null,s),mo()),c=e.memoizedState,h=i.memoizedState,c.parent!==r?(c={parent:r,cache:r},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Da(i,an,r)):(r=h.cache,Da(i,an,r),r!==c.cache&&zc(i,[an],s,!0))),Tn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function $i(e){e.flags|=4}function Ef(e,i,s,r,c){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(k0())e.flags|=8192;else throw vs=Cl,Ic}else e.flags&=-16777217}function _0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lg(i))if(k0())e.flags|=8192;else throw vs=Cl,Ic}function Wl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ne():536870912,e.lanes|=i,cr|=i)}function Mo(e,i){if(!ve)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,r=0;if(i)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=s,i}function aS(e,i,s){var r=i.pendingProps;switch(Dc(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(i),null;case 1:return We(i),null;case 3:return s=i.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ji(an),Vt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ks(i)?$i(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Lc())),We(i),null;case 26:var c=i.type,h=i.memoizedState;return e===null?($i(i),h!==null?(We(i),_0(i,h)):(We(i),Ef(i,c,null,r,s))):h?h!==e.memoizedState?($i(i),We(i),_0(i,h)):(We(i),i.flags&=-16777217):(e=e.memoizedProps,e!==r&&$i(i),We(i),Ef(i,c,e,r,s)),null;case 27:if(fe(i),s=et.current,c=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==r&&$i(i);else{if(!r){if(i.stateNode===null)throw Error(a(166));return We(i),null}e=Tt.current,Ks(i)?Qp(i):(e=bg(c,r,s),i.stateNode=e,$i(i))}return We(i),null;case 5:if(fe(i),c=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==r&&$i(i);else{if(!r){if(i.stateNode===null)throw Error(a(166));return We(i),null}if(h=Tt.current,Ks(i))Qp(i);else{var y=ru(et.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?h.multiple=!0:r.size&&(h.size=r.size);break;default:h=typeof r.is=="string"?y.createElement(c,{is:r.is}):y.createElement(c)}}h[nn]=i,h[_n]=r;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=h;t:switch(An(h,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&$i(i)}}return We(i),Ef(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==r&&$i(i);else{if(typeof r!="string"&&i.stateNode===null)throw Error(a(166));if(e=et.current,Ks(i)){if(e=i.stateNode,s=i.memoizedProps,r=null,c=En,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[nn]=i,e=!!(e.nodeValue===s||r!==null&&r.suppressHydrationWarning===!0||dg(e.nodeValue,s)),e||wa(i,!0)}else e=ru(e).createTextNode(r),e[nn]=i,i.stateNode=e}return We(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(r=Ks(i),s!==null){if(e===null){if(!r)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[nn]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;We(i),e=!1}else s=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(Yn(i),i):(Yn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return We(i),null;case 13:if(r=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ks(i),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[nn]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;We(i),c=!1}else c=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(Yn(i),i):(Yn(i),null)}return Yn(i),(i.flags&128)!==0?(i.lanes=s,i):(s=r!==null,e=e!==null&&e.memoizedState!==null,s&&(r=i.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==c&&(r.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Wl(i,i.updateQueue),We(i),null);case 4:return Vt(),e===null&&Wf(i.stateNode.containerInfo),We(i),null;case 10:return ji(i.type),We(i),null;case 19:if(it(tn),r=i.memoizedState,r===null)return We(i),null;if(c=(i.flags&128)!==0,h=r.rendering,h===null)if(c)Mo(r,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=Ll(e),h!==null){for(i.flags|=128,Mo(r,!1),e=h.updateQueue,i.updateQueue=e,Wl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Wp(s,e),s=s.sibling;return gt(tn,tn.current&1|2),ve&&Yi(i,r.treeForkCount),i.child}e=e.sibling}r.tail!==null&&b()>Ql&&(i.flags|=128,c=!0,Mo(r,!1),i.lanes=4194304)}else{if(!c)if(e=Ll(h),e!==null){if(i.flags|=128,c=!0,e=e.updateQueue,i.updateQueue=e,Wl(i,e),Mo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!h.alternate&&!ve)return We(i),null}else 2*b()-r.renderingStartTime>Ql&&s!==536870912&&(i.flags|=128,c=!0,Mo(r,!1),i.lanes=4194304);r.isBackwards?(h.sibling=i.child,i.child=h):(e=r.last,e!==null?e.sibling=h:i.child=h,r.last=h)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=b(),e.sibling=null,s=tn.current,gt(tn,c?s&1|2:s&1),ve&&Yi(i,r.treeForkCount),e):(We(i),null);case 22:case 23:return Yn(i),Wc(),r=i.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(i.flags|=8192):r&&(i.flags|=8192),r?(s&536870912)!==0&&(i.flags&128)===0&&(We(i),i.subtreeFlags&6&&(i.flags|=8192)):We(i),s=i.updateQueue,s!==null&&Wl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048),e!==null&&it(gs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ji(an),We(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function sS(e,i){switch(Dc(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ji(an),Vt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return fe(i),null;case 31:if(i.memoizedState!==null){if(Yn(i),i.alternate===null)throw Error(a(340));ds()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Yn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ds()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(tn),null;case 4:return Vt(),null;case 10:return ji(i.type),null;case 22:case 23:return Yn(i),Wc(),e!==null&&it(gs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ji(an),null;case 25:return null;default:return null}}function v0(e,i){switch(Dc(i),i.tag){case 3:ji(an),Vt();break;case 26:case 27:case 5:fe(i);break;case 4:Vt();break;case 31:i.memoizedState!==null&&Yn(i);break;case 13:Yn(i);break;case 19:it(tn);break;case 10:ji(i.type);break;case 22:case 23:Yn(i),Wc(),e!==null&&it(gs);break;case 24:ji(an)}}function Eo(e,i){try{var s=i.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var c=r.next;s=c;do{if((s.tag&e)===e){r=void 0;var h=s.create,y=s.inst;r=h(),y.destroy=r}s=s.next}while(s!==c)}}catch(A){Pe(i,i.return,A)}}function Pa(e,i,s){try{var r=i.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var h=c.next;r=h;do{if((r.tag&e)===e){var y=r.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,c=i;var I=s,K=A;try{K()}catch(ft){Pe(c,I,ft)}}}r=r.next}while(r!==h)}}catch(ft){Pe(i,i.return,ft)}}function x0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{um(i,s)}catch(r){Pe(e,e.return,r)}}}function S0(e,i,s){s.props=ys(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(r){Pe(e,i,r)}}function bo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof s=="function"?e.refCleanup=s(r):s.current=r}}catch(c){Pe(e,i,c)}}function Ui(e,i){var s=e.ref,r=e.refCleanup;if(s!==null)if(typeof r=="function")try{r()}catch(c){Pe(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Pe(e,i,c)}else s.current=null}function y0(e){var i=e.type,s=e.memoizedProps,r=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break t;case"img":s.src?r.src=s.src:s.srcSet&&(r.srcset=s.srcSet)}}catch(c){Pe(e,e.return,c)}}function bf(e,i,s){try{var r=e.stateNode;RS(r,e.type,s,i),r[_n]=i}catch(c){Pe(e,e.return,c)}}function M0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||M0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,i,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Xi));else if(r!==4&&(r===27&&ka(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Af(e,i,s),e=e.sibling;e!==null;)Af(e,i,s),e=e.sibling}function ql(e,i,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(r!==4&&(r===27&&ka(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ql(e,i,s),e=e.sibling;e!==null;)ql(e,i,s),e=e.sibling}function E0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var r=e.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);An(i,r,s),i[nn]=e,i[_n]=s}catch(h){Pe(e,e.return,h)}}var ta=!1,on=!1,Rf=!1,b0=typeof WeakSet=="function"?WeakSet:Set,mn=null;function rS(e,i){if(e=e.containerInfo,Zf=du,e=Pp(e),xc(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var c=r.anchorOffset,h=r.focusNode;r=r.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break t}var y=0,A=-1,I=-1,K=0,ft=0,mt=e,tt=null;e:for(;;){for(var ot;mt!==s||c!==0&&mt.nodeType!==3||(A=y+c),mt!==h||r!==0&&mt.nodeType!==3||(I=y+r),mt.nodeType===3&&(y+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===e)break e;if(tt===s&&++K===c&&(A=y),tt===h&&++ft===r&&(I=y),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(jf={focusedElem:e,selectionRange:s},du=!1,mn=i;mn!==null;)if(i=mn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,mn=e;else for(;mn!==null;){switch(i=mn,h=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)c=e[s],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,s=i,c=h.memoizedProps,h=h.memoizedState,r=s.stateNode;try{var Gt=ys(s.type,c);e=r.getSnapshotBeforeUpdate(Gt,h),r.__reactInternalSnapshotBeforeUpdate=e}catch($t){Pe(s,s.return,$t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Jf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,mn=e;break}mn=i.return}}function T0(e,i,s){var r=s.flags;switch(s.tag){case 0:case 11:case 15:na(e,s),r&4&&Eo(5,s);break;case 1:if(na(e,s),r&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(y){Pe(s,s.return,y)}else{var c=ys(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Pe(s,s.return,y)}}r&64&&x0(s),r&512&&bo(s,s.return);break;case 3:if(na(e,s),r&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{um(e,i)}catch(y){Pe(s,s.return,y)}}break;case 27:i===null&&r&4&&E0(s);case 26:case 5:na(e,s),i===null&&r&4&&y0(s),r&512&&bo(s,s.return);break;case 12:na(e,s);break;case 31:na(e,s),r&4&&C0(e,s);break;case 13:na(e,s),r&4&&w0(e,s),r&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=mS.bind(null,s),zS(e,s))));break;case 22:if(r=s.memoizedState!==null||ta,!r){i=i!==null&&i.memoizedState!==null||on,c=ta;var h=on;ta=r,(on=i)&&!h?ia(e,s,(s.subtreeFlags&8772)!==0):na(e,s),ta=c,on=h}break;case 30:break;default:na(e,s)}}function A0(e){var i=e.alternate;i!==null&&(e.alternate=null,A0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Kr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Fn=!1;function ea(e,i,s){for(s=s.child;s!==null;)R0(e,i,s),s=s.sibling}function R0(e,i,s){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,s)}catch{}switch(s.tag){case 26:on||Ui(s,i),ea(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:on||Ui(s,i);var r=Ze,c=Fn;ka(s.type)&&(Ze=s.stateNode,Fn=!1),ea(e,i,s),No(s.stateNode),Ze=r,Fn=c;break;case 5:on||Ui(s,i);case 6:if(r=Ze,c=Fn,Ze=null,ea(e,i,s),Ze=r,Fn=c,Ze!==null)if(Fn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(h){Pe(s,i,h)}else try{Ze.removeChild(s.stateNode)}catch(h){Pe(s,i,h)}break;case 18:Ze!==null&&(Fn?(e=Ze,xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),vr(e)):xg(Ze,s.stateNode));break;case 4:r=Ze,c=Fn,Ze=s.stateNode.containerInfo,Fn=!0,ea(e,i,s),Ze=r,Fn=c;break;case 0:case 11:case 14:case 15:Pa(2,s,i),on||Pa(4,s,i),ea(e,i,s);break;case 1:on||(Ui(s,i),r=s.stateNode,typeof r.componentWillUnmount=="function"&&S0(s,i,r)),ea(e,i,s);break;case 21:ea(e,i,s);break;case 22:on=(r=on)||s.memoizedState!==null,ea(e,i,s),on=r;break;default:ea(e,i,s)}}function C0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vr(e)}catch(s){Pe(i,i.return,s)}}}function w0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vr(e)}catch(s){Pe(i,i.return,s)}}function oS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new b0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new b0),i;default:throw Error(a(435,e.tag))}}function Yl(e,i){var s=oS(e);i.forEach(function(r){if(!s.has(r)){s.add(r);var c=gS.bind(null,e,r);r.then(c,c)}})}function Bn(e,i){var s=i.deletions;if(s!==null)for(var r=0;r<s.length;r++){var c=s[r],h=e,y=i,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(ka(A.type)){Ze=A.stateNode,Fn=!1;break t}break;case 5:Ze=A.stateNode,Fn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(Ze===null)throw Error(a(160));R0(h,y,c),Ze=null,Fn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)D0(i,e),i=i.sibling}var vi=null;function D0(e,i){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(i,e),In(e),r&4&&(Pa(3,e,e.return),Eo(3,e),Pa(5,e,e.return));break;case 1:Bn(i,e),In(e),r&512&&(on||s===null||Ui(s,s.return)),r&64&&ta&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?r:s.concat(r))));break;case 26:var c=vi;if(Bn(i,e),In(e),r&512&&(on||s===null||Ui(s,s.return)),r&4){var h=s!==null?s.memoizedState:null;if(r=e.memoizedState,s===null)if(r===null)if(e.stateNode===null){t:{r=e.type,s=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":h=c.getElementsByTagName("title")[0],(!h||h[rs]||h[nn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(r),c.head.insertBefore(h,c.querySelector("head > title"))),An(h,r,s),h[nn]=e,R(h),r=h;break t;case"link":var y=Dg("link","href",c).get(r+(s.href||""));if(y){for(var A=0;A<y.length;A++)if(h=y[A],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(A,1);break e}}h=c.createElement(r),An(h,r,s),c.head.appendChild(h);break;case"meta":if(y=Dg("meta","content",c).get(r+(s.content||""))){for(A=0;A<y.length;A++)if(h=y[A],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(A,1);break e}}h=c.createElement(r),An(h,r,s),c.head.appendChild(h);break;default:throw Error(a(468,r))}h[nn]=e,R(h),r=h}e.stateNode=r}else Ug(c,e.type,e.stateNode);else e.stateNode=wg(c,r,e.memoizedProps);else h!==r?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,r===null?Ug(c,e.type,e.stateNode):wg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&bf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Bn(i,e),In(e),r&512&&(on||s===null||Ui(s,s.return)),s!==null&&r&4&&bf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Bn(i,e),In(e),r&512&&(on||s===null||Ui(s,s.return)),e.flags&32){c=e.stateNode;try{un(c,"")}catch(Gt){Pe(e,e.return,Gt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,bf(e,c,s!==null?s.memoizedProps:c)),r&1024&&(Rf=!0);break;case 6:if(Bn(i,e),In(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,s=e.stateNode;try{s.nodeValue=r}catch(Gt){Pe(e,e.return,Gt)}}break;case 3:if(uu=null,c=vi,vi=ou(i.containerInfo),Bn(i,e),vi=c,In(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{vr(i.containerInfo)}catch(Gt){Pe(e,e.return,Gt)}Rf&&(Rf=!1,U0(e));break;case 4:r=vi,vi=ou(e.stateNode.containerInfo),Bn(i,e),In(e),vi=r;break;case 12:Bn(i,e),In(e);break;case 31:Bn(i,e),In(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Yl(e,r)));break;case 13:Bn(i,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(jl=b()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Yl(e,r)));break;case 22:c=e.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,K=ta,ft=on;if(ta=K||c,on=ft||I,Bn(i,e),on=ft,ta=K,In(e),r&8192)t:for(i=e.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(s===null||I||ta||on||Ms(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(h=I.stateNode,c)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=I.stateNode;var mt=I.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Gt){Pe(I,I.return,Gt)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Gt){Pe(I,I.return,Gt)}}}else if(i.tag===18){if(s===null){I=i;try{var ot=I.stateNode;c?Sg(ot,!0):Sg(I.stateNode,!1)}catch(Gt){Pe(I,I.return,Gt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}r&4&&(r=e.updateQueue,r!==null&&(s=r.retryQueue,s!==null&&(r.retryQueue=null,Yl(e,s))));break;case 19:Bn(i,e),In(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Yl(e,r)));break;case 30:break;case 21:break;default:Bn(i,e),In(e)}}function In(e){var i=e.flags;if(i&2){try{for(var s,r=e.return;r!==null;){if(M0(r)){s=r;break}r=r.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var c=s.stateNode,h=Tf(e);ql(e,h,c);break;case 5:var y=s.stateNode;s.flags&32&&(un(y,""),s.flags&=-33);var A=Tf(e);ql(e,A,y);break;case 3:case 4:var I=s.stateNode.containerInfo,K=Tf(e);Af(e,K,I);break;default:throw Error(a(161))}}catch(ft){Pe(e,e.return,ft)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function U0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;U0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function na(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)T0(e,i.alternate,i),i=i.sibling}function Ms(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Pa(4,i,i.return),Ms(i);break;case 1:Ui(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&S0(i,i.return,s),Ms(i);break;case 27:No(i.stateNode);case 26:case 5:Ui(i,i.return),Ms(i);break;case 22:i.memoizedState===null&&Ms(i);break;case 30:Ms(i);break;default:Ms(i)}e=e.sibling}}function ia(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var r=i.alternate,c=e,h=i,y=h.flags;switch(h.tag){case 0:case 11:case 15:ia(c,h,s),Eo(4,h);break;case 1:if(ia(c,h,s),r=h,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(K){Pe(r,r.return,K)}if(r=h,c=r.updateQueue,c!==null){var A=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)lm(I[c],A)}catch(K){Pe(r,r.return,K)}}s&&y&64&&x0(h),bo(h,h.return);break;case 27:E0(h);case 26:case 5:ia(c,h,s),s&&r===null&&y&4&&y0(h),bo(h,h.return);break;case 12:ia(c,h,s);break;case 31:ia(c,h,s),s&&y&4&&C0(c,h);break;case 13:ia(c,h,s),s&&y&4&&w0(c,h);break;case 22:h.memoizedState===null&&ia(c,h,s),bo(h,h.return);break;case 30:break;default:ia(c,h,s)}i=i.sibling}}function Cf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&uo(s))}function wf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&uo(e))}function xi(e,i,s,r){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)L0(e,i,s,r),i=i.sibling}function L0(e,i,s,r){var c=i.flags;switch(i.tag){case 0:case 11:case 15:xi(e,i,s,r),c&2048&&Eo(9,i);break;case 1:xi(e,i,s,r);break;case 3:xi(e,i,s,r),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&uo(e)));break;case 12:if(c&2048){xi(e,i,s,r),e=i.stateNode;try{var h=i.memoizedProps,y=h.id,A=h.onPostCommit;typeof A=="function"&&A(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Pe(i,i.return,I)}}else xi(e,i,s,r);break;case 31:xi(e,i,s,r);break;case 13:xi(e,i,s,r);break;case 23:break;case 22:h=i.stateNode,y=i.alternate,i.memoizedState!==null?h._visibility&2?xi(e,i,s,r):To(e,i):h._visibility&2?xi(e,i,s,r):(h._visibility|=2,or(e,i,s,r,(i.subtreeFlags&10256)!==0||!1)),c&2048&&Cf(y,i);break;case 24:xi(e,i,s,r),c&2048&&wf(i.alternate,i);break;default:xi(e,i,s,r)}}function or(e,i,s,r,c){for(c=c&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=e,y=i,A=s,I=r,K=y.flags;switch(y.tag){case 0:case 11:case 15:or(h,y,A,I,c),Eo(8,y);break;case 23:break;case 22:var ft=y.stateNode;y.memoizedState!==null?ft._visibility&2?or(h,y,A,I,c):To(h,y):(ft._visibility|=2,or(h,y,A,I,c)),c&&K&2048&&Cf(y.alternate,y);break;case 24:or(h,y,A,I,c),c&&K&2048&&wf(y.alternate,y);break;default:or(h,y,A,I,c)}i=i.sibling}}function To(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,r=i,c=r.flags;switch(r.tag){case 22:To(s,r),c&2048&&Cf(r.alternate,r);break;case 24:To(s,r),c&2048&&wf(r.alternate,r);break;default:To(s,r)}i=i.sibling}}var Ao=8192;function lr(e,i,s){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)N0(e,i,s),e=e.sibling}function N0(e,i,s){switch(e.tag){case 26:lr(e,i,s),e.flags&Ao&&e.memoizedState!==null&&YS(s,vi,e.memoizedState,e.memoizedProps);break;case 5:lr(e,i,s);break;case 3:case 4:var r=vi;vi=ou(e.stateNode.containerInfo),lr(e,i,s),vi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ao,Ao=16777216,lr(e,i,s),Ao=r):lr(e,i,s));break;default:lr(e,i,s)}}function O0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ro(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var r=i[s];mn=r,P0(r,e)}O0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)z0(e),e=e.sibling}function z0(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Zl(e)):Ro(e);break;default:Ro(e)}}function Zl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var r=i[s];mn=r,P0(r,e)}O0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Pa(8,i,i.return),Zl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Zl(i));break;default:Zl(i)}e=e.sibling}}function P0(e,i){for(;mn!==null;){var s=mn;switch(s.tag){case 0:case 11:case 15:Pa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var r=s.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:uo(s.memoizedState.cache)}if(r=s.child,r!==null)r.return=s,mn=r;else t:for(s=e;mn!==null;){r=mn;var c=r.sibling,h=r.return;if(A0(r),r===s){mn=null;break t}if(c!==null){c.return=h,mn=c;break t}mn=h}}}var lS={getCacheForType:function(e){var i=bn(an),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return bn(an).controller.signal}},uS=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,de=null,ge=0,ze=0,Zn=null,Fa=!1,ur=!1,Df=!1,aa=0,Je=0,Ba=0,Es=0,Uf=0,jn=0,cr=0,Co=null,Hn=null,Lf=!1,jl=0,F0=0,Ql=1/0,Kl=null,Ia=null,cn=0,Ha=null,fr=null,sa=0,Nf=0,Of=null,B0=null,wo=0,zf=null;function Qn(){return(we&2)!==0&&ge!==0?ge&-ge:F.T!==null?Gf():jr()}function I0(){if(jn===0)if((ge&536870912)===0||ve){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),jn=e}else jn=536870912;return e=qn.current,e!==null&&(e.flags|=32),jn}function Gn(e,i,s){(e===Ve&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(hr(e,0),Ga(e,ge,jn,!1)),Cn(e,s),((we&2)===0||e!==Ve)&&(e===Ve&&((we&2)===0&&(Es|=s),Je===4&&Ga(e,ge,jn,!1)),Li(e))}function H0(e,i,s){if((we&6)!==0)throw Error(a(327));var r=!s&&(i&127)===0&&(i&e.expiredLanes)===0||At(e,i),c=r?hS(e,i):Ff(e,i,!0),h=r;do{if(c===0){ur&&!r&&Ga(e,i,0,!1);break}else{if(s=e.current.alternate,h&&!cS(s)){c=Ff(e,i,!1),h=!1;continue}if(c===2){if(h=i,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var A=e;c=Co;var I=A.current.memoizedState.isDehydrated;if(I&&(hr(A,y).flags|=256),y=Ff(A,y,!1),y!==2){if(Df&&!I){A.errorRecoveryDisabledLanes|=h,Es|=h,c=4;break t}h=Hn,Hn=c,h!==null&&(Hn===null?Hn=h:Hn.push.apply(Hn,h))}c=y}if(h=!1,c!==2)continue}}if(c===1){hr(e,0),Ga(e,i,0,!0);break}t:{switch(r=e,h=c,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ga(r,i,jn,!Fa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(c=jl+300-b(),10<c)){if(Ga(r,i,jn,!Fa),_t(r,0,!0)!==0)break t;sa=i,r.timeoutHandle=_g(G0.bind(null,r,s,Hn,Kl,Lf,i,jn,Es,cr,Fa,h,"Throttled",-0,0),c);break t}G0(r,s,Hn,Kl,Lf,i,jn,Es,cr,Fa,h,null,-0,0)}}break}while(!0);Li(e)}function G0(e,i,s,r,c,h,y,A,I,K,ft,mt,tt,ot){if(e.timeoutHandle=-1,mt=i.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},N0(i,h,mt);var Gt=(h&62914560)===h?jl-b():(h&4194048)===h?F0-b():0;if(Gt=ZS(mt,Gt),Gt!==null){sa=h,e.cancelPendingCommit=Gt(j0.bind(null,e,i,h,s,r,c,y,A,I,ft,mt,null,tt,ot)),Ga(e,h,y,!K);return}}j0(e,i,h,s,r,c,y,A,I)}function cS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var r=0;r<s.length;r++){var c=s[r],h=c.getSnapshot;c=c.value;try{if(!Xn(h(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ga(e,i,s,r){i&=~Uf,i&=~Es,e.suspendedLanes|=i,e.pingedLanes&=~i,r&&(e.warmLanes|=i),r=e.expirationTimes;for(var c=i;0<c;){var h=31-Ot(c),y=1<<h;r[h]=-1,c&=~y}s!==0&&ul(e,s,i)}function Jl(){return(we&6)===0?(Do(0),!1):!0}function Pf(){if(de!==null){if(ze===0)var e=de.return;else e=de,Zi=ps=null,Kc(e),nr=null,fo=0,e=de;for(;e!==null;)v0(e.alternate,e),e=e.return;de=null}}function hr(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,DS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),sa=0,Pf(),Ve=e,de=s=qi(e.current,null),ge=i,ze=0,Zn=null,Fa=!1,ur=At(e,i),Df=!1,cr=jn=Uf=Es=Ba=Je=0,Hn=Co=null,Lf=!1,(i&8)!==0&&(i|=i&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=i;0<r;){var c=31-Ot(r),h=1<<c;i|=e[c],r&=~h}return aa=i,xl(),s}function V0(e,i){re=null,F.H=So,i===er||i===Rl?(i=am(),ze=3):i===Ic?(i=am(),ze=4):ze=i===pf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Zn=i,de===null&&(Je=1,Gl(e,ai(i,e.current)))}function k0(){var e=qn.current;return e===null?!0:(ge&4194048)===ge?li===null:(ge&62914560)===ge||(ge&536870912)!==0?e===li:!1}function X0(){var e=F.H;return F.H=So,e===null?So:e}function W0(){var e=F.A;return F.A=lS,e}function $l(){Je=4,Fa||(ge&4194048)!==ge&&qn.current!==null||(ur=!0),(Ba&134217727)===0&&(Es&134217727)===0||Ve===null||Ga(Ve,ge,jn,!1)}function Ff(e,i,s){var r=we;we|=2;var c=X0(),h=W0();(Ve!==e||ge!==i)&&(Kl=null,hr(e,i)),i=!1;var y=Je;t:do try{if(ze!==0&&de!==null){var A=de,I=Zn;switch(ze){case 8:Pf(),y=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(i=!0);var K=ze;if(ze=0,Zn=null,dr(e,A,I,K),s&&ur){y=0;break t}break;default:K=ze,ze=0,Zn=null,dr(e,A,I,K)}}fS(),y=Je;break}catch(ft){V0(e,ft)}while(!0);return i&&e.shellSuspendCounter++,Zi=ps=null,we=r,F.H=c,F.A=h,de===null&&(Ve=null,ge=0,xl()),y}function fS(){for(;de!==null;)q0(de)}function hS(e,i){var s=we;we|=2;var r=X0(),c=W0();Ve!==e||ge!==i?(Kl=null,Ql=b()+500,hr(e,i)):ur=At(e,i);t:do try{if(ze!==0&&de!==null){i=de;var h=Zn;e:switch(ze){case 1:ze=0,Zn=null,dr(e,i,h,1);break;case 2:case 9:if(nm(h)){ze=0,Zn=null,Y0(i);break}i=function(){ze!==2&&ze!==9||Ve!==e||(ze=7),Li(e)},h.then(i,i);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:nm(h)?(ze=0,Zn=null,Y0(i)):(ze=0,Zn=null,dr(e,i,h,7));break;case 5:var y=null;switch(de.tag){case 26:y=de.memoizedState;case 5:case 27:var A=de;if(y?Lg(y):A.stateNode.complete){ze=0,Zn=null;var I=A.sibling;if(I!==null)de=I;else{var K=A.return;K!==null?(de=K,tu(K)):de=null}break e}}ze=0,Zn=null,dr(e,i,h,5);break;case 6:ze=0,Zn=null,dr(e,i,h,6);break;case 8:Pf(),Je=6;break t;default:throw Error(a(462))}}dS();break}catch(ft){V0(e,ft)}while(!0);return Zi=ps=null,F.H=r,F.A=c,we=s,de!==null?0:(Ve=null,ge=0,xl(),Je)}function dS(){for(;de!==null&&!qt();)q0(de)}function q0(e){var i=g0(e.alternate,e,aa);e.memoizedProps=e.pendingProps,i===null?tu(e):de=i}function Y0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=c0(s,i,i.pendingProps,i.type,void 0,ge);break;case 11:i=c0(s,i,i.pendingProps,i.type.render,i.ref,ge);break;case 5:Kc(i);default:v0(s,i),i=de=Wp(i,aa),i=g0(s,i,aa)}e.memoizedProps=e.pendingProps,i===null?tu(e):de=i}function dr(e,i,s,r){Zi=ps=null,Kc(i),nr=null,fo=0;var c=i.return;try{if(eS(e,c,i,s,ge)){Je=1,Gl(e,ai(s,e.current)),de=null;return}}catch(h){if(c!==null)throw de=c,h;Je=1,Gl(e,ai(s,e.current)),de=null;return}i.flags&32768?(ve||r===1?e=!0:ur||(ge&536870912)!==0?e=!1:(Fa=e=!0,(r===2||r===9||r===3||r===6)&&(r=qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Z0(i,e)):tu(i)}function tu(e){var i=e;do{if((i.flags&32768)!==0){Z0(i,Fa);return}e=i.return;var s=aS(i.alternate,i,aa);if(s!==null){de=s;return}if(i=i.sibling,i!==null){de=i;return}de=i=e}while(i!==null);Je===0&&(Je=5)}function Z0(e,i){do{var s=sS(e.alternate,e);if(s!==null){s.flags&=32767,de=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){de=e;return}de=e=s}while(e!==null);Je=6,de=null}function j0(e,i,s,r,c,h,y,A,I){e.cancelPendingCommit=null;do eu();while(cn!==0);if((we&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=bc,pi(e,s,h,y,A,I),e===Ve&&(de=Ve=null,ge=0),fr=i,Ha=e,sa=s,Nf=h,Of=c,B0=r,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_S(ut,function(){return tg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null,c=H.p,H.p=2,y=we,we|=4;try{rS(e,i,s)}finally{we=y,H.p=c,F.T=r}}cn=1,Q0(),K0(),J0()}}function Q0(){if(cn===1){cn=0;var e=Ha,i=fr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=F.T,F.T=null;var r=H.p;H.p=2;var c=we;we|=4;try{D0(i,e);var h=jf,y=Pp(e.containerInfo),A=h.focusedElem,I=h.selectionRange;if(y!==A&&A&&A.ownerDocument&&zp(A.ownerDocument.documentElement,A)){if(I!==null&&xc(A)){var K=I.start,ft=I.end;if(ft===void 0&&(ft=K),"selectionStart"in A)A.selectionStart=K,A.selectionEnd=Math.min(ft,A.value.length);else{var mt=A.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Gt=A.textContent.length,$t=Math.min(I.start,Gt),Ge=I.end===void 0?$t:Math.min(I.end,Gt);!ot.extend&&$t>Ge&&(y=Ge,Ge=$t,$t=y);var Y=Op(A,$t),V=Op(A,Ge);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(Y.node,Y.offset),ot.removeAllRanges(),$t>Ge?(ot.addRange(Q),ot.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),ot.addRange(Q))}}}}for(mt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}du=!!Zf,jf=Zf=null}finally{we=c,H.p=r,F.T=s}}e.current=i,cn=2}}function K0(){if(cn===2){cn=0;var e=Ha,i=fr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=F.T,F.T=null;var r=H.p;H.p=2;var c=we;we|=4;try{T0(e,i.alternate,i)}finally{we=c,H.p=r,F.T=s}}cn=3}}function J0(){if(cn===4||cn===3){cn=0,D();var e=Ha,i=fr,s=sa,r=B0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?cn=5:(cn=0,fr=Ha=null,$0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ia=null),Bs(s),i=i.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,i,void 0,(i.current.flags&128)===128)}catch{}if(r!==null){i=F.T,c=H.p,H.p=2,F.T=null;try{for(var h=e.onRecoverableError,y=0;y<r.length;y++){var A=r[y];h(A.value,{componentStack:A.stack})}}finally{F.T=i,H.p=c}}(sa&3)!==0&&eu(),Li(e),c=e.pendingLanes,(s&261930)!==0&&(c&42)!==0?e===zf?wo++:(wo=0,zf=e):wo=0,Do(0)}}function $0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,uo(i)))}function eu(){return Q0(),K0(),J0(),tg()}function tg(){if(cn!==5)return!1;var e=Ha,i=Nf;Nf=0;var s=Bs(sa),r=F.T,c=H.p;try{H.p=32>s?32:s,F.T=null,s=Of,Of=null;var h=Ha,y=sa;if(cn=0,fr=Ha=null,sa=0,(we&6)!==0)throw Error(a(331));var A=we;if(we|=4,z0(h.current),L0(h,h.current,y,s),we=A,Do(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,h)}catch{}return!0}finally{H.p=c,F.T=r,$0(e,i)}}function eg(e,i,s){i=ai(s,i),i=df(e.stateNode,i,2),e=Na(e,i,2),e!==null&&(Cn(e,2),Li(e))}function Pe(e,i,s){if(e.tag===3)eg(e,e,s);else for(;i!==null;){if(i.tag===3){eg(i,e,s);break}else if(i.tag===1){var r=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=ai(s,e),s=n0(2),r=Na(i,s,2),r!==null&&(i0(s,r,i,e),Cn(r,2),Li(r));break}}i=i.return}}function Bf(e,i,s){var r=e.pingCache;if(r===null){r=e.pingCache=new uS;var c=new Set;r.set(i,c)}else c=r.get(i),c===void 0&&(c=new Set,r.set(i,c));c.has(s)||(Df=!0,c.add(s),e=pS.bind(null,e,i,s),i.then(e,e))}function pS(e,i,s){var r=e.pingCache;r!==null&&r.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ve===e&&(ge&s)===s&&(Je===4||Je===3&&(ge&62914560)===ge&&300>b()-jl?(we&2)===0&&hr(e,0):Uf|=s,cr===ge&&(cr=0)),Li(e)}function ng(e,i){i===0&&(i=Ne()),e=fs(e,i),e!==null&&(Cn(e,i),Li(e))}function mS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),ng(e,s)}function gS(e,i){var s=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(i),ng(e,s)}function _S(e,i){return Se(e,i)}var nu=null,pr=null,If=!1,iu=!1,Hf=!1,Va=0;function Li(e){e!==pr&&e.next===null&&(pr===null?nu=pr=e:pr=pr.next=e),iu=!0,If||(If=!0,xS())}function Do(e,i){if(!Hf&&iu){Hf=!0;do for(var s=!1,r=nu;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var h=0;else{var y=r.suspendedLanes,A=r.pingedLanes;h=(1<<31-Ot(42|e)+1)-1,h&=c&~(y&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,rg(r,h))}else h=ge,h=_t(r,r===Ve?h:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(h&3)===0||At(r,h)||(s=!0,rg(r,h));r=r.next}while(s);Hf=!1}}function vS(){ig()}function ig(){iu=If=!1;var e=0;Va!==0&&wS()&&(e=Va);for(var i=b(),s=null,r=nu;r!==null;){var c=r.next,h=ag(r,i);h===0?(r.next=null,s===null?nu=c:s.next=c,c===null&&(pr=s)):(s=r,(e!==0||(h&3)!==0)&&(iu=!0)),r=c}cn!==0&&cn!==5||Do(e),Va!==0&&(Va=0)}function ag(e,i){for(var s=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Ot(h),A=1<<y,I=c[y];I===-1?((A&s)===0||(A&r)!==0)&&(c[y]=ee(A,i)):I<=i&&(e.expiredLanes|=A),h&=~A}if(i=Ve,s=ge,s=_t(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,s===0||e===i&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ue(r),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||At(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(r!==null&&Ue(r),Bs(s)){case 2:case 8:s=xt;break;case 32:s=ut;break;case 268435456:s=Rt;break;default:s=ut}return r=sg.bind(null,e),s=Se(s,r),e.callbackPriority=i,e.callbackNode=s,i}return r!==null&&r!==null&&Ue(r),e.callbackPriority=2,e.callbackNode=null,2}function sg(e,i){if(cn!==0&&cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(eu()&&e.callbackNode!==s)return null;var r=ge;return r=_t(e,e===Ve?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(H0(e,r,i),ag(e,b()),e.callbackNode!=null&&e.callbackNode===s?sg.bind(null,e):null)}function rg(e,i){if(eu())return null;H0(e,i,!0)}function xS(){US(function(){(we&6)!==0?Se(dt,vS):ig()})}function Gf(){if(Va===0){var e=$s;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Va=e}return Va}function og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function lg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function SS(e,i,s,r,c){if(i==="submit"&&s&&s.stateNode===c){var h=og((c[_n]||null).action),y=r.submitter;y&&(i=(i=y[_n]||null)?og(i.formAction):y.getAttribute("formAction"),i!==null&&(h=i,y=null));var A=new ml("action","action",null,r,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var I=y?lg(c,y):new FormData(c);of(s,{pending:!0,data:I,method:c.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=y?lg(c,y):new FormData(c),of(s,{pending:!0,data:I,method:c.method,action:h},h,I))},currentTarget:c}]})}}for(var Vf=0;Vf<Ec.length;Vf++){var kf=Ec[Vf],yS=kf.toLowerCase(),MS=kf[0].toUpperCase()+kf.slice(1);_i(yS,"on"+MS)}_i(Ip,"onAnimationEnd"),_i(Hp,"onAnimationIteration"),_i(Gp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Bx,"onTransitionRun"),_i(Ix,"onTransitionStart"),_i(Hx,"onTransitionCancel"),_i(Vp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function ug(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var r=e[s],c=r.event;r=r.listeners;t:{var h=void 0;if(i)for(var y=r.length-1;0<=y;y--){var A=r[y],I=A.instance,K=A.currentTarget;if(A=A.listener,I!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=K;try{h(c)}catch(ft){vl(ft)}c.currentTarget=null,h=I}else for(y=0;y<r.length;y++){if(A=r[y],I=A.instance,K=A.currentTarget,A=A.listener,I!==h&&c.isPropagationStopped())break t;h=A,c.currentTarget=K;try{h(c)}catch(ft){vl(ft)}c.currentTarget=null,h=I}}}}function pe(e,i){var s=i[Is];s===void 0&&(s=i[Is]=new Set);var r=e+"__bubble";s.has(r)||(cg(i,e,2,!1),s.add(r))}function Xf(e,i,s){var r=0;i&&(r|=4),cg(s,e,r,i)}var au="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[au]){e[au]=!0,q.forEach(function(s){s!=="selectionchange"&&(ES.has(s)||Xf(s,!1,e),Xf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[au]||(i[au]=!0,Xf("selectionchange",!1,i))}}function cg(e,i,s,r){switch(Ig(i)){case 2:var c=KS;break;case 8:c=JS;break;default:c=rh}s=c.bind(null,i,s,e),c=void 0,!cc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(i,s,{capture:!0,passive:c}):e.addEventListener(i,s,!0):c!==void 0?e.addEventListener(i,s,{passive:c}):e.addEventListener(i,s,!1)}function qf(e,i,s,r,c){var h=r;if((i&1)===0&&(i&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var A=r.stateNode.containerInfo;if(A===c)break;if(y===4)for(y=r.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;A!==null;){if(y=Ea(A),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){r=h=y;continue t}A=A.parentNode}}r=r.return}mp(function(){var K=h,ft=lc(s),mt=[];t:{var tt=kp.get(e);if(tt!==void 0){var ot=ml,Gt=e;switch(e){case"keypress":if(dl(s)===0)break t;case"keydown":case"keyup":ot=gx;break;case"focusin":Gt="focus",ot=pc;break;case"focusout":Gt="blur",ot=pc;break;case"beforeblur":case"afterblur":ot=pc;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=xx;break;case Ip:case Hp:case Gp:ot=ox;break;case Vp:ot=yx;break;case"scroll":case"scrollend":ot=nx;break;case"wheel":ot=Ex;break;case"copy":case"cut":case"paste":ot=ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Sp;break;case"toggle":case"beforetoggle":ot=Tx}var $t=(i&4)!==0,Ge=!$t&&(e==="scroll"||e==="scrollend"),Y=$t?tt!==null?tt+"Capture":null:tt;$t=[];for(var V=K,Q;V!==null;){var pt=V;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Y===null||(pt=Jr(V,Y),pt!=null&&$t.push(Lo(V,pt,Q))),Ge)break;V=V.return}0<$t.length&&(tt=new ot(tt,Gt,null,s,ft),mt.push({event:tt,listeners:$t}))}}if((i&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&s!==oc&&(Gt=s.relatedTarget||s.fromElement)&&(Ea(Gt)||Gt[mi]))break t;if((ot||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Gt=s.relatedTarget||s.toElement,ot=K,Gt=Gt?Ea(Gt):null,Gt!==null&&(Ge=u(Gt),$t=Gt.tag,Gt!==Ge||$t!==5&&$t!==27&&$t!==6)&&(Gt=null)):(ot=null,Gt=K),ot!==Gt)){if($t=vp,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&($t=Sp,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ge=ot==null?tt:os(ot),Q=Gt==null?tt:os(Gt),tt=new $t(pt,V+"leave",ot,s,ft),tt.target=Ge,tt.relatedTarget=Q,pt=null,Ea(ft)===K&&($t=new $t(Y,V+"enter",Gt,s,ft),$t.target=Q,$t.relatedTarget=Ge,pt=$t),Ge=pt,ot&&Gt)e:{for($t=bS,Y=ot,V=Gt,Q=0,pt=Y;pt;pt=$t(pt))Q++;pt=0;for(var Qt=V;Qt;Qt=$t(Qt))pt++;for(;0<Q-pt;)Y=$t(Y),Q--;for(;0<pt-Q;)V=$t(V),pt--;for(;Q--;){if(Y===V||V!==null&&Y===V.alternate){$t=Y;break e}Y=$t(Y),V=$t(V)}$t=null}else $t=null;ot!==null&&fg(mt,tt,ot,$t,!1),Gt!==null&&Ge!==null&&fg(mt,Ge,Gt,$t,!0)}}t:{if(tt=K?os(K):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Ee=Cp;else if(Ap(tt))if(wp)Ee=zx;else{Ee=Nx;var Yt=Lx}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?K&&gi(K.elementType)&&(Ee=Cp):Ee=Ox;if(Ee&&(Ee=Ee(e,K))){Rp(mt,Ee,s,ft);break t}Yt&&Yt(e,tt,K),e==="focusout"&&K&&tt.type==="number"&&K.memoizedProps.value!=null&&xn(tt,"number",tt.value)}switch(Yt=K?os(K):window,e){case"focusin":(Ap(Yt)||Yt.contentEditable==="true")&&(Ws=Yt,Sc=K,ro=null);break;case"focusout":ro=Sc=Ws=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,Fp(mt,s,ft);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":Fp(mt,s,ft)}var le;if(gc)t:{switch(e){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Xs?bp(e,s)&&(_e="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(_e="onCompositionStart");_e&&(yp&&s.locale!=="ko"&&(Xs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Xs&&(le=gp()):(Aa=ft,fc="value"in Aa?Aa.value:Aa.textContent,Xs=!0)),Yt=su(K,_e),0<Yt.length&&(_e=new xp(_e,e,null,s,ft),mt.push({event:_e,listeners:Yt}),le?_e.data=le:(le=Tp(s),le!==null&&(_e.data=le)))),(le=Rx?Cx(e,s):wx(e,s))&&(_e=su(K,"onBeforeInput"),0<_e.length&&(Yt=new xp("onBeforeInput","beforeinput",null,s,ft),mt.push({event:Yt,listeners:_e}),Yt.data=le)),SS(mt,e,K,s,ft)}ug(mt,i)})}function Lo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function su(e,i){for(var s=i+"Capture",r=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Jr(e,s),c!=null&&r.unshift(Lo(e,c,h)),c=Jr(e,i),c!=null&&r.push(Lo(e,c,h))),e.tag===3)return r;e=e.return}return[]}function bS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fg(e,i,s,r,c){for(var h=i._reactName,y=[];s!==null&&s!==r;){var A=s,I=A.alternate,K=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||K===null||(I=K,c?(K=Jr(s,h),K!=null&&y.unshift(Lo(s,K,I))):c||(K=Jr(s,h),K!=null&&y.push(Lo(s,K,I)))),s=s.return}y.length!==0&&e.push({event:i,listeners:y})}var TS=/\r\n?/g,AS=/\u0000|\uFFFD/g;function hg(e){return(typeof e=="string"?e:""+e).replace(TS,`
`).replace(AS,"")}function dg(e,i){return i=hg(i),hg(e)===i}function He(e,i,s,r,c,h){switch(s){case"children":typeof r=="string"?i==="body"||i==="textarea"&&r===""||un(e,r):(typeof r=="number"||typeof r=="bigint")&&i!=="body"&&un(e,""+r);break;case"className":Kt(e,"class",r);break;case"tabIndex":Kt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(e,s,r);break;case"style":Gs(e,r,h);break;case"data":if(i!=="object"){Kt(e,"data",r);break}case"src":case"href":if(r===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=fl(""+r),e.setAttribute(s,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&He(e,i,"name",c.name,c,null),He(e,i,"formEncType",c.formEncType,c,null),He(e,i,"formMethod",c.formMethod,c,null),He(e,i,"formTarget",c.formTarget,c,null)):(He(e,i,"encType",c.encType,c,null),He(e,i,"method",c.method,c,null),He(e,i,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=fl(""+r),e.setAttribute(s,r);break;case"onClick":r!=null&&(e.onclick=Xi);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(s=r.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}s=fl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""+r):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":r===!0?e.setAttribute(s,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,r):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(s,r):e.removeAttribute(s);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(s):e.setAttribute(s,r);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Xt(e,"popover",r);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=tx.get(s)||s,Xt(e,s,r))}}function Yf(e,i,s,r,c,h){switch(s){case"style":Gs(e,r,h);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(s=r.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof r=="string"?un(e,r):(typeof r=="number"||typeof r=="bigint")&&un(e,""+r);break;case"onScroll":r!=null&&pe("scroll",e);break;case"onScrollEnd":r!=null&&pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),h=e[_n]||null,h=h!=null?h[s]:null,typeof h=="function"&&e.removeEventListener(i,h,c),typeof r=="function")){typeof h!="function"&&h!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,r,c);break t}s in e?e[s]=r:r===!0?e.setAttribute(s,""):Xt(e,s,r)}}}function An(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var r=!1,c=!1,h;for(h in s)if(s.hasOwnProperty(h)){var y=s[h];if(y!=null)switch(h){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,h,y,s,null)}}c&&He(e,i,"srcSet",s.srcSet,s,null),r&&He(e,i,"src",s.src,s,null);return;case"input":pe("invalid",e);var A=h=y=c=null,I=null,K=null;for(r in s)if(s.hasOwnProperty(r)){var ft=s[r];if(ft!=null)switch(r){case"name":c=ft;break;case"type":y=ft;break;case"checked":I=ft;break;case"defaultChecked":K=ft;break;case"value":h=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:He(e,i,r,ft,s,null)}}ki(e,h,A,I,K,y,c,!1);return;case"select":pe("invalid",e),r=y=h=null;for(c in s)if(s.hasOwnProperty(c)&&(A=s[c],A!=null))switch(c){case"value":h=A;break;case"defaultValue":y=A;break;case"multiple":r=A;default:He(e,i,c,A,s,null)}i=h,s=y,e.multiple=!!r,i!=null?ni(e,!!r,i,!1):s!=null&&ni(e,!!r,s,!0);return;case"textarea":pe("invalid",e),h=c=r=null;for(y in s)if(s.hasOwnProperty(y)&&(A=s[y],A!=null))switch(y){case"value":r=A;break;case"defaultValue":c=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:He(e,i,y,A,s,null)}Sn(e,r,c,h);return;case"option":for(I in s)s.hasOwnProperty(I)&&(r=s[I],r!=null)&&(I==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":He(e,i,I,r,s,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(r=0;r<Uo.length;r++)pe(Uo[r],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in s)if(s.hasOwnProperty(K)&&(r=s[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,K,r,s,null)}return;default:if(gi(i)){for(ft in s)s.hasOwnProperty(ft)&&(r=s[ft],r!==void 0&&Yf(e,i,ft,r,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(r=s[A],r!=null&&He(e,i,A,r,s,null))}function RS(e,i,s,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,y=null,A=null,I=null,K=null,ft=null;for(ot in s){var mt=s[ot];if(s.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=mt;default:r.hasOwnProperty(ot)||He(e,i,ot,null,r,mt)}}for(var tt in r){var ot=r[tt];if(mt=s[tt],r.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":h=ot;break;case"name":c=ot;break;case"checked":K=ot;break;case"defaultChecked":ft=ot;break;case"value":y=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:ot!==mt&&He(e,i,tt,ot,r,mt)}}vn(e,y,A,I,K,ft,h,c);return;case"select":ot=y=A=tt=null;for(h in s)if(I=s[h],s.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":ot=I;default:r.hasOwnProperty(h)||He(e,i,h,null,r,I)}for(c in r)if(h=r[c],I=s[c],r.hasOwnProperty(c)&&(h!=null||I!=null))switch(c){case"value":tt=h;break;case"defaultValue":A=h;break;case"multiple":y=h;default:h!==I&&He(e,i,c,h,r,I)}i=A,s=y,r=ot,tt!=null?ni(e,!!s,tt,!1):!!r!=!!s&&(i!=null?ni(e,!!s,i,!0):ni(e,!!s,s?[]:"",!1));return;case"textarea":ot=tt=null;for(A in s)if(c=s[A],s.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,i,A,null,r,c)}for(y in r)if(c=r[y],h=s[y],r.hasOwnProperty(y)&&(c!=null||h!=null))switch(y){case"value":tt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==h&&He(e,i,y,c,r,h)}Oe(e,tt,ot);return;case"option":for(var Gt in s)tt=s[Gt],s.hasOwnProperty(Gt)&&tt!=null&&!r.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:He(e,i,Gt,null,r,tt));for(I in r)tt=r[I],ot=s[I],r.hasOwnProperty(I)&&tt!==ot&&(tt!=null||ot!=null)&&(I==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":He(e,i,I,tt,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in s)tt=s[$t],s.hasOwnProperty($t)&&tt!=null&&!r.hasOwnProperty($t)&&He(e,i,$t,null,r,tt);for(K in r)if(tt=r[K],ot=s[K],r.hasOwnProperty(K)&&tt!==ot&&(tt!=null||ot!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(a(137,i));break;default:He(e,i,K,tt,r,ot)}return;default:if(gi(i)){for(var Ge in s)tt=s[Ge],s.hasOwnProperty(Ge)&&tt!==void 0&&!r.hasOwnProperty(Ge)&&Yf(e,i,Ge,void 0,r,tt);for(ft in r)tt=r[ft],ot=s[ft],!r.hasOwnProperty(ft)||tt===ot||tt===void 0&&ot===void 0||Yf(e,i,ft,tt,r,ot);return}}for(var Y in s)tt=s[Y],s.hasOwnProperty(Y)&&tt!=null&&!r.hasOwnProperty(Y)&&He(e,i,Y,null,r,tt);for(mt in r)tt=r[mt],ot=s[mt],!r.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||He(e,i,mt,tt,r,ot)}function pg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),r=0;r<s.length;r++){var c=s[r],h=c.transferSize,y=c.initiatorType,A=c.duration;if(h&&A&&pg(y)){for(y=0,A=c.responseEnd,r+=1;r<s.length;r++){var I=s[r],K=I.startTime;if(K>A)break;var ft=I.transferSize,mt=I.initiatorType;ft&&pg(mt)&&(I=I.responseEnd,y+=ft*(I<A?1:(A-K)/(I-K)))}if(--r,i+=8*(h+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Zf=null,jf=null;function ru(e){return e.nodeType===9?e:e.ownerDocument}function mg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Qf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Kf=null;function wS(){var e=window.event;return e&&e.type==="popstate"?e===Kf?!1:(Kf=e,!0):(Kf=null,!1)}var _g=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,US=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(e){return vg.resolve(null).then(e).catch(LS)}:_g;function LS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function xg(e,i){var s=i,r=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"||s==="/&"){if(r===0){e.removeChild(c),vr(i);return}r--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")r++;else if(s==="html")No(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,No(s);for(var h=s.firstChild;h;){var y=h.nextSibling,A=h.nodeName;h[rs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=y}}else s==="body"&&No(e.ownerDocument.body);s=c}while(s);vr(i)}function Sg(e,i){var s=e;e=0;do{var r=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),r&&r.nodeType===8)if(s=r.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=r}while(s)}function Jf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Jf(s),Kr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function NS(e,i,s,r){for(;e.nodeType===1;){var c=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[rs])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function OS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=ui(e.nextSibling),e===null))return null;return e}function yg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=ui(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$?"||e.data==="$~"}function th(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var r=function(){i(),s.removeEventListener("DOMContentLoaded",r)};s.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var eh=null;function Mg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return ui(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function Eg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function bg(e,i,s){switch(i=ru(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function No(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Kr(e)}var ci=new Map,Tg=new Set;function ou(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=H.d;H.d={f:PS,r:FS,D:BS,C:IS,L:HS,m:GS,X:kS,S:VS,M:XS};function PS(){var e=ra.f(),i=Jl();return e||i}function FS(e){var i=ba(e);i!==null&&i.tag===5&&i.type==="form"?Vm(i):ra.r(e)}var mr=typeof document>"u"?null:document;function Ag(e,i,s){var r=mr;if(r&&typeof i=="string"&&i){var c=ne(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),Tg.has(c)||(Tg.add(c),e={rel:e,crossOrigin:s,href:i},r.querySelector(c)===null&&(i=r.createElement("link"),An(i,"link",e),R(i),r.head.appendChild(i)))}}function BS(e){ra.D(e),Ag("dns-prefetch",e,null)}function IS(e,i){ra.C(e,i),Ag("preconnect",e,i)}function HS(e,i,s){ra.L(e,i,s);var r=mr;if(r&&e&&i){var c='link[rel="preload"][as="'+ne(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+ne(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+ne(s.imageSizes)+'"]')):c+='[href="'+ne(e)+'"]';var h=c;switch(i){case"style":h=gr(e);break;case"script":h=_r(e)}ci.has(h)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),ci.set(h,e),r.querySelector(c)!==null||i==="style"&&r.querySelector(Oo(h))||i==="script"&&r.querySelector(zo(h))||(i=r.createElement("link"),An(i,"link",e),R(i),r.head.appendChild(i)))}}function GS(e,i){ra.m(e,i);var s=mr;if(s&&e){var r=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+ne(r)+'"][href="'+ne(e)+'"]',h=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=_r(e)}if(!ci.has(h)&&(e=_({rel:"modulepreload",href:e},i),ci.set(h,e),s.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(zo(h)))return}r=s.createElement("link"),An(r,"link",e),R(r),s.head.appendChild(r)}}}function VS(e,i,s){ra.S(e,i,s);var r=mr;if(r&&e){var c=Ta(r).hoistableStyles,h=gr(e);i=i||"default";var y=c.get(h);if(!y){var A={loading:0,preload:null};if(y=r.querySelector(Oo(h)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=ci.get(h))&&nh(e,s);var I=y=r.createElement("link");R(I),An(I,"link",e),I._p=new Promise(function(K,ft){I.onload=K,I.onerror=ft}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lu(y,i,r)}y={type:"stylesheet",instance:y,count:1,state:A},c.set(h,y)}}}function kS(e,i){ra.X(e,i);var s=mr;if(s&&e){var r=Ta(s).hoistableScripts,c=_r(e),h=r.get(c);h||(h=s.querySelector(zo(c)),h||(e=_({src:e,async:!0},i),(i=ci.get(c))&&ih(e,i),h=s.createElement("script"),R(h),An(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function XS(e,i){ra.M(e,i);var s=mr;if(s&&e){var r=Ta(s).hoistableScripts,c=_r(e),h=r.get(c);h||(h=s.querySelector(zo(c)),h||(e=_({src:e,async:!0,type:"module"},i),(i=ci.get(c))&&ih(e,i),h=s.createElement("script"),R(h),An(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function Rg(e,i,s,r){var c=(c=et.current)?ou(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=gr(s.href),s=Ta(c).hoistableStyles,r=s.get(i),r||(r={type:"style",instance:null,count:0,state:null},s.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=gr(s.href);var h=Ta(c).hoistableStyles,y=h.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=c.querySelector(Oo(e)))&&!h._p&&(y.instance=h,y.state.loading=5),ci.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ci.set(e,s),h||WS(c,e,s,y.state))),i&&r===null)throw Error(a(528,""));return y}if(i&&r!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=_r(s),s=Ta(c).hoistableScripts,r=s.get(i),r||(r={type:"script",instance:null,count:0,state:null},s.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function gr(e){return'href="'+ne(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function Cg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function WS(e,i,s,r){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?r.loading=1:(i=e.createElement("link"),r.preload=i,i.addEventListener("load",function(){return r.loading|=1}),i.addEventListener("error",function(){return r.loading|=2}),An(i,"link",s),R(i),e.head.appendChild(i))}function _r(e){return'[src="'+ne(e)+'"]'}function zo(e){return"script[async]"+e}function wg(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var r=e.querySelector('style[data-href~="'+ne(s.href)+'"]');if(r)return i.instance=r,R(r),r;var c=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),R(r),An(r,"style",c),lu(r,s.precedence,e),i.instance=r;case"stylesheet":c=gr(s.href);var h=e.querySelector(Oo(c));if(h)return i.state.loading|=4,i.instance=h,R(h),h;r=Cg(s),(c=ci.get(c))&&nh(r,c),h=(e.ownerDocument||e).createElement("link"),R(h);var y=h;return y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),An(h,"link",r),i.state.loading|=4,lu(h,s.precedence,e),i.instance=h;case"script":return h=_r(s.src),(c=e.querySelector(zo(h)))?(i.instance=c,R(c),c):(r=s,(c=ci.get(h))&&(r=_({},s),ih(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),R(c),An(c,"link",r),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(r=i.instance,i.state.loading|=4,lu(r,s.precedence,e));return i.instance}function lu(e,i,s){for(var r=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,h=c,y=0;y<r.length;y++){var A=r[y];if(A.dataset.precedence===i)h=A;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function nh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ih(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var uu=null;function Dg(e,i,s){if(uu===null){var r=new Map,c=uu=new Map;c.set(s,r)}else c=uu,r=c.get(s),r||(r=new Map,c.set(s,r));if(r.has(e))return r;for(r.set(e,null),s=s.getElementsByTagName(e),c=0;c<s.length;c++){var h=s[c];if(!(h[rs]||h[nn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(i)||"";y=e+y;var A=r.get(y);A?A.push(h):r.set(y,[h])}}return r}function Ug(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function qS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Lg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function YS(e,i,s,r){if(s.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var c=gr(r.href),h=i.querySelector(Oo(c));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=cu.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=h,R(h);return}h=i.ownerDocument||i,r=Cg(r),(c=ci.get(c))&&nh(r,c),h=h.createElement("link"),R(h);var y=h;y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),An(h,"link",r),s.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=cu.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var ah=0;function ZS(e,i){return e.stylesheets&&e.count===0&&hu(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var r=setTimeout(function(){if(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+i);0<e.imgBytes&&ah===0&&(ah=62500*CS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>ah?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fu=null;function hu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fu=new Map,i.forEach(jS,e),fu=null,cu.call(e))}function jS(e,i){if(!(i.state.loading&4)){var s=fu.get(e);if(s)var r=s.get(null);else{s=new Map,fu.set(e,s);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var y=c[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),r=y)}r&&s.set(null,r)}c=i.instance,y=c.getAttribute("data-precedence"),h=s.get(y)||r,h===r&&s.set(null,c),s.set(y,c),this.count++,r=cu.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var Po={$$typeof:O,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function QS(e,i,s,r,c,h,y,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ye(0),this.hiddenUpdates=ye(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Ng(e,i,s,r,c,h,y,A,I,K,ft,mt){return e=new QS(e,i,s,y,I,K,ft,mt,A),i=1,h===!0&&(i|=24),h=Wn(3,null,null,i),e.current=h,h.stateNode=e,i=Pc(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:r,isDehydrated:s,cache:i},Hc(h),e}function Og(e){return e?(e=Zs,e):Zs}function zg(e,i,s,r,c,h){c=Og(c),r.context===null?r.context=c:r.pendingContext=c,r=La(i),r.payload={element:s},h=h===void 0?null:h,h!==null&&(r.callback=h),s=Na(e,r,i),s!==null&&(Gn(s,e,i),po(s,e,i))}function Pg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function sh(e,i){Pg(e,i),(e=e.alternate)&&Pg(e,i)}function Fg(e){if(e.tag===13||e.tag===31){var i=fs(e,67108864);i!==null&&Gn(i,e,67108864),sh(e,67108864)}}function Bg(e){if(e.tag===13||e.tag===31){var i=Qn();i=Zr(i);var s=fs(e,i);s!==null&&Gn(s,e,i),sh(e,i)}}var du=!0;function KS(e,i,s,r){var c=F.T;F.T=null;var h=H.p;try{H.p=2,rh(e,i,s,r)}finally{H.p=h,F.T=c}}function JS(e,i,s,r){var c=F.T;F.T=null;var h=H.p;try{H.p=8,rh(e,i,s,r)}finally{H.p=h,F.T=c}}function rh(e,i,s,r){if(du){var c=oh(r);if(c===null)qf(e,i,r,pu,s),Hg(e,r);else if(ty(c,e,i,s,r))r.stopPropagation();else if(Hg(e,r),i&4&&-1<$S.indexOf(e)){for(;c!==null;){var h=ba(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=yt(h.pendingLanes);if(y!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var I=1<<31-Ot(y);A.entanglements[1]|=I,y&=~I}Li(h),(we&6)===0&&(Ql=b()+500,Do(0))}}break;case 31:case 13:A=fs(h,2),A!==null&&Gn(A,h,2),Jl(),sh(h,2)}if(h=oh(r),h===null&&qf(e,i,r,pu,s),h===c)break;c=h}c!==null&&r.stopPropagation()}else qf(e,i,r,null,s)}}function oh(e){return e=lc(e),lh(e)}var pu=null;function lh(e){if(pu=null,e=Ea(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===31){if(e=d(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return pu=e,null}function Ig(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case dt:return 2;case xt:return 8;case ut:case Zt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var uh=!1,Xa=null,Wa=null,qa=null,Fo=new Map,Bo=new Map,Ya=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hg(e,i){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(i.pointerId)}}function Io(e,i,s,r,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:s,eventSystemFlags:r,nativeEvent:h,targetContainers:[c]},i!==null&&(i=ba(i),i!==null&&Fg(i)),e):(e.eventSystemFlags|=r,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function ty(e,i,s,r,c){switch(i){case"focusin":return Xa=Io(Xa,e,i,s,r,c),!0;case"dragenter":return Wa=Io(Wa,e,i,s,r,c),!0;case"mouseover":return qa=Io(qa,e,i,s,r,c),!0;case"pointerover":var h=c.pointerId;return Fo.set(h,Io(Fo.get(h)||null,e,i,s,r,c)),!0;case"gotpointercapture":return h=c.pointerId,Bo.set(h,Io(Bo.get(h)||null,e,i,s,r,c)),!0}return!1}function Gg(e){var i=Ea(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,Ci(e.priority,function(){Bg(s)});return}}else if(i===31){if(i=d(s),i!==null){e.blockedOn=i,Ci(e.priority,function(){Bg(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=oh(e.nativeEvent);if(s===null){s=e.nativeEvent;var r=new s.constructor(s.type,s);oc=r,s.target.dispatchEvent(r),oc=null}else return i=ba(s),i!==null&&Fg(i),e.blockedOn=s,!1;i.shift()}return!0}function Vg(e,i,s){mu(e)&&s.delete(i)}function ey(){uh=!1,Xa!==null&&mu(Xa)&&(Xa=null),Wa!==null&&mu(Wa)&&(Wa=null),qa!==null&&mu(qa)&&(qa=null),Fo.forEach(Vg),Bo.forEach(Vg)}function gu(e,i){e.blockedOn===i&&(e.blockedOn=null,uh||(uh=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ey)))}var _u=null;function kg(e){_u!==e&&(_u=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){_u===e&&(_u=null);for(var i=0;i<e.length;i+=3){var s=e[i],r=e[i+1],c=e[i+2];if(typeof r!="function"){if(lh(r||s)===null)continue;break}var h=ba(s);h!==null&&(e.splice(i,3),i-=3,of(h,{pending:!0,data:c,method:s.method,action:r},r,c))}}))}function vr(e){function i(I){return gu(I,e)}Xa!==null&&gu(Xa,e),Wa!==null&&gu(Wa,e),qa!==null&&gu(qa,e),Fo.forEach(i),Bo.forEach(i);for(var s=0;s<Ya.length;s++){var r=Ya[s];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ya.length&&(s=Ya[0],s.blockedOn===null);)Gg(s),s.blockedOn===null&&Ya.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(r=0;r<s.length;r+=3){var c=s[r],h=s[r+1],y=c[_n]||null;if(typeof h=="function")y||kg(s);else if(y){var A=null;if(h&&h.hasAttribute("formAction")){if(c=h,y=h[_n]||null)A=y.formAction;else if(lh(c)!==null)continue}else A=y.action;typeof A=="function"?s[r+1]=A:(s.splice(r,3),r-=3),kg(s)}}}function Xg(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function i(){c!==null&&(c(),c=null),r||setTimeout(s,20)}function s(){if(!r&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),c!==null&&(c(),c=null)}}}function ch(e){this._internalRoot=e}vu.prototype.render=ch.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,r=Qn();zg(s,r,e,i,null,null)},vu.prototype.unmount=ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;zg(e.current,2,null,e,null,null),Jl(),i[mi]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var i=jr();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ya.length&&i!==0&&i<Ya[s].priority;s++);Ya.splice(s,0,e),s===0&&Gg(e)}};var Wg=t.version;if(Wg!=="19.2.3")throw Error(a(527,Wg,"19.2.3"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var ny={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Mt=xu.inject(ny),Et=xu}catch{}}return Go.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,r="",c=Jm,h=$m,y=t0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Ng(e,1,!1,null,null,s,r,null,c,h,y,Xg),e[mi]=i.current,Wf(e),new ch(i)},Go.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var r=!1,c="",h=Jm,y=$m,A=t0,I=null;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(I=s.formState)),i=Ng(e,1,!0,i,s??null,r,c,I,h,y,A,Xg),i.context=Og(null),s=i.current,r=Qn(),r=Zr(r),c=La(r),c.callback=null,Na(s,c,r),s=r,i.current.lanes=s,Cn(i,s),Li(i),e[mi]=i.current,Wf(e),new vu(i)},Go.version="19.2.3",Go}var e_;function py(){if(e_)return dh.exports;e_=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),dh.exports=dy(),dh.exports}var my=py();const $d="182",gy=0,n_=1,_y=2,Wu=1,vy=2,Qo=3,ss=0,kn=1,pa=2,ga=0,Pr=1,i_=2,a_=3,s_=4,xy=5,Us=100,Sy=101,yy=102,My=103,Ey=104,by=200,Ty=201,Ay=202,Ry=203,id=204,ad=205,Cy=206,wy=207,Dy=208,Uy=209,Ly=210,Ny=211,Oy=212,zy=213,Py=214,sd=0,rd=1,od=2,Br=3,ld=4,ud=5,cd=6,fd=7,tp=0,Fy=1,By=2,Fi=0,hv=1,dv=2,pv=3,mv=4,gv=5,_v=6,vv=7,xv=300,Ps=301,Ir=302,hd=303,dd=304,nc=306,pd=1e3,ma=1001,md=1002,Rn=1003,Iy=1004,Su=1005,Nn=1006,_h=1007,Ns=1008,ti=1009,Sv=1010,yv=1011,$o=1012,ep=1013,Hi=1014,zi=1015,Sa=1016,np=1017,ip=1018,tl=1020,Mv=35902,Ev=35899,bv=1021,Tv=1022,Ti=1023,ya=1026,Os=1027,Av=1028,ap=1029,Hr=1030,sp=1031,rp=1033,qu=33776,Yu=33777,Zu=33778,ju=33779,gd=35840,_d=35841,vd=35842,xd=35843,Sd=36196,yd=37492,Md=37496,Ed=37488,bd=37489,Td=37490,Ad=37491,Rd=37808,Cd=37809,wd=37810,Dd=37811,Ud=37812,Ld=37813,Nd=37814,Od=37815,zd=37816,Pd=37817,Fd=37818,Bd=37819,Id=37820,Hd=37821,Gd=36492,Vd=36494,kd=36495,Xd=36283,Wd=36284,qd=36285,Yd=36286,Hy=3200,Rv=0,Gy=1,ns="",hi="srgb",Gr="srgb-linear",$u="linear",Fe="srgb",xr=7680,r_=519,Vy=512,ky=513,Xy=514,op=515,Wy=516,qy=517,lp=518,Yy=519,o_=35044,l_="300 es",Pi=2e3,tc=2001;function Cv(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function ec(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function Zy(){const l=ec("canvas");return l.style.display="block",l}const u_={};function c_(...l){const t="THREE."+l.shift();console.log(t,...l)}function ae(...l){const t="THREE."+l.shift();console.warn(t,...l)}function Te(...l){const t="THREE."+l.shift();console.error(t,...l)}function el(...l){const t=l.join(" ");t in u_||(u_[t]=!0,ae(...l))}function jy(l,t,n){return new Promise(function(a,o){function u(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:o();break;case l.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}let kr=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let u=0,f=o.length;u<f;u++)o[u].call(this,t);t.target=null}}};const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=Math.PI/180,Zd=180/Math.PI;function il(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Dn[l&255]+Dn[l>>8&255]+Dn[l>>16&255]+Dn[l>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[a&255]+Dn[a>>8&255]+Dn[a>>16&255]+Dn[a>>24&255]).toLowerCase()}function xe(l,t,n){return Math.max(t,Math.min(n,l))}function Qy(l,t){return(l%t+t)%t}function xh(l,t,n){return(1-n)*l+n*t}function Vo(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Vn(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}let Be=class wv{constructor(t=0,n=0){wv.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-t.x,f=this.y-t.y;return this.x=u*a-f*o+t.x,this.y=u*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},al=class{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,u,f,d){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],v=u[f+0],x=u[f+1],E=u[f+2],T=u[f+3];if(d<=0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(d>=1){t[n+0]=v,t[n+1]=x,t[n+2]=E,t[n+3]=T;return}if(_!==T||m!==v||p!==x||g!==E){let M=m*v+p*x+g*E+_*T;M<0&&(v=-v,x=-x,E=-E,T=-T,M=-M);let S=1-d;if(M<.9995){const z=Math.acos(M),O=Math.sin(z);S=Math.sin(S*z)/O,d=Math.sin(d*z)/O,m=m*S+v*d,p=p*S+x*d,g=g*S+E*d,_=_*S+T*d}else{m=m*S+v*d,p=p*S+x*d,g=g*S+E*d,_=_*S+T*d;const z=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=z,p*=z,g*=z,_*=z}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,u,f){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=u[f],v=u[f+1],x=u[f+2],E=u[f+3];return t[n]=d*E+g*_+m*x-p*v,t[n+1]=m*E+g*v+p*_-d*x,t[n+2]=p*E+g*x+d*v-m*_,t[n+3]=g*E-d*_-m*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,u=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),_=d(u/2),v=m(a/2),x=m(o/2),E=m(u/2);switch(f){case"XYZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"YZX":this._x=v*g*_+p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_-v*x*E;break;case"XZY":this._x=v*g*_-p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_+v*x*E;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],u=n[8],f=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+d+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(u-p)*x,this._z=(f-o)*x}else if(a>d&&a>_){const x=2*Math.sqrt(1+a-d-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+f)/x,this._z=(u+p)/x}else if(d>_){const x=2*Math.sqrt(1+d-a-_);this._w=(u-p)/x,this._x=(o+f)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-a-d);this._w=(f-o)/x,this._x=(u+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,u=t._z,f=t._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+f*d+o*p-u*m,this._y=o*g+f*m+u*d-a*p,this._z=u*g+f*p+a*m-o*d,this._w=f*g-a*d-o*m-u*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,u=t._z,f=t._w,d=this.dot(t);d<0&&(a=-a,o=-o,u=-u,f=-f,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},rt=class Dv{constructor(t=0,n=0,a=0){Dv.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(f_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(f_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=t.elements,f=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*f,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*f,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,u=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*o-d*a),g=2*(d*n-u*o),_=2*(u*a-f*n);return this.x=n+m*p+f*_-d*g,this.y=a+m*g+d*p-u*_,this.z=o+m*_+u*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,u=t.z,f=n.x,d=n.y,m=n.z;return this.x=o*m-u*d,this.y=u*f-a*m,this.z=a*d-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Sh.copy(this).projectOnVector(t),this.sub(Sh)}reflect(t){return this.sub(Sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Sh=new rt,f_=new al;let ce=class Uv{constructor(t,n,a,o,u,f,d,m,p){Uv.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,f,d,m,p)}set(t,n,a,o,u,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=d,g[3]=n,g[4]=u,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,f=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],x=a[5],E=a[8],T=o[0],M=o[3],S=o[6],z=o[1],O=o[4],N=o[7],P=o[2],B=o[5],L=o[8];return u[0]=f*T+d*z+m*P,u[3]=f*M+d*O+m*B,u[6]=f*S+d*N+m*L,u[1]=p*T+g*z+_*P,u[4]=p*M+g*O+_*B,u[7]=p*S+g*N+_*L,u[2]=v*T+x*z+E*P,u[5]=v*M+x*O+E*B,u[8]=v*S+x*N+E*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*d*p-a*u*g+a*d*m+o*u*p-o*f*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,v=d*m-g*u,x=p*u-f*m,E=n*_+a*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(o*p-g*a)*T,t[2]=(d*a-o*f)*T,t[3]=v*T,t[4]=(g*n-o*m)*T,t[5]=(o*u-d*n)*T,t[6]=x*T,t[7]=(a*m-p*n)*T,t[8]=(f*n-a*u)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*f+p*d)+f+t,-o*p,o*m,-o*(-p*f+m*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(yh.makeScale(t,n)),this}rotate(t){return this.premultiply(yh.makeRotation(-t)),this}translate(t,n){return this.premultiply(yh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const yh=new ce,h_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ky(){const l={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(o,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Fe&&(o.r=_a(o.r),o.g=_a(o.g),o.b=_a(o.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(o.r=Fr(o.r),o.g=Fr(o.g),o.b=Fr(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ns?$u:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,f){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return el("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return el("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(o,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return l.define({[Gr]:{primaries:t,whitePoint:a,transfer:$u,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:a,transfer:Fe,toXYZ:h_,fromXYZ:d_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),l}const Me=Ky();function _a(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function Fr(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Sr,Jy=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Sr===void 0&&(Sr=ec("canvas")),Sr.width=t.width,Sr.height=t.height;const o=Sr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Sr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ec("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),u=o.data;for(let f=0;f<u.length;f++)u[f]=_a(u[f]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(_a(n[a]/255)*255):n[a]=_a(n[a]);return{data:n,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$y=0,up=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=il(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?u.push(Mh(o[f].image)):u.push(Mh(o[f]))}else u=Mh(o);a.url=u}return n||(t.images[this.uuid]=a),a}};function Mh(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?Jy.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let tM=0;const Eh=new rt;let Ri=class Qu extends kr{constructor(t=Qu.DEFAULT_IMAGE,n=Qu.DEFAULT_MAPPING,a=ma,o=ma,u=Nn,f=Ns,d=Ti,m=ti,p=Qu.DEFAULT_ANISOTROPY,g=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=il(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){ae(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ae(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pd:t.x=t.x-Math.floor(t.x);break;case ma:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pd:t.y=t.y-Math.floor(t.y);break;case ma:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=xv;Ri.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,n=0,a=0,o=1){$e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*o+f[12]*u,this.y=f[1]*n+f[5]*a+f[9]*o+f[13]*u,this.z=f[2]*n+f[6]*a+f[10]*o+f[14]*u,this.w=f[3]*n+f[7]*a+f[11]*o+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,u;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],x=m[5],E=m[9],T=m[2],M=m[6],S=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const O=(p+1)/2,N=(x+1)/2,P=(S+1)/2,B=(g+v)/4,L=(_+T)/4,j=(E+M)/4;return O>N&&O>P?O<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(O),o=B/a,u=L/a):N>P?N<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(N),a=B/o,u=j/o):P<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(P),a=L/u,o=j/u),this.set(a,o,u,n),this}let z=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(_-T)/z,this.z=(v-g)/z,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this.w=xe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this.w=xe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eM extends kr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new $e(0,0,t,n),this.scissorTest=!1,this.viewport=new $e(0,0,t,n);const o={width:t,height:n,depth:a.depth},u=new Ri(o);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new up(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends eM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Lv extends Ri{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends Ri{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Si):Si.fromBufferAttribute(u,f),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),yu.copy(a.boundingBox)),yu.applyMatrix4(t.matrixWorld),this.union(yu)}const o=t.children;for(let u=0,f=o.length;u<f;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),Mu.subVectors(this.max,ko),yr.subVectors(t.a,ko),Mr.subVectors(t.b,ko),Er.subVectors(t.c,ko),ja.subVectors(Mr,yr),Qa.subVectors(Er,Mr),bs.subVectors(yr,Er);let n=[0,-ja.z,ja.y,0,-Qa.z,Qa.y,0,-bs.z,bs.y,ja.z,0,-ja.x,Qa.z,0,-Qa.x,bs.z,0,-bs.x,-ja.y,ja.x,0,-Qa.y,Qa.x,0,-bs.y,bs.x,0];return!bh(n,yr,Mr,Er,Mu)||(n=[1,0,0,0,1,0,0,0,1],!bh(n,yr,Mr,Er,Mu))?!1:(Eu.crossVectors(ja,Qa),n=[Eu.x,Eu.y,Eu.z],bh(n,yr,Mr,Er,Mu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oa=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Si=new rt,yu=new sl,yr=new rt,Mr=new rt,Er=new rt,ja=new rt,Qa=new rt,bs=new rt,ko=new rt,Mu=new rt,Eu=new rt,Ts=new rt;function bh(l,t,n,a,o){for(let u=0,f=l.length-3;u<=f;u+=3){Ts.fromArray(l,u);const d=o.x*Math.abs(Ts.x)+o.y*Math.abs(Ts.y)+o.z*Math.abs(Ts.z),m=t.dot(Ts),p=n.dot(Ts),g=a.dot(Ts);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const iM=new sl,Xo=new rt,Th=new rt;class cp{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):iM.setFromPoints(t).getCenter(a);let o=0;for(let u=0,f=t.length;u<f;u++)o=Math.max(o,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Xo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(Th)),this.expandByPoint(Xo.copy(t.center).sub(Th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const la=new rt,Ah=new rt,bu=new rt,Ka=new rt,Rh=new rt,Tu=new rt,Ch=new rt;class aM{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=la.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Ah.copy(t).add(n).multiplyScalar(.5),bu.copy(n).sub(t).normalize(),Ka.copy(this.origin).sub(Ah);const u=t.distanceTo(n)*.5,f=-this.direction.dot(bu),d=Ka.dot(this.direction),m=-Ka.dot(bu),p=Ka.lengthSq(),g=Math.abs(1-f*f);let _,v,x,E;if(g>0)if(_=f*m-d,v=f*d-m,E=u*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,x=_*(_+f*v+2*d)+v*(f*_+v+2*m)+p}else v=u,_=Math.max(0,-(f*v+d)),x=-_*_+v*(v+2*m)+p;else v=-u,_=Math.max(0,-(f*v+d)),x=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-f*u+d)),v=_>0?-u:Math.min(Math.max(-u,-m),u),x=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-u,-m),u),x=v*(v+2*m)+p):(_=Math.max(0,-(f*u+d)),v=_>0?u:Math.min(Math.max(-u,-m),u),x=-_*_+v*(v+2*m)+p);else v=f>0?-u:u,_=Math.max(0,-(f*v+d)),x=-_*_+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ah).addScaledVector(bu,v),x}intersectSphere(t,n){la.subVectors(t.center,this.origin);const a=la.dot(this.direction),o=la.dot(la)-a*a,u=t.radius*t.radius;if(o>u)return null;const f=Math.sqrt(u-o),d=a-f,m=a+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,u,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),g>=0?(u=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),a>f||u>o||((u>a||isNaN(a))&&(a=u),(f<o||isNaN(o))&&(o=f),_>=0?(d=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,n,a,o,u){Rh.subVectors(n,t),Tu.subVectors(a,t),Ch.crossVectors(Rh,Tu);let f=this.direction.dot(Ch),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ka.subVectors(this.origin,t);const m=d*this.direction.dot(Tu.crossVectors(Ka,Tu));if(m<0)return null;const p=d*this.direction.dot(Rh.cross(Ka));if(p<0||m+p>f)return null;const g=-d*Ka.dot(Ch);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let fn=class jd{constructor(t,n,a,o,u,f,d,m,p,g,_,v,x,E,T,M){jd.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,f,d,m,p,g,_,v,x,E,T,M)}set(t,n,a,o,u,f,d,m,p,g,_,v,x,E,T,M){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=o,S[1]=u,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=g,S[10]=_,S[14]=v,S[3]=x,S[7]=E,S[11]=T,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jd().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/br.setFromMatrixColumn(t,0).length(),u=1/br.setFromMatrixColumn(t,1).length(),f=1/br.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,u=t.z,f=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const v=f*g,x=f*_,E=d*g,T=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=x+E*p,n[5]=v-T*p,n[9]=-d*m,n[2]=T-v*p,n[6]=E+x*p,n[10]=f*m}else if(t.order==="YXZ"){const v=m*g,x=m*_,E=p*g,T=p*_;n[0]=v+T*d,n[4]=E*d-x,n[8]=f*p,n[1]=f*_,n[5]=f*g,n[9]=-d,n[2]=x*d-E,n[6]=T+v*d,n[10]=f*m}else if(t.order==="ZXY"){const v=m*g,x=m*_,E=p*g,T=p*_;n[0]=v-T*d,n[4]=-f*_,n[8]=E+x*d,n[1]=x+E*d,n[5]=f*g,n[9]=T-v*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(t.order==="ZYX"){const v=f*g,x=f*_,E=d*g,T=d*_;n[0]=m*g,n[4]=E*p-x,n[8]=v*p+T,n[1]=m*_,n[5]=T*p+v,n[9]=x*p-E,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(t.order==="YZX"){const v=f*m,x=f*p,E=d*m,T=d*p;n[0]=m*g,n[4]=T-v*_,n[8]=E*_+x,n[1]=_,n[5]=f*g,n[9]=-d*g,n[2]=-p*g,n[6]=x*_+E,n[10]=v-T*_}else if(t.order==="XZY"){const v=f*m,x=f*p,E=d*m,T=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+T,n[5]=f*g,n[9]=x*_-E,n[2]=E*_-x,n[6]=d*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sM,t,rM)}lookAt(t,n,a){const o=this.elements;return Kn.subVectors(t,n),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ja.crossVectors(a,Kn),Ja.lengthSq()===0&&(Math.abs(a.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ja.crossVectors(a,Kn)),Ja.normalize(),Au.crossVectors(Kn,Ja),o[0]=Ja.x,o[4]=Au.x,o[8]=Kn.x,o[1]=Ja.y,o[5]=Au.y,o[9]=Kn.y,o[2]=Ja.z,o[6]=Au.z,o[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,f=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],x=a[13],E=a[2],T=a[6],M=a[10],S=a[14],z=a[3],O=a[7],N=a[11],P=a[15],B=o[0],L=o[4],j=o[8],C=o[12],w=o[1],k=o[5],at=o[9],nt=o[13],ht=o[2],lt=o[6],F=o[10],H=o[14],J=o[3],St=o[7],vt=o[11],U=o[15];return u[0]=f*B+d*w+m*ht+p*J,u[4]=f*L+d*k+m*lt+p*St,u[8]=f*j+d*at+m*F+p*vt,u[12]=f*C+d*nt+m*H+p*U,u[1]=g*B+_*w+v*ht+x*J,u[5]=g*L+_*k+v*lt+x*St,u[9]=g*j+_*at+v*F+x*vt,u[13]=g*C+_*nt+v*H+x*U,u[2]=E*B+T*w+M*ht+S*J,u[6]=E*L+T*k+M*lt+S*St,u[10]=E*j+T*at+M*F+S*vt,u[14]=E*C+T*nt+M*H+S*U,u[3]=z*B+O*w+N*ht+P*J,u[7]=z*L+O*k+N*lt+P*St,u[11]=z*j+O*at+N*F+P*vt,u[15]=z*C+O*nt+N*H+P*U,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],u=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],x=t[14],E=t[3],T=t[7],M=t[11],S=t[15],z=m*x-p*v,O=d*x-p*_,N=d*v-m*_,P=f*x-p*g,B=f*v-m*g,L=f*_-d*g;return n*(T*z-M*O+S*N)-a*(E*z-M*P+S*B)+o*(E*O-T*P+S*L)-u*(E*N-T*B+M*L)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],x=t[11],E=t[12],T=t[13],M=t[14],S=t[15],z=_*M*p-T*v*p+T*m*x-d*M*x-_*m*S+d*v*S,O=E*v*p-g*M*p-E*m*x+f*M*x+g*m*S-f*v*S,N=g*T*p-E*_*p+E*d*x-f*T*x-g*d*S+f*_*S,P=E*_*m-g*T*m-E*d*v+f*T*v+g*d*M-f*_*M,B=n*z+a*O+o*N+u*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return t[0]=z*L,t[1]=(T*v*u-_*M*u-T*o*x+a*M*x+_*o*S-a*v*S)*L,t[2]=(d*M*u-T*m*u+T*o*p-a*M*p-d*o*S+a*m*S)*L,t[3]=(_*m*u-d*v*u-_*o*p+a*v*p+d*o*x-a*m*x)*L,t[4]=O*L,t[5]=(g*M*u-E*v*u+E*o*x-n*M*x-g*o*S+n*v*S)*L,t[6]=(E*m*u-f*M*u-E*o*p+n*M*p+f*o*S-n*m*S)*L,t[7]=(f*v*u-g*m*u+g*o*p-n*v*p-f*o*x+n*m*x)*L,t[8]=N*L,t[9]=(E*_*u-g*T*u-E*a*x+n*T*x+g*a*S-n*_*S)*L,t[10]=(f*T*u-E*d*u+E*a*p-n*T*p-f*a*S+n*d*S)*L,t[11]=(g*d*u-f*_*u-g*a*p+n*_*p+f*a*x-n*d*x)*L,t[12]=P*L,t[13]=(g*T*o-E*_*o+E*a*v-n*T*v-g*a*M+n*_*M)*L,t[14]=(E*d*o-f*T*o-E*a*m+n*T*m+f*a*M-n*d*M)*L,t[15]=(f*_*o-g*d*o+g*a*m-n*_*m-f*a*v+n*d*v)*L,this}scale(t){const n=this.elements,a=t.x,o=t.y,u=t.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,f=t.x,d=t.y,m=t.z,p=u*f,g=u*d;return this.set(p*f+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*f,0,p*m-o*d,g*m+o*f,u*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,u,f){return this.set(1,a,u,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,u=n._x,f=n._y,d=n._z,m=n._w,p=u+u,g=f+f,_=d+d,v=u*p,x=u*g,E=u*_,T=f*g,M=f*_,S=d*_,z=m*p,O=m*g,N=m*_,P=a.x,B=a.y,L=a.z;return o[0]=(1-(T+S))*P,o[1]=(x+N)*P,o[2]=(E-O)*P,o[3]=0,o[4]=(x-N)*B,o[5]=(1-(v+S))*B,o[6]=(M+z)*B,o[7]=0,o[8]=(E+O)*L,o[9]=(M-z)*L,o[10]=(1-(v+T))*L,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let u=br.set(o[0],o[1],o[2]).length();const f=br.set(o[4],o[5],o[6]).length(),d=br.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),yi.copy(this);const p=1/u,g=1/f,_=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,n.setFromRotationMatrix(yi),a.x=u,a.y=f,a.z=d,this}makePerspective(t,n,a,o,u,f,d=Pi,m=!1){const p=this.elements,g=2*u/(n-t),_=2*u/(a-o),v=(n+t)/(n-t),x=(a+o)/(a-o);let E,T;if(m)E=u/(f-u),T=f*u/(f-u);else if(d===Pi)E=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===tc)E=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,u,f,d=Pi,m=!1){const p=this.elements,g=2/(n-t),_=2/(a-o),v=-(n+t)/(n-t),x=-(a+o)/(a-o);let E,T;if(m)E=1/(f-u),T=f/(f-u);else if(d===Pi)E=-2/(f-u),T=-(f+u)/(f-u);else if(d===tc)E=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};const br=new rt,yi=new fn,sM=new rt(0,0,0),rM=new rt(1,1,1),Ja=new rt,Au=new rt,Kn=new rt,p_=new fn,m_=new al;let Xr=class Nv{constructor(t=0,n=0,a=0,o=Nv.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,u=o[0],f=o[4],d=o[8],m=o[1],p=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,x),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return p_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(p_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return m_.setFromEuler(this),this.setFromQuaternion(m_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xr.DEFAULT_ORDER="XYZ";let Ov=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},oM=0;const g_=new rt,Tr=new al,ua=new fn,Ru=new rt,Wo=new rt,lM=new rt,uM=new al,__=new rt(1,0,0),v_=new rt(0,1,0),x_=new rt(0,0,1),S_={type:"added"},cM={type:"removed"},Ar={type:"childadded",child:null},wh={type:"childremoved",child:null};let Ai=class Ku extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ku.DEFAULT_UP.clone();const t=new rt,n=new Xr,a=new al,o=new rt(1,1,1);function u(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new ce}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Ku.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ku.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(__,t)}rotateY(t){return this.rotateOnAxis(v_,t)}rotateZ(t){return this.rotateOnAxis(x_,t)}translateOnAxis(t,n){return g_.copy(t).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(__,t)}translateY(t){return this.translateOnAxis(v_,t)}translateZ(t){return this.translateOnAxis(x_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Ru.copy(t):Ru.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Wo,Ru,this.up):ua.lookAt(Ru,Wo,this.up),this.quaternion.setFromRotationMatrix(ua),o&&(ua.extractRotation(o.matrixWorld),Tr.setFromRotationMatrix(ua),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(S_),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(cM),wh.child=t,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(S_),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,lM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,uM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));o.material=d}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(u(t.animations,m))}}if(n){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),x=f(t.animations),E=f(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=o,a;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}};Ai.DEFAULT_UP=new rt(0,1,0);Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new rt,ca=new rt,Dh=new rt,fa=new rt,Rr=new rt,Cr=new rt,y_=new rt,Uh=new rt,Lh=new rt,Nh=new rt,Oh=new $e,zh=new $e,Ph=new $e;class bi{constructor(t=new rt,n=new rt,a=new rt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Mi.subVectors(t,n),o.cross(Mi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,a,o,u){Mi.subVectors(o,n),ca.subVectors(a,n),Dh.subVectors(t,n);const f=Mi.dot(Mi),d=Mi.dot(ca),m=Mi.dot(Dh),p=ca.dot(ca),g=ca.dot(Dh),_=f*p-d*d;if(_===0)return u.set(0,0,0),null;const v=1/_,x=(p*m-d*g)*v,E=(f*g-d*m)*v;return u.set(1-x-E,E,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,n,a,o,u,f,d,m){return this.getBarycoord(t,n,a,o,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,fa.x),m.addScaledVector(f,fa.y),m.addScaledVector(d,fa.z),m)}static getInterpolatedAttribute(t,n,a,o,u,f){return Oh.setScalar(0),zh.setScalar(0),Ph.setScalar(0),Oh.fromBufferAttribute(t,n),zh.fromBufferAttribute(t,a),Ph.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(Oh,u.x),f.addScaledVector(zh,u.y),f.addScaledVector(Ph,u.z),f}static isFrontFacing(t,n,a,o){return Mi.subVectors(a,n),ca.subVectors(t,n),Mi.cross(ca).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Mi.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return bi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,u){return bi.getInterpolation(t,this.a,this.b,this.c,n,a,o,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,u=this.c;let f,d;Rr.subVectors(o,a),Cr.subVectors(u,a),Uh.subVectors(t,a);const m=Rr.dot(Uh),p=Cr.dot(Uh);if(m<=0&&p<=0)return n.copy(a);Lh.subVectors(t,o);const g=Rr.dot(Lh),_=Cr.dot(Lh);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(Rr,f);Nh.subVectors(t,u);const x=Rr.dot(Nh),E=Cr.dot(Nh);if(E>=0&&x<=E)return n.copy(u);const T=x*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(a).addScaledVector(Cr,d);const M=g*E-x*_;if(M<=0&&_-g>=0&&x-E>=0)return y_.subVectors(u,o),d=(_-g)/(_-g+(x-E)),n.copy(o).addScaledVector(y_,d);const S=1/(M+T+v);return f=T*S,d=v*S,n.copy(a).addScaledVector(Rr,f).addScaledVector(Cr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Cu={h:0,s:0,l:0};function Fh(l,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?l+(t-l)*6*n:n<1/2?t:n<2/3?l+(t-l)*6*(2/3-n):l}class De{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Me.workingColorSpace){return this.r=t,this.g=n,this.b=a,Me.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Me.workingColorSpace){if(t=Qy(t,1),n=xe(n,0,1),a=xe(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,f=2*a-u;this.r=Fh(f,u,t+1/3),this.g=Fh(f,u,t),this.b=Fh(f,u,t-1/3)}return Me.colorSpaceToWorking(this,o),this}setStyle(t,n=hi){function a(u){u!==void 0&&parseFloat(u)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:ae("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=hi){const a=zv[t.toLowerCase()];return a!==void 0?this.setHex(a,n):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Me.workingToColorSpace(Un.copy(this),t),Math.round(xe(Un.r*255,0,255))*65536+Math.round(xe(Un.g*255,0,255))*256+Math.round(xe(Un.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Me.workingColorSpace){Me.workingToColorSpace(Un.copy(this),n);const a=Un.r,o=Un.g,u=Un.b,f=Math.max(a,o,u),d=Math.min(a,o,u);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case a:m=(o-u)/_+(o<u?6:0);break;case o:m=(u-a)/_+2;break;case u:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Me.workingColorSpace){return Me.workingToColorSpace(Un.copy(this),n),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=hi){Me.workingToColorSpace(Un.copy(this),t);const n=Un.r,a=Un.g,o=Un.b;return t!==hi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL($a),this.setHSL($a.h+t,$a.s+n,$a.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL($a),t.getHSL(Cu);const a=xh($a.h,Cu.h,n),o=xh($a.s,Cu.s,n),u=xh($a.l,Cu.l,n);return this.setHSL(a,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*o,this.g=u[1]*n+u[4]*a+u[7]*o,this.b=u[2]*n+u[5]*a+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new De;De.NAMES=zv;let fM=0;class rl extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=il(),this.name="",this.type="Material",this.blending=Pr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=ad,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){ae(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ae(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(a.blending=this.blending),this.side!==ss&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==id&&(a.blendSrc=this.blendSrc),this.blendDst!==ad&&(a.blendDst=this.blendDst),this.blendEquation!==Us&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(n){const u=o(t.textures),f=o(t.images);u.length>0&&(a.textures=u),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pv extends rl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new rt,wu=new Be;let hM=0;class Ii{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=o_,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)wu.fromBufferAttribute(this,n),wu.applyMatrix3(t),this.setXY(n,wu.x,wu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix3(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Vo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Vn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Vn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),a=Vn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),a=Vn(a,this.array),o=Vn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,u){return t*=this.itemSize,this.normalized&&(n=Vn(n,this.array),a=Vn(a,this.array),o=Vn(o,this.array),u=Vn(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==o_&&(t.usage=this.usage),t}}class Fv extends Ii{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Bv extends Ii{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class va extends Ii{constructor(t,n,a){super(new Float32Array(t),n,a)}}let dM=0;const fi=new fn,Bh=new Ai,wr=new rt,Jn=new sl,qo=new sl,gn=new rt;class Ma extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cv(t)?Bv:Fv)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ce().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,n,a){return fi.makeTranslation(t,n,a),this.applyMatrix4(fi),this}scale(t,n,a){return fi.makeScale(t,n,a),this.applyMatrix4(fi),this}lookAt(t){return Bh.lookAt(t),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,u=t.length;o<u;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new va(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const u=t[o];n.setXYZ(o,u.x,u.y,u.z||0)}t.length>n.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const u=n[a];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const a=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];qo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Jn.min,qo.min),Jn.expandByPoint(gn),gn.addVectors(Jn.max,qo.max),Jn.expandByPoint(gn)):(Jn.expandByPoint(qo.min),Jn.expandByPoint(qo.max))}Jn.getCenter(a);let o=0;for(let u=0,f=t.count;u<f;u++)gn.fromBufferAttribute(t,u),o=Math.max(o,a.distanceToSquared(gn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(wr.fromBufferAttribute(t,p),gn.add(wr)),o=Math.max(o,a.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<a.count;j++)d[j]=new rt,m[j]=new rt;const p=new rt,g=new rt,_=new rt,v=new Be,x=new Be,E=new Be,T=new rt,M=new rt;function S(j,C,w){p.fromBufferAttribute(a,j),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,w),v.fromBufferAttribute(u,j),x.fromBufferAttribute(u,C),E.fromBufferAttribute(u,w),g.sub(p),_.sub(p),x.sub(v),E.sub(v);const k=1/(x.x*E.y-E.x*x.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(k),M.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(k),d[j].add(T),d[C].add(T),d[w].add(T),m[j].add(M),m[C].add(M),m[w].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let j=0,C=z.length;j<C;++j){const w=z[j],k=w.start,at=w.count;for(let nt=k,ht=k+at;nt<ht;nt+=3)S(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const O=new rt,N=new rt,P=new rt,B=new rt;function L(j){P.fromBufferAttribute(o,j),B.copy(P);const C=d[j];O.copy(C),O.sub(P.multiplyScalar(P.dot(C))).normalize(),N.crossVectors(B,C);const k=N.dot(m[j])<0?-1:1;f.setXYZW(j,O.x,O.y,O.z,k)}for(let j=0,C=z.length;j<C;++j){const w=z[j],k=w.start,at=w.count;for(let nt=k,ht=k+at;nt<ht;nt+=3)L(t.getX(nt+0)),L(t.getX(nt+1)),L(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new rt,u=new rt,f=new rt,d=new rt,m=new rt,p=new rt,g=new rt,_=new rt;if(t)for(let v=0,x=t.count;v<x;v+=3){const E=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,M),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),d.fromBufferAttribute(a,E),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),d.add(g),m.add(g),p.add(g),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)gn.fromBufferAttribute(t,n),gn.normalize(),t.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let x=0,E=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?x=m[T]*d.data.stride+d.offset:x=m[T]*g;for(let S=0;S<g;S++)v[E++]=p[x++]}return new Ii(v,g,_)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ma,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=t(m,a);n.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=t(v,a);m.push(x)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(t.data))}g.length>0&&(o[m]=g,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const u=t.morphAttributes;for(const p in u){const g=[],_=u[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M_=new fn,As=new aM,Du=new cp,E_=new rt,Uu=new rt,Lu=new rt,Nu=new rt,Ih=new rt,Ou=new rt,b_=new rt,zu=new rt;class Gi extends Ai{constructor(t=new Ma,n=new Pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=o.length;u<f;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,u=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const d=this.morphTargetInfluences;if(u&&d){Ou.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(Ih.fromBufferAttribute(_,t),f?Ou.addScaledVector(Ih,g):Ou.addScaledVector(Ih.sub(n),g))}n.add(Ou)}return n}raycast(t,n){const a=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Du.copy(a.boundingSphere),Du.applyMatrix4(u),As.copy(t.ray).recast(t.near),!(Du.containsPoint(As.origin)===!1&&(As.intersectSphere(Du,E_)===null||As.origin.distanceToSquared(E_)>(t.far-t.near)**2))&&(M_.copy(u).invert(),As.copy(t.ray).applyMatrix4(M_),!(a.boundingBox!==null&&As.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,As)))}_computeIntersections(t,n,a){let o;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,v=u.groups,x=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const M=v[E],S=f[M.materialIndex],z=Math.max(M.start,x.start),O=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let N=z,P=O;N<P;N+=3){const B=d.getX(N),L=d.getX(N+1),j=d.getX(N+2);o=Pu(this,S,t,a,p,g,_,B,L,j),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let M=E,S=T;M<S;M+=3){const z=d.getX(M),O=d.getX(M+1),N=d.getX(M+2);o=Pu(this,f,t,a,p,g,_,z,O,N),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const M=v[E],S=f[M.materialIndex],z=Math.max(M.start,x.start),O=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let N=z,P=O;N<P;N+=3){const B=N,L=N+1,j=N+2;o=Pu(this,S,t,a,p,g,_,B,L,j),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(m.count,x.start+x.count);for(let M=E,S=T;M<S;M+=3){const z=M,O=M+1,N=M+2;o=Pu(this,f,t,a,p,g,_,z,O,N),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function pM(l,t,n,a,o,u,f,d){let m;if(t.side===kn?m=a.intersectTriangle(f,u,o,!0,d):m=a.intersectTriangle(o,u,f,t.side===ss,d),m===null)return null;zu.copy(d),zu.applyMatrix4(l.matrixWorld);const p=n.ray.origin.distanceTo(zu);return p<n.near||p>n.far?null:{distance:p,point:zu.clone(),object:l}}function Pu(l,t,n,a,o,u,f,d,m,p){l.getVertexPosition(d,Uu),l.getVertexPosition(m,Lu),l.getVertexPosition(p,Nu);const g=pM(l,t,n,a,Uu,Lu,Nu,b_);if(g){const _=new rt;bi.getBarycoord(b_,Uu,Lu,Nu,_),o&&(g.uv=bi.getInterpolatedAttribute(o,d,m,p,_,new Be)),u&&(g.uv1=bi.getInterpolatedAttribute(u,d,m,p,_,new Be)),f&&(g.normal=bi.getInterpolatedAttribute(f,d,m,p,_,new rt),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new rt,materialIndex:0};bi.getNormal(Uu,Lu,Nu,v.normal),g.face=v,g.barycoord=_}return g}class Wr extends Ma{constructor(t=1,n=1,a=1,o=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:u,depthSegments:f};const d=this;o=Math.floor(o),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,x=0;E("z","y","x",-1,-1,a,n,t,f,u,0),E("z","y","x",1,-1,a,n,-t,f,u,1),E("x","z","y",1,1,t,a,n,o,f,2),E("x","z","y",1,-1,t,a,-n,o,f,3),E("x","y","z",1,-1,t,n,a,o,u,4),E("x","y","z",-1,-1,t,n,-a,o,u,5),this.setIndex(m),this.setAttribute("position",new va(p,3)),this.setAttribute("normal",new va(g,3)),this.setAttribute("uv",new va(_,2));function E(T,M,S,z,O,N,P,B,L,j,C){const w=N/L,k=P/j,at=N/2,nt=P/2,ht=B/2,lt=L+1,F=j+1;let H=0,J=0;const St=new rt;for(let vt=0;vt<F;vt++){const U=vt*k-nt;for(let it=0;it<lt;it++){const gt=it*w-at;St[T]=gt*z,St[M]=U*O,St[S]=ht,p.push(St.x,St.y,St.z),St[T]=0,St[M]=0,St[S]=B>0?1:-1,g.push(St.x,St.y,St.z),_.push(it/L),_.push(1-vt/j),H+=1}}for(let vt=0;vt<j;vt++)for(let U=0;U<L;U++){const it=v+U+lt*vt,gt=v+U+lt*(vt+1),Tt=v+(U+1)+lt*(vt+1),Bt=v+(U+1)+lt*vt;m.push(it,gt,Bt),m.push(gt,Tt,Bt),J+=6}d.addGroup(x,J,C),x+=J,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vr(l){const t={};for(const n in l){t[n]={};for(const a in l[n]){const o=l[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function zn(l){const t={};for(let n=0;n<l.length;n++){const a=Vr(l[n]);for(const o in a)t[o]=a[o]}return t}function mM(l){const t=[];for(let n=0;n<l.length;n++)t.push(l[n].clone());return t}function Iv(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const gM={clone:Vr,merge:zn};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends rl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=mM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Hv extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new rt,T_=new Be,A_=new Be;class di extends Hv{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(vh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,n){return this.getViewBounds(t,T_,A_),n.subVectors(A_,T_)}setViewOffset(t,n,a,o,u,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(vh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,u=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*o/m,n-=f.offsetY*a/p,o*=f.width/m,a*=f.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Dr=-90,Ur=1;class xM extends Ai{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(Dr,Ur,t,n);o.layers=this.layers,this.add(o);const u=new di(Dr,Ur,t,n);u.layers=this.layers,this.add(u);const f=new di(Dr,Ur,t,n);f.layers=this.layers,this.add(f);const d=new di(Dr,Ur,t,n);d.layers=this.layers,this.add(d);const m=new di(Dr,Ur,t,n);m.layers=this.layers,this.add(m);const p=new di(Dr,Ur,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,u,f,d,m]=n;for(const p of n)this.remove(p);if(t===Pi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===tc)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,u),t.setRenderTarget(a,1,o),t.render(n,f),t.setRenderTarget(a,2,o),t.render(n,d),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(_,v,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Gv extends Ri{constructor(t=[],n=Ps,a,o,u,f,d,m,p,g){super(t,n,a,o,u,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vv extends Bi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Gv(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Wr(5,5,5),u=new Vi({name:"CubemapFromEquirect",uniforms:Vr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:kn,blending:ga});u.uniforms.tEquirect.value=n;const f=new Gi(o,u),d=n.minFilter;return n.minFilter===Ns&&(n.minFilter=Nn),new xM(1,10,this).update(t,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,o);t.setRenderTarget(u)}}class Fu extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),S=this._getHandJoint(p,T);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,E=.005;p.inputState.pinching&&v>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Fu;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class yM extends Ri{constructor(t=null,n=1,a=1,o,u,f,d,m,p=Rn,g=Rn,_,v){super(null,f,d,m,p,g,o,u,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gh=new rt,MM=new rt,EM=new ce;class Ds{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Gh.subVectors(a,n).cross(MM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Gh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||EM.getNormalMatrix(t),o=this.coplanarPoint(Gh).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new cp,bM=new Be(.5,.5),Bu=new rt;class fp{constructor(t=new Ds,n=new Ds,a=new Ds,o=new Ds,u=new Ds,f=new Ds){this.planes=[t,n,a,o,u,f]}set(t,n,a,o,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(u),d[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Pi,a=!1){const o=this.planes,u=t.elements,f=u[0],d=u[1],m=u[2],p=u[3],g=u[4],_=u[5],v=u[6],x=u[7],E=u[8],T=u[9],M=u[10],S=u[11],z=u[12],O=u[13],N=u[14],P=u[15];if(o[0].setComponents(p-f,x-g,S-E,P-z).normalize(),o[1].setComponents(p+f,x+g,S+E,P+z).normalize(),o[2].setComponents(p+d,x+_,S+T,P+O).normalize(),o[3].setComponents(p-d,x-_,S-T,P-O).normalize(),a)o[4].setComponents(m,v,M,N).normalize(),o[5].setComponents(p-m,x-v,S-M,P-N).normalize();else if(o[4].setComponents(p-m,x-v,S-M,P-N).normalize(),n===Pi)o[5].setComponents(p+m,x+v,S+M,P+N).normalize();else if(n===tc)o[5].setComponents(m,v,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const n=bM.distanceTo(t.center);return Rs.radius=.7071067811865476+n,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Bu.x=o.normal.x>0?t.max.x:t.min.x,Bu.y=o.normal.y>0?t.max.y:t.min.y,Bu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nl extends Ri{constructor(t,n,a=Hi,o,u,f,d=Rn,m=Rn,p,g=ya,_=1){if(g!==ya&&g!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,u,f,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new up(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class TM extends nl{constructor(t,n=Hi,a=Ps,o,u,f=Rn,d=Rn,m,p=ya){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,o,u,f,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class kv extends Ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ic extends Ma{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const u=t/2,f=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,_=t/d,v=n/m,x=[],E=[],T=[],M=[];for(let S=0;S<g;S++){const z=S*v-f;for(let O=0;O<p;O++){const N=O*_-u;E.push(N,-z,0),T.push(0,0,1),M.push(O/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let z=0;z<d;z++){const O=z+p*S,N=z+p*(S+1),P=z+1+p*(S+1),B=z+1+p*S;x.push(O,N,B),x.push(N,P,B)}this.setIndex(x),this.setAttribute("position",new va(E,3)),this.setAttribute("normal",new va(T,3)),this.setAttribute("uv",new va(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.width,t.height,t.widthSegments,t.heightSegments)}}class AM extends Vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class RM extends rl{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rv,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class CM extends rl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wM extends rl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xv extends Ai{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Vh=new fn,R_=new rt,C_=new rt;class DM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fp,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;R_.setFromMatrixPosition(t.matrixWorld),n.position.copy(R_),C_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(C_),n.updateMatrixWorld(),Vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hp extends Hv{constructor(t=-1,n=1,a=1,o=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-t,f=a+t,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UM extends DM{constructor(){super(new hp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LM extends Xv{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ai.DEFAULT_UP),this.updateMatrix(),this.target=new Ai,this.shadow=new UM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class NM extends Xv{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class OM extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function w_(l,t,n,a){const o=zM(a);switch(n){case bv:return l*t;case Av:return l*t/o.components*o.byteLength;case ap:return l*t/o.components*o.byteLength;case Hr:return l*t*2/o.components*o.byteLength;case sp:return l*t*2/o.components*o.byteLength;case Tv:return l*t*3/o.components*o.byteLength;case Ti:return l*t*4/o.components*o.byteLength;case rp:return l*t*4/o.components*o.byteLength;case qu:case Yu:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Zu:case ju:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case _d:case xd:return Math.max(l,16)*Math.max(t,8)/4;case gd:case vd:return Math.max(l,8)*Math.max(t,8)/2;case Sd:case yd:case Ed:case bd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Md:case Td:case Ad:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case zd:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case Id:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case kd:return Math.ceil(l/4)*Math.ceil(t/4)*16;case Xd:case Wd:return Math.ceil(l/4)*Math.ceil(t/4)*8;case qd:case Yd:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zM(l){switch(l){case ti:case Sv:return{byteLength:1,components:1};case $o:case yv:case Sa:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case Hi:case ep:case zi:return{byteLength:4,components:1};case Mv:case Ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);function Wv(){let l=null,t=!1,n=null,a=null;function o(u,f){n(u,f),a=l.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=l.requestAnimationFrame(o),t=!0)},stop:function(){l.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){l=u}}}function PM(l){const t=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=l.createBuffer();l.bindBuffer(m,v),l.bufferData(m,p,g),d.onUploadCallback();let x;if(p instanceof Float32Array)x=l.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=l.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=l.HALF_FLOAT:x=l.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=l.SHORT;else if(p instanceof Uint32Array)x=l.UNSIGNED_INT;else if(p instanceof Int32Array)x=l.INT;else if(p instanceof Int8Array)x=l.BYTE;else if(p instanceof Uint8Array)x=l.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(l.bindBuffer(p,d),_.length===0)l.bufferSubData(p,0,g);else{_.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<_.length;x++){const E=_[v],T=_[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let x=0,E=_.length;x<E;x++){const T=_[x];l.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(l.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:u,update:f}}var FM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
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
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
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
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WM=`#ifdef USE_BATCHING
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
#endif`,qM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QM=`#ifdef USE_IRIDESCENCE
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
#endif`,KM=`#ifdef USE_BUMPMAP
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rE=`#define PI 3.141592653589793
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
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lE=`vec3 transformedNormal = objectNormal;
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
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dE="gl_FragColor = linearToOutputTexel( gl_FragColor );",pE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mE=`#ifdef USE_ENVMAP
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
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ME=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bE=`#ifdef USE_GRADIENTMAP
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
}`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CE=`uniform bool receiveShadow;
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
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,DE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
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
#endif`,zE=`uniform sampler2D dfgLUT;
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
}`,PE=`
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
#endif`,FE=`#if defined( RE_IndirectDiffuse )
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
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qE=`#if defined( USE_POINTS_UV )
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
#endif`,YE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`#ifdef USE_MORPHTARGETS
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
#endif`,$E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,e1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
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
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
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
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`#include <common>
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
}`,k1=`#if DEPTH_PACKING == 3200
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
}`,X1=`#define DISTANCE
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
}`,W1=`#define DISTANCE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`uniform float scale;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,K1=`uniform vec3 diffuse;
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
}`,J1=`#define LAMBERT
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
}`,$1=`#define LAMBERT
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
}`,tb=`#define MATCAP
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
}`,eb=`#define MATCAP
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
}`,nb=`#define NORMAL
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
}`,ib=`#define NORMAL
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
}`,ab=`#define PHONG
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
}`,sb=`#define PHONG
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
}`,rb=`#define STANDARD
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
}`,ob=`#define STANDARD
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
}`,lb=`#define TOON
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
}`,ub=`#define TOON
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
}`,cb=`uniform float size;
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
}`,fb=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,db=`uniform vec3 color;
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
}`,pb=`uniform float rotation;
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
}`,mb=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:FM,alphahash_pars_fragment:BM,alphamap_fragment:IM,alphamap_pars_fragment:HM,alphatest_fragment:GM,alphatest_pars_fragment:VM,aomap_fragment:kM,aomap_pars_fragment:XM,batching_pars_vertex:WM,batching_vertex:qM,begin_vertex:YM,beginnormal_vertex:ZM,bsdfs:jM,iridescence_fragment:QM,bumpmap_pars_fragment:KM,clipping_planes_fragment:JM,clipping_planes_pars_fragment:$M,clipping_planes_pars_vertex:tE,clipping_planes_vertex:eE,color_fragment:nE,color_pars_fragment:iE,color_pars_vertex:aE,color_vertex:sE,common:rE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:lE,displacementmap_pars_vertex:uE,displacementmap_vertex:cE,emissivemap_fragment:fE,emissivemap_pars_fragment:hE,colorspace_fragment:dE,colorspace_pars_fragment:pE,envmap_fragment:mE,envmap_common_pars_fragment:gE,envmap_pars_fragment:_E,envmap_pars_vertex:vE,envmap_physical_pars_fragment:wE,envmap_vertex:xE,fog_vertex:SE,fog_pars_vertex:yE,fog_fragment:ME,fog_pars_fragment:EE,gradientmap_pars_fragment:bE,lightmap_pars_fragment:TE,lights_lambert_fragment:AE,lights_lambert_pars_fragment:RE,lights_pars_begin:CE,lights_toon_fragment:DE,lights_toon_pars_fragment:UE,lights_phong_fragment:LE,lights_phong_pars_fragment:NE,lights_physical_fragment:OE,lights_physical_pars_fragment:zE,lights_fragment_begin:PE,lights_fragment_maps:FE,lights_fragment_end:BE,logdepthbuf_fragment:IE,logdepthbuf_pars_fragment:HE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:VE,map_fragment:kE,map_pars_fragment:XE,map_particle_fragment:WE,map_particle_pars_fragment:qE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:ZE,morphinstance_vertex:jE,morphcolor_vertex:QE,morphnormal_vertex:KE,morphtarget_pars_vertex:JE,morphtarget_vertex:$E,normal_fragment_begin:t1,normal_fragment_maps:e1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:a1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:u1,opaque_fragment:c1,packing:f1,premultiplied_alpha_fragment:h1,project_vertex:d1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:_1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:x1,shadowmap_vertex:S1,shadowmask_pars_fragment:y1,skinbase_vertex:M1,skinning_pars_vertex:E1,skinning_vertex:b1,skinnormal_vertex:T1,specularmap_fragment:A1,specularmap_pars_fragment:R1,tonemapping_fragment:C1,tonemapping_pars_fragment:w1,transmission_fragment:D1,transmission_pars_fragment:U1,uv_pars_fragment:L1,uv_pars_vertex:N1,uv_vertex:O1,worldpos_vertex:z1,background_vert:P1,background_frag:F1,backgroundCube_vert:B1,backgroundCube_frag:I1,cube_vert:H1,cube_frag:G1,depth_vert:V1,depth_frag:k1,distance_vert:X1,distance_frag:W1,equirect_vert:q1,equirect_frag:Y1,linedashed_vert:Z1,linedashed_frag:j1,meshbasic_vert:Q1,meshbasic_frag:K1,meshlambert_vert:J1,meshlambert_frag:$1,meshmatcap_vert:tb,meshmatcap_frag:eb,meshnormal_vert:nb,meshnormal_frag:ib,meshphong_vert:ab,meshphong_frag:sb,meshphysical_vert:rb,meshphysical_frag:ob,meshtoon_vert:lb,meshtoon_frag:ub,points_vert:cb,points_frag:fb,shadow_vert:hb,shadow_frag:db,sprite_vert:pb,sprite_frag:mb},Nt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Oi={basic:{uniforms:zn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:zn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:zn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:zn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:zn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new De(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:zn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:zn([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:zn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:zn([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:zn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:zn([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:zn([Nt.common,Nt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:zn([Nt.lights,Nt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Oi.physical={uniforms:zn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Iu={r:0,b:0,g:0},Cs=new Xr,gb=new fn;function _b(l,t,n,a,o,u,f){const d=new De(0);let m=u===!0?0:1,p,g,_=null,v=0,x=null;function E(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?n:t).get(N)),N}function T(O){let N=!1;const P=E(O);P===null?S(d,m):P&&P.isColor&&(S(P,1),N=!0);const B=l.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(l.autoClear||N)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function M(O,N){const P=E(N);P&&(P.isCubeTexture||P.mapping===nc)?(g===void 0&&(g=new Gi(new Wr(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Vr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,L,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Cs.copy(N.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(gb.makeRotationFromEuler(Cs)),g.material.toneMapped=Me.getTransfer(P.colorSpace)!==Fe,(_!==P||v!==P.version||x!==l.toneMapping)&&(g.material.needsUpdate=!0,_=P,v=P.version,x=l.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Gi(new ic(2,2),new Vi({name:"BackgroundMaterial",uniforms:Vr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Me.getTransfer(P.colorSpace)!==Fe,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||x!==l.toneMapping)&&(p.material.needsUpdate=!0,_=P,v=P.version,x=l.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function S(O,N){O.getRGB(Iu,Iv(l)),a.buffers.color.setClear(Iu.r,Iu.g,Iu.b,N,f)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,N=1){d.set(O),m=N,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,S(d,m)},render:T,addToRenderList:M,dispose:z}}function vb(l,t){const n=l.getParameter(l.MAX_VERTEX_ATTRIBS),a={},o=v(null);let u=o,f=!1;function d(w,k,at,nt,ht){let lt=!1;const F=_(nt,at,k);u!==F&&(u=F,p(u.object)),lt=x(w,nt,at,ht),lt&&E(w,nt,at,ht),ht!==null&&t.update(ht,l.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,N(w,k,at,nt),ht!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return l.createVertexArray()}function p(w){return l.bindVertexArray(w)}function g(w){return l.deleteVertexArray(w)}function _(w,k,at){const nt=at.wireframe===!0;let ht=a[w.id];ht===void 0&&(ht={},a[w.id]=ht);let lt=ht[k.id];lt===void 0&&(lt={},ht[k.id]=lt);let F=lt[nt];return F===void 0&&(F=v(m()),lt[nt]=F),F}function v(w){const k=[],at=[],nt=[];for(let ht=0;ht<n;ht++)k[ht]=0,at[ht]=0,nt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:at,attributeDivisors:nt,object:w,attributes:{},index:null}}function x(w,k,at,nt){const ht=u.attributes,lt=k.attributes;let F=0;const H=at.getAttributes();for(const J in H)if(H[J].location>=0){const vt=ht[J];let U=lt[J];if(U===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),vt===void 0||vt.attribute!==U||U&&vt.data!==U.data)return!0;F++}return u.attributesNum!==F||u.index!==nt}function E(w,k,at,nt){const ht={},lt=k.attributes;let F=0;const H=at.getAttributes();for(const J in H)if(H[J].location>=0){let vt=lt[J];vt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor));const U={};U.attribute=vt,vt&&vt.data&&(U.data=vt.data),ht[J]=U,F++}u.attributes=ht,u.attributesNum=F,u.index=nt}function T(){const w=u.newAttributes;for(let k=0,at=w.length;k<at;k++)w[k]=0}function M(w){S(w,0)}function S(w,k){const at=u.newAttributes,nt=u.enabledAttributes,ht=u.attributeDivisors;at[w]=1,nt[w]===0&&(l.enableVertexAttribArray(w),nt[w]=1),ht[w]!==k&&(l.vertexAttribDivisor(w,k),ht[w]=k)}function z(){const w=u.newAttributes,k=u.enabledAttributes;for(let at=0,nt=k.length;at<nt;at++)k[at]!==w[at]&&(l.disableVertexAttribArray(at),k[at]=0)}function O(w,k,at,nt,ht,lt,F){F===!0?l.vertexAttribIPointer(w,k,at,ht,lt):l.vertexAttribPointer(w,k,at,nt,ht,lt)}function N(w,k,at,nt){T();const ht=nt.attributes,lt=at.getAttributes(),F=k.defaultAttributeValues;for(const H in lt){const J=lt[H];if(J.location>=0){let St=ht[H];if(St===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const vt=St.normalized,U=St.itemSize,it=t.get(St);if(it===void 0)continue;const gt=it.buffer,Tt=it.type,Bt=it.bytesPerElement,et=Tt===l.INT||Tt===l.UNSIGNED_INT||St.gpuType===ep;if(St.isInterleavedBufferAttribute){const ct=St.data,wt=ct.stride,Vt=St.offset;if(ct.isInstancedInterleavedBuffer){for(let It=0;It<J.locationSize;It++)S(J.location+It,ct.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let It=0;It<J.locationSize;It++)M(J.location+It);l.bindBuffer(l.ARRAY_BUFFER,gt);for(let It=0;It<J.locationSize;It++)O(J.location+It,U/J.locationSize,Tt,vt,wt*Bt,(Vt+U/J.locationSize*It)*Bt,et)}else{if(St.isInstancedBufferAttribute){for(let ct=0;ct<J.locationSize;ct++)S(J.location+ct,St.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ct=0;ct<J.locationSize;ct++)M(J.location+ct);l.bindBuffer(l.ARRAY_BUFFER,gt);for(let ct=0;ct<J.locationSize;ct++)O(J.location+ct,U/J.locationSize,Tt,vt,U*Bt,U/J.locationSize*ct*Bt,et)}}else if(F!==void 0){const vt=F[H];if(vt!==void 0)switch(vt.length){case 2:l.vertexAttrib2fv(J.location,vt);break;case 3:l.vertexAttrib3fv(J.location,vt);break;case 4:l.vertexAttrib4fv(J.location,vt);break;default:l.vertexAttrib1fv(J.location,vt)}}}}z()}function P(){j();for(const w in a){const k=a[w];for(const at in k){const nt=k[at];for(const ht in nt)g(nt[ht].object),delete nt[ht];delete k[at]}delete a[w]}}function B(w){if(a[w.id]===void 0)return;const k=a[w.id];for(const at in k){const nt=k[at];for(const ht in nt)g(nt[ht].object),delete nt[ht];delete k[at]}delete a[w.id]}function L(w){for(const k in a){const at=a[k];if(at[w.id]===void 0)continue;const nt=at[w.id];for(const ht in nt)g(nt[ht].object),delete nt[ht];delete at[w.id]}}function j(){C(),f=!0,u!==o&&(u=o,p(u.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:B,releaseStatesOfProgram:L,initAttributes:T,enableAttribute:M,disableUnusedAttributes:z}}function xb(l,t,n){let a;function o(p){a=p}function u(p,g){l.drawArrays(a,p,g),n.update(g,a,1)}function f(p,g,_){_!==0&&(l.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let x=0;for(let E=0;E<_;E++)x+=g[E];n.update(x,a,1)}function m(p,g,_,v){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)f(p[E],g[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];n.update(E,a,1)}}this.setMode=o,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Sb(l,t,n,a){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");o=l.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(L){return!(L!==Ti&&a.convert(L)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const j=L===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==ti&&a.convert(L)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==zi&&!j)}function m(L){if(L==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(ae("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),E=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=l.getParameter(l.MAX_TEXTURE_SIZE),M=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),S=l.getParameter(l.MAX_VERTEX_ATTRIBS),z=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),O=l.getParameter(l.MAX_VARYING_VECTORS),N=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),P=l.getParameter(l.MAX_SAMPLES),B=l.getParameter(l.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:N,maxSamples:P,samples:B}}function yb(l){const t=this;let n=null,a=0,o=!1,u=!1;const f=new Ds,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,S=l.get(_);if(!o||E===null||E.length===0||u&&!M)u?g(null):p();else{const z=u?0:a,O=z*4;let N=S.clippingState||null;m.value=N,N=g(E,v,O,x);for(let P=0;P!==O;++P)N[P]=n[P];S.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,x,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const S=x+T*4,z=v.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<S)&&(M=new Float32Array(S));for(let O=0,N=x;O!==T;++O,N+=4)f.copy(_[O]).applyMatrix4(z,d),f.normal.toArray(M,N),M[N+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function Mb(l){let t=new WeakMap;function n(f,d){return d===hd?f.mapping=Ps:d===dd&&(f.mapping=Ir),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===hd||d===dd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Vv(m.height);return p.fromEquirectangularTexture(l,f),t.set(f,p),f.addEventListener("dispose",o),n(p.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const is=4,D_=[.125,.215,.35,.446,.526,.582],Ls=20,Eb=256,Yo=new hp,U_=new De;let kh=null,Xh=0,Wh=0,qh=!1;const bb=new rt;class L_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,u={}){const{size:f=256,position:d=bb}=u;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=qh,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ps||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Sa,format:Ti,colorSpace:Gr,depthBuffer:!1},o=N_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(t,n,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Tb(u)),this._blurMaterial=Rb(u,t,n),this._ggxMaterial=Ab(u,t,n)}return o}_compileMaterial(t){const n=new Gi(new Ma,t);this._renderer.compile(n,Yo)}_sceneToCubeUV(t,n,a,o,u){const m=new di(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(U_),_.toneMapping=Fi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gi(new Wr,new Pv({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let S=!1;const z=t.background;z?z.isColor&&(M.color.copy(z),t.background=null,S=!0):(M.color.copy(U_),S=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const P=this._cubeSize;Lr(o,N*P,O>2?P:0,P,P),_.setRenderTarget(o),S&&_.render(T,m),_.render(t,m)}_.toneMapping=x,_.autoClear=v,t.background=z}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Ps||t.mapping===Ir;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const u=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Lr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,Yo)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(t,u-1,u);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[a];d.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,x=_*v,{_lodMax:E}=this,T=this._sizeLods[a],M=3*T*(a>E-is?a-E+is:0),S=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=E-n,Lr(u,M,S,3*T,2*T),o.setRenderTarget(u),o.render(d,Yo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-a,Lr(t,M,S,3*T,2*T),o.setRenderTarget(t),o.render(d,Yo)}_blur(t,n,a,o,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,o,"latitudinal",u),this._halfBlur(f,t,a,a,o,"longitudinal",u)}_halfBlur(t,n,a,o,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const v=p.uniforms,x=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*Ls-1),T=u/E,M=isFinite(u)?1+Math.floor(g*T):Ls;M>Ls&&ae(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ls}`);const S=[];let z=0;for(let L=0;L<Ls;++L){const j=L/T,C=Math.exp(-j*j/2);S.push(C),L===0?z+=C:L<M&&(z+=2*C)}for(let L=0;L<S.length;L++)S[L]=S[L]/z;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=S,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:O}=this;v.dTheta.value=E,v.mipInt.value=O-a;const N=this._sizeLods[o],P=3*N*(o>O-is?o-O+is:0),B=4*(this._cubeSize-N);Lr(n,P,B,3*N,2*N),m.setRenderTarget(n),m.render(_,Yo)}}function Tb(l){const t=[],n=[],a=[];let o=l;const u=l-is+1+D_.length;for(let f=0;f<u;f++){const d=Math.pow(2,o);t.push(d);let m=1/d;f>l-is?m=D_[f-l+is-1]:f===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,T=3,M=2,S=1,z=new Float32Array(T*E*x),O=new Float32Array(M*E*x),N=new Float32Array(S*E*x);for(let B=0;B<x;B++){const L=B%3*2/3-1,j=B>2?0:-1,C=[L,j,0,L+2/3,j,0,L+2/3,j+1,0,L,j,0,L+2/3,j+1,0,L,j+1,0];z.set(C,T*E*B),O.set(v,M*E*B);const w=[B,B,B,B,B,B];N.set(w,S*E*B)}const P=new Ma;P.setAttribute("position",new Ii(z,T)),P.setAttribute("uv",new Ii(O,M)),P.setAttribute("faceIndex",new Ii(N,S)),a.push(new Gi(P,null)),o>is&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function N_(l,t,n){const a=new Bi(l,t,n);return a.texture.mapping=nc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Lr(l,t,n,a,o){l.viewport.set(t,n,a,o),l.scissor.set(t,n,a,o)}function Ab(l,t,n){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Eb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Rb(l,t,n){const a=new Float32Array(Ls),o=new rt(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function O_(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ga,depthTest:!1,depthWrite:!1})}function z_(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function Cb(l){let t=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===hd||m===dd,g=m===Ps||m===Ir;if(p||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new L_(l)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const x=d.image;return p&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new L_(l)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function wb(l){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=l.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&el("WebGLRenderer: "+a+" extension not supported."),o}}}function Db(l,t,n,a){const o={},u=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete o[v.id];const x=u.get(v);x&&(t.remove(x),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",f),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const x in v)t.update(v[x],l.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,E=_.attributes.position;let T=0;if(x!==null){const z=x.array;T=x.version;for(let O=0,N=z.length;O<N;O+=3){const P=z[O+0],B=z[O+1],L=z[O+2];v.push(P,B,B,L,L,P)}}else if(E!==void 0){const z=E.array;T=E.version;for(let O=0,N=z.length/3-1;O<N;O+=3){const P=O+0,B=O+1,L=O+2;v.push(P,B,B,L,L,P)}}else return;const M=new(Cv(v)?Bv:Fv)(v,1);M.version=T;const S=u.get(_);S&&t.remove(S),u.set(_,M)}function g(_){const v=u.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function Ub(l,t,n){let a;function o(v){a=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function m(v,x){l.drawElements(a,x,u,v*f),n.update(x,a,1)}function p(v,x,E){E!==0&&(l.drawElementsInstanced(a,x,u,v*f,E),n.update(x,a,E))}function g(v,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,u,v,0,E);let M=0;for(let S=0;S<E;S++)M+=x[S];n.update(M,a,1)}function _(v,x,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<v.length;S++)p(v[S]/f,x[S],T[S]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,u,v,0,T,0,E);let S=0;for(let z=0;z<E;z++)S+=x[z]*T[z];n.update(S,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Lb(l){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,f,d){switch(n.calls++,f){case l.TRIANGLES:n.triangles+=d*(u/3);break;case l.LINES:n.lines+=d*(u/2);break;case l.LINE_STRIP:n.lines+=d*(u-1);break;case l.LINE_LOOP:n.lines+=d*u;break;case l.POINTS:n.points+=d*u;break;default:Te("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function Nb(l,t,n){const a=new WeakMap,o=new $e;function u(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(d);if(v===void 0||v.count!==_){let w=function(){j.dispose(),a.delete(d),d.removeEventListener("dispose",w)};var x=w;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),T===!0&&(N=2),M===!0&&(N=3);let P=d.attributes.position.count*N,B=1;P>t.maxTextureSize&&(B=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const L=new Float32Array(P*B*4*_),j=new Lv(L,P,B,_);j.type=zi,j.needsUpdate=!0;const C=N*4;for(let k=0;k<_;k++){const at=S[k],nt=z[k],ht=O[k],lt=P*B*4*k;for(let F=0;F<at.count;F++){const H=F*C;E===!0&&(o.fromBufferAttribute(at,F),L[lt+H+0]=o.x,L[lt+H+1]=o.y,L[lt+H+2]=o.z,L[lt+H+3]=0),T===!0&&(o.fromBufferAttribute(nt,F),L[lt+H+4]=o.x,L[lt+H+5]=o.y,L[lt+H+6]=o.z,L[lt+H+7]=0),M===!0&&(o.fromBufferAttribute(ht,F),L[lt+H+8]=o.x,L[lt+H+9]=o.y,L[lt+H+10]=o.z,L[lt+H+11]=ht.itemSize===4?o.w:1)}}v={count:_,texture:j,size:new Be(P,B)},a.set(d,v),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(l,"morphTexture",f.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(l,"morphTargetBaseInfluence",T),m.getUniforms().setValue(l,"morphTargetInfluences",p)}m.getUniforms().setValue(l,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}return{update:u}}function Ob(l,t,n,a){let o=new WeakMap;function u(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(o.get(_)!==p&&(t.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,l.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,l.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return _}function f(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:f}}const zb={[hv]:"LINEAR_TONE_MAPPING",[dv]:"REINHARD_TONE_MAPPING",[pv]:"CINEON_TONE_MAPPING",[mv]:"ACES_FILMIC_TONE_MAPPING",[_v]:"AGX_TONE_MAPPING",[vv]:"NEUTRAL_TONE_MAPPING",[gv]:"CUSTOM_TONE_MAPPING"};function Pb(l,t,n,a,o){const u=new Bi(t,n,{type:l,depthBuffer:a,stencilBuffer:o}),f=new Bi(t,n,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),d=new Ma;d.setAttribute("position",new va([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new va([0,2,0,0,2,0],2));const m=new AM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Gi(d,m),g=new hp(-1,1,1,-1,0,1);let _=null,v=null,x=!1,E,T=null,M=[],S=!1;this.setSize=function(z,O){u.setSize(z,O),f.setSize(z,O);for(let N=0;N<M.length;N++){const P=M[N];P.setSize&&P.setSize(z,O)}},this.setEffects=function(z){M=z,S=M.length>0&&M[0].isRenderPass===!0;const O=u.width,N=u.height;for(let P=0;P<M.length;P++){const B=M[P];B.setSize&&B.setSize(O,N)}},this.begin=function(z,O){if(x||z.toneMapping===Fi&&M.length===0)return!1;if(T=O,O!==null){const N=O.width,P=O.height;(u.width!==N||u.height!==P)&&this.setSize(N,P)}return S===!1&&z.setRenderTarget(u),E=z.toneMapping,z.toneMapping=Fi,!0},this.hasRenderPass=function(){return S},this.end=function(z,O){z.toneMapping=E,x=!0;let N=u,P=f;for(let B=0;B<M.length;B++){const L=M[B];if(L.enabled!==!1&&(L.render(z,P,N,O),L.needsSwap!==!1)){const j=N;N=P,P=j}}if(_!==z.outputColorSpace||v!==z.toneMapping){_=z.outputColorSpace,v=z.toneMapping,m.defines={},Me.getTransfer(_)===Fe&&(m.defines.SRGB_TRANSFER="");const B=zb[v];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,z.setRenderTarget(T),z.render(p,g),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),m.dispose()}}const qv=new Ri,Qd=new nl(1,1),Yv=new Lv,Zv=new nM,jv=new Gv,P_=[],F_=[],B_=new Float32Array(16),I_=new Float32Array(9),H_=new Float32Array(4);function qr(l,t,n){const a=l[0];if(a<=0||a>0)return l;const o=t*n;let u=P_[o];if(u===void 0&&(u=new Float32Array(o),P_[o]=u),t!==0){a.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=n,l[f].toArray(u,d)}return u}function hn(l,t){if(l.length!==t.length)return!1;for(let n=0,a=l.length;n<a;n++)if(l[n]!==t[n])return!1;return!0}function dn(l,t){for(let n=0,a=t.length;n<a;n++)l[n]=t[n]}function sc(l,t){let n=F_[t];n===void 0&&(n=new Int32Array(t),F_[t]=n);for(let a=0;a!==t;++a)n[a]=l.allocateTextureUnit();return n}function Fb(l,t){const n=this.cache;n[0]!==t&&(l.uniform1f(this.addr,t),n[0]=t)}function Bb(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;l.uniform2fv(this.addr,t),dn(n,t)}}function Ib(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hn(n,t))return;l.uniform3fv(this.addr,t),dn(n,t)}}function Hb(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;l.uniform4fv(this.addr,t),dn(n,t)}}function Gb(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;l.uniformMatrix2fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;H_.set(a),l.uniformMatrix2fv(this.addr,!1,H_),dn(n,a)}}function Vb(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;l.uniformMatrix3fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;I_.set(a),l.uniformMatrix3fv(this.addr,!1,I_),dn(n,a)}}function kb(l,t){const n=this.cache,a=t.elements;if(a===void 0){if(hn(n,t))return;l.uniformMatrix4fv(this.addr,!1,t),dn(n,t)}else{if(hn(n,a))return;B_.set(a),l.uniformMatrix4fv(this.addr,!1,B_),dn(n,a)}}function Xb(l,t){const n=this.cache;n[0]!==t&&(l.uniform1i(this.addr,t),n[0]=t)}function Wb(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;l.uniform2iv(this.addr,t),dn(n,t)}}function qb(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;l.uniform3iv(this.addr,t),dn(n,t)}}function Yb(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;l.uniform4iv(this.addr,t),dn(n,t)}}function Zb(l,t){const n=this.cache;n[0]!==t&&(l.uniform1ui(this.addr,t),n[0]=t)}function jb(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;l.uniform2uiv(this.addr,t),dn(n,t)}}function Qb(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;l.uniform3uiv(this.addr,t),dn(n,t)}}function Kb(l,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;l.uniform4uiv(this.addr,t),dn(n,t)}}function Jb(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o);let u;this.type===l.SAMPLER_2D_SHADOW?(Qd.compareFunction=n.isReversedDepthBuffer()?lp:op,u=Qd):u=qv,n.setTexture2D(t||u,o)}function $b(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Zv,o)}function tT(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||jv,o)}function eT(l,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(l.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Yv,o)}function nT(l){switch(l){case 5126:return Fb;case 35664:return Bb;case 35665:return Ib;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return kb;case 5124:case 35670:return Xb;case 35667:case 35671:return Wb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return Zb;case 36294:return jb;case 36295:return Qb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return eT}}function iT(l,t){l.uniform1fv(this.addr,t)}function aT(l,t){const n=qr(t,this.size,2);l.uniform2fv(this.addr,n)}function sT(l,t){const n=qr(t,this.size,3);l.uniform3fv(this.addr,n)}function rT(l,t){const n=qr(t,this.size,4);l.uniform4fv(this.addr,n)}function oT(l,t){const n=qr(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,n)}function lT(l,t){const n=qr(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,n)}function uT(l,t){const n=qr(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,n)}function cT(l,t){l.uniform1iv(this.addr,t)}function fT(l,t){l.uniform2iv(this.addr,t)}function hT(l,t){l.uniform3iv(this.addr,t)}function dT(l,t){l.uniform4iv(this.addr,t)}function pT(l,t){l.uniform1uiv(this.addr,t)}function mT(l,t){l.uniform2uiv(this.addr,t)}function gT(l,t){l.uniform3uiv(this.addr,t)}function _T(l,t){l.uniform4uiv(this.addr,t)}function vT(l,t,n){const a=this.cache,o=t.length,u=sc(n,o);hn(a,u)||(l.uniform1iv(this.addr,u),dn(a,u));let f;this.type===l.SAMPLER_2D_SHADOW?f=Qd:f=qv;for(let d=0;d!==o;++d)n.setTexture2D(t[d]||f,u[d])}function xT(l,t,n){const a=this.cache,o=t.length,u=sc(n,o);hn(a,u)||(l.uniform1iv(this.addr,u),dn(a,u));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||Zv,u[f])}function ST(l,t,n){const a=this.cache,o=t.length,u=sc(n,o);hn(a,u)||(l.uniform1iv(this.addr,u),dn(a,u));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||jv,u[f])}function yT(l,t,n){const a=this.cache,o=t.length,u=sc(n,o);hn(a,u)||(l.uniform1iv(this.addr,u),dn(a,u));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||Yv,u[f])}function MT(l){switch(l){case 5126:return iT;case 35664:return aT;case 35665:return sT;case 35666:return rT;case 35674:return oT;case 35675:return lT;case 35676:return uT;case 5124:case 35670:return cT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return yT}}class ET{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=nT(n.type)}}class bT{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MT(n.type)}}class TT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let u=0,f=o.length;u!==f;++u){const d=o[u];d.setValue(t,n[d.id],a)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function G_(l,t){l.seq.push(t),l.map[t.id]=t}function AT(l,t,n){const a=l.name,o=a.length;for(Yh.lastIndex=0;;){const u=Yh.exec(a),f=Yh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===o){G_(n,p===void 0?new ET(d,l,t):new bT(d,l,t));break}else{let _=n.map[d];_===void 0&&(_=new TT(d),G_(n,_)),n=_}}}class Ju{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const d=t.getActiveUniform(n,f),m=t.getUniformLocation(n,d.name);AT(d,m,this)}const o=[],u=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(f):u.push(f);o.length>0&&(this.seq=o.concat(u))}setValue(t,n,a,o){const u=this.map[n];u!==void 0&&u.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let u=0,f=n.length;u!==f;++u){const d=n[u],m=a[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,u=t.length;o!==u;++o){const f=t[o];f.id in n&&a.push(f)}return a}}function V_(l,t,n){const a=l.createShader(t);return l.shaderSource(a,n),l.compileShader(a),a}const RT=37297;let CT=0;function wT(l,t){const n=l.split(`
`),a=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let f=o;f<u;f++){const d=f+1;a.push(`${d===t?">":" "} ${d}: ${n[f]}`)}return a.join(`
`)}const k_=new ce;function DT(l){Me._getMatrix(k_,Me.workingColorSpace,l);const t=`mat3( ${k_.elements.map(n=>n.toFixed(4))} )`;switch(Me.getTransfer(l)){case $u:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",l),[t,"LinearTransferOETF"]}}function X_(l,t,n){const a=l.getShaderParameter(t,l.COMPILE_STATUS),u=(l.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+wT(l.getShaderSource(t),d)}else return u}function UT(l,t){const n=DT(t);return[`vec4 ${l}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const LT={[hv]:"Linear",[dv]:"Reinhard",[pv]:"Cineon",[mv]:"ACESFilmic",[_v]:"AgX",[vv]:"Neutral",[gv]:"Custom"};function NT(l,t){const n=LT[t];return n===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+l+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+l+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hu=new rt;function OT(){Me.getLuminanceCoefficients(Hu);const l=Hu.x.toFixed(4),t=Hu.y.toFixed(4),n=Hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zT(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function PT(l){const t=[];for(const n in l){const a=l[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function FT(l,t){const n={},a=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const u=l.getActiveAttrib(t,o),f=u.name;let d=1;u.type===l.FLOAT_MAT2&&(d=2),u.type===l.FLOAT_MAT3&&(d=3),u.type===l.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:l.getAttribLocation(t,f),locationSize:d}}return n}function Ko(l){return l!==""}function W_(l,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function q_(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(l){return l.replace(BT,HT)}const IT=new Map;function HT(l,t){let n=ue[t];if(n===void 0){const a=IT.get(t);if(a!==void 0)n=ue[a],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Kd(n)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y_(l){return l.replace(GT,VT)}function VT(l,t,n,a){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Z_(l){let t=`precision ${l.precision} float;
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
#define LOW_PRECISION`),t}const kT={[Wu]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function XT(l){return kT[l.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WT={[Ps]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[nc]:"ENVMAP_TYPE_CUBE_UV"};function qT(l){return l.envMap===!1?"ENVMAP_TYPE_CUBE":WT[l.envMapMode]||"ENVMAP_TYPE_CUBE"}const YT={[Ir]:"ENVMAP_MODE_REFRACTION"};function ZT(l){return l.envMap===!1?"ENVMAP_MODE_REFLECTION":YT[l.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jT={[tp]:"ENVMAP_BLENDING_MULTIPLY",[Fy]:"ENVMAP_BLENDING_MIX",[By]:"ENVMAP_BLENDING_ADD"};function QT(l){return l.envMap===!1?"ENVMAP_BLENDING_NONE":jT[l.combine]||"ENVMAP_BLENDING_NONE"}function KT(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function JT(l,t,n,a){const o=l.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=XT(n),p=qT(n),g=ZT(n),_=QT(n),v=KT(n),x=zT(n),E=PT(u),T=o.createProgram();let M,S,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ko).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ko).join(`
`),S.length>0&&(S+=`
`)):(M=[Z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),S=[Z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?ue.tonemapping_pars_fragment:"",n.toneMapping!==Fi?NT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,UT("linearToOutputTexel",n.outputColorSpace),OT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ko).join(`
`)),f=Kd(f),f=W_(f,n),f=q_(f,n),d=Kd(d),d=W_(d,n),d=q_(d,n),f=Y_(f),d=Y_(d),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=z+M+f,N=z+S+d,P=V_(o,o.VERTEX_SHADER,O),B=V_(o,o.FRAGMENT_SHADER,N);o.attachShader(T,P),o.attachShader(T,B),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function L(k){if(l.debug.checkShaderErrors){const at=o.getProgramInfoLog(T)||"",nt=o.getShaderInfoLog(P)||"",ht=o.getShaderInfoLog(B)||"",lt=at.trim(),F=nt.trim(),H=ht.trim();let J=!0,St=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(J=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(o,T,P,B);else{const vt=X_(o,P,"vertex"),U=X_(o,B,"fragment");Te("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+lt+`
`+vt+`
`+U)}else lt!==""?ae("WebGLProgram: Program Info Log:",lt):(F===""||H==="")&&(St=!1);St&&(k.diagnostics={runnable:J,programLog:lt,vertexShader:{log:F,prefix:M},fragmentShader:{log:H,prefix:S}})}o.deleteShader(P),o.deleteShader(B),j=new Ju(o,T),C=FT(o,T)}let j;this.getUniforms=function(){return j===void 0&&L(this),j};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(T,RT)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=B,this}let $T=0;class tA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new eA(t),n.set(t,a)),a}}class eA{constructor(t){this.id=$T++,this.code=t,this.usedTimes=0}}function nA(l,t,n,a,o,u,f){const d=new Ov,m=new tA,p=new Set,g=[],_=new Map,v=o.logarithmicDepthBuffer;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,k,at,nt){const ht=at.fog,lt=nt.geometry,F=C.isMeshStandardMaterial?at.environment:null,H=(C.isMeshStandardMaterial?n:t).get(C.envMap||F),J=H&&H.mapping===nc?H.image.height:null,St=E[C.type];C.precision!==null&&(x=o.getMaxPrecision(C.precision),x!==C.precision&&ae("WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const vt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,U=vt!==void 0?vt.length:0;let it=0;lt.morphAttributes.position!==void 0&&(it=1),lt.morphAttributes.normal!==void 0&&(it=2),lt.morphAttributes.color!==void 0&&(it=3);let gt,Tt,Bt,et;if(St){const ye=Oi[St];gt=ye.vertexShader,Tt=ye.fragmentShader}else gt=C.vertexShader,Tt=C.fragmentShader,m.update(C),Bt=m.getVertexShaderID(C),et=m.getFragmentShaderID(C);const ct=l.getRenderTarget(),wt=l.state.buffers.depth.getReversed(),Vt=nt.isInstancedMesh===!0,It=nt.isBatchedMesh===!0,fe=!!C.map,je=!!C.matcap,me=!!H,he=!!C.aoMap,Ae=!!C.lightMap,se=!!C.bumpMap,Qe=!!C.normalMap,G=!!C.displacementMap,qe=!!C.emissiveMap,Se=!!C.metalnessMap,Ue=!!C.roughnessMap,qt=C.anisotropy>0,D=C.clearcoat>0,b=C.dispersion>0,W=C.iridescence>0,dt=C.sheen>0,xt=C.transmission>0,ut=qt&&!!C.anisotropyMap,Zt=D&&!!C.clearcoatMap,Rt=D&&!!C.clearcoatNormalMap,kt=D&&!!C.clearcoatRoughnessMap,te=W&&!!C.iridescenceMap,Mt=W&&!!C.iridescenceThicknessMap,Et=dt&&!!C.sheenColorMap,Pt=dt&&!!C.sheenRoughnessMap,Ot=!!C.specularMap,Ct=!!C.specularColorMap,oe=!!C.specularIntensityMap,X=xt&&!!C.transmissionMap,Ut=xt&&!!C.thicknessMap,bt=!!C.gradientMap,zt=!!C.alphaMap,yt=C.alphaTest>0,_t=!!C.alphaHash,At=!!C.extensions;let ee=Fi;C.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ee=l.toneMapping);const Ne={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:gt,fragmentShader:Tt,defines:C.defines,customVertexShaderID:Bt,customFragmentShaderID:et,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:It,batchingColor:It&&nt._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&nt.instanceColor!==null,instancingMorph:Vt&&nt.morphTexture!==null,outputColorSpace:ct===null?l.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Gr,alphaToCoverage:!!C.alphaToCoverage,map:fe,matcap:je,envMap:me,envMapMode:me&&H.mapping,envMapCubeUVHeight:J,aoMap:he,lightMap:Ae,bumpMap:se,normalMap:Qe,displacementMap:G,emissiveMap:qe,normalMapObjectSpace:Qe&&C.normalMapType===Gy,normalMapTangentSpace:Qe&&C.normalMapType===Rv,metalnessMap:Se,roughnessMap:Ue,anisotropy:qt,anisotropyMap:ut,clearcoat:D,clearcoatMap:Zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:kt,dispersion:b,iridescence:W,iridescenceMap:te,iridescenceThicknessMap:Mt,sheen:dt,sheenColorMap:Et,sheenRoughnessMap:Pt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:oe,transmission:xt,transmissionMap:X,thicknessMap:Ut,gradientMap:bt,opaque:C.transparent===!1&&C.blending===Pr&&C.alphaToCoverage===!1,alphaMap:zt,alphaTest:yt,alphaHash:_t,combine:C.combine,mapUv:fe&&T(C.map.channel),aoMapUv:he&&T(C.aoMap.channel),lightMapUv:Ae&&T(C.lightMap.channel),bumpMapUv:se&&T(C.bumpMap.channel),normalMapUv:Qe&&T(C.normalMap.channel),displacementMapUv:G&&T(C.displacementMap.channel),emissiveMapUv:qe&&T(C.emissiveMap.channel),metalnessMapUv:Se&&T(C.metalnessMap.channel),roughnessMapUv:Ue&&T(C.roughnessMap.channel),anisotropyMapUv:ut&&T(C.anisotropyMap.channel),clearcoatMapUv:Zt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&T(C.sheenRoughnessMap.channel),specularMapUv:Ot&&T(C.specularMap.channel),specularColorMapUv:Ct&&T(C.specularColorMap.channel),specularIntensityMapUv:oe&&T(C.specularIntensityMap.channel),transmissionMapUv:X&&T(C.transmissionMap.channel),thicknessMapUv:Ut&&T(C.thicknessMap.channel),alphaMapUv:zt&&T(C.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Qe||qt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!lt.attributes.uv&&(fe||zt),fog:!!ht,useFog:C.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:nt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:l.shadowMap.enabled&&k.length>0,shadowMapType:l.shadowMap.type,toneMapping:ee,decodeVideoTexture:fe&&C.map.isVideoTexture===!0&&Me.getTransfer(C.map.colorSpace)===Fe,decodeVideoTextureEmissive:qe&&C.emissiveMap.isVideoTexture===!0&&Me.getTransfer(C.emissiveMap.colorSpace)===Fe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===pa,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:At&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&C.extensions.multiDraw===!0||It)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function S(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)w.push(k),w.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(z(w,C),O(w,C),w.push(l.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function z(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function N(C){const w=E[C.type];let k;if(w){const at=Oi[w];k=gM.clone(at.uniforms)}else k=C.uniforms;return k}function P(C,w){let k=_.get(w);return k!==void 0?++k.usedTimes:(k=new JT(l,w,C,u),g.push(k),_.set(w,k)),k}function B(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function L(C){m.remove(C)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:N,acquireProgram:P,releaseProgram:B,releaseShaderCache:L,programs:g,dispose:j}}function iA(){let l=new WeakMap;function t(f){return l.has(f)}function n(f){let d=l.get(f);return d===void 0&&(d={},l.set(f,d)),d}function a(f){l.delete(f)}function o(f,d,m){l.get(f)[d]=m}function u(){l=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:u}}function aA(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function j_(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function Q_(){const l=[];let t=0;const n=[],a=[],o=[];function u(){t=0,n.length=0,a.length=0,o.length=0}function f(_,v,x,E,T,M){let S=l[t];return S===void 0?(S={id:_.id,object:_,geometry:v,material:x,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},l[t]=S):(S.id=_.id,S.object=_,S.geometry=v,S.material=x,S.groupOrder=E,S.renderOrder=_.renderOrder,S.z=T,S.group=M),t++,S}function d(_,v,x,E,T,M){const S=f(_,v,x,E,T,M);x.transmission>0?a.push(S):x.transparent===!0?o.push(S):n.push(S)}function m(_,v,x,E,T,M){const S=f(_,v,x,E,T,M);x.transmission>0?a.unshift(S):x.transparent===!0?o.unshift(S):n.unshift(S)}function p(_,v){n.length>1&&n.sort(_||aA),a.length>1&&a.sort(v||j_),o.length>1&&o.sort(v||j_)}function g(){for(let _=t,v=l.length;_<v;_++){const x=l[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:u,push:d,unshift:m,finish:g,sort:p}}function sA(){let l=new WeakMap;function t(a,o){const u=l.get(a);let f;return u===void 0?(f=new Q_,l.set(a,[f])):o>=u.length?(f=new Q_,u.push(f)):f=u[o],f}function n(){l=new WeakMap}return{get:t,dispose:n}}function rA(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new De};break;case"SpotLight":n={position:new rt,direction:new rt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return l[t.id]=n,n}}}function oA(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=n,n}}}let lA=0;function uA(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function cA(l){const t=new rA,n=oA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new rt);const o=new rt,u=new fn,f=new fn;function d(p){let g=0,_=0,v=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let x=0,E=0,T=0,M=0,S=0,z=0,O=0,N=0,P=0,B=0,L=0;p.sort(uA);for(let C=0,w=p.length;C<w;C++){const k=p[C],at=k.color,nt=k.intensity,ht=k.distance;let lt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Hr?lt=k.shadow.map.texture:lt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=at.r*nt,_+=at.g*nt,v+=at.b*nt;else if(k.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(k.sh.coefficients[F],nt);L++}else if(k.isDirectionalLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,J=n.get(k);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.directionalShadow[x]=J,a.directionalShadowMap[x]=lt,a.directionalShadowMatrix[x]=k.shadow.matrix,z++}a.directional[x]=F,x++}else if(k.isSpotLight){const F=t.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(at).multiplyScalar(nt),F.distance=ht,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,a.spot[T]=F;const H=k.shadow;if(k.map&&(a.spotLightMap[P]=k.map,P++,H.updateMatrices(k),k.castShadow&&B++),a.spotLightMatrix[T]=H.matrix,k.castShadow){const J=n.get(k);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.spotShadow[T]=J,a.spotShadowMap[T]=lt,N++}T++}else if(k.isRectAreaLight){const F=t.get(k);F.color.copy(at).multiplyScalar(nt),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),a.rectArea[M]=F,M++}else if(k.isPointLight){const F=t.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const H=k.shadow,J=n.get(k);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,a.pointShadow[E]=J,a.pointShadowMap[E]=lt,a.pointShadowMatrix[E]=k.shadow.matrix,O++}a.point[E]=F,E++}else if(k.isHemisphereLight){const F=t.get(k);F.skyColor.copy(k.color).multiplyScalar(nt),F.groundColor.copy(k.groundColor).multiplyScalar(nt),a.hemi[S]=F,S++}}M>0&&(l.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const j=a.hash;(j.directionalLength!==x||j.pointLength!==E||j.spotLength!==T||j.rectAreaLength!==M||j.hemiLength!==S||j.numDirectionalShadows!==z||j.numPointShadows!==O||j.numSpotShadows!==N||j.numSpotMaps!==P||j.numLightProbes!==L)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=S,a.directionalShadow.length=z,a.directionalShadowMap.length=z,a.pointShadow.length=O,a.pointShadowMap.length=O,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=z,a.pointShadowMatrix.length=O,a.spotLightMatrix.length=N+P-B,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=L,j.directionalLength=x,j.pointLength=E,j.spotLength=T,j.rectAreaLength=M,j.hemiLength=S,j.numDirectionalShadows=z,j.numPointShadows=O,j.numSpotShadows=N,j.numSpotMaps=P,j.numLightProbes=L,a.version=lA++)}function m(p,g){let _=0,v=0,x=0,E=0,T=0;const M=g.matrixWorldInverse;for(let S=0,z=p.length;S<z;S++){const O=p[S];if(O.isDirectionalLight){const N=a.directional[_];N.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(M),_++}else if(O.isSpotLight){const N=a.spot[x];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(M),x++}else if(O.isRectAreaLight){const N=a.rectArea[E];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),f.identity(),u.copy(O.matrixWorld),u.premultiply(M),f.extractRotation(u),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(O.isPointLight){const N=a.point[v];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),v++}else if(O.isHemisphereLight){const N=a.hemi[T];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:a}}function K_(l){const t=new cA(l),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function u(g){n.push(g)}function f(g){a.push(g)}function d(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function fA(l){let t=new WeakMap;function n(o,u=0){const f=t.get(o);let d;return f===void 0?(d=new K_(l),t.set(o,[d])):u>=f.length?(d=new K_(l),f.push(d)):d=f[u],d}function a(){t=new WeakMap}return{get:n,dispose:a}}const hA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
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
}`,pA=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],mA=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],J_=new fn,Zo=new rt,Zh=new rt;function gA(l,t,n){let a=new fp;const o=new Be,u=new Be,f=new $e,d=new CM,m=new wM,p={},g=n.maxTextureSize,_={[ss]:kn,[kn]:ss,[pa]:pa},v=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:hA,fragmentShader:dA}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Ma;E.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Gi(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let S=this.type;this.render=function(B,L,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===vy&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Wu);const C=l.getRenderTarget(),w=l.getActiveCubeFace(),k=l.getActiveMipmapLevel(),at=l.state;at.setBlending(ga),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const nt=S!==this.type;nt&&L.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(lt=>lt.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,lt=B.length;ht<lt;ht++){const F=B[ht],H=F.shadow;if(H===void 0){ae("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const J=H.getFrameExtents();if(o.multiply(J),u.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/J.x),o.x=u.x*J.x,H.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/J.y),o.y=u.y*J.y,H.mapSize.y=u.y)),H.map===null||nt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(F.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Bi(o.x,o.y,{format:Hr,type:Sa,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new nl(o.x,o.y,zi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=ya,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn}else{F.isPointLight?(H.map=new Vv(o.x),H.map.depthTexture=new TM(o.x,Hi)):(H.map=new Bi(o.x,o.y),H.map.depthTexture=new nl(o.x,o.y,Hi)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=ya;const vt=l.state.buffers.depth.getReversed();this.type===Wu?(H.map.depthTexture.compareFunction=vt?lp:op,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rn,H.map.depthTexture.magFilter=Rn)}H.camera.updateProjectionMatrix()}const St=H.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<St;vt++){if(H.map.isWebGLCubeRenderTarget)l.setRenderTarget(H.map,vt),l.clear();else{vt===0&&(l.setRenderTarget(H.map),l.clear());const U=H.getViewport(vt);f.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),at.viewport(f)}if(F.isPointLight){const U=H.camera,it=H.matrix,gt=F.distance||U.far;gt!==U.far&&(U.far=gt,U.updateProjectionMatrix()),Zo.setFromMatrixPosition(F.matrixWorld),U.position.copy(Zo),Zh.copy(U.position),Zh.add(pA[vt]),U.up.copy(mA[vt]),U.lookAt(Zh),U.updateMatrixWorld(),it.makeTranslation(-Zo.x,-Zo.y,-Zo.z),J_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(J_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),N(L,j,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&z(H,j),H.needsUpdate=!1}S=this.type,M.needsUpdate=!1,l.setRenderTarget(C,w,k)};function z(B,L){const j=t.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Bi(o.x,o.y,{format:Hr,type:Sa})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,l.setRenderTarget(B.mapPass),l.clear(),l.renderBufferDirect(L,null,j,v,T,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,l.setRenderTarget(B.map),l.clear(),l.renderBufferDirect(L,null,j,x,T,null)}function O(B,L,j,C){let w=null;const k=j.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)w=k;else if(w=j.isPointLight===!0?m:d,l.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const at=w.uuid,nt=L.uuid;let ht=p[at];ht===void 0&&(ht={},p[at]=ht);let lt=ht[nt];lt===void 0&&(lt=w.clone(),ht[nt]=lt,L.addEventListener("dispose",P)),w=lt}if(w.visible=L.visible,w.wireframe=L.wireframe,C===Qo?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:_[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const at=l.properties.get(w);at.light=j}return w}function N(B,L,j,C,w){if(B.visible===!1)return;if(B.layers.test(L.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Qo)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,B.matrixWorld);const nt=t.update(B),ht=B.material;if(Array.isArray(ht)){const lt=nt.groups;for(let F=0,H=lt.length;F<H;F++){const J=lt[F],St=ht[J.materialIndex];if(St&&St.visible){const vt=O(B,St,C,w);B.onBeforeShadow(l,B,L,j,nt,vt,J),l.renderBufferDirect(j,null,nt,vt,B,J),B.onAfterShadow(l,B,L,j,nt,vt,J)}}}else if(ht.visible){const lt=O(B,ht,C,w);B.onBeforeShadow(l,B,L,j,nt,lt,null),l.renderBufferDirect(j,null,nt,lt,B,null),B.onAfterShadow(l,B,L,j,nt,lt,null)}}const at=B.children;for(let nt=0,ht=at.length;nt<ht;nt++)N(at[nt],L,j,C,w)}function P(B){B.target.removeEventListener("dispose",P);for(const j in p){const C=p[j],w=B.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const _A={[sd]:rd,[od]:cd,[ld]:fd,[Br]:ud,[rd]:sd,[cd]:od,[fd]:ld,[ud]:Br};function vA(l,t){function n(){let X=!1;const Ut=new $e;let bt=null;const zt=new $e(0,0,0,0);return{setMask:function(yt){bt!==yt&&!X&&(l.colorMask(yt,yt,yt,yt),bt=yt)},setLocked:function(yt){X=yt},setClear:function(yt,_t,At,ee,Ne){Ne===!0&&(yt*=ee,_t*=ee,At*=ee),Ut.set(yt,_t,At,ee),zt.equals(Ut)===!1&&(l.clearColor(yt,_t,At,ee),zt.copy(Ut))},reset:function(){X=!1,bt=null,zt.set(-1,0,0,0)}}}function a(){let X=!1,Ut=!1,bt=null,zt=null,yt=null;return{setReversed:function(_t){if(Ut!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ee=yt;yt=null,this.setClear(ee)}},getReversed:function(){return Ut},setTest:function(_t){_t?ct(l.DEPTH_TEST):wt(l.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!X&&(l.depthMask(_t),bt=_t)},setFunc:function(_t){if(Ut&&(_t=_A[_t]),zt!==_t){switch(_t){case sd:l.depthFunc(l.NEVER);break;case rd:l.depthFunc(l.ALWAYS);break;case od:l.depthFunc(l.LESS);break;case Br:l.depthFunc(l.LEQUAL);break;case ld:l.depthFunc(l.EQUAL);break;case ud:l.depthFunc(l.GEQUAL);break;case cd:l.depthFunc(l.GREATER);break;case fd:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}zt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){yt!==_t&&(Ut&&(_t=1-_t),l.clearDepth(_t),yt=_t)},reset:function(){X=!1,bt=null,zt=null,yt=null,Ut=!1}}}function o(){let X=!1,Ut=null,bt=null,zt=null,yt=null,_t=null,At=null,ee=null,Ne=null;return{setTest:function(ye){X||(ye?ct(l.STENCIL_TEST):wt(l.STENCIL_TEST))},setMask:function(ye){Ut!==ye&&!X&&(l.stencilMask(ye),Ut=ye)},setFunc:function(ye,Cn,pi){(bt!==ye||zt!==Cn||yt!==pi)&&(l.stencilFunc(ye,Cn,pi),bt=ye,zt=Cn,yt=pi)},setOp:function(ye,Cn,pi){(_t!==ye||At!==Cn||ee!==pi)&&(l.stencilOp(ye,Cn,pi),_t=ye,At=Cn,ee=pi)},setLocked:function(ye){X=ye},setClear:function(ye){Ne!==ye&&(l.clearStencil(ye),Ne=ye)},reset:function(){X=!1,Ut=null,bt=null,zt=null,yt=null,_t=null,At=null,ee=null,Ne=null}}}const u=new n,f=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,x=[],E=null,T=!1,M=null,S=null,z=null,O=null,N=null,P=null,B=null,L=new De(0,0,0),j=0,C=!1,w=null,k=null,at=null,nt=null,ht=null;const lt=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const J=l.getParameter(l.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=H>=2);let St=null,vt={};const U=l.getParameter(l.SCISSOR_BOX),it=l.getParameter(l.VIEWPORT),gt=new $e().fromArray(U),Tt=new $e().fromArray(it);function Bt(X,Ut,bt,zt){const yt=new Uint8Array(4),_t=l.createTexture();l.bindTexture(X,_t),l.texParameteri(X,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(X,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let At=0;At<bt;At++)X===l.TEXTURE_3D||X===l.TEXTURE_2D_ARRAY?l.texImage3D(Ut,0,l.RGBA,1,1,zt,0,l.RGBA,l.UNSIGNED_BYTE,yt):l.texImage2D(Ut+At,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,yt);return _t}const et={};et[l.TEXTURE_2D]=Bt(l.TEXTURE_2D,l.TEXTURE_2D,1),et[l.TEXTURE_CUBE_MAP]=Bt(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[l.TEXTURE_2D_ARRAY]=Bt(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),et[l.TEXTURE_3D]=Bt(l.TEXTURE_3D,l.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ct(l.DEPTH_TEST),f.setFunc(Br),se(!1),Qe(n_),ct(l.CULL_FACE),he(ga);function ct(X){g[X]!==!0&&(l.enable(X),g[X]=!0)}function wt(X){g[X]!==!1&&(l.disable(X),g[X]=!1)}function Vt(X,Ut){return _[X]!==Ut?(l.bindFramebuffer(X,Ut),_[X]=Ut,X===l.DRAW_FRAMEBUFFER&&(_[l.FRAMEBUFFER]=Ut),X===l.FRAMEBUFFER&&(_[l.DRAW_FRAMEBUFFER]=Ut),!0):!1}function It(X,Ut){let bt=x,zt=!1;if(X){bt=v.get(Ut),bt===void 0&&(bt=[],v.set(Ut,bt));const yt=X.textures;if(bt.length!==yt.length||bt[0]!==l.COLOR_ATTACHMENT0){for(let _t=0,At=yt.length;_t<At;_t++)bt[_t]=l.COLOR_ATTACHMENT0+_t;bt.length=yt.length,zt=!0}}else bt[0]!==l.BACK&&(bt[0]=l.BACK,zt=!0);zt&&l.drawBuffers(bt)}function fe(X){return E!==X?(l.useProgram(X),E=X,!0):!1}const je={[Us]:l.FUNC_ADD,[Sy]:l.FUNC_SUBTRACT,[yy]:l.FUNC_REVERSE_SUBTRACT};je[My]=l.MIN,je[Ey]=l.MAX;const me={[by]:l.ZERO,[Ty]:l.ONE,[Ay]:l.SRC_COLOR,[id]:l.SRC_ALPHA,[Ly]:l.SRC_ALPHA_SATURATE,[Dy]:l.DST_COLOR,[Cy]:l.DST_ALPHA,[Ry]:l.ONE_MINUS_SRC_COLOR,[ad]:l.ONE_MINUS_SRC_ALPHA,[Uy]:l.ONE_MINUS_DST_COLOR,[wy]:l.ONE_MINUS_DST_ALPHA,[Ny]:l.CONSTANT_COLOR,[Oy]:l.ONE_MINUS_CONSTANT_COLOR,[zy]:l.CONSTANT_ALPHA,[Py]:l.ONE_MINUS_CONSTANT_ALPHA};function he(X,Ut,bt,zt,yt,_t,At,ee,Ne,ye){if(X===ga){T===!0&&(wt(l.BLEND),T=!1);return}if(T===!1&&(ct(l.BLEND),T=!0),X!==xy){if(X!==M||ye!==C){if((S!==Us||N!==Us)&&(l.blendEquation(l.FUNC_ADD),S=Us,N=Us),ye)switch(X){case Pr:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case i_:l.blendFunc(l.ONE,l.ONE);break;case a_:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case s_:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:Te("WebGLState: Invalid blending: ",X);break}else switch(X){case Pr:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case i_:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case a_:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s_:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",X);break}z=null,O=null,P=null,B=null,L.set(0,0,0),j=0,M=X,C=ye}return}yt=yt||Ut,_t=_t||bt,At=At||zt,(Ut!==S||yt!==N)&&(l.blendEquationSeparate(je[Ut],je[yt]),S=Ut,N=yt),(bt!==z||zt!==O||_t!==P||At!==B)&&(l.blendFuncSeparate(me[bt],me[zt],me[_t],me[At]),z=bt,O=zt,P=_t,B=At),(ee.equals(L)===!1||Ne!==j)&&(l.blendColor(ee.r,ee.g,ee.b,Ne),L.copy(ee),j=Ne),M=X,C=!1}function Ae(X,Ut){X.side===pa?wt(l.CULL_FACE):ct(l.CULL_FACE);let bt=X.side===kn;Ut&&(bt=!bt),se(bt),X.blending===Pr&&X.transparent===!1?he(ga):he(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const zt=X.stencilWrite;d.setTest(zt),zt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),qe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(l.SAMPLE_ALPHA_TO_COVERAGE):wt(l.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){w!==X&&(X?l.frontFace(l.CW):l.frontFace(l.CCW),w=X)}function Qe(X){X!==gy?(ct(l.CULL_FACE),X!==k&&(X===n_?l.cullFace(l.BACK):X===_y?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):wt(l.CULL_FACE),k=X}function G(X){X!==at&&(F&&l.lineWidth(X),at=X)}function qe(X,Ut,bt){X?(ct(l.POLYGON_OFFSET_FILL),(nt!==Ut||ht!==bt)&&(l.polygonOffset(Ut,bt),nt=Ut,ht=bt)):wt(l.POLYGON_OFFSET_FILL)}function Se(X){X?ct(l.SCISSOR_TEST):wt(l.SCISSOR_TEST)}function Ue(X){X===void 0&&(X=l.TEXTURE0+lt-1),St!==X&&(l.activeTexture(X),St=X)}function qt(X,Ut,bt){bt===void 0&&(St===null?bt=l.TEXTURE0+lt-1:bt=St);let zt=vt[bt];zt===void 0&&(zt={type:void 0,texture:void 0},vt[bt]=zt),(zt.type!==X||zt.texture!==Ut)&&(St!==bt&&(l.activeTexture(bt),St=bt),l.bindTexture(X,Ut||et[X]),zt.type=X,zt.texture=Ut)}function D(){const X=vt[St];X!==void 0&&X.type!==void 0&&(l.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{l.compressedTexImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function W(){try{l.compressedTexImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function dt(){try{l.texSubImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function xt(){try{l.texSubImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function ut(){try{l.compressedTexSubImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function Zt(){try{l.compressedTexSubImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function Rt(){try{l.texStorage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function kt(){try{l.texStorage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function te(){try{l.texImage2D(...arguments)}catch(X){Te("WebGLState:",X)}}function Mt(){try{l.texImage3D(...arguments)}catch(X){Te("WebGLState:",X)}}function Et(X){gt.equals(X)===!1&&(l.scissor(X.x,X.y,X.z,X.w),gt.copy(X))}function Pt(X){Tt.equals(X)===!1&&(l.viewport(X.x,X.y,X.z,X.w),Tt.copy(X))}function Ot(X,Ut){let bt=p.get(Ut);bt===void 0&&(bt=new WeakMap,p.set(Ut,bt));let zt=bt.get(X);zt===void 0&&(zt=l.getUniformBlockIndex(Ut,X.name),bt.set(X,zt))}function Ct(X,Ut){const zt=p.get(Ut).get(X);m.get(Ut)!==zt&&(l.uniformBlockBinding(Ut,zt,X.__bindingPointIndex),m.set(Ut,zt))}function oe(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),f.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),g={},St=null,vt={},_={},v=new WeakMap,x=[],E=null,T=!1,M=null,S=null,z=null,O=null,N=null,P=null,B=null,L=new De(0,0,0),j=0,C=!1,w=null,k=null,at=null,nt=null,ht=null,gt.set(0,0,l.canvas.width,l.canvas.height),Tt.set(0,0,l.canvas.width,l.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ct,disable:wt,bindFramebuffer:Vt,drawBuffers:It,useProgram:fe,setBlending:he,setMaterial:Ae,setFlipSided:se,setCullFace:Qe,setLineWidth:G,setPolygonOffset:qe,setScissorTest:Se,activeTexture:Ue,bindTexture:qt,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:te,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:kt,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:Et,viewport:Pt,reset:oe}}function xA(l,t,n,a,o,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Be,g=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return x?new OffscreenCanvas(D,b):ec("canvas")}function T(D,b,W){let dt=1;const xt=qt(D);if((xt.width>W||xt.height>W)&&(dt=W/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ut=Math.floor(dt*xt.width),Zt=Math.floor(dt*xt.height);_===void 0&&(_=E(ut,Zt));const Rt=b?E(ut,Zt):_;return Rt.width=ut,Rt.height=Zt,Rt.getContext("2d").drawImage(D,0,0,ut,Zt),ae("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ut+"x"+Zt+")."),Rt}else return"data"in D&&ae("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),D;return D}function M(D){return D.generateMipmaps}function S(D){l.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?l.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function O(D,b,W,dt,xt=!1){if(D!==null){if(l[D]!==void 0)return l[D];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ut=b;if(b===l.RED&&(W===l.FLOAT&&(ut=l.R32F),W===l.HALF_FLOAT&&(ut=l.R16F),W===l.UNSIGNED_BYTE&&(ut=l.R8)),b===l.RED_INTEGER&&(W===l.UNSIGNED_BYTE&&(ut=l.R8UI),W===l.UNSIGNED_SHORT&&(ut=l.R16UI),W===l.UNSIGNED_INT&&(ut=l.R32UI),W===l.BYTE&&(ut=l.R8I),W===l.SHORT&&(ut=l.R16I),W===l.INT&&(ut=l.R32I)),b===l.RG&&(W===l.FLOAT&&(ut=l.RG32F),W===l.HALF_FLOAT&&(ut=l.RG16F),W===l.UNSIGNED_BYTE&&(ut=l.RG8)),b===l.RG_INTEGER&&(W===l.UNSIGNED_BYTE&&(ut=l.RG8UI),W===l.UNSIGNED_SHORT&&(ut=l.RG16UI),W===l.UNSIGNED_INT&&(ut=l.RG32UI),W===l.BYTE&&(ut=l.RG8I),W===l.SHORT&&(ut=l.RG16I),W===l.INT&&(ut=l.RG32I)),b===l.RGB_INTEGER&&(W===l.UNSIGNED_BYTE&&(ut=l.RGB8UI),W===l.UNSIGNED_SHORT&&(ut=l.RGB16UI),W===l.UNSIGNED_INT&&(ut=l.RGB32UI),W===l.BYTE&&(ut=l.RGB8I),W===l.SHORT&&(ut=l.RGB16I),W===l.INT&&(ut=l.RGB32I)),b===l.RGBA_INTEGER&&(W===l.UNSIGNED_BYTE&&(ut=l.RGBA8UI),W===l.UNSIGNED_SHORT&&(ut=l.RGBA16UI),W===l.UNSIGNED_INT&&(ut=l.RGBA32UI),W===l.BYTE&&(ut=l.RGBA8I),W===l.SHORT&&(ut=l.RGBA16I),W===l.INT&&(ut=l.RGBA32I)),b===l.RGB&&(W===l.UNSIGNED_INT_5_9_9_9_REV&&(ut=l.RGB9_E5),W===l.UNSIGNED_INT_10F_11F_11F_REV&&(ut=l.R11F_G11F_B10F)),b===l.RGBA){const Zt=xt?$u:Me.getTransfer(dt);W===l.FLOAT&&(ut=l.RGBA32F),W===l.HALF_FLOAT&&(ut=l.RGBA16F),W===l.UNSIGNED_BYTE&&(ut=Zt===Fe?l.SRGB8_ALPHA8:l.RGBA8),W===l.UNSIGNED_SHORT_4_4_4_4&&(ut=l.RGBA4),W===l.UNSIGNED_SHORT_5_5_5_1&&(ut=l.RGB5_A1)}return(ut===l.R16F||ut===l.R32F||ut===l.RG16F||ut===l.RG32F||ut===l.RGBA16F||ut===l.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function N(D,b){let W;return D?b===null||b===Hi||b===tl?W=l.DEPTH24_STENCIL8:b===zi?W=l.DEPTH32F_STENCIL8:b===$o&&(W=l.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hi||b===tl?W=l.DEPTH_COMPONENT24:b===zi?W=l.DEPTH_COMPONENT32F:b===$o&&(W=l.DEPTH_COMPONENT16),W}function P(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function B(D){const b=D.target;b.removeEventListener("dispose",B),j(b),b.isVideoTexture&&g.delete(b)}function L(D){const b=D.target;b.removeEventListener("dispose",L),w(b)}function j(D){const b=a.get(D);if(b.__webglInit===void 0)return;const W=D.source,dt=v.get(W);if(dt){const xt=dt[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&C(D),Object.keys(dt).length===0&&v.delete(W)}a.remove(D)}function C(D){const b=a.get(D);l.deleteTexture(b.__webglTexture);const W=D.source,dt=v.get(W);delete dt[b.__cacheKey],f.memory.textures--}function w(D){const b=a.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),a.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let xt=0;xt<b.__webglFramebuffer[dt].length;xt++)l.deleteFramebuffer(b.__webglFramebuffer[dt][xt]);else l.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&l.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)l.deleteFramebuffer(b.__webglFramebuffer[dt]);else l.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&l.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&l.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&l.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&l.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=D.textures;for(let dt=0,xt=W.length;dt<xt;dt++){const ut=a.get(W[dt]);ut.__webglTexture&&(l.deleteTexture(ut.__webglTexture),f.memory.textures--),a.remove(W[dt])}a.remove(D)}let k=0;function at(){k=0}function nt(){const D=k;return D>=o.maxTextures&&ae("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function ht(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function lt(D,b){const W=a.get(D);if(D.isVideoTexture&&Se(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const dt=D.image;if(dt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,D,b);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(l.TEXTURE_2D,W.__webglTexture,l.TEXTURE0+b)}function F(D,b){const W=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){et(W,D,b);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(l.TEXTURE_2D_ARRAY,W.__webglTexture,l.TEXTURE0+b)}function H(D,b){const W=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){et(W,D,b);return}n.bindTexture(l.TEXTURE_3D,W.__webglTexture,l.TEXTURE0+b)}function J(D,b){const W=a.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ct(W,D,b);return}n.bindTexture(l.TEXTURE_CUBE_MAP,W.__webglTexture,l.TEXTURE0+b)}const St={[pd]:l.REPEAT,[ma]:l.CLAMP_TO_EDGE,[md]:l.MIRRORED_REPEAT},vt={[Rn]:l.NEAREST,[Iy]:l.NEAREST_MIPMAP_NEAREST,[Su]:l.NEAREST_MIPMAP_LINEAR,[Nn]:l.LINEAR,[_h]:l.LINEAR_MIPMAP_NEAREST,[Ns]:l.LINEAR_MIPMAP_LINEAR},U={[Vy]:l.NEVER,[Yy]:l.ALWAYS,[ky]:l.LESS,[op]:l.LEQUAL,[Xy]:l.EQUAL,[lp]:l.GEQUAL,[Wy]:l.GREATER,[qy]:l.NOTEQUAL};function it(D,b){if(b.type===zi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===_h||b.magFilter===Su||b.magFilter===Ns||b.minFilter===Nn||b.minFilter===_h||b.minFilter===Su||b.minFilter===Ns)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(D,l.TEXTURE_WRAP_S,St[b.wrapS]),l.texParameteri(D,l.TEXTURE_WRAP_T,St[b.wrapT]),(D===l.TEXTURE_3D||D===l.TEXTURE_2D_ARRAY)&&l.texParameteri(D,l.TEXTURE_WRAP_R,St[b.wrapR]),l.texParameteri(D,l.TEXTURE_MAG_FILTER,vt[b.magFilter]),l.texParameteri(D,l.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(l.texParameteri(D,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(D,l.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Rn||b.minFilter!==Su&&b.minFilter!==Ns||b.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");l.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function gt(D,b){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",B));const dt=b.source;let xt=v.get(dt);xt===void 0&&(xt={},v.set(dt,xt));const ut=ht(b);if(ut!==D.__cacheKey){xt[ut]===void 0&&(xt[ut]={texture:l.createTexture(),usedTimes:0},f.memory.textures++,W=!0),xt[ut].usedTimes++;const Zt=xt[D.__cacheKey];Zt!==void 0&&(xt[D.__cacheKey].usedTimes--,Zt.usedTimes===0&&C(b)),D.__cacheKey=ut,D.__webglTexture=xt[ut].texture}return W}function Tt(D,b,W){return Math.floor(Math.floor(D/W)/b)}function Bt(D,b,W,dt){const ut=D.updateRanges;if(ut.length===0)n.texSubImage2D(l.TEXTURE_2D,0,0,0,b.width,b.height,W,dt,b.data);else{ut.sort((Mt,Et)=>Mt.start-Et.start);let Zt=0;for(let Mt=1;Mt<ut.length;Mt++){const Et=ut[Zt],Pt=ut[Mt],Ot=Et.start+Et.count,Ct=Tt(Pt.start,b.width,4),oe=Tt(Et.start,b.width,4);Pt.start<=Ot+1&&Ct===oe&&Tt(Pt.start+Pt.count-1,b.width,4)===Ct?Et.count=Math.max(Et.count,Pt.start+Pt.count-Et.start):(++Zt,ut[Zt]=Pt)}ut.length=Zt+1;const Rt=l.getParameter(l.UNPACK_ROW_LENGTH),kt=l.getParameter(l.UNPACK_SKIP_PIXELS),te=l.getParameter(l.UNPACK_SKIP_ROWS);l.pixelStorei(l.UNPACK_ROW_LENGTH,b.width);for(let Mt=0,Et=ut.length;Mt<Et;Mt++){const Pt=ut[Mt],Ot=Math.floor(Pt.start/4),Ct=Math.ceil(Pt.count/4),oe=Ot%b.width,X=Math.floor(Ot/b.width),Ut=Ct,bt=1;l.pixelStorei(l.UNPACK_SKIP_PIXELS,oe),l.pixelStorei(l.UNPACK_SKIP_ROWS,X),n.texSubImage2D(l.TEXTURE_2D,0,oe,X,Ut,bt,W,dt,b.data)}D.clearUpdateRanges(),l.pixelStorei(l.UNPACK_ROW_LENGTH,Rt),l.pixelStorei(l.UNPACK_SKIP_PIXELS,kt),l.pixelStorei(l.UNPACK_SKIP_ROWS,te)}}function et(D,b,W){let dt=l.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=l.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=l.TEXTURE_3D);const xt=gt(D,b),ut=b.source;n.bindTexture(dt,D.__webglTexture,l.TEXTURE0+W);const Zt=a.get(ut);if(ut.version!==Zt.__version||xt===!0){n.activeTexture(l.TEXTURE0+W);const Rt=Me.getPrimaries(Me.workingColorSpace),kt=b.colorSpace===ns?null:Me.getPrimaries(b.colorSpace),te=b.colorSpace===ns||Rt===kt?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,b.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,b.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Mt=T(b.image,!1,o.maxTextureSize);Mt=Ue(b,Mt);const Et=u.convert(b.format,b.colorSpace),Pt=u.convert(b.type);let Ot=O(b.internalFormat,Et,Pt,b.colorSpace,b.isVideoTexture);it(dt,b);let Ct;const oe=b.mipmaps,X=b.isVideoTexture!==!0,Ut=Zt.__version===void 0||xt===!0,bt=ut.dataReady,zt=P(b,Mt);if(b.isDepthTexture)Ot=N(b.format===Os,b.type),Ut&&(X?n.texStorage2D(l.TEXTURE_2D,1,Ot,Mt.width,Mt.height):n.texImage2D(l.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,Pt,null));else if(b.isDataTexture)if(oe.length>0){X&&Ut&&n.texStorage2D(l.TEXTURE_2D,zt,Ot,oe[0].width,oe[0].height);for(let yt=0,_t=oe.length;yt<_t;yt++)Ct=oe[yt],X?bt&&n.texSubImage2D(l.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Et,Pt,Ct.data):n.texImage2D(l.TEXTURE_2D,yt,Ot,Ct.width,Ct.height,0,Et,Pt,Ct.data);b.generateMipmaps=!1}else X?(Ut&&n.texStorage2D(l.TEXTURE_2D,zt,Ot,Mt.width,Mt.height),bt&&Bt(b,Mt,Et,Pt)):n.texImage2D(l.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,Pt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Ut&&n.texStorage3D(l.TEXTURE_2D_ARRAY,zt,Ot,oe[0].width,oe[0].height,Mt.depth);for(let yt=0,_t=oe.length;yt<_t;yt++)if(Ct=oe[yt],b.format!==Ti)if(Et!==null)if(X){if(bt)if(b.layerUpdates.size>0){const At=w_(Ct.width,Ct.height,b.format,b.type);for(const ee of b.layerUpdates){const Ne=Ct.data.subarray(ee*At/Ct.data.BYTES_PER_ELEMENT,(ee+1)*At/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,yt,0,0,ee,Ct.width,Ct.height,1,Et,Ne)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Et,Ct.data)}else n.compressedTexImage3D(l.TEXTURE_2D_ARRAY,yt,Ot,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?bt&&n.texSubImage3D(l.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Et,Pt,Ct.data):n.texImage3D(l.TEXTURE_2D_ARRAY,yt,Ot,Ct.width,Ct.height,Mt.depth,0,Et,Pt,Ct.data)}else{X&&Ut&&n.texStorage2D(l.TEXTURE_2D,zt,Ot,oe[0].width,oe[0].height);for(let yt=0,_t=oe.length;yt<_t;yt++)Ct=oe[yt],b.format!==Ti?Et!==null?X?bt&&n.compressedTexSubImage2D(l.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Et,Ct.data):n.compressedTexImage2D(l.TEXTURE_2D,yt,Ot,Ct.width,Ct.height,0,Ct.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?bt&&n.texSubImage2D(l.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Et,Pt,Ct.data):n.texImage2D(l.TEXTURE_2D,yt,Ot,Ct.width,Ct.height,0,Et,Pt,Ct.data)}else if(b.isDataArrayTexture)if(X){if(Ut&&n.texStorage3D(l.TEXTURE_2D_ARRAY,zt,Ot,Mt.width,Mt.height,Mt.depth),bt)if(b.layerUpdates.size>0){const yt=w_(Mt.width,Mt.height,b.format,b.type);for(const _t of b.layerUpdates){const At=Mt.data.subarray(_t*yt/Mt.data.BYTES_PER_ELEMENT,(_t+1)*yt/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,Pt,At)}b.clearLayerUpdates()}else n.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Pt,Mt.data)}else n.texImage3D(l.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,Pt,Mt.data);else if(b.isData3DTexture)X?(Ut&&n.texStorage3D(l.TEXTURE_3D,zt,Ot,Mt.width,Mt.height,Mt.depth),bt&&n.texSubImage3D(l.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Pt,Mt.data)):n.texImage3D(l.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,Pt,Mt.data);else if(b.isFramebufferTexture){if(Ut)if(X)n.texStorage2D(l.TEXTURE_2D,zt,Ot,Mt.width,Mt.height);else{let yt=Mt.width,_t=Mt.height;for(let At=0;At<zt;At++)n.texImage2D(l.TEXTURE_2D,At,Ot,yt,_t,0,Et,Pt,null),yt>>=1,_t>>=1}}else if(oe.length>0){if(X&&Ut){const yt=qt(oe[0]);n.texStorage2D(l.TEXTURE_2D,zt,Ot,yt.width,yt.height)}for(let yt=0,_t=oe.length;yt<_t;yt++)Ct=oe[yt],X?bt&&n.texSubImage2D(l.TEXTURE_2D,yt,0,0,Et,Pt,Ct):n.texImage2D(l.TEXTURE_2D,yt,Ot,Et,Pt,Ct);b.generateMipmaps=!1}else if(X){if(Ut){const yt=qt(Mt);n.texStorage2D(l.TEXTURE_2D,zt,Ot,yt.width,yt.height)}bt&&n.texSubImage2D(l.TEXTURE_2D,0,0,0,Et,Pt,Mt)}else n.texImage2D(l.TEXTURE_2D,0,Ot,Et,Pt,Mt);M(b)&&S(dt),Zt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ct(D,b,W){if(b.image.length!==6)return;const dt=gt(D,b),xt=b.source;n.bindTexture(l.TEXTURE_CUBE_MAP,D.__webglTexture,l.TEXTURE0+W);const ut=a.get(xt);if(xt.version!==ut.__version||dt===!0){n.activeTexture(l.TEXTURE0+W);const Zt=Me.getPrimaries(Me.workingColorSpace),Rt=b.colorSpace===ns?null:Me.getPrimaries(b.colorSpace),kt=b.colorSpace===ns||Zt===Rt?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,b.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,b.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const te=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!te&&!Mt?Et[_t]=T(b.image[_t],!0,o.maxCubemapSize):Et[_t]=Mt?b.image[_t].image:b.image[_t],Et[_t]=Ue(b,Et[_t]);const Pt=Et[0],Ot=u.convert(b.format,b.colorSpace),Ct=u.convert(b.type),oe=O(b.internalFormat,Ot,Ct,b.colorSpace),X=b.isVideoTexture!==!0,Ut=ut.__version===void 0||dt===!0,bt=xt.dataReady;let zt=P(b,Pt);it(l.TEXTURE_CUBE_MAP,b);let yt;if(te){X&&Ut&&n.texStorage2D(l.TEXTURE_CUBE_MAP,zt,oe,Pt.width,Pt.height);for(let _t=0;_t<6;_t++){yt=Et[_t].mipmaps;for(let At=0;At<yt.length;At++){const ee=yt[At];b.format!==Ti?Ot!==null?X?bt&&n.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ee.width,ee.height,Ot,ee.data):n.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,oe,ee.width,ee.height,0,ee.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ee.width,ee.height,Ot,Ct,ee.data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,oe,ee.width,ee.height,0,Ot,Ct,ee.data)}}}else{if(yt=b.mipmaps,X&&Ut){yt.length>0&&zt++;const _t=qt(Et[0]);n.texStorage2D(l.TEXTURE_CUBE_MAP,zt,oe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<yt.length;At++){const Ne=yt[At].image[_t].image;X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ne.width,Ne.height,Ot,Ct,Ne.data):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,oe,Ne.width,Ne.height,0,Ot,Ct,Ne.data)}}else{X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,oe,Ot,Ct,Et[_t]);for(let At=0;At<yt.length;At++){const ee=yt[At];X?bt&&n.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ee.image[_t]):n.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,oe,Ot,Ct,ee.image[_t])}}}M(b)&&S(l.TEXTURE_CUBE_MAP),ut.__version=xt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function wt(D,b,W,dt,xt,ut){const Zt=u.convert(W.format,W.colorSpace),Rt=u.convert(W.type),kt=O(W.internalFormat,Zt,Rt,W.colorSpace),te=a.get(b),Mt=a.get(W);if(Mt.__renderTarget=b,!te.__hasExternalTextures){const Et=Math.max(1,b.width>>ut),Pt=Math.max(1,b.height>>ut);xt===l.TEXTURE_3D||xt===l.TEXTURE_2D_ARRAY?n.texImage3D(xt,ut,kt,Et,Pt,b.depth,0,Zt,Rt,null):n.texImage2D(xt,ut,kt,Et,Pt,0,Zt,Rt,null)}n.bindFramebuffer(l.FRAMEBUFFER,D),qe(b)?d.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,dt,xt,Mt.__webglTexture,0,G(b)):(xt===l.TEXTURE_2D||xt>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,dt,xt,Mt.__webglTexture,ut),n.bindFramebuffer(l.FRAMEBUFFER,null)}function Vt(D,b,W){if(l.bindRenderbuffer(l.RENDERBUFFER,D),b.depthBuffer){const dt=b.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,ut=N(b.stencilBuffer,xt),Zt=b.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;qe(b)?d.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,G(b),ut,b.width,b.height):W?l.renderbufferStorageMultisample(l.RENDERBUFFER,G(b),ut,b.width,b.height):l.renderbufferStorage(l.RENDERBUFFER,ut,b.width,b.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,Zt,l.RENDERBUFFER,D)}else{const dt=b.textures;for(let xt=0;xt<dt.length;xt++){const ut=dt[xt],Zt=u.convert(ut.format,ut.colorSpace),Rt=u.convert(ut.type),kt=O(ut.internalFormat,Zt,Rt,ut.colorSpace);qe(b)?d.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,G(b),kt,b.width,b.height):W?l.renderbufferStorageMultisample(l.RENDERBUFFER,G(b),kt,b.width,b.height):l.renderbufferStorage(l.RENDERBUFFER,kt,b.width,b.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function It(D,b,W){const dt=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(l.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=a.get(b.depthTexture);if(xt.__renderTarget=b,(!xt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),xt.__webglTexture===void 0){xt.__webglTexture=l.createTexture(),n.bindTexture(l.TEXTURE_CUBE_MAP,xt.__webglTexture),it(l.TEXTURE_CUBE_MAP,b.depthTexture);const te=u.convert(b.depthTexture.format),Mt=u.convert(b.depthTexture.type);let Et;b.depthTexture.format===ya?Et=l.DEPTH_COMPONENT24:b.depthTexture.format===Os&&(Et=l.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Et,b.width,b.height,0,te,Mt,null)}}else lt(b.depthTexture,0);const ut=xt.__webglTexture,Zt=G(b),Rt=dt?l.TEXTURE_CUBE_MAP_POSITIVE_X+W:l.TEXTURE_2D,kt=b.depthTexture.format===Os?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(b.depthTexture.format===ya)qe(b)?d.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,kt,Rt,ut,0,Zt):l.framebufferTexture2D(l.FRAMEBUFFER,kt,Rt,ut,0);else if(b.depthTexture.format===Os)qe(b)?d.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,kt,Rt,ut,0,Zt):l.framebufferTexture2D(l.FRAMEBUFFER,kt,Rt,ut,0);else throw new Error("Unknown depthTexture format")}function fe(D){const b=a.get(D),W=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const dt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=dt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let dt=0;dt<6;dt++)It(b.__webglFramebuffer[dt],D,dt);else{const dt=D.texture.mipmaps;dt&&dt.length>0?It(b.__webglFramebuffer[0],D,0):It(b.__webglFramebuffer,D,0)}else if(W){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(l.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=l.createRenderbuffer(),Vt(b.__webglDepthbuffer[dt],D,!1);else{const xt=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[dt];l.bindRenderbuffer(l.RENDERBUFFER,ut),l.framebufferRenderbuffer(l.FRAMEBUFFER,xt,l.RENDERBUFFER,ut)}}else{const dt=D.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(l.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(l.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=l.createRenderbuffer(),Vt(b.__webglDepthbuffer,D,!1);else{const xt=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,ut),l.framebufferRenderbuffer(l.FRAMEBUFFER,xt,l.RENDERBUFFER,ut)}}n.bindFramebuffer(l.FRAMEBUFFER,null)}function je(D,b,W){const dt=a.get(D);b!==void 0&&wt(dt.__webglFramebuffer,D,D.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),W!==void 0&&fe(D)}function me(D){const b=D.texture,W=a.get(D),dt=a.get(b);D.addEventListener("dispose",L);const xt=D.textures,ut=D.isWebGLCubeRenderTarget===!0,Zt=xt.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=l.createTexture()),dt.__version=b.version,f.memory.textures++),ut){W.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Rt]=[];for(let kt=0;kt<b.mipmaps.length;kt++)W.__webglFramebuffer[Rt][kt]=l.createFramebuffer()}else W.__webglFramebuffer[Rt]=l.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)W.__webglFramebuffer[Rt]=l.createFramebuffer()}else W.__webglFramebuffer=l.createFramebuffer();if(Zt)for(let Rt=0,kt=xt.length;Rt<kt;Rt++){const te=a.get(xt[Rt]);te.__webglTexture===void 0&&(te.__webglTexture=l.createTexture(),f.memory.textures++)}if(D.samples>0&&qe(D)===!1){W.__webglMultisampledFramebuffer=l.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(l.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const kt=xt[Rt];W.__webglColorRenderbuffer[Rt]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,W.__webglColorRenderbuffer[Rt]);const te=u.convert(kt.format,kt.colorSpace),Mt=u.convert(kt.type),Et=O(kt.internalFormat,te,Mt,kt.colorSpace,D.isXRRenderTarget===!0),Pt=G(D);l.renderbufferStorageMultisample(l.RENDERBUFFER,Pt,Et,D.width,D.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Rt,l.RENDERBUFFER,W.__webglColorRenderbuffer[Rt])}l.bindRenderbuffer(l.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=l.createRenderbuffer(),Vt(W.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(l.FRAMEBUFFER,null)}}if(ut){n.bindTexture(l.TEXTURE_CUBE_MAP,dt.__webglTexture),it(l.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let kt=0;kt<b.mipmaps.length;kt++)wt(W.__webglFramebuffer[Rt][kt],D,b,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,kt);else wt(W.__webglFramebuffer[Rt],D,b,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&S(l.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Rt=0,kt=xt.length;Rt<kt;Rt++){const te=xt[Rt],Mt=a.get(te);let Et=l.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),n.bindTexture(Et,Mt.__webglTexture),it(Et,te),wt(W.__webglFramebuffer,D,te,l.COLOR_ATTACHMENT0+Rt,Et,0),M(te)&&S(Et)}n.unbindTexture()}else{let Rt=l.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Rt=D.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),n.bindTexture(Rt,dt.__webglTexture),it(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let kt=0;kt<b.mipmaps.length;kt++)wt(W.__webglFramebuffer[kt],D,b,l.COLOR_ATTACHMENT0,Rt,kt);else wt(W.__webglFramebuffer,D,b,l.COLOR_ATTACHMENT0,Rt,0);M(b)&&S(Rt),n.unbindTexture()}D.depthBuffer&&fe(D)}function he(D){const b=D.textures;for(let W=0,dt=b.length;W<dt;W++){const xt=b[W];if(M(xt)){const ut=z(D),Zt=a.get(xt).__webglTexture;n.bindTexture(ut,Zt),S(ut),n.unbindTexture()}}}const Ae=[],se=[];function Qe(D){if(D.samples>0){if(qe(D)===!1){const b=D.textures,W=D.width,dt=D.height;let xt=l.COLOR_BUFFER_BIT;const ut=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,Zt=a.get(D),Rt=b.length>1;if(Rt)for(let te=0;te<b.length;te++)n.bindFramebuffer(l.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+te,l.RENDERBUFFER,null),n.bindFramebuffer(l.FRAMEBUFFER,Zt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+te,l.TEXTURE_2D,null,0);n.bindFramebuffer(l.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const kt=D.texture.mipmaps;kt&&kt.length>0?n.bindFramebuffer(l.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(l.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let te=0;te<b.length;te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xt|=l.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xt|=l.STENCIL_BUFFER_BIT)),Rt){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,Zt.__webglColorRenderbuffer[te]);const Mt=a.get(b[te]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,Mt,0)}l.blitFramebuffer(0,0,W,dt,0,0,W,dt,xt,l.NEAREST),m===!0&&(Ae.length=0,se.length=0,Ae.push(l.COLOR_ATTACHMENT0+te),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ae.push(ut),se.push(ut),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,se)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(l.READ_FRAMEBUFFER,null),n.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),Rt)for(let te=0;te<b.length;te++){n.bindFramebuffer(l.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+te,l.RENDERBUFFER,Zt.__webglColorRenderbuffer[te]);const Mt=a.get(b[te]).__webglTexture;n.bindFramebuffer(l.FRAMEBUFFER,Zt.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+te,l.TEXTURE_2D,Mt,0)}n.bindFramebuffer(l.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[b])}}}function G(D){return Math.min(o.maxSamples,D.samples)}function qe(D){const b=a.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(D){const b=f.render.frame;g.get(D)!==b&&(g.set(D,b),D.update())}function Ue(D,b){const W=D.colorSpace,dt=D.format,xt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Gr&&W!==ns&&(Me.getTransfer(W)===Fe?(dt!==Ti||xt!==ti)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",W)),b}function qt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=at,this.setTexture2D=lt,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=je,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function SA(l,t){function n(a,o=ns){let u;const f=Me.getTransfer(o);if(a===ti)return l.UNSIGNED_BYTE;if(a===np)return l.UNSIGNED_SHORT_4_4_4_4;if(a===ip)return l.UNSIGNED_SHORT_5_5_5_1;if(a===Mv)return l.UNSIGNED_INT_5_9_9_9_REV;if(a===Ev)return l.UNSIGNED_INT_10F_11F_11F_REV;if(a===Sv)return l.BYTE;if(a===yv)return l.SHORT;if(a===$o)return l.UNSIGNED_SHORT;if(a===ep)return l.INT;if(a===Hi)return l.UNSIGNED_INT;if(a===zi)return l.FLOAT;if(a===Sa)return l.HALF_FLOAT;if(a===bv)return l.ALPHA;if(a===Tv)return l.RGB;if(a===Ti)return l.RGBA;if(a===ya)return l.DEPTH_COMPONENT;if(a===Os)return l.DEPTH_STENCIL;if(a===Av)return l.RED;if(a===ap)return l.RED_INTEGER;if(a===Hr)return l.RG;if(a===sp)return l.RG_INTEGER;if(a===rp)return l.RGBA_INTEGER;if(a===qu||a===Yu||a===Zu||a===ju)if(f===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===qu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Yu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===qu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Yu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ju)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===gd||a===_d||a===vd||a===xd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===gd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===_d)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===vd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===xd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Sd||a===yd||a===Md||a===Ed||a===bd||a===Td||a===Ad)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Sd||a===yd)return f===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Md)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===Ed)return u.COMPRESSED_R11_EAC;if(a===bd)return u.COMPRESSED_SIGNED_R11_EAC;if(a===Td)return u.COMPRESSED_RG11_EAC;if(a===Ad)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Rd||a===Cd||a===wd||a===Dd||a===Ud||a===Ld||a===Nd||a===Od||a===zd||a===Pd||a===Fd||a===Bd||a===Id||a===Hd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Rd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Cd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===wd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Dd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ud)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ld)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Nd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Od)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===zd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Fd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Bd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Id)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Hd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Gd||a===Vd||a===kd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===Gd)return f===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Vd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===kd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Xd||a===Wd||a===qd||a===Yd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Xd)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Wd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===qd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Yd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===tl?l.UNSIGNED_INT_24_8:l[a]!==void 0?l[a]:null}return{convert:n}}const yA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MA=`
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

}`;class EA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new kv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Vi({vertexShader:yA,fragmentShader:MA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gi(new ic(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bA extends kr{constructor(t,n){super();const a=this;let o=null,u=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",M=new EA,S={},z=n.getContextAttributes();let O=null,N=null;const P=[],B=[],L=new Be;let j=null;const C=new di;C.viewport=new $e;const w=new di;w.viewport=new $e;const k=[C,w],at=new OM;let nt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ct=P[et];return ct===void 0&&(ct=new Hh,P[et]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(et){let ct=P[et];return ct===void 0&&(ct=new Hh,P[et]=ct),ct.getGripSpace()},this.getHand=function(et){let ct=P[et];return ct===void 0&&(ct=new Hh,P[et]=ct),ct.getHandSpace()};function lt(et){const ct=B.indexOf(et.inputSource);if(ct===-1)return;const wt=P[ct];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||f),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){o.removeEventListener("select",lt),o.removeEventListener("selectstart",lt),o.removeEventListener("selectend",lt),o.removeEventListener("squeeze",lt),o.removeEventListener("squeezestart",lt),o.removeEventListener("squeezeend",lt),o.removeEventListener("end",F),o.removeEventListener("inputsourceschange",H);for(let et=0;et<P.length;et++){const ct=B[et];ct!==null&&(B[et]=null,P[et].disconnect(ct))}nt=null,ht=null,M.reset();for(const et in S)delete S[et];t.setRenderTarget(O),x=null,v=null,_=null,o=null,N=null,Bt.stop(),a.isPresenting=!1,t.setPixelRatio(j),t.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,a.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,a.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(et){if(o=et,o!==null){if(O=t.getRenderTarget(),o.addEventListener("select",lt),o.addEventListener("selectstart",lt),o.addEventListener("selectend",lt),o.addEventListener("squeeze",lt),o.addEventListener("squeezestart",lt),o.addEventListener("squeezeend",lt),o.addEventListener("end",F),o.addEventListener("inputsourceschange",H),z.xrCompatible!==!0&&await n.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(L),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Vt=null,It=null;z.depth&&(It=z.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,wt=z.stencil?Os:ya,Vt=z.stencil?tl:Hi);const fe={colorFormat:n.RGBA8,depthFormat:It,scaleFactor:u};_=this.getBinding(),v=_.createProjectionLayer(fe),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new Bi(v.textureWidth,v.textureHeight,{format:Ti,type:ti,depthTexture:new nl(v.textureWidth,v.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const wt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(o,n,wt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new Bi(x.framebufferWidth,x.framebufferHeight,{format:Ti,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await o.requestReferenceSpace(d),Bt.setContext(o),Bt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(et){for(let ct=0;ct<et.removed.length;ct++){const wt=et.removed[ct],Vt=B.indexOf(wt);Vt>=0&&(B[Vt]=null,P[Vt].disconnect(wt))}for(let ct=0;ct<et.added.length;ct++){const wt=et.added[ct];let Vt=B.indexOf(wt);if(Vt===-1){for(let fe=0;fe<P.length;fe++)if(fe>=B.length){B.push(wt),Vt=fe;break}else if(B[fe]===null){B[fe]=wt,Vt=fe;break}if(Vt===-1)break}const It=P[Vt];It&&It.connect(wt)}}const J=new rt,St=new rt;function vt(et,ct,wt){J.setFromMatrixPosition(ct.matrixWorld),St.setFromMatrixPosition(wt.matrixWorld);const Vt=J.distanceTo(St),It=ct.projectionMatrix.elements,fe=wt.projectionMatrix.elements,je=It[14]/(It[10]-1),me=It[14]/(It[10]+1),he=(It[9]+1)/It[5],Ae=(It[9]-1)/It[5],se=(It[8]-1)/It[0],Qe=(fe[8]+1)/fe[0],G=je*se,qe=je*Qe,Se=Vt/(-se+Qe),Ue=Se*-se;if(ct.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ue),et.translateZ(Se),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const qt=je+Se,D=me+Se,b=G-Ue,W=qe+(Vt-Ue),dt=he*me/D*qt,xt=Ae*me/D*qt;et.projectionMatrix.makePerspective(b,W,dt,xt,qt,D),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function U(et,ct){ct===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ct.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(o===null)return;let ct=et.near,wt=et.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),at.near=w.near=C.near=ct,at.far=w.far=C.far=wt,(nt!==at.near||ht!==at.far)&&(o.updateRenderState({depthNear:at.near,depthFar:at.far}),nt=at.near,ht=at.far),at.layers.mask=et.layers.mask|6,C.layers.mask=at.layers.mask&3,w.layers.mask=at.layers.mask&5;const Vt=et.parent,It=at.cameras;U(at,Vt);for(let fe=0;fe<It.length;fe++)U(It[fe],Vt);It.length===2?vt(at,C,w):at.projectionMatrix.copy(C.projectionMatrix),it(et,at,Vt)};function it(et,ct,wt){wt===null?et.matrix.copy(ct.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ct.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ct.projectionMatrix),et.projectionMatrixInverse.copy(ct.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Zd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(v===null&&x===null))return m},this.setFoveation=function(et){m=et,v!==null&&(v.fixedFoveation=et),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function(et){return S[et]};let gt=null;function Tt(et,ct){if(g=ct.getViewerPose(p||f),E=ct,g!==null){const wt=g.views;x!==null&&(t.setRenderTargetFramebuffer(N,x.framebuffer),t.setRenderTarget(N));let Vt=!1;wt.length!==at.cameras.length&&(at.cameras.length=0,Vt=!0);for(let me=0;me<wt.length;me++){const he=wt[me];let Ae=null;if(x!==null)Ae=x.getViewport(he);else{const Qe=_.getViewSubImage(v,he);Ae=Qe.viewport,me===0&&(t.setRenderTargetTextures(N,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(N))}let se=k[me];se===void 0&&(se=new di,se.layers.enable(me),se.viewport=new $e,k[me]=se),se.matrix.fromArray(he.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(he.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),me===0&&(at.matrix.copy(se.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Vt===!0&&at.cameras.push(se)}const It=o.enabledFeatures;if(It&&It.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const me=_.getDepthInformation(wt[0]);me&&me.isValid&&me.texture&&M.init(me,o.renderState)}if(It&&It.includes("camera-access")&&T){t.state.unbindTexture(),_=a.getBinding();for(let me=0;me<wt.length;me++){const he=wt[me].camera;if(he){let Ae=S[he];Ae||(Ae=new kv,S[he]=Ae);const se=_.getCameraImage(he);Ae.sourceTexture=se}}}}for(let wt=0;wt<P.length;wt++){const Vt=B[wt],It=P[wt];Vt!==null&&It!==void 0&&It.update(Vt,ct,p||f)}gt&&gt(et,ct),ct.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ct}),E=null}const Bt=new Wv;Bt.setAnimationLoop(Tt),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const ws=new Xr,TA=new fn;function AA(l,t){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function a(M,S){S.color.getRGB(M.fogColor.value,Iv(l)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function o(M,S,z,O,N){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(M,S):S.isMeshToonMaterial?(u(M,S),_(M,S)):S.isMeshPhongMaterial?(u(M,S),g(M,S)):S.isMeshStandardMaterial?(u(M,S),v(M,S),S.isMeshPhysicalMaterial&&x(M,S,N)):S.isMeshMatcapMaterial?(u(M,S),E(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),T(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,z,O):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===kn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===kn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const z=t.get(S),O=z.envMap,N=z.envMapRotation;O&&(M.envMap.value=O,ws.copy(N),ws.x*=-1,ws.y*=-1,ws.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),M.envMapRotation.value.setFromMatrix4(TA.makeRotationFromEuler(ws)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,z,O){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*z,M.scale.value=O*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,z){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function T(M,S){const z=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function RA(l,t,n,a){let o={},u={},f=[];const d=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,O){const N=O.program;a.uniformBlockBinding(z,N)}function p(z,O){let N=o[z.id];N===void 0&&(E(z),N=g(z),o[z.id]=N,z.addEventListener("dispose",M));const P=O.program;a.updateUBOMapping(z,P);const B=t.render.frame;u[z.id]!==B&&(v(z),u[z.id]=B)}function g(z){const O=_();z.__bindingPointIndex=O;const N=l.createBuffer(),P=z.__size,B=z.usage;return l.bindBuffer(l.UNIFORM_BUFFER,N),l.bufferData(l.UNIFORM_BUFFER,P,B),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,O,N),N}function _(){for(let z=0;z<d;z++)if(f.indexOf(z)===-1)return f.push(z),z;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(z){const O=o[z.id],N=z.uniforms,P=z.__cache;l.bindBuffer(l.UNIFORM_BUFFER,O);for(let B=0,L=N.length;B<L;B++){const j=Array.isArray(N[B])?N[B]:[N[B]];for(let C=0,w=j.length;C<w;C++){const k=j[C];if(x(k,B,C,P)===!0){const at=k.__offset,nt=Array.isArray(k.value)?k.value:[k.value];let ht=0;for(let lt=0;lt<nt.length;lt++){const F=nt[lt],H=T(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,l.bufferSubData(l.UNIFORM_BUFFER,at+ht,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,ht),ht+=H.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,at,k.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function x(z,O,N,P){const B=z.value,L=O+"_"+N;if(P[L]===void 0)return typeof B=="number"||typeof B=="boolean"?P[L]=B:P[L]=B.clone(),!0;{const j=P[L];if(typeof B=="number"||typeof B=="boolean"){if(j!==B)return P[L]=B,!0}else if(j.equals(B)===!1)return j.copy(B),!0}return!1}function E(z){const O=z.uniforms;let N=0;const P=16;for(let L=0,j=O.length;L<j;L++){const C=Array.isArray(O[L])?O[L]:[O[L]];for(let w=0,k=C.length;w<k;w++){const at=C[w],nt=Array.isArray(at.value)?at.value:[at.value];for(let ht=0,lt=nt.length;ht<lt;ht++){const F=nt[ht],H=T(F),J=N%P,St=J%H.boundary,vt=J+St;N+=St,vt!==0&&P-vt<H.storage&&(N+=P-vt),at.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=N,N+=H.storage}}}const B=N%P;return B>0&&(N+=P-B),z.__size=N,z.__cache={},this}function T(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",z),O}function M(z){const O=z.target;O.removeEventListener("dispose",M);const N=f.indexOf(O.__bindingPointIndex);f.splice(N,1),l.deleteBuffer(o[O.id]),delete o[O.id],delete u[O.id]}function S(){for(const z in o)l.deleteBuffer(o[z]);f=[],o={},u={}}return{bind:m,update:p,dispose:S}}const CA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function wA(){return Ni===null&&(Ni=new yM(CA,16,16,Hr,Sa),Ni.name="DFG_LUT",Ni.minFilter=Nn,Ni.magFilter=Nn,Ni.wrapS=ma,Ni.wrapT=ma,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class DA{constructor(t={}){const{canvas:n=Zy(),context:a=null,depth:o=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=ti}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=f;const T=x,M=new Set([rp,sp,ap]),S=new Set([ti,Hi,$o,tl,np,ip]),z=new Uint32Array(4),O=new Int32Array(4);let N=null,P=null;const B=[],L=[];let j=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=hi;let k=0,at=0,nt=null,ht=-1,lt=null;const F=new $e,H=new $e;let J=null;const St=new De(0);let vt=0,U=n.width,it=n.height,gt=1,Tt=null,Bt=null;const et=new $e(0,0,U,it),ct=new $e(0,0,U,it);let wt=!1;const Vt=new fp;let It=!1,fe=!1;const je=new fn,me=new rt,he=new $e,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Qe(){return nt===null?gt:1}let G=a;function qe(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$d}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",ye,!1),G===null){const q="webgl2";if(G=qe(q,R),G===null)throw qe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Te("WebGLRenderer: "+R.message),R}let Se,Ue,qt,D,b,W,dt,xt,ut,Zt,Rt,kt,te,Mt,Et,Pt,Ot,Ct,oe,X,Ut,bt,zt,yt;function _t(){Se=new wb(G),Se.init(),bt=new SA(G,Se),Ue=new Sb(G,Se,t,bt),qt=new vA(G,Se),Ue.reversedDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),D=new Lb(G),b=new iA,W=new xA(G,Se,qt,b,Ue,bt,D),dt=new Mb(C),xt=new Cb(C),ut=new PM(G),zt=new vb(G,ut),Zt=new Db(G,ut,D,zt),Rt=new Ob(G,Zt,ut,D),oe=new Nb(G,Ue,W),Pt=new yb(b),kt=new nA(C,dt,xt,Se,Ue,zt,Pt),te=new AA(C,b),Mt=new sA,Et=new fA(Se),Ct=new _b(C,dt,xt,qt,Rt,E,m),Ot=new gA(C,Rt,Ue),yt=new RA(G,D,Ue,qt),X=new xb(G,Se,D),Ut=new Ub(G,Se,D),D.programs=kt.programs,C.capabilities=Ue,C.extensions=Se,C.properties=b,C.renderLists=Mt,C.shadowMap=Ot,C.state=qt,C.info=D}_t(),T!==ti&&(j=new Pb(T,n.width,n.height,o,u));const At=new bA(C,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(U,it,!1))},this.getSize=function(R){return R.set(U,it)},this.setSize=function(R,q,st=!0){if(At.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,it=q,n.width=Math.floor(R*gt),n.height=Math.floor(q*gt),st===!0&&(n.style.width=R+"px",n.style.height=q+"px"),j!==null&&j.setSize(n.width,n.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(U*gt,it*gt).floor()},this.setDrawingBufferSize=function(R,q,st){U=R,it=q,gt=st,n.width=Math.floor(R*st),n.height=Math.floor(q*st),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(T===ti){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,q,st,$){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,q,st,$),qt.viewport(F.copy(et).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(ct)},this.setScissor=function(R,q,st,$){R.isVector4?ct.set(R.x,R.y,R.z,R.w):ct.set(R,q,st,$),qt.scissor(H.copy(ct).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){qt.setScissorTest(wt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){Bt=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,st=!0){let $=0;if(R){let Z=!1;if(nt!==null){const Dt=nt.texture.format;Z=M.has(Dt)}if(Z){const Dt=nt.texture.type,Ft=S.has(Dt),Lt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),Xt=Lt.r,Kt=Lt.g,Wt=Lt.b;Ft?(z[0]=Xt,z[1]=Kt,z[2]=Wt,z[3]=Ht,G.clearBufferuiv(G.COLOR,0,z)):(O[0]=Xt,O[1]=Kt,O[2]=Wt,O[3]=Ht,G.clearBufferiv(G.COLOR,0,O))}else $|=G.COLOR_BUFFER_BIT}q&&($|=G.DEPTH_BUFFER_BIT),st&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),Ct.dispose(),Mt.dispose(),Et.dispose(),b.dispose(),dt.dispose(),xt.dispose(),Rt.dispose(),zt.dispose(),yt.dispose(),kt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Bs),At.removeEventListener("sessionend",jr),Ci.stop()};function ee(R){R.preventDefault(),c_("WebGLRenderer: Context Lost."),w=!0}function Ne(){c_("WebGLRenderer: Context Restored."),w=!1;const R=D.autoReset,q=Ot.enabled,st=Ot.autoUpdate,$=Ot.needsUpdate,Z=Ot.type;_t(),D.autoReset=R,Ot.enabled=q,Ot.autoUpdate=st,Ot.needsUpdate=$,Ot.type=Z}function ye(R){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Cn(R){const q=R.target;q.removeEventListener("dispose",Cn),pi(q)}function pi(R){ul(R),b.remove(R)}function ul(R){const q=b.get(R).programs;q!==void 0&&(q.forEach(function(st){kt.releaseProgram(st)}),R.isShaderMaterial&&kt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,st,$,Z,Dt){q===null&&(q=Ae);const Ft=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=rs(R,q,st,$,Z);qt.setMaterial($,Ft);let Ht=st.index,Xt=1;if($.wireframe===!0){if(Ht=Zt.getWireframeAttribute(st),Ht===void 0)return;Xt=2}const Kt=st.drawRange,Wt=st.attributes.position;let Jt=Kt.start*Xt,Re=(Kt.start+Kt.count)*Xt;Dt!==null&&(Jt=Math.max(Jt,Dt.start*Xt),Re=Math.min(Re,(Dt.start+Dt.count)*Xt)),Ht!==null?(Jt=Math.max(Jt,0),Re=Math.min(Re,Ht.count)):Wt!=null&&(Jt=Math.max(Jt,0),Re=Math.min(Re,Wt.count));const Ye=Re-Jt;if(Ye<0||Ye===1/0)return;zt.setup(Z,$,Lt,st,Ht);let ke,Le=X;if(Ht!==null&&(ke=ut.get(Ht),Le=Ut,Le.setIndex(ke)),Z.isMesh)$.wireframe===!0?(qt.setLineWidth($.wireframeLinewidth*Qe()),Le.setMode(G.LINES)):Le.setMode(G.TRIANGLES);else if(Z.isLine){let jt=$.linewidth;jt===void 0&&(jt=1),qt.setLineWidth(jt*Qe()),Z.isLineSegments?Le.setMode(G.LINES):Z.isLineLoop?Le.setMode(G.LINE_LOOP):Le.setMode(G.LINE_STRIP)}else Z.isPoints?Le.setMode(G.POINTS):Z.isSprite&&Le.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)el("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const jt=Z._multiDrawStarts,Ce=Z._multiDrawCounts,ne=Z._multiDrawCount,vn=Ht?ut.get(Ht).bytesPerElement:1,ki=b.get($).currentProgram.getUniforms();for(let xn=0;xn<ne;xn++)ki.setValue(G,"_gl_DrawID",xn),Le.render(jt[xn]/vn,Ce[xn])}else if(Z.isInstancedMesh)Le.renderInstances(Jt,Ye,Z.count);else if(st.isInstancedBufferGeometry){const jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ce=Math.min(st.instanceCount,jt);Le.renderInstances(Jt,Ye,Ce)}else Le.render(Jt,Ye)};function Yr(R,q,st){R.transparent===!0&&R.side===pa&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Hs(R,q,st),R.side=ss,R.needsUpdate=!0,Hs(R,q,st),R.side=pa):Hs(R,q,st)}this.compile=function(R,q,st=null){st===null&&(st=R),P=Et.get(st),P.init(q),L.push(P),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(P.pushLight(Z),Z.castShadow&&P.pushShadow(Z))}),P.setupLights();const $=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){const Lt=Dt[Ft];Yr(Lt,st,Z),$.add(Lt)}else Yr(Dt,st,Z),$.add(Dt)}),P=L.pop(),$},this.compileAsync=function(R,q,st=null){const $=this.compile(R,q,st);return new Promise(Z=>{function Dt(){if($.forEach(function(Ft){b.get(Ft).currentProgram.isReady()&&$.delete(Ft)}),$.size===0){Z(R);return}setTimeout(Dt,10)}Se.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Fs=null;function Zr(R){Fs&&Fs(R)}function Bs(){Ci.stop()}function jr(){Ci.start()}const Ci=new Wv;Ci.setAnimationLoop(Zr),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){Fs=R,At.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},At.addEventListener("sessionstart",Bs),At.addEventListener("sessionend",jr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const st=At.enabled===!0&&At.isPresenting===!0,$=j!==null&&(nt===null||st)&&j.begin(C,nt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,nt),P=Et.get(R,L.length),P.init(q),L.push(P),je.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Vt.setFromProjectionMatrix(je,Pi,q.reversedDepth),fe=this.localClippingEnabled,It=Pt.init(this.clippingPlanes,fe),N=Mt.get(R,B.length),N.init(),B.push(N),At.enabled===!0&&At.isPresenting===!0){const Ft=C.xr.getDepthSensingMesh();Ft!==null&&ei(Ft,q,-1/0,C.sortObjects)}ei(R,q,0,C.sortObjects),N.finish(),C.sortObjects===!0&&N.sort(Tt,Bt),se=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,se&&Ct.addToRenderList(N,R),this.info.render.frame++,It===!0&&Pt.beginShadows();const Z=P.state.shadowsArray;if(Ot.render(Z,R,q),It===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&j.hasRenderPass())===!1){const Ft=N.opaque,Lt=N.transmissive;if(P.setupLights(),q.isArrayCamera){const Ht=q.cameras;if(Lt.length>0)for(let Xt=0,Kt=Ht.length;Xt<Kt;Xt++){const Wt=Ht[Xt];_n(Ft,Lt,R,Wt)}se&&Ct.render(R);for(let Xt=0,Kt=Ht.length;Xt<Kt;Xt++){const Wt=Ht[Xt];nn(N,R,Wt,Wt.viewport)}}else Lt.length>0&&_n(Ft,Lt,R,q),se&&Ct.render(R),nn(N,R,q)}nt!==null&&at===0&&(W.updateMultisampleRenderTarget(nt),W.updateRenderTargetMipmap(nt)),$&&j.end(C),R.isScene===!0&&R.onAfterRender(C,R,q),zt.resetDefaultState(),ht=-1,lt=null,L.pop(),L.length>0?(P=L[L.length-1],It===!0&&Pt.setGlobalState(C.clippingPlanes,P.state.camera)):P=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function ei(R,q,st,$){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){$&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(je);const Ft=Rt.update(R),Lt=R.material;Lt.visible&&N.push(R,Ft,Lt,st,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const Ft=Rt.update(R),Lt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),he.copy(Ft.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(je)),Array.isArray(Lt)){const Ht=Ft.groups;for(let Xt=0,Kt=Ht.length;Xt<Kt;Xt++){const Wt=Ht[Xt],Jt=Lt[Wt.materialIndex];Jt&&Jt.visible&&N.push(R,Ft,Jt,st,he.z,Wt)}}else Lt.visible&&N.push(R,Ft,Lt,st,he.z,null)}}const Dt=R.children;for(let Ft=0,Lt=Dt.length;Ft<Lt;Ft++)ei(Dt[Ft],q,st,$)}function nn(R,q,st,$){const{opaque:Z,transmissive:Dt,transparent:Ft}=R;P.setupLightsView(st),It===!0&&Pt.setGlobalState(C.clippingPlanes,st),$&&qt.viewport(F.copy($)),Z.length>0&&mi(Z,q,st),Dt.length>0&&mi(Dt,q,st),Ft.length>0&&mi(Ft,q,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function _n(R,q,st,$){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[$.id]===void 0){const Jt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[$.id]=new Bi(1,1,{generateMipmaps:!0,type:Jt?Sa:ti,minFilter:Ns,samples:Ue.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace})}const Dt=P.state.transmissionRenderTarget[$.id],Ft=$.viewport||F;Dt.setSize(Ft.z*C.transmissionResolutionScale,Ft.w*C.transmissionResolutionScale);const Lt=C.getRenderTarget(),Ht=C.getActiveCubeFace(),Xt=C.getActiveMipmapLevel();C.setRenderTarget(Dt),C.getClearColor(St),vt=C.getClearAlpha(),vt<1&&C.setClearColor(16777215,.5),C.clear(),se&&Ct.render(st);const Kt=C.toneMapping;C.toneMapping=Fi;const Wt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),P.setupLightsView($),It===!0&&Pt.setGlobalState(C.clippingPlanes,$),mi(R,st,$),W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Re=0,Ye=q.length;Re<Ye;Re++){const ke=q[Re],{object:Le,geometry:jt,material:Ce,group:ne}=ke;if(Ce.side===pa&&Le.layers.test($.layers)){const vn=Ce.side;Ce.side=kn,Ce.needsUpdate=!0,Is(Le,st,$,jt,Ce,ne),Ce.side=vn,Ce.needsUpdate=!0,Jt=!0}}Jt===!0&&(W.updateMultisampleRenderTarget(Dt),W.updateRenderTargetMipmap(Dt))}C.setRenderTarget(Lt,Ht,Xt),C.setClearColor(St,vt),Wt!==void 0&&($.viewport=Wt),C.toneMapping=Kt}function mi(R,q,st){const $=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Dt=R.length;Z<Dt;Z++){const Ft=R[Z],{object:Lt,geometry:Ht,group:Xt}=Ft;let Kt=Ft.material;Kt.allowOverride===!0&&$!==null&&(Kt=$),Lt.layers.test(st.layers)&&Is(Lt,q,st,Ht,Kt,Xt)}}function Is(R,q,st,$,Z,Dt){R.onBeforeRender(C,q,st,$,Z,Dt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,q,st,$,R,Dt),Z.transparent===!0&&Z.side===pa&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,C.renderBufferDirect(st,q,$,Z,R,Dt),Z.side=ss,Z.needsUpdate=!0,C.renderBufferDirect(st,q,$,Z,R,Dt),Z.side=pa):C.renderBufferDirect(st,q,$,Z,R,Dt),R.onAfterRender(C,q,st,$,Z,Dt)}function Hs(R,q,st){q.isScene!==!0&&(q=Ae);const $=b.get(R),Z=P.state.lights,Dt=P.state.shadowsArray,Ft=Z.state.version,Lt=kt.getParameters(R,Z.state,Dt,q,st),Ht=kt.getProgramCacheKey(Lt);let Xt=$.programs;$.environment=R.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(R.isMeshStandardMaterial?xt:dt).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Cn),Xt=new Map,$.programs=Xt);let Kt=Xt.get(Ht);if(Kt!==void 0){if($.currentProgram===Kt&&$.lightsStateVersion===Ft)return Qr(R,Lt),Kt}else Lt.uniforms=kt.getUniforms(R),R.onBeforeCompile(Lt,C),Kt=kt.acquireProgram(Lt,Ht),Xt.set(Ht,Kt),$.uniforms=Lt.uniforms;const Wt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=Pt.uniform),Qr(R,Lt),$.needsLights=Ea(R),$.lightsStateVersion=Ft,$.needsLights&&(Wt.ambientLightColor.value=Z.state.ambient,Wt.lightProbe.value=Z.state.probe,Wt.directionalLights.value=Z.state.directional,Wt.directionalLightShadows.value=Z.state.directionalShadow,Wt.spotLights.value=Z.state.spot,Wt.spotLightShadows.value=Z.state.spotShadow,Wt.rectAreaLights.value=Z.state.rectArea,Wt.ltc_1.value=Z.state.rectAreaLTC1,Wt.ltc_2.value=Z.state.rectAreaLTC2,Wt.pointLights.value=Z.state.point,Wt.pointLightShadows.value=Z.state.pointShadow,Wt.hemisphereLights.value=Z.state.hemi,Wt.directionalShadowMap.value=Z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Wt.spotShadowMap.value=Z.state.spotShadowMap,Wt.spotLightMatrix.value=Z.state.spotLightMatrix,Wt.spotLightMap.value=Z.state.spotLightMap,Wt.pointShadowMap.value=Z.state.pointShadowMap,Wt.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=Kt,$.uniformsList=null,Kt}function cl(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Ju.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Qr(R,q){const st=b.get(R);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function rs(R,q,st,$,Z){q.isScene!==!0&&(q=Ae),W.resetTextureUnits();const Dt=q.fog,Ft=$.isMeshStandardMaterial?q.environment:null,Lt=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Gr,Ht=($.isMeshStandardMaterial?xt:dt).get($.envMap||Ft),Xt=$.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Kt=!!st.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Wt=!!st.morphAttributes.position,Jt=!!st.morphAttributes.normal,Re=!!st.morphAttributes.color;let Ye=Fi;$.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ye=C.toneMapping);const ke=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Le=ke!==void 0?ke.length:0,jt=b.get($),Ce=P.state.lights;if(It===!0&&(fe===!0||R!==lt)){const yn=R===lt&&$.id===ht;Pt.setState($,R,yn)}let ne=!1;$.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ce.state.version||jt.outputColorSpace!==Lt||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==Ht||$.fog===!0&&jt.fog!==Dt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Pt.numPlanes||jt.numIntersection!==Pt.numIntersection)||jt.vertexAlphas!==Xt||jt.vertexTangents!==Kt||jt.morphTargets!==Wt||jt.morphNormals!==Jt||jt.morphColors!==Re||jt.toneMapping!==Ye||jt.morphTargetsCount!==Le)&&(ne=!0):(ne=!0,jt.__version=$.version);let vn=jt.currentProgram;ne===!0&&(vn=Hs($,q,Z));let ki=!1,xn=!1,ni=!1;const Oe=vn.getUniforms(),Sn=jt.uniforms;if(qt.useProgram(vn.program)&&(ki=!0,xn=!0,ni=!0),$.id!==ht&&(ht=$.id,xn=!0),ki||lt!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Oe.setValue(G,"projectionMatrix",R.projectionMatrix),Oe.setValue(G,"viewMatrix",R.matrixWorldInverse);const Mn=Oe.map.cameraPosition;Mn!==void 0&&Mn.setValue(G,me.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),lt!==R&&(lt=R,xn=!0,ni=!0)}if(jt.needsLights&&(Ce.state.directionalShadowMap.length>0&&Oe.setValue(G,"directionalShadowMap",Ce.state.directionalShadowMap,W),Ce.state.spotShadowMap.length>0&&Oe.setValue(G,"spotShadowMap",Ce.state.spotShadowMap,W),Ce.state.pointShadowMap.length>0&&Oe.setValue(G,"pointShadowMap",Ce.state.pointShadowMap,W)),Z.isSkinnedMesh){Oe.setOptional(G,Z,"bindMatrix"),Oe.setOptional(G,Z,"bindMatrixInverse");const yn=Z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Oe.setValue(G,"boneTexture",yn.boneTexture,W))}Z.isBatchedMesh&&(Oe.setOptional(G,Z,"batchingTexture"),Oe.setValue(G,"batchingTexture",Z._matricesTexture,W),Oe.setOptional(G,Z,"batchingIdTexture"),Oe.setValue(G,"batchingIdTexture",Z._indirectTexture,W),Oe.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Oe.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const un=st.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&oe.update(Z,st,vn),(xn||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,Oe.setValue(G,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=Ht,Sn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=wA()),xn&&(Oe.setValue(G,"toneMappingExposure",C.toneMappingExposure),jt.needsLights&&Kr(Sn,ni),Dt&&$.fog===!0&&te.refreshFogUniforms(Sn,Dt),te.refreshMaterialUniforms(Sn,$,gt,it,P.state.transmissionRenderTarget[R.id]),Ju.upload(G,cl(jt),Sn,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ju.upload(G,cl(jt),Sn,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Oe.setValue(G,"center",Z.center),Oe.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Oe.setValue(G,"normalMatrix",Z.normalMatrix),Oe.setValue(G,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const yn=$.uniformsGroups;for(let Mn=0,Gs=yn.length;Mn<Gs;Mn++){const gi=yn[Mn];yt.update(gi,vn),yt.bind(gi,vn)}}return vn}function Kr(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ea(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return at},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(R,q,st){const $=b.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),b.get(R.texture).__webglTexture=q,b.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:st,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const st=b.get(R);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const ba=G.createFramebuffer();this.setRenderTarget=function(R,q=0,st=0){nt=R,k=q,at=st;let $=null,Z=!1,Dt=!1;if(R){const Lt=b.get(R);if(Lt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),F.copy(R.viewport),H.copy(R.scissor),J=R.scissorTest,qt.viewport(F),qt.scissor(H),qt.setScissorTest(J),ht=-1;return}else if(Lt.__webglFramebuffer===void 0)W.setupRenderTarget(R);else if(Lt.__hasExternalTextures)W.rebindTextures(R,b.get(R.texture).__webglTexture,b.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Kt=R.depthTexture;if(Lt.__boundDepthTexture!==Kt){if(Kt!==null&&b.has(Kt)&&(R.width!==Kt.image.width||R.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const Xt=b.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[q])?$=Xt[q][st]:$=Xt[q],Z=!0):R.samples>0&&W.useMultisampledRTT(R)===!1?$=b.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?$=Xt[st]:$=Xt,F.copy(R.viewport),H.copy(R.scissor),J=R.scissorTest}else F.copy(et).multiplyScalar(gt).floor(),H.copy(ct).multiplyScalar(gt).floor(),J=wt;if(st!==0&&($=ba),qt.bindFramebuffer(G.FRAMEBUFFER,$)&&qt.drawBuffers(R,$),qt.viewport(F),qt.scissor(H),qt.setScissorTest(J),Z){const Lt=b.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,st)}else if(Dt){const Lt=q;for(let Ht=0;Ht<R.textures.length;Ht++){const Xt=b.get(R.textures[Ht]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,st,Lt)}}else if(R!==null&&st!==0){const Lt=b.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,st)}ht=-1},this.readRenderTargetPixels=function(R,q,st,$,Z,Dt,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);try{const Xt=R.textures[Lt],Kt=Xt.format,Wt=Xt.type;if(!Ue.textureFormatReadable(Kt)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Wt)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-$&&st>=0&&st<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,$,Z,bt.convert(Kt),bt.convert(Wt),Dt))}finally{const Xt=nt!==null?b.get(nt).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,q,st,$,Z,Dt,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=b.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht)if(q>=0&&q<=R.width-$&&st>=0&&st<=R.height-Z){qt.bindFramebuffer(G.FRAMEBUFFER,Ht);const Xt=R.textures[Lt],Kt=Xt.format,Wt=Xt.type;if(!Ue.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Jt),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(q,st,$,Z,bt.convert(Kt),bt.convert(Wt),0);const Re=nt!==null?b.get(nt).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,Re);const Ye=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await jy(G,Ye,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Jt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(Jt),G.deleteSync(Ye),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,st=0){const $=Math.pow(2,-st),Z=Math.floor(R.image.width*$),Dt=Math.floor(R.image.height*$),Ft=q!==null?q.x:0,Lt=q!==null?q.y:0;W.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Ft,Lt,Z,Dt),qt.unbindTexture()};const os=G.createFramebuffer(),Ta=G.createFramebuffer();this.copyTextureToTexture=function(R,q,st=null,$=null,Z=0,Dt=null){Dt===null&&(Z!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Z,Z=0):Dt=0);let Ft,Lt,Ht,Xt,Kt,Wt,Jt,Re,Ye;const ke=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(st!==null)Ft=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,Xt=st.min.x,Kt=st.min.y,Wt=st.isBox3?st.min.z:0;else{const un=Math.pow(2,-Z);Ft=Math.floor(ke.width*un),Lt=Math.floor(ke.height*un),R.isDataArrayTexture?Ht=ke.depth:R.isData3DTexture?Ht=Math.floor(ke.depth*un):Ht=1,Xt=0,Kt=0,Wt=0}$!==null?(Jt=$.x,Re=$.y,Ye=$.z):(Jt=0,Re=0,Ye=0);const Le=bt.convert(q.format),jt=bt.convert(q.type);let Ce;q.isData3DTexture?(W.setTexture3D(q,0),Ce=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Ce=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Ce=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const ne=G.getParameter(G.UNPACK_ROW_LENGTH),vn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ki=G.getParameter(G.UNPACK_SKIP_PIXELS),xn=G.getParameter(G.UNPACK_SKIP_ROWS),ni=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Xt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Kt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Wt);const Oe=R.isDataArrayTexture||R.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const un=b.get(R),yn=b.get(q),Mn=b.get(un.__renderTarget),Gs=b.get(yn.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,Mn.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Gs.__webglFramebuffer);for(let gi=0;gi<Ht;gi++)Oe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(R).__webglTexture,Z,Wt+gi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Dt,Ye+gi)),G.blitFramebuffer(Xt,Kt,Ft,Lt,Jt,Re,Ft,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||b.has(R)){const un=b.get(R),yn=b.get(q);qt.bindFramebuffer(G.READ_FRAMEBUFFER,os),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ta);for(let Mn=0;Mn<Ht;Mn++)Oe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,un.__webglTexture,Z,Wt+Mn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,un.__webglTexture,Z),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yn.__webglTexture,Dt,Ye+Mn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yn.__webglTexture,Dt),Z!==0?G.blitFramebuffer(Xt,Kt,Ft,Lt,Jt,Re,Ft,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(Ce,Dt,Jt,Re,Ye+Mn,Xt,Kt,Ft,Lt):G.copyTexSubImage2D(Ce,Dt,Jt,Re,Xt,Kt,Ft,Lt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ce,Dt,Jt,Re,Ye,Ft,Lt,Ht,Le,jt,ke.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ce,Dt,Jt,Re,Ye,Ft,Lt,Ht,Le,ke.data):G.texSubImage3D(Ce,Dt,Jt,Re,Ye,Ft,Lt,Ht,Le,jt,ke):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,Jt,Re,Ft,Lt,Le,jt,ke.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,Jt,Re,ke.width,ke.height,Le,ke.data):G.texSubImage2D(G.TEXTURE_2D,Dt,Jt,Re,Ft,Lt,Le,jt,ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,ne),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ni),Dt===0&&q.generateMipmaps&&G.generateMipmap(Ce),qt.unbindTexture()},this.initRenderTarget=function(R){b.get(R).__webglFramebuffer===void 0&&W.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?W.setTextureCube(R,0):R.isData3DTexture?W.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?W.setTexture2DArray(R,0):W.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){k=0,at=0,nt=null,qt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),n.unpackColorSpace=Me._getUnpackColorSpace()}}class UA{constructor({scene:t,camera:n,renderer:a}){this.scene=t,this.camera=n,this.renderer=a}onEnter(){}onExit(){}update(t){}dispose(){}}const Qv="157",Kv=300,$_=1e3,Gu=1001,tv=1002,LA=1006,NA=1008,OA=1009,zA=1023,PA=3e3,jh=3001,Qh="",Kh="srgb",Vu=2e3,ev=2001;class Jv{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let u=0,f=o.length;u<f;u++)o[u].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function dp(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[l&255]+Ln[l>>8&255]+Ln[l>>16&255]+Ln[l>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function da(l,t,n){return Math.max(t,Math.min(n,l))}class Jo{constructor(t=0,n=0){Jo.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(da(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-t.x,f=this.y-t.y;return this.x=u*a-f*o+t.x,this.y=u*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ol{constructor(t,n,a,o,u,f,d,m,p){ol.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,f,d,m,p)}set(t,n,a,o,u,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=d,g[3]=n,g[4]=u,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,f=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],v=a[2],x=a[5],E=a[8],T=o[0],M=o[3],S=o[6],z=o[1],O=o[4],N=o[7],P=o[2],B=o[5],L=o[8];return u[0]=f*T+d*z+m*P,u[3]=f*M+d*O+m*B,u[6]=f*S+d*N+m*L,u[1]=p*T+g*z+_*P,u[4]=p*M+g*O+_*B,u[7]=p*S+g*N+_*L,u[2]=v*T+x*z+E*P,u[5]=v*M+x*O+E*B,u[8]=v*S+x*N+E*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return n*f*g-n*d*p-a*u*g+a*d*m+o*u*p-o*f*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,v=d*m-g*u,x=p*u-f*m,E=n*_+a*v+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(o*p-g*a)*T,t[2]=(d*a-o*f)*T,t[3]=v*T,t[4]=(g*n-o*m)*T,t[5]=(o*u-d*n)*T,t[6]=x*T,t[7]=(a*m-p*n)*T,t[8]=(f*n-a*u)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*f+p*d)+f+t,-o*p,o*m,-o*(-p*f+m*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(Jh.makeScale(t,n)),this}rotate(t){return this.premultiply(Jh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Jh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jh=new ol;function nv(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}const iv={};function $h(l){l in iv||(iv[l]=!0,console.warn(l))}function td(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}let Nr;class FA{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Nr===void 0&&(Nr=nv("canvas")),Nr.width=t.width,Nr.height=t.height;const a=Nr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=Nr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=nv("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),u=o.data;for(let f=0;f<u.length;f++)u[f]=td(u[f]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(td(n[a]/255)*255):n[a]=td(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BA=0;class IA{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=dp(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?u.push(ed(o[f].image)):u.push(ed(o[f]))}else u=ed(o);a.url=u}return n||(t.images[this.uuid]=a),a}}function ed(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?FA.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HA=0;class zs extends Jv{constructor(t=zs.DEFAULT_IMAGE,n=zs.DEFAULT_MAPPING,a=Gu,o=Gu,u=LA,f=NA,d=zA,m=OA,p=zs.DEFAULT_ANISOTROPY,g=Qh){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=dp(),this.name="",this.source=new IA(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Jo(0,0),this.repeat=new Jo(1,1),this.center=new Jo(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ol,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:($h("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===jh?Kh:Qh),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $_:t.x=t.x-Math.floor(t.x);break;case Gu:t.x=t.x<0?0:1;break;case tv:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $_:t.y=t.y-Math.floor(t.y);break;case Gu:t.y=t.y<0?0:1;break;case tv:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $h("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kh?jh:PA}set encoding(t){$h("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===jh?Kh:Qh}}zs.DEFAULT_IMAGE=null;zs.DEFAULT_MAPPING=Kv;zs.DEFAULT_ANISOTROPY=1;class ll{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,u,f,d){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3];const v=u[f+0],x=u[f+1],E=u[f+2],T=u[f+3];if(d===0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(d===1){t[n+0]=v,t[n+1]=x,t[n+2]=E,t[n+3]=T;return}if(_!==T||m!==v||p!==x||g!==E){let M=1-d;const S=m*v+p*x+g*E+_*T,z=S>=0?1:-1,O=1-S*S;if(O>Number.EPSILON){const P=Math.sqrt(O),B=Math.atan2(P,S*z);M=Math.sin(M*B)/P,d=Math.sin(d*B)/P}const N=d*z;if(m=m*M+v*N,p=p*M+x*N,g=g*M+E*N,_=_*M+T*N,M===1-d){const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,u,f){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=u[f],v=u[f+1],x=u[f+2],E=u[f+3];return t[n]=d*E+g*_+m*x-p*v,t[n+1]=m*E+g*v+p*_-d*x,t[n+2]=p*E+g*x+d*v-m*_,t[n+3]=g*E-d*_-m*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){const a=t._x,o=t._y,u=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),_=d(u/2),v=m(a/2),x=m(o/2),E=m(u/2);switch(f){case"XYZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"YXZ":this._x=v*g*_+p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"ZXY":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_-v*x*E;break;case"ZYX":this._x=v*g*_-p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_+v*x*E;break;case"YZX":this._x=v*g*_+p*x*E,this._y=p*x*_+v*g*E,this._z=p*g*E-v*x*_,this._w=p*g*_-v*x*E;break;case"XZY":this._x=v*g*_-p*x*E,this._y=p*x*_-v*g*E,this._z=p*g*E+v*x*_,this._w=p*g*_+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],u=n[8],f=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],v=a+d+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-m)*x,this._y=(u-p)*x,this._z=(f-o)*x}else if(a>d&&a>_){const x=2*Math.sqrt(1+a-d-_);this._w=(g-m)/x,this._x=.25*x,this._y=(o+f)/x,this._z=(u+p)/x}else if(d>_){const x=2*Math.sqrt(1+d-a-_);this._w=(u-p)/x,this._x=(o+f)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-a-d);this._w=(f-o)/x,this._x=(u+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(da(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,u=t._z,f=t._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+f*d+o*p-u*m,this._y=o*g+f*m+u*d-a*p,this._z=u*g+f*p+a*m-o*d,this._w=f*g-a*d-o*m-u*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,u=this._z,f=this._w;let d=f*t._w+a*t._x+o*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=a,this._y=o,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const x=1-n;return this._w=x*f+n*this._w,this._x=x*a+n*this._x,this._y=x*o+n*this._y,this._z=x*u+n*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=f*_+this._w*v,this._x=a*_+this._x*v,this._y=o*_+this._y*v,this._z=u*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=Math.random(),n=Math.sqrt(1-t),a=Math.sqrt(t),o=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(n*Math.cos(o),a*Math.sin(u),a*Math.cos(u),n*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pn{constructor(t=0,n=0,a=0){pn.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(av.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(av.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=t.elements,f=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*f,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*f,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,u=t.x,f=t.y,d=t.z,m=t.w,p=m*n+f*o-d*a,g=m*a+d*n-u*o,_=m*o+u*a-f*n,v=-u*n-f*a-d*o;return this.x=p*m+v*-u+g*-d-_*-f,this.y=g*m+v*-f+_*-u-p*-d,this.z=_*m+v*-d+p*-f-g*-u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,u=t.z,f=n.x,d=n.y,m=n.z;return this.x=o*m-u*d,this.y=u*f-a*m,this.z=a*d-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return nd.copy(this).projectOnVector(t),this.sub(nd)}reflect(t){return this.sub(nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(da(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,a=Math.sqrt(1-t**2);return this.x=a*Math.cos(n),this.y=a*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new pn,av=new ll;class xa{constructor(t,n,a,o,u,f,d,m,p,g,_,v,x,E,T,M){xa.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,f,d,m,p,g,_,v,x,E,T,M)}set(t,n,a,o,u,f,d,m,p,g,_,v,x,E,T,M){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=o,S[1]=u,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=g,S[10]=_,S[14]=v,S[3]=x,S[7]=E,S[11]=T,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xa().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/Or.setFromMatrixColumn(t,0).length(),u=1/Or.setFromMatrixColumn(t,1).length(),f=1/Or.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,u=t.z,f=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const v=f*g,x=f*_,E=d*g,T=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=x+E*p,n[5]=v-T*p,n[9]=-d*m,n[2]=T-v*p,n[6]=E+x*p,n[10]=f*m}else if(t.order==="YXZ"){const v=m*g,x=m*_,E=p*g,T=p*_;n[0]=v+T*d,n[4]=E*d-x,n[8]=f*p,n[1]=f*_,n[5]=f*g,n[9]=-d,n[2]=x*d-E,n[6]=T+v*d,n[10]=f*m}else if(t.order==="ZXY"){const v=m*g,x=m*_,E=p*g,T=p*_;n[0]=v-T*d,n[4]=-f*_,n[8]=E+x*d,n[1]=x+E*d,n[5]=f*g,n[9]=T-v*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(t.order==="ZYX"){const v=f*g,x=f*_,E=d*g,T=d*_;n[0]=m*g,n[4]=E*p-x,n[8]=v*p+T,n[1]=m*_,n[5]=T*p+v,n[9]=x*p-E,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(t.order==="YZX"){const v=f*m,x=f*p,E=d*m,T=d*p;n[0]=m*g,n[4]=T-v*_,n[8]=E*_+x,n[1]=_,n[5]=f*g,n[9]=-d*g,n[2]=-p*g,n[6]=x*_+E,n[10]=v-T*_}else if(t.order==="XZY"){const v=f*m,x=f*p,E=d*m,T=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=v*_+T,n[5]=f*g,n[9]=x*_-E,n[2]=E*_-x,n[6]=d*g,n[10]=T*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GA,t,VA)}lookAt(t,n,a){const o=this.elements;return $n.subVectors(t,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),es.crossVectors(a,$n),es.lengthSq()===0&&(Math.abs(a.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),es.crossVectors(a,$n)),es.normalize(),ku.crossVectors($n,es),o[0]=es.x,o[4]=ku.x,o[8]=$n.x,o[1]=es.y,o[5]=ku.y,o[9]=$n.y,o[2]=es.z,o[6]=ku.z,o[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,f=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],v=a[9],x=a[13],E=a[2],T=a[6],M=a[10],S=a[14],z=a[3],O=a[7],N=a[11],P=a[15],B=o[0],L=o[4],j=o[8],C=o[12],w=o[1],k=o[5],at=o[9],nt=o[13],ht=o[2],lt=o[6],F=o[10],H=o[14],J=o[3],St=o[7],vt=o[11],U=o[15];return u[0]=f*B+d*w+m*ht+p*J,u[4]=f*L+d*k+m*lt+p*St,u[8]=f*j+d*at+m*F+p*vt,u[12]=f*C+d*nt+m*H+p*U,u[1]=g*B+_*w+v*ht+x*J,u[5]=g*L+_*k+v*lt+x*St,u[9]=g*j+_*at+v*F+x*vt,u[13]=g*C+_*nt+v*H+x*U,u[2]=E*B+T*w+M*ht+S*J,u[6]=E*L+T*k+M*lt+S*St,u[10]=E*j+T*at+M*F+S*vt,u[14]=E*C+T*nt+M*H+S*U,u[3]=z*B+O*w+N*ht+P*J,u[7]=z*L+O*k+N*lt+P*St,u[11]=z*j+O*at+N*F+P*vt,u[15]=z*C+O*nt+N*H+P*U,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],u=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],x=t[14],E=t[3],T=t[7],M=t[11],S=t[15];return E*(+u*m*_-o*p*_-u*d*v+a*p*v+o*d*x-a*m*x)+T*(+n*m*x-n*p*v+u*f*v-o*f*x+o*p*g-u*m*g)+M*(+n*p*_-n*d*x-u*f*_+a*f*x+u*d*g-a*p*g)+S*(-o*d*g-n*m*_+n*d*v+o*f*_-a*f*v+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],x=t[11],E=t[12],T=t[13],M=t[14],S=t[15],z=_*M*p-T*v*p+T*m*x-d*M*x-_*m*S+d*v*S,O=E*v*p-g*M*p-E*m*x+f*M*x+g*m*S-f*v*S,N=g*T*p-E*_*p+E*d*x-f*T*x-g*d*S+f*_*S,P=E*_*m-g*T*m-E*d*v+f*T*v+g*d*M-f*_*M,B=n*z+a*O+o*N+u*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return t[0]=z*L,t[1]=(T*v*u-_*M*u-T*o*x+a*M*x+_*o*S-a*v*S)*L,t[2]=(d*M*u-T*m*u+T*o*p-a*M*p-d*o*S+a*m*S)*L,t[3]=(_*m*u-d*v*u-_*o*p+a*v*p+d*o*x-a*m*x)*L,t[4]=O*L,t[5]=(g*M*u-E*v*u+E*o*x-n*M*x-g*o*S+n*v*S)*L,t[6]=(E*m*u-f*M*u-E*o*p+n*M*p+f*o*S-n*m*S)*L,t[7]=(f*v*u-g*m*u+g*o*p-n*v*p-f*o*x+n*m*x)*L,t[8]=N*L,t[9]=(E*_*u-g*T*u-E*a*x+n*T*x+g*a*S-n*_*S)*L,t[10]=(f*T*u-E*d*u+E*a*p-n*T*p-f*a*S+n*d*S)*L,t[11]=(g*d*u-f*_*u-g*a*p+n*_*p+f*a*x-n*d*x)*L,t[12]=P*L,t[13]=(g*T*o-E*_*o+E*a*v-n*T*v-g*a*M+n*_*M)*L,t[14]=(E*d*o-f*T*o-E*a*m+n*T*m+f*a*M-n*d*M)*L,t[15]=(f*_*o-g*d*o+g*a*m-n*_*m-f*a*v+n*d*v)*L,this}scale(t){const n=this.elements,a=t.x,o=t.y,u=t.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,f=t.x,d=t.y,m=t.z,p=u*f,g=u*d;return this.set(p*f+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*f,0,p*m-o*d,g*m+o*f,u*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,u,f){return this.set(1,a,u,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,u=n._x,f=n._y,d=n._z,m=n._w,p=u+u,g=f+f,_=d+d,v=u*p,x=u*g,E=u*_,T=f*g,M=f*_,S=d*_,z=m*p,O=m*g,N=m*_,P=a.x,B=a.y,L=a.z;return o[0]=(1-(T+S))*P,o[1]=(x+N)*P,o[2]=(E-O)*P,o[3]=0,o[4]=(x-N)*B,o[5]=(1-(v+S))*B,o[6]=(M+z)*B,o[7]=0,o[8]=(E+O)*L,o[9]=(M-z)*L,o[10]=(1-(v+T))*L,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let u=Or.set(o[0],o[1],o[2]).length();const f=Or.set(o[4],o[5],o[6]).length(),d=Or.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),t.x=o[12],t.y=o[13],t.z=o[14],Ei.copy(this);const p=1/u,g=1/f,_=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,n.setFromRotationMatrix(Ei),a.x=u,a.y=f,a.z=d,this}makePerspective(t,n,a,o,u,f,d=Vu){const m=this.elements,p=2*u/(n-t),g=2*u/(a-o),_=(n+t)/(n-t),v=(a+o)/(a-o);let x,E;if(d===Vu)x=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===ev)x=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,a,o,u,f,d=Vu){const m=this.elements,p=1/(n-t),g=1/(a-o),_=1/(f-u),v=(n+t)*p,x=(a+o)*g;let E,T;if(d===Vu)E=(f+u)*_,T=-2*_;else if(d===ev)E=u*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-x,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Or=new pn,Ei=new xa,GA=new pn(0,0,0),VA=new pn(1,1,1),es=new pn,ku=new pn,$n=new pn,sv=new xa,rv=new ll;class rc{constructor(t=0,n=0,a=0,o=rc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,u=o[0],f=o[4],d=o[8],m=o[1],p=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(da(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-da(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(da(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-da(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(da(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-da(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return sv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return rv.setFromEuler(this),this.setFromQuaternion(rv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rc.DEFAULT_ORDER="XYZ";class kA{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let XA=0;const ov=new pn,zr=new ll,ha=new xa,Xu=new pn,jo=new pn,WA=new pn,qA=new ll,lv=new pn(1,0,0),uv=new pn(0,1,0),cv=new pn(0,0,1),YA={type:"added"},ZA={type:"removed"};class as extends Jv{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XA++}),this.uuid=dp(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=as.DEFAULT_UP.clone();const t=new pn,n=new rc,a=new ll,o=new pn(1,1,1);function u(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xa},normalMatrix:{value:new ol}}),this.matrix=new xa,this.matrixWorld=new xa,this.matrixAutoUpdate=as.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=as.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new kA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return zr.setFromAxisAngle(t,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,n){return zr.setFromAxisAngle(t,n),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(lv,t)}rotateY(t){return this.rotateOnAxis(uv,t)}rotateZ(t){return this.rotateOnAxis(cv,t)}translateOnAxis(t,n){return ov.copy(t).applyQuaternion(this.quaternion),this.position.add(ov.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(lv,t)}translateY(t){return this.translateOnAxis(uv,t)}translateZ(t){return this.translateOnAxis(cv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Xu.copy(t):Xu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(jo,Xu,this.up):ha.lookAt(Xu,jo,this.up),this.quaternion.setFromRotationMatrix(ha),o&&(ha.extractRotation(o.matrixWorld),zr.setFromRotationMatrix(ha),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(YA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ZA)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n){let a=[];this[t]===n&&a.push(this);for(let o=0,u=this.children.length;o<u;o++){const f=this.children[o].getObjectsByProperty(t,n);f.length>0&&(a=a.concat(f))}return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,WA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,qA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++){const u=n[a];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const o=this.children;for(let u=0,f=o.length;u<f;u++){const d=o[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));o.material=d}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(u(t.animations,m))}}if(n){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),x=f(t.animations),E=f(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=o,a;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}as.DEFAULT_UP=new pn(0,1,0);as.DEFAULT_MATRIX_AUTO_UPDATE=!0;as.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jA extends as{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class QA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=fv();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function fv(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qv}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qv);class KA{constructor(t,n){this.renderer=t,this.camera=n,this.scene=new jA,this.clock=new QA,this.current=null}setScene(t){this.current&&(this.current.onExit(),this.current.dispose?.(),this._clearScene()),this.current=new t({scene:this.scene,camera:this.camera,renderer:this.renderer}),this.current.onEnter()}update(){const t=this.clock.getDelta();this.current?.update(t),this.renderer.render(this.scene,this.camera)}}const $v={VSSceneBase:UA,VSScenesManager:KA};class JA extends $v.VSSceneBase{onEnter(){const t=new NM(16777215,.25);this.scene.add(t);const n=new Wr,a=new RM({color:2434341});this.cube=new Gi(n,a),this.scene.add(this.cube);const o=new LM(16777215,5);this.scene.add(o)}update(t){this.cube.rotation.x+=.01,this.cube.rotation.y+=.01}onExit(){this.scene.background=null}}function $A({container:l}){ly.useEffect(()=>{if(!l){console.error("[sim-temp] Cannot init simulation app – invalid container");return}const t=l.clientWidth,n=l.clientHeight,a=75,o=t/n,u=.1,f=1e3,d=new di(a,o,u,f);d.position.z=5;const m=new DA({antialias:!0});m.setSize(t,n),m.setClearColor(16119285,1);var p=function(){m.setSize(l.offsetWidth,l.offsetHeight),d.aspect=l.offsetWidth/l.offsetHeight,d.updateProjectionMatrix()};window.addEventListener("resize",p),l.appendChild(m.domElement);const g=new $v.VSScenesManager(m,d);g.setScene(JA);var _=function(){g.update()},v=function(){requestAnimationFrame(v),_()};v()},[l])}function t3(l){my.createRoot(l).render(ry.jsx($A,{container:l}))}function e3(l){return l.split(/[^a-zA-Z0-9]+/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}const n3="mount"+e3("sim-temp")+"App";window[n3]=t3;
