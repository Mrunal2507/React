var employee ={
    firstname:"smith",
    lastname:"devis",
    location:{
        id:183724,
        city:"Nashik",
        campus:"MG Road"
    },
    profile:{
        social:{
            linkedIn:"@smith411",
            teitter:"@smith_devis",
        }
    }
};

function show(){
    document.getElementById("pre-1").innerHTML=JSON.stringify(employee,null,3);
}

function remove(){
    delete employee.profile;
    alert("Profile removed");
}

//Basics of js object
console.log(employee);
console.log(employee.location);

employee['experience']="5 years";
console.log(employee);

//handeling operations on js object
console.log(Object.keys(employee)); //[ 'firstname', 'lastname', 'location', 'profile', 'experience' ]
console.log(Object.values(employee)); 

delete employee['firstname'];
console.log(employee);