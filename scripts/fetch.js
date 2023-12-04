document.addEventListener('DOMContentLoaded', () => {
    fetchData(); // Инициализация при загрузке страницы
});

// function fetchData() {
//     document.getElementById('error-message').style.display = 'none';
//     document.getElementById('data-container').style.display = 'none';
//
//     const filter = document.getElementById('filter').value || 1;
//
//     document.getElementById('preloader').style.display = 'block';
//
//     // URL для получения комментариев под фотографией
//     const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${filter}`;
//
//     fetch(apiUrl)
//         .then(response => {
//             document.getElementById('preloader').style.display = 'none';
//
//             if (!response.ok) {
//                 throw new Error('Сеть перестала быть доступной');
//             }
//
//             return response.json();
//         })
//         .then(data => {
//             document.getElementById('preloader').style.display = 'none';
//             // if (data.length === 0) {
//             //     document.getElementById('preloader').style.display = 'block';
//             // }
//             renderComments(data);
//         })
//         .catch(error => {
//             document.getElementById('preloader').style.display = 'none';
//             document.getElementById('error-message').style.display = 'block';
//             const dataContainer = document.getElementById('data-container');
//             dataContainer.innerHTML = '';
//             console.error(error);
//         });
// }
//
//
// async function fetchData() {
//     document.getElementById('error-message').style.display = 'none';
//     document.getElementById('data-container').style.display = 'none';
//     const filter = document.getElementById('filter').value || 1;
//
//     document.getElementById('preloader').style.display = 'block';
//
//     // URL для получения комментариев под фотографией
//     const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${filter}`;
//
//     try {
//         const response = await fetch(apiUrl);
//
//         document.getElementById('preloader').style.display = 'none';
//
//         if (!response.ok) {
//             throw new Error('Сеть перестала быть доступной');
//         }
//
//         const data = await response.json();
//         renderComments(data);
//     } catch (error) {
//             document.getElementById('preloader').style.display = 'none';
//             document.getElementById('error-message').style.display = 'block';
//             const dataContainer = document.getElementById('data-container');
//             dataContainer.innerHTML = '';
//             console.error(error);
//     }
// }
//
// //
// // function renderComments(comments) {
// //     const dataContainer = document.getElementById('data-container');
// //     dataContainer.innerHTML = ''; // Очищаем контейнер перед отрисовкой новых данных
// //     dataContainer.style.display = 'block';
// //
// //     if (comments.length === 0) {
// //         const noCommentsMessage = document.createElement('p');
// //         noCommentsMessage.textContent = 'Нет комментариев для отображения.';
// //         dataContainer.appendChild(noCommentsMessage);
// //     } else {
// //         comments.forEach(comment => {
// //             const commentElement = document.createElement('div');
// //             commentElement.innerHTML = `
// //     <li><strong><p>${comment.name}</strong>: ${comment.body}</p></li>
// //     <hr>
// // `;
// //
// //             dataContainer.appendChild(commentElement);
// //         });
// //     }
// // }
//
// // Обновленная функция renderComments
// function renderComments(comments) {
//     const dataContainer = document.getElementById('data-container');
//     const template = document.getElementById('comment-template');
//
//     // Очищаем контейнер перед отрисовкой новых данных
//     // dataContainer.innerHTML = '';
//     dataContainer.style.display = 'block';
//
//     if (comments.length === 0) {
//         const noCommentsMessage = document.createElement('p');
//         noCommentsMessage.textContent = 'Нет комментариев для отображения.';
//         dataContainer.appendChild(noCommentsMessage);
//     } else {
//         comments.forEach(comment => {
//             // Клонируем содержимое template
//             const commentElement = document.importNode(template.content, true);
//
//             // Заполняем данные из комментария
//             commentElement.querySelector('strong p').textContent = comment.name;
//             commentElement.querySelector('span').textContent = comment.body;
//
//             // Добавляем комментарий в контейнер
//             dataContainer.appendChild(commentElement);
//         });
//     }
// }



