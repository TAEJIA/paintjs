<<<<<<< HEAD
const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById('jsMode');

canvas.height = 700;
canvas.width = 700;

let painting = false;
let filling = false;

ctx.strokeStyle = "#2c2c2c"; // 선 색
ctx.lineWidth = 2.5; // 굵기

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {//콜백함수, 이벤트리스너
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) { // if문 !painting이 true가 될 때 실행되기 때문에 painting이 false가 되면 실행됨
        ctx.beginPath()
        ctx.moveTo(x, y)
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}


function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;

}

function handleRangeChange(event) { //console.log로 event.target.value <벨류를 찾음.
    const size = event.target.value;
    ctx.lineWidth = size;
}


function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}


if (canvas) { //if 에 canvas가 있는 이유는 canvas가 들어가 있는지 확인
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);//그리기시작
    canvas.addEventListener('mouseup', stopPainting);//그리기멈춤
    canvas.addEventListener('mouseleave', stopPainting);//화면밖탈출(그리기멈춤)
}

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));
//Array.from은 유사배열객체, html의 색상코드를 배열로 정리

if (range) {
    range.addEventListener('input', handleRangeChange);
}


if (mode) {
    mode.addEventListener('click', handleModeClick);
=======
const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

canvas.height = 700;
canvas.width = 700;

let painting = false;

ctx.strokeStyle = "#2c2c2c"; // 선 색
ctx.lineWidth = 2.5; // 굵기

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {//콜백함수, 이벤트리스너
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) { // if문 !painting이 true가 될 때 실행되기 때문에 painting이 false가 되면 실행됨
        ctx.beginPath()
        ctx.moveTo(x, y)
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}



if (canvas) { //if 에 canvas가 있는 이유는 canvas가 들어가 있는지 확인
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);//그리기시작
    canvas.addEventListener('mouseup', stopPainting);//그리기멈춤
    canvas.addEventListener('mouseleave', stopPainting);//화면밖탈출(그리기멈춤)
>>>>>>> 6b01e3d2cc3a88743f71439282deda2bc454702f
}