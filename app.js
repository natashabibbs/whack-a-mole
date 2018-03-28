window.onload = function() {
    var dirt = document.getElementsByClassName("dirt");
    var sound = document.getElementById("sound");
    var grid = document.getElementById("dirt-box");

    for(let i = 0; i < dirt.length; i++){
        dirt[i].addEventListener("click", function(){
            if(dirt[i].innerHTML){
            sound.play();
            dirt[i].innerHTML = "";
            } else {
                console.log("Nothing is in there!");
            }
        })
    }

    function setMole(){
        var randie = Math.floor((Math.random() * dirt.length) + 0);
        var mole = document.createElement("div")
        mole.setAttribute("class", "mole");
        if(dirt[randie].innerHTML === ""){
            dirt[randie].appendChild(mole);
        } else {
            console.log("There are too many moles");
        }
    }
    setInterval(setMole, 3000);
  };