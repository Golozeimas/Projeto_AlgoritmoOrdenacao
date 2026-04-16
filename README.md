# Sorting Visualizer

> Visualizador interativo de algoritmos de ordenação — com pseudocódigo, implementações em múltiplas linguagens e animações passo a passo.

🔗 **[Acesse o projeto ao vivo](https://projeto-algoritmo-ordenacao.vercel.app/)**

---

## Sobre o Projeto

Durante o estudo de Estruturas de Dados e Algoritmos (EDA), é difícil encontrar ferramentas que reúnam visualização animada, pseudocódigo legível e implementações reais em linguagens populares no mesmo lugar. Este projeto resolve exatamente esse problema.

O Sorting Visualizer permite acompanhar cada comparação e troca de um algoritmo de ordenação em tempo real, consultar o código correspondente em JavaScript, Python, Java ou Pseudocódigo, e ver as métricas de complexidade diretamente na tela.

---

## Funcionalidades

- **5 algoritmos implementados:** Bubble Sort, Insertion Sort, Selection Sort, Quick Sort e Merge Sort
- **Visualização animada** com barras coloridas indicando comparações, trocas e elementos ordenados
- **Código em 4 linguagens:** JavaScript, Python, Java e Pseudocódigo
- **Métricas em tempo real:** contador de comparações e trocas durante a execução
- **Complexidade de tempo** (melhor, médio e pior caso) exibida por algoritmo
- **Dica prática** sobre quando e como usar cada algoritmo
- **Controles interativos:** velocidade de animação e tamanho do array ajustáveis
- **Array aleatório** para gerar novos casos de teste com um clique

---

## Como Usar

### 1. Escolha um algoritmo

No topo da página, selecione um dos cinco algoritmos disponíveis clicando em seu botão:

```
Bubble Sort | Insertion Sort | Selection Sort | Quick Sort | Merge Sort
```

### 2. Configure a visualização

- **Velocidade:** arraste o controle de 1x a 10x para ajustar a rapidez da animação
- **Tamanho:** arraste o controle de 8 a 24 para definir o número de elementos no array

### 3. Controles principais

| Botão | Ação |
|---|---|
| **Iniciar** | Executa a animação do algoritmo selecionado |
| **Reiniciar** | Restaura o array original (antes da ordenação) |
| **Aleatório** | Gera um novo array com valores aleatórios |

### 4. Acompanhe a execução

Durante a animação, as barras mudam de cor para indicar o estado atual:

| Cor | Significado |
|---|---|
| 🔵 Azul | Barras sendo **comparadas** |
| 🔴 Vermelho | Barras sendo **trocadas** |
| 🟢 Verde | Elementos já **ordenados** |
| ⬜ Cinza | Estado **padrão** |

### 5. Consulte o código

No painel à direita, escolha a linguagem desejada e acompanhe a implementação do algoritmo atual. A troca de algoritmo ou linguagem atualiza o snippet automaticamente.

---

## Algoritmos Disponíveis

| Algoritmo | Melhor | Médio | Pior |
|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) |
| Insertion Sort | O(n) | O(n²) | O(n²) |
| Selection Sort | O(n²) | O(n²) | O(n²) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) |

---

## Estrutura do Projeto

```
/
├── src/
│   ├── index.html              # Estrutura principal da aplicação
│   ├── style.css               # Estilos e responsividade
│   ├── main.js                 # Lógica da aplicação e animação
│   └── algorithms/
│       ├── index.js            # Exportação centralizada dos algoritmos
│       ├── bubbleSort.js
│       ├── insertionSort.js
│       ├── selectionSort.js
│       ├── quickSort.js
│       └── mergeSort.js
└── README.md
```

---

## Como Rodar Localmente

Este projeto é front-end puro — sem dependências de build para rodar.

**Opção 1 — Extensão Live Server (VS Code):**

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Abra a pasta do projeto no VS Code
3. Clique com o botão direito em `src/index.html` → **Open with Live Server**

**Opção 2 — Servidor HTTP local:**

```bash
# Python 3
cd src
python -m http.server 8080
# Acesse: http://localhost:8080
```

> ⚠️ Abrir o `index.html` diretamente no navegador (via `file://`) **não funciona** porque o projeto usa ES Modules (`import/export`). É necessário um servidor HTTP local.

---

## Deploy

O projeto está hospedado na [Vercel](https://vercel.com/). Para fazer seu próprio deploy:

1. Faça um fork ou clone do repositório
2. Importe o projeto na Vercel
3. Configure o **Root Directory** como `src`
4. Publique — não há etapa de build necessária

---

## Tecnologias

- **HTML5** semântico
- **CSS3** com variáveis, grid e media queries
- **JavaScript ES6+** com módulos nativos (`import/export`)
- Sem frameworks, sem bibliotecas externas

---

## Motivação

Criado por necessidade própria durante o estudo de EDA: os sites existentes raramente combinam visualização animada com pseudocódigo claro e implementações reais lado a lado. Este projeto serve como ferramenta de estudo e referência rápida para quem está aprendendo algoritmos de ordenação.

---

## Licença

Uso livre para fins educacionais.
