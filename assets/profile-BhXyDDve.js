import{$t as e,B as t,C as n,Qt as r,S as i,T as a,Yt as o,Zt as s,ct as c,h as l,in as u,ln as d,nn as f,on as p,rn as m,sn as h,un as g}from"./index-BW8xxlGB.js";import{n as _,t as v}from"./nav.API-JDCLdBbA.js";var y=g(d(),1),b=u.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: right bottom;
  display: block;
  ${m.xsLg} {
    object-position: right 85%;
  }
  ${m.sm} {
    object-position: right 65%;
  }
`,x=u(t)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`,S=u(t)`
  padding-top: 24px;
`,C=u(t)`
  position: relative;
`,w=u(t)`
  position: absolute;
  inset: 0;
`,T=u(t)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,E=u(t)`
  padding: 0 16px;
`,D=u(t)`
  padding: 16px;
`,O=u(t)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${m.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,k=u(t)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,A=u(e)``,j=u(D)`
  border-radius: 8px;

  background-color: ${({theme:e,$activeIndex:t})=>t?e.colors.primary[500]:`transparent`};

  ${A} {
    color: ${({theme:e,$activeIndex:t})=>t?`white`:e.colors.gray[500]};
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[600]};
    color: white;
  }
  &:hover ${A} {
    color: white;
  }
`,M=`/tangy/assets/profile_image-agnLRcZH.png`,N=s(),P=()=>{let{user:s}=a(),[u,d]=(0,y.useState)(0),g=h(),P=[`個人檔案`,`我的學習`,`我的收藏`,`訂單紀錄`],{getMe:F}=v(),I=c(`${m.xsLg}`),L=c(`${m.sm}`);return(0,y.useEffect)(()=>{F()},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(O,{$align:`stretch`,children:[L&&(0,N.jsx)(k,{$align:`stretch`,children:(0,N.jsxs)(t,{$direction:`column`,$justify:`flex-start`,children:[(0,N.jsx)(S,{$direction:`column`,children:P.map((e,t)=>(0,N.jsx)(j,{$activeIndex:u===t,$justify:`flex-start`,onClick:()=>d(t),children:(0,N.jsx)(A,{$shade:u===t?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`))}),(0,N.jsx)(t,{style:{padding:`16px`},children:(0,N.jsxs)(T,{$direction:`column`,children:[(0,N.jsx)(`img`,{style:{width:`60px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,N.jsxs)(t,{$direction:`column`,$align:`center`,children:[(0,N.jsx)(r,{$size:`xs`,children:`不知道學什麼?`}),(0,N.jsxs)(t,{$align:`center`,$direction:`column`,$gap:`none`,children:[(0,N.jsx)(e,{$size:`xs`,$shade:500,children:`探索學習路徑`}),(0,N.jsx)(e,{$size:`xs`,$shade:500,children:`你的課程組合!`})]}),(0,N.jsx)(o,{style:{fontSize:`12px`},onClick:()=>{g(`/course`)},icon_right:(0,N.jsx)(l,{style:{width:`16px`,height:`16px`}}),text:`探索學習`})]})]})})]})}),(0,N.jsxs)(t,{$direction:`column`,$gap:`none`,$justify:`flex-start`,children:[(0,N.jsx)(E,{children:(0,N.jsxs)(C,{$direction:`column`,$gap:`none`,children:[(0,N.jsx)(b,{style:{height:I?`30vh`:`40vh`},src:M}),(0,N.jsxs)(w,{$gap:`none`,$direction:`column`,children:[(0,N.jsxs)(E,{style:{flex:1},$direction:`column`,$align:`flex-start`,children:[(0,N.jsx)(_,{width:`60px`,height:`60px`}),(0,N.jsxs)(f,{children:[(0,N.jsx)(e,{$type:`label`,children:`Hi, `}),(0,N.jsx)(e,{$type:`label`,children:i(0)?(0,N.jsx)(n,{type:`spinner`}):s.userName})]}),(0,N.jsxs)(f,{$direction:`column`,$gap:`none`,$align:`flex-start`,children:[(0,N.jsx)(e,{$type:`label`,children:`學習讓自己更強大，`}),(0,N.jsx)(e,{$type:`label`,children:`碳吉與你一起成長!`})]})]}),!L&&(0,N.jsx)(x,{children:P.map((e,t)=>(0,N.jsx)(j,{$activeIndex:u===t,$justify:`center`,onClick:()=>d(t),children:(0,N.jsx)(A,{style:{padding:`8px 0`},$shade:u===t?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`))})]})]})}),(0,N.jsx)(D,{children:(0,N.jsx)(p,{})})]})]}),!L&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(E,{children:(0,N.jsxs)(C,{$direction:`column`,$gap:`none`,children:[(0,N.jsx)(b,{style:{height:I?`25vh`:`20vh`},src:`/tangy/assets/profile_image2-Bz4kr4Px.png`}),(0,N.jsxs)(w,{style:{padding:`0 16px`},$align:`flex-start`,$direction:`column`,children:[(0,N.jsx)(r,{style:{color:`white`},children:`邀請好友一起學習`}),(0,N.jsx)(e,{style:{color:`white`},children:`一起成長,獲得獎勵!`})]})]})}),(0,N.jsx)(t,{style:{padding:`16px`},children:(0,N.jsxs)(T,{children:[(0,N.jsx)(`img`,{style:{width:`80px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,N.jsxs)(t,{$direction:`column`,$align:`flex-start`,children:[(0,N.jsx)(r,{$size:`sm`,children:`不知道學什麼?`}),(0,N.jsxs)(t,{$align:`flex-start`,$direction:`column`,$gap:`none`,children:[(0,N.jsx)(e,{$shade:500,children:`探索學習路徑，找到最適合`}),(0,N.jsx)(e,{$shade:500,children:`你的課程組合!`})]}),(0,N.jsx)(o,{onClick:()=>{g(`/course`)},icon_right:(0,N.jsx)(l,{}),text:`探索學習路徑`})]})]})})]})]})};export{P as Profile};