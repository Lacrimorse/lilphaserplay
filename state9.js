var highscoreText = [], highscore = [10,9,8,7,6,5,4,3,2,1], firebaseRef, snapval;

demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){
        game.load.image("button1", "art/bank_job_button.png");
        game.load.image("button2", "art/gun.png");
    },
    create: function(){
        addAllChangeStateEventListeners();
        //special firebase link to our database as a parameter
        //firebaseRef = new Firebase("https://phase-demo-game.firebaseio.com/");
        
        //this is not only for convenience as it seems, it is somehow essential, maybe not or maybe less than snapval
        firebaseRef = firebase.database().ref();
        
        //the ranking numbers
        for (var i = 1; i<11; i++) {
            game.add.text(300, i*55, i + ". ", {fontSize: "35px"}).anchor.setTo(1,0);
        }
        
        //the highscores
        for (var i = 0; i<10; i++) {
            //what is highscoreText good for anyway
            highscoreText[i] = game.add.text(300, (i+1)*55, highscore[i], {fontSize: "35px"});
        }
        
        var updateHighscore = this.updateHighscore;
        
        firebaseRef.on("value", function(snapshot) {
            snapval = snapshot.val();
            updateHighscore(snapval.highscore);
        });
        
        //buttons
        game.add.button(800, 400, "button1", function() {
            var randomScore = Math.round(Math.random()*100);
            snapval.highscore.push(randomScore);
            //sorting and cutting first ten
            snapval.highscore = snapval.highscore.sort( function(a,b) {
                return b-a;
                //slice includes the first parameter, but excludes the second one
            }).slice(0, 10);
            firebaseRef.set(snapval);
        });
        game.add.button(800, 550, "button2", function() {
            firebaseRef.set({highscore: [0,0,0,0,0,0,0,0,0,0]});
        });
    },
    update: function(){},
    
    updateHighscore: function(highscore) {
        for (var i = 0; i<10; i++) {
            highscoreText[i].text = highscore[i];
        }
    }
};
