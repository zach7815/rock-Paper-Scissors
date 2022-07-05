
const body= document.querySelector("body");
const instruction = document.querySelector(".instrWrapper");
const interactions= ["click", "keydown"];
interactions.forEach(evt=>body.addEventListener(evt, handler, false));
let round = 0;

const symbolSrcs = {
  rock:"./images/rock.png",
  paper:"./images/paper.png",
  scissors:"./images/scissors.png",
}


const userAnswers = [];
const compAnswers =[];

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

const animations = {
  addZoom: ()=>{
    symbols.symbolCards.forEach(element=>element.classList.add("symbolZoom"));
  },
   removeZoom: ()=>{
    symbols.symbolCards.forEach(element=>element.classList.remove("symbolZoom"));
  }
}



addSymbolListener= (rounds)=>{
let roundType= rounds.target.id;
console.log(rounds.target.id)
if (roundType==="suddenDeath"){
  symbols.symbolCards.forEach(element=>element.addEventListener("click", (userSel)=>{
   userChoice=userSel.target.id;
    runOneRound(userSel)
  }))
}
else if(roundType==="threeRounds"){
  symbols.symbolCards.forEach(element=>element.addEventListener("click", (userSel)=>{
    userChoice=userSel.target.id;
     runThreeRounds(userChoice);
   }))
}
}



const selectSymbol= ()=>{
  animations.addZoom();
}



// removes initial event listeners for starting state of game. Avoids game reset
function handler(_e){
interactions.forEach(e=> body.removeEventListener(e, handler))
gameSequence()

}

// initiates game sequence
function gameSequence(){
  createRounds()
  stopAnimation()
};



// creates and displays round options to user
function createRounds(){
  let roundSelection=document.createElement("div");
  roundSelection.classList.add("roundSelection");
  roundSelection.append(createSuddenDeathBtn, createThreeRndBtn, createFiveRndBtn);
  instruction.replaceChildren(roundSelection);
};

// ends start animation once user starts game
const stopAnimation = ()=>{
  let symbolAnimation=document.querySelectorAll(".symbolCard");
  symbolAnimation.forEach(el=>el.classList.add("stopAnimation"));
};


// creates buttons for round selection
const CreateRounds=(title,className)=>{
  let button=document.createElement("button");
  button.innerText=title;
  button.classList.add(className);
  button.id=className;
  button.addEventListener("click", function(roundSelection){
    detectRounds(roundSelection);
  });
  return button;
}

const createSuddenDeathBtn=CreateRounds("One Round", "suddenDeath");
const createThreeRndBtn=CreateRounds("Three Rounds", "threeRounds");
const createFiveRndBtn=CreateRounds("Five Rounds", "fiveRounds");

// detects how many rounds user has chosen to play e.g 1, 3 or five
function detectRounds(rounds){
  if(rounds.target.matches("#suddenDeath")){
    setSuddenDeath(rounds)

  }
  else if (rounds.target.matches("#threeRounds")){
    setThreeRounds(rounds)
  }
  else {setFiveRounds(rounds)}
}

// provides user instruction to choose symbol

function setSymbol(){
  headings.h2.innerHTML="Choose your symbol";
  headings.h2.classList.add("selectSymbol");
}



// runs and manages sudden death round
const setSuddenDeath = (rounds)=>{
  headings.h1.innerHTML="Sudden Death!";
  headings.h1.classList.add("suddenDH1");
  setSymbol()
  headings.instrWrap.firstChild.replaceWith(headings.h2);
  selectSymbol();
  addSymbolListener(rounds)
  
}



// runs and manages three round answer
const setThreeRounds = (rounds)=>{
 setRoundAmount();
 totalRounds=3;
 createScoreBoard(totalRounds)
  setSymbol();
  ReplaceRoundButtons()
  selectSymbol();
  addSymbolListener(rounds);

};

// runs and manages five rounds
const setFiveRounds=(rounds)=>{
  headings.h1.innerHTML="Round 1";
  console.log(rounds.target.id)
  setSymbol()
  const totalRounds=5;
  createScoreBoard(totalRounds)
  ReplaceRoundButtons()
};


