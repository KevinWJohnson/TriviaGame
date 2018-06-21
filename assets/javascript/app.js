

$(document).ready(function () {

    // Global Variables

    var timer = 10;
    var correctAns = 0;
    var wrongAns = 0;
    var notAns = 0;



    var questions = [
        {
            "question": "What was one of the shows famous catchphrases?",
            "choices": ["How YOU doin'?", "Did I you that?", "Yada, yada, yada", "Where's the beef?"],
            "correctAns": ["false", "false", "true", "false"]
        },
        {
            "question": "What was one of George's fictional careers?",
            "choices": ["Web Developer", "Importer and Exporter", "Construction Worker", "Denist"],
            "correctAns": ["false", "true", "false", "false"]
        },
        {
            "question": "Jerry Seinfeld received five Emmy Award nominations for Outstanding Lead Actor in a Comedy Series, how many times did he win it?",
            "choices": ["0", "1", "2", "5"],
            "correctAns": ["true", "false", "false", "false"]
        },
        {
            "question": "What was Kramer's regular source of income?",
            "choices": ["Writer", "Web Developer", "Architect", "Not Known"],
            "correctAns": ["false", "false", "false", "true"]
        },
        {
            "question": "What was Jerry's apartment number?",
            "choices": ["5A", "55", "305", "3B"],
            "correctAns": ["true", "false", "false", "false"]
        },
        {
            "question": "What was the Pilot episode called?",
            "choices": ["Show about Nothing", "Chuckle, Chuckle, Chuckle", "The Julia Louis-Dreyfus Show", "Seinfeld: Good News, Bad News"],
            "correctAns": ["false", "false", "false", "true"]
        },
        {
            "question": "What was the calendar seen hanging on the wall next to Jerry's kitchen throughout the first season?",
            "choices": ["Kittens", "The Three Stooges", "U.S. National Parks", "Farside"],
            "correctAns": ["false", "true", "false", "false"]
        },
        {
            "question": 'How many times does Jerry say, "Hello, Newman" in the entire series?',
            "choices": ["0", "16", "45", "61"],
            "correctAns": ["false", "true", "false", "false"]
        }

    ];


    // Showing the start-game div
    $("#start-game").show();

    // Start Button - button to start the timer and the trivia game
    // Create Button

    $("#start-game").html(
        "<button id='start'>Start</button>"
    )

    // Starting the trivia game when the start button is clicked

    $(document).on("click", "#start", function () {

        // Hiding the start-game div
        $("#start-game").hide();
        // Showing the game div
        $("#game").show();


        // Setting the time interval that the function below is called
        var timerId = setInterval(function () {
            timer--;

            // Creating game div

            // Adding Time Remaining to #game
            $("#game").html("<h2>Time Remaining: " + timer + " Seconds</h2>");

            // Creating the questions by calling the getQuestions function
            getQuestions();


            // Done Button - to stop the game and bring up the results
            // Create Button

            $("#game").append(
                "<button id='endGame'>Done</button>"
            );

            if (timer === 0) {
                // clear the interval
                clearInterval(timerId)
                // Hiding the game div
                $("#game").hide();
                // Hiding the results div
                $("#results").show();
            }

            $(document).on("click", "#endGame", function () {
                 // clear the interval
                 clearInterval(timerId)
                 // Hiding the game div
                 $("#game").hide();
                 // Hiding the results div
                 $("#results").show();

            });

        }, 1000);


    });



    // Creating results div
    $("#results").html("<h2>All Done!</h2>" +
        "<p>Correct Answers: " + correctAns + "</p>" +
        "<p>Incorrect Answers: " + wrongAns + "</p>" +
        "<p>Unanswered: " + notAns + "</p>"
    )



    function getQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $("#game").append(
                "<p>" + questions[i].question + "<p>" +
                "<form>" +
                "<input type='radio' name='questionResponses' value=" + questions[i].correctAns[0] + ">" + questions[i].choices[0] +
                "<input type='radio' name='questionResponses' value=" + questions[i].correctAns[1] + ">" + questions[i].choices[1] +
                "<input type='radio' name='questionResponses' value=" + questions[i].correctAns[2] + ">" + questions[i].choices[2] +
                "<input type='radio' name='questionResponses' value=" + questions[i].correctAns[3] + ">" + questions[i].choices[3] +
                "</form>"
            )
        }
    }


function getResults(){

    
}




});

