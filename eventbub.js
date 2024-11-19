//event bubling

const G=document.getElementById("grand");
G.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log("grand parent clicked");
        G.style.backgroundColor="red"
},1000)
    
},false)

const P=document.getElementById("parent");
P.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log("grand parent clicked");
        P.style.backgroundColor="green"
},2000)
    
},false)

const C=document.getElementById("child");
C.addEventListener("click",(e)=>{
    setTimeout(()=>{
        console.log("grand parent clicked");
        C.style.backgroundColor="blue"
},3000)
    
},false)