'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var K = require('path');
var c12 = require('c12');
var fs$1 = require('fs');
var y = require('typescript');
var os$1 = require('os');
var cp = require('@apidevtools/json-schema-ref-parser');
var f = require('handlebars');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var K__default = /*#__PURE__*/_interopDefault(K);
var y__default = /*#__PURE__*/_interopDefault(y);
var cp__default = /*#__PURE__*/_interopDefault(cp);
var f__default = /*#__PURE__*/_interopDefault(f);

var yi=Object.create;var Cn=Object.defineProperty;var gi=Object.getOwnPropertyDescriptor;var hi=Object.getOwnPropertyNames;var xi=Object.getPrototypeOf,Oi=Object.prototype.hasOwnProperty;var Z=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var U=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var bi=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of hi(t))!Oi.call(e,n)&&n!==r&&Cn(e,n,{get:()=>t[n],enumerable:!(s=gi(t,n))||s.enumerable});return e};var Pi=(e,t,r)=>(r=e!=null?yi(xi(e)):{},bi(Cn(r,"default",{value:e,enumerable:!0}),e));var En=U(($p,vn)=>{vn.exports=An;An.sync=Ti;var Tn=Z("fs");function Ci(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return !0;for(var s=0;s<r.length;s++){var n=r[s].toLowerCase();if(n&&e.substr(-n.length).toLowerCase()===n)return !0}return !1}function Rn(e,t,r){return !e.isSymbolicLink()&&!e.isFile()?!1:Ci(t,r)}function An(e,t,r){Tn.stat(e,function(s,n){r(s,s?!1:Rn(n,e,t));});}function Ti(e,t){return Rn(Tn.statSync(e),e,t)}});var wn=U((Ip,Nn)=>{Nn.exports=Sn;Sn.sync=Ri;var qn=Z("fs");function Sn(e,t,r){qn.stat(e,function(s,n){r(s,s?!1:kn(n,t));});}function Ri(e,t){return kn(qn.statSync(e),t)}function kn(e,t){return e.isFile()&&Ai(e,t)}function Ai(e,t){var r=e.mode,s=e.uid,n=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),a=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),i=parseInt("100",8),p=parseInt("010",8),c=parseInt("001",8),m=i|p,u=r&c||r&p&&n===a||r&i&&s===o||r&m&&o===0;return u}});var In=U((Mp,$n)=>{Z("fs");var rt;process.platform==="win32"||global.TESTING_WINDOWS?rt=En():rt=wn();$n.exports=Ut;Ut.sync=vi;function Ut(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(s,n){Ut(e,t||{},function(o,a){o?n(o):s(a);});})}rt(e,t||{},function(s,n){s&&(s.code==="EACCES"||t&&t.ignoreErrors)&&(s=null,n=!1),r(s,n);});}function vi(e,t){try{return rt.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return !1;throw r}}});var Ln=U((jp,Bn)=>{var Ne=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Dn=Z("path"),Ei=Ne?";":":",Mn=In(),jn=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Hn=(e,t)=>{let r=t.colon||Ei,s=e.match(/\//)||Ne&&e.match(/\\/)?[""]:[...Ne?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],n=Ne?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=Ne?n.split(r):[""];return Ne&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:s,pathExt:o,pathExtExe:n}},Fn=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:s,pathExt:n,pathExtExe:o}=Hn(e,t),a=[],i=c=>new Promise((m,u)=>{if(c===s.length)return t.all&&a.length?m(a):u(jn(e));let d=s[c],h=/^".*"$/.test(d)?d.slice(1,-1):d,O=Dn.join(h,e),x=!h&&/^\.[\\\/]/.test(e)?e.slice(0,2)+O:O;m(p(x,c,0));}),p=(c,m,u)=>new Promise((d,h)=>{if(u===n.length)return d(i(m+1));let O=n[u];Mn(c+O,{pathExt:o},(x,E)=>{if(!x&&E)if(t.all)a.push(c+O);else return d(c+O);return d(p(c,m,u+1))});});return r?i(0).then(c=>r(null,c),r):i(0)},qi=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:s,pathExtExe:n}=Hn(e,t),o=[];for(let a=0;a<r.length;a++){let i=r[a],p=/^".*"$/.test(i)?i.slice(1,-1):i,c=Dn.join(p,e),m=!p&&/^\.[\\\/]/.test(e)?e.slice(0,2)+c:c;for(let u=0;u<s.length;u++){let d=m+s[u];try{if(Mn.sync(d,{pathExt:n}))if(t.all)o.push(d);else return d}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw jn(e)};Bn.exports=Fn;Fn.sync=qi;});var Un=U((Hp,Vt)=>{var _n=(e={})=>{let t=e.env||process.env;return (e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(s=>s.toUpperCase()==="PATH")||"Path"};Vt.exports=_n;Vt.exports.default=_n;});var Wn=U((Fp,Qn)=>{var Vn=Z("path"),Si=Ln(),ki=Un();function Kn(e,t){let r=e.options.env||process.env,s=process.cwd(),n=e.options.cwd!=null,o=n&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd);}catch{}let a;try{a=Si.sync(e.command,{path:r[ki({env:r})],pathExt:t?Vn.delimiter:void 0});}catch{}finally{o&&process.chdir(s);}return a&&(a=Vn.resolve(n?e.options.cwd:"",a)),a}function Ni(e){return Kn(e)||Kn(e,!0)}Qn.exports=Ni;});var Gn=U((Bp,Qt)=>{var Kt=/([()\][%!^"`<>&|;, *?])/g;function wi(e){return e=e.replace(Kt,"^$1"),e}function $i(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(Kt,"^$1"),t&&(e=e.replace(Kt,"^$1")),e}Qt.exports.command=wi;Qt.exports.argument=$i;});var zn=U((Lp,Xn)=>{Xn.exports=/^#!(.*)/;});var Yn=U((_p,Jn)=>{var Ii=zn();Jn.exports=(e="")=>{let t=e.match(Ii);if(!t)return null;let[r,s]=t[0].replace(/#! ?/,"").split(" "),n=r.split("/").pop();return n==="env"?s:s?`${n} ${s}`:n};});var er=U((Up,Zn)=>{var Wt=Z("fs"),Di=Yn();function Mi(e){let r=Buffer.alloc(150),s;try{s=Wt.openSync(e,"r"),Wt.readSync(s,r,0,150,0),Wt.closeSync(s);}catch{}return Di(r.toString())}Zn.exports=Mi;});var or=U((Vp,rr)=>{var ji=Z("path"),tr=Wn(),nr=Gn(),Hi=er(),Fi=process.platform==="win32",Bi=/\.(?:com|exe)$/i,Li=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function _i(e){e.file=tr(e);let t=e.file&&Hi(e.file);return t?(e.args.unshift(e.file),e.command=t,tr(e)):e.file}function Ui(e){if(!Fi)return e;let t=_i(e),r=!Bi.test(t);if(e.options.forceShell||r){let s=Li.test(t);e.command=ji.normalize(e.command),e.command=nr.command(e.command),e.args=e.args.map(o=>nr.argument(o,s));let n=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${n}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0;}return e}function Vi(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let s={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?s:Ui(s)}rr.exports=Vi;});var ar=U((Kp,ir)=>{var Gt=process.platform==="win32";function Xt(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Ki(e,t){if(!Gt)return;let r=e.emit;e.emit=function(s,n){if(s==="exit"){let o=sr(n,t);if(o)return r.call(e,"error",o)}return r.apply(e,arguments)};}function sr(e,t){return Gt&&e===1&&!t.file?Xt(t.original,"spawn"):null}function Qi(e,t){return Gt&&e===1&&!t.file?Xt(t.original,"spawnSync"):null}ir.exports={hookChildProcess:Ki,verifyENOENT:sr,verifyENOENTSync:Qi,notFoundError:Xt};});var mr=U((Qp,we)=>{var pr=Z("child_process"),zt=or(),Jt=ar();function cr(e,t,r){let s=zt(e,t,r),n=pr.spawn(s.command,s.args,s.options);return Jt.hookChildProcess(n,s),n}function Wi(e,t,r){let s=zt(e,t,r),n=pr.spawnSync(s.command,s.args,s.options);return n.error=n.error||Jt.verifyENOENTSync(n.status,s),n}we.exports=cr;we.exports.spawn=cr;we.exports.sync=Wi;we.exports._parse=zt;we.exports._enoent=Jt;});var bn=Pi(mr());var lr,g=()=>lr,ur=e=>(lr=e,g()),R=e=>("client"in e?e.client.name:e.name).startsWith("legacy/");var ot=e=>{switch(e.name){case"legacy/angular":return "AngularHttpRequest";case"legacy/axios":return "AxiosHttpRequest";case"legacy/fetch":return "FetchHttpRequest";case"legacy/node":return "NodeHttpRequest";case"legacy/xhr":return "XHRHttpRequest";default:return ""}};function $e(e,t){let r=e.toLocaleLowerCase(),s=t.toLocaleLowerCase();return r.localeCompare(s,"en")}var Ge=(e,t)=>$e(e.name,t.name);function Xe(e){return e.sort(Ge)}var Ie=e=>{fs$1.existsSync(e)||fs$1.mkdirSync(e,{recursive:!0});},ze=({moduleOutput:e,sourceOutput:t})=>{let r=t.split("/");return `${new Array(r.length).fill("").join("../")||"./"}${e}`};var fr=async(e,t,r,s)=>{let n=g(),o=s.client({$config:n,...r,httpRequest:ot(n.client),models:Xe(r.models),services:Xe(r.services)});n.name&&(Ie(t),fs$1.writeFileSync(K__default.default.resolve(t,`${n.name}.ts`),o));};var Ce=({sourceOutput:e})=>{let t=g();return t.client.bundle?ze({moduleOutput:"client",sourceOutput:e}):t.client.name},Te=()=>"Options",dr=async(e,t)=>{let r=g();if(R(r)||!r.client.bundle)return;let s=K__default.default.resolve(e,"client");Ie(s);let o=K__default.default.normalize(Z.resolve(t)).split(K__default.default.sep),a=[...o.slice(0,o.indexOf("dist")),"src"].join(K__default.default.sep);["index.ts","types.ts","utils.ts"].forEach(p=>{fs$1.copyFileSync(K__default.default.resolve(a,p),K__default.default.resolve(s,p));});};var yr=async(e,t,r)=>{let s=g();if(s.exportCore){let n={httpRequest:ot(s.client),server:s.base!==void 0?s.base:t.server,version:t.version};if(fs$1.rmSync(K__default.default.resolve(e),{force:!0,recursive:!0}),fs$1.mkdirSync(K__default.default.resolve(e),{recursive:!0}),await fs$1.writeFileSync(K__default.default.resolve(e,"OpenAPI.ts"),r.core.settings({$config:s,...n})),await fs$1.writeFileSync(K__default.default.resolve(e,"ApiError.ts"),r.core.apiError({$config:s,...n})),await fs$1.writeFileSync(K__default.default.resolve(e,"ApiRequestOptions.ts"),r.core.apiRequestOptions({$config:s,...n})),await fs$1.writeFileSync(K__default.default.resolve(e,"ApiResult.ts"),r.core.apiResult({$config:s,...n})),s.client.name!=="legacy/angular"&&await fs$1.writeFileSync(K__default.default.resolve(e,"CancelablePromise.ts"),r.core.cancelablePromise({$config:s,...n})),await fs$1.writeFileSync(K__default.default.resolve(e,"request.ts"),r.core.request({$config:s,...n})),s.name&&(await fs$1.writeFileSync(K__default.default.resolve(e,"BaseHttpRequest.ts"),r.core.baseHttpRequest({$config:s,...n})),await fs$1.writeFileSync(K__default.default.resolve(e,`${n.httpRequest}.ts`),r.core.httpRequest({$config:s,...n}))),s.request){let o=K__default.default.resolve(process.cwd(),s.request);if(!await fs$1.existsSync(o))throw new Error(`Custom request file "${o}" does not exists`);await fs$1.copyFileSync(o,K__default.default.resolve(e,"request.ts"));}}};var st=/^[^$_\p{ID_Start}]+/u,ee=/^(arguments|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|eval|export|extends|false|finally|for|function|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)$/g,ce=/^[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*$/u;var te=e=>(e||e==="")&&(ce.lastIndex=0,!ce.test(e))?`'${e}'`:e,Me=e=>e&&e.startsWith("'")&&e.endsWith("'")?e.slice(1,e.length-1):e,w=e=>e.replace(/\*\//g,"*").replace(/\/\*/g,"*").replace(/\r?\n(.*)/g,(t,r)=>os$1.EOL+r.trim());var it={newLine:y__default.default.NewLineKind.LineFeed,scriptKind:y__default.default.ScriptKind.TS,scriptTarget:y__default.default.ScriptTarget.ES2015,useSingleQuotes:!0},oa=y__default.default.createPrinter({newLine:it.newLine}),gr=e=>y__default.default.createSourceFile("",e,it.scriptTarget,void 0,it.scriptKind),sa=gr(""),ia=e=>e.replace(/\\u([0-9a-fA-F]{4})/g,(t,r)=>String.fromCharCode(Number.parseInt(r,16)));function Re({node:e,unescape:t=!1}){let r=oa.printNode(y__default.default.EmitHint.Unspecified,e,sa);if(!t)return r;try{return ia(r)}catch{return g().debug&&console.warn("Could not decode value:",r),r}}function hr(e){return gr(e).statements[0]}var b=({text:e})=>y__default.default.factory.createIdentifier(e),V={boolean:e=>e?y__default.default.factory.createTrue():y__default.default.factory.createFalse(),export:({alias:e,asType:t=!1,name:r})=>{let s=b({text:r});if(e){let n=b({text:e});return y__default.default.factory.createExportSpecifier(t,s,n)}return y__default.default.factory.createExportSpecifier(t,void 0,s)},import:({alias:e,asType:t=!1,name:r})=>{let s=b({text:r});if(e){let n=b({text:e});return y__default.default.factory.createImportSpecifier(t,s,n)}return y__default.default.factory.createImportSpecifier(t,void 0,s)},number:e=>e<0?y__default.default.factory.createPrefixUnaryExpression(y__default.default.SyntaxKind.MinusToken,y__default.default.factory.createNumericLiteral(Math.abs(e))):y__default.default.factory.createNumericLiteral(e),string:(e,t=!1)=>{let r=e;t&&(r=Me(r));let s=r.includes("'")&&r.includes('"'),n=r.includes(`
`),o=r.startsWith("`"),a=r.startsWith("\\`")&&r.endsWith("\\`");return (n||s||o)&&!a&&(r=`\`${r.replace(/(?<!\\)`/g,"\\`").replace(/\${/g,"\\${")}\``),r.startsWith("`")?b({text:r}):y__default.default.factory.createStringLiteral(r,r.includes("'")?!1:it.useSingleQuotes)}},Ae=e=>e!==null&&typeof e=="object"&&typeof e.kind=="number"&&typeof e.flags=="number"&&typeof e.pos=="number"&&typeof e.end=="number",de=e=>e!==void 0,aa=({commentObject:e,node:t})=>{let r=e.lines.filter(a=>!!a||a==="");if(!r.length)return;if(!e.jsdoc){for(let a of r)y__default.default.addSyntheticLeadingComment(t,y__default.default.SyntaxKind.SingleLineCommentTrivia,` ${a}`,!0);return}let s=r.map((a,i)=>{let p=a;return i!==r.length&&(p=`${p}
`),y__default.default.factory.createJSDocText(p)}),n=y__default.default.factory.createJSDocComment(y__default.default.factory.createNodeArray(s),void 0),o=Re({node:n,unescape:!0}).replace("/*","").replace("*  */","");y__default.default.addSyntheticLeadingComment(t,y__default.default.SyntaxKind.MultiLineCommentTrivia,o,!0);},M=({comments:e=[],node:t})=>{let r=!!e.find(n=>typeof n=="object"&&n),s=e;r||(s=[{jsdoc:!0,lines:e}]);for(let n of s)aa({commentObject:n,node:t});};var B=(e,t)=>y__default.default.isTypeNode(e)?e:typeof e=="number"?y__default.default.factory.createLiteralTypeNode(V.number(e)):X({typeArguments:t?.map(r=>B(r)),typeName:e}),Yt=({expression:e,name:t})=>y__default.default.factory.createPropertyAccessChain(e,y__default.default.factory.createToken(y__default.default.SyntaxKind.QuestionDotToken),t),ne=({expression:e,isOptional:t,name:r})=>{let s=typeof e=="string"?b({text:e}):e;if(t)return Yt({expression:s,name:r});let n=typeof r=="string"?b({text:r}):r;return typeof r=="string"&&(ce.lastIndex=0,!ce.test(r))?y__default.default.factory.createElementAccessExpression(s,n):y__default.default.factory.createPropertyAccessExpression(s,n)},ve=({identifiers:e=[],isValueAccess:t,shorthand:r,unescape:s,value:n})=>{if(n===null)return y__default.default.factory.createNull();if(Array.isArray(n))return Zt({elements:n});if(typeof n=="object")return mt({identifiers:e,obj:n,shorthand:r});if(typeof n=="number")return V.number(n);if(typeof n=="boolean")return V.boolean(n);if(typeof n=="string"){if(t){let o=n.split(".");return ne({expression:o[0],name:o[1]})}return V.string(n,s)}},at=e=>{let t=e==="public"?y__default.default.SyntaxKind.PublicKeyword:e==="protected"?y__default.default.SyntaxKind.ProtectedKeyword:e==="private"?y__default.default.SyntaxKind.PrivateKeyword:void 0,r=[];return t&&r.push(y__default.default.factory.createModifier(t)),r},Je=e=>e.map(t=>{if("destructure"in t)return y__default.default.factory.createParameterDeclaration(void 0,void 0,y__default.default.factory.createObjectBindingPattern(t.destructure.map(s=>"destructure"in s?void 0:y__default.default.factory.createBindingElement(void 0,void 0,b({text:s.name}),void 0)).filter(Boolean)),void 0,void 0,void 0);let r=at(t.accessLevel);return t.isReadOnly&&(r=[...r,y__default.default.factory.createModifier(y__default.default.SyntaxKind.ReadonlyKeyword)]),y__default.default.factory.createParameterDeclaration(r,void 0,b({text:t.name}),t.isRequired===!1?y__default.default.factory.createToken(y__default.default.SyntaxKind.QuestionToken):void 0,t.type!==void 0?B(t.type):void 0,t.default!==void 0?ve({value:t.default}):void 0)}),pt=({keyword:e})=>{let t=y__default.default.SyntaxKind.AnyKeyword;switch(e){case"boolean":t=y__default.default.SyntaxKind.BooleanKeyword;break;case"string":t=y__default.default.SyntaxKind.StringKeyword;break}return y__default.default.factory.createKeywordTypeNode(t)},Ye=e=>e.map(t=>y__default.default.factory.createTypeParameterDeclaration(void 0,t.name,t.extends?typeof t.extends=="string"?pt({keyword:"boolean"}):t.extends:void 0,t.default!==void 0?Ae(t.default)?t.default:y__default.default.factory.createLiteralTypeNode(t.default?y__default.default.factory.createTrue():y__default.default.factory.createFalse()):void 0)),ct=({async:e,comment:t,multiLine:r,parameters:s=[],returnType:n,statements:o=[],types:a=[]})=>{let i=y__default.default.factory.createArrowFunction(e?[y__default.default.factory.createModifier(y__default.default.SyntaxKind.AsyncKeyword)]:void 0,a?Ye(a):void 0,Je(s),n?B(n):void 0,void 0,Array.isArray(o)?y__default.default.factory.createBlock(o,r):o);return M({comments:t,node:i}),i},xr=({async:e,comment:t,multiLine:r,parameters:s=[],returnType:n,statements:o=[],types:a=[]})=>{let i=y__default.default.factory.createFunctionExpression(e?[y__default.default.factory.createModifier(y__default.default.SyntaxKind.AsyncKeyword)]:void 0,void 0,void 0,a?Ye(a):void 0,Je(s),n?B(n):void 0,y__default.default.factory.createBlock(o,r));return M({comments:t,node:i}),i},Zt=({elements:e,multiLine:t=!1})=>y__default.default.factory.createArrayLiteralExpression(e.map(s=>Ae(s)?s:ve({value:s})).filter(de),t||!Array.isArray(e[0])&&typeof e[0]=="object"),Or=({expression:e})=>y__default.default.factory.createAwaitExpression(e),mt=({comments:e,identifiers:t=[],multiLine:r=!0,obj:s,shorthand:n,unescape:o=!1})=>{let a=Array.isArray(s)?s.map(p=>{let c=!1;if("key"in p){let{key:u}=p;c=u===p.value,(u.match(/^[0-9]/)&&u.match(/\D+/g)||u.match(/\W/g))&&!u.startsWith("'")&&!u.endsWith("'")&&(p.key=`'${u}'`);}let m;if("spread"in p){let u=Ae(p.spread)?p.spread:b({text:p.spread});m=y__default.default.factory.createSpreadAssignment(p.assertion?y__default.default.factory.createAsExpression(u,pt({keyword:p.assertion})):u);}else if(p.shorthand||n&&c)m=y__default.default.factory.createShorthandPropertyAssignment(p.value);else {let u=Ae(p.value)?p.value:Array.isArray(p.value)?mt({multiLine:r,obj:p.value,shorthand:n,unescape:o}):ve({identifiers:t.includes(p.key)?Object.keys(p.value):[],isValueAccess:p.isValueAccess,shorthand:n,unescape:o,value:p.value});if(!u)return;t.includes(p.key)&&!y__default.default.isObjectLiteralExpression(u)&&(u=b({text:p.value})),m=y__default.default.factory.createPropertyAssignment(p.key,u);}return M({comments:p.comments,node:m}),m}).filter(de):Object.entries(s).map(([p,c])=>{let m=ve({identifiers:t.includes(p)?Object.keys(c):[],shorthand:n,unescape:o,value:c});if(!m)return;t.includes(p)&&!y__default.default.isObjectLiteralExpression(m)&&(m=b({text:c}));let u=p===c;return p.match(/^[0-9]/)&&p.match(/\D+/g)&&!p.startsWith("'")&&!p.endsWith("'")&&(p=`'${p}'`),p.match(/\W/g)&&!p.startsWith("'")&&!p.endsWith("'")&&(p=`'${p}'`),n&&u?y__default.default.factory.createShorthandPropertyAssignment(c):y__default.default.factory.createPropertyAssignment(p,m)}).filter(de),i=y__default.default.factory.createObjectLiteralExpression(a,r);return M({comments:e,node:i}),i},br=({comments:e,leadingComment:t,name:r,obj:s})=>{let n=y__default.default.factory.createEnumDeclaration([y__default.default.factory.createModifier(y__default.default.SyntaxKind.ExportKeyword)],b({text:r}),Object.entries(s).map(([o,a])=>{let i=ve({unescape:!0,value:a}),p=y__default.default.factory.createEnumMember(o,i),c=e?.[o];return M({comments:c,node:p}),p}));return M({comments:t,node:n}),n},Pr=({name:e,statements:t})=>y__default.default.factory.createModuleDeclaration([y__default.default.factory.createModifier(y__default.default.SyntaxKind.ExportKeyword)],b({text:e}),y__default.default.factory.createModuleBlock(t),y__default.default.NodeFlags.Namespace),Cr=({indexType:e,objectType:t})=>y__default.default.factory.createIndexedAccessTypeNode(t,e),Tr=({text:e})=>y__default.default.factory.createStringLiteral(e),Rr=({condition:e,whenFalse:t,whenTrue:r})=>y__default.default.factory.createConditionalExpression(e,y__default.default.factory.createToken(y__default.default.SyntaxKind.QuestionToken),r,y__default.default.factory.createToken(y__default.default.SyntaxKind.ColonToken),t),Ar=({text:e})=>y__default.default.factory.createTypeOfExpression(b({text:e})),vr=({comment:e,exportType:t,name:r,type:s,typeParameters:n=[]})=>{let o=y__default.default.factory.createTypeAliasDeclaration(t?[y__default.default.factory.createModifier(y__default.default.SyntaxKind.ExportKeyword)]:void 0,b({text:r}),Ye(n),B(s));return M({comments:e,node:o}),o},X=({typeArguments:e,typeName:t})=>y__default.default.factory.createTypeReferenceNode(t,e),Er=({type:e})=>y__default.default.factory.createParenthesizedType(e);var qr=({module:e})=>y__default.default.factory.createExportDeclaration(void 0,!1,void 0,V.string(e)),re=({parameters:e=[],functionName:t,types:r})=>{let s=typeof t=="string"?b({text:t}):t,n=e.filter(a=>a!==void 0).map(a=>typeof a=="string"?b({text:a}):a);return y__default.default.factory.createCallExpression(s,r,n)},Sr=({exports:e,module:t})=>{let r=Array.isArray(e)?e:[e],s=r.some(p=>typeof p!="object"||!p.asType),n=r.map(p=>{let c=typeof p=="string"?{name:p}:p;return V.export({alias:c.alias,asType:s&&c.asType,name:c.name})}),o=y__default.default.factory.createNamedExports(n),a=V.string(t);return y__default.default.factory.createExportDeclaration(void 0,!s,o,a)},kr=({comment:e,assertion:t,destructure:r,exportConst:s,expression:n,name:o,typeName:a})=>{let i=t?y__default.default.factory.createAsExpression(n,typeof t=="string"?X({typeName:t}):t):n,p=b({text:o}),c=y__default.default.factory.createVariableDeclaration(r?y__default.default.factory.createObjectBindingPattern([y__default.default.factory.createBindingElement(void 0,void 0,p,void 0)]):p,void 0,a?typeof a=="string"?X({typeName:a}):a:void 0,i),m=y__default.default.factory.createVariableStatement(s?[y__default.default.factory.createModifier(y__default.default.SyntaxKind.ExportKeyword)]:void 0,y__default.default.factory.createVariableDeclarationList([c],y__default.default.NodeFlags.Const));return M({comments:e,node:m}),m},Nr=({imports:e,module:t})=>{let r=Array.isArray(e)?e:[e],s=r.some(c=>typeof c!="object"||!c.asType),n=r.map(c=>{let m=typeof c=="string"?{name:c}:c;return V.import({alias:m.alias,asType:s&&m.asType,name:m.name})}),o=y__default.default.factory.createNamedImports(n),a=y__default.default.factory.createImportClause(!s,void 0,o),i=V.string(t);return y__default.default.factory.createImportDeclaration(void 0,a,i)};var wr=({accessLevel:e,comment:t,multiLine:r=!0,parameters:s=[],statements:n=[]})=>{let o=y__default.default.factory.createConstructorDeclaration(at(e),Je(s),y__default.default.factory.createBlock(n,r));return M({comments:t,node:o}),o},$r=({accessLevel:e,comment:t,isStatic:r=!1,multiLine:s=!0,name:n,parameters:o=[],returnType:a,statements:i=[],types:p=[]})=>{let c=at(e);r&&(c=[...c,y__default.default.factory.createModifier(y__default.default.SyntaxKind.StaticKeyword)]);let m=y__default.default.factory.createMethodDeclaration(c,void 0,b({text:n}),void 0,p?Ye(p):void 0,Je(o),a?B(a):void 0,y__default.default.factory.createBlock(i,s));return M({comments:t,node:m}),m},Ir=({decorator:e,members:t=[],name:r})=>{let s=[y__default.default.factory.createModifier(y__default.default.SyntaxKind.ExportKeyword)];e&&(s=[y__default.default.factory.createDecorator(re({functionName:e.name,parameters:e.args.map(o=>ve({value:o})).filter(de)})),...s]);let n=[];return t.forEach(o=>{n=[...n,o,b({text:`
`})];}),y__default.default.factory.createClassDeclaration(s,b({text:r}),[],[],n)};var Ee=({expression:e})=>y__default.default.factory.createExpressionStatement(e);var Mr=({expression:e})=>y__default.default.factory.createReturnStatement(e),jr=({args:e=[],name:t,types:r=[]})=>{let s=r.map(i=>X({typeName:i})),n=e.map(i=>y__default.default.isExpression(i)?i:b({text:i})).filter(de),o=re({functionName:t,parameters:n,types:s});return Mr({expression:o})},Hr=({expression:e})=>Mr({expression:typeof e=="string"?b({text:e}):e});var je=e=>e.slice(1).reduce((t,r)=>(ce.lastIndex=0,ce.test(r)?Yt({expression:t,name:r}):y__default.default.factory.createElementAccessChain(t,y__default.default.factory.createToken(y__default.default.SyntaxKind.QuestionDotToken),b({text:r}))),b({text:e[0]})),lt=e=>e.slice(1).reduce((t,r)=>ne({expression:t,name:r}),b({text:e[0]})),Fr=({expressions:e})=>e.reduce((r,s)=>ne({expression:r,name:s})),Br=({left:e,operator:t="=",right:r})=>y__default.default.factory.createBinaryExpression(e,t==="="?y__default.default.SyntaxKind.EqualsToken:t==="==="?y__default.default.SyntaxKind.EqualsEqualsEqualsToken:y__default.default.SyntaxKind.InKeyword,typeof r=="string"?b({text:r}):r),He=({expression:e,thenStatement:t,elseStatement:r})=>y__default.default.factory.createIfStatement(e,t,r),Lr=({path:e})=>{let t=je(e),r=lt(e),s=y__default.default.factory.createBlock([Ee({expression:y__default.default.factory.createBinaryExpression(r,y__default.default.SyntaxKind.EqualsToken,y__default.default.factory.createNewExpression(b({text:"Date"}),void 0,[r]))})]);return He({expression:t,thenStatement:s})},_r=({path:e,transformerName:t})=>{let r=je(e),s=lt(e),n=y__default.default.factory.createBlock([Ee({expression:re({functionName:t,parameters:[s]})})],!0);return [He({expression:r,thenStatement:n})]},Ur=({path:e,transformerName:t})=>{let r=je(e),s=lt(e);return He({expression:re({functionName:ne({expression:"Array",name:"isArray"}),parameters:[r]}),thenStatement:y__default.default.factory.createBlock([Ee({expression:y__default.default.factory.createCallChain(ne({expression:s,name:"forEach"}),void 0,void 0,[b({text:t})])})],!0)})},Vr=({parameterName:e})=>{let t=b({text:"Date"});return y__default.default.factory.createNewExpression(t,void 0,[b({text:e})])},Kr=({path:e,transformExpression:t})=>{let r=je(e),s=lt(e);return He({expression:re({functionName:ne({expression:"Array",name:"isArray"}),parameters:[r]}),thenStatement:y__default.default.factory.createBlock([Ee({expression:y__default.default.factory.createBinaryExpression(s,y__default.default.factory.createToken(y__default.default.SyntaxKind.EqualsToken),y__default.default.factory.createCallChain(ne({expression:s,name:"map"}),void 0,void 0,[ct({parameters:[{name:"item"}],statements:t})]))})],!0)})};var ga=X({typeName:"null"}),Fe=({isNullable:e,node:t})=>e?y__default.default.factory.createUnionTypeNode([t,ga]):t,en=({isNullable:e,properties:t})=>{let r=y__default.default.factory.createTypeLiteralNode(t.map(s=>{let n=s.isReadOnly?[y__default.default.factory.createModifier(y__default.default.SyntaxKind.ReadonlyKeyword)]:void 0,o=s.isRequired!==!1?void 0:y__default.default.factory.createToken(y__default.default.SyntaxKind.QuestionToken),a=B(s.type),i=y__default.default.factory.createPropertySignature(n,s.name,o,a);return M({comments:s.comment,node:i}),i}));return Fe({isNullable:e,node:r})},Ze=({isNullable:e,types:t})=>{let r=t.map(n=>B(n)),s=y__default.default.factory.createUnionTypeNode(r);return Fe({isNullable:e,node:s})},Qr=({isNullable:e,types:t})=>{let r=t.map(n=>B(n)),s=y__default.default.factory.createIntersectionTypeNode(r);return Fe({isNullable:e,node:s})},Wr=({isNullable:e=!1,types:t})=>{let r=t.map(n=>B(n)),s=y__default.default.factory.createTupleTypeNode(r);return Fe({isNullable:e,node:s})},Gr=(e,t,r=!1)=>{let s=Ze({types:e}),n=Ze({types:t}),o=en({properties:[{name:`[key: ${Re({node:s,unescape:!0})}]`,type:n}]});return Fe({isNullable:r,node:o})},Xr=(e,t=!1)=>{let r=X({typeArguments:[Ze({types:e})],typeName:"Array"});return Fe({isNullable:t,node:r})};var zr=e=>{let t=e.match(/\.[0-9a-z]+$/i),r=t?t[0].slice(1):"",s=e.slice(0,e.length-(r?r.length+1:0));return {extension:r,name:s}},Q=class{_headers=[];_imports=new Map;_items=[];_name;_path;constructor({dir:t,name:r,header:s=!0}){this._name=this._setName(r),this._path=K__default.default.resolve(t,this.getName()),s&&(this._headers=[...this._headers,"// This file is auto-generated by @hey-api/openapi-ts"]);}add(...t){this._items=[...this._items,...t];}import({module:t,...r}){let s=this._imports.get(t);s||(s=new Map,this._imports.set(t,s));let n=s.get(r.name);return n||(s.set(r.name,r),r)}getName(t=!0){if(t)return this._name;let{name:r}=zr(this._name);return r}isEmpty(){return !this._items.length}remove(t){fs$1.rmSync(this._path,t);}removeNode(){this._items=this._items.slice(0,this._items.length-1);}_setName(t){if(t.includes("index"))return t;let{extension:r,name:s}=zr(t);return [s,"gen",r].filter(Boolean).join(".")}toString(t=`
`){let r=[];this._headers.length&&(r=[...r,this._headers.join(`
`)]);let s=[];for(let[n,o]of this._imports.entries()){let a=Array.from(o.values()),i=l.namedImportDeclarations({imports:a,module:n});s=[...s,Re({node:i})];}return s.length&&(r=[...r,s.join(`
`)]),r=[...r,...this._items.map(n=>typeof n=="string"?n:Re({node:n,unescape:!0}))],r.join(t)}write(t=`
`){if(this.isEmpty()){this.remove({force:!0});return}let r=this._path;if(typeof this._path=="string"){let s=this._path.split(K__default.default.sep);r=s.slice(0,s.length-1).join(K__default.default.sep);}Ie(r),fs$1.writeFileSync(this._path,this.toString(t));}},l={anonymousFunction:xr,arrayLiteralExpression:Zt,arrowFunction:ct,awaitExpression:Or,binaryExpression:Br,callExpression:re,classDeclaration:Ir,conditionalExpression:Rr,constVariable:kr,constructorDeclaration:wr,enumDeclaration:br,exportAllDeclaration:qr,exportNamedDeclaration:Sr,expressionToStatement:Ee,identifier:b,ifStatement:He,indexedAccessTypeNode:Cr,isTsNode:Ae,keywordTypeNode:pt,methodDeclaration:$r,namedImportDeclarations:Nr,namespaceDeclaration:Pr,nodeToString:Re,objectExpression:mt,ots:V,propertyAccessExpression:ne,propertyAccessExpressions:Fr,returnFunctionCall:jr,returnVariable:Hr,safeAccessExpression:je,stringLiteral:Tr,stringToTsNodes:hr,transformArrayMap:Kr,transformArrayMutation:Ur,transformDateMutation:Lr,transformFunctionMutation:_r,transformNewDate:Vr,typeAliasDeclaration:vr,typeArrayNode:Xr,typeInterfaceNode:en,typeIntersectionNode:Qr,typeNode:B,typeOfExpression:Ar,typeParenthesizedNode:Er,typeRecordNode:Gr,typeReferenceNode:X,typeTupleNode:Wr,typeUnionNode:Ze};var Jr=async({files:e})=>{let t=g();e.index=new Q({dir:t.output.path,name:"index.ts"}),t.name&&e.index.add(l.exportNamedDeclaration({exports:t.name,module:`./${t.name}`})),t.exportCore&&(e.index.add(l.exportNamedDeclaration({exports:"ApiError",module:"./core/ApiError"})),t.services.response==="response"&&e.index.add(l.exportNamedDeclaration({exports:{asType:!0,name:"ApiResult"},module:"./core/ApiResult"})),t.name&&e.index.add(l.exportNamedDeclaration({exports:"BaseHttpRequest",module:"./core/BaseHttpRequest"})),t.client.name!=="legacy/angular"&&e.index.add(l.exportNamedDeclaration({exports:["CancelablePromise","CancelError"],module:"./core/CancelablePromise"})),e.index.add(l.exportNamedDeclaration({exports:["OpenAPI",{asType:!0,name:"OpenAPIConfig"}],module:"./core/OpenAPI"}))),Object.keys(e).sort().forEach(r=>{let s=e[r];r==="index"||s.isEmpty()||e.index.add(l.exportAllDeclaration({module:`./${s.getName(!1)}`}));});};var Yr=async({client:e,files:t})=>{let r=g();if(!R(r))for(let s of r.plugins){let n=s.output.split("/"),o=K__default.default.resolve(r.output.path,...n.slice(0,n.length-1));t[s.name]=new Q({dir:o,name:`${n[n.length-1]}.ts`}),s.handler({client:e,files:t,plugin:s});}};var nn=e=>{console.log(e);};var me=({method:e,operation:t,operationIds:r,path:s})=>{let n=`${e} ${s}`,o=g(),a=o.services.filter?new RegExp(o.services.filter):void 0;a&&!a.test(n)||(t.operationId&&(r.has(t.operationId)?console.warn(`\u2757\uFE0F Duplicate operationId: ${t.operationId} in ${n}. Please ensure your operation IDs are unique. This behavior is not supported and will likely lead to unexpected results.`):r.set(t.operationId,n)),console.log(t));};var rn=e=>{let t=new Map;for(let r in e.paths){let s=e.paths[r];s.delete&&me({method:"DELETE",operation:s.delete,operationIds:t,path:r}),s.get&&me({method:"GET",operation:s.get,operationIds:t,path:r}),s.head&&me({method:"HEAD",operation:s.head,operationIds:t,path:r}),s.options&&me({method:"OPTIONS",operation:s.options,operationIds:t,path:r}),s.patch&&me({method:"PATCH",operation:s.patch,operationIds:t,path:r}),s.post&&me({method:"POST",operation:s.post,operationIds:t,path:r}),s.put&&me({method:"PUT",operation:s.put,operationIds:t,path:r}),s.trace&&me({method:"TRACE",operation:s.trace,operationIds:t,path:r});}};var Zr,S=()=>Zr,eo=e=>(Zr=e,S());var ut=["connect","delete","get","head","options","patch","post","put","trace"];function ft(e="1.0"){return String(e).replace(/^v/gi,"")}var Be="#/components/parameters/",dt="#/components/schemas/";var Pa=/[\p{Lu}]/u,Ca=/[\p{Ll}]/u,ro=/([\p{Alpha}\p{N}_]|$)/u,on=/[_.\- ]+/,Ta=new RegExp("^"+on.source),to=new RegExp(on.source+ro.source,"gu"),no=new RegExp("\\d+"+ro.source,"gu"),Ra=e=>{let t=!1,r=!1,s=!1,n=!1;for(let o=0;o<e.length;o++){let a=e[o];n=o>2?e[o-3]==="-":!0,t&&Pa.test(a)?(e=e.slice(0,o)+"-"+e.slice(o),t=!1,s=r,r=!0,o++):r&&s&&Ca.test(a)&&!n?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=r,r=!1,t=!0):(t=a.toLocaleLowerCase()===a&&a.toLocaleUpperCase()!==a,s=r,r=a.toLocaleUpperCase()===a&&a.toLocaleLowerCase()!==a);}return e},j=({input:e,pascalCase:t})=>{let r=e.trim();return r.length?r.length===1?on.test(r)?"":t?r.toLocaleUpperCase():r.toLocaleLowerCase():(r!==r.toLocaleLowerCase()&&(r=Ra(r)),r=r.replace(Ta,""),r=r.toLocaleLowerCase(),t&&(r=r.charAt(0).toLocaleUpperCase()+r.slice(1)),to.lastIndex=0,no.lastIndex=0,r=r.replaceAll(no,(n,o,a)=>["_","-","."].includes(r.charAt(a+n.length))?n:n.toLocaleUpperCase()),r=r.replaceAll(to,(n,o)=>o.toLocaleUpperCase()),r):""};var Le=e=>{let t=g();return t.services.name?t.services.name.replace("{{name}}",e):e},sn=e=>g().types.name==="PascalCase"?j({input:e,pascalCase:!0}):e,oo=e=>{let t=sn(e);return z(t).replace(ee,"_$1")};var so=(e,t)=>{if(e.enum&&!t.includes("boolean"))return "enum"},an=e=>_e(e).includes("null"),ye=e=>e.nullable===!0||an(e),_e=({type:e})=>Array.isArray(e)?e:e?[e]:[];var Aa=e=>e.replace(st,"").replace(/[^$\u200c\u200d\p{ID_Continue}]/gu,"_"),z=e=>{st.lastIndex=0;let r=st.test(e)?`_${e}`:e;return Aa(r)},Ue=e=>e.replace(/^[^\p{ID_Start}]+/u,"").replace(/[^$\u200c\u200d\p{ID_Continue}]/gu,"-").replace(/\$/g,"-"),pn=e=>{let t=e.replace("[]","Array");return Ue(t)};var et=e=>e.trim().replace(/^#\/definitions\//,"").replace(/^#\/parameters\//,"").replace(/^#\/responses\//,"").replace(/^#\/securityDefinitions\//,"").replace(/^#\/components\/schemas\//,"").replace(/^#\/components\/responses\//,"").replace(/^#\/components\/parameters\//,"").replace(/^#\/components\/examples\//,"").replace(/^#\/components\/requestBodies\//,"").replace(/^#\/components\/headers\//,"").replace(/^#\/components\/securitySchemes\//,"").replace(/^#\/components\/links\//,"").replace(/^#\/components\/callbacks\//,"");var io=(e,t)=>{if(t==="binary")return "binary";switch(e){case"any":case"object":case"unknown":return "unknown";case"array":return "unknown[]";case"boolean":return "boolean";case"byte":case"double":case"float":case"int":case"integer":case"long":case"number":case"short":return "number";case"char":case"date":case"date-time":case"password":case"string":return "string";case"file":return "binary";case"null":return "null";case"void":return "void"}},ao=/(?<!`1)\[.*\]$/g,P=({debug:e,format:t,type:r="unknown"})=>{let s={$refs:[],base:"unknown",imports:[],isNullable:!1,template:null,type:"unknown"};if(Array.isArray(r)){let a=r.filter(i=>i!=="null").map(i=>io(i,t)).filter(Boolean).join(" | ");return s.type=a,s.base=a,s.isNullable=an({type:r}),s}let n=io(r,t);if(n)return s.type=n,s.base=n,s;let o=decodeURIComponent(et(r));if(ao.lastIndex=0,ao.test(o)){let a=o.match(/(.*?)\[(.*)\]$/);if(a?.length){let i=P({debug:e,type:z(a[1])}),p=P({debug:e,type:z(a[2])});return i.type==="unknown[]"?(s.type=`${p.type}[]`,s.base=`${p.type}`,i.$refs=[],i.imports=[]):p.type?(s.type=`${i.type}<${p.type}>`,s.base=i.type,s.template=p.type):(s.type=i.type,s.base=i.type,s.template=i.type),s.$refs=[...s.$refs,...i.$refs,...p.$refs],s.imports=[...s.imports,...i.imports,...p.imports],s}}if(o){let a=sn(z(o));return r.startsWith(Be)&&(a=`Parameter${a}`),s.type=a,s.base=a,r.startsWith("#")&&(s.$refs=[...s.$refs,decodeURIComponent(r)]),s.imports=[...s.imports,a],s}return s};function H(e,t,r){return r.indexOf(e)===t}var Ve=(e,t)=>{if(!Array.isArray(t))return [];let r=(e["x-enum-descriptions"]??[]).filter(n=>typeof n=="string"),s=(e["x-enum-varnames"]??e["x-enumNames"]??[]).filter(n=>typeof n=="string");return t.filter(H).filter(n=>typeof n=="number"||typeof n=="string").map((n,o)=>({customDescription:r[o],customName:s[o],description:void 0,value:n}))};var k=e=>e?.replace(/\\/g,"\\\\").replace(/'/g,"\\'");var yt=({definition:e,getModel:t,openApi:r,types:s})=>{let n=[];return Object.entries(e.properties??{}).forEach(([o,a])=>{let i=!!e.required?.includes(o);if(a.$ref){let p=P({type:a.$ref});n.push({$refs:[],base:p.base,description:a.description||null,enum:[],enums:[],exclusiveMaximum:a.exclusiveMaximum,exclusiveMinimum:a.exclusiveMinimum,export:"reference",format:a.format,imports:p.imports,in:"",isDefinition:!1,isNullable:a["x-nullable"]===!0,isReadOnly:a.readOnly===!0,isRequired:i,link:null,maxItems:a.maxItems,maxLength:a.maxLength,maxProperties:a.maxProperties,maximum:a.maximum,minItems:a.minItems,minLength:a.minLength,minProperties:a.minProperties,minimum:a.minimum,multipleOf:a.multipleOf,name:te(o),pattern:k(a.pattern),properties:[],template:p.template,type:p.type,uniqueItems:a.uniqueItems});}else {let p=t({definition:a,openApi:r,types:s});n.push({$refs:[],base:p.base,description:a.description||null,enum:p.enum,enums:p.enums,exclusiveMaximum:a.exclusiveMaximum,exclusiveMinimum:a.exclusiveMinimum,export:p.export,format:a.format,imports:p.imports,in:"",isDefinition:!1,isNullable:a["x-nullable"]===!0,isReadOnly:a.readOnly===!0,isRequired:i,link:p.link,maxItems:a.maxItems,maxLength:a.maxLength,maxProperties:a.maxProperties,maximum:a.maximum,minItems:a.minItems,minLength:a.minLength,minProperties:a.minProperties,minimum:a.minimum,multipleOf:a.multipleOf,name:te(o),pattern:k(a.pattern),properties:p.properties,template:p.template,type:p.type,uniqueItems:a.uniqueItems});}}),n};var va=/~1/g,Ea=/~0/g;function A(e,t){if(t.$ref){let r=t.$ref.replace(/^#/g,"").split("/").filter(Boolean),s=e;return r.forEach(n=>{let o=decodeURIComponent(n.replace(va,"/").replace(Ea,"~"));if(s.hasOwnProperty(o))s=s[o];else throw new Error(`Could not find reference: "${t.$ref}"`)}),s}return t}var po=({definitions:e,getModel:t,openApi:r,required:s,types:n})=>e.reduce((o,a)=>{if(a.$ref){let i=A(r,a);return [...o,...t({definition:i,openApi:r,types:n}).properties]}return [...o,...t({definition:a,openApi:r,types:n}).properties]},[]).filter(o=>!o.isRequired&&s.includes(o.name)).map(o=>({...o,isRequired:!0}));var co=({definition:e,definitions:t,getModel:r,openApi:s,type:n,types:o})=>{let a={$refs:[],enums:[],export:n,imports:[],properties:[]},i=[];if(t.map(p=>r({definition:p,openApi:s,types:o})).filter(p=>{let c=p.properties.length,m=p.enums.length;return !(p.type==="unknown"&&!c&&!m)}).forEach(p=>{a.imports.push(...p.imports),a.enums.push(...p.enums),a.properties.push(p);}),e.required&&n==="all-of"){let p=po({definitions:t,getModel:r,openApi:s,required:e.required,types:o});p.forEach(c=>{a.imports.push(...c.imports),a.enums.push(...c.enums);}),i.push(...p);}if(e.properties){let p=yt({definition:e,getModel:r,openApi:s,types:o});p.forEach(c=>{a.imports.push(...c.imports),a.enums.push(...c.enums),c.export==="enum"&&a.enums.push(c);}),i.push(...p);}return i.length&&a.properties.push({$refs:[],base:"unknown",description:"",enum:[],enums:[],export:"interface",imports:[],in:"",isDefinition:!1,isNullable:!1,isReadOnly:!1,isRequired:!1,link:null,name:"properties",properties:i,template:null,type:"unknown"}),a};var ie=({definition:e,isDefinition:t=!1,meta:r,openApi:s,types:n})=>{let o={$refs:[],base:"unknown",description:e.description||null,enum:[],enums:[],exclusiveMaximum:e.exclusiveMaximum,exclusiveMinimum:e.exclusiveMinimum,export:"interface",format:e.format,imports:[],in:"",isDefinition:t,isNullable:e["x-nullable"]===!0,isReadOnly:e.readOnly===!0,isRequired:!1,link:null,maxItems:e.maxItems,maxLength:e.maxLength,maxProperties:e.maxProperties,maximum:e.maximum,meta:r,minItems:e.minItems,minLength:e.minLength,minProperties:e.minProperties,minimum:e.minimum,multipleOf:e.multipleOf,name:r?.name??"",pattern:k(e.pattern),properties:[],template:null,type:"unknown",uniqueItems:e.uniqueItems};if(e.$ref){let a=P({type:e.$ref});return o.export="reference",o.type=a.type,o.base=a.base,o.template=a.template,o.imports.push(...a.imports),o}if(e.enum&&e.type!=="boolean"){let a=Ve(e,e.enum);if(a.length)return o.base="string",o.enum=[...o.enum,...a],o.export="enum",o.type="string",o}if(e.type==="array"&&e.items)if(e.items.$ref){let a=P({type:e.items.$ref});return o.export="array",o.type=a.type,o.base=a.base,o.template=a.template,o.imports.push(...a.imports),o}else {let a=ie({definition:e.items,openApi:s,types:n});return o.export="array",o.type=a.type,o.base=a.base,o.template=a.template,o.link=a,o.imports.push(...a.imports),o}if(e.type==="object"&&typeof e.additionalProperties=="object")if(e.additionalProperties.$ref){let a=P({type:e.additionalProperties.$ref});return o.export="dictionary",o.type=a.type,o.base=a.base,o.template=a.template,o.imports.push(...a.imports),o}else {let a=ie({definition:e.additionalProperties,openApi:s,types:n});return o.export="dictionary",o.type=a.type,o.base=a.base,o.template=a.template,o.link=a,o.imports.push(...a.imports),o}if(e.allOf?.length){let a=co({definition:e,definitions:e.allOf,getModel:ie,openApi:s,type:"all-of",types:n});return o.export=a.export,o.imports.push(...a.imports),o.properties.push(...a.properties),o.enums=[...o.enums,...a.enums],o}if(e.type==="object")return o.export="interface",o.type="unknown",o.base="unknown",e.properties&&yt({definition:e,getModel:ie,openApi:s,types:n}).forEach(i=>{o.imports.push(...i.imports),o.enums=[...o.enums,...i.enums],o.properties.push(i),i.export==="enum"&&(o.enums=[...o.enums,i]);}),o;if(e.type){let a=P({format:e.format,type:e.type});return o.export="generic",o.type=a.type,o.base=a.base,o.template=a.template,o.imports.push(...a.imports),o}return o};var mo=e=>{let t={},r=[];return Object.entries(e.definitions??{}).forEach(([s,n])=>{let a=P({type:s}).base.replace(ee,"_$1"),i={$ref:`#/definitions/${s}`,name:a};t[a]=i;let p=ie({definition:n,isDefinition:!0,meta:i,openApi:e,types:t});r=[...r,p];}),{models:r,types:t}};var ge=e=>`${e.method} ${e.path}`,gt=e=>{let t=e.find(r=>r.in==="header");return t?t.name:null},ae=e=>e.some(r=>r.isRequired),ht=e=>{if(e==="default")return "default";if(e==="1XX")return "1XX";if(e==="2XX")return "2XX";if(e==="3XX")return "3XX";if(e==="4XX")return "4XX";if(e==="5XX")return "5XX";if(/\d{3}/g.test(e)){let t=Number.parseInt(e,10);if(t>=100&&t<600)return t}return null},xt=(e,t)=>e.code>t.code?1:e.code<t.code?-1:0,qa=e=>e==="3XX"||e==="4XX"||e==="5XX"||typeof e=="number"&&e>=300,lo=e=>e==="2XX"||typeof e=="number"&&e>=200&&e<300,Sa=(e,t)=>{let r=[],s=c=>{r.includes(c)||(r=[...r,c]);};t.some(({code:c})=>lo(c))||s("success");let o=(e.description??"").toLocaleLowerCase(),a=e.$refs.join("|").toLocaleLowerCase(),i=["error","problem"];return ["success"].some(c=>o.includes(c)||a.includes(c))&&s("success"),i.some(c=>o.includes(c)||a.includes(c))&&s("error"),r.length||s("error"),r},Ot=e=>e.map(t=>{let{code:r}=t;return r==="default"?t.responseTypes=Sa(t,e):lo(r)?t.responseTypes=["success"]:qa(r)&&(t.responseTypes=["error"]),t});var v=(e,t)=>{if(e.default===void 0||e.default===null)return e.default;switch(_e(e).find(n=>n!=="null")||typeof e.default){case"int":case"integer":case"number":if(t?.export==="enum"&&t.enum?.[e.default]){let{value:n}=t.enum[e.default];return n}return e.default;case"array":case"boolean":case"object":case"string":return e.default;default:return}};var uo=({openApi:e,parameter:t,types:r})=>{let s=S(),n={$refs:[],base:"unknown",description:t.description||null,enum:[],enums:[],exclusiveMaximum:t.exclusiveMaximum,exclusiveMinimum:t.exclusiveMinimum,export:"interface",format:t.format,imports:[],in:t.in,isDefinition:!1,isNullable:t["x-nullable"]===!0,isReadOnly:!1,isRequired:t.required===!0,link:null,maxItems:t.maxItems,maxLength:t.maxLength,maximum:t.maximum,mediaType:null,minItems:t.minItems,minLength:t.minLength,minimum:t.minimum,multipleOf:t.multipleOf,pattern:k(t.pattern),prop:t.name,properties:[],template:null,type:"unknown",uniqueItems:t.uniqueItems},o={...n,name:s.nameFn.operationParameter(n)};if(t.$ref){let i=P({type:t.$ref});return o={...o,$refs:[...o.$refs,...i.$refs],base:i.base,export:"reference",imports:[...o.imports,...i.imports],template:i.template,type:i.type},o.default=v(t,o),o}if(t.enum){let i=Ve(t,t.enum);if(i.length)return o={...o,base:"string",enum:[...o.enum,...i],export:"enum",type:"string"},o.default=v(t,o),o}if(t.type==="array"&&t.items){let i=P({format:t.items.format,type:t.items.type});return o={...o,$refs:[...o.$refs,...i.$refs],base:i.base,export:"array",imports:[...o.imports,...i.imports],template:i.template,type:i.type},o.default=v(t,o),o}if(t.type==="object"&&t.items){let i=P({format:t.items.format,type:t.items.type});return o={...o,$refs:[...o.$refs,...i.$refs],base:i.base,export:"dictionary",imports:[...o.imports,...i.imports],template:i.template,type:i.type},o.default=v(t,o),o}let a=t.schema;if(a){if(a.$ref?.startsWith("#/parameters/")&&(a=A(e,a)),a.$ref){let p=P({type:a.$ref});return o={...o,$refs:[...o.$refs,...p.$refs],base:p.base,export:"reference",imports:[...o.imports,...p.imports],template:p.template,type:p.type},o.default=v(t,o),o}let i=ie({definition:a,openApi:e,types:r});return o={...o,$refs:[...o.$refs,...i.$refs],base:i.base,enum:[...o.enum,...i.enum],enums:[...o.enums,...i.enums],export:i.export,imports:[...o.imports,...i.imports],link:i.link,properties:[...o.properties,...i.properties],template:i.template,type:i.type},o.default=v(t,o),o}if(t.type){let i=P({format:t.format,type:t.type});return o={...o,$refs:[...o.$refs,...i.$refs],base:i.base,export:"generic",imports:[...o.imports,...i.imports],template:i.template,type:i.type},o.default=v(t,o),o}return o};var ka=["body","formData","header","path","query"],bt=({openApi:e,parameters:t,types:r})=>{let s=S(),n={$refs:[],imports:[],parameters:[],parametersBody:null,parametersCookie:[],parametersForm:[],parametersHeader:[],parametersPath:[],parametersQuery:[]};return t.forEach(o=>{let a=A(e,o),i=uo({openApi:e,parameter:a,types:r}),p=s.filterFn?.operationParameter&&!s.filterFn?.operationParameter(i);if(!(!ka.includes(a.in)||p)){switch(a.in){case"body":n.parametersBody=i;break;case"formData":n.parametersForm=[...n.parametersForm,i];break;case"header":n.parametersHeader=[...n.parametersHeader,i];break;case"path":n.parametersPath=[...n.parametersPath,i];break;case"query":n.parametersQuery=[...n.parametersQuery,i];break}n.$refs=[...n.$refs,...i.$refs],n.imports=[...n.imports,...i.imports],n.parameters=[...n.parameters,i];}}),n};function Pt(e){return e.sort((t,r)=>{let s=t.isRequired&&t.default===void 0,n=r.isRequired&&r.default===void 0;return s&&!n?-1:n&&!s?1:0})}var fo=({code:e,openApi:t,response:r,types:s})=>{let n={$refs:[],base:e!==204?"unknown":"void",code:e,description:r.description||null,enum:[],enums:[],export:"generic",imports:[],in:"response",isDefinition:!1,isNullable:!1,isReadOnly:!1,isRequired:!1,link:null,name:"",properties:[],responseTypes:[],template:null,type:e!==204?"unknown":"void"},o=r.schema;if(o){if(o.$ref?.startsWith("#/responses/")&&(o=A(t,o)),o.$ref){let i=P({type:o.$ref});return n.export="reference",n.type=i.type,n.base=i.base,n.template=i.template,n.imports=[...n.imports,...i.imports],n}let a=ie({definition:o,openApi:t,types:s});return n.export=a.export,n.type=a.type,n.base=a.base,n.template=a.template,n.link=a.link,n.isReadOnly=a.isReadOnly,n.isRequired=a.isRequired,n.isNullable=a.isNullable,n.format=a.format,n.maximum=a.maximum,n.exclusiveMaximum=a.exclusiveMaximum,n.minimum=a.minimum,n.exclusiveMinimum=a.exclusiveMinimum,n.multipleOf=a.multipleOf,n.maxLength=a.maxLength,n.minLength=a.minLength,n.maxItems=a.maxItems,n.minItems=a.minItems,n.uniqueItems=a.uniqueItems,n.maxProperties=a.maxProperties,n.minProperties=a.minProperties,n.pattern=k(a.pattern),n.imports=[...n.imports,...a.imports],n.enum=[...n.enum,...a.enum],n.enums=[...n.enums,...a.enums],n.properties=[...n.properties,...a.properties],n}if(r.headers)for(let a in r.headers)return n.in="header",n.name=a,n.type="string",n.base="string",n;return n};var yo=({openApi:e,responses:t,types:r})=>{let s=[];return Object.entries(t).forEach(([n,o])=>{let a=ht(n);if(!a)return;let i=A(e,o),p=fo({code:a,openApi:e,response:i,types:r});s=[...s,p];}),s=Ot(s),s.sort(xt)};var go=({method:e,op:t,openApi:r,types:s,pathParams:n,url:o})=>{let a=S(),i={$refs:[],deprecated:t.deprecated===!0,description:t.description||null,id:t.operationId||null,imports:[],method:e.toUpperCase(),parameters:[...n.parameters],parametersBody:n.parametersBody,parametersCookie:[...n.parametersCookie],parametersForm:[...n.parametersForm],parametersHeader:[...n.parametersHeader],parametersPath:[...n.parametersPath],parametersQuery:[...n.parametersQuery],path:o,responseHeader:null,responses:[],summary:t.summary||null,tags:t.tags||null},p={...i,name:a.nameFn.operation(i)};if(t.parameters){let c=bt({openApi:r,parameters:t.parameters,types:s});p.$refs=[...p.$refs,...c.$refs],p.imports=[...p.imports,...c.imports],p.parameters=[...p.parameters,...c.parameters],p.parametersBody=c.parametersBody,p.parametersCookie=[...p.parametersCookie,...c.parametersCookie],p.parametersForm=[...p.parametersForm,...c.parametersForm],p.parametersHeader=[...p.parametersHeader,...c.parametersHeader],p.parametersPath=[...p.parametersPath,...c.parametersPath],p.parametersQuery=[...p.parametersQuery,...c.parametersQuery];}if(t.responses){p.responses=yo({openApi:r,responses:t.responses,types:s});let c=p.responses.filter(m=>m.responseTypes.includes("success"));p.responseHeader=gt(c),c.forEach(m=>{p.$refs=[...p.$refs,...m.$refs],p.imports=[...p.imports,...m.imports];});}return p.parameters=Pt(p.parameters),p};var ho=({openApi:e,types:t})=>{let r=S(),s=new Map,n=[];for(let o in e.paths){let a=e.paths[o],i=bt({openApi:e,parameters:a.parameters??[],types:t});for(let p in a){let c=p,m=ge({method:c.toUpperCase(),path:o});if(ut.includes(c)){let u=a[c];if(u.operationId&&(s.has(u.operationId)?console.warn(`\u2757\uFE0F Duplicate operationId: ${u.operationId} in ${m}. Please ensure your operation IDs are unique. This behavior is not supported and will likely lead to unexpected results.`):s.set(u.operationId,m)),!r.filterFn?.operation||r.filterFn?.operation(m)){let d=go({method:c,op:u,openApi:e,pathParams:i,types:t,url:o});n.push(d);}}}}return n};var xo=e=>{let t=e.schemes?.[0]||"http",r=e.host,s=e.basePath||"";return (r?`${t}://${r}${s}`:s).replace(/\/$/g,"")};var Oo=e=>{let t=ft(e.info.version),r=xo(e),{models:s,types:n}=mo(e),o=ho({openApi:e,types:n});return {models:s,operations:o,server:r,types:n,version:t}};var bo=e=>{let r=`Parameter${P({type:e}).base.replace(ee,"_$1")}`;return {$ref:Be+e,name:r}},Ct=e=>{let t=oo(e);return {$ref:dt+e,name:t}};var Na=(e,t)=>{if(t)return t;if(typeof e=="number")return `'_${e}'`;let r="";return typeof e=="string"&&(r=e.replace(/[^$\u200c\u200d\p{ID_Continue}]/gu,"_").replace(/^([^$_\p{ID_Start}])/u,"_$1").replace(/(\p{Lowercase})(\p{Uppercase}+)/gu,"$1_$2")),r=r.trim(),r||(r="empty_string"),r.toUpperCase()},Po=e=>e.map(t=>Tt(t.value,!0)).filter(H).join(" | "),Tt=(e,t=!1)=>typeof e=="string"?e.includes("'")&&t?`"${e}"`:`'${e}'`:e,Rt=e=>{let t=Na(e.value,e.customName),r=Tt(e.value);return {key:t,value:r}},At=e=>{let t=e.enum.map(r=>Rt(r)).sort((r,s)=>$e(r.key,s.key)).map(r=>`${r.key}=${r.value}`).join("&");return {$ref:`enum/${e.name}/${t}`,name:z(Me(e.name))}};var wa=e=>{let t={};for(let r in e)t[e[r]]=r;return t},Co=(e,t)=>{if(e.components&&t){for(let r in e.components.schemas)if(e.components.schemas.hasOwnProperty(r)){let s=e.components.schemas[r];if(s.discriminator&&s.oneOf?.length&&s.oneOf.some(n=>n.$ref&&et(n.$ref)==t.name))return s.discriminator}}},To=(e,t)=>{if(e.mapping){let r=wa(e.mapping),s=Object.keys(r).find(n=>et(n)==t.name);if(s&&r[s])return r[s]}return t.name};var cn=({debug:e,definition:t,getModel:r,model:s,openApi:n,types:o})=>{let a=typeof t.additionalProperties=="object"?t.additionalProperties:{},i=r({debug:e,definition:a,openApi:n,parentDefinition:t,types:o});if(a.$ref){let p=P({type:a.$ref});return s.base=p.base,s.default=v(t,s),s.export="dictionary",s.imports.push(...p.imports),s.template=p.template,s.type=p.type,s}if(t.additionalProperties&&t.properties&&Object.keys(t.properties).length>0){let p=typeof t.additionalProperties=="object"&&t.additionalProperties.type&&!Array.isArray(t.additionalProperties.type)?t.additionalProperties.type:i.base,c=[P({type:p}).base,...s.properties.map(m=>m.base)];return i.base=c.filter(H).join(" | "),i.default=v(t,s),i.export="generic",i.isRequired=t.additionalProperties===!0,i.name="[key: string]",i}return s.base=i.base,s.default=v(t,s),s.export="dictionary",s.imports.push(...i.imports),s.link=i,s.template=i.template,s.type=i.type,s},vt=({debug:e,definition:t,getModel:r,openApi:s,parent:n,types:o})=>{let a=[],i=Co(s,n);return Object.entries(t.properties??{}).forEach(([p,c])=>{let m=!!t.required?.includes(p),u={default:c.default,deprecated:c.deprecated===!0,description:c.description||null,exclusiveMaximum:c.exclusiveMaximum,exclusiveMinimum:c.exclusiveMinimum,format:c.type==="array"?c.items?.format??c.format:c.format,in:"",isDefinition:!1,isReadOnly:c.readOnly===!0,isRequired:m,maxItems:c.maxItems,maxLength:c.maxLength,maxProperties:c.maxProperties,maximum:c.maximum,minItems:c.minItems,minLength:c.minLength,minProperties:c.minProperties,minimum:c.minimum,multipleOf:c.multipleOf,name:te(p),pattern:k(c.pattern),uniqueItems:c.uniqueItems};if(n&&i?.propertyName==p){a=[...a,{...u,$refs:[],base:`'${To(i,n)}'`,enum:[],enums:[],export:"reference",imports:[],isNullable:ye(c),link:null,properties:[],template:null,type:"string"}];return}if(c.$ref){let h=P({type:c.$ref});a=[...a,{...u,$refs:h.$refs,base:h.base,enum:[],enums:[],export:"reference",imports:h.imports,isNullable:h.isNullable||ye(c),link:null,properties:[],template:h.template,type:h.type}];return}let d=r({debug:e,definition:c,initialValues:u,openApi:s,parentDefinition:t,types:o});d.isNullable=d.isNullable||ye(c),a=[...a,d];}),a};var Ro=({debug:e,definitions:t,getModel:r,openApi:s,required:n,types:o})=>t.reduce((i,p)=>{if(p.$ref){let c=P({type:p.$ref}),m={$ref:p.$ref,name:c.base};o[c.base]=m;let u=A(s,p);return [...i,...r({debug:e,definition:u,meta:m,openApi:s,types:o}).properties]}return [...i,...r({debug:e,definition:p,openApi:s,parentDefinition:p,types:o}).properties]},[]).filter(i=>!i.isRequired&&n.includes(i.name)).map(i=>({...i,isRequired:!0}));var Et=e=>[{definitions:e.allOf,type:"all-of"},{definitions:e.anyOf,type:"any-of"},{definitions:e.oneOf,type:"one-of"}].find(r=>r.definitions?.length),Ao=({debug:e,definition:t,definitions:r,getModel:s,model:n,openApi:o,type:a,types:i})=>{let p={$refs:n.$refs,enums:n.enums,export:a,imports:n.imports,properties:n.properties},c=[];if(r.map(m=>s({debug:e,definition:m,openApi:o,parentDefinition:t,types:i})).forEach(m=>{p.$refs=[...p.$refs,...m.$refs],p.imports=[...p.imports,...m.imports],p.enums=[...p.enums,...m.enums],p.properties=[...p.properties,m];}),t.required&&a==="all-of"){let m=Ro({debug:e,definitions:r,getModel:s,openApi:o,required:t.required,types:i});m.forEach(u=>{p.$refs=[...p.$refs,...u.$refs],p.imports=[...p.imports,...u.imports],p.enums=[...p.enums,...u.enums];}),c=[...c,...m];}if(t.properties){let m=vt({definition:t,getModel:s,openApi:o,types:i});m.forEach(u=>{p.$refs=[...p.$refs,...u.$refs],p.imports=[...p.imports,...u.imports],p.enums=[...p.enums,...u.enums],u.export==="enum"&&(p.enums=[...p.enums,u]);}),c=[...c,...m];}if(c.length){let m=Et(t);if(m){let u={$refs:[],base:"unknown",description:"",enum:[],enums:[],export:"interface",imports:[],in:"",isDefinition:!1,isNullable:!1,isReadOnly:!1,isRequired:!1,link:null,name:"properties",properties:c,template:null,type:"unknown"};m.type==="one-of"?(p.properties=[{...p,base:"",description:null,enum:[],in:"",isDefinition:!1,isNullable:!1,isReadOnly:!1,isRequired:!0,link:null,name:"",template:null,type:""},u],p.export="all-of"):p.properties=[...p.properties,u];}}return p};var I=({debug:e,definition:t,initialValues:r={},isDefinition:s=!1,meta:n,openApi:o,parentDefinition:a=null,types:i})=>{let p=_e(t),c=so(t,p),m={$refs:[],base:"unknown",deprecated:!!t.deprecated,description:t.description||null,enum:[],enums:[],exclusiveMaximum:t.exclusiveMaximum,exclusiveMinimum:t.exclusiveMinimum,export:"interface",format:t.format,imports:[],in:"",isDefinition:s,isNullable:ye(t),isReadOnly:t.readOnly===!0,isRequired:!1,link:null,maxItems:t.maxItems,maxLength:t.maxLength,maxProperties:t.maxProperties,maximum:t.maximum,meta:n,minItems:t.minItems,minLength:t.minLength,minProperties:t.minProperties,minimum:t.minimum,multipleOf:t.multipleOf,name:n?.name??"",pattern:k(t.pattern),properties:[],template:null,type:"unknown",uniqueItems:t.uniqueItems,...r};if(t.$ref){let d=P({debug:e,type:t.$ref});return m.$refs=[...m.$refs,decodeURIComponent(t.$ref)],m.base=d.base,m.export="reference",m.imports=[...m.imports,...d.imports],m.template=d.template,m.type=d.type,m.default=v(t,m),m}if(c==="enum"){let d=Ve(t,t.enum);if(d.length)return m.base="string",m.enum=[...m.enum,...d],m.export="enum",m.type="string",m.default=v(t,m),m.meta||(m.meta=At(m)),m}if(p.includes("array")&&(t.items||t.prefixItems)){if(t.prefixItems){let O=t.prefixItems.map(x=>I({definition:x,openApi:o,parentDefinition:t,types:i}));return m.export="array",m.$refs=[...m.$refs,...O.reduce((x,E)=>[...x,...E.$refs],[])],m.imports=[...m.imports,...O.reduce((x,E)=>[...x,...E.imports],[])],m.link=O,m.default=v(t,m),m}if(!t.items)return m;if(t.items.$ref){let O=P({type:t.items.$ref});return m.$refs=[...m.$refs,decodeURIComponent(t.items.$ref)],m.base=O.base,m.export="array",m.imports=[...m.imports,...O.imports],m.template=O.template,m.type=O.type,m.default=v(t,m),m}if(t.items.anyOf&&a&&a.type){let O=Et(a);if(O&&O.definitions.some(x=>!_e(x).includes("array")))return I({definition:t.items,openApi:o,parentDefinition:t,types:i})}let d=Array.isArray(t.items)?{anyOf:t.items}:t.items,h=I({definition:d,openApi:o,parentDefinition:t,types:i});return m.base=h.base,m.export="array",m.$refs=[...m.$refs,...h.$refs],m.imports=[...m.imports,...h.imports],m.link=h,m.template=h.template,m.type=h.type,m.default=v(t,m),m}let u=Et(t);if(u){let d=Ao({...u,debug:e,definition:t,getModel:I,model:m,openApi:o,types:i});return {...m,...d}}if(p.includes("object")||t.properties||t.additionalProperties){if(t.properties&&(Object.keys(t.properties).length>0||!t.additionalProperties)){if(m.base="unknown",m.export="interface",m.type="unknown",m.default=v(t,m),vt({debug:e,definition:t,getModel:I,openApi:o,parent:m,types:i}).forEach(O=>{m.$refs=[...m.$refs,...O.$refs],m.enums=[...m.enums,...O.enums],m.imports=[...m.imports,...O.imports],m.properties=[...m.properties,O],O.export==="enum"&&(m.enums=[...m.enums,O]);}),t.additionalProperties){let O=cn({debug:e,definition:t,getModel:I,model:m,openApi:o,types:i});m.properties=[...m.properties,O];}return !m.properties.length&&m.base==="unknown"&&m.type==="unknown"&&(m.export="dictionary",m.name||(m.name="[key: string]")),m}return cn({debug:e,definition:t,getModel:I,model:m,openApi:o,types:i})}if(t.const!==void 0){let d=t.const,h=typeof d=="string"?`"${d}"`:`${d}`;return m.base=h,m.export="const",m.type=h,m}if(p.length){let d=P({format:t.format,type:t.type});return m.base=d.base,m.export="generic",m.$refs=[...m.$refs,...d.$refs],m.imports=[...m.imports,...d.imports],m.isNullable=d.isNullable||m.isNullable,m.template=d.template,m.type=d.type,m.default=v(t,m),m}return m};var qt=e=>{if(e.schema)return e.schema;if(e.content){let t=Object.entries(e.content);for(let[r,s]of t)if(s.schema){let n=r;return e.content[n].schema}}};var vo=e=>{let t=S(),r={},s=[];return e.components?(Object.entries(e.components.schemas??{}).forEach(([n,o])=>{let a=Ct(n);r[a.name]=a;let i=I({definition:o,isDefinition:!0,meta:a,openApi:e,types:r});s=[...s,i];}),Object.entries(e.components.parameters??{}).forEach(([n,o])=>{let a=qt(o);if(!a){t.debug&&console.warn("Skipping generating parameter:",n);return}let i=bo(n);r[i.name]=i;let p=I({definition:a,isDefinition:!0,meta:i,openApi:e,types:r});p.deprecated=o.deprecated,p.description=o.description||null,s=[...s,p];}),{models:s,types:r}):{models:s,types:r}};var Eo=({openApi:e,parameter:t,types:r})=>{let s=S(),n={$refs:[],base:"unknown",deprecated:t.deprecated===!0,description:t.description||null,enum:[],enums:[],export:"interface",imports:[],in:t.in,isDefinition:!1,isNullable:ye(t),isReadOnly:!1,isRequired:t.required===!0,link:null,mediaType:null,prop:t.name,properties:[],template:null,type:"unknown"},o={...n,name:s.nameFn.operationParameter(n)};if(t.$ref){let i=P({type:t.$ref});return o={...o,$refs:[...o.$refs,...i.$refs],base:i.base,export:"reference",imports:[...o.imports,...i.imports],template:i.template,type:i.type},o}let a=qt(t);if(a){if(a.$ref?.startsWith(Be)&&(a=A(e,a)),a.$ref){let p=P({type:a.$ref});return o={...o,$refs:[...o.$refs,...p.$refs],base:p.base,export:"reference",imports:[...o.imports,...p.imports],template:p.template,type:p.type},o.default=v(a),o}let i=I({definition:a,openApi:e,types:r});return o={...o,$refs:[...o.$refs,...i.$refs],base:i.base,enum:[...o.enum,...i.enum],enums:[...o.enums,...i.enums],exclusiveMaximum:i.exclusiveMaximum,exclusiveMinimum:i.exclusiveMinimum,export:i.export,format:i.format,imports:[...o.imports,...i.imports],isNullable:o.isNullable||i.isNullable,isReadOnly:i.isReadOnly,isRequired:o.isRequired||i.isRequired,link:i.link,maxItems:i.maxItems,maxLength:i.maxLength,maxProperties:i.maxProperties,maximum:i.maximum,minItems:i.minItems,minLength:i.minLength,minProperties:i.minProperties,minimum:i.minimum,multipleOf:i.multipleOf,pattern:k(i.pattern),properties:[...o.properties,...i.properties],template:i.template,type:i.type,uniqueItems:i.uniqueItems},(o.enum.length||o.enums.length)&&!o.meta&&(o.meta=At(o)),o.default=i.default,o}return o};var $a=["cookie","formData","header","path","query"],St=({openApi:e,parameters:t,types:r})=>{let s=S(),n={$refs:[],imports:[],parameters:[],parametersBody:null,parametersCookie:[],parametersForm:[],parametersHeader:[],parametersPath:[],parametersQuery:[]};return t.forEach(o=>{let a=A(e,o),i=Eo({openApi:e,parameter:a,types:r}),p=s.filterFn?.operationParameter&&!s.filterFn?.operationParameter(i);if(!(!$a.includes(a.in)||p)){switch(a.in){case"cookie":n.parametersCookie=[...n.parametersCookie,i];break;case"formData":n.parametersForm=[...n.parametersForm,i];break;case"header":n.parametersHeader=[...n.parametersHeader,i];break;case"path":n.parametersPath=[...n.parametersPath,i];break;case"query":n.parametersQuery=[...n.parametersQuery,i];break}n.$refs=[...n.$refs,...i.$refs],n.imports=[...n.imports,...i.imports],n.parameters=[...n.parameters,i];}}),n};var Ia=["application/json-patch+json","application/json","application/ld+json","application/x-www-form-urlencoded","multipart/batch","multipart/form-data","multipart/mixed","multipart/related","text/json","text/plain"],kt=(e,t)=>{let r=Object.keys(t).filter(n=>{let o=n.split(";")[0].trim();return Ia.includes(o)}).find(n=>!!t[n]?.schema);if(r)return {mediaType:r,schema:t[r].schema};let s=Object.keys(t).find(n=>!!t[n]?.schema);if(s)return {mediaType:s,schema:t[s].schema}};var qo=({body:e,debug:t,openApi:r,types:s})=>{let n=e["x-body-name"]??"requestBody",o={$refs:[],base:"unknown",default:void 0,description:e.description||null,enum:[],enums:[],export:"interface",imports:[],in:"body",isDefinition:!1,isNullable:e.nullable===!0,isReadOnly:!1,isRequired:e.required===!0,link:null,mediaType:null,name:n,prop:n,properties:[],template:null,type:"unknown"};if(!e.content)return o;let a=kt(r,e.content);if(!a)return o;switch(o.mediaType=a.mediaType,o.mediaType){case"application/x-www-form-urlencoded":case"multipart/form-data":o.in="formData",o.name="formData",o.prop="formData";break}if(a.schema.$ref){let p=P({type:a.schema.$ref});return o.export="reference",o.type=p.type,o.base=p.base,o.template=p.template,o.$refs=[...o.$refs,...p.$refs],o.imports=[...o.imports,...p.imports],o}let i=I({debug:t,definition:a.schema,openApi:r,types:s});return o.$refs=[...o.$refs,...i.$refs],o.base=i.base,o.enum=[...o.enum,...i.enum],o.enums=[...o.enums,...i.enums],o.exclusiveMaximum=i.exclusiveMaximum,o.exclusiveMinimum=i.exclusiveMinimum,o.export=i.export,o.format=i.format,o.imports=[...o.imports,...i.imports],o.isNullable=o.isNullable||i.isNullable,o.isReadOnly=i.isReadOnly,o.isRequired=o.isRequired||i.isRequired,o.link=i.link,o.maximum=i.maximum,o.maxItems=i.maxItems,o.maxLength=i.maxLength,o.maxProperties=i.maxProperties,o.minimum=i.minimum,o.minItems=i.minItems,o.minLength=i.minLength,o.minProperties=i.minProperties,o.multipleOf=i.multipleOf,o.pattern=k(i.pattern),o.properties=[...o.properties,...i.properties],o.template=i.template,o.type=i.type,o.uniqueItems=i.uniqueItems,o};var So=({code:e,openApi:t,response:r,types:s})=>{let n={$refs:[],base:e!==204?"unknown":"void",code:e,description:r.description||null,enum:[],enums:[],export:"generic",imports:[],in:"response",isDefinition:!1,isNullable:!1,isReadOnly:!1,isRequired:!1,link:null,name:"",properties:[],responseTypes:[],template:null,type:e!==204?"unknown":"void"};if(r.content){let o=kt(t,r.content);if(o){if(o.schema.$ref?.startsWith("#/components/responses/")&&(o.schema=A(t,o.schema)),o.schema.$ref){let i=P({type:o.schema.$ref});return n.base=i.base,n.export="reference",n.$refs=[...n.$refs,...i.$refs],n.imports=[...n.imports,...i.imports],n.template=i.template,n.type=i.type,n}let a=I({definition:o.schema,openApi:t,types:s});return n.export=a.export,n.type=a.type,n.base=a.base,n.template=a.template,n.link=a.link,n.isReadOnly=a.isReadOnly,n.isRequired=a.isRequired,n.isNullable=a.isNullable,n.format=a.format,n.maximum=a.maximum,n.exclusiveMaximum=a.exclusiveMaximum,n.minimum=a.minimum,n.exclusiveMinimum=a.exclusiveMinimum,n.multipleOf=a.multipleOf,n.maxLength=a.maxLength,n.minLength=a.minLength,n.maxItems=a.maxItems,n.minItems=a.minItems,n.uniqueItems=a.uniqueItems,n.maxProperties=a.maxProperties,n.minProperties=a.minProperties,n.pattern=k(a.pattern),n.$refs=[...n.$refs,...a.$refs],n.imports=[...n.imports,...a.imports],n.enum=[...n.enum,...a.enum],n.enums=[...n.enums,...a.enums],n.properties=[...n.properties,...a.properties],n}}if(r.headers)for(let o in r.headers)return n.in="header",n.name=o,n.type="string",n.base="string",n;return n};var ko=({debug:e,openApi:t,responses:r,types:s})=>{let n=[];return Object.entries(r).forEach(([o,a])=>{let i=ht(o);if(!i)return;let p=A(t,a),c=So({code:i,openApi:t,response:p,types:s});n=[...n,c];}),n=Ot(n),n.sort(xt)};var Ke=(e,t)=>{let r=[...e],s=[...t];for(;s.length>0;){let n=s[0];s=s.slice(1),r.every(a=>a.in!==n.in||a.name!==n.name)&&(r=[...r,n]);}return r},No=({debug:e,method:t,op:r,openApi:s,pathParams:n,types:o,url:a})=>{let i=S(),p={$refs:[],deprecated:!!r.deprecated,description:r.description||null,id:r.operationId||null,imports:[],method:t.toUpperCase(),parameters:[],parametersBody:n.parametersBody,parametersCookie:[],parametersForm:[],parametersHeader:[],parametersPath:[],parametersQuery:[],path:a,responseHeader:null,responses:[],summary:r.summary||null,tags:r.tags||null},c={...p,name:i.nameFn.operation(p)};if(r.parameters){let m=St({openApi:s,parameters:r.parameters,types:o});c.$refs=[...c.$refs,...m.$refs],c.imports=[...c.imports,...m.imports],c.parameters=[...c.parameters,...m.parameters],c.parametersBody=m.parametersBody,c.parametersCookie=[...c.parametersCookie,...m.parametersCookie],c.parametersForm=[...c.parametersForm,...m.parametersForm],c.parametersHeader=[...c.parametersHeader,...m.parametersHeader],c.parametersPath=[...c.parametersPath,...m.parametersPath],c.parametersQuery=[...c.parametersQuery,...m.parametersQuery];}if(r.requestBody){let m=A(s,r.requestBody),u=qo({body:m,debug:e,openApi:s,types:o});c.$refs=[...c.$refs,...u.$refs],c.imports=[...c.imports,...u.imports],c.parameters=[...c.parameters,u],c.parametersBody=u;}if(r.responses){c.responses=ko({openApi:s,responses:r.responses,types:o});let m=c.responses.filter(u=>u.responseTypes.includes("success"));c.responseHeader=gt(m),m.forEach(u=>{c.$refs=[...c.$refs,...u.$refs],c.imports=[...c.imports,...u.imports];});}return c.parameters=Ke(c.parameters,n.parameters),c.parametersCookie=Ke(c.parametersCookie,n.parametersCookie),c.parametersForm=Ke(c.parametersForm,n.parametersForm),c.parametersHeader=Ke(c.parametersHeader,n.parametersHeader),c.parametersPath=Ke(c.parametersPath,n.parametersPath),c.parametersQuery=Ke(c.parametersQuery,n.parametersQuery),c.parameters=Pt(c.parameters),c};var wo=({openApi:e,types:t})=>{let r=S(),s=new Map,n=[];for(let o in e.paths){let a=e.paths[o],i=St({openApi:e,parameters:a.parameters??[],types:t});for(let p in a){let c=p,m=ge({method:c.toUpperCase(),path:o});if(ut.includes(c)){let u=a[c];if(u.operationId&&(s.has(u.operationId)?console.warn(`\u2757\uFE0F Duplicate operationId: ${u.operationId} in ${m}. Please ensure your operation IDs are unique. This behavior is not supported and will likely lead to unexpected results.`):s.set(u.operationId,m)),!r.filterFn?.operation||r.filterFn?.operation(m)){let d=No({method:c,op:u,openApi:e,pathParams:i,types:t,url:o});n.push(d);}}}}return n};var $o=e=>{let t=e.servers?.[0],r=t?.variables||{},s=t?.url||"";return Object.entries(r).forEach(([n,o])=>{s=s.replace(`{${n}}`,o.default);}),s.replace(/\/$/g,"")};var Io=e=>{let t=ft(e.info.version),r=$o(e),{models:s,types:n}=vo(e),o=wo({openApi:e,types:n});return {models:s,operations:o,server:r,types:n,version:t}};function Do({openApi:e,config:t}){if(eo(t),"openapi"in e)return Io(e);if("swagger"in e)return Oo(e);throw new Error(`Unsupported OpenAPI specification: ${JSON.stringify(e,null,2)}`)}var Mo=({spec:e})=>{let t=e;switch(t.openapi){case"3.0.3":return nn(t);case"3.1.0":return rn(t);default:throw new Error("Unsupported OpenAPI specification")}};var mn=(e,t)=>{let r=g();if(Array.isArray(e))return e.map(n=>mn(n));if(typeof e!="object"||e===null)return e;let s={...e};return Object.entries(s).forEach(([n,o])=>{if(r.schemas.type==="form"&&["description","x-enum-descriptions","x-enum-varnames","x-enumNames","title"].includes(n)&&t!=="properties"){delete s[n];return}n==="$ref"&&typeof o=="string"&&(s[n]=decodeURIComponent(o)),o&&typeof o=="object"&&(s[n]=mn(o,n));}),s},Da=(e,t)=>{let r=g(),s=z(e);return r.schemas.name?r.schemas.name(s,t):`${s}Schema`},jo=async({files:e,openApi:t})=>{let r=g();if(!r.schemas.export)return;e.schemas=new Q({dir:r.output.path,name:"schemas.ts"});let s=(n,o)=>{let a=mn(o),i=l.objectExpression({obj:a}),p=l.constVariable({assertion:"const",exportConst:!0,expression:i,name:Da(n,o)});e.schemas.add(p);};"swagger"in t&&Object.entries(t.definitions??{}).forEach(([n,o])=>{s(n,o);}),"openapi"in t&&Object.entries(t.components?.schemas??{}).forEach(([n,o])=>{s(n,o);});};var tt=e=>e.format==="date"||e.format==="date-time",ln=e=>{let t=g();return e.base==="binary"?l.typeUnionNode({types:["Blob","File"]}):t.types.dates&&tt(e)?l.typeNode("Date"):l.typeNode(e.base)},Ma=e=>{let t=e.base==="null"?!1:e.isNullable,r=ln(e);if(e.export==="reference"&&e.$refs.length===1&&e.$refs[0].startsWith(dt)){let n=Ct(e.base);r=l.typeNode(n.name);}return l.typeUnionNode({isNullable:t,types:[r]})},ja=e=>{if(e.link){if(Array.isArray(e.link)){let t=e.link.map(s=>W(s));return l.typeTupleNode({isNullable:e.isNullable,types:t})}if(e.export==="array"&&e.maxItems&&e.minItems&&e.maxItems===e.minItems&&e.maxItems<=100){let t=Array(e.maxItems).fill(W(e.link));return l.typeTupleNode({isNullable:e.isNullable,types:t})}return l.typeArrayNode([W(e.link)],e.isNullable)}return l.typeArrayNode([ln(e)],e.isNullable)},Ha=e=>{let t=e.enum.map(r=>Tt(r.value));return l.typeUnionNode({isNullable:e.isNullable,types:t})},Fa=e=>{let t=e.link&&!Array.isArray(e.link)?W(e.link):ln(e);return l.typeRecordNode(["string"],[t],e.isNullable)},Ho=({model:e,style:t})=>{let r=e.properties.map(n=>l.nodeToString({node:W(n),unescape:!0})).filter(H),s=t==="union"?l.typeUnionNode({isNullable:e.isNullable&&!e.properties.find(n=>n.isNullable),types:r}):l.typeIntersectionNode({isNullable:e.isNullable,types:r});return e.meta?s:l.typeParenthesizedNode({type:s})},Ba=e=>{if(!e.properties.length)return l.typeNode("unknown");let t=g(),r=R(t),s=e.properties.map(n=>{let o=n.isRequired?"":"?",a=W(n),i=r?/^\dXX$/.test(n.name)?te(n.name):n.name:te(Me(un(n.name)));return n.name==="[key: string]"&&(i=n.name,o&&(o="",a=l.typeUnionNode({types:[a,"undefined"]}))),{comment:[n.description&&w(n.description),n.deprecated&&"@deprecated"],isReadOnly:n.isReadOnly,isRequired:o==="",name:i,type:a}});return l.typeInterfaceNode({isNullable:e.isNullable,properties:s})},W=e=>{switch(e.export){case"all-of":return Ho({model:e,style:"intersection"});case"any-of":case"one-of":return Ho({model:e,style:"union"});case"array":return ja(e);case"dictionary":return Fa(e);case"enum":return Ha(e);case"interface":return Ba(e);case"const":case"generic":case"reference":default:return Ma(e)}},G=({client:e,count:t=1,create:r=!1,meta:s,nameTransformer:n})=>{let o={created:!1,name:""},a=s.name;n&&(a=n(a)),t>1&&(a=`${a}${t}`);let i=e.types[a];return i?i.$ref===s.$ref?o={created:!1,name:a}:o=G({client:e,count:t+1,create:r,meta:s,nameTransformer:n}):r&&(e.types[a]=s,o={created:!0,name:a}),o},Fo=({client:e,name:t})=>{let r={deleted:!1,name:""};return e.types[t]&&(delete e.types[t],r={deleted:!0,name:t}),r},un=e=>{let t=g();return R(t)?j({input:pn(e)}).replace(ee,"_$1"):e};var qe=({meta:e,onImport:t,...r})=>{if(!e)return {created:!1,name:""};let{created:s,name:n}=G({meta:e,...r});return n&&t(n),{created:s,name:n}},Vo=e=>`${e}ModelResponseTransformer`,Se=e=>`${j({input:e,pascalCase:!0})}Data`,Qe=e=>`${j({input:e,pascalCase:!0})}Error`,fn=e=>`${e}Transformer`,pe=e=>`${j({input:e,pascalCase:!0})}Response`,dn=(e,t)=>{let r=Te();return t?`${r}<${e||"unknown"}, ${t}>`:e?`${r}<${e}>`:r},Bo=(e,t)=>{let r=g(),{name:s}=G({client:e,meta:{$ref:t.name,name:t.name},nameTransformer:Se}),n=ae(t.parameters);if(!R(r))return [{isRequired:n,name:"options",type:dn(s,"ThrowOnError")}];if(!t.parameters.length)return [];let o=a=>{if(a.default!==void 0)return JSON.stringify(a.default,null,4)};return r.useOptions?[{default:n?void 0:{},name:"data",type:s}]:t.parameters.map(a=>{let i=`${s}['${a.name}']`;return {default:a?.default,isRequired:(!a.isRequired&&!o(a)?"?":"")=="",name:a.name,type:i}})},Lo=(e,t)=>{let r=g(),s=l.typeNode("void");if(t.responses.filter(o=>o.responseTypes.includes("success")).length){let{name:o}=G({client:e,meta:{$ref:t.name,name:t.name},nameTransformer:pe});s=l.typeUnionNode({types:[o]});}return r.useOptions&&r.services.response==="response"&&(s=l.typeNode("ApiResult",[s])),r.client.name==="legacy/angular"?s=l.typeNode("Observable",[s]):s=l.typeNode("CancelablePromise",[s]),s},_o=e=>{let t=g();if(!R(t))return [e.deprecated&&"@deprecated",e.summary&&w(e.summary),e.description&&w(e.description)];let r=[];e.parameters.length&&(t.useOptions?r=["@param data The data for the request.",...e.parameters.map(o=>`@param data.${o.name} ${o.description?w(o.description):""}`)]:r=e.parameters.map(o=>`@param ${o.name} ${o.description?w(o.description):""}`));let s=e.responses.filter(o=>o.responseTypes.includes("success"));return [e.deprecated&&"@deprecated",e.summary&&w(e.summary),e.description&&w(e.description),...r,...s.map(o=>`@returns ${o.type} ${o.description?w(o.description):""}`),"@throws ApiError"]},La=(e,t,r,s)=>{let n=g(),o=pe(t.name),{name:a}=G({client:e,meta:{$ref:`transformers/${o}`,name:o},nameTransformer:fn});if(a&&r(a),!R(n)){let m=[{spread:"options"}],d=t.parameters.filter(h=>h.in==="body"||h.in==="formData").map(h=>h.mediaType||(h.in==="formData"?"multipart/form-data":void 0)).filter(Boolean).filter(H);return d.length===1&&(d[0]==="multipart/form-data"&&(m=[...m,{spread:"formDataBodySerializer"},{key:"headers",value:[{key:"Content-Type",value:null},{spread:"options?.headers"}]}],s?.("formDataBodySerializer")),d[0]==="application/x-www-form-urlencoded"&&(m=[...m,{spread:"urlSearchParamsBodySerializer"},{key:"headers",value:[{key:"Content-Type",value:d[0]},{spread:"options?.headers"}]}],s?.("urlSearchParamsBodySerializer"))),m=[...m,{key:"url",value:t.path}],a&&(m=[...m,{key:"responseTransformer",value:a}]),l.objectExpression({identifiers:["responseTransformer"],obj:m})}let i=m=>m.reduce((u,d)=>{let h=d.prop,O=n.useOptions?`data.${d.name}`:d.name;return h===O?u[h]=h:te(h)===h?u[h]=O:u[`'${h}'`]=O,u},{}),p={method:t.method,url:t.path};t.parametersPath.length&&(p.path=i(t.parametersPath)),t.parametersCookie.length&&(p.cookies=i(t.parametersCookie)),t.parametersHeader.length&&(p.headers=i(t.parametersHeader)),t.parametersQuery.length&&(p.query=i(t.parametersQuery)),t.parametersForm.length&&(p.formData=i(t.parametersForm)),t.parametersBody&&(t.parametersBody.in==="formData"&&(n.useOptions?p.formData=`data.${t.parametersBody.name}`:p.formData=t.parametersBody.name),t.parametersBody.in==="body"&&(n.useOptions?p.body=`data.${t.parametersBody.name}`:p.body=t.parametersBody.name)),t.parametersBody?.mediaType&&(p.mediaType=t.parametersBody?.mediaType),t.responseHeader&&(p.responseHeader=t.responseHeader),a&&(p.responseTransformer=a);let c=t.responses.filter(m=>m.responseTypes.includes("error"));if(c.length>0){let m={};c.forEach(u=>{m[u.code]=u.description??"";}),p.errors=m;}return l.objectExpression({identifiers:["body","cookies","formData","headers","path","query","responseTransformer"],obj:p,shorthand:!0})},he=(e,t)=>{let r=g();return r.services.methodNameBuilder?r.services.methodNameBuilder(e):t&&e.name.match(ee)?`${e.name}_`:e.name},Uo=(e,t,r,s)=>{let n=g(),o=La(e,t,r,s);if(!R(n)){let a=G({client:e,meta:{$ref:t.name,name:t.name},nameTransformer:Qe}).name,p=t.responses.filter(c=>c.responseTypes.includes("success")).length?G({client:e,meta:{$ref:t.name,name:t.name},nameTransformer:pe}).name:"void";return [l.returnFunctionCall({args:[o],name:`(options?.client ?? client).${t.method.toLocaleLowerCase()}`,types:a&&p?[p,a,"ThrowOnError"]:a?["unknown",a,"ThrowOnError"]:p?[p,"unknown","ThrowOnError"]:[]})]}return n.name?[l.returnFunctionCall({args:[o],name:"this.httpRequest.request"})]:n.client.name==="legacy/angular"?[l.returnFunctionCall({args:["OpenAPI","this.http",o],name:"__request"})]:[l.returnFunctionCall({args:["OpenAPI",o],name:"__request"})]},_a=({client:e,onClientImport:t,onImport:r,onNode:s,service:n})=>{let o=g(),a=R(o);for(let m of n.operations)m.parameters.length&&qe({client:e,meta:{$ref:m.name,name:m.name},nameTransformer:Se,onImport:r}),a||qe({client:e,meta:{$ref:m.name,name:m.name},nameTransformer:Qe,onImport:r}),m.responses.filter(d=>d.responseTypes.includes("success")).length&&qe({client:e,meta:{$ref:m.name,name:m.name},nameTransformer:pe,onImport:r});let i={default:!1,extends:"boolean",name:"ThrowOnError"};if(!o.services.asClass&&!o.name){for(let m of n.operations){let u={parameters:Bo(e,m),returnType:a?Lo(e,m):void 0,statements:Uo(e,m,r,t),types:a?void 0:[i]},d=o.client.name==="legacy/angular"?l.anonymousFunction(u):l.arrowFunction(u),h=l.constVariable({comment:_o(m),exportConst:!0,expression:d,name:he(m,!0)});s(h);}return}let p=n.operations.map(m=>l.methodDeclaration({accessLevel:"public",comment:_o(m),isStatic:o.name===void 0&&o.client.name!=="legacy/angular",name:he(m,!1),parameters:Bo(e,m),returnType:a?Lo(e,m):void 0,statements:Uo(e,m,r,t),types:a?void 0:[i]}));if(!p.length)return;o.name?p=[l.constructorDeclaration({multiLine:!1,parameters:[{accessLevel:"public",isReadOnly:!0,name:"httpRequest",type:"BaseHttpRequest"}]}),...p]:o.client.name==="legacy/angular"&&(p=[l.constructorDeclaration({multiLine:!1,parameters:[{accessLevel:"public",isReadOnly:!0,name:"http",type:"HttpClient"}]}),...p]);let c=l.classDeclaration({decorator:o.client.name==="legacy/angular"?{args:[{providedIn:"root"}],name:"Injectable"}:void 0,members:p,name:Le(n.name)});s(c);},Ua=({files:e})=>{if(!g().client.name)throw new Error("\u{1F6AB} client needs to be set to generate services - which HTTP client do you want to use?");if(!e.types)throw new Error("\u{1F6AB} types need to be exported to generate services - enable type generation")},Ko=async({client:e,files:t})=>{let r=g();if(!r.services.export)return;Ua({files:t});let s=R(r),n="services";if(t.services=new Q({dir:r.output.path,name:`${n}.ts`}),s?(r.client.name==="legacy/angular"?(t.services.import({module:"@angular/core",name:"Injectable"}),r.name||t.services.import({module:"@angular/common/http",name:"HttpClient"}),t.services.import({asType:!0,module:"rxjs",name:"Observable"})):t.services.import({asType:!0,module:"./core/CancelablePromise",name:"CancelablePromise"}),r.services.response==="response"&&t.services.import({asType:!0,module:"./core/ApiResult",name:"ApiResult"}),r.name?t.services.import({asType:r.client.name!=="legacy/angular",module:"./core/BaseHttpRequest",name:"BaseHttpRequest"}):(t.services.import({module:"./core/OpenAPI",name:"OpenAPI"}),t.services.import({alias:"__request",module:"./core/request",name:"request"}))):(t.services.import({module:Ce({sourceOutput:n}),name:"createClient"}),t.services.import({module:Ce({sourceOutput:n}),name:"createConfig"}),t.services.import({asType:!0,module:Ce({sourceOutput:n}),name:Te()})),!s){let o=l.constVariable({exportConst:!0,expression:l.callExpression({functionName:"createClient",parameters:[l.callExpression({functionName:"createConfig"})]}),name:"client"});t.services.add(o);}for(let o of e.services)_a({client:e,onClientImport:a=>{t.services.import({module:Ce({sourceOutput:n}),name:a});},onImport:a=>{t.services.import({asType:!a.endsWith("Transformer"),module:`./${t.types.getName(!1)}`,name:a});},onNode:a=>{t.services.add(a);},service:o});};var Va="$OpenApiTs",D={$refs:[],base:"",description:null,enum:[],enums:[],export:"interface",imports:[],in:"",isDefinition:!1,isNullable:!1,isReadOnly:!1,isRequired:!1,link:null,name:"",properties:[],template:null,type:""},Ka=({leadingComment:e,comments:t,meta:r,obj:s,onNode:n,...o})=>{if(!r)return;let{created:a,name:i}=G({create:!0,meta:r,...o});if(a){let p=l.enumDeclaration({comments:t,leadingComment:e,name:i,obj:s});n(p);}},le=({comment:e,meta:t,onCreated:r,onNode:s,type:n,...o})=>{if(!t)return {created:!1,name:""};let a=G({create:!0,meta:t,...o}),{created:i,name:p}=a;if(i){let c=l.typeAliasDeclaration({comment:e,exportType:!0,name:p,type:n});s(c),r?.(p);}return a},Qa=e=>{let t=g(),r=[];Wo(e),e.model.enums.forEach(s=>t.types.enums!=="typescript+namespace"?Qo({...e,model:s}):Wa({...e,model:s,onNode:n=>{r.push(n);}})),r.length&&e.onNode(l.namespaceDeclaration({name:e.model.name,statements:r}));},Qo=({client:e,model:t,onNode:r})=>{let s=g(),n={},o={};t.enum.forEach(i=>{let{key:p,value:c}=Rt(i);n[p]=c;let m=i.customDescription||i.description;m&&(o[p]=[w(m)]);});let a=[t.description&&w(t.description),t.deprecated&&"@deprecated"];if(s.types.enums==="typescript"||s.types.enums==="typescript+namespace"){Ka({client:e,comments:o,leadingComment:a,meta:t.meta,obj:n,onNode:r});return}le({client:e,comment:a,meta:t.meta,onCreated:i=>{if(s.types.enums==="javascript"){let p=l.objectExpression({multiLine:!0,obj:Object.entries(n).map(([m,u])=>({comments:o[m],key:m,value:u})),unescape:!0}),c=l.constVariable({assertion:"const",comment:a,exportConst:!0,expression:p,name:i});r(c);}},onNode:r,type:Po(t.enum)});},Wa=({model:e,onNode:t})=>{let r={},s={};e.enum.forEach(n=>{let{key:o,value:a}=Rt(n);r[o]=a;let i=n.customDescription||n.description;i&&(s[o]=[w(i)]);}),t(l.enumDeclaration({comments:s,leadingComment:[e.description&&w(e.description),e.deprecated&&"@deprecated"],name:e.meta?.name||e.name,obj:r}));},Wo=({client:e,model:t,onNode:r})=>{le({client:e,comment:[t.description&&w(t.description),t.deprecated&&"@deprecated"],meta:t.meta,onNode:r,type:W(t)});},Ga=e=>{switch(e.model.export){case"all-of":case"any-of":case"one-of":case"interface":return Qa(e);case"enum":return Qo(e);default:return Wo(e)}},Xa=({client:e,onNode:t})=>{let r={},s=g();if(!s.services.export&&!s.types.tree)return;let n=R(s);for(let a of e.services)for(let i of a.operations){if(!i.parameters.length&&!i.responses.length)continue;r[i.path]||(r[i.path]={});let p=r[i.path];p[i.method]||(p[i.method]={});let c=p[i.method];if(c.$ref=i.name,i.responses.length>0){if(c.res||(c.res={}),Array.isArray(c.res))continue;i.responses.forEach(u=>{c.res[u.code]=u;});}if(i.parameters.length>0){let u={mediaType:null,...D,in:"body",name:"body",prop:"body"},d=i.parameters.filter(C=>C.in==="body");d.length||(d=i.parameters.filter(C=>C.in==="formData")),d.length===1?u={...D,...d[0],in:"body",isRequired:d[0].isRequired,name:"body",prop:"body"}:d.length>1&&(u={...D,in:"body",isRequired:d.some(C=>C.isRequired),mediaType:"multipart/form-data",name:"body",prop:"body",properties:d});let h={...D,in:"header",isRequired:ae(i.parameters.filter(C=>C.in==="header")),mediaType:null,name:n?"header":"headers",prop:n?"header":"headers",properties:i.parameters.filter(C=>C.in==="header").sort(Ge)},O={...D,in:"path",isRequired:ae(i.parameters.filter(C=>C.in==="path")),mediaType:null,name:"path",prop:"path",properties:i.parameters.filter(C=>C.in==="path").sort(Ge)},x={...D,in:"query",isRequired:ae(i.parameters.filter(C=>C.in==="query")),mediaType:null,name:"query",prop:"query",properties:i.parameters.filter(C=>C.in==="query").sort(Ge)},E=n?Xe([...i.parameters]):[u,h,O,x].filter(C=>C.properties.length||C.$refs.length||C.mediaType);c.req=E,le({client:e,meta:{$ref:i.name,name:i.name},nameTransformer:Se,onNode:t,type:W({...D,isRequired:!0,properties:E})});}let m=i.responses.filter(u=>u.responseTypes.includes("success"));if(m.length>0){le({client:e,meta:{$ref:i.name,name:i.name},nameTransformer:pe,onNode:t,type:W({...D,export:"any-of",isRequired:!0,properties:m})});let u=i.responses.filter(d=>d.responseTypes.includes("error"));n||le({client:e,meta:{$ref:i.name,name:i.name},nameTransformer:Qe,onNode:t,type:W(u.length?{...D,export:"one-of",isRequired:!0,properties:u}:{...D,base:"unknown",isRequired:!0,type:"unknown"})});}}let o=Object.entries(r).map(([a,i])=>{let p=Object.entries(i).map(([m,u])=>{let d=m,h=[];if(u.req){let x=u.$ref,{name:E}=G({client:e,meta:{$ref:x,name:x},nameTransformer:Se}),C={...D,base:E,export:"reference",isRequired:!0,name:"req",properties:[],type:E};h=[...h,C];}if(u.res){let x=Object.entries(u.res).map(([C,ue])=>({...D,...ue,isRequired:!0,name:String(C)})),E={...D,isRequired:!0,name:"res",properties:x};h=[...h,E];}return {...D,isRequired:!0,name:d.toLocaleLowerCase(),properties:h}}).filter(Boolean);return {...D,isRequired:!0,name:`'${a}'`,properties:p}});s.types.tree&&le({client:e,meta:{$ref:"@hey-api/openapi-ts",name:Va},onNode:t,type:W({...D,properties:o})});},Go=async({client:e,files:t})=>{let r=g();r.types.export&&(t.types=new Q({dir:r.output.path,name:"types.ts"}));let s=n=>{t.types?.add(n);};for(let n of e.models)Ga({client:e,model:n,onNode:s});Xa({client:e,onNode:s});};var xe="data",Ja=e=>e.base==="unknown"&&e.export==="generic"&&e.type==="unknown",Xo=({client:e,model:t})=>t.$refs.map(s=>{let n=e.models.find(o=>o.meta?.$ref===s);if(!n)throw new Error(`Ref ${s} could not be found. Transformers cannot be generated without having access to all refs.`);return n}),zo=e=>{let t=e.model.meta.name,{name:r}=le({...e,meta:{$ref:`transformers/${t}`,name:t},nameTransformer:Vo,onCreated:n=>{let o=Nt({...e,meta:{$ref:`transformers/${t}`,name:n},path:[xe]});Jo({...e,async:!1,name:n,statements:o});},type:`(${xe}: any) => ${t}`});return {created:!!e.client.types[r],name:r}},Ya=e=>{let{model:t}=e,r=Xo(e);if(r.length===1){let{created:s,name:n}=zo({...e,model:r[0]});return s?[l.transformArrayMutation({path:e.path,transformerName:n})]:[]}return tt(t)||t.link&&!Array.isArray(t.link)&&t.link.export==="any-of"&&t.link.properties.find(s=>tt(s))?[l.transformArrayMap({path:e.path,transformExpression:l.conditionalExpression({condition:l.identifier({text:"item"}),whenFalse:l.identifier({text:"item"}),whenTrue:l.transformNewDate({parameterName:"item"})})})]:[]},Za=e=>{let{model:t}=e,r=[...e.path,t.name];return t.type==="string"&&t.export!=="array"&&tt(t)?[l.transformDateMutation({path:r})]:Nt({...e,model:t,path:r})},Nt=e=>{let{model:t}=e;switch(t.export){case"array":return Ya(e);case"interface":return t.properties.flatMap(r=>Za({...e,model:r}));case"reference":{if(t.$refs.length!==1)return [];let r=Xo(e),{created:s,name:n}=zo({...e,model:r[0]});return s?t.in==="response"?[l.expressionToStatement({expression:l.callExpression({functionName:n,parameters:[xe]})})]:l.transformFunctionMutation({path:e.path,transformerName:n}):[]}default:return []}},Jo=({async:e,client:t,name:r,onNode:s,onRemoveNode:n,statements:o})=>{let a={created:!1,name:r};if(!o.length)return Fo({client:t,name:r}),n?.(),a;let i=l.arrowFunction({async:e,multiLine:!0,parameters:[{name:xe}],statements:[...o,l.returnVariable({expression:xe})]}),p=l.constVariable({exportConst:!0,expression:i,name:r,typeName:r});return s(p),{created:!0,name:r}},Yo=async({client:e,onNode:t,onRemoveNode:r})=>{let s=g();for(let n of e.services)for(let o of n.operations){let a=o.responses.filter(c=>c.responseTypes.includes("success"));if(!a.length)continue;let i=a.filter(c=>!Ja(c));if(!i.length)continue;if(i.length>1){s.debug&&console.warn(`\u2757\uFE0F Transformers warning: route ${ge(o)} has ${i.length} non-void success responses. This is currently not handled and we will not generate a response transformer. Please open an issue if you'd like this feature https://github.com/hey-api/openapi-ts/issues`);continue}let p=pe(o.name);le({client:e,meta:{$ref:`transformers/${p}`,name:p},nameTransformer:fn,onCreated:c=>{let m=a.length>1?a.flatMap(u=>{let d=Nt({client:e,meta:{$ref:`transformers/${p}`,name:p},model:u,onNode:t,onRemoveNode:r,path:[xe]});return d.length?[l.ifStatement({expression:l.safeAccessExpression(["data"]),thenStatement:y__default.default.factory.createBlock(d)})]:[]}):Nt({client:e,meta:{$ref:`transformers/${p}`,name:p},model:a[0],onNode:t,onRemoveNode:r,path:[xe]});Jo({async:!0,client:e,name:c,onNode:t,onRemoveNode:r,statements:m});},onNode:t,type:`(${xe}: any) => Promise<${p}>`});}};var es=async(e,t,r)=>{let s=g();if(s.services.include&&s.services.asClass){let a=new RegExp(s.services.include);t.services=t.services.filter(i=>a.test(i.name));}if(s.types.include){let a=new RegExp(s.types.include);t.models=t.models.filter(i=>a.test(i.name));}let n=K__default.default.resolve(s.output.path),o={};await dr(n,s.client.name),await Go({client:t,files:o}),await jo({files:o,openApi:e}),s.services.export&&t.services.length&&s.types.dates==="types+transform"&&await Yo({client:t,onNode:a=>{o.types?.add(a);},onRemoveNode:()=>{o.types?.removeNode();}}),await Ko({client:t,files:o}),await fr(e,n,t,r),await yr(K__default.default.resolve(s.output.path,"core"),t,r),await Jr({files:o}),await Yr({client:t,files:o}),Object.entries(o).forEach(([a,i])=>{s.dryRun||(a==="index"?i.write():i.write(`

`));});};var wt={handler:()=>{},name:"@hey-api/schemas",output:"schemas"};var $t={handler:()=>{},name:"@hey-api/services",output:"services"};var It={handler:()=>{},name:"@hey-api/types",output:"types"};var ep=e=>`${he(e,!1)}InfiniteOptions`,tp=e=>`${he(e,!1)}Mutation`,np=e=>`${he(e,!1)}Options`,Dt=(e,t)=>`${he(e,!1)}${t?"Infinite":""}QueryKey`,rp=({files:e})=>{if(!e.services)throw new Error("\u{1F6AB} services need to be exported to use TanStack Query plugin - enable service generation")},op=e=>{switch(e.in){case"formData":return "body";case"header":return "headers";default:return e.in}},We=/^(cursor|offset|page|start)/,sp="createInfiniteParams",cs="createQueryKey",ts="infiniteQueryOptions",ns="mutationOptions",hn="QueryKey",rs="queryOptions",nt="TOptions",gn=()=>g().client.name==="@hey-api/client-axios"?"baseURL":"baseUrl",ip=({file:e})=>{let t=l.constVariable({expression:l.arrowFunction({multiLine:!0,parameters:[{name:"queryKey",type:l.typeNode("QueryKey<Options>")},{name:"page",type:l.typeNode("K")}],statements:[l.constVariable({expression:l.identifier({text:"queryKey[0]"}),name:"params"}),l.ifStatement({expression:l.propertyAccessExpression({expression:l.identifier({text:"page"}),name:l.identifier({text:"body"})}),thenStatement:y__default.default.factory.createBlock([l.expressionToStatement({expression:l.binaryExpression({left:l.propertyAccessExpression({expression:"params",name:"body"}),right:l.objectExpression({multiLine:!0,obj:[{assertion:"any",spread:"queryKey[0].body"},{assertion:"any",spread:"page.body"}]})})})],!0)}),l.ifStatement({expression:l.propertyAccessExpression({expression:l.identifier({text:"page"}),name:l.identifier({text:"headers"})}),thenStatement:y__default.default.factory.createBlock([l.expressionToStatement({expression:l.binaryExpression({left:l.propertyAccessExpression({expression:"params",name:"headers"}),right:l.objectExpression({multiLine:!0,obj:[{spread:"queryKey[0].headers"},{spread:"page.headers"}]})})})],!0)}),l.ifStatement({expression:l.propertyAccessExpression({expression:l.identifier({text:"page"}),name:l.identifier({text:"path"})}),thenStatement:y__default.default.factory.createBlock([l.expressionToStatement({expression:l.binaryExpression({left:l.propertyAccessExpression({expression:"params",name:"path"}),right:l.objectExpression({multiLine:!0,obj:[{spread:"queryKey[0].path"},{spread:"page.path"}]})})})],!0)}),l.ifStatement({expression:l.propertyAccessExpression({expression:l.identifier({text:"page"}),name:l.identifier({text:"query"})}),thenStatement:y__default.default.factory.createBlock([l.expressionToStatement({expression:l.binaryExpression({left:l.propertyAccessExpression({expression:"params",name:"query"}),right:l.objectExpression({multiLine:!0,obj:[{spread:"queryKey[0].query"},{spread:"page.query"}]})})})],!0)}),l.returnVariable({expression:y__default.default.factory.createAsExpression(y__default.default.factory.createAsExpression(l.identifier({text:"params"}),y__default.default.factory.createKeywordTypeNode(y__default.default.SyntaxKind.UnknownKeyword)),y__default.default.factory.createTypeQueryNode(l.identifier({text:"page"})))})],types:[{extends:l.typeReferenceNode({typeName:l.identifier({text:"Pick<QueryKey<Options>[0], 'body' | 'headers' | 'path' | 'query'>"})}),name:"K"}]}),name:sp});e.add(t);},os=({file:e})=>{let t=l.indexedAccessTypeNode({indexType:l.typeNode(0),objectType:l.typeNode(hn,[l.typeNode(nt)])}),r=l.identifier({text:"infinite"}),s=l.constVariable({expression:l.arrowFunction({multiLine:!0,parameters:[{name:"id",type:l.typeNode("string")},{isRequired:!1,name:"options",type:l.typeNode(nt)},{isRequired:!1,name:"infinite",type:l.typeNode("boolean")}],returnType:t,statements:[l.constVariable({assertion:t,expression:l.objectExpression({multiLine:!1,obj:[{key:"_id",value:l.identifier({text:"id"})},{key:gn(),value:l.identifier({text:`(options?.client ?? client).getConfig().${gn()}`})}]}),name:"params",typeName:t}),l.ifStatement({expression:r,thenStatement:y__default.default.factory.createBlock([l.expressionToStatement({expression:l.binaryExpression({left:l.propertyAccessExpression({expression:"params",name:"_infinite"}),right:r})})],!0)}),l.ifStatement({expression:l.propertyAccessExpression({expression:l.identifier({text:"options"}),isOptional:!0,name:l.identifier({text:"body"})}),thenStatement:y__default.default.factory.createBlock([l.expressionToStatement({expression:l.binaryExpression({left:l.propertyAccessExpression({expression:"params",name:"body"}),right:l.propertyAccessExpression({expression:"options",name:"body"})})})],!0)}),l.ifStatement({expression:l.propertyAccessExpression({expression:l.identifier({text:"options"}),isOptional:!0,name:l.identifier({text:"headers"})}),thenStatement:y__default.default.factory.createBlock([l.expressionToStatement({expression:l.binaryExpression({left:l.propertyAccessExpression({expression:"params",name:"headers"}),right:l.propertyAccessExpression({expression:"options",name:"headers"})})})],!0)}),l.ifStatement({expression:l.propertyAccessExpression({expression:l.identifier({text:"options"}),isOptional:!0,name:l.identifier({text:"path"})}),thenStatement:y__default.default.factory.createBlock([l.expressionToStatement({expression:l.binaryExpression({left:l.propertyAccessExpression({expression:"params",name:"path"}),right:l.propertyAccessExpression({expression:"options",name:"path"})})})],!0)}),l.ifStatement({expression:l.propertyAccessExpression({expression:l.identifier({text:"options"}),isOptional:!0,name:l.identifier({text:"query"})}),thenStatement:y__default.default.factory.createBlock([l.expressionToStatement({expression:l.binaryExpression({left:l.propertyAccessExpression({expression:"params",name:"query"}),right:l.propertyAccessExpression({expression:"options",name:"query"})})})],!0)}),l.returnVariable({expression:"params"})],types:[{extends:l.typeReferenceNode({typeName:l.identifier({text:Te()})}),name:nt}]}),name:cs});e.add(s);},ss=({file:e})=>{let t=[{name:"_id",type:l.keywordTypeNode({keyword:"string"})},{isRequired:!1,name:"_infinite",type:l.keywordTypeNode({keyword:"boolean"})}],r=l.typeAliasDeclaration({name:hn,type:l.typeTupleNode({types:[l.typeIntersectionNode({types:[l.typeReferenceNode({typeName:`Pick<${nt}, '${gn()}' | 'body' | 'headers' | 'path' | 'query'>`}),l.typeInterfaceNode({properties:t})]})]}),typeParameters:[{extends:l.typeReferenceNode({typeName:l.identifier({text:Te()})}),name:nt}]});e.add(r);},yn=({client:e,file:t,operation:r,typesModulePath:s})=>{let{name:n}=qe({client:e,meta:r.parameters.length?{$ref:r.name,name:r.name}:void 0,nameTransformer:Se,onImport:a=>{t.import({asType:!0,module:s,name:a});}});return {typeData:dn(n)}},is=({client:e,file:t,operation:r,pluginName:s,typesModulePath:n})=>{let o=g(),{name:a}=qe({client:e,meta:{$ref:r.name,name:r.name},nameTransformer:Qe,onImport:p=>{t.import({asType:!0,module:n,name:p});}}),i={asType:!0,name:a};if(i.name||(i=t.import({asType:!0,module:s,name:"DefaultError"})),o.client.name==="@hey-api/client-axios"){let p=t.import({asType:!0,module:"axios",name:"AxiosError"});i={...p,name:`${p.name}<${i.name}>`};}return {typeError:i}},as=({client:e,file:t,operation:r,typesModulePath:s})=>{let{name:n}=qe({client:e,meta:{$ref:r.name,name:r.name},nameTransformer:pe,onImport:a=>{t.import({asType:!0,module:s,name:a});}});return {typeResponse:n||"void"}},ps=({isInfinite:e,operation:t})=>l.arrayLiteralExpression({elements:[l.callExpression({functionName:cs,parameters:[l.stringLiteral({text:t.name}),"options",e?l.ots.boolean(!0):void 0]})],multiLine:!1}),Oe=({client:e,files:t,plugin:r})=>{rp({files:t});let s=g(),n=t[r.name];n.import({asType:!0,module:Ce({sourceOutput:r.output}),name:Te()});let o=ze({moduleOutput:t.types.getName(!1),sourceOutput:r.output}),a=r.name==="@tanstack/svelte-query"||r.name==="@tanstack/solid-query"?"MutationOptions":"UseMutationOptions",i,p=!1,c=!1,m=!1,u=!1,d=!1,h=new Map;for(let O of e.services)for(let x of O.operations){let E=ge(x);if(h.has(E))continue;h.set(E,!0);let C=[s.services.asClass&&Le(O.name),he(x,!s.services.asClass)].filter(Boolean).join("."),ue=!1;if(r.queryOptions&&["GET","POST"].includes(x.method)){d||(d=!0,c||(ss({file:n}),os({file:n}),c=!0),n.import({module:r.name,name:rs})),ue=!0;let{typeData:_}=yn({client:e,file:n,operation:x,typesModulePath:o}),J=ae(x.parameters),F=l.constVariable({exportConst:!0,expression:l.arrowFunction({parameters:[{isRequired:J,name:"options",type:_}],statements:ps({operation:x})}),name:Dt(x)});n.add(F);let Y=l.arrowFunction({parameters:[{isRequired:J,name:"options",type:_}],statements:[l.returnFunctionCall({args:[l.objectExpression({obj:[{key:"queryFn",value:l.arrowFunction({async:!0,multiLine:!0,parameters:[{destructure:[{name:"queryKey"}]}],statements:[l.constVariable({destructure:!0,expression:l.awaitExpression({expression:l.callExpression({functionName:C,parameters:[l.objectExpression({multiLine:!0,obj:[{spread:"options"},{spread:"queryKey[0]"},{key:"throwOnError",value:!0}]})]})}),name:"data"}),l.returnVariable({expression:"data"})]})},{key:"queryKey",value:l.callExpression({functionName:Dt(x),parameters:["options"]})}]})],name:rs})]}),be=l.constVariable({comment:[],exportConst:!0,expression:Y,name:np(x)});n.add(be);}if(r.infiniteQueryOptions&&["GET","POST"].includes(x.method)){let _,J=x.parameters.find(F=>{if(We.lastIndex=0,We.test(F.name))return _=F,!0;if(F.in==="body"){if(F.export==="reference"){let Y=F.$refs[0];return e.models.find(Pe=>Pe.meta?.$ref===Y)?.properties.find(Pe=>{if(We.lastIndex=0,We.test(Pe.name))return _=Pe,!0})}return F.properties.find(Y=>{if(We.lastIndex=0,We.test(Y.name))return _=Y,!0})}});if(J&&_){m||(m=!0,c||(ss({file:n}),os({file:n}),c=!0),p||(ip({file:n}),p=!0),n.import({module:r.name,name:ts}),i=n.import({asType:!0,module:r.name,name:"InfiniteData"})),ue=!0;let{typeData:F}=yn({client:e,file:n,operation:x,typesModulePath:o}),{typeError:Y}=is({client:e,file:n,operation:x,pluginName:r.name,typesModulePath:o}),{typeResponse:be}=as({client:e,file:n,operation:x,typesModulePath:o}),Pe=ae(x.parameters),_t=`${hn}<${F}>`,Pn=`Pick<${_t}[0], 'body' | 'headers' | 'path' | 'query'>`,li=`${_.base} | ${Pn}`,ui=l.constVariable({exportConst:!0,expression:l.arrowFunction({parameters:[{isRequired:Pe,name:"options",type:F}],returnType:_t,statements:ps({isInfinite:!0,operation:x})}),name:Dt(x,!0)});n.add(ui);let fi=l.arrowFunction({parameters:[{isRequired:Pe,name:"options",type:F}],statements:[l.returnFunctionCall({args:[l.objectExpression({comments:[{jsdoc:!1,lines:["@ts-ignore"]}],obj:[{key:"queryFn",value:l.arrowFunction({async:!0,multiLine:!0,parameters:[{destructure:[{name:"pageParam"},{name:"queryKey"}]}],statements:[l.constVariable({comment:[{jsdoc:!1,lines:["@ts-ignore"]}],expression:l.conditionalExpression({condition:l.binaryExpression({left:l.typeOfExpression({text:"pageParam"}),operator:"===",right:l.stringLiteral({text:"object"})}),whenFalse:l.objectExpression({multiLine:!0,obj:[{key:op(J),value:l.objectExpression({multiLine:!0,obj:[{key:_.name,value:l.identifier({text:"pageParam"})}]})}]}),whenTrue:l.identifier({text:"pageParam"})}),name:"page",typeName:Pn}),l.constVariable({expression:l.callExpression({functionName:"createInfiniteParams",parameters:["queryKey","page"]}),name:"params"}),l.constVariable({destructure:!0,expression:l.awaitExpression({expression:l.callExpression({functionName:C,parameters:[l.objectExpression({multiLine:!0,obj:[{spread:"options"},{spread:"params"},{key:"throwOnError",value:!0}]})]})}),name:"data"}),l.returnVariable({expression:"data"})]})},{key:"queryKey",value:l.callExpression({functionName:Dt(x,!0),parameters:["options"]})}]})],name:ts,types:[be,Y.name,`${typeof i=="string"?i:i.name}<${be}>`,_t,li]})]}),di=l.constVariable({comment:[],exportConst:!0,expression:fi,name:ep(x)});n.add(di);}}if(r.mutationOptions&&["DELETE","PATCH","POST","PUT"].includes(x.method)){u||(u=!0,n.import({asType:!0,module:r.name,name:a})),ue=!0;let{typeData:_}=yn({client:e,file:n,operation:x,typesModulePath:o}),{typeError:J}=is({client:e,file:n,operation:x,pluginName:r.name,typesModulePath:o}),{typeResponse:F}=as({client:e,file:n,operation:x,typesModulePath:o}),Y=l.arrowFunction({statements:[l.constVariable({expression:l.objectExpression({obj:[{key:"mutationFn",value:l.arrowFunction({async:!0,multiLine:!0,parameters:[{name:"options"}],statements:[l.constVariable({destructure:!0,expression:l.awaitExpression({expression:l.callExpression({functionName:C,parameters:[l.objectExpression({multiLine:!0,obj:[{spread:"options"},{key:"throwOnError",value:!0}]})]})}),name:"data"}),l.returnVariable({expression:"data"})]})}]}),name:ns,typeName:`${a}<${F}, ${J.name}, ${_}>`}),l.returnVariable({expression:ns})]}),be=l.constVariable({comment:[],exportConst:!0,expression:Y,name:tp(x)});n.add(be);}let ke=ze({moduleOutput:t.services.getName(!1),sourceOutput:r.output});(d||m)&&n.import({module:ke,name:"client"}),ue&&n.import({module:ke,name:C.split(".")[0]});}};var Mt={handler:Oe,infiniteQueryOptions:!0,mutationOptions:!0,name:"@tanstack/react-query",output:"@tanstack/react-query",queryOptions:!0};var jt={handler:Oe,infiniteQueryOptions:!0,mutationOptions:!0,name:"@tanstack/solid-query",output:"@tanstack/solid-query",queryOptions:!0};var Ht={handler:Oe,infiniteQueryOptions:!0,mutationOptions:!0,name:"@tanstack/svelte-query",output:"@tanstack/svelte-query",queryOptions:!0};var Ft={handler:Oe,infiniteQueryOptions:!0,mutationOptions:!0,name:"@tanstack/vue-query",output:"@tanstack/vue-query",queryOptions:!0};var ms=({plugin:e})=>{console.warn(e);};var Bt={handler:ms,name:"zod",output:"zod"};var xn={"@hey-api/schemas":wt,"@hey-api/services":$t,"@hey-api/types":It,"@tanstack/react-query":Mt,"@tanstack/solid-query":jt,"@tanstack/svelte-query":Ht,"@tanstack/vue-query":Ft,zod:Bt};var ls=["@hey-api/client-axios","@hey-api/client-fetch","legacy/angular","legacy/axios","legacy/fetch","legacy/node","legacy/xhr"];var us=async e=>{let t=fs$1.existsSync(e)?K__default.default.resolve(e):e;return await cp__default.default.bundle(t,t,{})};var fs={1:function(e,t,r,s,n){return `import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularHttpRequest } from './core/AngularHttpRequest';
import { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { OpenAPI } from './core/OpenAPI';
import { Interceptors } from './core/OpenAPI';
`},3:function(e,t,r,s,n){var o,a=e.strict,i=e.lambda;return `import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { Interceptors } from './core/OpenAPI';
import { `+((o=i(a(t,"httpRequest",{start:{line:14,column:12},end:{line:14,column:23}}),t))!=null?o:"")+" } from './core/"+((o=i(a(t,"httpRequest",{start:{line:14,column:45},end:{line:14,column:56}}),t))!=null?o:"")+`';
`},5:function(e,t,r,s,n){var o,a=e.lookupProperty||function(i,p){if(Object.prototype.hasOwnProperty.call(i,p))return i[p]};return (o=a(r,"each").call(t??(e.nullContext||{}),a(t,"services"),{name:"each",hash:{},fn:e.program(6,n,0),inverse:e.noop,data:n,loc:{start:{line:18,column:0},end:{line:20,column:9}}}))!=null?o:""},6:function(e,t,r,s,n){var o,a=e.lookupProperty||function(i,p){if(Object.prototype.hasOwnProperty.call(i,p))return i[p]};return "import { "+((o=a(r,"transformServiceName").call(t??(e.nullContext||{}),a(t,"name"),{name:"transformServiceName",hash:{},data:n,loc:{start:{line:19,column:9},end:{line:19,column:40}}}))!=null?o:"")+` } from './services.gen';
`},8:function(e,t,r,s,n){var o,a=e.strict,i=e.lambda,p=e.lookupProperty||function(c,m){if(Object.prototype.hasOwnProperty.call(c,m))return c[m]};return `@NgModule({
	imports: [HttpClientModule],
	providers: [
		{
			provide: OpenAPI,
			useValue: {
				BASE: OpenAPI?.BASE ?? '`+((o=i(a(t,"server",{start:{line:30,column:31},end:{line:30,column:37}}),t))!=null?o:"")+`',
				VERSION: OpenAPI?.VERSION ?? '`+((o=i(a(t,"version",{start:{line:31,column:37},end:{line:31,column:44}}),t))!=null?o:"")+`',
				WITH_CREDENTIALS: OpenAPI?.WITH_CREDENTIALS ?? false,
				CREDENTIALS: OpenAPI?.CREDENTIALS ?? 'include',
				TOKEN: OpenAPI?.TOKEN,
				USERNAME: OpenAPI?.USERNAME,
				PASSWORD: OpenAPI?.PASSWORD,
				HEADERS: OpenAPI?.HEADERS,
				ENCODE_PATH: OpenAPI?.ENCODE_PATH,
				interceptors: {
					response: OpenAPI?.interceptors?.response ?? new Interceptors(),
				},
			} as OpenAPIConfig,
		},
		{
			provide: BaseHttpRequest,
			useClass: AngularHttpRequest,
		},
`+((o=p(r,"each").call(t??(e.nullContext||{}),p(t,"services"),{name:"each",hash:{},fn:e.program(9,n,0),inverse:e.noop,data:n,loc:{start:{line:48,column:2},end:{line:50,column:11}}}))!=null?o:"")+`	]
})
export class `+((o=i(a(p(p(n,"root"),"$config"),"name",{start:{line:53,column:16},end:{line:53,column:34}}),t))!=null?o:"")+` {}
`},9:function(e,t,r,s,n){var o,a=e.lookupProperty||function(i,p){if(Object.prototype.hasOwnProperty.call(i,p))return i[p]};return "		"+((o=a(r,"transformServiceName").call(t??(e.nullContext||{}),a(t,"name"),{name:"transformServiceName",hash:{},data:n,loc:{start:{line:49,column:2},end:{line:49,column:33}}}))!=null?o:"")+`,
`},11:function(e,t,r,s,n){var o,a=e.strict,i=e.lambda,p=t??(e.nullContext||{}),c=e.lookupProperty||function(m,u){if(Object.prototype.hasOwnProperty.call(m,u))return m[u]};return `type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class `+((o=i(a(c(c(n,"root"),"$config"),"name",{start:{line:57,column:16},end:{line:57,column:34}}),t))!=null?o:"")+` {

`+((o=c(r,"each").call(p,c(t,"services"),{name:"each",hash:{},fn:e.program(12,n,0),inverse:e.noop,data:n,loc:{start:{line:59,column:1},end:{line:61,column:10}}}))!=null?o:"")+`
	public readonly request: BaseHttpRequest;

	constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = `+((o=i(a(t,"httpRequest",{start:{line:65,column:87},end:{line:65,column:98}}),t))!=null?o:"")+`) {
		this.request = new HttpRequest({
			BASE: config?.BASE ?? '`+((o=i(a(t,"server",{start:{line:67,column:29},end:{line:67,column:35}}),t))!=null?o:"")+`',
			VERSION: config?.VERSION ?? '`+((o=i(a(t,"version",{start:{line:68,column:35},end:{line:68,column:42}}),t))!=null?o:"")+`',
			WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
			CREDENTIALS: config?.CREDENTIALS ?? 'include',
			TOKEN: config?.TOKEN,
			USERNAME: config?.USERNAME,
			PASSWORD: config?.PASSWORD,
			HEADERS: config?.HEADERS,
			ENCODE_PATH: config?.ENCODE_PATH,
			interceptors: {
				request: config?.interceptors?.request ?? new Interceptors(),
				response: config?.interceptors?.response ?? new Interceptors(),
      },
		});

`+((o=c(r,"each").call(p,c(t,"services"),{name:"each",hash:{},fn:e.program(14,n,0),inverse:e.noop,data:n,loc:{start:{line:82,column:2},end:{line:84,column:11}}}))!=null?o:"")+`	}
}
`},12:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.lookupProperty||function(p,c){if(Object.prototype.hasOwnProperty.call(p,c))return p[c]};return "	public readonly "+((o=i(r,"camelCase").call(a,i(t,"name"),{name:"camelCase",hash:{},data:n,loc:{start:{line:60,column:17},end:{line:60,column:37}}}))!=null?o:"")+": "+((o=i(r,"transformServiceName").call(a,i(t,"name"),{name:"transformServiceName",hash:{},data:n,loc:{start:{line:60,column:39},end:{line:60,column:70}}}))!=null?o:"")+`;
`},14:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.lookupProperty||function(p,c){if(Object.prototype.hasOwnProperty.call(p,c))return p[c]};return "		this."+((o=i(r,"camelCase").call(a,i(t,"name"),{name:"camelCase",hash:{},data:n,loc:{start:{line:83,column:7},end:{line:83,column:27}}}))!=null?o:"")+" = new "+((o=i(r,"transformServiceName").call(a,i(t,"name"),{name:"transformServiceName",hash:{},data:n,loc:{start:{line:83,column:34},end:{line:83,column:65}}}))!=null?o:"")+`(this.request);
`},compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.lookupProperty||function(p,c){if(Object.prototype.hasOwnProperty.call(p,c))return p[c]};return ((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.program(3,n,0),data:n,loc:{start:{line:1,column:0},end:{line:15,column:11}}}))!=null?o:"")+`
`+((o=i(r,"if").call(a,i(t,"services"),{name:"if",hash:{},fn:e.program(5,n,0),inverse:e.noop,data:n,loc:{start:{line:17,column:0},end:{line:21,column:7}}}))!=null?o:"")+`
`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(8,n,0),inverse:e.program(11,n,0),data:n,loc:{start:{line:23,column:0},end:{line:87,column:11}}}))!=null?o:"")},useData:!0};var ds={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getHeaders = <T>(config: OpenAPIConfig, options: ApiRequestOptions<T>): Observable<HttpHeaders> => {
	return forkJoin({
		// @ts-ignore
		token: resolve(options, config.TOKEN),
		// @ts-ignore
		username: resolve(options, config.USERNAME),
		// @ts-ignore
		password: resolve(options, config.PASSWORD),
		// @ts-ignore
		additionalHeaders: resolve(options, config.HEADERS),
	}).pipe(
		map(({ token, username, password, additionalHeaders }) => {
			const headers = Object.entries({
				Accept: 'application/json',
				...additionalHeaders,
				...options.headers,
			})
				.filter(([, value]) => value !== undefined && value !== null)
				.reduce((headers, [key, value]) => ({
					...headers,
					[key]: String(value),
				}), {} as Record<string, string>);

			if (isStringWithValue(token)) {
				headers['Authorization'] = \`Bearer \${token}\`;
			}

			if (isStringWithValue(username) && isStringWithValue(password)) {
				const credentials = base64(\`\${username}:\${password}\`);
				headers['Authorization'] = \`Basic \${credentials}\`;
			}

			if (options.body !== undefined) {
				if (options.mediaType) {
					headers['Content-Type'] = options.mediaType;
				} else if (isBlob(options.body)) {
					headers['Content-Type'] = options.body.type || 'application/octet-stream';
				} else if (isString(options.body)) {
					headers['Content-Type'] = 'text/plain';
				} else if (!isFormData(options.body)) {
					headers['Content-Type'] = 'application/json';
				}
			}

			return new HttpHeaders(headers);
		}),
	);
};`},useData:!0};var ys={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getRequestBody = (options: ApiRequestOptions): unknown => {
	if (options.body) {
		if (options.mediaType?.includes('application/json') || options.mediaType?.includes('+json')) {
			return JSON.stringify(options.body);
		} else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
			return options.body;
		} else {
			return JSON.stringify(options.body);
		}
	}
	return undefined;
};`},useData:!0};var gs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getResponseBody = <T>(response: HttpResponse<T>): T | undefined => {
	if (response.status !== 204 && response.body !== null) {
		return response.body;
	}
	return undefined;
};`},useData:!0};var hs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getResponseHeader = <T>(response: HttpResponse<T>, responseHeader?: string): string | undefined => {
	if (responseHeader) {
		const value = response.headers.get(responseHeader);
		if (isString(value)) {
			return value;
		}
	}
	return undefined;
};`},useData:!0};var xs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=e.lookupProperty||function(i,p){if(Object.prototype.hasOwnProperty.call(i,p))return i[p]};return `import { HttpClient, HttpHeaders } from '@angular/common/http';
import type { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { forkJoin, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import type { Observable } from 'rxjs';

import { ApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import type { OpenAPIConfig } from './OpenAPI';

`+((o=e.invokePartial(a(s,"functions/isString"),t,{name:"functions/isString",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"functions/isStringWithValue"),t,{name:"functions/isStringWithValue",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"functions/isBlob"),t,{name:"functions/isBlob",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"functions/isFormData"),t,{name:"functions/isFormData",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"functions/base64"),t,{name:"functions/base64",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"functions/getQueryString"),t,{name:"functions/getQueryString",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"functions/getUrl"),t,{name:"functions/getUrl",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"functions/getFormData"),t,{name:"functions/getFormData",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"functions/resolve"),t,{name:"functions/resolve",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"angular/getHeaders"),t,{name:"angular/getHeaders",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"angular/getRequestBody"),t,{name:"angular/getRequestBody",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"angular/sendRequest"),t,{name:"angular/sendRequest",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"angular/getResponseHeader"),t,{name:"angular/getResponseHeader",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"angular/getResponseBody"),t,{name:"angular/getResponseBody",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(a(s,"functions/catchErrorCodes"),t,{name:"functions/catchErrorCodes",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param http The Angular HTTP client
 * @param options The request options from the service
 * @returns Observable<T>
 * @throws ApiError
 */
export const request = <T>(config: OpenAPIConfig, http: HttpClient, options: ApiRequestOptions<T>): Observable<T> => {
	const url = getUrl(config, options);
	const formData = getFormData(options);
	const body = getRequestBody(options);

	return getHeaders(config, options).pipe(
		switchMap(headers => {
			return sendRequest<T>(config, options, http, url, body, formData, headers);
		}),
		switchMap(async response => {
			for (const fn of config.interceptors.response._fns) {
				response = await fn(response);
			}
			const responseBody = getResponseBody(response);
			const responseHeader = getResponseHeader(response, options.responseHeader);

			let transformedBody = responseBody;
			if (options.responseTransformer && response.ok) {
				transformedBody = await options.responseTransformer(responseBody)
			}

			return {
				url,
				ok: response.ok,
				status: response.status,
				statusText: response.statusText,
				body: responseHeader ?? transformedBody,
			} as ApiResult;
		}),
		catchError((error: HttpErrorResponse) => {
			if (!error.status) {
				return throwError(() => error);
			}
			return of({
				url,
				ok: error.ok,
				status: error.status,
				statusText: error.statusText,
				body: error.error ?? error.statusText,
			} as ApiResult);
		}),
		map(result => {
			catchErrorCodes(options, result);
			return result.body as T;
		}),
		catchError((error: ApiError) => {
			return throwError(() => error);
		}),
	);
};`},usePartial:!0,useData:!0};var Os={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const sendRequest = <T>(
	config: OpenAPIConfig,
	options: ApiRequestOptions<T>,
	http: HttpClient,
	url: string,
	body: unknown,
	formData: FormData | undefined,
	headers: HttpHeaders
): Observable<HttpResponse<T>> => {
	return http.request<T>(options.method, url, {
		headers,
		body: body ?? formData,
		withCredentials: config.WITH_CREDENTIALS,
		observe: 'response',
	});
};`},useData:!0};var bs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';

export class ApiError extends Error {
	public readonly url: string;
	public readonly status: number;
	public readonly statusText: string;
	public readonly body: unknown;
	public readonly request: ApiRequestOptions;

	constructor(request: ApiRequestOptions, response: ApiResult, message: string) {
		super(message);

		this.name = 'ApiError';
		this.url = response.url;
		this.status = response.status;
		this.statusText = response.statusText;
		this.body = response.body;
		this.request = request;
	}
}`},useData:!0};var Ps={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export type ApiRequestOptions<T = unknown> = {
	readonly body?: any;
	readonly cookies?: Record<string, unknown>;
	readonly errors?: Record<number | string, string>;
	readonly formData?: Record<string, unknown> | any[] | Blob | File;
	readonly headers?: Record<string, unknown>;
	readonly mediaType?: string;
	readonly method:
		| 'DELETE'
		| 'GET'
		| 'HEAD'
		| 'OPTIONS'
		| 'PATCH'
		| 'POST'
		| 'PUT';
	readonly path?: Record<string, unknown>;
	readonly query?: Record<string, unknown>;
	readonly responseHeader?: string;
	readonly responseTransformer?: (data: unknown) => Promise<T>;
	readonly url: string;
};`},useData:!0};var Cs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export type ApiResult<TData = any> = {
	readonly body: TData;
	readonly ok: boolean;
	readonly status: number;
	readonly statusText: string;
	readonly url: string;
};`},useData:!0};var Ts={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getHeaders = async <T>(config: OpenAPIConfig, options: ApiRequestOptions<T>): Promise<Record<string, string>> => {
	const [token, username, password, additionalHeaders] = await Promise.all([
		// @ts-ignore
		resolve(options, config.TOKEN),
		// @ts-ignore
		resolve(options, config.USERNAME),
		// @ts-ignore
		resolve(options, config.PASSWORD),
		// @ts-ignore
		resolve(options, config.HEADERS),
	]);

	const headers = Object.entries({
		Accept: 'application/json',
		...additionalHeaders,
		...options.headers,
	})
	.filter(([, value]) => value !== undefined && value !== null)
	.reduce((headers, [key, value]) => ({
		...headers,
		[key]: String(value),
	}), {} as Record<string, string>);

	if (isStringWithValue(token)) {
		headers['Authorization'] = \`Bearer \${token}\`;
	}

	if (isStringWithValue(username) && isStringWithValue(password)) {
		const credentials = base64(\`\${username}:\${password}\`);
		headers['Authorization'] = \`Basic \${credentials}\`;
	}

	if (options.body !== undefined) {
		if (options.mediaType) {
			headers['Content-Type'] = options.mediaType;
		} else if (isBlob(options.body)) {
			headers['Content-Type'] = options.body.type || 'application/octet-stream';
		} else if (isString(options.body)) {
			headers['Content-Type'] = 'text/plain';
		} else if (!isFormData(options.body)) {
			headers['Content-Type'] = 'application/json';
		}
	} else if (options.formData !== undefined) {
		if (options.mediaType) {
			headers['Content-Type'] = options.mediaType;
		}
	}

	return headers;
};`},useData:!0};var Rs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getRequestBody = (options: ApiRequestOptions): unknown => {
	if (options.body) {
		return options.body;
	}
	return undefined;
};`},useData:!0};var As={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getResponseBody = (response: AxiosResponse<unknown>): unknown => {
	if (response.status !== 204) {
		return response.data;
	}
	return undefined;
};`},useData:!0};var vs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getResponseHeader = (response: AxiosResponse<unknown>, responseHeader?: string): string | undefined => {
	if (responseHeader) {
		const content = response.headers[responseHeader];
		if (isString(content)) {
			return content;
		}
	}
	return undefined;
};`},useData:!0};var Es={1:function(e,t,r,s,n){return "ApiResult<T>"},3:function(e,t,r,s,n){return "T"},5:function(e,t,r,s,n){return "result.body"},7:function(e,t,r,s,n){return "result"},compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.lookupProperty||function(p,c){if(Object.prototype.hasOwnProperty.call(p,c))return p[c]};return `import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

import { ApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { CancelablePromise } from './CancelablePromise';
import type { OnCancel } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';

`+((o=e.invokePartial(i(s,"functions/isString"),t,{name:"functions/isString",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isStringWithValue"),t,{name:"functions/isStringWithValue",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isBlob"),t,{name:"functions/isBlob",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isFormData"),t,{name:"functions/isFormData",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isSuccess"),t,{name:"functions/isSuccess",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/base64"),t,{name:"functions/base64",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/getQueryString"),t,{name:"functions/getQueryString",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/getUrl"),t,{name:"functions/getUrl",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/getFormData"),t,{name:"functions/getFormData",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/resolve"),t,{name:"functions/resolve",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"axios/getHeaders"),t,{name:"axios/getHeaders",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"axios/getRequestBody"),t,{name:"axios/getRequestBody",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"axios/sendRequest"),t,{name:"axios/sendRequest",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"axios/getResponseHeader"),t,{name:"axios/getResponseHeader",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"axios/getResponseBody"),t,{name:"axios/getResponseBody",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/catchErrorCodes"),t,{name:"functions/catchErrorCodes",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @param axiosClient The axios client instance to use
 * @returns CancelablePromise<`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"services"),"response"),"response",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.program(3,n,0),data:n,loc:{start:{line:64,column:30},end:{line:64,column:116}}}))!=null?o:"")+`>
 * @throws ApiError
 */
export const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions<T>, axiosClient: AxiosInstance = axios): CancelablePromise<`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"services"),"response"),"response",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.program(3,n,0),data:n,loc:{start:{line:67,column:136},end:{line:67,column:222}}}))!=null?o:"")+`> => {
	return new CancelablePromise(async (resolve, reject, onCancel) => {
		try {
			const url = getUrl(config, options);
			const formData = getFormData(options);
			const body = getRequestBody(options);
			const headers = await getHeaders(config, options);

			if (!onCancel.isCancelled) {
				let response = await sendRequest<T>(config, options, url, body, formData, headers, onCancel, axiosClient);

				for (const fn of config.interceptors.response._fns) {
					response = await fn(response);
				}

				const responseBody = getResponseBody(response);
				const responseHeader = getResponseHeader(response, options.responseHeader);

				let transformedBody = responseBody;
				if (options.responseTransformer && isSuccess(response.status)) {
					transformedBody = await options.responseTransformer(responseBody)
				}

				const result: ApiResult = {
					url,
					ok: isSuccess(response.status),
					status: response.status,
					statusText: response.statusText,
					body: responseHeader ?? transformedBody,
				};

				catchErrorCodes(options, result);

				resolve(`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"services"),"response"),"body",{name:"equals",hash:{},fn:e.program(5,n,0),inverse:e.program(7,n,0),data:n,loc:{start:{line:100,column:12},end:{line:100,column:98}}}))!=null?o:"")+`);
			}
		} catch (error) {
			reject(error);
		}
	});
};`},usePartial:!0,useData:!0};var qs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const sendRequest = async <T>(
	config: OpenAPIConfig,
	options: ApiRequestOptions<T>,
	url: string,
	body: unknown,
	formData: FormData | undefined,
	headers: Record<string, string>,
	onCancel: OnCancel,
	axiosClient: AxiosInstance
): Promise<AxiosResponse<T>> => {
	const controller = new AbortController();

	let requestConfig: AxiosRequestConfig = {
		data: body ?? formData,
		headers,
		method: options.method,
		signal: controller.signal,
		url,
		withCredentials: config.WITH_CREDENTIALS,
	};

	onCancel(() => controller.abort());

	for (const fn of config.interceptors.request._fns) {
		requestConfig = await fn(requestConfig);
	}

	try {
		return await axiosClient.request(requestConfig);
	} catch (error) {
		const axiosError = error as AxiosError<T>;
		if (axiosError.response) {
			return axiosError.response;
		}
		throw error;
	}
};`},useData:!0};var Ss={1:function(e,t,r,s,n){return `import type { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { ApiRequestOptions } from './ApiRequestOptions';
import type { OpenAPIConfig } from './OpenAPI';
`},3:function(e,t,r,s,n){return `import type { ApiRequestOptions } from './ApiRequestOptions';
import type { CancelablePromise } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';
`},5:function(e,t,r,s,n){return `	constructor(
		public readonly config: OpenAPIConfig,
		public readonly http: HttpClient,
	) {}
`},7:function(e,t,r,s,n){return `	constructor(public readonly config: OpenAPIConfig) {}
`},9:function(e,t,r,s,n){return `	public abstract request<T>(options: ApiRequestOptions<T>): Observable<T>;
`},11:function(e,t,r,s,n){return `	public abstract request<T>(options: ApiRequestOptions<T>): CancelablePromise<T>;
`},compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.lookupProperty||function(p,c){if(Object.prototype.hasOwnProperty.call(p,c))return p[c]};return ((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.program(3,n,0),data:n,loc:{start:{line:1,column:0},end:{line:11,column:11}}}))!=null?o:"")+`
export abstract class BaseHttpRequest {

`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(5,n,0),inverse:e.program(7,n,0),data:n,loc:{start:{line:15,column:1},end:{line:22,column:12}}}))!=null?o:"")+`
`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(9,n,0),inverse:e.program(11,n,0),data:n,loc:{start:{line:24,column:1},end:{line:28,column:12}}}))!=null?o:"")+"}"},useData:!0};var ks={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export class CancelError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'CancelError';
	}

	public get isCancelled(): boolean {
		return true;
	}
}

export interface OnCancel {
	readonly isResolved: boolean;
	readonly isRejected: boolean;
	readonly isCancelled: boolean;

	(cancelHandler: () => void): void;
}

export class CancelablePromise<T> implements Promise<T> {
	private _isResolved: boolean;
	private _isRejected: boolean;
	private _isCancelled: boolean;
	readonly cancelHandlers: (() => void)[];
	readonly promise: Promise<T>;
	private _resolve?: (value: T | PromiseLike<T>) => void;
	private _reject?: (reason?: unknown) => void;

	constructor(
		executor: (
			resolve: (value: T | PromiseLike<T>) => void,
			reject: (reason?: unknown) => void,
			onCancel: OnCancel
		) => void
	) {
		this._isResolved = false;
		this._isRejected = false;
		this._isCancelled = false;
		this.cancelHandlers = [];
		this.promise = new Promise<T>((resolve, reject) => {
			this._resolve = resolve;
			this._reject = reject;

			const onResolve = (value: T | PromiseLike<T>): void => {
				if (this._isResolved || this._isRejected || this._isCancelled) {
					return;
				}
				this._isResolved = true;
				if (this._resolve) this._resolve(value);
			};

			const onReject = (reason?: unknown): void => {
				if (this._isResolved || this._isRejected || this._isCancelled) {
					return;
				}
				this._isRejected = true;
				if (this._reject) this._reject(reason);
			};

			const onCancel = (cancelHandler: () => void): void => {
				if (this._isResolved || this._isRejected || this._isCancelled) {
					return;
				}
				this.cancelHandlers.push(cancelHandler);
			};

			Object.defineProperty(onCancel, 'isResolved', {
				get: (): boolean => this._isResolved,
			});

			Object.defineProperty(onCancel, 'isRejected', {
				get: (): boolean => this._isRejected,
			});

			Object.defineProperty(onCancel, 'isCancelled', {
				get: (): boolean => this._isCancelled,
			});

			return executor(onResolve, onReject, onCancel as OnCancel);
		});
	}

	get [Symbol.toStringTag]() {
		return "Cancellable Promise";
	}

	public then<TResult1 = T, TResult2 = never>(
		onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
		onRejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null
	): Promise<TResult1 | TResult2> {
		return this.promise.then(onFulfilled, onRejected);
	}

	public catch<TResult = never>(
		onRejected?: ((reason: unknown) => TResult | PromiseLike<TResult>) | null
	): Promise<T | TResult> {
		return this.promise.catch(onRejected);
	}

	public finally(onFinally?: (() => void) | null): Promise<T> {
		return this.promise.finally(onFinally);
	}

	public cancel(): void {
		if (this._isResolved || this._isRejected || this._isCancelled) {
			return;
		}
		this._isCancelled = true;
		if (this.cancelHandlers.length) {
			try {
				for (const cancelHandler of this.cancelHandlers) {
					cancelHandler();
				}
			} catch (error) {
				console.warn('Cancellation threw an error', error);
				return;
			}
		}
		this.cancelHandlers.length = 0;
		if (this._reject) this._reject(new CancelError('Request aborted'));
	}

	public get isCancelled(): boolean {
		return this._isCancelled;
	}
}`},useData:!0};var Ns={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getHeaders = async <T>(config: OpenAPIConfig, options: ApiRequestOptions<T>): Promise<Headers> => {
	const [token, username, password, additionalHeaders] = await Promise.all([
		// @ts-ignore
		resolve(options, config.TOKEN),
		// @ts-ignore
		resolve(options, config.USERNAME),
		// @ts-ignore
		resolve(options, config.PASSWORD),
		// @ts-ignore
		resolve(options, config.HEADERS),
	]);

	const headers = Object.entries({
		Accept: 'application/json',
		...additionalHeaders,
		...options.headers,
	})
		.filter(([, value]) => value !== undefined && value !== null)
		.reduce((headers, [key, value]) => ({
			...headers,
			[key]: String(value),
		}), {} as Record<string, string>);

	if (isStringWithValue(token)) {
		headers['Authorization'] = \`Bearer \${token}\`;
	}

	if (isStringWithValue(username) && isStringWithValue(password)) {
		const credentials = base64(\`\${username}:\${password}\`);
		headers['Authorization'] = \`Basic \${credentials}\`;
	}

	if (options.body !== undefined) {
		if (options.mediaType) {
			headers['Content-Type'] = options.mediaType;
		} else if (isBlob(options.body)) {
			headers['Content-Type'] = options.body.type || 'application/octet-stream';
		} else if (isString(options.body)) {
			headers['Content-Type'] = 'text/plain';
		} else if (!isFormData(options.body)) {
			headers['Content-Type'] = 'application/json';
		}
	}

	return new Headers(headers);
};`},useData:!0};var ws={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getRequestBody = (options: ApiRequestOptions): unknown => {
	if (options.body !== undefined) {
		if (options.mediaType?.includes('application/json') || options.mediaType?.includes('+json')) {
			return JSON.stringify(options.body);
		} else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
			return options.body;
		} else {
			return JSON.stringify(options.body);
		}
	}
	return undefined;
};`},useData:!0};var $s={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getResponseBody = async (response: Response): Promise<unknown> => {
	if (response.status !== 204) {
		try {
			const contentType = response.headers.get('Content-Type');
			if (contentType) {
				const binaryTypes = ['application/octet-stream', 'application/pdf', 'application/zip', 'audio/', 'image/', 'video/'];
				if (contentType.includes('application/json') || contentType.includes('+json')) {
					return await response.json();
				} else if (binaryTypes.some(type => contentType.includes(type))) {
					return await response.blob();
				} else if (contentType.includes('multipart/form-data')) {
					return await response.formData();
				} else if (contentType.includes('text/')) {
					return await response.text();
				}
			}
		} catch (error) {
			console.error(error);
		}
	}
	return undefined;
};`},useData:!0};var Is={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getResponseHeader = (response: Response, responseHeader?: string): string | undefined => {
	if (responseHeader) {
		const content = response.headers.get(responseHeader);
		if (isString(content)) {
			return content;
		}
	}
	return undefined;
};`},useData:!0};var Ds={1:function(e,t,r,s,n){return `import fetch, { FormData, Headers } from 'node-fetch';
import type { RequestInit, Response } from 'node-fetch';

`},3:function(e,t,r,s,n){return "ApiResult<T>"},5:function(e,t,r,s,n){return "T"},7:function(e,t,r,s,n){return "result.body"},9:function(e,t,r,s,n){return "result"},compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.lookupProperty||function(p,c){if(Object.prototype.hasOwnProperty.call(p,c))return p[c]};return ((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/node",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n,loc:{start:{line:1,column:0},end:{line:5,column:11}}}))!=null?o:"")+`import { ApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { CancelablePromise } from './CancelablePromise';
import type { OnCancel } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';

`+((o=e.invokePartial(i(s,"functions/isString"),t,{name:"functions/isString",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isStringWithValue"),t,{name:"functions/isStringWithValue",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isBlob"),t,{name:"functions/isBlob",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isFormData"),t,{name:"functions/isFormData",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/base64"),t,{name:"functions/base64",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/getQueryString"),t,{name:"functions/getQueryString",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/getUrl"),t,{name:"functions/getUrl",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/getFormData"),t,{name:"functions/getFormData",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/resolve"),t,{name:"functions/resolve",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"fetch/getHeaders"),t,{name:"fetch/getHeaders",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"fetch/getRequestBody"),t,{name:"fetch/getRequestBody",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"fetch/sendRequest"),t,{name:"fetch/sendRequest",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"fetch/getResponseHeader"),t,{name:"fetch/getResponseHeader",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"fetch/getResponseBody"),t,{name:"fetch/getResponseBody",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/catchErrorCodes"),t,{name:"functions/catchErrorCodes",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"services"),"response"),"response",{name:"equals",hash:{},fn:e.program(3,n,0),inverse:e.program(5,n,0),data:n,loc:{start:{line:62,column:30},end:{line:62,column:116}}}))!=null?o:"")+`>
 * @throws ApiError
 */
export const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions<T>): CancelablePromise<`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"services"),"response"),"response",{name:"equals",hash:{},fn:e.program(3,n,0),inverse:e.program(5,n,0),data:n,loc:{start:{line:65,column:100},end:{line:65,column:186}}}))!=null?o:"")+`> => {
	return new CancelablePromise(async (resolve, reject, onCancel) => {
		try {
			const url = getUrl(config, options);
			const formData = getFormData(options);
			const body = getRequestBody(options);
			const headers = await getHeaders(config, options);

			if (!onCancel.isCancelled) {
				let response = await sendRequest(config, options, url, body, formData, headers, onCancel);

				for (const fn of config.interceptors.response._fns) {
					response = await fn(response);
				}

				const responseBody = await getResponseBody(response);
				const responseHeader = getResponseHeader(response, options.responseHeader);

				let transformedBody = responseBody;
				if (options.responseTransformer && response.ok) {
					transformedBody = await options.responseTransformer(responseBody)
				}

				const result: ApiResult = {
					url,
					ok: response.ok,
					status: response.status,
					statusText: response.statusText,
					body: responseHeader ?? transformedBody,
				};

				catchErrorCodes(options, result);

				resolve(`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"services"),"response"),"body",{name:"equals",hash:{},fn:e.program(7,n,0),inverse:e.program(9,n,0),data:n,loc:{start:{line:98,column:12},end:{line:98,column:98}}}))!=null?o:"")+`);
			}
		} catch (error) {
			reject(error);
		}
	});
};`},usePartial:!0,useData:!0};var Ms={1:function(e,t,r,s,n){return `	if (config.WITH_CREDENTIALS) {
		request.credentials = config.CREDENTIALS;
	}
`},compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=e.lookupProperty||function(i,p){if(Object.prototype.hasOwnProperty.call(i,p))return i[p]};return `export const sendRequest = async (
	config: OpenAPIConfig,
	options: ApiRequestOptions,
	url: string,
	body: any,
	formData: FormData | undefined,
	headers: Headers,
	onCancel: OnCancel
): Promise<Response> => {
	const controller = new AbortController();

	let request: RequestInit = {
		headers,
		body: body ?? formData,
		method: options.method,
		signal: controller.signal,
	};

`+((o=a(r,"equals").call(t??(e.nullContext||{}),a(a(a(a(n,"root"),"$config"),"client"),"name"),"legacy/fetch",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n,loc:{start:{line:19,column:1},end:{line:23,column:12}}}))!=null?o:"")+`
	for (const fn of config.interceptors.request._fns) {
		request = await fn(request);
	}

	onCancel(() => controller.abort());

	return await fetch(url, request);
};`},useData:!0};var js={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const base64 = (str: string): string => {
	try {
		return btoa(str);
	} catch (err) {
		// @ts-ignore
		return Buffer.from(str).toString('base64');
	}
};`},useData:!0};var Hs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const catchErrorCodes = (options: ApiRequestOptions, result: ApiResult): void => {
	const errors: Record<number, string> = {
		400: 'Bad Request',
		401: 'Unauthorized',
		402: 'Payment Required',
		403: 'Forbidden',
		404: 'Not Found',
		405: 'Method Not Allowed',
		406: 'Not Acceptable',
		407: 'Proxy Authentication Required',
		408: 'Request Timeout',
		409: 'Conflict',
		410: 'Gone',
		411: 'Length Required',
		412: 'Precondition Failed',
		413: 'Payload Too Large',
		414: 'URI Too Long',
		415: 'Unsupported Media Type',
		416: 'Range Not Satisfiable',
		417: 'Expectation Failed',
		418: 'Im a teapot',
		421: 'Misdirected Request',
		422: 'Unprocessable Content',
		423: 'Locked',
		424: 'Failed Dependency',
		425: 'Too Early',
		426: 'Upgrade Required',
		428: 'Precondition Required',
		429: 'Too Many Requests',
		431: 'Request Header Fields Too Large',
		451: 'Unavailable For Legal Reasons',
		500: 'Internal Server Error',
		501: 'Not Implemented',
		502: 'Bad Gateway',
		503: 'Service Unavailable',
		504: 'Gateway Timeout',
		505: 'HTTP Version Not Supported',
		506: 'Variant Also Negotiates',
		507: 'Insufficient Storage',
		508: 'Loop Detected',
		510: 'Not Extended',
		511: 'Network Authentication Required',
		...options.errors,
	}

	const error = errors[result.status];
	if (error) {
		throw new ApiError(options, result, error);
	}

	if (!result.ok) {
		const errorStatus = result.status ?? 'unknown';
		const errorStatusText = result.statusText ?? 'unknown';
		const errorBody = (() => {
			try {
				return JSON.stringify(result.body, null, 2);
			} catch (e) {
				return undefined;
			}
		})();

		throw new ApiError(options, result,
			\`Generic Error: status: \${errorStatus}; status text: \${errorStatusText}; body: \${errorBody}\`
		);
	}
};`},useData:!0};var Fs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getFormData = (options: ApiRequestOptions): FormData | undefined => {
	if (options.formData) {
		const formData = new FormData();

		const process = (key: string, value: unknown) => {
			if (isString(value) || isBlob(value)) {
				formData.append(key, value);
			} else {
				formData.append(key, JSON.stringify(value));
			}
		};

		Object.entries(options.formData)
			.filter(([, value]) => value !== undefined && value !== null)
			.forEach(([key, value]) => {
				if (Array.isArray(value)) {
					value.forEach(v => process(key, v));
				} else {
					process(key, value);
				}
			});

		return formData;
	}
	return undefined;
};`},useData:!0};var Bs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getQueryString = (params: Record<string, unknown>): string => {
	const qs: string[] = [];

	const append = (key: string, value: unknown) => {
		qs.push(\`\${encodeURIComponent(key)}=\${encodeURIComponent(String(value))}\`);
	};

	const encodePair = (key: string, value: unknown) => {
		if (value === undefined || value === null) {
			return;
		}

		if (value instanceof Date) {
			append(key, value.toISOString());
		} else if (Array.isArray(value)) {
			value.forEach(v => encodePair(key, v));
		} else if (typeof value === 'object') {
			Object.entries(value).forEach(([k, v]) => encodePair(\`\${key}[\${k}]\`, v));
		} else {
			append(key, value);
		}
	};

	Object.entries(params).forEach(([key, value]) => encodePair(key, value));

	return qs.length ? \`?\${qs.join('&')}\` : '';
};`},useData:!0};var Ls={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `const getUrl = (config: OpenAPIConfig, options: ApiRequestOptions): string => {
	const encoder = config.ENCODE_PATH || encodeURI;

	const path = options.url
		.replace('{api-version}', config.VERSION)
		.replace(/{(.*?)}/g, (substring: string, group: string) => {
			if (options.path?.hasOwnProperty(group)) {
				return encoder(String(options.path[group]));
			}
			return substring;
		});

	const url = config.BASE + path;
	return options.query ? url + getQueryString(options.query) : url;
};`},useData:!0};var _s={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const isBlob = (value: any): value is Blob => {
	return value instanceof Blob;
};`},useData:!0};var Us={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const isFormData = (value: unknown): value is FormData => {
	return value instanceof FormData;
};`},useData:!0};var Vs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const isString = (value: unknown): value is string => {
	return typeof value === 'string';
};`},useData:!0};var Ks={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const isStringWithValue = (value: unknown): value is string => {
	return isString(value) && value !== '';
};`},useData:!0};var Qs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const isSuccess = (status: number): boolean => {
	return status >= 200 && status < 300;
};`},useData:!0};var Ws={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `type Resolver<T> = (options: ApiRequestOptions<T>) => Promise<T>;

