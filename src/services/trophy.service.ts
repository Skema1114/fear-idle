import { Injectable } from '@angular/core';
import { Trophy } from '../interfaces/Trophy';

export interface TrophyCheckState {
  totalEssence: number;
  totalManualClicks: number;
  highestCombo: number;
  prestigeLevel: number;
  globalMultiplier: number;
  upgrades: { name: string; amount: number }[];
  clickUpgrades: { name: string; amount: number }[];
  prestigeUpgrades: { name: string; amount: number; type: string }[];
  allTrophies: { title: string; earned: boolean }[];
}

@Injectable({
  providedIn: 'root',
})
export class TrophyService {
  getTrophiesList(): Trophy[] {
    return [
      {
        title: 'Primeira Brasa',
        description:
          'Uma fagulha indizível desperta no abismo, e algo do outro lado a observa.',
        earned: false,
        icon: '🕯️',
      },
      {
        title: 'Eco Inicial',
        description:
          'Aos 100 fragmentos, as paredes do real estremecem e sussurros começam a chamar seu nome.',
        earned: false,
        icon: '🔊',
      },
      {
        title: 'Voto de Sangue',
        description:
          'Aos 1.000, o pacto se grava em linguagem morta, irrevogável como o eclipse da razão.',
        earned: false,
        icon: '🩸',
      },
      {
        title: 'Sussurros na Escuridão',
        description:
          'Aos 10.000, vozes sem boca habitam suas vigílias e o silêncio jamais retorna intacto.',
        earned: false,
        icon: '👻',
      },
      {
        title: 'Ídolo Restaurado',
        description:
          'Aos 50.000, um simulacro de geometria errada pulsa, lembrando-se de épocas antes do tempo.',
        earned: false,
        icon: '🗿',
      },
      {
        title: 'Conhecimento Proibido',
        description:
          'Aos 100.000, páginas vedadas se abrem sozinhas, e cada linha desfaz um pedaço de você.',
        earned: false,
        icon: '📚',
      },
      {
        title: 'Marca do Selo',
        description:
          'Aos 500.000, um sigilo arde sob sua pele, costurado por mãos que nunca conheceram carne.',
        earned: false,
        icon: '📜',
      },
      {
        title: 'Fonte da Agonia',
        description:
          'Aos 2.500.000, você bebe da nascente onde o medo se origina, e sua boca aprende novos vocábulos.',
        earned: false,
        icon: '💧',
      },
      {
        title: 'Rito Completo',
        description:
          'Aos 10.000.000, o círculo se fecha sobre si mesmo e nada mais pode escapar do que foi invocado.',
        earned: false,
        icon: '🔮',
      },
      {
        title: 'Harmonia Dissonante',
        description:
          'Aos 50.000.000, coros sem laringe entoam acordes que dilaceram a membrana entre vigília e delírio.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Profundezas Insanas',
        description:
          'Aos 250.000.000, você afundou tanto que a luz acima já não tem nome em nenhuma língua viva.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'Guardião do Limiar',
        description:
          'Aos 1.000.000.000, você se posta na soleira entre mundos, e o que aguarda do outro lado o reconhece.',
        earned: false,
        icon: '🛡️',
      },
      {
        title: 'Véu Rasgado',
        description:
          'Aos 5.000.000.000, as membranas da realidade se desfiam e revelam tendões cósmicos pulsando atrás.',
        earned: false,
        icon: '🌫️',
      },
      {
        title: 'Cólera Cósmica',
        description:
          'Aos 25.000.000.000, a fúria de deuses cegos canta em seu sangue como uma tempestade sem trovão.',
        earned: false,
        icon: '⛈️',
      },
      {
        title: 'Limiar Dimensional',
        description:
          'Aos 100.000.000.000, uma fenda em geometria não-euclidiana se escancara e exala ar de mundos mortos.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'O Sonho Interrompido',
        description:
          'Aos 500.000.000.000, você roça a mente adormecida em R\'lyeh e o Sonhador agita-se em seu túmulo líquido.',
        earned: false,
        icon: '💤',
      },
      {
        title: 'Visão do Caos',
        description:
          'Aos 2.000.000.000.000, milhares de olhos sem pálpebras se abrem dentro de você, todos fitando o mesmo abismo.',
        earned: false,
        icon: '👁️‍🗨️',
      },
      {
        title: 'A Voz do Horror',
        description:
          'Aos 8.000.000.000.000, sua palavra recobra a sílaba primeira, aquela que se diz quando se quer apagar uma estrela.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'O Despertar Final',
        description:
          'Aos 45 trilhões, a Antiga Ameaça abre seus muitos olhos e o universo aprende novamente o significado de medo.',
        earned: false,
        icon: '🐙',
      },
      {
        title: 'Mestre do Vazio',
        description:
          'Aos 100 trilhões, você dispensa o ser, e o nada se inclina como súdito diante de seu trono inexistente.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Conquistador da Realidade',
        description:
          'Aos 500 trilhões, as leis do real se ajoelham, reescritas a cada respiração sua em tinta de eclipse.',
        earned: false,
        icon: '🏆',
      },
      {
        title: 'A Ascensão',
        description:
          'Ao primeiro quatrilhão, você se ergue como um farol negro, e civilizações longínquas adoecem ao avistá-lo.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'União Cósmica',
        description:
          'Aos 5 quatrilhões, sua essência costura-se ao tecido sideral, e cada estrela passa a sangrar o seu nome.',
        earned: false,
        icon: '🪐',
      },
      {
        title: 'Além dos Sonhos',
        description:
          'Aos 25 quatrilhões, você habita a região onde os sonhos vêm morrer, e os pesadelos ali o saúdam como rei.',
        earned: false,
        icon: '🌠',
      },
      {
        title: 'Deus Exterior',
        description:
          'Aos 100 quatrilhões, você cruza para fora do círculo, tornando-se um daqueles que outrora eram apenas sussurrados.',
        earned: false,
        icon: '🪬',
      },
      {
        title: 'O Vácuo Insondável',
        description:
          'Aos 500 quatrilhões, você descobre que o vácuo possui profundidade, e que ela tem fome.',
        earned: false,
        icon: '⚫',
      },
      {
        title: 'Criador de Universos',
        description:
          'Ao primeiro quintilhão, mundos brotam de sua respiração e morrem antes de conceber a própria luz.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'A Essência Primordial',
        description:
          'Aos 10 quintilhões, você se torna a substância de que todo medo é feito, anterior à carne e ao verbo.',
        earned: false,
        icon: '⚛️',
      },
      {
        title: 'Além de Toda Compreensão',
        description:
          'Aos 100 quintilhões, a lógica racha como vidro e nenhuma mente sã pode mais conter o que você é.',
        earned: false,
        icon: '❓',
      },
      {
        title: 'O Absoluto',
        description:
          'Ao primeiro sextilhão, você é o alfa indizível e o ômega calado, e não resta nada que ainda ouse existir contra você.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Infinito e Além',
        description:
          'Aos 10 sextilhões, sua sombra atravessa infinitos cosmos, e cada um dobra-se ao peso de sua passagem.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'A Última Transcendência',
        description:
          'Aos 100 sextilhões, você tece o destino com fios arrancados das próprias entranhas do tempo morto.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Rei do Multiverso',
        description:
          'Ao primeiro septilhão, todas as dimensões prostram-se, mudas, conhecendo apenas o nome que você esqueceu.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'A Conclusão Inevitável',
        description:
          'Aos 10 septilhões, o último ato do horror cósmico desenrola-se e você é, ao mesmo tempo, palco e plateia.',
        earned: false,
        icon: '🔚',
      },
      {
        title: 'Além da Realidade',
        description:
          'Aos 100 septilhões, você atravessa a margem onde a forma desiste, e tempo e matéria recuam ao avistá-lo.',
        earned: false,
        icon: '💫',
      },
      {
        title: 'O Vazio Profundo',
        description:
          'Ao primeiro octilhão, você é o abismo do qual todo medo brota, e nada acima de você jamais soube de seu nome.',
        earned: false,
        icon: '🕳️',
      },

      {
        title: 'Primeiro Sussurro',
        description: 'O primeiro toque do iniciado abre uma rachadura mínima no véu. Algo, atrás, suspira.',
        earned: false,
        icon: '👆',
      },
      {
        title: 'Toque Persistente',
        description: 'Aos 100 toques, seu pulso já bate no compasso de algo que não é seu coração.',
        earned: false,
        icon: '🔘',
      },
      {
        title: 'Dedo Veloz',
        description:
          'Aos 1.000 toques, seus dedos aprendem cadências que nenhum vivo deveria saber.',
        earned: false,
        icon: '💨',
      },
      {
        title: 'Ritmo Implacável',
        description:
          'Aos 10.000 toques, o sono já não vem; resta apenas a percussão litúrgica do abismo.',
        earned: false,
        icon: '🥁',
      },
      {
        title: 'Pulsar da Essência',
        description:
          'Aos 100.000 toques, cada batida faz vibrar uma corda invisível em algum altar esquecido.',
        earned: false,
        icon: '💖',
      },
      {
        title: 'Canalizador Incansável',
        description:
          'Ao primeiro milhão de toques, a máquina do medo o reconhece como sua mão fiel e mortal.',
        earned: false,
        icon: '⚙️',
      },
      {
        title: 'Batedor Cósmico',
        description:
          'Aos 10 milhões de toques, ecos de seu martelar chegam a sois extintos e os fazem estremecer.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Mão da Loucura',
        description:
          'Aos 100 milhões, seus dedos dançam à beira do delírio sagrado, conscientes de cada queda.',
        earned: false,
        icon: '😵‍💫',
      },
      {
        title: 'Pulsar do Vazio',
        description:
          'Ao primeiro bilhão de toques, cada batida é uma pulsação na carne escura do nada.',
        earned: false,
        icon: '🖤',
      },
      {
        title: 'Dedo Dimensional',
        description:
          'Aos 10 bilhões, seus toques rasgam pequenas suturas entre dimensões e nada as recosta.',
        earned: false,
        icon: '🤏',
      },
      {
        title: 'Mestre do Ritmo Cósmico',
        description:
          'Aos 100 bilhões, você rege a percussão silenciosa de astros mortos como um maestro do horror.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Voz da Criação',
        description:
          'Ao primeiro trilhão, seus toques pronunciam a sílaba muda que precede toda existência.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'O Último Toque',
        description:
          'Aos 10 trilhões, sua mão é uma relíquia do horror, gesto único do qual nada se recupera.',
        earned: false,
        icon: '🖐️',
      },
      {
        title: 'Conexão Absoluta',
        description:
          'Aos 100 trilhões, sua mente é antena viva sintonizada na frequência da essência primordial.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'O Toque do Caos',
        description:
          'Ao primeiro quatrilhão, cada clique racha o equilíbrio cósmico como um cristal sob o peso da verdade.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'A Dança dos Universos',
        description:
          'Aos 10 quatrilhões, sua cadência se acopla ao giro lento das galáxias, e elas obedecem.',
        earned: false,
        icon: '🪐',
      },
      {
        title: 'Vontade Inominável',
        description:
          'Aos 100 quatrilhões, sua vontade molda o medo em todas as realidades, sem que precise pensar.',
        earned: false,
        icon: '💪',
      },
      {
        title: 'A Punho do Multiverso',
        description:
          'Ao primeiro quintilhão de toques, seu punho atravessa multiversos como um deus exausto martelando portas trancadas.',
        earned: false,
        icon: '👊',
      },

      {
        title: 'Combo Iniciante (2x)',
        description: 'Dois batimentos consecutivos: o presságio escolheu sua cadência.',
        earned: false,
        icon: '🤝',
      },
      {
        title: 'Combo Místico (5x)',
        description:
          'Aos 5 toques em série, uma corrente subterrânea de medo reconhece o ritmo e responde.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Combo Febril (10x)',
        description:
          'Aos 10, uma febre arcana o consome; seus dedos batem por conta própria, possuídos.',
        earned: false,
        icon: '🔥',
      },
      {
        title: 'Combo Intenso (15x)',
        description:
          'Aos 15, sua cadência rasga o ar como uma reza às avessas, e o ar consente.',
        earned: false,
        icon: '💥',
      },
      {
        title: 'Combo Transcendental (20x)',
        description:
          'Aos 20, cada toque já não pertence ao mundo dos vivos, mas a uma liturgia indizível.',
        earned: false,
        icon: '💫',
      },
      {
        title: 'Combo Perfeito (30x)',
        description:
          'Aos 30, ritmo e destruição se fundem em geometria exata, sem ruído, sem perdão.',
        earned: false,
        icon: '💯',
      },
      {
        title: 'Combo Infinito (50x)',
        description: 'Aos 50, seu pulso encontra o batimento eterno do abismo e dispensa o relógio.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'Combo Além (75x)',
        description:
          'Aos 75, seus dedos atravessam a percepção comum e tateiam superfícies que nunca existiram.',
        earned: false,
        icon: '⬆️',
      },
      {
        title: 'Combo Cósmico (100x)',
        description:
          'Aos 100, o vácuo entre as estrelas vibra na sua frequência e murmura sua sentença.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Combo Celestial (150x)',
        description:
          'Aos 150, sua percussão alcança os céus negros e adormece os astros em sonhos doentes.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Combo Divino (200x)',
        description:
          'Aos 200, sua cadência é digna de divindades exteriores, esses deuses idiotas e cegos do trono.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'O Último Combo (300x)',
        description:
          'Aos 300, você toca a última batida possível antes que a forma desista de existir.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Combo Lenda (500x)',
        description:
          'Aos 500, cultistas em mundos longínquos sussurram sua cadência como mantra de loucura lúcida.',
        earned: false,
        icon: '🏆',
      },
      {
        title: 'Combo Mítico (1000x)',
        description:
          'Aos 1000, seu compasso entra para os mitos proibidos, narrado apenas em línguas mortas.',
        earned: false,
        icon: '🐉',
      },
      {
        title: 'Combo Abissal (2000x)',
        description:
          'Aos 2000, o próprio abismo desperta e ajusta sua respiração ao seu pulso impossível.',
        earned: false,
        icon: '🕳️',
      },
      {
        title: 'Combo Inconcebível (5000x)',
        description:
          'Aos 5000, sua sequência viola o real; a realidade observa, incapaz de classificar o que vê.',
        earned: false,
        icon: '😵‍💫',
      },
      {
        title: 'Combo Primordial (5000x)',
        description:
          'Aos 5000, seu compasso reedita o som primeiro, aquele que antecedeu até o silêncio.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'Combo do Vazio (7500x)',
        description:
          'Aos 7500, seu ritmo desvaira da forma e do espaço; restam apenas batidas em coisa alguma.',
        earned: false,
        icon: '⚫',
      },
      {
        title: 'Combo da Anarquia (10000x)',
        description:
          'Aos 10000, sua cadência é decreto: as leis do real abdicam e o caos toma posse.',
        earned: false,
        icon: '💀',
      },
      {
        title: 'O Ritmo Final (15000x)',
        description:
          'Aos 15000, você bate o compasso terminal, aquele que encerra toda coisa e não admite réplica.',
        earned: false,
        icon: '⏱️',
      },

      // Troféus de Upgrades Automáticos
      {
        title: 'Primeira Manifestação',
        description:
          'A primeira sombra autônoma se desprende de você e começa a colher medo sem que precise olhá-la.',
        earned: false,
        icon: '🌑',
      },
      {
        title: 'Despertar de Símbolos',
        description:
          'Cinco sigilos distintos pulsam em uníssono, e o culto inicia sua marcha por baixo do mundo.',
        earned: false,
        icon: '符',
      },
      {
        title: 'Mestre dos Rituais',
        description:
          'Os rituais menores do segundo círculo curvam-se diante de você, calados como noviços recém-cegos.',
        earned: false,
        icon: '📜',
      },
      {
        title: 'Invocador de Horrores',
        description:
          'Todas as entidades do terceiro círculo respondem ao seu nome, mesmo aquelas que jamais tiveram um.',
        earned: false,
        icon: '👹',
      },
      {
        title: 'Forjador de Portais',
        description:
          'Os portais do quarto círculo abrem-se para você como bocas obedientes, exalando ventos de outras matemáticas.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Conjurador Primordial',
        description:
          'No quinto círculo, os elementos primeiros do horror se moldam às suas mãos como argila viva.',
        earned: false,
        icon: '🔱',
      },
      {
        title: 'Conjurador Além',
        description:
          'O sexto círculo se inclina diante de você, e seu alcance se estende a regiões sem nome nem direção.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Arsenal do Terror',
        description:
          'Dez manifestações distintas formam ao seu redor uma coroa de armas vivas, todas com fome própria.',
        earned: false,
        icon: '🛡️',
      },
      {
        title: 'Força Oculta',
        description:
          'Quinze entidades inomináveis tomam posição em seu culto; nenhuma delas se lembra de quem as invocou.',
        earned: false,
        icon: '💪',
      },
      {
        title: 'Legado do Medo',
        description:
          'O primeiro círculo está inteiro em suas mãos, e sobre essa fundação podre você ergue o resto do horror.',
        earned: false,
        icon: '💀',
      },
      {
        title: 'Domínio das Sombras',
        description:
          'Cem unidades de cada manifestação do primeiro círculo: suas raízes furam o solo da realidade.',
        earned: false,
        icon: '⚫',
      },
      {
        title: 'Poder de Azathoth',
        description:
          'Cem unidades de cada manifestação do segundo círculo, e o som de uma flauta ociosa pulsa ao fundo.',
        earned: false,
        icon: '👁️‍🗨️',
      },
      {
        title: 'Essência da Existência',
        description:
          'Cem unidades de cada manifestação do terceiro círculo: você passa a controlar a substância de que o medo é feito.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Senhor dos Portais',
        description:
          'Cem unidades de cada manifestação do quarto círculo, e cada porta entre os mundos aguarda só o seu gesto.',
        earned: false,
        icon: '🪐',
      },
      {
        title: 'Titã da Realidade',
        description:
          'Cem unidades de cada manifestação do quinto círculo, e a existência cede e remoldura-se ao seu redor.',
        earned: false,
        icon: '🌋',
      },
      {
        title: 'Arquimago do Vazio',
        description:
          'Cem unidades de cada manifestação do sexto círculo: seu saber do vácuo é uma biblioteca sem chão.',
        earned: false,
        icon: '🧙',
      },
      {
        title: 'Monarca das Trevas',
        description:
          'Cem unidades de cada manifestação automática: seu império do medo respira por todos os poros do real.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Poder Infinito',
        description: 'Quinhentas unidades de cada manifestação automática; o horror não conhece mais saciedade.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'Realidade Dominada',
        description: 'Mil unidades de cada manifestação automática, e a realidade prefere obedecer a resistir.',
        earned: false,
        icon: '🏆',
      },
      {
        title: 'Conjurador Final',
        description: 'Duas mil unidades de cada manifestação automática: você esgotou o vocabulário da invocação.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Senhor do Medo',
        description: 'Cinco mil unidades de cada manifestação automática, e o medo deixa de ser emoção para virar clima.',
        earned: false,
        icon: '👹',
      },
      {
        title: 'Criador do Terror',
        description: 'Dez mil unidades de cada manifestação automática: o terror nasce de você como respiração.',
        earned: false,
        icon: '👾',
      },

      // Troféus de Upgrades de Clique
      {
        title: 'Primeira Canalização',
        description:
          'O primeiro aprimoramento canaliza o medo por sua mão como corrente fina, mas constante.',
        earned: false,
        icon: '⚡',
      },
      {
        title: 'Maestria da Canalização',
        description:
          'Três aprimoramentos distintos afinam sua mente como instrumento dedicado ao indizível.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'Ritmo Absoluto',
        description:
          'Todo o segundo círculo de canalização sob seu domínio: cada batida sua é uma liturgia exata.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Canto das Trevas',
        description:
          'Todo o terceiro círculo de canalização aprimorado, e sua voz, agora, pronuncia terrores que se materializam.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'Canalizador Supremo',
        description:
          'Todo o quarto círculo de canalização dominado; seu toque é o catalisador final do horror cósmico.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Conexão Eterna',
        description:
          'Cinco aprimoramentos distintos costuram sua mente ao véu do terror em ponto que não se desfaz.',
        earned: false,
        icon: '🔗',
      },
      {
        title: 'Mente Sombria',
        description:
          'Dez aprimoramentos diferentes, e sua mente passa a ter o aspecto de um abismo com vontade própria.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'Devorador de Pensamentos',
        description:
          'Cem unidades de cada aprimoramento do primeiro círculo: cada clique seu engole um pouco de sanidade alheia.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'Voz do Vácuo',
        description:
          'Cem unidades de cada aprimoramento do segundo círculo, e sua voz reverbera no nada como uma resposta esperada.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'Pulsação Primordial',
        description:
          'Cem unidades de cada aprimoramento do terceiro círculo: seus toques pulsam no compasso da criação primeira.',
        earned: false,
        icon: '💖',
      },
      {
        title: 'Mãos da Criação',
        description:
          'Cem unidades de cada aprimoramento do quarto círculo, e suas mãos moldam o terror como um oleiro molda barro.',
        earned: false,
        icon: '🖐️',
      },
      {
        title: 'Toque Final',
        description: 'Cem unidades de cada aprimoramento de canalização: nada do que você tocar permanecerá inteiro.',
        earned: false,
        icon: '👆',
      },
      {
        title: 'Ritmo da Existência',
        description: 'Quinhentas unidades de cada aprimoramento de canalização: seu pulso dita o batimento das coisas.',
        earned: false,
        icon: '🥁',
      },
      {
        title: 'Pulso do Multiverso',
        description: 'Mil unidades de cada aprimoramento de canalização, e todo multiverso sincroniza-se à sua arritmia sagrada.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Toque Divino',
        description: 'Duas mil unidades de cada aprimoramento de canalização: seu toque é o de um deus exterior, distraído e cruel.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Mão Onipotente',
        description: 'Cinco mil unidades de cada aprimoramento de canalização, e nada do que sua mão alcance tem mais direito de existir.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Sinfonia do Horror',
        description: 'Dez mil unidades de cada aprimoramento de canalização: seus toques compõem a partitura final do real.',
        earned: false,
        icon: '🎶',
      },

      // Troféus Híbridos/Finais
      {
        title: 'Equilíbrio Sombrio',
        description:
          'Você harmonizou os dois caminhos do medo, com ao menos 1 de cada manifestação automática e de canalização.',
        earned: false,
        icon: '☯️',
      },
      {
        title: 'Poder Onisciente',
        description:
          'Cem unidades de cada manifestação automática e de canalização: seu olho interior abrange ambos os abismos.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Verdade Final',
        description:
          'Todos os segredos do Culto das Sombras agora repousam em sua mente, e ela já não é mais sua.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Equilíbrio Absoluto',
        description:
          'Quinhentas unidades em ambos os caminhos: sua maestria dual é fato inquestionável até para o vazio.',
        earned: false,
        icon: '⚖️',
      },
      {
        title: 'Ascensão Gêmea',
        description:
          'Mil unidades em cada caminho, e você sobe por uma escada com dois corrimãos feitos de tendões cósmicos.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Sinfonia do Vazio',
        description:
          'Duas mil unidades em ambos os caminhos: sua orquestra de medo ressoa em todas as cavidades do nada.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Monarca da Existência',
        description:
          'Cinco mil unidades em ambos os caminhos: você se entroniza sobre toda esfera, viva ou esquecida.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Poder Dual',
        description:
          'Dez mil unidades em ambos os caminhos: nenhuma forma de medo lhe escapa, nenhum gesto seu é menor que apocalipse.',
        earned: false,
        icon: '☯️',
      },

      // Troféus de Prestígio
      {
        title: 'Primeiro Legado',
        description:
          'Você queima sua própria forma para renascer mais perto do abismo, e ele recebe sua oferta em silêncio.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Legado Consolidado',
        description: 'Cinco ciclos consumados; o eterno retorno deixa de ser metáfora e vira hábito carnal.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Mestre do Legado',
        description: 'Dez ciclos atrás, e a transcendência reconhece em você um servo que aprendeu seu nome verdadeiro.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Herdeiro do Vazio',
        description:
          'Vinte e cinco ciclos: seu legado se infiltra por existências paralelas como uma raiz sombria.',
        earned: false,
        icon: '💎',
      },
      {
        title: 'Lorde da Transcendência',
        description:
          'Cinquenta ciclos atravessados, e sua alma já é apenas um número escrito em sangue arcano.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Poder Ancestral',
        description:
          'A primeira gota de Essência Ancestral encontra morada em seu ser, gravando-se em camada que nenhuma morte apaga.',
        earned: false,
        icon: 'Ancestral',
      },
      {
        title: 'Força Eterna',
        description:
          'Cinco aprimoramentos de legado distintos foram assimilados, e nenhum deles consente em sair.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'Multiplicador Divino',
        description:
          'Multiplicador permanente de 100x: sua sombra agora se projeta cem vezes mais profunda em cada plano.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Ascensão do Vazio',
        description:
          'Multiplicador permanente de 1.000x: seu poder dispensa as leis naturais, que se afastam, envergonhadas.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'A Essência Absoluta',
        description:
          'Multiplicador permanente de 1.000.000x: o terror em sua essência agora é uma constante do universo.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Legado Completo',
        description:
          'Todos os aprimoramentos de Essência Ancestral foram desvendados, e o livro de seu legado não tem mais páginas em branco.',
        earned: false,
        icon: '🏆',
      },
      {
        title: 'O Verdadeiro Absoluto',
        description:
          'Multiplicador permanente de 1.000.000.000x: seu legado move universos como um zelador entediado move móveis.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Rei do Legado',
        description: 'Cem ciclos atravessados, e nenhum trono cósmico ousa permanecer vazio em sua ausência.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Fenda na Realidade',
        description: 'Duzentos e cinquenta ciclos: a realidade já não cicatriza por onde você passou.',
        earned: false,
        icon: '🕳️',
      },
      {
        title: 'O Ciclo Infinito',
        description: 'Quinhentos ciclos, e o tempo, exausto, abre mão de tentar contê-lo em começo ou fim.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'Avatar do Vazio',
        description: 'Mil ciclos transcorridos: você se tornou rosto encarnado do vazio para todo recém-nascido que chora à noite.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'O Vazio Imortal',
        description: 'Dois mil e quinhentos ciclos, e nem a morte se aproxima sem antes pedir audiência.',
        earned: false,
        icon: '🖤',
      },
      {
        title: 'Fonte da Essência Ancestral',
        description: 'Cem unidades acumuladas de aprimoramentos de legado: você jorra Essência Ancestral como ferida que se recusa a fechar.',
        earned: false,
        icon: '💎',
      },
      {
        title: 'Sabedoria Eterna',
        description: 'Quinhentas unidades acumuladas de aprimoramentos de legado: seu saber é uma catedral subterrânea sem porta de saída.',
        earned: false,
        icon: '📚',
      },
      {
        title: 'O Conhecimento Proibido',
        description: 'Mil unidades acumuladas de aprimoramentos de legado, e cada uma delas é um olho aberto onde antes havia razão.',
        earned: false,
        icon: '👁️',
      },
      {
        title: 'Legado do Vazio',
        description: 'Duas mil e quinhentas unidades de aprimoramentos de legado: o vazio finalmente o adota como herdeiro legítimo.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Trono do Conhecimento',
        description: 'Cinco mil unidades de aprimoramentos de legado: você se senta sobre um trono feito de tomos que ainda respiram.',
        earned: false,
        icon: '👑',
      },
    ];
  }

