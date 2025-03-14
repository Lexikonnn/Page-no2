document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown > a").forEach((dropdown) => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault();
            let menu = this.nextElementSibling;

            // Zavři všechny ostatní dropdowny, pokud kliknu jinam
            document.querySelectorAll(".dropdown-menu").forEach((otherMenu) => {
                if (otherMenu !== menu) {
                    otherMenu.style.opacity = "0";
                    otherMenu.style.visibility = "hidden";
                    otherMenu.style.transform = "translateY(10px)";
                }
            });

            // Přepnutí viditelnosti dropdownu
            if (menu.style.opacity === "1") {
                menu.style.opacity = "0";
                menu.style.visibility = "hidden";
                menu.style.transform = "translateY(10px)";
            } else {
                menu.style.opacity = "1";
                menu.style.visibility = "visible";
                menu.style.transform = "translateY(0)";
            }
        });
    });

    // Kliknutí mimo dropdown zavře menu (pouze pokud není hover)
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.style.opacity = "0";
                menu.style.visibility = "hidden";
                menu.style.transform = "translateY(10px)";
            });
        }
    });
});