import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const lastTime = localStorage.getItem('videoplayer-current-time');

if (lastTime) {
  player.setCurrentTime(lastTime);
}

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
























    // const iframe = document.querySelector('iframe');
    // const player = new Vimeo.Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

