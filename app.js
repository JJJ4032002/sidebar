const oubutton = document.body.querySelector("#button");
const sidebar = document.body.querySelector("#container");
const inbutton = document.body.querySelector("#btn");

oubutton.addEventListener("click",()=>{
    if(sidebar.classList.contains("show-sidebar") && (document.body.style.width <= "600px") ){
    oubutton.style.display = "none";
     sidebar.classList.remove("show-sidebar");
     sidebar.style.transform = "translate(0%)";
    }
    else if((sidebar.classList.contains("show-sidebar"))){
        sidebar.classList.remove("show-sidebar");
     sidebar.style.transform = "translate(0%)";
    }
    else{
        sidebar.classList.add("show-sidebar");
        sidebar.style.transform = null;
    }
});

inbutton.addEventListener("click",()=>{
    sidebar.classList.add("show-sidebar");
     sidebar.style.transform = null;
     oubutton.style.display = "unset";
     
     

})