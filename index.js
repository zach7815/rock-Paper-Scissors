
const body= document.querySelector("body");
const instruction = document.querySelector(".instrWrapper");
const interactions= ["click", "keydown"];
interactions.forEach(evt=>body.addEventListener(evt, handler, false));
let round = 0;
let roundAmount;
const userAnswers = [];
const compAns =[];

const symbolSrcs = {
  rock:"./images/rock.png",
  paper:"./images/paper.png",
  scissors:"./images/scissors.png",
}

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

// Manage text changes. 

const changeH1Text= (string, styleClass) => {
  headings.h1.innerText=string;
  headings.h1.classList.add(styleClass);
}

const changeH2Text =(string)=>{
  headings.h2.innerText=string;
}
displayRoundMessage = (string)=>{
  headings.instrWrap.firstChild.innerText=string;
}


const playARound = ()=>{
    symbols.symbolCards.forEach(element=>element.addEventListener("click", (userSel)=>{
     userChoice=userSel.target.id;
     compChoice=generateCompAns();
     handleChoices(userChoice, compChoice);
     animations.removeZoom();
    }))

};



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
const createRoundButton=(title,className)=>{
  let button=document.createElement("button");
  button.innerText=title;
  button.classList.add(className);
  button.id=className;
  button.addEventListener("click", function(roundSelection){
    detectRounds(roundSelection);
  });
  return button;
}

const createSuddenDeathBtn=createRoundButton("One Round", "suddenDeath");
const createThreeRndBtn=createRoundButton("Three Rounds", "threeRounds");
const createFiveRndBtn=createRoundButton("Five Rounds", "fiveRounds");

// detects how many rounds user has chosen to play e.g 1, 3 or five
function detectRounds(rounds){
  roundType=rounds.target.id;
  setRounds(rounds);
}

// provides user instruction to choose symbol

function setSymbol(){
  headings.h2.innerHTML="Choose your symbol";
  headings.h2.classList.add("selectSymbol");
}


// runs and manages sudden death round
const setRounds=(rounds)=>{
  roundType===rounds.target.id;
  replaceRoundButtons();
  setSymbol();
  selectSymbol();
  
  if(roundType==="suddenDeath"){
     roundAmount =1;
    changeH1Text("Sudden Death", "suddenDH1")
   playARound();
   round++
  }
  else if(roundType==="threeRounds"){
     roundAmount=3;
    createScoreBoard();
    increaseRounds();
    playARound();
  }
  else{
     roundAmount=5;
    createScoreBoard();
    increaseRounds();
    playARound();
  }
}


const replaceRoundButtons= ()=>{
  headings.instrWrap.firstChild.replaceWith(headings.h2);
}


const removeBtn = ()=>{
headings.instrWrap.removeChild(headings.instrWrap.lastChild)
}

const resetRound = ()=>{
  setSymbol();
  animations.addZoom();
  resetImages();
  increaseRounds();
  removeBtn();

}

const resetImages = ()=>{
  symbols.paperSymbol.papContainer.classList.remove("papContFade");
  symbols.rockSymbol.rocImage.src=symbolSrcs["rock"];
  symbols.rockSymbol.rocLabel.innerText="rock";
  symbols.scissorsSymbol.scissImage.src=symbolSrcs["scissors"];
  symbols.scissorsSymbol.scissLabel.innerText="scissors";
}

const removeChildElement = ()=>{
  headings.instrWrap.removeChild(headings.instrWrap.lastChild);
}



// produces computer answer
const generateCompAns=()=>{
  const optionsArr= ["rock", "paper", "scissors"];
  const randNum= Math.floor(Math.random()*3);
  return optionsArr[randNum];
}



// manages page appearance depending on user action and game progression
const increaseRounds =()=>{
  round++
  changeH1Text(`Round ${round}`);
}


