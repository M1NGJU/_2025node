const express = require('express');

const app = express();

app.post('/riku',(req,res) => {
    res.send('Hello World');
});

app.listen(3000,()=>{
    console.log('서버가 http://localhost:3000 에서 실행됩니다.');
});