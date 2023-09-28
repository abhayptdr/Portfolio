var typed = new Typed(".typing", {
    strings: [ "Aspiring Developer", "Web Designer", "Web Developer"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});
var typed = new Typed(".typing2",  {
    strings: [ "Aspiring Developer", "Web Designer", "Web Developer"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

const hamburger=document.getElementById('hamburger');
const list=document.getElementById('list');
const cross=document.getElementById('cross');

if(hamburger){
    hamburger.addEventListener('click', ()=> {
        list.classList.add('active');
    })
}
if(cross){
    cross.addEventListener('click', ()=> {
     list.classList.remove('active');   
    })
}