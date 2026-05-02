const header=document.querySelector('.site-header');
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.global-nav');

window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>20);});

menuToggle.addEventListener('click',()=>{
  const isOpen=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(isOpen));
});

document.querySelectorAll('.global-nav a').forEach(link=>{
  link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('is-visible');});
},{threshold:.15});
document.querySelectorAll('.section-reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.faq button').forEach(button=>{
  button.addEventListener('click',()=>button.parentElement.classList.toggle('open'));
});
