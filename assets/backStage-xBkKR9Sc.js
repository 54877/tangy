import{Cn as e,En as t,G as n,K as r,On as i,S as a,Sn as o,_n as s,ht as c,wn as l,x as u,yn as d}from"./index-x6-_Lobt.js";import{a as f,c as p,o as m,r as h,s as g,t as _,u as v}from"./profile.styled-Iwb8T1jt.js";var y=n(`clipboard-check`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),b=n(`tags`,[[`path`,{d:`M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z`,key:`16rjxf`}],[`path`,{d:`M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193`,key:`178nd4`}],[`circle`,{cx:`10.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`12ikhr`}]]),x=n(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),S=`/tangy/assets/back-CzEeXdnF.png`,C=`/tangy/assets/backBanner-Cm8sVu6W.png`,w=l.button`
  max-width: 30%;
  width: 100%;
  box-shadow: 0px 7px 29px 0px #64646f33;
  padding: 24px 0;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: left;

  display: flex;
  align-items: flex-start;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    box-shadow: 0px 12px 32px 0px #64646f40;
    transform: translateY(-8px);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0px 4px 12px 0px #64646f30;
  }
`,T=s(),E=({title:e,num:t,onClick:n,img:i})=>(0,T.jsxs)(w,{onClick:n,children:[(0,T.jsx)(r,{children:i}),(0,T.jsxs)(r,{$direction:`column`,children:[(0,T.jsx)(d,{style:{fontWeight:`600`,fontSize:`20px`,width:`100%`},children:e}),(0,T.jsx)(d,{style:{fontWeight:`900`,fontSize:`36px`,width:`100%`},children:t})]})]}),D=()=>{let n=[`標籤管理`,`課程審核`,`使用者`],s=[`tags`,`backStageCourse`,`userList`],l=s.findIndex(e=>location.pathname.endsWith(`/${e}`)),w=c(`${e.xsLg}`),D=c(`${e.sm}`),O=i();return(0,T.jsxs)(p,{$direction:`column`,children:[(0,T.jsx)(r,{style:{padding:`0 16px`},as:`section`,children:(0,T.jsxs)(f,{$direction:`column`,$gap:`none`,children:[(0,T.jsx)(v,{style:{height:`40vh`},src:w?C:S}),(0,T.jsxs)(h,{$align:`flex-start`,$gap:`none`,$direction:`column`,children:[(0,T.jsx)(_,{style:{flex:1},$direction:`column`,$align:`flex-start`,$justify:`flex-start`,children:(0,T.jsx)(o,{$direction:`column`,$gap:`none`,$align:`flex-start`,style:{marginTop:`48px`},children:(0,T.jsx)(d,{style:{fontSize:`24px`},$type:`label`,children:`歡迎回來，管理員!`})})}),D&&(0,T.jsxs)(r,{$justify:`flex-start`,style:{maxWidth:`65%`,margin:`16px`},children:[(0,T.jsx)(E,{onClick:()=>{O(`tags`)},img:(0,T.jsx)(b,{size:30}),title:`標籤管理`,num:`100`}),(0,T.jsx)(E,{onClick:()=>{O(`backStageCourse`)},img:(0,T.jsx)(y,{size:30}),title:`課程審核`,num:`100`}),(0,T.jsx)(E,{onClick:()=>{O(`userList`)},img:(0,T.jsx)(x,{size:30}),title:`使用者`,num:`155`})]}),!D&&(0,T.jsx)(u,{initialSlide:Math.max(l,0),slidesPerView:3,style:{width:`100%`,minWidth:0,backgroundColor:`white`,borderRadius:`16px`,boxShadow:`0px 2px 8px rgba(0, 0, 0, 0.15)`,borderBottom:`1px solid #ccd1d5`},breakpoints:{0:{slidesPerView:3}},children:n.map((e,t)=>{let n=location.pathname.endsWith(`/${s[t]}`);return(0,T.jsx)(a,{children:(0,T.jsx)(m,{$activeIndex:n,$justify:`center`,onClick:()=>{O(s[t])},children:(0,T.jsx)(g,{style:{padding:`8px 0`},$shade:n?950:500,children:e})})},`${e}-${t}`)})})]})]})}),(0,T.jsx)(t,{})]})};export{D as BackStage};