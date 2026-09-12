const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const marvelController = require("../controllers/marvelController");

// Rutas principales y de contacto
router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.post("/contact", mainController.saveContact);
router.get("/admin", mainController.admin);

// Rutas para Marvel (libre criterio)
router.get("/marvel", marvelController.index);
router.post("/marvel", marvelController.saveCharacter);

module.exports = router;