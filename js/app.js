// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = '../images/enemy-bug.png';
    this.initX=x; //记录一开始的位置
    this.initY=y;
    this.x=x;
    this.y=y;
    this.speed=speed;
    this.resetXY=false;//记录此虫是否已经被重新设置了坐标
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt*this.speed;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*碰撞检测方法，当敌人与玩家x轴与y轴距离同时小于40，则判定为碰撞状态*/
Enemy.prototype.checkCollision = function (player) {
    if(Math.abs(this.y-player.y)<70&&Math.abs(this.x-player.x)<70)
    {
        return true;
    }
    else
    {
        return false;
    }
}

Enemy.prototype.init=function () {
    var obj=this;
    obj.resetXY=true;
    console.log("on my turn");
    setTimeout(function () {
        obj.x=obj.initX;
        obj.y=obj.initY;
        obj.resetXY=false;
    },2000);
 //   console.log("i am at"+obj.x+","+obj.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y) {
    this.sprite= '../images/char-boy.png';
    this.x=x;
    this.y=y;
}


Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput=function (movement) {
    switch(movement){
        case 'left':
            this.x=this.x-101>=0?this.x-101:this.x;
        break;
        case 'right':
            this.x=this.x+101<=404?this.x+101:this.x;
        break;
        case 'up':
            this.y=this.y-83>=0?this.y-83:this.y;
          //  console.log("i have moved to "+this.y);
        break;
        case 'down':
            this.y=this.y+83<=415?this.y+83:this.y;
        break;
    }
}

Player.prototype.init=function initPlayer() {
    this.x=303;
    this.y=415;
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player=new Player(303,415);//101*3;
var allEnemies=[new Enemy(0,60,50)
,new Enemy(0,60,150),new Enemy(0,140,100),
new Enemy(0,140,200),new Enemy(0,230,100),new Enemy(0,230,50)];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
