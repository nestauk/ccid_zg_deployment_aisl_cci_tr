"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{90338:function(e,t,r){r.r(t),r.d(t,{i:function(){return v}}),r(25566),function(e){var t=function(e){var t,r=Object.prototype,o=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch{l=function(e,t,r){return e[t]=r}}function c(e,r,o,n){var i,a=Object.create((r&&r.prototype instanceof m?r:m).prototype),s=new x(n||[]);return a._invoke=(i=p,function(r,n){if(i===u)throw Error("Generator is already running");if(i===h){if("throw"===r)throw n;return L()}for(s.method=r,s.arg=n;;){var a=s.delegate;if(a){var l=function e(r,o){var n=r.iterator[o.method];if(n===t){if(o.delegate=null,"throw"===o.method){if(r.iterator.return&&(o.method="return",o.arg=t,e(r,o),"throw"===o.method))return d;o.method="throw",o.arg=TypeError("The iterator does not provide a 'throw' method")}return d}var i=f(n,r.iterator,o.arg);if("throw"===i.type)return o.method="throw",o.arg=i.arg,o.delegate=null,d;var a=i.arg;return a?a.done?(o[r.resultName]=a.value,o.next=r.nextLoc,"return"!==o.method&&(o.method="next",o.arg=t),o.delegate=null,d):a:(o.method="throw",o.arg=TypeError("iterator result is not an object"),o.delegate=null,d)}(a,s);if(l){if(l===d)continue;return l}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(i===p)throw i=h,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);i=u;var c=f(e,o,s);if("normal"===c.type){if(i=s.done?h:"suspendedYield",c.arg===d)continue;return{value:c.arg,done:s.done}}"throw"===c.type&&(i=h,s.method="throw",s.arg=c.arg)}}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var p="suspendedStart",u="executing",h="completed",d={};function m(){}function g(){}function y(){}var w={};l(w,i,function(){return this});var b=Object.getPrototypeOf,v=b&&b(b(k([])));v&&v!==r&&o.call(v,i)&&(w=v);var F=y.prototype=m.prototype=Object.create(w);function _(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(n,i){function a(){return new t(function(r,a){!function r(n,i,a,s){var l=f(e[n],e,i);if("throw"===l.type)s(l.arg);else{var c=l.arg,p=c.value;return p&&"object"==typeof p&&o.call(p,"__await")?t.resolve(p.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(p).then(function(e){c.value=e,a(c)},function(e){return r("throw",e,a,s)})}}(n,i,r,a)})}return r=r?r.then(a,a):a()}}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function k(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:L}}function L(){return{value:t,done:!0}}return g.prototype=y,l(F,"constructor",y),l(y,"constructor",g),g.displayName=l(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,s,"GeneratorFunction")),e.prototype=Object.create(F),e},e.awrap=function(e){return{__await:e}},_(E.prototype),l(E.prototype,a,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,o,n,i){void 0===i&&(i=Promise);var a=new E(c(t,r,o,n),i);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},_(F),l(F,s,"Generator"),l(F,i,function(){return this}),l(F,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return s.type="throw",s.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else if(c){if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;P(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:k(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=t}catch{"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}({exports:{}});let o={name:"@ffmpeg/ffmpeg",version:"0.11.6",description:"FFmpeg WebAssembly version",main:"src/index.js",types:"src/index.d.ts",directories:{example:"examples"},scripts:{start:"node scripts/server.js","start:worker":"node scripts/worker-server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},browser:{"./src/node/index.js":"./src/browser/index.js"},repository:{type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},keywords:["ffmpeg","WebAssembly","video"],author:"Jerome Wu <jeromewus@gmail.com>",license:"MIT",bugs:{url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},engines:{node:">=12.16.1"},homepage:"https://github.com/ffmpegwasm/ffmpeg.wasm#readme",dependencies:{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},devDependencies:{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}},n=`https://unpkg.com/@ffmpeg/core@${o.devDependencies["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`,i=()=>{};var a={log:(e,t)=>{i({type:e,message:t})}},s={CREATE_FFMPEG_CORE_IS_NOT_DEFINED:e=>`
createFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ${e}. Use another URL when calling createFFmpeg():

const ffmpeg = createFFmpeg({
  corePath: 'http://localhost:3000/ffmpeg-core.js',
});
`};let l=async(e,t)=>{a.log("info",`fetch ${e}`);let r=await (await fetch(e)).arrayBuffer();a.log("info",`${e} file size = ${r.byteLength} bytes`);let o=new Blob([r],{type:t}),n=URL.createObjectURL(o);return a.log("info",`${e} blob URL = ${n}`),n},c=e=>new Promise((t,r)=>{let o=new FileReader;o.onload=()=>{t(o.result)},o.onerror=({target:{error:{code:e}}})=>{r(Error(`File could not be read! Code=${e}`))},o.readAsArrayBuffer(e)}),f=function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];return r.push.apply(r,arguments),new(Function.bind.apply(t,r))}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})}),r}(Object.freeze(Object.defineProperty({__proto__:null,defaultOptions:{corePath:n},fetchFile:async e=>{let t=e;return typeof e>"u"?new Uint8Array:("string"==typeof e?t=/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(e)?atob(e.split(",")[1]).split("").map(e=>e.charCodeAt(0)):await (await fetch(new URL(e,"file:///home/runner/work/ccid_deliberation_tool/ccid_deliberation_tool/deliberation-webapp/node_modules/react-audio-voice-recorder/dist/index-1c988149.js").href)).arrayBuffer():(e instanceof File||e instanceof Blob)&&(t=await c(e)),new Uint8Array(t))},getCreateFFmpegCore:async({corePath:e,workerPath:t,wasmPath:r})=>{if("u">typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope){if("string"!=typeof e)throw Error("corePath should be a string!");let o=new URL(e,"file:///home/runner/work/ccid_deliberation_tool/ccid_deliberation_tool/deliberation-webapp/node_modules/react-audio-voice-recorder/dist/index-1c988149.js").href,n=await l(o,"application/javascript"),i=await l(void 0!==r?r:o.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),c=await l(void 0!==t?t:o.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(e=>{if(globalThis.importScripts(n),typeof createFFmpegCore>"u")throw Error(s.CREATE_FFMPEG_CORE_IS_NOT_DEFINED(o));a.log("info","ffmpeg-core.js script loaded"),e({createFFmpegCore,corePath:n,wasmPath:i,workerPath:c})}):(a.log("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:n,wasmPath:i,workerPath:c}))}if("string"!=typeof e)throw Error("corePath should be a string!");let o=new URL(e,"file:///home/runner/work/ccid_deliberation_tool/ccid_deliberation_tool/deliberation-webapp/node_modules/react-audio-voice-recorder/dist/index-1c988149.js").href,n=await l(o,"application/javascript"),i=await l(void 0!==r?r:o.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),c=await l(void 0!==t?t:o.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(e=>{let t=document.createElement("script"),r=()=>{if(t.removeEventListener("load",r),typeof createFFmpegCore>"u")throw Error(s.CREATE_FFMPEG_CORE_IS_NOT_DEFINED(o));a.log("info","ffmpeg-core.js script loaded"),e({createFFmpegCore,corePath:n,wasmPath:i,workerPath:c})};t.src=n,t.type="text/javascript",t.addEventListener("load",r),document.getElementsByTagName("head")[0].appendChild(t)}):(a.log("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:n,wasmPath:i,workerPath:c}))}},Symbol.toStringTag,{value:"Module"}))),{defaultArgs:p,baseOptions:u}={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}},h=(e,t)=>{let r=e._malloc(t.length*Uint32Array.BYTES_PER_ELEMENT);return t.forEach((t,o)=>{let n=e.lengthBytesUTF8(t)+1,i=e._malloc(n);e.stringToUTF8(t,i,n),e.setValue(r+Uint32Array.BYTES_PER_ELEMENT*o,i,"i32")}),[t.length,r]},{defaultOptions:d,getCreateFFmpegCore:m}=f,{version:g}=o,y=Error("ffmpeg.wasm is not ready, make sure you have completed load()."),{fetchFile:w}=f;var b={createFFmpeg:(e={})=>{let{log:t,logger:r,progress:o,...n}={...u,...d,...e},i=null,a=null,s=null,l=null,c=!1,f=()=>{},w=t,b=o,v=0,F=0,_=!1,E=0,j=e=>{"FFMPEG_END"===e&&null!==s&&(s(),s=null,l=null,c=!1)},P=(e,t)=>{f({type:e,message:t}),w&&console.log(`[${e}] ${t}`)},x=e=>{let[t,r,o]=e.split(":");return 3600*parseFloat(t)+60*parseFloat(r)+parseFloat(o)},k=(e,t)=>{if("string"==typeof e){if(e.startsWith("  Duration")){let r=x(e.split(", ")[0].split(": ")[1]);t({duration:r,ratio:E}),(0===v||v>r)&&(v=r,_=!0)}else if(_&&e.startsWith("    Stream")){let t=e.match(/([\d.]+) fps/);if(t){let e=parseFloat(t[1]);F=v*e}else F=0;_=!1}else if(e.startsWith("frame")||e.startsWith("size")){let r=x(e.split("time=")[1].split(" ")[0]),o=e.match(/frame=\s*(\d+)/);t({ratio:E=F&&o?Math.min(parseFloat(o[1])/F,1):r/v,time:r})}else e.startsWith("video:")&&(t({ratio:1}),v=0)}},L=({type:e,message:t})=>{P(e,t),k(t,b),j(t)},O=async()=>{if(P("info","load ffmpeg-core"),null===i){P("info","loading ffmpeg-core");let{createFFmpegCore:e,corePath:t,workerPath:r,wasmPath:o}=await m(n);a=(i=await e({mainScriptUrlOrBlob:t,printErr:e=>L({type:"fferr",message:e}),print:e=>L({type:"ffout",message:e}),locateFile:(e,t)=>{if("u">typeof window||"u">typeof WorkerGlobalScope){if("u">typeof o&&e.endsWith("ffmpeg-core.wasm"))return o;if("u">typeof r&&e.endsWith("ffmpeg-core.worker.js"))return r}return t+e}})).cwrap(n.mainName||"proxy_main","number",["number","number"]),P("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")};return P("info",`use ffmpeg.wasm v${g}`),{setProgress:e=>{b=e},setLogger:e=>{f=e},setLogging:e=>{w=e},load:O,isLoaded:()=>null!==i,run:(...e)=>{if(P("info",`run ffmpeg command: ${e.join(" ")}`),null===i)throw y;if(c)throw Error("ffmpeg.wasm can only run one command at a time");return c=!0,new Promise((t,r)=>{let o=[...p,...e].filter(e=>0!==e.length);s=t,l=r,a(...h(i,o))})},exit:()=>{if(null===i)throw y;l&&l("ffmpeg has exited"),c=!1;try{i.exit(1)}catch(e){P(e.message),l&&l(e)}finally{i=null,a=null,s=null,l=null}},FS:(e,...t)=>{if(P("info",`run FS.${e} ${t.map(e=>"string"==typeof e?e:`<${e.length} bytes binary file>`).join(" ")}`),null===i)throw y;{let r=null;try{r=i.FS[e](...t)}catch{throw Error("readdir"===e?`ffmpeg.FS('readdir', '${t[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:"readFile"===e?`ffmpeg.FS('readFile', '${t[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return r}}}},fetchFile:w};let v=function(e,t){for(var r=0;r<t.length;r++){let o=t[r];if("string"!=typeof o&&!Array.isArray(o)){for(let t in o)if("default"!==t&&!(t in e)){let r=Object.getOwnPropertyDescriptor(o,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>o[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b},[b])}}]);