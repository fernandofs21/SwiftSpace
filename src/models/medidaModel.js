var database = require("../database/config");

function buscarPontuacao(idUsuario, idQuiz, idTentativa) {
    
        var instrucaoSql = `SELECT 
            pontuacao as 'acertos',
            (SELECT qtdPerguntas from quiz WHERE idQuiz = ${idQuiz}) - pontuacao as 'erros'
            FROM tentativa 
            WHERE fkUsuario = ${idUsuario} 
            AND fkQuiz = ${idQuiz} 
            AND idTentativa = ${idTentativa}`;
    
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    
}

module.exports = {
    buscarPontuacao
}
