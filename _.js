const _ = {
    clamp(num, lo, hi) {
        const lower = Math.max(num, lo)
        const upper = Math.min(num, hi);
        if (lower == upper) {
            return num;
        } else if (num > hi) {
            return hi
        } else {
            return lo
        }
    }
}




// Do not write or modify code below this line.
module.exports = _;