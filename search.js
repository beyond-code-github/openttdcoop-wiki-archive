(function(){
var base=((document.currentScript&&document.currentScript.getAttribute('src'))||'search.js').replace(/search\.js.*$/,'');
var q=document.getElementById('q'),res=document.getElementById('results'),menu=document.getElementById('menu');
if(menu)menu.addEventListener('click',function(){var o=document.body.classList.toggle('nav-open');menu.setAttribute('aria-expanded',o)});
if(!q)return;var sel=-1;
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function run(){
 var v=q.value.trim().toLowerCase(),idx=window.SEARCH_INDEX||[];
 if(!v){res.hidden=true;return}
 var words=v.split(/\s+/),out=[];
 idx.forEach(function(p){
  var t=p.t.toLowerCase(),c=p.c.join(' ').toLowerCase(),x=p.x.toLowerCase(),s=0,ok=true;
  words.forEach(function(w){var k=0;
   if(t===w)k=10;else if(t.indexOf(w)===0)k=6;else if(t.indexOf(w)>-1)k=4;
   else if(c.indexOf(w)>-1)k=2;else if(x.indexOf(w)>-1)k=1;
   if(!k)ok=false;s+=k});
  if(ok)out.push([s,p])});
 out.sort(function(a,b){return b[0]-a[0]||a[1].t.localeCompare(b[1].t)});
 out=out.slice(0,10);sel=-1;
 res.innerHTML=out.length?out.map(function(o){var p=o[1];return '<li><a href="'+base+p.u+'">'+esc(p.t)+'<small>'+esc(p.x.slice(0,90))+'</small></a></li>'}).join(''):'<li><a>No matches</a></li>';
 res.hidden=false}
q.addEventListener('input',run);
q.addEventListener('keydown',function(e){
 var a=res.querySelectorAll('a[href]');
 if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!a.length)return;
  if(a[sel])a[sel].classList.remove('sel');sel=(sel+(e.key==='ArrowDown'?1:-1)+a.length)%a.length;a[sel].classList.add('sel')}
 else if(e.key==='Enter'&&a.length){location.href=(a[sel]||a[0]).getAttribute('href')}
 else if(e.key==='Escape'){res.hidden=true;q.blur()}});
document.addEventListener('keydown',function(e){if(e.key==='/'&&document.activeElement!==q&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();q.focus()}});
document.addEventListener('click',function(e){if(!e.target.closest('#searchbox'))res.hidden=true});
})();
