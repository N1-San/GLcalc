const color1 = document.querySelector('.main-background');
const colorInput1 = document.querySelector('.colorPicker1');
colorInput1.addEventListener('input', () => {
    color1.style.backgroundColor = colorInput1.value;
})
//query selector all not working.....using data classes does not work either
const color2 = document.querySelector('[data-all-clear]');
const color2_1 = document.querySelector('[data-number]');
const color2_2 = document.querySelector('[data-operation]');
const color2_16 = document.querySelector('[data-equals]');
const color2_18 = document.querySelector('[data-point]');
const colorInput2 = document.querySelector('.colorPicker2');
colorInput2.addEventListener('input', () => {
    color2.style.backgroundColor = colorInput2.value;
    color2_1.style.backgroundColor = colorInput2.value;
    color2_2.style.backgroundColor = colorInput2.value;
    color2_16.style.backgroundColor = colorInput2.value;
    color2_18.style.backgroundColor = colorInput2.value;
})


const color3 = document.querySelector('.output');
const colorInput3 = document.querySelector('.colorPicker3');
colorInput3.addEventListener('input', () => {
    color3.style.backgroundColor = colorInput3.value;
})
const color4 = document.querySelector('.calculator-grid');
const colorInput4 = document.querySelector('.colorPicker4');
colorInput4.addEventListener('input', () => {
    color4.style.color = colorInput4.value;
})