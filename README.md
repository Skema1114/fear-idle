# Culto das Sombras: O Despertar Ancestral

## 🕯️ Invoque o Medo, Conquiste o Vazio 🌑

Este é o "Culto das Sombras", um jogo **idle/clicker** com tema de horror gótico e cósmico, onde seu objetivo é canalizar a essência do medo e despertar entidades ancestrais. Colete essência, aprimore suas habilidades de canalização, invoque manifestações e desbloqueie troféus enquanto mergulha nas profundezas da loucura.

## ✨ Sumário do Jogo

"Culto das Sombras" combina a jogabilidade viciante de clickers idle com uma atmosfera sombria e uma progressão profunda. Gerencie sua essência, compre upgrades que automatizam sua coleta ou aprimoram seus cliques, mantenha combos frenéticos e descubra os segredos das revelações sombrias.

## 🎮 Recursos Principais da v1

- **Jogabilidade Híbrida Idle/Clicker:** Progrida passivamente com manifestações automáticas ou ativamente com cliques manuais e combos.
- **Upgrades Diversificados:**
  - **Manifestações Automáticas:** Uma vasta gama de upgrades que geram essência por segundo (`Essência / segundo`), permitindo que você progrida mesmo offline. Cada um possui uma descrição sombria e temática.
  - **Manifestações de Canalização:** Upgrades dedicados que aprimoram o valor base de cada clique manual, crucial para ganhos explosivos. Cada um possui uma descrição sombria e temática.
  - **Upgrades de Legado (Prestígio):** Upgrades permanentes comprados com `Essência Ancestral` que concedem multiplicadores em todas as fontes de ganho (DPS ou Clique), mantidos após o prestígio. Cada um possui uma descrição única.
- **Sistema de Combo Dinâmico:** Cada clique consecutivo dentro de 2 segundos aumenta seu contador de combo e um multiplicador de essência. Se você parar de clicar por mais de 2 segundos, o combo será zerado, incentivando a atenção ativa.
- **Progressão de Troféus Expansiva:** Desbloqueie uma vasta coleção de "Revelações Sombrias" por marcos de essência total, número de cliques totais, combos mais altos alcançados e aquisição de diversos upgrades (automáticos, de clique e de prestígio).
  - **Detalhes de Troféus:** Clique em qualquer troféu (ganho ou bloqueado) para ver sua descrição sombria e o objetivo a ser cumprido para obtê-lo.
  - **Visibilidade de Troféus:** Troféus bloqueados são exibidos com um visual embaçado/acinzentado, incentivando a exploração e a descoberta de novas metas.
- **Sistema de Prestígio:**
  - **Essência Ancestral:** Uma nova moeda obtida ao prestigiar (reiniciar o jogo).
  - **Multiplicador Global Permanente:** Gaste Essência Ancestral em Upgrades de Legado que concedem bônus permanentes de essência para todas as futuras jogadas, tornando cada prestígio mais poderoso.
  - **Reinício Estratégico:** Ao prestigiar, a maior parte do seu progresso é resetada (essência, upgrades automáticos e de clique, combo), mas seus **troféus desbloqueados e upgrades de Legado são mantidos**.
- **Persistência de Dados:** Seu progresso é salvo automaticamente a cada segundo no `localStorage` do navegador.
- **Gerenciamento de Saves Simplificado:**
  - **Salvar Manualmente:** Um botão dedicado para forçar um salvamento do seu progresso a qualquer momento.
  - **Exportar Save:** Gera um código de save (Base64) que pode ser copiado para a área de transferência ou manualmente de um modal para ser salvo como backup.
  - **Importar Save:** Abre um modal onde você pode colar um código de save exportado anteriormente para restaurar seu progresso.
- **Estatísticas Detalhadas:** Um botão "Estatísticas" abre um modal com dados abrangentes sobre sua jornada, incluindo tempo total de jogo, essência total coletada, cliques, combos, níveis de prestígio e mais.
- **Tema Gótico & Lovecraftiano Refinado:** Estilo visual e sonoro inspirados em temas sombrios, cultos e horrores cósmicos, com uma paleta de cores "Dracula" que proporciona uma experiência imersiva e atmosférica.
- **Responsividade Total:** Design adaptável para proporcionar uma excelente experiência em dispositivos desktop e móveis, garantindo que não haja scrolls horizontais e que o layout se ajuste dinamicamente.
- **Formatação de Números Inteligente:** Valores de essência e ganhos são exibidos com formatação de números inteiros para pequenos, e notação abreviada (K, M, B, T, Qa, Qi, etc.) para números maiores, garantindo legibilidade e prevenindo quebras de layout.

## 🛠️ Tecnologias Utilizadas

