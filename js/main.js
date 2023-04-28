import {checkStringLength} from './validation.js';
import {getPicturesFromServer} from './api.js';
import './picture.js';
import './form.js';
import './validation.js';
import './scale.js';
import './effect.js';

getPicturesFromServer();

// eslint-disable-next-line
checkStringLength('12', 3)
