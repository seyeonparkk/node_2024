const cathy={
    name:"cathy",
    //속성 이름은 따옴표 처리 안해도 된다
    age:19,
    skills:["자바스크립트","파이썬","코블"]
}
console.log(cathy)
console.log(cathy.name)
console.log(cathy["name"])

cathy["취미"]="독서"

delete cathy.취미
console.log(cathy)