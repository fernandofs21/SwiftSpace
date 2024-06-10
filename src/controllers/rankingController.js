var rankingModel = require('../models/rankingModel');

function gerarRanking(req, res) {
    var idQuiz = req.params.idQuiz;

    rankingModel.gerarRanking(idQuiz)
    .then(resultado => {
        console.log("Resultado da consulta:", resultado); // Adicione este log para ver o resultado da consulta
        res.json(resultado); // Enviar o resultado da consulta como resposta
    })
    .catch(erro => {
        console.log("Houve um erro ao buscar o ranking.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    gerarRanking
}