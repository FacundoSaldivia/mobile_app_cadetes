"use strict";(self.webpackChunkinterfaz_cadete=self.webpackChunkinterfaz_cadete||[]).push([[978],{5978:(it,Z,c)=>{c.r(Z),c.d(Z,{LogedModule:()=>ot});var u=c(6019),p=c(1659),t=c(3668),A=c(8643),h=c(3660);const O=function(){return["/dash/home"]},x=function(){return["is-active"]},q=function(){return["/dash/viajes"]},M=function(){return["/dash/historial"]};let E=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-tabbar"]],decls:10,vars:12,consts:[[1,"tabbar"],["href","",3,"routerLink","routerLinkActive"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-toolbar",0),t.TgZ(1,"a",1),t.TgZ(2,"mat-icon"),t._uU(3,"home"),t.qZA(),t.qZA(),t.TgZ(4,"a",1),t.TgZ(5,"mat-icon"),t._uU(6,"delivery_dining"),t.qZA(),t.qZA(),t.TgZ(7,"a",1),t.TgZ(8,"mat-icon"),t._uU(9,"history"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("routerLink",t.DdM(6,O))("routerLinkActive",t.DdM(7,x)),t.xp6(3),t.Q6J("routerLink",t.DdM(8,q))("routerLinkActive",t.DdM(9,x)),t.xp6(3),t.Q6J("routerLink",t.DdM(10,M))("routerLinkActive",t.DdM(11,x)))},directives:[A.Ye,p.yS,p.Od,h.Hw],styles:[".tabbar[_ngcontent-%COMP%]{position:fixed;bottom:0;height:55px;display:flex;align-items:center;justify-content:center;background-color:#f3f3f3;box-shadow:5px 0 #49494933,0 6px 20px #52525230}.tabbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 40px}.tabbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding:10px;transform:scale(1.1);transition-timing-function:ease-in}.tabbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited{text-decoration:none;color:#000}.is-active[_ngcontent-%COMP%]{transform:scale(1.2);transition-timing-function:ease;transition:.25s;color:#148cd1!important}"]}),a})(),y=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-loged"]],decls:3,vars:0,consts:[[1,"container"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet"),t.qZA(),t._UZ(2,"app-tabbar"))},directives:[p.lC,E],styles:[".container[_ngcontent-%COMP%]{padding-bottom:70px;display:flex;justify-content:center}"]}),a})();var m=c(5304),_=c(86);let D=(()=>{class a{constructor(e,n){var o;this.dialog=e,this.router=n,this.usuario=null===(o=localStorage.getItem("cadete"))||void 0===o?void 0:o.split(" ")[0].replace('"',"")}ngOnInit(){}openDialog(){this.dialog.open(P).afterClosed().subscribe(n=>{console.log(`Dialog result: ${n}`)})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(m.uw),t.Y36(p.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-home"]],decls:26,vars:1,consts:[[1,"wrapper"],["color","accent","mat-flat-button","",1,"logOut",3,"click"],[1,"user"],["src","../../../../assets/imgs/user.png","alt",""],[1,"opcions"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"button",1),t.NdJ("click",function(){return n.openDialog()}),t.TgZ(2,"mat-icon"),t._uU(3,"power_settings_new"),t.qZA(),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"img",3),t.TgZ(6,"h1"),t._uU(7,"Bienvenido"),t._UZ(8,"br"),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"div",4),t.TgZ(11,"p"),t.TgZ(12,"mat-icon"),t._uU(13,"home"),t.qZA(),t._UZ(14,"br"),t._uU(15," Es tu menu principal "),t.qZA(),t.TgZ(16,"p"),t.TgZ(17,"mat-icon"),t._uU(18,"delivery_dining"),t.qZA(),t._UZ(19,"br"),t._uU(20," Es donde puedes ver los viajes disponibles y tomarlos "),t.qZA(),t.TgZ(21,"p"),t.TgZ(22,"mat-icon"),t._uU(23,"history"),t.qZA(),t._UZ(24,"br"),t._uU(25,"Es tu historial completo de viajes "),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Oqu(n.usuario))},directives:[_.lW,h.Hw],styles:[".wrapper[_ngcontent-%COMP%]{margin-top:20px;max-width:400px}.user[_ngcontent-%COMP%]{display:grid;justify-content:center}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px}.user[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-family:ZillaSlab;line-height:110%;font-size:3em}.opcions[_ngcontent-%COMP%]{background-color:#ffffffda;padding:20px 10px;margin:0 15px 30px;border-radius:4px;min-height:35vh;box-shadow:0 1px 2px #49494933,0 6px 20px #52525230}.opcions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:120%;line-height:100%;text-align:center;margin:10%}.logOut[_ngcontent-%COMP%]{position:absolute;right:15px;top:15px;width:10px!important;padding-right:40px;min-width:unset!important}"]}),a})(),P=(()=>{class a{constructor(e,n){this.router=e,this.dialogRef=n}cerrarSesion(){localStorage.clear(),this.router.navigate(["/auth/login"]),this.dialogRef.close()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.F0),t.Y36(m.so))},a.\u0275cmp=t.Xpm({type:a,selectors:[["dialog-content-example-dialog"]],decls:6,vars:0,consts:[[1,"wrapper"],["mat-button","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h3"),t._uU(2,"Seguro que desea cerrar sesion ?"),t.qZA(),t.TgZ(3,"div"),t.TgZ(4,"button",1),t.NdJ("click",function(){return n.cerrarSesion()}),t._uU(5," Si "),t.qZA(),t.qZA(),t.qZA())},directives:[_.lW],styles:[".mat-dialog-container[_ngcontent-%COMP%]{width:400px}.wrapper[_ngcontent-%COMP%]{text-align:center}.wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-bottom:5px}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}"]}),a})();var w=c(960),j=c(4522);let b=(()=>{class a{constructor(e){this.http=e}getAllAvilableRetiro(){return this.http.get("http://logistica.asambleas.cl/api/Travel/2/1")}getAllAvilableEntrega(){return this.http.get("http://logistica.asambleas.cl/api/Travel/2/5")}getAllAvilableRetiroAsignado(){return this.http.get("http://logistica.asambleas.cl/api/Travel/2/2")}getAllAvilableEntregaAsignado(){return this.http.get("http://logistica.asambleas.cl/api/Travel/2/6")}getAllAvilableRetiroEnCurso(){return this.http.get("http://logistica.asambleas.cl/api/Travel/2/3")}getAllAvilableEntregaEnCurso(){return this.http.get("http://logistica.asambleas.cl/api/Travel/2/7")}adquirirViaje(e,n){return this.http.post(`http://logistica.asambleas.cl/api/Travel?travelId=${e.id}&statusTravel=${e.lastStatusTravel+1}&userOperation=2&cadeteId=${n}&isReasigned=false`,e)}darDeBajaViaje(e,n){return this.http.post(`http://logistica.asambleas.cl/api/Travel?travelId=${e.id}&statusTravel=${e.lastStatusTravel-1}&userOperation=2&cadeteId=${n}&isReasigned=true`,e)}getAllEntregadosRetiro(){return this.http.get("http://logistica.asambleas.cl/api/Travel/2/4")}getAllEntregadosEntrega(){return this.http.get("http://logistica.asambleas.cl/api/Travel/2/8")}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(j.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var f=c(7706),U=c(138),d=c(888);function k(a,s){1&a&&(t.TgZ(0,"mat-card",10),t._UZ(1,"mat-card-title",11),t._UZ(2,"mat-card-subtitle",12),t._UZ(3,"mat-card-subtitle",13),t.TgZ(4,"mat-card-content"),t.TgZ(5,"button",14),t.TgZ(6,"mat-icon",15),t._uU(7,"keyboard_arrow_down"),t.qZA(),t.qZA(),t.qZA(),t.qZA())}function S(a,s){if(1&a&&(t.TgZ(0,"div",8),t.YNc(1,k,8,0,"mat-card",9),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.loading)}}function N(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"mat-card",17),t.TgZ(1,"mat-card-title",18),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card-content"),t.TgZ(8,"button",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit,i=t.oxw(2);return i.expand(r,i.viajesRealizados)}),t.TgZ(9,"mat-icon",15),t._uU(10,"keyboard_arrow_down"),t.qZA(),t.qZA(),t.TgZ(11,"div",20),t.TgZ(12,"p"),t.TgZ(13,"span",21),t._uU(14,"Direccion:"),t.qZA(),t._uU(15),t.qZA(),t.TgZ(16,"p"),t.TgZ(17,"span",21),t._uU(18," Hora de entrega: "),t.qZA(),t._uU(19),t.qZA(),t.TgZ(20,"p"),t.TgZ(21,"span",21),t._uU(22," Equipo: "),t.qZA(),t._uU(23),t.qZA(),t.TgZ(24,"p"),t.TgZ(25,"span",21),t._uU(26," Estado del viaje: "),t.qZA(),t._uU(27),t.qZA(),t.TgZ(28,"p"),t.TgZ(29,"span",21),t._uU(30," Observaciones: "),t.qZA(),t._uU(31),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=s.$implicit,n=t.oxw(2);t.xp6(2),t.hij("Fecha: ",n.getFecha(e)," "),t.xp6(2),t.hij("Cliente: ",n.getClient(e),""),t.xp6(2),t.hij("Hora: ",n.getTime(e),""),t.xp6(9),t.hij(" ",n.getAddress(e)," "),t.xp6(4),t.hij("",n.getTime(e),"hs "),t.xp6(4),t.AsE("",n.getBrand(e)," ",n.getModel(e)," "),t.xp6(4),t.hij("",n.getTravelState(e)," "),t.xp6(4),t.hij(" ",n.getObservaciones(e)," ")}}function R(a,s){if(1&a&&(t.TgZ(0,"div",8),t.YNc(1,N,32,9,"mat-card",16),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.dataSource.filteredData)}}let F=(()=>{class a{constructor(e){this.travelService=e,this.cadeteId=Number(localStorage.getItem("cadeteId")||""),this.viajesRealizados=[],this.loading=[{},{},{},{},{},{},{}],this.dataSource=new w.by(this.viajesRealizados)}ngOnInit(){this.getViajesRealizados()}getViajesRealizados(){this.travelService.getAllEntregadosRetiro().subscribe(e=>{e.forEach(n=>{n.travelEquipmentDTOs.forEach(o=>{o.cadete&&(4==o.statusTravel||8==o.statusTravel||9==o.statusTravel)&&o.cadete.id==this.cadeteId&&this.viajesRealizados.push(o)}),this.viajesRealizados.sort(function(o,r){let i=o.operationDate,l=r.operationDate;return i<l?1:i>l?-1:0})})}),this.travelService.getAllEntregadosEntrega().subscribe(e=>{e.forEach(n=>{n.travelEquipmentDTOs.forEach(o=>{o.cadete&&(4==o.statusTravel||8==o.statusTravel||9==o.statusTravel)&&o.cadete.id==this.cadeteId&&this.viajesRealizados.push(o)}),this.viajesRealizados.sort(function(o,r){let i=o.operationDate,l=r.operationDate;return i<l?1:i>l?-1:0})})})}expand(e,n){let o=n.indexOf(e),r=document.getElementsByClassName("ob"),i=document.getElementsByClassName("arrow");5==i[o].classList.length?(i[o].className="mat-icon notranslate arrow open material-icons mat-icon-no-color",r[o].setAttribute("style","display:block ; transition: max-height 0.4s ease;")):(i[o].className="mat-icon notranslate arrow material-icons mat-icon-no-color",r[o].setAttribute("style","display:none; transition: max-height 0.4s ease;"))}applyFilter(e){this.dataSource.filter=e.target.value.trim().toLowerCase()}getAddress(e){return e.equipment.cliente.address}getClient(e){return e.equipment.cliente.fullName}getBrand(e){return e.equipment.mark}getModel(e){return e.equipment.model}getTravelState(e){return 4==e.statusTravel?"Retiro finalizado":"Entrega finalizada"}getAdress(e){return e.equipment.cliente.address}getFecha(e){return e.operationDate.substring(0,10)}getTime(e){return e.operationDate.substring(11,16)}getObservaciones(e){return e.observation?e.observation:"No hay observaciones"}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(b))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-record"]],decls:12,vars:2,consts:[[1,"logo"],["src","../../../../assets/imgs/logo.png","alt",""],[1,"title"],[1,"container-filtro"],["appearance","standard",1,"filter"],["matInput","","placeholder","ej: 2021-12-22",3,"keyup"],["input",""],["class","cards",4,"ngIf"],[1,"cards"],["class","loading-card",4,"ngFor","ngForOf"],[1,"loading-card"],[1,"loading-address"],[1,"loading-name"],[1,"loading-time"],[1,"arrow-btn"],[1,"arrow"],["class","example-card",4,"ngFor","ngForOf"],[1,"example-card"],[1,"titulo"],[1,"arrow-btn",3,"click"],[1,"ob"],[2,"font-weight","500"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"h1",2),t._uU(3,"Historial de viajes completados"),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"mat-form-field",4),t.TgZ(6,"mat-label"),t._uU(7,"Filtro por fecha"),t.qZA(),t.TgZ(8,"input",5,6),t.NdJ("keyup",function(r){return n.applyFilter(r)}),t.qZA(),t.qZA(),t.qZA(),t.YNc(10,S,2,1,"div",7),t.YNc(11,R,2,1,"div",7)),2&e&&(t.xp6(10),t.Q6J("ngIf",!(n.viajesRealizados.length>1)),t.xp6(1),t.Q6J("ngIf",n.viajesRealizados.length>1))},directives:[f.KE,f.hX,U.Nt,u.O5,u.sg,d.a8,d.n5,d.$j,d.dn,h.Hw],styles:[".logo[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:20px;margin-top:10px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px}.cards[_ngcontent-%COMP%]{width:100vw}.title[_ngcontent-%COMP%]{text-align:center}.loading-card[_ngcontent-%COMP%]{margin:30px 25px;padding-bottom:5px}.loading-card[_ngcontent-%COMP%]   .loading-address[_ngcontent-%COMP%], .loading-card[_ngcontent-%COMP%]   .loading-time[_ngcontent-%COMP%], .loading-card[_ngcontent-%COMP%]   .loading-name[_ngcontent-%COMP%], .loading-card[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]{background:#f6f6f6;background:linear-gradient(110deg,#eee 8%,#e4e4e4 18%,#eee 33%);height:18px;background-size:200% 100%;animation:1.5s shine linear infinite}.loading-card[_ngcontent-%COMP%]   .loading-address[_ngcontent-%COMP%]{width:100%;height:22px}.loading-card[_ngcontent-%COMP%]   .loading-time[_ngcontent-%COMP%]{width:30%;margin-bottom:5px!important}.loading-card[_ngcontent-%COMP%]   .loading-name[_ngcontent-%COMP%]{width:40%;margin-bottom:5px!important}.loading-card[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]{width:50%}.example-card[_ngcontent-%COMP%]{transition:max-height .4s ease;margin:30px 25px;padding-bottom:5px}.example-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 6px}.arrow-btn[_ngcontent-%COMP%]{width:100%;margin:0;background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.arrow[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .15s linear}.open[_ngcontent-%COMP%]{transform:rotate(180deg);transition:transform .15s linear}.ob[_ngcontent-%COMP%]{display:none;text-align:left}.mat-card-subtitle[_ngcontent-%COMP%]{margin-bottom:0!important}.container-filtro[_ngcontent-%COMP%]{width:100vw;display:flex;align-items:center;justify-content:center}.container-filtro[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{width:80vw}  .mat-form-field-flex{background-color:none!important}"]}),a})();function C(a,s,e,n,o,r,i){try{var l=a[r](i),g=l.value}catch(v){return void e(v)}l.done?s(g):Promise.resolve(g).then(n,o)}var J=c(8100),z=c(9632),L=c(6400),$=c(6731);function Y(a,s){1&a&&(t.TgZ(0,"mat-card",10),t._UZ(1,"mat-card-title",11),t._UZ(2,"mat-card-subtitle",12),t._UZ(3,"mat-card-subtitle",12),t.TgZ(4,"mat-card-content"),t._UZ(5,"p",13),t.qZA(),t.TgZ(6,"mat-card-actions",14),t.TgZ(7,"a",15),t._uU(8," Google Maps"),t.qZA(),t.TgZ(9,"button",16),t._uU(10,"Tomar Pedido"),t.qZA(),t.qZA(),t.qZA())}function H(a,s){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,Y,11,0,"mat-card",9),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.loading)}}function B(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"mat-card",18),t.TgZ(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card-content"),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"mat-card-actions",14),t.TgZ(11,"a",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit,i=t.oxw(2);return i.verDireccion(r,i.viajesDisponibles)}),t._uU(12," Google Maps"),t.qZA(),t.TgZ(13,"button",20),t.NdJ("click",function(){const r=t.CHM(e).$implicit,i=t.oxw(2);return i.checkIfStillListed(r,i.viajesDisponibles,i.viajesAsignados)}),t._uU(14,"Tomar Pedido"),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=s.$implicit,n=t.oxw(2);t.xp6(2),t.hij("Direccion: ",n.getAddress(e)," "),t.xp6(2),t.Oqu(n.getTime(e)),t.xp6(2),t.hij("Tipo de viaje: ",n.getRetiro(e),""),t.xp6(3),t.hij("Equipo: ",n.getEquipo(e),""),t.xp6(4),t.Q6J("disabled",n.viajesAsignados.length+n.viajesEnCurso.length>2)}}function Q(a,s){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,B,15,5,"mat-card",17),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.viajesDisponibles)}}function V(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"mat-card",18),t.TgZ(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card-content"),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t._UZ(12,"br"),t._uU(13),t.qZA(),t.TgZ(14,"button",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit,i=t.oxw(2);return i.expand(r,i.viajesAsignados)}),t.TgZ(15,"mat-icon",22),t._uU(16,"keyboard_arrow_down"),t.qZA(),t.qZA(),t.TgZ(17,"p",23),t._uU(18),t.qZA(),t.qZA(),t.TgZ(19,"mat-card-actions",24),t.TgZ(20,"button",25),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).openDialog("Seguro que desea dar de baja el viaje ?","Estoy seguro",r)}),t._uU(21,"Dar de baja"),t.qZA(),t.TgZ(22,"button",26),t.NdJ("click",function(){const r=t.CHM(e).$implicit,i=t.oxw(2);return i.tomarPedido(r,i.viajesAsignados,i.viajesEnCurso)}),t._uU(23,"Adquirido"),t.qZA(),t.TgZ(24,"a",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit,i=t.oxw(2);return i.verDireccion(r,i.viajesAsignados)}),t._uU(25,"Abrir en Google Maps"),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=s.$implicit,n=t.oxw(2);t.xp6(2),t.hij("Direccion: ",n.getAddress(e)," "),t.xp6(2),t.Oqu(n.getTime(e)),t.xp6(2),t.hij("Tipo de viaje: ",n.getRetiro(e),""),t.xp6(3),t.hij("Equipo: ",n.getEquipo(e),""),t.xp6(2),t.hij("Cliente: ",n.getClient(e),""),t.xp6(2),t.hij("Telefono: ",n.getNumber(e),""),t.xp6(5),t.Oqu(n.getObservations(e))}}function X(a,s){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,V,26,7,"mat-card",17),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.viajesAsignados)}}function G(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"mat-card",18),t.TgZ(1,"mat-card-title"),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6),t.qZA(),t.TgZ(7,"mat-card-content"),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p"),t._uU(11),t._UZ(12,"br"),t._uU(13),t.qZA(),t.TgZ(14,"button",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit,i=t.oxw(2);return i.expand(r,i.viajesEnCurso)}),t.TgZ(15,"mat-icon",22),t._uU(16,"keyboard_arrow_down"),t.qZA(),t.qZA(),t.TgZ(17,"p",23),t._uU(18),t.qZA(),t.qZA(),t.TgZ(19,"mat-card-actions",14),t.TgZ(20,"a",19),t.NdJ("click",function(){const r=t.CHM(e).$implicit,i=t.oxw(2);return i.verDireccion(r,i.viajesEnCurso)}),t._uU(21,"Google Maps"),t.qZA(),t.TgZ(22,"button",26),t.NdJ("click",function(){const r=t.CHM(e).$implicit,i=t.oxw(2);return i.tomarPedido(r,i.viajesEnCurso,i.arrAux)}),t._uU(23,"Entregado"),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=s.$implicit,n=t.oxw(2);t.xp6(2),t.hij("Direccion: ",n.getAddress(e)," "),t.xp6(2),t.Oqu(n.getTime(e)),t.xp6(2),t.hij("Tipo de viaje: ",n.getRetiro(e),""),t.xp6(3),t.hij("Equipo: ",n.getEquipo(e),""),t.xp6(2),t.hij("Cliente: ",n.getClient(e),""),t.xp6(2),t.hij("Telefono: ",n.getNumber(e),""),t.xp6(5),t.Oqu(n.getObservations(e))}}function W(a,s){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,G,24,7,"mat-card",17),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.viajesEnCurso)}}let K=(()=>{class a{constructor(e,n,o){var r=this;this.travelService=e,this.dialog=n,this._snackBar=o,this.cadeteId=Number(localStorage.getItem("cadeteId")||""),this.viajesDisponibles=[],this.viajesAsignados=[],this.viajesEnCurso=[],this.arrAux=[],this.loading=[{},{},{}],this.selected="viajesDisponibles",this.delay=i=>new Promise(l=>setTimeout(l,i)),this.borrarDelArray=function(){var i=function(a){return function(){var s=this,e=arguments;return new Promise(function(n,o){var r=a.apply(s,e);function i(g){C(r,n,o,i,l,"next",g)}function l(g){C(r,n,o,i,l,"throw",g)}i(void 0)})}}(function*(l,g,v,T){yield r.delay(500),v.splice(g,1),T.push(l)});return function(l,g,v,T){return i.apply(this,arguments)}}()}ngOnInit(){this.getViajes(),this.getViajesAsignados(),this.getViajesEnCurso()}tomarPedido(e,n,o){this.travelService.adquirirViaje(e,this.cadeteId).subscribe(l=>{console.log(l)});let r=n.indexOf(e);document.getElementsByClassName("example-card")[r].setAttribute("style","transition-property: transform; transition-delay: 10ms; transform: scale(0);"),e.lastStatusTravel=e.lastStatusTravel+1,this.borrarDelArray(e,r,n,o),this.openSnackBar("Accion pasada con exito","Ok")}checkIfStillListed(e,n,o){let r=!1,i=this.travelService.getAllAvilableRetiro(),l=this.travelService.getAllAvilableEntrega();(0,J.D)([i,l]).subscribe(g=>{[...g[0],...g[1]].forEach(T=>{T.id==e.id&&(this.tomarPedido(e,n,o),r=!0)}),r||this.openDialog("Parece que este viaje ya a sido tomado, recarga la pagina para poder actualizar la lista de viajes","",e)})}cancelarPedido(e){this.travelService.darDeBajaViaje(e,this.cadeteId).subscribe(r=>{console.log(r)});let n=this.viajesAsignados.indexOf(e);document.getElementsByClassName("example-card")[n].setAttribute("style","transition-property: transform; transition-delay: 10ms; transform: scale(0);"),e.lastStatusTravel=e.lastStatusTravel-1,this.borrarDelArray(e,n,this.viajesAsignados,this.viajesDisponibles)}expand(e,n){let o=n.indexOf(e),r=document.getElementsByClassName("ob"),i=document.getElementsByClassName("arrow");5==i[o].classList.length?(i[o].className="mat-icon notranslate arrow open material-icons mat-icon-no-color",r[o].setAttribute("style","display:block ; transition: max-height 0.4s ease;")):(i[o].className="mat-icon notranslate arrow material-icons mat-icon-no-color",r[o].setAttribute("style","display:none; transition: max-height 0.4s ease;"))}verDireccion(e,n){let o=`https://www.google.com/maps/search/?api=1&query=${e.travelEquipmentDTOs[0].equipment.cliente.address.split(" ").join("+")}+CABA`,r=n.indexOf(e);document.getElementsByClassName("google-maps-btn")[r].setAttribute("href",o)}getViajes(){this.travelService.getAllAvilableRetiro().subscribe(e=>{this.viajesDisponibles.push.apply(this.viajesDisponibles,e),this.viajesDisponibles.sort(function(n,o){let r=n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].operationDate,i=o.travelEquipmentDTOs[o.travelEquipmentDTOs.length-1].operationDate;return r>i?1:r<i?-1:0})}),this.travelService.getAllAvilableEntrega().subscribe(e=>{this.viajesDisponibles.push.apply(this.viajesDisponibles,e),this.viajesDisponibles.sort(function(n,o){console.log();let r=n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].operationDate,i=o.travelEquipmentDTOs[o.travelEquipmentDTOs.length-1].operationDate;return r>i?1:r<i?-1:0})})}getViajesAsignados(){console.log(this.viajesAsignados.length),this.travelService.getAllAvilableEntregaAsignado().subscribe(e=>{e.forEach(n=>{n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].cadete.id==this.cadeteId&&(console.log("paso entrega",n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].cadete.id),this.viajesAsignados.push(n))})}),this.travelService.getAllAvilableRetiroAsignado().subscribe(e=>{e.forEach(n=>{n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].cadete.id==this.cadeteId&&(console.log("paso retiro",n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].cadete.id),this.viajesAsignados.push(n))})})}getViajesEnCurso(){this.travelService.getAllAvilableEntregaEnCurso().subscribe(e=>{e.forEach(n=>{n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].cadete.id==this.cadeteId&&(console.log("paso retiro",n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].cadete.id),this.viajesEnCurso.push(n))})}),this.travelService.getAllAvilableRetiroEnCurso().subscribe(e=>{e.forEach(n=>{n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].cadete.id==this.cadeteId&&(console.log("paso retiro",n.travelEquipmentDTOs[n.travelEquipmentDTOs.length-1].cadete.id),this.viajesEnCurso.push(n))})})}getAddress(e){return e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.address}getNumber(e){return e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.cellPhone}getDate(e){return e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate.substring(2,10)}getTime(e){return e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate.substring(5,10).replace("-","/")+" "+e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].operationDate.substring(11,16)}getEquipo(e){return e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.mark+" "+e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.model}getClient(e){return e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].equipment.cliente.fullName}getRetiro(e){return e.lastStatusTravel<3?"Retiro a domicilio":"Entrega a domicilio"}getObservations(e){return e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].observation?`Observaciones: ${e.travelEquipmentDTOs[e.travelEquipmentDTOs.length-1].observation}`:"No hay observaciones"}openDialog(e,n,o){this.dialog.open(tt,{data:{texto:e,boton:n,viaje:o}}).afterClosed().subscribe(i=>{i&&this.cancelarPedido(o)})}openSnackBar(e,n){this._snackBar.open(e,n,{duration:2e4,panelClass:["bg-green","black"]})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(b),t.Y36(m.uw),t.Y36(z.ux))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-travels"]],decls:18,vars:5,consts:[[1,"logo"],["src","../../../../assets/imgs/logo.png","alt",""],[1,"contenedor-selector"],["appearance","fill",1,"selector"],[3,"value","valueChange"],["value","viajesDisponibles"],["value","viajesAsignados"],["value","viajesEnCurso"],[4,"ngIf"],["class","loading-card",4,"ngFor","ngForOf"],[1,"loading-card"],[1,"loading-address"],[1,"loading-time"],[1,"loading-content"],[1,"buttons-1"],["color","primary","mat-flat-button","","disabled","",1,"google-maps-btn",2,"color","white"],["color","primary","mat-flat-button","","disabled",""],["class","example-card",4,"ngFor","ngForOf"],[1,"example-card"],["target","_blank","color","primary","mat-flat-button","",1,"google-maps-btn",3,"click"],["color","warn","mat-flat-button","",3,"disabled","click"],[1,"arrow-btn",3,"click"],[1,"arrow"],[1,"ob"],[1,"buttons-2"],["color","accent","mat-flat-button","",3,"click"],["color","warn","mat-flat-button","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"div",2),t.TgZ(3,"mat-form-field",3),t.TgZ(4,"mat-label"),t._uU(5,"Select an option"),t.qZA(),t.TgZ(6,"mat-select",4),t.NdJ("valueChange",function(r){return n.selected=r}),t.TgZ(7,"mat-option",5),t._uU(8,"Viajes disponibles"),t.qZA(),t.TgZ(9,"mat-option",6),t._uU(10,"Viajes tomados"),t.qZA(),t.TgZ(11,"mat-option",7),t._uU(12,"Viajes en curso"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div"),t.YNc(14,H,2,1,"div",8),t.YNc(15,Q,2,1,"div",8),t.YNc(16,X,2,1,"div",8),t.YNc(17,W,2,1,"div",8),t.qZA()),2&e&&(t.xp6(6),t.Q6J("value",n.selected),t.xp6(8),t.Q6J("ngIf",n.viajesDisponibles.length+n.viajesAsignados.length+n.viajesEnCurso.length<1),t.xp6(1),t.Q6J("ngIf","viajesDisponibles"==n.selected),t.xp6(1),t.Q6J("ngIf","viajesAsignados"==n.selected),t.xp6(1),t.Q6J("ngIf","viajesEnCurso"==n.selected))},directives:[f.KE,f.hX,L.gD,$.ey,u.O5,u.sg,d.a8,d.n5,d.$j,d.dn,d.hq,_.zs,_.lW,h.Hw],styles:[".logo[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:20px;margin-top:10px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px}.contenedor-selector[_ngcontent-%COMP%]{padding:0;width:100vw;display:flex;justify-content:center}.contenedor-selector[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%]{width:85%}.example-card[_ngcontent-%COMP%]{transition:max-height .4s ease;margin:30px 25px;padding-bottom:20px}.example-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 6px}.arrow-btn[_ngcontent-%COMP%]{width:100%;margin:0;background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.arrow[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .15s linear}.open[_ngcontent-%COMP%]{transform:rotate(180deg);transition:transform .15s linear}.ob[_ngcontent-%COMP%]{display:none;text-align:center}.disappeared-card[_ngcontent-%COMP%]{animation-name:myAnimation;animation-duration:2s;animation-fill-mode:forwards}.loading-card[_ngcontent-%COMP%]{margin:30px 25px;padding-bottom:20px}.loading-card[_ngcontent-%COMP%]   .loading-address[_ngcontent-%COMP%], .loading-card[_ngcontent-%COMP%]   .loading-time[_ngcontent-%COMP%], .loading-card[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]{background:#f6f6f6;background:linear-gradient(110deg,#eee 8%,#e4e4e4 18%,#eee 33%);height:18px;background-size:200% 100%;animation:1.5s shine linear infinite}.loading-card[_ngcontent-%COMP%]   .loading-address[_ngcontent-%COMP%]{width:100%;height:22px}.loading-card[_ngcontent-%COMP%]   .loading-time[_ngcontent-%COMP%]{width:30%}.loading-card[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]{width:50%}.buttons-1[_ngcontent-%COMP%]{margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;grid-column-gap:20px;column-gap:20px}.buttons-1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff!important}.buttons-2[_ngcontent-%COMP%]{margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;grid-column-gap:20px;column-gap:20px}.buttons-2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff!important}.buttons-2[_ngcontent-%COMP%]   .google-maps-btn[_ngcontent-%COMP%]{grid-column:span 2;margin:10px 0}.buttons-3[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}.buttons-3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.example-card[_ngcontent-%COMP%]   .tomar-pedido[_ngcontent-%COMP%]{width:100%}.mat-card-content[_ngcontent-%COMP%]{margin-bottom:5px}@keyframes shine{to{background-position-x:-200%}}@keyframes myAnimation{0%{opacity:1;transform:rotateX(90deg)}50%{opacity:.5;transform:rotateX(0)}to{display:none;opacity:0;transform:rotateX(90deg)}}"]}),a})(),tt=(()=>{class a{constructor(e){this.data=e}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(m.WI))},a.\u0275cmp=t.Xpm({type:a,selectors:[["dialog-content-example-dialog"]],decls:5,vars:3,consts:[[1,"wrapper"],["mat-flat-button","","color","accent",3,"mat-dialog-close"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"button",1),t._uU(4),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Oqu(n.data.texto),t.xp6(1),t.Q6J("mat-dialog-close",!0),t.xp6(1),t.Oqu(n.data.boton))},directives:[_.lW,m.ZT],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;align-items:center}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}.wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}"]}),a})();const et=[{path:"",component:y,children:[{path:"home",component:D},{path:"viajes",component:K},{path:"historial",component:F}]}];let nt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[p.Bz.forChild(et)],p.Bz]}),a})();var at=c(1876);let ot=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[u.ez,nt,at.q]]}),a})()}}]);