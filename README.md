# Culto das Sombras: O Despertar Ancestral

## 🕯️ Invoque o Medo, Conquiste o Vazio 🌑

Este é um jogo **idle/clicker** com tema de horror gótico e cósmico, onde seu objetivo é canalizar a essência do medo e despertar entidades ancestrais. Colete essência, aprimore suas habilidades de canalização, invoque manifestações e desbloqueie troféus enquanto mergulha nas profundezas da loucura.

## ✨ Sumário do Jogo

"Culto das Sombras" combina a jogabilidade viciante de clickers idle com uma atmosfera sombria e uma progressão profunda. Gerencie sua essência, compre upgrades que automatizam sua coleta ou aprimoram seus cliques, mantenha combos frenéticos e descubra os segredos das revelações sombrias.

## 🎮 Recursos Principais

- **Jogabilidade Híbrida Idle/Clicker:** Progrida passivamente com manifestações automáticas ou ativamente com cliques manuais e combos.
- **Upgrades Abrangentes:**
  - **Manifestações Automáticas:** Invoque criaturas e rituais que geram essência por segundo.
  - **Manifestações de Canalização:** Aprimore o valor de cada clique manual para ganhos explosivos.
- **Sistema de Combo Dinâmico:** Mantenha uma sequência de cliques para aumentar um multiplicador de combo e maximizar seus ganhos manuais. O combo zera se não houver cliques por 2 segundos.
- **Progressão de Troféus:** Desbloqueie uma vasta coleção de "Revelações Sombrias" por marcos de essência, número de cliques, combos alcançados e upgrades comprados.
  - **Detalhes de Troféus:** Clique em qualquer troféu (mesmo os bloqueados) para ver sua descrição e objetivo.
  - **Visibilidade de Troféus:** Troféus bloqueados são exibidos com um visual embaçado/acinzentado, incentivando a exploração.
- **Persistência de Dados:** Seu progresso é salvo automaticamente a cada segundo no `localStorage` do navegador.
- **Gerenciamento de Saves:**
  - **Salvar Manualmente:** Um botão dedicado para salvar seu progresso a qualquer momento.
  - **Exportar Save:** Gera um código de save (Base64) que pode ser copiado para a área de transferência ou manualmente de um modal.
  - **Importar Save:** Cole um código de save para restaurar seu progresso.
- **Tema Gótico & Lovecraftiano:** Estilo visual e sonora inspirados em temas sombrios, cultos e horrores cósmicos.
- **Responsividade Total:** Design adaptável para proporcionar uma boa experiência em dispositivos desktop e móveis, sem scrolls horizontais.
- **Formatação de Números:** Valores grandes são exibidos com formatação de números inteiros para pequenos, e notação abreviada (K, M, B, T, etc.) para números maiores para melhor legibilidade.

## 🛠️ Tecnologias Utilizadas

- **Angular (v18):** Framework principal para o desenvolvimento da aplicação.
- **TypeScript:** Linguagem de programação tipada para o desenvolvimento do Angular.
- **SCSS (Sass):** Pré-processador CSS para estilos organizados e variáveis temáticas.
- **HTML5:** Estrutura da página.
- **Local Storage (Web API):** Para persistência de dados do jogo no navegador.
- **btoa() / atob() / encodeURIComponent / decodeURIComponent:** Para codificação/decodificação segura de saves contendo caracteres Unicode (emojis, etc.).

## 🚀 Como Jogar

### Objetivo

Acumule o máximo de Essência Sombria possível para despertar a Antiga Ameaça e alcançar o domínio final.

### Canalização de Essência

- **Canalizar Essência Manualmente:** Clique no botão principal para gerar essência instantaneamente.
- **Sistema de Combo:** Cada clique consecutivo dentro de 2 segundos aumenta seu contador de combo e o multiplicador de essência por clique. Se você parar de clicar por mais de 2 segundos, o combo será zerado.
- **Manifestações Automáticas (`dps`):** Compram upgrades que geram essência por segundo (`Essência / segundo`), mesmo quando você não está clicando.
- **Manifestações de Canalização (`clickMultiplier`):** Compram upgrades que aumentam o valor base de cada clique manual, potencializando seus ganhos ativos.

