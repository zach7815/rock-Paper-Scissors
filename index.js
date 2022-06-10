const body=document.querySelector("body");
const instruction = document.querySelector(".instrWrapper");
const interactions= ["click", "keydown"];
interactions.forEach(evt=>body.addEventListener(evt, handler, false))

const headings= {
  h1: document.querySelector(".headline"),
 h2: document.createElement("h2"),
 scoreDisplay:document.querySelectorAll(".scoreContainer"),
 scoreDisplayWrap:document.querySelector(".outterScoreWrap"),
 scoreCircle: document.createElement("div"),
 instrWrap: document.querySelector(".instrWrapper")
}

const animations = {
  selectSymbol: ()=>{
    const symbol = document.querySelectorAll(".symbolCard");
    symbol.forEach(element=>element.classList.add("symbolZoom"));
    symbol.forEach(element=>element.addEventListener("click", (event)=>{
      alert(`${event.target.id }was clicked!`)
      console.log(event.target.id)
    }))
  }
}


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
  detectRounds(event)
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
  detectRounds(event)
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
    detectRounds(event)
  }
  
  );
  return fiveRound;

};

function detectRounds(event){
  if(event.target.matches("#suddenDeath")){
    setSuddenDeath()
    
  }
  else if (event.target.matches("#threeRounds")){
    setThreeRounds()
  }
  else {setFiveRounds()}
}





const setSuddenDeath = ()=>{
  headings.h1.innerHTML="Sudden Death!";
  headings.h1.classList.add("suddenDH1");
  headings.h2.innerHTML="Choose your symbol";
  headings.h2.classList.add("selectSymbol");
  headings.instrWrap.firstChild.replaceWith(headings.h2);
  animations.selectSymbol();
}




function setThreeRounds(){
  headings.h1.innerHTML="Round 1";
  headings.h2.innerHTML="Choose your symbol";
  headings.h2.classList.add("selectSymbol");
headings.instrWrap.firstChild.replaceWith(headings.h2);

}

function setFiveRounds(){
  headings.h1.innerHTML="Round 1";
  headings.h2.innerHTML="Choose your symbol";
  headings.h2.classList.add("selectSymbol");
headings.instrWrap.firstChild.replaceWith(headings.h2);

}

const computerChoice=()=>{
  const optionsArr= ["rock", "paper", "scissors"];
  const randNum= Math.floor((Math.random()*3));
  return optionsArr[randNum];
}



const processUserChoice =(event)=>{
const userChoice = event.target.id;

if(userChoice==="rock"){
  console.log("rock was clicked")
}

}