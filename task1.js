function clr()
{
    result.value= " ";
}
function del()
{
     result.value=result.value.slice(0,-1)
}

let result=document.getElementById("inputbox");

let ans=(num)=>
{
    result.value+=num;
}
let Result=()=>
{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("invalid");
    }
}
