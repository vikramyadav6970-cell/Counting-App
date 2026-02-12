let count=0;
document.getElementById("countp").innerText = count
document.getElementById("incre").addEventListener("click",increment)
function increment(){
    count++;
    document.getElementById("countp").innerText = count
}