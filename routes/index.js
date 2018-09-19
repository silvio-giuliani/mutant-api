const express = require("express");
const router = express.Router();

router.get("/teste", (req, res) => {
  res.json({
    ok: true,
    data: "Testes"
  });
});

module.exports = router;
