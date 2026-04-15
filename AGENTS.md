# Objetivo do Projeto

Este projeto é uma aplicação front-end construída utilizando HTML, CSS e JavaScript puro (Vanilla JS).
O foco é manter uma estrutura simples, organizada e fácil de escalar.


# Regras Gerais para Agentes (IA ou Devs)
Não modificar arquivos sem necessidade clara
Manter consistência de código existente
Evitar dependências externas desnecessárias
Priorizar simplicidade e legibilidade
Não adicionar funcionalidades fora do escopo

# Estrutura do Projeto
/assets
  /css
    style.css
  /js
    main.js
  /img

index.html

# Responsabilidades por Arquivo

## index.html
Estrutura principal da aplicação
Sem lógica complexa
Usar classes e IDs semânticos
Scripts devem ser importados no final do <body>

## style.css
Responsável apenas por estilização
Seguir padrão:
Reset básico no início
Variáveis CSS (se necessário)
Organização por seções (layout, componentes, utilitários)
Evitar estilos inline no HTML

## main.js
Toda lógica da aplicação
Manipulação de DOM
Eventos e interações
Código organizado em:
funções pequenas e reutilizáveis
separação de responsabilidades

# Boas Práticas
## HTML

Usar tags semânticas (header, main, section, footer)
Evitar div desnecessária
Acessibilidade básica (alt em imagens, labels, etc.)
## CSS

Nomeação clara (preferencialmente estilo BEM ou simples e consistente)
Evitar !important
Manter responsividade (mobile-first se possível)
## JavaScript

Evitar código global desnecessário
Usar const e let (não usar var)
Evitar funções muito longas
Sempre tratar possíveis erros

# O que NÃO fazer
Não adicionar frameworks (React, Vue, etc.)
Não usar bibliotecas externas sem necessidade explícita
Não misturar CSS dentro do JS
Não duplicar código

# Testes e Validação
Testar no navegador (Chrome, Edge ou Firefox)
Verificar responsividade
Validar interações básicas (cliques, inputs, etc.)

# Futuras Melhorias (Opcional)
Modularização do JS
Separação de múltiplas páginas
Integração com API
Build tools (Vite, Webpack)