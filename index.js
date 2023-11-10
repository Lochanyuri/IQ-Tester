const menubox = document.querySelector(".menubox")
const menuboximg = document.querySelector(".menubox img")
const menubar = document.querySelector(".menubar")
const clickaudio = document.querySelector("#clickaudio")

let menuboxindex = 0;
menubox.addEventListener("click", a => {
clickaudio.play()

menuboxindex++;
if(menuboxindex === 1){
menubar.style.display = "flex";
menubox.style.transform = "rotate(90deg)"

}

if(menuboxindex === 2){
  menubar.style.display = "none";
  menubox.style.transform = "rotate(0deg)"
  menuboxindex = '';
}

})

