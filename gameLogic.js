//From www.w3schools.com/graphics/game_intro.asp
funtion startGame()
{
    myGamePiece = new component(30,30,"blue,10,120);
    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "Consolas", "black", 280,40, "text");
    myGameArea.start();
}

var myGameArea.start()=
{
    canvas : document.createElement("canvas"),
    start : function()
    {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas,document.body.childNodes[0]);
        this.frameNo = 0;
    },
    clear : function()
    {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
}
