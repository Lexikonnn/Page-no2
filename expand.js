document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("show-more-btn");
    const hiddenPosts = document.querySelectorAll(".hidden-post");
    let currentIndex = 0;

    showMoreBtn.addEventListener("click", function () {
        // Zobrazit postupně 3 příspěvky s animací
        for (let i = 0; i < 6; i++) {
            if (currentIndex < hiddenPosts.length) {
                hiddenPosts[currentIndex].classList.add("show");
                currentIndex++;
            }
        }

        // Schovat tlačítko, pokud nejsou další příspěvky
        if (currentIndex >= hiddenPosts.length) {
            showMoreBtn.style.display = "none";
        }
    });
});