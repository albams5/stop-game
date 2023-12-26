function saveUsername(){
  const inputUsername = document.getElementById("input-username");
  const usernameValue = inputUsername.value;
  if(usernameValue){
    playerName = document.getElementById("player-name");
    startGame = document.getElementById("div-start-game");
    playerName.classList.add("hide");
    startGame.classList.remove("hide");
    localStorage.setItem("username", JSON.stringify(usernameValue));
  } else{
    alert("Please introduce an username");
  }
}
document.getElementById("btn-to-start").addEventListener("click", saveUsername);

function showBtn(){
    gameDisplay = document.getElementById("game-display");
    divGame = document.getElementById("btn-game-display");
    gameDisplay.classList.add("hide");
    divGame.classList.remove("hide");
    const buttonMoving = document.getElementById("click-to-win");
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const classBtn = "clase-"+randomNumber;
    buttonMoving.classList.add(classBtn);
    countmiliseconds();
}

function removeLastPlayer(){
  const divUserScore = document.getElementById("user-scores");
  const listUsers = divUserScore.querySelectorAll('.username-in-score');
    const listScores = divUserScore.querySelectorAll(".currently-playing");
    if (listUsers.length > 5) {
      for (let i = 5; i < listUsers.length; i++) {
      divUserScore.removeChild(listUsers[i]);
      divUserScore.removeChild(listScores[i]);
    }
  }
}


function startGame(){
    startGame = document.getElementById("div-start-game");
    gameDisplay = document.getElementById("game-display");
    startGame.classList.add("hide");
    gameDisplay.classList.remove("hide");
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setTimeout(showBtn, randomNumber*1000);
    const username = JSON.parse(localStorage.getItem("username"));
    const userNameInScore = document.createElement("p");
    userNameInScore.classList.add("username-in-score");
    userNameInScore.textContent = username;
    const divUserScore = document.getElementById("user-scores");
    const currentlyPlaying = document.createElement("p");
    currentlyPlaying.classList.add("currently-playing");
    currentlyPlaying.textContent = "Currently playing...";
    divUserScore.insertBefore(currentlyPlaying, divUserScore.firstChild);
    divUserScore.insertBefore(userNameInScore, divUserScore.firstChild);
    removeLastPlayer();
}
document.getElementById("to-game-btn").addEventListener("click", startGame);

function countmiliseconds(){
    let miliseconds = 0;
    let stop = false;

  function addingmiliseconds() {
    if(!stop){
        miliseconds++;
    console.log(miliseconds);
    setTimeout(addingmiliseconds, 1);
    }
  }

  addingmiliseconds();
  document.getElementById("click-to-win").addEventListener("click", ()=>{
    stop = true;
    localStorage.setItem("miliseconds", JSON.stringify(miliseconds));
    divGame = document.getElementById("btn-game-display");
    yourScore = document.getElementById("your-score");
    reactionTime = document.getElementById("total-time");
    divGame.classList.add("hide");
    yourScore.classList.remove("hide");
    reactionTime.textContent = localStorage.getItem("miliseconds");
    const currentlyPlaying = document.querySelector(".currently-playing");
    currentlyPlaying.textContent = localStorage.getItem("miliseconds") + " miliseconds";

  });
}

function reloadGame(){
  yourScore = document.getElementById("your-score");
  playerName = document.getElementById("player-name");
  const inputUsername = document.getElementById("input-username");
  inputUsername.value = "";
  yourScore.classList.add("hide");
  playerName.classList.remove("hide");
}
document.getElementById("play-again-btn").addEventListener("click", reloadGame)