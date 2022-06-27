
const body= document.querySelector("body");
const instruction = document.querySelector(".instrWrapper");
const interactions= ["click", "keydown"];
interactions.forEach(evt=>body.addEventListener(evt, handler, false))

const roundResults= {
  threeRounds:{
    userScore:[],
    computerScore:[]
  }, 
    fiveRounds:{
    userScore:[],
    computerScore:[]
  }
}

const userAnswers = [];
const compAnswers =[];

const resetBtn = document.createElement("button");
  resetBtn.innerText="Play Again?";


const headings= {
  h1: document.querySelector(".headline"),
  h2: document.createElement("h2"),
  scoreDisplay: document.querySelector(".scoreContainer"),
  scoreDisplayWrap: document.querySelector(".outterScoreWrap"),
  userScore:document.querySelector(".userScore"),
  compScore:document.querySelector(".compScore"),
  instrWrap: document.querySelector(".instrWrapper"),
}
const symbols = {
  symbolCards: document.querySelectorAll(".symbolCard"),
  rockSymbol:{
    rocContainer: document.querySelector(".rocCont"),
    rocImage: document.querySelector(".rockImg"),
    rocLabel: document.querySelector(".rockTitle"),
  },
paperSymbol:{
  papContainer: document.querySelector(".papCont"),
papImage: document.querySelector(".papImg"),
papLabel: document.querySelector(".papTitle"),
},
scissorsSymbol:{
scissContainer: document.querySelector(".scisCont"),
scissImage: document.querySelector(".scisImg"),
scissLabel: document.querySelector(".scicTitle"),
}

}

addSymbolListener= ()=>{
  symbols.symbolCards.forEach(element=>element.addEventListener("click", detectUserChoice))
}

const detectUserChoice = (event) => {
  console.log(event.target.id)
 }


const selectSymbol= ()=>{
  animations.addZoom();
  addSymbolListener();
}

const animations = {
  addZoom: ()=>{
    symbols.symbolCards.forEach(element=>element.classList.add("symbolZoom"));
  },
   removeZoom: ()=>{
    symbols.symbolCards.forEach(element=>element.classList.remove("symbolZoom"));
  }
}

