import{$t as e,C as t,E as n,U as r,b as i,cn as a,dn as o,dt as s,fn as c,g as l,hn as u,mn as d,nn as f,on as p,rn as m,sn as h,tn as g,un as _,w as v,y}from"./index-DKD3VMTy.js";import{n as b,t as x}from"./nav.API-CGvqUYb5.js";var S=u(d(),1),C=a.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: right bottom;
  display: block;
  ${h.xsLg} {
    object-position: right 85%;
  }
  ${h.sm} {
    object-position: right 65%;
  }
`;a(r)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`;var w=a(r)`
  padding-top: 24px;
`,T=a(r)`
  position: relative;
`,E=a(r)`
  position: absolute;
  inset: 0;
`,D=a(r)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,O=a(r)`
  padding: 0 16px;
`,k=a(r)`
  padding: 16px;
`,A=a(r)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${h.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,j=a(r)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,M=a(m)``,N=a(k)`
  border-radius: 8px;

  background-color: ${({theme:e,$activeIndex:t})=>t?e.colors.primary[500]:`transparent`};

  ${M} {
    color: ${({theme:e,$activeIndex:t})=>t?`white`:e.colors.gray[500]};
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[600]};
    color: white;
  }
  &:hover ${M} {
    color: white;
  }
`,P=`/tangy/assets/profile_image-agnLRcZH.png`,F=g(),I=()=>{let{user:a}=n(),u=c(),d=o(),g=s(`${h.xsLg}`),I=s(`${h.sm}`),L=[`個人檔案`,`我的學習`,`我的收藏`,`訂單紀錄`,`建立課程`],R=[`personal`,`learn`,`collect`,`order`,`createCourse`],z=R.findIndex(e=>d.pathname.endsWith(`/${e}`)),{getMe:B}=x();return(0,S.useEffect)(()=>{B()},[]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(A,{$align:`stretch`,children:[I&&(0,F.jsx)(j,{$align:`stretch`,children:(0,F.jsxs)(r,{$direction:`column`,$justify:`flex-start`,children:[(0,F.jsx)(w,{$direction:`column`,children:L.map((e,t)=>{let n=d.pathname.endsWith(`/${R[t]}`);return(0,F.jsx)(N,{$activeIndex:n,$justify:`flex-start`,onClick:()=>u(R[t]),children:(0,F.jsx)(M,{$shade:n?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`)})}),(0,F.jsx)(r,{style:{padding:`16px`},children:(0,F.jsxs)(D,{$direction:`column`,children:[(0,F.jsx)(`img`,{style:{width:`60px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,F.jsxs)(r,{$direction:`column`,$align:`center`,children:[(0,F.jsx)(f,{$size:`xs`,children:`不知道學什麼?`}),(0,F.jsxs)(r,{$align:`center`,$direction:`column`,$gap:`none`,children:[(0,F.jsx)(m,{$size:`xs`,$shade:500,children:`探索學習路徑`}),(0,F.jsx)(m,{$size:`xs`,$shade:500,children:`你的課程組合!`})]}),(0,F.jsx)(e,{style:{fontSize:`12px`},onClick:()=>{u(`/course`)},icon_right:(0,F.jsx)(l,{style:{width:`16px`,height:`16px`}}),text:`探索學習`})]})]})})]})}),(0,F.jsxs)(r,{$direction:`column`,$gap:`none`,$justify:`flex-start`,children:[(0,F.jsx)(O,{children:(0,F.jsxs)(T,{$direction:`column`,$gap:`none`,children:[(0,F.jsx)(C,{style:{height:g?`30vh`:`40vh`},src:P}),(0,F.jsxs)(E,{$gap:`none`,$direction:`column`,children:[(0,F.jsxs)(O,{style:{flex:1},$direction:`column`,$align:`flex-start`,children:[(0,F.jsx)(b,{width:`60px`,height:`60px`}),(0,F.jsxs)(p,{children:[(0,F.jsx)(m,{$type:`label`,children:`Hi, `}),(0,F.jsx)(m,{$type:`label`,children:t(0)?(0,F.jsx)(v,{type:`spinner`}):a.userName})]}),(0,F.jsxs)(p,{$direction:`column`,$gap:`none`,$align:`flex-start`,children:[(0,F.jsx)(m,{$type:`label`,children:`學習讓自己更強大，`}),(0,F.jsx)(m,{$type:`label`,children:`碳吉與你一起成長!`})]})]}),!I&&(0,F.jsx)(y,{initialSlide:Math.max(z,0),slidesPerView:4,style:{width:`100%`,minWidth:0,backgroundColor:`white`,borderRadius:`16px`,boxShadow:`0px 2px 8px rgba(0, 0, 0, 0.15)`,borderBottom:`1px solid #ccd1d5`},breakpoints:{0:{slidesPerView:3},500:{slidesPerView:4},620:{slidesPerView:5}},children:L.map((e,t)=>{let n=d.pathname.endsWith(`/${R[t]}`);return(0,F.jsx)(i,{children:(0,F.jsx)(N,{$activeIndex:n,$justify:`center`,onClick:()=>{u(R[t])},children:(0,F.jsx)(M,{style:{padding:`8px 0`},$shade:n?950:500,children:e})})},`${e}-${t}`)})})]})]})}),(0,F.jsx)(k,{children:(0,F.jsx)(_,{})})]})]}),!I&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(O,{children:(0,F.jsxs)(T,{$direction:`column`,$gap:`none`,children:[(0,F.jsx)(C,{style:{height:g?`25vh`:`20vh`},src:`/tangy/assets/profile_image2-Bz4kr4Px.png`}),(0,F.jsxs)(E,{style:{padding:`0 16px`},$align:`flex-start`,$direction:`column`,children:[(0,F.jsx)(f,{style:{color:`white`},children:`邀請好友一起學習`}),(0,F.jsx)(m,{style:{color:`white`},children:`一起成長,獲得獎勵!`})]})]})}),(0,F.jsx)(r,{style:{padding:`16px`},children:(0,F.jsxs)(D,{children:[(0,F.jsx)(`img`,{style:{width:`80px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,F.jsxs)(r,{$direction:`column`,$align:`flex-start`,children:[(0,F.jsx)(f,{$size:`sm`,children:`不知道學什麼?`}),(0,F.jsxs)(r,{$align:`flex-start`,$direction:`column`,$gap:`none`,children:[(0,F.jsx)(m,{$shade:500,children:`探索學習路徑，找到最適合`}),(0,F.jsx)(m,{$shade:500,children:`你的課程組合!`})]}),(0,F.jsx)(e,{onClick:()=>{u(`/course`)},icon_right:(0,F.jsx)(l,{}),text:`探索學習路徑`})]})]})})]})]})};export{I as Profile};