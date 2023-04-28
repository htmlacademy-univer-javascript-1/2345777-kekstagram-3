import { resetEffect } from './effect.js';

const uploadPicture = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');

uploadPicture.addEventListener('change', () => {
  openWindow();
});

cancelButton.addEventListener('click', () => {
  closeWindow(true);
});

const closeOnButton = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow(true);
  }
};

function openWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
}

function cleanForm() {
  uploadPicture.value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  resetEffect();
  document.querySelector('.scale__control--value').value = '100%';
}

function closeWindow(clean) {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  if (clean) {
    cleanForm();
  }
}

export {closeWindow};
