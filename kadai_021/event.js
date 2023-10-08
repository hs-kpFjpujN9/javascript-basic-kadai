const textLine= document.getElementById('text');
const cngBtn= document.getElementById('btn');

cngBtn.addEventListener('click',() => {
    setTimeout(() =>{
        textLine.textContent ="クリックされました";
    },2000)
})
