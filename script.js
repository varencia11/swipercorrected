new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
});

let swiper;

    function toggleView() {
        if (window.innerWidth < 768) {
            // Инициализируем Swiper, если он не инициализирован
            if (!swiper) {
                swiper = new Swiper('.image-slider', {
                    // Ваши настройки Swiper
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }
        } else {
            // Разрушаем Swiper, если он существует
            if (swiper) {
                swiper.destroy(true, true);
                swiper = undefined;
            }
        }
    }

    // Проверяем размер экрана при загрузке
    toggleView();

    // Проверяем размер экрана при изменении
    window.addEventListener('resize', toggleView);

    document.getElementById('toggleButton').addEventListener('click', function () {
        // Находим все элементы с классом 'content'
        const contentDivs = document.querySelectorAll('.content');
        const toggleIcon = document.getElementById('toggleIcon');
        // Проверяем, скрыты ли дивы или нет, основываясь на первом диве
        const areHidden = contentDivs[0].style.display === 'none' || !contentDivs[0].classList.contains('show');
        
        if (areHidden) {
            // Если скрыты, показываем все
            contentDivs.forEach(div => {
                div.classList.add('show');
            });
            this.textContent = 'Скрыть';
            toggleIcon.src = ('resources copy/hide.svg');

        } else {
            // Если показаны, скрываем все
            contentDivs.forEach(div => {
                div.classList.remove('show');
            });
            this.textContent = 'Показать все';
            toggleIcon.src = ('resources copy/expand.svg')
        }
    });
  