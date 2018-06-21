

$(document).ready(function () {

    // Global Variables

    var timer = 5;

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


    // Start Button - button to start the timer and the trivia game
    // Create Button

    $("#start-game").html(
        "<button id='start'>Start</button>"
    )

    // Hiding the start-game div
    $("#start-game").hide();

    // Creating game div

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
    //$("#game").hide();

    // Creating the questions by calling the getQuestions function
    getQuestions();

    // $(document).on("click",)
    // $("#start").on("click", stopwatch.start);

    // <form action="">
    //   <input type="radio" name="gender" value="male"> Male
    //   <input type="radio" name="gender" value="female"> Female
    //   <input type="radio" name="gender" value="other"> Other
    // </form>

    // function check() {
    //     document.getElementById("red").checked = true;
    // }

    // function uncheck() {
    //     document.getElementById("red").checked = false;
    // }















});

