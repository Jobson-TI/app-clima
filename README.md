# App de Clima 🌦️

Um app que mostra o clima atual de qualquer cidade do mundo, feito com HTML, CSS e JavaScript puro.

🔗 **Acesse:** https://SEU_USUARIO.github.io/app-clima

## Funcionalidades

- Busca o clima de qualquer cidade pelo nome (pelo botão ou apertando **Enter**)
- Mostra a **temperatura**, a **velocidade do vento** e a **condição do tempo** (☀️ ⛅ ☁️ 🌧️ ⛈️)
- Avisa quando a cidade não é encontrada
- Fundo com degradê animado

## Tecnologias

- HTML
- CSS (Flexbox e animações com `@keyframes`)
- JavaScript (`fetch` e `async/await`)
- [API Open-Meteo](https://open-meteo.com/) (gratuita, sem necessidade de chave)

## Como funciona

1. O nome da cidade é enviado para a API de geocodificação, que devolve a **latitude e longitude**
2. As coordenadas são usadas para buscar o **clima atual** na API de previsão
3. O código do tempo (`weather_code`) é traduzido em uma descrição com emoji

## O que aprendi

- Consumir APIs com `fetch` e lidar com respostas assíncronas (`async/await` e Promises)
- Navegar em dados JSON com objetos e arrays
- Encadear duas requisições, onde uma depende do resultado da outra
- Usar objetos como "dicionário" e o operador `||` para valores padrão
- Testar com dados simulados