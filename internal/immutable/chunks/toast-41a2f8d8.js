import{d as L,a as R,o as q}from"./outfit-509d794b.js";import{C as T,t as D}from"./app-stores-3a3a5ec5.js";import{d as E,g as I,b as V}from"./index-e93f33b3.js";import{_ as s}from"./preload-helper-176e53da.js";import{y as j,$ as O,F as x}from"./runtime.esm-15c0af4d.js";const z=new RegExp(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i),C=new RegExp(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i),S=t=>z.test(t)||C.test(t.substr(0,4)),N="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54",M=()=>{const t=screen.orientation?.angle;return!(t===90||t===270)&&window.matchMedia("screen and (max-width: 760px)").matches},Y=()=>{const t=navigator.userAgent||navigator.vendor||window.opera||N;return navigator?.userAgentData?.mobile||S(t)||M()},Z=()=>{const t=window.navigator?.userAgent?.toLowerCase(),e=window.chrome,r=t?.indexOf("chrome");return t?.match("safari")&&!r&&!e},W=[{version:1,characters:["qiqi","keqing","diluc","mona","jean"],featured:{bannerName:"wanderlust-invocation-1",character:"jean"}},{version:2,characters:["qiqi","keqing","diluc","mona","jean"],featured:{bannerName:"wanderlust-invocation-2",character:"qiqi"}},{version:3,characters:["qiqi","keqing","diluc","mona","jean","tighnari"],featured:{bannerName:"wanderlust-invocation-2",character:"qiqi"}},{version:4,characters:["qiqi","keqing","diluc","mona","jean","tighnari","dehya"],featured:{bannerName:"wanderlust-invocation-2",character:"qiqi"}}],tt=({currentPity:t=0,maxPity:e=90,baseRate:r=.6,rateIncreasedAt:o=74}={})=>{if(r<=0&&t<e)return 0;if(t<o)return r;if(t>=e)return 100;const a=(100-r)/(e+1-o);return(t+1-o)*a+r},b=t=>{let e=[];for(let a=0;a<t.length;a++)e[a]=t[a].chance+(e[a-1]||0);const r=Math.random()*e[e.length-1];return t[e.findIndex(a=>a>r)]},w=(t,e)=>{if(t==="beginner")return T["character-event"][e];const r=T[t],o=E.get(t);if(!(o[e]||o[e]>=0))return r[e]||0;const a=parseFloat(o[e]);return isNaN(a)?o[e]||0:a||0},et=(t,e,r)=>{const o=E.get(t);if(typeof r=="boolean")o[e]=r;else{const a=parseFloat(r);isNaN(a)?o[e]=r:o[e]=a}E.set(t,o)},rt=t=>({mondstadt:"anemo",liyue:"geo",inazuma:"electro",sumeru:"dendro",fontaine:"hydro",natlan:"pyro",snezhnaya:"cryo"})[t],d=(t,e=[])=>g(t).filter(({limited:r,name:o})=>!r||e.includes(o)),U=(t,e=null,r=null)=>t.filter(({release:o})=>{if(!o)return!0;const[a,i]=o.split("-");return!(parseFloat(e)<parseFloat(a)||parseFloat(e)===parseFloat(a)&&r<=parseInt(i))}),ot=t=>Array.isArray(t)?t.length<2?t[0]:t[Math.floor(Math.random()*t.length)]:t,at=(t=1,e=9)=>Math.floor(Math.random()*(e-t+1)+t),_=t=>L.filter(({rarity:e})=>e===t).map(e=>({type:"character",...e})),g=t=>R.filter(({rarity:e})=>e===t).map(e=>({type:"weapon",...e})),it=t=>t?L.find(({name:r})=>t===r)||{}:{},nt=t=>t?R.find(({name:r})=>r===t)||{}:{},st=t=>{if(!t)return{};const e=L.map(i=>({type:"character",...i})),r=R.map(i=>({type:"weapon",...i}));return[...e,...r].find(({name:i})=>t===i)||{}},k=t=>t==="standard"?_(4):_(4).filter(({name:e})=>!q.includes(e)),ct=()=>d(3),lt=({banner:t="standard",region:e=null,version:r=null,phase:o=null,type:a=null,useRateup:i=!1,rateupNamelist:m=[]}={})=>{if(i)return(t==="character-event"||t==="beginner"?_(4):g(4)).filter(({name:y})=>m.includes(y));if(t==="beginner")return k(t).filter(({release:f})=>f==="1.0-0");let n;const c=t==="chronicled",l=c?_(4):k(t),p=c?g(4):d(4);if(a=="all")n=[...l,...p];else if(a==="character")n=l;else if(a==="weapon")n=p;else{const u=w(t,"charRate"),{itemType:f}=b([{itemType:"char",chance:u},{itemType:"wp",chance:100-u}]);n=f==="wp"?p:l}const v=U(n,r,o);return c?v.filter(({origin:u,name:f})=>u===e||m.includes(f)):v.filter(({name:u})=>!m.includes(u))},h=(t=1,e=[])=>{const{characters:r}=W.find(({version:o})=>o===t);return _(5).filter(({name:o})=>r.includes(o)||e.includes(o))},ut=({banner:t="standard",region:e=null,stdver:r=1,type:o=null,useRateup:a=!1,rateupItem:i=[],customData:m={}}={})=>{if(a&&t.match(/character|chronicled/)){if(Object.keys(m).length>0){const{vision:l,character:p,artPosition:v,itemID:u}=m;return{vision:l,itemID:u,name:p,offset:v||{},type:"character",rarity:5,custom:!0}}return(o==="weapon"?g:_)(5).find(({name:l})=>l===i[0])||{}}if(t.match("chronicled")){let n=[];return!o||o==="all"?n=[...h(r,i),...d(5,i)]:o==="weapon"?n=d(5,i):n=h(r,i),n.filter(({origin:l,name:p})=>l===e||i.includes(p))}if(a&&t==="weapon-event")return g(5).filter(({name:c})=>i.includes(c));if(t==="weapon-event")return d(5).filter(({name:c})=>!i.includes(c));if(t==="beginner")return h(1);if(t==="standard"||!t){let n;if(o==="all")n=[...h(r),...d(5)];else if(o==="character")n=h(r);else if(o==="weapon")n=d(5);else{const c=w(t,"charRate"),{itemType:l}=b([{itemType:"char",chance:c},{itemType:"wp",chance:100-c}]);n=l==="wp"?d(5):h(r)}return n}return h(r).filter(({name:n})=>!i.includes(n))},mt=t=>{const e=w(t,"winRate"),{item:r}=b([{item:"rateup",chance:e},{item:"std",chance:100-e}]);return r==="rateup"},dt=(t,e)=>{const r=I.get(`${t}-${e}star`),o=w(t,"guaranteed");return{status:r,never:o==="never",always:o==="always"}},A=(t,e)=>{const r=t[e];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})},P=["zh-CN","zh-TW","de-DE","en-US","fr-FR","id-ID","it-IT","ja-JP","pt-BR","ru-RU","th-TH","vi-VN"],B=["zh-CN","zh-TW","en-US","it-IT","ja-JP","pt-BR","ru-RU","vi-VN"],F=()=>{const e=V.get("locale")||x();return P.find(o=>o.includes(e))||"en-US"},pt=()=>{P.forEach(e=>{j(e,()=>A(Object.assign({"../../locales/de-DE.json":()=>s(()=>import("./de-DE-e83158bb.js"),[],import.meta.url),"../../locales/en-US.json":()=>s(()=>import("./en-US-9c569f3e.js"),[],import.meta.url),"../../locales/fr-FR.json":()=>s(()=>import("./fr-FR-9e110165.js"),[],import.meta.url),"../../locales/id-ID.json":()=>s(()=>import("./id-ID-500d713f.js"),[],import.meta.url),"../../locales/it-IT.json":()=>s(()=>import("./it-IT-6ef7bbdf.js"),[],import.meta.url),"../../locales/ja-JP.json":()=>s(()=>import("./ja-JP-f8222e0b.js"),[],import.meta.url),"../../locales/pt-BR.json":()=>s(()=>import("./pt-BR-07c03395.js"),[],import.meta.url),"../../locales/ru-RU.json":()=>s(()=>import("./ru-RU-59e22c4c.js"),[],import.meta.url),"../../locales/th-TH.json":()=>s(()=>import("./th-TH-a193552b.js"),[],import.meta.url),"../../locales/vi-VN.json":()=>s(()=>import("./vi-VN-62315098.js"),[],import.meta.url),"../../locales/zh-CN.json":()=>s(()=>import("./zh-CN-e54f57d4.js"),[],import.meta.url),"../../locales/zh-TW.json":()=>s(()=>import("./zh-TW-6eec7c68.js"),[],import.meta.url)}),`../../locales/${e}.json`))}),B.forEach(e=>{j(e,()=>A(Object.assign({"../../locales/items/en-US.json":()=>s(()=>import("./en-US-62e1025d.js"),[],import.meta.url),"../../locales/items/it-IT.json":()=>s(()=>import("./it-IT-2436cb34.js"),[],import.meta.url),"../../locales/items/ja-JP.json":()=>s(()=>import("./ja-JP-eb18e902.js"),[],import.meta.url),"../../locales/items/pt-BR.json":()=>s(()=>import("./pt-BR-2cb01faa.js"),[],import.meta.url),"../../locales/items/ru-RU.json":()=>s(()=>import("./ru-RU-1923277f.js"),[],import.meta.url),"../../locales/items/vi-VN.json":()=>s(()=>import("./vi-VN-9c3017b3.js"),[],import.meta.url),"../../locales/items/zh-CN.json":()=>s(()=>import("./zh-CN-75ad4ff4.js"),[],import.meta.url),"../../locales/items/zh-TW.json":()=>s(()=>import("./zh-TW-14012aa2.js"),[],import.meta.url)}),`../../locales/items/${e}.json`))});const t=F();O({fallbackLocale:"en-US",initialLocale:t})},ft=({type:t="info",dismissible:e=!1,autoclose:r=!0,timeout:o=3e3,message:a=""})=>{const i=Math.floor(Math.random()*1e4),m={id:i,dismissible:e,autoclose:r,timeout:o,type:t,message:a};D.update(n=>[m,...n]),r&&o>1&&setTimeout(()=>$(i),o)},$=t=>{D.update(e=>e.filter(r=>r.id!==t))};export{A as _,Y as a,ot as b,F as c,$ as d,dt as e,mt as f,ct as g,lt as h,Z as i,ut as j,w as k,tt as l,pt as m,nt as n,it as o,b as p,ft as q,at as r,W as s,rt as t,et as u,st as v};