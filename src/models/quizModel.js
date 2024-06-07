var database = require("../database/config");

function registrarTentativa(idTentativa, idUsuario, idQuiz, pontos) {
    console.log("ACESSEI O quiz MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTentativa():");

    var instrucaoSql = `
    INSERT INTO tentativa (idTentativa, fkUsuario, fkQuiz, pontuacao, dtHora) VALUES ('${idTentativa + 1}', '${idUsuario}', '${idQuiz}', '${pontos}', default);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarTentativas(idUsuario, idQuiz) {
    console.log("ACESSEI O quiz MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function contarTentativas():");

    var instrucaoSql = `
    SELECT COUNT(*) AS tentativas FROM tentativa WHERE fkUsuario = ${idUsuario} AND fkQuiz = ${idQuiz};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarTentativa,
    contarTentativas
}