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
        description: 'Você coletou sua primeira essência!',
        earned: false,
        icon: '🕯️',
      },
      {
        title: 'Eco Inicial',
        description: 'Alcance 100 essências totais.',
        earned: false,
        icon: '🔊',
      },
      {
        title: 'Voto de Sangue',
        description: 'Alcance 1.000 essências totais.',
        earned: false,
        icon: '🩸',
      },
      {
        title: 'Sussurros na Escuridão',
        description: 'Alcance 10.000 essências totais.',
        earned: false,
        icon: '👻',
      },
      {
        title: 'Ídolo Restaurado',
        description: 'Alcance 50.000 essências totais.',
        earned: false,
        icon: '🗿',
      },
      {
        title: 'Conhecimento Proibido',
        description: 'Alcance 100.000 essências totais.',
        earned: false,
        icon: '📚',
      },
      {
        title: 'Marca do Selo',
        description: 'Alcance 500.000 essências totais.',
        earned: false,
        icon: '📜',
      },
      {
        title: 'Fonte da Agonia',
        description: 'Alcance 2.500.000 essências totais.',
        earned: false,
        icon: '💧',
      },
      {
        title: 'Rito Completo',
        description: 'Alcance 10.000.000 essências totais.',
        earned: false,
        icon: '🔮',
      },
      {
        title: 'Harmonia Dissonante',
        description: 'Alcance 50.000.000 essências totais.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Profundezas Insanas',
        description: 'Alcance 250.000.000 essências totais.',
        earned: false,
        icon: '🌀',
      },
      {
        title: 'Guardião do Limiar',
        description: 'Alcance 1.000.000.000 essências totais.',
        earned: false,
        icon: '🛡️',
      },
      {
        title: 'Véu Rasgado',
        description: 'Alcance 5.000.000.000 essências totais.',
        earned: false,
        icon: '🌫️',
      },
      {
        title: 'Cólera Cósmica',
        description: 'Alcance 25.000.000.000 essências totais.',
        earned: false,
        icon: '⛈️',
      },
      {
        title: 'Limiar Dimensional',
        description: 'Alcance 100.000.000.000 essências totais.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'O Sonho Interrompido',
        description: 'Alcance 500.000.000.000 essências totais.',
        earned: false,
        icon: '💤',
      },
      {
        title: 'Visão do Caos',
        description: 'Alcance 2.000.000.000.000 essências totais.',
        earned: false,
        icon: '👁️‍🗨️',
      },
      {
        title: 'A Voz do Horror',
        description: 'Alcance 8.000.000.000.000 essências totais.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'O Despertar Final',
        description:
          'Alcance 30.000.000.000.000 essências totais. A Ameaça Ancestral se ergue em sua plenitude!',
        earned: false,
        icon: '🐙',
      },
      {
        title: 'Mestre do Vazio',
        description:
          'Alcance 100.000.000.000.000 essências totais. Você transcendeu o medo.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Conquistador da Realidade',
        description:
          'Alcance 500.000.000.000.000 essências totais. Nada pode detê-lo.',
        earned: false,
        icon: '🏆',
      },
      {
        title: 'A Ascensão',
        description:
          'Alcance 1.000.000.000.000.000 essências totais. Você se tornou uma força cósmica.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'União Cósmica',
        description: 'Alcance 5.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🪐',
      },
      {
        title: 'Além dos Sonhos',
        description: 'Alcance 25.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🌠',
      },
      {
        title: 'Deus Exterior',
        description: 'Alcance 100.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🪬',
      },
      {
        title: 'O Vácuo Insondável',
        description: 'Alcance 500.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '⚫',
      },
      {
        title: 'Criador de Universos',
        description: 'Alcance 1.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '🌀',
      }, // 1 Quintillion
      {
        title: 'A Essência Primordial',
        description: 'Alcance 10.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '⚛️',
      },
      {
        title: 'Além de Toda Compreensão',
        description: 'Alcance 100.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '❓',
      },
      {
        title: 'O Absoluto',
        description: 'Alcance 1.000.000.000.000.000.000.000 essências totais.',
        earned: false,
        icon: '👑',
      }, // 1 Sextillion

      // Troféus de Clique Manual
      {
        title: 'Primeiro Sussurro',
        description: 'Realize seu primeiro clique manual.',
        earned: false,
        icon: '👆',
      },
      {
        title: 'Toque Persistente',
        description: 'Realize 100 cliques manuais totais.',
        earned: false,
        icon: '🔘',
      },
      {
        title: 'Dedo Veloz',
        description: 'Realize 1.000 cliques manuais totais.',
        earned: false,
        icon: '💨',
      },
      {
        title: 'Ritmo Implacável',
        description: 'Realize 10.000 cliques manuais totais.',
        earned: false,
        icon: '🥁',
      },
      {
        title: 'Pulsar da Essência',
        description: 'Realize 100.000 cliques manuais totais.',
        earned: false,
        icon: '💖',
      },
      {
        title: 'Canalizador Incansável',
        description: 'Realize 1.000.000 cliques manuais totais.',
        earned: false,
        icon: '⚙️',
      },
      {
        title: 'Batedor Cósmico',
        description: 'Realize 10.000.000 cliques manuais totais.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Mão da Loucura',
        description: 'Realize 100.000.000 cliques manuais totais.',
        earned: false,
        icon: '😵‍💫',
      },
      {
        title: 'Pulsar do Vazio',
        description: 'Realize 1.000.000.000 cliques manuais totais.',
        earned: false,
        icon: '🖤',
      },
      {
        title: 'Dedo Dimensional',
        description: 'Realize 10.000.000.000 cliques manuais totais.',
        earned: false,
        icon: '🤏',
      },
      {
        title: 'Mestre do Ritmo Cósmico',
        description: 'Realize 100.000.000.000 cliques manuais totais.',
        earned: false,
        icon: '🎶',
      },

      // Troféus de Combo
      {
        title: 'Combo Iniciante (2x)',
        description: 'Alcance um combo de 2 cliques.',
        earned: false,
        icon: '🤝',
      },
      {
        title: 'Combo Místico (5x)',
        description: 'Alcance um combo de 5 cliques.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'Combo Febril (10x)',
        description: 'Alcance um combo de 10 cliques.',
        earned: false,
        icon: '🔥',
      },
      {
        title: 'Combo Intenso (15x)',
        description: 'Alcance um combo de 15 cliques.',
        earned: false,
        icon: '💥',
      },
      {
        title: 'Combo Transcendental (20x)',
        description: 'Alcance um combo de 20 cliques.',
        earned: false,
        icon: '💫',
      },
      {
        title: 'Combo Perfeito (30x)',
        description: 'Alcance um combo de 30 cliques.',
        earned: false,
        icon: '💯',
      },
      {
        title: 'Combo Infinito (50x)',
        description: 'Alcance um combo de 50 cliques.',
        earned: false,
        icon: '♾️',
      },
      {
        title: 'Combo Além (75x)',
        description: 'Alcance um combo de 75 cliques.',
        earned: false,
        icon: '⬆️',
      },
      {
        title: 'Combo Cósmico (100x)',
        description: 'Alcance um combo de 100 cliques.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Combo Celestial (150x)',
        description: 'Alcance um combo de 150 cliques.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Combo Divino (200x)',
        description: 'Alcance um combo de 200 cliques.',
        earned: false,
        icon: '✨',
      },
      {
        title: 'O Último Combo (300x)',
        description: 'Alcance um combo de 300 cliques.',
        earned: false,
        icon: '👑',
      },

      // Troféus de Upgrades Automáticos
      {
        title: 'Primeira Manifestação',
        description: 'Compre seu primeiro upgrade automático.',
        earned: false,
        icon: '🌑',
      },
      {
        title: 'Despertar de Símbolos',
        description: 'Compre 5 upgrades automáticos diferentes.',
        earned: false,
        icon: '符',
      },
      {
        title: 'Mestre dos Rituais',
        description: 'Compre todos os upgrades do Tier 2.',
        earned: false,
        icon: '📜',
      },
      {
        title: 'Invocador de Horrores',
        description: 'Compre todos os upgrades do Tier 3.',
        earned: false,
        icon: '👹',
      },
      {
        title: 'Forjador de Portais',
        description: 'Compre todos os upgrades do Tier 4.',
        earned: false,
        icon: '🌌',
      },
      {
        title: 'Conjurador Primordial',
        description: 'Compre todos os upgrades do Tier 5.',
        earned: false,
        icon: '🔱',
      },
      {
        title: 'Arsenal do Terror',
        description: 'Compre 10 upgrades automáticos diferentes.',
        earned: false,
        icon: '🛡️',
      },
      {
        title: 'Força Oculta',
        description: 'Compre 15 upgrades automáticos diferentes.',
        earned: false,
        icon: '💪',
      },
      {
        title: 'Legado do Medo',
        description: 'Compre todos os upgrades automáticos.',
        earned: false,
        icon: '💀',
      },
      {
        title: 'Domínio das Sombras',
        description: 'Tenha 100 unidades de cada upgrade automático do Tier 1.',
        earned: false,
        icon: '⚫',
      },
      {
        title: 'Poder de Azathoth',
        description: 'Tenha 100 unidades de cada upgrade automático do Tier 2.',
        earned: false,
        icon: '👁️‍🗨️',
      },
      {
        title: 'Essência da Existência',
        description: 'Tenha 100 unidades de cada upgrade automático.',
        earned: false,
        icon: '✨',
      },

      // Troféus de Upgrades de Clique
      {
        title: 'Primeira Canalização',
        description: 'Compre seu primeiro upgrade de canalização.',
        earned: false,
        icon: '⚡',
      },
      {
        title: 'Maestria da Canalização',
        description: 'Compre 3 upgrades de canalização diferentes.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'Ritmo Absoluto',
        description: 'Compre todos os upgrades de canalização do Tier 2.',
        earned: false,
        icon: '🎶',
      },
      {
        title: 'Canto das Trevas',
        description: 'Compre todos os upgrades de canalização do Tier 3.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'Canalizador Supremo',
        description: 'Compre todos os upgrades de canalização.',
        earned: false,
        icon: '🌟',
      },
      {
        title: 'Conexão Eterna',
        description: 'Compre 5 upgrades de canalização diferentes.',
        earned: false,
        icon: '🔗',
      },
      {
        title: 'Mente Sombria',
        description: 'Compre 10 upgrades de canalização diferentes.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'Devorador de Pensamentos',
        description:
          'Tenha 100 unidades de cada upgrade de canalização do Tier 1.',
        earned: false,
        icon: '🧠',
      },
      {
        title: 'Voz do Vácuo',
        description:
          'Tenha 100 unidades de cada upgrade de canalização do Tier 2.',
        earned: false,
        icon: '🗣️',
      },
      {
        title: 'Pulsação Primordial',
        description: 'Tenha 100 unidades de cada upgrade de canalização.',
        earned: false,
        icon: '💖',
      },

      // Troféus Híbridos/Finais
      {
        title: 'Equilíbrio Sombrio',
        description:
          'Obtenha pelo menos 1 de cada upgrade automático e de canalização.',
        earned: false,
        icon: '☯️',
      },
      {
        title: 'Poder Onisciente',
        description:
          'Tenha 100 unidades de cada upgrade automático e de canalização.',
        earned: false,
        icon: '👑',
      },
      {
        title: 'Verdade Final',
        description: 'Desbloqueie todos os outros troféus.',
        earned: false,
        icon: '✨',
      },
    ];
  }
}
