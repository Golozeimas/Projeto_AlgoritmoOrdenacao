export function insertionSort(arr) {
    const steps = [];
    const tempArr = [...arr];

    for (let i = 1; i < tempArr.length; i++) {
        let current = tempArr[i];
        let j = i - 1;
        
        while (j >= 0) {
            // Document the comparison
            steps.push({ type: "compare", indices: [j, j + 1] });
            
            if (tempArr[j] > current) {
                // If it's greater, document the overwrite/swap shifting the element
                steps.push({ type: "swap", indices: [j, j + 1] });
                tempArr[j + 1] = tempArr[j];
                j--;
            } else {
                break;
            }
        }
        tempArr[j + 1] = current;
    }
    return steps;
}
