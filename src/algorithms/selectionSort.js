export function selectionSort(arr) {
    const steps = [];
    const tempArr = [...arr];

    for (let i = 0; i < tempArr.length - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < tempArr.length; j++) {
            // Document the comparison
            steps.push({ type: "compare", indices: [minIndex, j] });
            
            if (tempArr[j] < tempArr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            // Document the final swap for this pass
            steps.push({ type: "swap", indices: [i, minIndex] });
            
            // Perform the actual swap
            const temp = tempArr[i];
            tempArr[i] = tempArr[minIndex];
            tempArr[minIndex] = temp;
        }
    }
    return steps;
}
