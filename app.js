const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Подключаем статику
app.use(express.static(path.join(__dirname, "public")));

// Подключаем views(hbs)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Отображаем главную страницу с использованием шаблона "index.hbs"
app.get("/", function (req, res) {
  res.render("index", req.query);
});

app.get("/users", function (req, res) {
  res.render("users", req.query);
});
app.get("/basket", function (req, res) {
  res.render("basket", req.query);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on " + port));
app.post(`/send,function(req,res){
  console.log('Получаем данные Post запрос',req.body)res.end()
}`);
app.post("/send", function (req, res) {
  console.log("Получаем данные post запрос", req.body), res.end();
});
