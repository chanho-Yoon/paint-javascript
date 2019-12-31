const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.getElementsByClassName('jsColor')
const range = document.getElementById('jsRange')
const jsmode = document.getElementById('jsMode')

//FILL 눌렀을 시 해당되는 컬러를 적용하기 위한 변수
let getColor = null
ctx.strokeStyle = '#2c2c2c'
ctx.lineWidth = 2.5

canvas.width = 700
canvas.height = 600
let painting = false
function onMouseMove(event) {
  const x = event.offsetX
  const y = event.offsetY
  if (painting === false) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    console.log(`false : ${painting}`)
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
    console.log(`true : ${painting}`)
  }
}
function stopPainting() {
  console.log('마우스 업')
  painting = false
}
function startPainting() {
  console.log(' 마우스 다운 ')
  painting = true
}

function handleColorClick(event) {
  getColor = event.target.style.backgroundColor
  ctx.strokeStyle = getColor
  document.getElementById('jsChoiceColor').style.backgroundColor = getColor
}
function handleRange(event) {
  getRangeValue = event.target.value
  ctx.lineWidth = getRangeValue
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}
//controls__colors
Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick))
//range
range.addEventListener('mouseup', handleRange)
//FILL JSMODE
function handleClickJsmode() {
  canvas.style.backgroundColor = getColor
}
jsmode.addEventListener('click', handleClickJsmode)
