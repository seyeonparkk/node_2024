function varTest(){
    var v=1;
    {
        var v=2;
        console.log(v);
    }
    console.log(v)
}4

function varTest(){
    let v=1;
    {
        let v=2;
        console.log(v);
    }
    console.log(v)
}
