const successTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

const closeSuccessElement = () => {
  document.removeEventListener('keydown', closeByEscSuccess);
  document.removeEventListener('click', closeByClickSuccess);
  successTemplate.remove();
};

const closeErrorElement = () => {
  document.removeEventListener('keydown', closeByEscError);
  document.removeEventListener('click', closeByClickError);
  errorTemplate.remove();
};

function closeByEscSuccess(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessElement();
  }
}

function closeByEscError(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorElement();
  }
}

function closeByClickSuccess(evt) {
  evt.preventDefault();
  closeSuccessElement();
}

function closeByClickError(evt) {
  evt.preventDefault();
  closeErrorElement();
}

const isSuccess = () => {
  const successButton = successTemplate.querySelector('.success__button');
  document.addEventListener('keydown', closeByEscSuccess);
  document.addEventListener('click', closeByClickSuccess);
  successButton.addEventListener('click', closeSuccessElement);
  document.body.append(successTemplate);
};

const isFail = () => {
  const errorButton = errorTemplate.querySelector('.error__button');
  document.addEventListener('keydown', closeByEscError);
  document.addEventListener('click', closeByClickError);
  errorButton.addEventListener('click', closeErrorElement);
  document.body.append(errorTemplate);
};

export {isSuccess, isFail};
