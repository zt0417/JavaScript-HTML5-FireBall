var backgroundColor = '#111';
var gravity = 0.03;
var fireballColor='#f73';

var canvas=document.querySelector('canvas');
var ctx=canvas.getContext('2d');

(onresize = function(){
  width = canvas.width = canvas.clientWidth;
  height = canvas.height = canvas.clientHeight;
  o = {x:Math.floor(width/2),y:Math.floor(height/2)};
  edge = {top:-o.y,right:width-o.x,bottom:height-o.y,left:-o.x}
})();
