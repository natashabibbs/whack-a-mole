window.onload = function() {
    var dirt = document.getElementsByClassName("dirt");
    var sound = document.getElementById("sound");
    var grid = document.getElementById("dirt-box");
    var message1 = document.getElementById("message");
    var scoreDisplay = document.getElementById("scoreDisplay");
    var score = "0";

    for(let i = 0; i < dirt.length; i++){
        dirt[i].addEventListener("click", function(){
            if(dirt[i].innerHTML){
            sound.play();
            dirt[i].innerHTML = ""; 
            message1.innerHTML = "";
            score++;
            } else {
                message1.innerHTML = "Nothing is in there!";
            }
           
            scoreDisplay.innerHTML = "Score:" + score;
        })
    }

    function setMole(){
        var randie = Math.floor((Math.random() * dirt.length) + 0);
        var mole = document.createElement("div");
        mole.setAttribute("class", "mole");
        if(dirt[randie].innerHTML === ""){
            dirt[randie].appendChild(mole);
        } else {
            message1.innerHTML = "There are too many moles";
        }
    }
    
    setInterval(setMole, 3000);
  };