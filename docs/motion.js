(() => {
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const garden=document.querySelector('#garden');
 let started=false;
 const fallback=()=>{garden.classList.add('tour-unavailable');document.querySelector('#tour-state').textContent='静观庭院';document.querySelectorAll('[data-light],[data-shot],#tour-prev,#tour-next,#garden-pause,#tour-fullscreen').forEach(b=>b.disabled=true);};
 const start=()=>{if(started)return;started=true;const script=document.createElement('script');script.src='juntai-tour.js';script.onload=()=>{try{window.THLGarden.mountGarden()}catch{fallback()}};script.onerror=fallback;document.head.appendChild(script);};
 if('IntersectionObserver' in window){const lazy=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){start();lazy.disconnect()}},{rootMargin:'300px'});lazy.observe(garden)}else start();
 if(reduced.matches)return;
 document.documentElement.classList.add('motion-enabled');
 const reveals=document.querySelectorAll('.section-head,.project-card,.approach-layout,.about-top,.about-content,.contact-main');
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-revealed');observer.unobserve(e.target)}}),{threshold:.08});
 reveals.forEach(e=>{e.classList.add('reveal');observer.observe(e)});
 if(matchMedia('(hover: hover) and (pointer: fine)').matches){
  document.querySelectorAll('.project-image').forEach(card=>{
   let frame=0;
   card.addEventListener('pointermove',e=>{if(frame)return;frame=requestAnimationFrame(()=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.setProperty('--tilt-x',`${-y*4}deg`);card.style.setProperty('--tilt-y',`${x*5}deg`);card.style.setProperty('--shine-x',`${(x+.5)*100}%`);card.style.setProperty('--shine-y',`${(y+.5)*100}%`);frame=0;});});
   card.addEventListener('pointerleave',()=>{card.style.setProperty('--tilt-x','0deg');card.style.setProperty('--tilt-y','0deg')});
  });
  const hero=document.querySelector('.hero-visual');
  hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--hero-x',`${((e.clientX-r.left)/r.width-.5)*-12}px`);hero.style.setProperty('--hero-y',`${((e.clientY-r.top)/r.height-.5)*-8}px`)});
  hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--hero-x','0px');hero.style.setProperty('--hero-y','0px')});
 }
})();
