document.addEventListener('DOMContentLoaded', () => {
    fetchData(); // Инициализация при загрузке страницы
});

function fetchData() {
    document.getElementById('error-message').style.display = 'none';
    const filter = document.getElementById('filter').value || 1;

    document.getElementById('preloader').style.display = 'block';

    // URL для получения комментариев под фотографией
    const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${filter}`;

    fetch(apiUrl)
        .then(response => {
            document.getElementById('preloader').style.display = 'none';

            if (!response.ok) {
                throw new Error('Сеть перестала быть доступной');
            }

            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                document.getElementById('preloader').style.display = 'block';
            }
            renderComments(data);
        })
        .catch(error => {
            document.getElementById('error-message').style.display = 'block';
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = '';
            console.error(error);
        });
}

function renderComments(comments) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; // Очищаем контейнер перед отрисовкой новых данных

    if (comments.length === 0) {
        const noCommentsMessage = document.createElement('p');
        noCommentsMessage.textContent = 'Нет комментариев для отображения.';
        dataContainer.appendChild(noCommentsMessage);
    } else {
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.innerHTML = `
                    <p><strong>${comment.name}</strong></p>
                    <p>${comment.body}</p>
                    <hr>
                `;
            dataContainer.appendChild(commentElement);
        });
    }
}