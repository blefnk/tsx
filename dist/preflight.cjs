"use strict";var o=require("./pkgroll_create-require-ea1d6379.cjs"),l=require("os");if(require("./suppress-warnings.cjs"),require("module"),o.require("./cjs/index.cjs"),process.send){let t=function(e){process.send({type:"kill",signal:e}),process.listenerCount(e)===0&&process.exit(128+l.constants.signals[e])};const r=["SIGINT","SIGTERM"];for(const e of r)process.on(e,t);const{listenerCount:n}=process;process.listenerCount=function(e){let s=Reflect.apply(n,this,arguments);return r.includes(e)&&(s-=1),s};const{listeners:i}=process;process.listeners=function(e){const s=Reflect.apply(i,this,arguments);return r.includes(e)?s.filter(c=>c!==t):s}}
