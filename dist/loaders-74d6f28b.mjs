import f from"path";import{fileURLToPath as P,pathToFileURL as j}from"url";import{t as M,a as F}from"./index-c4b20163.mjs";import{r as A}from"./resolve-ts-path-a8cb04a4.mjs";import{i as D,s as N,a as U,b as v}from"./source-map-b8c21b85.mjs";import{parseTsconfig as J,getTsconfig as b,createFilesMatcher as x,createPathsMatcher as I}from"get-tsconfig";import _ from"fs";const m=new Map;async function L(t){if(m.has(t))return m.get(t);if(!await _.promises.access(t).then(()=>!0,()=>!1)){m.set(t,void 0);return}const r=await _.promises.readFile(t,"utf8");try{const o=JSON.parse(r);return m.set(t,o),o}catch{throw new Error(`Error parsing: ${t}`)}}async function $(t){let s=new URL("package.json",t);for(;!s.pathname.endsWith("/node_modules/package.json");){const r=P(s),o=await L(r);if(o)return o;const n=s;if(s=new URL("../package.json",s),s.pathname===n.pathname)break}}async function C(t){var s;const r=await $(t);return(s=r==null?void 0:r.type)!=null?s:"commonjs"}const u=process.env.TSX_TSCONFIG_PATH?{path:f.resolve(process.env.TSX_TSCONFIG_PATH),config:J(process.env.TSX_TSCONFIG_PATH)}:b(),W=u&&x(u),T=u&&I(u),E="file://",h=/\.([cm]?ts|[tj]sx)($|\?)/,q=/\.json(?:$|\?)/,G=t=>{const s=f.extname(t);if(s===".json")return"json";if(s===".mjs"||s===".mts")return"module";if(s===".cjs"||s===".cts")return"commonjs"},H=t=>{const s=G(t);if(s)return s;if(h.test(t))return C(t)},k=D(),S=/\/(?:$|\?)/;let g,d=process.send?process.send.bind(process):void 0;const X=async t=>{},K=({port:t})=>(g=t,d=t.postMessage.bind(t),`
	const require = getBuiltin('module').createRequire("${import.meta.url}");
	require('tsx/source-map').installSourceMapSupport(port);
	if (process.send) {
		port.addListener('message', (message) => {
			if (message.type === 'dependency') {
				process.send(message);
			}
		});
	}
	port.unref(); // Allows process to exit without waiting for port to close
	`),l=async(t,s,r)=>{const o=await t(s,r);return!o.format&&o.url.startsWith(E)&&(o.format=await H(o.url)),o},Q=[".js",".json",".ts",".tsx",".jsx"];async function y(t,s,r){const[o,n]=t.split("?");let i;for(const a of Q)try{return await l(r,o+a+(n?`?${n}`:""),s)}catch(e){if(i===void 0&&e instanceof Error){const{message:c}=e;e.message=e.message.replace(`${a}'`,"'"),e.stack=e.stack.replace(c,e.message),i=e}}throw i}async function R(t,s,r){const o=S.test(t),n=o?"index":"/index",[i,a]=t.split("?");try{return await y(i+n+(a?`?${a}`:""),s,r)}catch(e){if(!o)try{return await y(t,s,r)}catch{}const c=e,{message:p}=c;throw c.message=c.message.replace(`${n.replace("/",f.sep)}'`,"'"),c.stack=c.stack.replace(p,c.message),c}}const z=/^\.{1,2}\//,O=async function(t,s,r,o){var n;if(S.test(t))return await R(t,s,r);const i=t.startsWith(E)||z.test(t);if(T&&!i&&!((n=s.parentURL)!=null&&n.includes("/node_modules/"))){const a=T(t);for(const e of a)try{return await O(j(e).toString(),s,r)}catch{}}if(h.test(s.parentURL)){const a=A(t);if(a)for(const e of a)try{return await l(r,e,s)}catch(c){const{code:p}=c;if(p!=="ERR_MODULE_NOT_FOUND"&&p!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw c}}try{return await l(r,t,s)}catch(a){if(a instanceof Error&&!o){const{code:e}=a;if(e==="ERR_UNSUPPORTED_DIR_IMPORT")try{return await R(t,s,r)}catch(c){if(c.code!=="ERR_PACKAGE_IMPORT_NOT_DEFINED")throw c}if(e==="ERR_MODULE_NOT_FOUND")try{return await y(t,s,r)}catch{}}throw a}},w=v?"importAttributes":"importAssertions",B=async function(t,s,r){var o;d&&d({type:"dependency",path:t}),q.test(t)&&(s[w]||(s[w]={}),s[w].type="json");const n=await r(t,s);if(!n.source)return n;const i=t.startsWith("file://")?P(t):t;let a=n.source.toString();if(N&&(a=U(a)),n.format==="json"||h.test(t)){const e=await M(a,i,{tsconfigRaw:(o=W)==null?void 0:o(i)});return{format:"module",source:k(e,t,g)}}if(n.format==="module"){const e=F(i,a);e&&(n.source=k(e,t,g))}return n};export{K as g,X as i,B as l,O as r};
