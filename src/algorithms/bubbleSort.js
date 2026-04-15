export function bubbleSort(arr) {
    const steps = [];
    const tempArr = [...arr];

    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr.length - i - 1; j++) {
            // Document the comparison
            steps.push({ type: "compare", indices: [j, j + 1] });
            
            if (tempArr[j] > tempArr[j + 1]) {
                // Document the swap
                steps.push({ type: "swap", indices: [j, j + 1] });
                
                // Perform the actual swap in memory
                const temp = tempArr[j];
                tempArr[j] = tempArr[j + 1];
                tempArr[j + 1] = temp;
            }
        }
    }
    return steps;
}
