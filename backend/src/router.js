const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const mailControllers = require("./controllers/mailControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post("/contact", mailControllers.sendContactMail);

module.exports = router;
