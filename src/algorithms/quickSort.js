import { createCompareStep, createSwapStep } from './stepFactory.js';

export function quickSort(arr) {
    const steps = [];
    const tempArr = [...arr];

    function partition(low, high) {
        const pivot = tempArr[high];
        let pivotIndex = low;

        for (let j = low; j < high; j++) {
            steps.push(createCompareStep(
                [j, high],
                `Comparando ${tempArr[j]} com o pivô ${pivot} para decidir se ele deve ficar antes do pivô.`,
                {
                    phaseLabel: 'Partição',
                    iterationLabel: `Faixa ${low}-${high}`
                }
            ));

            if (tempArr[j] < pivot) {
                if (pivotIndex !== j) {
                    steps.push(createSwapStep(
                        [pivotIndex, j],
                        `Como ${tempArr[j]} é menor que o pivô ${pivot}, ele vai para a região da esquerda da partição.`,
                        {
                            phaseLabel: 'Reposicionamento',
                            iterationLabel: `Faixa ${low}-${high}`
                        }
                    ));
                    [tempArr[pivotIndex], tempArr[j]] = [tempArr[j], tempArr[pivotIndex]];
                }

                pivotIndex += 1;
            }
        }

        if (pivotIndex !== high) {
            steps.push(createSwapStep(
                [pivotIndex, high],
                `O pivô ${pivot} vai para sua posição final nesta partição, separando menores e maiores.`,
                {
                    phaseLabel: 'Posicionando pivô',
                    iterationLabel: `Faixa ${low}-${high}`
                }
            ));
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
