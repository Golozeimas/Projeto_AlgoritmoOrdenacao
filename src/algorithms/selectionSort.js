import { createCompareStep, createSwapStep } from './stepFactory.js';

export function selectionSort(arr) {
    const steps = [];
    const tempArr = [...arr];

    for (let i = 0; i < tempArr.length - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < tempArr.length; j++) {
            steps.push(createCompareStep(
                [minIndex, j],
                `Procurando o menor valor da parte ainda não ordenada ao comparar ${tempArr[minIndex]} com ${tempArr[j]}.`,
                {
                    phaseLabel: 'Busca do menor',
                    iterationLabel: `Seleção ${i + 1}`
                }
            ));
            
            if (tempArr[j] < tempArr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            steps.push(createSwapStep(
                [i, minIndex],
                `O menor valor encontrado nesta rodada é colocado na posição ${i + 1} da lista.`,
                {
                    phaseLabel: 'Posicionamento',
                    iterationLabel: `Seleção ${i + 1}`
                }
            ));
            
            const temp = tempArr[i];
            tempArr[i] = tempArr[minIndex];
            tempArr[minIndex] = temp;
        }
    }
    return steps;
}
