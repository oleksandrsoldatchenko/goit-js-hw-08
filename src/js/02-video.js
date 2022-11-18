// Додаємо бібліотеку пеєра і lodash
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Ініціалізуємо плеєр
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Відстежування події timeupdate - часу відтворення
player.on('timeupdate', throttle(timeUpdate, 1000));

// Запис поточного часу відео в localStorage
function timeUpdate(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
};

// Повернення з localStorage збереженого часу відео
const getCurrentTime = (localStorage.getItem('videoplayer-current-time'));

// Встановлення часу з памяті localStorage після перезавантаження
if (getCurrentTime !== null) {
    player.setCurrentTime(getCurrentTime)
};