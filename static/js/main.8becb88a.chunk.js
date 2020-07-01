(this["webpackJsonpshopping-tracking-list"]=this["webpackJsonpshopping-tracking-list"]||[]).push([[0],{108:function(e,t,a){e.exports=a(123)},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(12),l=a(66),u=a.n(l),s=a(78),m=a(29),E=a(79),f=a.n(E),p=a(69),g=a(80),d=a.n(g),b=a(14),v={preferredCurrency:"USD"},O={rates:{ILS:1,USD:1}},h=a(24),j=function(e,t){return{type:"SET_ITEM_RECIEVED_STATUS",itemId:e,recieved:t}},y={items:[]},S={alerts:[]},C=Object(m.c)({userSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_PREFERRED_CURRENCY":var a=t;return Object(b.a)(Object(b.a)({},e),{},{preferredCurrency:a.currency});default:return e}},currencyRates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENCY_RATES":var a=t,n=a.rates;return Object(b.a)(Object(b.a)({},e),{},{rates:n});default:return e}},itemsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEW_ITEM":var a=t,n=a.item;return Object(b.a)(Object(b.a)({},e),{},{items:[].concat(Object(h.a)(e.items),[n])});case"SET_ITEM_RECIEVED_STATUS":var r=t,c=r.recieved,i=r.itemId;return Object(b.a)(Object(b.a)({},e),{},{items:e.items.map((function(e){return e.id===i?Object(b.a)(Object(b.a)({},e),{},{recieved:c}):e}))});default:return e}},alertsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ALERT":var a=t,n=a.alert;return Object(b.a)(Object(b.a)({},e),{},{alerts:[].concat(Object(h.a)(e.alerts),[n])});case"REMOVE_ALERT":var r=t,c=r.alertId;return Object(b.a)(Object(b.a)({},e),{},{alerts:e.alerts.filter((function(e){return e.id!==c}))});default:return e}}}),T={key:"root",storage:d.a},I=Object(p.a)(T,C),_=Object(m.d)(I,Object(m.a)(f.a)),D=(Object(p.b)(_),function(){return _.getState().alertsState.alerts.some((function(e){return"ALERT_FAILED_TO_FETCH_EXCHANGE_RATES"===e.id}))}),R=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_.dispatch,e.prev=1,"https://api.exchangeratesapi.io/latest",e.next=5,fetch("https://api.exchangeratesapi.io/latest");case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,D()&&t({type:"REMOVE_ALERT",alertId:"ALERT_FAILED_TO_FETCH_EXCHANGE_RATES"}),t({type:"UPDATE_CURRENCY_RATES",rates:n.rates}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),D()||t({type:"ADD_ALERT",alert:{id:"ALERT_FAILED_TO_FETCH_EXCHANGE_RATES",message:"An error occured while trying to fetch exchange rates, Please check your connectivity(Prices might not be up to date)",severity:"warning"}});case 16:r=1e3*Number("10"),setTimeout(R,r);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),w=a(57),N=a(38),A=a(15),k=a(168),L=a(198),x=a(175),F=a(176),U=a(171),B=a(177),M=a(52),P=a(88),H=a.n(P),Y=a(199),W=a(170),V=a(86),G=a.n(V),X=a(85),J=a.n(X),z=a(124),$=a(166),q=a(167),K=function(e){var t=e.icon,a=e.route,n=e.title,c=e.onClick,i=Object(N.g)(),o=Object(N.f)(),l=a===i.pathname;return r.a.createElement(z.a,{button:!0,selected:l,onClick:function(){o.push(a),c()}},r.a.createElement($.a,null,t),r.a.createElement(q.a,{primary:n}))},Q=Object(k.a)((function(e){return Object(L.a)({list:{width:e.spacing(32)}})})),Z=function(e){var t=e.open,a=e.onClose,n=Q();return r.a.createElement(Y.a,{anchor:"left",open:t,onClose:a},r.a.createElement(W.a,{className:n.list},r.a.createElement(K,{icon:r.a.createElement(J.a,null),title:"Bought",route:"/bought",onClick:a}),r.a.createElement(K,{icon:r.a.createElement(G.a,null),title:"Recieved",route:"/recieved",onClick:a})))},ee=a(192),te=a(174),ae=["USD","ILS"];Object.freeze(ae);var ne=Object(k.a)((function(e){return Object(L.a)({select:{marginLeft:e.spacing(1)},label:{marginTop:"auto",marginBottom:"auto",color:"greenyellow"},selectIcon:{color:"white"},selectText:{color:"white"}})})),re=function(e){var t=e.className,a=Object(o.c)((function(e){return e.userSettings})),n=ne(),c=Object(o.b)();return r.a.createElement(U.a,{className:t,container:!0,direction:"row"},r.a.createElement(U.a,{item:!0,className:n.label},r.a.createElement(M.a,null,"Select Preferable Currency")),r.a.createElement(U.a,{item:!0,className:n.select},r.a.createElement(ee.a,{value:a.preferredCurrency,classes:{icon:n.selectIcon,select:n.selectText},disableUnderline:!0,onChange:function(e){return c({type:"SET_USER_PREFERRED_CURRENCY",currency:e.target.value})}},ae.map((function(e){return r.a.createElement(te.a,{key:e,value:e},e)})))))},ce=Object(k.a)((function(e){return Object(L.a)({toolbarItem:{marginTop:"auto",marginBottom:"auto"},icon:{marginTop:"auto",marginBottom:"auto",color:"white"},offset:e.mixins.toolbar})})),ie=function(){var e=ce(),t=Object(n.useState)(!1),a=Object(A.a)(t,2),c=a[0],i=a[1],o=Object(N.g)();return r.a.createElement(n.Fragment,null,r.a.createElement(x.a,{position:"fixed"},r.a.createElement(F.a,null,r.a.createElement(U.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(B.a,{edge:"start",className:e.icon,onClick:function(){return i(!0)}},r.a.createElement(H.a,null)),r.a.createElement(M.a,{className:e.toolbarItem,variant:"h5"},function(e){switch(e){case"/recieved":return"Recieved";case"/bought":case"/":default:return"Bought"}}(o.pathname)),r.a.createElement(U.a,{item:!0,className:e.toolbarItem},r.a.createElement(re,null))))),r.a.createElement("div",{className:e.offset}),r.a.createElement(Z,{open:c,onClose:function(){return i(!1)}}))},oe=a(193),le=a(184),ue=a(71),se=a(185),me=a(182),Ee=a(178),fe=a(179),pe=a(180),ge=a(181),de=a(91),be=a.n(de),ve=function(e){switch(e){case"USD":return"$";case"ILS":return"\u20aa"}},Oe=a(89),he=a.n(Oe),je=r.a.memo((function(e){var t=e.dateISO,a=e.toColor,n=new Date(t);n.setHours(0,0,0,0);var c=n.getTime(),i=new Date;i.setHours(0,0,0,0);var o,l=i.getTime();a&&(o=c<l?"red":c===l?"orange":"green");var u=he()(n).format("DD-MM-YYYY");return r.a.createElement(M.a,{style:{color:o}},u)})),ye=a(90),Se=a.n(ye),Ce=function(){var e=Object(o.c)((function(e){return e.currencyRates})).rates,t=Object(o.c)((function(e){return e.userSettings})).preferredCurrency;return function(a,n,r){var c=null!==r&&void 0!==r?r:t;return a/e[n]*e[c]}},Te=Object(k.a)((function(e){return Object(L.a)({root:{minWidth:e.spacing(40),margin:e.spacing(2)},date:{marginTop:e.spacing(.5)},storeLabel:{marginTop:"auto",marginBottom:"auto",marginLeft:e.spacing(1)},deliveredIcon:{marginLeft:e.spacing(1)}})})),Ie=function(e){var t=e.item,a=Te(),n=Object(o.c)((function(e){return e.userSettings})).preferredCurrency,c=Object(o.b)(),i=Ce(),l=t.id,u=t.recieved,s=t.name,m=t.store,E=t.price,f=t.priceCurrency,p=t.deliveryDateISO,g=i(E,f);return r.a.createElement(Ee.a,{className:a.root,elevation:4},r.a.createElement(fe.a,null,r.a.createElement(U.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(U.a,{item:!0},r.a.createElement(M.a,{variant:"subtitle1"},s),r.a.createElement(M.a,{variant:"subtitle2"},g.toFixed(2),ve(n))),r.a.createElement(U.a,{item:!0,className:a.date},r.a.createElement(je,{dateISO:p,toColor:!u})))),r.a.createElement(pe.a,null,r.a.createElement(U.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(U.a,{item:!0,className:a.storeLabel},r.a.createElement(M.a,{variant:"subtitle2"},"From ",m)),r.a.createElement(U.a,{item:!0},u?r.a.createElement(ge.a,{variant:"outlined",onClick:function(){return c(j(l,!1))}},"Still waiting",r.a.createElement(Se.a,{className:a.deliveredIcon})):r.a.createElement(ge.a,{variant:"outlined",onClick:function(){return c(j(l,!0))}},"Recieved",r.a.createElement(be.a,{className:a.deliveredIcon}))))))},_e=function(e){var t=e.items;return r.a.createElement(me.a,null,t.map((function(e){return r.a.createElement(Ie,{key:e.id,item:e})})))},De=function(e){var t={};return e.forEach((function(e){t[e.store]||(t[e.store]=[]),t[e.store].push(e)})),t},Re=a(183),we=Object(k.a)((function(e){return Object(L.a)({root:{minWidth:e.spacing(40),maxWidth:e.spacing(80),margin:e.spacing(2)},content:{paddingBottom:e.spacing(1)}})})),Ne=function(e){var t=e.items,a=e.store,c=we(),i=Ce(),l=Object(o.c)((function(e){return e.userSettings})).preferredCurrency,u=t.reduce((function(e,t){return e+i(t.price,t.priceCurrency)}),0),s=ve(l);return r.a.createElement(Ee.a,{className:c.root,elevation:4},r.a.createElement(fe.a,{classes:{root:c.content}},r.a.createElement(M.a,{gutterBottom:!0,variant:"h6"},a),t.map((function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement(U.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(U.a,{item:!0},r.a.createElement(M.a,{variant:"subtitle2"},e.name)),r.a.createElement(U.a,{item:!0},r.a.createElement(M.a,{variant:"caption"},i(e.price,e.priceCurrency).toFixed(2),s))))}))),r.a.createElement(Re.a,null),r.a.createElement(pe.a,null,r.a.createElement(U.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(U.a,{item:!0},r.a.createElement(M.a,null,"Total of ",t.length," items")),r.a.createElement(U.a,{item:!0},r.a.createElement(M.a,null,"Total price: ",u.toFixed(2),s)))))},Ae=function(e){var t=function(e){return Object(n.useMemo)((function(){return De(e)}),[e])}(e.items);return r.a.createElement(n.Fragment,null,Object.keys(t).map((function(e){return r.a.createElement(Ne,{key:e,store:e,items:t[e]})})))},ke=Object(k.a)((function(e){return{root:{width:"100%"}}})),Le=function(e){var t=e.items,a=Object(n.useState)("list"),c=Object(A.a)(a,2),i=c[0],o=c[1],l=ke(),u=t.sort((function(e,t){return new Date(e.deliveryDateISO).getTime()-new Date(t.deliveryDateISO).getTime()}));return r.a.createElement("div",{className:l.root},r.a.createElement(ue.a,{value:i},r.a.createElement(x.a,{position:"static"},r.a.createElement(oe.a,{variant:"fullWidth",value:i,onChange:function(e,t){return o(t)}},r.a.createElement(le.a,{label:"List",value:"list"}),r.a.createElement(le.a,{label:"Stores Aggregations",value:"stores-aggregations"}))),r.a.createElement(se.a,{value:"list"},r.a.createElement(_e,{items:u})),r.a.createElement(se.a,{value:"stores-aggregations"},r.a.createElement(Ae,{items:u}))))},xe=a(190),Fe=a(94),Ue=a.n(Fe),Be=a(186),Me=a(187),Pe=a(188),He=a(189),Ye=a(93),We=a.n(Ye),Ve=a(195),Ge=a(201),Xe=a(194),Je=Object(Ge.a)(),ze=function(e){var t=e.value,a=e.onChange,c=e.classes,i=Object(o.c)((function(e){return e.itemsState})).items,l=Object(n.useMemo)((function(){var e=De(i);return Object.keys(e)}),[i]);return r.a.createElement(Xe.a,{value:t,onChange:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){a(t)})),options:l,selectOnFocus:!0,clearOnBlur:!0,filterOptions:function(e,t){var a=Je(e,t);return a.length?a:[t.inputValue]},renderInput:function(e){return r.a.createElement(Ve.a,Object.assign({},e,{classes:c,label:"Select Store",variant:"outlined"}))},freeSolo:!0})},$e=Object(k.a)((function(e){return Object(L.a)({field:{marginTop:e.spacing(2)},currencySelector:{marginLeft:e.spacing(1)}})})),qe=function(e){var t=e.onChange,a=e.storeItem,n=$e();return r.a.createElement(U.a,{container:!0,direction:"column"},r.a.createElement(Ve.a,{label:"Name",variant:"outlined",value:a.name,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({name:e.target.value})}))}),r.a.createElement(ze,{value:a.store,classes:{root:n.field},onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({store:null!==e&&void 0!==e?e:""})}))}),r.a.createElement(U.a,{container:!0,className:n.field,item:!0,direction:"row"},r.a.createElement(Ve.a,{classes:{},label:"Price",variant:"outlined",type:"number",value:a.price,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({price:Number(e.target.value)})}))}),r.a.createElement(ee.a,{className:n.currencySelector,value:a.priceCurrency,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({priceCurrency:e.target.value})}))},ae.map((function(e){return r.a.createElement(te.a,{value:e,key:e},e)})))),r.a.createElement(Ve.a,{classes:{root:n.field},label:"Estimated Delivery Date",type:"date",variant:"outlined",InputLabelProps:{shrink:!0},onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t({deliveryDateISO:new Date(e.target.value).toISOString()})}))}))},Ke=a(197),Qe=Object(k.a)((function(e){return Object(L.a)({closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})})),Ze=function(e){var t=e.open,a=e.onClose,c=Object(o.c)((function(e){return e.userSettings})),i=Object(n.useState)({priceCurrency:c.preferredCurrency}),l=Object(A.a)(i,2),u=l[0],s=l[1],m=Qe(),E=Object(o.b)(),f=u.name&&u.deliveryDateISO&&u.price&&u.priceCurrency&&u.store;return r.a.createElement(Be.a,{open:t,disableBackdropClick:!0,onClose:a},r.a.createElement(Me.a,{disableTypography:!0},r.a.createElement(M.a,{variant:"h6"},"New Item"),r.a.createElement(B.a,{className:m.closeButton,onClick:a},r.a.createElement(We.a,null))),r.a.createElement(Pe.a,{dividers:!0},r.a.createElement(qe,{onChange:function(e){return s(Object(b.a)(Object(b.a)({},u),e))},storeItem:u})),r.a.createElement(He.a,null,r.a.createElement(ge.a,{onClick:a},"Cancel"),r.a.createElement(ge.a,{disabled:!f,onClick:function(){if(u.name&&u.deliveryDateISO&&u.price&&u.priceCurrency&&u.store){var e={name:u.name,store:u.store,price:u.price,priceCurrency:u.priceCurrency,deliveryDateISO:u.deliveryDateISO,recieved:!1,id:Object(Ke.a)()};E({type:"ADD_NEW_ITEM",item:e}),a()}}},"Add")))},et=Object(k.a)((function(e){return Object(L.a)({fab:{position:"absolute",bottom:e.spacing(4),right:e.spacing(4)},fabIcon:{marginRight:e.spacing(1)}})})),tt=function(e){var t=Object(n.useState)(!1),a=Object(A.a)(t,2),c=a[0],i=a[1],o=et();return r.a.createElement(n.Fragment,null,r.a.createElement(xe.a,{color:"primary",variant:"extended",className:o.fab,onClick:function(){return i(!0)}},r.a.createElement(Ue.a,{className:o.fabIcon}),"Add Item"),c&&r.a.createElement(Ze,{open:c,onClose:function(){return i(!1)}}))},at=function(){var e=Object(o.c)((function(e){return e.itemsState})).items.filter((function(e){return!e.recieved}));return r.a.createElement(U.a,{container:!0},r.a.createElement(Le,{items:e}),r.a.createElement(tt,null))},nt=function(){var e=Object(o.c)((function(e){return e.itemsState})).items.filter((function(e){return e.recieved}));return r.a.createElement(Le,{items:e})},rt=a(196),ct=a(191),it=Object(k.a)((function(e){return Object(L.a)({root:{position:"absolute",bottom:e.spacing(2),left:e.spacing(2)}})})),ot=function(){var e=Object(o.c)((function(e){return e.alertsState})).alerts,t=it();return r.a.createElement("div",{className:t.root},e.map((function(e){return r.a.createElement(rt.a,{severity:e.severity},r.a.createElement(ct.a,null,"Warning"),e.message)})))};var lt=function(){return r.a.createElement(w.a,null,r.a.createElement(ie,null),r.a.createElement(ot,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/recieved"},r.a.createElement(nt,null)),r.a.createElement(N.a,{path:["/","/bought"]},r.a.createElement(at,null))))};R(),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:_},r.a.createElement(lt,null))),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.8becb88a.chunk.js.map