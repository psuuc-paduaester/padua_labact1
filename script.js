// Simple countdown to the event and map handler
(function(){
  const target = new Date('2026-09-06T11:00:00');
  const elDays = document.getElementById('days');
  const elHours = document.getElementById('hours');
  const elMinutes = document.getElementById('minutes');
  const elSeconds = document.getElementById('seconds');

  function update(){
    const now = new Date();
    const diff = target - now;
    if(diff<=0){ 
      elDays.textContent = '0';
      elHours.textContent = '0';
      elMinutes.textContent = '0';
      elSeconds.textContent = '0';
      clearInterval(timer);
      return;
    }
    const days = Math.floor(diff/86400000);
    const hours = Math.floor((diff%86400000)/3600000);
    const mins = Math.floor((diff%3600000)/60000);
    const secs = Math.floor((diff%60000)/1000);
    
    elDays.textContent = days;
    elHours.textContent = hours;
    elMinutes.textContent = mins;
    elSeconds.textContent = secs;
  }

  const timer = setInterval(update, 1000);
  update();

  const mapButton = document.getElementById('map');
  if (mapButton) {
    mapButton.addEventListener('click', function(e){
      e.preventDefault();
      const mapsUrl = 'https://maps.app.goo.gl/E5Dth6FTkG27BsJd8';
      window.open(mapsUrl, '_blank');
    });
  }

  const formButton = document.getElementById('form');
  if (formButton) {
    formButton.addEventListener('click', function(e){
      e.preventDefault();
      const formUrl = 'https://forms.gle/mhzQaRaSJRvVBWDs6';
      window.open(formUrl, '_blank');
    });
  }
})();