// removes initial event listeners for starting state of game. Avoids game reset
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
function(roundSelection){
  detectRounds(roundSelection)
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
function detectRounds(rounds){
  if(rounds.target.matches("#suddenDeath")){
    setSuddenDeath()

  }
  else if (rounds.target.matches("#threeRounds")){
    setThreeRounds()
  }
  else {setFiveRounds()}
}


function setSymbol(){
  headings.h2.innerHTML="Choose your symbol";
  headings.h2.classList.add("selectSymbol");
}

// runs and manages sudden death round
const setSuddenDeath = ()=>{
  headings.h1.innerHTML="Sudden Death!";
  headings.h1.classList.add("suddenDH1");
  setSymbol()
  headings.instrWrap.firstChild.replaceWith(headings.h2);
  selectSymbol();

}



// runs and manages three round answer
const setThreeRounds = ()=>{
  headings.h1.innerHTML="Round 1";
  setSymbol();
headings.instrWrap.firstChild.replaceWith(headings.h2);
for(let i=0; i<3; i++){
  let circle=document.createElement("div");
  circle.classList.add("circle");
  headings.roundResults.threeRounds.append(circle);
};
for(let i=0; i<3; i++){
  let circle=document.createElement("div");
  circle.classList.add("circle");
  headings.compScore.append(circle);
};
headings.compScore.classList.add("styleScores");
headings.roundResults.threeRounds.classList.add("styleScores");
headings.scoreDisplay.classList.add("styleScoreCont");

animations.selectSymbol();
};


// runs and manages five rounds
const setFiveRounds=()=>{
  headings.h1.innerHTML="Round 1";
  setSymbol()
headings.instrWrap.firstChild.replaceWith(headings.h2);
}

// produces computer answer
const generateCompAns=()=>{
  const optionsArr= ["rock", "paper", "scissors"];
  const randNum= Math.floor(Math.random()*3);
  return optionsArr[randNum];
}


// handles user choice
const processUserChoice =(event)=>{
const userChoice = event.target.id;
const compChoice= generateCompAns();
userAnswers.push(userChoice);
compAnswers.push(userAnswers);
}




// works out who wins comp or user and changes H2 to reflect result
const calculateResult = (userChoice, compChoice)=>{

const displayDrawMes = ()=>{
  setTimeout(()=>{
    headings.instrWrap.firstChild.innerText="Ahh drat it's a draw!"
  },7000)
}
const displayLossMes=()=>{
  setTimeout(()=>{
    headings.instrWrap.firstChild.innerText="Ahh no you lost!"
  },7000)
}
const displayWinMes=()=>{
  setTimeout(()=>{
    headings.instrWrap.firstChild.innerText="Victory is yours!"
  },7000)
}
createResetButton()
  switch(userChoice){
    case "rock":
      animations.removeZoom()
      imageChangeAnimation()
    if(compChoice==="paper"){
     displayRoundResult(userChoice,compChoice);
    displayLossMes();


  } else if
    (compChoice==="rock"){
      displayRoundResult(userChoice,compChoice);
      displayDrawMes()
    }
    else{
      displayRoundResult(userChoice,compChoice);
     displayWinMes()
    }
    break

    case "paper":
      animations.removeZoom()
      imageChangeAnimation()
    if(compChoice==="paper")
     { 
      displayRoundResult(userChoice,compChoice);
      displayDrawMes()
     
    }

    else if(compChoice==="rock")
     { 
      displayRoundResult(userChoice,compChoice);
     displayWinMes()
    }
    else
     { 
      displayRoundResult(userChoice,compChoice);
      displayLossMes()
     
    }
    break


    case "scissors":
      animations.removeZoom()
      imageChangeAnimation()
    if(compChoice==="paper")
    {  
      displayRoundResult(userChoice,compChoice);
     displayWinMes()
     
      
    
    }
    else if(compChoice==="rock")
    {  
      displayRoundResult(userChoice,compChoice);
      displayLossMes();
    
    }
    else
    {  
      displayRoundResult(userChoice,compChoice);
     displayDrawMes()

    }
    break
    }
  storeResults()
}

function imageChangeAnimation(){

  const imageCont= document.querySelectorAll(".symCont");
   const symbol=document.querySelectorAll(".symImg");
   const symbolLabel =document.querySelectorAll(".symHead");
   symbols.scissorsSymbol.scissImage.src="./images/rock.png";
   symbols.scissorsSymbol.scissLabel.innerText="rock";
   symbols.paperSymbol.papContainer.classList.add("papContFade");


   setTimeout(()=>{
   bounceElement(imageCont);
   setTimeout(()=>{
     changeStyle(symbol, symbolLabel)
   },1000);
     }
  ,2000 )
 }

// Triggers round animation- Rock, Paper, Scissors, Shoot!

 function bounceElement(element){
 element.forEach(item => item.classList.add("animation"))
 };

 function changeStyle(images, imageLabel){

     images.forEach(image=> image.src="./images/paper.png");
         imageLabel.forEach(imageLabels=>imageLabels.innerText="paper");
       setTimeout(()=>{
     images.forEach(image=> image.src="./images/scissors.png");
         imageLabel.forEach(imageLabels=>imageLabels.innerText="scissors");
        setTimeout(()=>{
          images.forEach(image=> image.style="display:none");
  imageLabel.forEach(imageLabels=>imageLabels.innerText="shoot!");
   },1000);


   },1000);



 }

// sets image for comp and user choice after imageChange animation has run,
// then adds reset button at bottom of the the screen.

 const displayRoundResult=(userChoice,compChoice)=>{

  const symbolSrcs = {
    rock:"./images/rock.png",
    paper:"./images/paper.png",
    scissors:"./images/scissors.png",
  }

  setTimeout(()=>{
    symbols.rockSymbol.rocImage.src=symbolSrcs[userChoice];
    symbols.rockSymbol.rocImage.style="display:block";
    symbols.rockSymbol.rocLabel.innerText=userChoice;
    symbols.scissorsSymbol.scissImage.src=symbolSrcs[compChoice];
    symbols.scissorsSymbol.scissImage.style="display:block";
    symbols.scissorsSymbol.scissLabel.innerText=compChoice;
   
  }, 7000);

 };

const createResetButton =()=>{
 
 setTimeout(() => {
  headings.instrWrap.append(resetBtn);
headings.instrWrap.addEventListener("click", ()=>{
  window.location.reload(false);
})
 }, 9000);
}


const storeResults= ()=>{

if (headings.h2.innerText==="Victory is yours!"){
  roundResults.threeRounds.userScore.push("win")
  roundResults.threeRounds.computerScore.push("lose")
}
else if (headings.h2.innerText==="Ahh no you lost!"){
  roundResults.threeRounds.userScore.push("win")
  roundResults.threeRounds.computerScore.push("lose")
}
else{
  roundResults.threeRounds.userScore.push("draw");
  roundResults.threeRounds.computerScore.push("draw");
}
}

