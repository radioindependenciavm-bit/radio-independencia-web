document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links){
    toggle.addEventListener('click', function(){
      links.classList.toggle('open');
    });
  }

  // Reproductor en vivo — solo existe en la página de inicio.
  // Reemplazar streamAudio src por la URL real del stream de Caster.fm
  var audio = document.getElementById('streamAudio');
  var btn = document.getElementById('playBtn');
  var label = document.getElementById('playLabel');
  if (audio && btn && label){
    btn.addEventListener('click', function(){
      if (audio.paused){
        audio.play().catch(function(){ /* URL de stream pendiente de configurar */ });
        btn.classList.add('playing');
        label.textContent = 'Pausar';
      } else {
        audio.pause();
        btn.classList.remove('playing');
        label.textContent = 'Escuchar en vivo';
      }
    });
  }
});
