import{E as e,G as t,O as n,S as r,T as i,an as a,dn as o,hn as s,in as c,ln as l,mn as u,n as d,nn as f,on as p,pn as m,pt as h,un as g,v as _,vn as v,x as y,yn as b}from"./index-U_-5Tdsc.js";import{n as x,t as S}from"./nav.common-DikxctLr.js";var C=b(v(),1),w=o.img`
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
`;o(t)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`;var T=o(t)`
  padding-top: 24px;
`,E=o(t)`
  position: relative;
`,D=o(t)`
  position: absolute;
  inset: 0;
`,O=o(t)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,k=o(t)`
  padding: 0 16px;
`,A=o(t)`
  padding: 16px;
`,j=o(t)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${g.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,M=o(t)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,N=o(p)``,P=o(A)`
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
`,F=`/tangy/assets/profile_image-agnLRcZH.png`,I=c(),L=()=>{let[o,c]=(0,C.useState)(d),[v,b]=(0,C.useState)(),{user:L}=n(),R=s(),z=u(),B=h(`${g.xsLg}`),V=h(`${g.sm}`),H=[`個人檔案`,`我的學習`,`我的收藏`,`訂單紀錄`,`建立課程`],U=[`personal`,`learn`,`collect`,`order`,`createCourse`],W=U.findIndex(e=>z.pathname.endsWith(`/${e}`)),{getMe:G}=S();return(0,C.useEffect)(()=>{G()},[]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(j,{$align:`stretch`,children:[V&&(0,I.jsx)(M,{$align:`stretch`,children:(0,I.jsxs)(t,{$direction:`column`,$justify:`flex-start`,children:[(0,I.jsx)(T,{$direction:`column`,children:H.map((e,t)=>{let n=z.pathname.endsWith(`/${U[t]}`);return(0,I.jsx)(P,{$activeIndex:n,$justify:`flex-start`,onClick:()=>R(U[t]),children:(0,I.jsx)(N,{$shade:n?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`)})}),(0,I.jsx)(t,{style:{padding:`16px`},children:(0,I.jsxs)(O,{$direction:`column`,children:[(0,I.jsx)(`img`,{style:{width:`60px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,I.jsxs)(t,{$direction:`column`,$align:`center`,children:[(0,I.jsx)(a,{$size:`xs`,children:`不知道學什麼?`}),(0,I.jsxs)(t,{$align:`center`,$direction:`column`,$gap:`none`,children:[(0,I.jsx)(p,{$size:`xs`,$shade:500,children:`探索學習路徑`}),(0,I.jsx)(p,{$size:`xs`,$shade:500,children:`你的課程組合!`})]}),(0,I.jsx)(f,{style:{fontSize:`12px`},onClick:()=>{R(`/course`)},icon_right:(0,I.jsx)(_,{style:{width:`16px`,height:`16px`}}),text:`探索學習`})]})]})})]})}),(0,I.jsxs)(t,{$direction:`column`,$gap:`none`,$justify:`flex-start`,children:[(0,I.jsx)(k,{children:(0,I.jsxs)(E,{$direction:`column`,$gap:`none`,children:[(0,I.jsx)(w,{style:{height:B?`30vh`:`40vh`},src:F}),(0,I.jsxs)(D,{$gap:`none`,$direction:`column`,children:[(0,I.jsxs)(k,{style:{flex:1},$direction:`column`,$align:`flex-start`,children:[(0,I.jsx)(x,{width:`60px`,height:`60px`}),(0,I.jsxs)(l,{children:[(0,I.jsx)(p,{$type:`label`,children:`Hi, `}),(0,I.jsx)(p,{$type:`label`,children:i(0)?(0,I.jsx)(e,{type:`spinner`}):L.userName})]}),(0,I.jsxs)(l,{$direction:`column`,$gap:`none`,$align:`flex-start`,children:[(0,I.jsx)(p,{$type:`label`,children:`學習讓自己更強大，`}),(0,I.jsx)(p,{$type:`label`,children:`碳吉與你一起成長!`})]})]}),!V&&(0,I.jsx)(y,{initialSlide:Math.max(W,0),slidesPerView:4,style:{width:`100%`,minWidth:0,backgroundColor:`white`,borderRadius:`16px`,boxShadow:`0px 2px 8px rgba(0, 0, 0, 0.15)`,borderBottom:`1px solid #ccd1d5`},breakpoints:{0:{slidesPerView:3},500:{slidesPerView:4},620:{slidesPerView:5}},children:H.map((e,t)=>{let n=z.pathname.endsWith(`/${U[t]}`);return(0,I.jsx)(r,{children:(0,I.jsx)(P,{$activeIndex:n,$justify:`center`,onClick:()=>{R(U[t])},children:(0,I.jsx)(N,{style:{padding:`8px 0`},$shade:n?950:500,children:e})})},`${e}-${t}`)})})]})]})}),(0,I.jsx)(A,{children:(0,I.jsx)(m,{context:{userList:o,setUserList:c,device:v,setDevice:b}})})]})]}),!V&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(k,{children:(0,I.jsxs)(E,{$direction:`column`,$gap:`none`,children:[(0,I.jsx)(w,{style:{height:B?`25vh`:`20vh`},src:`/tangy/assets/profile_image2-Bz4kr4Px.png`}),(0,I.jsxs)(D,{style:{padding:`0 16px`},$align:`flex-start`,$direction:`column`,children:[(0,I.jsx)(a,{style:{color:`white`},children:`邀請好友一起學習`}),(0,I.jsx)(p,{style:{color:`white`},children:`一起成長,獲得獎勵!`})]})]})}),(0,I.jsx)(t,{style:{padding:`16px`},children:(0,I.jsxs)(O,{children:[(0,I.jsx)(`img`,{style:{width:`80px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,I.jsxs)(t,{$direction:`column`,$align:`flex-start`,children:[(0,I.jsx)(a,{$size:`sm`,children:`不知道學什麼?`}),(0,I.jsxs)(t,{$align:`flex-start`,$direction:`column`,$gap:`none`,children:[(0,I.jsx)(p,{$shade:500,children:`探索學習路徑，找到最適合`}),(0,I.jsx)(p,{$shade:500,children:`你的課程組合!`})]}),(0,I.jsx)(f,{onClick:()=>{R(`/course`)},icon_right:(0,I.jsx)(_,{}),text:`探索學習路徑`})]})]})})]})]})};export{L as Profile};