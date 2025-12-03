// Aktive Seite markieren
document.querySelectorAll('nav a').forEach(link => {
  if(link.href === location.href){
    link.classList.add('active');
  }
});