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
          'Uma vela acesa com pavio de medo. Seu brilho fraco atrai a essência mais tênue do ambiente.',
      },
      {
        name: 'Lamento dos Condenados',
        cost: 50,
        dps: 0.5,
        amount: 0,
        image: 'assets/icons/auto/lamento-dos-condenados.svg',
        description:
          'Os ecos distantes de almas perdidas, cada gemido sintoniza uma nova frequência de terror.',
      },
      {
        name: 'Pacto Sanguíneo',
        cost: 250,
        dps: 2,
        amount: 0,
        image: 'assets/icons/auto/pacto-sanguineo.svg',
        description:
          'Um elo carmesim forjado com as forças primais, cada gota de sacrifício amplia seu poder.',
      },
      {
        name: 'Eco dos Pesadelos',
        cost: 1000,
        dps: 8,
        amount: 0,
        image: 'assets/icons/auto/eco-dos-pesadelos.svg',
        description:
          'Os sussurros dos piores medos da humanidade, ressoando e atraindo a essência do terror noturno.',
      },
      {
        name: 'Ídolo Quebrado',
        cost: 5000,
        dps: 30,
        amount: 0,
        image: 'assets/icons/auto/idolo-quebrado.svg',
        description:
          'Fragmentos de uma divindade esquecida, cada lasca ainda exala uma aura de medo primordial.',
      },
      {
        name: 'Ritual Profano',
        cost: 25000,
        dps: 120,
        amount: 0,
        image: 'assets/icons/auto/ritual-profano.svg',
        description:
          'Círculos desenhados com sangue e segredos antigos, invocando manifestações menores de terror.',
      },
      {
        name: 'Tomos Proibidos',
        cost: 120000,
        dps: 550,
        amount: 0,
        image: 'assets/icons/auto/tomos-proibidos.svg',
        description:
          'Livros encadernados em pele, suas páginas sussurram verdades que corrompem a sanidade e atraem mais medo.',
      },
      {
        name: 'Selo Espectral',
        cost: 600000,
        dps: 2800,
        amount: 0,
        image: 'assets/icons/auto/selo-espectral.svg',
        description:
          'Um sigilo que prende e amplifica a energia etérea, tornando o terror mais palpável e lucrativo.',
      },
      {
        name: 'Lágrimas da Medusa',
        cost: 3000000,
        dps: 15000,
        amount: 0,
        image: 'assets/icons/auto/lagrimas-da-medusa.svg',
        description:
          'Gotas de pavor petrificado, cristalizadas em pura essência, coletadas de almas que ousaram olhar.',
      },
      {
        name: 'Fragmento Estelar',
        cost: 15000000,
        dps: 80000,
        amount: 0,
        image: 'assets/icons/auto/fragmento-estelar.svg',
        description:
          'Um caco de astro distante, carregando o frio e o vazio do espaço sideral, infundindo medo cósmico.',
      },
      {
        name: 'Coro Macabro',
        cost: 75000000,
        dps: 400000,
        amount: 0,
        image: 'assets/icons/auto/coro-macabro.svg',
        description:
          'Vozes espectrais unidas em uma melodia profana, harmonizando o terror e ampliando sua ressonância.',
      },
      {
        name: 'Abismo da Loucura',
        cost: 350000000,
        dps: 2000000,
        amount: 0,
        image: 'assets/icons/auto/abismo-da-loucura.svg',
        description:
          'Um olhar no vazio, onde a sanidade se desfaz e a essência do medo jorra livremente.',
      },
      {
        name: 'Sentinela Dimensional',
        cost: 1500000000,
        dps: 9000000,
        amount: 0,
        image: 'assets/icons/auto/sentinela-dimensional.svg',
        description:
          'Entidades vigilantes que guardam portais, drenando o pavor de todas as realidades adjacentes.',
      },
      {
        name: 'Véu Interplanar',
        cost: 6000000000,
        dps: 45000000,
        amount: 0,
        image: 'assets/icons/auto/veu-interplanar.svg',
        description:
          'Uma fina camada entre dimensões, tornando-a porosa ao fluxo da essência do medo.',
      },
      {
        name: 'Tempestade Cósmica',
        cost: 25000000000,
        dps: 200000000,
        amount: 0,
        image: 'assets/icons/auto/tempestade-cosmica.svg',
        description:
          'Uma fúria de energia caótica do espaço, manifestando-se como medo puro e indomável.',
      },
      {
        name: 'Portal para o Além',
        cost: 100000000000,
        dps: 1000000000,
        amount: 0,
        image: 'assets/icons/auto/portal-para-o-alem.svg',
        description:
          'Uma passagem para realidades inomináveis, de onde o terror escorre sem fim.',
      },
      {
        name: 'O Sonhador em R´lyeh',
        cost: 500000000000,
        dps: 5000000000,
        amount: 0,
        image: 'assets/icons/auto/o-sonhador-em-rlyeh.svg',
        description:
          'A mera presença de uma mente dormente capaz de dobrar a realidade gera medo incalculável.',
      },
      {
        name: 'Olho de Azathoth',
        cost: 2000000000000,
        dps: 25000000000,
        amount: 0,
        image: 'assets/icons/auto/olho-de-azathoth.svg',
        description:
          'A visão fragmentada da cegueira primordial, irradiando insanidade e horror puro.',
      },
      {
        name: 'Toque de Nyarlathotep',
        cost: 8000000000000,
        dps: 100000000000,
        amount: 0,
        image: 'assets/icons/auto/toque-de-nyarlathotep.svg',
        description:
          'A sombra rastejante de um mensageiro primordial, cada movimento sutil arranca a sanidade.',
      },
      {
        name: 'Despertar da Antiga Ameaça',
        cost: 30000000000000,
        dps: 500000000000,
        amount: 0,
        image: 'assets/icons/auto/despertar-da-antiga-ameaca.svg',
        description:
          'O próprio Cthulhu, ou algo pior, se agita em seu sono cósmico, emanando ondas de terror.',
      },
      {
        name: 'Mente Colossal',
        cost: 150000000000000,
        dps: 2500000000000,
        amount: 0,
        image: 'assets/icons/auto/mente-colossal.svg',
        description:
          'Um fragmento de uma consciência que abrange galáxias, gerando medo através da mera existência.',
      },
      {
        name: 'Espiral de Desespero',
        cost: 700000000000000,
        dps: 10000000000000,
        amount: 0,
        image: 'assets/icons/auto/espiral-de-desespero.svg',
        description:
          'Uma distorção na tapeçaria da realidade, puxando a essência de todos os medos para um ponto central.',
      },
      {
        name: 'Chama Eterna',
        cost: 3e15,
        dps: 5e13,
        amount: 0,
        image: 'assets/icons/auto/chama-eterna.svg',
        description:
          'Uma chama que consome a sanidade e incendeia o pavor em todo o universo conhecido.',
      },
      {
        name: 'O Vazio Pulsante',
        cost: 12e15,
        dps: 2e14,
        amount: 0,
        image: 'assets/icons/auto/o-vazio-pulsante.svg',
        description:
          'O pulsar rítmico do nada, que se expande e contrai, engolfando tudo em horror puro.',
      },
      {
        name: 'Realidade Fragmentada',
        cost: 5e16,
        dps: 8e14,
        amount: 0,
        image: 'assets/icons/auto/realidade-fragmentada.svg',
        description:
          'As fissuras no tecido da existência revelam horrores interdimensionais, liberando um fluxo constante de medo.',
      },
      {
        name: 'Eco do Caos Primordial',
        cost: 2e17,
        dps: 3e15,
        amount: 0,
        image: 'assets/icons/auto/eco-do-caos-primordial.svg',
        description:
          'O murmúrio das origens do universo, um terror tão antigo que corrompe tudo em seu caminho.',
      },
      {
        name: 'Tecelão de Universos',
        cost: 8e17,
        dps: 12e15,
        amount: 0,
        image: 'assets/icons/auto/tecelao-de-universos.svg',
        description:
          'Uma entidade cujos movimentos moldam a própria realidade, gerando medo como subproduto de sua existência.',
      },
      {
        name: 'Vontade Cósmica Indomável',
        cost: 3e18,
        dps: 5e16,
        amount: 0,
        image: 'assets/icons/auto/vontade-cosmica-indomavel.svg',
        description:
          'Uma força irrefreável que subverte a existência, amplificando o medo de toda a criação.',
      },
      {
        name: 'O Ponto de Singularidade',
        cost: 12e18,
        dps: 2e17,
        amount: 0,
        image: 'assets/icons/auto/o-ponto-de-singularidade.svg',
        description:
          'O núcleo do não-ser, um ponto onde todas as leis falham e o terror é absoluto.',
      },
      {
        name: 'A Não-Existência',
        cost: 5e19,
        dps: 8e17,
        amount: 0,
        image: 'assets/icons/auto/a-nao-existencia.svg',
        description:
          'A própria ausência de tudo, um vazio que consome e reverte o ser ao nada, gerando pavor infinito.',
      },
      {
        name: 'Vácuo Inominável',
        cost: 2e20,
        dps: 3e18,
        amount: 0,
        image: 'assets/icons/auto/vacuo-inominavel.svg',
        description:
          'Um abismo insondável que não pode ser descrito ou compreendido, de onde o horror jorra sem cessar.',
      },
      {
        name: 'A Distorção Primordial',
        cost: 8e20,
        dps: 12e18,
        amount: 0,
        image: 'assets/icons/auto/a-distorcao-primordial.svg',
        description:
          'A primeira falha na realidade, a fonte de todo o caos, que distorce a existência em medo puro.',
      },
      {
        name: 'O Pavor Inconcebível',
        cost: 3e21,
        dps: 5e19,
        amount: 0,
        image: 'assets/icons/auto/o-pavor-inconcebivel.svg',
        description:
          'Um terror que desafia a mente humana, gerando essência de uma fonte além da imaginação.',
      },
      {
        name: 'Sombra de Yog-Sothoth',
        cost: 12e21,
        dps: 2e20,
        amount: 0,
        image: 'assets/icons/auto/sombra-de-yog-sothoth.svg',
        description:
          'A mera sombra do Todo-Em-Um e Um-Em-Todos, que distorce o espaço-tempo e libera pavor sem limites.',
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
          'Um leve pulsar em sua mente, aumentando ligeiramente a ressonância de seus cliques.',
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
          'A concentração em visões grotescas amplifica a energia canalizada, tornando seus toques mais potentes.',
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
          'Uma batida frenética que reverbera através do seu ser, acelerando o fluxo de essência a cada clique.',
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
          'Vozes sussurrantes de antigas invocações, hipnotizando a realidade para liberar mais essência por clique.',
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
          'Um elo direto com as correntes de medo da psique coletiva, multiplicando o impacto de cada canalização.',
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
          'Cada clique envia um pulso de energia sombria, extraindo mais essência de reinos etéreos.',
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
          'Lembranças proibidas de horrores esquecidos são desbloqueadas, imbuindo seus cliques com poder terrível.',
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
          'Seus toques despertam ecos do vazio primordial, de onde jorra uma torrente de essência bruta.',
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
          'A raiva dos condenados canalizada através de seus dedos, transformando-se em pura essência.',
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
          'Sua mente flutua em um devaneio sem fim, constantemente extraindo essência de realidades de pesadelo.',
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
          'Seus cliques puxam essência de múltiplos planos de existência, convergindo em um único ponto.',
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
          'Um redemoinho de poder se forma sob seus dedos, sugando o medo do éter com voracidade.',
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
          'Seu canto reverbera pelo cosmos, forçando a própria realidade a ceder mais essência.',
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
          'O ritmo dos seus cliques ecoa com o pulsar do universo, extraindo essência em cada batida.',
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
          'Cada toque seu invoca uma minúscula porção do caos primordial, enriquecendo a essência canalizada.',
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
          'Uma mão espectral que replica seus toques infinitamente, multiplicando seus ganhos.',
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
          'O eco de toques de outras dimensões amplifica sua própria canalização, um murmúrio eterno de essência.',
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
          'Seus cliques sincronizam com as pulsações de estrelas moribundas, liberando ondas de essência.',
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
          'O ritmo de seus toques se torna a batida do universo, convocando essência em uma escala inimaginável.',
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
          'Seus sussurros se tornam clamores que ressoam na não-existência, forçando o vazio a render sua essência.',
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
          'Um pulso que emana da própria ausência, multiplicando seus cliques com o poder do nada.',
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
          'Sua mente se torna uma prisão para o medo, onde ele se intensifica e se liberta a cada toque.',
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
          'Seus toques despertam ecos de realidades tão distorcidas que apenas sua essência pode ser compreendida.',
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
          'Vozes que vêm do limiar da existência, ampliando seus cliques com o medo do fim e do começo.',
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
          'Um aprimoramento sutil em sua percepção, aumentando a eficiência de todas as manifestações automáticas em 5%.',
      },
      {
        name: 'Toque Ressonante (Clique)',
        cost: 1,
        multiplierValue: 0.05,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/toque-ressonante-click.svg',
        description:
          'Seu toque ressoa com maior poder, aumentando a eficácia de toda a canalização manual em 5%.',
      },
      {
        name: 'Selo do Profano (DPS)',
        cost: 5,
        multiplierValue: 1.1,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/selo-do-profano-dps.svg',
        description:
          'Um selo amaldiçoado que amplifica o terror autônomo, concedendo um bônus de 10% no DPS.',
      },
      {
        name: 'Ritmo da Existência (Clique)',
        cost: 5,
        multiplierValue: 0.1,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/ritmo-da-existencia-click.svg',
        description:
          'A harmonia distorcida da existência agora acompanha seus cliques, aumentando seu poder em 10%.',
      },
      {
        name: 'Portal da Abundância (DPS)',
        cost: 25,
        multiplierValue: 1.2,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/portal-da-abundancia-dps.svg',
        description:
          'Um pequeno portal que drena essência de dimensões ricas, aumentando o DPS em 20%.',
      },
      {
        name: 'Mente Cósmica (Clique)',
        cost: 25,
        multiplierValue: 0.2,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/mente-cosmica-click.svg',
        description:
          'Sua mente se expande para compreender horrores cósmicos, resultando em 20% mais essência por clique.',
      },
      {
        name: 'Essência Primordial (Global)',
        cost: 100,
        multiplierValue: 1.5,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/essencia-primordial-global.svg',
        description:
          'Um fragmento da própria essência do medo primordial, que multiplica TODAS as suas fontes de ganho por 1.5x.',
      },
      {
        name: 'Devorador de Estrelas (Global)',
        cost: 500,
        multiplierValue: 2.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/devorador-de-estrelas-global.svg',
        description:
          'Uma entidade que consome o brilho celestial, multiplicando todo o seu ganho de essência por 2x.',
      },
      {
        name: 'Fragmento do Absoluto (Global)',
        cost: 2500,
        multiplierValue: 3.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/fragmento-do-absoluto-global.svg',
        description:
          'Um caco do poder onipotente, que multiplica seu ganho total por 3x.',
      },
      {
        name: 'Anel do Vazio (DPS)',
        cost: 10000,
        multiplierValue: 1.3,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/anel-do-vazio-dps.svg',
        description:
          'Um anel que se contorce com o nada, aumentando o DPS em 30%.',
      },
      {
        name: 'Caminho Quebrado (Clique)',
        cost: 10000,
        multiplierValue: 0.3,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/caminho-quebrado-click.svg',
        description:
          'Você trilha um caminho de não-existência, tornando seus cliques 30% mais eficazes.',
      },
      {
        name: 'Coroa de Sombria (Global)',
        cost: 50000,
        multiplierValue: 5.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/coroa-de-sombria-global.svg',
        description:
          'Uma coroa tecida a partir das sombras mais densas, multiplicando todo o seu ganho por 5x.',
      },
      {
        name: 'O Grande Olho (Global)',
        cost: 250000,
        multiplierValue: 8.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/o-grande-olho-global.svg',
        description:
          'A visão onisciente que penetra todas as realidades, multiplicando seu ganho total por 8x.',
      },
      {
        name: 'Coração do Caos (Global)',
        cost: 1000000,
        multiplierValue: 15.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/coracao-do-caos-global.svg',
        description:
          'Um coração pulsante de desordem cósmica, que multiplica todo o seu ganho por 15x.',
      },
      {
        name: 'Vontade Inflexível (DPS)',
        cost: 5000000,
        multiplierValue: 1.4,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/vontade-inflexivel-dps.svg',
        description:
          'Sua determinação dobra o poder das manifestações automáticas, aumentando o DPS em 40%.',
      },
      {
        name: 'Fúria da Realidade (Clique)',
        cost: 5000000,
        multiplierValue: 0.4,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/furia-da-realidade-click.svg',
        description:
          'A fúria de realidades quebradas imbuída em seus toques, resultando em 40% mais essência por clique.',
      },
      {
        name: 'Alma Fragmentada (Global)',
        cost: 25000000,
        multiplierValue: 25.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/alma-fragmentada-global.svg',
        description:
          'Um estilhaço da alma do universo, que multiplica seu ganho total por 25x.',
      },
      {
        name: 'Vazio Iridescente (Global)',
        cost: 100000000,
        multiplierValue: 50.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/vazio-iridescente-global.svg',
        description:
          'O próprio vazio irradia poder, multiplicando todo o seu ganho por 50x.',
      },
      {
        name: 'Trono do Caos (Global)',
        cost: 500000000,
        multiplierValue: 100.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/trono-do-caos-global.svg',
        description:
          'Você ascendeu ao trono do caos primordial, multiplicando seu ganho por 100x.',
      },
      {
        name: 'Consciência Infinita (DPS)',
        cost: 2500000000,
        multiplierValue: 1.5,
        type: 'dps',
        amount: 0,
        image: 'assets/icons/prestige/consciencia-infinita-dps.svg',
        description:
          'Sua mente transcende a compreensão, aumentando o DPS em 50%.',
      },
      {
        name: 'Aperto do Além (Clique)',
        cost: 2500000000,
        multiplierValue: 0.5,
        type: 'click',
        amount: 0,
        image: 'assets/icons/prestige/aperto-do-alem-click.svg',
        description:
          'As garras do além o impulsionam, tornando seus cliques 50% mais poderosos.',
      },
      {
        name: 'Canto da Criação (Global)',
        cost: 10000000000,
        multiplierValue: 200.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/canto-da-criacao-global.svg',
        description:
          'Seu canto ressoa com o som da própria criação, multiplicando seu ganho por 200x.',
      },
      {
        name: 'Dominus Vácuo (Global)',
        cost: 50000000000,
        multiplierValue: 500.0,
        type: 'global',
        amount: 0,
        image: 'assets/icons/prestige/dominus-vacuo-global.svg',
        description:
          'Você é o mestre do vazio, multiplicando todo o seu ganho por 500x.',
      },
    ];
  }
}
