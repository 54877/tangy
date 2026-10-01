import{Cn as e,D as t,Dn as n,E as r,En as i,K as a,Mn as o,O as s,On as ee,S as c,Sn as l,T as u,_n as d,f,hn as p,ht as m,jn as h,n as g,u as _,v,vn as y,w as b,wn as x,x as S,yn as C}from"./index-C9nGSwhb.js";import{t as w}from"./userImg-N7Vism4H.js";import{t as T}from"./selectAndCropImage-WSJqEi4Z.js";import{t as E}from"./EditOutlined-D_7G6rnD.js";var D=o(h(),1),O=x.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: right bottom;
  display: block;
  ${e.xsLg} {
    object-position: right 85%;
  }
  ${e.sm} {
    object-position: right 65%;
  }
`;x(a)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`;var k=x(a)`
  padding-top: 24px;
`,A=x(a)`
  position: relative;
`,j=x(a)`
  position: absolute;
  inset: 0;
`,M=x(a)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,N=x(a)`
  padding: 0 16px;
`,P=x(a)`
  padding: 16px;
`,F=x(a)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${e.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,te=x(a)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,I=x(C)``,L=x(P)`
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
`,R=x(p)`
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

  &:disabled {
    opacity: 1;
    cursor: default;
  }

  &:disabled:hover::after {
    background: rgba(0, 0, 0, 0);
  }

  &:disabled:hover .edit-icon {
    opacity: 0;
  }
`,z=`/tangy/assets/profile_image-agnLRcZH.png`,B=d(),V=()=>{let[o,d]=(0,D.useState)(g),[h,x]=(0,D.useState)(),{openDialog:V}=f(),{loading:H}=s(),{user:U,setSelectedProfileImage:W,selectedProfileImage:G,profileImageUrl:K}=u(),q=ee(),J=n(),Y=m(`${e.xsLg}`),X=m(`${e.sm}`),Z=[`個人檔案`,`我的學習`,`我的收藏`,`訂單紀錄`,`建立課程`],Q=[`personal`,`learn`,`collect`,`order`,`createCourse`],ne=Q.findIndex(e=>J.pathname.endsWith(`/${e}`)),{getMe:$}=b();return(0,D.useEffect)(()=>{$()},[]),(0,D.useEffect)(()=>{G&&(async()=>{H(1).start();try{if(!G)return;await _(G),await $(!0)}catch(e){W(null),await $(!0),V({type:`MessageDialog`,title:`系統訊息`,fileErrorMessage:`系統異常請稍後嘗試`},1),console.log(e)}finally{H(1).stop()}})()},[G]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(F,{$align:`stretch`,children:[X&&(0,B.jsx)(te,{$align:`stretch`,children:(0,B.jsxs)(a,{$direction:`column`,$justify:`flex-start`,children:[(0,B.jsx)(k,{$direction:`column`,children:Z.map((e,t)=>{let n=J.pathname.endsWith(`/${Q[t]}`);return(0,B.jsx)(L,{$activeIndex:n,$justify:`flex-start`,onClick:()=>q(Q[t]),children:(0,B.jsx)(I,{$shade:n?950:500,$type:`label`,$size:`md`,children:e})},`${e}-${t}`)})}),(0,B.jsx)(a,{style:{padding:`16px`},children:(0,B.jsxs)(M,{$direction:`column`,children:[(0,B.jsx)(`img`,{style:{width:`60px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,B.jsxs)(a,{$direction:`column`,$align:`center`,children:[(0,B.jsx)(y,{$size:`xs`,children:`不知道學什麼?`}),(0,B.jsxs)(a,{$align:`center`,$direction:`column`,$gap:`none`,children:[(0,B.jsx)(C,{$size:`xs`,$shade:500,children:`探索學習路徑`}),(0,B.jsx)(C,{$size:`xs`,$shade:500,children:`你的課程組合!`})]}),(0,B.jsx)(p,{style:{fontSize:`12px`},onClick:()=>{q(`/course`)},icon_right:(0,B.jsx)(v,{style:{width:`16px`,height:`16px`}}),text:`探索學習`})]})]})})]})}),(0,B.jsxs)(a,{$direction:`column`,$gap:`none`,$justify:`flex-start`,children:[(0,B.jsx)(N,{children:(0,B.jsxs)(A,{$direction:`column`,$gap:`none`,children:[(0,B.jsx)(O,{style:{height:`40vh`},src:z}),(0,B.jsxs)(j,{$gap:`none`,$direction:`column`,children:[(0,B.jsxs)(N,{style:{flex:1},$direction:`column`,$align:`flex-start`,children:[(0,B.jsx)(R,{disabled:r(1),onClick:()=>{T({openDialog:V,allowedTypes:[`image/jpeg`,`image/png`,`image/webp`],allowedExtensions:[`jpg`,`jpeg`,`png`,`webp`],cropAspectRatio:1,cropRadius:`50%`,onComplete:W})},text:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(w,{imageUrl:K.length>0?K:U.imageUrl,width:`clamp(120px, 12vw, 140px)`,height:`clamp(120px, 12vw, 140px)`}),(0,B.jsx)(E,{className:`edit-icon`})]})}),(0,B.jsxs)(l,{children:[(0,B.jsx)(C,{$type:`label`,children:`Hi, `}),(0,B.jsx)(C,{$type:`label`,children:r(0)?(0,B.jsx)(t,{type:`spinner`}):U.userName})]}),(0,B.jsxs)(l,{$direction:`column`,$gap:`none`,$align:`flex-start`,children:[(0,B.jsx)(C,{$type:`label`,children:`學習讓自己更強大，`}),(0,B.jsx)(C,{$type:`label`,children:`碳吉與你一起成長!`})]})]}),!X&&(0,B.jsx)(S,{initialSlide:Math.max(ne,0),slidesPerView:4,style:{width:`100%`,minWidth:0,backgroundColor:`white`,borderRadius:`16px`,boxShadow:`0px 2px 8px rgba(0, 0, 0, 0.15)`,borderBottom:`1px solid #ccd1d5`},breakpoints:{0:{slidesPerView:3},500:{slidesPerView:4},620:{slidesPerView:5}},children:Z.map((e,t)=>{let n=J.pathname.endsWith(`/${Q[t]}`);return(0,B.jsx)(c,{children:(0,B.jsx)(L,{$activeIndex:n,$justify:`center`,onClick:()=>{q(Q[t])},children:(0,B.jsx)(I,{style:{padding:`8px 0`},$shade:n?950:500,children:e})})},`${e}-${t}`)})})]})]})}),(0,B.jsx)(P,{children:(0,B.jsx)(i,{context:{userList:o,setUserList:d,device:h,setDevice:x}})})]})]}),!X&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(N,{children:(0,B.jsxs)(A,{$direction:`column`,$gap:`none`,children:[(0,B.jsx)(O,{style:{height:Y?`25vh`:`20vh`},src:`/tangy/assets/profile_image2-Bz4kr4Px.png`}),(0,B.jsxs)(j,{style:{padding:`0 16px`},$align:`flex-start`,$direction:`column`,children:[(0,B.jsx)(y,{style:{color:`white`},children:`邀請好友一起學習`}),(0,B.jsx)(C,{style:{color:`white`},children:`一起成長,獲得獎勵!`})]})]})}),(0,B.jsx)(a,{style:{padding:`16px`},children:(0,B.jsxs)(M,{children:[(0,B.jsx)(`img`,{style:{width:`80px`},src:`/tangy/assets/tangy_Icon-Dd5npyE2.png`,alt:``}),(0,B.jsxs)(a,{$direction:`column`,$align:`flex-start`,children:[(0,B.jsx)(y,{$size:`sm`,children:`不知道學什麼?`}),(0,B.jsxs)(a,{$align:`flex-start`,$direction:`column`,$gap:`none`,children:[(0,B.jsx)(C,{$shade:500,children:`探索學習路徑，找到最適合`}),(0,B.jsx)(C,{$shade:500,children:`你的課程組合!`})]}),(0,B.jsx)(p,{onClick:()=>{q(`/course`)},icon_right:(0,B.jsx)(v,{}),text:`探索學習路徑`})]})]})})]})]})};export{V as Profile};