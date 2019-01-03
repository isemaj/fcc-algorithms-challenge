function pairwise(arr, arg) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] + arr[i] === arg) {
                if (j !== i) {
                    result += j + i;
                    delete arr[j];
                    delete arr[i];
                }
            }
        }
    }
    return result;
}