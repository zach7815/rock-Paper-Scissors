let body=document.querySelector("body");
const instruction = document.querySelector(".instrWrapper");
let interactions= ["click", "keydown"];

interactions.forEach(evt=>body.addEventListener(evt, gameSequence, false))


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
suddenDeathR.addEventListener("click",setSuddenDeath);
return suddenDeathR;

};


const createThreeRndBtn =()=> {
let   threeRound=document.createElement("button");
  threeRound.innerText="Three Rounds";
  threeRound.classList.add("threeRounds");
 threeRound.addEventListener("click", setThreeRounds);
      return threeRound;
};



const createFiveRndBtn =()=>{
let   fiveRound=document.createElement("button");
  fiveRound.innerText="Five Rounds";
  fiveRound.classList.add("fiveRounds");
  fiveRound.addEventListener("click", setFiveRounds);
  return fiveRound;

};



function setSuddenDeath(){
alert("sudden death round was chosen")


};

const displayScore=()=>{
let scoreDisplay = document.querySelectorAll(".scoreContainer");
let scoreDisplayWrap = document.querySelector(".outterScoreWrap");
scoreDisplay.forEach(el=> el.classList.toggle("toggleScoreDisplay"));
scoreDisplayWrap.style.justifyContent="space-between";
let selectSymbol= document.createElement("h2");
selectSymbol.innerHTML="Choose your symbol";
let buttonContainer=document.querySelector(".roundSelection");
instruction.replaceChild(selectSymbol, buttonContainer);



}

function setThreeRounds(){
displayScore()

}

function setFiveRounds(){
  alert("five  rounds was chosen")
  

}