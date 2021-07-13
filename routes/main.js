const express = require("express");
const router = express.Router() /* de express solo requiero router */

const {index,about} = require("../controllers/mainController");/* .. 2 puntos para salir router entro a controllers y entro a index controller */

router.get("/", index)
router.get("/about", about)

module.exports = router;