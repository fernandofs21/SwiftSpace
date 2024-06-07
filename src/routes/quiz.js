var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/registrarTentativa", function (req, res) {
    quizController.registrarTentativa(req, res);
});

router.get("/contarTentativas/:idUsuario/:idQuiz", function (req, res) {
    quizController.contarTentativas(req, res);
});

module.exports = router;
