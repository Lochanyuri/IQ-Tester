let storage = JSON.parse(localStorage.getItem("alldata")) || [];

if(storage.length !== 0){
if(allstorage[0].clicked == 1){
  

let questionsandasnwer = [
  {
   question: '1. What is the product of 6 multiplied by 9?',
   answer: '54',
  },
  {
   question: '2. If a train travels at a speed of 60 km/h for 2.5 hours, how far does it travel?'
,
   answer: '150km',
  },
  {
   question: '3. A car travels at a speed of 50 km/h. How far will it travel in 4 hours?',
   answer: '200km',
  },
  {
   question: '4. The square of a number is 64. What is the number?',
   answer: '8',
  },
  {
   question: '5. How many continents are there on Earth?',
   answer: '7',
  },
  {
   question: '5. How many continents are there on Earth?',
   answer: '7',
  },
  ]
let questionsindex = 0;
if(storage.length !== 0){
if(storage[0].stage1 == "successful"){
document.querySelector(".herobox").style.display = "none"
  document.querySelector(".beforetest").style.display = "none"
  document.querySelector("#charcter").style.right = "0%"
  document.querySelector(".blurbox").style.right = "flex"
  document.querySelector(".gamemodecontainer").style.display = "flex"
  document.querySelector(".characterintobox").style.display = "flex"
document.querySelector(".staeg2").style.background = "#11f011"
document.getElementById('cheterspeech').addEventListener("click", ( ) => {
  charcter.style.right = "-100%"
  blurbox.style.display = "none"
  characterintobox.style.display = "none"
document.getElementById('charactervoice').pause()
})

charcter.src = "Polish_20231109_100528044.png"
characterintobox.style.display = "flex"
  charcter.style.right = "0%"
  blurbox.style.display = "flex"
  schutlebox.style.display = "flex"
  schutlebox.style.border = "none"
  schutlebox.style.alignItems = "center"
  schutlebox.style.flexDirection = "column"
  schutlebox.innerHTML = `
            <h3 id="questionsbox"> ${questionsandasnwer[questionsindex]. question
  }</h3>
          <div>
            <button onclick="yes(this)">1</button>
            <button onclick="yes(this)">2</button>
            <button onclick="yes(this)">3</button>
            <button onclick="yes(this)">54</button>
            <button onclick="yes(this)">8</button>
            <button onclick="yes(this)">6</button>
            <button onclick="yes(this)">150km</button>
            <button onclick="yes(this)">200km</button>
            <button onclick="yes(this)">7</button>

          </div>`
questions.innerHTML ="questions"
gamestage.innerHTML ="Stage Two"
}
 let questionmistakes = 0; 
function yes(box){
  let value = box.innerHTML;
  let answer = questionsandasnwer[questionsindex].answer;
  
  if(questionsindex < questionsandasnwer.length -1){
  questionsindex++;
  if(questionsindex == 4){
      storage[0].stage2 = "successful";
    localStorage.setItem("alldata",JSON.stringify(storage))
    }
  
    if(value ===  answer ){
    box.style.background = "green"
    box.style.color = "white"
    
  }
  else{
  questionmistakes++;
    box.style.background = "red"
    box.style.color = "white"
     storage[0].questionsmistake = questionmistakes;
    localStorage.setItem("alldata",JSON.stringify(storage))
  }
  document.getElementById('questionsbox').innerHTML = `${questionsandasnwer[questionsindex].question
  }`

  
  }
}
}
document.getElementById("next").addEventListener("click", ( ) => {
  location.reload()
})
let ascendingmistakepoint = storage[0].ascendingmistake;
let decendingmistakepoint = storage[0].descendingmistake;
let questionsmistakepoint = storage[0].questionsmistake;
if(ascendingmistakepoint == "" && decendingmistakepoint == 0 && questionsmistakepoint == 0 ){
  let min = 120;
let max = 190;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
if(storage[0].iq == ''){
storage[0].iq = randomNumber;
localStorage.setItem("alldata",JSON.stringify(storage))
}
}
if(ascendingmistakepoint > 0 ||decendingmistakepoint > 0 ){
  let min = 70;
let max = 110;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
if(storage[0].iq == ''){
storage[0].iq = randomNumber;
localStorage.setItem("alldata",JSON.stringify(storage))
}
}
}
}




if(storage.length !== 0){
  if(storage[0].stage1 == "successful" && storage[0].stage2 == "successful"){
    gamestage.innerHTML = "Certificate"
    questions.innerHTML = "You IQ Score"
    schutlebox.innerHTML = ""
    let h3 = document.createElement("h3")
    
    
    h3.innerHTML = `You received Your IQ Score And You Can Easily Download Certificate. You Get ${storage[0].iq} IQ And Look Like You Have Amazing IQ. Follow Us On Instagram. Our YouTube Channel Is Always Ready To Inform You To suggest Knowledge About IQ.This Test Is Just For Entertainment And Fun For Your IQ Test Don't Take It Serious. Thanks For Your Test. Always Be Gather With Our Websit.
//     @Tobihara**!?`  
    schutlebox.append(h3)
    document.getElementById("next").innerHTML = "Reset"
    document.getElementById("next").addEventListener("click", ( ) => {
    
  storage = '';
  localStorage.setItem("alldata",JSON.stringify(storage))
})
  }
}
