window.addEventListener("load", function(){
    var boton = document.getElementById("segundo");
    boton.addEventListener("click", function () {

        setInterval(color, 3000);
    });

    function color(){ 
            document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        }
});
    
