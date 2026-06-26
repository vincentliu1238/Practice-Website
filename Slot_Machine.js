function spinReels() {
    const numberOfReels = 5;
    const display = document.querySelectorAll('.slot-images');
    const imageNames = ['7.png', 'banana.png', 'bar.png', 'bell.png', 'cherry.png', 'grape.png', 'lemon.png', 'orange.png', 'watermelon.png'];
    const animationDuration = 1200; //How long the animation  is 1200ms
    const frameInterval = 100; // How many frames each second
    const frames = Math.floor(animationDuration / frameInterval); // 1.2 seconds of animation (fps)
    let currentFrame = 0; //Starting frame
    let win = false; //Win condition
    let count = 0; 

    const intervalId = setInterval(() => { //setInterval => Timer
        for (let i = 0; i < numberOfReels; i++) { //Generates images (works similar to a dice)
            const randomIndex = Math.floor(Math.random() * imageNames.length);
            display[i].innerHTML = `<img src="Slot Machine Images/${imageNames[randomIndex]}">`;
        } //Keeps generating images

        currentFrame++; //Adds 1 to currentFrame each time

        if (currentFrame >= frames) { //Activates once currentFrame > frames (Stop condition)

            clearInterval(intervalId); //Stops the timer (setInterval)
            const random = [];
            for (let i = 0; i < numberOfReels; i++) { //Same generation for random images as the above
                const randomIndex = Math.floor(Math.random() * imageNames.length);
                
                random.push(randomIndex);
                for(let i = 0; i < random.length; i++){
                    for(let j = 1; j < random.length; j++){ //Check if player has won (Incomplete)
                        if(i == j){
                            count++;
                        }
                    }
                }

                if(count == 5){
                    win = true;
                }

                display[i].innerHTML = `<img src="Slot Machine Images/${imageNames[randomIndex]}">`; //Displays final image

                if(win == true){
                    document.getElementById("").textContent = "You Win!"; //Display Win (Currently Incomplete)
                }
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
