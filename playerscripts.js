var myTrack = document.getElementById('myTrack')
var playButton = document.getElementById('playButton')
var muteButton = document.getElementById('muteButton')

var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');

var minutes = parseInt(myTrack.duration/60);
var seconds = parseInt(myTrack.duration%60);


duration.innerHTML = minutes + ':' + seconds;


    playButton.addEventListener('click',playOrPause,false);
    soundButton.addEventListener('click',muteOrUnmute,false)


function playOrPause() {
    if(!myTrack.paused && !myTrack.ended){
        myTrack.pause();
        playButton.style.backgroundImage = "url(images/playbutton.png)";
        window.clearInterval(updateTime);

    }else{
        myTrack.play();
        playButton.style.backgroundImage = "url(images/pausebutton.png)";
        updateTime = setInterval(timerUpdate,500);
    }
}

function muteOrUnmute() {
    if(myTrack.muted == true){
        myTrack.muted = false;
        soundButton.style.backgroundImage = 'url(images/soundbutton.png)';
    }else{
        myTrack.muted = true;
        soundButton.style.backgroundImage = 'url(images/mutebutton.png)';
    }
}

function timerUpdate() {
    if(!myTrack.ended){
        var playedMinutes = parseInt(myTrack.currentTime/60);
        var playedSeconds = parseInt(myTrack.currentTime%60);
        currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
    }else{
        currentTime = 0.00;
    }
}