const ReplaceRoundButtons= ()=>{
  headings.instrWrap.firstChild.replaceWith(headings.h2);

}

const resetRound = ()=>{
  setSymbol();
  animations.addZoom();
  setRoundAmount()
  resetImages();
  removeBtn()
}

const resetImages = ()=>{
  symbols.paperSymbol.papContainer.classList.remove("papContFade");
  symbols.rockSymbol.rocImage.src=symbolSrcs["rock"];
  symbols.rockSymbol.rocLabel.innerText="rock";
  symbols.scissorsSymbol.scissImage.src=symbolSrcs["scissors"];
  symbols.scissorsSymbol.scissLabel.innerText="scissors";
}

const removeBtn = ()=>{
  headings.instrWrap.removeChild(headings.instrWrap.lastChild)
}



// produces computer answer
const generateCompAns=()=>{
  const optionsArr= ["rock", "paper", "scissors"];
  const randNum= Math.floor(Math.random()*3);
  return optionsArr[randNum];
}



// manages page appearance depending on user action and game progression
const setRoundAmount =()=>{
  round++
  headings.h1.innerText=`Round ${round}`;
}


createScoreBoard = (roundAmount)=>{
  for(let i=0; i<roundAmount; i++){
    let circle=document.createElement("div");
    circle.classList.add("circle");
    headings.userScore.append(circle);
  };
  for(let i=0; i<roundAmount; i++){
    let circle=document.createElement("div");
    circle.classList.add("circle");
    headings.compScore.append(circle);
  };
  headings.compScore.classList.add("styleScores");
  headings.userScore.classList.add("styleScores");
  headings.scoreDisplay.classList.add("styleScoreCont");
}




// adds animation to start of game state. 

 function bounceElement(element){
 element.forEach(item => item.classList.add("animation"))
 };

// starts game animation

