var database = require("../database/config");

function gerarRanking(idQuiz) {
    console.log("ACESSEI O quiz MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function gerarRanking():");

    var instrucaoSql = `
        SELECT u.nome, t1.pontuacao, DATE_FORMAT(t1.dtHora, "%d-%m-%y %H:%m:%S") as dia FROM tentativa t1 JOIN usuario u ON t1.fkUsuario = u.idUsuario WHERE t1.fkQuiz = ${idQuiz} 
        AND t1.pontuacao = (SELECT MAX(t2.pontuacao) FROM tentativa t2 WHERE t2.fkUsuario = t1.fkUsuario AND t2.fkQuiz = ${idQuiz})
        AND t1.dtHora = (SELECT MAX(t3.dtHora) FROM tentativa t3 WHERE t3.fkUsuario = t1.fkUsuario AND t3.fkQuiz = ${idQuiz} AND t3.pontuacao = t1.pontuacao) order by t1.pontuacao desc limit 7;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    gerarRanking
}