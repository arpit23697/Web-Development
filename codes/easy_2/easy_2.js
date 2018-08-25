var timeleft = 60;
var writeIn = document.getElementById("countdowntimer");
var temp = 0;
var wrong = document.getElementById("wrong");
var correct = document.getElementById("correct");

function Timer() {

    var downloadTimer = setInterval(function () {

        timeleft--;
        //        document.getElementById("demo").innerHTML = timeleft;

        var audio = document.getElementById("sound");
        if (timeleft >= 10)
            writeIn.innerHTML = ' 00:' + timeleft;
        else if (timeleft > 0)
            writeIn.innerHTML = ' 00:0' + timeleft;
        else if (timeleft <= 0) {
            writeIn.innerHTML = "00:00";
            clearInterval(downloadTimer);
            audio.src = "/home/arpit/study/webDevelopment/project/audio/sound_time_up.mp3";
        }
        else if (timeleft <= 0 && temp == 0)
            flip();

        if (timeleft == 0)
            flip();


    }, 1000);
}
Timer();
/*
function validate() {
    audio.src = "/home/arpit/study/webDevelopment/project/audio/sound_time_up.mp3";
    flip();

  
}*/

function flip() {
    $('.card').toggleClass('flipped');

    temp = 1;
    timeleft = -1;
    var x = "not selected";
    if (document.getElementById("customRadio1").checked)
        x = document.getElementById("customRadio1").value;

    else if (document.getElementById("customRadio2").checked)
        x = document.getElementById("customRadio2").value;

    else if (document.getElementById("customRadio3").checked)
        x = document.getElementById("customRadio3").value;

    else if (document.getElementById("customRadio4").checked)
        x = document.getElementById("customRadio4").value;

    //Puttin the validation
    if (x == 'Tuesday')
        wrong.style.visibility = "hidden";
    else
        correct.style.visibility = "hidden";


    // document.getElementById("demo").innerHTML = x;
}



