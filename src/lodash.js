const MAX = Math.pow(2, 32) - 1;

/**
*/
function chunck(arr, size) {
    size =  Math.min(size, MAX);
    const length = arr.length;

    if (length === 0 || size < 1) {
        return []
    }

    const ceilNumber =  Math.ceil(length / size);
    const result  = new Array(ceilNumber);
    for (let i = 0; i <  ceilNumber;  i++) {
        const start = i * size;
        const end = Math.min(length, start + size);
        result[i]  = arr.slice(start, end);
    }

    return result;
}

function compact(arr) {
    let result = [];
    const length = !arr ? 0 : arr.length;
    
    for (let i = 0; i < length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

module.exports = {
    chunck,
    compact
}