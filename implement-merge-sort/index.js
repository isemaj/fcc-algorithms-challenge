function mergeSort(array) {
    let left = [];
    let right = [];

    let middle = Math.floor(array.length /2);

    if (array.length === 1) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        if (i < middle) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    mergeSort(left);
    mergeSort(right);
    merge(left, right, array);

    return  array;
}

function merge(left, right, array) {
    let index = 0;

    while (left.length !== 0 && right.length !== 0) {
        if (left[0] <= right[0]) {
            array[index++] = left.shift();
        } else {
            array[index++] = right.shift();
        }
    }

    while (left.length !== 0) {
        array[index++] = left.shift();
    }
    
    while (right.length !== 0) {
        array[index++] = right.shift();
    }
}