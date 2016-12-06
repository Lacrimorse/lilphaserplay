var text;

demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = 0x123456;
        addAllChangeStateEventListeners();
        
        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        
        this.spellOutText(100, 100, 800, 20, text, 35, "Abril Fatface", 0xabcdef);
    },
    update: function(){},
    
    spellOutText: function (x, y, width, speed, text, fontSize, font, fill) {
        var textToSpellOut = game.add.text(x, y, "", {fontSize: fontSize + "px", font: font, fill: fill});
        //invisible text for checking something, his own custom trick, i don't get it
        var invisText = game.add.text(0, 0, "", {fontSize: fontSize + "px", font: font});
        invisText.alpha = 0.25;
        
        var addingLoop = game.time.events.loop(speed, addChar);
        var index = 0;
        //
        function addChar() {
            textToSpellOut.text += text[index];
            invisText.text += text[index];
            
            //takes care of width
            if (invisText.width > width && text[index] == " ") {
                textToSpellOut.text += "\n";
                invisText.text = "";
            }
            //ends the loop
            if (index >= text.length -1) {
                game.time.events.remove(addingLoop);
            }
            
            index++;
        }
    }
}
        