webpackJsonp([1],{0:function(t,n,e){t.exports=e("x35b")},"1kto":function(t,n){t.exports='.all{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    background-image: url("http://localhost:3000/images/sec01_background.jpg");\n    height: 800px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}   '},"4I9T":function(t,n){t.exports='.all{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    background-image: url("http://localhost:3000/images/sec01_background.jpg");\n    height: 800px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n\n.container-fluid{\n    margin-top: 120px;\n    background-color: white;\n    height: 200px;\n    width: 600px;\n}\n\n.form-control{\n    margin-top: 10px;\n    margin-bottom: 10px;\n}'},"5xMp":function(t,n){t.exports='<figure class="padre">\n  \x3c!-- <img class="top" src= alt="firstimg"> --\x3e\n  <div class="marca">\n    <img width="190px" height="120px" src="http://localhost:3000/images/brand1.png" alt="top">\n  </div>\n</figure>\n<nav class="navbar">\n    <h2>iFix</h2>\n    <ul>\n      <li><a href="/">Home</a></li>\n      <li><a href="/req-client">Servicios</a></li>\n      <li><a href="/login">Login</a></li>\n      <li><a href="/signup">Signup</a></li>\n    </ul>\n    \n  </nav>\n<router-outlet></router-outlet>\n\n'},"9rA2":function(t,n){t.exports=""},B8Qc:function(t,n){t.exports='<div class="all">\n  <div class="container">\n    <br>\n    <select class="custom-select" data-style="btn-success" [(ngModel)]="newUser.option" name="options" id="inputGroupSelect01">\n    <option hidden >Display but don\'t show in list</option>\n    <option value="tecnico">Tecnico</option>\n    <option value="cliente">Cliente</option>\n    </select> \n    <br>\n    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>\n    <input [(ngModel)]="newUser.name" id="name" type="text" class="form-control" name="name" placeholder="Name">\n    \x3c!-- <input *ngIf="newUser.option==\'tecnico\'" [(ngModel)]="newUser.name" id="name" type="text" class="form-control" name="name" placeholder="Name"> --\x3e\n    <br>\n    <span class="glyphicon glyphicon-user"></span>\n    <input [(ngModel)]="newUser.email" id="email" type="text" class="form-control" name="email" placeholder="Email">\n    <br>\n    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>\n    <input [(ngModel)]="newUser.password" id="password" type="password" class="form-control" name="password" placeholder="Password">\n    <br>\n    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>\n    <input [(ngModel)]="newUser.password2" id="password" type="password" class="form-control" name="password2" placeholder="Confirm password">\n    <br>\n    <div id="registro">\n      <button class="btn btn-primary btn-lg btn-block" (click)="signUp()" *ngIf="newUser.password === newUser.password2">Registrarse</button>\n      <button class="btn btn-primary btn-lg btn-block" *ngIf="newUser.password !== newUser.password2" disabled>Registrarse</button>\n      <br>\n    </div>\n  </div>\n</div>\n'},Bhxg:function(t,n){t.exports='.all{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    background-image: url("http://localhost:3000/images/sec01_background.jpg");\n    height: 800px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}\n.container{\n    height: 500px;\n    position: absolute;\n    background-color: white;\n    margin-top: 70px;\n    width: 500px;\n}\n#registro{\n    padding-top: 50px\n}\n.custom-select{\n    margin-bottom: 20px\n}'},DXrv:function(t,n){t.exports='.all{\n    background-image: url("http://localhost:3000/images/sec01_background.jpg");\n    height: 1000px;\n}\n\n.card{\n    background-color: rgba(0, 255, 255, 0);\n}\n\n.ch-grid {\n\tmargin: 20px;\n\tpadding: 0;\n\tlist-style: none;\n\tdisplay: block;\n\ttext-align: center;\n    width: 100%;\n    padding-top: 50px\n}\n\n.ch-grid:after,\n.ch-item:before {\n\tcontent: \'\';\n    display: table;\n}\n\n.ch-grid:after {\n\tclear: both;\n}\n\n.ch-grid li {\n\twidth: 220px;\n\theight: 220px;\n\tdisplay: inline-block;\n\tmargin: 20px;\n}\n\n.ch-item {\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tposition: relative;\n\tcursor: default;\n\t-webkit-box-shadow: \n\t\tinset 0 0 0 16px rgba(255,255,255,0.6),\n\t\t0 1px 2px rgba(0,0,0,0.1);\n\t        box-shadow: \n\t\tinset 0 0 0 16px rgba(255,255,255,0.6),\n\t\t0 1px 2px rgba(0,0,0,0.1);\n\t-webkit-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.ch-img-1 { \n    background-image: url("http://localhost:3000/images/fixmob.jpg");\n    background-size: 350px;\n}\n\n.ch-img-2 { \n    background-image: url("http://localhost:3000/images/fixlap.jpg");\n    background-size: 300px;\n}\n\n.ch-img-3 { \n    background-image: url("http://localhost:3000/images/fixconsole.jpg");\n    background-size: 300px;\n}\n\n.ch-info {\n\tposition: absolute;\n\tbackground: rgba(63,147,147, 0.8);\n\twidth: inherit;\n\theight: inherit;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\topacity: 0;\n\t-webkit-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n\t-webkit-transform: scale(0);\n\t        transform: scale(0);\n}\n\n.ch-info h3 {\n\tcolor: #fff;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\tfont-size: 22px;\n\tmargin: 0 30px;\n\tpadding: 45px 0 0 0;\n\theight: 140px;\n\tfont-family: \'Open Sans\', Arial, sans-serif;\n\ttext-shadow: \n\t\t0 0 1px #fff, \n\t\t0 1px 2px rgba(0,0,0,0.3);\n}\n\n.ch-info p {\n\tcolor: #fff;\n\tpadding: 10px 5px;\n\tfont-style: italic;\n\tmargin: 0 30px;\n\tfont-size: 12px;\n\tborder-top: 1px solid rgba(255,255,255,0.5);\n\topacity: 0;\n\t-webkit-transition: all 1s ease-in-out 0.4s;\n\ttransition: all 1s ease-in-out 0.4s;\n}\n\n.ch-info p a {\n\tdisplay: block;\n\tcolor: rgba(255,255,255,0.7);\n\tfont-style: normal;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\tfont-size: 9px;\n\tletter-spacing: 1px;\n\tpadding-top: 4px;\n\tfont-family: \'Open Sans\', Arial, sans-serif;\n}\n\n.ch-info p a:hover {\n\tcolor: rgba(255,242,34, 0.8);\n}\n\n.ch-item:hover {\n\t-webkit-box-shadow: \n\t\tinset 0 0 0 1px rgba(255,255,255,0.1),\n\t\t0 1px 2px rgba(0,0,0,0.1);\n\t        box-shadow: \n\t\tinset 0 0 0 1px rgba(255,255,255,0.1),\n\t\t0 1px 2px rgba(0,0,0,0.1);\n}\n\n.ch-item:hover .ch-info {\n\t-webkit-transform: scale(1);\n\t        transform: scale(1);\n\topacity: 1;\n}\n\n.ch-item:hover .ch-info p {\n\topacity: 1;\n}\n\n.request{\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tmargin-left: 90px;\n\twidth: 1100px;\n\theight: 350px;\n\tbackground-color: #fff\n}\n'},EXx9:function(t,n){t.exports='<div class="all">\n</div>'},Eqig:function(t,n){t.exports="<p>\n  all-services works!\n</p>\n"},Jnfr:function(t,n){function e(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="Jnfr"},MyHe:function(t,n){t.exports='.all{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    height: 574px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center\n}   \n\n.homeimage{\n    position: absolute;\n    padding-top: 300px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-image: url("http://localhost:3000/images/happy2.jpg");\n    width: 100%;\n    height: 575px;\n    -webkit-filter: brightness(70%);\n            filter: brightness(70%);\n    \n}   \n\n.text\n{\n    color: floralwhite;\n}   \n\n.card{\n    background-image: url("http://localhost:3000/images/sec01_background.jpg");\n    height: 350px;\n}\n\n'},"Nc+G":function(t,n){t.exports=""},XrrH:function(t,n){t.exports='<div class="all">\n<div class="card">\n    <ul class="ch-grid">\n        <li>\n        <div class="ch-item ch-img-1">\n            <div class="ch-info">\n                <h3>Celulares</h3>\n                <p>Costo <a href="http://drbl.in/eOPF">Seg\xfan servicio</a></p>\n            </div>\n        </div>\n    </li>\n    <li>\n        <div class="ch-item ch-img-2">\n            <div class="ch-info">\n                <h3>Laptops</h3>\n                <p>Costo<a href="http://drbl.in/eKMi">Seg\xfan servicio</a></p>\n            </div>\n        </div>\n    </li>\n    <li>\n        <div class="ch-item ch-img-3">\n            <div class="ch-info">\n                <h3>Consolas</h3>\n                <p>Costo<a href="http://drbl.in/ekhp">Seg\xfan servicio</a></p>\n            </div>\n        </div>\n    </li>\n</ul>\n</div>\n<form class="request">\n    <img width="400px" height="350px" src="http://localhost:3000/images/suposemap.png" alt="map">\n    <div class="form">\n    <input [(ngModel)]="newUser.name" id="name" type="text" class="form-control" name="name" placeholder="Name">\n    <input [(ngModel)]="newUser.name" id="name" type="text" class="form-control" name="name" placeholder="Name">\n    <input [(ngModel)]="newUser.name" id="name" type="text" class="form-control" name="name" placeholder="Name">\n    <input [(ngModel)]="newUser.name" id="name" type="data" class="form-control" name="name" placeholder="Name">\n    </div>\n</form>\n</div>\n\n'},ljLh:function(t,n){t.exports='<div class="all">\n    <figure class="homeimage">\n        <div class="text">\n            <h1>No pierdas tiempo</h1>\n            <h2>Contrata t\xe9cnicos para reparar tus dispositivos</h2>\n            <h2>en donde est\xe9s, de forma f\xe1cil y segura  </h2>\n        </div>\n    </figure>\n</div>\n<div class="card">\n\n</div>'},okgc:function(t,n){t.exports='.padre{\n    position: relative;\n    background-image: url("http://localhost:3000/images/fondo3.png");\n    background-size: 150px 150px;\n    height: 150px;\n    margin-bottom: 0%\n}\n\n.marca{\n    position:relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-left: 250px;\n    padding-bottom: -20px\n}\n\n.navbar{\n    background-color: rgba(66, 72, 73, 0);\n    color: white;\n    margin-bottom: -70px;\n    z-index: 1;\n    font-size: 150%\n}\n\nh2{\n    font-size: 40px\n}\n\nul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style: none;\n}\n\nli{\n    margin-right: 100px\n}'},qGi7:function(t,n){t.exports='<section>\n<div class="all">\n  <div class="container-fluid">\n  <h2>Bienvenido a iFix</h2>\n\n  <input class="form-control" type="text" placeholder="example@gmail.com" [(ngModel)]="user.email">\n  <input class="form-control" type="password" placeholder="Password" [(ngModel)]="user.password">\n  <button class="btn btn-primary btn-lg btn-block" (click)="login()" >Login!</button>\n  </div>\n</div>\n</section>\n\n'},x35b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("WT6e"),i=e("4PVY"),r=e("OE0E"),a=e("NOoU"),s=e("bfOx"),c=e("7DMc"),l=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},p=function(){function t(){this.title="app"}return t=l([Object(o.n)({selector:"app-root",template:e("5xMp"),styles:[e("okgc")]})],t)}(),f=(e("owTz"),e("xgm2"),e("MDfR"),{production:!0,baseURL:""}),d=e("YaPU"),u=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},h=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},g=function(){function t(t){this.http=t,this.BASE_URL=f.baseURL}return t.prototype.signUp=function(t){return this.http.post(this.BASE_URL+"/signup",t).map(function(t){return t.json()}).catch(function(t){return alert(JSON.parse(t._body).message),d.a.throw(t)})},t.prototype.login=function(t){return this.http.post(this.BASE_URL+"/login",t,{withCredentials:!0}).map(function(t){return t.json()}).map(function(n){return localStorage.setItem("user",JSON.stringify(t)),t}).catch(function(t){return d.a.throw(t)})},t=u([Object(o.A)(),h("design:paramtypes",[a.a])],t)}(),m=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},b=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},x=function(){function t(t,n){this.service=t,this.router=n,this.user={}}return t.prototype.login=function(){var t=this;this.service.login(this.user).subscribe(function(n){t.router.navigate(["users"])})},t.prototype.ngOnInit=function(){localStorage.getItem("user")&&this.router.navigate(["users"])},t=m([Object(o.n)({selector:"app-login",template:e("qGi7"),styles:[e("4I9T")]}),b("design:paramtypes",[g,s.a])],t)}(),y=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},v=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},w=function(){function t(t,n){this.service=t,this.router=n,this.reparar=!1,this.reparo=!1,this.newUser={}}return t.prototype.signUp=function(){var t=this;this.service.signUp(this.newUser).subscribe(function(n){t.router.navigate(["login"])})},t.prototype.ngOnInit=function(){},t=y([Object(o.n)({selector:"app-signup",template:e("B8Qc"),styles:[e("Bhxg")]}),v("design:paramtypes",[g,s.a])],t)}(),k=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},j=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},R=function(){function t(){}return t.prototype.ngOnInit=function(){},t=k([Object(o.n)({selector:"app-profile",template:e("EXx9"),styles:[e("1kto")]}),j("design:paramtypes",[])],t)}(),O=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},_=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},U=function(){function t(){}return t.prototype.ngOnInit=function(){},t=O([Object(o.n)({selector:"app-home",template:e("ljLh"),styles:[e("MyHe")]}),_("design:paramtypes",[])],t)}(),P=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},M=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},D=function(){function t(){}return t.prototype.ngOnInit=function(){},t=P([Object(o.n)({selector:"app-req-client",template:e("XrrH"),styles:[e("DXrv")]}),M("design:paramtypes",[])],t)}(),I=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},S=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},E=function(){function t(){}return t.prototype.ngOnInit=function(){},t=I([Object(o.n)({selector:"app-all-services",template:e("Eqig"),styles:[e("Nc+G")]}),S("design:paramtypes",[])],t)}(),N=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},z=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},C=function(){function t(){}return t.prototype.ngOnInit=function(){},t=N([Object(o.n)({selector:"app-chat",template:e("y5EM"),styles:[e("9rA2")]}),z("design:paramtypes",[])],t)}(),L=this&&this.__decorate||function(t,n,e,o){var i,r=arguments.length,a=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(n,e,a):i(n,e))||a);return r>3&&a&&Object.defineProperty(n,e,a),a},q=[{path:"",component:U},{path:"signup",component:w},{path:"login",component:x},{path:"profile",component:R},{path:"req-client",component:D},{path:"all-services",component:E},{path:"chat",component:C}],A=function(){function t(){}return t=L([Object(o.I)({declarations:[p,x,w,R,U,D,E,C],imports:[r.a,a.b,s.b.forRoot(q),c.a],providers:[g],bootstrap:[p]})],t)}();f.production&&Object(o._13)(),Object(i.a)().bootstrapModule(A).catch(function(t){return console.log(t)})},y5EM:function(t,n){t.exports="<p>\n  chat works!\n</p>\n"}},[0]);