const c={past:[{ceiling:60,text:"$seconds seconds ago"},{ceiling:3600,text:"$minutes minutes ago"},{ceiling:86400,text:"$hours hours ago"},{ceiling:2629744,text:"$days days ago"},{ceiling:31556926,text:"$months months ago"},{ceiling:null,text:"$years years ago"}],future:[{ceiling:60,text:"in $seconds seconds"},{ceiling:3600,text:"in $minutes minutes"},{ceiling:86400,text:"in $hours hours"},{ceiling:2629744,text:"in $days days"},{ceiling:31556926,text:"in $months months"},{ceiling:null,text:"in $years years"}]},r=[[31556926,"years"],[2629744,"months"],[86400,"days"],[3600,"hours"],[60,"minutes"],[1,"seconds"]],g=(s,t)=>{for(const e in t)if(t[e]===1){const n=new RegExp("\\b"+e+"\\b");s=s.replace(n,i=>i.replace(/s\b/g,""))}return s},d=s=>{let t=s;const e={};for(let n=0;n<r.length;n++){const i=Math.floor(t/r[n][0]);t=t-r[n][0]*i,e[r[n][1]]=i}return e},f=(s,t)=>{const e=d(t),n=s.text.replace(/\$(\w+)/g,(i,o)=>e[o]);return g(n,e)};function m(s,t){for(let e=0;e<c[t].length;e++){const n=c[t][e].ceiling===null,i=s<=c[t][e].ceiling;if(n||i)return c[t][e]}return null}const x=(s,t=null)=>{const e=new Date(s);if(isNaN(e.getTime()))return"Invalid Date";const i=((t?new Date(t):new Date)-e)/1e3,o=i<0,l=o?"future":"past",a=o?0-i:i,u=m(a,l);return f(u,a)};export{x as t};