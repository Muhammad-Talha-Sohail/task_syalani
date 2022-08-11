// function : 1 Reverse the number
function rev(){
    var x= document.getElementById("q1").value;
    console.log(x);
    var e=x.toString();
    const s = e.split("");
    var p=s.reverse();
    var q = p.join('');
    document.getElementById("fn1").innerText= q;
}

// function : 2 Check the word Palindrome or not
function palindrome(){
    var string1=document.getElementById("q2").value;
    if(string1===""){
        var re ="No input";
        document.getElementById("fn2").innerText= re;  
    }
 else{
var arr_string = string1.split("");
var reverse_arr_string =arr_string.reverse();
var string2 =  reverse_arr_string .join('');

if (string1===string2){
    
    var re="it is palindrome";
     document.getElementById("fn2").innerText = re;
}
else{
    var re ="it is  not palindrome";
     document.getElementById("fn2").innerText= re;
}
 }
}


// Function : 3 Generates the combination of word letters
function combination(){
    var word=document.getElementById("q3").value
    var lenword = word.length;
    var answer = [];
    var index = 0;

    while(index < lenword){
        var char = word.charAt(index);
        var demo;
        var arr = [char];

        for(demo in answer) {
            arr.push(""+answer[demo]+char);
        }
        answer = answer.concat(arr);

        index++;
    }

   document.getElementById("fn3").innerText= answer;
}


// Function : 4 return the word in alphabetical order
function alphabeticalorder(){
 var string1 = document.getElementById("q4").value

 
var arr_string = string1.split('');
var arr_sort= arr_string.sort();
var string2 = arr_sort.join('');

 document.getElementById("fn4").innerText = string2;
      
}


// Function : 5 Transform the first letter in Upper case
function firstletter(a){
   var string1=a;
  
   var array1 = string1.split(' ');
   var newarray1 = [];
     
   for(var x = 0; x < array1.length; x++){
       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
   }
   var s = newarray1.join(' ');
   document.getElementById("fn5").innerText = s; 
}


// Function : 6 identify the longest string in sentence
function longestword(a){
    var str =a;

    var arr =str.split(' ');
 
    var longestword="";

    for( var i = 0; i< arr.length ; i++ )
    {
        if(arr[i].length>longestword.length)
        {
           longestword = arr[i];
        }
    }
    document.getElementById("fn6").innerText=longestword;
}


// Function : 7 Counts the vowel
function vowel(a){
    
    var word=a;
    arr=word.split('');
  var vowellist=0;
    for ( var i=0;i<word.length ;i++){
        if(arr[i]==="a" ||arr[i]==="e" ||arr[i]==="o" ||arr[i]==="i" ||arr[i]==="u" || 
        arr[i]==="A" ||arr[i]==="E" ||arr[i]==="I" ||arr[i]==="O" ||arr[i]==="U" )
        {
          vowellist +=1;
        }

    }
   
    document.getElementById("fn7").innerText=vowellist;

}


// Function : 8  identify the number is prime number or not 
function primenumber(a){

    var number =a;
 if (number == 1 || number < 1)
    {
        document.getElementById("fn8").innerText=" give a number greater than 1";
    }
    else if(number == 2)
    {
        document.getElementById("fn8").innerText="it's prime number";
      
    }
    else{
        for(var i = 2; i<number;i++)
        {
            if(number%i===0)
            {
                document.getElementById("fn8").innerText="Not a prime number";
                break;
            }
            else{
                document.getElementById("fn8").innerText="it's prime number";
                break;
            }
        }
    } 
    
}


function data_type(value)
{
var dtypes =  [Function, RegExp, Number, String, Boolean, Object];
    
if (typeof value === "object" || typeof value === "function") 
    {
     for ( var element = 0; element < dtypes.length; element++)
     {
            if (value instanceof dtypes[element])
            {
                return dtypes[element];
            }
      }
    }
    
    return typeof value;
}
console.log(data_type(12));
console.log(data_type('w3resource'));
console.log(data_type());
console.log(data_type(data_type));
console.log(data_type(false));


// Function : 10 find the second lowest and highest number respectively  
function secondnumber(){
    var number=document.getElementById("q10").value;
    var arr_number=number.split('');
    var sort_arr=arr_number.sort();
    // alert(sort_arr);
    var join_arr= sort_arr.join('')
    let second_lowest = join_arr.charAt(1);
    let second_highest = join_arr.charAt( join_arr.length-2);
    document.getElementById("sort_array").innerText=sort_arr;
    document.getElementById("fn10_sl").innerText=second_lowest;
    document.getElementById("fn10_sh").innerText=second_highest;
    // ( "second_lowest : "+ second_lowest+"\n" +"second_highest : "+second_highest);
}