export default function hornerrule(arr, x) {
    let p = 0;
    for (let i = 0; i < arr.length; i++) {
        p = arr[i] + x * p;
    }
    return p;
}