

$(document).ready(function () {

    // Global Variables

    var timer = 60;
    var correctAns = 0;
    var wrongAns = 0;
    var notAns = 0;
    var timerId;


    var questions = [
        {
            "question": "What was one of the shows famous catchphrases?",
            "choices": ["How YOU doin'?", "Did I you that?", "Yada, yada, yada", "Where's the beef?"],
            "correctAns": ["false", "false", "true", "false"],
            "name": "q1"
        },
        {
            "question": "What was one of George's fictional careers?",
            "choices": ["Web Developer", "Importer and Exporter", "Construction Worker", "Denist"],
            "correctAns": ["false", "true", "false", "false"],
            "name": "q2"
        },
        {
            "question": "Jerry Seinfeld received five Emmy Award nominations for Outstanding Lead Actor in a Comedy Series, how many times did he win it?",
            "choices": ["0", "1", "2", "5"],
            "correctAns": ["true", "false", "false", "false"],
            "name": "q3"
        },
        {
            "question": "What was Kramer's regular source of income?",
            "choices": ["Writer", "Web Developer", "Architect", "Not Known"],
            "correctAns": ["false", "false", "false", "true"],
            "name": "q4"
        },
        {
            "question": "What was Jerry's apartment number?",
            "choices": ["5A", "55", "305", "3B"],
            "correctAns": ["true", "false", "false", "false"],
            "name": "q5"
        },
        {
            "question": "What was the Pilot episode called?",
            "choices": ["Show about Nothing", "Chuckle, Chuckle, Chuckle", "The Julia Louis-Dreyfus Show", "Seinfeld: Good News, Bad News"],
            "correctAns": ["false", "false", "false", "true"],
            "name": "q6"
        },
        {
            "question": "What was the calendar seen hanging on the wall next to Jerry's kitchen throughout the first season?",
            "choices": ["Kittens", "The Three Stooges", "U.S. National Parks", "Farside"],
            "correctAns": ["false", "true", "false", "false"],
            "name": "q7"
        },
        {
            "question": 'How many times does Jerry say, "Hello, Newman" in the entire series?',
            "choices": ["0", "16", "45", "61"],
            "correctAns": ["false", "true", "false", "false"],
            "name": "q8"
        }

    ];


    // Showing the start-game div
    $("#start-game").show();

    // Start Button - button to start the timer and the trivia game
    // Create Button

    $("#start-game").html(
        "<button id='start'>Start</button>"
    )

    // Creating the questions by calling the getQuestions function
    // Starting the trivia game when the start button is clicked
    getQuestions();


    // Done Button - to stop the game and bring up the results
    // Create Button
    $("#game").append(
        "<button id='endGame'>Done</button>"
    ).hide()




    $(document).on("click", "#start", function () {

        // Hiding the start-game div
        $("#start-game").hide();
        // Showing the game div
        $("#game").show();


        // Setting the time interval that the function below is called
        timerId = setInterval(function () {
            timer--;

            // Creating game div

            // Adding Time Remaining to #game
            $("#timerHeader").html("<h2>Time Remaining: " + timer + " Seconds</h2>");


            if (timer === 0) {
                handleEndGame();
            }


        }, 1000);


    });


    $(document).on("click", "#endGame", function () {
        handleEndGame();
    });

    $("#results").hide();


    function handleEndGame() {
        // clear the interval
        clearInterval(timerId)
        // Hiding the game div
        $("#game").hide();
        // Hiding the timer
        $("#timerHeader").hide();
        // Hiding the results div

        // Number of right answers
        if ($('input[name="q1"]:checked').val() === questions[0].correctAns[2]) {
            correctAns++;
        } 

        if ($('input[name="q2"]:checked').val() === questions[1].correctAns[1]) {
            correctAns++;
        } 

        if ($('input[name="q3"]:checked').val() === questions[2].correctAns[0]) {
            correctAns++;
        } 

        if ($('input[name="q4"]:checked').val() === questions[3].correctAns[3]) {
            correctAns++;
        } 

        if ($('input[name="q5"]:checked').val() === questions[4].correctAns[0]) {
            correctAns++;
        }

        if ($('input[name="q6"]:checked').val() === questions[5].correctAns[3]) {
            correctAns++;
        } 

        if ($('input[name="q7"]:checked').val() === questions[6].correctAns[1]) {
            correctAns++;
        } 

        if ($('input[name="q8"]:checked').val() === questions[7].correctAns[1]) {
            correctAns++;
        }

        // Number of unanswered questions
        if ($("input:radio[name='q1']").is(":checked")===false){
            notAns++;
        }

        if ($("input:radio[name='q2']").is(":checked")===false){
            notAns++;
        }

        if ($("input:radio[name='q3']").is(":checked")===false){
            notAns++;
        }

        if ($("input:radio[name='q4']").is(":checked")===false){
            notAns++;
        }

        if ($("input:radio[name='q5']").is(":checked")===false){
            notAns++;
        }

        if ($("input:radio[name='q6']").is(":checked")===false){
            notAns++;
        }

        if ($("input:radio[name='q7']").is(":checked")===false){
            notAns++;
        }

        if ($("input:radio[name='q8']").is(":checked")===false){
            notAns++;
        }

        // Number of wrong answers
        wrongAns = questions.length - correctAns - notAns

        // Creating results div
        $("#results").html("<h2>All Done!</h2>" +
            "<p>Correct Answers: " + correctAns + "</p>" +
            "<p>Incorrect Answers: " + wrongAns + "</p>" +
            "<p>Unanswered: " + notAns + "</p>"
        )

        $("#results").show();
    }



    function getQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $("#game").append(
                "<p>" + questions[i].question + "<p>" +
                "<form>" +
                "<input type='radio' name='" + questions[i].name + "' value=" + questions[i].correctAns[0] + ">" + questions[i].choices[0] +
                "<input type='radio' name='" + questions[i].name + "' value=" + questions[i].correctAns[1] + ">" + questions[i].choices[1] +
                "<input type='radio' name='" + questions[i].name + "' value=" + questions[i].correctAns[2] + ">" + questions[i].choices[2] +
                "<input type='radio' name='" + questions[i].name + "' value=" + questions[i].correctAns[3] + ">" + questions[i].choices[3] +
                "</form>"
            )
        }

    }


    function getResults() {


    }




});

