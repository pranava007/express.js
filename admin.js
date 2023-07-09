const express = require("express");
const bodyparser = require("body-parser");
const path = require('path');
const rootdir = require('../utile/path')


const router = express.Router();

router.use(bodyparser.urlencoded());

router.get("/add-producte", (req, res, next) => {
 res.sendFile(path.join(rootdir,'views','add-producted.html'))
});

router.post("/add-producte", (req, res, next) => {
  console.log("form date", req.body);
  res.send("<b>Producted submited</b>");
});

module.exports = router;
