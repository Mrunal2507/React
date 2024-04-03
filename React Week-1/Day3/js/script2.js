function show(target){
    console.log(target.value);
}

function show_city(target){
    alert(target.value);
}

function show_edu(){
    var education = document.getElementById("txt-edu").value;
    console.log(education);
}

function show_exp(){
    var exp = document.getElementById("txt-exp").value;
    console.log(exp);
}

function select_menu(target){
    document.getElementById("p-menu").innerHTML="You selected "+target.value;
}

var selected = new Set();
function select_language(target){
    if (target.checked) {
        selected.add(target.value);
    } else {
        selected.delete(target.value);
    }

    //Array.from converts set to normal array
    document.getElementById("p-language").innerHTML=Array.from(selected);
}