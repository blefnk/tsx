const n=(t,e)=>{const r=t[0]-e[0];if(r===0){const s=t[1]-e[1];return s===0?t[2]>=e[2]:s>0}return r>0},o=process.versions.node.split(".").map(Number),i=(t,e=o)=>{for(let r=0;r<t.length;r+=1){const s=t[r];if(r===t.length-1||e[0]===s[0])return n(e,s)}return!1},u=[[18,19,0],[20,6,0]],a=[[18,19,0],[20,10,0],[21,0,0]],f=[[21,0,0]];export{a,i,u as m,f as t};
