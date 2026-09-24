import{C as e,E as t,W as n,_ as r,_n as i,an as a,b as o,cn as s,d as c,fn as l,ft as u,in as d,ln as f,mn as p,n as m,pn as h,rn as g,tn as _,un as v,vn as y,w as b,x}from"./index-BrSfuUQ4.js";import{n as S,t as C}from"./nav.common-7fqbAXTn.js";import{t as w}from"./selectAndCropImage-WSJqEi4Z.js";import{t as T}from"./EditOutlined-CXafMbn3.js";var E=y(i(),1),D=v.img`
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
`;v(n)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`;var O=v(n)`
  padding-top: 24px;
`,k=v(n)`
  position: relative;
`,A=v(n)`
  position: absolute;
  inset: 0;
`,j=v(n)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,M=v(n)`
  padding: 0 16px;
`,N=v(n)`
  padding: 16px;
`,P=v(n)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${f.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,F=v(n)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,I=v(a)``,L=v(N)`
  border-radius: 8px;

  background-color: ${({theme:e,$activeIndex:t})=>t?e.colors.primary[500]:`transparent`};

  ${I} {
    color: ${({theme:e,$activeIndex:t})=>t?`white`:e.colors.gray[500]};
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[600]};
    color: white;
  }
  &:hover ${I} {
    color: white;
  }
`,R=v(_)`
  position: relative;
  overflow: hidden;
  padding: 0;
  border-radius: 50%;
  background: none;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.2s ease;
    pointer-events: none;
  }

  &:hover::after {
    background: rgba(0, 0, 0, 0.2);
  }

  &:hover .edit-icon {
    opacity: 1;
  }

  .edit-icon {
    position: absolute;
    z-index: 2;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
    opacity: 0;
    transition: opacity 0.2s ease;

    pointer-events: none;
  }
