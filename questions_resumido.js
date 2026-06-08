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
        "SD1 Massa e tamanho dos átomos": [],
        "SD2 Energia dos eletrões nos átomos": [],
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
        "SD1 Tempo, posição, velocidade e aceleração": [
          {
            "id": 1,
            "enunciado": "Um veículo automóvel move-se ao longo de uma estrada retilínea. A sua equação da posição em função do tempo, expressa no Sistema Internacional (SI), é dada por:\n\nx(t) = 5,0t² - 2,0t\n\nQual é o valor da velocidade inicial (no instante t = 0 s) e o valor da aceleração do veículo?",
            "opcoes": [
              "Velocidade inicial = 0 m/s e Aceleração = 5,0 m/s²",
              "Velocidade inicial = -2,0 m/s e Aceleração = 5,0 m/s²",
              "Velocidade inicial = -2,0 m/s e Aceleração = 10,0 m/s²",
              "Velocidade inicial = 2,0 m/s e Aceleração = 10,0 m/s²"
            ],
            "correta": 2,
            "explicacoes": {
              "0": "Incorreto. Assumiste que a velocidade inicial é zero, mas o termo linear (-2,0t) indica que existe uma velocidade inicial diferente de zero no instante inicial.",
              "1": "Incorreto. Identificaste bem a velocidade inicial através do termo linear, mas esqueceste-te de que na equação geral da posição x(t) = x0 + v0·t + (1/2)·a·t², o coeficiente de t² corresponde a metade da aceleração (1/2·a). Portanto, a aceleração não é simplesmente 5,0.",
              "3": "Incorreto. O sinal do termo da velocidade na equação é negativo (-2,0t), o que significa que a componente da velocidade inicial é -2,0 m/s e não positiva."
            },
            "resolucao": "Comparando a equação dada: x(t) = 5,0t² - 2,0t com a equação geral do movimento retilíneo uniformemente variado:\n\nx(t) = x0 + v0·t + (1/2)·a·t²\n\nPodemos identificar diretamente as componentes:\n1) O termo que multiplica por t é a velocidade inicial v0. Logo, v0 = -2,0 m/s.\n2) O termo que multiplica por t² corresponde a (1/2)·a. Logo, (1/2)·a = 5,0, o que implica que a aceleração a = 2 * 5,0 = 10,0 m/s²."
          }
        ],
        "SD2 Interações e seus efeitos": [],
        "SD3 Forças e movimentos": []
      },
      "Domínio 2: Ondas e eletromagnetismo": {
        "SD4 Sinais e ondas": [],
        "SD5 Eletromagnetismo e ondas eletromagnéticas": []
      }
    },
    "Química": {
      "Domínio 1: Equilíbrio químico": {
        "SD1 Aspetos quantitativos das reações químicas": [],
        "SD2 Estado de equilíbrio e extensão das reações químicas": []
      },
      "Domínio 2: Reações em sistemas aquosos": {
        "SD3 Reações ácido-base": [],
        "SD4 Reações de oxidação-redução": [],
        "SD5 Soluções e equilíbrio de solubilidade": []
      }
    }
  }
};