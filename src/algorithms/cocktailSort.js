import { createCompareStep, createSwapStep } from './stepFactory.js';

export function cocktailSort(arr) {
    const steps = [];
    const tempArr = [...arr];
    let start = 0;
    let end = tempArr.length - 1;
    let swapped = true;
    let cycle = 1;

    while (swapped) {
        swapped = false;

        for (let index = start; index < end; index++) {
            steps.push(createCompareStep(
                [index, index + 1],
                `Comparando ${tempArr[index]} e ${tempArr[index + 1]} enquanto os maiores avançam para o final da lista.`,
                {
                    phaseLabel: 'Varredura para a direita',
                    iterationLabel: `Ciclo ${cycle}`
                }
            ));

            if (tempArr[index] > tempArr[index + 1]) {
                steps.push(createSwapStep(
                    [index, index + 1],
                    `Como ${tempArr[index]} é maior que ${tempArr[index + 1]}, eles trocam de posição nesta ida.`,
                    {
                        phaseLabel: 'Troca para a direita',
                        iterationLabel: `Ciclo ${cycle}`
                    }
                ));
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
            steps.push(createCompareStep(
                [index, index + 1],
                `Agora a comparação volta da direita para a esquerda para aproximar os menores valores do início.`,
                {
                    phaseLabel: 'Varredura para a esquerda',
                    iterationLabel: `Ciclo ${cycle}`
                }
            ));

            if (tempArr[index] > tempArr[index + 1]) {
                steps.push(createSwapStep(
                    [index, index + 1],
                    `Como ${tempArr[index]} ainda é maior que ${tempArr[index + 1]}, a troca ajuda a empurrar o menor valor para a esquerda.`,
                    {
                        phaseLabel: 'Troca para a esquerda',
                        iterationLabel: `Ciclo ${cycle}`
                    }
                ));
                [tempArr[index], tempArr[index + 1]] = [tempArr[index + 1], tempArr[index]];
                swapped = true;
            }
        }

        start += 1;
        cycle += 1;
    }

    return steps;
}
