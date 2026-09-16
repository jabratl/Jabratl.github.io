const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("jabratl-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    if (themeToggle) {

        themeToggle.textContent = "☀️";

    }

}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark");


            const isDark =
                document.body.classList.contains("dark");


            localStorage.setItem(
                "jabratl-theme",
                isDark ? "dark" : "light"
            );


            themeToggle.textContent =
                isDark ? "☀️" : "🌙";

        }
    );

}
