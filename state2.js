var gun, bullets, someBullet, enemies, nextFireTime = 0, fireRate = 200;

demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){
        game.load.image("gun", "art/gun.png");
        game.load.image("bullet", "art/bullet.png");
        game.load.image("enemy", "art/bank_job_button.png");
    },
    create: function(){
        game.stage.backgroundColor = "#12efab";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        addAllChangeStateEventListeners();
                    
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(100, "bullet");
        bullets.setAll("checkWorldBounds", true);
        bullets.setAll("outOfBoundsKill", true);
        
        gun = game.add.sprite(600, 400, "gun");
        gun.anchor.setTo(0.5, 0.5);
        
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;
        for (var i = 0; i < 36; i++){
            enemies.create(i*40+10,i*5+10, "enemy");
        }
        enemies.setAll("scale.x", 0.3);
        enemies.setAll("scale.y", 0.3);
    },
    update: function(){
        gun.rotation = game.physics.arcade.angleToPointer(gun);
        if (game.input.activePointer.isDown) {
            //this? why
            this.fire();
        }
        game.physics.arcade.overlap(bullets, enemies, this.hitEnemy);
    },
    fire: function(){
        //game.time.now is how much time has passed since the start of the game in miliseconds
        if (game.time.now > nextFireTime) {
            //each time we fire, we set the next time we fire
            nextFireTime = game.time.now + fireRate;
            var someBullet = bullets.getFirstDead();
            someBullet.reset(gun.x, gun.y);

            game.physics.arcade.moveToPointer(someBullet, 200);
            someBullet.rotation = game.physics.arcade.angleToPointer(someBullet);
        }
    },
    hitEnemy: function(a,b){
        a.kill();
        b.kill();
    }
};
