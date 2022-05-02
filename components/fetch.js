let Csearch=async (ID)=>{
    console.log("id:",ID);
let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${ID}`);
let data=await res.json();
//console.log("data:",data.articles);
return data.articles;
}
let search=async (e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("search_input").value;
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
        let data=await res.json();
        console.log(data.articles);
        localStorage.setItem("news1",JSON.stringify(data.articles));
        window.location.href="search.html";
    }
}
let newsshow=(el)=>{
    localStorage.setItem("news",JSON.stringify(el));
    window.location.href="news.html";
}
let append=(data)=>{
    let div=document.getElementById("results");
        div.innerHTML=null;
    data.forEach(function(el){
        let news1=document.createElement("div");
        news1.setAttribute("class","news");
     news1.addEventListener("click",function(){
         newsshow(el);
     });
        let div1=document.createElement("div");
        let image=document.createElement("img");
        image.src=el.urlToImage;
        let heading=document.createElement("h3");
         heading.innerText=el.title;
         let des=document.createElement("p");
         des.innerText=el.description;
         div1.append(heading,des);
         news1.append(image,div1);
         div.append(news1);
    });
}
    let appendnews=(data)=>{
        let div=document.getElementById("detailed_news");
            div.innerHTML=null;
            let news1=document.createElement("div");
            news1.setAttribute("class","news");
            let div1=document.createElement("div");
            let image=document.createElement("img");
            image.src=data.urlToImage;
            let heading=document.createElement("h3");
             heading.innerText=data.title;
             let des=document.createElement("p");
             des.innerText=data.description;
             let con=document.createElement("p");
             con.innerText=data.content;
             div1.append(heading,des,con);
             news1.append(image,div1);
             div.append(news1);
}
export {Csearch,append,search,appendnews};