"use strict";(self.webpackChunkform_ip_app=self.webpackChunkform_ip_app||[]).push([[619],{7619:function(e,n,r){r.r(n),r.d(n,{default:function(){return E}});var t=r(4554),i=r(9164),s=r(2791),o=r(2748),a=r(6151),c=r(3457),l=r(419),u=r(184),x=function(){var e=(0,s.useContext)(o.l),n=e.currentStepIdx,r=e.next,t=e.formikClause,i=e.isConfirmed,c=Object.values(t.errors);return(0,s.useEffect)((function(){i&&0===c.length&&r()}),[i]),(0,u.jsx)(u.Fragment,{children:1===n&&(0,u.jsx)(a.Z,{variant:"contained",type:"submit",endIcon:(0,u.jsx)(l.Z,{}),onClick:function(){i&&0===c.length&&r()},sx:{width:{xs:"65%",sm:"15rem"},"&:hover":{backgroundColor:"#2455BA"}},children:"Zatwierd\u017a"})})},d=function(){var e=(0,s.useContext)(o.l),n=e.currentStepIdx,r=e.isSubmited,t=e.next,i=e.formik,c=Object.values(i.errors);return(0,s.useEffect)((function(){r&&0===c.length&&t()}),[r]),(0,u.jsx)(u.Fragment,{children:0===n&&(0,u.jsx)(a.Z,{variant:"contained",endIcon:(0,u.jsx)(l.Z,{}),type:"submit",onClick:function(){r&&0===c.length&&t()},sx:{width:{xs:"65%",sm:"15rem"},"&:hover":{backgroundColor:"#2455BA"},marginLeft:{xs:0,sm:"auto"}},children:"Zatwierd\u017a"})})},m=r(9439),f=function(){var e=(0,s.useContext)(o.l),n=e.formik,r=e.sendRequest,t=e.isCaptcha,i=e.setIsCaptcha,c=e.currentStepIdx,x=e.next,d=(0,s.useState)(!1),f=(0,m.Z)(d,2),h=f[0],p=f[1];(0,s.useEffect)((function(){h&&x()}),[h]),(0,s.useEffect)((function(){2!==c&&i(!1)}),[c]);return(0,u.jsx)(u.Fragment,{children:2===c&&(0,u.jsx)(a.Z,{variant:"contained",endIcon:t&&(0,u.jsx)(l.Z,{}),onClick:function(){c<2&&x(),t&&2===c&&r({url:"https://mail-sender-production.up.railway.app/receive",body:{member:n.values},method:"POST"},p)},sx:{width:{xs:"65%",sm:"15rem"},"&:hover":{backgroundColor:"#2455BA"}},children:t?"Wy\u015blij":"ZAZNACZ CAPTCHA"})})},h=r(479),p=function(){var e=(0,s.useContext)(o.l),n=e.currentStepIdx,r=e.back;return(0,u.jsx)(u.Fragment,{children:n>0&&(0,u.jsx)(a.Z,{variant:"contained",startIcon:(0,u.jsx)(h.Z,{}),onClick:function(){return r()},sx:{width:{xs:"65%",sm:"15rem"},"&:hover":{backgroundColor:"#2455BA"}},children:"Wstecz"})})},j=function(){(0,c.Z)(a.Z)({width:"35%",p:"0.3em",marginLeft:"auto","&:hover":{backgroundColor:"#2455BA"}});return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(i.Z,{sx:{display:"flex",flexDirection:{xs:"column-reverse",sm:"row"},justifyContent:{xs:"center",sm:"space-between"},alignItems:"center",gap:2,paddingBlock:2,marginTop:"auto"},children:[(0,u.jsx)(p,{}),(0,u.jsx)(d,{}),(0,u.jsx)(x,{}),(0,u.jsx)(f,{})]})})},g=r(3385),Z=r(890),v=function(e){var n=(0,s.useContext)(o.l).currentStepIdx;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(t.Z,{sx:{width:{xs:"1.25rem",sm:"2rem"},aspectRatio:"1/1",border:1,borderRadius:"100%",display:"grid",placeItems:"center",backgroundColor:n>=e.idx?"primary.main":"transparent",color:n>=e.idx?"white":"info.main"},children:(0,u.jsx)(Z.Z,{variant:"fs_14_sb",color:"info",children:e.idx+1})})})},C=function(e){return(0,u.jsx)(Z.Z,{variant:"fs_12_sb",color:"info.dark",sx:{marginInline:1},children:e.text})},w=function(){var e=(0,s.useState)(window.innerWidth),n=(0,m.Z)(e,2),r=n[0],t=n[1];return(0,s.useEffect)((function(){var e=function(){t(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),{windowWidth:r}},b=function(){var e=(0,s.useContext)(o.l),n=(e.steps,e.currentStepIdx),r=(e.step,e.formik,e.formikClause,w().windowWidth);return(0,u.jsx)(t.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:1,position:"relative"},children:["Formula\u017c","Klauzula","Podsumowanie","Potwierdzenie"].map((function(e,i,s){return(0,u.jsxs)(t.Z,{children:[(0,u.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,u.jsx)(v,{idx:i}),r>900&&(0,u.jsx)(C,{text:e}),i<s.length-1&&(0,u.jsx)(g.Z,{color:"secondary",sx:{marginRight:{sm:"1rem"},marginLeft:{xs:"0",sm:"auto"},fontSize:{xs:"0.8rem",sm:"small"}}})]}),(0,u.jsx)(t.Z,{sx:{position:"absolute",bottom:"-70%",left:"-3%"},children:r<900&&i===n&&(0,u.jsx)(C,{text:e})})]},e)}))})},k=r(4454),y=r(5523),I=r(3500),S=r(6934),z=r(8946),A=r(22),F=function(){var e=(0,s.useContext)(o.l).formikClause;(0,S.ZP)(y.Z)((function(e){e.theme;return{color:"green"}}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(i.Z,{sx:{paddingBlock:1.5,borderBottom:1,borderColor:"info.light"},children:[(0,u.jsx)(y.Z,{control:(0,u.jsx)(k.Z,{checkedIcon:(0,u.jsx)(z.Z,{}),icon:(0,u.jsx)(A.Z,{}),sx:{"&:hover":{boxShadow:2}}}),name:"confirmation",checked:e.values.confirmation,onChange:e.handleChange,label:"Zapozna\u0142em si\u0119 z klauzul\u0105 informacyjn\u0105 i wyra\u017cam zgod\u0119 na przetwa\u017canie moich danych osobowych na zasadach i w celach w niej wskazanych",sx:{"& .MuiFormControlLabel-label":{color:e.values.confirmation?"primary.main":"main.dark",fontSize:function(e){return e.typography.fs_12_rg}}}}),(0,u.jsx)(t.Z,{sx:{ml:3.2,position:"absolute"},children:(0,u.jsx)(I.Z,{formik:e,value:"confirmation",otherValue:null})})]})})},_=r(8007),B=function(){var e=(0,s.useContext)(o.l).setIsCaptcha,n="6LeImbcnAAAAALHz2wE3IBUtIIbfhEfF_4Lqz3dW";return(0,u.jsx)(i.Z,{sx:{display:"flex",justifyContent:{xs:"center",sm:"end"}},children:(0,u.jsx)(t.Z,{sx:{width:{xs:"425px",sm:"16px"},transform:"scale(0.79)",display:"flex",justifyContent:{xs:"center",sm:"end"},marginBottom:"-30px"},children:(0,u.jsx)(_.Z,{sitekey:n,onChange:function(){e(!0)}})})})},E=function(){var e=(0,s.useContext)(o.l),n=e.steps,r=e.currentStepIdx,a=e.step,c=e.formik,l=e.formikClause,x=(0,s.useRef)(null);(0,s.useEffect)((function(){x.current&&(x.current.scrollTop=0)}),[r]);var d=0===r?c.handleSubmit:l.handleSubmit;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("header",{children:(0,u.jsx)(i.Z,{sx:{height:"10vh",display:"flex",alignItems:"center"},children:(0,u.jsx)(b,{})})}),(0,u.jsx)("main",{children:(0,u.jsx)(i.Z,{sx:{height:"90vh",padding:"0px !important"},children:(0,u.jsxs)("form",{onSubmit:d,style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)(t.Z,{ref:x,sx:{paddingInline:1.6,overflowY:"scroll"},children:a}),1===r&&(0,u.jsx)(F,{}),2===r&&(0,u.jsx)(B,{}),r<n.length-1&&(0,u.jsx)(j,{})]})})})]})}}}]);
//# sourceMappingURL=619.b5379748.chunk.js.map