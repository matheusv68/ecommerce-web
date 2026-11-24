# E-commerce Web

Frontend do e-commerce construído com React, TypeScript, Vite e Tailwind CSS. A aplicação consome uma API Rails, cuja URL é definida por variável de ambiente.

## Pré-requisitos

- Node.js em uma versão LTS (recomendada: 20 ou superior)
- npm (instalado junto com o Node.js)
- Backend Rails em execução e acessível pela máquina local

## Como executar localmente

1. Instale as dependências. Como o projeto possui `package-lock.json`, prefira `npm ci` para reproduzir as versões previstas:

   ```bash
   npm ci
   ```

2. Crie o arquivo de ambiente a partir do exemplo:

   ```bash
   cp .env.example .env
   ```

3. Informe em `.env` a URL base da API Rails. Para o backend local padrão:

   ```dotenv
   VITE_API_BASE_URL=http://localhost:3000
   ```

   Caso a API esteja em outro endereço ou porta, substitua o valor pela URL correspondente. Não inclua uma barra no final.

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o endereço exibido no terminal — normalmente [http://localhost:5173](http://localhost:5173).

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática. |
| `npm run build` | Verifica os tipos e gera a build de produção em `dist/`. |
| `npm run preview` | Serve localmente a build de produção já gerada. |
| `npm run lint` | Executa a análise estática com ESLint. |

## Integração com a API

O cliente HTTP compartilhado está em `src/lib/api.ts`. Ele usa `VITE_API_BASE_URL` como base e exibe um erro na inicialização caso essa variável não esteja definida. Garanta também que o backend permita requisições da origem local do Vite (`http://localhost:5173`) por CORS.

Após modificar `.env`, reinicie `npm run dev` para que o Vite carregue o novo valor.

> O arquivo `.env` contém configurações locais e não deve ser versionado. Use `.env.example` como referência para as variáveis exigidas.