`,z=`/tangy/assets/profile_image-agnLRcZH.png`,B=g(),V=()=>{let[i,g]=(0,E.useState)(m),[v,y]=(0,E.useState)(),[V,H]=(0,E.useState)(null),{openDialog:U}=c(),{user:W}=t(),G=p(),K=h(),q=u(`${f.xsLg}`),J=u(`${f.sm}`),Y=[`個人檔案`,`我的學習`,`我的收藏`,`訂單紀錄`,`建立課程`],X=[`personal`,`learn`,`collect`,`order`,`createCourse`],Z=X.findIndex(e=>K.pathname.endsWith(`/${e}`)),{getMe:Q}=C();(0,E.useEffect)(()=>{Q()},[]);let $=(0,E.useMemo)(()=>V?URL.createObjectURL(V):``,[V]);return(0,E.useEffect)(()=>()=>{$&&URL.revokeObjectURL($)},[$]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(P,{$align:`stretch`,children:[J&&(0,B.jsx)(F,{$align:`stretch`,children:(0,B.jsxs)(n,{$direction:`column`,$justify:`flex-start`,children:[(0,B.jsx)(O,{$direction:`column`,children:Y.map((e,t)=>{let n=K.pathname.endsWith(`/${X[t]}`);return(0,B.jsx)(L,{$activeIndex:n,$justify:`flex-start`,onClick:()=>G(X[t]),children:(0,B.jsx)(I,{$shade:n?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`)})}),(0,B.jsx)(n,{style:{padding:`16px`},children:(0,B.jsxs)(j,{$direction:`column`,children:[(0,B.jsx)(`img`,{style:{width:`60px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,B.jsxs)(n,{$direction:`column`,$align:`center`,children:[(0,B.jsx)(d,{$size:`xs`,children:`不知道學什麼?`}),(0,B.jsxs)(n,{$align:`center`,$direction:`column`,$gap:`none`,children:[(0,B.jsx)(a,{$size:`xs`,$shade:500,children:`探索學習路徑`}),(0,B.jsx)(a,{$size:`xs`,$shade:500,children:`你的課程組合!`})]}),(0,B.jsx)(_,{style:{fontSize:`12px`},onClick:()=>{G(`/course`)},icon_right:(0,B.jsx)(r,{style:{width:`16px`,height:`16px`}}),text:`探索學習`})]})]})})]})}),(0,B.jsxs)(n,{$direction:`column`,$gap:`none`,$justify:`flex-start`,children:[(0,B.jsx)(M,{children:(0,B.jsxs)(k,{$direction:`column`,$gap:`none`,children:[(0,B.jsx)(D,{style:{height:`40vh`},src:z}),(0,B.jsxs)(A,{$gap:`none`,$direction:`column`,children:[(0,B.jsxs)(M,{style:{flex:1},$direction:`column`,$align:`flex-start`,children:[(0,B.jsx)(R,{onClick:()=>{w({openDialog:U,allowedTypes:[`image/jpeg`,`image/png`,`image/webp`],allowedExtensions:[`jpg`,`jpeg`,`png`,`webp`],cropAspectRatio:1,cropRadius:`50%`,onComplete:H})},text:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(S,{imageUrl:$||W.imageUrl,width:`clamp(120px, 12vw, 140px)`,height:`clamp(120px, 12vw, 140px)`}),(0,B.jsx)(T,{className:`edit-icon`})]})}),(0,B.jsxs)(s,{children:[(0,B.jsx)(a,{$type:`label`,children:`Hi, `}),(0,B.jsx)(a,{$type:`label`,children:e(0)?(0,B.jsx)(b,{type:`spinner`}):W.userName})]}),(0,B.jsxs)(s,{$direction:`column`,$gap:`none`,$align:`flex-start`,children:[(0,B.jsx)(a,{$type:`label`,children:`學習讓自己更強大，`}),(0,B.jsx)(a,{$type:`label`,children:`碳吉與你一起成長!`})]})]}),!J&&(0,B.jsx)(o,{initialSlide:Math.max(Z,0),slidesPerView:4,style:{width:`100%`,minWidth:0,backgroundColor:`white`,borderRadius:`16px`,boxShadow:`0px 2px 8px rgba(0, 0, 0, 0.15)`,borderBottom:`1px solid #ccd1d5`},breakpoints:{0:{slidesPerView:3},500:{slidesPerView:4},620:{slidesPerView:5}},children:Y.map((e,t)=>{let n=K.pathname.endsWith(`/${X[t]}`);return(0,B.jsx)(x,{children:(0,B.jsx)(L,{$activeIndex:n,$justify:`center`,onClick:()=>{G(X[t])},children:(0,B.jsx)(I,{style:{padding:`8px 0`},$shade:n?950:500,children:e})})},`${e}-${t}`)})})]})]})}),(0,B.jsx)(N,{children:(0,B.jsx)(l,{context:{userList:i,setUserList:g,device:v,setDevice:y}})})]})]}),!J&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(M,{children:(0,B.jsxs)(k,{$direction:`column`,$gap:`none`,children:[(0,B.jsx)(D,{style:{height:q?`25vh`:`20vh`},src:`/tangy/assets/profile_image2-Bz4kr4Px.png`}),(0,B.jsxs)(A,{style:{padding:`0 16px`},$align:`flex-start`,$direction:`column`,children:[(0,B.jsx)(d,{style:{color:`white`},children:`邀請好友一起學習`}),(0,B.jsx)(a,{style:{color:`white`},children:`一起成長,獲得獎勵!`})]})]})}),(0,B.jsx)(n,{style:{padding:`16px`},children:(0,B.jsxs)(j,{children:[(0,B.jsx)(`img`,{style:{width:`80px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,B.jsxs)(n,{$direction:`column`,$align:`flex-start`,children:[(0,B.jsx)(d,{$size:`sm`,children:`不知道學什麼?`}),(0,B.jsxs)(n,{$align:`flex-start`,$direction:`column`,$gap:`none`,children:[(0,B.jsx)(a,{$shade:500,children:`探索學習路徑，找到最適合`}),(0,B.jsx)(a,{$shade:500,children:`你的課程組合!`})]}),(0,B.jsx)(_,{onClick:()=>{G(`/course`)},icon_right:(0,B.jsx)(r,{}),text:`探索學習路徑`})]})]})})]})]})};export{V as Profile};