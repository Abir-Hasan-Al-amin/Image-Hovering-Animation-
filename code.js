const hovs=document.querySelectorAll(".hov");
hovs.forEach(hov=>{
    hov.addEventListener("mouseenter",()=>{
        hov.childNodes[3].style.opacity=1;
    });
    hov.addEventListener("mouseleave",()=>{
        hov.childNodes[3].style.opacity=0;
    });
    hov.addEventListener("mousemove", e =>{
        hov.childNodes[3].style.left=e.x+'px';
    });
});