$(document).ready(function() {
  const soundMap = {
      'Q': 'Heater 1',
      'W': 'Heater 2',
      'E': 'Heater 3',
      'A': 'Heater 4',
      'S': 'Clap',
      'D': 'Open-HH',
      'Z': 'Kick-n\'-Hat',
      'X': 'Kick',
      'C': 'Closed-HH'
  };

  function playSound(key) {
      const audio = $(`#${key}`).find('.clip')[0];
      audio.currentTime = 0;
      audio.play();
      $('#display').text(soundMap[key]);
  }

  $('.drum-pad').click(function() {
      const key = $(this).attr('id');
      playSound(key);
  });

  $(document).keydown(function(event) {
      const key = event.key.toUpperCase();
      if (soundMap[key]) {
          playSound(key);
          $(`#${key}`).addClass('pulse');
      }
  });

  $(document).keyup(function(event) {
      const key = event.key.toUpperCase();
      if (soundMap[key]) {
          $(`#${key}`).removeClass('pulse');
      }
  });
});