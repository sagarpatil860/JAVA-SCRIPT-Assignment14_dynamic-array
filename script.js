console.log("script connection succesful");
let x=new Array;
let clickcount=0;

x=[];

document.getElementById("btnadd").addEventListener("click",funarray);
function funarray(){
    ++clickcount;
    console.log("click count is:"+clickcount);

    console.log("inside array cration")
    let z =parseInt(document.getElementById("tx").value)
    console.log("value passed in text field is :"+z);
    console.log("typeof value passed:"+typeof(z));
    x.push(addobj(z));
    for(let i=0; i<clickcount; i++){
    console.log(i+" index object name is"+x[i].name           +",game is :"+x[i].game);
    }
    
    console.log("script end")

}

function addobj(g){
    console.log("inside array creation")
    console.log(g);
    let a={
        name:g,
        game:g+1,
    }
    console.log("object created as:"+a.name);
    console.log(typeof(a));
    return(a);
    
}
document.getElementById("btnft").addEventListener("click",fetchdata);
function fetchdata(){
    let fetchindex=parseInt(document.getElementById("ft").value);
    document.getElementById("cont").innerHTML=x[fetchindex].name;
}

