var quizModel = require("../models/quizModel");

function registrarTentativa(req, res) {
    var idTentativa = req.body.idTentativa;
    var idUsuario = req.body.idUsuario;
    var idQuiz = req.body.idQuiz;
    var pontos = req.body.pontos;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
        return;
    }
    if (idQuiz == undefined) {
        res.status(400).send("O id do quiz está indefinido!");
        return;
    }
    if (pontos == undefined) {
        res.status(400).send("A pontuação está indefinida!");
        return;
    }
    if (idTentativa == undefined) {
        res.status(400).send("O id da tentativa está indefinido");
        return;
    }


    quizModel.registrarTentativa(idTentativa, idUsuario, idQuiz, pontos)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao registrar a tentativa! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function contarTentativas(req, res) {
    var idUsuario = req.params.idUsuario;
    var idQuiz = req.params.idQuiz

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está indefinido!");
        return;
    } else if (idQuiz == undefined) {
        res.status(400).send("O id do quiz está indefinido!");
        return;
    }

    quizModel.contarTentativas(idUsuario, idQuiz)
            .then(
                function (resultado) {
                    var tentativas = resultado[0].tentativas || 0;
                    res.json({ tentativas: tentativas });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao verificar as tentativas! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    registrarTentativa,
    contarTentativas
};
