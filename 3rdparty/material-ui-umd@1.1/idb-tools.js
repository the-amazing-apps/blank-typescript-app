var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){if(a==Array.prototype||a==Object.prototype)return a;a[b]=e.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var e=a[b];if(e&&e.Math==Math)return e}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var e=$jscomp.propertyToPolyfillSymbol[b];if(null==e)return a[b];e=a[e];return void 0!==e?e:a[b]};
$jscomp.polyfill=function(a,b,e,g){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,e,g):$jscomp.polyfillUnisolated(a,b,e,g))};$jscomp.polyfillUnisolated=function(a,b,e,g){e=$jscomp.global;a=a.split(".");for(g=0;g<a.length-1;g++){var k=a[g];if(!(k in e))return;e=e[k]}a=a[a.length-1];g=e[a];b=b(g);b!=g&&null!=b&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,e,g){var k=a.split(".");a=1===k.length;g=k[0];g=!a&&g in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var p=0;p<k.length-1;p++){var f=k[p];if(!(f in g))return;g=g[f]}k=k[k.length-1];e=$jscomp.IS_SYMBOL_NATIVE&&"es6"===e?g[k]:null;b=b(e);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,k,{configurable:!0,writable:!0,value:b}):b!==e&&($jscomp.propertyToPolyfillSymbol[k]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(k):$jscomp.POLYFILL_PREFIX+k,k=
$jscomp.propertyToPolyfillSymbol[k],$jscomp.defineProperty(g,k,{configurable:!0,writable:!0,value:b})))};$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(a){if(a)return a;var b=function(k,p){this.$jscomp$symbol$id_=k;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:p})};b.prototype.toString=function(){return this.$jscomp$symbol$id_};var e=0,g=function(k){if(this instanceof g)throw new TypeError("Symbol is not a constructor");return new b("jscomp_symbol_"+(k||"")+"_"+e++,k)};return g},"es6","es3");
$jscomp.polyfill("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),e=0;e<b.length;e++){var g=$jscomp.global[b[e]];"function"===typeof g&&"function"!=typeof g.prototype[a]&&$jscomp.defineProperty(g.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return a},"es6",
"es3");$jscomp.polyfill("Symbol.asyncIterator",function(a){return a?a:Symbol("Symbol.asyncIterator")},"es9","es3");$jscomp.iteratorPrototype=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};$jscomp.arrayFromIterator=function(a){for(var b,e=[];!(b=a.next()).done;)e.push(b.value);return e};
$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(e){}return!1};$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;
$jscomp.generator={};$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};
$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};
$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype.return=function(a){this.abruptCompletion_={return:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};
$jscomp.generator.Context.prototype.yieldAll=function(a,b){a=$jscomp.makeIterator(a);var e=a.next();$jscomp.generator.ensureIteratorResultIsObject_(e);if(e.done)this.yieldResult=e.value,this.nextAddress=b;else return this.yieldAllIterator_=a,this.yield(e.value,b)};$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,e){e?this.finallyContexts_[e]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){b=this.finallyContexts_.splice(b||0)[0];if(b=this.abruptCompletion_=this.abruptCompletion_||b){if(b.isException)return this.jumpToErrorHandler_();void 0!=b.jumpTo&&this.finallyAddress_<b.jumpTo?(this.nextAddress=b.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(e){return{value:e,done:!0}},a,this.context_.return);this.context_.return(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,e){try{var g=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(g);if(!g.done)return this.context_.stop_(),g;var k=g.value}catch(p){return this.context_.yieldAllIterator_=null,this.context_.throw_(p),this.nextStep_()}this.context_.yieldAllIterator_=null;e.call(this.context_,k);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a.return,done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this.throw=function(b){return a.throw_(b)};this.return=function(b){return a.return_(b)};this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){b=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&a.prototype&&$jscomp.setPrototypeOf(b,a.prototype);return b};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(g){return a.next(g)}function e(g){return a.throw(g)}return new Promise(function(g,k){function p(f){f.done?g(f.value):Promise.resolve(f.value).then(b,e).then(p,k)}p(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
$jscomp.makeAsyncIterator=function(a){var b=a[Symbol.asyncIterator];return void 0!==b?b.call(a):new $jscomp.AsyncIteratorFromSyncWrapper($jscomp.makeIterator(a))};$jscomp.AsyncIteratorFromSyncWrapper=function(a){this[Symbol.asyncIterator]=function(){return this};this[Symbol.iterator]=function(){return a};this.next=function(b){return Promise.resolve(a.next(b))};void 0!==a["throw"]&&(this["throw"]=function(b){return Promise.resolve(a["throw"](b))});void 0!==a["return"]&&(this["return"]=function(b){return Promise.resolve(a["return"](b))})};
$jscomp.AsyncGeneratorWrapper$ActionEnum={YIELD_VALUE:0,YIELD_STAR:1,AWAIT_VALUE:2};$jscomp.AsyncGeneratorWrapper$ActionRecord=function(a,b){this.action=a;this.value=b};$jscomp.AsyncGeneratorWrapper$GeneratorMethod={NEXT:"next",THROW:"throw",RETURN:"return"};$jscomp.AsyncGeneratorWrapper$ExecutionFrame_=function(a,b,e,g){this.method=a;this.param=b;this.resolve=e;this.reject=g};$jscomp.AsyncGeneratorWrapper$ExecutionNode_=function(a,b){this.frame=a;this.next=b};
$jscomp.AsyncGeneratorWrapper$ExecutionQueue_=function(){this.tail_=this.head_=null};$jscomp.AsyncGeneratorWrapper$ExecutionQueue_.prototype.isEmpty=function(){return null===this.head_};$jscomp.AsyncGeneratorWrapper$ExecutionQueue_.prototype.first=function(){if(this.head_)return this.head_.frame;throw Error("no frames in executionQueue");};$jscomp.AsyncGeneratorWrapper$ExecutionQueue_.prototype.drop=function(){this.head_&&(this.head_=this.head_.next,this.head_||(this.tail_=null))};
$jscomp.AsyncGeneratorWrapper$ExecutionQueue_.prototype.enqueue=function(a){a=new $jscomp.AsyncGeneratorWrapper$ExecutionNode_(a,null);this.tail_?this.tail_.next=a:this.head_=a;this.tail_=a};
$jscomp.AsyncGeneratorWrapper=function(a){this.generator_=a;this.delegate_=null;this.executionQueue_=new $jscomp.AsyncGeneratorWrapper$ExecutionQueue_;this[Symbol.asyncIterator]=function(){return this};var b=this;this.boundHandleDelegateResult_=function(e){b.handleDelegateResult_(e)};this.boundHandleDelegateError_=function(e){b.handleDelegateError_(e)};this.boundRejectAndClose_=function(e){b.rejectAndClose_(e)}};
$jscomp.AsyncGeneratorWrapper.prototype.enqueueMethod_=function(a,b){var e=this;return new Promise(function(g,k){var p=e.executionQueue_.isEmpty();e.executionQueue_.enqueue(new $jscomp.AsyncGeneratorWrapper$ExecutionFrame_(a,b,g,k));p&&e.runFrame_()})};$jscomp.AsyncGeneratorWrapper.prototype.next=function(a){return this.enqueueMethod_($jscomp.AsyncGeneratorWrapper$GeneratorMethod.NEXT,a)};
$jscomp.AsyncGeneratorWrapper.prototype.return=function(a){return this.enqueueMethod_($jscomp.AsyncGeneratorWrapper$GeneratorMethod.RETURN,new $jscomp.AsyncGeneratorWrapper$ActionRecord($jscomp.AsyncGeneratorWrapper$ActionEnum.YIELD_VALUE,a))};$jscomp.AsyncGeneratorWrapper.prototype.throw=function(a){return this.enqueueMethod_($jscomp.AsyncGeneratorWrapper$GeneratorMethod.THROW,a)};
$jscomp.AsyncGeneratorWrapper.prototype.runFrame_=function(){if(!this.executionQueue_.isEmpty())try{this.delegate_?this.runDelegateFrame_():this.runGeneratorFrame_()}catch(a){this.rejectAndClose_(a)}};
$jscomp.AsyncGeneratorWrapper.prototype.runGeneratorFrame_=function(){var a=this,b=this.executionQueue_.first();try{var e=this.generator_[b.method](b.param);if(e.value instanceof $jscomp.AsyncGeneratorWrapper$ActionRecord)switch(e.value.action){case $jscomp.AsyncGeneratorWrapper$ActionEnum.YIELD_VALUE:Promise.resolve(e.value.value).then(function(g){b.resolve({value:g,done:e.done});a.executionQueue_.drop();a.runFrame_()},function(g){b.reject(g);a.executionQueue_.drop();a.runFrame_()}).catch(this.boundRejectAndClose_);
break;case $jscomp.AsyncGeneratorWrapper$ActionEnum.YIELD_STAR:a.delegate_=$jscomp.makeAsyncIterator(e.value.value);b.method=$jscomp.AsyncGeneratorWrapper$GeneratorMethod.NEXT;b.param=void 0;a.runFrame_();break;case $jscomp.AsyncGeneratorWrapper$ActionEnum.AWAIT_VALUE:Promise.resolve(e.value.value).then(function(g){b.method=$jscomp.AsyncGeneratorWrapper$GeneratorMethod.NEXT;b.param=g;a.runFrame_()},function(g){b.method=$jscomp.AsyncGeneratorWrapper$GeneratorMethod.THROW;b.param=g;a.runFrame_()}).catch(this.boundRejectAndClose_);
break;default:throw Error("Unrecognized AsyncGeneratorWrapper$ActionEnum");}else b.resolve(e),a.executionQueue_.drop(),a.runFrame_()}catch(g){b.reject(g),a.executionQueue_.drop(),a.runFrame_()}};
$jscomp.AsyncGeneratorWrapper.prototype.runDelegateFrame_=function(){if(!this.delegate_)throw Error("no delegate to perform execution");var a=this.executionQueue_.first();if(a.method in this.delegate_)try{this.delegate_[a.method](a.param).then(this.boundHandleDelegateResult_,this.boundHandleDelegateError_).catch(this.boundRejectAndClose_)}catch(b){this.handleDelegateError_(b)}else this.delegate_=null,this.runFrame_()};
$jscomp.AsyncGeneratorWrapper.prototype.handleDelegateResult_=function(a){var b=this.executionQueue_.first();!0===a.done?(this.delegate_=null,b.method=$jscomp.AsyncGeneratorWrapper$GeneratorMethod.NEXT,b.param=a.value):(b.resolve({value:a.value,done:!1}),this.executionQueue_.drop());this.runFrame_()};
$jscomp.AsyncGeneratorWrapper.prototype.handleDelegateError_=function(a){var b=this.executionQueue_.first();this.delegate_=null;b.method=$jscomp.AsyncGeneratorWrapper$GeneratorMethod.THROW;b.param=a;this.runFrame_()};
$jscomp.AsyncGeneratorWrapper.prototype.rejectAndClose_=function(a){this.executionQueue_.isEmpty()||(this.executionQueue_.first().reject(a),this.executionQueue_.drop());this.delegate_&&"return"in this.delegate_&&(this.delegate_["return"](void 0),this.delegate_=null);this.generator_["return"](void 0);this.runFrame_()};
$jscomp.polyfill("Promise",function(a){function b(){this.batch_=null}function e(f){return f instanceof k?f:new k(function(m,c){m(f)})}if(a&&(!($jscomp.FORCE_POLYFILL_PROMISE||$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION&&"undefined"===typeof $jscomp.global.PromiseRejectionEvent)||!$jscomp.global.Promise||-1===$jscomp.global.Promise.toString().indexOf("[native code]")))return a;b.prototype.asyncExecute=function(f){if(null==this.batch_){this.batch_=[];var m=this;this.asyncExecuteFunction(function(){m.executeBatch_()})}this.batch_.push(f)};
var g=$jscomp.global.setTimeout;b.prototype.asyncExecuteFunction=function(f){g(f,0)};b.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var f=this.batch_;this.batch_=[];for(var m=0;m<f.length;++m){var c=f[m];f[m]=null;try{c()}catch(d){this.asyncThrow_(d)}}}this.batch_=null};b.prototype.asyncThrow_=function(f){this.asyncExecuteFunction(function(){throw f;})};var k=function(f){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];this.isRejectionHandled_=!1;var m=this.createResolveAndReject_();
try{f(m.resolve,m.reject)}catch(c){m.reject(c)}};k.prototype.createResolveAndReject_=function(){function f(d){return function(h){c||(c=!0,d.call(m,h))}}var m=this,c=!1;return{resolve:f(this.resolveTo_),reject:f(this.reject_)}};k.prototype.resolveTo_=function(f){if(f===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof k)this.settleSameAsPromise_(f);else{a:switch(typeof f){case "object":var m=null!=f;break a;case "function":m=!0;break a;default:m=!1}m?this.resolveToNonPromiseObj_(f):
this.fulfill_(f)}};k.prototype.resolveToNonPromiseObj_=function(f){var m=void 0;try{m=f.then}catch(c){this.reject_(c);return}"function"==typeof m?this.settleSameAsThenable_(m,f):this.fulfill_(f)};k.prototype.reject_=function(f){this.settle_(2,f)};k.prototype.fulfill_=function(f){this.settle_(1,f)};k.prototype.settle_=function(f,m){if(0!=this.state_)throw Error("Cannot settle("+f+", "+m+"): Promise already settled in state"+this.state_);this.state_=f;this.result_=m;2===this.state_&&this.scheduleUnhandledRejectionCheck_();
this.executeOnSettledCallbacks_()};k.prototype.scheduleUnhandledRejectionCheck_=function(){var f=this;g(function(){if(f.notifyUnhandledRejection_()){var m=$jscomp.global.console;"undefined"!==typeof m&&m.error(f.result_)}},1)};k.prototype.notifyUnhandledRejection_=function(){if(this.isRejectionHandled_)return!1;var f=$jscomp.global.CustomEvent,m=$jscomp.global.Event,c=$jscomp.global.dispatchEvent;if("undefined"===typeof c)return!0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):
"function"===typeof m?f=new m("unhandledrejection",{cancelable:!0}):(f=$jscomp.global.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.result_;return c(f)};k.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var f=0;f<this.onSettledCallbacks_.length;++f)p.asyncExecute(this.onSettledCallbacks_[f]);this.onSettledCallbacks_=null}};var p=new b;k.prototype.settleSameAsPromise_=function(f){var m=this.createResolveAndReject_();
f.callWhenSettled_(m.resolve,m.reject)};k.prototype.settleSameAsThenable_=function(f,m){var c=this.createResolveAndReject_();try{f.call(m,c.resolve,c.reject)}catch(d){c.reject(d)}};k.prototype.then=function(f,m){function c(l,q){return"function"==typeof l?function(r){try{d(l(r))}catch(t){h(t)}}:q}var d,h,n=new k(function(l,q){d=l;h=q});this.callWhenSettled_(c(f,d),c(m,h));return n};k.prototype.catch=function(f){return this.then(void 0,f)};k.prototype.callWhenSettled_=function(f,m){function c(){switch(d.state_){case 1:f(d.result_);
break;case 2:m(d.result_);break;default:throw Error("Unexpected state: "+d.state_);}}var d=this;null==this.onSettledCallbacks_?p.asyncExecute(c):this.onSettledCallbacks_.push(c);this.isRejectionHandled_=!0};k.resolve=e;k.reject=function(f){return new k(function(m,c){c(f)})};k.race=function(f){return new k(function(m,c){for(var d=$jscomp.makeIterator(f),h=d.next();!h.done;h=d.next())e(h.value).callWhenSettled_(m,c)})};k.all=function(f){var m=$jscomp.makeIterator(f),c=m.next();return c.done?e([]):new k(function(d,
h){function n(r){return function(t){l[r]=t;q--;0==q&&d(l)}}var l=[],q=0;do l.push(void 0),q++,e(c.value).callWhenSettled_(n(l.length-1),h),c=m.next();while(!c.done)})};return k},"es6","es3");$jscomp.checkEs6ConformanceViaProxy=function(){try{var a={},b=Object.create(new $jscomp.global.Proxy(a,{get:function(e,g,k){return e==a&&"q"==g&&k==b}}));return!0===b.q}catch(e){return!1}};$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS=!1;$jscomp.ES6_CONFORMANCE=$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS&&$jscomp.checkEs6ConformanceViaProxy();
$jscomp.owns=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
$jscomp.polyfill("WeakMap",function(a){function b(){if(!a||!Object.seal)return!1;try{var d=Object.seal({}),h=Object.seal({}),n=new a([[d,2],[h,3]]);if(2!=n.get(d)||3!=n.get(h))return!1;n.delete(d);n.set(h,4);return!n.has(d)&&4==n.get(h)}catch(l){return!1}}function e(){}function g(d){var h=typeof d;return"object"===h&&null!==d||"function"===h}function k(d){if(!$jscomp.owns(d,f)){var h=new e;$jscomp.defineProperty(d,f,{value:h})}}function p(d){if(!$jscomp.ISOLATE_POLYFILLS){var h=Object[d];h&&(Object[d]=
function(n){if(n instanceof e)return n;Object.isExtensible(n)&&k(n);return h(n)})}}if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(a&&$jscomp.ES6_CONFORMANCE)return a}else if(b())return a;var f="$jscomp_hidden_"+Math.random();p("freeze");p("preventExtensions");p("seal");var m=0,c=function(d){this.id_=(m+=Math.random()+1).toString();if(d){d=$jscomp.makeIterator(d);for(var h;!(h=d.next()).done;)h=h.value,this.set(h[0],h[1])}};c.prototype.set=function(d,h){if(!g(d))throw Error("Invalid WeakMap key");
k(d);if(!$jscomp.owns(d,f))throw Error("WeakMap key fail: "+d);d[f][this.id_]=h;return this};c.prototype.get=function(d){return g(d)&&$jscomp.owns(d,f)?d[f][this.id_]:void 0};c.prototype.has=function(d){return g(d)&&$jscomp.owns(d,f)&&$jscomp.owns(d[f],this.id_)};c.prototype.delete=function(d){return g(d)&&$jscomp.owns(d,f)&&$jscomp.owns(d[f],this.id_)?delete d[f][this.id_]:!1};return c},"es6","es3");
$jscomp.polyfill("Object.is",function(a){return a?a:function(b,e){return b===e?0!==b||1/b===1/e:b!==b&&e!==e}},"es6","es3");$jscomp.polyfill("Array.prototype.includes",function(a){return a?a:function(b,e){var g=this;g instanceof String&&(g=String(g));var k=g.length;e=e||0;for(0>e&&(e=Math.max(e+k,0));e<k;e++){var p=g[e];if(p===b||Object.is(p,b))return!0}return!1}},"es7","es3");
$jscomp.checkStringArgs=function(a,b,e){if(null==a)throw new TypeError("The 'this' value for String.prototype."+e+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+e+" must not be a regular expression");return a+""};$jscomp.polyfill("String.prototype.includes",function(a){return a?a:function(b,e){return-1!==$jscomp.checkStringArgs(this,b,"includes").indexOf(b,e||0)}},"es6","es3");$jscomp.MapEntry=function(){};
$jscomp.polyfill("Map",function(a){function b(){if($jscomp.ASSUME_NO_NATIVE_MAP||!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a($jscomp.makeIterator([[c,"s"]]));if("s"!=d.get(c)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return!1;var h=d.entries(),n=h.next();if(n.done||n.value[0]!=c||"s"!=n.value[1])return!1;n=h.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!h.next().done?!1:!0}catch(l){return!1}}
if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(a&&$jscomp.ES6_CONFORMANCE)return a}else if(b())return a;var e=new WeakMap,g=function(c){this.data_={};this.head_=f();this.size=0;if(c){c=$jscomp.makeIterator(c);for(var d;!(d=c.next()).done;)d=d.value,this.set(d[0],d[1])}};g.prototype.set=function(c,d){c=0===c?0:c;var h=k(this,c);h.list||(h.list=this.data_[h.id]=[]);h.entry?h.entry.value=d:(h.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:c,value:d},h.list.push(h.entry),
this.head_.previous.next=h.entry,this.head_.previous=h.entry,this.size++);return this};g.prototype.delete=function(c){c=k(this,c);return c.entry&&c.list?(c.list.splice(c.index,1),c.list.length||delete this.data_[c.id],c.entry.previous.next=c.entry.next,c.entry.next.previous=c.entry.previous,c.entry.head=null,this.size--,!0):!1};g.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=f();this.size=0};g.prototype.has=function(c){return!!k(this,c).entry};g.prototype.get=function(c){return(c=
k(this,c).entry)&&c.value};g.prototype.entries=function(){return p(this,function(c){return[c.key,c.value]})};g.prototype.keys=function(){return p(this,function(c){return c.key})};g.prototype.values=function(){return p(this,function(c){return c.value})};g.prototype.forEach=function(c,d){for(var h=this.entries(),n;!(n=h.next()).done;)n=n.value,c.call(d,n[1],n[0],this)};g.prototype[Symbol.iterator]=g.prototype.entries;var k=function(c,d){var h=d&&typeof d;"object"==h||"function"==h?e.has(d)?h=e.get(d):
(h=""+ ++m,e.set(d,h)):h="p_"+d;var n=c.data_[h];if(n&&$jscomp.owns(c.data_,h))for(c=0;c<n.length;c++){var l=n[c];if(d!==d&&l.key!==l.key||d===l.key)return{id:h,list:n,index:c,entry:l}}return{id:h,list:n,index:-1,entry:void 0}},p=function(c,d){var h=c.head_;return $jscomp.iteratorPrototype(function(){if(h){for(;h.head!=c.head_;)h=h.previous;for(;h.next!=h.head;)return h=h.next,{done:!1,value:d(h)};h=null}return{done:!0,value:void 0}})},f=function(){var c={};return c.previous=c.next=c.head=c},m=0;
return g},"es6","es3");var idb;(function(a){a.instanceOfAny=function(b,e){return e.some(function(g){return b instanceof g})}})(idb||(idb={}));
(function(a){a.openDB=function(b,e,g){g=void 0===g?{}:g;var k=g.blocked,p=g.upgrade,f=g.blocking,m=g.terminated,c=indexedDB.open(b,e);b=a.wrap(c);p&&c.addEventListener("upgradeneeded",function(d){p(a.wrap(c.result),d.oldVersion,d.newVersion,a.wrap(c.transaction))});k&&c.addEventListener("blocked",function(){return k()});b.then(function(d){m&&d.addEventListener("close",function(){return m()});f&&d.addEventListener("versionchange",function(){return f()})}).catch(function(){return null});return b};a.deleteDB=
function(b,e){var g=(void 0===e?{}:e).blocked;b=indexedDB.deleteDatabase(b);g&&b.addEventListener("blocked",function(){return g()});return a.wrap(b).then(function(){})}})(idb||(idb={}));
(function(a){function b(l){var q=new Promise(function(r,t){var u=function(){l.removeEventListener("success",w);l.removeEventListener("error",v)},w=function(){r(k(l.result));u()},v=function(){t(l.error);u()};l.addEventListener("success",w);l.addEventListener("error",v)});q.then(function(r){r instanceof IDBCursor&&m.set(r,l)}).catch(function(){return null});a.reverseTransformCache.set(q,l);return q}function e(l){if(!c.has(l)){var q=new Promise(function(r,t){var u=function(){l.removeEventListener("complete",
w);l.removeEventListener("error",v);l.removeEventListener("abort",v)},w=function(){r();u()},v=function(){t(l.error||new DOMException("AbortError","AbortError"));u()};l.addEventListener("complete",w);l.addEventListener("error",v);l.addEventListener("abort",v)});c.set(l,q)}}function g(l){return l!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(f||(f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(l)?function(q){for(var r=
[],t=0;t<arguments.length;++t)r[t-0]=arguments[t];l.apply(a.unwrap(this),r);return k(m.get(this))}:function(q){for(var r=[],t=0;t<arguments.length;++t)r[t-0]=arguments[t];return k(l.apply(a.unwrap(this),r))}:function(q,r){for(var t=[],u=1;u<arguments.length;++u)t[u-1]=arguments[u];t=l.call.apply(l,[a.unwrap(this),q].concat($jscomp.arrayFromIterable(t)));d.set(t,q.sort?q.sort():[q]);return k(t)}}function k(l){if(l instanceof IDBRequest)return b(l);if(h.has(l))return h.get(l);if("function"===typeof l)var q=
g(l);else l instanceof IDBTransaction&&e(l),q=a.instanceOfAny(l,p||(p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(l,n):l;q!==l&&(h.set(l,q),a.reverseTransformCache.set(q,l));return q}var p,f,m=new WeakMap,c=new WeakMap,d=new WeakMap,h=new WeakMap;a.reverseTransformCache=new WeakMap;var n={get:function(l,q,r){if(l instanceof IDBTransaction){if("done"===q)return c.get(l);if("objectStoreNames"===q)return l.objectStoreNames||d.get(l);if("store"===q)return r.objectStoreNames[1]?
void 0:r.objectStore(r.objectStoreNames[0])}return k(l[q])},set:function(l,q,r){l[q]=r;return!0},has:function(l,q){return l instanceof IDBTransaction&&("done"===q||"store"===q)?!0:q in l}};a.replaceTraps=function(l){n=l(n)};a.wrap=k;a.unwrap=function(l){return a.reverseTransformCache.get(l)}})(idb||(idb={}));
(function(a){function b(p,f){if(p instanceof IDBDatabase&&!(f in p)&&"string"===typeof f){if(k.get(f))return k.get(f);var m=f.replace(/FromIndex$/,""),c=f!==m,d=g.includes(m);if(m in(c?IDBIndex:IDBObjectStore).prototype&&(d||e.includes(m)))return p=function(h,n){for(var l=[],q=1;q<arguments.length;++q)l[q-1]=arguments[q];var r=this,t,u,w;return $jscomp.asyncExecutePromiseGeneratorProgram(function(v){return 1==v.nextAddress?(t=r.transaction(h,d?"readwrite":"readonly"),u=t.store,c&&(u=u.index(l.shift())),
v.yield(u[m].apply(u,$jscomp.arrayFromIterable(l)),2)):3!=v.nextAddress?(w=v.yieldResult,d?v.yield(t.done,3):v.jumpTo(3)):v.return(w)})},k.set(f,p),p}}var e=["get","getKey","getAll","getAllKeys","count"],g=["put","add","delete","clear"],k=new Map;a.replaceTraps(function(p){return Object.assign({},p,{get:function(f,m,c){return b(f,m)||p.get(f,m,c)},has:function(f,m){return!!b(f,m)||p.has(f,m)}})})})(idb||(idb={}));
(function(a){function b(c){for(var d=[],h=0;h<arguments.length;++h)d[h-0]=arguments[h];var n=this;return new $jscomp.AsyncGeneratorWrapper(function q(){var r,t;return $jscomp.generator.createGenerator(q,function(u){switch(u.nextAddress){case 1:r=n;if(r instanceof IDBCursor){u.jumpTo(2);break}return u.yield(new $jscomp.AsyncGeneratorWrapper$ActionRecord($jscomp.AsyncGeneratorWrapper$ActionEnum.AWAIT_VALUE,r.openCursor.apply(r,$jscomp.arrayFromIterable(d))),3);case 3:r=u.yieldResult;case 2:if(!r)return u.return();
t=new Proxy(r,m);f.set(t,r);a.reverseTransformCache.set(t,a.unwrap(r));case 4:if(!r){u.jumpTo(0);break}return u.yield(new $jscomp.AsyncGeneratorWrapper$ActionRecord($jscomp.AsyncGeneratorWrapper$ActionEnum.YIELD_VALUE,t),6);case 6:return u.yield(new $jscomp.AsyncGeneratorWrapper$ActionRecord($jscomp.AsyncGeneratorWrapper$ActionEnum.AWAIT_VALUE,p.get(t)||r.continue()),7);case 7:r=u.yieldResult,p.delete(t),u.jumpTo(4)}})}())}function e(c,d){return d===Symbol.asyncIterator&&a.instanceOfAny(c,[IDBIndex,
IDBObjectStore,IDBCursor])||"iterate"===d&&a.instanceOfAny(c,[IDBIndex,IDBObjectStore])}var g=["continue","continuePrimaryKey","advance"],k={},p=new WeakMap,f=new WeakMap,m={get:function(c,d){if(!g.includes(d))return c[d];(c=k[d])||(c=k[d]=function(h){for(var n=[],l=0;l<arguments.length;++l)n[l-0]=arguments[l];p.set(this,f.get(this)[d].apply(f.get(this),$jscomp.arrayFromIterable(n)))});return c}};a.replaceTraps(function(c){return Object.assign({},c,{get:function(d,h,n){return e(d,h)?b:c.get(d,h,n)},
has:function(d,h){return e(d,h)||c.has(d,h)}})})})(idb||(idb={}));
(function(a){var b=React,e=b.createContext,g=b.useContext,k=b.useEffect,p=b.useState,f=e(null);a.DatabaseProvider=function(m){var c=Object.assign({},m),d=void 0===m.name?"idb-tools":m.name,h=void 0===m.version?1:m.version;m=void 0===m.children?null:m.children;var n=(delete c.name,delete c.version,delete c.children,c);c=$jscomp.makeIterator(p(null));var l=c.next().value,q=c.next().value;k(function(){(function(){var r;return $jscomp.asyncExecutePromiseGeneratorProgram(function(t){if(1==t.nextAddress)return t.yield(a.openDB(d,
h,n),2);r=t.yieldResult;q(r);t.jumpToEnd()})})()},[]);return React.createElement(f.Provider,{value:function(){return l}},l&&m)};a.useDB=function(){return g(f)()}})(idb||(idb={}));
