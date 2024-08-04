import insertsort from './insertion-sort/insertsort.js';
import mergesort from './merge-sort/mergesort.js';
import { bubblesort1, bubblesort2 } from './bubble-sort/bubblesort.js';
import hornerrule from './horner-rule/hornerrule.js';
import { calculateInversionsInsertion, calculateInversionMerg } from './inversions-count/inversionscount.js';

let arr = [];

const arrSize = 10000;

for (let i = 0; i < arrSize; i++) {
    arr.push(Math.floor(Math.random() * arrSize));
}

//benchmarkSort(insertsort, arr);
//benchmarkSort(mergesort, arr);
//benchmarkSort(bubblesort1, arr);
//benchmarkSort(bubblesort2, arr);
//benchmarkHorner(hornerrule, arr, 0.0001);
//benchmarkSort(calculateInversionsInsertion, arr);

// helpers

function benchmarkSort(func, initial) {
    const arr = [...initial];
    const start = new Date().getTime();

    const result = func(arr);

    console.log(func.name, 'Size:', arr.length, 'Time:', new Date().getTime() - start, 'Result:', result);
}

function benchmarkHorner(func, initial, x) {
    const arr = [...initial];
    const start = new Date().getTime();

    const result = func(arr, x);

    console.log(func.name, 'Size:', arr.length, 'Time:', new Date().getTime() - start, 'Result:', result);
}