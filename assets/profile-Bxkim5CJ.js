import{$t as e,C as t,E as n,U as r,b as i,cn as a,dn as o,dt as s,fn as c,g as l,gn as u,hn as d,n as f,nn as p,on as m,rn as h,sn as g,tn as _,un as v,w as y,y as b}from"./index-B1hMaA-I.js";import{n as x,t as S}from"./nav.API-DddL3PTo.js";var C=u(d(),1),w=a.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: right bottom;
  display: block;
  ${g.xsLg} {
    object-position: right 85%;
  }
  ${g.sm} {
    object-position: right 65%;
  }
`;a(r)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`;var T=a(r)`
  padding-top: 24px;
`,E=a(r)`
  position: relative;
`,D=a(r)`
  position: absolute;
  inset: 0;
`,O=a(r)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,k=a(r)`
  padding: 0 16px;
`,A=a(r)`
  padding: 16px;
`,j=a(r)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${g.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,M=a(r)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,N=a(h)``,P=a(A)`
  border-radius: 8px;

  background-color: ${({theme:e,$activeIndex:t})=>t?e.colors.primary[500]:`transparent`};

  ${N} {
    color: ${({theme:e,$activeIndex:t})=>t?`white`:e.colors.gray[500]};
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[600]};
    color: white;
  }
  &:hover ${N} {
    color: white;
  }
`,F=`/tangy/assets/profile_image-agnLRcZH.png`,I=_(),L=()=>{let[a,u]=(0,C.useState)(f),[d,_]=(0,C.useState)(),{user:L}=n(),R=c(),z=o(),B=s(`${g.xsLg}`),V=s(`${g.sm}`),H=[`個人檔案`,`我的學習`,`我的收藏`,`訂單紀錄`,`建立課程`],U=[`personal`,`learn`,`collect`,`order`,`createCourse`],W=U.findIndex(e=>z.pathname.endsWith(`/${e}`)),{getMe:G}=S();return(0,C.useEffect)(()=>{G()},[]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(j,{$align:`stretch`,children:[V&&(0,I.jsx)(M,{$align:`stretch`,children:(0,I.jsxs)(r,{$direction:`column`,$justify:`flex-start`,children:[(0,I.jsx)(T,{$direction:`column`,children:H.map((e,t)=>{let n=z.pathname.endsWith(`/${U[t]}`);return(0,I.jsx)(P,{$activeIndex:n,$justify:`flex-start`,onClick:()=>R(U[t]),children:(0,I.jsx)(N,{$shade:n?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`)})}),(0,I.jsx)(r,{style:{padding:`16px`},children:(0,I.jsxs)(O,{$direction:`column`,children:[(0,I.jsx)(`img`,{style:{width:`60px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,I.jsxs)(r,{$direction:`column`,$align:`center`,children:[(0,I.jsx)(p,{$size:`xs`,children:`不知道學什麼?`}),(0,I.jsxs)(r,{$align:`center`,$direction:`column`,$gap:`none`,children:[(0,I.jsx)(h,{$size:`xs`,$shade:500,children:`探索學習路徑`}),(0,I.jsx)(h,{$size:`xs`,$shade:500,children:`你的課程組合!`})]}),(0,I.jsx)(e,{style:{fontSize:`12px`},onClick:()=>{R(`/course`)},icon_right:(0,I.jsx)(l,{style:{width:`16px`,height:`16px`}}),text:`探索學習`})]})]})})]})}),(0,I.jsxs)(r,{$direction:`column`,$gap:`none`,$justify:`flex-start`,children:[(0,I.jsx)(k,{children:(0,I.jsxs)(E,{$direction:`column`,$gap:`none`,children:[(0,I.jsx)(w,{style:{height:B?`30vh`:`40vh`},src:F}),(0,I.jsxs)(D,{$gap:`none`,$direction:`column`,children:[(0,I.jsxs)(k,{style:{flex:1},$direction:`column`,$align:`flex-start`,children:[(0,I.jsx)(x,{width:`60px`,height:`60px`}),(0,I.jsxs)(m,{children:[(0,I.jsx)(h,{$type:`label`,children:`Hi, `}),(0,I.jsx)(h,{$type:`label`,children:t(0)?(0,I.jsx)(y,{type:`spinner`}):L.userName})]}),(0,I.jsxs)(m,{$direction:`column`,$gap:`none`,$align:`flex-start`,children:[(0,I.jsx)(h,{$type:`label`,children:`學習讓自己更強大，`}),(0,I.jsx)(h,{$type:`label`,children:`碳吉與你一起成長!`})]})]}),!V&&(0,I.jsx)(b,{initialSlide:Math.max(W,0),slidesPerView:4,style:{width:`100%`,minWidth:0,backgroundColor:`white`,borderRadius:`16px`,boxShadow:`0px 2px 8px rgba(0, 0, 0, 0.15)`,borderBottom:`1px solid #ccd1d5`},breakpoints:{0:{slidesPerView:3},500:{slidesPerView:4},620:{slidesPerView:5}},children:H.map((e,t)=>{let n=z.pathname.endsWith(`/${U[t]}`);return(0,I.jsx)(i,{children:(0,I.jsx)(P,{$activeIndex:n,$justify:`center`,onClick:()=>{R(U[t])},children:(0,I.jsx)(N,{style:{padding:`8px 0`},$shade:n?950:500,children:e})})},`${e}-${t}`)})})]})]})}),(0,I.jsx)(A,{children:(0,I.jsx)(v,{context:{userList:a,setUserList:u,device:d,setDevice:_}})})]})]}),!V&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k,{children:(0,I.jsxs)(E,{$direction:`column`,$gap:`none`,children:[(0,I.jsx)(w,{style:{height:B?`25vh`:`20vh`},src:`/tangy/assets/profile_image2-Bz4kr4Px.png`}),(0,I.jsxs)(D,{style:{padding:`0 16px`},$align:`flex-start`,$direction:`column`,children:[(0,I.jsx)(p,{style:{color:`white`},children:`邀請好友一起學習`}),(0,I.jsx)(h,{style:{color:`white`},children:`一起成長,獲得獎勵!`})]})]})}),(0,I.jsx)(r,{style:{padding:`16px`},children:(0,I.jsxs)(O,{children:[(0,I.jsx)(`img`,{style:{width:`80px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,I.jsxs)(r,{$direction:`column`,$align:`flex-start`,children:[(0,I.jsx)(p,{$size:`sm`,children:`不知道學什麼?`}),(0,I.jsxs)(r,{$align:`flex-start`,$direction:`column`,$gap:`none`,children:[(0,I.jsx)(h,{$shade:500,children:`探索學習路徑，找到最適合`}),(0,I.jsx)(h,{$shade:500,children:`你的課程組合!`})]}),(0,I.jsx)(e,{onClick:()=>{R(`/course`)},icon_right:(0,I.jsx)(l,{}),text:`探索學習路徑`})]})]})})]})]})};export{L as Profile};