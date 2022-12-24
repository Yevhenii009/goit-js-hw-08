import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const addForm = document.querySelector('.feedback-form');
const addEmail = document.querySelector('.feedback-form input');
const addMessage = document.querySelector('.feedback-form textarea');

addForm.addEventListener('submit', onAddForm);
addForm.addEventListener('input', throttle(onAddFormInput, 500));

let formData = [];

formValues();

function formValues() {
  let savedMessage = localStorage.getItem(STORAGE_KEY);

  try {
    savedMessage = JSON.parse(savedMessage);
  } catch (er) {
    console.log(er.addEmail);
    console.log(er.addMessage);
  }

  if (savedMessage) {
    if (savedMessage.addEmail) {
      addEmail.value = savedMessage.addEmail;
      formData.addEmail = savedMessage.addEmail;
    }
    if (savedMessage.addMessage) {
      addMessage.value = savedMessage.addMessage;
      formData.addMessage = savedMessage.addMessage;
    }
  }
}

function onAddFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onAddForm(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = [];
}
