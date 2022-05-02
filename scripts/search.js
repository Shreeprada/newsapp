// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js";
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
document.getElementById("navbar").innerHTML=navbar();
import {append,appendnews} from "../components/fetch.js";
let data=JSON.parse(localStorage.getItem("news1"));
append(data);
document.getElementById("search_input").addEventListener("keydown",search);