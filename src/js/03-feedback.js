import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let formData = {};
formValues();

function formValues() {
  let newForm = localStorage.getItem(STORAGE_KEY);

  // try {
  //   newForm = JSON.parse(newForm);
  // } catch (error) {
  //   console.log(error.name);
  //   console.log(error.message);
  // }

  if (newForm) {
    if (savedMessage.email) {
      email.value = newForm.email;
      formData.email = newForm.email;
    }
    if (newForm.message) {
      message.value = newForm.message;
      formData.message = newForm.message;
    }
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
























// import throttle from 'lodash.throttle';
// const STORAGE_KEY = 'feedback-form-state';

// const addForm = document.querySelector('.feedback-form');
// const addEmail = document.querySelector('.feedback-form input');
// const addMessage = document.querySelector('.feedback-form textarea');

// addForm.addEventListener('submit', onAddForm);
// addForm.addEventListener('input', throttle(onFormInput, 500));

// let formData = {};

// formValues();

// function formValues() {
//   let savedMessage = localStorage.getItem(STORAGE_KEY);

//   try {
//     savedMessage = JSON.parse(savedMessage);
//   } catch (er) {
//     console.log(er.name);
//     console.log(er.addMessage);
//   }

//   if (savedMessage) {
//     if (savedMessage.addEmail) {
//       addEmail.value = savedMessage.addEmail;
//       formData.addEmail = savedMessage.addEmail;
//     }
//     if (savedMessage.addMessage) {
//       addMessage.value = savedMessage.addMessage;
//       formData.addMessage = savedMessage.addMessage;
//     }
//   }
// }

// function onFormInput(event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onAddForm(event) {
//   event.preventDefault();
//   console.log(formData);
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   formData = {};
// }

