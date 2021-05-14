
function initializeVideoPlayerControls() {

    var video = document.getElementById("videoplayer");


    function playVideo(evt) {

        button = evt.target;
        if (video.paused) {
            video.play();
            button.textContent = "Pause";
        } else {
            video.pause();
            button.textContent = "Play";
        }
    }

    function seek(numberOfSeconds) {
        try {
            if (numberOfSeconds == 0) {
                video.currentTime = numberOfSeconds;
            }
            else {
                video.currentTime += numberOfSeconds;
            }

        } catch (err) {
            displayError("Something went wrong...");
        }
    }

    //event handlers on the buttons
    document.getElementById("playbutton").addEventListener("click", playVideo, false);

    document.getElementById("backbutton").addEventListener("click", function () {
        seek(-5);
    }, false);

    document.getElementById("forwardbutton").addEventListener("click", function () {
        seek(5);
    }, false);

    document.getElementById("slowerbutton").addEventListener("click", function () {
        video.playbackRate -= .25;
    }, false);
    document.getElementById("fasterbutton").addEventListener("click", function () {
        video.playbackRate += .25;
    }, false);
    document.getElementById("mutebutton").addEventListener("click", function (s) {
        if (video.muted) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    }, false);

    video.addEventListener("error", function (err) {
        displayError(err);
    }, true);

    function displayError(error) {
        document.getElementById("errorDiv").textContent = error;
    }
}