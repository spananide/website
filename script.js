document.querySelectorAll('.skill-tags span').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.background = 'rgba(255,255,255,0.2)';
    tag.style.transform = 'translateY(-4px)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.background = 'rgba(255,255,255,0.1)';
    tag.style.transform = 'translateY(0)';
  });
});