import{$t as e,C as t,E as n,Qt as r,V as i,Xt as a,an as o,cn as s,dn as c,en as l,g as u,in as d,lt as f,rn as p,sn as m,un as h,w as g}from"./index-C6ayXUca.js";import{n as _,t as v}from"./nav.API-Q8FZ8GsN.js";var y=c(h(),1),b=o.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: right bottom;
  display: block;
  ${d.xsLg} {
    object-position: right 85%;
  }
  ${d.sm} {
    object-position: right 65%;
  }
`,x=o(i)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`,S=o(i)`
  padding-top: 24px;
`,C=o(i)`
  position: relative;
`,w=o(i)`
  position: absolute;
  inset: 0;
`,T=o(i)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,E=o(i)`
  padding: 0 16px;
`,D=o(i)`
  padding: 16px;
`,O=o(i)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${d.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,k=o(i)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,A=o(l)``,j=o(D)`
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
`,M=`/tangy/assets/profile_image-agnLRcZH.png`,N=r(),P=()=>{let{user:r}=n(),[o,c]=(0,y.useState)(0),h=s(),P=f(`${d.xsLg}`),F=f(`${d.sm}`),I=P?[`個人檔案`,`我的學習`,`我的收藏`,`訂單紀錄`]:[`檔案`,`學習`,`收藏`,`訂單`],{getMe:L}=v();return(0,y.useEffect)(()=>{L()},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(O,{$align:`stretch`,children:[F&&(0,N.jsx)(k,{$align:`stretch`,children:(0,N.jsxs)(i,{$direction:`column`,$justify:`flex-start`,children:[(0,N.jsx)(S,{$direction:`column`,children:I.map((e,t)=>(0,N.jsx)(j,{$activeIndex:o===t,$justify:`flex-start`,onClick:()=>c(t),children:(0,N.jsx)(A,{$shade:o===t?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`))}),(0,N.jsx)(i,{style:{padding:`16px`},children:(0,N.jsxs)(T,{$direction:`column`,children:[(0,N.jsx)(`img`,{style:{width:`60px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,N.jsxs)(i,{$direction:`column`,$align:`center`,children:[(0,N.jsx)(e,{$size:`xs`,children:`不知道學什麼?`}),(0,N.jsxs)(i,{$align:`center`,$direction:`column`,$gap:`none`,children:[(0,N.jsx)(l,{$size:`xs`,$shade:500,children:`探索學習路徑`}),(0,N.jsx)(l,{$size:`xs`,$shade:500,children:`你的課程組合!`})]}),(0,N.jsx)(a,{style:{fontSize:`12px`},onClick:()=>{h(`/course`)},icon_right:(0,N.jsx)(u,{style:{width:`16px`,height:`16px`}}),text:`探索學習`})]})]})})]})}),(0,N.jsxs)(i,{$direction:`column`,$gap:`none`,$justify:`flex-start`,children:[(0,N.jsx)(E,{children:(0,N.jsxs)(C,{$direction:`column`,$gap:`none`,children:[(0,N.jsx)(b,{style:{height:P?`30vh`:`40vh`},src:M}),(0,N.jsxs)(w,{$gap:`none`,$direction:`column`,children:[(0,N.jsxs)(E,{style:{flex:1},$direction:`column`,$align:`flex-start`,children:[(0,N.jsx)(_,{width:`60px`,height:`60px`}),(0,N.jsxs)(p,{children:[(0,N.jsx)(l,{$type:`label`,children:`Hi, `}),(0,N.jsx)(l,{$type:`label`,children:t(0)?(0,N.jsx)(g,{type:`spinner`}):r.userName})]}),(0,N.jsxs)(p,{$direction:`column`,$gap:`none`,$align:`flex-start`,children:[(0,N.jsx)(l,{$type:`label`,children:`學習讓自己更強大，`}),(0,N.jsx)(l,{$type:`label`,children:`碳吉與你一起成長!`})]})]}),!F&&(0,N.jsx)(x,{children:I.map((e,t)=>(0,N.jsx)(j,{$activeIndex:o===t,$justify:`center`,onClick:()=>c(t),children:(0,N.jsx)(A,{style:{padding:`8px 0`},$shade:o===t?950:500,$size:P?`md`:`sm`,children:e})},`${e}-${t}`))})]})]})}),(0,N.jsx)(D,{children:(0,N.jsx)(m,{})})]})]}),!F&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(E,{children:(0,N.jsxs)(C,{$direction:`column`,$gap:`none`,children:[(0,N.jsx)(b,{style:{height:P?`25vh`:`20vh`},src:`/tangy/assets/profile_image2-Bz4kr4Px.png`}),(0,N.jsxs)(w,{style:{padding:`0 16px`},$align:`flex-start`,$direction:`column`,children:[(0,N.jsx)(e,{style:{color:`white`},children:`邀請好友一起學習`}),(0,N.jsx)(l,{style:{color:`white`},children:`一起成長,獲得獎勵!`})]})]})}),(0,N.jsx)(i,{style:{padding:`16px`},children:(0,N.jsxs)(T,{children:[(0,N.jsx)(`img`,{style:{width:`80px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,N.jsxs)(i,{$direction:`column`,$align:`flex-start`,children:[(0,N.jsx)(e,{$size:`sm`,children:`不知道學什麼?`}),(0,N.jsxs)(i,{$align:`flex-start`,$direction:`column`,$gap:`none`,children:[(0,N.jsx)(l,{$shade:500,children:`探索學習路徑，找到最適合`}),(0,N.jsx)(l,{$shade:500,children:`你的課程組合!`})]}),(0,N.jsx)(a,{onClick:()=>{h(`/course`)},icon_right:(0,N.jsx)(u,{}),text:`探索學習路徑`})]})]})})]})]})};export{P as Profile};