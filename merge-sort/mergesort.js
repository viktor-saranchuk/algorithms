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
}

const merge = (arr) => {
    if (arr.length < 2) {
        return;
    }

    const middle = Math.floor(arr.length / 2);

    const arr1 = arr.slice(0, middle); // replaced for loop to copy array from 0 to middle
    merge(arr1);
    const arr2 = arr.slice(middle, arr.length); // replaced for loop to copy array from middle till the last one element
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