(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{766:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var c=n(3),r=n.n(c),a=n(7),o=n(87),s=n.n(o),i=n(69),l=function(e,t){return new(new s.a(e).eth.Contract)(i,t)},b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},776:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ee}));var c,r=n(18),a=n(0),o=n(31),s=n(30),i=n(8),l=n.n(i),b=n(68),j=n(16),d=n(330),u=n(343),x=n(124),m=n(76),p=n(148),O=n(35),h=n(26),f=n(32),k=n(19),y=n(13),v=n(2),g=n(200),A=n(1),S=v.e.div(c||(c=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),T=function(e){var t=e.onClick,n=e.expanded;return Object(A.jsxs)(S,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(A.jsx)(j.A,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(A.jsx)(j.k,{}):Object(A.jsx)(j.j,{})]})};T.defaultProps={expanded:!1};var C,w,I,q,P,E,D,L,B,Q,z,N,F,M,R,U=T,V=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"ETH":t[56],a=c[56];return"".concat(r,"/").concat(a)},H=v.e.div(C||(C=Object(y.a)(["\n  margin-top: 24px;\n"]))),W=Object(v.e)(j.r)(w||(w=Object(y.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),K=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormated,r=e.lpLabel,a=e.quoteTokenAdresses,o=e.quoteTokenSymbol,s=e.tokenAddresses,i=Object(f.a)(),l=V({quoteTokenAdresses:a,quoteTokenSymbol:o,tokenAddresses:s});return Object(A.jsxs)(H,{children:[Object(A.jsxs)(j.m,{justifyContent:"space-between",children:[Object(A.jsxs)(j.A,{children:[i(316,"Stake"),":"]}),Object(A.jsx)(W,{href:"https://exchange.pancakeswap.finance/#/add/".concat(l),children:r})]}),!n&&Object(A.jsxs)(j.m,{justifyContent:"space-between",children:[Object(A.jsxs)(j.A,{children:[i(23,"Total Liquidity"),":"]}),Object(A.jsx)(j.A,{children:c})]}),Object(A.jsx)(j.m,{justifyContent:"flex-start",children:Object(A.jsx)(j.q,{external:!0,href:t,bold:!1,children:i(356,"View on BscScan")})})]})},G=n(104),J=Object(v.e)(j.m)(I||(I=Object(y.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),X=Object(v.e)(j.z)(q||(q=Object(y.a)(["\n  margin-left: 4px;\n  background-color: #850085;\n  border: 1px solid #850085;\n"]))),$=function(e){var t=e.lpLabel,n=e.multiplier,c=e.isCommunityFarm,r=e.farmImage,a=e.tokenSymbol;return Object(A.jsxs)(J,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(A.jsx)(j.p,{src:"/images/farms/".concat(r,".svg"),alt:a,width:64,height:64}),Object(A.jsxs)(j.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(A.jsx)(j.n,{mb:"4px",children:t}),Object(A.jsxs)(j.m,{justifyContent:"center",children:[c?Object(A.jsx)(G.b,{}):Object(A.jsx)(G.c,{}),Object(A.jsx)(X,{variant:"secondary",children:n})]})]})]})},Y=n(3),Z=n.n(Y),_=n(7),ee=n(766),te=n(204),ne=n(344),ce=n(346),re=n(347),ae=n(52),oe=n(97),se=n(142),ie=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,o=void 0===r?"":r,s=Object(a.useState)(""),i=Object(k.a)(s,2),l=i[0],b=i[1],d=Object(a.useState)(!1),u=Object(k.a)(d,2),x=u[0],m=u[1],p=Object(f.a)(),O=Object(a.useMemo)((function(){return Object(ae.b)(t)}),[t]),h=Object(a.useCallback)((function(e){b(e.currentTarget.value)}),[b]),y=Object(a.useCallback)((function(){b(O)}),[O,b]);return Object(A.jsxs)(j.v,{title:"".concat(p(316,"Deposit")," ").concat(o," Tokens"),onDismiss:c,children:[Object(A.jsx)(se.a,{value:l,onSelectMax:y,onChange:h,max:O,symbol:o}),Object(A.jsxs)(oe.a,{children:[Object(A.jsx)(j.d,{variant:"secondary",onClick:c,children:p(462,"Cancel")}),Object(A.jsx)(j.d,{disabled:x,onClick:Object(_.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,n(l);case 3:m(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:x?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},le=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,o=void 0===r?"":r,s=Object(a.useState)(""),i=Object(k.a)(s,2),l=i[0],b=i[1],d=Object(a.useState)(!1),u=Object(k.a)(d,2),x=u[0],m=u[1],p=Object(f.a)(),O=Object(a.useMemo)((function(){return Object(ae.b)(c)}),[c]),h=Object(a.useCallback)((function(e){b(e.currentTarget.value)}),[b]),y=Object(a.useCallback)((function(){b(O)}),[O,b]);return Object(A.jsxs)(j.v,{title:"Withdraw ".concat(o),onDismiss:n,children:[Object(A.jsx)(se.a,{onSelectMax:y,onChange:h,value:l,max:O,symbol:o}),Object(A.jsxs)(oe.a,{children:[Object(A.jsx)(j.d,{variant:"secondary",onClick:n,children:p(462,"Cancel")}),Object(A.jsx)(j.d,{disabled:x,onClick:Object(_.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,t(l);case 3:m(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:x?p(488,"Pending Confirmation"):p(464,"Confirm")})]})]})},be=v.e.div(P||(P=Object(y.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),je=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=Object(f.a)(),o=Object(ce.a)(r).onStake,s=Object(re.a)(r).onUnstake,i=Object(ae.a)(t),l=i.toLocaleString(),b=Object(j.E)(Object(A.jsx)(ie,{max:n,onConfirm:o,tokenName:c})),d=Object(k.a)(b,1)[0],u=Object(j.E)(Object(A.jsx)(le,{max:t,onConfirm:s,tokenName:c})),x=Object(k.a)(u,1)[0];return Object(A.jsxs)(j.m,{justifyContent:"space-between",alignItems:"center",children:[Object(A.jsx)(j.n,{color:0===i?"textDisabled":"text",children:l}),0===i?Object(A.jsx)(j.d,{onClick:d,children:a(999,"Stake LP")}):Object(A.jsxs)(be,{children:[Object(A.jsx)(j.o,{variant:"tertiary",onClick:x,mr:"6px",children:Object(A.jsx)(j.u,{color:"primary"})}),Object(A.jsx)(j.o,{variant:"tertiary",onClick:d,children:Object(A.jsx)(j.a,{color:"primary"})})]})]})},de=n(205),ue=function(e){var t=e.earnings,n=e.pid,c=Object(f.a)(),r=Object(a.useState)(!1),o=Object(k.a)(r,2),s=o[0],i=o[1],l=Object(de.b)(n).onReward,b=Object(ae.a)(t),d=b.toLocaleString();return Object(A.jsxs)(j.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(A.jsx)(j.n,{color:0===b?"textDisabled":"text",children:d}),Object(A.jsx)(j.d,{disabled:0===b||s,onClick:Object(_.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,l();case 3:i(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})},xe=v.e.div(E||(E=Object(y.a)(["\n  padding-top: 16px;\n"]))),me=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(f.a)(),o=Object(a.useState)(!1),s=Object(k.a)(o,2),i=s[0],l=s[1],b=Object(m.a)(t.lpSymbol),d=b.pid,u=b.lpAddresses,x=Object(m.b)(d),p=x.allowance,O=x.tokenBalance,h=x.stakedBalance,y=x.earnings,v=u[56],g=t.lpSymbol.toUpperCase(),S=c&&p&&p.isGreaterThan(0),T=Object(a.useMemo)((function(){return Object(ee.a)(n,v)}),[n,v]),C=Object(ne.a)(T).onApprove,w=Object(a.useCallback)(Object(_.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,C();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[C]);return Object(A.jsxs)(xe,{children:[Object(A.jsxs)(j.m,{children:[Object(A.jsx)(j.A,{bold:!0,color:"secondary",fontSize:"12px",pr:"3px",children:"iCream"}),Object(A.jsx)(j.A,{bold:!0,color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(A.jsx)(ue,{earnings:y,pid:d}),Object(A.jsxs)(j.m,{children:[Object(A.jsx)(j.A,{bold:!0,color:"secondary",fontSize:"12px",pr:"3px",children:g}),Object(A.jsx)(j.A,{bold:!0,color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?S?Object(A.jsx)(je,{stakedBalance:h,tokenBalance:O,tokenName:g,pid:d}):Object(A.jsx)(j.d,{mt:"8px",fullWidth:!0,disabled:i,onClick:w,children:r(999,"Approve Contract")}):Object(A.jsx)(te.a,{mt:"8px",fullWidth:!0})]})},pe=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,o=a*Math.pow(1+c/365,365*r);return t=o-a,Math.round(100*t)/100},Oe=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},he=v.e.div(D||(D=Object(y.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),fe=v.e.div(L||(L=Object(y.a)(["\n  margin-bottom: '10px';\n"]))),ke=Object(v.e)(j.A)(B||(B=Object(y.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),ye=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,s=e.apy,i=Object(f.a)(),b=V({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),d=s.times(new l.a(100)).toNumber(),u=1e3/o.toNumber(),x=pe({numberOfDays:1,farmApy:d,cakePrice:o}),m=pe({numberOfDays:7,farmApy:d,cakePrice:o}),p=pe({numberOfDays:30,farmApy:d,cakePrice:o}),O=pe({numberOfDays:365,farmApy:d,cakePrice:o});return Object(A.jsxs)(j.v,{title:"ROI",onDismiss:t,children:[Object(A.jsxs)(he,{children:[Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"iCream per $1000")})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{children:"1d"})}),Object(A.jsx)(fe,{children:Object(A.jsxs)(j.A,{children:[Oe({amountEarned:x,amountInvested:u}),"%"]})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{children:x})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{children:"7d"})}),Object(A.jsx)(fe,{children:Object(A.jsxs)(j.A,{children:[Oe({amountEarned:m,amountInvested:u}),"%"]})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{children:m})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{children:"30d"})}),Object(A.jsx)(fe,{children:Object(A.jsxs)(j.A,{children:[Oe({amountEarned:p,amountInvested:u}),"%"]})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{children:p})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{children:"365d(APY)"})}),Object(A.jsx)(fe,{children:Object(A.jsxs)(j.A,{children:[Oe({amountEarned:O,amountInvested:u}),"%"]})}),Object(A.jsx)(fe,{children:Object(A.jsx)(j.A,{children:O})})]}),Object(A.jsx)(ke,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(A.jsx)(j.m,{justifyContent:"center",children:Object(A.jsxs)(j.r,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[i(999,"Get")," ",n]})})]})},ve=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,a=e.cakePrice,o=e.apy,s=Object(j.E)(Object(A.jsx)(ye,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,cakePrice:a,apy:o})),i=Object(k.a)(s,1)[0];return Object(A.jsx)(j.o,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(A.jsx)(j.g,{})})},ge=Object(v.f)(Q||(Q=Object(y.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),Ae=v.e.div(z||(z=Object(y.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),ge),Se=v.e.div(N||(N=Object(y.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),Te=v.e.div(F||(F=Object(y.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Ce=v.e.div(M||(M=Object(y.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),we=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,o=e.ethereum,s=e.account,i=Object(f.a)(),b=Object(a.useState)(!1),d=Object(k.a)(b,2),u=d[0],x=d[1],m=g.a.includes(t.tokenSymbol),p=t.lpSymbol.split(" ")[0].toLocaleLowerCase(),O=Object(a.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===h.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===h.b.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),y=O?"$".concat(Number(O).toLocaleString(void 0,{maximumFractionDigits:0})):"-",v=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("IceCream",""),S=t.dual?t.dual.earnLabel:"iCream",T=t.apy&&t.apy.times(new l.a(100)).toNumber().toLocaleString("en-US").slice(0,-1),C=t.quoteTokenAdresses,w=t.quoteTokenSymbol,I=t.tokenAddresses;return Object(A.jsxs)(Se,{children:["CAKE"===t.tokenSymbol&&Object(A.jsx)(Ae,{}),Object(A.jsx)($,{lpLabel:v,multiplier:t.multiplier,isCommunityFarm:m,farmImage:p,tokenSymbol:t.tokenSymbol}),!n&&Object(A.jsxs)(j.m,{justifyContent:"space-between",alignItems:"center",children:[Object(A.jsxs)(j.A,{children:[i(352,"APR"),":"]}),Object(A.jsx)(j.A,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(ve,{lpLabel:v,quoteTokenAdresses:C,quoteTokenSymbol:w,tokenAddresses:I,cakePrice:c,apy:t.apy}),T,"%"]}):Object(A.jsx)(j.y,{height:24,width:80})})]}),Object(A.jsxs)(j.m,{justifyContent:"space-between",children:[Object(A.jsxs)(j.A,{children:[i(318,"Earn"),":"]}),Object(A.jsx)(j.A,{bold:!0,children:S})]}),Object(A.jsx)(me,{farm:t,ethereum:o,account:s}),Object(A.jsx)(Te,{}),Object(A.jsx)(U,{onClick:function(){return x(!u)},expanded:u}),Object(A.jsx)(Ce,{expanded:u,children:Object(A.jsx)(K,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),totalValueFormated:y,lpLabel:v,quoteTokenAdresses:C,quoteTokenSymbol:w,tokenAddresses:I})})]})},Ie=n(53),qe=function(){var e=Object(o.h)(),t=e.url,n=e.isExact,c=Object(f.a)();return Object(A.jsx)(Pe,{children:Object(A.jsxs)(j.e,{activeIndex:n?0:1,size:"sm",variant:"subtle",children:[Object(A.jsx)(j.f,{as:Ie.b,to:"".concat(t),children:c(999,"Active")}),Object(A.jsx)(j.f,{as:Ie.b,to:"".concat(t,"/history"),children:c(999,"Inactive")})]})})},Pe=v.e.div(R||(R=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Ee=function(){var e=Object(o.h)().path,t=Object(f.a)(),n=Object(m.c)(),c=Object(m.g)(),i=Object(m.f)(),k=Object(b.j)(),y=k.account,v=k.ethereum,g=Object(s.b)(),S=Object(p.a)().fastRefresh;Object(a.useEffect)((function(){y&&g(Object(O.a)(y))}),[y,g,S]);var T=n.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})),C=n.filter((function(e){return 0!==e.pid&&"0X"===e.multiplier})),w=Object(a.useCallback)((function(e,t){var a,o=new l.a((null===(a=n.find((function(e){return e.pid===d.c})))||void 0===a?void 0:a.tokenPriceVsQuote)||0);return e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=d.b.times(e.poolWeight),n=t.times(d.a),c=o.times(n).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===h.b.BUSD||e.quoteTokenSymbol===h.b.UST)c=o.times(n).div(e.lpTotalInQuoteToken).times(i);else if(e.quoteTokenSymbol===h.b.CAKE)c=n.div(e.lpTotalInQuoteToken);else if(e.dual){var a=e&&o.times(t).times(d.a).div(e.lpTotalInQuoteToken),s=e.tokenPriceVsQuote&&new l.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(d.a).div(e.lpTotalInQuoteToken);c=a&&s&&a.plus(s)}return Object(r.a)(Object(r.a)({},e),{},{apy:c})})).map((function(e){return Object(A.jsx)(we,{farm:e,removed:t,bnbPrice:i,cakePrice:c,ethereum:v,account:y},e.pid)}))}),[i,n,y,c,v]);return Object(A.jsxs)(x.a,{children:[Object(A.jsx)(j.n,{as:"h1",size:"lg",color:"primary",mb:"20px",style:{textAlign:"center"},children:t(999,"Stake ICLP tokens to earn iCream")}),Object(A.jsx)(j.A,{style:{textAlign:"center"},mb:"20px",color:"#452b7a",children:t(9991,"\ud83d\udd25 FEES HARVEST: 7.5% TO BE BURNED \ud83d\udd25")}),Object(A.jsx)(j.A,{mt:"16px",color:"#452b7a",mb:"50px",style:{textAlign:"center"},children:t(9991,"\ud83c\udf89 \ud83c\udf66 IceCream Party for 72hours! 4 reward per block instead of 1.25 for the next 72 hours! \u23f3")}),Object(A.jsx)("div",{children:Object(A.jsxs)(u.a,{children:[Object(A.jsx)(o.b,{exact:!0,path:"".concat(e),children:w(T,!1)}),Object(A.jsx)(o.b,{exact:!0,path:"".concat(e,"/history"),children:w(C,!0)})]})}),Object(A.jsx)(qe,{})]})}}}]);
//# sourceMappingURL=7.6ba76545.chunk.js.map