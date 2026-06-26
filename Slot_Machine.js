function spinReels() {
    const numberOfReels = 5;
    const display = document.querySelectorAll('.slot-images');
    const imageNames = ['7.png', 'banana.png', 'bar.png', 'bell.png', 'cherry.png', 'grape.png', 'lemon.png', 'orange.png', 'watermelon.png'];
    const animationDuration = 1200; //How long the animation  is 1200ms
    const frameInterval = 100; // How many frames each second
    const frames = Math.floor(animationDuration / frameInterval); // 1.2 seconds of animation (fps)
    let currentFrame = 0; //Starting frame

    const intervalId = setInterval(() => { //setInterval => Timer
        for (let i = 0; i < numberOfReels; i++) { //Generates images (works similar to a dice)
            const randomIndex = Math.floor(Math.random() * imageNames.length);
            display[i].innerHTML = `<img src="Slot Machine Images/${imageNames[randomIndex]}">`;
        } //Keeps generating images

        currentFrame++; //Adds 1 to currentFrame each time

        if (currentFrame >= frames) { //Activates once currentFrame > frames (Stop condition)

            clearInterval(intervalId); //Stops the timer (setInterval)
            for (let i = 0; i < numberOfReels; i++) { //Same generation for random images as the above
                const randomIndex = Math.floor(Math.random() * imageNames.length);
                display[i].innerHTML = `<img src="Slot Machine Images/${imageNames[randomIndex]}">`; //Displays final image
            }

        }
    }, frameInterval); //Prolongs the animation else it would look like an instant generation
}

window.onload = function() {
    const displays = document.querySelectorAll('.slot-images');

    for (let i = 0; i < displays.length; i++) {
        displays[i].innerHTML = '<img src="Slot Machine Images/question mark.png">'; //Displays question marks before using
    }
};
