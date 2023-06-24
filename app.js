const image = document.getElementById('image');
const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const saturate = document.getElementById('saturate');
const hue = document.getElementById('hue');
const resetBtn = document.getElementById('reset');



brightness.addEventListener('input', applyFilters);
contrast.addEventListener('input', applyFilters);
saturate.addEventListener('input', applyFilters);
hue.addEventListener('input', applyFilters);

function applyFilters() {
    const brightnessValue = brightness.value;
    const contrastValue = contrast.value;
    const saturateValue = saturate.value;
    const hueValue = hue.value;

    image.style.filter = `brightness(${brightnessValue}%) contrast(${contrastValue}%) saturate(${saturateValue}%) hue-rotate(${hueValue}deg)`
}

function removeFilter() {
    brightness.value = 100;
    contrast.value = 100;
    saturate.value = 100;
    hue.value = 0;


    image.style.filter = `brightness(100%) contrast(100%) saturate(100%) hue-rotate(0deg)`

}

resetBtn.addEventListener('click', removeFilter)