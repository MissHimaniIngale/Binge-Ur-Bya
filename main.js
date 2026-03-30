/* ═══════════════════════════════════════════════════════
   main.js  —  Binge ur ब्या
   All interactive JS: cursor, stars, nav, scroll reveal,
   vendor search, modal, and floating button logic.
═══════════════════════════════════════════════════════ */
window.addEventListener('load',()=>setTimeout(()=>document.getElementById('pl').classList.add('out'),3000));

const ca=document.getElementById('ca'),cb=document.getElementById('cb');
let mx=0,my=0,bx=0,by=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;ca.style.left=mx+'px';ca.style.top=my+'px'});
(function anim(){bx+=(mx-bx)*.11;by+=(my-by)*.11;cb.style.left=bx+'px';cb.style.top=by+'px';requestAnimationFrame(anim)})();
document.querySelectorAll('a,button,[onclick],.vc,.cc,.sc,.lc,.tc').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cb.style.transform='translate(-50%,-50%) scale(1.7)';cb.style.borderColor='rgba(232,53,122,.8)'});
  el.addEventListener('mouseleave',()=>{cb.style.transform='translate(-50%,-50%) scale(1)';cb.style.borderColor='rgba(232,53,122,.5)'});
});
const parallaxEls = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  parallaxEls.forEach(el => {
    let speed = 0.2;

    if (el.classList.contains('p-slow')) speed = 0.15;
    if (el.classList.contains('p-medium')) speed = 0.35;
    if (el.classList.contains('p-fast')) speed = 0.6;

    const y = scrollY * speed;
    el.style.transform = `translateY(${y}px)`;
  });
});
const hero = document.querySelector('.hero');

hero.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelectorAll('.aur-b').forEach(el => {
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});
// Stars
const sw=document.getElementById('sw');
for(let i=0;i<60;i++){
  const s=document.createElement('div');
  const sz=Math.random()*2+.5;
  s.style.cssText=`position:absolute;width:${sz}px;height:${sz}px;border-radius:50%;left:${Math.random()*100}%;top:${Math.random()*100}%;background:${Math.random()<.5?'#F472B6':'#60A5FA'};opacity:0;animation:twk ${Math.random()*4+2}s ${Math.random()*5}s linear infinite`;
  sw.appendChild(s);
}
const st=document.createElement('style');
st.textContent='@keyframes twk{0%,100%{opacity:0;transform:scale(0)}50%{opacity:.8;transform:scale(1)}}';
document.head.appendChild(st);

window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('on',scrollY>60));
function toggleMenu(){document.getElementById('nav').classList.toggle('menu-open')}

const ro=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('on')}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>ro.observe(el));

function doSearch(){
  if(!document.getElementById('cityS').value||!document.getElementById('styleS').value){alert('Please select both a city and a wedding style!');return}
  openM('customer');
}

function openM(t){
  const cfg={
    customer:{ico:'👰',title:'Welcome Back',sub:'Sign in to plan your dream wedding',tabs:['Login','Register']},
    vendor:{ico:'🏪',title:'Vendor Portal',sub:'Grow your business with Binge ur Bya',tabs:['Login','Register Business']},
    admin:{ico:'🛡️',title:'Admin Access',sub:'Secure administrative portal',tabs:['Admin Login']}
  };
  const c=cfg[t];
  document.getElementById('mc').innerHTML=`
    <div class="m-ico">${c.ico}</div><h2>${c.title}</h2><p class="m-sub">${c.sub}</p>
    <div class="mtabs">${c.tabs.map((tab,i)=>`<button class="mtab ${i===0?'on':''}" onclick="this.parentElement.querySelectorAll('.mtab').forEach(x=>x.classList.remove('on'));this.classList.add('on')">${tab}</button>`).join('')}</div>
    <div class="mf"><label>Email Address</label><input type="email" placeholder="you@example.com"/></div>
    <div class="mf"><label>Password</label><input type="password" placeholder="••••••••"/></div>
    ${t==='vendor'?'<div class="mf"><label>Business Name</label><input type="text" placeholder="Your Business Name"/></div>':''}
    <button class="msub">Continue →</button>
  `;
  document.getElementById('mov').classList.add('on');
}
function closeModal(){document.getElementById('mov').classList.remove('on')}
function closeM(e){if(e.target===document.getElementById('mov'))closeModal()}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
