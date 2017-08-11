function moveBall(){
    for(var i=1;i=Math.abs(ball.directionX);i++){
        for(var j=1;j=Math.abs(ball.directionY);j++){
            ball.move(i, j);
            if(ball.collideObjects()){
                ball.bounce;
                ball.directionY = -ball.ballDirectionY;
            } else if (){

            }





            ball.render()
            ball.centerY -= j;
            }
        ball.render();
    }
}
