function quickSort(array) {

    function sort(array, left, right) {
        if (left < right) {
            let partitionIndex = parition(array, left, right);
            console.log(`Left: ${left}, Right: ${right}, PartitionIndex: ${partitionIndex}`);
            if ( left < partitionIndex - 1) {
                sort(array, left, partitionIndex - 1);
            } 
            if (right > partitionIndex) {
                sort(array, partitionIndex, right);
            }

        }
    }

    function parition(array, left, right) {
        let pivot = array[Math.floor((left + right) / 2)];

        while (left <= right) {
            while (array[left] < pivot) {
                left++;
            }

            while (array[right] > pivot) {
                right--;
            }

            if (left <= right) {
                [array[left], array[right]] = [array[right], array[left]];
                left++;
                right--;
            }
        }
        return left;
    }

    sort(array, 0, array.length - 1);

    return array;
}
  