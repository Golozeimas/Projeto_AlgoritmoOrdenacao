import { createCompareStep, createSwapStep } from './stepFactory.js';

export function insertionSort(arr) {
    const steps = [];
    const tempArr = [...arr];

    for (let i = 1; i < tempArr.length; i++) {
        let current = tempArr[i];
        let j = i - 1;
        
        while (j >= 0) {
            steps.push(createCompareStep(
                [j, j + 1],
                `Verificando se ${tempArr[j]} precisa abrir espaço para ${current}, que está sendo inserido na parte já ordenada.`,
                {
                    phaseLabel: 'Comparação',
                    iterationLabel: `Inserção ${i + 1}`
                }
            ));
            
            if (tempArr[j] > current) {
                steps.push(createSwapStep(
                    [j, j + 1],
                    `Como ${tempArr[j]} é maior que ${current}, ele se desloca uma posição para a direita.`,
                    {
                        phaseLabel: 'Deslocamento',
                        iterationLabel: `Inserção ${i + 1}`
                    }
                ));
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
