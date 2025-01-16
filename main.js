const card = document.getElementById('card');
const lightBtn = document.getElementById('light-btn');
const darkBtn = document.getElementById('dark-btn');
const dimBtn = document.getElementById('dim-btn');

lightBtn.addEventListener('click' , () => {
card.classList.remove('dark-mode' , 'dim-mode');
card.classList.add('light-mode');
});
darkBtn.addEventListener('click' , ()  => {
card.classList.remove('light-mode' , 'dim-mode') ;
card.classList.add('dark-mode');
});
dimBtn.addEventListener('click' , () => {
card.classList.remove('light-mode' , 'dark-mode');
card.classList.add('dim-mode');
});
