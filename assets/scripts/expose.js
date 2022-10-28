// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

const selectElement = document.getElementById('horn-select');

selectElement.addEventListener('change', (event) => {
  const elem = document.getElementById("expose");
  const elem1 = elem.getElementsByTagName("img");
  const elem2 = document.getElementsByClassName("hidden");
  const jsConfetti = new JSConfetti();
  if(event.target.value == 'car-horn'){
    elem1[0].src = "assets/images/car-horn.svg";
    elem2[0].src = "assets/audio/car-horn.mp3";
  }
  else if(event.target.value == 'air-horn'){
    elem1[0].src = "assets/images/air-horn.svg";
    elem2[0].src = "assets/audio/air-horn.mp3";
  }
  else if(event.target.value == 'party-horn'){
    elem1[0].src = "assets/images/party-horn.svg";
    elem2[0].src = "assets/audio/party-horn.mp3";
  }
  const elem3 = document.getElementById("volume");
  const elem4 = document.getElementsByTagName("button");
  elem4[0].addEventListener('click',function(){
    if(elem3.value == 0){
      elem1[1].src = "assets/icons/volume-level-0.svg";
    }
    else if(elem3.value >= 1 && elem3.value < 33){
      elem1[1].src = "assets/icons/volume-level-1.svg";
    }
    else if(elem3.value >= 33 && elem3.value < 67){
      elem1[1].src = "assets/icons/volume-level-2.svg";
    }
    else if(elem3.value >= 67 && elem3.value <= 100){
      elem1[1].src = "assets/icons/volume-level-3.svg";
    }
    if(event.target.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
    elem2[0].volume = (elem3.value)/100;
    elem2[0].play();
  })
});