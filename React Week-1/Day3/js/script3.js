function findmax(){
    var x=Number(document.getElementById("num-x").value);
    var y=Number(document.getElementById("num-y").value);
    var z=Number(document.getElementById("num-z").value);

    var ref = document.getElementById("p-ans1");
    if(x>y && x>z){
        ref.innerHTML=x+" is max";
    }
    else if(y>z){
        ref.innerHTML=y+" is max";
    }
    else{
        ref.innerHTML=z+" is max";
    }
}

function count_addition(){
    var a=Number(document.getElementById("txt-1").value);
    var b=Number(document.getElementById("txt-2").value);
    var c=Number(document.getElementById("txt-3").value);
    var d=Number(document.getElementById("txt-4").value);
    var e=Number(document.getElementById("txt-5").value);

    var user_input=Number(document.getElementById("user-input").value);

    //combinations: (a+b) (a+b+c) (a+b+c+d+e)...and so on

    var count=0;
    //Method 1: check 10 if conditions and make count
    //Method 2: using loop

    var x=[a,b,c,d,e];
    for(var i=0;i<x.length;i++){
        for(var j=i+1;j<x.length;j++){
            if((x[i]+x[j])==user_input){
                count++;
            }
        }
    }

    document.getElementById("p-ans2").innerHTML=count;
}