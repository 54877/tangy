import{Gn as e,Kn as t,Ln as n,Vn as r,dt as i}from"./index-DaRkPBbP.js";var a=t.img`
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
`;t(i)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #ccd1d5;
`;var o=t(i)`
  padding-top: 24px;
`,s=t(i)`
  position: relative;
`,c=t(i)`
  position: absolute;
  inset: 0;
`,l=t(i)`
  background-color: #f4f5f7;
  border-radius: 8px;
  padding: 16px;
`,u=t(i)`
  padding: 0 16px;
`,d=t(i)`
  padding: 16px;
`,f=t(i)`
  margin: 0 auto;

  max-width: 1320px;
  width: 100%;
  ${e.sm} {
    padding: 16px 0;
    padding-left: 16px;
  }
`,p=t(i)`
  max-width: 20%;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`,m=t(r)``,h=t(d)`
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
`,g=t(n)`
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