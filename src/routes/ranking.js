var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/colocacoes/:idQuiz", function (req, res) {
    rankingController.gerarRanking(req, res);
});

module.exports = router;