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
function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function ()
    {
          // Arc / CIrcle
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.stroke();

    }

    this.update = function()
    {
         // Right/left onCollosion
    if (this.x + this.radius > inWidth || this.x - this.radius < 0)
    {
        // Switch to Negative
        this.dx = -this.dx;
    }

    // Top/Down
    if (this.y + this.radius > inHeight || this.y - this.radius < 0)
    {
        this.dy = -this.dy;
    }
    
   
    // moving per/px
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
    }
}

/* 
*/

var circleArray = [];

for(var i = 0; i < 100; i++)
{
    // for random actions/Value
var x = Math.random() * inWidth;
var y = Math.random() * inHeight;
// math arithimatic
var dx = (Math.random() - 0.5) * 5;
var dy = (Math.random() - 0.5)* 5;
var radius = 30;
    // Do something
    var circle = new Circle(200, 200, 3, 3, 30);
    circleArray.push(new Circle(x, y, dx, dy, radius))

}

 



    circle.draw( );
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
    
    // iterate thru the circleArray
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
    

}

   

animate();