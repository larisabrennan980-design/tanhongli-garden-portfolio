/* Juntai rooftop garden — camera animation of the designer's original renders. */
(() => {
  'use strict';
  const shots = [
    {title:'临水入庭',en:'WATERSIDE',description:'水面映照花木，让室内的日常自然延伸至庭院。',day:106,night:120,dayFocus:'50% 44%',nightFocus:'48% 42%',move:[-1.1,.4,1.1,-.4]},
    {title:'茶亭会客',en:'TEA PAVILION',description:'木色、雨链与通透茶亭，让室内外的停留自然相连。',day:114,night:121,dayFocus:'54% 42%',nightFocus:'52% 42%',move:[1.1,.4,-.6,-.3]},
    {title:'石径小憩',en:'STONE COURT',description:'花木掩映，叠石成景；在细部之间，感受庭院的层次。',day:116,night:122,dayFocus:'48% 42%',nightFocus:'48% 42%',move:[-.8,-.4,.9,.4]},
    {title:'林间停驻',en:'GARDEN LOUNGE',description:'曲线平台与林下座席，承载一场轻松的屋顶会客。',day:117,night:128,dayFocus:'50% 42%',nightFocus:'50% 42%',move:[.7,.3,-.9,-.4]}
  ];
  function mountGarden() {
    const root=document.querySelector('#garden');
    if(!root || root.dataset.tourMounted)return;
    root.dataset.tourMounted='true';
    const viewer=document.querySelector('#garden-stage'),stage=document.querySelector('#tour-stage');
    const layers=[...stage.querySelectorAll('.tour-layer')],chapters=[...root.querySelectorAll('[data-shot]')];
    const lighting=[...root.querySelectorAll('[data-light]')],pauseButton=document.querySelector('#garden-pause');
    const loader=document.querySelector('#tour-loading'),state=document.querySelector('#tour-state');
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    let index=0,light='day',active=0,elapsed=0,paused=reduced.matches,visible=false,last=0,frame=0,request=0,loading=false;
    const duration=8000,images=new Map();
    const loadImage=id=>{
      if(!images.has(id))images.set(id,new Promise((resolve,reject)=>{
        const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=`assets/project-${id}.webp`;
      }).catch(error=>{images.delete(id);throw error;}));
      return images.get(id);
    };
    const canPlay=()=>!paused&&visible&&!document.hidden&&!loading;
    const updatePlayback=()=>{
      pauseButton.setAttribute('aria-pressed',String(paused));
      pauseButton.setAttribute('aria-label',paused?'播放漫游':'暂停漫游');
      pauseButton.querySelector('.tour-play-icon').textContent=paused?'▶':'Ⅱ';
      pauseButton.querySelector('.tour-play-label').textContent=paused?'播放漫游':'暂停漫游';
      state.textContent=paused?'静观庭院':'镜头漫游中';
      root.classList.toggle('tour-paused',paused);
      last=0;
      cancelAnimationFrame(frame);frame=0;
      if(canPlay())frame=requestAnimationFrame(tick);
    };
    const paint=()=>{
      const p=Math.min(elapsed/duration,1),ease=p*p*(3-2*p),m=shots[index].move;
      layers[active].style.transform=reduced.matches?'none':`translate(${m[0]+(m[2]-m[0])*ease}%,${m[1]+(m[3]-m[1])*ease}%) scale(${1+ease*.055})`;
      chapters.forEach((button,i)=>button.style.setProperty('--progress',i===index?`${p*100}%`:'0%'));
    };
    const updateCaption=()=>{
      const shot=shots[index],number=String(index+1).padStart(2,'0');
      document.querySelector('#tour-current').textContent=number;
      document.querySelector('#tour-shot-label').textContent=`${number} / ${shot.en}`;
      document.querySelector('#tour-shot-title').textContent=shot.title;
      document.querySelector('#tour-shot-description').textContent=shot.description;
      stage.setAttribute('aria-label',`均泰屋顶花园，${light==='day'?'日景':'夜景'}，镜头${number}，${shot.title}`);
      chapters.forEach((button,i)=>{button.classList.toggle('active',i===index);button.setAttribute('aria-pressed',String(i===index));});
      lighting.forEach(button=>{const selected=button.dataset.light===light;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});
    };
    async function show(nextIndex,nextLight=light) {
      const ticket=++request;loading=true;loader.hidden=false;loader.textContent='正在进入庭院…';updatePlayback();
      const shot=shots[nextIndex],id=shot[nextLight];
      try {await loadImage(id);} catch {
        if(ticket!==request)return;
        loading=false;paused=true;loader.textContent='此镜头暂未载入，请重新选择';updatePlayback();return;
      }
      if(ticket!==request)return;
      const next=1-active,img=layers[next].querySelector('img');
      img.src=`assets/project-${id}.webp`;img.alt=`均泰屋顶花园 · ${nextLight==='day'?'日景':'夜景'} · ${shot.title}`;
      img.style.objectPosition=shot[`${nextLight}Focus`];
      layers[next].style.transform=reduced.matches?'none':`translate(${shot.move[0]}%,${shot.move[1]}%) scale(1)`;
      layers[next].classList.add('is-current');layers[next].removeAttribute('aria-hidden');
      layers[active].classList.remove('is-current');layers[active].setAttribute('aria-hidden','true');
      index=nextIndex;light=nextLight;active=next;elapsed=0;loading=false;loader.hidden=true;
      root.dataset.light=light;updateCaption();paint();updatePlayback();
      // Load only the upcoming view and its day/night pair, without blocking the current shot.
      [shots[(index+1)%shots.length][light],shots[index][light==='day'?'night':'day']].forEach(id=>loadImage(id).catch(()=>{}));
    }
    function tick(now) {
      frame=0;if(!canPlay())return;
      if(last)elapsed+=Math.min(now-last,100);last=now;paint();
      if(elapsed>=duration){show((index+1)%shots.length);return;}
      frame=requestAnimationFrame(tick);
    }
    pauseButton.addEventListener('click',()=>{paused=!paused;updatePlayback();});
    document.querySelector('#tour-prev').addEventListener('click',()=>show((index+shots.length-1)%shots.length));
    document.querySelector('#tour-next').addEventListener('click',()=>show((index+1)%shots.length));
    chapters.forEach(button=>button.addEventListener('click',()=>show(Number(button.dataset.shot))));
    lighting.forEach(button=>button.addEventListener('click',()=>{if(button.dataset.light!==light||loading)show(index,button.dataset.light);}));
    stage.addEventListener('keydown',event=>{
      if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();show((index+(event.key==='ArrowRight'?1:shots.length-1))%shots.length);}
      if(event.code==='Space'){event.preventDefault();paused=!paused;updatePlayback();}
    });
    let touchStart=null;
    stage.addEventListener('touchstart',e=>{touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
    stage.addEventListener('touchend',e=>{
      if(!touchStart)return;
      const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;
      if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)show((index+(dx<0?1:shots.length-1))%shots.length);
      touchStart=null;
    },{passive:true});
    const fullscreen=document.querySelector('#tour-fullscreen');
    if(!viewer.requestFullscreen)fullscreen.hidden=true;
    else fullscreen.addEventListener('click',async()=>{
      try{if(document.fullscreenElement===viewer)await document.exitFullscreen();else await viewer.requestFullscreen();}catch{fullscreen.hidden=true;}
    });
    document.addEventListener('fullscreenchange',()=>fullscreen.setAttribute('aria-label',document.fullscreenElement===viewer?'退出全屏':'全屏观看均泰花园'));
    document.addEventListener('visibilitychange',updatePlayback);
    reduced.addEventListener('change',()=>{if(reduced.matches)paused=true;paint();updatePlayback();});
    if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;updatePlayback();},{threshold:.1}).observe(viewer);
    else visible=true;
    root.classList.add('tour-ready');updateCaption();paint();updatePlayback();
    [shots[0].day,shots[1].day,shots[0].night].forEach(id=>loadImage(id).catch(()=>{}));
  }
  window.THLGarden={mountGarden};
})();
