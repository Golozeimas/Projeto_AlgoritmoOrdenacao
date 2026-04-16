import { algorithms } from './algorithms/index.js';

const ALGORITHM_META = {
    bubble: {
        label: 'Bubble Sort',
        complexity: {
            best: 'O(n)',
            average: 'O(n^2)',
            worst: 'O(n^2)'
        },
        tip: 'Bubble Sort é didático, mas ineficiente para listas grandes. Use para demonstrações, introdução a comparações e casos quase ordenados.',
        snippets: {
            javascript: `// Bubble Sort - JavaScript
function bubbleSort(arr) {
  const list = [...arr];

  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }

  return list;
}`,
            python: `# Bubble Sort - Python
def bubble_sort(arr):
    values = arr[:]

    for i in range(len(values) - 1):
        for j in range(len(values) - i - 1):
            if values[j] > values[j + 1]:
                values[j], values[j + 1] = values[j + 1], values[j]

    return values`,
            java: `// Bubble Sort - Java
static void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`
            ,
            pseudocode: `BUBBLE-SORT(lista)
  para i de 0 ate tamanho(lista) - 2
    para j de 0 ate tamanho(lista) - i - 2
      se lista[j] > lista[j + 1]
        trocar lista[j] com lista[j + 1]

  retornar lista`
        }
    },
    cocktail: {
        label: 'Cocktail Sort',
        complexity: {
            best: 'O(n)',
            average: 'O(n^2)',
            worst: 'O(n^2)'
        },
        tip: 'Cocktail Sort percorre a lista nos dois sentidos, empurrando os maiores para o fim e os menores para o início a cada ciclo.',
        snippets: {
            javascript: `// Cocktail Sort - JavaScript
function cocktailSort(arr) {
  const list = [...arr];
  let start = 0;
  let end = list.length - 1;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = start; i < end; i++) {
      if (list[i] > list[i + 1]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }

    swapped = false;
    end--;

    for (let i = end - 1; i >= start; i--) {
      if (list[i] > list[i + 1]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        swapped = true;
      }
    }

    start++;
  }

  return list;
}`,
            python: `# Cocktail Sort - Python
def cocktail_sort(arr):
    values = arr[:]
    start = 0
    end = len(values) - 1
    swapped = True

    while swapped:
        swapped = False

        for i in range(start, end):
            if values[i] > values[i + 1]:
                values[i], values[i + 1] = values[i + 1], values[i]
                swapped = True

        if not swapped:
            break

        swapped = False
        end -= 1

        for i in range(end - 1, start - 1, -1):
            if values[i] > values[i + 1]:
                values[i], values[i + 1] = values[i + 1], values[i]
                swapped = True

        start += 1

    return values`,
            java: `// Cocktail Sort - Java
static void cocktailSort(int[] arr) {
    int start = 0;
    int end = arr.length - 1;
    boolean swapped = true;

    while (swapped) {
        swapped = false;

        for (int i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }

        swapped = false;
        end--;

        for (int i = end - 1; i >= start; i--) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        start++;
    }
}`,
            pseudocode: `COCKTAIL-SORT(lista)
  inicio = 0
  fim = tamanho(lista) - 1
  trocou = verdadeiro

  enquanto trocou
    trocou = falso

    para i de inicio ate fim - 1
      se lista[i] > lista[i + 1]
        trocar lista[i] com lista[i + 1]
        trocou = verdadeiro

    se nao trocou
      retornar lista

    trocou = falso
    fim = fim - 1

    para i de fim - 1 ate inicio
      se lista[i] > lista[i + 1]
        trocar lista[i] com lista[i + 1]
        trocou = verdadeiro

    inicio = inicio + 1

  retornar lista`
        }
    },
    insertion: {
        label: 'Insertion Sort',
        complexity: {
            best: 'O(n)',
            average: 'O(n^2)',
            worst: 'O(n^2)'
        },
        tip: 'Insertion Sort funciona muito bem em coleções pequenas ou parcialmente ordenadas. Ele é simples, estável e útil como bloco de apoio em algoritmos híbridos.',
        snippets: {
            javascript: `// Insertion Sort - JavaScript
function insertionSort(arr) {
  const list = [...arr];

  for (let i = 1; i < list.length; i++) {
    const current = list[i];
    let j = i - 1;

    while (j >= 0 && list[j] > current) {
      list[j + 1] = list[j];
      j--;
    }

    list[j + 1] = current;
  }

  return list;
}`,
            python: `# Insertion Sort - Python
def insertion_sort(arr):
    values = arr[:]

    for i in range(1, len(values)):
        current = values[i]
        j = i - 1

        while j >= 0 and values[j] > current:
            values[j + 1] = values[j]
            j -= 1

        values[j + 1] = current

    return values`,
            java: `// Insertion Sort - Java
static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int current = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
}`
            ,
            pseudocode: `INSERTION-SORT(lista)
  para i de 1 ate tamanho(lista) - 1
    atual = lista[i]
    j = i - 1

    enquanto j >= 0 e lista[j] > atual
      lista[j + 1] = lista[j]
      j = j - 1

    lista[j + 1] = atual

  retornar lista`
        }
    },
    merge: {
        label: 'Merge Sort',
        complexity: {
            best: 'O(n log n)',
            average: 'O(n log n)',
            worst: 'O(n log n)'
        },
        tip: 'Merge Sort divide o problema em partes menores e depois intercala os resultados. Ele é estável e previsível, mas usa memória auxiliar.',
        snippets: {
            javascript: `// Merge Sort - JavaScript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i++]);
    } else {
      merged.push(right[j++]);
    }
  }

  return [...merged, ...left.slice(i), ...right.slice(j)];
}`,
            python: `# Merge Sort - Python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr[:]

    middle = len(arr) // 2
    left = merge_sort(arr[:middle])
    right = merge_sort(arr[middle:])

    merged = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1

    return merged + left[i:] + right[j:]`,
            java: `// Merge Sort - Java
static int[] mergeSort(int[] arr) {
    if (arr.length <= 1) {
        return arr;
    }

    int middle = arr.length / 2;
    int[] left = Arrays.copyOfRange(arr, 0, middle);
    int[] right = Arrays.copyOfRange(arr, middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

static int[] merge(int[] left, int[] right) {
    int[] merged = new int[left.length + right.length];
    int i = 0;
    int j = 0;
    int k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged[k++] = left[i++];
        } else {
            merged[k++] = right[j++];
        }
    }

    while (i < left.length) {
        merged[k++] = left[i++];
    }

    while (j < right.length) {
        merged[k++] = right[j++];
    }

    return merged;
}`,
            pseudocode: `MERGE-SORT(lista)
  se tamanho(lista) <= 1
    retornar lista

  meio = tamanho(lista) / 2
  esquerda = MERGE-SORT(lista[0..meio-1])
  direita = MERGE-SORT(lista[meio..fim])

  retornar INTERCALAR(esquerda, direita)

INTERCALAR(esquerda, direita)
  resultado = lista vazia

  enquanto esquerda e direita tiverem itens
    se esquerda[0] <= direita[0]
      mover esquerda[0] para resultado
    senao
      mover direita[0] para resultado

  anexar itens restantes ao resultado
  retornar resultado`
        }
    },
    quick: {
        label: 'Quick Sort',
        complexity: {
            best: 'O(n log n)',
            average: 'O(n log n)',
            worst: 'O(n^2)'
        },
        tip: 'Quick Sort costuma ser muito rápido na prática. Ele particiona o array em torno de um pivô e funciona melhor quando a escolha do pivô evita partições desequilibradas.',
        snippets: {
            javascript: `// Quick Sort - JavaScript
function quickSort(arr) {
  const list = [...arr];

  function sort(low, high) {
    if (low >= high) {
      return;
    }

    const pivotIndex = partition(low, high);
    sort(low, pivotIndex - 1);
    sort(pivotIndex + 1, high);
  }

  function partition(low, high) {
    const pivot = list[high];
    let i = low;

    for (let j = low; j < high; j++) {
      if (list[j] < pivot) {
        [list[i], list[j]] = [list[j], list[i]];
        i++;
      }
    }

    [list[i], list[high]] = [list[high], list[i]];
    return i;
  }

  sort(0, list.length - 1);
  return list;
}`,
            python: `# Quick Sort - Python
def quick_sort(arr):
    values = arr[:]

    def sort(low, high):
        if low >= high:
            return

        pivot_index = partition(low, high)
        sort(low, pivot_index - 1)
        sort(pivot_index + 1, high)

    def partition(low, high):
        pivot = values[high]
        i = low

        for j in range(low, high):
            if values[j] < pivot:
                values[i], values[j] = values[j], values[i]
                i += 1

        values[i], values[high] = values[high], values[i]
        return i

    sort(0, len(values) - 1)
    return values`,
            java: `// Quick Sort - Java
static void quickSort(int[] arr, int low, int high) {
    if (low >= high) {
        return;
    }

    int pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
}

static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
    }

    int temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;
    return i;
}`,
            pseudocode: `QUICK-SORT(lista, inicio, fim)
  se inicio >= fim
    retornar

  pivo = PARTICIONAR(lista, inicio, fim)
  QUICK-SORT(lista, inicio, pivo - 1)
  QUICK-SORT(lista, pivo + 1, fim)

PARTICIONAR(lista, inicio, fim)
  pivo = lista[fim]
  i = inicio

  para j de inicio ate fim - 1
    se lista[j] < pivo
      trocar lista[i] com lista[j]
      i = i + 1

  trocar lista[i] com lista[fim]
  retornar i`
        }
    },
    selection: {
        label: 'Selection Sort',
        complexity: {
            best: 'O(n^2)',
            average: 'O(n^2)',
            worst: 'O(n^2)'
        },
        tip: 'Selection Sort faz poucas trocas, mas muitas comparações. Ele ajuda a entender o conceito de selecionar o menor elemento restante a cada iteração.',
        snippets: {
            javascript: `// Selection Sort - JavaScript
function selectionSort(arr) {
  const list = [...arr];

  for (let i = 0; i < list.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [list[i], list[minIndex]] = [list[minIndex], list[i]];
    }
  }

  return list;
}`,
            python: `# Selection Sort - Python
def selection_sort(arr):
    values = arr[:]

    for i in range(len(values) - 1):
        min_index = i

        for j in range(i + 1, len(values)):
            if values[j] < values[min_index]:
                min_index = j

        if min_index != i:
            values[i], values[min_index] = values[min_index], values[i]

    return values`,
            java: `// Selection Sort - Java
static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;

        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}`
            ,
            pseudocode: `SELECTION-SORT(lista)
  para i de 0 ate tamanho(lista) - 2
    menor = i

    para j de i + 1 ate tamanho(lista) - 1
      se lista[j] < lista[menor]
        menor = j

    se menor != i
      trocar lista[i] com lista[menor]

  retornar lista`
        }
    }
};