export const resolve = async <T>(options: ApiRequestOptions<T>, resolver?: T | Resolver<T>): Promise<T | undefined> => {
	if (typeof resolver === 'function') {
		return (resolver as Resolver<T>)(options);
	}
	return resolver;
};`},useData:!0};var Gs={1:function(e,t,r,s,n){return `import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { ApiRequestOptions } from './ApiRequestOptions';
import { BaseHttpRequest } from './BaseHttpRequest';
import type { OpenAPIConfig } from './OpenAPI';
import { OpenAPI } from './OpenAPI';
import { request as __request } from './request';
`},3:function(e,t,r,s,n){return `import type { ApiRequestOptions } from './ApiRequestOptions';
import { BaseHttpRequest } from './BaseHttpRequest';
import type { CancelablePromise } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';
import { request as __request } from './request';
`},5:function(e,t,r,s,n){return `@Injectable()
`},7:function(e,t,r,s,n){return `	constructor(
		@Inject(OpenAPI)
		config: OpenAPIConfig,
		http: HttpClient,
	) {
		super(config, http);
	}
`},9:function(e,t,r,s,n){return `	constructor(config: OpenAPIConfig) {
		super(config);
	}
`},11:function(e,t,r,s,n){return `	/**
	 * Request method
	 * @param options The request options from the service
	 * @returns Observable<T>
	 * @throws ApiError
	 */
	public override request<T>(options: ApiRequestOptions<T>): Observable<T> {
		return __request(this.config, this.http, options);
	}
