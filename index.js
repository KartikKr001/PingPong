document.addEventListener('DOMContentLoaded',()=>{

    let ball = document.getElementById("ball");  //targeting ball element
    let table = document.getElementById("ping-pong-table");  //targeting table element
    let paddle = document.getElementById("paddle");  //targeting paddle element
    let paddleAI = document.getElementById("paddleAI");  //targeting paddle element

    // distance of top & left of the ball from ping pong table
    let ballX = 10;
    let ballY = 60;

    let dx = 2;  // displacement in x direction
    let dy = 2;  // displacement in y direction
    let Py = (table.offsetHeight - table.offsetTop)/2;  // displacement in y direction of paddle
    let PyA = (table.offsetHeight - table.offsetTop)/2;  // displacement in y direction of paddleAI

    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;
    paddle.style.top = `${Py}px`;
    paddleAI.style.top = `${PyA}px`;
    
    setInterval(function exec(){
        // ball hits paddle
        if(ballY >= Py && ballY <= Py+paddle.offsetHeight && ballX <= paddle.offsetLeft+paddle.offsetWidth){
            dx*=-1;
            addGlow(paddle);
        }
        if(ballY >= PyA && ballY <= PyA+paddleAI.offsetHeight && ballX >= paddleAI.offsetLeft-20){
            dx*=-1;
            addGlow(paddleAI);
        }
        

        ballX += dx;        
        ball.style.left = `${ballX}px`;
        if(ballX >= table.offsetWidth-ball.offsetWidth-10 || ballX < 0){  //CHANGING DIRECTIONS
            dx*=-1;
        }
        
        ballY += dy;        
        ball.style.top = `${ballY}px`;
        if(ballY > table.offsetHeight-ball.offsetHeight-10 || ballY <= 0) dy*=-1;  //CHANGING DIRECTION

    });

    function addGlow(paddle) {
        paddle.classList.add('glow');
        setTimeout(() => {
            paddle.classList.remove('glow');
        }, 300); // Remove glow after 300 milliseconds
    }
    

    document.addEventListener('keydown',(event)=>{
        event.preventDefault(); //prevents default event behaviour , for unwantesd scrolling up-down of page
        if(event.key == 'ArrowUp'){
            Py = Math.max(0,Py-40);
            paddle.style.top = `${Py}px`
        }
        else if(event.key == 'ArrowDown'){
            Py = Math.min(table.offsetHeight - paddle.offsetHeight,Py+40);
            paddle.style.top = `${Py}px`
        }
    })

    document.addEventListener('mousemove', (event) => {
        tableDistFromLeft = table.offsetLeft;
        mouseDistFromLeft = event.clientX;
        paddleDistFromLeft = paddle.offsetLeft;
        
        tableDistFromTop = table.offsetTop;
        mouseDistFromTop = event.clientY;
        paddleDistFromLeft = paddle.offsetTop;

        if(mouseDistFromTop <= table.offsetHeight+tableDistFromTop-paddle.offsetHeight-10 && mouseDistFromTop >= tableDistFromTop+10){
            Py = mouseDistFromTop-tableDistFromTop;
            paddle.style.top = `${Py}px`;
        }

    });
    setInterval(function moveAI(){
        if(ballX >= table.offsetWidth/2){
            PyA = Math.min(ballY,table.offsetHeight-paddleAI.offsetHeight-10);
            paddleAI.style.top = `${PyA}px`;
        }
    },2);
});