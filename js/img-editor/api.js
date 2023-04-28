import {renderingPicture} from './picture.js';
import {errorAlert} from './util.js';
import {isFail, isSuccess} from './check.js';
import {closeWindow} from './form.js';

const getPicturesFromServer = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => renderingPicture(response))
    .catch(() => errorAlert('Ошибка загрузки изображений'));
};

const sendData = (evt) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response.ok) {
        closeWindow(true);
        isSuccess();
      } else {
        closeWindow(false);
        isFail();
      }
    });
};

export {getPicturesFromServer, sendData};
