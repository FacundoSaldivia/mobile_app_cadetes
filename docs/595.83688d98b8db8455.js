"use strict";(self.webpackChunkinterfaz_cadete=self.webpackChunkinterfaz_cadete||[]).push([[595],{595:(O,p,r)=>{r.r(p),r.d(p,{AuthModule:()=>y});var f=r(6019),c=r(1659),t=r(3668),a=r(9133),g=r(5304),h=r(4522);let C=(()=>{class o{constructor(n){this.http=n}login(n,e){return this.http.get(`/api/login?email=${n}&password=${e}`)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(h.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=r(9632),u=r(7706),Z=r(138),d=r(86);let m=(()=>{class o{constructor(n,e,s,l){this.loginService=n,this.router=e,this.snackBar=s,this.dialog=l,this.texto="",this.form=new a.cw({email:new a.NI(""),password:new a.NI("")})}ngOnInit(){}submit(){this.login(this.form),this.form.reset()}login(n){this.loginService.login(n.value.email,n.value.password).subscribe(e=>{var s,l;2==(null===(s=e.rol)||void 0===s?void 0:s.id)?(localStorage.setItem("cadete",JSON.stringify(e.fullName)),localStorage.setItem("cadeteId",JSON.stringify(e.id)),this.router.navigate(["/dash/home"]),this.openSnackBar("Logeado correctamente","ok","bg-green")):1==(null===(l=e.rol)||void 0===l?void 0:l.id)?(this.texto="Admin",this.openDialog()):(this.texto="Usuario Final",this.openDialog())},e=>{this.openSnackBar("Datos introducidos incorrectos","ok","bg-red")})}openDialog(){this.dialog.open(A,{width:"350px",data:{texto:this.texto}}).afterClosed().subscribe(e=>{console.log("The dialog was closed"),this.texto=e})}openSnackBar(n,e,s){this.snackBar.open(n,e,{duration:2e3,panelClass:[s,"black"]})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(C),t.Y36(c.F0),t.Y36(v.ux),t.Y36(g.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:22,vars:5,consts:[[1,"wrapper"],["src","../../../../assets/imgs/logo.png","alt","",1,"logo"],[1,"container-login"],[3,"formGroup","ngSubmit"],["appearance","outline"],["type","text","matInput","","formControlName","email"],["type","password","matInput","","placeholder","Password","formControlName","password"],["type","submit","mat-raised-button",""],[1,"soporte"],["href",""]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2),t.TgZ(3,"h1"),t._uU(4,"Iniciar Sesion"),t.qZA(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(6,"p"),t.TgZ(7,"mat-form-field",4),t.TgZ(8,"mat-label"),t._uU(9,"Correo"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.qZA(),t.TgZ(11,"p"),t.TgZ(12,"mat-form-field",4),t.TgZ(13,"mat-label"),t._uU(14,"Contrase\xf1a"),t.qZA(),t._UZ(15,"input",6),t.qZA(),t.qZA(),t.TgZ(16,"button",7),t._uU(17,"Iniciar Sesion"),t.qZA(),t.TgZ(18,"p",8),t._uU(19,"Problemas? Contactanos"),t.qZA(),t.TgZ(20,"a",9),t._uU(21,"soporte@todoit.com"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("formGroup",e.form),t.xp6(2),t.Udp("width",250,"px"),t.xp6(5),t.Udp("width",250,"px"))},directives:[a._Y,a.JL,a.sg,u.KE,u.hX,Z.Nt,a.Fj,a.JJ,a.u,d.lW],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:90vh}.wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:absolute;width:150px;top:3vh}.wrapper[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:500px;text-align:center}.wrapper[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#000;text-align:center;margin-bottom:50px}.wrapper[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90%}.wrapper[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .soporte[_ngcontent-%COMP%]{margin:5px;line-height:175%}  .mat-form-field-outline{border-radius:6px;background-color:#ffffff80!important}"]}),o})(),A=(()=>{class o{constructor(n,e){this.dialogRef=n,this.data=e}onNoClick(){this.dialogRef.close()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.so),t.Y36(g.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dialog-login"]],decls:5,vars:1,consts:[[1,"wrapper"],["mat-flat-button","","color","accent",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return e.onNoClick()}),t._uU(4,"ok"),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.hij("Tu cuenta se encuentra registrada como ",e.data.texto," por lo tanto no puede proseguir, si cree que esto es un error por favor comuniquese con nosotros soporte@todoit.com"))},directives:[d.lW],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;align-items:center;text-align:center}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}.wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-weight:400}"]}),o})();const w=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-auth"]],decls:1,vars:0,template:function(n,e){1&n&&t._UZ(0,"app-login")},directives:[m],styles:[""]}),o})(),children:[{path:"login",component:m}]}];let x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(w)],c.Bz]}),o})();var M=r(1876);let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.ez,x,M.q]]}),o})()}}]);