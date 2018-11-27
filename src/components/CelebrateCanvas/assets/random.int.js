module.exports = randomInt;

/**
 * This callback type is called `swipeCallback`.
 *
 * @callback swipeCallback
 * @param {string} direction The direction of the swipe ie. left or right.
 * @param {string} vertical The vertical direction of the swipe ie. top or bottom.
 */

/**
 * @param  {string} label Name of gesture.
 * @param  {swipeCallback} callback To be fired when swipe is detected.
 * @param  {boolean} debug Toggle debugging information.
 */
function randomInt(min,max) {
    return Math.random() * (max - min) + min;
};
