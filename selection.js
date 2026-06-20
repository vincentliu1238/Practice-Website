
/* [flying money popping] */
/*
1. Takes all pcitures from selection.html
2. For each image, do the following:
3. When the user clicks on the image:
4. The animation pop is played
5. After it is played, the animation ends with animationends.This will only execute after the animation is completed
6. The image is removed 
7. once: true makes sure animationend is only played once 
*/
document.querySelectorAll(".picture img").forEach(img => {
    img.addEventListener("click", () => {
        img.classList.add("pop");

        img.addEventListener("animationend", () => {
            img.remove();
        }, { once:true});
    });
});
