//From www.w3schools.com/graphics/game_intro.asp
function startGame()
{
    myGameArea.start();
    myMusic = new music("music.m4a");
    myMusic.play();
    myGamePiece = new component(30,30,"blue",10,120);
    //myGamePiece.gravity = 0.05;
    //myScore = new component("30px", "Consolas", "black", 280,40, "text");

    myObstacle = new component(10, 200, "green", 300, 120);
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
        this.interval = setInterval(updateGameArea,20);
        window.addEventListener("keydown", function(event)
                {
                    myGameArea.key = event.keyCode;
                },false)
        window.addEventListener("keyup", function(event)
                {
                    myGameArea.key = false;
                },false)
        
    },
    clear : function()
    {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    },
    
    stop : function()
    {
        clearInterval(this.interval);
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
        if(myGameArea.key && myGameArea.key == 37)
        {
            moveleft();
        }
        if(myGameArea.key && myGameArea.key == 39)
        {
            moveright();
        }
        if(myGameArea.key && myGameArea.key == 38)
        {
            moveup();
        }
        if(myGameArea.key && myGameArea.key == 40)
        {
            movedown();
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }

    this.crashWith = function(otherObj)
    {
        var myleft = this.x;
        var myright = this.x + this.width;
        var mytop = this.y;
        var mybottom = this.y + this.height;
        
        var otherleft = otherObj.x;
        var otherright = otherObj.x + otherObj.width;
        var othertop = otherObj.y;
        var otherbottom = otherObj.y + otherObj.height;
        var crash = true;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherleft))
        {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea()
{
    if (myGamePiece.crashWith(myObstacle))
    {
        myGameArea.stop();
    }
    else
    {
        myGameArea.clear();
        myGamePiece.newPos();
        myGamePiece.update();
        myObstacle.update();
    }
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



function music(src)
{
    this.music = document.createElement("audio");
    this.music.src = src;
    this.music.setAttribute("preload","auto");
    this.music.setAttribute("controls","none");
    this.music.style.display = "none";
    document.body.appendChild(this.music);
    this.play = function()
    {
        this.music.play();
    }
    this.stop = function()
    {
        this.music.pause();
    }
}