const DOM = {
    visualizer: document.getElementById('visualizer-container'),
    startBtn: document.getElementById('start-btn'),
    resetBtn: document.getElementById('reset-btn'),
    randomBtn: document.getElementById('random-btn'),
    speedRange: document.getElementById('speed-range'),
    sizeRange: document.getElementById('size-range'),
    speedValue: document.getElementById('speed-value'),
    sizeValue: document.getElementById('size-value'),
    comparisonsCount: document.getElementById('comparisons-count'),
    swapsCount: document.getElementById('swaps-count'),
    algorithmLabel: document.getElementById('current-algorithm-label'),
    bestCase: document.getElementById('best-case'),
    averageCase: document.getElementById('average-case'),
    worstCase: document.getElementById('worst-case'),
    tip: document.getElementById('algorithm-tip'),
    codeSnippet: document.getElementById('code-snippet'),
    algorithmButtons: [...document.querySelectorAll('[data-algorithm]')],
    languageButtons: [...document.querySelectorAll('[data-language]')]
};

const STATE = {
    algorithmKey: 'bubble',
    languageKey: 'javascript',
    size: 12,
    speed: 5,
    baseValues: [],
    values: [],
    barNodes: [],
    comparisons: 0,
    swaps: 0,
    running: false,
    runToken: 0
};

