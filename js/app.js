const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.getElementsByClassName('jsColor')
const range = document.getElementById('jsRange')
const jsmode = document.getElementById('jsMode')
const jssave = document.getElementById('jsSave')

//FILL 눌렀을 시 해당되는 컬러를 적용하기 위한 변수
let getColor = null

//canvas 배경색을 처음에 초기화시켜주지 않아서 아무 색상없이 이미지 저장시 바탕화면이 투명하게 저장됨 이것을 초기화로 해결
ctx.style = 'white'
ctx.fillRect(0, 0, 700, 600)
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
//오른쪽 마우스 클릭 막기
function handleRightClick(event) {
  event.preventDefault()
}
if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
  canvas.addEventListener('contextmenu', handleRightClick)
}
//controls__colors
Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick))
//range
function handleRange(event) {
  getRangeValue = event.target.value
  ctx.lineWidth = getRangeValue
}
range.addEventListener('mouseup', handleRange)
//FILL JSMODE
function handleClickJsmode() {
  ctx.fillStyle = getColor
  ctx.fillRect(0, 0, 700, 600)
}
jsmode.addEventListener('click', handleClickJsmode)
//SAVE
function handleClickJssave() {
  const image = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = image
  link.download = 'happyIMG'
  link.click()
}
jssave.addEventListener('click', handleClickJssave)
