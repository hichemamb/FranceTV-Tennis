const key = {
   splash: document.querySelector('.welcome-splash'),
   home: document.querySelector('.welcome-home'),
   videoContainer: document.querySelector('.tennis'),
   video: document.querySelector('.tennis-video'),
   micro: document.querySelector('.comment-micro'),
   stats: document.querySelector('.more-stats')
};

const callbacks = {
   onUpdate(state) {
      if ('welcome' in state) {
         setTimeout(() => {
            key.splash.style.display = 'none';
            key.home.style.display = 'block';
         }, 3000);
      }

      if ('getAnswerVideo' in state) {
         key.home.style.display = 'none';
         key.videoContainer.style.display = 'flex';
         key.video.play();
      }

      if ('getComment' in state) {
         console.log(state);
         console.log('ah');
      }

      if ('commentVideo' in state) {
         key.video.pause();
         key.videoContainer.style.display = 'none';
         key.micro.style.display = 'block';

      }

      if ('getConfirmation' in state) {
         key.video.play();
         key.videoContainer.style.display = 'flex';
         key.micro.style.display = 'none';
      }

      if ('displayStats' in state) {
         key.stats.style.display = 'block';
         key.videoContainer.style.display = 'none';
      }
   },
};
assistantCanvas.ready(callbacks);