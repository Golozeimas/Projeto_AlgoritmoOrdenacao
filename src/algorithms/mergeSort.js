import { createCompareStep, createOverwriteStep } from './stepFactory.js';

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
            steps.push(createCompareStep(
                [left + leftIndex, middle + 1 + rightIndex],
                `Comparando os primeiros valores disponíveis das duas metades para decidir qual entra primeiro na intercalação.`,
                {
                    phaseLabel: 'Intercalação',
                    iterationLabel: `Faixa ${left}-${right}`
                }
            ));

            if (leftSlice[leftIndex] <= rightSlice[rightIndex]) {
                tempArr[targetIndex] = leftSlice[leftIndex];
                steps.push(createOverwriteStep(
                    targetIndex,
                    leftSlice[leftIndex],
                    `O valor ${leftSlice[leftIndex]} entra na próxima posição ordenada porque é o menor disponível agora.`,
                    {
                        phaseLabel: 'Escrita',
                        iterationLabel: `Faixa ${left}-${right}`
                    }
                ));
                leftIndex += 1;
            } else {
                tempArr[targetIndex] = rightSlice[rightIndex];
                steps.push(createOverwriteStep(
                    targetIndex,
                    rightSlice[rightIndex],
                    `O valor ${rightSlice[rightIndex]} entra primeiro porque é menor que o próximo valor da metade esquerda.`,
                    {
                        phaseLabel: 'Escrita',
                        iterationLabel: `Faixa ${left}-${right}`
                    }
                ));
                rightIndex += 1;
            }

            targetIndex += 1;
        }

        while (leftIndex < leftSlice.length) {
            tempArr[targetIndex] = leftSlice[leftIndex];
            steps.push(createOverwriteStep(
                targetIndex,
                leftSlice[leftIndex],
                `Restou ${leftSlice[leftIndex]} na metade esquerda, então ele é copiado para manter a ordem da faixa.`,
                {
                    phaseLabel: 'Cópia restante',
                    iterationLabel: `Faixa ${left}-${right}`
                }
            ));
            leftIndex += 1;
            targetIndex += 1;
        }

        while (rightIndex < rightSlice.length) {
            tempArr[targetIndex] = rightSlice[rightIndex];
            steps.push(createOverwriteStep(
                targetIndex,
                rightSlice[rightIndex],
                `Restou ${rightSlice[rightIndex]} na metade direita, então ele é copiado para completar a intercalação.`,
                {
                    phaseLabel: 'Cópia restante',
                    iterationLabel: `Faixa ${left}-${right}`
                }
            ));
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