function generateRandomValues(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 99) + 12);
}

function updateCounterViews() {
    DOM.comparisonsCount.textContent = STATE.comparisons;
    DOM.swapsCount.textContent = STATE.swaps;
}

function resetStats() {
    STATE.comparisons = 0;
    STATE.swaps = 0;
    updateCounterViews();
}

function updateMetaPanel() {
    const meta = ALGORITHM_META[STATE.algorithmKey];

    DOM.algorithmLabel.textContent = meta.label;
    DOM.bestCase.textContent = meta.complexity.best;
    DOM.averageCase.textContent = meta.complexity.average;
    DOM.worstCase.textContent = meta.complexity.worst;
    DOM.tip.textContent = meta.tip;
    DOM.codeSnippet.textContent = meta.snippets[STATE.languageKey];
    DOM.codeSnippet.scrollTop = 0;

    DOM.algorithmButtons.forEach((button) => {
        button.classList.toggle('is-active', button.dataset.algorithm === STATE.algorithmKey);
    });

    DOM.languageButtons.forEach((button) => {
        button.classList.toggle('is-active', button.dataset.language === STATE.languageKey);
    });
}

function updateRangeViews() {
    DOM.speedValue.textContent = `${STATE.speed}x`;
    DOM.sizeValue.textContent = STATE.size;
}

function getBarHeight(value) {
    const maxValue = Math.max(...STATE.values, 1);
    return Math.max(12, (value / maxValue) * 100);
}

function buildBars() {
    DOM.visualizer.innerHTML = '';
    STATE.barNodes = STATE.values.map((value) => {
        const bar = document.createElement('div');
        const label = document.createElement('span');

        bar.className = 'bar';
        label.className = 'bar-value';
        label.textContent = value;
        bar.style.height = `${getBarHeight(value)}%`;
        bar.appendChild(label);
        DOM.visualizer.appendChild(bar);

        return { bar, label };
    });
}

