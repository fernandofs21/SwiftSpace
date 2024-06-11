var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/pontuacao/:idUsuario/:idQuiz/:idTentativa", function (req, res) {
    medidaController.buscarPontuacao(req, res);
})

router.get("/albuns", function (req, res){
    medidaController.buscarAlbuns(req, res);
})

module.exports = router;