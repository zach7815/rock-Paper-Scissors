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
    const detectUserChoice = (event) => {
      processUserChoice(event)
    }
    body.addEventListener('click', detectUserChoice);
    symbol.forEach(element=>element.addEventListener("click", detectUserChoice))
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



// creates and displays round options to user
function createRounds(){
  let roundSelection=document.createElement("div");
  roundSelection.classList.add("roundSelection");
  roundSelection.append(createSuddenDeathBtn(), createThreeRndBtn(), createFiveRndBtn());
  instruction.replaceChildren(roundSelection);
}; 

// ends start animation once user starts game
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

// detects how many rounds user has chosen to play e.g 1, 3 or five
function detectRounds(event){
  if(event.target.matches("#suddenDeath")){
    setSuddenDeath()
    
  }
  else if (event.target.matches("#threeRounds")){
    setThreeRounds()
  }
  else {setFiveRounds()}
}




// runs and manages sudden death round 
const setSuddenDeath = ()=>{
  headings.h1.innerHTML="Sudden Death!";
  headings.h1.classList.add("suddenDH1");
  headings.h2.innerHTML="Choose your symbol";
  headings.h2.classList.add("selectSymbol");
  headings.instrWrap.firstChild.replaceWith(headings.h2);
  animations.selectSymbol();
  
}



// runs and manages three round answer
function setThreeRounds(){
  headings.h1.innerHTML="Round 1";
  headings.h2.innerHTML="Choose your symbol";
  headings.h2.classList.add("selectSymbol");
headings.instrWrap.firstChild.replaceWith(headings.h2);

}
// runs and manages five rounds
function setFiveRounds(){
  headings.h1.innerHTML="Round 1";
  headings.h2.innerHTML="Choose your symbol";
  headings.h2.classList.add("selectSymbol");
headings.instrWrap.firstChild.replaceWith(headings.h2);
}

// produces computer answer
const generateCompAns=()=>{
  const optionsArr= ["rock", "paper", "scissors"];
  const randNum= Math.floor((Math.random()*3));
  return optionsArr[randNum];
}


// handles user choice
const processUserChoice =(event)=>{
const userChoice = event.target.id;
const compChoice= generateCompAns();
console.log(`The users choice selected was:${userChoice}`);
console.log(` The computers choice selected was:${compChoice} `);
calculateResult(userChoice,compChoice)
}

// adds animation to gameplay to make it more interactive.
const gameAnimation = ()=> {
const symbolImages = {
  rock: "./images/rock.png",
  paper:"./images/paper.png",
  scissors: "./images/scissors.png"
}
// const transitionSlide= document.createElement("div");
// transitionSlide.classList.add("transitionSlide");
// body.prepend(transitionSlide);
// transitionSlide.classList.add("transitionSlideFade")
document.querySelector(".innerWrapper").style="gap:20rem"
document.querySelector(".papCont").style="display:none"


}

// works out who wins comp or user
const calculateResult = (userChoice, compChoice)=>{
  switch(userChoice){

    case "rock":
    if(compChoice==="paper")
    console.log("paper===loss")
    else if(compChoice==="rock")
    console.log("rock===draw")
    else
    console.log("scissors===win");
    break
    
    case "paper":
    if(compChoice==="paper")
    console.log("paper===draw")
    else if(compChoice==="rock")
    console.log("rock===win")
    else
    console.log("scissors===loss");
    break
    
    case "scissors":
    if(compChoice==="paper")
    console.log("paper===win")
    else if(compChoice==="rock")
    console.log("rock===loss")
    else
    console.log("scissors===draw");
    break
    
    }
}




