// Получаем ссылки на элементы DOM
const menu = document.getElementById('menu');
const content = document.getElementById('content');


// Обработчик кликов по пунктам меню
menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        // e.preventDefault();
        const pageName = e.target.getAttribute('data-page');
        loadPage(pageName);
    }
});

// Функция загрузки страницы
// function loadPage(pageName) {
//     fetch(`${pageName}.html`) // Загрузка содержимого страницы по имени файла
//         .then(response => response.text())
//         .then(data => {
//             content.innerHTML = data;
//             updateActiveMenuItem(pageName);
//         })
//         // .catch(error => console.error(error));
// }
function loadPage() {
    const pageName = window.location.hash.substring(1) || 'my_page'; // По умолчанию загружаем 'my_page'
    // const pageName = window.location.hash.substring(1);
    fetch(`${pageName}.html`) // Загрузка содержимого страницы по имени файла
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
            updateActiveMenuItem(pageName);
        })
        // .catch(error => console.error(error));
}


// Функция обновления классов "active" для пунктов меню
function updateActiveMenuItem(activePage) {
    const menuItems = menu.querySelectorAll('li');
    menuItems.forEach(item => {
        const pageName = item.querySelector('a').getAttribute('data-page');
        if (pageName === activePage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// По умолчанию загружаем первую страницу
loadPage('my_page');
window.addEventListener('hashchange', loadPage);

