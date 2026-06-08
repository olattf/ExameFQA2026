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
              "1": "O protão tem carga positiva e o neutrão é que não tem carga elétrica.",
              "2": "O neutrão não tem carga elétrica. O protão e o eletrão é que têm cargas simétricas.",
              "3": "A massa do eletrão é cerca de 1836 vezes menor do que a massa do protão."
            },
            "resolucao": "Os nucleões (protões e neutrões) encontram-se no núcleo e têm massas muito semelhantes entre si. A massa do eletrão, que se encontra na nuvem eletrónica, é praticamente desprezável face à dos nucleões."
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
              "0": "Um catião forma-se precisamente pela perda de eletrões de um átomo, logo o número de eletrões é diferente.",
              "1": "Podem existir isótopos do mesmo elemento, variando o número de neutrões.",
              "2": "Se o número de neutrões pode variar (isótopos), o número de nucleões (protões + neutrões) também pode."
            },
            "resolucao": "O que define um elemento químico é o seu número atómico (Z), que corresponde ao número de protões no núcleo. Um catião forma-se por perda de eletrões, mantendo o núcleo intacto."
          },
          {
            "id": 3,
            "enunciado": "O ião fluoreto (F⁻) deriva do isótopo do flúor que se representa por número de massa 19 e número atómico 9. Este ião é constituído por...",
            "opcoes": [
              "9 protões, 10 neutrões e 10 eletrões.",
              "9 protões, 10 neutrões e 9 eletrões.",
              "9 protões e 10 neutrões.",
              "9 protões e 19 neutrões."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Esta seria a constituição de um átomo de flúor neutro. O ião tem carga -1, logo tem mais um eletrão.",
              "2": "Esta opção indica apenas a constituição do núcleo atómico e omite a nuvem eletrónica.",
              "3": "O número 19 corresponde ao número de massa (protões + neutrões), não ao número de neutrões."
            },
            "resolucao": "Sendo Z = 9, tem 9 protões. O número de neutrões é A - Z = 19 - 9 = 10 neutrões. Como é um anião monovalente (F⁻), ganhou 1 eletrão relativamente ao átomo neutro, passando a ter 9 + 1 = 10 eletrões."
          },
          {
            "id": 4,
            "enunciado": "O isótopo de um elemento X tem um número de massa igual a 40. Sabe-se que tem o mesmo número de neutrões que o isótopo de potássio-39 (Z=19). Indique a afirmação correta.",
            "opcoes": [
              "X é um isótopo do árgon (Z=18).",
              "O número atómico de X é 19.",
              "O átomo de X tem 20 protões e, se estiver neutro, 20 eletrões.",
              "O isótopo de X representa-se por X com A=40 e Z=18."
            ],
            "correta": 2,
            "explicacoes": {
              "0": "O árgon tem Z=18. Como verificamos nos cálculos, o X tem Z=20.",
              "1": "Se tivesse Z=19 seria um isótopo do potássio, mas Z=20.",
              "3": "A representação estaria incorreta pois o Z determinado é 20 e não 18."
            },
            "resolucao": "O isótopo potássio-39 tem 39 - 19 = 20 neutrões. Como X tem também 20 neutrões e A = 40, o seu número atómico é Z = 40 - 20 = 20. Assim, trata-se do elemento Cálcio, que tem 20 protões e 20 eletrões (se neutro)."
          },
          {
            "id": 5,
            "enunciado": "O magnésio na Natureza é constituído por três isótopos: Mg-24, Mg-25 e Mg-26. A abundância do isótopo Mg-24 é 78,99%. A massa atómica relativa do magnésio é 24,31. Indique a afirmação correta.",
            "opcoes": [
              "A abundância do isótopo Mg-25 é igual à do isótopo Mg-26.",
              "O núcleo do isótopo Mg-24 contém 12 protões e 24 neutrões.",
              "A massa de qualquer átomo de Mg-24 é 24,31 u.",
              "A massa atómica relativa do magnésio é mais próxima do número de massa do isótopo mais abundante."
            ],
            "correta": 3,
            "explicacoes": {
              "0": "A abundância restante divide-se entre o Mg-25 e o Mg-26, mas não é necessariamente em partes iguais.",
              "1": "O isótopo Mg-24 contém 12 protões e 12 neutrões (24 - 12 = 12).",
              "2": "24,31 é a massa atómica relativa MÉDIA de todos os isótopos de magnésio, e não a massa específica do isótopo 24."
            },
            "resolucao": "A massa atómica relativa calcula-se através da média ponderada das massas dos isótopos. O isótopo Mg-24 tem a maior abundância (78,99%), aproximando o valor da média (24,31) para perto de 24."
          },
          {
            "id": 6,
            "enunciado": "Um feixe de iões Ne⁺ passa por um espetrómetro de massa. Sabendo que o néon tem os isótopos Ne-20 (90,48%), Ne-21 (0,27%) e Ne-22 (9,25%), quantos picos se observam no espetro e qual o mais intenso?",
            "opcoes": [
              "3 picos, sendo o do Ne-20 o mais intenso.",
              "3 picos, sendo o do Ne-22 o mais intenso.",
              "1 pico correspondente à massa média.",
              "2 picos, pois o Ne-21 tem uma abundância desprezável e não é detetado."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "O Ne-22 tem apenas 9,25% de abundância, logo não será o mais intenso.",
              "2": "A espetrometria de massa separa as massas individuais, não apresenta a média.",
              "3": "Os espetrómetros de massa têm sensibilidade para detetar mesmo as abundâncias baixas, logo observam-se 3 picos."
            },
            "resolucao": "Cada isótopo produz um pico diferente. A intensidade (altura) desse pico é proporcional à abundância isotópica. Haverá 3 picos e o do Ne-20 será o maior, devido aos seus 90,48%."
          },
          {
            "id": 7,
            "enunciado": "A quantidade de matéria de água existente numa gota de água pura, de massa 0,050 g, é aproximadamente: (M(H₂O) = 18,02 g/mol)",
            "opcoes": [
              "2,8 × 10⁻³ mol",
              "5,0 × 10⁻² mol",
              "1,7 × 10²¹ mol",
              "0,90 mol"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Confundiste a massa da gota com a quantidade de matéria. Usa n = m/M.",
              "2": "Este valor aproxima-se do número de moléculas da gota, não da quantidade de matéria.",
              "3": "Provavelmente invertes as variáveis ou efetuaste a divisão M/m."
            },
            "resolucao": "A quantidade de matéria relaciona-se com a massa e a massa molar por: n = m / M. Substituindo: n = 0,050 / 18,02 ≈ 0,00277 mol, que é 2,8 × 10⁻³ mol."
          },
          {
            "id": 8,
            "enunciado": "Numa amostra de 10 g de carbonato de cálcio, CaCO₃ (M = 100,09 g/mol), o número total de átomos é aproximadamente:",
            "opcoes": [
              "6,0 × 10²²",
              "3,0 × 10²³",
              "1,0 × 10²³",
              "5,0 × 10²³"
            ],
            "correta": 1,
            "explicacoes": {
              "0": "Este é o número de unidades formulares (moléculas) de CaCO₃, mas a questão pede o número TOTAL de átomos.",
              "2": "Possível erro a relacionar as unidades com a constante de Avogadro.",
              "3": "Não corresponde ao cálculo com as proporções corretas de átomos."
            },
            "resolucao": "1º) n = m / M = 10 / 100,09 ≈ 0,10 mol. 2º) N = n × NA = 0,10 × (6,022 × 10²³) ≈ 6,0 × 10²² unidades de CaCO₃. 3º) Cada unidade tem 5 átomos (1 Ca, 1 C, 3 O). O total é 5 × 6,0 × 10²² = 3,0 × 10²³ átomos."
          },
          {
            "id": 9,
            "enunciado": "Numa mistura gasosa constituída por 2,0 mol de Hélio (He) e 3,0 mol de Néon (Ne), qual é a fração molar do hélio?",
            "opcoes": [
              "0,40",
              "0,60",
              "2,0",
              "0,66"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "0,60 seria a fração molar do Néon (3,0 / 5,0).",
              "2": "2,0 é a quantidade de matéria de hélio, não a sua fração. A fração molar nunca é superior a 1.",
              "3": "Dividiste a quantidade de hélio pela de néon (2/3), mas o denominador deve ser o total da mistura."
            },
            "resolucao": "Fração molar (x) = n(componente) / n(total). n_total = 2,0 + 3,0 = 5,0 mol. Logo, x(He) = 2,0 / 5,0 = 0,40."
          },
          {
            "id": 10,
            "enunciado": "Uma liga metálica contém 15 g de cobre e 35 g de zinco. Qual é a fração em massa de zinco na liga?",
            "opcoes": [
              "0,30",
              "0,70",
              "0,43",
              "0,50"
            ],
            "correta": 1,
            "explicacoes": {
              "0": "0,30 corresponde à fração em massa de cobre.",
              "2": "Razão entre a massa de cobre e a massa de zinco, e não fração mássica.",
              "3": "Seria 0,50 se houvesse massas iguais de ambos os metais."
            },
            "resolucao": "Fração em massa = m(componente) / m(total). Massa total = 15 + 35 = 50 g. Fração de Zn = 35 / 50 = 0,70."
          },
          {
            "id": 11,
            "enunciado": "Considere um copo contendo 250 g de água pura (M(H₂O) = 18,02 g/mol). Qual das seguintes afirmações é verdadeira sobre esta amostra?",
            "opcoes": [
              "A amostra contém aproximadamente 13,9 mol de moléculas de água.",
              "A amostra contém 8,35 × 10²⁴ átomos de hidrogénio.",
              "A quantidade de matéria de oxigénio é de 27,8 mol.",
              "A massa da amostra representa cerca de 250 mol de água."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "O valor 8,35 × 10²⁴ é o número de moléculas de H₂O. Os átomos de H seriam o dobro.",
              "2": "A quantidade de matéria de oxigénio é igual à de água (13,9 mol).",
              "3": "250 g de massa não são 250 moles."
            },
            "resolucao": "n = m / M = 250 / 18,02 = 13,87 mol. A opção que afirma ter aproximadamente 13,9 mol de moléculas de água é a única correta."
          },
          {
            "id": 12,
            "enunciado": "Em relação às dimensões à escala atómica, indique a afirmação correta.",
            "opcoes": [
              "O nanómetro (nm) equivale a 10⁻⁶ m.",
              "A nuvem eletrónica tem uma dimensão da ordem de grandeza de 10⁻¹⁵ m.",
              "O núcleo atómico é cerca de 100 000 vezes menor do que o átomo.",
              "As ordens de grandeza macroscópicas descrevem as dimensões atómicas de forma direta."
            ],
            "correta": 2,
            "explicacoes": {
              "0": "O nanómetro equivale a 10⁻⁹ m. É o micrómetro que é 10⁻⁶ m.",
              "1": "10⁻¹⁵ m pertence ao núcleo. O átomo (nuvem eletrónica) ronda os 10⁻¹⁰ m.",
              "3": "As escalas macroscópicas não são adequadas para descrever entidades à escala atómica."
            },
            "resolucao": "O raio atómico (tamanho do átomo) é da ordem dos 10⁻¹⁰ m e o raio do núcleo atómico é dos 10⁻¹⁵ m. A diferença de 10⁵ significa que o átomo é cerca de 100 000 vezes maior que o seu núcleo."
          }
        ],
        "SD2 Energia dos eletrões nos átomos": [
          {
            "id": 13,
            "enunciado": "O espetro de emissão do átomo de hidrogénio no visível é constituído por...",
            "opcoes": [
              "um fundo negro com riscas coloridas, correspondendo a energias específicas emitidas pelas transições dos eletrões.",
              "um fundo colorido contínuo interrompido por riscas negras.",
              "todas as radiações do espetro eletromagnético sem qualquer interrupção.",
              "apenas uma risca correspondente à transição do eletrão para o estado fundamental."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Essa é a descrição de um espetro de absorção (radiação em falta num fundo contínuo).",
              "2": "Isso seria um espetro de emissão contínuo (ex: luz branca de uma lâmpada incandescente), não atómico.",
              "3": "O átomo de hidrogénio emite várias riscas distintas (séries de Lyman, Balmer, Paschen, etc.) derivadas de múltiplas transições possíveis."
            },
            "resolucao": "Os espetros atómicos de emissão são descontínuos (de riscas). Aparecem como riscas brilhantes (coloridas, no caso do visível) sobre um fundo escuro. Cada risca corresponde à emissão de um fotão com energia exatamente igual à diferença de energia entre dois níveis da nuvem eletrónica."
          },
          {
            "id": 14,
            "enunciado": "Considere o diagrama de níveis de energia do átomo de hidrogénio. A transição de um eletrão do nível n=4 para o nível n=2 origina a emissão de radiação integrada na série de...",
            "opcoes": [
              "Lyman (Ultravioleta).",
              "Balmer (Visível).",
              "Paschen (Infravermelho).",
              "Brackett (Micro-ondas)."
            ],
            "correta": 1,
            "explicacoes": {
              "0": "A série de Lyman ocorre quando o eletrão transita para o nível fundamental (n=1).",
              "2": "A série de Paschen ocorre para transições cujo nível de chegada é n=3.",
              "3": "A série de Brackett ocorre para o nível n=4 (neste caso o eletrão partiu de n=4, não chegou a n=4 vindo de cima)."
            },
            "resolucao": "Qualquer transição de um estado excitado (n>2) para o estado n=2 (primeiro estado excitado) no átomo de hidrogénio origina a emissão de radiação visível, constituindo a Série de Balmer."
          },
          {
            "id": 15,
            "enunciado": "A energia do eletrão no átomo de hidrogénio no estado fundamental (n=1) é E₁ = -2,18 × 10⁻¹⁸ J. Qual a energia de ionização deste átomo, expressa em Joule?",
            "opcoes": [
              "-2,18 × 10⁻¹⁸ J",
              "2,18 × 10⁻¹⁸ J",
              "0 J",
              "4,36 × 10⁻¹⁸ J"
            ],
            "correta": 1,
            "explicacoes": {
              "0": "A energia de ionização é a energia fornecida (absorvida), logo o seu valor é positivo. Esse é o valor da energia do nível n=1.",
              "2": "0 J é a energia do eletrão quando já foi removido (n=∞), não a energia necessária para o remover.",
              "3": "Este seria o dobro da energia necessária."
            },
            "resolucao": "A energia de ionização corresponde à energia mínima necessária para remover o eletrão do estado fundamental (levar de n=1 até n=∞, onde E=0). Assim, ∆E = E∞ - E₁ = 0 - (-2,18 × 10⁻¹⁸) = 2,18 × 10⁻¹⁸ J."
          },
          {
            "id": 16,
            "enunciado": "O espetro fotoeletrónico (PES) de um determinado elemento apresenta três picos de energia de remoção. Sabendo que o subnível de menor energia contém 2 eletrões, o subnível intermédio 2 eletrões e o de maior energia apenas 1 eletrão, de que elemento se trata?",
            "opcoes": [
              "Boro (Z = 5)",
              "Lítio (Z = 3)",
              "Carbono (Z = 6)",
              "Berílio (Z = 4)"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "O Lítio (Z=3) tem a configuração 1s² 2s¹, logo apresenta apenas 2 picos no espetro.",
              "2": "O Carbono (Z=6) tem configuração 1s² 2s² 2p², logo o terceiro subnível teria 2 eletrões e não 1.",
              "3": "O Berílio (Z=4) tem configuração 1s² 2s², apresentando apenas 2 picos."
            },
            "resolucao": "Cada pico no espetro PES corresponde a um subnível de energia ocupado. Temos 3 picos, logo 3 subníveis. As populações dadas indicam a configuração: 1s² (maior energia de remoção, 2 eletrões), 2s² (2 eletrões) e 2p¹ (menor energia de remoção, 1 eletrão). O total de eletrões é 5, correspondendo ao Boro."
          },
          {
            "id": 17,
            "enunciado": "Qual dos seguintes diagramas ou distribuições para o subnível 2p do átomo de azoto (Z=7) no estado fundamental respeita a Regra de Hund?",
            "opcoes": [
              "Três eletrões desemparelhados, um em cada orbital p, com spins paralelos.",
              "Dois eletrões emparelhados numa orbital p e um eletrão numa segunda orbital p.",
              "Três eletrões desemparelhados com spins alternados.",
              "Três eletrões na mesma orbital p."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Isto violaria a Regra de Hund, que dita que se deve maximizar o número de eletrões desemparelhados em orbitais degeneradas.",
              "2": "Para minimizar a repulsão eletrónica, os spins dos eletrões desemparelhados devem ser paralelos (mesmo sentido).",
              "3": "Isto viola o Princípio de Exclusão de Pauli, que determina um máximo de 2 eletrões por orbital."
            },
            "resolucao": "O Azoto tem configuração 1s² 2s² 2p³. No preenchimento de orbitais com a mesma energia (degeneradas, como as 3 orbitais p), a Regra de Hund estabelece que o estado de menor energia é aquele que tem o maior número de eletrões desemparelhados com spins paralelos."
          },
          {
            "id": 18,
            "enunciado": "Analise a configuração eletrónica: 1s² 2s² 2p⁶ 3s¹ 3p¹. Esta configuração corresponde a um átomo...",
            "opcoes": [
              "de magnésio (Z=12) num estado excitado.",
              "de sódio (Z=11) no estado fundamental.",
              "de magnésio (Z=12) no estado fundamental.",
              "de alumínio (Z=13) num estado excitado."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "O átomo tem 12 eletrões no total. O sódio tem apenas 11.",
              "2": "No estado fundamental, o magnésio seria 1s² 2s² 2p⁶ 3s². O subnível 3s não está completo.",
              "3": "O alumínio tem 13 eletrões no total, enquanto a configuração apresenta 12."
            },
            "resolucao": "O número total de eletrões é 2 + 2 + 6 + 1 + 1 = 12, indicando que se trata do elemento Magnésio (Z=12). Como o subnível 3s tem apenas 1 eletrão e há 1 eletrão num nível superior de energia (3p) sem que o 3s esteja preenchido, o Princípio da Construção não foi seguido, tratando-se de um estado excitado."
          },
          {
            "id": 19,
            "enunciado": "O Princípio de Exclusão de Pauli estabelece que...",
            "opcoes": [
              "cada orbital atómica pode ser ocupada por um máximo de dois eletrões, que devem ter spins opostos.",
              "os eletrões preenchem primeiramente os subníveis de menor energia disponível.",
              "orbitais da mesma energia preenchem-se de modo a maximizar os eletrões desemparelhados.",
              "é impossível determinar com precisão a posição e a velocidade de um eletrão simultaneamente."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Esta é a definição do Princípio da Construção (Aufbau).",
              "2": "Esta é a definição da Regra de Hund.",
              "3": "Este é o Princípio da Incerteza de Heisenberg."
            },
            "resolucao": "O Princípio de Pauli dita que dois eletrões num mesmo átomo não podem ter os quatro números quânticos iguais. Na prática, isto significa que uma orbital suporta no máximo dois eletrões, e estes têm obrigatoriamente de apresentar spins antiparalelos (opostos)."
          },
          {
            "id": 20,
            "enunciado": "Considere o átomo de enxofre (Z=16). Quantos eletrões de valência possui este átomo no estado fundamental?",
            "opcoes": [
              "6",
              "4",
              "16",
              "2"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "O valor 4 corresponde apenas aos eletrões do subnível 3p. Os eletrões do 3s também são de valência.",
              "2": "16 é o número total de eletrões do átomo, não apenas os do último nível.",
              "3": "Corresponde apenas aos eletrões do subnível 3s."
            },
            "resolucao": "A configuração eletrónica do enxofre é 1s² 2s² 2p⁶ 3s² 3p⁴. Os eletrões de valência são os que se encontram no nível de energia mais elevado (n=3). Somando os eletrões de 3s² e 3p⁴, obtemos 2 + 4 = 6 eletrões de valência."
          },
          {
            "id": 21,
            "enunciado": "Relativamente à forma das orbitais atómicas (regiões de maior probabilidade de encontrar o eletrão), é correto afirmar que:",
            "opcoes": [
              "as orbitais s têm simetria esférica e as orbitais p são bilobulares.",
              "todas as orbitais do nível de energia n=2 apresentam a mesma forma.",
              "uma orbital d pode conter um máximo de 10 eletrões.",
              "a nuvem eletrónica apresenta fronteiras rígidas e bem definidas."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "No nível n=2 existem orbitais s (esféricas) e p (bilobulares), logo não têm a mesma forma.",
              "2": "Um *subnível* d suporta até 10 eletrões (5 orbitais), mas *uma única orbital* d suporta apenas 2 eletrões.",
              "3": "A nuvem eletrónica não tem limites físicos rígidos, é um modelo probabilístico que se estende até ao infinito."
            },
            "resolucao": "O tipo de orbital define a sua forma espacial. As orbitais s (l=0) têm forma esférica em torno do núcleo. As orbitais p (l=1) são formadas por dois lobos de probabilidade (forma de haltere) orientados ao longo dos eixos cartesianos (px, py, pz)."
          },
          {
            "id": 22,
            "enunciado": "Um átomo emite um fotão quando um eletrão transita de um nível de maior energia para um de menor energia. Se a diferença de energia entre os níveis envolvidos for muito elevada, a radiação emitida terá...",
            "opcoes": [
              "maior frequência e menor comprimento de onda.",
              "menor frequência e maior comprimento de onda.",
              "maior frequência e maior comprimento de onda.",
              "a mesma frequência independentemente da energia."
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Menor frequência significa menor energia, o que contradiz a \"diferença de energia muito elevada\".",
              "2": "Frequência e comprimento de onda são inversamente proporcionais. Se a frequência é maior, o comprimento de onda tem de ser menor.",
              "3": "A frequência está diretamente ligada à energia através da relação E = hf."
            },
            "resolucao": "A energia de um fotão é diretamente proporcional à sua frequência (E = hf, onde h é a constante de Planck) e inversamente proporcional ao seu comprimento de onda (E = hc/λ). Portanto, transições muito energéticas emitem fotões de alta frequência e baixo comprimento de onda."
          },
          {
            "id": 23,
            "enunciado": "Para um átomo de Oxigénio (Z=8) no estado fundamental, as energias de remoção eletrónica avaliadas por PES revelaram três valores: 52,6 MJ/mol, 3,12 MJ/mol e 1,31 MJ/mol. O valor de 52,6 MJ/mol corresponde à remoção de um eletrão da orbital...",
            "opcoes": [
              "1s",
              "2s",
              "2p",
              "3s"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "Os eletrões 2s estão mais afastados do núcleo do que os 1s, logo a sua energia de remoção (ligação) é menor (3,12 MJ/mol).",
              "2": "Os eletrões 2p são os menos fortemente ligados ao núcleo (último subnível), tendo a menor energia de remoção (1,31 MJ/mol).",
              "3": "O oxigénio no estado fundamental não tem eletrões na orbital 3s."
            },
            "resolucao": "A energia de remoção é tanto maior quanto maior for a força de atração núcleo-eletrão. Os eletrões do subnível 1s são os que se encontram mais próximos do núcleo, sofrendo maior atração e, por conseguinte, requerendo a energia máxima (52,6 MJ/mol) para serem ejetados."
          },
          {
            "id": 24,
            "enunciado": "Qual a relação que permite calcular a energia de um fotão de luz visível a partir da sua frequência (f)?",
            "opcoes": [
              "E = h × f",
              "E = c / f",
              "E = h / f",
              "E = m × c²"
            ],
            "correta": 0,
            "explicacoes": {
              "1": "c / f dá-nos o comprimento de onda (λ), não a energia.",
              "2": "A constante de Planck é multiplicada, e não dividida, pela frequência.",
              "3": "Equação de Einstein para a equivalência massa-energia, não a energia de um fotão em função da sua frequência."
            },
            "resolucao": "A Hipótese de Planck postula que a energia da radiação é quantizada e calcula-se pela expressão E = h × f, em que 'E' é a energia do fotão, 'h' a constante de Planck e 'f' a frequência da radiação."
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
