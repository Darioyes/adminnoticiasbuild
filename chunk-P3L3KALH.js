import{a as u}from"./chunk-T23ZY6V2.js";import{a as n,b as d}from"./chunk-IXWLID5M.js";import{Q as h,W as l,j as c,o as p,z as s}from"./chunk-6LMFFRUR.js";var E=(()=>{let o=class o{constructor(){this.http=l(d),this.baseurl=u.apiUrlBase+"api/",this.modalSubject=new c}sendError(e){let t="Algo ha ocurrido mal, por favor intentalo de nuevo",r="true";return e.status===400&&e.error&&e.error.errors?(t=e.error.message,r=e.error.errorNews):(t=e.error,r=e.error),p(()=>({message:t,errors:e.error.errors,errorNews:r}))}setModalActive(e){this.modalSubject.next(e)}getModalActive(){return this.modalSubject.asObservable()}getnews(e){let t="";e?t=this.baseurl+"news/"+e:t=this.baseurl+"news";let r=new n({Accept:"application/json"});return this.http.get(t,{headers:r}).pipe(s(this.sendError))}newsNew(e){let t=this.baseurl+"news",r=new n({Accept:"application/json"});return this.http.post(t,e,{headers:r}).pipe(s(this.sendError))}modifyNews(e,t){let r=this.baseurl+"news2/"+t,a=new n({Accept:"application/json"});return this.http.post(r,e,{headers:a}).pipe(s(this.sendError))}deleteNews(e){let t=this.baseurl+"news/"+e,r=new n({Accept:"application/json"});return this.http.delete(t,{headers:r}).pipe(s(this.sendError))}getPagination(e){let t=e,r=new n({Accept:"application/json"});return this.http.get(t,{headers:r}).pipe(s(this.sendError))}createArticle(e){let t=this.baseurl+"articles",r=new n({Accept:"application/json"});return this.http.post(t,e,{headers:r}).pipe(s(this.sendError))}modifyArticle(e,t){let r=this.baseurl+"articles2/"+t,a=new n({Accept:"application/json"});return this.http.post(r,e,{headers:a}).pipe(s(this.sendError))}getArticle(e){let t=this.baseurl+"articles/"+e,r=new n({Accept:"application/json"});return this.http.get(t,{headers:r}).pipe(s(this.sendError))}deleteArticle(e){let t=this.baseurl+"articles/"+e,r=new n({Accept:"application/json"});return this.http.delete(t,{headers:r}).pipe(s(this.sendError))}deleteComment(e){let t=this.baseurl+"comments/"+e,r=new n({Accept:"application/json"});return this.http.delete(t,{headers:r}).pipe(s(this.sendError))}};o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=h({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();export{E as a};
