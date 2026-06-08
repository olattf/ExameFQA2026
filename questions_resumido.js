const quizData = {
  "10": {
    "Física": {
      "Domínio 1: Energia e sua conservação": {
        "SD1 Energia e movimentos": [],
        "SD2 Energia e fenómenos elétricos": [],
        "SD3 Energia, fenómenos térmicos e radiação": []
      }
    },
    "Química": {
      "Domínio 1: Elementos químicos e sua organização": {
        "SD1 Massa e tamanho dos átomos": [
          {
            "id": 1,
            "enunciado": "Em relação aos constituintes do átomo, é correto afirmar que...",
            "opcoes": [
              "a massa do protão é aproximadamente igual à do neutrão e a massa do eletrão é muito inferior à daquelas partículas.",
              "o protão não tem carga elétrica, o eletrão tem carga negativa e o neutrão tem carga elétrica positiva.",
              "as cargas do protão e do neutrão são simétricas, enquanto o eletrão não tem carga elétrica.",
              "as massas do eletrão e do protão são iguais e a do neutrão é muito inferior à daquelas partículas."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "O protão tem carga positiva e o neutrão não tem carga.",
              "2": "O neutrão não tem carga elétrica. O protão e o eletrão é que têm.",
              "3": "A massa do eletrão é cerca de 1836 vezes menor do que a massa do protão."
            },
            "resolucao": "Os nucleões (protões e neutrões) estão no núcleo e têm massas muito semelhantes. A massa do eletrão, na nuvem eletrónica, é praticamente desprezável face à dos nucleões."
          },
          {
            "id": 2,
            "enunciado": "Um catião de um elemento e o átomo desse mesmo elemento têm sempre igual número de...",
            "opcoes": [
              "eletrões.",
              "neutrões.",
              "nucleões.",
              "protões."
            ],
            "correta": 3,
            "explicacoes": {
              "0": "Um catião forma-se pela perda de eletrões, logo o número difere.",
              "1": "Existem isótopos do mesmo elemento, logo os neutrões podem variar.",
              "2": "Se os neutrões variam (isótopos), o total de nucleões também."
            },
            "resolucao": "O que define um elemento é o Z (número atómico), que é o número de protões. Um catião forma-se por perda de eletrões, mantendo o núcleo inalterado."
          },
          {
            "id": 3,
            "enunciado": "O ião fluoreto (F⁻) deriva do isótopo do flúor com massa 19 e Z 9. Este ião é constituído por...",
            "opcoes": [
              "9 protões, 10 neutrões e 10 eletrões.",
              "9 protões, 10 neutrões e 9 eletrões.",
              "9 protões e 10 neutrões.",
              "9 protões e 19 neutrões."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Esta é a constituição do átomo neutro. O ião tem carga -1, ganhou um eletrão.",
              "2": "Indica apenas a constituição do núcleo atómico e omite a nuvem.",
              "3": "O número 19 é o número de massa (A), não os neutrões."
            },
            "resolucao": "Z=9 (9 protões). Neutrões = A - Z = 19 - 9 = 10. Como é um anião monovalente (F⁻), ganhou 1 eletrão em relação ao átomo neutro, tendo 9 + 1 = 10 eletrões."
          },
          {
            "id": 4,
            "enunciado": "O isótopo do elemento X tem A=40 e o mesmo número de neutrões que o potássio-39 (Z=19). Indique a afirmação correta.",
            "opcoes": [
              "X é um isótopo do árgon (Z=18).",
              "O número atómico de X é 19.",
              "O átomo de X tem 20 protões e, se neutro, 20 eletrões.",
              "O isótopo de X representa-se por X com A=40 e Z=18."
            ],
            "correta": 2,
            "explicacoes": {
              "0": "O árgon tem Z=18. O X tem Z=20.",
              "1": "Se tivesse Z=19 seria potássio, mas Z=20.",
              "3": "A representação está incorreta, pois o Z calculado é 20."
            },
            "resolucao": "Potássio-39 tem 39 - 19 = 20 neutrões. Como X tem 20 neutrões e A=40, Z = 40 - 20 = 20. Trata-se do elemento com 20 protões e 20 eletrões (Cálcio)."
          },
          {
            "id": 5,
            "enunciado": "O magnésio tem isótopos Mg-24 (78,99%), Mg-25 e Mg-26. A massa atómica relativa é 24,31. É correto afirmar que...",
            "opcoes": [
              "A abundância do Mg-25 é igual à do Mg-26.",
              "O núcleo do Mg-24 contém 12 protões e 24 neutrões.",
              "A massa de qualquer átomo de Mg-24 é 24,31 u.",
              "A massa atómica relativa aproxima-se do isótopo mais abundante."
            ],
            "correta": 3,
            "explicacoes": {
              "0": "A abundância restante divide-se, mas não em partes obrigatoriamente iguais.",
              "1": "O Mg-24 tem 12 protões e 12 neutrões (24 - 12).",
              "2": "24,31 é a massa média de todos os isótopos, não do isótopo 24 isolado."
            },
            "resolucao": "A massa atómica relativa é a média ponderada. Como o isótopo 24 é largamente maioritário, o valor da média (24,31) fica muito próximo de 24."
          },
          {
            "id": 6,
            "enunciado": "Um feixe de iões Ne⁺ passa por um espetrómetro. Os isótopos são Ne-20 (90%), Ne-21 (0,3%) e Ne-22 (9,7%). Que se observa?",
            "opcoes": [
              "3 picos, sendo o do Ne-20 o mais intenso.",
              "3 picos, sendo o do Ne-22 o mais intenso.",
              "1 pico correspondente à massa média.",
              "2 picos, pois a abundância do Ne-21 é demasiado baixa."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "O pico do Ne-22 não é o mais intenso.",
              "2": "O aparelho separa massas exatas, não calcula médias num só pico.",
              "3": "Mesmo as abundâncias muito baixas são detetáveis, originando pico."
            },
            "resolucao": "Existem 3 isótopos logo há 3 picos. A intensidade do pico é diretamente proporcional à abundância isotópica. O Ne-20 tem 90%, produzindo o pico maior."
          },
          {
            "id": 7,
            "enunciado": "A quantidade de matéria em 0,050 g de água (M = 18,02 g/mol) é aproximadamente:",
            "opcoes": [
              "2,8 × 10⁻³ mol",
              "5,0 × 10⁻² mol",
              "1,7 × 10²¹ mol",
              "0,90 mol"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Esta é a massa da amostra em notação científica.",
              "2": "Este valor seria próximo do número de moléculas e não da quantidade em mol.",
              "3": "Provável erro ao dividir a massa molar pela massa."
            },
            "resolucao": "n = m / M = 0,050 / 18,02 ≈ 0,00277 mol = 2,8 × 10⁻³ mol."
          },
          {
            "id": 8,
            "enunciado": "Numa amostra de 10 g de CaCO₃ (M = 100,09 g/mol), o número total de átomos é aproximadamente:",
            "opcoes": [
              "6,0 × 10²²",
              "3,0 × 10²³",
              "1,0 × 10²³",
              "5,0 × 10²³"
            ],
            "correta": 1,
            "explicacoes": {
              "0": "Número de moléculas/unidades formulares e não átomos individuais.",
              "2": "Cálculo sem a multiplicação correta pela Constante de Avogadro.",
              "3": "Múltiplo incorreto face ao número de átomos por unidade."
            },
            "resolucao": "n = 10 / 100,09 ≈ 0,10 mol. N(moléculas) = 0,10 × 6,022×10²³ = 6,0×10²². Como cada molécula tem 5 átomos (1Ca+1C+3O), o total é 5 × 6,0×10²² = 3,0×10²³ átomos."
          },
          {
            "id": 9,
            "enunciado": "Numa mistura com 2,0 mol de Hélio e 3,0 mol de Néon, qual é a fração molar do hélio?",
            "opcoes": [
              "0,40",
              "0,60",
              "2,0",
              "0,66"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Este é o valor da fração molar do Néon.",
              "2": "2,0 é o valor absoluto da quantidade de Hélio, não uma fração.",
              "3": "Foi feita a divisão mol He / mol Ne, em vez do total."
            },
            "resolucao": "n_total = 2,0 + 3,0 = 5,0 mol. Fração molar do He = n(He) / n_total = 2,0 / 5,0 = 0,40."
          },
          {
            "id": 10,
            "enunciado": "Numa liga de 15 g de cobre e 35 g de zinco, a fração em massa de zinco é:",
            "opcoes": [
              "0,30",
              "0,70",
              "0,43",
              "0,50"
            ],
            "correta": 1,
            "explicacoes": {
              "0": "Esta é a fração mássica do cobre.",
              "2": "Divisão simples 15/35.",
              "3": "Seria 0,50 se os componentes tivessem massas perfeitamente iguais."
            },
            "resolucao": "m_total = 15 + 35 = 50 g. Fração de Zn = m(Zn) / m_total = 35 / 50 = 0,70."
          }
        ],
        "SD2 Energia dos eletrões nos átomos": [
          {
            "id": 11,
            "enunciado": "O espetro de emissão do átomo de hidrogénio no visível é constituído por...",
            "opcoes": [
              "um fundo negro com riscas coloridas, correspondendo a energias específicas emitidas.",
              "um fundo colorido contínuo interrompido por riscas negras.",
              "todas as radiações do espetro eletromagnético sem interrupção.",
              "apenas uma risca."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Essa é a descrição de um espetro de absorção.",
              "2": "Isso seria um espetro contínuo, tipo arco-íris de uma lâmpada incandescente.",
              "3": "O átomo emite múltiplas riscas derivadas de diferentes transições."
            },
            "resolucao": "Espetros de emissão atómica apresentam-se como riscas brilhantes num fundo negro. Cada risca surge de uma transição eletrónica única de um nível superior para um inferior, emitindo um fotão."
          },
          {
            "id": 12,
            "enunciado": "A transição de um eletrão do hidrogénio de n=4 para n=2 origina radiação da série de...",
            "opcoes": [
              "Lyman (Ultravioleta).",
              "Balmer (Visível).",
              "Paschen (Infravermelho).",
              "Brackett (Micro-ondas)."
            ],
            "correta": 1,
            "explicacoes": {
              "0": "A série de Lyman implica chegada a n=1.",
              "2": "A série de Paschen implica chegada a n=3.",
              "3": "A série de Brackett implica chegada a n=4."
            },
            "resolucao": "Todas as desexcitações que terminam no nível n=2 no hidrogénio caem no espetro visível, constituindo a série de Balmer."
          },
          {
            "id": 13,
            "enunciado": "Sendo a energia do hidrogénio em n=1 igual a E₁ = -2,18 × 10⁻¹⁸ J, a energia de ionização é...",
            "opcoes": [
              "-2,18 × 10⁻¹⁸ J",
              "2,18 × 10⁻¹⁸ J",
              "0 J",
              "4,36 × 10⁻¹⁸ J"
            ],
            "correta": 1,
            "explicacoes": {
              "0": "A energia de ionização é sempre um valor positivo (energia fornecida/absorvida).",
              "2": "0 J é a energia do eletrão em n=∞, não a energia do processo.",
              "3": "O valor é exatamente o simétrico da energia do nível fundamental."
            },
            "resolucao": "Energia de ionização é a energia gasta para remover o eletrão: E = E∞ - E₁ = 0 - (-2,18 × 10⁻¹⁸) = 2,18 × 10⁻¹⁸ J."
          },
          {
            "id": 14,
            "enunciado": "Um espetro fotoeletrónico (PES) apresenta três picos. O 1º subnível tem 2e⁻, o 2º tem 2e⁻ e o 3º tem 1e⁻. Trata-se do...",
            "opcoes": [
              "Boro (Z = 5)",
              "Lítio (Z = 3)",
              "Carbono (Z = 6)",
              "Berílio (Z = 4)"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Lítio tem Z=3 (1s² 2s¹), apenas 2 picos.",
              "2": "Carbono tem Z=6 (1s² 2s² 2p²), logo o último subnível tem 2 eletrões.",
              "3": "Berílio tem Z=4 (1s² 2s²), apenas 2 picos."
            },
            "resolucao": "Os 3 picos indicam 3 subníveis (1s, 2s, 2p). A população é 2+2+1 = 5 eletrões. O Boro tem Z=5 e configuração 1s² 2s² 2p¹."
          },
          {
            "id": 15,
            "enunciado": "A configuração 1s² 2s² 2p⁶ 3s¹ 3p¹ revela que o átomo se encontra...",
            "opcoes": [
              "num estado excitado (Magnésio).",
              "no estado fundamental (Sódio).",
              "no estado fundamental (Magnésio).",
              "num estado excitado (Alumínio)."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "O Sódio só tem 11 eletrões, este tem 12.",
              "2": "O estado fundamental seria 3s² sem qualquer 3p.",
              "3": "O Alumínio tem 13 eletrões, não 12."
            },
            "resolucao": "Total de e⁻ = 12 (Magnésio). O subnível 3s não está cheio (só tem 1e⁻) e já há eletrões no 3p. O Princípio de Construção (Aufbau) não foi respeitado, logo é um estado excitado."
          },
          {
            "id": 16,
            "enunciado": "O Princípio de Exclusão de Pauli dita que...",
            "opcoes": [
              "cada orbital suporta máximo dois eletrões, com spins opostos.",
              "os eletrões preenchem primeiro a menor energia disponível.",
              "as orbitais p preenchem-se primeiro com eletrões desemparelhados.",
              "não se pode saber ao mesmo tempo posição e velocidade."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Este é o Princípio da Construção (Aufbau).",
              "2": "Esta é a Regra de Hund.",
              "3": "Princípio da Incerteza de Heisenberg."
            },
            "resolucao": "Dois eletrões no mesmo átomo não podem ter os 4 números quânticos iguais. Logo, partilhando a mesma orbital (3 números iguais), o spin (4º número) tem obrigatoriamente de ser diferente."
          },
          {
            "id": 17,
            "enunciado": "Qual dos diagramas de orbitais 2p do azoto (Z=7) obedece à Regra de Hund?",
            "opcoes": [
              "Três eletrões desemparelhados nas orbitais p, com spins paralelos.",
              "Dois eletrões emparelhados e um sozinho.",
              "Três eletrões com spins alternados (sobe, desce, sobe).",
              "Todos os eletrões amontoados na primeira orbital p."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Isto não maximiza o número de eletrões desemparelhados.",
              "2": "Os eletrões isolados devem ter spins paralelos para ter a menor energia possível.",
              "3": "Violaria o Princípio de Pauli e Hund simultaneamente."
            },
            "resolucao": "Para o azoto (2p³), colocamos um eletrão em cada orbital degenerada (px, py, pz) de forma desemparelhada e apontando no mesmo sentido (spins paralelos), minimizando as repulsões."
          },
          {
            "id": 18,
            "enunciado": "Quantos eletrões de valência tem o enxofre (Z=16) no estado fundamental?",
            "opcoes": [
              "6",
              "4",
              "16",
              "2"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Esse é apenas o número no subnível 3p.",
              "2": "16 é o total no átomo, não na camada de valência.",
              "3": "Esse é apenas o número no subnível 3s."
            },
            "resolucao": "Configuração: 1s² 2s² 2p⁶ 3s² 3p⁴. Os eletrões de valência são os do nível n=3. Somando: 2 (do 3s) + 4 (do 3p) = 6 eletrões."
          },
          {
            "id": 19,
            "enunciado": "Relativamente às orbitais, é certo que:",
            "opcoes": [
              "orbitais s são esféricas e as p bilobulares.",
              "orbitais no nível n=2 têm a mesma forma geométrica.",
              "uma orbital d aloja até 10 eletrões.",
              "as fronteiras do átomo são rígidas e impenetráveis."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "No n=2 há s (esférica) e p (lobular).",
              "2": "Uma única orbital suporta só 2 eletrões. O *subnível* d é que suporta 10.",
              "3": "A nuvem é uma representação de probabilidade estendida ao infinito, sem parede sólida."
            },
            "resolucao": "As orbitais 's' centram a densidade probabilística de forma esférica. As 'p' têm uma configuração espacial semelhante a um haltere (bilobular) segundo os eixos x, y, z."
          },
          {
            "id": 20,
            "enunciado": "O pico de maior energia num espetro PES de um átomo de Oxigénio (Z=8) provém de eletrões da orbital...",
            "opcoes": [
              "1s",
              "2s",
              "2p",
              "3s"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "O 2s está mais longe do núcleo que o 1s, logo é mais fácil remover o eletrão.",
              "2": "O 2p é o nível mais externo e menos atraído, tendo a energia de remoção mais baixa.",
              "3": "O oxigénio não tem eletrões na camada 3 no estado fundamental."
            },
            "resolucao": "Quanto mais perto os eletrões estão do núcleo, mais forte é a atração nuclear, resultando numa energia de remoção muito superior. Logo, a orbital 1s gera o pico de maior energia (cerca de 52,6 MJ/mol)."
          }
        ],
        "SD3 Tabela Periódica": []
      },
      "Domínio 2: Propriedades e transformações da matéria": {
        "SD4 Ligação química": [],
        "SD5 Gases e dispersões": [],
        "SD6 Transformações químicas": []
      }
    }
  },
  "11": {
    "Física": {
      "Domínio 1: Mecânica": {
        "SD1 Tempo, posição, velocidade e aceleração": [],
        "SD2 Interações e seus efeitos": [],
        "SD3 Forças e movimentos": []
      },
      "Domínio 2: Ondas e eletromagnetismo": {
        "SD4 Sinais e ondas": [],
        "SD5 Eletromagnetismo e ondas eletromagnéticas": []
      }
    },
    "Química": {
      "Domínio 1: Equilíbrio Químico": {
        "SD1 Aspetos quantitativos das reações químicas": [],
        "SD2 Estado de equilíbrio e sua alteração": [],
        "SD3 Reações ácido-base": [],
        "SD4 Reações de oxidação-redução": []
      }
    }
  }
};
