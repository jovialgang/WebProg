// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('tableForm');
//     const resultContainer = document.getElementById('resultContainer');
//
//     // Загружаем сохраненные параметры при загрузке страницы
//     loadParameters();
//
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//
//         // Получаем значения из формы
//         const numberOfDays = document.getElementById('days').value;
//         const maxLessonsPerDay = document.getElementById('maxLessons').value;
//         const language = document.getElementById('language').value;
//
//         // Сохраняем параметры в локальное хранилище
//         saveParameters(numberOfDays, maxLessonsPerDay, language);
//
//         // Генерируем и отображаем таблицу
//         generateTable(numberOfDays, maxLessonsPerDay, language);
//     });
//
//     // function generateTable(days, maxLessons, language) {
//     //     // Очищаем содержимое контейнера перед добавлением новой таблицы
//     //     resultContainer.innerHTML = '';
//     //
//     //     // Создаем таблицу и заголовок
//     //     const table = document.createElement('table');
//     //     const thead = document.createElement('thead');
//     //     const trHeader = document.createElement('tr');
//     //
//     //     // Заголовок таблицы
//     //     const thDay = document.createElement('th');
//     //     thDay.textContent = 'Day';
//     //     trHeader.appendChild(thDay);
//     //
//     //     const thLessons = document.createElement('th');
//     //     thLessons.textContent = 'Number of Lessons';
//     //     trHeader.appendChild(thLessons);
//     //
//     //     const thLanguage = document.createElement('th');
//     //     thLanguage.textContent = 'Lesson';
//     //     trHeader.appendChild(thLanguage);
//     //
//     //     thead.appendChild(trHeader);
//     //     table.appendChild(thead);
//     //
//     //     // Добавляем строки с данными
//     //     for (let i = 1; i <= days; i++) {
//     //         const tr = document.createElement('tr');
//     //
//     //         const tdDay = document.createElement('td');
//     //         tdDay.textContent = `Day ${i}`;
//     //         tr.appendChild(tdDay);
//     //
//     //         const tdLessons = document.createElement('td');
//     //         tdLessons.textContent = Math.floor(Math.random() * maxLessons) + 1; // Генерируем случайное число занятий
//     //         tr.appendChild(tdLessons);
//     //
//     //         const tdLanguage = document.createElement('td');
//     //         tdLanguage.textContent = language;
//     //         tr.appendChild(tdLanguage);
//     //
//     //         table.appendChild(tr);
//     //     }
//     //
//     //     // Добавляем таблицу в контейнер
//     //     resultContainer.appendChild(table);
//     // }
//
//     function generateTable(days, maxLessons, language) {
//         // Очищаем предыдущий результат, если есть
//         resultContainer.innerHTML = '';
//
//         // Получаем элемент таблицы по ID
//         const table = document.getElementById('resultTable');
//
//         // Создаем заголовок таблицы
//         const headerRow = table.querySelector('thead tr');
//         headerRow.innerHTML = '<th>Day</th>';
//
//         for (let i = 1; i <= maxLessons; i++) {
//             headerRow.innerHTML += `<th>Lesson ${i}</th>`;
//         }
//
//         // Создаем строки для каждого дня
//         const tbody = table.querySelector('tbody');
//         tbody.innerHTML = '';
//
//         for (let day = 1; day <= days; day++) {
//             const tableRow = document.createElement('tr');
//             tableRow.innerHTML = `<td>Day ${day}</td>`;
//
//             // Добавляем ячейки для каждого занятия
//             for (let lesson = 1; lesson <= maxLessons; lesson++) {
//                 tableRow.innerHTML += `<td>${language} Lesson ${lesson}</td>`;
//             }
//
//             tbody.appendChild(tableRow);
//         }
//
//         // Добавляем таблицу в контейнер
//         resultContainer.appendChild(table);
//     }
//
//
//
//     function saveParameters(days, maxLessons, language) {
//         // Сохраняем параметры в локальное хранилище
//         localStorage.setItem('numberOfDays', days);
//         localStorage.setItem('maxLessonsPerDay', maxLessons);
//         localStorage.setItem('language', language);
//     }
//
//     function loadParameters() {
//         // Загружаем параметры из локального хранилища
//         const numberOfDays = localStorage.getItem('numberOfDays');
//         const maxLessonsPerDay = localStorage.getItem('maxLessonsPerDay');
//         const language = localStorage.getItem('language');
//
//         // Заполняем поля формы, если параметры есть
//         if (numberOfDays) {
//             document.getElementById('days').value = numberOfDays;
//         }
//         if (maxLessonsPerDay) {
//             document.getElementById('maxLessons').value = maxLessonsPerDay;
//         }
//         if (language) {
//             document.getElementById('language').value = language;
//         }
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('tableForm');
//     const resultContainer = document.getElementById('resultContainer');
//     const templateTable = document.getElementById('templateTable');
//
//     // Загружаем сохраненные параметры при загрузке страницы
//     loadParameters();
//
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//
//         // Получаем значения из формы
//         const numberOfDays = document.getElementById('days').value;
//         const maxLessonsPerDay = document.getElementById('maxLessons').value;
//         const language = document.getElementById('language').value;
//
//         // Сохраняем параметры в локальное хранилище
//         saveParameters(numberOfDays, maxLessonsPerDay, language);
//
//         // Генерируем и отображаем таблицу
//         generateTable(numberOfDays, maxLessonsPerDay, language);
//     });
//
//     function generateTable(days, maxLessons, language) {
//         // Очищаем предыдущий результат
//         resultContainer.innerHTML = '';
//
//         // Клонируем шаблон таблицы
//         const tableClone = templateTable.cloneNode(true);
//
//         // Получаем thead для добавления заголовков
//         const tableHeader = tableClone.querySelector('thead > tr');
//
//         // Добавляем заголовки для каждого занятия
//         for (let lesson = 1; lesson <= maxLessons; lesson++) {
//             const lessonHeader = document.createElement('th');
//             lessonHeader.textContent = `Lesson ${lesson}`;
//             tableHeader.appendChild(lessonHeader);
//         }
//
//         // Получаем тело таблицы для добавления строк
//         const tableBody = tableClone.querySelector('tbody');
//
//         // Создаем строки для каждого дня
//         for (let day = 1; day <= days; day++) {
//             const tableRow = document.createElement('tr');
//             const dayCell = document.createElement('td');
//             dayCell.textContent = `Day ${day}`;
//             tableRow.appendChild(dayCell);
//
//             // Добавляем ячейки для каждого занятия
//             for (let lesson = 1; lesson <= maxLessons; lesson++) {
//                 const lessonCell = document.createElement('td');
//                 lessonCell.textContent = `${language} Lesson ${lesson}`;
//                 tableRow.appendChild(lessonCell);
//             }
//
//             tableBody.appendChild(tableRow);
//         }
//
//         // Добавляем таблицу в контейнер
//         resultContainer.appendChild(tableClone);
//     }
//
//     function saveParameters(days, maxLessons, language) {
//         localStorage.setItem('numberOfDays', days);
//         localStorage.setItem('maxLessonsPerDay', maxLessons);
//         localStorage.setItem('language', language);
//     }
//
//     function loadParameters() {
//         const numberOfDays = localStorage.getItem('numberOfDays');
//         const maxLessonsPerDay = localStorage.getItem('maxLessonsPerDay');
//         const language = localStorage.getItem('language');
//
//         if (numberOfDays) {
//             document.getElementById('days').value = numberOfDays;
//         }
//         if (maxLessonsPerDay) {
//             document.getElementById('maxLessons').value = maxLessonsPerDay;
//         }
//         if (language) {
//             document.getElementById('language').value = language;
//         }
//     }
// });

