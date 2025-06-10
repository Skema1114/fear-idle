import { CommonModule } from '@angular/common';
import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Upgrade {
  name: string;
  cost: number;
  dps: number;
  amount: number;
  image?: string;
}

interface ClickUpgrade {
  name: string;
  cost: number;
  clickMultiplier: number;
  amount: number;
  image?: string;
}

interface Trophy {
  title: string;
  description: string;
  earned: boolean;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  essence = signal(0);
  totalEssence = signal(0);

  upgradesList = signal<Upgrade[]>([
    // Tier 1: Símbolos e manifestações menores (base 10, multi 0.1-8)
    {
      name: 'Vela Sussurrante',
      cost: 10,
      dps: 0.1,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/907/907933.png',
    },
    {
      name: 'Lamento dos Condenados',
      cost: 50,
      dps: 0.5,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3067/3067098.png',
    },
    {
      name: 'Pacto Sanguíneo',
      cost: 250,
      dps: 2,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/2903/2903332.png',
    },
    {
      name: 'Eco dos Pesadelos',
      cost: 1000,
      dps: 8,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/9218/9218151.png',
    },
    {
      name: 'Ídolo Quebrado',
      cost: 5000,
      dps: 30,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/6743/6743513.png',
    },
    // Tier 2: Rituais e invocações menores (base 25k, multi 120-80k)
    {
      name: 'Ritual Profano',
      cost: 25000,
      dps: 120,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/1077/1077209.png',
    },
    {
      name: 'Tomos Proibidos',
      cost: 120000,
      dps: 550,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/2917/2917409.png',
    },
    {
      name: 'Selo Espectral',
      cost: 600000,
      dps: 2800,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3887/3887103.png',
    },
    {
      name: 'Lágrimas da Medusa',
      cost: 3000000,
      dps: 15000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3067/3067160.png',
    },
    {
      name: 'Fragmento Estelar',
      cost: 15000000,
      dps: 80000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
    },
    // Tier 3: Influências e manifestações maiores (base 75M, multi 400k-200M)
    {
      name: 'Coro Macabro',
      cost: 75000000,
      dps: 400000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/4802/4802061.png',
    },
    {
      name: 'Abismo da Loucura',
      cost: 350000000,
      dps: 2000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/6007/6007323.png',
    },
    {
      name: 'Sentinela Dimensional',
      cost: 1500000000,
      dps: 9000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3887/3887163.png',
    },
    {
      name: 'Véu Interplanar',
      cost: 6000000000,
      dps: 45000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/976/976856.png',
    },
    {
      name: 'Tempestade Cósmica',
      cost: 25000000000,
      dps: 200000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/601/601053.png',
    },
    // Tier 4: Entidades e portais maiores (base 100B, multi 1B-500B)
    {
      name: 'Portal para o Além',
      cost: 100000000000,
      dps: 1000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/9804/9804595.png',
    },
    {
      name: 'O Sonhador em R´lyeh',
      cost: 500000000000,
      dps: 5000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3067/3067149.png',
    },
    {
      name: 'Olho de Azathoth',
      cost: 2000000000000,
      dps: 25000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/1628/1628795.png',
    },
    {
      name: 'Toque de Nyarlathotep',
      cost: 8000000000000,
      dps: 100000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3887/3887081.png',
    },
    {
      name: 'Despertar da Antiga Ameaça',
      cost: 30000000000000,
      dps: 500000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/8687/8687102.png',
    },
    // Tier 5: Entidades Primordiais e Realidades Distorcidas (novo tier)
    {
      name: 'Mente Colossal',
      cost: 150000000000000,
      dps: 2500000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3887/3887163.png',
    },
    {
      name: 'Espiral de Desespero',
      cost: 700000000000000,
      dps: 10000000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/6007/6007323.png',
    },
    {
      name: 'Chama Eterna',
      cost: 3000000000000000,
      dps: 50000000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/2903/2903332.png',
    },
    {
      name: 'O Vazio Pulsante',
      cost: 12000000000000000,
      dps: 200000000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/9804/9804595.png',
    },
    {
      name: 'Realidade Fragmentada',
      cost: 50000000000000000,
      dps: 800000000000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
    },
  ]);

  clickUpgradesList = signal<ClickUpgrade[]>([
    {
      name: 'Toque Sutil',
      cost: 10,
      clickMultiplier: 0.1,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/1828/1828775.png',
    },
    {
      name: 'Foco Macabro',
      cost: 100,
      clickMultiplier: 0.5,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/10423/10423773.png',
    },
    {
      name: 'Ritmo Insano',
      cost: 500,
      clickMultiplier: 2,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/2903/2903330.png',
    },
    {
      name: 'Canto Hipnótico',
      cost: 2500,
      clickMultiplier: 10,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/2903/2903336.png',
    },
    {
      name: 'Conexão Psíquica',
      cost: 12000,
      clickMultiplier: 50,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/2903/2903328.png',
    },
    {
      name: 'Pulso Sombrio',
      cost: 60000,
      clickMultiplier: 200,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/9218/9218151.png',
    },
    {
      name: 'Memória Amaldiçoada',
      cost: 300000,
      clickMultiplier: 1000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/6743/6743513.png',
    },
    {
      name: 'Ecos do Vazio',
      cost: 1500000,
      clickMultiplier: 5000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/6007/6007323.png',
    },
    {
      name: 'Fúria Canalizada',
      cost: 7500000,
      clickMultiplier: 25000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/4802/4802061.png',
    },
    {
      name: 'Devaneio Perpétuo',
      cost: 35000000,
      clickMultiplier: 120000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/3067/3067149.png',
    },
    {
      name: 'Convergência Dimensional',
      cost: 150000000,
      clickMultiplier: 500000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/9804/9804595.png',
    },
    {
      name: 'Vortex de Essência',
      cost: 700000000,
      clickMultiplier: 2000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/601/601053.png',
    },
    {
      name: 'Canto Cósmico',
      cost: 3500000000,
      clickMultiplier: 8000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/2903/2903336.png',
    },
    {
      name: 'Pulsar da Realidade',
      cost: 15000000000,
      clickMultiplier: 35000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
    },
    {
      name: 'Fragmento do Caos',
      cost: 70000000000,
      clickMultiplier: 150000000,
      amount: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/1628/1628795.png',
    },
  ]);

