const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Você está em uma reunião sobre o futuro da sua cidade. Um novo projeto de energia renovável foi proposto. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é uma ótima ideia!",
                afirmacao: "Você acredita que a energia renovável pode ajudar a preservar o meio ambiente."
            },
            {
                texto: "Isso pode ser arriscado.",
                afirmacao: "Você tem preocupações sobre os custos e a viabilidade do projeto."
            }
        ]
    },
    {
        enunciado: "A cidade decide implementar um programa de reciclagem. Como você contribui?",
        alternativas: [
            {
                texto: "Participo ativamente, ajudando a educar os moradores sobre a reciclagem.",
                afirmacao: "Você se sente satisfeito por fazer a diferença na comunidade."
            },
            {
                texto: "Acho que não vai funcionar, mas vou tentar reciclar em casa.",
                afirmacao: "Você começa a se conscientizar sobre a importância da reciclagem."
            }
        ]
    },
    {
        enunciado: "Um novo transporte público sustentável está sendo planejado. O que você acha?",
        alternativas: [
            {
                texto: "É uma excelente iniciativa para reduzir a poluição!",
                afirmacao: "Você se anima com a ideia de um futuro mais limpo."
            },
            {
                texto: "E se não houver demanda suficiente?",
                afirmacao: "Você se preocupa com a sustentabilidade financeira do projeto."
            }
        ]
    },
    {
        enunciado: "Você tem a chance de plantar uma árvore em sua comunidade. O que faz?",
        alternativas: [
            {
                texto: "Planto uma árvore e convido amigos para se juntarem a mim.",
                afirmacao: "Você se sente parte de algo maior e promove a conscientização."
            },
            {
                texto: "Acho que não vai fazer diferença.",
                afirmacao: "Você ainda não vê o impacto que pequenas ações podem ter."
            }
        ]
    },
    {
        enunciado: "Após várias discussões, a cidade decide adotar práticas mais sustentáveis. Como você se sente?",
        alternativas: [
            {
                texto: "Orgulhoso de fazer parte dessa mudança!",
                afirmacao: "Você se sente motivado a continuar lutando por um futuro sustentável."
            },
            {
                texto: "Cético sobre a implementação real.",
                afirmacao: "Você ainda tem dúvidas sobre a eficácia das ações propostas."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta(); 