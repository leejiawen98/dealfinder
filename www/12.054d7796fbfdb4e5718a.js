(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{hO9l:function(e,n,t){"use strict";t.r(n),t.d(n,"TabsPageModule",function(){return m});var o=t("TEn/"),s=t("ofXK"),i=t("3Pt+"),a=t("tyNb"),c=t("mrSG"),l=t("1dz3"),r=t("fXoL"),b=t("IfdK"),d=t("BLr9");const u=[{path:"tabs",component:(()=>{class e{constructor(e,n,t){this.sessionService=e,this.modalController=n,this.qrScanner=t}clickTab3(){return Object(c.a)(this,void 0,void 0,function*(){if(0==this.sessionService.getIsLogin()||null==this.sessionService.getIsLogin()){const e=yield this.modalController.create({component:l.a,cssClass:"my-custom-modal-class"});return yield e.present()}})}scan(){this.qrScanner.prepare().then(e=>{if(e.authorized){console.log("permission granted!");let e=document.getElementsByTagName("ion-content")[1];e.style.display="none",this.qrScanner.show();let n=this.qrScanner.scan().subscribe(t=>{this.scannedBusinessId=Number(t),document.getElementsByTagName("ion-text")[0].innerHTML=this.scannedBusinessId+"",console.log("Scanned something",this.scannedBusinessId),this.qrScanner.hide(),e.style.display="block",document.getElementsByTagName("ion-header")[0].style.display="block",n.unsubscribe()})}else console.log("permission denied")}).catch(e=>console.log("Error is",e))}}return e.\u0275fac=function(n){return new(n||e)(r.Jb(b.a),r.Jb(o.I),r.Jb(d.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-tabs"]],decls:14,vars:0,consts:[["slot","bottom"],["tab","tab1"],["name","home"],["tab","tab2",3,"click"],["name","barcode-outline"],["tab","tab3",3,"click"],["name","happy-outline"]],template:function(e,n){1&e&&(r.Mb(0,"ion-tabs"),r.Mb(1,"ion-tab-bar",0),r.Mb(2,"ion-tab-button",1),r.Kb(3,"ion-icon",2),r.Mb(4,"ion-label"),r.ic(5,"Home"),r.Lb(),r.Lb(),r.Mb(6,"ion-tab-button",3),r.Ub("click",function(){return n.scan()}),r.Kb(7,"ion-icon",4),r.Mb(8,"ion-label"),r.ic(9,"QR Scanner"),r.Lb(),r.Lb(),r.Mb(10,"ion-tab-button",5),r.Ub("click",function(){return n.clickTab3()}),r.Kb(11,"ion-icon",6),r.Mb(12,"ion-label"),r.ic(13,"Account"),r.Lb(),r.Lb(),r.Lb(),r.Lb())},directives:[o.B,o.z,o.A,o.m,o.s],styles:[""]}),e})(),children:[{path:"tab1",loadChildren:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"tmrb")).then(e=>e.Tab1PageModule)},{path:"tab2",loadChildren:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"TUkU")).then(e=>e.Tab2PageModule)},{path:"tab3",loadChildren:()=>Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"k+ul")).then(e=>e.Tab3PageModule)},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}];let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({imports:[[a.i.forChild(u)]]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({imports:[[o.G,s.b,i.a,h]]}),e})()}}]);