const elements = {
  menuBtn: document.getElementById('toggle-menu'),
  menu: document.getElementById('extra-menu'),
  loginBtn: document.getElementById('login-btn'),
  changeForm: document.getElementById('change-form'),
  loginForm: document.querySelector('.form__log-in'),
  signupForm: document.querySelector('.form__sign-up'),
  modal: document.getElementById('modal'),
  closeModal: document.getElementById('close'),
  reviewsBtn: document.querySelectorAll('.reviews__btn'),
  foodList: document.getElementById('food')
};

elements.menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  elements.menu.classList.toggle('hidden');
});

elements.loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  elements.modal.classList.toggle('hidden');
});

elements.changeForm.addEventListener('click', (e) => {
  e.preventDefault();
  elements.loginForm.classList.add('hidden');
  elements.signupForm.classList.remove('hidden');
  elements.changeForm.classList.add('hidden');
});

elements.closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  elements.modal.classList.add('hidden');
  elements.changeForm.classList.remove('hidden');
  elements.loginForm.classList.remove('hidden');
  elements.signupForm.classList.add('hidden');
});