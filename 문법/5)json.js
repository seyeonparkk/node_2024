const fs=require('fs')
const path=require('path')

//json 파일 읽어오기
fs.readFile(path.join(__dirname,'external_data.json')
            ,(err,data)=>{
                if(err){
                    console.log('파일 읽는 중 오류 발생',err);
                }

                //읽어온 파일의 텍스트를 data로 넘겨 받는다
                console.log(data)
                //텍스트를 object로 변환
                const jsonObject = JSON.parse(data)
                console.log(jsonObject)

                const jsonString=JSON.stringify(jsonObject)
                console.log(jsonString)
            })