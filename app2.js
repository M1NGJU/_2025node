const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config()
const app = express();

app.set('view engine', 'ejs');
//__dirname : 현재 디렉토리의 절대경로
// path.join : 경로지정자(/ or \)를 운영체제에 맞추어 줌
app.set('views', path.join(__dirname, 'views'));  


// mysql 연동
const db = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password:process.env.db_password,
  database: process.env.db_name
});

db.connect((err) => {
  if(err){
    console.error('Mysql 연결 실패:', err);
    return;
  }
  console.log('Mysql에 연결되었습니다.')
})

app.get('/', (req, res) => {

});

app.get('/travel', (req, res) => {
  const query = 'SELECT id,name FROM travelList';
  db.query(_query,(err,results)=>{
    if(err) {
      console.error('데이터베이스 쿼리 실패: ',err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const travelList = results;
    res.render('travel', {travelList});
  });
});

app.get('/travel/:id', (req,res)=>{
  const travelId = req.params.id;
  const query = 'select * from travellist where id =?';
  db.query(query,[travelId],(err,results)=>{
    if(err) {
      console.error('데이터베이스 쿼리 실패 : ', err);
      res.status(500).send('Internal Sever Error');
      return;
    }
    if(results.length===0){
      res.status(404).send('여행지를 찾을 수 없습니다.');
      return;
    }
    const travel = results[0];
    res.render('travelDetail',[travel]);
  })
})

app.use((req, res) => {
  DBWLKS

});

app.listen(3001, () => {
  console.log('서버가 http://localhost:3001 에서 실행 중입니다.');
});