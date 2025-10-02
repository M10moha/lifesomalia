
document.addEventListener('DOMContentLoaded',function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(menuToggle) menuToggle.addEventListener('click', ()=> nav.classList.toggle('open'));

  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slide-dot');
  let current = 0;
  if(slides.length){
    slides.forEach((s,i)=>{ s.style.opacity = i===0 ? '1' : '0'; s.style.transition='opacity .8s'; });
    dots.forEach((d,i)=> d.addEventListener('click', ()=> show(i)));
    function show(i){
      slides.forEach((s,idx)=> s.style.opacity = idx===i ? '1' : '0');
      dots.forEach((d,idx)=> d.classList.toggle('active', idx===i));
      current = i;
    }
    setInterval(()=> show((current+1)%slides.length),6000);
  }
});
