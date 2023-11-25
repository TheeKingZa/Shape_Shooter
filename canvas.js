//  better to resize in js.
var canvas = document.querySelector('canvas');

// Screen_Size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// assign Context to c variable
var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillRect(500, 100, 100, 100);
console.log(canvas);