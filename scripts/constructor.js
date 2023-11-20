document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tableForm');
    const resultContainer = document.getElementById('resultContainer');

    // Загружаем сохраненные параметры при загрузке страницы
    loadParameters();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Получаем значения из формы
        const numberOfDays = document.getElementById('days').value;
        const maxLessonsPerDay = document.getElementById('maxLessons').value;
        const language = document.getElementById('language').value;

        // Сохраняем параметры в локальное хранилище
        saveParameters(numberOfDays, maxLessonsPerDay, language);

        // Генерируем и отображаем таблицу
        generateTable(numberOfDays, maxLessonsPerDay, language);
    });

    function generateTable(days, maxLessons, language) {
        // Очищаем содержимое контейнера перед добавлением новой таблицы
        resultContainer.innerHTML = '';

        // Создаем таблицу и заголовок
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const trHeader = document.createElement('tr');

        // Заголовок таблицы
        const thDay = document.createElement('th');
        thDay.textContent = 'Day';
        trHeader.appendChild(thDay);

        const thLessons = document.createElement('th');
        thLessons.textContent = 'Number of Lessons';
        trHeader.appendChild(thLessons);

        const thLanguage = document.createElement('th');
        thLanguage.textContent = 'Lesson';
        trHeader.appendChild(thLanguage);

        thead.appendChild(trHeader);
        table.appendChild(thead);

        // Добавляем строки с данными
        for (let i = 1; i <= days; i++) {
            const tr = document.createElement('tr');

            const tdDay = document.createElement('td');
            tdDay.textContent = `Day ${i}`;
            tr.appendChild(tdDay);

            const tdLessons = document.createElement('td');
            tdLessons.textContent = Math.floor(Math.random() * maxLessons) + 1; // Генерируем случайное число занятий
            tr.appendChild(tdLessons);

            const tdLanguage = document.createElement('td');
            tdLanguage.textContent = language;
            tr.appendChild(tdLanguage);

            table.appendChild(tr);
        }

        // Добавляем таблицу в контейнер
        resultContainer.appendChild(table);
    }



    function saveParameters(days, maxLessons, language) {
        // Сохраняем параметры в локальное хранилище
        localStorage.setItem('numberOfDays', days);
        localStorage.setItem('maxLessonsPerDay', maxLessons);
        localStorage.setItem('language', language);
    }

    function loadParameters() {
        // Загружаем параметры из локального хранилища
        const numberOfDays = localStorage.getItem('numberOfDays');
        const maxLessonsPerDay = localStorage.getItem('maxLessonsPerDay');
        const language = localStorage.getItem('language');

        // Заполняем поля формы, если параметры есть
        if (numberOfDays) {
            document.getElementById('days').value = numberOfDays;
        }
        if (maxLessonsPerDay) {
            document.getElementById('maxLessons').value = maxLessonsPerDay;
        }
        if (language) {
            document.getElementById('language').value = language;
        }
    }
});
