const _ = {
    clamp(num, lo, hi) {
        let lower = Math.max(num, lo)
        let clamp = Math.min(lower, hi);
        return clamp
        // if (lower == upper) {
        //     return num;
        // } else if (num > hi) {
        //     return hi
        // } else {
        //     return lo
        // }
    },
    inRange(num, lo, hi) {
        if (hi == null) {
            if (num < lo) {
                return true
            } else {
                return false
            }
        }
        if (lo > hi) {
            temp = hi
            hi = lo
            lo = temp
        }
        if (num > lo && num < hi) {
            return true
        } else if (num == lo) {
            return true
        } else {
            return false
        }
    },
    words(word) {
        return word.split(' ')
    },

    pad(word, padding) {
        if (word.length >= padding) {
            return word
        }
        if (word.length < padding) {
            paddedstring = '';
            padstart = Math.floor((padding - word.length) / 2);
            padfinnish = padding - word.length - padstart;
            for (let i = 0; i < padstart; i++) {
                paddedstring += ' ';
            }
            paddedstring += word;
            for (let i = 0; i < padfinnish; i++) {
                paddedstring += ' '
            }
            return paddedstring;
        }
    },

    has(obj, val) {
        let hasValue = obj[val];
        if (hasValue != undefined) {
            return true
        } else {
            return false;
        }
    },

    invert(obj) {
        let invertedObj = {};
        for (let key in obj) {
            let originalValue = obj[key]
            invertedObj = { originalValue: key }
        }
        return invertedObj
    },

    findKey(object, predicate) {
        for (let key in object) {
            let value = object[key]
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            };
        };
        undefined
        return undefined
    },

    drop(arr, n) {
        if (n === undefined) {
            n = 1;
        }
        let droppedArray = arr.slice(n, arr.length);
        return droppedArray;
    },

    dropWhile(arr, predicate) {
        const cb = (element, index) => { return !predicate(element, index, arr) };
        let dropNumber = arr.findIndex(cb);
        let droppedArray = this.drop(arr, dropNumber);
        return droppedArray;
    }

}


// Do not write or modify code below this line.
module.exports = _;