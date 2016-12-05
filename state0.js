var demo = {};
var lilboy, speed = 4;
//window.width doesn't work
//var centerX = window.width / 2, centerY = window.height / 2;
demo.state0 = function(){};
demo.state0.prototype = {
    
    preload: function(){
        game.load.image("menu_background", "art/menu_background.png");
        game.load.image("lilboy", "art/bank_job_button.png");
    },
    
    create: function(){
        game.stage.backgroundColor = "#eeff22";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //why does this go here instead of update when it is a listener
        addAllChangeStateEventListeners();
        //menuBackground = game.add.image("menu_background");
        //menuBackground.width = window.width;
        //menuBackground.height = window.height;
        lilboy = game.add.sprite(600, 400, "lilboy");
        lilboy.anchor.setTo(0.5, 0.5);
    },
    
    update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            lilboy.x += speed;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            lilboy.x -= speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            lilboy.y += speed;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            lilboy.y -= speed;
        }
    }
};

//there has to be the first argument for some reason 
function changeState (i, stateNum) {
    game.state.start("state" + stateNum)
}

//this is a concrete example that is then generalized: 
//game.input.keyboard.addKey(Phaser.Keyboard.ZERO).onDown.add(changeState, null, null, 0);

function addKeyCallback(key, aFunction, someArguments) {
    game.input.keyboard.addKey(key).onDown.add(aFunction, null, null, someArguments);
}

function addAllChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}