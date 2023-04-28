const increase = document.querySelector('.scale__control--bigger');
const decrease = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview');

const changeScale = (newScaleValue) => {
  scaleValue.value = `${newScaleValue}%`;
  preview.style.transform = `scale(${newScaleValue/100})`;
};

increase.addEventListener('click', () => {
  const currentScaleValue = Number(scaleValue.value.slice(0, -1));
  if (currentScaleValue < 100) {
    changeScale(currentScaleValue + 25);
  }
});

decrease.addEventListener('click', () => {
  const currentScaleValue = Number(scaleValue.value.slice(0, -1));
  if (currentScaleValue > 25) {
    changeScale(currentScaleValue - 25);
  }
});
