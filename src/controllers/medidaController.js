var medidaModel = require("../models/medidaModel");

function buscarPontuacao(req, res) {
    
        var idUsuario = req.params.idUsuario;
        var idQuiz = req.params.idQuiz;
        var idTentativa = req.params.idTentativa;
    
        console.log(`Recuperando pontuação`);
    
        medidaModel.buscarPontuacao(idUsuario, idQuiz, idTentativa)
        .then(resultado => {
            console.log("Resultado da consulta:", resultado); // Adicione este log para ver o resultado da consulta
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(erro => {
            console.log("Houve um erro ao buscar a pontuação.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarPontuacao
}