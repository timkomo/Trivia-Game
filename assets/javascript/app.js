$(document).ready(function () {
    ///list of game varibles 
    var openingTheme = new Audio("./assets/audio/capcom.mp3");
    var correctSound = new Audio("./assets/audio/correctSound.mp3");
    var incorrectSound = new Audio("./assets/audio/wrong.mp3");
    correctSound.volume = 0.2;
    var correctAnswers = 0;
    var incorrectAnswers = 0;


    function timeUp(){
        $("#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8").hide();
        $("#timeUp").show(1000);
        $("#continueBtn").click(function(){
            correctAnswers = 0;
            incorrectAnswers = 0;
            openingTheme.play();
        $("#timeUp").hide(1000);
        $("#q1").show(2*1000);
        clearInterval(tm);
        countDown();


        })
        
        }


    
// // ///GAME TIME FUNCTION 
    
// var qT = 17;
//     var tm = setInterval(countDown,1000);
//     function countDown(){
//     $("#timeLeft").text(qT);
//      qT--;
//     if(qT == 0){
//     clearInterval(tm);
//     timeUp();
//     }
    
//     console.log(qT);
    
    
//    }

    
    
    
    ///When correct answer is selected run this function:
    function correct() {
        correctSound.play();
        $("#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8").hide();
        correctAnswers++;
        console.log(correctAnswers);
        $("#correctAnswers").text(correctAnswers);

    }

     ///When incorrect answer is selected run this function:
     function incorrect(){
         incorrectSound.play();
        $("#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8").hide();
        incorrectAnswers++;
        console.log(incorrectAnswers);
        $("#incorrectAnswers").text(incorrectAnswers);
        
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
        
        countDown();

       
   
   
})

    ///q1 if question is answered right

    $("#q1a2").click(function () {
        correct();
        $("#q1-right").show(1000);
        function nextQ(){
        $("#q1-right").hide(1000);
        $("#q2").show(2*1000);
        }
        setTimeout(nextQ,4*1000);

        
})
    ///q1 if question is answered wrong
    
     $("#q1a1,#q1a3,#q1a4").click(function () {
         incorrect()
         $("#q1-wrong").show(1000);
         function nextQ(){
            $("#q1-wrong").hide(1000);
            $("#q2").show(2*1000);
            }
            setTimeout(nextQ,4*1000);
        
     })

     ///q2 if question is answered right

    $("#q2a4").click(function () {
        correct();
        $("#q2-right").show(1000);
        function nextQ(){
        $("#q2-right").hide(1000);
        $("#q3").show(2*1000);
        }
        setTimeout(nextQ,4*1000);
    })

     ///q2 if question is answered wrong
     $("#q2a1,#q2a2,#q2a3").click(function () {
        incorrect()
        $("#q2-wrong").show(1000);
        function nextQ(){
           $("#q2-wrong").hide(1000);
           $("#q3").show(2*1000);
           }
           setTimeout(nextQ,4*1000);

        })

        ///q3 if question is answered right

    $("#q3a1").click(function () {
        correct();
        $("#q3-right").show(1000);
        function nextQ(){
        $("#q3-right").hide(1000);
        $("#q4").show(2*1000);
        }
        setTimeout(nextQ,4*1000);
    })

     ///q3 if question is answered wrong
     $("#q3a2,#q3a3,#q3a4").click(function () {
        incorrect()
        $("#q3-wrong").show(1000);
        function nextQ(){
           $("#q3-wrong").hide(1000);
           $("#q4").show(2*1000);
           }
           setTimeout(nextQ,4*1000);

        })

        ///q4 if question is answered right

    $("#q4a2").click(function () {
        correct();
        $("#q4-right").show(1000);
        function nextQ(){
        $("#q4-right").hide(1000);
        $("#q5").show(2*1000);
        }
        setTimeout(nextQ,4*1000);
    })

     ///q4 if question is answered wrong
     $("#q4a1,#q4a3,#q4a4").click(function () {
        incorrect()
        $("#q4-wrong").show(1000);
        function nextQ(){
           $("#q4-wrong").hide(1000);
           $("#q5").show(2*1000);
           }
           setTimeout(nextQ,4*1000);

        })

    ///q5 if question is answered right

    $("#q5a4").click(function () {
        correct();
        $("#q5-right").show(1000);
        function nextQ(){
        $("#q5-right").hide(1000);
        $("#q6").show(2*1000);
        }
        setTimeout(nextQ,4*1000);
    })

     ///q5 if question is answered wrong
     $("#q5a1,#q5a2,#q5a3").click(function () {
        incorrect()
        $("#q5-wrong").show(1000);
        function nextQ(){
           $("#q5-wrong").hide(1000);
           $("#q6").show(2*1000);
           }
           setTimeout(nextQ,4*1000);

        })

    ///q6 if question is answered right

    $("#q6a1").click(function () {
        correct();
        $("#q6-right").show(1000);
        function nextQ(){
        $("#q6-right").hide(1000);
        $("#q7").show(2*1000);
        }
        setTimeout(nextQ,4*1000);
    })

     ///q6 if question is answered wrong
     $("#q6a2,#q6a3,#q6a4").click(function () {
        incorrect()
        $("#q6-wrong").show(1000);
        function nextQ(){
           $("#q6-wrong").hide(1000);
           $("#q7").show(2*1000);
           }
           setTimeout(nextQ,4*1000);

        })

    ///q7 if question is answered right

    $("#q7a3").click(function () {
        correct();
        $("#q7-right").show(1000);
        function nextQ(){
        $("#q7-right").hide(1000);
        $("#q8").show(2*1000);
        }
        setTimeout(nextQ,4*1000);
    })

     ///q7 if question is answered wrong
     $("#q7a1,#q7a2,#q7a4").click(function () {
        incorrect()
        $("#q7-wrong").show(1000);
        function nextQ(){
           $("#q7-wrong").hide(1000);
           $("#q8").show(2*1000);
           }
           setTimeout(nextQ,4*1000);

        })

    ///q8 if question is answered right

    $("#q8a1").click(function () {
        correct();
        $("#q8-right").show(1000);
        function nextQ(){
        $("#q8-right").hide(1000);
        $("#results").show(2*1000);
        }
        setTimeout(nextQ,4*1000);
    })

     ///q7 if question is answered wrong
     $("#q8a2,#q8a3,#q8a4").click(function () {
        incorrect()
        $("#q8-wrong").show(1000);
        function nextQ(){
           $("#q8-wrong").hide(1000);
           $("#results").show(2*1000);
           }
           setTimeout(nextQ,4*1000);
           })

        ///Display Results
        $("#correctAnswers").text(correctAnswers);
        $("#incorrectAnswers").text(incorrectAnswers);

        ///End of game reset. 
        $("#continueBtn2").click(function(){
            correctAnswers = 0;
            incorrectAnswers = 0;
            openingTheme.play();
        $("#results").hide(1000);
        $("#q1").show(2*1000);

        })



















})