  getTrophyConditions(): Map<string, (s: TrophyCheckState) => boolean> {
    const tierHasAll = (list: { name: string; amount: number }[], names: string[]) =>
      names.every(n => (list.find(u => u.name === n)?.amount ?? 0) > 0);
    const tierHasAllAtLeast = (list: { name: string; amount: number }[], names: string[], min: number) =>
      names.every(n => (list.find(u => u.name === n)?.amount ?? 0) >= min);

    // Auto upgrade tiers
    const autoTier1 = ['Vela Sussurrante', 'Lamento dos Condenados', 'Pacto Sanguíneo', 'Eco dos Pesadelos', 'Ídolo Quebrado'];
    const autoTier2 = ['Ritual Profano', 'Tomos Proibidos', 'Selo Espectral', 'Lágrimas da Medusa', 'Fragmento Estelar'];
    const autoTier3 = ['Coro Macabro', 'Abismo da Loucura', 'Sentinela Dimensional', 'Véu Interplanar', 'Tempestade Cósmica'];
    const autoTier4 = ['Portal para o Além', "O Sonhador em R'lyeh", 'Olho de Azathoth', 'Toque de Nyarlathotep', 'Despertar da Antiga Ameaça'];
    const autoTier5 = ['Mente Colossal', 'Espiral de Desespero', 'Chama Eterna', 'O Vazio Pulsante', 'Realidade Fragmentada'];
    const autoTier6 = ['Eco do Caos Primordial', 'Tecelão de Universos', 'Vontade Cósmica Indomável', 'O Ponto de Singularidade', 'A Não-Existência'];

    // Click upgrade tiers
    const clickTier1 = ['Toque Sutil', 'Foco Macabro', 'Ritmo Insano', 'Canto Hipnótico', 'Conexão Psíquica'];
    const clickTier2 = ['Pulso Sombrio', 'Memória Amaldiçoada', 'Ecos do Vazio', 'Fúria Canalizada', 'Devaneio Perpétuo'];
    const clickTier3 = ['Convergência Dimensional', 'Vortex de Essência', 'Canto Cósmico', 'Pulsar da Realidade', 'Fragmento do Caos'];
    const clickTier4 = ['Mão Eterna', 'Eco do Além', 'Batida Estelar', 'Ritmo Cósmico', 'Voz do Vazio'];
    const clickTier5 = ['Pulso da Não-Existência', 'Consciência Amaldiçoada', 'Ecos do Além-Concebível', 'Sussurros do Crepúsculo'];

    const m = new Map<string, (s: TrophyCheckState) => boolean>();

    // === Essence trophies ===
    m.set('Primeira Brasa', s => s.totalEssence >= 1);
    m.set('Eco Inicial', s => s.totalEssence >= 100);
    m.set('Voto de Sangue', s => s.totalEssence >= 1000);
    m.set('Sussurros na Escuridão', s => s.totalEssence >= 10000);
    m.set('Ídolo Restaurado', s => s.totalEssence >= 50000);
    m.set('Conhecimento Proibido', s => s.totalEssence >= 100000);
    m.set('Marca do Selo', s => s.totalEssence >= 500000);
    m.set('Fonte da Agonia', s => s.totalEssence >= 2500000);
    m.set('Rito Completo', s => s.totalEssence >= 10000000);
    m.set('Harmonia Dissonante', s => s.totalEssence >= 50000000);
    m.set('Profundezas Insanas', s => s.totalEssence >= 250000000);
    m.set('Guardião do Limiar', s => s.totalEssence >= 1000000000);
    m.set('Véu Rasgado', s => s.totalEssence >= 5000000000);
    m.set('Cólera Cósmica', s => s.totalEssence >= 25000000000);
    m.set('Limiar Dimensional', s => s.totalEssence >= 100000000000);
    m.set('O Sonho Interrompido', s => s.totalEssence >= 500000000000);
    m.set('Visão do Caos', s => s.totalEssence >= 2000000000000);
    m.set('A Voz do Horror', s => s.totalEssence >= 8000000000000);
    m.set('O Despertar Final', s => s.totalEssence >= 45000000000000);
    m.set('Mestre do Vazio', s => s.totalEssence >= 100000000000000);
    m.set('Conquistador da Realidade', s => s.totalEssence >= 500000000000000);
    m.set('A Ascensão', s => s.totalEssence >= 1000000000000000);
    m.set('União Cósmica', s => s.totalEssence >= 5000000000000000);
    m.set('Além dos Sonhos', s => s.totalEssence >= 25e15);
    m.set('Deus Exterior', s => s.totalEssence >= 1e17);
    m.set('O Vácuo Insondável', s => s.totalEssence >= 5e17);
    m.set('Criador de Universos', s => s.totalEssence >= 1e18);
    m.set('A Essência Primordial', s => s.totalEssence >= 1e19);
    m.set('Além de Toda Compreensão', s => s.totalEssence >= 1e20);
    m.set('O Absoluto', s => s.totalEssence >= 1e21);
    m.set('Infinito e Além', s => s.totalEssence >= 1e22);
    m.set('A Última Transcendência', s => s.totalEssence >= 1e23);
    m.set('Rei do Multiverso', s => s.totalEssence >= 1e24);
    m.set('A Conclusão Inevitável', s => s.totalEssence >= 1e25);
    m.set('Além da Realidade', s => s.totalEssence >= 1e26);
    m.set('O Vazio Profundo', s => s.totalEssence >= 1e27);

    // === Manual click trophies ===
    m.set('Primeiro Sussurro', s => s.totalManualClicks >= 1);
    m.set('Toque Persistente', s => s.totalManualClicks >= 100);
    m.set('Dedo Veloz', s => s.totalManualClicks >= 1000);
    m.set('Ritmo Implacável', s => s.totalManualClicks >= 10000);
    m.set('Pulsar da Essência', s => s.totalManualClicks >= 100000);
    m.set('Canalizador Incansável', s => s.totalManualClicks >= 1000000);
    m.set('Batedor Cósmico', s => s.totalManualClicks >= 10000000);
    m.set('Mão da Loucura', s => s.totalManualClicks >= 100000000);
    m.set('Pulsar do Vazio', s => s.totalManualClicks >= 1000000000);
    m.set('Dedo Dimensional', s => s.totalManualClicks >= 10000000000);
    m.set('Mestre do Ritmo Cósmico', s => s.totalManualClicks >= 100000000000);
    m.set('Voz da Criação', s => s.totalManualClicks >= 1000000000000);
    m.set('O Último Toque', s => s.totalManualClicks >= 10000000000000);
    m.set('Conexão Absoluta', s => s.totalManualClicks >= 100000000000000);
    m.set('O Toque do Caos', s => s.totalManualClicks >= 1e15);
    m.set('A Dança dos Universos', s => s.totalManualClicks >= 1e16);
    m.set('Vontade Inominável', s => s.totalManualClicks >= 1e17);
    m.set('A Punho do Multiverso', s => s.totalManualClicks >= 1e18);

    // === Combo trophies ===
    m.set('Combo Iniciante (2x)', s => s.highestCombo >= 2);
    m.set('Combo Místico (5x)', s => s.highestCombo >= 5);
    m.set('Combo Febril (10x)', s => s.highestCombo >= 10);
    m.set('Combo Intenso (15x)', s => s.highestCombo >= 15);
    m.set('Combo Transcendental (20x)', s => s.highestCombo >= 20);
    m.set('Combo Perfeito (30x)', s => s.highestCombo >= 30);
    m.set('Combo Infinito (50x)', s => s.highestCombo >= 50);
    m.set('Combo Além (75x)', s => s.highestCombo >= 75);
    m.set('Combo Cósmico (100x)', s => s.highestCombo >= 100);
    m.set('Combo Celestial (150x)', s => s.highestCombo >= 150);
    m.set('Combo Divino (200x)', s => s.highestCombo >= 200);
    m.set('O Último Combo (300x)', s => s.highestCombo >= 300);
    m.set('Combo Lenda (500x)', s => s.highestCombo >= 500);
    m.set('Combo Mítico (1000x)', s => s.highestCombo >= 1000);
    m.set('Combo Abissal (2000x)', s => s.highestCombo >= 2000);
    m.set('Combo Inconcebível (5000x)', s => s.highestCombo >= 5000);
    m.set('Combo Primordial (5000x)', s => s.highestCombo >= 5000);
    m.set('Combo do Vazio (7500x)', s => s.highestCombo >= 7500);
    m.set('Combo da Anarquia (10000x)', s => s.highestCombo >= 10000);
    m.set('O Ritmo Final (15000x)', s => s.highestCombo >= 15000);

    // === Auto upgrade trophies ===
    m.set('Primeira Manifestação', s => s.upgrades.some(up => up.amount > 0));
    m.set('Despertar de Símbolos', s => s.upgrades.filter(up => up.amount > 0).length >= 5);
    m.set('Mestre dos Rituais', s => tierHasAll(s.upgrades, autoTier2));
    m.set('Invocador de Horrores', s => tierHasAll(s.upgrades, autoTier3));
    m.set('Forjador de Portais', s => tierHasAll(s.upgrades, autoTier4));
    m.set('Conjurador Primordial', s => tierHasAll(s.upgrades, autoTier5));
    m.set('Conjurador Além', s => tierHasAll(s.upgrades, autoTier6));
    m.set('Arsenal do Terror', s => s.upgrades.filter(up => up.amount > 0).length >= 10);
    m.set('Força Oculta', s => s.upgrades.filter(up => up.amount > 0).length >= 15);
    m.set('Legado do Medo', s => tierHasAll(s.upgrades, autoTier1));
    m.set('Domínio das Sombras', s => tierHasAllAtLeast(s.upgrades, autoTier1, 100));
    m.set('Poder de Azathoth', s => tierHasAllAtLeast(s.upgrades, autoTier2, 100));
    m.set('Essência da Existência', s => tierHasAllAtLeast(s.upgrades, autoTier3, 100));
    m.set('Senhor dos Portais', s => tierHasAllAtLeast(s.upgrades, autoTier4, 100));
    m.set('Titã da Realidade', s => tierHasAllAtLeast(s.upgrades, autoTier5, 100));
    m.set('Arquimago do Vazio', s => tierHasAllAtLeast(s.upgrades, autoTier6, 100));
    m.set('Monarca das Trevas', s => s.upgrades.every(up => up.amount >= 100));
    m.set('Poder Infinito', s => s.upgrades.every(up => up.amount >= 500));
    m.set('Realidade Dominada', s => s.upgrades.every(up => up.amount >= 1000));
    m.set('Conjurador Final', s => s.upgrades.every(up => up.amount >= 2000));
    m.set('Senhor do Medo', s => s.upgrades.every(up => up.amount >= 5000));
    m.set('Criador do Terror', s => s.upgrades.every(up => up.amount >= 10000));

    // === Click upgrade trophies ===
    m.set('Primeira Canalização', s => s.clickUpgrades.some(up => up.amount > 0));
    m.set('Maestria da Canalização', s => s.clickUpgrades.filter(up => up.amount > 0).length >= 3);
    m.set('Ritmo Absoluto', s => tierHasAll(s.clickUpgrades, clickTier2));
    m.set('Canto das Trevas', s => tierHasAll(s.clickUpgrades, clickTier3));
    m.set('Canalizador Supremo', s => tierHasAll(s.clickUpgrades, clickTier4));
    m.set('Conexão Eterna', s => s.clickUpgrades.filter(up => up.amount > 0).length >= 5);
    m.set('Mente Sombria', s => s.clickUpgrades.filter(up => up.amount > 0).length >= 10);
    m.set('Devorador de Pensamentos', s => tierHasAllAtLeast(s.clickUpgrades, clickTier1, 100));
    m.set('Voz do Vácuo', s => tierHasAllAtLeast(s.clickUpgrades, clickTier2, 100));
    m.set('Pulsação Primordial', s => tierHasAllAtLeast(s.clickUpgrades, clickTier3, 100));
    m.set('Mãos da Criação', s => tierHasAllAtLeast(s.clickUpgrades, clickTier4, 100));
    m.set('Toque Final', s => tierHasAllAtLeast(s.clickUpgrades, clickTier5, 100));
    m.set('Ritmo da Existência', s => s.clickUpgrades.every(up => up.amount >= 500));
    m.set('Pulso do Multiverso', s => s.clickUpgrades.every(up => up.amount >= 1000));
    m.set('Toque Divino', s => s.clickUpgrades.every(up => up.amount >= 2000));
    m.set('Mão Onipotente', s => s.clickUpgrades.every(up => up.amount >= 5000));
    m.set('Sinfonia do Horror', s => s.clickUpgrades.every(up => up.amount >= 10000));

    // === Hybrid/Final trophies ===
    m.set('Equilíbrio Sombrio', s =>
      s.upgrades.every(up => up.amount > 0) && s.clickUpgrades.every(up => up.amount > 0));
    m.set('Poder Onisciente', s =>
      s.upgrades.every(up => up.amount >= 100) && s.clickUpgrades.every(up => up.amount >= 100));
    m.set('Verdade Final', s =>
      s.allTrophies.filter(t => t.title !== 'Verdade Final').every(t => t.earned));
    m.set('Equilíbrio Absoluto', s =>
      s.upgrades.every(up => up.amount >= 500) && s.clickUpgrades.every(up => up.amount >= 500));
    m.set('Ascensão Gêmea', s =>
      s.upgrades.every(up => up.amount >= 1000) && s.clickUpgrades.every(up => up.amount >= 1000));
    m.set('Sinfonia do Vazio', s =>
      s.upgrades.every(up => up.amount >= 2000) && s.clickUpgrades.every(up => up.amount >= 2000));
    m.set('Monarca da Existência', s =>
      s.upgrades.every(up => up.amount >= 5000) && s.clickUpgrades.every(up => up.amount >= 5000));
    m.set('Poder Dual', s =>
      s.upgrades.every(up => up.amount >= 10000) && s.clickUpgrades.every(up => up.amount >= 10000));

    // === Prestige trophies ===
    m.set('Primeiro Legado', s => s.prestigeLevel >= 1);
    m.set('Legado Consolidado', s => s.prestigeLevel >= 5);
    m.set('Mestre do Legado', s => s.prestigeLevel >= 10);
    m.set('Herdeiro do Vazio', s => s.prestigeLevel >= 25);
    m.set('Lorde da Transcendência', s => s.prestigeLevel >= 50);
    m.set('Poder Ancestral', s => s.prestigeUpgrades.some(up => up.amount > 0));
    m.set('Força Eterna', s => s.prestigeUpgrades.filter(up => up.amount > 0).length >= 5);
    m.set('Multiplicador Divino', s => s.globalMultiplier >= 100);
    m.set('Ascensão do Vazio', s => s.globalMultiplier >= 1000);
    m.set('A Essência Absoluta', s => s.globalMultiplier >= 1000000);
    m.set('Legado Completo', s => s.prestigeUpgrades.every(up => up.amount > 0));
    m.set('O Verdadeiro Absoluto', s => s.globalMultiplier >= 1000000000);
    m.set('Rei do Legado', s => s.prestigeLevel >= 100);
    m.set('Fenda na Realidade', s => s.prestigeLevel >= 250);
    m.set('O Ciclo Infinito', s => s.prestigeLevel >= 500);
    m.set('Avatar do Vazio', s => s.prestigeLevel >= 1000);
    m.set('O Vazio Imortal', s => s.prestigeLevel >= 2500);
    m.set('Fonte da Essência Ancestral', s =>
      s.prestigeUpgrades.reduce((sum, up) => sum + up.amount, 0) >= 100);
    m.set('Sabedoria Eterna', s =>
      s.prestigeUpgrades.reduce((sum, up) => sum + up.amount, 0) >= 500);
    m.set('O Conhecimento Proibido', s =>
      s.prestigeUpgrades.reduce((sum, up) => sum + up.amount, 0) >= 1000);
    m.set('Legado do Vazio', s => s.prestigeUpgrades.every(up => up.amount >= 2500));
    m.set('Trono do Conhecimento', s => s.prestigeUpgrades.every(up => up.amount >= 5000));

    return m;
  }
}