function paintBars({ comparing = [], swapping = [], sorted = [] } = {}) {
    const comparingSet = new Set(comparing);
    const swappingSet = new Set(swapping);
    const sortedSet = new Set(sorted);

    STATE.barNodes.forEach(({ bar, label }, index) => {
        bar.classList.remove('is-comparing', 'is-swapping', 'is-sorted');
        bar.style.height = `${getBarHeight(STATE.values[index])}%`;
        label.textContent = STATE.values[index];

        if (sortedSet.has(index)) {
            bar.classList.add('is-sorted');
        } else if (swappingSet.has(index)) {
            bar.classList.add('is-swapping');
        } else if (comparingSet.has(index)) {
            bar.classList.add('is-comparing');
        }
    });
}

function loadFreshArray() {
    STATE.baseValues = generateRandomValues(STATE.size);
    STATE.values = [...STATE.baseValues];
    resetStats();
    buildBars();
    paintBars();
}

function restoreBaseArray() {
    STATE.values = [...STATE.baseValues];
    resetStats();
    buildBars();
    paintBars();
}

function updateStartButton() {
    DOM.startBtn.disabled = STATE.running;
    DOM.startBtn.textContent = STATE.running ? 'Executando...' : 'Iniciar';
}

function stopCurrentRun() {
    STATE.runToken += 1;
    STATE.running = false;
    updateStartButton();
}

function sleep(ms) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, ms);
    });
}

function getStepDelay() {
    return Math.max(45, Math.round(620 / STATE.speed));
}

async function startSorting() {
    if (STATE.running) {
        return;
    }

    STATE.running = true;
    STATE.runToken += 1;
    updateStartButton();

    const currentToken = STATE.runToken;
    resetStats();
    STATE.values = [...STATE.baseValues];
    buildBars();
    paintBars();

    const steps = algorithms[STATE.algorithmKey](STATE.values);

    for (const step of steps) {
        if (currentToken !== STATE.runToken) {
            return;
        }

        const [leftIndex, rightIndex] = step.indices;

        if (step.type === 'compare') {
            STATE.comparisons += 1;
            updateCounterViews();
            paintBars({ comparing: [leftIndex, rightIndex] });
        }

        if (step.type === 'swap') {
            STATE.swaps += 1;
            [STATE.values[leftIndex], STATE.values[rightIndex]] = [STATE.values[rightIndex], STATE.values[leftIndex]];
            updateCounterViews();
            paintBars({ swapping: [leftIndex, rightIndex] });
        }

        if (step.type === 'overwrite') {
            STATE.swaps += 1;
            STATE.values[leftIndex] = step.value;
            updateCounterViews();
            paintBars({ swapping: [leftIndex] });
        }

        await sleep(getStepDelay());
    }

    if (currentToken !== STATE.runToken) {
        return;
    }

    paintBars({ sorted: STATE.values.map((_, index) => index) });
    STATE.running = false;
    updateStartButton();
}

function handleAlgorithmChange(nextAlgorithm) {
    if (STATE.algorithmKey === nextAlgorithm) {
        return;
    }

    stopCurrentRun();
    STATE.algorithmKey = nextAlgorithm;
    updateMetaPanel();
    restoreBaseArray();
}

function handleLanguageChange(nextLanguage) {
    STATE.languageKey = nextLanguage;
    updateMetaPanel();
}

function handleReset() {
    stopCurrentRun();
    restoreBaseArray();
}

function handleRandomize() {
    stopCurrentRun();
    loadFreshArray();
}

function handleSizeInput(nextSize) {
    STATE.size = Number(nextSize);
    updateRangeViews();
    stopCurrentRun();
    loadFreshArray();
}

function handleSpeedInput(nextSpeed) {
    STATE.speed = Number(nextSpeed);
    updateRangeViews();
}

function bindEvents() {
    DOM.startBtn.addEventListener('click', startSorting);
    DOM.resetBtn.addEventListener('click', handleReset);
    DOM.randomBtn.addEventListener('click', handleRandomize);

    DOM.speedRange.addEventListener('input', (event) => {
        handleSpeedInput(event.target.value);
    });

    DOM.sizeRange.addEventListener('input', (event) => {
        handleSizeInput(event.target.value);
    });

    DOM.algorithmButtons.forEach((button) => {
        button.addEventListener('click', () => {
            handleAlgorithmChange(button.dataset.algorithm);
        });
    });

    DOM.languageButtons.forEach((button) => {
        button.addEventListener('click', () => {
            handleLanguageChange(button.dataset.language);
        });
    });
}

function init() {
    updateRangeViews();
    updateMetaPanel();
    loadFreshArray();
    updateStartButton();
    bindEvents();
}

window.addEventListener('load', init);
