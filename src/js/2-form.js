const form = document.querySelector('.feedback-form');

const formData = {
  email: JSON.parse(localStorage.getItem('feedback-form-state'))?.email ?? '',
  message:
    JSON.parse(localStorage.getItem('feedback-form-state'))?.message ?? '',
};

const submitData = () => {
  console.log(formData);
  form.reset();
  localStorage.clear();
  formData.email = '';
  formData.message = '';
};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  formData.email === '' || formData.message === ''
    ? alert('Fill please all fields')
    : submitData();
});