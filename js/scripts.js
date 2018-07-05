$(document).ready(function(){
  $('button').click(function(){

    //  takes user inout and stores it in a variable
    var input = prompt('enter text to cipher here')

    //creatres a function that completes the code cipher
    var capRevFirstLastLetter = function(string){

      //takes first and last letter of user input and capitalizes them then reverses them
      var firstLastCapitalized = string.charAt(string.length-1).toUpperCase() + string.charAt(0).toUpperCase();

      // prints out result on screen
      console.log(firstLastCapitalized);

      //adds original string and capitalised reversed first and last letter
      var originalPlusReversed = string + firstLastCapitalized;

      console.log(originalPlusReversed)

      //takes length of original string diveides it by two and gets the char at index of the division result. Adds that character to the beginning of the new string that we have at this point
      var finalResult = string.charAt(string.length/2) + originalPlusReversed;
      console.log(finalResult)

      console.log((finalResult.split("")));

      console.log(['a','b','c','d'].join(''));

      //splits and reverses the new string then puts it back together
      var reverseFinalResult = finalResult.split("").reverse().join('')
      console.log(reverseFinalResult);

      return reverseFinalResult
    };
    var reversedOutput = capRevFirstLastLetter(input)

    alert(reversedOutput)
  });
});


// string    **** s trin g

// G+trin+S


// s tringadfas d    .length  = 12
