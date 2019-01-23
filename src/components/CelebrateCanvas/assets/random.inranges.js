import randomInt from "./random.int";

module.exports = randomInRanges;

function randomInRanges(ranges) {

    let randomNums = [];

    ranges.map(range => {
        randomNums.push(randomInt(range[0],range[1]));
    });

    let numId = Math.floor(randomInt(0, randomNums.length));

    return randomNums[numId];
};
