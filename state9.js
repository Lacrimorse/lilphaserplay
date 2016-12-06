var highscoreText = [], highscore = [10,9,8,7,6,5,4,3,2,1];

demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        addAllChangeStateEventListeners();
        
        //the ranking numbers
        for (var i = 1; i<11; i++) {
            game.add.text(300, i*55, i + ". ", {fontSize: "35px"}).anchor.setTo(1,0);
        }
        
        //the highscores
        for (var i = 0; i<10; i++) {
            //what is highscoreText good for anyway
            highscoreText[i] = game.add.text(300, (i+1)*55, highscore[i], {fontSize: "35px"});
        }
    },
    update: function(){}
};