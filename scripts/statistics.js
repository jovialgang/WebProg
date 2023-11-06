(function() {
    // Функция для вычисления времени загрузки страницы
    function calculateLoadTime() {
        return window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        // return window.performance.timing.loadEventEnd - window.performance.timing.loadEventStart;

        // return window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

    }

    // Функция для отображения времени загрузки страницы
    function displayLoadTime() {
        const loadTime = calculateLoadTime();
        const footer = document.querySelector(".footer");
        const p = document.createElement("p");
        p.innerText = `Page loaded in ${loadTime} ms`;
        footer.appendChild(p);
    }

    // Добавить прослушиватель событий для выполнения статистики при загрузке страницы
    window.addEventListener("load", function() {
        setTimeout(displayLoadTime, 0);
    });
})();


