function updateInventory(arr1, arr2) {
    let productNames =  [];

    if (arr1.length === 0) {
        arr2.forEach(elem => {
            arr1.push(elem);
        });
    } 
    else {
        arr1.forEach(elem => {
            productNames.push(elem[1]);
        });

        arr1.forEach(currentItem => {
            arr2.forEach(newItem => {
                if (notOnTheList(productNames, newItem[1])) {
                    arr1.push(newItem);
                } else {
                    if (newItem[1] === currentItem[1]) {
                        currentItem[0] += newItem[0];
                    }
                }
            });
        });
    }

    return arr1.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    });;
}

function notOnTheList(productNames, product) {
    if (productNames.indexOf(product) === -1) {
        productNames.push(product);
        return true;
    } else {
        return false;
    } 
}