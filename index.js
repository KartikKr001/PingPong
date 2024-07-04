document.addEventListener('DOMContentLoaded',()=>{

    let ball = document.getElementById("ball");  //targeting ball element
    let table = document.getElementById("ping-pong-table");  //targeting table element

    // distance of top & left of the ball from ping pong table
    let ballX = 50;
    let ballY = 50;

    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;
    
    let dx = 2;  // displacement in x direction
    let dy = 2;  // displacement in y direction
    setInterval(function exec(){
        ballX += dx;        
        ball.style.left = `${ballX}px`;
        if(ballX > table.offsetWidth-ball.offsetWidth || ballX < 0) dx*=-1;  //CHANGING DIRECTIONS
        
        ballY += dy;        
        ball.style.top = `${ballY}px`;
        if(ballY > table.offsetHeight-ball.offsetHeight || ballY <= 0) dy*=-1;  //CHANGING DIRECTIONS
    },5);

});