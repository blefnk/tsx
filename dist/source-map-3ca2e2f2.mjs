import M from"source-map-support";const n=process.versions.node.split(".").map(Number),p=e=>n[0]-e[0]||n[1]-e[1]||n[2]-e[2],u=p([20,0,0])>=0,S=p([20,6,0])>=0,l=p([21,0,0])>=0,f="sourceMapsEnabled"in process&&process.sourceMapsEnabled===!1,i=`
//# sourceMappingURL=`,d=e=>{const o=e.indexOf(i);return o!==-1?e.slice(0,o):e},b=`${i}data:application/json;base64,`,m=e=>{if("setSourceMapsEnabled"in process&&typeof Error.prepareStackTrace!="function")return process.setSourceMapsEnabled(!0),({code:r,map:s})=>r+b+Buffer.from(JSON.stringify(s),"utf8").toString("base64");const t=new Map;return M.install({environment:"node",retrieveSourceMap(r){const s=t.get(r);return s?{url:r,map:s}:null}}),u&&e&&e.addListener("message",({filePath:r,map:s})=>t.set(r,s)),({code:r,map:s},a,c)=>(u&&c?c.postMessage({filePath:a,map:s}):t.set(a,s),r)};export{d as a,l as b,S as c,m as i,f as s};
