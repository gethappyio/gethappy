/**
 * Emits particles
 * @author Adam Gee <adam@adamatronix.com>
 */

import randomInt from "./random.int";
import pointMass from "./point.mass";

module.exports = pointEmitter;

function pointEmitter(options) {

    var p_object = {}; //store options for the point mass

    for (var key in options) {
        if (options.hasOwnProperty(key)) {

            if (typeof options[key] !== "undefined") {
                p_object[key] = options[key]
            }

        }
    }


    this.ctx = options.context;
    this.emitters = options.array;
    this.num = options.num;

    this.width = options.width;
    this.height = options.height;
    this.xPos = options.x;
    this.yPos = options.y;

    this.pointmasses = [];

    var x = randomInt(this.xPos, this.xPos + this.width);
    var y = randomInt(this.yPos, this.yPos + this.height);


    p_object.x = x;
    p_object.y = y;
    p_object.array = this.pointmasses;
    p_object.context = this.ctx;
    p_object.fade = false;
    p_object.gravity = options.gravity;
    p_object.boundaries = true;

    for (var i = 0; i < this.num; i++) {
        p_object.angle = randomInt(0,360);
        p_object.particle = options.particles[Math.floor(randomInt(0,options.particles.length))];

        var pointmass = new pointMass(p_object);

        this.pointmasses.push(pointmass);
    }


}

pointEmitter.prototype.update = function () {

    if (this.pointmasses == 0) {
        //all point masses have expired. Destroy this emitter.
        this.destroy();
    }

    for (var p = 0; p < this.pointmasses.length; p++) {

        this.pointmasses[p].update();

    }



}

pointEmitter.prototype.destroy = function () {
    var loc = this.emitters.indexOf(this);
    if (loc > -1) {
        //exists
        this.emitters.splice(loc, 1);
    }

}
