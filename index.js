
var gamePattern=[];

var userClickedPattern=[];



var level=0;

$("body").keypress(function(){

  $("#level-title").html("level "+level);
  nextSequence();


});



function nextSequence(){

  userClickedPattern=[];

  level++;

  $("#level-title").html("level "+level);

  var randomColor=["blue","green","yellow","red"];

  var randomNumber=Math.floor(Math.random()*4);

  var randomChosenColor = randomColor[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  sound(randomChosenColor);
}


function sound(key) {
  var audio=new Audio("sounds/"+key+".mp3");
  audio.play();
}



$(".btn").click(function(){

  var userChosenColor=$(this).attr("id");
  userClickedPattern.push(userChosenColor);
  sound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);

});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
  $("#" + currentColor).removeClass("pressed");
}, 100);

}


function checkAnswer(curentLevel){
  if(gamePattern[curentLevel]==userClickedPattern[curentLevel]){
    if(gamePattern.length==userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }

  }
  else{
    sound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    
    gameover();
  }
}


function gameover(){
  level=0;
  gamePattern=[];

}
