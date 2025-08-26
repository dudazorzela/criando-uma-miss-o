const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{

    enunciado: "Na escola, sua professora de Ciências inicia uma sequência de aulas sobre mudanças climáticas. Ela apresenta dados sobre o aumento da temperatura global e pede que você reflita sobre isso. Qual é sua primeira reação?",
    alternativas: [
      {
        texto: "Isso é preocupante!",
        afirmacao: "Você se mostra consciente dos efeitos negativos das mudanças climáticas."
      },
      {
        texto: "Acho exagero, sempre existiram mudanças no clima.",
        afirmacao: "Você demonstra ceticismo sobre o impacto das ações humanas no meio ambiente."
      }
    ]
  },
  {
    enunciado: "Após a discussão inicial, a professora pede que cada grupo proponha uma ação sustentável que pode ser aplicada na escola ou na comunidade. Qual atitude você toma?",
    alternativas: [
      {
        texto: "Sugere implantar coleta seletiva e reciclagem na escola.",
        afirmacao: "Sua iniciativa ajuda a conscientizar colegas e reduzir o lixo."
      },
      {
        texto: "Sugere campanhas de conscientização sobre economia de energia.",
        afirmacao: "Sua ideia contribui para mudanças de hábitos no dia a dia."
      }
    ]
  },
  {
    enunciado: "No fim da atividade, surge um debate sobre o papel dos jovens no combate às mudanças climáticas. Como você se posiciona?",
    alternativas: [
      {
        texto: "Defende que os jovens são protagonistas e podem influenciar políticas públicas.",
        afirmacao: "Sua fala inspira colegas a se engajarem em causas ambientais."
      },
      {
        texto: "Acredita que apenas governos e grandes empresas têm poder para mudar.",
        afirmacao: "Você aponta para a responsabilidade das instituições em mudanças globais."
      }
    ]
  },
  {
    enunciado: "A professora então pede que a turma crie uma campanha de conscientização digital sobre sustentabilidade. Qual recurso você escolhe utilizar?",
    alternativas: [
      {
        texto: "Cria um vídeo educativo com dados e dicas sustentáveis.",
        afirmacao: "Sua produção ajuda a informar e engajar a comunidade escolar."
      },
      {
        texto: "Elabora posts para redes sociais com ilustrações e frases de impacto.",
        afirmacao: "Sua ideia alcança muitas pessoas de forma criativa e rápida."
      }
    ]
  }
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
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
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
caixaPerguntas.textContent = "Em 2025...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();