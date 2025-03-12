const letter = ['a','b','c','d']

// 기본 for
for(let i=0; i<letter.length; i++){
    console.log(letter[i]);
}

//foreach
letter.forEach(f => console.log(f));

for(const f of letter){
    console.log(f);
}