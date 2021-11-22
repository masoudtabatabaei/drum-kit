window.addEventListener("keydown" , function(e){
    let key = document.querySelector(".key[data-key='"+e.keyCode+"']");
    key.classList.add("pressed");
       
    let audio = new Audio(key.dataset.src);
    audio.play();

    setTimeout(() => {
        key.classList.remove("pressed");
    }, 250);
});