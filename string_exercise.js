//string exercise
//what will be the output of the following text "har\""
var name="har\""
console.log(name.length);


//.includes()  function in string
//expand the includes,startswith and endswith functions of string

var sentence="chandana is a good girl";


//sentence.includes()   :  this will tell wether the entered string is present in a sentence or not if present return true ekse return false 
console.log(sentence.includes("good"));   //true
console.log(sentence.includes("bad"));    //false


//to chechk wether the given word is present in a string or not

//sentence :"chandana is a good girl"
//word : "brilliant"
//exercise. :  check wether the word brilliant is present in a sentence or not
//if present  : print the word is present
//if not present. :  print the word is not present

//add and brilliant
console.log(sentence.includes("is brilliant"));
var word="brilliant";
console.log(sentence);
console.log(`the word ${word} is ${sentence.includes(word) ? "present" : "not present"} in a sentence`);

//startsWith()    and     endsWith()


//startswith()
console.log(sentence.startsWith("c"));

//endsWith()
console.log(sentence.endsWith("i"));










//convert the given string CHANDANA IS A GOOD GIRL to lower case

var sentence="CHANDANA IS A GOOD GIRL";
console.log(sentence.toLowerCase());







//sentence   :    please give  Rs 1000
//extract the amount from sentence

var sentence=prompt("enter string  :  ");
var amount=parseInt(prompt("enter the amount to be checked  :   "));
sentence.includes(amount)  ?   console.log(amount ,"yes it is present")   :   console.log("not present");


