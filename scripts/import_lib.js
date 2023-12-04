function showModal() {
    Swal.fire({
        title: 'Окно открыто',
        text: 'Теперь его можно закрыть.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

// Инициализация Swiper слайдера
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});