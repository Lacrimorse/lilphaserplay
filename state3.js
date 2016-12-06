demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){
        game.load.image("button1", "art/bank_job_button.png");
        game.load.image("button2", "art/gun.png");
    },
    create: function(){
        game.stage.backgroundColor = "#aabbcc";
        addAllChangeStateEventListeners();
        
        var button1 = game.add.button(200, 200, "button1", //function(){
            //changeState(null,0);
        //}
                                     null);
        button1.onInputDown.add(this.tint, button1);
        button1.onInputUp.add(this.untint, button1);
        
        var button2 = game.add.button(400, 200, "button2", function(){
            changeState(null, 2);
        });
        button2.onInputDown.add(this.tint, button2);
        button2.onInputUp.add(this.untint, button2);
    },
    update: function(){
        
    },
    
    tint: function(){
        this.tint = 0x121212;
    },
    untint: function(){
        this.tint = 0xffffff;
    }
};