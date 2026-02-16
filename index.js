let count=0

let countp=document.getElementById("countp")

let button=document.getElementById("button")

let savep=document.getElementById("save-txt")

let saveb=document.getElementById("save-btn")

let restartb=document.getElementById("restart-btn")

function increment(){
    count++
    countp.innerHTML=count
}

function Save(){
    savep.append(`${count} - `)
}

function Restart(){
    count = 0
    countp.innerHTML=count
}

button.addEventListener("click",increment)

saveb.addEventListener("click",Save)

restartb.addEventListener("click",Restart)