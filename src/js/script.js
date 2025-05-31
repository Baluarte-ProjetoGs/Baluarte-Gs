// JavaScript do SlideShow
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function mostrarSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slides[slideIndex].style.display = "block";
}

function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
}


function autoPlay() {
    slideIndex++;
    mostrarSlide(slideIndex);
    setTimeout(autoPlay, 5000);
}


mostrarSlide(slideIndex);
autoPlay()

// JavaScript do Menu Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});


const menuIcons = document.getElementById('menuIcons');
const navbar = document.getElementById('navbar');
// JavaScript da personalização de tema
const body = document.body;
const container = document.getElementById('container');
const lightBtn = document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');
const accessibleBtn = document.getElementById('accessibleBtn');
const allBtns = [lightBtn, darkBtn, accessibleBtn];
const allTabBtns = document.querySelectorAll('.tab-btn');
const allInputs = document.querySelectorAll('input');

function setLightMode() {
    body.className = "";
    navbar.className = "navbar";
    container.className = "container";
    allBtns.forEach(btn => btn.classList.remove('dark-mode', 'accessible-mode', 'active'));
    allTabBtns.forEach(btn => btn.classList.remove('dark-mode', 'accessible-mode'));
    allInputs.forEach(input => input.className = "");
    lightBtn.classList.add('active');
}
function setDarkMode() {
    body.className = "dark-mode";
    navbar.className = "navbar dark-mode";
    container.className = "container dark-mode";
    allBtns.forEach(btn => btn.classList.remove('dark-mode', 'accessible-mode', 'active'));
    allBtns[1].classList.add('dark-mode', 'active');
    allTabBtns.forEach(btn => btn.classList.add('dark-mode'));
    allInputs.forEach(input => { input.className = "dark-mode"; });
}
function setAccessibleMode() {
    body.className = "accessible-mode";
    navbar.className = "navbar accessible-mode";
    container.className = "container accessible-mode";
    allBtns.forEach(btn => btn.classList.remove('dark-mode', 'accessible-mode', 'active'));
    allBtns[2].classList.add('accessible-mode', 'active');
    allTabBtns.forEach(btn => btn.classList.add('accessible-mode'));
    allInputs.forEach(input => { input.className = "accessible-mode"; });
}
lightBtn.onclick = setLightMode;
darkBtn.onclick = setDarkMode;
accessibleBtn.onclick = setAccessibleMode;
setLightMode();

// Trocas de abas (Cadastro/Quiz)
const cadastroTabBtn = document.getElementById('cadastroTabBtn');
const quizTabBtn = document.getElementById('quizTabBtn');
const cadastroTab = document.getElementById('cadastroTab');
const quizTab = document.getElementById('quizTab');
cadastroTabBtn.onclick = function () {
    cadastroTab.style.display = '';
    quizTab.style.display = 'none';
    cadastroTabBtn.classList.add('active');
    quizTabBtn.classList.remove('active');
}
quizTabBtn.onclick = function () {
    cadastroTab.style.display = 'none';
    quizTab.style.display = '';
    cadastroTabBtn.classList.remove('active');
    quizTabBtn.classList.add('active');
    mostrarPergunta();
}

// JavaScript da Validação de formulário
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmarSenha').value;

    let valido = true;
    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroSenha').textContent = '';
    document.getElementById('erroConfirmarSenha').textContent = '';
    document.getElementById('mensagemFinal').textContent = '';

    if (nome.length < 2 || /\d/.test(nome)) {
        document.getElementById('erroNome').textContent = 'Digite um nome válido (mín. 2 letras, sem números).';
        valido = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('erroEmail').textContent = 'Digite um e-mail válido.';
        valido = false;
    }
    if (senha.length < 6 || !/\d/.test(senha) || !/[a-zA-Z]/.test(senha)) {
        document.getElementById('erroSenha').textContent = 'A senha deve ter 6 caracteres, uma letra e um número.';
        valido = false;
    }
    if (senha !== confirmarSenha) {
        document.getElementById('erroConfirmarSenha').textContent = 'As senhas não conferem.';
        valido = false;
    }
    if (valido) {
        document.getElementById('mensagemFinal').textContent = 'Cadastro realizado com sucesso!';
    }
});