const imageChangeAnimation=()=>{

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


// plays game animation once user has inputted a result. 

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

// sets user and comp choice after game animation has played. 

 const displayRoundResult=(userChoice,compChoice)=>{


  setTimeout(()=>{
    symbols.rockSymbol.rocImage.src=symbolSrcs[userChoice];
    symbols.rockSymbol.rocImage.style="display:block";
    symbols.rockSymbol.rocLabel.innerText=userChoice;
    symbols.scissorsSymbol.scissImage.src=symbolSrcs[compChoice];
    symbols.scissorsSymbol.scissImage.style="display:block";
    symbols.scissorsSymbol.scissLabel.innerText=compChoice;
   
  }, 7000);

 };

// functions to create buttons after each round

const resetGame = ()=>{
  window.location.reload(false);
}



const appendButton=(button)=>{
  headings.instrWrap.append(button); 
}




// create function to play next round. 


// functions to process and deal with both user and computer answers. 

const handleChoices = (userAns, compAns)=>{
if (userAns ==="rock"){
handleAnsRock(compAns);
}
else if (userAns ==="paper"){
  handleAnsPap(compAns);
}
else {
  handleAnsScissors(compAns);
};
};

const handleAnsRock = (compAnswers)=>{
if(compAnswers==="rock"){
  imageChangeAnimation();
  displayRoundResult("rock", compAnswers)
handleDraw();
}
else if(compAnswers==="paper"){
imageChangeAnimation();
displayRoundResult("rock", compAnswers)
handleLoss();
}
else {
  imageChangeAnimation();
  displayRoundResult("rock", compAnswers);
  handleWin();
};
};

handleAnsPap = (compAnswers)=>{
  if(compAnswers==="rock"){
    imageChangeAnimation();
    displayRoundResult("paper", compAnswers);
  handleWin();
  }
  else if(compAnswers==="paper"){
  imageChangeAnimation();
  displayRoundResult("paper", compAnswers);
  handleDraw();
  }
  else {
    imageChangeAnimation();
    displayRoundResult("paper", compAnswers)
    handleLoss()
  };
  };

  handleAnsScissors = (compAnswers)=>{
    if(compAnswers==="rock"){
      imageChangeAnimation();
      displayRoundResult("scissors", compAnswers);
    handleLoss();
    }
    else if(compAnswers==="paper"){
    imageChangeAnimation();
    displayRoundResult("scissors", compAnswers);
    handleWin();
    }
    else {
      imageChangeAnimation();
      displayRoundResult("scissors", compAnswers);
      handleDraw();
    };
    };

// functions that control h2 and display round result message to users. 

const handleDraw = ()=>{
  let userPoints=1;
  let compPoints=1;
  setTimeout(()=>{
    headings.instrWrap.firstChild.innerText="Ahh drat it's a draw!"
  },7000);
  userAnswers.push(userPoints);
  compAnswers.push(compPoints);
};
const handleLoss=()=>{
  let userPoints=0;
  let compPoints=2;
  setTimeout(()=>{
    headings.instrWrap.firstChild.innerText="Ahh no you lost!"
  },7000);
  userAnswers.push(userPoints);
  compAnswers.push(compPoints);
};
const handleWin=()=>{
  let userPoints=2;
  let compPoints=0;
  setTimeout(()=>{
    headings.instrWrap.firstChild.innerText="Victory is yours!"
  },7000);
  userAnswers.push(userPoints);
  compAnswers.push(compPoints);
};

const runOneRound = (userSel)=>{
  const userAns= userSel.target.id
  const compAns = generateCompAns();
  animations.removeZoom();
  handleChoices(userAns, compAns);
  createResetButton();
}

const runThreeRounds = (userSel)=>{
  let compAns = generateCompAns();
  animations.removeZoom();
  

  if(round===2){
    handleChoices(userSel, compAns);
    adjustScoreBoard(round);  
   setTimeout(createFinalRoundButton, 8000)
   }
   else{
    handleChoices(userSel, compAns);
  adjustScoreBoard(round);
  setTimeout(createNextRoundButton, 8000)
   
}
 console.log(userAnswers);
 console.log(compAnswers);

}

const adjustScoreBoard=(rounds)=>{
  let scoreIndex=rounds-1;
  const userPoints=document.querySelectorAll(".userScore .circle");
  const compPoints=document.querySelectorAll(".compScore .circle");

  setTimeout(()=>{
    if(userAnswers[scoreIndex]>compAnswers[scoreIndex]){
      userPoints[scoreIndex].style="background-color: green";
      compPoints[scoreIndex].style="background-color: red";
    }
    else if(userAnswers[scoreIndex]<compAnswers[scoreIndex]){
      userPoints[scoreIndex].style="background-color: red";
      compPoints[scoreIndex].style="background-color: green";
    }
    else{
      userPoints[scoreIndex].style="background-color: orange";
      compPoints[scoreIndex].style="background-color: orange";
    }
  }, 8000)


}

const playFinalRound= ()=>{
  resetRound();
  displayResultsbtn();

}


const endGame= ()=>{

if(playerScore>compScore){
  headings.h1.innerText="Glorious Victory"
  headings.h2.innerText="congrats you and the Rock, Paper, scissors Master"
}
else if(playerScore===compScore){
  headings.h1.innerText="Rats a Draw"
  headings.h2.innerText="Dull Draws are no ones cup of team"
}
else{
  headings.h1.innerText="Annilation"
  headings.h2.innerText="Oh no the computers are on the rise, they outsmarted you!!!"
}

let playerScore = userAnswers.reduce((ac,cv)=> ac+cv, 0);
let compScore = compAnswers.reduce((ac,cv)=> ac+cv, 0);
removeBtn()


}

displayResultsbtn=()=>{
  alert("result")
}

const createButton=( buttonText, buttonFunction)=>{
  let button=document.createElement("button");
  button.innerText(buttonText)
  button.addEventListener("click",buttonFunction);
  headings.instrWrap.append(button);
}

const displayResultsbtn= createButton("Show Results", endGame);
const createNextRoundButton= createButton("Next Round", resetRound);
const createResetButton = createButton("Reset Game", resetGame);
const createFinalRoundButton = ("Final Round", playFinalRound);
