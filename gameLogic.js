//From www.w3schools.com/graphics/game_intro.asp
function startGame()
{
    myGameArea.start();
    myGamePiece = new component(30,30,"blue",10,120);
    //myGamePiece.gravity = 0.05;
    //myScore = new component("30px", "Consolas", "black", 280,40, "text");
}

var myGameArea=
{
    canvas : document.createElement("canvas"),
    start : function()
    {
        this.canvas.width = 480*2;
        this.canvas.height = 270*2;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea,1);
    },
    clear : function()
    {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y)
{
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function()
    {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    this.newPos = function()
    {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea()
{
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function moveup()
{
    myGamePiece.speedY -= 1;
}

function movedown()
{
    myGamePiece.speedY += 1;
}

function moveleft()
{
    myGamePiece.speedX -= 1;
}

function moveright()
{
    myGamePiece.speedX += 1;
}

var stopSpeed = 0.001;
function stopMoveRight()
{
    while(myGamePiece.speedX > 0)
    {
        myGamePiece.speedX -= stopSpeed;
    }
    myGamePiece.speedX = 0;
}

function stopMoveLeft()
{
    while(myGamePiece.speedX < 0)
    {
        myGamePiece.speedX += stopSpeed;
    }
    myGamePiece.speedX = 0;
}
function stopMoveUp()
{
    while(myGamePiece.speedY < 0)
    {
        myGamePiece.speedY += stopSpeed;
    }
    myGamePiece.speedY = 0;
}

function stopMoveDown()
{
    while(myGamePiece.speedY > 0)
    {
        myGamePiece.speedY -= stopSpeed;
    }
    myGamePiece.speedY = 0;
}


window.addEventListener("keypress", function(event)
{
switch(event.key)
{
    case "ArrowDown":
        movedown();
        break;
    case "ArrowUp":
        moveup();
        break;
    case "ArrowLeft":
        moveleft();
        break;
    case "ArrowRight":
        moveright();
        break;
    default:
        return;
}
}, false);

window.addEventListener("keyup", function(event)
{
    switch(event.key)
    {
        case "ArrowRight":
    //if(myGamePiece.speedX>0)
    //{
        stopMoveRight();
    //}
    break;
        case "ArrowLeft":
    
   // if(myGamePiece.speedX<0)
    //{
        stopMoveLeft();
   // }
   break;
        case "ArrowUp":
    //if(myGamePiece.speedY<0)
    //{
        stopMoveUp();
   // }
   break;
        case "ArrowDown":
    //if(myGamePiece.speedY>0)
    //{
        stopMoveDown();
   //}
   break;
        default:
   return;
    }
    
}, false)

