function covert(){
   var dist = document.getElementById('kilometer').value;

   var meter = document.getElementById('meter');
   var ans1 = meter.value=dist*1000;
   document.getElementById('c-meter').innerHTML=ans1;

   var centimeter = document.getElementById('centimeter');
   var ans2 = centimeter.value=dist*100*ans1;
   document.getElementById('c-centimeter').innerHTML=ans2;

   var inches = document.getElementById('inches');
   var ans3 = inches.value=dist*2.54*ans2;
   document.getElementById('c-inches').innerHTML=ans3;

   var meter = document.getElementById('feet');
   var ans4 = meter.value=dist*12*ans3;
   document.getElementById('c-feet').innerHTML=ans4;

}

function covert1(){
    var storage = document.getElementById('storage').value;
 
    var megabytes = Number(document.getElementById('megabytes'));
    var ans1 = megabytes.innerHTML=storage*1024;
    document.getElementById('c-megabytes').value = ans1;
 
    var kilobytes = Number(document.getElementById('kilobytes'));
    var ans2 = kilobytes.innerHTML=storage*1024*ans1;
    document.getElementById('c-kilobytes').value = ans2;
 
    var bytes = Number(document.getElementById('bytes'));
    var ans3 = bytes.innerHTML=storage*1024*ans2;
    document.getElementById('c-bytes').value = ans3;
 
    var bits = Number(document.getElementById('bits'));
    var ans4 = bits.innerHTML=storage*1024*ans3;
    document.getElementById('c-bits').value = ans4;
 
 }