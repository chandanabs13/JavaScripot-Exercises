//write a program to print "try again" until the user guesses the correct number

var correct_number=prompt("enter the number  :  ");
var number=prompt("guess the  number : ");

while(1)
  {
    if(correct_number==number)
    console.log("great you guessed it");
    else
      console.log("try again");
    break;
  }

