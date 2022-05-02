// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js";
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
document.getElementById("navbar").innerHTML=navbar();
import {Csearch,append,search,appendnews} from "../components/fetch.js";
let main=async (id)=>{
    let data=await Csearch(id);
    console.log(data);
    append(data);
    }
let india=document.getElementById("in");
// console.log(india.id);
india.addEventListener("click",function(){
    main(this.id);
});
main("in");

 let china=document.getElementById("ch");
 china.addEventListener("click",function(){
     main(this.id);
 });
 let us=document.getElementById("us");
 us.addEventListener("click",function(){
     main(this.id);
 });
 let uk=document.getElementById("uk");
 uk.addEventListener("click",function(){
     main(this.id);
 });
 let nz=document.getElementById("nz");
 nz.addEventListener("click",function(){
     main(this.id);
 });
document.getElementById("search_input").addEventListener("keydown",search);