  trophiesList = signal<Trophy[]>([
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
  ]);

  numericPurchaseModes: number[] = [1, 10, 100, 1000];
  purchaseModes: (number | string)[] = [...this.numericPurchaseModes, 'max'];

  currentPurchaseMode: number | string = 1;

  trophyModal = signal(false);
  lastUnlockedTrophy = signal<Trophy | null>(null);

  showImportModal: boolean = false;
  importedSaveData: string = '';

  showExportTextModal: boolean = false;
  exportedSaveText: string = '';

  showTrophyDetailsModal: boolean = false;
  selectedTrophy: Trophy | null = null;

  baseClickValue = signal(1);
  comboCount = signal(0);
  highestCombo = signal(0);
  totalManualClicks = signal(0);
  private comboResetTimeout: any;

  clickValue = computed(() => {
    return (
      this.baseClickValue() +
      this.clickUpgradesList().reduce(
        (acc, up) => acc + up.clickMultiplier * up.amount,
        0
      )
    );
  });

  comboMultiplier = computed(() => {
    return 1 + this.comboCount() * 0.02;
  });

  unlockedClickUpgrades = computed(() => {
    const total = this.totalEssence();
    const totalClicksMade = this.totalManualClicks();

    return this.clickUpgradesList()
      .map((up) => {
        let unlocked = up.amount > 0;
        if (!unlocked) {
          if (up.name === 'Toque Sutil') unlocked = true;
          else if (up.name === 'Foco Macabro')
            unlocked =
              totalClicksMade >= 50 ||
              this.clickUpgradesList().find((u) => u.name === 'Toque Sutil')
                ?.amount! > 0;
          else if (up.name === 'Ritmo Insano')
            unlocked =
              totalClicksMade >= 200 ||
              this.clickUpgradesList().find((u) => u.name === 'Foco Macabro')
                ?.amount! > 0;
          else if (up.name === 'Canto Hipnótico')
            unlocked =
              totalClicksMade >= 1000 ||
              this.clickUpgradesList().find((u) => u.name === 'Ritmo Insano')
                ?.amount! > 0;
          else if (up.name === 'Conexão Psíquica')
            unlocked =
              totalClicksMade >= 5000 ||
              this.clickUpgradesList().find((u) => u.name === 'Canto Hipnótico')
                ?.amount! > 0;
          else if (up.name === 'Pulso Sombrio')
            unlocked =
              totalClicksMade >= 15000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Conexão Psíquica'
              )?.amount! > 0;
          else if (up.name === 'Memória Amaldiçoada')
            unlocked =
              totalClicksMade >= 50000 ||
              this.clickUpgradesList().find((u) => u.name === 'Pulso Sombrio')
                ?.amount! > 0;
          else if (up.name === 'Ecos do Vazio')
            unlocked =
              totalClicksMade >= 200000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Memória Amaldiçoada'
              )?.amount! > 0;
          else if (up.name === 'Fúria Canalizada')
            unlocked =
              totalClicksMade >= 1000000 ||
              this.clickUpgradesList().find((u) => u.name === 'Ecos do Vazio')
                ?.amount! > 0;
          else if (up.name === 'Devaneio Perpétuo')
            unlocked =
              totalClicksMade >= 5000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Fúria Canalizada'
              )?.amount! > 0;
          else if (up.name === 'Convergência Dimensional')
            unlocked =
              totalClicksMade >= 20000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Devaneio Perpétuo'
              )?.amount! > 0;
          else if (up.name === 'Vortex de Essência')
            unlocked =
              totalClicksMade >= 100000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Convergência Dimensional'
              )?.amount! > 0;
          else if (up.name === 'Canto Cósmico')
            unlocked =
              totalClicksMade >= 500000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Vortex de Essência'
              )?.amount! > 0;
          else if (up.name === 'Pulsar da Realidade')
            unlocked =
              totalClicksMade >= 2000000000 ||
              this.clickUpgradesList().find((u) => u.name === 'Canto Cósmico')
                ?.amount! > 0;
          else if (up.name === 'Fragmento do Caos')
            unlocked =
              totalClicksMade >= 10000000000 ||
              this.clickUpgradesList().find(
                (u) => u.name === 'Pulsar da Realidade'
              )?.amount! > 0;
        }
        return { ...up, unlocked };
      })
      .filter((up) => up.unlocked);
  });

  essencePerSecond = computed(() =>
    this.upgradesList().reduce((acc, up) => acc + up.dps * up.amount, 0)
  );

  upgrades = computed(() => {
    const total = this.totalEssence();
    return this.upgradesList()
      .map((up) => ({
        ...up,
        unlocked: total >= up.cost / 2 || up.amount > 0,
      }))
      .filter((up) => up.unlocked);
  });

  unlockedUpgrades = computed(() => {
    return this.upgrades().filter((up) => up.unlocked);
  });

  private gameInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.loadGame();
    this.startGameLoop();
  }

  ngOnDestroy(): void {
    clearInterval(this.gameInterval);
    if (this.comboResetTimeout) {
      clearTimeout(this.comboResetTimeout);
    }
    this.saveGame();
  }

  private startGameLoop(): void {
    this.gameInterval = setInterval(() => {
      const gain = this.essencePerSecond();
      if (gain > 0) {
        this.essence.update((v) => v + gain);
        this.totalEssence.update((v) => v + gain);
        this.checkTrophyProgress(
          this.totalEssence(),
          this.totalManualClicks(),
          this.highestCombo()
        );
      }
      this.saveGame();
    }, 1000);
  }

  public darkEssence(): number {
    return Math.floor(this.essence());
  }

  manualClick(): void {
    this.totalManualClicks.update((v) => v + 1);
    this.comboCount.update((v) => v + 1);

    if (this.comboCount() > this.highestCombo()) {
      this.highestCombo.set(this.comboCount());
    }

    if (this.comboResetTimeout) {
      clearTimeout(this.comboResetTimeout);
    }

    this.comboResetTimeout = setTimeout(() => {
      this.comboCount.set(0);
      console.log('Combo resetado!');
    }, 2000);

    const gain = this.clickValue() * this.comboMultiplier();
    this.essence.update((v) => v + gain);
    this.totalEssence.update((v) => v + gain);

    this.checkTrophyProgress(
      this.totalEssence(),
      this.totalManualClicks(),
      this.highestCombo()
    );
  }

  // --- Funções de Save/Load ---
  private saveGame(): void {
    const gameState = {
      essence: this.essence(),
      totalEssence: this.totalEssence(),
      upgradesList: this.upgradesList(),
      trophiesList: this.trophiesList(),
      clickUpgradesList: this.clickUpgradesList(),
      highestCombo: this.highestCombo(),
      totalManualClicks: this.totalManualClicks(),
    };
    try {
      const jsonString = JSON.stringify(gameState);
      const utf8Encoded = unescape(encodeURIComponent(jsonString));
      const saveDataString = btoa(utf8Encoded);

      localStorage.setItem('fearIdleGame', saveDataString);
      console.log('Jogo salvo no localStorage.');
    } catch (e) {
      console.error('Erro ao salvar o jogo no localStorage:', e);
    }
  }

  saveGameManually(): void {
    this.saveGame();
    alert('Jogo salvo manualmente!');
  }

  exportSave(): void {
    const gameState = {
      essence: this.essence(),
      totalEssence: this.totalEssence(),
      upgradesList: this.upgradesList(),
      trophiesList: this.trophiesList(),
      clickUpgradesList: this.clickUpgradesList(),
      highestCombo: this.highestCombo(),
      totalManualClicks: this.totalManualClicks(),
    };
    try {
      const jsonString = JSON.stringify(gameState);
      const utf8Encoded = unescape(encodeURIComponent(jsonString));
      const saveDataString = btoa(utf8Encoded);

      this.exportedSaveText = saveDataString;
      this.showExportTextModal = true;

      navigator.clipboard
        .writeText(saveDataString)
        .then(() => {})
        .catch((err) => {
          console.warn(
            'Falha ao copiar automaticamente para a área de transferência:',
            err
          );
        });
    } catch (e: any) {
      console.error('Erro ao gerar save:', e);
      alert(
        'Erro ao gerar save. Verifique o console para detalhes. Detalhes: ' +
          (e.message || 'Erro desconhecido.')
      );
    }
  }

  copyExportedSaveText(): void {
    navigator.clipboard
      .writeText(this.exportedSaveText)
      .then(() => {
        alert('Código do save copiado para a área de transferência!');
      })
      .catch((err) => {
        console.error('Erro ao copiar o texto do save:', err);
        alert(
          'Não foi possível copiar automaticamente. Por favor, selecione o texto no campo e copie-o manualmente.'
        );
      });
  }

  loadGame(): void {
    try {
      const savedState = localStorage.getItem('fearIdleGame');
      if (savedState) {
        let decodedData: string;
        try {
          const decodedBase64 = atob(savedState);
          decodedData = decodeURIComponent(escape(decodedBase64));
        } catch (e: any) {
          console.error('Erro de decodificação no loadGame (Base64/UTF-8):', e);
          throw new Error('Save corrompido ou de formato antigo/inválido.');
        }

        const gameState = JSON.parse(decodedData);

        if (
          typeof gameState.essence !== 'number' ||
          typeof gameState.totalEssence !== 'number' ||
          !Array.isArray(gameState.upgradesList) ||
          !Array.isArray(gameState.trophiesList)
        ) {
          throw new Error(
            'Dados de save inválidos: formato principal incorreto.'
          );
        }

        if (
          typeof gameState.highestCombo !== 'number' ||
          typeof gameState.totalManualClicks !== 'number' ||
          !Array.isArray(gameState.clickUpgradesList)
        ) {
          console.warn(
            'Dados de clique/combo do save não encontrados ou corrompidos. Usando valores padrão para clique/combo.'
          );
          this.highestCombo.set(0);
          this.totalManualClicks.set(0);
        } else {
          this.highestCombo.set(gameState.highestCombo);
          this.totalManualClicks.set(gameState.totalManualClicks);
        }
        this.comboCount.set(0); // Sempre zera o combo ao carregar um jogo

        this.essence.set(gameState.essence || 0);
        this.totalEssence.set(gameState.totalEssence || 0);

        const loadedUpgrades: Upgrade[] = gameState.upgradesList || [];
        const currentUpgrades: Upgrade[] = this.upgradesList();

        const mergedUpgrades = currentUpgrades.map((defaultUpgrade) => {
          const savedUpgrade = loadedUpgrades.find(
            (lu) => lu.name === defaultUpgrade.name
          );
          return savedUpgrade
            ? {
                ...defaultUpgrade,
                amount: savedUpgrade.amount,
                cost: savedUpgrade.cost,
              }
            : defaultUpgrade;
        });
        this.upgradesList.set(mergedUpgrades);

        const loadedClickUpgrades: ClickUpgrade[] =
          gameState.clickUpgradesList || [];
        const currentClickUpgrades: ClickUpgrade[] = this.clickUpgradesList();

        const mergedClickUpgrades = currentClickUpgrades.map(
          (defaultUpgrade) => {
            const savedUpgrade = loadedClickUpgrades.find(
              (lu) => lu.name === defaultUpgrade.name
            );
            return savedUpgrade
              ? {
                  ...defaultUpgrade,
                  amount: savedUpgrade.amount,
                  cost: savedUpgrade.cost,
                }
              : defaultUpgrade;
          }
        );
        this.clickUpgradesList.set(mergedClickUpgrades);

        const loadedTrophies: Trophy[] = gameState.trophiesList || [];
        const currentTrophies: Trophy[] = this.trophiesList();

        const mergedTrophies = currentTrophies.map((defaultTrophy) => {
          const savedTrophy = loadedTrophies.find(
            (lt) => lt.title === defaultTrophy.title
          );
          return savedTrophy
            ? { ...defaultTrophy, earned: savedTrophy.earned }
            : defaultTrophy;
        });
        this.trophiesList.set(mergedTrophies);
      }
    } catch (e: any) {
      console.error('Erro ao carregar o jogo do localStorage:', e);
      alert(
        'Erro ao carregar o jogo salvo. O save pode estar corrompido ou ser de um formato antigo. Por favor, tente limpar o localStorage do navegador (F12 > Application > Local Storage > Botão direito no domínio > Clear) e recarregar a página. Detalhes: ' +
          (e.message || 'Erro desconhecido.')
      );
      localStorage.removeItem('fearIdleGame');
    }
  }

  importSave(): void {
    if (!this.importedSaveData) {
      alert('Por favor, cole os dados do save no campo de texto.');
      return;
    }

    try {
      const decodedBase64 = atob(this.importedSaveData);
      const decodedData = decodeURIComponent(escape(decodedBase64));
      const gameState = JSON.parse(decodedData);

      if (
        typeof gameState.essence !== 'number' ||
        typeof gameState.totalEssence !== 'number' ||
        !Array.isArray(gameState.upgradesList) ||
        !Array.isArray(gameState.trophiesList)
      ) {
        throw new Error(
          'Dados de save inválidos: formato principal incorreto.'
        );
      }

      if (
        typeof gameState.highestCombo !== 'number' ||
        typeof gameState.totalManualClicks !== 'number' ||
        !Array.isArray(gameState.clickUpgradesList)
      ) {
        throw new Error(
          'Dados de save inválidos: propriedades de clique/combo ausentes ou corrompidas.'
        );
      }

      for (const up of gameState.upgradesList) {
        if (
          typeof up.name !== 'string' ||
          typeof up.cost !== 'number' ||
          typeof up.dps !== 'number' ||
          typeof up.amount !== 'number'
        ) {
          throw new Error(
            'Dados de save inválidos: upgrade automático com formato incorreto.'
          );
        }
      }

      for (const up of gameState.clickUpgradesList) {
        if (
          typeof up.name !== 'string' ||
          typeof up.cost !== 'number' ||
          typeof up.clickMultiplier !== 'number' ||
          typeof up.amount !== 'number'
        ) {
          throw new Error(
            'Dados de save inválidos: upgrade de clique com formato incorreto.'
          );
        }
      }

      for (const tr of gameState.trophiesList) {
        if (
          typeof tr.title !== 'string' ||
          typeof tr.description !== 'string' ||
          typeof tr.earned !== 'boolean' ||
          typeof tr.icon !== 'string'
        ) {
          throw new Error(
            'Dados de save inválidos: troféu com formato incorreto.'
          );
        }
      }

      this.essence.set(gameState.essence);
      this.totalEssence.set(gameState.totalEssence);
      this.comboCount.set(0); // Zera o combo ao importar
      this.highestCombo.set(gameState.highestCombo);
      this.totalManualClicks.set(gameState.totalManualClicks);

      const loadedUpgrades: Upgrade[] = gameState.upgradesList;
      const currentUpgrades: Upgrade[] = this.upgradesList();

      const mergedUpgrades = currentUpgrades.map((defaultUpgrade) => {
        const savedUpgrade = loadedUpgrades.find(
          (lu) => lu.name === defaultUpgrade.name
        );
        return savedUpgrade
          ? {
              ...defaultUpgrade,
              amount: savedUpgrade.amount,
              cost: savedUpgrade.cost,
            }
          : defaultUpgrade;
      });
      loadedUpgrades.forEach((savedUpgrade) => {
        if (!mergedUpgrades.some((mu) => mu.name === savedUpgrade.name)) {
          mergedUpgrades.push(savedUpgrade);
        }
      });
      this.upgradesList.set(mergedUpgrades);

      const loadedClickUpgrades: ClickUpgrade[] = gameState.clickUpgradesList;
      const currentClickUpgrades: ClickUpgrade[] = this.clickUpgradesList();

      const mergedClickUpgrades = currentClickUpgrades.map((defaultUpgrade) => {
        const savedUpgrade = loadedClickUpgrades.find(
          (lu) => lu.name === defaultUpgrade.name
        );
        return savedUpgrade
          ? {
              ...defaultUpgrade,
              amount: savedUpgrade.amount,
              cost: savedUpgrade.cost,
            }
          : defaultUpgrade;
      });
      this.clickUpgradesList.set(mergedClickUpgrades);

      const loadedTrophies: Trophy[] = gameState.trophiesList;
      const currentTrophies: Trophy[] = this.trophiesList();

      const mergedTrophies = currentTrophies.map((defaultTrophy) => {
        const savedTrophy = loadedTrophies.find(
          (lt) => lt.title === defaultTrophy.title
        );
        return savedTrophy
          ? { ...defaultTrophy, earned: savedTrophy.earned }
          : defaultTrophy;
      });
      loadedTrophies.forEach((savedSave) => {
        if (!mergedTrophies.some((mt) => mt.title === savedSave.title)) {
          mergedTrophies.push(savedSave);
        }
      });
      this.trophiesList.set(mergedTrophies);

      this.showImportModal = false;
      this.importedSaveData = '';
      alert('Save importado com sucesso! O jogo foi atualizado.');
    } catch (e: any) {
      console.error('Erro ao importar save:', e);
      alert(
        'Erro ao importar save. Verifique se os dados são válidos ou estão corrompidos. Detalhes: ' +
          (e.message || 'Erro desconhecido.')
      );
    }
  }

  getUpgradeCostForCurrentMode(upgrade: Upgrade): number {
    const currentMode = this.currentPurchaseMode;
    if (currentMode === 'max') {
      const maxPurchase = this.calculateMaxPurchase(
        upgrade.cost,
        this.essence()
      );
      if (maxPurchase === 0) return upgrade.cost;
      let totalCost = 0;
      let tempCost = upgrade.cost;
      for (let i = 0; i < maxPurchase; i++) {
        totalCost += tempCost;
        tempCost = Math.round(tempCost * 1.15);
      }
      return totalCost;
    } else {
      return upgrade.cost * (currentMode as number);
    }
  }

  getClickUpgradeCostForCurrentMode(upgrade: ClickUpgrade): number {
    const currentMode = this.currentPurchaseMode;
    if (currentMode === 'max') {
      const maxPurchase = this.calculateMaxPurchase(
        upgrade.cost,
        this.essence()
      );
      if (maxPurchase === 0) return upgrade.cost;
      let totalCost = 0;
      let tempCost = upgrade.cost;
      for (let i = 0; i < maxPurchase; i++) {
        totalCost += tempCost;
        tempCost = Math.round(tempCost * 1.15);
      }
      return totalCost;
    } else {
      return upgrade.cost * (currentMode as number);
    }
  }

  private calculateMaxPurchase(
    initialCost: number,
    currentEssence: number
  ): number {
    let purchaseCount = 0;
    let tempCost = initialCost;

    if (tempCost <= 0) return 0;

    while (currentEssence >= tempCost && purchaseCount < 1000000) {
      currentEssence -= tempCost;
      purchaseCount++;
      tempCost = Math.round(tempCost * 1.15);
      if (tempCost <= 0) break;
    }
    return purchaseCount;
  }

  public formatNumber(num: number, isDps: boolean = false): string {
    if (num === 0) return '0';
    if (Math.abs(num) < 1 && isDps) return num.toFixed(2);
    if (Math.abs(num) < 1000 && !isDps) return num.toFixed(0);

    if (Math.abs(num) >= 1e13) return num.toExponential(2);

    const si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'B' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'Qa' },
      { value: 1e18, symbol: 'Qi' },
      { value: 1e21, symbol: 'Sx' },
      { value: 1e24, symbol: 'Sp' },
      { value: 1e27, symbol: 'Oc' },
      { value: 1e30, symbol: 'No' },
      { value: 1e33, symbol: 'De' },
    ];
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (Math.abs(num) >= si[i].value) {
        break;
      }
    }

    let precision = 2;
    const scaledNum = num / si[i].value;
    if (isDps) {
      if (scaledNum < 10) precision = 2;
      else if (scaledNum < 100) precision = 1;
      else precision = 0;
    } else {
      if (scaledNum < 10) precision = 2;
      else if (scaledNum < 100) precision = 1;
      else precision = 0;
    }

    return scaledNum.toFixed(precision).replace(/\.0+$/, '') + si[i].symbol;
  }

  canAffordUpgrade(
    index: number,
    multiplier: number | string,
    type: 'auto' | 'click'
  ): boolean {
    let upgradeCost: number;
    let currentUpgrade: Upgrade | ClickUpgrade | undefined;

    if (type === 'auto') {
      currentUpgrade = this.unlockedUpgrades()[index];
    } else {
      // type === 'click'
      currentUpgrade = this.unlockedClickUpgrades()[index];
    }

    if (!currentUpgrade) return false;

    upgradeCost = currentUpgrade.cost;

    if (multiplier === 'max') {
      return this.calculateMaxPurchase(upgradeCost, this.essence()) > 0;
    }

    const totalCost = upgradeCost * (multiplier as number);
    return this.essence() >= totalCost;
  }

  buyUpgrade(
    index: number,
    multiplier: number | string,
    type: 'auto' | 'click'
  ): void {
    if (type === 'auto') {
      this.upgradesList.update((currentUpgrades) => {
        const upgradesCopy = [...currentUpgrades];
        const clickedUpgradeFromUnlockedList = this.unlockedUpgrades()[index];

        if (!clickedUpgradeFromUnlockedList) return currentUpgrades;

        const up = upgradesCopy.find(
          (u) => u.name === clickedUpgradeFromUnlockedList.name
        );
        if (!up) return currentUpgrades;

        let actualMultiplier = multiplier as number;
        if (multiplier === 'max') {
          actualMultiplier = this.calculateMaxPurchase(up.cost, this.essence());
          if (actualMultiplier === 0) return currentUpgrades;
        }

        let currentCostOfUpgrade = up.cost;
        let totalCostExact = 0;
        for (let i = 0; i < actualMultiplier; i++) {
          totalCostExact += currentCostOfUpgrade;
          currentCostOfUpgrade = Math.round(currentCostOfUpgrade * 1.15);
        }

        if (this.essence() < totalCostExact) return currentUpgrades;

        up.amount += actualMultiplier;
        up.cost = currentCostOfUpgrade;
        this.essence.update((v) => v - totalCostExact);
        return upgradesCopy;
      });
    } else {
      // type === 'click'
      this.clickUpgradesList.update((currentClickUpgrades) => {
        const clickUpgradesCopy = [...currentClickUpgrades];
        const clickedUpgradeFromUnlockedList =
          this.unlockedClickUpgrades()[index];

        if (!clickedUpgradeFromUnlockedList) return clickUpgradesCopy;

        const up = clickUpgradesCopy.find(
          (u) => u.name === clickedUpgradeFromUnlockedList.name
        );
        if (!up) return clickUpgradesCopy;

        let actualMultiplier = multiplier as number;
        if (multiplier === 'max') {
          actualMultiplier = this.calculateMaxPurchase(up.cost, this.essence());
          if (actualMultiplier === 0) return clickUpgradesCopy;
        }

        let currentCostOfUpgrade = up.cost;
        let totalCostExact = 0;
        for (let i = 0; i < actualMultiplier; i++) {
          totalCostExact += currentCostOfUpgrade;
          currentCostOfUpgrade = Math.round(currentCostOfUpgrade * 1.15);
        }

        if (this.essence() < totalCostExact) return clickUpgradesCopy;

        up.amount += actualMultiplier;
        up.cost = currentCostOfUpgrade;
        this.essence.update((v) => v - totalCostExact);
        return clickUpgradesCopy;
      });
    }
  }

  trackByTrophyTitle(index: number, trophy: Trophy): string {
    return trophy.title;
  }

  trackByUpgradeName(index: number, upgrade: Upgrade): string {
    return upgrade.name;
  }

  trackByClickUpgradeName(index: number, upgrade: ClickUpgrade): string {
    return upgrade.name;
  }

  trophies() {
    return this.trophiesList();
  }

  viewTrophyDetails(trophy: Trophy): void {
    this.selectedTrophy = trophy;
    this.showTrophyDetailsModal = true;
  }

  closeTrophyDetailsModal(): void {
    this.showTrophyDetailsModal = false;
    this.selectedTrophy = null;
  }

  private checkTrophyProgress(
    currentTotalEssence: number,
    currentTotalManualClicks: number,
    currentHighestCombo: number
  ) {
    this.trophiesList().forEach((trophy) => {
      if (!trophy.earned) {
        switch (trophy.title) {
          case 'Primeira Brasa':
            if (currentTotalEssence >= 1) this.unlockTrophy(trophy.title);
            break;
          case 'Eco Inicial':
            if (currentTotalEssence >= 100) this.unlockTrophy(trophy.title);
            break;
          case 'Voto de Sangue':
            if (currentTotalEssence >= 1000) this.unlockTrophy(trophy.title);
            break;
          case 'Sussurros na Escuridão':
            if (currentTotalEssence >= 10000) this.unlockTrophy(trophy.title);
            break;
          case 'Ídolo Restaurado':
            if (currentTotalEssence >= 50000) this.unlockTrophy(trophy.title);
            break;
          case 'Conhecimento Proibido':
            if (currentTotalEssence >= 100000) this.unlockTrophy(trophy.title);
            break;
          case 'Marca do Selo':
            if (currentTotalEssence >= 500000) this.unlockTrophy(trophy.title);
            break;
          case 'Fonte da Agonia':
            if (currentTotalEssence >= 2500000) this.unlockTrophy(trophy.title);
            break;
          case 'Rito Completo':
            if (currentTotalEssence >= 10000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Harmonia Dissonante':
            if (currentTotalEssence >= 50000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Profundezas Insanas':
            if (currentTotalEssence >= 250000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Guardião do Limiar':
            if (currentTotalEssence >= 1000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Véu Rasgado':
            if (currentTotalEssence >= 5000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Cólera Cósmica':
            if (currentTotalEssence >= 25000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Limiar Dimensional':
            if (currentTotalEssence >= 100000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Sonho Interrompido':
            if (currentTotalEssence >= 500000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Visão do Caos':
            if (currentTotalEssence >= 2000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Voz do Horror':
            if (currentTotalEssence >= 8000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Despertar Final':
            if (currentTotalEssence >= 30000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Mestre do Vazio':
            if (currentTotalEssence >= 100000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Conquistador da Realidade':
            if (currentTotalEssence >= 500000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Ascensão':
            if (currentTotalEssence >= 1000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'União Cósmica':
            if (currentTotalEssence >= 5000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Além dos Sonhos':
            if (currentTotalEssence >= 25000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Deus Exterior':
            if (currentTotalEssence >= 100000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Vácuo Insondável':
            if (currentTotalEssence >= 500000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Criador de Universos':
            if (currentTotalEssence >= 1000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'A Essência Primordial':
            if (currentTotalEssence >= 10000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Além de Toda Compreensão':
            if (currentTotalEssence >= 100000000000000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'O Absoluto':
            if (currentTotalEssence >= 1000000000000000000000)
              this.unlockTrophy(trophy.title);
            break;

          case 'Primeiro Sussurro':
            if (currentTotalManualClicks >= 1) this.unlockTrophy(trophy.title);
            break;
          case 'Toque Persistente':
            if (currentTotalManualClicks >= 100)
              this.unlockTrophy(trophy.title);
            break;
          case 'Dedo Veloz':
            if (currentTotalManualClicks >= 1000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Ritmo Implacável':
            if (currentTotalManualClicks >= 10000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Pulsar da Essência':
            if (currentTotalManualClicks >= 100000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Canalizador Incansável':
            if (currentTotalManualClicks >= 1000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Batedor Cósmico':
            if (currentTotalManualClicks >= 10000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Mão da Loucura':
            if (currentTotalManualClicks >= 100000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Pulsar do Vazio':
            if (currentTotalManualClicks >= 1000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Dedo Dimensional':
            if (currentTotalManualClicks >= 10000000000)
              this.unlockTrophy(trophy.title);
            break;
          case 'Mestre do Ritmo Cósmico':
            if (currentTotalManualClicks >= 100000000000)
              this.unlockTrophy(trophy.title);
            break;

          case 'Combo Iniciante (2x)':
            if (currentHighestCombo >= 2) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Místico (5x)':
            if (currentHighestCombo >= 5) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Febril (10x)':
            if (currentHighestCombo >= 10) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Intenso (15x)':
            if (currentHighestCombo >= 15) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Transcendental (20x)':
            if (currentHighestCombo >= 20) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Perfeito (30x)':
            if (currentHighestCombo >= 30) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Infinito (50x)':
            if (currentHighestCombo >= 50) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Além (75x)':
            if (currentHighestCombo >= 75) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Cósmico (100x)':
            if (currentHighestCombo >= 100) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Celestial (150x)':
            if (currentHighestCombo >= 150) this.unlockTrophy(trophy.title);
            break;
          case 'Combo Divino (200x)':
            if (currentHighestCombo >= 200) this.unlockTrophy(trophy.title);
            break;
          case 'O Último Combo (300x)':
            if (currentHighestCombo >= 300) this.unlockTrophy(trophy.title);
            break;

          case 'Primeira Manifestação':
            if (this.upgradesList().some((up) => up.amount > 0))
              this.unlockTrophy(trophy.title);
            break;
          case 'Despertar de Símbolos':
            if (this.upgradesList().filter((up) => up.amount > 0).length >= 5)
              this.unlockTrophy(trophy.title);
            break;
          case 'Mestre dos Rituais':
            const tier2Auto = [
              'Ritual Profano',
              'Tomos Proibidos',
              'Selo Espectral',
              'Lágrimas da Medusa',
              'Fragmento Estelar',
            ];
            if (
              tier2Auto.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Invocador de Horrores':
            const tier3Auto = [
              'Coro Macabro',
              'Abismo da Loucura',
              'Sentinela Dimensional',
              'Véu Interplanar',
              'Tempestade Cósmica',
            ];
            if (
              tier3Auto.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Forjador de Portais':
            const tier4Auto = [
              'Portal para o Além',
              'O Sonhador em R´lyeh',
              'Olho de Azathoth',
              'Toque de Nyarlathotep',
              'Despertar da Antiga Ameaça',
            ];
            if (
              tier4Auto.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Conjurador Primordial':
            const tier5Auto = [
              'Mente Colossal',
              'Espiral de Desespero',
              'Chama Eterna',
              'O Vazio Pulsante',
              'Realidade Fragmentada',
            ];
            if (
              tier5Auto.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >
                  0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Arsenal do Terror':
            if (this.upgradesList().filter((up) => up.amount > 0).length >= 10)
              this.unlockTrophy(trophy.title);
            break;
          case 'Força Oculta':
            if (this.upgradesList().filter((up) => up.amount > 0).length >= 15)
              this.unlockTrophy(trophy.title);
            break;
          case 'Legado do Medo':
            if (this.upgradesList().every((up) => up.amount > 0))
              this.unlockTrophy(trophy.title);
            break;
          case 'Domínio das Sombras':
            const tier1Auto100 = [
              'Vela Sussurrante',
              'Lamento dos Condenados',
              'Pacto Sanguíneo',
              'Eco dos Pesadelos',
              'Ídolo Quebrado',
            ];
            if (
              tier1Auto100.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >=
                  100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Poder de Azathoth':
            const tier2Auto100 = [
              'Ritual Profano',
              'Tomos Proibidos',
              'Selo Espectral',
              'Lágrimas da Medusa',
              'Fragmento Estelar',
            ];
            if (
              tier2Auto100.every(
                (name) =>
                  this.upgradesList().find((up) => up.name === name)?.amount! >=
                  100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Essência da Existência':
            const allAuto100 = this.upgradesList().every(
              (up) => up.amount >= 100
            );
            if (allAuto100) this.unlockTrophy(trophy.title);
            break;

          case 'Primeira Canalização':
            if (this.clickUpgradesList().some((up) => up.amount > 0))
              this.unlockTrophy(trophy.title);
            break;
          case 'Maestria da Canalização':
            if (
              this.clickUpgradesList().filter((up) => up.amount > 0).length >= 3
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Ritmo Absoluto':
            const clickTier2 = [
              'Pulso Sombrio',
              'Memória Amaldiçoada',
              'Ecos do Vazio',
              'Fúria Canalizada',
              'Devaneio Perpétuo',
            ];
            if (
              clickTier2.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! > 0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Canto das Trevas':
            const clickTier3 = [
              'Convergência Dimensional',
              'Vortex de Essência',
              'Canto Cósmico',
              'Pulsar da Realidade',
              'Fragmento do Caos',
            ];
            if (
              clickTier3.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! > 0
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Canalizador Supremo':
            if (this.clickUpgradesList().every((up) => up.amount > 0))
              this.unlockTrophy(trophy.title);
            break;
          case 'Conexão Eterna':
            if (
              this.clickUpgradesList().filter((up) => up.amount > 0).length >= 5
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Mente Sombria':
            if (
              this.clickUpgradesList().filter((up) => up.amount > 0).length >=
              10
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Devorador de Pensamentos':
            const clickTier1_100 = [
              'Toque Sutil',
              'Foco Macabro',
              'Ritmo Insano',
              'Canto Hipnótico',
              'Conexão Psíquica',
            ];
            if (
              clickTier1_100.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! >= 100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Voz do Vácuo':
            const clickTier2_100 = [
              'Pulso Sombrio',
              'Memória Amaldiçoada',
              'Ecos do Vazio',
              'Fúria Canalizada',
              'Devaneio Perpétuo',
            ];
            if (
              clickTier2_100.every(
                (name) =>
                  this.clickUpgradesList().find((up) => up.name === name)
                    ?.amount! >= 100
              )
            )
              this.unlockTrophy(trophy.title);
            break;
          case 'Pulsação Primordial':
            const allClick100 = this.clickUpgradesList().every(
              (up) => up.amount >= 100
            );
            if (allClick100) this.unlockTrophy(trophy.title);
            break;

          case 'Equilíbrio Sombrio':
            const allAutoPresent = this.upgradesList().every(
              (up) => up.amount > 0
            );
            const allClickPresent = this.clickUpgradesList().every(
              (up) => up.amount > 0
            );
            if (allAutoPresent && allClickPresent)
              this.unlockTrophy(trophy.title);
            break;
          case 'Poder Onisciente':
            const allAuto100Units = this.upgradesList().every(
              (up) => up.amount >= 100
            );
            const allClick100Units = this.clickUpgradesList().every(
              (up) => up.amount >= 100
            );
            if (allAuto100Units && allClick100Units)
              this.unlockTrophy(trophy.title);
            break;
          case 'Verdade Final':
            // Verifica se TODOS os troféus (exceto este) foram ganhos
            const allOtherTrophiesEarned = this.trophiesList()
              .filter((t) => t.title !== 'Verdade Final')
              .every((t) => t.earned);
            if (allOtherTrophiesEarned) this.unlockTrophy(trophy.title);
            break;
        }
      }
    });
  }

  unlockTrophy(title: string) {
    this.trophiesList.update((currentTrophies) => {
      const updatedTrophies = [...currentTrophies];
      const trophy = updatedTrophies.find((t) => t.title === title);

      if (trophy && !trophy.earned) {
        trophy.earned = true;
        this.lastUnlockedTrophy.set(trophy);
        this.trophyModal.set(true);

        const audio = new Audio(
          'https://assets.mixkit.co/sfx/preview/mixkit-fairy-win-sound-2011.mp3'
        );
        audio.play();
        return updatedTrophies;
      }
      return currentTrophies;
    });
  }

  showTrophyModal() {
    return this.trophyModal();
  }

  unlockedTrophy() {
    return this.lastUnlockedTrophy();
  }

  closeModal() {
    this.trophyModal.set(false);
    this.lastUnlockedTrophy.set(null);
  }
}
