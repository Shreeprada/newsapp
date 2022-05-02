// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js";
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
document.getElementById("navbar").innerHTML=navbar();
import {Csearch,append,search,appendnews} from "../components/fetch.js";
let main=async (ID)=>{
    let data=await Csearch(ID);
    console.log(data);
    append(data);
    }
let india=document.getElementById("in");
// console.log(india.id);
india.addEventListener("click",main(india.id));
main("in");

 let china=document.getElementById("ch");
 china.addEventListener("click",main(china.id));
 let us=document.getElementById("us");
 us.addEventListener("click",main(us.id));
 let uk=document.getElementById("uk");
 uk.addEventListener("click",main(uk.id));
 let nz=document.getElementById("nz");
 nz.addEventListener("click",main(nz.id));
document.getElementById("search_input").addEventListener("keydown",search);

