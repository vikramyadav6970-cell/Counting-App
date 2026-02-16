let count=0

let countp=document.getElementById("countp")

let button=document.getElementById("button")

function increment(){
    count++
    countp.innerHTML=count
}

button.addEventListener("click",increment)