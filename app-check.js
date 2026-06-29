
const STATES=[{"name": "AL", "src": "assets/estados/AL.png"}, {"name": "AM", "src": "assets/estados/AM.png"}, {"name": "BA", "src": "assets/estados/BA.png"}, {"name": "GO", "src": "assets/estados/GO.png"}, {"name": "MA", "src": "assets/estados/MA.png"}, {"name": "MT", "src": "assets/estados/MT.png"}, {"name": "PA", "src": "assets/estados/PA.png"}, {"name": "PI", "src": "assets/estados/PI.png"}, {"name": "TO", "src": "assets/estados/TO.png"}, {"name": "MG", "src": "assets/estados/MG.png"}];
const CLIENTS=[{"name": "AGETO", "src": "assets/clientes/AGETO.png"}, {"name": "ALUMAR", "src": "assets/clientes/ALUMAR.png"}, {"name": "ANGLO AMERICAN", "src": "assets/clientes/ANGLO AMERICAN.png"}, {"name": "BAMIN", "src": "assets/clientes/BAMIN.png"}, {"name": "CIMENTO BRAVO", "src": "assets/clientes/CIMENTO BRAVO.png"}, {"name": "CODEVASF", "src": "assets/clientes/CODEVASF.png"}, {"name": "DNIT", "src": "assets/clientes/DNIT.png"}, {"name": "EBX", "src": "assets/clientes/EBX.png"}, {"name": "ENEVA", "src": "assets/clientes/ENEVA.png"}, {"name": "GOINFRA", "src": "assets/clientes/GOINFRA.png"}, {"name": "GOVERNO DA BAHIA", "src": "assets/clientes/GOVERNO DA BAHIA.png"}, {"name": "GOVERNO DO GOIÁS", "src": "assets/clientes/GOVERNO DO GOIÁS.png"}, {"name": "GOVERNO DO MARANHÃO", "src": "assets/clientes/GOVERNO DO MARANHÃO.png"}, {"name": "GOVERNO DO MATO GROSSO", "src": "assets/clientes/GOVERNO DO MATO GROSSO.png"}, {"name": "GOVERNO DO PARÁ", "src": "assets/clientes/GOVERNO DO PARÁ.png"}, {"name": "GOVERNO DO TOCANTINS", "src": "assets/clientes/GOVERNO DO TOCANTINS.png"}, {"name": "INFRAERO", "src": "assets/clientes/INFRAERO.png"}, {"name": "PORTO DO ITAQUI", "src": "assets/clientes/PORTO DO ITAQUI.png"}, {"name": "PORTO SÃO LUÍS", "src": "assets/clientes/PORTO SÃO LUÍS.png"}, {"name": "PREFEITURA DE ANÁPOLIS", "src": "assets/clientes/PREFEITURA DE ANÁPOLIS.png"}, {"name": "PREFEITURA DE ARAGUAÍNA", "src": "assets/clientes/PREFEITURA DE ARAGUAÍNA.png"}, {"name": "PREFEITURA DE ARAPIRACA", "src": "assets/clientes/PREFEITURA DE ARAPIRACA.png"}, {"name": "PREFEITURA DE BARCARENA", "src": "assets/clientes/PREFEITURA DE BARCARENA.png"}, {"name": "PREFEITURA DE BELEM", "src": "assets/clientes/PREFEITURA DE BELEM.png"}, {"name": "PREFEITURA DE GOIâNIA", "src": "assets/clientes/PREFEITURA DE GOIâNIA.png"}, {"name": "PREFEITURA DE PALMAS", "src": "assets/clientes/PREFEITURA DE PALMAS.png"}, {"name": "PREFEITURA DE PARAGOMINAS", "src": "assets/clientes/PREFEITURA DE PARAGOMINAS.png"}, {"name": "PREFEITURA DE PIRIPIRI", "src": "assets/clientes/PREFEITURA DE PIRIPIRI.png"}, {"name": "PREFEITURA DE SÃO JOSÉ DE RIBAMAR", "src": "assets/clientes/PREFEITURA DE SÃO JOSÉ DE RIBAMAR.png"}, {"name": "PREFEITURA DE SÃO LUÍS", "src": "assets/clientes/PREFEITURA DE SÃO LUÍS.png"}, {"name": "SUZANO", "src": "assets/clientes/SUZANO.png"}, {"name": "MRS", "src": "assets/clientes/MRS.png"}, {"name": "VALE", "src": "assets/clientes/VALE.png"}, {"name": "VLI", "src": "assets/clientes/VLI.png"}, {"name": "logo-nova-rota-white", "src": "assets/clientes/logo-nova-rota-white.png"}, {"name": "ugpe", "src": "assets/clientes/ugpe.png"}];
const STORY_BACKGROUNDS=[{name:'FUNDO 1',src:'assets/story_backgrounds/FUNDO 1.png'},{name:'FUNDO 2',src:'assets/story_backgrounds/FUNDO 2.png'},{name:'FUNDO 3',src:'assets/story_backgrounds/FUNDO 3.png'},{name:'FUNDO 4',src:'assets/story_backgrounds/FUNDO 4.png'},{name:'FUNDO 5',src:'assets/story_backgrounds/FUNDO 5.png'},{name:'FUNDO 6',src:'assets/story_backgrounds/FUNDO 6.png'}];
const STORY_ELEMENTS=[{name:'VacinAção',src:'assets/story_elements/VACIN_ACAO.png'},{name:'Desempenhos Resultados',src:'assets/story_elements/DESEMPENHOS_RESULTADOS.png'},{name:'Arco vermelho',src:'assets/story_elements/ARCO_VERMELHO.png'},{name:'#Obra da Lucena',src:'assets/story_elements/HASHTAG_OBRA_DA_LUCENA.png'},{name:'Lucena branca',src:'assets/story_elements/LUCENA_INFRA_BRANCA.png'},{name:'Faixa vermelha',src:'assets/story_elements/FAIXA_VERMELHA.png'},{name:'Saúde Lucena',src:'assets/story_elements/SAUDE_LUCENA.png'},{name:'Selo azul',src:'assets/story_elements/SELO_AZUL.png'},{name:'Lucena cabeçalho',src:'assets/story_elements/LUCENA_CABECALHO.png'},{name:'Tocooou',src:'assets/story_elements/TOCOOU.png'},{name:'Segurança',src:'assets/story_elements/SEGURANCA.png'}];
const ASSETS={frameSingle:'assets/frames/frame foto interra(1).png',frameDouble:'assets/frames/frame foto dupla(1).png',storyBg:'assets/background/fundo(5).png'};
const $=id=>document.getElementById(id), canvas=$('canvas'),ctx=canvas.getContext('2d');
ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
const imgCache=new Map();
let mode='post',W=1638,H=2048,frames={single:null,double:null,story:null};
const st={photos:[],active:0,stateOverride:null,clientOverride:null,storyBgOverride:null,selectedStoryBg:0,selectedStoryElement:0,storyElements:[],activeStoryElement:-1,photosLocked:false,caption:{x:0,y:0},client:{x:0,y:0},drag:false,dragTarget:'photo',last:null,pinch:null,pointers:{},rendering:false,drawScheduled:false,drawPending:false};
const models={
 post:[['single','1 foto'],['double','2 fotos']],
 story:[['auto','Automático'],['story1','1 foto inteira'],['story2h','2 fotos empilhadas'],['story3top2','1 em cima + 2 embaixo'],['story3stack','3 fotos empilhadas'],['story4quad','4 fotos grade'],['story5sandwich','5 fotos: 1 + 3 + 1'],['story6grid','6 fotos grade'],['story7combo','7 fotos: 1 + 3 + 3'],['story8grid','8 fotos grade'],['story9grid','9 fotos grade']]
};
function toast(m){const e=$('toast');e.textContent=m;e.classList.remove('hidden');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.add('hidden'),2600)}
function image(src){if(!src)return Promise.resolve(null);if(imgCache.has(src))return imgCache.get(src);const prom=new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.decoding='async';i.src=src});imgCache.set(src,prom);return prom}
async function loadFrames(){frames.single=await image(ASSETS.frameSingle);frames.double=await image(ASSETS.frameDouble);frames.story=await image(ASSETS.storyBg)}
function fileImage(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>image(r.result).then(img=>img?resolve({img,src:r.result,z:1,dx:0,dy:0,name:file.name}):reject());r.onerror=reject;r.readAsDataURL(file)})}
function isPreviewing(){return $('app').classList.contains('previewing')}
function photosAreEditable(){return currentStep===1 && !isPreviewing()}
function brandIsEditable(){return currentStep===2 && !isPreviewing()}
function textIsEditable(){return currentStep===3 && !isPreviewing()}
function fineAdjustIsEditable(){return currentStep===4 && !isPreviewing()}
function syncStoryTextMode(){
  if(mode==='story' && $('storyTextMode')) $('storyTextMode').value=$('showCaption').checked?'with':'none';
  const storyHasText=mode!=='story' || $('showCaption').checked;
  ['title','storyW','storyH'].forEach(id=>{const el=$(id); if(el && el.closest('.storyOnly')) el.disabled=!storyHasText || !textIsEditable();});
}
function updatePhotoLockUI(){
  const story=mode==='story';
  st.photosLocked=!photosAreEditable();
  $('storyStageActions').classList.toggle('hidden',!story);
  $('lockPhotosBtn').classList.toggle('isLocked',st.photosLocked);
  $('lockPhotosBtn').textContent=st.photosLocked?'Reeditar fotos':'Fotos em ajuste';
  $('lockPhotosState').textContent=st.photosLocked?'As fotos ficam bloqueadas fora da etapa Fotos.':'Ao avançar, as fotos serão bloqueadas.';
  ['photos','activePhoto','zoom','gap','center'].forEach(id=>{const el=$(id);if(el)el.disabled=!photosAreEditable();});
}
function updateStepLocks(){
  updatePhotoLockUI();
  const brandEditable=brandIsEditable();
  const textEditable=textIsEditable();
  ['state','client','stateUpload','clientUpload','showState','showClient'].forEach(id=>{const el=$(id);if(el)el.disabled=!brandEditable;});
  ['storyBgUpload','storyElementUpload','storyElementSelect','storyElementW','addStoryElement','removeStoryElement'].forEach(id=>{const el=$(id);if(el)el.disabled=!brandEditable || (id==='removeStoryElement' && st.activeStoryElement<0);});
  document.querySelectorAll('#stateGrid .assetBtn,#clientGrid .assetBtn,#storyBgGrid .assetBtn,#storyElementGrid .assetBtn').forEach(btn=>btn.disabled=!brandEditable);
  ['title','body','capW','capH','storyTextMode'].forEach(id=>{const el=$(id);if(el)el.disabled=!textEditable;});
  syncStoryTextMode();
}
function setMode(m){mode=m;st.photosLocked=false;W=mode==='story'?1080:1638;H=mode==='story'?1920:2048;canvas.width=W;canvas.height=H;$('home').classList.add('hidden');$('app').classList.remove('hidden');$('editorTitle').textContent=mode==='story'?'Stories':'Post';$('formatPill').textContent=mode==='story'?'9:16':'4:5';document.querySelectorAll('.postOnly').forEach(e=>e.classList.toggle('hidden',mode==='story'));document.querySelectorAll('.storyOnly').forEach(e=>e.classList.toggle('hidden',mode!=='story'));$('captionToggle').classList.remove('hidden');$('captionHeading').textContent=mode==='story'?'Texto e legenda do Story':'Legenda';$('titleLabel').textContent=mode==='story'?'Texto da barra inferior':'Título';$('captionMoveLabel').textContent=mode==='story'?'Barra':'Legenda';if(mode==='story')$('showCaption').checked=true;syncStoryTextMode();refreshModels();updateStepLocks();draw()}
function refreshModels(){let cur=$('model').value;$('model').innerHTML=models[mode].map(v=>`<option value="${v[0]}">${v[1]}</option>`).join('');if([...$('model').options].some(o=>o.value===cur))$('model').value=cur;else $('model').value=mode==='story'?'auto':'single';if(mode==='story')$('showCaption').checked=true;refreshActive()}
function count(){let m=$('model').value;if(mode==='post')return m==='double'?2:1;if(m==='auto')return Math.min(9,Math.max(1,st.photos.length||1));return Number((m.match(/story(\d+)/)||[])[1]||1)}
function rects(){const n=count(),g=Number($('gap').value),x=mode==='story'?54:0,y=mode==='story'?62:0,w=mode==='story'?W-108:W,h=mode==='story'?H-y-310:H;
if(mode==='post')return n===1?[{x,y,w,h}]:[{x,y,w,h:h/2},{x,y:y+h/2,w,h:h/2}];
let model=$('model').value;
if(model==='auto'){if(n===1)model='story1';else if(n===2)model='story2h';else if(n===3)model='story3top2';else if(n===4)model='story4quad';else if(n===5)model='story5sandwich';else if(n===6)model='story6grid';else if(n===7)model='story7combo';else if(n===8)model='story8grid';else model='story9grid';}
if(model==='story1')return[{x,y,w,h}];
if(model==='story2h'){let ch=(h-g)/2;return[{x,y,w,h:ch},{x,y:y+ch+g,w,h:ch}]}
if(model==='story3top2'){let topH=Math.round(h*0.56),botH=h-topH-g,cw=(w-g)/2;return[{x,y,w,h:topH},{x,y:y+topH+g,w:cw,h:botH},{x:x+cw+g,y:y+topH+g,w:cw,h:botH}]}
if(model==='story3stack'){let ch=(h-2*g)/3;return[0,1,2].map(i=>({x,y:y+i*(ch+g),w,h:ch}))}
if(model==='story4quad'){let topH=Math.round(h*0.56),botH=h-topH-g,cw=(w-g)/2;return[{x,y,w:cw,h:topH},{x:x+cw+g,y,w:cw,h:topH},{x,y:y+topH+g,w:cw,h:botH},{x:x+cw+g,y:y+topH+g,w:cw,h:botH}]}
if(model==='story5sandwich'){let topH=Math.round(h*0.28),midH=Math.round(h*0.22),botH=h-topH-midH-2*g,cw=(w-2*g)/3;return[{x,y,w,h:topH},{x,y:y+topH+g,w:cw,h:midH},{x:x+cw+g,y:y+topH+g,w:cw,h:midH},{x:x+2*(cw+g),y:y+topH+g,w:cw,h:midH},{x,y:y+topH+midH+2*g,w,h:botH}]}
if(model==='story6grid'){let cw=(w-g)/2,ch=(h-2*g)/3;return[0,1,2,3,4,5].map(i=>({x:x+(i%2)*(cw+g),y:y+Math.floor(i/2)*(ch+g),w:cw,h:ch}))}
if(model==='story7combo'){let topH=Math.round(h*0.36),rowH=(h-topH-2*g)/2,cw=(w-2*g)/3;return[{x,y,w,h:topH},{x,y:y+topH+g,w:cw,h:rowH},{x:x+cw+g,y:y+topH+g,w:cw,h:rowH},{x:x+2*(cw+g),y:y+topH+g,w:cw,h:rowH},{x,y:y+topH+g+rowH+g,w:cw,h:rowH},{x:x+cw+g,y:y+topH+g+rowH+g,w:cw,h:rowH},{x:x+2*(cw+g),y:y+topH+g+rowH+g,w:cw,h:rowH}]}
if(model==='story8grid'){let cw=(w-g)/2,ch=(h-3*g)/4;return[0,1,2,3,4,5,6,7].map(i=>({x:x+(i%2)*(cw+g),y:y+Math.floor(i/2)*(ch+g),w:cw,h:ch}))}
let cw=(w-2*g)/3,ch=(h-2*g)/3;return[0,1,2,3,4,5,6,7,8].map(i=>({x:x+(i%3)*(cw+g),y:y+Math.floor(i/3)*(ch+g),w:cw,h:ch}))}
function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function cover(photo,r){ctx.save();rr(r.x,r.y,r.w,r.h,mode==='story'?18:0);ctx.clip();ctx.fillStyle='#1d2a43';ctx.fillRect(r.x,r.y,r.w,r.h);if(photo?.img){let sc=Math.max(r.w/photo.img.width,r.h/photo.img.height)*(photo.z||1),dw=photo.img.width*sc,dh=photo.img.height*sc;ctx.drawImage(photo.img,r.x+(r.w-dw)/2+(photo.dx||0),r.y+(r.h-dh)/2+(photo.dy||0),dw,dh)}else{ctx.fillStyle='rgba(255,255,255,.75)';ctx.textAlign='center';ctx.font='700 31px Arial';ctx.fillText('TOQUE PARA ENVIAR FOTO',r.x+r.w/2,r.y+r.h/2)}ctx.restore()}
function wrap(txt,max,font){ctx.font=font;let a=[],line='';for(const word of String(txt||'').trim().split(/\s+/)){let t=line?line+' '+word:word;if(ctx.measureText(t).width<=max||!line)line=t;else{a.push(line);line=word}}if(line)a.push(line);return a}
function fit(txt,maxW,maxH,weight,start,min,lh){for(let s=start;s>=min;s--){let f=`${weight} ${s}px Roboto,Arial`,lines=wrap(txt,maxW,f),lineH=s*lh;if(lines.length*lineH<=maxH)return{f,lines,lineH,s}}return{f:`${weight} ${min}px Roboto,Arial`,lines:wrap(txt,maxW,`${weight} ${min}px Roboto,Arial`),lineH:min*lh,s:min}}
function capBox(){if(mode==='story'){let w=+$('storyW').value,h=+$('storyH').value;return{x:(W-w)/2+st.caption.x,y:H-286+st.caption.y,w,h}}return{x:126+st.caption.x,y:H-438+st.caption.y,w:+$('capW').value,h:210+(+$('capH').value)}}
function logoBox(){return{x:W-365+st.client.x,y:H-318+st.client.y,w:245,h:145}}
function stateBox(){return{x:W-250,y:128,w:126,h:82}}
function caption(){if(!$('showCaption').checked)return;let b=capBox();ctx.save();ctx.strokeStyle='#fff';ctx.lineWidth=mode==='story'?2.2:4;if(mode==='story'){rr(b.x,b.y,b.w,b.h,b.h/2);ctx.stroke();let ft=fit($('title').value,b.w-70,b.h-20,'500',31,18,1);ctx.font=ft.f;ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';let cy=b.y+b.h/2-ft.lines.length*ft.lineH/2+ft.lineH/2;ft.lines.forEach(l=>{ctx.fillText(l,b.x+b.w/2,cy);cy+=ft.lineH})}else{rr(b.x,b.y,b.w,b.h,18);ctx.stroke();const pad=32;let title=fit($('title').value,b.w-pad*2,82,'900',42,24,1.05);ctx.textBaseline='top';let ty=b.y+28;const titleGap=22;ctx.font=title.f;title.lines.forEach(l=>{let tw=ctx.measureText(l).width;ctx.fillStyle='#ff0b00';ctx.fillRect(b.x+pad,ty-6,Math.min(b.w-pad*2,tw+28),title.lineH+14);ctx.fillStyle='#fff';ctx.fillText(l,b.x+pad+14,ty);ty+=title.lineH+titleGap});let body=fit($('body').value,b.w-pad*2,b.h-(ty-b.y)-30,'900',34,22,1.1);ctx.font=body.f;ctx.fillStyle='#fff';body.lines.forEach(l=>{ctx.fillText(l,b.x+pad,ty+12);ty+=body.lineH})}ctx.restore()}
function drawContained(img,b,rounded=0){if(!img)return;ctx.save();if(rounded){rr(b.x,b.y,b.w,b.h,rounded);ctx.clip()}let p=Math.min(b.w,b.h)*.06,sc=Math.min((b.w-p*2)/img.width,(b.h-p*2)/img.height),dw=img.width*sc,dh=img.height*sc;ctx.drawImage(img,b.x+(b.w-dw)/2,b.y+(b.h-dh)/2,dw,dh);ctx.restore()}
function storyElementBox(el){if(!el)return{x:0,y:0,w:0,h:0};let iw=(el.img&&el.img.width)||el.w||200,ih=(el.img&&el.img.height)||el.w||200;let h=(el.w||200)*(ih/iw);return{x:el.x||0,y:el.y||0,w:el.w||200,h}}
function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
function ang(a,b){return Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI}
function pointInStoryElement(p,el){let b=storyElementBox(el);return inBox(p,b)}
function hitStoryElement(p){for(let i=st.storyElements.length-1;i>=0;i--){if(pointInStoryElement(p,st.storyElements[i]))return i}return-1}
async function storyBgSelected(){return st.storyBgOverride||await image(STORY_BACKGROUNDS[st.selectedStoryBg]?.src||ASSETS.storyBg)}
function refreshStoryAssetGrids(){if($('storyBgGrid'))$('storyBgGrid').innerHTML=STORY_BACKGROUNDS.map((a,i)=>`<button class="assetBtn ${i===st.selectedStoryBg&&!st.storyBgOverride?'active':''}" data-storybg="${i}" type="button"><img src="${a.src}" alt="${a.name}"><span>${a.name}</span></button>`).join('');if($('storyElementGrid'))$('storyElementGrid').innerHTML=STORY_ELEMENTS.map((a,i)=>`<button class="assetBtn ${i===st.selectedStoryElement?'active':''}" data-storyelement="${i}" type="button"><img src="${a.src}" alt="${a.name}"><span>${a.name}</span></button>`).join('');document.querySelectorAll('[data-storybg]').forEach(b=>b.onclick=()=>{st.selectedStoryBg=+b.dataset.storybg;st.storyBgOverride=null;refreshStoryAssetGrids();draw()});document.querySelectorAll('[data-storyelement]').forEach(b=>b.onclick=()=>{st.selectedStoryElement=+b.dataset.storyelement;refreshStoryAssetGrids()})}
function refreshStoryElementControls(){if(!$('storyElementSelect'))return;let opts=st.storyElements.map((el,i)=>`<option value="${i}">${el.name||('Elemento '+(i+1))}</option>`).join('');$('storyElementSelect').innerHTML=opts||'<option value="-1">Nenhum</option>';if(st.storyElements.length===0)st.activeStoryElement=-1;else if(st.activeStoryElement<0||st.activeStoryElement>=st.storyElements.length)st.activeStoryElement=st.storyElements.length-1;$('storyElementSelect').value=String(st.activeStoryElement);let active=st.storyElements[st.activeStoryElement];$('storyElementW').disabled=!active;$('removeStoryElement').disabled=!active;if(active){$('storyElementW').value=Math.round(active.w||240);$('storyElementWV').value=Math.round(active.w||240)}else{$('storyElementW').value=240;$('storyElementWV').value='240'}}
function addStoryElement(obj){st.storyElements.push({name:obj.name||('Elemento '+(st.storyElements.length+1)),src:obj.src||'',img:obj.img||null,x:120+st.storyElements.length*18,y:120+st.storyElements.length*18,w:Math.max(60,+$('storyElementW').value||240),rot:obj.rot||0});st.activeStoryElement=st.storyElements.length-1;refreshStoryElementControls();draw()}
async function drawStoryElements(){for(let i=0;i<st.storyElements.length;i++){let el=st.storyElements[i];if(!el.img&&el.src)el.img=await image(el.src);if(!el.img)continue;let box=storyElementBox(el),cx=box.x+box.w/2,cy=box.y+box.h/2;ctx.save();ctx.translate(cx,cy);ctx.rotate((el.rot||0)*Math.PI/180);ctx.drawImage(el.img,-box.w/2,-box.h/2,box.w,box.h);if($('showGuides').checked&&i===st.activeStoryElement){ctx.setLineDash([10,6]);ctx.strokeStyle='rgba(255,230,0,.95)';ctx.lineWidth=3;ctx.strokeRect(-box.w/2,-box.h/2,box.w,box.h);}ctx.restore();}}
async function selected(kind){let val=$(kind).value;if(kind==='state')return st.stateOverride||await image(STATES[+val]?.src);return st.clientOverride||await image(CLIENTS[+val]?.src)}
async function renderNow(){ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.clearRect(0,0,W,H);if(mode==='story'){let bg=await storyBgSelected();if(bg)ctx.drawImage(bg,0,0,W,H);else{ctx.fillStyle='#002e6a';ctx.fillRect(0,0,W,H)}}else{ctx.fillStyle='#000';ctx.fillRect(0,0,W,H)}let rs=rects();rs.forEach((r,i)=>cover(st.photos[i],r));if(mode==='post'){let fr=$('model').value==='double'?frames.double:frames.single;if(fr)ctx.drawImage(fr,0,0,W,H);if($('showState').checked)drawContained(await selected('state'),stateBox(),8);if($('showClient').checked)drawContained(await selected('client'),logoBox());}caption();if(mode==='story')await drawStoryElements();if($('showGuides').checked){ctx.save();ctx.setLineDash([12,8]);ctx.lineWidth=3;ctx.strokeStyle='rgba(255,0,0,.95)';if(mode==='story'){ctx.strokeRect(54,62,W-108,H-372)}else{let b=capBox();ctx.strokeRect(b.x,b.y,b.w,b.h);let l=logoBox();ctx.strokeStyle='rgba(255,230,0,.95)';ctx.strokeRect(l.x,l.y,l.w,l.h)}ctx.restore()}}
function draw(){st.drawPending=true;if(st.rendering||st.drawScheduled)return;st.drawScheduled=true;requestAnimationFrame(async()=>{st.drawScheduled=false;if(st.rendering)return;st.rendering=true;try{do{st.drawPending=false;await renderNow()}while(st.drawPending)}finally{st.rendering=false}})}
function refreshActive(){let n=count();if(st.active>=n)st.active=0;$('activePhoto').innerHTML=Array.from({length:n},(_,i)=>`<option value="${i}">Foto ${i+1}</option>`).join('');$('activePhoto').value=st.active;let p=st.photos[st.active];$('zoom').value=p?.z||1;$('zoomV').value=(p?.z||1).toFixed(2)}
function renderAssets(){let render=(arr,grid,sel,kind)=>{$(grid).innerHTML=arr.map((a,i)=>`<button class="assetBtn ${+$(sel).value===i?'active':''}" data-kind="${kind}" data-i="${i}" type="button"><img src="${a.src}" alt="${a.name}"><span>${a.name}</span></button>`).join('')};$('state').innerHTML=STATES.map((a,i)=>`<option value="${i}">${a.name}</option>`).join('');$('client').innerHTML=CLIENTS.map((a,i)=>`<option value="${i}">${a.name}</option>`).join('');if(!$('state').dataset.ready){$('state').value=Math.max(0,STATES.findIndex(a=>a.name==='PA'));$('client').value=Math.max(0,CLIENTS.findIndex(a=>a.name.toUpperCase()==='VALE'));$('state').dataset.ready='1';}render(STATES,'stateGrid','state','state');render(CLIENTS,'clientGrid','client','client');document.querySelectorAll('#stateGrid .assetBtn,#clientGrid .assetBtn').forEach(b=>b.onclick=()=>{$(b.dataset.kind).value=b.dataset.i;renderAssets();draw()});refreshStoryAssetGrids();refreshStoryElementControls()}
async function handleFiles(files){const list=[...files];if(!list.length)return;try{const loaded=await Promise.all(list.map(fileImage));st.photos=loaded;st.active=0;st.photosLocked=false;refreshActive();updateStepLocks();draw()}catch{toast('Uma ou mais fotos não puderam ser abertas. Para melhor compatibilidade, use PNG, JPG, JPEG ou WEBP.')}}
function point(e){let r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height}}
function inBox(p,b){return p.x>=b.x&&p.x<=b.x+b.w&&p.y>=b.y&&p.y<=b.y+b.h}
function hitPhoto(p){let rs=rects();for(let i=rs.length-1;i>=0;i--){let r=rs[i];if(inBox(p,r))return i}return st.active}
function dragTargetAt(p){
  if(currentStep===4){
    if(mode==='story'){let idx=hitStoryElement(p);if(idx>-1){st.activeStoryElement=idx;refreshStoryElementControls();return 'storyElement';}}
    if($('showCaption').checked && inBox(p,capBox())) return 'caption';
    if(mode==='post' && $('showClient').checked && inBox(p,logoBox())) return 'client';
    return 'locked';
  }
  if(currentStep===3){
    if($('showCaption').checked && inBox(p,capBox())) return 'caption';
    return 'locked';
  }
  if(currentStep===2){
    if(mode==='story'){let idx=hitStoryElement(p);if(idx>-1){st.activeStoryElement=idx;refreshStoryElementControls();return 'storyElement';}}
    if(mode==='post' && $('showClient').checked && inBox(p,logoBox())) return 'client';
    return 'locked';
  }
  if(currentStep===1){
    if(st.photosLocked) return 'locked';
    return 'photo';
  }
  return 'locked';
}
canvas.addEventListener('pointerdown',e=>{
  canvas.setPointerCapture(e.pointerId);
  let p=point(e);
  st.pointers[e.pointerId]=p;
  st.dragTarget=dragTargetAt(p);
  if(st.dragTarget==='photo') st.active=hitPhoto(p);
  if(st.dragTarget==='locked'){st.drag=false;st.last=null;refreshActive();return;}
  if(st.dragTarget==='storyElement' && mode==='story'){
    st.activeStoryElement=hitStoryElement(p);
    refreshStoryElementControls();
  }
  const ids=Object.keys(st.pointers);
  if(mode==='story' && st.dragTarget==='storyElement' && st.activeStoryElement>-1 && ids.length===2){
    const [id1,id2]=ids;
    const p1=st.pointers[id1],p2=st.pointers[id2],el=st.storyElements[st.activeStoryElement];
    st.pinch={idx:st.activeStoryElement,startDist:Math.max(1,dist(p1,p2)),startW:el.w||240,startMid:{x:(p1.x+p2.x)/2,y:(p1.y+p2.y)/2},startX:el.x||0,startY:el.y||0};
    st.drag=false;
  }else{
    st.drag=true;st.last=p;
  }
  refreshActive();draw();
});
canvas.addEventListener('pointermove',e=>{
  let p=point(e);
  if(st.pointers[e.pointerId]) st.pointers[e.pointerId]=p;
  const ids=Object.keys(st.pointers);
  if(st.pinch && ids.length>=2){
    const p1=st.pointers[ids[0]],p2=st.pointers[ids[1]],el=st.storyElements[st.pinch.idx];
    if(el&&p1&&p2){
      const factor=Math.max(.2,dist(p1,p2)/st.pinch.startDist),mid={x:(p1.x+p2.x)/2,y:(p1.y+p2.y)/2};
      el.w=Math.max(60,Math.min(1400,st.pinch.startW*factor));
            el.x=st.pinch.startX + (mid.x-st.pinch.startMid.x);
      el.y=st.pinch.startY + (mid.y-st.pinch.startMid.y);
      $('storyElementW').value=Math.round(el.w);$('storyElementWV').value=Math.round(el.w);
      draw();
      return;
    }
  }
  if(!st.drag) return;
  let dx=p.x-st.last.x,dy=p.y-st.last.y;
  if(st.dragTarget==='caption'){st.caption.x+=dx;st.caption.y+=dy;}
  else if(st.dragTarget==='client'){st.client.x+=dx;st.client.y+=dy;}
  else if(st.dragTarget==='storyElement'){let el=st.storyElements[st.activeStoryElement];if(el){el.x+=dx;el.y+=dy;}}
  else {
    let q=st.photos[st.active];
    if(q){q.dx+=dx;q.dy+=dy;}
  }
  st.last=p;draw();
});
function stopDrag(e){if(e&&st.pointers[e.pointerId]) delete st.pointers[e.pointerId];if(Object.keys(st.pointers).length<2) st.pinch=null;if(Object.keys(st.pointers).length===0){st.drag=false;st.dragTarget='photo';} else if(!st.pinch){let keep=Object.values(st.pointers)[0];st.last=keep;st.drag=true;} }
canvas.addEventListener('pointerup',stopDrag);
canvas.addEventListener('pointercancel',stopDrag);

// Fluxo guiado de edição: cada etapa mostra só o que é necessário naquele momento.
let currentStep=0;
const TOTAL_STEPS=5;
function visibleStepSections(step){
  document.querySelectorAll('.section[data-step]').forEach(sec=>sec.classList.toggle('isActive',+sec.dataset.step===step));
  document.querySelectorAll('[data-go-step]').forEach(btn=>{let n=+btn.dataset.goStep;btn.classList.toggle('active',n===step);btn.classList.toggle('done',n<step)});
  $('stepCount').textContent=String(step+1);
  $('stepBack').disabled=step===0;
  $('stepBack').style.opacity=step===0?'.45':'1';
  const final=step===TOTAL_STEPS-1;
  $('stepNext').textContent=final?'Baixar PNG':'Avançar';
  $('stepNext').classList.toggle('finish',final);
  const active=document.querySelector('.workflowStep.active'); if(active) active.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});
  const sc=document.querySelector('.panelScroll'); if(sc)sc.scrollTop=0;
  updateStepLocks();
}
function goStep(step){currentStep=Math.max(0,Math.min(TOTAL_STEPS-1,step));visibleStepSections(currentStep);draw()}
document.querySelectorAll('[data-go-step]').forEach(btn=>btn.addEventListener('click',()=>goStep(+btn.dataset.goStep)));
$('stepBack').onclick=()=>goStep(currentStep-1);
$('stepNext').onclick=()=>{if(currentStep===TOTAL_STEPS-1){$('download').click()}else goStep(currentStep+1)};
$('previewToggle').onclick=()=>{const on=$('app').classList.toggle('previewing');$('previewToggle').textContent=on?'Editar':'Prévia';updateStepLocks();draw()};
// Navegação e controles principais
function resetEditor(){st.photos=[];st.active=0;st.photosLocked=false;st.caption={x:0,y:0};st.client={x:0,y:0};st.storyElements=[];st.activeStoryElement=-1;st.storyBgOverride=null;st.selectedStoryBg=0;$('showCaption').checked=true;if($('storyTextMode'))$('storyTextMode').value='with';refreshActive();refreshStoryElementControls();updateStepLocks();}
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{resetEditor();$('app').classList.remove('previewing');$('previewToggle').textContent='Prévia';goStep(0);setMode(b.dataset.open)});
$('backHome').onclick=()=>{if($('app').classList.contains('previewing')){$('app').classList.remove('previewing');$('previewToggle').textContent='Prévia';updateStepLocks();draw();return;}$('app').classList.remove('previewing');$('app').classList.add('hidden');$('home').classList.remove('hidden')};
$('photos').onchange=e=>handleFiles(e.target.files);
$('activePhoto').onchange=e=>{st.active=+e.target.value;refreshActive();draw()};
$('zoom').oninput=e=>{let q=st.photos[st.active];if(q){q.z=+e.target.value;$('zoomV').value=q.z.toFixed(2);draw()}};
$('gap').oninput=e=>{$('gapV').value=e.target.value;draw()};
['model','showCaption','showGuides','title','body','capW','capH','storyW','storyH','state','client','showState','showClient'].forEach(id=>$(id).addEventListener('input',()=>{let o=$(id+'V');if(o)o.value=$(id).value;if(id==='showCaption')syncStoryTextMode();refreshActive();draw()}));
$('stateUpload').onchange=async e=>{if(e.target.files[0]){st.stateOverride=(await fileImage(e.target.files[0])).img;draw()}};
$('clientUpload').onchange=async e=>{if(e.target.files[0]){st.clientOverride=(await fileImage(e.target.files[0])).img;draw()}};
document.querySelectorAll('.arrows').forEach(box=>box.querySelectorAll('.arrow:not(.blank)').forEach(btn=>btn.onclick=()=>{let target=box.dataset.move==='caption'?st.caption:st.client;target.x+=+btn.dataset.dx;target.y+=+btn.dataset.dy;draw()}));
$('storyBgUpload').onchange=async e=>{if(e.target.files[0]){let p=await fileImage(e.target.files[0]);st.storyBgOverride=p.img;draw()}};
$('storyElementUpload').onchange=async e=>{if(e.target.files[0]){let p=await fileImage(e.target.files[0]);addStoryElement({name:e.target.files[0].name.replace(/\.[^.]+$/,''),src:p.src,img:p.img});e.target.value='';}};
$('addStoryElement').onclick=()=>{let base=STORY_ELEMENTS[st.selectedStoryElement];if(base)addStoryElement({name:base.name,src:base.src});};
$('removeStoryElement').onclick=()=>{if(st.activeStoryElement<0)return;st.storyElements.splice(st.activeStoryElement,1);if(st.activeStoryElement>=st.storyElements.length)st.activeStoryElement=st.storyElements.length-1;refreshStoryElementControls();draw();};
$('storyElementSelect').onchange=e=>{st.activeStoryElement=+e.target.value;refreshStoryElementControls();draw()};
$('storyElementW').oninput=e=>{let val=+e.target.value;$('storyElementWV').value=val;let el=st.storyElements[st.activeStoryElement];if(el){el.w=val;draw()}};
$('storyTextMode').onchange=e=>{$('showCaption').checked=e.target.value!=='none';syncStoryTextMode();draw()};
$('lockPhotosBtn').onclick=()=>{if(mode!=='story')return;if(currentStep!==1){goStep(1);toast('Você voltou para a etapa Fotos.');}else{toast('As fotos já estão liberadas para ajuste.');}};
$('center').onclick=()=>{if(mode==='story'&&st.photosLocked)return;let q=st.photos[st.active];if(q){q.z=1;q.dx=0;q.dy=0;refreshActive();draw()}};$('download').onclick=async()=>{await renderNow();canvas.toBlob(blob=>{if(!blob){toast('Não foi possível gerar a imagem.');return;}let a=document.createElement('a');let url=URL.createObjectURL(blob);a.download=(mode==='story'?'story':'post')+'_lucena.png';a.href=url;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);},'image/png')};
(async()=>{await loadFrames();renderAssets();refreshStoryElementControls();updatePhotoLockUI();goStep(0);draw()})();