- **Angular (v18):** Framework principal para o desenvolvimento da aplicação, utilizando o modelo de Signals para gerenciamento de estado reativo.
- **TypeScript:** Linguagem de programação tipada, garantindo maior robustez e manutenibilidade do código.
- **SCSS (Sass):** Pré-processador CSS para estilos organizados, modulares e temáticos, com variáveis de cor para fácil personalização.
- **HTML5:** Estrutura semântica e acessível da página.
- **Local Storage (Web API):** Utilizado para persistência de dados do jogo no navegador do usuário.
- **btoa() / atob() / encodeURIComponent / decodeURIComponent:** Funções nativas do navegador para codificação e decodificação segura de strings Base64 que contêm caracteres Unicode (como emojis nos ícones de troféu), essenciais para a funcionalidade de exportação/importação de saves.

## 🚀 Como Jogar

### Objetivo

Acumule o máximo de Essência Sombria possível para despertar a Antiga Ameaça e alcançar o domínio final sobre o vazio. A progressão é linear e recompensadora, com marcos que expandem suas capacidades e seu conhecimento do culto.

### Canalização de Essência

- **Canalizar Essência Manualmente:** Clique no botão principal "Canalizar Essência Manualmente" para gerar essência instantaneamente. Observe o valor por clique aumentar com seus upgrades e combos.
- **Sistema de Combo:** Mantenha a cadência de cliques! Cada clique consecutivo, sem uma pausa maior que 2 segundos, aumenta seu contador de combo e, consequentemente, um multiplicador aplicado aos seus ganhos manuais. Estratégia e agilidade são recompensadas!
- **Manifestações Automáticas (`dps` - _damage per second_ ou _darkness per second_):** Adquira upgrades nesta seção para automatizar a geração de essência. Eles continuarão a farmar essência mesmo quando você não estiver clicando ou o jogo estiver em segundo plano.
- **Manifestações de Canalização (`clickMultiplier`):** Estes upgrades aprimoram diretamente o valor base de cada clique manual. Invista neles para transformar seus cliques em poderosas invocações de essência.

### Upgrades e Progressão

- **Upgrades Visíveis:** As novas manifestações (upgrades) aparecerão nas seções correspondentes quando você atingir marcos de essência total ou tiver adquirido unidades de upgrades anteriores, revelando gradualmente suas opções.
- **Modos de Compra:** Escolha a estratégia de compra ideal:
  - `1x`, `10x`, `100x`, `1000x`: Compram a quantidade exata de unidades selecionadas.
  - `MAX`: Calcula e compra o maior número de unidades que sua essência atual permite para aquele upgrade específico.
- **Crescimento Exponencial:** O custo dos upgrades aumenta a cada compra, desafiando você a equilibrar seus investimentos entre diferentes tipos de manifestações e a planejar suas próximas aquisições.

### Sistema de Prestígio

- **Despertar Legado:** Quando você acumular uma quantidade substancial de Essência Total (indicado pelo botão de Prestígio), você poderá "prestigiar". Isso resetará a maior parte do seu progresso, mas em troca, você ganhará **Essência Ancestral**.
- **Upgrades de Legado:** Gaste sua Essência Ancestral em upgrades especiais que concedem multiplicadores permanentes (DPS, Clique ou Global), tornando suas futuras jogadas mais rápidas e eficientes desde o início. Seus troféus também permanecem!

### Troféus

- **Revelações Sombrias:** Acompanhe suas conquistas épicas na seção "Revelações Sombrias". Troféus obtidos brilham intensamente.
- **Troféus Bloqueados:** Troféus que você ainda não ganhou são exibidos de forma esmaecida e misteriosa. Clique neles para desvendar seus segredos: veja seus nomes e descrições temáticas, e descubra os objetivos para desbloqueá-los. Isso o guiará em sua jornada.

## 💾 Gerenciamento de Saves

Seu progresso é a coisa mais importante! O jogo é salvo automaticamente a cada segundo no `localStorage` do seu navegador. Além disso, você tem ferramentas para gerenciar seus saves manualmente:

