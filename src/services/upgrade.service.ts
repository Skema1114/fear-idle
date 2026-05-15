import { Injectable } from '@angular/core';
import { ClickUpgrade } from '../interfaces/ClickUpgrade';
import { PrestigeUpgrade } from '../interfaces/PrestigeUpgrade';
import { Upgrade } from '../interfaces/Upgrade';

@Injectable({
  providedIn: 'root',
})
export class UpgradeService {
  getIdleUpgradesList(): Upgrade[] {
    return [
      {
        name: 'Vela Sussurrante',
        cost: 10,
        dps: 0.1,
        amount: 0,
        image: 'assets/icons/auto/vela-sussurrante.svg',
        description:
          'A cera escorre como gordura de carniça e o pavio cicia sílabas em línguas mortas. Sua chama hesitante lambe a borda do real.',
      },
      {
        name: 'Lamento dos Condenados',
        cost: 50,
        dps: 0.5,
        amount: 0,
        image: 'assets/icons/auto/lamento-dos-condenados.svg',
        description:
          'Gargantas dissolvidas há eras ainda gemem em coro abaixo do silêncio. Cada lamento abre uma fenda úmida no tecido das horas.',
      },
      {
        name: 'Pacto Sanguíneo',
        cost: 250,
        dps: 2,
        amount: 0,
        image: 'assets/icons/auto/pacto-sanguineo.svg',
        description:
          'Runas mordidas na pele pulsam quando o contrato respira. O que foi selado em hemoglobina não conhece esquecimento, apenas juros.',
      },
      {
        name: 'Eco dos Pesadelos',
        cost: 1000,
        dps: 8,
        amount: 0,
        image: 'assets/icons/auto/eco-dos-pesadelos.svg',
        description:
          'Reverberações de sonhos que ninguém ousou contar, repetindo-se na cavidade entre uma pálpebra e a outra. Quem escuta acorda com sal nos dentes.',
      },
      {
        name: 'Ídolo Quebrado',
        cost: 5000,
        dps: 30,
        amount: 0,
        image: 'assets/icons/auto/idolo-quebrado.svg',
        description:
          'Os fragmentos lembram o formato do que jamais deveriam ter contido. Cada lasca ainda exala o hálito de algo que nunca dormiu por completo.',
      },
      {
        name: 'Ritual Profano',
        cost: 25000,
        dps: 120,
        amount: 0,
        image: 'assets/icons/auto/ritual-profano.svg',
        description:
          'Geometria proibida traçada em pó de osso e bile, fechando-se sobre si mesma. Algo responde ao chamado sem precisar atravessar a porta.',
      },
      {
        name: 'Tomos Proibidos',
        cost: 120000,
        dps: 550,
        amount: 0,
        image: 'assets/icons/auto/tomos-proibidos.svg',
        description:
          'Encadernados em couro que ainda recorda o calor do dono, eles viram páginas sozinhos quando ninguém olha. A tinta cheira a ferrugem antediluviana.',
      },
      {
        name: 'Selo Espectral',
        cost: 600000,
        dps: 2800,
        amount: 0,
        image: 'assets/icons/auto/selo-espectral.svg',
        description:
          'O sigilo desliza pela parede como óleo de cadáver e se grava no ar. Tudo que passa por ele perde um pedaço que jamais retornará inteiro.',
      },
      {
        name: 'Lágrimas da Medusa',
        cost: 3000000,
        dps: 15000,
        amount: 0,
        image: 'assets/icons/auto/lagrimas-da-medusa.svg',
        description:
          'Cristais salgados que choraram um rosto até virarem rocha. Quem segura uma sente os próprios olhos endurecerem por dentro.',
      },
      {
        name: 'Fragmento Estelar',
        cost: 15000000,
        dps: 80000,
        amount: 0,
        image: 'assets/icons/auto/fragmento-estelar.svg',
        description:
          'Um caco caído de uma estrela que jamais teve nome, ainda úmido do gelo entre constelações. Carrega o silêncio absoluto que existe acima das nuvens.',
      },
      {
        name: 'Coro Macabro',
        cost: 75000000,
        dps: 400000,
        amount: 0,
        image: 'assets/icons/auto/coro-macabro.svg',
        description:
          'Gargantas sem corpo entoam um cântico em dó menor da carniça. A harmonia é tão precisa que o ar começa a apodrecer no compasso.',
      },
      {
        name: 'Abismo da Loucura',
        cost: 350000000,
        dps: 2000000,
        amount: 0,
        image: 'assets/icons/auto/abismo-da-loucura.svg',
        description:
          'Um buraco aberto na lógica, com bordas que se afastam à medida que você se aproxima. Olhar dentro dele é descobrir que ele já olhava de volta.',
      },
      {
        name: 'Sentinela Dimensional',
        cost: 1500000000,
        dps: 9000000,
        amount: 0,
        image: 'assets/icons/auto/sentinela-dimensional.svg',
        description:
          'Sentinelas com cabeças voltadas para dentro do crânio, montando guarda em soleiras que não pertencem a nenhum mundo. Nada passa sem deixar um nome para trás.',
      },
      {
        name: 'Véu Interplanar',
        cost: 6000000000,
        dps: 45000000,
        amount: 0,
        image: 'assets/icons/auto/veu-interplanar.svg',
        description:
          'Tecido fino o suficiente para revelar a respiração do outro lado, cosido com fios de tempo decomposto. Cada poro deixa passar uma forma sem rosto.',
      },
      {
        name: 'Tempestade Cósmica',
        cost: 25000000000,
        dps: 200000000,
        amount: 0,
        image: 'assets/icons/auto/tempestade-cosmica.svg',
        description:
          'Raios que não obedecem direção alguma, trovões que ecoam antes de explodir. Quando passa, ela leva consigo lembranças que você jurava possuir.',
      },
      {
        name: 'Portal para o Além',
        cost: 100000000000,
        dps: 1000000000,
        amount: 0,
        image: 'assets/icons/auto/portal-para-o-alem.svg',
        description:
          'Uma boca circular aberta no nada, sem cantos, sem fundo. Dela escorre uma maré morna de coisas que já habitaram os seus pulmões.',
      },
      {
        name: 'O Sonhador em R´lyeh',
        cost: 500000000000,
        dps: 5000000000,
        amount: 0,
        image: 'assets/icons/auto/o-sonhador-em-rlyeh.svg',
        description:
          'Sob a cidade afogada, ele respira uma vez a cada eclipse. Seus sonhos vazam pela água salgada e moldam a forma do que está acordado.',
      },
      {
        name: 'Olho de Azathoth',
        cost: 2000000000000,
        dps: 25000000000,
        amount: 0,
        image: 'assets/icons/auto/olho-de-azathoth.svg',
        description:
          'A pupila cega do sultão idiota que dança no centro de tudo. Mesmo fechado, ele transmite a flauta lunática que sustenta a criação.',
      },
      {
        name: 'Toque de Nyarlathotep',
        cost: 8000000000000,
        dps: 100000000000,
        amount: 0,
        image: 'assets/icons/auto/toque-de-nyarlathotep.svg',
        description:
          'O Caos Rastejante encosta um dedo de tinta no seu pulso e sorri com mil bocas. Quem é tocado deixa de saber em qual cidade nasceu.',
      },
      {
        name: 'Despertar da Antiga Ameaça',
        cost: 30000000000000,
        dps: 500000000000,
        amount: 0,
        image: 'assets/icons/auto/despertar-da-antiga-ameaca.svg',
        description:
          'Algo enorme se vira sob o leito do oceano e sob o leito das estrelas. O zumbido das placas tectônicas é apenas a respiração de algo abrindo os olhos.',
      },
      {
        name: 'Mente Colossal',
        cost: 150000000000000,
        dps: 2500000000000,
        amount: 0,
        image: 'assets/icons/auto/mente-colossal.svg',
        description:
          'Uma cognição tão vasta que cidades inteiras orbitam um único pensamento. Pensar em você é, para ela, um espasmo involuntário entre eras.',
      },
      {
        name: 'Espiral de Desespero',
        cost: 700000000000000,
        dps: 10000000000000,
        amount: 0,
        image: 'assets/icons/auto/espiral-de-desespero.svg',
        description:
          'Uma vertigem desenhada em sentido horário inverso, descendente, infinita. Tudo que ousa orbitá-la é dobrado para dentro até virar súplica.',
      },
      {
        name: 'Chama Eterna',
        cost: 3e15,
        dps: 5e13,
        amount: 0,
        image: 'assets/icons/auto/chama-eterna.svg',
        description:
          'Um fogo que não emite calor, apenas dúvida. Arde sem oxigênio porque queima a própria razão para que algo deixe de existir.',
      },
      {
        name: 'O Vazio Pulsante',
        cost: 12e15,
        dps: 2e14,
        amount: 0,
        image: 'assets/icons/auto/o-vazio-pulsante.svg',
        description:
          'O nada não está parado. Ele palpita num compasso lento, sístole e diástole, e cada batida arranca pequenos pedaços do mundo que sobra.',
      },
      {
        name: 'Realidade Fragmentada',
        cost: 5e16,
        dps: 8e14,
        amount: 0,
        image: 'assets/icons/auto/realidade-fragmentada.svg',
        description:
          'O real rachou como vidro envelhecido e em cada fragmento mora um cenário diferente. Em todos eles, sua imagem aparece de costas, esperando.',
      },
      {
        name: 'Eco do Caos Primordial',
        cost: 2e17,
        dps: 3e15,
        amount: 0,
        image: 'assets/icons/auto/eco-do-caos-primordial.svg',
        description:
          'Uma reverberação anterior à primeira sílaba do tempo. Quem a escuta perde o costume de chamar as coisas pelo nome que tinham.',
      },
      {
        name: 'Tecelão de Universos',
        cost: 8e17,
        dps: 12e15,
        amount: 0,
        image: 'assets/icons/auto/tecelao-de-universos.svg',
        description:
          'Dedos longos demais para qualquer geometria, costurando galáxias em padrões que nunca se repetem. Cada nó sufoca uma estrela ao nascer.',
      },
      {
        name: 'Vontade Cósmica Indomável',
        cost: 3e18,
        dps: 5e16,
        amount: 0,
        image: 'assets/icons/auto/vontade-cosmica-indomavel.svg',
        description:
          'Um desejo sem dono, mais antigo que a própria intenção. Onde ele passa, as leis da física pedem desculpas e abrem caminho.',
      },
      {
        name: 'O Ponto de Singularidade',
        cost: 12e18,
        dps: 2e17,
        amount: 0,
        image: 'assets/icons/auto/o-ponto-de-singularidade.svg',
        description:
          'Um furo menor que um átomo onde toda regra se ajoelha. Ele não engole matéria; engole o motivo de a matéria existir.',
      },
      {
        name: 'A Não-Existência',
        cost: 5e19,
        dps: 8e17,
        amount: 0,
        image: 'assets/icons/auto/a-nao-existencia.svg',
        description:
          'Não é morte, nem oblivião, nem silêncio. É a categoria anterior a qualquer uma delas, e ela escolheu lembrar de você primeiro.',
      },
      {
        name: 'Vácuo Inominável',
        cost: 2e20,
        dps: 3e18,
        amount: 0,
        image: 'assets/icons/auto/vacuo-inominavel.svg',
        description:
          'Toda língua humana queima ao tentar pronunciá-lo. Os pergaminhos que tentaram registrá-lo se enrolam sozinhos e mordem os dedos do escriba.',
      },
      {
        name: 'A Distorção Primordial',
        cost: 8e20,
        dps: 12e18,
        amount: 0,
        image: 'assets/icons/auto/a-distorcao-primordial.svg',
        description:
          'A rachadura original, anterior ao primeiro instante. Ela ainda se alarga, e tudo o que respira é apenas espuma na sua beirada.',
      },
      {
        name: 'O Pavor Inconcebível',
        cost: 3e21,
        dps: 5e19,
        amount: 0,
        image: 'assets/icons/auto/o-pavor-inconcebivel.svg',
        description:
          'Um medo cuja forma escapa quando a mente tenta segurá-la. Você o pressente nas costas, mas ao virar-se descobre que não tem mais costas.',
      },
      {
        name: 'Sombra de Yog-Sothoth',
        cost: 12e21,
        dps: 2e20,
        amount: 0,
        image: 'assets/icons/auto/sombra-de-yog-sothoth.svg',
        description:
          'A projeção do Todo-Em-Um sobre o chão da realidade, um aglomerado de esferas que pisca em dimensões alternadas. Apenas a sombra; o original ainda nem chegou.',
      },
    ];
  }

