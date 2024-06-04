var database = require("../database/config");

function registrarTentativa(idUsuario, idQuiz, pontos) {
    console.log("ACESSEI O quiz MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTentativa():");

    var instrucaoSql = `
    INSERT INTO tentativa (fkUsuario, fkQuiz, pontuacao, dtHora) VALUES ('${idUsuario}', '${idQuiz}', '${pontos}', default);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    registrarTentativa
}