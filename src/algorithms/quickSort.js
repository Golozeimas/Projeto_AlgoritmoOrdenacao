export function quickSort(arr) {
    const steps = [];
    const tempArr = [...arr];

    function partition(low, high) {
        const pivot = tempArr[high];
        let pivotIndex = low;

        for (let j = low; j < high; j++) {
            steps.push({ type: 'compare', indices: [j, high] });

            if (tempArr[j] < pivot) {
                if (pivotIndex !== j) {
                    steps.push({ type: 'swap', indices: [pivotIndex, j] });
                    [tempArr[pivotIndex], tempArr[j]] = [tempArr[j], tempArr[pivotIndex]];
                }

                pivotIndex += 1;
            }
        }

        if (pivotIndex !== high) {
            steps.push({ type: 'swap', indices: [pivotIndex, high] });
            [tempArr[pivotIndex], tempArr[high]] = [tempArr[high], tempArr[pivotIndex]];
        }

        return pivotIndex;
    }

    function sort(low, high) {
        if (low >= high) {
            return;
        }

        const pivotIndex = partition(low, high);
        sort(low, pivotIndex - 1);
        sort(pivotIndex + 1, high);
    }

    sort(0, tempArr.length - 1);

    return steps;
}
