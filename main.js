function getparagraph1(){
    var paras = [];
    for (var i=1;i<=4;i++){
        paras.push(document.getElementById("p"+i).value);
    
    }
    
    document.getElementById("gp1").innerHTML=paras.join(" . ");
}

function getparagraph2(){
    var paras = [];
    for (var i=1;i<=4;i++){
        paras.push(document.getElementById("pr"+i).value);
    
    }
    
    document.getElementById("gp2").innerHTML=paras.join(" . ");
}