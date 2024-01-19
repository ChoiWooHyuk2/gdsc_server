//라이브러리 첨부(express)
const express = require("express");
//객체화?
const app = express();
//css 같은거 사용할려면
app.use(express.static(__dirname + "/public"));

//서버 열기(포트 8080,)
app.listen(8080, function () {
  console.log("listening on 8080");
});

//ex 누군가 /pet으로 방문하면 pet 관련된 안내문 띄우기

//테스트용
app.get("/pet", function (요청, 응답) {
  응답.send("펫 사이트");
});

app.get("/beauty", function (요청, 응답) {
  응답.send("뷰티 사이트");
});

app.get("/", function (요청, 응답) {
  응답.sendFile(__dirname + "/index.html");
});

app.get("/write", function (요청, 응답) {
  응답.sendFile(__dirname + "/write.html");
});
