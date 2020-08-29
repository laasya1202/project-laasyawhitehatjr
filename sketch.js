var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  
  ball1 = loadImage("ball.png");
  paddle1 = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  paddle = createSprite(370, 200, 10, 100);
  ball = createSprite(30, 200, 10, 10);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  paddle.addImage("PADDLE", paddle1);
  ball.addImage("BALL", ball1);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;
   
  paddle.velocityY= 0;
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  
  ball.bounceOff(edges[3]); 
  
  ball.bounceOff(paddle, randomVelocity);
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);


  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  { 
    paddle.y=paddle.y-20;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {paddle.y=paddle.y+20;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  
  ball.velocityY=random(-9,9);
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}
