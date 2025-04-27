const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const openModalButton = document.getElementById('openModalButton'); // a button to open the modal

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});