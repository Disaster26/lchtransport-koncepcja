// nagłówek po przewinięciu, menu mobilne, mapa przy przewinięciu
(function(){
 var g=document.getElementById('gora'),b=document.getElementById('burger'),m=document.getElementById('menu');
 function s(){g.classList.toggle('tlo',window.scrollY>40||m.classList.contains('otw'))}
 window.addEventListener('scroll',s,{passive:true});s();
 b.addEventListener('click',function(){var o=m.classList.toggle('otw');b.classList.toggle('otw',o);b.setAttribute('aria-expanded',o);s()});
 m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('otw');b.classList.remove('otw');b.setAttribute('aria-expanded','false');s()}});
 var mp=document.getElementById('mapa');
 if(mp&&'IntersectionObserver' in window){new IntersectionObserver(function(en,o){if(en[0].isIntersecting){var f=document.createElement('iframe');f.src=mp.dataset.src;f.title='Mapa dojazdu: Plac Jana Matejki 19/11, Zielona Góra';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';mp.appendChild(f);o.disconnect()}},{rootMargin:'300px'}).observe(mp)}
})();
