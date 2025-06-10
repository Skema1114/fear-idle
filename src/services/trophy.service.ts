import { Injectable } from '@angular/core';
import { Trophy } from '../interfaces/Trophy';

@Injectable({
  providedIn: 'root',
})
export class TrophyService {
  getTrophiesList(): Trophy[] {
    return [
      {
        title: 'Primeira Brasa',
        description:
          'Você coletou sua primeira essência, um brilho sombrio no abismo.',
        earned: false,
        icon: '🕯️',
      },
      {
        title: 'Eco Inicial',
        description:
          'Sua presença se faz sentir: alcance 100 essências totais. Os sussurros começam.',
        earned: false,
        icon: '🔊',
      },
      {
        title: 'Voto de Sangue',
        description:
          'Um pacto selado com o éter: alcance 1.000 essências totais.',
        earned: false,
        icon: '🩸',
      },
      {
        title: 'Sussurros na Escuridão',
        description:
          'A mente distorce, a escuridão se aprofunda: alcance 10.000 essências totais.',
        earned: false,
        icon: '👻',
      },
      {
        title: 'Ídolo Restaurado',
        description:
          'Um artefato antigo ressurge, vibrando com poder: alcance 50.000 essências totais.',
        earned: false,
        icon: '🗿',
      },
      {
        title: 'Conhecimento Proibido',
        description:
          'Desvende as páginas esquecidas: alcance 100.000 essências totais.',
        earned: false,
        icon: '📚',
      },
      {
        title: 'Marca do Selo',
        description:
          'O selo de um poder maior, agora gravado em sua alma: alcance 500.000 essências totais.',
        earned: false,
        icon: '📜',
      },
      {
        title: 'Fonte da Agonia',
        description:
          'Beba da fonte de onde o medo jorra: alcance 2.500.000 essências totais.',
        earned: false,
        icon: '💧',
      },
      {
        title: 'Rito Completo',
        description:
          'O círculo se fecha, o ritual se cumpre: alcance 10.000.000 essências totais.',
        earned: false,
        icon: '🔮',
      },
      {
        title: 'Harmonia Dissonante',
        description:
          'As vozes do abismo cantam em uníssono: alcance 50.000.000 essências totais.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Profundezas Insanas',
        description:
          'Seu mergulho no vazio concede poder: alcance 250.000.000 essências totais.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'Guardião do Limiar',
        description:
          'Você defende a fronteira entre as realidades: alcance 1.000.000.000 essências totais.',
        earned: false,
        icon: '🛡️',
      },
      {
        title: 'Véu Rasgado',
        description:
          'As cortinas entre os mundos se desfazem: alcance 5.000.000.000 essências totais.',
        earned: false,
        icon: '🌫️',
      },
      {
        title: 'Cólera Cósmica',
        description:
          'A fúria dos deuses ressoa em sua essência: alcance 25.000.000.000 essências totais.',
        earned: false,
        icon: '⛈️',
      },
      {
        title: 'Limiar Dimensional',
        description:
          'Um portal se abre para realidades inomináveis: alcance 100.000.000.000 essências totais.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'O Sonho Interrompido',
        description:
          'Você tocou na mente de seres além da compreensão: alcance 500.000.000.000 essências totais.',
        earned: false,
        icon: '💤',
      },
      {
        title: 'Visão do Caos',
        description:
          'Os olhos da anarquia cósmica se abrem para você: alcance 2.000.000.000.000 essências totais.',
        earned: false,
        icon: '👁️‍🗨️',
      },
      {
        title: 'A Voz do Horror',
        description:
          'Sua palavra ecoa nos abismos do terror: alcance 8.000.000.000.000 essências totais.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'O Despertar Final',
        description:
          'A Antiga Ameaça se ergue em sua plenitude sob seu comando: alcance 30.000.000.000.000 essências totais!',
        earned: false,
        icon: '🐙',
      },
      {
        title: 'Mestre do Vazio',
        description:
          'Você transcendeu as barreiras da existência: alcance 100.000.000.000.000 essências totais.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Conquistador da Realidade',
        description:
          'Nada pode detê-lo, a própria realidade se dobra: alcance 500.000.000.000.000 essências totais.',
        earned: false,
        icon: '🏆',
      },
      {
        title: 'A Ascensão',
        description:
          'Você se tornou uma força cósmica, um farol de medo: alcance 1.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'União Cósmica',
        description:
          'Sua essência se fundiu com o próprio tecido do cosmos: alcance 5.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🪐',
      },
      {
        title: 'Além dos Sonhos',
        description:
          'Seu poder vai além do que qualquer ser vivo pode conceber: alcance 25.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🌠',
      },
      {
        title: 'Deus Exterior',
        description:
          'Você se tornou uma entidade além da compreensão: alcance 100.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🪬',
      },
      {
        title: 'O Vácuo Insondável',
        description:
          'Mergulhe nas profundezas da não-existência: alcance 500.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '⚫',
      },
      {
        title: 'Criador de Universos',
        description:
          'Com sua vontade, novas realidades nascem do caos: alcance 1.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'A Essência Primordial',
        description:
          'Você se tornou a fonte do medo, a substância original do terror: alcance 10.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '⚛️',
      },
      {
        title: 'Além de Toda Compreensão',
        description:
          'Seu ser transcende a própria lógica e razão: alcance 100.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '❓',
      },
      {
        title: 'O Absoluto',
        description:
          'Não há mais nada a ser conquistado. Você é o alfa e o ômega do medo: alcance 1.000.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Infinito e Além',
        description:
          'Sua influência se estende por infinitos universos: alcance 10.000.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'A Última Transcedência',
        description:
          'Você é a própria tecelã do destino cósmico: alcance 100.000.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Rei do Multiverso',
        description:
          'Todos os seres, em todas as dimensões, curvam-se ao seu poder: alcance 1.000.000.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'A Conclusão Inevitável',
        description:
          'O terror final aguarda. Alcance 10.000.000.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🔚',
      },
      {
        title: 'Além da Realidade',
        description:
          'Sua existência agora permeia todas as realidades, transcendendo a forma e o tempo. Alcance 100.000.000.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '💫',
      },
      {
        title: 'O Vazio Profundo',
        description:
          'Você se tornou o próprio abismo de onde todo o medo emana. Alcance 1.000.000.000.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🕳️',
      },

      {
        title: 'Primeiro Sussurro',
        description: 'Sua primeira ação ressoa no vazio. Um começo modesto.',
        earned: false,
        icon: '👆',
      },
      {
        title: 'Toque Persistente',
        description: 'Sua vontade é notável. 100 cliques manuais totais.',
        earned: false,
        icon: '🔘',
      },
      {
        title: 'Dedo Veloz',
        description:
          'A velocidade de suas invocações impressiona. 1.000 cliques manuais totais.',
        earned: false,
        icon: '💨',
      },
      {
        title: 'Ritmo Implacável',
        description:
          'Sua dedicação não conhece limites. 10.000 cliques manuais totais.',
        earned: false,
        icon: '🥁',
      },
      {
        title: 'Pulsar da Essência',
        description:
          'Sua conexão com o medo é forte. 100.000 cliques manuais totais.',
        earned: false,
        icon: '💖',
      },
      {
        title: 'Canalizador Incansável',
        description:
          'A máquina do medo obedece ao seu toque. 1.000.000 cliques manuais totais.',
        earned: false,
        icon: '⚙️',
      },
      {
        title: 'Batedor Cósmico',
        description:
          'Seus cliques ecoam pelos confins da galáxia. 10.000.000 cliques manuais totais.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Mão da Loucura',
        description:
          'Sua mente e seus dedos dançam à beira do abismo. 100.000.000 cliques manuais totais.',
        earned: false,
        icon: '😵‍💫',
      },
      {
        title: 'Pulsar do Vazio',
        description:
          'Cada toque seu é uma pulsação na escuridão. 1.000.000.000 cliques manuais totais.',
        earned: false,
        icon: '🖤',
      },
      {
        title: 'Dedo Dimensional',
        description:
          'Seus toques abrem fendas entre as dimensões. 10.000.000.000 cliques manuais totais.',
        earned: false,
        icon: '🤏',
      },
      {
        title: 'Mestre do Ritmo Cósmico',
        description:
          'Você orquestra a sinfonia do terror. 100.000.000.000 cliques manuais totais.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Voz da Criação',
        description:
          'Seus cliques moldam a própria essência do ser. 1.000.000.000.000 cliques manuais totais.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'O Último Toque',
        description:
          'Você dominou a arte da canalização manual, um verdadeiro prodígio do medo. 10.000.000.000.000 cliques manuais totais.',
        earned: false,
        icon: '🖐️',
      },
      {
        title: 'Conexão Absoluta',
        description:
          'Sua mente se tornou um canal direto para a essência primordial. 100.000.000.000.000 cliques totais.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'O Toque do Caos',
        description:
          'Seus cliques perturbam o equilíbrio cósmico. 1.000.000.000.000.000 cliques totais.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'A Dança dos Universos',
        description:
          'Sua cadência de cliques sincroniza com o movimento das galáxias. 10.000.000.000.000.000 cliques totais.',
        earned: false,
        icon: '🪐',
      },
      {
        title: 'Vontade Inominável',
        description:
          'Sua força de vontade molda o medo em todas as realidades. 100.000.000.000.000.000 cliques totais.',
        earned: false,
        icon: '💪',
      },
      {
        title: 'A Punho do Multiverso',
        description:
          'Seu punho agora abrange múltiplas dimensões, impactando o universo a cada clique. 1.000.000.000.000.000.000 cliques totais.',
        earned: false,
        icon: '👊',
      },

      {
        title: 'Combo Iniciante (2x)',
        description: 'Mantenha o ritmo! Alcance um combo de 2 cliques.',
        earned: false,
        icon: '🤝',
      },
      {
        title: 'Combo Místico (5x)',
        description:
          'Seu toque evoca uma energia incomum. Alcance um combo de 5 cliques.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Combo Febril (10x)',
        description:
          'Uma febre de atividade o consome. Alcance um combo de 10 cliques.',
        earned: false,
        icon: '🔥',
      },
      {
        title: 'Combo Intenso (15x)',
        description:
          'A energia flui ininterrupta. Alcance um combo de 15 cliques.',
        earned: false,
        icon: '💥',
      },
      {
        title: 'Combo Transcendental (20x)',
        description:
          'Seus cliques superam as barreiras do mundano. Alcance um combo de 20 cliques.',
        earned: false,
        icon: '💫',
      },
      {
        title: 'Combo Perfeito (30x)',
        description:
          'A harmonia da destruição. Alcance um combo de 30 cliques.',
        earned: false,
        icon: '💯',
      },
      {
        title: 'Combo Infinito (50x)',
        description: 'Seu ritmo parece eterno. Alcance um combo de 50 cliques.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'Combo Além (75x)',
        description:
          'Seus dedos dançam além da percepção normal. Alcance um combo de 75 cliques.',
        earned: false,
        icon: '⬆️',
      },
      {
        title: 'Combo Cósmico (100x)',
        description:
          'A galáxia ressoa com seus toques. Alcance um combo de 100 cliques.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Combo Celestial (150x)',
        description:
          'Sua sinfonia de cliques toca os céus sombrios. Alcance um combo de 150 cliques.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Combo Divino (200x)',
        description:
          'Uma cadência digna dos deuses exteriores. Alcance um combo de 200 cliques.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'O Último Combo (300x)',
        description:
          'Você atingiu o auge da velocidade e sincronia. Alcance um combo de 300 cliques.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Combo Lenda (500x)',
        description:
          'Seu combo é uma lenda sussurrada nas profundezas. Alcance um combo de 500 cliques.',
        earned: false,
        icon: '🏆',
      },
      {
        title: 'Combo Mítico (1000x)',
        description:
          'Sua maestria no combo é além da crença, um mito vivo. Alcance um combo de 1000 cliques.',
        earned: false,
        icon: '🐉',
      },
      {
        title: 'Combo Abissal (2000x)',
        description:
          'O som de seus cliques faz tremer o abismo. Alcance um combo de 2000 cliques.',
        earned: false,
        icon: '🕳️',
      },
      {
        title: 'Combo Inconcebível (5000x)',
        description:
          'Sua sequência de cliques desafia a própria realidade. Alcance um combo de 5000 cliques.',
        earned: false,
        icon: '😵‍💫',
      },
      {
        title: 'Combo Primordial (10000x)',
        description:
          'Seus cliques ecoam como os primeiros sons da criação. Alcance um combo de 10000 cliques.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'Combo do Vazio (25000x)',
        description:
          'Seu combo transcende a forma e o espaço. Alcance um combo de 25000 cliques.',
        earned: false,
        icon: '⚫',
      },
      {
        title: 'Combo da Anarquia (50000x)',
        description:
          'Sua cadência de cliques leva ao caos total. Alcance um combo de 50000 cliques.',
        earned: false,
        icon: ' anarchist',
      },
      {
        title: 'O Ritmo Final (100000x)',
        description:
          'O ritmo que encerra todas as coisas. Alcance um combo de 100000 cliques.',
        earned: false,
        icon: '⏱️',
      },

      // Troféus de Upgrades Automáticos
      {
        title: 'Primeira Manifestação',
        description:
          'Você invocou seu primeiro poder autônomo. O medo começa a se espalhar por conta própria.',
        earned: false,
        icon: '🌑',
      },
      {
        title: 'Despertar de Símbolos',
        description:
          'Cinco diferentes manifestações sombrias agora trabalham para você. O culto cresce.',
        earned: false,
        icon: '符',
      },
      {
        title: 'Mestre dos Rituais',
        description:
          'Todos os rituais menores estão sob seu domínio. O Tier 2 foi purificado.',
        earned: false,
        icon: '📜',
      },
      {
        title: 'Invocador de Horrores',
        description:
          'Você comanda as entidades do abismo. Todo o Tier 3 foi subjugado.',
        earned: false,
        icon: '👹',
      },
      {
        title: 'Forjador de Portais',
        description:
          'Os portais para outras realidades agora são seus. Todo o Tier 4 foi transposto.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Conjurador Primordial',
        description:
          'Você domina os elementos essenciais da criação de medo. Todo o Tier 5 foi forjado.',
        earned: false,
        icon: '🔱',
      },
      {
        title: 'Conjurador Além',
        description:
          'Você dominou o Tier 6 de manifestações automáticas. Seu alcance é incalculável.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Arsenal do Terror',
        description:
          'Dez tipos diferentes de manifestações automáticas foram invocados. Seu arsenal é vasto.',
        earned: false,
        icon: '🛡️',
      },
      {
        title: 'Força Oculta',
        description:
          'Quinze diferentes manifestações se juntam ao seu culto. Seu poder é inegável.',
        earned: false,
        icon: '💪',
      },
      {
        title: 'Legado do Medo',
        description:
          'Todas as manifestações do Tier 1 foram invocadas. O fundamento do medo está completo.',
        earned: false,
        icon: '💀',
      },
      {
        title: 'Domínio das Sombras',
        description:
          'Cem unidades de cada manifestação do Tier 1. Suas raízes são profundas.',
        earned: false,
        icon: '⚫',
      },
      {
        title: 'Poder de Azathoth',
        description:
          'Cem unidades de cada manifestação do Tier 2. Uma legião de rituais e tomos.',
        earned: false,
        icon: '👁️‍🗨️',
      },
      {
        title: 'Essência da Existência',
        description:
          'Cem unidades de cada manifestação do Tier 3. Você controla a própria substância do terror.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Senhor dos Portais',
        description:
          'Cem unidades de cada manifestação do Tier 4. O multiverso está ao seu alcance.',
        earned: false,
        icon: '🪐',
      },
      {
        title: 'Titã da Realidade',
        description:
          'Cem unidades de cada manifestação do Tier 5. Você molda a existência.',
        earned: false,
        icon: '🌋',
      },
      {
        title: 'Arquimago do Vazio',
        description:
          'Cem unidades de cada manifestação do Tier 6. Seu conhecimento do vácuo é inigualável.',
        earned: false,
        icon: '🧙',
      },
      {
        title: 'Monarca das Trevas',
        description:
          'Cem unidades de CADA manifestação automática. Seu império do medo é absoluto.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Poder Infinito',
        description: 'Tenha 500 unidades de cada upgrade automático.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'Realidade Dominada',
        description: 'Tenha 1000 unidades de cada upgrade automático.',
        earned: false,
        icon: '🏆',
      },
      {
        title: 'Conjurador Final',
        description: 'Tenha 2000 unidades de cada upgrade automático.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Senhor do Medo',
        description: 'Tenha 5000 unidades de cada upgrade automático.',
        earned: false,
        icon: '👹',
      },
      {
        title: 'Criador do Terror',
        description: 'Tenha 10000 unidades de cada upgrade automático.',
        earned: false,
        icon: '👾',
      },

      // Troféus de Upgrades de Clique
      {
        title: 'Primeira Canalização',
        description:
          'Seu primeiro aprimoramento no toque manual. O pulso do medo começa.',
        earned: false,
        icon: '⚡',
      },
      {
        title: 'Maestria da Canalização',
        description:
          'Três aprimoramentos diferentes de canalização foram adquiridos. Sua mente se afina.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'Ritmo Absoluto',
        description:
          'Cada batida sua é uma sinfonia. Todos os upgrades de canalização do Tier 2 foram dominados.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Canto das Trevas',
        description:
          'Sua voz sussurra terrores indizíveis. Todos os upgrades de canalização do Tier 3 foram aprimorados.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'Canalizador Supremo',
        description:
          'Todos os upgrades de canalização do Tier 4 foram dominados. Seu toque é o catalisador final do medo.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Conexão Eterna',
        description:
          'Cinco aprimoramentos diferentes para o clique. Sua mente está eternamente ligada ao terror.',
        earned: false,
        icon: '🔗',
      },
      {
        title: 'Mente Sombria',
        description:
          'Dez aprimoramentos diferentes para o clique. Sua mente é um abismo de poder.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'Devorador de Pensamentos',
        description:
          'Cem unidades de cada upgrade de canalização do Tier 1. Seus cliques devoram a sanidade.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'Voz do Vácuo',
        description:
          'Cem unidades de cada upgrade de canalização do Tier 2. Sua voz ecoa no vazio.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'Pulsação Primordial',
        description:
          'Cem unidades de cada upgrade de canalização do Tier 3. Seus toques ressoam com a criação.',
        earned: false,
        icon: '💖',
      },
      {
        title: 'Mãos da Criação',
        description:
          'Cem unidades de cada upgrade de canalização do Tier 4. Seus toques moldam o terror em si.',
        earned: false,
        icon: '🖐️',
      },
      {
        title: 'Toque Final',
        description: 'Cem unidades de cada upgrade de canalização.',
        earned: false,
        icon: '👆',
      },
      {
        title: 'Ritmo da Existência',
        description: 'Tenha 500 unidades de cada upgrade de canalização.',
        earned: false,
        icon: '🥁',
      },
      {
        title: 'Pulso do Multiverso',
        description: 'Tenha 1000 unidades de cada upgrade de canalização.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Toque Divino',
        description: 'Tenha 2000 unidades de cada upgrade de canalização.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Mão Onipotente',
        description: 'Tenha 5000 unidades de cada upgrade de canalização.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Sinfonia do Horror',
        description: 'Tenha 10000 unidades de cada upgrade de canalização.',
        earned: false,
        icon: '🎶',
      },

      // Troféus Híbridos/Finais
      {
        title: 'Equilíbrio Sombrio',
        description:
          'Você harmonizou os caminhos do medo, investindo em pelo menos 1 de cada tipo de upgrade automático e de canalização.',
        earned: false,
        icon: '☯️',
      },
      {
        title: 'Poder Onisciente',
        description:
          'Sua influência é vasta e profunda: tenha 100 unidades de cada upgrade automático e de canalização.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Verdade Final',
        description:
          'A verdade foi revelada. Desbloqueie todos os outros segredos do Culto das Sombras.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Equilíbrio Absoluto',
        description:
          'Sua maestria nos dois tipos de manifestações é inquestionável. Tenha 500 unidades de cada upgrade automático e de canalização.',
        earned: false,
        icon: '⚖️',
      },
      {
        title: 'Ascensão Gêmea',
        description:
          'Você é o pináculo do poder dual. Tenha 1000 unidades de cada upgrade automático e de canalização.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Sinfonia do Vazio',
        description:
          'Sua manipulação do medo ressoa por todo o vazio. Tenha 2000 unidades de cada upgrade automático e de canalização.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Monarca da Existência',
        description:
          'Você se tornou a força dominante em todas as esferas. Tenha 5000 unidades de cada upgrade automático e de canalização.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Poder Dual',
        description:
          'Tenha 10000 unidades de cada upgrade automático e de canalização.',
        earned: false,
        icon: '☯️',
      },

      // Troféus de Prestígio
      {
        title: 'Primeiro Legado',
        description:
          'Você ousou reiniciar, buscando um poder maior além do véu. Prestigie pela primeira vez.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Legado Consolidado',
        description: 'O caminho do eterno retorno é seu. Prestigie 5 vezes.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Mestre do Legado',
        description: 'Você domina a arte da transcedência. Prestigie 10 vezes.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Herdeiro do Vazio',
        description:
          'Seu legado se estende por muitas existências. Prestigie 25 vezes.',
        earned: false,
        icon: '💎',
      },
      {
        title: 'Lorde da Transcedência',
        description:
          'Sua alma viajou por inumeráveis ciclos. Prestigie 50 vezes.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Poder Ancestral',
        description:
          'Sua primeira Essência Ancestral se manifesta em um upgrade permanente.',
        earned: false,
        icon: 'Ancestral',
      },
      {
        title: 'Força Eterna',
        description:
          'Cinco upgrades de legado diferentes foram assimilados em seu ser.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'Multiplicador Divino',
        description:
          'Sua influência permanente é cem vezes maior que antes. Alcance um multiplicador permanente total de 100x.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Ascensão do Vazio',
        description:
          'Seu poder ignora as leis naturais. Alcance um multiplicador permanente total de 1.000x.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'A Essência Absoluta',
        description:
          'O terror em sua essência agora é um milhão de vezes mais potente. Alcance um multiplicador permanente total de 1.000.000x.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Legado Completo',
        description:
          'Todos os segredos da Essência Ancestral foram desvendados, todos os upgrades de legado adquiridos.',
        earned: false,
        icon: '🏆',
      },
      {
        title: 'O Verdadeiro Absoluto',
        description:
          'Seu legado é uma força incalculável, movendo universos. Alcance um multiplicador permanente total de 1.000.000.000x.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Rei do Legado',
        description: 'Prestigie 100 vezes.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Fenda na Realidade',
        description: 'Prestigie 250 vezes.',
        earned: false,
        icon: '🕳️',
      },
      {
        title: 'O Ciclo Infinito',
        description: 'Prestigie 500 vezes.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'Avatar do Vazio',
        description: 'Prestigie 1000 vezes.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'O Vazio Imortal',
        description: 'Prestigie 2500 vezes.',
        earned: false,
        icon: '🖤',
      },
      {
        title: 'Fonte da Essência Ancestral',
        description: 'Tenha 100 unidades de upgrades de legado.',
        earned: false,
        icon: '💎',
      },
      {
        title: 'Sabedoria Eterna',
        description: 'Tenha 500 unidades de upgrades de legado.',
        earned: false,
        icon: '📚',
      },
      {
        title: 'O Conhecimento Proibido',
        description: 'Tenha 1000 unidades de upgrades de legado.',
        earned: false,
        icon: '👁️',
      },
      {
        title: 'Legado do Vazio',
        description: 'Tenha 2500 unidades de upgrades de legado.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Trono do Conhecimento',
        description: 'Tenha 5000 unidades de upgrades de legado.',
        earned: false,
        icon: '👑',
      },
    ];
  }
}
