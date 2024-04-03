var sample=["hello", 129, -4, "110", true, [71,72,73,74], "welcome"];
console.log(sample[0]);
console.log(sample[sample.length-1]);
console.log(typeof(sample));
console.log(typeof(sample[1]));
console.log(sample[5][1]);
console.log(sample.splice(0,2));    //Remove data from sample and return what you are removing
console.log(sample.splice(3,2));    //"3" is the index and "2" is the number of objects 
console.log(sample);
sample.sort();  //Natural ascending order (asci code)
console.log(sample);
sample.pop();   //Removes last object
console.log(sample);
sample.pop();
console.log(sample);
sample.reverse();   //reverse the entire object
console.log(sample);