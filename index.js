let count=0

let sum=0

let countp=document.getElementById("countp")

let button=document.getElementById("button")

let savep=document.getElementById("save-txt")

let saveb=document.getElementById("save-btn")

let restartb=document.getElementById("restart-btn")

let totalb=document.getElementById("total-btn")

let totalp=document.getElementById("total-txt")

function increment(){
    count++
    countp.innerHTML=count
}

function Save(){
    savep.append(`${count} - `)
    sum+=count
}

function Restart(){
    count = 0
    countp.innerHTML=count
}

function Total(){
    totalp.append(`${sum}`)
    sum=0
}

button.addEventListener("click",increment)

saveb.addEventListener("click",Save)

restartb.addEventListener("click",Restart)

totalb.addEventListener("click",Total)