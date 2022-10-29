// var canvas = document.querySelector('canvas')

// canvas.width = window.screen.width
// canvas.height = window.screen.height

// var ctx = canvas.getContext('2d')

// // moving rectangle
// // ctx.fillRect(0,290,100,100)
// // var x = 0;
// // window.requestAnimationFrame(function loop() {
// //     x+= 1
// //     ctx.fillStyle = "red"
// //     ctx.clearRect(0,0, canvas.width, canvas.height)
// // ctx.fillRect(x,0,100,100)
// // window.requestAnimationFrame(loop)

// // })


// class Root {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//         this.speedX=Math.random() * 4-2
//         this.speedY=Math.random() * 0
//         this.maxSize = Math.random() * 100 + 5;
//         this.size = Math.random() * 10 +2 ;
//     }
//     update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         this.size += 0.1;
//         if (this.size < this.maxSize){
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.size, 0 , Math.PI *2);
//             ctx.fillStyle= '#E854E6'
//             ctx.fill()
//             ctx.stroke()
//             requestAnimationFrame(this.update.bind(this))

//         }
//     }
// }


// // window.addEventListener('mousemove', function(e){
// //     const root = new Root (e.x, e.y);
// //     root.update();
// // })


// const root = new Root (400, 400);
// root.update();


// let canvas = document.querySelector('canvas');
// let c = canvas.getContext('2d');

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// const ch = c.canvas.height;
// const cw = c.canvas.width;

// let h = 0;
// let increment = 1;
// let flakes = [];
// let snowAmount = 100;
// let randomInterval = 1000;
// let index = 0;


// function drawSnow(x, y, size){
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI*2);
//     c.fillStyle = '#E854E6';
//     c.fill();
//     c.beginPath();
//     c.arc(x, y, 2, 0, Math.PI*2);
//     c.fillStyle = '#ffffff';
//     c.fill();
// }

// function eraseSnow(x, y){
//     c.beginPath();
//     c.arc(x, y - increment, 6, 0, Math.PI*2);
//     c.fillStyle = '#E854E6';
//     c.fill();
// }

// function setIncrements(){
//     let level = [];
//     let randomX = [];
//     flakes.forEach((snow, i) => {
//         if(snow === false){
//             level[i] = 0;
//             randomX[i] = Math.floor(Math.random() * (cw - 0 + 1)) + 0;
//             // randomSize[i] = Math.floor(Math.random() * (12));
//             flakes[i] = 'snow'+i;
//             flakes[i] = setInterval(() => {
//                 // if the snow is out the frame,erase it
//                 if(level[i] < ch + 10){
//                     eraseSnow(randomX[i], level[i]);
//                     drawSnow(randomX[i], level[i]);
//                     level[i]++;
//                 } else {
//                     clearInterval(flakes[i]);
//                     flakes.splice(i, 1, false);
//                     flakes[i] = false;
//                     setIncrements();
//                 }
//             }, 10);
//         }
//     });
// }

// function setSnow(){  
//     let timer = setInterval(() => {
//         if(index < 100){
//             flakes[index] = false;
//             index++; 
//             setIncrements();
//         } else {
//             clearInterval(timer);
//             index = 0;
//         }
        
//     }, randomInterval);
// }




let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ch = c.canvas.height;
const cw = c.canvas.width;

function Paint(x,y, dy, radius) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, 30, 0, Math.PI*2);
        c.fillStyle = '#E854E6';
        c.fill();


        c.beginPath();
        c.arc(this.x, this.y, 2, 0, Math.PI*2);
        c.fillStyle = '#ffffff';
        c.fill();

    }

    this.update = function() {
        this.y = -this.y;
        if(this.y<0){
            console.log('hey')
        }



    }
}
var paint = new Paint(500,599, 4 , 5, 6)
paint.draw()



function animate() {
    requestAnimationFrame(animate);
    paint.draw()
}
animate()




setSnow();