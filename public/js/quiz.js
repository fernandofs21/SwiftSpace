var perguntas_quiz = [
    {
        pergunta: "Qual é a data de nascimento de Taylor Swift?",
        alternativas: ["13 de Dezembro de 1989", "31 de Dezembro de 1989", "13 de Novembro de 1989", "31 de Novembro de 1989"],
        resposta: 0,
        dificuldade: "Fácil" 
    }, 
    {
        pergunta: "De qual música é a seguinte frase: 'When you think happiness, I hope you think that little black dress'",
        alternativas: ["Teardrops On My Guitar", "happiness", "Tim McGraw", "Crazier"],
        resposta: 2,
        dificuldade: "Fácil"
    },
    {
        pergunta: "Pra qual cidade Taylor e sua família se mudaram quando ela tinha 14 anos?",
        alternativas: ["Pensilvânia", "Nova Iorque", "Nashville", "Los Angeles"],
        resposta: 2,
        dificuldade: "Difícil"
    },
    {
        pergunta: "Quantos gatos Taylor tem?",
        alternativas: ["1", "2", "3", "4"],
        resposta: 2,
        dificuldade: "Média"
    },
    {
        pergunta: "Qual é o nome do terceiro álbum de estudio de Taylor?",
        alternativas: ["Fearless", "Speak Now", "Red", "1989"],
        resposta: 1,
        dificuldade: "Fácil"
    }, 
    {
        pergunta: "Complete a letra: 'Is this the end of all the endings? My broken bones are ...'",
        alternativas: ["Fading", "Hurting", "Dazzling", "Mending"],
        resposta: 3,
        dificuldade: "Média"
    },
    {
        pergunta: "Qual é o álbum mais longo de Taylor?",
        alternativas: ["Red (Taylor's Version)", "The Tortured Poets Department: The Anthology", "Speak Now (Taylor's Version)", "Midnights (The Til Dawn Edition)"],
        resposta: 0,
        dificuldade: "Média"
    }
];

var pergunta_atual = 0;
var pontos = 0;

function embaralhar() {
    for (var index = perguntas_quiz.length - 1; index > 0; index--) {
        var novoIndex = Math.floor(Math.random() * (index + 1));
        [perguntas_quiz[index], perguntas_quiz[novoIndex]] = [perguntas_quiz[novoIndex], perguntas_quiz[index]];
    }
}

function mostrarPergunta() {

    iniciar.style.display = "none";
    perguntas.style.display = "flex";   


    numero_pergunta.innerHTML = `${pergunta_atual + 1}.`
    dificuldade_pergunta.innerHTML = `Dificuldade: ${perguntas_quiz[pergunta_atual].dificuldade}`
    div_pergunta.innerHTML = `${perguntas_quiz[pergunta_atual].pergunta}`;
    alt1.innerHTML = `${perguntas_quiz[pergunta_atual].alternativas[0]}`;
    alt2.innerHTML = `${perguntas_quiz[pergunta_atual].alternativas[1]}`;
    alt3.innerHTML = `${perguntas_quiz[pergunta_atual].alternativas[2]}`;
    alt4.innerHTML = `${perguntas_quiz[pergunta_atual].alternativas[3]}`;
}

function verificar(selected) {

    var correta = perguntas_quiz[pergunta_atual].resposta;
    var selectedElement = document.getElementById(`alt${selected + 1}`);
    var corretaElement = document.getElementById(`alt${correta + 1}`);

    if (selected === correta) {
        selectedElement.classList.add('correto');
        pontos++;
    } else {
        selectedElement.classList.add('errado');
        corretaElement.classList.add('correto');
    }

    setTimeout(() => {
        pergunta_atual++;

        if(pergunta_atual < perguntas_quiz.length) {
            selectedElement.classList.remove('correto');
            selectedElement.classList.remove('errado');
            corretaElement.classList.remove('correto');
            mostrarPergunta();
        } else {
            pergunta_atual = 0;
            
            iniciar.style.display = "flex";
            perguntas.style.display = "none";

            if (pontos > (perguntas_quiz.length/2)) {
                div_pontos.innerHTML = `PARABÉNS! VOCÊ ACERTOU ${pontos} de ${perguntas_quiz.length}`
            } else {
                div_pontos.innerHTML = `VOCÊ ACERTOU APENAS ${pontos} de ${perguntas_quiz.length}, TENTE NOVAMENTE!`
            }
            selectedElement.classList.remove('correto');
            selectedElement.classList.remove('errado');
            corretaElement.classList.remove('correto');
            pontos = 0
            embaralhar()
        }
    }, 2000)

}

embaralhar()
mostrarPergunta();