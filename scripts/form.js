const form = document.getElementById('form-container');
const input = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const successDesktop = document.querySelector('.desktop-tablet-succes');
const successButton = document.querySelector('.succes-button');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const mailto = document.getElementById('mailto');

function clearError() {
if (errorMessage) errorMessage.style.display = 'none';
if (input) input.classList.remove('input-error');
}

input.addEventListener('input', clearError);
input.addEventListener('focus', clearError);


function handleSubmit(event)    {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  if (!errorMessage || !input) {
    console.error('Required form elements are missing');
    return;
  }

  const trimmedValue = input.value.trim();
  if (!trimmedValue || !emailRegex.test(trimmedValue)) {
    errorMessage.style.display = 'block';
    input.classList.add('input-error');
    return;
  }

    form.style.display = 'none';
    successDesktop.classList.add('is-visible');
    const email = trimmedValue;
    mailto.textContent = email;
    mailto.href = 'mailto:' + email;

};

form.addEventListener('submit', handleSubmit);


function closeSuccessMessage() {
  successDesktop.classList.remove('is-visible');
  form.style.display = 'flex';
  input.value = '';
  clearError();
};

successButton.addEventListener('click', closeSuccessMessage);