// document.addEventListener('DOMContentLoaded', function () { // _________________________
//     const form = document.getElementById('tableForm');
//     const resultContainer = document.getElementById('resultContainer');
//     const templateTable = document.getElementById('templateTable');
//
//     // Загружаем сохраненные параметры при загрузке страницы
//     loadParameters();
//
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//
//         // Получаем значения из формы
//         const numberOfDays = document.getElementById('days').value;
//         const maxLessonsPerDay = document.getElementById('maxLessons').value;
//         const language = document.getElementById('language').value;
//
//         // Сохраняем параметры в локальное хранилище
//         saveParameters(numberOfDays, maxLessonsPerDay, language);
//
//         // Генерируем и отображаем таблицу
//         generateTable(numberOfDays, maxLessonsPerDay, language);
//     });
//
//     function generateTable(days, maxLessons, language) {
//         // Очищаем предыдущий результат
//         resultContainer.innerHTML = '';
//
//         // Клонируем шаблон таблицы
//         const tableClone = templateTable.cloneNode(true);
//
//         // Получаем thead для добавления заголовков
//         const tableHeader = tableClone.querySelector('thead > tr');
//
//         // Подготавливаем массив уроков из введенной строки, разделенной запятыми
//         const lessonsArray = language.split(',').map(lesson => lesson.trim());
//
//         // Добавляем заголовки для каждого урока
//         for (let lesson = 1; lesson <= maxLessons; lesson++) {
//             const lessonHeader = document.createElement('th');
//
//             // Выбираем урок случайным образом из массива
//             lessonHeader.textContent = `Lesson ${lesson}`;
//
//             tableHeader.appendChild(lessonHeader);
//         }
//
//         // Получаем тело таблицы для добавления строк
//         const tableBody = tableClone.querySelector('tbody');
//
//         // Создаем строки для каждого дня
//         for (let day = 1; day <= days; day++) {
//             const tableRow = document.createElement('tr');
//             const dayCell = document.createElement('td');
//             dayCell.textContent = `Day ${day}`;
//             tableRow.appendChild(dayCell);
//
//             // Добавляем ячейки для каждого урока
//             for (let lesson = 1; lesson <= maxLessons; lesson++) {
//                 const lessonCell = document.createElement('td');
//
//                 // Выбираем урок случайным образом из массива
//                 const randomLesson = getRandomLesson(lessonsArray);
//                 lessonCell.textContent = `${randomLesson} Lesson ${lesson}`;
//
//                 tableRow.appendChild(lessonCell);
//             }
//
//             tableBody.appendChild(tableRow);
//         }
//
//         // Добавляем таблицу в контейнер
//         resultContainer.appendChild(tableClone);
//     }
//
//     function saveParameters(days, maxLessons, language) {
//         localStorage.setItem('numberOfDays', days);
//         localStorage.setItem('maxLessonsPerDay', maxLessons);
//         localStorage.setItem('language', language);
//     }
//
//     function loadParameters() {
//         const numberOfDays = localStorage.getItem('numberOfDays');
//         const maxLessonsPerDay = localStorage.getItem('maxLessonsPerDay');
//         const language = localStorage.getItem('language');
//
//         if (numberOfDays) {
//             document.getElementById('days').value = numberOfDays;
//         }
//         if (maxLessonsPerDay) {
//             document.getElementById('maxLessons').value = maxLessonsPerDay;
//         }
//         if (language) {
//             document.getElementById('language').value = language;
//         }
//     }
//
//     function getRandomLesson(lessonsArray) {
//         // Получаем случайный индекс из массива уроков
//         const randomIndex = Math.floor(Math.random() * lessonsArray.length);
//         // Возвращаем урок по случайному индексу
//         return lessonsArray[randomIndex];
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tableForm');
    const resultContainer = document.getElementById('resultContainer');
    const templateTable = document.getElementById('templateTable');

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
        // Очищаем предыдущий результат
        resultContainer.innerHTML = '';

        // Клонируем шаблон таблицы
        const tableClone = document.importNode(templateTable.content, true);

        // Получаем thead для добавления заголовков
        const tableHeader = tableClone.querySelector('thead > tr');

        // Подготавливаем массив уроков из введенной строки, разделенной запятыми
        const lessonsArray = language.split(',').map(lesson => lesson.trim());

        // Добавляем заголовки для каждого урока
        for (let lesson = 1; lesson <= maxLessons; lesson++) {
            const lessonHeader = document.createElement('th');

            // Выбираем урок случайным образом из массива
            // const randomLesson = getRandomLesson(lessonsArray);
            lessonHeader.textContent = `Lesson ${lesson}`;

            tableHeader.appendChild(lessonHeader);
        }

        // Получаем тело таблицы для добавления строк
        const tableBody = tableClone.querySelector('tbody');

        // Создаем строки для каждого дня
        for (let day = 1; day <= days; day++) {
            const tableRow = document.createElement('tr');
            const dayCell = document.createElement('td');
            dayCell.textContent = `Day ${day}`;
            tableRow.appendChild(dayCell);

            // Добавляем ячейки для каждого урока
            for (let lesson = 1; lesson <= maxLessons; lesson++) {
                const lessonCell = document.createElement('td');

                // Выбираем урок случайным образом из массива
                const randomLesson = getRandomLesson(lessonsArray);
                lessonCell.textContent = `${randomLesson} Lesson ${lesson}`;

                tableRow.appendChild(lessonCell);
            }

            tableBody.appendChild(tableRow);
        }

        // Добавляем таблицу в контейнер
        resultContainer.appendChild(tableClone);
    }

    function saveParameters(days, maxLessons, language) {
        localStorage.setItem('numberOfDays', days);
        localStorage.setItem('maxLessonsPerDay', maxLessons);
        localStorage.setItem('language', language);
    }

    function loadParameters() {
        const numberOfDays = localStorage.getItem('numberOfDays');
        const maxLessonsPerDay = localStorage.getItem('maxLessonsPerDay');
        const language = localStorage.getItem('language');

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

    function getRandomLesson(lessonsArray) {
        // Получаем случайный индекс из массива уроков
        const randomIndex = Math.floor(Math.random() * lessonsArray.length);
        // Возвращаем урок по случайному индексу
        return lessonsArray[randomIndex];
    }
});
