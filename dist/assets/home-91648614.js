import{j as y}from"./js-yaml-38530ef5.js";import{_ as h,r as u,o as n,c as o,F as v,a as f,n as x,b as L,t as g,d as i,e as k,w,f as $}from"./index-3d6e14ed.js";const C="http://localhost:8002/";function p(r){return new Promise((e,a)=>{fetch(C+r).then(s=>s.text()).then(s=>{e(y.load(s))}).catch(s=>a(s))})}const b={class:"tags"},N=["onClick"],m="全部图表",T={__name:"tags",setup(r){const e=u([]),a=u(m);e.value.push(m);const s=t=>{a.value=t};return(()=>{p("tags.yml").then(t=>{e.value=t})})(),(t,c)=>(n(),o("div",b,[(n(!0),o(v,null,f(e.value,(_,d)=>(n(),o("div",{class:x(["tags-item",a.value===_?"is-active":""]),key:d,onClick:P=>s(_)},[L("div",null,g(_),1)],10,N))),128))]))}},V=h(T,[["__scopeId","data-v-3d5a6ef1"]]),B={class:"search-container"},D={__name:"search-container",setup(r){return(e,a)=>(n(),o("div",B,[i(V)]))}};const E={class:"case-wrapper"},F={__name:"case-list",setup(r){const e=u([]);s();async function a(l=[]){const t=[];return l.forEach(c=>{t.push(p(c.folder))}),await Promise.all(t).then(c=>c)}function s(){p("index.yml").then(async l=>{const t=await a(l);e.value=t.flat(),console.log("caseList",e)})}return(l,t)=>{const c=k("router-link");return n(),o("div",E,[(n(!0),o(v,null,f(e.value,(_,d)=>(n(),o("div",{class:"case-wrapper__item",key:d},[i(c,{to:{name:"View",query:{path:_.folder}}},{default:w(()=>[$(g(_.name),1)]),_:2},1032,["to"])]))),128))])}}},I=h(F,[["__scopeId","data-v-272dd04b"]]);const j={class:"container"},A={__name:"home",setup(r){return(e,a)=>(n(),o("div",j,[i(D,{class:"search"}),i(I,{class:"body"})]))}},q=h(A,[["__scopeId","data-v-6d4a92f8"]]);export{q as default};