- **Salvar Jogo Manualmente:** Clique no botão "Salvar Jogo Manualmente" para forçar um salvamento imediato do seu progresso no `localStorage`.
- **Exportar Save:** Deseja fazer um backup do seu jogo ou transferi-lo para outro navegador/dispositivo? Clique em "Exportar Save". Um modal aparecerá com um longo código de texto (codificado em Base64). **Copie este texto** e salve-o em um arquivo de texto (`.txt`) ou em qualquer lugar seguro. Este código representa todo o seu progresso no jogo.
- **Importar Save:** Para carregar um save salvo anteriormente, clique em "Importar Save". Um modal se abrirá, pedindo para você colar o código de save que você exportou.
  - **ATENÇÃO CRÍTICA:** Importar um save **SOBRESCRITA INTEIRAMENTE** o seu progresso atual no navegador. Use com cautela!
  - **Solução de Problemas (`InvalidCharacterError` ou `JSON inválido` ao carregar):** Se, ao recarregar a página, você encontrar um erro relacionado a "caracteres inválidos" ou "JSON corrompido", isso geralmente significa que um save anterior (possivelmente de uma versão antiga do jogo que não lidava bem com emojis ou caracteres especiais) está corrompendo o `localStorage`. Para resolver: 1. Abra as **Ferramentas do Desenvolvedor** do seu navegador (geralmente F12 ou Ctrl+Shift+I). 2. Vá para a aba "**Application**" (ou "Storage" / "Armazenamento"). 3. No menu lateral esquerdo, expanda "Local Storage" e clique no domínio do seu jogo. 4. Procure a entrada `fearIdleGame`. 5. Clique com o botão direito nesta entrada e selecione "**Delete**" ou "**Clear**". 6. Feche as Ferramentas do Desenvolvedor e **recarregue a página do jogo**. Isso iniciará um novo jogo limpo e permitirá que você salve e carregue corretamente a partir de agora.

## ⚙️ Instalação e Execução (Para Desenvolvedores)

Para configurar e executar o projeto localmente em seu ambiente de desenvolvimento:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. O Angular CLI também é necessário para comandos de desenvolvimento e build.

- **Node.js & npm:** Baixe e instale a versão LTS recomendada (geralmente v18 ou v20) em [nodejs.org/en/download/](https://nodejs.org/en/download/).
- **Angular CLI:** Instale globalmente via npm, se ainda não o tiver:

  ```bash
  npm install -g @angular/cli
  ```

### Passos de Instalação

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/SeuUsuario/NomeDoRepositorio.git](https://github.com/SeuUsuario/NomeDoRepositorio.git)
   cd NomeDoRepositorio
   ```

   (Substitua `SeuUsuario/NomeDoRepositorio` pelo caminho real do seu repositório GitHub, e o `cd` para entrar na pasta do projeto).

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

   Este comando lerá o `package.json` e instalará todas as bibliotecas e dependências necessárias.

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   ng serve
   ```

   Isso iniciará o servidor de desenvolvimento do Angular. O aplicativo estará disponível em `http://localhost:4200/` por padrão. Ele recarregará automaticamente no navegador sempre que você fizer uma alteração nos arquivos de origem, agilizando o desenvolvimento.

4. **Construir para Produção:**

   ```bash
   ng build --configuration=production
   ```

   Este comando construirá seu aplicativo Angular para o ambiente de produção. Os arquivos otimizados e prontos para serem hospedados serão gerados na pasta `dist/`.

   - **Para GitHub Pages:** Se você planeja hospedar o jogo no GitHub Pages em um subdiretório do seu usuário (e.g., `https://<seu-usuario>.github.io/seu-repo-nome/`), você precisará adicionar a flag `--base-href` ao comando de build:

     ```bash
     ng build --configuration=production --base-href /<nome-do-seu-repositorio>/
     ```

     Substitua `<nome-do-seu-repositorio>` pelo nome exato do seu repositório GitHub.

## 🤝 Contribuição

Contribuições são **muito bem-vindas**! Se você tiver ideias para novos upgrades, tiers de troféus, melhorias de UI/UX, otimizações de código ou correção de bugs, sinta-se à vontade para:

- Abrir uma **Issue** no repositório GitHub para relatar bugs ou sugerir funcionalidades.
- Enviar um **Pull Request** com suas implementações.

Vamos construir o Culto das Sombras juntos!

## 📄 Licença

Este projeto é de código aberto e está licenciado sob a [Sua Licença, por exemplo: MIT License]. Por favor, veja o arquivo `LICENSE` na raiz do repositório para mais detalhes sobre os termos de uso.

## 🙏 Créditos

Um agradecimento especial às fontes e ferramentas que tornaram este projeto possível:

- **Ícones:** [Flaticon](https://www.flaticon.com/) - Para a vasta coleção de ícones temáticos.
- **Fontes:** [Google Fonts](https://fonts.google.com/) - Para as fontes `Creepster`, `Nanum Myeongjo` e `Roboto Mono`, que ajudam a definir a atmosfera do jogo.
- **Sons:** [Mixkit](https://mixkit.co/free-sound-effects/) - Para os efeitos sonoros que adicionam impacto às ações do jogo.
- **Inspiração de Tema:** Fortemente inspirado por temas góticos, horror cósmico (especialmente a mitologia Lovecraftiana) e a estética da paleta de cores Dracula.
