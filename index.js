document.addEventListener('DOMContentLoaded',()=>{

    let ball = document.getElementById("ball");  //targeting ball element
    let table = document.getElementById("ping-pong-table");  //targeting table element
    let paddle = document.getElementById("paddle");  //targeting paddle element

    // distance of top & left of the ball from ping pong table
    let ballX = 50;
    let ballY = 50;

    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;
    
    let dx = 2;  // displacement in x direction
    let dy = 2;  // displacement in y direction
    let Py = 5;  // displacement in x direction of paddle
    setInterval(function exec(){
        // ball hits paddle
        if(ballY >= Py && ballY <= Py+paddle.offsetHeight && ballX <= paddle.style.left+paddle.offsetWidth){
            dx*=-1;
        }
        
        ballX += dx;        
        ball.style.left = `${ballX}px`;
        if(ballX > table.offsetWidth-ball.offsetWidth || ballX < 0) dx*=-1;  //CHANGING DIRECTIONS
        
        ballY += dy;        
        ball.style.top = `${ballY}px`;
        if(ballY > table.offsetHeight-ball.offsetHeight || ballY <= 0) dy*=-1;  //CHANGING DIRECTION

    },5);



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
});