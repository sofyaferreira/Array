var frutas = []
var f

do{
    f = prompt("Digite a fruta")
    frutas.push(f)
}while(f != null)

alert(frutas)

for(var i=0; i < frutas.length-1; i++){
    if(f != " "){
    document.write("<h2>"+frutas[i]+"<h2>")
    }else{
    break
}
} 


