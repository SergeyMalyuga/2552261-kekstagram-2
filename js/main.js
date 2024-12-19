import './big-picture.js';
import './form.js';
import './effects.js';
import './filters.js';
import {showData} from './api.js';
import {miniatureCreate} from './miniature.js';
import {setButtonScaleSmaller, setButtonScaleBigger} from './scale-control.js';

const imgUploadPreview = document.querySelector('.img-upload__preview img');

showData(miniatureCreate);
setButtonScaleSmaller(imgUploadPreview);
setButtonScaleBigger(imgUploadPreview);
