const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
// 두개의 인자값 키와 해당 값 or 특성과 해당값
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
  //   .ejs는 위에 set에서 ejs로 설정했기 때문에 생략가능
  // defalut 경로는 views/ 이므로 생략가능
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { rand: num });
  //   키-값 ======= rand: num
  //   random.ejs 에 키와 그의 값을 전달
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
