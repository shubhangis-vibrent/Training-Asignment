

function Addition()
{
    let n1=document.getElementById("num1").value;
    let n2=document.getElementById("num2").value;
    console.log(n1+" "+n2)
    let sum=parseInt(n1)+parseInt(n2);
    alert("Addition = "+sum);
}