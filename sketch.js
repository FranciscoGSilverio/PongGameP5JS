window.alert("Use the keys 'W' and 'S' to control the left player. And the 'UP_ARROW' and 'DOWN_ARROW' to control the right player.\nIf you are running this on P5.js editor, click on the game screen to start playing it.");

var difficult = Number(window.prompt("How difficult will the game be? Enter a number.\nI recommend '5'."));

var CanvasWidth = window.innerWidth;
var CanvasHeight = window.innerHeight;

var boardColor = 'black';
var ballColor = 'white';
var racketColor = 'white';

var RacketW = 10;
var RacketH;
var RacketSpeed = 5;

if(difficult > 1){
  RacketH = 150/ (difficult/2);
}
else{
  RacketH = 150;
}

var LeftRacketX = 30;
var LeftRacketY = (CanvasHeight/2) - (RacketH/2);
var RightRacketX = CanvasWidth - RacketW - 30;
var RightRacketY = (CanvasHeight/2) - (RacketH/2);

var BallX = 200;
var BallY = 20;
var BallSize = 20;

var BallSpeedX = difficult;
var BallSpeedY = difficult;

var player1score = 0;
var player2score = 0;

function setup() {
  createCanvas(CanvasWidth, CanvasHeight);
}

function board(){
  background(boardColor);
}

function Ball(){
  circle(BallX, BallY, BallSize);
  fill(ballColor);
}

function CreateRackets(){
  rect(LeftRacketX, LeftRacketY, RacketW, RacketH);
  rect(RightRacketX, RightRacketY, RacketW, RacketH);
  fill(racketColor);
}

function moveBall(){
  BallX = BallX + BallSpeedX;
  BallY = BallY + BallSpeedY;
}

function moveLeftRacket(){
  if(keyIsDown(87)){
    if(LeftRacketY >= 0){
      LeftRacketY = LeftRacketY - RacketSpeed;
    }
  }
  if(keyIsDown(83)){
    if(LeftRacketY + RacketH <= CanvasHeight){
      LeftRacketY = LeftRacketY + RacketSpeed;
    }
  }
}

function moveRightRacket(){
  if(keyIsDown(UP_ARROW)){
    if(RightRacketY >= 0){
      RightRacketY = RightRacketY - RacketSpeed;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(RightRacketY + RacketH <= CanvasHeight){
      RightRacketY = RightRacketY + RacketSpeed;
    }
  }
 }

function WallColision(){
  if(BallX >= (CanvasWidth)- (BallSize/2)){
    player1score = player1score + 1; 
    BallX = 200;
    BallY = 20;
  }
  if (BallX - (BallSize/2) <= 0){
    player2score = player2score + 1;
    BallX = CanvasWidth - 200;
    BallY = 20;
  }
  if(BallY >= ((CanvasHeight) - BallSize/2) || BallY - (BallSize/2) <= 0 ){
    BallSpeedY = BallSpeedY * -1;
  }}
  
function RacketColision(){
  if(BallX - (BallSize/2) <= LeftRacketX + RacketW && BallY <= LeftRacketY + RacketH && BallY >= LeftRacketY ){
    BallSpeedX = BallSpeedX * -1;
  }
  if(BallX >= RightRacketX - RacketW && BallY <= RightRacketY + RacketH && BallY >= RightRacketY ){
    BallSpeedX = BallSpeedX * -1;    
  }
}

function scoreBoard(){
  textSize(20);
  text(player1score+' : '+player2score, ((CanvasWidth/2) - 20), 30);
}

function draw() {
  board();
  Ball();
  CreateRackets();
  moveBall();
  moveLeftRacket();
  moveRightRacket()
  WallColision();
  RacketColision();
  scoreBoard();
}