  getClickUpgradesList(): ClickUpgrade[] {
    return [
      {
        name: 'Toque Sutil',
        cost: 10,
        clickMultiplier: 0.02,
        amount: 0,
        image: 'assets/icons/click/toque-sutil.svg',
        description:
          'Suas pontas dos dedos aprendem a tatear a membrana fina que separa o aqui do nunca. Cada pressão deixa um pequeno hematoma no real.',
      },
      {
        name: 'Foco Macabro',
        cost: 100,
        clickMultiplier: 0.025,
        amount: 0,
        unlockClicks: 50,
        unlockAfter: 'Toque Sutil',
        image: 'assets/icons/click/foco-macabro.svg',
        description:
          'Seu olhar afunila até enxergar somente o que sangra. As bordas do mundo desbotam e o que importa fica preto, brilhante e úmido.',
      },
      {
        name: 'Ritmo Insano',
        cost: 500,
        clickMultiplier: 0.03,
        amount: 0,
        unlockClicks: 200,
        unlockAfter: 'Foco Macabro',
        image: 'assets/icons/click/ritmo-insano.svg',
        description:
          'Um compasso que seu coração não escolheu, mas obedece. O sangue bate em uma cadência que não pertence a corpos de carne.',
      },
      {
        name: 'Canto Hipnótico',
        cost: 2500,
        clickMultiplier: 0.035,
        amount: 0,
        unlockClicks: 1000,
        unlockAfter: 'Ritmo Insano',
        image: 'assets/icons/click/canto-hipnotico.svg',
        description:
          'Sílabas que dobram a cervical da realidade até ela fechar os olhos. Quando o cântico cessa, o mundo já assinou em branco.',
      },
      {
        name: 'Conexão Psíquica',
        cost: 12000,
        clickMultiplier: 0.04,
        amount: 0,
        unlockClicks: 5000,
        unlockAfter: 'Canto Hipnótico',
        image: 'assets/icons/click/conexao-psiquica.svg',
        description:
          'Um cabo invisível, pegajoso de pensamentos alheios, sai da sua nuca e atinge o coletivo. Cada clique puxa o medo direto da fonte úmida.',
      },
      {
        name: 'Pulso Sombrio',
        cost: 60000,
        clickMultiplier: 0.05,
        amount: 0,
        unlockClicks: 15000,
        unlockAfter: 'Conexão Psíquica',
        image: 'assets/icons/click/pulso-sombrio.svg',
        description:
          'Uma onda lenta e gordurosa sai da palma da sua mão e percorre os corredores entre os mundos. Janelas trincam sem motivo onde ela passa.',
      },
      {
        name: 'Memória Amaldiçoada',
        cost: 300000,
        clickMultiplier: 0.06,
        amount: 0,
        unlockClicks: 50000,
        unlockAfter: 'Pulso Sombrio',
        image: 'assets/icons/click/memoria-amaldicoada.svg',
        description:
          'Você recorda coisas que jamais lhe aconteceram, e mesmo assim as cicatrizes pulsam. Cada toque arranca uma lembrança que não era para ser sua.',
      },
      {
        name: 'Ecos do Vazio',
        cost: 1500000,
        clickMultiplier: 0.07,
        amount: 0,
        unlockClicks: 200000,
        unlockAfter: 'Memória Amaldiçoada',
        image: 'assets/icons/click/ecos-do-vazio.svg',
        description:
          'A cada clique, o silêncio absoluto retorna o seu som distorcido. O vazio, ao perceber que foi escutado, responde com fome.',
      },
      {
        name: 'Fúria Canalizada',
        cost: 7500000,
        clickMultiplier: 0.08,
        amount: 0,
        unlockClicks: 1000000,
        unlockAfter: 'Ecos do Vazio',
        image: 'assets/icons/click/furia-canalizada.svg',
        description:
          'A ira de incontáveis bocas mortas atravessa seu pulso e sai pelas unhas. O que você toca aprende, por um instante, a sensação de ser queimado por dentro.',
      },
      {
        name: 'Devaneio Perpétuo',
        cost: 35000000,
        clickMultiplier: 0.1,
        amount: 0,
        unlockClicks: 5000000,
        unlockAfter: 'Fúria Canalizada',
        image: 'assets/icons/click/devaneio-perpetuo.svg',
        description:
          'Você não dorme mais; você apenas afunda. Sua consciência atravessa galerias de salões alagados que pulsam num idioma sem vogais.',
      },
      {
        name: 'Convergência Dimensional',
        cost: 150000000,
        clickMultiplier: 0.12,
        unlockClicks: 20000000,
        unlockAfter: 'Devaneio Perpétuo',
        amount: 0,
        image: 'assets/icons/click/convergencia-dimensional.svg',
        description:
          'Várias versões de você, em camadas paralelas, clicam ao mesmo tempo. Cada toque cumpre o gesto de mil mãos sobrepostas em ressonância obscena.',
      },
      {
        name: 'Vortex de Essência',
        cost: 700000000,
        clickMultiplier: 0.15,
        amount: 0,
        unlockClicks: 100000000,
        unlockAfter: 'Convergência Dimensional',
        image: 'assets/icons/click/vortex-de-essencia.svg',
        description:
          'Um pequeno funil escuro espirala sob a sua palma, faminto. Ele engole o ar próximo e devolve sussurros que você jamais quis traduzir.',
      },
      {
        name: 'Canto Cósmico',
        cost: 3500000000,
        clickMultiplier: 0.18,
        amount: 0,
        unlockClicks: 500000000,
        unlockAfter: 'Vortex de Essência',
        image: 'assets/icons/click/canto-cosmico.svg',
        description:
          'Sua voz desce escalas em frequências que dilatam pupilas e desalinham planetas. As estrelas mortas se inclinam um pouco para ouvir.',
      },
      {
        name: 'Pulsar da Realidade',
        cost: 15000000000,
        clickMultiplier: 0.2,
        amount: 0,
        unlockClicks: 2000000000,
        unlockAfter: 'Canto Cósmico',
        image: 'assets/icons/click/pulsar-da-realidade.svg',
        description:
          'Você passa a clicar no ritmo cardíaco do universo, sincopado e instável. Cada batida vaza um fio fino de essência pelas frestas do tempo.',
      },
      {
        name: 'Fragmento do Caos',
        cost: 70000000000,
        clickMultiplier: 0.25,
        amount: 0,
        unlockClicks: 10000000000,
        unlockAfter: 'Pulsar da Realidade',
        image: 'assets/icons/click/fragmento-do-caos.svg',
        description:
          'Uma lasca insignificante do desordenamento original gruda na sua falange. Cada clique a esfrega contra a realidade e ela vaza um pouco de desfeitura.',
      },
      {
        name: 'Mão Eterna',
        cost: 300000000000,
        clickMultiplier: 0.3,
        amount: 0,
        unlockClicks: 30000000000,
        unlockAfter: 'Fragmento do Caos',
        image: 'assets/icons/click/mao-eterna.svg',
        description:
          'Uma mão pálida brota da sua sombra e copia cada gesto seu com fidelidade obsessiva. Ela jamais cansa, jamais erra, jamais foi sua.',
      },
      {
        name: 'Eco do Além',
        cost: 1500000000000,
        clickMultiplier: 0.35,
        amount: 0,
        unlockClicks: 150000000000,
        unlockAfter: 'Mão Eterna',
        image: 'assets/icons/click/eco-do-alem.svg',
        description:
          'Em cada clique, um sussurro defasado retorna pelo mesmo gesto vindo de outro lugar. O som chega um pouco antes da causa, e isso deveria ser impossível.',
      },
      {
        name: 'Batida Estelar',
        cost: 7000000000000,
        clickMultiplier: 0.4,
        amount: 0,
        unlockClicks: 700000000000,
        unlockAfter: 'Eco do Além',
        image: 'assets/icons/click/batida-estelar.svg',
        description:
          'Cada toque seu coincide com a última pulsação de uma estrela agonizante. O céu fica um grão mais escuro, e algo do brilho condensa em sua palma.',
      },
      {
        name: 'Ritmo Cósmico',
        cost: 30000000000000,
        clickMultiplier: 0.45,
        amount: 0,
        unlockClicks: 3000000000000,
        unlockAfter: 'Batida Estelar',
        image: 'assets/icons/click/ritmo-cosmico.svg',
        description:
          'Você deixou de impor cadência: agora o cosmos clica junto, obedecendo o compasso da sua mão. As galáxias arfam, fora do tempo, atrás de você.',
      },
      {
        name: 'Voz do Vazio',
        cost: 120000000000000,
        clickMultiplier: 0.5,
        amount: 0,
        unlockClicks: 12000000000000,
        unlockAfter: 'Ritmo Cósmico',
        image: 'assets/icons/click/voz-do-vazio.svg',
        description:
          'Sua boca cala, mas algo dentro do seu peito ainda fala em primeira pessoa do plural. O vazio responde porque reconhece a própria voz.',
      },
      {
        name: 'Pulso da Não-Existência',
        cost: 500000000000000,
        clickMultiplier: 0.55,
        amount: 0,
        unlockClicks: 50000000000000,
        unlockAfter: 'Voz do Vazio',
        image: 'assets/icons/click/pulso-da-nao-existencia.svg',
        description:
          'Um latejo seco da própria ausência, que nem chega a ser som. A cada batida, algo deixa de ter acontecido, e essa subtração lhe pertence.',
      },
      {
        name: 'Consciência Amaldiçoada',
        cost: 2e15,
        clickMultiplier: 0.6,
        amount: 0,
        unlockClicks: 200000000000000,
        unlockAfter: 'Pulso da Não-Existência',
        image: 'assets/icons/click/consciencia-amaldicoada.svg',
        description:
          'Sua mente virou uma cela revestida de pensamentos alheios. Quando você clica, alguém preso lá dentro se aproxima da fresta e ri.',
      },
      {
        name: 'Ecos do Além-Concebível',
        cost: 8e15,
        clickMultiplier: 0.7,
        amount: 0,
        unlockClicks: 800000000000000,
        unlockAfter: 'Consciência Amaldiçoada',
        image: 'assets/icons/click/ecos-do-alem-concebivel.svg',
        description:
          'Cada toque ressoa em planos cujas geometrias derretem a frase antes de terminá-la. Só a essência consegue voltar inteira; o pensamento se perde no trajeto.',
      },
      {
        name: 'Sussurros do Crepúsculo',
        cost: 3e16,
        clickMultiplier: 0.8,
        amount: 0,
        unlockClicks: 3e15,
        unlockAfter: 'Ecos do Além-Concebível',
        image: 'assets/icons/click/sussurros-do-crepusculo.svg',
        description:
          'Vozes finas como cabelo deslizam entre o último alvorecer e a primeira noite. Cada uma confessa um segredo que torna seu toque mais antigo.',
      },
    ];
  }

