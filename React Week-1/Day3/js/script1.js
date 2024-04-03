function addition(){
    var x= Number(document.getElementById("txt-n1").value);
    var y= Number(document.getElementById("txt-n2").value);

    var ans= x+y;
    alert("Addition: "+ans);
}

function substraction(){
    var x= Number(document.getElementById("txt-n1").value);
    var y= Number(document.getElementById("txt-n2").value);

    var ans= x-y;
    alert("Substraction: "+ans);
}

function division(){
    var x= Number(document.getElementById("txt-n1").value);
    var y= Number(document.getElementById("txt-n2").value);

    var ans= x/y;
    alert("Division: "+ans);
}

function multiplication(){
    var x= Number(document.getElementById("txt-n1").value);
    var y= Number(document.getElementById("txt-n2").value);

    var ans= x*y;
    alert("Multiplication: "+ans);
}