const image = document.getElementById('image');
const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const saturate = document.getElementById('saturate');
const hue = document.getElementById('hue');



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