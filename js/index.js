let countdown;
let sec=0;
let min=0;
let pCount=document.createElement("p");
function inizioGioco(){
    let btnStart=document.getElementById("btnStart");
    btnStart.style.display="none";
    pCount.classList.add("fs-1")
    pCount.classList.add("text-primary")
    document.getElementById("cont").append(pCount);
    countdown=setInterval(rovescia,1000)  
}

function rovescia(){
    let conto;
    if(sec<5)
    {
        conto=5-sec
        pCount.innerHTML=conto;
        sec++;
    }else{
        clearInterval(countdown);
        countdown=null;
        pCount.style.display="none";
    }
}