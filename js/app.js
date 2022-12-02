let openBtn = document.getElementById("modal-btn");
let closeBtn = document.getElementById("close-btn");
let modal = document.getElementById("modal-overly");

openBtn.addEventListener ('click', function(){
    modal.style.visibility = "visible";
})

closeBtn.addEventListener ('click', function(){
    modal.style.visibility = "hidden";
})
