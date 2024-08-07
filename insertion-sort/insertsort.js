/**
 * Best case: O(n)
 * Average case: O(n^2)
 * Worst case: O(n^2) 
 */
export default function insertsort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Argument is not an Array');
    }
    
    insert(arr);

    return arr;
}

const insert = (arr) => {
    if (arr.length < 2) {
        return;
    }
    
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;

        while (current < arr[j] && j > -1) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
}