// JavaScript do Quiz
const quizPerguntas = [
    {
        pergunta: "O que fazer ao receber um alerta de enchente?",
        opcoes: [
            "Ignorar o alerta",
            "Procurar abrigo seguro imediatamente",
            "Esperar a água subir para sair"
        ],
        resposta: 1,
        explicacao: "Sempre procure abrigo seguro o quanto antes ao receber um alerta."
    },
    {
        pergunta: "Qual dessas ações é a mais segura durante uma enchente?",
        opcoes: [
            "Tentar atravessar ruas alagadas",
            "Ficar em local elevado e aguardar informações",
            "Usar eletrônicos perto da água"
        ],
        resposta: 1,
        explicacao: "Evite áreas alagadas e fique em lugares altos, longe do perigo."
    },
    {
        pergunta: "Como ajudar a comunidade pelo aplicativo?",
        opcoes: [
            "Registrar ocorrências com fotos e localização",
            "Compartilhar boatos",
            "Fazer postagens sem detalhes"
        ],
        resposta: 0,
        explicacao: "Registrar ocorrências reais e detalhadas ajuda todos a se protegerem melhor."
    },
    {
        pergunta: "Por que o modo offline da plataforma é importante?",
        opcoes: [
            "Permite acessar mapas e rotas de fuga sem internet",
            "Economiza bateria do celular",
            "Serve apenas para jogos"
        ],
        resposta: 0,
        explicacao: "O modo offline garante acesso a informações críticas mesmo sem conexão."
    },
    {
        pergunta: "O que deve ser feito antes de uma chuva forte anunciada?",
        opcoes: [
            "Ignorar os alertas",
            "Se preparar e acompanhar as informações da plataforma",
            "Sair de casa sem destino"
        ],
        resposta: 1,
        explicacao: "Se preparar e acompanhar os alertas ajuda a evitar riscos e salvar vidas."
    },
    {
        pergunta: "Como identificar um abrigo seguro na plataforma?",
        opcoes: [
            "Verificar as marcações no mapa interativo",
            "Aguardar alguém avisar na rua",
            "Pedir indicação em redes sociais"
        ],
        resposta: 0,
        explicacao: "Use o mapa da plataforma para encontrar abrigos oficiais e rotas seguras."
    },
    {
        pergunta: "Em caso de risco extremo, o sistema também envia alertas por:",
        opcoes: [
            "E-mail apenas",
            "SMS para garantir o recebimento",
            "Redes sociais"
        ],
        resposta: 1,
        explicacao: "SMS alcança todos, até em áreas com pouca internet, garantindo o aviso."
    },
    {
        pergunta: "O que NÃO deve ser feito ao registrar uma ocorrência?",
        opcoes: [
            "Adicionar localização",
            "Adicionar uma descrição clara",
            "Registrar informações falsas"
        ],
        resposta: 2,
        explicacao: "Nunca registre informações falsas, pois isso atrapalha toda a comunidade."
    },
    {
        pergunta: "Quem pode criar comunidades locais dentro da plataforma?",
        opcoes: [
            "Qualquer usuário cadastrado",
            "Apenas a equipe técnica",
            "Somente moradores antigos"
        ],
        resposta: 0,
        explicacao: "Qualquer usuário pode criar ou entrar em comunidades de bairro/cidade."
    },
    {
        pergunta: "Qual benefício principal de integrar dados de previsão meteorológica oficial?",
        opcoes: [
            "Ter alertas hiperlocais e mais precisos",
            "Economizar espaço no celular",
            "Deixar a plataforma mais lenta"
        ],
        resposta: 0,
        explicacao: "Previsões oficiais tornam os alertas mais precisos para cada região."
    }
];
let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {
    const quizDiv = document.getElementById('quiz');
    document.getElementById('resultado').textContent = '';
    if (perguntaAtual < quizPerguntas.length) {
        const q = quizPerguntas[perguntaAtual];
        let html = `<div class="pergunta">${q.pergunta}</div>`;
        q.opcoes.forEach((op, idx) => {
            html += `<div class="opcao" onclick="verificarResposta(${idx})">${op}</div>`;
        });
        quizDiv.innerHTML = html;
    } else {
        mostrarResultado();
    }
}

function verificarResposta(indice) {
    const q = quizPerguntas[perguntaAtual];
    let resultadoDiv = document.getElementById('resultado');
    if (indice === q.resposta) {
        pontos++;
        resultadoDiv.innerHTML = `<span class="success">Acertou!</span> ${q.explicacao}`;
    } else {
        resultadoDiv.innerHTML = `<span class="error">Errou!</span> ${q.explicacao}`;
    }
    perguntaAtual++;
    setTimeout(mostrarPergunta, 3500);
}

function mostrarResultado() {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = "";
    let mensagem = `Você acertou ${pontos} de ${quizPerguntas.length} perguntas.<br>`;
    if (pontos === quizPerguntas.length) {
        mensagem += "Parabéns! Você está preparado!";
    } else if (pontos >= 7) {
        mensagem += "Muito bom! Só mais um pouco para ficar 100% preparado.";
    } else {
        mensagem += "Continue estudando e fique atento aos alertas!";
    }
    document.getElementById('resultado').innerHTML = mensagem;
    document.getElementById('reiniciar').style.display = 'inline-block';
}

document.getElementById('reiniciar').onclick = function () {
    perguntaAtual = 0;
    pontos = 0;
    this.style.display = 'none';
    mostrarPergunta();
}

window.verificarResposta = verificarResposta;
quizTabBtn.onclick = function () {
    cadastroTab.style.display = 'none';
    quizTab.style.display = '';
    cadastroTabBtn.classList.remove('active');
    quizTabBtn.classList.add('active');
    perguntaAtual = 0;
    pontos = 0;
    document.getElementById('reiniciar').style.display = 'none';
    mostrarPergunta();
}