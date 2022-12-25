// this is button press
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var x = 0; x < numberOfButtons; x++) {
  document.querySelectorAll(".drum")[x].addEventListener("click", function() {

        var buttonSound = this.innerHTML;
        makeSound(buttonSound);
        buttonAnimation(buttonSound);

  });
        }
        //this is keypress
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

 function makeSound(key){
   switch (key) {
     case "w":
       var tom1 = new Audio('sounds/tom-1.mp3');
       tom1.play();
       break;

     case "a":
       var tom2 = new Audio('sounds/tom-2.mp3');
       tom2.play();
       break;

     case "s":
       var audio = new Audio('sounds/tom-3.mp3');
       audio.play();
       break;

     case "d":
       var audio = new Audio('sounds/tom-4.mp3');
       audio.play();
       break;

     case "j":
       var audio = new Audio('sounds/snare.mp3');
       audio.play();
       break;

     case "k":
       var audio = new Audio('sounds/crash.mp3');
       audio.play();
       break;

     case "l":
       var audio = new Audio('sounds/kick-bass.mp3');
       audio.play();
       break;

     default:

   }
 }


function buttonAnimation (currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100)

}
