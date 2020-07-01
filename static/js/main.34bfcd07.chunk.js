(this["webpackJsonpshopping-tracking-list"]=this["webpackJsonpshopping-tracking-list"]||[]).push([[0],{108:function(e,t,a){e.exports=a(123)},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(12),l=a(66),u=a.n(l),s=a(78),m=a(29),E=a(79),f=a.n(E),p=a(69),g=a(80),d=a.n(g),b=a(14),v={preferredCurrency:"USD"},O={rates:{ILS:1,USD:1}},h=a(24),j=function(e,t){return{type:"SET_ITEM_RECIEVED_STATUS",itemId:e,recieved:t}},y={items:[]},S={alerts:[]},C=Object(m.c)({userSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_PREFERRED_CURRENCY":var a=t;return Object(b.a)(Object(b.a)({},e),{},{preferredCurrency:a.currency});default:return e}},currencyRates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENCY_RATES":var a=t,n=a.rates;return Object(b.a)(Object(b.a)({},e),{},{rates:n});default:return e}},itemsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_ITEM":var a=t,n=a.item;return Object(b.a)(Object(b.a)({},e),{},{items:[].concat(Object(h.a)(e.items),[n])});case"SET_ITEM_RECIEVED_STATUS":var r=t,c=r.recieved,i=r.itemId;return Object(b.a)(Object(b.a)({},e),{},{items:e.items.map((function(e){return e.id===i?Object(b.a)(Object(b.a)({},e),{},{recieved:c}):e}))});default:return e}},alertsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ALERT":var a=t,n=a.alert;return Object(b.a)(Object(b.a)({},e),{},{alerts:[].concat(Object(h.a)(e.alerts),[n])});case"REMOVE_ALERT":var r=t,c=r.alertId;return Object(b.a)(Object(b.a)({},e),{},{alerts:e.alerts.filter((function(e){return e.id!==c}))});default:return e}}}),T={key:"root",storage:d.a},I=Object(p.a)(T,C),_=Object(m.d)(I,Object(m.a)(f.a)),w=(Object(p.b)(_),function(){return _.getState().alertsState.alerts.some((function(e){return"ALERT_FAILED_TO_FETCH_EXCHANGE_RATES"===e.id}))}),D=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_.dispatch,e.prev=1,"https://api.exchangeratesapi.io/latest",e.next=5,fetch("https://api.exchangeratesapi.io/latest");case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,w()&&t({type:"REMOVE_ALERT",alertId:"ALERT_FAILED_TO_FETCH_EXCHANGE_RATES"}),t({type:"UPDATE_CURRENCY_RATES",rates:n.rates}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),w()||t({type:"ADD_ALERT",alert:{id:"ALERT_FAILED_TO_FETCH_EXCHANGE_RATES",message:"An error occured while trying to fetch exchange rates, Please check your connectivity(Prices might not be up to date)",severity:"warning"}});case 16:r=1e3*Number("10"),setTimeout(D,r);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),R=a(57),N=a(38),A=a(163),k=a(198),L=a(195),x=a(168),F=Object(A.a)((function(e){return Object(k.a)({root:{position:"absolute",bottom:e.spacing(2),left:e.spacing(2)}})})),U=function(){var e=Object(o.c)((function(e){return e.alertsState})).alerts,t=F();return r.a.createElement("div",{className:t.root},e.map((function(e){return r.a.createElement(L.a,{severity:e.severity},r.a.createElement(x.a,null,"Warning"),e.message)})))},B=a(15),M=a(177),P=a(178),H=a(173),Y=a(167),W=a(52),V=a(88),G=a.n(V),X=a(199),J=a(172),z=a(86),$=a.n(z),q=a(85),K=a.n(q),Q=a(124),Z=a(169),ee=a(170),te=function(e){var t=e.icon,a=e.route,n=e.title,c=e.onClick,i=Object(N.g)(),o=Object(N.f)(),l=a===i.pathname;return r.a.createElement(Q.a,{button:!0,selected:l,onClick:function(){o.push(a),c()}},r.a.createElement(Z.a,null,t),r.a.createElement(ee.a,{primary:n}))},ae=Object(A.a)((function(e){return Object(k.a)({list:{width:e.spacing(32)}})})),ne=function(e){var t=e.open,a=e.onClose,n=ae();return r.a.createElement(X.a,{anchor:"left",open:t,onClose:a},r.a.createElement(J.a,{className:n.list},r.a.createElement(te,{icon:r.a.createElement(K.a,null),title:"Bought",route:"/bought",onClick:a}),r.a.createElement(te,{icon:r.a.createElement($.a,null),title:"Recieved",route:"/recieved",onClick:a})))},re=a(192),ce=a(176),ie=["USD","ILS"];Object.freeze(ie);var oe=Object(A.a)((function(e){return Object(k.a)({select:{marginLeft:e.spacing(1)},label:{marginTop:"auto",marginBottom:"auto",color:"greenyellow"},selectIcon:{color:"white"},selectText:{color:"white"}})})),le=function(e){var t=e.className,a=Object(o.c)((function(e){return e.userSettings})),n=oe(),c=Object(o.b)();return r.a.createElement(H.a,{className:t,container:!0,direction:"row"},r.a.createElement(H.a,{item:!0,className:n.label},r.a.createElement(W.a,null,"Select Preferable Currency")),r.a.createElement(H.a,{item:!0,className:n.select},r.a.createElement(re.a,{value:a.preferredCurrency,classes:{icon:n.selectIcon,select:n.selectText},disableUnderline:!0,onChange:function(e){return c({type:"SET_USER_PREFERRED_CURRENCY",currency:e.target.value})}},ie.map((function(e){return r.a.createElement(ce.a,{key:e,value:e},e)})))))},ue=Object(A.a)((function(e){return Object(k.a)({toolbarItem:{marginTop:"auto",marginBottom:"auto"},icon:{marginTop:"auto",marginBottom:"auto",color:"white"},offset:e.mixins.toolbar})})),se=function(){var e=ue(),t=Object(n.useState)(!1),a=Object(B.a)(t,2),c=a[0],i=a[1],o=Object(N.g)();return r.a.createElement(n.Fragment,null,r.a.createElement(M.a,{position:"fixed"},r.a.createElement(P.a,null,r.a.createElement(H.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(Y.a,{edge:"start",className:e.icon,onClick:function(){return i(!0)}},r.a.createElement(G.a,null)),r.a.createElement(W.a,{className:e.toolbarItem,variant:"h5"},function(e){switch(e){case"/recieved":return"Recieved";case"/bought":case"/":default:return"Bought"}}(o.pathname)),r.a.createElement(H.a,{item:!0,className:e.toolbarItem},r.a.createElement(le,null))))),r.a.createElement("div",{className:e.offset}),r.a.createElement(ne,{open:c,onClose:function(){return i(!1)}}))},me=a(193),Ee=a(185),fe=a(71),pe=a(186),ge=a(183),de=a(179),be=a(180),ve=a(181),Oe=a(182),he=a(91),je=a.n(he),ye=function(e){switch(e){case"USD":return"$";case"ILS":return"\u20aa"}},Se=a(89),Ce=a.n(Se),Te=r.a.memo((function(e){var t=e.dateISO,a=e.toColor,n=new Date(t);n.setHours(0,0,0,0);var c=n.getTime(),i=new Date;i.setHours(0,0,0,0);var o,l=i.getTime();a&&(o=c<l?"red":c===l?"orange":"green");var u=Ce()(n).format("DD-MM-YYYY");return r.a.createElement(W.a,{style:{color:o}},u)})),Ie=a(90),_e=a.n(Ie),we=function(){var e=Object(o.c)((function(e){return e.currencyRates})).rates,t=Object(o.c)((function(e){return e.userSettings})).preferredCurrency;return function(a,n,r){var c=null!==r&&void 0!==r?r:t;return a/e[n]*e[c]}},De=Object(A.a)((function(e){return Object(k.a)({root:{minWidth:e.spacing(40),margin:e.spacing(2)},date:{marginTop:e.spacing(.5)},storeLabel:{marginTop:"auto",marginBottom:"auto",marginLeft:e.spacing(1)},deliveredIcon:{marginLeft:e.spacing(1)}})})),Re=function(e){var t=e.item,a=De(),n=Object(o.c)((function(e){return e.userSettings})).preferredCurrency,c=Object(o.b)(),i=we(),l=t.id,u=t.recieved,s=t.name,m=t.store,E=t.price,f=t.priceCurrency,p=t.deliveryDateISO,g=i(E,f);return r.a.createElement(de.a,{className:a.root,elevation:4},r.a.createElement(be.a,null,r.a.createElement(H.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(H.a,{item:!0},r.a.createElement(W.a,{variant:"subtitle1"},s),r.a.createElement(W.a,{variant:"subtitle2"},g.toFixed(2),ye(n))),r.a.createElement(H.a,{item:!0,className:a.date},r.a.createElement(Te,{dateISO:p,toColor:!u})))),r.a.createElement(ve.a,null,r.a.createElement(H.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(H.a,{item:!0,className:a.storeLabel},r.a.createElement(W.a,{variant:"subtitle2"},"From ",m)),r.a.createElement(H.a,{item:!0},u?r.a.createElement(Oe.a,{variant:"outlined",onClick:function(){return c(j(l,!1))}},"Still waiting",r.a.createElement(_e.a,{className:a.deliveredIcon})):r.a.createElement(Oe.a,{variant:"outlined",onClick:function(){return c(j(l,!0))}},"Recieved",r.a.createElement(je.a,{className:a.deliveredIcon}))))))},Ne=function(e){var t=e.items;return r.a.createElement(ge.a,null,t.map((function(e){return r.a.createElement(Re,{key:e.id,item:e})})))},Ae=function(e){var t={};return e.forEach((function(e){t[e.store]||(t[e.store]=[]),t[e.store].push(e)})),t},ke=a(184),Le=Object(A.a)((function(e){return Object(k.a)({root:{minWidth:e.spacing(40),maxWidth:e.spacing(80),margin:e.spacing(2)},content:{paddingBottom:e.spacing(1)}})})),xe=function(e){var t=e.items,a=e.store,c=Le(),i=we(),l=Object(o.c)((function(e){return e.userSettings})).preferredCurrency,u=t.reduce((function(e,t){return e+i(t.price,t.priceCurrency)}),0),s=ye(l);return r.a.createElement(de.a,{className:c.root,elevation:4},r.a.createElement(be.a,{classes:{root:c.content}},r.a.createElement(W.a,{gutterBottom:!0,variant:"h6"},a),t.map((function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement(H.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(H.a,{item:!0},r.a.createElement(W.a,{variant:"subtitle2"},e.name)),r.a.createElement(H.a,{item:!0},r.a.createElement(W.a,{variant:"caption"},i(e.price,e.priceCurrency).toFixed(2),s))))}))),r.a.createElement(ke.a,null),r.a.createElement(ve.a,null,r.a.createElement(H.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(H.a,{item:!0},r.a.createElement(W.a,null,"Total of ",t.length," items")),r.a.createElement(H.a,{item:!0},r.a.createElement(W.a,null,"Total price: ",u.toFixed(2),s)))))},Fe=function(e){var t=function(e){return Object(n.useMemo)((function(){return Ae(e)}),[e])}(e.items);return r.a.createElement(n.Fragment,null,Object.keys(t).map((function(e){return r.a.createElement(xe,{key:e,store:e,items:t[e]})})))},Ue=Object(A.a)((function(e){return{root:{width:"100%"}}})),Be=function(e){var t=e.items,a=Object(n.useState)("list"),c=Object(B.a)(a,2),i=c[0],o=c[1],l=Ue(),u=t.sort((function(e,t){return new Date(e.deliveryDateISO).getTime()-new Date(t.deliveryDateISO).getTime()}));return r.a.createElement("div",{className:l.root},r.a.createElement(fe.a,{value:i},r.a.createElement(M.a,{position:"static"},r.a.createElement(me.a,{variant:"fullWidth",value:i,onChange:function(e,t){return o(t)}},r.a.createElement(Ee.a,{label:"List",value:"list"}),r.a.createElement(Ee.a,{label:"Stores Aggregations",value:"stores-aggregations"}))),r.a.createElement(pe.a,{value:"list"},r.a.createElement(Ne,{items:u})),r.a.createElement(pe.a,{value:"stores-aggregations"},r.a.createElement(Fe,{items:u}))))},Me=a(191),Pe=a(94),He=a.n(Pe),Ye=a(187),We=a(188),Ve=a(189),Ge=a(190),Xe=a(93),Je=a.n(Xe),ze=a(196),$e=a(201),qe=a(194),Ke=Object($e.a)(),Qe=function(e){var t=e.value,a=e.onChange,c=e.classes,i=Object(o.c)((function(e){return e.itemsState})).items,l=Object(n.useMemo)((function(){var e=Ae(i);return Object.keys(e)}),[i]);return r.a.createElement(qe.a,{value:t,onChange:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){a(t)})),options:l,selectOnFocus:!0,clearOnBlur:!0,filterOptions:function(e,t){var a=Ke(e,t);return a.length?a:!l.length&&!t.inputValue?["Start typing to add a new store"]:[t.inputValue]},renderInput:function(e){return r.a.createElement(ze.a,Object.assign({},e,{classes:c,label:"Select Store",variant:"outlined"}))},freeSolo:!0})},Ze=Object(A.a)((function(e){return Object(k.a)({field:{marginTop:e.spacing(2)},currencySelector:{marginLeft:e.spacing(1)}})})),et=function(e){var t=e.onChange,a=e.storeItem,n=Ze();return r.a.createElement(H.a,{container:!0,direction:"column"},r.a.createElement(ze.a,{label:"Name",variant:"outlined",value:a.name,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({name:e.target.value})}))}),r.a.createElement(Qe,{value:a.store,classes:{root:n.field},onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({store:null!==e&&void 0!==e?e:""})}))}),r.a.createElement(H.a,{container:!0,className:n.field,item:!0,direction:"row"},r.a.createElement(ze.a,{classes:{},label:"Price",variant:"outlined",type:"number",value:a.price,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({price:Number(e.target.value)})}))}),r.a.createElement(re.a,{className:n.currencySelector,value:a.priceCurrency,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({priceCurrency:e.target.value})}))},ie.map((function(e){return r.a.createElement(ce.a,{value:e,key:e},e)})))),r.a.createElement(ze.a,{classes:{root:n.field},label:"Estimated Delivery Date",type:"date",variant:"outlined",InputLabelProps:{shrink:!0},onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({deliveryDateISO:new Date(e.target.value).toISOString()})}))}))},tt=a(197),at=Object(A.a)((function(e){return Object(k.a)({closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})})),nt=function(e){var t=e.open,a=e.onClose,c=Object(o.c)((function(e){return e.userSettings})),i=Object(n.useState)({priceCurrency:c.preferredCurrency}),l=Object(B.a)(i,2),u=l[0],s=l[1],m=at(),E=Object(o.b)(),f=u.name&&u.deliveryDateISO&&u.price&&u.priceCurrency&&u.store;return r.a.createElement(Ye.a,{open:t,disableBackdropClick:!0,onClose:a},r.a.createElement(We.a,{disableTypography:!0},r.a.createElement(W.a,{variant:"h6"},"New Item"),r.a.createElement(Y.a,{className:m.closeButton,onClick:a},r.a.createElement(Je.a,null))),r.a.createElement(Ve.a,{dividers:!0},r.a.createElement(et,{onChange:function(e){return s(Object(b.a)(Object(b.a)({},u),e))},storeItem:u})),r.a.createElement(Ge.a,null,r.a.createElement(Oe.a,{onClick:a},"Cancel"),r.a.createElement(Oe.a,{disabled:!f,onClick:function(){if(u.name&&u.deliveryDateISO&&u.price&&u.priceCurrency&&u.store){var e={name:u.name,store:u.store,price:u.price,priceCurrency:u.priceCurrency,deliveryDateISO:u.deliveryDateISO,recieved:!1,id:Object(tt.a)()};E({type:"ADD_NEW_ITEM",item:e}),a()}}},"Add")))},rt=Object(A.a)((function(e){return Object(k.a)({fab:{position:"absolute",bottom:e.spacing(4),right:e.spacing(4)},fabIcon:{marginRight:e.spacing(1)}})})),ct=function(e){var t=Object(n.useState)(!1),a=Object(B.a)(t,2),c=a[0],i=a[1],o=rt();return r.a.createElement(n.Fragment,null,r.a.createElement(Me.a,{color:"primary",variant:"extended",className:o.fab,onClick:function(){return i(!0)}},r.a.createElement(He.a,{className:o.fabIcon}),"Add Item"),c&&r.a.createElement(nt,{open:c,onClose:function(){return i(!1)}}))},it=function(){var e=Object(o.c)((function(e){return e.itemsState})).items.filter((function(e){return!e.recieved}));return r.a.createElement(H.a,{container:!0},r.a.createElement(Be,{items:e}),r.a.createElement(ct,null))},ot=function(){var e=Object(o.c)((function(e){return e.itemsState})).items.filter((function(e){return e.recieved}));return r.a.createElement(Be,{items:e})};var lt=function(){return r.a.createElement(R.a,null,r.a.createElement(se,null),r.a.createElement(U,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/recieved"},r.a.createElement(ot,null)),r.a.createElement(N.a,{path:["/","/bought"]},r.a.createElement(it,null))))};D(),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:_},r.a.createElement(lt,null))),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.34bfcd07.chunk.js.map