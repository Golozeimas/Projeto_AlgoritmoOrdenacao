export function cocktailSort(arr) {
    const steps = [];
    const tempArr = [...arr];
    let start = 0;
    let end = tempArr.length - 1;
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let index = start; index < end; index++) {
            steps.push({ type: 'compare', indices: [index, index + 1] });

            if (tempArr[index] > tempArr[index + 1]) {
                steps.push({ type: 'swap', indices: [index, index + 1] });
                [tempArr[index], tempArr[index + 1]] = [tempArr[index + 1], tempArr[index]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }

        swapped = false;
        end -= 1;

        for (let index = end - 1; index >= start; index--) {
            steps.push({ type: 'compare', indices: [index, index + 1] });

            if (tempArr[index] > tempArr[index + 1]) {
                steps.push({ type: 'swap', indices: [index, index + 1] });
                [tempArr[index], tempArr[index + 1]] = [tempArr[index + 1], tempArr[index]];
                swapped = true;
            }
        }

        start += 1;
    }

    return steps;
}
