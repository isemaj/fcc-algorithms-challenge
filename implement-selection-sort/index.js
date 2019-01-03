function selectionSort(array) {
    for (let j = 0; j < array.length - 1; j++) {
        let iMin = j;

        for ( let i = j + 1; i < array.length; i++) {
            if (array[i] < array[iMin]) {
                iMin = i;
            }
        }

        if (iMin !== j) {
            [array[j], array[iMin]] = [array[iMin], array[j]];
        }
    }

    return array;
}
  
  // test array:
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));