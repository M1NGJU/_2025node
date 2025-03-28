const express = require('express');

const app = express();

app.use(express.json());

 app.get('/kuri', (req,res) =>{
    res.status(200).send('Get kuri');
 });

//라우팅 설정
app.get('/riku/:sakuya',(req,res) => {
    const person = req.params.person;
    res.status(200).send(person);
});

app.listen(3000,()=>{
    console.log('서버가 http://localhost:3000 에서 실행됩니다.');
});