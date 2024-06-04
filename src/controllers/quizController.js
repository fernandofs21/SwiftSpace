var quizModel = require("../models/quizModel");

function registrarTentativa(req, res) {
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


    quizModel.registrarTentativa(idUsuario, idQuiz, pontos)
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

module.exports = {
    registrarTentativa,
};
