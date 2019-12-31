const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')

ctx.strokeStyle = '#2c2c2c'
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
    console.log(`true ${painting}`)
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
    console.log(`false ${painting}`)
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

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}
