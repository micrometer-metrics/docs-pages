!function(){var e=document.getElementById("page-search-script").dataset,t=algoliasearch(e.appId,e.apiKey);let l=null;e=instantsearch({indexName:e.indexName,searchClient:t});let c;t=instantsearch.connectors.connectInfiniteHits((e,t)=>{const{hits:n,showMore:a,widgetParams:r}=e;var i=r["container"];c=e,l=null,t?(t=document.createElement("div"),i.appendChild(document.createElement("ul")),i.appendChild(t)):(t=[...n],i.querySelector("#page-showmore")&&i.removeChild(i.querySelector("#page-showmore")),i.querySelector("#page-nomore")&&i.removeChild(i.querySelector("#page-nomore")),e=e.results.nbHits,0===n.length?(i.querySelector("ul").innerHTML='<li class="no-result">No result</li>',document.querySelector("#page-counter").style.display="none"):(document.querySelector("#page-counter").innerHTML=`<strong>${e}</strong> result${1<e?"s":""} found`,document.querySelector("#page-counter").style.display="block",i.querySelector("ul").innerHTML=t.map(n=>{let e="",t="";var a;return n.content&&(e=`<p class="hit-description">
                  ${instantsearch.snippet({hit:n,attribute:"content"})}
                </p>`),n.breadcrumbs&&(t=`<div class="hit-breadcrumbs">
                  ${n.breadcrumbs.map(e=>{return`<span>${e.split("|")[0]}</span>`}).join(" > ")}
                </div>`),a=Object.keys(n.hierarchy).map((e,t)=>0<t&&n?instantsearch.highlight({hit:n,attribute:"hierarchy."+e}):null).filter(e=>!!e).join(" - "),`<li>
                <a href="${n.url}" class="ais-Hits-item">
                  <div class="hit-name">
                    ${a}
                  </div>
                  ${t}
                  ${e}
                </a>
              </li>`}).join(""),c.isLastPage?((e=document.createElement("div")).setAttribute("id","page-nomore"),e.innerHTML="No more result",i.appendChild(e)):(t=document.createElement("div"),e=document.createElement("a"),t.setAttribute("id","page-showmore"),e.addEventListener("click",()=>(a(),!1)),e.innerHTML="Show more",t.appendChild(e),i.appendChild(t))))});const s=e=>{var t=document.querySelectorAll("#page-hits>ul>li>a");t[l]&&(t[l].classList.remove("selected"),l=null),t[e]&&(t[e].classList.add("selected"),l=e),l&&t[l].scrollIntoView()},o=document.createElement("input");var n=instantsearch.connectors.connectSearchBox((e,t)=>{const{query:n,refine:a,clear:r,isSearchStalled:i,widgetParams:c}=e;t&&(o.classList.add("ais-SearchBox-input"),o.placeholder="Search in all Spring Documentation",(e=document.createElement("span")).textContent="Loading...",(t=document.createElement("button")).classList.add("ais-SearchBox-reset"),t.innerHTML='<svg class="ais-SearchBox-resetIcon" viewBox="0 0 20 20" width="10" height="10" aria-hidden="true"><path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path></svg>',o.addEventListener("keydown",e=>{switch(e.keyCode){case 40:e.preventDefault(),null===l?s(0):s(l+1);break;case 38:e.preventDefault(),null===l&&s(0),s(Math.max(l-1,0));break;case 13:e.preventDefault(),null!==l&&(t=l,(n=document.querySelectorAll("#page-hits>ul>li>a"))[t])&&n[t].click();break;case 9:e.preventDefault()}var t,n}),o.addEventListener("input",e=>{a(e.target.value)}),t.addEventListener("click",()=>{r()}),c.container.appendChild(o),c.container.appendChild(e),c.container.appendChild(t)),c.container.querySelector("input").value=n,c.container.querySelector("span").hidden=!i});e.addWidgets([instantsearch.widgets.configure({facetFilters:["isLatestVersion:true"],attributesToSnippet:["content"],attributesToHighlight:["hierarchy"],distinct:!0}),n({container:document.querySelector("#page-searchbox")}),t({container:document.querySelector("#page-hits")})]),e.start(),o.focus()}();