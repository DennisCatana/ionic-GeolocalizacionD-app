"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5075],{5075:(C,g,a)=>{a.r(g),a.d(g,{HomePageModule:()=>v});var u=a(177),i=a(7863),m=a(4341),d=a(70),e=a(4438),h=a(5797),f=a(1319);const p=[{path:"",component:(()=>{var o;class r{constructor(t,n){this.geolocation=t,this.nativeGeocoder=n,this.latitude=0,this.longitude=0,this.options={timeout:1e4,enableHighAccuracy:!0,maximumAge:3600},this.nativeGeocoderOptions={useLocale:!0,maxResults:5}}getCurrentCoordinates(){this.geolocation.getCurrentPosition().then(t=>{console.log(t),this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.getAddress(this.latitude,this.longitude)}).catch(t=>{console.log("Error getting location",t)})}getAddress(t,n){this.nativeGeocoder.reverseGeocode(t,n,this.nativeGeocoderOptions).then(l=>{this.address=this.pretifyAddress(l[0])}).catch(l=>{alert("Error getting location"+JSON.stringify(l))})}pretifyAddress(t){let n=[],l="";for(let c in t)n.push(t[c]);n.reverse();for(let c in n)n[c].length&&(l+=n[c]+", ");return t.slice(0,-2)}}return(o=r).\u0275fac=function(t){return new(t||o)(e.rXU(h.L),e.rXU(f.K))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-home"]],decls:22,vars:2,consts:[[1,"ion-padding"],["expand","block",3,"click"],["color","danger","slot","end"]],template:function(t,n){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Geolocalizaci\xf3n "),e.k0s()()(),e.j41(4,"ion-content")(5,"div",0)(6,"ion-button",1),e.bIt("click",function(){return n.getCurrentCoordinates()}),e.EFF(7," Obtener coordenadas "),e.k0s(),e.j41(8,"ion-list")(9,"ion-list-header")(10,"ion-label"),e.EFF(11,"Location Coordinates"),e.k0s()(),e.j41(12,"ion-item")(13,"ion-label"),e.EFF(14," Latitue "),e.k0s(),e.j41(15,"ion-badge",2),e.EFF(16),e.k0s()(),e.j41(17,"ion-item")(18,"ion-label"),e.EFF(19," Longitude "),e.k0s(),e.j41(20,"ion-badge",2),e.EFF(21),e.k0s()()()()()),2&t&&(e.R7$(16),e.JRh(n.latitude),e.R7$(5),e.JRh(n.longitude))},dependencies:[i.In,i.Jm,i.W9,i.eU,i.uz,i.he,i.nf,i.AF,i.BC,i.ai],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),r})()}];let P=(()=>{var o;class r{}return(o=r).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[d.iI.forChild(p),d.iI]}),r})(),v=(()=>{var o;class r{}return(o=r).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[u.MD,m.YN,i.bv,P]}),r})()}}]);