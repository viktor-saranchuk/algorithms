/**
 * Best case: 
 * Average case: 
 * Worst case: 
 */

// this implemetation is taken form description of the algorithm
export function bubblesort1(arr) {
    for (let n = arr.length - 1; n > 0; n--) {
        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    return arr;
}

// this implementation is described in Introduction To Algorithms by T.H. Cormen, C.E. Leiserson, R.L. Rivest, C. Stein
// it is faster than function above, not a lot, but still ...
export function bubblesort2(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            if (arr[j] < arr[j-1]) {
                const temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }
    }

    return arr;
}