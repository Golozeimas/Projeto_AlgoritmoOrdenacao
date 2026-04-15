import { algorithms } from './algorithms/index.js';

const ALGORITHM_META = {
    bubble: {
        label: 'Bubble Sort',
        complexity: {
            best: 'O(n)',
            average: 'O(n^2)',
            worst: 'O(n^2)'
        },
        tip: 'Bubble Sort e didatico, mas ineficiente para listas grandes. Use para demonstracoes, introducao a comparacoes e casos quase ordenados.',
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
        }
    },
    insertion: {
        label: 'Insertion Sort',
        complexity: {
            best: 'O(n)',
            average: 'O(n^2)',
            worst: 'O(n^2)'
        },
        tip: 'Insertion Sort funciona muito bem em colecoes pequenas ou parcialmente ordenadas. Ele e simples, estavel e util como bloco de apoio em algoritmos hibridos.',
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
        }
    },
    selection: {
        label: 'Selection Sort',
        complexity: {
            best: 'O(n^2)',
            average: 'O(n^2)',
            worst: 'O(n^2)'
        },
        tip: 'Selection Sort faz poucas trocas, mas muitas comparacoes. Ele ajuda a entender o conceito de selecionar o menor elemento restante a cada iteracao.',
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
