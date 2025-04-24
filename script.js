function showModal(imageSrc, imageSrc2, text, pr, q, sm) {
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-image2').src = imageSrc2;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('prof').innerText = pr;
    document.getElementById('quote').innerText = q;
    document.getElementById('smth').innerText = sm;

    if (pr === 'Web-разработчик' && text === 'Кухаренко Анастасия') {
        document.getElementById('prof').style.left = '560px';
    } 
    if (pr === 'Web-разработчик' && text === 'Литвинов Илья') {
        document.getElementById('prof').style.left = '535px';
        document.getElementById('quote').style.top = '260px';
    } 
    if (pr === 'Программист' && text === 'Хмелевский Богдан') {
        document.getElementById('prof').style.left = '570px';
        document.getElementById('quote').style.top = '250px';
    }
    if (pr === 'Программист' && text === 'Янковский Артур') {
        document.getElementById('prof').style.left = '560px';
        document.getElementById('quote').style.top = '260px';
    }
    if (pr === 'Дизайнер' && text === 'Гераськова Ксения') {
        document.getElementById('prof').style.left = '575px';
    }
    if (pr === 'Дизайнер' && text === 'Быстренкова Евгения') {
        document.getElementById('prof').style.left = '580px';
        document.getElementById('quote').style.top = '250px';
    }
    if (pr === 'Техномейкер') {
        document.getElementById('prof').style.left = '555px';
    }
    if (pr === 'Техномейкер' && text === 'Семанчук Артём') {
        document.getElementById('quote').style.top = '275px';
    }
    if (pr === 'Техномейкер' && text === 'Мотькин Михаил') {
        document.getElementById('quote').style.top = '250px';
    }
    if (pr === 'Дизайнер' && text === 'Пещеров Даниил') {
        document.getElementById('quote').style.top = '250px';
    }
    const quoteLength = 33 - sm.length;
    const leftPosition = quoteLength < 33 ? 580 + (quoteLength * 5) : 580; 
    document.getElementById('smth').style.left = `${leftPosition}px`;

    document.getElementById('modal').style.display = 'flex'; // Показываем модальное окно
}

function hideModal() {
    document.getElementById('modal').style.display = 'none'; // Скрываем модальное окно
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById('inst').addEventListener('click', function() {
    window.open('https://www.instagram.com/gomel.iteen.by/', '_blank'); 
});
document.getElementById('telega').addEventListener('click', function() {
    window.open('https://t.me/iteen_edu', '_blank'); 
});