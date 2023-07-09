const express = require("express");
const app = express();
const path = require('path')

const adminRouter = require("./router/admin");
const shop = require('./router/shop');

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRouter);
app.use(shop)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3030);
