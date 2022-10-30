// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  window.addEventListener('load',function(){
    const voices = window.speechSynthesis;
    voices.addEventListener('voiceschanged', () => {
      let voice_list = speechSynthesis.getVoices();
      let drop_down_list = document.getElementById("voice-select");
      const size1 = voice_list.length;
      for(let i = 0; i < size1; ++i){
        drop_down_list[drop_down_list.length] = new Option(voice_list[i].name);
      }
      const the_button = document.getElementsByTagName("button");
      the_button[0].addEventListener('click',function(){
        let monologue = document.getElementById("text-to-speak").value;
        const utterThis = new SpeechSynthesisUtterance(monologue);
        let idx = drop_down_list.selectedIndex;
        let the_voice = voice_list[idx - 1];
        utterThis.voice = the_voice;
        const image = document.getElementsByTagName("img");
        voices.speak(utterThis);
        utterThis.addEventListener('start', () => {image[0].src = "assets/images/smiling-open.png"})
        utterThis.addEventListener('end', () => {image[0].src = "assets/images/smiling.png"})
      })
    }) 
  })
}