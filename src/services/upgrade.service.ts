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
        image: 'https://cdn-icons-png.flaticon.com/128/907/907933.png',
        description:
          'Uma vela acesa com pavio de medo. Seu brilho fraco atrai a essência mais tênue do ambiente.',
      },
      {
        name: 'Lamento dos Condenados',
        cost: 50,
        dps: 0.5,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3067/3067098.png',
        description:
          'Os ecos distantes de almas perdidas, cada gemido sintoniza uma nova frequência de terror.',
      },
      {
        name: 'Pacto Sanguíneo',
        cost: 250,
        dps: 2,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903332.png',
        description:
          'Um elo carmesim forjado com as forças primais, cada gota de sacrifício amplia seu poder.',
      },
      {
        name: 'Eco dos Pesadelos',
        cost: 1000,
        dps: 8,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/9218/9218151.png',
        description:
          'Os sussurros dos piores medos da humanidade, ressoando e atraindo a essência do terror noturno.',
      },
      {
        name: 'Ídolo Quebrado',
        cost: 5000,
        dps: 30,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/6743/6743513.png',
        description:
          'Fragmentos de uma divindade esquecida, cada lasca ainda exala uma aura de medo primordial.',
      },
      {
        name: 'Ritual Profano',
        cost: 25000,
        dps: 120,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/1077/1077209.png',
        description:
          'Círculos desenhados com sangue e segredos antigos, invocando manifestações menores de terror.',
      },
      {
        name: 'Tomos Proibidos',
        cost: 120000,
        dps: 550,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2917/2917409.png',
        description:
          'Livros encadernados em pele, suas páginas sussurram verdades que corrompem a sanidade e atraem mais medo.',
      },
      {
        name: 'Selo Espectral',
        cost: 600000,
        dps: 2800,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3887/3887103.png',
        description:
          'Um sigilo que prende e amplifica a energia etérea, tornando o terror mais palpável e lucrativo.',
      },
      {
        name: 'Lágrimas da Medusa',
        cost: 3000000,
        dps: 15000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3067/3067160.png',
        description:
          'Gotas de pavor petrificado, cristalizadas em pura essência, coletadas de almas que ousaram olhar.',
      },
      {
        name: 'Fragmento Estelar',
        cost: 15000000,
        dps: 80000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
        description:
          'Um caco de astro distante, carregando o frio e o vazio do espaço sideral, infundindo medo cósmico.',
      },
      {
        name: 'Coro Macabro',
        cost: 75000000,
        dps: 400000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/4802/4802061.png',
        description:
          'Vozes espectrais unidas em uma melodia profana, harmonizando o terror e ampliando sua ressonância.',
      },
      {
        name: 'Abismo da Loucura',
        cost: 350000000,
        dps: 2000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/6007/6007323.png',
        description:
          'Um olhar no vazio, onde a sanidade se desfaz e a essência do medo jorra livremente.',
      },
      {
        name: 'Sentinela Dimensional',
        cost: 1500000000,
        dps: 9000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3887/3887163.png',
        description:
          'Entidades vigilantes que guardam portais, drenando o pavor de todas as realidades adjacentes.',
      },
      {
        name: 'Véu Interplanar',
        cost: 6000000000,
        dps: 45000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/976/976856.png',
        description:
          'Uma fina camada entre dimensões, tornando-a porosa ao fluxo da essência do medo.',
      },
      {
        name: 'Tempestade Cósmica',
        cost: 25000000000,
        dps: 200000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/601/601053.png',
        description:
          'Uma fúria de energia caótica do espaço, manifestando-se como medo puro e indomável.',
      },
      {
        name: 'Portal para o Além',
        cost: 100000000000,
        dps: 1000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/9804/9804595.png',
        description:
          'Uma passagem para realidades inomináveis, de onde o terror escorre sem fim.',
      },
      {
        name: 'O Sonhador em R´lyeh',
        cost: 500000000000,
        dps: 5000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3067/3067149.png',
        description:
          'A mera presença de uma mente dormente capaz de dobrar a realidade gera medo incalculável.',
      },
      {
        name: 'Olho de Azathoth',
        cost: 2000000000000,
        dps: 25000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/1628/1628795.png',
        description:
          'A visão fragmentada da cegueira primordial, irradiando insanidade e horror puro.',
      },
      {
        name: 'Toque de Nyarlathotep',
        cost: 8000000000000,
        dps: 100000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3887/3887081.png',
        description:
          'A sombra rastejante de um mensageiro primordial, cada movimento sutil arranca a sanidade.',
      },
      {
        name: 'Despertar da Antiga Ameaça',
        cost: 30000000000000,
        dps: 500000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/8687/8687102.png',
        description:
          'O próprio Cthulhu, ou algo pior, se agita em seu sono cósmico, emanando ondas de terror.',
      },
      {
        name: 'Mente Colossal',
        cost: 150000000000000,
        dps: 2500000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3887/3887163.png',
        description:
          'Um fragmento de uma consciência que abrange galáxias, gerando medo através da mera existência.',
      },
      {
        name: 'Espiral de Desespero',
        cost: 700000000000000,
        dps: 10000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/6007/6007323.png',
        description:
          'Uma distorção na tapeçaria da realidade, puxando a essência de todos os medos para um ponto central.',
      },
      {
        name: 'Chama Eterna',
        cost: 3000000000000000,
        dps: 50000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903332.png',
        description:
          'Uma chama que consome a sanidade e incendeia o pavor em todo o universo conhecido.',
      },
      {
        name: 'O Vazio Pulsante',
        cost: 12000000000000000,
        dps: 200000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/9804/9804595.png',
        description:
          'O pulsar rítmico do nada, que se expande e contrai, engolfando tudo em horror puro.',
      },
      {
        name: 'Realidade Fragmentada',
        cost: 50000000000000000,
        dps: 800000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
        description:
          'As fissuras no tecido da existência revelam horrores interdimensionais, liberando um fluxo constante de medo.',
      },
      {
        name: 'Eco do Caos Primordial',
        cost: 200000000000000000,
        dps: 3000000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/601/601053.png',
        description:
          'O murmúrio das origens do universo, um terror tão antigo que corrompe tudo em seu caminho.',
      },
      {
        name: 'Tecelão de Universos',
        cost: 800000000000000000,
        dps: 12000000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/976/976856.png',
        description:
          'Uma entidade cujos movimentos moldam a própria realidade, gerando medo como subproduto de sua existência.',
      },
      {
        name: 'Vontade Cósmica Indomável',
        cost: 3000000000000000000,
        dps: 50000000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3887/3887081.png',
        description:
          'Uma força irrefreável que subverte a existência, amplificando o medo de toda a criação.',
      },
      {
        name: 'O Ponto de Singularidade',
        cost: 12000000000000000000,
        dps: 200000000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/1628/1628795.png',
        description:
          'O núcleo do não-ser, um ponto onde todas as leis falham e o terror é absoluto.',
      },
      {
        name: 'A Não-Existência',
        cost: 50000000000000000000,
        dps: 800000000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3067/3067098.png',
        description:
          'A própria ausência de tudo, um vazio que consome e reverte o ser ao nada, gerando pavor infinito.',
      },
      {
        name: 'Vácuo Inominável',
        cost: 200000000000000000000,
        dps: 3000000000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/6007/6007323.png',
        description:
          'Um abismo insondável que não pode ser descrito ou compreendido, de onde o horror jorra sem cessar.',
      },
      {
        name: 'A Distorção Primordial',
        cost: 800000000000000000000,
        dps: 12000000000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
        description:
          'A primeira falha na realidade, a fonte de todo o caos, que distorce a existência em medo puro.',
      },
      {
        name: 'O Pavor Inconcebível',
        cost: 3000000000000000000000,
        dps: 50000000000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/8687/8687102.png',
        description:
          'Um terror que desafia a mente humana, gerando essência de uma fonte além da imaginação.',
      },
      {
        name: 'Sombra de Yog-Sothoth',
        cost: 12000000000000000000000,
        dps: 200000000000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/9804/9804595.png',
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
        clickMultiplier: 0.1,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/1828/1828775.png',
        description:
          'Um leve pulsar em sua mente, aumentando ligeiramente a ressonância de seus cliques.',
      },
      {
        name: 'Foco Macabro',
        cost: 100,
        clickMultiplier: 0.5,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/10423/10423773.png',
        description:
          'A concentração em visões grotescas amplifica a energia canalizada, tornando seus toques mais potentes.',
      },
      {
        name: 'Ritmo Insano',
        cost: 500,
        clickMultiplier: 2,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903330.png',
        description:
          'Uma batida frenética que reverbera através do seu ser, acelerando o fluxo de essência a cada clique.',
      },
      {
        name: 'Canto Hipnótico',
        cost: 2500,
        clickMultiplier: 10,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903336.png',
        description:
          'Vozes sussurrantes de antigas invocações, hipnotizando a realidade para liberar mais essência por clique.',
      },
      {
        name: 'Conexão Psíquica',
        cost: 12000,
        clickMultiplier: 50,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903328.png',
        description:
          'Um elo direto com as correntes de medo da psique coletiva, multiplicando o impacto de cada canalização.',
      },
      {
        name: 'Pulso Sombrio',
        cost: 60000,
        clickMultiplier: 200,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/9218/9218151.png',
        description:
          'Cada clique envia um pulso de energia sombria, extraindo mais essência de reinos etéreos.',
      },
      {
        name: 'Memória Amaldiçoada',
        cost: 300000,
        clickMultiplier: 1000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/6743/6743513.png',
        description:
          'Lembranças proibidas de horrores esquecidos são desbloqueadas, imbuindo seus cliques com poder terrível.',
      },
      {
        name: 'Ecos do Vazio',
        cost: 1500000,
        clickMultiplier: 5000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/6007/6007323.png',
        description:
          'Seus toques despertam ecos do vazio primordial, de onde jorra uma torrente de essência bruta.',
      },
      {
        name: 'Fúria Canalizada',
        cost: 7500000,
        clickMultiplier: 25000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/4802/4802061.png',
        description:
          'A raiva dos condenados canalizada através de seus dedos, transformando-se em pura essência.',
      },
      {
        name: 'Devaneio Perpétuo',
        cost: 35000000,
        clickMultiplier: 120000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3067/3067149.png',
        description:
          'Sua mente flutua em um devaneio sem fim, constantemente extraindo essência de realidades de pesadelo.',
      },
      {
        name: 'Convergência Dimensional',
        cost: 150000000,
        clickMultiplier: 500000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/9804/9804595.png',
        description:
          'Seus cliques puxam essência de múltiplos planos de existência, convergindo em um único ponto.',
      },
      {
        name: 'Vortex de Essência',
        cost: 700000000,
        clickMultiplier: 2000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/601/601053.png',
        description:
          'Um redemoinho de poder se forma sob seus dedos, sugando o medo do éter com voracidade.',
      },
      {
        name: 'Canto Cósmico',
        cost: 3500000000,
        clickMultiplier: 8000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903336.png',
        description:
          'Seu canto reverbera pelo cosmos, forçando a própria realidade a ceder mais essência.',
      },
      {
        name: 'Pulsar da Realidade',
        cost: 15000000000,
        clickMultiplier: 35000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
        description:
          'O ritmo dos seus cliques ecoa com o pulsar do universo, extraindo essência em cada batida.',
      },
      {
        name: 'Fragmento do Caos',
        cost: 70000000000,
        clickMultiplier: 150000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/1628/1628795.png',
        description:
          'Cada toque seu invoca uma minúscula porção do caos primordial, enriquecendo a essência canalizada.',
      },
      {
        name: 'Mão Eterna',
        cost: 300000000000,
        clickMultiplier: 500000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903332.png',
        description:
          'Uma mão espectral que replica seus toques infinitamente, multiplicando seus ganhos.',
      },
      {
        name: 'Eco do Além',
        cost: 1500000000000,
        clickMultiplier: 2000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3067/3067098.png',
        description:
          'O eco de toques de outras dimensões amplifica sua própria canalização, um murmúrio eterno de essência.',
      },
      {
        name: 'Batida Estelar',
        cost: 7000000000000,
        clickMultiplier: 8000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
        description:
          'Seus cliques sincronizam com as pulsações de estrelas moribundas, liberando ondas de essência.',
      },
      {
        name: 'Ritmo Cósmico',
        cost: 30000000000000,
        clickMultiplier: 30000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903330.png',
        description:
          'O ritmo de seus toques se torna a batida do universo, convocando essência em uma escala inimaginável.',
      },
      {
        name: 'Voz do Vazio',
        cost: 120000000000000,
        clickMultiplier: 100000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903336.png',
        description:
          'Seus sussurros se tornam clamores que ressoam na não-existência, forçando o vazio a render sua essência.',
      },
      {
        name: 'Pulso da Não-Existência',
        cost: 500000000000000,
        clickMultiplier: 400000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/9218/9218151.png',
        description:
          'Um pulso que emana da própria ausência, multiplicando seus cliques com o poder do nada.',
      },
      {
        name: 'Consciência Amaldiçoada',
        cost: 2000000000000000,
        clickMultiplier: 1500000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/10423/10423773.png',
        description:
          'Sua mente se torna uma prisão para o medo, onde ele se intensifica e se liberta a cada toque.',
      },
      {
        name: 'Ecos do Além-Concebível',
        cost: 8000000000000000,
        clickMultiplier: 5000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/6007/6007323.png',
        description:
          'Seus toques despertam ecos de realidades tão distorcidas que apenas sua essência pode ser compreendida.',
      },
      {
        name: 'Sussurros do Crepúsculo',
        cost: 30000000000000000,
        clickMultiplier: 20000000000000,
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/907/907933.png',
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
        image: 'https://cdn-icons-png.flaticon.com/128/1628/1628795.png',
        description:
          'Um aprimoramento sutil em sua percepção, aumentando a eficiência de todas as manifestações automáticas em 5%.',
      },
      {
        name: 'Toque Ressonante (Clique)',
        cost: 1,
        multiplierValue: 1.05,
        type: 'click',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/1828/1828775.png',
        description:
          'Seu toque ressoa com maior poder, aumentando a eficácia de toda a canalização manual em 5%.',
      },
      {
        name: 'Selo do Profano (DPS)',
        cost: 5,
        multiplierValue: 1.1,
        type: 'dps',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3887/3887103.png',
        description:
          'Um selo amaldiçoado que amplifica o terror autônomo, concedendo um bônus de 10% no DPS.',
      },
      {
        name: 'Ritmo da Existência (Clique)',
        cost: 5,
        multiplierValue: 1.1,
        type: 'click',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903330.png',
        description:
          'A harmonia distorcida da existência agora acompanha seus cliques, aumentando seu poder em 10%.',
      },
      {
        name: 'Portal da Abundância (DPS)',
        cost: 25,
        multiplierValue: 1.2,
        type: 'dps',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/9804/9804595.png',
        description:
          'Um pequeno portal que drena essência de dimensões ricas, aumentando o DPS em 20%.',
      },
      {
        name: 'Mente Cósmica (Clique)',
        cost: 25,
        multiplierValue: 1.2,
        type: 'click',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903328.png',
        description:
          'Sua mente se expande para compreender horrores cósmicos, resultando em 20% mais essência por clique.',
      },
      {
        name: 'Essência Primordial (Global)',
        cost: 100,
        multiplierValue: 1.5,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
        description:
          'Um fragmento da própria essência do medo primordial, que aumenta TODAS as suas fontes de ganho em 50%.',
      },
      {
        name: 'Devorador de Estrelas (Global)',
        cost: 500,
        multiplierValue: 2.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/6007/6007323.png',
        description:
          'Uma entidade que consome o brilho celestial, dobrando todo o seu ganho de essência.',
      },
      {
        name: 'Fragmento do Absoluto (Global)',
        cost: 2500,
        multiplierValue: 5.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/8687/8687102.png',
        description:
          'Um caco do poder onipotente, que multiplica seu ganho total por 5.',
      },
      {
        name: 'Anel do Vazio (DPS)',
        cost: 10000,
        multiplierValue: 1.3,
        type: 'dps',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/1077/1077209.png',
        description:
          'Um anel que se contorce com o nada, aumentando o DPS em 30%.',
      },
      {
        name: 'Caminho Quebrado (Clique)',
        cost: 10000,
        multiplierValue: 1.3,
        type: 'click',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/6743/6743513.png',
        description:
          'Você trilha um caminho de não-existência, tornando seus cliques 30% mais eficazes.',
      },
      {
        name: 'Coroa de Sombria (Global)',
        cost: 50000,
        multiplierValue: 10.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/4802/4802061.png',
        description:
          'Uma coroa tecida a partir das sombras mais densas, multiplicando todo o seu ganho por 10.',
      },
      {
        name: 'O Grande Olho (Global)',
        cost: 250000,
        multiplierValue: 25.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/1628/1628795.png',
        description:
          'A visão onisciente que penetra todas as realidades, aumentando seu ganho total por 25.',
      },
      {
        name: 'Coração do Caos (Global)',
        cost: 1000000,
        multiplierValue: 100.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903332.png',
        description:
          'Um coração pulsante de desordem cósmica, que multiplica todo o seu ganho por 100.',
      },
      {
        name: 'Vontade Inflexível (DPS)',
        cost: 5000000,
        multiplierValue: 1.4,
        type: 'dps',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3887/3887081.png',
        description:
          'Sua determinação dobra o poder das manifestações automáticas, aumentando o DPS em 40%.',
      },
      {
        name: 'Fúria da Realidade (Clique)',
        cost: 5000000,
        multiplierValue: 1.4,
        type: 'click',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/601/601053.png',
        description:
          'A fúria de realidades quebradas imbuída em seus toques, resultando em 40% mais essência por clique.',
      },
      {
        name: 'Alma Fragmentada (Global)',
        cost: 25000000,
        multiplierValue: 500.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/869/869819.png',
        description:
          'Um estilhaço da alma do universo, que multiplica seu ganho total por 500.',
      },
      {
        name: 'Vazio Iridescente (Global)',
        cost: 100000000,
        multiplierValue: 1000.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/976/976856.png',
        description:
          'O próprio vazio irradia poder, multiplicando todo o seu ganho por 1.000.',
      },
      {
        name: 'Trono do Caos (Global)',
        cost: 500000000,
        multiplierValue: 5000.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/8687/8687102.png',
        description:
          'Você ascendeu ao trono do caos primordial, multiplicando seu ganho por 5.000.',
      },
      {
        name: 'Consciência Infinita (DPS)',
        cost: 2500000000,
        multiplierValue: 1.5,
        type: 'dps',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3887/3887163.png',
        description:
          'Sua mente transcende a compreensão, aumentando o DPS em 50%.',
      },
      {
        name: 'Aperto do Além (Clique)',
        cost: 2500000000,
        multiplierValue: 1.5,
        type: 'click',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/3067/3067160.png',
        description:
          'As garras do além o impulsionam, tornando seus cliques 50% mais poderosos.',
      },
      {
        name: 'Canto da Criação (Global)',
        cost: 10000000000,
        multiplierValue: 25000.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/2903/2903336.png',
        description:
          'Seu canto ressoa com o som da própria criação, multiplicando seu ganho por 25.000.',
      },
      {
        name: 'Dominus Vácuo (Global)',
        cost: 50000000000,
        multiplierValue: 100000.0,
        type: 'global',
        amount: 0,
        image: 'https://cdn-icons-png.flaticon.com/128/9804/9804595.png',
        description:
          'Você é o mestre do vazio, multiplicando todo o seu ganho por 100.000.',
      },
    ];
  }
}
