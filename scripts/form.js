let form = document.getElementById('form-container');
let input = document.getElementById('form-input');
let errorMessage = document.querySelector('.error-message');
const successDesktop = document.querySelector('.desktop-tablet-succes');
const successButton = document.querySelector('.succes-button');


function handleSubmit(event)    {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  if (!input.value.trim() || !input.value.includes('@')) {
    errorMessage.style.display = 'block';
    return;
  } else {
    form.style.display = 'none';
    successDesktop.classList.add('is-visible');
    return;
  }

};

form.addEventListener('submit', handleSubmit);



function closeSuccessMessage() {
  successDesktop.classList.remove('is-visible');
  form.style.display = 'flex';
  input.value = '';
};
successButton.addEventListener('click', closeSuccessMessage);