`},13:function(e,t,r,s,n){return `	/**
	 * Request method
	 * @param options The request options from the service
	 * @returns CancelablePromise<T>
	 * @throws ApiError
	 */
	public override request<T>(options: ApiRequestOptions<T>): CancelablePromise<T> {
		return __request(this.config, options);
	}
`},compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.lookupProperty||function(p,c){if(Object.prototype.hasOwnProperty.call(p,c))return p[c]};return ((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.program(3,n,0),data:n,loc:{start:{line:1,column:0},end:{line:17,column:11}}}))!=null?o:"")+`
`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(5,n,0),inverse:e.noop,data:n,loc:{start:{line:19,column:0},end:{line:21,column:11}}}))!=null?o:"")+"export class "+((o=e.lambda(e.strict(t,"httpRequest",{start:{line:22,column:15},end:{line:22,column:26}}),t))!=null?o:"")+` extends BaseHttpRequest {

`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(7,n,0),inverse:e.program(9,n,0),data:n,loc:{start:{line:24,column:1},end:{line:36,column:12}}}))!=null?o:"")+`
`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(11,n,0),inverse:e.program(13,n,0),data:n,loc:{start:{line:38,column:1},end:{line:58,column:12}}}))!=null?o:"")+"}"},useData:!0};var Xs={1:function(e,t,r,s,n){return `import type { HttpResponse } from '@angular/common/http';
`},3:function(e,t,r,s,n){return `import type { AxiosRequestConfig, AxiosResponse } from 'axios';
`},5:function(e,t,r,s,n){return `import type { RequestInit, Response } from 'node-fetch';
`},7:function(e,t,r,s,n){return `		response: Interceptors<HttpResponse<any>>;
`},9:function(e,t,r,s,n){return `		request: Interceptors<AxiosRequestConfig>;
		response: Interceptors<AxiosResponse>;
`},11:function(e,t,r,s,n){return `		request: Interceptors<RequestInit>;
		response: Interceptors<Response>;
`},13:function(e,t,r,s,n){return `		request: Interceptors<XMLHttpRequest>;
		response: Interceptors<XMLHttpRequest>;
`},15:function(e,t,r,s,n){return `		request: new Interceptors(),
`},compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.strict,p=e.lambda,c=e.lookupProperty||function(m,u){if(Object.prototype.hasOwnProperty.call(m,u))return m[u]};return ((o=c(r,"equals").call(a,c(c(c(c(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n,loc:{start:{line:1,column:0},end:{line:3,column:11}}}))!=null?o:"")+((o=c(r,"equals").call(a,c(c(c(c(n,"root"),"$config"),"client"),"name"),"legacy/axios",{name:"equals",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n,loc:{start:{line:4,column:0},end:{line:6,column:11}}}))!=null?o:"")+((o=c(r,"equals").call(a,c(c(c(c(n,"root"),"$config"),"client"),"name"),"legacy/node",{name:"equals",hash:{},fn:e.program(5,n,0),inverse:e.noop,data:n,loc:{start:{line:7,column:0},end:{line:9,column:11}}}))!=null?o:"")+`import type { ApiRequestOptions } from './ApiRequestOptions';

type Headers = Record<string, string>;
type Middleware<T> = (value: T) => T | Promise<T>;
type Resolver<T> = (options: ApiRequestOptions<T>) => Promise<T>;

export class Interceptors<T> {
  _fns: Middleware<T>[];

  constructor() {
    this._fns = [];
  }

  eject(fn: Middleware<T>): void {
    const index = this._fns.indexOf(fn);
    if (index !== -1) {
      this._fns = [...this._fns.slice(0, index), ...this._fns.slice(index + 1)];
    }
  }

  use(fn: Middleware<T>): void {
    this._fns = [...this._fns, fn];
  }
}

export type OpenAPIConfig = {
	BASE: string;
	CREDENTIALS: 'include' | 'omit' | 'same-origin';
	ENCODE_PATH?: ((path: string) => string) | undefined;
	HEADERS?: Headers | Resolver<Headers> | undefined;
	PASSWORD?: string | Resolver<string> | undefined;
	TOKEN?: string | Resolver<string> | undefined;
	USERNAME?: string | Resolver<string> | undefined;
	VERSION: string;
	WITH_CREDENTIALS: boolean;
	interceptors: {
`+((o=c(r,"equals").call(a,c(c(c(c(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(7,n,0),inverse:e.noop,data:n,loc:{start:{line:46,column:2},end:{line:48,column:13}}}))!=null?o:"")+((o=c(r,"equals").call(a,c(c(c(c(n,"root"),"$config"),"client"),"name"),"legacy/axios",{name:"equals",hash:{},fn:e.program(9,n,0),inverse:e.noop,data:n,loc:{start:{line:49,column:2},end:{line:52,column:13}}}))!=null?o:"")+((o=c(r,"equals").call(a,c(c(c(c(n,"root"),"$config"),"client"),"name"),"legacy/fetch",{name:"equals",hash:{},fn:e.program(11,n,0),inverse:e.noop,data:n,loc:{start:{line:53,column:2},end:{line:56,column:13}}}))!=null?o:"")+((o=c(r,"equals").call(a,c(c(c(c(n,"root"),"$config"),"client"),"name"),"legacy/node",{name:"equals",hash:{},fn:e.program(11,n,0),inverse:e.noop,data:n,loc:{start:{line:57,column:2},end:{line:60,column:13}}}))!=null?o:"")+((o=c(r,"equals").call(a,c(c(c(c(n,"root"),"$config"),"client"),"name"),"legacy/xhr",{name:"equals",hash:{},fn:e.program(13,n,0),inverse:e.noop,data:n,loc:{start:{line:61,column:2},end:{line:64,column:13}}}))!=null?o:"")+`	};
};

export const OpenAPI: OpenAPIConfig = {
	BASE: '`+((o=p(i(t,"server",{start:{line:69,column:11},end:{line:69,column:17}}),t))!=null?o:"")+`',
	CREDENTIALS: 'include',
	ENCODE_PATH: undefined,
	HEADERS: undefined,
	PASSWORD: undefined,
	TOKEN: undefined,
	USERNAME: undefined,
	VERSION: '`+((o=p(i(t,"version",{start:{line:76,column:14},end:{line:76,column:21}}),t))!=null?o:"")+`',
	WITH_CREDENTIALS: false,
	interceptors: {
`+((o=c(r,"notEquals").call(a,c(c(c(c(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"notEquals",hash:{},fn:e.program(15,n,0),inverse:e.noop,data:n,loc:{start:{line:79,column:2},end:{line:81,column:16}}}))!=null?o:"")+`		response: new Interceptors(),
	},
};`},useData:!0};var zs={1:function(e,t,r,s,n){var o,a=e.lookupProperty||function(i,p){if(Object.prototype.hasOwnProperty.call(i,p))return i[p]};return (o=e.invokePartial(a(s,"angular/request"),t,{name:"angular/request",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:""},3:function(e,t,r,s,n){var o,a=e.lookupProperty||function(i,p){if(Object.prototype.hasOwnProperty.call(i,p))return i[p]};return (o=e.invokePartial(a(s,"axios/request"),t,{name:"axios/request",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:""},5:function(e,t,r,s,n){var o,a=e.lookupProperty||function(i,p){if(Object.prototype.hasOwnProperty.call(i,p))return i[p]};return (o=e.invokePartial(a(s,"fetch/request"),t,{name:"fetch/request",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:""},7:function(e,t,r,s,n){var o,a=e.lookupProperty||function(i,p){if(Object.prototype.hasOwnProperty.call(i,p))return i[p]};return (o=e.invokePartial(a(s,"xhr/request"),t,{name:"xhr/request",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:""},compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.lookupProperty||function(p,c){if(Object.prototype.hasOwnProperty.call(p,c))return p[c]};return ((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/angular",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n,loc:{start:{line:1,column:0},end:{line:1,column:87}}}))!=null?o:"")+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/axios",{name:"equals",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n,loc:{start:{line:2,column:0},end:{line:2,column:83}}}))!=null?o:"")+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/fetch",{name:"equals",hash:{},fn:e.program(5,n,0),inverse:e.noop,data:n,loc:{start:{line:3,column:0},end:{line:3,column:83}}}))!=null?o:"")+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/node",{name:"equals",hash:{},fn:e.program(5,n,0),inverse:e.noop,data:n,loc:{start:{line:4,column:0},end:{line:4,column:82}}}))!=null?o:"")+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"client"),"name"),"legacy/xhr",{name:"equals",hash:{},fn:e.program(7,n,0),inverse:e.noop,data:n,loc:{start:{line:5,column:0},end:{line:5,column:79}}}))!=null?o:"")},usePartial:!0,useData:!0};var Js={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getHeaders = async <T>(config: OpenAPIConfig, options: ApiRequestOptions<T>): Promise<Headers> => {
	const [token, username, password, additionalHeaders] = await Promise.all([
		// @ts-ignore
		resolve(options, config.TOKEN),
		// @ts-ignore
		resolve(options, config.USERNAME),
		// @ts-ignore
		resolve(options, config.PASSWORD),
		// @ts-ignore
		resolve(options, config.HEADERS),
	]);

	const headers = Object.entries({
		Accept: 'application/json',
		...additionalHeaders,
		...options.headers,
	})
		.filter(([, value]) => value !== undefined && value !== null)
		.reduce((headers, [key, value]) => ({
			...headers,
			[key]: String(value),
		}), {} as Record<string, string>);

	if (isStringWithValue(token)) {
		headers['Authorization'] = \`Bearer \${token}\`;
	}

	if (isStringWithValue(username) && isStringWithValue(password)) {
		const credentials = base64(\`\${username}:\${password}\`);
		headers['Authorization'] = \`Basic \${credentials}\`;
	}

	if (options.body !== undefined) {
		if (options.mediaType) {
			headers['Content-Type'] = options.mediaType;
		} else if (isBlob(options.body)) {
			headers['Content-Type'] = options.body.type || 'application/octet-stream';
		} else if (isString(options.body)) {
			headers['Content-Type'] = 'text/plain';
		} else if (!isFormData(options.body)) {
			headers['Content-Type'] = 'application/json';
		}
	}

	return new Headers(headers);
};`},useData:!0};var Ys={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getRequestBody = (options: ApiRequestOptions): unknown => {
	if (options.body !== undefined) {
		if (options.mediaType?.includes('application/json') || options.mediaType?.includes('+json')) {
			return JSON.stringify(options.body);
		} else if (isString(options.body) || isBlob(options.body) || isFormData(options.body)) {
			return options.body;
		} else {
			return JSON.stringify(options.body);
		}
	}
	return undefined;
};`},useData:!0};var Zs={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getResponseBody = (xhr: XMLHttpRequest): unknown => {
	if (xhr.status !== 204) {
		try {
			const contentType = xhr.getResponseHeader('Content-Type');
			if (contentType) {
				if (contentType.includes('application/json') || contentType.includes('+json')) {
					return JSON.parse(xhr.responseText);
				} else {
					return xhr.responseText;
				}
			}
		} catch (error) {
			console.error(error);
		}
	}
	return undefined;
};`},useData:!0};var ei={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const getResponseHeader = (xhr: XMLHttpRequest, responseHeader?: string): string | undefined => {
	if (responseHeader) {
		const content = xhr.getResponseHeader(responseHeader);
		if (isString(content)) {
			return content;
		}
	}
	return undefined;
};`},useData:!0};var ti={1:function(e,t,r,s,n){return "ApiResult<T>"},3:function(e,t,r,s,n){return "T"},5:function(e,t,r,s,n){return "result.body"},7:function(e,t,r,s,n){return "result"},compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){var o,a=t??(e.nullContext||{}),i=e.lookupProperty||function(p,c){if(Object.prototype.hasOwnProperty.call(p,c))return p[c]};return `import { ApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { CancelablePromise } from './CancelablePromise';
import type { OnCancel } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';

`+((o=e.invokePartial(i(s,"functions/isString"),t,{name:"functions/isString",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isStringWithValue"),t,{name:"functions/isStringWithValue",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isBlob"),t,{name:"functions/isBlob",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isFormData"),t,{name:"functions/isFormData",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/isSuccess"),t,{name:"functions/isSuccess",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/base64"),t,{name:"functions/base64",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/getQueryString"),t,{name:"functions/getQueryString",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/getUrl"),t,{name:"functions/getUrl",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/getFormData"),t,{name:"functions/getFormData",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/resolve"),t,{name:"functions/resolve",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"fetch/getHeaders"),t,{name:"fetch/getHeaders",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"xhr/getRequestBody"),t,{name:"xhr/getRequestBody",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"xhr/sendRequest"),t,{name:"xhr/sendRequest",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"xhr/getResponseHeader"),t,{name:"xhr/getResponseHeader",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"xhr/getResponseBody"),t,{name:"xhr/getResponseBody",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

`+((o=e.invokePartial(i(s,"functions/catchErrorCodes"),t,{name:"functions/catchErrorCodes",data:n,helpers:r,partials:s,decorators:e.decorators}))!=null?o:"")+`

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"services"),"response"),"response",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.program(3,n,0),data:n,loc:{start:{line:60,column:30},end:{line:60,column:116}}}))!=null?o:"")+`>
 * @throws ApiError
 */
export const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions<T>): CancelablePromise<`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"services"),"response"),"response",{name:"equals",hash:{},fn:e.program(1,n,0),inverse:e.program(3,n,0),data:n,loc:{start:{line:63,column:100},end:{line:63,column:186}}}))!=null?o:"")+`> => {
	return new CancelablePromise(async (resolve, reject, onCancel) => {
		try {
			const url = getUrl(config, options);
			const formData = getFormData(options);
			const body = getRequestBody(options);
			const headers = await getHeaders(config, options);

			if (!onCancel.isCancelled) {
				let response = await sendRequest(config, options, url, body, formData, headers, onCancel);

				for (const fn of config.interceptors.response._fns) {
					response = await fn(response);
				}

				const responseBody = getResponseBody(response);
				const responseHeader = getResponseHeader(response, options.responseHeader);

				let transformedBody = responseBody;
				if (options.responseTransformer && isSuccess(response.status)) {
					transformedBody = await options.responseTransformer(responseBody)
				}

				const result: ApiResult = {
					url,
					ok: isSuccess(response.status),
					status: response.status,
					statusText: response.statusText,
					body: responseHeader ?? transformedBody,
				};

				catchErrorCodes(options, result);

				resolve(`+((o=i(r,"equals").call(a,i(i(i(i(n,"root"),"$config"),"services"),"response"),"body",{name:"equals",hash:{},fn:e.program(5,n,0),inverse:e.program(7,n,0),data:n,loc:{start:{line:96,column:12},end:{line:96,column:98}}}))!=null?o:"")+`);
			}
		} catch (error) {
			reject(error);
		}
	});
};`},usePartial:!0,useData:!0};var ni={compiler:[8,">= 4.3.0"],main:function(e,t,r,s,n){return `export const sendRequest = async (
	config: OpenAPIConfig,
	options: ApiRequestOptions,
	url: string,
	body: any,
	formData: FormData | undefined,
	headers: Headers,
	onCancel: OnCancel
): Promise<XMLHttpRequest> => {
	let xhr = new XMLHttpRequest();
	xhr.open(options.method, url, true);
	xhr.withCredentials = config.WITH_CREDENTIALS;

	headers.forEach((value, key) => {
		xhr.setRequestHeader(key, value);
	});

	return new Promise<XMLHttpRequest>(async (resolve, reject) => {
		xhr.onload = () => resolve(xhr);
		xhr.onabort = () => reject(new Error('Request aborted'));
		xhr.onerror = () => reject(new Error('Network error'));

		for (const fn of config.interceptors.request._fns) {
			xhr = await fn(xhr);
		}

		xhr.send(body ?? formData);

		onCancel(() => xhr.abort());
	});
};`},useData:!0};var mp=()=>{f__default.default.registerHelper("camelCase",function(e){return j({input:e})}),f__default.default.registerHelper("equals",function(e,t,r){return e===t?r.fn(this):r.inverse(this)}),f__default.default.registerHelper("ifdef",function(...e){let t=e.pop();return e.every(r=>!r)?t.inverse(this):t.fn(this)}),f__default.default.registerHelper("notEquals",function(e,t,r){return e!==t?r.fn(this):r.inverse(this)}),f__default.default.registerHelper("transformServiceName",Le);},ri=()=>{mp();let e={client:f__default.default.template(fs),core:{apiError:f__default.default.template(bs),apiRequestOptions:f__default.default.template(Ps),apiResult:f__default.default.template(Cs),baseHttpRequest:f__default.default.template(Ss),cancelablePromise:f__default.default.template(ks),httpRequest:f__default.default.template(Gs),request:f__default.default.template(zs),settings:f__default.default.template(Xs)}};return f__default.default.registerPartial("functions/base64",f__default.default.template(js)),f__default.default.registerPartial("functions/catchErrorCodes",f__default.default.template(Hs)),f__default.default.registerPartial("functions/getFormData",f__default.default.template(Fs)),f__default.default.registerPartial("functions/getQueryString",f__default.default.template(Bs)),f__default.default.registerPartial("functions/getUrl",f__default.default.template(Ls)),f__default.default.registerPartial("functions/isBlob",f__default.default.template(_s)),f__default.default.registerPartial("functions/isFormData",f__default.default.template(Us)),f__default.default.registerPartial("functions/isString",f__default.default.template(Vs)),f__default.default.registerPartial("functions/isStringWithValue",f__default.default.template(Ks)),f__default.default.registerPartial("functions/isSuccess",f__default.default.template(Qs)),f__default.default.registerPartial("functions/resolve",f__default.default.template(Ws)),f__default.default.registerPartial("fetch/getHeaders",f__default.default.template(Ns)),f__default.default.registerPartial("fetch/getRequestBody",f__default.default.template(ws)),f__default.default.registerPartial("fetch/getResponseBody",f__default.default.template($s)),f__default.default.registerPartial("fetch/getResponseHeader",f__default.default.template(Is)),f__default.default.registerPartial("fetch/request",f__default.default.template(Ds)),f__default.default.registerPartial("fetch/sendRequest",f__default.default.template(Ms)),f__default.default.registerPartial("xhr/getHeaders",f__default.default.template(Js)),f__default.default.registerPartial("xhr/getRequestBody",f__default.default.template(Ys)),f__default.default.registerPartial("xhr/getResponseBody",f__default.default.template(Zs)),f__default.default.registerPartial("xhr/getResponseHeader",f__default.default.template(ei)),f__default.default.registerPartial("xhr/request",f__default.default.template(ti)),f__default.default.registerPartial("xhr/sendRequest",f__default.default.template(ni)),f__default.default.registerPartial("axios/getHeaders",f__default.default.template(Ts)),f__default.default.registerPartial("axios/getRequestBody",f__default.default.template(Rs)),f__default.default.registerPartial("axios/getResponseBody",f__default.default.template(As)),f__default.default.registerPartial("axios/getResponseHeader",f__default.default.template(vs)),f__default.default.registerPartial("axios/request",f__default.default.template(Es)),f__default.default.registerPartial("axios/sendRequest",f__default.default.template(qs)),f__default.default.registerPartial("angular/getHeaders",f__default.default.template(ds)),f__default.default.registerPartial("angular/getRequestBody",f__default.default.template(ys)),f__default.default.registerPartial("angular/getResponseBody",f__default.default.template(gs)),f__default.default.registerPartial("angular/getResponseHeader",f__default.default.template(hs)),f__default.default.registerPartial("angular/request",f__default.default.template(xs)),f__default.default.registerPartial("angular/sendRequest",f__default.default.template(Os)),e};var oi=e=>{let t=g(),r=t.services.filter?new RegExp(t.services.filter):void 0;return !r||r.test(e)},si=e=>{let t=g();return !R(t)||e.prop!=="api-version"},ii=e=>{let t=g();if(t.services.operationId&&e.id)return j({input:Ue(e.id)});let r=e.path;return R(t)&&(r=r.replace(/[^/]*?{api-version}.*?\//g,"")),r=r.replace(/{(.*?)}/g,"by-$1").replace(/[/:]/g,"-"),j({input:`${e.method}-${r}`})},ai=e=>{let t=g();return R(t)?un(e.prop):e.prop};var pi=e=>`${e}-end`,On=e=>`${e}-length`,ci=e=>`${e}-start`,N={clear:()=>{performance.clearMarks(),performance.clearMeasures();},end:e=>performance.mark(pi(e)),getEntriesByName:e=>performance.getEntriesByName(On(e)),measure:e=>performance.measure(On(e),ci(e),pi(e)),start:e=>performance.mark(ci(e))},Lt=class{totalMeasure;constructor({totalMark:t}){this.totalMeasure=N.measure(t);}report({marks:t}){let r=Math.ceil(this.totalMeasure.duration*100)/100,s=this.totalMeasure.name;console.warn(`${s.substring(0,s.length-On("").length)}: ${r.toFixed(2)}ms`),t.forEach(n=>{let o=N.measure(n),a=Math.ceil(o.duration*100)/100,i=Math.ceil(o.duration/this.totalMeasure.duration*100*100)/100;console.warn(`${n}: ${a.toFixed(2)}ms (${i.toFixed(2)}%)`);});}};function mi(e){return {...e,models:e.models.map(t=>lp(t)),services:up(e.operations).map(fp),types:{}}}var lp=e=>({...e,$refs:e.$refs.filter((t,r,s)=>H(t,r,s)),enum:e.enum.filter((t,r,s)=>s.findIndex(n=>n.value===t.value)===r),enums:e.enums.filter((t,r,s)=>s.findIndex(n=>n.name===t.name)===r),imports:e.imports.filter((t,r,s)=>H(t,r,s)&&t!==e.name).sort($e)}),up=e=>{let t=g(),r=new Map;return e.forEach(s=>{(s.tags?.length&&(t.services.asClass||t.name)?s.tags.filter(H):["Default"]).forEach(o=>{let a={...s,service:gp(o)},i=r.get(a.service)||yp(a);i.$refs=[...i.$refs,...a.$refs],i.imports=[...i.imports,...a.imports],i.operations=[...i.operations,a],r.set(a.service,i);});}),Array.from(r.values())},fp=e=>{let t={...e};return t.operations=dp(t),t.operations.forEach(r=>{t.imports.push(...r.imports);}),t.imports=t.imports.filter(H).sort($e),t},dp=e=>{let t=new Map;return e.operations.map(r=>{let s={...r};s.imports.push(...s.parameters.flatMap(i=>i.imports));let n=s.responses.filter(i=>i.responseTypes.includes("success"));s.imports.push(...n.flatMap(i=>i.imports));let o=s.name,a=t.get(o)||0;return a>0&&(s.name=`${o}${a}`),t.set(o,a+1),s})},yp=e=>({$refs:[],imports:[],name:e.service,operations:[]}),gp=e=>j({input:Ue(e),pascalCase:!0});var Op={biome:{args:e=>["format","--write",e],command:"biome",name:"Biome (Format)"},prettier:{args:e=>["--ignore-unknown",e,"--write","--ignore-path","./.prettierignore"],command:"prettier",name:"Prettier"}},bp={biome:{args:e=>["lint","--apply",e],command:"biome",name:"Biome (Lint)"},eslint:{args:e=>[e,"--fix"],command:"eslint",name:"ESLint"}},Pp=()=>{let e=g();if(e.output.format){let t=Op[e.output.format];console.log(`\u2728 Running ${t.name}`),(0, bn.sync)(t.command,t.args(e.output.path));}if(e.output.lint){let t=bp[e.output.lint];console.log(`\u2728 Running ${t.name}`),(0, bn.sync)(t.command,t.args(e.output.path));}},Cp=()=>{let{client:e}=g();switch(e.name){case"legacy/angular":return console.log("\u2728 Creating Angular client");case"@hey-api/client-axios":case"legacy/axios":return console.log("\u2728 Creating Axios client");case"@hey-api/client-fetch":case"legacy/fetch":return console.log("\u2728 Creating Fetch client");case"legacy/node":return console.log("\u2728 Creating Node.js client");case"legacy/xhr":return console.log("\u2728 Creating XHR client")}},Tp=e=>{let t={bundle:!1,name:""};return typeof e.client=="string"?t.name=e.client:e.client&&(t={...t,...e.client}),t},Rp=e=>{let t={format:!1,lint:!1,path:""};return typeof e.output=="string"?t.path=e.output:t={...t,...e.output},t},Ap=e=>(e.plugins??[]).map(r=>typeof r=="string"?xn[r]:{...xn[r.name],...r}),vp=e=>{let t={export:!0,type:"json"};return typeof e.schemas=="boolean"?t.export=e.schemas:t={...t,...e.schemas},t},Ep=e=>{let t={asClass:!1,export:!0,name:"{{name}}Service",operationId:!0,response:"body"};return typeof e.services=="boolean"?t.export=e.services:typeof e.services=="string"?t.include=e.services:t={...t,...e.services},t},qp=(e,t)=>{let r={dates:!1,enums:!1,export:!0,name:"preserve",tree:!t.export};return typeof e.types=="boolean"?r.export=e.types:typeof e.types=="string"?r.include=e.types:r={...r,...e.types},r},Sp=async e=>{let t;if(e.configFile){let n=e.configFile.split(".");t=n.slice(0,n.length-1).join(".");}let{config:r}=await c12.loadConfig({configFile:t,name:"openapi-ts"});return (Array.isArray(e)?e:Array.isArray(r)?r.map(n=>({...n,...e})):[{...r??{},...e}]).map(n=>{let{base:o,configFile:a="",debug:i=!1,dryRun:p=!1,exportCore:c=!0,experimental_parser:m=!1,input:u,name:d,request:h,useOptions:O=!0}=n;i&&console.warn("userConfig:",n);let x=Rp(n);if(!u)throw new Error("\u{1F6AB} missing input - which OpenAPI specification should we use to generate your client?");if(!x.path)throw new Error("\u{1F6AB} missing output - where should we generate your client?");let E=Tp(n);if(E.name&&!ls.includes(E.name))throw new Error("\u{1F6AB} invalid client - select a valid client value");O||console.warn("\u2757\uFE0F Deprecation warning: useOptions set to false. This setting will be removed in future versions. Please migrate useOptions to true https://heyapi.vercel.app/openapi-ts/migrating.html#v0-27-38");let C=Ap(n),ue=vp(n),ke=Ep(n),_=qp(n,ke);x.path=K__default.default.resolve(process.cwd(),x.path);let J=ur({base:o,client:E,configFile:a,debug:i,dryRun:p,experimental_parser:m,exportCore:R(E)?c:!1,input:u,name:d,output:x,plugins:C,request:h,schemas:ue,services:ke,types:_,useOptions:O});return i&&console.warn("config:",J),J})};async function kp(e){N.start("createClient"),N.start("config");let t=await Sp(e);N.end("config"),N.start("handlebars");let r=ri();N.end("handlebars");let s=a=>async()=>{N.start("openapi");let i=typeof a.input=="string"?await us(a.input):a.input;if(N.end("openapi"),a.experimental_parser)N.start("experimental_parser"),Mo({spec:i}),N.end("experimental_parser");else {N.start("parser");let p=Do({config:{filterFn:{operation:oi,operationParameter:si},nameFn:{operation:ii,operationParameter:ai}},openApi:i}),c=mi(p);return N.end("parser"),Cp(),N.start("generator"),await es(i,c,r),N.end("generator"),N.start("postprocess"),a.dryRun||(Pp(),console.log("\u2728 Done! Your client is located in:",a.output.path)),N.end("postprocess"),c}},n=[],o=t.map(a=>s(a));for(let a of o){let i=await a();i&&n.push(i);}return N.end("createClient"),e.debug&&new Lt({totalMark:"createClient"}).report({marks:["config","openapi","handlebars","parser","generator","postprocess"]}),n}var Np=e=>e,nx={createClient:kp,defineConfig:Np};

exports.createClient = kp;
exports.default = nx;
exports.defineConfig = Np;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map