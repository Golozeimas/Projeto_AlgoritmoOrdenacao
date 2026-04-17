import { createCompareStep, createSwapStep } from './stepFactory.js';

export function bubbleSort(arr) {
    const steps = [];
    const tempArr = [...arr];

    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr.length - i - 1; j++) {
            steps.push(createCompareStep(
                [j, j + 1],
                `Comparando ${tempArr[j]} e ${tempArr[j + 1]} para levar o maior valor desta passada para a direita.`,
                {
                    phaseLabel: 'Comparação',
                    iterationLabel: `Passada ${i + 1}`
                }
            ));
            
            if (tempArr[j] > tempArr[j + 1]) {
                steps.push(createSwapStep(
                    [j, j + 1],
                    `Como ${tempArr[j]} é maior que ${tempArr[j + 1]}, os dois trocam de posição.`,
                    {
                        phaseLabel: 'Troca',
                        iterationLabel: `Passada ${i + 1}`
                    }
                ));
                
                const temp = tempArr[j];
                tempArr[j] = tempArr[j + 1];
                tempArr[j + 1] = temp;
            }
        }
    }
    return steps;
}
