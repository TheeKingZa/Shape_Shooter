//  better to resize in js.
var canvas = document.querySelector('canvas');


// Screen_Size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

inWidth = window.innerWidth;
inHeight = window.innerHeight;

// assign Context to c variable
var c = canvas.getContext('2d');

// Drawing Square
// color

c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = "gold";
c.fillRect(300, 300, 100, 100);
c.fillStyle = "black";
c.fillRect(500, 100, 100, 100);
console.log(canvas);


// Drawing Lines
for (var sq = 0; sq < 10; sq++)
{
    var x = Math.random() * inWidth;
    var y = Math.random() * inHeight;
c.beginPath();
c.moveTo(x, y);
c.lineTo(x, 0);
c.lineTo(x, y);
// Color in line
c.strokeStyle
c.stroke();
}


// Arc / Circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = 'blue';
//c.stroke();

for (var i = 0;  i < 3; i++)
{
// Arc / Circle
var x = Math.random() * inWidth;
var y = Math.random() * inHeight;
c.beginPath();

c.arc(x, y, 30, 0, Math.PI * 2, false);
c.strokeStyle = "black";
c.stroke();
}