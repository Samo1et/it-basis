(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{OxY2:function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),i=t("17x9"),r=t.n(i),l=t("R/WZ"),c=t("wx14"),d=t("Ff2n"),s=t("iuhU"),p=t("H2TA"),m=t("kKAo"),b=n.forwardRef((function(e,a){var t=e.active,o=e.alternativeLabel,i=void 0!==o&&o,r=e.classes,l=e.className,p=e.completed,m=e.disabled,b=(e.index,e.orientation),u=void 0===b?"horizontal":b,v=Object(d.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return n.createElement("div",Object(c.a)({className:Object(s.a)(r.root,r[u],l,i&&r.alternativeLabel,t&&r.active,p&&r.completed,m&&r.disabled),ref:a},v),n.createElement("span",{className:Object(s.a)(r.line,{horizontal:r.lineHorizontal,vertical:r.lineVertical}[u])}))})),u=Object(p.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(b),v=n.createElement(u,null),h=n.forwardRef((function(e,a){var t=e.activeStep,o=void 0===t?0:t,i=e.alternativeLabel,r=void 0!==i&&i,l=e.children,p=e.classes,b=e.className,u=e.connector,h=void 0===u?v:u,g=e.nonLinear,f=void 0!==g&&g,x=e.orientation,y=void 0===x?"horizontal":x,E=Object(d.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),S=n.isValidElement(h)?n.cloneElement(h,{orientation:y}):null,w=n.Children.toArray(l),O=w.map((function(e,a){var t={index:a,active:!1,completed:!1,disabled:!1};return o===a?t.active=!0:!f&&o>a?t.completed=!0:!f&&o<a&&(t.disabled=!0),n.cloneElement(e,Object(c.a)({alternativeLabel:r,connector:S,last:a+1===w.length,orientation:y},t,e.props))}));return n.createElement(m.a,Object(c.a)({square:!0,elevation:0,className:Object(s.a)(p.root,p[y],b,r&&p.alternativeLabel),ref:a},E),O)})),g=Object(p.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(h),f=(t("TOwV"),n.forwardRef((function(e,a){var t=e.active,o=void 0!==t&&t,i=e.alternativeLabel,r=e.children,l=e.classes,p=e.className,m=e.completed,b=void 0!==m&&m,u=e.connector,v=e.disabled,h=void 0!==v&&v,g=e.expanded,f=void 0!==g&&g,x=e.index,y=e.last,E=e.orientation,S=Object(d.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),w=u?n.cloneElement(u,{orientation:E,alternativeLabel:i,index:x,active:o,completed:b,disabled:h}):null,O=n.createElement("div",Object(c.a)({className:Object(s.a)(l.root,l[E],p,i&&l.alternativeLabel,b&&l.completed),ref:a},S),w&&i&&0!==x?w:null,n.Children.map(r,(function(e){return n.isValidElement(e)?n.cloneElement(e,Object(c.a)({active:o,alternativeLabel:i,completed:b,disabled:h,expanded:f,last:y,icon:x+1,orientation:E},e.props)):null})));return w&&!i&&0!==x?n.createElement(n.Fragment,null,w,O):O}))),x=Object(p.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(f),y=t("ofer"),E=t("HR5l");function S(e,a){var t=function(a,t){return o.a.createElement(E.a,Object(c.a)({ref:t},a),e)};return t.muiName=E.a.muiName,o.a.memo(o.a.forwardRef(t))}var w=S(n.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"})),O=S(n.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),j=n.createElement("circle",{cx:"12",cy:"12",r:"12"}),C=n.forwardRef((function(e,a){var t=e.completed,o=void 0!==t&&t,i=e.icon,r=e.active,l=void 0!==r&&r,c=e.error,d=void 0!==c&&c,p=e.classes;if("number"==typeof i||"string"==typeof i){var m=Object(s.a)(p.root,l&&p.active,d&&p.error,o&&p.completed);return d?n.createElement(O,{className:m,ref:a}):o?n.createElement(w,{className:m,ref:a}):n.createElement(E.a,{className:m,ref:a},j,n.createElement("text",{className:p.text,x:"12",y:"16",textAnchor:"middle"},i))}return i})),z=Object(p.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(C),N=n.forwardRef((function(e,a){var t=e.active,o=void 0!==t&&t,i=e.alternativeLabel,r=void 0!==i&&i,l=e.children,p=e.classes,m=e.className,b=e.completed,u=void 0!==b&&b,v=e.disabled,h=void 0!==v&&v,g=e.error,f=void 0!==g&&g,x=(e.expanded,e.icon),E=(e.last,e.optional),S=e.orientation,w=void 0===S?"horizontal":S,O=e.StepIconComponent,j=e.StepIconProps,C=Object(d.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),N=O;return x&&!N&&(N=z),n.createElement("span",Object(c.a)({className:Object(s.a)(p.root,p[w],m,h&&p.disabled,r&&p.alternativeLabel,f&&p.error),ref:a},C),x||N?n.createElement("span",{className:Object(s.a)(p.iconContainer,r&&p.alternativeLabel)},n.createElement(N,Object(c.a)({completed:u,active:o,error:f,icon:x},j))):null,n.createElement("span",{className:p.labelContainer},l?n.createElement(y.a,{variant:"body2",component:"span",display:"block",className:Object(s.a)(p.label,r&&p.alternativeLabel,u&&p.completed,o&&p.active,f&&p.error)},l):null,E))}));N.muiName="StepLabel";var k=Object(p.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(N),L=t("ye/S"),R=t("VD++"),I=t("NqtD"),B=n.forwardRef((function(e,a){var t=e.children,o=e.classes,i=e.className,r=e.color,l=void 0===r?"default":r,p=e.component,m=void 0===p?"button":p,b=e.disabled,u=void 0!==b&&b,v=e.disableElevation,h=void 0!==v&&v,g=e.disableFocusRipple,f=void 0!==g&&g,x=e.endIcon,y=e.focusVisibleClassName,E=e.fullWidth,S=void 0!==E&&E,w=e.size,O=void 0===w?"medium":w,j=e.startIcon,C=e.type,z=void 0===C?"button":C,N=e.variant,k=void 0===N?"text":N,L=Object(d.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),B=j&&n.createElement("span",{className:Object(s.a)(o.startIcon,o["iconSize".concat(Object(I.a)(O))])},j),$=x&&n.createElement("span",{className:Object(s.a)(o.endIcon,o["iconSize".concat(Object(I.a)(O))])},x);return n.createElement(R.a,Object(c.a)({className:Object(s.a)(o.root,o[k],i,"inherit"===l?o.colorInherit:"default"!==l&&o["".concat(k).concat(Object(I.a)(l))],"medium"!==O&&[o["".concat(k,"Size").concat(Object(I.a)(O))],o["size".concat(Object(I.a)(O))]],h&&o.disableElevation,u&&o.disabled,S&&o.fullWidth),component:m,disabled:u,focusRipple:!f,focusVisibleClassName:Object(s.a)(o.focusVisible,y),ref:a,type:z},L),n.createElement("span",{className:o.label},B,t,$))})),$=Object(p.a)((function(e){return{root:Object(c.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(L.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(L.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(L.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(L.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(L.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(L.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(L.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(B),T=t("JB2W"),W=Object(l.a)((function(e){return{root:{width:"100%"},backButton:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function P(e){var a=e.steps,t=void 0===a?[]:a,n=e.stepContent,i=void 0===n?[]:n,r=e.nextPath,l=void 0===r?"":r,c=e.finalStep,d=W(),s=o.a.useState(0),p=s[0],m=s[1];return o.a.createElement("div",{className:d.root},o.a.createElement(g,{activeStep:p,alternativeLabel:!0},t.map((function(e){return o.a.createElement(x,{key:e},o.a.createElement(k,null,e))}))),o.a.createElement("div",null,p===t.length?o.a.createElement("div",null,o.a.createElement(y.a,{className:d.instructions},c),o.a.createElement($,{onClick:function(){m(0)}},"Повторить"),o.a.createElement(T.a,{to:l,asButton:!0},"Завершить")):o.a.createElement("div",null,o.a.createElement(y.a,{className:d.instructions},i[p]),o.a.createElement("div",null,o.a.createElement($,{disabled:0===p,onClick:function(){m((function(e){if(e>0)return e-1}))},className:d.backButton},"Назад"),o.a.createElement($,{variant:"contained",color:"primary",onClick:function(){m((function(e){return e+1}))}},"Дальше")))))}P.prototype={steps:r.a.array.isRequired,stepContent:r.a.array.isRequired,nextPath:r.a.string.isRequired};a.a=P},Zttt:function(e,a,t){"use strict";t.d(a,"a",(function(){return V}));var n=t("q1tI"),o=t.n(n),i=t("iuhU"),r=t("R/WZ"),l=t("5CWz"),c=t("IIOH"),d=t("bXiM"),s=t("lO0E"),p=t("eD//"),m=t("ofer"),b=t("wb2y"),u=t("PsDL"),v=t("Ji2X"),h=t("tRbT"),g=t("uniG"),f=t.n(g),x=t("76vg"),y=t.n(x),E=t("tVbE"),S=t("56Ss"),w=t("IsqK"),O=t("JB2W"),j=function(e){var a=e.activePath,t=e.pathname,n=e.title,i=e.icon,r=a===t;return o.a.createElement(O.a,{to:t},o.a.createElement(E.a,{button:!0,selected:r,ContainerComponent:"li"},o.a.createElement(S.a,{color:r?"primary":"default"},i),o.a.createElement(w.a,{primary:n,color:r?"primary":"default"})))},C=t("hAcw"),z=t("lj+r"),N=t("XgU2"),k=t("/NKW"),L=t("Suvw"),R=t("iNvf"),I=t("g0Og"),B=t("Qgt2"),$=t("M8JD"),T=Object(r.a)((function(e){var a;return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object.assign({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - 240px)",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:(a={overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},a[e.breakpoints.up("sm")]={width:e.spacing(9)},a),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),W={"/":"Цикл разработки в IT","/analysis":"Сбор и анализ требований","/management":"Распределяем задачи","/design":"Играемся со шрифтами","/develop":"Пишем код","/test":"Ищем баги","/devops":"Вынос приложения на бой","/marketing":"Настраиваем рекламу","/support":"Направляем пользователей на истиный путь"},P=[{pathname:"/",icon:o.a.createElement(C.a,null),title:"Главная"},{pathname:"/analysis",icon:o.a.createElement(z.a,null),title:"Аналитика"},{pathname:"/management",icon:o.a.createElement(N.a,null),title:"Менеджмент"},{pathname:"/design",icon:o.a.createElement(k.a,null),title:"Дизайн"},{pathname:"/develop",icon:o.a.createElement(L.a,null),title:"Программирование"},{pathname:"/test",icon:o.a.createElement(R.a,null),title:"Тестирвание"}];R.a,I.a,B.a,$.a;function V(e){var a=e.children,t=e.pathname,n=void 0===t?"":t,r=T(),g=o.a.useState(!0),x=g[0],E=g[1],S=n.replace("/it-basis","");return o.a.createElement("div",{className:r.root},o.a.createElement(l.a,null),o.a.createElement(d.a,{position:"absolute",className:Object(i.a)(r.appBar,x&&r.appBarShift)},o.a.createElement(s.a,{className:r.toolbar},o.a.createElement(u.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){E(!0)},className:Object(i.a)(r.menuButton,x&&r.menuButtonHidden)},o.a.createElement(f.a,null)),o.a.createElement(m.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:r.title},W[S]))),o.a.createElement(c.a,{variant:"permanent",classes:{paper:Object(i.a)(r.drawerPaper,!x&&r.drawerPaperClose)},open:x},o.a.createElement("div",{className:r.toolbarIcon},o.a.createElement(u.a,{onClick:function(){E(!1)}},o.a.createElement(y.a,null))),o.a.createElement(b.a,null),o.a.createElement(p.a,null,P.map((function(e){return o.a.createElement(j,Object.assign({key:e.pathname},e,{activePath:n}))}))),o.a.createElement(b.a,null)),o.a.createElement("main",{className:r.content},o.a.createElement("div",{className:r.appBarSpacer}),o.a.createElement(v.a,{maxWidth:"lg",className:r.container},o.a.createElement(h.a,{container:!0,spacing:3},a))))}}}]);
//# sourceMappingURL=e225f275cc4716991ae4952bdb2f66698a05165c-83d1fec51fa78ac35104.js.map