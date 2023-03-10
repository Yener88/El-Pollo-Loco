class MovableObject extends DrawableObject {
    speed;
    direction = 1;
    acceleration = 1;
    speedY;
    mustIdle = false;
    mustWalk = false;
    mustJump = false;
    isDead = false;
    isHurt = false;
    bottleThrown = false;
    spawnBoss = false;
    collisionTimer;
    gravityTimer;
    animationTimer;
    movementTimer;

    // gravity function
    applyGravity() {
        this.gravityTimer = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }

    // if movable object is above ground function
    isAboveGround() {
        if (this instanceof Character) {
            return this.y < 150;
        }
        if (this instanceof ThrowableObject) {
            return this.y < 390;
        }
        if (this instanceof Chicken || this instanceof LittleChicken || this instanceof Endboss) {
            return this.y < 700;
        }
    }

    // movements
    moveObjects(speed) {
        this.x -= speed;
    }


    moveCharacter(speed) {
        this.x += speed = 6 * this.direction;
    }

    // colliding function
    isColliding(object) {
        return this.x + this.width > object.x &&
            this.y + this.height > object.y &&
            this.x < object.x &&
            this.y < object.y + object.height;
    }

    // jump on enemy function
    jumpsOnTop(object) {
        return this.y + this.height > object.y &&
            this.y + this.height < object.y + object.height &&
            this.x + this.width > object.x &&
            this.x + this.width < (object.x + object.width + 70);
    }
}