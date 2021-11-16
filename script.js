window.addEventListener("keydown" , function(e){
    let key = document.querySelector(".key[data-key='"+e.keyCode+"']");
       
    let audio = new Audio(key.dataset.src);
    audio.play(); 
});