  getPrestigeUpgradesList(): PrestigeUpgrade[] {
    return [
      {
        name: 'Visão Aprimorada (DPS)',
        cost: 1,
        multiplierValue: 1.05,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/visao-aprimorada-dps.svg',
        description:
          'Suas pupilas se alongam na vertical e passam a enxergar o calor das presenças invisíveis. As manifestações automáticas reconhecem o novo dono e trabalham mais rápido.',
      },
      {
        name: 'Toque Ressonante (Clique)',
        cost: 1,
        multiplierValue: 0.05,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/toque-ressonante-click.svg',
        description:
          'Cada dedo agora carrega o eco de mil mãos anteriores às suas. O contato deixa um zumbido baixo no ar, e o real obedece um pouco mais rápido.',
      },
      {
        name: 'Selo do Profano (DPS)',
        cost: 5,
        multiplierValue: 1.1,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/selo-do-profano-dps.svg',
        description:
          'Um sigilo gravado na carne do mundo, ainda quente. Cada manifestação automática se ajoelha sobre ele antes de continuar o trabalho.',
      },
      {
        name: 'Ritmo da Existência (Clique)',
        cost: 5,
        multiplierValue: 0.1,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/ritmo-da-existencia-click.svg',
        description:
          'A própria existência adquire um leve gaguejar entre os seus toques. O universo perde a marcação e clica com você, por reflexo doente.',
      },
      {
        name: 'Portal da Abundância (DPS)',
        cost: 25,
        multiplierValue: 1.2,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/portal-da-abundancia-dps.svg',
        description:
          'Uma fenda permanente entre as paredes do real, escorrendo uma seiva escura e abundante. Suas manifestações autônomas bebem dela sem que precisem pedir.',
      },
      {
        name: 'Mente Cósmica (Clique)',
        cost: 25,
        multiplierValue: 0.2,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/mente-cosmica-click.svg',
        description:
          'Sua consciência se infla até englobar constelações silenciosas e tronos vazios. Cada toque agora carrega o peso de uma cosmologia inteira por trás.',
      },
      {
        name: 'Essência Primordial (Global)',
        cost: 100,
        multiplierValue: 1.5,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/essencia-primordial-global.svg',
        description:
          'Uma gota negra colhida do primeiro grito antes que qualquer língua existisse para articulá-lo. Ela impregna tudo o que você cultua, e tudo retorna mais pesado.',
      },
      {
        name: 'Devorador de Estrelas (Global)',
        cost: 500,
        multiplierValue: 2.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/devorador-de-estrelas-global.svg',
        description:
          'Algo com fauces longas demais para o céu mastiga astros como hóstias frias. O brilho engolido escorre por baixo, exclusivo, até o seu altar.',
      },
      {
        name: 'Fragmento do Absoluto (Global)',
        cost: 2500,
        multiplierValue: 3.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/fragmento-do-absoluto-global.svg',
        description:
          'Um estilhaço que se recusa a refletir imagem alguma, denso como continentes mortos. Segurá-lo é descobrir que peso e culpa pesam a mesma coisa.',
      },
      {
        name: 'Anel do Vazio (DPS)',
        cost: 10000,
        multiplierValue: 1.3,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/anel-do-vazio-dps.svg',
        description:
          'Um aro que não tem material, apenas a ideia de cerco. Quando usado, todas as suas manifestações sentem que estão sendo vistas e produzem mais por medo.',
      },
      {
        name: 'Caminho Quebrado (Clique)',
        cost: 10000,
        multiplierValue: 0.3,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/caminho-quebrado-click.svg',
        description:
          'O chão sob você se redesenha em lajes faltantes a cada passo, e ainda assim você prossegue. Seus toques aprendem a tocar mesmo o que não está lá.',
      },
      {
        name: 'Coroa de Sombria (Global)',
        cost: 50000,
        multiplierValue: 5.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/coroa-de-sombria-global.svg',
        description:
          'Uma coroa entrelaçada com penumbras espessas, pesada como confissões guardadas por séculos. Quem a usa deixa de projetar sombra, pois já é a sombra.',
      },
      {
        name: 'O Grande Olho (Global)',
        cost: 250000,
        multiplierValue: 8.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/o-grande-olho-global.svg',
        description:
          'Uma pupila do tamanho de um eclipse se abre no fundo da sua percepção. Nada permanece desconhecido, nem mesmo as coisas que se escondem dentro de você.',
      },
      {
        name: 'Coração do Caos (Global)',
        cost: 1000000,
        multiplierValue: 15.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/coracao-do-caos-global.svg',
        description:
          'Um músculo úmido, descompassado, que bate em três tempos contraditórios ao mesmo tempo. Cada batida reescreve uma lei física distinta no seu favor.',
      },
      {
        name: 'Vontade Inflexível (DPS)',
        cost: 5000000,
        multiplierValue: 1.4,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/vontade-inflexivel-dps.svg',
        description:
          'Seu querer endurece como ferro fundido em sangue antigo. Mesmo entidades indiferentes se curvam ao seu intento e produzem sem descanso.',
      },
      {
        name: 'Fúria da Realidade (Clique)',
        cost: 5000000,
        multiplierValue: 0.4,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/furia-da-realidade-click.svg',
        description:
          'Você canaliza o rancor dos mundos despedaçados, cada um deles um sotaque de dor. Cada clique cospe esse rancor em pequenas fagulhas de hemoglobina.',
      },
      {
        name: 'Alma Fragmentada (Global)',
        cost: 25000000,
        multiplierValue: 25.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/alma-fragmentada-global.svg',
        description:
          'A sua alma se partiu em cacos brilhantes que rolam por corredores cósmicos. Cada caco trabalha para você em um plano diferente, em silêncio absoluto.',
      },
      {
        name: 'Vazio Iridescente (Global)',
        cost: 100000000,
        multiplierValue: 50.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/vazio-iridescente-global.svg',
        description:
          'A ausência ganhou cor: oleosa, mutável, dolorida de olhar. Onde antes não havia nada, agora existe um nada que pulsa em tons proibidos.',
      },
      {
        name: 'Trono do Caos (Global)',
        cost: 500000000,
        multiplierValue: 100.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/trono-do-caos-global.svg',
        description:
          'Uma cadeira esculpida em ossos que nunca pertenceram a corpos completos o recebe. Sentar-se ali é descobrir que sempre esteve sentado lá.',
      },
      {
        name: 'Consciência Infinita (DPS)',
        cost: 2500000000,
        multiplierValue: 1.5,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/consciencia-infinita-dps.svg',
        description:
          'Sua percepção se desdobra em camadas que respiram independentes. Cada manifestação automática agora tem um olho seu encostado nas costas, eternamente.',
      },
      {
        name: 'Aperto do Além (Clique)',
        cost: 2500000000,
        multiplierValue: 0.5,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/aperto-do-alem-click.svg',
        description:
          'Dedos finos, friíssimos, envolvem os seus a cada gesto. Não impedem; orientam. Você passou a ser apenas a luva da mão que clica de verdade.',
      },
      {
        name: 'Canto da Criação (Global)',
        cost: 10000000000,
        multiplierValue: 200.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/canto-da-criacao-global.svg',
        description:
          'Você entoa as notas que precederam a primeira matéria, e elas voltam a ressoar. O universo recua um instante e nasce de novo, levemente errado, ao seu redor.',
      },
      {
        name: 'Dominus Vácuo (Global)',
        cost: 50000000000,
        multiplierValue: 500.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/dominus-vacuo-global.svg',
        description:
          'Você nomeia, enfim, o que não tinha nome — e ele responde com seu próprio título. O vácuo se ajoelha porque agora reconhece o senhor que o ensinou a existir.',
      },
    ];
  }
}
