import{Et as e,Fn as t,Gn as n,Un as r,zn as i}from"./index-C8m-qZNr.js";var a=n.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  object-position: right bottom;
  display: block;
  ${r.xsLg} {
    object-position: right 85%;
  }
  ${r.sm} {
    object-position: right 65%;
  }
`;n(e)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`;var o=n(e)`
  padding-top: 24px;
`,s=n(e)`
  position: relative;
`,c=n(e)`
  position: absolute;
  inset: 0;
`,l=n(e)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,u=n(e)`
  padding: 0 16px;
`,d=n(e)`
  padding: 16px;
`,f=n(e)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${r.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,p=n(e)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,m=n(i)``,h=n(d)`
  border-radius: 8px;

  background-color: ${({theme:e,$activeIndex:t})=>t?e.colors.primary[500]:`transparent`};

  ${m} {
    color: ${({theme:e,$activeIndex:t})=>t?`white`:e.colors.gray[500]};
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary[600]};
    color: white;
  }
  &:hover ${m} {
    color: white;
  }
`,g=n(t)`
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
`;export{s as a,f as c,p as d,g as f,l as i,o as l,d as n,h as o,c as r,m as s,u as t,a as u};