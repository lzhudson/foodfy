const modalOverlay = document.querySelector('.modal-overlay');
const foods = document.querySelectorAll('.food');
const closeModal = document.querySelector('.modal-close');

const foodsInfo = [
  { food: 'burger', name: 'Triplo bacon burger', author: 'Jorge Relato' },
  { food: 'pizza', name: 'Pizza 4 estações', author: 'Fabiana Melo' },
  { food: 'espaguete', name: 'Espaguete ao alho', author: 'Júlia Kinoto' },
  { food: 'lasanha', name: 'Lasanha mac n\' cheese', author: 'Juliano Vieira' },
  { food: 'doce', name: 'Docinhos pão-do-céu', author: 'Ricardo Golveia' },
  { food: 'asinhas', name: 'Asinhas de frango ao barbecue', author: 'Vania Steroski' },
];

for (const food of foods) {
  food.addEventListener('click', function () {
    const foodName = food.getAttribute('id');
    const foodInfo = getInfoFood(foodName);
    const foodNameEl = document.querySelector('.modal .food-name');
    const foodAuthorEl = document.querySelector('.modal .food-author');
    const foodImageEl = document.querySelector('.modal .modal-image img');
    foodImageEl.setAttribute('src', `./img/${foodName}.png`);
    foodAuthorEl.textContent = `por ${foodInfo.author}`;
    foodNameEl.textContent = foodInfo.name;
    modalOverlay.classList.add('active');
  })
}

closeModal.addEventListener('click', function () {
  modalOverlay.classList.remove('active');
})

function getInfoFood(foodName) {
  for (const food of foodsInfo) {
    if (food.food === foodName) {
      return food;
    }
  }
}