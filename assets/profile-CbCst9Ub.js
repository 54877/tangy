import{C as e,E as t,Qt as n,U as r,an as i,b as a,dt as o,en as s,fn as c,g as l,ln as u,nn as d,on as f,pn as p,sn as m,tn as h,un as g,w as _,y as v}from"./index-HTduA8lV.js";import{n as y,t as b}from"./nav.API-N2xboeqR.js";var x=p(c(),1),S=m.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: right bottom;
  display: block;
  ${f.xsLg} {
    object-position: right 85%;
  }
  ${f.sm} {
    object-position: right 65%;
  }
`;m(r)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`;var C=m(r)`
  padding-top: 24px;
`,w=m(r)`
  position: relative;
`,T=m(r)`
  position: absolute;
  inset: 0;
`,E=m(r)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,D=m(r)`
  padding: 0 16px;
`,O=m(r)`
  padding: 16px;
`,k=m(r)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${f.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,A=m(r)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,j=m(d)``,M=m(O)`
  border-radius: 8px;

  background-color: ${({theme:e,$activeIndex:t})=>t?e.colors.primary[500]:`transparent`};

  ${j} {
    color: ${({theme:e,$activeIndex:t})=>t?`white`:e.colors.gray[500]};
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[600]};
    color: white;
  }
  &:hover ${j} {
    color: white;
  }
`,N=`/tangy/assets/profile_image-agnLRcZH.png`,P=s(),F=()=>{let{user:s}=t(),[c,p]=(0,x.useState)(0),m=g(),F=o(`${f.xsLg}`),I=o(`${f.sm}`),L=[`個人檔案`,`我的學習`,`我的收藏`,`訂單紀錄`,`建立課程`],R=[`personal`,`learn`,`collect`,`order`,`createCourse`],{getMe:z}=b();return(0,x.useEffect)(()=>{z()},[]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(k,{$align:`stretch`,children:[I&&(0,P.jsx)(A,{$align:`stretch`,children:(0,P.jsxs)(r,{$direction:`column`,$justify:`flex-start`,children:[(0,P.jsx)(C,{$direction:`column`,children:L.map((e,t)=>(0,P.jsx)(M,{$activeIndex:c===t,$justify:`flex-start`,onClick:()=>p(t),children:(0,P.jsx)(j,{$shade:c===t?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`))}),(0,P.jsx)(r,{style:{padding:`16px`},children:(0,P.jsxs)(E,{$direction:`column`,children:[(0,P.jsx)(`img`,{style:{width:`60px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,P.jsxs)(r,{$direction:`column`,$align:`center`,children:[(0,P.jsx)(h,{$size:`xs`,children:`不知道學什麼?`}),(0,P.jsxs)(r,{$align:`center`,$direction:`column`,$gap:`none`,children:[(0,P.jsx)(d,{$size:`xs`,$shade:500,children:`探索學習路徑`}),(0,P.jsx)(d,{$size:`xs`,$shade:500,children:`你的課程組合!`})]}),(0,P.jsx)(n,{style:{fontSize:`12px`},onClick:()=>{m(`/course`)},icon_right:(0,P.jsx)(l,{style:{width:`16px`,height:`16px`}}),text:`探索學習`})]})]})})]})}),(0,P.jsxs)(r,{$direction:`column`,$gap:`none`,$justify:`flex-start`,children:[(0,P.jsx)(D,{children:(0,P.jsxs)(w,{$direction:`column`,$gap:`none`,children:[(0,P.jsx)(S,{style:{height:F?`30vh`:`40vh`},src:N}),(0,P.jsxs)(T,{$gap:`none`,$direction:`column`,children:[(0,P.jsxs)(D,{style:{flex:1},$direction:`column`,$align:`flex-start`,children:[(0,P.jsx)(y,{width:`60px`,height:`60px`}),(0,P.jsxs)(i,{children:[(0,P.jsx)(d,{$type:`label`,children:`Hi, `}),(0,P.jsx)(d,{$type:`label`,children:e(0)?(0,P.jsx)(_,{type:`spinner`}):s.userName})]}),(0,P.jsxs)(i,{$direction:`column`,$gap:`none`,$align:`flex-start`,children:[(0,P.jsx)(d,{$type:`label`,children:`學習讓自己更強大，`}),(0,P.jsx)(d,{$type:`label`,children:`碳吉與你一起成長!`})]})]}),!I&&(0,P.jsx)(v,{slidesPerView:4,style:{width:`100%`,minWidth:0,backgroundColor:`white`,borderRadius:`16px`,boxShadow:`0px 2px 8px rgba(0, 0, 0, 0.15)`,borderBottom:`1px solid #ccd1d5`},breakpoints:{0:{slidesPerView:3},500:{slidesPerView:4},620:{slidesPerView:5}},children:L.map((e,t)=>(0,P.jsx)(a,{children:(0,P.jsx)(M,{$activeIndex:c===t,$justify:`center`,onClick:()=>{p(t),m(`${R[t]}`)},children:(0,P.jsx)(j,{style:{padding:`8px 0`},$shade:c===t?950:500,children:e})},`${e}-${t}`)},`${e}-${t}`))})]})]})}),(0,P.jsx)(O,{children:(0,P.jsx)(u,{})})]})]}),!I&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D,{children:(0,P.jsxs)(w,{$direction:`column`,$gap:`none`,children:[(0,P.jsx)(S,{style:{height:F?`25vh`:`20vh`},src:`/tangy/assets/profile_image2-Bz4kr4Px.png`}),(0,P.jsxs)(T,{style:{padding:`0 16px`},$align:`flex-start`,$direction:`column`,children:[(0,P.jsx)(h,{style:{color:`white`},children:`邀請好友一起學習`}),(0,P.jsx)(d,{style:{color:`white`},children:`一起成長,獲得獎勵!`})]})]})}),(0,P.jsx)(r,{style:{padding:`16px`},children:(0,P.jsxs)(E,{children:[(0,P.jsx)(`img`,{style:{width:`80px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,P.jsxs)(r,{$direction:`column`,$align:`flex-start`,children:[(0,P.jsx)(h,{$size:`sm`,children:`不知道學什麼?`}),(0,P.jsxs)(r,{$align:`flex-start`,$direction:`column`,$gap:`none`,children:[(0,P.jsx)(d,{$shade:500,children:`探索學習路徑，找到最適合`}),(0,P.jsx)(d,{$shade:500,children:`你的課程組合!`})]}),(0,P.jsx)(n,{onClick:()=>{m(`/course`)},icon_right:(0,P.jsx)(l,{}),text:`探索學習路徑`})]})]})})]})]})};export{F as Profile};