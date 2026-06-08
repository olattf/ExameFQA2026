const quizData = {
  "11": {
    "Física": {
      "Domínio 1: Mecânica": {
        "SD1: Tempo, posição, velocidade e aceleração": [
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
        ]
      }
    }
  }
};