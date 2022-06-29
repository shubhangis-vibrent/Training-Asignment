//without using inbuilt method

let str="I am learning JavaScript";
console.log("Original String = "+str)
var revstr="";
for(let i=str.length-1;i>=0;i--)
{
    revstr=revstr+str.charAt(i);
}
console.log("Reverse whole String = "+revstr);

//with using inbuilt method

var word=str.split(" ");
word.reverse();
word=word.join(" ");
console.log("Reverse Each word of the string  = "+word);


function reverseEachWord(str){
    var newStringArr = str.split(" ");
    for ( var i=0; i<newStringArr.length; i++){
      newStringArr[i] = newStringArr[i].split("");
      newStringArr[i].reverse();
      newStringArr[i] = newStringArr[i].join("");
    }
    newStringArr = newStringArr.join(" ");
    return newStringArr;
};
var someStr = "I am learning JavaScript";
console.log("Reverse Each s word = "+reverseEachWord(someStr));