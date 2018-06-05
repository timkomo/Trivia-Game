$(document).ready(function () {
    ///list of game varibles 
    var openingTheme = new Audio("./assets/audio/capcom.mp3");
    var correctSound = new Audio("./assets/audio/correctSound.mp3")
    correctSound.volume = 0.2;
    var correctAnswers = 0;
    var incorrectAnswers = 0;


    function timeUp(){
        $("#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8").hide();
        incorrectAnswers++;
        $("#timeUp").show(1000);

    

    }


    
///GAME TIME FUNCTION 
    
var n = 35;
var tm = setInterval(countDown,1000);

function countDown(){
    $("#timeLeft").text(n);
   n--;
   if(n == 0){
      clearInterval(tm);
      
      


   }
   console.log(n);
}
    

    
    
    
    ///When correct answer is selected run this function:
    function correct() {
        correctSound.play();
        $("#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8").hide();
        correctAnswers++;
    }

     ///When incorrect answer is selected run this function:
     function incorrect(){
        $("#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8").hide();
        incorrectAnswers++;
        
     }

     function hideAll(){
        $("#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8").hide();
     }


    /// start up game on load
    $("#startMenu,#startBtn").fadeIn(2500).removeClass('hidden');

    /// Goes to first question
    $("#startBtn").click(function () {
        openingTheme.play();
        $("#startBtn").hide();
        $(".jumbotron").show(2000);
        $("#q1").show();
       
        
    })

    ///q1 if question is answered right

    $("#a2").click(function () {
        correct();
        $("#q1-right").show(1000);
        function nextQ(){
        $("#q1-right").hide(1000);
        $("#q2").show(2*1000);
        }
        setTimeout(nextQ,4*1000);

        
        
    
        
      })

    

     ///q1 if question is answered wrong
    
     $("#a1,#a3,#a4").click(function () {
         incorrect()
         $("#q1-wrong").show(1000);
        
     })



















})










