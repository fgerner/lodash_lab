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
    },
    inRange(num, lo, hi) {
        if (hi == null) {
            if (num < lo) {
                return true
            } else {
                return false
            }
        }
        if(lo > hi){
            temp = hi
            hi = lo
            lo = temp
        }
        if(num > lo && num < hi){
            return true
        } else if (num == lo) {
            return true
        } else {
            return false
        }
    }
}




// Do not write or modify code below this line.
module.exports = _;