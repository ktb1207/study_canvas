window.onload = function(){
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d');
  
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'red';
  ctx.moveTo(10,30.5)
  ctx.lineTo(100, 30.5)
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, 40.5);
  ctx.lineTo(100, 40.5);
  ctx.stroke();
}