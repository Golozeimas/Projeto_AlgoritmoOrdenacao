// Export all algorithms through a central index mapping

import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';
import { mergeSort } from './mergeSort.js';
import { quickSort } from './quickSort.js';
import { selectionSort } from './selectionSort.js';

export const algorithms = {
    bubble: bubbleSort,
    insertion: insertionSort,
    merge: mergeSort,
    quick: quickSort,
    selection: selectionSort
};
