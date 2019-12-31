const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
//colors 값 받을 변수 선언 start
let getColor = '#2c2c2c'
const colors = document.getElementsByClassName('jsColor')
console.log(`color 값 가져옴 : ${getColor}`)
Array.from(colors).forEach(color => color.addEventListener('click', chagneColor))
//colors 값 받을 변수 선언 end

ctx.strokeStyle = getColor
ctx.lineWidth = 2.5

canvas.width = 700
canvas.height = 700
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
function onMouseDown(event) {
  painting = true
}

function chagneColor(event) {
  const getColor = event.target.style.backgroundColor
  console.log(`color 값 가져옴 : ${getColor}`)
  return getColor
}
if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}