createScoreBoard = ()=>{
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
 element.forEach(item => item.classList.add("animation"));
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
     changeStyle(symbol, symbolLabel);
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
    symbols.rockSymbol.rocImage.style="display:initial";
    symbols.rockSymbol.rocLabel.innerText=userChoice;
    symbols.scissorsSymbol.scissImage.src=symbolSrcs[compChoice];
    symbols.scissorsSymbol.scissImage.style="display:initial";
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

// functions to process and deal with both user and computer answers. 



const handleChoices = (userAns, compAns, )=>{
if (userAns ==="rock"){
  if(compAns==="rock"){
    imageChangeAnimation();
    displayRoundResult("rock", compAns);
  handleDraw();
  }
  else if(compAns==="paper"){
  imageChangeAnimation();
  displayRoundResult("rock", compAns);
  handleLoss();
  }
  else {
    imageChangeAnimation();
    displayRoundResult("rock", compAns);
    handleWin();
  };

}
else if (userAns ==="paper"){
  if(compAns==="rock"){
    imageChangeAnimation();
    displayRoundResult("paper", compAns);
  handleWin();
  }
  else if(compAns==="paper"){
  imageChangeAnimation();
  displayRoundResult("paper", compAns);
  handleDraw();
  }
  else {
    imageChangeAnimation();
    displayRoundResult("paper", compAns);
    handleLoss();
  };

}
else {
  if(compAns==="rock"){
    imageChangeAnimation();
    displayRoundResult("scissors", compAns);
  handleLoss();
  }
  else if(compAns==="paper"){
  imageChangeAnimation();
  displayRoundResult("scissors", compAns);
  handleWin();
  }
  else {
    imageChangeAnimation();
    displayRoundResult("scissors", compAns);
    handleDraw();
  };
};
};




// functions that control h2 and display round result message to users. 

const RecordScores =(userPoints, compPoints)=>{
  userAnswers.push(userPoints);
  compAns.push(compPoints);
}

const handleDraw = ()=>{
  let userPoints=1;
  let compPoints=1;
  
  setTimeout(()=>{
    displayRoundMessage("Ahh drat it's a draw!");
  },7000);
  RecordScores(userPoints, compPoints);
  adjustScoreBoard(round)
  continueGame(round)
};
const handleLoss=()=>{
  let userPoints=0;
  let compPoints=2;
  setTimeout(()=>{
  displayRoundMessage("Ahh no you lost!");
  },7000);
  RecordScores(userPoints, compPoints);
  adjustScoreBoard(round)
  continueGame(round)
};
const handleWin=()=>{
  let userPoints=2;
  let compPoints=0;
  setTimeout(()=>{
    displayRoundMessage("Victory is yours!");
  },7000);
  RecordScores(userPoints, compPoints);
  adjustScoreBoard()
  continueGame()
};


const adjustScoreBoard=()=>{
  let scoreIndex=round-1;
  const userPoints=document.querySelectorAll(".userScore .circle");
  const compPoints=document.querySelectorAll(".compScore .circle");
  const draw= "background-color: orange";
  const win ="background-color: green";
  const loss = "background-color: red";
  compScore =compAns[scoreIndex];
  userScore= userAnswers[scoreIndex];

  setTimeout(()=>{
    if(userScore>compScore){
      userPoints[scoreIndex].style=win;
      compPoints[scoreIndex].style=loss;
    }
    else if(userScore<compScore){
      userPoints[scoreIndex].style=loss;
      compPoints[scoreIndex].style=win;
    }
    else{
      userPoints[scoreIndex].style=draw;
      compPoints[scoreIndex].style=draw;
    }
  }, 8000);


}

const endGame= ()=>{
symbols.symbolCards.forEach(e=>e.removeEventListener("click", playARound))
const calculateScore = (pointsArray)=>{
  return pointsArray.reduce((ac,cv)=> ac+cv,0);
 }
  const playerScore = calculateScore(userAnswers);
  const compScore= calculateScore(compAns);


if(playerScore>compScore){
  changeH1Text("Glorious Victory");
  displayRoundMessage("Congrats you are the Rock, Paper, Scissors Master");
}
else if(playerScore===compScore){
  changeH1Text("Rats a Draw");
  displayRoundMessage("Dull Draws are no one's cup of team");
}
else{
  changeH1Text("Annilation")
  displayRoundMessage("Oh no the computers are on the rise, they outsmarted you!");
}
removeBtn();
setTimeout(createResetButton,8000);
}

const createButton= async( buttonText, buttonFunction, roundAmount)=>{
  let button=document.createElement("button");
  button.innerText= buttonText;
  button.addEventListener("click",buttonFunction);
  headings.instrWrap.append(button);
}

const displayResultsbtn= ()=>{createButton("Show Results", endGame)};
const createNextRoundButton= ()=>{createButton("Next Round",resetRound)};
const createResetButton = ()=>{createButton("Reset Game", resetGame)};

const continueGame = ()=>{
  let nextRoundValue =round+1;
 if(nextRoundValue===roundAmount+1){
setTimeout(displayResultsbtn, 8000);
}
else {
  setTimeout(createNextRoundButton,8000);
}

}
