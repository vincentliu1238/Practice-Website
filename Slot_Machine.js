function spinReels() {
    const numberOfReels = 5;
    const display = document.getElementById('slot-images');
    const imageNames = ['7.png', 'banana.png', 'bar.png', 'bell.png', 'cherry.png', 'grape.png', 'lemon.png', 'orange.png', 'watermelon.png'];
    const values = [];
    const images = [];

    for (let i = 0; i < numberOfReels; i++) {
        const randomIndex = Math.floor(Math.random() * 9) + 1;
        values.push(randomIndex);
        images.push(`<img src="Slot Machine Images/${imageNames[randomIndex - 1]}">`);
    }

    display.innerHTML = images.join('');
}
