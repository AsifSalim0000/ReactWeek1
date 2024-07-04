const ar={
    name:'abin',
    age:32,
    place:'kollam',
}


function abin(greet){
    console.log(greet+ ar.name);
}
function abin2(greet){
    console.log(greet+" "+ this.name);
}
abin(greet="greet")
abin2.call(ar,"Hello")