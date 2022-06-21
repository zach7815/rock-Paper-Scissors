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
  selectSymbol: ()=>{
    animations.addZoom()
    const detectUserChoice = (event) => {
      processUserChoice(event)
    }
    body.addEventListener('click', detectUserChoice);
    symbols.symbolCards.forEach(element=>element.addEventListener("click", detectUserChoice))
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
console.log(` The computers choice selected was:${compChoice}`);

calculateResult(userChoice,compChoice)
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
     { displayRoundResult(userChoice,compChoice);
      displayDrawMes()
    }
      
    else if(compChoice==="rock")
     { displayRoundResult(userChoice,compChoice);
      displayRoundResult(userChoice,compChoice);
     displayWinMes()
    
    }
    else
     { displayRoundResult(userChoice,compChoice);
      displayLossMes()
    }
    break
     
    break
    
    case "scissors":
      animations.removeZoom()
      imageChangeAnimation()
    if(compChoice==="paper")
    {  displayRoundResult(userChoice,compChoice);
     displayWinMes()
      
    
    }
    else if(compChoice==="rock")
    {  displayRoundResult(userChoice,compChoice);
      displayLossMes()
    
    }
    else
    {  displayRoundResult(userChoice,compChoice);
     displayLossMes()
    
    }
    break
    
    }
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
    const resetBtn = document.createElement("button");
    resetBtn.innerText="Play Again?";
  headings.instrWrap.append(resetBtn);
  resetBtn.addEventListener("click", ()=>{
    window.location.reload(false);
  })
  }, 7000);
  


 };


