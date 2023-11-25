//  better to resize in js.
var canvas = document.querySelector('canvas');


// Screen_Size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

inWidth = window.innerWidth;
inHeight = window.innerHeight;

// assign Context to c variable
var c = canvas.getContext('2d');


/*
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


for (var i = 0;  i < 3; i++)
{
// Arc / Circle
var x = Math.random() * inWidth;
var y = Math.random() * inHeight;
c.beginPath();

c.arc(x, y, 30, 0, Math.PI * 2, false);
c.strokeStyle = "black";
c.stroke();
} */

// Caps on fuction to indicate its a Obj
function Circle(){
    this.x = x;
    this.y = y;

    this.draw = function ()
    {
          // Arc / CIrcle
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.stroke();

    }
}

var circle = new Circle(200, 200);
circle.draw();
// Moving Our Elements


// for random actions/Value
var x = Math.random() * inWidth;
var y = Math.random() * inHeight;
// math arithimatic
var dx = (Math.random() - 0.5) * 5;
var dy = (Math.random() - 0.5)* 5;
var radius = 30;

// Animate
// Infinite Loop.
// Debug.log(to see if its responding.)
function animate() {
    // runs p/s
    requestAnimationFrame(animate);
    console.log('Working!');
    //check log

    // clearing all the created circles in process
    c.clearRect(0, 0, inWidth, inHeight);
    
circle.draw();
    
    // Arc / CIrcle
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.stroke();

    // Right/left onCollosion
    if (x + radius > inWidth || x - radius < 0)
    {
        // Switch to Negative
        dx = -dx;
    }

    // Top/Down
    if (y + radius > inHeight || y - radius < 0)
    {
        dy = -dy;
    }
    
   
    // moving per/px
    x += dx;
    y += dy;
}

   

animate();