### Upgrades e Progressão

- **Upgrades Visíveis:** As manifestações (upgrades) aparecem na sua lista quando você alcança um certo patamar de essência total ou já comprou alguma unidade delas.
- **Modos de Compra:** Escolha entre comprar `1x`, `10x`, `100x`, `1000x` unidades de um upgrade, ou `MAX` (o máximo possível com sua essência atual). O custo total para a compra selecionada será exibido.
- **Crescimento Exponencial:** O custo dos upgrades aumenta exponencialmente a cada compra, incentivando a diversificação e a estratégia.

### Troféus

- **Revelações Sombrias:** Acompanhe suas conquistas na seção "Revelações Sombrias".
- **Troféus Bloqueados:** Troféus que você ainda não ganhou são exibidos de forma esmaecida. Clique neles para ver seus nomes e descrições, revelando os objetivos para desbloqueá-los.

## 💾 Gerenciamento de Saves

Seu jogo é salvo automaticamente a cada segundo no `localStorage` do seu navegador. Além disso, você tem opções manuais:

- **Salvar Jogo Manualmente:** Clique no botão para forçar um salvamento.
- **Exportar Save:** Gera um código de save (Base64) que você pode copiar do modal exibido e guardar em um arquivo de texto ou em qualquer lugar. Este é um backup do seu progresso.
- **Importar Save:** Abre um modal onde você pode colar um código de save exportado anteriormente para restaurar seu progresso.
  - **ATENÇÃO:** Importar um save irá **sobrescrever** seu progresso atual no navegador.
  - **Em caso de erro ao carregar o save (e.g., `InvalidCharacterError` ou `JSON inválido`):** Isso pode ocorrer se você tiver um save corrompido ou de um formato antigo no `localStorage`. Para resolver, você pode precisar limpar o `localStorage` do seu navegador para o domínio do jogo: 1. Abra as Ferramentas do Desenvolvedor (F12). 2. Vá para a aba "Application" (ou "Storage" / "Armazenamento"). 3. Em "Local Storage", clique no domínio do seu jogo. 4. Clique com o botão direito na entrada `fearIdleGame` e selecione "Delete" ou "Clear". 5. Recarregue a página. Isso iniciará um novo jogo limpo.

## ⚙️ Instalação e Execução (Para Desenvolvedores)

Para configurar e executar o projeto localmente:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. O Angular CLI também é necessário.

- **Node.js & npm:** [Download Node.js](https://nodejs.org/en/download/) (versão LTS recomendada, geralmente v18 ou v20).
- **Angular CLI:** Instale globalmente via npm:

  ```bash
  npm install -g @angular/cli
  ```

### Passos de Instalação

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/SeuUsuario/NomeDoRepositorio.git](https://github.com/SeuUsuario/NomeDoRepositorio.git)
   cd NomeDoRepositorio
   ```

   (Substitua `SeuUsuario/NomeDoRepositorio` pelo caminho real do seu repositório GitHub).

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   ng serve
   ```

   Isso iniciará o servidor de desenvolvimento e o aplicativo estará disponível em `http://localhost:4200/`. Ele recarregará automaticamente se você fizer alguma alteração nos arquivos de origem.

4. **Construir para Produção:**

   ```bash
   ng build --configuration=production
   ```

   Os arquivos de produção serão gerados na pasta `dist/`. Para GitHub Pages, você pode precisar de `--base-href`:

   ```bash
   ng build --configuration=production --base-href /<repo-name>/
   ```

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver ideias para novos upgrades, troféus, melhorias de UI/UX, otimizações de código ou correção de bugs, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## 📄 Licença

Este projeto é licenciado sob a [Sua Licença, por exemplo: MIT License]. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Créditos

- **Ícones:** [Flaticon](https://www.flaticon.com/) (ou outras fontes de ícones utilizadas)
- **Fontes:** [Google Fonts](https://fonts.google.com/) (`Creepster`, `Nanum Myeongjo`, `Roboto Mono`)
- **Sons:** [Mixkit](https://mixkit.co/free-sound-effects/)
- **Inspiração de Tema:** Temas góticos, Lovecraftianos e a paleta de cores Dracula.
