const projects = [
  {id:'shengpu',number:'01',category:'roof',type:'屋顶花园',name:'升谱光电屋顶花园',en:'SHENGPU ROOFTOP GARDEN',theme:'空中隐逸',style:'自然禅意',cover:77,hero:76,pages:'05—11',teaser:'鱼影跃石，草色漫阶。在都市高处，安放一方山水。',concept:'以“空中隐逸”为设计追求，营造一方让目光停留、呼吸放缓、心神安放的空中庭园。以“鱼影跃石、草色漫阶”为意象，借流水的灵动与草木的四时变化，在都市高处构建具有自然禅意的精神栖所。',focus:'以松、石、水景组织视觉中心，通过木构空间与植物层次形成庭院围合，让室内视线与庭中景致相互延伸。',gallery:[{id:55,label:'概念引入与设计愿景',kind:'analysis'},{id:56,label:'现场条件与场地分析',kind:'analysis'},{id:68,label:'总平面与空间布局',kind:'plan'},{id:76,label:'松石水庭 · 主景视角'},{id:77,label:'木构与庭院 · 空间围合'},{id:80,label:'林下小径 · 移步换景'},{id:84,label:'层次绿意 · 水岸景观'},{id:89,label:'设计表达 · 多视角场景',wide:true},{id:90,label:'植物配置与季相意向',kind:'analysis'}]},
  {id:'juntai',number:'02',category:'roof',type:'屋顶花园',name:'均泰屋顶花园',en:'JUNTAI ROOFTOP GARDEN',theme:'马蹄莲之庭',style:'日式禅意',cover:114,hero:114,pages:'12—19',teaser:'以花为形，以庭为境。让自然曲线回应都市会客。',concept:'以“马蹄莲之庭”为核心理念，将马蹄莲优雅流畅的自然形态转译为空间语言，让花朵曲线融入路径与平台的功能布局。露天吧台、休憩草坪与禅意小景层层递进，在日式美学的静谧与商业接待需求之间寻求平衡。',focus:'通过曲线路径串联不同使用场景，以高低错落的植物、平台与小景塑造空间层次，并用灯光延展夜间停留体验。',gallery:[{id:102,label:'总平面与功能组织',kind:'plan'},{id:103,label:'方案平面 · 路径与平台',kind:'plan'},{id:106,label:'城市天际线下的庭园'},{id:114,label:'室内外过渡 · 水岸会客'},{id:116,label:'植物层次 · 禅意小景'},{id:117,label:'下沉会客 · 空间体验'},{id:120,label:'夜景氛围 · 温暖停驻'},{id:123,label:'林间微光 · 夜间景致'},{id:127,label:'庭院鸟瞰 · 灯光层次'},{id:134,label:'材质与细部表达',kind:'analysis'}]},
  {id:'tea-courtyard',number:'03',category:'private',type:'私家庭院',name:'围炉茶庭',originalName:'别墅花园设计',en:'TEA COURTYARD',theme:'一炉，一松，一枫，一水',style:'日式禅意',area:'38.64 ㎡',cover:160,hero:160,pages:'20—24',teaser:'方寸之间，围炉煮茶。让庭院成为一间有温度的客厅。',concept:'在 38.64 平方米的庭院中，以“一炉、一松、一枫、一水”构成空间的灵魂。火钵、苍松、红枫与石制水钵共同营造可围坐煮茶、亦可静观冥思的露地，让有限尺度中的庭院成为有温度的“茶事式客厅”。',focus:'以木石半围组织向心的围炉空间，结合竹筒引水与框景视角，在交流与独处之间形成有分寸的边界。',gallery:[{id:144,label:'设计意向与概念推演',kind:'analysis'},{id:145,label:'松的意象 · 形态提取',kind:'analysis'},{id:147,label:'现场分析 · 场地条件',kind:'analysis'},{id:153,label:'总平面与围炉空间',kind:'plan'},{id:158,label:'框景入庭 · 四季可观'},{id:160,label:'围炉茶庭 · 俯瞰视角'},{id:161,label:'水钵与松 · 庭中一隅'},{id:165,label:'夜间框景 · 温暖灯光'}]},
  {id:'scroll-garden',number:'04',category:'private',type:'私家庭院',name:'卷草生花',originalName:'别墅花园设计',en:'SCROLL GARDEN',theme:'曲线成园，一路生花',style:'现代自然',area:'约 200 ㎡',cover:195,hero:195,pages:'25—31',teaser:'取意卷草纹样，以流动曲线串联庭院里的烟火日常。',concept:'取意中国传统“卷草花纹”，以自然植物为原型，通过 S 型波状曲线贯穿全园。亭榭、户外餐厅与土灶承载日常使用，功能设备房与洗衣房隐于北隅，采光井周边以花坛衔接，让绿意与生活自然交织。',focus:'以连续曲线建立路径、草坪与种植边界的整体秩序，同时兼顾休闲、餐饮和家务功能，让园林意趣融入居住体验。',gallery:[{id:173,label:'卷草纹样 · 概念来源',kind:'analysis'},{id:174,label:'自然意象 · 设计推演',kind:'analysis'},{id:175,label:'现场条件 · 场地分析',kind:'analysis'},{id:179,label:'总平面 · 曲线布局',kind:'plan'},{id:180,label:'空间组织 · 功能分区',kind:'plan'},{id:185,label:'曲径与花境 · 庭院全景'},{id:188,label:'亭榭与水景 · 视线组织'},{id:193,label:'林下会客 · 场景营造'},{id:195,label:'四时花木 · 流动曲线'},{id:199,label:'夜间庭院 · 光影层次'},{id:209,label:'植物设计与季相意向',kind:'analysis',wide:true}]},
  {id:'urban-coffee',number:'05',category:'commercial',type:'商业空间',name:'城市咖啡花园',originalName:'咖啡厅外部景观设计',en:'URBAN COFFEE GARDEN',theme:'城市中的愉悦归属',style:'现代风格',location:'宁波',cover:235,hero:235,pages:'32—37',teaser:'用一杯咖啡的时间，在城市街角找到自然的停靠。',concept:'坐落于宁波都市环境中，以“城市中的愉悦归属”为愿景，在场地规章限制下，以可移动花箱围合半开放户外空间。吧台桌椅沿景而设，结合夜景灯光，在私密性与城市视野之间取得平衡。',focus:'通过可移动种植设施界定边界，串联坐憩与通行需求，并以灯光和植物共同塑造从白昼延续至夜间的咖啡花园。',gallery:[{id:219,label:'场地条件 · 城市界面',kind:'analysis'},{id:220,label:'设计愿景与场景意向',kind:'analysis'},{id:225,label:'总平面 · 动线与功能',kind:'plan'},{id:227,label:'空间布局 · 花箱围合',kind:'plan'},{id:235,label:'街角花园 · 户外咖啡时光'},{id:237,label:'植物边界 · 半开放空间'},{id:238,label:'绿意之间 · 停留场景'},{id:241,label:'暖光夜景 · 庭中座席'},{id:243,label:'夜间氛围 · 城市微光'},{id:247,label:'灯光系统与植物意向',kind:'analysis',wide:true}]}
];
const $ = s=>document.querySelector(s);
const asset=id=>`assets/project-${id}.webp`;
const grid=$('#project-grid');
grid.innerHTML=projects.map(p=>`<article class="project-card" data-category="${p.category}"><button class="project-image" data-project="${p.id}" aria-label="查看${p.name}项目"><img src="${asset(p.cover)}" alt="${p.name}，${p.theme}的景观设计效果" loading="lazy" decoding="async"><span class="project-index">${p.number} / 05</span><span class="project-open" aria-hidden="true">↗</span></button><div class="project-info"><p class="project-meta"><span>${p.type} / ${p.style}</span><span>${p.area||'LANDSCAPE DESIGN'}</span></p><h3><button data-project="${p.id}">${p.name}</button></h3><p class="project-concept">${p.teaser}</p><button class="project-detail-link" data-project="${p.id}">阅读项目 <span>↗</span></button></div></article>`).join('');
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 const category=button.dataset.filter;
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});
 let count=0;document.querySelectorAll('.project-card').forEach(card=>{const visible=category==='all'||card.dataset.category===category;card.hidden=!visible;if(visible)count++});
 $('.work-count').textContent=`展示 ${String(count).padStart(2,'0')} 个项目`;
}));
const detail=$('#project-dialog'),lightbox=$('#lightbox');
let currentProject=null,currentImage=0,lastFocused=null;
function setProject(p){
 currentProject=p;
 const next=projects[(projects.indexOf(p)+1)%projects.length];
 $('#project-content').innerHTML=`<div class="detail-intro section-wrap"><p class="eyebrow">${p.en} / SELECTED PROJECT ${p.number}</p><div class="detail-title-row"><div><h2 id="detail-title">${p.name}</h2><p class="detail-subtitle">${p.theme}</p></div><span class="detail-number" aria-hidden="true">${p.number}</span></div></div><div class="detail-hero"><img src="${asset(p.hero)}" alt="${p.name}主景效果图"></div><div class="detail-summary section-wrap"><dl class="detail-facts"><div><dt>项目类型</dt><dd>${p.type}</dd></div><div><dt>设计风格</dt><dd>${p.style}</dd></div>${p.area?`<div><dt>场地面积</dt><dd>${p.area}</dd></div>`:''}${p.location?`<div><dt>项目地点</dt><dd>${p.location}</dd></div>`:''}<div><dt>作品来源</dt><dd>2026 个人作品集 / P.${p.pages}</dd></div><div><dt>成果类型</dt><dd>概念方案与景观效果表达</dd></div></dl><div class="detail-concept"><h3>设计概念</h3><p>${p.concept}</p><p>${p.focus}</p><p class="detail-footnote">${p.originalName?`原作品集项目名称：${p.originalName}。`:''}所示图像为原作品集中的设计方案与效果表达。</p></div></div><div class="detail-gallery section-wrap"><div class="gallery-heading"><h3>从概念，到场景。</h3><span>设计分析 / 平面方案 / 空间效果 · 点击查看大图</span></div><div class="gallery-grid">${p.gallery.map((g,i)=>`<figure class="gallery-figure ${g.wide?'wide':''}"><button data-gallery="${i}" aria-label="放大查看：${g.label}"><img src="${asset(g.id)}" alt="${p.name} — ${g.label}" loading="lazy" decoding="async"></button><figcaption><span>${g.label}</span><span>${String(i+1).padStart(2,'0')} / ${String(p.gallery.length).padStart(2,'0')}</span></figcaption></figure>`).join('')}</div></div><div class="detail-next section-wrap"><div><p>NEXT PROJECT / 下一个项目</p><h3>${next.name}</h3></div><button data-project="${next.id}" aria-label="查看下一个项目：${next.name}">↗</button></div>`;
 detail.scrollTop=0;
 document.title=`${p.name}｜檀宏力作品集`;
}
function syncRoute(){
 const id=location.hash.startsWith('#project/')?decodeURIComponent(location.hash.slice(9)):null;
 const p=projects.find(p=>p.id===id);
 if(p){if(!detail.open){lastFocused=document.activeElement;setProject(p);detail.showModal();document.body.classList.add('modal-open');$('.close-detail').focus({preventScroll:true});detail.scrollTop=0}else if(currentProject!==p)setProject(p)}
 else if(detail.open){if(lightbox.open)lightbox.close();detail.close();document.body.classList.remove('modal-open');document.title='檀宏力｜庭院与景观设计作品集';lastFocused?.focus({preventScroll:true});currentProject=null;}
}
function closeProject(){if(lightbox.open){lightbox.close();return}history.replaceState(null,'',location.pathname+location.search+'#works');syncRoute();}
document.addEventListener('click',e=>{
 const opener=e.target.closest('[data-project]');if(opener){const id=opener.dataset.project;if(location.hash===`#project/${id}`)syncRoute();else location.hash=`project/${id}`;return}
 const gallery=e.target.closest('[data-gallery]');if(gallery&&currentProject){currentImage=Number(gallery.dataset.gallery);showImage();lightbox.showModal();}
});
$('.close-detail').addEventListener('click',closeProject);
$('.detail-brand').addEventListener('click',e=>{e.preventDefault();closeProject()});
detail.addEventListener('cancel',e=>{e.preventDefault();closeProject()});
function showImage(){const g=currentProject.gallery[currentImage];$('#lightbox-image').src=asset(g.id);$('#lightbox-image').alt=`${currentProject.name} — ${g.label}`;$('#lightbox-caption').textContent=`${g.label} · ${String(currentImage+1).padStart(2,'0')} / ${String(currentProject.gallery.length).padStart(2,'0')}`;}
function moveImage(delta){currentImage=(currentImage+delta+currentProject.gallery.length)%currentProject.gallery.length;showImage()}
$('.lightbox-close').addEventListener('click',()=>lightbox.close());
$('.lightbox-prev').addEventListener('click',()=>moveImage(-1));
$('.lightbox-next').addEventListener('click',()=>moveImage(1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
document.addEventListener('keydown',e=>{if(lightbox.open){if(e.key==='ArrowLeft'){e.preventDefault();moveImage(-1)}if(e.key==='ArrowRight'){e.preventDefault();moveImage(1)}}});
window.addEventListener('hashchange',syncRoute);syncRoute();
