/**
 * Particle mass
 * @author Adam Gee <adam@adamatronix.com>
 */

import randomInt from "./random.int";

module.exports = pointMass;

// Drag variables
var Cd = 0.47; // Dimensionless
var rho = 101.22; // kg / m^3 1.22 is air drag
var A = Math.PI * 8 * 8 / (10000);
var frameRate = 1/20;
var width = window.innerWidth;
var height = window.innerHeight;

function pointMass(options) {
    var velX, velY, posX, posY, res;

    if (typeof options.gravity === "undefined") {
        this.ag = 9.81; //9.81 earth's gravity
    } else {
        this.ag = options.gravity;
    }

    if (typeof options.velx === "undefined") {
        velX = randomInt(-6, 6);
    } else {
        velX = options.velx;
        if (typeof velX === "object") {
            //if there it is an object with two values
            velX = randomInt(velX.min, velX.max);
        }
    }

    if (typeof options.vely === "undefined") {
        velY = randomInt(-6, 6);
    } else {
        velY = options.vely;

        if (typeof velY === "object") {
            //if there it is an object with two values
            velY = randomInt(velY.min, velY.max);
        }
    }

    if (typeof options.fade !== "undefined") {
        this.fade = options.fade;
    } else {
        this.fade = false;
    }

    if (typeof options.boundaries !== "undefined") {
        this.boundaries = options.boundaries;
    } else {
        this.boundaries = true;
    }

    if (typeof options.radius !== "undefined") {
        this.radius = options.radius;
    } else {
        this.radius = 8;
    }

    if (typeof options.colour !== "undefined") {
        this.colour = options.colour;
    } else {
        this.colour = [255, 75, 40];
    }

    if (typeof options.life !== "undefined") {
        this.life = randomInt(options.life.min, options.life.max); // in ms;
    } else {
        this.life = randomInt(2000, 5000); // in ms
    }

    this.particle = options.particle;
    this.angle = options.angle;

    this.ctx = options.context;

    posX = options.x;
    posY = options.y;
    res = -0.7;

    this.position = { x: posX, y: posY };
    this.velocity = { x: velX, y: velY };
    this.mass = 1; //kg
    this.restitution = res;


    this.pointmasses = options.array;


    this.creation_time = Date.now();

}

pointMass.prototype.update = function () {

    // Drag force: Fd = -1/2 * Cd * A * rho * v * v
    var Fx = -0.5 * Cd * A * rho * this.velocity.x * this.velocity.x * this.velocity.x / Math.abs(this.velocity.x);
    var Fy = -0.5 * Cd * A * rho * this.velocity.y * this.velocity.y * this.velocity.y / Math.abs(this.velocity.y);

    Fx = (isNaN(Fx) ? 0 : Fx);
    Fy = (isNaN(Fy) ? 0 : Fy);

    // Calculate acceleration ( F = ma )
    var ax = Fx / this.mass;
    var ay = this.ag + (Fy / this.mass);

    this.velocity.x += ax * frameRate;
    this.velocity.y += ay * frameRate;

    // Integrate to get position
    this.position.x += this.velocity.x * frameRate * 100;
    this.position.y += this.velocity.y * frameRate * 100;




    /**
     * Collision
     */
    if (this.boundaries === true) {


        if (this.position.y < this.radius) {
            this.velocity.y *= this.restitution;
            this.position.y = this.radius;

        }
        if (this.position.y > height - this.radius) {
            this.velocity.y *= this.restitution;
            this.position.y = height - this.radius;
        }
        if (this.position.x > width - this.radius) {
            this.velocity.x *= this.restitution;
            this.position.x = width - this.radius;
        }
        if (this.position.x < this.radius) {
            this.velocity.x *= this.restitution;
            this.position.x = this.radius;
        }
    }



    //calculate the alpha based on the life
    var curTime = Date.now();
    var curLife = curTime - this.creation_time;

    this.alpha = 1 - (curLife / this.life);

    if (this.alpha < 0) {
        this.destroy();
    }


    //draw the ball with the new position
    this.drawImage();

}


pointMass.prototype.draw = function () {

    if(this.fade) {
        this.ctx.fillStyle = "rgba(" + this.colour[0] + "," + this.colour[1] + "," + this.colour[2] + "," + this.alpha + ")";
    } else {
        this.ctx.fillStyle = "rgba(" + this.colour[0] + "," + this.colour[1] + "," + this.colour[2] + ", 1)";
    }

    this.ctx.beginPath();
    this.ctx.rect(this.position.x, this.position.y, this.radius, this.radius);
    this.ctx.closePath();
    this.ctx.fill();

}

pointMass.prototype.drawImage = function () {
    var self = this;
    var img = new Image();
    img.src = this.particle;  
    self.ctx.drawImage(img, self.position.x, self.position.y, img.width * 0.3, img.height * 0.3);
    
}

pointMass.prototype.destroy = function () {
    var loc = this.pointmasses.indexOf(this);
    if (loc > -1) {
        //exists
        this.pointmasses.splice(loc, 1);
    }

}
