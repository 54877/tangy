import{$ as e,$n as t,Gn as n,Jn as r,Kn as i,Pt as a,R as o,Vn as s,Wn as c,Xn as l,Yn as u,d,dt as f,er as p,f as m,p as h,tt as g,u as ee,ut as _,z as v,zn as y}from"./index-DaRkPBbP.js";import{a as b,c as x,o as S,r as C,s as w,t as T,u as E}from"./profile.styled-DEvOgU3o.js";var D=_(`clipboard-check`,[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`m9 14 2 2 4-4`,key:`df797q`}]]),O=_(`tags`,[[`path`,{d:`M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z`,key:`16rjxf`}],[`path`,{d:`M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193`,key:`178nd4`}],[`circle`,{cx:`10.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`12ikhr`}]]),k=_(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),A=`/tangy/assets/back-CzEeXdnF.png`,j=`/tangy/assets/backBanner-Cm8sVu6W.png`,M=i.button`
  width: 100%;
  min-width: 0;
  flex: 1 1 0;
  box-shadow: 0px 7px 29px 0px #64646f33;
  padding: 24px 0;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: left;

  display: flex;
  align-items: flex-start;
  border: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  ${({$active:e})=>e&&`
    background-color: #fff;
    box-shadow: 0px 12px 32px 0px #64646f40;
    transform: translateY(-8px);
  `}

  &:hover {
    background-color: #fff;
    box-shadow: 0px 12px 32px 0px #64646f40;
    transform: translateY(-8px);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0px 4px 12px 0px #64646f30;
  }
`,N=y(),P=({title:e,num:t,onClick:n,img:r,isActive:i})=>(0,N.jsxs)(M,{onClick:n,$active:i,children:[(0,N.jsx)(f,{children:r}),(0,N.jsxs)(f,{$direction:`column`,children:[(0,N.jsx)(s,{style:{fontWeight:`600`,fontSize:`20px`,width:`100%`},children:e}),(0,N.jsx)(s,{style:{fontWeight:`900`,fontSize:`36px`,width:`100%`},children:t})]})]}),F=p(t(),1),I=()=>{let t=u(),i=[`標籤管理`,`使用者`,`課程管理`,`課程分類`],p=[`tags`,`userList`,`backStageCourse`,`category`],_=[O,k,D,D],y=p.findIndex(e=>t.pathname.endsWith(`/${e}`)),{openDialog:M}=g(),I=a(`${n.xsLg}`),L=a(`${n.sm}`),R=l(),[z,B]=(0,F.useState)(),[V,H]=(0,F.useState)(),[U,W]=(0,F.useState)(),[G,K]=(0,F.useState)(),q=(0,F.useCallback)(async()=>{try{return(await m()).data.dataSet}catch(t){e(t,M,1);return}},[M]),J=(0,F.useCallback)(async()=>{let e=await q();e&&H(e)},[q,H]),Y=(0,F.useCallback)(async()=>{try{return(await d()).data.dataSet}catch(t){return e(t,M,1),[]}},[M]),X=(0,F.useCallback)(async()=>{W(await Y()??[])},[Y]),Z=(0,F.useCallback)(async()=>{try{return(await ee()).data.dataSet}catch(t){return e(t,M,1),[]}},[M]),Q=(0,F.useCallback)(async()=>{K(await Z()??[])},[Z]),$=(0,F.useCallback)(async()=>{try{return(await h()).data.dataSet}catch(t){return e(t,M,1),[]}},[M]),te=(0,F.useCallback)(async()=>{B(await $()??[])},[$]);return(0,F.useEffect)(()=>{(async()=>{H(await q()??[]),W(await Y()??[]),K(await Z()??[]),B(await $()??[])})()},[q,Y,Z,$]),(0,N.jsxs)(x,{$direction:`column`,children:[(0,N.jsx)(f,{style:{padding:`0 16px`},as:`section`,children:(0,N.jsxs)(b,{$direction:`column`,$gap:`none`,children:[(0,N.jsx)(E,{style:{height:`40vh`},src:I?j:A}),(0,N.jsxs)(C,{$align:`flex-start`,$gap:`none`,$direction:`column`,children:[(0,N.jsx)(T,{style:{flex:1},$direction:`column`,$align:`flex-start`,$justify:`flex-start`,children:(0,N.jsx)(c,{$direction:`column`,$gap:`none`,$align:`flex-start`,style:{marginTop:`48px`},children:(0,N.jsx)(s,{style:{fontSize:`24px`},$type:`label`,children:`歡迎回來，管理員!`})})}),L&&(0,N.jsx)(f,{$justify:`flex-start`,style:{width:`100%`,maxWidth:`100%`,boxSizing:`border-box`,gap:`16px`,margin:`16px 0`,padding:`0 16px`},children:i.map((e,n)=>{let r=_[n];return(0,N.jsx)(P,{isActive:t.pathname.endsWith(`/${p[n]}`),onClick:()=>{R(p[n])},img:(0,N.jsx)(r,{size:30}),title:e,num:`100`},e)})}),!L&&(0,N.jsx)(o,{initialSlide:Math.max(y,0),slidesPerView:4,style:{width:`100%`,minWidth:0,backgroundColor:`white`,borderRadius:`16px`,boxShadow:`0px 2px 8px rgba(0, 0, 0, 0.15)`,borderBottom:`1px solid #ccd1d5`},breakpoints:{0:{slidesPerView:3},600:{slidesPerView:4}},children:i.map((e,n)=>{let r=t.pathname.endsWith(`/${p[n]}`);return(0,N.jsx)(v,{children:(0,N.jsx)(S,{$activeIndex:r,$justify:`center`,onClick:()=>{R(p[n])},children:(0,N.jsx)(w,{style:{padding:`8px 0`},$shade:r?950:500,children:e})})},`${e}-${n}`)})})]})]})}),(0,N.jsx)(r,{context:{courseList:z,refreshCourseList:te,userList:V,setUserList:H,refreshUserList:J,tagList:U,refreshTagList:X,categoryList:G,refreshCategoryList:Q}})]})};export{I as BackStage};