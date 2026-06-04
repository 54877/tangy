import{$ as e,O as t,Y as n,a as r,n as i,o as a,t as o}from"./index-DTArTbzV.js";var s=e(a)`
  && {
    background: rgb(31, 136, 61);
    width: 100%;
    transition: 0.2s ease;
    &:hover {
      transform: translateY(-1px);
      background: rgb(24, 110, 49);
    }
  }
`,c=e(r)`
  color: #e3f2fd;
  &:hover {
    transform: translateY(-1px);
    color: white;
  }
`,l=n();function u(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{location:`down`}),(0,l.jsx)(`form`,{style:{width:`100%`},children:(0,l.jsxs)(t,{$direction:`column`,$gap:`lg`,$align:`flex-start`,children:[(0,l.jsx)(o,{title:`Email`,required:!0}),(0,l.jsx)(o,{title:`Password`,required:!0,content:`密碼長度需8~15個字符，其中包含數字和大小寫字母。`}),(0,l.jsx)(o,{title:`Username`,required:!0}),(0,l.jsx)(s,{text:`註冊`})]})}),(0,l.jsx)(t,{style:{width:`100%`},children:(0,l.jsx)(c,{to:`/login`,text:`Already have an account? Sign in →`})})]})}export{u as Register};