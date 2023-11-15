"use strict";var b=require("path"),m=require("url"),E=require("./index-ff7a6932.cjs"),D=require("./resolve-ts-path-43f50656.cjs"),p=require("./source-map-eb9a4a27.cjs"),f=require("get-tsconfig"),F=require("fs");function v(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var h=v(b),R=v(F);const d=new Map;async function q(t){if(d.has(t))return d.get(t);if(!await R.default.promises.access(t).then(()=>!0,()=>!1)){d.set(t,void 0);return}const r=await R.default.promises.readFile(t,"utf8");try{const a=JSON.parse(r);return d.set(t,a),a}catch{throw new Error(`Error parsing: ${t}`)}}async function A(t){let e=new URL("package.json",t);for(;!e.pathname.endsWith("/node_modules/package.json");){const r=m.fileURLToPath(e),a=await q(r);if(a)return a;const n=e;if(e=new URL("../package.json",e),e.pathname===n.pathname)break}}async function L(t){var e;const r=await A(t);return(e=r==null?void 0:r.type)!=null?e:"commonjs"}const l=process.env.TSX_TSCONFIG_PATH?{path:h.default.resolve(process.env.TSX_TSCONFIG_PATH),config:f.parseTsconfig(process.env.TSX_TSCONFIG_PATH)}:f.getTsconfig(),N=l&&f.createFilesMatcher(l),S=l&&f.createPathsMatcher(l),k="file://",g=/\.([cm]?ts|[tj]sx)($|\?)/,J=/\.json(?:$|\?)/,I=t=>{const e=h.default.extname(t);if(e===".json")return"json";if(e===".mjs"||e===".mts")return"module";if(e===".cjs"||e===".cts")return"commonjs"},x=t=>{const e=I(t);if(e)return e;if(g.test(t))return L(t)},j=p.installSourceMapSupport(),O=/\/(?:$|\?)/;let y,_=process.send?process.send.bind(process):void 0;const C=async t=>{},W=({port:t})=>(y=t,_=t.postMessage.bind(t),`
	const require = getBuiltin('module').createRequire("${typeof document>"u"?new(require("url")).URL("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("loaders-66db6d2d.cjs",document.baseURI).href}");
	require('tsx/source-map').installSourceMapSupport(port);
	if (process.send) {
		port.addListener('message', (message) => {
			if (message.type === 'dependency') {
				process.send(message);
			}
		});
	}
	port.unref(); // Allows process to exit without waiting for port to close
	`),w=async(t,e,r)=>{const a=await t(e,r);return!a.format&&a.url.startsWith(k)&&(a.format=await x(a.url)),a},G=[".js",".json",".ts",".tsx",".jsx"];async function P(t,e,r){const[a,n]=t.split("?");let i;for(const o of G)try{return await w(r,a+o+(n?`?${n}`:""),e)}catch(s){if(i===void 0&&s instanceof Error){const{message:c}=s;s.message=s.message.replace(`${o}'`,"'"),s.stack=s.stack.replace(c,s.message),i=s}}throw i}async function U(t,e,r){const a=O.test(t),n=a?"index":"/index",[i,o]=t.split("?");try{return await P(i+n+(o?`?${o}`:""),e,r)}catch(s){if(!a)try{return await P(t,e,r)}catch{}const c=s,{message:u}=c;throw c.message=c.message.replace(`${n.replace("/",h.default.sep)}'`,"'"),c.stack=c.stack.replace(u,c.message),c}}const H=/^\.{1,2}\//,M=async function(t,e,r,a){var n;if(O.test(t))return await U(t,e,r);const i=t.startsWith(k)||H.test(t);if(S&&!i&&!((n=e.parentURL)!=null&&n.includes("/node_modules/"))){const o=S(t);for(const s of o)try{return await M(m.pathToFileURL(s).toString(),e,r)}catch{}}if(g.test(e.parentURL)){const o=D.resolveTsPath(t);if(o)for(const s of o)try{return await w(r,s,e)}catch(c){const{code:u}=c;if(u!=="ERR_MODULE_NOT_FOUND"&&u!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw c}}try{return await w(r,t,e)}catch(o){if(o instanceof Error&&!a){const{code:s}=o;if(s==="ERR_UNSUPPORTED_DIR_IMPORT")try{return await U(t,e,r)}catch(c){if(c.code!=="ERR_PACKAGE_IMPORT_NOT_DEFINED")throw c}if(s==="ERR_MODULE_NOT_FOUND")try{return await P(t,e,r)}catch{}}throw o}},T=p.importAttributes?"importAttributes":"importAssertions",X=async function(t,e,r){var a;_&&_({type:"dependency",path:t}),J.test(t)&&(e[T]||(e[T]={}),e[T].type="json");const n=await r(t,e);if(!n.source)return n;const i=t.startsWith("file://")?m.fileURLToPath(t):t;let o=n.source.toString();if(p.shouldStripSourceMap&&(o=p.stripSourceMap(o)),n.format==="json"||g.test(t)){const s=await E.transform(o,i,{tsconfigRaw:(a=N)==null?void 0:a(i)});return{format:"module",source:j(s,t,y)}}if(n.format==="module"){const s=E.transformDynamicImport(i,o);s&&(n.source=j(s,t,y))}return n};exports.globalPreload=W,exports.initialize=C,exports.load=X,exports.resolve=M;
