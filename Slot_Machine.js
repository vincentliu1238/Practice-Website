document.querySelectorAll(".spin-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".reel").forEach(reel => {
            reel.classList.add("spin");
        });
    });
});

document.querySelectorAll(".stop-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".reel").forEach(reel => {
            reel.classList.remove("spin");
        });
    });
});