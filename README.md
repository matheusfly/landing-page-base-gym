# Documentação Técnica do Projeto

Este documento fornece uma visão geral técnica da aplicação, detalhando sua arquitetura, funcionalidades e como executar o ambiente de desenvolvimento localmente.

## 1. Ambiente de Desenvolvimento Local

A aplicação é totalmente containerizada utilizando Docker e Docker Compose, o que simplifica a configuração do ambiente de desenvolvimento. Para executar a aplicação, siga os passos abaixo:

**Pré-requisitos:**
*   [Docker](https://docs.docker.com/get-docker/) instalado e em execução.
*   [Docker Compose](https://docs.docker.com/compose/install/) instalado.

**Passos para Execução:**

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/matheusfly/landing-page-base-gym.git
    cd landing-page-base-gym
    ```

2.  **Inicie os Contêineres:**
    Execute o comando a seguir na raiz do projeto para construir as imagens e iniciar os serviços do frontend e backend.
    ```bash
    docker-compose up --build
    ```
    O comando irá baixar as dependências, construir as imagens Docker e iniciar os contêineres em modo "attached", exibindo os logs em tempo real.

3.  **Acesse a Aplicação:**
    Após a conclusão do processo, a aplicação estará disponível no seu navegador através do seguinte endereço:
    [http://localhost](http://localhost)

## 2. Arquitetura do Sistema

A arquitetura da aplicação é baseada em uma separação clara entre o frontend e o backend, ambos executando em contêineres Docker independentes e orquestrados pelo Docker Compose.

### Componentes Principais:

*   **Frontend:**
    *   **Tecnologia:** Aplicação [React](https://reactjs.org/) criada com [Vite](https://vitejs.dev/).
    *   **Servidor Web:** O build estático da aplicação React é servido por um contêiner [Nginx](https://www.nginx.com/).
    *   **Responsabilidade:** Interface do usuário, interação com o cliente e renderização de componentes visuais.

*   **Backend:**
    *   **Tecnologia:** API RESTful desenvolvida em Python com o framework [Flask](https://flask.palletsprojects.com/).
    *   **Responsabilidade:** Lógica de negócio, processamento de dados e comunicação com futuras fontes de dados (bancos de dados, serviços externos, etc.).
    *   **Endpoint:** A API é executada internamente na porta `5000`.

*   **Nginx (Proxy Reverso):**
    *   O Nginx, além de servir os arquivos estáticos do frontend, atua como um **proxy reverso**.
    *   Todas as requisições feitas pelo frontend para o caminho `/api` são redirecionadas para o serviço de backend (`http://backend:5000`). Isso simplifica a comunicação entre os serviços e evita problemas com CORS (Cross-Origin Resource Sharing), pois para o navegador, todas as requisições parecem vir da mesma origem.

*   **Docker & Docker Compose:**
    *   **Docker:** Garante que cada serviço (frontend e backend) execute em um ambiente isolado e consistente, com todas as suas dependências empacotadas.
    *   **Docker Compose:** Orquestra a inicialização e a comunicação entre os contêineres, definindo a rede interna e a ordem de inicialização dos serviços.

## 3. Diagramas da Arquitetura

Esta seção ilustra visualmente a arquitetura do sistema e o fluxo de dados entre os componentes.

### Diagrama de Componentes

O diagrama abaixo mostra os principais componentes da aplicação e como eles se interagem.

```mermaid
graph TD;
    A[Usuário] --> B{Nginx};
    B --> C[Frontend - React];
    B -- Rota /api --> D[Backend - Python];
```

### Diagrama de Fluxo de Requisição

Este diagrama de sequência detalha o fluxo de uma requisição desde o navegador do usuário até o backend e vice-versa.

```mermaid
sequenceDiagram
    participant Usuário
    participant Navegador
    participant Nginx
    participant Frontend
    participant Backend

    Usuário->>Navegador: Acessa http://localhost
    Navegador->>Nginx: GET /
    Nginx->>Frontend: Serve arquivos estáticos (HTML, CSS, JS)
    Frontend-->>Navegador: Aplicação React é carregada
    Navegador->>Nginx: GET /api/dados
    Nginx->>Backend: GET /api/dados (proxy)
    Backend-->>Nginx: Resposta JSON
    Nginx-->>Navegador: Resposta JSON
    Navegador->>Frontend: Renderiza os dados na UI
```

**Exemplo de Fluxo de Requisição:**
1.  O usuário acessa `http://localhost` no navegador.
2.  O Nginx recebe a requisição e serve o arquivo `index.html` da aplicação React.
3.  A aplicação React é carregada no navegador e realiza uma chamada para `/api/dados`.
4.  O Nginx intercepta a requisição para `/api/dados` e a encaminha para o serviço de backend em `http://backend:5000/api/dados`.
5.  O backend processa a requisição e retorna os dados para o Nginx.
6.  O Nginx repassa a resposta para o frontend, que a utiliza para renderizar as informações na tela.

## 4. Suíte de Testes

Esta seção detalha a suíte de testes da aplicação, cobrindo tanto o backend quanto o frontend para garantir a qualidade e a estabilidade do código.

### Testes Unitários (Unit Tests)

Os testes unitários focam em verificar as menores partes da aplicação de forma isolada, como componentes React e endpoints da API.

#### Backend (Pytest)

*   **Arquivo:** `backend/tests/test_app.py`
*   **Objetivo:** Garantir que a aplicação Flask está servindo o conteúdo corretamente e que os endpoints essenciais estão funcionando.
*   **Testes Específicos:**
    *   `test_health_check`: Verifica se o endpoint `/api/health` retorna o status `200 OK` e o JSON esperado.
    *   `test_serve_index`: Assegura que a rota raiz (`/`) serve o arquivo `index.html`.
    *   `test_serve_static_files`: Confirma que arquivos estáticos conhecidos são servidos corretamente.
    *   `test_serve_nonexistent_path`: Garante que o `index.html` é servido como fallback para rotas não existentes, um comportamento essencial para SPAs (Single Page Applications).
*   **Como Executar:**
    ```bash
    # Navegue até o diretório do backend e execute o pytest
    cd backend
    pytest
    ```

#### Frontend (Vitest)

Os testes de frontend utilizam [Vitest](https://vitest.dev/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testar os componentes React.

*   **Arquivo:** `src/__tests__/Analytics.test.jsx`
    *   **Objetivo:** Validar a integração com o Google Analytics.
    *   **Testes Específicos:** Verifica se o `ReactGA` é inicializado com o ID de rastreamento correto e se um evento `pageview` é enviado quando o componente é renderizado.

*   **Arquivo:** `src/__tests__/App.test.jsx`
    *   **Objetivo:** Teste inicial para o componente principal da aplicação.
    *   **Testes Específicos:** Atualmente, é um teste básico que apenas renderiza o componente `App` para garantir que não há erros de renderização.

*   **Arquivo:** `src/__tests__/Buttons.test.jsx`
    *   **Objetivo:** Garantir que os botões de links externos na página principal estão corretos.
    *   **Testes Específicos:** Verifica se os botões do WhatsApp e do Uber são renderizados e se seus atributos `href` contêm os links corretos e devidamente formatados.

*   **Como Executar:**
    ```bash
    # Execute o comando a partir da raiz do projeto
    npm test
    ```

### Testes de Ponta a Ponta (End-to-End Tests)

Os testes E2E simulam a jornada completa de um usuário na aplicação.

*   **Framework:** [Playwright](https://playwright.dev/)
*   **Arquivo:** `tests/e2e.spec.cjs`
*   **Objetivo:** Validar o fluxo principal da aplicação em um ambiente de navegador real.
*   **Testes Específicos:**
    *   `homepage has correct title`: Acessa a página inicial e verifica se o título da página contém a palavra "BASE", confirmando que a aplicação foi carregada corretamente.
*   **Como Executar:**
    ```bash
    # Execute o comando a partir da raiz do projeto
    npx playwright test
    ```
