function spinReels() {
    const result = document.getElementById("result"); //result variable for win/lose message
    result.style.visibility = "hidden"; //keep the result message hidden
    const numberOfReels = 5;
    const display = document.querySelectorAll('.slot-images');
    const imageNames = ['7.png', 'banana.png', 'bar.png', 'bell.png', 'cherry.png', 'grape.png', 'lemon.png', 'orange.png', 'watermelon.png'];
    const animationDuration = 1200; //How long the animation  is 1200ms
    const frameInterval = 100; // How many frames each second
    const frames = Math.floor(animationDuration / frameInterval); // 1.2 seconds of animation (fps)
    let currentFrame = 0; //Starting frame
    let win = false; //Win condition

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
                display[i].innerHTML = `<img src="Slot Machine Images/${imageNames[randomIndex]}">`;
            }

            win = true; //setting win as true 
            for(let i=1; i< random.length; i++){ //loop through each item
                if(random[i] != random[0]){ //check if every other item is the same as the first item (if all are the same: win stays true)
                    win = false;  //if the loop finds that one item does not equal to the first item, then win is now false
                    break;
                }
            }

            if(win){  //if all items are the same, display the winning message
                result.textContent = "You Win!"; 
            } else{ //if all items are not the same, display the losing message
                result.textContent = "You Lose!";
            }
            result.style.visibility = "visible"; //display the message
        }
    }, frameInterval); //Prolongs the animation else it would look like an instant generation
}

window.onload = function() {
    const displays = document.querySelectorAll('.slot-images');

    for (let i = 0; i < displays.length; i++) {
        displays[i].innerHTML = '<img src="Slot Machine Images/question mark.png">'; //Displays question marks before using
    }
     document.getElementById("result").style.visibility = "hidden"; //on load of the slot machine page, keep the result message hidden
};

