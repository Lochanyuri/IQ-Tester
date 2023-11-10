const characterintobox = document.querySelector(".characterintobox");
const charcter = document.querySelector("#charcter");
const blurbox = document.querySelector(".blurbox");
const schutlebox = document.querySelector(".schutlebox");
const questions = document.querySelector("#questions");

let allstorage = JSON.parse(localStorage.getItem("alldata")) || [];
schutlebox.innerHTML = `
  <button onclick="number(this)">25</button>

          <button onclick="number(this)">2</button>



          <button onclick="number(this)">6</button>

          <button onclick="number(this)">8</button>
                    <button onclick="number(this)">4</button>
          <button onclick="number(this)">9</button>
          <button onclick="number(this)">10</button>
           <button onclick="number(this)">21</button>
          <button onclick="number(this)">11</button>
                    <button onclick="number(this)">5</button>
          <button onclick="number(this)">17</button>
          <button onclick="number(this)">13</button>
          <button onclick="number(this)">14</button>
          <button onclick="number(this)">15</button>
          <button onclick="number(this)">16</button>
          <button onclick="number(this)">7</button>
          <button onclick="number(this)">18</button>
          <button onclick="number(this)">19</button>
                    <button onclick="number(this)">12</button>
                    <button onclick="number(this)">24</button>
          <button onclick="number(this)">20</button>
                   <button onclick="number(this)">3</button>
          <button onclick="number(this)">22</button>
          <button onclick="number(this)">23</button>

         <button onclick="number(this)">1</button>
`
let mistakes = 0;

 let minusofnumberbox = 25;
 function  number(box){
   let valueofnumber = box.innerHTML;
   if(valueofnumber == minusofnumberbox ){
 minusofnumberbox--;
 
 box.style.background = "green"
 box.style.color = "white"
   }
   else{
     box.style.background = "red"
     box.style.color = "white"
     mistakes++;
   }
   if(minusofnumberbox == 0){
     characterintobox.style.display = "flex"
  charcter.style.right = "0%"
  blurbox.style.display = "flex"
document.getElementById('charactervoice').src = "Naruto Shippuden OST III - Obito's Theme (HQ).mp3";
document.getElementById('charactervoice').play();
document.getElementById('cheterspeech').innerHTML = `You Mistake ${mistakes} times. Your Mistake Count Negative As Your IQ point.`
let data = {
ascendingmistake : '',
descendingmistake : mistakes,
  stage1 : '',
  ascending:"",
  descending: "successful",
  questionsmistake: '',
  stage2: '',
  clicked: '',
  iq:'',
}
allstorage.push(data)

localStorage.setItem("alldata",JSON.stringify(allstorage))

document.getElementById('cheterspeech').addEventListener("click", ( ) => {
  charcter.style.right = "-100%"
  blurbox.style.display = "none"
  characterintobox.style.display = "none"
document.getElementById('charactervoice').pause()
})
   }
   
   
 }
 let clickedindex = 0;
 
document.getElementById('nextbutton').addEventListener("click", ( ) => {
  document.querySelector(".herobox").style.display = "none"
  document.querySelector(".beforetest").style.display = "none"
  document.querySelector("#charcter").style.right = "0%"
  document.querySelector(".blurbox").style.right = "flex"
  document.querySelector(".gamemodecontainer").style.display = "flex"
  document.querySelector(".characterintobox").style.display = "flex"
  
})
setInterval(function() {
  if(allstorage.length > 0){
 if(allstorage[0].descending === "successful"){
  if(allstorage[0].clicked == 0){
  clickedindex++;
  
  allstorage[0].clicked = clickedindex;
document.getElementById("next").addEventListener("click", ( ) => {
   questions.innerHTML = "In Ascending Order"
   
   schutlebox.innerHTML = `


    <button onclick="acen(this)">19</button>
          <button onclick="acen(this)">13</button>
          <button onclick="acen(this)">6</button>
  <button onclick="acen(this)">25</button>
  
          <button onclick="acen(this)">8</button>
                    <button onclick="acen(this)">2</button>
                    
                    <button onclick="acen(this)">4</button>
          <button onclick="acen(this)">9</button>
          <button onclick="acen(this)">10</button>
           <button onclick="acen(this)">21</button>
          <button onclick="acen(this)">11</button>
                    <button onclick="acen(this)">15</button>
                    <button onclick="acen(this)">5</button>
          <button onclick="acen(this)">17</button>

          <button onclick="acen(this)">14</button>

          <button onclick="acen(this)">16</button>
          <button onclick="acen(this)">7</button>
          <button onclick="acen(this)">18</button>
      
             <button onclick="acen(this)">22</button>

                    <button onclick="acen(this)">24</button>
          <button onclick="acen(this)">20</button>
                              <button onclick="acen(this)">12</button>
                   <button onclick="acen(this)">3</button>
       
                   <button onclick="acen(this)">1</button>
          <button onclick="acen(this)">23</button>


`
 })
}
 

 }
}
}, 10);

let acenumber = 1;
let ascendingmistake = 0;
function acen(box){
  
  let touchnum = box.innerHTML;
  
  if(acenumber == touchnum){
    box.style.background = "green"
    box.style.color = "white"
    acenumber++;
     if(acenumber == 26){
            characterintobox.style.display = "flex"
  charcter.style.right = "0%"
  blurbox.style.display = "flex"
document.getElementById('charactervoice').src = "Naruto Shippuden OST III - Obito's Theme (HQ).mp3";
document.getElementById('charactervoice').play();
document.getElementById('cheterspeech').innerHTML = `You Mistake ${allstorage[0].ascendingmistake} times. Your Mistake Count Negative As Your IQ point.`
allstorage[0].ascending = "successful"
allstorage[0].stage1 = "successful"
localStorage.setItem("alldata",JSON.stringify(allstorage))
     }
  }
  else{
    box.style.background = "red"
    box.style.color = "white"
    ascendingmistake++;
    allstorage[0].ascendingmistake = ascendingmistake;
    localStorage.setItem("alldata",JSON.stringify(allstorage))
  }
  document.getElementById('cheterspeech').addEventListener("click", ( ) => {
  charcter.style.right = "-100%"
  blurbox.style.display = "none"
  characterintobox.style.display = "none"
document.getElementById('charactervoice').pause()
})
   
}
let nextindex = 0;
let next = document.getElementById('next');
next.addEventListener("click", ( ) => {
  nextindex++;
  if(nextindex == 2){
    location.reload();
  }
})

document.getElementById('cheterspeech').addEventListener("click", ( ) => {
  charcter.style.right = "-100%"
  characterintobox.style.display = "none"
  blurbox.style.display = "none"
})