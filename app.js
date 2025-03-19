const express = require('express');

const app = express();

app.use(express.json());

//라우팅 설정
app.post('/riku',(req,res) => {
    // 클라이언트에게 응답 내용
    res.send(req.body);
});

app.listen(3000,()=>{
    console.log('서버가 http://localhost:3000 에서 실행됩니다.');
});