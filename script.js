const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.addEventListener('click',event=>{if(event.target.matches('a')){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}})}
document.querySelectorAll('.year').forEach(item=>{item.textContent=new Date().getFullYear()});
const printButton=document.querySelector('.print-button');
if(printButton)printButton.addEventListener('click',()=>window.print());