// function fetchData() { // ______________________
//     document.getElementById('error-message').style.display = 'none';
//     document.getElementById('data-container').style.display = 'none';
//
//     const filter = document.getElementById('filter').value || 1;
//
//     document.getElementById('preloader').style.display = 'block';
//
//     // URL для получения комментариев под фотографией
//     const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${filter}`;
//
//     fetch(apiUrl)
//         .then(response => {
//             document.getElementById('preloader').style.display = 'none';
//
//             if (!response.ok) {
//                 throw new Error('Сеть перестала быть доступной');
//             }
//
//             return response.json();
//         })
//         .then(data => {
//             document.getElementById('preloader').style.display = 'none';
//             renderComments(data);
//         })
//         .catch(error => {
//             document.getElementById('preloader').style.display = 'none';
//             document.getElementById('error-message').style.display = 'block';
//             const dataContainer = document.getElementById('data-container');
//             dataContainer.innerHTML = '';
//             console.error(error);
//         });
// }

// async function fetchData() {
//     document.getElementById('error-message').style.display = 'none';
//     document.getElementById('data-container').style.display = 'none';
//     const filter = document.getElementById('filter').value || 1;
//
//     document.getElementById('preloader').style.display = 'block';
//
//     // URL для получения комментариев под фотографией
//     const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${filter}`;
//
//     try {
//         const response = await fetch(apiUrl);
//
//         document.getElementById('preloader').style.display = 'none';
//
//         if (!response.ok) {
//             throw new Error('Сеть перестала быть доступной');
//         }
//
//         const data = await response.json();
//         renderComments(data);
//     } catch (error) {
//         document.getElementById('preloader').style.display = 'none';
//         document.getElementById('error-message').style.display = 'block';
//         const dataContainer = document.getElementById('data-container');
//         dataContainer.innerHTML = '';
//         console.error(error);
//     }
// }

// function renderComments(comments) {
//     const dataContainer = document.getElementById('data-container');
//     const template = document.getElementById('comment-template');
//
//     // Удаление всех дочерних элементов контейнера
//     // while (dataContainer.firstChild) {
//     //     dataContainer.removeChild(dataContainer.firstChild);
//     // }
//     // dataContainer.innerHTML = ''
//
//     // const template2 = document.createElement('template')
//     // template2.appendChild(document.createElement('strong'))
//     // template2.appendChild(document.createElement('p'))
//     //
//     // dataContainer.appendChild(template2)
//
//
//     // dataContainer.appendChild('strong')
//
//     dataContainer.style.display = 'block';
//
//     if (comments.length === 0) {
//         const noCommentsMessage = document.createElement('p');
//         noCommentsMessage.textContent = 'Нет комментариев для отображения.';
//         dataContainer.appendChild(noCommentsMessage);
//     } else {
//         comments.forEach(comment => {
//             const clone = document.importNode(template.content, true);
//             clone.querySelector('strong').textContent = comment.name;
//             clone.querySelector('p').textContent = comment.body;
//             dataContainer.appendChild(clone);
//         });
//     }
// }


async function fetchData() {
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('data-container').style.display = 'none';
    const filter = document.getElementById('filter').value || 1;

    document.getElementById('preloader').style.display = 'block';

    // URL для получения комментариев под фотографией
    const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${filter}`;

    try {
        const response = await fetch(apiUrl);

        document.getElementById('preloader').style.display = 'none';

        if (!response.ok) {
            throw new Error('Сеть перестала быть доступной');
        }

        const data = await response.json();
        renderComments(data);
    } catch (error) {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('error-message').style.display = 'block';
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = '';
        console.error(error);
    }
}

function renderComments(comments) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; // Очищаем контейнер перед отрисовкой новых данных
    dataContainer.style.display = 'block';

    if (comments.length === 0) {
        const noCommentsMessage = document.createElement('p');
        noCommentsMessage.textContent = 'Нет комментариев для отображения.';
        dataContainer.appendChild(noCommentsMessage);
    } else {
        const template = document.getElementById('comment-template');

        comments.forEach(comment => {
            const commentClone = document.importNode(template.content, true);
            commentClone.querySelector('strong p').textContent = comment.name;
            commentClone.querySelector('p:nth-child(2)').textContent = comment.body;

            dataContainer.appendChild(commentClone);
        });
    }
}

