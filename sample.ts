// type annotation - declaring a variable with type
let s:number=123
// s="123"
let k="hello"       //type inference- from the value it detects the type
// k=100
// let will be converted to var in ES5
function add(x:number,y:number){
    return x+y
}
add(10,"b")