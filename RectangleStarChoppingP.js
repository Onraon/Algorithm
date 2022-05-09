//내가 제출한 파일
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); 
    const a = Number(n[0]), b = Number(n[1]); 
    for(let i=0; i<b; i++){
        let str = ""; 
        for(let j=0; j<a; j++){ 
            str = str + "*"
        } 
    console.log(str)
    }
});
//타인의 코드
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)//repeat이라는 메소드 처음 보았다
    for(let i =0; i < b; i++){
        console.log(row)
    }

});
