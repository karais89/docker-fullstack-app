// 필요한 모듈 가져오기
const express = require("express");
const bodyParser = require("body-parser");

// express 서버 생성
const app = express();

// json 형태로 오는 요청의 본문을 해석해줄수있게 등록
app.use(bodyParser.json());

app.listen(5000, () => {
    console.log("애플리케이션이 5000번 포트에서 시작되었습니다.")
})