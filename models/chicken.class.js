class Chicken extends MovableObject {
    y = 380;
    height = 100;
    width = 100;
    world;
    kickOutChickens = false;
    IMAGES_WALKING = [
        'img/chicken/cw1.png',
        'img/chicken/cw2.png',
        'img/chicken/cw3.png'
    ];

    IMAGE_DEAD = ['img/chicken/cdead.png'];


    constructor(x) {
        super();
        this.loadImage('img/chicken/cw1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_DEAD);
        this.x = x;
        this.mustWalk = true;
    }

    // animation from the chicken function
    animate() {
        this.animationTimer = setInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGE_DEAD);
            }
            else if (this.mustWalk) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 120);
    }

    // chicken startpoint function
    startMoving() {
        this.movementTimer = setInterval(() => {
            if (this.isDead) {
                this.moveObjects(0);
            }
            else if (this.mustWalk) {
                this.moveObjects(1.5);
            }
        }, 1000 / 60);
    }

    // if kicked out function
    kickedOut() {
        if (!this.kickOutChickens) {
            this.kickOutChickens = true;
            this.mustWalk = false;
            this.applyGravity();
            this.speedY = 18;
            setInterval(() => {
                this.x += 7;
            }, 1000 / 60);
            setTimeout(() => {
                this.removeChicken()
            }, 1500);
        }
    }

    // remove chicken function
    removeChicken() {
        let i = this.world.level.chicken.indexOf(this);
        this.world.level.chicken.splice(i, 1);
    }

    // start chicken function
    startChicken() {
        this.animate();
        this.startMoving();
    }

    // stop chicken function
    stopChicken() {
        clearInterval(this.animationTimer);
        clearInterval(this.movementTimer);
    }
}