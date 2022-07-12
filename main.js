

let main=document.getElementById('main');
let complete=document.getElementById('complete');
const a=[
    {   
        id:"gsjsjsks",
        question:"1",
        opt:["arr","r","c","y"],
        ans:"arr", 
    },
    {   
        id:"dkjjssjio",
        question:"2",
        opt:["arr","r","c","t "],
        ans:"arr",
    },
    {  
        id:"skjiewww",
        question:"3",
        opt:l=["arr","r","c","t"],
        ans:"arr",
    }
]


let i=0;
function mai(){
   main.innerHTML=
   `    <h1>${a[i].question}</h1>
<ul id="${a[i]}">

   <input  type="radio" <li> ${a[i].opt[0]}</li></input>
   
   <input type="radio" <li> ${a[i].opt[1]}</li></input>
   
   <input type="radio" <li> ${a[i].opt[2]}</li></input>
   
   <input type="radio" <li>  ${a[i].opt[3]}</li></input>
    
</ul>
<button onclick="incre()" id="submit-btn">submit</button>

`
}
function incre(){
    
    

    if(i < a.length){
       mai();
    }
    else{
      complete.innerHTML= `<button><a href="new.html" target="_blank">completed</a></button>`
    }
    i=i+1; 
}

incre();

console.log(a[i].id.value)