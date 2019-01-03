function permAlone(str) { 
    let arrOfChar = str.split("");        
    let permutations = []; 

    generate(arrOfChar.length, arrOfChar);

    function generate(arrayLength, splittedString) {
        if (arrayLength === 1) {
            permutations.push(splittedString.join(""));
        } else {
            for (let i = 0; i < arrayLength - 1; i++) {
                generate(arrayLength - 1, splittedString);
                if (arrayLength % 2) {
                    swap(splittedString, 0, arrayLength - 1);
                } else {
                    swap(splittedString, i, arrayLength - 1);
                }
            }
            generate(arrayLength - 1, splittedString);
        }
    }

    let result = permutations.filter( word => !word.match(/(.)\1+/g) );

    return result.length;
}

function swap(array, prev, next) {
    let temp = array[prev];
    array[prev] = array[next];
    array[next] = temp;
}