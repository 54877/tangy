import{$t as e,F as t,Jt as n,Kt as r,Qt as i,Wt as a,Zt as o,an as s,b as c,in as l,nn as u,p as d,qt as f,rt as p,tn as m}from"./index-C1tFqOBl.js";import{n as h,t as g}from"./profile.API-BLsiWLTx.js";var _=s(l(),1),v=e.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: right bottom;
  display: block;
  ${i.xsLg} {
    object-position: right 85%;
  }
  ${i.sm} {
    object-position: right 65%;
  }
`,y=e(t)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  padding: 24px 0;
  border-bottom: 1px solid #ccd1d5;
`,b=e(t)`
  padding-top: 24px;
`,x=e(t)`
  position: relative;
`,S=e(t)`
  position: absolute;
  inset: 0;
`,C=e(t)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,w=e(t)`
  padding: 0 16px;
`,T=e(t)`
  padding: 16px;
`,E=e(t)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${i.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,D=e(t)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,O=e(n)``,k=e(T)`
  border-radius: 8px;

  background-color: ${({theme:e,$activeIndex:t})=>t?e.colors.primary[500]:`transparent`};

  ${O} {
    color: ${({theme:e,$activeIndex:t})=>t?`white`:e.colors.gray[500]};
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[600]};
    color: white;
  }
  &:hover ${O} {
    color: white;
  }
`,A=`/tangy/assets/profile_image-agnLRcZH.png`,j=r(),M=()=>{let{user:e}=c(),[r,s]=(0,_.useState)(0),l=u(),M=[`個人檔案`,`我的學習`,`我的收藏`,`訂單紀錄`],{getMe:N}=g(),P=p(`${i.xsLg}`),F=p(`${i.sm}`);return(0,_.useEffect)(()=>{N()},[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(E,{$align:`stretch`,children:[F&&(0,j.jsx)(D,{$align:`stretch`,children:(0,j.jsxs)(t,{$direction:`column`,$justify:`flex-start`,children:[(0,j.jsx)(b,{$direction:`column`,children:M.map((e,t)=>(0,j.jsx)(k,{$activeIndex:r===t,$justify:`flex-start`,onClick:()=>s(t),children:(0,j.jsx)(O,{$shade:r===t?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`))}),(0,j.jsx)(t,{style:{padding:`16px`},children:(0,j.jsxs)(C,{$direction:`column`,children:[(0,j.jsx)(`img`,{style:{width:`60px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,j.jsxs)(t,{$direction:`column`,$align:`center`,children:[(0,j.jsx)(f,{$size:`xs`,children:`不知道學什麼?`}),(0,j.jsxs)(t,{$align:`center`,$direction:`column`,$gap:`none`,children:[(0,j.jsx)(n,{$size:`xs`,$shade:500,children:`探索學習路徑`}),(0,j.jsx)(n,{$size:`xs`,$shade:500,children:`你的課程組合!`})]}),(0,j.jsx)(a,{style:{fontSize:`12px`},onClick:()=>{l(`/course`)},icon_right:(0,j.jsx)(d,{style:{width:`16px`,height:`16px`}}),text:`探索學習`})]})]})})]})}),(0,j.jsxs)(t,{$direction:`column`,$gap:`none`,$justify:`flex-start`,children:[(0,j.jsx)(w,{children:(0,j.jsxs)(x,{$direction:`column`,$gap:`none`,children:[(0,j.jsx)(v,{style:{height:P?`30vh`:`40vh`},src:A}),(0,j.jsxs)(S,{$gap:`none`,$direction:`column`,children:[(0,j.jsxs)(w,{style:{flex:1},$direction:`column`,$align:`flex-start`,children:[(0,j.jsx)(h,{width:`60px`,height:`60px`}),(0,j.jsxs)(n,{$type:`label`,children:[`Hi, `,e.userName]}),(0,j.jsxs)(o,{$direction:`column`,$gap:`none`,$align:`flex-start`,children:[(0,j.jsx)(n,{$type:`label`,children:`學習讓自己更強大，`}),(0,j.jsx)(n,{$type:`label`,children:`碳吉與你一起成長!`})]})]}),!F&&(0,j.jsx)(y,{children:M.map((e,i)=>(0,j.jsx)(t,{$direction:`column`,onClick:()=>s(i),children:(0,j.jsx)(n,{style:{paddingBottom:r===i?`8px`:`0px`},$shade:r===i?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${i}`))})]})]})}),(0,j.jsx)(T,{children:(0,j.jsx)(m,{})})]})]}),!F&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{children:(0,j.jsxs)(x,{$direction:`column`,$gap:`none`,children:[(0,j.jsx)(v,{style:{height:P?`25vh`:`20vh`},src:`/tangy/assets/profile_image2-Bz4kr4Px.png`}),(0,j.jsxs)(S,{style:{padding:`0 16px`},$align:`flex-start`,$direction:`column`,children:[(0,j.jsx)(f,{style:{color:`white`},children:`邀請好友一起學習`}),(0,j.jsx)(n,{style:{color:`white`},children:`一起成長,獲得獎勵!`})]})]})}),(0,j.jsx)(t,{style:{padding:`16px`},children:(0,j.jsxs)(C,{children:[(0,j.jsx)(`img`,{style:{width:`80px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,j.jsxs)(t,{$direction:`column`,$align:`flex-start`,children:[(0,j.jsx)(f,{$size:`sm`,children:`不知道學什麼?`}),(0,j.jsxs)(t,{$align:`flex-start`,$direction:`column`,$gap:`none`,children:[(0,j.jsx)(n,{$shade:500,children:`探索學習路徑，找到最適合`}),(0,j.jsx)(n,{$shade:500,children:`你的課程組合!`})]}),(0,j.jsx)(a,{onClick:()=>{l(`/course`)},icon_right:(0,j.jsx)(d,{}),text:`探索學習路徑`})]})]})})]})]})};export{M as Profile};