function updateInput(value) {
    var inputBox1 = document.getElementById('inputBox1');
    var inputBox2 = document.getElementById('inputBox2');
    
    if (inputBox1.value === '') {
      inputBox1.value = value;
    } else if (inputBox2.value === '') {
      inputBox2.value = value;
    }
}

function resetInputs() {
    var inputBox1 = document.getElementById('inputBox1');
    var inputBox2 = document.getElementById('inputBox2');
    var answer = document.getElementById('p-ans');
    
    inputBox1.value = '';
    inputBox2.value = '';
    answer.innerText = 'Null';
}

function addition(){
    var x= Number(document.getElementById("inputBox1").value);
    var y= Number(document.getElementById("inputBox2").value);

    var ans= x+y;
    document.getElementById("p-ans").innerHTML=ans;
}


function substraction(){
    var x= Number(document.getElementById("inputBox1").value);
    var y= Number(document.getElementById("inputBox2").value);

    var ans= x-y;
    document.getElementById("p-ans").innerHTML=ans;
}

function division(){
    var x= Number(document.getElementById("inputBox1").value);
    var y= Number(document.getElementById("inputBox2").value);

    var ans= x/y;
    document.getElementById("p-ans").innerHTML=ans;
}

function multiplication(){
    var x= Number(document.getElementById("inputBox1").value);
    var y= Number(document.getElementById("inputBox2").value);

    var ans= x*y;
    document.getElementById("p-ans").innerHTML=ans;
}