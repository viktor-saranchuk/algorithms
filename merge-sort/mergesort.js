/**
 * Best case: O(n*log(n))
 * Average case: O(n*log(n))
 * Worst case: O(n*log(n)) 
 */
export default function mergesort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Argument is not an Array');
    }

    merge(arr);

    return arr;
}

const merge = (arr) => {
    if (arr.length < 2) {
        return;
    }

    const middle = Math.floor(arr.length / 2);

    const arr1 = [];
    for (let i = 0; i < middle; i++) {
        arr1[i] = arr[i];
    }
    merge(arr1);
    
    const arr2 = [];
    for (let i = middle; i < arr.length; i++) {
        arr2[i-middle] = arr[i];
    }

    merge(arr2);

    let i = 0, j = 0, k = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            i++;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }
    
    while (i < arr1.length) {
        arr[k] = arr1[i];
        i++;
        k++;
    }

    while (j < arr2.length) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}