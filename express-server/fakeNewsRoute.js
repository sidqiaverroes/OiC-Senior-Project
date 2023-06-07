const express = require("express");
const router = express.Router();
const { createFake, getFake } = require("./fakeNewsController");

router.post("/", createFake);
router.get("/:id", getFake);

module.exports = router;
