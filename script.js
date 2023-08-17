const foodCard = document.querySelectorAll('.food-card');
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay')


console.log(foodCard);

foodCard.forEach((card) => {
  card.addEventListener('click',function(){
      modal.style.display = 'block';
  })
})

close.addEventListener('click',function(){
  modal.style.display = 'none'
})

window.addEventListener('click', function (event) {
 console.log(454,event.target);
});

