function Circle(x, y, dy, rad, color) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.rad = rad;
  this.color = color;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };
  this.update = function () {
    this.y += this.dy;
    if (this.y > innerHeight + this.rad+ 10) {
      this.y = 1;
    }
  };
}

let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ch = c.canvas.height;
const cw = c.canvas.width;

// canvas.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });

var circles = [];

function init() {
    let opacity = .5
  for (var i = 0; i < innerWidth/10; i++) {
    let x = Math.random() * innerWidth;

    let rad = innerHeight * (Math.random() / 20);
    let y = Math.random() * innerWidth;
    let dy = Math.random() * 1.2;
    let colorselect = Math.random() * 1.5;
    console.log("hey", dy);
    
    var color = `hsla(301,76%,62%,${opacity} )`;

    // change the color
    console.log(dy);
    if (dy >= 0.8) {
      color = `hsla(301,76%,62%,${opacity} )`;
    }
    if (dy < 0.8 && dy >= 0.6) {
      color = `hsla(301,76%,42%,${opacity} )`;
    }
    if (dy < 0.6 && dy >= 0.4) {
      color = `hsla(301,76%,22%,${opacity} )`;
    }
    if (colorselect < 0.4) {
      color = "hsla(0, 0%, 11%, 1)";
    }
    circles.push(new Circle(x, y, dy, rad, color));
  }
}

// function setVar() {

//     let x = Math.random() * window.innerWidth

//     let rad = innerHeight * (Math.random() / 20)
//     let y= 0-rad
//     let dy = (Math.random()) * 4
//     let color = '#E854E6'
//     return x,y,dy,rad,color
// }

function animate() {
  requestAnimationFrame(animate);
  console.log(circles.length, "loop");
  c.clearRect(0, 0, 10000, 10000);
  for (var i = 0; i < circles.length; i++) {
    circles[i].draw();
    circles[i].update();
    // console.log(circles[i].y)
    if (circles[i].y > innerHeight + circles[i].rad) {
      // console.log(x, y, dy, rad, color)
      // circles.splice(i,1, new Circle(x, y, dy, rad, color));
      // circles[i].color = 'orange'
      circles[i].x = Math.random() * canvas.width;
      // print(canvas.width, "ytru")
    }
  }
}

init();
animate();
