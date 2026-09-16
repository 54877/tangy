import{B as e,H as t,I as n,Qt as r,U as i,V as a,en as o,fn as s,nn as c,on as l,pn as u,sn as d,tn as f}from"./index-HTduA8lV.js";var p=t(`bold`,[[`path`,{d:`M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8`,key:`mg9rjx`}]]),m=t(`circle-play`,[[`path`,{d:`M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z`,key:`kmsa83`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),h=t(`image`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]),g=t(`italic`,[[`line`,{x1:`19`,x2:`10`,y1:`4`,y2:`4`,key:`15jd3p`}],[`line`,{x1:`14`,x2:`5`,y1:`20`,y2:`20`,key:`bu0au3`}],[`line`,{x1:`15`,x2:`9`,y1:`4`,y2:`20`,key:`uljnxc`}]]),_=t(`list-ordered`,[[`path`,{d:`M11 5h10`,key:`1cz7ny`}],[`path`,{d:`M11 12h10`,key:`1438ji`}],[`path`,{d:`M11 19h10`,key:`11t30w`}],[`path`,{d:`M4 4h1v5`,key:`10yrso`}],[`path`,{d:`M4 9h2`,key:`r1h2o0`}],[`path`,{d:`M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02`,key:`xtkcd5`}]]),v=t(`list`,[[`path`,{d:`M3 5h.01`,key:`18ugdj`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M3 19h.01`,key:`noohij`}],[`path`,{d:`M8 5h13`,key:`1pao27`}],[`path`,{d:`M8 12h13`,key:`1za7za`}],[`path`,{d:`M8 19h13`,key:`m83p4d`}]]),y=t(`underline`,[[`path`,{d:`M6 4v6a6 6 0 0 0 12 0V4`,key:`9kb039`}],[`line`,{x1:`4`,x2:`20`,y1:`20`,y2:`20`,key:`nun2al`}]]),b=d.div`
  width: 100%;
  margin: 0 auto;
`,x=d.div`
  margin-bottom: 24px;

  p {
    margin-top: 8px;
    color: ${({theme:e})=>e.colors.gray[600]};
  }
`,S=d.form`
  display: grid;
  gap: 20px;
`,C=d.section`
  padding: 24px;
  border: 1px solid ${({theme:e})=>e.colors.gray[100]};
  border-radius: 16px;
  background: ${({theme:e})=>e.semanticColors.text.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  ${l.sm} {
    padding: 32px;
  }
`,w=d.div`
  margin-bottom: 24px;

  h2 {
    margin-bottom: 6px;
    color: ${({theme:e})=>e.colors.gray[950]};
    font-size: 20px;
    font-weight: 700;
  }

  p {
    color: ${({theme:e})=>e.colors.gray[500]};
    font-size: 14px;
  }
`,T=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  ${l.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`,E=d.div`
  overflow: hidden;
  margin-top: 20px;
  border-radius: 10px;
  background: ${({theme:e})=>e.colors.gray[100]};

  img {
    display: block;
    width: 100%;
    max-height: 280px;
    object-fit: cover;
  }
`,D=d.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 4px;

  ${l.sm} {
    flex-direction: row;
  }
`,O=u(s(),1),k=d.div`
  position: relative;
  width: 100%;
`,A=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  border: 1px solid ${({theme:e})=>e.colors.gray[200]};
  border-bottom: 0;
  border-radius: 8px 8px 0 0;
  background: ${({theme:e})=>e.colors.gray[50]};

  button,
  select,
  input {
    height: 32px;
    border: 1px solid ${({theme:e})=>e.colors.gray[200]};
    border-radius: 6px;
    color: ${({theme:e})=>e.colors.gray[800]};
    background: white;
  }

  button {
    min-width: 32px;
    padding: 0 8px;
    font-weight: 700;

    &:hover {
      color: ${({theme:e})=>e.colors.primary[700]};
      background: ${({theme:e})=>e.colors.primary[50]};
    }
  }

  select {
    padding: 0 8px;
  }

  input[type="color"] {
    width: 42px;
    padding: 3px;
  }

`,j=d.div`
  min-height: ${({$minHeight:e})=>`${e}px`};
  padding: 12px;
  border: 1px solid
    ${({theme:e,$isError:t})=>t?e.colors.danger[600]:e.colors.gray[200]};
  color: ${({theme:e})=>e.colors.gray[950]};
  background: white;
  line-height: 1.6;
  overflow-wrap: anywhere;
  word-break: break-word;
  outline: none;

  &:focus {
    border-color: ${({theme:e})=>e.colors.primary[600]};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  }

  &:empty::before {
    content: attr(data-placeholder);
    color: ${({theme:e})=>e.colors.gray[400]};
    pointer-events: none;
  }

  h2,
  h3,
  p {
    margin: 0 0 8px;
  }

  ul,
  ol {
    margin: 0 0 8px 24px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 12px 0;
  }

  * {
    overflow-wrap: anywhere;
    word-break: break-word;
  }
`,M=d.p`
  margin-top: 6px;
  color: ${({theme:e})=>e.colors.danger[600]};
  font-size: 12px;
`,N=d.button`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  padding: 0;
  border: 2px solid ${({theme:e})=>e.colors.primary[600]};
  border-radius: 2px;
  background: white;
  cursor: nwse-resize;
`,P=new Set([`P`,`BR`,`DIV`,`H2`,`H3`,`STRONG`,`B`,`EM`,`I`,`U`,`UL`,`OL`,`LI`,`FONT`,`IMG`]),F=new Set([`SCRIPT`,`STYLE`,`IFRAME`,`OBJECT`,`EMBED`,`SVG`,`MATH`,`TEMPLATE`]),I=e=>/^#[0-9a-f]{6}$/i.test(e),L=e=>{try{let t=new URL(e,`https://tangy.local`);return t.protocol===`https:`||t.protocol===`http:`}catch{return!1}},R=e=>/^data:image\/(png|jpeg|gif|webp);base64,[a-z0-9+/=\s]+$/i.test(e)&&e.length<=7e6,z=e=>L(e)||R(e);function B(e){let t=new DOMParser().parseFromString(e,`text/html`),n=e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;let t=e;if(F.has(t.tagName)){t.remove();return}if([...t.childNodes].forEach(n),!P.has(t.tagName)){let e=t.parentNode;if(!e)return;for(;t.firstChild;)e.insertBefore(t.firstChild,t);t.remove();return}[...t.attributes].forEach(e=>{let n=t.tagName===`FONT`&&e.name.toLowerCase()===`color`&&I(e.value),r=t.tagName===`IMG`&&e.name.toLowerCase()===`src`&&z(e.value),i=t.tagName===`IMG`&&e.name.toLowerCase()===`alt`,a=t.tagName===`IMG`&&e.name.toLowerCase()===`width`&&/^\d{1,4}$/.test(e.value)&&Number(e.value)<=2e3;!n&&!r&&!i&&!a&&t.removeAttribute(e.name)}),t.tagName===`IMG`&&!t.getAttribute(`src`)&&t.remove()};return[...t.body.childNodes].forEach(n),t.body.innerHTML}var V=o();function H({title:e,fieldKey:t,information:n,onChange:r,err:o,required:s=!1,disabled:c=!1,placeholder:l=`請輸入課程內容`,minHeight:u=180}){let d=(0,O.useRef)(null),f=(0,O.useRef)(null),[m,h]=(0,O.useState)(null),[b,x]=(0,O.useState)(``),S=B(String(n[t]??``));(0,O.useEffect)(()=>{d.current&&d.current.innerHTML!==S&&(d.current.innerHTML=S)},[S]);let C=()=>{let e=B(d.current?.innerHTML??``);d.current&&d.current.innerHTML!==e&&(d.current.innerHTML=e),r(e,t)},w=()=>{let e=d.current,t=window.getSelection();return[t?.rangeCount?t.getRangeAt(0):null,f.current].find(t=>!!e&&!!t&&e.contains(t.commonAncestorContainer))??null},T=()=>{let e=w();e&&(f.current=e.cloneRange())},E=e=>{let t=window.getSelection();t?.removeAllRanges(),t?.addRange(e)},D=(e,t)=>{let n=w();if(!n||n.collapsed)return;let r=document.createElement(e);e===`font`&&t&&r.setAttribute(`color`,t),r.append(n.extractContents()),n.insertNode(r),n.selectNodeContents(r),E(n),T(),C()},P=e=>{let t=e.nodeType===Node.ELEMENT_NODE?e:e.parentElement;for(;t&&t!==d.current;){if([`P`,`DIV`,`H2`,`H3`].includes(t.tagName))return t;t=t.parentElement}return null},F=e=>{let t=w();if(!t)return;let n=P(t.startContainer);if(!n){let n=document.createElement(e);n.append(t.extractContents()),t.insertNode(n),t.selectNodeContents(n),E(t),T(),C();return}if(n.tagName.toLowerCase()===e)return;let r=document.createElement(e);r.innerHTML=n.innerHTML,n.replaceWith(r),C()},I=e=>{let t=w(),n=t?P(t.startContainer):null;if(!n)return;let r=document.createElement(e),i=document.createElement(`li`);i.innerHTML=n.innerHTML,r.append(i),n.replaceWith(r),C()},L=e=>{let t=d.current?.parentElement;if(!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();h({element:e,left:n.right-r.left-7,top:n.bottom-r.top-7})},R=e=>{let t=document.createElement(`img`);t.src=e,t.alt=`課程內容圖片`,t.loading=`lazy`,t.width=Math.min(560,d.current?.clientWidth??560),t.addEventListener(`load`,()=>L(t),{once:!0});let n=w();n?(n.deleteContents(),n.insertNode(t),n.setStartAfter(t),n.collapse(!0),E(n),T()):d.current?.append(t),x(``),C()};return(0,V.jsxs)(i,{$direction:`column`,$gap:`sm`,$align:`flex-start`,children:[(0,V.jsx)(a,{required:s,children:e}),(0,V.jsxs)(k,{children:[(0,V.jsxs)(A,{children:[(0,V.jsxs)(`select`,{"aria-label":`文字大小`,defaultValue:`p`,onMouseDown:T,onChange:e=>F(e.target.value),disabled:c,children:[(0,V.jsx)(`option`,{value:`p`,children:`內文`}),(0,V.jsx)(`option`,{value:`h2`,children:`大標題`}),(0,V.jsx)(`option`,{value:`h3`,children:`小標題`})]}),(0,V.jsx)(`button`,{type:`button`,"aria-label":`粗體`,onClick:()=>D(`strong`),disabled:c,children:(0,V.jsx)(p,{size:16})}),(0,V.jsx)(`button`,{type:`button`,"aria-label":`斜體`,onClick:()=>D(`em`),disabled:c,children:(0,V.jsx)(g,{size:16})}),(0,V.jsx)(`button`,{type:`button`,"aria-label":`底線`,onClick:()=>D(`u`),disabled:c,children:(0,V.jsx)(y,{size:16})}),(0,V.jsx)(`button`,{type:`button`,"aria-label":`項目清單`,onClick:()=>I(`ul`),disabled:c,children:(0,V.jsx)(v,{size:16})}),(0,V.jsx)(`button`,{type:`button`,"aria-label":`編號清單`,onClick:()=>I(`ol`),disabled:c,children:(0,V.jsx)(_,{size:16})}),(0,V.jsx)(`input`,{type:`color`,"aria-label":`文字顏色`,defaultValue:`#232529`,onChange:e=>D(`font`,e.target.value),disabled:c})]}),(0,V.jsx)(j,{ref:d,contentEditable:!c,suppressContentEditableWarning:!0,role:`textbox`,"aria-multiline":`true`,"aria-label":typeof e==`string`?e:`富文字內容`,"data-placeholder":l,$isError:!!o?.[t],$minHeight:u,onInput:C,onBlur:C,onKeyUp:T,onMouseUp:T,onPaste:e=>{let t=Array.from(e.clipboardData.items).find(e=>e.kind===`file`&&[`image/png`,`image/jpeg`,`image/gif`,`image/webp`].includes(e.type));if(t){e.preventDefault();let n=t.getAsFile();if(!n)return;if(n.size>5*1024*1024){x(`圖片請小於 5MB。`);return}let r=new FileReader;r.onload=()=>{typeof r.result==`string`&&R(String(r.result??``))},r.readAsDataURL(n);return}e.preventDefault();let n=w();if(!n)return;let r=document.createTextNode(e.clipboardData.getData(`text/plain`));n.deleteContents(),n.insertNode(r),n.setStartAfter(r),n.collapse(!0),E(n),T(),C()},onClick:e=>{e.target instanceof HTMLImageElement?L(e.target):h(null)}}),m&&(0,V.jsx)(N,{type:`button`,"aria-label":`拖曳調整圖片大小`,style:{left:m.left,top:m.top},onPointerDown:e=>{e.preventDefault();let t=m?.element;if(!t)return;let n=e.clientX,r=t.getBoundingClientRect().width,i=d.current?.clientWidth??2e3,a=e=>{let a=Math.min(i,Math.max(80,Math.round(r+e.clientX-n)));t.setAttribute(`width`,String(a)),L(t)},o=()=>{window.removeEventListener(`pointermove`,a),window.removeEventListener(`pointerup`,o),C()};window.addEventListener(`pointermove`,a),window.addEventListener(`pointerup`,o)}}),o?.[t]&&(0,V.jsx)(M,{children:o[t]}),b&&(0,V.jsx)(M,{children:b})]})]})}var U={title:``,teacher:``,rating:`5`,studentCount:`0`,duration:``,content:``,price:``,originalPrice:``,image:``,video:``};function W(){let{information:t,handleOnChange:i}=n(U);return(0,O.useEffect)(()=>{console.log(t.content)},[t]),(0,V.jsxs)(b,{children:[(0,V.jsxs)(x,{children:[(0,V.jsx)(f,{$size:{xsLg:`lg`,lg:`xl`},children:`建立新課程`}),(0,V.jsx)(c,{$shade:600,children:`完整填寫課程資料後，即可儲存並上架。`})]}),(0,V.jsxs)(S,{onSubmit:e=>{e.preventDefault();let n={...t,content:B(t.content)};console.log(`Create course payload`,n)},children:[(0,V.jsxs)(C,{children:[(0,V.jsxs)(w,{children:[(0,V.jsx)(`h2`,{children:`基本資訊`}),(0,V.jsx)(`p`,{children:`這些內容會顯示在課程卡片與課程頁面。`})]}),(0,V.jsxs)(T,{children:[(0,V.jsx)(e,{title:`課程名稱`,required:!0,fieldKey:`title`,information:t,onChange:i,placeholder:`例如：理財新手財務啟蒙之旅`}),(0,V.jsx)(e,{title:`講師名稱`,required:!0,fieldKey:`teacher`,information:t,onChange:i,placeholder:`例如：白老師`}),(0,V.jsx)(e,{title:`售價`,required:!0,fieldKey:`price`,information:t,onChange:i,inputMode:`numeric`,placeholder:`例如：3600`}),(0,V.jsx)(e,{title:`原價`,required:!0,fieldKey:`originalPrice`,information:t,onChange:i,inputMode:`numeric`,placeholder:`例如：5800`})]})]}),(0,V.jsx)(C,{children:(0,V.jsx)(H,{title:(0,V.jsx)(w,{children:(0,V.jsx)(`h2`,{children:`課程內容`})}),fieldKey:`content`,information:t,onChange:i,placeholder:`介紹課程會學到什麼、適合哪些學員，以及課程特色。`})}),(0,V.jsxs)(C,{children:[(0,V.jsxs)(w,{children:[(0,V.jsx)(`h2`,{children:`課程素材`}),(0,V.jsx)(`p`,{children:`請輸入已上傳至儲存空間的圖片與影片網址。`})]}),(0,V.jsxs)(T,{children:[(0,V.jsx)(e,{title:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(h,{size:16}),` 封面圖片網址`]}),required:!0,fieldKey:`image`,information:t,onChange:i,type:`url`,placeholder:`https://example.com/course-cover.jpg`,content:`建議使用 16:9 橫式圖片，呈現效果最佳。`}),(0,V.jsx)(e,{title:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(m,{size:16}),` 課程影片網址`]}),required:!0,fieldKey:`video`,information:t,onChange:i,type:`url`,placeholder:`https://example.com/course-intro.mp4`})]}),t.image&&(0,V.jsx)(E,{children:(0,V.jsx)(`img`,{src:t.image,alt:`課程封面預覽`})})]}),(0,V.jsx)(D,{children:(0,V.jsx)(r,{text:`儲存課程`})})]})]})}export{W as CreateCourse};