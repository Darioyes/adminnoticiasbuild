import"./chunk-ZL4UPKTS.js";import{a as h}from"./chunk-S3PDG7CB.js";import"./chunk-2PPVBH7W.js";import{a as I}from"./chunk-SVQ25E35.js";import"./chunk-CIC5IFOZ.js";import{a as V}from"./chunk-P3L3KALH.js";import"./chunk-T23ZY6V2.js";import"./chunk-IXWLID5M.js";import{Y as F}from"./chunk-TGWLULYN.js";import{$a as y,Ca as c,Ta as m,Ua as v,Va as S,W as b,Xa as f,_ as N,_a as g,ab as x,bb as P,cb as o,db as a,eb as u,fb as C,ga as O,ha as p,ia as d,lb as w,mb as _,rb as r,sb as D,tb as M,ub as T,wb as E,xb as k}from"./chunk-6LMFFRUR.js";var A=(e,n)=>n.id,j=()=>[F,h,import("./chunk-B4QC4KZQ.js").then(e=>e.DetailNewsComponent),import("./chunk-DQORFCUF.js").then(e=>e.NewNewsComponent)],$=e=>({"active-page":e});function z(e,n){e&1&&u(0,"app-title",1)}function G(e,n){if(e&1&&u(0,"app-title",6),e&2){let t=_(2);f("title",t.news==null?null:t.news.message)}}function q(e,n){e&1&&r(0," Si ")}function B(e,n){e&1&&r(0," No ")}function J(e,n){e&1&&r(0," Si ")}function L(e,n){e&1&&r(0," No ")}function W(e,n){if(e&1){let t=C();o(0,"tr",12),w("click",function(){let i=p(t).$implicit,s=_(3);return d(s.getId(i.id))}),o(1,"td"),r(2),a(),o(3,"td"),r(4),a(),o(5,"td"),m(6,q,1,0)(7,B,1,0),a(),o(8,"td"),m(9,J,1,0)(10,L,1,0),a()()}if(e&2){let t=n.$implicit;c(2),M(" ",t.title," "),c(2),M(" ",t.content," "),c(2),g(t.featured===1?6:7),c(3),g(t.visible===1?9:10)}}function H(e,n){e&1&&(o(0,"tr")(1,"td",13)(2,"p"),r(3,"No hay noticias"),a()()())}function K(e,n){if(e&1&&x(0,W,11,4,"tr",null,A,!1,H,4,0,"tr"),e&2){let t=_(2);P(t.news.data.data)}}function Q(e,n){e&1&&(o(0,"tr")(1,"td",13),r(2," Error al buscar la informaci\xF3n "),a()())}function R(e,n){if(e&1){let t=C();o(0,"a",12),w("click",function(){p(t);let i=_(3);return d(i.pagination(i.news.data.prev_page_url))}),r(1,"Anterior"),a()}}function U(e,n){if(e&1){let t=C();o(0,"a",12),w("click",function(){p(t);let i=_(3);return d(i.pagination(i.news.data.next_page_url))}),r(1,"Siguiente"),a()}}function X(e,n){if(e&1){let t=C();o(0,"a",15),w("click",function(){p(t);let i=_().$implicit,s=_(2);return d(s.pagination(i.url))}),r(1),a()}if(e&2){let t=_().$implicit;f("ngClass",k(2,$,t.active)),c(),D(t.label)}}function Y(e,n){if(e&1&&m(0,R,2,0,"a")(1,U,2,0,"a")(2,X,2,4,"a",14),e&2){let t=n.$implicit;g(t.label==="&laquo; Anterior"?0:t.label==="Siguiente &raquo;"?1:2)}}function Z(e,n){if(e&1){let t=C();o(0,"dialog",2)(1,"app-detail-news",3),w("modalClose",function(i){p(t);let s=_();return d(s.closeModal(i))}),a()(),o(2,"dialog",2)(3,"app-new-news",4),w("openModalNews",function(i){p(t);let s=_();return d(s.closeModalNews(i))}),a()(),o(4,"div",5),m(5,G,1,1,"app-title",6),a(),o(6,"div",7)(7,"table")(8,"thead")(9,"tr")(10,"th"),r(11," T\xEDtulo "),a(),o(12,"th"),r(13," Contenido "),a(),o(14,"th"),r(15," Destacado "),a(),o(16,"th"),r(17," Visible "),a()()(),o(18,"tbody"),m(19,K,3,1)(20,Q,3,0,"tr"),a()()(),o(21,"div",8)(22,"div",9),x(23,Y,3,1,null,null,y),a(),o(25,"div",10)(26,"p"),r(27),a()(),o(28,"div")(29,"button",11),w("click",function(){p(t);let i=_();return d(i.openModalNewNews())}),r(30,"Nueva noticia"),a()()()}if(e&2){let t=_();f("open",t.openModal),c(),f("newsId",t.newsId)("activeGet",t.activeGet),c(),f("open",t.openModalNews),c(3),g((t.news==null?null:t.news.error)===!1?5:-1),c(14),g((t.news==null?null:t.news.error)===!1?19:20),c(4),P(t.news==null||t.news.data==null?null:t.news.data.links),c(4),T("",t.news==null||t.news.data==null?null:t.news.data.to," / ",t.news==null||t.news.data==null?null:t.news.data.total," ")}}function ee(e,n){e&1&&(o(0,"p",16),r(1,"Error en la petici\xF3n"),a())}function te(e,n){e&1&&u(0,"app-loading",17)}function ne(e,n){if(e&1&&m(0,ee,2,0,"p",16)(1,te,1,0,"app-loading",17),e&2){let t=_();g(t.errorNews?0:1)}}var ge=(()=>{let n=class n{constructor(){this.newsServices=b(V),this.modalnewNews=!1,this.openModal=!1,this.openModalNews=!1}ngOnInit(){this.getAllnews()}ngOnChanges(){this.getAllnews()}getAllnews(){this.newsServices.getnews().subscribe({next:l=>{this.news=l},error:l=>{console.log(l),this.errorNews=l.message.message},complete:()=>{console.log("complete")}})}pagination(l){this.newsServices.getPagination(l).subscribe({next:i=>{this.news=i},error:i=>{console.log(i)},complete:()=>{console.log("complete")}})}getId(l){this.newsId=l,this.activeGet=!0,this.openModal=!0,this.newsServices.setModalActive(!0)}openModalNewNews(){this.openModalNews=!0,this.newsServices.setModalActive(!0)}closeModal(l){this.openModal=l}closeModalNews(l){this.openModalNews=l,this.getAllnews()}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=N({type:n,selectors:[["app-news-page"]],outputs:{openModal:"openModal",openModalNews:"openModalNews"},standalone:!0,features:[O,E],decls:6,vars:2,consts:[[1,"conteiner-news"],["title","Buscando Noticias"],[1,"conteiner-news__dialog",3,"open"],[3,"modalClose","newsId","activeGet"],[3,"openModalNews"],[1,"conteiner-news__title"],[3,"title"],[1,"conteiner-news__table"],[1,"conteiner-news__pagination"],[1,"container-pagination__links"],[1,"container-pagination__page"],[1,"btn","btn-success",3,"click"],[3,"click"],["colspan","4"],[3,"ngClass"],[3,"click","ngClass"],[1,"alert","alert-error"],[1,"table-loading"]],template:function(i,s){i&1&&(o(0,"section",0),m(1,z,1,0,"app-title",1)(2,Z,31,8)(3,ne,2,1),v(4,2,j,null,3),a()),i&2&&(c(),g(s.news?-1:1),c(3),S((s.news==null?null:s.news.error)===!1))},dependencies:[h,I],styles:[".conteiner-news[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}.conteiner-news__dialog[_ngcontent-%COMP%]{width:80%;height:80%;border:none;box-shadow:none}.conteiner-news__title[_ngcontent-%COMP%]{width:100%;padding:10px}.conteiner-news__table[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-evenly}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;height:100%;border-collapse:collapse;border-top:1px solid rgba(0,0,0,.2823529412);border-bottom:1px solid rgba(0,0,0,.2823529412);text-align:center;color:#000;background:#fff;overflow:hidden;overflow-y:scroll;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:#000000 #ffffff}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#fff2e6;border-bottom:1px solid rgba(0,0,0,.2823529412)}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:600}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:#96e9aa}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#47cbef;font-weight:700;cursor:pointer}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;font-size:1rem;font-weight:400;font-size:1.1rem}.conteiner-news__table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .table-loading[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%}.conteiner-news__pagination[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:row;gap:10px}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:600;color:#47cbef;cursor:pointer}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#2e9cb5}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__links[_ngcontent-%COMP%]   .active-page[_ngcontent-%COMP%]{border-bottom:2px solid #b31d15}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__page[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:row}.conteiner-news__pagination[_ngcontent-%COMP%]   .container-pagination__page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:5px;font-size:1.2rem;font-weight:600;color:#ff9c03}"]});let e=n;return e})();export{ge as NewsPageComponent};
