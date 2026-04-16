export function mergeSort(arr) {
    const steps = [];
    const tempArr = [...arr];

    function merge(left, middle, right) {
        const leftSlice = tempArr.slice(left, middle + 1);
        const rightSlice = tempArr.slice(middle + 1, right + 1);

        let leftIndex = 0;
        let rightIndex = 0;
        let targetIndex = left;

        while (leftIndex < leftSlice.length && rightIndex < rightSlice.length) {
            steps.push({
                type: 'compare',
                indices: [left + leftIndex, middle + 1 + rightIndex]
            });

            if (leftSlice[leftIndex] <= rightSlice[rightIndex]) {
                tempArr[targetIndex] = leftSlice[leftIndex];
                steps.push({
                    type: 'overwrite',
                    indices: [targetIndex],
                    value: leftSlice[leftIndex]
                });
                leftIndex += 1;
            } else {
                tempArr[targetIndex] = rightSlice[rightIndex];
                steps.push({
                    type: 'overwrite',
                    indices: [targetIndex],
                    value: rightSlice[rightIndex]
                });
                rightIndex += 1;
            }

            targetIndex += 1;
        }

        while (leftIndex < leftSlice.length) {
            tempArr[targetIndex] = leftSlice[leftIndex];
            steps.push({
                type: 'overwrite',
                indices: [targetIndex],
                value: leftSlice[leftIndex]
            });
            leftIndex += 1;
            targetIndex += 1;
        }

        while (rightIndex < rightSlice.length) {
            tempArr[targetIndex] = rightSlice[rightIndex];
            steps.push({
                type: 'overwrite',
                indices: [targetIndex],
                value: rightSlice[rightIndex]
            });
            rightIndex += 1;
            targetIndex += 1;
        }
    }

    function sort(left, right) {
        if (left >= right) {
            return;
        }

        const middle = Math.floor((left + right) / 2);

        sort(left, middle);
        sort(middle + 1, right);
        merge(left, middle, right);
    }

    sort(0, tempArr.length - 1);

    return steps;
}
