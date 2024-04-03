var users_list=["Smith", "James", "Peter" ];

function init(){
    document.getElementById("p-users").innerHTML=users_list;
}

function add_user(){
    var username = document.getElementById("txt-user").value;
    users_list.push(username);

    init();
}

function remove_user(){
    var username = document.getElementById("txt-user").value;
    var pos = users_list.indexOf(username);
    if(pos==-1){
        alert("User not found");
    }
    else{
        users_list.splice(pos,1);
        init();
        alert("Removed");
    }
}

function replace_users(){
    var username = document.getElementById("txt-user").value;
    var pos = users_list.indexOf(username);

    if(pos==-1){
        alert("user not found");
    }
    else{
        var users_input=prompt("Enter new username");
        users_list[pos]=users_input;
        init();
    }
}