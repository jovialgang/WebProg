function showModal() {
    Swal.fire({
        title: 'Ура',
        text: 'Теперь у вас есть друзья.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

// Инициализация Swiper слайдера
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     }
// });

// Инициализация Swiper слайдера
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,  // Добавляем эту опцию
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
