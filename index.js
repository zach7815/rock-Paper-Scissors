const body=document.querySelector("body");
const instruction = document.querySelector(".instrWrapper");
const interactions= ["click", "keydown"];
interactions.forEach(evt=>body.addEventListener(evt, handler, false))




function handler(e){
interactions.forEach(e=> body.removeEventListener(e, handler))
gameSequence()

}


function gameSequence(){
  createRounds()
  stopAnimation()
};




function createRounds(){
  let roundSelection=document.createElement("div");
  roundSelection.classList.add("roundSelection");
  roundSelection.append(createSuddenDeathBtn(), createThreeRndBtn(), createFiveRndBtn());
  instruction.replaceChildren(roundSelection);
}; 


const stopAnimation = ()=>{
  let symbolAnimation=document.querySelectorAll(".symbolCard");
  symbolAnimation.forEach(el=>el.classList.add("stopAnimation"));
};


const createSuddenDeathBtn =()=>{
let  suddenDeathR=document.createElement("button");
 suddenDeathR.innerText="One Round";
 suddenDeathR.classList.add("suddenDeath");
 suddenDeathR.id="suddenDeath";
suddenDeathR.addEventListener("click",
function(event){
  if(event.target.matches("#suddenDeath")){
    alert("suddenDeath Chosen");
  }
}
  


);
return suddenDeathR;

};


const createThreeRndBtn =()=> {
let   threeRound=document.createElement("button");
  threeRound.innerText="Three Rounds";
  threeRound.classList.add("threeRounds");
  threeRound.id="threeRounds";
 threeRound.addEventListener("click",
 function(event){
  if(event.target.matches("#threeRounds")){
    alert("threeRounds Chosen");
  }
}
 )
      return threeRound;
};



const createFiveRndBtn =()=>{
let   fiveRound=document.createElement("button");
  fiveRound.innerText="Five Rounds";
  fiveRound.classList.add("fiveRounds");
 fiveRound.id="fiveRounds";
  fiveRound.addEventListener("click", 
  function(event){
    if(event.target.matches("#fiveRounds")){
      alert("fiveRounds Chosen");
    }
  }
  
  );
  return fiveRound;

};

function detectRounds(event){
  if(event.target.matches("#suddenDeath")){
    alert("sudden Death was chosen")
  }}





function setSuddenDeath(){
  displayScore()


};

const displayScore=()=>{
let scoreDisplay = document.querySelectorAll(".scoreContainer");
let scoreDisplayWrap = document.querySelector(".outterScoreWrap");
scoreDisplay.forEach(el=> el.classList.toggle("toggleScoreDisplay"));
let circle = document
// scoreDisplayWrap.style.justifyContent="space-between";
// let selectSymbol= document.createElement("h2");
// selectSymbol.innerHTML="Choose your symbol";
// let buttonContainer=document.querySelector(".roundSelection");
// instruction.replaceChild(selectSymbol, buttonContainer);



}

function setThreeRounds(){
displayScore()

}

function setFiveRounds(){
  displayScore()
  

}

