import { sendData } from './api.js';
import {checkStringLength} from './util.js';

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

pristine.addValidator(document.querySelector('.text__description'), validateComment, 'Длина комментария должна быть от 20 до 140 символов');

function validateComment(element) {
  return !checkStringLength(element, 19) && checkStringLength(element, 140);
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendData(evt);
  }
});
