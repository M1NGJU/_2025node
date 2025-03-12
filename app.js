const express = require('express');
const app = express();
const PORT = 3000;

// 루트 엔드포인트
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello, Node.js!');
});

// 서버 실행
server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
